import {dhruboNarrator} from './narration.js?v=10';
import {robotPortrait} from './dhrubo-guide.js?v=10';
import {copy,t} from './strings.js?v=10';
import {drawBaseModule} from './base-module-art.js?v=10';
import {prepareCanvas,easeInOut,easeOut,damp,frameDelta,createSceneDissolve,filmCopyOpacity} from './visual-core.js?v=10';
import {gradient,shadow,campusExterior,marsSky,MARS_LIGHT,poly} from './scene-kit.js?v=10';
import {drawMissionCharacter} from './art.js?v=10';
import {flightRounds,flightAnswer} from './flight-model.js?v=10';
import {soundOn,saveSound,speakerIcon} from './sound-preference.js?v=10';
let stylesheet;
function layer(label,onSound){if(!stylesheet){stylesheet=document.createElement('link');stylesheet.rel='stylesheet';stylesheet.href='./flight-adventure.css?v=10';document.head.append(stylesheet);}const el=document.createElement('section');el.className='flight-adventure';el.role='dialog';el.setAttribute('aria-modal','true');el.setAttribute('aria-label',label);el.innerHTML=`<canvas aria-label="Animated mission scene" role="img"></canvas><header><span>${label}</span><button data-sound aria-label="Mute Dhrubo">${speakerIcon(soundOn())}</button><button data-pause>Pause</button><button data-exit>Skip movie →</button></header><div class="flight-copy"><h2></h2><p role="status" aria-live="polite"></p><div class="flight-controls"></div></div>`;const oldFocus=document.activeElement,oldOverflow=document.body.style.overflow;document.body.style.overflow='hidden';const siblings=[...document.body.children].filter(x=>!['SCRIPT','LINK','STYLE'].includes(x.tagName)).map(x=>[x,x.inert]);for(const [x]of siblings)x.inert=true;document.body.append(el);el.querySelector('[data-pause]').focus();const mute=el.querySelector('[data-sound]');const refresh=()=>{mute.innerHTML=speakerIcon(soundOn());mute.setAttribute('aria-label',soundOn()?'Mute Dhrubo':'Hear Dhrubo');mute.setAttribute('aria-pressed',soundOn());};refresh();mute.onclick=()=>{saveSound(!soundOn());onSound?.(soundOn());if(!soundOn())globalThis.speechSynthesis?.cancel();refresh();};const trap=e=>{if(e.key!=='Tab')return;const focus=[...el.querySelectorAll('button:not(:disabled),input,a,summary')].filter(x=>x.getClientRects().length&&!x.closest('[inert]')); if(e.shiftKey&&document.activeElement===focus[0]){e.preventDefault();focus.at(-1)?.focus();}else if(!e.shiftKey&&document.activeElement===focus.at(-1)){e.preventDefault();focus[0]?.focus();}};el.addEventListener('keydown',trap);return{el,close(){globalThis.speechSynthesis?.cancel();el.remove();for(const[x,v]of siblings)x.inert=v;document.body.style.overflow=oldOverflow;oldFocus?.focus?.();}};}
const smooth=x=>x*x*(3-2*x);
function painter(canvas){const c=prepareCanvas(canvas,1200,675);const box=(x,y,w,h,col,r=10)=>{c.fillStyle=col;c.beginPath();c.roundRect(x,y,w,h,r);c.fill();},circle=(x,y,r,col)=>{c.fillStyle=col;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();},line=(x,y,X,Y,col,w=3)=>{c.strokeStyle=col;c.lineWidth=w;c.beginPath();c.moveTo(x,y);c.lineTo(X,Y);c.stroke();},text=(v,x,y,size=20,col='#fff0d7')=>{c.fillStyle=col;c.font=`600 ${size}px system-ui`;c.textAlign='center';c.fillText(v,x,y);};return{c,box,circle,line,text};}
function stars(p,t){p.box(0,0,1200,675,gradient(p.c,0,0,1200,675,'#1c273f','#343953','#524262'),0);const haze=p.c.createRadialGradient(920,210,20,920,210,420);haze.addColorStop(0,'#bba8ec09');haze.addColorStop(1,'#bba8ec00');p.box(0,0,1200,675,haze,0);for(let i=0;i<90;i++)p.circle((i*191+t*2)%1200,(i*97)%675,i%7?1:2,'#c5c9df88');}
function planet(p,x,y,r,mars=false){p.circle(x,y,r,gradient(p.c,x-r,y-r,x+r,y+r,mars?'#efbc9e':'#a1cbde',mars?'#bd8583':'#5a8bad',mars?'#805d78':'#33567b'));p.c.save();p.c.beginPath();p.c.arc(x,y,r,0,Math.PI*2);p.c.clip();for(let i=0;i<9;i++){p.c.fillStyle=mars?'#a96c69':'#9fb59a';p.c.beginPath();p.c.ellipse(x+Math.sin(i*4)*r*.8,y+Math.cos(i*3)*r*.8,r*.35,r*.12,i,0,Math.PI*2);p.c.fill();}p.circle(x-r*.65,y+r*.15,r,'#17284044');p.c.restore();}
function rocket(p,x,y,scale,t,fire=false){const{c,box,circle,line}=p;c.save();c.translate(x,y);c.scale(scale,scale);if(fire){for(let i=0;i<3;i++){c.fillStyle=['#efb59c88','#f9c792','#fff0d7'][i];c.beginPath();c.moveTo(-24+i*6,35);c.quadraticCurveTo(0,125+Math.sin(t*25)*15-i*20,24-i*6,35);c.fill();}}box(-35,-120,70,160,gradient(c,-35,-120,35,40,'#a8b3cc','#eee5e9','#b9bdd0'),26);line(-22,-97,-22,15,'#ffffff55',2);c.fillStyle='#efb59c';c.beginPath();c.moveTo(-35,-100);c.quadraticCurveTo(-25,-155,0,-178);c.quadraticCurveTo(25,-155,35,-100);c.fill();circle(0,-70,22,'#586a89');circle(0,-70,15,'#a9d2df');box(-31,-15,62,12,'#bba8ec',3);for(const d of[-1,1]){c.fillStyle='#bba8ec';c.beginPath();c.moveTo(d*26,-20);c.lineTo(d*59,48);c.lineTo(d*28,34);c.fill();}line(0,-49,0,-28,'#a29ab9',2);c.restore();}
function ship(p,t,success=false){const{c,box,circle,line}=p;
c.save();c.translate(600,300);c.rotate(Math.sin(t*.18)*.012);c.translate(-600,-300);
for(const side of[-1,1]){const x=side<0?255:776;line(side<0?450:748,301,side<0?392:820,301,'#a4b2ca',12);box(x,220,170,166,gradient(c,x,220,x+170,386,'#4d608e','#7c83ae','#3d537c'),9);for(let row=0;row<4;row++)for(let col=0;col<5;col++){box(x+7+col*32,226+row*38,27,31,gradient(c,0,226,0,385,'#7387b3','#465b88'),3);line(x+11+col*32,230+row*38,x+24+col*32,230+row*38,'#d1d4ef33',1);}line(x+4,222,x+166,222,'#d0c7e366',2);}
box(415,251,85,104,gradient(c,0,251,0,355,'#aebbd1','#647e9d'),20);box(427,263,60,78,'#586f8e',12);box(469,216,270,171,gradient(c,470,216,730,387,'#e4dce5','#b8c5d5','#7e95b4'),52);box(493,237,216,116,gradient(c,493,237,709,353,'#3b5778','#263f5e'),34);line(519,226,680,226,'#fffaed99',2);line(519,374,682,374,'#55718a',4);
for(const x of[534,600,666]){circle(x,286,24,'#9eafc7');circle(x,286,19,gradient(c,x-17,270,x+17,302,'#afcedb','#5982a1','#344f70'));line(x-7,273,x+4,273,'#eefaff88',2);}
box(553,333,96,12,'#9da7c6',6);for(let j=0;j<5;j++)circle(568+j*16,339,2,success?'#a9decb':'#e3c7aa');
line(706,242,744,203,'#c5c9dc',5);circle(748,198,12,'#d9cee3');line(748,198,762,183,'#eac5aa',3);
if(success)for(let i=0;i<18;i++)circle(600+Math.sin(i*6+t)*245,240+Math.cos(i*3+t)*110,2,['#efb59c','#bba8ec','#a9e5d1'][i%3]);c.restore();}

