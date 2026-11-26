import {makeFieldWorld} from './field-world.js'
import {OBJECTS, MISSIONS} from '../../dist/world/field-missions.js'
import {createFieldMechanic} from '../../dist/world/field-mechanics.js'
import {makeHabitatRoom, STATIONS} from './habitat-room.js'
import * as THREE from 'three'
import {makeHeight, makeSky, makeTerrain, randomFrom, SUN} from './terrain.js'
import {makeKitty} from './kitten.js'
import {chosenAvatar, kittyLook} from './avatar.js'
import {ENTRY, SAMPLE, SOLAR, OUTPOST_Z, makeOutpost} from './outpost.js'

const {clamp, lerp, damp} = THREE.MathUtils
const START_Z = 12
const PLAYER_RADIUS = 0.44
const locations = {sample: SAMPLE, solar: SOLAR, enter: ENTRY}

function intersects(x, z, obstacle, padding) {
  const dx = Math.abs(x - obstacle.x), dz = Math.abs(z - obstacle.z)
  if (obstacle.radius !== undefined) return Math.hypot(dx, dz) < obstacle.radius + padding
  return Math.hypot(Math.max(0, dx - obstacle.w), Math.max(0, dz - obstacle.d)) < padding
}

function turnToward(angle, target, strength, dt) {
  const difference = Math.atan2(Math.sin(target - angle), Math.cos(target - angle))
  return angle + difference * (1 - Math.exp(-strength * dt))
}

function drift(scene, seed) {
  const random = randomFrom(seed + 9883)
  const geometry = new THREE.BufferGeometry()
  const coordinates = [], variation = []
  for (let i = 0; i < 650; i++) {
    coordinates.push(random() * 86, random() ** 2.1 * 8.2, (random() - 0.5) * 84)
    variation.push(random())
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(coordinates, 3))
  geometry.setAttribute('variation', new THREE.Float32BufferAttribute(variation, 1))
  const material = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: {elapsed: {value: 0}, storm: {value: 0}, pixelDensity: {value: 1}, shelter: {value: 0}},
    vertexShader: `
      attribute float variation;
      uniform float elapsed;
      uniform float storm;
      uniform float pixelDensity;
      varying float alpha;
      void main() {
        vec3 p = position;
        p.x = mod(p.x + elapsed * mix(0.6, 9.2, storm) * (0.6 + variation * 0.7), 86.0) - 43.0;
        p.y += cos(p.x * 0.122 + elapsed * 0.3 + variation * 81.0) * 0.32;
        p.z += sin(p.x * 0.07 + variation * 17.0) * 1.4;
        vec4 v = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * v;
        gl_PointSize = clamp((170.0 * variation + 22.0) / max(1.0, -v.z), 1.0, 42.0) * pixelDensity;
        alpha = smoothstep(0.72 - storm * 0.68, 1.0, variation) * mix(0.12, 0.37, storm)
          * smoothstep(1.5, 4.5, -v.z) * (1.0 - smoothstep(28.0, 60.0, -v.z));
      }`,
    fragmentShader: `
      uniform float storm;
      uniform float shelter;
      varying float alpha;
      void main() {
        vec2 uv = (gl_PointCoord - 0.5) * vec2(1.0, 2.2 + storm * 5.0);
        uv.y += uv.x * 0.32;
        float falloff = 1.0 - smoothstep(0.04, 0.51, length(uv));
        gl_FragColor = vec4(mix(vec3(0.83,0.59,0.44),vec3(0.9,0.60,0.37),storm),
          falloff * alpha * (1.0 - shelter));
        #include <colorspace_fragment>
      }`,
  })
  const particles = new THREE.Points(geometry, material)
  particles.frustumCulled = false
  scene.add(particles)
  return material.uniforms
}

