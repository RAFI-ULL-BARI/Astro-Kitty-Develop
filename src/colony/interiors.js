// Everything inside the base buildings. All of it moves: plants sway and grow, batteries charge,
// water sloshes, screens update, robots work.
import * as THREE from 'three'
import {Builder, M, MI, mat, screen, sign, glow, dotTexture} from './kit.js'
import {toWorld} from './layout.js'
import {FLOOR_Y} from './structures.js'
import {clamp, lerp, TAU} from './util.js'

const F = FLOOR_Y

// --- shared animated materials ---------------------------------------------
export const shared = {
  time: {value: 0}, growth: {value: 0.5}, mold: {value: 0}, dust: {value: 0},
}
function flowTexture(color) {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 8
  const c = canvas.getContext('2d')
  c.fillStyle = '#d5dbe4'
  c.fillRect(0, 0, 64, 8)
  c.fillStyle = color
  for (let x = 0; x < 64; x += 16) c.fillRect(x, 0, 7, 8)
  const t = new THREE.CanvasTexture(canvas)
  t.colorSpace = THREE.SRGBColorSpace
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(6, 1)
  return t
}
export const flowMats = {
  water: () => mat('flowWater', () => new THREE.MeshStandardMaterial({map: flowTexture('#3f9ee0'), roughness: 0.4, metalness: 0.3, emissive: '#11324a', emissiveIntensity: 0.4})),
  power: () => mat('flowPower', () => new THREE.MeshStandardMaterial({map: flowTexture('#5ef0d6'), roughness: 0.4, metalness: 0.3, emissive: '#2fd8c0', emissiveIntensity: 0.9})),
  oxygen: () => mat('flowOxygen', () => new THREE.MeshStandardMaterial({map: flowTexture('#7ee08a'), roughness: 0.4, metalness: 0.3, emissive: '#1f5a2a', emissiveIntensity: 0.5})),
}
export function animateFlows(dt, rates = {}) {
  flowMats.water().map.offset.x -= dt * 0.6 * (rates.water ?? 1)
  flowMats.power().map.offset.x -= dt * 1.2 * (rates.power ?? 1)
  flowMats.oxygen().map.offset.x -= dt * 0.5 * (rates.oxygen ?? 1)
}

// Plants sway in the fan breeze, grow with the base's crops and get grey spots when mold strikes.
function plantMaterial(color) {
  const m = new THREE.MeshStandardMaterial({color, roughness: 0.8, side: THREE.DoubleSide})
  m.onBeforeCompile = shader => {
    shader.uniforms.uTime = shared.time
    shader.uniforms.uGrowth = shared.growth
    shader.uniforms.uMold = shared.mold
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime; uniform float uGrowth; varying vec3 vWorldPos;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        float bed = ${(F + 0.78).toFixed(2)};
        float above = max(transformed.y - bed, 0.0);
        transformed.y = bed + above * (0.35 + 0.65 * uGrowth);
        vec4 wp = modelMatrix * vec4(transformed, 1.0);
        float sway = sin(uTime * 1.8 + wp.x * 0.9 + wp.z * 0.7) * 0.05 + sin(uTime * 3.1 + wp.z * 2.0) * 0.015;
        transformed.x += sway * above;
        transformed.z += sway * above * 0.6;
        vWorldPos = wp.xyz;`)
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uMold; varying vec3 vWorldPos;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        float spot = step(0.72, fract(sin(dot(floor(vWorldPos * 9.0), vec3(12.9898, 78.233, 37.719))) * 43758.5453));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.86, 0.86, 0.8), spot * uMold * 0.9);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.8, 0.75, 0.55), uMold * 0.4);`)
  }
  return m
}
const plantMats = {
  leaf: () => mat('pLeaf', () => plantMaterial('#6fb35e')),
  leafDark: () => mat('pLeafDark', () => plantMaterial('#3f8a4a')),
  lettuce: () => mat('pLettuce', () => plantMaterial('#9bd36a')),
  rice: () => mat('pRice', () => plantMaterial('#a9cf5c')),
  stem: () => mat('pStem', () => plantMaterial('#4f7a3c')),
  petal: () => mat('pPetal', () => plantMaterial('#f6c73b')),
  seed: () => mat('pSeed', () => plantMaterial('#6b4a2b')),
  fruit: () => mat('pFruit', () => plantMaterial('#e2452f')),
}

// --- helpers -----------------------------------------------------------------
function moduleGroup(m) {
  const g = new THREE.Group()
  g.position.set(m.x, 0, m.z)
  g.rotation.y = -m.facing
  return g
}
function pointLight(group, color, x, y, z, intensity = 40, distance = 22) {
  const l = new THREE.PointLight(color, intensity, distance, 1.6)
  l.position.set(x, y, z)
  group.add(l)
  return l
}
const W = (m, lx, lz) => toWorld(m, lx, lz)
function spot(list, m, id, lx, lz, r, label, verb = 'tap') {
  const [x, z] = W(m, lx, lz)
  list.push({id, module: m.id, x, z, r, label, verb})
}
// A rectangle (centre, half sizes) as four wall segments in world space.
function rect(out, m, cx, cz, hx, hz) {
  const c = [[cx - hx, cz - hz], [cx + hx, cz - hz], [cx + hx, cz + hz], [cx - hx, cz + hz]].map(([x, z]) => W(m, x, z))
  for (let i = 0; i < 4; i++) out.segs.push([...c[i], ...c[(i + 1) % 4]])
}
function blocker(list, m, lx, lz, r) {
  const [x, z] = W(m, lx, lz)
  list.push({x, z, r})
}
const polar = (a, r) => [Math.cos(a) * r, Math.sin(a) * r]

function crewBed(b, x, z, rot) {
  b.round(MI.shell(), x, F + 0.55, z, 2.5, 1.1, 1.25, rot)
  b.box(MI.fabric(), x, F + 0.72, z, 2.1, 0.22, 0.95, rot)
  b.round(MI.fabricWarm(), x + Math.cos(-rot) * 0.8, F + 0.9, z + Math.sin(-rot) * 0.8, 0.45, 0.18, 0.7, rot)
}

