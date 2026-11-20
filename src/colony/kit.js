// Building kit: materials, canvas textures and a Builder that merges many small parts into
// one mesh per material (few draw calls = smooth on cheap phones).
import * as THREE from 'three'
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js'
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js'

const cache = new Map()
export function mat(key, make) {
  if (!cache.has(key)) cache.set(key, make())
  return cache.get(key)
}
const std = (color, rough = 0.62, metal = 0.12, extra = {}) =>
  new THREE.MeshStandardMaterial({color, roughness: rough, metalness: metal, ...extra})

export const M = {
  shell: () => mat('shell', () => std('#e9ded2', 0.5, 0.14)),
  shellShade: () => mat('shellShade', () => std('#c9bcae', 0.56, 0.16)),
  frame: () => mat('frame', () => std('#5c5562', 0.45, 0.35)),
  trim: () => mat('trim', () => std('#e3884c', 0.5, 0.1)),
  indigo: () => mat('indigo', () => std('#3f3e5a', 0.62, 0.15)),
  steel: () => mat('steel', () => std('#9aa0ad', 0.32, 0.72)),
  darkSteel: () => mat('darkSteel', () => std('#4a4e5c', 0.4, 0.6)),
  rubber: () => mat('rubber', () => std('#2c2a33', 0.9, 0)),
  floor: () => mat('floor', () => std('#6b7585', 0.7, 0.2, {map: gridTexture('#6b7585', '#5b6474')})),
  wallIn: () => mat('wallIn', () => std('#dcd7df', 0.7, 0.05)),
  wood: () => mat('wood', () => std('#b98b5e', 0.75, 0)),
  fabric: () => mat('fabric', () => std('#6b8fb5', 0.95, 0)),
  fabricWarm: () => mat('fabricWarm', () => std('#d97a6a', 0.95, 0)),
  soil: () => mat('soil', () => std('#4a3026', 0.98, 0)),
  regolith: () => mat('regolith', () => std('#a46e56', 0.97, 0, {map: bagTexture()})),
  hazard: () => mat('hazard', () => std('#ffffff', 0.6, 0.1, {map: hazardTexture()})),
  glass: () => mat('glass', () => new THREE.MeshStandardMaterial({
    color: '#cfe9ff', roughness: 0.08, metalness: 0.1, transparent: true, opacity: 0.18, depthWrite: false, side: THREE.DoubleSide,
  })),
  window: () => mat('window', () => std('#334a6e', 0.12, 0.5, {emissive: '#1d2f4d', emissiveIntensity: 0.35})),
  water: () => mat('water', () => new THREE.MeshStandardMaterial({
    color: '#5fb6e8', roughness: 0.1, metalness: 0.05, transparent: true, opacity: 0.62, emissive: '#1d5f88', emissiveIntensity: 0.35,
  })),
  lampWarm: () => mat('lampWarm', () => std('#ffe2b5', 0.4, 0, {emissive: '#ffcf8a', emissiveIntensity: 2.2})),
  lampCool: () => mat('lampCool', () => std('#c8fff4', 0.4, 0, {emissive: '#7ef4e0', emissiveIntensity: 2.0})),
  lampPink: () => mat('lampPink', () => std('#ffb3ef', 0.4, 0, {emissive: '#ff5fd2', emissiveIntensity: 2.6})),
  lampRed: () => mat('lampRed', () => std('#ff8a7a', 0.4, 0, {emissive: '#ff3b2f', emissiveIntensity: 2.4})),
  lampGreen: () => mat('lampGreen', () => std('#b6ffb0', 0.4, 0, {emissive: '#52e05c', emissiveIntensity: 2.2})),
  solarCell: () => mat('solarCell', () => std('#ffffff', 0.25, 0.55, {map: solarTexture()})),
  leaf: () => mat('leaf', () => std('#6fae5c', 0.8, 0)),
  leafDark: () => mat('leafDark', () => std('#3f7d45', 0.8, 0)),
  fruitRed: () => mat('fruitRed', () => std('#e2452f', 0.45, 0)),
  fruitYellow: () => mat('fruitYellow', () => std('#f4c542', 0.5, 0)),
  potato: () => mat('potato', () => std('#b98a55', 0.9, 0)),
  rice: () => mat('rice', () => std('#a8c95b', 0.85, 0)),
}