const FILM_LENGTHS={departure:[5,5,5,5],training:[6,6],base:[6,6]};
const FILM_LABELS={departure:'flightPreview',training:'trainingPreview',base:'basePreview'};
function departureArt(p,i,u,t,reduced,portrait){
 const {c,box,circle,line}=p;stars(p,t);
if(i===0){
 campusExterior(c,t,u);
 const kittyX=portrait?511+u*70:436+u*166;
 drawMissionCharacter(c,{x:kittyX,y:488,scale:1.48,clock:t,reduceMotion:reduced,moving:!reduced});
 drawMissionCharacter(c,{type:'dhrubo',x:kittyX+84,y:398,scale:1.48,clock:t,reduceMotion:reduced,happy:true});
}
if(i===1){
 box(80,60,1040,500,gradient(c,80,60,1120,560,'#d8b3a5','#695568','#ae848b'),50);
 box(110,90,980,350,'#34435c',40);
 planet(p,portrait?665:870,186,portrait?76:128);
 for(const x of portrait?[518,646]:[349,581]){
  box(x-69,222,138,218,'#977180',30);
  box(x-73,392,146,44,'#624f65',13);
  drawMissionCharacter(c,{x,y:404,scale:portrait?1.76:2.02,clock:t,reduceMotion:reduced,happy:true});
  line(x-36,portrait?356:352,x+34,portrait?398:402,'#f2c49f',6);
 }
 drawMissionCharacter(c,{type:'dhrubo',x:portrait?593:797,y:portrait?222:350,scale:portrait?1.3:1.8,clock:t,reduceMotion:reduced,happy:true});
 box(210,438,780,62,'#536566',16);
 for(let j=0;j<8;j++)box(245+j*90,453,60,22,j%2?'#a9e5d1':'#bba8ec',6);
}
if(i===2){const g=c.createLinearGradient(0,0,0,675);g.addColorStop(0,'#534b6d');g.addColorStop(.57,'#a77790');g.addColorStop(1,'#ecc09f');box(0,0,1200,675,g,0);for(let j=0;j<8;j++){c.fillStyle='#eee4e13b';c.beginPath();c.ellipse(90+j*167,450+(reduced?0:u*240)-j%3*120,110,24,0,0,Math.PI*2);c.fill();}const plume=1-u*.55;
for(let j=0;j<17;j++){
 const drift=Math.sin(j*2.4),x=650+drift*(20+u*95),y=530+(j*17)%110;
 const cloud=c.createRadialGradient(x,y,1,x,y,32+j%5*9);
 cloud.addColorStop(0,j%2?'#f7d6b377':'#d4b2bd66');cloud.addColorStop(1,'#d4b2bd00');
 circle(x,y,(32+j%5*9)*plume,cloud);
}
rocket(p,650,410-(reduced?100:u*190),1.6,t,true);}

if(i===3){planet(p,100,410,200*(1-u*.45));planet(p,portrait?690:910,portrait?237:225,(85+u*70)*(portrait ? .73 : 1),true);c.save();c.translate(portrait?530+u*95:430+u*260,portrait?375:260);c.rotate(Math.PI/2-.06);rocket(p,0,0,.75,t,false);c.restore();for(let j=0;j<12;j++)circle(270+j*55,255+Math.sin(j*.24)*24,2,'#c4b6e4');}
}

