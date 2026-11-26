// Realistic look for the 3D worlds (Mars Colony and Mars Adventure):
// - real-world surface textures (made by scripts/world/make-textures.py), wrapped on with
//   triplanar mapping so they never stretch, whatever the shape or size of a part;
// - Mars dust that settles on top of everything and splashes up the bottom of walls;
// - light from the sky itself (image-based lighting), so metal and glass reflect the sky;
// - natural rocks: fractured, faceted boulders instead of smooth blobs.
// On low quality nothing is downloaded and the plain materials are used.
import * as THREE from 'three'
import {fbm} from './util.js'

const SETS = ['regolith', 'rock', 'panel', 'metal', 'printed', 'fabric', 'cloth', 'plate', 'rubber', 'soil', 'fur', 'solar']
const DETAIL = new Set(['regolith', 'panel', 'metal', 'fabric', 'cloth', 'plate', 'rubber', 'fur'])
const DETAIL_GAIN = 1 / 0.75 // detail textures average 0.75; this keeps each material's own colour

const textures = {}
let grime = null
export const realism = {
  enabled: false,
  // Shared by every dressed material, so a dust storm can coat the whole base at once.
  dustColor: {value: new THREE.Color('#b07a5c')},
  dustAmount: {value: 1},
}

export async function loadRealism(renderer, {quality = 'high', base = new URL('./assets/tex/', import.meta.url)} = {}) {
  if (quality === 'low' || realism.enabled) return realism.enabled
  const loader = new THREE.TextureLoader()
  const aniso = Math.min(quality === 'high' ? 8 : 4, renderer.capabilities.getMaxAnisotropy())
  const load = (file, srgb) => loader.loadAsync(new URL(file, base).href).then(t => {
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace
    t.anisotropy = aniso
    return t
  })
  try {
    const jobs = SETS.map(async name => {
      const [albedo, normal] = await Promise.all([load(`${name}_albedo.webp`, true), load(`${name}_normal.webp`, false)])
      textures[name] = {albedo, normal}
    })
    jobs.push(load('grime.webp', false).then(t => { grime = t }))
    await Promise.race([Promise.all(jobs), new Promise((_, no) => setTimeout(() => no(new Error('slow')), 25000))])
    realism.enabled = true
  } catch {
    realism.enabled = false
  }
  return realism.enabled
}

// --- the shader add-on -----------------------------------------------------------------
const VERT_DECL = /* glsl */`
varying vec3 vRPos;
varying vec3 vRNrm;
varying float vRLow;
#ifdef R_OBJECT
varying vec3 vRX;
varying vec3 vRY;
varying vec3 vRZ;
#endif`

const VERT_MAIN = /* glsl */`
{
  vec4 rp = vec4(transformed, 1.0);
  vec3 rn = objectNormal;
  #ifdef FLIP_SIDED
    rn = -rn;
  #endif
  #ifdef USE_INSTANCING
    rp = instanceMatrix * rp;
    rn = mat3(instanceMatrix) * rn;
  #endif
  vRLow = rp.y;
  #ifdef R_OBJECT
    vRPos = rp.xyz;
    vRNrm = rn;
    vRX = normalMatrix[0];
    vRY = normalMatrix[1];
    vRZ = normalMatrix[2];
  #else
    vec4 rw = modelMatrix * rp;
    vRPos = rw.xyz;
    vRNrm = normalize(mat3(modelMatrix) * rn);
  #endif
}`

