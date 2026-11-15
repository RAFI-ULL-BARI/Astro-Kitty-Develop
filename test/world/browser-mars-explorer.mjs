import {fileURLToPath} from 'node:url';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const chrome=process.env.CHROMIUM_EXECUTABLE;
const binary=process.env.CHROMIUM_MODULE?(await import(process.env.CHROMIUM_MODULE)).default:null;import {readFile,writeFile,mkdir} from 'node:fs/promises';import path from 'node:path';import assert from 'node:assert/strict';
async function release(page, keys) {
  for (const key of keys) await page.keyboard.up(key);
}
async function followMarker(page, destination) {
  let keys = [];
  try {
    for (let attempt=0;attempt<170;attempt++) {
      if (await destination.isVisible()) return;
      const bearing=await page.locator('#walkBearing').evaluate(arrow=>parseFloat(arrow.style.rotate)||0);
      const desired=[Math.abs(Math.sin(bearing))>0.40?(Math.sin(bearing)>0?'d':'a'):'',
        Math.abs(Math.cos(bearing))>0.40?(Math.cos(bearing)>0?'w':'s'):''].filter(Boolean);
      await release(page, keys.filter(key=>!desired.includes(key)));
      for (const key of desired.filter(key=>!keys.includes(key))) await page.keyboard.down(key);
      keys=desired;
      await page.waitForTimeout(130);
    }
    assert.fail('Could not reach ' + destination);
  } finally {
    await release(page, keys);
  }
}
const root=fileURLToPath(new URL('../../dist/world/',import.meta.url));const results=[];await mkdir('/tmp/astro-kitty-qa/shots',{recursive:true});
for(const [width,height]of [[1366,860],[375,760],[360,640],[760,375]]){
const browser=await chromium.launch({headless:true,...(binary?{executablePath:await binary.executablePath(),args:binary.args}:chrome?{executablePath:chrome,args:process.env.CHROMIUM_SOFTWARE?['--use-angle=swiftshader','--enable-unsafe-swiftshader']:[]}:{})});const ctx=await browser.newContext({viewport:{width,height},serviceWorkers:'block'}),page=await ctx.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('Failed to load resource'))errors.push(m.text());});await page.addInitScript(()=>{window.__drawCount=0;const original=WebGLRenderingContext.prototype.drawElements;WebGLRenderingContext.prototype.drawElements=function(...args){window.__drawCount++;return original.apply(this,args);};});
await ctx.route('**/*',async route=>{const u=new URL(route.request().url());if(u.hostname!=='astro.local')return route.fulfill({status:503,body:'offline'});try{const filename=path.join(root,u.pathname==='/'?'index.html':u.pathname),body=await readFile(filename);await route.fulfill({body,contentType:({'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.jpg':'image/jpeg','.woff2':'font/woff2'})[path.extname(filename)]||'application/octet-stream'});}catch{return route.fulfill({status:404,body:'missing'});}});
await page.goto('http://astro.local/mars-explorer.html');await page.waitForTimeout(600);console.log('ERRORS',errors);console.log(width,'renderer',await page.locator('#explorer').getAttribute('data-renderer'));assert.equal(await page.locator('#explorer').getAttribute('data-renderer'),'webgl');
const check=async label=>{const data=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth,badges:[...document.querySelectorAll('.truth-badge')].filter(x=>x.checkVisibility()).map(x=>x.getBoundingClientRect().height)}));assert.ok(data.overflow<2,label);assert.ok(data.badges.every(h=>h<40));assert.deepEqual(errors,[]);results.push({width,height,label,...data});};
await check('globe');await page.screenshot({path:`/tmp/astro-kitty-qa/shots/${width}-globe.png`});
await page.locator('[data-tab=weather]').click();await page.getByText('25 Aug 2026',{exact:false}).waitFor();await check('dated weather');await page.locator('[data-tab=sun]').click();await page.getByText('NASA archive · not live',{exact:true}).waitFor();await check('DONKI offline');
await page.locator('[data-tab=storms]').click();await page.locator('[data-story=dust]').click();await check('dust story');await page.locator('[data-story=solar]').click();
const c=page.locator('#globe');await c.focus();await page.keyboard.press('ArrowRight');await page.keyboard.press('+');await page.locator('#resetView').click();const box=await c.boundingBox();await page.mouse.move(box.x+box.width*.5,box.y+box.height*.5);await page.mouse.down();await page.mouse.move(box.x+box.width*.6,box.y+box.height*.55,{steps:5});await page.mouse.up();assert.equal(await page.locator('#landing').evaluate(x=>x.open),false);
await page.locator('#landShortcut').click();await page.locator('#landConfirm').click();
await page.locator('#surface[data-habitat=model]').waitFor();
await page.locator('#walkObjective').waitFor();
assert.equal(await page.locator('#walkGoal').innerText(),'Find a rock');
await check('surface');
await page.waitForTimeout(750);
await page.screenshot({path:`/tmp/astro-kitty-qa/shots/${width}-surface.png`});

