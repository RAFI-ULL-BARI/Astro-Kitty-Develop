// The base's buildings, tunnels and airlocks. Roofs fade away when you walk inside,
// so the camera can follow Kitty indoors without any loading screens.
import * as THREE from 'three'
import {Builder, M, MO, fadeable, setFade, sign, domeCap, gridTexture} from './kit.js'
import {airlocks, doorsOf, toWorld, tunnels, TUNNEL_HALF, DOOR_HALF} from './layout.js'
import {angleDiff, clamp, damp, TAU} from './util.js'

export const FLOOR_Y = 0.32

const LABELS = {
  hub: ['🏠', 'HABITAT', 'বাসস্থান'], greenhouse: ['🌱', 'GREENHOUSE', 'গ্রিনহাউস'], power: ['⚡', 'POWER PLANT', 'বিদ্যুৎকেন্দ্র'],
  life: ['💧', 'WATER + OXYGEN', 'পানি + অক্সিজেন'], garage: ['🛞', 'GARAGE', 'গ্যারেজ'], lab: ['🔬', 'SCIENCE LAB', 'বিজ্ঞান ল্যাব'],
  greenhouse2: ['🌻', 'GREENHOUSE 2', 'গ্রিনহাউস ২'], observatory: ['🔭', 'OBSERVATORY', 'মানমন্দির'], playroom: ['🧶', 'PLAYROOM', 'খেলাঘর'],
}

let floorTex = null
function floorMaterial() {
  floorTex ??= gridTexture('#707b8c', '#5c6676')
  return M.floor()
}

function floorMesh(geometry, y) {
  const p = geometry.attributes.position, uv = geometry.attributes.uv
  for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / 2, p.getZ(i) / 2)
  const mesh = new THREE.Mesh(geometry, floorMaterial())
  mesh.position.y = y
  mesh.receiveShadow = true
  return mesh
}

function slidingDoor(width, height, material = MO.shellShade()) {
  const group = new THREE.Group()
  const panels = []
  for (const side of [-1, 1]) {
    const p = new THREE.Group()
    const b = new Builder()
    b.round(material, 0, height / 2, 0, 0.16, height, width / 2)
    b.box(MO.window(), 0, height * 0.72, 0, 0.2, height * 0.18, width / 2 * 0.5)
    b.box(MO.trim(), 0, 0.35, 0, 0.18, 0.08, width / 2 * 0.9)
    b.build(p)
    group.add(p)
    panels.push({p, side})
  }
  return {
    group,
    set(open) { for (const {p, side} of panels) p.position.z = side * (width / 4 + open * width * 0.47) },
  }
}

