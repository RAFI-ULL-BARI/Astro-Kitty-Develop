// Outside the base: solar farm, ice drill, radio tower, landing pad, weather station, lamps,
// and the things you can build later (reactor, fuel plant, brick printer).
import * as THREE from 'three'
import {Builder, M, mat, sign, glow} from './kit.js'
import {OUTDOOR, toWorld} from './layout.js'
import {flowMats} from './interiors.js'
import {clamp, lerp, TAU} from './util.js'

function panelUnit() {
  const pivot = new THREE.Group()
  const b = new Builder()
  b.box(M.frame(), 0, -0.05, 0, 3.4, 0.08, 2.2)
  b.build(pivot)
  const cells = new THREE.Mesh(new THREE.PlaneGeometry(3.3, 2.1).rotateX(-Math.PI / 2), M.solarCell())
  cells.position.y = 0.0
  cells.receiveShadow = true
  pivot.add(cells)
  return pivot
}

export function makeOutdoor(scene, height, built, {extraSpots, extraColliders}) {
  const group = new THREE.Group()
  scene.add(group)
  const animators = []
  const spots = extraSpots, colliders = extraColliders

  // --- solar farms: panels follow the Sun across the sky
  const panels = []
  const farms = [OUTDOOR.solarFarm, ...(built.includes('solar2') ? [OUTDOOR.solarFarm2] : [])]
  for (const f of farms) {
    const b = new Builder()
    for (let i = 0; i < f.cols; i++) for (let j = 0; j < f.rows; j++) {
      const x = lerp(f.x0, f.x1, f.cols > 1 ? i / (f.cols - 1) : 0.5), z = lerp(f.z0, f.z1, f.rows > 1 ? j / (f.rows - 1) : 0.5)
      const y = height(x, z)
      b.cyl(M.shellShade(), x, y + 0.15, z, 0.45, 0.3, 12)
      b.cyl(M.frame(), x, y + 1.1, z, 0.12, 1.8, 8)
      const mount = new THREE.Group()
      mount.position.set(x, y + 2.05, z)
      const pivot = panelUnit()
      mount.add(pivot)
      group.add(mount)
      panels.push({mount, pivot})
      colliders.push({x, z, r: 0.45})
    }
    for (let j = 0; j < f.rows; j++) {
      const z = lerp(f.z0, f.z1, f.rows > 1 ? j / (f.rows - 1) : 0.5)
      spots.push({id: `panels-${spots.filter(s => s.id.startsWith('panels')).length}`, x: f.x0 - 2.2, z, r: 2.2, verb: 'hold', label: {en: 'Brush the panels', bn: 'প্যানেল ব্রাশ করো'}})
    }
    b.build(group)
  }
  const farmSign = sign('☀️', 'SOLAR FARM', 'সোলার খামার', 4)
  farmSign.position.set(OUTDOOR.solarFarm.x0 - 3, height(OUTDOOR.solarFarm.x0 - 3, -21) + 2.6, -21)
  farmSign.rotation.y = -Math.PI / 2 + 0.4
  group.add(farmSign)
  const signPost = new Builder()
  signPost.cyl(M.frame(), OUTDOOR.solarFarm.x0 - 3, height(OUTDOOR.solarFarm.x0 - 3, -21) + 1, -21, 0.08, 2, 8)
  signPost.build(group)

  // glowing power cable from the farm to the power plant
  const cable = new Builder()
  const cy = x => height(x, 0.6) + 0.12
  for (let x = 32.5; x < OUTDOOR.solarFarm.x0; x += 2) cable.add(new THREE.CylinderGeometry(0.12, 0.12, 2.02, 6), flowMats.power(), x + 1, cy(x + 1), 0.6, 1, 1, 1, 0, 0, Math.PI / 2)
  for (let z = OUTDOOR.solarFarm.z0; z < OUTDOOR.solarFarm.z1; z += 2) cable.add(new THREE.CylinderGeometry(0.1, 0.1, 2.02, 6), flowMats.power(), OUTDOOR.solarFarm.x0 - 1, height(OUTDOOR.solarFarm.x0 - 1, z + 1) + 0.1, z + 1, 1, 1, 1, Math.PI / 2)
  cable.build(group, {shadows: false})

  // --- ice drill with a conveyor into the water plant
  const D = OUTDOOR.iceDrill, dy = height(D.x, D.z)
  const rig = new Builder()
  for (let k = 0; k < 3; k++) {
    const a = k / 3 * TAU
    rig.box(M.trim(), D.x + Math.cos(a) * 1.4, dy + 3.2, D.z + Math.sin(a) * 1.4, 0.22, 6.6, 0.22, -a, 0, 0.2)
  }
  rig.round(M.shell(), D.x, dy + 6.4, D.z, 1.4, 0.9, 1.4)
  rig.round(M.indigo(), D.x + 2.6, dy + 0.8, D.z + 1.2, 2.4, 1.6, 1.8)
  rig.cyl(mat('ice', () => new THREE.MeshStandardMaterial({color: '#dff4ff', roughness: 0.25, emissive: '#6fb7d8', emissiveIntensity: 0.2})), D.x + 2.8, dy + 0.4, D.z - 2.2, 1.2, 0.8, 10, 0, 0, 0, 0.3)
  rig.build(group)
  const drillString = new THREE.Group()
  drillString.position.set(D.x, dy, D.z)
  const ds = new Builder()
  ds.cyl(M.steel(), 0, 3.2, 0, 0.16, 6.2, 10)
  for (let k = 0; k < 8; k++) ds.box(M.darkSteel(), 0, 0.6 + k * 0.7, 0, 0.5, 0.06, 0.14, k * 0.8)
  ds.build(drillString)
  group.add(drillString)
  colliders.push({x: D.x, z: D.z, r: 1.8}, {x: D.x + 2.6, z: D.z + 1.2, r: 1.5})
  spots.push({id: 'drill', x: D.x + 2.6, z: D.z + 3.4, r: 2.2, verb: 'tap', label: {en: 'Ice drill', bn: 'বরফ ড্রিল'}})
  // conveyor tube with ice chunks riding into the base
  const start = new THREE.Vector3(D.x + 3.5, dy + 1.2, D.z), end = new THREE.Vector3(-36.5, height(-36.5, 0) + 1.4, 0)
  const conveyor = new Builder()
  const steps = 10
  for (let i = 0; i < steps; i++) {
    const a = start.clone().lerp(end, i / steps), b = start.clone().lerp(end, (i + 1) / steps)
    const mid = a.clone().add(b).multiplyScalar(0.5), len = a.distanceTo(b)
    const yaw = Math.atan2(b.z - a.z, b.x - a.x)
    conveyor.add(new THREE.CylinderGeometry(0.32, 0.32, len, 10, 1, true), M.glass(), mid.x, mid.y, mid.z, 1, 1, 1, 0, -yaw, Math.PI / 2)
    conveyor.box(M.frame(), mid.x, height(mid.x, mid.z) + (mid.y - height(mid.x, mid.z)) / 2, mid.z, 0.12, mid.y - height(mid.x, mid.z), 0.12)
  }
  conveyor.build(group, {shadows: false})
  const chunks = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(0.18, 0), mat('ice'), 12)
  group.add(chunks)

  // --- radio tower: the dish keeps pointing at Earth
  const C = OUTDOOR.comms, cyb = height(C.x, C.z)
  const tower = new Builder()
  for (let k = 0; k < 4; k++) {
    const a = k / 4 * TAU + Math.PI / 4
    tower.box(M.frame(), C.x + Math.cos(a) * 1.0, cyb + 8, C.z + Math.sin(a) * 1.0, 0.14, 16, 0.14, -a, 0, 0)
  }
  for (let y = 1; y < 16; y += 1.6) for (let k = 0; k < 4; k++) {
    const a = k / 4 * TAU + Math.PI / 4, b = a + Math.PI / 2
    const x0 = C.x + Math.cos(a) * 1.0, z0 = C.z + Math.sin(a) * 1.0, x1 = C.x + Math.cos(b) * 1.0, z1 = C.z + Math.sin(b) * 1.0
    tower.box(M.frame(), (x0 + x1) / 2, cyb + y, (z0 + z1) / 2, Math.hypot(x1 - x0, z1 - z0), 0.07, 0.07, -Math.atan2(z1 - z0, x1 - x0))
  }
  tower.round(M.shell(), C.x + 2.6, cyb + 1.1, C.z, 2.6, 2.2, 2.2)
  tower.build(group)
  const dishMount = new THREE.Group()
  dishMount.position.set(C.x, cyb + 16.3, C.z)
  const dishTilt = new THREE.Group()
  dishMount.add(dishTilt)
  const bowl = new THREE.Mesh(new THREE.SphereGeometry(2.4, 32, 12, 0, TAU, 0, 1.0), new THREE.MeshStandardMaterial({color: '#e7e1da', roughness: 0.45, metalness: 0.25, side: THREE.DoubleSide}))
  bowl.rotation.x = -Math.PI / 2
  bowl.position.z = 2.0
  bowl.castShadow = true
  dishTilt.add(bowl)
  const feed = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.0, 6), M.frame())
  feed.rotation.x = Math.PI / 2
  feed.position.z = 0.4
  dishTilt.add(feed)
  group.add(dishMount)
  const beacon = glow('#ff4b3a', 2.4, 0.9)
  beacon.position.set(C.x, cyb + 17.8, C.z)
  group.add(beacon)
  colliders.push({x: C.x, z: C.z, r: 1.4}, {x: C.x + 2.6, z: C.z, r: 1.5})
  spots.push({id: 'dish', x: C.x + 2.6, z: C.z + 2.4, r: 2.2, verb: 'tap', label: {en: 'Radio dish', bn: 'রেডিও ডিশ'}})

  // --- landing pad with a lander and chasing lights
  const P = OUTDOOR.landingPad, py = height(P.x, P.z)
  const pad = new Builder()
  pad.cyl(mat('pad', () => new THREE.MeshStandardMaterial({color: '#7d7a80', roughness: 0.85})), P.x, py + 0.12, P.z, P.r, 0.3, 48)
  pad.cyl(M.trim(), P.x, py + 0.28, P.z, P.r * 0.55, 0.03, 48)
  pad.cyl(mat('pad'), P.x, py + 0.3, P.z, P.r * 0.5, 0.03, 48)
  // a lander resting on the pad
  const lx = P.x + 3, lz = P.z - 2
  pad.cyl(M.shell(), lx, py + 3.6, lz, 1.6, 3.6, 20, 0, 0, 0, 0.75)
  pad.cyl(M.indigo(), lx, py + 5.7, lz, 0.9, 0.8, 18, 0, 0, 0, 0.4)
  pad.cyl(M.darkSteel(), lx, py + 1.5, lz, 1.2, 0.8, 16, 0, 0, 0, 0.7)
  for (let k = 0; k < 4; k++) {
    const a = k / 4 * TAU
    pad.box(M.frame(), lx + Math.cos(a) * 1.9, py + 1.2, lz + Math.sin(a) * 1.9, 0.14, 2.6, 0.14, -a, 0, 0.45)
    pad.cyl(M.frame(), lx + Math.cos(a) * 2.5, py + 0.1, lz + Math.sin(a) * 2.5, 0.4, 0.12, 10)
  }
  pad.build(group)
  const padLights = []
  for (let k = 0; k < 16; k++) {
    const a = k / 16 * TAU
    const l = glow('#ffcf8a', 1.0, 0.0)
    l.position.set(P.x + Math.cos(a) * (P.r - 0.3), py + 0.45, P.z + Math.sin(a) * (P.r - 0.3))
    group.add(l)
    padLights.push(l)
  }
  colliders.push({x: lx, z: lz, r: 2.6})
  spots.push({id: 'pad', x: P.x - 2, z: P.z + 2, r: 3, verb: 'tap', label: {en: 'Landing pad', bn: 'অবতরণ প্যাড'}})

  // --- weather station with a spinning wind meter
  const Wst = OUTDOOR.weather, wy = height(Wst.x, Wst.z)
  const ws = new Builder()
  ws.cyl(M.frame(), Wst.x, wy + 1.6, Wst.z, 0.06, 3.2, 8)
  ws.round(M.shell(), Wst.x, wy + 0.4, Wst.z, 0.7, 0.8, 0.5)
  ws.box(M.shell(), Wst.x, wy + 2.4, Wst.z, 0.8, 0.06, 0.06)
  ws.build(group)
  const cups = new THREE.Group()
  cups.position.set(Wst.x, wy + 3.25, Wst.z)
  for (let k = 0; k < 3; k++) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.03, 0.03), M.frame())
    arm.position.x = 0.25
    const cup = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6, 0, Math.PI), M.trim())
    cup.position.set(0.5, 0, 0)
    const holder = new THREE.Group()
    holder.rotation.y = k / 3 * TAU
    holder.add(arm, cup)
    cups.add(holder)
  }
  group.add(cups)
  colliders.push({x: Wst.x, z: Wst.z, r: 0.5})
  spots.push({id: 'weather', x: Wst.x + 1.4, z: Wst.z + 1.0, r: 1.8, verb: 'tap', label: {en: 'Weather station', bn: 'আবহাওয়া কেন্দ্র'}})

  // --- lamp posts along the paths (they switch on at dusk)
  const lampPositions = []
  for (const [ax, az, bx, bz] of [[-11, 11, -40, 40], [-36, 0, -48, 8], [36, 0, 39, 0], [0, 37, 0, 50], [18, -30, 20, -42]]) {
    const n = Math.max(1, Math.floor(Math.hypot(bx - ax, bz - az) / 9))
    for (let i = 0; i <= n; i++) {
      const t = i / n, x = lerp(ax, bx, t) + 1.8, z = lerp(az, bz, t) + 1.8
      lampPositions.push([x, z])
    }
  }
  const lb = new Builder()
  const lampGlows = []
  for (const [x, z] of lampPositions) {
    const y = height(x, z)
    lb.cyl(M.frame(), x, y + 1.6, z, 0.06, 3.2, 8)
    lb.box(M.shell(), x, y + 3.25, z, 0.5, 0.14, 0.3)
    const g = glow('#ffd9a0', 2.2, 0)
    g.position.set(x, y + 3.1, z)
    group.add(g)
    lampGlows.push(g)
    colliders.push({x, z, r: 0.25})
  }
  lb.build(group)

  // --- things you build later
  const extras = {}
  if (built.includes('reactor')) extras.reactor = reactor(group, height, colliders, spots)
  if (built.includes('fuel')) extras.fuel = fuelPlant(group, height, colliders, spots)
  if (built.includes('printer')) extras.printer = printerYard(group, height, colliders, spots)

  const tmp = new THREE.Object3D(), tmpV = new THREE.Vector3()
  return {
    group, panels,
    update(t, dt, s) {
      // Panels follow the Sun by day and lie flat at night (and in storms, to shed dust).
      const sun = s.sunDir
      const up = sun.y > 0.03 && s.storm < 0.5
      const yaw = Math.atan2(sun.x, sun.z), tilt = up ? Math.PI / 2 - Math.asin(clamp(sun.y, 0, 1)) : 0
      for (const p of panels) {
        p.mount.rotation.y = up ? lerp(p.mount.rotation.y, yaw, 0.03) : p.mount.rotation.y
        p.pivot.rotation.x = lerp(p.pivot.rotation.x, tilt * 0.85, 0.03)
      }
      M.solarCell().color.setRGB(1 - s.dust * 0.45, 1 - s.dust * 0.55, 1 - s.dust * 0.68)
      // drill
      const working = !s.drillJam
      drillString.rotation.y += dt * (working ? 4 : 0)
      drillString.position.y = dy - (working ? (Math.sin(t * 0.7) * 0.3 + 0.3) : 0) + (s.drillJam ? Math.sin(t * 40) * 0.03 : 0)
      for (let i = 0; i < chunks.count; i++) {
        const f = working ? ((t * 0.05 + i / chunks.count) % 1) : i / chunks.count
        tmpV.copy(start).lerp(end, f)
        tmp.position.copy(tmpV)
        tmp.rotation.set(i, t * (working ? 1 : 0), i * 2)
        tmp.updateMatrix()
        chunks.setMatrixAt(i, tmp.matrix)
      }
      chunks.instanceMatrix.needsUpdate = true
      // dish points at Earth (wobbles when the comms are broken)
      const e = s.earthDir
      dishMount.rotation.y = Math.atan2(e.x, e.z) + (s.comms ? Math.sin(t * 0.8) * 0.9 : 0)
      dishTilt.rotation.x = -Math.asin(clamp(e.y, -0.2, 0.9)) + (s.comms ? 0.4 : 0)
      beacon.material.opacity = (t % 1.6) < 0.5 ? 0.95 : 0.1
      // landing pad lights chase around
      padLights.forEach((l, k) => { l.material.opacity = (Math.floor(t * 8) % 16 === k ? 1 : 0.25) * (0.3 + s.night * 0.7) })
      cups.rotation.y += dt * (3 + s.storm * 14 + Math.sin(t * 0.3) * 1.5)
      for (const g of lampGlows) g.material.opacity = s.night * 0.85
      for (const x of Object.values(extras)) x.update?.(t, dt, s)
    },
  }
}

