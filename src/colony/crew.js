// Dhrubo the robot buddy, and the crew kitties who live and work in the base.
import * as THREE from 'three'
import {makeKitty} from '../mars-walk/kitten.js'
import {Builder, M, MO, glow} from './kit.js'
import {chosenAvatar, crewAvatars, kittyLook} from '../mars-walk/avatar.js'
import {FLOOR_Y} from './structures.js'
import {toWorld, tunnels} from './layout.js'
import {angleDiff, clamp, damp, dampAngle, lerp, TAU} from './util.js'

// --- Dhrubo -------------------------------------------------------------------
export function makeDhrubo(scene) {
  const root = new THREE.Group()
  const body = new THREE.Group()
  root.add(body)
  const b = new Builder()
  b.ball(MO.shell(), 0, 0, 0, 0.42, 0.38, 0.4)
  b.cyl(MO.trim(), 0, -0.05, 0, 0.43, 0.06, 24)
  b.cyl(MO.frame(), 0, 0.38, 0, 0.03, 0.3, 6)
  for (const side of [-1, 1]) b.ball(MO.indigo(), side * 0.44, -0.02, 0, 0.09, 0.16, 0.16)
  b.build(body)
  const faceCanvas = document.createElement('canvas')
  faceCanvas.width = 128
  faceCanvas.height = 80
  const face = faceCanvas.getContext('2d')
  const faceTex = new THREE.CanvasTexture(faceCanvas)
  faceTex.colorSpace = THREE.SRGBColorSpace
  const screenMesh = new THREE.Mesh(new THREE.SphereGeometry(0.4, 24, 16, -0.9 + Math.PI, 1.8, 1.05, 0.95),
    new THREE.MeshBasicMaterial({map: faceTex, toneMapped: false}))
  screenMesh.rotation.y = Math.PI
  body.add(screenMesh)
  const tip = glow('#7ef4e0', 0.35, 1)
  tip.position.y = 0.56
  body.add(tip)
  const jet = glow('#8fdcff', 0.6, 0.7)
  jet.position.y = -0.42
  body.add(jet)
  scene.add(root)
  let blink = 2, mood = 'happy', talk = 0, drawn = ''
  function drawFace(closed) {
    const key = `${closed}-${mood}-${talk > 0 ? Math.floor(talk * 8) % 2 : 0}`
    if (key === drawn) return
    drawn = key
    face.fillStyle = '#1b2433'
    face.fillRect(0, 0, 128, 80)
    face.fillStyle = mood === 'worried' ? '#ffb23a' : '#7ef4e0'
    for (const x of [42, 86]) {
      face.beginPath()
      if (closed) face.fillRect(x - 12, 34, 24, 4)
      else face.ellipse(x, 36, 9, mood === 'worried' ? 9 : 13, 0, 0, TAU)
      face.fill()
    }
    face.strokeStyle = face.fillStyle
    face.lineWidth = 4
    face.beginPath()
    if (talk > 0 && Math.floor(talk * 8) % 2) face.ellipse(64, 60, 8, 6, 0, 0, TAU)
    else if (mood === 'worried') { face.moveTo(54, 64); face.lineTo(74, 62) } else face.arc(64, 52, 12, 0.3, Math.PI - 0.3)
    face.stroke()
    faceTex.needsUpdate = true
  }
  drawFace(false)
  const look = new THREE.Vector3()
  return {
    root,
    say(seconds = 2.5) { talk = seconds },
    setMood(m) { mood = m },
    update(dt, t, follow, lookAt, reduced) {
      // float beside Kitty's shoulder, a little behind
      const target = follow
      root.position.x = damp(root.position.x, target.x, 3, dt)
      root.position.z = damp(root.position.z, target.z, 3, dt)
      root.position.y = damp(root.position.y, target.y + (reduced ? 0 : Math.sin(t * 2.1) * 0.12), 4, dt)
      look.copy(lookAt)
      const yaw = Math.atan2(look.x - root.position.x, look.z - root.position.z)
      root.rotation.y = dampAngle(root.rotation.y, yaw, 5, dt)
      body.rotation.z = reduced ? 0 : Math.sin(t * 1.3) * 0.08
      body.position.y = talk > 0 && !reduced ? Math.abs(Math.sin(t * 14)) * 0.04 : 0
      talk = Math.max(0, talk - dt)
      blink -= dt
      if (blink < 0) blink = 2 + Math.random() * 3
      drawFace(blink < 0.12)
      tip.material.opacity = 0.5 + 0.5 * Math.abs(Math.sin(t * 3))
      jet.scale.setScalar(0.5 + Math.sin(t * 20) * 0.08)
    },
  }
}

