// Kitty Code: worlds -> levels -> write code -> watch the rover drive.
// Everything moves: the rover glides and kicks up dust, dust devils spin, ice shines, pads glow.
import {run,parseMap} from './kitty-code-engine.js?v=10';
import {readJSON,writeJSON,lang,pick,escapeHTML,online,api,submit,speak,topBar,flushQueue} from './online.js?v=10';
import {mountDhrubo} from './dhrubo-chat.js?v=10';
import {encodeLevel,decodeLevel} from './kitty-code-share.js?v=10';

const PROGRESS='astro-kitty-code-v1';
const UNLOCK_STARS=10; // stars needed in a world to open the next one
const app=document.getElementById('app');
const L=lang();
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches||readJSON('astro-kitty-profile-v1',{}).reduceMotion===true;
const T={
  en:{title:'Kitty Code',sub:'Drive the rover with simple words. Reach the base, grab samples, write short code!',world:'WORLD',locked:`Get ${UNLOCK_STARS} stars in the world before to open this one`,daily:'Daily Challenge',dailySub:'A new mission every day. Same level for every kitty!',dailyOff:'Connect to the internet to play the Daily Challenge.',
    back:'← Back',run:'▶ Run',step:'Step',reset:'↺ Reset',clear:'Clear',speed:'Speed',par:'Par',cmds:'commands',samples:'samples',next:'Next level →',again:'Try again',worlds:'All worlds',
    success:'Mission complete!',crashed:'Bonk!',notHome:'Not home yet',tooLong:'Too long!',flat:'Battery empty!',blown:'Whoosh!',error:'Code problem',didYouMean:'Did you mean',
    star1:'Reached the base',star2:'Code with {par} commands or fewer',star3:'Collected every sample',saved:'Saved to the leaderboard ⭐',queued:'Saved. It will go to the leaderboard when you are online.',
    legend:{rover:'🐾 rover',rock:'🪨 rock',sample:'💎 sample',base:'🏠 base',ice:'🧊 ice: you slide!',pad:'⚡ charging pad',devil:'🌪️ dust devil'},running:'Running line',quiz:'Take the Kitty Code quiz',
    remix:'🎲 Remix',remixSub:'A brand-new level to practise this world. Different every time!',another:'🎲 Another remix',battery:'Battery',
    make:'🛠️ Make your own level',makeSub:'Build a Mars puzzle, beat it, then share the code with friends.',editor:'Level maker',levelName:'Level name',width:'Width',height:'Height',useBattery:'Battery',test:'▶ Test my level',
    editHelp:'Pick a tile, then tap the map. Tap the rover again to turn it.',needStart:'Put the rover 🐾 and the base 🏠 on the map first.',shareTitle:'Share your level',shareHelp:'You solved it! Friends must beat your score of {par} commands.',copy:'Copy link',copied:'Copied!',edit:'✏️ Edit',custom:'Custom level',badCode:'That level code does not work. Check you copied all of it.',
    seen:{rock:'rock',path:'path',sample:'sample',base:'base',ice:'ice',pad:'charging pad',devil:'dust devil'},
    cheers:['Shabbash!','Oshadharon!','Brilliant coding!','Purr-fect!']},
  bn:{title:'কিটি কোড',sub:'সহজ শব্দ দিয়ে রোভার চালাও। ঘাঁটিতে পৌঁছাও, নমুনা তোলো, ছোট কোড লেখো!',world:'জগৎ',locked:`এটা খুলতে আগের জগতে ${UNLOCK_STARS}টা তারা লাগবে`,daily:'দৈনিক চ্যালেঞ্জ',dailySub:'প্রতিদিন নতুন মিশন। সব বিড়ালের জন্য একই লেভেল!',dailyOff:'দৈনিক চ্যালেঞ্জ খেলতে ইন্টারনেটে যুক্ত হও।',
    back:'← ফিরে যাও',run:'▶ চালাও',step:'এক ধাপ',reset:'↺ আবার',clear:'মুছো',speed:'গতি',par:'লক্ষ্য',cmds:'কমান্ড',samples:'নমুনা',next:'পরের লেভেল →',again:'আবার চেষ্টা',worlds:'সব জগৎ',
    success:'মিশন সফল!',crashed:'ধাক্কা!',notHome:'এখনো ঘাঁটিতে নয়',tooLong:'অনেক লম্বা!',flat:'ব্যাটারি শেষ!',blown:'হুঁশ!',error:'কোডে সমস্যা',didYouMean:'তুমি কি বলতে চেয়েছ',
    star1:'ঘাঁটিতে পৌঁছেছ',star2:'{par}টা বা কম কমান্ডে কোড',star3:'সব নমুনা তুলেছ',saved:'লিডারবোর্ডে জমা হয়েছে ⭐',queued:'জমা আছে। অনলাইনে গেলে লিডারবোর্ডে যাবে।',
    legend:{rover:'🐾 রোভার',rock:'🪨 পাথর',sample:'💎 নমুনা',base:'🏠 ঘাঁটি',ice:'🧊 বরফ: পিছলে যাবে!',pad:'⚡ চার্জিং প্যাড',devil:'🌪️ ধুলোর ঘূর্ণি'},running:'চলছে লাইন',quiz:'কিটি কোড কুইজ দাও',
    remix:'🎲 রিমিক্স',remixSub:'এই জগৎ অনুশীলনের জন্য একদম নতুন লেভেল। প্রতিবার আলাদা!',another:'🎲 আরেকটা রিমিক্স',battery:'ব্যাটারি',
    make:'🛠️ নিজের লেভেল বানাও',makeSub:'মঙ্গলের একটা ধাঁধা বানাও, জিতে দেখাও, তারপর বন্ধুদের কোড পাঠাও।',editor:'লেভেল মেকার',levelName:'লেভেলের নাম',width:'চওড়া',height:'উঁচু',useBattery:'ব্যাটারি',test:'▶ আমার লেভেল পরীক্ষা করো',
    editHelp:'একটা টাইল বেছে মানচিত্রে চাপো। রোভার ঘোরাতে আবার চাপো।',needStart:'আগে মানচিত্রে রোভার 🐾 আর ঘাঁটি 🏠 বসাও।',shareTitle:'তোমার লেভেল শেয়ার করো',shareHelp:'তুমি জিতেছ! বন্ধুদের {par} কমান্ডের রেকর্ড ভাঙতে হবে।',copy:'লিংক কপি করো',copied:'কপি হয়েছে!',edit:'✏️ বদলাও',custom:'নিজের লেভেল',badCode:'এই লেভেল কোড কাজ করছে না। পুরোটা কপি হয়েছে কিনা দেখো।',
    seen:{rock:'পাথর',path:'পথ',sample:'নমুনা',base:'ঘাঁটি',ice:'বরফ',pad:'চার্জিং প্যাড',devil:'ধুলোর ঘূর্ণি'},
    cheers:['শাবাশ!','অসাধারণ!','দারুণ কোডিং!','চমৎকার!']},
}[L];
const SNIPPETS={
  en:{move:'MOVE 1','turn left':'TURN LEFT','turn right':'TURN RIGHT',drill:'DRILL',scan:'SCAN',wait:'WAIT',repeat:'REPEAT 2 TIMES\n  \nEND','repeat until':'REPEAT UNTIL AT BASE\n  \nEND',if:'IF PATH AHEAD\n  \nEND',else:'ELSE',define:'DEFINE HOP\n  \nEND',
    'rock ahead':'ROCK AHEAD','path ahead':'PATH AHEAD','path left':'PATH LEFT','path right':'PATH RIGHT','sample here':'SAMPLE HERE','at base':'AT BASE',not:'NOT'},
  bn:{move:'এগোও ১','turn left':'বামে ঘোরো','turn right':'ডানে ঘোরো',drill:'খনন',scan:'স্ক্যান',wait:'অপেক্ষা',repeat:'পুনরাবৃত্তি ২ বার\n  \nশেষ','repeat until':'পুনরাবৃত্তি যতক্ষণ না ঘাঁটিতে\n  \nশেষ',if:'যদি পথ সামনে\n  \nশেষ',else:'নইলে',define:'নাম HOP\n  \nশেষ',
    'rock ahead':'পাথর সামনে','path ahead':'পথ সামনে','path left':'পথ বামে','path right':'পথ ডানে','sample here':'নমুনা এখানে','at base':'ঘাঁটিতে',not:'না'},
}[L];
const CONTROL=new Set(['repeat','repeat until','if','else','define']);
const CONDS=new Set(['rock ahead','path ahead','path left','path right','sample here','at base','not']);
const ALL_TOOLS=['move','turn left','turn right','drill','scan','wait','repeat','repeat until','if','else','rock ahead','path ahead','path left','path right','sample here','at base','not','define'];