function domeShell(m, doors, roofMats) {
  const group = new THREE.Group()
  group.position.set(m.x, 0, m.z)
  const shell = new Builder(), roof = new Builder()
  const wallMat = m.glass ? M.glass() : M.shell()
  const frameMat = M.frame()
  const roofFrame = fadeable(frameMat)
  roofMats.push(roofFrame)
  shell.cyl(M.foundation(), 0, FLOOR_Y / 2 - 0.55, 0, m.r + 0.7, FLOOR_Y + 1.1, 48)
  const n = Math.max(40, Math.round(m.r * 6))
  for (let i = 0; i < n; i++) {
    const a0 = i / n * TAU, a1 = (i + 1) / n * TAU, mid = (a0 + a1) / 2
    const open = doors.some(d => Math.abs(angleDiff(mid, d.angle)) < Math.asin(Math.min(0.99, ((d.wide ? 3.6 : DOOR_HALF) + 0.15) / m.r)))
    if (open) continue
    const len = 2 * m.r * Math.sin(Math.PI / n) + 0.04
    const x = Math.cos(mid) * m.r, z = Math.sin(mid) * m.r, rot = -(mid + Math.PI / 2)
    if (m.glass) {
      shell.box(frameMat, x, FLOOR_Y + m.wall / 2, z, 0.14, m.wall, 0.14, rot)
      shell.box(wallMat, x, FLOOR_Y + m.wall / 2, z, len, m.wall, 0.06, rot)
    } else {
      shell.box(wallMat, x, FLOOR_Y + m.wall / 2, z, len, m.wall, 0.34, rot)
      shell.box(M.wallIn(), x * 0.975, FLOOR_Y + m.wall / 2, z * 0.975, len, m.wall - 0.1, 0.06, rot)
      shell.box(M.trim(), x * 1.012, FLOOR_Y + m.wall - 0.45, z * 1.012, len, 0.16, 0.06, rot)
      if (i % 4 === 2) shell.box(M.window(), x, FLOOR_Y + 1.75, z, len * 0.7, 0.9, 0.42, rot)
    }
    if (m.id === 'hub') shell.box(M.regolith(), x * 1.07, FLOOR_Y + 0.75, z * 1.07, len * 1.08, 1.5, 0.9, rot)
  }
  // Ribs over the dome, like a geodesic frame.
  const height = m.top - m.wall
  for (let k = 0; k < 12; k++) {
    const a = k / 12 * TAU
    for (let j = 0; j < 8; j++) {
      const t0 = j / 8 * Math.PI / 2, t1 = (j + 1) / 8 * Math.PI / 2, t = (t0 + t1) / 2
      const r = (m.r + 0.2) * Math.cos(t), y = FLOOR_Y + m.wall + height * Math.sin(t)
      const len = Math.hypot((m.r) * (Math.cos(t0) - Math.cos(t1)), height * (Math.sin(t1) - Math.sin(t0))) + 0.05
      const psi = Math.atan2(m.r * Math.sin(t), height * Math.cos(t))
      const geo = new THREE.BoxGeometry(0.14, len, 0.14)
      geo.rotateZ(psi)
      geo.rotateY(-a)
      geo.translate(Math.cos(a) * r, y, Math.sin(a) * r)
      roof.raw(geo, roofFrame)
    }
  }
  for (const f of [0.35, 0.7]) {
    const r = (m.r + 0.2) * Math.cos(f * Math.PI / 2), y = FLOOR_Y + m.wall + height * Math.sin(f * Math.PI / 2)
    roof.add(new THREE.TorusGeometry(1, 0.07 / r, 6, 48), roofFrame, 0, y, 0, r, r, r, Math.PI / 2)
  }
  shell.build(group)
  roof.build(group, {shadows: true})
  const capMat = fadeable(m.glass ? M.glass() : M.shell())
  if (m.glass) capMat.opacity = capMat.userData.base = 0.16
  roofMats.push(capMat)
  const cap = domeCap(m.r + 0.17, FLOOR_Y + m.wall, FLOOR_Y + m.top, capMat)
  cap.castShadow = !m.glass
  group.add(cap)
  group.add(floorMesh(new THREE.CircleGeometry(m.r - 0.1, 64).rotateX(-Math.PI / 2), FLOOR_Y + 0.005))
  return group
}