// --- the habitat hub ----------------------------------------------------------
function hub(m, out) {
  const g = moduleGroup(m)
  const b = new Builder()
  const R = m.r
  // planner table in the middle
  b.cyl(MI.frame(), 0, F + 0.45, 0, 1.35, 0.9, 32)
  b.cyl(MI.shell(), 0, F + 0.93, 0, 1.45, 0.08, 32)
  b.cyl(MI.lampCool(), 0, F + 0.98, 0, 1.2, 0.03, 32)
  // kitchen (north-west)
  for (let a = 3.5; a < 4.4; a += 0.21) {
    const [x, z] = polar(a, R - 1.0)
    b.box(MI.shellShade(), x, F + 0.48, z, 1.6, 0.95, 0.75, -a + Math.PI / 2)
    b.box(MI.wood(), x, F + 0.98, z, 1.65, 0.06, 0.8, -a + Math.PI / 2)
  }
  const [fx, fz] = polar(4.5, R - 1.1)
  b.round(MI.steel(), fx, F + 1.1, fz, 1.0, 2.2, 0.8, -4.5 + Math.PI / 2)
  const [tx, tz] = polar(3.93, 5.9)
  b.cyl(MI.wood(), tx, F + 0.78, tz, 1.15, 0.08, 24)
  b.cyl(MI.frame(), tx, F + 0.4, tz, 0.14, 0.78, 10)
  for (let i = 0; i < 4; i++) {
    const [sx, sz] = polar(i * Math.PI / 2 + 0.4, 1.6)
    b.cyl(MI.trim(), tx + sx, F + 0.42, tz + sz, 0.32, 0.12, 14)
    b.cyl(MI.frame(), tx + sx, F + 0.2, tz + sz, 0.07, 0.4, 8)
  }
  b.cyl(MI.fabricWarm(), tx, F + 0.02, tz, 2.6, 0.03, 32)
  // sleeping pods (north and north-east)
  for (const a of [-1.42, -1.0, -0.6, -0.18]) crewBed(b, ...polar(a, R - 1.5), -a + Math.PI / 2)
  // storm shelter: a ring of water tanks (water blocks radiation)
  const [shx, shz] = polar(Math.PI / 4, 6.4)
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * TAU
    if (Math.abs(Math.atan2(Math.sin(a - (Math.PI / 4 + Math.PI)), Math.cos(a - (Math.PI / 4 + Math.PI)))) < 0.5) continue
    b.cyl(MI.water(), shx + Math.cos(a) * 2.2, F + 1.25, shz + Math.sin(a) * 2.2, 0.48, 2.5, 14)
    b.cyl(MI.frame(), shx + Math.cos(a) * 2.2, F + 2.55, shz + Math.sin(a) * 2.2, 0.5, 0.1, 14)
  }
  b.cyl(MI.frame(), shx, F + 2.75, shz, 2.75, 0.18, 32)
  b.box(MI.fabric(), shx + 0.6, F + 0.35, shz + 0.6, 1.6, 0.5, 0.6, -Math.PI / 4)
  // suit lockers (south)
  const suitColors = ['#e9dcd1', '#e3884c', '#6b8fb5', '#b07ad6']
  suitColors.forEach((color, i) => {
    const a = 1.72 + i * 0.17
    const [x, z] = polar(a, R - 0.9)
    b.box(MI.frame(), x, F + 1.2, z, 1.0, 2.4, 0.5, -a + Math.PI / 2)
    const suit = mat(`suit-${color}`, () => new THREE.MeshStandardMaterial({color, roughness: 0.7}))
    b.round(suit, x * 0.97, F + 1.2, z * 0.97, 0.6, 0.9, 0.35, -a + Math.PI / 2)
    b.ball(MI.glass(), x * 0.97, F + 1.95, z * 0.97, 0.3)
  })
  // med bay (west of the airlock)
  const [mx, mz] = polar(2.8, R - 2.2)
  b.round(MI.shell(), mx, F + 0.5, mz, 2.2, 0.75, 1.0, -2.8 + Math.PI / 2)
  b.box(MI.fabric(), mx, F + 0.9, mz, 2.0, 0.12, 0.9, -2.8 + Math.PI / 2)
  // exercise bike
  const [ex, ez] = polar(0.3, 5.3)
  b.round(MI.darkSteel(), ex, F + 0.45, ez, 1.4, 0.35, 0.45, -0.3)
  b.cyl(MI.frame(), ex + 0.4, F + 0.75, ez, 0.06, 0.8, 8)
  // Dhrubo's charging pad
  const [dx, dz] = polar(-0.5, 3.6)
  b.cyl(MI.frame(), dx, F + 0.05, dz, 0.75, 0.1, 24)
  b.cyl(MI.lampCool(), dx, F + 0.11, dz, 0.55, 0.02, 24)
  // plants in pots
  for (const a of [1.2, 2.3, 3.2, 4.8]) {
    const [x, z] = polar(a, R - 0.9)
    b.cyl(MI.trim(), x, F + 0.35, z, 0.38, 0.7, 14, 0, 0, 0, 1.2)
    b.ball(MI.leafDark(), x, F + 1.0, z, 0.55, 0.65, 0.55)
  }
  b.build(g)
  // the hologram over the planner table
  const holo = new THREE.Group()
  holo.position.set(0, F + 1.35, 0)
  const holoMat = new THREE.MeshBasicMaterial({color: '#7ef4e0', wireframe: true, transparent: true, opacity: 0.55})
  holo.add(new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 6, 0, TAU, 0, Math.PI / 2), holoMat))
  for (let i = 0; i < 5; i++) {
    const node = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 4, 0, TAU, 0, Math.PI / 2), holoMat)
    node.position.set(Math.cos(i / 5 * TAU) * 0.95, 0, Math.sin(i / 5 * TAU) * 0.95)
    holo.add(node)
  }
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.9, 24, 1, true),
    new THREE.MeshBasicMaterial({color: '#7ef4e0', transparent: true, opacity: 0.08, side: THREE.DoubleSide, depthWrite: false}))
  beam.position.y = -0.1
  holo.add(beam)
  g.add(holo)
  // med monitor with a heartbeat line
  const monitor = screen(0.9, 0.55, 192)
  monitor.mesh.position.set(...[polar(2.8, R - 0.45)].flatMap(([x, z]) => [x, F + 1.9, z]))
  monitor.mesh.rotation.y = -2.8 - Math.PI / 2
  g.add(monitor.mesh)
  const poster = sign('🇧🇩', 'KHULNA SPACE CENTER', 'খুলনা মহাকাশ কেন্দ্র', 2.6)
  const [px, pz] = polar(Math.PI * 1.52, R - 0.45)
  poster.position.set(px, F + 2.4, pz)
  poster.rotation.y = -Math.PI * 1.52 - Math.PI / 2
  g.add(poster)
  const shelterSign = sign('🛡️', 'STORM SHELTER', 'ঝড়ের আশ্রয়', 2.3, {accent: '#5fb6e8'})
  shelterSign.position.set(shx - 1.9, F + 3.3, shz - 1.9)
  shelterSign.rotation.y = -Math.PI / 4 - Math.PI / 2 + Math.PI
  g.add(shelterSign)
  const lights = [pointLight(g, '#ffe2c0', -3, F + 6, 3, 14, 24), pointLight(g, '#ffe2c0', 3.5, F + 6, -3, 14, 24)]

  spot(out.spots, m, 'planner', 0, 0, 2.6, {en: 'Plan the base', bn: 'ঘাঁটির পরিকল্পনা'})
  spot(out.spots, m, 'wardrobe', ...polar(1.97, R - 2.6), 1.8, {en: 'Suit locker', bn: 'স্যুট লকার'})
  spot(out.spots, m, 'shelter', shx, shz, 2.0, {en: 'Storm shelter', bn: 'ঝড়ের আশ্রয়'})
  spot(out.spots, m, 'med', ...polar(2.8, R - 3.4), 1.6, {en: 'Med bay', bn: 'চিকিৎসা কক্ষ'}, 'hold')
  spot(out.spots, m, 'kitchen', ...polar(3.93, 4.2), 1.6, {en: 'Have a snack', bn: 'নাস্তা খাও'})
  blocker(out.colliders, m, 0, 0, 1.5)
  blocker(out.colliders, m, tx, tz, 1.25)
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * TAU
    if (Math.abs(Math.atan2(Math.sin(a - Math.PI * 1.25), Math.cos(a - Math.PI * 1.25))) < 0.5) continue
    blocker(out.colliders, m, shx + Math.cos(a) * 2.2, shz + Math.sin(a) * 2.2, 0.5)
  }
  out.waypoints.hub = [[0, 2.6], [tx * 0.7, tz * 0.7], [shx, shz], [...polar(-0.8, 6.5)], [...polar(2.8, 6.5)], [ex - 0.6, ez]]
  out.anchors.bike = [ex, ez]
  out.anchors.dock = [dx, dz]
  out.anchors.shelter = [shx, shz]
  out.anchors.leak = {hub: [...polar(-2.4, R - 0.4)]}

  let beat = 0
  return {
    group: g, lights,
    animate(t, dt, s) {
      holo.rotation.y = t * 0.5
      holoMat.opacity = 0.45 + Math.sin(t * 7) * 0.08 + (Math.random() < 0.02 ? -0.3 : 0)
      beat += dt
      if (beat > 0.12 && s.near) {
        beat = 0
        const c = monitor.ctx, w = monitor.canvas.width, h = monitor.canvas.height
        c.drawImage(monitor.canvas, -4, 0)
        c.fillStyle = '#10202a'
        c.fillRect(w - 4, 0, 4, h)
        const phase = (t * 1.3) % 1
        const y = phase < 0.1 ? h * 0.2 : phase < 0.15 ? h * 0.8 : h * 0.55
        c.fillStyle = '#5ef08a'
        c.fillRect(w - 4, y, 4, 3)
        monitor.update()
      }
    },
  }
}

