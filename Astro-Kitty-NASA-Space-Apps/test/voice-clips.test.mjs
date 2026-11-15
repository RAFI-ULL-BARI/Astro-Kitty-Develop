import test from 'node:test';
import assert from 'node:assert/strict';
import {clipName,planClips,splitSentences,createVoiceClips} from '../dist/voice-clips.js';

test('clip names are stable and ignore extra spaces', () => {
  assert.equal(clipName('Hello  there! '), clipName('Hello there!'));
  assert.match(clipName('Hello there!'), /^v_[0-9a-f]{8}\.mp3$/);
  assert.notEqual(clipName('Hello there!'), clipName('Hello there.'));
});

test('a praise clip and a line clip join to cover a praised line', () => {
  const have = new Set([clipName('Shabbash! (Good job!)'), clipName('One plug fits! Try the next shape.')]);
  const plan = planClips('Shabbash! (Good job!) One plug fits! Try the next shape.', n => have.has(n));
  assert.deepEqual(plan, [clipName('Shabbash! (Good job!)'), clipName('One plug fits! Try the next shape.')]);
  assert.deepEqual(splitSentences('Yay! Our air system is on.'), ['Yay!', 'Our air system is on.']);
});

test('a line with no full set of clips falls back to the browser voice', async () => {
  const have = new Set([clipName('Yay!')]);
  assert.equal(planClips('Yay! Something new.', n => have.has(n)), null);
  const fetcher = async () => ({ok: true, json: async () => ({files: [...have]})});
  const clips = createVoiceClips({fetcher, AudioClass: null, base: new URL('http://x/audio/voice/')});
  assert.equal(await clips.play('Yay! Something new.'), false);
});

test('a recorded clip plays instead of the browser voice', async () => {
  const played = [];
  class FakeAudio { constructor(src) { this.src = src; } play() { played.push(this.src); setTimeout(() => this.onended?.(), 0); return Promise.resolve(); } pause() {} }
  const fetcher = async () => ({ok: true, json: async () => ({files: [clipName('Hi! I am Dhrubo.')]})});
  const clips = createVoiceClips({fetcher, AudioClass: FakeAudio, base: new URL('http://x/audio/voice/')});
  assert.equal(await clips.play('Hi! I am Dhrubo.'), true);
  assert.deepEqual(played, ['http://x/audio/voice/' + clipName('Hi! I am Dhrubo.')]);
});
