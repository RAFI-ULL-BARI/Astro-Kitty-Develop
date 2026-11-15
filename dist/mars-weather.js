export const WEATHER_URL='https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json';
export const WEATHER_CACHE='astro-kitty-mars-weather-v1';
function safeStorage(){try{return globalThis.localStorage;}catch{return null;}}
const AGE=3*60*60*1000;
const number=(v,min,max)=>v!==null&&v!==undefined&&String(v).trim()!==''&&Number.isFinite(Number(v))&&Number(v)>=min&&Number(v)<=max?Number(v):null;
export function normalizeWeather(row,now=Date.now()){
 if(!row||typeof row.terrestrial_date!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(row.terrestrial_date))return null;
 const date=Date.parse(row.terrestrial_date+'T00:00:00Z');if(!Number.isFinite(date)||date>now||new Date(date).toISOString().slice(0,10)!==row.terrestrial_date)return null;
 const sol=number(row.sol,0,100000),low=number(row.min_temp,-160,60),high=number(row.max_temp,-160,60),pressure=number(row.pressure,0,2000);
 if(sol===null||!Number.isInteger(sol)||(low===null&&high===null&&pressure===null)||(low!==null&&high!==null&&low>high))return null;
 return {date:row.terrestrial_date,sol,low,high,pressure};
}
export function createWeatherLoader(){let pending,used=false;return async function load({fetcher=globalThis.fetch,storage=safeStorage(),now=Date.now(),timeout=6000}={}){
 if(pending)return pending;
 pending=(async()=>{
  try{const c=JSON.parse(storage?.getItem(WEATHER_CACHE)||'null');const row=c?.raw&&normalizeWeather(c.raw,now);if(row&&now>=c.checked&&now-c.checked<AGE)return {...row,mode:'cache',checked:c.checked};}catch{}
  if(!used){used=true;const controller=new AbortController();let timer;
   try{const data=await Promise.race([(async()=>{const r=await fetcher(WEATHER_URL,{signal:controller.signal});if(!r.ok)throw Error('feed');return r.json();})(),new Promise((_,reject)=>{timer=setTimeout(()=>{controller.abort();reject(new Error('timeout'));},timeout);})]);
    if(!Array.isArray(data.soles))throw new Error('shape');const rows=data.soles.map(raw=>({raw,row:normalizeWeather(raw,now)})).filter(x=>x.row).sort((a,b)=>b.row.date.localeCompare(a.row.date));if(!rows.length)throw new Error('empty');const first=rows[0];try{storage?.setItem(WEATHER_CACHE,JSON.stringify({raw:first.raw,checked:now}));}catch{}return {...first.row,mode:'feed',checked:now};
   }catch{}finally{clearTimeout(timer);}
  }
  const archive=await fetcher('./data/mars-weather.json').then(r=>r.ok?r.json():null).catch(()=>null);
  const rows=(archive?.soles??[]).map(r=>normalizeWeather(r,now)).filter(Boolean).sort((a,b)=>b.date.localeCompare(a.date));
  return {...(rows[0]??{date:'2026-08-25',sol:4995,low:-71,high:-5,pressure:777}),mode:'archive',checked:null};
 })();return pending;
};}
