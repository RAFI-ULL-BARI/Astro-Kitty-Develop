// Frame-rate independent interaction model shared by the 3D renderer and tests.
export function createFieldMechanic(mission){
 let progress=0,angle=0,quality=0,working=false,finished=false
 return {
  step({dt,near,facing=true,held=false,turn=0,pulse=false,driving=false}){
   dt=Math.max(0,Math.min(.1,Number.isFinite(dt)?dt:0));working=false
   if(finished||!mission)return
   if(near){angle=Math.max(-Math.PI,Math.min(Math.PI,angle+turn*dt*1.15))}
   if(near&&!turn&&mission.kind==='align'&&Math.abs(angle-mission.angle)<.11)angle=mission.angle
   quality=mission.kind==='align'?Math.max(0,1-Math.abs(angle-mission.angle)/1.5):1
   if(mission.kind==='drive'){
    if(near&&driving){progress=1;finished=true}return
   }
   if(['board','pickup','exit'].includes(mission.kind)){
    if(near&&(pulse||held)){progress=1;finished=true}return
   }
   working=near&&held&&(mission.kind!=='scan'||facing)&&(mission.kind!=='align'||quality>=.96)
   if(working)progress=Math.min(1,progress+dt/mission.seconds)
   finished=progress>=1
  },
  get status(){return {progress,angle,quality,working,finished}},
 }
}
