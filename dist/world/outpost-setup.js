import {robotPortrait} from './dhrubo-guide.js?v=10';
import {baseModuleIcon,baseModuleType} from './base-module-art.js?v=10';
import {truthBadge} from './outpost-presentation.js?v=10';
import {t,copy} from './strings.js?v=10';
import {MODULES,GRID,adjacent,layoutEffects,placementEffects,distance,validLayout} from './base-design.js?v=10';
import {SITE_IDS,mapPoint} from './landing-sites.js?v=10';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const moduleName=id=>t('module'+id[0].toUpperCase()+id.slice(1));
export function siteMapHTML(selected){const sites=copy('sites');return `<figure class="mars-map"><img src="./assets/mars-viking.jpg" width="1440" height="720" alt="${t('mapAlt')}">${SITE_IDS.map((id,i)=>{const s=sites[id],p=mapPoint(s.lat,s.lon);return `<button type="button" class="map-pin" data-site="${id}" style="left:${p.x}%;top:${p.y}%" aria-label="${esc(s.name+' · '+s.coordinates)}" aria-pressed="${id===selected}">${i+1}</button>`;}).join('')}</figure><p class="map-credit"><a href="https://space.jpl.nasa.gov/tmaps/mars.html" target="_blank" rel="noopener">${t('mapCredit')}</a> · ${t('mapCreditDetail')}</p>`;}
export function siteCardsHTML(selected){const sites=copy('sites');return `<div class="site-options">${SITE_IDS.map((id,i)=>{const s=sites[id];return `<article class="site-card ${id===selected?'selected':''}"><button class="site-select" data-site="${id}" aria-pressed="${id===selected}"><strong>${i+1} · ${esc(s.name)}</strong><small>${esc(s.coordinates)}</small></button><p>${esc(s.story)}</p><details class="learn-more"><summary>${t('learnMore')}</summary><p class="simple-note">${truthBadge('game')} ${t('siteRule'+id[0].toUpperCase()+id.slice(1))}</p><p>${truthBadge('real')} ${esc(s.fact)}</p><a href="${esc(s.url)}" target="_blank" rel="noopener">${t('source')}</a><a href="https://trek.nasa.gov/mars/" target="_blank" rel="noopener">${t('trekLink')}</a><a href="${esc(s.coordinateSource)}" target="_blank" rel="noopener">${t('siteCoordinate',{coordinates:esc(s.coordinates)})}</a></details></article>`;}).join('')}</div>`;}
export function baseGridHTML(layout,{edit=false,cursor=12}={}){return `<div class="base-grid" role="group" aria-label="${t('baseMap')}">${Array.from({length:20},(_,tile)=>{const module=MODULES.find(k=>layout[k]===tile),home=tile===GRID.habitat,wind=tile%5===4,label=t('designTile',{row:Math.floor(tile/5)+1,column:tile%5+1,module:home?t('designHome'):module?moduleName(module):t('designEmpty'),wind:wind?t('designWind'):''});return `<${edit?'button':'div'} class="base-tile ${home?'habitat-tile':''} ${wind?'wind-tile':''}" ${edit?`type="button" data-tile="${tile}" tabindex="${tile===cursor?0:-1}"`:'role="img"'} aria-label="${esc(label)}">${home||module?baseModuleIcon(home?'home':module):`<span aria-hidden="true">${wind?'≈':'·'}</span>`}${module?`<small>${t('tile'+module[0].toUpperCase()+module.slice(1))}</small>`:home?`<small>${t('tileHome')}</small>`:''}</${edit?'button':'div'}>`;}).join('')}</div>`;}
export function layoutHint(layout,module){const e=placementEffects(layout);return module==='shelter'?t(e.shelterFar?'shelterFar':'shelterNear'):module==='greenhouse'||module==='water'?t(e.foodBonus?'greenhouseNear':'greenhouseFar'):module==='garage'?t(e.roverSafe?'garageNear':'garageFar'):t('panelsHint');}
export function designEffectsHTML(layout){if(!validLayout(layout))return `<p>${t('designIncomplete')}</p>`;const e=layoutEffects(layout);return `<p class="simple-note">${t('layoutSummary',{distance:distance(layout.shelter,GRID.habitat),windy:e.windyPanels,near:e.nearPanels})}</p><ul class="design-effects">${['shelter','solar1','greenhouse','garage'].map(k=>`<li>${layoutHint(layout,k)}</li>`).join('')}</ul>`;}

const PARTNER={shelter:GRID.habitat,garage:GRID.habitat,solar1:GRID.habitat,solar2:GRID.habitat};

export function designTargets(layout,selected){
 const anchor=selected==='greenhouse'?layout.water:selected==='water'?layout.greenhouse:PARTNER[selected];
 return Array.from({length:GRID.width*GRID.height},(_,tile)=>{
  const module=MODULES.find(id=>layout[id]===tile);
  const open=tile!==GRID.habitat&&(!module||module===selected);
  return {tile,module,open,anchor:tile===anchor,suggested:open&&anchor!==undefined&&adjacent(tile,anchor)};
 });
}

export function designAdvice(layout,selected){
 const type=baseModuleType(selected);
 if(type==='solar'){
  const tile=layout[selected];
  if(!Number.isInteger(tile))return t('workshopTipSolar');
  if(tile%GRID.width===GRID.width-1)return t('workshopSolarWind');
  return t(adjacent(tile,GRID.habitat)?'workshopSolarNear':'workshopSolarOpen');
 }
 return Number.isInteger(layout[selected])?layoutHint(layout,selected):t('workshopTip'+type[0].toUpperCase()+type.slice(1));
}