// --- the crew ---------------------------------------------------------------------
// The other three kitties from the home screen (never a second copy of the player's kitty).
const SUIT_TRIMS = ['#6b8fb5', '#b07ad6', '#5fbf8a']
const crewLooks = () => crewAvatars(chosenAvatar()).map((id, i) => ({...kittyLook(id), suit: '#e9dcd1', trim: SUIT_TRIMS[i]}))

// A simple map of walking routes: each building connects through its tunnel to a ring in the hub.
function routeGraph(placed, interiors) {
  const hub = placed.find(m => m.id === 'hub')
  const nodes = new Map()
  const tunnelOf = new Map(tunnels(placed).map(t => [t.to, t]))
  for (const m of placed) {
    const pts = (interiors.waypoints[m.id] ?? [[0, 0]]).map(([x, z]) => (m.id === 'hub' ? [x, z] : toWorld(m, x, z)))
    nodes.set(m.id, pts)
  }
  return {
    path(from, to) {
      if (from === to) return []
      const steps = []
      const ring = a => [hub.x + Math.cos(a) * 6.2, hub.z + Math.sin(a) * 6.2]
      const leave = id => {
        const t = tunnelOf.get(id)
        return [t.end, [(t.start[0] + t.end[0]) / 2, (t.start[1] + t.end[1]) / 2], t.start, ring(t.angle)]
      }
      let angleNow = null
      if (from !== 'hub' && tunnelOf.has(from)) { steps.push(...leave(from)); angleNow = tunnelOf.get(from).angle }
      if (to !== 'hub' && tunnelOf.has(to)) {
        const t = tunnelOf.get(to)
        if (angleNow !== null && Math.abs(angleDiff(angleNow, t.angle)) > 1.7) steps.push(ring(angleNow + angleDiff(angleNow, t.angle) / 2))
        steps.push(ring(t.angle), t.start, [(t.start[0] + t.end[0]) / 2, (t.start[1] + t.end[1]) / 2], t.end)
      }
      return steps
    },
    spots: id => nodes.get(id) ?? [[0, 0]],
  }
}