function hallShell(m, doors, roofMats) {
  const group = new THREE.Group()
  group.position.set(m.x, 0, m.z)
  group.rotation.y = -m.facing
  const b = new Builder(), roof = new Builder()
  const roofMat = fadeable(M.shell()), roofFrame = fadeable(M.frame())
  roofMats.push(roofMat, roofFrame)
  const {hd, hw, h} = m
  const front = doors.some(d => d.local === 0), back = doors.find(d => d.local === Math.PI)
  const gap = d => (d?.wide ? 3.6 : DOOR_HALF + 0.15)
  b.box(M.foundation(), 0, FLOOR_Y / 2 - 0.55, 0, hd * 2 + 1.2, FLOOR_Y + 1.1, hw * 2 + 1.2)
  const wall = (x0, z0, x1, z1) => {
    const len = Math.hypot(x1 - x0, z1 - z0), cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, rot = -Math.atan2(z1 - z0, x1 - x0)
    const nx = -(z1 - z0) / len, nz = (x1 - x0) / len
    const inward = Math.sign(-(cx * nx + cz * nz)) || 1
    b.box(M.shell(), cx, FLOOR_Y + h / 2, cz, len + 0.3, h, 0.34, rot)
    b.box(M.wallIn(), cx + nx * inward * 0.2, FLOOR_Y + h / 2, cz + nz * inward * 0.2, len, h - 0.1, 0.06, rot)
    b.box(M.trim(), cx - nx * inward * 0.2, FLOOR_Y + h - 0.6, cz - nz * inward * 0.2, len + 0.3, 0.2, 0.06, rot)
    b.box(M.shellShade(), cx - nx * inward * 0.2, FLOOR_Y + 0.4, cz - nz * inward * 0.2, len + 0.3, 0.8, 0.08, rot)
    for (let s = -len / 2 + 2.5; s < len / 2 - 1.5; s += 4.2) {
      const wx = cx + (x1 - x0) / len * s, wz = cz + (z1 - z0) / len * s
      b.box(M.window(), wx, FLOOR_Y + 2.4, wz, 1.6, 0.85, 0.42, rot)
    }
  }
  wall(-hd, -hw, hd, -hw)
  wall(-hd, hw, hd, hw)
  if (front) { wall(hd, -hw, hd, -gap()); wall(hd, gap(), hd, hw) } else wall(hd, -hw, hd, hw)
  if (back) { wall(-hd, -hw, -hd, -gap(back)); wall(-hd, gap(back), -hd, hw) } else wall(-hd, -hw, -hd, hw)
  // Lintels over the doors
  if (front) b.box(M.shell(), hd, FLOOR_Y + h - 0.7, 0, 0.34, 1.4, gap() * 2)
  if (back) b.box(M.shell(), -hd, FLOOR_Y + h - (back.wide ? 0.6 : 0.7), 0, 0.34, back.wide ? 1.2 : 1.4, gap(back) * 2)
  roof.box(roofMat, 0, FLOOR_Y + h + 0.2, 0, hd * 2 + 0.7, 0.4, hw * 2 + 0.7)
  for (let x = -hd + 1.5; x < hd; x += 3) roof.box(roofFrame, x, FLOOR_Y + h + 0.48, 0, 0.18, 0.18, hw * 2 + 0.4)
  roof.round(roofFrame, -hd * 0.4, FLOOR_Y + h + 0.75, hw * 0.4, 1.4, 0.6, 1.4)
  roof.cyl(roofFrame, hd * 0.4, FLOOR_Y + h + 0.8, -hw * 0.4, 0.5, 0.8, 14)
  b.build(group)
  roof.build(group)
  group.add(floorMesh(new THREE.PlaneGeometry(hd * 2, hw * 2).rotateX(-Math.PI / 2), FLOOR_Y + 0.005))
  return group
}

function tunnelMesh(t, roofMats) {
  const group = new THREE.Group()
  group.position.set(t.start[0], 0, t.start[1])
  group.rotation.y = -t.angle
  const b = new Builder(), roof = new Builder()
  const arch = fadeable(M.shell()), ribs = fadeable(M.frame())
  roofMats.push(arch, ribs)
  const L = t.length
  b.box(M.shellShade(), L / 2, FLOOR_Y / 2 - 0.4, 0, L, FLOOR_Y + 0.8, TUNNEL_HALF * 2 + 0.8)
  for (const side of [-1, 1]) {
    b.box(M.shell(), L / 2, FLOOR_Y + 0.6, side * (TUNNEL_HALF + 0.12), L, 1.2, 0.24)
    b.box(M.lampCool(), L / 2, FLOOR_Y + 0.12, side * (TUNNEL_HALF - 0.12), L - 0.6, 0.05, 0.08)
    b.box(M.regolith(), L / 2, FLOOR_Y + 0.5, side * (TUNNEL_HALF + 0.75), L, 1.0, 0.8)
  }
  const half = new THREE.CylinderGeometry(TUNNEL_HALF + 0.24, TUNNEL_HALF + 0.24, L, 20, 1, true, 0, Math.PI)
  half.rotateZ(Math.PI / 2)
  half.rotateX(Math.PI / 2)
  half.translate(L / 2, FLOOR_Y + 1.2, 0)
  roof.add(half, arch)
  for (let x = 0.5; x < L; x += 1.8) roof.add(new THREE.TorusGeometry(TUNNEL_HALF + 0.3, 0.08, 6, 20, Math.PI), ribs, x, FLOOR_Y + 1.2, 0, 1, 1, 1, 0, Math.PI / 2)
  b.build(group)
  roof.build(group)
  group.add(floorMesh(new THREE.PlaneGeometry(L, TUNNEL_HALF * 2).rotateX(-Math.PI / 2).translate(L / 2, 0, 0), FLOOR_Y + 0.01))
  return group
}

