// Ground for a site: shaped terrain with rock layers, scattered rocks and site details.
import * as THREE from 'three'
import {fbm, noise, rng, smooth, TAU} from './util.js'

function soilTexture(renderer, ice) {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const c = canvas.getContext('2d')
  const img = c.createImageData(size, size)
  const random = rng(1708)
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const a = x / size * TAU, b = y / size * TAU
    const ripple = Math.sin(a * 3 + b * 15 + 1.9 * Math.sin(a * 2 + b))
    const v = (ice ? 228 : 205) + Math.sin(a * 2 + 1.3 * Math.sin(b)) * Math.sin(b * 3 + a) * 12 + ripple * 8 + random() * 30
    img.data.set([v, v - (ice ? 2 : 6), v - (ice ? 0 : 11), 255], (x + y * size) * 4)
  }
  c.putImageData(img, 0, 0)
  for (let i = 0; i < 1400; i++) {
    const x = random() * size, y = random() * size, r = 0.3 + random() ** 5 * 2.4
    const s = Math.round(110 + random() * 80)
    c.fillStyle = `rgb(${s},${s - 6},${s - 10})`
    c.beginPath()
    c.ellipse(x, y, r * 1.4, r * 0.7, random() * TAU, 0, TAU)
    c.fill()
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())
  return tex
}

function rockGeometry(seed) {
  const random = rng(seed)
  const g = new THREE.IcosahedronGeometry(1, 1)
  const p = g.attributes.position, colors = []
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i)
    const f = 0.72 + 0.48 * noise(x * 4 + y * 6, z * 4 - y * 2, seed)
    p.setXYZ(i, x * f + y * 0.12, Math.max(y * f, -0.42), z * f)
    const s = 0.72 + 0.3 * noise(x * 2 + z, y * 6, seed + 2) + random() * 0.1
    colors.push(s, s, s)
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  g.computeVertexNormals()
  return g
}

// Distance from a point to a polyline path (for the darker driven-on trails).
function pathDistance(paths, x, z) {
  let best = Infinity
  for (const line of paths) for (let i = 1; i < line.length; i++) {
    const [ax, az] = line[i - 1], [bx, bz] = line[i]
    const ex = bx - ax, ez = bz - az, len2 = ex * ex + ez * ez
    const t = Math.max(0, Math.min(1, ((x - ax) * ex + (z - az) * ez) / len2))
    best = Math.min(best, Math.hypot(x - ax - ex * t, z - az - ez * t))
  }
  return best
}

