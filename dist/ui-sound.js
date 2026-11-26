// Sounds for every button, link, tab, switch, slider, pop-up and win, on every page.
// They are real, pre-rendered sound files (the SoundWeaver library, MIT licence: see CREDITS.md),
// never beeps made on the fly. The game's sound switch turns them off with everything else.
// Pages can also play a sound for a game moment: window.astroSound.play('success-warm-chime').
const BASE = new URL('./audio/ui/', import.meta.url);
const KEY = 'astro-kitty-sound-v3';
const MASTER = 0.6;
// Recommended volumes from the library's labels (quiet for frequent sounds, fuller for rare wins).
export const VOLUME = {'click-soft-tap':0.35,'click-crisp-primary':0.42,'tap-light':0.28,'tap-ui-tick':0.3,'tab-switch':0.32,'nav-forward':0.35,'nav-back':0.33,'select-item':0.35,'toggle-switch-on':0.4,'toggle-switch-off':0.38,'checkbox-check':0.35,'checkbox-uncheck':0.33,'hover-soft':0.18,'type-key':0.28,'success-subtle-ping':0.38,'success-warm-chime':0.48,'success-celebrate':0.5,'level-up':0.5,'achievement':0.5,'coin-collect':0.42,'xp-up':0.4,'error-soft-thud':0.4,'invalid-thunk':0.4,'warning-buzz':0.42,'disabled-blip':0.32,'modal-open-rise':0.34,'modal-close-fall':0.32,'whoosh-short':0.32,'notification-gentle-bell':0.42,'message-incoming-pop':0.4,'message-sent-swish':0.35,'delete-soft-swipe':0.4,'confirm-unlock':0.45,'pop-bubble':0.38,'dropdown-open':0.33};
const COMMON = ['click-soft-tap','click-crisp-primary','nav-forward','nav-back','select-item','tab-switch','hover-soft'];

let ctx = null, out = null;
const raw = new Map(), decoded = new Map(), buffers = new Map();

export function soundOn() { try { return localStorage.getItem(KEY) !== 'off'; } catch { return true; } }
export function setSoundOn(on) {
  try {
    localStorage.setItem(KEY, on ? 'on' : 'off');
    const p = JSON.parse(localStorage.getItem('astro-kitty-profile-v1') || '{}');
    localStorage.setItem('astro-kitty-profile-v1', JSON.stringify({...p, voice: on, captions: true}));
  } catch {}
}

function fetchRaw(id) {
  if (!raw.has(id)) raw.set(id, fetch(new URL(`${id}.wav`, BASE)).then(r => (r.ok ? r.arrayBuffer() : null)).catch(() => null));
  return raw.get(id);
}
function decode(id) {
  if (!ctx) return Promise.resolve(null);
  if (!decoded.has(id)) {
    decoded.set(id, fetchRaw(id)
      .then(data => (data ? ctx.decodeAudioData(data.slice(0)) : null))
      .then(buffer => { if (buffer) buffers.set(id, buffer); return buffer; })
      .catch(() => null));
  }
  return decoded.get(id);
}
// The audio system may only start after a tap or key press (browser rule), so it wakes up then.
function wake() {
  if (!ctx) {
    const AC = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!AC) return;
    try { ctx = new AC(); } catch { return; }
    out = ctx.createGain();
    out.gain.value = MASTER;
    out.connect(ctx.destination);
    for (const id of Object.keys(VOLUME)) decode(id);
  }
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
}

export function play(id, {volume = 1, rate = 1, delay = 0} = {}) {
  if (!VOLUME[id] || !soundOn()) return;
  wake();
  if (!ctx) return;
  const asked = performance.now();
  const start = buffer => {
    if (!buffer) return;
    const source = ctx.createBufferSource(), gain = ctx.createGain();
    source.buffer = buffer;
    source.playbackRate.value = rate;
    gain.gain.value = VOLUME[id] * volume;
    source.connect(gain).connect(out);
    source.start(ctx.currentTime + delay);
  };
  const ready = buffers.get(id);
  if (ready) start(ready);
  else decode(id).then(buffer => { if (performance.now() - asked < 250) start(buffer); });
}

