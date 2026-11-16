import {readFile,writeFile,readdir} from 'node:fs/promises';
const root=new URL('../dist/',import.meta.url),version='10';
for(const name of await readdir(root)){
 if(!/\.(js|html)$/.test(name))continue;
 const path=new URL(name,root);let content=await readFile(path,'utf8');
 content=content.replace(/(['"])(\.\/[\w-]+\.(?:js|css))(?:\?v=\d+)?\1/g,(_,quote,file)=>`${quote}${file}?v=${version}${quote}`);
 content=content.replace(/((?:src|href)=")([\w-]+\.(?:js|css))(?:\?v=\d+)?"/g,(_,prefix,file)=>`${prefix}${file}?v=${version}"`);
 await writeFile(path,content);
}
