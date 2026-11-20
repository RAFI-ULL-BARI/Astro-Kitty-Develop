// Where everything in the Mars base goes. Pure data and geometry: no three.js.
// Angles use (cos a, sin a) on the ground: a=0 is east (+x), a=PI/2 is south (+z), -PI/2 is north.
import {angleDiff, TAU} from './util.js'

export const TUNNEL_HALF = 1.7
export const DOOR_HALF = 1.7
export const AIRLOCK_DEPTH = 4.2

export const MODULE_TYPES = {
  hub: {shape: 'dome', r: 11, wall: 3.4, top: 8.6},
  greenhouse: {shape: 'dome', r: 10.5, wall: 2.2, top: 8.4, glass: true},
  power: {shape: 'hall', hd: 7, hw: 8.5, h: 5.2},
  life: {shape: 'hall', hd: 7, hw: 9.5, h: 5.2},
  garage: {shape: 'hall', hd: 7.5, hw: 8.5, h: 6.4, wideDoor: true},
  lab: {shape: 'dome', r: 7.5, wall: 3.2, top: 6.8},
  greenhouse2: {shape: 'dome', r: 8.5, wall: 2.2, top: 7, glass: true},
  observatory: {shape: 'dome', r: 6.5, wall: 3, top: 6.2},
  playroom: {shape: 'dome', r: 7.5, wall: 3, top: 6.4},
}

// The base you start with: a central habitat with tunnels to five buildings.
export const HOME_MODULES = [
  {id: 'hub', type: 'hub', x: 0, z: 0, airlocks: [3 * Math.PI / 4]},
  {id: 'greenhouse', type: 'greenhouse', angle: -Math.PI / 2, dist: 29, backAirlock: true},
  {id: 'power', type: 'power', angle: 0, dist: 25, backAirlock: true},
  {id: 'life', type: 'life', angle: Math.PI, dist: 25, backAirlock: true},
  {id: 'garage', type: 'garage', angle: Math.PI / 2, dist: 25.5, backAirlock: true},
  {id: 'lab', type: 'lab', angle: -Math.PI / 4, dist: 26, backAirlock: true},
]

// Outdoor places around the base.
export const OUTDOOR = {
  solarFarm: {x0: 39, x1: 67, z0: -17, z1: 17, cols: 5, rows: 6},
  solarFarm2: {x0: 39, x1: 67, z0: -33, z1: -24, cols: 5, rows: 2},
  iceDrill: {x: -50, z: 10},
  comms: {x: 20, z: -46},
  landingPad: {x: -46, z: 46, r: 10},
  weather: {x: -15, z: -15},
  reactor: {x: 60, z: 46},
  fuel: {x: -30, z: 27},
  printer: {x: -52, z: -16},
}

// Things kids can build with what they collect on expeditions.
export const BUILDABLES = [
  {id: 'solar2', kind: 'outdoor', cost: {metal: 6, ice: 0, science: 0}, effect: {solar: 10}},
  {id: 'reactor', kind: 'outdoor', cost: {metal: 14, ice: 0, science: 20}, effect: {reactor: 1}},
  {id: 'greenhouse2', kind: 'module', x: -32, z: -36, cost: {metal: 10, ice: 6, science: 10}, effect: {farm: 1}},
  {id: 'observatory', kind: 'module', x: 42, z: -46, cost: {metal: 8, ice: 0, science: 25}, effect: {science: 1}},
  {id: 'playroom', kind: 'module', x: 31, z: 31, cost: {metal: 6, ice: 2, science: 5}, effect: {happy: 1}},
  {id: 'fuel', kind: 'outdoor', cost: {metal: 10, ice: 8, science: 15}, effect: {fuel: 1}},
  {id: 'printer', kind: 'outdoor', cost: {metal: 5, ice: 0, science: 10}, effect: {repair: 1}},
  {id: 'drone', kind: 'gadget', cost: {metal: 4, ice: 0, science: 8}, effect: {drone: 1}},
  {id: 'batteries', kind: 'upgrade', cost: {metal: 6, ice: 0, science: 5}, effect: {battery: 1}},
]

// Turn the layout list into placed modules with centres, facing and doors.
export function placeModules(built = []) {
  const placed = []
  for (const m of HOME_MODULES) placed.push(place(m))
  for (const b of BUILDABLES) {
    if (b.kind === 'module' && built.includes(b.id)) {
      const angle = Math.atan2(b.z, b.x)
      placed.push(place({id: b.id, type: b.id, x: b.x, z: b.z, facing: angle + Math.PI, frontAirlock: true}))
    }
  }
  return placed
}

