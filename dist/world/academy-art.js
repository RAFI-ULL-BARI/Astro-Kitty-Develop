import {prepareCanvas,easeInOut,easeOut,ARRIVAL_CHAPTERS,arrivalChapter,createSceneDissolve} from './visual-core.js?v=10';
import {labRoom,roomLight,botanical,gradient,shadow,campusExterior,round as rounded,tree as sceneryTree} from './scene-kit.js?v=10';
import {drawMissionCharacter} from './art.js?v=10';
import {NODES,OBSTACLES,OBJECTS,dropDistance,NEEDS} from './academy-model.js?v=10';
let c;const TAU=Math.PI*2;
function setup(canvas,w=1100,h=540){c=prepareCanvas(canvas,w,h);}
export function box(x,y,w,h,color,r=10){c.fillStyle=color;c.beginPath();c.roundRect(x,y,w,h,r);c.fill();}
function circle(x,y,r,color){c.fillStyle=color;c.beginPath();c.arc(x,y,r,0,TAU);c.fill();}
function line(x,y,X,Y,color='#98b9a9',width=3){c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.beginPath();c.moveTo(x,y);c.lineTo(X,Y);c.stroke();}
function text(t,x,y,size=20,color='#f5ecd5',align='center'){c.fillStyle=color;c.font=`600 ${size}px system-ui`;c.textAlign=align;c.fillText(t,x,y);}
function path(points,color,stroke=null,width=2){c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();if(color){c.fillStyle=color;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}}
function ellipse(x,y,rx,ry,color,rotation=0){c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,rotation,0,TAU);c.fill();}
function glow(x,y,r,color){const g=c.createRadialGradient(x,y,1,x,y,r);g.addColorStop(0,color);g.addColorStop(1,'transparent');circle(x,y,r,g);}
function cat(x,y,scale,mood='calm',suit=false,t=0){drawMissionCharacter(c,{x,y:y+98*scale,scale:scale*1.5,clock:t,casual:!suit,happy:mood==='happy',worried:mood==='worried',pose:mood==='wow'?'work':mood==='happy'?'celebrate':mood==='think'?'think':'idle'});}
function bot(x,y,t,scale=1){drawMissionCharacter(c,{type:'dhrubo',x,y:y+18*scale,scale:scale*1.6,clock:t});}
function wall(t=0,kind='lab'){labRoom(c,kind,t);}
function arrow(x,y,dy,color){line(x,y,x,y+dy,color,6);if(dy){line(x,y+dy,x-8,y+dy-Math.sign(dy)*12,color,5);line(x,y+dy,x+8,y+dy-Math.sign(dy)*12,color,5);}}
function drop(x,y,size=8,color='#80d4ee'){c.fillStyle=color;c.beginPath();c.moveTo(x,y-size);c.bezierCurveTo(x-size*1.5,y+size,x+size*1.5,y+size,x,y-size);c.fill();}
function molecule(x,y,type,scale=1){c.save();c.translate(x,y);c.scale(scale,scale);if(type==='water'){line(-17,15,0,0,'#d4e5de',4);line(17,15,0,0,'#d4e5de',4);circle(0,0,14,'#ee8b7d');circle(-18,15,9,'#eaf1df');circle(18,15,9,'#eaf1df');text('O',0,5,12,'#653939');text('H',-18,19,8,'#31565e');text('H',18,19,8,'#31565e');}else{line(-12,0,12,0,'#d4e5de',5);for(const dx of [-12,12]){circle(dx,0,type==='oxygen'?14:10,type==='oxygen'?'#ed8b7a':'#eaf1df');text(type==='oxygen'?'O':'H',dx,5,12,type==='oxygen'?'#613c3b':'#31565e');}}c.restore();}
export function drawObject(id,x,y,scale=1,t=0){c.save();c.translate(x,y);c.scale(scale,scale);if(id==='hammer'){box(-5,-8,10,45,'#bd8a55',4);box(-24,-24,48,21,'#aec1bd',5);box(-20,-24,8,21,'#e2eadd',2);}if(id==='feather'){c.rotate(-.35+Math.sin(t)*.04);ellipse(0,-5,12,33,'#e9d3a8');line(0,-29,0,37,'#a68d61',2);for(let i=0;i<5;i++)line(0,-20+i*10,9,-27+i*10,'#c0a782',1);}if(id==='ball'){circle(0,0,23,'#d99564');line(-21,0,21,0,'#744b3a',2);ellipse(0,0,11,23,'#e9aa7377');}if(id==='paper'){path([[-22,-25],[21,-20],[26,25],[-19,20]],'#e8eadb','#b4c4bb');for(let i=0;i<4;i++)line(-12,-12+i*8,12,-9+i*8,'#a8b5ac',1);}if(id==='rock')path([[-24,13],[-17,-14],[5,-23],[26,-4],[18,22]],'#8f9e9a','#5b746f',3);if(id==='bottle'){box(-13,-17,26,45,'#8bced6bb',8);box(-8,-30,16,17,'#b4dad9',4);box(-9,-32,18,7,'#dfa965',2);box(-11,3,22,21,'#5ca7bb',4);}c.restore();}
function dome(x,y,w=160){box(x,y,w,68,'#d6d3bc',15);c.fillStyle='#d6d3bc';c.beginPath();c.ellipse(x+w/2,y,w/2,50,0,Math.PI,TAU);c.fill();box(x+w*.38,y+8,w*.24,60,'#31535a',7);for(let i=0;i<3;i++)box(x+13+i*(w-40)/3,y-13,20,15,'#709c9d',3);}
function lifeSupportLab(t,s){
 // Bench instruments are background art and stay clear of interactive ports.
 box(302,23,399,22,'#2c3049',6);
 box(318,41,367,5,'#b7d6e3',3);
 path([[324,46],[680,46],[729,232],[271,232]],'#c0daf40b');
 line(64,93,249,93,'#7186a5',9);line(249,93,249,182,'#7186a5',9);
 line(64,91,249,91,'#b9c6df',2);
 box(72,136,147,68,'#293952',10);
 const trace=Array.from({length:17},(_,i)=>[83+i*7.8,168+Math.sin(i*1.25+t*1.5)*Math.cos(i*.32)*13]);
 path(trace,null,'#a7d9cb',2);
 for(const x of [77,130,188]){
  box(x,224,34,66,'#778da7',9);
  box(x+3,230,28,50,gradient(c,x,230,x+34,282,'#a4c4d7','#416076'),7);
  box(x+9,219,16,10,'#bdc4df',3);
  for(let k=0;k<3;k++)line(x+18,241+k*10,x+26,241+k*10,'#c3dde6',1);
  ellipse(x+13,257,2,3,'#d3f5ec88');
 }
 box(55,294,185,12,'#8e97ae',4);
 for(let i=0;i<5;i++)circle(742+i*17,137,3,i<(s.busy?5:2)?'#b8e1c9':'#78809d');
}
function plant(name,x,y,g,t){botanical(c,name,x,y,g,t);}
export function drawLab(canvas,id,s,time,reduced){setup(canvas);const t=reduced?0:time;wall(t,id);if(id==='chemistry')lifeSupportLab(t,s);const mood=s.cheer>0?'happy':s.error>0?'worried':s.busy?'wow':'calm';
if(id==='float'){text('NEUTRAL BUOYANCY POOL',355,73,20,'#a8e1d3');shadow(c,421,476,356,19,.24);box(75,95,690,380,gradient(c,75,95,765,475,'#b8ced4','#718ba3','#bdc6d6'),26);box(83,103,674,363,'#d8e4e255',20);box(92,111,656,346,'#1e6b7f',15);const water=c.createLinearGradient(0,130,0,460);water.addColorStop(0,'#4b9cc4b8');water.addColorStop(1,'#254b71');box(99,130,642,319,water,8);for(let i=0;i<6;i++)line(113+i*110,138,113+i*110,443,'#5cb0b144',1);for(let y=180;y<450;y+=55)line(104,y,734,y,'#7bc8c125',2);for(let k=0;k<12;k++){const x=130+k*49,yy=181+Math.sin(t*.8+k*.7)*23;c.save();c.globalAlpha=.08;c.strokeStyle='#d2fff1';c.lineWidth=2;c.beginPath();c.ellipse(x,yy,26,9,Math.sin(k+t*.3)*.3,0,TAU);c.stroke();c.restore();}for(let i=0;i<18;i++)circle(125+i*34,440-((t*27+i*37)%295),2+i%4,'#b8e6dc88');const bob=Math.sin(t*2.5)*4;c.save();const reach=Math.min(1,(s.repairTime||0)/.8);c.translate(425+reach*195,s.y+bob+reach*60);c.rotate(Math.sin(t*1.5)*.045);cat(0,0,.9,mood,true,t);c.restore();c.fillStyle='#75bdcc22';c.beginPath();c.moveTo(100,135);for(let x=100;x<=740;x+=8)c.lineTo(x,135+Math.sin(x*.035+t*2)*5);c.lineTo(740,450);c.lineTo(100,450);c.fill();c.beginPath();for(let x=100;x<=740;x+=8){const y=135+Math.sin(x*.035+t*2)*5;x===100?c.moveTo(x,y):c.lineTo(x,y);}c.strokeStyle='#b5eeea';c.lineWidth=4;c.stroke();arrow(580,255,-(s.base+s.floats)*15,'#9ee8c0');arrow(627,255,s.weights*15,'#f3ba7c');text('UP',580,104,14);text('DOWN',637,425,14);box(670,320,45,95,'#c5c9df',7);if(s.round%3===0){line(692,320,692,267,'#bbcfc9',7);line(692,267,692+(s.repaired?35:10),240,'#efd494',7);}else if(s.round%3===1){circle(692,317,28,'#7ca5bf');const a=s.repaired?Math.PI/2:s.busy?s.repairTime:0;for(let j=0;j<4;j++){const b=a+j*Math.PI/2;line(692,317,692+Math.cos(b)*24,317+Math.sin(b)*24,'#efc38f',5);}}else{box(680,288,24,34,s.repaired?'#a9e5d1':'#445976',5);if(s.busy||s.repaired)box(647+Math.min(1,(s.repairTime||0)/1.6)*34,296,20,12,'#efb59c',3);}if(s.busy){line(645,305,681,306+Math.sin(t*9)*6,'#e8e1ef',5);circle(680,307,5,'#f3cf96');}line(45,110,45,390,'#b4cbbf',7);line(67,110,67,390,'#b4cbbf',7);for(let y=150;y<390;y+=40)line(45,y,67,y,'#cadac8',5);path([[108,151],[158,151],[375,449],[326,449]],'#e2f7f714');line(104,156,104,426,'#ecffff55',3);bot(925,292,t,1.25);text('SUPPORT TEAM',925,433,17,'#b4d7c8');box(835,203,178,50,'#22444c',10);text(s.net===0?'FORCES BALANCED':s.net>0?'FLOATING UP':'SINKING DOWN',924,235,14,s.net===0?'#abecc7':'#efc88e');}
if(id==='rover'){box(26,63,1048,423,'#9c91ad',20);const sand=c.createLinearGradient(0,70,0,480);sand.addColorStop(0,'#c3957f');sand.addColorStop(1,'#eabb91');box(39,75,1022,397,sand,15);for(let i=0;i<240;i++){const x=50+(i*179)%1000,y=88+(i*79)%370;circle(x,y,1+i%2,i%3?'#ac885b55':'#e1c39155');}for(let x=48;x<1060;x+=53){line(x,64,x,89,'#e4ddbd',3);line(x,478,x,493,'#a9b7a4',3);}line(40,70,1060,70,'#dfdbc1',3);box(385,80,330,36,'#fff0dbbb',14);text(s.yard.title.toUpperCase(),550,103,15,'#51465e');dome(s.yard.nodes[7].x-48,s.yard.nodes[7].y-8,96);for(const o of s.yard.obstacles){ellipse(o.x,o.y+o.r*.7,o.r*1.2,o.r*.5,'#735c4244');path([[o.x-o.r,o.y+15],[o.x-o.r*.7,o.y-22],[o.x+6,o.y-o.r],[o.x+o.r,o.y-6],[o.x+o.r*.7,o.y+o.r*.7]],'#827d68','#696a5a',3);line(o.x-12,o.y-25,o.x+13,o.y+3,'#a5a08a',3);}for(let i=1;i<s.route.length;i++){const a=s.yard.nodes[s.route[i-1]],b=s.yard.nodes[s.route[i]];line(a.x,a.y,b.x,b.y,'#dff3cd',7);line(a.x,a.y,b.x,b.y,'#357469',3);}s.yard.nodes.forEach((p,i)=>{circle(p.x,p.y,23,s.route.includes(i)?'#367366':'#f0d7a8');circle(p.x,p.y,17,s.route.includes(i)?'#a0ddbc':'#bd9764');text(String(i+1),p.x,p.y+6,17,'#24483e');if(p.flag){const collected=s.collected?.includes(i);c.save();c.globalAlpha=collected?.4:1;line(p.x+25,p.y-3,p.x+25,p.y-44,'#eff1db',3);path([[p.x+25,p.y-44],[p.x+53,p.y-37+Math.sin(t*4)*3],[p.x+25,p.y-26]],collected?'#a9decb':'#eabf55');c.restore();if(collected)text('✓',p.x+41,p.y-34,21,'#365c54');}});const p=s.rover;shadow(c,p.x+6,p.y+16,43,15,.24);c.save();c.translate(p.x,p.y);c.rotate(p.angle||0);for(const y of [-22,22])for(const x of [-21,0,21]){box(x-7,y-6,14,12,'#263b3c',4);line(x-5,y-4+(s.busy?Math.sin((s.distance||0)*.22)*3:0),x+5,y+3,'#6e8d84',2);}box(-32,-19,64,38,'#e6e5ca',10);box(-15,-15,27,30,'#628b91',5);line(15,0,38,0,'#dce2c9',5);circle(38,0,6,'#3c5f66');line(-15,0,-15,-42,'#a2c7bd',3);box(-23,-49,18,13,'#385d62',3);c.restore();if(s.busy)for(let i=0;i<8;i++)circle(p.x-30-(t*18+i*8)%40,p.y+Math.sin(i)*18,2+i%4,'#d8c29866');cat(1040,350,.65,mood,false,t);}
if(id==='garden'){
for(let i=0;i<3;i++){const x=[245,550,845][i],p=s.garden.plants[i],g=s.health[i],fixed=g>.92;
// Suspended individual task lamps and open growing benches.
line(x-47,72,x-47,143,'#b4c4d288',2);line(x+47,72,x+47,143,'#b4c4d288',2);
const lampOn=p.need!=='lamp'||s.plants[i]>0;box(x-67,138,134,14,gradient(c,x,138,x,153,'#d8d7e4','#8b96ad'),6);box(x-55,151,110,5,lampOn?'#f5dca8':'#56627b',2);
if(lampOn)path([[x-53,157],[x-104,350],[x+104,350],[x+53,157]],'#ffe0a315');
shadow(c,x,394,91,12,.25);box(x-99,382,198,18,gradient(c,0,382,0,401,'#d8c7c4','#99899e'),7);line(x-83,400,x-83,443,'#8b8da5',6);line(x+83,400,x+83,443,'#8b8da5',6);line(x-82,429,x+82,429,'#6f7893',4);
box(x-43,329,86,54,gradient(c,x-43,0,x+43,0,'#b6766d','#e2ad8e','#b98079'),12);box(x-49,323,98,18,gradient(c,x-49,0,x+49,0,'#c58e7b','#f0c2a0'),6);ellipse(x,329,42,7,g>.4?'#544441':'#81624e');for(let j=0;j<9;j++)circle(x-32+j*8,329+Math.sin(j*3)*2,1.3,'#ba947066');
plant(p.name,x,327,g,t+i);
box(x-90,95,180,28,'#20324ce8',12);text(p.name,x,115,16,'#f4e2d1');
box(x-110,449,220,48,'#1c2f48',14);circle(x-87,473,5,fixed?'#a9decb':'#efb59c');text(fixed?'Happy plant':s.plants[i]>=p.amount?'Getting stronger':NEEDS[p.need].hint,x+6,470,16,fixed?'#a9e5d1':'#efc6ad');if(!fixed&&s.plants[i]<p.amount)text(String(Math.max(0,p.amount-s.plants[i]))+' × '+NEEDS[p.need].label,x+6,488,12,'#c6d4df');
if(p.need==='fan'&&!fixed)for(let j=0;j<3;j++){c.beginPath();c.moveTo(x+72+j*8,277);c.bezierCurveTo(x+63+j*8,265,x+84+j*8,256,x+73+j*8,245);c.strokeStyle='#f1bcae88';c.lineWidth=2;c.stroke();}
if(p.need==='drain'&&!fixed)box(x-37,333,74,9,'#88bdd1bb',3);
if(s.pour?.index===i){const a=s.pour.age,item=s.pour.item,entry=easeOut(a/.35),exit=easeOut((a-1.65)/.35);c.save();c.globalAlpha=entry*(1-exit);c.translate((1-entry)*-35,0);
if(item==='water'){c.save();c.translate(x-65,231);c.rotate(.35+Math.sin(Math.min(a,1.5)*2)*.12);box(-29,-18,52,36,gradient(c,-27,-18,24,20,'#b6d6df','#7eafc6'),10);c.strokeStyle='#bfd8df';c.lineWidth=5;c.beginPath();c.arc(-26,0,18,Math.PI/2,Math.PI*1.5);c.stroke();path([[22,-8],[51,-20],[52,-12],[24,8]],'#b6d6df');c.restore();for(let j=0;j<10;j++)drop(x-17+j%3*3,249+(a*180+j*16)%74,3);}
if(item==='nutrient'){c.save();c.translate(x-49,231);c.rotate(.45);box(-15,-25,30,48,gradient(c,-15,0,15,0,'#b7a3dd','#dfc9ed'),8);box(-12,-28,24,9,'#f1d5b4',3);text('+',0,6,20,'#716188');c.restore();for(let j=0;j<9;j++)circle(x-20+j%3*7,251+(a*155+j*12)%72,2.5,'#e2d9a2');}
if(item==='lamp'){glow(x,154,110,'#f8d29655');for(let j=0;j<4;j++)line(x-38+j*25,166,x-38+j*25,181+Math.sin(t*3+j)*4,'#f7dfb777',2);}
if(item==='fan'){circle(x+76,244,28,'#bcc6da');for(let j=0;j<3;j++){const an=t*12+j*TAU/3;ellipse(x+76+Math.cos(an)*10,244+Math.sin(an)*10,17,6,'#6a7d9a',an);}for(let j=0;j<3;j++)line(x+39,226+j*16,x-12,226+j*16,'#b7dfea88',2);}
if(item==='drain')for(let j=0;j<6;j++)drop(x+51,340+(a*95+j*11)%43,4);
c.restore();}
}
cat(78,346,.72,mood==='calm'?'think':mood,false,t);bot(1025,369,t,.56);
}
if(id==='gravity'){const mars=s.world==='mars';box(35,60,1030,410,mars?gradient(c,0,60,0,470,'#535572','#af7e8e','#edb69e'):gradient(c,0,60,0,470,'#6e8da9','#c6c9c4','#a0b59f'),22);if(mars){circle(850,120,30,'#d3a27e');path([[35,310],[170,190],[300,280],[460,240],[640,340],[830,220],[1065,280],[1065,470],[35,470]],'#89677c');path([[35,380],[260,320],[480,405],[790,310],[1065,380],[1065,470],[35,470]],'#b97d56');for(let i=0;i<20;i++)ellipse(70+i*51,430+(i%3)*9,10+i%7,4,'#8a5c48');}else{circle(900,120,35,'#ebd49b');path([[35,325],[175,225],[310,300],[520,205],[720,295],[950,225],[1065,310],[1065,470],[35,470]],'#426c59');box(35,375,1030,95,gradient(c,0,375,0,470,'#94ae96','#6f9185'),0);for(let x=100;x<1100;x+=130)sceneryTree(c,x,385,1.5);}for(let i=0;i<2;i++){const x=385+i*330;shadow(c,x,461,122,10,.18);box(x-115,92,230,356,gradient(c,x-115,0,x+115,0,'#d1e1ef33','#b8d8e50a','#d1e1ef20'),22);path([[x-104,112],[x-77,112],[x+70,430],[x+43,430]],'#eef6ff0b');line(x-110,94,x-110,441,'#b9d1ca',5);line(x+110,94,x+110,441,'#b9d1ca',5);box(x-120,439,240,17,'#45666b',5);box(x-120,92,240,17,'#45666b',5);text(i?'DROP BAY B':'DROP BAY A',x,136,15);for(let j=0;j<5;j++){line(x-105,186+j*62,x-90,186+j*62,'#c8ded1',2);text(String(j)+'m',x-74,191+j*62,11);}const obj=s.pair[i];if(obj){const distance=dropDistance(s.dropTime||0,s.world,s.air,obj);const bottom={hammer:37,feather:37,ball:23,paper:25,rock:22,bottle:28}[obj];drawObject(obj,x,191-bottom+distance*62,1,t);if(distance===4)ellipse(x,445,30,4,'#e7d0a68a');}else{circle(x,266,33,'#d0d9eb14');text('+',x,277,33,'#e5d6bd');text(i?'B':'A',x,318,32,'#e0ce9e');}}cat(140,335,1,mood,false,t);text(mars?'MARS SIMULATOR':'EARTH SIMULATOR',173,97,19);text(s.air?'AIR PRESENT':'VACUUM: NO AIR',175,125,13,'#dbe9cf');shadow(c,600,530,349,9,.2);box(258,478,690,57,gradient(c,0,478,0,535,'#8e86a3','#4b536f'),12);line(275,482,929,482,'#d5ccdf77',2);for(let i=0;i<OBJECTS.length;i++){const o=OBJECTS[i];c.save();c.globalAlpha=s.pair.includes(o.id)?.2:1;drawObject(o.id,310+i*110,502,.57,t);c.restore();}}
if(id==='chemistry'&&s.airRound.id==='oxygen'){text('ECLSS • OXYGEN GENERATOR',550,89,21,'#b9e5d1');shadow(c,500,442,200,13,.25);box(300,108,380,322,gradient(c,300,108,680,430,'#bcc6d8','#7587a6','#b3bed0'),28);line(320,119,655,119,'#e8edf299',2);box(319,125,342,269,gradient(c,0,125,0,394,'#233d57','#132b43'),19);path([[330,136],[354,136],[508,382],[484,382]],'#e8f4ff0b');box(336,145,150,223,'#75aabb44',10);box(505,145,137,223,'#75aabb33',10);text('WATER + ENERGY',410,164,13);c.save();c.globalAlpha=s.split?0:s.busy?Math.max(0,1-s.reaction/3):1;for(let i=0;i<s.water;i++)molecule(410,220+i*85,'water',1.2);c.restore();for(let i=0;i<2;i++)box(350+i*100,177,9,177,s.power?'#e6d18c':'#74969a',3);if(s.power){text('⚡',490,340,30,'#f9d98d');glow(490,305,90,'#ead28e22');}if(s.busy||s.split){for(let i=0;i<15;i++)circle(360+(i*57)%260,365-(t*45+i*24)%180,3+i%4,i%2?'#edac92':'#d7e8d8');const f=s.split?1:Math.min(1,s.reaction/3);if(!s.routed.oxygen)molecule(560,220,'oxygen',f);if(!s.routed.hydrogen){molecule(545,290,'hydrogen',f);molecule(590,335,'hydrogen',f);}}line(660,210,814,210,'#9bc2ba',13);line(660,330,814,365,'#9bc2ba',13);for(const [y,title,col,done]of [[200,'O₂ → CREW','#e99785',s.routed.oxygen],[355,'H₂ → RECOVERY','#d6e7de',s.routed.hydrogen]]){shadow(c,918,y+53,99,7,.2);box(815,y-50,205,100,gradient(c,815,0,1020,0,'#3c5573','#667b97','#3b5471'),22);line(830,y-39,997,y-39,'#c6d8e944',2);box(833,y-29,56,58,done?col:'#142e3b',12);text(title,946,y+7,15);if(done){glow(859,y,40,col+'55');text('✓',860,y+10,25,'#254941');}}for(const flow of s.flows||[]){const f=Math.min(1,flow.age/1.3),sy=flow.gas==='oxygen'?220:330,ey=flow.gas==='oxygen'?200:355;molecule(580+(858-580)*f,sy+(ey-sy)*f,flow.gas,.8);}cat(165,315,1,mood,false,t);box(75,115,180,76,'#284a50',12);text(s.split?'2H₂O → 2H₂ + O₂':'SEALED TEST RIG',165,148,15);text('Virtual chemistry lab',165,171,12,'#bdd5c9');}
if(id==='chemistry'&&s.airRound.id!=='oxygen'){
const scrub=s.airRound.id==='scrub',on=s.busy||s.split; text(s.airRound.name.toUpperCase(),550,87,22,'#e8d9f2');
shadow(c,500,439,218,12,.2);box(290,105,420,324,gradient(c,290,105,710,429,'#acb7cd','#6e7f9d','#a6b3c8'),26);box(310,125,380,281,'#20334e',16);text(scrub?'CO₂ FILTER':'COLD COIL',500,160,16,'#d2bff0');
line(155,245,305,245,'#93a8c3',22);line(695,245,865,245,'#93a8c3',22);
if(s.loaded.includes(scrub?'filter':'coil')){if(scrub){box(470,193,74,166,'#c5b1df',10);for(let j=0;j<6;j++)line(480,209+j*23,534,209+j*23,'#6c608c',5);}else{for(let j=0;j<5;j++){line(454,195+j*28,550,195+j*28,'#aacfe6',9);line(j%2?454:550,195+j*28,j%2?454:550,223+j*28,'#aacfe6',7);}}}else{box(449,191,110,174,'#394762',12);text('+',504,293,42,'#c4b4e6');}
if(s.loaded.includes('fan')){circle(360,268,32,'#abb5d0');for(let j=0;j<3;j++){const a=(on?t*8:0)+j*TAU/3;ellipse(360+Math.cos(a)*13,268+Math.sin(a)*13,22,7,'#435575',a);}}
if(on)for(let i=0;i<15;i++){const u=(t*.2+i/15)%1,x=320+u*345,y=215+(i*23)%115;if(scrub){const xx=Math.min(490,x),alpha=x<490?1:Math.max(.2,1-(x-490)/175);c.save();c.globalAlpha=alpha;circle(xx,y,6,'#efb59c');circle(xx-7,y,3,'#ddd9e9');circle(xx+7,y,3,'#ddd9e9');c.restore();circle(320+((t*.2+i/15+.27)%1)*345,205+(i*27)%140,3,'#a7d3e488');}else{if(x<500)circle(x,y,3,'#b0d9ed77');else drop(570+(i%3)*12,270+(t*45+i*18)%90,4);}}
box(840,188,190,120,'#384c68',18);text(scrub?'CABIN AIR':'COLLECTED WATER',935,217,13);if(scrub){drawMissionCharacter(c,{type:'kitty',x:935,y:296,scale:.75,clock:t,casual:true,happy:s.split});}else{box(899,239,73,48,'#7fa7ca77',9);if(on)box(903,282-Math.min(35,s.reaction*12),65,Math.min(35,s.reaction*12),'#8cc9e5',5);}
if(s.split)text('✓',755,222,37,'#a9e5d1');cat(170,340,.9,mood,false,t);bot(775,370,t,.7);
}
roomLight(c);if(s.delivery){const a=s.delivery.age,f=easeOut(a/.65);c.save();c.globalAlpha=1-easeInOut((a-.65)/.35);const x=220+f*180,y=365-Math.sin(f*Math.PI)*120-f*100;box(x-27,y-24,54,48,'#d7c9ed',12);text({h2o:'H₂O',energy:'⚡',filter:'CO₂',fan:'✺',coil:'❄'}[s.delivery.item],x,y+6,16,'#354c67');c.restore();}if(s.cheer>0&&!reduced){for(let i=0;i<32;i++){const a=2.5-s.cheer;box(550+Math.sin(i*17)*a*200,80+a*100+Math.cos(i*5)*a*75,6,10,['#e6c37f','#95dec5','#da9e91'][i%3],1);}}}
function tree(x,y,scale=1){line(x,y,x,y-40*scale,'#667151',6*scale);circle(x,y-43*scale,23*scale,'#3e7054');circle(x-12*scale,y-30*scale,18*scale,'#527e58');circle(x+12*scale,y-30*scale,18*scale,'#577f5c');}
function building(x,y,w,h,color='#b3c5b0'){box(x,y,w,h,color,7);box(x+8,y+10,w-16,12,'#344e51',3);for(let xx=x+15;xx<x+w-10;xx+=24)for(let yy=y+35;yy<y+h-14;yy+=27)box(xx,yy,14,15,'#527e82',2);}
function centerExterior(time){campusExterior(c,time,.7);cat(560,490,.8,'happy',false,time);bot(651,500,time,.7);}
export function drawHall(canvas,time,reduced=false){
 setup(canvas,1200,500);
 hallArt(reduced?0:time);
}
function hallArt(t){
box(0,0,1200,500,gradient(c,0,0,1200,500,'#352f46','#675365','#514151'),0);
path([[100,0],[1100,0],[980,91],[220,91]],gradient(c,0,0,0,91,'#f0d8c6','#cba497'));for(let x=220;x<1100;x+=130)line(x,0,600+(x-600)*.77,91,'#d8d5e0',4);
path([[204,90],[995,90],[1180,479],[20,479]],'#f6d6aa07');box(31,96,1138,245,'#27374f',18);
box(0,329,1200,346,gradient(c,0,329,0,675,'#927789','#4b4258'),0);for(let x=-200;x<1500;x+=180)line(600+(x-600)*.7,329,x,500,'#e0cad319',1);for(const y of[367,422,491])line(0,y,1200,y,'#dfd1e014',1);
box(310,39,580,43,'#20324cdc',18);text('NATIONAL KITTY SPACE CENTER',600,67,21,'#f9e5cb');
const names=['FLOAT LAB','ROVER YARD','GROW LUNCH','GRAVITY','AIR MAKERS'];for(let i=0;i<5;i++){const x=37+i*235;shadow(c,x+105,340,112,8,.2);box(x,119,212,219,gradient(c,x,119,x+212,338,'#9fa9c2','#c5c9d8','#7f8da9'),21);box(x+10,129,192,197,['#244e6b','#927561','#688579','#586d8a','#49647e'][i],15);box(x+14,103,184,32,'#1c2f48',12);text(names[i],x+106,124,13,'#f5e3cf');
if(i===0){box(x+19,248,174,62,gradient(c,0,248,0,310,'#83c1d0','#3d809f'),7);for(let j=0;j<4;j++)line(x+25,255+j*13,x+188,257+j*13+Math.sin(t+j)*3,'#d1f4e855',1.5);cat(x+106,201,.37,'calm',true,t);}
if(i===1){dome(x+72,213,112);for(let j=0;j<2;j++){const xx=x+38+j*130;shadow(c,xx,304,19,4,.2);path([[xx-17,299],[xx-10,278],[xx+10,282],[xx+18,302]],'#8b7c7e');}}
if(i===2){for(let j=0;j<3;j++){const xx=x+48+j*58;box(xx-19,276,38,29,'#c88e77',6);botanical(c,['Lettuce','Basil','Bean'][j],xx,277,.7,t+j);}}
if(i===3){circle(x+65,194,31,'#81a7bd');circle(x+145,194,26,'#d09b88');drawObject('hammer',x+65,278,.65);drawObject('feather',x+145,278,.65);}
if(i===4){box(x+28,174,156,126,'#9cabc2',16);box(x+38,184,136,101,'#293f58',10);molecule(x+71,218,'water',.85);molecule(x+141,253,'oxygen',.7);}
path([[x+16,137],[x+32,137],[x+126,322],[x+110,322]],'#f5edfa0d');line(x+105,138,x+105,326,'#d7e2ec33',2);circle(x+94,253,3,'#ecd9b8');circle(x+117,253,3,'#ecd9b8');box(x+4,330,204,11,'#b9bac9',4);}
shadow(c,599,444,177,15,.15);box(436,430,328,39,'#c4adcf14',18);cat(539,344,1.02,'happy',false,t);bot(675,363,t,.94);sceneryTree(c,76,452,1);sceneryTree(c,1122,452,1);text('A LITTLE CURIOSITY. A BIG ADVENTURE.',600,484,12,'#d7c9dd');roomLight(c,1200,500);
}