function reactor(group, height, colliders, spots) {
  const R = OUTDOOR.reactor, y = height(R.x, R.z)
  const b = new Builder()
  b.cyl(M.regolith(), R.x, y + 0.9, R.z, 8.5, 1.8, 40, 0, 0, 0, 0.92)
  b.cyl(M.shellShade(), R.x, y + 2.4, R.z, 1.2, 3.6, 20)
  b.cyl(M.trim(), R.x, y + 4.3, R.z, 1.25, 0.25, 20)
  b.build(group)
  const fins = new THREE.Group()
  fins.position.set(R.x, y + 3.4, R.z)
  const finMat = new THREE.MeshStandardMaterial({color: '#4a4e5c', roughness: 0.4, metalness: 0.5, emissive: '#ff5a2a', emissiveIntensity: 0.6})
  for (let k = 0; k < 8; k++) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.2, 0.06), finMat)
    fin.position.set(Math.cos(k / 8 * TAU) * 2.9, 0, Math.sin(k / 8 * TAU) * 2.9)
    fin.rotation.y = -k / 8 * TAU
    fins.add(fin)
  }
  group.add(fins)
  const label = sign('⚛️', 'FISSION POWER', 'পারমাণবিক বিদ্যুৎ', 3.4)
  label.position.set(R.x - 8, y + 2.2, R.z)
  label.rotation.y = -Math.PI / 2
  group.add(label)
  colliders.push({x: R.x, z: R.z, r: 8.6})
  spots.push({id: 'reactor', x: R.x - 10, z: R.z, r: 2.5, verb: 'tap', label: {en: 'Fission power unit', bn: 'পারমাণবিক বিদ্যুৎ ইউনিট'}})
  return {update(t) { finMat.emissiveIntensity = 0.5 + Math.sin(t * 1.4) * 0.2 }}
}

