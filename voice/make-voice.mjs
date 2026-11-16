import {readFile,writeFile,mkdir,readdir,access} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const here=path.dirname(fileURLToPath(import.meta.url));
const out=path.join(here,'..','dist','audio','voice');
const key=process.env.ELEVENLABS_API_KEY||process.env.ELEVEN_API_KEY,voice=process.env.ELEVENLABS_VOICE_ID||process.env.ELEVEN_VOICE_ID;
const model=process.env.ELEVEN_MODEL||'eleven_multilingual_v2';
const manifestOnly=process.argv.includes('--manifest-only');
if(!manifestOnly&&(!key||!voice)){console.log('Set ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID first. See voice/README.md.');process.exit(1);}

function parseCsv(text){
 const rows=[];let row=[],cell='',quoted=false;
 for(let i=0;i<text.length;i++){
  const c=text[i];
  if(quoted){if(c==='"'&&text[i+1]==='"'){cell+='"';i++;}else if(c==='"')quoted=false;else cell+=c;}
  else if(c==='"')quoted=true;else if(c===','){row.push(cell);cell='';}
  else if(c==='\n'){row.push(cell);rows.push(row);row=[];cell='';}else if(c!=='\r')cell+=c;
 }
 if(cell||row.length){row.push(cell);rows.push(row);}
 return rows;
}

const [head,...rows]=parseCsv(await readFile(path.join(here,'voice-lines.csv'),'utf8'));
const col=name=>head.indexOf(name);
const lines=rows.filter(r=>r[col('file')]).map(r=>({file:r[col('file')],caption:r[col('caption')],say:r[col('caption')]}));
await mkdir(out,{recursive:true});
let previous={};try{previous=JSON.parse(await readFile(path.join(out,'manifest.json'),'utf8'));}catch{}
const actualVoice=voice||previous.voiceId;
const verified=previous.voiceId===actualVoice?{...previous.lines}:{};
async function manifest(){
 const files=(await readdir(out)).filter(f=>/^v_[0-9a-f]{8}\.mp3$/.test(f)).sort();
 const complete=!!actualVoice&&lines.every(l=>verified[l.caption]===l.file&&files.includes(l.file));
 await writeFile(path.join(out,'manifest.json'),JSON.stringify({voiceId:actualVoice,model,complete,lines:verified,files})+'\n');
 return complete;
}
const exists=async f=>{try{await access(f);return true;}catch{return false;}};
let made=0,skipped=0,failed=0;
for(const [i,line] of (manifestOnly?[]:lines).entries()){
 const target=path.join(out,line.file);
 if(verified[line.caption]===line.file&&await exists(target)){skipped++;continue;}
 const r=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_64`,{method:'POST',headers:{'xi-api-key':key,'Content-Type':'application/json',Accept:'audio/mpeg'},body:JSON.stringify({text:line.say,model_id:model,voice_settings:{stability:.75,similarity_boost:.8,style:0,use_speaker_boost:true}})});
 if(!r.ok){failed++;console.log(`Failed ${line.file}: HTTP ${r.status}`);if(r.status===401||r.status===402||r.status===429)break;continue;}
 await writeFile(target,Buffer.from(await r.arrayBuffer()));verified[line.caption]=line.file;made++;await manifest();
 console.log(`${i+1}/${lines.length} ${line.say}`);
}
const complete=await manifest();
console.log(`Done. Made ${made}, already verified ${skipped}, failed ${failed}. Voice pack ${complete?'complete':'incomplete; the game will keep one device voice'}.`);
