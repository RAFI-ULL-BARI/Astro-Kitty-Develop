// Mission Hub: one place for all the new adventures.
import {lang,escapeHTML,online,ensurePlayer,joinClass,api,topBar,flushQueue} from './online.js?v=10';
import {mountDhrubo} from './dhrubo-chat.js?v=10';

const app=document.getElementById('app');
const T={
  en:{title:'Mission Hub',sub:'New missions for junior astronauts. Pick one!',you:'Your astronaut name',offline:'You are playing offline. Everything still works on this device, and leaderboards come back when you are online.',
    classTitle:'Join your class',classHelp:'Ask your teacher for the 6-letter class code.',join:'Join',joined:'You are in class',diary:'📔 Download My Mars Diary (PDF)',privacy:'We never ask for your real name. Your kitty name keeps you safe!',
    cards:[['world/colony.html','🏗️','Mars Colony 3D','Run a big Mars base inside and out, fix surprises, fly to real places on Mars.'],['kitty-code.html','🧩','Kitty Code','Drive a rover with simple code words. 70 levels, remixes and your own levels!'],['quiz.html','❓','Space quizzes','Show Dhrubo what you learned.'],['leaderboard.html','🏆','Leaderboard','Your class and the Daily Challenge.'],['sky.html','🔭','Sky tonight','Find Mars and wave at the space station.'],['crew.html','👩‍🚀','Crew mission','Run a Mars base with your classmates.'],['./','🐱','Main adventure','Back to Astro Kitty’s story.']]},
  bn:{title:'মিশন হাব',sub:'জুনিয়র নভোচারীদের জন্য নতুন মিশন। একটা বেছে নাও!',you:'তোমার নভোচারী নাম',offline:'তুমি অফলাইনে খেলছ। এই ডিভাইসে সব চলবে, অনলাইনে গেলে লিডারবোর্ড ফিরে আসবে।',
    classTitle:'তোমার ক্লাসে যোগ দাও',classHelp:'শিক্ষকের কাছ থেকে ৬ অক্ষরের ক্লাস কোড নাও।',join:'যোগ দাও',joined:'তুমি এই ক্লাসে আছ',diary:'📔 আমার মঙ্গল ডায়েরি নামাও (PDF)',privacy:'আমরা কখনো তোমার আসল নাম চাই না। বিড়াল নাম তোমাকে নিরাপদ রাখে!',
    cards:[['world/colony.html','🏗️','মঙ্গল কলোনি থ্রিডি','ভেতরে-বাইরে বিশাল মঙ্গল ঘাঁটি চালাও, চমক সামলাও, মঙ্গলের আসল জায়গায় উড়ে যাও।'],['kitty-code.html','🧩','কিটি কোড','সহজ কোড শব্দে রোভার চালাও। ৭০টা লেভেল, রিমিক্স আর নিজের লেভেল!'],['quiz.html','❓','মহাকাশ কুইজ','ধ্রুবকে দেখাও কী শিখেছ।'],['leaderboard.html','🏆','লিডারবোর্ড','তোমার ক্লাস আর দৈনিক চ্যালেঞ্জ।'],['sky.html','🔭','আজ রাতের আকাশ','মঙ্গল খোঁজো, মহাকাশ স্টেশনকে হাত নাড়াও।'],['crew.html','👩‍🚀','ক্রু মিশন','সহপাঠীদের সাথে মঙ্গল ঘাঁটি চালাও।'],['./','🐱','মূল অভিযান','অ্যাস্ট্রো কিটির গল্পে ফিরে যাও।']]},
}[lang()];

async function render(){
  const health=await online();
  const player=health?await ensurePlayer().catch(()=>null):null;
  app.innerHTML=`${topBar(T.title)}<p class="hub-sub">${T.sub}</p>
  ${player?`<div class="card" style="margin-bottom:16px"><span class="muted">${T.you}</span><h2 style="margin:4px 0">🐱 ${escapeHTML(player.kitty_name)}</h2><p class="muted" style="margin:0">${T.privacy}</p></div>`:`<p class="notice">${T.offline}</p>`}
  <div class="grid stagger">${T.cards.map(([href,icon,title,text])=>`<a class="card hub-card" href="${href}"><span class="big" aria-hidden="true">${icon}</span><strong>${title}</strong><span class="muted">${text}</span></a>`).join('')}</div>
  ${player?`<div class="grid" style="margin-top:16px"><form class="card" id="classForm"><strong>${T.classTitle}</strong><p class="muted">${player.class?`${T.joined}: <b>${escapeHTML(player.class.name)}</b> (${escapeHTML(player.class.code)})`:T.classHelp}</p><div style="display:flex;gap:8px"><input id="classCode" maxlength="6" autocomplete="off" aria-label="Class code" style="flex:1;min-width:0;text-transform:uppercase;border-radius:12px;border:1px solid var(--line);background:#0f1a2e;padding:10px"><button class="btn">${T.join}</button></div><p id="classMsg" class="muted"></p></form>
  <div class="card"><button class="btn mint" id="diary" style="width:100%">${T.diary}</button></div></div>`:''}`;
  const form=app.querySelector('#classForm');
  if(form)form.onsubmit=async e=>{
    e.preventDefault();const msg=app.querySelector('#classMsg');
    try{await joinClass(app.querySelector('#classCode').value.trim());render();}catch(err){msg.textContent=err.message;}
  };
  const diary=app.querySelector('#diary');
  if(diary)diary.onclick=async()=>{
    const r=await api('/api/players/me/diary.pdf',{raw:true});
    if(!r.ok)return;
    const url=URL.createObjectURL(await r.blob());
    const a=document.createElement('a');a.href=url;a.download='my-mars-diary.pdf';a.click();
    setTimeout(()=>URL.revokeObjectURL(url),5000);
  };
  if(player)flushQueue();
}
render();
mountDhrubo();
