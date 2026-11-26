import * as THREE from 'three'
import {dress, naturalRock, realism} from '../colony/realism.js'

export const SUN = new THREE.Vector3(-0.72, 0.37, -0.48).normalize()
const TAU = Math.PI * 2
const lerp = THREE.MathUtils.lerp

export function randomFrom(seed) {
  return () => {
    seed = (Math.imul(1664525, seed) + 1013904223) | 0
    return (seed >>> 0) / 4294967296
  }
}

function hash(x, y, seed) {
  let n = Math.imul(x, 1402946737) ^ Math.imul(y, 1597334677) ^ seed
  n = Math.imul(n ^ (n >>> 16), 0x7feb352d)
  return ((n ^ (n >>> 15)) >>> 0) / 4294967295
}

function noise(x, z, seed) {
  const a = Math.floor(x), b = Math.floor(z)
  const u = x - a, v = z - b
  const i = u * u * (3 - 2 * u), j = v * v * (3 - 2 * v)
  return lerp(lerp(hash(a, b, seed), hash(a + 1, b, seed), i),
    lerp(hash(a, b + 1, seed), hash(a + 1, b + 1, seed), i), j)
}

export function makeHeight(seed) {
  return (x, z) => {
    const plain = 2.6 * (noise(x / 25, z / 25, seed) - 0.5)
      + 1.5 * (noise(x / 9, z / 9, seed + 2) - 0.5)
      + 0.31 * (noise(x / 2.8, z / 2.8, seed + 4) - 0.5)
    const camp = THREE.MathUtils.smoothstep(Math.hypot(x * 0.8, (z + 6) * 0.55), 8, 19)
    const basin = Math.hypot(x - 37, z + 25)
    const crater = 1.05 * Math.exp(-((basin - 13) ** 2) / 6) - 2.2 * Math.exp(-(basin ** 2) / 95)
    const duneMask=Math.exp(-((x-53)**2+(z-11)**2)/500)
    const dunes=duneMask*(.75+.7*Math.sin(x*.65+z*.24))
    return lerp(plain * 0.18, plain + crater + dunes, camp)
  }
}

function soilTexture(renderer) {
  const size = 384
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const context = canvas.getContext('2d')
  const bytes = context.createImageData(size, size)
  const random = randomFrom(17082)
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const a = x / size * TAU
      const b = y / size * TAU
      const swell = Math.sin(a * 2 + 1.3 * Math.sin(b)) * Math.sin(b * 3 + a)
      const ripple = Math.sin(a * 3 + b * 17 + 1.9 * Math.sin(a * 2 + b) + 0.5 * Math.sin(b * 3))
      const shade = 205 + swell * 12 + ripple * 9 + random() * 33
      const index = (x + y * size) * 4
      bytes.data.set([shade, shade - 5, shade - 10, 255], index)
    }
  }
  context.putImageData(bytes, 0, 0)
  for (let index = 0; index < 2300; index++) {
    const x = random() * size, y = random() * size, radius = 0.25 + random() ** 5 * 2.6
    const shade = Math.round(105 + random() * 81)
    context.fillStyle = 'rgb(' + shade + ',' + (shade - 5) + ',' + (shade - 8) + ')'
    context.beginPath()
    context.ellipse(x, y, radius * 1.4, radius * 0.7, random() * TAU, 0, TAU)
    context.fill()
  }
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())
  return texture
}

function surfaceMesh(renderer, height, seed, size, segments, detailed) {
  const geometry = new THREE.PlaneGeometry(size, size, segments, segments).rotateX(-Math.PI / 2)
  const positions = geometry.attributes.position, uv = geometry.attributes.uv, colors = []
  const dark = new THREE.Color('#754842'), light = new THREE.Color('#c38361')
  const trail = new THREE.Color('#a7735b'), rock = new THREE.Color('#7b605b')
  const shade = new THREE.Color()
  for (let index = 0; index < positions.count; index++) {
    const x = positions.getX(index), z = positions.getZ(index)
    positions.setY(index, height(x, z) - (detailed ? 0 : 0.28))
    if (detailed) uv.setXY(index, x / 3.8, z / 3.8)
    const mottling = 0.72 * noise(x / 9, z / 9, seed + 6) + 0.28 * noise(x / 1.4, z / 1.4, seed + 7)
    const wash = THREE.MathUtils.smoothstep(noise(x / 15, z / 15, seed + 9), 0.57, 0.87)
    const track = Math.exp(-((x + 0.09 * (z - 12) + Math.sin(z * 0.2) * 0.4) ** 2) / 5)
      * (1 - THREE.MathUtils.smoothstep(Math.abs(z + 1), 15, 26))
    shade.copy(dark).lerp(light, mottling).lerp(rock, wash * 0.64).lerp(trail, track * 0.7)
    colors.push(shade.r, shade.g, shade.b)
  }
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  geometry.computeVertexNormals()
  const texture = detailed && !realism.enabled ? soilTexture(renderer) : null
  const material = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.95, map: texture, bumpMap: texture, bumpScale: 0.065,
  })
  // real-looking soil (and bare rock on steep slopes) when the textures are loaded
  dress(material, 'regolith', detailed
    ? {scale: 2.5, dust: 0, low: 0, rough: 0.9, normal: 1.1, terrain: {rock: 'rock', rockScale: 3}}
    : {scale: 9, dust: 0, low: 0, planar: true, normal: 0.7})
  const mesh = new THREE.Mesh(geometry, material)
  mesh.receiveShadow = detailed
  return mesh
}

