"""Make the seamless surface textures for the 3D worlds (Mars Colony and Mars Adventure).

Every texture is generated from numbers here, so it is ours to use and can be remade:

    python3 scripts/world/make-textures.py

Each set has two files in dist/world/assets/tex/:
  <name>_albedo.webp  colour in RGB, roughness in the alpha channel
  <name>_normal.webp  tangent-space normal map (OpenGL style, +Y up)
"Detail" sets are nearly white and get multiplied with a material's own colour (so one
panel texture serves white walls and orange trim). The other sets carry their own colour.
All textures tile seamlessly in both directions.
"""
from __future__ import annotations

import json
import math
from pathlib import Path

import numpy as np
from PIL import Image

OUT = Path(__file__).resolve().parents[2] / "dist" / "world" / "assets" / "tex"
DETAIL_MEAN = 0.75  # mean linear brightness of detail textures; the shader multiplies by 1 / DETAIL_MEAN


# --- tileable noise ------------------------------------------------------------------
def perlin(size: int, period: int, rng: np.random.Generator, aspect: tuple[int, int] = (1, 1)) -> np.ndarray:
    """Gradient noise that tiles over `size` pixels, with `period` cells across (per axis * aspect)."""
    px, py = period * aspect[0], period * aspect[1]
    ang = rng.random((py, px)) * 2 * np.pi
    gx, gy = np.cos(ang), np.sin(ang)
    xs = np.arange(size) * px / size
    ys = np.arange(size) * py / size
    x0 = np.floor(xs).astype(int)
    y0 = np.floor(ys).astype(int)
    fx = (xs - x0)[None, :]
    fy = (ys - y0)[:, None]
    x1, y1 = (x0 + 1) % px, (y0 + 1) % py
    x0, y0 = x0 % px, y0 % py

    def dot(yi, xi, ox, oy):
        return gx[np.ix_(yi, xi)] * (fx - ox) + gy[np.ix_(yi, xi)] * (fy - oy)

    n00, n10 = dot(y0, x0, 0, 0), dot(y0, x1, 1, 0)
    n01, n11 = dot(y1, x0, 0, 1), dot(y1, x1, 1, 1)
    ux = fx * fx * fx * (fx * (fx * 6 - 15) + 10)
    uy = fy * fy * fy * (fy * (fy * 6 - 15) + 10)
    return (n00 * (1 - ux) + n10 * ux) * (1 - uy) + (n01 * (1 - ux) + n11 * ux) * uy  # about -0.7..0.7


def fbm(size, period, rng, octaves=5, gain=0.5, aspect=(1, 1)):
    total, amp, norm = np.zeros((size, size)), 1.0, 0.0
    for o in range(octaves):
        p = period * 2 ** o
        if p * max(aspect) > size // 2:
            break
        total += perlin(size, p, rng, aspect) * amp
        norm += amp
        amp *= gain
    return total / norm


def worley(size, period, rng):
    """Distance to the nearest and second-nearest random point (tileable), in cell units, plus cell ids."""
    pts = rng.random((period, period, 2))
    ids = rng.random((period, period))
    ys, xs = np.mgrid[0:size, 0:size] * (period / size)
    cx, cy = np.floor(xs).astype(int), np.floor(ys).astype(int)
    f1 = np.full((size, size), 9.0)
    f2 = np.full((size, size), 9.0)
    cid = np.zeros((size, size))
    for dy in (-1, 0, 1):
        for dx in (-1, 0, 1):
            nx, ny = cx + dx, cy + dy
            p = pts[ny % period, nx % period]
            d = np.hypot(nx + p[..., 0] - xs, ny + p[..., 1] - ys)
            closer = d < f1
            f2 = np.where(closer, f1, np.minimum(f2, d))
            cid = np.where(closer, ids[ny % period, nx % period], cid)
            f1 = np.where(closer, d, f1)
    return f1, f2, cid


def smoothstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