export function makeCrew(scene, placed, interiors, {onLeft} = {}) {
  const graph = routeGraph(placed, interiors)
  const modules = placed.map(m => m.id).filter(id => interiors.waypoints[id])
  const podAngles = [-1.42, -1.0, -0.6]
  const pods = podAngles.map(a => [Math.cos(a) * 9.5, Math.sin(a) * 9.5])
  const zzz = []
  const members = crewLooks().map((look, i) => {
    const kitty = makeKitty(scene, look)
    kitty.setHelmet(false)
    const start = graph.spots('hub')[i % graph.spots('hub').length]
    kitty.rig.position.set(start[0], FLOOR_Y, start[1])
    const z = makeZzz()
    scene.add(z)
    zzz.push(z)
    return {name: look.name, kitty, at: 'hub', path: [], goal: null, wait: 2 + i * 3, heading: 0, task: null, sleeping: false, z}
  })
  void onLeft
  function choose(member, mode) {
    if (mode === 'shelter') return {module: 'hub', point: interiors.anchors.shelter.map((v, k) => v + [0.6, -0.6, 0.3][member.index ?? 0] * (k ? -1 : 1)), task: 'shelter'}
    if (mode === 'sleep') {
      const i = members.indexOf(member)
      return {module: 'hub', point: pods[i], task: 'sleep'}
    }
    if (mode.startsWith('help:')) {
      const where = mode.slice(5)
      if (modules.includes(where)) return {module: where, point: graph.spots(where)[0], task: 'point'}
    }
    const module = modules[Math.floor(Math.random() * modules.length)]
    const pts = graph.spots(module)
    const point = pts[Math.floor(Math.random() * pts.length)]
    const task = module === 'hub' && Math.random() < 0.3 ? 'bike' : 'work'
    return {module, point: task === 'bike' ? interiors.anchors.bike : point, task}
  }
  return {
    members,
    // mode: 'normal' | 'sleep' | 'shelter' | 'help:<module>'
    update(dt, t, mode, reduced) {
      members.forEach((m, i) => {
        m.index = i
        const want = mode === 'normal' ? null : mode
        if (want && m.mode !== want) { m.path = []; m.goal = null; m.wait = Math.random() * 1.5; m.mode = want }
        if (!want && m.mode) { m.mode = null; m.wait = Math.random() * 3 }
        m.sleeping = false
        let speed = 0
        const p = m.kitty.rig.position
        if (!m.path.length) {
          if (m.goal?.task === 'sleep' && m.arrived) m.sleeping = true
          m.wait -= dt
          if (m.wait <= 0 && !(m.goal?.task === 'sleep' && want === 'sleep') && !(m.goal?.task === 'shelter' && want === 'shelter')) {
            const goal = choose(m, want ?? 'normal')
            m.path = [...graph.path(m.at, goal.module), goal.point]
            m.goal = goal
            m.arrived = false
            m.at = goal.module
            m.wait = goal.task === 'bike' ? 18 : 6 + Math.random() * 12
          }
        } else {
          const [tx, tz] = m.path[0]
          const dx = tx - p.x, dz = tz - p.z, d = Math.hypot(dx, dz)
          const run = want === 'shelter' ? 3.4 : 1.9
          if (d < 0.25) {
            m.path.shift()
            if (!m.path.length) m.arrived = true
          } else {
            const step = Math.min(d, run * dt)
            p.x += dx / d * step
            p.z += dz / d * step
            speed = run
            m.heading = dampAngle(m.heading, Math.atan2(-dx, -dz), 9, dt)
          }
        }
        const lying = m.sleeping
        const rig = m.kitty.rig
        rig.rotation.order = 'YXZ'
        if (lying) {
          // On their back in the bunk, head along the bed.
          const a = podAngles[i]
          const head = [Math.sin(Math.PI - a), Math.cos(Math.PI - a)]
          rig.rotation.set(Math.PI / 2, Math.PI - a, 0)
          rig.position.set(pods[i][0] - head[0] * 0.85, FLOOR_Y + 0.85, pods[i][1] - head[1] * 0.85)
        } else {
          rig.rotation.set(0, m.heading, 0)
          rig.position.y = 0
        }
        const pedal = m.goal?.task === 'bike' && m.arrived && !m.path.length
        m.kitty.animate(dt, pedal ? 1.2 : speed, lying ? 0 : FLOOR_Y + (pedal ? 0.35 : 0), m.goal?.task === 'work' && m.arrived ? 0.5 + Math.sin(t * 2 + i) * 0.3 : 0, reduced)
        m.z.visible = lying
        if (lying) {
          m.z.position.set(p.x, 1.9 + (t * 0.4 + i * 0.3) % 1 * 0.8, p.z)
          m.z.material.opacity = 1 - ((t * 0.4 + i * 0.3) % 1)
        }
      })
    },
  }
}

function makeZzz() {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const c = canvas.getContext('2d')
  c.fillStyle = '#ffffff'
  c.font = 'bold 40px system-ui'
  c.fillText('z', 20, 46)
  const tex = new THREE.CanvasTexture(canvas)
  const s = new THREE.Sprite(new THREE.SpriteMaterial({map: tex, transparent: true, depthWrite: false}))
  s.scale.setScalar(0.5)
  return s
}
export {lerp, clamp}
