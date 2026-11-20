// Keyboard, touch (joystick + drag to look) and gamepad, all turned into one simple input state.
export function makeInput(canvas, ui) {
  const keys = new Set()
  const state = {move: [0, 0], look: [0, 0], act: false, actPressed: false, jump: false, run: false, zoom: 0, up: 0}
  const pointers = new Map()
  let stick = null
  const presses = []
  const press = name => presses.push(name)

  addEventListener('keydown', e => {
    if (e.target.closest?.('input, textarea, select')) return
    const k = e.key.toLowerCase()
    if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) e.preventDefault()
    if (!keys.has(k)) {
      if (k === 'e' || k === 'enter') press('act')
      if (k === ' ') press('jump')
      for (const [key, name] of [['m', 'map'], ['b', 'build'], ['p', 'photo'], ['f', 'drone'], ['r', 'rover'], ['escape', 'menu']]) if (k === key) press(name)
    }
    keys.add(k)
  })
  addEventListener('keyup', e => keys.delete(e.key.toLowerCase()))
  addEventListener('blur', () => keys.clear())

  canvas.addEventListener('pointerdown', e => {
    canvas.setPointerCapture(e.pointerId)
    pointers.set(e.pointerId, {x: e.clientX, y: e.clientY})
  })
  canvas.addEventListener('pointermove', e => {
    const p = pointers.get(e.pointerId)
    if (!p) return
    state.look[0] += (e.clientX - p.x) * 0.006
    state.look[1] += (e.clientY - p.y) * 0.004
    p.x = e.clientX
    p.y = e.clientY
  })
  for (const type of ['pointerup', 'pointercancel']) canvas.addEventListener(type, e => pointers.delete(e.pointerId))
  canvas.addEventListener('wheel', e => { state.zoom += Math.sign(e.deltaY); e.preventDefault() }, {passive: false})

  // On-screen joystick for phones and tablets.
  const pad = ui.querySelector('[data-stick]')
  const knob = pad?.querySelector('span')
  if (pad) {
    pad.addEventListener('pointerdown', e => {
      pad.setPointerCapture(e.pointerId)
      const r = pad.getBoundingClientRect()
      stick = {id: e.pointerId, cx: r.left + r.width / 2, cy: r.top + r.height / 2, r: r.width / 2}
      moveStick(e)
    })
    pad.addEventListener('pointermove', e => { if (stick?.id === e.pointerId) moveStick(e) })
    for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) pad.addEventListener(type, () => {
      stick = null
      state.stick = [0, 0]
      if (knob) knob.style.transform = ''
    })
  }
  function moveStick(e) {
    let dx = (e.clientX - stick.cx) / stick.r, dy = (e.clientY - stick.cy) / stick.r
    const len = Math.hypot(dx, dy)
    if (len > 1) { dx /= len; dy /= len }
    state.stick = [dx, -dy]
    if (knob) knob.style.transform = `translate(${dx * 34}px, ${dy * 34}px)`
  }
  // Buttons: [data-press="act|jump|map|..."]; act and jump also report being held.
  ui.addEventListener('pointerdown', e => {
    const b = e.target.closest('[data-press]')
    if (!b) return
    e.preventDefault()
    const name = b.dataset.press
    press(name)
    if (name === 'act') state.holdAct = true
    if (name === 'jump') state.holdJump = true
    if (name === 'up') state.holdUp = true
    if (name === 'down') state.holdDown = true
  })
  const release = () => { state.holdAct = false; state.holdJump = false; state.holdUp = false; state.holdDown = false }
  ui.addEventListener('pointerup', release)
  ui.addEventListener('pointercancel', release)

  return {
    state,
    keys,
    take() { const list = presses.splice(0); return list },
    poll() {
      const k = name => keys.has(name)
      let x = (k('d') || k('arrowright') ? 1 : 0) - (k('a') || k('arrowleft') ? 1 : 0)
      let y = (k('w') || k('arrowup') ? 1 : 0) - (k('s') || k('arrowdown') ? 1 : 0)
      if (state.stick && (state.stick[0] || state.stick[1])) [x, y] = state.stick
      state.run = k('shift')
      state.act = k('e') || k('enter') || !!state.holdAct
      state.jump = k(' ') || !!state.holdJump
      state.up = (k(' ') || state.holdUp ? 1 : 0) - (k('shift') || k('c') || state.holdDown ? 1 : 0)
      // gamepad
      const gp = navigator.getGamepads?.().find(g => g)
      if (gp) {
        const dead = v => (Math.abs(v) < 0.18 ? 0 : v)
        if (dead(gp.axes[0]) || dead(gp.axes[1])) { x = dead(gp.axes[0]); y = -dead(gp.axes[1]) }
        state.look[0] += dead(gp.axes[2] ?? 0) * 0.05
        state.look[1] += dead(gp.axes[3] ?? 0) * 0.03
        if (gp.buttons[0]?.pressed) state.act = true
        if (gp.buttons[1]?.pressed) state.jump = true
        if (gp.buttons[0]?.pressed && !state.gpA) press('act')
        if (gp.buttons[1]?.pressed && !state.gpB) press('jump')
        if (gp.buttons[3]?.pressed && !state.gpY) press('map')
        if (gp.buttons[2]?.pressed && !state.gpX) press('drone')
        state.gpA = gp.buttons[0]?.pressed; state.gpB = gp.buttons[1]?.pressed
        state.gpX = gp.buttons[2]?.pressed; state.gpY = gp.buttons[3]?.pressed
      }
      state.move = [x, y]
      const look = state.look.slice()
      state.look[0] = state.look[1] = 0
      const zoom = state.zoom
      state.zoom = 0
      return {...state, look, zoom}
    },
  }
}
