// Sounds of the base and the places you visit: real sound files (made by scripts/world/make-sounds.py),
// plus the shared UI sounds (dist/ui-sound.js) for wins and menus.
// Mars air is about 100 times thinner than Earth's, so outdoor sounds are soft and muffled.
const FILES = [
  'step-sand-1', 'step-sand-2', 'step-sand-3', 'step-sand-4', 'step-metal-1', 'step-metal-2', 'step-metal-3', 'step-metal-4',
  'airlock', 'door', 'alarm', 'pickup', 'spark', 'thump', 'rocket', 'shutter', 'build', 'console', 'drill', 'hiss',
  'wind-loop', 'hum-loop', 'water-loop', 'rover-loop', 'drone-loop',
]
const LOOPS = ['wind', 'hum', 'water', 'rover', 'drone']

export function makeAudio(base = new URL('./audio/world/', import.meta.url)) {
  let ctx = null, master = null, outdoor = null, enabled = true
  const buffers = new Map(), loops = {}
  let lastStep = -1
  const ui = (id, o) => { if (enabled) globalThis.astroSound?.play(id, o) }

  async function load(name) {
    try {
      const r = await fetch(new URL(`${name}.wav`, base))
      if (!r.ok) return
      buffers.set(name, await ctx.decodeAudioData(await r.arrayBuffer()))
      if (name.endsWith('-loop')) startLoop(name.slice(0, -5))
    } catch {}
  }
  function startLoop(kind) {
    const l = loops[kind]
    if (!l || l.source || !buffers.has(`${kind}-loop`)) return
    l.source = ctx.createBufferSource()
    l.source.buffer = buffers.get(`${kind}-loop`)
    l.source.loop = true
    l.source.connect(l.gain)
    l.source.start()
  }
  function unlock() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    ctx = new AC()
    master = ctx.createGain()
    master.gain.value = enabled ? 0.9 : 0
    master.connect(ctx.destination)
    // outside, sounds reach you through thin air and your helmet: duller and quieter
    outdoor = ctx.createBiquadFilter()
    outdoor.type = 'lowpass'
    outdoor.frequency.value = 2400
    outdoor.connect(master)
    for (const kind of LOOPS) {
      const gain = ctx.createGain()
      gain.gain.value = 0
      gain.connect(kind === 'wind' ? outdoor : master)
      loops[kind] = {gain, source: null}
    }
    for (const name of FILES) load(name)
  }
  function play(name, {volume = 1, rate = 1, out = false} = {}) {
    if (!ctx || !enabled) return
    const b = buffers.get(name)
    if (!b) return
    const s = ctx.createBufferSource(), g = ctx.createGain()
    s.buffer = b
    s.playbackRate.value = rate
    g.gain.value = volume
    s.connect(g).connect(out ? outdoor : master)
    s.start()
  }
  const fadeTo = (kind, value, time = 0.4) => { if (ctx && loops[kind]) loops[kind].gain.gain.setTargetAtTime(value, ctx.currentTime, time) }
  return {
    unlock,
    setEnabled(on) { enabled = on; if (master) master.gain.value = on ? 0.9 : 0 },
    get enabled() { return enabled },
    // indoors: 0..1, storm: 0..1, machine: 0..1 (how close to loud machines), wet: in the greenhouse
    ambience(indoors, storm, machine = 0, wet = 0) {
      if (!ctx) return
      fadeTo('wind', (0.35 + storm * 0.9) * (1 - indoors * 0.85))
      fadeTo('hum', indoors * (0.25 + machine * 0.5))
      fadeTo('water', wet * 0.5)
      if (outdoor) outdoor.frequency.setTargetAtTime(indoors ? 9000 : 2400, ctx.currentTime, 0.3)
    },
    // kind: 'rover' or 'drone'; amount 0 (off) .. 1 (full speed)
    vehicle(kind, amount) {
      if (!ctx || !loops[kind]) return
      fadeTo(kind, amount > 0.01 ? 0.18 + amount * 0.5 : 0, 0.15)
      if (loops[kind].source) loops[kind].source.playbackRate.setTargetAtTime(0.7 + amount * 0.6, ctx.currentTime, 0.2)
    },
    step(surface = 'sand') {
      let i = 1 + Math.floor(Math.random() * 4)
      if (i === lastStep) i = (i % 4) + 1
      lastStep = i
      if (surface === 'metal') play(`step-metal-${i}`, {volume: 0.5, rate: 0.95 + Math.random() * 0.1})
      else play(`step-sand-${i}`, {volume: 0.7, rate: 0.9 + Math.random() * 0.2, out: true})
    },
    click() { play('console', {volume: 0.7}) },
    console() { play('console', {volume: 0.7}) },
    success() { ui('success-warm-chime') },
    alarm() { play('alarm', {volume: 0.45}) },
    spark() { play('spark', {volume: 0.8}) },
    hiss() { play('hiss', {volume: 0.5}) },
    thump() { play('thump', {volume: 0.8, rate: 0.9 + Math.random() * 0.2}) },
    rocket() { play('rocket', {volume: 0.9, out: true}) },
    door() { play('door', {volume: 0.7}) },
    airlock() { play('airlock', {volume: 0.6}) },
    pickup() { play('pickup', {volume: 0.6}); ui('pop-bubble', {volume: 0.6}) },
    shutter() { play('shutter', {volume: 0.8}) },
    build() { play('build', {volume: 0.7}) },
    drill() { play('drill', {volume: 0.6, out: true}) },
  }
}