function designChecks(layout){
 const effects=placementEffects(layout);
 const checks=[
  ['workshopCheckShelter',Number.isInteger(layout.shelter)&&!effects.shelterFar],
  ['workshopCheckFood',effects.foodBonus>0],
  ['workshopCheckSolar',['solar1','solar2'].every(id=>Number.isInteger(layout[id]))&&effects.windyPanels===0],
  ['workshopCheckRover',effects.roverSafe],
 ];
 return `<details class="workshop-checks"><summary>${t('workshopChecks')}</summary><ul>${checks.map(([key,done])=>
  `<li><span aria-hidden="true" data-met="${done}">${done?'✓':'○'}</span><span class="sr-only">${t(done?'workshopMet':'workshopNotMet')}</span> ${t(key)}</li>`).join('')}</ul><button type="button" class="text-button" data-action="pip-launch">${t('workshopQuickLaunch')}</button></details>`;
}

function designBoard(layout,selected,cursor){
 return `<div class="workshop-board" role="group" aria-label="${t('baseMap')}" aria-describedby="workshopLegend">
  ${designTargets(layout,selected).map(({tile,module,anchor,open,suggested})=>{
   const home=tile===GRID.habitat,wind=tile%GRID.width===GRID.width-1;
   const label=t('designTile',{row:Math.floor(tile/GRID.width)+1,column:tile%GRID.width+1,module:home?t('designHome'):module?moduleName(module):t('designEmpty'),wind:wind?t('designWind'):''});
   return `<button type="button" data-tile="${tile}" ${module?`data-placed="${module}"`:''} tabindex="${tile===cursor?0:-1}"
    class="workshop-tile ${home?'workshop-home':''} ${wind?'workshop-wind':''}" data-open="${open}" data-anchor="${anchor}" data-suggested="${suggested}"
    aria-label="${esc(label)}${suggested?' · '+esc(t('workshopSuggested')):''}" data-label="${esc(label)}">
    ${home||module?baseModuleIcon(home?'home':module)+'<small>'+t(home?'tileHome':'tile'+module[0].toUpperCase()+module.slice(1))+'</small>':'<span class="tile-cross" aria-hidden="true"></span>'}
   </button>`;
  }).join('')}
 </div>`;
}

export function designEditorHTML(layout,selected,cursor,site,status){
 const count=MODULES.filter(id=>Number.isInteger(layout[id])).length;
 const ready=validLayout(layout);
 return `<div class="design-content workshop-content">
  <header class="workshop-heading"><div><p class="workshop-site"><span aria-hidden="true">✦</span> ${esc(copy('sites')[site].name)}</p>
   <h2>${t('workshopTitle')}</h2></div>
   <div class="workshop-progress"><strong>${t('workshopCount',{n:count,total:MODULES.length})}</strong>
   <progress max="${MODULES.length}" value="${count}" aria-label="${t('workshopBuildings')}"></progress></div></header>
  <div class="workshop-workspace">
   <section class="workshop-palette" aria-label="${t('workshopBuildings')}">
    <h3>${t('workshopBuildings')}</h3><div class="workshop-parts">
    ${MODULES.map(id=>`<button type="button" class="workshop-part" data-module="${id}" aria-label="${esc(moduleName(id))}" aria-pressed="${selected===id}">
      ${baseModuleIcon(id)}<span class="workshop-part-name">${esc(moduleName(id))}</span>
      ${Number.isInteger(layout[id])?'<span class="workshop-placed" aria-hidden="true">✓</span>':''}</button>`).join('')}
    </div>
   </section>
   <section class="workshop-map" aria-label="${t('baseMap')}">
    <div class="workshop-map-head"><h3>${t('baseMap')}</h3><span><b aria-hidden="true">≈</b> ${t('workshopWind')}</span></div>
    ${designBoard(layout,selected,cursor)}
    <div class="workshop-map-foot">
    <p id="workshopLegend" class="workshop-legend"><span aria-hidden="true"></span>${t('workshopSuggested')}</p>
    <button type="button" class="chip-button" data-action="base-picture" ${ready?'':'disabled'}>${t('basePictureButton')}</button>
    </div>
   </section>
   <aside class="workshop-coach-area">
    <details class="workshop-guide">
     <summary class="workshop-coach"><span class="workshop-dhrubo" aria-hidden="true">${robotPortrait}</span><span>${t('workshopCoach')}</span></summary>
     <p id="designGuideLine">${esc(designAdvice(layout,selected))}</p>
     <button class="chip-button workshop-hear" type="button" data-action="design-help">${t('cutRepeat')}</button>
     ${designChecks(layout)}
    </details>
    <p id="designStatus" class="sr-only" role="status">${esc(status??t(ready?'designReady':'workshopIncomplete'))}</p>
   </aside>
  </div>
  <details class="learn-more workshop-controls"><summary>${t('workshopControls')}</summary><p>${t('workshopKeyHelp')}</p></details>
 </div>
 <footer class="setup-footer workshop-footer">
  <button type="button" class="chip-button workshop-back" data-action="back-sites">${t('setupBack')}</button>
  <button type="button" class="chip-button workshop-template" data-action="pip-layout">${t('designPip')}</button>
  <button type="button" class="text-button workshop-clear" data-action="reset-layout">${t('workshopClear')}</button>
  <button type="button" class="primary workshop-launch" data-action="launch" ${ready?'':'disabled'}>${t('workshopLaunch')}</button>
 </footer>`;
}
