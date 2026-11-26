// Mars Colony: a big Mars base to run and explore, inside and out, plus real places to visit.
import * as THREE from 'three'
import {makeKitty} from '../mars-walk/kitten.js'
import {chosenAvatar, kittyLook} from '../mars-walk/avatar.js'
import {soundOn, saveSound} from '../../dist/world/sound-preference.js'
import {dhruboNarrator} from '../../dist/world/narration.js'
import {clamp, damp, dampAngle, lerp, rng, hashString, TAU} from './util.js'
import {marsClock, sunPosition, skyDirection, earthFromMars} from './calendar.js'
import {Collider} from './collide.js'
import {placeModules, wallSegments, regionAt, clearZones, airlocks as airlockList, BUILDABLES, OUTDOOR} from './layout.js'
import {newBase, tick as simTick, rates, harvest, canAfford, pay} from './sim.js'
import * as director from './director.js'
import {SITES, siteHeight, inCave, planVisit} from './sites.js'
import {makeSky} from './sky.js'
import {makeGround} from './terrain.js'
import {makeStructures, FLOOR_Y} from './structures.js'
import {makeInteriors, updateInteriorLights, shared, animateFlows} from './interiors.js'
import {makeOutdoor} from './outdoor.js'
import {makeDhrubo, makeCrew} from './crew.js'
import {makeRover, makePatrol, makeDrone, roverModel, droneModel} from './vehicles.js'
import {makeWindDust, makeDustDevils, makeBursts, makeLanding} from './life.js'
import {makeAudio} from './audio.js'
import {makeInput} from './input.js'
import {makeHud} from './hud.js'
import {S, EVENT_TEXT, FIX_TEXT, SPOT_FACTS, SUITS} from './strings.js'
import {sign, glow, Builder, M} from './kit.js'
import {loadRealism, makeSkyLight, realism} from './realism.js'
import {makeLook} from './look.js'

const SAVE_KEY = 'astro-kitty-colony-v1'
const root = document.getElementById('colony')
const canvas = document.createElement('canvas')
canvas.className = 'cx-canvas'
canvas.tabIndex = 0
canvas.setAttribute('aria-label', 'Mars Colony 3D world')
root.prepend(canvas)

// --- settings and save ---------------------------------------------------------
const profile = (() => { try { return JSON.parse(localStorage.getItem('astro-kitty-profile-v1') || '{}') } catch { return {} } })()
let lang = profile.language === 'bn' ? 'bn' : 'en'
const touch = matchMedia('(pointer: coarse)').matches
function freshSave() {
  return {
    v: 1, base: newBase(), skill: 1, history: [], hours: 7.6, sols: 0, site: 'home', visited: ['home'], suit: 'classic',
    scienceEarned: 0, trophies: [],
    settings: {quality: touch ? 'medium' : 'high', reduced: matchMedia('(prefers-reduced-motion: reduce)').matches || !!profile.reduceMotion, realTime: false, sound: soundOn()},
  }
}
let save = (() => { try { const s = JSON.parse(localStorage.getItem(SAVE_KEY)); return s?.v === 1 ? s : null } catch { return null } })()
const hasSave = !!save
save ??= freshSave()
const persist = () => { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)) } catch {} }
const T = key => S[lang][key] ?? S.en[key] ?? key

// --- renderer -------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, powerPreference: 'high-performance'})
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.98
renderer.shadowMap.type = THREE.PCFSoftShadowMap
const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1200)
let look = null
function applyQuality() {
  const q = save.settings.quality
  const dpr = window.devicePixelRatio || 1
  renderer.setPixelRatio(q === 'low' ? Math.min(1, dpr) * 0.8 : q === 'medium' ? Math.min(1.25, dpr) : Math.min(1.75, dpr))
  renderer.shadowMap.enabled = q !== 'low'
  if (world?.sky) {
    world.sky.sun.castShadow = q !== 'low'
    world.sky.sun.shadow.mapSize.setScalar(q === 'high' ? 2048 : 1024)
    world.sky.sun.shadow.map?.dispose()
    world.sky.sun.shadow.map = null
  }
  look?.dispose()
  look = null
  // High quality: contact shadows, glow and a camera-like finish (see look.js).
  if (q === 'high' && world) look = makeLook(renderer, world.scene, camera, {ao: realism.enabled})
  resize(true)
}
let lastW = 0, lastH = 0
function resize(force = false) {
  const w = root.clientWidth, h = root.clientHeight
  if (!force && w === lastW && h === lastH) return
  lastW = w
  lastH = h
  renderer.setSize(w, h, false)
  look?.setSize(w, h)
  camera.aspect = w / h
  camera.fov = camera.aspect < 0.8 ? 68 : 55
  camera.updateProjectionMatrix()
}

// --- shared helpers ---------------------------------------------------------------
const hud = makeHud(root, () => lang)
const input = makeInput(canvas, root)
const audio = makeAudio()
audio.setEnabled(save.settings.sound)
let narrator = null
try { narrator = dhruboNarrator() } catch {}
function say(text, seconds) {
  hud.say(text, seconds)
  world?.dhrubo.say(Math.min(4, text.length / 18))
  if (save.settings.sound && narrator) { try { narrator.play(text) } catch {} }
}
let marsTexture = null
new THREE.TextureLoader().load(new URL('./assets/mars-viking.jpg', import.meta.url).href, tex => {
  tex.colorSpace = THREE.SRGBColorSpace
  marsTexture = tex
  if (world?.marsGlobe) { world.marsGlobe.material.map = tex; world.marsGlobe.material.needsUpdate = true }
})
const realFlare = (() => {
  // Use NASA DONKI flare data the game already ships, if one happened recently.
  return fetch('./data/donki-events.json').then(r => (r.ok ? r.json() : null)).then(data => {
    const list = Array.isArray(data) ? data : data?.events ?? []
    const recent = list.filter(e => e.classType || e.class).sort((a, b) => String(b.peakTime ?? b.peak ?? '').localeCompare(String(a.peakTime ?? a.peak ?? '')))[0]
    return recent ? {cls: recent.classType ?? recent.class, date: String(recent.peakTime ?? recent.peak ?? '').slice(0, 10)} : null
  }).catch(() => null)
})()
let flareInfo = null
realFlare.then(v => { flareInfo = v })

// --- the world --------------------------------------------------------------------
let world = null
function disposeWorld() {
  if (!world) return
  world.skyLight?.dispose()
  world.scene.traverse(node => {
    node.geometry?.dispose?.()
    const mats = Array.isArray(node.material) ? node.material : node.material ? [node.material] : []
    for (const m of mats) if (!m.userData?.shared) m.dispose?.()
  })
  world = null
}

function buildWorld(siteId) {
  disposeWorld()
  const site = {id: siteId, ...SITES[siteId]}
  const scene = new THREE.Scene()
  const terrainHeight = siteHeight(siteId)
  const home = siteId === 'home'
  const built = save.base.built
  const placed = home ? placeModules(built) : []
  const collider = new Collider()
  const sky = makeSky(scene, {space: site.sky === 'space', thin: site.sky === 'thin', polar: site.sky === 'polar'})
  // Light from the sky itself: every surface is lit by the real colour of the sky around it.
  const skyLight = realism.enabled && save.settings.quality !== 'low' ? makeSkyLight(renderer, sky.material, {size: save.settings.quality === 'high' ? 128 : 64}) : null
  scene.fog = new THREE.Fog('#b98066', 40, 330)
  const paths = home ? [[[-11, 11], [-40, 40]], [[-36, 0], [-48, 8]], [[36, 0], [39, 0]], [[0, 37], [0, 50]], [[18, -30], [20, -44]], [[-36, 0], [-15, -15]]] : []
  const clear = home ? clearZones(placed, built) : [{x: site.spawn.x, z: site.spawn.z, r: 14}, ...(site.landmarks ?? []).map(l => ({x: l.x, z: l.z, r: 8}))]
  const q = save.settings.quality
  const ground = makeGround(scene, renderer, site, (x, z) => terrainHeight(x, z), {clear, paths, quality: q === 'high' ? 2 : q === 'medium' ? 1 : 0, seed: hashString(siteId) % 997})
  for (const r of ground.blockers) collider.circle(r.x, r.z, r.r)
  const w = {
    site, scene, sky, skyLight, ground, collider, placed, home, terrainHeight, regions: null,
    structures: null, interiors: null, outdoor: null, crew: null, patrol: null, droneBot: null,
    spots: [], dynamic: [], landmarks: [], collectibles: [], hazards: {},
  }
  world = w
  if (home) {
    for (const s of wallSegments(placed)) collider.segment(s.ax, s.az, s.bx, s.bz, s.tag)
    w.structures = makeStructures(scene, placed)
    w.interiors = makeInteriors(scene, placed, {marsTexture})
    for (const c of w.interiors.colliders) collider.circle(c.x, c.z, c.r)
    for (const [ax, az, bx, bz] of w.interiors.segs) collider.segment(ax, az, bx, bz)
    const outSpots = [], outColliders = []
    w.outdoor = makeOutdoor(scene, terrainHeight, built, {extraSpots: outSpots, extraColliders: outColliders})
    for (const c of outColliders) collider.circle(c.x, c.z, c.r)
    w.spots = [...w.interiors.spots, ...outSpots]
    w.crew = makeCrew(scene, placed, w.interiors)
    const loop = [[-14, 30], [-36, 22], [-58, -2], [-40, -30], [-10, -46], [28, -36], [32, 26], [10, 46]]
    w.patrol = makePatrol(scene, terrainHeight, loop)
    w.droneBot = makeDrone(scene, terrainHeight)
    w.marsGlobe = w.interiors.list.find(e => e.id === 'lab')?.group.children.find(c => c.geometry?.type === 'SphereGeometry')
    w.landing = makeLanding(scene)
  } else {
    buildSiteExtras(w)
  }
  w.groundAt = (x, z, underground) => {
    if (home) {
      const reg = regionAt(placed, x, z)
      if (reg) return FLOOR_Y
    }
    return terrainHeight(x, z, underground)
  }
  // shared actors
  w.kitty = makeKitty(scene, suitColors(save.suit))
  // a helmet lamp for walking about at night
  w.headlamp = new THREE.SpotLight('#fff1d6', 0, 26, 0.55, 0.6, 1.2)
  w.headlamp.position.set(0, 1.75, -0.35)
  w.headlamp.target.position.set(0, 0.2, -7)
  w.kitty.rig.add(w.headlamp, w.headlamp.target)
  w.dhrubo = makeDhrubo(scene)
  w.rover = makeRover(scene, terrainHeight, collider)
  w.drone = save.base.built.includes('drone') ? makeDrone(scene, terrainHeight) : null
  w.wind = makeWindDust(scene)
  const devilCount = site.sky === 'space' ? 0 : q === 'low' ? 1 : 3
  w.devils = makeDustDevils(scene, terrainHeight, devilCount, site.size * 0.42, hashString(siteId))
  w.bursts = makeBursts(scene, q === 'low' ? 300 : 700)
  if (site.sky === 'space') addMarsInSky(w)
  // where the player starts
  const start = home ? (save.player && save.site === 'home' ? save.player : {x: -13, z: 15, yaw: -0.71}) : {x: site.spawn.x + 4, z: site.spawn.z + 4, yaw: 0.6}
  player.x = start.x
  player.z = start.z
  player.yaw = start.yaw ?? 0
  player.heading = player.yaw
  player.y = w.groundAt(player.x, player.z)
  player.vy = 0
  player.mode = 'walk'
  player.underground = false
  if (home) {
    const park = w.interiors.anchors.roverPark
    w.rover.park(park[0], park[1], -(w.interiors.anchors.roverFacing ?? 0) + Math.PI / 2)
  } else w.rover.park(site.spawn.x - 8, site.spawn.z + 2, 0.4)
  w.dhrubo.root.position.set(player.x + 1, player.y + 2, player.z + 1)
  applyQuality()
  return w
}