// --- greenhouse: food plant ----------------------------------------------------
function greenhouse(m, out, small = false) {
  const g = moduleGroup(m)
  const b = new Builder(), plants = new Builder(), fruit = new Builder()
  const R = m.r
  b.box(MI.darkSteel(), 0, F + 0.03, 0, R * 2 - 1, 0.04, 2.2)
  const beds = small ? [-3.4, 3.4, 6.2] : [-8.4, -6, -3.2, 3.2, 6, 8.4]
  const kinds = small ? ['lettuce', 'tomato', 'sunflower'] : ['rice', 'potato', 'lettuce', 'tomato', 'strawberry', 'sunflower']
  beds.forEach((z, i) => {
    const half = Math.sqrt(Math.max(0, R * R - (Math.abs(z) + 1.1) ** 2)) - 1.3
    if (half < 1) return
    b.box(MI.shellShade(), 0, F + 0.38, z, half * 2, 0.75, 1.6)
    b.box(MI.soil(), 0, F + 0.77, z, half * 2 - 0.2, 0.04, 1.4)
    b.box(MI.trim(), 0, F + 0.7, z + 0.81, half * 2, 0.1, 0.02)
    // grow lights above each bed
    b.box(MI.lampPink(), 0, F + 3.4, z, half * 2 - 0.4, 0.06, 0.12)
    b.box(MI.frame(), 0, F + 3.47, z, half * 2 - 0.2, 0.05, 0.16)
    for (const x of [-half + 0.5, half - 0.5]) b.cyl(MI.frame(), x, F + 4.6, z, 0.02, 2.2, 4)
    const kind = kinds[i]
    if (kind === 'rice') b.box(MI.water(), 0, F + 0.8, z, half * 2 - 0.3, 0.05, 1.3)
    for (let x = -half + 0.5; x < half - 0.3; x += kind === 'rice' ? 0.35 : 0.85) {
      for (const dz of kind === 'rice' ? [-0.4, 0, 0.4] : [-0.3, 0.3]) {
        const px = x, pz = z + dz, base = F + 0.79
        if (kind === 'lettuce') for (let k = 0; k < 5; k++) plants.ball(plantMats.lettuce(), px + Math.cos(k * 1.3) * 0.12, base + 0.12, pz + Math.sin(k * 1.3) * 0.12, 0.2, 0.1, 0.13)
        else if (kind === 'rice') for (let k = 0; k < 3; k++) plants.box(plantMats.rice(), px + k * 0.06, base + 0.32, pz, 0.025, 0.65, 0.025, k, 0.15 * (k - 1))
        else if (kind === 'potato') { plants.ball(plantMats.leafDark(), px, base + 0.32, pz, 0.32, 0.3, 0.3); plants.ball(plantMats.leaf(), px + 0.1, base + 0.5, pz, 0.2, 0.18, 0.2) }
        else if (kind === 'strawberry') {
          plants.ball(plantMats.leaf(), px, base + 0.12, pz, 0.24, 0.1, 0.24)
          fruit.ball(plantMats.fruit(), px + 0.15, base + 0.12, pz + 0.1, 0.06, 0.07, 0.06)
        } else if (kind === 'tomato') {
          plants.cyl(plantMats.stem(), px, base + 0.8, pz, 0.025, 1.6, 6)
          for (let k = 0; k < 4; k++) plants.ball(plantMats.leaf(), px + Math.cos(k * 2) * 0.18, base + 0.5 + k * 0.32, pz + Math.sin(k * 2) * 0.18, 0.18, 0.08, 0.12)
          fruit.ball(plantMats.fruit(), px + 0.12, base + 0.9, pz, 0.09)
          fruit.ball(plantMats.fruit(), px - 0.1, base + 1.25, pz + 0.05, 0.08)
        } else if (kind === 'sunflower') {
          plants.cyl(plantMats.stem(), px, base + 0.9, pz, 0.035, 1.8, 6)
          plants.ball(plantMats.leaf(), px + 0.15, base + 0.7, pz, 0.22, 0.06, 0.12)
          plants.add(new THREE.CylinderGeometry(0.28, 0.28, 0.04, 14), plantMats.petal(), px, base + 1.85, pz, 1, 1, 1, Math.PI / 2 - 0.3)
          plants.add(new THREE.CylinderGeometry(0.14, 0.14, 0.06, 12), plantMats.seed(), px + 0.02, base + 1.85, pz, 1, 1, 1, Math.PI / 2 - 0.3)
        }
      }
    }
    // water pipe along the bed
    b.add(new THREE.CylinderGeometry(0.07, 0.07, half * 2, 8), flowMats.water(), 0, F + 0.88, z - 0.75, 1, 1, 1, 0, 0, Math.PI / 2)
  })
  // harvest station and climate panel
  b.round(MI.wood(), R - 3.2, F + 0.35, -1.9, 1.0, 0.6, 0.8)
  b.ball(MI.fruitRed(), R - 3.35, F + 0.72, -1.9, 0.14)
  b.ball(MI.potato(), R - 3.05, F + 0.72, -1.75, 0.13)
  b.ball(MI.fruitYellow(), R - 3.1, F + 0.72, -2.1, 0.12)
  b.box(MI.frame(), -R + 2.4, F + 1.1, 1.9, 0.5, 2.2, 1.2)
  b.build(g)
  plants.build(g, {shadows: false})
  const fruitMeshes = fruit.build(g, {shadows: false})
  const climate = screen(1.0, 0.7, 160)
  climate.mesh.position.set(-R + 2.67, F + 1.6, 1.9)
  climate.mesh.rotation.y = Math.PI / 2
  g.add(climate.mesh)
  // fans and the harvest robot on its rail
  const fans = []
  for (const side of [-1, 1]) {
    const fan = new THREE.Group()
    fan.position.set(0, F + 2.6, side * (R - 1.0))
    const fb = new Builder()
    fb.cyl(MI.frame(), 0, 0, 0, 0.15, 0.2, 10, Math.PI / 2)
    for (let k = 0; k < 4; k++) fb.box(MI.shell(), Math.cos(k * Math.PI / 2) * 0.35, Math.sin(k * Math.PI / 2) * 0.35, 0, 0.5, 0.12, 0.03, 0, 0, k * Math.PI / 2)
    fb.build(fan, {shadows: false})
    g.add(fan)
    fans.push(fan)
  }
  const rail = new Builder()
  rail.box(MI.frame(), 0, F + 4.4, 0, R * 1.6, 0.1, 0.1)
  rail.build(g)
  const robot = new THREE.Group()
  const rb = new Builder()
  rb.round(MI.shell(), 0, 0, 0, 0.7, 0.4, 0.6)
  rb.box(MI.trim(), 0, -0.1, 0.31, 0.5, 0.08, 0.02)
  rb.cyl(MI.steel(), 0, -0.6, 0, 0.05, 0.9, 8)
  rb.box(MI.lampCool(), 0, 0.05, 0.31, 0.2, 0.08, 0.02)
  rb.build(robot)
  const claw = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.03, 6, 12, Math.PI), MI.steel())
  claw.position.y = -1.05
  claw.rotation.z = Math.PI
  robot.add(claw)
  robot.position.set(0, F + 4.15, 0)
  g.add(robot)
  // mist puffs over the beds
  const mist = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(240 * 3), 3)),
    new THREE.PointsMaterial({color: '#e6f6ff', size: 0.22, map: dotTexture(), transparent: true, opacity: 0.5, depthWrite: false}))
  mist.frustumCulled = false
  g.add(mist)
  const mistSeeds = Array.from({length: 240}, (_, i) => [Math.sin(i * 12.9) * (R - 2.5), beds[i % beds.length] ?? 0, (i * 0.618) % 1])
  const lights = [pointLight(g, '#ff7fdc', -R * 0.35, F + 3.0, 0, 9, 16), pointLight(g, '#ff9fe6', R * 0.35, F + 3.0, 0, 9, 16)]
  if (!small) {
    spot(out.spots, m, 'harvest', R - 3.2, -0.9, 1.8, {en: 'Harvest the crops', bn: 'ফসল তোলো'}, 'hold')
    spot(out.spots, m, 'climate', -R + 3.3, 1.9, 1.6, {en: 'Climate control', bn: 'আবহাওয়া নিয়ন্ত্রণ'})
    out.anchors.leak.greenhouse = W(m, 0, -R + 0.3)
  }
  beds.forEach(z => {
    const half = Math.sqrt(Math.max(0, R * R - (Math.abs(z) + 1.1) ** 2)) - 1.3
    if (half >= 1) rect(out, m, 0, z, half, 0.8)
  })
  blocker(out.colliders, m, R - 3.2, -1.9, 0.6)
  out.waypoints[m.id] = [[R - 2, 0.0], [0, 0.0], [-R + 3, 0.6]]
  let redraw = 0
  return {
    group: g, lights,
    animate(t, dt, s) {
      for (const f of fans) f.rotation.z = t * 6
      robot.position.x = Math.sin(t * 0.23) * (R * 0.7)
      claw.position.y = -1.05 + Math.max(0, Math.sin(t * 1.3)) * 0.25
      for (const fm of fruitMeshes) fm.visible = s.crops > 0.65
      const p = mist.geometry.attributes.position
      const puff = (t % 9) < 3
      mist.visible = puff && s.near
      if (mist.visible) {
        for (let i = 0; i < mistSeeds.length; i++) {
          const [x, z, o] = mistSeeds[i], life = ((t + o * 3) % 3) / 3
          p.setXYZ(i, x + Math.sin(t + i) * 0.2, F + 1.0 + life * 1.4, z + Math.cos(t * 0.7 + i) * 0.3)
        }
        p.needsUpdate = true
      }
      redraw -= dt
      if (redraw <= 0 && s.near) {
        redraw = 0.5
        const c = climate.ctx, w = climate.canvas.width, h = climate.canvas.height
        c.fillStyle = '#132029'
        c.fillRect(0, 0, w, h)
        c.fillStyle = s.mold ? '#ff8a7a' : '#7ef4e0'
        c.font = 'bold 22px system-ui'
        c.fillText(s.mold ? 'HUMIDITY HIGH!' : 'CLIMATE OK', 10, 30)
        c.fillStyle = '#fff1d9'
        c.font = '18px system-ui'
        c.fillText(`🌡 22°C  💧 ${s.mold ? 92 : 60}%`, 10, 62)
        c.fillText(`🌱 ${Math.round(s.crops * 100)}% grown`, 10, 90)
        climate.update()
      }
    },
  }
}

