export const ROOM_PALETTES={
 float:{top:'#273a56',bottom:'#425d7a',floor:'#597d92',edge:'#365272'},
 rover:{top:'#3e354d',bottom:'#745865',floor:'#ae806c',edge:'#674d59'},
 garden:{top:'#39354a',bottom:'#595769',floor:'#827d8c',edge:'#4d485e'},
 gravity:{top:'#30374f',bottom:'#4f6079',floor:'#74869a',edge:'#414b67'},
 chemistry:{top:'#3c354b',bottom:'#685668',floor:'#9e7e82',edge:'#57475c'}
};
// Match the Mars light in the playable outpost, landing film and base postcard.
export const MARS_LIGHT={
 sky:['#3f4264','#82657f','#e6aa99'],
 far:'#665774', near:'#9d6c7f',
 soil:['#b68387','#d7a283','#c68b78']
};
export function marsSky(c,width,height,horizon){
 const sky=c.createLinearGradient(0,0,width*.16,horizon);
 MARS_LIGHT.sky.forEach((color,i)=>sky.addColorStop([0,.56,1][i],color));
 c.fillStyle=sky;c.fillRect(0,0,width,height);
}

/* Scalable illustration primitives: shared materials, lighting and perspective. */
export const COLORS={navy:'#15243b',ink:'#263650',lavender:'#baa7e5',peach:'#efb59c',cream:'#fff1db',mint:'#a9decb'};
export function round(c,x,y,w,h,color,r=12,stroke){c.fillStyle=color;c.beginPath();c.roundRect(x,y,w,h,r);c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=1.5;c.stroke();}}
export function oval(c,x,y,rx,ry,color,angle=0){c.fillStyle=color;c.beginPath();c.ellipse(x,y,Math.abs(rx),Math.abs(ry),angle,0,Math.PI*2);c.fill();}
export function stroke(c,points,color,width=2){c.beginPath();for(let i=0;i<points.length;i++)i?c.lineTo(...points[i]):c.moveTo(...points[i]);c.strokeStyle=color;c.lineWidth=width;c.stroke();}
export function poly(c,points,color){c.beginPath();for(let i=0;i<points.length;i++)i?c.lineTo(...points[i]):c.moveTo(...points[i]);c.closePath();c.fillStyle=color;c.fill();}
export function gradient(c,x,y,X,Y,...colors){const g=c.createLinearGradient(x,y,X,Y);colors.forEach((col,i)=>g.addColorStop(i/(colors.length-1),col));return g;}
export function shadow(c,x,y,width,height=width*.13,alpha=.2){oval(c,x,y,width,height,`rgba(12,23,42,${alpha})`);}
export function label(c,words,x,y,size=16,color=COLORS.cream){c.fillStyle=color;c.font=`600 ${size}px 'Avenir Next',system-ui,sans-serif`;c.textAlign='center';c.fillText(words,x,y);}
export function tree(c,x,y,s=1){shadow(c,x,y+5,24*s);stroke(c,[[x,y],[x,y-55*s]],'#657776',5*s);for(let i=0;i<4;i++){oval(c,x+Math.sin(i*2)*15*s,y-38*s-i*9*s,19*s,27*s,['#678e84','#7fa58e','#98b49b','#a6b99c'][i],i*.25);}stroke(c,[[x,y-12*s],[x-10*s,y-39*s]],'#c8c29a66',2*s);}
export function labRoom(c,kind,time=0){
 const theme=ROOM_PALETTES[kind]||ROOM_PALETTES.gravity;
 round(c,0,0,1100,540,gradient(c,0,0,1100,540,theme.top,theme.bottom,theme.edge),0);
 const wall=gradient(c,0,0,0,430,theme.bottom,theme.top);round(c,27,24,1046,402,wall,25,'#8086a340');
 for(let i=0;i<5;i++){round(c,43+i*206,43,188,339,'#c2bdd807',13,'#b2bdd014');stroke(c,[[49+i*206,65],[220+i*206,65]],'#c1c4df15',1);}
 // Overhead skylight and a warm ribbon of task lighting.
 poly(c,[[225,0],[875,0],[810,48],[290,48]],gradient(c,0,0,0,48,'#eadbc8',theme.floor));for(let i=0;i<6;i++)stroke(c,[[280+i*105,0],[315+i*94,48]],'#d2d4e6',3);
 round(c,65,64,970,5,'#edceb07a',3);round(c,65,69,970,2,'#fff0db33',1);
 poly(c,[[30,428],[1070,428],[1100,540],[0,540]],gradient(c,0,428,0,540,theme.floor,theme.edge));
 for(let i=-2;i<9;i++)stroke(c,[[550+(i*170-550)*.66,428],[i*170,540]],'#c5bcd319',1);
 stroke(c,[[0,480],[1100,480]],'#d5c6dd18',1);stroke(c,[[28,429],[1072,429]],'#e8c6ad44',3);
 // Recessed side cabinets establish scale around each experiment.
 for(const x of [49,966]){round(c,x,333,85,100,gradient(c,x,333,x+80,430,'#65708d','#46516b'),11,'#bdc1d42c');round(c,x+8,345,69,30,'#263a53',6);stroke(c,[[x+25,354],[x+57,354]],'#a9decb88',2);round(c,x+9,389,67,31,'#485774',5);oval(c,x+59,402,3,3,'#bba8ec');}
 if(kind==='garden'){round(c,104,92,892,227,'#344f66',26,'#d2dce64d');round(c,116,103,868,199,gradient(c,0,90,0,315,'#8c9eb4','#dec3af'),18);oval(c,857,144,33,33,'#f8dcac');poly(c,[[118,230],[220,183],[365,234],[490,175],[650,239],[790,192],[983,232],[983,305],[118,305]],'#7c9f98');poly(c,[[116,270],[250,234],[405,270],[605,223],[785,267],[984,239],[984,310],[116,310]],'#9bb09c');for(let i=0;i<7;i++)stroke(c,[[176+i*130,99],[176+i*130,309]],'#c7d2dd',6);poly(c,[[818,107],[955,107],[440,426],[215,426]],'#ffdfab0b');}
 if(kind==='float'){round(c,820,95,220,93,'#1a3049',18,'#adbedb3a');label(c,'NEUTRAL BUOYANCY',930,121,12,'#b6c5dc');for(let i=0;i<11;i++)round(c,840+i*16,151-(i%4)*4,6,15+(i%4)*4,i<7?'#a9decb':'#6d7d99',3);}
 if(kind==='chemistry'){for(let i=0;i<3;i++){round(c,793+i*74,95,62,39,'#26334c',8,'#bac6e222');label(c,['AIR','WATER','POWER'][i],824+i*74,118,10,'#b3c3d5');}stroke(c,[[159,99],[159,185],[256,185]],'#7d8ca355',8);stroke(c,[[156,100],[156,185],[256,185]],'#c6cdd22d',2);}
 if(kind==='rover'){for(let i=0;i<6;i++){poly(c,[[80+i*175,16],[110+i*175,16],[140+i*175,45],[110+i*175,45]],'#c9c7db18');}round(c,45,492,1010,17,'#272f49',7);for(let x=60;x<1040;x+=34)stroke(c,[[x,496],[x+13,505]],'#e6c09a66',4);}
}
export function roomLight(c,width=1100,height=540){const light=c.createRadialGradient(width*.2,0,10,width*.2,0,width*.9);light.addColorStop(0,'#ffe4bd0d');light.addColorStop(1,'#18243a0d');round(c,0,0,width,height,light,0);}
/** Curved, veined leaves; species and recovery change silhouette and posture. */
export function botanical(c,name,x,y,health,time=0){const h=60+health*105,green=health<.4?'#93a77b':'#77ac87',pale=health<.4?'#c7bd85':'#b0d19b';c.save();c.translate(x+Math.sin(time*1.2)*2,y);
 const leaf=(xx,yy,len,angle,w=14)=>{c.save();c.translate(xx,yy);c.rotate(angle);c.beginPath();c.moveTo(0,0);c.bezierCurveTo(len*.15,-w,len*.85,-w*1.3,len,0);c.bezierCurveTo(len*.65,w*.75,len*.1,w,0,0);c.fillStyle=gradient(c,0,-w,0,w,pale,green);c.fill();stroke(c,[[1,0],[len*.83,0]],'#49796588',1);for(let j=1;j<4;j++)stroke(c,[[len*j/5,0],[len*(j+.7)/5,-w*.45]],'#e1e8b333',.8);c.restore();};
 if(name==='Lettuce'){for(let j=0;j<12;j++){const a=j*2.399,r=12+Math.floor(j/4)*9;leaf(Math.cos(a)*9,-17+Math.sin(a)*5,26+health*17,a,13+health*6);}oval(c,0,-23,13+health*7,18+health*6,'#bed89a');}else{
 const droop=(1-health)*.64;stroke(c,[[0,0],[Math.sin(time)*2,-h*.5],[0,-h]],'#77a47f',5);
 for(let j=0;j<6;j++){const side=j%2?1:-1,yy=-18-j*h/7;leaf(0,yy,27+health*11,side<0?Math.PI-.38-droop:-.38+droop,name==='Basil'?18:12);}
 if(name==='Tomato'||name==='Strawberry'){for(let j=0;j<3;j++){const xx=(j%2?1:-1)*(21+j*5),yy=-h*.34-j*19;stroke(c,[[0,yy-8],[xx,yy]],'#77a47f',2);const r=name==='Tomato'?10:8;oval(c,xx,yy,r,r+(name==='Strawberry'?3:0),gradient(c,xx-r,yy-r,xx+r,yy+r,health>.65?'#f1ac87':'#b3ba83',health>.65?'#d8757e':'#7f9d75'));for(let k=0;k<4;k++)stroke(c,[[xx,yy-r],[xx+Math.sin(k*1.8)*7,yy-r-4]],'#5a8d77',2);oval(c,xx-3,yy-3,2,3,'#ffedce66');if(name==='Strawberry')for(let k=0;k<6;k++)oval(c,xx-4+k%3*4,yy-2+Math.floor(k/3)*6,.7,1,'#f5d6a2');}}
 if(name==='Radish'){oval(c,0,-8,17,22,gradient(c,-15,-20,12,12,'#f5b4be','#cd7e9c'));stroke(c,[[0,11],[3,20],[1,26]],'#f4dbe1',2);}
 if(name==='Bean')for(let j=0;j<3;j++){c.save();c.translate((j%2?1:-1)*21,-30-j*26);c.rotate(.2);round(c,-5,-10,11,35,gradient(c,-5,0,6,0,'#c1dba2','#6fa581'),6);for(let k=0;k<3;k++)oval(c,1,-3+k*9,2,3,'#e2eaba33');c.restore();}
 }c.restore();}