function fuelPlant(group, height, colliders, spots) {
  const F2 = OUTDOOR.fuel, y = height(F2.x, F2.z)
  const b = new Builder()
  for (let k = 0; k < 3; k++) b.cyl(mat('fuelTank', () => new THREE.MeshStandardMaterial({color: '#e9e6ee', roughness: 0.35, metalness: 0.4})), F2.x + k * 3, y + 2.6, F2.z, 1.2, 5.2, 20)
  b.round(M.indigo(), F2.x + 3, y + 0.8, F2.z + 3.4, 7, 1.6, 2.2)
  b.build(group)
  const vapor = glow('#f5fbff', 3, 0)
  vapor.position.set(F2.x + 6, y + 5.6, F2.z)
  group.add(vapor)
  colliders.push({x: F2.x + 3, z: F2.z, r: 4.6})
  spots.push({id: 'fuel', x: F2.x + 3, z: F2.z + 6, r: 2.4, verb: 'tap', label: {en: 'Rocket fuel plant', bn: 'রকেট জ্বালানি কারখানা'}})
  return {update(t) { const p = (t % 7) / 7; vapor.material.opacity = p < 0.3 ? Math.sin(p / 0.3 * Math.PI) * 0.6 : 0; vapor.position.y = y + 5.6 + p * 3 }}
}

