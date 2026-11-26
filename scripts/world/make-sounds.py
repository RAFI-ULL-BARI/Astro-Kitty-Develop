"""Make the 3D world sounds (Mars Colony and Mars Adventure) as ordinary WAV files.

    python3 scripts/world/make-sounds.py

Everything is rendered here from noise and simple physics-like recipes, then saved to
dist/world/audio/world/. Loops are seamless (they are built from whole cycles and filtered
in the frequency domain, which wraps around). The game only plays these files.
Mars air is thin, so outdoor sounds are soft and muffled: you mostly hear what travels
through your suit and boots.
"""
from __future__ import annotations

import wave
from pathlib import Path

import numpy as np

SR = 22050
OUT = Path(__file__).resolve().parents[2] / "dist" / "world" / "audio" / "world"
rng = np.random.default_rng(2026)


def t(seconds: float) -> np.ndarray:
    return np.arange(int(SR * seconds)) / SR


def spectral(x: np.ndarray, lo: float = 0, hi: float = SR / 2, slope: float = 0) -> np.ndarray:
    """Band-pass in the frequency domain (wraps around, so loops stay seamless). slope: dB/octave tilt."""
    spec = np.fft.rfft(x)
    f = np.fft.rfftfreq(len(x), 1 / SR)
    gain = np.ones_like(f)
    if lo > 0:
        gain *= 1 / (1 + (lo / np.maximum(f, 1e-3)) ** 4)
    if hi < SR / 2:
        gain *= 1 / (1 + (f / hi) ** 4)
    if slope:
        gain *= (np.maximum(f, 20) / 1000) ** (slope / 6.02)
    return np.fft.irfft(spec * gain, len(x))


def env(n: int, attack: float, decay: float, hold: float = 0) -> np.ndarray:
    tt = np.arange(n) / SR
    a = np.clip(tt / max(attack, 1e-4), 0, 1)
    d = np.exp(-np.maximum(tt - attack - hold, 0) / max(decay, 1e-4))
    return a * d


def place(buf: np.ndarray, x: np.ndarray, at: float, gain: float = 1):
    i = int(at * SR)
    j = min(len(buf), i + len(x))
    if i < len(buf):
        buf[i:j] += x[: j - i] * gain


def norm(x: np.ndarray, peak: float = 0.7) -> np.ndarray:
    m = np.max(np.abs(x))
    return x * (peak / m) if m > 0 else x


def fade(x: np.ndarray, ms_in: float = 2, ms_out: float = 20) -> np.ndarray:
    a, b = int(SR * ms_in / 1000), int(SR * ms_out / 1000)
    y = x.copy()
    if a:
        y[:a] *= np.linspace(0, 1, a)
    if b:
        y[-b:] *= np.linspace(1, 0, b)
    return y