// Your own kitty from the home screen, in the suit you picked (the classic suit wears your kitty's colour).
function suitColors(id) {
  const s = SUITS.find(x => x.id === id) ?? SUITS[0]
  const look = kittyLook(chosenAvatar())
  return {...look, suit: s.suit, trim: s.id === 'classic' ? look.trim : s.trim}
}

function addMarsInSky(w) {
  // From Phobos, Mars fills a huge part of the sky.
  const mat = new THREE.MeshBasicMaterial({map: marsTexture, color: marsTexture ? '#ffffff' : '#c1704f', fog: false})
  const mars = new THREE.Mesh(new THREE.SphereGeometry(110, 48, 32), mat)
  // Real size: from Phobos, Mars is about 42 degrees across and never moves in the sky.
  mars.position.set(-150, 85, -235)
  w.sky.dome.add(mars)
  w.marsGlobe = mars
}

// --- expedition sites --------------------------------------------------------------
function buildSiteExtras(w) {
  const {site, scene, terrainHeight: h, collider} = w
  const random = rng(hashString(site.id) + Date.now() % 100000)
  // the hopper rocket you came in
  const hopper = new THREE.Group()
  const b = new Builder()
  b.cyl(M.shell(), 0, 3.2, 0, 1.4, 3.6, 18, 0, 0, 0, 0.7)
  b.cyl(M.trim(), 0, 5.4, 0, 0.8, 0.9, 18, 0, 0, 0, 0.3)
  for (let k = 0; k < 4; k++) b.box(M.frame(), Math.cos(k * Math.PI / 2) * 1.6, 1.0, Math.sin(k * Math.PI / 2) * 1.6, 0.14, 2.2, 0.14, -k * Math.PI / 2, 0, 0.45)
  b.build(hopper)
  hopper.position.set(site.spawn.x, h(site.spawn.x, site.spawn.z), site.spawn.z)
  scene.add(hopper)
  collider.circle(site.spawn.x, site.spawn.z, 2.2)
  w.spots.push({id: 'hopper', x: site.spawn.x + 2.6, z: site.spawn.z + 1.5, r: 2.6, verb: 'tap', label: {en: S.en.board, bn: S.bn.board}})
  // landmarks: rovers and landers from real missions
  for (const l of site.landmarks ?? []) {
    const g = landmarkModel(l.type)
    g.position.set(l.x, h(l.x, l.z), l.z)
    g.rotation.y = l.rot ?? 0
    scene.add(g)
    if (l.type !== 'tubes') collider.circle(l.x, l.z, l.type === 'heatshieldrock' ? 1.2 : 2.0)
    w.landmarks.push({...l, group: g})
  }
  // this visit's objectives, and the things to find
  w.objectives = planVisit(site.id, random)
  for (const o of w.objectives) placeObjective(w, o, random)
  // hazards
  if (site.hazards?.includes('geysers')) {
    w.hazards.geysers = Array.from({length: 6}, (_, i) => ({x: (random() - 0.5) * 160, z: (random() - 0.5) * 160, phase: i * 2.3}))
  }
  if (site.hazards?.includes('rockfall')) w.hazards.rockfall = {timer: 8, rocks: []}
  if (site.cave) w.caveLight = null
}

function landmarkModel(type) {
  const g = new THREE.Group()
  if (['perseverance', 'curiosity', 'opportunity', 'zhurong'].includes(type)) {
    const m = roverModel()
    if (type === 'opportunity') m.root.scale.setScalar(0.7)
    if (type === 'zhurong') {
      const wings = new Builder()
      for (const side of [-1, 1]) wings.box(M.solarCell(), side * 1.9, 1.75, 0, 1.6, 0.04, 1.1, 0, 0, side * 0.5)
      wings.build(m.chassis)
    }
    g.add(m.root)
  } else if (type === 'ingenuity') {
    const d = droneModel()
    d.root.position.y = 0.85
    g.add(d.root)
  } else if (type === 'viking') {
    const b = new Builder()
    b.cyl(M.shellShade(), 0, 1.2, 0, 1.0, 0.5, 6)
    for (let k = 0; k < 3; k++) b.box(M.frame(), Math.cos(k * TAU / 3) * 1.1, 0.6, Math.sin(k * TAU / 3) * 1.1, 0.1, 1.3, 0.1, -k * TAU / 3, 0, 0.4)
    b.cyl(M.steel(), 0.2, 2.2, 0, 0.05, 1.6, 6)
    b.build(g)
    const dish = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 8, 0, TAU, 0, 1.0), M.steel())
    dish.position.set(0.2, 3.0, 0)
    dish.rotation.x = -0.8
    g.add(dish)
  } else if (type === 'heatshieldrock') {
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(1.0, 1), new THREE.MeshStandardMaterial({color: '#5d5a5e', metalness: 0.75, roughness: 0.35}))
    rock.scale.set(1, 0.7, 0.8)
    rock.position.y = 0.6
    g.add(rock)
  }
  return g
}