function makeTrail(scene) {
  const count = 56
  const canvas = document.createElement('canvas')
  canvas.width = 32
  canvas.height = 48
  const c = canvas.getContext('2d')
  c.fillStyle = '#ffffffc9'
  c.beginPath()
  c.roundRect(6, 2, 20, 44, 8)
  c.fill()
  c.globalCompositeOperation = 'destination-out'
  for (let i = 0; i < 5; i++) {
    c.fillStyle = '#ffffff8e'
    c.fillRect(5, 8 + i * 7, 22, 2)
  }
  const tex = new THREE.CanvasTexture(canvas)
  const plane = new THREE.PlaneGeometry(0.22, 0.36).rotateX(-Math.PI / 2)
  const material = new THREE.MeshBasicMaterial({
    color: '#684037', transparent: true, map: tex, opacity: 0.30,
    depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2,
  })
  const tracks = new THREE.InstancedMesh(plane, material, count)
  tracks.count = 0
  tracks.frustumCulled = false
  scene.add(tracks)
  let next = 0
  const boot = new THREE.Object3D()
  return (x, y, z, angle) => {
    boot.position.set(x, y + 0.022, z)
    boot.rotation.y = angle
    boot.updateMatrix()
    tracks.setMatrixAt(next, boot.matrix)
    next = (next + 1) % count
    tracks.count = Math.min(tracks.count + 1, count)
    tracks.instanceMatrix.needsUpdate = true
  }
}

