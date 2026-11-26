import * as THREE from 'three'
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js'
import {detailMaps, realism} from '../colony/realism.js'

const sphere = new THREE.SphereGeometry(1, 24, 16)
const rounded = new RoundedBoxGeometry(1, 1, 1, 3, 0.18)
const tube = new THREE.CylinderGeometry(1, 1, 1, 20)
const standard = (color, roughness = 0.73, metalness = 0.02) =>
  new THREE.MeshStandardMaterial({color, roughness, metalness})

function part(parent, geometry, material, x, y, z, w, h, d) {
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(x, y, z)
  mesh.scale.set(w, h, d)
  mesh.castShadow = true
  parent.add(mesh)
  return mesh
}

function earGeometry() {
  const outline = new THREE.Shape()
  outline.moveTo(-0.175, 0)
  outline.quadraticCurveTo(-0.175, 0.16, -0.105, 0.31)
  outline.quadraticCurveTo(-0.092, 0.35, -0.047, 0.304)
  outline.quadraticCurveTo(0.10, 0.16, 0.174, 0)
  outline.lineTo(-0.175, 0)
  const geometry = new THREE.ExtrudeGeometry(outline, {
    depth: 0.06, bevelEnabled: true, bevelThickness: 0.032, bevelSize: 0.035, bevelSegments: 3, steps: 1,
  })
  geometry.translate(0, 0, -0.03)
  return geometry
}

const ears = earGeometry()

