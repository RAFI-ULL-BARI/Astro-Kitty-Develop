import {t} from './strings.js?v=10';
import {round,oval,stroke,poly,gradient,labRoom,botanical,roomLight} from './scene-kit.js?v=10';
export const SOL_ROOMS=['lounge','garden','lifeSupport','workshop','control'];
/** Presentation only: no RNG draws, effects or save mutations. */
export function solRoom(mission,kind,scene){
 if(!mission||!['film','brief','plan','summary'].includes(kind)||['warning','monitor'].includes(scene))return null;
 return SOL_ROOMS[Math.min(4,Math.max(0,(mission.sol||1)-1))];
}
export function drawSolRoom(c,room,time=0){
 const index=SOL_ROOMS.indexOf(room),kind=['gravity','garden','chemistry','rover','float'][index]||'gravity';
 c.save();c.scale(1280/1100,1280/1100);round(c,0,0,1100,620,'#414b67',0);labRoom(c,kind,time);round(c,0,539,1100,81,gradient(c,0,539,0,620,'#414b67','#293c54'),0);
 if(room==='control')round(c,816,91,230,102,'#354b68',18);
 const text=(s,x,y,n=16)=>{c.fillStyle='#fff1db';c.font=`700 ${n}px Nunito,system-ui`;c.textAlign='center';c.fillText(s,x,y);};
 // The same round portholes and Mars landscape tie every room to our habitat.
 if(room!=='garden')for(const x of[260,550,840]){
  oval(c,x,173,65,65,'#b8bed2');oval(c,x,173,56,56,'#ae8393');
  c.save();c.beginPath();c.arc(x,173,55,0,Math.PI*2);c.clip();
  poly(c,[[x-60,195],[x-22,155],[x+8,186],[x+35,161],[x+65,197],[x+65,237],[x-65,237]],'#786882');
  poly(c,[[x-65,213],[x+15,194],[x+65,211],[x+65,237],[x-65,237]],'#d1a18c');c.restore();
 }
 round(c,350,75,400,37,'#283c56',14);text(t('solRoom'+(index+1)),550,100,20);
 if(room==='lounge'){
  for(const x of[197,705]){round(c,x,306,190,94,'#988aa8',23);round(c,x+12,291,166,64,'#b6a6bd',22);round(c,x+12,346,166,28,'#c7b1c6',12);}
  oval(c,550,349,90,23,'#d4b5a4');stroke(c,[[550,350],[550,420]],'#8f8fa6',12);oval(c,550,420,51,8,'#61718a');
  round(c,510,319,27,24,'#a9decb',7);round(c,558,323,30,17,'#bba7df',5);
 }else if(room==='garden'){
  for(let i=0;i<5;i++){const x=220+i*165;round(c,x-48,374,96,50,'#bd948e',13);botanical(c,['Lettuce','Bean','Basil','Tomato','Lettuce'][i],x,377,.8,time);}
  round(c,176,124,748,8,'#dab1e4',4);round(c,176,132,748,7,'#dfb3ef22',4);
 }else if(room==='lifeSupport'){
  for(const x of[195,770]){round(c,x,272,128,149,'#b3bdcf',19);round(c,x+13,285,102,77,'#304861',12);}
  oval(c,260,326,30,30,'#93b7c7');for(let j=0;j<4;j++){const a=time*.4+j*Math.PI/2;stroke(c,[[260,326],[260+Math.cos(a)*24,326+Math.sin(a)*24]],'#dde7e4',7);}
  round(c,369,271,57,151,'#9ac2c1',21);text(t('roomAir'),397,340,24);
  round(c,491,294,133,125,'#9abfc7',23);round(c,503,329,109,69,'#74a7b5',14);text(t('roomWater'),557,370,24);
  stroke(c,[[425,306],[477,306],[477,350],[491,350]],'#c0dcd6',9);
  for(let i=0;i<4;i++)oval(c,814+i*15,325,3,3,i%2?'#a9decb':'#e8bd97');
 }else if(room==='workshop'){
  round(c,189,346,365,19,'#c7a88e',8);for(const x of[219,511])round(c,x,365,13,58,'#9199af',5);
  round(c,241,283,245,61,'#bdc5d5',19);for(const x of[265,460]){oval(c,x,342,26,26,'#34445f');oval(c,x,342,13,13,'#91a3ba');}
  stroke(c,[[366,284],[366,245],[407,230]],'#c7d0dc',6);round(c,670,277,198,137,'#8e9db7',20);round(c,687,296,163,53,'#293f58',12);
  for(let i=0;i<3;i++)round(c,704+i*44,310,29,26,'#a9decb',5);text(t('roomBattery'),770,386);
 }else{
  round(c,304,251,494,148,'#acb7cf',24);round(c,321,267,460,105,'#253d57',17);
  for(let j=0;j<3;j++){const x=348+j*147;stroke(c,[[x,341],[x+22,322],[x+45,335],[x+68,297],[x+98,317]],['#a9decb','#c8b1e7','#edbe9e'][j],3);}
  round(c,804,302,108,113,'#a8b5cb',17);stroke(c,[[858,303],[858,249],[884,230]],'#d0d4e2',4);oval(c,858,341,21,21,'#344b66');oval(c,858,341,11,11,'#a9decb');text(t('roomRadio'),858,393);
 }
 roomLight(c);c.restore();
}
