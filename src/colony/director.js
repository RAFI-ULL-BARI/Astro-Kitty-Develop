// The mission director: surprise problems (and nice surprises) so no two sols are the same.
// It watches how the player is doing. Fixing things quickly makes it a little bolder;
// struggling makes it gentler. Problems are puzzles, never punishments: the crew is always safe.
import {rng, pickWeighted, clamp} from './util.js'

// fix.where: building (or outdoor spot) to go to. fix.how: the mini-game.
export const EVENTS = {
  dustStorm: {weight: c => (c.dustSeason ? 2.2 : 0.7), duration: 140, warn: 18, auto: true, fix: {where: 'solarFarm', how: 'scrub', after: true}},
  leak: {weight: () => 1.2, warn: 6, fix: {where: 'module', how: 'hold'}, problem: 'leak'},
  mold: {weight: c => (c.built.includes('greenhouse') ? 1 : 0), warn: 4, fix: {where: 'greenhouse', how: 'balance'}, problem: 'mold'},
  solarFlare: {weight: c => (c.realFlare ? 2.5 : 0.8), duration: 60, warn: 15, auto: true, fix: {where: 'hub', how: 'shelter'}},
  filterClog: {weight: () => 1, warn: 4, fix: {where: 'life', how: 'tap'}, problem: 'filterClog'},
  drillJam: {weight: () => 1, warn: 4, fix: {where: 'iceDrill', how: 'timing'}, problem: 'drillJam'},
  powerSurge: {weight: () => 0.9, warn: 3, fix: {where: 'power', how: 'sequence'}, problem: 'surge'},
  comms: {weight: () => 0.8, warn: 4, fix: {where: 'comms', how: 'align'}, problem: 'comms'},
  coldSnap: {weight: c => (c.night ? 1.4 : 0.1), duration: 90, warn: 8, auto: true, problem: 'coldSnap'},
  roverStuck: {weight: c => (c.site === 'home' ? 0.7 : 0), warn: 5, fix: {where: 'rover', how: 'hold'}, problem: 'rover'},
  // Nice surprises
  supplyDrop: {weight: () => 0.9, warn: 12, good: true, fix: {where: 'drop', how: 'fetch'}},
  dustDevilClean: {weight: c => (c.dust > 0.3 ? 1.2 : 0.2), warn: 0, good: true, auto: true, duration: 25},
  meteorite: {weight: () => 0.6, warn: 0, good: true, fix: {where: 'meteorite', how: 'hold'}},
}

export function newDirector(seed = 1) {
  return {seed, clock: 0, cooldown: 75, skill: 1, active: [], history: [], count: 0}
}

const BASE_COOLDOWN = 95
export function update(d, dt, context) {
  const random = rng(d.seed + d.count * 7919 + Math.floor(d.clock))
  d.clock += dt
  d.cooldown -= dt
  for (const e of d.active) {
    e.age += dt
    if (e.phase === 'warning' && e.age >= EVENTS[e.id].warn) { e.phase = 'active'; e.age = 0 }
    const spec = EVENTS[e.id]
    if (e.phase === 'active' && spec.auto && spec.duration && e.age >= spec.duration) {
      e.phase = spec.fix?.after ? 'cleanup' : 'done'
      e.age = 0
    }
  }
  const finished = d.active.filter(e => e.phase === 'done')
  d.active = d.active.filter(e => e.phase !== 'done')
  const room = d.active.filter(e => !EVENTS[e.id].good).length < (d.skill > 1.25 ? 2 : 1)
  let started = null
  if (d.cooldown <= 0 && room && !context.paused) {
    const recent = d.history.slice(-3)
    const id = pickWeighted(random, Object.keys(EVENTS), key => {
      const spec = EVENTS[key]
      if (d.active.some(e => e.id === key)) return 0
      if (recent.includes(key)) return spec.weight(context) * 0.15
      if (key === 'roverStuck' && context.site !== 'home') return 0
      if (spec.fix?.where && context.available && !context.available(spec.fix.where)) return 0
      return spec.weight(context) * (spec.good ? 1 : clamp(d.skill, 0.6, 1.6))
    })
    if (id) {
      started = start(d, id, random, context)
      d.cooldown = (BASE_COOLDOWN + random() * 60) / clamp(d.skill, 0.6, 1.6)
    } else d.cooldown = 20
  }
  return {started, finished}
}

export function start(d, id, random = Math.random, context = {}) {
  const spec = EVENTS[id]
  const e = {id, uid: ++d.count, phase: spec.warn > 0 ? 'warning' : 'active', age: 0, seed: Math.floor(random() * 1e9)}
  if (id === 'leak') e.module = pickFrom(random, context.leakModules ?? ['hub'])
  if (id === 'solarFlare' && context.realFlare) e.real = context.realFlare
  d.active.push(e)
  d.history.push(id)
  if (d.history.length > 20) d.history.shift()
  return e
}
const pickFrom = (random, list) => list[Math.floor(random() * list.length)]

// Called when the player fixes something. Fast fixes make the director a little bolder.
export function resolve(d, uid, seconds) {
  const e = d.active.find(x => x.uid === uid)
  if (!e) return null
  e.phase = 'done'
  const quick = seconds < 45, slow = seconds > 120
  d.skill = clamp(d.skill + (quick ? 0.08 : slow ? -0.12 : 0.02), 0.6, 1.6)
  d.active = d.active.filter(x => x.uid !== uid)
  return e
}

// Problems switched on right now, for the life-support simulation.
export function problems(d) {
  const p = {}
  for (const e of d.active) {
    if (e.phase !== 'active') continue
    const spec = EVENTS[e.id]
    if (spec.problem) p[spec.problem] = true
  }
  return p
}
export const stormLevel = d => {
  const e = d.active.find(x => x.id === 'dustStorm')
  if (!e) return 0
  if (e.phase === 'warning') return Math.min(0.3, e.age / EVENTS.dustStorm.warn * 0.3)
  if (e.phase === 'active') return Math.min(1, 0.3 + e.age / 20)
  return 0
}
