/** Training navigation never invents a later checkpoint or awards a patch. */
export const TRAINING_STAGES=['walk','clean','connect','warning','return','airlock','shelter','power','monitor','rover','finale','complete'] as const;
export function previousTrainingStage(scene:string):string|null {const index=TRAINING_STAGES.findIndex(stage=>stage===scene);return index<0?null:index===0?'choose':TRAINING_STAGES[index-1];}
export interface StoryPreferences {voice:boolean;subtitles:boolean;reduceMotion:boolean;}
export function freshAdventure(preferences:StoryPreferences){return{scene:null,trainingScene:null,patches:[] as string[],voice:preferences.voice,subtitles:preferences.subtitles,reduceMotion:preferences.reduceMotion,introSeen:false,simulatorSeen:false,tripPlanner:false};}