def normal_map(height: np.ndarray, strength: float) -> np.ndarray:
    dx = (np.roll(height, -1, axis=1) - np.roll(height, 1, axis=1)) * 0.5
    dy = (np.roll(height, -1, axis=0) - np.roll(height, 1, axis=0)) * 0.5
    n = np.dstack([-dx * strength, dy * strength, np.ones_like(height)])
    n /= np.linalg.norm(n, axis=2, keepdims=True)
    return np.clip((n * 0.5 + 0.5) * 255 + 0.5, 0, 255).astype(np.uint8)


def to_srgb(linear):
    linear = np.clip(linear, 0, 1)
    return np.where(linear <= 0.0031308, linear * 12.92, 1.055 * np.power(linear, 1 / 2.4) - 0.055)


def to_linear(srgb):
    srgb = np.clip(srgb, 0, 1)
    return np.where(srgb <= 0.04045, srgb / 12.92, np.power((srgb + 0.055) / 1.055, 2.4))


def save(name: str, albedo_srgb: np.ndarray, rough: np.ndarray, height: np.ndarray, strength: float,
         detail: bool, manifest: dict, quality: int = 86, normal_quality: int = 84):
    if detail:  # rescale so the mean linear brightness is DETAIL_MEAN: materials keep their colour on average
        lin = to_linear(albedo_srgb)
        lin *= DETAIL_MEAN / lin.mean()
        albedo_srgb = to_srgb(lin)
    rgba = np.dstack([albedo_srgb, np.clip(rough, 0.02, 1)])
    Image.fromarray((rgba * 255 + 0.5).astype(np.uint8), "RGBA").save(OUT / f"{name}_albedo.webp", quality=quality, method=6)
    Image.fromarray(normal_map(height, strength), "RGB").save(OUT / f"{name}_normal.webp", quality=normal_quality, method=6)
    manifest[name] = {"detail": detail, "size": albedo_srgb.shape[0]}


def tint(base, var):
    """base: (r,g,b) in 0..1 sRGB; var: HxW multiplier -> HxWx3."""
    return np.clip(np.dstack([var * base[0], var * base[1], var * base[2]]), 0, 1)


# --- the sets --------------------------------------------------------------------------
def regolith(manifest):
    """Mars soil: fine dust and sand, dark basalt grains, angular pebbles and a few stones. Tile = 2.5 m."""
    s, rng = 1024, np.random.default_rng(11)
    sand = fbm(s, 96, rng, 3)
    grains = perlin(s, 256, rng)
    dust = smoothstep(-0.1, 0.35, fbm(s, 3, rng, 4))
    ripple_warp = fbm(s, 4, rng, 3)
    ys, xs = np.mgrid[0:s, 0:s] / s
    ripples = np.sin((ys * 24 + ripple_warp * 1.6 + xs * 1) * 2 * np.pi) * 0.5 + 0.5
    height = sand * 0.3 + grains * 0.05 + ripples * 0.12 * (1 - dust * 0.6)
    value = 0.86 + sand * 0.06 + grains * 0.05 + dust * 0.05
    color = tint((1.0, 0.97, 0.94), value)
    rough = 0.94 + dust * 0.05 + grains * 0.02
    # pebbles at three sizes: irregular outlines (noise-bent edges), many tones, half buried in dust
    for period, density, radius, lift, seed in ((48, 0.16, 0.34, 0.45, 1), (16, 0.1, 0.3, 0.8, 2), (6, 0.1, 0.24, 1.2, 3)):
        f1, f2, cid = worley(s, period, rng)
        wobble = perlin(s, period * 4, rng) * 0.7 + perlin(s, period * 8, rng) * 0.35
        r = radius * (0.5 + (cid * 7.31 % 1) * 0.6) * (1 + wobble)
        inside = (cid < density) & (f1 < r)
        bump = np.where(inside, np.clip(1 - (f1 / np.maximum(r, 1e-3)) ** 2, 0, 1) ** 0.6, 0)
        facets = perlin(s, period * 3, rng) * 0.25
        height = height + (bump + facets * inside) * lift
        tone = cid * 13.7 % 1
        stone = np.where((tone < 0.5)[..., None], np.array([0.62, 0.6, 0.6]), np.where((tone < 0.8)[..., None], np.array([0.78, 0.7, 0.64]), np.array([0.95, 0.88, 0.8])))
        shade = (0.82 + 0.18 * bump + facets * 0.3)[..., None]
        mix = smoothstep(0.0, 0.35, bump)[..., None] * inside[..., None]
        color = color * (1 - mix) + stone * shade * (0.92 + 0.08 * (cid[..., None] * 3.1 % 1)) * mix
        rough = np.where(inside, 0.82 + (cid * 5.3 % 1) * 0.1, rough)
    save("regolith", color, rough, height, 22, True, manifest)


