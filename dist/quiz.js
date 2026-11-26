// Space quizzes: one per part of the game, 5 questions, no failing.
import {readJSON,writeJSON,lang,pick,escapeHTML,online,api,ensurePlayer,submit,speak,topBar} from './online.js?v=10';
import {mountDhrubo} from './dhrubo-chat.js?v=10';

const STORE='astro-kitty-quiz-v1';
const app=document.getElementById('app');
const L=lang();
const T={
  en:{choose:'Space quizzes',chooseSub:'Pick a part of your adventure and show Dhrubo what you learned!',start:'Start quiz',listen:'🔊 Read it to me',check:'Check my order',next:'Next question →',retry:'Try again',finish:'See my badge',
    right:['Shabbash! That’s right!','Oshadharon! Correct!','Yes! Great thinking!'],wrong:'Close! Let’s learn why:',source:'NASA source',up:'Move up',down:'Move down',
    result:'You got {c} of {t} right!',expert:'Space Expert badge!',good:'Super Explorer badge!',keep:'Brave Learner badge!',again:'Play again',hub:'Mission Hub',best:'Best',
    t:'True',f:'False',saved:'Saved to your class leaderboard ⭐',queued:'Saved. It will be sent when you are online.',practice:'Dhrubo will bring back the tricky ones next time.'},
  bn:{choose:'মহাকাশ কুইজ',chooseSub:'অভিযানের একটা অংশ বেছে নাও আর ধ্রুবকে দেখাও কী শিখেছ!',start:'কুইজ শুরু',listen:'🔊 পড়ে শোনাও',check:'আমার সাজানো দেখো',next:'পরের প্রশ্ন →',retry:'আবার চেষ্টা',finish:'আমার ব্যাজ দেখো',
    right:['শাবাশ! ঠিক উত্তর!','অসাধারণ! সঠিক!','হ্যাঁ! দারুণ ভাবনা!'],wrong:'কাছাকাছি! চলো কারণটা জানি:',source:'নাসার তথ্যসূত্র',up:'ওপরে নাও',down:'নিচে নাও',
    result:'তুমি {t}টার মধ্যে {c}টা ঠিক করেছ!',expert:'মহাকাশ বিশেষজ্ঞ ব্যাজ!',good:'সুপার অভিযাত্রী ব্যাজ!',keep:'সাহসী শিক্ষার্থী ব্যাজ!',again:'আবার খেলো',hub:'মিশন হাব',best:'সেরা',
    t:'সত্য',f:'মিথ্যা',saved:'তোমার ক্লাসের লিডারবোর্ডে জমা হয়েছে ⭐',queued:'জমা আছে। অনলাইনে গেলে পাঠানো হবে।',practice:'কঠিনগুলো ধ্রুব পরের বার আবার আনবে।'},
}[L];
const ICONS={academy:'🌍',flight:'🚀',training:'🐾',base:'🏠',kittycode:'🧩',mars3d:'🪐'};
let bank;
const store=()=>readJSON(STORE,{best:{},mastery:{}});
const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;};

// Offline picker: same idea as the server (backend/astrokitty/quizzes.py): weak skills first.
function pickOffline(part){
  const mastery=store().mastery;
  const pool=bank.questions.filter(q=>q.part===part).map(q=>{
    const known=mastery[q.skill]??.3;const weight=.25+(1-known)*2;
    return{q,key:Math.random()**(1/weight)};
  }).sort((a,b)=>b.key-a.key).slice(0,bank.size).map(x=>x.q);
  return pool.sort((a,b)=>a.level-b.level);
}
const bkt=(p,correct)=>{const s=.1,g=.25;const post=correct?p*(1-s)/(p*(1-s)+(1-p)*g):p*s/(p*s+(1-p)*(1-g));return post+(1-post)*.15;};

function choose(){
  const s=store();
  app.innerHTML=`${topBar(T.choose)}<p class="hub-sub">${T.chooseSub}</p><div class="part-list">${Object.entries(bank.parts).map(([id,p])=>`<a class="card hub-card" href="?part=${id}"><span class="big">${ICONS[id]??'⭐'}</span><strong>${escapeHTML(pick(p.title))}</strong>${s.best[id]?`<span class="stars">${'★'.repeat(s.best[id])}${'☆'.repeat(3-s.best[id])}</span>`:''}</a>`).join('')}</div>`;
}

