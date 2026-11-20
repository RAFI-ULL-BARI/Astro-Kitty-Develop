// All sounds are made in code (no downloads). Mars sounds are quieter because the air is so thin.
export function makeAudio() {
  let ctx = null, master = null, wind = null, windGain = null, hum = null, humGain = null, enabled = true
  const noiseBuffer = () => {
    const b = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate)
    const d = b.getChannelData(0)
    let last = 0
    for (let i = 0; i < d.length; i++) {
      last = last * 0.97 + (Math.random() * 2 - 1) * 0.03
      d[i] = last * 6
    }
    return b
  }
  function unlock() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    ctx = new AC()
    master = ctx.createGain()
    master.gain.value = enabled ? 0.8 : 0
    master.connect(ctx.destination)
    const buffer = noiseBuffer()
    wind = ctx.createBufferSource()
    wind.buffer = buffer
    wind.loop = true
    const band = ctx.createBiquadFilter()
    band.type = 'bandpass'
    band.frequency.value = 420
    band.Q.value = 0.6
    windGain = ctx.createGain()
    windGain.gain.value = 0
    wind.connect(band).connect(windGain).connect(master)
    wind.start()
    hum = ctx.createOscillator()
    hum.type = 'sine'
    hum.frequency.value = 58
    const hum2 = ctx.createOscillator()
    hum2.type = 'triangle'
    hum2.frequency.value = 117
    humGain = ctx.createGain()
    humGain.gain.value = 0
    hum.connect(humGain)
    hum2.connect(humGain)
    humGain.connect(master)
    hum.start()
    hum2.start()
  }
  function tone(freq, time, dur, type = 'sine', vol = 0.15, slide = 0) {
    if (!ctx || !enabled) return
    const o = ctx.createOscillator(), g = ctx.createGain()
    o.type = type
    o.frequency.setValueAtTime(freq, time)
    if (slide) o.frequency.linearRampToValueAtTime(freq + slide, time + dur)
    g.gain.setValueAtTime(0, time)
    g.gain.linearRampToValueAtTime(vol, time + 0.01)
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur)
    o.connect(g).connect(master)
    o.start(time)
    o.stop(time + dur + 0.05)
  }
  function burst(dur = 0.15, vol = 0.2, freq = 2500) {
    if (!ctx || !enabled) return
    const src = ctx.createBufferSource()
    src.buffer = noiseBuffer()
    const f = ctx.createBiquadFilter()
    f.type = 'highpass'
    f.frequency.value = freq
    const g = ctx.createGain()
    const t = ctx.currentTime
    g.gain.setValueAtTime(vol, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    src.connect(f).connect(g).connect(master)
    src.start(t)
    src.stop(t + dur + 0.05)
  }
  return {
    unlock,
    setEnabled(on) { enabled = on; if (master) master.gain.value = on ? 0.8 : 0 },
    get enabled() { return enabled },
    // indoors: 0..1, storm: 0..1, machine: 0..1 (how close to loud machines)
    ambience(indoors, storm, machine = 0) {
      if (!ctx) return
      const t = ctx.currentTime
      windGain.gain.setTargetAtTime((0.05 + storm * 0.3) * (1 - indoors * 0.85), t, 0.4)
      humGain.gain.setTargetAtTime(indoors * (0.025 + machine * 0.05), t, 0.4)
    },
    click() { if (ctx) tone(880, ctx.currentTime, 0.06, 'square', 0.05) },
    success() { if (ctx) [523, 659, 784, 1046].forEach((f, i) => tone(f, ctx.currentTime + i * 0.09, 0.25, 'triangle', 0.12)) },
    alarm() { if (ctx) for (let i = 0; i < 3; i++) tone(740, ctx.currentTime + i * 0.32, 0.18, 'square', 0.07, -160) },
    spark() { burst(0.12, 0.18, 3200) },
    hiss() { burst(0.6, 0.06, 4500) },
    thump() { if (ctx) tone(90, ctx.currentTime, 0.12, 'sine', 0.12, -40) },
    rocket() { burst(2.2, 0.12, 300) },
    door() { if (ctx) { tone(220, ctx.currentTime, 0.3, 'sawtooth', 0.03, 120); burst(0.5, 0.04, 1500) } },
    pickup() { if (ctx) [660, 990].forEach((f, i) => tone(f, ctx.currentTime + i * 0.07, 0.15, 'sine', 0.1)) },
  }
}
