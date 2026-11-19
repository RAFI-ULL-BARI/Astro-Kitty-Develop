// Teacher dashboard: create a class code and see what the class is learning.
// Kids appear only by their generated kitty names.
import {readJSON,writeJSON,lang,escapeHTML,online,api,apiBase} from './online.js?v=10';

const STORE='astro-kitty-teacher-v1';
const T={
  en:{title:'Class dashboard',intro:'Create a class code, share it with your students, and see which topics need more practice. No student names or emails are collected.',name:'Class name',create:'Create class',code:'Class code',key:'Teacher key (keep it secret: it opens this dashboard)',
    players:'students',skills:'How well the class knows each topic',hard:'Trickiest questions',right:'right',worlds:'Kitty Code levels finished, by world',board:'Students',stars:'stars',practice:'practising',refresh:'Refresh',offline:'The class dashboard needs the online server. See backend/README.md to run it.',none:'No answers yet. Share the code with your class!',
    open:'Open',remove:'Forget'},
  bn:{title:'ক্লাস ড্যাশবোর্ড',intro:'একটা ক্লাস কোড বানাও, শিক্ষার্থীদের দাও, আর দেখো কোন বিষয়ে আরও অনুশীলন লাগবে। কোনো শিক্ষার্থীর নাম বা ইমেইল নেওয়া হয় না।',name:'ক্লাসের নাম',create:'ক্লাস বানাও',code:'ক্লাস কোড',key:'শিক্ষক চাবি (গোপন রাখুন: এটা দিয়ে ড্যাশবোর্ড খোলে)',
    players:'শিক্ষার্থী',skills:'প্রতিটি বিষয় ক্লাস কতটা জানে',hard:'সবচেয়ে কঠিন প্রশ্ন',right:'ঠিক',worlds:'জগৎ অনুযায়ী শেষ করা কিটি কোড লেভেল',board:'শিক্ষার্থী',stars:'তারা',practice:'অনুশীলন করছে',refresh:'আবার দেখুন',offline:'ক্লাস ড্যাশবোর্ডের জন্য অনলাইন সার্ভার লাগে। চালাতে backend/README.md দেখুন।',none:'এখনো কোনো উত্তর নেই। ক্লাসকে কোডটা দিন!',
    open:'খুলুন',remove:'মুছুন'},
}[lang()];

export async function mountTeacherDashboard(page){
  const section=document.createElement('section');
  section.id='classDashboard';
  page.prepend(section);
  if(!(await online())){section.innerHTML=`<h2>${T.title}</h2><p>${T.offline}</p>`;return;}
  const classes=()=>readJSON(STORE,[]);
  const list=()=>{
    section.innerHTML=`<h2>${T.title}</h2><p>${T.intro}</p><form id="newClass" style="display:flex;gap:8px;flex-wrap:wrap"><input id="className" maxlength="60" placeholder="${T.name}" aria-label="${T.name}" style="padding:10px;border-radius:10px"><button class="chip-button">${T.create}</button></form>
      <ul>${classes().map((c,i)=>`<li><b>${escapeHTML(c.name)}</b> · ${T.code}: <b style="letter-spacing:.1em">${escapeHTML(c.code)}</b> <button class="chip-button" data-open="${i}">${T.open}</button> <button class="text-button" data-remove="${i}">${T.remove}</button></li>`).join('')}</ul><div id="insights"></div>`;
    section.querySelector('#newClass').onsubmit=async e=>{
      e.preventDefault();
      const r=await api('/api/classes',{method:'POST',auth:false,body:{name:section.querySelector('#className').value||'My class'}});
      writeJSON(STORE,[...classes(),{code:r.code,name:r.name,key:r.teacher_key}]);list();show(classes().length-1);
    };
    section.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>show(+b.dataset.open));
    section.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{const c=classes();c.splice(+b.dataset.remove,1);writeJSON(STORE,c);list();});
  };
  async function show(i){
    const c=classes()[i];const box=section.querySelector('#insights');
    const base=await apiBase();
    const r=await fetch(`${base}/api/classes/${c.code}/insights`,{headers:{'X-Teacher-Key':c.key}});
    if(!r.ok){box.textContent=r.status===403?'Teacher key not accepted.':'Could not load.';return;}
    const d=await r.json();
    const bar=v=>`<span style="display:inline-block;width:160px;height:10px;border-radius:9px;background:#ffffff22;vertical-align:middle"><span style="display:block;width:${Math.round(v*100)}%;height:100%;border-radius:9px;background:${v<.5?'#ff9a8f':'#a9e5d1'}"></span></span>`;
    box.innerHTML=`<h3>${escapeHTML(d.class.name)} · ${d.class.players} ${T.players}</h3><p>${T.key}: <code>${escapeHTML(c.key)}</code></p>
      ${Object.keys(d.skills).length?`<h4>${T.skills}</h4><ul>${Object.entries(d.skills).map(([s,v])=>`<li>${bar(v)} ${escapeHTML(s)} (${Math.round(v*100)}%)</li>`).join('')}</ul>`:`<p>${T.none}</p>`}
      ${d.hardest_questions.length?`<h4>${T.hard}</h4><ol>${d.hardest_questions.map(q=>`<li>${escapeHTML(q.question)} · ${q.percent_right}% ${T.right}</li>`).join('')}</ol>`:''}
      ${Object.keys(d.levels_finished_by_world).length?`<h4>${T.worlds}</h4><p>${Object.entries(d.levels_finished_by_world).map(([w,n])=>`World ${w}: ${n}`).join(' · ')}</p>`:''}
      <h4>${T.board}</h4><ol>${d.players.map(p=>`<li>🐱 ${escapeHTML(p.kitty_name)} · ★ ${p.stars}${p.practice.length?` · ${T.practice}: ${p.practice.map(escapeHTML).join(', ')}`:''}</li>`).join('')}</ol>
      <button class="chip-button" id="refresh">${T.refresh}</button>`;
    box.querySelector('#refresh').onclick=()=>show(i);
  }
  list();
}
