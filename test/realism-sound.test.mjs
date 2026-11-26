import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile, stat} from 'node:fs/promises';
import {AVATARS, chosenAvatar, crewAvatars, kittyLook} from '../src/mars-walk/avatar.js';

const dist = new URL('../dist/', import.meta.url);

test('3D kitties use the same colours as the kitties on the home screen', async () => {
  const art = await readFile(new URL('art.js', dist), 'utf8');
  for (const [id, a] of Object.entries(AVATARS)) {
    const m = art.match(new RegExp(`${id}:\\{name:'([^']+)',ear:'([^']+)',face:'([^']+)',inner:'([^']+)',suit:'([^']+)'\\}`));
    assert.ok(m, id);
    assert.deepEqual([m[1], m[2], m[3], m[4], m[5]], [a.name, a.ear, a.face, a.inner, a.suit], id);
  }
});

test('the player gets their own kitty and the crew are the other three', () => {
  const store = v => ({getItem: () => v});
  assert.equal(chosenAvatar(store('neel')), 'neel');
  assert.equal(chosenAvatar(store('nobody')), 'mishti');
  assert.equal(chosenAvatar(store(null)), 'mishti');
  assert.deepEqual(crewAvatars('tara'), ['mishti', 'megh', 'neel']);
  const look = kittyLook('tara');
  assert.equal(look.fur, AVATARS.tara.ear);
  assert.equal(look.trim, AVATARS.tara.suit);
  assert.match(look.stripe, /^#[0-9a-f]{6}$/);
});

test('every UI sound the pages can play is a real file', async () => {
  const src = await readFile(new URL('ui-sound.js', dist), 'utf8');
  const ids = Object.keys(JSON.parse(src.match(/export const VOLUME = (\{[^}]+\})/)[1].replace(/'/g, '"')));
  assert.ok(ids.length >= 30);
  for (const id of ids) {
    const s = await stat(new URL(`audio/ui/${id}.wav`, dist));
    assert.ok(s.size > 500, id);
  }
  // sounds asked for by name in the pages exist too
  for (const page of ['kitty-code.js', 'quiz.js', 'dhrubo-chat.js']) {
    const code = await readFile(new URL(page, dist), 'utf8');
    for (const [, id] of code.matchAll(/(?:sfx|astroSound\?\.play)\('([a-z-]+)'/g)) assert.ok(ids.includes(id), `${page}: ${id}`);
  }
  for (const [, id] of (await readFile(new URL('kitty-code.js', dist), 'utf8')).matchAll(/data-sound="([a-z-]+)"/g)) assert.ok(id === 'none' || ids.includes(id), id);
});

test('every page loads the sound engine', async () => {
  for (const page of ['index.html', 'hub.html', 'kitty-code.html', 'quiz.html', 'leaderboard.html', 'sky.html', 'crew.html', 'academy.html', 'outpost.html', 'teacher.html', 'world/colony.html', 'world/mars-explorer.html']) {
    const html = await readFile(new URL(page, dist), 'utf8');
    assert.match(html, /ui-sound\.js\?v=10/, page);
  }
});

test('world sounds and surface textures used by the 3D worlds exist', async () => {
  const audio = await readFile(new URL('../src/colony/audio.js', import.meta.url), 'utf8');
  const files = JSON.parse(audio.match(/const FILES = (\[[^\]]+\])/)[1].replace(/'/g, '"').replace(/,\s*\]/, ']'));
  for (const name of files) assert.ok((await stat(new URL(`world/audio/world/${name}.wav`, dist))).size > 1000, name);
  const realism = await readFile(new URL('../src/colony/realism.js', import.meta.url), 'utf8');
  const sets = JSON.parse(realism.match(/const SETS = (\[[^\]]+\])/)[1].replace(/'/g, '"'));
  for (const set of sets) for (const kind of ['albedo', 'normal']) assert.ok((await stat(new URL(`world/assets/tex/${set}_${kind}.webp`, dist))).size > 1000, set);
  assert.ok((await stat(new URL('world/assets/tex/grime.webp', dist))).size > 1000);
});