function placeObjective(w, o, random) {
  const {site, terrainHeight: h} = w
  const R = site.size * 0.38
  const spotFor = () => {
    for (let i = 0; i < 40; i++) {
      const x = (random() - 0.5) * 2 * R, z = (random() - 0.5) * 2 * R
      if (Math.hypot(x - site.spawn.x, z - site.spawn.z) < 20) continue
      return [x, z]
    }
    return [R * 0.5, R * 0.5]
  }
  const add = (x, z, kind, look) => {
    const g = look()
    g.position.set(x, h(x, z), z)
    w.scene.add(g)
    const ring = glow(o.kind === 'meteorite' ? '#ffd27a' : o.kind === 'ice' ? '#bdefff' : '#7ef4e0', 2.2, 0.0)
    ring.position.set(x, h(x, z) + 0.7, z)
    w.scene.add(ring)
    w.collectibles.push({o, x, z, group: g, ring, kind, taken: false, hidden: o.kind === 'samples' && random() < 0.4})
  }
  const rock = color => () => {
    const m = new THREE.Mesh(new THREE.DodecahedronGeometry(0.35, 0), new THREE.MeshStandardMaterial({color, flatShading: true, roughness: 0.7, emissive: color, emissiveIntensity: 0.15}))
    m.position.y = 0.25
    const g = new THREE.Group()
    g.add(m)
    return g
  }
  if (o.kind === 'samples') for (let i = 0; i < o.need; i++) add(...spotFor(), 'sample', rock('#b8775a'))
  if (o.kind === 'blueberries') for (let i = 0; i < o.need; i++) add(...spotFor(), 'berry', () => {
    const g = new THREE.Group()
    for (let k = 0; k < 6; k++) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), new THREE.MeshStandardMaterial({color: '#3b3d58', metalness: 0.4, roughness: 0.3}))
      m.position.set(Math.cos(k) * 0.25, 0.08, Math.sin(k * 1.7) * 0.25)
      g.add(m)
    }
    return g
  })
  if (o.kind === 'ice') for (let i = 0; i < o.need; i++) add(...spotFor(), 'ice', () => {
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.45, 0), new THREE.MeshStandardMaterial({color: '#dff6ff', emissive: '#7fd8ff', emissiveIntensity: 0.4, roughness: 0.15, transparent: true, opacity: 0.9}))
    m.position.y = 0.3
    const g = new THREE.Group()
    g.add(m)
    return g
  })
  if (o.kind === 'meteorite') add(...spotFor(), 'meteorite', () => {
    const m = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55, 1), new THREE.MeshStandardMaterial({color: '#4c4a50', metalness: 0.85, roughness: 0.3}))
    m.position.y = 0.4
    const g = new THREE.Group()
    g.add(m)
    return g
  })
  if (o.kind === 'tubes') {
    const depot = site.landmarks.find(l => l.type === 'tubes') ?? {x: 0, z: 0}
    for (let i = 0; i < o.need; i++) {
      const x = depot.x + (i % 5) * 3.2 - 6.4, z = depot.z + Math.floor(i / 5) * 4 + (i % 2) * 1.2
      add(x, z, 'tube', () => {
        const m = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.6, 10), M.steel())
        m.rotation.z = Math.PI / 2
        m.position.y = 0.08
        const g = new THREE.Group()
        g.add(m)
        return g
      })
    }
  }
  if (o.kind === 'beacon') for (let i = 0; i < o.need; i++) {
    const [x, z] = spotFor()
    w.collectibles.push({o, x, z, kind: 'beacon', taken: false, ring: (() => { const r = glow('#ffb35a', 3, 0.5); r.position.set(x, h(x, z) + 0.4, z); w.scene.add(r); return r })()})
  }
  if (o.kind === 'visit') {
    const l = site.landmarks.find(x => x.type === o.thing)
    if (l) w.collectibles.push({o, x: l.x + 2.5, z: l.z + 2.5, kind: 'visit', taken: false})
  }
  if (o.kind === 'scan') for (let i = 0; i < o.need; i++) {
    let best = null
    for (let k = 0; k < 60; k++) {
      const [x, z] = spotFor()
      const slope = Math.abs(h(x + 1, z) - h(x - 1, z)) + Math.abs(h(x, z + 1) - h(x, z - 1))
      if (!best || slope > best.slope) best = {x, z, slope}
    }
    w.collectibles.push({o, x: best.x, z: best.z, kind: 'scan', taken: false, ring: (() => { const r = glow('#c9a7ff', 2.6, 0.5); r.position.set(best.x, h(best.x, best.z) + 1, best.z); w.scene.add(r); return r })()})
  }
  if (o.kind === 'summit') {
    let best = null
    for (let x = -R; x <= R; x += 6) for (let z = -R; z <= R; z += 6) {
      const y = h(x, z)
      if (!best || y > best.y) best = {x, z, y}
    }
    w.collectibles.push({o, x: best.x, z: best.z, kind: 'summit', taken: false, auto: 5, ring: (() => { const r = glow('#ffe08a', 4, 0.7); r.position.set(best.x, best.y + 2, best.z); w.scene.add(r); return r })()})
  }
  if (o.kind === 'cave' && site.cave) {
    const c = site.cave
    const x = c.x + Math.cos(c.angle) * c.length, z = c.z + Math.sin(c.angle) * c.length
    w.collectibles.push({o, x, z, kind: 'cave', taken: false, auto: 5, underground: true})
  }
}

// --- the player -----------------------------------------------------------------------
const player = {x: 0, z: 0, y: 0, vy: 0, yaw: 0, heading: 0, pitch: 0.42, dist: 7.5, mode: 'walk', underground: false, grounded: true, lookIdle: 0, stride: 0}
const camTarget = new THREE.Vector3(), camPos = new THREE.Vector3(), camLook = new THREE.Vector3()
let hold = {id: null, t: 0}
let gameHours = save.hours, time = 0, last = performance.now(), saveTimer = 0, started = false, photo = null, travelling = false
let dir = null
let region = null, prevRegion = null

function startGame() {
  started = true
  audio.unlock()
  canvas.focus({preventScroll: true})
  dir = director.newDirector(hashString(String(Date.now())))
  dir.skill = save.skill ?? 1
  dir.history = save.history ?? []
  dir.cooldown = 45
  say(world.home ? (lang === 'bn' ? 'স্বাগতম মঙ্গল ঘাঁটিতে! চারপাশ ঘুরে দেখো। সমস্যা হলে আমি জানাব।' : 'Welcome to our Mars base! Explore inside and out. I will tell you if anything goes wrong.') : SITES[world.site.id].fact[lang], 8)
}

// --- events: turning director decisions into things you can see -----------------------
const activeFx = new Map()
function eventStarted(e) {
  const spec = director.EVENTS[e.id]
  audio[spec.good ? 'pickup' : 'alarm']()
  const text = EVENT_TEXT[e.id][lang]
  say(`${text[0]} ${text[1]}`, 9)
  const fx = {started: time}
  if (e.id === 'supplyDrop') {
    const a = Math.random() * TAU, r = 6 + Math.random() * 18
    fx.target = [OUTDOOR.landingPad.x + Math.cos(a) * r, OUTDOOR.landingPad.z + Math.sin(a) * r]
  }
  if (e.id === 'meteorite') {
    const a = Math.random() * TAU, r = 30 + Math.random() * 45
    fx.target = [Math.cos(a) * r, Math.sin(a) * r]
    fx.from = [fx.target[0] + 160, 140, fx.target[1] - 120]
  }
  if (e.id === 'roverStuck') world.patrol?.setStuck(true)
  if (e.id === 'powerSurge') save.base.breakers = false
  if (e.id === 'dustDevilClean') {
    const d = world.devils.devils[0]
    if (d) { d.x = OUTDOOR.solarFarm.x0 - 10; d.z = -10; d.heading = 0.4; d.life = 15 }
  }
  activeFx.set(e.uid, fx)
}

function fixSpotFor(e) {
  // Problems at the base wait for you to come home.
  if (!world.home) return null
  const spec = director.EVENTS[e.id]
  if (e.phase === 'warning' && !spec.good) return null
  const fx = activeFx.get(e.uid) ?? {}
  switch (e.id) {
    case 'leak': {
      const p = world.interiors.anchors.leak[e.module] ?? world.interiors.anchors.leak.hub
      return {id: 'leak', x: p[0], z: p[1], r: 2.2, verb: 'hold', label: {en: 'Patch the leak', bn: 'লিক জোড়া লাগাও'}}
    }
    case 'mold': return spotById('climate')
    case 'filterClog': return spotById('filter')
    case 'drillJam': return spotById('drill')
    case 'powerSurge': return spotById('breakers')
    case 'comms': return spotById('dish')
    case 'solarFlare': return e.phase === 'active' ? spotById('shelter') : null
    case 'dustStorm': return e.phase === 'cleanup' ? nearestPanelSpot() : null
    case 'roverStuck': return world.patrol ? {id: 'stuck', x: world.patrol.position.x + 2, z: world.patrol.position.z + 2, r: 2.8, verb: 'hold', label: {en: 'Push the rover', bn: 'রোভার ধাক্কা দাও'}} : null
    case 'supplyDrop': return fx.landed ? {id: 'crate', x: fx.target[0], z: fx.target[1], r: 2.4, verb: 'hold', label: {en: 'Open the supply crate', bn: 'রসদের বাক্স খোলো'}} : null
    case 'meteorite': return fx.landed ? {id: 'meteor', x: fx.target[0], z: fx.target[1], r: 2.4, verb: 'hold', label: {en: 'Pick up the meteorite', bn: 'উল্কাপিণ্ড তোলো'}} : null
    default: return null
  }
}
const spotById = id => world.spots.find(s => s.id === id)
function nearestPanelSpot() {
  let best = null
  for (const s of world.spots) if (s.id.startsWith('panels') && !s.cleaned) {
    const d = Math.hypot(s.x - player.x, s.z - player.z)
    if (!best || d < best.d) best = {s, d}
  }
  return best?.s ?? null
}

function resolveEvent(e, reward = {science: 2}) {
  const fx = activeFx.get(e.uid)
  director.resolve(dir, e.uid, time - (fx?.started ?? time))
  activeFx.delete(e.uid)
  if (e.id === 'roverStuck') world.patrol?.setStuck(false)
  if (e.id === 'powerSurge') save.base.breakers = true
  if (e.id === 'dustStorm') for (const s of world.spots) s.cleaned = false
  if (fx?.mesh) world.scene.remove(fx.mesh)
  for (const [k, v] of Object.entries(reward)) {
    if (k in save.base.stuff) save.base.stuff[k] += v
    if (k in save.base.tanks) save.base.tanks[k] = clamp(save.base.tanks[k] + v, 0, 100)
  }
  if (reward.science) save.scienceEarned += reward.science
  save.base.stats.fixes++
  world.kitty.cheer()
  audio.success()
  hud.toast(`${lang === 'bn' ? 'শাবাশ!' : 'Shabbash!'} ${Object.entries(reward).map(([k, v]) => `+${v} ${T(k)}`).join(' ')}`, 'good')
  burst(player.x, player.y + 1.5, player.z, '#ffe08a', 30)
  persist()
}

function burst(x, y, z, color, count = 20, opts = {}) {
  if (save.settings.reduced) return
  world.bursts.emit(x, y, z, {count, color, speed: 3, life: 0.9, size: 0.12, gravity: -3, ...opts})
}

