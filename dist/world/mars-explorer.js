import {startExpedition} from './expedition.js?v=10';
import {startMusic} from './music.js?v=10';
startMusic('space');
const adventureMode=new URLSearchParams(location.search).has('play');
let expedition=null;
import {t} from './strings.js?v=10';
import {makeGlobe} from './mars-globe.js?v=10';
import {createStorySound} from './story-sound.js?v=10';
import {createWeatherLoader,WEATHER_URL} from './mars-weather.js?v=10';
import {loadSpaceWeather,FALLBACK_EVENT,flareStrength} from './nasa-data.js?v=10';
import {robotPortrait} from './dhrubo-guide.js?v=10';
import {soundOn,saveSound,speakerIcon} from './sound-preference.js?v=10';
import {dhruboNarrator} from './narration.js?v=10';
const root=document.getElementById('explorer'),narrator=dhruboNarrator(),walkSound=createStorySound(),reduce=matchMedia('(prefers-reduced-motion: reduce)');
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const date=v=>new Date(String(v).length===10?v+'T12:00:00Z':v).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'});
const badge=(game=false)=>`<span class="truth-badge ${game?'truth-game':''}" title="${t(game?'explorerGameHelp':'explorerRealHelp')}" aria-label="${t(game?'explorerGameHelp':'explorerRealHelp')}">${t(game?'explorerGame':'explorerReal')}</span>`;
const source=url=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${t('explorerSource')}</a>`;
const SOLAR='https://www.nasa.gov/solar-system/planets/mars/nasa-watches-mars-light-up-during-epic-solar-storm/',DUST='https://science.nasa.gov/resource/opportunitys-last-message/';
let tab='storms',storm='solar',paused=reduce.matches,voice=soundOn(),globe,surface,frame=0,last=0,time=0,weather=null,solar={...FALLBACK_EVENT,mode:'archive'},surfaceMode=false,spot={lat:-5.4,lon:137.8},held=new Set(),pointers=new Map(),gesture=null,dirty=true,surfaceTicket=0,walkUI=null;
const header=()=>`<header class="explorer-header"><div><h1>${t('explorerTitle')}</h1><p>${t('explorerSubtitle')}</p></div><a class="back-link" href="../">← ${t('explorerHome')}</a></header>`;
const guide=text=>`<div class="guide">${robotPortrait}<p id="guideLine">${text}</p><button id="speak" aria-label="${t(voice?'explorerQuiet':'explorerVoice')}" aria-pressed="${voice}">${speakerIcon(voice)}</button></div>`;
function say(text){document.getElementById('guideLine').textContent=text;if(voice)narrator.play(text);}
function wireVoice(){document.getElementById('speak').onclick=()=>{voice=!voice;saveSound(voice);const b=document.getElementById('speak');b.innerHTML=speakerIcon(voice);b.setAttribute('aria-pressed',voice);b.setAttribute('aria-label',t(voice?'explorerQuiet':'explorerVoice'));if(surfaceMode){walkSound.setEnabled(voice);if(voice)walkSound.unlock();}if(voice)narrator.play(document.getElementById('guideLine').textContent);else narrator.stop();};}
function renderOrbit(){expedition?.dispose();expedition=null;surfaceTicket++;surfaceMode=false;root.classList.remove('walking');walkUI=null;held.clear();pointers.clear();surface?.dispose();surface=null;root.innerHTML=header()+`<div class="explorer-grid"><section><div class="space-stage" id="stage"><canvas id="globe" tabindex="0" aria-label="${t('explorerCanvas')}"></canvas><canvas class="effects" id="effects" aria-hidden="true"></canvas><div class="globe-label">${badge()}<span>${t('explorerMapCredit')}</span></div><button id="gale" class="marker">${t('explorerGale')}</button><button id="stormMarker" class="marker storm-marker">✦ ${t('explorerAurora')}</button><div class="stage-hint">${t('explorerHint')}</div></div><div class="orbit-controls"><button id="zoomOut" aria-label="${t('explorerZoomOut')}">−</button><button id="zoomIn" aria-label="${t('explorerZoomIn')}">+</button><button id="motion">${t(paused?'explorerPlay':'explorerPause')}</button><button id="resetView">${t('explorerReset')}</button><button id="landShortcut">${t('explorerLand')}</button></div>${guide(t('explorerIntro'))}<p class="small">${t('explorerKeys')}</p></section><aside class="data-pane"><nav class="explore-tabs" aria-label="${t('exploreMars')}">${['storms','weather','sun'].map(k=>`<button data-tab="${k}" aria-pressed="${tab===k}">${t({storms:'explorerStorms',weather:'explorerWeather',sun:'explorerSun'}[k])}</button>`).join('')}</nav><div id="dataContent" class="data-content"></div></aside></div><footer class="explorer-footer">${t('explorerMapNote')} ${t('explorerNoEndorsement')}</footer><dialog class="landing-dialog" id="landing"><h2>${t('explorerLanding')}</h2><p id="coordinates"></p><p class="small">${t('explorerSurfaceLabel')}</p><button id="landConfirm">${t('explorerLand')}</button><button id="landCancel">${t('explorerCancel')}</button></dialog>`;
 const canvas=document.getElementById('globe');try{globe=makeGlobe(canvas);}catch{globe=null;}root.dataset.renderer=globe?'webgl':'fallback';
 if(!globe){document.getElementById('stage').insertAdjacentHTML('afterbegin','<div class="flat-map" aria-hidden="true"></div>');say(t('explorerSurfaceBlocked'));document.getElementById('gale').hidden=true;document.getElementById('landShortcut').disabled=true;document.getElementById('zoomIn').disabled=true;document.getElementById('zoomOut').disabled=true;}
 bindGestures(canvas,false);wireVoice();renderData();
 document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{tab=b.dataset.tab;renderData();});
 document.getElementById('gale').onclick=()=>{tab='weather';renderData();};document.getElementById('stormMarker').onclick=()=>{tab='storms';storm='solar';time=0;renderData();say(t('explorerSolarStory'));};
 document.getElementById('zoomIn').onclick=()=>{globe?.zoom(.08);dirty=true;};document.getElementById('zoomOut').onclick=()=>{globe?.zoom(-.08);dirty=true;};
 document.getElementById('motion').onclick=()=>{paused=!paused;document.getElementById('motion').textContent=t(paused?'explorerPlay':'explorerPause');dirty=true;};
 document.getElementById('resetView').onclick=()=>{if(globe)Object.assign(globe.state,{yaw:-137.8*Math.PI/180,pitch:0,zoom:.55});dirty=true;};
 document.getElementById('landShortcut').onclick=()=>landing({lat:-5.4,lon:137.8});
 document.getElementById('landCancel').onclick=()=>document.getElementById('landing').close();document.getElementById('landConfirm').onclick=()=>{document.getElementById('landing').close();renderSurface();};dirty=true;
}
function landing(p){if(!globe||!p)return;spot=p;const dialog=document.getElementById('landing');document.getElementById('coordinates').textContent=t('explorerCoordinates',{lat:p.lat.toFixed(1),lon:p.lon.toFixed(1)});dialog.showModal();document.getElementById('landConfirm').focus();}
function renderData(){if(surfaceMode)return;document.querySelectorAll('[data-tab]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.tab===tab));const container=document.getElementById('dataContent');
 if(tab==='storms'){const isSolar=storm==='solar';container.innerHTML=`${badge()}<div class="story-picker"><button data-story="solar" aria-pressed="${isSolar}">${t('explorerAurora')}</button><button data-story="dust" aria-pressed="${!isSolar}">${t('explorerDustButton')}</button></div><p class="small">${t('explorerHistory')}</p><h2>${t(isSolar?'explorerSolar':'explorerDust')}</h2><time datetime="${isSolar?'2024-05-20':'2018-06-10'}">${date(isSolar?'2024-05-20':'2018-06-10')}</time><p>${t(isSolar?'explorerSolarStory':'explorerDustStory')}</p><p>${t(isSolar?'explorerSolarTip':'explorerDustTip')}</p>${source(isSolar?SOLAR:DUST)}<div>${badge(true)}<p class="small">${t('explorerIllustration')}</p><button id="replayStorm">${t('explorerReplay')}</button></div>`;container.querySelectorAll('[data-story]').forEach(b=>b.onclick=()=>{storm=b.dataset.story;time=0;dirty=true;renderData();say(t(storm==='solar'?'explorerSolarStory':'explorerDustStory'));});document.getElementById('replayStorm').onclick=()=>{time=0;paused=reduce.matches;document.getElementById('motion').textContent=t(paused?'explorerPlay':'explorerPause');dirty=true;say(t(isSolar?'explorerSolarStory':'explorerDustStory'));};}
 else if(tab==='weather'){container.innerHTML=`${badge()}<h2>${t('explorerWeatherTitle')}</h2>${weather?`<p class="small">${t({archive:'explorerArchive',feed:'explorerFetched',cache:'explorerCached'}[weather.mode])}</p><time datetime="${weather.date}">${t('explorerDate',{date:date(weather.date)})}</time><p>${t('explorerSol',{sol:weather.sol})}</p><h3>${t('explorerAir')}</h3><div class="weather-range"><div><span>${t('explorerLow')}</span><strong>${weather.low===null?'—':weather.low+'°C'}</strong></div><div><span>${t('explorerHigh')}</span><strong>${weather.high===null?'—':weather.high+'°C'}</strong></div></div><p>${t('explorerPressure')}: <strong>${weather.pressure===null?t('explorerWeatherMissing'):weather.pressure+' Pa'}</strong></p><details><summary>${t('explorerPressure')}</summary>${t('explorerPressureHelp')}</details>`:`<p>${t('explorerLoading')}</p>`}<p>${t('explorerWeatherTip')}</p>${source(WEATHER_URL)}<p class="small">${t('explorerWeatherCredit')}</p>`;}
 else{const strength=flareStrength(solar);container.innerHTML=`${badge()}<h2>${t('explorerSunTitle')}</h2><p class="small">${t({live:'explorerFresh',cache:'explorerCached',archive:'explorerSunArchive'}[solar.mode]||'explorerSunArchive')}</p><time datetime="${esc(solar.startTime)}">${date(solar.startTime)}</time><h3>${t('explorerClass',{class:solar.classType})}</h3><meter min="0" max="5" value="${strength.level}" aria-label="${t('explorerClass',{class:solar.classType})}"></meter><p>${t('explorerSunTip')}</p><details><summary>${t('explorerHow')}</summary>${t('explorerSunLine')}</details>${source(solar.source)}<p class="small">${t('explorerNoGlobal')}</p>`;}
 dirty=true;
}
function bindGestures(canvas,isSurface){canvas.addEventListener('pointerdown',e=>{canvas.focus();canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});gesture={x:e.clientX,y:e.clientY,moved:false,multi:pointers.size>1};});
 canvas.addEventListener('pointermove',e=>{const previous=pointers.get(e.pointerId);if(!previous)return;const dx=e.clientX-previous.x,dy=e.clientY-previous.y;
 if(pointers.size===2&&!isSurface){const other=[...pointers.entries()].find(([id])=>id!==e.pointerId)[1],before=Math.hypot(previous.x-other.x,previous.y-other.y),after=Math.hypot(e.clientX-other.x,e.clientY-other.y);globe?.zoom((after-before)*.001);gesture.multi=true;}
 else if(isSurface)surface?.look(dx*.005,dy*.004);else globe?.turn(dx*.006,dy*.006);
 previous.x=e.clientX;previous.y=e.clientY;if(gesture&&Math.hypot(e.clientX-gesture.x,e.clientY-gesture.y)>6)gesture.moved=true;dirty=true;});
 const end=e=>{if(!isSurface&&e.type==='pointerup'&&gesture&&!gesture.moved&&!gesture.multi&&pointers.size===1){const r=canvas.getBoundingClientRect();landing(globe?.pick(e.clientX-r.left,e.clientY-r.top));}pointers.delete(e.pointerId);if(!pointers.size)gesture=null;};canvas.addEventListener('pointerup',end);canvas.addEventListener('pointercancel',end);canvas.addEventListener('lostpointercapture',end);canvas.addEventListener('wheel',e=>{if(!isSurface){e.preventDefault();globe?.zoom(-e.deltaY*.0005);dirty=true;}},{passive:false});
 canvas.addEventListener('keydown',e=>{if(isSurface)return;const directions={ArrowLeft:[-.1,0],ArrowRight:[.1,0],ArrowUp:[0,-.1],ArrowDown:[0,.1]};if(directions[e.key]){e.preventDefault();globe?.turn(...directions[e.key]);dirty=true;}else if(['+','=','-','Enter','Home'].includes(e.key)){e.preventDefault();if(e.key==='Enter')landing(globe?.pick(canvas.clientWidth/2,canvas.clientHeight/2));else if(e.key==='Home')document.getElementById('resetView').click();else globe?.zoom(e.key==='-'?-.08:.08);dirty=true;}});
}
const DUST_ON_MARS = 'https://science.nasa.gov/solar-system/planets/mars/10-things-dust-in-the-wind-on-mars-and-well-beyond/';
const closeWalk = () => {
  narrator.stop();
  walkSound.stopAll();
  if(adventureMode){location.href='../';return;}
  renderOrbit();
  document.getElementById('landShortcut').focus();
};
const walkIcons = {
  forward: '↑', back: '↓', left: '←', right: '→',
  sample: 'M4 13 7 6l7-3 6 5 1 8-7 5-8-2z', solar: 'M3 5h18v11H3zM9 5v11m6-11v11M3 10h18m-9 6v4m-4 0h8',
  enter: 'M6 21V4h12v17M3 21h18m-9-9v2',
};
const walkGoal = {sample:'walkFindSample', solar:'walkFindPower', enter:'walkFindShelter'};
const walkAction = {sample:'walkTakeSample', solar:'walkReadPower', enter:'walkOpenDoor'};
function walkIcon(key) {
  return `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${walkIcons[key]}"/></svg>`;
}
async function renderSurface() {
  const ticket = ++surfaceTicket;
  surfaceMode = true;
  held.clear();
  pointers.clear();
  globe?.dispose();
  globe = null;
  root.classList.add('walking');
  walkSound.setEnabled(voice);
  if (voice) walkSound.unlock();
  root.innerHTML = `
    <section class="walk-stage" aria-labelledby="walkTitle" aria-busy="true">
      <canvas id="surface" tabindex="0" aria-label="${t('explorerSurfaceCanvas')}"></canvas>
      <div class="walk-shade" aria-hidden="true"></div>
      <header class="walk-header">
        <div class="walk-location">
          <span>${t('walkCenter')}</span><h1 id="walkTitle">${t('walkTitle')}</h1>
        </div>
        <nav class="walk-tools" aria-label="${t('walkTools')}">
          <button id="speak" aria-label="${t(voice?'explorerQuiet':'explorerVoice')}" aria-pressed="${voice}">${speakerIcon(voice)}</button>
          <button id="orbit">${t('explorerOrbit')}</button>
        </nav>
      </header>
      <div class="walk-objective" id="walkObjective" hidden>
        <span class="walk-bearing" id="walkBearing" aria-hidden="true">↑</span>
        <strong id="walkGoal"></strong><span class="walk-distance" id="walkDistance"></span>
      </div>
      <span id="walkMarker" class="walk-marker" aria-hidden="true" hidden></span>
      <div class="walk-loading" id="walkLoading" role="status">${t('walkLoading')}</div>
      <div class="walk-action" id="walkActions" hidden><button id="walkInteract" hidden></button></div>
      <footer class="walk-foot" id="walkFoot" hidden>
        <div class="walk-move">
          <div class="surface-controls" role="group" aria-label="${t('explorerMove')}">
            ${[['forward','explorerForward'],['left','explorerLeft'],['back','explorerBack'],['right','explorerRight']].map(([move,key])=>
              `<button data-move="${move}" aria-label="${t(key)}">${walkIcons[move]}</button>`).join('')}
          </div>
          <p class="walk-keys">${t('walkKeys')}</p>
        </div>
        <div class="walk-guide" aria-live="polite">${robotPortrait}<p id="guideLine">${t('walkIntro')}</p></div>
        <div class="walk-panels">
          <button id="practiceStorm" aria-pressed="false">${t('walkDustDrill')}</button>
          <details class="walk-real"><summary>${t('explorerReal')}</summary>
            <div class="walk-facts">
              <p>${t('walkDustFact')}</p><p>${t('walkStormFact')}</p>
              <p><strong>${t('explorerGame')}</strong> · ${t('walkModel')}</p>
              ${source(DUST_ON_MARS)}
            </div>
          </details>
        </div>
      </footer>
      <span class="sr-only" id="surfaceStatus" role="status"></span>
    </section>`;
  document.getElementById('orbit').onclick = closeWalk;
  const canvas = document.getElementById('surface');
  const onError = () => {
    if (ticket !== surfaceTicket) return;
    renderOrbit();
    say(t('explorerSurfaceBlocked'));
    document.getElementById('landShortcut').focus();
  };
  try {
    const {makeSurface} = await import('./mars-surface.js?v=10');
    if (ticket !== surfaceTicket) return;
    surface = makeSurface(canvas,spot,walkSound.footstep);
    if (!surface) return onError();
    const habitat = await surface.ready;
    if (ticket !== surfaceTicket) return;
    canvas.dataset.habitat = habitat ? 'model' : 'fallback';
  } catch {
    onError();
    return;
  }
  canvas.addEventListener('webglcontextlost', onError, {once:true});
  const byId = id => document.getElementById(id);
  walkUI = {
    stage: root.querySelector('.walk-stage'), objective: byId('walkObjective'), bearing: byId('walkBearing'),
    goal: byId('walkGoal'), distance: byId('walkDistance'), marker: byId('walkMarker'),
    action: byId('walkInteract'), status: byId('surfaceStatus'), storm: byId('practiceStorm'),
    goalKey: '', actionKey: '', statusKey: '', complete: false,
  };
  byId('walkFoot').hidden = false;
  byId('walkActions').hidden = false;
  byId('walkLoading').remove();
  walkUI.stage.setAttribute('aria-busy','false');
  bindGestures(canvas,true);
  wireVoice();
  canvas.focus({preventScroll:true});
  say(t('walkIntro'));
  walkUI.action.onclick = () => {
    if(expedition){expedition.interact();return;}
    const action = surface.activate();
    if (action) {
      if (action === 'enter') walkSound.thunk();
      else walkSound.click();
      canvas.focus({preventScroll:true});
    }
    dirty = true;
  };
  walkUI.storm.onclick = () => {
    const active = !surface.state.storm;
    surface.setStorm(active);
    walkUI.storm.setAttribute('aria-pressed',String(active));
    walkUI.storm.textContent = t(active?'explorerClear':'walkDustDrill');
    say(t(active?'walkDustGuide':'walkClearGuide'));
    dirty = true;
  };
  document.querySelectorAll('[data-move]').forEach(button => {
    const move = button.dataset.move, press = {left:'turnLeft',right:'turnRight'}[move] || move;
    if (press !== move) button.setAttribute('aria-label', move === 'left' ? 'Turn left' : 'Turn right');
    button.addEventListener('pointerdown', event => {
      event.preventDefault();
      button.setPointerCapture(event.pointerId);
      held.add(press);
    });
    for(const type of ['pointerup','pointercancel','lostpointercapture','blur'])
      button.addEventListener(type, () => { held.delete(press); held.delete(move); });
    button.addEventListener('keydown', event => {
      if([' ','Enter'].includes(event.key)){event.preventDefault();held.add(move);}
    });
    button.addEventListener('keyup', () => held.delete(move));
  });
  if(adventureMode){
    document.getElementById('orbit').textContent='Home';
    document.getElementById('practiceStorm').hidden=true;
    document.getElementById('walkTitle').textContent='Kitty’s Mars Adventure 3D';
    expedition=startExpedition({surface,say,sound:walkSound,clearKeys:()=>held.clear(),onChange:()=>{dirty=true;}});
  }
  dirty = true;
}

