// Kitty Code: worlds -> levels -> write code -> watch the rover drive.
import {run,parseMap} from './kitty-code-engine.js?v=10';
import {readJSON,writeJSON,lang,pick,escapeHTML,online,api,submit,speak,topBar,flushQueue} from './online.js?v=10';
import {mountDhrubo} from './dhrubo-chat.js?v=10';

const PROGRESS='astro-kitty-code-v1';
const UNLOCK_STARS=10; // stars needed in a world to open the next one
const app=document.getElementById('app');
const L=lang();
const T={
  en:{title:'Kitty Code',sub:'Drive the rover with simple words. Reach the base, grab samples, write short code!',world:'WORLD',locked:`Get ${UNLOCK_STARS} stars in the world before to open this one`,daily:'Daily Challenge',dailySub:'A new mission every day. Same level for every kitty!',dailyOff:'Connect to the internet to play the Daily Challenge.',
    back:'← Back',run:'▶ Run',step:'Step',reset:'↺ Reset',clear:'Clear',speed:'Speed',par:'Par',cmds:'commands',samples:'samples',next:'Next level →',again:'Try again',worlds:'All worlds',
    success:'Mission complete!',crashed:'Bonk!',notHome:'Not home yet',tooLong:'Too long!',error:'Code problem',didYouMean:'Did you mean',fix:'Fix it',
    star1:'Reached the base',star2:'Code with {par} commands or fewer',star3:'Collected every sample',saved:'Saved to the leaderboard ⭐',queued:'Saved. It will go to the leaderboard when you are online.',
    legend:['🐾 rover','🪨 rock','💎 sample','🏠 base'],running:'Running line',quiz:'Take the Kitty Code quiz',
    cheers:['Shabbash!','Oshadharon!','Brilliant coding!','Purr-fect!']},
  bn:{title:'কিটি কোড',sub:'সহজ শব্দ দিয়ে রোভার চালাও। ঘাঁটিতে পৌঁছাও, নমুনা তোলো, ছোট কোড লেখো!',world:'জগৎ',locked:`এটা খুলতে আগের জগতে ${UNLOCK_STARS}টা তারা লাগবে`,daily:'দৈনিক চ্যালেঞ্জ',dailySub:'প্রতিদিন নতুন মিশন। সব বিড়ালের জন্য একই লেভেল!',dailyOff:'দৈনিক চ্যালেঞ্জ খেলতে ইন্টারনেটে যুক্ত হও।',
    back:'← ফিরে যাও',run:'▶ চালাও',step:'এক ধাপ',reset:'↺ আবার',clear:'মুছো',speed:'গতি',par:'লক্ষ্য',cmds:'কমান্ড',samples:'নমুনা',next:'পরের লেভেল →',again:'আবার চেষ্টা',worlds:'সব জগৎ',
    success:'মিশন সফল!',crashed:'ধাক্কা!',notHome:'এখনো ঘাঁটিতে নয়',tooLong:'অনেক লম্বা!',error:'কোডে সমস্যা',didYouMean:'তুমি কি বলতে চেয়েছ',fix:'ঠিক করো',
    star1:'ঘাঁটিতে পৌঁছেছ',star2:'{par}টা বা কম কমান্ডে কোড',star3:'সব নমুনা তুলেছ',saved:'লিডারবোর্ডে জমা হয়েছে ⭐',queued:'জমা আছে। অনলাইনে গেলে লিডারবোর্ডে যাবে।',
    legend:['🐾 রোভার','🪨 পাথর','💎 নমুনা','🏠 ঘাঁটি'],running:'চলছে লাইন',quiz:'কিটি কোড কুইজ দাও',
    cheers:['শাবাশ!','অসাধারণ!','দারুণ কোডিং!','চমৎকার!']},
}[L];
const SNIPPETS={
  en:{move:'MOVE 1','turn left':'TURN LEFT','turn right':'TURN RIGHT',drill:'DRILL',scan:'SCAN',repeat:'REPEAT 2 TIMES\n  \nEND','repeat until':'REPEAT UNTIL AT BASE\n  \nEND',if:'IF PATH AHEAD\n  \nEND',else:'ELSE',define:'DEFINE HOP\n  \nEND',
    'rock ahead':'ROCK AHEAD','path ahead':'PATH AHEAD','path left':'PATH LEFT','path right':'PATH RIGHT','sample here':'SAMPLE HERE','at base':'AT BASE',not:'NOT'},
  bn:{move:'এগোও ১','turn left':'বামে ঘোরো','turn right':'ডানে ঘোরো',drill:'খনন',scan:'স্ক্যান',repeat:'পুনরাবৃত্তি ২ বার\n  \nশেষ','repeat until':'পুনরাবৃত্তি যতক্ষণ না ঘাঁটিতে\n  \nশেষ',if:'যদি পথ সামনে\n  \nশেষ',else:'নইলে',define:'নাম HOP\n  \nশেষ',
    'rock ahead':'পাথর সামনে','path ahead':'পথ সামনে','path left':'পথ বামে','path right':'পথ ডানে','sample here':'নমুনা এখানে','at base':'ঘাঁটিতে',not:'না'},
}[L];
const CONTROL=new Set(['repeat','repeat until','if','else','define']);
const CONDS=new Set(['rock ahead','path ahead','path left','path right','sample here','at base','not']);