const FRAG_DECL = /* glsl */`
uniform sampler2D rAlbedo;
uniform sampler2D rNormal;
uniform sampler2D rGrime;
uniform float rScale;
uniform float rGain;
uniform float rNormalScale;
uniform float rDust;
uniform float rLow;
uniform float rRoughMix;
uniform vec3 rDustColor;
uniform float rDustAmount;
#ifdef R_TERRAIN
uniform sampler2D rAlbedo2;
uniform sampler2D rNormal2;
uniform float rScale2;
#endif
varying vec3 vRPos;
varying vec3 vRNrm;
varying float vRLow;
#ifdef R_OBJECT
varying vec3 vRX;
varying vec3 vRY;
varying vec3 vRZ;
#endif
vec3 rNormalW;
vec4 rAlb;
vec3 rGr;
float rDustF;
vec3 rUnpack(vec3 t) { return t * 2.0 - 1.0; }
// Triplanar sample with the "whiteout" normal blend (Ben Golus), returns the bent world normal.
vec3 rTriNormal(sampler2D tex, vec3 p, vec3 n, vec3 w, float strength) {
  #ifdef R_PLANAR
    vec3 ty = rUnpack(texture2D(tex, p.xz).xyz);
    ty.xy *= strength;
    ty = vec3(ty.xy + n.xz, abs(ty.z) * n.y);
    return normalize(ty.xzy);
  #else
    vec3 tx = rUnpack(texture2D(tex, p.zy).xyz);
    vec3 ty = rUnpack(texture2D(tex, p.xz).xyz);
    vec3 tz = rUnpack(texture2D(tex, p.xy).xyz);
    tx.xy *= strength; ty.xy *= strength; tz.xy *= strength;
    tx = vec3(tx.xy + n.zy, abs(tx.z) * n.x);
    ty = vec3(ty.xy + n.xz, abs(ty.z) * n.y);
    tz = vec3(tz.xy + n.xy, abs(tz.z) * n.z);
    return normalize(tx.zyx * w.x + ty.xzy * w.y + tz.xyz * w.z);
  #endif
}
vec4 rTri(sampler2D tex, vec3 p, vec3 w) {
  #ifdef R_PLANAR
    return texture2D(tex, p.xz);
  #else
    return texture2D(tex, p.zy) * w.x + texture2D(tex, p.xz) * w.y + texture2D(tex, p.xy) * w.z;
  #endif
}
// the same, heavily blurred (a low mip level): only the big light and dark patches remain
vec4 rTriSoft(sampler2D tex, vec3 p, vec3 w) {
  #ifdef R_PLANAR
    return texture(tex, p.xz, 6.0);
  #else
    return texture(tex, p.zy, 6.0) * w.x + texture(tex, p.xz, 6.0) * w.y + texture(tex, p.xy, 6.0) * w.z;
  #endif
}`

const FRAG_SAMPLE = /* glsl */`
{
  vec3 n = normalize(vRNrm);
  vec3 w = pow(abs(n), vec3(4.0));
  w /= (w.x + w.y + w.z);
  vec3 p = vRPos * rScale;
  rAlb = rTri(rAlbedo, p, w);
  rNormalW = rTriNormal(rNormal, p, n, w, rNormalScale);
  #ifdef R_TERRAIN
    // a second, larger copy hides the repeat; steep slopes show bare rock
    vec3 p2 = vRPos * rScale * 0.071 + vec3(0.37, 0.0, 0.71);
    vec4 big = rTriSoft(rGrime, p2, w);
    rAlb.rgb *= 0.78 + 0.44 * big.r;
    float rocky = 1.0 - smoothstep(0.62, 0.82, n.y);
    if (rocky > 0.001) {
      vec3 pr = vRPos * rScale2;
      vec4 ra = rTri(rAlbedo2, pr, w);
      rAlb = mix(rAlb, vec4(ra.rgb * 1.6, ra.a), rocky);
      rNormalW = normalize(mix(rNormalW, rTriNormal(rNormal2, pr, n, w, 1.0), rocky));
    }
  #endif
  vec3 pg = vRPos * 0.25;
  rGr = rTri(rGrime, pg, w).rgb;
  diffuseColor.rgb *= rAlb.rgb * rGain;
}`