// --- interacting with things ------------------------------------------------------------
function currentSpots() {
  // A problem to fix always wins over the normal use of the same spot.
  const fixes = []
  if (dir) for (const e of dir.active) {
    const s = fixSpotFor(e)
    if (s) fixes.push({...s, event: e})
  }
  const list = [...world.spots.filter(s => !fixes.some(f => f.id === s.id)), ...fixes]
  if (world.home && player.mode === 'walk') {
    const r = world.rover.state
    list.push({id: 'rover', x: r.x, z: r.z, r: 3.2, verb: 'tap', label: {en: T('drive'), bn: S.bn.drive}})
  }
  if (!world.home) {
    const r = world.rover.state
    if (player.mode === 'walk') list.push({id: 'rover', x: r.x, z: r.z, r: 3.2, verb: 'tap', label: {en: T('drive'), bn: S.bn.drive}})
    for (const c of world.collectibles) {
      if (c.taken || c.auto || (c.hidden && !c.revealed)) continue
      const label = c.kind === 'visit' ? {en: 'Say hello', bn: 'হ্যালো বলো'} : c.kind === 'scan' ? {en: 'Scan', bn: 'স্ক্যান করো'} : c.kind === 'beacon' ? {en: 'Plant a beacon', bn: 'বীকন বসাও'} : {en: 'Collect', bn: 'সংগ্রহ করো'}
      list.push({id: 'collect', x: c.x, z: c.z, r: 2.1, verb: c.kind === 'visit' ? 'tap' : 'hold', label, collectible: c})
    }
  }
  return list
}

function nearestSpot() {
  if (player.mode !== 'walk') return null
  let best = null
  for (const s of currentSpots()) {
    const d = Math.hypot(s.x - player.x, s.z - player.z)
    if (d < s.r && (!best || d < best.d)) best = {...s, d}
  }
  return best
}

function useSpot(s) {
  const e = s.event
  if (e) return fixEvent(e, s)
  if (s.collectible) return collect(s.collectible)
  audio.click()
  const fact = SPOT_FACTS[s.id]
  switch (s.id) {
    case 'planner': return hud.buildMenu(save.base, buy)
    case 'wardrobe': return hud.wardrobe(save.scienceEarned, save.suit, wear)
    case 'globe': return hud.mapMenu(world.site.id, save.visited, travel)
    case 'hopper': return hud.mapMenu(world.site.id, save.visited, travel)
    case 'rover': return enterRover()
    case 'harvest': {
      const food = harvest(save.base)
      if (food) { audio.success(); hud.toast(`🥕 +${food}% ${T('food')}`, 'good'); world.kitty.cheer(); burst(player.x, player.y + 1, player.z, '#9bd36a', 25) } else say(lang === 'bn' ? `ফসল এখনো বড় হচ্ছে: ${Math.round(save.base.crops * 100)}%। পরে আবার এসো!` : `The crops are still growing: ${Math.round(save.base.crops * 100)}%. Come back later!`)
      return
    }
    case 'radio': {
      const e2 = earthFromMars(new Date())
      say(lang === 'bn' ? `বার্তা পাঠানো হলো! পৃথিবী এখন ${(e2.km / 1e6).toFixed(0)} মিলিয়ন কিমি দূরে, তাই পৌঁছাতে ${e2.lightMinutes.toFixed(1)} মিনিট লাগবে।` : `Message sent! Earth is ${(e2.km / 1e6).toFixed(0)} million km away, so it takes ${e2.lightMinutes.toFixed(1)} minutes to arrive.`)
      setTimeout(() => hud.toast(lang === 'bn' ? '🌍 মিশন কন্ট্রোল: দারুণ কাজ, দল!' : '🌍 Mission Control: Great work, crew!', 'good'), Math.min(30, e2.lightMinutes * 2 * 2) * 1000)
      return
    }
    case 'shelter': return say(lang === 'bn' ? 'এটা ঝড়ের আশ্রয়। পানির দেয়াল বিকিরণ আটকায়।' : 'This is the storm shelter. Its water walls block radiation.')
    case 'trampoline': world.kitty.cheer(); player.vy = 9; return
    default:
      if (s.id.startsWith('panels')) {
        if (save.base.dust > 0.12) return
        return say(lang === 'bn' ? `প্যানেল পরিষ্কার আছে। ধুলো: ${Math.round(save.base.dust * 100)}%` : `The panels are clean enough. Dust: ${Math.round(save.base.dust * 100)}%`)
      }
      if (fact) return hud.info(s.label[lang], fact[lang], fact.source)
      return hud.info(s.label[lang], '')
  }
}

function fixEvent(e, s) {
  const how = director.EVENTS[e.id].fix?.how
  if (['tap', 'timing', 'sequence', 'align', 'balance'].includes(how)) {
    hud.miniGame(how, () => resolveEvent(e, {science: 3}))
    return
  }
  if (e.id === 'supplyDrop') return resolveEvent(e, {metal: 4, food: 15, science: 1})
  if (e.id === 'meteorite') { save.base.stuff.samples++; return resolveEvent(e, {metal: 5, science: 2}) }
  if (e.id === 'dustStorm') {
    const row = world.spots.find(x => x.id === s.id)
    if (row) row.cleaned = true
    save.base.dust = Math.max(0, save.base.dust - 0.18)
    burst(s.x + 2, player.y + 1.5, s.z, '#d9a882', 30)
    if (!world.spots.some(x => x.id.startsWith('panels') && !x.cleaned) || save.base.dust < 0.12) resolveEvent(e, {science: 3})
    else hud.toast(lang === 'bn' ? '🧹 এক সারি পরিষ্কার!' : '🧹 One row clean!')
    return
  }
  return resolveEvent(e, {science: 2})
}

function collect(c) {
  const o = c.o
  c.taken = true
  if (c.group) world.scene.remove(c.group)
  if (c.ring) c.ring.visible = c.kind === 'beacon'
  if (c.kind === 'beacon') {
    const pole = new Builder()
    pole.cyl(M.frame(), c.x, world.terrainHeight(c.x, c.z) + 1.2, c.z, 0.05, 2.4, 6)
    pole.build(world.scene)
    c.ring.position.y += 2.2
  }
  o.have = Math.min(o.need, o.have + 1)
  if (['sample', 'berry', 'tube', 'meteorite'].includes(c.kind)) save.base.stuff.samples++
  audio.pickup()
  burst(c.x, world.terrainHeight(c.x, c.z) + 0.6, c.z, '#7ef4e0', 18)
  if (c.kind === 'visit') {
    const name = {perseverance: 'Perseverance', curiosity: 'Curiosity', opportunity: 'Opportunity', zhurong: 'Zhurong', viking: 'Viking 2'}[o.thing]
    say(lang === 'bn' ? `হ্যালো, ${name}! তুমি মঙ্গলে অনেক কিছু আবিষ্কার করেছ।` : `Hello, ${name}! Thank you for exploring Mars for us.`)
  }
  if (o.have >= o.need && !o.done) {
    o.done = true
    for (const [k, v] of Object.entries(o.reward)) save.base.stuff[k] += v
    save.scienceEarned += o.reward.science ?? 0
    audio.success()
    world.kitty.cheer()
    hud.toast(`${T('objectiveDone')} ${Object.entries(o.reward).map(([k, v]) => `+${v} ${T(k)}`).join(' ')}`, 'good')
    if (world.objectives.every(x => x.done)) {
      say(T('siteDone') + ' ' + T('allDone'), 8)
      if (!save.trophies.includes(world.site.id)) save.trophies.push(world.site.id)
    }
    persist()
  } else hud.toast(`${T('collected')} ${o.have}/${o.need}`)
}

function buy(id) {
  const item = BUILDABLES.find(b => b.id === id)
  if (!item || save.base.built.includes(id) || !canAfford(save.base, item.cost)) return
  pay(save.base, item.cost)
  save.base.built.push(id)
  save.player = {x: player.x, z: player.z, yaw: player.yaw}
  persist()
  audio.build()
  audio.success()
  hud.toast(`🏗️ ${T('built')}!`, 'good')
  // Rebuild the base so the new building appears (it is quick).
  hud.fade(true)
  setTimeout(() => { buildWorld('home'); hud.fade(false); say(lang === 'bn' ? 'নতুন জিনিস তৈরি হয়েছে! গিয়ে দেখো।' : 'Construction complete! Go and have a look.') }, 450)
}

function wear(id) {
  save.suit = id
  persist()
  const look = suitColors(id)
  world.kitty.materials.suit.color.set(look.suit)
  world.kitty.materials.trim.color.set(look.trim)
  world.kitty.cheer()
}

function travel(id) {
  if (travelling || id === world.site.id) return
  travelling = true
  audio.rocket()
  save.player = world.home ? {x: player.x, z: player.z, yaw: player.yaw} : save.player
  hud.fade(true)
  setTimeout(() => {
    save.site = id
    if (!save.visited.includes(id)) save.visited.push(id)
    persist()
    buildWorld(id)
    hud.fade(false)
    travelling = false
    hud.toast(`🚀 ${T('landed')}`, 'good')
    const waiting = id === 'home' ? dir?.active.find(e => !director.EVENTS[e.id].good) : null
    if (waiting) say(`${lang === 'bn' ? 'স্বাগতম! একটা সমস্যা অপেক্ষা করছে:' : 'Welcome back! A problem is waiting for us:'} ${EVENT_TEXT[waiting.id][lang][0]}`, 8)
    else say(SITES[id].fact[lang], 9)
    burst(player.x, player.y + 0.3, player.z, '#c48a64', 40, {speed: 6, gravity: -1, size: 0.3, life: 1.6})
  }, 900)
}

function enterRover() {
  player.mode = 'drive'
  audio.door()
  world.kitty.rig.visible = false
}
function leaveRover() {
  const r = world.rover.state
  player.mode = 'walk'
  const out = world.collider.resolve(r.x + Math.cos(r.heading) * 2.6, r.z - Math.sin(r.heading) * 2.6, 0.45)
  player.x = out.x
  player.z = out.z
  world.kitty.rig.visible = true
}