let data=null,daily=null,remixPool=null;
let progress=readJSON(PROGRESS,{levels:{}});
const best=id=>progress.levels[id]??null;
const worldStars=w=>data.levels.filter(l=>l.world===w).reduce((n,l)=>n+(best(l.id)?.stars??0),0);
const worldOpen=w=>w===1||worldStars(w-1)>=UNLOCK_STARS;
const starText=n=>'★'.repeat(n)+'☆'.repeat(3-n);
let shownHash=null;
const setHash=h=>{shownHash=h;if(location.hash.slice(1)!==h)location.hash=h;};
let stopLoop=()=>{};

function home(){
  stopLoop();setHash('');
  app.innerHTML=`${topBar(T.title)}<p class="hub-sub">${T.sub}</p><div class="grid stagger" id="worlds"></div>`;
  const grid=app.querySelector('#worlds');
  const card=(cls,html,onclick,disabled=false)=>{const b=document.createElement('button');b.className=`world-card ${cls}`;b.type='button';b.disabled=disabled;b.innerHTML=html;b.onclick=onclick;grid.append(b);};
  card('daily-card',`<span class="num">☀️ ${T.daily.toUpperCase()}</span><strong>${T.daily}</strong><span class="muted">${daily?T.dailySub:T.dailyOff}</span>${daily&&best(daily.id)?`<span class="stars">${starText(best(daily.id).stars)}</span>`:''}`,()=>play(daily),!daily);
  for(const w of data.worlds){
    const stars=worldStars(w.id),open=worldOpen(w.id),total=data.levels.filter(l=>l.world===w.id).length*3;
    card(w.id===7?'storm-card':'',`<span class="num">${T.world} ${w.id}</span><strong>${escapeHTML(pick(w.place))}</strong><span class="muted">${escapeHTML(pick(w.learn))}</span><span class="stars" aria-label="${stars} of ${total} stars">★ ${stars}/${total}</span>${open?'':`<span class="muted">🔒 ${T.locked}</span>`}`,()=>world(w.id),!open);
  }
  card('make-card',`<span class="num">🛠️</span><strong>${T.make.replace('🛠️ ','')}</strong><span class="muted">${T.makeSub}</span>`,()=>editor());
}

function world(id){
  stopLoop();setHash(`w${id}`);
  const w=data.worlds.find(x=>x.id===id);
  const list=data.levels.filter(l=>l.world===id);
  app.innerHTML=`${topBar(`${T.world} ${id}: ${pick(w.place)}`)}<p class="hub-sub">${escapeHTML(pick(w.learn))}</p>
    <p class="run-row"><button class="btn ghost" id="back">${T.back}</button><button class="btn mint" id="remix" title="${escapeHTML(T.remixSub)}">${T.remix}</button></p><div class="level-grid stagger" id="levels"></div>`;
  app.querySelector('#back').onclick=home;
  app.querySelector('#remix').onclick=()=>loadRemix(id);
  const grid=app.querySelector('#levels');
  list.forEach((level,i)=>{
    const open=i===0||best(list[i-1].id);
    const b=document.createElement('button');
    b.className='level-btn';b.type='button';b.disabled=!open;
    const s=best(level.id)?.stars??0;
    b.innerHTML=`<b>${level.index}</b>${escapeHTML(level.title)}<br><span class="stars">${open?starText(s):'🔒'}</span>`;
    b.onclick=()=>play(level);
    grid.append(b);
  });
}