// --- power plant ----------------------------------------------------------------
function power(m, out) {
  const g = moduleGroup(m)
  const b = new Builder()
  const cabinets = []
  for (const z of [-6.6, -3.9]) for (let x = -5.2; x <= 5.2; x += 2.0) {
    b.round(MI.indigo(), x, F + 1.15, z, 1.7, 2.3, 0.85)
    b.box(MI.frame(), x, F + 2.35, z, 1.75, 0.08, 0.9)
    cabinets.push([x, z + 0.44])
  }
  // charge bars: one instanced mesh, coloured by how full the battery is
  const bars = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({toneMapped: false}), cabinets.length * 8)
  const d = new THREE.Object3D()
  let n = 0
  for (const [x, z] of cabinets) for (let k = 0; k < 8; k++) {
    d.position.set(x, F + 0.45 + k * 0.22, z)
    d.scale.set(1.2, 0.14, 0.03)
    d.updateMatrix()
    bars.setMatrixAt(n++, d.matrix)
  }
  g.add(bars)
  // flywheel energy storage
  b.box(MI.frame(), -3.5, F + 0.3, 5.4, 2.6, 0.6, 1.4)
  const flywheel = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.5, 32), MI.steel())
  flywheel.position.set(-3.5, F + 1.6, 5.4)
  flywheel.rotation.x = Math.PI / 2
  flywheel.castShadow = true
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.1, 0.52), MI.trim())
  flywheel.add(stripe)
  g.add(flywheel)
  // control desk + big power-flow wall screen
  b.round(MI.shell(), 3.6, F + 0.5, 5.6, 2.8, 1.0, 1.0)
  b.box(MI.darkSteel(), 3.6, F + 1.05, 5.4, 2.6, 0.08, 0.7, 0, -0.3)
  b.box(MI.frame(), 1.8, F + 2.9, 8.2, 5.4, 3.0, 0.2)
  // breaker panel on the back wall, next to the door to the solar farm
  b.box(MI.frame(), -6.75, F + 1.5, 4.6, 0.2, 2.0, 2.4)
  b.build(g)
  const wall = screen(5.0, 2.6, 320)
  wall.mesh.position.set(1.8, F + 2.9, 8.08)
  wall.mesh.rotation.y = Math.PI
  g.add(wall.mesh)
  const breakers = []
  for (let i = 0; i < 6; i++) {
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.32, 0.08), new THREE.MeshStandardMaterial({color: '#b6ffb0', emissive: '#52e05c', emissiveIntensity: 2}))
    lamp.position.set(-6.6, F + 1.9 - Math.floor(i / 3) * 0.7, 3.8 + (i % 3) * 0.8)
    g.add(lamp)
    breakers.push(lamp)
  }
  const lights = [pointLight(g, '#dff8ff', 0, F + 4.4, -3, 12, 20), pointLight(g, '#dff8ff', 0, F + 4.4, 4, 12, 20)]
  spot(out.spots, m, 'breakers', -5.5, 4.6, 1.8, {en: 'Breaker panel', bn: 'ব্রেকার প্যানেল'})
  spot(out.spots, m, 'powerdesk', 3.6, 4.4, 1.6, {en: 'Power report', bn: 'বিদ্যুতের খবর'})
  rect(out, m, -0.2, -6.6, 6.0, 0.5)
  rect(out, m, -0.2, -3.9, 6.0, 0.5)
  blocker(out.colliders, m, -3.5, 5.4, 1.4)
  blocker(out.colliders, m, 3.6, 5.6, 1.3)
  out.anchors.leak.power = W(m, 0, -8.2)
  out.waypoints.power = [[5, 0], [0, 0], [3.6, 4.2], [-4, -1.5]]
  const color = new THREE.Color()
  let redraw = 0
  return {
    group: g, lights,
    animate(t, dt, s) {
      flywheel.rotation.y = t * (s.breakers ? 9 : 1)
      const level = s.tanks.power / 100
      for (let i = 0; i < bars.count; i++) {
        const k = i % 8, lit = k / 8 < level
        const sweep = Math.max(0, 1 - Math.abs(((t * 1.5) % 1.6) - k / 8) * 6) * (s.charging ? 1 : 0)
        color.set(!s.breakers ? '#3a2a2a' : lit ? (level < 0.25 ? '#ff6b5b' : level < 0.5 ? '#ffc34d' : '#5ef08a') : '#1d2b33')
        color.offsetHSL(0, 0, sweep * 0.25)
        bars.setColorAt(i, color)
      }
      bars.instanceColor.needsUpdate = true
      breakers.forEach((l, i) => {
        const bad = s.surge && (i % 2 === 0 || Math.sin(t * 13 + i) > 0.6)
        l.material.emissive.set(bad ? '#ff3b2f' : '#52e05c')
      })
      for (const light of lights) light.intensity = s.surge ? 4 + Math.random() * 18 : 12
      redraw -= dt
      if (redraw <= 0 && s.near) {
        redraw = 0.25
        const c = wall.ctx, w = wall.canvas.width, h = wall.canvas.height
        c.fillStyle = '#0f1824'
        c.fillRect(0, 0, w, h)
        c.font = 'bold 20px system-ui'
        c.fillStyle = '#fff1d9'
        c.fillText('POWER FLOW', 12, 26)
        const nodes = [['☀️ Sun', 50, 70, s.rates.solar], ['⚛️ Reactor', 50, 130, s.rates.reactor], ['🔋 Battery', 160, 100, s.tanks.power], ['🏠 Base', 270, 100, 0]]
        c.font = '15px system-ui'
        for (const [label, x, y, v] of nodes) {
          c.fillStyle = '#22344a'
          c.beginPath()
          c.roundRect(x - 40, y - 18, 80, 36, 8)
          c.fill()
          c.fillStyle = '#fff1d9'
          c.fillText(label, x - 34, y - 2)
          c.fillStyle = '#7ef4e0'
          c.fillText(label.includes('Battery') ? `${Math.round(v)}%` : label.includes('Base') ? 'using' : `${v.toFixed(1)} kW`, x - 34, y + 14)
        }
        const dash = (x0, y0, x1, y1, speed) => {
          c.strokeStyle = speed > 0.05 ? '#5ef0d6' : '#33434f'
          c.lineWidth = 4
          c.setLineDash([10, 8])
          c.lineDashOffset = -t * 40 * Math.min(2, speed)
          c.beginPath()
          c.moveTo(x0, y0)
          c.lineTo(x1, y1)
          c.stroke()
          c.setLineDash([])
        }
        dash(90, 70, 120, 95, s.rates.solar / 10)
        dash(90, 130, 120, 105, s.rates.reactor / 5)
        dash(200, 100, 230, 100, 1)
        wall.update()
      }
    },
  }
}