def rock(manifest):
    """Basalt boulders: grey-brown, pitted with gas holes, a few cracks, orange dust in the hollows. Tile = 1.2 m."""
    s, rng = 512, np.random.default_rng(23)
    base = fbm(s, 4, rng, 6, 0.55)
    ridged = 1 - np.abs(fbm(s, 6, rng, 5))
    f1, f2, _ = worley(s, 5, rng)
    crack_mask = smoothstep(0.1, 0.4, fbm(s, 3, rng, 3))
    cracks = smoothstep(0.035, 0.0, f2 - f1 + perlin(s, 48, rng) * 0.03) * crack_mask
    v1, _, vid = worley(s, 48, rng)
    holes = np.where(vid < 0.3, smoothstep(0.24, 0.1, v1), 0)
    height = base * 0.9 + ridged * 0.4 - cracks * 0.5 - holes * 0.45
    hollows = smoothstep(0.05, -0.3, base + ridged * 0.15)
    grain = perlin(s, 256, rng)
    patches = fbm(s, 2, rng, 4)
    col = tint((0.34, 0.31, 0.29), 1 + base * 0.6 + ridged * 0.25 + grain * 0.15 + patches * 0.35 - holes * 0.25)
    dust = np.clip(hollows * 0.9 + holes * 0.5 + cracks * 0.4, 0, 1)[..., None] * (0.45 + 0.55 * smoothstep(-0.3, 0.3, fbm(s, 2, rng, 3)))[..., None]
    col = col * (1 - dust) + np.array([0.66, 0.43, 0.31]) * dust * (0.9 + grain[..., None] * 0.2)
    rough = 0.86 + grain * 0.06 + hollows * 0.06
    save("rock", col, rough, height, 8, False, manifest)


def panel(manifest):
    """Habitat hull: composite panels with seams, rivets and the odd access hatch. Tile = 2.4 m."""
    s, rng = 1024, np.random.default_rng(37)
    ys, xs = np.mgrid[0:s, 0:s] / s
    cols, rows = 2, 4  # panels 1.2 m x 0.6 m
    u, v = xs * cols, ys * rows
    pu, pv = np.floor(u).astype(int), np.floor(v).astype(int)
    fu, fv = u - pu, v - pv
    edge = np.minimum(np.minimum(fu, 1 - fu) * 1.2, np.minimum(fv, 1 - fv) * 0.6)  # metres to the nearest seam
    seam = smoothstep(0.006, 0.0025, edge)
    bevel = smoothstep(0.0025, 0.02, edge)
    panel_id = (pu * 7 + pv * 13) % 23 / 23
    rivet = np.zeros((s, s))
    for spacing, inset in ((0.1, 0.022),):
        along_u = (fu * 1.2) % spacing - spacing / 2
        along_v = (fv * 0.6) % spacing - spacing / 2
        for dist_edge, along in ((np.minimum(fv, 1 - fv) * 0.6, along_u), (np.minimum(fu, 1 - fu) * 1.2, along_v)):
            d = np.hypot(dist_edge - inset, along)
            rivet = np.maximum(rivet, smoothstep(0.009, 0.004, d))
    # an access hatch on a few panels
    hatch = np.zeros((s, s))
    hx, hy = np.abs(fu - 0.5) * 1.2, np.abs(fv - 0.5) * 0.6
    is_hatch = (panel_id > 0.8)
    box = np.maximum(hx / 0.16, hy / 0.11)
    hatch = np.where(is_hatch, smoothstep(0.03, 0.0, np.abs(box - 1)) * 1.0, 0)
    mottle = fbm(s, 3, rng, 4)
    fine = perlin(s, 256, rng)
    height = bevel * 0.6 - seam * 0.6 + rivet * 0.5 - hatch * 0.35 + fine * 0.01
    value = 0.93 + mottle * 0.03 + fine * 0.012 + (panel_id - 0.5) * 0.035 - seam * 0.3 - hatch * 0.18 + rivet * 0.02
    color = tint((1.0, 0.995, 0.985), value)
    rough = 0.5 + (panel_id - 0.5) * 0.12 + mottle * 0.08 + seam * 0.3 - rivet * 0.15
    save("panel", color, rough, height, 6, True, manifest)