let data=null,daily=null;
let progress=readJSON(PROGRESS,{levels:{}});
const best=id=>progress.levels[id]??null;
const worldStars=w=>data.levels.filter(l=>l.world===w).reduce((n,l)=>n+(best(l.id)?.stars??0),0);
const worldOpen=w=>w===1||worldStars(w-1)>=UNLOCK_STARS;
const starText=n=>'★'.repeat(n)+'☆'.repeat(3-n);
let shownHash=null;
const setHash=h=>{shownHash=h;if(location.hash.slice(1)!==h)location.hash=h;};

function home(){
  setHash('');
  app.innerHTML=`${topBar(T.title)}<p class="hub-sub">${T.sub}</p><div class="grid" id="worlds"></div>`;
  const grid=app.querySelector('#worlds');
  const dailyCard=document.createElement('button');
  dailyCard.className='world-card daily-card';dailyCard.type='button';
  dailyCard.innerHTML=`<span class="num">☀️ ${T.daily.toUpperCase()}</span><strong>${T.daily}</strong><span class="muted">${daily?T.dailySub:T.dailyOff}</span>${daily&&best(daily.id)?`<span class="stars">${starText(best(daily.id).stars)}</span>`:''}`;
  dailyCard.disabled=!daily;dailyCard.onclick=()=>play(daily);
  grid.append(dailyCard);
  for(const w of data.worlds){
    const stars=worldStars(w.id),open=worldOpen(w.id);
    const b=document.createElement('button');
    b.className='world-card';b.type='button';b.disabled=!open;
    b.innerHTML=`<span class="num">${T.world} ${w.id}</span><strong>${escapeHTML(pick(w.place))}</strong><span class="muted">${escapeHTML(pick(w.learn))}</span><span class="stars" aria-label="${stars} of 30 stars">★ ${stars}/30</span>${open?'':`<span class="muted">🔒 ${T.locked}</span>`}`;
    b.onclick=()=>world(w.id);
    grid.append(b);
  }
}

