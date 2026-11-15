import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createNarrator} from '../../dist/world/narration.js';
import {solRoom,SOL_ROOMS} from '../../dist/world/sol-rooms.js';
import {EN} from '../../dist/world/strings.js';
import {LINES} from '../../dist/world/story.js';
import {ARRIVAL_CHAPTERS} from '../../dist/world/visual-core.js';
const local={name:'Samantha',lang:'en-US',voiceURI:'same-voice'},other={name:'Ava',lang:'en-US',voiceURI:'other'};
const flush=()=>new Promise(r=>setTimeout(r,0));
function fixture(data={files:[]}){
 const spoken=[],audio=[];let voices=[local];const synth={getVoices:()=>voices,cancel(){},resume(){},pause(){},speak(u){spoken.push(u);u.onstart?.();}};
 class U{constructor(text){this.text=text;}}
 class A{constructor(url){audio.push(url);}play(){return Promise.resolve();}pause(){}}
 const n=createNarrator({synth,Utterance:U,AudioClass:A,storage:{getItem(){},setItem(){}},fetcher:async()=>({ok:true,json:async()=>data})});
 return {n,spoken,audio,changeVoices(){voices=[other,local];}};
}
test('incomplete recordings never cause speaker changes between scenes',async()=>{
 const f=fixture({files:['v_12345678.mp3']});await f.n.ready;
 let first=f.n.play('Hello, Cadet Kitty!');await flush();assert.equal(f.spoken[0].voice,local);f.spoken[0].onend();await first;
 f.changeVoices();let next=f.n.play('Let’s plan our next day.');await flush();assert.equal(f.spoken[1].voice,local);assert.equal(f.spoken[1].rate,.94);assert.equal(f.audio.length,0);f.n.stop();await next;
});
test('caption and speech use the same words, with only Dhrubo pronunciation adjusted',async()=>{
 const f=fixture();await f.n.ready;const p=f.n.play(EN.ui.upgradePowerAir);await flush();assert.equal(f.spoken[0].text,EN.ui.upgradePowerAir);f.n.stop();await p;
 assert.equal(LINES.power[1],EN.ui.upgradePowerAir);assert.equal(LINES.powerRadio[1],EN.ui.upgradePowerRadio);
 for(const [i,ch]of ARRIVAL_CHAPTERS.entries())assert.equal(ch.line,EN.academyFilm[i][1]);
});
test('cancelled narration settles, cannot overlap and ignores old end callbacks',async()=>{
 const f=fixture();await f.n.ready;const first=f.n.play('First.');await flush();const next=f.n.play('Next.');await flush();assert.equal(await first,'cancelled');f.spoken[0].onend();assert.equal(f.n.busy,true);f.spoken[1].onend();assert.equal(await next,'ended');assert.equal(f.n.busy,false);
});
test('pause during loading queues no sound until resume',async()=>{
 const f=fixture();const p=f.n.play('Wait for me.');f.n.pause();await f.n.ready;await flush();assert.equal(f.spoken.length,0);await f.n.resume();assert.equal(f.spoken.length,1);f.n.stop();await p;
});
test('a complete single-voice pack never falls back to a different voice for a missing line',async()=>{
 const lines=Object.fromEntries(Array.from({length:100},(_,i)=>['Line '+i,'v_12345678.mp3']));const f=fixture({complete:true,voiceId:'one-voice',files:['v_12345678.mp3'],lines});await f.n.ready;
 let unavailable=false;assert.equal(await f.n.play('Not recorded.',{onunavailable:()=>unavailable=true}),'unavailable');assert.equal(unavailable,true);assert.equal(f.spoken.length,0);
});
test('five sols have five locations without mutating the save or outdoor events',()=>{
 const rooms=[];for(let sol=1;sol<=5;sol++){const state={sol};const before=JSON.stringify(state);rooms.push(solRoom(state,'brief','power'));assert.equal(JSON.stringify(state),before);assert.equal(solRoom(state,'decision','warning'),null);assert.equal(solRoom(state,'','walk'),null);assert.equal(solRoom(state,'film','monitor'),null);}
 assert.deepEqual(rooms,SOL_ROOMS);assert.equal(new Set(rooms).size,5);
});
test('source button uses the Real badge; all main caption portraits share Dhrubo',async()=>{
 const launch=await readFile(new URL('../../dist/world/launch.js',import.meta.url),'utf8');assert.ok(launch.includes("truthBadge('real')"));assert.ok(!launch.includes('>ⓘ</button>'));
 for(const file of ['app.js','launch.js','outpost.js','academy.js','flight-adventure.js']){const source=await readFile(new URL('../../dist/world/'+file,import.meta.url),'utf8');assert.ok(source.includes('robotPortrait'),file);}
});
test('departure dialogue frames liftoff as a preview before choices',()=>{assert.match(EN.films.departure[0][1],/simulator/);assert.match(EN.films.departure[2][1],/preview.*plan/);assert.match(EN.films.departure[3][1],/launch day, push, path, and landing gear/);});

test('combined praise and next step can reuse verified recordings without a speaker change',async()=>{
 const {clipName}=await import('../../dist/world/voice-clips.js');const a='Good job!',b='Connect the radio.',files=[clipName(a),clipName(b)];const lines=Object.fromEntries(Array.from({length:100},(_,i)=>['Line '+i,files[0]]));lines[a]=files[0];lines[b]=files[1];let clips=[];class A{constructor(url){clips.push(this);}play(){queueMicrotask(()=>this.onended?.());return Promise.resolve();}pause(){}}
 const n=createNarrator({AudioClass:A,synth:null,storage:null,fetcher:async()=>({ok:true,json:async()=>({complete:true,voiceId:'one',files,lines})})});await n.ready;assert.equal(await n.play(a+' '+b),'ended');assert.equal(clips.length,2);assert.equal(n.mode,'recorded');
});