// --- main loop ----------------------------------------------------------------------------
const tmpV = new THREE.Vector3()
const envGround = new THREE.Color(), sunDir = new THREE.Vector3(), earthDir = new THREE.Vector3()
const fogColor = new THREE.Color()
let fpsAvg = 1 / 60, fpsClock = 0, downgraded = false, clockCache = null, clockTimer = 0, earthCache = earthFromMars(new Date())

function frame(now) {
  requestAnimationFrame(frame)
  if (!world) return
  const dt = Math.min(0.05, (now - last) / 1000)
  last = now
  if (document.hidden) return
  resize()
  const reduced = save.settings.reduced
  time += dt
  shared.time.value = time
  const w = world, site = w.site
  // --- clocks
  clockTimer -= dt
  if (!clockCache || clockTimer <= 0) { clockCache = marsClock(new Date(), site.lon); clockTimer = 5; earthCache = earthFromMars(new Date()) }
  if (save.settings.realTime) gameHours = clockCache.lmst
  else if (started && !hud.panelOpen) {
    gameHours += dt * 24 / 360
    if (gameHours >= 24) { gameHours -= 24; save.sols = (save.sols ?? 0) + 1; save.base.stats.sols++ }
  }
  const sun = sunPosition(gameHours, site.moon ? 0 : site.lat, clockCache.ls)
  sunDir.set(...skyDirection(sun.azimuth, sun.elevation))
  const elong = earthCache.elongation * Math.PI / 180
  earthDir.set(...skyDirection(sun.azimuth + (gameHours > 12 ? -1 : 1) * elong * 0.8, Math.max(0.05, sun.elevation + 0.1)))
  const night = clamp(1 - (sunDir.y + 0.05) / 0.17, 0, 1)
  // --- director and the base simulation (the base keeps running while you travel)
  const paused = !started || hud.panelOpen
  if (dir && !paused) {
    const ctx = {
      dustSeason: clockCache.dustSeason, night: night > 0.5, site: site.id, dust: save.base.dust, built: ['greenhouse', ...save.base.built],
      realFlare: flareInfo, paused, leakModules: w.home ? w.placed.map(m => m.id).filter(id => w.interiors.anchors.leak[id]) : ['hub'],
      // Base problems only happen while you are at home (the base runs smoothly while you travel).
      available: () => w.home,
    }
    const {started: ev, finished} = director.update(dir, dt, ctx)
    if (ev) eventStarted(ev)
    for (const f of finished) activeFx.delete(f.uid)
    // dust storm cleanup: dust has built up on the panels
    const cleanup = dir.active.find(e => e.id === 'dustStorm' && e.phase === 'cleanup')
    if (cleanup && !cleanup.announced) { cleanup.announced = true; save.base.dust = Math.max(save.base.dust, 0.65); say(EVENT_TEXT.dustStormCleanup[lang].join(' ')) }
    if (cleanup && !w.home) { director.resolve(dir, cleanup.uid, 60) }
    const lucky = dir.active.find(e => e.id === 'dustDevilClean')
    if (lucky && lucky.age > 6 && !lucky.cleaned) { lucky.cleaned = true; save.base.dust = Math.max(0, save.base.dust - 0.5); hud.toast('🌀 ☀️', 'good') }
    // shelter during a solar flare
    const flare = dir.active.find(e => e.id === 'solarFlare' && e.phase === 'active')
    if (flare && w.home) {
      const sh = spotById('shelter')
      if (sh && Math.hypot(player.x - sh.x, player.z - sh.z) < 2.6 && !flare.safe) { flare.safe = true; resolveEvent(flare, {science: 4}) }
    }
  }
  const storm = dir ? director.stormLevel(dir) : 0
  if (!paused) {
    const homeHours = (gameHours + (SITES.home.lon - site.lon) / 15 + 48) % 24
    const homeSun = sunPosition(homeHours, SITES.home.lat, clockCache.ls)
    const problems = dir && w.home ? director.problems(dir) : {}
    const r = simTick(save.base, {sunElevation: homeSun.elevation, night: homeSun.elevation < 0, storm: w.home ? storm : 0, problems}, dt * 24 / 360)
    w.rates = r
    if (save.base.built.includes('observatory') && Math.random() < dt / 60) save.base.stuff.science += 1
  }
  shared.growth.value = save.base.crops
  shared.mold.value = damp(shared.mold.value, dir?.active.some(e => e.id === 'mold' && e.phase === 'active') ? 1 : 0, 1, dt)
  animateFlows(dt, {water: save.base.tanks.water > 2 ? 1 : 0, power: Math.max(0.1, (w.rates?.solar ?? 0) / 20), oxygen: 1})

  // --- input and movement
  const inp = input.poll()
  for (const p of input.take()) handlePress(p)
  if (photo) updatePhoto(dt, inp)
  else if (!paused) updatePlayer(dt, inp, reduced)

  // --- region (inside which building?)
  prevRegion = region
  region = w.home && player.mode === 'walk' ? regionAt(w.placed, player.x, player.z) : null
  if ((region?.kind ?? null) !== (prevRegion?.kind ?? null) && started) {
    w.kitty.setHelmet(!region)
    if (!!region !== !!prevRegion) audio.door()
  }
  w.kitty.setHelmet(!region)

  // --- world animation
  const focus = tmpV.set(player.x, player.y, player.z)
  const skyState = w.sky.update({sunDir, earthDir, hours: gameHours, storm, focus, indoors: region ? 1 : 0, time, shadowSize: region ? 30 : 60})
  w.sky.dome.position.copy(camera.position)
  if (w.skyLight) {
    // redraw the sky light when the Sun has moved a little or the weather changed
    const key = `${Math.round(sunDir.x * 30)},${Math.round(sunDir.y * 30)},${Math.round(sunDir.z * 30)},${Math.round(storm * 8)}`
    envGround.set(site.palette[1]).multiplyScalar(0.06 + 0.42 * skyState.day * (1 - storm * 0.5))
    w.skyLight.update(w.scene, envGround, key, time, save.settings.quality === 'high' ? 1.5 : 4)
    w.scene.environmentIntensity = region ? 0.6 : 1
    // the sky light now does most of the soft fill; keep a little flat light for moonlit nights
    w.sky.hemi.intensity *= lerp(0.55, 0.12, skyState.day)
  }
  realism.dustAmount.value = 1 + storm * 0.6
  w.sky.fogColor(fogColor, storm)
  w.scene.fog.color.copy(fogColor)
  const thin = site.sky === 'space' ? 0 : 1
  // dusty air: far hills fade into the sky colour (aerial perspective)
  w.scene.fog.near = lerp(realism.enabled ? 22 : 60, 4, storm) * thin + (1 - thin) * 300
  w.scene.fog.far = lerp(realism.enabled ? 290 : 340, 45, storm) * thin + (1 - thin) * 900
  const flare = dir?.active.find(e => e.id === 'solarFlare' && e.phase === 'active')
  if (flare) w.sky.hemi.color.offsetHSL(0.0, 0, Math.sin(time * 6) * 0.02)
  w.wind.elapsed.value = reduced ? 0 : time
  w.wind.storm.value = storm
  w.wind.inside.value = region || site.sky === 'space' ? 1 : 0
  w.wind.center.value.set(player.x, w.terrainHeight(player.x, player.z), player.z)
  const pixel = renderer.getPixelRatio()
  w.wind.pixel.value = pixel
  w.devils.update(dt, time, {avoid: w.home ? w.placed.map(m => ({x: m.x, z: m.z, r: (m.r ?? 10) + 6})) : [], reduced, pixel})
  for (const d of w.devils.devils) d.pts.visible = storm < 0.4 && !player.underground
  w.bursts.update(dt, pixel)
  if (w.home) updateBase(dt, night, storm, reduced)
  else updateSite(dt, reduced)
  updateEffects(dt, reduced)
  hideIdleDrone()
  w.headlamp.intensity = !region && player.mode === 'walk' ? night * 38 + (player.underground ? 45 : 0) : 0
  M.window().emissive.setRGB(lerp(0.11, 1.0, night), lerp(0.18, 0.78, night), lerp(0.3, 0.42, night))
  M.window().emissiveIntensity = lerp(0.35, 1.4, night)
  // Dhrubo floats beside you and looks at what matters
  const goal = hudGoal()
  const side = player.heading + Math.PI / 2
  const follow = tmpV.set(player.x + Math.sin(side) * 1.1 + Math.sin(player.heading) * 0.8, player.y + (player.mode === 'drive' ? 3.4 : 2.1), player.z + Math.cos(side) * 1.1 + Math.cos(player.heading) * 0.8)
  w.dhrubo.update(dt, time, follow, goal ? new THREE.Vector3(goal.x, player.y + 1, goal.z) : camera.position, reduced)
  w.dhrubo.setMood(dir?.active.some(e => !director.EVENTS[e.id].good && e.phase !== 'warning') ? 'worried' : 'happy')
  w.dhrubo.root.visible = player.mode !== 'drone' && !photo
  updateCamera(dt, inp, reduced)
  audio.ambience(region ? 1 : player.underground ? 0.7 : 0, storm, region?.module === 'power' ? 1 : region?.module === 'life' ? 0.6 : 0, /greenhouse/.test(region?.module ?? '') ? 1 : 0)
  audio.vehicle('rover', player.mode === 'drive' ? 0.15 + Math.min(1, Math.abs(w.rover.state.speed) / 6) : 0)
  audio.vehicle('drone', player.mode === 'drone' ? 0.6 : 0)

  // --- HUD
  const spot = started && !photo ? nearestSpot() : null
  let prompt = null
  if (spot) {
    const verb = spot.verb === 'hold' ? T('hold') : T('tap')
    prompt = {text: `${touch ? '✋' : 'E'} · ${verb}: ${spot.label[lang] ?? spot.label.en}`, verb: spot.verb, progress: hold.id === spotKey(spot) ? hold.t / 1.1 : 0}
  }
  if (player.mode === 'drive') prompt = {text: `${touch ? '🛞' : 'E / R'} · ${T('leaveRover')}`, verb: 'tap'}
  const alert = w.home ? dir?.active.find(e => !(e.id === 'dustStorm' && e.phase === 'active' && e.age > 20)) ?? null : null
  hud.update({
    site: site.id, clock: clockCache, hours: gameHours, base: save.base, colonySol: (save.sols ?? 0) + 1,
    objectives: w.objectives, alert: alert ? {id: alert.phase === 'cleanup' ? 'dustStormCleanup' : alert.id, phase: alert.phase, good: director.EVENTS[alert.id].good} : null,
    prompt, marker: started && !photo ? markerFor(goal) : null, emergency: save.base.emergency,
    drone: player.mode === 'drone' ? w.drone.state : null, showDrone: !!w.drone, showRover: player.mode === 'drive',
  })
  // --- render
  if (look) look.render(performance.now() / 1000)
  else renderer.render(w.scene, camera)
  // --- performance: drop quality once if the device struggles
  fpsAvg = lerp(fpsAvg, dt, 0.05)
  fpsClock += dt
  if (fpsClock > 4 && fpsAvg > 1 / 26 && !downgraded && save.settings.quality !== 'low') {
    downgraded = true
    save.settings.quality = save.settings.quality === 'high' ? 'medium' : 'low'
    applyQuality()
  }
  saveTimer += dt
  if (saveTimer > 5 && started) {
    saveTimer = 0
    save.hours = gameHours
    save.skill = dir?.skill ?? 1
    save.history = dir?.history ?? []
    if (w.home && player.mode === 'walk') save.player = {x: player.x, z: player.z, yaw: player.yaw}
    persist()
  }
}

