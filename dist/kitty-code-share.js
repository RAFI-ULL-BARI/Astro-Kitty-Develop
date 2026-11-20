// Share codes for levels kids make themselves. A code is the level as JSON, base64url-encoded,
// so it fits in a link (#custom=...). Codes from other people are checked before they are played.
const VALID=/^[.#*B^>v<~+@$]+$/;
const MAX_W=14,MAX_H=12;

export function encodeLevel({map,par,battery=null,title=''}){
  const json=JSON.stringify({m:map,p:par,b:battery??null,t:title??''});
  const bytes=new TextEncoder().encode(json);let bin='';for(const b of bytes)bin+=String.fromCharCode(b);
  return btoa(bin).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
}

// Returns {map,par,battery,title} or null when the code is broken or not a fair level.
export function decodeLevel(code){
  try{
    if(typeof code!=='string'||code.length>4000||!/^[A-Za-z0-9_-]+$/.test(code))return null;
    const bin=atob(code.replace(/-/g,'+').replace(/_/g,'/'));
    const json=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(Uint8Array.from(bin,c=>c.charCodeAt(0))));
    const map=json?.m;
    if(!Array.isArray(map)||map.length<1||map.length>MAX_H)return null;
    if(map.some(r=>typeof r!=='string'||!r.length||r.length>MAX_W||!VALID.test(r)))return null;
    const flat=map.join('');
    if((flat.match(/[\^>v<]/g)??[]).length!==1||(flat.match(/B/g)??[]).length!==1)return null;
    const par=Math.trunc(Number(json.p));
    if(!Number.isFinite(par)||par<1||par>200)return null;
    const battery=json.b===null||json.b===undefined?null:Math.max(1,Math.min(99,Math.trunc(Number(json.b))||1));
    const title=typeof json.t==='string'?json.t.replace(/[\u0000-\u001f]/g,'').trim().slice(0,30):'';
    return{map,par,battery,title};
  }catch{return null;}
}
