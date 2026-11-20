// Small maths helpers shared by the colony game. No three.js here, so tests can import it.
export const TAU = Math.PI * 2
export const DEG = Math.PI / 180
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
export const lerp = (a, b, t) => a + (b - a) * t
export const smooth = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1)
  return t * t * (3 - 2 * t)
}
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt))
export const angleDiff = (a, b) => Math.atan2(Math.sin(b - a), Math.cos(b - a))
export const dampAngle = (a, b, lambda, dt) => a + angleDiff(a, b) * (1 - Math.exp(-lambda * dt))

// Seeded random numbers, so a site or an event plan is the same when replayed.
export function rng(seed) {
  let s = (seed >>> 0) || 1
  return () => {
    s = (Math.imul(1664525, s) + 1013904223) >>> 0
    return s / 4294967296
  }
}
export function hashString(text) {
  let h = 2166136261
  for (const c of String(text)) {
    h ^= c.codePointAt(0)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}
export const pickWeighted = (random, items, weight) => {
  const weights = items.map(weight)
  let total = weights.reduce((a, b) => a + b, 0)
  if (total <= 0) return null
  let r = random() * total
  for (let i = 0; i < items.length; i++) {
    r -= weights[i]
    if (r <= 0) return items[i]
  }
  return items[items.length - 1]
}

function hash2(x, y, seed) {
  let n = Math.imul(x, 1402946737) ^ Math.imul(y, 1597334677) ^ seed
  n = Math.imul(n ^ (n >>> 16), 0x7feb352d)
  return ((n ^ (n >>> 15)) >>> 0) / 4294967295
}
export function noise(x, z, seed = 0) {
  const a = Math.floor(x), b = Math.floor(z)
  const u = x - a, v = z - b
  const i = u * u * (3 - 2 * u), j = v * v * (3 - 2 * v)
  return lerp(lerp(hash2(a, b, seed), hash2(a + 1, b, seed), i),
    lerp(hash2(a, b + 1, seed), hash2(a + 1, b + 1, seed), i), j)
}
// Fractal noise in about -1..1
export function fbm(x, z, seed = 0, octaves = 4) {
  let sum = 0, amp = 0.5, freq = 1, norm = 0
  for (let i = 0; i < octaves; i++) {
    sum += amp * (noise(x * freq, z * freq, seed + i * 131) * 2 - 1)
    norm += amp
    freq *= 2.03
    amp *= 0.5
  }
  return sum / norm
}
// Ridged noise for sharp crests, 0..1
export function ridged(x, z, seed = 0, octaves = 4) {
  let sum = 0, amp = 0.5, freq = 1, norm = 0
  for (let i = 0; i < octaves; i++) {
    const n = 1 - Math.abs(noise(x * freq, z * freq, seed + i * 71) * 2 - 1)
    sum += amp * n * n
    norm += amp
    freq *= 2.1
    amp *= 0.5
  }
  return sum / norm
}
export const formatNumber = n => Math.round(n).toLocaleString('en-US')
