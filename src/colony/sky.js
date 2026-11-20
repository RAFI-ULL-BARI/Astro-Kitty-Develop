// The sky over the base: a real day-night cycle with Mars' blue sunsets, stars, both moons and Earth.
import * as THREE from 'three'
import {clamp, lerp, smooth} from './util.js'

const vertex = `
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`

// Mars daytime sky is butterscotch; around the setting Sun it turns blue (fine dust scatters blue light forward).
const fragment = `
varying vec3 vDir;
uniform vec3 sunDir;
uniform vec3 earthDir;
uniform float storm;
uniform float thin;
uniform float space;
uniform float polar;
uniform float time;
float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
void main() {
  vec3 dir = normalize(vDir);
  float up = clamp(dir.y, -0.2, 1.0);
  float sunUp = sunDir.y;
  float day = smoothstep(-0.12, 0.18, sunUp);
  float twilight = smoothstep(-0.25, 0.0, sunUp) * (1.0 - smoothstep(0.0, 0.32, sunUp));
  float cosSun = dot(dir, normalize(sunDir));
  vec3 horizonDay = mix(vec3(0.80, 0.58, 0.42), vec3(0.88, 0.74, 0.62), polar);
  vec3 zenithDay = mix(vec3(0.54, 0.36, 0.28), vec3(0.36, 0.30, 0.36), thin);
  vec3 col = mix(horizonDay, zenithDay, pow(smoothstep(0.0, 0.85, up), 0.7));
  // blue halo around the Sun, strongest at sunset
  float halo = pow(max(cosSun, 0.0), 6.0);
  col = mix(col, vec3(0.42, 0.62, 0.86), halo * (0.35 + twilight * 0.65) * (1.0 - storm));
  col *= mix(0.06, 1.0, day);
  vec3 night = vec3(0.025, 0.028, 0.055) + vec3(0.06, 0.05, 0.07) * (1.0 - up);
  col = mix(night, col, day);
  col += vec3(0.30, 0.42, 0.60) * twilight * halo * 1.4;
  // stars and a faint band of the Milky Way at night (always in space)
  float dark = max(1.0 - day, space);
  vec3 cell = floor(dir * 160.0);
  float star = step(0.9975, hash(cell)) * (0.6 + 0.4 * sin(time * 2.0 + hash(cell + 3.0) * 30.0));
  float band = exp(-pow(dot(dir, normalize(vec3(0.3, 0.6, -0.74))) * 4.0, 2.0)) * 0.08;
  col += (vec3(star) + vec3(0.7, 0.75, 1.0) * band) * dark * (1.0 - storm * 0.9);
  // Earth: a bright blue-white star near the Sun after sunset
  float earth = smoothstep(0.99985, 0.99995, dot(dir, normalize(earthDir)));
  col += vec3(0.6, 0.8, 1.0) * earth * 3.0 * (1.0 - day) * (1.0 - storm);
  // the Sun itself: smaller and dimmer than from Earth
  float disc = smoothstep(0.99955, 0.99975, cosSun);
  col += vec3(1.3, 1.15, 1.0) * disc * (1.0 - storm * 0.85) + vec3(0.6, 0.4, 0.25) * pow(max(cosSun, 0.0), 300.0);
  // thin wispy ice clouds drifting by
  vec2 cuv = dir.xz / max(dir.y, 0.08) * 0.7 + vec2(time * 0.01, time * 0.004);
  float cloud = smoothstep(0.55, 0.9, sin(cuv.x * 2.1 + sin(cuv.y * 3.0)) * sin(cuv.y * 1.7 + 1.3) * 0.5 + 0.5);
  col += vec3(0.25, 0.22, 0.22) * cloud * smoothstep(0.05, 0.4, up) * day * (1.0 - space) * 0.35;
  // dust storm: thick orange haze
  vec3 dust = mix(vec3(0.62, 0.38, 0.22), vec3(0.18, 0.10, 0.07), 1.0 - day);
  col = mix(col, dust, storm * 0.85);
  // space: black sky even in daytime
  col = mix(col, vec3(star) + vec3(0.7, 0.75, 1.0) * band + vec3(1.3, 1.15, 1.0) * disc, space);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`

