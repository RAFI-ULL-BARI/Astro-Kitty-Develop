// Crew Mission: a live co-op Mars base for 1-4 classmates (WebSocket).
import {lang,escapeHTML,online,ensurePlayer,api,apiBase,me,topBar} from './online.js?v=10';

const app=document.getElementById('app');
const L=lang();
const T={
  en:{title:'Crew Mission',sub:'Keep the Mars base alive for 5 sols. Every kitty has a job. Work together!',create:'Start a new mission',code:'Mission code',join:'Join',share:'Tell your crew this code:',start:'Launch the mission!',waiting:'Waiting for crew…',
    sol:'Sol',of:'of',you:'You are the',pick:'Pick your job for today:',ready:'Ready! Waiting for the others…',forecast:'Your forecast:',won:'🎉 The base survived! Oshadharon, crew!',lost:'😿 The base ran out. Try a new plan!',again:'New mission',
    call:'📡 Call Earth',sent:'Message sent! Light takes {m} minutes each way, so the answer comes back later (sped up here).',earth:'🌍 Earth replied after {m} minutes:',offline:'Crew missions need the internet.',quick:'Quick messages',
    res:{oxygen:'🫁 Oxygen',water:'💧 Water',food:'🥕 Food',power:'🔋 Power'},
    roles:{engineer:'🔧 Engineer',botanist:'🌱 Botanist',pilot:'🛞 Rover pilot',scientist:'🔬 Scientist'},
    events:{calm:'A calm, sunny sol.',dust_storm:'A dust storm covers the panels!',cold_night:'A freezing night uses extra power.',air_leak:'A tiny air leak!',solar_flare:'A solar flare! Everyone hides.',thirsty_plants:'The plants are extra thirsty.'},
    actions:{fix_panels:'Clean the solar panels',repair_air:'Fix the oxygen maker',water_garden:'Water the space garden',recycle_water:'Recycle water',rover_ice:'Drive to dig ice',supply_run:'Fetch the supply drop',forecast:'Forecast the weather (halves bad events)',make_oxygen:'Make oxygen like MOXIE',rest:'Rest and save energy'}},
  bn:{title:'ক্রু মিশন',sub:'৫ সল ধরে মঙ্গল ঘাঁটি বাঁচিয়ে রাখো। প্রত্যেক বিড়ালের একটা কাজ। একসাথে কাজ করো!',create:'নতুন মিশন শুরু',code:'মিশন কোড',join:'যোগ দাও',share:'দলকে এই কোডটা বলো:',start:'মিশন শুরু করো!',waiting:'দলের জন্য অপেক্ষা…',
    sol:'সল',of:'এর',you:'তুমি হলে',pick:'আজকের কাজ বেছে নাও:',ready:'প্রস্তুত! অন্যদের জন্য অপেক্ষা…',forecast:'তোমার পূর্বাভাস:',won:'🎉 ঘাঁটি টিকে গেছে! অসাধারণ, দল!',lost:'😿 ঘাঁটির রসদ ফুরিয়ে গেছে। নতুন পরিকল্পনা করো!',again:'নতুন মিশন',
    call:'📡 পৃথিবীকে ডাকো',sent:'বার্তা পাঠানো হয়েছে! আলো প্রতি দিকে {m} মিনিট নেয়, তাই উত্তর পরে আসবে (এখানে দ্রুত করা)।',earth:'🌍 {m} মিনিট পর পৃথিবীর উত্তর:',offline:'ক্রু মিশনে ইন্টারনেট লাগে।',quick:'দ্রুত বার্তা',
    res:{oxygen:'🫁 অক্সিজেন',water:'💧 পানি',food:'🥕 খাবার',power:'🔋 বিদ্যুৎ'},
    roles:{engineer:'🔧 প্রকৌশলী',botanist:'🌱 উদ্ভিদবিদ',pilot:'🛞 রোভার চালক',scientist:'🔬 বিজ্ঞানী'},
    events:{calm:'শান্ত, রোদেলা এক সল।',dust_storm:'ধুলিঝড় প্যানেল ঢেকে দিল!',cold_night:'জমাট ঠান্ডা রাতে বাড়তি বিদ্যুৎ লাগল।',air_leak:'ছোট্ট একটা বাতাস লিক!',solar_flare:'সৌরশিখা! সবাই লুকাল।',thirsty_plants:'গাছগুলোর বাড়তি পিপাসা।'},
    actions:{fix_panels:'সোলার প্যানেল পরিষ্কার',repair_air:'অক্সিজেন যন্ত্র ঠিক করা',water_garden:'মহাকাশ বাগানে পানি',recycle_water:'পানি পুনর্ব্যবহার',rover_ice:'বরফ খুঁড়তে রোভার',supply_run:'সরবরাহ আনা',forecast:'আবহাওয়ার পূর্বাভাস (খারাপ ঘটনা অর্ধেক)',make_oxygen:'মক্সির মতো অক্সিজেন বানানো',rest:'বিশ্রাম ও শক্তি সঞ্চয়'}},
}[L];
const MESSAGE_IDS=['hello','help','great','oxygen','water','power','food','ready'];
let ws=null,room=null,state=null;const chat=[];