function updateWalkHUD() {
  const objective = surface.objective(), action = surface.available();
  const goalKey = objective?.key ?? '';
  const statusKey = surface.sheltered ? 'explorerSheltered' : (surface.state.storm ? 'walkDustDrill' : '');
  if (goalKey !== walkUI.goalKey) {
    const previous = walkUI.goalKey;
    walkUI.goalKey = goalKey;
    walkUI.goal.textContent = goalKey ? (expedition?.mission?.goal || t(walkGoal[goalKey])) : (expedition?'Free explore':t('walkComplete'));
    if (!expedition && previous === 'sample' && goalKey === 'solar') say(t('walkSampleGuide'));
    if (!expedition && previous === 'solar' && goalKey === 'enter' && !surface.state.storm) say(t('walkPowerGuide'));
  }
  if (statusKey !== walkUI.statusKey) {
    walkUI.statusKey = statusKey;
    walkUI.status.textContent = statusKey ? t(statusKey) : '';
    if (surface.sheltered && !expedition) say(t('walkShelterGuide'));
  }
  if (!expedition && surface.complete && !walkUI.complete) {
    walkUI.complete = true;
    walkSound.chime(true);
    say(t('walkCompleteGuide'));
  }
  walkUI.objective.hidden = !objective && !surface.complete;
  walkUI.objective.dataset.complete = String(surface.complete && !objective);
  if (objective) {
    walkUI.bearing.style.rotate = objective.bearing + 'rad';
    const distance = objective.distance + ' m';
    if (walkUI.distance.textContent !== distance) walkUI.distance.textContent = distance;
  }
  if (action !== walkUI.actionKey) {
    walkUI.actionKey = action;
    walkUI.action.hidden = !action;
    if (action) {
      walkUI.action.innerHTML = walkIcon(walkIcons[action]?action:'enter') + (expedition?.actionLabel || expedition?.mission?.action || t(walkAction[action]));
    }
  }
  walkUI.marker.hidden = !objective?.visible || Boolean(action);
  if (!walkUI.marker.hidden) {
    walkUI.marker.style.left = (50 + objective.x * 50).toFixed(2) + '%';
    walkUI.marker.style.top = (50 - objective.y * 50).toFixed(2) + '%';
  }
}

