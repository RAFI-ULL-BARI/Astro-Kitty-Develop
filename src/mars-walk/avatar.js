// The kitty the player picked on the home screen (Mishti, Megh, Neel or Tara), for the 3D worlds.
// Colours match AVATARS in dist/art.js (a test checks they stay the same).
export const AVATARS = {
  mishti: {name: 'Mishti', ear: '#e2a982', face: '#efbb95', inner: '#ba8183', suit: '#b6a3e6'},
  megh: {name: 'Megh', ear: '#efe3d2', face: '#fbf4ea', inner: '#e3a9a4', suit: '#f2b36b'},
  neel: {name: 'Neel', ear: '#7f93b8', face: '#aebbd6', inner: '#d7a3ad', suit: '#5fb0e8'},
  tara: {name: 'Tara', ear: '#6f5763', face: '#8f727c', inner: '#c98f96', suit: '#f09ab0'},
}
export const AVATAR_KEY = 'astro-kitty-avatar'

export function chosenAvatar(storage = globalThis.localStorage) {
  try {
    const id = storage?.getItem(AVATAR_KEY)
    return Object.hasOwn(AVATARS, id ?? '') ? id : 'mishti'
  } catch {
    return 'mishti'
  }
}

const shade = (hex, f) => {
  const n = parseInt(hex.slice(1), 16)
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(v => Math.max(0, Math.min(255, Math.round(v * f))))
  return '#' + c.map(v => v.toString(16).padStart(2, '0')).join('')
}

// Options for makeKitty(): fur, face (cream), inner ears, darker stripes, and the suit accent colour.
export function kittyLook(id) {
  const a = AVATARS[id] ?? AVATARS.mishti
  return {name: a.name, fur: a.ear, cream: a.face, inner: a.inner, stripe: shade(a.ear, 0.72), nose: shade(a.inner, 0.85), trim: a.suit}
}

// The other three kitties, for the crew (never two of the same kitty).
export function crewAvatars(playerId) {
  return Object.keys(AVATARS).filter(id => id !== playerId)
}