function airlockMesh(a, roofMats) {
  const group = new THREE.Group()
  group.position.set(a.inner[0], 0, a.inner[1])
  group.rotation.y = -a.angle
  const L = Math.hypot(a.outer[0] - a.inner[0], a.outer[1] - a.inner[1])
  const b = new Builder(), roof = new Builder()
  const top = fadeable(M.shell())
  roofMats.push(top)
  const H = a.wide ? 5.6 : 3.3
  b.box(M.shellShade(), L / 2, FLOOR_Y / 2 - 0.4, 0, L + 0.4, FLOOR_Y + 0.8, a.half * 2 + 0.9)
  for (const side of [-1, 1]) {
    b.box(M.shell(), L / 2, FLOOR_Y + H / 2, side * (a.half + 0.15), L, H, 0.3)
    b.box(M.hazard(), L / 2, FLOOR_Y + 0.25, side * (a.half - 0.02), L, 0.2, 0.05)
    b.box(M.frame(), L, FLOOR_Y + H / 2, side * (a.half + 0.1), 0.5, H + 0.2, 0.5)
  }
  b.box(M.frame(), L, FLOOR_Y + H + 0.1, 0, 0.5, 0.4, a.half * 2 + 0.6)
  roof.box(top, L / 2, FLOOR_Y + H + 0.15, 0, L + 0.3, 0.3, a.half * 2 + 0.7)
  b.build(group)
  roof.build(group)
  group.add(floorMesh(new THREE.PlaneGeometry(L, a.half * 2).rotateX(-Math.PI / 2).translate(L / 2, 0, 0), FLOOR_Y + 0.01))
  const door = slidingDoor(a.half * 2, H - 0.1)
  door.group.position.set(L - 0.05, FLOOR_Y, 0)
  group.add(door.group)
  const lampOn = new THREE.MeshStandardMaterial({color: '#ff8a7a', emissive: '#ff3b2f', emissiveIntensity: 2.4})
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 8), lampOn)
  lamp.position.set(L + 0.3, FLOOR_Y + H - 0.2, a.half - 0.3)
  group.add(lamp)
  const label = sign('🚪', 'AIRLOCK', 'এয়ারলক', 2.4)
  label.position.set(L + 0.27, FLOOR_Y + H + 0.62, 0)
  label.rotation.y = Math.PI / 2
  group.add(label)
  return {group, door, lamp, lampOn, length: L}
}

