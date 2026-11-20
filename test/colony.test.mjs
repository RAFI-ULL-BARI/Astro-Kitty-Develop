import test from 'node:test';
import assert from 'node:assert/strict';
import {marsClock, sunPosition, earthFromMars} from '../src/colony/calendar.js';
import {Collider} from '../src/colony/collide.js';
import {placeModules, wallSegments, regionAt, airlocks, tunnels, BUILDABLES} from '../src/colony/layout.js';
import {newBase, tick, harvest, canAfford, pay} from '../src/colony/sim.js';
import * as director from '../src/colony/director.js';
import {SITES, SITE_ORDER, planVisit, siteHeight, inCave} from '../src/colony/sites.js';
import {rng} from '../src/colony/util.js';

test('the Mars calendar matches NASA Mars24 reference values', () => {
  const c = marsClock(new Date('2000-01-06T00:00:00Z'));
  assert.ok(Math.abs(c.msd - 44795.9998) < 0.001);
  assert.ok(Math.abs(c.ls - 277.187) < 0.05);
  // Mars Years start at Ls 0: MY37 on 2022-12-26, MY38 on 2024-11-12, MY39 on 2026-09-30
  for (const [date, year] of [['2022-12-27', 37], ['2024-11-13', 38], ['2026-10-01', 39], ['2026-09-29', 38]]) {
    assert.equal(marsClock(new Date(date + 'T12:00:00Z')).marsYear, year, date);
  }
  assert.equal(marsClock(new Date('2018-06-15T12:00:00Z')).dustSeason, true); // the 2018 global dust storm
});

test('the Sun is due south at noon in the northern plains', () => {
  const s = sunPosition(12, 47, 0);
  assert.ok(Math.abs(s.elevation * 180 / Math.PI - 43) < 0.5);
  assert.ok(Math.abs(s.azimuth * 180 / Math.PI - 180) < 0.5);
  assert.ok(sunPosition(0, 47, 0).elevation < 0);
});

test('Earth-Mars distance and radio delay are realistic', () => {
  const close = earthFromMars(new Date('2020-10-06T00:00:00Z'));
  assert.ok(Math.abs(close.km / 1e6 - 62.07) < 0.5);
  assert.ok(close.lightMinutes > 3 && close.lightMinutes < 3.6);
});

test('walls stop you, open doors let you through', () => {
  const c = new Collider();
  c.segment(-5, 0, 5, 0, 'door');
  assert.ok(c.resolve(0, 0.1, 0.4).z >= 0.39);
  c.setEnabled('door', false);
  assert.equal(c.resolve(0, 0.1, 0.4).z, 0.1);
  assert.ok(c.raycast(0, -3, 0, 3) === 1);
  c.setEnabled('door', true);
  assert.ok(c.raycast(0, -3, 0, 3) < 0.6);
});

test('every building, tunnel and airlock is a room you can be inside', () => {
  const placed = placeModules();
  for (const m of placed) assert.equal(regionAt(placed, m.x, m.z)?.module, m.id, m.id);
  for (const t of tunnels(placed)) {
    const mid = [(t.start[0] + t.end[0]) / 2, (t.start[1] + t.end[1]) / 2];
    assert.equal(regionAt(placed, ...mid)?.kind, 'tunnel');
  }
  assert.equal(airlocks(placed).length, 6);
  assert.equal(regionAt(placed, -60, 60), null);
  // you can walk from the hub through each tunnel into its building
  const c = new Collider();
  for (const s of wallSegments(placed)) c.segment(s.ax, s.az, s.bx, s.bz, s.tag);
  for (const t of tunnels(placed)) {
    assert.equal(c.raycast(t.start[0], t.start[1], t.end[0], t.end[1]), 1, t.id);
  }
});

test('buildings you build appear in the layout', () => {
  assert.equal(placeModules().length, 6);
  assert.equal(placeModules(['observatory', 'playroom']).length, 8);
  assert.ok(BUILDABLES.every(b => b.cost && b.effect));
});

test('life support: stable on a normal day, storms drain power, leaks drain oxygen', () => {
  const day = (base, opts = {}) => {
    for (let h = 0; h < 24.6; h += 0.1) {
      const el = Math.sin(((h - 6) / 24.6) * Math.PI * 2) * 0.75;
      tick(base, {sunElevation: el, night: el < 0, storm: opts.storm ?? 0, problems: opts.problems ?? {}}, 0.1);
    }
    return base;
  };
  const calm = day(newBase());
  assert.ok(calm.tanks.power > 40 && !calm.emergency);
  const stormy = day(day(newBase(), {storm: 1}), {storm: 1});
  assert.ok(stormy.tanks.power < calm.tanks.power - 30);
  const leaky = day(newBase(), {problems: {leak: true}});
  assert.ok(leaky.tanks.oxygen < 20 && leaky.emergency);
  const withReactor = newBase();
  withReactor.built.push('reactor');
  assert.ok(day(day(withReactor, {storm: 1}), {storm: 1}).tanks.power > stormy.tanks.power + 20);
});

test('harvest and building costs', () => {
  const b = newBase();
  b.crops = 0.5;
  assert.equal(harvest(b), 0);
  b.crops = 1;
  assert.ok(harvest(b) > 30 && b.crops < 0.3);
  assert.equal(canAfford(b, {metal: 99}), false);
  b.stuff.metal = 10;
  pay(b, {metal: 4});
  assert.equal(b.stuff.metal, 6);
});

test('the director brings surprises, and gets gentler when you struggle', () => {
  const d = director.newDirector(42);
  const seen = new Set();
  const ctx = {dustSeason: true, night: false, site: 'home', dust: 0.5, built: ['greenhouse'], available: () => true};
  for (let i = 0; i < 4000; i++) {
    const {started} = director.update(d, 1, ctx);
    if (started) {
      seen.add(started.id);
      director.resolve(d, started.uid, 30);
    }
  }
  assert.ok(seen.size >= 8, [...seen].join(','));
  const slow = director.newDirector(1);
  const e = director.start(slow, 'leak');
  director.resolve(slow, e.uid, 300);
  assert.ok(slow.skill < 1);
  // base problems never start while you are away
  const away = director.newDirector(5);
  for (let i = 0; i < 3000; i++) {
    const {started} = director.update(away, 1, {...ctx, site: 'gale', available: () => false});
    if (started) assert.ok(!director.EVENTS[started.id].fix?.where, started.id);
  }
});

test('every place on Mars has ground, facts, a NASA source and a varied mission', () => {
  for (const id of SITE_ORDER) {
    const s = SITES[id];
    assert.ok(s.fact.en && s.fact.bn && s.source.startsWith('https://'), id);
    const h = siteHeight(id);
    for (const [x, z] of [[0, 0], [50, -40], [-80, 70]]) assert.ok(Number.isFinite(h(x, z)), id);
    if (id !== 'home') {
      const a = planVisit(id, rng(1)), b = planVisit(id, rng(99));
      assert.ok(a.length >= 2, id);
      assert.ok(a.every(o => o.need >= 1 && o.reward));
      assert.ok(JSON.stringify(a) !== JSON.stringify(b) || (s.pool ?? []).length <= 3, id);
    }
  }
  const cave = SITES.arsia.cave;
  assert.ok(inCave(cave, cave.x + 20, cave.z + 3));
  assert.ok(!inCave(cave, cave.x - 30, cave.z));
  assert.ok(siteHeight('arsia')(cave.x + 20, cave.z + 3, true) < -14);
});