const spotKey = s => `${s.id}-${s.event?.uid ?? ''}-${s.collectible ? world.collectibles.indexOf(s.collectible) : ''}`

function handlePress(p) {
  if (!started) return
  if (hud.panelOpen && p !== 'menu') return
  if (photo) return
  switch (p) {
    case 'act': {
      if (player.mode === 'drive') return leaveRover()
      if (player.mode === 'drone') return landDrone()
      const s = nearestSpot()
      if (s && s.verb !== 'hold') useSpot(s)
      return
    }
    case 'rover': if (player.mode === 'drive') leaveRover(); else if (Math.hypot(world.rover.state.x - player.x, world.rover.state.z - player.z) < 4) enterRover(); return
    case 'jump': if (player.mode === 'walk' && player.grounded) { player.vy = world.site.moon ? 5.2 : 4.4; player.grounded = false; if (world.site.moon) hud.toast(T('phobosJump')) } return
    case 'map': return hud.mapMenu(world.site.id, save.visited, travel)
    case 'build': return world.home ? hud.buildMenu(save.base, buy) : hud.toast(lang === 'bn' ? 'বাড়ি ফিরে তৈরি করো।' : 'Build things back at home base.')
    case 'photo': return startPhoto()
    case 'drone': return toggleDrone()
    case 'menu':
      if (hud.panelOpen) return hud.closePanel()
      return hud.settings(save.settings, onSetting)
  }
}

function onSetting(k, v) {
  if (k === 'language') {
    lang = lang === 'bn' ? 'en' : 'bn'
    try { localStorage.setItem('astro-kitty-profile-v1', JSON.stringify({...profile, language: lang})) } catch {}
    hud.relabel()
    return
  }
  save.settings[k] = v
  if (k === 'sound') { audio.setEnabled(v); saveSound(v) }
  if (k === 'quality') { downgraded = true; buildWorld(world.site.id) }
  persist()
}

function updatePlayer(dt, inp, reduced) {
  const w = world
  const [mx, my] = inp.move
  player.yaw -= inp.look[0]
  player.pitch = clamp(player.pitch + inp.look[1], -0.15, 1.2)
  player.dist = clamp(player.dist + inp.zoom * 0.8, 3.5, 34)
  if (inp.look[0] || inp.look[1]) player.lookIdle = 0
  else player.lookIdle += dt
  if (player.mode === 'drive') {
    const r = w.rover.drive(dt, my, mx, {night: nightLevel(), reduced})
    player.x = r.x
    player.z = r.z
    player.y = w.rover.model.root.position.y + 1.2
    player.heading = r.heading
    if (Math.abs(r.speed) > 1 && player.lookIdle > 1) player.yaw = dampAngle(player.yaw, r.heading, 2, dt)
    if (r.dust > 0.2 && Math.random() < r.dust * 0.6) w.bursts.emit(r.x + Math.sin(r.heading) * 1.8, w.terrainHeight(r.x, r.z) + 0.3, r.z + Math.cos(r.heading) * 1.8, {count: 2, color: '#c48a64', speed: 1.2, up: 0.6, gravity: -0.4, life: 1.6, size: 0.35, grow: 0.5})
    return
  }
  if (player.mode === 'drone') {
    w.drone.control(dt, my, mx, inp.up, 0)
    if (w.drone.state.battery <= 0) { landDrone(); hud.toast(T('droneDone')) }
    revealNear(w.drone.state.x, w.drone.state.z, 26)
    return
  }
  w.rover.idle(dt, nightLevel())
  const indoors = !!regionAt(w.placed ?? [], player.x, player.z)
  const speed = (inp.run ? 6.4 : indoors ? 3.2 : 3.8) * Math.min(1, Math.hypot(mx, my))
  const fx = -Math.sin(player.yaw), fz = -Math.cos(player.yaw)
  const rx = Math.cos(player.yaw), rz = -Math.sin(player.yaw)
  let vx = (fx * my + rx * mx), vz = (fz * my + rz * mx)
  const len = Math.hypot(vx, vz)
  if (len > 1e-3) { vx = vx / len * speed; vz = vz / len * speed }
  player.vx = damp(player.vx ?? 0, vx, 10, dt)
  player.vz = damp(player.vz ?? 0, vz, 10, dt)
  const nx = player.x + player.vx * dt, nz = player.z + player.vz * dt
  const half = w.site.size / 2 - 3
  let fixed = w.collider.resolve(clamp(nx, -half, half), clamp(nz, -half, half), 0.42)
  // inside the lava tube the rock walls hold you in
  if (player.underground && !inCave(w.site.cave, fixed.x, fixed.z)) fixed = {x: player.x, z: player.z}
  const moved = Math.hypot(fixed.x - player.x, fixed.z - player.z)
  player.x = fixed.x
  player.z = fixed.z
  if (moved > 0.002) player.heading = dampAngle(player.heading, Math.atan2(-player.vx, -player.vz), 10, dt)
  if (moved > 0.01 && player.lookIdle > 1.5 && !region) player.yaw = dampAngle(player.yaw, player.heading, 1.2, dt)
  // cave: once you climb down into the pit you can walk into the lava tube
  if (w.site.cave) {
    const c = w.site.cave
    const inPit = Math.hypot(player.x - c.x, player.z - c.z) < c.r
    if (inPit && player.y < -c.depth + 4) player.underground = true
    if (inPit && player.y > -c.depth + 6) player.underground = false
  }
  const ground = w.groundAt(player.x, player.z, player.underground)
  const g = w.site.gravity
  player.vy -= g * dt * (w.site.moon ? 0.7 : 1.6)
  player.y += player.vy * dt
  if (player.y <= ground) {
    if (!player.grounded && player.vy < -3) { audio.thump(); if (!region) burst(player.x, ground + 0.1, player.z, '#c48a64', 10, {speed: 1.5, gravity: -1, size: 0.2, life: 0.8}) }
    player.y = player.grounded ? damp(player.y, ground, 18, dt) : ground
    player.vy = 0
    player.grounded = true
  } else if (player.y - ground > 0.3) player.grounded = false
  if (player.grounded) player.y = Math.max(ground, damp(player.y, ground, 14, dt))
  const animSpeed = moved / dt
  w.kitty.rig.position.set(player.x, 0, player.z)
  w.kitty.rig.rotation.y = player.heading
  w.kitty.animate(dt, animSpeed, player.y, hold.id ? clamp(hold.t / 1.1, 0, 1) : 0, reduced)
  player.stride += moved
  if (player.stride > 0.8 && player.grounded) {
    player.stride = 0
    audio.step(region ? 'metal' : 'sand')
    if (!region && !reduced) w.bursts.emit(player.x, player.y + 0.05, player.z, {count: 2, color: '#b98067', speed: 0.4, up: 0.4, gravity: -0.3, life: 0.9, size: 0.12, grow: 0.15})
  }
  // holding the action button on a "hold" spot fills a ring
  const s = nearestSpot()
  if (s && s.verb === 'hold' && inp.act) {
    const key = spotKey(s)
    if (hold.id !== key) hold = {id: key, t: 0}
    hold.t += dt * (save.base.built.includes('printer') ? 1.4 : 1)
    if (!reduced && Math.random() < 0.3) w.bursts.emit(s.x, player.y + 1, s.z, {count: 1, color: s.id === 'leak' ? '#ffd27a' : '#fff1d0', speed: 2, life: 0.4, size: 0.06})
    if (hold.t >= 1.1) { hold = {id: null, t: 0}; useSpot(s) }
  } else hold = {id: null, t: 0}
}

