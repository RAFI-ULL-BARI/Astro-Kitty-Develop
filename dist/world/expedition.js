import {MISSIONS,CHAPTERS,OBJECTS,DISCOVERIES,GEMS,SOURCES,loadJourney,guideText} from './field-missions.js?v=10'
export {MISSIONS} from './field-missions.js?v=10'
const SAVE='astro-kitty-expedition-3d-v2'
export function startExpedition({surface,say,sound,clearKeys,onChange}){
 let raw;try{raw=localStorage.getItem(SAVE)}catch{}
 const saved=loadJourney(raw),completed=saved.completed,found=saved.found,gems=saved.gems
 let index=saved.index,dialog=null,holding=false,latched=false,turn=0,free=saved.finished,noticeTime=0,elapsed=0,autosave=0
 const toolbar=document.createElement('div');toolbar.className='expedition-toolbar'
 toolbar.innerHTML='<button id="missionBook">Expedition</button><button id="returnBase">Return to base</button><span id="missionCount"></span><span id="gemCount" title="Star crystals"></span>'
 const hud=document.createElement('div');hud.className='field-hud'
 hud.innerHTML='<div class="field-chapter"></div><div class="field-work" hidden><span class="field-status"></span><div class="field-track"><i></i></div><div class="field-adjust" hidden><button aria-label="Turn equipment left">↶ Q</button><span>Turn the equipment</span><button aria-label="Turn equipment right">E ↷</button></div><small>Hold Space or the action button · Enter toggles tool</small></div><div class="field-notice" role="status" hidden></div>'
 document.querySelector('.walk-stage').append(toolbar,hud)
 const dock=document.createElement('div');dock.className='field-dock';dock.append(hud.querySelector('.field-work'),document.getElementById('walkActions'));document.querySelector('.walk-stage').append(dock)
 const stage=document.querySelector('.walk-stage'),guideBox=document.querySelector('.walk-guide')
 function placeDock(){if(!guideBox||!stage)return;const a=stage.getBoundingClientRect(),b=guideBox.getBoundingClientRect();if(b.height)dock.style.setProperty('--dock-bottom',Math.max(12,Math.round(a.bottom-b.top)+10)+'px')}
 const dockWatch=globalThis.ResizeObserver?new ResizeObserver(placeDock):null;if(dockWatch){dockWatch.observe(stage);if(guideBox)dockWatch.observe(guideBox)}placeDock()
 const action=document.getElementById('walkInteract'),work=dock.querySelector('.field-work'),status=dock.querySelector('.field-status'),bar=dock.querySelector('.field-track i'),adjust=dock.querySelector('.field-adjust'),notice=hud.querySelector('.field-notice')
 document.getElementById('missionBook').onclick=showBook
 document.getElementById('returnBase').onclick=()=>{release();surface.stopDriving();surface.goOutside();surface.setStorm(false);free=true;surface.configureField(null,completed);say('Back at Sunrise Base. Choose Expedition to continue your chapter.');onChange()}
 function release(){holding=false;latched=false;turn=0;surface.fieldInput(false,0);clearKeys()}
 function save(){try{localStorage.setItem(SAVE,JSON.stringify({index,completed,found,gems}))}catch{}}
 const CHEERS=['Shabbash! (Good job!)','Yay!','Purr-fect!','Oshadharon! (Amazing!)','Well done!'];let cheerIndex=0,praise=''
 function confetti(){
  if(globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches)return
  const box=document.createElement('div');box.className='field-confetti';box.setAttribute('aria-hidden','true')
  for(let i=0;i<26;i++){const bit=document.createElement('i');bit.style.setProperty('--x',(Math.random()*2-1).toFixed(2));bit.style.setProperty('--r',Math.round(Math.random()*540-270)+'deg');bit.style.setProperty('--d',(Math.random()*.25).toFixed(2)+'s');bit.style.background=['#ffcf95','#9debd4','#c3a8f5','#f7a8b8','#fff1c9'][i%5];box.append(bit)}
  document.querySelector('.walk-stage').append(box);setTimeout(()=>box.remove(),1900)
 }
 const gemLabel=()=>{toolbar.querySelector('#gemCount').textContent='◆ '+gems.length+' / '+GEMS.length};gemLabel();surface.setGems?.(gems)
 function toast(text){notice.textContent=text;notice.hidden=false;noticeTime=5;onChange()}
 function select(next){
  release();index=next;free=false;close()
  const m=MISSIONS[index],p=OBJECTS[m.target],chapter=CHAPTERS[m.chapter]
  if(p.x>150&&surface.state.x<150)surface.goInside()
  else if(p.x<150&&surface.state.x>150)surface.goOutside()
  if(m.kind!=='drive'&&m.id!=='collect-cache')surface.stopDriving()
  surface.setStorm(Boolean(m.storm));surface.configureField(m,completed)
  hud.querySelector('.field-chapter').textContent=String(m.chapter+1).padStart(2,'0')+' / 06 · '+chapter.zone
  toolbar.querySelector('#missionCount').textContent=completed.length+' / '+MISSIONS.length
  const facts=document.querySelector('.walk-facts');facts.replaceChildren()
  const fact=document.createElement('p');fact.textContent=chapter.fact
  const model=document.createElement('p');model.textContent='Game · This little Mars world is made up. Tools, trips, weather and plants all work much faster here than on real Mars.'
  const link=document.createElement('a');link.href=SOURCES[chapter.source];link.target='_blank';link.rel='noopener';link.textContent='Read the science ↗'
  facts.append(fact,model,link)
  if(m.chapter===4){for(const [key,title] of [['water','Water recovery'],['plants','Growing plants']]){const a=document.createElement('a');a.href=SOURCES[key];a.target='_blank';a.rel='noopener';a.textContent=title+' ↗';a.style.display='block';facts.append(a)}}
  say((praise?praise+' ':'')+guideText(m.guide));praise='';save();onChange()
 }
 function close(){dialog?.remove();dialog=null;release();document.getElementById('surface')?.focus({preventScroll:true})}
 function showBook(){
  close();dialog=document.createElement('dialog');dialog.className='expedition-dialog field-book'
  dialog.innerHTML='<header><h2>Your Mars expedition</h2><button class="mission-close" aria-label="Close expedition">×</button></header><p>Six chapters. A whole world to wander.</p><div class="mission-grid">'+CHAPTERS.map((c,i)=>{
   const tasks=MISSIONS.filter(m=>m.chapter===i),count=tasks.filter(m=>completed.includes(m.id)).length
   return '<button data-chapter="'+i+'"><span>'+c.icon+'</span>'+c.title+'<small>'+count+' / '+tasks.length+' tasks · '+(i===4?'Habitat':'Explore')+'</small></button>'
  }).join('')+'</div><div class="field-journal"><strong>Field journal · '+found.length+' / '+DISCOVERIES.length+' discoveries · ◆ '+gems.length+' / '+GEMS.length+' star crystals</strong>'+DISCOVERIES.filter(p=>found.includes(p.id)).map(p=>'<p><b>'+p.name+'</b> · '+p.fact+'</p>').join('')+'</div><button class="mission-free">Explore freely</button>'
  document.querySelector('.walk-stage').append(dialog)
  dialog.querySelector('.mission-close').onclick=close;dialog.addEventListener('cancel',e=>{e.preventDefault();close()})
  dialog.querySelectorAll('[data-chapter]').forEach(b=>b.onclick=()=>{
   const chapter=Number(b.dataset.chapter),first=MISSIONS.findIndex(m=>m.chapter===chapter&&!completed.includes(m.id))
   select(first<0?MISSIONS.findIndex(m=>m.chapter===chapter):first)
  })
  dialog.querySelector('.mission-free').onclick=()=>{close();free=true;surface.configureField(null,completed);surface.setStorm(false);say('Follow your curiosity. Discover landmarks, then open Expedition whenever you like.');onChange()}
  dialog.showModal()
 }
 function finish(){
  const m=MISSIONS[index];release();surface.finishField()
  if(!completed.includes(m.id))completed.push(m.id)
  if(m.kind==='enter')surface.goInside()
  if(m.kind==='exit')surface.goOutside()
  const next=index+1
  praise=CHEERS[cheerIndex++%CHEERS.length];confetti();sound.chime(true)
  const chapterDone=next>=MISSIONS.length||MISSIONS[next].chapter!==m.chapter
  toast(chapterDone?'★ Chapter complete: '+CHAPTERS[m.chapter].title:'✓ '+m.title)
  if(next<MISSIONS.length)select(next)
  else {free=true;save();surface.configureField(null,completed);toolbar.querySelector('#missionCount').textContent=completed.length+' / '+MISSIONS.length;hud.querySelector('.field-chapter').textContent='Expedition complete · Keep exploring';say('Shabbash, explorer! Your report is on its way. There is still a whole Mars landscape to explore.');toast('✦ Expedition complete! '+found.length+' discoveries recorded.')}
 }
 function interact(){
  if(dialog||!surface.available())return
  if(free){
   const action=surface.available()
   if(action==='free-enter')surface.goInside()
   if(action==='free-exit')surface.goOutside()
   if(action==='free-ride')surface.boardRover()
   if(action==='free-park')surface.stopDriving()
   release();onChange();return
  }
  surface.beginField();latched=!latched;onChange()
 }
 function pointerDown(e){if(!surface.available())return;if(free){e.preventDefault();interact();return}e.preventDefault();action.setPointerCapture(e.pointerId);holding=true;latched=false;surface.beginField();onChange()}
 function pointerUp(){holding=false;onChange()}
 action.addEventListener('pointerdown',pointerDown)
 for(const type of ['pointerup','pointercancel','lostpointercapture'])action.addEventListener(type,pointerUp)
 action.onclick=e=>{if(e.detail===0)interact()}
 for(const [i,button] of [...adjust.querySelectorAll('button')].entries()){
  button.addEventListener('pointerdown',e=>{e.preventDefault();button.setPointerCapture(e.pointerId);turn=i?1:-1})
  for(const type of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(type,()=>turn=0)
  button.addEventListener('click',e=>{if(e.detail===0){surface.fieldInput(false,i?1:-1);surface.step(0,0,.1,false);onChange()}})
 }
 function keydown(e){
  if(dialog||free||e.altKey||e.metaKey||e.ctrlKey||e.target.closest?.('.walk-real'))return
  if(e.code==='Space'&&!e.target.closest?.('button:not(#walkInteract),a,input,summary,dialog')){e.preventDefault();holding=true;if(!e.repeat)surface.beginField()}
  if(e.code==='KeyQ'||e.code==='KeyE'){e.preventDefault();turn=e.code==='KeyQ'?-1:1}
 }
 function keyup(e){if(e.code==='Space')holding=false;if(e.code==='KeyQ'||e.code==='KeyE')turn=0}
 const blur=()=>release(),visibility=()=>{if(document.hidden)release()}
 window.addEventListener('keydown',keydown);window.addEventListener('keyup',keyup);window.addEventListener('blur',blur);document.addEventListener('visibilitychange',visibility)
 if(saved.finished){surface.configureField(null,completed);toolbar.querySelector('#missionCount').textContent=completed.length+' / '+MISSIONS.length;hud.querySelector('.field-chapter').textContent='Expedition complete · Explore freely';say('Welcome back, explorer. Choose a chapter to play again, or roam freely.')}
 else select(index)
 return {interact,get actionLabel(){return free?({'free-enter':'Enter the habitat','free-exit':'Go outside','free-ride':'Drive the rover','free-park':'Park and explore'}[surface.available()]):MISSIONS[index].action},get paused(){return Boolean(dialog)},get mission(){return free?null:MISSIONS[index]},
  tick(dt){
   elapsed+=dt;autosave+=dt;noticeTime-=dt;if(noticeTime<=0)notice.hidden=true
   surface.fieldInput(holding||latched,turn)
   const m=!free&&MISSIONS[index],s=surface.fieldStatus,near=Boolean(surface.available())
   work.hidden=!m||!near||['board','pickup','exit','drive'].includes(m.kind)
   if(m){
    adjust.hidden=m.kind!=='align'
    const value=m.kind==='align'&&s.progress===0?s.quality:s.progress
    bar.style.width=Math.round((value||0)*100)+'%'
    bar.dataset.ready=String(m.kind!=='align'||s.quality>=.96)
    status.textContent=m.kind==='align'?(s.quality>=.96?'Aligned! Hold to run · ':'Turn to find green · ')+Math.round(s.quality*100)+'%':s.working?'Working · '+Math.round(s.progress*100)+'%':m.kind==='scan'?'Face the target, then hold':m.action
    if(s.finished)finish()
   }
   if(surface.state.x<150)for(const p of DISCOVERIES){if(!found.includes(p.id)&&Math.hypot(surface.state.x-p.x,surface.state.z-p.z)<9){found.push(p.id);save();toast('✧ Discovered '+p.name);sound.chime();break}}
   if(surface.state.x<150)for(const [i,p] of GEMS.entries()){if(!gems.includes(i)&&Math.hypot(surface.state.x-p.x,surface.state.z-p.z)<1.9){gems.push(i);gemLabel();surface.setGems?.(gems);surface.cheer?.();save();sound.chime(gems.length===GEMS.length);toast(gems.length===GEMS.length?'★ You found every star crystal!':'◆ Star crystal '+gems.length+' / '+GEMS.length);break}}
   if(autosave>10){autosave=0;save()}
  },
  dispose(){close();dockWatch?.disconnect();document.querySelector('.walk-stage')?.append(document.getElementById('walkActions'));dock.remove();toolbar.remove();hud.remove();action.removeEventListener('pointerdown',pointerDown);for(const type of ['pointerup','pointercancel','lostpointercapture'])action.removeEventListener(type,pointerUp);window.removeEventListener('keydown',keydown);window.removeEventListener('keyup',keyup);window.removeEventListener('blur',blur);document.removeEventListener('visibilitychange',visibility)},
 }
}
