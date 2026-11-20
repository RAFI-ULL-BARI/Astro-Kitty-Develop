// The six-wheeled rover you can drive, a robot rover that patrols on its own,
// and an Ingenuity-style helicopter drone.
import * as THREE from 'three'
import {Builder, M, glow} from './kit.js'
import {angleDiff, clamp, damp, dampAngle, TAU} from './util.js'

export function roverModel() {
  const root = new THREE.Group()
  const chassis = new THREE.Group()
  root.add(chassis)
  const b = new Builder()
  b.round(M.shell(), 0, 1.25, 0, 2.2, 0.55, 3.4)
  b.box(M.indigo(), 0, 1.58, 0.3, 2.0, 0.08, 2.4)
  b.box(M.solarCell(), 0, 1.64, 0.3, 1.9, 0.02, 2.3)
  b.round(M.trim(), 0, 1.05, -1.75, 2.0, 0.25, 0.2)
  b.cyl(M.frame(), 0.7, 2.1, -1.2, 0.06, 1.2, 8)
  b.round(M.shell(), 0.7, 2.8, -1.25, 0.5, 0.32, 0.3)
  b.box(M.window(), 0.7, 2.82, -1.42, 0.38, 0.14, 0.04)
  b.cyl(M.frame(), -0.7, 2.0, 1.2, 0.03, 1.0, 6)
  b.ball(M.lampCool(), -0.7, 2.52, 1.2, 0.06)
  for (const side of [-1, 1]) {
    b.box(M.frame(), side * 1.2, 0.95, -0.6, 0.12, 0.12, 2.0, 0, 0.35)
    b.box(M.frame(), side * 1.2, 0.95, 0.9, 0.12, 0.12, 1.4, 0, -0.3)
  }
  // a glass bubble seat for Kitty
  b.ball(M.glass(), 0, 1.75, -0.7, 0.55, 0.45, 0.55)
  b.build(chassis)
  const wheels = []
  for (const side of [-1, 1]) for (const z of [-1.4, 0, 1.4]) {
    const w = new THREE.Group()
    w.position.set(side * 1.35, 0.42, z)
    const wb = new Builder()
    wb.cyl(M.rubber(), 0, 0, 0, 0.42, 0.34, 18, 0, 0, Math.PI / 2)
    wb.cyl(M.steel(), side * 0.05, 0, 0, 0.22, 0.36, 12, 0, 0, Math.PI / 2)
    for (let k = 0; k < 6; k++) wb.box(M.darkSteel(), 0, Math.cos(k / 6 * TAU) * 0.42, Math.sin(k / 6 * TAU) * 0.42, 0.36, 0.06, 0.1, 0, k / 6 * TAU)
    wb.build(w)
    root.add(w)
    wheels.push(w)
  }
  const lights = [glow('#fff1d0', 1.6, 0), glow('#fff1d0', 1.6, 0)]
  lights[0].position.set(-0.7, 1.15, -1.9)
  lights[1].position.set(0.7, 1.15, -1.9)
  chassis.add(...lights)
  return {root, chassis, wheels, lights}
}

// Rocker-bogie style: the body tilts with the ground under the wheels.
export function settleOnGround(model, x, z, heading, height) {
  const s = Math.sin(heading), c = Math.cos(heading)
  const at = (lx, lz) => height(x + lx * c + lz * s, z - lx * s + lz * c)
  const front = (at(-1.3, -1.4) + at(1.3, -1.4)) / 2, back = (at(-1.3, 1.4) + at(1.3, 1.4)) / 2
  const left = (at(-1.3, -1.4) + at(-1.3, 1.4)) / 2, right = (at(1.3, -1.4) + at(1.3, 1.4)) / 2
  const y = (front + back + left + right) / 4
  return {y, pitch: Math.atan2(front - back, 2.8), roll: Math.atan2(left - right, 2.6)}
}

export function makeRover(scene, height, collider) {
  const model = roverModel()
  scene.add(model.root)
  const state = {x: 0, z: 0, heading: 0, speed: 0, driving: false, dust: 0}
  let wheelSpin = 0
  return {
    model, state,
    park(x, z, heading) { Object.assign(state, {x, z, heading, speed: 0}); this.place(0) },
    place(dt) {
      const g = settleOnGround(model, state.x, state.z, state.heading, height)
      model.root.position.set(state.x, dt ? damp(model.root.position.y, g.y, 12, dt) : g.y, state.z)
      model.root.rotation.set(0, state.heading, 0)
      model.chassis.rotation.x = dt ? damp(model.chassis.rotation.x, -g.pitch, 10, dt) : -g.pitch
      model.chassis.rotation.z = dt ? damp(model.chassis.rotation.z, g.roll, 10, dt) : g.roll
    },
    // forward: -1..1, turn: -1..1
    drive(dt, forward, turn, {maxSpeed = 7.5, night = 0, reduced = false} = {}) {
      state.speed = damp(state.speed, forward * maxSpeed, forward ? 2.2 : 3.5, dt)
      state.heading -= turn * dt * 1.4 * clamp(Math.abs(state.speed) / 3, 0.35, 1) * Math.sign(state.speed || 1)
      const nx = state.x - Math.sin(state.heading) * state.speed * dt
      const nz = state.z - Math.cos(state.heading) * state.speed * dt
      const fixed = collider.resolve(nx, nz, 1.7)
      if (Math.hypot(fixed.x - nx, fixed.z - nz) > 0.01) state.speed *= 0.6
      state.x = fixed.x
      state.z = fixed.z
      this.place(dt)
      wheelSpin += state.speed * dt / 0.42
      for (const w of model.wheels) w.rotation.x = -wheelSpin
      for (const l of model.lights) l.material.opacity = night * 0.9
      state.dust = reduced ? 0 : clamp(Math.abs(state.speed) / maxSpeed, 0, 1)
      return state
    },
    idle(dt, night) {
      state.speed = damp(state.speed, 0, 4, dt)
      for (const l of model.lights) l.material.opacity = night * 0.5
    },
  }
}