await page.locator('.walk-real summary').click();
assert.equal(await page.locator('.walk-facts').isVisible(),true);
assert.match(await page.locator('.walk-facts').innerText(),/Dust storms can hide landmarks/);
await page.keyboard.press('Escape');
assert.equal(await page.locator('.walk-facts').isVisible(),false);
await page.locator('#surface').focus();

if(width===1366){
  const sample=page.getByRole('button',{name:'Collect rock'});
  await followMarker(page,sample);
  await page.keyboard.press('Enter');
  await page.getByText('Check solar power',{exact:true}).waitFor();
  const power=page.getByRole('button',{name:'Check power',exact:true});
  await followMarker(page,power);
  await power.click();
  await page.getByText('Reach the airlock',{exact:true}).waitFor();
  await page.locator('#practiceStorm').click();
  await page.getByText('Dust is blocking the light.',{exact:false}).waitFor();
  await page.waitForTimeout(1200);
  await page.screenshot({path:'/tmp/astro-kitty-qa/shots/1366-dust-drill.png'});
  const airlock=page.getByRole('button',{name:'Open airlock'});
  await followMarker(page,airlock);
  await airlock.click();
  await page.waitForTimeout(1300);
  await followMarker(page,page.getByText('Walk complete!',{exact:true}));
  assert.equal(await page.locator('#surfaceStatus').innerText(),'Inside our shelter');
  await check('sample, power, and storm shelter complete');
} else if(width<761) {
  const mover=await page.locator('[data-move=forward]').boundingBox();
  const before=Number((await page.locator('#walkDistance').innerText()).split(' ')[0]);
  await page.mouse.move(mover.x+mover.width/2,mover.y+mover.height/2);
  await page.mouse.down();
  await page.waitForTimeout(850);
  await page.mouse.up();
  assert.ok(Number((await page.locator('#walkDistance').innerText()).split(' ')[0])<before);
}
await check('surface controls');
if(width===375){await page.setViewportSize({width:760,height:375});await check('rotated surface');await page.setViewportSize({width,height});}
await page.locator('#orbit').click();await check('back to globe');
await page.waitForTimeout(150);const hiddenCount=await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));return window.__drawCount;});await page.waitForTimeout(150);assert.equal(await page.evaluate(()=>window.__drawCount),hiddenCount);await page.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});await page.waitForTimeout(150);assert.ok(await page.evaluate(()=>window.__drawCount)>hiddenCount);await check('hidden tab pauses rendering');await page.emulateMedia({reducedMotion:'reduce'});await page.waitForFunction(()=>document.getElementById('motion').textContent==='Play motion');await check('reduced motion');
await page.emulateMedia({reducedMotion:'no-preference'});await page.waitForTimeout(100);const ms=await page.evaluate(()=>new Promise(resolve=>{const ticks=[];let last=performance.now();function tick(now){ticks.push(now-last);last=now;if(ticks.length<30)requestAnimationFrame(tick);else resolve(ticks.slice(1).reduce((a,b)=>a+b,0)/(ticks.length-1));}requestAnimationFrame(tick);}));results.push({width,height,meanFrameMs:ms});
if(width===360){await page.addInitScript(()=>{const get=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...rest){return type==='webgl'?null:get.call(this,type,...rest);};});await page.reload();assert.equal(await page.locator('#explorer').getAttribute('data-renderer'),'fallback');assert.equal(await page.locator('#landShortcut').isDisabled(),true);await page.locator('[data-tab=weather]').click();await page.getByText('25 Aug 2026',{exact:false}).waitFor();await check('no-WebGL fallback retains real data');}
await browser.close();}
await writeFile('/tmp/astro-kitty-qa/explorer-results.json',JSON.stringify(results,null,2));console.log('PASS',results.length);