const FRAG_DUST = /* glsl */`
{
  float top = smoothstep(0.3, 0.92, rNormalW.y);
  float low = (1.0 - smoothstep(0.0, 1.5, vRLow)) * rLow;
  float streak = (1.0 - abs(rNormalW.y)) * smoothstep(0.35, 0.95, rGr.g) * 0.35;
  rDustF = clamp((top * (0.25 + 0.75 * rGr.r) + low * (0.35 + 0.65 * rGr.b) + streak) * rDust * rDustAmount, 0.0, 0.94);
  diffuseColor.rgb = mix(diffuseColor.rgb, rDustColor * (0.82 + 0.36 * rGr.b), rDustF);
  rNormalW = normalize(mix(rNormalW, normalize(vRNrm), rDustF * 0.75));
}`

const FRAG_ROUGH = /* glsl */`
roughnessFactor = mix(roughnessFactor, rAlb.a, rRoughMix);
roughnessFactor = mix(roughnessFactor, 0.97, rDustF);`

const FRAG_METAL = /* glsl */`
metalnessFactor = mix(metalnessFactor, 0.0, rDustF);`

const FRAG_NORMAL = /* glsl */`
#ifdef R_OBJECT
  normal = normalize(mat3(vRX, vRY, vRZ) * rNormalW);
#else
  normal = normalize((viewMatrix * vec4(rNormalW, 0.0)).xyz);
#endif`

/**
 * Wrap a real-world texture set onto a MeshStandardMaterial (or Physical).
 * scale: metres per texture tile. dust: how much dust settles on top (0..1).
 * low: dust splashed up the bottom metre and a half. object: texture moves with the object
 * (for vehicles and other things that drive about). planar: cheap top-down mapping (flat ground).
 */
