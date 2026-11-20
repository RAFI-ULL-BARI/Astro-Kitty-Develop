// Kitty Code engine for the browser. Mirrors backend/astrokitty/kittycode.py line for line,
// so a program behaves the same offline and on the server. test/kitty-code-parity.test.mjs
// checks both engines against dist/data/kitty-code-cases.json.
export const DIRS='NESW';
const DELTA={N:[0,-1],E:[1,0],S:[0,1],W:[-1,0]};
const START_CHARS={'^':'N','>':'E','v':'S','<':'W'};
const MAX_STEPS=1000,MAX_TICKS=5000,MAX_DEPTH=20,MAX_LINES=200,MAX_REPEAT=99;
export const CONDITIONS=['rock ahead','path ahead','path left','path right','sample here','at base'];
const KEYWORDS=['move','turn left','turn right','drill','scan','wait','repeat','times','until','if','else','end','define','not',...CONDITIONS];
const NUMBER_WORDS={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10};
const BANGLA=[['বামে ঘোরো','turn left'],['ডানে ঘোরো','turn right'],['পাথর সামনে','rock ahead'],['পথ সামনে','path ahead'],['পথ বামে','path left'],['পথ ডানে','path right'],['নমুনা এখানে','sample here'],['ঘাঁটিতে','at base'],['যতক্ষণ না','until'],['পুনরাবৃত্তি','repeat'],['এগোও','move'],['খনন','drill'],['স্ক্যান','scan'],['অপেক্ষা','wait'],['বার','times'],['যদি','if'],['নইলে','else'],['শেষ','end'],['নাম','define'],['না','not']];
const NAME_RE=/^[a-z_][a-z0-9_]{0,23}$/;

export class KittyCodeError extends Error{
  constructor(line,message,suggestion=null){super(message);this.line=line;this.suggestion=suggestion;}
  asDict(){return{line:this.line,message:this.message,suggestion:this.suggestion};}
}