def metal(manifest):
    """Brushed aluminium with fine streaks and a few scratches. Tile = 1 m."""
    s, rng = 512, np.random.default_rng(41)
    streak = fbm(s, 2, rng, 6, 0.6, aspect=(1, 32))
    fine = perlin(s, 4, rng, aspect=(1, 128))
    scratches = np.zeros((s, s))
    yy, xx = np.mgrid[0:s, 0:s]
    for _ in range(26):
        x0, y0, a = rng.random() * s, rng.random() * s, rng.normal(0, 0.5)
        dx, dy = np.cos(a), np.sin(a)
        rx, ry = (xx - x0 + s / 2) % s - s / 2, (yy - y0 + s / 2) % s - s / 2
        along, across = rx * dx + ry * dy, -rx * dy + ry * dx
        length = 20 + rng.random() * 90
        scratches = np.maximum(scratches, (np.abs(across) < 0.7) * (np.abs(along) < length) * (0.4 + rng.random() * 0.6))
    height = streak * 0.3 + fine * 0.15 - scratches * 0.4
    value = 0.9 + streak * 0.05 + fine * 0.04 + scratches * 0.06
    color = tint((1.0, 1.0, 1.0), value)
    rough = 0.36 + streak * 0.12 + fine * 0.08 - scratches * 0.12
    save("metal", color, rough, height, 3, True, manifest)


def printed(manifest):
    """3D-printed regolith walls: layer upon layer of extruded Mars concrete. Tile = 1 m, 40 layers."""
    s, rng = 512, np.random.default_rng(53)
    ys, xs = np.mgrid[0:s, 0:s] / s
    layers = 40
    wave = fbm(s, 2, rng, 3) * 0.25
    t = ys * layers + wave
    idx = np.floor(t).astype(int) % layers
    f = t - np.floor(t)
    bead = np.sqrt(np.clip(1 - (2 * f - 1) ** 2, 0, 1))
    layer_tone = (np.random.default_rng(5).random(layers) - 0.5)[idx]
    grain = perlin(s, 256, rng)
    lumps = fbm(s, 16, rng, 3)
    height = bead * 1.0 + grain * 0.12 + lumps * 0.15
    value = 0.95 + layer_tone * 0.08 + grain * 0.06 + lumps * 0.05 - (1 - bead) * 0.18
    color = tint((0.68, 0.49, 0.39), value)
    rough = 0.93 + grain * 0.05
    save("printed", color, rough, height, 14, False, manifest)


def fabric(manifest):
    """Quilted insulation blanket (beta cloth over MLI) with diamond stitching. Tile = 0.8 m."""
    s, rng = 512, np.random.default_rng(61)
    ys, xs = np.mgrid[0:s, 0:s] / s
    k = 8  # stitch lines per tile
    a = ((xs + ys) * k) % 1
    b = ((xs - ys) * k) % 1
    d = np.minimum(np.minimum(a, 1 - a), np.minimum(b, 1 - b))
    puff = np.sqrt(np.clip(d * 2, 0, 1))
    stitch = smoothstep(0.03, 0.0, d)
    weave = (np.sin(xs * s * np.pi * 0.5) * np.sin(ys * s * np.pi * 0.5)) * 0.5
    wrinkle = fbm(s, 4, rng, 4)
    height = puff * 0.9 - stitch * 0.3 + weave * 0.03 + wrinkle * 0.25
    value = 0.95 - stitch * 0.12 + wrinkle * 0.03 + weave * 0.01
    color = tint((1.0, 0.995, 0.985), value)
    rough = 0.82 + wrinkle * 0.05 + stitch * 0.08
    save("fabric", color, rough, height, 7, True, manifest)