// --- canvas textures ------------------------------------------------------
function canvasTexture(w, h, draw, repeat = null) {
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  draw(canvas.getContext('2d'), w, h)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  if (repeat) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping
    tex.repeat.set(...repeat)
  }
  return tex
}
export function gridTexture(base, line) {
  return canvasTexture(128, 128, (c) => {
    c.fillStyle = base
    c.fillRect(0, 0, 128, 128)
    c.strokeStyle = line
    c.lineWidth = 3
    c.strokeRect(1.5, 1.5, 125, 125)
    c.fillStyle = line
    for (const [x, y] of [[10, 10], [118, 10], [10, 118], [118, 118]]) c.fillRect(x - 2, y - 2, 4, 4)
  }, [1, 1])
}
function bagTexture() {
  return canvasTexture(128, 64, (c) => {
    c.fillStyle = '#a46e56'
    c.fillRect(0, 0, 128, 64)
    for (let row = 0; row < 2; row++) {
      for (let i = -1; i < 3; i++) {
        const x = i * 50 + (row ? 25 : 0)
        c.fillStyle = row ? '#b47b60' : '#a8725a'
        c.beginPath()
        c.roundRect(x + 2, row * 32 + 2, 46, 28, 10)
        c.fill()
        c.strokeStyle = '#7b4c3b'
        c.lineWidth = 2
        c.stroke()
      }
    }
  }, [8, 1])
}
function hazardTexture() {
  return canvasTexture(64, 64, (c) => {
    c.fillStyle = '#f2b13a'
    c.fillRect(0, 0, 64, 64)
    c.fillStyle = '#2b2733'
    for (let i = -64; i < 64; i += 22) {
      c.beginPath()
      c.moveTo(i, 64)
      c.lineTo(i + 11, 64)
      c.lineTo(i + 75, 0)
      c.lineTo(i + 64, 0)
      c.fill()
    }
  }, [4, 1])
}
function solarTexture() {
  return canvasTexture(256, 128, (c) => {
    const g = c.createLinearGradient(0, 128, 256, 0)
    g.addColorStop(0, '#13204a')
    g.addColorStop(0.6, '#2b4280')
    g.addColorStop(1, '#5a5f99')
    c.fillStyle = '#c7c9d6'
    c.fillRect(0, 0, 256, 128)
    for (let x = 0; x < 8; x++) for (let y = 0; y < 4; y++) {
      c.fillStyle = g
      c.fillRect(x * 32 + 2, y * 32 + 2, 28, 28)
      c.fillStyle = '#ffffff22'
      c.fillRect(x * 32 + 2, y * 32 + 15, 28, 1)
    }
  })
}

// A sign with an icon and English + Bangla words.
export function signTexture(icon, en, bn, {bg = '#262b3d', fg = '#fff1d9', accent = '#e3884c'} = {}) {
  return canvasTexture(512, 160, (c, w, h) => {
    c.fillStyle = bg
    c.fillRect(0, 0, w, h)
    c.fillStyle = accent
    c.fillRect(0, h - 14, w, 14)
    c.font = '84px system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif'
    c.textBaseline = 'middle'
    c.fillText(icon, 22, 72)
    c.fillStyle = fg
    c.font = 'bold 54px system-ui, sans-serif'
    c.fillText(en, 132, 56)
    c.fillStyle = '#c8c3d4'
    c.font = '38px "Noto Sans Bengali", "Hind Siliguri", system-ui, sans-serif'
    c.fillText(bn, 134, 112)
  })
}
export function sign(icon, en, bn, width = 3.4, opts) {
  const tex = signTexture(icon, en, bn, opts)
  const m = new THREE.Mesh(new THREE.PlaneGeometry(width, width * 160 / 512),
    new THREE.MeshBasicMaterial({map: tex, toneMapped: false}))
  return m
}

// A screen whose picture can be redrawn (power flow, weather, gauges...).
export function screen(width, height, px = 256) {
  const canvas = document.createElement('canvas')
  canvas.width = px
  canvas.height = Math.round(px * height / width)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height),
    new THREE.MeshBasicMaterial({map: tex, toneMapped: false}))
  return {mesh, canvas, ctx: canvas.getContext('2d'), update() { tex.needsUpdate = true }}
}