export function makeSky(scene, {space = false, thin = false, polar = false} = {}) {
  const material = new THREE.ShaderMaterial({
    vertexShader: vertex, fragmentShader: fragment, side: THREE.BackSide, depthWrite: false,
    uniforms: {
      sunDir: {value: new THREE.Vector3(0, 1, 0)}, earthDir: {value: new THREE.Vector3(0, 0.1, -1)},
      storm: {value: 0}, thin: {value: thin ? 1 : 0}, space: {value: space ? 1 : 0}, polar: {value: polar ? 1 : 0}, time: {value: 0},
    },
  })
  const dome = new THREE.Mesh(new THREE.SphereGeometry(400, 40, 20), material)
  dome.frustumCulled = false
  dome.renderOrder = -10
  scene.add(dome)

  // The two moons. Phobos is a lumpy potato; Deimos looks like a bright star.
  const moonMat = new THREE.MeshStandardMaterial({color: '#8f8580', roughness: 1, emissive: '#2a2624', emissiveIntensity: 0.6, fog: false})
  const phobosGeo = new THREE.IcosahedronGeometry(1, 2)
  const pos = phobosGeo.attributes.position
  for (let i = 0; i < pos.count; i++) {
    const v = new THREE.Vector3().fromBufferAttribute(pos, i)
    v.multiplyScalar(1 + 0.13 * Math.sin(v.x * 4 + v.y * 3) + 0.08 * Math.cos(v.z * 5))
    v.x *= 1.3
    pos.setXYZ(i, v.x, v.y, v.z)
  }
  phobosGeo.computeVertexNormals()
  const phobos = new THREE.Mesh(phobosGeo, moonMat)
  phobos.scale.setScalar(space ? 0.001 : 2.4)
  const deimos = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), moonMat)
  deimos.scale.setScalar(space ? 0.001 : 0.9)
  dome.add(phobos, deimos)

  const sun = new THREE.DirectionalLight('#ffe2c0', 3)
  sun.castShadow = true
  sun.shadow.bias = -0.0002
  sun.shadow.normalBias = 0.05
  const hemi = new THREE.HemisphereLight('#f0d3c4', '#7a4c40', 1.4)
  scene.add(sun, sun.target, hemi)

  const tmp = new THREE.Vector3()
  return {
    dome, sun, hemi, material, phobos, deimos,
    // sunDir, earthDir: THREE.Vector3 (world). hours: local Mars time. focus: where shadows are needed.
    update({sunDir, earthDir, hours, storm = 0, focus, indoors = 0, time = 0, shadowSize = 60}) {
      const u = material.uniforms
      u.sunDir.value.copy(sunDir)
      u.earthDir.value.copy(earthDir)
      u.storm.value = storm
      u.time.value = time
      const day = smooth(-0.1, 0.2, sunDir.y)
      const low = 1 - smooth(0.05, 0.5, sunDir.y)
      sun.color.setRGB(1.0, lerp(0.88, 0.62, low), lerp(0.75, 0.45, low))
      sun.intensity = 3.1 * day * (1 - storm * 0.75)
      hemi.intensity = lerp(0.32, 1.45, day) * (1 - storm * 0.25) + indoors * 0.1
      hemi.color.setRGB(lerp(0.36, 0.95, day), lerp(0.38, 0.82, day), lerp(0.55, 0.77, day))
      hemi.groundColor.setRGB(lerp(0.12, 0.48, day), lerp(0.1, 0.3, day), lerp(0.14, 0.25, day))
      tmp.copy(sunDir).normalize().multiplyScalar(80)
      sun.position.copy(focus).add(tmp.y > 4 ? tmp : tmp.setY(4))
      sun.target.position.copy(focus)
      const cam = sun.shadow.camera
      if (cam.right !== shadowSize) {
        Object.assign(cam, {left: -shadowSize, right: shadowSize, top: shadowSize, bottom: -shadowSize, near: 1, far: 220})
        cam.updateProjectionMatrix()
      }
      // Phobos rises in the west and crosses the sky in about 5.5 hours, twice a sol.
      const pAngle = ((hours / 11.1) % 1) * Math.PI * 2
      phobos.position.set(-Math.cos(pAngle) * 330, Math.sin(pAngle) * 200 - 20, -60)
      phobos.rotation.y = pAngle
      phobos.visible = phobos.position.y > -10
      // Deimos drifts slowly from east to west over almost three sols.
      const dAngle = ((hours / 131) % 1) * Math.PI * 2
      deimos.position.set(Math.cos(dAngle) * 340, Math.sin(dAngle) * 230 - 10, 90)
      deimos.visible = deimos.position.y > -5
      return {day, low}
    },
    fogColor(target, storm = 0) {
      const day = smooth(-0.1, 0.2, u().sunDir.value.y)
      target.setRGB(lerp(0.08, 0.72, day), lerp(0.07, 0.5, day), lerp(0.1, 0.4, day))
      target.lerp(new THREE.Color(lerp(0.15, 0.62, day), lerp(0.09, 0.38, day), lerp(0.06, 0.22, day)), storm)
      return target
    },
  }
  function u() { return material.uniforms }
}

export function skyFactors(sunY) {
  return {day: smooth(-0.1, 0.2, sunY), night: 1 - smooth(-0.15, 0.05, sunY)}
}
export const nightLights = sunY => clamp(1 - smooth(-0.05, 0.12, sunY), 0, 1)
