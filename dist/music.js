import {soundOn} from './sound-preference.js?v=10';
import {dhruboNarrator} from './narration.js?v=10';
/** Soft generated background music. No audio files: a slow pad with a few bell notes. */
const CHORDS=[[0,4,7,11],[9,12,16,19],[5,9,12,16],[7,11,14,16]];
const BELLS=[0,2,4,7,9,12,14,16];
const MOODS={story:{root:57,pace:1},earth:{root:60,pace:1.1},space:{root:55,pace:.85},base:{root:53,pace:.9}};
const hz=midi=>440*2**((midi-69)/12);
let started=false;
export function startMusic(mood='story'){
 if(started)return;started=true;
 const Ctx=globalThis.AudioContext||globalThis.webkitAudioContext;if(!Ctx)return;
 const {root,pace}=MOODS[mood]||MOODS.story;
 let ctx=null,master=null,echo=null,bar=0,nextBar=0,nextBell=0,timer=0;
 const narrator=dhruboNarrator();
 function build(){
  ctx=new Ctx();master=ctx.createGain();master.gain.value=0;
  const tone=ctx.createBiquadFilter();tone.type='lowpass';tone.frequency.value=1800;
  echo=ctx.createDelay(1.5);echo.delayTime.value=.46;const feedback=ctx.createGain();feedback.gain.value=.34;
  echo.connect(feedback);feedback.connect(echo);echo.connect(tone);tone.connect(master);master.connect(ctx.destination);
  nextBar=ctx.currentTime+.2;nextBell=ctx.currentTime+2;
 }
 function voice(freq,at,attack,hold,release,level,type,out){
  const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type=type;osc.frequency.value=freq;
  gain.gain.setValueAtTime(0,at);gain.gain.linearRampToValueAtTime(level,at+attack);gain.gain.setValueAtTime(level,at+attack+hold);gain.gain.exponentialRampToValueAtTime(.0001,at+attack+hold+release);
  osc.connect(gain);gain.connect(out);osc.start(at);osc.stop(at+attack+hold+release+.1);
 }
 function schedule(){
  if(!ctx||ctx.state!=='running')return;
  const length=8/pace;
  while(nextBar<ctx.currentTime+1.5){
   const chord=CHORDS[bar++%CHORDS.length];
   chord.forEach((step,i)=>{voice(hz(root-12+step),nextBar,2.4,length-3.2,3.6,.05,'sine',master);if(i<2)voice(hz(root+step)*1.003,nextBar+.3,3,length-4,3.4,.018,'triangle',master);});
   nextBar+=length;
  }
  while(nextBell<ctx.currentTime+1.5){
   const step=BELLS[Math.floor(Math.random()*BELLS.length)];
   voice(hz(root+12+step),nextBell,.02,.04,1.6,.035,'sine',echo);
   nextBell+=(1.4+Math.random()*2.6)/pace;
  }
 }
 function level(){
  if(!ctx)return;
  const on=soundOn()&&!document.hidden,want=on?(narrator.started?.035:.11):0;
  master.gain.setTargetAtTime(want,ctx.currentTime,.5);
  if(on&&ctx.state==='suspended')ctx.resume().catch(()=>{});
  if(!on&&ctx.state==='running'&&master.gain.value<.002)ctx.suspend().catch(()=>{});
 }
 function wake(){
  if(!soundOn())return;
  if(!ctx){try{build();}catch{return;}}
  ctx.resume().catch(()=>{});
  if(!timer)timer=setInterval(()=>{level();schedule();},400);
  level();
 }
 for(const type of ['pointerdown','keydown','touchend'])addEventListener(type,wake,{capture:true,passive:true});
 document.addEventListener('visibilitychange',level);
 addEventListener('pagehide',()=>{try{ctx?.close();}catch{}});
}
