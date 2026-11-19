// Sky Tonight: where Mars is, real launch windows, ISS flyovers and NASA's daily picture.
import {lang,escapeHTML,online,api,topBar} from './online.js?v=10';
import {mountDhrubo} from './dhrubo-chat.js?v=10';

const app=document.getElementById('app');
const L=lang();
const T={
  en:{title:'Sky Tonight',sub:'Real space data for where you are.',city:'Your city',locate:'📍 Use my location',mars:'Where is Mars now?',up:'Mars is up! Look',down:'Mars is below the horizon right now. Try again later tonight or tomorrow!',
    far:'Mars is {km} million km away. A radio message takes {min} minutes to get there.',windows:'Next trips to Mars',windowsHelp:'Earth and Mars line up about every 26 months. Rockets launch near these dates.',launch:'Launch',arrive:'Arrive',
    iss:'Space station flyovers',issHelp:'Go outside and wave! The ISS looks like a bright, moving star with no blinking lights. Best just after sunset or before sunrise.',noPass:'No high passes in the next 3 days.',issOff:'The ISS tracker is resting. Try again soon.',
    apod:'NASA picture of the day',mars_images:'New from Mars',flares:'Solar flares this week',offline:'Connect to the internet for live sky data. The NASA pictures below still work offline.',up_to:'up to',high:'high',dir:{north:'north','north-east':'north-east',east:'east','south-east':'south-east',south:'south','south-west':'south-west',west:'west','north-west':'north-west'}},
  bn:{title:'আজ রাতের আকাশ',sub:'তুমি যেখানে আছ, সেখানকার আসল মহাকাশ তথ্য।',city:'তোমার শহর',locate:'📍 আমার অবস্থান ব্যবহার করো',mars:'মঙ্গল এখন কোথায়?',up:'মঙ্গল আকাশে আছে! তাকাও',down:'মঙ্গল এখন দিগন্তের নিচে। আজ রাতে পরে বা কাল আবার দেখো!',
    far:'মঙ্গল {km} মিলিয়ন কিলোমিটার দূরে। রেডিও বার্তা পৌঁছাতে {min} মিনিট লাগে।',windows:'মঙ্গলে পরের যাত্রা',windowsHelp:'পৃথিবী আর মঙ্গল প্রায় প্রতি ২৬ মাসে সারিতে আসে। এই তারিখগুলোর কাছাকাছি রকেট ছাড়ে।',launch:'উৎক্ষেপণ',arrive:'পৌঁছানো',
    iss:'মহাকাশ স্টেশনের উড়াল',issHelp:'বাইরে গিয়ে হাত নাড়াও! আইএসএস দেখতে উজ্জ্বল, চলমান তারার মতো, কোনো মিটমিটে আলো নেই। সূর্যাস্তের পরপর বা সূর্যোদয়ের আগে সবচেয়ে ভালো।',noPass:'আগামী ৩ দিনে উঁচু দিয়ে কোনো উড়াল নেই।',issOff:'আইএসএস ট্র্যাকার এখন বিশ্রামে। একটু পরে চেষ্টা করো।',
    apod:'নাসার আজকের ছবি',mars_images:'মঙ্গল থেকে নতুন',flares:'এই সপ্তাহের সৌরশিখা',offline:'সরাসরি আকাশ তথ্যের জন্য ইন্টারনেটে যুক্ত হও। নিচের নাসার ছবিগুলো অফলাইনেও চলবে।',up_to:'সর্বোচ্চ',high:'উঁচুতে',dir:{north:'উত্তরে','north-east':'উত্তর-পূর্বে',east:'পূর্বে','south-east':'দক্ষিণ-পূর্বে',south:'দক্ষিণে','south-west':'দক্ষিণ-পশ্চিমে',west:'পশ্চিমে','north-west':'উত্তর-পশ্চিমে'}},
}[L];
const CITIES=[['Khulna',22.82,89.55],['Dhaka',23.81,90.41],['Chattogram',22.36,91.78],['Rajshahi',24.37,88.6],['Sylhet',24.9,91.87],['Kolkata',22.57,88.36],['London',51.51,-0.13],['New York',40.71,-74.01],['Tokyo',35.68,139.69],['Sydney',-33.87,151.21]];
const fmtDate=s=>new Date(s).toLocaleDateString(L==='bn'?'bn-BD':'en-GB',{day:'numeric',month:'long',year:'numeric'});
const fmtTime=s=>new Date(s).toLocaleString(L==='bn'?'bn-BD':'en-GB',{weekday:'short',hour:'2-digit',minute:'2-digit'});