function ridge(x, z, width, depth, elevation, seed, height, distant) {
  const random = randomFrom(seed)
  const sides = 64, points = [], colors = [], indices = []
  const ground = height(x, z) - 2
  const levels = [0, 0.10, 0.25, 0.38, 0.46, 0.58, 0.64, 0.76, 0.86, 0.89, 0.96, 1, 1.01]
  const slopes = [1.38, 1.16, 0.95, 0.78, 0.70, 0.64, 0.65, 0.57, 0.56, 0.52, 0.47, 0.43, 0.06]
  const closeColors = ['#795651', '#926557', '#ac7660', '#875751', '#b9846c',
    '#986657', '#b68169', '#90685f', '#b98167', '#82564d', '#b58371', '#9c7266', '#a67962']
  const farColors = ['#756073', '#806877', '#8c7180', '#937581', '#a18189']
  const twist = random() * TAU
  const contours = Array.from({length: sides}, (_, i) => {
    const angle = i / sides * TAU
    return 0.88 + Math.sin(angle * 5 + twist) * 0.08 + Math.sin(angle * 11) * 0.052 + random() * 0.065
  })
  const profile = Array.from({length: sides}, (_, i) => {
    const angle = i / sides * TAU
    return 0.83 + Math.sin(angle * 2 - twist) * 0.12 + Math.cos(angle * 7 + twist) * 0.05 + random() * 0.04
  })
  for (let j = 0; j < levels.length; j++) {
    for (let i = 0; i < sides; i++) {
      const a = i / sides * TAU
      const radius = slopes[j] * contours[i] * (1 + Math.sin(a * 3 + twist) * 0.20 + Math.sin(a * 7) * 0.09)
      points.push(x + Math.sin(a) * radius * width + j * width * 0.019,
        ground + elevation * levels[j] * (profile[i] + Math.cos(a * 3 + twist) * 0.14),
        z + Math.cos(a) * radius * depth + j * depth * 0.015)
      const color = new THREE.Color(distant ? farColors[Math.min(4, Math.floor(j * 5 / levels.length))] : closeColors[j])
      color.multiplyScalar(0.92 + noise(i / 5, j / 2, seed) * 0.17)
      colors.push(color.r, color.g, color.b)
      if (j) {
        const b = (j - 1) * sides + i
        const c = (j - 1) * sides + (i + 1) % sides
        indices.push(b, c, b + sides, c, c + sides, b + sides)
      }
    }
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  return new THREE.Mesh(geometry, realism.enabled
    ? dress(new THREE.MeshStandardMaterial({vertexColors: true, roughness: 1, side: THREE.DoubleSide}), 'rock', {scale: 6, dust: 0.9, low: 0, normal: 1.5})
    : new THREE.MeshStandardMaterial({vertexColors: true, roughness: 1, side: THREE.DoubleSide}))
}

function rockGeometry(seed) {
  const random = randomFrom(seed)
  const geometry = new THREE.IcosahedronGeometry(1, 1)
  const positions = geometry.attributes.position, colors = [], shade = new THREE.Color()
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i), y = positions.getY(i), z = positions.getZ(i)
    const fracture = 0.74 + 0.45 * noise(x * 4 + y * 6, z * 4 - y * 2, seed)
    positions.setXYZ(i, x * fracture + y * 0.13, Math.max(y * fracture, -0.44), z * fracture)
    shade.setScalar(0.73 + 0.32 * noise(x * 2 + z, y * 6, seed + 2) + random() * 0.10)
    colors.push(shade.r, shade.g, shade.b)
  }
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  geometry.computeVertexNormals()
  return geometry
}

