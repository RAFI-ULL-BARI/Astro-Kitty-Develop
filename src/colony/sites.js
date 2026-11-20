// Places on Mars you can visit. Each has its own ground shape, colours, real facts and challenges.
// The ground is shaped from real measurements but drawn by maths (no elevation download needed);
// backend/astrokitty/terrain.py can turn real NASA elevation maps into heightmaps later.
import {fbm, ridged, smooth, clamp, noise, lerp} from './util.js'

const terrace = (h, step, sharp = 0.75) => {
  const k = Math.floor(h / step), f = h / step - k
  return (k + smooth(sharp * 0.5, 1 - sharp * 0.5, f)) * step
}

export const SITES = {
  home: {
    name: {en: 'Home Base · Arcadia Planitia', bn: 'হোম বেস · আর্কাডিয়া প্ল্যানিশিয়া'}, lat: 47.2, lon: 184,
    gravity: 3.71, sky: 'mars', size: 330, palette: ['#6f4337', '#b67b5c', '#8a6a5f'],
    fact: {en: 'NASA maps show water ice buried just under the ground here. That makes it a top pick for the first human base.',
      bn: 'নাসার মানচিত্র দেখায়, এখানে মাটির ঠিক নিচে বরফ আছে। তাই প্রথম মানুষের ঘাঁটির জন্য এটা সেরা জায়গাগুলোর একটা।'},
    source: 'https://science.nasa.gov/resource/swim-map-shows-subsurface-water-ice-on-mars/',
    spawn: {x: -13, z: 15},
    height(x, z) {
      const r = Math.hypot(x, z)
      const flat = smooth(80, 125, r)
      const rolling = fbm(x / 70, z / 70, 11) * 4 + fbm(x / 20, z / 20, 12) * 0.7
      const hills = ridged(x / 90, z / 90, 13) * 16 * smooth(120, 165, r)
      return lerp(fbm(x / 30, z / 30, 14) * 0.25, rolling + hills, flat)
    },
  },
  jezero: {
    name: {en: 'Jezero Crater', bn: 'জেজেরো খাদ'}, lat: 18.4, lon: 77.5, gravity: 3.71, sky: 'mars', size: 300,
    palette: ['#6a4a40', '#b98b6c', '#8f7468'], difficulty: 1,
    fact: {en: 'Billions of years ago a river flowed into a lake here and built a delta. Perseverance left 10 sample tubes on the ground at a spot called Three Forks.',
      bn: 'শত কোটি বছর আগে এখানে একটা নদী হ্রদে পড়ে বদ্বীপ তৈরি করেছিল। পারসিভিয়ারেন্স থ্রি ফর্কস নামের জায়গায় মাটিতে ১০টা নমুনার টিউব রেখে গেছে।'},
    source: 'https://science.nasa.gov/mission/mars-2020-perseverance/',
    spawn: {x: 0, z: 40},
    height(x, z) {
      // A fan-shaped delta rises in the north, cut by an old river channel.
      const fan = smooth(10, -40, z) * smooth(110, 40, Math.abs(x + z * 0.3))
      const channel = Math.exp(-((x + 0.25 * z + 8 * Math.sin(z / 18)) ** 2) / 40) * smooth(0, -30, z)
      const delta = terrace(fan * 14 + fbm(x / 25, z / 25, 21) * 2, 3.2) - channel * 5
      const rim = smooth(120, 150, Math.hypot(x, z - 60)) * 30
      return delta + fbm(x / 12, z / 12, 22) * 0.6 + rim
    },
    landmarks: [{type: 'perseverance', x: 18, z: 4, rot: -0.6}, {type: 'tubes', x: -14, z: 18}, {type: 'ingenuity', x: 30, z: -12}],
    pool: ['tubes', 'samples', 'visit:perseverance', 'scan:delta'],
  },
  gale: {
    name: {en: 'Gale Crater · Mount Sharp', bn: 'গেল খাদ · মাউন্ট শার্প'}, lat: -5.4, lon: 137.8, gravity: 3.71, sky: 'mars', size: 300,
    palette: ['#5b3c34', '#c08a66', '#9a7a6d'], difficulty: 2,
    fact: {en: 'Mount Sharp is a mountain made of stacked rock layers, like pages in a history book. Curiosity has been climbing it since 2014.',
      bn: 'মাউন্ট শার্প স্তরে স্তরে সাজানো পাথরের পাহাড়, যেন ইতিহাস বইয়ের পাতা। কিউরিওসিটি ২০১৪ সাল থেকে এতে উঠছে।'},
    source: 'https://science.nasa.gov/mission/msl-curiosity/',
    spawn: {x: -40, z: 40},
    height(x, z) {
      const d = Math.hypot(x - 70, z + 70)
      const mound = smooth(160, 20, d) * 46
      const layered = terrace(mound + fbm(x / 30, z / 30, 31) * 2.5, 2.6, 0.65)
      const dunes = Math.exp(-((d - 95) ** 2) / 300) * (1.4 + Math.sin(x * 0.32 + z * 0.12) * 1.1)
      return layered + dunes + fbm(x / 10, z / 10, 32) * 0.5
    },
    landmarks: [{type: 'curiosity', x: 10, z: -2, rot: 0.8}],
    pool: ['samples', 'scan:layers', 'visit:curiosity', 'summit'],
  },
  olympus: {
    name: {en: 'Olympus Mons', bn: 'অলিম্পাস মনস'}, lat: 18.65, lon: 226.2, gravity: 3.71, sky: 'thin', size: 320,
    palette: ['#5a3a35', '#a3735f', '#7d6058'], difficulty: 2,
    fact: {en: 'The tallest volcano in the solar system: about 22 km high, but 600 km wide, so its slopes are gentle. Up here the sky is darker because the air is so thin.',
      bn: 'সৌরজগতের সবচেয়ে উঁচু আগ্নেয়গিরি: প্রায় ২২ কিমি উঁচু, কিন্তু ৬০০ কিমি চওড়া, তাই ঢাল খুব কম। এখানে বাতাস এত পাতলা যে আকাশ বেশি গাঢ়।'},
    source: 'https://science.nasa.gov/mars/facts/',
    spawn: {x: 80, z: 0},
    height(x, z) {
      const slope = -x * 0.08
      const caldera = Math.hypot(x + 95, z + 10)
      const pit = -smooth(70, 40, caldera) * 28
      const walls = terrace(pit, 5, 0.5) * smooth(30, 45, caldera) + pit * smooth(45, 30, caldera)
      return slope + walls + fbm(x / 20, z / 20, 41) * 1.2 + ridged(x / 40, z / 40, 42) * 2
    },
    pool: ['summit', 'samples', 'scan:caldera'],
  },
  valles: {
    name: {en: 'Valles Marineris', bn: 'ভ্যালেস মেরিনারিস'}, lat: -13.9, lon: 300.8, gravity: 3.71, sky: 'mars', size: 320,
    palette: ['#5d3d38', '#b37d61', '#8b675c'], difficulty: 3,
    fact: {en: 'A giant canyon about 4,000 km long and up to 7 km deep. Its walls show many layers of old rock, and huge landslides have tumbled down them.',
      bn: 'প্রায় ৪,০০০ কিমি লম্বা আর ৭ কিমি পর্যন্ত গভীর বিশাল গিরিখাত। এর দেয়ালে পুরোনো পাথরের অনেক স্তর, আর বিশাল ভূমিধস নেমেছে।'},
    source: 'https://science.nasa.gov/mars/facts/',
    spawn: {x: -60, z: 0},
    height(x, z) {
      const wall = smooth(28, 70, Math.abs(z + Math.sin(x / 40) * 10))
      const cliff = terrace(wall * 62 + fbm(x / 25, z / 25, 51) * 4, 7, 0.55)
      const slide = Math.exp(-(((x - 30) ** 2) / 500 + ((z - 30) ** 2) / 200)) * 9
      return cliff + slide + fbm(x / 9, z / 9, 52) * 0.5
    },
    hazards: ['rockfall'],
    pool: ['samples', 'scan:layers', 'meteorite'],
  },
  arsia: {
    name: {en: 'Arsia Mons · cave skylight', bn: 'আর্সিয়া মনস · গুহার মুখ'}, lat: -9.1, lon: 239.5, gravity: 3.71, sky: 'thin', size: 300,
    palette: ['#4e3532', '#8f6555', '#5f4a45'], difficulty: 3,
    fact: {en: 'Orbiters have spotted deep round pits on the sides of volcanoes like Arsia Mons. They may be skylights into lava tube caves, which could one day shelter explorers.',
      bn: 'অরবিটার আর্সিয়া মনসের মতো আগ্নেয়গিরির গায়ে গভীর গোল গর্ত দেখেছে। এগুলো লাভা-সুড়ঙ্গ গুহার জানালা হতে পারে, যা একদিন অভিযাত্রীদের আশ্রয় দিতে পারে।'},
    source: 'https://science.nasa.gov/mission/mars-odyssey/',
    spawn: {x: -50, z: 30},
    cave: {x: 35, z: -10, r: 9, depth: 16, length: 46, angle: 0.15},
    height(x, z) {
      const flow = Math.sin(x / 28 + fbm(x / 60, z / 60, 61) * 3) * 1.2
      const channel = -Math.exp(-((z - 20 - 12 * Math.sin(x / 35)) ** 2) / 30) * 3
      const pitDist = Math.hypot(x - 35, z + 10)
      const pit = -smooth(10.5, 8.5, pitDist) * 16
      // A ramp of fallen rock leads down into the pit from the south-west.
      const ramp = Math.max(0, 1 - Math.hypot(x - 29, z + 3) / 11) * smooth(8.5, 10.5, pitDist + 3) * 9
      return flow + channel + Math.min(0, pit + ramp) + fbm(x / 14, z / 14, 62) * 0.8
    },
    pool: ['cave', 'samples', 'scan:lava'],
  },
  southpole: {
    name: {en: 'South Pole · ice and geysers', bn: 'দক্ষিণ মেরু · বরফ আর গিজার'}, lat: -85.5, lon: 75, gravity: 3.71, sky: 'polar', size: 300,
    palette: ['#9c8a88', '#f1e6e1', '#b9a6a2'], ice: true, difficulty: 3,
    fact: {en: 'In spring, sunlight warms the ground under the frozen carbon dioxide. Gas bursts out in jets and carves dark shapes that look like giant spiders.',
      bn: 'বসন্তে সূর্যের আলো জমাট কার্বন ডাই-অক্সাইডের নিচের মাটি গরম করে। গ্যাস ফোয়ারার মতো বেরিয়ে এসে বিশাল মাকড়সার মতো কালো দাগ তৈরি করে।'},
    source: 'https://science.nasa.gov/mission/mars-reconnaissance-orbiter/',
    spawn: {x: 0, z: 50},
    height(x, z) {
      const scarps = terrace(fbm(x / 80, z / 80, 71) * 14 + x * 0.04, 3.4, 0.8)
      return scarps + noise(x / 6, z / 6, 72) * 0.3
    },
    hazards: ['geysers'],
    pool: ['ice', 'samples', 'scan:spiders'],
  },
  meridiani: {
    name: {en: 'Meridiani Planum', bn: 'মেরিডিয়ানি প্ল্যানাম'}, lat: -1.95, lon: 354.5, gravity: 3.71, sky: 'mars', size: 300,
    palette: ['#6e4638', '#bb8460', '#94705f'], difficulty: 1,
    fact: {en: 'Opportunity found tiny round stones here nicknamed "blueberries", made of a mineral that forms in water. It also found the first meteorite ever spotted on another planet.',
      bn: 'অপরচুনিটি এখানে "ব্লুবেরি" নামের ছোট গোল পাথর পেয়েছিল, যা পানিতে তৈরি হওয়া খনিজ দিয়ে গড়া। অন্য গ্রহে প্রথম উল্কাপিণ্ডও এটাই খুঁজে পেয়েছিল।'},
    source: 'https://science.nasa.gov/mission/mer-opportunity/',
    spawn: {x: 0, z: 0},
    height(x, z) {
      const eagle = Math.hypot(x, z)
      const crater = -smooth(11, 3, eagle) * 2.6 + Math.exp(-((eagle - 11) ** 2) / 4) * 0.8
      const endurance = Math.hypot(x - 90, z + 80)
      const big = -smooth(48, 10, endurance) * 14 + Math.exp(-((endurance - 48) ** 2) / 30) * 2.5
      return crater + big + fbm(x / 40, z / 40, 81) * 0.8
    },
    landmarks: [{type: 'opportunity', x: 70, z: -45, rot: 2.2}, {type: 'heatshieldrock', x: -35, z: -40}],
    pool: ['blueberries', 'meteorite', 'visit:opportunity'],
  },
  utopia: {
    name: {en: 'Utopia Planitia', bn: 'ইউটোপিয়া প্ল্যানিশিয়া'}, lat: 25.1, lon: 109.9, gravity: 3.71, sky: 'mars', size: 300,
    palette: ['#6a4339', '#b07f63', '#8c6c62'], difficulty: 2,
    fact: {en: 'NASA\'s Viking 2 landed on this huge plain in 1976 and photographed frost on the ground. China\'s Zhurong rover explored here in 2021. Scalloped hollows hint at ice below.',
      bn: 'নাসার ভাইকিং ২ ১৯৭৬ সালে এই বিশাল সমভূমিতে নেমে মাটিতে তুষারের ছবি তুলেছিল। চীনের ঝুরং রোভার ২০২১ সালে এখানে ঘুরেছে। খাঁজকাটা গর্তগুলো নিচে বরফের ইঙ্গিত দেয়।'},
    source: 'https://science.nasa.gov/mission/viking-2/',
    spawn: {x: -30, z: 30},
    height(x, z) {
      let h = fbm(x / 50, z / 50, 91) * 2
      for (let i = 0; i < 7; i++) {
        const cx = Math.sin(i * 2.4) * 80, cz = Math.cos(i * 1.7) * 70
        const d = Math.hypot((x - cx) * 1.3, z - cz)
        h -= smooth(16, 3, d) * (2.5 + (z < cz ? 1.5 : 0))
      }
      return h
    },
    landmarks: [{type: 'zhurong', x: 25, z: -10, rot: 1.2}, {type: 'viking', x: -60, z: -55, rot: 0.4}],
    pool: ['ice', 'visit:zhurong', 'visit:viking', 'samples'],
  },
  phobos: {
    name: {en: 'Phobos, the moon of Mars', bn: 'ফোবোস, মঙ্গলের চাঁদ'}, lat: 0, lon: 0, gravity: 0.6, sky: 'space', size: 260,
    palette: ['#3d3634', '#77706b', '#5a524f'], difficulty: 2, moon: true,
    fact: {en: 'Phobos is only about 22 km wide and races around Mars three times a day. Its gravity is so weak that a jump here would last more than 20 minutes! (We made it shorter for the game.)',
      bn: 'ফোবোস মাত্র প্রায় ২২ কিমি চওড়া আর দিনে তিনবার মঙ্গলের চারপাশে ঘোরে। এর মাধ্যাকর্ষণ এত দুর্বল যে এখানে একটা লাফ ২০ মিনিটের বেশি চলত! (খেলায় আমরা ছোট করেছি।)'},
    source: 'https://science.nasa.gov/mars/moons/phobos/',
    spawn: {x: 0, z: 30},
    height(x, z) {
      const curve = -(x * x + z * z) / (2 * 520)
      const grooves = -Math.abs(Math.sin((x * 0.9 + z * 0.4) / 9)) * 1.4
      const crater = Math.hypot(x + 50, z + 40)
      const bowl = -smooth(30, 4, crater) * 9 + Math.exp(-((crater - 30) ** 2) / 25) * 2
      return curve + grooves + bowl + fbm(x / 15, z / 15, 99) * 0.8
    },
    pool: ['beacon', 'samples', 'summit'],
  },
}