async function loadRemix(worldId){
  let level=null;
  if(await online()){try{level=await api(`/api/levels/remix?world=${worldId}`,{auth:false});}catch{level=null;}}
  if(!level){
    remixPool??=await fetch('./data/kitty-code-remix.json').then(r=>r.json()).catch(()=>({}));
    const list=remixPool[String(worldId)]??[];
    level=list[Math.floor(Math.random()*list.length)];
  }
  if(level)play(level);
}

// ---- level codes for sharing your own levels ------------------------------------
function customLevel(code){
  const lv=decodeLevel(code);
  if(!lv)return null;
  return{id:`custom-${code.slice(0,12)}`,custom:true,world:0,index:0,title:lv.title||T.custom,hint:{en:'A level made by a friend!',bn:'বন্ধুর বানানো লেভেল!'},map:lv.map,par:lv.par,battery:lv.battery,code};
}

// ---- drawing ---------------------------------------------------------------------
// Older browsers lack roundRect: fall back to a plain rectangle.
if(!CanvasRenderingContext2D.prototype.roundRect)CanvasRenderingContext2D.prototype.roundRect=function(x,y,w,h){this.rect(x,y,w,h);};
const COLORS={ground:'#b5643e',ground2:'#a85a37',rock:'#5b3a2e',rockTop:'#7a5140',grid:'#00000022'};
function dirAngle(d){return{N:-Math.PI/2,E:0,S:Math.PI/2,W:Math.PI}[d];}
function makeBoard(canvas,level){
  const rows=level.map,h=rows.length,w=Math.max(...rows.map(r=>r.length));
  const size=Math.floor(Math.min(64,640/Math.max(w,h)));
  const dpr=Math.min(window.devicePixelRatio||1,2);
  canvas.width=w*size*dpr;canvas.height=h*size*dpr;canvas.style.aspectRatio=`${w}/${h}`;
  // The ground, rocks, ice and pads never change: draw them once.
  const bg=document.createElement('canvas');bg.width=canvas.width;bg.height=canvas.height;
  const b=bg.getContext('2d');b.setTransform(dpr,0,0,dpr,0,0);
  const rocks=[];
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const ch=rows[y][x]??'#';
    b.fillStyle=(x+y)%2?COLORS.ground:COLORS.ground2;b.fillRect(x*size,y*size,size,size);
    if(ch==='~'){
      const g=b.createLinearGradient(x*size,y*size,(x+1)*size,(y+1)*size);g.addColorStop(0,'#e9f8ff');g.addColorStop(1,'#a8d8f0');
      b.fillStyle=g;b.beginPath();b.roundRect(x*size+2,y*size+2,size-4,size-4,size*.18);b.fill();
      b.strokeStyle='#ffffffaa';b.lineWidth=2;b.beginPath();b.moveTo(x*size+size*.2,y*size+size*.7);b.lineTo(x*size+size*.45,y*size+size*.3);b.stroke();
    }
    if(ch==='+'){b.fillStyle='#2d3b4f';b.beginPath();b.roundRect(x*size+size*.12,y*size+size*.12,size*.76,size*.76,size*.12);b.fill();}
    if(ch==='#')rocks.push({x,y,shake:0});
  }
  b.strokeStyle=COLORS.grid;b.lineWidth=1;
  for(let x=0;x<=w;x++){b.beginPath();b.moveTo(x*size,0);b.lineTo(x*size,h*size);b.stroke();}
  for(let y=0;y<=h;y++){b.beginPath();b.moveTo(0,y*size);b.lineTo(w*size,y*size);b.stroke();}
  const pads=[];for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(rows[y][x]==='+')pads.push({x,y,flash:0});
  return{canvas,bg,size,dpr,w,h,rocks,pads,particles:[],confetti:[]};
}
function drawRock(g,size,r,t){
  const wob=r.shake>0?Math.sin(t*60)*r.shake*size*.08:0;
  g.save();g.translate(r.x*size+size/2+wob,r.y*size+size/2);
  g.fillStyle=COLORS.rock;g.beginPath();g.ellipse(0,size*.08,size*.42,size*.34,0,0,7);g.fill();
  g.fillStyle=COLORS.rockTop;g.beginPath();g.ellipse(-size*.06,-size*.02,size*.25,size*.17,0,0,7);g.fill();
  g.restore();
}
function drawRover(g,size,x,y,angle,t,moving){
  g.save();g.translate(x,y);g.rotate(angle);
  const bob=reducedMotion?0:Math.sin(t*(moving?22:3))*size*(moving?.02:.012);
  g.translate(0,bob);
  g.fillStyle='#fff0d7';g.strokeStyle='#14233c';g.lineWidth=2;
  g.beginPath();g.roundRect(-size*.32,-size*.26,size*.58,size*.52,size*.12);g.fill();g.stroke();
  g.fillStyle='#14233c';
  for(const wy of[-.3,.3])for(const wx of[-.22,.18]){g.beginPath();g.roundRect(size*wx-size*.08,size*wy-size*.07,size*.16,size*.14,3);g.fill();
    if(moving&&!reducedMotion){g.fillStyle='#ffffff55';g.fillRect(size*wx-size*.06+((t*40)%1)*size*.08,size*wy-size*.07,size*.02,size*.14);g.fillStyle='#14233c';}}
  g.fillStyle='#f7c873';g.beginPath();g.moveTo(size*.38,0);g.lineTo(size*.22,-size*.12);g.lineTo(size*.22,size*.12);g.closePath();g.fill();
  g.fillStyle='#a9e5d1';g.beginPath();g.arc(-size*.06,0,size*.09,0,7);g.fill();
  g.restore();
}
function drawDevil(g,size,x,y,t){
  // A spinning funnel of dust: wide at the top, thin at the ground, swaying as it goes.
  g.save();g.translate(x,y);
  g.fillStyle='#0000002e';g.beginPath();g.ellipse(0,size*.34,size*.26,size*.09,0,0,7);g.fill();
  const sway=reducedMotion?0:Math.sin(t*3)*size*.05;
  for(let k=0;k<6;k++){
    const yy=size*(.3-k*.13),r=size*(.07+k*.065),a=reducedMotion?k:t*(9-k)+k*1.3,dx=sway*k/5;
    g.lineWidth=size*.075;g.lineCap='round';
    g.strokeStyle='#6b3d24cc';g.beginPath();g.ellipse(dx,yy+1.5,r,r*.36,0,a,a+Math.PI*1.25);g.stroke();
    g.strokeStyle=`rgba(247,${222-k*6},${190-k*8},.95)`;g.beginPath();g.ellipse(dx,yy,r,r*.36,0,a,a+Math.PI*1.25);g.stroke();
  }
  for(let k=0;k<7;k++){const a=(reducedMotion?k:t*5)+k*.9;g.fillStyle='#f3d6b4';g.beginPath();g.arc(Math.cos(a)*size*.38+sway,Math.sin(a*1.3)*size*.14-size*.32,size*.035,0,7);g.fill();}
  g.restore();
}