export function dress(material, set, {scale = 1, dust = 0.6, low = 0.5, normal = 1, rough = 0.75, gain = null, object = false, planar = false, terrain = null} = {}) {
  if (!realism.enabled || !textures[set] || Object.hasOwn(material, 'onBeforeCompile')) return material
  const t = textures[set]
  const uniforms = {
    rAlbedo: {value: t.albedo}, rNormal: {value: t.normal}, rGrime: {value: grime},
    rScale: {value: 1 / scale}, rGain: {value: gain ?? (DETAIL.has(set) ? DETAIL_GAIN : 1)},
    rNormalScale: {value: normal}, rDust: {value: dust}, rLow: {value: low}, rRoughMix: {value: rough},
    rDustColor: realism.dustColor, rDustAmount: realism.dustAmount,
  }
  const defines = {}
  if (object) defines.R_OBJECT = ''
  if (planar) defines.R_PLANAR = ''
  if (terrain) {
    defines.R_TERRAIN = ''
    uniforms.rAlbedo2 = {value: textures[terrain.rock ?? 'rock'].albedo}
    uniforms.rNormal2 = {value: textures[terrain.rock ?? 'rock'].normal}
    uniforms.rScale2 = {value: 1 / (terrain.rockScale ?? 3)}
  }
  material.defines = {...material.defines, ...defines}
  // (kept JSON-friendly: Material.clone copies userData through JSON)
  material.userData.realism = {set, opts: {scale, dust, low, normal, rough, gain, object, planar, terrain}}
  material.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, uniforms)
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\n${VERT_DECL}`)
      .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>\n${VERT_MAIN}`)
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${FRAG_DECL}`)
      .replace('#include <map_fragment>', `#include <map_fragment>\n${FRAG_SAMPLE}`)
      .replace('#include <color_fragment>', `#include <color_fragment>\n${FRAG_DUST}`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>\n${FRAG_ROUGH}`)
      .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>\n${FRAG_METAL}`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>\n${FRAG_NORMAL}`)
  }
  material.customProgramCacheKey = () => 'realism-v1'
  material.needsUpdate = true
  return material
}

// The solar panels use their own picture of a whole panel, mapped by UV.
export function solarMaterial(fallback) {
  if (!realism.enabled) return fallback
  const t = textures.solar
  return new THREE.MeshPhysicalMaterial({
    color: '#ffffff', map: t.albedo, roughnessMap: null, normalMap: t.normal, normalScale: new THREE.Vector2(0.6, 0.6),
    roughness: 0.18, metalness: 0.25, clearcoat: 1, clearcoatRoughness: 0.08,
  })
}

// UV-mapped detail for round, soft things like the kitty's suit and fur (no triplanar needed).
export function detailMaps(material, set, repeat = 4, normalScale = 0.6) {
  if (!realism.enabled || !textures[set]) return material
  const n = textures[set].normal.clone()
  n.repeat.set(repeat, repeat)
  n.needsUpdate = true
  material.normalMap = n
  material.normalScale = new THREE.Vector2(normalScale, normalScale)
  material.needsUpdate = true
  return material
}

// --- light from the sky -----------------------------------------------------------------
// The sky dome is rendered into a small environment map now and then, so every surface is lit
// by the real colour of the sky around it (and shiny things reflect it).
export function makeSkyLight(renderer, skyMaterial, {size = 128} = {}) {
  const pmrem = new THREE.PMREMGenerator(renderer)
  const envScene = new THREE.Scene()
  const dome = new THREE.Mesh(new THREE.SphereGeometry(50, 48, 24), skyMaterial)
  dome.frustumCulled = false
  envScene.add(dome)
  const groundMat = new THREE.MeshBasicMaterial({color: '#6b4232', fog: false})
  const ground = new THREE.Mesh(new THREE.CircleGeometry(48, 48).rotateX(-Math.PI / 2), groundMat)
  ground.position.y = -1.5
  envScene.add(ground)
  let target = null, lastKey = '', lastTime = -1e9
  return {
    // groundColor: linear colour of the lit ground. key: anything that changes the sky enough to redraw.
    update(scene, groundColor, key, now, minGap = 2.5) {
      if (key === lastKey || now - lastTime < minGap) return false
      lastKey = key
      lastTime = now
      groundMat.color.copy(groundColor)
      const env = skyMaterial.uniforms.envMode
      if (env) env.value = 1
      const next = pmrem.fromScene(envScene, 0, 0.1, 120, {size})
      if (env) env.value = 0
      scene.environment = next.texture
      target?.dispose()
      target = next
      return true
    },
    dispose() { target?.dispose(); pmrem.dispose() },
  }
}

// --- rocks ----------------------------------------------------------------------------------
// A fractured boulder: a lumpy ball, sliced by a few random planes (flat broken faces, sharp
// edges), with a flattened base that sits in the sand.
export function naturalRock(seed, detail = 2) {
  let s = seed * 9301 + 49297
  const random = () => ((s = (s * 9301 + 49297) % 233280) / 233280)
  const g = new THREE.IcosahedronGeometry(1, detail)
  const p = g.attributes.position
  const cuts = []
  const nCuts = 3 + Math.floor(random() * 4)
  for (let i = 0; i < nCuts; i++) {
    const n = new THREE.Vector3(random() * 2 - 1, random() * 1.6 - 0.4, random() * 2 - 1).normalize()
    cuts.push({n, d: 0.62 + random() * 0.25})
  }
  const v = new THREE.Vector3()
  const stretch = [0.8 + random() * 0.5, 0.65 + random() * 0.35, 0.8 + random() * 0.5]
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i)
    const lump = 1 + 0.22 * fbm(v.x * 1.7 + seed, v.y * 1.7 + v.z * 1.3, seed % 97) + 0.06 * fbm(v.x * 5, v.z * 5 + v.y * 4, seed % 89 + 7)
    v.multiplyScalar(lump)
    for (const c of cuts) {
      const over = v.dot(c.n) - c.d
      if (over > 0) v.addScaledVector(c.n, -over * 0.92)
    }
    v.set(v.x * stretch[0], Math.max(v.y * stretch[1], -0.32), v.z * stretch[2])
    p.setXYZ(i, v.x, v.y, v.z)
  }
  g.computeVertexNormals()
  return g
}

// A copy of a dressed material that keeps its texture (Material.clone() drops shader add-ons).
export function cloneDressed(material) {
  const copy = material.clone()
  const info = material.userData.realism
  if (info) dress(copy, info.set, info.opts)
  return copy
}
