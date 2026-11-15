// Real browser playthrough: movement, held tools, physical alignment and rover gates.
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE || 'playwright')
import assert from 'node:assert/strict'
import {MISSIONS} from '../../dist/world/field-missions.js'
const browser=await chromium.launch(process.env.CHROMIUM_EXECUTABLE?{executablePath:process.env.CHROMIUM_EXECUTABLE}:{})
const page=await browser.newPage({viewport:{width:Number(process.env.VIEW_W||1440),height:Number(process.env.VIEW_H||900)}}),errors=[]
page.on('pageerror',e=>errors.push(e.message))
const base=process.env.PREVIEW_URL||'http://127.0.0.1:8765',shots=process.env.SHOT_DIR||'/tmp'
async function stop(){for(const key of ['w','a','s','d','q','e','j','l','Space'])await page.keyboard.up(key)}
async function reach(m){
 let keys=[],last=999,stalled=0
 await page.locator('#surface').focus()
 for(let i=0;i<600;i++){
  if(await page.locator('#walkGoal').innerText()!==m.title){await stop();return}
  if(m.kind!=='drive'&&await page.locator('#walkInteract').isVisible()){await stop();return}
  const angle=await page.locator('#walkBearing').evaluate(e=>parseFloat(e.style.rotate)||0)
  const distance=parseFloat(await page.locator('#walkDistance').innerText())
  if(Math.abs(distance-last)<.1)stalled++;else stalled=0;last=distance
  let next=[Math.abs(Math.sin(angle))>.30?(Math.sin(angle)>0?'d':'a'):'',Math.abs(Math.cos(angle))>.30?(Math.cos(angle)>0?'w':'s'):''].filter(Boolean)
  if(stalled>18){
   const side=angle+Math.PI/2;const bypass=Math.abs(Math.sin(side))>.7?(Math.sin(side)>0?'d':'a'):(Math.cos(side)>0?'w':'s');
   await stop();keys=[];await page.keyboard.down(bypass);await page.waitForTimeout(1500);await page.keyboard.up(bypass);stalled=0;continue
  }
  for(const k of keys.filter(k=>!next.includes(k)))await page.keyboard.up(k)
  for(const k of next.filter(k=>!keys.includes(k)))await page.keyboard.down(k)
  keys=next;await page.waitForTimeout(120)
 }
 await stop();throw Error('Unreachable '+m.id)
}
async function face(){
 for(let i=0;i<45;i++){
  const angle=await page.locator('#walkBearing').evaluate(e=>Math.atan2(Math.sin(parseFloat(e.style.rotate)||0),Math.cos(parseFloat(e.style.rotate)||0)))
  if(Math.abs(angle)<.7)break
  const key=angle>0?'l':'j';await page.keyboard.down(key);await page.waitForTimeout(90);await page.keyboard.up(key)
 }
}
try{
 await page.goto(base)
 if(process.env.RESUME_AT){const n=Number(process.env.RESUME_AT);await page.evaluate(({index,ids})=>localStorage.setItem('astro-kitty-expedition-3d-v2',JSON.stringify({index,completed:ids,found:[]})),{index:n,ids:MISSIONS.slice(0,n).map(m=>m.id)})}
 await page.getByRole('link',{name:'Kitty’s Mars Adventure 3D',exact:false}).click()
 await page.locator('#missionBook').waitFor();await page.locator('#surface[data-habitat=model]').waitFor()
 await page.screenshot({path:shots+'/mars-3d-start.png'})
 for(let i=Number(process.env.RESUME_AT||0);i<MISSIONS.length;i++){
  const m=MISSIONS[i];await page.waitForFunction(title=>document.getElementById('walkGoal').textContent===title,m.title)
  console.log('PLAY',i+1,m.id)
  await reach(m);await stop()
  if(m.kind==='drive')continue
  if(m.kind==='scan')await face()
  if(m.kind==='align'){
   // Read the same signal feedback a player sees, using small control nudges.
   const key=m.angle>0?'e':'q'
   for(let n=0;n<60;n++){
    if((await page.locator('.field-status').innerText()).startsWith('Aligned'))break
    await page.keyboard.down(key);await page.waitForTimeout(45);await page.keyboard.up(key);await page.waitForTimeout(45)
   }
   assert.match(await page.locator('.field-status').innerText(),/Aligned/)
  }
  await page.locator('#surface').focus();await page.keyboard.down('Space')
  await page.waitForFunction(title=>document.getElementById('walkGoal').textContent!==title,m.title,{timeout:Number(process.env.TASK_TIMEOUT||18000)})
  await page.keyboard.up('Space')
  assert.equal(await page.locator('dialog[open]').count(),0,'World task opened a modal')
  if(i===5){await page.screenshot({path:shots+'/mars-3d-crater.png'})}
  if(i===6){await page.reload();await page.locator('#missionBook').waitFor();console.log('CHECK rover checkpoint reload')}
  if(i===17)await page.screenshot({path:shots+'/mars-3d-habitat.png'})
 }
 const data=await page.evaluate(()=>JSON.parse(localStorage.getItem('astro-kitty-expedition-3d-v2')))
 assert.equal(data.completed.length,24);assert.ok(data.found.length>=(process.env.RESUME_AT?2:4))
 await page.reload();await page.locator('#missionBook').waitFor();assert.equal(await page.locator('#missionCount').innerText(),'24 / 24')
 for(const size of [{width:390,height:844},{width:760,height:375}]){
  await page.setViewportSize(size);await page.locator('#missionBook').click();await page.locator('[data-chapter="4"]').click();await page.waitForTimeout(700)
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1))
  await page.screenshot({path:shots+'/mars-3d-phone-'+size.width+'.png'})
 }
 assert.deepEqual(errors,[])
 console.log('PASS 24 3D tasks, 6 chapters, rover checkpoint reload, discoveries, all progress saved, portrait and landscape layouts')
}catch(error){await page.screenshot({path:shots+'/mars-3d-failure.png'});throw error}finally{await stop();await browser.close()}