// ---- playing -------------------------------------------------------------------------
function play(level,{fromEditor=null}={}){
  if(!level)return;
  stopLoop();
  setHash(fromEditor?'make':level.custom?`custom=${level.code}`:level.id);
  const w=level.world?data.worlds.find(x=>x.id===level.world):null;
  const toolbox=w?.toolbox??ALL_TOOLS;
  const saved=best(level.id);
  const has=c=>level.map.some(r=>r.includes(c));
  const legend=['rover','rock','sample','base',...(has('~')?['ice']:[]),...(has('+')?['pad']:[]),...(has('@')||has('$')?['devil']:[])];
  const title=level.custom?`🛠️ ${level.title}`:level.remix?`🎲 ${T.remix.replace('🎲 ','')} · ${T.world} ${level.world}`:level.world?`${level.world}-${level.index} · ${level.title}`:`☀️ ${T.daily} · ${level.date}`;
  app.innerHTML=`${topBar(title)}
  <p class="hub-sub">💡 ${escapeHTML(pick(level.hint))} <span class="chip">${T.par}: ${level.par} ${T.cmds}</span>${saved?` <span class="stars">${starText(saved.stars)}</span>`:''}</p>
  <div class="play">
    <div><div class="map-box">${level.battery?`<div class="battery"><span>⚡ ${T.battery}</span><div class="bar"><span id="energy" style="width:100%"></span></div><b id="energyText">${level.battery}</b></div>`:''}<canvas id="map" role="img" aria-label="Mars map"></canvas><div class="map-legend">${legend.map(k=>`<span>${T.legend[k]}</span>`).join('')}</div></div><p class="status-line" id="status"></p></div>
    <div>
      <div class="toolbox" id="toolbox"></div>
      <div class="editor"><div class="gutter" id="gutter" aria-hidden="true"></div><textarea id="code" spellcheck="false" autocapitalize="characters" aria-label="Your Kitty Code"></textarea></div>
      <div class="run-row" style="margin-top:12px"><button class="btn" id="run">${T.run}</button><button class="btn ghost" id="step">${T.step}</button><button class="btn ghost" id="reset">${T.reset}</button><button class="btn ghost" id="clear">${T.clear}</button><label>${T.speed}<input type="range" id="speed" min="1" max="5" value="3"></label></div>
      <div id="message" class="message" hidden></div>
      <p class="run-row"><button class="btn ghost" id="back">${T.back}</button>${fromEditor?`<button class="btn ghost" id="editAgain">${T.edit}</button>`:''}</p>
    </div>
  </div>`;
  const $=id=>app.querySelector('#'+id);
  const canvas=$('map'),code=$('code'),gutter=$('gutter'),message=$('message'),status=$('status');
  code.value=saved?.code??'';
  const board=makeBoard(canvas,level);
  const g=canvas.getContext('2d');
  const fresh=()=>{const s=parseMap(level.map);return{x:s.x,y:s.y,dir:s.dir,angle:dirAngle(s.dir),samples:s.samples,devils:s.devils.map(d=>[d[0],d[1]]),energy:level.battery,base:s.base,bonk:false,spin:0};};
  let view=fresh(),from=null,anim=null,trail=[],playing=null,stepping=false,celebrate=0;
  // --- the animation loop: draws every frame so things keep moving
  let alive=true,last=performance.now(),clock=0;
  const frame=now=>{
    if(!alive)return;
    const dt=Math.min(.05,(now-last)/1000);last=now;clock+=dt;
    if(anim){anim.t+=dt;if(anim.t>=anim.dur){anim=null;if(playing&&!stepping)advance();}}
    render(dt);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
  stopLoop=()=>{alive=false;};
  const ease=t=>t<.5?2*t*t:1-(-2*t+2)**2/2;
  function puff(x,y,color='#c48a64',n=4,speed=30){
    if(reducedMotion)return;
    for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2;board.particles.push({x,y,vx:Math.cos(a)*speed*(.3+Math.random()),vy:Math.sin(a)*speed*(.3+Math.random())-10,life:.6+Math.random()*.4,max:1,size:2+Math.random()*4,color});}
  }
  function render(dt){
    const {size,w:W,h:H}=board;
    g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,canvas.width,canvas.height);
    g.drawImage(board.bg,0,0);
    g.setTransform(board.dpr,0,0,board.dpr,0,0);
    // ice sheen sliding across the ice
    if(!reducedMotion)for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(level.map[y][x]==='~'){
      const p=((clock*.6+(x+y)*.15)%1.6)-.3;if(p<0||p>1)continue;
      g.fillStyle='#ffffff55';g.beginPath();g.moveTo(x*size+p*size,y*size+3);g.lineTo(x*size+p*size+size*.12,y*size+3);g.lineTo(x*size+p*size-size*.2,(y+1)*size-3);g.lineTo(x*size+p*size-size*.32,(y+1)*size-3);g.fill();
    }
    // charging pads glow
    g.font=`${Math.round(size*.5)}px system-ui, 'Apple Color Emoji','Segoe UI Emoji',sans-serif`;g.textAlign='center';g.textBaseline='middle';
    for(const p of board.pads){
      p.flash=Math.max(0,p.flash-dt);
      const glow=.35+.25*Math.sin(clock*3+p.x)+p.flash;
      g.strokeStyle=`rgba(126,244,224,${Math.min(1,glow)})`;g.lineWidth=3;g.beginPath();g.roundRect(p.x*size+size*.14,p.y*size+size*.14,size*.72,size*.72,size*.12);g.stroke();
      g.fillStyle='#fff';g.fillText('⚡',p.x*size+size/2,p.y*size+size/2);
    }
    for(const r of board.rocks){r.shake=Math.max(0,r.shake-dt*1.6);drawRock(g,size,r,clock);}
    // tracks
    g.fillStyle='#00000030';
    for(const p of trail){g.beginPath();g.arc(p.x*size+size/2,p.y*size+size/2,size*.07,0,7);g.fill();}
    // base
    const [bx,by]=view.base;
    const pulse=reducedMotion?0:Math.sin(clock*2.5)*.05;
    g.fillStyle='#a9e5d1aa';g.beginPath();g.arc(bx*size+size/2,by*size+size/2,size*(.44+pulse),0,7);g.fill();
    g.font=`${Math.round(size*.62)}px system-ui, 'Apple Color Emoji','Segoe UI Emoji',sans-serif`;
    g.fillStyle='#fff';g.fillText('🏠',bx*size+size/2,by*size+size/2);
    // samples bob and sparkle
    for(const key of view.samples){
      const[sx,sy]=key.split(',').map(Number);
      const bob=reducedMotion?0:Math.sin(clock*3+sx*2+sy)*size*.05;
      g.fillText('💎',sx*size+size/2,sy*size+size/2+bob);
      if(!reducedMotion&&Math.random()<dt*1.5)puff(sx*size+size*(.2+Math.random()*.6),sy*size+size*.3,'#e8fbff',1,8);
    }
    // where things are this frame (gliding between steps)
    const k=anim?ease(Math.min(1,anim.t/anim.dur)):1;
    const lerp=(a,b)=>a+(b-a)*k;
    const rx=from&&anim?lerp(from.x,view.x):view.x,ry=from&&anim?lerp(from.y,view.y):view.y;
    let ang=view.angle;if(from&&anim){let d=view.angle-from.angle;d=Math.atan2(Math.sin(d),Math.cos(d));ang=from.angle+d*k;}
    view.spin=Math.max(0,view.spin-dt*1.2);
    ang+=view.spin*12;
    view.devils.forEach((d,i)=>{const f=from&&anim&&from.devils[i]?from.devils[i]:d;drawDevil(g,size,(lerp(f[0],d[0])+.5)*size,(lerp(f[1],d[1])+.5)*size,clock+i);});
    const moving=!!anim&&(rx!==view.x||ry!==view.y||(from&&(from.x!==view.x||from.y!==view.y)));
    if(moving&&Math.random()<.5)puff((rx+.5)*size-Math.cos(ang)*size*.3,(ry+.5)*size-Math.sin(ang)*size*.3,anim?.slide?'#e9f8ff':'#c48a64',1,anim?.slide?40:20);
    drawRover(g,size,(rx+.5)*size,(ry+.5)*size,ang,clock,moving);
    if(view.bonk){g.font=`${Math.round(size*.62)}px system-ui, 'Apple Color Emoji','Segoe UI Emoji',sans-serif`;g.fillText('💥',(rx+.5)*size+Math.cos(ang)*size*.4,(ry+.5)*size+Math.sin(ang)*size*.4-size*.2);}
    // particles and confetti
    for(const p of board.particles){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=40*dt;g.globalAlpha=Math.max(0,p.life/p.max);g.fillStyle=p.color;g.beginPath();g.arc(p.x,p.y,p.size,0,7);g.fill();}
    g.globalAlpha=1;
    board.particles=board.particles.filter(p=>p.life>0);
    if(celebrate>0){
      celebrate-=dt;
      for(const c of board.confetti){c.y+=c.vy*dt;c.x+=Math.sin(clock*4+c.p)*20*dt;c.r+=dt*6;g.save();g.translate(c.x,c.y);g.rotate(c.r);g.fillStyle=c.color;g.fillRect(-4,-2,8,4);g.restore();}
    }
  }
  const redrawEnergy=e=>{if(level.battery&&e!==undefined&&e!==null){$('energy').style.width=`${Math.max(0,e/level.battery*100)}%`;$('energy').classList.toggle('low',e<=Math.ceil(level.battery*.25));$('energyText').textContent=e;}};
  const renderGutter=(active=null,bad=null)=>{
    const n=Math.max(code.value.split('\n').length,8);
    gutter.innerHTML=Array.from({length:n},(_,i)=>`<span class="${i+1===active?'active':''}${i+1===bad?' bad':''}">${i+1}</span>`).join('');
    gutter.scrollTop=code.scrollTop;
  };
  const draftKey=`astro-kitty-code-draft-${level.id}`;
  const localDraft=()=>{try{sessionStorage.setItem(draftKey,code.value);}catch{}};
  try{const d=sessionStorage.getItem(draftKey);if(d&&!saved)code.value=d;}catch{}
  renderGutter();
  code.addEventListener('input',()=>{renderGutter();localDraft();});
  code.addEventListener('scroll',()=>{gutter.scrollTop=code.scrollTop;});
  const box=$('toolbox');
  for(const key of toolbox){
    if(!SNIPPETS[key])continue;
    const b=document.createElement('button');b.type='button';
    b.className=CONTROL.has(key)?'ctl':CONDS.has(key)?'cond':key==='wait'?'wait':'';
    b.textContent=SNIPPETS[key].split('\n')[0];
    b.onclick=()=>insert(SNIPPETS[key],CONDS.has(key));
    box.append(b);
  }
  function insert(snippet,inline){
    const start=code.selectionStart,end=code.selectionEnd,v=code.value;
    if(inline){
      const text=(start>0&&!/\s$/.test(v.slice(0,start))?' ':'')+snippet;
      code.setRangeText(text,start,end,'end');
    }else{
      const lineStart=v.lastIndexOf('\n',start-1)+1;
      const before=v.slice(lineStart,start);
      const indent=(before.match(/^ */)??[''])[0];
      const lines=snippet.split('\n').map((l,k)=>(k===0?'':indent)+l);
      const text=(before.trim()?'\n'+indent:'')+lines.join('\n')+'\n'+indent;
      code.setRangeText(text,start,end,'end');
      const middle=lines.findIndex(l=>l.trim()==='');
      if(middle>0){
        const offset=(before.trim()?1+indent.length:0)+lines.slice(0,middle).join('\n').length+1+lines[middle].length;
        code.setSelectionRange(start+offset,start+offset);
      }
    }
    code.focus();renderGutter();localDraft();
  }
  const show=(html,kind='')=>{message.hidden=false;message.className=`message ${kind}`;message.innerHTML=html;};
  function reset(){playing=null;anim=null;from=null;view=fresh();trail=[];celebrate=0;board.particles=[];status.textContent='';message.hidden=true;renderGutter();redrawEnergy(level.battery);}
  function prepare(){
    const result=run(code.value,level.map,level.par,level.battery??null);
    if(result.status==='error'){
      const e=result.error;renderGutter(null,e.line);
      show(`<strong>${T.error} (line ${e.line}):</strong> ${escapeHTML(e.message)}${e.suggestion?` ${T.didYouMean} <b>${escapeHTML(e.suggestion)}</b>?`:''}`,'bad');
      speak(e.message);
      return null;
    }
    return{result,i:0};
  }
  const delay=()=>[.7,.48,.32,.18,.07][+$('speed').value-1];
  function applyStep(entry){
    from={...view,devils:view.devils.map(d=>d.slice())};
    view.x=entry.x;view.y=entry.y;view.dir=entry.dir;view.angle=dirAngle(entry.dir);view.bonk=entry.op==='bonk';
    if(entry.devils)view.devils=entry.devils.map(d=>d.slice());
    if(entry.energy!==undefined){view.energy=entry.energy;redrawEnergy(entry.energy);}
    if(entry.op==='move'||entry.op==='slide')trail.push({x:entry.x,y:entry.y});
    const {size}=board;
    if(entry.op==='drill'&&entry.note==='sample'){view.samples.delete(`${entry.x},${entry.y}`);puff((entry.x+.5)*size,(entry.y+.5)*size,'#7ef4e0',16,60);}
    if(entry.op==='bonk'){const d={N:[0,-1],E:[1,0],S:[0,1],W:[-1,0]}[entry.dir];const r=board.rocks.find(r=>r.x===entry.x+d[0]&&r.y===entry.y+d[1]);if(r)r.shake=1;puff((entry.x+.5+d[0]*.5)*size,(entry.y+.5+d[1]*.5)*size,'#7a5140',12,50);canvas.classList.remove('shake');void canvas.offsetWidth;canvas.classList.add('shake');}
    if(entry.op==='charge'){const p=board.pads.find(p=>p.x===entry.x&&p.y===entry.y);if(p)p.flash=1.2;puff((entry.x+.5)*size,(entry.y+.5)*size,'#7ef4e0',14,50);}
    if(entry.op==='blown'){view.spin=1.5;puff((entry.x+.5)*size,(entry.y+.5)*size,'#d9a882',20,70);}
    if(entry.op==='flat')puff((entry.x+.5)*size,(entry.y+.2)*size,'#5c6676',8,20);
    renderGutter(entry.line);
    const line=code.value.split('\n')[entry.line-1]??'';
    status.textContent=`${T.running} ${entry.line}: ${line.trim()}${entry.op==='scan'?` → ${T.seen[entry.note]??entry.note}`:''}${entry.op==='drill'?(entry.note==='sample'?' 💎!':' …'):''}${entry.op==='slide'?' 🧊💨':''}${entry.op==='charge'?' ⚡':''}`;
    anim={t:0,dur:entry.op==='slide'?delay()*.55:delay(),slide:entry.op==='slide'};
  }
  function advance(){
    if(!playing)return false;
    const entry=playing.result.trace[playing.i++];
    if(entry){applyStep(entry);return true;}
    const result=playing.result;playing=null;finish(result);return false;
  }
  // On phones the map sits above the code: bring it into view when the rover starts.
  const showMap=()=>{const r=canvas.getBoundingClientRect();if(r.top<0||r.bottom>innerHeight)canvas.scrollIntoView({block:'center',behavior:reducedMotion?'auto':'smooth'});};
  $('run').onclick=()=>{reset();playing=prepare();stepping=false;if(playing){showMap();advance();}};
  $('step').onclick=()=>{stepping=true;if(!playing){reset();playing=prepare();if(playing)showMap();}if(playing&&!anim)advance();};
  $('reset').onclick=reset;
  $('clear').onclick=()=>{code.value='';reset();localDraft();code.focus();};
  $('back').onclick=()=>level.custom?home():level.world?world(level.world):home();
  $('editAgain')?.addEventListener('click',()=>editor(fromEditor));
  redrawEnergy(level.battery);

  async function finish(result){
    renderGutter();
    if(result.status!=='success'){
      const title={crashed:T.crashed,not_home:T.notHome,too_long:T.tooLong,flat:T.flat,blown:T.blown}[result.status]??'';
      const text=title&&result.message.startsWith(title)?result.message.slice(title.length).trim():result.message;
      show(`<strong>${title}</strong> ${escapeHTML(text)}`,'bad');
      speak(result.message);
      return;
    }
    const {size}=board;
    if(!reducedMotion){celebrate=3;board.confetti=Array.from({length:60},(_,i)=>({x:Math.random()*board.w*size,y:-Math.random()*200,vy:80+Math.random()*120,r:Math.random()*6,p:i,color:['#f7c873','#7ef4e0','#ff8ab3','#bba8ec','#5ef08a'][i%5]}));puff((view.base[0]+.5)*size,(view.base[1]+.5)*size,'#f7c873',30,90);}
    const prev=best(level.id);
    if(!level.remix&&!fromEditor&&(!prev||result.stars>prev.stars||(result.stars===prev.stars&&result.commands<prev.commands))){
      progress.levels[level.id]={stars:result.stars,commands:result.commands,code:code.value};
      writeJSON(PROGRESS,progress);
    }
    const cheer=T.cheers[Math.floor(Math.random()*T.cheers.length)];
    speak(`${cheer} ${T.success}`);
    const list=level.world&&!level.remix?data.levels.filter(l=>l.world===level.world):[];
    const next=list[list.findIndex(l=>l.id===level.id)+1];
    const overlay=document.createElement('div');overlay.className='result';
    const checks=[[true,T.star1],...(fromEditor?[]:[[result.commands<=level.par,T.star2.replace('{par}',level.par)]]),[result.collected===result.samples,T.star3]];
    const share=fromEditor?(()=>{const lv={...level,par:result.commands,title:fromEditor.title??''};const codeStr=encodeLevel(lv);return{url:`${location.origin}${location.pathname}#custom=${codeStr}`,code:codeStr};})():null;
    overlay.innerHTML=`<div class="card" role="dialog" aria-label="${T.success}"><h2>${cheer} ${T.success}</h2><div class="big-stars">${Array.from({length:3},(_,i)=>`<span class="${i<result.stars?'on':'dim'}" style="animation-delay:${i*.18}s">★</span>`).join('')}</div>
      <ul style="text-align:left;list-style:none;padding:0">${checks.map(([ok,txt])=>`<li>${ok?'✅':'⬜'} ${escapeHTML(txt)}</li>`).join('')}</ul>
      <p class="muted">${result.commands} ${T.cmds}${fromEditor?'':` · ${T.par} ${level.par}`} · 💎 ${result.collected}/${result.samples}</p><p id="saveNote" class="muted"></p>
      ${share?`<div class="share"><h3>🔗 ${T.shareTitle}</h3><p class="muted">${T.shareHelp.replace('{par}',result.commands)}</p><input readonly value="${escapeHTML(share.url)}" aria-label="${T.shareTitle}"><button class="btn mint" id="copy">${T.copy}</button></div>`:''}
      <div class="run-row" style="justify-content:center">${next?`<button class="btn" id="next">${T.next}</button>`:''}${level.remix?`<button class="btn" id="another">${T.another}</button>`:''}<button class="btn ghost" id="again">${T.again}</button>${!next&&level.world&&!level.remix?`<a class="btn mint" href="./quiz.html?part=kittycode">${T.quiz}</a>`:''}${fromEditor?`<button class="btn ghost" id="edit2">${T.edit}</button>`:`<button class="btn ghost" id="toWorlds">${T.worlds}</button>`}</div></div>`;
    document.body.append(overlay);
    overlay.querySelector('#again').onclick=()=>{overlay.remove();reset();};
    overlay.querySelector('#toWorlds')?.addEventListener('click',()=>{overlay.remove();home();});
    overlay.querySelector('#next')?.addEventListener('click',()=>{overlay.remove();play(next);});
    overlay.querySelector('#another')?.addEventListener('click',()=>{overlay.remove();loadRemix(level.world);});
    overlay.querySelector('#edit2')?.addEventListener('click',()=>{overlay.remove();editor(fromEditor);});
    overlay.querySelector('#copy')?.addEventListener('click',async e=>{try{await navigator.clipboard.writeText(share.url);e.target.textContent=T.copied;}catch{overlay.querySelector('.share input').select();}});
    (overlay.querySelector('#next')??overlay.querySelector('#another')??overlay.querySelector('#again')).focus();
    if(level.remix||level.custom)return;
    try{
      const r=await submit(`/api/levels/${level.id}/submit`,{code:code.value});
      overlay.querySelector('#saveNote').textContent=r?T.saved:T.queued;
    }catch{overlay.querySelector('#saveNote').textContent='';}
  }
}