def cloth(manifest):
    """Spacesuit fabric: fine rip-stop weave with reinforcement threads. Tile = 0.25 m."""
    s, rng = 512, np.random.default_rng(67)
    ys, xs = np.mgrid[0:s, 0:s] / s
    threads = 64
    wx = np.sin(xs * threads * 2 * np.pi)
    wy = np.sin(ys * threads * 2 * np.pi)
    checker = np.sign(np.sin(xs * threads * np.pi) * np.sin(ys * threads * np.pi))
    weave = np.where(checker > 0, wx, wy) * 0.5 + 0.5
    rip = np.maximum(smoothstep(0.012, 0.0, np.abs((xs * 8) % 1 - 0.5) - 0.48), smoothstep(0.012, 0.0, np.abs((ys * 8) % 1 - 0.5) - 0.48))
    soft = fbm(s, 2, rng, 4)
    height = weave * 0.35 + rip * 0.4 + soft * 0.4
    value = 0.94 + weave * 0.03 - rip * 0.03 + soft * 0.03
    color = tint((1.0, 0.99, 0.975), value)
    rough = 0.86 + weave * 0.05
    save("cloth", color, rough, height, 5, True, manifest)


def plate(manifest):
    """Diamond tread plate for floors and ramps. Tile = 0.6 m."""
    s, rng = 512, np.random.default_rng(71)
    ys, xs = np.mgrid[0:s, 0:s] / s
    n = 10
    u, v = xs * n, ys * n
    cu, cv = np.floor(u), np.floor(v)
    fu, fv = u - cu - 0.5, v - cv - 0.5
    flip = ((cu + cv) % 2) * 2 - 1
    c, sn = np.cos(np.pi / 4 * flip), np.sin(np.pi / 4 * flip)
    ru, rv = fu * c - fv * sn, fu * sn + fv * c
    lens = np.clip(1 - (ru / 0.36) ** 2 - (rv / 0.09) ** 2, 0, 1)
    raised = np.sqrt(lens)
    grime = fbm(s, 4, rng, 4)
    wear = perlin(s, 128, rng)
    height = raised * 1.0 + wear * 0.05
    value = 0.82 + raised * 0.1 + grime * 0.05 + wear * 0.02 - (1 - raised) * smoothstep(-0.1, 0.4, grime) * 0.12
    color = tint((1.0, 1.0, 1.0), value)
    rough = 0.48 - raised * 0.16 + grime * 0.1
    save("plate", color, rough, height, 7, True, manifest)


def rubber(manifest):
    s, rng = 256, np.random.default_rng(79)
    n = fbm(s, 16, rng, 4)
    height = n
    color = tint((1.0, 1.0, 1.0), 0.9 + n * 0.08)
    rough = 0.88 + n * 0.05
    save("rubber", color, rough, height, 4, True, manifest)


def soil(manifest):
    """Greenhouse growing soil: dark crumbly earth with white perlite. Tile = 0.6 m."""
    s, rng = 512, np.random.default_rng(83)
    f1, f2, cid = worley(s, 48, rng)
    clumps = np.sqrt(np.clip(1 - f1 / 0.7, 0, 1))
    fine = perlin(s, 256, rng)
    big = fbm(s, 4, rng, 4)
    height = clumps * 0.6 + fine * 0.2 + big * 0.3
    color = tint((0.27, 0.18, 0.13), 0.9 + clumps * 0.2 + fine * 0.12 + big * 0.1)
    p1, _, pid = worley(s, 60, rng)
    perlite = (pid < 0.08) & (p1 < 0.25)
    color[perlite] = np.array([0.86, 0.84, 0.8])
    height = height + perlite * 0.4
    rough = 0.95 - perlite * 0.2
    save("soil", color, rough, height, 8, False, manifest)


def fur(manifest):
    """Short fur: fine strands running one way. Tile = 0.12 m."""
    s, rng = 256, np.random.default_rng(89)
    strands = fbm(s, 6, rng, 4, 0.6, aspect=(8, 1))
    clump = fbm(s, 4, rng, 3)
    height = strands * 0.8 + clump * 0.3
    color = tint((1.0, 1.0, 1.0), 0.92 + strands * 0.08 + clump * 0.05)
    rough = 0.7 + strands * 0.1
    save("fur", color, rough, height, 5, True, manifest)