const moveKeys = {ArrowUp:'forward',w:'forward',W:'forward',ArrowDown:'back',s:'back',S:'back',
  ArrowLeft:'left',a:'left',A:'left',ArrowRight:'right',d:'right',D:'right',j:'turnLeft',J:'turnLeft',l:'turnRight',L:'turnRight'};
window.addEventListener('keydown', event => {
  if (!surfaceMode || expedition?.paused) return;
  if (event.key === 'Escape') {
    const details = document.querySelector('.walk-real[open]');
    if (details) { details.open = false; details.querySelector('summary').focus(); return; }
    closeWalk();
    return;
  }
  if (!walkUI || event.altKey || event.metaKey || event.ctrlKey || event.target.closest?.('.walk-real')) return;
  if (event.key === 'Enter' && !event.target.closest?.('button,a,input,summary,dialog') && surface.available()) {
    event.preventDefault();
    walkUI.action.click();
  }
  if (moveKeys[event.key]) {event.preventDefault();held.add(moveKeys[event.key]);}
});
window.addEventListener('keyup',event => held.delete(moveKeys[event.key]));
window.addEventListener('blur',()=>{held.clear();pointers.clear();});
function effects(){const canvas=document.getElementById('effects');if(!canvas)return;const w=canvas.clientWidth,h=canvas.clientHeight;canvas.width=w;canvas.height=h;const c=canvas.getContext('2d');const active=tab==='storms';if(!active)return;const still=paused||reduce.matches,t=still?2:time;
 const r=Math.min(w,h)*.76*(globe?.state.zoom??.55),cx=w/2,cy=h/2;
 if(storm==='solar'){const glow=c.createRadialGradient(cx,cy,r*.91,cx,cy,r*1.18);glow.addColorStop(0,'#cba7ea00');glow.addColorStop(.45,'#cba7ea55');glow.addColorStop(1,'#cba7ea00');c.fillStyle=glow;c.beginPath();c.arc(cx,cy,r*1.18,0,Math.PI*2);c.fill();c.strokeStyle='#ffddb588';c.lineWidth=1.4;for(let i=0;i<(still?8:36);i++){const x=((i*.073+t*.10)%1)*(w+r)-r,y=cy-r*.9+(i*37)%(r*1.8);if(x>cx-r*.85)continue;c.beginPath();c.moveTo(x,y);c.lineTo(x+20,y+4);c.stroke();}}
 else{c.save();c.beginPath();c.arc(cx,cy,r,0,Math.PI*2);c.clip();for(let i=0;i<12;i++){const x=cx+Math.sin(i*3+t*.18)*r*.8,y=cy+Math.cos(i*2+t*.12)*r*.7,g=c.createRadialGradient(x,y,0,x,y,r*.5);g.addColorStop(0,'#d7a37666');g.addColorStop(1,'#d7a37600');c.fillStyle=g;c.fillRect(cx-r,cy-r,r*2,r*2);}c.restore();}
}
function tick(now){if(document.hidden){frame=0;return;}const dt=Math.min((now-last)/1000||0,.1);last=now;if(!paused&&!reduce.matches)time+=dt;
 if(surfaceMode){
   if(walkUI && surface && !expedition?.paused){
     const forward=Number(held.has('forward'))-Number(held.has('back'));
     const right=Number(held.has('right'))-Number(held.has('left'));
     const turn=Number(held.has('turnRight'))-Number(held.has('turnLeft'));
     const length = Math.max(1, Math.hypot(forward, right));
     if (turn) surface.look(turn * dt * 1.9, 0);
     const parts=dt>.05?2:1;
     for(let i=0;i<parts;i++){expedition?.tick(dt/parts);surface.step(forward / length, right / length, dt/parts, reduce.matches);}
     if (dirty || !reduce.matches || forward || right || turn || surface.activity) {
       surface.draw(dt, reduce.matches);
       updateWalkHUD();
     }
   }
 }
 else if(globe){if(!paused&&!reduce.matches&&!pointers.size&&!document.getElementById('landing').open)globe.turn(dt*.045,0);if(dirty||!paused&&!reduce.matches){globe.draw();effects();const p=globe.project(-5.4,137.8),b=document.getElementById('gale');b.hidden=!p.visible;b.style.left=p.x+'px';b.style.top=p.y+'px';}}
 else if(dirty||!paused&&!reduce.matches)effects();dirty=false;frame=requestAnimationFrame(tick);
}
document.addEventListener('visibilitychange',()=>{held.clear();pointers.clear();if(document.hidden){cancelAnimationFrame(frame);frame=0;walkSound.stopAll();narrator.pause();}else{last=performance.now();dirty=true;if(voice)narrator.resume();if(!frame)frame=requestAnimationFrame(tick);}});window.addEventListener('resize',()=>dirty=true);reduce.addEventListener('change',()=>{paused=reduce.matches;dirty=true;if(!surfaceMode)document.getElementById('motion').textContent=t(paused?'explorerPlay':'explorerPause');});window.addEventListener('pagehide',()=>{walkSound.stopAll();narrator.stop();});
document.title=(adventureMode?'Kitty’s Mars Adventure 3D':t('explorerTitle'))+' · Astro Kitty';if(adventureMode)renderSurface();else renderOrbit();frame=requestAnimationFrame(tick);
const loadWeather=createWeatherLoader();loadWeather().then(result=>{weather=result;if(tab==='weather')renderData();});loadSpaceWeather().then(result=>{solar=result.latest;if(tab==='sun')renderData();}).catch(()=>{});
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js?v=10').catch(()=>{});
