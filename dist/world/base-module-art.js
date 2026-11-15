// Shared artwork for the base map, surface and downloadable picture.
// A sprite's origin is the centre of its ground contact.
const ellipse = (cx,cy,rx,ry,fill) => ({type:'ellipse',cx,cy,rx,ry,fill});
const box = (x,y,width,height,r,fill,stroke) => ({type:'rect',x,y,width,height,r,fill,stroke});
const polygon = (points,fill,stroke) => ({type:'polygon',points,fill,stroke});
const line = (points,stroke,weight) => ({type:'polyline',points,fill:'none',stroke,weight});

export const baseModuleType = id => id.startsWith('solar')?'solar':id;

function home({powered}){
 return [
  box(-156,-134,312,134,35,'#b1adbd','#e0d4dc'),
  box(-144,-144,288,116,32,'#d2c5ce','#f0dfe0'),
  box(-124,-109,226,43,15,'#adb0c2'),
  ...Array.from({length:3},(_,i)=>[
   box(-106+i*59,-103,40,29,8,'#344a61','#e9d9df'),
   box(-101+i*59,-97,30,10,3,powered?'#e8cc94':'#657d96'),
  ]).flat(),
  polygon([[-108,-145],[-83,-208],[66,-208],[95,-145]],'#ddd0d5','#f1e1dd'),
  polygon([[-83,-208],[-61,-224],[45,-224],[66,-208]],'#eee0db'),
  line([[-39,-205],[-39,-147]],'#b3abbf',2),
  box(79,-100,65,97,15,'#a2a0b4','#e4d6db'),
  box(90,-89,43,76,12,'#31485f','#a9b5c3'),
  box(96,-84,30,10,4,'#688297'),
  ellipse(123,-45,3,3,'#ace3d0'),
  box(-156,-16,312,16,5,'#8c879e'),
  line([[2,-224],[2,-260],[52,-276]],'#c1b8ce',3),
  ellipse(52,-276,7,7,'#b7a1e4'),
 ];
}

function solar({cleanliness}){
 const frame=[[-94,-75],[72,-75],[95,-13],[-70,-13]];
 const parts=[
  line([[-51,-34],[-53,0]],'#a8a8b6',6),
  line([[48,-34],[51,0]],'#a8a8b6',6),
  polygon(frame,'#273f62','#b2b8ce'),
 ];
 for(let row=0;row<3;row++)for(let col=0;col<6;col++){
  const x=-86+col*26+row*7.2,y=-68+row*18;
  parts.push(polygon([[x,y],[x+21,y],[x+27,y+13],[x+5,y+13]],cleanliness>=100?'#658eb2':'#4f698a','#a7bfd25c'));
 }
 if(cleanliness>=100){
  parts.push(ellipse(76,-16,5,3,'#ace3d0'),line([[-65,-68],[-34,-68]],'#d4e8f1',1.5));
 }else{
  parts.push({...polygon(frame,'#bd9684e6'),opacity:(100-cleanliness)/100});
  for(let i=0;i<25;i++)parts.push({...ellipse(-71+(i*29)%142,-64+(i*11)%45,2.5,1.3,'#e4c4a67a'),opacity:(100-cleanliness)/100});
 }
 return parts;
}

function greenhouse({crop}){
 const growth=10+Math.max(0,Math.min(100,crop))*.28;
 return [
  box(-50,-69,100,64,28,'#a8cac693','#b9ddd2'),
  ...[-24,0,24].flatMap(x=>[
   line([[x,-15],[x,-15-growth]],'#7aa790',3),
   ellipse(x-7,-8-growth,9,4,'#aad1a3'),
   ellipse(x+6,-17-growth,8,4,'#c4d6a5'),
  ]),
  box(-55,-9,110,9,4,'#547b75'),
 ];
}

