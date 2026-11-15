export const kittyLogo='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M11 23 9 9l12 8h6l12-8-2 14a16 16 0 1 1-26 0Z"/><path d="M17 27h1m12 0h1m-9 6 2 2 2-2m-12 0-7-2m27 2 7-2"/></svg>';
export const DHRUBO={shell:'#bfc2d6',edge:'#e6dfe7',face:'#2c425b',mint:'#a9decb',ear:'#9cacc2'};
export const robotPortrait=`<svg class="dhrubo-portrait" viewBox="-34 -45 68 80" aria-hidden="true"><path d="M0-22V-36" stroke="${DHRUBO.shell}" stroke-width="3" stroke-linecap="round"/><circle cy="-39" r="4" fill="${DHRUBO.mint}"/><rect x="-31" y="-1" width="7" height="18" rx="3" fill="${DHRUBO.ear}"/><rect x="24" y="-1" width="7" height="18" rx="3" fill="${DHRUBO.ear}"/><rect x="-23" y="-22" width="46" height="44" rx="15" fill="${DHRUBO.shell}" stroke="${DHRUBO.edge}" stroke-width="1.5"/><rect x="-18" y="-16" width="36" height="26" rx="9" fill="${DHRUBO.face}"/><ellipse cx="-8" cy="-4" rx="2.5" ry="4" fill="${DHRUBO.mint}"/><ellipse cx="8" cy="-4" rx="2.5" ry="4" fill="${DHRUBO.mint}"/><path d="m-5 4 5 2 5-2" fill="none" stroke="${DHRUBO.mint}" stroke-width="1.5" stroke-linecap="round"/><ellipse cy="26" rx="10" ry="3" fill="#9fdbd97d"/></svg>`;
export function drawDhrubo(c,{alert=false,happy=false,blink=false}={}){
 const box=(x,y,w,h,r,fill)=>{c.fillStyle=fill;c.beginPath();c.roundRect(x,y,w,h,r);c.fill();};
 const dot=(x,y,rx,ry,fill)=>{c.fillStyle=fill;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();};
 const stroke=(points,color,width)=>{c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.lineJoin='round';c.stroke();};
 stroke([[0,-22],[0,-36]],DHRUBO.shell,3);dot(0,-39,4,4,DHRUBO.mint);
 box(-31,-1,7,18,3,DHRUBO.ear);box(24,-1,7,18,3,DHRUBO.ear);
 box(-23,-22,46,44,15,DHRUBO.shell);c.strokeStyle=DHRUBO.edge;c.lineWidth=1.5;c.stroke();box(-18,-16,36,26,9,DHRUBO.face);
 const eye=alert?'#efd096':DHRUBO.mint;
 if(happy&&!alert){stroke([[-11,-3],[-8,-6],[-5,-3]],eye,2);stroke([[5,-3],[8,-6],[11,-3]],eye,2);}else{dot(-8,-4,2.5,blink?.6:4,eye);dot(8,-4,2.5,blink?.6:4,eye);}
 if(alert)dot(0,5,2,2,eye);else stroke([[-5,4],[0,6],[5,4]],eye,1.5);
 dot(0,26,10,3,'#9fdbd97d');
}
