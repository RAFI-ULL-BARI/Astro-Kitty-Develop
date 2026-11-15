import {encodeLayout, GRID, MODULES, validLayout} from './base-design.js?v=10';
import {gradient,MARS_LIGHT,marsSky} from './scene-kit.js?v=10';
import {drawBaseModule} from './base-module-art.js?v=10';
import {basePrompt} from './base-picture-prompt.js?v=10';
import {t} from './strings.js?v=10';

const point = (col,row) => [640+(col-row-.5)*110, 275+(col+row)*45];

function polygon(ctx,points,fill){
  ctx.beginPath();
  points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));
  ctx.closePath();
  ctx.fillStyle=fill;
  ctx.fill();
}

// Scale the same front-facing sprites to the angled board's tile size.
const pictureScales={home:.42,shelter:.78,greenhouse:.86,solar1:.52,solar2:.52,water:.84,garage:.86};

function renderPicture(layout){
  const canvas=document.createElement('canvas');
  canvas.width=1280;canvas.height=720;
  const ctx=canvas.getContext('2d');
  marsSky(ctx,1280,720,340);
  ctx.beginPath();ctx.arc(1020,97,35,0,Math.PI*2);ctx.fillStyle='#f8dba6';ctx.fill();
  polygon(ctx,[[0,277],[109,221],[188,252],[291,185],[409,246],[530,223],[617,262],[781,208],[852,248],[1024,178],[1160,242],[1280,200],[1280,462],[0,462]],MARS_LIGHT.far);
  polygon(ctx,[[0,318],[192,263],[332,318],[491,279],[616,315],[811,260],[1000,325],[1280,274],[1280,720],[0,720]],MARS_LIGHT.near);
  polygon(ctx,[[0,365],[230,329],[430,367],[708,334],[1000,359],[1280,316],[1280,720],[0,720]],gradient(ctx,0,330,0,720,...MARS_LIGHT.soil));
  for(let i=0;i<88;i++){
    const x=(17+i*317)%1280,y=327+(37+i*107)%380;
    ctx.beginPath();ctx.ellipse(x,y,2+i%8,1+i%3,0,0,Math.PI*2);ctx.fillStyle='#70496339';ctx.fill();
  }
  const plots=Array.from({length:GRID.width*GRID.height},(_,tile)=>({
    tile,col:tile%GRID.width,row:Math.floor(tile/GRID.width),
    id:tile===GRID.habitat?'home':MODULES.find(id=>layout[id]===tile),
  }));
  polygon(ctx,[point(0,0),point(GRID.width,0),point(GRID.width,GRID.height),point(0,GRID.height)],gradient(ctx,0,275,0,700,'#bf9296','#d6a08b'));
  for(const {col,row,id} of plots.sort((a,b)=>a.col+a.row-b.col-b.row)){
    if(!id)continue;
    const [x,y]=point(col+.5,row+.5);
    ctx.beginPath();ctx.ellipse(x+9,y+2,id==='home'?69:42,11,-.12,0,Math.PI*2);ctx.fillStyle='#5738493a';ctx.fill();
    drawBaseModule(ctx,id,...point(col+.5,row+.5),pictureScales[id]);
  }
  return canvas.toDataURL('image/png');
}

export function createBasePicture(dialog){
  const image=dialog.querySelector('img');
  const title=dialog.querySelector('[role=status]');
  const download=dialog.querySelector('a[download]');
  const brief=dialog.querySelector('[data-picture-brief]');
  let briefURL;
  let opener;
  const close=dialog.querySelector('button');
  close.setAttribute('aria-label',t('pictureClose'));
  close.onclick=()=>dialog.close();
  dialog.addEventListener('close',()=>{
    if(briefURL)URL.revokeObjectURL(briefURL);
    dialog.querySelector('.picture-options').open=false;
    image.removeAttribute('src');
    download.removeAttribute('href');
    brief.removeAttribute('href');
    opener?.focus();
  });

  return function openPicture({site,layout},button){
    if(!validLayout(layout)||dialog.open)return;
    opener=button;
    const picture=renderPicture(layout);
    image.src=picture;
    image.alt=t('basePictureGameAlt');
    download.href=picture;
    briefURL=URL.createObjectURL(new Blob([
      basePrompt(site,layout), '\n\nLayout code: ', encodeLayout(layout), '\n',
    ],{type:'text/plain;charset=utf-8'}));
    brief.href=briefURL;
    title.textContent=t('basePictureCaption');
    dialog.showModal();
  };
}