function place(m) {
  const type = MODULE_TYPES[m.type]
  const x = m.x ?? Math.cos(m.angle) * m.dist
  const z = m.z ?? Math.sin(m.angle) * m.dist
  // "facing" points from the module towards the hub: the module's local +x.
  const facing = m.facing ?? (m.angle !== undefined ? m.angle + Math.PI : 0)
  return {...m, ...type, x, z, facing}
}

export function toWorld(m, lx, lz) {
  const c = Math.cos(m.facing), s = Math.sin(m.facing)
  return [m.x + lx * c - lz * s, m.z + lx * s + lz * c]
}
export function toLocal(m, x, z) {
  const dx = x - m.x, dz = z - m.z, c = Math.cos(m.facing), s = Math.sin(m.facing)
  return [dx * c + dz * s, -dx * s + dz * c]
}

// Tunnels join the hub to each module's front door.
export function tunnels(placed) {
  const hub = placed.find(m => m.id === 'hub')
  return placed.filter(m => m.angle !== undefined).map(m => {
    const a = m.angle, dx = Math.cos(a), dz = Math.sin(a)
    const reach = m.shape === 'dome' ? m.r : m.hd
    const start = [hub.x + dx * (hub.r - 0.3), hub.z + dz * (hub.r - 0.3)]
    const end = [m.x - dx * (reach - 0.3), m.z - dz * (reach - 0.3)]
    return {id: `tunnel-${m.id}`, to: m.id, angle: a, start, end, length: Math.hypot(end[0] - start[0], end[1] - start[1])}
  })
}

// Every door of a module, as local angles (domes) or sides (halls).
export function doorsOf(m, placed) {
  const doors = []
  if (m.id === 'hub') {
    for (const other of placed) if (other.angle !== undefined) doors.push({angle: other.angle, kind: 'tunnel', to: other.id})
    for (const a of m.airlocks ?? []) doors.push({angle: a, kind: 'airlock'})
    return doors
  }
  // Local frame: +x faces the hub. Domes use local angle 0 for the front.
  if (m.angle !== undefined) doors.push({local: 0, kind: 'tunnel', to: 'hub'})
  if (m.backAirlock) doors.push({local: Math.PI, kind: 'airlock', wide: !!m.wideDoor})
  if (m.frontAirlock) doors.push({local: 0, kind: 'airlock'})
  return doors.map(d => d.local === undefined ? d : {...d, angle: m.facing + d.local})
}

// Airlocks: a small room outside the door with an outer door that slides open.
export function airlocks(placed) {
  const list = []
  for (const m of placed) {
    for (const d of doorsOf(m, placed)) {
      if (d.kind !== 'airlock') continue
      const reach = m.shape === 'dome' ? m.r : (Math.abs(Math.cos(d.angle - m.facing)) > 0.5 ? m.hd : m.hw)
      const dx = Math.cos(d.angle), dz = Math.sin(d.angle)
      const half = d.wide ? 3.6 : DOOR_HALF + 0.2
      list.push({
        id: `airlock-${m.id}-${list.length}`, module: m.id, angle: d.angle, half, wide: !!d.wide,
        inner: [m.x + dx * (reach - 0.2), m.z + dz * (reach - 0.2)],
        outer: [m.x + dx * (reach + AIRLOCK_DEPTH), m.z + dz * (reach + AIRLOCK_DEPTH)],
      })
    }
  }
  return list
}

