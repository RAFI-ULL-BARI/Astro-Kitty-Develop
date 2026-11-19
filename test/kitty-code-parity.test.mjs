import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {run} from '../dist/kitty-code-engine.js';

const cases=JSON.parse(await readFile(new URL('../dist/data/kitty-code-cases.json',import.meta.url),'utf8'));
const {levels}=JSON.parse(await readFile(new URL('../dist/data/kitty-code-levels.json',import.meta.url),'utf8'));

test('the browser engine agrees with the Python engine on every case',()=>{
  assert.ok(cases.length>200);
  for(const c of cases){
    const got=run(c.source,c.map,c.par);delete got.trace;
    assert.deepEqual(got,c.expect,`program:\n${c.source}`);
  }
});

test('levels ship without their reference solutions',()=>{
  assert.equal(levels.length,60);
  for(const level of levels){assert.equal(level.reference,undefined);assert.ok(level.par>0);}
});

test('a typo gets a friendly suggestion and Bangla commands work',()=>{
  assert.equal(run('mvoe 3',['>..B']).error.suggestion,'MOVE');
  assert.equal(run('এগোও ৩',['>..B'],1).stars,3);
});
