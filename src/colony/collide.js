// 2D collision on the ground plane (x, z): walls are line segments, props are circles.
// A spatial grid keeps it fast even with hundreds of walls.
const CELL = 8

export class Collider {
  constructor() {
    this.grid = new Map()
    this.items = []
    this.disabled = new Set()
  }
  _cells(minX, minZ, maxX, maxZ, fn) {
    for (let i = Math.floor(minX / CELL); i <= Math.floor(maxX / CELL); i++)
      for (let j = Math.floor(minZ / CELL); j <= Math.floor(maxZ / CELL); j++) fn(`${i},${j}`)
  }
  _insert(item, minX, minZ, maxX, maxZ) {
    item.index = this.items.length
    this.items.push(item)
    this._cells(minX, minZ, maxX, maxZ, key => {
      if (!this.grid.has(key)) this.grid.set(key, [])
      this.grid.get(key).push(item)
    })
    return item
  }
  segment(ax, az, bx, bz, tag = null) {
    return this._insert({kind: 'seg', ax, az, bx, bz, tag},
      Math.min(ax, bx), Math.min(az, bz), Math.max(ax, bx), Math.max(az, bz))
  }
  circle(x, z, r, tag = null) {
    return this._insert({kind: 'circle', x, z, r, tag}, x - r, z - r, x + r, z + r)
  }
  // Tagged items (like doors) can be switched off and on.
  setEnabled(tag, on) {
    if (on) this.disabled.delete(tag)
    else this.disabled.add(tag)
  }
  near(x, z, r) {
    const found = new Set()
    this._cells(x - r, z - r, x + r, z + r, key => {
      for (const item of this.grid.get(key) ?? []) if (!this.disabled.has(item.tag)) found.add(item)
    })
    return found
  }
  // Push a circle out of everything it overlaps. Returns the corrected position.
  resolve(x, z, r) {
    for (let pass = 0; pass < 3; pass++) {
      let moved = false
      for (const item of this.near(x, z, r + 1)) {
        if (item.kind === 'circle') {
          const dx = x - item.x, dz = z - item.z, d = Math.hypot(dx, dz), min = r + item.r
          if (d < min && d > 1e-6) {
            x = item.x + dx / d * min
            z = item.z + dz / d * min
            moved = true
          }
        } else {
          const ex = item.bx - item.ax, ez = item.bz - item.az
          const len2 = ex * ex + ez * ez || 1
          const t = Math.max(0, Math.min(1, ((x - item.ax) * ex + (z - item.az) * ez) / len2))
          const px = item.ax + ex * t, pz = item.az + ez * t
          const dx = x - px, dz = z - pz, d = Math.hypot(dx, dz)
          if (d < r) {
            const nx = d > 1e-6 ? dx / d : -ez / Math.sqrt(len2), nz = d > 1e-6 ? dz / d : ex / Math.sqrt(len2)
            x = px + nx * r
            z = pz + nz * r
            moved = true
          }
        }
      }
      if (!moved) break
    }
    return {x, z}
  }
  // Fraction (0..1) along the line from (x0,z0) to (x1,z1) where the first wall is hit.
  raycast(x0, z0, x1, z1, pad = 0.25) {
    let best = 1
    const minX = Math.min(x0, x1) - pad, maxX = Math.max(x0, x1) + pad
    const minZ = Math.min(z0, z1) - pad, maxZ = Math.max(z0, z1) + pad
    const seen = new Set()
    this._cells(minX, minZ, maxX, maxZ, key => {
      for (const item of this.grid.get(key) ?? []) {
        if (seen.has(item) || this.disabled.has(item.tag) || item.kind !== 'seg') continue
        seen.add(item)
        const t = segmentHit(x0, z0, x1, z1, item.ax, item.az, item.bx, item.bz)
        if (t !== null && t < best) best = t
      }
    })
    return best
  }
}

export function segmentHit(px, pz, qx, qz, ax, az, bx, bz) {
  const rx = qx - px, rz = qz - pz, sx = bx - ax, sz = bz - az
  const denom = rx * sz - rz * sx
  if (Math.abs(denom) < 1e-9) return null
  const t = ((ax - px) * sz - (az - pz) * sx) / denom
  const u = ((ax - px) * rz - (az - pz) * rx) / denom
  return t >= 0 && t <= 1 && u >= 0 && u <= 1 ? t : null
}