// ---- level maker -----------------------------------------------------------------------
const TILES=[['.','🟫','ground'],['#','🪨','rock'],['*','💎','sample'],['B','🏠','base'],['>','🐾','rover'],['~','🧊','ice'],['+','⚡','pad'],['@','🌪️↔','devil'],['$','🌪️↕','devil']];
function editor(draft=null){
  stopLoop();setHash('make');
  // The level you are making is kept for this browser tab, so a reload does not lose it.
  const MAKER='astro-kitty-maker-draft';
  let kept=null;try{kept=JSON.parse(sessionStorage.getItem(MAKER)??'null');}catch{}
  const state=draft?{...draft,map:draft.map.map(r=>r)}:kept&&Array.isArray(kept.map)&&kept.map.length?kept:{map:['>......','..#....','...#*..','.......','......B'],battery:null,title:''};
  const keep=()=>{try{sessionStorage.setItem(MAKER,JSON.stringify(state));}catch{}};
  let brush='#';
  app.innerHTML=`${topBar(T.editor)}<p class="hub-sub">${T.editHelp}</p>
    <div class="maker"><div class="palette" id="palette">${TILES.map(([c,icon,name])=>`<button type="button" data-tile="${c}" title="${escapeHTML(T.legend[name]??name)}">${icon}</button>`).join('')}</div>
    <div class="maker-body"><div class="maker-grid" id="grid" role="grid"></div>
    <div class="maker-side card"><label class="wide">${T.levelName}<input id="name" maxlength="30" value="${escapeHTML(state.title)}" placeholder="${escapeHTML(T.custom)}"></label>
      <div class="run-row"><label>${T.width} <input type="number" id="w" min="3" max="12" value="${state.map[0].length}"></label><label>${T.height} <input type="number" id="h" min="3" max="10" value="${state.map.length}"></label></div>
      <div class="run-row"><label><input type="checkbox" id="useBat" ${state.battery?'checked':''}> ⚡ ${T.useBattery}</label><input type="number" id="bat" min="2" max="60" value="${state.battery??12}" ${state.battery?'':'disabled'} aria-label="${T.useBattery}"></div>
      <p class="run-row"><button class="btn" id="test">${T.test}</button><button class="btn ghost" id="back">${T.back}</button></p><p id="msg" class="muted" role="status"></p></div></div></div>`;
  const grid=app.querySelector('#grid');
  const draw=()=>{
    grid.style.gridTemplateColumns=`repeat(${state.map[0].length},1fr)`;
    grid.innerHTML=state.map.map((row,y)=>[...row].map((c,x)=>`<button type="button" data-x="${x}" data-y="${y}" aria-label="${x+1},${y+1}" class="cell c-${{'.':'g','#':'r','*':'s','B':'b','~':'i','+':'p','@':'d','$':'d'}[c]??'g'}">${{'#':'🪨','*':'💎',B:'🏠','~':'🧊','+':'⚡','@':'🌪️','$':'🌪️','^':'⬆️','>':'➡️','v':'⬇️','<':'⬅️'}[c]??''}</button>`).join('')).join('');
  };
  const set=(x,y,c)=>{
    const rows=state.map.map(r=>[...r]);
    if(c==='>'){
      const cur=rows[y][x],turn={'^':'>','>':'v','v':'<','<':'^'};
      for(const r of rows)for(let i=0;i<r.length;i++)if('^>v<'.includes(r[i]))r[i]='.';
      rows[y][x]='^>v<'.includes(cur)?turn[cur]:'>';
    }else if(c==='B'){for(const r of rows)for(let i=0;i<r.length;i++)if(r[i]==='B')r[i]='.';rows[y][x]='B';}
    else rows[y][x]=c;
    state.map=rows.map(r=>r.join(''));draw();keep();
  };
  let painting=false,lastCell='';
  const cellAt=e=>document.elementFromPoint(e.clientX,e.clientY)?.closest?.('#grid [data-x]');
  grid.addEventListener('pointerdown',e=>{const b=e.target.closest('[data-x]');if(!b)return;e.preventDefault();painting=brush!=='>'&&brush!=='B';lastCell=`${b.dataset.x},${b.dataset.y}`;set(+b.dataset.x,+b.dataset.y,brush);});
  grid.addEventListener('pointermove',e=>{if(!painting)return;const b=cellAt(e);if(!b||`${b.dataset.x},${b.dataset.y}`===lastCell)return;lastCell=`${b.dataset.x},${b.dataset.y}`;set(+b.dataset.x,+b.dataset.y,brush);});
  const stopPaint=()=>{painting=false;};
  grid.addEventListener('pointerup',stopPaint);grid.addEventListener('pointercancel',stopPaint);grid.addEventListener('pointerleave',stopPaint);
  // Keyboard: Enter or Space on a cell paints it.
  grid.addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const b=e.target.closest('[data-x]');if(!b)return;e.preventDefault();const {x,y}=b.dataset;set(+x,+y,brush);grid.querySelector(`[data-x="${x}"][data-y="${y}"]`)?.focus();});
  const pal=app.querySelector('#palette');
  const pick=c=>{brush=c;pal.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.tile===c));};
  pal.querySelectorAll('button').forEach(b=>b.onclick=()=>pick(b.dataset.tile));
  pick('#');
  const resize=()=>{
    const W=Math.max(3,Math.min(12,+app.querySelector('#w').value||7)),H=Math.max(3,Math.min(10,+app.querySelector('#h').value||5));
    state.map=Array.from({length:H},(_,y)=>Array.from({length:W},(_,x)=>state.map[y]?.[x]??'.').join(''));draw();keep();
  };
  app.querySelector('#w').onchange=resize;app.querySelector('#h').onchange=resize;
  app.querySelector('#useBat').onchange=e=>{app.querySelector('#bat').disabled=!e.target.checked;};
  app.querySelector('#back').onclick=home;
  app.querySelector('#test').onclick=()=>{
    const flat=state.map.join('');
    if((flat.match(/[\^>v<]/g)??[]).length!==1||!flat.includes('B')){app.querySelector('#msg').textContent=T.needStart;return;}
    state.battery=app.querySelector('#useBat').checked?Math.max(2,Math.min(60,+app.querySelector('#bat').value||12)):null;
    state.title=app.querySelector('#name').value.trim().slice(0,30);keep();
    const level={id:'custom-draft',custom:true,world:0,index:0,title:state.title||T.custom,hint:{en:'Beat your own level to share it!',bn:'শেয়ার করতে নিজের লেভেলে জেতো!'},map:state.map,par:99,battery:state.battery};
    play(level,{fromEditor:{...state}});
  };
  draw();
}

function route(){
  const hash=location.hash.slice(1);
  if(hash.startsWith('custom=')){const level=customLevel(hash.slice(7));if(level)return play(level);home();app.querySelector('.hub-sub').textContent=T.badCode;return;}
  if(hash==='make')return editor();
  const level=data.levels.find(l=>l.id===hash);
  if(level&&worldOpen(level.world))play(level);
  else if(/^w[1-7]$/.test(hash)&&worldOpen(+hash[1]))world(+hash[1]);
  else if(hash.startsWith('daily')&&daily)play(daily);
  else home();
}

async function start(){
  data=await fetch('./data/kitty-code-levels.json').then(r=>r.json());
  if(await online()){try{daily=await api('/api/daily',{auth:false});}catch{daily=null;}flushQueue();}
  route();
  window.addEventListener('hashchange',()=>{if(location.hash.slice(1)!==shownHash){document.querySelector('.result')?.remove();route();}});
  mountDhrubo();
}
start();
