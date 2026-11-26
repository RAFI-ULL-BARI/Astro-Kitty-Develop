import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js'
import * as THREE from 'three'
import {dress} from '../colony/realism.js'
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js'
import {OBJECTS, GEMS} from '../../dist/world/field-missions.js'

// Everything used by a field challenge lives in the same scene as Kitty.
export function makeFieldWorld(scene,height){
 const root=new THREE.Group();root.visible=false;scene.add(root)
 const cube=new RoundedBoxGeometry(1,1,1,2,.06),cylinder=new THREE.CylinderGeometry(1,1,1,16)
 const paints={},nodes={},blockers=[]
 function paint(color,glow=false){const key=color+glow;return paints[key]??=(glow?new THREE.MeshStandardMaterial({color,metalness:glow?.05:.25,roughness:.55,emissive:glow?color:0,emissiveIntensity:glow?.8:0}):dress(new THREE.MeshStandardMaterial({color,metalness:glow?.05:.25,roughness:.55,emissive:glow?color:0,emissiveIntensity:glow?.8:0}),'panel',{scale:2.4,dust:0.5,low:0.5}))}
 function part(parent,geo,color,x,y,z,sx,sy,sz,glow=false){const mesh=new THREE.Mesh(geo,paint(color,glow));mesh.position.set(x,y,z);mesh.scale.set(sx,sy,sz);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh}
 const box=(p,c,x,y,z,w,h,d,glow=false)=>part(p,cube,c,x,y,z,w,h,d,glow)
 const tube=(p,c,x,y,z,r,h)=>part(p,cylinder,c,x,y,z,r,h,r)
 const metal='#d6cbb7',dark='#343b50',orange='#da8753',mint='#9debd4'
 function label(parent,text,y=2.5){
  const c=document.createElement('canvas');c.width=512;c.height=80;const g=c.getContext('2d')
  g.fillStyle='#253645';g.fillRect(0,0,512,80);g.fillStyle='#e9f1d9';g.font='600 27px system-ui';g.textAlign='center';g.fillText(text,256,50)
  const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(2.4,.375),new THREE.MeshBasicMaterial({map:texture}));mesh.position.set(0,y,.7);parent.add(mesh)
 }
 function ring(parent,r,y,color=mint){const mesh=new THREE.Mesh(new THREE.TorusGeometry(r,.035,8,48),paint(color,true));mesh.rotation.x=Math.PI/2;mesh.position.y=y;parent.add(mesh);return mesh}
 for(const [key,p] of Object.entries(OBJECTS)){
  const g=new THREE.Group();g.position.set(p.x,height(p.x,p.z),p.z);root.add(g)
  const node={group:g,parts:[],kind:p.kind};nodes[key]=node
  if(p.kind==='solar'){
   tube(g,dark,0,.85,0,.16,1.7)
   const pivot=new THREE.Group();pivot.position.y=1.55;g.add(pivot);node.pivot=pivot
   const panel=new THREE.Group();panel.rotation.x=-.7;pivot.add(panel)
   box(panel,metal,0,0,0,3.5,.12,2.4)
   for(let x=0;x<7;x++)for(let z=0;z<5;z++)box(panel,'#233e64',(x-3)*.47,.07,(z-2)*.45,.43,.025,.41)
   const dust=box(panel,'#b68562',0,.10,0,3.35,.015,2.25);dust.material=paint('#b68562').clone();dust.material.transparent=true;node.dust=dust;dust.castShadow=false
   box(g,metal,1.8,.6,1,.9,1.2,.5);box(g,dark,1.8,.92,1.26,.62,.36,.03);box(g,mint,1.8,.92,1.28,.5,.24,.02,true);box(g,orange,1.8,.38,1.26,.3,.1,.03);label(g,p.label,2.8)
   blockers.push({x:p.x,z:p.z,radius:.65})
  }else if(p.kind==='rock'||p.kind==='drill'){
   const stone=new THREE.Group();g.add(stone)
   for(let i=0;i<7;i++){
    const slab=part(stone,new THREE.CylinderGeometry(1,.98,1,7),i%2?'#b88b6c':'#815b50',0,.12+i*.24,0,1.5-i*.07,.27,1.05-i*.025)
    slab.rotation.y=.16+i*.025
   }
   node.stone=stone
   if(p.kind==='drill'){
    const drill=new THREE.Group();drill.position.set(.55,2.2,.3);g.add(drill);node.drill=drill
    box(drill,orange,0,0,0,.38,.55,.38);tube(drill,metal,0,-.58,0,.065,.7)
    for(let i=0;i<6;i++){const bit=ring(drill,.105,-.3-i*.1,metal);bit.rotation.z=.2}
   }
   blockers.push({x:p.x,z:p.z,radius:1.3})
  }else if(p.kind==='weather'||p.kind==='beacon'){
   const instrument=new THREE.Group();g.add(instrument);node.instrument=instrument
   for(let i=0;i<3;i++){
    const leg=tube(instrument,metal,Math.sin(i*2.094)*.4,.55,Math.cos(i*2.094)*.4,.035,1.3)
    leg.rotation.z=Math.cos(i*2.094)*.55;leg.rotation.x=Math.sin(i*2.094)*.55
   }
   tube(instrument,metal,0,1.4,0,.065,1.5);box(instrument,dark,0,1.35,0,.55,.5,.4)
   const rotor=new THREE.Group();rotor.position.y=2.25;instrument.add(rotor);node.rotor=rotor
   box(rotor,metal,0,0,0,1.1,.04,.04)
   for(const x of [-.5,.5])part(rotor,new THREE.SphereGeometry(.12,12,8),orange,x,0,0,1,.5,1)
   ring(instrument,.23,1.8);label(g,p.label,2.7)
   instrument.scale.y=.25
  }else if(p.kind==='antenna'){
   tube(g,metal,0,1,0,.15,2);box(g,dark,0,.4,0,1.3,.8,1.2)
   const pivot=new THREE.Group();pivot.position.y=2.1;g.add(pivot);node.pivot=pivot
   const dish=part(pivot,new THREE.SphereGeometry(1,24,12,0,Math.PI*2,0,.95),metal,0,0,0,1.1,.4,1.1)
   dish.rotation.x=Math.PI/2+.45
   const arm=tube(pivot,orange,0,.2,.6,.04,1.4);arm.rotation.x=Math.PI/2
   box(pivot,mint,0,.2,1.2,.2,.18,.15,true);label(g,p.label,3.5)
   blockers.push({x:p.x,z:p.z,radius:.8})
  }else if(p.kind==='gate'){
   for(const x of [-3,3]){tube(g,metal,x,1.4,0,.07,2.8);box(g,mint,x,2.5,0,.12,.65,.12,true);box(g,orange,x,.45,0,.3,.5,.3)}
   label(g,p.label,3.2)
  }else if(p.kind==='crate'||p.kind==='filter'){
   box(g,dark,0,.4,0,1.2,.8,.9);box(g,metal,0,.84,0,1.25,.08,.95)
   const item=new THREE.Group();item.position.y=1.15;g.add(item);node.item=item
   tube(item,orange,0,0,0,.22,.5);ring(item,.23,.15);ring(item,.23,-.15)
   label(g,p.label,1.9)
  }else if(p.kind==='valve'){
   const wheel=new THREE.Group();wheel.position.set(0,1.2,.7);g.add(wheel);node.pivot=wheel
   const rim=new THREE.Mesh(new THREE.TorusGeometry(.35,.045,8,32),paint(orange));wheel.add(rim)
   box(wheel,metal,0,0,0,.65,.045,.045);box(wheel,metal,0,0,0,.045,.65,.045)
   tube(g,mint,.7,1,.6,.1,1.8)
  }else if(p.kind==='machine'){
   const tank=tube(g,mint,.9,.7,.65,.13,.8);node.tank=tank
   for(let i=0;i<5;i++)box(g,dark,-.7,1.3+i*.09,.65,.35,.04,.07)
  }else if(p.kind==='lab'){
   box(g,metal,0,.65,0,1.8,1.3,1);box(g,dark,0,1.33,0,1.75,.08,1)
   const sample=part(g,new THREE.IcosahedronGeometry(.25,1),'#a17e64',0,1.58,0,1.7,.6,1)
   node.stone=sample
   const arm=box(g,orange,-.5,1.8,-.3,.12,.9,.12);box(g,orange,-.25,2.2,-.3,.6,.12,.12);label(g,p.label,2.65)
  }
  if(!['door','rover','gate'].includes(p.kind)){
   node.meter=new THREE.Group();node.meter.position.set(0,.14,1.15);g.add(node.meter)
   for(let i=0;i<12;i++)node.parts.push(box(node.meter,dark,(i-5.5)*.09,0,0,.065,.07,.08))
  }
 }
 // A six-wheel rover with suspension, camera mast, instrument deck and cargo rack.
 const rover=nodes.rover.group;nodes.rover.wheels=[]
 box(rover,metal,0,.9,0,1.7,.65,2.5);box(rover,orange,0,1.25,.6,1.5,.16,.85)
 box(rover,dark,0,1.3,-.55,1.4,.12,1.15)
 for(let i=0;i<5;i++)box(rover,'#536988',(i-2)*.26,1.37,-.55,.23,.025,1.05)
 tube(rover,metal,0,1.9,-.9,.075,1.1);box(rover,dark,0,2.45,-.9,.7,.28,.28)
 for(const x of [-.19,.19]){const lens=tube(rover,'#a2daca',x,2.45,-1.07,.075,.08);lens.rotation.x=Math.PI/2}
 for(const x of [-1,1])for(const z of [-.9,0,.9]){
  const wheel=tube(rover,dark,x,.43,z,.42,.28);wheel.rotation.z=Math.PI/2;nodes.rover.wheels.push(wheel)
  for(let i=0;i<10;i++){const tread=box(wheel,'#64636b',Math.sin(i*Math.PI/5)*.99,0,Math.cos(i*Math.PI/5)*.99,.12,1.1,.10);tread.rotation.y=i*Math.PI/5}
 }
 const carried=new THREE.Group();root.add(carried);tube(carried,orange,0,0,0,.19,.45);ring(carried,.2,.15);carried.visible=false
 const marker=new THREE.Group();root.add(marker);ring(marker,1.8,.06);const pin=tube(marker,mint,0,2.9,0,.045,.65)
 const scan=new THREE.Mesh(new THREE.ConeGeometry(.8,2,24,1,true),new THREE.MeshBasicMaterial({color:mint,transparent:true,opacity:.17,depthWrite:false,side:THREE.DoubleSide}));root.add(scan)
 const droplets=new THREE.Group();root.add(droplets)
 for(let i=0;i<16;i++)part(droplets,new THREE.SphereGeometry(.035,6,4),'#b7edff',0,0,0,1,1,1,true)
 const brush=box(root,orange,0,0,0,.7,.13,.22);brush.visible=false
 const route=new THREE.Group();root.add(route)
 const flagGeo=new THREE.ConeGeometry(.12,.4,3)
 // Trail lamps help navigation without covering the landscape with screen UI.
 const trail=[[-2,-5],[3,5],[15,14],[27,20],[40,16],[49,4],[47,-11],[36,-31],[24,-31],[-16,16],[-29,27],[-40,15],[-30,-7],[-33,-23]]
 for(const [x,z] of trail){tube(route,dark,x,height(x,z)+.38,z,.035,.7);part(route,flagGeo,mint,x,height(x,z)+.8,z,1,1,1,true)}
 // Batch fixed hardware by material. Moving parts retain their own transforms.
 scene.updateMatrixWorld(true)
 for(const node of Object.values(nodes)){
  const movable=new Set([node.pivot,node.instrument,node.drill,node.meter,node.item,node.dust,node.tank,...(node.wheels||[])].filter(Boolean))
  const groups=new Map(),inverse=node.group.matrixWorld.clone().invert()
  node.group.traverse(mesh=>{
   if(!mesh.isMesh||mesh.material.map)return
   for(let parent=mesh;parent&&parent!==node.group;parent=parent.parent)if(movable.has(parent))return
   const list=groups.get(mesh.material)||[];list.push(mesh);groups.set(mesh.material,list)
  })
  for(const [material,meshes] of groups){
   if(meshes.length<2)continue
   const copies=meshes.map(mesh=>{const g=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone();g.applyMatrix4(inverse.clone().multiply(mesh.matrixWorld));return g})
   const geometry=mergeGeometries(copies);copies.forEach(g=>g.dispose())
   if(!geometry)continue
   const batch=new THREE.Mesh(geometry,material);batch.castShadow=true;batch.receiveShadow=true;node.group.add(batch)
   meshes.forEach(mesh=>mesh.removeFromParent())
  }
 }
 const gemShape=new THREE.OctahedronGeometry(.44),gemPaint=new THREE.MeshStandardMaterial({color:'#bff5e6',emissive:'#7fe6cf',emissiveIntensity:1.1,roughness:.2,metalness:.1})
 const gems=GEMS.map(p=>{const mesh=new THREE.Mesh(gemShape,gemPaint);mesh.position.set(p.x,height(p.x,p.z)+1.1,p.z);mesh.scale.set(1,1.5,1);root.add(mesh);return mesh})
 return {root,blockers,rover,
  update({mission,completed,progress,angle,quality,working,carrying,driving,state,heading,speed,time,gems:taken=[]}){
   root.visible=true
   gems.forEach((mesh,i)=>{mesh.visible=!taken.includes(i)&&state.x<150;if(mesh.visible){mesh.rotation.y=time*1.6+i;mesh.position.y=height(GEMS[i].x,GEMS[i].z)+1.1+Math.sin(time*2+i)*.14}})
   const active=mission&&OBJECTS[mission.target]
   marker.visible=Boolean(active);scan.visible=false;droplets.visible=false;brush.visible=false
   if(active){marker.position.set(active.x,height(active.x,active.z),active.z);marker.rotation.y=time*.12;pin.position.y=2.9+Math.sin(time*2)*.12}
   for(const [key,node] of Object.entries(nodes)){
    const p=OBJECTS[key],isActive=mission?.target===key
    node.group.visible=(p.x>150)===(state.x>150)
    const done=completed.some(id=>id===({'solar':'aim-panel',beacon:'trail-beacon',weather:'crater-weather',ridge:'ridge-weather',relay:'relay-repair',core:'core-drill',oxygen:'make-oxygen',summit:'earth-report'}[key]))
    if(node.instrument)node.instrument.scale.y=done?1:isActive&&working?.25+.75*progress:.25
    if(node.rotor)node.rotor.rotation.y=time*2
    if(node.pivot)node.pivot.rotation[key==='waterValve'?'z':'y']=isActive?angle:done?1.05:0
    if(node.dust)node.dust.material.opacity=completed.includes('dust-panel')?0:isActive?1-progress:1
    if(node.drill){node.drill.position.y=2.2-(isActive?progress:done?1:0)*.6;node.drill.rotation.y=working&&isActive?time*18:0}
    if(node.item)node.item.visible=!completed.includes(key==='filter'?'get-filter':'collect-cache')
    if(node.tank)node.tank.scale.y=.1+.7*(done?1:isActive?progress:0)
    node.parts.forEach((piece,i)=>piece.material=paint(i/12<(isActive?mission.kind==='align'?quality:progress:done?1:0)?mint:dark,true))
    if(isActive&&working){
     if(['scan','drill','process','repair','install'].includes(mission.kind)){
      scan.visible=true;scan.position.set(p.x,height(p.x,p.z)+2.15,p.z);scan.rotation.z=Math.PI;scan.rotation.y=time*2;scan.scale.setScalar(.8+Math.sin(time*3)*.1)
     }
     if(mission.kind==='clean'){brush.visible=true;brush.position.set(p.x+Math.sin(time*5)*1.3,height(p.x,p.z)+1.8,p.z+.4);brush.rotation.y=angle}
     if(mission.kind==='water'){
      droplets.visible=true;droplets.position.set(p.x,1.6,p.z-.3)
      droplets.children.forEach((drop,i)=>drop.position.set(Math.sin(i*2)*.15,.6-((time*1.2+i*.05)%.7),Math.cos(i*3)*.15))
     }
    }
   }
   if(driving){rover.position.set(state.x,height(state.x,state.z),state.z);rover.rotation.y=heading;nodes.rover.wheels.forEach(w=>w.rotation.y+=speed*.02)}
   carried.visible=Boolean(carrying)&&state.x<150
   if(carried.visible){carried.position.set(state.x-Math.cos(state.yaw)*.65,height(state.x,state.z)+1.15,state.z-Math.sin(state.yaw)*.65)}
   if(carrying&&state.x>150){carried.visible=true;carried.position.set(state.x-.65,1.1,state.z)}
  },
 }
}
