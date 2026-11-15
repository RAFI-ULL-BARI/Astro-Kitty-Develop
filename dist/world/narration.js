import {readyVoices,pickVoice} from './compat.js?v=10';
import {clipName,normalizeLine,planClips} from './voice-clips.js?v=10';
/** A voice is chosen once per page. A partial pack never switches the speaker. */
export function createNarrator({synth=globalThis.speechSynthesis,Utterance=globalThis.SpeechSynthesisUtterance,AudioClass=globalThis.Audio,fetcher=globalThis.fetch,storage=(()=>{try{return globalThis.localStorage;}catch{return null;}})()}={}){
 let recorded=false,generation=0,current=null,resolveCurrent=null,callbacks={},line='',paused=false,busy=false,started=false,chosen=null,mode='device',pack=null,clips=new Set();
 const heard=new Set();
 const ready=(async()=>{
  let timer;try{const data=await Promise.race([(async()=>{const r=await fetcher(new URL('../audio/voice/manifest.json',import.meta.url));return r.ok?await r.json():null;})(),new Promise(resolve=>{timer=setTimeout(()=>resolve(null),6000);})]);
   if(data?.complete===true&&data.voiceId&&data.lines&&Object.keys(data.lines).length>=100){pack=data;mode='recorded';return;}
   if(Array.isArray(data?.files))clips=new Set(data.files.filter(file=>/^v_[0-9a-f]{8}\.mp3$/.test(file)));
  }catch{}finally{clearTimeout(timer);}
  const voices=await readyVoices(synth);let saved;try{saved=storage?.getItem('astro-kitty-narrator-voice');}catch{}
  chosen=voices.find(v=>v.voiceURI===saved)||pickVoice(voices);try{if(chosen)storage?.setItem('astro-kitty-narrator-voice',chosen.voiceURI);}catch{}
 })();
 function finish(reason='ended'){busy=false;started=false;callbacks.onend?.(reason);resolveCurrent?.(reason);resolveCurrent=null;}
 function stop(){generation++;current?.pause?.();current=null;synth?.cancel();finish('cancelled');paused=false;}
 async function play(text,options={}){
  stop();line=normalizeLine(text);heard.add(line);callbacks=options;const ticket=generation;busy=true;await ready;
  if(ticket!==generation)return 'cancelled';
  return new Promise(resolve=>{
   resolveCurrent=resolve;
   const begin=()=>{if(ticket!==generation)return;started=true;callbacks.onstart?.();};
   const end=()=>{if(ticket===generation)finish();};
   const fail=error=>{if(ticket!==generation)return;if(error?.name==='NotAllowedError'||error?.error==='not-allowed'){paused=true;callbacks.onblocked?.();}else callbacks.onunavailable?.();finish('unavailable');};
   if(mode==='recorded'){
    const verified=new Set(Object.values(pack.lines).filter(file=>/^v_[0-9a-f]{8}\.mp3$/.test(file)&&pack.files.includes(file)));
    const queue=pack.lines[line]&&verified.has(pack.lines[line])?[pack.lines[line]]:planClips(line,file=>verified.has(file));
    if(!queue?.length){fail();return;}
    let part=0;
    const next=()=>{
     if(ticket!==generation)return;
     if(part===queue.length){end();return;}
     current=new AudioClass(new URL('../audio/voice/'+queue[part++],import.meta.url).href);current.onended=next;current.onerror=fail;
     if(!paused)current.play().then(begin).catch(fail);
    };next();
   }else if(AudioClass&&clips.size&&planClips(line,file=>clips.has(file))?.length){
    const queue=planClips(line,file=>clips.has(file));let part=0;
    const device=()=>{if(ticket!==generation)return;if(!synth||!Utterance){fail();return;}current=new Utterance(line.replace(/\bDhrubo\b/g,'Dhroobo'));current.voice=chosen;current.lang=chosen?.lang||'en-US';current.rate=.94;current.pitch=1.03;current.volume=1;current.onstart=begin;current.onend=end;current.onerror=fail;if(!paused){synth.resume();synth.speak(current);}};
    const next=()=>{
     if(ticket!==generation)return;
     if(part===queue.length){end();return;}
     const first=part===0;current=new AudioClass(new URL('../audio/voice/'+queue[part++],import.meta.url).href);recorded=true;current.onended=next;current.onerror=()=>{recorded=false;if(first)device();else end();};
     if(!paused)current.play().then(()=>{if(first)begin();}).catch(error=>{recorded=false;if(error?.name==='NotAllowedError')fail(error);else if(first)device();else end();});
    };next();
   }else if(synth&&Utterance){
    recorded=false;current=new Utterance(line.replace(/\bDhrubo\b/g,'Dhroobo'));current.voice=chosen;current.lang=chosen?.lang||'en-US';current.rate=.94;current.pitch=1.03;current.volume=1;
    current.onstart=begin;current.onend=end;current.onerror=fail;
    if(!paused){synth.resume();synth.speak(current);}
   }else fail();
  });
 }
 function pause(){paused=true;if(mode==='recorded'||recorded)current?.pause?.();else synth?.pause();}
 async function resume(){if(!paused)return;paused=false;
  if(!busy){if(line)void play(line,callbacks);return;}
  if(mode==='recorded'||recorded){try{await current?.play();started=true;callbacks.onstart?.();}catch{callbacks.onblocked?.();}}
  else if(current&&!started){synth?.resume();synth?.speak(current);}else synth?.resume();
 }
 return {play,stop,pause,resume,ready,heard,get busy(){return busy;},get started(){return started;},get mode(){return mode;},get voice(){return chosen;}};
}
let shared;
export function dhruboNarrator(){return shared??=createNarrator();}
