// Things in the air: dust devils, blowing dust, sparks, steam, smoke and rocket flames.
import * as THREE from 'three'
import {glow} from './kit.js'
import {clamp, rng, TAU} from './util.js'

// Blowing dust (same idea as the 3D adventure's drift, with storm strength).
export function makeWindDust(scene, seed = 3) {
  const random = rng(seed + 9883)
  const geometry = new THREE.BufferGeometry()
  const coords = [], variation = []
  for (let i = 0; i < 900; i++) {
    coords.push(random() * 100, random() ** 2 * 10, (random() - 0.5) * 100)
    variation.push(random())
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(coords, 3))
  geometry.setAttribute('variation', new THREE.Float32BufferAttribute(variation, 1))
  const material = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: {elapsed: {value: 0}, storm: {value: 0}, pixel: {value: 1}, inside: {value: 0}, center: {value: new THREE.Vector3()}},
    vertexShader: `
      attribute float variation;
      uniform float elapsed, storm, pixel;
      uniform vec3 center;
      varying float alpha;
      void main() {
        vec3 p = position;
        p.x = mod(p.x + elapsed * mix(0.8, 11.0, storm) * (0.6 + variation * 0.7) - center.x, 100.0) - 50.0 + center.x;
        p.z = mod(p.z - center.z + 50.0, 100.0) - 50.0 + center.z;
        p.y += center.y + cos(p.x * 0.12 + elapsed * 0.3 + variation * 81.0) * 0.35;
        vec4 v = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * v;
        gl_PointSize = clamp((170.0 * variation + 22.0) / max(1.0, -v.z), 1.0, 42.0) * pixel;
        alpha = smoothstep(0.7 - storm * 0.68, 1.0, variation) * mix(0.12, 0.42, storm)
          * smoothstep(1.5, 4.5, -v.z) * (1.0 - smoothstep(26.0, 60.0, -v.z));
      }`,
    fragmentShader: `
      uniform float storm, inside;
      varying float alpha;
      void main() {
        vec2 uv = (gl_PointCoord - 0.5) * vec2(1.0, 2.2 + storm * 5.0);
        float falloff = 1.0 - smoothstep(0.04, 0.51, length(uv));
        gl_FragColor = vec4(mix(vec3(0.83,0.59,0.44), vec3(0.9,0.6,0.37), storm), falloff * alpha * (1.0 - inside));
        #include <colorspace_fragment>
      }`,
  })
  const points = new THREE.Points(geometry, material)
  points.frustumCulled = false
  scene.add(points)
  return material.uniforms
}

// Dust devils: spinning columns of dust that wander about and leave dark tracks.
export function makeDustDevils(scene, height, count = 3, area = 120, seed = 1) {
  const random = rng(seed + 31)
  const devils = []
  const trackGeo = new THREE.PlaneGeometry(1.6, 1.0).rotateX(-Math.PI / 2)
  const trackMat = new THREE.MeshBasicMaterial({color: '#4a2e26', transparent: true, opacity: 0.22, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2})
  const tracks = new THREE.InstancedMesh(trackGeo, trackMat, 400)
  tracks.count = 0
  tracks.frustumCulled = false
  scene.add(tracks)
  let nextTrack = 0
  const dummy = new THREE.Object3D()
  for (let i = 0; i < count; i++) {
    const n = 420
    const g = new THREE.BufferGeometry()
    const seeds = new Float32Array(n * 3)
    for (let k = 0; k < n; k++) seeds.set([random(), random(), random()], k * 3)
    g.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(n * 3), 3))
    g.setAttribute('seed', new THREE.Float32BufferAttribute(seeds, 3))
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: {time: {value: 0}, tall: {value: 14 + random() * 10}, pixel: {value: 1}, fade: {value: 1}},
      vertexShader: `
        attribute vec3 seed;
        uniform float time, tall, pixel;
        varying float a;
        void main() {
          float h = fract(seed.x + time * 0.12) * tall;
          float r = 0.35 + h * 0.16 + seed.z * 0.6;
          float ang = seed.y * 6.283 + time * (5.0 - h * 0.12);
          vec3 p = vec3(cos(ang) * r, h, sin(ang) * r);
          vec4 v = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * v;
          gl_PointSize = clamp(260.0 / max(1.0, -v.z), 1.0, 60.0) * pixel;
          a = (1.0 - h / tall) * 0.5 * smoothstep(0.0, 1.5, h);
        }`,
      fragmentShader: `
        uniform float fade;
        varying float a;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          gl_FragColor = vec4(0.72, 0.5, 0.38, a * fade * (1.0 - smoothstep(0.2, 0.5, d)));
          #include <colorspace_fragment>
        }`,
    })
    const pts = new THREE.Points(g, mat)
    pts.frustumCulled = false
    scene.add(pts)
    const angle = random() * TAU
    devils.push({pts, mat, x: Math.cos(angle) * area * 0.6, z: Math.sin(angle) * area * 0.6, heading: random() * TAU, life: random() * 60, stamp: 0})
  }
  return {
    devils,
    update(dt, t, {avoid = [], reduced = false, pixel = 1} = {}) {
      for (const d of devils) {
        d.life += dt
        d.heading += Math.sin(t * 0.3 + d.life) * dt * 0.5
        const speed = 3.2
        d.x += Math.cos(d.heading) * speed * dt
        d.z += Math.sin(d.heading) * speed * dt
        // turn back towards the area, and away from buildings
        if (Math.hypot(d.x, d.z) > area) d.heading = Math.atan2(-d.z, -d.x) + (Math.random() - 0.5)
        for (const zone of avoid) if (Math.hypot(d.x - zone.x, d.z - zone.z) < zone.r) d.heading = Math.atan2(d.z - zone.z, d.x - zone.x)
        const y = height(d.x, d.z)
        d.pts.position.set(d.x, y, d.z)
        d.mat.uniforms.time.value = reduced ? 0 : t + d.life
        d.mat.uniforms.pixel.value = pixel
        // fade in and out over a long cycle so they come and go
        const cycle = (d.life % 70) / 70
        d.mat.uniforms.fade.value = clamp(Math.min(cycle * 6, (1 - cycle) * 6), 0, 1)
        d.stamp += dt
        if (d.stamp > 0.35 && d.mat.uniforms.fade.value > 0.3) {
          d.stamp = 0
          dummy.position.set(d.x, y + 0.04, d.z)
          dummy.rotation.y = -d.heading
          dummy.scale.set(1, 1, 1)
          dummy.updateMatrix()
          tracks.setMatrixAt(nextTrack, dummy.matrix)
          nextTrack = (nextTrack + 1) % 400
          tracks.count = Math.max(tracks.count, nextTrack)
          tracks.instanceMatrix.needsUpdate = true
        }
      }
    },
    nearest(x, z) {
      let best = null
      for (const d of devils) {
        const dist = Math.hypot(d.x - x, d.z - z)
        if (d.mat.uniforms.fade.value > 0.3 && (!best || dist < best.dist)) best = {dist, devil: d}
      }
      return best
    },
  }
}