// A robot rover that drives a loop around the base by itself.
export function makePatrol(scene, height, route) {
  const model = roverModel()
  model.root.scale.setScalar(0.75)
  scene.add(model.root)
  let along = 0, heading = 0, spin = 0, stuck = false
  const lengths = route.map((p, i) => Math.hypot(route[(i + 1) % route.length][0] - p[0], route[(i + 1) % route.length][1] - p[1]))
  const total = lengths.reduce((a, b) => a + b, 0)
  return {
    model,
    get position() { return model.root.position },
    setStuck(v) { stuck = v },
    update(dt, night) {
      if (!stuck) along = (along + dt * 3.2) % total
      let d = along, i = 0
      while (d > lengths[i]) { d -= lengths[i]; i++ }
      const a = route[i], b = route[(i + 1) % route.length], f = d / lengths[i]
      const x = a[0] + (b[0] - a[0]) * f, z = a[1] + (b[1] - a[1]) * f
      heading = dampAngle(heading, Math.atan2(-(b[0] - a[0]), -(b[1] - a[1])), 3, dt)
      const g = settleOnGround(model, x, z, heading, height)
      model.root.position.set(x, g.y, z)
      model.root.rotation.set(0, heading, 0)
      model.chassis.rotation.x = -g.pitch
      model.chassis.rotation.z = stuck ? 0.25 : g.roll
      spin += (stuck ? 0.4 : 3.2) * dt / 0.42
      for (const w of model.wheels) w.rotation.x = -spin
      for (const l of model.lights) l.material.opacity = night * 0.8
    },
  }
}

// An Ingenuity-style helicopter: two rotors spinning opposite ways.
export function droneModel() {
  const root = new THREE.Group()
  const b = new Builder()
  b.round(M.shell(), 0, 0, 0, 0.5, 0.4, 0.5)
  b.box(M.solarCell(), 0, 1.05, 0, 0.7, 0.02, 0.45)
  b.cyl(M.frame(), 0, 0.55, 0, 0.04, 1.0, 8)
  for (let k = 0; k < 4; k++) {
    const a = k / 4 * TAU + Math.PI / 4
    b.box(M.frame(), Math.cos(a) * 0.4, -0.45, Math.sin(a) * 0.4, 0.04, 0.8, 0.04, -a, 0, 0.6)
  }
  b.box(M.window(), 0, -0.05, -0.26, 0.16, 0.1, 0.02)
  b.build(root)
  const rotors = []
  for (const [y, dir] of [[0.5, 1], [0.75, -1]]) {
    const r = new THREE.Group()
    r.position.y = y
    const rb = new Builder()
    rb.box(M.darkSteel(), 0, 0, 0, 2.4, 0.02, 0.16)
    rb.build(r, {shadows: false})
    root.add(r)
    rotors.push({r, dir})
  }
  return {root, rotors}
}

export function makeDrone(scene, height) {
  const model = droneModel()
  scene.add(model.root)
  const state = {x: 0, y: 6, z: 0, heading: 0, vx: 0, vz: 0, vy: 0, battery: 1, flying: false, controlled: false}
  let spin = 0
  return {
    model, state,
    patrol(dt, t, center) {
      const a = t * 0.13
      const tx = center.x + Math.sin(a) * 34, tz = center.z + Math.sin(a * 2) * 22, ty = height(tx, tz) + 11 + Math.sin(t * 0.5) * 2
      state.x = damp(state.x, tx, 1.5, dt)
      state.z = damp(state.z, tz, 1.5, dt)
      state.y = damp(state.y, ty, 1.5, dt)
      state.heading = dampAngle(state.heading, Math.atan2(-(tx - state.x), -(tz - state.z)), 2, dt)
      this.pose(dt)
    },
    control(dt, forward, right, lift, yaw) {
      state.heading -= yaw * dt * 1.8
      const s = Math.sin(state.heading), c = Math.cos(state.heading)
      state.vx = damp(state.vx, (-s * forward + c * right) * 9, 3, dt)
      state.vz = damp(state.vz, (-c * forward - s * right) * 9, 3, dt)
      state.vy = damp(state.vy, lift * 4, 3, dt)
      state.x = clamp(state.x + state.vx * dt, -160, 160)
      state.z = clamp(state.z + state.vz * dt, -160, 160)
      const ground = height(state.x, state.z)
      state.y = clamp(state.y + state.vy * dt, ground + 0.8, ground + 30)
      state.battery = Math.max(0, state.battery - dt / 80)
      this.pose(dt, forward, right)
    },
    pose(dt, forward = 0, right = 0) {
      model.root.position.set(state.x, state.y, state.z)
      model.root.rotation.set(-forward * 0.18, state.heading, -right * 0.18)
      spin += dt * 40
      for (const {r, dir} of model.rotors) r.rotation.y = spin * dir
    },
  }
}
export {angleDiff}