function editDistance(a,b){
  const d=Array.from({length:a.length+1},(_,i)=>Array.from({length:b.length+1},(_,j)=>i===0?j:j===0?i:0));
  for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++){
    d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]!==b[j-1]?1:0));
    if(i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1])d[i][j]=Math.min(d[i][j],d[i-2][j-2]+1);
  }
  return d[a.length][b.length];
}
export function suggest(word,extra=[]){
  let best=null,score=99;
  for(const kw of[...KEYWORDS,...extra]){const d=editDistance(word,kw);if(d<score){best=kw;score=d;}}
  const limit=[...word].length<=4?1:2;
  return best&&score<=limit?best.toUpperCase():null;
}
const isDigits=w=>/^[0-9]+$/.test(w);
export function normalizeLine(raw){
  let text=raw.split('#')[0].split('//')[0];
  text=text.replace(/[০-৯]/g,c=>String('০১২৩৪৫৬৭৮৯'.indexOf(c))).trim().toLowerCase();
  for(const[bn,en]of BANGLA)if(bn.includes(' '))text=text.split(bn).join(` ${en} `);
  const single=Object.fromEntries(BANGLA.filter(([bn])=>!bn.includes(' ')));
  const words=text.split(/\s+/).filter(Boolean).map(w=>single[w]??w).join(' ').split(/\s+/).filter(Boolean);
  return words.map(w=>Object.hasOwn(NUMBER_WORDS,w)?String(NUMBER_WORDS[w]):w).join(' ');
}
function parseCond(words,line){
  let negate=false;
  if(words[0]==='not'){negate=true;words=words.slice(1);}
  const text=words.join(' ');
  if(CONDITIONS.includes(text))return[text,negate];
  const hint=CONDITIONS.find(c=>editDistance(text,c)<=3);
  throw new KittyCodeError(line,`I don't know the check "${text||'...'}".`,hint?hint.toUpperCase():'Try ROCK AHEAD, PATH AHEAD, PATH LEFT, PATH RIGHT, SAMPLE HERE or AT BASE.');
}
export function parse(source){
  const lines=source.split(/\r\n|\r|\n/).map((raw,i)=>[i+1,normalizeLine(raw)]).filter(([,t])=>t);
  if(lines.length>MAX_LINES)throw new KittyCodeError(lines[MAX_LINES][0],`That's a lot of code! Keep it under ${MAX_LINES} lines.`);
  const defined=new Set();
  for(const[,t]of lines){const w=t.split(' ');if(w[0]==='define'&&w.length===2&&NAME_RE.test(w[1]))defined.add(w[1]);}
  let pos=0;
  const block=(depth,closers)=>{
    const out=[];
    while(pos<lines.length){
      const[n,t]=lines[pos];const w=t.split(' ');const head=w[0];
      if(closers.includes(head))return[out,head];
      pos++;
      if(head==='move'){
        let steps;
        if(w.length===1)steps=1;
        else if(w.length===2&&isDigits(w[1])&&+w[1]>=1&&+w[1]<=9)steps=+w[1];
        else throw new KittyCodeError(n,'MOVE needs a number from 1 to 9, like MOVE 3.');
        out.push({op:'move',line:n,arg:steps});
      }else if(head==='turn'){
        if(w.length===2&&(w[1]==='left'||w[1]==='right'))out.push({op:'turn',line:n,arg:w[1]});
        else throw new KittyCodeError(n,'Which way? Say TURN LEFT or TURN RIGHT.');
      }else if((head==='drill'||head==='scan')&&w.length===1){
        out.push({op:head,line:n});
      }else if(head==='wait'){
        if(w.length===1)out.push({op:'wait',line:n,arg:1});
        else if(w.length===2&&isDigits(w[1])&&+w[1]>=1&&+w[1]<=9)out.push({op:'wait',line:n,arg:+w[1]});
        else throw new KittyCodeError(n,'WAIT can have a number from 1 to 9, like WAIT 2.');
      }else if(head==='repeat'){
        let s;
        if(w.length>=2&&w[1]==='until'){const[cond,neg]=parseCond(w.slice(2),n);s={op:'until',line:n,cond,negate:neg};}
        else if((w.length===2||w.length===3)&&isDigits(w[1])&&(w.length===2||w[2]==='times')){
          const count=+w[1];
          if(count<1||count>MAX_REPEAT)throw new KittyCodeError(n,`REPEAT works with 1 to ${MAX_REPEAT} times.`);
          s={op:'repeat',line:n,arg:count};
        }else throw new KittyCodeError(n,'Try REPEAT 3 TIMES or REPEAT UNTIL AT BASE.');
        if(depth>=MAX_DEPTH)throw new KittyCodeError(n,'Too many blocks inside blocks!');
        const[body,closer]=block(depth+1,['end']);s.body=body;
        if(closer===null)throw new KittyCodeError(n,'This REPEAT needs an END.','Add END after the lines to repeat.');
        pos++;out.push(s);
      }else if(head==='if'){
        const[cond,neg]=parseCond(w.slice(1),n);
        const s={op:'if',line:n,cond,negate:neg,other:[]};
        let[body,closer]=block(depth+1,['else','end']);s.body=body;
        if(closer==='else'){pos++;[s.other,closer]=block(depth+1,['end']);}
        if(closer===null)throw new KittyCodeError(n,'This IF needs an END.','Add END after the IF lines.');
        pos++;out.push(s);
      }else if(head==='define'){
        if(depth!==0)throw new KittyCodeError(n,'Make routines at the top, not inside other blocks.');
        if(w.length!==2||!NAME_RE.test(w[1])||KEYWORDS.includes(w[1]))throw new KittyCodeError(n,'Give your routine a one-word name, like DEFINE HOP.');
        const s={op:'define',line:n,arg:w[1]};
        const[body,closer]=block(depth+1,['end']);s.body=body;
        if(closer===null)throw new KittyCodeError(n,'This DEFINE needs an END.');
        pos++;out.push(s);
      }else if(w.length===1&&defined.has(head)){
        out.push({op:'call',line:n,arg:head});
      }else if(head==='end'||head==='else'){
        throw new KittyCodeError(n,`This ${head.toUpperCase()} has nothing to finish.`,'Check that every REPEAT, IF and DEFINE has one END.');
      }else throw new KittyCodeError(n,`Hmm, I don't know "${t}".`,suggest(head,[...defined]));
    }
    return[out,null];
  };
  return block(0,[])[0];
}
export function countCommands(program){let total=0;for(const s of program)total+=1+countCommands(s.body??[])+countCommands(s.other??[]);return total;}

