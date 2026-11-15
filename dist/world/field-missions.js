// Shared mission descriptions and world coordinates. All distances are game metres.
export const SOURCES={mars:'https://science.nasa.gov/mars/facts/',air:'https://www.nasa.gov/solar-system/nasas-oxygen-generating-experiment-moxie-completes-mars-mission/',water:'https://www.nasa.gov/missions/station/nasa-achieves-water-recovery-milestone-on-international-space-station/',plants:'https://www.nasa.gov/exploration-research-and-technology/growing-plants-in-space/',dust:'https://science.nasa.gov/solar-system/planets/mars/10-things-dust-in-the-wind-on-mars-and-well-beyond/'}
export const CHAPTERS=[
 {title:'Power up the outpost',icon:'☀',zone:'Sunrise Base',fact:'Solar panels convert sunlight to electricity. Dust reduces the light reaching them.',source:'dust'},
 {title:'The long way round',icon:'⌁',zone:'Copper Flats → Echo Crater',fact:'Mars has impact craters, volcanoes, dunes, and evidence of ancient rivers and lakes.',source:'mars'},
 {title:'Rover trail',icon:'⚙',zone:'Dune Pass → Sample Cache',fact:'Mars rovers explore the surface and carry scientific instruments. Real rover journeys require careful planning.',source:'mars'},
 {title:'Race the dust',icon:'◇',zone:'Weather Ridge → Sunrise Base',fact:'Martian dust can hide the landscape and reduce solar power. The thin atmosphere means winds do not push like equally fast winds on Earth.',source:'dust'},
 {title:'A home on Mars',icon:'⌂',zone:'Habitat · Workshop · Greenhouse',fact:'MOXIE demonstrated making oxygen from carbon dioxide on Mars. Water recovery and plant growth are also studied for space exploration.',source:'air'},
 {title:'Hello, Earth!',icon:'✦',zone:'Habitat → Signal Point',fact:'Radio signals take minutes to cross the distance between Earth and Mars. The delay changes as the planets move.',source:'mars'},
]
export const OBJECTS={
 solar:{x:12,z:0,kind:'solar',label:'FIELD ARRAY'},
 beacon:{x:22,z:18,kind:'beacon',label:'COPPER FLATS'},
 layers:{x:45,z:15,kind:'rock',label:'LAYERED OUTCROP'},
 core:{x:49,z:-9,kind:'drill',label:'CORE SITE'},
 weather:{x:35,z:-39,kind:'weather',label:'ECHO CRATER'},
 rover:{x:21,z:-30,kind:'rover',label:'ROVER'},
 gate1:{x:42,z:-23,kind:'gate',label:'01 · CRATER RIM'},
 gate2:{x:59,z:0,kind:'gate',label:'02 · DUNE PASS'},
 gate3:{x:27,z:30,kind:'gate',label:'03 · COPPER FLATS'},
 cache:{x:2,z:34,kind:'crate',label:'SAMPLE CACHE'},
 ridge:{x:-30,z:34,kind:'weather',label:'WEATHER RIDGE'},
 relay:{x:-43,z:8,kind:'antenna',label:'RELAY STATION'},
 shelter:{x:-2.5,z:-6.3,kind:'door',label:'AIRLOCK'},
 filter:{x:200,z:-5.5,kind:'filter',label:'SPARE FILTER'},
 oxygen:{x:196,z:-5,kind:'machine',label:'OXYGEN'},
 waterValve:{x:204,z:-5,kind:'valve',label:'WATER RECOVERY'},
 plant1:{x:203.35,z:2.6,kind:'plant',label:'LETTUCE'},
 plant2:{x:204.05,z:2.6,kind:'plant',label:'RADISH'},
 plant3:{x:204.75,z:2.6,kind:'plant',label:'PEA'},
 lab:{x:200,z:-1,kind:'lab',label:'SAMPLE LAB'},
 exit:{x:200,z:7,kind:'door',label:'AIRLOCK'},
 summit:{x:-38,z:-38,kind:'antenna',label:'SIGNAL POINT'},
}
const touch=()=>{try{return globalThis.matchMedia?.('(pointer:coarse)').matches}catch{return false}}
export const guideText=line=>line.replace(/\{hold\}/g,(m,i)=>{const w=touch()?'hold the button':'hold Space';return i===0||/[.!?] $/.test(line.slice(0,i))?w[0].toUpperCase()+w.slice(1):w}).replace(/\{turn\}/g,touch()?'the turn buttons':'Q and E')
const task=(id,chapter,target,kind,title,action,guide,extra={})=>({id,chapter,target,kind,title,goal:title,action,guide,seconds:3,...extra})
export const MISSIONS=[
 task('dust-panel',0,'solar','clean','Brush the solar array','Hold to brush','Walk to the solar panel. {hold} to brush off the dust.'),
 task('aim-panel',0,'solar','align','Turn the panel toward the Sun','Use the panel','Turn the panel with {turn}. When the bar turns green, {hold}.',{angle:1.05,seconds:1.5}),
 task('trail-beacon',1,'beacon','deploy','Mark the Copper Flats trail','Hold to deploy','Follow the arrow to Copper Flats. {hold} to set up a trail beacon.'),
 task('layers-photo',1,'layers','scan','Study the layered outcrop','Hold to scan','Find the striped rock. Face it, then {hold} to scan.'),
 task('core-drill',1,'core','drill','Drill a rock core','Hold to drill','Go to the drill. {hold} and watch it dig into the rock.',{seconds:4}),
 task('crater-weather',1,'weather','deploy','Set up the crater station','Hold to deploy','Walk to Echo Crater. {hold} to set up the weather station.'),
 task('board-rover',2,'rover','board','Meet your exploration rover','Drive the rover','Find the rover and climb in. Time for a drive!'),
 task('drive-rim',2,'gate1','drive','Drive through the crater gate','Drive through the gate','Drive between the two glowing posts.'),
 task('drive-dunes',2,'gate2','drive','Cross Dune Pass','Drive through the gate','Follow the arrow through the sand dunes.'),
 task('drive-flats',2,'gate3','drive','Cross Copper Flats','Drive through the gate','Drive the long loop back across Copper Flats.'),
 task('collect-cache',2,'cache','pickup','Recover the sample canister','Collect the canister','Park next to the box. Pick up the sample can.'),
 task('ridge-weather',3,'ridge','deploy','Deploy a storm lookout','Hold to deploy','Go west to Weather Ridge. {hold} to set up the storm sensor.'),
 task('relay-repair',3,'relay','repair','Repair the relay mast','Hold to repair','Dust is coming! {hold} to fix the radio mast.',{storm:true}),
 task('airlock-cycle',3,'shelter','enter','Return to the habitat','Hold to cycle airlock','Follow the lights home. {hold} to open the airlock.',{storm:true,seconds:4}),
 task('get-filter',4,'filter','pickup','Find a fresh air filter','Pick up the filter','Find the new air filter on the trolley. Pick it up.'),
 task('fit-filter',4,'oxygen','install','Fit the oxygen filter','Hold to fit filter','Carry the filter to the oxygen machine. {hold} to fit it.'),
 task('make-oxygen',4,'oxygen','process','Start the oxygen converter','Hold to power up','{hold} to switch on the machine. Watch the tank fill with oxygen!',{seconds:4}),
 task('recover-water',4,'waterValve','align','Balance the water flow','Use the valve','Turn the valve with {turn}. When the bar turns green, {hold}.',{angle:-.75,seconds:3}),
 task('water-lettuce',4,'plant1','water','Water the lettuce','Hold to water','Go to the first pot. {hold} to water the lettuce.',{seconds:2}),
 task('water-radish',4,'plant2','water','Water the radish','Hold to water','Now the radish. {hold} to water it.',{seconds:2}),
 task('water-pea',4,'plant3','water','Water the pea','Hold to water','Last one! {hold} to water the pea.',{seconds:2}),
 task('study-core',5,'lab','scan','Examine the rock core','Hold to examine','Take your rock core to the lab table. Face it, then {hold} to scan.'),
 task('leave-home',5,'exit','exit','Head for Signal Point','Go outside','One last trip! Go to the door and step outside.'),
 task('earth-report',5,'summit','align','Send your discoveries home','Use the antenna','Climb to Signal Point. Turn the dish with {turn}. When the bar turns green, {hold} to call Earth!',{angle:1.45,seconds:3}),
]
const TRAIL=['solar','beacon','layers','core','weather','rover','gate1','gate2','gate3','cache','ridge','relay','shelter']
export const GEMS=TRAIL.slice(1).map((key,i)=>{const a=OBJECTS[TRAIL[i]],b=OBJECTS[key];return {x:Math.round((a.x+b.x)*5)/10,z:Math.round((a.z+b.z)*5)/10}})
export const DISCOVERIES=[
 {id:'crater',x:37,z:-25,name:'Echo Crater',fact:'Impacts leave craters across Mars. This crater is a fictional miniature.'},
 {id:'dunes',x:55,z:14,name:'Dune Pass',fact:'Wind moves sand into dunes on Mars, even in its thin atmosphere.'},
 {id:'layers',x:45,z:15,name:'Ancient pages',fact:'Rock layers preserve clues about how a landscape changed.'},
 {id:'ridge',x:-30,z:34,name:'Weather Ridge',fact:'Martian dust storms can grow to cover much of the planet.'},
 {id:'signal',x:-38,z:-38,name:'Signal Point',fact:'A Mars message takes minutes to reach Earth.'},
 {id:'home',x:-10,z:-4,name:'Sunrise Base',fact:'A real Mars habitat would need pressure, radiation protection, and life support.'},
]
export function loadJourney(raw){
 let data;try{data=JSON.parse(raw||'null')}catch{}
 const valid=new Set(MISSIONS.map(m=>m.id)),places=new Set(DISCOVERIES.map(p=>p.id))
 const completed=Array.isArray(data?.completed)?[...new Set(data.completed.filter(id=>valid.has(id)))]:[]
 const found=Array.isArray(data?.found)?[...new Set(data.found.filter(id=>places.has(id)))]:[]
 const first=MISSIONS.findIndex(m=>!completed.includes(m.id))
 const gems=Array.isArray(data?.gems)?[...new Set(data.gems.filter(i=>Number.isInteger(i)&&i>=0&&i<GEMS.length))]:[]
 return {completed,found,gems,index:Number.isInteger(data?.index)&&data.index>=0&&data.index<MISSIONS.length?data.index:Math.max(0,first),finished:first<0}
}
