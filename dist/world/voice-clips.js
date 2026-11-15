export function normalizeLine(line){return String(line??'').replace(/\s+/g,' ').trim();}
export function clipName(line){
 const text=normalizeLine(line);let h=0x811c9dc5;
 for(let i=0;i<text.length;i++){h^=text.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0;}
 return 'v_'+h.toString(16).padStart(8,'0')+'.mp3';
}
export function splitSentences(line){return normalizeLine(line).split(/(?<=[.!?…][)"”’']*)\s+/).filter(Boolean);}
export function planClips(line,has){
 const whole=normalizeLine(line);if(!whole)return [];if(has(clipName(whole)))return [clipName(whole)];
 const parts=splitSentences(whole),n=parts.length,best=Array(n+1).fill(null);best[0]=[];
 for(let i=0;i<n;i++){if(!best[i])continue;for(let j=i+1;j<=n;j++){const name=clipName(parts.slice(i,j).join(' '));if(has(name)&&(!best[j]||best[j].length>best[i].length+1))best[j]=[...best[i],name];}}
 return best[n];
}
export function createVoiceClips({AudioClass=globalThis.Audio,fetcher=globalThis.fetch,base=new URL('./audio/voice/',import.meta.url)}={}){
 let files=null,loading=null,current=null,ticket=0;const heard=new Set();
 function load(){
  loading??=(async()=>{try{const r=await fetcher(new URL('manifest.json',base));const d=r.ok?await r.json():{};files=new Set(Array.isArray(d.files)?d.files:[]);}catch{files=new Set();}})();
  return loading;
 }
 function stop(){ticket++;if(current){try{current.pause();}catch{}current=null;}}
 async function play(line,{onstart=()=>{},onend=()=>{}}={}){
  stop();const mine=ticket;heard.add(normalizeLine(line));await load();if(mine!==ticket)return true;
  const queue=AudioClass&&files.size?planClips(line,name=>files.has(name)):null;if(!queue?.length)return false;
  for(let i=0;i<queue.length;i++){
   if(mine!==ticket)return true;
   const audio=new AudioClass(new URL(queue[i],base).href);current=audio;
   const done=new Promise(resolve=>{audio.onended=()=>resolve(true);audio.onerror=()=>resolve(false);});
   try{await audio.play();}catch{if(i===0){current=null;return false;}break;}
   if(i===0)onstart();
   if(!await done)break;
  }
  if(mine===ticket){current=null;onend();}
  return true;
 }
 return {play,stop,load,heard};
}