// --- water + oxygen plant -------------------------------------------------------
function life(m, out) {
  const g = moduleGroup(m)
  const b = new Builder()
  // water side (z < 0)
  b.round(MI.steel(), -4.2, F + 1.4, -6.6, 2.2, 2.8, 2.0)
  b.box(MI.frame(), -4.2, F + 3.0, -6.6, 1.2, 0.5, 1.2)
  b.cyl(MI.shellShade(), -1.2, F + 1.3, -6.8, 1.0, 2.6, 24)
  b.cyl(MI.lampWarm(), -1.2, F + 1.3, -5.79, 0.35, 0.06, 16, Math.PI / 2)
  for (let i = 0; i < 3; i++) b.cyl(MI.shell(), 1.4 + i * 0.9, F + 1.2, -7.3, 0.36, 2.4, 16)
  b.add(new THREE.CylinderGeometry(0.1, 0.1, 9, 8), flowMats.water(), 0.3, F + 2.9, -8.0, 1, 1, 1, 0, 0, Math.PI / 2)
  // oxygen side (z > 0)
  b.round(MI.indigo(), -3.6, F + 1.3, 6.8, 2.6, 2.6, 1.8)
  b.box(MI.lampWarm(), -3.6, F + 1.5, 5.88, 1.6, 0.8, 0.05)
  b.cyl(MI.glass(), 0.2, F + 1.3, 7.1, 0.9, 2.6, 24)
  for (let i = 0; i < 3; i++) b.cyl(mat('o2tank', () => new THREE.MeshStandardMaterial({color: '#6fd17a', roughness: 0.4, metalness: 0.3})), 3.0 + i * 1.1, F + 1.3, 7.6, 0.45, 2.6, 18)
  b.add(new THREE.CylinderGeometry(0.1, 0.1, 9, 8), flowMats.oxygen(), 0.3, F + 2.9, 8.2, 1, 1, 1, 0, 0, Math.PI / 2)
  b.build(g)
  // clean water tanks with a sloshing water level
  const tanks = []
  for (const z of [-3.4, -6.8]) {
    const shell = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 2.8, 24, 1, true), MI.glass())
    shell.position.set(4.9, F + 1.4, z)
    g.add(shell)
    const water = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 1, 24), MI.water())
    water.position.set(4.9, F, z)
    g.add(water)
    tanks.push(water)
  }
  // bubbles in the electrolysis tank
  const bubbleGeo = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(90 * 3), 3))
  const bubbles = new THREE.Points(bubbleGeo, new THREE.PointsMaterial({color: '#e8fbff', size: 0.12, map: dotTexture(), transparent: true, opacity: 0.85, depthWrite: false}))
  bubbles.frustumCulled = false
  g.add(bubbles)
  const filters = []
  for (let i = 0; i < 3; i++) {
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.25, 16), new THREE.MeshStandardMaterial({color: '#6fc1ff', emissive: '#2a7bbf', emissiveIntensity: 1}))
    cap.position.set(1.4 + i * 0.9, F + 2.5, -7.3)
    g.add(cap)
    filters.push(cap)
  }
  const lights = [pointLight(g, '#bfe8ff', 0, F + 4.4, -4, 12, 18), pointLight(g, '#ffe2c0', 0, F + 4.4, 4, 12, 18)]
  spot(out.spots, m, 'filter', 2.3, -5.6, 1.8, {en: 'Water filters', bn: 'পানির ফিল্টার'})
  spot(out.spots, m, 'moxie', -3.6, 5.0, 1.6, {en: 'Oxygen maker', bn: 'অক্সিজেন যন্ত্র'})
  for (const [x, z, r] of [[-4.2, -6.6, 1.3], [-1.2, -6.8, 1.1], [2.3, -7.3, 1.3], [4.9, -3.4, 0.9], [4.9, -6.8, 0.9], [-3.6, 6.8, 1.4], [0.2, 7.1, 1.0], [4.1, 7.6, 1.5]]) blocker(out.colliders, m, x, z, r)
  out.anchors.leak.life = W(m, 0, 9.2)
  out.waypoints.life = [[5, 0], [0, 0], [2.3, -4.8], [-3.6, 4.6]]
  return {
    group: g, lights,
    animate(t, dt, s) {
      tanks.forEach((w, i) => {
        const level = clamp(s.tanks.water / 100, 0.05, 1) * 2.6
        w.scale.y = level + Math.sin(t * 2 + i) * 0.03
        w.position.y = F + 0.1 + w.scale.y / 2
      })
      filters.forEach((f, i) => f.material.emissive.set(s.filterClog ? (Math.sin(t * 6 + i) > 0 ? '#ff3b2f' : '#5a2a1a') : '#2a7bbf'))
      if (s.near) {
        const p = bubbleGeo.attributes.position
        for (let i = 0; i < 90; i++) {
          const life = (t * 0.6 + i * 0.137) % 1
          p.setXYZ(i, 0.2 + Math.sin(i * 7.1) * 0.6, F + 0.2 + life * 2.3, 7.1 + Math.cos(i * 3.3) * 0.6)
        }
        p.needsUpdate = true
      }
    },
  }
}