export function makeSurface(canvas, spot, onFootstep) {
  const gl = canvas.getContext('webgl2', {alpha: false, antialias: true, powerPreference: 'high-performance'})
  if (!gl) return null
  const renderer = new THREE.WebGLRenderer({canvas, context: gl})
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.15
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFShadowMap

  const seed = Math.round(spot.lat * 100) * 31 + Math.round(spot.lon * 100)
  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog('#b97e6c', 19, 157)
  const camera = new THREE.PerspectiveCamera(54, 1, 0.07, 285)
  const ambient = new THREE.HemisphereLight('#e7cbd7', '#8a5857', 1.86)
  const sunlight = new THREE.DirectionalLight('#ffd3a3', 3.0)
  sunlight.position.copy(SUN).multiplyScalar(42)
  sunlight.target.position.set(0, 0, -5)
  sunlight.position.add(sunlight.target.position)
  sunlight.castShadow = true
  sunlight.shadow.mapSize.setScalar(canvas.clientWidth < 700 ? 1024 : 2048)
  Object.assign(sunlight.shadow.camera, {left: -28, right: 28, top: 28, bottom: -28, near: 0.5, far: 106})
  sunlight.shadow.normalBias = 0.072
  sunlight.shadow.bias = -0.00016
  scene.add(ambient, sunlight, sunlight.target)
  const sky = makeSky(scene)
  const terrainHeight = makeHeight(seed)
  const height = (x,z) => x > 150 ? 0 : terrainHeight(x,z)
  const habitatRoom = makeHabitatRoom(scene)
  const fieldWorld = makeFieldWorld(scene,height)
  const outpost = makeOutpost(scene, height)
  const clearings = [
    {x: 0, z: 8, w: 6, d: 9},
    {x: 6.2, z: 0.4, w: 5, d: 7.8},
    {x: ENTRY.x, z: OUTPOST_Z + 7, w: 16, d: 17},
    {x: 9.8, z: -9, w: 7, d: 9},
  ]
  for(const p of Object.values(OBJECTS))if(p.x<150)clearings.push({x:p.x,z:p.z,w:4.5,d:4.5})
  // Keep a generous rover-width corridor open between gates; boulders remain off trail.
  const roverRoute=['rover','gate1','gate2','gate3','cache'].map(key=>OBJECTS[key])
  for(let i=1;i<roverRoute.length;i++){
    const a=roverRoute[i-1],b=roverRoute[i],steps=Math.ceil(Math.hypot(a.x-b.x,a.z-b.z)/2)
    for(let j=0;j<=steps;j++)clearings.push({x:lerp(a.x,b.x,j/steps),z:lerp(a.z,b.z,j/steps),w:2.1,d:2.1})
  }
  const footRoute=['solar','beacon','layers','core','weather','rover','gate1','gate2','gate3','cache','ridge','relay','shelter'].map(key=>OBJECTS[key])
  for(let i=1;i<footRoute.length;i++){
    const a=footRoute[i-1],b=footRoute[i],steps=Math.ceil(Math.hypot(a.x-b.x,a.z-b.z)/2)
    for(let j=0;j<=steps;j++)clearings.push({x:lerp(a.x,b.x,j/steps),z:lerp(a.z,b.z,j/steps),w:1.2,d:1.2})
  }
  const rocks = makeTerrain(scene, renderer, height, seed, clearings)
  const obstacles = [...rocks, ...outpost.blockers]
  const kitty = makeKitty(scene, kittyLook(chosenAvatar()))
  const air = drift(scene, seed)
  const stamp = makeTrail(scene)

  const state = {x: 0, z: START_Z, yaw: 0, pitch: 0, storm: false}
  const velocity = new THREE.Vector2(), cameraPosition = new THREE.Vector3(), aim = new THREE.Vector3()
  const viewPosition = new THREE.Vector3(), aimPosition = new THREE.Vector3(), projected = new THREE.Vector3()
  const groundColor = new THREE.Color('#b97e6c'), dustColor = new THREE.Color('#a35e46'), chamberColor = new THREE.Color('#514551')
  let currentSpeed=0
  let direction = 0, movieTime = 0, door = 0, stormAmount = 0, holdInside = 0, stride = 0, boot = -1
  let sampleAmount = 0, scanAmount = 0, currentAction = null, actionTimer = 0
  let collected = false, scanned = false, shelteredOnce = false, renderWidth = 0, renderHeight = 0
  let sampledGround = height(0, START_Z)
  let disposed = false
  let quality = 0, frameAverage = 1 / 60, qualityClock = 0
  const QUALITY = [1, 0.82, 0.68, 0.68]
  let missionTarget = null, expedition = false, completedMissions = [], takenGems = []
  let fieldMission=null,mechanic=null,fieldHeld=false,fieldTurn=0,fieldPulse=false,driving=false,carrying=null
  const pointFor=key=>expedition&&fieldMission?.id===key?OBJECTS[fieldMission.target]:({...locations,...STATIONS}[key])

  function sheltered() {
    return state.x > 150 || Math.abs(state.x - ENTRY.x) < 1.33 && state.z < ENTRY.z - 0.47 && state.z > ENTRY.z - 3.72
  }

  function target() {
    if (expedition) return missionTarget
    if (state.storm && !sheltered()) return 'enter'
    if (!collected) return 'sample'
    if (!scanned) return 'solar'
    if (!shelteredOnce) return 'enter'
    return null
  }

  function near(key, distance) {
    const position = pointFor(key)
    if(!position)return false
    return Math.hypot(state.x - position.x, state.z - position.z) <= distance
  }

  function freeAction(){
    if(driving)return 'free-park'
    if(state.x>150)return Math.hypot(state.x-200,state.z-7)<2.8?'free-exit':null
    if(Math.hypot(state.x-OBJECTS.shelter.x,state.z-OBJECTS.shelter.z)<2.8)return 'free-enter'
    if(Math.hypot(state.x-fieldWorld.rover.position.x,state.z-fieldWorld.rover.position.z)<2.8)return 'free-ride'
    return null
  }
  function boardRover(){driving=true;state.x=fieldWorld.rover.position.x;state.z=fieldWorld.rover.position.z;sampledGround=height(state.x,state.z);velocity.set(0,0)}
  function available() {
    if (currentAction) return null
    if (expedition) return fieldMission ? (fieldMission.kind!=='drive' && near(missionTarget,2.8) ? missionTarget : null) : freeAction()
    if (door < 0.97 && state.z > ENTRY.z + 0.62 && near('enter', 3.05)) return 'enter'
    if (!collected && near('sample', 2.25)) return 'sample'
    if (!scanned && near('solar', 2.45)) return 'solar'
    return null
  }

  function step(forward, right, dt, reducedMotion) {
    if (dt <= 0) return
    const wasSheltered = sheltered()
    const maxSpeed = currentAction ? 0 : driving ? 7.2 : expedition ? 4.4 : 3.55
    const sin = Math.sin(state.yaw), cos = Math.cos(state.yaw)
    const desiredX = (sin * forward + cos * right) * maxSpeed
    const desiredZ = (-cos * forward + sin * right) * maxSpeed
    velocity.set(damp(velocity.x, desiredX, 10, dt), damp(velocity.y, desiredZ, 10, dt))
    const oldX = state.x, oldZ = state.z
    const blocked = (x, z) => state.x > 150 ? (x<194.3 || x>205.7 || z < -7.5 || z>8 || expedition&&(Math.abs(x-200)<1.2&&Math.abs(z+1)<.9||Math.abs(x-200)<.85&&Math.abs(z+5.5)<.75) || Object.entries(STATIONS).some(([key,p])=>key!=='exit' && key!=='rover' && Math.abs(x-p.x)<1.4 && Math.abs(z-p.z)<.95)) : [...obstacles,...(expedition?fieldWorld.blockers:[])].some(item => intersects(x, z, item, driving?.85:PLAYER_RADIUS))
      || (door < 0.95 && intersects(x, z, outpost.doorBlocker, PLAYER_RADIUS))
    const x = clamp(state.x + velocity.x * dt, state.x>150?193:-66, state.x>150?207:66)
    const z = clamp(state.z + velocity.y * dt, -66, 66)
    if (!blocked(x, state.z)) state.x = x
    else velocity.x = 0
    if (!blocked(state.x, z)) state.z = z
    else velocity.y = 0

    if(expedition&&mechanic&&fieldMission){
      const p=OBJECTS[fieldMission.target],bearing=Math.atan2(p.x-state.x,-(p.z-state.z))-state.yaw
      mechanic.step({dt,near:near(fieldMission.id,fieldMission.kind==='drive'?3.5:2.8),facing:Math.cos(bearing)>.45,held:fieldHeld,turn:fieldTurn,pulse:fieldPulse,driving})
      fieldPulse=false
      if(fieldMission.kind==='enter')door=mechanic.status.progress
    }
    const walked = Math.hypot(state.x - oldX, state.z - oldZ)
    const speed = walked / dt
    currentSpeed=speed
    if (speed > 0.10) direction = turnToward(direction, Math.atan2(-(state.x - oldX), -(state.z - oldZ)), 11, dt)
    if (currentAction) {
      const p = locations[currentAction]
      direction = turnToward(direction, Math.atan2(state.x - p.x, state.z - p.z), 12, dt)
      actionTimer += dt
      if (currentAction === 'sample') {
        sampleAmount = reducedMotion ? 1 : clamp(actionTimer / 0.74, 0, 1)
        collected = sampleAmount >= 1
      }
      if (currentAction === 'solar') {
        scanAmount = reducedMotion ? 1 : clamp(actionTimer / 1.25, 0, 1)
        scanned = scanAmount >= 1
      }
      if (currentAction === 'enter') door = reducedMotion ? 1 : clamp(actionTimer / 1.15, 0, 1)
      if (reducedMotion || actionTimer >= (currentAction === 'sample' ? 0.83 : 1.25)) currentAction = null
    }
    if (!wasSheltered && sheltered()) shelteredOnce = true
    movieTime += reducedMotion ? 0 : dt
    stormAmount = reducedMotion ? Number(state.storm) : damp(stormAmount, Number(state.storm), 1.8, dt)
    holdInside = damp(holdInside, Number(sheltered()), 8, dt)
    kitty.rig.position.set(state.x, 0, state.z)
    kitty.rig.rotation.y = direction
    kitty.rig.visible=!driving
    sampledGround = damp(sampledGround, state.x>150 ? 0 : sheltered() ? height(ENTRY.x, ENTRY.z) + 0.29 : height(state.x, state.z), 19, dt)
    kitty.animate(dt, speed, sampledGround, mechanic?.status.working ? .65 : currentAction && !reducedMotion ? clamp(actionTimer / 0.84, 0, 1) : 0, reducedMotion)
    stride += walked
    if (stride > 0.40) {
      const bootX = state.x + Math.cos(direction) * boot * 0.16
      const bootZ = state.z - Math.sin(direction) * boot * 0.16
      if (!sheltered()) stamp(bootX, height(bootX, bootZ), bootZ, direction)
      onFootstep?.(!sheltered())
      stride %= 0.40
      boot *= -1
    }
  }

  function draw(dt, reducedMotion) {
    const w = canvas.clientWidth, h = canvas.clientHeight
    if (!w || !h) return
    if (dt > 0) {
      frameAverage = lerp(frameAverage, dt, 0.06)
      qualityClock += dt
      if (qualityClock > 2.5 && frameAverage > 1 / 33 && quality < QUALITY.length - 1) {
        quality++
        qualityClock = 0
        frameAverage = 1 / 45
        renderWidth = 0
        if (quality === 2) { sunlight.shadow.mapSize.setScalar(1024); sunlight.shadow.map?.dispose(); sunlight.shadow.map = null }
        if (quality === 3) { renderer.shadowMap.enabled = false; scene.traverse(node => { if (node.material) node.material.needsUpdate = true }) }
      }
    }
    if (w !== renderWidth || h !== renderHeight) {
      renderWidth = w
      renderHeight = h
      const maxDensity = w < 700 ? 1.45 : 1.75
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDensity, Math.sqrt(2_300_000 / (w * h))) * QUALITY[quality])
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.fov = camera.aspect < 0.82 ? 65 : 53
      camera.updateProjectionMatrix()
      air.pixelDensity.value = renderer.getPixelRatio()
    }
    const x = state.x, z = state.z, sin = Math.sin(state.yaw), cos = Math.cos(state.yaw)
    const close = sheltered() && state.x<150, indoors = state.x > 150
    const follow = close ? 2.15 : indoors ? 4.7 : driving ? 7.2 : 5.6
    const shoulder = close ? 0.26 : 0.78
    cameraPosition.set(
      x - sin * follow + cos * shoulder,
      sampledGround + (close ? 2.15 : indoors ? 4.0 : 3.08) + state.pitch * 1.65,
      z + cos * follow + sin * shoulder,
    )
    // Pull the camera forward when it approaches a rock or outpost wall.
    for (let i = 8; i >= 2; i--) {
      const fraction = i / 8
      const cx = lerp(x, cameraPosition.x, fraction), cz = lerp(z, cameraPosition.z, fraction)
      if (state.x < 150 && obstacles.some(item => intersects(cx, cz, item, 0.16))) continue
      cameraPosition.x = cx
      cameraPosition.z = cz
      break
    }
    if(state.x>150){cameraPosition.x=clamp(cameraPosition.x,194.1,205.9);cameraPosition.z=clamp(cameraPosition.z,-8,8.4);cameraPosition.y=Math.min(cameraPosition.y,4.85)}
    cameraPosition.y = Math.max(cameraPosition.y, height(cameraPosition.x, cameraPosition.z) + 1.45)
    aim.set(x + sin * 5.7, sampledGround + (indoors ? 0.9 : 1.65) - state.pitch * 7.2, z - cos * 5.7)
    const cameraBlend = reducedMotion || !dt ? 1 : 1 - Math.exp(-dt * 13)
    viewPosition.lerp(cameraPosition, cameraBlend)
    aimPosition.lerp(aim, cameraBlend)
    camera.position.copy(viewPosition)
    camera.lookAt(aimPosition)
    sky.position.copy(viewPosition)
    sky.material.uniforms.stormAmount.value = stormAmount
    const stormHere = stormAmount * (1 - holdInside)
    scene.fog.color.copy(groundColor).lerp(dustColor, stormAmount).lerp(chamberColor, holdInside * 0.18)
    scene.fog.near = lerp(19, 1.8, stormHere)
    scene.fog.far = lerp(157, 34, stormHere)
    sunlight.intensity = lerp(3.0, 0.85, stormAmount)
    ambient.intensity = lerp(1.86, 1.35, stormAmount)
    air.elapsed.value = movieTime
    air.storm.value = stormAmount
    air.shelter.value = holdInside
    habitatRoom.animate(movieTime, state.x>150, completedMissions, height, expedition)
    if(expedition)fieldWorld.update({mission:fieldMission,completed:completedMissions,...(mechanic?.status||{}),carrying,driving,state,heading:direction,speed:currentSpeed,time:movieTime,gems:takenGems})
    if(state.x<150){sunlight.target.position.set(state.x,0,state.z);sunlight.position.copy(SUN).multiplyScalar(42).add(sunlight.target.position)}
    outpost.animate(movieTime, door, stormAmount, sampleAmount, scanAmount, target(), reducedMotion)
    renderer.render(scene, camera)
  }

  return {
    state, draw, step, available, ready: outpost.loaded,
    configureField(mission,done=[]){
      expedition=true;fieldMission=mission;missionTarget=mission?.id||null;completedMissions=done;mechanic=createFieldMechanic(mission);fieldHeld=false;fieldTurn=0;fieldPulse=false
      if(mission?.kind==='board'){fieldWorld.rover.position.set(OBJECTS.rover.x,height(OBJECTS.rover.x,OBJECTS.rover.z),OBJECTS.rover.z)}
      if(mission?.kind==='drive'&&!driving){
        const previous=MISSIONS[MISSIONS.findIndex(m=>m.id===mission.id)-1],p=OBJECTS[previous.target]
        state.x=p.x;state.z=p.z;driving=true;velocity.set(0,0);sampledGround=height(p.x,p.z)
      }
      carrying=done.includes('get-filter')&&!done.includes('fit-filter')?'filter':done.includes('collect-cache')&&!done.includes('study-core')?'sample':null
    },
    setGems(list){takenGems=list},
    cheer(){kitty.cheer()},
    fieldInput(held,turn=0){fieldHeld=held;fieldTurn=turn},
    beginField(){
      fieldPulse=true
      if(fieldMission&&near(fieldMission.id,2.8)){const p=OBJECTS[fieldMission.target];state.yaw=Math.atan2(p.x-state.x,-(p.z-state.z));state.pitch=0;direction=-state.yaw}
    },
    finishField(){
      kitty.cheer()
      const kind=fieldMission?.kind
      if(kind==='board')boardRover()
      if(kind==='pickup'){carrying=fieldMission.target;driving=false}
      if(kind==='install'||fieldMission?.id==='study-core')carrying=null
      if(kind==='enter')door=1
    },
    get fieldStatus(){return {...mechanic?.status,driving,carrying}},
    stopDriving(){driving=false},
    boardRover,
    setMission(key,done=[]) {
      expedition=true;missionTarget=key;completedMissions=done
      collected=done.includes('sample');sampleAmount=Number(collected)
      scanned=done.includes('solar');scanAmount=Number(scanned)
    },
    goInside() {
      driving=false;state.x=200;state.z=5;state.yaw=0;state.pitch=0;direction=0
      velocity.set(0,0);sampledGround=0;viewPosition.set(200,3,10);aimPosition.set(200,1.6,0)
    },
    goOutside() {
      driving=false;state.x=ENTRY.x;state.z=ENTRY.z+3;state.yaw=Math.PI;state.pitch=0;door=1
      velocity.set(0,0);sampledGround=height(state.x,state.z)
      viewPosition.set(state.x,3,state.z-5);aimPosition.set(state.x,1.6,state.z+5)
    },
    get sheltered() { return sheltered() },
    get complete() { return collected && scanned && shelteredOnce },
    get activity() { return currentAction || (expedition&&fieldMission) },
    setStorm(storm) { state.storm = storm },
    look(dx, dy) {
      state.yaw = Math.atan2(Math.sin(state.yaw + dx), Math.cos(state.yaw + dx))
      state.pitch = clamp(state.pitch + dy, -0.33, 0.57)
    },
    activate() {
      if (expedition) return available()
      currentAction = available()
      actionTimer = 0
      return currentAction
    },
    objective() {
      const key = target()
      if (!key) return null
      const point = pointFor(key)
      if(!point)return null
      const inside = key === 'enter' && door >= 0.95
      const goalZ = key === 'enter' ? point.z + (inside ? -1.8 : 1.65) : point.z
      const dx = point.x - state.x, dz = goalZ - state.z
      const bearing = Math.atan2(dx, -dz) - state.yaw
      projected.set(point.x, height(point.x, goalZ) + (key === 'enter' && !inside ? 3.77 : 1.15), goalZ)
      projected.project(camera)
      const visible = Math.cos(bearing) > 0 && Math.abs(projected.x) < 0.77 && Math.abs(projected.y) < 0.66
      return {key, bearing, distance: Math.round(Math.hypot(dx, dz)), visible, x: projected.x, y: projected.y}
    },
    dispose() {
      if (disposed) return
      disposed = true
      const geometry = new Set(), materials = new Set(), textures = new Set()
      scene.traverse(node => {
        if (node.geometry) geometry.add(node.geometry)
        if (node.material) materials.add(node.material)
      })
      for (const item of materials) {
        for (const value of Object.values(item)) if (value?.isTexture) textures.add(value)
        item.dispose()
      }
      for (const item of textures) item.dispose()
      for (const item of geometry) item.dispose()
      renderer.forceContextLoss()
      renderer.dispose()
    },
  }
}