function printerYard(group, height, colliders, spots) {
  const P = OUTDOOR.printer, y = height(P.x, P.z)
  const b = new Builder()
  b.box(M.frame(), P.x, y + 3.5, P.z - 3, 0.2, 7, 0.2)
  b.box(M.frame(), P.x, y + 3.5, P.z + 3, 0.2, 7, 0.2)
  b.box(M.frame(), P.x, y + 7, P.z, 0.25, 0.25, 6.2)
  b.build(group)
  const wall = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1, 5.6), M.regolith())
  wall.position.set(P.x + 2.2, y, P.z)
  group.add(wall)
  const nozzle = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.6, 10), M.trim())
  nozzle.rotation.x = Math.PI
  group.add(nozzle)
  colliders.push({x: P.x + 2.2, z: P.z, r: 3})
  spots.push({id: 'printerYard', x: P.x - 2, z: P.z, r: 2.2, verb: 'tap', label: {en: 'Brick printer', bn: 'ইট প্রিন্টার'}})
  return {
    update(t) {
      const h = ((t / 60) % 1) * 2.4 + 0.2
      wall.scale.y = h
      wall.position.y = y + h / 2
      nozzle.position.set(P.x + 2.2, y + h + 0.4, P.z + Math.sin(t * 1.5) * 2.6)
    },
  }
}
export {toWorld}
