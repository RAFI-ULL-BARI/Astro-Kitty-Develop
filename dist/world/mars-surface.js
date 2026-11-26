/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var ju=0,Tc=1,Qu=2;var us=1,ed=2,ir=3,$n=0,kt=1,Ht=2,ds=0,sr=1,wc=2,Ac=3,Rc=4,td=5;var fs=100,nd=101,id=102,sd=103,rd=104,od=200,ad=201,ld=202,cd=203,Cc=204,Ic=205,hd=206,ud=207,dd=208,fd=209,pd=210,md=211,gd=212,xd=213,_d=214,sa=0,ra=1,oa=2,Os=3,aa=4,la=5,ca=6,ha=7,Pc=0,yd=1,vd=2,jn=0,Lc=1,Nc=2,Dc=3,lo=4,Uc=5,Fc=6,Oc=7,cc="attached",Md="detached",Bc=300,ps=301,rr=302,Da=303,Ua=304,Rn=1e3,wn=1001,Bs=1002,Lt=1003,Fa=1004;var ms=1005;var Bt=1006,or=1007;var Cn=1008;var gn=1009,zc=1010,kc=1011,ar=1012,Oa=1013,zn=1014,bn=1015,kn=1016,Ba=1017,za=1018,gs=1020,Hc=35902,Gc=35899,Vc=1021,Wc=1022,In=1023,pi=1026,wi=1027,ka=1028,Ha=1029,Hi=1030,Ga=1031;var Va=1033,co=33776,ho=33777,uo=33778,fo=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,Ka=37492,Ja=37496,$a=37488,ja=37489,po=37490,Qa=37491,el=37808,tl=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,pl=36492,ml=36494,gl=36495,xl=36283,_l=36284,mo=36285,yl=36286;var Qi=2300,es=2301,na=2302,hc=2303,uc=2400,dc=2401,fc=2402,Sd=2500;var Xc=0,go=1,lr=2,bd=3200;var vl=0,Ed=1,Hn="",gt="srgb",cn="srgb-linear",Pr="linear",xt="srgb";var ia=7680;var Td=519,wd=512,Ad=513,Rd=514,qc=515,Cd=516,Id=517,Yc=518,Zc=519,Kc=35044;var Jc="300 es",An=2e3,zs=2001;function ip(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function sp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pd(){let s=ks("canvas");return s.style.display="block",s}var ou={},Hs=null;function Lr(...s){let e="THREE."+s.shift();Hs?Hs("log",e,...s):console.log(e,...s)}function Ld(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ke(...s){s=Ld(s);let e="THREE."+s.shift();if(Hs)Hs("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function qe(...s){s=Ld(s);let e="THREE."+s.shift();if(Hs)Hs("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ji(...s){let e=s.join(" ");e in ou||(ou[e]=!0,ke(...s))}function Nd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Dd={[sa]:sa,[oa]:ca,[aa]:aa,[Os]:la,[ra]:ra,[ca]:oa,[ha]:ha,[la]:Os},qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=1234567,Ar=Math.PI/180,ts=180/Math.PI;function Gn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[s&255]+tn[s>>8&255]+tn[s>>16&255]+tn[s>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function rt(s,e,t){return Math.max(e,Math.min(t,s))}function $c(s,e){return(s%e+e)%e}function rp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function op(s,e,t){return s!==e?(t-s)/(e-s):0}function Rr(s,e,t){return(1-t)*s+t*e}function ap(s,e,t,n){return Rr(s,e,1-Math.exp(-t*n))}function lp(s,e=1){return e-Math.abs($c(s,e*2)-e)}function cp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function hp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function up(s,e){return s+Math.floor(Math.random()*(e-s+1))}function dp(s,e){return s+Math.random()*(e-s)}function fp(s){return s*(.5-Math.random())}function pp(s){s!==void 0&&(au=s);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mp(s){return s*Ar}function gp(s){return s*ts}function xp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function _p(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yp(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*f,a*h,a*l);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ml(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qc(s,e){if(e.constructor===Float32Array)return s;let t=Ml(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function eh(s,e){if(e.constructor===Float32Array)return s;let t=Ml(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Gt={DEG2RAD:Ar,RAD2DEG:ts,generateUUID:Gn,clamp:rt,euclideanModulo:$c,mapLinear:rp,inverseLerp:op,lerp:Rr,damp:ap,pingpong:lp,smoothstep:cp,smootherstep:hp,randInt:up,randFloat:dp,randFloatSpread:fp,seededRandom:pp,degToRad:mp,radToDeg:gp,isPowerOfTwo:xp,ceilPowerOfTwo:_p,floorPowerOfTwo:jc,setQuaternionFromProperEuler:yp,normalize:eh,denormalize:Qc},ge=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(u!==v||c!==d||l!==f||h!==p){let m=c*d+l*f+h*p+u*v;m<0&&(d=-d,f=-f,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);g=Math.sin(g*y)/b,a=Math.sin(a*y)/b,c=c*g+d*a,l=l*g+f*a,h=h*g+p*a,u=u*g+v*a}else{c=c*g+d*a,l=l*g+f*a,h=h*g+p*a,u=u*g+v*a;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-a*f,e[t+2]=l*p+h*f+a*d-c*u,e[t+3]=h*p-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fl.copy(this).projectOnVector(e),this.sub(Fl)}reflect(e){return this.sub(Fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fl=new D,lu=new yn,Je=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=i[0],m=i[3],g=i[6],y=i[1],b=i[4],M=i[7],w=i[2],T=i[5],x=i[8];return r[0]=o*v+a*y+c*w,r[3]=o*m+a*b+c*T,r[6]=o*g+a*M+c*x,r[1]=l*v+h*y+u*w,r[4]=l*m+h*b+u*T,r[7]=l*g+h*M+u*x,r[2]=d*v+f*y+p*w,r[5]=d*m+f*b+p*T,r[8]=d*g+f*M+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ol.makeScale(e,t)),this}rotate(e){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ol.makeRotation(-e)),this}translate(e,t){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ol=new Je,cu=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vp(){let s={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(i.r=Fs(i.r),i.g=Fs(i.g),i.b=Fs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?Pr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[cn]:{primaries:e,whitePoint:n,transfer:Pr,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),s}var st=vp();function fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ss,ua=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=ks("canvas")),Ss.width=e.width,Ss.height=e.height;let i=Ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ss}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mp=0,Gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Bl(i[o].image)):r.push(Bl(i[o]))}else r=Bl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ua.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Sp=0,zl=new D,zt=class s extends qn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=wn,i=wn,r=Bt,o=Cn,a=In,c=gn,l=s.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Gn(),this.name="",this.source=new Gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zl).x}get height(){return this.source.getSize(zl).y}get depth(){return this.source.getSize(zl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rn:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rn:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Bc;zt.DEFAULT_ANISOTROPY=1;var _t=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],v=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,M=(f+1)/2,w=(g+1)/2,T=(h+d)/4,x=(u+v)/4,_=(p+m)/4;return b>M&&b>w?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=T/n,r=x/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=_/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=x/r,i=_/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},da=class extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new zt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Gs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends da{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Nr=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fa=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var je=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,p,v,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,p=l*h,v=l*u;t[0]=d+v*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,p=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,v=a*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*c,f=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bp,e,Ep)}lookAt(e,t,n){let i=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Pi.crossVectors(n,xn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Pi.crossVectors(n,xn)),Pi.normalize(),Co.crossVectors(xn,Pi),i[0]=Pi.x,i[4]=Co.x,i[8]=xn.x,i[1]=Pi.y,i[5]=Co.y,i[9]=xn.y,i[2]=Pi.z,i[6]=Co.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],y=n[3],b=n[7],M=n[11],w=n[15],T=i[0],x=i[4],_=i[8],P=i[12],R=i[1],U=i[5],H=i[9],J=i[13],L=i[2],F=i[6],O=i[10],N=i[14],j=i[3],I=i[7],G=i[11],X=i[15];return r[0]=o*T+a*R+c*L+l*j,r[4]=o*x+a*U+c*F+l*I,r[8]=o*_+a*H+c*O+l*G,r[12]=o*P+a*J+c*N+l*X,r[1]=h*T+u*R+d*L+f*j,r[5]=h*x+u*U+d*F+f*I,r[9]=h*_+u*H+d*O+f*G,r[13]=h*P+u*J+d*N+f*X,r[2]=p*T+v*R+m*L+g*j,r[6]=p*x+v*U+m*F+g*I,r[10]=p*_+v*H+m*O+g*G,r[14]=p*P+v*J+m*N+g*X,r[3]=y*T+b*R+M*L+w*j,r[7]=y*x+b*U+M*F+w*I,r[11]=y*_+b*H+M*O+w*G,r[15]=y*P+b*J+M*N+w*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15],y=c*f-l*d,b=a*f-l*u,M=a*d-c*u,w=o*f-l*h,T=o*d-c*h,x=o*u-a*h;return t*(v*y-m*b+g*M)-n*(p*y-m*w+g*T)+i*(p*b-v*w+g*x)-r*(p*M-v*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+i*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],y=t*a-n*o,b=t*c-i*o,M=t*l-r*o,w=n*c-i*a,T=n*l-r*a,x=i*l-r*c,_=h*v-u*p,P=h*m-d*p,R=h*g-f*p,U=u*m-d*v,H=u*g-f*v,J=d*g-f*m,L=y*J-b*H+M*U+w*R-T*P+x*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return e[0]=(a*J-c*H+l*U)*F,e[1]=(i*H-n*J-r*U)*F,e[2]=(v*x-m*T+g*w)*F,e[3]=(d*T-u*x-f*w)*F,e[4]=(c*R-o*J-l*P)*F,e[5]=(t*J-i*R+r*P)*F,e[6]=(m*M-p*x-g*b)*F,e[7]=(h*x-d*M+f*b)*F,e[8]=(o*H-a*R+l*_)*F,e[9]=(n*R-t*H-r*_)*F,e[10]=(p*T-v*M+g*y)*F,e[11]=(u*M-h*T-f*y)*F,e[12]=(a*P-o*U-c*_)*F,e[13]=(t*U-n*P+i*_)*F,e[14]=(v*b-p*w-m*y)*F,e[15]=(h*w-u*b+d*y)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,p=r*u,v=o*h,m=o*u,g=a*u,y=c*l,b=c*h,M=c*u,w=n.x,T=n.y,x=n.z;return i[0]=(1-(v+g))*w,i[1]=(f+M)*w,i[2]=(p-b)*w,i[3]=0,i[4]=(f-M)*T,i[5]=(1-(d+g))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(p+b)*x,i[9]=(m-y)*x,i[10]=(1-(d+v))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=bs.set(i[0],i[1],i[2]).length(),a=bs.set(i[4],i[5],i[6]).length(),c=bs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Un.copy(this);let l=1/o,h=1/a,u=1/c;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,r,o,a=An,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,v;if(c)p=r/(o-r),v=o*r/(o-r);else if(a===An)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===zs)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=An,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),p,v;if(c)p=1/(o-r),v=o/(o-r);else if(a===An)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===zs)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},bs=new D,Un=new je,bp=new D(0,0,0),Ep=new D(1,1,1),Pi=new D,Co=new D,xn=new D,uu=new je,du=new yn,mi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tp=0,fu=new D,Es=new yn,ai=new je,Io=new D,xr=new D,wp=new D,Ap=new yn,pu=new D(1,0,0),mu=new D(0,1,0),gu=new D(0,0,1),xu={type:"added"},Rp={type:"removed"},Ts={type:"childadded",child:null},kl={type:"childremoved",child:null},vt=class s extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new mi,n=new yn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new Je}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(gu,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Io.copy(e):Io.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(xr,Io,this.up):ai.lookAt(Io,xr,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),Es.setFromRotationMatrix(ai),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rp),kl.child=e,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vt.DEFAULT_UP=new D(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var He=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cp={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(l,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new He;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Po={h:0,s:0,l:0};function Hl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=$c(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Hl(o,r,e+1/3),this.g=Hl(o,r,e),this.b=Hl(o,r,e-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let n=Ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return st.workingToColorSpace(nn.copy(this),e),Math.round(rt(nn.r*255,0,255))*65536+Math.round(rt(nn.g*255,0,255))*256+Math.round(rt(nn.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(nn.copy(this),t);let n=nn.r,i=nn.g,r=nn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=gt){st.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,i=nn.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Po);let n=Rr(Li.h,Po.h,t),i=Rr(Li.s,Po.s,t),r=Rr(Li.l,Po.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Ce;Ce.NAMES=Ud;var Ur=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ns=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new D,li=new D,Gl=new D,ci=new D,ws=new D,As=new D,_u=new D,Vl=new D,Wl=new D,Xl=new D,ql=new _t,Yl=new _t,Zl=new _t,Oi=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fn.subVectors(e,t),i.cross(Fn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Fn.subVectors(i,t),li.subVectors(n,t),Gl.subVectors(e,t);let o=Fn.dot(Fn),a=Fn.dot(li),c=Fn.dot(Gl),l=li.dot(li),h=li.dot(Gl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,p=(o*h-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ci.x),c.addScaledVector(o,ci.y),c.addScaledVector(a,ci.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return ql.setScalar(0),Yl.setScalar(0),Zl.setScalar(0),ql.fromBufferAttribute(e,t),Yl.fromBufferAttribute(e,n),Zl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ql,r.x),o.addScaledVector(Yl,r.y),o.addScaledVector(Zl,r.z),o}static isFrontFacing(e,t,n,i){return Fn.subVectors(n,t),li.subVectors(e,t),Fn.cross(li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Fn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ws.subVectors(i,n),As.subVectors(r,n),Vl.subVectors(e,n);let c=ws.dot(Vl),l=As.dot(Vl);if(c<=0&&l<=0)return t.copy(n);Wl.subVectors(e,i);let h=ws.dot(Wl),u=As.dot(Wl);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(ws,o);Xl.subVectors(e,r);let f=ws.dot(Xl),p=As.dot(Xl);if(p>=0&&f<=p)return t.copy(r);let v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(As,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return _u.subVectors(r,i),a=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(_u,a);let g=1/(m+v+d);return o=v*g,a=d*g,t.copy(n).addScaledVector(ws,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),No.subVectors(this.max,_r),Rs.subVectors(e.a,_r),Cs.subVectors(e.b,_r),Is.subVectors(e.c,_r),Ni.subVectors(Cs,Rs),Di.subVectors(Is,Cs),Yi.subVectors(Rs,Is);let t=[0,-Ni.z,Ni.y,0,-Di.z,Di.y,0,-Yi.z,Yi.y,Ni.z,0,-Ni.x,Di.z,0,-Di.x,Yi.z,0,-Yi.x,-Ni.y,Ni.x,0,-Di.y,Di.x,0,-Yi.y,Yi.x,0];return!Kl(t,Rs,Cs,Is,No)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,Rs,Cs,Is,No))?!1:(Do.crossVectors(Ni,Di),t=[Do.x,Do.y,Do.z],Kl(t,Rs,Cs,Is,No))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hi=[new D,new D,new D,new D,new D,new D,new D,new D],On=new D,Lo=new Mn,Rs=new D,Cs=new D,Is=new D,Ni=new D,Di=new D,Yi=new D,_r=new D,No=new D,Do=new D,Zi=new D;function Kl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Zi.fromArray(s,r);let a=i.x*Math.abs(Zi.x)+i.y*Math.abs(Zi.y)+i.z*Math.abs(Zi.z),c=e.dot(Zi),l=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Dt=new D,Uo=new ge,Ip=0,Zt=class extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=bn,this.version=0,this._normalizationScale=e!==void 0?Ml(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Uo.fromBufferAttribute(this,t),Uo.applyMatrix3(e),this.setXY(t,Uo.x,Uo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):eh(e,this.array)}};var Fr=class extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Or=class extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pp=new Mn,yr=new D,Jl=new D,un=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Pp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(yr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(Jl)),this.expandByPoint(yr.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lp=0,Tn=new je,$l=new vt,Ps=new D,_n=new Mn,vr=new Mn,Yt=new D,Tt=class s extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ip(e)?Or:Fr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return $l.lookAt(e),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(_n.min,vr.min),_n.expandByPoint(Yt),Yt.addVectors(_n.max,vr.max),_n.expandByPoint(Yt)):(_n.expandByPoint(vr.min),_n.expandByPoint(vr.max))}_n.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Yt.fromBufferAttribute(a,l),c&&(Ps.fromBufferAttribute(e,l),Yt.add(Ps)),i=Math.max(i,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new D,c[P]=new D;let h=new D,u=new D,d=new D,f=new ge,p=new ge,v=new ge,m=new D,g=new D;function y(P,R,U){l[P]=l[R]=l[U]=1,h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,U),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,R),v.fromBufferAttribute(r,U),u.sub(h),d.sub(h),p.sub(f),v.sub(f);let H=1/(p.x*v.y-v.x*p.y);isFinite(H)&&(m.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(H),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(H),a[P].add(m),a[R].add(m),a[U].add(m),c[P].add(g),c[R].add(g),c[U].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,R=b.length;P<R;++P){let U=b[P],H=U.start,J=U.count;for(let L=H,F=H+J;L<F;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let M=new D,w=new D,T=new D,x=new D;function _(P){T.fromBufferAttribute(i,P),x.copy(T);let R=a[P];M.copy(R),M.sub(T.multiplyScalar(T.dot(R))).normalize(),w.crossVectors(x,R);let H=w.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,H)}for(let P=0,R=n.count;P<R;++P)l[P]&&_(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,p=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let g=0;g<h;g++)d[p++]=l[f++]}return new Zt(d,h,u)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function yu(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Gn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var ln=new D,Xs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Ml(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):eh(e,this.data.array)}},jl=new D,Np=new D,Dp=new Je,Bn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=jl.subVectors(n,t).cross(Np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(jl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Dp.getNormalMatrix(e),i=this.coplanarPoint(jl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Up=0,dn=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=sr,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cc,this.blendDst=Ic,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ui=new D,Ql=new D,Fo=new D,Oo=new D,is=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ql.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),Oo.copy(this.origin).sub(Ql);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Fo),a=Oo.dot(this.direction),c=-Oo.dot(Fo),l=Oo.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*c-a,d=o*a-c,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ql).addScaledVector(Fo,d),f}intersectSphere(e,t){if(e.radius<0)return null;ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),i=ui.dot(ui)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,v=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,b=n.z-o.z,M=Math.abs(c),w=Math.abs(l),T=Math.abs(h),x,_,P,R,U,H,J,L,F,O,N,j;if(M>=w&&M>=T?(P=c,H=u,F=p,j=g,c>=0?(x=l,_=h,R=d,U=f,J=v,L=m,O=y,N=b):(x=h,_=l,R=f,U=d,J=m,L=v,O=b,N=y)):w>=T?(P=l,H=d,F=v,j=y,l>=0?(x=h,_=c,R=f,U=u,J=m,L=p,O=b,N=g):(x=c,_=h,R=u,U=f,J=p,L=m,O=g,N=b)):(P=h,H=f,F=m,j=b,h>=0?(x=c,_=l,R=u,U=d,J=p,L=v,O=g,N=y):(x=l,_=c,R=d,U=u,J=v,L=p,O=y,N=g)),P===0)return null;let I=x/P,G=_/P,X=1/P,Q=R-I*H,V=U-G*H,k=J-I*F,te=L-G*F,ce=O-I*j,_e=N-G*j,ae=ce*te-_e*k,we=Q*_e-V*ce,Ne=k*V-te*Q;if(i){if(ae<0||we<0||Ne<0)return null}else if((ae<0||we<0||Ne<0)&&(ae>0||we>0||Ne>0))return null;let Me=ae+we+Ne;if(Me===0)return null;let Oe=X*(ae*H+we*F+Ne*j);return(Me>0?Oe<0:Oe>0)?null:this.at(Oe/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vu=new je,Ki=new is,Bo=new un,Mu=new D,zo=new D,ko=new D,Ho=new D,ec=new D,Go=new D,Su=new D,Vo=new D,Qe=class extends vt{constructor(e=new Tt,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ec.fromBufferAttribute(u,e),o?Go.addScaledVector(ec,h):Go.addScaledVector(ec.sub(t),h))}t.add(Go)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(Bo.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Bo,Mu)===null||Ki.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(vu.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(vu),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=b;M<w;M+=3){let T=a.getX(M),x=a.getX(M+1),_=a.getX(M+2);i=Wo(this,g,e,n,l,h,u,T,x,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let y=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);i=Wo(this,o,e,n,l,h,u,y,b,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=b;M<w;M+=3){let T=M,x=M+1,_=M+2;i=Wo(this,g,e,n,l,h,u,T,x,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let y=m,b=m+1,M=m+2;i=Wo(this,o,e,n,l,h,u,y,b,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Fp(s,e,t,n,i,r,o,a){let c;if(e.side===kt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===$n,a),c===null)return null;Vo.copy(a),Vo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Vo);return l<t.near||l>t.far?null:{distance:l,point:Vo.clone(),object:s}}function Wo(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,zo),s.getVertexPosition(c,ko),s.getVertexPosition(l,Ho);let h=Fp(s,e,t,n,zo,ko,Ho,Su);if(h){let u=new D;Oi.getBarycoord(Su,zo,ko,Ho,u),i&&(h.uv=Oi.getInterpolatedAttribute(i,a,c,l,u,new ge)),r&&(h.uv1=Oi.getInterpolatedAttribute(r,a,c,l,u,new ge)),o&&(h.normal=Oi.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new D,materialIndex:0};Oi.getNormal(zo,ko,Ho,d.normal),h.face=d,h.barycoord=u}return h}var Mr=new _t,bu=new _t,Eu=new _t,Op=new _t,Tu=new je,Xo=new D,tc=new un,wu=new je,nc=new is,Br=class extends Qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cc,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xo),this.boundingBox.expandByPoint(Xo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xo),this.boundingSphere.expandByPoint(Xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tc.copy(this.boundingSphere),tc.applyMatrix4(i),e.ray.intersectsSphere(tc)!==!1&&(wu.copy(i).invert(),nc.copy(e.ray).applyMatrix4(wu),!(this.boundingBox!==null&&nc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Md?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;bu.fromBufferAttribute(i.attributes.skinIndex,e),Eu.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Mr.copy(t),t.set(0,0,0,0)):(Mr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Mr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Eu.getComponent(r);if(o!==0){let a=bu.getComponent(r);Tu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Op.copy(Mr).applyMatrix4(Tu),o)}}return t.isVector4&&(t.w=Mr.w),t.applyMatrix4(this.bindMatrixInverse)}},qs=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ys=class extends zt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Lt,h=Lt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Au=new je,Bp=new je,zr=class s{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Bp;Au.multiplyMatrices(a,t[r]),Au.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ys(t,e,e,In,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(ke("Skeleton: No bone found with UUID:",r),o=new qs),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},gi=class extends Zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new je,Ru=new je,qo=[],Cu=new Mn,zp=new je,Sr=new Qe,br=new un,xi=class extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,zp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),Cu.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Cu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),br.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ls),Ru.multiplyMatrices(n,Ls),Sr.matrixWorld=Ru,Sr.raycast(e,qo);for(let o=0,a=qo.length;o<a;o++){let c=qo[o];c.instanceId=r,c.object=this,t.push(c)}qo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ys(new Float32Array(i*this.count),i,this.count,ka,bn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ji=new un,kp=new ge(.5,.5),Yo=new D,Bi=class{constructor(e=new Bn,t=new Bn,n=new Bn,i=new Bn,r=new Bn,o=new Bn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],m=r[10],g=r[11],y=r[12],b=r[13],M=r[14],w=r[15];if(i[0].setComponents(l-o,f-h,g-p,w-y).normalize(),i[1].setComponents(l+o,f+h,g+p,w+y).normalize(),i[2].setComponents(l+a,f+u,g+v,w+b).normalize(),i[3].setComponents(l-a,f-u,g-v,w-b).normalize(),n)i[4].setComponents(c,d,m,M).normalize(),i[5].setComponents(l-c,f-d,g-m,w-M).normalize();else if(i[4].setComponents(l-c,f-d,g-m,w-M).normalize(),t===An)i[5].setComponents(l+c,f+d,g+m,w+M).normalize();else if(t===zs)i[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);let t=kp.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Yo.x=i.normal.x>0?e.max.x:e.min.x,Yo.y=i.normal.y>0?e.max.y:e.min.y,Yo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Iu=new je,pa=class s{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];Iu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Bi),n[i].setFromProjectionMatrix(Iu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Bi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var Zs=class extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ma=new D,ga=new D,Pu=new je,Er=new is,Zo=new un,ic=new D,Lu=new D,ss=class extends vt{constructor(e=new Tt,t=new Zs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ma.fromBufferAttribute(t,i-1),ga.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ma.distanceTo(ga);e.setAttribute("lineDistance",new lt(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(i),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;Pu.copy(i).invert(),Er.copy(e.ray).applyMatrix4(Pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=l){let g=h.getX(v),y=h.getX(v+1),b=Ko(this,e,Er,c,g,y,v);b&&t.push(b)}if(this.isLineLoop){let v=h.getX(p-1),m=h.getX(f),g=Ko(this,e,Er,c,v,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=l){let g=Ko(this,e,Er,c,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){let v=Ko(this,e,Er,c,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ko(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(ma.fromBufferAttribute(a,i),ga.fromBufferAttribute(a,r),t.distanceSqToSegment(ma,ga,ic,Lu)>n)return;ic.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(ic);if(!(l<e.near||l>e.far))return{distance:l,point:Lu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Nu=new D,Du=new D,kr=class extends ss{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Nu.fromBufferAttribute(t,i),Du.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nu.distanceTo(Du);e.setAttribute("lineDistance",new lt(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Hr=class extends ss{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ks=class extends dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Uu=new je,pc=new is,Jo=new un,$o=new D,rs=class extends vt{constructor(e=new Tt,t=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(i),Jo.radius+=r,e.ray.intersectsSphere(Jo)===!1)return;Uu.copy(i).invert(),pc.copy(e.ray).applyMatrix4(Uu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,v=f;p<v;p++){let m=l.getX(p);$o.fromBufferAttribute(u,m),Fu($o,m,c,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,v=f;p<v;p++)$o.fromBufferAttribute(u,p),Fu($o,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fu(s,e,t,n,i,r,o){let a=pc.distanceSqToPoint(s);if(a<t){let c=new D;pc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Gr=class extends zt{constructor(e=[],t=ps,n,i,r,o,a,c,l,h){super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fn=class extends zt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends zt{constructor(e,t,n=zn,i,r,o,a=Lt,c=Lt,l,h=pi,u=1){if(h!==pi&&h!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Vr=class extends _i{constructor(e,t=zn,n=ps,i,r,o=Lt,a=Lt,c,l=pi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wr=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yn=class s extends Tt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function p(v,m,g,y,b,M,w,T,x,_,P){let R=M/x,U=w/_,H=M/2,J=w/2,L=T/2,F=x+1,O=_+1,N=0,j=0,I=new D;for(let G=0;G<O;G++){let X=G*U-J;for(let Q=0;Q<F;Q++){let V=Q*R-H;I[v]=V*y,I[m]=X*b,I[g]=L,l.push(I.x,I.y,I.z),I[v]=0,I[m]=0,I[g]=T>0?1:-1,h.push(I.x,I.y,I.z),u.push(Q/x),u.push(1-G/_),N+=1}}for(let G=0;G<_;G++)for(let X=0;X<x;X++){let Q=d+X+F*G,V=d+X+F*(G+1),k=d+(X+1)+F*(G+1),te=d+(X+1)+F*G;c.push(Q,V,te),c.push(V,k,te),j+=6}a.addGroup(f,j,P),f+=j,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var pn=class s extends Tt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,v=[],m=n/2,g=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function y(){let M=new D,w=new D,T=0,x=(t-e)/n;for(let _=0;_<=r;_++){let P=[],R=_/r,U=R*(t-e)+e;for(let H=0;H<=i;H++){let J=H/i,L=J*c+a,F=Math.sin(L),O=Math.cos(L);w.x=U*F,w.y=-R*n+m,w.z=U*O,u.push(w.x,w.y,w.z),M.set(F,x,O).normalize(),d.push(M.x,M.y,M.z),f.push(J,1-R),P.push(p++)}v.push(P)}for(let _=0;_<i;_++)for(let P=0;P<r;P++){let R=v[P][_],U=v[P+1][_],H=v[P+1][_+1],J=v[P][_+1];(e>0||P!==0)&&(h.push(R,U,J),T+=3),(t>0||P!==r-1)&&(h.push(U,H,J),T+=3)}l.addGroup(g,T,0),g+=T}function b(M){let w=p,T=new ge,x=new D,_=0,P=M===!0?e:t,R=M===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),p++;let U=p;for(let H=0;H<=i;H++){let L=H/i*c+a,F=Math.cos(L),O=Math.sin(L);x.x=P*O,x.y=m*R,x.z=P*F,u.push(x.x,x.y,x.z),d.push(0,R,0),T.x=F*.5+.5,T.y=O*.5*R+.5,f.push(T.x,T.y),p++}for(let H=0;H<i;H++){let J=w+H,L=U+H;M===!0?h.push(L,L+1,J):h.push(L+1,L,J),_+=3}l.addGroup(g,_,M===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zi=class s extends pn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Js=class s extends Tt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new D,M=new D,w=new D;for(let T=0;T<t.length;T+=3)f(t[T+0],b),f(t[T+1],M),f(t[T+2],w),c(b,M,w,y)}function c(y,b,M,w){let T=w+1,x=[];for(let _=0;_<=T;_++){x[_]=[];let P=y.clone().lerp(M,_/T),R=b.clone().lerp(M,_/T),U=T-_;for(let H=0;H<=U;H++)H===0&&_===T?x[_][H]=P:x[_][H]=P.clone().lerp(R,H/U)}for(let _=0;_<T;_++)for(let P=0;P<2*(T-_)-1;P++){let R=Math.floor(P/2);P%2===0?(d(x[_][R+1]),d(x[_+1][R]),d(x[_][R])):(d(x[_][R+1]),d(x[_+1][R+1]),d(x[_+1][R]))}}function l(y){let b=new D;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(y),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){let y=new D;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let M=m(y)/2/Math.PI+.5,w=g(y)/Math.PI+.5;o.push(M,1-w)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let b=o[y+0],M=o[y+2],w=o[y+4],T=Math.max(b,M,w),x=Math.min(b,M,w);T>.9&&x<.1&&(b<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,b){let M=y*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function p(){let y=new D,b=new D,M=new D,w=new D,T=new ge,x=new ge,_=new ge;for(let P=0,R=0;P<r.length;P+=9,R+=6){y.set(r[P+0],r[P+1],r[P+2]),b.set(r[P+3],r[P+4],r[P+5]),M.set(r[P+6],r[P+7],r[P+8]),T.set(o[R+0],o[R+1]),x.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),w.copy(y).add(b).add(M).divideScalar(3);let U=m(w);v(T,R+0,y,U),v(x,R+2,b,U),v(_,R+4,M,U)}}function v(y,b,M,w){w<0&&y.x===1&&(o[b]=y.x-1),M.x===0&&M.z===0&&(o[b]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}},Xr=class s extends Js{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ge:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,i=[],r=[],o=[],a=new D,c=new je;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(rt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},$s=class extends Sn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ge){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xa=class extends $s{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function th(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Ou=new D,Bu=new D,sc=new th,rc=new th,oc=new th,_a=class extends Sn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Bu.subVectors(i[0],i[1]).add(i[0]),l=Bu);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ou.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ou),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),sc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,v,m),rc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,v,m),oc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),rc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),oc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(sc.calc(c),rc.calc(c),oc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zu(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Hp(s,e){let t=1-s;return t*t*e}function Gp(s,e){return 2*(1-s)*s*e}function Vp(s,e){return s*s*e}function Cr(s,e,t,n){return Hp(s,e)+Gp(s,t)+Vp(s,n)}function Wp(s,e){let t=1-s;return t*t*t*e}function Xp(s,e){let t=1-s;return 3*t*t*s*e}function qp(s,e){return 3*(1-s)*s*s*e}function Yp(s,e){return s*s*s*e}function Ir(s,e,t,n,i){return Wp(s,e)+Xp(s,t)+qp(s,n)+Yp(s,i)}var qr=class extends Sn{constructor(e=new ge,t=new ge,n=new ge,i=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ge){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ir(e,i.x,r.x,o.x,a.x),Ir(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ya=class extends Sn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ir(e,i.x,r.x,o.x,a.x),Ir(e,i.y,r.y,o.y,a.y),Ir(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yr=class extends Sn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends Sn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zr=class extends Sn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Cr(e,i.x,r.x,o.x),Cr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends Sn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Cr(e,i.x,r.x,o.x),Cr(e,i.y,r.y,o.y),Cr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kr=class extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(zu(a,c.x,l.x,h.x,u.x),zu(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ge().fromArray(i))}return this}},mc=Object.freeze({__proto__:null,ArcCurve:xa,CatmullRomCurve3:_a,CubicBezierCurve:qr,CubicBezierCurve3:ya,EllipseCurve:$s,LineCurve:Yr,LineCurve3:va,QuadraticBezierCurve:Zr,QuadraticBezierCurve3:Ma,SplineCurve:Kr}),Sa=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new mc[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},Jr=class extends Sa{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Yr(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Zr(this.currentPoint.clone(),new ge(e,t),new ge(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new qr(this.currentPoint.clone(),new ge(e,t),new ge(n,i),new ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Kr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new $s(e,t,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},js=class extends Jr{constructor(e){super(e),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Jr().fromJSON(i))}return this}};function Zp(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Fd(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Qp(s,e,r,t)),s.length>80*t){a=s[0],c=s[1];let h=a,u=c;for(let d=t;d<i;d+=t){let f=s[d],p=s[d+1];f<a&&(a=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return $r(r,o,t,a,c,l,0),o}function Fd(s,e,t,n,i){let r;if(i===hm(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=ku(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=ku(o/n|0,s[o],s[o+1],r);return r&&Qs(r,r.next)&&(Qr(r),r=r.next),r}function os(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Qs(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $r(s,e,t,n,i,r,o){if(!s)return;!o&&r&&sm(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?Jp(s,n,i,r):Kp(s)){e.push(c.i,s.i,l.i),Qr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=$p(os(s),e),$r(s,e,t,n,i,r,2)):o===2&&jp(s,e,t,n,i,r):$r(os(s),e,t,n,i,r,1);break}}}function Kp(s){let e=s.prev,t=s,n=s.next;if(Ct(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(i,r,o),u=Math.min(a,c,l),d=Math.max(i,r,o),f=Math.max(a,c,l),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Tr(i,a,r,c,o,l,p.x,p.y)&&Ct(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Jp(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Ct(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,c,l),p=Math.min(h,u,d),v=Math.max(a,c,l),m=Math.max(h,u,d),g=gc(f,p,e,t,n),y=gc(v,m,e,t,n),b=s.prevZ,M=s.nextZ;for(;b&&b.z>=g&&M&&M.z<=y;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&Tr(a,h,c,u,l,d,b.x,b.y)&&Ct(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=f&&M.x<=v&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&Tr(a,h,c,u,l,d,M.x,M.y)&&Ct(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&Tr(a,h,c,u,l,d,b.x,b.y)&&Ct(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=v&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&Tr(a,h,c,u,l,d,M.x,M.y)&&Ct(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function $p(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Qs(n,i)&&Bd(n,t,t.next,i)&&jr(n,i)&&jr(i,n)&&(e.push(n.i,t.i,i.i),Qr(t),Qr(t.next),t=s=i),t=t.next}while(t!==s);return os(t)}function jp(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&am(o,a)){let c=zd(o,a);o=os(o,o.next),c=os(c,c.next),$r(o,e,t,n,i,r,0),$r(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Qp(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Fd(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(om(l))}i.sort(em);for(let r=0;r<i.length;r++)t=tm(i[r],t);return t}function em(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function tm(s,e){let t=nm(s,e);if(!t)return e;let n=zd(t,s);return os(n,n.next),os(t,t.next)}function nm(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(Qs(s,t))return t;do{if(Qs(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Od(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);jr(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&im(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function im(s,e){return Ct(s.prev,s,e.prev)<0&&Ct(e.next,s,s.next)<0}function sm(s,e,t,n){let i=s;do i.z===0&&(i.z=gc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,rm(i)}function rm(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function gc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function om(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Od(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Tr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Od(s,e,t,n,i,r,o,a)}function am(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!lm(s,e)&&(jr(s,e)&&jr(e,s)&&cm(s,e)&&(Ct(s.prev,s,e.prev)||Ct(s,e.prev,e))||Qs(s,e)&&Ct(s.prev,s,s.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Qs(s,e){return s.x===e.x&&s.y===e.y}function Bd(s,e,t,n){let i=Qo(Ct(s,e,t)),r=Qo(Ct(s,e,n)),o=Qo(Ct(t,n,s)),a=Qo(Ct(t,n,e));return!!(i!==r&&o!==a||i===0&&jo(s,t,e)||r===0&&jo(s,n,e)||o===0&&jo(t,s,n)||a===0&&jo(t,e,n))}function jo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Qo(s){return s>0?1:s<0?-1:0}function lm(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Bd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function jr(s,e){return Ct(s.prev,s,s.next)<0?Ct(s,e,s.next)>=0&&Ct(s,s.prev,e)>=0:Ct(s,e,s.prev)<0||Ct(s,s.next,e)<0}function cm(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function zd(s,e){let t=xc(s.i,s.x,s.y),n=xc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ku(s,e,t,n){let i=xc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hm(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var _c=class{static triangulate(e,t,n=2){return Zp(e,t,n)}},$i=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Hu(e),Gu(n,e);let o=e.length;t.forEach(Hu);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Gu(n,t[c]);let a=_c.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Hu(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Gu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var eo=class s extends Tt{constructor(e=new js([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new lt(i,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:um,b,M=!1,w,T,x,_;if(g){b=g.getSpacedPoints(h),M=!0,d=!1;let ie=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(h,ie),T=new D,x=new D,_=new D}d||(m=0,f=0,p=0,v=0);let P=a.extractPoints(l),R=P.shape,U=P.holes;if(!$i.isClockWise(R)){R=R.reverse();for(let ie=0,ue=U.length;ie<ue;ie++){let le=U[ie];$i.isClockWise(le)&&(U[ie]=le.reverse())}}function J(ie){let le=10000000000000001e-36,Se=ie[0];for(let me=1;me<=ie.length;me++){let We=me%ie.length,Fe=ie[We],et=Fe.x-Se.x,Xe=Fe.y-Se.y,at=et*et+Xe*Xe,z=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(Se.x),Math.abs(Se.y)),it=le*z*z;if(at<=it){ie.splice(We,1),me--;continue}Se=Fe}}J(R),U.forEach(J);let L=U.length,F=R;for(let ie=0;ie<L;ie++){let ue=U[ie];R=R.concat(ue)}function O(ie,ue,le){return ue||qe("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ue,le)}let N=R.length;function j(ie,ue,le){let Se,me,We,Fe=ie.x-ue.x,et=ie.y-ue.y,Xe=le.x-ie.x,at=le.y-ie.y,z=Fe*Fe+et*et,it=Fe*at-et*Xe;if(Math.abs(it)>Number.EPSILON){let Ze=Math.sqrt(z),ft=Math.sqrt(Xe*Xe+at*at),ye=ue.x-et/Ze,Mt=ue.y+Fe/Ze,Ie=le.x-at/ft,Ve=le.y+Xe/ft,A=((Ie-ye)*at-(Ve-Mt)*Xe)/(Fe*at-et*Xe);Se=ye+Fe*A-ie.x,me=Mt+et*A-ie.y;let S=Se*Se+me*me;if(S<=2)return new ge(Se,me);We=Math.sqrt(S/2)}else{let Ze=!1;Fe>Number.EPSILON?Xe>Number.EPSILON&&(Ze=!0):Fe<-Number.EPSILON?Xe<-Number.EPSILON&&(Ze=!0):Math.sign(et)===Math.sign(at)&&(Ze=!0),Ze?(Se=-et,me=Fe,We=Math.sqrt(z)):(Se=Fe,me=et,We=Math.sqrt(z/2))}return new ge(Se/We,me/We)}let I=[];for(let ie=0,ue=F.length,le=ue-1,Se=ie+1;ie<ue;ie++,le++,Se++)le===ue&&(le=0),Se===ue&&(Se=0),I[ie]=j(F[ie],F[le],F[Se]);let G=[],X,Q=I.concat();for(let ie=0,ue=L;ie<ue;ie++){let le=U[ie];X=[];for(let Se=0,me=le.length,We=me-1,Fe=Se+1;Se<me;Se++,We++,Fe++)We===me&&(We=0),Fe===me&&(Fe=0),X[Se]=j(le[Se],le[We],le[Fe]);G.push(X),Q=Q.concat(X)}let V;if(m===0)V=$i.triangulateShape(F,U);else{let ie=[],ue=[];for(let le=0;le<m;le++){let Se=le/m,me=f*Math.cos(Se*Math.PI/2),We=p*Math.sin(Se*Math.PI/2)+v;for(let Fe=0,et=F.length;Fe<et;Fe++){let Xe=O(F[Fe],I[Fe],We);we(Xe.x,Xe.y,-me),Se===0&&ie.push(Xe)}for(let Fe=0,et=L;Fe<et;Fe++){let Xe=U[Fe];X=G[Fe];let at=[];for(let z=0,it=Xe.length;z<it;z++){let Ze=O(Xe[z],X[z],We);we(Ze.x,Ze.y,-me),Se===0&&at.push(Ze)}Se===0&&ue.push(at)}}V=$i.triangulateShape(ie,ue)}let k=V.length,te=p+v;for(let ie=0;ie<N;ie++){let ue=d?O(R[ie],Q[ie],te):R[ie];M?(x.copy(w.normals[0]).multiplyScalar(ue.x),T.copy(w.binormals[0]).multiplyScalar(ue.y),_.copy(b[0]).add(x).add(T),we(_.x,_.y,_.z)):we(ue.x,ue.y,0)}for(let ie=1;ie<=h;ie++)for(let ue=0;ue<N;ue++){let le=d?O(R[ue],Q[ue],te):R[ue];M?(x.copy(w.normals[ie]).multiplyScalar(le.x),T.copy(w.binormals[ie]).multiplyScalar(le.y),_.copy(b[ie]).add(x).add(T),we(_.x,_.y,_.z)):we(le.x,le.y,u/h*ie)}for(let ie=m-1;ie>=0;ie--){let ue=ie/m,le=f*Math.cos(ue*Math.PI/2),Se=p*Math.sin(ue*Math.PI/2)+v;for(let me=0,We=F.length;me<We;me++){let Fe=O(F[me],I[me],Se);we(Fe.x,Fe.y,u+le)}for(let me=0,We=U.length;me<We;me++){let Fe=U[me];X=G[me];for(let et=0,Xe=Fe.length;et<Xe;et++){let at=O(Fe[et],X[et],Se);M?we(at.x,at.y+b[h-1].y,b[h-1].x+le):we(at.x,at.y,u+le)}}}ce(),_e();function ce(){let ie=i.length/3;if(d){let ue=0,le=N*ue;for(let Se=0;Se<k;Se++){let me=V[Se];Ne(me[2]+le,me[1]+le,me[0]+le)}ue=h+m*2,le=N*ue;for(let Se=0;Se<k;Se++){let me=V[Se];Ne(me[0]+le,me[1]+le,me[2]+le)}}else{for(let ue=0;ue<k;ue++){let le=V[ue];Ne(le[2],le[1],le[0])}for(let ue=0;ue<k;ue++){let le=V[ue];Ne(le[0]+N*h,le[1]+N*h,le[2]+N*h)}}n.addGroup(ie,i.length/3-ie,0)}function _e(){let ie=i.length/3,ue=0;ae(F,ue),ue+=F.length;for(let le=0,Se=U.length;le<Se;le++){let me=U[le];ae(me,ue),ue+=me.length}n.addGroup(ie,i.length/3-ie,1)}function ae(ie,ue){let le=ie.length;for(;--le>=0;){let Se=le,me=le-1;me<0&&(me=ie.length-1);for(let We=0,Fe=h+m*2;We<Fe;We++){let et=N*We,Xe=N*(We+1),at=ue+Se+et,z=ue+me+et,it=ue+me+Xe,Ze=ue+Se+Xe;Me(at,z,it,Ze)}}}function we(ie,ue,le){c.push(ie),c.push(ue),c.push(le)}function Ne(ie,ue,le){Oe(ie),Oe(ue),Oe(le);let Se=i.length/3,me=y.generateTopUV(n,i,Se-3,Se-2,Se-1);Ge(me[0]),Ge(me[1]),Ge(me[2])}function Me(ie,ue,le,Se){Oe(ie),Oe(ue),Oe(Se),Oe(ue),Oe(le),Oe(Se);let me=i.length/3,We=y.generateSideWallUV(n,i,me-6,me-3,me-2,me-1);Ge(We[0]),Ge(We[1]),Ge(We[3]),Ge(We[1]),Ge(We[2]),Ge(We[3])}function Oe(ie){i.push(c[ie*3+0]),i.push(c[ie*3+1]),i.push(c[ie*3+2])}function Ge(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return dm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new mc[i.type]().fromJSON(i)),new s(n,e.options)}},um={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new ge(r,o),new ge(a,c),new ge(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ge(o,1-c),new ge(l,1-u),new ge(d,1-p),new ge(v,1-g)]:[new ge(a,1-c),new ge(h,1-u),new ge(f,1-p),new ge(m,1-g)]}};function dm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var yi=class s extends Js{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var to=class s extends Js{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},sn=class s extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let y=g*d-o;for(let b=0;b<l;b++){let M=b*u-r;p.push(M,-y,0),v.push(0,0,1),m.push(b/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<a;y++){let b=y+l*g,M=y+l*(g+1),w=y+1+l*(g+1),T=y+1+l*g;f.push(b,M,T),f.push(M,w,T)}this.setIndex(f),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Kt=class s extends Tt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,d=new D,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let y=[],b=g/n,M=o+b*a,w=e*Math.cos(M),T=Math.sqrt(e*e-w*w),x=0;g===0&&o===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let _=0;_<=t;_++){let P=_/t,R=i+P*r;u.x=-T*Math.cos(R),u.y=w,u.z=T*Math.sin(R),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(P+x,1-b),y.push(l++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let b=h[g][y+1],M=h[g][y],w=h[g+1][y],T=h[g+1][y+1];(g!==0||o>0)&&f.push(b,M,T),(g!==n-1||c<Math.PI)&&f.push(M,w,T)}this.setIndex(f),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zn=class s extends Tt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],d=new D,f=new D,p=new D;for(let v=0;v<=n;v++){let m=o+v/n*a;for(let g=0;g<=i;g++){let y=g/i*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){let g=(i+1)*v+m-1,y=(i+1)*(v-1)+m-1,b=(i+1)*(v-1)+m,M=(i+1)*v+m;c.push(g,y,M),c.push(y,b,M)}this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function xs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Vu(i))i.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Vu(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function rn(s){let e={};for(let t=0;t<s.length;t++){let n=xs(s[t]);for(let i in n)e[i]=n[i]}return e}function Vu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function fm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function nh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var kd={clone:xs,merge:rn},pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pm,this.fragmentShader=mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(i.value);break;case"v2":this.uniforms[n].value=new ge().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(i.value);break;case"m4":this.uniforms[n].value=new je().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ba=class extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yt=class extends dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ut=class extends yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ji('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ji('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ea=class extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ta=class extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function wr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function gm(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Wu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function xm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Kn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wa=class extends Kn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uc,endingEnd:uc}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case dc:r=e,a=2*t-n;break;case fc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case dc:o=e,c=2*n-t;break;case fc:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),v=p*p,m=v*p,g=-d*m+2*d*v-d*p,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*p+1,b=(-1-f)*m+(1.5+f)*v+.5*p,M=f*m-f*v;for(let w=0;w!==a;++w)r[w]=g*o[h+w]+y*o[l+w]+b*o[c+w]+M*o[u+w];return r}},Aa=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Ra=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ca=class extends Kn{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),v=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*v+o[c+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let v=o[l+p],m=o[c+p],g=f*d+p*2,y=u[g],b=u[g+1],M=e*d+p*2,w=h[M],T=h[M+1],x=ym(n,t,y,w,i);r[p]=Hd(x,v,b,T,m)}return r}};function Hd(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function _m(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function ym(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=Hd(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let c=_m(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var mn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fi(t,this.TimeBufferType),this.values=Fi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fi(e.times,Array),values:Fi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),wr(e.settings)&&(n.settings={inTangents:Fi(e.settings.inTangents,Array),outTangents:Fi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ca(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qi:t=this.InterpolantFactoryMethodDiscrete;break;case es:t=this.InterpolantFactoryMethodLinear;break;case na:t=this.InterpolantFactoryMethodSmooth;break;case hc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qi;case this.InterpolantFactoryMethodLinear:return es;case this.InterpolantFactoryMethodSmooth:return na;case this.InterpolantFactoryMethodBezier:return hc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;wr(this.settings)&&(Xu(this.settings.inTangents,e),Xu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;wr(this.settings)&&(qu(this.settings.inTangents,e),qu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){qe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){qe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&sp(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){qe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===na,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let v=t[u+p];if(v!==t[d+p]||v!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,wr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Xu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function qu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=es;var vi=class extends mn{constructor(e,t,n){super(e,t,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Qi;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends mn{constructor(e,t,n,i){super(e,t,n,i)}};no.prototype.ValueTypeName="color";var Mi=class extends mn{constructor(e,t,n,i){super(e,t,n,i)}};Mi.prototype.ValueTypeName="number";var Ia=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)yn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Si=class extends mn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}};Si.prototype.ValueTypeName="quaternion";Si.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends mn{constructor(e,t,n){super(e,t,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Qi;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends mn{constructor(e,t,n,i){super(e,t,n,i)}};ki.prototype.ValueTypeName="vector";var io=class{constructor(e="",t=-1,n=[],i=Sd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Mm(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=gm(c);c=Wu(c,1,h),l=Wu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Mi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function vm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mi;case"vector":case"vector2":case"vector3":case"vector4":return ki;case"color":return no;case"quaternion":return Si;case"bool":case"boolean":return vi;case"string":return bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Mm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=vm(s.type);if(s.times===void 0){let n=[],i=[];xm(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),wr(s.settings)&&(t.settings={inTangents:Fi(s.settings.inTangents,Float32Array),outTangents:Fi(s.settings.outTangents,Float32Array)}),t}var Xn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Yu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Yu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Yu(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Pa=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gd=new Pa,Jn=class{constructor(e){this.manager=e!==void 0?e:Gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Jn.DEFAULT_MATERIAL_NAME="__DEFAULT";var di={},yc=class extends Error{constructor(e,t){super(e),this.response=t}},er=class extends Jn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Xn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:n,onError:i});return}di[e]=[],di[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=di[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,v=0,m=new ReadableStream({start(g){y();function y(){u.read().then(({done:b,value:M})=>{if(b)g.close();else{v+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let T=0,x=h.length;T<x;T++){let _=h[T];_.onProgress&&_.onProgress(w)}g.enqueue(M),y()}},b=>{g.error(b)})}}});return new Response(m)}else throw new yc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Xn.add(`file:${e}`,l);let h=di[e];delete di[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=di[e];if(h===void 0)throw this.manager.itemError(e),l;delete di[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ns=new WeakMap,La=class extends Jn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Xn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ns.get(o);u===void 0&&(u=[],Ns.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=ks("img");function c(){h(),t&&t(this);let u=Ns.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ns.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),Xn.remove(`image:${e}`);let d=Ns.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Ns.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xn.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var as=class extends Jn{constructor(e){super(e)}load(e,t,n,i){let r=new zt,o=new La(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ls=class extends vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},cs=class extends ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ac=new je,Zu=new D,Ku=new D,tr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bi,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zu),Ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ku),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ac,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===zs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ea=new D,ta=new yn,Wn=new D,so=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ea,ta,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,ta,Wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ea,ta,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,ta,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ui=new D,Ju=new ge,$u=new ge,Ot=class extends so{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Ju,$u),t.subVectors($u,Ju)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vc=class extends tr{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ts*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ro=class extends ls{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Mc=class extends tr{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0}},oo=class extends ls{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hs=class extends so{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sc=class extends tr{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ei=class extends ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Sc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ti=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var lc=new WeakMap,ao=class extends Jn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Xn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{lc.has(o)===!0?(i&&i(lc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Xn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),lc.set(c,l),Xn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Xn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ds=-90,Us=1,nr=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ot(Ds,Us,e,t);i.layers=this.layers,this.add(i);let r=new Ot(Ds,Us,e,t);r.layers=this.layers,this.add(r);let o=new Ot(Ds,Us,e,t);o.layers=this.layers,this.add(o);let a=new Ot(Ds,Us,e,t);a.layers=this.layers,this.add(a);let c=new Ot(Ds,Us,e,t);c.layers=this.layers,this.add(c);let l=new Ot(Ds,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Na=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var ih="\\[\\]\\.:\\/",Sm=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",bm="[^"+ih.replace("\\.","")+"]",Em=/((?:WC+[\/:])*)/.source.replace("WC",sh),Tm=/(WCOD+)?/.source.replace("WCOD",bm),wm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),Am=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),Rm=new RegExp("^"+Em+Tm+wm+Am+"$"),Cm=["material","materials","bones","map"],bc=class{constructor(e,t,n){let i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sm,"")}static parseTrackName(e){let t=Rm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Cm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=bc;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iv=new Float32Array(1);var Ec=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function rh(s,e,t,n){let i=Im(n);switch(t){case Vc:return s*e;case ka:return s*e/i.components*i.byteLength;case Ha:return s*e/i.components*i.byteLength;case Hi:return s*e*2/i.components*i.byteLength;case Ga:return s*e*2/i.components*i.byteLength;case Wc:return s*e*3/i.components*i.byteLength;case In:return s*e*4/i.components*i.byteLength;case Va:return s*e*4/i.components*i.byteLength;case co:case ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ya:return Math.max(s,16)*Math.max(e,8)/4;case Wa:case qa:return Math.max(s,8)*Math.max(e,8)/2;case Za:case Ka:case $a:case ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ja:case po:case Qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case nl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case il:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case rl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case al:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case cl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case pl:case ml:case gl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xl:case _l:return Math.ceil(s/4)*Math.ceil(e/4)*8;case mo:case yl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Im(s){switch(s){case gn:case zc:return{byteLength:1,components:1};case ar:case kc:case kn:return{byteLength:2,components:1};case Ba:case za:return{byteLength:2,components:4};case zn:case Oa:case bn:return{byteLength:4,components:1};case Hc:case Gc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uf(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Nm(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Um=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ym=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,s0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c0="gl_FragColor = linearToOutputTexel( gl_FragColor );",h0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,M0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,T0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,w0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,P0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,L0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,F0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,V0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ng=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_g=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ag=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ex=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ux=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Dm,alphahash_pars_fragment:Um,alphamap_fragment:Fm,alphamap_pars_fragment:Om,alphatest_fragment:Bm,alphatest_pars_fragment:zm,aomap_fragment:km,aomap_pars_fragment:Hm,batching_pars_vertex:Gm,batching_vertex:Vm,begin_vertex:Wm,beginnormal_vertex:Xm,bsdfs:qm,iridescence_fragment:Ym,bumpmap_pars_fragment:Zm,clipping_planes_fragment:Km,clipping_planes_pars_fragment:Jm,clipping_planes_pars_vertex:$m,clipping_planes_vertex:jm,color_fragment:Qm,color_pars_fragment:e0,color_pars_vertex:t0,color_vertex:n0,common:i0,defaultnormal_vertex:s0,displacementmap_pars_vertex:r0,displacementmap_vertex:o0,emissivemap_fragment:a0,emissivemap_pars_fragment:l0,colorspace_fragment:c0,colorspace_pars_fragment:h0,envmap_fragment:u0,envmap_common_pars_fragment:d0,envmap_pars_fragment:f0,envmap_pars_vertex:p0,envmap_physical_pars_fragment:T0,envmap_vertex:m0,fog_vertex:g0,fog_pars_vertex:x0,fog_fragment:_0,fog_pars_fragment:y0,gradientmap_pars_fragment:v0,lightmap_pars_fragment:M0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:b0,lights_pars_begin:E0,lights_toon_fragment:w0,lights_toon_pars_fragment:A0,lights_phong_fragment:R0,lights_phong_pars_fragment:C0,lights_physical_fragment:I0,lights_physical_pars_fragment:P0,lights_fragment_begin:L0,lights_fragment_maps:N0,lights_fragment_end:D0,lightprobes_pars_fragment:U0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:O0,logdepthbuf_pars_vertex:B0,logdepthbuf_vertex:z0,map_fragment:k0,map_pars_fragment:H0,map_particle_fragment:G0,map_particle_pars_fragment:V0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:q0,morphcolor_vertex:Y0,morphnormal_vertex:Z0,morphtarget_pars_vertex:K0,morphtarget_vertex:J0,normal_fragment_begin:$0,normal_fragment_maps:j0,normal_pars_fragment:Q0,normal_pars_vertex:eg,normal_vertex:tg,normalmap_pars_fragment:ng,clearcoat_normal_fragment_begin:ig,clearcoat_normal_fragment_maps:sg,clearcoat_pars_fragment:rg,iridescence_pars_fragment:og,opaque_fragment:ag,packing:lg,premultiplied_alpha_fragment:cg,project_vertex:hg,dithering_fragment:ug,dithering_pars_fragment:dg,roughnessmap_fragment:fg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:gg,shadowmap_vertex:xg,shadowmask_pars_fragment:_g,skinbase_vertex:yg,skinning_pars_vertex:vg,skinning_vertex:Mg,skinnormal_vertex:Sg,specularmap_fragment:bg,specularmap_pars_fragment:Eg,tonemapping_fragment:Tg,tonemapping_pars_fragment:wg,transmission_fragment:Ag,transmission_pars_fragment:Rg,uv_pars_fragment:Cg,uv_pars_vertex:Ig,uv_vertex:Pg,worldpos_vertex:Lg,background_vert:Ng,background_frag:Dg,backgroundCube_vert:Ug,backgroundCube_frag:Fg,cube_vert:Og,cube_frag:Bg,depth_vert:zg,depth_frag:kg,distance_vert:Hg,distance_frag:Gg,equirect_vert:Vg,equirect_frag:Wg,linedashed_vert:Xg,linedashed_frag:qg,meshbasic_vert:Yg,meshbasic_frag:Zg,meshlambert_vert:Kg,meshlambert_frag:Jg,meshmatcap_vert:$g,meshmatcap_frag:jg,meshnormal_vert:Qg,meshnormal_frag:ex,meshphong_vert:tx,meshphong_frag:nx,meshphysical_vert:ix,meshphysical_frag:sx,meshtoon_vert:rx,meshtoon_frag:ox,points_vert:ax,points_frag:lx,shadow_vert:cx,shadow_frag:hx,sprite_vert:ux,sprite_frag:dx},Ae={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ei={basic:{uniforms:rn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:rn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:rn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:rn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:rn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ce(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:rn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:rn([Ae.points,Ae.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:rn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:rn([Ae.common,Ae.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:rn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:rn([Ae.sprite,Ae.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:rn([Ae.common,Ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:rn([Ae.lights,Ae.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ei.physical={uniforms:rn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Sl={r:0,b:0,g:0},fx=new je,df=new Je;df.set(-1,0,0,0,1,0,0,0,1);function px(s,e,t,n,i,r){let o=new Ce(0),a=i===!0?0:1,c,l,h=null,u=0,d=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let M=y.backgroundBlurriness>0;b=e.get(b,M)}return b}function p(y){let b=!1,M=f(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),b=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(y,b){let M=f(b);M&&M.isCubeTexture?(l===void 0&&(l=new Qe(new Yn(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:xs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(fx.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(df),l.material.toneMapped=st.getTransfer(M.colorSpace)!==xt,(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Qe(new sn(2,2),new Jt({name:"BackgroundMaterial",uniforms:xs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=st.getTransfer(M.colorSpace)!==xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,b){y.getRGB(Sl,nh(s)),t.buffers.color.setClear(Sl.r,Sl.g,Sl.b,b,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:v,dispose:g}}function mx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(U,H,J,L,F){let O=!1,N=u(U,L,J,H);r!==N&&(r=N,l(r.object)),O=f(U,L,J,F),O&&p(U,L,J,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,M(U,H,J,L),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return s.createVertexArray()}function l(U){return s.bindVertexArray(U)}function h(U){return s.deleteVertexArray(U)}function u(U,H,J,L){let F=L.wireframe===!0,O=n[H.id];O===void 0&&(O={},n[H.id]=O);let N=U.isInstancedMesh===!0?U.id:0,j=O[N];j===void 0&&(j={},O[N]=j);let I=j[J.id];I===void 0&&(I={},j[J.id]=I);let G=I[F];return G===void 0&&(G=d(c()),I[F]=G),G}function d(U){let H=[],J=[],L=[];for(let F=0;F<t;F++)H[F]=0,J[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:L,object:U,attributes:{},index:null}}function f(U,H,J,L){let F=r.attributes,O=H.attributes,N=0,j=J.getAttributes();for(let I in j)if(j[I].location>=0){let X=F[I],Q=O[I];if(Q===void 0&&(I==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),I==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),X===void 0||X.attribute!==Q||Q&&X.data!==Q.data)return!0;N++}return r.attributesNum!==N||r.index!==L}function p(U,H,J,L){let F={},O=H.attributes,N=0,j=J.getAttributes();for(let I in j)if(j[I].location>=0){let X=O[I];X===void 0&&(I==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),I==="instanceColor"&&U.instanceColor&&(X=U.instanceColor));let Q={};Q.attribute=X,X&&X.data&&(Q.data=X.data),F[I]=Q,N++}r.attributes=F,r.attributesNum=N,r.index=L}function v(){let U=r.newAttributes;for(let H=0,J=U.length;H<J;H++)U[H]=0}function m(U){g(U,0)}function g(U,H){let J=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;J[U]=1,L[U]===0&&(s.enableVertexAttribArray(U),L[U]=1),F[U]!==H&&(s.vertexAttribDivisor(U,H),F[U]=H)}function y(){let U=r.newAttributes,H=r.enabledAttributes;for(let J=0,L=H.length;J<L;J++)H[J]!==U[J]&&(s.disableVertexAttribArray(J),H[J]=0)}function b(U,H,J,L,F,O,N){N===!0?s.vertexAttribIPointer(U,H,J,F,O):s.vertexAttribPointer(U,H,J,L,F,O)}function M(U,H,J,L){v();let F=L.attributes,O=J.getAttributes(),N=H.defaultAttributeValues;for(let j in O){let I=O[j];if(I.location>=0){let G=F[j];if(G===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(G=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(G=U.instanceColor)),G!==void 0){let X=G.normalized,Q=G.itemSize,V=e.get(G);if(V===void 0)continue;let k=V.buffer,te=V.type,ce=V.bytesPerElement,_e=te===s.INT||te===s.UNSIGNED_INT||G.gpuType===Oa;if(G.isInterleavedBufferAttribute){let ae=G.data,we=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,Ne=G.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let Me=0;Me<I.locationSize;Me++)g(I.location+Me,ae.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Me=0;Me<I.locationSize;Me++)m(I.location+Me);s.bindBuffer(s.ARRAY_BUFFER,k);for(let Me=0;Me<I.locationSize;Me++)b(I.location+Me,Q/I.locationSize,te,X,we*ce,(Ne+Q/I.locationSize*Me)*ce,_e)}else{if(G.isInstancedBufferAttribute){for(let ae=0;ae<I.locationSize;ae++)g(I.location+ae,G.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ae=0;ae<I.locationSize;ae++)m(I.location+ae);s.bindBuffer(s.ARRAY_BUFFER,k);for(let ae=0;ae<I.locationSize;ae++)b(I.location+ae,Q/I.locationSize,te,X,Q*ce,Q/I.locationSize*ae*ce,_e)}}else if(N!==void 0){let X=N[j];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(I.location,X);break;case 3:s.vertexAttrib3fv(I.location,X);break;case 4:s.vertexAttrib4fv(I.location,X);break;default:s.vertexAttrib1fv(I.location,X)}}}}y()}function w(){P();for(let U in n){let H=n[U];for(let J in H){let L=H[J];for(let F in L){let O=L[F];for(let N in O)h(O[N].object),delete O[N];delete L[F]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;let H=n[U.id];for(let J in H){let L=H[J];for(let F in L){let O=L[F];for(let N in O)h(O[N].object),delete O[N];delete L[F]}}delete n[U.id]}function x(U){for(let H in n){let J=n[H];for(let L in J){let F=J[L];if(F[U.id]===void 0)continue;let O=F[U.id];for(let N in O)h(O[N].object),delete O[N];delete F[U.id]}}}function _(U){for(let H in n){let J=n[H],L=U.isInstancedMesh===!0?U.id:0,F=J[L];if(F!==void 0){for(let O in F){let N=F[O];for(let j in N)h(N[j].object),delete N[j];delete F[O]}delete J[L],Object.keys(J).length===0&&delete n[H]}}}function P(){R(),o=!0,r!==i&&(r=i,l(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function gx(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function xx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==In&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let _=x===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==gn&&x!==bn&&!_&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(ke("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:w,samples:T}}function _x(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Bn,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,b=y*4,M=g.clippingState||null;c.value=M,M=h(p,d,b,f);for(let w=0;w!==b;++w)M[w]=t[w];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,p!==!0||m===null){let g=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,M=f;b!==v;++b,M+=4)o.copy(u[b]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var yo=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Yn(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:ds});r.uniforms.tEquirect.value=t;let o=new Qe(i,r),a=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Bt),new nr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Vd=256,yx=3,vx=20,ff=256,pf=16,Mx=3,Sx=new D,bx=new Ce,hr=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new nr(1,10,null),this._boxMesh=new Qe(new Yn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Sx}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,p=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(bx));let m=new nr(n,i,h);return m.position.copy(a),m.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=p,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Vd,jc(e))}_fromTexture(e,t){e.mapping===ps||e.mapping===rr?this._setSize(e.image.length===0?Vd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Wd(e,!1,!1),n=Math.log2(e)-yx;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Wd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ps||e.mapping===rr?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Xd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ex(),this._integrationMaterial=Tx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/pf);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-Mx)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(ff*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=wx());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function Wd(s,e,t){return new yo(s,{minFilter:Cn,generateMipmaps:e,type:kn,colorSpace:cn,depthBuffer:t})}function vo(s,e,t){return new Jt({name:s,uniforms:e,vertexShader:nt.cube_vert,fragmentShader:t,side:kt,blending:ds,depthTest:!1,depthWrite:!1})}function Ex(){return vo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ff}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Tx(){return vo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:pf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function wx(){return vo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${vx}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Xd(){return vo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function qd(){return vo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ax(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Da||f===Ua)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let v=new yo(p.height);return v.fromEquirectangularTexture(s,d),e.set(d,v),d.addEventListener("dispose",l),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Da||f===Ua,v=f===ps||f===rr;if(p||v){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new hr(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||v&&y&&c(y)?(n===null&&(n=new hr(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Da?d.mapping=ps:f===Ua&&(d.mapping=rr),d}function c(d){let f=0,p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function l(d){let f=d.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Rx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ji("WebGLRenderer: "+n+" extension not supported."),i}}}function Cx(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let v=r.get(p);v&&(e.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(p){let v=p.attributes;for(let m in v)e.update(v[m],s.ARRAY_BUFFER)}function u(p){let v=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=v!==null?v.array.length:m.array.length/3-1,b=m.count>=65535?Or:Fr,M=new b(Math.ceil(y/3)*6,1),w=M.array;if(v!==null){let x=v.array;g=v.version;for(let _=0,P=0;_<y;_+=3){let R=x[_+0],U=x[_+1],H=x[_+2];w[P++]=R,w[P++]=U,w[P++]=U,w[P++]=H,w[P++]=H,w[P++]=R}}else{g=m.version;for(let x=0,_=0;x<y;x+=3){let P=x+0,R=x+1,U=x+2;w[_++]=P,w[_++]=R,w[_++]=R,w[_++]=U,w[_++]=U,w[_++]=P}}M.version=g;let T=r.get(p);T&&e.remove(T),r.set(p,M)}function d(p){let v=r.get(p);if(v){let m=p.index;m!==null&&v.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in i){let v=i[p].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function Ix(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){s.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Px(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Lx(s,e,t){let n=new WeakMap,i=new _t;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),v===!0&&(b=3);let M=a.attributes.position.count*b,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*w*4*u),x=new Nr(T,M,w,u);x.type=bn,x.needsUpdate=!0;let _=b*4;for(let R=0;R<u;R++){let U=m[R],H=g[R],J=y[R],L=M*w*4*R;for(let F=0;F<U.count;F++){let O=F*_;f===!0&&(i.fromBufferAttribute(U,F),T[L+O+0]=i.x,T[L+O+1]=i.y,T[L+O+2]=i.z,T[L+O+3]=0),p===!0&&(i.fromBufferAttribute(H,F),T[L+O+4]=i.x,T[L+O+5]=i.y,T[L+O+6]=i.z,T[L+O+7]=0),v===!0&&(i.fromBufferAttribute(J,F),T[L+O+8]=i.x,T[L+O+9]=i.y,T[L+O+10]=i.z,T[L+O+11]=J.itemSize===4?i.w:1)}}d={count:u,texture:x,size:new ge(M,w)},n.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Nx(s,e,t,n,i){let r=new WeakMap;function o(l){let h=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Dx={[Lc]:"LINEAR_TONE_MAPPING",[Nc]:"REINHARD_TONE_MAPPING",[Dc]:"CINEON_TONE_MAPPING",[lo]:"ACES_FILMIC_TONE_MAPPING",[Fc]:"AGX_TONE_MAPPING",[Oc]:"NEUTRAL_TONE_MAPPING",[Uc]:"CUSTOM_TONE_MAPPING"};function Ux(s,e,t,n,i,r){let o=new vn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new Tt;h.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new lt([0,2,0,0,2,0],2));let u=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Qe(h,u),f=new hs(-1,1,1,-1,0,1),p=null,v=null,m=!1,g,y=null,b=[],M=!1;this.setSize=function(w,T){o.setSize(w,T),a!==null&&a.setSize(w,T),c!==null&&c.setSize(w,T);for(let x=0;x<b.length;x++){let _=b[x];_.setSize&&_.setSize(w,T)}},this.setEffects=function(w){b=w,M=b.length>0&&b[0].isRenderPass===!0;let T=o.width,x=o.height;b.length>0&&a===null&&(a=new vn(T,x,{type:kn,depthBuffer:!1,stencilBuffer:!1}),c=new vn(T,x,{type:kn,depthBuffer:!1,stencilBuffer:!1}));let _=i===!0&&b.some(P=>P.needsDepthTexture===!0);_!==(o.depthTexture!==null)&&(_===!0&&l===null&&(l=new _i(T,x),r===!0&&(l.format=wi,l.type=gs)),o.dispose(),o.depthTexture=_?l:null,o.resolveDepthBuffer=_,o.storeMultisampledDepthBuffer=_);for(let P=0;P<b.length;P++){let R=b[P];R.setSize&&R.setSize(T,x),_&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(w,T){if(m||w.toneMapping===jn&&b.length===0)return!1;if(y=T,T!==null){let x=T.width,_=T.height;(o.width!==x||o.height!==_)&&this.setSize(x,_)}return M===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=jn,!0},this.hasRenderPass=function(){return M},this.end=function(w,T){w.toneMapping=g,m=!0;let x=o,_=a;for(let P=0;P<b.length;P++){let R=b[P];R.enabled!==!1&&(R.render(w,_,x,T),R.needsSwap!==!1&&(x=_,_=_===a?c:a))}if(p!==w.outputColorSpace||v!==w.toneMapping){p=w.outputColorSpace,v=w.toneMapping,u.defines={},st.getTransfer(p)===xt&&(u.defines.SRGB_TRANSFER="");let P=Dx[v];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(y),w.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var mf=new zt,gf=new _i(1,1),xf=new Vr(1),_f=new Nr,yf=new fa,vf=new Gr,Yd=[],Zd=[],Kd=new Float32Array(16),Jd=new Float32Array(9),$d=new Float32Array(4);function ur(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Yd[i];if(r===void 0&&(r=new Float32Array(i),Yd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Wt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Tl(s,e){let t=Zd[e];t===void 0&&(t=new Int32Array(e),Zd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Fx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ox(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2fv(this.addr,e),Wt(t,e)}}function Bx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;s.uniform3fv(this.addr,e),Wt(t,e)}}function zx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4fv(this.addr,e),Wt(t,e)}}function kx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;$d.set(n),s.uniformMatrix2fv(this.addr,!1,$d),Wt(t,n)}}function Hx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Jd.set(n),s.uniformMatrix3fv(this.addr,!1,Jd),Wt(t,n)}}function Gx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Kd.set(n),s.uniformMatrix4fv(this.addr,!1,Kd),Wt(t,n)}}function Vx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Wx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2iv(this.addr,e),Wt(t,e)}}function Xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3iv(this.addr,e),Wt(t,e)}}function qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4iv(this.addr,e),Wt(t,e)}}function Yx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Zx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2uiv(this.addr,e),Wt(t,e)}}function Kx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3uiv(this.addr,e),Wt(t,e)}}function Jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4uiv(this.addr,e),Wt(t,e)}}function wl(s){return s.version===0&&(s.compareFunction=Zc,s.needsUpdate=!0),s}function $x(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=wl(gf):r=mf,t.setTexture2D(e||r,i)}function jx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yf,i)}function Qx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=wl(xf):r=vf,t.setTextureCube(e||r,i)}function e_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_f,i)}function t_(s){switch(s){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return kx;case 35675:return Hx;case 35676:return Gx;case 5124:case 35670:return Vx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return Zx;case 36295:return Kx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return e_}}function n_(s,e){s.uniform1fv(this.addr,e)}function i_(s,e){let t=ur(e,this.size,2);s.uniform2fv(this.addr,t)}function s_(s,e){let t=ur(e,this.size,3);s.uniform3fv(this.addr,t)}function r_(s,e){let t=ur(e,this.size,4);s.uniform4fv(this.addr,t)}function o_(s,e){let t=ur(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function a_(s,e){let t=ur(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function l_(s,e){let t=ur(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function c_(s,e){s.uniform1iv(this.addr,e)}function h_(s,e){s.uniform2iv(this.addr,e)}function u_(s,e){s.uniform3iv(this.addr,e)}function d_(s,e){s.uniform4iv(this.addr,e)}function f_(s,e){s.uniform1uiv(this.addr,e)}function p_(s,e){s.uniform2uiv(this.addr,e)}function m_(s,e){s.uniform3uiv(this.addr,e)}function g_(s,e){s.uniform4uiv(this.addr,e)}function x_(s,e,t){let n=this.cache,i=e.length,r=Tl(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=wl(gf):o=mf;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function __(s,e,t){let n=this.cache,i=e.length,r=Tl(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||yf,r[o])}function y_(s,e,t){let n=this.cache,i=e.length,r=Tl(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=wl(xf):o=vf;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function v_(s,e,t){let n=this.cache,i=e.length,r=Tl(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||_f,r[o])}function M_(s){switch(s){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return o_;case 35675:return a_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return v_}}var lh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=t_(t.type)}},ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M_(t.type)}},hh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},oh=/(\w+)(\])?(\[|\.)?/g;function jd(s,e){s.seq.push(e),s.map[e.id]=e}function S_(s,e,t){let n=s.name,i=n.length;for(oh.lastIndex=0;;){let r=oh.exec(n),o=oh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){jd(t,l===void 0?new lh(a,s,e):new ch(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new hh(a),jd(t,u)),t=u}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);S_(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Qd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var b_=37297,E_=0;function T_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ef=new Je;function w_(s){st._getMatrix(ef,st.workingColorSpace,s);let e=`mat3( ${ef.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(s)){case Pr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function tf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+T_(s.getShaderSource(e),a)}else return r}function A_(s,e){let t=w_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var R_={[Lc]:"Linear",[Nc]:"Reinhard",[Dc]:"Cineon",[lo]:"ACESFilmic",[Fc]:"AgX",[Oc]:"Neutral",[Uc]:"Custom"};function C_(s,e){let t=R_[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var bl=new D;function I_(){st.getLuminanceCoefficients(bl);let s=bl.x.toFixed(4),e=bl.y.toFixed(4),t=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function L_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function _o(s){return s!==""}function nf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function sf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(s){return s.replace(D_,U_)}function U_(s,e){let t=nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return uh(t)}var F_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rf(s){return s.replace(F_,O_)}function O_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function of(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var B_={[us]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function z_(s){return B_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var k_={[rr]:"ENVMAP_MODE_REFRACTION"};function H_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":k_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var G_={[Pc]:"ENVMAP_BLENDING_MULTIPLY",[yd]:"ENVMAP_BLENDING_MIX",[vd]:"ENVMAP_BLENDING_ADD"};function V_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":G_[s.combine]||"ENVMAP_BLENDING_NONE"}function W_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=z_(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=H_(t),u=V_(t),d=P_(t),f=L_(r),p=i.createProgram(),v,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_o).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_o).join(`
`),m.length>0&&(m+=`
`)):(v=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),m=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?nt.tonemapping_pars_fragment:"",t.toneMapping!==jn?C_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,A_("linearToOutputTexel",t.outputColorSpace),I_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_o).join(`
`)),o=uh(o),o=nf(o,t),o=sf(o,t),a=uh(a),a=nf(a,t),a=sf(a,t),o=rf(o),a=rf(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+v+o,b=g+m+a,M=Qd(i,i.VERTEX_SHADER,y),w=Qd(i,i.FRAGMENT_SHADER,b);i.attachShader(p,M),i.attachShader(p,w),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function T(R){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(p)||"",H=i.getShaderInfoLog(M)||"",J=i.getShaderInfoLog(w)||"",L=U.trim(),F=H.trim(),O=J.trim(),N=!0,j=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,M,w);else{let I=tf(i,M,"vertex"),G=tf(i,w,"fragment");qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+I+`
`+G)}else L!==""?ke("WebGLProgram: Program Info Log:",L):(F===""||O==="")&&(j=!1);j&&(R.diagnostics={runnable:N,programLog:L,vertexShader:{log:F,prefix:v},fragmentShader:{log:O,prefix:m}})}i.deleteShader(M),i.deleteShader(w),x=new cr(i,p),_=N_(i,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(p,b_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=w,this}var X_=0,dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fh(e),t.set(e,n)),n}},fh=class{constructor(e){this.id=X_++,this.code=e,this.usedTimes=0}};function q_(s){return s===Hi||s===po||s===mo}function Y_(s,e,t,n,i,r){let o=new Dr,a=new dh,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,_,P,R,U,H){let J=R.fog,L=U.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=e.get(x.envMap||F,O),j=d[x.type],I=n.precision;x.precision!==null&&(I=n.getMaxPrecision(x.precision),I!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",I,"instead."));let G=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,X=G!==void 0?G.length:0,Q=0;L.morphAttributes.position!==void 0&&(Q=1),L.morphAttributes.normal!==void 0&&(Q=2),L.morphAttributes.color!==void 0&&(Q=3);let V,k,te,ce;if(j){let Ee=ei[j];V=Ee.vertexShader,k=Ee.fragmentShader}else{V=x.vertexShader,k=x.fragmentShader;let Ee=a.getVertexShaderStage(x),ut=a.getFragmentShaderStage(x);a.update(x,Ee,ut),te=Ee.id,ce=ut.id}let _e=s.getRenderTarget(),ae=s.state.buffers.depth.getReversed(),we=U.isInstancedMesh===!0,Ne=U.isBatchedMesh===!0,Me=!!x.map,Oe=!!x.matcap,Ge=!!N,ie=Ge&&N.isPMREMTexture===!0,ue=!!x.aoMap,le=!!x.lightMap,Se=!!x.bumpMap&&x.wireframe===!1,me=!!x.normalMap,We=!!x.displacementMap,Fe=!!x.emissiveMap,et=!!x.metalnessMap,Xe=!!x.roughnessMap,at=x.anisotropy>0,z=x.clearcoat>0,it=x.diffuseRoughness>0,Ze=x.dispersion>0,ft=x.retroreflectivity>0,ye=x.iridescence>0,Mt=x.sheen>0,Ie=x.transmission>0,Ve=at&&!!x.anisotropyMap,A=z&&!!x.clearcoatMap,S=z&&!!x.clearcoatNormalMap,Y=z&&!!x.clearcoatRoughnessMap,he=it&&!!x.diffuseRoughnessMap,re=ye&&!!x.iridescenceMap,xe=ye&&!!x.iridescenceThicknessMap,ve=Mt&&!!x.sheenColorMap,ne=Mt&&!!x.sheenRoughnessMap,se=!!x.specularMap,$=!!x.specularColorMap,C=!!x.specularIntensityMap,q=Ie&&!!x.transmissionMap,W=Ie&&!!x.thicknessMap,oe=!!x.gradientMap,de=!!x.alphaMap,pe=x.alphaTest>0,Pe=!!x.alphaHash,Ke=!!x.extensions,fe=jn;x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(fe=s.toneMapping);let Be=ie?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,Ye={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:k,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:I,batching:Ne,batchingColor:Ne&&U._colorsTexture!==null,instancing:we,instancingColor:we&&U.instanceColor!==null,instancingMorph:we&&U.morphTexture!==null,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Me,matcap:Oe,envMap:Ge,envMapMode:Ge&&N.mapping,envMapPMREM:ie,envMapMaxLod:ie?Be.length-1:null,envMapSize:ie?Be[0].width:null,aoMap:ue,lightMap:le,bumpMap:Se,normalMap:me,displacementMap:We,emissiveMap:Fe,normalMapObjectSpace:me&&x.normalMapType===Ed,normalMapTangentSpace:me&&x.normalMapType===vl,packedNormalMap:me&&x.normalMapType===vl&&q_(x.normalMap.format),metalnessMap:et,roughnessMap:Xe,anisotropy:at,anisotropyMap:Ve,clearcoat:z,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:Y,diffuseRoughness:it,diffuseRoughnessMap:he,dispersion:Ze,retroreflection:ft,iridescence:ye,iridescenceMap:re,iridescenceThicknessMap:xe,sheen:Mt,sheenColorMap:ve,sheenRoughnessMap:ne,specularMap:se,specularColorMap:$,specularIntensityMap:C,transmission:Ie,transmissionMap:q,thicknessMap:W,gradientMap:oe,opaque:x.transparent===!1&&x.blending===sr&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:pe,alphaHash:Pe,combine:x.combine,mapUv:Me&&f(x.map.channel),aoMapUv:ue&&f(x.aoMap.channel),lightMapUv:le&&f(x.lightMap.channel),bumpMapUv:Se&&f(x.bumpMap.channel),normalMapUv:me&&f(x.normalMap.channel),displacementMapUv:We&&f(x.displacementMap.channel),emissiveMapUv:Fe&&f(x.emissiveMap.channel),metalnessMapUv:et&&f(x.metalnessMap.channel),roughnessMapUv:Xe&&f(x.roughnessMap.channel),anisotropyMapUv:Ve&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:re&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&f(x.sheenRoughnessMap.channel),specularMapUv:se&&f(x.specularMap.channel),specularColorMapUv:$&&f(x.specularColorMap.channel),specularIntensityMapUv:C&&f(x.specularIntensityMap.channel),transmissionMapUv:q&&f(x.transmissionMap.channel),thicknessMapUv:W&&f(x.thicknessMap.channel),alphaMapUv:de&&f(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(me||at),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(Me||de),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:Q,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:H.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,decodeVideoTexture:Me&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===xt,decodeVideoTextureEmissive:Fe&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ht,flipSided:x.side===kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ke&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&x.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function v(x){let _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)_.push(P),_.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(_,x),g(_,x),_.push(s.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function m(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapPMREM),x.push(_.envMapMaxLod),x.push(_.envMapSize),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.diffuseRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.numSunLights),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numSunLightShadows),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.numLightProbeGrids),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function g(x,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.diffuseRoughness&&o.enable(25),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let _=d[x.type],P;if(_){let R=ei[_];P=kd.clone(R.uniforms)}else P=x.uniforms;return P}function b(x,_){let P=h.get(_);return P!==void 0?++P.usedTimes:(P=new W_(s,_,x,i),l.push(P),h.set(_,P)),P}function M(x){if(--x.usedTimes===0){let _=l.indexOf(x);l[_]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:w,programs:l,dispose:T}}function Z_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function K_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function af(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function lf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,v,m,g){let y=s[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:g},s[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=o(d),y.groupOrder=v,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function c(d,f,p,v,m,g,y){y.reversedDepth===!0&&(m=-m);let b=a(d,f,p,v,m,g);p.transmission>0?n.push(b):p.transparent===!0?i.push(b):t.push(b)}function l(d,f,p,v,m,g){let y=a(d,f,p,v,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||K_),n.length>1&&n.sort(f||af),i.length>1&&i.sort(f||af)}function u(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function J_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new lf,s.set(n,[o])):i>=r.length?(o=new lf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function $_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ce};break;case"SpotLight":t={position:new D,direction:new D,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function j_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Q_=0;function ey(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ty(s){let e=new $_,t=j_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let i=new D,r=new je,o=new je;function a(l){let h=0,u=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,y=0,b=0,M=0,w=0,T=0,x=0,_=0,P=0,R=0;l.sort(ey);for(let H=0,J=l.length;H<J;H++){let L=l[H],F=L.color,O=L.intensity,N=L.distance,j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Hi?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(L.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(L.sh.coefficients[I],O);R++}else if(L.isSunLight){let I=e.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let G=L.shadow,X=t.get(L);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[p]=X,n.sunShadowMap[p]=j;let Q=G.getViewportCount();for(let V=0;V<Q;V++)n.sunShadowMatrix[v+V]=G.getMatrix(V),n.sunShadowCascade[v+V]=G._cascadeData[V];v+=Q,p++}n.sun[f]=I,f++}else if(L.isDirectionalLight){let I=e.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let G=L.shadow,X=t.get(L);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=L.shadow.matrix,w++}n.directional[m]=I,m++}else if(L.isSpotLight){let I=e.get(L);I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(F).multiplyScalar(O),I.distance=N,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,n.spot[y]=I;let G=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,G.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[y]=G.matrix,L.castShadow){let X=t.get(L);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=j,x++}y++}else if(L.isRectAreaLight){let I=e.get(L);I.color.copy(F).multiplyScalar(O),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),n.rectArea[b]=I,b++}else if(L.isPointLight){let I=e.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity),I.distance=L.distance,I.decay=L.decay,L.castShadow){let G=L.shadow,X=t.get(L);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=I,g++}else if(L.isHemisphereLight){let I=e.get(L);I.skyColor.copy(L.color).multiplyScalar(O),I.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[M]=I,M++}}b>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==b||U.hemiLength!==M||U.numSunShadows!==p||U.numDirectionalShadows!==w||U.numPointShadows!==T||U.numSpotShadows!==x||U.numSpotMaps!==_||U.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=b,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+_-P,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,U.sunLength=f,U.directionalLength=m,U.pointLength=g,U.spotLength=y,U.rectAreaLength=b,U.hemiLength=M,U.numSunShadows=p,U.numDirectionalShadows=w,U.numPointShadows=T,U.numSpotShadows=x,U.numSpotMaps=_,U.numLightProbes=R,n.version=Q_++)}function c(l,h){let u=0,d=0,f=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let y=0,b=l.length;y<b;y++){let M=l[y];if(M.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),d++}else if(M.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function cf(s){let e=new ty(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):t.push(u)}function a(u){n.push(u)}function c(){e.setup(t),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function ny(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new cf(s),e.set(i,[a])):r>=o.length?(a=new cf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ry=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],oy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],hf=new je,xo=new D,ah=new D;function ay(s,e,t){let n=new Bi,i=new ge,r=new ge,o=new _t,a=new Ea,c=new Ta,l={},h=t.maxTextureSize,u={[$n]:kt,[kt]:$n,[Ht]:Ht},d=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:iy,fragmentShader:sy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Tt;p.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Qe(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let g=this.type;this.render=function(T,x,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===ed&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=us);let P=s.getRenderTarget(),R=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),H=s.state;H.setBlending(ds),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let J=g!==this.type;J&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=T.length;L<F;L++){let O=T[L],N=O.shadow;if(N===void 0){ke("WebGLShadowMap:",O,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);let j=N.getFrameExtents();i.multiply(j),r.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,N.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,N.mapSize.y=r.y));let I=s.state.buffers.depth.getReversed();if(N.camera._reversedDepth=I,N.map===null||J===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===ir){if(O.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new vn(i.x,i.y,{format:Hi,type:kn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),N.map.texture.name=O.name+".shadowMap",N.map.depthTexture=new _i(i.x,i.y,bn),N.map.depthTexture.name=O.name+".shadowMapDepth",N.map.depthTexture.format=pi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Lt,N.map.depthTexture.magFilter=Lt}else O.isPointLight?(N.map=new yo(i.x),N.map.depthTexture=new Vr(i.x,zn)):(N.map=new vn(i.x,i.y),N.map.depthTexture=new _i(i.x,i.y,zn)),N.map.depthTexture.name=O.name+".shadowMap",N.map.depthTexture.format=pi,this.type===us?(N.map.depthTexture.compareFunction=I?Yc:qc,N.map.depthTexture.minFilter=Bt,N.map.depthTexture.magFilter=Bt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Lt,N.map.depthTexture.magFilter=Lt);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==i.x||N.map.height!==i.y)&&N.map.setSize(i.x,i.y);let G=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();O.isPointLight!==!0&&N.updateMatrices(O,_);let X=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:_.layers;for(let Q=0;Q<G;Q++){let V=N.getCamera(Q);if(O.isPointLight){let k=N.camera,te=N.matrix,ce=O.distance||k.far;ce!==k.far&&(k.far=ce,k.updateProjectionMatrix()),xo.setFromMatrixPosition(O.matrixWorld),k.position.copy(xo),ah.copy(k.position),ah.add(ry[Q]),k.up.copy(oy[Q]),k.lookAt(ah),k.updateMatrixWorld(),te.makeTranslation(-xo.x,-xo.y,-xo.z),hf.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),N._frustum.setFromProjectionMatrix(hf,k.coordinateSystem,k.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)s.setRenderTarget(N.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(N.map),s.clear());let k=N.getViewport(Q);o.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),H.viewport(o)}n=N.getFrustum(Q),M(x,_,V,O,X,this.type)}N.isPointLightShadow!==!0&&this.type===ir&&y(N,_),N.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(P,R,U)};function y(T,x){let _=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new vn(i.x,i.y,{format:Hi,type:kn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(x,null,_,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(x,null,_,f,v,null)}function b(T,x,_,P){let R=null,U=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)R=U;else if(R=_.isPointLight===!0?c:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let H=R.uuid,J=x.uuid,L=l[H];L===void 0&&(L={},l[H]=L);let F=L[J];F===void 0&&(F=R.clone(),L[J]=F,x.addEventListener("dispose",w)),R=F}if(R.visible=x.visible,R.wireframe=x.wireframe,P===ir?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:u[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let H=s.properties.get(R);H.light=_}return R}function M(T,x,_,P,R,U){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===ir)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let L=e.update(T),F=T.material;if(Array.isArray(F)){let O=L.groups;for(let N=0,j=O.length;N<j;N++){let I=O[N],G=F[I.materialIndex];if(G&&G.visible){let X=b(T,G,P,U);T.onBeforeShadow(s,T,x,_,L,X,I),s.renderBufferDirect(_,null,L,X,T,I),T.onAfterShadow(s,T,x,_,L,X,I)}}}else if(F.visible){let O=b(T,F,P,U);T.onBeforeShadow(s,T,x,_,L,O,null),s.renderBufferDirect(_,null,L,O,T,null),T.onAfterShadow(s,T,x,_,L,O,null)}}let J=T.children;for(let L=0,F=J.length;L<F;L++)M(J[L],x,_,P,R,U)}function w(T){T.target.removeEventListener("dispose",w);for(let _ in l){let P=l[_],R=T.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function ly(s,e){function t(){let C=!1,q=new _t,W=null,oe=new _t(0,0,0,0);return{setMask:function(de){W!==de&&!C&&(s.colorMask(de,de,de,de),W=de)},setLocked:function(de){C=de},setClear:function(de,pe,Pe,Ke,fe){fe===!0&&(de*=Ke,pe*=Ke,Pe*=Ke),q.set(de,pe,Pe,Ke),oe.equals(q)===!1&&(s.clearColor(de,pe,Pe,Ke),oe.copy(q))},reset:function(){C=!1,W=null,oe.set(-1,0,0,0)}}}function n(){let C=!1,q=!1,W=null,oe=null,de=null;return{setReversed:function(pe){if(q!==pe){let Pe=e.get("EXT_clip_control");pe?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),q=pe;let Ke=de;de=null,this.setClear(Ke)}},getReversed:function(){return q},setTest:function(pe){pe?ae(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(pe){W!==pe&&!C&&(s.depthMask(pe),W=pe)},setFunc:function(pe){if(q&&(pe=Dd[pe]),oe!==pe){switch(pe){case sa:s.depthFunc(s.NEVER);break;case ra:s.depthFunc(s.ALWAYS);break;case oa:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case aa:s.depthFunc(s.EQUAL);break;case la:s.depthFunc(s.GEQUAL);break;case ca:s.depthFunc(s.GREATER);break;case ha:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=pe}},setLocked:function(pe){C=pe},setClear:function(pe){de!==pe&&(de=pe,q&&(pe=1-pe),s.clearDepth(pe))},reset:function(){C=!1,W=null,oe=null,de=null,q=!1}}}function i(){let C=!1,q=null,W=null,oe=null,de=null,pe=null,Pe=null,Ke=null,fe=null;return{setTest:function(Be){C||(Be?ae(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Be){q!==Be&&!C&&(s.stencilMask(Be),q=Be)},setFunc:function(Be,Ye,Ee){(W!==Be||oe!==Ye||de!==Ee)&&(s.stencilFunc(Be,Ye,Ee),W=Be,oe=Ye,de=Ee)},setOp:function(Be,Ye,Ee){(pe!==Be||Pe!==Ye||Ke!==Ee)&&(s.stencilOp(Be,Ye,Ee),pe=Be,Pe=Ye,Ke=Ee)},setLocked:function(Be){C=Be},setClear:function(Be){fe!==Be&&(s.clearStencil(Be),fe=Be)},reset:function(){C=!1,q=null,W=null,oe=null,de=null,pe=null,Pe=null,Ke=null,fe=null}}}let r=new t,o=new n,a=new i,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],v=null,m=!1,g=null,y=null,b=null,M=null,w=null,T=null,x=null,_=new Ce(0,0,0),P=0,R=!1,U=null,H=null,J=null,L=null,F=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,j=0,I=s.getParameter(s.VERSION);I.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(I)[1]),N=j>=1):I.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),N=j>=2);let G=null,X={},Q=s.getParameter(s.SCISSOR_BOX),V=s.getParameter(s.VIEWPORT),k=new _t().fromArray(Q),te=new _t().fromArray(V);function ce(C,q,W,oe){let de=new Uint8Array(4),pe=s.createTexture();s.bindTexture(C,pe),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<W;Pe++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(q,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(q+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return pe}let _e={};_e[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(s.DEPTH_TEST),o.setFunc(Os),Se(!1),me(Tc),ae(s.CULL_FACE),ue(ds);function ae(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function we(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function Ne(C,q){return d[C]!==q?(s.bindFramebuffer(C,q),d[C]=q,C===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=q),C===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=q),!0):!1}function Me(C,q){let W=p,oe=!1;if(C){W=f.get(q),W===void 0&&(W=[],f.set(q,W));let de=C.textures;if(W.length!==de.length||W[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Pe=de.length;pe<Pe;pe++)W[pe]=s.COLOR_ATTACHMENT0+pe;W.length=de.length,oe=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,oe=!0);oe&&s.drawBuffers(W)}function Oe(C){return v!==C?(s.useProgram(C),v=C,!0):!1}let Ge={[fs]:s.FUNC_ADD,[nd]:s.FUNC_SUBTRACT,[id]:s.FUNC_REVERSE_SUBTRACT};Ge[sd]=s.MIN,Ge[rd]=s.MAX;let ie={[od]:s.ZERO,[ad]:s.ONE,[ld]:s.SRC_COLOR,[Cc]:s.SRC_ALPHA,[pd]:s.SRC_ALPHA_SATURATE,[dd]:s.DST_COLOR,[hd]:s.DST_ALPHA,[cd]:s.ONE_MINUS_SRC_COLOR,[Ic]:s.ONE_MINUS_SRC_ALPHA,[fd]:s.ONE_MINUS_DST_COLOR,[ud]:s.ONE_MINUS_DST_ALPHA,[md]:s.CONSTANT_COLOR,[gd]:s.ONE_MINUS_CONSTANT_COLOR,[xd]:s.CONSTANT_ALPHA,[_d]:s.ONE_MINUS_CONSTANT_ALPHA};function ue(C,q,W,oe,de,pe,Pe,Ke,fe,Be){if(C===ds){m===!0&&(we(s.BLEND),m=!1);return}if(m===!1&&(ae(s.BLEND),m=!0),C!==td){if(C!==g||Be!==R){if((y!==fs||w!==fs)&&(s.blendEquation(s.FUNC_ADD),y=fs,w=fs),Be)switch(C){case sr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wc:s.blendFunc(s.ONE,s.ONE);break;case Ac:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qe("WebGLState: Invalid blending: ",C);break}else switch(C){case sr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ac:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rc:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",C);break}b=null,M=null,T=null,x=null,_.set(0,0,0),P=0,g=C,R=Be}return}de=de||q,pe=pe||W,Pe=Pe||oe,(q!==y||de!==w)&&(s.blendEquationSeparate(Ge[q],Ge[de]),y=q,w=de),(W!==b||oe!==M||pe!==T||Pe!==x)&&(s.blendFuncSeparate(ie[W],ie[oe],ie[pe],ie[Pe]),b=W,M=oe,T=pe,x=Pe),(Ke.equals(_)===!1||fe!==P)&&(s.blendColor(Ke.r,Ke.g,Ke.b,fe),_.copy(Ke),P=fe),g=C,R=!1}function le(C,q){C.side===Ht?we(s.CULL_FACE):ae(s.CULL_FACE);let W=C.side===kt;q&&(W=!W),Se(W),C.blending===sr&&C.transparent===!1?ue(ds):ue(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let oe=C.stencilWrite;a.setTest(oe),oe&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Fe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Se(C){U!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),U=C)}function me(C){C!==ju?(ae(s.CULL_FACE),C!==H&&(C===Tc?s.cullFace(s.BACK):C===Qu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),H=C}function We(C){C!==J&&(N&&s.lineWidth(C),J=C)}function Fe(C,q,W){C?(ae(s.POLYGON_OFFSET_FILL),(L!==q||F!==W)&&(L=q,F=W,o.getReversed()&&(q=-q,W=-W),s.polygonOffset(q,W))):we(s.POLYGON_OFFSET_FILL)}function et(C){C?ae(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function Xe(C){C===void 0&&(C=s.TEXTURE0+O-1),G!==C&&(s.activeTexture(C),G=C)}function at(C,q,W){W===void 0&&(G===null?W=s.TEXTURE0+O-1:W=G);let oe=X[W];oe===void 0&&(oe={type:void 0,texture:void 0},X[W]=oe),(oe.type!==C||oe.texture!==q)&&(G!==W&&(s.activeTexture(W),G=W),s.bindTexture(C,q||_e[C]),oe.type=C,oe.texture=q)}function z(){let C=X[G];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function it(){try{s.compressedTexImage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function Ze(){try{s.compressedTexImage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function ft(){try{s.texSubImage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function ye(){try{s.texSubImage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function Mt(){try{s.compressedTexSubImage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function Ie(){try{s.compressedTexSubImage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function Ve(){try{s.texStorage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function A(){try{s.texStorage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function S(){try{s.texImage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function Y(){try{s.texImage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function he(C){return u[C]!==void 0?u[C]:s.getParameter(C)}function re(C,q){u[C]!==q&&(s.pixelStorei(C,q),u[C]=q)}function xe(C){k.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),k.copy(C))}function ve(C){te.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),te.copy(C))}function ne(C,q){let W=l.get(q);W===void 0&&(W=new WeakMap,l.set(q,W));let oe=W.get(C);oe===void 0&&(oe=s.getUniformBlockIndex(q,C.name),s.uniformBlockBinding(q,oe,oe),W.set(C,oe))}function se(C,q,W){let de=l.get(q).get(C);c[de]!==W&&(s.bindBufferBase(s.UNIFORM_BUFFER,de,W),c[de]=W)}function $(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},G=null,X={},d={},c={},f=new WeakMap,p=[],v=null,m=!1,g=null,y=null,b=null,M=null,w=null,T=null,x=null,_=new Ce(0,0,0),P=0,R=!1,U=null,H=null,J=null,L=null,F=null,k.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:we,bindFramebuffer:Ne,drawBuffers:Me,useProgram:Oe,setBlending:ue,setMaterial:le,setFlipSided:Se,setCullFace:me,setLineWidth:We,setPolygonOffset:Fe,setScissorTest:et,activeTexture:Xe,bindTexture:at,unbindTexture:z,compressedTexImage2D:it,compressedTexImage3D:Ze,texImage2D:S,texImage3D:Y,pixelStorei:re,getParameter:he,updateUBOMapping:ne,uniformBlockBinding:se,texStorage2D:Ve,texStorage3D:A,texSubImage2D:ft,texSubImage3D:ye,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Ie,scissor:xe,viewport:ve,reset:$}}function cy(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ge,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,v=new FinalizationRegistry(A=>p.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return m?new OffscreenCanvas(A,S):ks("canvas")}function y(A,S,Y){let he=1,re=Ve(A);if((re.width>Y||re.height>Y)&&(he=Y/Math.max(re.width,re.height)),he<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let xe=Math.floor(he*re.width),ve=Math.floor(he*re.height);d===void 0&&(d=g(xe,ve));let ne=S?g(xe,ve):d;return ne.width=xe,ne.height=ve,ne.getContext("2d").drawImage(A,0,0,xe,ve),ke("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+xe+"x"+ve+")."),ne}else return"data"in A&&ke("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),A;return A}function b(A){return A.generateMipmaps}function M(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(A,S,Y,he,re,xe=!1){if(A!==null){if(s[A]!==void 0)return s[A];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ve;he&&(ve=e.get("EXT_texture_norm16"),ve||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=S;if(S===s.RED&&(Y===s.FLOAT&&(ne=s.R32F),Y===s.HALF_FLOAT&&(ne=s.R16F),Y===s.UNSIGNED_BYTE&&(ne=s.R8),Y===s.UNSIGNED_SHORT&&ve&&(ne=ve.R16_EXT),Y===s.SHORT&&ve&&(ne=ve.R16_SNORM_EXT)),S===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ne=s.R8UI),Y===s.UNSIGNED_SHORT&&(ne=s.R16UI),Y===s.UNSIGNED_INT&&(ne=s.R32UI),Y===s.BYTE&&(ne=s.R8I),Y===s.SHORT&&(ne=s.R16I),Y===s.INT&&(ne=s.R32I)),S===s.RG&&(Y===s.FLOAT&&(ne=s.RG32F),Y===s.HALF_FLOAT&&(ne=s.RG16F),Y===s.UNSIGNED_BYTE&&(ne=s.RG8),Y===s.UNSIGNED_SHORT&&ve&&(ne=ve.RG16_EXT),Y===s.SHORT&&ve&&(ne=ve.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ne=s.RG8UI),Y===s.UNSIGNED_SHORT&&(ne=s.RG16UI),Y===s.UNSIGNED_INT&&(ne=s.RG32UI),Y===s.BYTE&&(ne=s.RG8I),Y===s.SHORT&&(ne=s.RG16I),Y===s.INT&&(ne=s.RG32I)),S===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ne=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(ne=s.RGB16UI),Y===s.UNSIGNED_INT&&(ne=s.RGB32UI),Y===s.BYTE&&(ne=s.RGB8I),Y===s.SHORT&&(ne=s.RGB16I),Y===s.INT&&(ne=s.RGB32I)),S===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ne=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(ne=s.RGBA16UI),Y===s.UNSIGNED_INT&&(ne=s.RGBA32UI),Y===s.BYTE&&(ne=s.RGBA8I),Y===s.SHORT&&(ne=s.RGBA16I),Y===s.INT&&(ne=s.RGBA32I)),S===s.RGB&&(Y===s.UNSIGNED_SHORT&&ve&&(ne=ve.RGB16_EXT),Y===s.SHORT&&ve&&(ne=ve.RGB16_SNORM_EXT),Y===s.UNSIGNED_INT_5_9_9_9_REV&&(ne=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(ne=s.R11F_G11F_B10F)),S===s.RGBA){let se=xe?Pr:st.getTransfer(re);Y===s.FLOAT&&(ne=s.RGBA32F),Y===s.HALF_FLOAT&&(ne=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(ne=se===xt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT&&ve&&(ne=ve.RGBA16_EXT),Y===s.SHORT&&ve&&(ne=ve.RGBA16_SNORM_EXT),Y===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(A,S){let Y;return A?S===null||S===zn||S===gs?Y=s.DEPTH24_STENCIL8:S===bn?Y=s.DEPTH32F_STENCIL8:S===ar&&(Y=s.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===zn||S===gs?Y=s.DEPTH_COMPONENT24:S===bn?Y=s.DEPTH_COMPONENT32F:S===ar&&(Y=s.DEPTH_COMPONENT16),Y}function _(A,S){return b(A)===!0||A.isFramebufferTexture&&A.minFilter!==Lt&&A.minFilter!==Bt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){let S=new WeakRef(A);n.get(A).__ref=S,p.add(S),v.register(A,S,S)}function R(A){let S=n.get(A).__ref;S!==void 0&&(p.delete(S),v.unregister(S))}function U(A){J(A.target)}function H(A){L(A.target)}function J(A){A.removeEventListener("dispose",U),R(A),O(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function L(A){A.removeEventListener("dispose",H),R(A),j(A)}function F(){for(let A of p){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):J(S))}p.clear(),u.clear()}function O(A){let S=n.get(A);if(S.__webglInit===void 0)return;let Y=A.source,he=f.get(Y);if(he){let re=he[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&N(A),Object.keys(he).length===0&&f.delete(Y)}n.remove(A)}function N(A){let S=n.get(A);s.deleteTexture(S.__webglTexture);let Y=A.source,he=f.get(Y);delete he[S.__cacheKey],o.memory.textures--}function j(A){let S=n.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let Y=A.depthTexture;if(Y&&Y.renderTarget===A&&J(Y),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let xe=0;xe<S.__webglFramebuffer[re].length;xe++)s.deleteFramebuffer(S.__webglFramebuffer[re][xe]);else s.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)s.deleteFramebuffer(S.__webglFramebuffer[re]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let he=A.textures;for(let re=0,xe=he.length;re<xe;re++){let ve=n.get(he[re]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(he[re])}n.remove(A)}let I=0;function G(){I=0}function X(){return I}function Q(A){I=A}function V(){let A=I;return A>=i.maxTextures&&ke("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function k(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function te(A,S){let Y=n.get(A);if(A.isVideoTexture&&Mt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&Y.__version!==A.version){let he=A.image;if(he===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{le(Y,A,S);return}}else A.isExternalTexture&&(Y.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+S)}function ce(A,S){let Y=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){le(Y,A,S);return}else A.isExternalTexture&&(Y.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+S)}function _e(A,S){let Y=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){le(Y,A,S);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+S)}function ae(A,S){let Y=n.get(A);if(A.version>0&&Y.__version!==A.version){Se(Y,A,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+S)}let we={[Rn]:s.REPEAT,[wn]:s.CLAMP_TO_EDGE,[Bs]:s.MIRRORED_REPEAT},Ne={[Lt]:s.NEAREST,[Fa]:s.NEAREST_MIPMAP_NEAREST,[ms]:s.NEAREST_MIPMAP_LINEAR,[Bt]:s.LINEAR,[or]:s.LINEAR_MIPMAP_NEAREST,[Cn]:s.LINEAR_MIPMAP_LINEAR},Me={[wd]:s.NEVER,[Zc]:s.ALWAYS,[Ad]:s.LESS,[qc]:s.LEQUAL,[Rd]:s.EQUAL,[Yc]:s.GEQUAL,[Cd]:s.GREATER,[Id]:s.NOTEQUAL};function Oe(A,S){if(S.type===bn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Bt||S.magFilter===or||S.magFilter===ms||S.magFilter===Cn||S.minFilter===Bt||S.minFilter===or||S.minFilter===ms||S.minFilter===Cn)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,we[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,we[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,we[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Ne[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Ne[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Lt||S.minFilter!==ms&&S.minFilter!==Cn||S.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ge(A,S){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",U),P(S));let he=S.source,re=f.get(he);re===void 0&&(re={},f.set(he,re));let xe=k(S);if(xe!==A.__cacheKey){re[xe]===void 0&&(re[xe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),re[xe].usedTimes++;let ve=re[A.__cacheKey];ve!==void 0&&(re[A.__cacheKey].usedTimes--,ve.usedTimes===0&&N(S)),A.__cacheKey=xe,A.__webglTexture=re[xe].texture}return Y}function ie(A,S,Y){return Math.floor(Math.floor(A/Y)/S)}function ue(A,S,Y,he){let xe=A.updateRanges;if(xe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,Y,he,S.data);else{xe.sort((C,q)=>C.start-q.start);let ve=0;for(let C=1;C<xe.length;C++){let q=xe[ve],W=xe[C],oe=q.start+q.count,de=ie(W.start,S.width,4),pe=ie(q.start,S.width,4);W.start<=oe+1&&de===pe&&ie(W.start+W.count-1,S.width,4)===de?q.count=Math.max(q.count,W.start+W.count-q.start):(++ve,xe[ve]=W)}xe.length=ve+1;let ne=t.getParameter(s.UNPACK_ROW_LENGTH),se=t.getParameter(s.UNPACK_SKIP_PIXELS),$=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let C=0,q=xe.length;C<q;C++){let W=xe[C],oe=Math.floor(W.start/4),de=Math.ceil(W.count/4),pe=oe%S.width,Pe=Math.floor(oe/S.width),Ke=de,fe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Pe),t.texSubImage2D(s.TEXTURE_2D,0,pe,Pe,Ke,fe,Y,he,S.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ne),t.pixelStorei(s.UNPACK_SKIP_PIXELS,se),t.pixelStorei(s.UNPACK_SKIP_ROWS,$)}}function le(A,S,Y){let he=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(he=s.TEXTURE_3D);let re=Ge(A,S),xe=S.source;t.bindTexture(he,A.__webglTexture,s.TEXTURE0+Y);let ve=n.get(xe);if(xe.version!==ve.__version||re===!0){if(t.activeTexture(s.TEXTURE0+Y),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let fe=st.getPrimaries(st.workingColorSpace),Be=S.colorSpace===Hn?null:st.getPrimaries(S.colorSpace),Ye=S.colorSpace===Hn||fe===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let se=y(S.image,!1,i.maxTextureSize);se=Ie(S,se);let $=r.convert(S.format,S.colorSpace),C=r.convert(S.type),q=T(S.internalFormat,$,C,S.normalized,S.colorSpace,S.isVideoTexture);Oe(he,S);let W,oe=S.mipmaps,de=S.isVideoTexture!==!0,pe=ve.__version===void 0||re===!0,Pe=xe.dataReady,Ke=_(S,se);if(S.isDepthTexture)q=x(S.format===wi,S.type),pe&&(de?t.texStorage2D(s.TEXTURE_2D,1,q,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,q,se.width,se.height,0,$,C,null));else if(S.isDataTexture)if(oe.length>0){de&&pe&&t.texStorage2D(s.TEXTURE_2D,Ke,q,oe[0].width,oe[0].height);for(let fe=0,Be=oe.length;fe<Be;fe++)W=oe[fe],de?Pe&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,W.width,W.height,$,C,W.data):t.texImage2D(s.TEXTURE_2D,fe,q,W.width,W.height,0,$,C,W.data);S.generateMipmaps=!1}else de?(pe&&t.texStorage2D(s.TEXTURE_2D,Ke,q,se.width,se.height),Pe&&ue(S,se,$,C)):t.texImage2D(s.TEXTURE_2D,0,q,se.width,se.height,0,$,C,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){de&&pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,q,oe[0].width,oe[0].height,se.depth);for(let fe=0,Be=oe.length;fe<Be;fe++)if(W=oe[fe],S.format!==In)if($!==null)if(de){if(Pe)if(S.layerUpdates.size>0){let Ye=rh(W.width,W.height,S.format,S.type);for(let Ee of S.layerUpdates){let ut=W.data.subarray(Ee*Ye/W.data.BYTES_PER_ELEMENT,(Ee+1)*Ye/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,Ee,W.width,W.height,1,$,ut)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,W.width,W.height,se.depth,$,W.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,q,W.width,W.height,se.depth,0,W.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?Pe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,W.width,W.height,se.depth,$,C,W.data):t.texImage3D(s.TEXTURE_2D_ARRAY,fe,q,W.width,W.height,se.depth,0,$,C,W.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{de&&pe&&t.texStorage2D(s.TEXTURE_2D,Ke,q,oe[0].width,oe[0].height);for(let fe=0,Be=oe.length;fe<Be;fe++)W=oe[fe],S.format!==In?$!==null?de?Pe&&t.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,W.width,W.height,$,W.data):t.compressedTexImage2D(s.TEXTURE_2D,fe,q,W.width,W.height,0,W.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?Pe&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,W.width,W.height,$,C,W.data):t.texImage2D(s.TEXTURE_2D,fe,q,W.width,W.height,0,$,C,W.data)}else if(S.isDataArrayTexture)if(de){if(pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,q,se.width,se.height,se.depth),Pe)if(S.layerUpdates.size>0){let fe=rh(se.width,se.height,S.format,S.type);for(let Be of S.layerUpdates){let Ye=se.data.subarray(Be*fe/se.data.BYTES_PER_ELEMENT,(Be+1)*fe/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Be,se.width,se.height,1,$,C,Ye)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,$,C,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,q,se.width,se.height,se.depth,0,$,C,se.data);else if(S.isData3DTexture)de?(pe&&t.texStorage3D(s.TEXTURE_3D,Ke,q,se.width,se.height,se.depth),Pe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,$,C,se.data)):t.texImage3D(s.TEXTURE_3D,0,q,se.width,se.height,se.depth,0,$,C,se.data);else if(S.isFramebufferTexture){if(pe)if(de)t.texStorage2D(s.TEXTURE_2D,Ke,q,se.width,se.height);else{let fe=se.width,Be=se.height;for(let Ye=0;Ye<Ke;Ye++)t.texImage2D(s.TEXTURE_2D,Ye,q,fe,Be,0,$,C,null),fe>>=1,Be>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let fe=s.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),se.parentNode!==fe){fe.appendChild(se),u.add(S),fe.onpaint=Be=>{let Ye=Be.changedElements;for(let Ee of u)Ye.includes(Ee.image)&&(Ee.needsUpdate=!0)},fe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,se);else{let Ye=s.RGBA,Ee=s.RGBA,ut=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ye,Ee,ut,se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(oe.length>0){if(de&&pe){let fe=Ve(oe[0]);t.texStorage2D(s.TEXTURE_2D,Ke,q,fe.width,fe.height)}for(let fe=0,Be=oe.length;fe<Be;fe++)W=oe[fe],de?Pe&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,$,C,W):t.texImage2D(s.TEXTURE_2D,fe,q,$,C,W);S.generateMipmaps=!1}else if(de){if(pe){let fe=Ve(se);t.texStorage2D(s.TEXTURE_2D,Ke,q,fe.width,fe.height)}Pe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,$,C,se)}else t.texImage2D(s.TEXTURE_2D,0,q,$,C,se);b(S)&&S.mipmapsAutoUpdate===!0&&M(he),ve.__version=xe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Se(A,S,Y){if(S.image.length!==6)return;let he=Ge(A,S),re=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+Y);let xe=n.get(re);if(re.version!==xe.__version||he===!0){t.activeTexture(s.TEXTURE0+Y);let ve=st.getPrimaries(st.workingColorSpace),ne=S.colorSpace===Hn?null:st.getPrimaries(S.colorSpace),se=S.colorSpace===Hn||ve===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let $=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,q=[];for(let Ee=0;Ee<6;Ee++)!$&&!C?q[Ee]=y(S.image[Ee],!0,i.maxCubemapSize):q[Ee]=C?S.image[Ee].image:S.image[Ee],q[Ee]=Ie(S,q[Ee]);let W=q[0],oe=r.convert(S.format,S.colorSpace),de=r.convert(S.type),pe=T(S.internalFormat,oe,de,S.normalized,S.colorSpace),Pe=S.isVideoTexture!==!0,Ke=xe.__version===void 0||he===!0,fe=re.dataReady,Be=_(S,W);Oe(s.TEXTURE_CUBE_MAP,S);let Ye;if(S.isDepthTexture){if(pe=x(S.format===wi,S.type),Ke)if(Pe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,pe,W.width,W.height);else for(let Ee=0;Ee<6;Ee++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,pe,W.width,W.height,0,oe,de,null)}else if($){Pe&&Ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,pe,W.width,W.height);for(let Ee=0;Ee<6;Ee++){Ye=q[Ee].mipmaps;for(let ut=0;ut<Ye.length;ut++){let mt=Ye[ut];S.format!==In?oe!==null?Pe?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ut,0,0,mt.width,mt.height,oe,mt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ut,pe,mt.width,mt.height,0,mt.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ut,0,0,mt.width,mt.height,oe,de,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ut,pe,mt.width,mt.height,0,oe,de,mt.data)}}}else{if(Ye=S.mipmaps,Pe&&Ke){Ye.length>0&&Be++;let Ee=Ve(q[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,pe,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(C){Pe?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,q[Ee].width,q[Ee].height,oe,de,q[Ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,pe,q[Ee].width,q[Ee].height,0,oe,de,q[Ee].data);for(let ut=0;ut<Ye.length;ut++){let hn=Ye[ut].image[Ee].image;Pe?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ut+1,0,0,hn.width,hn.height,oe,de,hn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ut+1,pe,hn.width,hn.height,0,oe,de,hn.data)}}else{Pe?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,oe,de,q[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,pe,oe,de,q[Ee]);for(let ut=0;ut<Ye.length;ut++){let mt=Ye[ut];Pe?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ut+1,0,0,oe,de,mt.image[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ut+1,pe,oe,de,mt.image[Ee])}}}b(S)&&S.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),xe.__version=re.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function me(A,S,Y,he,re,xe){let ve=r.convert(Y.format,Y.colorSpace),ne=r.convert(Y.type),se=T(Y.internalFormat,ve,ne,Y.normalized,Y.colorSpace),$=n.get(S),C=n.get(Y);if(C.__renderTarget=S,!$.__hasExternalTextures){let q=Math.max(1,S.width>>xe),W=Math.max(1,S.height>>xe);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,xe,se,q,W,S.depth,0,ve,ne,null):t.texImage2D(re,xe,se,q,W,0,ve,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),ye(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,re,C.__webglTexture,0,ft(S)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,re,C.__webglTexture,xe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(A,S,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){let he=S.depthTexture,re=he&&he.isDepthTexture?he.type:null,xe=x(S.stencilBuffer,re),ve=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ye(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(S),xe,S.width,S.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(S),xe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xe,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,A)}else{let he=S.textures;for(let re=0;re<he.length;re++){let xe=he[re],ve=r.convert(xe.format,xe.colorSpace),ne=r.convert(xe.type),se=T(xe.internalFormat,ve,ne,xe.normalized,xe.colorSpace);ye(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(S),se,S.width,S.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(S),se,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,se,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Fe(A,S,Y){let he=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(S.depthTexture);re.__renderTarget=S;let xe=he?S.depthTexture.image[0]:S.depthTexture.image;(!re.__webglTexture||xe.width!==S.width||xe.height!==S.height)&&(xe.width=S.width,xe.height=S.height,S.depthTexture.needsUpdate=!0),he?ae(S.depthTexture,0):te(S.depthTexture,0);let ve=re.__webglTexture,ne=ft(S),se=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,$=S.depthTexture.format===wi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===pi)ye(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,se,ve,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,$,se,ve,0);else if(S.depthTexture.format===wi)ye(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,se,ve,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,$,se,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(A){let S=n.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let he=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),he){let re=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,he.removeEventListener("dispose",re)};he.addEventListener("dispose",re),S.__depthDisposeCallback=re}S.__boundDepthTexture=he}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(Y)for(let he=0;he<6;he++)Fe(S.__webglFramebuffer[he],A,he);else A.texture.mipmaps.length>0?Fe(S.__webglFramebuffer[0],A,0):Fe(S.__webglFramebuffer,A,0);else if(Y){S.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[he]),S.__webglDepthbuffer[he]===void 0)S.__webglDepthbuffer[he]=s.createRenderbuffer(),We(S.__webglDepthbuffer[he],A,!1);else{let re=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,xe)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),We(S.__webglDepthbuffer,A,!1);else{let re=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,xe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(A,S,Y){let he=n.get(A);S!==void 0&&me(he.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&et(A)}function at(A){let S=A.texture,Y=n.get(A),he=n.get(S);A.addEventListener("dispose",H),P(A);let re=A.textures,xe=A.isWebGLCubeRenderTarget===!0,ve=re.length>1;if(ve||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=S.version,o.memory.textures++),xe){Y.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps.length>0){Y.__webglFramebuffer[ne]=[];for(let se=0;se<S.mipmaps.length;se++)Y.__webglFramebuffer[ne][se]=s.createFramebuffer()}else Y.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)Y.__webglFramebuffer[ne]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(ve)for(let ne=0,se=re.length;ne<se;ne++){let $=n.get(re[ne]);$.__webglTexture===void 0&&($.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&ye(A)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ne=0;ne<re.length;ne++){let se=re[ne];Y.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[ne]);let $=r.convert(se.format,se.colorSpace),C=r.convert(se.type),q=T(se.internalFormat,$,C,se.normalized,se.colorSpace,A.isXRRenderTarget===!0),W=ft(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,W,q,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,Y.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),We(Y.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)me(Y.__webglFramebuffer[ne][se],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else me(Y.__webglFramebuffer[ne],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);b(S)?M(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(ve){for(let ne=0,se=re.length;ne<se;ne++){let $=re[ne],C=n.get($),q=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(q,C.__webglTexture),Oe(q,$),me(Y.__webglFramebuffer,A,$,s.COLOR_ATTACHMENT0+ne,q,0),b($)&&M(q)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,he.__webglTexture),Oe(ne,S),S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)me(Y.__webglFramebuffer[se],A,S,s.COLOR_ATTACHMENT0,ne,se);else me(Y.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,ne,0);b(S)?M(ne):S.mipmaps.length>0&&s.texParameteri(ne,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&et(A)}function z(A){let S=A.textures;for(let Y=0,he=S.length;Y<he;Y++){let re=S[Y];if(b(re)&&re.mipmapsAutoUpdate===!0){let xe=w(A),ve=n.get(re).__webglTexture;t.bindTexture(xe,ve),M(xe),t.unbindTexture()}}}let it=[];function Ze(A){if(A.samples>0){if(ye(A)===!1){let S=A.textures,Y=A.width,he=A.height,re=s.COLOR_BUFFER_BIT,xe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(A),ne=S.length>1;if(ne)for(let $=0;$<S.length;$++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let $=0;$<S.length;$++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[$]);let C=n.get(S[$]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,C,0)}s.blitFramebuffer(0,0,Y,he,0,0,Y,he,re,s.NEAREST),c===!0&&(it.length=0,it.push(s.COLOR_ATTACHMENT0+$),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&it.push(xe),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let $=0;$<S.length;$++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,ve.__webglColorRenderbuffer[$]);let C=n.get(S[$]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.TEXTURE_2D,C,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ft(A){return Math.min(i.maxSamples,A.samples)}function ye(A){let S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Mt(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ie(A,S){let Y=A.colorSpace,he=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||Y!==cn&&Y!==Hn&&(st.getTransfer(Y)===xt?(he!==In||re!==gn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",Y)),S}function Ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.getTextureUnits=X,this.setTextureUnits=Q,this.setTexture2D=te,this.setTexture2DArray=ce,this.setTexture3D=_e,this.setTextureCube=ae,this.rebindTextures=Xe,this.setupRenderTarget=at,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ye,this.dispose=F}function hy(s,e){function t(n,i=Hn){let r,o=st.getTransfer(i);if(n===gn)return s.UNSIGNED_BYTE;if(n===Ba)return s.UNSIGNED_SHORT_4_4_4_4;if(n===za)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===zc)return s.BYTE;if(n===kc)return s.SHORT;if(n===ar)return s.UNSIGNED_SHORT;if(n===Oa)return s.INT;if(n===zn)return s.UNSIGNED_INT;if(n===bn)return s.FLOAT;if(n===kn)return s.HALF_FLOAT;if(n===Vc)return s.ALPHA;if(n===Wc)return s.RGB;if(n===In)return s.RGBA;if(n===pi)return s.DEPTH_COMPONENT;if(n===wi)return s.DEPTH_STENCIL;if(n===ka)return s.RED;if(n===Ha)return s.RED_INTEGER;if(n===Hi)return s.RG;if(n===Ga)return s.RG_INTEGER;if(n===Va)return s.RGBA_INTEGER;if(n===co||n===ho||n===uo||n===fo)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ka||n===Ja||n===$a||n===ja||n===po||n===Qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ka)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$a)return r.COMPRESSED_R11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===po)return r.COMPRESSED_RG11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ml||n===gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pl)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===_l||n===mo||n===yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jt({vertexShader:uy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mh=class extends qn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null,v=typeof XRWebGLBinding<"u",m=new ph,g={},y=t.getContextAttributes(),b=null,M=null,w=[],T=[],x=new ge,_=null,P=null,R=new Ot;R.viewport=new _t;let U=new Ot;U.viewport=new _t;let H=[R,U],J=new Na,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let te=w[k];return te===void 0&&(te=new Vs,w[k]=te),te.getTargetRaySpace()},this.getControllerGrip=function(k){let te=w[k];return te===void 0&&(te=new Vs,w[k]=te),te.getGripSpace()},this.getHand=function(k){let te=w[k];return te===void 0&&(te=new Vs,w[k]=te),te.getHandSpace()};function O(k){let te=T.indexOf(k.inputSource);if(te===-1)return;let ce=w[te];ce!==void 0&&(ce.update(k.inputSource,k.frame,l||o),ce.dispatchEvent({type:k.type,data:k.inputSource}))}function N(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",j);for(let k=0;k<w.length;k++){let te=T[k];te!==null&&(T[k]=null,w[k].disconnect(te))}L=null,F=null,m.reset();for(let k in g)delete g[k];if(e.setRenderTarget(b),f=null,d=null,u=null,i=null,M=null,V.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(x.width,x.height,!1),P!==null){let k=P.camera;k.fov=P.fov,k.zoom=P.zoom,k.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",N),i.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,_e=null,ae=null;y.depth&&(ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=y.stencil?wi:pi,_e=y.stencil?gs:zn);let we={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(we),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new vn(d.textureWidth,d.textureHeight,{format:In,type:gn,depthTexture:new _i(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new vn(f.framebufferWidth,f.framebufferHeight,{format:In,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(k){for(let te=0;te<k.removed.length;te++){let ce=k.removed[te],_e=T.indexOf(ce);_e>=0&&(T[_e]=null,w[_e].disconnect(ce))}for(let te=0;te<k.added.length;te++){let ce=k.added[te],_e=T.indexOf(ce);if(_e===-1){for(let we=0;we<w.length;we++)if(we>=T.length){T.push(ce),_e=we;break}else if(T[we]===null){T[we]=ce,_e=we;break}if(_e===-1)break}let ae=w[_e];ae&&ae.connect(ce)}}function I(k,te){te===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(te.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let te=k.near,ce=k.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),J.near=U.near=R.near=te,J.far=U.far=R.far=ce,(L!==J.near||F!==J.far)&&(i.updateRenderState({depthNear:J.near,depthFar:J.far}),L=J.near,F=J.far),J.layers.mask=k.layers.mask|6,R.layers.mask=J.layers.mask&-5,U.layers.mask=J.layers.mask&-3;let _e=k.parent,ae=J.cameras;I(J,_e);for(let we=0;we<ae.length;we++)I(ae[we],_e);J.projectionMatrix.copy(R.projectionMatrix),J.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&k.isPerspectiveCamera&&(P={camera:k,fov:k.fov,zoom:k.zoom}),G(k,J,_e)};function G(k,te,ce){ce===null?k.matrix.copy(te.matrixWorld):(k.matrix.copy(ce.matrixWorld),k.matrix.invert(),k.matrix.multiply(te.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(te.projectionMatrix),k.projectionMatrixInverse.copy(te.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ts*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(J)},this.getCameraTexture=function(k){return g[k]};let X=null;function Q(k,te){if(h=te.getViewerPose(l||o),p=te,h!==null){let ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let _e=!1;ce.length!==J.cameras.length&&(J.cameras.length=0,_e=!0);for(let Me=0;Me<ce.length;Me++){let Oe=ce[Me],Ge=null;if(f!==null)Ge=f.getViewport(Oe);else{let ue=u.getViewSubImage(d,Oe);Ge=ue.viewport,Me===0&&(e.setRenderTargetTextures(M,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(M))}let ie=H[Me];ie===void 0&&(ie=new Ot,ie.layers.enable(Me),ie.viewport=new _t,H[Me]=ie),ie.matrix.fromArray(Oe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Oe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Me===0&&(J.matrix.copy(ie.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),_e===!0&&J.cameras.push(ie)}let ae=i.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Me=u.getDepthInformation(ce[0]);Me&&Me.isValid&&Me.texture&&m.init(Me,i.renderState)}if(ae&&ae.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Me=0;Me<ce.length;Me++){let Oe=ce[Me].camera;if(Oe){let Ge=g[Oe];Ge||(Ge=new Wr,g[Oe]=Ge);let ie=u.getCameraImage(Oe);Ge.sourceTexture=ie}}}}for(let ce=0;ce<w.length;ce++){let _e=T[ce],ae=w[ce];_e!==null&&ae!==void 0&&ae.update(_e,te,l||o)}X&&X(k,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}let V=new uf;V.setAnimationLoop(Q),this.setAnimationLoop=function(k){X=k},this.dispose=function(){}}},fy=new je,Mf=new Je;Mf.set(-1,0,0,0,1,0,0,0,1);function py(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,nh(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,b,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,y,b):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===kt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===kt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),b=y.envMap,M=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(fy.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,y,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function my(s,e,t,n){let i={},r={};function o(y,b){let M=b.program;n.uniformBlockBinding(y,M,i[y.id])}function a(y,b){let M=i[y.id];M===void 0&&(p(y),M=c(y),i[y.id]=M,y.addEventListener("dispose",m));let w=b.program;n.updateUBOMapping(y,w);let T=e.render.frame;r[y.id]!==T&&(l(y),r[y.id]=T)}function c(y){let b=s.createBuffer(),M=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,M,w),s.bindBuffer(s.UNIFORM_BUFFER,null),b}function l(y){let b=i[y.id],M=y.uniforms,w=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let T=0,x=M.length;T<x;T++){let _=M[T];if(Array.isArray(_))for(let P=0,R=_.length;P<R;P++)h(_[P],T,P,w);else h(_,T,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,b,M,w){if(d(y,b,M,w)===!0){let T=y.__offset,x=y.value;if(Array.isArray(x)){let _=0;for(let P=0;P<x.length;P++){let R=x[P],U=v(R,!0);u(R,y.__data,_),_+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,y.__data)}}function u(y,b,M){typeof y=="number"||typeof y=="boolean"?b[M]=y:y.isMatrix3?(b[M]=y.elements[0],b[M+1]=y.elements[1],b[M+2]=y.elements[2],b[M+3]=0,b[M+4]=y.elements[3],b[M+5]=y.elements[4],b[M+6]=y.elements[5],b[M+7]=0,b[M+8]=y.elements[6],b[M+9]=y.elements[7],b[M+10]=y.elements[8],b[M+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-M),M):y.toArray(b,M)}function d(y,b,M,w){let T=y.value,x=b+"_"+M;if(Array.isArray(T)){w[x]===void 0&&(w[x]=[]);let _=w[x],P=!1;for(let R=0;R<T.length;R++)f(T[R],_,R)===!0&&(P=!0);return P}return f(T,w,x)}function f(y,b,M){if(b[M]===void 0)return typeof y=="number"||typeof y=="boolean"?b[M]=y:ArrayBuffer.isView(y)?b[M]=y.slice():b[M]=y.clone(),!0;{let w=b[M];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return b[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function p(y){let b=y.uniforms,M=0,w=16;for(let x=0,_=b.length;x<_;x++){let P=Array.isArray(b[x])?b[x]:[b[x]];for(let R=0,U=P.length;R<U;R++){let H=P[R],J=Array.isArray(H.value)?H.value:[H.value],L=Array.isArray(b[x])||Array.isArray(H.value),F=M;for(let N=0,j=J.length;N<j;N++){let I=J[N],G=v(I,L),X=M%w,Q=X%G.boundary,V=X+Q;M+=Q,V!==0&&w-V<G.storage&&(M+=w-V),N===0&&(F=M),M+=G.storage}let O=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new O((M-F)/Float32Array.BYTES_PER_ELEMENT),H.__offset=F}}let T=M%w;return T>0&&(M+=w-T),y.__size=M,y.__cache={},this}function v(y,b){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(y){let b=y.target;b.removeEventListener("dispose",m),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function g(){for(let y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:o,update:a,dispose:g}}var gy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qn=null;function xy(){return Qn===null&&(Qn=new Ys(gy,16,16,Hi,kn),Qn.name="DFG_LUT",Qn.minFilter=Bt,Qn.magFilter=Bt,Qn.wrapS=wn,Qn.wrapT=wn,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}var El=class{constructor(e={}){let{canvas:t=Pd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=gn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=f,m=new Set([Va,Ga,Ha]),g=new Set([gn,zn,ar,gs,Ba,za]),y=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},w=null,T=null,x=[],_=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,H=null,J=null,L=null,F=null;this._outputColorSpace=gt;let O=0,N=0,j=null,I=-1,G=null,X=new _t,Q=new _t,V=null,k=new Ce(0),te=0,ce=t.width,_e=t.height,ae=1,we=null,Ne=null,Me=new _t(0,0,ce,_e),Oe=new _t(0,0,ce,_e),Ge=!1,ie=new Bi,ue=new pa,le=!1,Se=!1,me=new je,We=new D,Fe=new _t,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function at(){return j===null?ae:1}let z=n;function it(E,B){return t.getContext(E,B)}let Ze,ft,ye,Mt,Ie,Ve,A,S,Y,he,re,xe,ve,ne,se,$,C,q,W,oe,de,pe,Pe;try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),z===null){let B="webgl2";if(z=it(B,E),z===null)throw it(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(E){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),qe("WebGLRenderer: "+E.message),E}function Ke(){Ze=new Rx(z),Ze.init(),de=new hy(z,Ze),ft=new xx(z,Ze,e,de),ye=new ly(z,Ze),ft.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),J=z.createFramebuffer(),L=z.createFramebuffer(),F=z.createFramebuffer(),Mt=new Px(z),Ie=new Z_,Ve=new cy(z,Ze,ye,Ie,ft,de,Mt),A=new Ax(R),S=new Nm(z),pe=new mx(z,S),Y=new Cx(z,S,Mt,pe),he=new Nx(z,Y,S,pe,Mt),q=new Lx(z,ft,Ve),se=new _x(Ie),re=new Y_(R,A,Ze,ft,pe,se),xe=new py(R,Ie),ve=new J_,ne=new ny(Ze),C=new px(R,A,ye,he,p,c),$=new ay(R,he,ft),Pe=new my(z,Mt,ft,ye),W=new gx(z,Ze,Mt),oe=new Ix(z,Ze,Mt),Mt.programs=re.programs,R.capabilities=ft,R.extensions=Ze,R.properties=Ie,R.renderLists=ve,R.shadowMap=$,R.state=ye,R.info=Mt}v!==gn&&(P=new Ux(v,t.width,t.height,a,i,r));let fe=new mh(R,z);this.xr=fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(E){E!==void 0&&(ae=E,this.setSize(ce,_e,!1))},this.getSize=function(E){return E.set(ce,_e)},this.setSize=function(E,B,ee=!0){if(fe.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=E,_e=B,t.width=Math.floor(E*ae),t.height=Math.floor(B*ae),ee===!0&&(t.style.width=E+"px",t.style.height=B+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(ce*ae,_e*ae).floor()},this.setDrawingBufferSize=function(E,B,ee){ce=E,_e=B,ae=ee,t.width=Math.floor(E*ee),t.height=Math.floor(B*ee),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(v===gn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(X)},this.getViewport=function(E){return E.copy(Me)},this.setViewport=function(E,B,ee,Z){E.isVector4?Me.set(E.x,E.y,E.z,E.w):Me.set(E,B,ee,Z),ye.viewport(X.copy(Me).multiplyScalar(at()).round())},this.getScissor=function(E){return E.copy(Oe)},this.setScissor=function(E,B,ee,Z){E.isVector4?Oe.set(E.x,E.y,E.z,E.w):Oe.set(E,B,ee,Z),ye.scissor(Q.copy(Oe).multiplyScalar(at()).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(E){ye.setScissorTest(Ge=E)},this.setOpaqueSort=function(E){we=E},this.setTransparentSort=function(E){Ne=E},this.getClearColor=function(E){return E.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,ee=!0){let Z=0;if(E){let K=!1;if(j!==null){let Te=j.texture.format;K=m.has(Te)}if(K){let Te=j.texture.type,Le=g.has(Te),be=C.getClearColor(),Re=C.getClearAlpha(),ze=be.r,$e=be.g,ct=be.b;Le?(y[0]=ze,y[1]=$e,y[2]=ct,y[3]=Re,z.clearBufferuiv(z.COLOR,0,y)):(b[0]=ze,b[1]=$e,b[2]=ct,b[3]=Re,z.clearBufferiv(z.COLOR,0,b))}else Z|=z.COLOR_BUFFER_BIT}B&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),H=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),C.dispose(),ve.dispose(),ne.dispose(),Ve.dispose(),Ie.dispose(),A.dispose(),he.dispose(),Y.dispose(),pe.dispose(),Pe.dispose(),re.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Vi),fe.removeEventListener("sessionend",mr),Wi.stop()};function Be(E){E.preventDefault(),Lr("WebGLRenderer: Context Lost."),U=!0}function Ye(){Lr("WebGLRenderer: Context Restored."),U=!1;let E=Mt.autoReset,B=$.enabled,ee=$.autoUpdate,Z=$.needsUpdate,K=$.type;Ke(),Mt.autoReset=E,$.enabled=B,$.autoUpdate=ee,$.needsUpdate=Z,$.type=K}function Ee(E){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ut(E){let B=E.target;B.removeEventListener("dispose",ut),mt(B)}function mt(E){hn(E),Ie.remove(E)}function hn(E){let B=Ie.get(E).programs;B!==void 0&&(B.forEach(function(ee){re.releaseProgram(ee)}),E.isShaderMaterial&&re.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,ee,Z,K,Te){B===null&&(B=et);let Le=K.isMesh&&K.matrixWorld.determinantAffine()<0,be=ep(E,B,ee,Z,K);ye.setMaterial(Z,Le);let Re=ee.index,ze=1;if(Z.wireframe===!0){if(Re=Y.getWireframeAttribute(ee),Re===void 0)return;ze=2}let $e=ee.drawRange,ct=ee.attributes.position,De=$e.start*ze,ht=($e.start+$e.count)*ze;Te!==null&&(De=Math.max(De,Te.start*ze),ht=Math.min(ht,(Te.start+Te.count)*ze)),Re!==null?(De=Math.max(De,0),ht=Math.min(ht,Re.count)):ct!=null&&(De=Math.max(De,0),ht=Math.min(ht,ct.count));let Nt=ht-De;if(Nt<0||Nt===1/0)return;pe.setup(K,Z,be,ee,Re);let Et,St=W;if(Re!==null&&(Et=S.get(Re),St=oe,St.setIndex(Et)),K.isMesh)Z.wireframe===!0?(ye.setLineWidth(Z.wireframeLinewidth*at()),St.setMode(z.LINES)):St.setMode(z.TRIANGLES);else if(K.isLine){let Qt=Z.linewidth;Qt===void 0&&(Qt=1),ye.setLineWidth(Qt*at()),K.isLineSegments?St.setMode(z.LINES):K.isLineLoop?St.setMode(z.LINE_LOOP):St.setMode(z.LINE_STRIP)}else K.isPoints?St.setMode(z.POINTS):K.isSprite&&St.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))St.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Qt=K._multiDrawStarts,Ue=K._multiDrawCounts,an=K._multiDrawCount,pt=Re?S.get(Re).bytesPerElement:1,Xi=Ie.get(Z).currentProgram.getUniforms();for(let en=0;en<an;en++)Xi.setValue(z,"_gl_DrawID",en),St.render(Qt[en]/pt,Ue[en])}else if(K.isInstancedMesh)St.renderInstances(De,Nt,K.count);else if(ee.isInstancedBufferGeometry){let Qt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ue=Math.min(ee.instanceCount,Qt);St.renderInstances(De,Nt,Ue)}else St.render(De,Nt)};function ri(E,B,ee,Z){H!==null&&E.isNodeMaterial&&H.setObject(Z,E),le===!0&&se.setState(E,ee,!1),E.transparent===!0&&E.side===Ht&&E.forceSinglePass===!1?(E.side=kt,E.needsUpdate=!0,gr(E,B,Z),E.side=$n,E.needsUpdate=!0,gr(E,B,Z),E.side=Ht):gr(E,B,Z)}this.compile=function(E,B,ee=null){ee===null&&(ee=E),H!==null&&H.renderStart(E,B,ee),T=ne.get(ee),T.init(B),_.push(T),ee.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),E!==ee&&E.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),H!==null&&H.updateLights(T.state.lightsArray),Se=this.localClippingEnabled,le=se.init(this.clippingPlanes,Se),le===!0&&se.setGlobalState(this.clippingPlanes,B),H!==null&&$.render(T.state.shadowsArray,ee,B);let Z=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Te=K.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){let be=Te[Le];ri(be,ee,B,K),Z.add(be)}else ri(Te,ee,B,K),Z.add(Te)}),T=_.pop(),H!==null&&H.renderEnd(),Z},this.compileAsync=function(E,B,ee=null){let Z=this.compile(E,B,ee);return new Promise(K=>{function Te(){if(Z.forEach(function(Le){let Re=Ie.get(Le).currentProgram;(Re===void 0||Re.isReady())&&Z.delete(Le)}),Z.size===0){K(E);return}setTimeout(Te,10)}Ze.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let At=null;function jt(E){At&&At(E)}function Vi(){Wi.stop()}function mr(){Wi.start()}let Wi=new uf;Wi.setAnimationLoop(jt),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(E){At=E,fe.setAnimationLoop(E),E===null?Wi.stop():Wi.start()},fe.addEventListener("sessionstart",Vi),fe.addEventListener("sessionend",mr),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(E,B);let ee=fe.enabled===!0&&fe.isPresenting===!0,Z=P!==null&&(j===null||ee)&&P.begin(R,j);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(B),B=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,B,j),T=ne.get(E,_.length),T.init(B),T.state.textureUnits=Ve.getTextureUnits(),_.push(T),me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?ue.setFromArrayCamera(B):ie.setFromProjectionMatrix(me,An,B.reversedDepth),Se=this.localClippingEnabled,le=se.init(this.clippingPlanes,Se),w=ve.get(E,x.length),w.init(),x.push(w),this.info.render.frame++,fe.enabled===!0&&fe.isPresenting===!0){let Le=R.xr.getDepthSensingMesh();Le!==null&&Ul(Le,B,-1/0,R.sortObjects)}Ul(E,B,0,R.sortObjects),w.finish(),H!==null&&H.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(we,Ne),Xe=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Xe&&C.addToRenderList(w,E),this.info.autoReset===!0&&this.info.reset(),le===!0&&se.beginShadows();let K=T.state.shadowsArray;if($.render(K,E,B),le===!0&&se.endShadows(),(Z&&P.hasRenderPass())===!1){let Le=w.opaque,be=w.transmissive;if(T.setupLights(),B.isArrayCamera){let Re=B.cameras;if(be.length>0)for(let ze=0,$e=Re.length;ze<$e;ze++){let ct=Re[ze];Qh(Le,be,E,ct)}Xe&&C.render(E);for(let ze=0,$e=Re.length;ze<$e;ze++){let ct=Re[ze];jh(w,E,ct,ct.viewport)}}else be.length>0&&Qh(Le,be,E,B),Xe&&C.render(E),jh(w,E,B)}j!==null&&N===0&&(Ve.updateMultisampleRenderTarget(j),Ve.updateRenderTargetMipmap(j)),Z&&P.end(R),E.isScene===!0&&E.onAfterRender(R,E,B),pe.resetDefaultState(),I=-1,G=null,_.pop(),_.length>0?(T=_[_.length-1],Ve.setTextureUnits(T.state.textureUnits),le===!0&&se.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,H!==null&&H.renderEnd()};function Ul(E,B,ee,Z){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)ee=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Le=B.isArrayCamera?ue:ie;if(!E.frustumCulled||E.intersectsFrustum(Le)){Z&&Fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(me);let be=he.update(E),Re=E.material;Re.visible&&w.push(E,be,Re,ee,Fe.z,null,B)}}else if(E.isMesh||E.isLine||E.isPoints){let Le=B.isArrayCamera?ue:ie;if(!E.frustumCulled||E.intersectsFrustum(Le)){let be=he.update(E),Re=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Fe.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Fe.copy(be.boundingSphere.center)),Fe.applyMatrix4(E.matrixWorld).applyMatrix4(me)),Array.isArray(Re)){let ze=be.groups;for(let $e=0,ct=ze.length;$e<ct;$e++){let De=ze[$e],ht=Re[De.materialIndex];ht&&ht.visible&&w.push(E,be,ht,ee,Fe.z,De,B)}}else Re.visible&&w.push(E,be,Re,ee,Fe.z,null,B)}}}let Te=E.children;for(let Le=0,be=Te.length;Le<be;Le++)Ul(Te[Le],B,ee,Z)}function jh(E,B,ee,Z){let{opaque:K,transmissive:Te,transparent:Le}=E;T.setupLightsView(ee),le===!0&&se.setGlobalState(R.clippingPlanes,ee),Z&&ye.viewport(X.copy(Z)),K.length>0&&Ao(K,B,ee),Te.length>0&&Ao(Te,B,ee),Le.length>0&&Ao(Le,B,ee),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Qh(E,B,ee,Z){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Z.id]===void 0){let De=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Z.id]=new vn(1,1,{generateMipmaps:!0,type:De?kn:gn,minFilter:Cn,samples:Math.max(4,ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Te=T.state.transmissionRenderTarget[Z.id],Le=Z.viewport||X;Te.setSize(Le.z*R.transmissionResolutionScale,Le.w*R.transmissionResolutionScale);let be=R.getRenderTarget(),Re=R.getActiveCubeFace(),ze=R.getActiveMipmapLevel();R.setRenderTarget(Te),R.getClearColor(k),te=R.getClearAlpha(),te<1&&R.setClearColor(16777215,.5),R.clear(),Xe&&C.render(ee);let $e=R.toneMapping;R.toneMapping=jn;let ct=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),T.setupLightsView(Z),le===!0&&se.setGlobalState(R.clippingPlanes,Z),Ao(E,ee,Z),Ve.updateMultisampleRenderTarget(Te),Ve.updateRenderTargetMipmap(Te),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ht=0,Nt=B.length;ht<Nt;ht++){let Et=B[ht],{object:St,geometry:Qt,material:Ue,group:an}=Et;if(Ue.side===Ht&&St.layers.test(Z.layers)){let pt=Ue.side;Ue.side=kt,Ue.needsUpdate=!0,eu(St,ee,Z,Qt,Ue,an),Ue.side=pt,Ue.needsUpdate=!0,De=!0}}De===!0&&(Ve.updateMultisampleRenderTarget(Te),Ve.updateRenderTargetMipmap(Te))}R.setRenderTarget(be,Re,ze),R.setClearColor(k,te),ct!==void 0&&(Z.viewport=ct),R.toneMapping=$e}function Ao(E,B,ee){let Z=B.isScene===!0?B.overrideMaterial:null;for(let K=0,Te=E.length;K<Te;K++){let Le=E[K],{object:be,geometry:Re,group:ze}=Le,$e=Le.material;$e.allowOverride===!0&&Z!==null&&($e=Z),be.layers.test(ee.layers)&&eu(be,B,ee,Re,$e,ze)}}function eu(E,B,ee,Z,K,Te){H!==null&&K.isNodeMaterial&&H.setObject(E,K),E.onBeforeRender(R,B,ee,Z,K,Te),E.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(R,B,ee,Z,E,Te),K.transparent===!0&&K.side===Ht&&K.forceSinglePass===!1?(K.side=kt,K.needsUpdate=!0,R.renderBufferDirect(ee,B,Z,K,E,Te),K.side=$n,K.needsUpdate=!0,R.renderBufferDirect(ee,B,Z,K,E,Te),K.side=Ht):R.renderBufferDirect(ee,B,Z,K,E,Te),E.onAfterRender(R,B,ee,Z,K,Te)}function tu(E){let B=0;for(let ee of E)ee.texture!==null&&B++;return B}function gr(E,B,ee){B.isScene!==!0&&(B=et);let Z=Ie.get(E),K=T.state.lights,Te=T.state.shadowsArray,Le=K.state.version,be=re.getParameters(E,K.state,Te,B,ee,T.state.lightProbeGridArray),Re=re.getProgramCacheKey(be),ze=Z.programs;Z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,Z.fog=B.fog;let $e=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Z.envMap=A.get(E.envMap||Z.environment,$e),Z.envMapRotation=Z.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",ut),ze=new Map,Z.programs=ze,Z.programVariants=new Map);let ct=ze.get(Re);if(ct!==void 0){if(Z.currentProgram===ct&&Z.lightsStateVersion===Le)return iu(E,be),ct}else be.uniforms=re.getUniforms(E),H!==null&&E.isNodeMaterial&&H.build(E,ee,be),E.onBeforeCompile(be,R),ct=re.acquireProgram(be,Re),ze.set(Re,ct),Z.uniforms=be.uniforms;let De=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=se.uniform),iu(E,be),Z.needsLights=np(E),Z.lightsStateVersion=Le,Z.needsLights&&(De.ambientLightColor.value=K.state.ambient,De.lightProbe.value=K.state.probe,De.sunLights.value=K.state.sun,De.sunLightShadows.value=K.state.sunShadow,De.directionalLights.value=K.state.directional,De.directionalLightShadows.value=K.state.directionalShadow,De.spotLights.value=K.state.spot,De.spotLightShadows.value=K.state.spotShadow,De.rectAreaLights.value=K.state.rectArea,De.ltc_1.value=K.state.rectAreaLTC1,De.ltc_2.value=K.state.rectAreaLTC2,De.pointLights.value=K.state.point,De.pointLightShadows.value=K.state.pointShadow,De.hemisphereLights.value=K.state.hemi,De.sunShadowMatrix.value=K.state.sunShadowMatrix,De.sunShadowCascade.value=K.state.sunShadowCascade,De.directionalShadowMatrix.value=K.state.directionalShadowMatrix,De.spotLightMatrix.value=K.state.spotLightMatrix,De.spotLightMap.value=K.state.spotLightMap,De.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.numLightProbeGrids=tu(T.state.lightProbeGridArray),Z.currentProgram=ct,Z.uniformsList=null,ct}function Qf(E,B,ee,Z,K){let Te=Ie.get(E),Le=Te.currentProgram.id+","+Z+","+K,be=Te.programVariants.get(Le);return be===void 0?(be=gr(E,B,ee),Te.programVariants.set(Le,be)):(Te.currentProgram=be,Te.uniformsList=null,Te.outputColorSpace=Z,Te.toneMapping=K),be}function nu(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=cr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function iu(E,B){let ee=Ie.get(E);ee.outputColorSpace=B.outputColorSpace,ee.batching=B.batching,ee.batchingColor=B.batchingColor,ee.instancing=B.instancing,ee.instancingColor=B.instancingColor,ee.instancingMorph=B.instancingMorph,ee.skinning=B.skinning,ee.morphTargets=B.morphTargets,ee.morphNormals=B.morphNormals,ee.morphColors=B.morphColors,ee.morphTargetsCount=B.morphTargetsCount,ee.numClippingPlanes=B.numClippingPlanes,ee.numIntersection=B.numClipIntersection,ee.vertexAlphas=B.vertexAlphas,ee.vertexTangents=B.vertexTangents,ee.toneMapping=B.toneMapping}function ep(E,B,ee,Z,K){B.isScene!==!0&&(B=et),Ve.resetTextureUnits();let Te=B.fog,Le=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?B.environment:null,be=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:st.workingColorSpace,Re=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,ze=A.get(Z.envMap||Le,Re),$e=Z.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ct=!!ee.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),De=!!ee.morphAttributes.position,ht=!!ee.morphAttributes.normal,Nt=!!ee.morphAttributes.color,Et=jn;Z.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Et=R.toneMapping);let St=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Qt=St!==void 0?St.length:0,Ue=Ie.get(Z),an=T.state.lights;if(le===!0&&(Se===!0||E!==G)){let Rt=E===G&&Z.id===I;se.setState(Z,E,Rt)}let pt=!1,Xi=!1;Z.version===Ue.__version?Ue.needsLights&&Ue.lightsStateVersion!==an.state.version||K.isBatchedMesh&&Ue.batching===!1||!K.isBatchedMesh&&Ue.batching===!0||K.isBatchedMesh&&Ue.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ue.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ue.instancing===!1||!K.isInstancedMesh&&Ue.instancing===!0||K.isSkinnedMesh&&Ue.skinning===!1||!K.isSkinnedMesh&&Ue.skinning===!0||K.isInstancedMesh&&Ue.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ue.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ue.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ue.instancingMorph===!1&&K.morphTexture!==null||Ue.envMap!==ze||Z.fog===!0&&Ue.fog!==Te||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==se.numPlanes||Ue.numIntersection!==se.numIntersection)||Ue.vertexAlphas!==$e||Ue.vertexTangents!==ct||Ue.morphTargets!==De||Ue.morphNormals!==ht||Ue.morphColors!==Nt||Ue.morphTargetsCount!==Qt||Ue.numLightProbeGrids!==tu(T.state.lightProbeGridArray)?pt=!0:(Ue.outputColorSpace!==be||Ue.toneMapping!==Et)&&(Xi=!0):(pt=!0,Ue.__version=Z.version);let en=Ue.currentProgram;(pt===!0||Xi===!0)&&(en=Xi===!0?Qf(Z,B,K,be,Et):gr(Z,B,K),H&&Z.isNodeMaterial&&H.onUpdateProgram(Z,en,Ue));let Ro=!1,Ii=!1,qi=!1,dt=en.getUniforms(),$t=Ue.uniforms;if(ye.useProgram(en.program)&&(Ro=!0,Ii=!0,qi=!0),Z.id!==I&&(I=Z.id,Ii=!0),Ro||G!==E){ye.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),dt.setValue(z,"projectionMatrix",E.projectionMatrix),dt.setValue(z,"viewMatrix",E.matrixWorldInverse);let qt=dt.map.cameraPosition;qt!==void 0&&qt.setValue(z,We.setFromMatrixPosition(E.matrixWorld)),ft.logarithmicDepthBuffer&&dt.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&dt.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,Ii=!0,qi=!0)}if(Ue.needsLights&&(an.state.sunShadowMap.length>0&&dt.setValue(z,"sunShadowMap",an.state.sunShadowMap,Ve),an.state.directionalShadowMap.length>0&&dt.setValue(z,"directionalShadowMap",an.state.directionalShadowMap,Ve),an.state.spotShadowMap.length>0&&dt.setValue(z,"spotShadowMap",an.state.spotShadowMap,Ve),an.state.pointShadowMap.length>0&&dt.setValue(z,"pointShadowMap",an.state.pointShadowMap,Ve)),K.isSkinnedMesh){dt.setOptional(z,K,"bindMatrix"),dt.setOptional(z,K,"bindMatrixInverse");let Rt=K.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),dt.setValue(z,"boneTexture",Rt.boneTexture,Ve))}K.isBatchedMesh&&(dt.setOptional(z,K,"batchingTexture"),dt.setValue(z,"batchingTexture",K._matricesTexture,Ve),dt.setOptional(z,K,"batchingIdTexture"),dt.setValue(z,"batchingIdTexture",K._indirectTexture,Ve),dt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&dt.setValue(z,"batchingColorTexture",K._colorsTexture,Ve));let Dn=ee.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&q.update(K,ee,en),(Ii||Ue.receiveShadow!==K.receiveShadow)&&(Ue.receiveShadow=K.receiveShadow,dt.setValue(z,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&B.environment!==null&&($t.envMapIntensity.value=B.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=xy()),Ii){if(dt.setValue(z,"toneMappingExposure",R.toneMappingExposure),Ue.needsLights&&tp($t,qi),Te&&Z.fog===!0&&xe.refreshFogUniforms($t,Te),xe.refreshMaterialUniforms($t,Z,ae,_e,T.state.transmissionRenderTarget[E.id]),Ue.needsLights&&Ue.numLightProbeGrids>0){let Rt=M,qt=0;for(let oi of T.state.lightProbeGridArray)oi.texture!==null&&(Rt.textures[qt]=oi.texture,Rt.min[qt]=oi.boundingBox.min,Rt.max[qt]=oi.boundingBox.max,Rt.resolution[qt]=oi.resolution,qt++);for(let oi in Rt)Rt[oi].length=qt;$t.probesSH.value=Rt.textures,$t.probesMin.value=Rt.min,$t.probesMax.value=Rt.max,$t.probesResolution.value=Rt.resolution}cr.upload(z,nu(Ue),$t,Ve)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(cr.upload(z,nu(Ue),$t,Ve),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&dt.setValue(z,"center",K.center),dt.setValue(z,"modelViewMatrix",K.modelViewMatrix),dt.setValue(z,"normalMatrix",K.normalMatrix),dt.setValue(z,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let Rt=Z.uniformsGroups;for(let qt=0,oi=Rt.length;qt<oi;qt++){let ru=Rt[qt];Pe.update(ru,en),Pe.bind(ru,en)}}return en}function tp(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function np(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(E,B,ee){let Z=Ie.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ie.get(E.texture).__webglTexture=B,Ie.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ee,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let ee=Ie.get(E);ee.__webglFramebuffer=B,ee.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,ee=0){j=E,O=B,N=ee;let Z=null,K=!1,Te=!1;if(E){let be=Ie.get(E);if(be.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(z.FRAMEBUFFER,be.__webglFramebuffer),X.copy(E.viewport),Q.copy(E.scissor),V=E.scissorTest,ye.viewport(X),ye.scissor(Q),ye.setScissorTest(V),I=-1;return}else if(be.__webglFramebuffer===void 0)Ve.setupRenderTarget(E);else if(be.__hasExternalTextures)Ve.rebindTextures(E,Ie.get(E.texture).__webglTexture,Ie.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let $e=E.depthTexture;if(be.__boundDepthTexture!==$e){if($e!==null&&Ie.has($e)&&(E.width!==$e.image.width||E.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(E)}}let Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Te=!0);let ze=Ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?Z=ze[B][ee]:Z=ze[B],K=!0):E.samples>0&&Ve.useMultisampledRTT(E)===!1?Z=Ie.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?Z=ze[ee]:Z=ze,X.copy(E.viewport),Q.copy(E.scissor),V=E.scissorTest}else X.copy(Me).multiplyScalar(ae).floor(),Q.copy(Oe).multiplyScalar(ae).floor(),V=Ge;if(ee!==0&&(Z=J),ye.bindFramebuffer(z.FRAMEBUFFER,Z)&&ye.drawBuffers(E,Z),ye.viewport(X),ye.scissor(Q),ye.setScissorTest(V),K){let be=Ie.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,be.__webglTexture,ee)}else if(Te){let be=B;for(let Re=0;Re<E.textures.length;Re++){let ze=Ie.get(E.textures[Re]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Re,ze.__webglTexture,ee,be)}}else if(E!==null&&ee!==0){let be=Ie.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,be.__webglTexture,ee)}I=-1};function su(E){let B=Ie.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=ft.textureFormatReadable(E.format),B.__typeReadable=ft.textureTypeReadable(E.type)),B}this.readRenderTargetPixels=function(E,B,ee,Z,K,Te,Le,be=0){if(!(E&&E.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le],Array.isArray(Re)&&(Re=Re[0])),Re){ye.bindFramebuffer(z.FRAMEBUFFER,Re);try{let ze=E.textures[be],$e=ze.format,ct=ze.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);let De=su(ze);if(De.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Z&&ee>=0&&ee<=E.height-K&&z.readPixels(B,ee,Z,K,de.convert($e),de.convert(ct),Te)}finally{let ze=j!==null?Ie.get(j).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,B,ee,Z,K,Te,Le,be=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le],Array.isArray(Re)&&(Re=Re[0])),Re)if(B>=0&&B<=E.width-Z&&ee>=0&&ee<=E.height-K){ye.bindFramebuffer(z.FRAMEBUFFER,Re);let ze=E.textures[be],$e=ze.format,ct=ze.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);let De=su(ze);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ht),z.bufferData(z.PIXEL_PACK_BUFFER,Te.byteLength,z.STREAM_READ),z.readPixels(B,ee,Z,K,de.convert($e),de.convert(ct),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Nt=j!==null?Ie.get(j).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Nt);let Et=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Nd(z,Et,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ht),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Te),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ht),z.deleteSync(Et),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,ee=0){let Z=Math.pow(2,-ee),K=Math.floor(E.image.width*Z),Te=Math.floor(E.image.height*Z),Le=B!==null?B.x:0,be=B!==null?B.y:0;Ve.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,ee,0,0,Le,be,K,Te),ye.unbindTexture()},this.copyTextureToTexture=function(E,B,ee=null,Z=null,K=0,Te=0){let Le,be,Re,ze,$e,ct,De,ht,Nt,Et=E.isCompressedTexture?E.mipmaps[Te]:E.image;if(ee!==null)Le=ee.max.x-ee.min.x,be=ee.max.y-ee.min.y,Re=ee.isBox3?ee.max.z-ee.min.z:1,ze=ee.min.x,$e=ee.min.y,ct=ee.isBox3?ee.min.z:0;else{let dt=Math.pow(2,-K);Le=Math.floor(Et.width*dt),be=Math.floor(Et.height*dt),E.isDataArrayTexture?Re=Et.depth:E.isData3DTexture?Re=Math.floor(Et.depth*dt):Re=1,ze=0,$e=0,ct=0}Z!==null?(De=Z.x,ht=Z.y,Nt=Z.z):(De=0,ht=0,Nt=0);let St=de.convert(B.format),Qt=de.convert(B.type),Ue;B.isData3DTexture?(Ve.setTexture3D(B,0),Ue=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ve.setTexture2DArray(B,0),Ue=z.TEXTURE_2D_ARRAY):(Ve.setTexture2D(B,0),Ue=z.TEXTURE_2D),ye.activeTexture(z.TEXTURE0),ye.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),ye.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),ye.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);let an=ye.getParameter(z.UNPACK_ROW_LENGTH),pt=ye.getParameter(z.UNPACK_IMAGE_HEIGHT),Xi=ye.getParameter(z.UNPACK_SKIP_PIXELS),en=ye.getParameter(z.UNPACK_SKIP_ROWS),Ro=ye.getParameter(z.UNPACK_SKIP_IMAGES);ye.pixelStorei(z.UNPACK_ROW_LENGTH,Et.width),ye.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et.height),ye.pixelStorei(z.UNPACK_SKIP_PIXELS,ze),ye.pixelStorei(z.UNPACK_SKIP_ROWS,$e),ye.pixelStorei(z.UNPACK_SKIP_IMAGES,ct);let Ii=E.isDataArrayTexture||E.isData3DTexture,qi=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let dt=Ie.get(E),$t=Ie.get(B),Dn=Ie.get(dt.__renderTarget),Rt=Ie.get($t.__renderTarget);ye.bindFramebuffer(z.READ_FRAMEBUFFER,Dn.__webglFramebuffer),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let qt=0;qt<Re;qt++)Ii&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.get(E).__webglTexture,K,ct+qt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.get(B).__webglTexture,Te,Nt+qt)),z.blitFramebuffer(ze,$e,ze+Le,$e+be,De,ht,De+Le,ht+be,z.DEPTH_BUFFER_BIT,z.NEAREST);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||Ie.has(E)){let dt=Ie.get(E),$t=Ie.get(B);ye.bindFramebuffer(z.READ_FRAMEBUFFER,L),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,F);for(let Dn=0;Dn<Re;Dn++)Ii?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dt.__webglTexture,K,ct+Dn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dt.__webglTexture,K),qi?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$t.__webglTexture,Te,Nt+Dn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,$t.__webglTexture,Te),K!==0?z.blitFramebuffer(ze,$e,ze+Le,$e+be,De,ht,De+Le,ht+be,z.COLOR_BUFFER_BIT,z.NEAREST):qi?z.copyTexSubImage3D(Ue,Te,De,ht,Nt+Dn,ze,$e,Le,be):z.copyTexSubImage2D(Ue,Te,De,ht,ze,$e,Le,be);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else qi?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Ue,Te,De,ht,Nt,Le,be,Re,St,Qt,Et.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(Ue,Te,De,ht,Nt,Le,be,Re,St,Et.data):z.texSubImage3D(Ue,Te,De,ht,Nt,Le,be,Re,St,Qt,Et):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Te,De,ht,Le,be,St,Qt,Et.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Te,De,ht,Et.width,Et.height,St,Et.data):z.texSubImage2D(z.TEXTURE_2D,Te,De,ht,Le,be,St,Qt,Et);ye.pixelStorei(z.UNPACK_ROW_LENGTH,an),ye.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt),ye.pixelStorei(z.UNPACK_SKIP_PIXELS,Xi),ye.pixelStorei(z.UNPACK_SKIP_ROWS,en),ye.pixelStorei(z.UNPACK_SKIP_IMAGES,Ro),Te===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&z.generateMipmap(Ue),ye.unbindTexture()},this.initRenderTarget=function(E){Ie.get(E).__webglFramebuffer===void 0&&Ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ve.setTextureCube(E,0):E.isData3DTexture?Ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ve.setTexture2DArray(E,0):Ve.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){O=0,N=0,j=null,ye.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};function bf(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Tt;c.morphTargetsRelative=a;let l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Sf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);let p=Sf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Sf(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Zt(o,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let v=h.getComponent(d,p);a.setComponent(d+u,p,v)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function gh(s,e){if(e===Xc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===lr||e===go){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===lr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var HS=Math.PI*2,GS=Math.PI/180;var xh=(s,e,t)=>s+(e-s)*t;function Al(s,e,t){let n=Math.imul(s,1402946737)^Math.imul(e,1597334677)^t;return n=Math.imul(n^n>>>16,2146121005),((n^n>>>15)>>>0)/4294967295}function _y(s,e,t=0){let n=Math.floor(s),i=Math.floor(e),r=s-n,o=e-i,a=r*r*(3-2*r),c=o*o*(3-2*o);return xh(xh(Al(n,i,t),Al(n+1,i,t),a),xh(Al(n,i+1,t),Al(n+1,i+1,t),a),c)}function _h(s,e,t=0,n=4){let i=0,r=.5,o=1,a=0;for(let c=0;c<n;c++)i+=r*(_y(s*o,e*o,t+c*131)*2-1),a+=r,o*=2.03,r*=.5;return i/a}var yy=["regolith","rock","panel","metal","printed","fabric","cloth","plate","rubber","soil","fur","solar"],vy=new Set(["regolith","panel","metal","fabric","cloth","plate","rubber","fur"]),My=1/.75,ys={},Ef=null,Xt={enabled:!1,dustColor:{value:new Ce("#b07a5c")},dustAmount:{value:1}};async function Tf(s,{quality:e="high",base:t=new URL("./assets/tex/",import.meta.url)}={}){if(e==="low"||Xt.enabled)return Xt.enabled;let n=new as,i=Math.min(e==="high"?8:4,s?.capabilities?.getMaxAnisotropy?.()??8),r=(o,a)=>n.loadAsync(new URL(o,t).href).then(c=>(c.wrapS=c.wrapT=Rn,c.colorSpace=a?gt:Hn,c.anisotropy=i,c));try{let o=yy.map(async a=>{let[c,l]=await Promise.all([r(`${a}_albedo.webp`,!0),r(`${a}_normal.webp`,!1)]);ys[a]={albedo:c,normal:l}});o.push(r("grime.webp",!1).then(a=>{Ef=a})),await Promise.race([Promise.all(o),new Promise((a,c)=>setTimeout(()=>c(new Error("slow")),25e3))]),Xt.enabled=!0}catch{Xt.enabled=!1}return Xt.enabled}var Sy=`
varying vec3 vRPos;
varying vec3 vRNrm;
varying float vRLow;
#ifdef R_OBJECT
varying vec3 vRX;
varying vec3 vRY;
varying vec3 vRZ;
#endif`,by=`
{
  vec4 rp = vec4(transformed, 1.0);
  vec3 rn = objectNormal;
  #ifdef FLIP_SIDED
    rn = -rn;
  #endif
  #ifdef USE_INSTANCING
    rp = instanceMatrix * rp;
    rn = mat3(instanceMatrix) * rn;
  #endif
  vRLow = rp.y;
  #ifdef R_OBJECT
    vRPos = rp.xyz;
    vRNrm = rn;
    vRX = normalMatrix[0];
    vRY = normalMatrix[1];
    vRZ = normalMatrix[2];
  #else
    vec4 rw = modelMatrix * rp;
    vRPos = rw.xyz;
    vRNrm = normalize(mat3(modelMatrix) * rn);
  #endif
}`,Ey=`
uniform sampler2D rAlbedo;
uniform sampler2D rNormal;
uniform sampler2D rGrime;
uniform float rScale;
uniform float rGain;
uniform float rNormalScale;
uniform float rDust;
uniform float rLow;
uniform float rRoughMix;
uniform vec3 rDustColor;
uniform float rDustAmount;
#ifdef R_TERRAIN
uniform sampler2D rAlbedo2;
uniform sampler2D rNormal2;
uniform float rScale2;
#endif
varying vec3 vRPos;
varying vec3 vRNrm;
varying float vRLow;
#ifdef R_OBJECT
varying vec3 vRX;
varying vec3 vRY;
varying vec3 vRZ;
#endif
vec3 rNormalW;
vec4 rAlb;
vec3 rGr;
float rDustF;
vec3 rUnpack(vec3 t) { return t * 2.0 - 1.0; }
// Triplanar sample with the "whiteout" normal blend (Ben Golus), returns the bent world normal.
vec3 rTriNormal(sampler2D tex, vec3 p, vec3 n, vec3 w, float strength) {
  #ifdef R_PLANAR
    vec3 ty = rUnpack(texture2D(tex, p.xz).xyz);
    ty.xy *= strength;
    ty = vec3(ty.xy + n.xz, abs(ty.z) * n.y);
    return normalize(ty.xzy);
  #else
    vec3 tx = rUnpack(texture2D(tex, p.zy).xyz);
    vec3 ty = rUnpack(texture2D(tex, p.xz).xyz);
    vec3 tz = rUnpack(texture2D(tex, p.xy).xyz);
    tx.xy *= strength; ty.xy *= strength; tz.xy *= strength;
    tx = vec3(tx.xy + n.zy, abs(tx.z) * n.x);
    ty = vec3(ty.xy + n.xz, abs(ty.z) * n.y);
    tz = vec3(tz.xy + n.xy, abs(tz.z) * n.z);
    return normalize(tx.zyx * w.x + ty.xzy * w.y + tz.xyz * w.z);
  #endif
}
vec4 rTri(sampler2D tex, vec3 p, vec3 w) {
  #ifdef R_PLANAR
    return texture2D(tex, p.xz);
  #else
    return texture2D(tex, p.zy) * w.x + texture2D(tex, p.xz) * w.y + texture2D(tex, p.xy) * w.z;
  #endif
}
// the same, heavily blurred (a low mip level): only the big light and dark patches remain
vec4 rTriSoft(sampler2D tex, vec3 p, vec3 w) {
  #ifdef R_PLANAR
    return texture(tex, p.xz, 6.0);
  #else
    return texture(tex, p.zy, 6.0) * w.x + texture(tex, p.xz, 6.0) * w.y + texture(tex, p.xy, 6.0) * w.z;
  #endif
}`,Ty=`
{
  vec3 n = normalize(vRNrm);
  vec3 w = pow(abs(n), vec3(4.0));
  w /= (w.x + w.y + w.z);
  vec3 p = vRPos * rScale;
  rAlb = rTri(rAlbedo, p, w);
  rNormalW = rTriNormal(rNormal, p, n, w, rNormalScale);
  #ifdef R_TERRAIN
    // a second, larger copy hides the repeat; steep slopes show bare rock
    vec3 p2 = vRPos * rScale * 0.071 + vec3(0.37, 0.0, 0.71);
    vec4 big = rTriSoft(rGrime, p2, w);
    rAlb.rgb *= 0.78 + 0.44 * big.r;
    float rocky = 1.0 - smoothstep(0.62, 0.82, n.y);
    if (rocky > 0.001) {
      vec3 pr = vRPos * rScale2;
      vec4 ra = rTri(rAlbedo2, pr, w);
      rAlb = mix(rAlb, vec4(ra.rgb * 1.6, ra.a), rocky);
      rNormalW = normalize(mix(rNormalW, rTriNormal(rNormal2, pr, n, w, 1.0), rocky));
    }
  #endif
  vec3 pg = vRPos * 0.25;
  rGr = rTri(rGrime, pg, w).rgb;
  diffuseColor.rgb *= rAlb.rgb * rGain;
}`,wy=`
{
  float top = smoothstep(0.3, 0.92, rNormalW.y);
  float low = (1.0 - smoothstep(0.0, 1.5, vRLow)) * rLow;
  float streak = (1.0 - abs(rNormalW.y)) * smoothstep(0.35, 0.95, rGr.g) * 0.35;
  rDustF = clamp((top * (0.25 + 0.75 * rGr.r) + low * (0.35 + 0.65 * rGr.b) + streak) * rDust * rDustAmount, 0.0, 0.94);
  diffuseColor.rgb = mix(diffuseColor.rgb, rDustColor * (0.82 + 0.36 * rGr.b), rDustF);
  rNormalW = normalize(mix(rNormalW, normalize(vRNrm), rDustF * 0.75));
}`,Ay=`
roughnessFactor = mix(roughnessFactor, rAlb.a, rRoughMix);
roughnessFactor = mix(roughnessFactor, 0.97, rDustF);`,Ry=`
metalnessFactor = mix(metalnessFactor, 0.0, rDustF);`,Cy=`
#ifdef R_OBJECT
  normal = normalize(mat3(vRX, vRY, vRZ) * rNormalW);
#else
  normal = normalize((viewMatrix * vec4(rNormalW, 0.0)).xyz);
#endif
#ifdef DOUBLE_SIDED
  normal *= faceDirection;
#endif`;function ti(s,e,{scale:t=1,dust:n=.6,low:i=.5,normal:r=1,rough:o=.75,gain:a=null,object:c=!1,planar:l=!1,terrain:h=null}={}){if(!Xt.enabled||!ys[e]||Object.hasOwn(s,"onBeforeCompile"))return s;let u=ys[e],d={rAlbedo:{value:u.albedo},rNormal:{value:u.normal},rGrime:{value:Ef},rScale:{value:1/t},rGain:{value:a??(vy.has(e)?My:1)},rNormalScale:{value:r},rDust:{value:n},rLow:{value:i},rRoughMix:{value:o},rDustColor:Xt.dustColor,rDustAmount:Xt.dustAmount},f={};return c&&(f.R_OBJECT=""),l&&(f.R_PLANAR=""),h&&(f.R_TERRAIN="",d.rAlbedo2={value:ys[h.rock??"rock"].albedo},d.rNormal2={value:ys[h.rock??"rock"].normal},d.rScale2={value:1/(h.rockScale??3)}),s.defines={...s.defines,...f},s.userData.realism={set:e,opts:{scale:t,dust:n,low:i,normal:r,rough:o,gain:a,object:c,planar:l,terrain:h}},s.onBeforeCompile=p=>{Object.assign(p.uniforms,d),p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
${Sy}`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
${by}`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
${Ey}`).replace("#include <map_fragment>",`#include <map_fragment>
${Ty}`).replace("#include <color_fragment>",`#include <color_fragment>
${wy}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${Ay}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${Ry}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${Cy}`)},s.customProgramCacheKey=()=>"realism-v1",s.needsUpdate=!0,s}function dr(s,e,t=4,n=.6){if(!Xt.enabled||!ys[e])return s;let i=ys[e].normal.clone();return i.repeat.set(t,t),i.needsUpdate=!0,s.normalMap=i,s.normalScale=new ge(n,n),s.needsUpdate=!0,s}function wf(s,e=2){let t=s*9301+49297,n=()=>(t=(t*9301+49297)%233280)/233280,i=new yi(1,e),r=i.attributes.position,o=[],a=3+Math.floor(n()*4);for(let h=0;h<a;h++){let u=new D(n()*2-1,n()*1.6-.4,n()*2-1).normalize();o.push({n:u,d:.62+n()*.25})}let c=new D,l=[.8+n()*.5,.65+n()*.35,.8+n()*.5];for(let h=0;h<r.count;h++){c.fromBufferAttribute(r,h);let u=1+.22*_h(c.x*1.7+s,c.y*1.7+c.z*1.3,s%97)+.06*_h(c.x*5,c.z*5+c.y*4,s%89+7);c.multiplyScalar(u);for(let d of o){let f=c.dot(d.n)-d.d;f>0&&c.addScaledVector(d.n,-f*.92)}c.set(c.x*l[0],Math.max(c.y*l[1],-.32),c.z*l[2]),r.setXYZ(h,c.x,c.y,c.z)}return i.computeVertexNormals(),i}function Af(s,{zenith:e="#7f6252",horizon:t="#cfa98b",ground:n="#5e3e31",sun:i=null}={}){let r=new ns,o=new Jt({side:kt,depthWrite:!1,uniforms:{zen:{value:new Ce(e)},hor:{value:new Ce(t)},gro:{value:new Ce(n)},sunDir:{value:i?i.clone().normalize():new D(0,1,0)},sunOn:{value:i?1:0}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 zen; uniform vec3 hor; uniform vec3 gro; uniform vec3 sunDir; uniform float sunOn; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(hor, zen, pow(d.y, 0.6)) : mix(hor, gro, pow(min(-d.y * 4.0, 1.0), 0.5));
        c += vec3(1.0, 0.92, 0.8) * pow(max(dot(d, sunDir), 0.0), 12.0) * 0.8 * sunOn;
        gl_FragColor = vec4(c, 1.0);
      }`});r.add(new Qe(new Kt(10,32,16),o));let a=new hr(s),c=a.fromScene(r,0,.1,50);return a.dispose(),o.dispose(),c.texture}var Mo=new D;function Pn(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Mo.copy(e),Mo[n]=0,Mo.normalize();let l=.5*o/(o+a),h=1-Mo.angleTo(s)/c;return Math.sign(Mo[t])===1?h*l:a/(o+a)+l+l*(1-h)}var ni=class s extends Yn{constructor(e=1,t=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new D,l=new D,h=new D(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,v=new D,m=.5/o;for(let g=0,y=0;g<u.length;g+=3,y+=2)switch(c.fromArray(u,g),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[g+0]=h.x*Math.sign(c.x)+l.x*r,u[g+1]=h.y*Math.sign(c.y)+l.y*r,u[g+2]=h.z*Math.sign(c.z)+l.z*r,d[g+0]=l.x,d[g+1]=l.y,d[g+2]=l.z,Math.floor(g/p)){case 0:v.set(1,0,0),f[y+0]=Pn(v,l,"z","y",r,n),f[y+1]=1-Pn(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),f[y+0]=1-Pn(v,l,"z","y",r,n),f[y+1]=1-Pn(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),f[y+0]=1-Pn(v,l,"x","z",r,e),f[y+1]=Pn(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),f[y+0]=1-Pn(v,l,"x","z",r,e),f[y+1]=1-Pn(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),f[y+0]=1-Pn(v,l,"x","y",r,e),f[y+1]=1-Pn(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),f[y+0]=Pn(v,l,"x","y",r,e),f[y+1]=1-Pn(v,l,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};var Ft={solar:{x:12,z:0,kind:"solar",label:"FIELD ARRAY"},beacon:{x:22,z:18,kind:"beacon",label:"COPPER FLATS"},layers:{x:45,z:15,kind:"rock",label:"LAYERED OUTCROP"},core:{x:49,z:-9,kind:"drill",label:"CORE SITE"},weather:{x:35,z:-39,kind:"weather",label:"ECHO CRATER"},rover:{x:21,z:-30,kind:"rover",label:"ROVER"},gate1:{x:42,z:-23,kind:"gate",label:"01 \xB7 CRATER RIM"},gate2:{x:59,z:0,kind:"gate",label:"02 \xB7 DUNE PASS"},gate3:{x:27,z:30,kind:"gate",label:"03 \xB7 COPPER FLATS"},cache:{x:2,z:34,kind:"crate",label:"SAMPLE CACHE"},ridge:{x:-30,z:34,kind:"weather",label:"WEATHER RIDGE"},relay:{x:-43,z:8,kind:"antenna",label:"RELAY STATION"},shelter:{x:-2.5,z:-6.3,kind:"door",label:"AIRLOCK"},filter:{x:200,z:-5.5,kind:"filter",label:"SPARE FILTER"},oxygen:{x:196,z:-5,kind:"machine",label:"OXYGEN"},waterValve:{x:204,z:-5,kind:"valve",label:"WATER RECOVERY"},plant1:{x:203.35,z:2.6,kind:"plant",label:"LETTUCE"},plant2:{x:204.05,z:2.6,kind:"plant",label:"RADISH"},plant3:{x:204.75,z:2.6,kind:"plant",label:"PEA"},lab:{x:200,z:-1,kind:"lab",label:"SAMPLE LAB"},exit:{x:200,z:7,kind:"door",label:"AIRLOCK"},summit:{x:-38,z:-38,kind:"antenna",label:"SIGNAL POINT"}};var wt=(s,e,t,n,i,r,o,a={})=>({id:s,chapter:e,target:t,kind:n,title:i,goal:i,action:r,guide:o,seconds:3,...a}),yh=[wt("dust-panel",0,"solar","clean","Brush the solar array","Hold to brush","Walk to the solar panel. {hold} to brush off the dust."),wt("aim-panel",0,"solar","align","Turn the panel toward the Sun","Use the panel","Turn the panel with {turn}. When the bar turns green, {hold}.",{angle:1.05,seconds:1.5}),wt("trail-beacon",1,"beacon","deploy","Mark the Copper Flats trail","Hold to deploy","Follow the arrow to Copper Flats. {hold} to set up a trail beacon."),wt("layers-photo",1,"layers","scan","Study the layered outcrop","Hold to scan","Find the striped rock. Face it, then {hold} to scan."),wt("core-drill",1,"core","drill","Drill a rock core","Hold to drill","Go to the drill. {hold} and watch it dig into the rock.",{seconds:4}),wt("crater-weather",1,"weather","deploy","Set up the crater station","Hold to deploy","Walk to Echo Crater. {hold} to set up the weather station."),wt("board-rover",2,"rover","board","Meet your exploration rover","Drive the rover","Find the rover and climb in. Time for a drive!"),wt("drive-rim",2,"gate1","drive","Drive through the crater gate","Drive through the gate","Drive between the two glowing posts."),wt("drive-dunes",2,"gate2","drive","Cross Dune Pass","Drive through the gate","Follow the arrow through the sand dunes."),wt("drive-flats",2,"gate3","drive","Cross Copper Flats","Drive through the gate","Drive the long loop back across Copper Flats."),wt("collect-cache",2,"cache","pickup","Recover the sample canister","Collect the canister","Park next to the box. Pick up the sample can."),wt("ridge-weather",3,"ridge","deploy","Deploy a storm lookout","Hold to deploy","Go west to Weather Ridge. {hold} to set up the storm sensor."),wt("relay-repair",3,"relay","repair","Repair the relay mast","Hold to repair","Dust is coming! {hold} to fix the radio mast.",{storm:!0}),wt("airlock-cycle",3,"shelter","enter","Return to the habitat","Hold to cycle airlock","Follow the lights home. {hold} to open the airlock.",{storm:!0,seconds:4}),wt("get-filter",4,"filter","pickup","Find a fresh air filter","Pick up the filter","Find the new air filter on the trolley. Pick it up."),wt("fit-filter",4,"oxygen","install","Fit the oxygen filter","Hold to fit filter","Carry the filter to the oxygen machine. {hold} to fit it."),wt("make-oxygen",4,"oxygen","process","Start the oxygen converter","Hold to power up","{hold} to switch on the machine. Watch the tank fill with oxygen!",{seconds:4}),wt("recover-water",4,"waterValve","align","Balance the water flow","Use the valve","Turn the valve with {turn}. When the bar turns green, {hold}.",{angle:-.75,seconds:3}),wt("water-lettuce",4,"plant1","water","Water the lettuce","Hold to water","Go to the first pot. {hold} to water the lettuce.",{seconds:2}),wt("water-radish",4,"plant2","water","Water the radish","Hold to water","Now the radish. {hold} to water it.",{seconds:2}),wt("water-pea",4,"plant3","water","Water the pea","Hold to water","Last one! {hold} to water the pea.",{seconds:2}),wt("study-core",5,"lab","scan","Examine the rock core","Hold to examine","Take your rock core to the lab table. Face it, then {hold} to scan."),wt("leave-home",5,"exit","exit","Head for Signal Point","Go outside","One last trip! Go to the door and step outside."),wt("earth-report",5,"summit","align","Send your discoveries home","Use the antenna","Climb to Signal Point. Turn the dish with {turn}. When the bar turns green, {hold} to call Earth!",{angle:1.45,seconds:3})],Rf=["solar","beacon","layers","core","weather","rover","gate1","gate2","gate3","cache","ridge","relay","shelter"],Rl=Rf.slice(1).map((s,e)=>{let t=Ft[Rf[e]],n=Ft[s];return{x:Math.round((t.x+n.x)*5)/10,z:Math.round((t.z+n.z)*5)/10}});function Cf(s,e){let t=new He;t.visible=!1,s.add(t);let n=new ni(1,1,1,2,.06),i=new pn(1,1,1,16),r={},o={},a=[];function c(F,O=!1){let N=F+O;return r[N]??=O?new yt({color:F,metalness:O?.05:.25,roughness:.55,emissive:O?F:0,emissiveIntensity:O?.8:0}):ti(new yt({color:F,metalness:O?.05:.25,roughness:.55,emissive:O?F:0,emissiveIntensity:O?.8:0}),"panel",{scale:2.4,dust:.5,low:.5})}function l(F,O,N,j,I,G,X,Q,V,k=!1){let te=new Qe(O,c(N,k));return te.position.set(j,I,G),te.scale.set(X,Q,V),te.castShadow=!0,te.receiveShadow=!0,F.add(te),te}let h=(F,O,N,j,I,G,X,Q,V=!1)=>l(F,n,O,N,j,I,G,X,Q,V),u=(F,O,N,j,I,G,X)=>l(F,i,O,N,j,I,G,X,G),d="#d6cbb7",f="#343b50",p="#da8753",v="#9debd4";function m(F,O,N=2.5){let j=document.createElement("canvas");j.width=512,j.height=80;let I=j.getContext("2d");I.fillStyle="#253645",I.fillRect(0,0,512,80),I.fillStyle="#e9f1d9",I.font="600 27px system-ui",I.textAlign="center",I.fillText(O,256,50);let G=new fn(j);G.colorSpace=gt;let X=new Qe(new sn(2.4,.375),new It({map:G}));X.position.set(0,N,.7),F.add(X)}function g(F,O,N,j=v){let I=new Qe(new Zn(O,.035,8,48),c(j,!0));return I.rotation.x=Math.PI/2,I.position.y=N,F.add(I),I}for(let[F,O]of Object.entries(Ft)){let N=new He;N.position.set(O.x,e(O.x,O.z),O.z),t.add(N);let j={group:N,parts:[],kind:O.kind};if(o[F]=j,O.kind==="solar"){u(N,f,0,.85,0,.16,1.7);let I=new He;I.position.y=1.55,N.add(I),j.pivot=I;let G=new He;G.rotation.x=-.7,I.add(G),h(G,d,0,0,0,3.5,.12,2.4);for(let Q=0;Q<7;Q++)for(let V=0;V<5;V++)h(G,"#233e64",(Q-3)*.47,.07,(V-2)*.45,.43,.025,.41);let X=h(G,"#b68562",0,.1,0,3.35,.015,2.25);X.material=c("#b68562").clone(),X.material.transparent=!0,j.dust=X,X.castShadow=!1,h(N,d,1.8,.6,1,.9,1.2,.5),h(N,f,1.8,.92,1.26,.62,.36,.03),h(N,v,1.8,.92,1.28,.5,.24,.02,!0),h(N,p,1.8,.38,1.26,.3,.1,.03),m(N,O.label,2.8),a.push({x:O.x,z:O.z,radius:.65})}else if(O.kind==="rock"||O.kind==="drill"){let I=new He;N.add(I);for(let G=0;G<7;G++){let X=l(I,new pn(1,.98,1,7),G%2?"#b88b6c":"#815b50",0,.12+G*.24,0,1.5-G*.07,.27,1.05-G*.025);X.rotation.y=.16+G*.025}if(j.stone=I,O.kind==="drill"){let G=new He;G.position.set(.55,2.2,.3),N.add(G),j.drill=G,h(G,p,0,0,0,.38,.55,.38),u(G,d,0,-.58,0,.065,.7);for(let X=0;X<6;X++){let Q=g(G,.105,-.3-X*.1,d);Q.rotation.z=.2}}a.push({x:O.x,z:O.z,radius:1.3})}else if(O.kind==="weather"||O.kind==="beacon"){let I=new He;N.add(I),j.instrument=I;for(let X=0;X<3;X++){let Q=u(I,d,Math.sin(X*2.094)*.4,.55,Math.cos(X*2.094)*.4,.035,1.3);Q.rotation.z=Math.cos(X*2.094)*.55,Q.rotation.x=Math.sin(X*2.094)*.55}u(I,d,0,1.4,0,.065,1.5),h(I,f,0,1.35,0,.55,.5,.4);let G=new He;G.position.y=2.25,I.add(G),j.rotor=G,h(G,d,0,0,0,1.1,.04,.04);for(let X of[-.5,.5])l(G,new Kt(.12,12,8),p,X,0,0,1,.5,1);g(I,.23,1.8),m(N,O.label,2.7),I.scale.y=.25}else if(O.kind==="antenna"){u(N,d,0,1,0,.15,2),h(N,f,0,.4,0,1.3,.8,1.2);let I=new He;I.position.y=2.1,N.add(I),j.pivot=I;let G=l(I,new Kt(1,24,12,0,Math.PI*2,0,.95),d,0,0,0,1.1,.4,1.1);G.rotation.x=Math.PI/2+.45;let X=u(I,p,0,.2,.6,.04,1.4);X.rotation.x=Math.PI/2,h(I,v,0,.2,1.2,.2,.18,.15,!0),m(N,O.label,3.5),a.push({x:O.x,z:O.z,radius:.8})}else if(O.kind==="gate"){for(let I of[-3,3])u(N,d,I,1.4,0,.07,2.8),h(N,v,I,2.5,0,.12,.65,.12,!0),h(N,p,I,.45,0,.3,.5,.3);m(N,O.label,3.2)}else if(O.kind==="crate"||O.kind==="filter"){h(N,f,0,.4,0,1.2,.8,.9),h(N,d,0,.84,0,1.25,.08,.95);let I=new He;I.position.y=1.15,N.add(I),j.item=I,u(I,p,0,0,0,.22,.5),g(I,.23,.15),g(I,.23,-.15),m(N,O.label,1.9)}else if(O.kind==="valve"){let I=new He;I.position.set(0,1.2,.7),N.add(I),j.pivot=I;let G=new Qe(new Zn(.35,.045,8,32),c(p));I.add(G),h(I,d,0,0,0,.65,.045,.045),h(I,d,0,0,0,.045,.65,.045),u(N,v,.7,1,.6,.1,1.8)}else if(O.kind==="machine"){let I=u(N,v,.9,.7,.65,.13,.8);j.tank=I;for(let G=0;G<5;G++)h(N,f,-.7,1.3+G*.09,.65,.35,.04,.07)}else if(O.kind==="lab"){h(N,d,0,.65,0,1.8,1.3,1),h(N,f,0,1.33,0,1.75,.08,1);let I=l(N,new yi(.25,1),"#a17e64",0,1.58,0,1.7,.6,1);j.stone=I;let G=h(N,p,-.5,1.8,-.3,.12,.9,.12);h(N,p,-.25,2.2,-.3,.6,.12,.12),m(N,O.label,2.65)}if(!["door","rover","gate"].includes(O.kind)){j.meter=new He,j.meter.position.set(0,.14,1.15),N.add(j.meter);for(let I=0;I<12;I++)j.parts.push(h(j.meter,f,(I-5.5)*.09,0,0,.065,.07,.08))}}let y=o.rover.group;o.rover.wheels=[],h(y,d,0,.9,0,1.7,.65,2.5),h(y,p,0,1.25,.6,1.5,.16,.85),h(y,f,0,1.3,-.55,1.4,.12,1.15);for(let F=0;F<5;F++)h(y,"#536988",(F-2)*.26,1.37,-.55,.23,.025,1.05);u(y,d,0,1.9,-.9,.075,1.1),h(y,f,0,2.45,-.9,.7,.28,.28);for(let F of[-.19,.19]){let O=u(y,"#a2daca",F,2.45,-1.07,.075,.08);O.rotation.x=Math.PI/2}for(let F of[-1,1])for(let O of[-.9,0,.9]){let N=u(y,f,F,.43,O,.42,.28);N.rotation.z=Math.PI/2,o.rover.wheels.push(N);for(let j=0;j<10;j++){let I=h(N,"#64636b",Math.sin(j*Math.PI/5)*.99,0,Math.cos(j*Math.PI/5)*.99,.12,1.1,.1);I.rotation.y=j*Math.PI/5}}let b=new He;t.add(b),u(b,p,0,0,0,.19,.45),g(b,.2,.15),b.visible=!1;let M=new He;t.add(M),g(M,1.8,.06);let w=u(M,v,0,2.9,0,.045,.65),T=new Qe(new zi(.8,2,24,1,!0),new It({color:v,transparent:!0,opacity:.17,depthWrite:!1,side:Ht}));t.add(T);let x=new He;t.add(x);for(let F=0;F<16;F++)l(x,new Kt(.035,6,4),"#b7edff",0,0,0,1,1,1,!0);let _=h(t,p,0,0,0,.7,.13,.22);_.visible=!1;let P=new He;t.add(P);let R=new zi(.12,.4,3),U=[[-2,-5],[3,5],[15,14],[27,20],[40,16],[49,4],[47,-11],[36,-31],[24,-31],[-16,16],[-29,27],[-40,15],[-30,-7],[-33,-23]];for(let[F,O]of U)u(P,f,F,e(F,O)+.38,O,.035,.7),l(P,R,v,F,e(F,O)+.8,O,1,1,1,!0);s.updateMatrixWorld(!0);for(let F of Object.values(o)){let O=new Set([F.pivot,F.instrument,F.drill,F.meter,F.item,F.dust,F.tank,...F.wheels||[]].filter(Boolean)),N=new Map,j=F.group.matrixWorld.clone().invert();F.group.traverse(I=>{if(!I.isMesh||I.material.map)return;for(let X=I;X&&X!==F.group;X=X.parent)if(O.has(X))return;let G=N.get(I.material)||[];G.push(I),N.set(I.material,G)});for(let[I,G]of N){if(G.length<2)continue;let X=G.map(k=>{let te=k.geometry.index?k.geometry.toNonIndexed():k.geometry.clone();return te.applyMatrix4(j.clone().multiply(k.matrixWorld)),te}),Q=bf(X);if(X.forEach(k=>k.dispose()),!Q)continue;let V=new Qe(Q,I);V.castShadow=!0,V.receiveShadow=!0,F.group.add(V),G.forEach(k=>k.removeFromParent())}}let H=new to(.44),J=new yt({color:"#bff5e6",emissive:"#7fe6cf",emissiveIntensity:1.1,roughness:.2,metalness:.1}),L=Rl.map(F=>{let O=new Qe(H,J);return O.position.set(F.x,e(F.x,F.z)+1.1,F.z),O.scale.set(1,1.5,1),t.add(O),O});return{root:t,blockers:a,rover:y,update({mission:F,completed:O,progress:N,angle:j,quality:I,working:G,carrying:X,driving:Q,state:V,heading:k,speed:te,time:ce,gems:_e=[]}){t.visible=!0,L.forEach((we,Ne)=>{we.visible=!_e.includes(Ne)&&V.x<150,we.visible&&(we.rotation.y=ce*1.6+Ne,we.position.y=e(Rl[Ne].x,Rl[Ne].z)+1.1+Math.sin(ce*2+Ne)*.14)});let ae=F&&Ft[F.target];M.visible=!!ae,T.visible=!1,x.visible=!1,_.visible=!1,ae&&(M.position.set(ae.x,e(ae.x,ae.z),ae.z),M.rotation.y=ce*.12,w.position.y=2.9+Math.sin(ce*2)*.12);for(let[we,Ne]of Object.entries(o)){let Me=Ft[we],Oe=F?.target===we;Ne.group.visible=Me.x>150==V.x>150;let Ge=O.some(ie=>ie==={solar:"aim-panel",beacon:"trail-beacon",weather:"crater-weather",ridge:"ridge-weather",relay:"relay-repair",core:"core-drill",oxygen:"make-oxygen",summit:"earth-report"}[we]);Ne.instrument&&(Ne.instrument.scale.y=Ge?1:Oe&&G?.25+.75*N:.25),Ne.rotor&&(Ne.rotor.rotation.y=ce*2),Ne.pivot&&(Ne.pivot.rotation[we==="waterValve"?"z":"y"]=Oe?j:Ge?1.05:0),Ne.dust&&(Ne.dust.material.opacity=O.includes("dust-panel")?0:Oe?1-N:1),Ne.drill&&(Ne.drill.position.y=2.2-(Oe?N:Ge?1:0)*.6,Ne.drill.rotation.y=G&&Oe?ce*18:0),Ne.item&&(Ne.item.visible=!O.includes(we==="filter"?"get-filter":"collect-cache")),Ne.tank&&(Ne.tank.scale.y=.1+.7*(Ge?1:Oe?N:0)),Ne.parts.forEach((ie,ue)=>ie.material=c(ue/12<(Oe?F.kind==="align"?I:N:Ge?1:0)?v:f,!0)),Oe&&G&&(["scan","drill","process","repair","install"].includes(F.kind)&&(T.visible=!0,T.position.set(Me.x,e(Me.x,Me.z)+2.15,Me.z),T.rotation.z=Math.PI,T.rotation.y=ce*2,T.scale.setScalar(.8+Math.sin(ce*3)*.1)),F.kind==="clean"&&(_.visible=!0,_.position.set(Me.x+Math.sin(ce*5)*1.3,e(Me.x,Me.z)+1.8,Me.z+.4),_.rotation.y=j),F.kind==="water"&&(x.visible=!0,x.position.set(Me.x,1.6,Me.z-.3),x.children.forEach((ie,ue)=>ie.position.set(Math.sin(ue*2)*.15,.6-(ce*1.2+ue*.05)%.7,Math.cos(ue*3)*.15))))}Q&&(y.position.set(V.x,e(V.x,V.z),V.z),y.rotation.y=k,o.rover.wheels.forEach(we=>we.rotation.y+=te*.02)),b.visible=!!X&&V.x<150,b.visible&&b.position.set(V.x-Math.cos(V.yaw)*.65,e(V.x,V.z)+1.15,V.z-Math.sin(V.yaw)*.65),X&&V.x>150&&(b.visible=!0,b.position.set(V.x-.65,1.1,V.z))}}}function If(s){let e=0,t=0,n=0,i=!1,r=!1;return{step({dt:o,near:a,facing:c=!0,held:l=!1,turn:h=0,pulse:u=!1,driving:d=!1}){if(o=Math.max(0,Math.min(.1,Number.isFinite(o)?o:0)),i=!1,!(r||!s)){if(a&&(t=Math.max(-Math.PI,Math.min(Math.PI,t+h*o*1.15))),a&&!h&&s.kind==="align"&&Math.abs(t-s.angle)<.11&&(t=s.angle),n=s.kind==="align"?Math.max(0,1-Math.abs(t-s.angle)/1.5):1,s.kind==="drive"){a&&d&&(e=1,r=!0);return}if(["board","pickup","exit"].includes(s.kind)){a&&(u||l)&&(e=1,r=!0);return}i=a&&l&&(s.kind!=="scan"||c)&&(s.kind!=="align"||n>=.96),i&&(e=Math.min(1,e+o/s.seconds)),r=e>=1}},get status(){return{progress:e,angle:t,quality:n,working:i,finished:r}}}}var Cl={air:{x:196,z:-5},water:{x:204,z:-5},garden:{x:204,z:2},radio:{x:196,z:2},exit:{x:200,z:7},rover:{x:-7,z:5}};function Pf(s){let e=new ni(1,1,1,2,.08),t=new He;t.position.x=200,s.add(t);let n={},i=(f,p,v,m,g,y,b,M)=>{n[p]??=ti(new yt({color:p,roughness:.6,metalness:.12}),"panel",{scale:1.2,dust:0,low:0});let w=new Qe(e,n[p]);return w.position.set(v,m,g),w.scale.set(y,b,M),w.receiveShadow=!0,w.castShadow=!0,f.add(w),w};i(t,"#566473",0,-.16,0,13,.3,18),i(t,"#c4c4c7",0,1.08,-8.8,13,2.16,.28),i(t,"#c4c4c7",0,4.6,-8.8,13,1.3,.28);for(let f of[-6,-2,2,6])i(t,"#c4c4c7",f,3,-8.8,1.4,1.9,.28);i(t,"#777d8c",0,5.25,0,13,.25,18),i(t,"#b6b3bb",0,2.6,8.8,13,5.2,.25),i(t,"#46536a",0,1.65,8.6,2.5,3.3,.15),i(t,"#b6b3bb",-6.4,2.6,0,.25,5.2,18),i(t,"#b6b3bb",6.4,2.6,0,.25,5.2,18);for(let f=-8;f<9;f+=2)i(t,"#788893",0,.008,f,12,.018,.045),i(t,"#45465d",-6.15,2.5,f,.18,5,.16),i(t,"#45465d",6.15,2.5,f,.18,5,.16);for(let f of[-4,0,4]){for(let v of[-1,1])i(t,"#404557",f+v*1.3,3,-8.59,.15,1.9,.22),i(t,"#404557",f,3+v*.9,-8.59,2.7,.15,.22);let p=i(t,"#b6d7db",f,3,-8.5,2.45,1.65,.02);p.material=new yt({color:"#b6d7db",transparent:!0,opacity:.09,roughness:.15,depthWrite:!1})}let r=new cs("#f2e5db","#6c788e",1.25);t.add(r);let o=new Ei("#fff1d9",1.9);o.position.set(202,4.8,3),o.target.position.set(199,0,-2),o.castShadow=!0,o.shadow.mapSize.setScalar(1024),Object.assign(o.shadow.camera,{left:-9,right:9,top:12,bottom:-12,near:.2,far:24}),o.shadow.normalBias=.04,s.add(o,o.target);let a=new He;t.add(a);let c=i(a,"#ba8c7e",0,8,-43,80,32,.2);c.material=new It({color:"#ba8c7e",fog:!1}),i(a,"#a57460",0,-.15,-24,70,.2,34);for(let f=0;f<10;f++){let p=new Qe(new zi(5+f%3,5+f%4,7),new It({color:f%2?"#a4776a":"#9b7169",fog:!1}));p.position.set(-32+f*7,1.8,-32-f%3*3),p.scale.z=1.7,a.add(p)}for(let f of[-5.9,5.9]){let p=i(t,"#f3e3bb",f,4.6,0,.12,.12,16);p.material=new yt({color:"#fff0d2",emissive:"#ffe6bd",emissiveIntensity:1.4})}for(let f of[-5.8,5.8]){for(let p=0;p<3;p++)i(t,["#9ab9bc","#bda178","#718293"][p],f,3.6+p*.23,0,.1,.1,16);for(let p=-6;p<8;p+=3)i(t,"#535e72",f,3.9,p,.2,.8,.14)}for(let f=-6;f<8;f+=4){i(t,"#485568",0,5,f,11.5,.16,.4);let p=i(t,"#e5eee4",0,4.9,f,2.6,.08,.45);p.material=new yt({color:"#dcefe6",emissive:"#dcefe6",emissiveIntensity:1})}for(let f of[-2.8,2.8])i(t,"#737e8c",f,.5,-7.7,1.3,1,1),i(t,"#c3b6a0",f,1.05,-7.7,1.35,.1,1.05),i(t,"#e39e62",f,.6,-7.16,.8,.15,.04);let l=[],h=[];for(let[f,p]of Object.entries(Cl)){if(f==="rover"||f==="exit")continue;let v=new He;v.position.set(p.x-200,0,p.z),t.add(v),i(v,"#ece0cb",0,.65,0,2.1,1.3,1.1),i(v,"#44475f",0,1.55,0,1.8,.65,.18);let m=i(v,f==="air"?"#80bebc":f==="water"?"#7aabe0":f==="garden"?"#adc986":"#d5abdf",0,1.55,.11,1.54,.43,.04);if(h.push(m),f==="garden")for(let w=0;w<3;w++){let T=new He;T.position.set((w-1)*.62,1.3,.32),v.add(T),i(T,"#98624c",0,.1,0,.43,.2,.42),i(T,"#5f885d",0,.4,0,.035,.6,.035);for(let x=0;x<4;x++){let _=new Qe(new Kt(1,12,8),new yt({color:"#81ae69"}));_.scale.set(.19,.045,.09),_.position.set((x%2?1:-1)*.13,.3+x*.09,0),_.rotation.z=(x%2?1:-1)*.4,T.add(_),l.push(_)}}else for(let w of[-1,1]){let T=i(v,f==="water"?"#70aee0":f==="air"?"#91d6c5":"#c9a0df",w*.52,.77,.58,.22,.65,.05);T.material=new yt({color:T.material.color,emissive:T.material.color,emissiveIntensity:.18}),i(v,"#44475f",w*.52,.35,.6,.34,.12,.07);let x=new Qe(new pn(.22,.22,.7,18),n["#ece0cb"]);x.position.set(w*.6,1.55,-.35),v.add(x)}let g=document.createElement("canvas");g.width=256,g.height=64;let y=g.getContext("2d");y.fillStyle="#272d41",y.fillRect(0,0,256,64),y.fillStyle="#fff0db",y.font="bold 31px system-ui",y.textAlign="center",y.fillText({air:"OXYGEN",water:"WATER",garden:"GARDEN",radio:"RADIO"}[f],128,44);let b=new fn(g);b.colorSpace=gt;let M=new Qe(new sn(1.7,.425),new It({map:b}));M.position.set(0,2.15,0),v.add(M)}let u=new He;u.position.set(-7,0,5),s.add(u),i(u,"#e5ceb2",0,.65,0,1.6,.55,2),i(u,"#4a5166",0,.97,0,1.35,.08,1.75),i(u,"#d19b69",0,1.4,-.5,.13,.8,.13),i(u,"#65677a",0,1.79,-.5,.6,.25,.3);let d=[];for(let f of[-.9,.9])for(let p of[-.7,.7]){let v=new Qe(new pn(.38,.38,.26,16),n["#44475f"]);v.rotation.z=Math.PI/2,v.position.set(f,.35,p),u.add(v),d.push(v)}return{room:t,animate(f,p,v,m,g=!1){u.visible=!g,r.visible=p,o.visible=p,t.visible=p;for(let y=0;y<l.length;y++){let b=v.includes("garden")||v.includes(["water-lettuce","water-radish","water-pea"][Math.floor(y/4)]);l[y].rotation.z=Gt.lerp(l[y].rotation.z,(y%2?1:-1)*(b?.6:-.1),.035)+Math.sin(f*2+y)*.001}for(let y of h)y.material.emissive.set("#22343c");u.position.y=m(u.position.x,u.position.z),v.includes("rover")&&(u.position.x=-7+Math.sin(f*.3)*2,u.rotation.y=Math.cos(f*.3)*.2,d.forEach(y=>y.rotation.x=f*2))}}}var So=new D(-.72,.37,-.48).normalize(),ii=Math.PI*2,Pl=Gt.lerp;function fr(s){return()=>(s=Math.imul(1664525,s)+1013904223|0,(s>>>0)/4294967296)}function Il(s,e,t){let n=Math.imul(s,1402946737)^Math.imul(e,1597334677)^t;return n=Math.imul(n^n>>>16,2146121005),((n^n>>>15)>>>0)/4294967295}function Ai(s,e,t){let n=Math.floor(s),i=Math.floor(e),r=s-n,o=e-i,a=r*r*(3-2*r),c=o*o*(3-2*o);return Pl(Pl(Il(n,i,t),Il(n+1,i,t),a),Pl(Il(n,i+1,t),Il(n+1,i+1,t),a),c)}function Nf(s){return(e,t)=>{let n=2.6*(Ai(e/25,t/25,s)-.5)+1.5*(Ai(e/9,t/9,s+2)-.5)+.31*(Ai(e/2.8,t/2.8,s+4)-.5),i=Gt.smoothstep(Math.hypot(e*.8,(t+6)*.55),8,19),r=Math.hypot(e-37,t+25),o=1.05*Math.exp(-((r-13)**2)/6)-2.2*Math.exp(-(r**2)/95),c=Math.exp(-((e-53)**2+(t-11)**2)/500)*(.75+.7*Math.sin(e*.65+t*.24));return Pl(n*.18,n+o+c,i)}}function Iy(s){let t=document.createElement("canvas");t.width=t.height=384;let n=t.getContext("2d"),i=n.createImageData(384,384),r=fr(17082);for(let a=0;a<384;a++)for(let c=0;c<384;c++){let l=c/384*ii,h=a/384*ii,u=Math.sin(l*2+1.3*Math.sin(h))*Math.sin(h*3+l),d=Math.sin(l*3+h*17+1.9*Math.sin(l*2+h)+.5*Math.sin(h*3)),f=205+u*12+d*9+r()*33,p=(c+a*384)*4;i.data.set([f,f-5,f-10,255],p)}n.putImageData(i,0,0);for(let a=0;a<2300;a++){let c=r()*384,l=r()*384,h=.25+r()**5*2.6,u=Math.round(105+r()*81);n.fillStyle="rgb("+u+","+(u-5)+","+(u-8)+")",n.beginPath(),n.ellipse(c,l,h*1.4,h*.7,r()*ii,0,ii),n.fill()}let o=new fn(t);return o.colorSpace=gt,o.wrapS=o.wrapT=Rn,o.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy()),o}function Lf(s,e,t,n,i,r){let o=new sn(n,n,i,i).rotateX(-Math.PI/2),a=o.attributes.position,c=o.attributes.uv,l=[],h=new Ce("#754842"),u=new Ce("#c38361"),d=new Ce("#a7735b"),f=new Ce("#7b605b"),p=new Ce;for(let y=0;y<a.count;y++){let b=a.getX(y),M=a.getZ(y);a.setY(y,e(b,M)-(r?0:.28)),r&&c.setXY(y,b/3.8,M/3.8);let w=.72*Ai(b/9,M/9,t+6)+.28*Ai(b/1.4,M/1.4,t+7),T=Gt.smoothstep(Ai(b/15,M/15,t+9),.57,.87),x=Math.exp(-((b+.09*(M-12)+Math.sin(M*.2)*.4)**2)/5)*(1-Gt.smoothstep(Math.abs(M+1),15,26));p.copy(h).lerp(u,w).lerp(f,T*.64).lerp(d,x*.7),l.push(p.r,p.g,p.b)}o.setAttribute("color",new lt(l,3)),o.computeVertexNormals();let v=r&&!Xt.enabled?Iy(s):null,m=new yt({vertexColors:!0,roughness:.95,map:v,bumpMap:v,bumpScale:.065});ti(m,"regolith",r?{scale:2.5,dust:0,low:0,rough:.9,normal:1.1,terrain:{rock:"rock",rockScale:3}}:{scale:9,dust:0,low:0,planar:!0,normal:.7});let g=new Qe(o,m);return g.receiveShadow=r,g}function Py(s,e,t,n,i,r,o,a){let c=fr(r),l=64,h=[],u=[],d=[],f=o(s,e)-2,p=[0,.1,.25,.38,.46,.58,.64,.76,.86,.89,.96,1,1.01],v=[1.38,1.16,.95,.78,.7,.64,.65,.57,.56,.52,.47,.43,.06],m=["#795651","#926557","#ac7660","#875751","#b9846c","#986657","#b68169","#90685f","#b98167","#82564d","#b58371","#9c7266","#a67962"],g=["#756073","#806877","#8c7180","#937581","#a18189"],y=c()*ii,b=Array.from({length:l},(T,x)=>{let _=x/l*ii;return .88+Math.sin(_*5+y)*.08+Math.sin(_*11)*.052+c()*.065}),M=Array.from({length:l},(T,x)=>{let _=x/l*ii;return .83+Math.sin(_*2-y)*.12+Math.cos(_*7+y)*.05+c()*.04});for(let T=0;T<p.length;T++)for(let x=0;x<l;x++){let _=x/l*ii,P=v[T]*b[x]*(1+Math.sin(_*3+y)*.2+Math.sin(_*7)*.09);h.push(s+Math.sin(_)*P*t+T*t*.019,f+i*p[T]*(M[x]+Math.cos(_*3+y)*.14),e+Math.cos(_)*P*n+T*n*.015);let R=new Ce(a?g[Math.min(4,Math.floor(T*5/p.length))]:m[T]);if(R.multiplyScalar(.92+Ai(x/5,T/2,r)*.17),u.push(R.r,R.g,R.b),T){let U=(T-1)*l+x,H=(T-1)*l+(x+1)%l;d.push(U,H,U+l,H,H+l,U+l)}}let w=new Tt;return w.setAttribute("position",new lt(h,3)),w.setAttribute("color",new lt(u,3)),w.setIndex(d),w.computeVertexNormals(),new Qe(w,Xt.enabled?ti(new yt({vertexColors:!0,roughness:1,side:Ht}),"rock",{scale:6,dust:.9,low:0,normal:1.5}):new yt({vertexColors:!0,roughness:1,side:Ht}))}function Ly(s){let e=fr(s),t=new yi(1,1),n=t.attributes.position,i=[],r=new Ce;for(let o=0;o<n.count;o++){let a=n.getX(o),c=n.getY(o),l=n.getZ(o),h=.74+.45*Ai(a*4+c*6,l*4-c*2,s);n.setXYZ(o,a*h+c*.13,Math.max(c*h,-.44),l*h),r.setScalar(.73+.32*Ai(a*2+l,c*6,s+2)+e()*.1),i.push(r.r,r.g,r.b)}return t.setAttribute("color",new lt(i,3)),t.computeVertexNormals(),t}function Df(s,e,t,n,i){s.add(Lf(e,t,n,320,138,!1)),s.add(Lf(e,t,n,156,190,!0));let r=fr(n+47489),o=[];for(let h=0;h<24;h++){let u=h<13,d=h/(u?13:11)*ii+(u?0:.44)+r()*.18,f=u?114+r()*41:100+r()*22;s.add(Py(Math.sin(d)*f,Math.cos(d)*f,14+r()*24,7+r()*15,(u?13:5.5)+r()*(u?18:12),n+h*321,t,u))}let a=["#814e3f","#a5755d","#765850","#be8b71","#68504d","#9d6552"].map(h=>new Ce(h)),c=Xt.enabled?ti(new yt({color:"#ffffff",roughness:.9}),"rock",{scale:1.4,dust:.85,low:.6,normal:1.2}):new yt({vertexColors:!0,flatShading:!0,roughness:.97});Xt.enabled&&a.forEach(h=>h.lerp(new Ce("#ffffff"),.6));let l=new vt;for(let h=0;h<5;h++){let u=new xi(Xt.enabled?wf(n+h*163,h===0?3:2):Ly(n+h*163),c,300),d=0;for(let f=0;f<340&&d<300;f++){let p=(r()-.5)*132,v=(r()-.5)*132,m=.06+r()**4*(h===0?2.2:1.05);if(i.some(y=>Math.abs(p-y.x)<y.w+m&&Math.abs(v-y.z)<y.d+m))continue;let g=m*(.31+r()*.68);l.position.set(p,t(p,v)+g*.24,v),l.rotation.set(r()*.48,r()*ii,r()*.35),l.scale.set(m*(.9+r()*.44),g,m),l.updateMatrix(),u.setMatrixAt(d,l.matrix),u.setColorAt(d,a[Math.floor(r()*a.length)]),m>.75&&o.push({x:p,z:v,radius:m*.8}),d++}u.count=d,u.receiveShadow=!0,u.castShadow=h===0,s.add(u)}return o}function Uf(s){let e=new Kt(228,36,21),t=new Jt({side:kt,depthWrite:!1,uniforms:{sunDirection:{value:So},stormAmount:{value:0}},vertexShader:`
      varying vec3 direction;
      void main() {
        direction = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec3 direction;
      uniform vec3 sunDirection;
      uniform float stormAmount;
      void main() {
        vec3 ray = normalize(direction);
        float up = max(0.0, ray.y);
        float towardSun = max(0.0, dot(ray, sunDirection));
        vec3 horizon = mix(vec3(0.55, 0.31, 0.23), vec3(0.32, 0.15, 0.10), stormAmount);
        vec3 high = mix(vec3(0.22, 0.19, 0.30), vec3(0.23, 0.10, 0.09), stormAmount);
        vec3 color = mix(horizon, high, pow(smoothstep(0.0, 0.67, up), 0.76));
        float layer = sin(ray.y * 132.0 + sin(ray.x * 7.0) * 1.6) *
            exp(-pow((ray.y-0.15)*8.0, 2.0));
        color += vec3(0.095, 0.047, 0.027) * layer * 0.24;
        float glow = pow(towardSun, 42.0) * (1.0 - 0.83 * stormAmount);
        float disc = smoothstep(0.99972, 0.99987, towardSun) * (1.0 - stormAmount);
        color += vec3(0.73, 0.42, 0.23) * glow + vec3(1.15, 0.84, 0.60) * disc;
        gl_FragColor = vec4(color, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),n=new Qe(e,t);return n.frustumCulled=!1,n.renderOrder=-5,s.add(n),n}var Ny=new Kt(1,24,16),Dy=new ni(1,1,1,3,.18),Uy=new pn(1,1,1,20),Ri=(s,e=.73,t=.02)=>new yt({color:s,roughness:e,metalness:t});function bo(s,e,t,n,i,r,o,a,c){let l=new Qe(e,t);return l.position.set(n,i,r),l.scale.set(o,a,c),l.castShadow=!0,s.add(l),l}function Fy(){let s=new js;s.moveTo(-.175,0),s.quadraticCurveTo(-.175,.16,-.105,.31),s.quadraticCurveTo(-.092,.35,-.047,.304),s.quadraticCurveTo(.1,.16,.174,0),s.lineTo(-.175,0);let e=new eo(s,{depth:.06,bevelEnabled:!0,bevelThickness:.032,bevelSize:.035,bevelSegments:3,steps:1});return e.translate(0,0,-.03),e}var Ff=Fy();function Of(s,e={}){let t=new He,n=new He;t.add(n),s.add(t);let i=Xt.enabled,r=dr(Ri(e.suit??"#e9dcd1",.88),"cloth",7,.55),o=dr(Ri("#a99aa5",.85),"cloth",7,.55),a=dr(Ri(e.pack??"#3e3d58",.6,i?.25:.02),"panel",2,.4),c=dr(Ri(e.trim??"#e79459",.8),"cloth",7,.5),l=Ri(i?"#9ea2ab":"#737684",i?.28:.38,i?.85:.25),h=V=>i?dr(new Ut({color:V,roughness:.82,sheen:1,sheenRoughness:.5,sheenColor:new Ce(V).lerp(new Ce("#ffffff"),.35)}),"fur",5,.45):Ri(V),u=h(e.fur??"#d9a376"),d=h(e.cream??"#fae0bc"),f=Ri(e.inner??"#d88685",.7),p=i?new Ut({color:"#1d1820",roughness:.15,clearcoat:1,clearcoatRoughness:.05}):Ri("#302735"),v=Ri(e.nose??"#302735",.45),m=h(e.stripe??"#9d6549"),g=new yt({color:"#7ac2c2",emissive:"#3a8885",emissiveIntensity:.42}),y=(V,k,...te)=>bo(V,Ny,k,...te),b=(V,k,...te)=>bo(V,Dy,k,...te),M=(V,k,...te)=>bo(V,Uy,k,...te);y(n,r,0,.99,0,.35,.44,.229),b(n,a,0,.73,0,.58,.13,.43),b(n,c,0,.74,.23,.11,.095,.055),M(n,o,0,1.31,0,.285,.1,.25),M(n,a,0,1.35,0,.254,.046,.227);let w=new He;w.position.set(0,1.04,.225),n.add(w),b(w,a,0,0,0,.57,.59,.25),b(w,r,0,.005,.134,.43,.48,.13),b(w,l,0,-.15,.2,.27,.107,.045);for(let V of[-1,1])M(w,r,V*.255,-.016,.125,.08,.385,.08),M(w,c,V*.255,.07,.125,.082,.05,.082),b(w,a,V*.113,-.154,.228,.045,.026,.01);b(w,g,.048,-.154,.228,.057,.024,.01),y(w,c,0,.045,.208,.055,.041,.009);for(let[V,k]of[[-.06,.089],[-.022,.115],[.022,.115],[.06,.089]])y(w,c,V,k,.208,.016,.021,.009);let T=new He;T.position.set(0,1.68,-.024),n.add(T),y(T,u,0,0,0,.334,.287,.282),y(T,d,0,-.074,-.11,.29,.19,.205);let x=[],_=[];for(let V of[-1,1]){let k=bo(T,Ff,u,V*.2,.145,.013,V,1.02,1.25);k.rotation.z=V*-.25;let te=bo(T,Ff,f,V*.2,.173,-.036,V*.65,.74,.27);te.rotation.z=k.rotation.z,x.push({ear:k,lining:te,side:V}),_.push(y(T,p,V*.11,-.018,-.277,.037,.055,.019));let ce=y(T,m,V*.115,.072,.255,.035,.119,.03);ce.rotation.z=V*-.35,y(T,m,V*.258,.003,.166,.044,.046,.025)}y(T,m,0,.117,.258,.032,.089,.03),y(T,v,0,-.1,-.304,.04,.027,.021);let P=new He;P.position.set(0,1.66,0),n.add(P);let R=new Qe(new Zn(.343,.039,10,36),l);R.rotation.x=Math.PI/2,R.scale.set(1,.87,1),R.position.y=-.249,P.add(R);for(let V of[-1,1])y(P,a,V*.351,-.035,.005,.07,.115,.104),y(P,r,V*.388,-.035,.005,.046,.084,.078),y(P,c,V*.417,-.035,.005,.025,.045,.041);let U=i?new Ut({color:"#e8d2a6",metalness:.65,roughness:.05,transparent:!0,opacity:.3,depthWrite:!1,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.8}):new Jt({transparent:!0,depthWrite:!1,vertexShader:`
      varying vec3 viewNormal;
      varying vec3 eye;
      void main() {
        vec4 point = modelViewMatrix * vec4(position, 1.0);
        eye = normalize(-point.xyz);
        viewNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * point;
      }`,fragmentShader:`
      varying vec3 viewNormal;
      varying vec3 eye;
      void main() {
        vec3 n = normalize(viewNormal);
        float edge = pow(1.0 - max(dot(n, normalize(eye)), 0.0), 3.1);
        float reflection = pow(max(dot(n, normalize(vec3(-0.62,0.86,0.38))), 0.0), 19.0);
        gl_FragColor = vec4(mix(vec3(0.47,0.69,0.94),vec3(1.0,0.85,0.67),reflection),
          0.035 + edge * 0.57 + reflection * 0.21);
        #include <colorspace_fragment>
      }`}),H=y(P,U,0,.067,-.025,.408,.477,.371);H.castShadow=!1,H.renderOrder=4;let J=[],L=[];for(let V of[-1,1]){let k=new He,te=new He;k.position.set(V*.34,1.21,.005),k.rotation.z=V*.16,te.position.set(V*.051,-.258,0),y(k,r,V*.029,-.1,0,.126,.223,.137),y(k,c,V*.084,-.056,.005,.079,.09,.086),y(te,a,0,.01,0,.09,.08,.093),y(te,r,0,-.087,-.009,.104,.142,.112),M(te,c,0,-.172,0,.094,.046,.093),y(te,a,0,-.226,-.01,.096,.11,.102),y(te,a,-V*.065,-.205,-.039,.052,.072,.058),k.add(te),n.add(k),J.push({arm:k,elbow:te});let ce=new He,_e=new He;ce.position.set(V*.16,.73,0),_e.position.set(0,-.305,0),y(ce,r,0,-.125,0,.142,.229,.145),y(_e,o,0,.017,-.05,.131,.096,.127),y(_e,r,0,-.132,0,.12,.168,.12),M(_e,c,0,-.232,0,.125,.053,.117),b(_e,a,0,-.356,-.065,.294,.111,.414),b(_e,r,0,-.298,-.072,.273,.128,.37),ce.add(_e),n.add(ce),L.push({leg:ce,shin:_e})}let F=[],O=new He;O.position.set(0,.74,.25),n.add(O);for(let V=0;V<6;V++){let k=.075-V*.008;y(O,V===0?r:V===5?d:u,0,0,.07,k,k,.1),F.push(O);let te=new He;te.position.set(0,0,.13),O.add(te),O=te}let N=0,j=0,I=0,G=2.5,X=4,Q={value:1};return{rig:t,head:T,helmet:P,materials:{suit:r,trim:c,indigo:a,fur:u,cream:d,stripe:m,innerEar:f,nose:v},setHelmet(V){P.visible=V},cheer(){I=1},animate(V,k,te,ce,_e){I=Math.max(0,I-V/1.1),G-=V;let ae=!_e&&G<.12;G<0&&(G=2.2+Math.random()*3.5);for(let le of _)le.scale.y=ae?.008:.055;X-=V,X<0&&(X=3+Math.random()*5,Q.value=Math.random()<.5?-1:1);let we=!_e&&X>0&&X<.25?Math.sin(X/.25*Math.PI)*.35:0;for(let{ear:le,lining:Se,side:me}of x){let We=me*-.25+(me===Q.value?we*me:0);le.rotation.z=We,Se.rotation.z=We}let Ne=_e?0:Math.abs(Math.sin(I*Math.PI*2))*I,Me=Gt.clamp(k/2.5,0,1);N+=k*V*4.7,j+=V;let Oe=Math.sin(N)*Me,Ge=(1-Math.cos(N*2))*Me,ie=ce>0?Math.sin(Math.PI*ce):0;n.position.y=te+Ne*.5+(_e?0:Ge*.043+Math.sin(j*2.7)*.012),n.rotation.z=_e?0:Oe*.048,n.rotation.x=Me*-.06+ie*-.15,T.rotation.y=_e?0:Math.sin(N*.37)*Me*.12+Math.sin(j*.81)*(1-Me)*.09,T.rotation.x=ie*.13;let ue=_e?0:Math.sin(j*(2.2+I*6))*(.18+I*.3+Me*.1);F.forEach((le,Se)=>{le.rotation.y=ue*(.4+Se*.12)+Math.sin(j*1.3+Se)*.04,le.rotation.x=Se===0?-.6:-.12-Me*.05});for(let le=0;le<2;le++){let Se=N+Math.PI*le,me=Math.sin(Se)*Me;L[le].leg.rotation.x=me*.63,L[le].shin.rotation.x=Math.max(0,Math.cos(Se))*Me*.69,J[le].arm.rotation.x=-me*.5-(le===1?ie*.76:0)-(Ne>0?2.4*Math.min(1,I*3):0),J[le].elbow.rotation.x=-.2-Math.max(0,me)*.34-(le===1?ie*.38:0)}}}}var vh={mishti:{name:"Mishti",ear:"#e2a982",face:"#efbb95",inner:"#ba8183",suit:"#b6a3e6"},megh:{name:"Megh",ear:"#efe3d2",face:"#fbf4ea",inner:"#e3a9a4",suit:"#f2b36b"},neel:{name:"Neel",ear:"#7f93b8",face:"#aebbd6",inner:"#d7a3ad",suit:"#5fb0e8"},tara:{name:"Tara",ear:"#6f5763",face:"#8f727c",inner:"#c98f96",suit:"#f09ab0"}},Oy="astro-kitty-avatar";function zf(s=globalThis.localStorage){try{let e=s?.getItem(Oy);return Object.hasOwn(vh,e??"")?e:"mishti"}catch{return"mishti"}}var Bf=(s,e)=>{let t=parseInt(s.slice(1),16);return"#"+[t>>16&255,t>>8&255,t&255].map(i=>Math.max(0,Math.min(255,Math.round(i*e)))).map(i=>i.toString(16).padStart(2,"0")).join("")};function kf(s){let e=vh[s]??vh.mishti;return{name:e.name,fur:e.ear,cream:e.face,inner:e.inner,stripe:Bf(e.ear,.72),nose:Bf(e.inner,.85),trim:e.suit}}function Hf(s){let e=new Map,t=new Map,n=s.clone();return Gf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Gf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Gf(s.children[n],e.children[n],t)}var Ll=class extends Jn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ah(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Nl(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Nl(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ti.extractUrlBase(e);o=Ti.resolveURL(l,this.path)}else o=Ti.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new er(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Yf){try{o[ot.KHR_BINARY_GLTF]=new Gh(e)}catch(u){i&&i(u);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Kh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:o[u]=new Th;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[u]=new Vh(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[u]=new Wh;break;case ot.KHR_MESH_QUANTIZATION:o[u]=new Xh;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function By(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Pt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Eh=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ce(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],cn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ei(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new oo(h),l.distance=u;break;case"spot":l=new ro(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),si(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Th=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return It}extendParams(e,t,n){let i=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],cn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,gt))}return Promise.all(i)}},wh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ah=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ge(r,r)}return Promise.all(i)}},Rh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},Ch=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Ih=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Ph=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],cn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,gt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Lh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Nh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(r[0],r[1],r[2],cn),Promise.all(i)}},Dh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Uh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(r[0],r[1],r[2],cn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,gt)),Promise.all(i)}},Fh=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Oh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Bh=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},zh=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},kh=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Nl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Hh=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Ln.TRIANGLES&&l.mode!==Ln.TRIANGLE_STRIP&&l.mode!==Ln.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let p of u){let v=new je,m=new D,g=new yn,y=new D(1,1,1),b=new xi(p.geometry,p.material,d);for(let w=0;w<d;w++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,w),c.SCALE&&y.fromBufferAttribute(c.SCALE,w),b.setMatrixAt(w,v.compose(m,g,y));let M=null;for(let w in c)if(w==="_COLOR_0"){let T=c[w];b.instanceColor=new gi(T.array,T.itemSize,T.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(M===null){let x=b.geometry;M=new Tt,M.name=x.name;for(let _ in x.attributes)M.setAttribute(_,x.attributes[_]);for(let _ in x.morphAttributes)M.morphAttributes[_]=x.morphAttributes[_];x.index!==null&&M.setIndex(x.index),M.morphTargetsRelative=x.morphTargetsRelative;for(let _ of x.groups)M.addGroup(_.start,_.count,_.materialIndex);x.boundingBox!==null&&(M.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(M.boundingSphere=x.boundingSphere.clone()),M.drawRange.start=x.drawRange.start,M.drawRange.count=x.drawRange.count,M.userData=Object.assign({},x.userData),b.geometry=M}let T=c[w];M.setAttribute(w,new gi(T.array,T.itemSize,T.normalized))}vt.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Yf="glTF",Eo=12,Vf={JSON:1313821514,BIN:5130562},Gh=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Eo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Eo,r=new DataView(e,Eo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Vf.JSON){let l=new Uint8Array(e,Eo+o,a);this.content=n.decode(l)}else if(c===Vf.BIN){let l=Eo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Yh[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Yh[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=pr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let p in f.attributes){let v=f.attributes[p],m=c[p];m!==void 0&&(v.normalized=m)}u(f)},a,l,cn,d)})})}},Wh=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Xh=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},Dl=class extends Kn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*l,v=p-l,m=-2*f+3*d,g=f-d,y=1-m,b=g-d+u;for(let M=0;M!==a;M++){let w=o[v+M+a],T=o[v+M+c]*h,x=o[p+M+a],_=o[p+M]*h;r[M]=y*w+b*T+m*x+g*_}return r}},zy=new yn,qh=class extends Dl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return zy.fromArray(r).normalize().toArray(r),r}},Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wf={9728:Lt,9729:Bt,9984:Fa,9985:or,9986:ms,9987:Cn},Xf={33071:wn,33648:Bs,10497:Rn},Mh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ky={CUBICSPLINE:void 0,LINEAR:es,STEP:Qi},Sh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Hy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new yt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),s.DefaultMaterial}function vs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function si(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Gy(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Vy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wy(s){let e,t=s.extensions&&s.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bh(t.attributes):e=s.indices+":"+bh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+bh(s.targets[n]);return e}function bh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Zh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var qy=new je,Kh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new By,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new as(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ao(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new er(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return vs(r,a,i),si(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ti.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Mh[i.type],a=pr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Zt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Mh[i.type],l=pr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,v,m;if(f&&f!==u){let g=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,b=t.cache.get(y);b||(v=new l(a,g*f,i.count*f/h),b=new Ws(v,f/h),t.cache.add(y,b)),m=new Xs(b,c,d%f/h,p)}else a===null?v=new l(i.count*c):v=new l(a,d,i.count*c),m=new Zt(v,c,p);if(i.sparse!==void 0){let g=Mh.SCALAR,y=pr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,w=new y(o[1],b,i.sparse.count*g),T=new l(o[2],M,i.sparse.count*c);a!==null&&(m=new Zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,_=w.length;x<_;x++){let P=w[x];if(m.setX(P,T[x*c]),c>=2&&m.setY(P,T[x*c+1]),c>=3&&m.setZ(P,T[x*c+2]),c>=4&&m.setW(P,T[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Wf[d.magFilter]||Bt,h.minFilter=Wf[d.minFilter]||Cn,h.wrapS=Xf[d.wrapS]||Rn,h.wrapT=Xf[d.wrapT]||Rn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Lt&&h.minFilter!==Bt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,p){let v=f;t.isImageBitmapLoader===!0&&(v=function(m){let g=new zt(m);g.needsUpdate=!0,f(g)}),t.load(Ti.resolveURL(d,r.path),v,void 0,p)})})}let u=h.then(function(d){return l===!0&&a.revokeObjectURL(c),si(d,o),d.userData.mimeType=o.mimeType||Xy(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ks,dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Zs,dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return yt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){let u=i[ot.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],cn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,gt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ht);let h=r.alphaMode||Sh.OPAQUE;if(h===Sh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Sh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==It&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ge(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==It&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==It){let u=r.emissiveFactor;a.emissive=new Ce().setRGB(u[0],u[1],u[2],cn)}return r.emissiveTexture!==void 0&&o!==It&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,gt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),si(u,r),t.associations.set(u,{materials:e}),r.extensions&&vs(i,u,r),u})}createUniqueName(e){let t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return qf(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Wy(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=qf(new Tt,l,t),l.mode===Ln.TRIANGLE_STRIP?d=d.then(f=>gh(f,go)):l.mode===Ln.TRIANGLE_FAN&&(d=d.then(f=>gh(f,lr))),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Hy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let v=h[f],m=o[f],g,y=l[f];if(m.mode===Ln.TRIANGLES||m.mode===Ln.TRIANGLE_STRIP||m.mode===Ln.TRIANGLE_FAN||m.mode===void 0){let b=r.isSkinnedMesh===!0,M=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");b&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=b&&M?new Br(v,y):new Qe(v,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Ln.LINES)g=new kr(v,y);else if(m.mode===Ln.LINE_STRIP)g=new ss(v,y);else if(m.mode===Ln.LINE_LOOP)g=new Hr(v,y);else if(m.mode===Ln.POINTS)g=new rs(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Vy(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),si(g,r),m.extensions&&vs(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&vs(i,u[0],r),u[0];let d=new He;r.extensions&&vs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(Gt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),si(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new je;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new zr(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],p=i.samplers[f.sampler],v=f.target,m=v.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,y=i.parameters!==void 0?i.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",y)),l.push(p),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],v=u[3],m=u[4],g=[];for(let b=0,M=d.length;b<M;b++){let w=d[b],T=f[b],x=p[b],_=v[b],P=m[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let R=n._createAnimationTracks(w,T,x,_,P);if(R)for(let U=0;U<R.length;U++)g.push(R[U])}let y=new io(r,void 0,g);return si(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,qy)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new qs:l.length>1?h=new He:l.length===1?h=l[0]:h=new vt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),si(h,r),r.extensions&&vs(n,h,r),r.matrix!==void 0){let u=new je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new He;n.name&&(r.name=i.createUniqueName(n.name)),si(r,n),n.extensions&&vs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(Hf(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof dn||d instanceof zt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Gi[r.path]===Gi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(Gi[r.path]){case Gi.weights:h=Mi;break;case Gi.rotation:h=Si;break;case Gi.translation:case Gi.scale:h=ki;break;default:n.itemSize===1?h=Mi:h=ki;break}let u=i.interpolation!==void 0?ky[i.interpolation]:es,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let v=new h(c[f]+"."+Gi[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Zh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Si?qh:Dl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Yy(s,e,t){let n=e.attributes,i=new Mn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=Zh(pr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let v=Zh(pr[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function qf(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Yh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return st.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),si(s,e),Yy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Gy(s,e.targets,t):s})}var tt={x:-2.5,z:-8.7},on={x:3.7,z:4.2},Nn={x:8.4,z:-7.1},To=-22,Zy=new ni(1,1,1,2,.13),Ky=new Yn(1,1,1),Jy=new pn(1,1,1,18),$y=new Zn(1,.038,8,32),En=(s,e={})=>{let t=new yt({color:s,roughness:.67,...e});return e.emissive||e.map||e.transparent||e.flatShading?t:ti(t,(e.metalness??0)>.2?"metal":"panel",{scale:(e.metalness??0)>.2?1.2:2.4,dust:.55,low:.6})};function Ms(s,e,t,n,i,r,o,a,c){let l=new Qe(e,t);return l.position.set(n,i,r),l.scale.set(o,a,c),l.castShadow=!0,l.receiveShadow=!0,s.add(l),l}function jy(){let s=document.createElement("canvas");s.width=512,s.height=128;let e=s.getContext("2d");e.fillStyle="#262b3b",e.fillRect(0,0,512,128),e.fillStyle="#e69460",e.fillRect(0,117,512,11),e.beginPath(),e.ellipse(56,71,15,12,0,0,Math.PI*2);for(let[n,i]of[[35,52],[48,41],[64,41],[77,52]])e.moveTo(n+5,i),e.ellipse(n,i,5,7,0,0,Math.PI*2);e.fill(),e.fillStyle="#fff1d7",e.font="bold 31px system-ui",e.fillText("NATIONAL KITTY",96,55),e.fillStyle="#d0cad3",e.font="bold 22px system-ui",e.fillText("SPACE CENTER",97,89);let t=new fn(s);return t.colorSpace=gt,t}function Qy(){let s=document.createElement("canvas");s.width=256,s.height=128;let e=s.getContext("2d");e.fillStyle="#68707a",e.fillRect(0,0,256,128);let t=e.createLinearGradient(0,128,256,10);t.addColorStop(0,"#141c36"),t.addColorStop(.59,"#2d3c62"),t.addColorStop(1,"#4e4868");for(let i=0;i<12;i++)for(let r=0;r<6;r++)e.fillStyle=t,e.fillRect(i*21+3,r*20+4,19,18),e.fillStyle="#a3a4c044",e.fillRect(i*21+3,r*20+12,19,1);let n=new fn(s);return n.colorSpace=gt,n}var ev=new It({color:"#ffe5ae",transparent:!0,opacity:.9});function Jh(s,e,t,n){let i=new Qe($y,ev.clone());return i.position.set(e,t,n),i.rotation.x=-Math.PI/2,i.scale.setScalar(.73),s.add(i),i}function Zf(s,e){let t=En("#d5c7b4",{metalness:.22}),n=En("#5d5660",{metalness:.22}),i=En("#333341",{metalness:.18}),r=En("#db884d"),o=En("#667888",{metalness:.18}),a=En("#b9ece3",{emissive:"#61aeaa",emissiveIntensity:1.6}),c=En("#ffce90",{emissive:"#e19347",emissiveIntensity:.9}),l=(Q,V,...k)=>Ms(Q,Ky,V,...k),h=(Q,V,...k)=>Ms(Q,Zy,V,...k),u=(Q,V,...k)=>Ms(Q,Jy,V,...k),d=new He;d.position.set(tt.x,e(tt.x,tt.z),tt.z),s.add(d),h(d,n,0,.09,-1.63,4.72,.36,5.24),l(d,i,0,.235,-1.8,3.88,.08,4.42);for(let Q=0;Q<10;Q++)l(d,n,0,.28,.39-Q*.46,3.18,.012,.04);for(let Q of[-1,1]){h(d,t,Q*1.86,1.7,-1.68,.48,3.3,4.56),l(d,o,Q*1.605,1.6,-1.65,.055,2.55,3.76);for(let V of[.26,-1.75,-3.56])h(d,n,Q*2.11,1.44,V,.115,2.72,.18),l(d,r,Q*2.17,.74,V,.027,.46,.19);h(d,n,Q*1.57,1.73,.51,.42,3.1,.26),l(d,r,Q*1.51,1.82,.657,.23,2.82,.022),l(d,c,Q*.81,2.86,-1.54,.105,.05,3.54),l(d,a,Q*1.7,2.74,.663,.075,.31,.028)}h(d,t,0,3.16,-1.72,4.18,.45,4.83);let f=new It({map:jy(),color:"#f4e1d6",toneMapped:!1}),p=new Qe(new sn(3.52,.88),f);p.position.set(0,3.08,.714),d.add(p),l(d,n,0,1.64,-3.93,3.77,3.17,.22),h(d,i,0,1.52,-3.79,1.8,2.6,.15),l(d,c,0,2.76,-3.68,.71,.075,.035),h(d,n,0,1.27,-6.1,4.2,2.8,4.3);let v=[];for(let Q of[-1,1]){let V=new He;V.position.set(Q*.68,1.56,.38),h(V,t,0,0,0,1.37,2.72,.18),h(V,i,0,.46,.096,.64,.43,.055),h(V,o,0,.46,.13,.53,.31,.022),l(V,n,Q*-.45,-.16,.105,.11,.28,.06),l(V,r,0,-.78,.1,1.18,.085,.018),d.add(V),v.push({door:V,side:Q})}let m=new He;m.position.set(tt.x+2.28,e(tt.x+2.28,tt.z+.54),tt.z+.54),s.add(m),h(m,n,0,.64,0,.32,1.28,.3),h(m,r,0,1.14,0,.44,.31,.31),l(m,a,0,1.17,.16,.26,.12,.035);for(let Q of[-1.24,1.24])for(let V of[1.45,3.6,5.6]){let k=new He;k.position.set(tt.x+Q,e(tt.x+Q,tt.z+V),tt.z+V),l(k,n,0,.065,0,.22,.13,.37),l(k,c,0,.138,0,.15,.025,.28),s.add(k)}let g=new He;g.position.set(tt.x,e(tt.x,To)-.35,To),s.add(g);let y=u(g,t,0,2.1,0,4.85,10.9,3.75);y.rotation.z=Math.PI/2;let b=new Ll().loadAsync(new URL("./assets/mars-walk/habitat.glb",import.meta.url).href).then(Q=>(g.remove(y),Q.scene.traverse(V=>{V.isMesh&&(V.castShadow=!0,V.receiveShadow=!0)}),g.add(Q.scene),!0)).catch(()=>!1),M=new He;M.position.set(-8.65,e(-8.65,-13.05),-13.05),s.add(M);let w=En("#d9ccbc",{metalness:.14,roughness:.6}),T=En("#a99a91",{metalness:.18}),x=En("#556a8b",{metalness:.42,roughness:.25,emissive:"#3e4b67",emissiveIntensity:.25});u(M,w,0,1.98,0,1.48,7.35,1.48).rotation.z=Math.PI/2,u(M,n,-3.69,1.98,0,1.39,.2,1.39).rotation.z=Math.PI/2,u(M,t,-3.84,1.98,0,1.2,.19,1.2).rotation.z=Math.PI/2,u(M,n,3.59,1.98,0,1.49,.21,1.49).rotation.z=Math.PI/2,u(M,r,3.19,1.98,0,1.493,.105,1.493).rotation.z=Math.PI/2,u(M,n,4.1,1.8,.32,1.03,1.32,1.03).rotation.z=Math.PI/2;for(let Q of[-2.94,-.98,.98,2.64]){u(M,T,Q,1.98,0,1.491,.043,1.491).rotation.z=Math.PI/2;let V=h(M,n,Q+.43,2.08,1.475,.7,.45,.115);V.rotation.x=-.04,h(M,x,Q+.43,2.09,1.546,.57,.32,.034),l(M,a,Q+.43,1.77,1.472,.065,.035,.03)}for(let Q of[-1,1])for(let V of[-2.73,2.58]){h(M,i,V,.055,Q*1.04,.88,.22,.64);let k=l(M,t,V,.5,Q*.97,.26,.86,.25);k.rotation.x=Q*.45,l(M,r,V,.2,Q*1.22,.4,.08,.035)}h(M,n,-.65,3.45,0,2.28,.15,.67);for(let Q of[-1.4,-.92,.1])h(M,o,Q,3.6,0,.32,.23,.52),l(M,n,Q,3.73,0,.14,.035,.44);let _=En("#e1dbdf",{metalness:.3,roughness:.46,map:Qy()}),P=[];for(let[Q,V]of[[8.6,-12.1],[16.1,-16.3],[11.2,-21.1]]){let k=new He;k.position.set(Q,e(Q,V),V),k.rotation.y=-.32,s.add(k);for(let ce of[-1,1]){h(k,i,ce*1.45,.1,0,.65,.27,1.19),l(k,n,ce*1.45,.77,0,.19,1.39,.22);let _e=l(k,n,ce*1.45,.65,.33,.11,1.16,.13);_e.rotation.x=-.55}let te=new He;te.position.y=1.53,te.rotation.x=.43,l(te,n,0,0,0,6.65,.15,2.78);for(let ce of[-1,1]){let _e=new Qe(new sn(3.24,2.69),_);_e.rotation.x=-Math.PI/2,_e.position.set(ce*1.65,.085,0),_e.receiveShadow=!0,te.add(_e),l(te,t,ce*3.27,.051,0,.044,.072,2.77)}k.add(te),P.push(te)}let R=new He;R.position.set(Nn.x,e(Nn.x,Nn.z),Nn.z),s.add(R),h(R,n,0,.17,0,1.2,.4,.75),h(R,t,0,.69,0,.85,.89,.69),l(R,r,0,.4,.354,.77,.095,.028),h(R,i,0,.94,.36,.63,.225,.064);let U=l(R,a,-.016,.94,.403,.49,.068,.021),H=new He;H.position.set(-13.2,e(-13.2,-12.3),-12.3),s.add(H),u(H,i,0,.14,0,.98,.27,.83),u(H,t,0,1.67,0,.18,3.3,.18),h(H,r,0,1.13,.065,.56,.77,.47);let J=new He;J.position.set(0,3.25,0),H.add(J);let L=Ms(J,new Kt(1,24,12,0,Math.PI*2,Math.PI/2,1.04),En("#beb4ab",{side:Ht,metalness:.27}),0,0,0,1.15,.55,1.15);L.rotation.x=.32,u(J,n,0,.21,.12,.034,.81,.034).rotation.x=.28,Ms(J,new Kt(1,14,8),c,0,.62,.21,.085,.085,.085);let F=new Xr(1,0),O=En("#ad765d",{flatShading:!0}),N=Ms(s,F,O,on.x,e(on.x,on.z)+.25,on.z,.54,.41,.42);N.rotation.set(.31,.9,.22);for(let[Q,V,k]of[[-.75,-.16,.22],[.36,-.49,.19],[.87,.28,.16]])Ms(s,F,O,on.x+Q,e(on.x+Q,on.z+V)+.05,on.z+V,k,k*.46,k*.8);let j={sample:Jh(s,on.x,e(on.x,on.z)+.06,on.z),solar:Jh(s,Nn.x,e(Nn.x,Nn.z+1.4)+.065,Nn.z+1.4),enter:Jh(s,tt.x,e(tt.x,tt.z+1.65)+.064,tt.z+1.65)},I=(Q,V,k,te)=>({x:Q,z:V,w:k,d:te}),G=[I(tt.x,To,8.7,8.8),I(-8.65,-13.05,3.88,1.44),I(tt.x,tt.z-4.46,2.12,1.15),I(tt.x-1.87,tt.z-1.66,.25,2.22),I(tt.x+1.87,tt.z-1.66,.25,2.22),I(m.position.x,m.position.z,.22,.2),I(Nn.x,Nn.z,.55,.38),I(8.6,-12.1,3.35,1.36),I(16.1,-16.3,3.35,1.36),I(11.2,-21.1,3.35,1.36),I(-13.2,-12.3,.94,.77)],X=I(tt.x,tt.z+.53,1.6,.16);return{loaded:b,blockers:G,doorBlocker:X,animate(Q,V,k,te,ce,_e,ae){let we=Gt.smoothstep(V,0,1),Ne=tt.z+Gt.lerp(1.65,-1.8,we);j.enter.position.z=Ne,j.enter.position.y=Ne<tt.z+.4?d.position.y+.296:e(tt.x,Ne)+.066;for(let{door:Oe,side:Ge}of v)Oe.position.x=Ge*(.68+1.3*we);let Me=Gt.smoothstep(te,.15,1);N.position.y=e(on.x,on.z)+.25+Me*.85,N.scale.set(.54,.41,.42).multiplyScalar(1-Me*.97),N.rotation.y=.9+Me*2,N.visible=te<1,U.scale.x=.49*(1-k*.7),U.material.emissiveIntensity=1.4+Math.sin(ce*Math.PI)*2.3,P.forEach((Oe,Ge)=>{Oe.rotation.x=.43+(ae?0:.09*Math.sin(ce*Math.PI)*(1+Ge*.2))}),J.rotation.y=ae?.3:Q*.2;for(let[Oe,Ge]of Object.entries(j))Ge.visible=Oe===_e,Ge.scale.setScalar(ae?.75:.75+Math.sin(Q*3.2)*.09),Ge.material.opacity=ae?.92:.8+Math.sin(Q*3.2)*.14}}}var{clamp:Ci,lerp:Vn,damp:wo}=Gt,Kf=12,Jf=.44,$f={sample:on,solar:Nn,enter:tt};function $h(s,e,t,n){let i=Math.abs(s-t.x),r=Math.abs(e-t.z);return t.radius!==void 0?Math.hypot(i,r)<t.radius+n:Math.hypot(Math.max(0,i-t.w),Math.max(0,r-t.d))<n}function jf(s,e,t,n){let i=Math.atan2(Math.sin(e-s),Math.cos(e-s));return s+i*(1-Math.exp(-t*n))}function tv(s,e){let t=fr(e+9883),n=new Tt,i=[],r=[];for(let c=0;c<650;c++)i.push(t()*86,t()**2.1*8.2,(t()-.5)*84),r.push(t());n.setAttribute("position",new lt(i,3)),n.setAttribute("variation",new lt(r,1));let o=new Jt({transparent:!0,depthWrite:!1,uniforms:{elapsed:{value:0},storm:{value:0},pixelDensity:{value:1},shelter:{value:0}},vertexShader:`
      attribute float variation;
      uniform float elapsed;
      uniform float storm;
      uniform float pixelDensity;
      varying float alpha;
      void main() {
        vec3 p = position;
        p.x = mod(p.x + elapsed * mix(0.6, 9.2, storm) * (0.6 + variation * 0.7), 86.0) - 43.0;
        p.y += cos(p.x * 0.122 + elapsed * 0.3 + variation * 81.0) * 0.32;
        p.z += sin(p.x * 0.07 + variation * 17.0) * 1.4;
        vec4 v = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * v;
        gl_PointSize = clamp((170.0 * variation + 22.0) / max(1.0, -v.z), 1.0, 42.0) * pixelDensity;
        alpha = smoothstep(0.72 - storm * 0.68, 1.0, variation) * mix(0.12, 0.37, storm)
          * smoothstep(1.5, 4.5, -v.z) * (1.0 - smoothstep(28.0, 60.0, -v.z));
      }`,fragmentShader:`
      uniform float storm;
      uniform float shelter;
      varying float alpha;
      void main() {
        vec2 uv = (gl_PointCoord - 0.5) * vec2(1.0, 2.2 + storm * 5.0);
        uv.y += uv.x * 0.32;
        float falloff = 1.0 - smoothstep(0.04, 0.51, length(uv));
        gl_FragColor = vec4(mix(vec3(0.83,0.59,0.44),vec3(0.9,0.60,0.37),storm),
          falloff * alpha * (1.0 - shelter));
        #include <colorspace_fragment>
      }`}),a=new rs(n,o);return a.frustumCulled=!1,s.add(a),o.uniforms}function nv(s){let t=document.createElement("canvas");t.width=32,t.height=48;let n=t.getContext("2d");n.fillStyle="#ffffffc9",n.beginPath(),n.roundRect(6,2,20,44,8),n.fill(),n.globalCompositeOperation="destination-out";for(let h=0;h<5;h++)n.fillStyle="#ffffff8e",n.fillRect(5,8+h*7,22,2);let i=new fn(t),r=new sn(.22,.36).rotateX(-Math.PI/2),o=new It({color:"#684037",transparent:!0,map:i,opacity:.3,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),a=new xi(r,o,56);a.count=0,a.frustumCulled=!1,s.add(a);let c=0,l=new vt;return(h,u,d,f)=>{l.position.set(h,u+.022,d),l.rotation.y=f,l.updateMatrix(),a.setMatrixAt(c,l.matrix),c=(c+1)%56,a.count=Math.min(a.count+1,56),a.instanceMatrix.needsUpdate=!0}}async function Rb(){let s=(navigator.hardwareConcurrency??8)<=2;return Tf(null,{quality:s?"low":matchMedia("(pointer: coarse)").matches?"medium":"high"})}function Cb(s,e,t){let n=s.getContext("webgl2",{alpha:!1,antialias:!0,powerPreference:"high-performance"});if(!n)return null;let i=new El({canvas:s,context:n});i.toneMapping=lo,i.toneMappingExposure=1.15,i.shadowMap.enabled=!0,i.shadowMap.type=us;let r=Math.round(e.lat*100)*31+Math.round(e.lon*100),o=new ns;o.fog=new Ur("#b97e6c",19,157);let a=new Ot(54,1,.07,285),c=new cs("#e7cbd7","#8a5857",1.86),l=new Ei("#ffd3a3",3);l.position.copy(So).multiplyScalar(42),l.target.position.set(0,0,-5),l.position.add(l.target.position),l.castShadow=!0,l.shadow.mapSize.setScalar(s.clientWidth<700?1024:2048),Object.assign(l.shadow.camera,{left:-28,right:28,top:28,bottom:-28,near:.5,far:106}),l.shadow.normalBias=.072,l.shadow.bias=-16e-5,o.add(c,l,l.target),Xt.enabled&&(o.environment=Af(i,{sun:So}),o.environmentIntensity=.95,c.intensity*=.35,o.fog.near=14);let h=Uf(o),u=Nf(r),d=($,C)=>$>150?0:u($,C),f=Pf(o),p=Cf(o,d),v=Zf(o,d),m=[{x:0,z:8,w:6,d:9},{x:6.2,z:.4,w:5,d:7.8},{x:tt.x,z:To+7,w:16,d:17},{x:9.8,z:-9,w:7,d:9}];for(let $ of Object.values(Ft))$.x<150&&m.push({x:$.x,z:$.z,w:4.5,d:4.5});let g=["rover","gate1","gate2","gate3","cache"].map($=>Ft[$]);for(let $=1;$<g.length;$++){let C=g[$-1],q=g[$],W=Math.ceil(Math.hypot(C.x-q.x,C.z-q.z)/2);for(let oe=0;oe<=W;oe++)m.push({x:Vn(C.x,q.x,oe/W),z:Vn(C.z,q.z,oe/W),w:2.1,d:2.1})}let y=["solar","beacon","layers","core","weather","rover","gate1","gate2","gate3","cache","ridge","relay","shelter"].map($=>Ft[$]);for(let $=1;$<y.length;$++){let C=y[$-1],q=y[$],W=Math.ceil(Math.hypot(C.x-q.x,C.z-q.z)/2);for(let oe=0;oe<=W;oe++)m.push({x:Vn(C.x,q.x,oe/W),z:Vn(C.z,q.z,oe/W),w:1.2,d:1.2})}let M=[...Df(o,i,d,r,m),...v.blockers],w=Of(o,kf(zf())),T=tv(o,r),x=nv(o),_={x:0,z:Kf,yaw:0,pitch:0,storm:!1},P=new ge,R=new D,U=new D,H=new D,J=new D,L=new D,F=new Ce("#b97e6c"),O=new Ce("#a35e46"),N=new Ce("#514551"),j=0,I=0,G=0,X=0,Q=0,V=0,k=0,te=-1,ce=0,_e=0,ae=null,we=0,Ne=!1,Me=!1,Oe=!1,Ge=0,ie=0,ue=d(0,Kf),le=!1,Se=0,me=1/60,We=0,Fe=[1,.82,.68,.68],et=null,Xe=!1,at=[],z=[],it=null,Ze=null,ft=!1,ye=0,Mt=!1,Ie=!1,Ve=null,A=$=>Xe&&it?.id===$?Ft[it.target]:{...$f,...Cl}[$];function S(){return _.x>150||Math.abs(_.x-tt.x)<1.33&&_.z<tt.z-.47&&_.z>tt.z-3.72}function Y(){return Xe?et:_.storm&&!S()?"enter":Ne?Me?Oe?null:"enter":"solar":"sample"}function he($,C){let q=A($);return q?Math.hypot(_.x-q.x,_.z-q.z)<=C:!1}function re(){return Ie?"free-park":_.x>150?Math.hypot(_.x-200,_.z-7)<2.8?"free-exit":null:Math.hypot(_.x-Ft.shelter.x,_.z-Ft.shelter.z)<2.8?"free-enter":Math.hypot(_.x-p.rover.position.x,_.z-p.rover.position.z)<2.8?"free-ride":null}function xe(){Ie=!0,_.x=p.rover.position.x,_.z=p.rover.position.z,ue=d(_.x,_.z),P.set(0,0)}function ve(){return ae?null:Xe?it?it.kind!=="drive"&&he(et,2.8)?et:null:re():X<.97&&_.z>tt.z+.62&&he("enter",3.05)?"enter":!Ne&&he("sample",2.25)?"sample":!Me&&he("solar",2.45)?"solar":null}function ne($,C,q,W){if(q<=0)return;let oe=S(),de=ae?0:Ie?7.2:Xe?4.4:3.55,pe=Math.sin(_.yaw),Pe=Math.cos(_.yaw),Ke=(pe*$+Pe*C)*de,fe=(-Pe*$+pe*C)*de;P.set(wo(P.x,Ke,10,q),wo(P.y,fe,10,q));let Be=_.x,Ye=_.z,Ee=(At,jt)=>_.x>150?At<194.3||At>205.7||jt<-7.5||jt>8||Xe&&(Math.abs(At-200)<1.2&&Math.abs(jt+1)<.9||Math.abs(At-200)<.85&&Math.abs(jt+5.5)<.75)||Object.entries(Cl).some(([Vi,mr])=>Vi!=="exit"&&Vi!=="rover"&&Math.abs(At-mr.x)<1.4&&Math.abs(jt-mr.z)<.95):[...M,...Xe?p.blockers:[]].some(Vi=>$h(At,jt,Vi,Ie?.85:Jf))||X<.95&&$h(At,jt,v.doorBlocker,Jf),ut=Ci(_.x+P.x*q,_.x>150?193:-66,_.x>150?207:66),mt=Ci(_.z+P.y*q,-66,66);if(Ee(ut,_.z)?P.x=0:_.x=ut,Ee(_.x,mt)?P.y=0:_.z=mt,Xe&&Ze&&it){let At=Ft[it.target],jt=Math.atan2(At.x-_.x,-(At.z-_.z))-_.yaw;Ze.step({dt:q,near:he(it.id,it.kind==="drive"?3.5:2.8),facing:Math.cos(jt)>.45,held:ft,turn:ye,pulse:Mt,driving:Ie}),Mt=!1,it.kind==="enter"&&(X=Ze.status.progress)}let hn=Math.hypot(_.x-Be,_.z-Ye),ri=hn/q;if(j=ri,ri>.1&&(I=jf(I,Math.atan2(-(_.x-Be),-(_.z-Ye)),11,q)),ae){let At=$f[ae];I=jf(I,Math.atan2(_.x-At.x,_.z-At.z),12,q),we+=q,ae==="sample"&&(ce=W?1:Ci(we/.74,0,1),Ne=ce>=1),ae==="solar"&&(_e=W?1:Ci(we/1.25,0,1),Me=_e>=1),ae==="enter"&&(X=W?1:Ci(we/1.15,0,1)),(W||we>=(ae==="sample"?.83:1.25))&&(ae=null)}if(!oe&&S()&&(Oe=!0),G+=W?0:q,Q=W?Number(_.storm):wo(Q,Number(_.storm),1.8,q),V=wo(V,Number(S()),8,q),w.rig.position.set(_.x,0,_.z),w.rig.rotation.y=I,w.rig.visible=!Ie,ue=wo(ue,_.x>150?0:S()?d(tt.x,tt.z)+.29:d(_.x,_.z),19,q),w.animate(q,ri,ue,Ze?.status.working?.65:ae&&!W?Ci(we/.84,0,1):0,W),k+=hn,k>.4){let At=_.x+Math.cos(I)*te*.16,jt=_.z-Math.sin(I)*te*.16;S()||x(At,d(At,jt),jt,I),t?.(!S()),k%=.4,te*=-1}}function se($,C){let q=s.clientWidth,W=s.clientHeight;if(!q||!W)return;if($>0&&(me=Vn(me,$,.06),We+=$,We>2.5&&me>1/33&&Se<Fe.length-1&&(Se++,We=0,me=1/45,Ge=0,Se===2&&(l.shadow.mapSize.setScalar(1024),l.shadow.map?.dispose(),l.shadow.map=null),Se===3&&(i.shadowMap.enabled=!1,o.traverse(mt=>{mt.material&&(mt.material.needsUpdate=!0)})))),q!==Ge||W!==ie){Ge=q,ie=W;let mt=q<700?1.45:1.75;i.setPixelRatio(Math.min(window.devicePixelRatio||1,mt,Math.sqrt(23e5/(q*W)))*Fe[Se]),i.setSize(q,W,!1),a.aspect=q/W,a.fov=a.aspect<.82?65:53,a.updateProjectionMatrix(),T.pixelDensity.value=i.getPixelRatio()}let oe=_.x,de=_.z,pe=Math.sin(_.yaw),Pe=Math.cos(_.yaw),Ke=S()&&_.x<150,fe=_.x>150,Be=Ke?2.15:fe?4.7:Ie?7.2:5.6,Ye=Ke?.26:.78;R.set(oe-pe*Be+Pe*Ye,ue+(Ke?2.15:fe?4:3.08)+_.pitch*1.65,de+Pe*Be+pe*Ye);for(let mt=8;mt>=2;mt--){let hn=mt/8,ri=Vn(oe,R.x,hn),At=Vn(de,R.z,hn);if(!(_.x<150&&M.some(jt=>$h(ri,At,jt,.16)))){R.x=ri,R.z=At;break}}_.x>150&&(R.x=Ci(R.x,194.1,205.9),R.z=Ci(R.z,-8,8.4),R.y=Math.min(R.y,4.85)),R.y=Math.max(R.y,d(R.x,R.z)+1.45),U.set(oe+pe*5.7,ue+(fe?.9:1.65)-_.pitch*7.2,de-Pe*5.7);let Ee=C||!$?1:1-Math.exp(-$*13);H.lerp(R,Ee),J.lerp(U,Ee),a.position.copy(H),a.lookAt(J),h.position.copy(H),h.material.uniforms.stormAmount.value=Q;let ut=Q*(1-V);o.fog.color.copy(F).lerp(O,Q).lerp(N,V*.18),o.fog.near=Vn(19,1.8,ut),o.fog.far=Vn(157,34,ut),l.intensity=Vn(3,.85,Q),c.intensity=Vn(1.86,1.35,Q),T.elapsed.value=G,T.storm.value=Q,T.shelter.value=V,f.animate(G,_.x>150,at,d,Xe),Xe&&p.update({mission:it,completed:at,...Ze?.status||{},carrying:Ve,driving:Ie,state:_,heading:I,speed:j,time:G,gems:z}),_.x<150&&(l.target.position.set(_.x,0,_.z),l.position.copy(So).multiplyScalar(42).add(l.target.position)),v.animate(G,X,Q,ce,_e,Y(),C),i.render(o,a)}return{state:_,draw:se,step:ne,available:ve,ready:v.loaded,configureField($,C=[]){if(Xe=!0,it=$,et=$?.id||null,at=C,Ze=If($),ft=!1,ye=0,Mt=!1,$?.kind==="board"&&p.rover.position.set(Ft.rover.x,d(Ft.rover.x,Ft.rover.z),Ft.rover.z),$?.kind==="drive"&&!Ie){let q=yh[yh.findIndex(oe=>oe.id===$.id)-1],W=Ft[q.target];_.x=W.x,_.z=W.z,Ie=!0,P.set(0,0),ue=d(W.x,W.z)}Ve=C.includes("get-filter")&&!C.includes("fit-filter")?"filter":C.includes("collect-cache")&&!C.includes("study-core")?"sample":null},setGems($){z=$},cheer(){w.cheer()},fieldInput($,C=0){ft=$,ye=C},beginField(){if(Mt=!0,it&&he(it.id,2.8)){let $=Ft[it.target];_.yaw=Math.atan2($.x-_.x,-($.z-_.z)),_.pitch=0,I=-_.yaw}},finishField(){w.cheer();let $=it?.kind;$==="board"&&xe(),$==="pickup"&&(Ve=it.target,Ie=!1),($==="install"||it?.id==="study-core")&&(Ve=null),$==="enter"&&(X=1)},get fieldStatus(){return{...Ze?.status,driving:Ie,carrying:Ve}},stopDriving(){Ie=!1},boardRover:xe,setMission($,C=[]){Xe=!0,et=$,at=C,Ne=C.includes("sample"),ce=Number(Ne),Me=C.includes("solar"),_e=Number(Me)},goInside(){Ie=!1,_.x=200,_.z=5,_.yaw=0,_.pitch=0,I=0,P.set(0,0),ue=0,H.set(200,3,10),J.set(200,1.6,0)},goOutside(){Ie=!1,_.x=tt.x,_.z=tt.z+3,_.yaw=Math.PI,_.pitch=0,X=1,P.set(0,0),ue=d(_.x,_.z),H.set(_.x,3,_.z-5),J.set(_.x,1.6,_.z+5)},get sheltered(){return S()},get complete(){return Ne&&Me&&Oe},get activity(){return ae||Xe&&it},setStorm($){_.storm=$},look($,C){_.yaw=Math.atan2(Math.sin(_.yaw+$),Math.cos(_.yaw+$)),_.pitch=Ci(_.pitch+C,-.33,.57)},activate(){return Xe?ve():(ae=ve(),we=0,ae)},objective(){let $=Y();if(!$)return null;let C=A($);if(!C)return null;let q=$==="enter"&&X>=.95,W=$==="enter"?C.z+(q?-1.8:1.65):C.z,oe=C.x-_.x,de=W-_.z,pe=Math.atan2(oe,-de)-_.yaw;L.set(C.x,d(C.x,W)+($==="enter"&&!q?3.77:1.15),W),L.project(a);let Pe=Math.cos(pe)>0&&Math.abs(L.x)<.77&&Math.abs(L.y)<.66;return{key:$,bearing:pe,distance:Math.round(Math.hypot(oe,de)),visible:Pe,x:L.x,y:L.y}},dispose(){if(le)return;le=!0;let $=new Set,C=new Set,q=new Set;o.traverse(W=>{W.geometry&&$.add(W.geometry),W.material&&C.add(W.material)});for(let W of C){for(let oe of Object.values(W))oe?.isTexture&&q.add(oe);W.dispose()}for(let W of q)W.dispose();for(let W of $)W.dispose();i.forceContextLoss(),i.dispose()}}}export{Cb as makeSurface,Rb as prepareSurface};