// Options let the Mars Colony game dress crew kitties differently; defaults are Astro Kitty.
export function makeKitty(scene, options = {}) {
  const rig = new THREE.Group(), body = new THREE.Group()
  rig.add(body)
  scene.add(rig)

  const real = realism.enabled
  // Suit fabric with a fine rip-stop weave; soft fur with a sheen; glossy eyes; a gold-tinted visor.
  const suit = detailMaps(standard(options.suit ?? '#e9dcd1', 0.88), 'cloth', 7, 0.55)
  const seam = detailMaps(standard('#a99aa5', 0.85), 'cloth', 7, 0.55)
  const indigo = detailMaps(standard(options.pack ?? '#3e3d58', 0.6, real ? 0.25 : 0.02), 'panel', 2, 0.4)
  const trim = detailMaps(standard(options.trim ?? '#e79459', 0.8), 'cloth', 7, 0.5)
  const steel = standard(real ? '#9ea2ab' : '#737684', real ? 0.28 : 0.38, real ? 0.85 : 0.25)
  const furry = color => (real
    ? detailMaps(new THREE.MeshPhysicalMaterial({color, roughness: 0.82, sheen: 1, sheenRoughness: 0.5, sheenColor: new THREE.Color(color).lerp(new THREE.Color('#ffffff'), 0.35)}), 'fur', 5, 0.45)
    : standard(color))
  const fur = furry(options.fur ?? '#d9a376'), cream = furry(options.cream ?? '#fae0bc'), innerEar = standard(options.inner ?? '#d88685', 0.7)
  const dark = real ? new THREE.MeshPhysicalMaterial({color: '#1d1820', roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.05}) : standard('#302735')
  const nose = standard(options.nose ?? '#302735', 0.45)
  const stripe = furry(options.stripe ?? '#9d6549')
  const teal = new THREE.MeshStandardMaterial({color: '#7ac2c2', emissive: '#3a8885', emissiveIntensity: 0.42})
  const oval = (parent, material, ...shape) => part(parent, sphere, material, ...shape)
  const casePart = (parent, material, ...shape) => part(parent, rounded, material, ...shape)
  const cuff = (parent, material, ...shape) => part(parent, tube, material, ...shape)

  oval(body, suit, 0, 0.99, 0, 0.35, 0.44, 0.229)
  casePart(body, indigo, 0, 0.73, 0, 0.58, 0.13, 0.43)
  casePart(body, trim, 0, 0.74, 0.23, 0.11, 0.095, 0.055)
  cuff(body, seam, 0, 1.31, 0, 0.285, 0.10, 0.25)
  cuff(body, indigo, 0, 1.35, 0, 0.254, 0.046, 0.227)

  const backpack = new THREE.Group()
  backpack.position.set(0, 1.04, 0.225)
  body.add(backpack)
  casePart(backpack, indigo, 0, 0, 0, 0.57, 0.59, 0.25)
  casePart(backpack, suit, 0, 0.005, 0.134, 0.43, 0.48, 0.13)
  casePart(backpack, steel, 0, -0.15, 0.20, 0.27, 0.107, 0.045)
  for (const side of [-1, 1]) {
    cuff(backpack, suit, side * 0.255, -0.016, 0.125, 0.080, 0.385, 0.08)
    cuff(backpack, trim, side * 0.255, 0.07, 0.125, 0.082, 0.05, 0.082)
    casePart(backpack, indigo, side * 0.113, -0.154, 0.228, 0.045, 0.026, 0.01)
  }
  casePart(backpack, teal, 0.048, -0.154, 0.228, 0.057, 0.024, 0.01)
  oval(backpack, trim, 0, 0.045, 0.208, 0.055, 0.041, 0.009)
  for (const [x, y] of [[-0.06, 0.089], [-0.022, 0.115], [0.022, 0.115], [0.06, 0.089]]) {
    oval(backpack, trim, x, y, 0.208, 0.016, 0.021, 0.009)
  }

  const head = new THREE.Group()
  head.position.set(0, 1.68, -0.024)
  body.add(head)
  oval(head, fur, 0, 0, 0, 0.334, 0.287, 0.282)
  oval(head, cream, 0, -0.074, -0.11, 0.29, 0.19, 0.205)
  const earParts = [], eyes = []
  for (const side of [-1, 1]) {
    const ear = part(head, ears, fur, side * 0.20, 0.145, 0.013, side, 1.02, 1.25)
    ear.rotation.z = side * -0.25
    const lining = part(head, ears, innerEar, side * 0.20, 0.173, -0.036, side * 0.65, 0.74, 0.27)
    lining.rotation.z = ear.rotation.z
    earParts.push({ear, lining, side})
    eyes.push(oval(head, dark, side * 0.11, -0.018, -0.277, 0.037, 0.055, 0.019))
    const mark = oval(head, stripe, side * 0.115, 0.072, 0.255, 0.035, 0.119, 0.030)
    mark.rotation.z = side * -0.35
    oval(head, stripe, side * 0.258, 0.003, 0.166, 0.044, 0.046, 0.025)
  }
  oval(head, stripe, 0, 0.117, 0.258, 0.032, 0.089, 0.030)
  oval(head, nose, 0, -0.10, -0.304, 0.040, 0.027, 0.021)

  const helmet = new THREE.Group()
  helmet.position.set(0, 1.66, 0)
  body.add(helmet)
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.343, 0.039, 10, 36), steel)
  rim.rotation.x = Math.PI / 2
  rim.scale.set(1, 0.87, 1)
  rim.position.y = -0.249
  helmet.add(rim)
  for (const side of [-1, 1]) {
    oval(helmet, indigo, side * 0.351, -0.035, 0.005, 0.070, 0.115, 0.104)
    oval(helmet, suit, side * 0.388, -0.035, 0.005, 0.046, 0.084, 0.078)
    oval(helmet, trim, side * 0.417, -0.035, 0.005, 0.025, 0.045, 0.041)
  }
  const visor = real ? new THREE.MeshPhysicalMaterial({
    color: '#e8d2a6', metalness: 0.65, roughness: 0.05, transparent: true, opacity: 0.3, depthWrite: false,
    clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 1.8,
  }) : new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    vertexShader: `
      varying vec3 viewNormal;
      varying vec3 eye;
      void main() {
        vec4 point = modelViewMatrix * vec4(position, 1.0);
        eye = normalize(-point.xyz);
        viewNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * point;
      }`,
    fragmentShader: `
      varying vec3 viewNormal;
      varying vec3 eye;
      void main() {
        vec3 n = normalize(viewNormal);
        float edge = pow(1.0 - max(dot(n, normalize(eye)), 0.0), 3.1);
        float reflection = pow(max(dot(n, normalize(vec3(-0.62,0.86,0.38))), 0.0), 19.0);
        gl_FragColor = vec4(mix(vec3(0.47,0.69,0.94),vec3(1.0,0.85,0.67),reflection),
          0.035 + edge * 0.57 + reflection * 0.21);
        #include <colorspace_fragment>
      }`,
  })
  const bubble = oval(helmet, visor, 0, 0.067, -0.025, 0.408, 0.477, 0.371)
  bubble.castShadow = false
  bubble.renderOrder = 4

  const arms = [], legs = []
  for (const side of [-1, 1]) {
    const arm = new THREE.Group(), elbow = new THREE.Group()
    arm.position.set(side * 0.34, 1.21, 0.005)
    arm.rotation.z = side * 0.16
    elbow.position.set(side * 0.051, -0.258, 0)
    oval(arm, suit, side * 0.029, -0.10, 0, 0.126, 0.223, 0.137)
    oval(arm, trim, side * 0.084, -0.056, 0.005, 0.079, 0.09, 0.086)
    oval(elbow, indigo, 0, 0.01, 0, 0.090, 0.080, 0.093)
    oval(elbow, suit, 0, -0.087, -0.009, 0.104, 0.142, 0.112)
    cuff(elbow, trim, 0, -0.172, 0, 0.094, 0.046, 0.093)
    oval(elbow, indigo, 0, -0.226, -0.01, 0.096, 0.110, 0.102)
    oval(elbow, indigo, -side * 0.065, -0.205, -0.039, 0.052, 0.072, 0.058)
    arm.add(elbow)
    body.add(arm)
    arms.push({arm, elbow})

    const leg = new THREE.Group(), shin = new THREE.Group()
    leg.position.set(side * 0.16, 0.73, 0)
    shin.position.set(0, -0.305, 0)
    oval(leg, suit, 0, -0.125, 0, 0.142, 0.229, 0.145)
    oval(shin, seam, 0, 0.017, -0.05, 0.131, 0.096, 0.127)
    oval(shin, suit, 0, -0.132, 0, 0.12, 0.168, 0.12)
    cuff(shin, trim, 0, -0.232, 0, 0.125, 0.053, 0.117)
    casePart(shin, indigo, 0, -0.356, -0.065, 0.294, 0.111, 0.414)
    casePart(shin, suit, 0, -0.298, -0.072, 0.273, 0.128, 0.37)
    leg.add(shin)
    body.add(leg)
    legs.push({leg, shin})
  }
  // A tail poking out of a tail sleeve in the suit: a chain of joints that swish.
  const tail = []
  let joint = new THREE.Group()
  joint.position.set(0, 0.74, 0.25)
  body.add(joint)
  for (let i = 0; i < 6; i++) {
    const r = 0.075 - i * 0.008
    oval(joint, i === 0 ? suit : i === 5 ? cream : fur, 0, 0, 0.07, r, r, 0.1)
    tail.push(joint)
    const next = new THREE.Group()
    next.position.set(0, 0, 0.13)
    joint.add(next)
    joint = next
  }
  let stride = 0, life = 0, cheer = 0, blink = 2.5, twitch = 4
  const twitchSide = {value: 1}

  return {
    rig, head, helmet,
    materials: {suit, trim, indigo, fur, cream, stripe, innerEar, nose},
    setHelmet(on) { helmet.visible = on },
    cheer() { cheer = 1 },
    animate(dt, speed, ground, action, reduced) {
      cheer = Math.max(0, cheer - dt / 1.1)
      // blink every few seconds, twitch an ear now and then
      blink -= dt
      const closed = !reduced && blink < 0.12
      if (blink < 0) blink = 2.2 + Math.random() * 3.5
      for (const eye of eyes) eye.scale.y = closed ? 0.008 : 0.055
      twitch -= dt
      if (twitch < 0) { twitch = 3 + Math.random() * 5; twitchSide.value = Math.random() < 0.5 ? -1 : 1 }
      const flick = !reduced && twitch > 0 && twitch < 0.25 ? Math.sin(twitch / 0.25 * Math.PI) * 0.35 : 0
      for (const {ear, lining, side} of earParts) {
        const z = side * -0.25 + (side === twitchSide.value ? flick * side : 0)
        ear.rotation.z = z
        lining.rotation.z = z
      }
      const hop = reduced ? 0 : Math.abs(Math.sin(cheer * Math.PI * 2)) * cheer
      const weight = THREE.MathUtils.clamp(speed / 2.5, 0, 1)
      stride += speed * dt * 4.7
      life += dt
      const swing = Math.sin(stride) * weight
      const lift = (1 - Math.cos(stride * 2)) * weight
      const reach = action > 0 ? Math.sin(Math.PI * action) : 0
      body.position.y = ground + hop * 0.5 + (reduced ? 0 : lift * 0.043 + Math.sin(life * 2.7) * 0.012)
      body.rotation.z = reduced ? 0 : swing * 0.048
      body.rotation.x = weight * -0.060 + reach * -0.15
      head.rotation.y = reduced ? 0 : Math.sin(stride * 0.37) * weight * 0.12 + Math.sin(life * 0.81) * (1 - weight) * 0.09
      head.rotation.x = reach * 0.13
      const swish = reduced ? 0 : Math.sin(life * (2.2 + cheer * 6) ) * (0.18 + cheer * 0.3 + weight * 0.1)
      tail.forEach((j, i) => {
        j.rotation.y = swish * (0.4 + i * 0.12) + Math.sin(life * 1.3 + i) * 0.04
        j.rotation.x = i === 0 ? -0.6 : -0.12 - weight * 0.05
      })
      for (let i = 0; i < 2; i++) {
        const phase = stride + Math.PI * i
        const motion = Math.sin(phase) * weight
        legs[i].leg.rotation.x = motion * 0.63
        legs[i].shin.rotation.x = Math.max(0, Math.cos(phase)) * weight * 0.69
        arms[i].arm.rotation.x = -motion * 0.50 - (i === 1 ? reach * 0.76 : 0) - (hop > 0 ? 2.4 * Math.min(1, cheer * 3) : 0)
        arms[i].elbow.rotation.x = -0.20 - Math.max(0, motion) * 0.34 - (i === 1 ? reach * 0.38 : 0)
      }
    },
  }
}
