const KEY='astro-kitty-sound-v3';
export function soundOn(){try{return localStorage.getItem(KEY)!=='off';}catch{return true;}}
export function saveSound(on){try{localStorage.setItem(KEY,on?'on':'off');const p=JSON.parse(localStorage.getItem('astro-kitty-profile-v1')||'{}');localStorage.setItem('astro-kitty-profile-v1',JSON.stringify({...p,voice:on,captions:true}));}catch{}}
export const speakerIcon=on=>`<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m11 4-6 5H2v6h3l6 5Z"/>${on?'<path d="M15 8c3 2 3 6 0 8m3-11c5 4 5 10 0 14"/>':'<path d="m16 9 6 6m0-6-6 6"/>'}</svg>`;
