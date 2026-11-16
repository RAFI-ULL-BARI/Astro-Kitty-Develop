import {writeFile} from 'node:fs/promises';
import {decodeLayout} from '../dist/base-design.js';
import {validSite} from '../dist/landing-sites.js';
import {basePrompt} from '../dist/base-picture-prompt.js';

const [site,code]=process.argv.slice(2);
const layout=decodeLayout(code);
if(!validSite(site)||!layout){
  console.error('Usage: node scripts/generate-base-picture.mjs <jezero|gale|arcadia> <layout-code>');
  process.exit(1);
}

const key=process.env.GEMINI_API_KEY;
if(!key){
  console.log(basePrompt(site,layout));
  process.exit(0);
}

const endpoint='https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image:generateContent';
try {
  const response=await fetch(endpoint,{
    method:'POST',
    signal:AbortSignal.timeout(90000),
    headers:{'Content-Type':'application/json','x-goog-api-key':key},
    body:JSON.stringify({
      contents:[{parts:[{text:basePrompt(site,layout)}]}],
      generationConfig:{responseModalities:['IMAGE'],imageConfig:{aspectRatio:'16:9',imageSize:'1K'}},
    }),
  });
  if(!response.ok)throw Error(`Gemini returned HTTP ${response.status}.`);
  const data=await response.json();
  const image=data.candidates?.flatMap(candidate=>candidate.content?.parts??[])
    .filter(part=>!part.thought).find(part=>part.inlineData?.data)?.inlineData;
  const extension={'image/png':'png','image/jpeg':'jpg','image/webp':'webp'}[image?.mimeType];
  if(!extension)throw Error('Gemini did not return an image.');
  const file=`astro-kitty-${site}-${code}.${extension}`;
  await writeFile(file,Buffer.from(image.data,'base64'),{flag:'wx'});
  console.log(file);
} catch(error) {
  console.error(error.message);
  process.exitCode=1;
}