export function makeGround(scene, renderer, site, height, {clear = [], paths = [], quality = 1, seed = 1} = {}) {
  const group = new THREE.Group()
  scene.add(group)
  const [dark, light, rockTone] = site.palette.map(c => new THREE.Color(c))
  const layers = ['gale', 'valles', 'olympus', 'southpole'].includes(site.id)
  const segments = Math.round(site.size / (quality > 1 ? 1.5 : 2.1))
  const geo = new THREE.PlaneGeometry(site.size, site.size, segments, segments).rotateX(-Math.PI / 2)
  const pos = geo.attributes.position, uv = geo.attributes.uv, colors = []
  const c = new THREE.Color(), band = new THREE.Color(), trail = dark.clone().lerp(light, 0.35)
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i), y = height(x, z)
    pos.setY(i, y)
    uv.setXY(i, x / 4, z / 4)
    const mott = 0.65 * noise(x / 11, z / 11, seed + 6) + 0.35 * noise(x / 1.7, z / 1.7, seed + 7)
    c.copy(dark).lerp(light, mott)
    const slope = Math.abs(height(x + 0.8, z) - height(x - 0.8, z)) + Math.abs(height(x, z + 0.8) - height(x, z - 0.8))
    c.lerp(rockTone, smooth(0.5, 1.8, slope) * 0.75)
    if (layers) {
      const stripe = 0.5 + 0.5 * Math.sin(y * 1.1 + noise(x / 30, z / 30, 9) * 2)
      band.copy(light).lerp(rockTone, 0.3).multiplyScalar(0.82 + stripe * 0.3)
      c.lerp(band, smooth(0.4, 1.4, slope) * 0.6)
    }
    if (site.id === 'gale') c.lerp(new THREE.Color('#3b302f'), Math.exp(-((Math.hypot(x - 70, z + 70) - 95) ** 2) / 260) * 0.75)
    if (paths.length) c.lerp(trail, (1 - smooth(1.4, 3.2, pathDistance(paths, x, z))) * 0.55)
    if (site.id === 'home') {
      // Polygon cracks in icy ground, seen from orbit all over the northern plains.
      const cell = Math.abs(Math.sin(x / 7 + Math.sin(z / 9))) * Math.abs(Math.sin(z / 7 + Math.cos(x / 11)))
      c.multiplyScalar(1 - (1 - smooth(0.02, 0.09, cell)) * 0.12)
    }
    colors.push(c.r, c.g, c.b)
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  geo.computeVertexNormals()
  const tex = soilTexture(renderer, !!site.ice)
  const ground = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({vertexColors: true, roughness: 0.96, map: tex, bumpMap: tex, bumpScale: 0.05}))
  ground.receiveShadow = true
  group.add(ground)

  // A wide low-detail skirt to the horizon.
  const far = new THREE.PlaneGeometry(site.size * 5, site.size * 5, 70, 70).rotateX(-Math.PI / 2)
  const fp = far.attributes.position, fc = []
  for (let i = 0; i < fp.count; i++) {
    const x = fp.getX(i), z = fp.getZ(i), inside = Math.max(Math.abs(x), Math.abs(z)) < site.size / 2 - 4
    const lift = fbm(x / 160, z / 160, seed + 3) * 18 + smooth(site.size * 0.6, site.size * 2.2, Math.hypot(x, z)) * 40
    fp.setY(i, inside ? height(x, z) - 3 : height(Math.max(-site.size / 2, Math.min(site.size / 2, x)), Math.max(-site.size / 2, Math.min(site.size / 2, z))) + lift * smooth(site.size / 2, site.size, Math.max(Math.abs(x), Math.abs(z))))
    c.copy(dark).lerp(light, 0.45 + noise(x / 60, z / 60, 4) * 0.3)
    fc.push(c.r, c.g, c.b)
  }
  far.setAttribute('color', new THREE.Float32BufferAttribute(fc, 3))
  far.computeVertexNormals()
  group.add(new THREE.Mesh(far, new THREE.MeshStandardMaterial({vertexColors: true, roughness: 1})))

  // Rocks
  const random = rng(seed + 4711)
  const rockMat = new THREE.MeshStandardMaterial({vertexColors: true, flatShading: true, roughness: 0.95})
  const blockers = []
  const tint = [dark, light, rockTone].map(t => t.clone().lerp(new THREE.Color('#ffffff'), 0.05))
  const dummy = new THREE.Object3D()
  const half = site.size / 2 - 6
  const count = Math.round((site.id === 'meridiani' ? 120 : 260) * (quality > 0 ? 1 : 0.5))
  for (let kind = 0; kind < 4; kind++) {
    const mesh = new THREE.InstancedMesh(rockGeometry(seed + kind * 97), rockMat, count)
    let n = 0
    for (let tries = 0; tries < count * 2 && n < count; tries++) {
      const x = (random() - 0.5) * 2 * half, z = (random() - 0.5) * 2 * half
      const r = 0.08 + random() ** 4 * (kind === 0 ? 2.4 : 0.9)
      if (clear.some(zone => Math.hypot(x - zone.x, z - zone.z) < zone.r + r)) continue
      if (site.cave && Math.hypot(x - site.cave.x, z - site.cave.z) < site.cave.r + 3) continue
      const h = r * (0.35 + random() * 0.6)
      dummy.position.set(x, height(x, z) + h * 0.2, z)
      dummy.rotation.set(random() * 0.5, random() * TAU, random() * 0.4)
      dummy.scale.set(r * (0.9 + random() * 0.5), h, r)
      dummy.updateMatrix()
      mesh.setMatrixAt(n, dummy.matrix)
      mesh.setColorAt(n, tint[Math.floor(random() * 3)])
      if (r > 0.7) blockers.push({x, z, r: r * 0.8})
      n++
    }
    mesh.count = n
    mesh.castShadow = kind === 0
    mesh.receiveShadow = true
    group.add(mesh)
  }

  const extras = {}
  if (site.id === 'meridiani') extras.blueberries = scatter(group, height, random, 700, 0.045, '#3c3a4a', clear, half)
  if (site.id === 'southpole') spiders(group, height, random, half)
  if (site.cave) extras.cave = makeCave(group, site.cave)
  return {group, ground, blockers, extras}
}