function lobby(){
  app.innerHTML=`${topBar(T.title)}<p class="hub-sub">${T.sub}</p><div class="grid"><div class="card"><button class="btn" id="create">${T.create}</button></div><form class="card" id="joinForm"><label for="room">${T.code}</label><div style="display:flex;gap:8px;margin-top:6px"><input id="room" maxlength="5" autocomplete="off" style="flex:1;min-width:0;text-transform:uppercase;border-radius:12px;border:1px solid var(--line);background:#0f1a2e;padding:10px"><button class="btn">${T.join}</button></div></form></div>`;
  app.querySelector('#create').onclick=async()=>{const r=await api('/api/crew',{method:'POST'});connect(r.room);};
  app.querySelector('#joinForm').onsubmit=e=>{e.preventDefault();connect(app.querySelector('#room').value.trim().toUpperCase());};
}

async function connect(code){
  room=code;
  const base=(await apiBase())||location.origin;
  const url=new URL(`/api/crew/${code}`,base);url.protocol=url.protocol==='https:'?'wss:':'ws:';
  url.searchParams.set('token',me().token);
  ws=new WebSocket(url);
  ws.onmessage=e=>{
    const msg=JSON.parse(e.data);
    if(msg.type==='state'){state=msg.state;draw();}
    else if(msg.type==='say'){chat.push(`🐱 ${msg.from}: ${msg.message[L]}`);draw();}
    else if(msg.type==='earth_sent'){chat.push('📡 '+T.sent.replace('{m}',msg.minutes));draw();}
    else if(msg.type==='earth'){chat.push(`${T.earth.replace('{m}',(msg.minutes*2).toFixed(0))} ${msg.text[L]}`);draw();}
    else if(msg.type==='error'){chat.push('⚠️ '+msg.message);draw();}
  };
  ws.onclose=()=>{if(!state)lobby();};
}
const send=obj=>ws?.readyState===1&&ws.send(JSON.stringify(obj));

function draw(){
  if(!state)return;
  const you=state.you;
  const bars=Object.entries(state.resources).map(([k,v])=>`<div><div style="display:flex;justify-content:space-between"><span>${T.res[k]}</span><b>${v}</b></div><div class="bar"><span style="width:${v}%;background:${v<25?'var(--bad)':v<50?'var(--gold)':'var(--mint)'}"></span></div></div>`).join('');
  const crew=state.crew.map(c=>`<li>${T.roles[c.role]} · ${escapeHTML(c.name)} ${state.phase==='playing'?(c.ready?'✅':'⏳'):''}</li>`).join('');
  let main='';
  if(state.phase==='lobby')main=`<p>${T.share}</p><p style="font-size:44px;font-weight:900;letter-spacing:.15em;margin:0">${room}</p><p class="muted">${T.waiting}</p><button class="btn" id="start">${T.start}</button>`;
  else if(state.phase==='playing'){
    const mine=state.crew.find(c=>c.name===you?.name);
    main=`<h2>${T.sol} ${state.sol} ${T.of} ${state.sols}</h2>${state.last?`<p class="notice">${T.sol} ${state.last.sol}: ${T.events[state.last.event]}</p>`:''}${state.forecast?`<p>🔬 ${T.forecast} <b>${T.events[state.forecast]}</b></p>`:''}
      ${mine?.ready?`<p>${T.ready}</p>`:`<p>${T.pick}</p><div class="grid">${you.actions.map(a=>`<button class="btn ${a==='rest'?'ghost':''}" data-action="${a}">${T.actions[a]}</button>`).join('')}</div>`}`;
  }else main=`<h2>${state.phase==='won'?T.won:T.lost}</h2>${state.last?`<p class="muted">${T.sol} ${state.last.sol}: ${T.events[state.last.event]}</p>`:''}<button class="btn" id="again">${T.again}</button>`;
  app.innerHTML=`${topBar(T.title)}<div class="grid"><section class="card">${you?`<p>${T.you} <b>${T.roles[you.role]}</b></p>`:''}${main}</section><section class="card">${bars}<ul>${crew}</ul></section>
    <section class="card"><strong>${T.quick}</strong><div style="display:flex;flex-wrap:wrap;gap:6px;margin:8px 0">${MESSAGE_IDS.map(id=>`<button class="chip" data-say="${id}">${{hello:'👋',help:'🆘',great:'⭐',oxygen:'🫁',water:'💧',power:'🔋',food:'🥕',ready:'✅'}[id]}</button>`).join('')}<button class="chip" id="call">${T.call}</button></div><div aria-live="polite" style="max-height:180px;overflow:auto">${chat.slice(-8).map(c=>`<p style="margin:4px 0">${escapeHTML(c)}</p>`).join('')}</div></section></div>`;
  app.querySelector('#start')?.addEventListener('click',()=>send({type:'start'}));
  app.querySelector('#again')?.addEventListener('click',()=>{ws?.close();state=null;lobby();});
  app.querySelector('#call').onclick=()=>send({type:'call_earth'});
  app.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>send({type:'choose',action:b.dataset.action}));
  app.querySelectorAll('[data-say]').forEach(b=>b.onclick=()=>send({type:'say',message:b.dataset.say}));
}

(async()=>{
  if(!(await online())){app.innerHTML=`${topBar(T.title)}<p class="notice">${T.offline}</p>`;return;}
  await ensurePlayer();
  const code=new URLSearchParams(location.search).get('room');
  if(code)connect(code.toUpperCase());else lobby();
})();
