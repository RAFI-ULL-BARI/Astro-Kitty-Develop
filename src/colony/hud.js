// Everything drawn on top of the 3D view: meters, alerts, Dhrubo, menus and mini-games.
import {S, EVENT_TEXT, FIX_TEXT, BUILD_TEXT, SUITS} from './strings.js'
import {SITES, SITE_ORDER, surfaceKm, objectiveText, siteDifficulty} from './sites.js'
import {BUILDABLES} from './layout.js'
import {TANKS, canAfford} from './sim.js'
import {formatHours} from './calendar.js'
import {robotPortrait} from '../../dist/world/dhrubo-guide.js'

const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]))
const SEASON = {
  en: {spring: 'spring', summer: 'summer', autumn: 'autumn', winter: 'winter'},
  bn: {spring: 'বসন্ত', summer: 'গ্রীষ্ম', autumn: 'শরৎ', winter: 'শীত'},
}
const ICON = {power: '🔋', water: '💧', oxygen: '🫁', food: '🥕', metal: '⚙️', ice: '🧊', science: '🔬'}

export function makeHud(root, getLang) {
  const L = () => getLang()
  const t = key => S[L()][key] ?? S.en[key] ?? key
  root.insertAdjacentHTML('beforeend', `
    <div class="cx-hud">
      <div class="cx-where"><strong data-site></strong><span data-clock></span></div>
      <div class="cx-tanks">${TANKS.map(k => `<div class="cx-tank" data-tank="${k}"><span>${ICON[k]}</span><div class="cx-bar"><i></i></div><b></b></div>`).join('')}
        <div class="cx-stuff">${['metal', 'ice', 'science'].map(k => `<span data-stuff="${k}">${ICON[k]} <b>0</b></span>`).join('')}</div></div>
      <div class="cx-alert" hidden><span class="cx-alert-icon"></span><div><strong></strong><p></p></div></div>
      <div class="cx-objectives" hidden><strong></strong><ul></ul></div>
      <div class="cx-marker" hidden><span>▲</span><em></em></div>
      <div class="cx-prompt" hidden><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15"/><circle class="cx-ring" cx="18" cy="18" r="15"/></svg><span></span></div>
      <div class="cx-toasts" aria-live="polite"></div>
      <div class="cx-dhrubo" hidden>${robotPortrait}<p></p></div>
      <div class="cx-controls">
        <div class="cx-stick" data-stick><span></span></div>
        <div class="cx-buttons">
          <button data-press="act" class="cx-big">✋<small data-label="act"></small></button>
          <button data-press="jump">⤴<small data-label="jump"></small></button>
          <button data-press="drone" data-drone hidden>🚁<small data-label="drone"></small></button>
          <button data-press="rover" data-rover hidden>🛞</button>
        </div>
      </div>
      <nav class="cx-menu">
        <button data-press="map">🪐 <span data-label="map"></span></button>
        <button data-press="build">🏗️ <span data-label="build"></span></button>
        <button data-press="photo">📷 <span data-label="photo"></span></button>
        <button data-press="menu">⚙️</button>
      </nav>
      <div class="cx-emergency" hidden></div>
      <div class="cx-drone" hidden><span data-label="droneBattery"></span><div class="cx-bar"><i></i></div></div>
    </div>
    <div class="cx-panel" hidden><div class="cx-card"></div></div>
    <div class="cx-fade"></div>`)
  const $ = s => root.querySelector(s)
  const panel = $('.cx-panel'), card = $('.cx-card')
  const lastTank = {}
  let dhruboTimer = 0

  function relabel() {
    root.querySelectorAll('[data-label]').forEach(el => { el.textContent = t(el.dataset.label) })
  }
  relabel()

  function toast(text, kind = '') {
    const el = document.createElement('div')
    el.className = `cx-toast ${kind}`
    el.textContent = text
    $('.cx-toasts').append(el)
    setTimeout(() => el.classList.add('out'), 2600)
    setTimeout(() => el.remove(), 3200)
  }

  function openPanel(html, cls = '') {
    card.className = `cx-card ${cls}`
    card.innerHTML = `<button class="cx-close" aria-label="${esc(t('close'))}">×</button>${html}`
    panel.hidden = false
    card.querySelector('.cx-close').onclick = () => closePanel()
    return card
  }
  let onClose = null
  function closePanel() {
    panel.hidden = true
    card.innerHTML = ''
    const fn = onClose
    onClose = null
    fn?.()
  }

  return {
    t, toast, relabel, closePanel,
    get panelOpen() { return !panel.hidden },
    setOnClose(fn) { onClose = fn },
    update({site, clock, hours, base, colonySol, objectives, alert, prompt, marker, emergency, drone, showDrone, showRover}) {
      $('[data-site]').textContent = SITES[site].name[L()]
      const night = hours < 6 || hours > 18.5
      const season = SEASON[L()][clock.northernSeason]
      $('[data-clock]').textContent = `${night ? '🌙' : '☀️'} ${t('sol')} ${colonySol} · ${formatHours(hours)} · ${t('marsYear')} ${clock.marsYear} · ${season}${clock.dustSeason ? ' 🌪️' : ''}`
      for (const k of TANKS) {
        const v = Math.round(base.tanks[k])
        if (lastTank[k] === v) continue
        lastTank[k] = v
        const el = root.querySelector(`[data-tank="${k}"]`)
        el.querySelector('i').style.width = `${v}%`
        el.querySelector('b').textContent = `${v}%`
        el.classList.toggle('low', v < 25)
        el.title = t(k)
      }
      for (const k of ['metal', 'ice', 'science']) root.querySelector(`[data-stuff="${k}"] b`).textContent = Math.floor(base.stuff[k])
      const a = $('.cx-alert')
      a.hidden = !alert
      if (alert) {
        const key = `${alert.id}-${alert.phase}`
        if (a.dataset.key !== key) {
          a.dataset.key = key
          const text = EVENT_TEXT[alert.id][L()]
          a.querySelector('.cx-alert-icon').textContent = EVENT_TEXT[alert.id].icon
          a.querySelector('strong').textContent = text[0]
          a.querySelector('p').textContent = text[1]
          a.classList.toggle('good', !!alert.good)
          a.classList.remove('pop')
          void a.offsetWidth
          a.classList.add('pop')
        }
      }
      const o = $('.cx-objectives')
      o.hidden = !objectives?.length
      if (objectives?.length) {
        const html = objectives.map(x => `<li class="${x.done ? 'done' : ''}">${x.done ? '✅' : '◻️'} ${esc(objectiveText(x, L()))}${x.need > 1 ? ` <b>${x.have}/${x.need}</b>` : ''}</li>`).join('')
        if (o.dataset.html !== html) {
          o.dataset.html = html
          o.querySelector('strong').textContent = t('objectives')
          o.querySelector('ul').innerHTML = html
        }
      }
      const p = $('.cx-prompt')
      p.hidden = !prompt
      if (prompt) {
        p.querySelector('span').textContent = prompt.text
        p.querySelector('.cx-ring').style.strokeDashoffset = String(94.2 * (1 - (prompt.progress ?? 0)))
        p.classList.toggle('hold', prompt.verb === 'hold')
      }
      const m = $('.cx-marker')
      m.hidden = !marker
      if (marker) {
        m.style.left = `${marker.x}px`
        m.style.top = `${marker.y}px`
        m.querySelector('span').style.transform = `rotate(${marker.angle}rad)`
        m.querySelector('em').textContent = marker.label ?? ''
        m.classList.toggle('edge', marker.edge)
      }
      const e = $('.cx-emergency')
      e.hidden = !emergency
      if (emergency) e.textContent = t('emergency')
      const d = $('.cx-drone')
      d.hidden = !drone
      if (drone) d.querySelector('i').style.width = `${Math.round(drone.battery * 100)}%`
      root.querySelector('[data-drone]').hidden = !showDrone
      root.querySelector('[data-rover]').hidden = !showRover
    },
    say(text, seconds = 6) {
      const box = $('.cx-dhrubo')
      box.hidden = false
      box.querySelector('p').textContent = text
      box.classList.remove('pop')
      void box.offsetWidth
      box.classList.add('pop')
      clearTimeout(dhruboTimer)
      dhruboTimer = setTimeout(() => { box.hidden = true }, seconds * 1000)
    },
    fade(on) { $('.cx-fade').classList.toggle('on', on) },
    hide(on) { root.querySelector('.cx-hud').classList.toggle('hidden-ui', on) },

    // --- menus ---------------------------------------------------------------
    buildMenu(base, onBuy) {
      const items = BUILDABLES.map(b => {
        const text = BUILD_TEXT[b.id], [name, desc] = text[L()]
        const owned = base.built.includes(b.id), afford = canAfford(base, b.cost)
        const cost = ['metal', 'ice', 'science'].filter(k => b.cost[k]).map(k => `<span class="${(base.stuff[k] ?? 0) >= b.cost[k] ? '' : 'short'}">${ICON[k]} ${b.cost[k]}</span>`).join('')
        return `<article class="cx-item ${owned ? 'owned' : ''}"><span class="cx-item-icon">${text.icon}</span><div><strong>${esc(name)}</strong><p>${esc(desc)}</p><div class="cx-cost">${cost}</div></div>
          <button data-buy="${b.id}" ${owned || !afford ? 'disabled' : ''}>${owned ? '✅ ' + esc(t('built')) : afford ? esc(t('buy')) : esc(t('notEnough'))}</button></article>`
      }).join('')
      const c = openPanel(`<h2>🏗️ ${esc(t('buildTitle'))}</h2><p class="cx-muted">${esc(t('buildIntro'))}</p><div class="cx-list">${items}</div>`, 'wide')
      c.querySelectorAll('[data-buy]').forEach(btn => btn.onclick = () => { closePanel(); onBuy(btn.dataset.buy) })
    },
    mapMenu(current, visited, onGo) {
      const home = SITES.home
      const pins = SITE_ORDER.filter(id => !SITES[id].moon).map(id => {
        const s = SITES[id], x = (((s.lon % 360) + 360) % 360) / 360 * 100, y = (90 - s.lat) / 180 * 100
        return `<button class="cx-pin ${id === current ? 'here' : ''} ${visited.includes(id) ? 'seen' : ''}" style="left:${x}%;top:${y}%" data-site="${id}" title="${esc(s.name[L()])}"><i></i><span>${esc(s.name[L()].split(' · ')[0])}</span></button>`
      }).join('')
      const c = openPanel(`<h2>🪐 ${esc(t('mapTitle'))}</h2><p class="cx-muted">${esc(t('mapIntro'))}</p>
        <div class="cx-mars">${pins}</div><button class="cx-phobos ${current === 'phobos' ? 'here' : ''}" data-site="phobos">🌑 ${esc(SITES.phobos.name[L()])}</button>
        <div class="cx-site-card" hidden></div>`, 'wide')
      const info = c.querySelector('.cx-site-card')
      c.querySelectorAll('[data-site]').forEach(btn => btn.onclick = () => {
        const id = btn.dataset.site, s = SITES[id]
        const km = Math.round(surfaceKm(home, s))
        info.hidden = false
        info.innerHTML = `<h3>${esc(s.name[L()])}</h3><p>${esc(s.fact[L()])}</p><p class="cx-muted">${id === 'home' ? '' : `${km.toLocaleString()} ${esc(t('km'))} · `}${esc(t('difficulty'))}: ${'⭐'.repeat(siteDifficulty(id))}${visited.includes(id) ? ` · ✅ ${esc(t('visited'))}` : ''}</p>
          <a href="${esc(s.source)}" target="_blank" rel="noopener">NASA ↗</a>
          ${id === current ? `<p><b>📍 ${esc(t('here'))}</b></p>` : `<button class="cx-go">${id === 'home' ? '🏠 ' + esc(t('home')) : '🚀 ' + esc(t('fly'))}</button>`}`
        info.querySelector('.cx-go')?.addEventListener('click', () => { closePanel(); onGo(id) })
      })
    },
    wardrobe(scienceEarned, current, onWear) {
      const items = SUITS.map(s => {
        const open = scienceEarned >= s.science
        return `<button class="cx-suit ${s.id === current ? 'on' : ''}" data-suit="${s.id}" ${open ? '' : 'disabled'}><i style="background:${s.suit};border-color:${s.trim}"></i>${esc(s[L()])}<small>${open ? (s.id === current ? '✅' : esc(t('wear'))) : `🔒 🔬${s.science}`}</small></button>`
      }).join('')
      const c = openPanel(`<h2>👩‍🚀 ${esc(t('wardrobeTitle'))}</h2><p class="cx-muted">${esc(t('wardrobeIntro'))}</p><div class="cx-suits">${items}</div>`)
      c.querySelectorAll('[data-suit]').forEach(btn => btn.onclick = () => { onWear(btn.dataset.suit); closePanel() })
    },
    settings(opts, onChange) {
      const c = openPanel(`<h2>⚙️ ${esc(t('settings'))}</h2>
        <label class="cx-row">${esc(t('quality'))}<select data-k="quality">${['low', 'medium', 'high'].map(q => `<option value="${q}" ${opts.quality === q ? 'selected' : ''}>${esc(t(q))}</option>`).join('')}</select></label>
        <label class="cx-row"><input type="checkbox" data-k="reduced" ${opts.reduced ? 'checked' : ''}> ${esc(t('motion'))}</label>
        <label class="cx-row"><input type="checkbox" data-k="realTime" ${opts.realTime ? 'checked' : ''}> ${esc(t('realTime'))}</label>
        <label class="cx-row"><input type="checkbox" data-k="sound" ${opts.sound ? 'checked' : ''}> ${esc(t('sound'))}</label>
        <p><button data-k="language">🌐 ${esc(t('language'))}</button> <a class="cx-link" href="../hub.html">🚀 ${esc(t('hubLink'))}</a></p>
        <p class="cx-muted cx-keys">${esc(t('keys'))}</p>`)
      c.querySelectorAll('[data-k]').forEach(el => {
        const k = el.dataset.k
        const fire = () => onChange(k, el.type === 'checkbox' ? el.checked : el.value)
        if (el.tagName === 'BUTTON') el.onclick = () => { onChange(k, true); closePanel() }
        else el.onchange = fire
      })
    },
    info(title, text, source) {
      openPanel(`<h2>${esc(title)}</h2><p>${esc(text)}</p>${source ? `<a href="${esc(source)}" target="_blank" rel="noopener">NASA ↗</a>` : ''}`)
    },
    title(hasSave, onStart) {
      const c = openPanel(`<div class="cx-title"><h1>🐱 ${esc(t('title'))}</h1><p>${esc(SITES.home.fact[L()])}</p>
        <button class="cx-go">${esc(hasSave ? t('continue') : t('start'))}</button><p class="cx-muted cx-keys">${esc(t('keys'))}</p></div>`, 'title')
      c.querySelector('.cx-close').remove()
      c.querySelector('.cx-go').onclick = () => { closePanel(); onStart() }
    },
    photo(onSnap, onPostcard, onExit) {
      const bar = document.createElement('div')
      bar.className = 'cx-photo'
      bar.innerHTML = `<p>${esc(t('photoHint'))}</p><button data-snap>📸 ${esc(t('snap'))}</button><button data-card>💌 ${esc(t('postcard'))}</button><button data-exit>↩ ${esc(t('exitPhoto'))}</button>`
      root.append(bar)
      bar.querySelector('[data-snap]').onclick = onSnap
      bar.querySelector('[data-card]').onclick = onPostcard
      bar.querySelector('[data-exit]').onclick = () => { bar.remove(); onExit() }
      return bar
    },
    showPicture(url) {
      const c = openPanel(`<img class="cx-shot" src="${url}" alt=""><p><a class="cx-link" href="${url}" download="mars-photo.png">💾 ${esc(t('saveImage'))}</a></p>`)
      return c
    },

    // --- mini-games -----------------------------------------------------------
    // Each calls done() when solved. They are short and can't be failed: just try again.
    miniGame(kind, done) {
      const title = FIX_TEXT[kind]?.[L()] ?? ''
      if (kind === 'tap') {
        let dirt = 100
        const c = openPanel(`<h2>🚰 ${esc(title)}</h2><div class="cx-meter"><i style="width:100%"></i></div><button class="cx-tap">👆</button>`)
        const bar = c.querySelector('.cx-meter i')
        c.querySelector('.cx-tap').onclick = e => {
          dirt -= 9
          e.currentTarget.classList.remove('bump')
          void e.currentTarget.offsetWidth
          e.currentTarget.classList.add('bump')
          bar.style.width = `${Math.max(0, dirt)}%`
          if (dirt <= 0) { closePanel(); done() }
        }
        const timer = setInterval(() => { if (panel.hidden) return clearInterval(timer); dirt = Math.min(100, dirt + 2); bar.style.width = `${dirt}%` }, 400)
      } else if (kind === 'timing') {
        let hits = 0, pos = 0, dir = 1, last = performance.now()
        const c = openPanel(`<h2>🧊 ${esc(title)}</h2><div class="cx-timing"><b></b><i></i></div><p class="cx-hits">⭐⭐⭐</p><button class="cx-go">⏯</button>`)
        const needle = c.querySelector('.cx-timing i'), hitEl = c.querySelector('.cx-hits')
        const zone = 0.38 + Math.random() * 0.3
        c.querySelector('.cx-timing b').style.left = `${zone * 100}%`
        const frame = now => {
          if (panel.hidden) return
          pos += (now - last) / 1000 * 0.9 * dir
          last = now
          if (pos > 1 || pos < 0) { dir *= -1; pos = Math.max(0, Math.min(1, pos)) }
          needle.style.left = `${pos * 100}%`
          requestAnimationFrame(frame)
        }
        requestAnimationFrame(frame)
        c.querySelector('.cx-go').onclick = () => {
          const ok = Math.abs(pos - (zone + 0.07)) < 0.08
          hits = ok ? hits + 1 : Math.max(0, hits - 1)
          hitEl.textContent = '🌟'.repeat(hits) + '⭐'.repeat(3 - hits)
          c.querySelector('.cx-timing').classList.toggle('miss', !ok)
          if (hits >= 3) { closePanel(); done() }
        }
      } else if (kind === 'sequence') {
        const order = [1, 2, 3, 4, 5, 6].sort(() => Math.random() - 0.5)
        let next = 1
        const c = openPanel(`<h2>⚡ ${esc(title)}</h2><div class="cx-breakers">${order.map(n => `<button data-n="${n}">${n}</button>`).join('')}</div>`)
        c.querySelectorAll('[data-n]').forEach(btn => btn.onclick = () => {
          if (+btn.dataset.n === next) {
            btn.classList.add('on')
            btn.disabled = true
            next++
            if (next > 6) { closePanel(); done() }
          } else {
            c.querySelectorAll('[data-n]').forEach(x => { x.classList.remove('on'); x.disabled = false })
            next = 1
            c.querySelector('.cx-breakers').classList.add('shake')
            setTimeout(() => c.querySelector('.cx-breakers')?.classList.remove('shake'), 400)
          }
        })
      } else if (kind === 'align') {
        let angle = (Math.random() - 0.5) * 140, good = 0
        const target = (Math.random() - 0.5) * 100
        const c = openPanel(`<h2>📡 ${esc(title)}</h2><div class="cx-dial"><i></i></div><div class="cx-meter signal"><i></i></div>
          <p><button data-turn="-1">⟲</button> <button data-turn="1">⟳</button></p>`)
        const dial = c.querySelector('.cx-dial i'), sig = c.querySelector('.signal i')
        let turning = 0
        c.querySelectorAll('[data-turn]').forEach(b => {
          b.onpointerdown = () => { turning = +b.dataset.turn }
          b.onpointerup = b.onpointerleave = () => { turning = 0 }
        })
        let last = performance.now()
        const frame = now => {
          if (panel.hidden) return
          const dt = (now - last) / 1000
          last = now
          angle += turning * dt * 50
          const signal = Math.max(0, Math.cos((angle - target) * Math.PI / 180 * 1.5))
          dial.style.transform = `rotate(${angle}deg)`
          sig.style.width = `${signal * 100}%`
          good = signal > 0.96 ? good + dt : 0
          if (good > 0.8) { closePanel(); done(); return }
          requestAnimationFrame(frame)
        }
        requestAnimationFrame(frame)
      } else if (kind === 'balance') {
        let value = 88, held = 0, drift = 0
        const c = openPanel(`<h2>🍄 ${esc(title)}</h2><div class="cx-meter balance"><b></b><i></i></div><p>💧 <span class="cx-val"></span>%</p>
          <p><button data-d="-6">🌬️ −</button> <button data-d="6">💦 +</button></p>`)
        const mark = c.querySelector('.balance i'), val = c.querySelector('.cx-val')
        c.querySelectorAll('[data-d]').forEach(b => b.onclick = () => { value += +b.dataset.d })
        let last = performance.now()
        const frame = now => {
          if (panel.hidden) return
          const dt = (now - last) / 1000
          last = now
          drift += (Math.random() - 0.5) * dt * 6
          drift *= 0.98
          value = Math.max(20, Math.min(100, value + drift * dt * 8 + dt * 1.5))
          mark.style.left = `${value}%`
          val.textContent = Math.round(value)
          held = value > 50 && value < 70 ? held + dt : 0
          if (held > 3) { closePanel(); done(); return }
          requestAnimationFrame(frame)
        }
        requestAnimationFrame(frame)
      }
    },
  }
}
export {esc, ICON}