function marsFilmArt(p,kind,shot,u,clock,reduced){
 const {c,box,circle,line}=p;
 const base=kind==='base';
 marsSky(c,1200,675,395);
 const glow=c.createRadialGradient(785,142,5,785,142,180);
 glow.addColorStop(0,'#ffe0b5ba');glow.addColorStop(1,'#ffe0b500');
 circle(785,142,180,glow);circle(785,142,23,'#ffe6bb');
 poly(c,[[0,386],[140,350],[310,355],[474,244],[633,360],[777,320],[1020,250],[1200,348],[1200,675],[0,675]],MARS_LIGHT.far);
 poly(c,[[0,444],[206,377],[384,416],[583,352],[835,404],[1200,367],[1200,675],[0,675]],MARS_LIGHT.near);
 poly(c,[[0,494],[230,449],[506,472],[779,422],[1200,458],[1200,675],[0,675]],gradient(c,0,440,0,675,...MARS_LIGHT.soil));
 for(let i=0;i<27;i++){
  const x=(i*113+21)%1200,y=465+(i*31)%190;
  shadow(c,x,y,4+i%6,1+i%3,.14);
 }
 for(let i=0;i<15;i++){
  const x=(i*79+clock*(12+i%4*5))%1220;
  line(x,410+i*10,x+12+i%6*2,408+i*10,'#ffe1c838',1.5);
 }
 c.save();
 const scale=1+u*(shot ? .09 : .045);c.translate(600,395);c.scale(scale,scale);c.translate(-600,-395);
 if(base){
  drawBaseModule(c,'home',580,445,.49);
  drawBaseModule(c,'greenhouse',433,465,.78);
  drawBaseModule(c,'solar1',719,443,.50);
  drawBaseModule(c,'water',772,465,.66);
  if(shot){
   drawBaseModule(c,'shelter',480,516,.85);
   drawBaseModule(c,'garage',724,525,.69);
   c.save();c.strokeStyle='#fff0d9a6';c.lineWidth=2;c.setLineDash([5,7]);
   c.beginPath();c.ellipse(593,469,206,75,0,0,Math.PI*2);c.stroke();c.restore();
  }else rocket(p,676,342-(1-u)*185,.61,clock,!reduced);
  drawMissionCharacter(c,{type:'dhrubo',x:shot?613:570+u*28,y:shot?321:305,scale:shot?1.58:1.37,clock,reduceMotion:reduced,happy:true});
 }else{
  drawBaseModule(c,'home',740,449,.44);
  drawBaseModule(c,'solar1',500,445,.58);
  drawBaseModule(c,'solar2',566,413,.47);
  const x=shot?670:565+u*46;
  drawMissionCharacter(c,{x,y:486,scale:shot?1.6:1.3,clock,reduceMotion:reduced,moving:!shot&&!reduced});
  drawMissionCharacter(c,{type:'dhrubo',x:x-64,y:424,scale:shot?1.35:1.1,clock,reduceMotion:reduced});
  if(shot){
   const glint=.4+.28*Math.cos(clock*2);
   c.save();c.globalAlpha=glint;line(483,401,491,383,'#e9edfb',2);line(478,393,498,392,'#e9edfb',2);c.restore();
  }
 }
 c.restore();
}

