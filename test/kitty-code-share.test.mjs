import test from 'node:test';
import assert from 'node:assert/strict';
import {encodeLevel,decodeLevel} from '../dist/kitty-code-share.js';
import {run} from '../dist/kitty-code-engine.js';

const level={map:['>~~....','..#....','...#*.*','.@.....','......B'],par:5,battery:12,title:'আমার বরফ Ice run'};

test('a shared level survives the trip through a link, Bangla title included',()=>{
  const code=encodeLevel(level);
  assert.match(code,/^[A-Za-z0-9_-]+$/);
  assert.deepEqual(decodeLevel(code),level);
  assert.deepEqual(decodeLevel(encodeLevel({...level,battery:null,title:''})),{...level,battery:null,title:''});
});

test('broken or unfair level codes are refused',()=>{
  const bad=[
    'not a code!!','',
    encodeLevel({...level,map:['>..>','...B']}),            // two rovers
    encodeLevel({...level,map:['>...','....']}),            // no base
    encodeLevel({...level,map:['>..X','...B']}),            // unknown tile
    encodeLevel({...level,map:Array(13).fill('>.B')}),      // too tall
    encodeLevel({...level,map:['>'+'.'.repeat(14)+'B']}),   // too wide
    encodeLevel({...level,par:0}),encodeLevel({...level,par:'lots'}),
  ];
  for(const code of bad)assert.equal(decodeLevel(code),null,code);
  assert.equal(decodeLevel(btoa('{"m":"oops"}')),null);
});

test('titles are trimmed and batteries kept in range',()=>{
  const lv=decodeLevel(encodeLevel({...level,battery:500,title:' Long '+'x'.repeat(60)+'\n'}));
  assert.equal(lv.battery,99);
  assert.equal(lv.title.length,30);
});

test('a decoded level plays in the real engine',()=>{
  const lv=decodeLevel(encodeLevel(level));
  const r=run('MOVE 4\nTURN RIGHT\nMOVE 4',lv.map,lv.par,lv.battery);
  assert.equal(r.status,'success');
  assert.equal(r.stars,2); // par met, one sample left behind
});