// --- automatic sounds for page controls ------------------------------------------------------------
const PRIMARY = '.btn:not(.ghost), .primary, button[type=submit], .home-3d, #run, #beginButton';
function soundFor(el) {
  const tagged = el.closest('[data-sound]')?.dataset.sound;
  if (tagged) return tagged === 'none' ? null : tagged;
  if (el.matches('[role=tab], .tabs button')) return 'tab-switch';
  if (el.matches('[role=radio], [role=option], .avatar-card, [aria-checked]')) return 'select-item';
  if (el.matches('summary')) return el.parentElement?.open ? 'modal-close-fall' : 'dropdown-open';
  const text = (el.textContent || '').trim();
  if (/^(←|‹|⟵)/.test(text) || /\bBack\b|ফিরে/.test(text) || el.matches('.back, [data-back]')) return 'nav-back';
  if (el.matches('a[href]')) return 'nav-forward';
  if (el.matches(PRIMARY)) return 'click-crisp-primary';
  return 'click-soft-tap';
}

if (typeof document !== 'undefined' && !globalThis.astroSound) {
  for (const id of COMMON) fetchRaw(id);
  const d = document;
  d.addEventListener('pointerdown', e => {
    wake();
    if (e.target.closest?.('button:disabled, [aria-disabled="true"]')) play('disabled-blip');
  }, true);
  d.addEventListener('keydown', wake, true);
  d.addEventListener('click', e => {
    const el = e.target.closest?.('button, a[href], [role=button], [role=tab], [role=radio], [role=option], [role=menuitem], summary');
    if (!el || el.disabled) return;
    const id = soundFor(el);
    if (id) play(id);
  }, true);
  d.addEventListener('change', e => {
    const el = e.target;
    if (!el.matches) return;
    if (el.matches('input[type=checkbox]')) {
      const toggle = el.matches('[role=switch], .switch input, .toggle input');
      play(el.checked ? (toggle ? 'toggle-switch-on' : 'checkbox-check') : (toggle ? 'toggle-switch-off' : 'checkbox-uncheck'));
    } else if (el.matches('input[type=radio], select')) play('select-item');
  }, true);
  let lastType = 0;
  d.addEventListener('input', e => {
    const el = e.target, now = performance.now();
    if (!el.matches || now - lastType < 45) return;
    lastType = now;
    if (el.matches('input[type=range]')) play('tap-ui-tick', {volume: 0.7});
    else if (el.matches('textarea, input[type=text], input[type=search], input:not([type])')) play('type-key', {volume: 0.55, rate: 0.92 + Math.random() * 0.16});
  }, true);
  // a whisper when a mouse moves onto a card (not on touch screens, not too often)
  let hovered = null, hoverAt = 0;
  d.addEventListener('pointerover', e => {
    if (e.pointerType !== 'mouse') return;
    const card = e.target.closest?.('.hub-card, .world-card, .level-btn, .avatar-card, .home-replay, .choice, .option');
    if (!card || card === hovered || card.disabled) return;
    hovered = card;
    const now = performance.now();
    if (now - hoverAt < 90) return;
    hoverAt = now;
    play('hover-soft');
  }, true);
  d.addEventListener('pointerout', e => { if (hovered && !hovered.contains(e.relatedTarget)) hovered = null; }, true);
  // pop-ups: <dialog> windows and result cards rise in and fall away
  if (globalThis.HTMLDialogElement) {
    const proto = HTMLDialogElement.prototype;
    for (const name of ['showModal', 'show']) {
      const original = proto[name];
      proto[name] = function (...args) { if (!this.open) play('modal-open-rise'); return original.apply(this, args); };
    }
    const close = proto.close;
    proto.close = function (...args) { if (this.open) play('modal-close-fall'); return close.apply(this, args); };
  }
  const isPopup = n => n.nodeType === 1 && (n.matches('.result, [role=dialog], .modal, .overlay') || n.querySelector?.(':scope > [role=dialog]'));
  const watch = () => new MutationObserver(list => {
    for (const m of list) {
      if ([...m.addedNodes].some(isPopup)) play('modal-open-rise');
      else if ([...m.removedNodes].some(isPopup)) play('modal-close-fall');
    }
  }).observe(d.body, {childList: true});
  if (d.body) watch(); else d.addEventListener('DOMContentLoaded', watch, {once: true});
  globalThis.astroSound = {play, soundOn, setSoundOn};
}
