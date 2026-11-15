import {ARRIVAL_CHAPTERS} from './visual-core.js';
// @ts-ignore The shared runtime is a dependency-free JavaScript module.
import {dhruboNarrator} from './narration.js';
export class MovieNarrator {
 private chapter=-1;private enabled=true;
 constructor(private readonly blocked:()=>void,private readonly speaking:(active:boolean)=>void,private voice=dhruboNarrator()){}
 async play(index:number):Promise<void>{this.stop();this.chapter=index;if(!this.enabled)return;const part=ARRIVAL_CHAPTERS[index];if(!part)return;
  void this.voice.play(part.line,{onstart:()=>this.speaking(true),onend:()=>this.speaking(false),onblocked:this.blocked});
 }
 stop():void{this.voice.stop();this.speaking(false);}
 pause():void{this.voice.pause();this.speaking(false);}
 async resume():Promise<void>{if(this.enabled)await this.voice.resume();}
 setEnabled(enabled:boolean):void{this.enabled=enabled;if(!enabled)this.stop();}
}