export function parseMap(rows){
  const grid=[];let x=0,y=0,dir='E',base=null;const samples=new Set(),devils=[];
  rows.forEach((row,j)=>{const cells=[...row];cells.forEach((ch,i)=>{
    if(Object.hasOwn(START_CHARS,ch)){x=i;y=j;dir=START_CHARS[ch];cells[i]='.';}
    else if(ch==='*')samples.add(`${i},${j}`);
    else if(ch==='B')base=[i,j];
    else if(ch==='@'||ch==='$'){devils.push(ch==='@'?[i,j,1,0]:[i,j,0,1]);cells[i]='.';}
  });grid.push(cells);});
  if(!base)throw new Error('map has no base');
  return{grid,x,y,dir,samples,base,devils};
}
// Each dust devil moves one cell, bouncing off rocks, the map edge and the base.
export function moveDevils(w,cell){
  for(const dv of w.devils){
    for(let k=0;k<2;k++){
      const nx=dv[0]+dv[2],ny=dv[1]+dv[3];
      if('#B'.includes(cell(nx,ny))){dv[2]=-dv[2];dv[3]=-dv[3];continue;}
      dv[0]=nx;dv[1]=ny;break;
    }
  }
}

class Stop extends Error{}
export function run(source,rows,par=null,battery=null){
  let program;
  try{program=parse(source);}catch(err){
    if(err instanceof KittyCodeError)return{status:'error',error:err.asDict(),trace:[],stars:0,commands:0,steps:0,collected:0};
    throw err;
  }
  const w=parseMap(rows);const totalSamples=w.samples.size;
  const routines=Object.fromEntries(program.filter(s=>s.op==='define').map(s=>[s.arg,s]));
  const trace=[],collected=[];const counters={steps:0,ticks:0};const outcome={status:'done',message:''};
  const hasBattery=battery!==null&&battery!==undefined;let energy=hasBattery?battery:null;
  const cell=(x,y)=>y>=0&&y<w.grid.length&&x>=0&&x<w.grid[y].length?w.grid[y][x]:'#';
  const look=turn=>{const d=DIRS[(DIRS.indexOf(w.dir)+turn+4)%4];const[dx,dy]=DELTA[d];return cell(w.x+dx,w.y+dy);};
  const devilAt=(x,y)=>w.devils.some(dv=>dv[0]===x&&dv[1]===y);
  const clear=turn=>{const d=DIRS[(DIRS.indexOf(w.dir)+turn+4)%4];const[dx,dy]=DELTA[d];return cell(w.x+dx,w.y+dy)!=='#'&&!devilAt(w.x+dx,w.y+dy);};
  const record=(s,op,note='')=>{
    const entry={line:s.line,op,x:w.x,y:w.y,dir:w.dir,note};
    if(w.devils.length)entry.devils=w.devils.map(dv=>[dv[0],dv[1]]);
    if(hasBattery)entry.energy=energy;
    trace.push(entry);
  };
  const useEnergy=s=>{
    if(!hasBattery)return;
    if(energy<=0){record(s,'flat');Object.assign(outcome,{status:'flat',message:'The battery is empty! Plan a route past a charging pad.',line:s.line});throw new Stop();}
    energy-=1;
  };
  const blown=s=>{record(s,'blown');Object.assign(outcome,{status:'blown',message:'Whoosh! A dust devil blew the rover off course. Wait for it to pass!',line:s.line});throw new Stop();};
  // After every action the dust devils move one cell.
  const worldTurn=s=>{
    if(!w.devils.length)return;
    moveDevils(w,cell);
    if(trace.length)trace[trace.length-1].devils=w.devils.map(dv=>[dv[0],dv[1]]);
    if(devilAt(w.x,w.y))blown(s);
  };
  const step=()=>{if(++counters.steps>MAX_STEPS){Object.assign(outcome,{status:'too_long',message:'The rover got tired! Your program ran too many steps.'});throw new Stop();}};
  const tick=()=>{if(++counters.ticks>MAX_TICKS){Object.assign(outcome,{status:'too_long',message:'Your loop never ends. Does it ever reach the base?'});throw new Stop();}};
  const check=(cond,negate)=>{
    const value={
      'rock ahead':()=>look(0)==='#','path ahead':()=>clear(0),'path left':()=>clear(-1),'path right':()=>clear(1),
      'sample here':()=>w.samples.has(`${w.x},${w.y}`),'at base':()=>w.x===w.base[0]&&w.y===w.base[1],
    }[cond]();
    return value!==negate;
  };
  const execute=(block,depth)=>{
    for(const s of block){
      tick();
      if(s.op==='move'){
        for(let k=0;k<s.arg;k++){
          step();useEnergy(s);const[dx,dy]=DELTA[w.dir];
          if(cell(w.x+dx,w.y+dy)==='#'){record(s,'bonk','rock');Object.assign(outcome,{status:'crashed',message:'Bonk! A rock is in the way.',line:s.line});throw new Stop();}
          if(devilAt(w.x+dx,w.y+dy))blown(s);
          w.x+=dx;w.y+=dy;record(s,'move');
          // Ice: keep sliding until you reach normal ground or something solid.
          for(let slide=0;slide<30;slide++){
            if(cell(w.x,w.y)!=='~'||cell(w.x+dx,w.y+dy)==='#')break;
            if(devilAt(w.x+dx,w.y+dy))blown(s);
            w.x+=dx;w.y+=dy;record(s,'slide');
          }
          if(hasBattery&&cell(w.x,w.y)==='+'){energy=battery;record(s,'charge');}
          worldTurn(s);
        }
      }else if(s.op==='turn'){step();useEnergy(s);w.dir=DIRS[(DIRS.indexOf(w.dir)+(s.arg==='right'?1:3))%4];record(s,'turn');worldTurn(s);}
      else if(s.op==='wait'){for(let k=0;k<s.arg;k++){step();record(s,'wait');worldTurn(s);}}
      else if(s.op==='drill'){
        step();const here=`${w.x},${w.y}`;
        if(w.samples.has(here)){w.samples.delete(here);collected.push(here);record(s,'drill','sample');}else record(s,'drill','empty');
        worldTurn(s);
      }else if(s.op==='scan'){
        step();const ahead=look(0);const[dx,dy]=DELTA[w.dir];
        record(s,'scan',devilAt(w.x+dx,w.y+dy)?'devil':({'#':'rock','*':'sample',B:'base','~':'ice','+':'pad'}[ahead]??'path'));
        worldTurn(s);
      }
      else if(s.op==='repeat'){for(let k=0;k<s.arg;k++){tick();execute(s.body,depth+1);}}
      else if(s.op==='until'){while(!check(s.cond,s.negate)){tick();execute(s.body,depth+1);}}
      else if(s.op==='if'){execute(check(s.cond,s.negate)?s.body:s.other,depth+1);}
      else if(s.op==='call'){
        if(depth>=MAX_DEPTH){Object.assign(outcome,{status:'too_long',message:'Your routines keep calling each other forever!'});throw new Stop();}
        execute(routines[s.arg].body,depth+1);
      }
    }
  };
  try{execute(program,0);}catch(err){if(!(err instanceof Stop))throw err;}
  const atBase=w.x===w.base[0]&&w.y===w.base[1];
  const commands=countCommands(program);
  if(outcome.status==='done'){
    outcome.status=atBase?'success':'not_home';
    if(!atBase)outcome.message="The program finished, but the rover isn't at the base yet.";
  }
  let stars=0;
  if(outcome.status==='success')stars=1+(par!==null&&par!==undefined&&commands<=par?1:0)+(collected.length===totalSamples?1:0);
  const result={status:outcome.status,message:outcome.message??'',stars,commands,steps:counters.steps,collected:collected.length,samples:totalSamples,final:{x:w.x,y:w.y,dir:w.dir},energy,trace};
  if(outcome.line!==undefined)result.line=outcome.line;
  return result;
}
