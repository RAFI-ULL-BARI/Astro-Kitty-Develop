import test from 'node:test';
import assert from 'node:assert/strict';
import {damp,turnToward,easeInOut,frameDelta,prepareCanvas,ARRIVAL_CHAPTERS,ARRIVAL_DURATION,arrivalChapter} from '../dist/visual-core.js';
import {MovieNarrator} from '../dist/movie-narrator.js';
import {readFile,stat} from 'node:fs/promises';
test('motion smoothing gives the same result at 30, 60 and 120 fps',()=>{const values=[30,60,120].map(hz=>{let x=0;for(let i=0;i<hz*2;i++)x=damp(x,100,5,1/hz);return x;});for(const x of values)assert.ok(Math.abs(x-values[0])<1e-8);});
test('rover orientation crosses the angle boundary along the shortest turn',()=>{const a=179*Math.PI/180,b=-179*Math.PI/180,r=turnToward(a,b,9,1/60);assert.ok(r>a);assert.ok(r-a<.02);assert.equal(frameDelta(100,10100),.05);assert.equal(frameDelta(0,100),0);assert.equal(easeInOut(-1),0);assert.equal(easeInOut(2),1);});
test('every movie chapter has bundled playable PCM narration shorter than its scene',async()=>{assert.equal(ARRIVAL_DURATION,24);for(const [i,ch]of ARRIVAL_CHAPTERS.entries()){assert.equal(arrivalChapter(ch.start),i);const file=new URL(`../dist/audio/arrival/${ch.audio}.wav`,import.meta.url),bytes=await readFile(file);assert.equal(bytes.toString('ascii',0,4),'RIFF');assert.equal(bytes.toString('ascii',8,12),'WAVE');const rate=bytes.readUInt32LE(28);const seconds=(await stat(file)).size/rate;assert.ok(seconds<ch.end-ch.start,`${ch.audio} needs more screen time`);if(i)assert.equal(ch.start,ARRIVAL_CHAPTERS[i-1].end);}assert.equal(arrivalChapter(100),4);});
test('render resolution is sharp but bounded on very large displays',()=>{const ctx={setTransform(){},clearRect(){}};const canvas={clientWidth:10000,clientHeight:6000,width:0,height:0,getContext(){return ctx;}};prepareCanvas(canvas,1100,540);assert.ok(canvas.width*canvas.height<=4_210_000);assert.ok(Math.abs(canvas.width/canvas.height-1100/540)<.01);const small={...canvas,clientWidth:390,width:0,height:0};prepareCanvas(small,1100,540);assert.ok(small.width>=390);});
test('movie narration uses the caption and shared speaker; pause, resume and mute stop stale lines',async()=>{
 const calls=[];let handlers;const voice={play(line,options){calls.push(line);handlers=options;return Promise.resolve();},stop(){calls.push('stop');},pause(){calls.push('pause');},resume(){calls.push('resume');}};
 let blocked=0,active=false;const n=new MovieNarrator(()=>blocked++,value=>active=value,voice);
 await n.play(0);assert.equal(calls.at(-1),ARRIVAL_CHAPTERS[0].line);handlers.onstart();assert.equal(active,true);handlers.onblocked();assert.equal(blocked,1);
 n.pause();assert.equal(calls.at(-1),'pause');await n.resume();assert.equal(calls.at(-1),'resume');n.setEnabled(false);const count=calls.length;await n.play(1);assert.equal(calls.length,count+1);assert.equal(active,false);
 n.setEnabled(true);await n.play(1);assert.equal(calls.at(-1),ARRIVAL_CHAPTERS[1].line);n.stop();assert.equal(active,false);
});