function world(id){
  setHash(`w${id}`);
  const w=data.worlds.find(x=>x.id===id);
  const list=data.levels.filter(l=>l.world===id);
  app.innerHTML=`${topBar(`${T.world} ${id}: ${pick(w.place)}`)}<p class="hub-sub">${escapeHTML(pick(w.learn))}</p><p><button class="btn ghost" id="back">${T.back}</button></p><div class="level-grid" id="levels"></div>`;
  app.querySelector('#back').onclick=home;
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

// ---- drawing -------------------------------------------------------------
const COLORS={ground:'#b5643e',ground2:'#a85a37',rock:'#5b3a2e',rockTop:'#7a5140',grid:'#00000022'};
function drawMap(canvas,level,state,trail=[]){
  const rows=level.map,h=rows.length,w=Math.max(...rows.map(r=>r.length));
  const size=Math.floor(Math.min(64,640/Math.max(w,h)));
  const dpr=Math.min(window.devicePixelRatio||1,2);
  canvas.width=w*size*dpr;canvas.height=h*size*dpr;canvas.style.aspectRatio=`${w}/${h}`;
  const g=canvas.getContext('2d');g.setTransform(dpr,0,0,dpr,0,0);
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const ch=rows[y][x]??'#';
    g.fillStyle=(x+y)%2?COLORS.ground:COLORS.ground2;g.fillRect(x*size,y*size,size,size);
    if(ch==='#'){
      g.fillStyle=COLORS.rock;g.beginPath();g.ellipse(x*size+size/2,y*size+size*.58,size*.42,size*.34,0,0,7);g.fill();
      g.fillStyle=COLORS.rockTop;g.beginPath();g.ellipse(x*size+size*.44,y*size+size*.48,size*.25,size*.17,0,0,7);g.fill();
    }
  }
  g.strokeStyle=COLORS.grid;g.lineWidth=1;
  for(let x=0;x<=w;x++){g.beginPath();g.moveTo(x*size,0);g.lineTo(x*size,h*size);g.stroke();}
  for(let y=0;y<=h;y++){g.beginPath();g.moveTo(0,y*size);g.lineTo(w*size,y*size);g.stroke();}
  // tracks
  g.fillStyle='#00000033';
  for(const p of trail){g.beginPath();g.arc(p.x*size+size/2,p.y*size+size/2,size*.08,0,7);g.fill();}
  g.font=`${Math.round(size*.62)}px system-ui, 'Apple Color Emoji','Segoe UI Emoji',sans-serif`;g.textAlign='center';g.textBaseline='middle';
  const [bx,by]=state.base;g.fillStyle='#a9e5d1aa';g.beginPath();g.arc(bx*size+size/2,by*size+size/2,size*.44,0,7);g.fill();g.fillStyle='#fff';g.fillText('🏠',bx*size+size/2,by*size+size/2);
  for(const key of state.samples){const[sx,sy]=key.split(',').map(Number);g.fillText('💎',sx*size+size/2,sy*size+size/2);}
  // rover
  const cx=state.x*size+size/2,cy=state.y*size+size/2;
  const angle={N:-Math.PI/2,E:0,S:Math.PI/2,W:Math.PI}[state.dir];
  g.save();g.translate(cx,cy);g.rotate(angle);
  g.fillStyle='#fff0d7';g.strokeStyle='#14233c';g.lineWidth=2;
  g.beginPath();g.roundRect(-size*.32,-size*.26,size*.58,size*.52,size*.12);g.fill();g.stroke();
  g.fillStyle='#14233c';
  for(const wy of[-.3,.3])for(const wx of[-.22,.18]){g.beginPath();g.roundRect(size*wx-size*.08,size*wy-size*.07,size*.16,size*.14,3);g.fill();}
  g.fillStyle='#f7c873';g.beginPath();g.moveTo(size*.38,0);g.lineTo(size*.22,-size*.12);g.lineTo(size*.22,size*.12);g.closePath();g.fill();
  g.fillStyle='#a9e5d1';g.beginPath();g.arc(-size*.06,0,size*.09,0,7);g.fill();
  g.restore();
  if(state.bonk){g.fillStyle='#ff9a8f';g.fillText('💥',cx,cy-size*.4);}
}