async function liveSky(lat,lon){
  const box=app.querySelector('#live');
  if(!(await online())){box.innerHTML=`<p class="notice">${T.offline}</p>`;return;}
  box.innerHTML='<p class="muted">…</p>';
  const [sky,iss]=await Promise.all([api(`/api/sky/mars?lat=${lat}&lon=${lon}`,{auth:false}).catch(()=>null),api(`/api/sky/iss?lat=${lat}&lon=${lon}`,{auth:false}).catch(()=>null)]);
  const m=sky?.mars;
  box.innerHTML=`<div class="grid">
    <section class="card"><h2>🔴 ${T.mars}</h2>${m?`<p style="font-size:20px">${m.visible?`${T.up} <b>${T.dir[m.direction]}</b>, ${Math.round(m.altitude_deg)}° ${T.high}.`:T.down}</p><p class="muted">${T.far.replace('{km}',(m.distance_km/1e6).toFixed(0)).replace('{min}',m.light_minutes)}</p>`:''}</section>
    <section class="card"><h2>🚀 ${T.windows}</h2><p class="muted">${T.windowsHelp}</p><ul>${(sky?.windows??[]).map(w=>`<li><b>${T.launch}:</b> ${fmtDate(w.launch)}<br><span class="muted">${T.arrive}: ${fmtDate(w.arrive)}</span></li>`).join('')}</ul></section>
    <section class="card"><h2>🛰️ ${T.iss}</h2><p class="muted">${T.issHelp}</p>${iss?(iss.passes.length?`<ul>${iss.passes.slice(0,5).map(p=>`<li><b>${fmtTime(p.peak)}</b> · ${T.up_to} ${Math.round(p.max_altitude_deg)}°</li>`).join('')}</ul>`:`<p>${T.noPass}</p>`):`<p>${T.issOff}</p>`}</section>
  </div>`;
}

async function feed(){
  const box=app.querySelector('#feed');
  const data=await fetch('./data/nasa-feed.json').then(r=>r.ok?r.json():{}).catch(()=>({}));
  const parts=[];
  if(data.apod?.image)parts.push(`<section class="card"><h2>🌌 ${T.apod}</h2><img src="${escapeHTML(data.apod.image)}" alt="${escapeHTML(data.apod.title)}" style="width:100%;border-radius:12px" loading="lazy"><p><b>${escapeHTML(data.apod.title)}</b></p><p class="muted">${escapeHTML(data.apod.explanation)}</p><a href="${escapeHTML(data.apod.link)}" target="_blank" rel="noopener">NASA APOD ↗</a></section>`);
  if(data.mars_images?.length)parts.push(`<section class="card"><h2>🪐 ${T.mars_images}</h2><div class="grid">${data.mars_images.slice(0,4).map(i=>`<a href="${escapeHTML(i.link)}" target="_blank" rel="noopener"><img src="${escapeHTML(i.image)}" alt="${escapeHTML(i.title)}" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:12px" loading="lazy"></a>`).join('')}</div></section>`);
  if(data.solar_flares?.length)parts.push(`<section class="card"><h2>☀️ ${T.flares}</h2><ul>${data.solar_flares.slice(0,5).map(f=>`<li><b>${escapeHTML(f.class)}</b> · ${fmtTime(f.peak)}</li>`).join('')}</ul></section>`);
  box.innerHTML=parts.join('');
}

function start(){
  app.innerHTML=`${topBar(T.title)}<p class="hub-sub">${T.sub}</p><div class="card" style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:16px"><label for="city">${T.city}</label><select id="city" style="border-radius:12px;padding:10px;background:#0f1a2e;border:1px solid var(--line)">${CITIES.map(([n],i)=>`<option value="${i}">${n}</option>`).join('')}</select><button class="btn ghost" id="locate">${T.locate}</button></div><div id="live"></div><div id="feed" class="grid" style="margin-top:16px"></div>`;
  const city=app.querySelector('#city');
  city.onchange=()=>{const[,lat,lon]=CITIES[+city.value];liveSky(lat,lon);};
  // Location stays on this device: it is rounded and only used for the sky maths.
  app.querySelector('#locate').onclick=()=>navigator.geolocation?.getCurrentPosition(p=>liveSky(p.coords.latitude.toFixed(1),p.coords.longitude.toFixed(1)));
  liveSky(CITIES[0][1],CITIES[0][2]);
  feed();
}
start();
mountDhrubo();