function scatter(group, height, random, count, size, color, clear, half) {
  const mesh = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 8, 6), new THREE.MeshStandardMaterial({color, roughness: 0.35, metalness: 0.3}), count)
  const d = new THREE.Object3D()
  let n = 0
  for (let i = 0; i < count * 2 && n < count; i++) {
    const x = (random() - 0.5) * 2 * half * 0.7, z = (random() - 0.5) * 2 * half * 0.7
    if (clear.some(zone => Math.hypot(x - zone.x, z - zone.z) < zone.r)) continue
    d.position.set(x, height(x, z) + size * 0.6, z)
    d.scale.setScalar(size * (0.7 + random() * 0.6))
    d.updateMatrix()
    mesh.setMatrixAt(n++, d.matrix)
  }
  mesh.count = n
  group.add(mesh)
  return mesh
}

// Dark radial "spider" marks carved by spring gas jets near the south pole.
function spiders(group, height, random, half) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 256
  const c = canvas.getContext('2d')
  c.strokeStyle = '#2d2626'
  c.lineCap = 'round'
  const branch = (x, y, a, len, w) => {
    if (len < 6 || w < 0.6) return
    const nx = x + Math.cos(a) * len, ny = y + Math.sin(a) * len
    c.lineWidth = w
    c.beginPath()
    c.moveTo(x, y)
    c.lineTo(nx, ny)
    c.stroke()
    branch(nx, ny, a + (random() - 0.5) * 0.9, len * 0.7, w * 0.7)
    if (random() < 0.6) branch(nx, ny, a + (random() - 0.5) * 1.8, len * 0.6, w * 0.6)
  }
  for (let i = 0; i < 9; i++) branch(128, 128, i / 9 * TAU + random() * 0.3, 34, 7)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  const mat = new THREE.MeshBasicMaterial({map: tex, transparent: true, opacity: 0.75, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3})
  for (let i = 0; i < 26; i++) {
    const x = (random() - 0.5) * 2 * half * 0.8, z = (random() - 0.5) * 2 * half * 0.8
    const s = 6 + random() * 9
    const m = new THREE.Mesh(new THREE.PlaneGeometry(s, s).rotateX(-Math.PI / 2), mat)
    m.position.set(x, height(x, z) + 0.06, z)
    m.rotation.y = random() * TAU
    group.add(m)
  }
}

// A lava tube cave under Arsia Mons: a tunnel you walk into from the bottom of the pit.
function makeCave(group, cave) {
  const points = []
  for (let i = 0; i <= 8; i++) {
    const t = i / 8, along = -4 + t * (cave.length + 4)
    const wobble = Math.sin(t * 5) * 2.5
    points.push(new THREE.Vector3(
      cave.x + Math.cos(cave.angle) * along - Math.sin(cave.angle) * wobble,
      -cave.depth + 2.6,
      cave.z + Math.sin(cave.angle) * along + Math.cos(cave.angle) * wobble))
  }
  const curve = new THREE.CatmullRomCurve3(points)
  const tube = new THREE.TubeGeometry(curve, 80, 6, 14, false)
  const p = tube.attributes.position
  for (let i = 0; i < p.count; i++) {
    const v = new THREE.Vector3().fromBufferAttribute(p, i)
    const n = noise(v.x / 2, v.z / 2 + v.y, 5) - 0.5
    p.setY(i, Math.max(v.y + n * 1.2, -cave.depth - 0.4))
  }
  tube.computeVertexNormals()
  const rock = new THREE.MeshStandardMaterial({color: '#4a3832', roughness: 1, side: THREE.BackSide})
  const mesh = new THREE.Mesh(tube, rock)
  mesh.receiveShadow = true
  group.add(mesh)
  // Glittering ice crystals at the far end (a game idea: some scientists think caves could hold ice).
  const end = curve.getPoint(1)
  const crystals = new THREE.Group()
  const ice = new THREE.MeshStandardMaterial({color: '#c9f3ff', emissive: '#5fd6ff', emissiveIntensity: 1.2, roughness: 0.15, transparent: true, opacity: 0.85})
  for (let i = 0; i < 9; i++) {
    const m = new THREE.Mesh(new THREE.ConeGeometry(0.25 + (i % 3) * 0.12, 1 + (i % 4) * 0.5, 5), ice)
    m.position.set(end.x + Math.sin(i * 2.1) * 1.8, -cave.depth + 0.5, end.z + Math.cos(i * 1.3) * 1.8)
    m.rotation.set(Math.sin(i) * 0.4, i, Math.cos(i) * 0.4)
    crystals.add(m)
  }
  const light = new THREE.PointLight('#7fe4ff', 6, 14, 1.6)
  light.position.set(end.x, -cave.depth + 2, end.z)
  crystals.add(light)
  group.add(crystals)
  return {mesh, curve, end, crystals}
}