let countryPaths=null;let countries=[];export async function loadMap(){try{countries=await(await fetch('./data/academy-world.json')).json();countryPaths=null;}catch{countries=[];}}
function polygons(f){return f.geometry.type==='Polygon'?f.geometry.coordinates:f.geometry.coordinates.flat();}
function project(lon,lat,cx,cy,scale,lon0=90,lat0=23){const a=(lon-lon0)*Math.PI/180,b=lat*Math.PI/180,d=lat0*Math.PI/180;return[cx+scale*Math.cos(b)*Math.sin(a),cy-scale*(Math.cos(d)*Math.sin(b)-Math.sin(d)*Math.cos(b)*Math.cos(a)),Math.sin(d)*Math.sin(b)+Math.cos(d)*Math.cos(b)*Math.cos(a)>0];}
function geography(){if(countryPaths)return countryPaths;countryPaths=countries.map(f=>{const earth=new Path2D(),map=new Path2D();for(const ring of polygons(f)){const globePoints=ring.map(p=>project(p[0],p[1],0,0,1));if(globePoints.every(p=>p[2])){globePoints.forEach((p,i)=>i?earth.lineTo(p[0],p[1]):earth.moveTo(p[0],p[1]));earth.closePath();}ring.forEach(([lon,lat],i)=>{const x=lon-89.9,y=23.7-lat;i?map.lineTo(x,y):map.moveTo(x,y);});map.closePath();}return{earth,map,home:f.name==='Bangladesh'};});return countryPaths;}
function globe(progress){box(0,0,1200,675,gradient(c,0,0,1200,675,'#172439','#2b3453','#4b4162'),0);for(let i=0;i<80;i++)circle((i*277)%1200,(i*131)%675,i%4===0?1.8:1,'#d9e8db77');const r=232+progress*200,x=600,y=304+progress*15;glow(x,y,r*1.12,'#81c5e33b');circle(x,y,r,gradient(c,x-r,y-r,x+r,y+r,'#699fb7','#30678a','#203e65'));c.save();c.beginPath();c.arc(x,y,r,0,TAU);c.clip();c.save();c.translate(x,y);c.scale(r,r);for(const f of geography()){c.fillStyle=f.home?'#f4d9a0':'#80a791';c.fill(f.earth);c.strokeStyle='#adbea333';c.lineWidth=.001;c.stroke(f.earth);}c.restore();const p=project(89.5403,22.8456,x,y,r);circle(p[0],p[1],6,'#ffe5a2');circle(p[0],p[1],13,'#ffe5a233');const shade=c.createLinearGradient(x-r,y,x+r,y);shade.addColorStop(0,'#0b1c3e99');shade.addColorStop(.55,'#223c4d00');shade.addColorStop(1,'#d4edfa19');box(x-r,y-r,r*2,r*2,shade,0);for(let j=0;j<4;j++){c.strokeStyle='#e8f4ff13';c.lineWidth=1;c.beginPath();c.ellipse(x,y,r*(.2+j*.22),r,0,0,TAU);c.stroke();}c.restore();c.strokeStyle='#acd8ed55';c.lineWidth=3;c.beginPath();c.arc(x,y,r+2,0,TAU);c.stroke();}
function bangladesh(progress){box(0,0,1200,675,gradient(c,0,0,1200,675,'#2d3b58','#4d526b','#4a405d'),0);const scale=75+progress*30; c.save();c.translate(650,300);c.scale(scale,scale);for(const f of geography()){c.fillStyle=f.home?'#9bb89e':'#526e7b';c.fill(f.map);c.lineWidth=f.home?2/scale:1/scale;c.strokeStyle=f.home?'#f3dcb2':'#83959b55';c.stroke(f.map);}c.restore();const x=650+(89.5403-89.9)*scale,y=300-(22.8456-23.7)*scale;glow(x,y,35,'#f8d58d55');circle(x,y,7,'#f6d28d');c.strokeStyle='#f8d9a888';c.lineWidth=1;c.beginPath();c.arc(x,y,14+progress*11,0,TAU);c.stroke();line(x+12,y,x+105,y-22,'#e2d8a3',2);text('KHULNA',x+115,y-18,20,'#f7e9bd','left');text('BANGLADESH',645,175,23,'#f6e7b8');text('BAY OF BENGAL',800,560,13,'#bad4da');text('INDIA',400,200,17,'#b5c9c5');}