// --- garage --------------------------------------------------------------------
function garage(m, out) {
  const g = moduleGroup(m)
  const b = new Builder()
  b.box(MI.hazard(), -1.5, F + 0.02, -2.6, 8, 0.02, 0.2)
  b.box(MI.hazard(), -1.5, F + 0.02, 2.6, 8, 0.02, 0.2)
  b.box(MI.wood(), 3.6, F + 0.9, -7.4, 4.2, 0.12, 1.2)
  b.box(MI.frame(), 3.6, F + 0.45, -7.4, 4.0, 0.9, 1.0)
  b.box(MI.shellShade(), 3.6, F + 2.4, -8.1, 4.4, 2.0, 0.08)
  for (let i = 0; i < 7; i++) b.box(MI.steel(), 1.9 + i * 0.55, F + 2.3 + (i % 2) * 0.3, -8.0, 0.08, 0.6, 0.06)
  for (let x = -6; x <= -1; x += 1.25) for (let y = 0; y < 3; y++) b.round(MI.wood(), x, F + 0.42 + y * 0.82, 7.8, 1.1, 0.75, 0.75)
  for (let i = 0; i < 3; i++) b.cyl(MI.rubber(), -6.2, F + 0.3 + i * 0.6, -6.8, 0.55, 0.45, 18)
  b.round(MI.shell(), 4.6, F + 1.2, 6.3, 2.4, 2.4, 2.0)
  b.box(MI.glass(), 4.6, F + 1.5, 5.25, 2.0, 1.6, 0.05)
  b.round(MI.shellShade(), -2.2, F + 0.6, 7.0, 0.8, 1.2, 0.8)
  b.build(g)
  // the 3D printer making a new wheel
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), MI.trim())
  head.position.set(4.6, F + 1.8, 6.3)
  g.add(head)
  const part = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1, 20), MI.rubber())
  part.rotation.x = Math.PI / 2
  part.position.set(4.6, F + 0.8, 6.3)
  g.add(part)
  // a robot arm that waves tools about
  const arm = new THREE.Group()
  arm.position.set(0.5, F, 6.6)
  const lower = new THREE.Group(), upper = new THREE.Group()
  const ab = new Builder()
  ab.cyl(MI.frame(), 0, 0.2, 0, 0.45, 0.4, 16)
  ab.build(arm)
  const lb = new Builder()
  lb.round(MI.trim(), 0, 0.8, 0, 0.3, 1.6, 0.3)
  lb.build(lower)
  lower.position.y = 0.4
  upper.position.y = 1.6
  const ub = new Builder()
  ub.round(MI.shell(), 0, 0.6, 0, 0.25, 1.2, 0.25)
  ub.ball(MI.lampCool(), 0, 1.25, 0, 0.12)
  ub.build(upper)
  lower.add(upper)
  arm.add(lower)
  g.add(arm)
  const lights = [pointLight(g, '#ffe2c0', 0, F + 5.4, 0, 16, 24)]
  spot(out.spots, m, 'printer', 3.4, 5.0, 1.7, {en: '3D printer', bn: 'থ্রিডি প্রিন্টার'})
  for (const [x, z, r] of [[3.6, -7.4, 1.4], [4.6, 6.3, 1.4], [0.5, 6.6, 0.6], [-6.2, -6.8, 0.6], [-3.5, 7.8, 1.6], [-2.2, 7.0, 0.6]]) blocker(out.colliders, m, x, z, r)
  out.anchors.roverPark = W(m, -1.5, 0)
  out.anchors.roverDoor = W(m, -m.hd - 6, 0)
  out.anchors.roverFacing = m.facing + Math.PI
  out.anchors.leak.garage = W(m, 2, -8.3)
  out.waypoints.garage = [[6, 0], [1, -2], [3.4, -5.8], [2, 4.6]]
  return {
    group: g, lights,
    animate(t) {
      const cycle = (t / 30) % 1
      part.scale.y = 0.05 + cycle * 0.4
      part.position.y = F + 0.8
      head.position.x = 4.6 + Math.sin(t * 3) * 0.4
      head.position.z = 6.3 + Math.cos(t * 2.3) * 0.4
      lower.rotation.z = Math.sin(t * 0.7) * 0.5
      upper.rotation.z = Math.sin(t * 1.1 + 1) * 0.8
      arm.rotation.y = Math.sin(t * 0.4) * 1.2
    },
  }
}