export function playMissionFilm(kind,{reduced=false,onSound,resume=false,finished=false}={}){
 return new Promise(resolve=>{
  const scenes=copy('films')[finished&&kind==='base'?'baseReport':resume?kind+'Resume':kind]??copy('films')[kind],durations=FILM_LENGTHS[kind],narrator=dhruboNarrator();
  const ui=layer(t(FILM_LABELS[kind]),onSound),el=ui.el,canvas=el.querySelector('canvas');
  const mute=el.querySelector('[data-sound]'),pause=el.querySelector('[data-pause]'),skip=el.querySelector('[data-exit]');
  const caption=el.querySelector('.flight-copy'),title=caption.querySelector('h2'),line=caption.querySelector('p');
  caption.classList.add('movie-caption');
  caption.classList.toggle('still-guide',reduced);
  line.insertAdjacentHTML('beforebegin',`<span class="movie-guide" aria-hidden="true">${robotPortrait}</span>`);
  const dissolve=createSceneDissolve();
  const play=document.createElement('button');play.type='button';play.className='flight-play';play.textContent=t('filmPlay');play.hidden=true;el.append(play);
  canvas.dataset.fit='cover';canvas.setAttribute('aria-label',t('filmIllustration'));el.classList.add('mission-film');document.body.classList.add('mission-film-open');
  skip.textContent=t('filmSkip');pause.textContent=t('filmPause');
  if(kind==='departure')el.querySelector('header > span').textContent=t('filmPractice');
  let index=-1,time=0,last=0,paused=false,blocked=false,frame,audio,voiceRequest=0,closed=false;
  function stopAudio(){narrator.pause();caption.classList.remove('is-speaking');}
  function playAudio(){if(!soundOn()||paused||document.hidden)return;void narrator.resume();}
  function sayShot(){
   if(!soundOn())return;
   void narrator.play(scenes[index][1],{
    onstart:()=>{if(!closed)caption.classList.add('is-speaking');},
    onend:()=>caption.classList.remove('is-speaking'),
    onblocked:()=>{if(!closed){blocked=true;play.hidden=false;play.focus();}}
   });
  }
  function done(){
   if(closed)return;
   closed=true;cancelAnimationFrame(frame);narrator.stop();
   document.removeEventListener('visibilitychange',onVisibility);
   document.body.classList.remove('mission-film-open');ui.close();resolve();
  }
  function onVisibility(){last=0;if(document.hidden)stopAudio();else playAudio();}
  function updateVoice(){
   if(!soundOn()){narrator.stop();blocked=false;play.hidden=true;}
   else sayShot();
  }
  function enter(shot){
   stopAudio();index=shot;
   const [heading,spokenLine]=scenes[shot];
   title.textContent=heading;
   line.textContent=spokenLine;
   el.dataset.palette=kind==='departure'?['earth','cabin','launch','space'][shot]:'launch';
   narrator.stop();sayShot();
  }
  function draw(stamp){
   // Keep the movie clock in sync with audio even when a rotation delays rendering.
   const elapsed=last?Math.max(0,(stamp-last)/1000):0;
   last=stamp;
   if(!paused&&!blocked&&!document.hidden){
    const boundary=durations.slice(0,index+1).reduce((sum,n)=>sum+n,0);
    time=soundOn()&&narrator.busy?Math.min(boundary-.001,time+elapsed):time+elapsed;
   }
   let left=time,shot=0;
   while(shot<durations.length&&left>=durations[shot])left-=durations[shot++];
   if(shot===scenes.length){done();return;}
   if(shot!==index){
    if(index>=0)dissolve.capture(canvas,time-left,reduced);
    enter(shot);
   }
   const u=reduced?.5:smooth(left/durations[shot]),clock=reduced?0:time,p=painter(canvas);
   const portrait=canvas.clientWidth<canvas.clientHeight;
   if(kind==='departure')departureArt(p,shot,u,clock,reduced,portrait);
   else marsFilmArt(p,kind,shot,u,clock,reduced);
   dissolve.paint(p.c,1200,675,time,reduced);
   if(!reduced)caption.style.setProperty('--scene-copy-opacity',filmCopyOpacity(left,false).toFixed(2));
   frame=requestAnimationFrame(draw);
  }
  skip.onclick=done;
  play.onclick=()=>{blocked=false;last=0;play.hidden=true;playAudio();};
  pause.onclick=()=>{
   paused=!paused;last=0;pause.textContent=t(paused?'filmResume':'filmPause');pause.setAttribute('aria-pressed',String(paused));
   if(paused){stopAudio();play.hidden=true;}
   else playAudio();
  };
  mute.addEventListener('click',updateVoice);
  document.addEventListener('visibilitychange',onVisibility);
  enter(0);frame=requestAnimationFrame(draw);
 });
}
export function playDeparture(options){return playMissionFilm('departure',options);}