// Wall segments for collision. Door gaps are left open; outer airlock doors are tagged.
export function wallSegments(placed) {
  const segs = []
  const add = (ax, az, bx, bz, tag = null) => segs.push({ax, az, bx, bz, tag})
  for (const m of placed) {
    const doors = doorsOf(m, placed)
    if (m.shape === 'dome') {
      const n = Math.max(40, Math.round(m.r * 6))
      for (let i = 0; i < n; i++) {
        const a0 = i / n * TAU, a1 = (i + 1) / n * TAU, mid = (a0 + a1) / 2
        const open = doors.some(d => {
          const half = Math.asin(Math.min(0.99, ((d.wide ? 3.6 : DOOR_HALF) + 0.15) / m.r))
          return Math.abs(angleDiff(mid, d.angle)) < half
        })
        if (!open) add(m.x + Math.cos(a0) * m.r, m.z + Math.sin(a0) * m.r, m.x + Math.cos(a1) * m.r, m.z + Math.sin(a1) * m.r)
      }
    } else {
      const {hd, hw} = m
      const front = doors.some(d => d.local === 0), back = doors.find(d => d.local === Math.PI)
      const gap = d => (d?.wide ? 3.6 : DOOR_HALF + 0.15)
      const wall = (x0, z0, x1, z1) => add(...toWorld(m, x0, z0), ...toWorld(m, x1, z1))
      wall(-hd, -hw, hd, -hw)
      wall(-hd, hw, hd, hw)
      if (front) { wall(hd, -hw, hd, -gap()); wall(hd, gap(), hd, hw) } else wall(hd, -hw, hd, hw)
      if (back) { wall(-hd, -hw, -hd, -gap(back)); wall(-hd, gap(back), -hd, hw) } else wall(-hd, -hw, -hd, hw)
    }
  }
  for (const t of tunnels(placed)) {
    const nx = -Math.sin(t.angle) * TUNNEL_HALF, nz = Math.cos(t.angle) * TUNNEL_HALF
    add(t.start[0] + nx, t.start[1] + nz, t.end[0] + nx, t.end[1] + nz)
    add(t.start[0] - nx, t.start[1] - nz, t.end[0] - nx, t.end[1] - nz)
  }
  for (const a of airlocks(placed)) {
    const nx = -Math.sin(a.angle) * a.half, nz = Math.cos(a.angle) * a.half
    add(a.inner[0] + nx, a.inner[1] + nz, a.outer[0] + nx, a.outer[1] + nz)
    add(a.inner[0] - nx, a.inner[1] - nz, a.outer[0] - nx, a.outer[1] - nz)
    add(a.outer[0] + nx, a.outer[1] + nz, a.outer[0] - nx, a.outer[1] - nz, a.id)
  }
  return segs
}

// Which room (if any) a point is in. Used to hide roofs, change lights and sounds.
export function regionAt(placed, x, z) {
  for (const a of airlocks(placed)) {
    const ax = a.outer[0] - a.inner[0], az = a.outer[1] - a.inner[1], len = Math.hypot(ax, az)
    const t = ((x - a.inner[0]) * ax + (z - a.inner[1]) * az) / (len * len)
    const perp = Math.abs((x - a.inner[0]) * az - (z - a.inner[1]) * ax) / len
    if (t >= -0.05 && t <= 1 && perp < a.half) return {kind: 'airlock', id: a.id, module: a.module, t}
  }
  for (const m of placed) {
    if (m.shape === 'dome') {
      if (Math.hypot(x - m.x, z - m.z) < m.r) return {kind: 'module', id: m.id, module: m.id}
    } else {
      const [lx, lz] = toLocal(m, x, z)
      if (Math.abs(lx) < m.hd && Math.abs(lz) < m.hw) return {kind: 'module', id: m.id, module: m.id}
    }
  }
  for (const t of tunnels(placed)) {
    const ax = t.end[0] - t.start[0], az = t.end[1] - t.start[1]
    const u = ((x - t.start[0]) * ax + (z - t.start[1]) * az) / (t.length * t.length)
    const perp = Math.abs((x - t.start[0]) * az - (z - t.start[1]) * ax) / t.length
    if (u >= 0 && u <= 1 && perp < TUNNEL_HALF) return {kind: 'tunnel', id: t.id, module: u < 0.5 ? 'hub' : t.to}
  }
  return null
}

// Keep rocks and dunes away from buildings, roads and the solar farm.
export function clearZones(placed, built = []) {
  const zones = placed.map(m => ({x: m.x, z: m.z, r: (m.shape === 'dome' ? m.r : Math.hypot(m.hd, m.hw)) + 6}))
  const f = OUTDOOR.solarFarm
  zones.push({x: (f.x0 + f.x1) / 2, z: 0, r: 26})
  for (const key of ['iceDrill', 'comms', 'landingPad', 'weather', 'reactor', 'fuel', 'printer']) zones.push({...OUTDOOR[key], r: 12})
  if (built.includes('solar2')) zones.push({x: 53, z: -28, r: 16})
  return zones
}