function city(progress,t){box(0,0,1200,675,gradient(c,0,0,1200,675,'#85798c','#829490','#aca595'),0);c.save();c.translate(600,300);c.scale(1+progress*.7,1+progress*.7);c.translate(-600,-300);path([[890,-100],[835,50],[865,170],[775,300],[810,420],[750,600],[690,800],[820,800],[880,600],[935,440],[900,300],[950,170],[930,50],[1000,-100]],'#447e89');line(60,270,1130,270,'#9ca493',42);line(540,-50,540,750,'#9ca493',42);line(90,90,770,540,'#9ca493',26);for(let i=0;i<40;i++){const x=80+(i*173)%660,y=30+(i*113)%600;if(Math.abs(x-540)<65||Math.abs(y-270)<55||Math.hypot(x-540,y-150)<120)continue;shadow(c,x+25,y+40,28,6,.12);box(x+3,y+5,35+i%3*12,30+i%4*10,'#3b515577',4);box(x,y,35+i%3*12,30+i%4*10,['#c4b48a','#a5b89d','#b6a185'][i%3],4);box(x+4,y+4,20,8,'#71877e',2);}box(440,73,210,127,'#244b49',10);box(465,90,160,88,'#c3cbb4',5);box(510,105,70,75,'#527a7b',4);text('NKSC',545,148,22,'#e9e8c9');circle(540,60,10,'#f0d090');text('NATIONAL KITTY SPACE CENTER',540,40,15,'#fff0c8');for(const [x,y] of [[300,140],[690,130],[320,390],[700,450],[420,500]])tree(x,y,.6);for(let j=0;j<6;j++){
 const y=110+j*70,x=871-y*.17+Math.sin(j*2)*9;
 line(x-18,y,x+29,y-4,'#a7ccd06b',1.5);
 line(x-10,y+4,x+20,y+2,'#a7ccd03b',1);
}
for(let j=0;j<2;j++){
 const y=180+j*235+(t*(9+j*3)%46),x=876-y*.17;
 path([[x-11,y+19],[x,y],[x+11,y+19],[x+6,y+23],[x-6,y+23]],'#f1cd9e');
 box(x-4,y+9,8,9,'#a47a88',2);
 line(x-5,y+28,x-7,y+42,'#cfdbd38c',1);line(x+5,y+28,x+7,y+42,'#cfdbd38c',1);
}
box(540+(t*40)%250,255,22,10,'#dfb469',3);text('RUPSHA RIVER',970,430,15,'#dce9d6');c.restore();}
function surveySatellite(progress){
 c.save();c.translate(760+82*progress,137-24*progress);c.rotate(-.26);
 glow(0,0,100,'#c1b3eb27');
 for(const side of [-1,1]){
  const x=side<0?-62:19;
  line(side*14,0,side*48,0,'#aeb8d5',4);
  box(x,-12,43,24,gradient(c,x,-12,x+43,12,'#7b96bc','#354d7a'),4);
  for(let i=1;i<4;i++)line(x+i*10,-10,x+i*10,10,'#bccbdf88',1);
  line(x+2,0,x+41,0,'#a9c2da88',1);
 }
 box(-18,-17,36,33,gradient(c,-18,-17,18,16,'#f0d2b1','#ac9ab8'),7);
 circle(0,0,7,'#435876');circle(-2,-2,2,'#c9ecdf');
 line(0,-17,5,-29,'#e0d7e3',2);circle(5,-29,2,'#f4c999');
 c.restore();
}
function mapReticle(progress){
 const x=650+(89.5403-89.9)*(75+progress*30),y=300-(22.8456-23.7)*(75+progress*30);
 c.save();c.strokeStyle='#f7dcb06b';c.lineWidth=1;c.setLineDash([3,6]);
 c.beginPath();c.arc(x,y,32+progress*32,0,TAU);c.stroke();
 c.restore();
}
const filmDissolve=createSceneDissolve();
let lastFilmPhase=-1,lastFilmSecond=-1;
export function drawFilm(canvas,seconds,reduced){
const i=arrivalChapter(seconds),chapter=ARRIVAL_CHAPTERS[i],u=Math.max(0,Math.min(1,(seconds-chapter.start)/(chapter.end-chapter.start))),p=reduced?.5:easeInOut(u);
if(seconds<lastFilmSecond){filmDissolve.reset();lastFilmPhase=-1;}
if(i!==lastFilmPhase){
 if(lastFilmPhase>=0)filmDissolve.capture(canvas,chapter.start,reduced);
 lastFilmPhase=i;
}
lastFilmSecond=seconds;
setup(canvas,1200,675);
if(i===0){globe(p);surveySatellite(p);}
if(i===1){bangladesh(p);mapReticle(p);}
if(i===2)city(p,reduced?0:seconds);if(i===3){c.save();c.translate(600,320);c.scale(1+p*.13,1+p*.13);c.translate(-600,-320);centerExterior(seconds);c.restore();}
if(i===4){
  box(0,0,1200,675,gradient(c,0,0,0,675,'#483e54','#625267','#41394d'),0);
  c.save();
  // Use a single scale for both axes so cats, doors, and lettering retain their shape.
  const portrait=canvas.clientWidth<canvas.clientHeight;
  const scale=(portrait ? .76 : 1)*(1+p*.038);
  c.translate(600,portrait?215:242);c.scale(scale,scale);c.translate(-600,-170);
  hallArt(reduced?0:seconds);
  c.restore();
}
const shade=c.createLinearGradient(0,410,0,675);shade.addColorStop(0,'transparent');shade.addColorStop(1,'#111d32d9');box(0,410,1200,265,shade,0);
filmDissolve.paint(c,1200,675,seconds,reduced);
return i;
}