export function playCruise({reduced=false,speak,stopVoice=()=>{},onSound,homePractice=false}={}){return new Promise(resolve=>{let round=0;try{round=Number(localStorage.getItem('astro-kitty-flight-round')||0);localStorage.setItem('astro-kitty-flight-round',round+1);}catch{}const events=flightRounds(round),ui=layer('CREW CHALLENGES · ON THE WAY TO MARS',onSound),el=ui.el,canvas=el.querySelector('canvas'),copy=el.querySelector('.flight-copy'),controls=el.querySelector('.flight-controls');copy.classList.add('practice');el.dataset.palette='space';let index=0,event,success=false,value=50,selection=null,time=0,last=0,paused=false,frame,drag=null,displayValue=50;const done=()=>{cancelAnimationFrame(frame);stopVoice();document.removeEventListener('visibilitychange',onVisibility);ui.close();resolve();};el.querySelector('[data-exit]').textContent=homePractice?'Back home →':'Continue journey →';el.querySelector('[data-exit]').onclick=done;el.querySelector('[data-pause]').onclick=e=>{paused=!paused;e.target.textContent=paused?'Play':'Pause';controls.inert=paused;if(paused)stopVoice();else say(copy.querySelector('p').textContent);};const say=text=>{copy.querySelector('p').textContent=text;if(soundOn()&&!paused&&!document.hidden)speak?.(text);};
function onVisibility(){last=0;if(document.hidden)stopVoice();else if(!paused)say(copy.querySelector('p').textContent);}
document.addEventListener('visibilitychange',onVisibility);
el.querySelector('[data-sound]').addEventListener('click',()=>{if(soundOn())say(copy.querySelector('p').textContent);else stopVoice();});function attempt(v){if(paused||success)return;if(!flightAnswer(event,v)){say('Good try! '+event.hint+' Try again.');return;}success=true;say('Shabbash! '+event.why);controls.innerHTML='<button class="good" data-next>'+ (index===2?(homePractice?'Back home →':'To Mars →'):'Next challenge →')+'</button>';controls.querySelector('button').onclick=nextRound;controls.querySelector('button').focus();}
const skipRound=document.createElement('button');
skipRound.className='flight-skip-round';
skipRound.textContent=t('academySkipRound');
skipRound.onclick=nextRound;
copy.append(skipRound);
function nextRound(){
 if(paused)return;
 drag=null;el.querySelector('.flight-drag-ghost')?.remove();
 if(index===events.length-1)done();
 else{index++;load();}
}

function load(){skipRound.hidden=index===events.length-1;event=events[index];el.dataset.palette=['heat','solar','power'].includes(event.id)?'amber':'space';success=false;selection=null;value=50;displayValue=50;el.querySelector('h2').textContent=event.title;el.querySelector('header>span').textContent=`CREW CHALLENGE ${index+1} / 3`;say(event.hint);el.querySelector('.flight-real')?.remove();const real=document.createElement('details');real.className='flight-real';real.innerHTML=`<summary>Real ▾</summary><p>${event.fact}</p><p>Game: simplified controls and instant feedback.</p><a href="${event.url}" target="_blank" rel="noopener">Explore the science ↗</a>`;el.querySelector('header').append(real);if(event.kind==='dial'){controls.innerHTML='<label>↶ <input type="range" min="0" max="100" value="50" aria-label="Pointing angle"> ↷</label><button data-check>Check alignment</button>';controls.querySelector('input').oninput=e=>value=Number(e.target.value);controls.querySelector('[data-check]').onclick=()=>attempt(value);}else{const symbols=event.kind==='drag'?(event.id==='heat'?['❄','▧','▣']:['▱','💧','⌁']):event.id==='impact'?['◎','⇥','…']:['◌','▣','☀'];controls.innerHTML=event.choices.map((x,i)=>`<button class="${event.kind==='drag'?'flight-draggable':''}" data-choice="${i}">${symbols[i]} ${x}</button>`).join('')+(event.kind==='drag'?'<button class="drop-zone">Drop here · or tap</button>':'');controls.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{if(paused)return;if(event.kind==='choice')attempt(Number(b.dataset.choice));else{selection=Number(b.dataset.choice);controls.querySelectorAll('[data-choice]').forEach(n=>n.classList.toggle('selected',n===b));}});controls.querySelector('.drop-zone')?.addEventListener('click',()=>{if(selection!==null)attempt(selection);else say('Pick an item, then place it here.');});}}
controls.addEventListener('pointerdown',e=>{const b=e.target.closest('.flight-draggable');if(!b||paused)return;drag={id:Number(b.dataset.choice),x:e.clientX,y:e.clientY,moved:false};b.setPointerCapture(e.pointerId);});controls.addEventListener('pointermove',e=>{if(!drag)return;drag.moved ||= Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>8;if(drag.moved){let g=el.querySelector('.flight-drag-ghost');if(!g){g=document.createElement('div');g.className='flight-drag-ghost';el.append(g);}g.textContent=event.choices[drag.id];g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';}});controls.addEventListener('pointerup',e=>{if(!drag)return;const z=controls.querySelector('.drop-zone')?.getBoundingClientRect();if(drag.moved&&z&&e.clientX>=z.left&&e.clientX<=z.right&&e.clientY>=z.top&&e.clientY<=z.bottom)attempt(drag.id);drag=null;el.querySelector('.flight-drag-ghost')?.remove();});controls.addEventListener('pointercancel',()=>{drag=null;el.querySelector('.flight-drag-ghost')?.remove();});
function draw(ts){const dt=frameDelta(last,ts);last=ts;if(!paused&&!document.hidden)time+=dt;const t=reduced?0:time,p=painter(canvas),{c,box,circle,line,text}=p;stars(p,t);planet(p,1080,140,72,true);ship(p,t,success);drawMissionCharacter(c,{type:'dhrubo',x:1040,y:370,scale:1.6,clock:t});if(event.kind==='dial'){displayValue=reduced?value:damp(displayValue,value,14,dt);const angle=displayValue/100*Math.PI-Math.PI,target=event.target/100*Math.PI-Math.PI,x=600,y=280;line(x,y,x+Math.cos(angle)*145,y+Math.sin(angle)*145,'#efb59c',8);c.save();c.translate(x+Math.cos(angle)*145,y+Math.sin(angle)*145);c.rotate(angle+Math.PI/2);if(event.id==='radio'){c.fillStyle='#d2c9e7';c.beginPath();c.arc(0,0,24,0,Math.PI);c.fill();line(0,0,0,-16,'#efb59c',3);}else{box(-30,-10,60,20,'#a9a4d7',4);for(let j=0;j<4;j++)line(-22+j*15,-8,-22+j*15,8,'#d8d1ef',1);}c.restore();const tx=x+Math.cos(target)*185,ty=y+Math.sin(target)*185;if(event.id==='radio')planet(p,tx,ty,30);else circle(tx,ty,34,'#f7cb8c');for(let j=0;j<5;j++)circle(x+Math.cos(target)*(152+j*5),y+Math.sin(target)*(152+j*5),2,'#a9e5d1');text(success?'✓ Aligned':'Match the direction',600,420,18);}
if(event.id==='impact'){line(485,200,710,200,'#bba8ec',9);line(485,220,710,220,'#a9e5d1',6);const f=(t*.4)%1;if(!success){circle(530+f*60,70+f*130,6,'#e3ad91');if(f>.8)for(let i=0;i<8;i++)line(590,200,590+Math.sin(i)*40,200-Math.abs(Math.cos(i))*30,'#efb59c',2);}text(success?'INNER WALL ✓':'OUTER SHIELD',600,177,16);}
if(event.id==='power'){box(503,170,190,30,'#27354f',8);box(508,175,success?80:45,20,success?'#a9e5d1':'#efb59c',5);text(success?'Crew air stays on':'LOW POWER',600,156,17);}
if(event.id==='heat'){for(let i=0;i<4;i++)line(570+i*22,215,570+i*22,170+Math.sin(t*3+i)*8,success?'#a9e5d1':'#efb59c',4);if(success)for(let i=0;i<8;i++)circle(420+(t*60+i*45)%360,365,4,'#a9e5d1');}
if(event.id==='solar'){circle(150,120,50,'#f0bd91');for(let i=0;i<12;i++)line(210+i*25,130+i%3*30,230+i*25,140+i%3*30,'#efb59c44',3);if(success){for(let i=0;i<5;i++)box(475+i*50,230,40,35,'#9ac6dd',6);text('SHELTER READY',600,210,17,'#a9e5d1');}}
frame=requestAnimationFrame(draw);}load();frame=requestAnimationFrame(draw);});}