export function makeStructures(scene, placed) {
  const root = new THREE.Group()
  scene.add(root)
  const modules = new Map()
  for (const m of placed) {
    const doors = doorsOf(m, placed)
    const roofMats = []
    const group = m.shape === 'dome' ? domeShell(m, doors, roofMats) : hallShell(m, doors, roofMats)
    root.add(group)
    // Door panels where the tunnel meets the module.
    const tunnelDoors = []
    for (const d of doors.filter(x => x.kind === 'tunnel')) {
      const reach = m.shape === 'dome' ? m.r : m.hd
      const door = slidingDoor(DOOR_HALF * 2, 2.9)
      const x = m.x + Math.cos(d.angle) * (reach - 0.1), z = m.z + Math.sin(d.angle) * (reach - 0.1)
      door.group.position.set(x, FLOOR_Y, z)
      door.group.rotation.y = -d.angle
      root.add(door.group)
      tunnelDoors.push({door, x, z, open: 0})
    }
    const [icon, en, bn] = LABELS[m.type] ?? ['🏠', m.id.toUpperCase(), '']
    const label = sign(icon, en, bn, 4.2)
    if (m.shape === 'dome') {
      const out = (m.id === 'hub' ? 5 * Math.PI / 4 : m.facing + Math.PI) + 0.35
      label.position.set(m.x + Math.cos(out) * (m.r + 0.45), FLOOR_Y + m.wall + 0.9, m.z + Math.sin(out) * (m.r + 0.45))
      label.rotation.y = Math.atan2(Math.cos(out), Math.sin(out))
    } else {
      const [wx, wz] = toWorld(m, -m.hd - 0.25, m.hw * 0.55)
      label.position.set(wx, FLOOR_Y + m.h - 1.3, wz)
      label.rotation.y = Math.atan2(-Math.cos(m.facing), -Math.sin(m.facing))
    }
    root.add(label)
    modules.set(m.id, {m, group, roofMats, fade: 1, tunnelDoors})
  }
  const tunnelList = tunnels(placed).map(t => {
    const roofMats = []
    const group = tunnelMesh(t, roofMats)
    root.add(group)
    return {t, group, roofMats, fade: 1}
  })
  const airlockList = airlocks(placed).map(a => {
    const roofMats = []
    const mesh = airlockMesh(a, roofMats)
    root.add(mesh.group)
    return {a, ...mesh, roofMats, fade: 1, open: 0, cycle: 0, want: false}
  })
  return {
    root, modules, tunnels: tunnelList, airlocks: airlockList,
    // region: where the player is; agents: everyone who can open inner doors.
    update(dt, region, agents, reduced) {
      const activeModule = region?.module
      for (const [id, entry] of modules) {
        const target = activeModule === id ? 0.02 : 1
        entry.fade = reduced ? target : damp(entry.fade, target, 7, dt)
        for (const mtl of entry.roofMats) setFade([mtl], entry.fade * (mtl.userData.base ?? 1))
        for (const d of entry.tunnelDoors) {
          const near = agents.some(p => Math.hypot(p.x - d.x, p.z - d.z) < 3.2)
          d.open = reduced ? Number(near) : damp(d.open, Number(near), 6, dt)
          d.door.set(d.open)
        }
      }
      for (const entry of tunnelList) {
        const inside = region?.kind === 'tunnel' && region.id === entry.t.id
        entry.fade = reduced ? Number(!inside) : damp(entry.fade, inside ? 0.02 : 1, 7, dt)
        for (const mtl of entry.roofMats) setFade([mtl], entry.fade)
      }
      for (const entry of airlockList) {
        const inside = region?.kind === 'airlock' && region.id === entry.a.id
        const target = inside ? 0.02 : 1
        entry.fade = reduced ? target : damp(entry.fade, target, 7, dt)
        for (const mtl of entry.roofMats) setFade([mtl], entry.fade)
      }
    },
    // Called by the game to cycle an airlock; returns how open the outer door is.
    driveAirlock(entry, want, dt, reduced) {
      if (want) entry.cycle = Math.min(1.4, entry.cycle + dt)
      else entry.cycle = Math.max(0, entry.cycle - dt * 2)
      const ready = entry.cycle >= 1.2
      entry.open = reduced ? Number(ready) : damp(entry.open, Number(ready), 5, dt)
      entry.door.set(entry.open)
      const green = entry.open > 0.6
      entry.lampOn.emissive.set(green ? '#52e05c' : entry.cycle > 0 ? '#ffb23a' : '#ff3b2f')
      entry.lampOn.color.set(green ? '#b6ffb0' : '#ff8a7a')
      return entry.open
    },
  }
}

export const clampFade = v => clamp(v, 0, 1)
