// Mars base life support, kept simple enough for kids to read on the screen:
// four tanks (power, water, oxygen, food) from 0 to 100, filled by machines and used by the crew.
// Rates are "per game hour". One sol is 24.6 game hours.
import {clamp} from './util.js'

export const TANKS = ['power', 'water', 'oxygen', 'food']

export function newBase() {
  return {
    tanks: {power: 80, water: 75, oxygen: 85, food: 70},
    stuff: {metal: 4, ice: 2, science: 0, samples: 0},
    dust: 0.15,        // dust on the solar panels, 0..1
    crops: 0.35,       // how grown the greenhouse plants are, 0..1
    crew: 4,
    emergency: false,
    built: [],
    breakers: true,    // false after a power surge until someone resets them
    stats: {harvests: 0, fixes: 0, sols: 0},
  }
}

// What each machine does this hour. `world` describes the sky and any problems.
export function rates(base, world) {
  const has = id => base.built.includes(id)
  const sun = Math.max(0, Math.sin(world.sunElevation))
  const panels = 30 + (has('solar2') ? 10 : 0)
  const storm = world.storm ?? 0
  const powerOn = base.breakers && base.tanks.power > 0.5
  const p = world.problems ?? {}
  const solar = panels * 1.25 * sun * (1 - base.dust * 0.85) * (1 - storm * 0.8)
  const reactor = has('reactor') ? 4.5 : 0
  const heaters = world.night ? 3.2 + (p.coldSnap ? 2.5 : 0) : 1.2
  const lights = 2.4 + (has('greenhouse2') ? 0.8 : 0) + (has('observatory') ? 0.4 : 0)
  const machines = powerOn ? 2.8 : 0
  const iceIn = powerOn && !p.drillJam ? 1.6 : 0
  const waterMade = powerOn && !p.filterClog ? Math.min(iceIn * 1.4, 2.6) : 0
  const oxygenMade = powerOn && base.tanks.water > 2 ? 2.3 : 0
  const farm = 1 + (has('greenhouse2') ? 0.7 : 0)
  const growing = powerOn && base.tanks.water > 2 && !p.mold
  return {
    power: solar + reactor - heaters - lights - machines,
    water: waterMade - 0.55 * base.crew * 0.25 - (oxygenMade ? 0.5 : 0) - (growing ? 0.35 * farm : 0),
    oxygen: oxygenMade - 0.62 * base.crew * 0.25 - (p.leak ? 3.2 : 0) * (base.emergency ? 0.4 : 1),
    food: -0.42 * base.crew * 0.25 + (growing ? 0.25 * farm * base.crops : 0),
    crops: growing ? 0.018 * farm : -0.004,
    dust: storm > 0.2 ? 0.02 * storm : 0.0015,
    solar, reactor,
  }
}

const BATTERY_SIZE = 260 // game units per 100%
export function tick(base, world, hours) {
  const r = rates(base, world)
  const battery = base.built.includes('batteries') ? 1.6 : 1
  const scale = {power: 100 / (BATTERY_SIZE * battery), water: 2.2, oxygen: 2.4, food: 1.8}
  for (const k of TANKS) base.tanks[k] = clamp(base.tanks[k] + r[k] * scale[k] * hours, 0, 100)
  base.crops = clamp(base.crops + r.crops * hours, 0, 1)
  base.dust = clamp(base.dust + r.dust * hours, 0, 1)
  // If anything runs out the crew goes to the safe room and uses less. Nobody is ever hurt.
  const low = TANKS.some(k => base.tanks[k] <= 0.5)
  if (low) base.emergency = true
  else if (base.emergency && TANKS.every(k => base.tanks[k] > 15)) base.emergency = false
  return r
}

export function canAfford(base, cost) {
  return ['metal', 'ice', 'science'].every(k => (base.stuff[k] ?? 0) >= (cost[k] ?? 0))
}
export function pay(base, cost) {
  for (const k of ['metal', 'ice', 'science']) base.stuff[k] -= cost[k] ?? 0
}

export function harvest(base) {
  if (base.crops < 0.8) return 0
  const food = Math.round(18 + 22 * base.crops)
  base.tanks.food = clamp(base.tanks.food + food, 0, 100)
  base.crops = 0.25
  base.stats.harvests++
  return food
}

// The most urgent tank, for Dhrubo's hints.
export function lowest(base) {
  return TANKS.reduce((a, b) => (base.tanks[a] <= base.tanks[b] ? a : b))
}