function shelter({wallWater}){
 return [
  box(-48,-87,96,63,20,'#c2b9c7','#e2d5d2'),
  box(-12,-64,25,40,10,'#566d82'),
  ...Array.from({length:4},(_,i)=>box(-65+i*35,-30,29,30,7,
   wallWater>=10*(i+1)?'#89cbd4cc':'#8c9caa55','#d2e5e2a3')),
 ];
}

function water(){
 return [
  box(-37,-56,74,50,15,'#658e9c','#cae7e6'),
  ellipse(0,-55,37,12,'#9fcbd1','#d0ebeb'),
  box(-11,-73,22,11,4,'#a7c9d0','#d0ebeb'),
  line([[-26,-28],[25,-28]],'#a7ccd2',3),
  box(23,-19,9,13,3,'#497384','#a7ccd2'),
  box(-39,-8,78,8,4,'#4c6779'),
 ];
}

function garage(){
 return [
  box(-55,-58,110,58,12,'#aa8174','#efcdb2'),
  polygon([[-55,-54],[-43,-75],[43,-75],[55,-54]],'#cba08a','#efcdb2'),
  box(-34,-51,68,51,7,'#44556b','#c2a4a6'),
  ...[-40,-30,-20,-10].map(y=>line([[-30,y],[30,y]],'#87909f',2)),
  box(-47,-31,6,10,3,'#ead099'),
 ];
}

const sprites = {home,solar,greenhouse,shelter,water,garage};
const frames = {
 home:'-160 -287 320 291', solar:'-100 -81 200 88',
 greenhouse:'-59 -73 118 77', shelter:'-69 -91 138 95',
 water:'-42 -77 84 81', garage:'-59 -79 118 83',
};
const defaults = {powered:true,cleanliness:100,wallWater:40,crop:60};

export function baseModuleShapes(id,state){
 return sprites[baseModuleType(id)]({...defaults,...state});
}

export function drawBaseModule(ctx,id,x,y,scale=1,state){
 ctx.save();
 ctx.translate(x,y);
 ctx.scale(scale,scale);
 ctx.lineCap='round';
 ctx.lineJoin='round';
 const opacity=ctx.globalAlpha;
 for(const shape of baseModuleShapes(id,state)){
  ctx.globalAlpha=opacity*(shape.opacity??1);
  ctx.beginPath();
  if(shape.type==='ellipse')ctx.ellipse(shape.cx,shape.cy,shape.rx,shape.ry,0,0,Math.PI*2);
  else if(shape.type==='rect')ctx.roundRect(shape.x,shape.y,shape.width,shape.height,shape.r);
  else{
   shape.points.forEach(([px,py],index)=>index?ctx.lineTo(px,py):ctx.moveTo(px,py));
   if(shape.type==='polygon')ctx.closePath();
  }
  if(shape.fill!=='none'){ctx.fillStyle=shape.fill;ctx.fill();}
  if(shape.stroke){ctx.strokeStyle=shape.stroke;ctx.lineWidth=shape.weight??1.5;ctx.stroke();}
 }
 ctx.restore();
}

function shapeSVG(shape){
 const paint=`fill="${shape.fill}"`+(shape.stroke?` stroke="${shape.stroke}" stroke-width="${shape.weight??1.5}"`:'');
 if(shape.type==='rect')return `<rect x="${shape.x}" y="${shape.y}" width="${shape.width}" height="${shape.height}" rx="${shape.r}" ${paint}/>`;
 if(shape.type==='ellipse')return `<ellipse cx="${shape.cx}" cy="${shape.cy}" rx="${shape.rx}" ry="${shape.ry}" ${paint}/>`;
 return `<${shape.type} points="${shape.points.map(point=>point.join(',')).join(' ')}" ${paint}/>`;
}

const icons = Object.fromEntries(Object.keys(sprites).map(type=>[
 type,`<svg class="building-art" viewBox="${frames[type]}" aria-hidden="true" focusable="false" stroke-linecap="round" stroke-linejoin="round">${baseModuleShapes(type).map(shapeSVG).join('')}</svg>`,
]));
export const baseModuleIcon = id => icons[baseModuleType(id)];
