import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js'

export const ENTRY = {x: -2.5, z: -8.7}
export const SAMPLE = {x: 3.7, z: 4.2}
export const SOLAR = {x: 8.4, z: -7.1}
export const OUTPOST_Z = -22
const round = new RoundedBoxGeometry(1, 1, 1, 2, 0.13)
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const cylinder = new THREE.CylinderGeometry(1, 1, 1, 18)
const ring = new THREE.TorusGeometry(1, 0.038, 8, 32)
const material = (color, extra = {}) => new THREE.MeshStandardMaterial({color, roughness: 0.67, ...extra})

function piece(group, geometry, paint, x, y, z, w, h, d) {
  const mesh = new THREE.Mesh(geometry, paint)
  mesh.position.set(x, y, z)
  mesh.scale.set(w, h, d)
  mesh.castShadow = true
  mesh.receiveShadow = true
  group.add(mesh)
  return mesh
}

function panelGraphic() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 128
  const c = canvas.getContext('2d')
  c.fillStyle = '#262b3b'
  c.fillRect(0, 0, 512, 128)
  c.fillStyle = '#e69460'
  c.fillRect(0, 117, 512, 11)
  c.beginPath()
  c.ellipse(56, 71, 15, 12, 0, 0, Math.PI * 2)
  for (const [x, y] of [[35, 52], [48, 41], [64, 41], [77, 52]]) {
    c.moveTo(x + 5, y)
    c.ellipse(x, y, 5, 7, 0, 0, Math.PI * 2)
  }
  c.fill()
  c.fillStyle = '#fff1d7'
  c.font = 'bold 31px system-ui'
  c.fillText('NATIONAL KITTY', 96, 55)
  c.fillStyle = '#d0cad3'
  c.font = 'bold 22px system-ui'
  c.fillText('SPACE CENTER', 97, 89)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function solarGraphic() {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 128
  const c = canvas.getContext('2d')
  c.fillStyle = '#68707a'
  c.fillRect(0, 0, 256, 128)
  const gradient = c.createLinearGradient(0, 128, 256, 10)
  gradient.addColorStop(0, '#141c36')
  gradient.addColorStop(0.59, '#2d3c62')
  gradient.addColorStop(1, '#4e4868')
  for (let x = 0; x < 12; x++) {
    for (let y = 0; y < 6; y++) {
      c.fillStyle = gradient
      c.fillRect(x * 21 + 3, y * 20 + 4, 19, 18)
      c.fillStyle = '#a3a4c044'
      c.fillRect(x * 21 + 3, y * 20 + 12, 19, 1)
    }
  }
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

const beaconMaterial = new THREE.MeshBasicMaterial({color: '#ffe5ae', transparent: true, opacity: 0.9})
function beacon(scene, x, y, z) {
  const marker = new THREE.Mesh(ring, beaconMaterial.clone())
  marker.position.set(x, y, z)
  marker.rotation.x = -Math.PI / 2
  marker.scale.setScalar(0.73)
  scene.add(marker)
  return marker
}

export function makeOutpost(scene, height) {
  const shell = material('#d5c7b4', {metalness: 0.22})
  const frame = material('#5d5660', {metalness: 0.22})
  const under = material('#333341', {metalness: 0.18})
  const trim = material('#db884d')
  const blue = material('#667888', {metalness: 0.18})
  const skyLamp = material('#b9ece3', {emissive: '#61aeaa', emissiveIntensity: 1.6})
  const warmLamp = material('#ffce90', {emissive: '#e19347', emissiveIntensity: 0.90})
  const box = (group, paint, ...shape) => piece(group, boxGeometry, paint, ...shape)
  const rounded = (group, paint, ...shape) => piece(group, round, paint, ...shape)
  const pipe = (group, paint, ...shape) => piece(group, cylinder, paint, ...shape)

  const airlock = new THREE.Group()
  airlock.position.set(ENTRY.x, height(ENTRY.x, ENTRY.z), ENTRY.z)
  scene.add(airlock)
  rounded(airlock, frame, 0, 0.09, -1.63, 4.72, 0.36, 5.24)
  box(airlock, under, 0, 0.235, -1.8, 3.88, 0.08, 4.42)
  for (let i = 0; i < 10; i++) box(airlock, frame, 0, 0.28, 0.39 - i * 0.46, 3.18, 0.012, 0.04)
  for (const side of [-1, 1]) {
    rounded(airlock, shell, side * 1.86, 1.70, -1.68, 0.48, 3.30, 4.56)
    box(airlock, blue, side * 1.605, 1.6, -1.65, 0.055, 2.55, 3.76)
    for (const z of [0.26, -1.75, -3.56]) {
      rounded(airlock, frame, side * 2.11, 1.44, z, 0.115, 2.72, 0.18)
      box(airlock, trim, side * 2.17, 0.74, z, 0.027, 0.46, 0.19)
    }
    rounded(airlock, frame, side * 1.57, 1.73, 0.51, 0.42, 3.10, 0.26)
    box(airlock, trim, side * 1.51, 1.82, 0.657, 0.23, 2.82, 0.022)
    box(airlock, warmLamp, side * 0.81, 2.86, -1.54, 0.105, 0.05, 3.54)
    box(airlock, skyLamp, side * 1.70, 2.74, 0.663, 0.075, 0.31, 0.028)
  }
  rounded(airlock, shell, 0, 3.16, -1.72, 4.18, 0.45, 4.83)
  const signMaterial = new THREE.MeshBasicMaterial({
    map: panelGraphic(), color: '#f4e1d6', toneMapped: false,
  })
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.52, 0.88), signMaterial)
  sign.position.set(0, 3.08, 0.714)
  airlock.add(sign)
  box(airlock, frame, 0, 1.64, -3.93, 3.77, 3.17, 0.22)
  rounded(airlock, under, 0, 1.52, -3.79, 1.8, 2.60, 0.15)
  box(airlock, warmLamp, 0, 2.76, -3.68, 0.71, 0.075, 0.035)
  rounded(airlock, frame, 0, 1.27, -6.1, 4.2, 2.8, 4.3)

  const doors = []
  for (const side of [-1, 1]) {
    const door = new THREE.Group()
    door.position.set(side * 0.68, 1.56, 0.38)
    rounded(door, shell, 0, 0, 0, 1.37, 2.72, 0.18)
    rounded(door, under, 0, 0.46, 0.096, 0.64, 0.43, 0.055)
    rounded(door, blue, 0, 0.46, 0.130, 0.53, 0.31, 0.022)
    box(door, frame, side * -0.45, -0.16, 0.105, 0.11, 0.28, 0.06)
    box(door, trim, 0, -0.78, 0.10, 1.18, 0.085, 0.018)
    airlock.add(door)
    doors.push({door, side})
  }

  const bollard = new THREE.Group()
  bollard.position.set(ENTRY.x + 2.28, height(ENTRY.x + 2.28, ENTRY.z + 0.54), ENTRY.z + 0.54)
  scene.add(bollard)
  rounded(bollard, frame, 0, 0.64, 0, 0.32, 1.28, 0.30)
  rounded(bollard, trim, 0, 1.14, 0, 0.44, 0.31, 0.31)
  box(bollard, skyLamp, 0, 1.17, 0.16, 0.26, 0.12, 0.035)
  for (const x of [-1.24, 1.24]) {
    for (const z of [1.45, 3.6, 5.6]) {
      const light = new THREE.Group()
      light.position.set(ENTRY.x + x, height(ENTRY.x + x, ENTRY.z + z), ENTRY.z + z)
      box(light, frame, 0, 0.065, 0, 0.22, 0.13, 0.37)
      box(light, warmLamp, 0, 0.138, 0, 0.15, 0.025, 0.28)
      scene.add(light)
    }
  }

  const habitat = new THREE.Group()
  habitat.position.set(ENTRY.x, height(ENTRY.x, OUTPOST_Z) - 0.35, OUTPOST_Z)
  scene.add(habitat)
  const fallback = pipe(habitat, shell, 0, 2.10, 0, 4.85, 10.9, 3.75)
  fallback.rotation.z = Math.PI / 2
  const loaded = new GLTFLoader().loadAsync(new URL('./assets/mars-walk/habitat.glb', import.meta.url).href)
    .then(model => {
      habitat.remove(fallback)
      model.scene.traverse(node => {
        if (node.isMesh) {
          node.castShadow = true
          node.receiveShadow = true
        }
      })
      habitat.add(model.scene)
      return true
    })
    .catch(() => false)

  const lab = new THREE.Group()
  lab.position.set(-8.65, height(-8.65, -13.05), -13.05)
  scene.add(lab)
  const labPaint = material('#d9ccbc', {metalness: 0.14, roughness: 0.6})
  const joint = material('#a99a91', {metalness: 0.18})
  const glass = material('#556a8b', {metalness: 0.42, roughness: 0.25, emissive: '#3e4b67', emissiveIntensity: 0.25})
  pipe(lab, labPaint, 0, 1.98, 0, 1.48, 7.35, 1.48).rotation.z = Math.PI / 2
  pipe(lab, frame, -3.69, 1.98, 0, 1.39, 0.20, 1.39).rotation.z = Math.PI / 2
  pipe(lab, shell, -3.84, 1.98, 0, 1.20, 0.19, 1.20).rotation.z = Math.PI / 2
  pipe(lab, frame, 3.59, 1.98, 0, 1.49, 0.21, 1.49).rotation.z = Math.PI / 2
  pipe(lab, trim, 3.19, 1.98, 0, 1.493, 0.105, 1.493).rotation.z = Math.PI / 2
  pipe(lab, frame, 4.1, 1.80, 0.32, 1.03, 1.32, 1.03).rotation.z = Math.PI / 2
  for (const x of [-2.94, -0.98, 0.98, 2.64]) {
    pipe(lab, joint, x, 1.98, 0, 1.491, 0.043, 1.491).rotation.z = Math.PI / 2
    const viewport = rounded(lab, frame, x + 0.43, 2.08, 1.475, 0.70, 0.45, 0.115)
    viewport.rotation.x = -0.04
    rounded(lab, glass, x + 0.43, 2.09, 1.546, 0.57, 0.32, 0.034)
    box(lab, skyLamp, x + 0.43, 1.77, 1.472, 0.065, 0.035, 0.03)
  }
  for (const side of [-1, 1]) {
    for (const x of [-2.73, 2.58]) {
      rounded(lab, under, x, 0.055, side * 1.04, 0.88, 0.22, 0.64)
      const leg = box(lab, shell, x, 0.50, side * 0.97, 0.26, 0.86, 0.25)
      leg.rotation.x = side * 0.45
      box(lab, trim, x, 0.20, side * 1.22, 0.40, 0.08, 0.035)
    }
  }
  rounded(lab, frame, -0.65, 3.45, 0, 2.28, 0.15, 0.67)
  for (const x of [-1.4, -0.92, 0.10]) {
    rounded(lab, blue, x, 3.60, 0, 0.32, 0.23, 0.52)
    box(lab, frame, x, 3.73, 0, 0.14, 0.035, 0.44)
  }
  const solarMaterial = material('#e1dbdf', {metalness: 0.30, roughness: 0.46, map: solarGraphic()})
  const racks = []
  for (const [x, z] of [[8.6, -12.1], [16.1, -16.3], [11.2, -21.1]]) {
    const array = new THREE.Group()
    array.position.set(x, height(x, z), z)
    array.rotation.y = -0.32
    scene.add(array)
    for (const side of [-1, 1]) {
      rounded(array, under, side * 1.45, 0.10, 0, 0.65, 0.27, 1.19)
      box(array, frame, side * 1.45, 0.77, 0, 0.19, 1.39, 0.22)
      const brace = box(array, frame, side * 1.45, 0.65, 0.33, 0.11, 1.16, 0.13)
      brace.rotation.x = -0.55
    }
    const rack = new THREE.Group()
    rack.position.y = 1.53
    rack.rotation.x = 0.43
    box(rack, frame, 0, 0, 0, 6.65, 0.15, 2.78)
    for (const side of [-1, 1]) {
      const cells = new THREE.Mesh(new THREE.PlaneGeometry(3.24, 2.69), solarMaterial)
      cells.rotation.x = -Math.PI / 2
      cells.position.set(side * 1.65, 0.085, 0)
      cells.receiveShadow = true
      rack.add(cells)
      box(rack, shell, side * 3.27, 0.051, 0, 0.044, 0.072, 2.77)
    }
    array.add(rack)
    racks.push(rack)
  }

  const console = new THREE.Group()
  console.position.set(SOLAR.x, height(SOLAR.x, SOLAR.z), SOLAR.z)
  scene.add(console)
  rounded(console, frame, 0, 0.17, 0, 1.2, 0.40, 0.75)
  rounded(console, shell, 0, 0.69, 0, 0.85, 0.89, 0.69)
  box(console, trim, 0, 0.40, 0.354, 0.77, 0.095, 0.028)
  rounded(console, under, 0, 0.94, 0.36, 0.63, 0.225, 0.064)
  const powerMeter = box(console, skyLamp, -0.016, 0.94, 0.403, 0.49, 0.068, 0.021)
  const dish = new THREE.Group()
  dish.position.set(-13.2, height(-13.2, -12.3), -12.3)
  scene.add(dish)
  pipe(dish, under, 0, 0.14, 0, 0.98, 0.27, 0.83)
  pipe(dish, shell, 0, 1.67, 0, 0.18, 3.3, 0.18)
  rounded(dish, trim, 0, 1.13, 0.065, 0.56, 0.77, 0.47)
  const dishTop = new THREE.Group()
  dishTop.position.set(0, 3.25, 0)
  dish.add(dishTop)
  const bowl = piece(dishTop, new THREE.SphereGeometry(1, 24, 12, 0, Math.PI * 2, Math.PI / 2, 1.04),
    material('#beb4ab', {side: THREE.DoubleSide, metalness: 0.27}), 0, 0, 0, 1.15, 0.55, 1.15)
  bowl.rotation.x = 0.32
  pipe(dishTop, frame, 0, 0.21, 0.12, 0.034, 0.81, 0.034).rotation.x = 0.28
  piece(dishTop, new THREE.SphereGeometry(1, 14, 8), warmLamp, 0, 0.62, 0.21, 0.085, 0.085, 0.085)

  const specimenGeometry = new THREE.DodecahedronGeometry(1, 0)
  const specimenMaterial = material('#ad765d', {flatShading: true})
  const specimen = piece(scene, specimenGeometry, specimenMaterial,
    SAMPLE.x, height(SAMPLE.x, SAMPLE.z) + 0.25, SAMPLE.z, 0.54, 0.41, 0.42)
  specimen.rotation.set(0.31, 0.90, 0.22)
  for (const [x, z, scale] of [[-0.75, -0.16, 0.22], [0.36, -0.49, 0.19], [0.87, 0.28, 0.16]]) {
    piece(scene, specimenGeometry, specimenMaterial, SAMPLE.x + x,
      height(SAMPLE.x + x, SAMPLE.z + z) + 0.05, SAMPLE.z + z, scale, scale * 0.46, scale * 0.80)
  }

  const markers = {
    sample: beacon(scene, SAMPLE.x, height(SAMPLE.x, SAMPLE.z) + 0.06, SAMPLE.z),
    solar: beacon(scene, SOLAR.x, height(SOLAR.x, SOLAR.z + 1.4) + 0.065, SOLAR.z + 1.4),
    enter: beacon(scene, ENTRY.x, height(ENTRY.x, ENTRY.z + 1.65) + 0.064, ENTRY.z + 1.65),
  }

  const blocker = (x, z, w, d) => ({x, z, w, d})
  const blockers = [
    blocker(ENTRY.x, OUTPOST_Z, 8.7, 8.8),
    blocker(-8.65, -13.05, 3.88, 1.44),
    blocker(ENTRY.x, ENTRY.z - 4.46, 2.12, 1.15),
    blocker(ENTRY.x - 1.87, ENTRY.z - 1.66, 0.25, 2.22),
    blocker(ENTRY.x + 1.87, ENTRY.z - 1.66, 0.25, 2.22),
    blocker(bollard.position.x, bollard.position.z, 0.22, 0.20),
    blocker(SOLAR.x, SOLAR.z, 0.55, 0.38),
    blocker(8.6, -12.1, 3.35, 1.36),
    blocker(16.1, -16.3, 3.35, 1.36),
    blocker(11.2, -21.1, 3.35, 1.36),
    blocker(-13.2, -12.3, 0.94, 0.77),
  ]
  const doorBlocker = blocker(ENTRY.x, ENTRY.z + 0.53, 1.60, 0.16)

  return {
    loaded, blockers, doorBlocker,
    animate(elapsed, doorAmount, stormAmount, sampleAmount, scanAmount, target, reduced) {
      const opening = THREE.MathUtils.smoothstep(doorAmount, 0, 1)
      const markerZ = ENTRY.z + THREE.MathUtils.lerp(1.65, -1.8, opening)
      markers.enter.position.z = markerZ
      markers.enter.position.y = markerZ < ENTRY.z + 0.4 ? airlock.position.y + 0.296 : height(ENTRY.x, markerZ) + 0.066
      for (const {door, side} of doors) door.position.x = side * (0.68 + 1.30 * opening)
      const skim = THREE.MathUtils.smoothstep(sampleAmount, 0.15, 1)
      specimen.position.y = height(SAMPLE.x, SAMPLE.z) + 0.25 + skim * 0.85
      specimen.scale.set(0.54, 0.41, 0.42).multiplyScalar(1 - skim * 0.97)
      specimen.rotation.y = 0.9 + skim * 2
      specimen.visible = sampleAmount < 1
      powerMeter.scale.x = 0.49 * (1 - stormAmount * 0.70)
      powerMeter.material.emissiveIntensity = 1.4 + Math.sin(scanAmount * Math.PI) * 2.3
      racks.forEach((rack, i) => { rack.rotation.x = 0.43 + (reduced ? 0 : 0.09 * Math.sin(scanAmount * Math.PI) * (1 + i * 0.2)) })
      dishTop.rotation.y = reduced ? 0.3 : elapsed * 0.20
      for (const [key, marker] of Object.entries(markers)) {
        marker.visible = key === target
        marker.scale.setScalar(reduced ? 0.75 : 0.75 + Math.sin(elapsed * 3.2) * 0.09)
        marker.material.opacity = reduced ? 0.92 : 0.80 + Math.sin(elapsed * 3.2) * 0.14
      }
    },
  }
}