// --- science lab ----------------------------------------------------------------
function lab(m, out, marsTexture) {
  const g = moduleGroup(m)
  const b = new Builder()
  const R = m.r
  b.cyl(MI.frame(), 0, F + 0.45, 0, 0.9, 0.9, 24)
  b.cyl(MI.lampCool(), 0, F + 0.92, 0, 0.7, 0.03, 24)
  // shelves for collected rocks, on both sides
  for (const side of [-1, 1]) {
    const a = side * Math.PI / 2
    const [x, z] = polar(a, R - 0.9)
    for (let k = 0; k < 3; k++) b.box(MI.wood(), x, F + 0.6 + k * 0.7, z, 3.6, 0.06, 0.6, -a + Math.PI / 2)
    b.box(MI.frame(), x, F + 1.3, z, 3.7, 2.6, 0.05, -a + Math.PI / 2)
  }
  // microscope desk and radio desk
  const [mx, mz] = polar(1.15, R - 1.6)
  b.box(MI.shell(), mx, F + 0.85, mz, 2.0, 0.08, 1.0, -1.15 + Math.PI / 2)
  b.box(MI.frame(), mx, F + 0.42, mz, 1.8, 0.84, 0.9, -1.15 + Math.PI / 2)
  b.cyl(MI.darkSteel(), mx, F + 1.25, mz, 0.12, 0.7, 10)
  const [rx, rz] = polar(-1.95, R - 1.6)
  b.box(MI.shell(), rx, F + 0.85, rz, 2.0, 0.08, 1.0, 1.95 + Math.PI / 2)
  b.box(MI.frame(), rx, F + 0.42, rz, 1.8, 0.84, 0.9, 1.95 + Math.PI / 2)
  b.cyl(MI.steel(), rx + 0.4, F + 1.4, rz, 0.04, 1.1, 6)
  // seismometer (like NASA's InSight) on the floor
  const [sx, sz] = polar(-1.0, R - 2.4)
  b.ball(MI.shellShade(), sx, F + 0.1, sz, 0.55, 0.45, 0.55)
  b.build(g)
  const globe = new THREE.Mesh(new THREE.SphereGeometry(0.85, 48, 24),
    new THREE.MeshStandardMaterial({map: marsTexture ?? null, color: marsTexture ? '#ffffff' : '#c1704f', roughness: 0.9, emissive: '#3a1a10', emissiveIntensity: 0.25}))
  globe.position.set(0, F + 2.0, 0)
  g.add(globe)
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.025, 6, 48), MI.lampCool())
  ring.position.copy(globe.position)
  ring.rotation.x = Math.PI / 2.4
  g.add(ring)
  const weather = screen(1.6, 0.9, 256)
  const [wx, wz] = polar(Math.PI * 0.75, R - 0.5)
  weather.mesh.position.set(wx, F + 2.0, wz)
  weather.mesh.rotation.y = -Math.PI * 0.75 - Math.PI / 2
  g.add(weather.mesh)
  // rock collection: appears as you bring samples home
  const rocks = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(0.16, 0), new THREE.MeshStandardMaterial({vertexColors: false, color: '#ad765d', flatShading: true}), 30)
  const d = new THREE.Object3D()
  let n = 0
  for (const side of [-1, 1]) {
    const a = side * Math.PI / 2
    for (let k = 0; k < 3; k++) for (let i = 0; i < 5; i++) {
      const along = (i - 2) * 0.65
      const [cx, cz] = polar(a, R - 0.95)
      d.position.set(cx + Math.cos(a + Math.PI / 2) * along, F + 0.75 + k * 0.7, cz + Math.sin(a + Math.PI / 2) * along)
      d.rotation.set(i, k, i + k)
      d.updateMatrix()
      rocks.setMatrixAt(n, d.matrix)
      rocks.setColorAt(n, new THREE.Color().setHSL(0.04 + (n % 5) * 0.015, 0.4, 0.35 + (n % 3) * 0.08))
      n++
    }
  }
  g.add(rocks)
  const needle = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.4, 0.02), MI.trim())
  needle.position.set(sx, F + 0.75, sz)
  g.add(needle)
  const lights = [pointLight(g, '#d6f3ff', 0, F + 4.6, 0, 12, 18)]
  spot(out.spots, m, 'globe', 1.6, 0, 2.2, {en: 'Mars globe: travel', bn: 'মঙ্গলের গ্লোব: ভ্রমণ'})
  spot(out.spots, m, 'radio', ...polar(-1.95, R - 3.0), 1.6, {en: 'Call Earth', bn: 'পৃথিবীকে কল করো'})
  spot(out.spots, m, 'microscope', ...polar(1.15, R - 3.0), 1.6, {en: 'Microscope', bn: 'অণুবীক্ষণ যন্ত্র'})
  blocker(out.colliders, m, 0, 0, 1.0)
  blocker(out.colliders, m, mx, mz, 1.0)
  blocker(out.colliders, m, rx, rz, 1.0)
  out.anchors.leak.lab = W(m, ...polar(2.4, R - 0.3))
  out.waypoints.lab = [[R - 2, 0], [-1.8, 1.4], [...polar(1.15, R - 3)], [...polar(-1.95, R - 3)]]
  let redraw = 0
  return {
    group: g, lights, weather,
    animate(t, dt, s) {
      globe.rotation.y = t * 0.25
      ring.rotation.z = t * 0.4
      needle.rotation.z = Math.sin(t * 13) * 0.1 * (0.3 + Math.sin(t * 0.7) ** 8)
      rocks.count = Math.min(30, s.samples)
      redraw -= dt
      if (redraw <= 0 && s.near && s.clock) {
        redraw = 1
        const c = weather.ctx, w = weather.canvas.width, h = weather.canvas.height
        c.fillStyle = '#0f1824'
        c.fillRect(0, 0, w, h)
        c.fillStyle = '#7ef4e0'
        c.font = 'bold 18px system-ui'
        c.fillText(`REAL MARS TODAY`, 10, 24)
        c.fillStyle = '#fff1d9'
        c.font = '15px system-ui'
        c.fillText(`Mars Year ${s.clock.marsYear} · Sol ${s.clock.sol}`, 10, 50)
        c.fillText(`Season: northern ${s.clock.northernSeason}`, 10, 72)
        c.fillText(`Earth is ${(s.earth.km / 1e6).toFixed(0)} million km away`, 10, 94)
        c.fillText(`Radio takes ${s.earth.lightMinutes.toFixed(1)} minutes`, 10, 116)
        c.fillStyle = s.clock.dustSeason ? '#ffb23a' : '#9ad7a0'
        c.fillText(s.clock.dustSeason ? 'Dust storm season!' : 'Calm season', 10, 138)
        weather.update()
      }
    },
  }
}

