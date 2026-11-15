import test from 'node:test'
import assert from 'node:assert/strict'
import {createFieldMechanic} from '../../dist/world/field-mechanics.js'
import {MISSIONS,OBJECTS,CHAPTERS,loadJourney} from '../../dist/world/field-missions.js'
const run=(model,frames,input)=>{for(let i=0;i<frames;i++)model.step({dt:.05,...input})}
test('all six chapters have real world targets and stable unique checkpoints',()=>{
 assert.equal(MISSIONS.length,24);assert.equal(new Set(MISSIONS.map(m=>m.id)).size,24)
 for(const m of MISSIONS){assert.ok(OBJECTS[m.target]);assert.ok(CHAPTERS[m.chapter]);assert.ok(m.seconds>0)}
 assert.equal(CHAPTERS.length,6)
})
test('a scanner requires proximity, aim and a held tool',()=>{
 const m=createFieldMechanic(MISSIONS.find(m=>m.kind==='scan'))
 run(m,100,{near:false,held:true});assert.equal(m.status.progress,0)
 run(m,100,{near:true,held:true,facing:false});assert.equal(m.status.progress,0)
 run(m,100,{near:true,held:false});assert.equal(m.status.progress,0)
 run(m,30,{near:true,held:true});assert.ok(m.status.progress>.4&&m.status.progress<.6)
 const before=m.status.progress;run(m,30,{near:false,held:true});assert.equal(m.status.progress,before)
 run(m,40,{near:true,held:true});assert.equal(m.status.finished,true)
})
test('equipment must be physically aligned before a cycle can complete',()=>{
 const mission=MISSIONS.find(m=>m.kind==='align'),m=createFieldMechanic(mission)
 run(m,100,{near:true,held:true});assert.equal(m.status.progress,0)
 run(m,18,{near:true,turn:1});assert.ok(m.status.quality>=.96)
 run(m,35,{near:true,held:true});assert.equal(m.status.finished,true)
})
test('rover gates cannot be collected on foot',()=>{
 const m=createFieldMechanic(MISSIONS.find(m=>m.kind==='drive'))
 run(m,20,{near:true,held:true,driving:false});assert.equal(m.status.finished,false)
 m.step({dt:.05,near:true,driving:true});assert.equal(m.status.finished,true)
})
test('pickup needs explicit input at the object and actions pause on release',()=>{
 const m=createFieldMechanic(MISSIONS.find(m=>m.kind==='pickup'))
 m.step({dt:.05,near:false,pulse:true});assert.equal(m.status.finished,false)
 m.step({dt:.05,near:true});assert.equal(m.status.finished,false)
 m.step({dt:.05,near:true,pulse:true});assert.equal(m.status.finished,true)
})
test('save parsing rejects corrupted progress and retains valid checkpoints',()=>{
 assert.equal(loadJourney('broken').index,0)
 const s=loadJourney(JSON.stringify({completed:['dust-panel','wrong','dust-panel'],found:['crater','bad','crater'],index:7}))
 assert.deepEqual(s.completed,['dust-panel']);assert.deepEqual(s.found,['crater']);assert.equal(s.index,7)
 assert.equal(loadJourney(JSON.stringify({completed:MISSIONS.map(m=>m.id)})).finished,true)
 assert.equal(loadJourney(JSON.stringify({index:999})).index,0)
})
test('large or invalid frame deltas cannot instantly finish a challenge',()=>{
 const m=createFieldMechanic(MISSIONS[0]);m.step({dt:Infinity,near:true,held:true});assert.equal(m.status.progress,0)
 m.step({dt:50,near:true,held:true});assert.ok(m.status.progress<.04)
})