def grime(manifest):
    """Shared mask (linear data): R = dust blotches, G = vertical streaks, B = speckles. Tile = 4 m."""
    s, rng = 512, np.random.default_rng(97)
    r = smoothstep(-0.35, 0.45, fbm(s, 3, rng, 5))
    g = smoothstep(-0.2, 0.6, fbm(s, 3, rng, 4, 0.55, aspect=(8, 1)))
    b = smoothstep(-0.1, 0.5, perlin(s, 96, rng) + perlin(s, 192, rng) * 0.5)
    img = np.dstack([r, g, b])
    Image.fromarray((img * 255 + 0.5).astype(np.uint8), "RGB").save(OUT / "grime.webp", quality=88, method=6)
    manifest["grime"] = {"detail": False, "size": s}


def solar(manifest):
    """A whole solar panel, UV-mapped: 12 x 6 polycrystalline cells with silver busbars. Alpha = roughness."""
    w, h, rng = 1024, 512, np.random.default_rng(101)
    ys, xs = np.mgrid[0:h, 0:w]
    cx, cy = 12, 6
    cw, ch = w / cx, h / cy
    fu, fv = (xs % cw) / cw, (ys % ch) / ch
    gap = (fu < 0.03) | (fu > 0.97) | (fv < 0.03) | (fv > 0.97)
    cell_id = (xs // cw) * 7 + (ys // ch) * 3
    flakes = np.zeros((h, w))
    for period in (12, 24, 48):
        f1, f2, cid = worley(w, period, rng)
        flakes += (cid[:h, :w] - 0.5) * (0.5 if period == 12 else 0.3)
    blue = np.dstack([0.06 + flakes * 0.04, 0.10 + flakes * 0.06, 0.26 + flakes * 0.1]) * (0.9 + (cell_id % 5)[..., None] * 0.03)
    finger = (np.abs((fv * 40) % 1 - 0.5) > 0.47)
    busbar = np.zeros((h, w), bool)
    for b in (0.25, 0.5, 0.75):
        busbar |= np.abs(fu - b) < 0.008
    color = blue.copy()
    color[finger] = color[finger] * 0.6 + 0.25
    color[busbar] = np.array([0.78, 0.8, 0.84])
    color[gap] = np.array([0.82, 0.83, 0.86])
    rough = np.where(gap, 0.4, 0.12)
    rough = np.where(busbar, 0.25, rough)
    height = np.where(gap, -0.5, 0.0) + np.where(busbar, 0.4, 0) + finger * 0.1
    rgba = np.dstack([np.clip(color, 0, 1), rough])
    Image.fromarray((rgba * 255 + 0.5).astype(np.uint8), "RGBA").save(OUT / "solar_albedo.webp", quality=90, method=6)
    dx = (np.roll(height, -1, 1) - np.roll(height, 1, 1)) * 0.5
    dy = (np.roll(height, -1, 0) - np.roll(height, 1, 0)) * 0.5
    n = np.dstack([-dx * 3, dy * 3, np.ones_like(height)])
    n /= np.linalg.norm(n, axis=2, keepdims=True)
    Image.fromarray(((n * 0.5 + 0.5) * 255 + 0.5).astype(np.uint8), "RGB").save(OUT / "solar_normal.webp", quality=92, method=6)
    manifest["solar"] = {"detail": False, "size": w}


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    manifest: dict = {}
    for make in (regolith, rock, panel, metal, printed, fabric, cloth, plate, rubber, soil, fur, grime, solar):
        make(manifest)
        print("made", make.__name__)
    manifest["detailMean"] = DETAIL_MEAN
    (OUT / "textures.json").write_text(json.dumps(manifest, indent=1) + "\n")
    total = sum(f.stat().st_size for f in OUT.glob("*.webp"))
    print(f"{len(list(OUT.glob('*.webp')))} files, {total / 1024:.0f} KB")