// --- extras you can build ---------------------------------------------------------
function observatory(m, out) {
  const g = moduleGroup(m)
  const b = new Builder()
  b.cyl(MI.frame(), 0, F + 0.6, 0, 0.8, 1.2, 16)
  b.build(g)
  const scope = new THREE.Group()
  scope.position.set(0, F + 1.6, 0)
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 3.2, 20), MI.shell())
  tube.rotation.z = Math.PI / 3
  tube.position.y = 0.6
  scope.add(tube)
  g.add(scope)
  const lights = [pointLight(g, '#c9b8ff', 0, F + 4, 0, 9, 14)]
  spot(out.spots, m, 'telescope', 1.5, 0, 1.8, {en: 'Telescope', bn: 'দূরবীন'})
  blocker(out.colliders, m, 0, 0, 1.0)
  return {group: g, lights, animate(t) { scope.rotation.y = t * 0.1 }}
}

function playroom(m, out) {
  const g = moduleGroup(m)
  const b = new Builder()
  b.cyl(MI.frame(), -2.5, F + 0.35, 2.0, 2.0, 0.7, 24)
  const colors = ['#ff6b6b', '#ffd166', '#06d6a0', '#4cc9f0', '#b07ad6']
  for (let i = 0; i < 60; i++) {
    const a = i * 2.4, r = Math.sqrt(i / 60) * 1.7
    b.ball(mat(`ball-${i % 5}`, () => new THREE.MeshStandardMaterial({color: colors[i % 5], roughness: 0.5})), -2.5 + Math.cos(a) * r, F + 0.7 + (i % 3) * 0.12, 2.0 + Math.sin(a) * r, 0.17)
  }
  b.cyl(MI.wood(), 2.6, F + 1.4, -2.0, 0.25, 2.8, 12)
  b.cyl(MI.fabricWarm(), 2.6, F + 2.9, -2.0, 1.0, 0.15, 20)
  b.cyl(MI.fabric(), 2.6, F + 1.6, -2.0, 0.8, 0.12, 20)
  b.build(g)
  const trampoline = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.1, 24), MI.indigo())
  trampoline.position.set(1.5, F + 0.6, 3.0)
  g.add(trampoline)
  const yarn = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 10), MI.fabricWarm())
  g.add(yarn)
  const lights = [pointLight(g, '#ffd6a8', 0, F + 4, 0, 10, 16)]
  spot(out.spots, m, 'trampoline', 1.5, 3.0, 1.6, {en: 'Bounce!', bn: 'লাফাও!'})
  blocker(out.colliders, m, -2.5, 2.0, 2.0)
  blocker(out.colliders, m, 2.6, -2.0, 1.0)
  return {
    group: g, lights,
    animate(t) {
      yarn.position.set(Math.cos(t * 0.8) * 3.5, F + 0.3, Math.sin(t * 0.8) * 3.5 - 1)
      yarn.rotation.z = -t * 2.5
      trampoline.scale.y = 1 + Math.sin(t * 6) * 0.3
    },
  }
}

// --- build them all ---------------------------------------------------------------
export function makeInteriors(scene, placed, {marsTexture} = {}) {
  const out = {spots: [], colliders: [], segs: [], waypoints: {}, anchors: {leak: {}}}
  const list = []
  for (const m of placed) {
    const make = {hub, greenhouse, power, life, garage, lab, greenhouse2: (mm, o) => greenhouse(mm, o, true), observatory, playroom}[m.type]
    if (!make) continue
    const entry = make(m, out, marsTexture)
    scene.add(entry.group)
    list.push({id: m.id, m, ...entry})
  }
  return {list, ...out}
}

// Lights only switch on for the building you are in (fast on phones).
export function updateInteriorLights(list, activeModule) {
  for (const entry of list) for (const l of entry.lights) l.visible = entry.id === activeModule
}
export {lerp, glow}
