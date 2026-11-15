import {GRID, MODULES} from './base-design.js?v=10';

const SITE_NAMES = {jezero:'Jezero Crater',gale:'Gale Crater',arcadia:'Arcadia Planitia'};
const MARKS = {shelter:'S',greenhouse:'G',solar1:'1',solar2:'2',water:'W',garage:'R'};

export function basePrompt(site, layout) {
  const cells = Array(GRID.width * GRID.height).fill('.');
  cells[GRID.habitat] = 'H';
  for (const id of MODULES) cells[layout[id]] = MARKS[id];
  const rows = Array.from({length:GRID.height}, (_, i) =>
    cells.slice(i * GRID.width, (i + 1) * GRID.width).join(' '));
  return [
    `A 16:9 illustrated scene of a small human outpost in ${SITE_NAMES[site]} on Mars for a children's adventure game.`,
    'View from high above at a shallow angle. Top grid row is the back. Keep left and right as shown.',
    'Match this exact four-row, five-column footprint. The dots are bare ground. Do not add or duplicate buildings.',
    ...rows,
    'H = light grey rounded habitat with a raised roof, three dark windows and an antenna. S = lavender storm shelter with teal water bags. G = green glass greenhouse with visible leaf stems.',
    '1 and 2 = blue, three-row solar arrays tilted on silver legs. W = a short teal tank with a round top. R = a tan rover garage with a dark ribbed door.',
    'Use Astro Kitty’s storybook look: warm rust ground, purple hills, navy blue sky, soft cream highlights, rounded buildings, clean silhouettes and gentle cel shading.',
    'Keep all seven structures in view. No lettering, grid lines, logos, or people.',
  ].join('\n');
}

