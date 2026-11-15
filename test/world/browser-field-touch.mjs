const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright')
import assert from 'node:assert/strict'
const browser=await chromium.launch(process.env.CHROMIUM_EXECUTABLE?{executablePath:process.env.CHROMIUM_EXECUTABLE}:{})
try{
const context=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true,reducedMotion:'reduce'})
const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message))
const base=process.env.PREVIEW_URL||'http://127.0.0.1:8765'
await page.goto(base+'/')
await page.waitForFunction(()=>navigator.serviceWorker.controller)
assert.ok(await page.evaluate(async()=>{const c=await caches.open('astro-kitty-offline-v40-mars-adventure-3d');return Boolean(await c.match('/field-missions.js?v=10')&&await c.match('/mars-surface.js?v=10')&&await c.match('/assets/mars-walk/habitat.glb'))}))
await context.setOffline(true)
await page.goto(base+'/mars-explorer.html?play=1')
await page.locator('#missionBook').waitFor();await page.locator('#surface[data-habitat=model]').waitFor()
await page.screenshot({path:'/tmp/field-phone-start.png'})
const session=await context.newCDPSession(page)
async function hold(selector,ms){const b=await page.locator(selector).boundingBox();assert.ok(b);await session.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:b.x+b.width/2,y:b.y+b.height/2}]});await page.waitForTimeout(ms);await session.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]})}
async function holdUntil(selector,title){const b=await page.locator(selector).boundingBox();await session.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:b.x+b.width/2,y:b.y+b.height/2}]});try{await page.waitForFunction(t=>document.getElementById('walkGoal').textContent!==t,title,{timeout:25000})}finally{await session.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]})}}
await hold('[data-move=right]',2300);await hold('[data-move=forward]',2250)
// Small corrective taps navigate using the rendered compass, without accessing game state.
for(let i=0;i<35&&!await page.locator('#walkInteract').isVisible();i++){
 const angle=await page.locator('#walkBearing').evaluate(e=>parseFloat(e.style.rotate))
 await hold('[data-move='+ (Math.abs(Math.sin(angle))>.7?(Math.sin(angle)>0?'right':'left'):(Math.cos(angle)>0?'forward':'back'))+']',220)
}
await page.locator('#walkInteract').waitFor({state:'visible'})
await page.screenshot({path:'/tmp/field-phone-tool.png'})
await holdUntil('#walkInteract','Brush the solar array')
assert.equal(await page.locator('#walkGoal').innerText(),'Turn the panel toward the Sun')
for(let n=0;n<35&&!((await page.locator('.field-status').innerText()).startsWith('Aligned'));n++)await hold('[aria-label="Turn equipment right"]',85)
assert.match(await page.locator('.field-status').innerText(),/Aligned/)
await holdUntil('#walkInteract','Turn the panel toward the Sun')
assert.equal(await page.locator('#walkGoal').innerText(),'Mark the Copper Flats trail')
await page.locator('.walk-real summary').tap();assert.ok(await page.locator('.walk-facts').isVisible());await page.locator('.walk-real summary').tap()
await page.locator('#missionBook').tap();await page.locator('[data-chapter="4"]').tap()
await page.waitForTimeout(500);await page.screenshot({path:'/tmp/field-phone-inside.png'})
assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1))
await page.setViewportSize({width:760,height:375});await page.waitForTimeout(500);await page.screenshot({path:'/tmp/field-landscape.png'})
assert.deepEqual(errors,[])
console.log('PASS offline 3D loading, real touch movement, held tool, equipment rotation, reduced motion, Real facts and responsive habitat')
}finally{await browser.close()}