export function campusExterior(c,time=0,progress=0){
round(c,0,0,1200,675,gradient(c,0,0,0,675,'#4b4c6d','#a87e88','#efbd9c'),0);oval(c,1002,117,38,38,'#f6d1a2');
for(let i=0;i<4;i++){const x=70+i*350+Math.sin(time*.16+i)*12;oval(c,x,115+i%2*62,77,10,'#fff0e718');oval(c,x+47,111+i%2*62,38,14,'#fff0e714');}
poly(c,[[0,340],[220,307],[480,348],[750,301],[1020,335],[1200,308],[1200,675],[0,675]],'#777b8a');round(c,0,416,1200,259,gradient(c,0,416,0,675,'#879390','#a6ac98'),0);
poly(c,[[542,407],[654,407],[892,675],[305,675]],gradient(c,0,407,0,675,'#9d9da6','#c5b6b0'));for(let i=0;i<7;i++)stroke(c,[[505-i*20,440+i*30],[692+i*22,440+i*30]],'#e0cbb82a',1);
shadow(c,610,457,407,23,.18);
// Two lower science wings and a central glass atrium.
for(const [x,w]of [[202,260],[750,260]]){round(c,x,281,w,161,gradient(c,x,281,x+w,442,'#a6acc2','#c9c6d5','#8e9bb3'),12);round(c,x+15,301,w-30,93,gradient(c,0,301,0,394,'#45627e','#738d9f'),6);for(let j=0;j<6;j++)stroke(c,[[x+25+j*39,303],[x+25+j*39,392]],'#c0c9d688',3);round(c,x-8,270,w+16,16,'#ddd1d9',5);stroke(c,[[x+18,410],[x+w-18,410]],'#fff0db44',2);}
round(c,421,195,358,260,gradient(c,421,195,779,455,'#adb2c8','#d9d5e0','#a0a8be'),16);round(c,443,220,314,209,gradient(c,443,220,757,429,'#344f70','#6c8e9e','#3a5979'),9);
for(let j=0;j<6;j++)stroke(c,[[454+j*59,224],[454+j*59,426]],'#c6d3dfaa',4);for(let j=0;j<4;j++)stroke(c,[[445,246+j*48],[755,246+j*48]],'#b5c7d4aa',3);
poly(c,[[447,225],[489,225],[650,427],[607,427]],'#ecf4f51c');round(c,407,171,386,47,'#273c57',12);label(c,'NATIONAL KITTY SPACE CENTER',600,201,18,'#f3dfc4');
round(c,548,346,104,109,'#213a56',9);round(c,553,352,94,97,gradient(c,553,352,647,449,'#426783','#92a4ad'),7);const door=Math.min(1,progress)*19;stroke(c,[[600-door,355],[600-door,449]],'#d7d9df',3);stroke(c,[[600+door,355],[600+door,449]],'#d7d9df',3);
for(let j=0;j<3;j++)round(c,502-j*15,450+j*9,196+j*30,10,gradient(c,0,450,0,480,'#d3c7c8','#9598a9'),3);
// Observatory dome and solar arrays give the campus a scientific identity.
round(c,832,240,105,35,'#c4c8d7',7);c.fillStyle='#d8d5e1';c.beginPath();c.ellipse(884,242,51,41,0,Math.PI,Math.PI*2);c.fill();stroke(c,[[860,208],[874,239]],'#8a9bb3',4);stroke(c,[[882,236],[909,202]],'#647b99',8);
for(let j=0;j<4;j++){const x=232+j*51;poly(c,[[x,249],[x+40,249],[x+48,269],[x+7,269]],'#4b6389');stroke(c,[[x+7,251],[x+42,251]],'#b9c9e066',1);stroke(c,[[x+21,250],[x+28,267]],'#b9c9e066',1);}
for(const x of[100,165,1040,1110])tree(c,x,447,1.3);for(const x of[355,431,784,860])tree(c,x,580,.65);
for(const x of[477,722]){stroke(c,[[x,410],[x,336]],'#c9cad6',3);oval(c,x,334,8,4,'#ffe3b4');}
stroke(c,[[984,275],[984,166]],'#ddd6df',3);poly(c,[[986,169],[1041,174+Math.sin(time*2)*2],[1041,205],[986,200]],'#368775');oval(c,1014,186,10,10,'#d9807e');
}
