import test from 'node:test';
import assert from 'node:assert/strict';
import {createGame,setTarget,tick,BEACONS} from '../../dist/world/story-engine.js';
import {surfaceObstacles,moveOnGround,groundRoute,freeGround,nearestFreeGround,visibleBaseModules,KITTY_RADIUS,ROVER_RADIUS,OUTPOST_START} from '../../dist/world/surface-world.js';
import {GRID,MODULES,PIP_LAYOUT,POOR_LAYOUT} from '../../dist/world/base-design.js';
import {createOutpost,rng,shuffle} from '../../dist/world/outpost-engine.js';

test('large movement steps cannot cross a rocket, habitat or panel',()=>{
  const obstacles=surfaceObstacles({panels:createGame('walk').panels});
  for(const radius of [KITTY_RADIUS,ROVER_RADIUS]){
    for(const [from,to] of [
      [{x:280,y:630},{x:280,y:440}],
      [{x:1060,y:510},{x:1060,y:320}],
      [{x:490,y:540},{x:490,y:380}],
    ]){
      assert.ok(freeGround(from,obstacles,radius));
      assert.deepEqual(moveOnGround(from,to,obstacles,radius),from);
      assert.ok(freeGround(nearestFreeGround(to,obstacles,radius),obstacles,radius));
    }
  }
});

test('tapping through scenery routes Kitty and the rover around it',()=>{
  const kitty=createGame('clean');
  setTarget(kitty,270,445);
  assert.ok(kitty.route.length>1);
  for(let i=0;i<400&&kitty.target;i++){
    tick(kitty,1/60);
    assert.ok(freeGround(kitty.player,kitty.obstacles,KITTY_RADIUS));
  }
  assert.ok(Math.hypot(kitty.player.x-270,kitty.player.y-445)<1);
  const rover=createGame('rover');
  for(const beacon of BEACONS){
    setTarget(rover,beacon.x,beacon.y);
    for(let i=0;i<800&&(rover.target||rover.auto);i++){
      tick(rover,1/60);
      assert.ok(freeGround(rover.player,rover.obstacles,ROVER_RADIUS));
    }
  }
  assert.equal(rover.rover.scan,3);
});

test('outpost scenery follows the layout and rocks can be reached on free ground',()=>{
  const random=rng(678);
  const tiles=Array.from({length:20},(_,i)=>i).filter(i=>i!==GRID.habitat);
  const layouts=[PIP_LAYOUT,POOR_LAYOUT,...Array.from({length:40},()=>{
    const order=shuffle(tiles,random);
    return Object.fromEntries(MODULES.map((name,index)=>[name,order[index]]));
  })];
  for(const layout of layouts){
    const obstacles=surfaceObstacles({layout});
    const scenery=visibleBaseModules(layout);
    assert.deepEqual(new Set(scenery.map(m=>m.id)),new Set(MODULES));
    for(const module of scenery.filter(m=>m.footprint))assert.equal(freeGround(module,obstacles,KITTY_RADIUS),false);
    // Water and the garage are background sprites, above the walkable yard.
    for(const module of scenery.filter(m=>!m.footprint))assert.ok(module.ground<module.y);
    const start=nearestFreeGround(OUTPOST_START,obstacles,KITTY_RADIUS,300);
    const outpost=createOutpost({code:'DUST-42',layout});
    for(const rock of outpost.rocks){
      const route=groundRoute(start,rock,obstacles,KITTY_RADIUS,300);
      assert.ok(route.length,JSON.stringify({layout,rock}));
      assert.ok(freeGround(route.at(-1),obstacles,KITTY_RADIUS));
    }
  }
});

 test('the return-to-airlock objective is reachable around every surface obstacle',()=>{
  const s=createGame('return');
  setTarget(s,1156,460);
  for(let i=0;i<1600&&s.scene==='return';i++)tick(s,1/60);
  assert.equal(s.scene,'airlock');
 });
