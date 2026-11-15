import {fileURLToPath} from 'node:url';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const binary=process.env.CHROMIUM_MODULE?(await import(process.env.CHROMIUM_MODULE)).default:null;
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=fileURLToPath(new URL('../',import.meta.url)).replace(/\/$/,'');
const {createOutpost,defaultPlan,confirmPlan,choose,sensibleChoice,tickReply,showSummary,nextSol}=await import(root+'/dist/outpost-engine.js');
const states=[];const mission=createOutpost({code:'DUST-42'});for(let i=0;i<5;i++){states.push(structuredClone(mission));confirmPlan(mission,defaultPlan(mission));choose(mission,sensibleChoice(mission));for(let n=0;n<7;n++)tickReply(mission,1);showSummary(mission);nextSol(mission);}

await mkdir('/tmp/astro-kitty-qa/shots',{recursive:true});
const results=[];
for(const [width,height]of [[1366,860],[375,760],[360,640],[760,375]]){
 const browser=await chromium.launch({headless:true,...(binary?{executablePath:await binary.executablePath(),args:binary.args}:{})});
 const context=await browser.newContext({viewport:{width,height},serviceWorkers:'block'}),page=await context.newPage();
 page.setDefaultTimeout(12000);page.setDefaultNavigationTimeout(12000);console.log('VIEWPORT',width,height);const errors=[];page.on('pageerror',e=>{errors.push(e.message);console.log('PAGEERROR',e.message);});
 await context.route('**/*',async route=>{const u=new URL(route.request().url());if(u.hostname!=='astro.local')return route.fulfill({status:503,body:'offline'});
  let filename=decodeURIComponent(u.pathname);if(filename.endsWith('/'))filename+='index.html';
  try{const body=await readFile(path.join(root,'dist',filename));const ext=path.extname(filename);await route.fulfill({body,contentType:({'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.woff2':'font/woff2','.mp3':'audio/mpeg','.wav':'audio/wav','.jpg':'image/jpeg','.svg':'image/svg+xml'})[ext]||'application/octet-stream'});}catch{await route.fulfill({status:404,body:'missing'});}
 });
 await page.addInitScript(()=>{
  window.__spoken=[];window.SpeechSynthesisUtterance=class {constructor(text){this.text=text;}};let current;const voice={name:'Test Dhrubo',voiceURI:'same-test-voice',lang:'en-US'};
  Object.defineProperty(window,'speechSynthesis',{value:{getVoices:()=>[voice],cancel(){if(current)clearTimeout(current.timer);current=null;},pause(){if(current)clearTimeout(current.timer);},resume(){if(current)current.timer=setTimeout(()=>current?.onend?.(),80);},speak(u){current=u;window.__spoken.push({text:u.text,voice:u.voice?.voiceURI,rate:u.rate});u.onstart?.();u.timer=setTimeout(()=>{u.onend?.();if(current===u)current=null;},80);}}});
 });
 const check=async label=>{
  const m=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth,badges:[...document.querySelectorAll('.truth-badge')].filter(x=>x.checkVisibility()).map(x=>x.getBoundingClientRect().height)}));assert.ok(m.overflow<=1,label+' overflow '+m.overflow);assert.ok(m.badges.every(h=>h<40),label+' badge');assert.deepEqual(errors,[],label+' errors');
  results.push({width,height,label,...m});
 };
 await page.goto('http://astro.local/?choose=1');await page.waitForTimeout(180);
 // Run the real movie component with its normal controls and narrator.
 for(const kind of ['departure','training','base']){
  await page.evaluate(async kind=>{const {playMissionFilm}=await import('./flight-adventure.js?v=10');window.__filmDone=false;playMissionFilm(kind).then(()=>window.__filmDone=true);},kind);
  await page.waitForTimeout(150);await check(kind+' film');
  console.log('shot',width);await page.screenshot({animations:'disabled',timeout:60000,path:`/tmp/astro-kitty-qa/shots/${width}-${kind}.png`});
  if(kind==='departure'){
   await page.locator('[data-pause]').click();const text=await page.locator('.flight-copy p').innerText();await page.waitForTimeout(100);assert.equal(await page.locator('.flight-copy p').innerText(),text);await page.locator('[data-pause]').click();
   if(width===375){await page.setViewportSize({width:760,height:375});await check('rotation landscape');await page.setViewportSize({width,height});}
  }
  await page.locator('[data-exit]').click();await page.waitForFunction(()=>window.__filmDone);
 }
 // Saved power chapter remains playable and says the requested clues.
 await page.evaluate(()=>localStorage.setItem('astro-kitty-story-v2',JSON.stringify({scene:'power',trainingScene:'power',introSeen:true,voice:true,patches:['sun']})));
 console.log('going power');await page.goto('http://astro.local/?training=1');console.log('power loaded');await page.locator('[data-exit]').click();await page.waitForSelector('#game[data-scene="power"]');await page.waitForTimeout(200);await check('power');
 console.log('shot',width);await page.screenshot({animations:'disabled',timeout:60000,path:`/tmp/astro-kitty-qa/shots/${width}-power.png`});
 assert.match(await page.locator('#spokenLine').innerText(),/Connect the device that gives us fresh air/);
 const powerButtons=await page.locator('.training-port').evaluateAll(nodes=>nodes.map(n=>({label:n.getAttribute('aria-label'),data:{...n.dataset}})));console.log('power ports',width,JSON.stringify(powerButtons));
 await page.locator('[data-source=cell0]').click();await page.locator('[data-socket=air]').click();await page.locator('[data-source=cell1]').click();await page.locator('[data-socket=radio]').click();await page.waitForTimeout(200);await check('power connections');
 // Launch planner source uses our Real badge.
 await page.goto('http://astro.local/?choose=1');await page.waitForTimeout(100);
 const launch=await page.evaluate(()=>[...document.querySelectorAll('button')].filter(n=>n.checkVisibility()).map(n=>({id:n.id,text:n.textContent})));console.log('home',width,JSON.stringify(launch));
 // Five valid engine mornings, unchanged by presentation.
 for(let sol=1;sol<=5;sol++){
  await page.goto('http://astro.local/?choose=1');
  await page.evaluate(s=>{localStorage.setItem('astro-kitty-outpost-v1',JSON.stringify(s));},states[sol-1]);
  await page.goto('http://astro.local/outpost.html');await page.locator('[data-exit]').click();await page.waitForTimeout(150);
  const resume=page.locator('[data-action="continue"]');if(await resume.count())await resume.click();else{const buttons=await page.locator('[data-action]').evaluateAll(n=>n.map(x=>({a:x.dataset.action,text:x.textContent})));console.log('outpost actions',JSON.stringify(buttons));throw Error('No continue');}
  await page.waitForTimeout(850);await check('sol '+sol);assert.equal(await page.locator('#outpostCanvas').getAttribute('data-room'),['lounge','garden','lifeSupport','workshop','control'][sol-1]);
  console.log('shot',width);await page.screenshot({animations:'disabled',timeout:60000,path:`/tmp/astro-kitty-qa/shots/${width}-sol${sol}.png`});
 }
 const voices=await page.evaluate(()=>window.__spoken.map(x=>x.voice));assert.ok(voices.every(v=>v==='same-test-voice'));
 await browser.close();
}
await writeFile('/tmp/astro-kitty-qa/results.json',JSON.stringify(results,null,2));console.log('PASS',results.length);