export const SITE_ORDER = ['home', 'jezero', 'meridiani', 'gale', 'utopia', 'olympus', 'valles', 'arsia', 'southpole', 'phobos']

export function siteHeight(id) {
  const site = SITES[id]
  if (!site.cave) return (x, z) => site.height(x, z)
  return (x, z, underground = false) => {
    if (underground && inCave(site.cave, x, z)) return -site.cave.depth + noise(x / 4, z / 4, 7) * 0.4
    return site.height(x, z)
  }
}
// The lava tube runs from the pit along `angle`.
export function inCave(cave, x, z) {
  const dx = x - cave.x, dz = z - cave.z
  const along = dx * Math.cos(cave.angle) + dz * Math.sin(cave.angle)
  const across = -dx * Math.sin(cave.angle) + dz * Math.cos(cave.angle)
  return (along > -2 && along < cave.length && Math.abs(across) < 5.2) || Math.hypot(dx, dz) < cave.r - 1
}

// Objectives for one visit: a different mix every time.
export const OBJECTIVES = {
  samples: {count: 5, text: {en: 'Collect {n} interesting rocks', bn: '{n}টা মজার পাথর সংগ্রহ করো'}, reward: {science: 4}},
  blueberries: {count: 12, text: {en: 'Collect {n} "blueberries"', bn: '{n}টা "ব্লুবেরি" সংগ্রহ করো'}, reward: {science: 6}},
  tubes: {count: 10, text: {en: 'Find the {n} sample tubes at Three Forks', bn: 'থ্রি ফর্কসের {n}টা নমুনা টিউব খুঁজে বের করো'}, reward: {science: 10}},
  ice: {count: 4, text: {en: 'Dig up {n} chunks of ice', bn: '{n}টা বরফের টুকরো খুঁড়ে তোলো'}, reward: {ice: 4}},
  meteorite: {count: 1, text: {en: 'Find the metal meteorite', bn: 'ধাতব উল্কাপিণ্ড খুঁজে বের করো'}, reward: {metal: 6}},
  summit: {count: 1, text: {en: 'Reach the highest point', bn: 'সবচেয়ে উঁচু জায়গায় পৌঁছাও'}, reward: {science: 5}},
  cave: {count: 1, text: {en: 'Explore to the end of the lava tube', bn: 'লাভা-সুড়ঙ্গের শেষ পর্যন্ত যাও'}, reward: {science: 12, ice: 2}},
  beacon: {count: 3, text: {en: 'Plant {n} radio beacons', bn: '{n}টা রেডিও বীকন বসাও'}, reward: {science: 8}},
  visit: {count: 1, text: {en: 'Find {thing} and say hello', bn: '{thing} খুঁজে বের করে হ্যালো বলো'}, reward: {science: 6}},
  scan: {count: 3, text: {en: 'Scan {n} spots of {thing}', bn: '{thing}-এর {n}টা জায়গা স্ক্যান করো'}, reward: {science: 7}},
}
export const THINGS = {
  perseverance: {en: 'Perseverance', bn: 'পারসিভিয়ারেন্স'}, curiosity: {en: 'Curiosity', bn: 'কিউরিওসিটি'},
  opportunity: {en: 'Opportunity', bn: 'অপরচুনিটি'}, zhurong: {en: 'Zhurong', bn: 'ঝুরং'}, viking: {en: 'Viking 2', bn: 'ভাইকিং ২'},
  delta: {en: 'the old river delta', bn: 'পুরোনো নদীর বদ্বীপ'}, layers: {en: 'rock layers', bn: 'পাথরের স্তর'},
  caldera: {en: 'the volcano crater', bn: 'আগ্নেয়গিরির জ্বালামুখ'}, lava: {en: 'old lava', bn: 'পুরোনো লাভা'}, spiders: {en: 'the "spiders"', bn: '"মাকড়সা"'},
}

export function planVisit(siteId, random) {
  const pool = [...(SITES[siteId].pool ?? ['samples'])]
  const picks = []
  while (picks.length < Math.min(3, pool.length)) {
    const i = Math.floor(random() * pool.length)
    picks.push(pool.splice(i, 1)[0])
  }
  return picks.map(key => {
    const [kind, thing] = key.split(':')
    const spec = OBJECTIVES[kind]
    return {kind, thing: thing ?? null, need: spec.count, have: 0, reward: spec.reward, done: false}
  })
}

export function objectiveText(o, lang) {
  const spec = OBJECTIVES[o.kind]
  return spec.text[lang].replace('{n}', o.need).replace('{thing}', o.thing ? THINGS[o.thing][lang] : '')
}

// Distance between two places on Mars along the surface (km).
export function surfaceKm(a, b) {
  if (a.moon || b.moon) return 6000
  const R = 3389.5, d = Math.PI / 180
  const s = Math.sin((b.lat - a.lat) * d / 2) ** 2 + Math.cos(a.lat * d) * Math.cos(b.lat * d) * Math.sin((b.lon - a.lon) * d / 2) ** 2
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)))
}
export const siteDifficulty = id => clamp(SITES[id].difficulty ?? 1, 1, 3)