// A pool of short-lived particles for sparks, steam, smoke and dust puffs.
export function makeBursts(scene, size = 600) {
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(size * 3), 3))
  geo.setAttribute('color', new THREE.Float32BufferAttribute(new Float32Array(size * 3), 3))
  geo.setAttribute('alpha', new THREE.Float32BufferAttribute(new Float32Array(size), 1))
  geo.setAttribute('size', new THREE.Float32BufferAttribute(new Float32Array(size), 1))
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, vertexColors: true,
    uniforms: {pixel: {value: 1}},
    vertexShader: `
      attribute float alpha; attribute float size;
      uniform float pixel;
      varying float a; varying vec3 c;
      void main() {
        a = alpha; c = color;
        vec4 v = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * v;
        gl_PointSize = clamp(size * 300.0 / max(0.5, -v.z), 1.0, 80.0) * pixel;
      }`,
    fragmentShader: `
      varying float a; varying vec3 c;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        gl_FragColor = vec4(c, a * (1.0 - smoothstep(0.15, 0.5, d)));
        #include <colorspace_fragment>
      }`,
  })
  const points = new THREE.Points(geo, mat)
  points.frustumCulled = false
  scene.add(points)
  const parts = Array.from({length: size}, () => ({life: 0, max: 1, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, g: 0, size: 0.1, r: 1, gg: 1, b: 1, grow: 0}))
  let next = 0
  const color = new THREE.Color()
  function emit(x, y, z, {count = 10, speed = 2, up = 1, gravity = -4, life = 0.8, size = 0.12, color: col = '#ffd27a', spread = 1, dir = null, grow = 0} = {}) {
    color.set(col)
    for (let i = 0; i < count; i++) {
      const p = parts[next]
      next = (next + 1) % size
      const a = Math.random() * TAU, s = speed * (0.4 + Math.random() * 0.6)
      p.x = x; p.y = y; p.z = z
      if (dir) {
        p.vx = dir[0] * s + (Math.random() - 0.5) * spread
        p.vy = dir[1] * s + (Math.random() - 0.5) * spread
        p.vz = dir[2] * s + (Math.random() - 0.5) * spread
      } else {
        p.vx = Math.cos(a) * s * spread
        p.vz = Math.sin(a) * s * spread
        p.vy = up * s * (0.5 + Math.random())
      }
      p.g = gravity
      p.life = p.max = life * (0.6 + Math.random() * 0.6)
      p.size = size * (0.7 + Math.random() * 0.6)
      p.grow = grow
      p.r = color.r; p.gg = color.g; p.b = color.b
    }
  }
  return {
    emit,
    update(dt, pixel = 1) {
      mat.uniforms.pixel.value = pixel
      const pos = geo.attributes.position, alpha = geo.attributes.alpha, col = geo.attributes.color, sz = geo.attributes.size
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i]
        if (p.life > 0) {
          p.life -= dt
          p.vy += p.g * dt
          p.x += p.vx * dt
          p.y += p.vy * dt
          p.z += p.vz * dt
          p.size += p.grow * dt
        }
        pos.setXYZ(i, p.x, p.y, p.z)
        alpha.setX(i, p.life > 0 ? Math.min(1, p.life / p.max * 1.5) : 0)
        col.setXYZ(i, p.r, p.gg, p.b)
        sz.setX(i, p.size)
      }
      pos.needsUpdate = alpha.needsUpdate = col.needsUpdate = sz.needsUpdate = true
    },
  }
}

// A rocket coming down to land: flame, glow and a dust ring at touchdown.
export function makeLanding(scene) {
  const group = new THREE.Group()
  const b = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.3, 2.6, 16), new THREE.MeshStandardMaterial({color: '#e9ded2', roughness: 0.5, metalness: 0.2}))
  b.position.y = 1.5
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.0, 16), new THREE.MeshStandardMaterial({color: '#e3884c', roughness: 0.5}))
  cone.position.y = 3.3
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.6, 3.2, 14, 1, true), new THREE.MeshBasicMaterial({color: '#ffb35a', transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false}))
  flame.rotation.x = Math.PI
  flame.position.y = -1.5
  const light = glow('#ffb35a', 7, 0.9)
  light.position.y = -1
  group.add(b, cone, flame, light)
  group.visible = false
  scene.add(group)
  return {group, flame, light, crate: b}
}