// --- geometry builder -------------------------------------------------------
const unitBox = new THREE.BoxGeometry(1, 1, 1)
const unitRound = new RoundedBoxGeometry(1, 1, 1, 2, 0.12)
const cylinders = new Map()
const cylinder = (seg, top = 1, open = false) => {
  const key = `${seg}-${top}-${open}`
  if (!cylinders.has(key)) cylinders.set(key, new THREE.CylinderGeometry(top, 1, 1, seg, 1, open))
  return cylinders.get(key)
}
const unitSphere = new THREE.SphereGeometry(1, 20, 14)
const tmp = new THREE.Object3D()

export class Builder {
  constructor() { this.parts = new Map() }
  add(geometry, material, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0) {
    tmp.position.set(x, y, z)
    tmp.rotation.set(rx, ry, rz)
    tmp.scale.set(sx, sy, sz)
    tmp.updateMatrix()
    const g = geometry.clone().applyMatrix4(tmp.matrix)
    if (!this.parts.has(material)) this.parts.set(material, [])
    this.parts.get(material).push(g)
    return this
  }
  raw(geometry, material) {
    if (!this.parts.has(material)) this.parts.set(material, [])
    this.parts.get(material).push(geometry)
    return this
  }
  box(m, x, y, z, w, h, d, ry = 0, rx = 0, rz = 0) { return this.add(unitBox, m, x, y, z, w, h, d, rx, ry, rz) }
  round(m, x, y, z, w, h, d, ry = 0, rx = 0, rz = 0) { return this.add(unitRound, m, x, y, z, w, h, d, rx, ry, rz) }
  cyl(m, x, y, z, r, h, seg = 18, rx = 0, ry = 0, rz = 0, top = 1) { return this.add(cylinder(seg, top), m, x, y, z, r, h, r, rx, ry, rz) }
  ball(m, x, y, z, rx, ry = rx, rz = rx) { return this.add(unitSphere, m, x, y, z, rx, ry, rz) }
  build(parent, {shadows = true, receive = true} = {}) {
    const meshes = []
    for (const [material, list] of this.parts) {
      const merged = mergeGeometries(list.map(normalize))
      const mesh = new THREE.Mesh(merged, material)
      mesh.castShadow = shadows && !material.transparent
      mesh.receiveShadow = receive
      parent.add(mesh)
      meshes.push(mesh)
    }
    this.parts.clear()
    return meshes
  }
}
function normalize(g) {
  const out = g.index ? g.toNonIndexed() : g
  for (const name of Object.keys(out.attributes)) if (!['position', 'normal', 'uv'].includes(name)) out.deleteAttribute(name)
  if (!out.attributes.uv) out.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(out.attributes.position.count * 2), 2))
  return out
}

// A dome cap from the wall top to the top, as a separate mesh so it can fade away indoors.
export function domeCap(r, wallTop, top, material, segments = 48) {
  const g = new THREE.SphereGeometry(1, segments, 16, 0, Math.PI * 2, 0, Math.PI / 2)
  g.scale(r, top - wallTop, r)
  g.translate(0, wallTop, 0)
  return new THREE.Mesh(g, material)
}

// A soft round dot (for particles that would otherwise be squares).
let dotTex = null
export function dotTexture() {
  dotTex ??= canvasTexture(32, 32, (c) => {
    const g = c.createRadialGradient(16, 16, 0, 16, 16, 16)
    g.addColorStop(0, '#ffffffff')
    g.addColorStop(0.6, '#ffffff99')
    g.addColorStop(1, '#ffffff00')
    c.fillStyle = g
    c.fillRect(0, 0, 32, 32)
  })
  return dotTex
}
// A soft round glow sprite (for lamps and beacons).
let glowTex = null
export function glow(color, size = 1, opacity = 0.8) {
  glowTex ??= canvasTexture(64, 64, (c) => {
    const g = c.createRadialGradient(32, 32, 0, 32, 32, 32)
    g.addColorStop(0, '#ffffffff')
    g.addColorStop(0.3, '#ffffff88')
    g.addColorStop(1, '#ffffff00')
    c.fillStyle = g
    c.fillRect(0, 0, 64, 64)
  })
  const s = new THREE.Sprite(new THREE.SpriteMaterial({map: glowTex, color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending}))
  s.scale.setScalar(size)
  return s
}

// Materials that fade (roofs) must be unique per building.
export function fadeable(material) {
  const m = material.clone()
  m.transparent = true
  m.userData.fade = true
  return m
}
export function setFade(materials, amount) {
  for (const m of materials) {
    m.opacity = amount
    m.depthWrite = amount > 0.95
    m.visible = amount > 0.02
  }
}