function revealNear(x, z, r) {
  if (world.home) return
  for (const c of world.collectibles) if (c.hidden && !c.revealed && Math.hypot(c.x - x, c.z - z) < r) {
    c.revealed = true
    hud.toast(`🚁 ${T('droneReveal')}`, 'good')
  }
}

function toggleDrone() {
  const w = world
  if (!w.drone) return hud.toast(lang === 'bn' ? 'আগে ড্রোন তৈরি করো (তৈরি মেনু)।' : 'Build the drone first (Build menu).')
  if (player.mode === 'drone') return landDrone()
  if (player.mode !== 'walk') return
  player.mode = 'drone'
  Object.assign(w.drone.state, {x: player.x + 1, z: player.z + 1, y: player.y + 2, battery: 1, heading: player.yaw})
  audio.console()
}
function landDrone() {
  player.mode = 'walk'
  audio.thump()
}

function nightLevel() { return clamp(1 - (sunDir.y + 0.05) / 0.17, 0, 1) }

function updateBase(dt, night, storm, reduced) {
  const w = world
  const problems = dir ? director.problems(dir) : {}
  w.structures.update(dt, region, [player, ...w.crew.members.map(m => m.kitty.rig.position)], reduced)
  // airlocks open for whoever is close (Kitty or the rover)
  const agents = [{x: player.x, z: player.z}, {x: w.rover.state.x, z: w.rover.state.z}]
  for (const a of w.structures.airlocks) {
    const near = agents.some(p => Math.hypot(p.x - a.a.outer[0], p.z - a.a.outer[1]) < (a.a.wide ? 6 : 3.4))
    const open = w.structures.driveAirlock(a, near, dt, reduced)
    w.collider.setEnabled(a.a.id, open < 0.7)
    if (near && !a.wasNear) { audio.airlock(); if (!reduced) w.bursts.emit(a.a.outer[0], FLOOR_Y + 1.5, a.a.outer[1], {count: 14, color: '#e6f3ff', speed: 1.4, life: 0.8, size: 0.2, grow: 0.4, gravity: 0.2}) }
    a.wasNear = near
  }
  updateInteriorLights(w.interiors.list, region?.module)
  const leak = dir?.active.find(e => e.id === 'leak' && e.phase === 'active')
  for (const entry of w.interiors.list) {
    const near = Math.hypot(player.x - entry.m.x, player.z - entry.m.z) < 40
    entry.animate(time, dt, {
      near, tanks: save.base.tanks, crops: save.base.crops, mold: problems.mold, filterClog: problems.filterClog, surge: problems.surge,
      breakers: save.base.breakers, rates: w.rates ?? {solar: 0, reactor: 0}, charging: (w.rates?.power ?? 0) > 0, samples: save.base.stuff.samples,
      clock: clockCache, earth: earthCache,
    })
    // alarms: lights pulse red in a building with a problem
    const alarmed = (leak && leak.module === entry.id) || (problems.mold && entry.id === 'greenhouse') || (problems.surge && entry.id === 'power') || (problems.filterClog && entry.id === 'life')
    for (const l of entry.lights) {
      if (alarmed) l.color.setRGB(1, 0.25 + Math.abs(Math.sin(time * 4)) * 0.3, 0.2)
      else l.color.set(l.userData.base ??= '#' + l.color.getHexString())
    }
  }
  if (leak) {
    const p = w.interiors.anchors.leak[leak.module]
    if (p && !reduced) w.bursts.emit(p[0], FLOOR_Y + 2.2, p[1], {count: 2, color: '#f2f8ff', speed: 3, life: 0.7, size: 0.18, grow: 0.6, gravity: 0.5, dir: [-p[0] / Math.hypot(...p) * 0.4, 0.2, -p[1] / Math.hypot(...p) * 0.4], spread: 0.6})
    if (p && Math.random() < dt * 1.2 && Math.hypot(player.x - p[0], player.z - p[1]) < 18) audio.hiss()
  }
  if (problems.surge && Math.random() < dt * 3) {
    const s = spotById('breakers')
    if (s) { w.bursts.emit(s.x - 1, FLOOR_Y + 1.8, s.z, {count: 8, color: '#9fe3ff', speed: 4, life: 0.4, size: 0.06}); if (Math.hypot(player.x - s.x, player.z - s.z) < 15) audio.spark() }
  }
  if (problems.drillJam && Math.random() < dt * 4) w.bursts.emit(OUTDOOR.iceDrill.x, w.terrainHeight(OUTDOOR.iceDrill.x, OUTDOOR.iceDrill.z) + 6.8, OUTDOOR.iceDrill.z, {count: 1, color: '#4a4040', speed: 0.6, up: 1, gravity: 0.6, life: 2.5, size: 0.5, grow: 0.9})
  w.outdoor.update(time, dt, {sunDir, earthDir, dust: save.base.dust, storm, night, drillJam: problems.drillJam, comms: problems.comms})
  // crew: sleep at night, run to the shelter in a solar flare or emergency
  const flare = dir?.active.some(e => e.id === 'solarFlare' && e.phase === 'active')
  const helpEvent = dir?.active.find(e => e.phase === 'active' && ['leak', 'mold', 'filterClog', 'powerSurge'].includes(e.id))
  const helpModule = helpEvent ? (helpEvent.module ?? {mold: 'greenhouse', filterClog: 'life', powerSurge: 'power'}[helpEvent.id]) : null
  const mode = flare || save.base.emergency ? 'shelter' : helpModule ? `help:${helpModule}` : (gameHours > 21 || gameHours < 5.5) ? 'sleep' : 'normal'
  w.crew.update(dt, time, mode, reduced)
  w.patrol.update(dt, night)
  if (player.mode !== 'drone') w.droneBot.patrol(dt, time, {x: 0, z: 0})
  if (player.mode === 'drone' && w.drone) w.droneBot.patrol(dt, time, {x: 0, z: 0})
}

function updateSite(dt, reduced) {
  const w = world
  // collectibles twinkle; hidden ones only show when you are close or the drone saw them
  for (const c of w.collectibles) {
    if (c.taken && c.kind !== 'beacon') continue
    const d = Math.hypot(player.x - c.x, player.z - c.z)
    if (c.hidden && !c.revealed && d < 9) c.revealed = true
    const show = !c.hidden || c.revealed
    if (c.group) { c.group.visible = show; c.group.rotation.y += dt * 0.6 }
    if (c.ring && c.kind !== 'beacon') c.ring.material.opacity = show ? 0.35 + Math.sin(time * 3 + c.x) * 0.25 : 0
    if (c.kind === 'beacon' && c.taken) c.ring.material.opacity = (time % 1.2) < 0.4 ? 1 : 0.2
    if (c.auto && !c.taken && d < c.auto && (!c.underground || player.underground)) collect(c)
  }
  // geysers at the south pole: dark jets that knock you back (gently)
  if (w.hazards.geysers) for (const g of w.hazards.geysers) {
    const cycle = (time + g.phase) % 14
    const erupting = cycle < 3
    if (erupting && !reduced) w.bursts.emit(g.x, w.terrainHeight(g.x, g.z), g.z, {count: 4, color: '#3a3030', speed: 9, up: 1.4, gravity: -3, life: 2.2, size: 0.4, grow: 0.6, spread: 0.15})
    const d = Math.hypot(player.x - g.x, player.z - g.z)
    if (erupting && d < 4 && player.mode === 'walk') {
      player.vy = 5
      player.x += (player.x - g.x) / (d || 1) * 0.3
      player.z += (player.z - g.z) / (d || 1) * 0.3
      player.grounded = false
    }
  }
  if (w.hazards.rockfall) {
    const rf = w.hazards.rockfall
    rf.timer -= dt
    if (rf.timer <= 0) {
      rf.timer = 10 + Math.random() * 10
      const x = player.x + (Math.random() - 0.5) * 40, side = Math.random() < 0.5 ? -1 : 1
      const z = side * 60
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(1 + Math.random(), 0), new THREE.MeshStandardMaterial({color: '#7a5a4e', flatShading: true}))
      rock.position.set(x, w.terrainHeight(x, z) + 2, z)
      w.scene.add(rock)
      rf.rocks.push({mesh: rock, vz: -side * 6, life: 10})
      hud.toast(lang === 'bn' ? '⚠️ পাথর গড়িয়ে পড়ছে!' : '⚠️ Rockfall!')
      audio.thump()
    }
    for (const r of rf.rocks) {
      r.life -= dt
      const p = r.mesh.position
      p.z += r.vz * dt
      const g = w.terrainHeight(p.x, p.z) + 1
      p.y = damp(p.y, g, 6, dt)
      r.mesh.rotation.x += r.vz * dt * 0.5
      if (!reduced && Math.random() < 0.3) w.bursts.emit(p.x, g - 0.8, p.z, {count: 1, color: '#b08068', speed: 1, life: 1.2, size: 0.4, grow: 0.5, gravity: -0.2})
      if (Math.hypot(player.x - p.x, player.z - p.z) < 1.8) { player.vy = 4; player.grounded = false; player.z += Math.sign(r.vz) * 0.6 }
      if (Math.abs(r.vz) > 0 && Math.abs(p.z) < 25) r.vz *= 0.97
    }
    rf.rocks = rf.rocks.filter(r => { if (r.life > 0) return true; w.scene.remove(r.mesh); return false })
  }
  if (player.mode !== 'drone' && w.drone) w.drone.pose(dt)
}
function hideIdleDrone() {
  if (world.drone) world.drone.model.root.visible = player.mode === 'drone'
}

