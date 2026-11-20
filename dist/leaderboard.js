// Leaderboards: this device (always works), my class and the global Daily Challenge.
import {readJSON,lang,escapeHTML,online,ensurePlayer,api,topBar} from './online.js?v=10';

const app=document.getElementById('app');
const T={
  en:{title:'Leaderboard',device:'🏠 My device',klass:'🏫 My class',daily:'☀️ Daily Challenge',kitty:'Kitty',stars:'Stars',cmds:'Commands',rank:'#',
    empty:'No scores yet. Be the first!',offline:'Connect to the internet to see class and daily leaderboards.',noClass:'Join a class in the Mission Hub to see your class board.',
    levels:'Kitty Code levels',quizzes:'Quizzes',total:'Total stars',play:'Play today’s challenge'},
  bn:{title:'লিডারবোর্ড',device:'🏠 আমার ডিভাইস',klass:'🏫 আমার ক্লাস',daily:'☀️ দৈনিক চ্যালেঞ্জ',kitty:'বিড়াল',stars:'তারা',cmds:'কমান্ড',rank:'#',
    empty:'এখনো কোনো স্কোর নেই। তুমিই প্রথম হও!',offline:'ক্লাস আর দৈনিক লিডারবোর্ড দেখতে ইন্টারনেটে যুক্ত হও।',noClass:'ক্লাসের বোর্ড দেখতে মিশন হাবে ক্লাসে যোগ দাও।',
    levels:'কিটি কোড লেভেল',quizzes:'কুইজ',total:'মোট তারা',play:'আজকের চ্যালেঞ্জ খেলো'},
}[lang()];

let player=null;
const table=(rows,cols)=>rows.length?`<table class="board"><thead><tr>${cols.map(c=>`<th>${c[0]}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr class="${player&&r.kitty_name===player.kitty_name?'me':''}">${cols.map(c=>`<td>${c[1](r)}</td>`).join('')}</tr>`).join('')}</tbody></table>`:`<p class="muted">${T.empty}</p>`;

async function show(tab){
  app.querySelectorAll('.tabs button').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.tab===tab)));
  const box=app.querySelector('#board');
  if(tab==='device'){
    const code=readJSON('astro-kitty-code-v1',{levels:{}}),quiz=readJSON('astro-kitty-quiz-v1',{best:{}});
    const lv=Object.values(code.levels).reduce((n,l)=>n+(l.stars??0),0),qz=Object.values(quiz.best).reduce((n,s)=>n+s,0);
    box.innerHTML=`<div class="grid"><div class="card"><span class="muted">${T.levels}</span><h2 class="stars">★ ${lv}</h2></div><div class="card"><span class="muted">${T.quizzes}</span><h2 class="stars">★ ${qz}</h2></div><div class="card"><span class="muted">${T.total}</span><h2 class="stars">★ ${lv+qz}</h2></div></div>`;
    return;
  }
  if(!player){box.innerHTML=`<p class="notice">${T.offline}</p>`;return;}
  if(tab==='class'){
    if(!player.class){box.innerHTML=`<p class="notice">${T.noClass} <a href="./hub.html">→</a></p>`;return;}
    const data=await api(`/api/leaderboard/class/${player.class.code}`,{auth:false});
    box.innerHTML=`<h2>${escapeHTML(data.class)}</h2>${table(data.rows,[[T.rank,r=>r.rank],[T.kitty,r=>'🐱 '+escapeHTML(r.kitty_name)],[T.stars,r=>`<span class="stars">★ ${r.stars}</span>`]])}`;
  }else{
    const data=await api('/api/leaderboard/daily',{auth:false});
    box.innerHTML=`<p><a class="btn" href="./kitty-code.html#daily">${T.play}</a></p>${table(data.rows,[[T.rank,r=>r.rank],[T.kitty,r=>'🐱 '+escapeHTML(r.kitty_name)],[T.stars,r=>`<span class="stars">${'★'.repeat(r.stars)}</span>`],[T.cmds,r=>r.commands]])}`;
  }
}

async function start(){
  app.innerHTML=`${topBar(T.title)}<div class="tabs" role="tablist"><button role="tab" data-tab="device">${T.device}</button><button role="tab" data-tab="class">${T.klass}</button><button role="tab" data-tab="daily">${T.daily}</button></div><section id="board" class="card"></section>`;
  app.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>show(b.dataset.tab).catch(()=>{}));
  if(await online())player=await ensurePlayer().catch(()=>null);
  show(player?.class?'class':player?'daily':'device').catch(()=>show('device'));
}
start();
