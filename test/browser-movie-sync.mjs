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
for(const [width,height]of [[1366,860]]){
 const browser=await chromium.launch({headless:true,...(binary?{executablePath:await binary.executablePath(),args:binary.args}:{})});
 const context=await browser.newContext({viewport:{width,height},serviceWorkers:'block'}),page=await context.newPage();
 page.setDefaultTimeout(12000);page.setDefaultNavigationTimeout(12000);console.log('VIEWPORT',width,height);const errors=[];page.on('pageerror',e=>{errors.push(e.message);console.log('PAGEERROR',e.message);});
 await context.route('**/*',async route=>{const u=new URL(route.request().url());if(u.hostname!=='astro.local')return route.fulfill({status:503,body:'offline'});
  let filename=decodeURIComponent(u.pathname);if(filename.endsWith('/'))filename+='index.html';
  try{const body=await readFile(path.join(root,'dist',filename));const ext=path.extname(filename);await route.fulfill({body,contentType:({'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.woff2':'font/woff2','.mp3':'audio/mpeg','.wav':'audio/wav','.jpg':'image/jpeg','.svg':'image/svg+xml'})[ext]||'application/octet-stream'});}catch{await route.fulfill({status:404,body:'missing'});}
 });
 await page.addInitScript(()=>{
  window.__spoken=[];window.SpeechSynthesisUtterance=class {constructor(text){this.text=text;}};let current;const voice={name:'Test Dhrubo',voiceURI:'same-test-voice',lang:'en-US'};
  Object.defineProperty(window,'speechSynthesis',{value:{getVoices:()=>[voice],cancel(){if(current)clearTimeout(current.timer);current=null;},pause(){if(current)clearTimeout(current.timer);},resume(){if(current)current.timer=setTimeout(()=>current?.onend?.(),80);},speak(u){current=u;window.__spoken.push({text:u.text,voice:u.voice?.voiceURI,rate:u.rate});u.onstart?.();u.timer=setTimeout(()=>{u.onend?.();if(current===u)current=null;},window.__spoken.length===1?10000:80);}}});
 });
 const check=async label=>{
  const m=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth,badges:[...document.querySelectorAll('.truth-badge')].filter(x=>x.checkVisibility()).map(x=>x.getBoundingClientRect().height)}));assert.ok(m.overflow<=1,label+' overflow '+m.overflow);assert.ok(m.badges.every(h=>h<40),label+' badge');assert.deepEqual(errors,[],label+' errors');
  results.push({width,height,label,...m});
 };
 await page.goto('http://astro.local/?choose=1');await page.evaluate(()=>localStorage.setItem('astro-kitty-sound-v3','on'));
 await page.evaluate(async()=>{const {playMissionFilm}=await import('./flight-adventure.js?v=10');window.__spoken.length=0;window.__filmDone=false;playMissionFilm('training').then(()=>window.__filmDone=true);});
 await page.waitForTimeout(6600);assert.equal(await page.locator('.flight-copy h2').innerText(),'Welcome to Mars');await check('caption waits for a long spoken line');
 await page.waitForFunction(()=>window.__filmDone,{},{timeout:20000});await check('full training film ends naturally');assert.equal((await page.evaluate(()=>window.__spoken)).length,2);
 await browser.close();}
await writeFile('/tmp/astro-kitty-qa/sync-results.json',JSON.stringify(results,null,2));console.log('PASS',results.length);
