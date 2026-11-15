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

const [head,...rows]=parseCsv(await readFile(path.join(here,'world-voice-lines.csv'),'utf8'));
const col=name=>head.indexOf(name);
const sayIt=text=>text.replace(/\bShabbash\b/g,'Shabaash').replace(/[()]/g,'').replace(/\bDhrubo\b/g,'Dhroobo').replace(/°C/g,' degrees Celsius').replace(/\s+/g,' ').trim();
const lines=rows.filter(r=>r[col('file')]).map(r=>({file:r[col('file')],caption:r[col('caption')],say:r[col('say')]&&r[col('say')]!==r[col('caption')]?r[col('say')]:sayIt(r[col('caption')])}));
await mkdir(out,{recursive:true});
async function manifest(){
 const files=(await readdir(out)).filter(f=>/^v_[0-9a-f]{8}\.mp3$/.test(f)).sort();
 await writeFile(path.join(out,'manifest.json'),JSON.stringify({files})+'\n');
 return files;
}
const exists=async f=>{try{await access(f);return true;}catch{return false;}};
let made=0,skipped=0,failed=0;
for(const [i,line] of (manifestOnly?[]:lines).entries()){
 const target=path.join(out,line.file);
 if(await exists(target)){skipped++;continue;}
 const r=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_64`,{method:'POST',headers:{'xi-api-key':key,'Content-Type':'application/json',Accept:'audio/mpeg'},body:JSON.stringify({text:line.say,model_id:model,voice_settings:{stability:.5,similarity_boost:.75,style:.35,use_speaker_boost:true}})});
 if(!r.ok){failed++;console.log(`Failed ${line.file}: HTTP ${r.status} ${(await r.text()).slice(0,200)}`);if(r.status===401||r.status===402||r.status===429)break;continue;}
 await writeFile(target,Buffer.from(await r.arrayBuffer()));made++;
 console.log(`${i+1}/${lines.length} ${line.say}`);
}
const files=await manifest();
const missing=lines.filter(l=>!files.includes(l.file)).length;
console.log(`Done. Made ${made}, already had ${skipped}, failed ${failed}. ${files.length} clips listed. ${missing?missing+' lines still use the device voice.':'Every listed line is recorded.'}`);