def save(name: str, x: np.ndarray, loop: bool = False):
    x = np.clip(x, -1, 1)
    if not loop:
        x = fade(x)
    data = (x * 32767).astype("<i2").tobytes()
    with wave.open(str(OUT / f"{name}.wav"), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(data)


def thud(freq: float, length: float, decay: float, drop: float = 0.3) -> np.ndarray:
    tt = t(length)
    f = freq * (1 - drop * (1 - np.exp(-tt / decay)))
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(len(tt), 0.002, decay)


def grains(length: float, count: int, spread: float, lo: float, hi: float) -> np.ndarray:
    out = np.zeros(int(SR * length))
    for _ in range(count):
        g = rng.normal(0, 1, int(SR * rng.uniform(0.001, 0.005)))
        g *= np.hanning(len(g))
        place(out, g, rng.exponential(spread), rng.uniform(0.2, 1.0))
    return spectral(out, lo, hi)


def modes(freqs, decays, amps, length) -> np.ndarray:
    tt = t(length)
    x = np.zeros_like(tt)
    for f, d, a in zip(freqs, decays, amps):
        x += a * np.sin(2 * np.pi * f * tt + rng.uniform(0, 6.28)) * np.exp(-tt / d)
    return x


# --- footsteps ------------------------------------------------------------------------------------
def steps():
    for i in range(1, 5):
        # boots on Mars soil: a soft thud and a crunch of grit, muffled by the suit
        x = thud(rng.uniform(70, 95), 0.3, 0.05) * 0.8
        x += grains(0.3, rng.integers(70, 120), 0.04, 250, 3200) * 1.4
        save(f"step-sand-{i}", norm(spectral(x, 40, 2600), 0.55))
        # boots on the metal floor inside: a knock with ringing panels
        f0 = rng.uniform(0.95, 1.05)
        y = modes([210 * f0, 487 * f0, 905 * f0, 1410 * f0, 2230 * f0], [0.05, 0.04, 0.03, 0.022, 0.015], [0.6, 0.5, 0.35, 0.25, 0.15], 0.35)
        y += thud(115, 0.35, 0.035) * 0.9
        click = rng.normal(0, 1, int(SR * 0.004)) * np.hanning(int(SR * 0.004))
        place(y, spectral(np.pad(click, (0, 200)), 1500, 6000), 0, 0.8)
        save(f"step-metal-{i}", norm(spectral(y, 60, 5000), 0.5))


# --- machines and doors ------------------------------------------------------------------------
def clunk(scale: float = 1.0) -> np.ndarray:
    x = thud(85, 0.35, 0.06) + modes([310, 690, 1180], [0.06, 0.04, 0.025], [0.5, 0.3, 0.2], 0.35)
    return norm(spectral(x, 40, 4000), 0.8 * scale)


def airlock():
    length = 3.0
    x = np.zeros(int(SR * length))
    place(x, clunk(), 0.0)
    hiss = spectral(rng.normal(0, 1, int(SR * 2.4)), 900, 6500)
    tt = t(2.4)
    shape = np.clip(tt / 0.35, 0, 1) * np.clip((2.4 - tt) / 0.9, 0, 1) ** 1.5
    wobble = 1 + 0.15 * np.sin(2 * np.pi * 3.1 * tt)
    place(x, hiss * shape * wobble * 0.35, 0.15)
    place(x, clunk(0.9), 2.55)
    save("airlock", norm(x, 0.6))


def door():
    length = 1.1
    tt = t(0.85)
    f = 150 + 40 * tt
    phase = 2 * np.pi * np.cumsum(f) / SR
    motor = sum(np.sin(k * phase) / k for k in range(1, 9))
    motor = spectral(motor, 80, 900) * np.clip(tt / 0.08, 0, 1) * np.clip((0.85 - tt) / 0.1, 0, 1)
    slide = spectral(rng.normal(0, 1, len(tt)), 350, 1600) * 0.25 * np.clip(tt / 0.1, 0, 1) * np.clip((0.85 - tt) / 0.2, 0, 1)
    x = np.zeros(int(SR * length))
    place(x, motor * 0.4 + slide, 0)
    place(x, clunk(0.7), 0.82)
    save("door", norm(x, 0.5))


def seamless_noise(seconds: float) -> np.ndarray:
    return rng.normal(0, 1, int(SR * seconds))


def loops():
    # rover: electric drive motors and gearboxes (every frequency fits the loop exactly)
    L = 2.0
    tt = t(L)
    x = np.zeros_like(tt)
    for k, a in ((1, 1.0), (2, 0.6), (3, 0.35), (4, 0.25), (6, 0.12)):
        x += a * np.sin(2 * np.pi * 120 * k * tt)
    x += 0.08 * np.sin(2 * np.pi * 1840 * tt)
    gear = spectral(seamless_noise(L), 180, 900) * (0.6 + 0.4 * np.sin(2 * np.pi * 12 * tt)) * 0.9
    save("rover-loop", norm(spectral(x * 0.5, 60, 2500) + gear * 0.6, 0.45), loop=True)

    # drone: four little rotors, each a slightly different pitch
    x = np.zeros_like(tt)
    for f0 in (210, 214, 218, 223):
        ph = 2 * np.pi * f0 * tt + rng.uniform(0, 6.28)
        x += sum(np.sin(k * ph) / k for k in range(1, 9))
    air = spectral(seamless_noise(L), 300, 3000) * 0.5
    save("drone-loop", norm(spectral(x, 120, 2600) * 0.3 + air, 0.4), loop=True)

    # Mars wind: low and soft (the air is 100 times thinner than Earth's), with slow gusts
    L = 8.0
    tt = t(L)
    brown = spectral(seamless_noise(L), 30, 500, slope=-3)
    gust = 0.55 + 0.25 * np.sin(2 * np.pi * tt / 8 + 1) + 0.15 * np.sin(2 * np.pi * 3 * tt / 8 + 2) + 0.08 * np.sin(2 * np.pi * 5 * tt / 8)
    whistle = spectral(seamless_noise(L), 700, 1100) * (0.3 + 0.7 * np.clip(np.sin(2 * np.pi * 2 * tt / 8), 0, 1)) * 0.12
    save("wind-loop", norm(brown * gust + whistle, 0.5), loop=True)

    # life support hum: power at 50 Hz, a fan and a slow pump
    L = 4.0
    tt = t(L)
    hum = sum(a * np.sin(2 * np.pi * 50 * k * tt) for k, a in ((1, 0.5), (2, 1.0), (3, 0.4), (4, 0.25), (6, 0.1)))
    fan = spectral(seamless_noise(L), 120, 1400) * 0.6
    pump = 1 + 0.25 * np.sin(2 * np.pi * 1.0 * tt)
    save("hum-loop", norm((hum * 0.25 + fan) * pump, 0.4), loop=True)

    # greenhouse: trickling water and a soft fan
    drops = np.zeros(int(SR * L))
    for _ in range(90):
        f0 = rng.uniform(700, 1500)
        d = t(0.05)
        drop = np.sin(2 * np.pi * np.cumsum(f0 * (1 + 0.6 * d / 0.05)) / SR) * np.exp(-d / 0.012)
        place(drops, drop, rng.uniform(0, L - 0.06), rng.uniform(0.1, 0.5))
    fan = spectral(seamless_noise(L), 150, 1800) * 0.25
    save("water-loop", norm(drops + fan, 0.35), loop=True)


# --- one-shots -------------------------------------------------------------------------------------
def oneshots():
    # habitat alarm: two tones, a little muffled
    tt = t(1.4)
    f = np.where((tt % 0.7) < 0.35, 660, 550)
    sq = np.sign(np.sin(2 * np.pi * np.cumsum(f) / SR))
    save("alarm", norm(spectral(sq, 200, 2500) * np.clip((1.4 - tt) / 0.1, 0, 1), 0.45))

    # pick-up chime
    x = modes([1320, 1980, 2640, 3300], [0.25, 0.18, 0.12, 0.08], [0.6, 0.4, 0.25, 0.12], 0.7)
    x *= np.clip(t(0.7) / 0.004, 0, 1)
    save("pickup", norm(x, 0.45))

    # electric spark crackle
    x = np.zeros(int(SR * 0.45))
    for _ in range(40):
        g = rng.normal(0, 1, int(SR * 0.002)) * np.hanning(int(SR * 0.002))
        place(x, g, rng.exponential(0.08), rng.uniform(0.3, 1))
    save("spark", norm(spectral(x, 1800, 9000), 0.5))

    # landing thump
    x = thud(70, 0.4, 0.07) + grains(0.4, 80, 0.06, 300, 2500) * 0.8
    save("thump", norm(x, 0.6))

    # rocket: a deep rumble and a roar that fade away
    tt = t(4.0)
    rumble = spectral(rng.normal(0, 1, len(tt)), 25, 240, slope=-2)
    roar = spectral(rng.normal(0, 1, len(tt)), 300, 1500) * 0.3
    shape = np.clip(tt / 0.6, 0, 1) * np.exp(-np.maximum(tt - 1.2, 0) / 1.0)
    save("rocket", norm((rumble + roar) * shape, 0.7))

    # camera shutter: two mechanical clicks
    x = np.zeros(int(SR * 0.25))
    for at, g in ((0.0, 1.0), (0.09, 0.7)):
        c = rng.normal(0, 1, int(SR * 0.006)) * np.hanning(int(SR * 0.006))
        place(x, spectral(np.pad(c, (0, 300)), 1200, 7000) + modes([2400, 3900], [0.01, 0.006], [0.4, 0.2], 0.02)[: len(c) + 300], at, g)
    save("shutter", norm(x, 0.5))

    # building: a ratchet and a power tool whir
    x = np.zeros(int(SR * 1.3))
    for i in range(10):
        c = modes([1700, 2900], [0.008, 0.005], [0.5, 0.3], 0.03)
        place(x, c, 0.05 + i * 0.06, 0.8)
    tt = t(0.6)
    whir = sum(np.sin(2 * np.pi * 240 * k * tt) / k for k in range(1, 6)) * np.clip(tt / 0.05, 0, 1) * np.clip((0.6 - tt) / 0.15, 0, 1)
    place(x, spectral(whir, 100, 2200) * 0.25, 0.7)
    save("build", norm(x, 0.5))

    # console beep: a short confirm from a control panel
    tt = t(0.22)
    beep = np.where(tt < 0.09, np.sin(2 * np.pi * 1180 * tt), np.sin(2 * np.pi * 1580 * tt)) * np.clip((0.22 - tt) / 0.03, 0, 1)
    save("console", norm(spectral(beep, 300, 5000), 0.35))

    # ice drill working
    tt = t(1.6)
    drill = sum(np.sin(2 * np.pi * 95 * k * tt) / k for k in range(1, 10)) + spectral(rng.normal(0, 1, len(tt)), 400, 3000) * 0.8
    drill *= np.clip(tt / 0.1, 0, 1) * np.clip((1.6 - tt) / 0.2, 0, 1) * (0.8 + 0.2 * np.sin(2 * np.pi * 7 * tt))
    save("drill", norm(spectral(drill, 60, 3500), 0.45))


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    steps()
    airlock()
    door()
    loops()
    oneshots()
    files = sorted(OUT.glob("*.wav"))
    print(f"{len(files)} files, {sum(f.stat().st_size for f in files) / 1024:.0f} KB")