// ---- playing ---------------------------------------------------------------
function play(level){
  if(!level)return;
  setHash(level.id);
  const w=level.world?data.worlds.find(x=>x.id===level.world):{toolbox:data.worlds[5].toolbox};
  const saved=best(level.id);
  app.innerHTML=`${topBar(level.world?`${level.world}-${level.index} · ${level.title}`:`☀️ ${T.daily} · ${level.date}`)}
  <p class="hub-sub">💡 ${escapeHTML(pick(level.hint))} <span class="chip">${T.par}: ${level.par} ${T.cmds}</span>${saved?` <span class="stars">${starText(saved.stars)}</span>`:''}</p>
  <div class="play">
    <div><div class="map-box"><canvas id="map" role="img" aria-label="Mars map"></canvas><div class="map-legend">${T.legend.map(x=>`<span>${x}</span>`).join('')}</div></div><p class="status-line" id="status"></p></div>
    <div>
      <div class="toolbox" id="toolbox"></div>
      <div class="editor"><div class="gutter" id="gutter" aria-hidden="true"></div><textarea id="code" spellcheck="false" autocapitalize="characters" aria-label="Your Kitty Code"></textarea></div>
      <div class="run-row" style="margin-top:12px"><button class="btn" id="run">${T.run}</button><button class="btn ghost" id="step">${T.step}</button><button class="btn ghost" id="reset">${T.reset}</button><button class="btn ghost" id="clear">${T.clear}</button><label>${T.speed}<input type="range" id="speed" min="1" max="5" value="3"></label></div>
      <div id="message" class="message" hidden></div>
      <p><button class="btn ghost" id="back">${T.back}</button></p>
    </div>
  </div>`;
  const $=id=>app.querySelector('#'+id);
  const canvas=$('map'),code=$('code'),gutter=$('gutter'),message=$('message'),status=$('status');
  code.value=saved?.code??'';
  const fresh=()=>{const s=parseMap(level.map);return{...s,bonk:false};};
  let view=fresh(),trail=[],timer=null,playing=null;
  const redraw=()=>drawMap(canvas,level,view,trail);
  redraw();
  const renderGutter=(active=null,bad=null)=>{
    const n=Math.max(code.value.split('\n').length,8);
    gutter.innerHTML=Array.from({length:n},(_,i)=>`<span class="${i+1===active?'active':''}${i+1===bad?' bad':''}">${i+1}</span>`).join('');
    gutter.scrollTop=code.scrollTop;
  };
  renderGutter();
  code.addEventListener('input',()=>{renderGutter();localDraft();});
  code.addEventListener('scroll',()=>{gutter.scrollTop=code.scrollTop;});
  const draftKey=`astro-kitty-code-draft-${level.id}`;
  const localDraft=()=>{try{sessionStorage.setItem(draftKey,code.value);}catch{}};
  try{const d=sessionStorage.getItem(draftKey);if(d&&!saved)code.value=d;}catch{}
  renderGutter();
  // toolbox
  const box=$('toolbox');
  for(const key of w.toolbox){
    const b=document.createElement('button');b.type='button';
    b.className=CONTROL.has(key)?'ctl':CONDS.has(key)?'cond':'';
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
      // Start a new line unless the cursor is on an empty line.
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
  const stop=()=>{clearTimeout(timer);timer=null;};
  function reset(){stop();playing=null;view=fresh();trail=[];status.textContent='';message.hidden=true;renderGutter();redraw();}
  function prepare(){
    const result=run(code.value,level.map,level.par);
    if(result.status==='error'){
      const e=result.error;renderGutter(null,e.line);
      show(`<strong>${T.error} (line ${e.line}):</strong> ${escapeHTML(e.message)}${e.suggestion?` ${T.didYouMean} <b>${escapeHTML(e.suggestion)}</b>?`:''}`,'bad');
      speak(e.message);
      return null;
    }
    return{result,i:0};
  }
  function applyStep(entry){
    view.x=entry.x;view.y=entry.y;view.dir=entry.dir;view.bonk=entry.op==='bonk';
    if(entry.op==='move')trail.push({x:entry.x,y:entry.y});
    if(entry.op==='drill'&&entry.note==='sample')view.samples.delete(`${entry.x},${entry.y}`);
    renderGutter(entry.line);
    const line=code.value.split('\n')[entry.line-1]??'';
    status.textContent=`${T.running} ${entry.line}: ${line.trim()}${entry.op==='scan'?` → ${entry.note}`:''}${entry.op==='drill'?(entry.note==='sample'?' 💎!':' …'):''}`;
    redraw();
  }
  function advance(){
    if(!playing)return false;
    const entry=playing.result.trace[playing.i++];
    if(entry){applyStep(entry);return true;}
    finish(playing.result);playing=null;return false;
  }
  const delay=()=>[700,480,320,180,70][+$('speed').value-1];
  $('run').onclick=()=>{
    reset();playing=prepare();if(!playing)return;
    const tickLoop=()=>{if(advance())timer=setTimeout(tickLoop,delay());};
    tickLoop();
  };
  $('step').onclick=()=>{stop();if(!playing){reset();playing=prepare();}advance();};
  $('reset').onclick=reset;
  $('clear').onclick=()=>{code.value='';reset();localDraft();code.focus();};
  $('back').onclick=()=>level.world?world(level.world):home();

  async function finish(result){
    renderGutter();
    if(result.status!=='success'){
      const title={crashed:T.crashed,not_home:T.notHome,too_long:T.tooLong}[result.status]??'';
      show(`<strong>${title}</strong> ${escapeHTML(result.message)}`,'bad');
      speak(result.message);
      return;
    }
    const prev=best(level.id);
    if(!prev||result.stars>prev.stars||(result.stars===prev.stars&&result.commands<prev.commands)){
      progress.levels[level.id]={stars:result.stars,commands:result.commands,code:code.value};
      writeJSON(PROGRESS,progress);
    }
    const cheer=T.cheers[Math.floor(Math.random()*T.cheers.length)];
    speak(`${cheer} ${T.success}`);
    const list=level.world?data.levels.filter(l=>l.world===level.world):[];
    const next=list[list.findIndex(l=>l.id===level.id)+1];
    const overlay=document.createElement('div');overlay.className='result';
    const checks=[[true,T.star1],[result.commands<=level.par,T.star2.replace('{par}',level.par)],[result.collected===result.samples,T.star3]];
    overlay.innerHTML=`<div class="card" role="dialog" aria-label="${T.success}"><h2>${cheer} ${T.success}</h2><div class="big-stars">${'★'.repeat(result.stars)}<span class="dim">${'★'.repeat(3-result.stars)}</span></div>
      <ul style="text-align:left;list-style:none;padding:0">${checks.map(([ok,txt])=>`<li>${ok?'✅':'⬜'} ${escapeHTML(txt)}</li>`).join('')}</ul>
      <p class="muted">${result.commands} ${T.cmds} · ${T.par} ${level.par} · 💎 ${result.collected}/${result.samples}</p><p id="saveNote" class="muted"></p>
      <div class="run-row" style="justify-content:center">${next?`<button class="btn" id="next">${T.next}</button>`:''}<button class="btn ghost" id="again">${T.again}</button>${!next&&level.world?`<a class="btn mint" href="./quiz.html?part=kittycode">${T.quiz}</a>`:''}<button class="btn ghost" id="toWorlds">${T.worlds}</button></div></div>`;
    document.body.append(overlay);
    overlay.querySelector('#again').onclick=()=>{overlay.remove();reset();};
    overlay.querySelector('#toWorlds').onclick=()=>{overlay.remove();home();};
    overlay.querySelector('#next')?.addEventListener('click',()=>{overlay.remove();play(next);});
    (overlay.querySelector('#next')??overlay.querySelector('#again')).focus();
    try{
      const r=await submit(`/api/levels/${level.id}/submit`,{code:code.value});
      overlay.querySelector('#saveNote').textContent=r?T.saved:T.queued;
    }catch{overlay.querySelector('#saveNote').textContent='';}
  }
}

function route(){
  const hash=location.hash.slice(1);
  const level=data.levels.find(l=>l.id===hash);
  if(level&&worldOpen(level.world))play(level);
  else if(/^w[1-6]$/.test(hash)&&worldOpen(+hash[1]))world(+hash[1]);
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