export function makeTerrain(scene, renderer, height, seed, clearings) {
  scene.add(surfaceMesh(renderer, height, seed, 320, 138, false))
  scene.add(surfaceMesh(renderer, height, seed, 156, 190, true))

  const random = randomFrom(seed + 47489), blockers = []
  for (let i = 0; i < 24; i++) {
    const distant = i < 13
    const angle = i / (distant ? 13 : 11) * TAU + (distant ? 0 : 0.44) + random() * 0.18
    const distance = distant ? 114 + random() * 41 : 100 + random() * 22
    scene.add(ridge(Math.sin(angle) * distance, Math.cos(angle) * distance,
      14 + random() * 24, 7 + random() * 15, (distant ? 13 : 5.5) + random() * (distant ? 18 : 12),
      seed + i * 321, height, distant))
  }
  const palette = ['#814e3f', '#a5755d', '#765850', '#be8b71', '#68504d', '#9d6552'].map(color => new THREE.Color(color))
  // fractured basalt boulders with dust on top (smooth blobs on low quality)
  const rockMaterial = realism.enabled
    ? dress(new THREE.MeshStandardMaterial({color: '#ffffff', roughness: 0.9}), 'rock', {scale: 1.4, dust: 0.85, low: 0.6, normal: 1.2})
    : new THREE.MeshStandardMaterial({vertexColors: true, flatShading: true, roughness: 0.97})
  if (realism.enabled) palette.forEach(c => c.lerp(new THREE.Color('#ffffff'), 0.6))
  const dummy = new THREE.Object3D()
  for (let kind = 0; kind < 5; kind++) {
    const rocks = new THREE.InstancedMesh(realism.enabled ? naturalRock(seed + kind * 163, kind === 0 ? 3 : 2) : rockGeometry(seed + kind * 163), rockMaterial, 300)
    let placed = 0
    for (let i = 0; i < 340 && placed < 300; i++) {
      const x = (random() - 0.5) * 132, z = (random() - 0.5) * 132
      const radius = 0.06 + random() ** 4 * (kind === 0 ? 2.2 : 1.05)
      if (clearings.some(zone => Math.abs(x - zone.x) < zone.w + radius && Math.abs(z - zone.z) < zone.d + radius)) continue
      const rHeight = radius * (0.31 + random() * 0.68)
      dummy.position.set(x, height(x, z) + rHeight * 0.24, z)
      dummy.rotation.set(random() * 0.48, random() * TAU, random() * 0.35)
      dummy.scale.set(radius * (0.9 + random() * 0.44), rHeight, radius)
      dummy.updateMatrix()
      rocks.setMatrixAt(placed, dummy.matrix)
      rocks.setColorAt(placed, palette[Math.floor(random() * palette.length)])
      if (radius > 0.75) blockers.push({x, z, radius: radius * 0.8})
      placed++
    }
    rocks.count = placed
    rocks.receiveShadow = true
    rocks.castShadow = kind === 0
    scene.add(rocks)
  }
  return blockers
}

export function makeSky(scene) {
  const geometry = new THREE.SphereGeometry(228, 36, 21)
  const material = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {sunDirection: {value: SUN}, stormAmount: {value: 0}},
    vertexShader: `
      varying vec3 direction;
      void main() {
        direction = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      varying vec3 direction;
      uniform vec3 sunDirection;
      uniform float stormAmount;
      void main() {
        vec3 ray = normalize(direction);
        float up = max(0.0, ray.y);
        float towardSun = max(0.0, dot(ray, sunDirection));
        vec3 horizon = mix(vec3(0.55, 0.31, 0.23), vec3(0.32, 0.15, 0.10), stormAmount);
        vec3 high = mix(vec3(0.22, 0.19, 0.30), vec3(0.23, 0.10, 0.09), stormAmount);
        vec3 color = mix(horizon, high, pow(smoothstep(0.0, 0.67, up), 0.76));
        float layer = sin(ray.y * 132.0 + sin(ray.x * 7.0) * 1.6) *
            exp(-pow((ray.y-0.15)*8.0, 2.0));
        color += vec3(0.095, 0.047, 0.027) * layer * 0.24;
        float glow = pow(towardSun, 42.0) * (1.0 - 0.83 * stormAmount);
        float disc = smoothstep(0.99972, 0.99987, towardSun) * (1.0 - stormAmount);
        color += vec3(0.73, 0.42, 0.23) * glow + vec3(1.15, 0.84, 0.60) * disc;
        gl_FragColor = vec4(color, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  })
  const sky = new THREE.Mesh(geometry, material)
  sky.frustumCulled = false
  sky.renderOrder = -5
  scene.add(sky)
  return sky
}
