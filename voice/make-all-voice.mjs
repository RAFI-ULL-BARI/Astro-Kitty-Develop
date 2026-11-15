import {readFile,writeFile,mkdir,readdir,rename,rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const here=path.dirname(fileURLToPath(import.meta.url));
const out=path.join(here,'..','dist','audio','voice');
const key=process.env.ELEVEN_API_KEY,voice=process.env.ELEVEN_VOICE_ID;
const model=process.env.ELEVEN_MODEL||'eleven_turbo_v2_5';
const speed=Number(process.env.ELEVEN_SPEED||1.08);
const test=process.argv.includes('--test');
const fresh=path.join(here,'..','dist','audio',test?'voice-test':'voice-new');
if(!key||!voice){console.log('Set ELEVEN_API_KEY and ELEVEN_VOICE_ID first.');process.exit(1);}

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
const sayIt=text=>text.replace(/\bShabbash\b/g,'Shabaash').replace(/[()]/g,'').replace(/\bDhrubo\b/g,'Dhroobo').replace(/°C/g,' degrees Celsius').replace(/\s+/g,' ').trim();
const lines=new Map();
for(const name of ['voice-lines.csv','world-voice-lines.csv']){
 let text;try{text=await readFile(path.join(here,name),'utf8');}catch{continue;}
 const [head,...rows]=parseCsv(text);const col=n=>head.indexOf(n);
 for(const r of rows){const file=r[col('file')];if(!file||lines.has(file))continue;const caption=r[col('caption')],say=r[col('say')];lines.set(file,say&&say!==caption?say:sayIt(caption));}
}
const list=[...lines].map(([file,say])=>({file,say}));
const todo=test?list.filter(l=>/Shabaash|Dhroobo|Oshadharon/.test(l.say)).slice(0,3).concat(list.slice(40,42)):list;
console.log(`${todo.length} lines, about ${todo.reduce((n,l)=>n+l.say.length,0)} credits. Model ${model}, speed ${speed}.`);

await mkdir(fresh,{recursive:true});
const done=new Set(await readdir(fresh));
let useLanguage=true,useSpeed=true,made=0,failed=0;
async function speak(text){
 const settings={stability:.55,similarity_boost:.8,style:.25,use_speaker_boost:true};
 if(useSpeed)settings.speed=speed;
 const body={text,model_id:model,voice_settings:settings};
 if(useLanguage)body.language_code='en';
 return fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_64`,{method:'POST',headers:{'xi-api-key':key,'Content-Type':'application/json',Accept:'audio/mpeg'},body:JSON.stringify(body)});
}
for(const [i,line] of todo.entries()){
 if(done.has(line.file))continue;
 let r=await speak(line.say);
 if(r.status===400||r.status===422){const msg=await r.text();if(/language/i.test(msg)&&useLanguage){useLanguage=false;r=await speak(line.say);}else if(/speed/i.test(msg)&&useSpeed){useSpeed=false;r=await speak(line.say);}else{failed++;console.log(`Failed ${line.file}: ${msg.slice(0,200)}`);continue;}}
 if(!r.ok){failed++;console.log(`Failed ${line.file}: HTTP ${r.status} ${(await r.text()).slice(0,200)}`);if(r.status===401||r.status===402||r.status===429)break;continue;}
 await writeFile(path.join(fresh,line.file),Buffer.from(await r.arrayBuffer()));made++;
 console.log(`${i+1}/${todo.length} ${line.say}`);
}
const ready=(await readdir(fresh)).filter(f=>/^v_[0-9a-f]{8}\.mp3$/.test(f));
if(test){console.log(`Test done. Listen to the files in dist/audio/voice-test, then run again without --test.`);process.exit(0);}
if(ready.length<list.length){console.log(`Made ${made}, failed ${failed}. ${ready.length} of ${list.length} new clips are ready in dist/audio/voice-new. Run the same command again to finish; your current voice is unchanged until then.`);process.exit(0);}
await rm(out,{recursive:true,force:true});
await rename(fresh,out);
const files=ready.sort();
await writeFile(path.join(out,'manifest.json'),JSON.stringify({files})+'\n');
console.log(`Done. All ${files.length} lines are recorded with the new voice in dist/audio/voice.`);
