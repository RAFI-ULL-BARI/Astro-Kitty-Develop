import * as THREE from 'three'
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js'

export const STATIONS = {
  air: {x:196,z:-5}, water:{x:204,z:-5}, garden:{x:204,z:2},
  radio:{x:196,z:2}, exit:{x:200,z:7}, rover:{x:-7,z:5},
}
export function makeHabitatRoom(scene) {
  const geometry=new RoundedBoxGeometry(1,1,1,2,0.08)
  const room=new THREE.Group()
  room.position.x=200
  scene.add(room)
  const paints={}
  const box=(parent,color,x,y,z,w,h,d)=>{
    paints[color]??=new THREE.MeshStandardMaterial({color,roughness:.6,metalness:.12})
    const mesh=new THREE.Mesh(geometry,paints[color])
    mesh.position.set(x,y,z);mesh.scale.set(w,h,d);mesh.receiveShadow=true;mesh.castShadow=true
    parent.add(mesh);return mesh
  }
  box(room,'#566473',0,-.16,0,13,.3,18)
  box(room,'#c4c4c7',0,1.08,-8.8,13,2.16,.28)
  box(room,'#c4c4c7',0,4.6,-8.8,13,1.3,.28)
  for(const x of [-6,-2,2,6])box(room,'#c4c4c7',x,3,-8.8,1.4,1.9,.28)
  box(room,'#777d8c',0,5.25,0,13,.25,18)
  box(room,'#b6b3bb',0,2.6,8.8,13,5.2,.25)
  box(room,'#46536a',0,1.65,8.6,2.5,3.3,.15)
  box(room,'#b6b3bb',-6.4,2.6,0,.25,5.2,18)
  box(room,'#b6b3bb',6.4,2.6,0,.25,5.2,18)
  for(let z=-8;z<9;z+=2) {
    box(room,'#788893',0,.008,z,12,.018,.045)
    box(room,'#45465d',-6.15,2.5,z,.18,5,.16)
    box(room,'#45465d',6.15,2.5,z,.18,5,.16)
  }
  for(const x of [-4,0,4]){
    for(const side of [-1,1]){box(room,'#404557',x+side*1.3,3,-8.59,.15,1.9,.22);box(room,'#404557',x,3+side*.9,-8.59,2.7,.15,.22)}
    const glass=box(room,'#b6d7db',x,3,-8.50,2.45,1.65,.02)
    glass.material=new THREE.MeshStandardMaterial({color:'#b6d7db',transparent:true,opacity:.09,roughness:.15,depthWrite:false})
  }
  const lights=new THREE.HemisphereLight('#f2e5db','#6c788e',1.25)
  room.add(lights)
  const ceilingLight=new THREE.DirectionalLight('#fff1d9',1.9)
  ceilingLight.position.set(202,4.8,3);ceilingLight.target.position.set(199,0,-2)
  ceilingLight.castShadow=true;ceilingLight.shadow.mapSize.setScalar(1024)
  Object.assign(ceilingLight.shadow.camera,{left:-9,right:9,top:12,bottom:-12,near:.2,far:24})
  ceilingLight.shadow.normalBias=.04;scene.add(ceilingLight,ceilingLight.target)
  // Actual miniature terrain behind the window openings, with parallax as Kitty walks.
  const view=new THREE.Group();room.add(view)
  const horizon=box(view,'#ba8c7e',0,8,-43,80,32,.2)
  horizon.material=new THREE.MeshBasicMaterial({color:'#ba8c7e',fog:false})
  box(view,'#a57460',0,-.15,-24,70,.2,34)
  for(let i=0;i<10;i++){
    const hill=new THREE.Mesh(new THREE.ConeGeometry(5+i%3,5+i%4,7),new THREE.MeshBasicMaterial({color:i%2?'#a4776a':'#9b7169',fog:false}))
    hill.position.set(-32+i*7,1.8,-32-(i%3)*3);hill.scale.z=1.7;view.add(hill)
  }
  for(const x of [-5.9,5.9]){
    const strip=box(room,'#f3e3bb',x,4.6,0,.12,.12,16)
    strip.material=new THREE.MeshStandardMaterial({color:'#fff0d2',emissive:'#ffe6bd',emissiveIntensity:1.4})
  }
  for(const x of [-5.8,5.8]){
    for(let j=0;j<3;j++)box(room,['#9ab9bc','#bda178','#718293'][j],x,3.6+j*.23,0,.10,.10,16)
    for(let z=-6;z<8;z+=3){box(room,'#535e72',x,3.9,z,.2,.8,.14)}
  }
  for(let z=-6;z<8;z+=4){
    box(room,'#485568',0,5,z,11.5,.16,.4)
    const light=box(room,'#e5eee4',0,4.9,z,2.6,.08,.45)
    light.material=new THREE.MeshStandardMaterial({color:'#dcefe6',emissive:'#dcefe6',emissiveIntensity:1})
  }
  for(const x of [-2.8,2.8]){
    box(room,'#737e8c',x,.5,-7.7,1.3,1,1)
    box(room,'#c3b6a0',x,1.05,-7.7,1.35,.1,1.05)
    box(room,'#e39e62',x,.6,-7.16,.8,.15,.04)
  }
  const plants=[], displays=[]
  for(const [key,p] of Object.entries(STATIONS)){
    if(key==='rover'||key==='exit')continue
    const group=new THREE.Group();group.position.set(p.x-200,0,p.z);room.add(group)
    box(group,'#ece0cb',0,.65,0,2.1,1.3,1.1)
    box(group,'#44475f',0,1.55,0,1.8,.65,.18)
    const display=box(group,key==='air'?'#80bebc':key==='water'?'#7aabe0':key==='garden'?'#adc986':'#d5abdf',0,1.55,.11,1.54,.43,.04)
    displays.push(display)
    if(key==='garden'){
      for(let i=0;i<3;i++){
        const plant=new THREE.Group();plant.position.set((i-1)*.62,1.3,.32);group.add(plant)
        box(plant,'#98624c',0,.1,0,.43,.2,.42)
        box(plant,'#5f885d',0,.4,0,.035,.6,.035)
        for(let j=0;j<4;j++){
          const leaf=new THREE.Mesh(new THREE.SphereGeometry(1,12,8),new THREE.MeshStandardMaterial({color:'#81ae69'}))
          leaf.scale.set(.19,.045,.09);leaf.position.set((j%2?1:-1)*.13,.3+j*.09,0);leaf.rotation.z=(j%2?1:-1)*.4
          plant.add(leaf);plants.push(leaf)
        }
      }
    } else {
      for(const side of [-1,1]){
        const gauge=box(group,key==='water'?'#70aee0':key==='air'?'#91d6c5':'#c9a0df',side*.52,.77,.58,.22,.65,.05)
        gauge.material=new THREE.MeshStandardMaterial({color:gauge.material.color,emissive:gauge.material.color,emissiveIntensity:.18})
        box(group,'#44475f',side*.52,.35,.6,.34,.12,.07)
        const tank=new THREE.Mesh(new THREE.CylinderGeometry(.22,.22,.7,18),paints['#ece0cb'])
        tank.position.set(side*.6,1.55,-.35);group.add(tank)
      }
    }
    const canvas=document.createElement('canvas');canvas.width=256;canvas.height=64
    const c=canvas.getContext('2d');c.fillStyle='#272d41';c.fillRect(0,0,256,64)
    c.fillStyle='#fff0db';c.font='bold 31px system-ui';c.textAlign='center'
    c.fillText({air:'OXYGEN',water:'WATER',garden:'GARDEN',radio:'RADIO'}[key],128,44)
    const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace
    const label=new THREE.Mesh(new THREE.PlaneGeometry(1.7,.425),new THREE.MeshBasicMaterial({map:tex}))
    label.position.set(0,2.15,0);group.add(label)
  }
  const rover=new THREE.Group();rover.position.set(-7,0,5);scene.add(rover)
  box(rover,'#e5ceb2',0,.65,0,1.6,.55,2)
  box(rover,'#4a5166',0,.97,0,1.35,.08,1.75)
  box(rover,'#d19b69',0,1.4,-.5,.13,.8,.13)
  box(rover,'#65677a',0,1.79,-.5,.6,.25,.3)
  const wheels=[]
  for(const x of [-.9,.9])for(const z of [-.7,.7]){
    const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.38,.38,.26,16),paints['#44475f'])
    wheel.rotation.z=Math.PI/2;wheel.position.set(x,.35,z);rover.add(wheel);wheels.push(wheel)
  }
  return {
    room,
    animate(time,indoor,done,height,expedition=false){
      rover.visible=!expedition
      lights.visible=indoor
      ceilingLight.visible=indoor
      room.visible=indoor
      for(let i=0;i<plants.length;i++){
        const healthy=done.includes('garden')||done.includes(['water-lettuce','water-radish','water-pea'][Math.floor(i/4)])
        plants[i].rotation.z=THREE.MathUtils.lerp(plants[i].rotation.z,(i%2?1:-1)*(healthy?.6:-.1),.035)+Math.sin(time*2+i)*.001
      }
      for(const display of displays)display.material.emissive.set('#22343c')
      rover.position.y=height(rover.position.x,rover.position.z)
      if(done.includes('rover')){
        rover.position.x=-7+Math.sin(time*.3)*2
        rover.rotation.y=Math.cos(time*.3)*.2
        wheels.forEach(w=>w.rotation.x=time*2)
      }
    },
  }
}
