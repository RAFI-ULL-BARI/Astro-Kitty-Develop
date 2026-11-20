// The real Mars calendar and sky maths.
// Mars time follows NASA GISS "Mars24" (Allison & McEwen 2000).
// Planet positions use NASA JPL "Approximate Positions of the Planets" (Standish), like backend/astrokitty/sky.py.
import {DEG, TAU} from './util.js'

const AU_KM = 149597870.7
const LIGHT_KM_S = 299792.458
const MARS_YEAR_SOLS = 668.5991
const OBLIQUITY = 25.19 * DEG // tilt of Mars, similar to Earth's 23.4

export const julianDay = date => date.getTime() / 86400000 + 2440587.5

const PERTURBERS = [
  [0.0071, 2.2353, 49.409], [0.0057, 2.7543, 168.173], [0.0039, 1.1177, 191.837],
  [0.0037, 15.7866, 21.736], [0.0021, 2.1354, 15.704], [0.0020, 2.4694, 95.528], [0.0018, 32.8493, 49.095],
]

function core(date) {
  const jdTT = julianDay(date) + 69.184 / 86400 // TT runs 69.184 s ahead of UTC
  const dt = jdTT - 2451545.0
  const M = (19.3871 + 0.52402073 * dt) * DEG
  const alpha = 270.3871 + 0.524038496 * dt
  const pbs = PERTURBERS.reduce((s, [a, tau, phi]) => s + a * Math.cos((0.985626 * dt / tau + phi) * DEG), 0)
  const center = (10.691 + 3.0e-7 * dt) * Math.sin(M) + 0.623 * Math.sin(2 * M) + 0.050 * Math.sin(3 * M)
    + 0.005 * Math.sin(4 * M) + 0.0005 * Math.sin(5 * M) + pbs
  const ls = (((alpha + center) % 360) + 360) % 360
  const msd = (jdTT - 2405522.0028779) / 1.0274912517
  return {ls, msd}
}

// Mars Year 38 began (Ls 0) on 12 November 2024 (Clancy et al. numbering).
const MY38_START = core(new Date(Date.UTC(2024, 10, 12, 12))).msd

const SEASONS = ['spring', 'summer', 'autumn', 'winter']
export function marsClock(date = new Date(), lonEast = 0) {
  const {ls, msd} = core(date)
  const mtc = ((msd % 1) + 1) % 1 * 24
  const lmst = (((mtc + lonEast / 15) % 24) + 24) % 24
  const sinceYearStart = (ls / 360) * MARS_YEAR_SOLS
  const marsYear = 38 + Math.round((msd - MY38_START - sinceYearStart) / MARS_YEAR_SOLS)
  const quarter = Math.floor(ls / 90) % 4
  return {
    ls, msd, sol: Math.floor(msd), mtc, lmst, marsYear,
    northernSeason: SEASONS[quarter],
    southernSeason: SEASONS[(quarter + 2) % 4],
    // Big dust storms mostly happen when Mars is closest to the Sun (southern spring and summer).
    dustSeason: ls >= 180 && ls <= 330,
  }
}

export function formatHours(hours) {
  const h = Math.floor(hours), m = Math.floor((hours - h) * 60)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

// Sun position for a place on Mars. Azimuth is measured from north, turning east.
export function sunPosition(lmstHours, latDeg, ls) {
  const dec = Math.asin(Math.sin(OBLIQUITY) * Math.sin(ls * DEG))
  const H = (lmstHours - 12) * 15 * DEG
  const lat = latDeg * DEG
  const elevation = Math.asin(Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.cos(H))
  const azimuth = Math.atan2(-Math.cos(dec) * Math.sin(H),
    Math.sin(dec) * Math.cos(lat) - Math.cos(dec) * Math.sin(lat) * Math.cos(H))
  return {elevation, azimuth: (azimuth + TAU) % TAU}
}

// Direction in the game world: north is -Z, east is +X, up is +Y.
export const skyDirection = (azimuth, elevation) => [
  Math.sin(azimuth) * Math.cos(elevation), Math.sin(elevation), -Math.cos(azimuth) * Math.cos(elevation),
]

const ELEMENTS = {
  earth: [[1.00000261, 0.00000562], [0.01671123, -0.00004392], [-0.00001531, -0.01294668],
    [100.46457166, 35999.37244981], [102.93768193, 0.32327364], [0, 0]],
  mars: [[1.52371034, 0.00001847], [0.09339410, 0.00007882], [1.84969142, -0.00813131],
    [-4.55343205, 19140.30268499], [-23.94362959, 0.44441088], [49.55953891, -0.29257343]],
}
function heliocentric(planet, jd) {
  const t = (jd - 2451545.0) / 36525
  const [a, e, inc, L, peri, node] = ELEMENTS[planet].map(([v, rate]) => v + rate * t)
  const w = (peri - node) * DEG
  const M = ((((L - peri) + 180) % 360 + 360) % 360 - 180) * DEG
  let E = M + e * Math.sin(M)
  for (let i = 0; i < 10; i++) E -= (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E))
  const xp = a * (Math.cos(E) - e), yp = a * Math.sqrt(1 - e * e) * Math.sin(E)
  const cw = Math.cos(w), sw = Math.sin(w), cn = Math.cos(node * DEG), sn = Math.sin(node * DEG)
  const ci = Math.cos(inc * DEG), si = Math.sin(inc * DEG)
  return [
    (cw * cn - sw * sn * ci) * xp + (-sw * cn - cw * sn * ci) * yp,
    (cw * sn + sw * cn * ci) * xp + (-sw * sn + cw * cn * ci) * yp,
    (sw * si) * xp + (cw * si) * yp,
  ]
}

// How far Earth is, how long radio takes, and how far Earth looks from the Sun in Mars' sky.
export function earthFromMars(date = new Date()) {
  const jd = julianDay(date)
  const e = heliocentric('earth', jd), m = heliocentric('mars', jd)
  const toEarth = e.map((v, i) => v - m[i]), toSun = m.map(v => -v)
  const len = v => Math.hypot(...v)
  const distance = len(toEarth)
  const cos = toEarth.reduce((s, v, i) => s + v * toSun[i], 0) / (distance * len(toSun))
  const km = distance * AU_KM
  return {km, lightMinutes: km / LIGHT_KM_S / 60, elongation: Math.acos(Math.max(-1, Math.min(1, cos))) / DEG}
}