async function quiz(part){
  const meta=bank.parts[part];
  let questions=null;
  if(await online()){try{await ensurePlayer();questions=(await api(`/api/quizzes/${part}`)).questions;}catch{questions=null;}}
  questions??=pickOffline(part);
  const firstTry={},firstAnswer={};let index=0;
  const intro=pick(meta.after);
  app.innerHTML=`${topBar(pick(meta.title))}<div class="quiz card"><p class="badge">${ICONS[part]??'⭐'}</p><p class="question">${escapeHTML(intro)}</p><p class="muted">${questions.length} ${L==='bn'?'প্রশ্ন':'questions'} · Dhrubo 🤖</p><div class="quiz-actions"><button class="btn" id="go">${T.start}</button></div></div>`;
  speak(intro);
  app.querySelector('#go').onclick=()=>ask();

  function ask(){
    const q=questions[index];
    const dots=questions.map((_,i)=>`<span class="${i<index?'done':i===index?'now':''}"></span>`).join('');
    app.innerHTML=`${topBar(pick(meta.title))}<div class="quiz"><div class="progress-dots" aria-label="Question ${index+1} of ${questions.length}">${dots}</div><p class="question" id="qtext">${escapeHTML(pick(q.q))}</p><div id="area"></div><div id="feedback"></div><div class="quiz-actions"><button class="btn ghost" id="listen">${T.listen}</button></div></div>`;
    app.querySelector('#listen').onclick=()=>speak(pick(q.q));
    speak(pick(q.q));
    const area=app.querySelector('#area');
    if(q.type==='order')orderQuestion(q,area);else choiceQuestion(q,area);
  }

  function choiceQuestion(q,area){
    const opts=q.type==='truefalse'?[{label:T.t,emoji:'👍',value:true},{label:T.f,emoji:'👎',value:false}]
      :shuffle(q.options.map((o,i)=>({label:pick(o),emoji:o.emoji??'',value:i})));
    area.innerHTML=`<div class="answers ${q.type==='truefalse'?'two':''}">${opts.map((o,i)=>`<button class="answer" data-i="${i}"><span class="emo" aria-hidden="true">${o.emoji}</span><span>${escapeHTML(o.label)}</span></button>`).join('')}</div>`;
    area.querySelectorAll('.answer').forEach(btn=>btn.onclick=()=>{
      const o=opts[+btn.dataset.i];const correct=o.value===q.answer;
      if(!(q.id in firstTry)){firstTry[q.id]=correct;firstAnswer[q.id]=o.value;}
      btn.classList.add(correct?'right':'wrong');
      if(correct)area.querySelectorAll('.answer').forEach(b=>b.disabled=true);else btn.disabled=true;
      feedback(q,correct);
    });
  }

  function orderQuestion(q,area){
    let order=shuffle(q.options.map((_,i)=>i));
    if(order.every((v,i)=>v===i))order.reverse();
    const draw=()=>{
      area.innerHTML=`<ol class="order-list">${order.map((idx,pos)=>{const o=q.options[idx];return`<li draggable="true" data-pos="${pos}"><span class="emo" aria-hidden="true">${o.emoji??''}</span><span>${escapeHTML(pick(o))}</span><span class="moves"><button aria-label="${T.up}" data-up="${pos}" ${pos===0?'disabled':''}>▲</button><button aria-label="${T.down}" data-down="${pos}" ${pos===order.length-1?'disabled':''}>▼</button></span></li>`;}).join('')}</ol><div class="quiz-actions"><button class="btn" id="check">${T.check}</button></div>`;
      area.querySelectorAll('[data-up]').forEach(b=>b.onclick=()=>{const p=+b.dataset.up;[order[p-1],order[p]]=[order[p],order[p-1]];draw();});
      area.querySelectorAll('[data-down]').forEach(b=>b.onclick=()=>{const p=+b.dataset.down;[order[p+1],order[p]]=[order[p],order[p+1]];draw();});
      let from=null;
      area.querySelectorAll('li').forEach(li=>{
        li.ondragstart=()=>{from=+li.dataset.pos;li.classList.add('dragging');};
        li.ondragend=()=>li.classList.remove('dragging');
        li.ondragover=e=>e.preventDefault();
        li.ondrop=e=>{e.preventDefault();const to=+li.dataset.pos;if(from===null||from===to)return;const[x]=order.splice(from,1);order.splice(to,0,x);draw();};
      });
      area.querySelector('#check').onclick=()=>{
        const correct=order.every((v,i)=>v===i);
        if(!(q.id in firstTry)){firstTry[q.id]=correct;firstAnswer[q.id]=[...order];}
        area.querySelectorAll('li').forEach((li,i)=>li.style.borderColor=order[i]===i?'var(--mint)':'var(--bad)');
        feedback(q,correct);
        if(correct)area.querySelectorAll('button').forEach(b=>b.disabled=true);
      };
    };
    draw();
  }

  function feedback(q,correct){
    globalThis.astroSound?.play(correct?'success-subtle-ping':'error-soft-thud');
    const box=app.querySelector('#feedback');
    const cheer=T.right[Math.floor(Math.random()*T.right.length)];
    const last=index===questions.length-1;
    box.innerHTML=`<div class="explain ${correct?'good':''}"><strong>${correct?cheer:T.wrong}</strong> ${escapeHTML(pick(q.explain))}<br><a href="${escapeHTML(q.source)}" target="_blank" rel="noopener">${T.source} ↗</a></div><div class="quiz-actions">${correct?`<button class="btn" id="next">${last?T.finish:T.next}</button>`:`<button class="btn ghost" id="retry">${T.retry}</button>`}</div>`;
    speak(`${correct?cheer:T.wrong} ${pick(q.explain)}`);
    if(correct){const n=box.querySelector('#next');n.focus();n.onclick=()=>{index++;if(index<questions.length)ask();else done();};}
    else box.querySelector('#retry').onclick=()=>{box.innerHTML='';if(q.type==='order')orderQuestion(q,app.querySelector('#area'));};
  }

  async function done(){
    // Only the first try counts for the score, but every question ends with the right answer.
    const correct=Object.values(firstTry).filter(Boolean).length,total=questions.length;
    const stars=correct===total?3:correct>=total*.6?2:1;
    const s=store();s.best[part]=Math.max(s.best[part]??0,stars);
    for(const q of questions)s.mastery[q.skill]=bkt(s.mastery[q.skill]??.3,!!firstTry[q.id]);
    writeJSON(STORE,s);
    const badge=stars===3?['🏅',T.expert]:stars===2?['🌟',T.good]:['🚀',T.keep];
    app.innerHTML=`${topBar(pick(meta.title))}<div class="quiz card" style="text-align:center"><div class="badge">${badge[0]}</div><h2>${badge[1]}</h2><p class="question">${T.result.replace('{c}',correct).replace('{t}',total)}</p><p class="stars" style="font-size:40px">${'★'.repeat(stars)}${'☆'.repeat(3-stars)}</p>${correct<total?`<p class="muted">${T.practice}</p>`:''}<p id="saveNote" class="muted"></p><div class="quiz-actions" style="justify-content:center"><a class="btn" href="?part=${part}">${T.again}</a><a class="btn ghost" href="./hub.html">${T.hub}</a></div></div>`;
    globalThis.astroSound?.play(stars===3?'achievement':stars===2?'success-warm-chime':'xp-up');
    for(let i=0;i<stars;i++)globalThis.astroSound?.play('coin-collect',{delay:.5+i*.2,rate:1+i*.12});
    speak(`${badge[1]} ${T.result.replace('{c}',correct).replace('{t}',total)}`);
    // The server re-scores the first-try answers itself.
    try{const r=await submit(`/api/quizzes/${part}/submit`,{answers:firstAnswer});app.querySelector('#saveNote').textContent=r?T.saved:T.queued;}catch{}
  }
}

async function start(){
  bank=await fetch('./data/quizzes.json').then(r=>r.json());
  const part=new URLSearchParams(location.search).get('part');
  if(part&&bank.parts[part])quiz(part);else choose();
  mountDhrubo();
}
start();
