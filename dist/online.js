// Shared helpers for the online features: finding the API, the player's kitty name,
// and a small queue so scores earned offline are sent when the connection comes back.
const STORE='astro-kitty-online-v1';
const QUEUE='astro-kitty-online-queue-v1';

export function readJSON(key,fallback){try{const v=JSON.parse(localStorage.getItem(key)??'null');return v??fallback;}catch{return fallback;}}
export function writeJSON(key,value){try{localStorage.setItem(key,JSON.stringify(value));}catch{}}

// The in-game 'reduce motion' switch also calms the hub pages.
if(typeof document!=='undefined')document.body?.classList.toggle('reduce-motion',readJSON('astro-kitty-profile-v1',{}).reduceMotion===true);
export function lang(){const p=readJSON('astro-kitty-profile-v1',{});return p.language==='bn'?'bn':'en';}
export const pick=(text)=>text&&typeof text==='object'?(text[lang()]??text.en):text;
export function escapeHTML(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

let configPromise;
async function config(){
  // data/online-config.json can point the game at a backend on another host, e.g. Render.
  configPromise??=fetch('./data/online-config.json').then(r=>r.ok?r.json():{}).catch(()=>({}));
  return configPromise;
}
export async function apiBase(){
  const override=readJSON('astro-kitty-api-base',null);
  if(typeof override==='string')return override.replace(/\/$/,'');
  const c=await config();return String(c.apiBase??'').replace(/\/$/,'');
}

let healthPromise;
export function online(){
  healthPromise??=(async()=>{
    try{
      const base=await apiBase();
      const ctrl=new AbortController();const timer=setTimeout(()=>ctrl.abort(),4000);
      const r=await fetch(`${base}/api/health`,{signal:ctrl.signal});clearTimeout(timer);
      return r.ok?await r.json():null;
    }catch{return null;}
  })();
  return healthPromise;
}

export function me(){return readJSON(STORE,{});}
export async function api(path,{method='GET',body,auth=true,raw=false}={}){
  const base=await apiBase();
  const headers={};
  if(body!==undefined)headers['Content-Type']='application/json';
  const token=me().token;
  if(auth&&token)headers.Authorization=`Bearer ${token}`;
  const r=await fetch(`${base}${path}`,{method,headers,body:body===undefined?undefined:JSON.stringify(body)});
  if(raw)return r;
  const data=await r.json().catch(()=>({}));
  if(!r.ok){const err=new Error(typeof data.detail==='string'?data.detail:data.detail?.message??`HTTP ${r.status}`);err.status=r.status;err.detail=data.detail;throw err;}
  return data;
}

// Joining needs no personal details: the server gives a generated kitty name.
export async function ensurePlayer(classCode=null){
  if(!(await online()))return null;
  const saved=me();
  if(saved.token){
    try{const player=await api('/api/players/me');writeJSON(STORE,{...saved,player});return player;}
    catch(err){if(err.status!==401)return saved.player??null;}
  }
  const data=await api('/api/players',{method:'POST',body:{class_code:classCode},auth:false});
  writeJSON(STORE,{token:data.token,player:data.player});
  return data.player;
}
export async function joinClass(code){
  await ensurePlayer();
  const player=await api('/api/players/me/class',{method:'POST',body:{class_code:code}});
  writeJSON(STORE,{...me(),player});return player;
}

// Offline queue: [{path, body}]
export function queue(path,body){const q=readJSON(QUEUE,[]);q.push({path,body});writeJSON(QUEUE,q.slice(-50));}
export async function flushQueue(){
  if(!(await online())||!me().token)return 0;
  const q=readJSON(QUEUE,[]);const left=[];let sent=0;
  for(const item of q){try{await api(item.path,{method:'POST',body:item.body});sent++;}catch(err){if(!err.status||err.status>=500)left.push(item);}}
  writeJSON(QUEUE,left);return sent;
}
export async function submit(path,body){
  if(await online()){try{await ensurePlayer();return await api(path,{method:'POST',body});}catch(err){if(err.status&&err.status<500)throw err;}}
  queue(path,body);return null;
}

export function speak(text){
  const p=readJSON('astro-kitty-profile-v1',{});
  if(p.voice===false||!('speechSynthesis' in window))return;
  try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=/[ঀ-৿]/.test(text)?'bn-BD':'en-US';u.rate=.95;u.pitch=1.15;speechSynthesis.speak(u);}catch{}
}

export function topBar(title){
  return `<header class="hub-top"><a class="hub-brand" href="./">🐱 astro kitty</a><nav><a href="./hub.html">${lang()==='bn'?'মিশন হাব':'Mission Hub'}</a></nav></header><h1 class="hub-title">${escapeHTML(title)}</h1>`;
}
window.addEventListener('online',()=>{healthPromise=null;flushQueue();});
