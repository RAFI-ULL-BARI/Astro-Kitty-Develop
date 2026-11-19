// "Ask Dhrubo": a floating chat with the robot buddy. Kids can type or hold the mic.
// Online it uses the backend (Claude); offline it answers from the NASA quiz facts.
import {api,online,ensurePlayer,lang,escapeHTML,speak} from './online.js?v=10';

const T={
  en:{title:'Ask Dhrubo',hello:"Hi! I'm Dhrubo 🤖 Ask me anything about space, Mars or Kitty Code!",placeholder:'Type your question…',send:'Send',mic:'Talk to Dhrubo',thinking:'Dhrubo is thinking…',open:'Ask Dhrubo a question',close:'Close',
    chips:['Why is Mars red?','How far is Mars?','What does REPEAT do?','Can cats go to space?'],private:'Remember: never share your real name, school or address.'},
  bn:{title:'ধ্রুবকে জিজ্ঞেস করো',hello:'হাই! আমি ধ্রুব 🤖 মহাকাশ, মঙ্গল বা কিটি কোড নিয়ে যা খুশি জিজ্ঞেস করো!',placeholder:'তোমার প্রশ্ন লেখো…',send:'পাঠাও',mic:'ধ্রুবর সাথে কথা বলো',thinking:'ধ্রুব ভাবছে…',open:'ধ্রুবকে প্রশ্ন করো',close:'বন্ধ',
    chips:['মঙ্গল লাল কেন?','মঙ্গল কত দূরে?','পুনরাবৃত্তি কী করে?','বিড়াল কি মহাকাশে যেতে পারে?'],private:'মনে রেখো: আসল নাম, স্কুল বা ঠিকানা কখনো বলবে না।'},
};
let facts=null;
async function offlineAnswer(question){
  facts??=await fetch('./data/quizzes.json').then(r=>r.json()).catch(()=>({questions:[]}));
  const L=/[ঀ-৿]/.test(question)?'bn':'en';
  const words=new Set((question.toLowerCase().match(/[a-z]{3,}|[ঀ-৿]{2,}/g)??[]));
  let best=null,score=0;
  for(const q of facts.questions){const text=`${q.q[L]} ${q.explain[L]}`.toLowerCase();let s=0;for(const w of words)if(text.includes(w))s++;if(s>score){best=q;score=s;}}
  return best&&score>=2?best.explain[L]:(L==='bn'?'দারুণ প্রশ্ন! এখন আমি অফলাইনে আছি। মঙ্গল, রকেট বা রোভার নিয়ে জিজ্ঞেস করো!':"Great question! I'm offline right now. Try asking about Mars, rockets or rovers!");
}

export function mountDhrubo(){
  if(document.querySelector('.dhrubo-fab'))return;
  const t=T[lang()];
  const history=[];
  const fab=document.createElement('button');
  fab.className='dhrubo-fab';fab.type='button';fab.setAttribute('aria-label',t.open);fab.setAttribute('aria-expanded','false');fab.textContent='🤖';
  const panel=document.createElement('section');
  panel.className='dhrubo-panel';panel.hidden=true;panel.setAttribute('aria-label',t.title);
  panel.innerHTML=`<header><span aria-hidden="true">🤖</span>${t.title}<button type="button" aria-label="${t.close}">×</button></header><div class="dhrubo-log" aria-live="polite"><p class="from-bot">${t.hello}</p><p class="from-bot muted" style="font-size:14px">${t.private}</p></div><div class="dhrubo-chips">${t.chips.map(c=>`<button type="button">${escapeHTML(c)}</button>`).join('')}</div><form class="dhrubo-form"><input maxlength="300" placeholder="${t.placeholder}" aria-label="${t.placeholder}"><button type="button" class="mic" aria-label="${t.mic}">🎤</button><button type="submit" aria-label="${t.send}">➤</button></form>`;
  document.body.append(fab,panel);
  const log=panel.querySelector('.dhrubo-log'),form=panel.querySelector('form'),input=form.querySelector('input'),mic=form.querySelector('.mic');
  const toggle=open=>{panel.hidden=!open;fab.setAttribute('aria-expanded',String(open));if(open)input.focus();};
  fab.onclick=()=>toggle(panel.hidden);
  panel.querySelector('header button').onclick=()=>toggle(false);
  const add=(text,who)=>{const p=document.createElement('p');p.className=who==='kid'?'from-kid':'from-bot';p.textContent=text;log.append(p);log.scrollTop=log.scrollHeight;return p;};
  async function ask(question){
    question=question.trim();if(!question)return;
    add(question,'kid');input.value='';
    const waiting=add(t.thinking,'bot');
    let answer;
    try{
      if(await online()){await ensurePlayer();const r=await api('/api/dhrubo/ask',{method:'POST',body:{question,history}});answer=r.answer;}
      else answer=await offlineAnswer(question);
    }catch{answer=await offlineAnswer(question);}
    waiting.textContent=answer;
    history.push({role:'user',text:question},{role:'assistant',text:answer});
    speak(answer);
  }
  form.onsubmit=e=>{e.preventDefault();ask(input.value);};
  panel.querySelectorAll('.dhrubo-chips button').forEach(b=>b.onclick=()=>ask(b.textContent));
  const Recognition=window.SpeechRecognition??window.webkitSpeechRecognition;
  if(!Recognition){mic.hidden=true;return;}
  let rec=null;
  mic.onclick=()=>{
    if(rec){rec.stop();return;}
    rec=new Recognition();rec.lang=lang()==='bn'?'bn-BD':'en-US';rec.interimResults=false;
    mic.classList.add('listening');
    rec.onresult=e=>ask(e.results[0][0].transcript);
    rec.onend=()=>{mic.classList.remove('listening');rec=null;};
    rec.onerror=()=>{mic.classList.remove('listening');rec=null;};
    rec.start();
  };
}