function updateEffects(dt, reduced) {
  const w = world
  if (!dir || !w.home) return
  for (const e of dir.active) {
    const fx = activeFx.get(e.uid)
    if (!fx) continue
    if (e.id === 'supplyDrop' && fx.target) {
      const L = w.landing
      const tAge = time - fx.started
      const [x, z] = fx.target, gy = w.terrainHeight(x, z)
      if (!fx.landed) {
        const k = clamp(tAge / 10, 0, 1)
        L.group.visible = true
        L.group.position.set(x, gy + (1 - k) ** 2 * 140, z)
        L.flame.visible = true
        L.flame.scale.y = 0.8 + Math.random() * 0.4
        L.light.visible = true
        if (k > 0.85 && !reduced) w.bursts.emit(x, gy + 0.3, z, {count: 6, color: '#c48a64', speed: 7, up: 0.15, gravity: -0.5, life: 1.6, size: 0.6, grow: 0.8})
        if (k >= 1) { fx.landed = true; L.flame.visible = false; L.light.visible = false; audio.thump(); hud.toast('📦 ' + (lang === 'bn' ? 'রসদ নেমেছে!' : 'Supplies landed!')) }
        if (tAge < 0.1) audio.rocket()
      }
    }
    if (e.id === 'meteorite' && fx.target && !fx.landed) {
      const k = clamp((time - fx.started) / 3, 0, 1)
      fx.mesh ??= (() => { const m = glow('#ffd27a', 6, 1); w.scene.add(m); return m })()
      const [x, z] = fx.target, gy = w.terrainHeight(x, z)
      fx.mesh.position.set(lerp(fx.from[0], x, k), lerp(fx.from[1], gy + 0.5, k), lerp(fx.from[2], z, k))
      if (!reduced) w.bursts.emit(fx.mesh.position.x, fx.mesh.position.y, fx.mesh.position.z, {count: 3, color: '#ffb35a', speed: 0.5, life: 1, size: 0.5, gravity: 0})
      if (k >= 1) {
        fx.landed = true
        fx.mesh.scale.setScalar(1.6)
        audio.thump()
        w.bursts.emit(x, gy + 0.2, z, {count: 50, color: '#c48a64', speed: 8, up: 0.5, gravity: -2, life: 1.8, size: 0.5, grow: 0.6})
      }
    }
    if (e.id === 'meteorite' && fx.landed && fx.mesh) fx.mesh.material.opacity = 0.5 + Math.sin(time * 4) * 0.3
  }
  if (!dir.active.some(e => e.id === 'supplyDrop')) w.landing.group.visible = false
}

function hudGoal() {
  if (!dir) return null
  const w = world
  // the most important thing to go to: a problem to fix, else the next objective
  for (const e of dir.active) {
    const s = fixSpotFor(e)
    if (s) return s
  }
  if (!w.home) {
    let best = null
    for (const c of w.collectibles) {
      if (c.taken || (c.hidden && !c.revealed)) continue
      const d = Math.hypot(c.x - player.x, c.z - player.z)
      if (!best || d < best.d) best = {x: c.x, z: c.z, d}
    }
    if (best) return best
    if (w.objectives?.every(o => o.done)) return {x: w.site.spawn.x, z: w.site.spawn.z}
  }
  return null
}

function markerFor(goal) {
  if (!goal) return null
  const gy = world.groundAt(goal.x, goal.z, player.underground) + 1.6
  tmpV.set(goal.x, gy, goal.z).project(camera)
  const w = lastW, h = lastH
  const behind = tmpV.z > 1
  let x = (tmpV.x * 0.5 + 0.5) * w, y = (-tmpV.y * 0.5 + 0.5) * h
  if (behind) { x = w - x; y = h - 60 }
  // keep the arrow clear of the meters (top right) and the controls (bottom)
  const pad = 46, top = 175
  const edge = behind || x < pad || x > w - pad - 30 || y < top || y > h - pad - 110
  x = clamp(x, pad, w - pad - 30)
  y = clamp(y, top, h - pad - 110)
  const angle = edge ? Math.atan2(y - h / 2, x - w / 2) + Math.PI / 2 : Math.PI
  const d = Math.round(Math.hypot(goal.x - player.x, goal.z - player.z))
  return {x, y, angle, edge, label: d > 3 ? `${d} m` : ''}
}

function updateCamera(dt, inp, reduced) {
  const w = world
  let target, dist = player.dist, pitch = player.pitch, yaw = player.yaw
  if (player.mode === 'drive') { target = camTarget.set(player.x, player.y + 0.8, player.z); dist = Math.max(dist, 10); pitch = Math.max(pitch, 0.35) }
  else if (player.mode === 'drone') { const d = w.drone.state; target = camTarget.set(d.x, d.y, d.z); yaw = d.heading; dist = 7; pitch = 0.5 }
  else target = camTarget.set(player.x, player.y + 1.4, player.z)
  if (region) { dist = Math.min(dist, 7.5); pitch = Math.max(pitch, 0.85) }
  if (player.underground) { dist = Math.min(dist, 4.2); pitch = clamp(pitch, 0.1, 0.4) }
  const cp = Math.cos(pitch)
  camPos.set(target.x + Math.sin(yaw) * cp * dist, target.y + Math.sin(pitch) * dist, target.z + Math.cos(yaw) * cp * dist)
  // keep the camera out of walls when outside
  if (!region && !player.underground && w.collider) {
    const f = w.collider.raycast(target.x, target.z, camPos.x, camPos.z)
    if (f < 1) camPos.lerpVectors(target, camPos, Math.max(0.25, f - 0.05))
  }
  const ground = w.terrainHeight(camPos.x, camPos.z) + 0.6
  if (!player.underground) camPos.y = Math.max(camPos.y, ground)
  const blend = reduced ? 1 : 1 - Math.exp(-dt * 10)
  if (camera.position.lengthSq() === 0) camera.position.copy(camPos)
  camera.position.lerp(camPos, blend)
  camLook.lerp(target, blend)
  if (camLook.lengthSq() === 0) camLook.copy(target)
  camera.lookAt(camLook)
}

// --- photo mode ------------------------------------------------------------------------------
function startPhoto() {
  if (photo) return
  photo = {yaw: player.yaw, pitch: 0.3, dist: 6, bar: null}
  hud.hide(true)
  photo.bar = hud.photo(snap, postcard, () => { photo = null; hud.hide(false) })
}
function updatePhoto(dt, inp) {
  photo.yaw -= inp.look[0]
  photo.pitch = clamp(photo.pitch + inp.look[1], -0.2, 1.3)
  photo.dist = clamp(photo.dist + inp.zoom * 0.6, 2.5, 25)
  player.yaw = photo.yaw
  player.pitch = photo.pitch
  player.dist = photo.dist
  world.kitty.animate(dt, 0, player.y, 0, false)
}
function capture() {
  if (look) look.render(performance.now() / 1000)
  else renderer.render(world.scene, camera)
  return renderer.domElement.toDataURL('image/png')
}
function snap() {
  audio.shutter()
  hud.showPicture(capture())
}
function postcard() {
  const img = new Image()
  img.onload = () => {
    const c = document.createElement('canvas')
    c.width = img.width + 60
    c.height = img.height + 160
    const g = c.getContext('2d')
    g.fillStyle = '#fff6e8'
    g.fillRect(0, 0, c.width, c.height)
    g.drawImage(img, 30, 30)
    g.fillStyle = '#14233c'
    g.font = `bold ${Math.round(c.width / 28)}px system-ui`
    const name = (() => { try { return JSON.parse(localStorage.getItem('astro-kitty-online-v1') || '{}').player?.kitty_name } catch { return null } })()
    g.fillText(`${lang === 'bn' ? 'শুভেচ্ছা' : 'Greetings from'} ${SITES[world.site.id].name[lang]}!`, 40, img.height + 85)
    g.font = `${Math.round(c.width / 44)}px system-ui`
    g.fillStyle = '#6b5f73'
    g.fillText(`${name ? name + ' · ' : ''}${T('sol')} ${(save.sols ?? 0) + 1} · ${T('marsYear')} ${clockCache.marsYear} · Astro Kitty 🐱🚀`, 40, img.height + 130)
    hud.showPicture(c.toDataURL('image/png'))
  }
  img.src = capture()
}

// --- start --------------------------------------------------------------------------------------
await loadRealism(renderer, {quality: save.settings.quality})
buildWorld(save.site)
root.querySelector('.cx-loading')?.remove()
camera.position.set(player.x + 6, player.y + 5, player.z + 8)
hud.title(hasSave, startGame)
addEventListener('resize', () => resize())
requestAnimationFrame(t => { last = t; frame(t) })
canvas.addEventListener('pointerdown', () => audio.unlock(), {once: true})
// works offline after the first visit (same cache as the 3D adventure)
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js?v=10').catch(() => {})
// for automated checks
window.__colony = {
  get world() { return world }, player, audio, get save() { return save }, get director() { return dir },
  start: startGame, travel, buy,
  setHours(h) { gameHours = h },
  setQuality(q) { save.settings.quality = q; downgraded = true; applyQuality() }, trigger(id) { const e = director.start(dir, id, Math.random, {leakModules: ['greenhouse']}); e.phase = 'active'; eventStarted(e); return e },
  teleport(x, z) { player.x = x; player.z = z; player.y = world.groundAt(x, z) },
}
