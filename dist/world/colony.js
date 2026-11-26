/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Mf=0,iu=1,bf=2;var oa=1,Kl=2,qr=3,Ss=0,hn=1,Sn=2,yn=0,$r=1,ts=2,su=3,ru=4,jl=5;var ri=100,Sf=101,wf=102,Ef=103,Tf=104,nr=200,Af=201,Rf=202,Cf=203,ou=204,au=205,aa=206,Pf=207,la=208,If=209,Df=210,Lf=211,Nf=212,Uf=213,Ff=214,_l=0,Ml=1,bl=2,Pr=3,Sl=4,wl=5,El=6,Tl=7,lu=0,Of=1,zf=2,Li=0,ca=1,ha=2,ua=3,ir=4,da=5,fa=6,pa=7;var cu=300,sr=301,Yr=302,Ql=303,ec=304,vn=1e3,Ai=1001,Al=1002,on=1003,Bf=1004;var ma=1005;var Fn=1006,tc=1007;var ns=1008;var Dn=1009,hu=1010,uu=1011,Zr=1012,nc=1013,Mi=1014,oi=1015,sn=1016,ic=1017,sc=1018,is=1020,du=35902,fu=35899,pu=1021,mu=1022,jn=1023,ji=1026,bi=1027,rc=1028,oc=1029,ws=1030,ac=1031;var lc=1033,ga=33776,xa=33777,va=33778,ya=33779,cc=35840,hc=35841,uc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37488,xc=37489,_a=37490,vc=37491,yc=37808,_c=37809,Mc=37810,bc=37811,Sc=37812,wc=37813,Ec=37814,Tc=37815,Ac=37816,Rc=37817,Cc=37818,Pc=37819,Ic=37820,Dc=37821,Lc=36492,Nc=36494,Uc=36495,Fc=36283,Oc=36284,Ma=36285,zc=36286;var Ao=2300,Rl=2301,xl=2302,Wh=2303,Xh=2400,qh=2401,$h=2402;var kf=3200;var ba=0,Hf=1,Si="",Wt="srgb",Ro="srgb-linear",Co="linear",Tt="srgb";var vl=7680;var Gf=519,Vf=512,Wf=513,Xf=514,gu=515,qf=516,$f=517,xu=518,vu=519,yu=35044;var _u="300 es",ni=2e3,Ir=2001;function I0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function D0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yf(){let i=Dr("canvas");return i.style.display="block",i}var Fd={},Lr=null;function Po(...i){let e="THREE."+i.shift();Lr?Lr("log",e,...i):console.log(e,...i)}function Zf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function nt(...i){i=Zf(i);let e="THREE."+i.shift();if(Lr)Lr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function st(...i){i=Zf(i);let e="THREE."+i.shift();if(Lr)Lr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Xs(...i){let e=i.join(" ");e in Fd||(Fd[e]=!0,nt(...i))}function Jf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Kf={[_l]:_l,[bl]:El,[Sl]:Sl,[Pr]:wl,[Ml]:Ml,[El]:bl,[Tl]:Tl,[wl]:Pr},Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=1234567,So=Math.PI/180,qs=180/Math.PI;function ss(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function Mu(i,e){return(i%e+e)%e}function L0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function N0(i,e,t){return i!==e?(t-i)/(e-i):0}function wo(i,e,t){return(1-t)*i+t*e}function U0(i,e,t,n){return wo(i,e,1-Math.exp(-t*n))}function F0(i,e=1){return e-Math.abs(Mu(i,e*2)-e)}function O0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function z0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function B0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function k0(i,e){return i+Math.random()*(e-i)}function H0(i){return i*(.5-Math.random())}function G0(i){i!==void 0&&(Od=i);let e=Od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V0(i){return i*So}function W0(i){return i*qs}function X0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function q0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),p=r((n-e)/2),f=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*f,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*f,a*c);break;case"ZYZ":i.set(l*f,l*p,a*h,a*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Su(i,e){if(e.constructor===Float32Array)return i;let t=Bc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function wu(i,e){if(e.constructor===Float32Array)return i;let t=Bc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var kc={DEG2RAD:So,RAD2DEG:qs,generateUUID:ss,clamp:xt,euclideanModulo:Mu,mapLinear:L0,inverseLerp:N0,lerp:wo,damp:U0,pingpong:F0,smoothstep:O0,smootherstep:z0,randInt:B0,randFloat:k0,randFloatSpread:H0,seededRandom:G0,degToRad:V0,radToDeg:W0,isPowerOfTwo:X0,ceilPowerOfTwo:q0,floorPowerOfTwo:bu,setQuaternionFromProperEuler:$0,normalize:wu,denormalize:Su},ce=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ii=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],p=r[o+1],f=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==p||h!==f){let g=l*u+c*p+h*f+d*x;g<0&&(u=-u,p=-p,f=-f,x=-x,g=-g);let m=1-a;if(g<.9995){let y=Math.acos(g),M=Math.sin(y);m=Math.sin(m*y)/M,a=Math.sin(a*y)/M,l=l*m+u*a,c=c*m+p*a,h=h*m+f*a,d=d*m+x*a}else{l=l*m+u*a,c=c*m+p*a,h=h*m+f*a,d=d*m+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],f=r[o+3];return e[t]=a*f+h*d+l*p-c*u,e[t+1]=l*f+h*u+c*d-a*p,e[t+2]=c*f+h*p+a*u-l*d,e[t+3]=h*f-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"YZX":this._x=u*h*d+c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d-u*p*f;break;case"XZY":this._x=u*h*d-c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d+u*p*f;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_h=new L,zd=new ii,at=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],f=n[8],x=s[0],g=s[3],m=s[6],y=s[1],M=s[4],_=s[7],w=s[2],S=s[5],v=s[8];return r[0]=o*x+a*y+l*w,r[3]=o*g+a*M+l*S,r[6]=o*m+a*_+l*v,r[1]=c*x+h*y+d*w,r[4]=c*g+h*M+d*S,r[7]=c*m+h*_+d*v,r[2]=u*x+p*y+f*w,r[5]=u*g+p*M+f*S,r[8]=u*m+p*_+f*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,f=t*d+n*u+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mh=new at,Bd=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kd=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y0(){let i={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Tt&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(s.r=Cr(s.r),s.g=Cr(s.g),s.b=Cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ro]:{primaries:e,whitePoint:n,transfer:Co,toXYZ:Bd,fromXYZ:kd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:Bd,fromXYZ:kd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}var vt=Y0();function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hr,Cl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=Dr("canvas")),hr.width=e.width,hr.height=e.height;let s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Z0=0,Nr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bh(s[o].image)):r.push(bh(s[o]))}else r=bh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var J0=0,Sh=new L,In=class i extends Ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=Fn,o=ns,a=jn,l=Dn,c=i.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=ss(),this.name="",this.source=new Nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vn:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vn:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=cu;In.DEFAULT_ANISOTROPY=1;var Yt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],f=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(f+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(p+1)/2,w=(m+1)/2,S=(h+u)/4,v=(d+x)/4,b=(f+g)/4;return M>_&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=v/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=b/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=v/r,s=b/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-f)*(g-f)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-f)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pl=class extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new In({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends Pl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Io=class extends In{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Il=class extends In{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var yt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,h,d,u,p,f,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,p,f,x,g)}set(e,t,n,s,r,o,a,l,c,h,d,u,p,f,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=p,m[7]=f,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*d,f=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=f+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,f=c*h,x=c*d;t[0]=u+x*a,t[4]=f*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-f,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,f=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=f+p*a,t[1]=p+f*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*d,f=a*h,x=a*d;t[0]=l*h,t[4]=f*c-p,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=p*c-f,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,f=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=f*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+f,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*l,p=o*c,f=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K0,e,j0)}lookAt(e,t,n){let s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),fs.crossVectors(n,$n),fs.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),fs.crossVectors(n,$n)),fs.normalize(),Va.crossVectors($n,fs),s[0]=fs.x,s[4]=Va.x,s[8]=$n.x,s[1]=fs.y,s[5]=Va.y,s[9]=$n.y,s[2]=fs.z,s[6]=Va.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],f=n[2],x=n[6],g=n[10],m=n[14],y=n[3],M=n[7],_=n[11],w=n[15],S=s[0],v=s[4],b=s[8],R=s[12],T=s[1],C=s[5],P=s[9],N=s[13],D=s[2],O=s[6],G=s[10],B=s[14],ee=s[3],F=s[7],V=s[11],q=s[15];return r[0]=o*S+a*T+l*D+c*ee,r[4]=o*v+a*C+l*O+c*F,r[8]=o*b+a*P+l*G+c*V,r[12]=o*R+a*N+l*B+c*q,r[1]=h*S+d*T+u*D+p*ee,r[5]=h*v+d*C+u*O+p*F,r[9]=h*b+d*P+u*G+p*V,r[13]=h*R+d*N+u*B+p*q,r[2]=f*S+x*T+g*D+m*ee,r[6]=f*v+x*C+g*O+m*F,r[10]=f*b+x*P+g*G+m*V,r[14]=f*R+x*N+g*B+m*q,r[3]=y*S+M*T+_*D+w*ee,r[7]=y*v+M*C+_*O+w*F,r[11]=y*b+M*P+_*G+w*V,r[15]=y*R+M*N+_*B+w*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],f=e[3],x=e[7],g=e[11],m=e[15],y=l*p-c*u,M=a*p-c*d,_=a*u-l*d,w=o*p-c*h,S=o*u-l*h,v=o*d-a*h;return t*(x*y-g*M+m*_)-n*(f*y-g*w+m*S)+s*(f*M-x*w+m*v)-r*(f*_-x*S+g*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],x=e[13],g=e[14],m=e[15],y=t*a-n*o,M=t*l-s*o,_=t*c-r*o,w=n*l-s*a,S=n*c-r*a,v=s*c-r*l,b=h*x-d*f,R=h*g-u*f,T=h*m-p*f,C=d*g-u*x,P=d*m-p*x,N=u*m-p*g,D=y*N-M*P+_*C+w*T-S*R+v*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return e[0]=(a*N-l*P+c*C)*O,e[1]=(s*P-n*N-r*C)*O,e[2]=(x*v-g*S+m*w)*O,e[3]=(u*S-d*v-p*w)*O,e[4]=(l*T-o*N-c*R)*O,e[5]=(t*N-s*T+r*R)*O,e[6]=(g*_-f*v-m*M)*O,e[7]=(h*v-u*_+p*M)*O,e[8]=(o*P-a*T+c*b)*O,e[9]=(n*T-t*P-r*b)*O,e[10]=(f*S-x*_+m*y)*O,e[11]=(d*_-h*S-p*y)*O,e[12]=(a*R-o*C-l*b)*O,e[13]=(t*C-n*R+s*b)*O,e[14]=(x*M-f*w-g*y)*O,e[15]=(h*w-d*M+u*y)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,f=r*d,x=o*h,g=o*d,m=a*d,y=l*c,M=l*h,_=l*d,w=n.x,S=n.y,v=n.z;return s[0]=(1-(x+m))*w,s[1]=(p+_)*w,s[2]=(f-M)*w,s[3]=0,s[4]=(p-_)*S,s[5]=(1-(u+m))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(f+M)*v,s[9]=(g-y)*v,s[10]=(1-(u+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ur.set(s[0],s[1],s[2]).length(),a=ur.set(s[4],s[5],s[6]).length(),l=ur.set(s[8],s[9],s[10]).length();r<0&&(o=-o),di.copy(this);let c=1/o,h=1/a,d=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=d,di.elements[9]*=d,di.elements[10]*=d,t.setFromRotationMatrix(di),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=ni,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),f,x;if(l)f=r/(o-r),x=o*r/(o-r);else if(a===ni)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ir)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ni,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),f,x;if(l)f=1/(o-r),x=o/(o-r);else if(a===ni)f=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ir)f=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ur=new L,di=new yt,K0=new L(0,0,0),j0=new L(1,1,1),fs=new L,Va=new L,$n=new L,Hd=new yt,Gd=new ii,gi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gd.setFromEuler(this),this.setFromQuaternion(Gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var Do=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Q0=0,Vd=new L,dr=new ii,Xi=new yt,Wa=new L,fo=new L,eg=new L,tg=new ii,Wd=new L(1,0,0),Xd=new L(0,1,0),qd=new L(0,0,1),$d={type:"added"},ng={type:"removed"},fr={type:"childadded",child:null},wh={type:"childremoved",child:null},At=class i extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new gi,n=new ii,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new at}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(Wd,e)}rotateY(e){return this.rotateOnAxis(Xd,e)}rotateZ(e){return this.rotateOnAxis(qd,e)}translateOnAxis(e,t){return Vd.copy(e).applyQuaternion(this.quaternion),this.position.add(Vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wd,e)}translateY(e){return this.translateOnAxis(Xd,e)}translateZ(e){return this.translateOnAxis(qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(fo,Wa,this.up):Xi.lookAt(Wa,fo,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(Xi),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($d),fr.child=e,this.dispatchEvent(fr),fr.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($d),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),f=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new L(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ze=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},ig={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Eh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=Mu(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Eh(o,r,e+1/3),this.g=Eh(o,r,e),this.b=Eh(o,r,e-1/3)}return vt.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let n=jf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return vt.workingToColorSpace(Pn.copy(this),e),Math.round(xt(Pn.r*255,0,255))*65536+Math.round(xt(Pn.g*255,0,255))*256+Math.round(xt(Pn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Pn.copy(this),t);let n=Pn.r,s=Pn.g,r=Pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Wt){vt.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,n=Pn.g,s=Pn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(Xa);let n=wo(ps.h,Xa.h,t),s=wo(ps.s,Xa.s,t),r=wo(ps.l,Xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new Ne;Ne.NAMES=jf;var Lo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$s=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fi=new L,qi=new L,Th=new L,$i=new L,pr=new L,mr=new L,Yd=new L,Ah=new L,Rh=new L,Ch=new L,Ph=new Yt,Ih=new Yt,Dh=new Yt,Ji=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fi.subVectors(e,t),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fi.subVectors(s,t),qi.subVectors(n,t),Th.subVectors(e,t);let o=fi.dot(fi),a=fi.dot(qi),l=fi.dot(Th),c=qi.dot(qi),h=qi.dot(Th),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,f=(o*h-a*l)*u;return r.set(1-p-f,f,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$i.x),l.addScaledVector(o,$i.y),l.addScaledVector(a,$i.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ph.setScalar(0),Ih.setScalar(0),Dh.setScalar(0),Ph.fromBufferAttribute(e,t),Ih.fromBufferAttribute(e,n),Dh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ph,r.x),o.addScaledVector(Ih,r.y),o.addScaledVector(Dh,r.z),o}static isFrontFacing(e,t,n,s){return fi.subVectors(n,t),qi.subVectors(e,t),fi.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),fi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;pr.subVectors(s,n),mr.subVectors(r,n),Ah.subVectors(e,n);let l=pr.dot(Ah),c=mr.dot(Ah);if(l<=0&&c<=0)return t.copy(n);Rh.subVectors(e,s);let h=pr.dot(Rh),d=mr.dot(Rh);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(pr,o);Ch.subVectors(e,r);let p=pr.dot(Ch),f=mr.dot(Ch);if(f>=0&&p<=f)return t.copy(r);let x=p*c-l*f;if(x<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(mr,a);let g=h*f-p*d;if(g<=0&&d-h>=0&&p-f>=0)return Yd.subVectors(r,s),a=(d-h)/(d-h+(p-f)),t.copy(s).addScaledVector(Yd,a);let m=1/(g+x+u);return o=x*m,a=u*m,t.copy(n).addScaledVector(pr,o).addScaledVector(mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ci=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),$a.subVectors(this.max,po),gr.subVectors(e.a,po),xr.subVectors(e.b,po),vr.subVectors(e.c,po),ms.subVectors(xr,gr),gs.subVectors(vr,xr),ks.subVectors(gr,vr);let t=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-ks.z,ks.y,ms.z,0,-ms.x,gs.z,0,-gs.x,ks.z,0,-ks.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-ks.y,ks.x,0];return!Lh(t,gr,xr,vr,$a)||(t=[1,0,0,0,1,0,0,0,1],!Lh(t,gr,xr,vr,$a))?!1:(Ya.crossVectors(ms,gs),t=[Ya.x,Ya.y,Ya.z],Lh(t,gr,xr,vr,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yi=[new L,new L,new L,new L,new L,new L,new L,new L],pi=new L,qa=new Ci,gr=new L,xr=new L,vr=new L,ms=new L,gs=new L,ks=new L,po=new L,$a=new L,Ya=new L,Hs=new L;function Lh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hs.fromArray(i,r);let a=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),l=e.dot(Hs),c=t.dot(Hs),h=n.dot(Hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ln=new L,Za=new ce,sg=0,Hn=class extends Ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yu,this.updateRanges=[],this.gpuType=oi,this.version=0,this._normalizationScale=e!==void 0?Bc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Su(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):wu(e,this.array)}};var No=class extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Uo=class extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}},rg=new Ci,mo=new L,Nh=new L,Qi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):rg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);let t=mo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(mo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(Nh)),this.expandByPoint(mo.copy(e.center).sub(Nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},og=0,ti=new yt,Uh=new At,yr=new L,Yn=new Ci,go=new Ci,xn=new L,zt=class i extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I0(e)?Uo:No)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];go.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(Yn.min,go.min),Yn.expandByPoint(xn),xn.addVectors(Yn.max,go.max),Yn.expandByPoint(xn)):(Yn.expandByPoint(go.min),Yn.expandByPoint(go.max))}Yn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xn.fromBufferAttribute(a,c),l&&(yr.fromBufferAttribute(e,c),xn.add(yr)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new L,l[R]=new L;let h=new L,d=new L,u=new L,p=new ce,f=new ce,x=new ce,g=new L,m=new L;function y(R,T,C){c[R]=c[T]=c[C]=1,h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),p.fromBufferAttribute(r,R),f.fromBufferAttribute(r,T),x.fromBufferAttribute(r,C),d.sub(h),u.sub(h),f.sub(p),x.sub(p);let P=1/(f.x*x.y-x.x*f.y);isFinite(P)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(P),a[R].add(g),a[T].add(g),a[C].add(g),l[R].add(m),l[T].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,T=M.length;R<T;++R){let C=M[R],P=C.start,N=C.count;for(let D=P,O=P+N;D<O;D+=3)y(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let _=new L,w=new L,S=new L,v=new L;function b(R){S.fromBufferAttribute(s,R),v.copy(S);let T=a[R];_.copy(T),_.sub(S.multiplyScalar(S.dot(T))).normalize(),w.crossVectors(v,T);let P=w.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,P)}for(let R=0,T=n.count;R<T;++R)c[R]&&b(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,f=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let m=0;m<h;m++)u[f++]=c[p++]}return new Hn(u,h,d)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yu,this.updateRanges=[],this.version=0,this.uuid=ss()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Zd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Zd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Zd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ss()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Un=new L,Fr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Bc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Po("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Po("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Su(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):wu(e,this.data.array)}},Fh=new L,ag=new L,lg=new at,mi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Fh.subVectors(n,t).cross(ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Fh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lg.getNormalMatrix(e),s=this.coplanarPoint(Fh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},cg=0,xi=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=$r,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ou,this.blendDst=au,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vl,this.stencilZFail=vl,this.stencilZPass=vl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new mi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vs=class extends xi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_r,xo=new L,Mr=new L,br=new L,Sr=new ce,vo=new ce,Qf=new yt,Ja=new L,yo=new L,Ka=new L,Jd=new ce,Oh=new ce,Kd=new ce,Ys=class extends At{constructor(e=new vs){if(super(),this.isSprite=!0,this.type="Sprite",_r===void 0){_r=new zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fo(t,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new Fr(n,3,0,!1)),_r.setAttribute("uv",new Fr(n,2,3,!1))}this.geometry=_r,this.material=e,this.center=new ce(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&st('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),Qf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-br.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ja(Ja.set(-.5,-.5,0),br,o,Mr,s,r),ja(yo.set(.5,-.5,0),br,o,Mr,s,r),ja(Ka.set(.5,.5,0),br,o,Mr,s,r),Jd.set(0,0),Oh.set(1,0),Kd.set(1,1);let a=e.ray.intersectTriangle(Ja,yo,Ka,!1,xo);if(a===null&&(ja(yo.set(-.5,.5,0),br,o,Mr,s,r),Oh.set(0,1),a=e.ray.intersectTriangle(Ja,Ka,yo,!1,xo),a===null))return;let l=e.ray.origin.distanceTo(xo);l<e.near||l>e.far||t.push({distance:l,point:xo.clone(),uv:Ji.getInterpolation(xo,Ja,yo,Ka,Jd,Oh,Kd,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ja(i,e,t,n,s,r){Sr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(vo.x=r*Sr.x-s*Sr.y,vo.y=s*Sr.x+r*Sr.y):vo.copy(Sr),i.copy(e),i.x+=vo.x,i.y+=vo.y,i.applyMatrix4(Qf)}var Zi=new L,zh=new L,Qa=new L,el=new L,Oo=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zh.copy(e).add(t).multiplyScalar(.5),Qa.copy(t).sub(e).normalize(),el.copy(this.origin).sub(zh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Qa),a=el.dot(this.direction),l=-el.dot(Qa),c=el.lengthSq(),h=Math.abs(1-o*o),d,u,p,f;if(h>0)if(d=o*l-a,u=o*a-l,f=r*h,d>=0)if(u>=-f)if(u<=f){let x=1/h;d*=x,u*=x,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zh).addScaledVector(Qa,u),p}intersectSphere(e,t){if(e.radius<0)return null;Zi.subVectors(e.center,this.origin);let n=Zi.dot(this.direction),s=Zi.dot(Zi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,p=e.z-o.z,f=t.x-o.x,x=t.y-o.y,g=t.z-o.z,m=n.x-o.x,y=n.y-o.y,M=n.z-o.z,_=Math.abs(l),w=Math.abs(c),S=Math.abs(h),v,b,R,T,C,P,N,D,O,G,B,ee;if(_>=w&&_>=S?(R=l,P=d,O=f,ee=m,l>=0?(v=c,b=h,T=u,C=p,N=x,D=g,G=y,B=M):(v=h,b=c,T=p,C=u,N=g,D=x,G=M,B=y)):w>=S?(R=c,P=u,O=x,ee=y,c>=0?(v=h,b=l,T=p,C=d,N=g,D=f,G=M,B=m):(v=l,b=h,T=d,C=p,N=f,D=g,G=m,B=M)):(R=h,P=p,O=g,ee=M,h>=0?(v=l,b=c,T=d,C=u,N=f,D=x,G=m,B=y):(v=c,b=l,T=u,C=d,N=x,D=f,G=y,B=m)),R===0)return null;let F=v/R,V=b/R,q=1/R,Se=T-F*P,j=C-V*P,W=N-F*O,oe=D-V*O,ve=G-F*ee,Te=B-V*ee,ge=ve*oe-Te*W,Be=Se*Te-j*ve,ut=W*j-oe*Se;if(s){if(ge<0||Be<0||ut<0)return null}else if((ge<0||Be<0||ut<0)&&(ge>0||Be>0||ut>0))return null;let Oe=ge+Be+ut;if(Oe===0)return null;let rt=q*(ge*P+Be*O+ut*ee);return(Oe>0?rt<0:rt>0)?null:this.at(rt/Oe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jd=new yt,Gs=new Oo,tl=new Qi,Qd=new L,nl=new L,il=new L,sl=new L,Bh=new L,rl=new L,ef=new L,ol=new L,Ce=class extends At{constructor(e=new zt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Bh.fromBufferAttribute(d,e),o?rl.addScaledVector(Bh,h):rl.addScaledVector(Bh.sub(t),h))}t.add(rl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(r),Gs.copy(e.ray).recast(e.near),!(tl.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(tl,Qd)===null||Gs.origin.distanceToSquared(Qd)>(e.far-e.near)**2))&&(jd.copy(r).invert(),Gs.copy(e.ray).applyMatrix4(jd),!(n.boundingBox!==null&&Gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,x=u.length;f<x;f++){let g=u[f],m=o[g.materialIndex],y=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=y,w=M;_<w;_+=3){let S=a.getX(_),v=a.getX(_+1),b=a.getX(_+2);s=al(this,m,e,n,c,h,d,S,v,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=f,m=x;g<m;g+=3){let y=a.getX(g),M=a.getX(g+1),_=a.getX(g+2);s=al(this,o,e,n,c,h,d,y,M,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,x=u.length;f<x;f++){let g=u[f],m=o[g.materialIndex],y=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=y,w=M;_<w;_+=3){let S=_,v=_+1,b=_+2;s=al(this,m,e,n,c,h,d,S,v,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=f,m=x;g<m;g+=3){let y=g,M=g+1,_=g+2;s=al(this,o,e,n,c,h,d,y,M,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function hg(i,e,t,n,s,r,o,a){let l;if(e.side===hn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ss,a),l===null)return null;ol.copy(a),ol.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ol);return c<t.near||c>t.far?null:{distance:c,point:ol.clone(),object:i}}function al(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,nl),i.getVertexPosition(l,il),i.getVertexPosition(c,sl);let h=hg(i,e,t,n,nl,il,sl,ef);if(h){let d=new L;Ji.getBarycoord(ef,nl,il,sl,d),s&&(h.uv=Ji.getInterpolatedAttribute(s,a,l,c,d,new ce)),r&&(h.uv1=Ji.getInterpolatedAttribute(r,a,l,c,d,new ce)),o&&(h.normal=Ji.getInterpolatedAttribute(o,a,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};Ji.getNormal(nl,il,sl,u.normal),h.face=u,h.barycoord=d}return h}var es=class extends In{constructor(e=null,t=1,n=1,s,r,o,a,l,c=on,h=on,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Or=class extends Hn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new yt,tf=new yt,ll=[],nf=new Ci,ug=new yt,_o=new Ce,Mo=new Qi,Zn=class extends Ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Or(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ug)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),nf.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(nf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Mo.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(n),e.ray.intersectsSphere(Mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),tf.multiplyMatrices(n,wr),_o.matrixWorld=tf,_o.raycast(e,ll);for(let o=0,a=ll.length;o<a;o++){let l=ll[o];l.instanceId=r,l.object=this,t.push(l)}ll.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Or(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new es(new Float32Array(s*this.count),s,this.count,rc,oi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vs=new Qi,dg=new ce(.5,.5),cl=new L,ys=class{constructor(e=new mi,t=new mi,n=new mi,s=new mi,r=new mi,o=new mi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],f=r[8],x=r[9],g=r[10],m=r[11],y=r[12],M=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-o,p-h,m-f,w-y).normalize(),s[1].setComponents(c+o,p+h,m+f,w+y).normalize(),s[2].setComponents(c+a,p+d,m+x,w+M).normalize(),s[3].setComponents(c-a,p-d,m-x,w-M).normalize(),n)s[4].setComponents(l,u,g,_).normalize(),s[5].setComponents(c-l,p-u,m-g,w-_).normalize();else if(s[4].setComponents(c-l,p-u,m-g,w-_).normalize(),t===ni)s[5].setComponents(c+l,p+u,m+g,w+_).normalize();else if(t===Ir)s[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=dg.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(cl.x=s.normal.x>0?e.max.x:e.min.x,cl.y=s.normal.y>0?e.max.y:e.min.y,cl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sf=new yt,Dl=class i{constructor(){this.coordinateSystem=ni,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];sf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ys),n[s].setFromProjectionMatrix(sf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ys),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Zs=class extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rf=new yt,Yh=new Oo,hl=new Qi,ul=new L,Pi=class extends At{constructor(e=new zt,t=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(s),hl.radius+=r,e.ray.intersectsSphere(hl)===!1)return;rf.copy(s).invert(),Yh.copy(e.ray).applyMatrix4(rf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=u,x=p;f<x;f++){let g=c.getX(f);ul.fromBufferAttribute(d,g),of(ul,g,l,s,e,t,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let f=u,x=p;f<x;f++)ul.fromBufferAttribute(d,f),of(ul,f,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function of(i,e,t,n,s,r,o){let a=Yh.distanceSqToPoint(i);if(a<t){let l=new L;Yh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var zo=class extends In{constructor(e=[],t=sr,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gn=class extends In{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var vi=class extends In{constructor(e,t,n=Mi,s,r,o,a=on,l=on,c,h=ji,d=1){if(h!==ji&&h!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Bo=class extends vi{constructor(e,t=Mi,n=sr,s,r,o=on,a=on,l,c=ji){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ko=class extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},nn=class i extends zt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;f("z","y","x",-1,-1,n,t,e,o,r,0),f("z","y","x",1,-1,n,t,-e,o,r,1),f("x","z","y",1,1,e,n,t,s,o,2),f("x","z","y",1,-1,e,n,-t,s,o,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(d,2));function f(x,g,m,y,M,_,w,S,v,b,R){let T=_/v,C=w/b,P=_/2,N=w/2,D=S/2,O=v+1,G=b+1,B=0,ee=0,F=new L;for(let V=0;V<G;V++){let q=V*C-N;for(let Se=0;Se<O;Se++){let j=Se*T-P;F[x]=j*y,F[g]=q*M,F[m]=D,c.push(F.x,F.y,F.z),F[x]=0,F[g]=0,F[m]=S>0?1:-1,h.push(F.x,F.y,F.z),d.push(Se/v),d.push(1-V/b),B+=1}}for(let V=0;V<b;V++)for(let q=0;q<v;q++){let Se=u+q+O*V,j=u+q+O*(V+1),W=u+(q+1)+O*(V+1),oe=u+(q+1)+O*V;l.push(Se,j,oe),l.push(j,W,oe),ee+=6}a.addGroup(p,ee,R),p+=ee,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Js=class i extends zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Rt=class i extends zt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],f=0,x=[],g=n/2,m=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(p,2));function y(){let _=new L,w=new L,S=0,v=(t-e)/n;for(let b=0;b<=r;b++){let R=[],T=b/r,C=T*(t-e)+e;for(let P=0;P<=s;P++){let N=P/s,D=N*l+a,O=Math.sin(D),G=Math.cos(D);w.x=C*O,w.y=-T*n+g,w.z=C*G,d.push(w.x,w.y,w.z),_.set(O,v,G).normalize(),u.push(_.x,_.y,_.z),p.push(N,1-T),R.push(f++)}x.push(R)}for(let b=0;b<s;b++)for(let R=0;R<r;R++){let T=x[R][b],C=x[R+1][b],P=x[R+1][b+1],N=x[R][b+1];(e>0||R!==0)&&(h.push(T,C,N),S+=3),(t>0||R!==r-1)&&(h.push(C,P,N),S+=3)}c.addGroup(m,S,0),m+=S}function M(_){let w=f,S=new ce,v=new L,b=0,R=_===!0?e:t,T=_===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,g*T,0),u.push(0,T,0),p.push(.5,.5),f++;let C=f;for(let P=0;P<=s;P++){let D=P/s*l+a,O=Math.cos(D),G=Math.sin(D);v.x=R*G,v.y=g*T,v.z=R*O,d.push(v.x,v.y,v.z),u.push(0,T,0),S.x=O*.5+.5,S.y=G*.5*T+.5,p.push(S.x,S.y),f++}for(let P=0;P<s;P++){let N=w+P,D=C+P;_===!0?h.push(D,D+1,N):h.push(D+1,D,N),b+=3}c.addGroup(m,b,_===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ii=class i extends Rt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ho=class i extends zt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new L,_=new L,w=new L;for(let S=0;S<t.length;S+=3)p(t[S+0],M),p(t[S+1],_),p(t[S+2],w),l(M,_,w,y)}function l(y,M,_,w){let S=w+1,v=[];for(let b=0;b<=S;b++){v[b]=[];let R=y.clone().lerp(_,b/S),T=M.clone().lerp(_,b/S),C=S-b;for(let P=0;P<=C;P++)P===0&&b===S?v[b][P]=R:v[b][P]=R.clone().lerp(T,P/C)}for(let b=0;b<S;b++)for(let R=0;R<2*(S-b)-1;R++){let T=Math.floor(R/2);R%2===0?(u(v[b][T+1]),u(v[b+1][T]),u(v[b][T])):(u(v[b][T+1]),u(v[b+1][T+1]),u(v[b+1][T]))}}function c(y){let M=new L;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(y),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let y=new L;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let _=g(y)/2/Math.PI+.5,w=m(y)/Math.PI+.5;o.push(_,1-w)}f(),d()}function d(){for(let y=0;y<o.length;y+=6){let M=o[y+0],_=o[y+2],w=o[y+4],S=Math.max(M,_,w),v=Math.min(M,_,w);S>.9&&v<.1&&(M<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function p(y,M){let _=y*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function f(){let y=new L,M=new L,_=new L,w=new L,S=new ce,v=new ce,b=new ce;for(let R=0,T=0;R<r.length;R+=9,T+=6){y.set(r[R+0],r[R+1],r[R+2]),M.set(r[R+3],r[R+4],r[R+5]),_.set(r[R+6],r[R+7],r[R+8]),S.set(o[T+0],o[T+1]),v.set(o[T+2],o[T+3]),b.set(o[T+4],o[T+5]),w.copy(y).add(M).add(_).divideScalar(3);let C=g(w);x(S,T+0,y,C),x(v,T+2,M,C),x(b,T+4,_,C)}}function x(y,M,_,w){w<0&&y.x===1&&(o[M]=y.x-1),_.x===0&&_.z===0&&(o[M]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},si=class i extends Ho{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,l=new yt;for(let p=0;p<=e;p++){let f=p/e;s[p]=this.getTangentAt(f,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(xt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(xt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},zr=class extends Jn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ll=class extends zr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var af=new L,lf=new L,kh=new Eu,Hh=new Eu,Gh=new Eu,Br=class extends Jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(lf.subVectors(s[0],s[1]).add(s[0]),c=lf);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(af.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=af),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(h),p);x<1e-4&&(x=1),f<1e-4&&(f=x),g<1e-4&&(g=x),kh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,f,x,g),Hh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,f,x,g),Gh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,f,x,g)}else this.curveType==="catmullrom"&&(kh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Hh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Gh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(kh.calc(l),Hh.calc(l),Gh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function fg(i,e){let t=1-i;return t*t*e}function pg(i,e){return 2*(1-i)*i*e}function mg(i,e){return i*i*e}function Eo(i,e,t,n){return fg(i,e)+pg(i,t)+mg(i,n)}function gg(i,e){let t=1-i;return t*t*t*e}function xg(i,e){let t=1-i;return 3*t*t*i*e}function vg(i,e){return 3*(1-i)*i*i*e}function yg(i,e){return i*i*i*e}function To(i,e,t,n,s){return gg(i,e)+xg(i,t)+vg(i,n)+yg(i,s)}var Go=class extends Jn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(To(e,s.x,r.x,o.x,a.x),To(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nl=class extends Jn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(To(e,s.x,r.x,o.x,a.x),To(e,s.y,r.y,o.y,a.y),To(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vo=class extends Jn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ul=class extends Jn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends Jn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Eo(e,s.x,r.x,o.x),Eo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends Jn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Eo(e,s.x,r.x,o.x),Eo(e,s.y,r.y,o.y),Eo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(cf(a,l.x,c.x,h.x,d.x),cf(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},Fl=Object.freeze({__proto__:null,ArcCurve:Ll,CatmullRomCurve3:Br,CubicBezierCurve:Go,CubicBezierCurve3:Nl,EllipseCurve:zr,LineCurve:Vo,LineCurve3:Ul,QuadraticBezierCurve:Wo,QuadraticBezierCurve3:Xo,SplineCurve:qo}),Ol=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Fl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},$o=class extends Ol{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Vo(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wo(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Go(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new zr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},kr=class extends $o{constructor(e){super(e),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new $o().fromJSON(s))}return this}};function _g(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ep(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Eg(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let p=i[u],f=i[u+1];p<a&&(a=p),f<l&&(l=f),p>h&&(h=p),f>d&&(d=f)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Yo(r,o,t,a,l,c,0),o}function ep(i,e,t,n,s){let r;if(s===Fg(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=hf(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=hf(o/n|0,i[o],i[o+1],r);return r&&Hr(r,r.next)&&(Jo(r),r=r.next),r}function Ks(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Hr(t,t.next)||jt(t.prev,t,t.next)===0)){if(Jo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Pg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?bg(i,n,s,r):Mg(i)){e.push(l.i,i.i,c.i),Jo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Sg(Ks(i),e),Yo(i,e,t,n,s,r,2)):o===2&&wg(i,e,t,n,s,r):Yo(Ks(i),e,t,n,s,r,1);break}}}function Mg(i){let e=i.prev,t=i,n=i.next;if(jt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),p=Math.max(a,l,c),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&bo(s,a,r,l,o,c,f.x,f.y)&&jt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function bg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(jt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,p=Math.min(a,l,c),f=Math.min(h,d,u),x=Math.max(a,l,c),g=Math.max(h,d,u),m=Zh(p,f,e,t,n),y=Zh(x,g,e,t,n),M=i.prevZ,_=i.nextZ;for(;M&&M.z>=m&&_&&_.z<=y;){if(M.x>=p&&M.x<=x&&M.y>=f&&M.y<=g&&M!==s&&M!==o&&bo(a,h,l,d,c,u,M.x,M.y)&&jt(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=p&&_.x<=x&&_.y>=f&&_.y<=g&&_!==s&&_!==o&&bo(a,h,l,d,c,u,_.x,_.y)&&jt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=m;){if(M.x>=p&&M.x<=x&&M.y>=f&&M.y<=g&&M!==s&&M!==o&&bo(a,h,l,d,c,u,M.x,M.y)&&jt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=y;){if(_.x>=p&&_.x<=x&&_.y>=f&&_.y<=g&&_!==s&&_!==o&&bo(a,h,l,d,c,u,_.x,_.y)&&jt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Sg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Hr(n,s)&&np(n,t,t.next,s)&&Zo(n,s)&&Zo(s,n)&&(e.push(n.i,t.i,s.i),Jo(t),Jo(t.next),t=i=s),t=t.next}while(t!==i);return Ks(t)}function wg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lg(o,a)){let l=ip(o,a);o=Ks(o,o.next),l=Ks(l,l.next),Yo(o,e,t,n,s,r,0),Yo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Eg(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=ep(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Dg(c))}s.sort(Tg);for(let r=0;r<s.length;r++)t=Ag(s[r],t);return t}function Tg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Ag(i,e){let t=Rg(i,e);if(!t)return e;let n=ip(t,i);return Ks(n,n.next),Ks(t,t.next)}function Rg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Hr(i,t))return t;do{if(Hr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&tp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Zo(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Cg(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function Cg(i,e){return jt(i.prev,i,e.prev)<0&&jt(e.next,i,i.next)<0}function Pg(i,e,t,n){let s=i;do s.z===0&&(s.z=Zh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ig(s)}function Ig(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Zh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Dg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function tp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function bo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&tp(i,e,t,n,s,r,o,a)}function Lg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ng(i,e)&&(Zo(i,e)&&Zo(e,i)&&Ug(i,e)&&(jt(i.prev,i,e.prev)||jt(i,e.prev,e))||Hr(i,e)&&jt(i.prev,i,i.next)>0&&jt(e.prev,e,e.next)>0)}function jt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Hr(i,e){return i.x===e.x&&i.y===e.y}function np(i,e,t,n){let s=fl(jt(i,e,t)),r=fl(jt(i,e,n)),o=fl(jt(t,n,i)),a=fl(jt(t,n,e));return!!(s!==r&&o!==a||s===0&&dl(i,t,e)||r===0&&dl(i,n,e)||o===0&&dl(t,i,n)||a===0&&dl(t,e,n))}function dl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fl(i){return i>0?1:i<0?-1:0}function Ng(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&np(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Zo(i,e){return jt(i.prev,i,i.next)<0?jt(i,e,i.next)>=0&&jt(i,i.prev,e)>=0:jt(i,e,i.prev)<0||jt(i,i.next,e)<0}function Ug(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ip(i,e){let t=Jh(i.i,i.x,i.y),n=Jh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hf(i,e,t,n){let s=Jh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Jo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Kh=class{static triangulate(e,t,n=2){return _g(e,t,n)}},Ws=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];uf(e),df(n,e);let o=e.length;t.forEach(uf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,df(n,t[l]);let a=Kh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function uf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function df(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ko=class i extends zt{constructor(e=new kr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Og,M,_=!1,w,S,v,b;if(m){M=m.getSpacedPoints(h),_=!0,u=!1;let X=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,X),S=new L,v=new L,b=new L}u||(g=0,p=0,f=0,x=0);let R=a.extractPoints(c),T=R.shape,C=R.holes;if(!Ws.isClockWise(T)){T=T.reverse();for(let X=0,Q=C.length;X<Q;X++){let K=C[X];Ws.isClockWise(K)&&(C[X]=K.reverse())}}function N(X){let K=10000000000000001e-36,fe=X[0];for(let he=1;he<=X.length;he++){let He=he%X.length,De=X[He],it=De.x-fe.x,Xe=De.y-fe.y,pt=it*it+Xe*Xe,H=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(fe.x),Math.abs(fe.y)),$t=K*H*H;if(pt<=$t){X.splice(He,1),he--;continue}fe=De}}N(T),C.forEach(N);let D=C.length,O=T;for(let X=0;X<D;X++){let Q=C[X];T=T.concat(Q)}function G(X,Q,K){return Q||st("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(Q,K)}let B=T.length;function ee(X,Q,K){let fe,he,He,De=X.x-Q.x,it=X.y-Q.y,Xe=K.x-X.x,pt=K.y-X.y,H=De*De+it*it,$t=De*pt-it*Xe;if(Math.abs($t)>Number.EPSILON){let dt=Math.sqrt(H),Pt=Math.sqrt(Xe*Xe+pt*pt),we=Q.x-it/dt,Gt=Q.y+De/dt,$e=K.x-pt/Pt,Qe=K.y+Xe/Pt,I=(($e-we)*pt-(Qe-Gt)*Xe)/(De*pt-it*Xe);fe=we+De*I-X.x,he=Gt+it*I-X.y;let E=fe*fe+he*he;if(E<=2)return new ce(fe,he);He=Math.sqrt(E/2)}else{let dt=!1;De>Number.EPSILON?Xe>Number.EPSILON&&(dt=!0):De<-Number.EPSILON?Xe<-Number.EPSILON&&(dt=!0):Math.sign(it)===Math.sign(pt)&&(dt=!0),dt?(fe=-it,he=De,He=Math.sqrt(H)):(fe=De,he=it,He=Math.sqrt(H/2))}return new ce(fe/He,he/He)}let F=[];for(let X=0,Q=O.length,K=Q-1,fe=X+1;X<Q;X++,K++,fe++)K===Q&&(K=0),fe===Q&&(fe=0),F[X]=ee(O[X],O[K],O[fe]);let V=[],q,Se=F.concat();for(let X=0,Q=D;X<Q;X++){let K=C[X];q=[];for(let fe=0,he=K.length,He=he-1,De=fe+1;fe<he;fe++,He++,De++)He===he&&(He=0),De===he&&(De=0),q[fe]=ee(K[fe],K[He],K[De]);V.push(q),Se=Se.concat(q)}let j;if(g===0)j=Ws.triangulateShape(O,C);else{let X=[],Q=[];for(let K=0;K<g;K++){let fe=K/g,he=p*Math.cos(fe*Math.PI/2),He=f*Math.sin(fe*Math.PI/2)+x;for(let De=0,it=O.length;De<it;De++){let Xe=G(O[De],F[De],He);Be(Xe.x,Xe.y,-he),fe===0&&X.push(Xe)}for(let De=0,it=D;De<it;De++){let Xe=C[De];q=V[De];let pt=[];for(let H=0,$t=Xe.length;H<$t;H++){let dt=G(Xe[H],q[H],He);Be(dt.x,dt.y,-he),fe===0&&pt.push(dt)}fe===0&&Q.push(pt)}}j=Ws.triangulateShape(X,Q)}let W=j.length,oe=f+x;for(let X=0;X<B;X++){let Q=u?G(T[X],Se[X],oe):T[X];_?(v.copy(w.normals[0]).multiplyScalar(Q.x),S.copy(w.binormals[0]).multiplyScalar(Q.y),b.copy(M[0]).add(v).add(S),Be(b.x,b.y,b.z)):Be(Q.x,Q.y,0)}for(let X=1;X<=h;X++)for(let Q=0;Q<B;Q++){let K=u?G(T[Q],Se[Q],oe):T[Q];_?(v.copy(w.normals[X]).multiplyScalar(K.x),S.copy(w.binormals[X]).multiplyScalar(K.y),b.copy(M[X]).add(v).add(S),Be(b.x,b.y,b.z)):Be(K.x,K.y,d/h*X)}for(let X=g-1;X>=0;X--){let Q=X/g,K=p*Math.cos(Q*Math.PI/2),fe=f*Math.sin(Q*Math.PI/2)+x;for(let he=0,He=O.length;he<He;he++){let De=G(O[he],F[he],fe);Be(De.x,De.y,d+K)}for(let he=0,He=C.length;he<He;he++){let De=C[he];q=V[he];for(let it=0,Xe=De.length;it<Xe;it++){let pt=G(De[it],q[it],fe);_?Be(pt.x,pt.y+M[h-1].y,M[h-1].x+K):Be(pt.x,pt.y,d+K)}}}ve(),Te();function ve(){let X=s.length/3;if(u){let Q=0,K=B*Q;for(let fe=0;fe<W;fe++){let he=j[fe];ut(he[2]+K,he[1]+K,he[0]+K)}Q=h+g*2,K=B*Q;for(let fe=0;fe<W;fe++){let he=j[fe];ut(he[0]+K,he[1]+K,he[2]+K)}}else{for(let Q=0;Q<W;Q++){let K=j[Q];ut(K[2],K[1],K[0])}for(let Q=0;Q<W;Q++){let K=j[Q];ut(K[0]+B*h,K[1]+B*h,K[2]+B*h)}}n.addGroup(X,s.length/3-X,0)}function Te(){let X=s.length/3,Q=0;ge(O,Q),Q+=O.length;for(let K=0,fe=C.length;K<fe;K++){let he=C[K];ge(he,Q),Q+=he.length}n.addGroup(X,s.length/3-X,1)}function ge(X,Q){let K=X.length;for(;--K>=0;){let fe=K,he=K-1;he<0&&(he=X.length-1);for(let He=0,De=h+g*2;He<De;He++){let it=B*He,Xe=B*(He+1),pt=Q+fe+it,H=Q+he+it,$t=Q+he+Xe,dt=Q+fe+Xe;Oe(pt,H,$t,dt)}}}function Be(X,Q,K){l.push(X),l.push(Q),l.push(K)}function ut(X,Q,K){rt(X),rt(Q),rt(K);let fe=s.length/3,he=y.generateTopUV(n,s,fe-3,fe-2,fe-1);re(he[0]),re(he[1]),re(he[2])}function Oe(X,Q,K,fe){rt(X),rt(Q),rt(fe),rt(Q),rt(K),rt(fe);let he=s.length/3,He=y.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);re(He[0]),re(He[1]),re(He[3]),re(He[1]),re(He[2]),re(He[3])}function rt(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function re(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return zg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fl[s.type]().fromJSON(s)),new i(n,e.options)}},Og={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ce(r,o),new ce(a,l),new ce(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],p=e[s*3+1],f=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-d),new ce(u,1-f),new ce(x,1-m)]:[new ce(a,1-l),new ce(h,1-d),new ce(p,1-f),new ce(g,1-m)]}};function zg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Di=class i extends Ho{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var cn=class i extends zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,p=[],f=[],x=[],g=[];for(let m=0;m<h;m++){let y=m*u-o;for(let M=0;M<c;M++){let _=M*d-r;f.push(_,-y,0),x.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let M=y+c*m,_=y+c*(m+1),w=y+1+c*(m+1),S=y+1+c*m;p.push(M,_,S),p.push(_,w,S)}this.setIndex(p),this.setAttribute("position",new je(f,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Dt=class i extends zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new L,u=new L,p=[],f=[],x=[],g=[];for(let m=0;m<=n;m++){let y=[],M=m/n,_=o+M*a,w=e*Math.cos(_),S=Math.sqrt(e*e-w*w),v=0;m===0&&o===0?v=.5/t:m===n&&l===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){let R=b/t,T=s+R*r;d.x=-S*Math.cos(T),d.y=w,d.z=S*Math.sin(T),f.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(R+v,1-M),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let M=h[m][y+1],_=h[m][y],w=h[m+1][y],S=h[m+1][y+1];(m!==0||o>0)&&p.push(M,_,S),(m!==n-1||l<Math.PI)&&p.push(_,w,S)}this.setIndex(p),this.setAttribute("position",new je(f,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yi=class i extends zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new L,p=new L,f=new L;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let m=0;m<=s;m++){let y=m/s*r;p.x=(e+t*Math.cos(g))*Math.cos(y),p.y=(e+t*Math.cos(g))*Math.sin(y),p.z=t*Math.sin(g),c.push(p.x,p.y,p.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(p,u).normalize(),h.push(f.x,f.y,f.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,M=(s+1)*(x-1)+g,_=(s+1)*x+g;l.push(m,y,_),l.push(y,M,_)}this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var jo=class i extends zt{constructor(e=new Xo(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new ce,h=new L,d=[],u=[],p=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(p,2));function x(){for(let M=0;M<t;M++)g(M);g(r===!1?t:0),y(),m()}function g(M){h=e.getPointAt(M/t,h);let _=o.normals[M],w=o.binormals[M];for(let S=0;S<=s;S++){let v=S/s*Math.PI*2,b=Math.sin(v),R=-Math.cos(v);l.x=R*_.x+b*w.x,l.y=R*_.y+b*w.y,l.z=R*_.z+b*w.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=t;M++)for(let _=1;_<=s;_++){let w=(s+1)*(M-1)+(_-1),S=(s+1)*M+(_-1),v=(s+1)*M+_,b=(s+1)*(M-1)+_;f.push(w,S,b),f.push(S,v,b)}}function y(){for(let M=0;M<=t;M++)for(let _=0;_<=s;_++)c.x=M/t,c.y=_/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Fl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ff(s))s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ff(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ln(i){let e={};for(let t=0;t<i.length;t++){let n=rr(i[t]);for(let s in n)e[s]=n[s]}return e}function ff(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var On={clone:rr,merge:Ln},kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Et=class extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new at().fromArray(s.value);break;case"m4":this.uniforms[n].value=new yt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Gr=class extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tt=class extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_i=class extends tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Xs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Xs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Qo=class extends xi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var zl=class extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bl=class extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Er(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function pl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var _s=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kl=class extends _s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qh:r=e,a=2*t-n;break;case $h:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qh:o=e,l=2*n-t;break;case $h:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(n-t)/(s-t),x=f*f,g=x*f,m=-u*g+2*u*x-u*f,y=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*f+1,M=(-1-p)*g+(1.5+p)*x+.5*f,_=p*g-p*x;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+y*o[c+w]+M*o[l+w]+_*o[d+w];return r}},Hl=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Gl=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vl=class extends _s{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let f=(n-t)/(s-t),x=1-f;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*f;return r}let u=a*2,p=e-1;for(let f=0;f!==a;++f){let x=o[c+f],g=o[l+f],m=p*u+f*2,y=d[m],M=d[m+1],_=e*u+f*2,w=h[_],S=h[_+1],v=Vg(n,t,y,w,s);r[f]=sp(v,x,M,S,g)}return r}};function sp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Gg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Vg(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=sp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Gg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),pl(e.settings)&&(n.settings={inTangents:Er(e.settings.inTangents,Array),outTangents:Er(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ao:t=this.InterpolantFactoryMethodDiscrete;break;case Rl:t=this.InterpolantFactoryMethodLinear;break;case xl:t=this.InterpolantFactoryMethodSmooth;break;case Wh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return Rl;case this.InterpolantFactoryMethodSmooth:return xl;case this.InterpolantFactoryMethodBezier:return Wh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;pl(this.settings)&&(pf(this.settings.inTangents,e),pf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;pl(this.settings)&&(mf(this.settings.inTangents,e),mf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){st("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){st("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&D0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){st("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,p=d+n;for(let f=0;f!==n;++f){let x=t[d+f];if(x!==t[u+f]||x!==t[p+f]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,pl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function mf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Rl;var Ms=class extends Kn{constructor(e,t,n){super(e,t,n)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Ao;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}};Wl.prototype.ValueTypeName="color";var Xl=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}};Xl.prototype.ValueTypeName="number";var ql=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ii.slerpFlat(r,0,o,c-a,o,c,l);return r}},ea=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Kn{constructor(e,t,n){super(e,t,n)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Ao;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}};$l.prototype.ValueTypeName="vector";var yl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(gf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!gf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function gf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Yl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rp=new Yl,Vr=class{constructor(e){this.manager=e!==void 0?e:rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Vr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tr=new WeakMap,Zl=class extends Vr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=yl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Tr.get(o);d===void 0&&(d=[],Tr.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=Dr("img");function l(){h(),t&&t(this);let d=Tr.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onLoad&&p.onLoad(this)}Tr.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),yl.remove(`image:${e}`);let u=Tr.get(this)||[];for(let p=0;p<u.length;p++){let f=u[p];f.onError&&f.onError(d)}Tr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),yl.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var js=class extends Vr{constructor(e){super(e)}load(e,t,n,s){let r=new In,o=new Zl(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Qs=class extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ta=class extends Qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Vh=new yt,xf=new L,vf=new L,Wr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(xf),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Vh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ir||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ml=new L,gl=new ii,Ti=new L,na=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ml,gl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ml,gl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new L,yf=new ce,_f=new ce,bn=class extends na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,yf,_f),t.subVectors(_f,yf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(So*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},jh=class extends Wr{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=qs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ia=class extends Qs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Qh=class extends Wr{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}},er=class extends Qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},tr=class extends na{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},eu=class extends Wr{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sa=class extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new eu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ar=-90,Rr=1,Xr=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(Ar,Rr,e,t);s.layers=this.layers,this.add(s);let r=new bn(Ar,Rr,e,t);r.layers=this.layers,this.add(r);let o=new bn(Ar,Rr,e,t);o.layers=this.layers,this.add(o);let a=new bn(Ar,Rr,e,t);a.layers=this.layers,this.add(a);let l=new bn(Ar,Rr,e,t);l.layers=this.layers,this.add(l);let c=new bn(Ar,Rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Jl=class extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ra=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Wg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Wg(){this._document.hidden===!1&&this.reset()}var Au="\\[\\]\\.:\\/",Xg=new RegExp("["+Au+"]","g"),Ru="[^"+Au+"]",qg="[^"+Au.replace("\\.","")+"]",$g=/((?:WC+[\/:])*)/.source.replace("WC",Ru),Yg=/(WCOD+)?/.source.replace("WCOD",qg),Zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),Jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),Kg=new RegExp("^"+$g+Yg+Zg+Jg+"$"),jg=["material","materials","bones","map"],tu=class{constructor(e,t,n){let s=n||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},qt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(e){let t=Kg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;st("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qt.Composite=tu;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nS=new Float32Array(1);var nu=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Cu(i,e,t,n){let s=Qg(n);switch(t){case pu:return i*e;case rc:return i*e/s.components*s.byteLength;case oc:return i*e/s.components*s.byteLength;case ws:return i*e*2/s.components*s.byteLength;case ac:return i*e*2/s.components*s.byteLength;case mu:return i*e*3/s.components*s.byteLength;case jn:return i*e*4/s.components*s.byteLength;case lc:return i*e*4/s.components*s.byteLength;case ga:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case va:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:case dc:return Math.max(i,16)*Math.max(e,8)/4;case cc:case uc:return Math.max(i,8)*Math.max(e,8)/2;case fc:case pc:case gc:case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mc:case _a:case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Lc:case Nc:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fc:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ma:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qg(i){switch(i){case Dn:case hu:return{byteLength:1,components:1};case Zr:case uu:case sn:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case Mi:case nc:case oi:return{byteLength:4,components:1};case du:case fu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ap(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sx(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,f)=>p.start-f.start);let u=0;for(let p=1;p<d.length;p++){let f=d[u],x=d[p];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,f=d.length;p<f;p++){let x=d[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ox=`#ifdef USE_ALPHAHASH
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
#endif`,ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ux=`#ifdef USE_AOMAP
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
#endif`,dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fx=`#ifdef USE_BATCHING
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
#endif`,px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vx=`#ifdef USE_IRIDESCENCE
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
#endif`,yx=`#ifdef USE_BUMPMAP
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
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rx=`#define PI 3.141592653589793
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
} // validated`,Cx=`vec3 transformedNormal = objectNormal;
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
#endif`,Px=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ux=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xx=`#ifdef USE_GRADIENTMAP
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
}`,qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tv=`PhysicalMaterial material;
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
#endif`,nv=`uniform sampler2D dfgLUT;
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
}`,iv=`
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
#endif`,sv=`#if defined( RE_IndirectDiffuse )
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
#endif`,rv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ov=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pv=`#if defined( USE_POINTS_UV )
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
#endif`,mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vv=`#if defined( USE_MORPHCOLORS )
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
#endif`,yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_v=`#ifdef USE_MORPHTARGETS
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
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Av=`#ifdef USE_NORMALMAP
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
#endif`,Rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vv=`float getShadowMask() {
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
}`,Wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xv=`#ifdef USE_SKINNING
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
#endif`,qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,Yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jv=`#ifdef USE_TRANSMISSION
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
#endif`,Qv=`#ifdef USE_TRANSMISSION
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
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ry=`uniform sampler2D t2D;
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`uniform float backgroundBlurriness;
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`#include <common>
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
}`,uy=`#if DEPTH_PACKING == 3200
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
}`,dy=`#define DISTANCE
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
}`,fy=`#define DISTANCE
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
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,my=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`uniform float scale;
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
}`,xy=`uniform vec3 diffuse;
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
}`,vy=`#include <common>
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
}`,yy=`uniform vec3 diffuse;
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
}`,_y=`#define LAMBERT
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
}`,My=`#define LAMBERT
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
}`,by=`#define MATCAP
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
}`,Sy=`#define MATCAP
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
}`,wy=`#define NORMAL
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
}`,Ey=`#define NORMAL
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
}`,Ty=`#define PHONG
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
}`,Ay=`#define PHONG
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
}`,Ry=`#define STANDARD
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
}`,Cy=`#define STANDARD
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
}`,Py=`#define TOON
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
}`,Iy=`#define TOON
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
}`,Dy=`uniform float size;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,Uy=`uniform vec3 color;
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
}`,Fy=`uniform float rotation;
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
}`,Oy=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:rx,alphahash_pars_fragment:ox,alphamap_fragment:ax,alphamap_pars_fragment:lx,alphatest_fragment:cx,alphatest_pars_fragment:hx,aomap_fragment:ux,aomap_pars_fragment:dx,batching_pars_vertex:fx,batching_vertex:px,begin_vertex:mx,beginnormal_vertex:gx,bsdfs:xx,iridescence_fragment:vx,bumpmap_pars_fragment:yx,clipping_planes_fragment:_x,clipping_planes_pars_fragment:Mx,clipping_planes_pars_vertex:bx,clipping_planes_vertex:Sx,color_fragment:wx,color_pars_fragment:Ex,color_pars_vertex:Tx,color_vertex:Ax,common:Rx,defaultnormal_vertex:Cx,displacementmap_pars_vertex:Px,displacementmap_vertex:Ix,emissivemap_fragment:Dx,emissivemap_pars_fragment:Lx,colorspace_fragment:Nx,colorspace_pars_fragment:Ux,envmap_fragment:Fx,envmap_common_pars_fragment:Ox,envmap_pars_fragment:zx,envmap_pars_vertex:Bx,envmap_physical_pars_fragment:Jx,envmap_vertex:kx,fog_vertex:Hx,fog_pars_vertex:Gx,fog_fragment:Vx,fog_pars_fragment:Wx,gradientmap_pars_fragment:Xx,lightmap_pars_fragment:qx,lights_lambert_fragment:$x,lights_lambert_pars_fragment:Yx,lights_pars_begin:Zx,lights_toon_fragment:Kx,lights_toon_pars_fragment:jx,lights_phong_fragment:Qx,lights_phong_pars_fragment:ev,lights_physical_fragment:tv,lights_physical_pars_fragment:nv,lights_fragment_begin:iv,lights_fragment_maps:sv,lights_fragment_end:rv,lightprobes_pars_fragment:ov,logdepthbuf_fragment:av,logdepthbuf_pars_fragment:lv,logdepthbuf_pars_vertex:cv,logdepthbuf_vertex:hv,map_fragment:uv,map_pars_fragment:dv,map_particle_fragment:fv,map_particle_pars_fragment:pv,metalnessmap_fragment:mv,metalnessmap_pars_fragment:gv,morphinstance_vertex:xv,morphcolor_vertex:vv,morphnormal_vertex:yv,morphtarget_pars_vertex:_v,morphtarget_vertex:Mv,normal_fragment_begin:bv,normal_fragment_maps:Sv,normal_pars_fragment:wv,normal_pars_vertex:Ev,normal_vertex:Tv,normalmap_pars_fragment:Av,clearcoat_normal_fragment_begin:Rv,clearcoat_normal_fragment_maps:Cv,clearcoat_pars_fragment:Pv,iridescence_pars_fragment:Iv,opaque_fragment:Dv,packing:Lv,premultiplied_alpha_fragment:Nv,project_vertex:Uv,dithering_fragment:Fv,dithering_pars_fragment:Ov,roughnessmap_fragment:zv,roughnessmap_pars_fragment:Bv,shadowmap_pars_fragment:kv,shadowmap_pars_vertex:Hv,shadowmap_vertex:Gv,shadowmask_pars_fragment:Vv,skinbase_vertex:Wv,skinning_pars_vertex:Xv,skinning_vertex:qv,skinnormal_vertex:$v,specularmap_fragment:Yv,specularmap_pars_fragment:Zv,tonemapping_fragment:Jv,tonemapping_pars_fragment:Kv,transmission_fragment:jv,transmission_pars_fragment:Qv,uv_pars_fragment:ey,uv_pars_vertex:ty,uv_vertex:ny,worldpos_vertex:iy,background_vert:sy,background_frag:ry,backgroundCube_vert:oy,backgroundCube_frag:ay,cube_vert:ly,cube_frag:cy,depth_vert:hy,depth_frag:uy,distance_vert:dy,distance_frag:fy,equirect_vert:py,equirect_frag:my,linedashed_vert:gy,linedashed_frag:xy,meshbasic_vert:vy,meshbasic_frag:yy,meshlambert_vert:_y,meshlambert_frag:My,meshmatcap_vert:by,meshmatcap_frag:Sy,meshnormal_vert:wy,meshnormal_frag:Ey,meshphong_vert:Ty,meshphong_frag:Ay,meshphysical_vert:Ry,meshphysical_frag:Cy,meshtoon_vert:Py,meshtoon_frag:Iy,points_vert:Dy,points_frag:Ly,shadow_vert:Ny,shadow_frag:Uy,sprite_vert:Fy,sprite_frag:Oy},Ue={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ui={basic:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Ln([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Ln([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ne(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Ln([Ue.points,Ue.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Ln([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Ln([Ue.common,Ue.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Ln([Ue.sprite,Ue.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Ln([Ue.common,Ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Ln([Ue.lights,Ue.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ui.physical={uniforms:Ln([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var Hc={r:0,b:0,g:0},zy=new yt,Rp=new at;Rp.set(-1,0,0,0,1,0,0,0,1);function By(i,e,t,n,s,r){let o=new Ne(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function p(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let _=y.backgroundBlurriness>0;M=e.get(M,_)}return M}function f(y){let M=!1,_=p(y);_===null?g(o,a):_&&_.isColor&&(g(_,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,M){let _=p(M);_&&_.isCubeTexture?(c===void 0&&(c=new Ce(new nn(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:rr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zy.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rp),c.material.toneMapped=vt.getTransfer(_.colorSpace)!==Tt,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ce(new cn(2,2),new Et({name:"BackgroundMaterial",uniforms:rr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=vt.getTransfer(_.colorSpace)!==Tt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,M){y.getRGB(Hc,Tu(i)),t.buffers.color.setClear(Hc.r,Hc.g,Hc.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:f,addToRenderList:x,dispose:m}}function ky(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(C,P,N,D,O){let G=!1,B=d(C,D,N,P);r!==B&&(r=B,c(r.object)),G=p(C,D,N,O),G&&f(C,D,N,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(C,P,N,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,P,N,D){let O=D.wireframe===!0,G=n[P.id];G===void 0&&(G={},n[P.id]=G);let B=C.isInstancedMesh===!0?C.id:0,ee=G[B];ee===void 0&&(ee={},G[B]=ee);let F=ee[N.id];F===void 0&&(F={},ee[N.id]=F);let V=F[O];return V===void 0&&(V=u(l()),F[O]=V),V}function u(C){let P=[],N=[],D=[];for(let O=0;O<t;O++)P[O]=0,N[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:D,object:C,attributes:{},index:null}}function p(C,P,N,D){let O=r.attributes,G=P.attributes,B=0,ee=N.getAttributes();for(let F in ee)if(ee[F].location>=0){let q=O[F],Se=G[F];if(Se===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor)),q===void 0||q.attribute!==Se||Se&&q.data!==Se.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function f(C,P,N,D){let O={},G=P.attributes,B=0,ee=N.getAttributes();for(let F in ee)if(ee[F].location>=0){let q=G[F];q===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(q=C.instanceColor));let Se={};Se.attribute=q,q&&q.data&&(Se.data=q.data),O[F]=Se,B++}r.attributes=O,r.attributesNum=B,r.index=D}function x(){let C=r.newAttributes;for(let P=0,N=C.length;P<N;P++)C[P]=0}function g(C){m(C,0)}function m(C,P){let N=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;N[C]=1,D[C]===0&&(i.enableVertexAttribArray(C),D[C]=1),O[C]!==P&&(i.vertexAttribDivisor(C,P),O[C]=P)}function y(){let C=r.newAttributes,P=r.enabledAttributes;for(let N=0,D=P.length;N<D;N++)P[N]!==C[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function M(C,P,N,D,O,G,B){B===!0?i.vertexAttribIPointer(C,P,N,O,G):i.vertexAttribPointer(C,P,N,D,O,G)}function _(C,P,N,D){x();let O=D.attributes,G=N.getAttributes(),B=P.defaultAttributeValues;for(let ee in G){let F=G[ee];if(F.location>=0){let V=O[ee];if(V===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(V=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(V=C.instanceColor)),V!==void 0){let q=V.normalized,Se=V.itemSize,j=e.get(V);if(j===void 0)continue;let W=j.buffer,oe=j.type,ve=j.bytesPerElement,Te=oe===i.INT||oe===i.UNSIGNED_INT||V.gpuType===nc;if(V.isInterleavedBufferAttribute){let ge=V.data,Be=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,ut=V.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Oe=0;Oe<F.locationSize;Oe++)m(F.location+Oe,ge.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Oe=0;Oe<F.locationSize;Oe++)g(F.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Oe=0;Oe<F.locationSize;Oe++)M(F.location+Oe,Se/F.locationSize,oe,q,Be*ve,(ut+Se/F.locationSize*Oe)*ve,Te)}else{if(V.isInstancedBufferAttribute){for(let ge=0;ge<F.locationSize;ge++)m(F.location+ge,V.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ge=0;ge<F.locationSize;ge++)g(F.location+ge);i.bindBuffer(i.ARRAY_BUFFER,W);for(let ge=0;ge<F.locationSize;ge++)M(F.location+ge,Se/F.locationSize,oe,q,Se*ve,Se/F.locationSize*ge*ve,Te)}}else if(B!==void 0){let q=B[ee];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(F.location,q);break;case 3:i.vertexAttrib3fv(F.location,q);break;case 4:i.vertexAttrib4fv(F.location,q);break;default:i.vertexAttrib1fv(F.location,q)}}}}y()}function w(){R();for(let C in n){let P=n[C];for(let N in P){let D=P[N];for(let O in D){let G=D[O];for(let B in G)h(G[B].object),delete G[B];delete D[O]}}delete n[C]}}function S(C){if(n[C.id]===void 0)return;let P=n[C.id];for(let N in P){let D=P[N];for(let O in D){let G=D[O];for(let B in G)h(G[B].object),delete G[B];delete D[O]}}delete n[C.id]}function v(C){for(let P in n){let N=n[P];for(let D in N){let O=N[D];if(O[C.id]===void 0)continue;let G=O[C.id];for(let B in G)h(G[B].object),delete G[B];delete O[C.id]}}}function b(C){for(let P in n){let N=n[P],D=C.isInstancedMesh===!0?C.id:0,O=N[D];if(O!==void 0){for(let G in O){let B=O[G];for(let ee in B)h(B[ee].object),delete B[ee];delete O[G]}delete N[D],Object.keys(N).length===0&&delete n[P]}}}function R(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Hy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Gy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==jn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let b=v===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Dn&&v!==oi&&!b&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,maxSamples:w,samples:S}}function Vy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new mi,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let f=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||f===null||f.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,M=y*4,_=m.clippingState||null;l.value=_,_=h(f,u,M,p);for(let w=0;w!==M;++w)_[w]=t[w];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,f){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,f!==!0||g===null){let m=p+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,_=p;M!==x;++M,_+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Ea=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new zo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nn(5,5,5),r=new Et({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:yn});r.uniforms.tEquirect.value=t;let o=new Ce(s,r),a=t.minFilter;return t.minFilter===ns&&(t.minFilter=Fn),new Xr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},op=256,Wy=3,Xy=20,Cp=256,Pp=16,qy=3,$y=new L,Yy=new Ne,Kr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xr(1,10,null),this._boxMesh=new Ce(new nn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=$y}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Yy));let g=new Xr(n,s,h);return g.position.copy(a),g.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=f,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(op,bu(e))}_fromTexture(e,t){e.mapping===sr||e.mapping===Yr?this._setSize(e.image.length===0?op:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=ap(e,!1,!1),n=Math.log2(e)-Wy;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ap(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===sr||e.mapping===Yr?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=lp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Zy(),this._integrationMaterial=Jy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Pp);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-qy)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Cp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ky());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function ap(i,e,t){return new Ea(i,{minFilter:ns,generateMipmaps:e,type:sn,colorSpace:Ro,depthBuffer:t})}function Ta(i,e,t){return new Et({name:i,uniforms:e,vertexShader:gt.cube_vert,fragmentShader:t,side:hn,blending:yn,depthTest:!1,depthWrite:!1})}function Zy(){return Ta("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Cp}u

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
	`)}function Jy(){return Ta("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Pp}},`

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
	`)}function Ky(){return Ta("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Xy}
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
	`)}function lp(){return Ta("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function cp(){return Ta("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ql||p===ec)if(e.has(u)){let f=e.get(u).texture;return a(f,u.mapping)}else{let f=u.image;if(f&&f.height>0){let x=new Ea(f.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,f=p===Ql||p===ec,x=p===sr||p===Yr;if(f||x){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Kr(i)),g=f?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return f&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Kr(i)),g=f?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,p){return p===Ql?u.mapping=sr:p===ec&&(u.mapping=Yr),u}function l(u){let p=0,f=6;for(let x=0;x<f;x++)u[x]!==void 0&&p++;return p===f}function c(u){let p=u.target;p.removeEventListener("dispose",c);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Qy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Xs("WebGLRenderer: "+n+" extension not supported."),s}}}function e_(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(f=>delete s[f]);function a(f){l(f.target)}function l(f){f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id],o.unregister(f);let x=r.get(f);x&&(e.remove(x),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(f,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(f){let x=f.attributes;for(let g in x)e.update(x[g],i.ARRAY_BUFFER)}function d(f){let x=f.index,g=f.attributes.position,m=0;if(g===void 0)return;let y=x!==null?x.array.length:g.array.length/3-1,M=g.count>=65535?Uo:No,_=new M(Math.ceil(y/3)*6,1),w=_.array;if(x!==null){let v=x.array;m=x.version;for(let b=0,R=0;b<y;b+=3){let T=v[b+0],C=v[b+1],P=v[b+2];w[R++]=T,w[R++]=C,w[R++]=C,w[R++]=P,w[R++]=P,w[R++]=T}}else{m=g.version;for(let v=0,b=0;v<y;v+=3){let R=v+0,T=v+1,C=v+2;w[b++]=R,w[b++]=T,w[b++]=T,w[b++]=C,w[b++]=C,w[b++]=R}}_.version=m;let S=r.get(f);S&&e.remove(S),r.set(f,_)}function u(f){let x=r.get(f);if(x){let g=f.index;g!==null&&x.version<g.version&&d(f)}else d(f);return r.get(f)}function p(){for(let f in s){let x=s[f].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function t_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*o,p),t.update(u,n,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let x=0;for(let g=0;g<p;g++)x+=u[g];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function n_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:st("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function i_(i,e,t){let n=new WeakMap,s=new Yt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let R=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;p===!0&&(M=1),f===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*w*4*d),v=new Io(S,_,w,d);v.type=oi,v.needsUpdate=!0;let b=M*4;for(let T=0;T<d;T++){let C=g[T],P=m[T],N=y[T],D=_*w*4*T;for(let O=0;O<C.count;O++){let G=O*b;p===!0&&(s.fromBufferAttribute(C,O),S[D+G+0]=s.x,S[D+G+1]=s.y,S[D+G+2]=s.z,S[D+G+3]=0),f===!0&&(s.fromBufferAttribute(P,O),S[D+G+4]=s.x,S[D+G+5]=s.y,S[D+G+6]=s.z,S[D+G+7]=0),x===!0&&(s.fromBufferAttribute(N,O),S[D+G+8]=s.x,S[D+G+9]=s.y,S[D+G+10]=s.z,S[D+G+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:v,size:new ce(_,w)},n.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function s_(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var r_={[ca]:"LINEAR_TONE_MAPPING",[ha]:"REINHARD_TONE_MAPPING",[ua]:"CINEON_TONE_MAPPING",[ir]:"ACES_FILMIC_TONE_MAPPING",[fa]:"AGX_TONE_MAPPING",[pa]:"NEUTRAL_TONE_MAPPING",[da]:"CUSTOM_TONE_MAPPING"};function o_(i,e,t,n,s,r){let o=new Zt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new zt;h.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new je([0,2,0,0,2,0],2));let d=new Gr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ce(h,d),p=new tr(-1,1,1,-1,0,1),f=null,x=null,g=!1,m,y=null,M=[],_=!1;this.setSize=function(w,S){o.setSize(w,S),a!==null&&a.setSize(w,S),l!==null&&l.setSize(w,S);for(let v=0;v<M.length;v++){let b=M[v];b.setSize&&b.setSize(w,S)}},this.setEffects=function(w){M=w,_=M.length>0&&M[0].isRenderPass===!0;let S=o.width,v=o.height;M.length>0&&a===null&&(a=new Zt(S,v,{type:sn,depthBuffer:!1,stencilBuffer:!1}),l=new Zt(S,v,{type:sn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&M.some(R=>R.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new vi(S,v),r===!0&&(c.format=bi,c.type=is)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let R=0;R<M.length;R++){let T=M[R];T.setSize&&T.setSize(S,v),b&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(w,S){if(g||w.toneMapping===Li&&M.length===0)return!1;if(y=S,S!==null){let v=S.width,b=S.height;(o.width!==v||o.height!==b)&&this.setSize(v,b)}return _===!1&&w.setRenderTarget(o),m=w.toneMapping,w.toneMapping=Li,!0},this.hasRenderPass=function(){return _},this.end=function(w,S){w.toneMapping=m,g=!0;let v=o,b=a;for(let R=0;R<M.length;R++){let T=M[R];T.enabled!==!1&&(T.render(w,b,v,S),T.needsSwap!==!1&&(v=b,b=b===a?l:a))}if(f!==w.outputColorSpace||x!==w.toneMapping){f=w.outputColorSpace,x=w.toneMapping,d.defines={},vt.getTransfer(f)===Tt&&(d.defines.SRGB_TRANSFER="");let R=r_[x];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(y),w.render(u,p),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Ip=new In,Dp=new vi(1,1),Lp=new Bo(1),Np=new Io,Up=new Il,Fp=new zo,hp=[],up=[],dp=new Float32Array(16),fp=new Float32Array(9),pp=new Float32Array(4);function jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=hp[s];if(r===void 0&&(r=new Float32Array(s),hp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function dn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wc(i,e){let t=up[e];t===void 0&&(t=new Int32Array(e),up[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function a_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function u_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;pp.set(n),i.uniformMatrix2fv(this.addr,!1,pp),fn(t,n)}}function d_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;fp.set(n),i.uniformMatrix3fv(this.addr,!1,fp),fn(t,n)}}function f_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;dp.set(n),i.uniformMatrix4fv(this.addr,!1,dp),fn(t,n)}}function p_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function v_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function Xc(i){return i.version===0&&(i.compareFunction=vu,i.needsUpdate=!0),i}function b_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Xc(Dp):r=Ip,t.setTexture2D(e||r,s)}function S_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Up,s)}function w_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Xc(Lp):r=Fp,t.setTextureCube(e||r,s)}function E_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Np,s)}function T_(i){switch(i){case 5126:return a_;case 35664:return l_;case 35665:return c_;case 35666:return h_;case 35674:return u_;case 35675:return d_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return x_;case 5125:return v_;case 36294:return y_;case 36295:return __;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return E_}}function A_(i,e){i.uniform1fv(this.addr,e)}function R_(i,e){let t=jr(e,this.size,2);i.uniform2fv(this.addr,t)}function C_(i,e){let t=jr(e,this.size,3);i.uniform3fv(this.addr,t)}function P_(i,e){let t=jr(e,this.size,4);i.uniform4fv(this.addr,t)}function I_(i,e){let t=jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function D_(i,e){let t=jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function L_(i,e){let t=jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function N_(i,e){i.uniform1iv(this.addr,e)}function U_(i,e){i.uniform2iv(this.addr,e)}function F_(i,e){i.uniform3iv(this.addr,e)}function O_(i,e){i.uniform4iv(this.addr,e)}function z_(i,e){i.uniform1uiv(this.addr,e)}function B_(i,e){i.uniform2uiv(this.addr,e)}function k_(i,e){i.uniform3uiv(this.addr,e)}function H_(i,e){i.uniform4uiv(this.addr,e)}function G_(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Xc(Dp):o=Ip;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function V_(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Up,r[o])}function W_(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Xc(Lp):o=Fp;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function X_(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Np,r[o])}function q_(i){switch(i){case 5126:return A_;case 35664:return R_;case 35665:return C_;case 35666:return P_;case 35674:return I_;case 35675:return D_;case 35676:return L_;case 5124:case 35670:return N_;case 35667:case 35671:return U_;case 35668:case 35672:return F_;case 35669:case 35673:return O_;case 5125:return z_;case 36294:return B_;case 36295:return k_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}var Du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=T_(t.type)}},Lu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q_(t.type)}},Nu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Pu=/(\w+)(\])?(\[|\.)?/g;function mp(i,e){i.seq.push(e),i.map[e.id]=e}function $_(i,e,t){let n=i.name,s=n.length;for(Pu.lastIndex=0;;){let r=Pu.exec(n),o=Pu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mp(t,c===void 0?new Du(a,i,e):new Lu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Nu(a),mp(t,d)),t=d}}}var Jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);$_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function gp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Y_=37297,Z_=0;function J_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var xp=new at;function K_(i){vt._getMatrix(xp,vt.workingColorSpace,i);let e=`mat3( ${xp.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(i)){case Co:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+J_(i.getShaderSource(e),a)}else return r}function j_(i,e){let t=K_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Q_={[ca]:"Linear",[ha]:"Reinhard",[ua]:"Cineon",[ir]:"ACESFilmic",[fa]:"AgX",[pa]:"Neutral",[da]:"Custom"};function eM(i,e){let t=Q_[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gc=new L;function tM(){vt.getLuminanceCoefficients(Gc);let i=Gc.x.toFixed(4),e=Gc.y.toFixed(4),t=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function iM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wa(i){return i!==""}function yp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function _p(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(i){return i.replace(rM,oM)}function oM(i,e){let t=gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Uu(t)}var aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mp(i){return i.replace(aM,lM)}function lM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var cM={[oa]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"};function hM(i){return cM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var uM={[Yr]:"ENVMAP_MODE_REFRACTION"};function dM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":uM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fM={[lu]:"ENVMAP_BLENDING_MULTIPLY",[Of]:"ENVMAP_BLENDING_MIX",[zf]:"ENVMAP_BLENDING_ADD"};function pM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fM[i.combine]||"ENVMAP_BLENDING_NONE"}function mM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=hM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=dM(t),d=pM(t),u=nM(t),p=iM(r),f=s.createProgram(),x,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(wa).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(wa).join(`
`),g.length>0&&(g+=`
`)):(x=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),g=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?gt.tonemapping_pars_fragment:"",t.toneMapping!==Li?eM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,j_("linearToOutputTexel",t.outputColorSpace),tM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),o=Uu(o),o=yp(o,t),o=_p(o,t),a=Uu(a),a=yp(a,t),a=_p(a,t),o=Mp(o),a=Mp(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=m+x+o,M=m+g+a,_=gp(s,s.VERTEX_SHADER,y),w=gp(s,s.FRAGMENT_SHADER,M);s.attachShader(f,_),s.attachShader(f,w),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function S(T){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(f)||"",P=s.getShaderInfoLog(_)||"",N=s.getShaderInfoLog(w)||"",D=C.trim(),O=P.trim(),G=N.trim(),B=!0,ee=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,_,w);else{let F=vp(s,_,"vertex"),V=vp(s,w,"fragment");st("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+D+`
`+F+`
`+V)}else D!==""?nt("WebGLProgram: Program Info Log:",D):(O===""||G==="")&&(ee=!1);ee&&(T.diagnostics={runnable:B,programLog:D,vertexShader:{log:O,prefix:x},fragmentShader:{log:G,prefix:g}})}s.deleteShader(_),s.deleteShader(w),v=new Jr(s,f),b=sM(s,f)}let v;this.getUniforms=function(){return v===void 0&&S(this),v};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(f,Y_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z_++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=_,this.fragmentShader=w,this}var gM=0,Fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ou(e),t.set(e,n)),n}},Ou=class{constructor(e){this.id=gM++,this.code=e,this.usedTimes=0}};function xM(i){return i===ws||i===_a||i===Ma}function vM(i,e,t,n,s,r){let o=new Do,a=new Fu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,b,R,T,C,P){let N=T.fog,D=C.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?T.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B=e.get(v.envMap||O,G),ee=u[v.type],F=n.precision;v.precision!==null&&(F=n.getMaxPrecision(v.precision),F!==v.precision&&nt("WebGLProgram.getParameters:",v.precision,"not supported, using",F,"instead."));let V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,q=V!==void 0?V.length:0,Se=0;D.morphAttributes.position!==void 0&&(Se=1),D.morphAttributes.normal!==void 0&&(Se=2),D.morphAttributes.color!==void 0&&(Se=3);let j,W,oe,ve;if(ee){let Le=Ui[ee];j=Le.vertexShader,W=Le.fragmentShader}else{j=v.vertexShader,W=v.fragmentShader;let Le=a.getVertexShaderStage(v),Ot=a.getFragmentShaderStage(v);a.update(v,Le,Ot),oe=Le.id,ve=Ot.id}let Te=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Be=C.isInstancedMesh===!0,ut=C.isBatchedMesh===!0,Oe=!!v.map,rt=!!v.matcap,re=!!B,X=re&&B.isPMREMTexture===!0,Q=!!v.aoMap,K=!!v.lightMap,fe=!!v.bumpMap&&v.wireframe===!1,he=!!v.normalMap,He=!!v.displacementMap,De=!!v.emissiveMap,it=!!v.metalnessMap,Xe=!!v.roughnessMap,pt=v.anisotropy>0,H=v.clearcoat>0,$t=v.diffuseRoughness>0,dt=v.dispersion>0,Pt=v.retroreflectivity>0,we=v.iridescence>0,Gt=v.sheen>0,$e=v.transmission>0,Qe=pt&&!!v.anisotropyMap,I=H&&!!v.clearcoatMap,E=H&&!!v.clearcoatNormalMap,$=H&&!!v.clearcoatRoughnessMap,pe=$t&&!!v.diffuseRoughnessMap,le=we&&!!v.iridescenceMap,xe=we&&!!v.iridescenceThicknessMap,Ee=Gt&&!!v.sheenColorMap,te=Gt&&!!v.sheenRoughnessMap,se=!!v.specularMap,ye=!!v.specularColorMap,z=!!v.specularIntensityMap,ae=$e&&!!v.transmissionMap,ne=$e&&!!v.thicknessMap,Re=!!v.gradientMap,be=!!v.alphaMap,Ae=v.alphaTest>0,Ye=!!v.alphaHash,mt=!!v.extensions,me=Li;v.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(me=i.toneMapping);let Ke=X?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,ft={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:j,fragmentShader:W,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:F,batching:ut,batchingColor:ut&&C._colorsTexture!==null,instancing:Be,instancingColor:Be&&C.instanceColor!==null,instancingMorph:Be&&C.morphTexture!==null,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Oe,matcap:rt,envMap:re,envMapMode:re&&B.mapping,envMapPMREM:X,envMapMaxLod:X?Ke.length-1:null,envMapSize:X?Ke[0].width:null,aoMap:Q,lightMap:K,bumpMap:fe,normalMap:he,displacementMap:He,emissiveMap:De,normalMapObjectSpace:he&&v.normalMapType===Hf,normalMapTangentSpace:he&&v.normalMapType===ba,packedNormalMap:he&&v.normalMapType===ba&&xM(v.normalMap.format),metalnessMap:it,roughnessMap:Xe,anisotropy:pt,anisotropyMap:Qe,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:$,diffuseRoughness:$t,diffuseRoughnessMap:pe,dispersion:dt,retroreflection:Pt,iridescence:we,iridescenceMap:le,iridescenceThicknessMap:xe,sheen:Gt,sheenColorMap:Ee,sheenRoughnessMap:te,specularMap:se,specularColorMap:ye,specularIntensityMap:z,transmission:$e,transmissionMap:ae,thicknessMap:ne,gradientMap:Re,opaque:v.transparent===!1&&v.blending===$r&&v.alphaToCoverage===!1,alphaMap:be,alphaTest:Ae,alphaHash:Ye,combine:v.combine,mapUv:Oe&&p(v.map.channel),aoMapUv:Q&&p(v.aoMap.channel),lightMapUv:K&&p(v.lightMap.channel),bumpMapUv:fe&&p(v.bumpMap.channel),normalMapUv:he&&p(v.normalMap.channel),displacementMapUv:He&&p(v.displacementMap.channel),emissiveMapUv:De&&p(v.emissiveMap.channel),metalnessMapUv:it&&p(v.metalnessMap.channel),roughnessMapUv:Xe&&p(v.roughnessMap.channel),anisotropyMapUv:Qe&&p(v.anisotropyMap.channel),clearcoatMapUv:I&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:le&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:te&&p(v.sheenRoughnessMap.channel),specularMapUv:se&&p(v.specularMap.channel),specularColorMapUv:ye&&p(v.specularColorMap.channel),specularIntensityMapUv:z&&p(v.specularIntensityMap.channel),transmissionMapUv:ae&&p(v.transmissionMap.channel),thicknessMapUv:ne&&p(v.thicknessMap.channel),alphaMapUv:be&&p(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(he||pt),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!D.attributes.uv&&(Oe||be),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&he===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:Se,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:P.filter(Le=>Le.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:Oe&&v.map.isVideoTexture===!0&&vt.getTransfer(v.map.colorSpace)===Tt,decodeVideoTextureEmissive:De&&v.emissiveMap.isVideoTexture===!0&&vt.getTransfer(v.emissiveMap.colorSpace)===Tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Sn,flipSided:v.side===hn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:mt&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&v.extensions.multiDraw===!0||ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function x(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)b.push(R),b.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(g(b,v),m(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function g(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function m(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){let b=u[v.type],R;if(b){let T=Ui[b];R=On.clone(T.uniforms)}else R=v.uniforms;return R}function M(v,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new mM(i,b,v,s),c.push(R),h.set(b,R)),R}function _(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function S(){a.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:y,acquireProgram:M,releaseProgram:_,releaseShaderCache:w,programs:c,dispose:S}}function yM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function _M(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Sp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,f,x,g,m){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:p,material:f,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[e]=y):(y.id=u.id,y.object=u,y.geometry=p,y.material=f,y.materialVariant=o(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=g,y.group=m),e++,y}function l(u,p,f,x,g,m,y){y.reversedDepth===!0&&(g=-g);let M=a(u,p,f,x,g,m);f.transmission>0?n.push(M):f.transparent===!0?s.push(M):t.push(M)}function c(u,p,f,x,g,m){let y=a(u,p,f,x,g,m);f.transmission>0?n.unshift(y):f.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,p){t.length>1&&t.sort(u||_M),n.length>1&&n.sort(p||Sp),s.length>1&&s.sort(p||Sp)}function d(){for(let u=e,p=i.length;u<p;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function MM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new wp,i.set(n,[o])):s>=r.length?(o=new wp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function bM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ne};break;case"SpotLight":t={position:new L,direction:new L,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function SM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var wM=0;function EM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function TM(i){let e=new bM,t=SM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new yt,o=new yt;function a(c){let h=0,d=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let p=0,f=0,x=0,g=0,m=0,y=0,M=0,_=0,w=0,S=0,v=0,b=0,R=0,T=0;c.sort(EM);for(let P=0,N=c.length;P<N;P++){let D=c[P],O=D.color,G=D.intensity,B=D.distance,ee=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ws?ee=D.shadow.map.texture:ee=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*G,d+=O.g*G,u+=O.b*G;else if(D.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(D.sh.coefficients[F],G);T++}else if(D.isSunLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let V=D.shadow,q=t.get(D);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[f]=q,n.sunShadowMap[f]=ee;let Se=V.getViewportCount();for(let j=0;j<Se;j++)n.sunShadowMatrix[x+j]=V.getMatrix(j),n.sunShadowCascade[x+j]=V._cascadeData[j];x+=Se,f++}n.sun[p]=F,p++}else if(D.isDirectionalLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let V=D.shadow,q=t.get(D);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=ee,n.directionalShadowMatrix[g]=D.shadow.matrix,w++}n.directional[g]=F,g++}else if(D.isSpotLight){let F=e.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(O).multiplyScalar(G),F.distance=B,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,n.spot[y]=F;let V=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,V.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[y]=V.matrix,D.castShadow){let q=t.get(D);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,n.spotShadow[y]=q,n.spotShadowMap[y]=ee,v++}y++}else if(D.isRectAreaLight){let F=e.get(D);F.color.copy(O).multiplyScalar(G),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),n.rectArea[M]=F,M++}else if(D.isPointLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){let V=D.shadow,q=t.get(D);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=ee,n.pointShadowMatrix[m]=D.shadow.matrix,S++}n.point[m]=F,m++}else if(D.isHemisphereLight){let F=e.get(D);F.skyColor.copy(D.color).multiplyScalar(G),F.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[_]=F,_++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.sunLength!==p||C.directionalLength!==g||C.pointLength!==m||C.spotLength!==y||C.rectAreaLength!==M||C.hemiLength!==_||C.numSunShadows!==f||C.numDirectionalShadows!==w||C.numPointShadows!==S||C.numSpotShadows!==v||C.numSpotMaps!==b||C.numLightProbes!==T)&&(n.sun.length=p,n.directional.length=g,n.spot.length=y,n.rectArea.length=M,n.point.length=m,n.hemi.length=_,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-R,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,C.sunLength=p,C.directionalLength=g,C.pointLength=m,C.spotLength=y,C.rectAreaLength=M,C.hemiLength=_,C.numSunShadows=f,C.numDirectionalShadows=w,C.numPointShadows=S,C.numSpotShadows=v,C.numSpotMaps=b,C.numLightProbes=T,n.version=wM++)}function l(c,h){let d=0,u=0,p=0,f=0,x=0,g=0,m=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let _=c[y];if(_.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(m),d++}else if(_.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(_.isSpotLight){let w=n.spot[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),p++}else if(_.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Ep(i){let e=new TM(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function AM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ep(i),e.set(s,[a])):r>=o.length?(a=new Ep(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
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
}`,PM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],IM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Tp=new yt,Sa=new L,Iu=new L;function DM(i,e,t){let n=new ys,s=new ce,r=new ce,o=new Yt,a=new zl,l=new Bl,c={},h=t.maxTextureSize,d={[Ss]:hn,[hn]:Ss,[Sn]:Sn},u=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:RM,fragmentShader:CM}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new zt;f.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ce(f,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let m=this.type;this.render=function(S,v,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Kl&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oa);let R=i.getRenderTarget(),T=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(yn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let N=m!==this.type;N&&v.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=S.length;D<O;D++){let G=S[D],B=G.shadow;if(B===void 0){nt("WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let ee=B.getFrameExtents();s.multiply(ee),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,B.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=F,B.map===null||N===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===qr){if(G.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Zt(s.x,s.y,{format:ws,type:sn,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),B.map.texture.name=G.name+".shadowMap",B.map.depthTexture=new vi(s.x,s.y,oi),B.map.depthTexture.name=G.name+".shadowMapDepth",B.map.depthTexture.format=ji,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=on,B.map.depthTexture.magFilter=on}else G.isPointLight?(B.map=new Ea(s.x),B.map.depthTexture=new Bo(s.x,Mi)):(B.map=new Zt(s.x,s.y),B.map.depthTexture=new vi(s.x,s.y,Mi)),B.map.depthTexture.name=G.name+".shadowMap",B.map.depthTexture.format=ji,this.type===oa?(B.map.depthTexture.compareFunction=F?xu:gu,B.map.depthTexture.minFilter=Fn,B.map.depthTexture.magFilter=Fn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=on,B.map.depthTexture.magFilter=on);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let V=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();G.isPointLight!==!0&&B.updateMatrices(G,b);let q=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:b.layers;for(let Se=0;Se<V;Se++){let j=B.getCamera(Se);if(G.isPointLight){let W=B.camera,oe=B.matrix,ve=G.distance||W.far;ve!==W.far&&(W.far=ve,W.updateProjectionMatrix()),Sa.setFromMatrixPosition(G.matrixWorld),W.position.copy(Sa),Iu.copy(W.position),Iu.add(PM[Se]),W.up.copy(IM[Se]),W.lookAt(Iu),W.updateMatrixWorld(),oe.makeTranslation(-Sa.x,-Sa.y,-Sa.z),Tp.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Tp,W.coordinateSystem,W.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(B.map),i.clear());let W=B.getViewport(Se);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),P.viewport(o)}n=B.getFrustum(Se),_(v,b,j,G,q,this.type)}B.isPointLightShadow!==!0&&this.type===qr&&y(B,b),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(R,T,C)};function y(S,v){let b=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Zt(s.x,s.y,{format:ws,type:sn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(v,null,b,u,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(v,null,b,p,x,null)}function M(S,v,b,R){let T=null,C=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)T=C;else if(T=b.isPointLight===!0?l:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let P=T.uuid,N=v.uuid,D=c[P];D===void 0&&(D={},c[P]=D);let O=D[N];O===void 0&&(O=T.clone(),D[N]=O,v.addEventListener("dispose",w)),T=O}if(T.visible=v.visible,T.wireframe=v.wireframe,R===qr?T.side=v.shadowSide!==null?v.shadowSide:v.side:T.side=v.shadowSide!==null?v.shadowSide:d[v.side],T.alphaMap=v.alphaMap,T.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,T.map=v.map,T.clipShadows=v.clipShadows,T.clippingPlanes=v.clippingPlanes,T.clipIntersection=v.clipIntersection,T.displacementMap=v.displacementMap,T.displacementScale=v.displacementScale,T.displacementBias=v.displacementBias,T.wireframeLinewidth=v.wireframeLinewidth,T.linewidth=v.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let P=i.properties.get(T);P.light=b}return T}function _(S,v,b,R,T,C){if(S.visible===!1)return;if(S.layers.test(T)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===qr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);let D=e.update(S),O=S.material;if(Array.isArray(O)){let G=D.groups;for(let B=0,ee=G.length;B<ee;B++){let F=G[B],V=O[F.materialIndex];if(V&&V.visible){let q=M(S,V,R,C);S.onBeforeShadow(i,S,v,b,D,q,F),i.renderBufferDirect(b,null,D,q,S,F),S.onAfterShadow(i,S,v,b,D,q,F)}}}else if(O.visible){let G=M(S,O,R,C);S.onBeforeShadow(i,S,v,b,D,G,null),i.renderBufferDirect(b,null,D,G,S,null),S.onAfterShadow(i,S,v,b,D,G,null)}}let N=S.children;for(let D=0,O=N.length;D<O;D++)_(N[D],v,b,R,T,C)}function w(S){S.target.removeEventListener("dispose",w);for(let b in c){let R=c[b],T=S.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}function LM(i,e){function t(){let z=!1,ae=new Yt,ne=null,Re=new Yt(0,0,0,0);return{setMask:function(be){ne!==be&&!z&&(i.colorMask(be,be,be,be),ne=be)},setLocked:function(be){z=be},setClear:function(be,Ae,Ye,mt,me){me===!0&&(be*=mt,Ae*=mt,Ye*=mt),ae.set(be,Ae,Ye,mt),Re.equals(ae)===!1&&(i.clearColor(be,Ae,Ye,mt),Re.copy(ae))},reset:function(){z=!1,ne=null,Re.set(-1,0,0,0)}}}function n(){let z=!1,ae=!1,ne=null,Re=null,be=null;return{setReversed:function(Ae){if(ae!==Ae){let Ye=e.get("EXT_clip_control");Ae?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),ae=Ae;let mt=be;be=null,this.setClear(mt)}},getReversed:function(){return ae},setTest:function(Ae){Ae?ge(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(Ae){ne!==Ae&&!z&&(i.depthMask(Ae),ne=Ae)},setFunc:function(Ae){if(ae&&(Ae=Kf[Ae]),Re!==Ae){switch(Ae){case _l:i.depthFunc(i.NEVER);break;case Ml:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case wl:i.depthFunc(i.GEQUAL);break;case El:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=Ae}},setLocked:function(Ae){z=Ae},setClear:function(Ae){be!==Ae&&(be=Ae,ae&&(Ae=1-Ae),i.clearDepth(Ae))},reset:function(){z=!1,ne=null,Re=null,be=null,ae=!1}}}function s(){let z=!1,ae=null,ne=null,Re=null,be=null,Ae=null,Ye=null,mt=null,me=null;return{setTest:function(Ke){z||(Ke?ge(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!z&&(i.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,ft,Le){(ne!==Ke||Re!==ft||be!==Le)&&(i.stencilFunc(Ke,ft,Le),ne=Ke,Re=ft,be=Le)},setOp:function(Ke,ft,Le){(Ae!==Ke||Ye!==ft||mt!==Le)&&(i.stencilOp(Ke,ft,Le),Ae=Ke,Ye=ft,mt=Le)},setLocked:function(Ke){z=Ke},setClear:function(Ke){me!==Ke&&(i.clearStencil(Ke),me=Ke)},reset:function(){z=!1,ae=null,ne=null,Re=null,be=null,Ae=null,Ye=null,mt=null,me=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},d={},u={},p=new WeakMap,f=[],x=null,g=!1,m=null,y=null,M=null,_=null,w=null,S=null,v=null,b=new Ne(0,0,0),R=0,T=!1,C=null,P=null,N=null,D=null,O=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,ee=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(F)[1]),B=ee>=1):F.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),B=ee>=2);let V=null,q={},Se=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),W=new Yt().fromArray(Se),oe=new Yt().fromArray(j);function ve(z,ae,ne,Re){let be=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(z,Ae),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<ne;Ye++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(ae+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return Ae}let Te={};Te[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(i.DEPTH_TEST),o.setFunc(Pr),fe(!1),he(iu),ge(i.CULL_FACE),Q(yn);function ge(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Be(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function ut(z,ae){return u[z]!==ae?(i.bindFramebuffer(z,ae),u[z]=ae,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ae),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Oe(z,ae){let ne=f,Re=!1;if(z){ne=p.get(ae),ne===void 0&&(ne=[],p.set(ae,ne));let be=z.textures;if(ne.length!==be.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,Ye=be.length;Ae<Ye;Ae++)ne[Ae]=i.COLOR_ATTACHMENT0+Ae;ne.length=be.length,Re=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ne)}function rt(z){return x!==z?(i.useProgram(z),x=z,!0):!1}let re={[ri]:i.FUNC_ADD,[Sf]:i.FUNC_SUBTRACT,[wf]:i.FUNC_REVERSE_SUBTRACT};re[Ef]=i.MIN,re[Tf]=i.MAX;let X={[nr]:i.ZERO,[Af]:i.ONE,[Rf]:i.SRC_COLOR,[ou]:i.SRC_ALPHA,[Df]:i.SRC_ALPHA_SATURATE,[la]:i.DST_COLOR,[aa]:i.DST_ALPHA,[Cf]:i.ONE_MINUS_SRC_COLOR,[au]:i.ONE_MINUS_SRC_ALPHA,[If]:i.ONE_MINUS_DST_COLOR,[Pf]:i.ONE_MINUS_DST_ALPHA,[Lf]:i.CONSTANT_COLOR,[Nf]:i.ONE_MINUS_CONSTANT_COLOR,[Uf]:i.CONSTANT_ALPHA,[Ff]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(z,ae,ne,Re,be,Ae,Ye,mt,me,Ke){if(z===yn){g===!0&&(Be(i.BLEND),g=!1);return}if(g===!1&&(ge(i.BLEND),g=!0),z!==jl){if(z!==m||Ke!==T){if((y!==ri||w!==ri)&&(i.blendEquation(i.FUNC_ADD),y=ri,w=ri),Ke)switch(z){case $r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ts:i.blendFunc(i.ONE,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:st("WebGLState: Invalid blending: ",z);break}else switch(z){case $r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case su:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ru:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",z);break}M=null,_=null,S=null,v=null,b.set(0,0,0),R=0,m=z,T=Ke}return}be=be||ae,Ae=Ae||ne,Ye=Ye||Re,(ae!==y||be!==w)&&(i.blendEquationSeparate(re[ae],re[be]),y=ae,w=be),(ne!==M||Re!==_||Ae!==S||Ye!==v)&&(i.blendFuncSeparate(X[ne],X[Re],X[Ae],X[Ye]),M=ne,_=Re,S=Ae,v=Ye),(mt.equals(b)===!1||me!==R)&&(i.blendColor(mt.r,mt.g,mt.b,me),b.copy(mt),R=me),m=z,T=!1}function K(z,ae){z.side===Sn?Be(i.CULL_FACE):ge(i.CULL_FACE);let ne=z.side===hn;ae&&(ne=!ne),fe(ne),z.blending===$r&&z.transparent===!1?Q(yn):Q(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Re=z.stencilWrite;a.setTest(Re),Re&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),De(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(z){C!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),C=z)}function he(z){z!==Mf?(ge(i.CULL_FACE),z!==P&&(z===iu?i.cullFace(i.BACK):z===bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),P=z}function He(z){z!==N&&(B&&i.lineWidth(z),N=z)}function De(z,ae,ne){z?(ge(i.POLYGON_OFFSET_FILL),(D!==ae||O!==ne)&&(D=ae,O=ne,o.getReversed()&&(ae=-ae,ne=-ne),i.polygonOffset(ae,ne))):Be(i.POLYGON_OFFSET_FILL)}function it(z){z?ge(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function Xe(z){z===void 0&&(z=i.TEXTURE0+G-1),V!==z&&(i.activeTexture(z),V=z)}function pt(z,ae,ne){ne===void 0&&(V===null?ne=i.TEXTURE0+G-1:ne=V);let Re=q[ne];Re===void 0&&(Re={type:void 0,texture:void 0},q[ne]=Re),(Re.type!==z||Re.texture!==ae)&&(V!==ne&&(i.activeTexture(ne),V=ne),i.bindTexture(z,ae||Te[z]),Re.type=z,Re.texture=ae)}function H(){let z=q[V];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(z){st("WebGLState:",z)}}function dt(){try{i.compressedTexImage3D(...arguments)}catch(z){st("WebGLState:",z)}}function Pt(){try{i.texSubImage2D(...arguments)}catch(z){st("WebGLState:",z)}}function we(){try{i.texSubImage3D(...arguments)}catch(z){st("WebGLState:",z)}}function Gt(){try{i.compressedTexSubImage2D(...arguments)}catch(z){st("WebGLState:",z)}}function $e(){try{i.compressedTexSubImage3D(...arguments)}catch(z){st("WebGLState:",z)}}function Qe(){try{i.texStorage2D(...arguments)}catch(z){st("WebGLState:",z)}}function I(){try{i.texStorage3D(...arguments)}catch(z){st("WebGLState:",z)}}function E(){try{i.texImage2D(...arguments)}catch(z){st("WebGLState:",z)}}function $(){try{i.texImage3D(...arguments)}catch(z){st("WebGLState:",z)}}function pe(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function le(z,ae){d[z]!==ae&&(i.pixelStorei(z,ae),d[z]=ae)}function xe(z){W.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),W.copy(z))}function Ee(z){oe.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),oe.copy(z))}function te(z,ae){let ne=c.get(ae);ne===void 0&&(ne=new WeakMap,c.set(ae,ne));let Re=ne.get(z);Re===void 0&&(Re=i.getUniformBlockIndex(ae,z.name),i.uniformBlockBinding(ae,Re,Re),ne.set(z,Re))}function se(z,ae,ne){let be=c.get(ae).get(z);l[be]!==ne&&(i.bindBufferBase(i.UNIFORM_BUFFER,be,ne),l[be]=ne)}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},V=null,q={},u={},l={},p=new WeakMap,f=[],x=null,g=!1,m=null,y=null,M=null,_=null,w=null,S=null,v=null,b=new Ne(0,0,0),R=0,T=!1,C=null,P=null,N=null,D=null,O=null,W.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:Be,bindFramebuffer:ut,drawBuffers:Oe,useProgram:rt,setBlending:Q,setMaterial:K,setFlipSided:fe,setCullFace:he,setLineWidth:He,setPolygonOffset:De,setScissorTest:it,activeTexture:Xe,bindTexture:pt,unbindTexture:H,compressedTexImage2D:$t,compressedTexImage3D:dt,texImage2D:E,texImage3D:$,pixelStorei:le,getParameter:pe,updateUBOMapping:te,uniformBlockBinding:se,texStorage2D:Qe,texStorage3D:I,texSubImage2D:Pt,texSubImage3D:we,compressedTexSubImage2D:Gt,compressedTexSubImage3D:$e,scissor:xe,viewport:Ee,reset:ye}}function NM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d=new Set,u,p=new WeakMap,f=new Set,x=new FinalizationRegistry(I=>f.delete(I)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,E){return g?new OffscreenCanvas(I,E):Dr("canvas")}function y(I,E,$){let pe=1,le=Qe(I);if((le.width>$||le.height>$)&&(pe=$/Math.max(le.width,le.height)),pe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let xe=Math.floor(pe*le.width),Ee=Math.floor(pe*le.height);u===void 0&&(u=m(xe,Ee));let te=E?m(xe,Ee):u;return te.width=xe,te.height=Ee,te.getContext("2d").drawImage(I,0,0,xe,Ee),nt("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+xe+"x"+Ee+")."),te}else return"data"in I&&nt("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),I;return I}function M(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(I,E,$,pe,le,xe=!1){if(I!==null){if(i[I]!==void 0)return i[I];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ee;pe&&(Ee=e.get("EXT_texture_norm16"),Ee||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=E;if(E===i.RED&&($===i.FLOAT&&(te=i.R32F),$===i.HALF_FLOAT&&(te=i.R16F),$===i.UNSIGNED_BYTE&&(te=i.R8),$===i.UNSIGNED_SHORT&&Ee&&(te=Ee.R16_EXT),$===i.SHORT&&Ee&&(te=Ee.R16_SNORM_EXT)),E===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(te=i.R8UI),$===i.UNSIGNED_SHORT&&(te=i.R16UI),$===i.UNSIGNED_INT&&(te=i.R32UI),$===i.BYTE&&(te=i.R8I),$===i.SHORT&&(te=i.R16I),$===i.INT&&(te=i.R32I)),E===i.RG&&($===i.FLOAT&&(te=i.RG32F),$===i.HALF_FLOAT&&(te=i.RG16F),$===i.UNSIGNED_BYTE&&(te=i.RG8),$===i.UNSIGNED_SHORT&&Ee&&(te=Ee.RG16_EXT),$===i.SHORT&&Ee&&(te=Ee.RG16_SNORM_EXT)),E===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(te=i.RG8UI),$===i.UNSIGNED_SHORT&&(te=i.RG16UI),$===i.UNSIGNED_INT&&(te=i.RG32UI),$===i.BYTE&&(te=i.RG8I),$===i.SHORT&&(te=i.RG16I),$===i.INT&&(te=i.RG32I)),E===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(te=i.RGB8UI),$===i.UNSIGNED_SHORT&&(te=i.RGB16UI),$===i.UNSIGNED_INT&&(te=i.RGB32UI),$===i.BYTE&&(te=i.RGB8I),$===i.SHORT&&(te=i.RGB16I),$===i.INT&&(te=i.RGB32I)),E===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),$===i.UNSIGNED_INT&&(te=i.RGBA32UI),$===i.BYTE&&(te=i.RGBA8I),$===i.SHORT&&(te=i.RGBA16I),$===i.INT&&(te=i.RGBA32I)),E===i.RGB&&($===i.UNSIGNED_SHORT&&Ee&&(te=Ee.RGB16_EXT),$===i.SHORT&&Ee&&(te=Ee.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),E===i.RGBA){let se=xe?Co:vt.getTransfer(le);$===i.FLOAT&&(te=i.RGBA32F),$===i.HALF_FLOAT&&(te=i.RGBA16F),$===i.UNSIGNED_BYTE&&(te=se===Tt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&Ee&&(te=Ee.RGBA16_EXT),$===i.SHORT&&Ee&&(te=Ee.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(I,E){let $;return I?E===null||E===Mi||E===is?$=i.DEPTH24_STENCIL8:E===oi?$=i.DEPTH32F_STENCIL8:E===Zr&&($=i.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Mi||E===is?$=i.DEPTH_COMPONENT24:E===oi?$=i.DEPTH_COMPONENT32F:E===Zr&&($=i.DEPTH_COMPONENT16),$}function b(I,E){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==on&&I.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function R(I){let E=new WeakRef(I);n.get(I).__ref=E,f.add(E),x.register(I,E,E)}function T(I){let E=n.get(I).__ref;E!==void 0&&(f.delete(E),x.unregister(E))}function C(I){N(I.target)}function P(I){D(I.target)}function N(I){I.removeEventListener("dispose",C),T(I),G(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function D(I){I.removeEventListener("dispose",P),T(I),ee(I)}function O(){for(let I of f){let E=I.deref();E!==void 0&&(E.isRenderTarget===!0?D(E):N(E))}f.clear(),d.clear()}function G(I){let E=n.get(I);if(E.__webglInit===void 0)return;let $=I.source,pe=p.get($);if(pe){let le=pe[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&B(I),Object.keys(pe).length===0&&p.delete($)}n.remove(I)}function B(I){let E=n.get(I);i.deleteTexture(E.__webglTexture);let $=I.source,pe=p.get($);delete pe[E.__cacheKey],o.memory.textures--}function ee(I){let E=n.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();let $=I.depthTexture;if($&&$.renderTarget===I&&N($),I.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let xe=0;xe<E.__webglFramebuffer[le].length;xe++)i.deleteFramebuffer(E.__webglFramebuffer[le][xe]);else i.deleteFramebuffer(E.__webglFramebuffer[le]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)i.deleteFramebuffer(E.__webglFramebuffer[le]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let le=0;le<E.__webglColorRenderbuffer.length;le++)E.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[le]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let pe=I.textures;for(let le=0,xe=pe.length;le<xe;le++){let Ee=n.get(pe[le]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(pe[le])}n.remove(I)}let F=0;function V(){F=0}function q(){return F}function Se(I){F=I}function j(){let I=F;return I>=s.maxTextures&&nt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function W(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function oe(I,E){let $=n.get(I);if(I.isVideoTexture&&Gt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){let pe=I.image;if(pe===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{K($,I,E);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+E)}function ve(I,E){let $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){K($,I,E);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+E)}function Te(I,E){let $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){K($,I,E);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+E)}function ge(I,E){let $=n.get(I);if(I.version>0&&$.__version!==I.version){fe($,I,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+E)}let Be={[vn]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Al]:i.MIRRORED_REPEAT},ut={[on]:i.NEAREST,[Bf]:i.NEAREST_MIPMAP_NEAREST,[ma]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[tc]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},Oe={[Vf]:i.NEVER,[vu]:i.ALWAYS,[Wf]:i.LESS,[gu]:i.LEQUAL,[Xf]:i.EQUAL,[xu]:i.GEQUAL,[qf]:i.GREATER,[$f]:i.NOTEQUAL};function rt(I,E){if(E.type===oi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===tc||E.magFilter===ma||E.magFilter===ns||E.minFilter===Fn||E.minFilter===tc||E.minFilter===ma||E.minFilter===ns)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Be[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Be[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Be[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ut[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ut[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===on||E.minFilter!==ma&&E.minFilter!==ns||E.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function re(I,E){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",C),R(E));let pe=E.source,le=p.get(pe);le===void 0&&(le={},p.set(pe,le));let xe=W(E);if(xe!==I.__cacheKey){le[xe]===void 0&&(le[xe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),le[xe].usedTimes++;let Ee=le[I.__cacheKey];Ee!==void 0&&(le[I.__cacheKey].usedTimes--,Ee.usedTimes===0&&B(E)),I.__cacheKey=xe,I.__webglTexture=le[xe].texture}return $}function X(I,E,$){return Math.floor(Math.floor(I/$)/E)}function Q(I,E,$,pe){let xe=I.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,$,pe,E.data);else{xe.sort((z,ae)=>z.start-ae.start);let Ee=0;for(let z=1;z<xe.length;z++){let ae=xe[Ee],ne=xe[z],Re=ae.start+ae.count,be=X(ne.start,E.width,4),Ae=X(ae.start,E.width,4);ne.start<=Re+1&&be===Ae&&X(ne.start+ne.count-1,E.width,4)===be?ae.count=Math.max(ae.count,ne.start+ne.count-ae.start):(++Ee,xe[Ee]=ne)}xe.length=Ee+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let z=0,ae=xe.length;z<ae;z++){let ne=xe[z],Re=Math.floor(ne.start/4),be=Math.ceil(ne.count/4),Ae=Re%E.width,Ye=Math.floor(Re/E.width),mt=be,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ye),t.texSubImage2D(i.TEXTURE_2D,0,Ae,Ye,mt,me,$,pe,E.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function K(I,E,$){let pe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=i.TEXTURE_3D);let le=re(I,E),xe=E.source;t.bindTexture(pe,I.__webglTexture,i.TEXTURE0+$);let Ee=n.get(xe);if(xe.version!==Ee.__version||le===!0){if(t.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let me=vt.getPrimaries(vt.workingColorSpace),Ke=E.colorSpace===Si?null:vt.getPrimaries(E.colorSpace),ft=E.colorSpace===Si||me===Ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let se=y(E.image,!1,s.maxTextureSize);se=$e(E,se);let ye=r.convert(E.format,E.colorSpace),z=r.convert(E.type),ae=S(E.internalFormat,ye,z,E.normalized,E.colorSpace,E.isVideoTexture);rt(pe,E);let ne,Re=E.mipmaps,be=E.isVideoTexture!==!0,Ae=Ee.__version===void 0||le===!0,Ye=xe.dataReady,mt=b(E,se);if(E.isDepthTexture)ae=v(E.format===bi,E.type),Ae&&(be?t.texStorage2D(i.TEXTURE_2D,1,ae,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,ae,se.width,se.height,0,ye,z,null));else if(E.isDataTexture)if(Re.length>0){be&&Ae&&t.texStorage2D(i.TEXTURE_2D,mt,ae,Re[0].width,Re[0].height);for(let me=0,Ke=Re.length;me<Ke;me++)ne=Re[me],be?Ye&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ne.width,ne.height,ye,z,ne.data):t.texImage2D(i.TEXTURE_2D,me,ae,ne.width,ne.height,0,ye,z,ne.data);E.generateMipmaps=!1}else be?(Ae&&t.texStorage2D(i.TEXTURE_2D,mt,ae,se.width,se.height),Ye&&Q(E,se,ye,z)):t.texImage2D(i.TEXTURE_2D,0,ae,se.width,se.height,0,ye,z,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){be&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,ae,Re[0].width,Re[0].height,se.depth);for(let me=0,Ke=Re.length;me<Ke;me++)if(ne=Re[me],E.format!==jn)if(ye!==null)if(be){if(Ye)if(E.layerUpdates.size>0){let ft=Cu(ne.width,ne.height,E.format,E.type);for(let Le of E.layerUpdates){let Ot=ne.data.subarray(Le*ft/ne.data.BYTES_PER_ELEMENT,(Le+1)*ft/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Le,ne.width,ne.height,1,ye,Ot)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,ne.width,ne.height,se.depth,ye,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,ae,ne.width,ne.height,se.depth,0,ne.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?Ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,ne.width,ne.height,se.depth,ye,z,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,ae,ne.width,ne.height,se.depth,0,ye,z,ne.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{be&&Ae&&t.texStorage2D(i.TEXTURE_2D,mt,ae,Re[0].width,Re[0].height);for(let me=0,Ke=Re.length;me<Ke;me++)ne=Re[me],E.format!==jn?ye!==null?be?Ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,ne.width,ne.height,ye,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,me,ae,ne.width,ne.height,0,ne.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Ye&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ne.width,ne.height,ye,z,ne.data):t.texImage2D(i.TEXTURE_2D,me,ae,ne.width,ne.height,0,ye,z,ne.data)}else if(E.isDataArrayTexture)if(be){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,ae,se.width,se.height,se.depth),Ye)if(E.layerUpdates.size>0){let me=Cu(se.width,se.height,E.format,E.type);for(let Ke of E.layerUpdates){let ft=se.data.subarray(Ke*me/se.data.BYTES_PER_ELEMENT,(Ke+1)*me/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ke,se.width,se.height,1,ye,z,ft)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ye,z,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,se.width,se.height,se.depth,0,ye,z,se.data);else if(E.isData3DTexture)be?(Ae&&t.texStorage3D(i.TEXTURE_3D,mt,ae,se.width,se.height,se.depth),Ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ye,z,se.data)):t.texImage3D(i.TEXTURE_3D,0,ae,se.width,se.height,se.depth,0,ye,z,se.data);else if(E.isFramebufferTexture){if(Ae)if(be)t.texStorage2D(i.TEXTURE_2D,mt,ae,se.width,se.height);else{let me=se.width,Ke=se.height;for(let ft=0;ft<mt;ft++)t.texImage2D(i.TEXTURE_2D,ft,ae,me,Ke,0,ye,z,null),me>>=1,Ke>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),se.parentNode!==me){me.appendChild(se),d.add(E),me.onpaint=Ke=>{let ft=Ke.changedElements;for(let Le of d)ft.includes(Le.image)&&(Le.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let ft=i.RGBA,Le=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,Le,Ot,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(be&&Ae){let me=Qe(Re[0]);t.texStorage2D(i.TEXTURE_2D,mt,ae,me.width,me.height)}for(let me=0,Ke=Re.length;me<Ke;me++)ne=Re[me],be?Ye&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ye,z,ne):t.texImage2D(i.TEXTURE_2D,me,ae,ye,z,ne);E.generateMipmaps=!1}else if(be){if(Ae){let me=Qe(se);t.texStorage2D(i.TEXTURE_2D,mt,ae,me.width,me.height)}Ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,z,se)}else t.texImage2D(i.TEXTURE_2D,0,ae,ye,z,se);M(E)&&E.mipmapsAutoUpdate===!0&&_(pe),Ee.__version=xe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function fe(I,E,$){if(E.image.length!==6)return;let pe=re(I,E),le=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+$);let xe=n.get(le);if(le.version!==xe.__version||pe===!0){t.activeTexture(i.TEXTURE0+$);let Ee=vt.getPrimaries(vt.workingColorSpace),te=E.colorSpace===Si?null:vt.getPrimaries(E.colorSpace),se=E.colorSpace===Si||Ee===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ye=E.isCompressedTexture||E.image[0].isCompressedTexture,z=E.image[0]&&E.image[0].isDataTexture,ae=[];for(let Le=0;Le<6;Le++)!ye&&!z?ae[Le]=y(E.image[Le],!0,s.maxCubemapSize):ae[Le]=z?E.image[Le].image:E.image[Le],ae[Le]=$e(E,ae[Le]);let ne=ae[0],Re=r.convert(E.format,E.colorSpace),be=r.convert(E.type),Ae=S(E.internalFormat,Re,be,E.normalized,E.colorSpace),Ye=E.isVideoTexture!==!0,mt=xe.__version===void 0||pe===!0,me=le.dataReady,Ke=b(E,ne);rt(i.TEXTURE_CUBE_MAP,E);let ft;if(E.isDepthTexture){if(Ae=v(E.format===bi,E.type),mt)if(Ye)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ae,ne.width,ne.height);else for(let Le=0;Le<6;Le++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ae,ne.width,ne.height,0,Re,be,null)}else if(ye){Ye&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,Ae,ne.width,ne.height);for(let Le=0;Le<6;Le++){ft=ae[Le].mipmaps;for(let Ot=0;Ot<ft.length;Ot++){let mn=ft[Ot];E.format!==jn?Re!==null?Ye?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ot,0,0,mn.width,mn.height,Re,mn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ot,Ae,mn.width,mn.height,0,mn.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ot,0,0,mn.width,mn.height,Re,be,mn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ot,Ae,mn.width,mn.height,0,Re,be,mn.data)}}}else{if(ft=E.mipmaps,Ye&&mt){ft.length>0&&Ke++;let Le=Qe(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,Ae,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(z){Ye?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,ae[Le].width,ae[Le].height,Re,be,ae[Le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ae,ae[Le].width,ae[Le].height,0,Re,be,ae[Le].data);for(let Ot=0;Ot<ft.length;Ot++){let us=ft[Ot].image[Le].image;Ye?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ot+1,0,0,us.width,us.height,Re,be,us.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ot+1,Ae,us.width,us.height,0,Re,be,us.data)}}else{Ye?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Re,be,ae[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ae,Re,be,ae[Le]);for(let Ot=0;Ot<ft.length;Ot++){let mn=ft[Ot];Ye?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ot+1,0,0,Re,be,mn.image[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ot+1,Ae,Re,be,mn.image[Le])}}}M(E)&&E.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),xe.__version=le.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function he(I,E,$,pe,le,xe){let Ee=r.convert($.format,$.colorSpace),te=r.convert($.type),se=S($.internalFormat,Ee,te,$.normalized,$.colorSpace),ye=n.get(E),z=n.get($);if(z.__renderTarget=E,!ye.__hasExternalTextures){let ae=Math.max(1,E.width>>xe),ne=Math.max(1,E.height>>xe);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,xe,se,ae,ne,E.depth,0,Ee,te,null):t.texImage2D(le,xe,se,ae,ne,0,Ee,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),we(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,le,z.__webglTexture,0,Pt(E)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,le,z.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(I,E,$){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){let pe=E.depthTexture,le=pe&&pe.isDepthTexture?pe.type:null,xe=v(E.stencilBuffer,le),Ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;we(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt(E),xe,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt(E),xe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,xe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,I)}else{let pe=E.textures;for(let le=0;le<pe.length;le++){let xe=pe[le],Ee=r.convert(xe.format,xe.colorSpace),te=r.convert(xe.type),se=S(xe.internalFormat,Ee,te,xe.normalized,xe.colorSpace);we(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt(E),se,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt(E),se,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,se,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(I,E,$){let pe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(E.depthTexture);le.__renderTarget=E;let xe=pe?E.depthTexture.image[0]:E.depthTexture.image;(!le.__webglTexture||xe.width!==E.width||xe.height!==E.height)&&(xe.width=E.width,xe.height=E.height,E.depthTexture.needsUpdate=!0),pe?ge(E.depthTexture,0):oe(E.depthTexture,0);let Ee=le.__webglTexture,te=Pt(E),se=pe?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,ye=E.depthTexture.format===bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===ji)we(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,se,Ee,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,ye,se,Ee,0);else if(E.depthTexture.format===bi)we(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,se,Ee,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,ye,se,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(I){let E=n.get(I),$=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let pe=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){let le=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",le)};pe.addEventListener("dispose",le),E.__depthDisposeCallback=le}E.__boundDepthTexture=pe}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let pe=0;pe<6;pe++)De(E.__webglFramebuffer[pe],I,pe);else I.texture.mipmaps.length>0?De(E.__webglFramebuffer[0],I,0):De(E.__webglFramebuffer,I,0);else if($){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=i.createRenderbuffer(),He(E.__webglDepthbuffer[pe],I,!1);else{let le=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=E.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),He(E.__webglDepthbuffer,I,!1);else{let le=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(I,E,$){let pe=n.get(I);E!==void 0&&he(pe.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&it(I)}function pt(I){let E=I.texture,$=n.get(I),pe=n.get(E);I.addEventListener("dispose",P),R(I);let le=I.textures,xe=I.isWebGLCubeRenderTarget===!0,Ee=le.length>1;if(Ee||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=E.version,o.memory.textures++),xe){$.__webglFramebuffer=[];for(let te=0;te<6;te++)if(E.mipmaps.length>0){$.__webglFramebuffer[te]=[];for(let se=0;se<E.mipmaps.length;se++)$.__webglFramebuffer[te][se]=i.createFramebuffer()}else $.__webglFramebuffer[te]=i.createFramebuffer()}else{if(E.mipmaps.length>0){$.__webglFramebuffer=[];for(let te=0;te<E.mipmaps.length;te++)$.__webglFramebuffer[te]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let te=0,se=le.length;te<se;te++){let ye=n.get(le[te]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&we(I)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let te=0;te<le.length;te++){let se=le[te];$.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[te]);let ye=r.convert(se.format,se.colorSpace),z=r.convert(se.type),ae=S(se.internalFormat,ye,z,se.normalized,se.colorSpace,I.isXRRenderTarget===!0),ne=Pt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,ae,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,$.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),He($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),rt(i.TEXTURE_CUBE_MAP,E);for(let te=0;te<6;te++)if(E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)he($.__webglFramebuffer[te][se],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,se);else he($.__webglFramebuffer[te],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);M(E)?_(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Ee){for(let te=0,se=le.length;te<se;te++){let ye=le[te],z=n.get(ye),ae=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ae=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,z.__webglTexture),rt(ae,ye),he($.__webglFramebuffer,I,ye,i.COLOR_ATTACHMENT0+te,ae,0),M(ye)&&_(ae)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(te=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,pe.__webglTexture),rt(te,E),E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)he($.__webglFramebuffer[se],I,E,i.COLOR_ATTACHMENT0,te,se);else he($.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,te,0);M(E)?_(te):E.mipmaps.length>0&&i.texParameteri(te,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&it(I)}function H(I){let E=I.textures;for(let $=0,pe=E.length;$<pe;$++){let le=E[$];if(M(le)&&le.mipmapsAutoUpdate===!0){let xe=w(I),Ee=n.get(le).__webglTexture;t.bindTexture(xe,Ee),_(xe),t.unbindTexture()}}}let $t=[];function dt(I){if(I.samples>0){if(we(I)===!1){let E=I.textures,$=I.width,pe=I.height,le=i.COLOR_BUFFER_BIT,xe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(I),te=E.length>1;if(te)for(let ye=0;ye<E.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]);let z=n.get(E[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,z,0)}i.blitFramebuffer(0,0,$,pe,0,0,$,pe,le,i.NEAREST),l===!0&&($t.length=0,$t.push(i.COLOR_ATTACHMENT0+ye),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&$t.push(xe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let ye=0;ye<E.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]);let z=n.get(E[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Pt(I){return Math.min(s.maxSamples,I.samples)}function we(I){let E=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Gt(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function $e(I,E){let $=I.colorSpace,pe=I.format,le=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==Ro&&$!==Si&&(vt.getTransfer($)===Tt?(pe!==jn||le!==Dn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",$)),E}function Qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=V,this.getTextureUnits=q,this.setTextureUnits=Se,this.setTexture2D=oe,this.setTexture2DArray=ve,this.setTexture3D=Te,this.setTextureCube=ge,this.rebindTextures=Xe,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=he,this.useMultisampledRTT=we,this.dispose=O}function UM(i,e){function t(n,s=Si){let r,o=vt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hu)return i.BYTE;if(n===uu)return i.SHORT;if(n===Zr)return i.UNSIGNED_SHORT;if(n===nc)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===oi)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===pu)return i.ALPHA;if(n===mu)return i.RGB;if(n===jn)return i.RGBA;if(n===ji)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===rc)return i.RED;if(n===oc)return i.RED_INTEGER;if(n===ws)return i.RG;if(n===ac)return i.RG_INTEGER;if(n===lc)return i.RGBA_INTEGER;if(n===ga||n===xa||n===va||n===ya)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===hc||n===uc||n===dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===pc||n===mc||n===gc||n===xc||n===_a||n===vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fc||n===pc)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===gc)return r.COMPRESSED_R11_EAC;if(n===xc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_a)return r.COMPRESSED_RG11_EAC;if(n===vc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yc||n===_c||n===Mc||n===bc||n===Sc||n===wc||n===Ec||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ec)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ac)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ic)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lc||n===Nc||n===Uc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Lc)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===Oc||n===Ma||n===zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var FM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OM=`
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

}`,zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Et({vertexShader:FM,fragmentShader:OM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ce(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bu=class extends Ri{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,f=null,x=typeof XRWebGLBinding<"u",g=new zu,m={},y=t.getContextAttributes(),M=null,_=null,w=[],S=[],v=new ce,b=null,R=null,T=new bn;T.viewport=new Yt;let C=new bn;C.viewport=new Yt;let P=[T,C],N=new Jl,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let oe=w[W];return oe===void 0&&(oe=new Ur,w[W]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(W){let oe=w[W];return oe===void 0&&(oe=new Ur,w[W]=oe),oe.getGripSpace()},this.getHand=function(W){let oe=w[W];return oe===void 0&&(oe=new Ur,w[W]=oe),oe.getHandSpace()};function G(W){let oe=S.indexOf(W.inputSource);if(oe===-1)return;let ve=w[oe];ve!==void 0&&(ve.update(W.inputSource,W.frame,c||o),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",ee);for(let W=0;W<w.length;W++){let oe=S[W];oe!==null&&(S[W]=null,w[W].disconnect(oe))}D=null,O=null,g.reset();for(let W in m)delete m[W];if(e.setRenderTarget(M),p=null,u=null,d=null,s=null,_=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(v.width,v.height,!1),R!==null){let W=R.camera;W.fov=R.fov,W.zoom=R.zoom,W.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",B),s.addEventListener("inputsourceschange",ee),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Te=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=y.stencil?bi:ji,Te=y.stencil?is:Mi);let Be={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Zt(u.textureWidth,u.textureHeight,{format:jn,type:Dn,depthTexture:new vi(u.textureWidth,u.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ve={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Zt(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(W){for(let oe=0;oe<W.removed.length;oe++){let ve=W.removed[oe],Te=S.indexOf(ve);Te>=0&&(S[Te]=null,w[Te].disconnect(ve))}for(let oe=0;oe<W.added.length;oe++){let ve=W.added[oe],Te=S.indexOf(ve);if(Te===-1){for(let Be=0;Be<w.length;Be++)if(Be>=S.length){S.push(ve),Te=Be;break}else if(S[Be]===null){S[Be]=ve,Te=Be;break}if(Te===-1)break}let ge=w[Te];ge&&ge.connect(ve)}}function F(W,oe){oe===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(oe.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let oe=W.near,ve=W.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),N.near=C.near=T.near=oe,N.far=C.far=T.far=ve,(D!==N.near||O!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,O=N.far),N.layers.mask=W.layers.mask|6,T.layers.mask=N.layers.mask&-5,C.layers.mask=N.layers.mask&-3;let Te=W.parent,ge=N.cameras;F(N,Te);for(let Be=0;Be<ge.length;Be++)F(ge[Be],Te);N.projectionMatrix.copy(T.projectionMatrix),N.projectionMatrixInverse.copy(T.projectionMatrixInverse),R===null&&W.isPerspectiveCamera&&(R={camera:W,fov:W.fov,zoom:W.zoom}),V(W,N,Te)};function V(W,oe,ve){ve===null?W.matrix.copy(oe.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(oe.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(oe.projectionMatrix),W.projectionMatrixInverse.copy(oe.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=qs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(W){return m[W]};let q=null;function Se(W,oe){if(h=oe.getViewerPose(c||o),f=oe,h!==null){let ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Te=!1;ve.length!==N.cameras.length&&(N.cameras.length=0,Te=!0);for(let Oe=0;Oe<ve.length;Oe++){let rt=ve[Oe],re=null;if(p!==null)re=p.getViewport(rt);else{let Q=d.getViewSubImage(u,rt);re=Q.viewport,Oe===0&&(e.setRenderTargetTextures(_,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(_))}let X=P[Oe];X===void 0&&(X=new bn,X.layers.enable(Oe),X.viewport=new Yt,P[Oe]=X),X.matrix.fromArray(rt.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(rt.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(re.x,re.y,re.width,re.height),Oe===0&&(N.matrix.copy(X.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Te===!0&&N.cameras.push(X)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Oe=d.getDepthInformation(ve[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(Oe,s.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Oe=0;Oe<ve.length;Oe++){let rt=ve[Oe].camera;if(rt){let re=m[rt];re||(re=new ko,m[rt]=re);let X=d.getCameraImage(rt);re.sourceTexture=X}}}}for(let ve=0;ve<w.length;ve++){let Te=S[ve],ge=w[ve];Te!==null&&ge!==void 0&&ge.update(Te,oe,c||o)}q&&q(W,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),f=null}let j=new Ap;j.setAnimationLoop(Se),this.setAnimationLoop=function(W){q=W},this.dispose=function(){}}},zM=new yt,Op=new at;Op.set(-1,0,0,0,1,0,0,0,1);function BM(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Tu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,M,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&p(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===hn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===hn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),M=y.envMap,_=y.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(zM.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Op),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kM(i,e,t,n){let s={},r={};function o(y,M){let _=M.program;n.uniformBlockBinding(y,_,s[y.id])}function a(y,M){let _=s[y.id];_===void 0&&(f(y),_=l(y),s[y.id]=_,y.addEventListener("dispose",g));let w=M.program;n.updateUBOMapping(y,w);let S=e.render.frame;r[y.id]!==S&&(c(y),r[y.id]=S)}function l(y){let M=i.createBuffer(),_=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,_,w),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(y){let M=s[y.id],_=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let S=0,v=_.length;S<v;S++){let b=_[S];if(Array.isArray(b))for(let R=0,T=b.length;R<T;R++)h(b[R],S,R,w);else h(b,S,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,M,_,w){if(u(y,M,_,w)===!0){let S=y.__offset,v=y.value;if(Array.isArray(v)){let b=0;for(let R=0;R<v.length;R++){let T=v[R],C=x(T,!0);d(T,y.__data,b),b+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,y.__data)}}function d(y,M,_){typeof y=="number"||typeof y=="boolean"?M[_]=y:y.isMatrix3?(M[_]=y.elements[0],M[_+1]=y.elements[1],M[_+2]=y.elements[2],M[_+3]=0,M[_+4]=y.elements[3],M[_+5]=y.elements[4],M[_+6]=y.elements[5],M[_+7]=0,M[_+8]=y.elements[6],M[_+9]=y.elements[7],M[_+10]=y.elements[8],M[_+11]=0):ArrayBuffer.isView(y)?M.set(y.subarray(0,M.length-_),_):y.toArray(M,_)}function u(y,M,_,w){let S=y.value,v=M+"_"+_;if(Array.isArray(S)){w[v]===void 0&&(w[v]=[]);let b=w[v],R=!1;for(let T=0;T<S.length;T++)p(S[T],b,T)===!0&&(R=!0);return R}return p(S,w,v)}function p(y,M,_){if(M[_]===void 0)return typeof y=="number"||typeof y=="boolean"?M[_]=y:ArrayBuffer.isView(y)?M[_]=y.slice():M[_]=y.clone(),!0;{let w=M[_];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return M[_]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function f(y){let M=y.uniforms,_=0,w=16;for(let v=0,b=M.length;v<b;v++){let R=Array.isArray(M[v])?M[v]:[M[v]];for(let T=0,C=R.length;T<C;T++){let P=R[T],N=Array.isArray(P.value)?P.value:[P.value],D=Array.isArray(M[v])||Array.isArray(P.value),O=_;for(let B=0,ee=N.length;B<ee;B++){let F=N[B],V=x(F,D),q=_%w,Se=q%V.boundary,j=q+Se;_+=Se,j!==0&&w-j<V.storage&&(_+=w-j),B===0&&(O=_),_+=V.storage}let G=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new G((_-O)/Float32Array.BYTES_PER_ELEMENT),P.__offset=O}}let S=_%w;return S>0&&(_+=w-S),y.__size=_,y.__cache={},this}function x(y,M){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=16,_.storage=48):y.isMatrix4?(_.boundary=16,_.storage=64):y.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",y),M===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function g(y){let M=y.target;M.removeEventListener("dispose",g),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:m}}var HM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function GM(){return Ni===null&&(Ni=new es(HM,16,16,ws,sn),Ni.name="DFG_LUT",Ni.minFilter=Fn,Ni.magFilter=Fn,Ni.wrapS=Ai,Ni.wrapT=Ai,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var Vc=class{constructor(e={}){let{canvas:t=Yf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Dn}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let x=p,g=new Set([lc,ac,oc]),m=new Set([Dn,Mi,Zr,is,ic,sc]),y=new Uint32Array(4),M=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},w=null,S=null,v=[],b=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,C=!1,P=null,N=null,D=null,O=null;this._outputColorSpace=Wt;let G=0,B=0,ee=null,F=-1,V=null,q=new Yt,Se=new Yt,j=null,W=new Ne(0),oe=0,ve=t.width,Te=t.height,ge=1,Be=null,ut=null,Oe=new Yt(0,0,ve,Te),rt=new Yt(0,0,ve,Te),re=!1,X=new ys,Q=new Dl,K=!1,fe=!1,he=new yt,He=new L,De=new Yt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function pt(){return ee===null?ge:1}let H=n;function $t(A,k){return t.getContext(A,k)}let dt,Pt,we,Gt,$e,Qe,I,E,$,pe,le,xe,Ee,te,se,ye,z,ae,ne,Re,be,Ae,Ye;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",Le,!1),H===null){let k="webgl2";if(H=$t(k,A),H===null)throw $t(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}mt()}catch(A){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),st("WebGLRenderer: "+A.message),A}function mt(){dt=new Qy(H),dt.init(),be=new UM(H,dt),Pt=new Gy(H,dt,e,be),we=new LM(H,dt),Pt.reversedDepthBuffer&&u&&we.buffers.depth.setReversed(!0),N=H.createFramebuffer(),D=H.createFramebuffer(),O=H.createFramebuffer(),Gt=new n_(H),$e=new yM,Qe=new NM(H,dt,we,$e,Pt,be,Gt),I=new jy(T),E=new sx(H),Ae=new ky(H,E),$=new e_(H,E,Gt,Ae),pe=new s_(H,$,E,Ae,Gt),ae=new i_(H,Pt,Qe),se=new Vy($e),le=new vM(T,I,dt,Pt,Ae,se),xe=new BM(T,$e),Ee=new MM,te=new AM(dt),z=new By(T,I,we,pe,f,l),ye=new DM(T,pe,Pt),Ye=new kM(H,Gt,Pt,we),ne=new Hy(H,dt,Gt),Re=new t_(H,dt,Gt),Gt.programs=le.programs,T.capabilities=Pt,T.extensions=dt,T.properties=$e,T.renderLists=Ee,T.shadowMap=ye,T.state=we,T.info=Gt}x!==Dn&&(R=new o_(x,t.width,t.height,a,s,r));let me=new Bu(T,H);this.xr=me,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(A){A!==void 0&&(ge=A,this.setSize(ve,Te,!1))},this.getSize=function(A){return A.set(ve,Te)},this.setSize=function(A,k,J=!0){if(me.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=A,Te=k,t.width=Math.floor(A*ge),t.height=Math.floor(k*ge),J===!0&&(t.style.width=A+"px",t.style.height=k+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(ve*ge,Te*ge).floor()},this.setDrawingBufferSize=function(A,k,J){ve=A,Te=k,ge=J,t.width=Math.floor(A*J),t.height=Math.floor(k*J),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(x===Dn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(q)},this.getViewport=function(A){return A.copy(Oe)},this.setViewport=function(A,k,J,Y){A.isVector4?Oe.set(A.x,A.y,A.z,A.w):Oe.set(A,k,J,Y),we.viewport(q.copy(Oe).multiplyScalar(pt()).round())},this.getScissor=function(A){return A.copy(rt)},this.setScissor=function(A,k,J,Y){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,k,J,Y),we.scissor(Se.copy(rt).multiplyScalar(pt()).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(A){we.setScissorTest(re=A)},this.setOpaqueSort=function(A){Be=A},this.setTransparentSort=function(A){ut=A},this.getClearColor=function(A){return A.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,J=!0){let Y=0;if(A){let Z=!1;if(ee!==null){let Ie=ee.texture.format;Z=g.has(Ie)}if(Z){let Ie=ee.texture.type,ke=m.has(Ie),Pe=z.getClearColor(),Fe=z.getClearAlpha(),qe=Pe.r,lt=Pe.g,_t=Pe.b;ke?(y[0]=qe,y[1]=lt,y[2]=_t,y[3]=Fe,H.clearBufferuiv(H.COLOR,0,y)):(M[0]=qe,M[1]=lt,M[2]=_t,M[3]=Fe,H.clearBufferiv(H.COLOR,0,M))}else Y|=H.COLOR_BUFFER_BIT}k&&(Y|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),z.dispose(),Ee.dispose(),te.dispose(),Qe.dispose(),$e.dispose(),I.dispose(),pe.dispose(),$.dispose(),Ae.dispose(),Ye.dispose(),le.dispose(),me.dispose(),me.removeEventListener("sessionstart",Td),me.removeEventListener("sessionend",Ad),Os.stop()};function Ke(A){A.preventDefault(),Po("WebGLRenderer: Context Lost."),C=!0}function ft(){Po("WebGLRenderer: Context Restored."),C=!1;let A=Gt.autoReset,k=ye.enabled,J=ye.autoUpdate,Y=ye.needsUpdate,Z=ye.type;mt(),Gt.autoReset=A,ye.enabled=k,ye.autoUpdate=J,ye.needsUpdate=Y,ye.type=Z}function Le(A){st("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ot(A){let k=A.target;k.removeEventListener("dispose",Ot),mn(k)}function mn(A){us(A),$e.remove(A)}function us(A){let k=$e.get(A).programs;k!==void 0&&(k.forEach(function(J){le.releaseProgram(J)}),A.isShaderMaterial&&le.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,J,Y,Z,Ie){k===null&&(k=it);let ke=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Pe=R0(A,k,J,Y,Z);we.setMaterial(Y,ke);let Fe=J.index,qe=1;if(Y.wireframe===!0){if(Fe=$.getWireframeAttribute(J),Fe===void 0)return;qe=2}let lt=J.drawRange,_t=J.attributes.position,Ge=lt.start*qe,Mt=(lt.start+lt.count)*qe;Ie!==null&&(Ge=Math.max(Ge,Ie.start*qe),Mt=Math.min(Mt,(Ie.start+Ie.count)*qe)),Fe!==null?(Ge=Math.max(Ge,0),Mt=Math.min(Mt,Fe.count)):_t!=null&&(Ge=Math.max(Ge,0),Mt=Math.min(Mt,_t.count));let an=Mt-Ge;if(an<0||an===1/0)return;Ae.setup(Z,Y,Pe,J,Fe);let Xt,Vt=ne;if(Fe!==null&&(Xt=E.get(Fe),Vt=Re,Vt.setIndex(Xt)),Z.isMesh)Y.wireframe===!0?(we.setLineWidth(Y.wireframeLinewidth*pt()),Vt.setMode(H.LINES)):Vt.setMode(H.TRIANGLES);else if(Z.isLine){let An=Y.linewidth;An===void 0&&(An=1),we.setLineWidth(An*pt()),Z.isLineSegments?Vt.setMode(H.LINES):Z.isLineLoop?Vt.setMode(H.LINE_LOOP):Vt.setMode(H.LINE_STRIP)}else Z.isPoints?Vt.setMode(H.POINTS):Z.isSprite&&Vt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))Vt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let An=Z._multiDrawStarts,Ve=Z._multiDrawCounts,Nn=Z._multiDrawCount,It=Fe?E.get(Fe).bytesPerElement:1,zs=$e.get(Y).currentProgram.getUniforms();for(let Rn=0;Rn<Nn;Rn++)zs.setValue(H,"_gl_DrawID",Rn),Vt.render(An[Rn]/It,Ve[Rn])}else if(Z.isInstancedMesh)Vt.renderInstances(Ge,an,Z.count);else if(J.isInstancedBufferGeometry){let An=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ve=Math.min(J.instanceCount,An);Vt.renderInstances(Ge,an,Ve)}else Vt.render(Ge,an)};function Ed(A,k,J,Y){P!==null&&A.isNodeMaterial&&P.setObject(Y,A),K===!0&&se.setState(A,J,!1),A.transparent===!0&&A.side===Sn&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,uo(A,k,Y),A.side=Ss,A.needsUpdate=!0,uo(A,k,Y),A.side=Sn):uo(A,k,Y)}this.compile=function(A,k,J=null){J===null&&(J=A),P!==null&&P.renderStart(A,k,J),S=te.get(J),S.init(k),b.push(S),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),A!==J&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights(),P!==null&&P.updateLights(S.state.lightsArray),fe=this.localClippingEnabled,K=se.init(this.clippingPlanes,fe),K===!0&&se.setGlobalState(this.clippingPlanes,k),P!==null&&ye.render(S.state.shadowsArray,J,k);let Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ie=Z.material;if(Ie)if(Array.isArray(Ie))for(let ke=0;ke<Ie.length;ke++){let Pe=Ie[ke];Ed(Pe,J,k,Z),Y.add(Pe)}else Ed(Ie,J,k,Z),Y.add(Ie)}),S=b.pop(),P!==null&&P.renderEnd(),Y},this.compileAsync=function(A,k,J=null){let Y=this.compile(A,k,J);return new Promise(Z=>{function Ie(){if(Y.forEach(function(ke){let Fe=$e.get(ke).currentProgram;(Fe===void 0||Fe.isReady())&&Y.delete(ke)}),Y.size===0){Z(A);return}setTimeout(Ie,10)}dt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let vh=null;function T0(A){vh&&vh(A)}function Td(){Os.stop()}function Ad(){Os.start()}let Os=new Ap;Os.setAnimationLoop(T0),typeof self<"u"&&Os.setContext(self),this.setAnimationLoop=function(A){vh=A,me.setAnimationLoop(A),A===null?Os.stop():Os.start()},me.addEventListener("sessionstart",Td),me.addEventListener("sessionend",Ad),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(A,k);let J=me.enabled===!0&&me.isPresenting===!0,Y=R!==null&&(ee===null||J)&&R.begin(T,ee);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(k),k=me.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,k,ee),S=te.get(A,b.length),S.init(k),S.state.textureUnits=Qe.getTextureUnits(),b.push(S),he.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?Q.setFromArrayCamera(k):X.setFromProjectionMatrix(he,ni,k.reversedDepth),fe=this.localClippingEnabled,K=se.init(this.clippingPlanes,fe),w=Ee.get(A,v.length),w.init(),v.push(w),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){let ke=T.xr.getDepthSensingMesh();ke!==null&&yh(ke,k,-1/0,T.sortObjects)}yh(A,k,0,T.sortObjects),w.finish(),P!==null&&P.updateLights(S.state.lightsArray),T.sortObjects===!0&&w.sort(Be,ut),Xe=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Xe&&z.addToRenderList(w,A),this.info.autoReset===!0&&this.info.reset(),K===!0&&se.beginShadows();let Z=S.state.shadowsArray;if(ye.render(Z,A,k),K===!0&&se.endShadows(),(Y&&R.hasRenderPass())===!1){let ke=w.opaque,Pe=w.transmissive;if(S.setupLights(),k.isArrayCamera){let Fe=k.cameras;if(Pe.length>0)for(let qe=0,lt=Fe.length;qe<lt;qe++){let _t=Fe[qe];Cd(ke,Pe,A,_t)}Xe&&z.render(A);for(let qe=0,lt=Fe.length;qe<lt;qe++){let _t=Fe[qe];Rd(w,A,_t,_t.viewport)}}else Pe.length>0&&Cd(ke,Pe,A,k),Xe&&z.render(A),Rd(w,A,k)}ee!==null&&B===0&&(Qe.updateMultisampleRenderTarget(ee),Qe.updateRenderTargetMipmap(ee)),Y&&R.end(T),A.isScene===!0&&A.onAfterRender(T,A,k),Ae.resetDefaultState(),F=-1,V=null,b.pop(),b.length>0?(S=b[b.length-1],Qe.setTextureUnits(S.state.textureUnits),K===!0&&se.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,v.pop(),v.length>0?w=v[v.length-1]:w=null,P!==null&&P.renderEnd()};function yh(A,k,J,Y){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){let ke=k.isArrayCamera?Q:X;if(!A.frustumCulled||A.intersectsFrustum(ke)){Y&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);let Pe=pe.update(A),Fe=A.material;Fe.visible&&w.push(A,Pe,Fe,J,De.z,null,k)}}else if(A.isMesh||A.isLine||A.isPoints){let ke=k.isArrayCamera?Q:X;if(!A.frustumCulled||A.intersectsFrustum(ke)){let Pe=pe.update(A),Fe=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),De.copy(Pe.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(he)),Array.isArray(Fe)){let qe=Pe.groups;for(let lt=0,_t=qe.length;lt<_t;lt++){let Ge=qe[lt],Mt=Fe[Ge.materialIndex];Mt&&Mt.visible&&w.push(A,Pe,Mt,J,De.z,Ge,k)}}else Fe.visible&&w.push(A,Pe,Fe,J,De.z,null,k)}}}let Ie=A.children;for(let ke=0,Pe=Ie.length;ke<Pe;ke++)yh(Ie[ke],k,J,Y)}function Rd(A,k,J,Y){let{opaque:Z,transmissive:Ie,transparent:ke}=A;S.setupLightsView(J),K===!0&&se.setGlobalState(T.clippingPlanes,J),Y&&we.viewport(q.copy(Y)),Z.length>0&&Ha(Z,k,J),Ie.length>0&&Ha(Ie,k,J),ke.length>0&&Ha(ke,k,J),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Cd(A,k,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){let Ge=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new Zt(1,1,{generateMipmaps:!0,type:Ge?sn:Dn,minFilter:ns,samples:Math.max(4,Pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let Ie=S.state.transmissionRenderTarget[Y.id],ke=Y.viewport||q;Ie.setSize(ke.z*T.transmissionResolutionScale,ke.w*T.transmissionResolutionScale);let Pe=T.getRenderTarget(),Fe=T.getActiveCubeFace(),qe=T.getActiveMipmapLevel();T.setRenderTarget(Ie),T.getClearColor(W),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),Xe&&z.render(J);let lt=T.toneMapping;T.toneMapping=Li;let _t=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),K===!0&&se.setGlobalState(T.clippingPlanes,Y),Ha(A,J,Y),Qe.updateMultisampleRenderTarget(Ie),Qe.updateRenderTargetMipmap(Ie),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Mt=0,an=k.length;Mt<an;Mt++){let Xt=k[Mt],{object:Vt,geometry:An,material:Ve,group:Nn}=Xt;if(Ve.side===Sn&&Vt.layers.test(Y.layers)){let It=Ve.side;Ve.side=hn,Ve.needsUpdate=!0,Pd(Vt,J,Y,An,Ve,Nn),Ve.side=It,Ve.needsUpdate=!0,Ge=!0}}Ge===!0&&(Qe.updateMultisampleRenderTarget(Ie),Qe.updateRenderTargetMipmap(Ie))}T.setRenderTarget(Pe,Fe,qe),T.setClearColor(W,oe),_t!==void 0&&(Y.viewport=_t),T.toneMapping=lt}function Ha(A,k,J){let Y=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Ie=A.length;Z<Ie;Z++){let ke=A[Z],{object:Pe,geometry:Fe,group:qe}=ke,lt=ke.material;lt.allowOverride===!0&&Y!==null&&(lt=Y),Pe.layers.test(J.layers)&&Pd(Pe,k,J,Fe,lt,qe)}}function Pd(A,k,J,Y,Z,Ie){P!==null&&Z.isNodeMaterial&&P.setObject(A,Z),A.onBeforeRender(T,k,J,Y,Z,Ie),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(T,k,J,Y,A,Ie),Z.transparent===!0&&Z.side===Sn&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,T.renderBufferDirect(J,k,Y,Z,A,Ie),Z.side=Ss,Z.needsUpdate=!0,T.renderBufferDirect(J,k,Y,Z,A,Ie),Z.side=Sn):T.renderBufferDirect(J,k,Y,Z,A,Ie),A.onAfterRender(T,k,J,Y,Z,Ie)}function Id(A){let k=0;for(let J of A)J.texture!==null&&k++;return k}function uo(A,k,J){k.isScene!==!0&&(k=it);let Y=$e.get(A),Z=S.state.lights,Ie=S.state.shadowsArray,ke=Z.state.version,Pe=le.getParameters(A,Z.state,Ie,k,J,S.state.lightProbeGridArray),Fe=le.getProgramCacheKey(Pe),qe=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;let lt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=I.get(A.envMap||Y.environment,lt),Y.envMapRotation=Y.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",Ot),qe=new Map,Y.programs=qe,Y.programVariants=new Map);let _t=qe.get(Fe);if(_t!==void 0){if(Y.currentProgram===_t&&Y.lightsStateVersion===ke)return Ld(A,Pe),_t}else Pe.uniforms=le.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,J,Pe),A.onBeforeCompile(Pe,T),_t=le.acquireProgram(Pe,Fe),qe.set(Fe,_t),Y.uniforms=Pe.uniforms;let Ge=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=se.uniform),Ld(A,Pe),Y.needsLights=P0(A),Y.lightsStateVersion=ke,Y.needsLights&&(Ge.ambientLightColor.value=Z.state.ambient,Ge.lightProbe.value=Z.state.probe,Ge.sunLights.value=Z.state.sun,Ge.sunLightShadows.value=Z.state.sunShadow,Ge.directionalLights.value=Z.state.directional,Ge.directionalLightShadows.value=Z.state.directionalShadow,Ge.spotLights.value=Z.state.spot,Ge.spotLightShadows.value=Z.state.spotShadow,Ge.rectAreaLights.value=Z.state.rectArea,Ge.ltc_1.value=Z.state.rectAreaLTC1,Ge.ltc_2.value=Z.state.rectAreaLTC2,Ge.pointLights.value=Z.state.point,Ge.pointLightShadows.value=Z.state.pointShadow,Ge.hemisphereLights.value=Z.state.hemi,Ge.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ge.sunShadowCascade.value=Z.state.sunShadowCascade,Ge.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ge.spotLightMatrix.value=Z.state.spotLightMatrix,Ge.spotLightMap.value=Z.state.spotLightMap,Ge.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.numLightProbeGrids=Id(S.state.lightProbeGridArray),Y.currentProgram=_t,Y.uniformsList=null,_t}function A0(A,k,J,Y,Z){let Ie=$e.get(A),ke=Ie.currentProgram.id+","+Y+","+Z,Pe=Ie.programVariants.get(ke);return Pe===void 0?(Pe=uo(A,k,J),Ie.programVariants.set(ke,Pe)):(Ie.currentProgram=Pe,Ie.uniformsList=null,Ie.outputColorSpace=Y,Ie.toneMapping=Z),Pe}function Dd(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=Jr.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Ld(A,k){let J=$e.get(A);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function R0(A,k,J,Y,Z){k.isScene!==!0&&(k=it),Qe.resetTextureUnits();let Ie=k.fog,ke=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,Pe=ee===null?T.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:vt.workingColorSpace,Fe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,qe=I.get(Y.envMap||ke,Fe),lt=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,_t=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!J.morphAttributes.position,Mt=!!J.morphAttributes.normal,an=!!J.morphAttributes.color,Xt=Li;Y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Xt=T.toneMapping);let Vt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,An=Vt!==void 0?Vt.length:0,Ve=$e.get(Y),Nn=S.state.lights;if(K===!0&&(fe===!0||A!==V)){let Kt=A===V&&Y.id===F;se.setState(Y,A,Kt)}let It=!1,zs=!1;Y.version===Ve.__version?Ve.needsLights&&Ve.lightsStateVersion!==Nn.state.version||Z.isBatchedMesh&&Ve.batching===!1||!Z.isBatchedMesh&&Ve.batching===!0||Z.isBatchedMesh&&Ve.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ve.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ve.instancing===!1||!Z.isInstancedMesh&&Ve.instancing===!0||Z.isSkinnedMesh&&Ve.skinning===!1||!Z.isSkinnedMesh&&Ve.skinning===!0||Z.isInstancedMesh&&Ve.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ve.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ve.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ve.instancingMorph===!1&&Z.morphTexture!==null||Ve.envMap!==qe||Y.fog===!0&&Ve.fog!==Ie||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==se.numPlanes||Ve.numIntersection!==se.numIntersection)||Ve.vertexAlphas!==lt||Ve.vertexTangents!==_t||Ve.morphTargets!==Ge||Ve.morphNormals!==Mt||Ve.morphColors!==an||Ve.morphTargetsCount!==An||Ve.numLightProbeGrids!==Id(S.state.lightProbeGridArray)?It=!0:(Ve.outputColorSpace!==Pe||Ve.toneMapping!==Xt)&&(zs=!0):(It=!0,Ve.__version=Y.version);let Rn=Ve.currentProgram;(It===!0||zs===!0)&&(Rn=zs===!0?A0(Y,k,Z,Pe,Xt):uo(Y,k,Z),P&&Y.isNodeMaterial&&P.onUpdateProgram(Y,Rn,Ve));let Ga=!1,ds=!1,Bs=!1,wt=Rn.getUniforms(),Mn=Ve.uniforms;if(we.useProgram(Rn.program)&&(Ga=!0,ds=!0,Bs=!0),Y.id!==F&&(F=Y.id,ds=!0),Ga||V!==A){we.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),wt.setValue(H,"projectionMatrix",A.projectionMatrix),wt.setValue(H,"viewMatrix",A.matrixWorldInverse);let gn=wt.map.cameraPosition;gn!==void 0&&gn.setValue(H,He.setFromMatrixPosition(A.matrixWorld)),Pt.logarithmicDepthBuffer&&wt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&wt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,ds=!0,Bs=!0)}if(Ve.needsLights&&(Nn.state.sunShadowMap.length>0&&wt.setValue(H,"sunShadowMap",Nn.state.sunShadowMap,Qe),Nn.state.directionalShadowMap.length>0&&wt.setValue(H,"directionalShadowMap",Nn.state.directionalShadowMap,Qe),Nn.state.spotShadowMap.length>0&&wt.setValue(H,"spotShadowMap",Nn.state.spotShadowMap,Qe),Nn.state.pointShadowMap.length>0&&wt.setValue(H,"pointShadowMap",Nn.state.pointShadowMap,Qe)),Z.isSkinnedMesh){wt.setOptional(H,Z,"bindMatrix"),wt.setOptional(H,Z,"bindMatrixInverse");let Kt=Z.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),wt.setValue(H,"boneTexture",Kt.boneTexture,Qe))}Z.isBatchedMesh&&(wt.setOptional(H,Z,"batchingTexture"),wt.setValue(H,"batchingTexture",Z._matricesTexture,Qe),wt.setOptional(H,Z,"batchingIdTexture"),wt.setValue(H,"batchingIdTexture",Z._indirectTexture,Qe),wt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&wt.setValue(H,"batchingColorTexture",Z._colorsTexture,Qe));let ui=J.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&ae.update(Z,J,Rn),(ds||Ve.receiveShadow!==Z.receiveShadow)&&(Ve.receiveShadow=Z.receiveShadow,wt.setValue(H,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Mn.envMapIntensity.value=k.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=GM()),ds){if(wt.setValue(H,"toneMappingExposure",T.toneMappingExposure),Ve.needsLights&&C0(Mn,Bs),Ie&&Y.fog===!0&&xe.refreshFogUniforms(Mn,Ie),xe.refreshMaterialUniforms(Mn,Y,ge,Te,S.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.numLightProbeGrids>0){let Kt=_,gn=0;for(let Wi of S.state.lightProbeGridArray)Wi.texture!==null&&(Kt.textures[gn]=Wi.texture,Kt.min[gn]=Wi.boundingBox.min,Kt.max[gn]=Wi.boundingBox.max,Kt.resolution[gn]=Wi.resolution,gn++);for(let Wi in Kt)Kt[Wi].length=gn;Mn.probesSH.value=Kt.textures,Mn.probesMin.value=Kt.min,Mn.probesMax.value=Kt.max,Mn.probesResolution.value=Kt.resolution}Jr.upload(H,Dd(Ve),Mn,Qe)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Jr.upload(H,Dd(Ve),Mn,Qe),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&wt.setValue(H,"center",Z.center),wt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),wt.setValue(H,"normalMatrix",Z.normalMatrix),wt.setValue(H,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Kt=Y.uniformsGroups;for(let gn=0,Wi=Kt.length;gn<Wi;gn++){let Ud=Kt[gn];Ye.update(Ud,Rn),Ye.bind(Ud,Rn)}}return Rn}function C0(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function P0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(A,k,J){let Y=$e.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),$e.get(A.texture).__webglTexture=k,$e.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let J=$e.get(A);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,J=0){ee=A,G=k,B=J;let Y=null,Z=!1,Ie=!1;if(A){let Pe=$e.get(A);if(Pe.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(H.FRAMEBUFFER,Pe.__webglFramebuffer),q.copy(A.viewport),Se.copy(A.scissor),j=A.scissorTest,we.viewport(q),we.scissor(Se),we.setScissorTest(j),F=-1;return}else if(Pe.__webglFramebuffer===void 0)Qe.setupRenderTarget(A);else if(Pe.__hasExternalTextures)Qe.rebindTextures(A,$e.get(A.texture).__webglTexture,$e.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let lt=A.depthTexture;if(Pe.__boundDepthTexture!==lt){if(lt!==null&&$e.has(lt)&&(A.width!==lt.image.width||A.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(A)}}let Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ie=!0);let qe=$e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[k])?Y=qe[k][J]:Y=qe[k],Z=!0):A.samples>0&&Qe.useMultisampledRTT(A)===!1?Y=$e.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?Y=qe[J]:Y=qe,q.copy(A.viewport),Se.copy(A.scissor),j=A.scissorTest}else q.copy(Oe).multiplyScalar(ge).floor(),Se.copy(rt).multiplyScalar(ge).floor(),j=re;if(J!==0&&(Y=N),we.bindFramebuffer(H.FRAMEBUFFER,Y)&&we.drawBuffers(A,Y),we.viewport(q),we.scissor(Se),we.setScissorTest(j),Z){let Pe=$e.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,J)}else if(Ie){let Pe=k;for(let Fe=0;Fe<A.textures.length;Fe++){let qe=$e.get(A.textures[Fe]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Fe,qe.__webglTexture,J,Pe)}}else if(A!==null&&J!==0){let Pe=$e.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pe.__webglTexture,J)}F=-1};function Nd(A){let k=$e.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=Pt.textureFormatReadable(A.format),k.__typeReadable=Pt.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,J,Y,Z,Ie,ke,Pe=0){if(!(A&&A.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Fe=Fe[ke],Array.isArray(Fe)&&(Fe=Fe[0])),Fe){we.bindFramebuffer(H.FRAMEBUFFER,Fe);try{let qe=A.textures[Pe],lt=qe.format,_t=qe.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe);let Ge=Nd(qe);if(Ge.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Y&&J>=0&&J<=A.height-Z&&H.readPixels(k,J,Y,Z,be.convert(lt),be.convert(_t),Ie)}finally{let qe=ee!==null?$e.get(ee).__webglFramebuffer:null;we.bindFramebuffer(H.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(A,k,J,Y,Z,Ie,ke,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Fe=Fe[ke],Array.isArray(Fe)&&(Fe=Fe[0])),Fe)if(k>=0&&k<=A.width-Y&&J>=0&&J<=A.height-Z){we.bindFramebuffer(H.FRAMEBUFFER,Fe);let qe=A.textures[Pe],lt=qe.format,_t=qe.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe);let Ge=Nd(qe);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Mt),H.bufferData(H.PIXEL_PACK_BUFFER,Ie.byteLength,H.STREAM_READ),H.readPixels(k,J,Y,Z,be.convert(lt),be.convert(_t),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let an=ee!==null?$e.get(ee).__webglFramebuffer:null;we.bindFramebuffer(H.FRAMEBUFFER,an);let Xt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Jf(H,Xt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Mt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ie),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Mt),H.deleteSync(Xt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,J=0){let Y=Math.pow(2,-J),Z=Math.floor(A.image.width*Y),Ie=Math.floor(A.image.height*Y),ke=k!==null?k.x:0,Pe=k!==null?k.y:0;Qe.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,J,0,0,ke,Pe,Z,Ie),we.unbindTexture()},this.copyTextureToTexture=function(A,k,J=null,Y=null,Z=0,Ie=0){let ke,Pe,Fe,qe,lt,_t,Ge,Mt,an,Xt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(J!==null)ke=J.max.x-J.min.x,Pe=J.max.y-J.min.y,Fe=J.isBox3?J.max.z-J.min.z:1,qe=J.min.x,lt=J.min.y,_t=J.isBox3?J.min.z:0;else{let wt=Math.pow(2,-Z);ke=Math.floor(Xt.width*wt),Pe=Math.floor(Xt.height*wt),A.isDataArrayTexture?Fe=Xt.depth:A.isData3DTexture?Fe=Math.floor(Xt.depth*wt):Fe=1,qe=0,lt=0,_t=0}Y!==null?(Ge=Y.x,Mt=Y.y,an=Y.z):(Ge=0,Mt=0,an=0);let Vt=be.convert(k.format),An=be.convert(k.type),Ve;k.isData3DTexture?(Qe.setTexture3D(k,0),Ve=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Qe.setTexture2DArray(k,0),Ve=H.TEXTURE_2D_ARRAY):(Qe.setTexture2D(k,0),Ve=H.TEXTURE_2D),we.activeTexture(H.TEXTURE0),we.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),we.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),we.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let Nn=we.getParameter(H.UNPACK_ROW_LENGTH),It=we.getParameter(H.UNPACK_IMAGE_HEIGHT),zs=we.getParameter(H.UNPACK_SKIP_PIXELS),Rn=we.getParameter(H.UNPACK_SKIP_ROWS),Ga=we.getParameter(H.UNPACK_SKIP_IMAGES);we.pixelStorei(H.UNPACK_ROW_LENGTH,Xt.width),we.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Xt.height),we.pixelStorei(H.UNPACK_SKIP_PIXELS,qe),we.pixelStorei(H.UNPACK_SKIP_ROWS,lt),we.pixelStorei(H.UNPACK_SKIP_IMAGES,_t);let ds=A.isDataArrayTexture||A.isData3DTexture,Bs=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let wt=$e.get(A),Mn=$e.get(k),ui=$e.get(wt.__renderTarget),Kt=$e.get(Mn.__renderTarget);we.bindFramebuffer(H.READ_FRAMEBUFFER,ui.__webglFramebuffer),we.bindFramebuffer(H.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let gn=0;gn<Fe;gn++)ds&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.get(A).__webglTexture,Z,_t+gn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.get(k).__webglTexture,Ie,an+gn)),H.blitFramebuffer(qe,lt,qe+ke,lt+Pe,Ge,Mt,Ge+ke,Mt+Pe,H.DEPTH_BUFFER_BIT,H.NEAREST);we.bindFramebuffer(H.READ_FRAMEBUFFER,null),we.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||$e.has(A)){let wt=$e.get(A),Mn=$e.get(k);we.bindFramebuffer(H.READ_FRAMEBUFFER,D),we.bindFramebuffer(H.DRAW_FRAMEBUFFER,O);for(let ui=0;ui<Fe;ui++)ds?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wt.__webglTexture,Z,_t+ui):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,wt.__webglTexture,Z),Bs?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Mn.__webglTexture,Ie,an+ui):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Mn.__webglTexture,Ie),Z!==0?H.blitFramebuffer(qe,lt,qe+ke,lt+Pe,Ge,Mt,Ge+ke,Mt+Pe,H.COLOR_BUFFER_BIT,H.NEAREST):Bs?H.copyTexSubImage3D(Ve,Ie,Ge,Mt,an+ui,qe,lt,ke,Pe):H.copyTexSubImage2D(Ve,Ie,Ge,Mt,qe,lt,ke,Pe);we.bindFramebuffer(H.READ_FRAMEBUFFER,null),we.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Bs?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Ve,Ie,Ge,Mt,an,ke,Pe,Fe,Vt,An,Xt.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(Ve,Ie,Ge,Mt,an,ke,Pe,Fe,Vt,Xt.data):H.texSubImage3D(Ve,Ie,Ge,Mt,an,ke,Pe,Fe,Vt,An,Xt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ie,Ge,Mt,ke,Pe,Vt,An,Xt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ie,Ge,Mt,Xt.width,Xt.height,Vt,Xt.data):H.texSubImage2D(H.TEXTURE_2D,Ie,Ge,Mt,ke,Pe,Vt,An,Xt);we.pixelStorei(H.UNPACK_ROW_LENGTH,Nn),we.pixelStorei(H.UNPACK_IMAGE_HEIGHT,It),we.pixelStorei(H.UNPACK_SKIP_PIXELS,zs),we.pixelStorei(H.UNPACK_SKIP_ROWS,Rn),we.pixelStorei(H.UNPACK_SKIP_IMAGES,Ga),Ie===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&H.generateMipmap(Ve),we.unbindTexture()},this.initRenderTarget=function(A){$e.get(A).__webglFramebuffer===void 0&&Qe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Qe.setTextureCube(A,0):A.isData3DTexture?Qe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Qe.setTexture2DArray(A,0):Qe.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){G=0,B=0,ee=null,we.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}};var Aa=new L;function ai(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Aa.copy(e),Aa[n]=0,Aa.normalize();let c=.5*o/(o+a),h=1-Aa.angleTo(i)/l;return Math.sign(Aa[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Qr=class i extends nn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new L,c=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,f=d.length/6,x=new L,g=.5/o;for(let m=0,y=0;m<d.length;m+=3,y+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[m+0]=h.x*Math.sign(l.x)+c.x*r,d[m+1]=h.y*Math.sign(l.y)+c.y*r,d[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:x.set(1,0,0),p[y+0]=ai(x,c,"z","y",r,n),p[y+1]=1-ai(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),p[y+0]=1-ai(x,c,"z","y",r,n),p[y+1]=1-ai(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),p[y+0]=1-ai(x,c,"x","z",r,e),p[y+1]=ai(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),p[y+0]=1-ai(x,c,"x","z",r,e),p[y+1]=1-ai(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),p[y+0]=1-ai(x,c,"x","y",r,e),p[y+1]=1-ai(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),p[y+0]=ai(x,c,"x","y",r,e),p[y+1]=1-ai(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Je=Math.PI*2,Vn=Math.PI/180,ct=(i,e,t)=>Math.max(e,Math.min(t,i)),ot=(i,e,t)=>i+(e-i)*t,Lt=(i,e,t)=>{let n=ct((t-i)/(e-i),0,1);return n*n*(3-2*n)},Bt=(i,e,t,n)=>ot(i,e,1-Math.exp(-t*n)),rs=(i,e)=>Math.atan2(Math.sin(e-i),Math.cos(e-i)),Fi=(i,e,t,n)=>i+rs(i,e)*(1-Math.exp(-t*n));function Oi(i){let e=i>>>0||1;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)}function Ra(i){let e=2166136261;for(let t of String(i))e^=t.codePointAt(0),e=Math.imul(e,16777619);return e>>>0}var zp=(i,e,t)=>{let n=e.map(t),s=n.reduce((o,a)=>o+a,0);if(s<=0)return null;let r=i()*s;for(let o=0;o<e.length;o++)if(r-=n[o],r<=0)return e[o];return e[e.length-1]};function qc(i,e,t){let n=Math.imul(i,1402946737)^Math.imul(e,1597334677)^t;return n=Math.imul(n^n>>>16,2146121005),((n^n>>>15)>>>0)/4294967295}function wi(i,e,t=0){let n=Math.floor(i),s=Math.floor(e),r=i-n,o=e-s,a=r*r*(3-2*r),l=o*o*(3-2*o);return ot(ot(qc(n,s,t),qc(n+1,s,t),a),ot(qc(n,s+1,t),qc(n+1,s+1,t),a),l)}function rn(i,e,t=0,n=4){let s=0,r=.5,o=1,a=0;for(let l=0;l<n;l++)s+=r*(wi(i*o,e*o,t+l*131)*2-1),a+=r,o*=2.03,r*=.5;return s/a}function ku(i,e,t=0,n=4){let s=0,r=.5,o=1,a=0;for(let l=0;l<n;l++){let c=1-Math.abs(wi(i*o,e*o,t+l*71)*2-1);s+=r*c*c,a+=r,o*=2.1,r*=.5}return s/a}var VM=["regolith","rock","panel","metal","printed","fabric","cloth","plate","rubber","soil","fur","solar"],WM=new Set(["regolith","panel","metal","fabric","cloth","plate","rubber","fur"]),XM=1/.75,Es={},Bp=null,kt={enabled:!1,dustColor:{value:new Ne("#b07a5c")},dustAmount:{value:1}};async function kp(i,{quality:e="high",base:t=new URL("./assets/tex/",import.meta.url)}={}){if(e==="low"||kt.enabled)return kt.enabled;let n=new js,s=Math.min(e==="high"?8:4,i?.capabilities?.getMaxAnisotropy?.()??8),r=(o,a)=>n.loadAsync(new URL(o,t).href).then(l=>(l.wrapS=l.wrapT=vn,l.colorSpace=a?Wt:Si,l.anisotropy=s,l));try{let o=VM.map(async a=>{let[l,c]=await Promise.all([r(`${a}_albedo.webp`,!0),r(`${a}_normal.webp`,!1)]);Es[a]={albedo:l,normal:c}});o.push(r("grime.webp",!1).then(a=>{Bp=a})),await Promise.race([Promise.all(o),new Promise((a,l)=>setTimeout(()=>l(new Error("slow")),25e3))]),kt.enabled=!0}catch{kt.enabled=!1}return kt.enabled}var qM=`
varying vec3 vRPos;
varying vec3 vRNrm;
varying float vRLow;
#ifdef R_OBJECT
varying vec3 vRX;
varying vec3 vRY;
varying vec3 vRZ;
#endif`,$M=`
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
}`,YM=`
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
}`,ZM=`
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
}`,JM=`
{
  float top = smoothstep(0.3, 0.92, rNormalW.y);
  float low = (1.0 - smoothstep(0.0, 1.5, vRLow)) * rLow;
  float streak = (1.0 - abs(rNormalW.y)) * smoothstep(0.35, 0.95, rGr.g) * 0.35;
  rDustF = clamp((top * (0.25 + 0.75 * rGr.r) + low * (0.35 + 0.65 * rGr.b) + streak) * rDust * rDustAmount, 0.0, 0.94);
  diffuseColor.rgb = mix(diffuseColor.rgb, rDustColor * (0.82 + 0.36 * rGr.b), rDustF);
  rNormalW = normalize(mix(rNormalW, normalize(vRNrm), rDustF * 0.75));
}`,KM=`
roughnessFactor = mix(roughnessFactor, rAlb.a, rRoughMix);
roughnessFactor = mix(roughnessFactor, 0.97, rDustF);`,jM=`
metalnessFactor = mix(metalnessFactor, 0.0, rDustF);`,QM=`
#ifdef R_OBJECT
  normal = normalize(mat3(vRX, vRY, vRZ) * rNormalW);
#else
  normal = normalize((viewMatrix * vec4(rNormalW, 0.0)).xyz);
#endif
#ifdef DOUBLE_SIDED
  normal *= faceDirection;
#endif`;function Ts(i,e,{scale:t=1,dust:n=.6,low:s=.5,normal:r=1,rough:o=.75,gain:a=null,object:l=!1,planar:c=!1,terrain:h=null}={}){if(!kt.enabled||!Es[e]||Object.hasOwn(i,"onBeforeCompile"))return i;let d=Es[e],u={rAlbedo:{value:d.albedo},rNormal:{value:d.normal},rGrime:{value:Bp},rScale:{value:1/t},rGain:{value:a??(WM.has(e)?XM:1)},rNormalScale:{value:r},rDust:{value:n},rLow:{value:s},rRoughMix:{value:o},rDustColor:kt.dustColor,rDustAmount:kt.dustAmount},p={};return l&&(p.R_OBJECT=""),c&&(p.R_PLANAR=""),h&&(p.R_TERRAIN="",u.rAlbedo2={value:Es[h.rock??"rock"].albedo},u.rNormal2={value:Es[h.rock??"rock"].normal},u.rScale2={value:1/(h.rockScale??3)}),i.defines={...i.defines,...p},i.userData.realism={set:e,opts:{scale:t,dust:n,low:s,normal:r,rough:o,gain:a,object:l,planar:c,terrain:h}},i.onBeforeCompile=f=>{Object.assign(f.uniforms,u),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
${qM}`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
${$M}`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
${YM}`).replace("#include <map_fragment>",`#include <map_fragment>
${ZM}`).replace("#include <color_fragment>",`#include <color_fragment>
${JM}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${KM}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${jM}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${QM}`)},i.customProgramCacheKey=()=>"realism-v1",i.needsUpdate=!0,i}function Hp(i){if(!kt.enabled)return i;let e=Es.solar;return new _i({color:"#ffffff",map:e.albedo,roughnessMap:null,normalMap:e.normal,normalScale:new ce(.6,.6),roughness:.18,metalness:.25,clearcoat:1,clearcoatRoughness:.08})}function eo(i,e,t=4,n=.6){if(!kt.enabled||!Es[e])return i;let s=Es[e].normal.clone();return s.repeat.set(t,t),s.needsUpdate=!0,i.normalMap=s,i.normalScale=new ce(n,n),i.needsUpdate=!0,i}function Gp(i,e,{size:t=128}={}){let n=new Kr(i),s=new $s,r=new Ce(new Dt(50,48,24),e);r.frustumCulled=!1,s.add(r);let o=new Jt({color:"#6b4232",fog:!1}),a=new Ce(new Js(48,48).rotateX(-Math.PI/2),o);a.position.y=-1.5,s.add(a);let l=null,c="",h=-1e9;return{update(d,u,p,f,x=2.5){if(p===c||f-h<x)return!1;c=p,h=f,o.color.copy(u);let g=e.uniforms.envMode;g&&(g.value=1);let m=n.fromScene(s,0,.1,120,{size:t});return g&&(g.value=0),d.environment=m.texture,l?.dispose(),l=m,!0},dispose(){l?.dispose(),n.dispose()}}}function Vp(i,e=2){let t=i*9301+49297,n=()=>(t=(t*9301+49297)%233280)/233280,s=new Di(1,e),r=s.attributes.position,o=[],a=3+Math.floor(n()*4);for(let h=0;h<a;h++){let d=new L(n()*2-1,n()*1.6-.4,n()*2-1).normalize();o.push({n:d,d:.62+n()*.25})}let l=new L,c=[.8+n()*.5,.65+n()*.35,.8+n()*.5];for(let h=0;h<r.count;h++){l.fromBufferAttribute(r,h);let d=1+.22*rn(l.x*1.7+i,l.y*1.7+l.z*1.3,i%97)+.06*rn(l.x*5,l.z*5+l.y*4,i%89+7);l.multiplyScalar(d);for(let u of o){let p=l.dot(u.n)-u.d;p>0&&l.addScaledVector(u.n,-p*.92)}l.set(l.x*c[0],Math.max(l.y*c[1],-.32),l.z*c[2]),r.setXYZ(h,l.x,l.y,l.z)}return s.computeVertexNormals(),s}function Wp(i){let e=i.clone(),t=i.userData.realism;return t&&Ts(e,t.set,t.opts),e}var e1=new Dt(1,24,16),t1=new Qr(1,1,1,3,.18),n1=new Rt(1,1,1,20),os=(i,e=.73,t=.02)=>new tt({color:i,roughness:e,metalness:t});function Ca(i,e,t,n,s,r,o,a,l){let c=new Ce(e,t);return c.position.set(n,s,r),c.scale.set(o,a,l),c.castShadow=!0,i.add(c),c}function i1(){let i=new kr;i.moveTo(-.175,0),i.quadraticCurveTo(-.175,.16,-.105,.31),i.quadraticCurveTo(-.092,.35,-.047,.304),i.quadraticCurveTo(.1,.16,.174,0),i.lineTo(-.175,0);let e=new Ko(i,{depth:.06,bevelEnabled:!0,bevelThickness:.032,bevelSize:.035,bevelSegments:3,steps:1});return e.translate(0,0,-.03),e}var Xp=i1();function $c(i,e={}){let t=new ze,n=new ze;t.add(n),i.add(t);let s=kt.enabled,r=eo(os(e.suit??"#e9dcd1",.88),"cloth",7,.55),o=eo(os("#a99aa5",.85),"cloth",7,.55),a=eo(os(e.pack??"#3e3d58",.6,s?.25:.02),"panel",2,.4),l=eo(os(e.trim??"#e79459",.8),"cloth",7,.5),c=os(s?"#9ea2ab":"#737684",s?.28:.38,s?.85:.25),h=j=>s?eo(new _i({color:j,roughness:.82,sheen:1,sheenRoughness:.5,sheenColor:new Ne(j).lerp(new Ne("#ffffff"),.35)}),"fur",5,.45):os(j),d=h(e.fur??"#d9a376"),u=h(e.cream??"#fae0bc"),p=os(e.inner??"#d88685",.7),f=s?new _i({color:"#1d1820",roughness:.15,clearcoat:1,clearcoatRoughness:.05}):os("#302735"),x=os(e.nose??"#302735",.45),g=h(e.stripe??"#9d6549"),m=new tt({color:"#7ac2c2",emissive:"#3a8885",emissiveIntensity:.42}),y=(j,W,...oe)=>Ca(j,e1,W,...oe),M=(j,W,...oe)=>Ca(j,t1,W,...oe),_=(j,W,...oe)=>Ca(j,n1,W,...oe);y(n,r,0,.99,0,.35,.44,.229),M(n,a,0,.73,0,.58,.13,.43),M(n,l,0,.74,.23,.11,.095,.055),_(n,o,0,1.31,0,.285,.1,.25),_(n,a,0,1.35,0,.254,.046,.227);let w=new ze;w.position.set(0,1.04,.225),n.add(w),M(w,a,0,0,0,.57,.59,.25),M(w,r,0,.005,.134,.43,.48,.13),M(w,c,0,-.15,.2,.27,.107,.045);for(let j of[-1,1])_(w,r,j*.255,-.016,.125,.08,.385,.08),_(w,l,j*.255,.07,.125,.082,.05,.082),M(w,a,j*.113,-.154,.228,.045,.026,.01);M(w,m,.048,-.154,.228,.057,.024,.01),y(w,l,0,.045,.208,.055,.041,.009);for(let[j,W]of[[-.06,.089],[-.022,.115],[.022,.115],[.06,.089]])y(w,l,j,W,.208,.016,.021,.009);let S=new ze;S.position.set(0,1.68,-.024),n.add(S),y(S,d,0,0,0,.334,.287,.282),y(S,u,0,-.074,-.11,.29,.19,.205);let v=[],b=[];for(let j of[-1,1]){let W=Ca(S,Xp,d,j*.2,.145,.013,j,1.02,1.25);W.rotation.z=j*-.25;let oe=Ca(S,Xp,p,j*.2,.173,-.036,j*.65,.74,.27);oe.rotation.z=W.rotation.z,v.push({ear:W,lining:oe,side:j}),b.push(y(S,f,j*.11,-.018,-.277,.037,.055,.019));let ve=y(S,g,j*.115,.072,.255,.035,.119,.03);ve.rotation.z=j*-.35,y(S,g,j*.258,.003,.166,.044,.046,.025)}y(S,g,0,.117,.258,.032,.089,.03),y(S,x,0,-.1,-.304,.04,.027,.021);let R=new ze;R.position.set(0,1.66,0),n.add(R);let T=new Ce(new yi(.343,.039,10,36),c);T.rotation.x=Math.PI/2,T.scale.set(1,.87,1),T.position.y=-.249,R.add(T);for(let j of[-1,1])y(R,a,j*.351,-.035,.005,.07,.115,.104),y(R,r,j*.388,-.035,.005,.046,.084,.078),y(R,l,j*.417,-.035,.005,.025,.045,.041);let C=s?new _i({color:"#e8d2a6",metalness:.65,roughness:.05,transparent:!0,opacity:.3,depthWrite:!1,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.8}):new Et({transparent:!0,depthWrite:!1,vertexShader:`
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
      }`}),P=y(R,C,0,.067,-.025,.408,.477,.371);P.castShadow=!1,P.renderOrder=4;let N=[],D=[];for(let j of[-1,1]){let W=new ze,oe=new ze;W.position.set(j*.34,1.21,.005),W.rotation.z=j*.16,oe.position.set(j*.051,-.258,0),y(W,r,j*.029,-.1,0,.126,.223,.137),y(W,l,j*.084,-.056,.005,.079,.09,.086),y(oe,a,0,.01,0,.09,.08,.093),y(oe,r,0,-.087,-.009,.104,.142,.112),_(oe,l,0,-.172,0,.094,.046,.093),y(oe,a,0,-.226,-.01,.096,.11,.102),y(oe,a,-j*.065,-.205,-.039,.052,.072,.058),W.add(oe),n.add(W),N.push({arm:W,elbow:oe});let ve=new ze,Te=new ze;ve.position.set(j*.16,.73,0),Te.position.set(0,-.305,0),y(ve,r,0,-.125,0,.142,.229,.145),y(Te,o,0,.017,-.05,.131,.096,.127),y(Te,r,0,-.132,0,.12,.168,.12),_(Te,l,0,-.232,0,.125,.053,.117),M(Te,a,0,-.356,-.065,.294,.111,.414),M(Te,r,0,-.298,-.072,.273,.128,.37),ve.add(Te),n.add(ve),D.push({leg:ve,shin:Te})}let O=[],G=new ze;G.position.set(0,.74,.25),n.add(G);for(let j=0;j<6;j++){let W=.075-j*.008;y(G,j===0?r:j===5?u:d,0,0,.07,W,W,.1),O.push(G);let oe=new ze;oe.position.set(0,0,.13),G.add(oe),G=oe}let B=0,ee=0,F=0,V=2.5,q=4,Se={value:1};return{rig:t,head:S,helmet:R,materials:{suit:r,trim:l,indigo:a,fur:d,cream:u,stripe:g,innerEar:p,nose:x},setHelmet(j){R.visible=j},cheer(){F=1},animate(j,W,oe,ve,Te){F=Math.max(0,F-j/1.1),V-=j;let ge=!Te&&V<.12;V<0&&(V=2.2+Math.random()*3.5);for(let K of b)K.scale.y=ge?.008:.055;q-=j,q<0&&(q=3+Math.random()*5,Se.value=Math.random()<.5?-1:1);let Be=!Te&&q>0&&q<.25?Math.sin(q/.25*Math.PI)*.35:0;for(let{ear:K,lining:fe,side:he}of v){let He=he*-.25+(he===Se.value?Be*he:0);K.rotation.z=He,fe.rotation.z=He}let ut=Te?0:Math.abs(Math.sin(F*Math.PI*2))*F,Oe=kc.clamp(W/2.5,0,1);B+=W*j*4.7,ee+=j;let rt=Math.sin(B)*Oe,re=(1-Math.cos(B*2))*Oe,X=ve>0?Math.sin(Math.PI*ve):0;n.position.y=oe+ut*.5+(Te?0:re*.043+Math.sin(ee*2.7)*.012),n.rotation.z=Te?0:rt*.048,n.rotation.x=Oe*-.06+X*-.15,S.rotation.y=Te?0:Math.sin(B*.37)*Oe*.12+Math.sin(ee*.81)*(1-Oe)*.09,S.rotation.x=X*.13;let Q=Te?0:Math.sin(ee*(2.2+F*6))*(.18+F*.3+Oe*.1);O.forEach((K,fe)=>{K.rotation.y=Q*(.4+fe*.12)+Math.sin(ee*1.3+fe)*.04,K.rotation.x=fe===0?-.6:-.12-Oe*.05});for(let K=0;K<2;K++){let fe=B+Math.PI*K,he=Math.sin(fe)*Oe;D[K].leg.rotation.x=he*.63,D[K].shin.rotation.x=Math.max(0,Math.cos(fe))*Oe*.69,N[K].arm.rotation.x=-he*.5-(K===1?X*.76:0)-(ut>0?2.4*Math.min(1,F*3):0),N[K].elbow.rotation.x=-.2-Math.max(0,he)*.34-(K===1?X*.38:0)}}}}var Yc={mishti:{name:"Mishti",ear:"#e2a982",face:"#efbb95",inner:"#ba8183",suit:"#b6a3e6"},megh:{name:"Megh",ear:"#efe3d2",face:"#fbf4ea",inner:"#e3a9a4",suit:"#f2b36b"},neel:{name:"Neel",ear:"#7f93b8",face:"#aebbd6",inner:"#d7a3ad",suit:"#5fb0e8"},tara:{name:"Tara",ear:"#6f5763",face:"#8f727c",inner:"#c98f96",suit:"#f09ab0"}},s1="astro-kitty-avatar";function Zc(i=globalThis.localStorage){try{let e=i?.getItem(s1);return Object.hasOwn(Yc,e??"")?e:"mishti"}catch{return"mishti"}}var qp=(i,e)=>{let t=parseInt(i.slice(1),16);return"#"+[t>>16&255,t>>8&255,t&255].map(s=>Math.max(0,Math.min(255,Math.round(s*e)))).map(s=>s.toString(16).padStart(2,"0")).join("")};function Jc(i){let e=Yc[i]??Yc.mishti;return{name:e.name,fur:e.ear,cream:e.face,inner:e.inner,stripe:qp(e.ear,.72),nose:qp(e.inner,.85),trim:e.suit}}function $p(i){return Object.keys(Yc).filter(e=>e!==i)}var Yp="astro-kitty-sound-v3";function Zp(){try{return localStorage.getItem(Yp)!=="off"}catch{return!0}}function Jp(i){try{localStorage.setItem(Yp,i?"on":"off");let e=JSON.parse(localStorage.getItem("astro-kitty-profile-v1")||"{}");localStorage.setItem("astro-kitty-profile-v1",JSON.stringify({...e,voice:i,captions:!0}))}catch{}}function r1(i=globalThis.CanvasRenderingContext2D?.prototype){!i||i.roundRect||(i.roundRect=function(e,t,n,s,r=0){let o=Array.isArray(r)?r:[r];if(o.length<1||o.length>4)throw new RangeError("Invalid radii");let a=o.map(f=>typeof f=="number"?{x:f,y:f}:f);if(a.some(f=>f.x<0||f.y<0))throw new RangeError("Negative radius");let l=a[0],c=a[1]??l,h=a[3]??a[1]??l,d=a[2]??l;n<0&&(e+=n,n=-n,[l,c,d,h]=[c,l,h,d]),s<0&&(t+=s,s=-s,[l,c,d,h]=[h,d,c,l]);let u=Math.min(1,n/(l.x+c.x||1),n/(h.x+d.x||1),s/(l.y+h.y||1),s/(c.y+d.y||1));return[l,c,d,h]=[l,c,d,h].map(f=>({x:f.x*u,y:f.y*u})),this.moveTo(e+l.x,t),this.lineTo(e+n-c.x,t),this.quadraticCurveTo(e+n,t,e+n,t+c.y),this.lineTo(e+n,t+s-d.y),this.quadraticCurveTo(e+n,t+s,e+n-d.x,t+s),this.lineTo(e+h.x,t+s),this.quadraticCurveTo(e,t+s,e,t+s-h.y),this.lineTo(e,t+l.y),this.quadraticCurveTo(e,t,e+l.x,t),this.closePath(),this})}r1();function o1(){try{return JSON.parse(localStorage.getItem("astro-kitty-profile-v1")||"{}")||{}}catch{return{}}}if(typeof document<"u"){let i=o1();document.body?.classList.toggle("big-text",!!i.bigText),document.body?.classList.toggle("reduce-motion",!!i.reduceMotion)}function Kp(i=globalThis.speechSynthesis){if(!i)return Promise.resolve([]);let e=i.getVoices();return e.length?Promise.resolve(e):new Promise(t=>{let n,s=()=>{clearTimeout(n),i.removeEventListener?.("voiceschanged",r),t(i.getVoices())},r=()=>{i.getVoices().length&&s()};i.addEventListener?.("voiceschanged",r),n=setTimeout(s,1800),r()})}var a1=/natural|neural|premium|enhanced|online/i,l1=/Samantha|Ava|Allison|Serena|Karen|Moira|Tessa|Aria|Jenny|Sonia|Libby|Neerja|Google (UK|US) English|Google English/i,c1=/eSpeak|Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Fred|Junior|Ralph|compact/i;function jp(i=[],e=/^en[-_]/i){let t=null,n=-1e9;for(let s of i){if(!e.test(s.lang||""))continue;let r=0;a1.test(s.name)&&(r+=60),l1.test(s.name)&&(r+=25),c1.test(s.name)&&(r-=200),/^en[-_](US|GB|IN|AU)/i.test(s.lang)&&(r+=4),s.default&&(r+=2),r>n&&(n=r,t=s)}return t}function Pa(i){return String(i??"").replace(/\s+/g," ").trim()}function Hu(i){let e=Pa(i),t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return"v_"+t.toString(16).padStart(8,"0")+".mp3"}function h1(i){return Pa(i).split(/(?<=[.!?…][)"”’']*)\s+/).filter(Boolean)}function Kc(i,e){let t=Pa(i);if(!t)return[];if(e(Hu(t)))return[Hu(t)];let n=h1(t),s=n.length,r=Array(s+1).fill(null);r[0]=[];for(let o=0;o<s;o++)if(r[o])for(let a=o+1;a<=s;a++){let l=Hu(n.slice(o,a).join(" "));e(l)&&(!r[a]||r[a].length>r[o].length+1)&&(r[a]=[...r[o],l])}return r[s]}function u1({synth:i=globalThis.speechSynthesis,Utterance:e=globalThis.SpeechSynthesisUtterance,AudioClass:t=globalThis.Audio,fetcher:n=globalThis.fetch,storage:s=(()=>{try{return globalThis.localStorage}catch{return null}})()}={}){let r=!1,o=0,a=null,l=null,c={},h="",d=!1,u=!1,p=!1,f=null,x="device",g=null,m=new Set,y=new Set,M=(async()=>{let R;try{let P=await Promise.race([(async()=>{let N=await n(new URL("../audio/voice/manifest.json",import.meta.url));return N.ok?await N.json():null})(),new Promise(N=>{R=setTimeout(()=>N(null),6e3)})]);if(P?.complete===!0&&P.voiceId&&P.lines&&Object.keys(P.lines).length>=100){g=P,x="recorded";return}Array.isArray(P?.files)&&(m=new Set(P.files.filter(N=>/^v_[0-9a-f]{8}\.mp3$/.test(N))))}catch{}finally{clearTimeout(R)}let T=await Kp(i),C;try{C=s?.getItem("astro-kitty-narrator-voice")}catch{}f=T.find(P=>P.voiceURI===C)||jp(T);try{f&&s?.setItem("astro-kitty-narrator-voice",f.voiceURI)}catch{}})();function _(R="ended"){u=!1,p=!1,c.onend?.(R),l?.(R),l=null}function w(){o++,a?.pause?.(),a=null,i?.cancel(),_("cancelled"),d=!1}async function S(R,T={}){w(),h=Pa(R),y.add(h),c=T;let C=o;return u=!0,await M,C!==o?"cancelled":new Promise(P=>{l=P;let N=()=>{C===o&&(p=!0,c.onstart?.())},D=()=>{C===o&&_()},O=G=>{C===o&&(G?.name==="NotAllowedError"||G?.error==="not-allowed"?(d=!0,c.onblocked?.()):c.onunavailable?.(),_("unavailable"))};if(x==="recorded"){let G=new Set(Object.values(g.lines).filter(V=>/^v_[0-9a-f]{8}\.mp3$/.test(V)&&g.files.includes(V))),B=g.lines[h]&&G.has(g.lines[h])?[g.lines[h]]:Kc(h,V=>G.has(V));if(!B?.length){O();return}let ee=0,F=()=>{if(C===o){if(ee===B.length){D();return}a=new t(new URL("../audio/voice/"+B[ee++],import.meta.url).href),a.onended=F,a.onerror=O,d||a.play().then(N).catch(O)}};F()}else if(t&&m.size&&Kc(h,G=>m.has(G))?.length){let G=Kc(h,V=>m.has(V)),B=0,ee=()=>{if(C===o){if(!i||!e){O();return}a=new e(h.replace(/\bDhrubo\b/g,"Dhroobo")),a.voice=f,a.lang=f?.lang||"en-US",a.rate=.94,a.pitch=1.03,a.volume=1,a.onstart=N,a.onend=D,a.onerror=O,d||(i.resume(),i.speak(a))}},F=()=>{if(C!==o)return;if(B===G.length){D();return}let V=B===0;a=new t(new URL("../audio/voice/"+G[B++],import.meta.url).href),r=!0,a.onended=F,a.onerror=()=>{r=!1,V?ee():D()},d||a.play().then(()=>{V&&N()}).catch(q=>{r=!1,q?.name==="NotAllowedError"?O(q):V?ee():D()})};F()}else i&&e?(r=!1,a=new e(h.replace(/\bDhrubo\b/g,"Dhroobo")),a.voice=f,a.lang=f?.lang||"en-US",a.rate=.94,a.pitch=1.03,a.volume=1,a.onstart=N,a.onend=D,a.onerror=O,d||(i.resume(),i.speak(a))):O()})}function v(){d=!0,x==="recorded"||r?a?.pause?.():i?.pause()}async function b(){if(d){if(d=!1,!u){h&&S(h,c);return}if(x==="recorded"||r)try{await a?.play(),p=!0,c.onstart?.()}catch{c.onblocked?.()}else a&&!p?(i?.resume(),i?.speak(a)):i?.resume()}}return{play:S,stop:w,pause:v,resume:b,ready:M,heard:y,get busy(){return u},get started(){return p},get mode(){return x},get voice(){return f}}}var d1;function Qp(){return d1??=u1()}var f1=1495978707e-1,p1=299792.458,em=668.5991,m1=25.19*Vn,im=i=>i.getTime()/864e5+24405875e-1,g1=[[.0071,2.2353,49.409],[.0057,2.7543,168.173],[.0039,1.1177,191.837],[.0037,15.7866,21.736],[.0021,2.1354,15.704],[.002,2.4694,95.528],[.0018,32.8493,49.095]];function sm(i){let e=im(i)+.0008007407407407408,t=e-2451545,n=(19.3871+.52402073*t)*Vn,s=270.3871+.524038496*t,r=g1.reduce((c,[h,d,u])=>c+h*Math.cos((.985626*t/d+u)*Vn),0),o=(10.691+3e-7*t)*Math.sin(n)+.623*Math.sin(2*n)+.05*Math.sin(3*n)+.005*Math.sin(4*n)+5e-4*Math.sin(5*n)+r,a=((s+o)%360+360)%360,l=(e-24055220028779e-7)/1.0274912517;return{ls:a,msd:l}}var x1=sm(new Date(Date.UTC(2024,10,12,12))).msd,tm=["spring","summer","autumn","winter"];function rm(i=new Date,e=0){let{ls:t,msd:n}=sm(i),s=(n%1+1)%1*24,r=((s+e/15)%24+24)%24,o=t/360*em,a=38+Math.round((n-x1-o)/em),l=Math.floor(t/90)%4;return{ls:t,msd:n,sol:Math.floor(n),mtc:s,lmst:r,marsYear:a,northernSeason:tm[l],southernSeason:tm[(l+2)%4],dustSeason:t>=180&&t<=330}}function om(i){let e=Math.floor(i),t=Math.floor((i-e)*60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function Gu(i,e,t){let n=Math.asin(Math.sin(m1)*Math.sin(t*Vn)),s=(i-12)*15*Vn,r=e*Vn,o=Math.asin(Math.sin(r)*Math.sin(n)+Math.cos(r)*Math.cos(n)*Math.cos(s)),a=Math.atan2(-Math.cos(n)*Math.sin(s),Math.sin(n)*Math.cos(r)-Math.cos(n)*Math.sin(r)*Math.cos(s));return{elevation:o,azimuth:(a+Je)%Je}}var Vu=(i,e)=>[Math.sin(i)*Math.cos(e),Math.sin(e),-Math.cos(i)*Math.cos(e)],v1={earth:[[1.00000261,562e-8],[.01671123,-4392e-8],[-1531e-8,-.01294668],[100.46457166,35999.37244981],[102.93768193,.32327364],[0,0]],mars:[[1.52371034,1847e-8],[.0933941,7882e-8],[1.84969142,-.00813131],[-4.55343205,19140.30268499],[-23.94362959,.44441088],[49.55953891,-.29257343]]};function nm(i,e){let t=(e-2451545)/36525,[n,s,r,o,a,l]=v1[i].map(([_,w])=>_+w*t),c=(a-l)*Vn,h=(((o-a+180)%360+360)%360-180)*Vn,d=h+s*Math.sin(h);for(let _=0;_<10;_++)d-=(d-s*Math.sin(d)-h)/(1-s*Math.cos(d));let u=n*(Math.cos(d)-s),p=n*Math.sqrt(1-s*s)*Math.sin(d),f=Math.cos(c),x=Math.sin(c),g=Math.cos(l*Vn),m=Math.sin(l*Vn),y=Math.cos(r*Vn),M=Math.sin(r*Vn);return[(f*g-x*m*y)*u+(-x*g-f*m*y)*p,(f*m+x*g*y)*u+(-x*m+f*g*y)*p,x*M*u+f*M*p]}function jc(i=new Date){let e=im(i),t=nm("earth",e),n=nm("mars",e),s=t.map((h,d)=>h-n[d]),r=n.map(h=>-h),o=h=>Math.hypot(...h),a=o(s),l=s.reduce((h,d,u)=>h+d*r[u],0)/(a*o(r)),c=a*f1;return{km:c,lightMinutes:c/p1/60,elongation:Math.acos(Math.max(-1,Math.min(1,l)))/Vn}}var Qc=class{constructor(){this.grid=new Map,this.items=[],this.disabled=new Set}_cells(e,t,n,s,r){for(let o=Math.floor(e/8);o<=Math.floor(n/8);o++)for(let a=Math.floor(t/8);a<=Math.floor(s/8);a++)r(`${o},${a}`)}_insert(e,t,n,s,r){return e.index=this.items.length,this.items.push(e),this._cells(t,n,s,r,o=>{this.grid.has(o)||this.grid.set(o,[]),this.grid.get(o).push(e)}),e}segment(e,t,n,s,r=null){return this._insert({kind:"seg",ax:e,az:t,bx:n,bz:s,tag:r},Math.min(e,n),Math.min(t,s),Math.max(e,n),Math.max(t,s))}circle(e,t,n,s=null){return this._insert({kind:"circle",x:e,z:t,r:n,tag:s},e-n,t-n,e+n,t+n)}setEnabled(e,t){t?this.disabled.delete(e):this.disabled.add(e)}near(e,t,n){let s=new Set;return this._cells(e-n,t-n,e+n,t+n,r=>{for(let o of this.grid.get(r)??[])this.disabled.has(o.tag)||s.add(o)}),s}resolve(e,t,n){for(let s=0;s<3;s++){let r=!1;for(let o of this.near(e,t,n+1))if(o.kind==="circle"){let a=e-o.x,l=t-o.z,c=Math.hypot(a,l),h=n+o.r;c<h&&c>1e-6&&(e=o.x+a/c*h,t=o.z+l/c*h,r=!0)}else{let a=o.bx-o.ax,l=o.bz-o.az,c=a*a+l*l||1,h=Math.max(0,Math.min(1,((e-o.ax)*a+(t-o.az)*l)/c)),d=o.ax+a*h,u=o.az+l*h,p=e-d,f=t-u,x=Math.hypot(p,f);if(x<n){let g=x>1e-6?p/x:-l/Math.sqrt(c),m=x>1e-6?f/x:a/Math.sqrt(c);e=d+g*n,t=u+m*n,r=!0}}if(!r)break}return{x:e,z:t}}raycast(e,t,n,s,r=.25){let o=1,a=Math.min(e,n)-r,l=Math.max(e,n)+r,c=Math.min(t,s)-r,h=Math.max(t,s)+r,d=new Set;return this._cells(a,c,l,h,u=>{for(let p of this.grid.get(u)??[]){if(d.has(p)||this.disabled.has(p.tag)||p.kind!=="seg")continue;d.add(p);let f=y1(e,t,n,s,p.ax,p.az,p.bx,p.bz);f!==null&&f<o&&(o=f)}}),o}};function y1(i,e,t,n,s,r,o,a){let l=t-i,c=n-e,h=o-s,d=a-r,u=l*d-c*h;if(Math.abs(u)<1e-9)return null;let p=((s-i)*d-(r-e)*h)/u,f=((s-i)*c-(r-e)*l)/u;return p>=0&&p<=1&&f>=0&&f<=1?p:null}var li=1.7,or=1.7,am=4.2,_1={hub:{shape:"dome",r:11,wall:3.4,top:8.6},greenhouse:{shape:"dome",r:10.5,wall:2.2,top:8.4,glass:!0},power:{shape:"hall",hd:7,hw:8.5,h:5.2},life:{shape:"hall",hd:7,hw:9.5,h:5.2},garage:{shape:"hall",hd:7.5,hw:8.5,h:6.4,wideDoor:!0},lab:{shape:"dome",r:7.5,wall:3.2,top:6.8},greenhouse2:{shape:"dome",r:8.5,wall:2.2,top:7,glass:!0},observatory:{shape:"dome",r:6.5,wall:3,top:6.2},playroom:{shape:"dome",r:7.5,wall:3,top:6.4}},M1=[{id:"hub",type:"hub",x:0,z:0,airlocks:[3*Math.PI/4]},{id:"greenhouse",type:"greenhouse",angle:-Math.PI/2,dist:29,backAirlock:!0},{id:"power",type:"power",angle:0,dist:25,backAirlock:!0},{id:"life",type:"life",angle:Math.PI,dist:25,backAirlock:!0},{id:"garage",type:"garage",angle:Math.PI/2,dist:25.5,backAirlock:!0},{id:"lab",type:"lab",angle:-Math.PI/4,dist:26,backAirlock:!0}],Ht={solarFarm:{x0:39,x1:67,z0:-17,z1:17,cols:5,rows:6},solarFarm2:{x0:39,x1:67,z0:-33,z1:-24,cols:5,rows:2},iceDrill:{x:-50,z:10},comms:{x:20,z:-46},landingPad:{x:-46,z:46,r:10},weather:{x:-15,z:-15},reactor:{x:60,z:46},fuel:{x:-30,z:27},printer:{x:-52,z:-16}},Ia=[{id:"solar2",kind:"outdoor",cost:{metal:6,ice:0,science:0},effect:{solar:10}},{id:"reactor",kind:"outdoor",cost:{metal:14,ice:0,science:20},effect:{reactor:1}},{id:"greenhouse2",kind:"module",x:-32,z:-36,cost:{metal:10,ice:6,science:10},effect:{farm:1}},{id:"observatory",kind:"module",x:42,z:-46,cost:{metal:8,ice:0,science:25},effect:{science:1}},{id:"playroom",kind:"module",x:31,z:31,cost:{metal:6,ice:2,science:5},effect:{happy:1}},{id:"fuel",kind:"outdoor",cost:{metal:10,ice:8,science:15},effect:{fuel:1}},{id:"printer",kind:"outdoor",cost:{metal:5,ice:0,science:10},effect:{repair:1}},{id:"drone",kind:"gadget",cost:{metal:4,ice:0,science:8},effect:{drone:1}},{id:"batteries",kind:"upgrade",cost:{metal:6,ice:0,science:5},effect:{battery:1}}];function cm(i=[]){let e=[];for(let t of M1)e.push(lm(t));for(let t of Ia)if(t.kind==="module"&&i.includes(t.id)){let n=Math.atan2(t.z,t.x);e.push(lm({id:t.id,type:t.id,x:t.x,z:t.z,facing:n+Math.PI,frontAirlock:!0}))}return e}function lm(i){let e=_1[i.type],t=i.x??Math.cos(i.angle)*i.dist,n=i.z??Math.sin(i.angle)*i.dist,s=i.facing??(i.angle!==void 0?i.angle+Math.PI:0);return{...i,...e,x:t,z:n,facing:s}}function as(i,e,t){let n=Math.cos(i.facing),s=Math.sin(i.facing);return[i.x+e*n-t*s,i.z+e*s+t*n]}function b1(i,e,t){let n=e-i.x,s=t-i.z,r=Math.cos(i.facing),o=Math.sin(i.facing);return[n*r+s*o,-n*o+s*r]}function to(i){let e=i.find(t=>t.id==="hub");return i.filter(t=>t.angle!==void 0).map(t=>{let n=t.angle,s=Math.cos(n),r=Math.sin(n),o=t.shape==="dome"?t.r:t.hd,a=[e.x+s*(e.r-.3),e.z+r*(e.r-.3)],l=[t.x-s*(o-.3),t.z-r*(o-.3)];return{id:`tunnel-${t.id}`,to:t.id,angle:n,start:a,end:l,length:Math.hypot(l[0]-a[0],l[1]-a[1])}})}function eh(i,e){let t=[];if(i.id==="hub"){for(let n of e)n.angle!==void 0&&t.push({angle:n.angle,kind:"tunnel",to:n.id});for(let n of i.airlocks??[])t.push({angle:n,kind:"airlock"});return t}return i.angle!==void 0&&t.push({local:0,kind:"tunnel",to:"hub"}),i.backAirlock&&t.push({local:Math.PI,kind:"airlock",wide:!!i.wideDoor}),i.frontAirlock&&t.push({local:0,kind:"airlock"}),t.map(n=>n.local===void 0?n:{...n,angle:i.facing+n.local})}function th(i){let e=[];for(let t of i)for(let n of eh(t,i)){if(n.kind!=="airlock")continue;let s=t.shape==="dome"?t.r:Math.abs(Math.cos(n.angle-t.facing))>.5?t.hd:t.hw,r=Math.cos(n.angle),o=Math.sin(n.angle),a=n.wide?3.6:or+.2;e.push({id:`airlock-${t.id}-${e.length}`,module:t.id,angle:n.angle,half:a,wide:!!n.wide,inner:[t.x+r*(s-.2),t.z+o*(s-.2)],outer:[t.x+r*(s+am),t.z+o*(s+am)]})}return e}function hm(i){let e=[],t=(n,s,r,o,a=null)=>e.push({ax:n,az:s,bx:r,bz:o,tag:a});for(let n of i){let s=eh(n,i);if(n.shape==="dome"){let r=Math.max(40,Math.round(n.r*6));for(let o=0;o<r;o++){let a=o/r*Je,l=(o+1)/r*Je,c=(a+l)/2;s.some(d=>{let u=Math.asin(Math.min(.99,((d.wide?3.6:or)+.15)/n.r));return Math.abs(rs(c,d.angle))<u})||t(n.x+Math.cos(a)*n.r,n.z+Math.sin(a)*n.r,n.x+Math.cos(l)*n.r,n.z+Math.sin(l)*n.r)}}else{let{hd:r,hw:o}=n,a=s.some(d=>d.local===0),l=s.find(d=>d.local===Math.PI),c=d=>d?.wide?3.6:or+.15,h=(d,u,p,f)=>t(...as(n,d,u),...as(n,p,f));h(-r,-o,r,-o),h(-r,o,r,o),a?(h(r,-o,r,-c()),h(r,c(),r,o)):h(r,-o,r,o),l?(h(-r,-o,-r,-c(l)),h(-r,c(l),-r,o)):h(-r,-o,-r,o)}}for(let n of to(i)){let s=-Math.sin(n.angle)*li,r=Math.cos(n.angle)*li;t(n.start[0]+s,n.start[1]+r,n.end[0]+s,n.end[1]+r),t(n.start[0]-s,n.start[1]-r,n.end[0]-s,n.end[1]-r)}for(let n of th(i)){let s=-Math.sin(n.angle)*n.half,r=Math.cos(n.angle)*n.half;t(n.inner[0]+s,n.inner[1]+r,n.outer[0]+s,n.outer[1]+r),t(n.inner[0]-s,n.inner[1]-r,n.outer[0]-s,n.outer[1]-r),t(n.outer[0]+s,n.outer[1]+r,n.outer[0]-s,n.outer[1]-r,n.id)}return e}function nh(i,e,t){for(let n of th(i)){let s=n.outer[0]-n.inner[0],r=n.outer[1]-n.inner[1],o=Math.hypot(s,r),a=((e-n.inner[0])*s+(t-n.inner[1])*r)/(o*o),l=Math.abs((e-n.inner[0])*r-(t-n.inner[1])*s)/o;if(a>=-.05&&a<=1&&l<n.half)return{kind:"airlock",id:n.id,module:n.module,t:a}}for(let n of i)if(n.shape==="dome"){if(Math.hypot(e-n.x,t-n.z)<n.r)return{kind:"module",id:n.id,module:n.id}}else{let[s,r]=b1(n,e,t);if(Math.abs(s)<n.hd&&Math.abs(r)<n.hw)return{kind:"module",id:n.id,module:n.id}}for(let n of to(i)){let s=n.end[0]-n.start[0],r=n.end[1]-n.start[1],o=((e-n.start[0])*s+(t-n.start[1])*r)/(n.length*n.length),a=Math.abs((e-n.start[0])*r-(t-n.start[1])*s)/n.length;if(o>=0&&o<=1&&a<li)return{kind:"tunnel",id:n.id,module:o<.5?"hub":n.to}}return null}function um(i,e=[]){let t=i.map(s=>({x:s.x,z:s.z,r:(s.shape==="dome"?s.r:Math.hypot(s.hd,s.hw))+6})),n=Ht.solarFarm;t.push({x:(n.x0+n.x1)/2,z:0,r:26});for(let s of["iceDrill","comms","landingPad","weather","reactor","fuel","printer"])t.push({...Ht[s],r:12});return e.includes("solar2")&&t.push({x:53,z:-28,r:16}),t}var no=["power","water","oxygen","food"];function dm(){return{tanks:{power:80,water:75,oxygen:85,food:70},stuff:{metal:4,ice:2,science:0,samples:0},dust:.15,crops:.35,crew:4,emergency:!1,built:[],breakers:!0,stats:{harvests:0,fixes:0,sols:0}}}function S1(i,e){let t=y=>i.built.includes(y),n=Math.max(0,Math.sin(e.sunElevation)),s=30+(t("solar2")?10:0),r=e.storm??0,o=i.breakers&&i.tanks.power>.5,a=e.problems??{},l=s*1.25*n*(1-i.dust*.85)*(1-r*.8),c=t("reactor")?4.5:0,h=e.night?3.2+(a.coldSnap?2.5:0):1.2,d=2.4+(t("greenhouse2")?.8:0)+(t("observatory")?.4:0),u=o?2.8:0,p=o&&!a.drillJam?1.6:0,f=o&&!a.filterClog?Math.min(p*1.4,2.6):0,x=o&&i.tanks.water>2?2.3:0,g=1+(t("greenhouse2")?.7:0),m=o&&i.tanks.water>2&&!a.mold;return{power:l+c-h-d-u,water:f-.55*i.crew*.25-(x?.5:0)-(m?.35*g:0),oxygen:x-.62*i.crew*.25-(a.leak?3.2:0)*(i.emergency?.4:1),food:-.42*i.crew*.25+(m?.25*g*i.crops:0),crops:m?.018*g:-.004,dust:r>.2?.02*r:.0015,solar:l,reactor:c}}var w1=260;function fm(i,e,t){let n=S1(i,e),s=i.built.includes("batteries")?1.6:1,r={power:100/(w1*s),water:2.2,oxygen:2.4,food:1.8};for(let a of no)i.tanks[a]=ct(i.tanks[a]+n[a]*r[a]*t,0,100);return i.crops=ct(i.crops+n.crops*t,0,1),i.dust=ct(i.dust+n.dust*t,0,1),no.some(a=>i.tanks[a]<=.5)?i.emergency=!0:i.emergency&&no.every(a=>i.tanks[a]>15)&&(i.emergency=!1),n}function ih(i,e){return["metal","ice","science"].every(t=>(i.stuff[t]??0)>=(e[t]??0))}function pm(i,e){for(let t of["metal","ice","science"])i.stuff[t]-=e[t]??0}function mm(i){if(i.crops<.8)return 0;let e=Math.round(18+22*i.crops);return i.tanks.food=ct(i.tanks.food+e,0,100),i.crops=.25,i.stats.harvests++,e}var zn={dustStorm:{weight:i=>i.dustSeason?2.2:.7,duration:140,warn:18,auto:!0,fix:{where:"solarFarm",how:"scrub",after:!0}},leak:{weight:()=>1.2,warn:6,fix:{where:"module",how:"hold"},problem:"leak"},mold:{weight:i=>i.built.includes("greenhouse")?1:0,warn:4,fix:{where:"greenhouse",how:"balance"},problem:"mold"},solarFlare:{weight:i=>i.realFlare?2.5:.8,duration:60,warn:15,auto:!0,fix:{where:"hub",how:"shelter"}},filterClog:{weight:()=>1,warn:4,fix:{where:"life",how:"tap"},problem:"filterClog"},drillJam:{weight:()=>1,warn:4,fix:{where:"iceDrill",how:"timing"},problem:"drillJam"},powerSurge:{weight:()=>.9,warn:3,fix:{where:"power",how:"sequence"},problem:"surge"},comms:{weight:()=>.8,warn:4,fix:{where:"comms",how:"align"},problem:"comms"},coldSnap:{weight:i=>i.night?1.4:.1,duration:90,warn:8,auto:!0,problem:"coldSnap"},roverStuck:{weight:i=>i.site==="home"?.7:0,warn:5,fix:{where:"rover",how:"hold"},problem:"rover"},supplyDrop:{weight:()=>.9,warn:12,good:!0,fix:{where:"drop",how:"fetch"}},dustDevilClean:{weight:i=>i.dust>.3?1.2:.2,warn:0,good:!0,auto:!0,duration:25},meteorite:{weight:()=>.6,warn:0,good:!0,fix:{where:"meteorite",how:"hold"}}};function gm(i=1){return{seed:i,clock:0,cooldown:75,skill:1,active:[],history:[],count:0}}var E1=95;function xm(i,e,t){let n=Oi(i.seed+i.count*7919+Math.floor(i.clock));i.clock+=e,i.cooldown-=e;for(let a of i.active){a.age+=e,a.phase==="warning"&&a.age>=zn[a.id].warn&&(a.phase="active",a.age=0);let l=zn[a.id];a.phase==="active"&&l.auto&&l.duration&&a.age>=l.duration&&(a.phase=l.fix?.after?"cleanup":"done",a.age=0)}let s=i.active.filter(a=>a.phase==="done");i.active=i.active.filter(a=>a.phase!=="done");let r=i.active.filter(a=>!zn[a.id].good).length<(i.skill>1.25?2:1),o=null;if(i.cooldown<=0&&r&&!t.paused){let a=i.history.slice(-3),l=zp(n,Object.keys(zn),c=>{let h=zn[c];return i.active.some(d=>d.id===c)?0:a.includes(c)?h.weight(t)*.15:c==="roverStuck"&&t.site!=="home"||h.fix?.where&&t.available&&!t.available(h.fix.where)?0:h.weight(t)*(h.good?1:ct(i.skill,.6,1.6))});l?(o=Wu(i,l,n,t),i.cooldown=(E1+n()*60)/ct(i.skill,.6,1.6)):i.cooldown=20}return{started:o,finished:s}}function Wu(i,e,t=Math.random,n={}){let s=zn[e],r={id:e,uid:++i.count,phase:s.warn>0?"warning":"active",age:0,seed:Math.floor(t()*1e9)};return e==="leak"&&(r.module=T1(t,n.leakModules??["hub"])),e==="solarFlare"&&n.realFlare&&(r.real=n.realFlare),i.active.push(r),i.history.push(e),i.history.length>20&&i.history.shift(),r}var T1=(i,e)=>e[Math.floor(i()*e.length)];function Xu(i,e,t){let n=i.active.find(o=>o.uid===e);if(!n)return null;n.phase="done";let s=t<45,r=t>120;return i.skill=ct(i.skill+(s?.08:r?-.12:.02),.6,1.6),i.active=i.active.filter(o=>o.uid!==e),n}function qu(i){let e={};for(let t of i.active){if(t.phase!=="active")continue;let n=zn[t.id];n.problem&&(e[n.problem]=!0)}return e}var vm=i=>{let e=i.active.find(t=>t.id==="dustStorm");return e?e.phase==="warning"?Math.min(.3,e.age/zn.dustStorm.warn*.3):e.phase==="active"?Math.min(1,.3+e.age/20):0:0};var Da=(i,e,t=.75)=>{let n=Math.floor(i/e),s=i/e-n;return(n+Lt(t*.5,1-t*.5,s))*e},_n={home:{name:{en:"Home Base \xB7 Arcadia Planitia",bn:"\u09B9\u09CB\u09AE \u09AC\u09C7\u09B8 \xB7 \u0986\u09B0\u09CD\u0995\u09BE\u09A1\u09BF\u09AF\u09BC\u09BE \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u09A8\u09BF\u09B6\u09BF\u09AF\u09BC\u09BE"},lat:47.2,lon:184,gravity:3.71,sky:"mars",size:330,palette:["#6f4337","#b67b5c","#8a6a5f"],fact:{en:"NASA maps show water ice buried just under the ground here. That makes it a top pick for the first human base.",bn:"\u09A8\u09BE\u09B8\u09BE\u09B0 \u09AE\u09BE\u09A8\u099A\u09BF\u09A4\u09CD\u09B0 \u09A6\u09C7\u0996\u09BE\u09AF\u09BC, \u098F\u0996\u09BE\u09A8\u09C7 \u09AE\u09BE\u099F\u09BF\u09B0 \u09A0\u09BF\u0995 \u09A8\u09BF\u099A\u09C7 \u09AC\u09B0\u09AB \u0986\u099B\u09C7\u0964 \u09A4\u09BE\u0987 \u09AA\u09CD\u09B0\u09A5\u09AE \u09AE\u09BE\u09A8\u09C1\u09B7\u09C7\u09B0 \u0998\u09BE\u0981\u099F\u09BF\u09B0 \u099C\u09A8\u09CD\u09AF \u098F\u099F\u09BE \u09B8\u09C7\u09B0\u09BE \u099C\u09BE\u09AF\u09BC\u0997\u09BE\u0997\u09C1\u09B2\u09CB\u09B0 \u098F\u0995\u099F\u09BE\u0964"},source:"https://science.nasa.gov/resource/swim-map-shows-subsurface-water-ice-on-mars/",spawn:{x:-13,z:15},height(i,e){let t=Math.hypot(i,e),n=Lt(80,125,t),s=rn(i/70,e/70,11)*4+rn(i/20,e/20,12)*.7,r=ku(i/90,e/90,13)*16*Lt(120,165,t);return ot(rn(i/30,e/30,14)*.25,s+r,n)}},jezero:{name:{en:"Jezero Crater",bn:"\u099C\u09C7\u099C\u09C7\u09B0\u09CB \u0996\u09BE\u09A6"},lat:18.4,lon:77.5,gravity:3.71,sky:"mars",size:300,palette:["#6a4a40","#b98b6c","#8f7468"],difficulty:1,fact:{en:"Billions of years ago a river flowed into a lake here and built a delta. Perseverance left 10 sample tubes on the ground at a spot called Three Forks.",bn:"\u09B6\u09A4 \u0995\u09CB\u099F\u09BF \u09AC\u099B\u09B0 \u0986\u0997\u09C7 \u098F\u0996\u09BE\u09A8\u09C7 \u098F\u0995\u099F\u09BE \u09A8\u09A6\u09C0 \u09B9\u09CD\u09B0\u09A6\u09C7 \u09AA\u09A1\u09BC\u09C7 \u09AC\u09A6\u09CD\u09AC\u09C0\u09AA \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C7\u099B\u09BF\u09B2\u0964 \u09AA\u09BE\u09B0\u09B8\u09BF\u09AD\u09BF\u09AF\u09BC\u09BE\u09B0\u09C7\u09A8\u09CD\u09B8 \u09A5\u09CD\u09B0\u09BF \u09AB\u09B0\u09CD\u0995\u09B8 \u09A8\u09BE\u09AE\u09C7\u09B0 \u099C\u09BE\u09AF\u09BC\u0997\u09BE\u09AF\u09BC \u09AE\u09BE\u099F\u09BF\u09A4\u09C7 \u09E7\u09E6\u099F\u09BE \u09A8\u09AE\u09C1\u09A8\u09BE\u09B0 \u099F\u09BF\u0989\u09AC \u09B0\u09C7\u0996\u09C7 \u0997\u09C7\u099B\u09C7\u0964"},source:"https://science.nasa.gov/mission/mars-2020-perseverance/",spawn:{x:0,z:40},height(i,e){let t=Lt(10,-40,e)*Lt(110,40,Math.abs(i+e*.3)),n=Math.exp(-((i+.25*e+8*Math.sin(e/18))**2)/40)*Lt(0,-30,e),s=Da(t*14+rn(i/25,e/25,21)*2,3.2)-n*5,r=Lt(120,150,Math.hypot(i,e-60))*30;return s+rn(i/12,e/12,22)*.6+r},landmarks:[{type:"perseverance",x:18,z:4,rot:-.6},{type:"tubes",x:-14,z:18},{type:"ingenuity",x:30,z:-12}],pool:["tubes","samples","visit:perseverance","scan:delta"]},gale:{name:{en:"Gale Crater \xB7 Mount Sharp",bn:"\u0997\u09C7\u09B2 \u0996\u09BE\u09A6 \xB7 \u09AE\u09BE\u0989\u09A8\u09CD\u099F \u09B6\u09BE\u09B0\u09CD\u09AA"},lat:-5.4,lon:137.8,gravity:3.71,sky:"mars",size:300,palette:["#5b3c34","#c08a66","#9a7a6d"],difficulty:2,fact:{en:"Mount Sharp is a mountain made of stacked rock layers, like pages in a history book. Curiosity has been climbing it since 2014.",bn:"\u09AE\u09BE\u0989\u09A8\u09CD\u099F \u09B6\u09BE\u09B0\u09CD\u09AA \u09B8\u09CD\u09A4\u09B0\u09C7 \u09B8\u09CD\u09A4\u09B0\u09C7 \u09B8\u09BE\u099C\u09BE\u09A8\u09CB \u09AA\u09BE\u09A5\u09B0\u09C7\u09B0 \u09AA\u09BE\u09B9\u09BE\u09A1\u09BC, \u09AF\u09C7\u09A8 \u0987\u09A4\u09BF\u09B9\u09BE\u09B8 \u09AC\u0987\u09AF\u09BC\u09C7\u09B0 \u09AA\u09BE\u09A4\u09BE\u0964 \u0995\u09BF\u0989\u09B0\u09BF\u0993\u09B8\u09BF\u099F\u09BF \u09E8\u09E6\u09E7\u09EA \u09B8\u09BE\u09B2 \u09A5\u09C7\u0995\u09C7 \u098F\u09A4\u09C7 \u0989\u09A0\u099B\u09C7\u0964"},source:"https://science.nasa.gov/mission/msl-curiosity/",spawn:{x:-40,z:40},height(i,e){let t=Math.hypot(i-70,e+70),n=Lt(160,20,t)*46,s=Da(n+rn(i/30,e/30,31)*2.5,2.6,.65),r=Math.exp(-((t-95)**2)/300)*(1.4+Math.sin(i*.32+e*.12)*1.1);return s+r+rn(i/10,e/10,32)*.5},landmarks:[{type:"curiosity",x:10,z:-2,rot:.8}],pool:["samples","scan:layers","visit:curiosity","summit"]},olympus:{name:{en:"Olympus Mons",bn:"\u0985\u09B2\u09BF\u09AE\u09CD\u09AA\u09BE\u09B8 \u09AE\u09A8\u09B8"},lat:18.65,lon:226.2,gravity:3.71,sky:"thin",size:320,palette:["#5a3a35","#a3735f","#7d6058"],difficulty:2,fact:{en:"The tallest volcano in the solar system: about 22 km high, but 600 km wide, so its slopes are gentle. Up here the sky is darker because the air is so thin.",bn:"\u09B8\u09CC\u09B0\u099C\u0997\u09A4\u09C7\u09B0 \u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u0989\u0981\u099A\u09C1 \u0986\u0997\u09CD\u09A8\u09C7\u09AF\u09BC\u0997\u09BF\u09B0\u09BF: \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09E8\u09E8 \u0995\u09BF\u09AE\u09BF \u0989\u0981\u099A\u09C1, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09EC\u09E6\u09E6 \u0995\u09BF\u09AE\u09BF \u099A\u0993\u09A1\u09BC\u09BE, \u09A4\u09BE\u0987 \u09A2\u09BE\u09B2 \u0996\u09C1\u09AC \u0995\u09AE\u0964 \u098F\u0996\u09BE\u09A8\u09C7 \u09AC\u09BE\u09A4\u09BE\u09B8 \u098F\u09A4 \u09AA\u09BE\u09A4\u09B2\u09BE \u09AF\u09C7 \u0986\u0995\u09BE\u09B6 \u09AC\u09C7\u09B6\u09BF \u0997\u09BE\u09A2\u09BC\u0964"},source:"https://science.nasa.gov/mars/facts/",spawn:{x:80,z:0},height(i,e){let t=-i*.08,n=Math.hypot(i+95,e+10),s=-Lt(70,40,n)*28,r=Da(s,5,.5)*Lt(30,45,n)+s*Lt(45,30,n);return t+r+rn(i/20,e/20,41)*1.2+ku(i/40,e/40,42)*2},pool:["summit","samples","scan:caldera"]},valles:{name:{en:"Valles Marineris",bn:"\u09AD\u09CD\u09AF\u09BE\u09B2\u09C7\u09B8 \u09AE\u09C7\u09B0\u09BF\u09A8\u09BE\u09B0\u09BF\u09B8"},lat:-13.9,lon:300.8,gravity:3.71,sky:"mars",size:320,palette:["#5d3d38","#b37d61","#8b675c"],difficulty:3,fact:{en:"A giant canyon about 4,000 km long and up to 7 km deep. Its walls show many layers of old rock, and huge landslides have tumbled down them.",bn:"\u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09EA,\u09E6\u09E6\u09E6 \u0995\u09BF\u09AE\u09BF \u09B2\u09AE\u09CD\u09AC\u09BE \u0986\u09B0 \u09ED \u0995\u09BF\u09AE\u09BF \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u0997\u09AD\u09C0\u09B0 \u09AC\u09BF\u09B6\u09BE\u09B2 \u0997\u09BF\u09B0\u09BF\u0996\u09BE\u09A4\u0964 \u098F\u09B0 \u09A6\u09C7\u09AF\u09BC\u09BE\u09B2\u09C7 \u09AA\u09C1\u09B0\u09CB\u09A8\u09CB \u09AA\u09BE\u09A5\u09B0\u09C7\u09B0 \u0985\u09A8\u09C7\u0995 \u09B8\u09CD\u09A4\u09B0, \u0986\u09B0 \u09AC\u09BF\u09B6\u09BE\u09B2 \u09AD\u09C2\u09AE\u09BF\u09A7\u09B8 \u09A8\u09C7\u09AE\u09C7\u099B\u09C7\u0964"},source:"https://science.nasa.gov/mars/facts/",spawn:{x:-60,z:0},height(i,e){let t=Lt(28,70,Math.abs(e+Math.sin(i/40)*10)),n=Da(t*62+rn(i/25,e/25,51)*4,7,.55),s=Math.exp(-((i-30)**2/500+(e-30)**2/200))*9;return n+s+rn(i/9,e/9,52)*.5},hazards:["rockfall"],pool:["samples","scan:layers","meteorite"]},arsia:{name:{en:"Arsia Mons \xB7 cave skylight",bn:"\u0986\u09B0\u09CD\u09B8\u09BF\u09AF\u09BC\u09BE \u09AE\u09A8\u09B8 \xB7 \u0997\u09C1\u09B9\u09BE\u09B0 \u09AE\u09C1\u0996"},lat:-9.1,lon:239.5,gravity:3.71,sky:"thin",size:300,palette:["#4e3532","#8f6555","#5f4a45"],difficulty:3,fact:{en:"Orbiters have spotted deep round pits on the sides of volcanoes like Arsia Mons. They may be skylights into lava tube caves, which could one day shelter explorers.",bn:"\u0985\u09B0\u09AC\u09BF\u099F\u09BE\u09B0 \u0986\u09B0\u09CD\u09B8\u09BF\u09AF\u09BC\u09BE \u09AE\u09A8\u09B8\u09C7\u09B0 \u09AE\u09A4\u09CB \u0986\u0997\u09CD\u09A8\u09C7\u09AF\u09BC\u0997\u09BF\u09B0\u09BF\u09B0 \u0997\u09BE\u09AF\u09BC\u09C7 \u0997\u09AD\u09C0\u09B0 \u0997\u09CB\u09B2 \u0997\u09B0\u09CD\u09A4 \u09A6\u09C7\u0996\u09C7\u099B\u09C7\u0964 \u098F\u0997\u09C1\u09B2\u09CB \u09B2\u09BE\u09AD\u09BE-\u09B8\u09C1\u09A1\u09BC\u0999\u09CD\u0997 \u0997\u09C1\u09B9\u09BE\u09B0 \u099C\u09BE\u09A8\u09BE\u09B2\u09BE \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7, \u09AF\u09BE \u098F\u0995\u09A6\u09BF\u09A8 \u0985\u09AD\u09BF\u09AF\u09BE\u09A4\u09CD\u09B0\u09C0\u09A6\u09C7\u09B0 \u0986\u09B6\u09CD\u09B0\u09AF\u09BC \u09A6\u09BF\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964"},source:"https://science.nasa.gov/mission/mars-odyssey/",spawn:{x:-50,z:30},cave:{x:35,z:-10,r:9,depth:16,length:46,angle:.15},height(i,e){let t=Math.sin(i/28+rn(i/60,e/60,61)*3)*1.2,n=-Math.exp(-((e-20-12*Math.sin(i/35))**2)/30)*3,s=Math.hypot(i-35,e+10),r=-Lt(10.5,8.5,s)*16,o=Math.max(0,1-Math.hypot(i-29,e+3)/11)*Lt(8.5,10.5,s+3)*9;return t+n+Math.min(0,r+o)+rn(i/14,e/14,62)*.8},pool:["cave","samples","scan:lava"]},southpole:{name:{en:"South Pole \xB7 ice and geysers",bn:"\u09A6\u0995\u09CD\u09B7\u09BF\u09A3 \u09AE\u09C7\u09B0\u09C1 \xB7 \u09AC\u09B0\u09AB \u0986\u09B0 \u0997\u09BF\u099C\u09BE\u09B0"},lat:-85.5,lon:75,gravity:3.71,sky:"polar",size:300,palette:["#9c8a88","#f1e6e1","#b9a6a2"],ice:!0,difficulty:3,fact:{en:"In spring, sunlight warms the ground under the frozen carbon dioxide. Gas bursts out in jets and carves dark shapes that look like giant spiders.",bn:"\u09AC\u09B8\u09A8\u09CD\u09A4\u09C7 \u09B8\u09C2\u09B0\u09CD\u09AF\u09C7\u09B0 \u0986\u09B2\u09CB \u099C\u09AE\u09BE\u099F \u0995\u09BE\u09B0\u09CD\u09AC\u09A8 \u09A1\u09BE\u0987-\u0985\u0995\u09CD\u09B8\u09BE\u0987\u09A1\u09C7\u09B0 \u09A8\u09BF\u099A\u09C7\u09B0 \u09AE\u09BE\u099F\u09BF \u0997\u09B0\u09AE \u0995\u09B0\u09C7\u0964 \u0997\u09CD\u09AF\u09BE\u09B8 \u09AB\u09CB\u09AF\u09BC\u09BE\u09B0\u09BE\u09B0 \u09AE\u09A4\u09CB \u09AC\u09C7\u09B0\u09BF\u09AF\u09BC\u09C7 \u098F\u09B8\u09C7 \u09AC\u09BF\u09B6\u09BE\u09B2 \u09AE\u09BE\u0995\u09A1\u09BC\u09B8\u09BE\u09B0 \u09AE\u09A4\u09CB \u0995\u09BE\u09B2\u09CB \u09A6\u09BE\u0997 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C7\u0964"},source:"https://science.nasa.gov/mission/mars-reconnaissance-orbiter/",spawn:{x:0,z:50},height(i,e){return Da(rn(i/80,e/80,71)*14+i*.04,3.4,.8)+wi(i/6,e/6,72)*.3},hazards:["geysers"],pool:["ice","samples","scan:spiders"]},meridiani:{name:{en:"Meridiani Planum",bn:"\u09AE\u09C7\u09B0\u09BF\u09A1\u09BF\u09AF\u09BC\u09BE\u09A8\u09BF \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u09A8\u09BE\u09AE"},lat:-1.95,lon:354.5,gravity:3.71,sky:"mars",size:300,palette:["#6e4638","#bb8460","#94705f"],difficulty:1,fact:{en:'Opportunity found tiny round stones here nicknamed "blueberries", made of a mineral that forms in water. It also found the first meteorite ever spotted on another planet.',bn:'\u0985\u09AA\u09B0\u099A\u09C1\u09A8\u09BF\u099F\u09BF \u098F\u0996\u09BE\u09A8\u09C7 "\u09AC\u09CD\u09B2\u09C1\u09AC\u09C7\u09B0\u09BF" \u09A8\u09BE\u09AE\u09C7\u09B0 \u099B\u09CB\u099F \u0997\u09CB\u09B2 \u09AA\u09BE\u09A5\u09B0 \u09AA\u09C7\u09AF\u09BC\u09C7\u099B\u09BF\u09B2, \u09AF\u09BE \u09AA\u09BE\u09A8\u09BF\u09A4\u09C7 \u09A4\u09C8\u09B0\u09BF \u09B9\u0993\u09AF\u09BC\u09BE \u0996\u09A8\u09BF\u099C \u09A6\u09BF\u09AF\u09BC\u09C7 \u0997\u09A1\u09BC\u09BE\u0964 \u0985\u09A8\u09CD\u09AF \u0997\u09CD\u09B0\u09B9\u09C7 \u09AA\u09CD\u09B0\u09A5\u09AE \u0989\u09B2\u09CD\u0995\u09BE\u09AA\u09BF\u09A3\u09CD\u09A1\u0993 \u098F\u099F\u09BE\u0987 \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09C7\u09AF\u09BC\u09C7\u099B\u09BF\u09B2\u0964'},source:"https://science.nasa.gov/mission/mer-opportunity/",spawn:{x:0,z:0},height(i,e){let t=Math.hypot(i,e),n=-Lt(11,3,t)*2.6+Math.exp(-((t-11)**2)/4)*.8,s=Math.hypot(i-90,e+80),r=-Lt(48,10,s)*14+Math.exp(-((s-48)**2)/30)*2.5;return n+r+rn(i/40,e/40,81)*.8},landmarks:[{type:"opportunity",x:70,z:-45,rot:2.2},{type:"heatshieldrock",x:-35,z:-40}],pool:["blueberries","meteorite","visit:opportunity"]},utopia:{name:{en:"Utopia Planitia",bn:"\u0987\u0989\u099F\u09CB\u09AA\u09BF\u09AF\u09BC\u09BE \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u09A8\u09BF\u09B6\u09BF\u09AF\u09BC\u09BE"},lat:25.1,lon:109.9,gravity:3.71,sky:"mars",size:300,palette:["#6a4339","#b07f63","#8c6c62"],difficulty:2,fact:{en:"NASA's Viking 2 landed on this huge plain in 1976 and photographed frost on the ground. China's Zhurong rover explored here in 2021. Scalloped hollows hint at ice below.",bn:"\u09A8\u09BE\u09B8\u09BE\u09B0 \u09AD\u09BE\u0987\u0995\u09BF\u0982 \u09E8 \u09E7\u09EF\u09ED\u09EC \u09B8\u09BE\u09B2\u09C7 \u098F\u0987 \u09AC\u09BF\u09B6\u09BE\u09B2 \u09B8\u09AE\u09AD\u09C2\u09AE\u09BF\u09A4\u09C7 \u09A8\u09C7\u09AE\u09C7 \u09AE\u09BE\u099F\u09BF\u09A4\u09C7 \u09A4\u09C1\u09B7\u09BE\u09B0\u09C7\u09B0 \u099B\u09AC\u09BF \u09A4\u09C1\u09B2\u09C7\u099B\u09BF\u09B2\u0964 \u099A\u09C0\u09A8\u09C7\u09B0 \u099D\u09C1\u09B0\u0982 \u09B0\u09CB\u09AD\u09BE\u09B0 \u09E8\u09E6\u09E8\u09E7 \u09B8\u09BE\u09B2\u09C7 \u098F\u0996\u09BE\u09A8\u09C7 \u0998\u09C1\u09B0\u09C7\u099B\u09C7\u0964 \u0996\u09BE\u0981\u099C\u0995\u09BE\u099F\u09BE \u0997\u09B0\u09CD\u09A4\u0997\u09C1\u09B2\u09CB \u09A8\u09BF\u099A\u09C7 \u09AC\u09B0\u09AB\u09C7\u09B0 \u0987\u0999\u09CD\u0997\u09BF\u09A4 \u09A6\u09C7\u09AF\u09BC\u0964"},source:"https://science.nasa.gov/mission/viking-2/",spawn:{x:-30,z:30},height(i,e){let t=rn(i/50,e/50,91)*2;for(let n=0;n<7;n++){let s=Math.sin(n*2.4)*80,r=Math.cos(n*1.7)*70,o=Math.hypot((i-s)*1.3,e-r);t-=Lt(16,3,o)*(2.5+(e<r?1.5:0))}return t},landmarks:[{type:"zhurong",x:25,z:-10,rot:1.2},{type:"viking",x:-60,z:-55,rot:.4}],pool:["ice","visit:zhurong","visit:viking","samples"]},phobos:{name:{en:"Phobos, the moon of Mars",bn:"\u09AB\u09CB\u09AC\u09CB\u09B8, \u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u099A\u09BE\u0981\u09A6"},lat:0,lon:0,gravity:.6,sky:"space",size:260,palette:["#3d3634","#77706b","#5a524f"],difficulty:2,moon:!0,fact:{en:"Phobos is only about 22 km wide and races around Mars three times a day. Its gravity is so weak that a jump here would last more than 20 minutes! (We made it shorter for the game.)",bn:"\u09AB\u09CB\u09AC\u09CB\u09B8 \u09AE\u09BE\u09A4\u09CD\u09B0 \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09E8\u09E8 \u0995\u09BF\u09AE\u09BF \u099A\u0993\u09A1\u09BC\u09BE \u0986\u09B0 \u09A6\u09BF\u09A8\u09C7 \u09A4\u09BF\u09A8\u09AC\u09BE\u09B0 \u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u099A\u09BE\u09B0\u09AA\u09BE\u09B6\u09C7 \u0998\u09CB\u09B0\u09C7\u0964 \u098F\u09B0 \u09AE\u09BE\u09A7\u09CD\u09AF\u09BE\u0995\u09B0\u09CD\u09B7\u09A3 \u098F\u09A4 \u09A6\u09C1\u09B0\u09CD\u09AC\u09B2 \u09AF\u09C7 \u098F\u0996\u09BE\u09A8\u09C7 \u098F\u0995\u099F\u09BE \u09B2\u09BE\u09AB \u09E8\u09E6 \u09AE\u09BF\u09A8\u09BF\u099F\u09C7\u09B0 \u09AC\u09C7\u09B6\u09BF \u099A\u09B2\u09A4! (\u0996\u09C7\u09B2\u09BE\u09AF\u09BC \u0986\u09AE\u09B0\u09BE \u099B\u09CB\u099F \u0995\u09B0\u09C7\u099B\u09BF\u0964)"},source:"https://science.nasa.gov/mars/moons/phobos/",spawn:{x:0,z:30},height(i,e){let t=-(i*i+e*e)/1040,n=-Math.abs(Math.sin((i*.9+e*.4)/9))*1.4,s=Math.hypot(i+50,e+40),r=-Lt(30,4,s)*9+Math.exp(-((s-30)**2)/25)*2;return t+n+r+rn(i/15,e/15,99)*.8},pool:["beacon","samples","summit"]}},ym=["home","jezero","meridiani","gale","utopia","olympus","valles","arsia","southpole","phobos"];function _m(i){let e=_n[i];return e.cave?(t,n,s=!1)=>s&&$u(e.cave,t,n)?-e.cave.depth+wi(t/4,n/4,7)*.4:e.height(t,n):(t,n)=>e.height(t,n)}function $u(i,e,t){let n=e-i.x,s=t-i.z,r=n*Math.cos(i.angle)+s*Math.sin(i.angle),o=-n*Math.sin(i.angle)+s*Math.cos(i.angle);return r>-2&&r<i.length&&Math.abs(o)<5.2||Math.hypot(n,s)<i.r-1}var Mm={samples:{count:5,text:{en:"Collect {n} interesting rocks",bn:"{n}\u099F\u09BE \u09AE\u099C\u09BE\u09B0 \u09AA\u09BE\u09A5\u09B0 \u09B8\u0982\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09CB"},reward:{science:4}},blueberries:{count:12,text:{en:'Collect {n} "blueberries"',bn:'{n}\u099F\u09BE "\u09AC\u09CD\u09B2\u09C1\u09AC\u09C7\u09B0\u09BF" \u09B8\u0982\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09CB'},reward:{science:6}},tubes:{count:10,text:{en:"Find the {n} sample tubes at Three Forks",bn:"\u09A5\u09CD\u09B0\u09BF \u09AB\u09B0\u09CD\u0995\u09B8\u09C7\u09B0 {n}\u099F\u09BE \u09A8\u09AE\u09C1\u09A8\u09BE \u099F\u09BF\u0989\u09AC \u0996\u09C1\u0981\u099C\u09C7 \u09AC\u09C7\u09B0 \u0995\u09B0\u09CB"},reward:{science:10}},ice:{count:4,text:{en:"Dig up {n} chunks of ice",bn:"{n}\u099F\u09BE \u09AC\u09B0\u09AB\u09C7\u09B0 \u099F\u09C1\u0995\u09B0\u09CB \u0996\u09C1\u0981\u09A1\u09BC\u09C7 \u09A4\u09CB\u09B2\u09CB"},reward:{ice:4}},meteorite:{count:1,text:{en:"Find the metal meteorite",bn:"\u09A7\u09BE\u09A4\u09AC \u0989\u09B2\u09CD\u0995\u09BE\u09AA\u09BF\u09A3\u09CD\u09A1 \u0996\u09C1\u0981\u099C\u09C7 \u09AC\u09C7\u09B0 \u0995\u09B0\u09CB"},reward:{metal:6}},summit:{count:1,text:{en:"Reach the highest point",bn:"\u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u0989\u0981\u099A\u09C1 \u099C\u09BE\u09AF\u09BC\u0997\u09BE\u09AF\u09BC \u09AA\u09CC\u0981\u099B\u09BE\u0993"},reward:{science:5}},cave:{count:1,text:{en:"Explore to the end of the lava tube",bn:"\u09B2\u09BE\u09AD\u09BE-\u09B8\u09C1\u09A1\u09BC\u0999\u09CD\u0997\u09C7\u09B0 \u09B6\u09C7\u09B7 \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u09AF\u09BE\u0993"},reward:{science:12,ice:2}},beacon:{count:3,text:{en:"Plant {n} radio beacons",bn:"{n}\u099F\u09BE \u09B0\u09C7\u09A1\u09BF\u0993 \u09AC\u09C0\u0995\u09A8 \u09AC\u09B8\u09BE\u0993"},reward:{science:8}},visit:{count:1,text:{en:"Find {thing} and say hello",bn:"{thing} \u0996\u09C1\u0981\u099C\u09C7 \u09AC\u09C7\u09B0 \u0995\u09B0\u09C7 \u09B9\u09CD\u09AF\u09BE\u09B2\u09CB \u09AC\u09B2\u09CB"},reward:{science:6}},scan:{count:3,text:{en:"Scan {n} spots of {thing}",bn:"{thing}-\u098F\u09B0 {n}\u099F\u09BE \u099C\u09BE\u09AF\u09BC\u0997\u09BE \u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8 \u0995\u09B0\u09CB"},reward:{science:7}}},R1={perseverance:{en:"Perseverance",bn:"\u09AA\u09BE\u09B0\u09B8\u09BF\u09AD\u09BF\u09AF\u09BC\u09BE\u09B0\u09C7\u09A8\u09CD\u09B8"},curiosity:{en:"Curiosity",bn:"\u0995\u09BF\u0989\u09B0\u09BF\u0993\u09B8\u09BF\u099F\u09BF"},opportunity:{en:"Opportunity",bn:"\u0985\u09AA\u09B0\u099A\u09C1\u09A8\u09BF\u099F\u09BF"},zhurong:{en:"Zhurong",bn:"\u099D\u09C1\u09B0\u0982"},viking:{en:"Viking 2",bn:"\u09AD\u09BE\u0987\u0995\u09BF\u0982 \u09E8"},delta:{en:"the old river delta",bn:"\u09AA\u09C1\u09B0\u09CB\u09A8\u09CB \u09A8\u09A6\u09C0\u09B0 \u09AC\u09A6\u09CD\u09AC\u09C0\u09AA"},layers:{en:"rock layers",bn:"\u09AA\u09BE\u09A5\u09B0\u09C7\u09B0 \u09B8\u09CD\u09A4\u09B0"},caldera:{en:"the volcano crater",bn:"\u0986\u0997\u09CD\u09A8\u09C7\u09AF\u09BC\u0997\u09BF\u09B0\u09BF\u09B0 \u099C\u09CD\u09AC\u09BE\u09B2\u09BE\u09AE\u09C1\u0996"},lava:{en:"old lava",bn:"\u09AA\u09C1\u09B0\u09CB\u09A8\u09CB \u09B2\u09BE\u09AD\u09BE"},spiders:{en:'the "spiders"',bn:'"\u09AE\u09BE\u0995\u09A1\u09BC\u09B8\u09BE"'}};function bm(i,e){let t=[..._n[i].pool??["samples"]],n=[];for(;n.length<Math.min(3,t.length);){let s=Math.floor(e()*t.length);n.push(t.splice(s,1)[0])}return n.map(s=>{let[r,o]=s.split(":"),a=Mm[r];return{kind:r,thing:o??null,need:a.count,have:0,reward:a.reward,done:!1}})}function Sm(i,e){return Mm[i.kind].text[e].replace("{n}",i.need).replace("{thing}",i.thing?R1[i.thing][e]:"")}function wm(i,e){if(i.moon||e.moon)return 6e3;let t=3389.5,n=Math.PI/180,s=Math.sin((e.lat-i.lat)*n/2)**2+Math.cos(i.lat*n)*Math.cos(e.lat*n)*Math.sin((e.lon-i.lon)*n/2)**2;return 2*t*Math.asin(Math.min(1,Math.sqrt(s)))}var Em=i=>ct(_n[i].difficulty??1,1,3);var C1=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,P1=`
varying vec3 vDir;
uniform vec3 sunDir;
uniform vec3 earthDir;
uniform float storm;
uniform float thin;
uniform float space;
uniform float polar;
uniform float time;
uniform float envMode;
float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
void main() {
  vec3 dir = normalize(vDir);
  float up = clamp(dir.y, -0.2, 1.0);
  float sunUp = sunDir.y;
  float day = smoothstep(-0.12, 0.18, sunUp);
  float twilight = smoothstep(-0.25, 0.0, sunUp) * (1.0 - smoothstep(0.0, 0.32, sunUp));
  float cosSun = dot(dir, normalize(sunDir));
  vec3 horizonDay = mix(vec3(0.80, 0.64, 0.50), vec3(0.88, 0.76, 0.66), polar);
  vec3 zenithDay = mix(vec3(0.55, 0.41, 0.33), vec3(0.36, 0.31, 0.36), thin);
  // dust haze: the sky near the horizon is brighter and greyer
  horizonDay = mix(horizonDay, vec3(0.78, 0.70, 0.62), 0.18 * (1.0 - smoothstep(0.0, 0.25, up)));
  vec3 col = mix(horizonDay, zenithDay, pow(smoothstep(0.0, 0.85, up), 0.7));
  // The whole sky dims as the Sun gets low, and a blue halo grows around it:
  // fine Mars dust scatters blue light forward, so Mars sunsets are blue.
  float bright = smoothstep(-0.15, 0.45, sunUp);
  col *= mix(0.05, 0.86, bright);
  float halo = pow(max(cosSun, 0.0), 5.0);
  float glowBand = pow(max(cosSun, 0.0), 40.0);
  vec3 blue = vec3(0.2, 0.44, 0.92);
  col = mix(col, blue * mix(0.55, 1.0, bright), halo * (0.18 + twilight * 1.1) * (1.0 - storm));
  col += vec3(0.45, 0.7, 1.0) * glowBand * twilight * 1.3 * (1.0 - storm);
  vec3 night = vec3(0.025, 0.028, 0.055) + vec3(0.06, 0.05, 0.07) * (1.0 - up);
  col = mix(night, col, day);
  col += vec3(0.08, 0.06, 0.05) * twilight * (1.0 - halo) * smoothstep(0.3, 0.0, up);
  // stars and a faint band of the Milky Way at night (always in space)
  float dark = max(1.0 - day, space) * (1.0 - envMode);
  vec3 cell = floor(dir * 160.0);
  float star = step(0.9975, hash(cell)) * (0.6 + 0.4 * sin(time * 2.0 + hash(cell + 3.0) * 30.0));
  float band = exp(-pow(dot(dir, normalize(vec3(0.3, 0.6, -0.74))) * 4.0, 2.0)) * 0.08;
  col += (vec3(star) + vec3(0.7, 0.75, 1.0) * band) * dark * (1.0 - storm * 0.9);
  // Earth: a bright blue-white star near the Sun after sunset
  float earth = smoothstep(0.99985, 0.99995, dot(dir, normalize(earthDir)));
  col += vec3(0.6, 0.8, 1.0) * earth * 3.0 * (1.0 - day) * (1.0 - storm) * (1.0 - envMode);
  // the Sun itself: smaller and dimmer than from Earth
  float disc = smoothstep(0.99955, 0.99975, cosSun);
  // (in the sky-light pass the disc is left out: the sunlight itself already adds it)
  col += (vec3(1.3, 1.15, 1.0) * disc * (1.0 - storm * 0.85) + vec3(0.6, 0.4, 0.25) * pow(max(cosSun, 0.0), 300.0)) * (1.0 - envMode);
  // thin wispy ice clouds drifting by
  vec2 cuv = dir.xz / max(dir.y, 0.08) * 0.7 + vec2(time * 0.01, time * 0.004);
  float cloud = smoothstep(0.55, 0.9, sin(cuv.x * 2.1 + sin(cuv.y * 3.0)) * sin(cuv.y * 1.7 + 1.3) * 0.5 + 0.5);
  col += vec3(0.25, 0.22, 0.22) * cloud * smoothstep(0.05, 0.4, up) * day * (1.0 - space) * 0.35;
  // dust storm: thick orange haze
  vec3 dust = mix(vec3(0.62, 0.38, 0.22), vec3(0.18, 0.10, 0.07), 1.0 - day);
  col = mix(col, dust, storm * 0.85);
  // space: black sky even in daytime
  col = mix(col, vec3(star) + vec3(0.7, 0.75, 1.0) * band + vec3(1.3, 1.15, 1.0) * disc, space);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,I1=new L(.35,.82,-.45).normalize();function Tm(i,{space:e=!1,thin:t=!1,polar:n=!1}={}){let s=new Et({vertexShader:C1,fragmentShader:P1,side:hn,depthWrite:!1,uniforms:{sunDir:{value:new L(0,1,0)},earthDir:{value:new L(0,.1,-1)},storm:{value:0},thin:{value:t?1:0},space:{value:e?1:0},polar:{value:n?1:0},time:{value:0},envMode:{value:0}}}),r=new Ce(new Dt(400,40,20),s);r.frustumCulled=!1,r.renderOrder=-10,r.userData.noAO=!0,i.add(r);let o=new tt({color:"#8f8580",roughness:1,emissive:"#2a2624",emissiveIntensity:.6,fog:!1}),a=new Di(1,2),l=a.attributes.position;for(let x=0;x<l.count;x++){let g=new L().fromBufferAttribute(l,x);g.multiplyScalar(1+.13*Math.sin(g.x*4+g.y*3)+.08*Math.cos(g.z*5)),g.x*=1.3,l.setXYZ(x,g.x,g.y,g.z)}a.computeVertexNormals();let c=new Ce(a,o);c.scale.setScalar(e?.001:2.4);let h=new Ce(new Di(1,1),o);h.scale.setScalar(e?.001:.9),r.add(c,h);let d=new sa("#ffe2c0",3);d.castShadow=!0,d.shadow.bias=-2e-4,d.shadow.normalBias=.05;let u=new ta("#f0d3c4","#7a4c40",1.4);i.add(d,d.target,u);let p=new L;return{dome:r,sun:d,hemi:u,material:s,phobos:c,deimos:h,update({sunDir:x,earthDir:g,hours:m,storm:y=0,focus:M,indoors:_=0,time:w=0,shadowSize:S=60}){let v=s.uniforms;v.sunDir.value.copy(x),v.earthDir.value.copy(g),v.storm.value=y,v.time.value=w;let b=Lt(-.1,.2,x.y),R=1-Lt(.05,.5,x.y),T=1-Lt(-.12,.06,x.y);d.color.setRGB(ot(1,.55,T),ot(ot(.88,.62,R),.66,T),ot(ot(.75,.45,R),1,T)),d.intensity=3.1*b*(1-y*.75)+T*.55,u.intensity=ot(.62,1.45,b)*(1-y*.25)+_*.1,u.color.setRGB(ot(.42,.95,b),ot(.46,.82,b),ot(.7,.77,b)),u.groundColor.setRGB(ot(.16,.48,b),ot(.14,.3,b),ot(.2,.25,b)),p.copy(T>.5?I1:x).normalize().multiplyScalar(80),d.position.copy(M).add(p.y>4?p:p.setY(4)),d.target.position.copy(M);let C=d.shadow.camera;C.right!==S&&(Object.assign(C,{left:-S,right:S,top:S,bottom:-S,near:1,far:220}),C.updateProjectionMatrix());let P=m/11.1%1*Math.PI*2;c.position.set(-Math.cos(P)*330,Math.sin(P)*200-20,-60),c.rotation.y=P,c.visible=c.position.y>-10;let N=m/131%1*Math.PI*2;return h.position.set(Math.cos(N)*340,Math.sin(N)*230-10,90),h.visible=h.position.y>-5,{day:b,low:R}},fogColor(x,g=0){let m=Lt(-.12,.42,f().sunDir.value.y);return x.setRGB(ot(.08,.72,m),ot(.07,.5,m),ot(.1,.4,m)),x.lerp(new Ne(ot(.15,.62,m),ot(.09,.38,m),ot(.06,.22,m)),g),x}};function f(){return s.uniforms}}function D1(i,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256),o=Oi(1708);for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=c/256*Je,d=l/256*Je,u=Math.sin(h*3+d*15+1.9*Math.sin(h*2+d)),p=(e?228:205)+Math.sin(h*2+1.3*Math.sin(d))*Math.sin(d*3+h)*12+u*8+o()*30;r.data.set([p,p-(e?2:6),p-(e?0:11),255],(c+l*256)*4)}s.putImageData(r,0,0);for(let l=0;l<1400;l++){let c=o()*256,h=o()*256,d=.3+o()**5*2.4,u=Math.round(110+o()*80);s.fillStyle=`rgb(${u},${u-6},${u-10})`,s.beginPath(),s.ellipse(c,h,d*1.4,d*.7,o()*Je,0,Je),s.fill()}let a=new Gn(n);return a.colorSpace=Wt,a.wrapS=a.wrapT=vn,a.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),a}function L1(i,e,t){let n=1/0;for(let s of i)for(let r=1;r<s.length;r++){let[o,a]=s[r-1],[l,c]=s[r],h=l-o,d=c-a,u=h*h+d*d,p=Math.max(0,Math.min(1,((e-o)*h+(t-a)*d)/u));n=Math.min(n,Math.hypot(e-o-h*p,t-a-d*p))}return n}function Am(i,e,t,n,{clear:s=[],paths:r=[],quality:o=1,seed:a=1}={}){let l=new ze;i.add(l);let[c,h,d]=t.palette.map(F=>new Ne(F));if(kt.enabled)for(let F of[c,h,d]){let V=F.r*.3+F.g*.55+F.b*.15;F.lerp(new Ne(V*1.12,V*.94,V*.82),.3)}let u=["gale","valles","olympus","southpole"].includes(t.id),p=Math.round(t.size/(o>1?1.5:2.1)),f=new cn(t.size,t.size,p,p).rotateX(-Math.PI/2),x=f.attributes.position,g=f.attributes.uv,m=[],y=new Ne,M=new Ne,_=c.clone().lerp(h,.35);for(let F=0;F<x.count;F++){let V=x.getX(F),q=x.getZ(F),Se=n(V,q);x.setY(F,Se),g.setXY(F,V/4,q/4);let j=.65*wi(V/11,q/11,a+6)+.35*wi(V/1.7,q/1.7,a+7);y.copy(c).lerp(h,j);let W=Math.abs(n(V+.8,q)-n(V-.8,q))+Math.abs(n(V,q+.8)-n(V,q-.8));if(y.lerp(d,Lt(.5,1.8,W)*.75),u){let oe=.5+.5*Math.sin(Se*1.1+wi(V/30,q/30,9)*2);M.copy(h).lerp(d,.3).multiplyScalar(.82+oe*.3),y.lerp(M,Lt(.4,1.4,W)*.6)}if(t.id==="gale"&&y.lerp(new Ne("#3b302f"),Math.exp(-((Math.hypot(V-70,q+70)-95)**2)/260)*.75),r.length&&y.lerp(_,(1-Lt(1.4,3.2,L1(r,V,q)))*.55),t.id==="home"){let oe=Math.abs(Math.sin(V/7+Math.sin(q/9)))*Math.abs(Math.sin(q/7+Math.cos(V/11)));y.multiplyScalar(1-(1-Lt(.02,.09,oe))*.12)}m.push(y.r,y.g,y.b)}f.setAttribute("color",new je(m,3)),f.computeVertexNormals();let w=kt.enabled?Ts(new tt({vertexColors:!0,roughness:.95}),(t.ice,"regolith"),{scale:2.5,dust:0,low:0,rough:.9,normal:1.1,planar:o<2,terrain:{rock:"rock",rockScale:3}}):(()=>{let F=D1(e,!!t.ice);return new tt({vertexColors:!0,roughness:.96,map:F,bumpMap:F,bumpScale:.05})})(),S=new Ce(f,w);S.receiveShadow=!0,l.add(S);let v=new cn(t.size*5,t.size*5,70,70).rotateX(-Math.PI/2),b=v.attributes.position,R=[];for(let F=0;F<b.count;F++){let V=b.getX(F),q=b.getZ(F),Se=Math.max(Math.abs(V),Math.abs(q))<t.size/2-4,j=rn(V/160,q/160,a+3)*18+Lt(t.size*.6,t.size*2.2,Math.hypot(V,q))*40;b.setY(F,Se?n(V,q)-3:n(Math.max(-t.size/2,Math.min(t.size/2,V)),Math.max(-t.size/2,Math.min(t.size/2,q)))+j*Lt(t.size/2,t.size,Math.max(Math.abs(V),Math.abs(q)))),y.copy(c).lerp(h,.45+wi(V/60,q/60,4)*.3),R.push(y.r,y.g,y.b)}v.setAttribute("color",new je(R,3)),v.computeVertexNormals();let T=new tt({vertexColors:!0,roughness:1});l.add(new Ce(v,kt.enabled?Ts(T,"regolith",{scale:9,dust:0,low:0,planar:!0,normal:.7}):T));let C=Oi(a+4711),P=kt.enabled?Ts(new tt({color:"#ffffff",roughness:.9}),"rock",{scale:1.4,dust:.85,low:.6,normal:1.2}):new tt({color:"#ffffff",roughness:.95}),N=[],D=kt.enabled?[c,h,d].map(F=>F.clone().lerp(new Ne("#ffffff"),.62)):[c,h,d].map(F=>F.clone().lerp(new Ne("#ffffff"),.05)),O=new At,G=t.size/2-6,B=Math.round((t.id==="meridiani"?120:260)*(o>0?1:.5));for(let F=0;F<4;F++){let V=new Zn(Vp(a+F*97,F===0&&o>1?3:2),P,B),q=0;for(let Se=0;Se<B*2&&q<B;Se++){let j=(C()-.5)*2*G,W=(C()-.5)*2*G,oe=.08+C()**4*(F===0?2.4:.9);if(s.some(Te=>Math.hypot(j-Te.x,W-Te.z)<Te.r+oe)||t.cave&&Math.hypot(j-t.cave.x,W-t.cave.z)<t.cave.r+3)continue;let ve=oe*(.35+C()*.6);O.position.set(j,n(j,W)+ve*.12,W),O.rotation.set(C()*.3,C()*Je,C()*.3),O.scale.set(oe*(.9+C()*.5),ve,oe),O.updateMatrix(),V.setMatrixAt(q,O.matrix),V.setColorAt(q,D[Math.floor(C()*3)]),oe>.7&&N.push({x:j,z:W,r:oe*.8}),q++}V.count=q,V.castShadow=F===0,V.receiveShadow=!0,l.add(V)}let ee={};return t.id==="meridiani"&&(ee.blueberries=N1(l,n,C,700,.045,"#3c3a4a",s,G)),t.id==="southpole"&&U1(l,n,C,G),t.cave&&(ee.cave=F1(l,t.cave)),{group:l,ground:S,blockers:N,extras:ee}}function N1(i,e,t,n,s,r,o,a){let l=new Zn(new Dt(1,8,6),new tt({color:r,roughness:.35,metalness:.3}),n),c=new At,h=0;for(let d=0;d<n*2&&h<n;d++){let u=(t()-.5)*2*a*.7,p=(t()-.5)*2*a*.7;o.some(f=>Math.hypot(u-f.x,p-f.z)<f.r)||(c.position.set(u,e(u,p)+s*.6,p),c.scale.setScalar(s*(.7+t()*.6)),c.updateMatrix(),l.setMatrixAt(h++,c.matrix))}return l.count=h,i.add(l),l}function U1(i,e,t,n){let s=document.createElement("canvas");s.width=s.height=256;let r=s.getContext("2d");r.strokeStyle="#2d2626",r.lineCap="round";let o=(c,h,d,u,p)=>{if(u<6||p<.6)return;let f=c+Math.cos(d)*u,x=h+Math.sin(d)*u;r.lineWidth=p,r.beginPath(),r.moveTo(c,h),r.lineTo(f,x),r.stroke(),o(f,x,d+(t()-.5)*.9,u*.7,p*.7),t()<.6&&o(f,x,d+(t()-.5)*1.8,u*.6,p*.6)};for(let c=0;c<9;c++)o(128,128,c/9*Je+t()*.3,34,7);let a=new Gn(s);a.colorSpace=Wt;let l=new Jt({map:a,transparent:!0,opacity:.75,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3});for(let c=0;c<26;c++){let h=(t()-.5)*2*n*.8,d=(t()-.5)*2*n*.8,u=6+t()*9,p=new Ce(new cn(u,u).rotateX(-Math.PI/2),l);p.position.set(h,e(h,d)+.06,d),p.rotation.y=t()*Je,i.add(p)}}function F1(i,e){let t=[];for(let f=0;f<=8;f++){let x=f/8,g=-4+x*(e.length+4),m=Math.sin(x*5)*2.5;t.push(new L(e.x+Math.cos(e.angle)*g-Math.sin(e.angle)*m,-e.depth+2.6,e.z+Math.sin(e.angle)*g+Math.cos(e.angle)*m))}let n=new Br(t),s=new jo(n,80,6,14,!1),r=s.attributes.position;for(let f=0;f<r.count;f++){let x=new L().fromBufferAttribute(r,f),g=wi(x.x/2,x.z/2+x.y,5)-.5;r.setY(f,Math.max(x.y+g*1.2,-e.depth-.4))}s.computeVertexNormals();let o=new tt({color:kt.enabled?"#b8a49a":"#4a3832",roughness:1,side:hn});Ts(o,"rock",{scale:2.2,dust:.5,low:0,normal:1.4});let a=new Ce(s,o);a.receiveShadow=!0,i.add(a);let l=n.getPoint(1),c=new Ce(new Dt(6.1,18,12),o);c.position.copy(l),i.add(c);let h=n.getPoint(1),d=new ze,u=new tt({color:"#c9f3ff",emissive:"#5fd6ff",emissiveIntensity:1.2,roughness:.15,transparent:!0,opacity:.85});for(let f=0;f<9;f++){let x=new Ce(new Ii(.25+f%3*.12,1+f%4*.5,5),u);x.position.set(h.x+Math.sin(f*2.1)*1.8,-e.depth+.5,h.z+Math.cos(f*1.3)*1.8),x.rotation.set(Math.sin(f)*.4,f,Math.cos(f)*.4),d.add(x)}let p=new er("#7fe4ff",6,14,1.6);return p.position.set(h.x,-e.depth+2,h.z),d.add(p),i.add(d),{mesh:a,curve:n,end:h,crystals:d}}function Cm(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new zt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[f].length!==i[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let p=i[u].index;for(let f=0;f<p.count;++f)d.push(p.getX(f)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Rm(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][u]);let f=Rm(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}}return l}function Rm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Hn(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,p=h.count;u<p;u++)for(let f=0;f<t;f++){let x=h.getComponent(u,f);a.setComponent(u+d,f,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Yu=new Map;function Qt(i,e){return Yu.has(i)||Yu.set(i,e()),Yu.get(i)}var St=(i,e=.62,t=.12,n={})=>new tt({color:i,roughness:e,metalness:t,...n}),Wn=()=>kt.enabled,Ju={shell:[()=>St("#e8e2d8",.5,.1),"panel",{scale:4.8,dust:.55,low:.7}],shellShade:[()=>St("#c4bcb1",.56,.12),"panel",{scale:4.8,dust:.5,low:.7}],foundation:[()=>Wn()?St("#ffffff",.95,0):St("#c9bcae",.56,.16),"printed",{scale:1,dust:.85,low:.9}],frame:[()=>St(Wn()?"#6a6a70":"#5c5562",.45,Wn()?.6:.35),"metal",{scale:1.2,dust:.45,low:.5}],trim:[()=>St(Wn()?"#c8743f":"#e3884c",.5,.1),"panel",{scale:4.8,dust:.45,low:.4}],indigo:[()=>St(Wn()?"#3a3d4c":"#3f3e5a",.55,.2),"panel",{scale:1.6,dust:.4,low:.4}],steel:[()=>St("#a9adb5",.32,.85),"metal",{scale:1,dust:.3,low:.3}],darkSteel:[()=>St("#545862",.4,.7),"metal",{scale:1,dust:.35,low:.45}],rubber:[()=>St("#2a2a2e",.9,0),"rubber",{scale:.4,dust:.55,low:.9}],floor:[()=>Wn()?St("#8a929c",.5,.55):St("#6b7585",.7,.2,{map:Ku("#6b7585","#5b6474")}),"plate",{scale:.6,dust:0,low:0}],wallIn:[()=>St("#e2dfe2",.6,.05),"panel",{scale:1.2,dust:0,low:0}],wood:[()=>St("#b98b5e",.75,0),null],fabric:[()=>St("#5e7fa3",.95,0),"cloth",{scale:.3,dust:0,low:0}],fabricWarm:[()=>St("#c46e60",.95,0),"cloth",{scale:.3,dust:0,low:0}],soil:[()=>Wn()?St("#ffffff",.98,0):St("#4a3026",.98,0),"soil",{scale:.6,dust:0,low:0}],regolith:[()=>Wn()?St("#ffffff",.95,0):St("#a46e56",.97,0,{map:O1()}),"printed",{scale:1,dust:.75,low:.6}],hazard:[()=>St("#ffffff",.6,.1,{map:z1()}),"panel",{scale:1.2,dust:.45,low:.5}],glass:[()=>new _i({color:"#dcefff",roughness:.04,metalness:0,transparent:!0,opacity:.16,depthWrite:!1,side:Sn,...Wn()?{ior:1.5,specularIntensity:1,envMapIntensity:1.4}:{}}),null],window:[()=>St(Wn()?"#1e2a38":"#334a6e",Wn()?.05:.12,Wn()?.1:.5,{emissive:"#1d2f4d",emissiveIntensity:.35,envMapIntensity:1.6}),null],water:[()=>new tt({color:"#5fb6e8",roughness:.1,metalness:.05,transparent:!0,opacity:.62,emissive:"#1d5f88",emissiveIntensity:.35}),null],lampWarm:[()=>St("#ffe2b5",.4,0,{emissive:"#ffcf8a",emissiveIntensity:2.2}),null],lampCool:[()=>St("#c8fff4",.4,0,{emissive:"#7ef4e0",emissiveIntensity:2}),null],lampPink:[()=>St("#ffb3ef",.4,0,{emissive:"#ff5fd2",emissiveIntensity:2.6}),null],lampRed:[()=>St("#ff8a7a",.4,0,{emissive:"#ff3b2f",emissiveIntensity:2.4}),null],lampGreen:[()=>St("#b6ffb0",.4,0,{emissive:"#52e05c",emissiveIntensity:2.2}),null],solarCell:[()=>Hp(St("#ffffff",.25,.55,{map:B1()})),null],leaf:[()=>St("#6fae5c",.8,0),null],leafDark:[()=>St("#3f7d45",.8,0),null],fruitRed:[()=>St("#e2452f",.45,0),null],fruitYellow:[()=>St("#f4c542",.5,0),null],potato:[()=>St("#b98a55",.9,0),null],rice:[()=>St("#a8c95b",.85,0),null]};function Pm(i,e){let[t,n,s]=Ju[i],r=t();if(n&&Wn()){let o=e==="in"?{...s,dust:0,low:0,object:!0}:e==="obj"?{...s,object:!0,low:0}:{...s,object:!0};Ts(r,n,o)}return r}var _e={},ue={},Ct={};for(let i of Object.keys(Ju)){_e[i]=()=>Qt(i,()=>Pm(i,"out"));let e=t=>()=>Ju[i][1]&&Wn()?Qt(`${i}:${t}`,()=>Pm(i,t)):_e[i]();ue[i]=e("in"),Ct[i]=e("obj")}function As(i,e,t,n=null){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Gn(s);return r.colorSpace=Wt,n&&(r.wrapS=r.wrapT=vn,r.repeat.set(...n)),r}function Ku(i,e){return As(128,128,t=>{t.fillStyle=i,t.fillRect(0,0,128,128),t.strokeStyle=e,t.lineWidth=3,t.strokeRect(1.5,1.5,125,125),t.fillStyle=e;for(let[n,s]of[[10,10],[118,10],[10,118],[118,118]])t.fillRect(n-2,s-2,4,4)},[1,1])}function O1(){return As(128,64,i=>{i.fillStyle="#a46e56",i.fillRect(0,0,128,64);for(let e=0;e<2;e++)for(let t=-1;t<3;t++){let n=t*50+(e?25:0);i.fillStyle=e?"#b47b60":"#a8725a",i.beginPath(),i.roundRect(n+2,e*32+2,46,28,10),i.fill(),i.strokeStyle="#7b4c3b",i.lineWidth=2,i.stroke()}},[8,1])}function z1(){return As(64,64,i=>{i.fillStyle="#f2b13a",i.fillRect(0,0,64,64),i.fillStyle="#2b2733";for(let e=-64;e<64;e+=22)i.beginPath(),i.moveTo(e,64),i.lineTo(e+11,64),i.lineTo(e+75,0),i.lineTo(e+64,0),i.fill()},[4,1])}function B1(){return As(256,128,i=>{let e=i.createLinearGradient(0,128,256,0);e.addColorStop(0,"#13204a"),e.addColorStop(.6,"#2b4280"),e.addColorStop(1,"#5a5f99"),i.fillStyle="#c7c9d6",i.fillRect(0,0,256,128);for(let t=0;t<8;t++)for(let n=0;n<4;n++)i.fillStyle=e,i.fillRect(t*32+2,n*32+2,28,28),i.fillStyle="#ffffff22",i.fillRect(t*32+2,n*32+15,28,1)})}function k1(i,e,t,{bg:n="#262b3d",fg:s="#fff1d9",accent:r="#e3884c"}={}){return kt.enabled?As(512,160,(o,a,l)=>{let c=o.createLinearGradient(0,0,0,l);c.addColorStop(0,"#3a3e45"),c.addColorStop(1,"#2a2d33"),o.fillStyle=c,o.fillRect(0,0,a,l);for(let d=0;d<260;d++)o.fillStyle=`rgba(255,255,255,${Math.random()*.035})`,o.fillRect(Math.random()*a,Math.random()*l,40+Math.random()*160,1);if(i==="\u{1F1E7}\u{1F1E9}")o.fillStyle="#006a4e",o.fillRect(22,30,96,64),o.fillStyle="#f42a41",o.beginPath(),o.arc(64,62,19,0,Math.PI*2),o.fill();else{o.save(),o.beginPath(),o.rect(18,18,26,l-36),o.clip(),o.fillStyle=r==="#e3884c"?"#e5b23a":r,o.fillRect(18,18,26,l-36),o.fillStyle="#1d1e22";for(let d=-40;d<l+40;d+=22)o.beginPath(),o.moveTo(18,d),o.lineTo(44,d-18),o.lineTo(44,d-7),o.lineTo(18,d+11),o.fill();o.restore()}o.fillStyle="#9aa0a8";for(let[d,u]of[[8,8],[a-8,8],[8,l-8],[a-8,l-8]])o.beginPath(),o.arc(d,u,3.5,0,Math.PI*2),o.fill();let h=i==="\u{1F1E7}\u{1F1E9}"?134:62;o.fillStyle="#eceae4",o.textBaseline="middle",o.font='700 50px "Arial Narrow", "Roboto Condensed", "DIN Condensed", system-ui, sans-serif',o.letterSpacing="3px",o.fillText(e,h,58,a-h-18),o.letterSpacing="0px",o.fillStyle="#b8bcc3",o.font='34px "Noto Sans Bengali", "Hind Siliguri", system-ui, sans-serif',o.fillText(t,h+2,114,a-h-18)}):As(512,160,(o,a,l)=>{o.fillStyle=n,o.fillRect(0,0,a,l),o.fillStyle=r,o.fillRect(0,l-14,a,14),o.font='84px system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',o.textBaseline="middle",o.fillText(i,22,72),o.fillStyle=s,o.font="bold 54px system-ui, sans-serif",o.fillText(e,132,56),o.fillStyle="#c8c3d4",o.font='38px "Noto Sans Bengali", "Hind Siliguri", system-ui, sans-serif',o.fillText(t,134,112)})}function ls(i,e,t,n=3.4,s){let r=k1(i,e,t,s),o=kt.enabled?new tt({map:r,roughness:.5,metalness:.35,emissive:"#ffffff",emissiveMap:r,emissiveIntensity:.12}):new Jt({map:r,toneMapped:!1});return new Ce(new cn(n,n*160/512),o)}function Na(i,e,t=256){let n=document.createElement("canvas");n.width=t,n.height=Math.round(t*e/i);let s=new Gn(n);return s.colorSpace=Wt,{mesh:new Ce(new cn(i,e),new Jt({map:s,toneMapped:!1})),canvas:n,ctx:n.getContext("2d"),update(){s.needsUpdate=!0}}}var H1=new nn(1,1,1),G1=new Qr(1,1,1,2,.12),Zu=new Map,V1=(i,e=1,t=!1)=>{let n=`${i}-${e}-${t}`;return Zu.has(n)||Zu.set(n,new Rt(e,1,1,i,1,t)),Zu.get(n)},W1=new Dt(1,20,14),La=new At,Ze=class{constructor(){this.parts=new Map}add(e,t,n=0,s=0,r=0,o=1,a=1,l=1,c=0,h=0,d=0){La.position.set(n,s,r),La.rotation.set(c,h,d),La.scale.set(o,a,l),La.updateMatrix();let u=e.clone().applyMatrix4(La.matrix);return this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(u),this}raw(e,t){return this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(e),this}box(e,t,n,s,r,o,a,l=0,c=0,h=0){return this.add(H1,e,t,n,s,r,o,a,c,l,h)}round(e,t,n,s,r,o,a,l=0,c=0,h=0){return this.add(G1,e,t,n,s,r,o,a,c,l,h)}cyl(e,t,n,s,r,o,a=18,l=0,c=0,h=0,d=1){return this.add(V1(a,d),e,t,n,s,r,o,r,l,c,h)}ball(e,t,n,s,r,o=r,a=r){return this.add(W1,e,t,n,s,r,o,a)}build(e,{shadows:t=!0,receive:n=!0}={}){let s=[];for(let[r,o]of this.parts){let a=Cm(o.map(X1)),l=new Ce(a,r);l.castShadow=t&&!r.transparent,l.receiveShadow=n,e.add(l),s.push(l)}return this.parts.clear(),s}};function X1(i){let e=i.index?i.toNonIndexed():i;for(let t of Object.keys(e.attributes))["position","normal","uv"].includes(t)||e.deleteAttribute(t);return e.attributes.uv||e.setAttribute("uv",new je(new Float32Array(e.attributes.position.count*2),2)),e}function Lm(i,e,t,n,s=48){let r=new Dt(1,s,16,0,Math.PI*2,0,Math.PI/2);return r.scale(i,t-e,i),r.translate(0,e,0),new Ce(r,n)}var Im=null;function ju(){return Im??=As(32,32,i=>{let e=i.createRadialGradient(16,16,0,16,16,16);e.addColorStop(0,"#ffffffff"),e.addColorStop(.6,"#ffffff99"),e.addColorStop(1,"#ffffff00"),i.fillStyle=e,i.fillRect(0,0,32,32)}),Im}var Dm=null;function un(i,e=1,t=.8){Dm??=As(64,64,s=>{let r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"#ffffffff"),r.addColorStop(.3,"#ffffff88"),r.addColorStop(1,"#ffffff00"),s.fillStyle=r,s.fillRect(0,0,64,64)});let n=new Ys(new vs({map:Dm,color:i,transparent:!0,opacity:t,depthWrite:!1,blending:ts}));return n.scale.setScalar(e),n}function Rs(i){let e=Wp(i);return e.transparent=!0,e.userData.fade=!0,e}function sh(i,e){for(let t of i)t.opacity=e,t.depthWrite=e>.95,t.visible=e>.02}var We=.32,q1={hub:["\u{1F3E0}","HABITAT","\u09AC\u09BE\u09B8\u09B8\u09CD\u09A5\u09BE\u09A8"],greenhouse:["\u{1F331}","GREENHOUSE","\u0997\u09CD\u09B0\u09BF\u09A8\u09B9\u09BE\u0989\u09B8"],power:["\u26A1","POWER PLANT","\u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE\u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0"],life:["\u{1F4A7}","WATER + OXYGEN","\u09AA\u09BE\u09A8\u09BF + \u0985\u0995\u09CD\u09B8\u09BF\u099C\u09C7\u09A8"],garage:["\u{1F6DE}","GARAGE","\u0997\u09CD\u09AF\u09BE\u09B0\u09C7\u099C"],lab:["\u{1F52C}","SCIENCE LAB","\u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8 \u09B2\u09CD\u09AF\u09BE\u09AC"],greenhouse2:["\u{1F33B}","GREENHOUSE 2","\u0997\u09CD\u09B0\u09BF\u09A8\u09B9\u09BE\u0989\u09B8 \u09E8"],observatory:["\u{1F52D}","OBSERVATORY","\u09AE\u09BE\u09A8\u09AE\u09A8\u09CD\u09A6\u09BF\u09B0"],playroom:["\u{1F9F6}","PLAYROOM","\u0996\u09C7\u09B2\u09BE\u0998\u09B0"]},$1=null;function Y1(){return $1??=Ku("#707b8c","#5c6676"),_e.floor()}function rh(i,e){let t=i.attributes.position,n=i.attributes.uv;for(let r=0;r<t.count;r++)n.setXY(r,t.getX(r)/2,t.getZ(r)/2);let s=new Ce(i,Y1());return s.position.y=e,s.receiveShadow=!0,s}function Nm(i,e,t=Ct.shellShade()){let n=new ze,s=[];for(let r of[-1,1]){let o=new ze,a=new Ze;a.round(t,0,e/2,0,.16,e,i/2),a.box(Ct.window(),0,e*.72,0,.2,e*.18,i/2*.5),a.box(Ct.trim(),0,.35,0,.18,.08,i/2*.9),a.build(o),n.add(o),s.push({p:o,side:r})}return{group:n,set(r){for(let{p:o,side:a}of s)o.position.z=a*(i/4+r*i*.47)}}}function Z1(i,e,t){let n=new ze;n.position.set(i.x,0,i.z);let s=new Ze,r=new Ze,o=i.glass?_e.glass():_e.shell(),a=_e.frame(),l=Rs(a);t.push(l),s.cyl(_e.foundation(),0,We/2-.55,0,i.r+.7,We+1.1,48);let c=Math.max(40,Math.round(i.r*6));for(let p=0;p<c;p++){let f=p/c*Je,x=(p+1)/c*Je,g=(f+x)/2;if(e.some(S=>Math.abs(rs(g,S.angle))<Math.asin(Math.min(.99,((S.wide?3.6:or)+.15)/i.r))))continue;let y=2*i.r*Math.sin(Math.PI/c)+.04,M=Math.cos(g)*i.r,_=Math.sin(g)*i.r,w=-(g+Math.PI/2);i.glass?(s.box(a,M,We+i.wall/2,_,.14,i.wall,.14,w),s.box(o,M,We+i.wall/2,_,y,i.wall,.06,w)):(s.box(o,M,We+i.wall/2,_,y,i.wall,.34,w),s.box(_e.wallIn(),M*.975,We+i.wall/2,_*.975,y,i.wall-.1,.06,w),s.box(_e.trim(),M*1.012,We+i.wall-.45,_*1.012,y,.16,.06,w),p%4===2&&s.box(_e.window(),M,We+1.75,_,y*.7,.9,.42,w)),i.id==="hub"&&s.box(_e.regolith(),M*1.07,We+.75,_*1.07,y*1.08,1.5,.9,w)}let h=i.top-i.wall;for(let p=0;p<12;p++){let f=p/12*Je;for(let x=0;x<8;x++){let g=x/8*Math.PI/2,m=(x+1)/8*Math.PI/2,y=(g+m)/2,M=(i.r+.2)*Math.cos(y),_=We+i.wall+h*Math.sin(y),w=Math.hypot(i.r*(Math.cos(g)-Math.cos(m)),h*(Math.sin(m)-Math.sin(g)))+.05,S=Math.atan2(i.r*Math.sin(y),h*Math.cos(y)),v=new nn(.14,w,.14);v.rotateZ(S),v.rotateY(-f),v.translate(Math.cos(f)*M,_,Math.sin(f)*M),r.raw(v,l)}}for(let p of[.35,.7]){let f=(i.r+.2)*Math.cos(p*Math.PI/2),x=We+i.wall+h*Math.sin(p*Math.PI/2);r.add(new yi(1,.07/f,6,48),l,0,x,0,f,f,f,Math.PI/2)}s.build(n),r.build(n,{shadows:!0});let d=Rs(i.glass?_e.glass():_e.shell());i.glass&&(d.opacity=d.userData.base=.16),t.push(d);let u=Lm(i.r+.17,We+i.wall,We+i.top,d);return u.castShadow=!i.glass,n.add(u),n.add(rh(new Js(i.r-.1,64).rotateX(-Math.PI/2),We+.005)),n}function J1(i,e,t){let n=new ze;n.position.set(i.x,0,i.z),n.rotation.y=-i.facing;let s=new Ze,r=new Ze,o=Rs(_e.shell()),a=Rs(_e.frame());t.push(o,a);let{hd:l,hw:c,h}=i,d=e.some(x=>x.local===0),u=e.find(x=>x.local===Math.PI),p=x=>x?.wide?3.6:or+.15;s.box(_e.foundation(),0,We/2-.55,0,l*2+1.2,We+1.1,c*2+1.2);let f=(x,g,m,y)=>{let M=Math.hypot(m-x,y-g),_=(x+m)/2,w=(g+y)/2,S=-Math.atan2(y-g,m-x),v=-(y-g)/M,b=(m-x)/M,R=Math.sign(-(_*v+w*b))||1;s.box(_e.shell(),_,We+h/2,w,M+.3,h,.34,S),s.box(_e.wallIn(),_+v*R*.2,We+h/2,w+b*R*.2,M,h-.1,.06,S),s.box(_e.trim(),_-v*R*.2,We+h-.6,w-b*R*.2,M+.3,.2,.06,S),s.box(_e.shellShade(),_-v*R*.2,We+.4,w-b*R*.2,M+.3,.8,.08,S);for(let T=-M/2+2.5;T<M/2-1.5;T+=4.2){let C=_+(m-x)/M*T,P=w+(y-g)/M*T;s.box(_e.window(),C,We+2.4,P,1.6,.85,.42,S)}};f(-l,-c,l,-c),f(-l,c,l,c),d?(f(l,-c,l,-p()),f(l,p(),l,c)):f(l,-c,l,c),u?(f(-l,-c,-l,-p(u)),f(-l,p(u),-l,c)):f(-l,-c,-l,c),d&&s.box(_e.shell(),l,We+h-.7,0,.34,1.4,p()*2),u&&s.box(_e.shell(),-l,We+h-(u.wide?.6:.7),0,.34,u.wide?1.2:1.4,p(u)*2),r.box(o,0,We+h+.2,0,l*2+.7,.4,c*2+.7);for(let x=-l+1.5;x<l;x+=3)r.box(a,x,We+h+.48,0,.18,.18,c*2+.4);return r.round(a,-l*.4,We+h+.75,c*.4,1.4,.6,1.4),r.cyl(a,l*.4,We+h+.8,-c*.4,.5,.8,14),s.build(n),r.build(n),n.add(rh(new cn(l*2,c*2).rotateX(-Math.PI/2),We+.005)),n}function K1(i,e){let t=new ze;t.position.set(i.start[0],0,i.start[1]),t.rotation.y=-i.angle;let n=new Ze,s=new Ze,r=Rs(_e.shell()),o=Rs(_e.frame());e.push(r,o);let a=i.length;n.box(_e.shellShade(),a/2,We/2-.4,0,a,We+.8,li*2+.8);for(let c of[-1,1])n.box(_e.shell(),a/2,We+.6,c*(li+.12),a,1.2,.24),n.box(_e.lampCool(),a/2,We+.12,c*(li-.12),a-.6,.05,.08),n.box(_e.regolith(),a/2,We+.5,c*(li+.75),a,1,.8);let l=new Rt(li+.24,li+.24,a,20,1,!0,0,Math.PI);l.rotateZ(Math.PI/2),l.rotateX(Math.PI/2),l.translate(a/2,We+1.2,0),s.add(l,r);for(let c=.5;c<a;c+=1.8)s.add(new yi(li+.3,.08,6,20,Math.PI),o,c,We+1.2,0,1,1,1,0,Math.PI/2);return n.build(t),s.build(t),t.add(rh(new cn(a,li*2).rotateX(-Math.PI/2).translate(a/2,0,0),We+.01)),t}function j1(i,e){let t=new ze;t.position.set(i.inner[0],0,i.inner[1]),t.rotation.y=-i.angle;let n=Math.hypot(i.outer[0]-i.inner[0],i.outer[1]-i.inner[1]),s=new Ze,r=new Ze,o=Rs(_e.shell());e.push(o);let a=i.wide?5.6:3.3;s.box(_e.shellShade(),n/2,We/2-.4,0,n+.4,We+.8,i.half*2+.9);for(let u of[-1,1])s.box(_e.shell(),n/2,We+a/2,u*(i.half+.15),n,a,.3),s.box(_e.hazard(),n/2,We+.25,u*(i.half-.02),n,.2,.05),s.box(_e.frame(),n,We+a/2,u*(i.half+.1),.5,a+.2,.5);s.box(_e.frame(),n,We+a+.1,0,.5,.4,i.half*2+.6),r.box(o,n/2,We+a+.15,0,n+.3,.3,i.half*2+.7),s.build(t),r.build(t),t.add(rh(new cn(n,i.half*2).rotateX(-Math.PI/2).translate(n/2,0,0),We+.01));let l=Nm(i.half*2,a-.1);l.group.position.set(n-.05,We,0),t.add(l.group);let c=new tt({color:"#ff8a7a",emissive:"#ff3b2f",emissiveIntensity:2.4}),h=new Ce(new Dt(.16,12,8),c);h.position.set(n+.3,We+a-.2,i.half-.3),t.add(h);let d=ls("\u{1F6AA}","AIRLOCK","\u098F\u09AF\u09BC\u09BE\u09B0\u09B2\u0995",2.4);return d.position.set(n+.27,We+a+.62,0),d.rotation.y=Math.PI/2,t.add(d),{group:t,door:l,lamp:h,lampOn:c,length:n}}function Um(i,e){let t=new ze;i.add(t);let n=new Map;for(let o of e){let a=eh(o,e),l=[],c=o.shape==="dome"?Z1(o,a,l):J1(o,a,l);t.add(c);let h=[];for(let x of a.filter(g=>g.kind==="tunnel")){let g=o.shape==="dome"?o.r:o.hd,m=Nm(or*2,2.9),y=o.x+Math.cos(x.angle)*(g-.1),M=o.z+Math.sin(x.angle)*(g-.1);m.group.position.set(y,We,M),m.group.rotation.y=-x.angle,t.add(m.group),h.push({door:m,x:y,z:M,open:0})}let[d,u,p]=q1[o.type]??["\u{1F3E0}",o.id.toUpperCase(),""],f=ls(d,u,p,4.2);if(o.shape==="dome"){let x=(o.id==="hub"?5*Math.PI/4:o.facing+Math.PI)+.35;f.position.set(o.x+Math.cos(x)*(o.r+.45),We+o.wall+.9,o.z+Math.sin(x)*(o.r+.45)),f.rotation.y=Math.atan2(Math.cos(x),Math.sin(x))}else{let[x,g]=as(o,-o.hd-.25,o.hw*.55);f.position.set(x,We+o.h-1.3,g),f.rotation.y=Math.atan2(-Math.cos(o.facing),-Math.sin(o.facing))}t.add(f),n.set(o.id,{m:o,group:c,roofMats:l,fade:1,tunnelDoors:h})}let s=to(e).map(o=>{let a=[],l=K1(o,a);return t.add(l),{t:o,group:l,roofMats:a,fade:1}}),r=th(e).map(o=>{let a=[],l=j1(o,a);return t.add(l.group),{a:o,...l,roofMats:a,fade:1,open:0,cycle:0,want:!1}});return{root:t,modules:n,tunnels:s,airlocks:r,update(o,a,l,c){let h=a?.module;for(let[d,u]of n){let p=h===d?.02:1;u.fade=c?p:Bt(u.fade,p,7,o);for(let f of u.roofMats)sh([f],u.fade*(f.userData.base??1));for(let f of u.tunnelDoors){let x=l.some(g=>Math.hypot(g.x-f.x,g.z-f.z)<3.2);f.open=c?Number(x):Bt(f.open,Number(x),6,o),f.door.set(f.open)}}for(let d of s){let u=a?.kind==="tunnel"&&a.id===d.t.id;d.fade=c?+!u:Bt(d.fade,u?.02:1,7,o);for(let p of d.roofMats)sh([p],d.fade)}for(let d of r){let p=a?.kind==="airlock"&&a.id===d.a.id?.02:1;d.fade=c?p:Bt(d.fade,p,7,o);for(let f of d.roofMats)sh([f],d.fade)}},driveAirlock(o,a,l,c){a?o.cycle=Math.min(1.4,o.cycle+l):o.cycle=Math.max(0,o.cycle-l*2);let h=o.cycle>=1.2;o.open=c?Number(h):Bt(o.open,Number(h),5,l),o.door.set(o.open);let d=o.open>.6;return o.lampOn.emissive.set(d?"#52e05c":o.cycle>0?"#ffb23a":"#ff3b2f"),o.lampOn.color.set(d?"#b6ffb0":"#ff8a7a"),o.open}}}var ie=We,Ps={time:{value:0},growth:{value:.5},mold:{value:0},dust:{value:0}};function Qu(i){let e=document.createElement("canvas");e.width=64,e.height=8;let t=e.getContext("2d");t.fillStyle="#d5dbe4",t.fillRect(0,0,64,8),t.fillStyle=i;for(let s=0;s<64;s+=16)t.fillRect(s,0,7,8);let n=new Gn(e);return n.colorSpace=Wt,n.wrapS=n.wrapT=vn,n.repeat.set(6,1),n}var cs={water:()=>Qt("flowWater",()=>new tt({map:Qu("#3f9ee0"),roughness:.4,metalness:.3,emissive:"#11324a",emissiveIntensity:.4})),power:()=>Qt("flowPower",()=>new tt({map:Qu("#5ef0d6"),roughness:.4,metalness:.3,emissive:"#2fd8c0",emissiveIntensity:.9})),oxygen:()=>Qt("flowOxygen",()=>new tt({map:Qu("#7ee08a"),roughness:.4,metalness:.3,emissive:"#1f5a2a",emissiveIntensity:.5}))};function Bm(i,e={}){cs.water().map.offset.x-=i*.6*(e.water??1),cs.power().map.offset.x-=i*1.2*(e.power??1),cs.oxygen().map.offset.x-=i*.5*(e.oxygen??1)}function Cs(i){let e=new tt({color:i,roughness:.8,side:Sn});return e.onBeforeCompile=t=>{t.uniforms.uTime=Ps.time,t.uniforms.uGrowth=Ps.growth,t.uniforms.uMold=Ps.mold,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uGrowth; varying vec3 vWorldPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float bed = ${(ie+.78).toFixed(2)};
        float above = max(transformed.y - bed, 0.0);
        transformed.y = bed + above * (0.35 + 0.65 * uGrowth);
        vec4 wp = modelMatrix * vec4(transformed, 1.0);
        float sway = sin(uTime * 1.8 + wp.x * 0.9 + wp.z * 0.7) * 0.05 + sin(uTime * 3.1 + wp.z * 2.0) * 0.015;
        transformed.x += sway * above;
        transformed.z += sway * above * 0.6;
        vWorldPos = wp.xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uMold; varying vec3 vWorldPos;`).replace("#include <color_fragment>",`#include <color_fragment>
        float spot = step(0.72, fract(sin(dot(floor(vWorldPos * 9.0), vec3(12.9898, 78.233, 37.719))) * 43758.5453));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.86, 0.86, 0.8), spot * uMold * 0.9);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.8, 0.75, 0.55), uMold * 0.4);`)},e}function Q1(){let t=[],n=[];for(let r=0;r<=7;r++){let o=r/7,a=Math.pow(Math.sin(Math.PI*Math.min(.999,o*.92+.04)),.8)*(1-.25*o);for(let l=0;l<=5;l++){let c=l/5*2-1;t.push(c*a*.5,o,-.18*c*c*a+.22*o*o)}}for(let r=0;r<7;r++)for(let o=0;o<5;o++){let a=r*6+o,l=a+5+1;n.push(a,l,a+1,a+1,l,l+1)}let s=new zt;return s.setAttribute("position",new je(t,3)),s.setIndex(n),s.computeVertexNormals(),s.toNonIndexed()}var eb=Q1(),Fm=new yt,tb=new ii,Om=new gi,nb=new L,ib=new L;function ar(i,e,t,n,s,r,o,a,l,c=0){Om.set(a,l,c,"YXZ"),Fm.compose(nb.set(t,n,s),tb.setFromEuler(Om),ib.set(o*2,r,o*2)),i.raw(eb.clone().applyMatrix4(Fm),e)}var wn={leaf:()=>Qt("pLeaf",()=>Cs("#6fb35e")),leafDark:()=>Qt("pLeafDark",()=>Cs("#3f8a4a")),lettuce:()=>Qt("pLettuce",()=>Cs("#9bd36a")),rice:()=>Qt("pRice",()=>Cs("#a9cf5c")),stem:()=>Qt("pStem",()=>Cs("#4f7a3c")),petal:()=>Qt("pPetal",()=>Cs("#f6c73b")),seed:()=>Qt("pSeed",()=>Cs("#6b4a2b")),fruit:()=>Qt("pFruit",()=>Cs("#e2452f"))};function Is(i){let e=new ze;return e.position.set(i.x,0,i.z),e.rotation.y=-i.facing,e}function ci(i,e,t,n,s,r=40,o=22){let a=new er(e,r,o,1.6);return a.position.set(t,n,s),i.add(a),a}var zi=(i,e,t)=>as(i,e,t);function En(i,e,t,n,s,r,o,a="tap"){let[l,c]=zi(e,n,s);i.push({id:t,module:e.id,x:l,z:c,r,label:o,verb:a})}function ed(i,e,t,n,s,r){let o=[[t-s,n-r],[t+s,n-r],[t+s,n+r],[t-s,n+r]].map(([a,l])=>zi(e,a,l));for(let a=0;a<4;a++)i.segs.push([...o[a],...o[(a+1)%4]])}function Xn(i,e,t,n,s){let[r,o]=zi(e,t,n);i.push({x:r,z:o,r:s})}var Ft=(i,e)=>[Math.cos(i)*e,Math.sin(i)*e];function sb(i,e,t,n){i.round(ue.shell(),e,ie+.55,t,2.5,1.1,1.25,n),i.box(ue.fabric(),e,ie+.72,t,2.1,.22,.95,n),i.round(ue.fabricWarm(),e+Math.cos(-n)*.8,ie+.9,t+Math.sin(-n)*.8,.45,.18,.7,n)}function rb(i,e){let t=Is(i),n=new Ze,s=i.r;n.cyl(ue.frame(),0,ie+.45,0,1.35,.9,32),n.cyl(ue.shell(),0,ie+.93,0,1.45,.08,32),n.cyl(ue.lampCool(),0,ie+.98,0,1.2,.03,32);for(let P=3.5;P<4.4;P+=.21){let[N,D]=Ft(P,s-1);n.box(ue.shellShade(),N,ie+.48,D,1.6,.95,.75,-P+Math.PI/2),n.box(ue.wood(),N,ie+.98,D,1.65,.06,.8,-P+Math.PI/2)}let[r,o]=Ft(4.5,s-1.1);n.round(ue.steel(),r,ie+1.1,o,1,2.2,.8,-4.5+Math.PI/2);let[a,l]=Ft(3.93,5.9);n.cyl(ue.wood(),a,ie+.78,l,1.15,.08,24),n.cyl(ue.frame(),a,ie+.4,l,.14,.78,10);for(let P=0;P<4;P++){let[N,D]=Ft(P*Math.PI/2+.4,1.6);n.cyl(ue.trim(),a+N,ie+.42,l+D,.32,.12,14),n.cyl(ue.frame(),a+N,ie+.2,l+D,.07,.4,8)}n.cyl(ue.fabricWarm(),a,ie+.02,l,2.6,.03,32);for(let P of[-1.42,-1,-.6,-.18])sb(n,...Ft(P,s-1.5),-P+Math.PI/2);let[c,h]=Ft(Math.PI/4,6.4);for(let P=0;P<12;P++){let N=P/12*Je;Math.abs(Math.atan2(Math.sin(N-(Math.PI/4+Math.PI)),Math.cos(N-(Math.PI/4+Math.PI))))<.5||(n.cyl(ue.water(),c+Math.cos(N)*2.2,ie+1.25,h+Math.sin(N)*2.2,.48,2.5,14),n.cyl(ue.frame(),c+Math.cos(N)*2.2,ie+2.55,h+Math.sin(N)*2.2,.5,.1,14))}n.cyl(ue.frame(),c,ie+2.75,h,2.75,.18,32),n.box(ue.fabric(),c+.6,ie+.35,h+.6,1.6,.5,.6,-Math.PI/4),["#e9dcd1","#e3884c","#6b8fb5","#b07ad6"].forEach((P,N)=>{let D=1.72+N*.17,[O,G]=Ft(D,s-.9);n.box(ue.frame(),O,ie+1.2,G,1,2.4,.5,-D+Math.PI/2);let B=Qt(`suit-${P}`,()=>new tt({color:P,roughness:.7}));n.round(B,O*.97,ie+1.2,G*.97,.6,.9,.35,-D+Math.PI/2),n.ball(ue.glass(),O*.97,ie+1.95,G*.97,.3)});let[u,p]=Ft(2.8,s-2.2);n.round(ue.shell(),u,ie+.5,p,2.2,.75,1,-2.8+Math.PI/2),n.box(ue.fabric(),u,ie+.9,p,2,.12,.9,-2.8+Math.PI/2);let[f,x]=Ft(.3,5.3);n.round(ue.darkSteel(),f,ie+.45,x,1.4,.35,.45,-.3),n.cyl(ue.frame(),f+.4,ie+.75,x,.06,.8,8);let[g,m]=Ft(-.5,3.6);n.cyl(ue.frame(),g,ie+.05,m,.75,.1,24),n.cyl(ue.lampCool(),g,ie+.11,m,.55,.02,24);for(let P of[1.2,2.3,3.2,4.8]){let[N,D]=Ft(P,s-.9);n.cyl(ue.trim(),N,ie+.35,D,.38,.7,14,0,0,0,1.2),n.ball(ue.leafDark(),N,ie+1,D,.55,.65,.55)}n.build(t);let y=new ze;y.position.set(0,ie+1.35,0);let M=new Jt({color:"#7ef4e0",wireframe:!0,transparent:!0,opacity:.55});y.add(new Ce(new Dt(.42,12,6,0,Je,0,Math.PI/2),M));for(let P=0;P<5;P++){let N=new Ce(new Dt(.18,8,4,0,Je,0,Math.PI/2),M);N.position.set(Math.cos(P/5*Je)*.95,0,Math.sin(P/5*Je)*.95),y.add(N)}let _=new Ce(new Rt(1.2,1.2,.9,24,1,!0),new Jt({color:"#7ef4e0",transparent:!0,opacity:.08,side:Sn,depthWrite:!1}));_.position.y=-.1,y.add(_),t.add(y);let w=Na(.9,.55,192);w.mesh.position.set(...[Ft(2.8,s-.45)].flatMap(([P,N])=>[P,ie+1.9,N])),w.mesh.rotation.y=-2.8-Math.PI/2,t.add(w.mesh);let S=ls("\u{1F1E7}\u{1F1E9}","KHULNA SPACE CENTER","\u0996\u09C1\u09B2\u09A8\u09BE \u09AE\u09B9\u09BE\u0995\u09BE\u09B6 \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0",2.6),[v,b]=Ft(Math.PI*1.52,s-.45);S.position.set(v,ie+2.4,b),S.rotation.y=-Math.PI*1.52-Math.PI/2,t.add(S);let R=ls("\u{1F6E1}\uFE0F","STORM SHELTER","\u099D\u09A1\u09BC\u09C7\u09B0 \u0986\u09B6\u09CD\u09B0\u09AF\u09BC",2.3,{accent:"#5fb6e8"});R.position.set(c-1.9,ie+3.3,h-1.9),R.rotation.y=-Math.PI/4-Math.PI/2+Math.PI,t.add(R);let T=[ci(t,"#ffe2c0",-3,ie+6,3,14,24),ci(t,"#ffe2c0",3.5,ie+6,-3,14,24)];En(e.spots,i,"planner",0,0,2.6,{en:"Plan the base",bn:"\u0998\u09BE\u0981\u099F\u09BF\u09B0 \u09AA\u09B0\u09BF\u0995\u09B2\u09CD\u09AA\u09A8\u09BE"}),En(e.spots,i,"wardrobe",...Ft(1.97,s-2.6),1.8,{en:"Suit locker",bn:"\u09B8\u09CD\u09AF\u09C1\u099F \u09B2\u0995\u09BE\u09B0"}),En(e.spots,i,"shelter",c,h,2,{en:"Storm shelter",bn:"\u099D\u09A1\u09BC\u09C7\u09B0 \u0986\u09B6\u09CD\u09B0\u09AF\u09BC"}),En(e.spots,i,"med",...Ft(2.8,s-3.4),1.6,{en:"Med bay",bn:"\u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE \u0995\u0995\u09CD\u09B7"},"hold"),En(e.spots,i,"kitchen",...Ft(3.93,4.2),1.6,{en:"Have a snack",bn:"\u09A8\u09BE\u09B8\u09CD\u09A4\u09BE \u0996\u09BE\u0993"}),Xn(e.colliders,i,0,0,1.5),Xn(e.colliders,i,a,l,1.25);for(let P=0;P<12;P++){let N=P/12*Je;Math.abs(Math.atan2(Math.sin(N-Math.PI*1.25),Math.cos(N-Math.PI*1.25)))<.5||Xn(e.colliders,i,c+Math.cos(N)*2.2,h+Math.sin(N)*2.2,.5)}e.waypoints.hub=[[0,2.6],[a*.7,l*.7],[c,h],[...Ft(-.8,6.5)],[...Ft(2.8,6.5)],[f-.6,x]],e.anchors.bike=[f,x],e.anchors.dock=[g,m],e.anchors.shelter=[c,h],e.anchors.leak={hub:[...Ft(-2.4,s-.4)]};let C=0;return{group:t,lights:T,animate(P,N,D){if(y.rotation.y=P*.5,M.opacity=.45+Math.sin(P*7)*.08+(Math.random()<.02?-.3:0),C+=N,C>.12&&D.near){C=0;let O=w.ctx,G=w.canvas.width,B=w.canvas.height;O.drawImage(w.canvas,-4,0),O.fillStyle="#10202a",O.fillRect(G-4,0,4,B);let ee=P*1.3%1,F=ee<.1?B*.2:ee<.15?B*.8:B*.55;O.fillStyle="#5ef08a",O.fillRect(G-4,F,4,3),w.update()}}}}function zm(i,e,t=!1){let n=Is(i),s=new Ze,r=new Ze,o=new Ze,a=i.r;s.box(ue.darkSteel(),0,ie+.03,0,a*2-1,.04,2.2);let l=t?[-3.4,3.4,6.2]:[-8.4,-6,-3.2,3.2,6,8.4],c=t?["lettuce","tomato","sunflower"]:["rice","potato","lettuce","tomato","strawberry","sunflower"];l.forEach((w,S)=>{let v=Math.sqrt(Math.max(0,a*a-(Math.abs(w)+1.1)**2))-1.3;if(v<1)return;s.box(ue.shellShade(),0,ie+.38,w,v*2,.75,1.6),s.box(ue.soil(),0,ie+.77,w,v*2-.2,.04,1.4),s.box(ue.trim(),0,ie+.7,w+.81,v*2,.1,.02),s.box(ue.lampPink(),0,ie+3.4,w,v*2-.4,.06,.12),s.box(ue.frame(),0,ie+3.47,w,v*2-.2,.05,.16);for(let R of[-v+.5,v-.5])s.cyl(ue.frame(),R,ie+4.6,w,.02,2.2,4);let b=c[S];b==="rice"&&s.box(ue.water(),0,ie+.8,w,v*2-.3,.05,1.3);for(let R=-v+.5;R<v-.3;R+=b==="rice"?.35:.85)for(let T of b==="rice"?[-.4,0,.4]:[-.3,.3]){let C=R,P=w+T,N=ie+.79,D=(C*7.1+P*3.7)%(Math.PI*2);if(b==="lettuce")for(let O=0;O<10;O++){let G=O>=6;ar(r,wn.lettuce(),C,N+.02,P,G?.18:.26,G?.12:.17,G?.45:1.05,D+O*2.4)}else if(b==="rice")for(let O=0;O<7;O++)ar(r,wn.rice(),C+(O%3-1)*.03,N,P,.55+O%3*.12,.025,.15+O%4*.12,D+O*.9);else if(b==="potato"){r.cyl(wn.stem(),C,N+.22,P,.02,.45,5);for(let O=0;O<14;O++)ar(r,O%3?wn.leaf():wn.leafDark(),C,N+.1+O%5*.08,P,.2,.11,.7+O%3*.25,D+O*2.39)}else if(b==="strawberry"){for(let O=0;O<9;O++)ar(r,wn.leaf(),C,N+.04,P,.15,.1,.9+O%3*.15,D+O*2.1);o.ball(wn.fruit(),C+.15,N+.06,P+.1,.05,.065,.05),o.ball(wn.fruit(),C-.12,N+.06,P-.08,.045,.06,.045)}else if(b==="tomato"){r.cyl(wn.stem(),C,N+.8,P,.022,1.6,6);for(let O=0;O<12;O++)ar(r,wn.leaf(),C,N+.25+O*.11,P,.24,.1,1.1,D+O*2.4);o.ball(wn.fruit(),C+.12,N+.9,P,.075),o.ball(wn.fruit(),C-.1,N+1.25,P+.05,.065),o.ball(wn.fruit(),C+.04,N+.62,P-.11,.06)}else if(b==="sunflower"){r.cyl(wn.stem(),C,N+.9,P,.03,1.8,6);for(let G=0;G<6;G++)ar(r,wn.leaf(),C,N+.35+G*.22,P,.28,.16,1,D+G*2.5);let O=new L(C,N+1.85,P);for(let G=0;G<16;G++){let B=G/16*Math.PI*2;ar(r,wn.petal(),O.x+Math.cos(B)*.1,O.y+Math.sin(B)*.1*.96,O.z+.03,.17,.06,0,0,-B+Math.PI/2*-1+Math.PI)}r.add(new Rt(.12,.12,.06,16),wn.seed(),C,O.y,P+.04,1,1,1,Math.PI/2)}}s.add(new Rt(.07,.07,v*2,8),cs.water(),0,ie+.88,w-.75,1,1,1,0,0,Math.PI/2)}),s.round(ue.wood(),a-3.2,ie+.35,-1.9,1,.6,.8),s.ball(ue.fruitRed(),a-3.35,ie+.72,-1.9,.14),s.ball(ue.potato(),a-3.05,ie+.72,-1.75,.13),s.ball(ue.fruitYellow(),a-3.1,ie+.72,-2.1,.12),s.box(ue.frame(),-a+2.4,ie+1.1,1.9,.5,2.2,1.2),s.build(n),r.build(n,{shadows:!1});let h=o.build(n,{shadows:!1}),d=Na(1,.7,160);d.mesh.position.set(-a+2.67,ie+1.6,1.9),d.mesh.rotation.y=Math.PI/2,n.add(d.mesh);let u=[];for(let w of[-1,1]){let S=new ze;S.position.set(0,ie+2.6,w*(a-1));let v=new Ze;v.cyl(ue.frame(),0,0,0,.15,.2,10,Math.PI/2);for(let b=0;b<4;b++)v.box(ue.shell(),Math.cos(b*Math.PI/2)*.35,Math.sin(b*Math.PI/2)*.35,0,.5,.12,.03,0,0,b*Math.PI/2);v.build(S,{shadows:!1}),n.add(S),u.push(S)}let p=new Ze;p.box(ue.frame(),0,ie+4.4,0,a*1.6,.1,.1),p.build(n);let f=new ze,x=new Ze;x.round(ue.shell(),0,0,0,.7,.4,.6),x.box(ue.trim(),0,-.1,.31,.5,.08,.02),x.cyl(ue.steel(),0,-.6,0,.05,.9,8),x.box(ue.lampCool(),0,.05,.31,.2,.08,.02),x.build(f);let g=new Ce(new yi(.14,.03,6,12,Math.PI),ue.steel());g.position.y=-1.05,g.rotation.z=Math.PI,f.add(g),f.position.set(0,ie+4.15,0),n.add(f);let m=new Pi(new zt().setAttribute("position",new je(new Float32Array(720),3)),new Zs({color:"#e6f6ff",size:.22,map:ju(),transparent:!0,opacity:.5,depthWrite:!1}));m.frustumCulled=!1,n.add(m);let y=Array.from({length:240},(w,S)=>[Math.sin(S*12.9)*(a-2.5),l[S%l.length]??0,S*.618%1]),M=[ci(n,"#ff7fdc",-a*.35,ie+3,0,9,16),ci(n,"#ff9fe6",a*.35,ie+3,0,9,16)];t||(En(e.spots,i,"harvest",a-3.2,-.9,1.8,{en:"Harvest the crops",bn:"\u09AB\u09B8\u09B2 \u09A4\u09CB\u09B2\u09CB"},"hold"),En(e.spots,i,"climate",-a+3.3,1.9,1.6,{en:"Climate control",bn:"\u0986\u09AC\u09B9\u09BE\u0993\u09AF\u09BC\u09BE \u09A8\u09BF\u09AF\u09BC\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3"}),e.anchors.leak.greenhouse=zi(i,0,-a+.3)),l.forEach(w=>{let S=Math.sqrt(Math.max(0,a*a-(Math.abs(w)+1.1)**2))-1.3;S>=1&&ed(e,i,0,w,S,.8)}),Xn(e.colliders,i,a-3.2,-1.9,.6),e.waypoints[i.id]=[[a-2,0],[0,0],[-a+3,.6]];let _=0;return{group:n,lights:M,animate(w,S,v){for(let T of u)T.rotation.z=w*6;f.position.x=Math.sin(w*.23)*(a*.7),g.position.y=-1.05+Math.max(0,Math.sin(w*1.3))*.25;for(let T of h)T.visible=v.crops>.65;let b=m.geometry.attributes.position,R=w%9<3;if(m.visible=R&&v.near,m.visible){for(let T=0;T<y.length;T++){let[C,P,N]=y[T],D=(w+N*3)%3/3;b.setXYZ(T,C+Math.sin(w+T)*.2,ie+1+D*1.4,P+Math.cos(w*.7+T)*.3)}b.needsUpdate=!0}if(_-=S,_<=0&&v.near){_=.5;let T=d.ctx,C=d.canvas.width,P=d.canvas.height;T.fillStyle="#132029",T.fillRect(0,0,C,P),T.fillStyle=v.mold?"#ff8a7a":"#7ef4e0",T.font="bold 22px system-ui",T.fillText(v.mold?"HUMIDITY HIGH!":"CLIMATE OK",10,30),T.fillStyle="#fff1d9",T.font="18px system-ui",T.fillText(`\u{1F321} 22\xB0C  \u{1F4A7} ${v.mold?92:60}%`,10,62),T.fillText(`\u{1F331} ${Math.round(v.crops*100)}% grown`,10,90),d.update()}}}}function ob(i,e){let t=Is(i),n=new Ze,s=[];for(let x of[-6.6,-3.9])for(let g=-5.2;g<=5.2;g+=2)n.round(ue.indigo(),g,ie+1.15,x,1.7,2.3,.85),n.box(ue.frame(),g,ie+2.35,x,1.75,.08,.9),s.push([g,x+.44]);let r=new Zn(new nn(1,1,1),new Jt({toneMapped:!1}),s.length*8),o=new At,a=0;for(let[x,g]of s)for(let m=0;m<8;m++)o.position.set(x,ie+.45+m*.22,g),o.scale.set(1.2,.14,.03),o.updateMatrix(),r.setMatrixAt(a++,o.matrix);t.add(r),n.box(ue.frame(),-3.5,ie+.3,5.4,2.6,.6,1.4);let l=new Ce(new Rt(1,1,.5,32),ue.steel());l.position.set(-3.5,ie+1.6,5.4),l.rotation.x=Math.PI/2,l.castShadow=!0;let c=new Ce(new nn(1.9,.1,.52),ue.trim());l.add(c),t.add(l),n.round(ue.shell(),3.6,ie+.5,5.6,2.8,1,1),n.box(ue.darkSteel(),3.6,ie+1.05,5.4,2.6,.08,.7,0,-.3),n.box(ue.frame(),1.8,ie+2.9,8.2,5.4,3,.2),n.box(ue.frame(),-6.75,ie+1.5,4.6,.2,2,2.4),n.build(t);let h=Na(5,2.6,320);h.mesh.position.set(1.8,ie+2.9,8.08),h.mesh.rotation.y=Math.PI,t.add(h.mesh);let d=[];for(let x=0;x<6;x++){let g=new Ce(new nn(.22,.32,.08),new tt({color:"#b6ffb0",emissive:"#52e05c",emissiveIntensity:2}));g.position.set(-6.6,ie+1.9-Math.floor(x/3)*.7,3.8+x%3*.8),t.add(g),d.push(g)}let u=[ci(t,"#dff8ff",0,ie+4.4,-3,12,20),ci(t,"#dff8ff",0,ie+4.4,4,12,20)];En(e.spots,i,"breakers",-5.5,4.6,1.8,{en:"Breaker panel",bn:"\u09AC\u09CD\u09B0\u09C7\u0995\u09BE\u09B0 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2"}),En(e.spots,i,"powerdesk",3.6,4.4,1.6,{en:"Power report",bn:"\u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09A4\u09C7\u09B0 \u0996\u09AC\u09B0"}),ed(e,i,-.2,-6.6,6,.5),ed(e,i,-.2,-3.9,6,.5),Xn(e.colliders,i,-3.5,5.4,1.4),Xn(e.colliders,i,3.6,5.6,1.3),e.anchors.leak.power=zi(i,0,-8.2),e.waypoints.power=[[5,0],[0,0],[3.6,4.2],[-4,-1.5]];let p=new Ne,f=0;return{group:t,lights:u,animate(x,g,m){l.rotation.y=x*(m.breakers?9:1);let y=m.tanks.power/100;for(let M=0;M<r.count;M++){let _=M%8,w=_/8<y,S=Math.max(0,1-Math.abs(x*1.5%1.6-_/8)*6)*(m.charging?1:0);p.set(m.breakers?w?y<.25?"#ff6b5b":y<.5?"#ffc34d":"#5ef08a":"#1d2b33":"#3a2a2a"),p.offsetHSL(0,0,S*.25),r.setColorAt(M,p)}r.instanceColor.needsUpdate=!0,d.forEach((M,_)=>{let w=m.surge&&(_%2===0||Math.sin(x*13+_)>.6);M.material.emissive.set(w?"#ff3b2f":"#52e05c")});for(let M of u)M.intensity=m.surge?4+Math.random()*18:12;if(f-=g,f<=0&&m.near){f=.25;let M=h.ctx,_=h.canvas.width,w=h.canvas.height;M.fillStyle="#0f1824",M.fillRect(0,0,_,w),M.font="bold 20px system-ui",M.fillStyle="#fff1d9",M.fillText("POWER FLOW",12,26);let S=[["\u2600\uFE0F Sun",50,70,m.rates.solar],["\u269B\uFE0F Reactor",50,130,m.rates.reactor],["\u{1F50B} Battery",160,100,m.tanks.power],["\u{1F3E0} Base",270,100,0]];M.font="15px system-ui";for(let[b,R,T,C]of S)M.fillStyle="#22344a",M.beginPath(),M.roundRect(R-40,T-18,80,36,8),M.fill(),M.fillStyle="#fff1d9",M.fillText(b,R-34,T-2),M.fillStyle="#7ef4e0",M.fillText(b.includes("Battery")?`${Math.round(C)}%`:b.includes("Base")?"using":`${C.toFixed(1)} kW`,R-34,T+14);let v=(b,R,T,C,P)=>{M.strokeStyle=P>.05?"#5ef0d6":"#33434f",M.lineWidth=4,M.setLineDash([10,8]),M.lineDashOffset=-x*40*Math.min(2,P),M.beginPath(),M.moveTo(b,R),M.lineTo(T,C),M.stroke(),M.setLineDash([])};v(90,70,120,95,m.rates.solar/10),v(90,130,120,105,m.rates.reactor/5),v(200,100,230,100,1),h.update()}}}}function ab(i,e){let t=Is(i),n=new Ze;n.round(ue.steel(),-4.2,ie+1.4,-6.6,2.2,2.8,2),n.box(ue.frame(),-4.2,ie+3,-6.6,1.2,.5,1.2),n.cyl(ue.shellShade(),-1.2,ie+1.3,-6.8,1,2.6,24),n.cyl(ue.lampWarm(),-1.2,ie+1.3,-5.79,.35,.06,16,Math.PI/2);for(let c=0;c<3;c++)n.cyl(ue.shell(),1.4+c*.9,ie+1.2,-7.3,.36,2.4,16);n.add(new Rt(.1,.1,9,8),cs.water(),.3,ie+2.9,-8,1,1,1,0,0,Math.PI/2),n.round(ue.indigo(),-3.6,ie+1.3,6.8,2.6,2.6,1.8),n.box(ue.lampWarm(),-3.6,ie+1.5,5.88,1.6,.8,.05),n.cyl(ue.glass(),.2,ie+1.3,7.1,.9,2.6,24);for(let c=0;c<3;c++)n.cyl(Qt("o2tank",()=>new tt({color:"#6fd17a",roughness:.4,metalness:.3})),3+c*1.1,ie+1.3,7.6,.45,2.6,18);n.add(new Rt(.1,.1,9,8),cs.oxygen(),.3,ie+2.9,8.2,1,1,1,0,0,Math.PI/2),n.build(t);let s=[];for(let c of[-3.4,-6.8]){let h=new Ce(new Rt(.85,.85,2.8,24,1,!0),ue.glass());h.position.set(4.9,ie+1.4,c),t.add(h);let d=new Ce(new Rt(.8,.8,1,24),ue.water());d.position.set(4.9,ie,c),t.add(d),s.push(d)}let r=new zt().setAttribute("position",new je(new Float32Array(270),3)),o=new Pi(r,new Zs({color:"#e8fbff",size:.12,map:ju(),transparent:!0,opacity:.85,depthWrite:!1}));o.frustumCulled=!1,t.add(o);let a=[];for(let c=0;c<3;c++){let h=new Ce(new Rt(.38,.38,.25,16),new tt({color:"#6fc1ff",emissive:"#2a7bbf",emissiveIntensity:1}));h.position.set(1.4+c*.9,ie+2.5,-7.3),t.add(h),a.push(h)}let l=[ci(t,"#bfe8ff",0,ie+4.4,-4,12,18),ci(t,"#ffe2c0",0,ie+4.4,4,12,18)];En(e.spots,i,"filter",2.3,-5.6,1.8,{en:"Water filters",bn:"\u09AA\u09BE\u09A8\u09BF\u09B0 \u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0"}),En(e.spots,i,"moxie",-3.6,5,1.6,{en:"Oxygen maker",bn:"\u0985\u0995\u09CD\u09B8\u09BF\u099C\u09C7\u09A8 \u09AF\u09A8\u09CD\u09A4\u09CD\u09B0"});for(let[c,h,d]of[[-4.2,-6.6,1.3],[-1.2,-6.8,1.1],[2.3,-7.3,1.3],[4.9,-3.4,.9],[4.9,-6.8,.9],[-3.6,6.8,1.4],[.2,7.1,1],[4.1,7.6,1.5]])Xn(e.colliders,i,c,h,d);return e.anchors.leak.life=zi(i,0,9.2),e.waypoints.life=[[5,0],[0,0],[2.3,-4.8],[-3.6,4.6]],{group:t,lights:l,animate(c,h,d){if(s.forEach((u,p)=>{let f=ct(d.tanks.water/100,.05,1)*2.6;u.scale.y=f+Math.sin(c*2+p)*.03,u.position.y=ie+.1+u.scale.y/2}),a.forEach((u,p)=>u.material.emissive.set(d.filterClog?Math.sin(c*6+p)>0?"#ff3b2f":"#5a2a1a":"#2a7bbf")),d.near){let u=r.attributes.position;for(let p=0;p<90;p++){let f=(c*.6+p*.137)%1;u.setXYZ(p,.2+Math.sin(p*7.1)*.6,ie+.2+f*2.3,7.1+Math.cos(p*3.3)*.6)}u.needsUpdate=!0}}}}function lb(i,e){let t=Is(i),n=new Ze;n.box(ue.hazard(),-1.5,ie+.02,-2.6,8,.02,.2),n.box(ue.hazard(),-1.5,ie+.02,2.6,8,.02,.2),n.box(ue.wood(),3.6,ie+.9,-7.4,4.2,.12,1.2),n.box(ue.frame(),3.6,ie+.45,-7.4,4,.9,1),n.box(ue.shellShade(),3.6,ie+2.4,-8.1,4.4,2,.08);for(let p=0;p<7;p++)n.box(ue.steel(),1.9+p*.55,ie+2.3+p%2*.3,-8,.08,.6,.06);for(let p=-6;p<=-1;p+=1.25)for(let f=0;f<3;f++)n.round(ue.wood(),p,ie+.42+f*.82,7.8,1.1,.75,.75);for(let p=0;p<3;p++)n.cyl(ue.rubber(),-6.2,ie+.3+p*.6,-6.8,.55,.45,18);n.round(ue.shell(),4.6,ie+1.2,6.3,2.4,2.4,2),n.box(ue.glass(),4.6,ie+1.5,5.25,2,1.6,.05),n.round(ue.shellShade(),-2.2,ie+.6,7,.8,1.2,.8),n.build(t);let s=new Ce(new nn(.3,.3,.3),ue.trim());s.position.set(4.6,ie+1.8,6.3),t.add(s);let r=new Ce(new Rt(.5,.5,1,20),ue.rubber());r.rotation.x=Math.PI/2,r.position.set(4.6,ie+.8,6.3),t.add(r);let o=new ze;o.position.set(.5,ie,6.6);let a=new ze,l=new ze,c=new Ze;c.cyl(ue.frame(),0,.2,0,.45,.4,16),c.build(o);let h=new Ze;h.round(ue.trim(),0,.8,0,.3,1.6,.3),h.build(a),a.position.y=.4,l.position.y=1.6;let d=new Ze;d.round(ue.shell(),0,.6,0,.25,1.2,.25),d.ball(ue.lampCool(),0,1.25,0,.12),d.build(l),a.add(l),o.add(a),t.add(o);let u=[ci(t,"#ffe2c0",0,ie+5.4,0,16,24)];En(e.spots,i,"printer",3.4,5,1.7,{en:"3D printer",bn:"\u09A5\u09CD\u09B0\u09BF\u09A1\u09BF \u09AA\u09CD\u09B0\u09BF\u09A8\u09CD\u099F\u09BE\u09B0"});for(let[p,f,x]of[[3.6,-7.4,1.4],[4.6,6.3,1.4],[.5,6.6,.6],[-6.2,-6.8,.6],[-3.5,7.8,1.6],[-2.2,7,.6]])Xn(e.colliders,i,p,f,x);return e.anchors.roverPark=zi(i,-1.5,0),e.anchors.roverDoor=zi(i,-i.hd-6,0),e.anchors.roverFacing=i.facing+Math.PI,e.anchors.leak.garage=zi(i,2,-8.3),e.waypoints.garage=[[6,0],[1,-2],[3.4,-5.8],[2,4.6]],{group:t,lights:u,animate(p){let f=p/30%1;r.scale.y=.05+f*.4,r.position.y=ie+.8,s.position.x=4.6+Math.sin(p*3)*.4,s.position.z=6.3+Math.cos(p*2.3)*.4,a.rotation.z=Math.sin(p*.7)*.5,l.rotation.z=Math.sin(p*1.1+1)*.8,o.rotation.y=Math.sin(p*.4)*1.2}}}function cb(i,e,t){let n=Is(i),s=new Ze,r=i.r;s.cyl(ue.frame(),0,ie+.45,0,.9,.9,24),s.cyl(ue.lampCool(),0,ie+.92,0,.7,.03,24);for(let v of[-1,1]){let b=v*Math.PI/2,[R,T]=Ft(b,r-.9);for(let C=0;C<3;C++)s.box(ue.wood(),R,ie+.6+C*.7,T,3.6,.06,.6,-b+Math.PI/2);s.box(ue.frame(),R,ie+1.3,T,3.7,2.6,.05,-b+Math.PI/2)}let[o,a]=Ft(1.15,r-1.6);s.box(ue.shell(),o,ie+.85,a,2,.08,1,-1.15+Math.PI/2),s.box(ue.frame(),o,ie+.42,a,1.8,.84,.9,-1.15+Math.PI/2),s.cyl(ue.darkSteel(),o,ie+1.25,a,.12,.7,10);let[l,c]=Ft(-1.95,r-1.6);s.box(ue.shell(),l,ie+.85,c,2,.08,1,1.95+Math.PI/2),s.box(ue.frame(),l,ie+.42,c,1.8,.84,.9,1.95+Math.PI/2),s.cyl(ue.steel(),l+.4,ie+1.4,c,.04,1.1,6);let[h,d]=Ft(-1,r-2.4);s.ball(ue.shellShade(),h,ie+.1,d,.55,.45,.55),s.build(n);let u=new Ce(new Dt(.85,48,24),new tt({map:t??null,color:t?"#ffffff":"#c1704f",roughness:.9,emissive:"#3a1a10",emissiveIntensity:.25}));u.position.set(0,ie+2,0),n.add(u);let p=new Ce(new yi(1.1,.025,6,48),ue.lampCool());p.position.copy(u.position),p.rotation.x=Math.PI/2.4,n.add(p);let f=Na(1.6,.9,256),[x,g]=Ft(Math.PI*.75,r-.5);f.mesh.position.set(x,ie+2,g),f.mesh.rotation.y=-Math.PI*.75-Math.PI/2,n.add(f.mesh);let m=new Zn(new si(.16,0),new tt({vertexColors:!1,color:"#ad765d",flatShading:!0}),30),y=new At,M=0;for(let v of[-1,1]){let b=v*Math.PI/2;for(let R=0;R<3;R++)for(let T=0;T<5;T++){let C=(T-2)*.65,[P,N]=Ft(b,r-.95);y.position.set(P+Math.cos(b+Math.PI/2)*C,ie+.75+R*.7,N+Math.sin(b+Math.PI/2)*C),y.rotation.set(T,R,T+R),y.updateMatrix(),m.setMatrixAt(M,y.matrix),m.setColorAt(M,new Ne().setHSL(.04+M%5*.015,.4,.35+M%3*.08)),M++}}n.add(m);let _=new Ce(new nn(.02,.4,.02),ue.trim());_.position.set(h,ie+.75,d),n.add(_);let w=[ci(n,"#d6f3ff",0,ie+4.6,0,12,18)];En(e.spots,i,"globe",1.6,0,2.2,{en:"Mars globe: travel",bn:"\u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u0997\u09CD\u09B2\u09CB\u09AC: \u09AD\u09CD\u09B0\u09AE\u09A3"}),En(e.spots,i,"radio",...Ft(-1.95,r-3),1.6,{en:"Call Earth",bn:"\u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u0995\u09C7 \u0995\u09B2 \u0995\u09B0\u09CB"}),En(e.spots,i,"microscope",...Ft(1.15,r-3),1.6,{en:"Microscope",bn:"\u0985\u09A3\u09C1\u09AC\u09C0\u0995\u09CD\u09B7\u09A3 \u09AF\u09A8\u09CD\u09A4\u09CD\u09B0"}),Xn(e.colliders,i,0,0,1),Xn(e.colliders,i,o,a,1),Xn(e.colliders,i,l,c,1),e.anchors.leak.lab=zi(i,...Ft(2.4,r-.3)),e.waypoints.lab=[[r-2,0],[-1.8,1.4],[...Ft(1.15,r-3)],[...Ft(-1.95,r-3)]];let S=0;return{group:n,lights:w,weather:f,animate(v,b,R){if(u.rotation.y=v*.25,p.rotation.z=v*.4,_.rotation.z=Math.sin(v*13)*.1*(.3+Math.sin(v*.7)**8),m.count=Math.min(30,R.samples),S-=b,S<=0&&R.near&&R.clock){S=1;let T=f.ctx,C=f.canvas.width,P=f.canvas.height;T.fillStyle="#0f1824",T.fillRect(0,0,C,P),T.fillStyle="#7ef4e0",T.font="bold 18px system-ui",T.fillText("REAL MARS TODAY",10,24),T.fillStyle="#fff1d9",T.font="15px system-ui",T.fillText(`Mars Year ${R.clock.marsYear} \xB7 Sol ${R.clock.sol}`,10,50),T.fillText(`Season: northern ${R.clock.northernSeason}`,10,72),T.fillText(`Earth is ${(R.earth.km/1e6).toFixed(0)} million km away`,10,94),T.fillText(`Radio takes ${R.earth.lightMinutes.toFixed(1)} minutes`,10,116),T.fillStyle=R.clock.dustSeason?"#ffb23a":"#9ad7a0",T.fillText(R.clock.dustSeason?"Dust storm season!":"Calm season",10,138),f.update()}}}}function hb(i,e){let t=Is(i),n=new Ze;n.cyl(ue.frame(),0,ie+.6,0,.8,1.2,16),n.build(t);let s=new ze;s.position.set(0,ie+1.6,0);let r=new Ce(new Rt(.45,.55,3.2,20),ue.shell());r.rotation.z=Math.PI/3,r.position.y=.6,s.add(r),t.add(s);let o=[ci(t,"#c9b8ff",0,ie+4,0,9,14)];return En(e.spots,i,"telescope",1.5,0,1.8,{en:"Telescope",bn:"\u09A6\u09C2\u09B0\u09AC\u09C0\u09A8"}),Xn(e.colliders,i,0,0,1),{group:t,lights:o,animate(a){s.rotation.y=a*.1}}}function ub(i,e){let t=Is(i),n=new Ze;n.cyl(ue.frame(),-2.5,ie+.35,2,2,.7,24);let s=["#ff6b6b","#ffd166","#06d6a0","#4cc9f0","#b07ad6"];for(let l=0;l<60;l++){let c=l*2.4,h=Math.sqrt(l/60)*1.7;n.ball(Qt(`ball-${l%5}`,()=>new tt({color:s[l%5],roughness:.5})),-2.5+Math.cos(c)*h,ie+.7+l%3*.12,2+Math.sin(c)*h,.17)}n.cyl(ue.wood(),2.6,ie+1.4,-2,.25,2.8,12),n.cyl(ue.fabricWarm(),2.6,ie+2.9,-2,1,.15,20),n.cyl(ue.fabric(),2.6,ie+1.6,-2,.8,.12,20),n.build(t);let r=new Ce(new Rt(1.4,1.4,.1,24),ue.indigo());r.position.set(1.5,ie+.6,3),t.add(r);let o=new Ce(new Dt(.3,14,10),ue.fabricWarm());t.add(o);let a=[ci(t,"#ffd6a8",0,ie+4,0,10,16)];return En(e.spots,i,"trampoline",1.5,3,1.6,{en:"Bounce!",bn:"\u09B2\u09BE\u09AB\u09BE\u0993!"}),Xn(e.colliders,i,-2.5,2,2),Xn(e.colliders,i,2.6,-2,1),{group:t,lights:a,animate(l){o.position.set(Math.cos(l*.8)*3.5,ie+.3,Math.sin(l*.8)*3.5-1),o.rotation.z=-l*2.5,r.scale.y=1+Math.sin(l*6)*.3}}}function km(i,e,{marsTexture:t}={}){let n={spots:[],colliders:[],segs:[],waypoints:{},anchors:{leak:{}}},s=[];for(let r of e){let o={hub:rb,greenhouse:zm,power:ob,life:ab,garage:lb,lab:cb,greenhouse2:(l,c)=>zm(l,c,!0),observatory:hb,playroom:ub}[r.type];if(!o)continue;let a=o(r,n,t);i.add(a.group),s.push({id:r.id,m:r,...a})}return{list:s,...n}}function Hm(i,e){for(let t of i)for(let n of t.lights)n.visible=t.id===e}function db(){let i=new ze,e=new Ze;e.box(_e.frame(),0,-.05,0,3.4,.08,2.2),e.build(i);let t=new Ce(new cn(3.3,2.1).rotateX(-Math.PI/2),_e.solarCell());return t.position.y=0,t.receiveShadow=!0,i.add(t),i}function Gm(i,e,t,{extraSpots:n,extraColliders:s}){let r=new ze;i.add(r);let o=[],a=n,l=s,c=[],h=[Ht.solarFarm,...t.includes("solar2")?[Ht.solarFarm2]:[]];for(let re of h){let X=new Ze;for(let Q=0;Q<re.cols;Q++)for(let K=0;K<re.rows;K++){let fe=ot(re.x0,re.x1,re.cols>1?Q/(re.cols-1):.5),he=ot(re.z0,re.z1,re.rows>1?K/(re.rows-1):.5),He=e(fe,he);X.cyl(_e.shellShade(),fe,He+.15,he,.45,.3,12),X.cyl(_e.frame(),fe,He+1.1,he,.12,1.8,8);let De=new ze;De.position.set(fe,He+2.05,he);let it=db();De.add(it),r.add(De),c.push({mount:De,pivot:it}),l.push({x:fe,z:he,r:.45})}for(let Q=0;Q<re.rows;Q++){let K=ot(re.z0,re.z1,re.rows>1?Q/(re.rows-1):.5);a.push({id:`panels-${a.filter(fe=>fe.id.startsWith("panels")).length}`,x:re.x0-2.2,z:K,r:2.2,verb:"hold",label:{en:"Brush the panels",bn:"\u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u09AC\u09CD\u09B0\u09BE\u09B6 \u0995\u09B0\u09CB"}})}X.build(r)}let d=ls("\u2600\uFE0F","SOLAR FARM","\u09B8\u09CB\u09B2\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0",4);d.position.set(Ht.solarFarm.x0-3,e(Ht.solarFarm.x0-3,-21)+2.6,-21),d.rotation.y=-Math.PI/2+.4,r.add(d);let u=new Ze;u.cyl(_e.frame(),Ht.solarFarm.x0-3,e(Ht.solarFarm.x0-3,-21)+1,-21,.08,2,8),u.build(r);let p=new Ze,f=re=>e(re,.6)+.12;for(let re=32.5;re<Ht.solarFarm.x0;re+=2)p.add(new Rt(.12,.12,2.02,6),cs.power(),re+1,f(re+1),.6,1,1,1,0,0,Math.PI/2);for(let re=Ht.solarFarm.z0;re<Ht.solarFarm.z1;re+=2)p.add(new Rt(.1,.1,2.02,6),cs.power(),Ht.solarFarm.x0-1,e(Ht.solarFarm.x0-1,re+1)+.1,re+1,1,1,1,Math.PI/2);p.build(r,{shadows:!1});let x=Ht.iceDrill,g=e(x.x,x.z),m=new Ze;for(let re=0;re<3;re++){let X=re/3*Je;m.box(_e.trim(),x.x+Math.cos(X)*1.4,g+3.2,x.z+Math.sin(X)*1.4,.22,6.6,.22,-X,0,.2)}m.round(_e.shell(),x.x,g+6.4,x.z,1.4,.9,1.4),m.round(_e.indigo(),x.x+2.6,g+.8,x.z+1.2,2.4,1.6,1.8),m.cyl(Qt("ice",()=>new tt({color:"#dff4ff",roughness:.25,emissive:"#6fb7d8",emissiveIntensity:.2})),x.x+2.8,g+.4,x.z-2.2,1.2,.8,10,0,0,0,.3),m.build(r);let y=new ze;y.position.set(x.x,g,x.z);let M=new Ze;M.cyl(_e.steel(),0,3.2,0,.16,6.2,10);for(let re=0;re<8;re++)M.box(_e.darkSteel(),0,.6+re*.7,0,.5,.06,.14,re*.8);M.build(y),r.add(y),l.push({x:x.x,z:x.z,r:1.8},{x:x.x+2.6,z:x.z+1.2,r:1.5}),a.push({id:"drill",x:x.x+2.6,z:x.z+3.4,r:2.2,verb:"tap",label:{en:"Ice drill",bn:"\u09AC\u09B0\u09AB \u09A1\u09CD\u09B0\u09BF\u09B2"}});let _=new L(x.x+3.5,g+1.2,x.z),w=new L(-36.5,e(-36.5,0)+1.4,0),S=new Ze,v=10;for(let re=0;re<v;re++){let X=_.clone().lerp(w,re/v),Q=_.clone().lerp(w,(re+1)/v),K=X.clone().add(Q).multiplyScalar(.5),fe=X.distanceTo(Q),he=Math.atan2(Q.z-X.z,Q.x-X.x);S.add(new Rt(.32,.32,fe,10,1,!0),_e.glass(),K.x,K.y,K.z,1,1,1,0,-he,Math.PI/2),S.box(_e.frame(),K.x,e(K.x,K.z)+(K.y-e(K.x,K.z))/2,K.z,.12,K.y-e(K.x,K.z),.12)}S.build(r,{shadows:!1});let b=new Zn(new si(.18,0),Qt("ice"),12);r.add(b);let R=Ht.comms,T=e(R.x,R.z),C=new Ze;for(let re=0;re<4;re++){let X=re/4*Je+Math.PI/4;C.box(_e.frame(),R.x+Math.cos(X)*1,T+8,R.z+Math.sin(X)*1,.14,16,.14,-X,0,0)}for(let re=1;re<16;re+=1.6)for(let X=0;X<4;X++){let Q=X/4*Je+Math.PI/4,K=Q+Math.PI/2,fe=R.x+Math.cos(Q)*1,he=R.z+Math.sin(Q)*1,He=R.x+Math.cos(K)*1,De=R.z+Math.sin(K)*1;C.box(_e.frame(),(fe+He)/2,T+re,(he+De)/2,Math.hypot(He-fe,De-he),.07,.07,-Math.atan2(De-he,He-fe))}C.round(_e.shell(),R.x+2.6,T+1.1,R.z,2.6,2.2,2.2),C.build(r);let P=new ze;P.position.set(R.x,T+16.3,R.z);let N=new ze;P.add(N);let D=new Ce(new Dt(2.4,32,12,0,Je,0,1),new tt({color:"#e7e1da",roughness:.45,metalness:.25,side:Sn}));D.rotation.x=-Math.PI/2,D.position.z=2,D.castShadow=!0,N.add(D);let O=new Ce(new Rt(.05,.05,2,6),_e.frame());O.rotation.x=Math.PI/2,O.position.z=.4,N.add(O),r.add(P);let G=un("#ff4b3a",2.4,.9);G.position.set(R.x,T+17.8,R.z),r.add(G),l.push({x:R.x,z:R.z,r:1.4},{x:R.x+2.6,z:R.z,r:1.5}),a.push({id:"dish",x:R.x+2.6,z:R.z+2.4,r:2.2,verb:"tap",label:{en:"Radio dish",bn:"\u09B0\u09C7\u09A1\u09BF\u0993 \u09A1\u09BF\u09B6"}});let B=Ht.landingPad,ee=e(B.x,B.z),F=new Ze;F.cyl(Qt("pad",()=>new tt({color:"#7d7a80",roughness:.85})),B.x,ee+.12,B.z,B.r,.3,48),F.cyl(_e.trim(),B.x,ee+.28,B.z,B.r*.55,.03,48),F.cyl(Qt("pad"),B.x,ee+.3,B.z,B.r*.5,.03,48);let V=B.x+3,q=B.z-2;F.cyl(_e.shell(),V,ee+3.6,q,1.6,3.6,20,0,0,0,.75),F.cyl(_e.indigo(),V,ee+5.7,q,.9,.8,18,0,0,0,.4),F.cyl(_e.darkSteel(),V,ee+1.5,q,1.2,.8,16,0,0,0,.7);for(let re=0;re<4;re++){let X=re/4*Je;F.box(_e.frame(),V+Math.cos(X)*1.9,ee+1.2,q+Math.sin(X)*1.9,.14,2.6,.14,-X,0,.45),F.cyl(_e.frame(),V+Math.cos(X)*2.5,ee+.1,q+Math.sin(X)*2.5,.4,.12,10)}F.build(r);let Se=[];for(let re=0;re<16;re++){let X=re/16*Je,Q=un("#ffcf8a",1,0);Q.position.set(B.x+Math.cos(X)*(B.r-.3),ee+.45,B.z+Math.sin(X)*(B.r-.3)),r.add(Q),Se.push(Q)}l.push({x:V,z:q,r:2.6}),a.push({id:"pad",x:B.x-2,z:B.z+2,r:3,verb:"tap",label:{en:"Landing pad",bn:"\u0985\u09AC\u09A4\u09B0\u09A3 \u09AA\u09CD\u09AF\u09BE\u09A1"}});let j=Ht.weather,W=e(j.x,j.z),oe=new Ze;oe.cyl(_e.frame(),j.x,W+1.6,j.z,.06,3.2,8),oe.round(_e.shell(),j.x,W+.4,j.z,.7,.8,.5),oe.box(_e.shell(),j.x,W+2.4,j.z,.8,.06,.06),oe.build(r);let ve=new ze;ve.position.set(j.x,W+3.25,j.z);for(let re=0;re<3;re++){let X=new Ce(new nn(.5,.03,.03),_e.frame());X.position.x=.25;let Q=new Ce(new Dt(.09,8,6,0,Math.PI),_e.trim());Q.position.set(.5,0,0);let K=new ze;K.rotation.y=re/3*Je,K.add(X,Q),ve.add(K)}r.add(ve),l.push({x:j.x,z:j.z,r:.5}),a.push({id:"weather",x:j.x+1.4,z:j.z+1,r:1.8,verb:"tap",label:{en:"Weather station",bn:"\u0986\u09AC\u09B9\u09BE\u0993\u09AF\u09BC\u09BE \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0"}});let Te=[];for(let[re,X,Q,K]of[[-11,11,-40,40],[-36,0,-48,8],[36,0,39,0],[0,37,0,50],[18,-30,20,-42]]){let fe=Math.max(1,Math.floor(Math.hypot(Q-re,K-X)/9));for(let he=0;he<=fe;he++){let He=he/fe,De=ot(re,Q,He)+1.8,it=ot(X,K,He)+1.8;Te.push([De,it])}}let ge=new Ze,Be=[];for(let[re,X]of Te){let Q=e(re,X);ge.cyl(_e.frame(),re,Q+1.6,X,.06,3.2,8),ge.box(_e.shell(),re,Q+3.25,X,.5,.14,.3);let K=un("#ffd9a0",2.2,0);K.position.set(re,Q+3.1,X),r.add(K),Be.push(K),l.push({x:re,z:X,r:.25})}ge.build(r);let ut={};t.includes("reactor")&&(ut.reactor=fb(r,e,l,a)),t.includes("fuel")&&(ut.fuel=pb(r,e,l,a)),t.includes("printer")&&(ut.printer=mb(r,e,l,a));let Oe=new At,rt=new L;return{group:r,panels:c,update(re,X,Q){let K=Q.sunDir,fe=K.y>.03&&Q.storm<.5,he=Math.atan2(K.x,K.z),He=fe?Math.PI/2-Math.asin(ct(K.y,0,1)):0;for(let Xe of c)Xe.mount.rotation.y=fe?ot(Xe.mount.rotation.y,he,.03):Xe.mount.rotation.y,Xe.pivot.rotation.x=ot(Xe.pivot.rotation.x,He*.85,.03);_e.solarCell().color.setRGB(1-Q.dust*.45,1-Q.dust*.55,1-Q.dust*.68);let De=!Q.drillJam;y.rotation.y+=X*(De?4:0),y.position.y=g-(De?Math.sin(re*.7)*.3+.3:0)+(Q.drillJam?Math.sin(re*40)*.03:0);for(let Xe=0;Xe<b.count;Xe++){let pt=De?(re*.05+Xe/b.count)%1:Xe/b.count;rt.copy(_).lerp(w,pt),Oe.position.copy(rt),Oe.rotation.set(Xe,re*(De?1:0),Xe*2),Oe.updateMatrix(),b.setMatrixAt(Xe,Oe.matrix)}b.instanceMatrix.needsUpdate=!0;let it=Q.earthDir;P.rotation.y=Math.atan2(it.x,it.z)+(Q.comms?Math.sin(re*.8)*.9:0),N.rotation.x=-Math.asin(ct(it.y,-.2,.9))+(Q.comms?.4:0),G.material.opacity=re%1.6<.5?.95:.1,Se.forEach((Xe,pt)=>{Xe.material.opacity=(Math.floor(re*8)%16===pt?1:.25)*(.3+Q.night*.7)}),ve.rotation.y+=X*(3+Q.storm*14+Math.sin(re*.3)*1.5);for(let Xe of Be)Xe.material.opacity=Q.night*.85;for(let Xe of Object.values(ut))Xe.update?.(re,X,Q)}}}function fb(i,e,t,n){let s=Ht.reactor,r=e(s.x,s.z),o=new Ze;o.cyl(_e.regolith(),s.x,r+.9,s.z,8.5,1.8,40,0,0,0,.92),o.cyl(_e.shellShade(),s.x,r+2.4,s.z,1.2,3.6,20),o.cyl(_e.trim(),s.x,r+4.3,s.z,1.25,.25,20),o.build(i);let a=new ze;a.position.set(s.x,r+3.4,s.z);let l=new tt({color:"#4a4e5c",roughness:.4,metalness:.5,emissive:"#ff5a2a",emissiveIntensity:.6});for(let h=0;h<8;h++){let d=new Ce(new nn(3.4,2.2,.06),l);d.position.set(Math.cos(h/8*Je)*2.9,0,Math.sin(h/8*Je)*2.9),d.rotation.y=-h/8*Je,a.add(d)}i.add(a);let c=ls("\u269B\uFE0F","FISSION POWER","\u09AA\u09BE\u09B0\u09AE\u09BE\u09A3\u09AC\u09BF\u0995 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE",3.4);return c.position.set(s.x-8,r+2.2,s.z),c.rotation.y=-Math.PI/2,i.add(c),t.push({x:s.x,z:s.z,r:8.6}),n.push({id:"reactor",x:s.x-10,z:s.z,r:2.5,verb:"tap",label:{en:"Fission power unit",bn:"\u09AA\u09BE\u09B0\u09AE\u09BE\u09A3\u09AC\u09BF\u0995 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u0987\u0989\u09A8\u09BF\u099F"}}),{update(h){l.emissiveIntensity=.5+Math.sin(h*1.4)*.2}}}function pb(i,e,t,n){let s=Ht.fuel,r=e(s.x,s.z),o=new Ze;for(let l=0;l<3;l++)o.cyl(Qt("fuelTank",()=>new tt({color:"#e9e6ee",roughness:.35,metalness:.4})),s.x+l*3,r+2.6,s.z,1.2,5.2,20);o.round(_e.indigo(),s.x+3,r+.8,s.z+3.4,7,1.6,2.2),o.build(i);let a=un("#f5fbff",3,0);return a.position.set(s.x+6,r+5.6,s.z),i.add(a),t.push({x:s.x+3,z:s.z,r:4.6}),n.push({id:"fuel",x:s.x+3,z:s.z+6,r:2.4,verb:"tap",label:{en:"Rocket fuel plant",bn:"\u09B0\u0995\u09C7\u099F \u099C\u09CD\u09AC\u09BE\u09B2\u09BE\u09A8\u09BF \u0995\u09BE\u09B0\u0996\u09BE\u09A8\u09BE"}}),{update(l){let c=l%7/7;a.material.opacity=c<.3?Math.sin(c/.3*Math.PI)*.6:0,a.position.y=r+5.6+c*3}}}function mb(i,e,t,n){let s=Ht.printer,r=e(s.x,s.z),o=new Ze;o.box(_e.frame(),s.x,r+3.5,s.z-3,.2,7,.2),o.box(_e.frame(),s.x,r+3.5,s.z+3,.2,7,.2),o.box(_e.frame(),s.x,r+7,s.z,.25,.25,6.2),o.build(i);let a=new Ce(new nn(1.2,1,5.6),_e.regolith());a.position.set(s.x+2.2,r,s.z),i.add(a);let l=new Ce(new Ii(.25,.6,10),_e.trim());return l.rotation.x=Math.PI,i.add(l),t.push({x:s.x+2.2,z:s.z,r:3}),n.push({id:"printerYard",x:s.x-2,z:s.z,r:2.2,verb:"tap",label:{en:"Brick printer",bn:"\u0987\u099F \u09AA\u09CD\u09B0\u09BF\u09A8\u09CD\u099F\u09BE\u09B0"}}),{update(c){let h=c/60%1*2.4+.2;a.scale.y=h,a.position.y=r+h/2,l.position.set(s.x+2.2,r+h+.4,s.z+Math.sin(c*1.5)*2.6)}}}function Vm(i){let e=new ze,t=new ze;e.add(t);let n=new Ze;n.ball(Ct.shell(),0,0,0,.42,.38,.4),n.cyl(Ct.trim(),0,-.05,0,.43,.06,24),n.cyl(Ct.frame(),0,.38,0,.03,.3,6);for(let g of[-1,1])n.ball(Ct.indigo(),g*.44,-.02,0,.09,.16,.16);n.build(t);let s=document.createElement("canvas");s.width=128,s.height=80;let r=s.getContext("2d"),o=new Gn(s);o.colorSpace=Wt;let a=new Ce(new Dt(.4,24,16,-.9+Math.PI,1.8,1.05,.95),new Jt({map:o,toneMapped:!1}));a.rotation.y=Math.PI,t.add(a);let l=un("#7ef4e0",.35,1);l.position.y=.56,t.add(l);let c=un("#8fdcff",.6,.7);c.position.y=-.42,t.add(c),i.add(e);let h=2,d="happy",u=0,p="";function f(g){let m=`${g}-${d}-${u>0?Math.floor(u*8)%2:0}`;if(m!==p){p=m,r.fillStyle="#1b2433",r.fillRect(0,0,128,80),r.fillStyle=d==="worried"?"#ffb23a":"#7ef4e0";for(let y of[42,86])r.beginPath(),g?r.fillRect(y-12,34,24,4):r.ellipse(y,36,9,d==="worried"?9:13,0,0,Je),r.fill();r.strokeStyle=r.fillStyle,r.lineWidth=4,r.beginPath(),u>0&&Math.floor(u*8)%2?r.ellipse(64,60,8,6,0,0,Je):d==="worried"?(r.moveTo(54,64),r.lineTo(74,62)):r.arc(64,52,12,.3,Math.PI-.3),r.stroke(),o.needsUpdate=!0}}f(!1);let x=new L;return{root:e,say(g=2.5){u=g},setMood(g){d=g},update(g,m,y,M,_){let w=y;e.position.x=Bt(e.position.x,w.x,3,g),e.position.z=Bt(e.position.z,w.z,3,g),e.position.y=Bt(e.position.y,w.y+(_?0:Math.sin(m*2.1)*.12),4,g),x.copy(M);let S=Math.atan2(x.x-e.position.x,x.z-e.position.z);e.rotation.y=Fi(e.rotation.y,S,5,g),t.rotation.z=_?0:Math.sin(m*1.3)*.08,t.position.y=u>0&&!_?Math.abs(Math.sin(m*14))*.04:0,u=Math.max(0,u-g),h-=g,h<0&&(h=2+Math.random()*3),f(h<.12),l.material.opacity=.5+.5*Math.abs(Math.sin(m*3)),c.scale.setScalar(.5+Math.sin(m*20)*.08)}}}var gb=["#6b8fb5","#b07ad6","#5fbf8a"],xb=()=>$p(Zc()).map((i,e)=>({...Jc(i),suit:"#e9dcd1",trim:gb[e]}));function vb(i,e){let t=i.find(r=>r.id==="hub"),n=new Map,s=new Map(to(i).map(r=>[r.to,r]));for(let r of i){let o=(e.waypoints[r.id]??[[0,0]]).map(([a,l])=>r.id==="hub"?[a,l]:as(r,a,l));n.set(r.id,o)}return{path(r,o){if(r===o)return[];let a=[],l=d=>[t.x+Math.cos(d)*6.2,t.z+Math.sin(d)*6.2],c=d=>{let u=s.get(d);return[u.end,[(u.start[0]+u.end[0])/2,(u.start[1]+u.end[1])/2],u.start,l(u.angle)]},h=null;if(r!=="hub"&&s.has(r)&&(a.push(...c(r)),h=s.get(r).angle),o!=="hub"&&s.has(o)){let d=s.get(o);h!==null&&Math.abs(rs(h,d.angle))>1.7&&a.push(l(h+rs(h,d.angle)/2)),a.push(l(d.angle),d.start,[(d.start[0]+d.end[0])/2,(d.start[1]+d.end[1])/2],d.end)}return a},spots:r=>n.get(r)??[[0,0]]}}function Wm(i,e,t,{onLeft:n}={}){let s=vb(e,t),r=e.map(d=>d.id).filter(d=>t.waypoints[d]),o=[-1.42,-1,-.6],a=o.map(d=>[Math.cos(d)*9.5,Math.sin(d)*9.5]),l=[],c=xb().map((d,u)=>{let p=$c(i,d);p.setHelmet(!1);let f=s.spots("hub")[u%s.spots("hub").length];p.rig.position.set(f[0],We,f[1]);let x=yb();return i.add(x),l.push(x),{name:d.name,kitty:p,at:"hub",path:[],goal:null,wait:2+u*3,heading:0,task:null,sleeping:!1,z:x}});function h(d,u){if(u==="shelter")return{module:"hub",point:t.anchors.shelter.map((m,y)=>m+[.6,-.6,.3][d.index??0]*(y?-1:1)),task:"shelter"};if(u==="sleep"){let m=c.indexOf(d);return{module:"hub",point:a[m],task:"sleep"}}if(u.startsWith("help:")){let m=u.slice(5);if(r.includes(m))return{module:m,point:s.spots(m)[0],task:"point"}}let p=r[Math.floor(Math.random()*r.length)],f=s.spots(p),x=f[Math.floor(Math.random()*f.length)],g=p==="hub"&&Math.random()<.3?"bike":"work";return{module:p,point:g==="bike"?t.anchors.bike:x,task:g}}return{members:c,update(d,u,p,f){c.forEach((x,g)=>{x.index=g;let m=p==="normal"?null:p;m&&x.mode!==m&&(x.path=[],x.goal=null,x.wait=Math.random()*1.5,x.mode=m),!m&&x.mode&&(x.mode=null,x.wait=Math.random()*3),x.sleeping=!1;let y=0,M=x.kitty.rig.position;if(x.path.length){let[v,b]=x.path[0],R=v-M.x,T=b-M.z,C=Math.hypot(R,T),P=m==="shelter"?3.4:1.9;if(C<.25)x.path.shift(),x.path.length||(x.arrived=!0);else{let N=Math.min(C,P*d);M.x+=R/C*N,M.z+=T/C*N,y=P,x.heading=Fi(x.heading,Math.atan2(-R,-T),9,d)}}else if(x.goal?.task==="sleep"&&x.arrived&&(x.sleeping=!0),x.wait-=d,x.wait<=0&&!(x.goal?.task==="sleep"&&m==="sleep")&&!(x.goal?.task==="shelter"&&m==="shelter")){let v=h(x,m??"normal");x.path=[...s.path(x.at,v.module),v.point],x.goal=v,x.arrived=!1,x.at=v.module,x.wait=v.task==="bike"?18:6+Math.random()*12}let _=x.sleeping,w=x.kitty.rig;if(w.rotation.order="YXZ",_){let v=o[g],b=[Math.sin(Math.PI-v),Math.cos(Math.PI-v)];w.rotation.set(Math.PI/2,Math.PI-v,0),w.position.set(a[g][0]-b[0]*.85,We+.85,a[g][1]-b[1]*.85)}else w.rotation.set(0,x.heading,0),w.position.y=0;let S=x.goal?.task==="bike"&&x.arrived&&!x.path.length;x.kitty.animate(d,S?1.2:y,_?0:We+(S?.35:0),x.goal?.task==="work"&&x.arrived?.5+Math.sin(u*2+g)*.3:0,f),x.z.visible=_,_&&(x.z.position.set(M.x,1.9+(u*.4+g*.3)%1*.8,M.z),x.z.material.opacity=1-(u*.4+g*.3)%1)})}}}function yb(){let i=document.createElement("canvas");i.width=64,i.height=64;let e=i.getContext("2d");e.fillStyle="#ffffff",e.font="bold 40px system-ui",e.fillText("z",20,46);let t=new Gn(i),n=new Ys(new vs({map:t,transparent:!0,depthWrite:!1}));return n.scale.setScalar(.5),n}function oh(){let i=new ze,e=new ze;i.add(e);let t=new Ze;t.round(Ct.shell(),0,1.25,0,2.2,.55,3.4),t.box(Ct.indigo(),0,1.58,.3,2,.08,2.4),t.box(Ct.solarCell(),0,1.64,.3,1.9,.02,2.3),t.round(Ct.trim(),0,1.05,-1.75,2,.25,.2),t.cyl(Ct.frame(),.7,2.1,-1.2,.06,1.2,8),t.round(Ct.shell(),.7,2.8,-1.25,.5,.32,.3),t.box(Ct.window(),.7,2.82,-1.42,.38,.14,.04),t.cyl(Ct.frame(),-.7,2,1.2,.03,1,6),t.ball(Ct.lampCool(),-.7,2.52,1.2,.06);for(let r of[-1,1])t.box(Ct.frame(),r*1.2,.95,-.6,.12,.12,2,0,.35),t.box(Ct.frame(),r*1.2,.95,.9,.12,.12,1.4,0,-.3);t.ball(Ct.glass(),0,1.75,-.7,.55,.45,.55),t.build(e);let n=[];for(let r of[-1,1])for(let o of[-1.4,0,1.4]){let a=new ze;a.position.set(r*1.35,.42,o);let l=new Ze;l.cyl(Ct.rubber(),0,0,0,.42,.34,18,0,0,Math.PI/2),l.cyl(Ct.steel(),r*.05,0,0,.22,.36,12,0,0,Math.PI/2);for(let c=0;c<6;c++)l.box(Ct.darkSteel(),0,Math.cos(c/6*Je)*.42,Math.sin(c/6*Je)*.42,.36,.06,.1,0,c/6*Je);l.build(a),i.add(a),n.push(a)}let s=[un("#fff1d0",1.6,0),un("#fff1d0",1.6,0)];return s[0].position.set(-.7,1.15,-1.9),s[1].position.set(.7,1.15,-1.9),e.add(...s),{root:i,chassis:e,wheels:n,lights:s}}function Xm(i,e,t,n,s){let r=Math.sin(n),o=Math.cos(n),a=(p,f)=>s(e+p*o+f*r,t-p*r+f*o),l=(a(-1.3,-1.4)+a(1.3,-1.4))/2,c=(a(-1.3,1.4)+a(1.3,1.4))/2,h=(a(-1.3,-1.4)+a(-1.3,1.4))/2,d=(a(1.3,-1.4)+a(1.3,1.4))/2;return{y:(l+c+h+d)/4,pitch:Math.atan2(l-c,2.8),roll:Math.atan2(h-d,2.6)}}function qm(i,e,t){let n=oh();i.add(n.root);let s={x:0,z:0,heading:0,speed:0,driving:!1,dust:0},r=0;return{model:n,state:s,park(o,a,l){Object.assign(s,{x:o,z:a,heading:l,speed:0}),this.place(0)},place(o){let a=Xm(n,s.x,s.z,s.heading,e);n.root.position.set(s.x,o?Bt(n.root.position.y,a.y,12,o):a.y,s.z),n.root.rotation.set(0,s.heading,0),n.chassis.rotation.x=o?Bt(n.chassis.rotation.x,-a.pitch,10,o):-a.pitch,n.chassis.rotation.z=o?Bt(n.chassis.rotation.z,a.roll,10,o):a.roll},drive(o,a,l,{maxSpeed:c=7.5,night:h=0,reduced:d=!1}={}){s.speed=Bt(s.speed,a*c,a?2.2:3.5,o),s.heading-=l*o*1.4*ct(Math.abs(s.speed)/3,.35,1)*Math.sign(s.speed||1);let u=s.x-Math.sin(s.heading)*s.speed*o,p=s.z-Math.cos(s.heading)*s.speed*o,f=t.resolve(u,p,1.7);Math.hypot(f.x-u,f.z-p)>.01&&(s.speed*=.6),s.x=f.x,s.z=f.z,this.place(o),r+=s.speed*o/.42;for(let x of n.wheels)x.rotation.x=-r;for(let x of n.lights)x.material.opacity=h*.9;return s.dust=d?0:ct(Math.abs(s.speed)/c,0,1),s},idle(o,a){s.speed=Bt(s.speed,0,4,o);for(let l of n.lights)l.material.opacity=a*.5}}}function $m(i,e,t){let n=oh();n.root.scale.setScalar(.75),i.add(n.root);let s=0,r=0,o=0,a=!1,l=t.map((h,d)=>Math.hypot(t[(d+1)%t.length][0]-h[0],t[(d+1)%t.length][1]-h[1])),c=l.reduce((h,d)=>h+d,0);return{model:n,get position(){return n.root.position},setStuck(h){a=h},update(h,d){a||(s=(s+h*3.2)%c);let u=s,p=0;for(;u>l[p];)u-=l[p],p++;let f=t[p],x=t[(p+1)%t.length],g=u/l[p],m=f[0]+(x[0]-f[0])*g,y=f[1]+(x[1]-f[1])*g;r=Fi(r,Math.atan2(-(x[0]-f[0]),-(x[1]-f[1])),3,h);let M=Xm(n,m,y,r,e);n.root.position.set(m,M.y,y),n.root.rotation.set(0,r,0),n.chassis.rotation.x=-M.pitch,n.chassis.rotation.z=a?.25:M.roll,o+=(a?.4:3.2)*h/.42;for(let _ of n.wheels)_.rotation.x=-o;for(let _ of n.lights)_.material.opacity=d*.8}}}function td(){let i=new ze,e=new Ze;e.round(Ct.shell(),0,0,0,.5,.4,.5),e.box(Ct.solarCell(),0,1.05,0,.7,.02,.45),e.cyl(Ct.frame(),0,.55,0,.04,1,8);for(let n=0;n<4;n++){let s=n/4*Je+Math.PI/4;e.box(Ct.frame(),Math.cos(s)*.4,-.45,Math.sin(s)*.4,.04,.8,.04,-s,0,.6)}e.box(Ct.window(),0,-.05,-.26,.16,.1,.02),e.build(i);let t=[];for(let[n,s]of[[.5,1],[.75,-1]]){let r=new ze;r.position.y=n;let o=new Ze;o.box(Ct.darkSteel(),0,0,0,2.4,.02,.16),o.build(r,{shadows:!1}),i.add(r),t.push({r,dir:s})}return{root:i,rotors:t}}function nd(i,e){let t=td();i.add(t.root);let n={x:0,y:6,z:0,heading:0,vx:0,vz:0,vy:0,battery:1,flying:!1,controlled:!1},s=0;return{model:t,state:n,patrol(r,o,a){let l=o*.13,c=a.x+Math.sin(l)*34,h=a.z+Math.sin(l*2)*22,d=e(c,h)+11+Math.sin(o*.5)*2;n.x=Bt(n.x,c,1.5,r),n.z=Bt(n.z,h,1.5,r),n.y=Bt(n.y,d,1.5,r),n.heading=Fi(n.heading,Math.atan2(-(c-n.x),-(h-n.z)),2,r),this.pose(r)},control(r,o,a,l,c){n.heading-=c*r*1.8;let h=Math.sin(n.heading),d=Math.cos(n.heading);n.vx=Bt(n.vx,(-h*o+d*a)*9,3,r),n.vz=Bt(n.vz,(-d*o-h*a)*9,3,r),n.vy=Bt(n.vy,l*4,3,r),n.x=ct(n.x+n.vx*r,-160,160),n.z=ct(n.z+n.vz*r,-160,160);let u=e(n.x,n.z);n.y=ct(n.y+n.vy*r,u+.8,u+30),n.battery=Math.max(0,n.battery-r/80),this.pose(r,o,a)},pose(r,o=0,a=0){t.root.position.set(n.x,n.y,n.z),t.root.rotation.set(-o*.18,n.heading,-a*.18),s+=r*40;for(let{r:l,dir:c}of t.rotors)l.rotation.y=s*c}}}function Ym(i,e=3){let t=Oi(e+9883),n=new zt,s=[],r=[];for(let l=0;l<900;l++)s.push(t()*100,t()**2*10,(t()-.5)*100),r.push(t());n.setAttribute("position",new je(s,3)),n.setAttribute("variation",new je(r,1));let o=new Et({transparent:!0,depthWrite:!1,uniforms:{elapsed:{value:0},storm:{value:0},pixel:{value:1},inside:{value:0},center:{value:new L}},vertexShader:`
      attribute float variation;
      uniform float elapsed, storm, pixel;
      uniform vec3 center;
      varying float alpha;
      void main() {
        vec3 p = position;
        p.x = mod(p.x + elapsed * mix(0.8, 11.0, storm) * (0.6 + variation * 0.7) - center.x, 100.0) - 50.0 + center.x;
        p.z = mod(p.z - center.z + 50.0, 100.0) - 50.0 + center.z;
        p.y += center.y + cos(p.x * 0.12 + elapsed * 0.3 + variation * 81.0) * 0.35;
        vec4 v = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * v;
        gl_PointSize = clamp((170.0 * variation + 22.0) / max(1.0, -v.z), 1.0, 42.0) * pixel;
        alpha = smoothstep(0.7 - storm * 0.68, 1.0, variation) * mix(0.12, 0.42, storm)
          * smoothstep(1.5, 4.5, -v.z) * (1.0 - smoothstep(26.0, 60.0, -v.z));
      }`,fragmentShader:`
      uniform float storm, inside;
      varying float alpha;
      void main() {
        vec2 uv = (gl_PointCoord - 0.5) * vec2(1.0, 2.2 + storm * 5.0);
        float falloff = 1.0 - smoothstep(0.04, 0.51, length(uv));
        gl_FragColor = vec4(mix(vec3(0.83,0.59,0.44), vec3(0.9,0.6,0.37), storm), falloff * alpha * (1.0 - inside));
        #include <colorspace_fragment>
      }`}),a=new Pi(n,o);return a.frustumCulled=!1,i.add(a),o.uniforms}function Zm(i,e,t=3,n=120,s=1){let r=Oi(s+31),o=[],a=new cn(1.6,1).rotateX(-Math.PI/2),l=new Jt({color:"#4a2e26",transparent:!0,opacity:.22,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),c=new Zn(a,l,400);c.count=0,c.frustumCulled=!1,i.add(c);let h=0,d=new At;for(let u=0;u<t;u++){let f=new zt,x=new Float32Array(420*3);for(let M=0;M<420;M++)x.set([r(),r(),r()],M*3);f.setAttribute("position",new je(new Float32Array(420*3),3)),f.setAttribute("seed",new je(x,3));let g=new Et({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},tall:{value:14+r()*10},pixel:{value:1},fade:{value:1}},vertexShader:`
        attribute vec3 seed;
        uniform float time, tall, pixel;
        varying float a;
        void main() {
          float h = fract(seed.x + time * 0.12) * tall;
          float r = 0.35 + h * 0.16 + seed.z * 0.6;
          float ang = seed.y * 6.283 + time * (5.0 - h * 0.12);
          vec3 p = vec3(cos(ang) * r, h, sin(ang) * r);
          vec4 v = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * v;
          gl_PointSize = clamp(260.0 / max(1.0, -v.z), 1.0, 60.0) * pixel;
          a = (1.0 - h / tall) * 0.5 * smoothstep(0.0, 1.5, h);
        }`,fragmentShader:`
        uniform float fade;
        varying float a;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          gl_FragColor = vec4(0.72, 0.5, 0.38, a * fade * (1.0 - smoothstep(0.2, 0.5, d)));
          #include <colorspace_fragment>
        }`}),m=new Pi(f,g);m.frustumCulled=!1,i.add(m);let y=r()*Je;o.push({pts:m,mat:g,x:Math.cos(y)*n*.6,z:Math.sin(y)*n*.6,heading:r()*Je,life:r()*60,stamp:0})}return{devils:o,update(u,p,{avoid:f=[],reduced:x=!1,pixel:g=1}={}){for(let m of o){m.life+=u,m.heading+=Math.sin(p*.3+m.life)*u*.5;let y=3.2;m.x+=Math.cos(m.heading)*y*u,m.z+=Math.sin(m.heading)*y*u,Math.hypot(m.x,m.z)>n&&(m.heading=Math.atan2(-m.z,-m.x)+(Math.random()-.5));for(let w of f)Math.hypot(m.x-w.x,m.z-w.z)<w.r&&(m.heading=Math.atan2(m.z-w.z,m.x-w.x));let M=e(m.x,m.z);m.pts.position.set(m.x,M,m.z),m.mat.uniforms.time.value=x?0:p+m.life,m.mat.uniforms.pixel.value=g;let _=m.life%70/70;m.mat.uniforms.fade.value=ct(Math.min(_*6,(1-_)*6),0,1),m.stamp+=u,m.stamp>.35&&m.mat.uniforms.fade.value>.3&&(m.stamp=0,d.position.set(m.x,M+.04,m.z),d.rotation.y=-m.heading,d.scale.set(1,1,1),d.updateMatrix(),c.setMatrixAt(h,d.matrix),h=(h+1)%400,c.count=Math.max(c.count,h),c.instanceMatrix.needsUpdate=!0)}},nearest(u,p){let f=null;for(let x of o){let g=Math.hypot(x.x-u,x.z-p);x.mat.uniforms.fade.value>.3&&(!f||g<f.dist)&&(f={dist:g,devil:x})}return f}}}function Jm(i,e=600){let t=new zt;t.setAttribute("position",new je(new Float32Array(e*3),3)),t.setAttribute("color",new je(new Float32Array(e*3),3)),t.setAttribute("alpha",new je(new Float32Array(e),1)),t.setAttribute("size",new je(new Float32Array(e),1));let n=new Et({transparent:!0,depthWrite:!1,vertexColors:!0,uniforms:{pixel:{value:1}},vertexShader:`
      attribute float alpha; attribute float size;
      uniform float pixel;
      varying float a; varying vec3 c;
      void main() {
        a = alpha; c = color;
        vec4 v = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * v;
        gl_PointSize = clamp(size * 300.0 / max(0.5, -v.z), 1.0, 80.0) * pixel;
      }`,fragmentShader:`
      varying float a; varying vec3 c;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        gl_FragColor = vec4(c, a * (1.0 - smoothstep(0.15, 0.5, d)));
        #include <colorspace_fragment>
      }`}),s=new Pi(t,n);s.frustumCulled=!1,i.add(s);let r=Array.from({length:e},()=>({life:0,max:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,g:0,size:.1,r:1,gg:1,b:1,grow:0})),o=0,a=new Ne;function l(c,h,d,{count:u=10,speed:p=2,up:f=1,gravity:x=-4,life:g=.8,size:m=.12,color:y="#ffd27a",spread:M=1,dir:_=null,grow:w=0}={}){a.set(y);for(let S=0;S<u;S++){let v=r[o];o=(o+1)%e;let b=Math.random()*Je,R=p*(.4+Math.random()*.6);v.x=c,v.y=h,v.z=d,_?(v.vx=_[0]*R+(Math.random()-.5)*M,v.vy=_[1]*R+(Math.random()-.5)*M,v.vz=_[2]*R+(Math.random()-.5)*M):(v.vx=Math.cos(b)*R*M,v.vz=Math.sin(b)*R*M,v.vy=f*R*(.5+Math.random())),v.g=x,v.life=v.max=g*(.6+Math.random()*.6),v.size=m*(.7+Math.random()*.6),v.grow=w,v.r=a.r,v.gg=a.g,v.b=a.b}}return{emit:l,update(c,h=1){n.uniforms.pixel.value=h;let d=t.attributes.position,u=t.attributes.alpha,p=t.attributes.color,f=t.attributes.size;for(let x=0;x<r.length;x++){let g=r[x];g.life>0&&(g.life-=c,g.vy+=g.g*c,g.x+=g.vx*c,g.y+=g.vy*c,g.z+=g.vz*c,g.size+=g.grow*c),d.setXYZ(x,g.x,g.y,g.z),u.setX(x,g.life>0?Math.min(1,g.life/g.max*1.5):0),p.setXYZ(x,g.r,g.gg,g.b),f.setX(x,g.size)}d.needsUpdate=u.needsUpdate=p.needsUpdate=f.needsUpdate=!0}}}function Km(i){let e=new ze,t=new Ce(new Rt(.9,1.3,2.6,16),new tt({color:"#e9ded2",roughness:.5,metalness:.2}));t.position.y=1.5;let n=new Ce(new Ii(.9,1,16),new tt({color:"#e3884c",roughness:.5}));n.position.y=3.3;let s=new Ce(new Ii(.6,3.2,14,1,!0),new Jt({color:"#ffb35a",transparent:!0,opacity:.85,blending:ts,depthWrite:!1}));s.rotation.x=Math.PI,s.position.y=-1.5;let r=un("#ffb35a",7,.9);return r.position.y=-1,e.add(t,n,s,r),e.visible=!1,i.add(e),{group:e,flame:s,light:r,crate:t}}var _b=["step-sand-1","step-sand-2","step-sand-3","step-sand-4","step-metal-1","step-metal-2","step-metal-3","step-metal-4","airlock","door","alarm","pickup","spark","thump","rocket","shutter","build","console","drill","hiss","wind-loop","hum-loop","water-loop","rover-loop","drone-loop"],Mb=["wind","hum","water","rover","drone"];function jm(i=new URL("./audio/world/",import.meta.url)){let e=null,t=null,n=null,s=!0,r=new Map,o={},a=-1,l=(f,x)=>{s&&globalThis.astroSound?.play(f,x)};async function c(f){try{let x=await fetch(new URL(`${f}.wav`,i));if(!x.ok)return;r.set(f,await e.decodeAudioData(await x.arrayBuffer())),f.endsWith("-loop")&&h(f.slice(0,-5))}catch{}}function h(f){let x=o[f];!x||x.source||!r.has(`${f}-loop`)||(x.source=e.createBufferSource(),x.source.buffer=r.get(`${f}-loop`),x.source.loop=!0,x.source.connect(x.gain),x.source.start())}function d(){if(e){e.state==="suspended"&&e.resume();return}let f=window.AudioContext||window.webkitAudioContext;if(f){e=new f,t=e.createGain(),t.gain.value=s?.9:0,t.connect(e.destination),n=e.createBiquadFilter(),n.type="lowpass",n.frequency.value=2400,n.connect(t);for(let x of Mb){let g=e.createGain();g.gain.value=0,g.connect(x==="wind"?n:t),o[x]={gain:g,source:null}}for(let x of _b)c(x)}}function u(f,{volume:x=1,rate:g=1,out:m=!1}={}){if(!e||!s)return;let y=r.get(f);if(!y)return;let M=e.createBufferSource(),_=e.createGain();M.buffer=y,M.playbackRate.value=g,_.gain.value=x,M.connect(_).connect(m?n:t),M.start()}let p=(f,x,g=.4)=>{e&&o[f]&&o[f].gain.gain.setTargetAtTime(x,e.currentTime,g)};return{unlock:d,setEnabled(f){s=f,t&&(t.gain.value=f?.9:0)},get enabled(){return s},ambience(f,x,g=0,m=0){e&&(p("wind",(.35+x*.9)*(1-f*.85)),p("hum",f*(.25+g*.5)),p("water",m*.5),n&&n.frequency.setTargetAtTime(f?9e3:2400,e.currentTime,.3))},vehicle(f,x){!e||!o[f]||(p(f,x>.01?.18+x*.5:0,.15),o[f].source&&o[f].source.playbackRate.setTargetAtTime(.7+x*.6,e.currentTime,.2))},step(f="sand"){let x=1+Math.floor(Math.random()*4);x===a&&(x=x%4+1),a=x,f==="metal"?u(`step-metal-${x}`,{volume:.5,rate:.95+Math.random()*.1}):u(`step-sand-${x}`,{volume:.7,rate:.9+Math.random()*.2,out:!0})},click(){u("console",{volume:.7})},console(){u("console",{volume:.7})},success(){l("success-warm-chime")},alarm(){u("alarm",{volume:.45})},spark(){u("spark",{volume:.8})},hiss(){u("hiss",{volume:.5})},thump(){u("thump",{volume:.8,rate:.9+Math.random()*.2})},rocket(){u("rocket",{volume:.9,out:!0})},door(){u("door",{volume:.7})},airlock(){u("airlock",{volume:.6})},pickup(){u("pickup",{volume:.6}),l("pop-bubble",{volume:.6})},shutter(){u("shutter",{volume:.8})},build(){u("build",{volume:.7})},drill(){u("drill",{volume:.6,out:!0})}}}function Qm(i,e){let t=new Set,n={move:[0,0],look:[0,0],act:!1,actPressed:!1,jump:!1,run:!1,zoom:0,up:0},s=new Map,r=null,o=[],a=u=>o.push(u);addEventListener("keydown",u=>{if(u.target.closest?.("input, textarea, select"))return;let p=u.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright"," "].includes(p)&&u.preventDefault(),!t.has(p)){(p==="e"||p==="enter")&&a("act"),p===" "&&a("jump");for(let[f,x]of[["m","map"],["b","build"],["p","photo"],["f","drone"],["r","rover"],["escape","menu"]])p===f&&a(x)}t.add(p)}),addEventListener("keyup",u=>t.delete(u.key.toLowerCase())),addEventListener("blur",()=>t.clear()),i.addEventListener("pointerdown",u=>{i.setPointerCapture(u.pointerId),s.set(u.pointerId,{x:u.clientX,y:u.clientY})}),i.addEventListener("pointermove",u=>{let p=s.get(u.pointerId);p&&(n.look[0]+=(u.clientX-p.x)*.006,n.look[1]+=(u.clientY-p.y)*.004,p.x=u.clientX,p.y=u.clientY)});for(let u of["pointerup","pointercancel"])i.addEventListener(u,p=>s.delete(p.pointerId));i.addEventListener("wheel",u=>{n.zoom+=Math.sign(u.deltaY),u.preventDefault()},{passive:!1});let l=e.querySelector("[data-stick]"),c=l?.querySelector("span");if(l){l.addEventListener("pointerdown",u=>{l.setPointerCapture(u.pointerId);let p=l.getBoundingClientRect();r={id:u.pointerId,cx:p.left+p.width/2,cy:p.top+p.height/2,r:p.width/2},h(u)}),l.addEventListener("pointermove",u=>{r?.id===u.pointerId&&h(u)});for(let u of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(u,()=>{r=null,n.stick=[0,0],c&&(c.style.transform="")})}function h(u){let p=(u.clientX-r.cx)/r.r,f=(u.clientY-r.cy)/r.r,x=Math.hypot(p,f);x>1&&(p/=x,f/=x),n.stick=[p,-f],c&&(c.style.transform=`translate(${p*34}px, ${f*34}px)`)}e.addEventListener("pointerdown",u=>{let p=u.target.closest("[data-press]");if(!p)return;u.preventDefault();let f=p.dataset.press;a(f),f==="act"&&(n.holdAct=!0),f==="jump"&&(n.holdJump=!0),f==="up"&&(n.holdUp=!0),f==="down"&&(n.holdDown=!0)});let d=()=>{n.holdAct=!1,n.holdJump=!1,n.holdUp=!1,n.holdDown=!1};return e.addEventListener("pointerup",d),e.addEventListener("pointercancel",d),{state:n,keys:t,take(){return o.splice(0)},poll(){let u=y=>t.has(y),p=(u("d")||u("arrowright")?1:0)-(u("a")||u("arrowleft")?1:0),f=(u("w")||u("arrowup")?1:0)-(u("s")||u("arrowdown")?1:0);n.stick&&(n.stick[0]||n.stick[1])&&([p,f]=n.stick),n.run=u("shift"),n.act=u("e")||u("enter")||!!n.holdAct,n.jump=u(" ")||!!n.holdJump,n.up=(u(" ")||n.holdUp?1:0)-(u("shift")||u("c")||n.holdDown?1:0);let x=navigator.getGamepads?.().find(y=>y);if(x){let y=M=>Math.abs(M)<.18?0:M;(y(x.axes[0])||y(x.axes[1]))&&(p=y(x.axes[0]),f=-y(x.axes[1])),n.look[0]+=y(x.axes[2]??0)*.05,n.look[1]+=y(x.axes[3]??0)*.03,x.buttons[0]?.pressed&&(n.act=!0),x.buttons[1]?.pressed&&(n.jump=!0),x.buttons[0]?.pressed&&!n.gpA&&a("act"),x.buttons[1]?.pressed&&!n.gpB&&a("jump"),x.buttons[3]?.pressed&&!n.gpY&&a("map"),x.buttons[2]?.pressed&&!n.gpX&&a("drone"),n.gpA=x.buttons[0]?.pressed,n.gpB=x.buttons[1]?.pressed,n.gpX=x.buttons[2]?.pressed,n.gpY=x.buttons[3]?.pressed}n.move=[p,f];let g=n.look.slice();n.look[0]=n.look[1]=0;let m=n.zoom;return n.zoom=0,{...n,look:g,zoom:m}}}}var Bi={en:{title:"Mars Colony",loading:"Building your Mars base\u2026",start:"Start the mission",continue:"Continue",power:"Power",water:"Water",oxygen:"Oxygen",food:"Food",metal:"Metal",ice:"Ice",science:"Science",sol:"Sol",day:"Day",night:"Night",inside:"inside",outside:"outside",build:"Build",map:"Travel",photo:"Photo",menu:"Menu",drone:"Drone",jump:"Jump",act:"Use",hold:"Hold",tap:"Tap",drive:"Drive the rover",leaveRover:"Get out",close:"Close",emergency:"Low supplies! The crew is in safe mode. Fix the problem and things will recover.",keys:"Move: WASD / arrows \xB7 Look: drag \xB7 Use: E \xB7 Jump: Space \xB7 Run: Shift \xB7 Map: M \xB7 Build: B \xB7 Photo: P",buildTitle:"Build and upgrade",buildIntro:"Bring metal, ice and science home from expeditions to build more.",built:"Built",buy:"Build it",cost:"Cost",notEnough:"Not enough yet",mapTitle:"Where shall we go?",mapIntro:"Pick a place on Mars. A hopper rocket will fly you there.",fly:"Fly there",home:"Fly home",here:"You are here",km:"km away",visited:"Visited",difficulty:"Challenge",objectives:"Mission",allDone:"All done! Fly home from the landing spot, or keep exploring.",reward:"Reward",wardrobeTitle:"Suit locker",wardrobeIntro:"Earn science to unlock new suits.",locked:"Locked",wear:"Wear",photoHint:"Drag to move the camera \xB7 Snap to save",snap:"Snap",postcard:"Postcard",saveImage:"Save picture",exitPhoto:"Back to the game",settings:"Settings",quality:"Graphics",low:"Fast",medium:"Nice",high:"Best",motion:"Less motion",realTime:"Use the real time on Mars",sound:"Sound",language:"\u09AC\u09BE\u0982\u09B2\u09BE",hubLink:"Mission Hub",hopper:"Hopper rocket",board:"Board the hopper",landed:"Touchdown!",droneBattery:"Drone battery",droneDone:"Drone battery low. Flying home!",droneReveal:"The drone spotted something!",collected:"Collected!",objectiveDone:"Objective complete!",siteDone:"Mission complete! Shabbash!",realNow:"Real Mars right now",marsYear:"Mars Year",season:"season",dustSeason:"Dust storm season",earthDelay:"Radio to Earth takes",minutes:"min",phobosJump:"Low gravity! Real Phobos jumps would last over 20 minutes."},bn:{title:"\u09AE\u0999\u09CD\u0997\u09B2 \u0995\u09B2\u09CB\u09A8\u09BF",loading:"\u09A4\u09CB\u09AE\u09BE\u09B0 \u09AE\u0999\u09CD\u0997\u09B2 \u0998\u09BE\u0981\u099F\u09BF \u09A4\u09C8\u09B0\u09BF \u09B9\u099A\u09CD\u099B\u09C7\u2026",start:"\u09AE\u09BF\u09B6\u09A8 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09CB",continue:"\u099A\u09BE\u09B2\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u0993",power:"\u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE",water:"\u09AA\u09BE\u09A8\u09BF",oxygen:"\u0985\u0995\u09CD\u09B8\u09BF\u099C\u09C7\u09A8",food:"\u0996\u09BE\u09AC\u09BE\u09B0",metal:"\u09A7\u09BE\u09A4\u09C1",ice:"\u09AC\u09B0\u09AB",science:"\u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8",sol:"\u09B8\u09B2",day:"\u09A6\u09BF\u09A8",night:"\u09B0\u09BE\u09A4",inside:"\u09AD\u09C7\u09A4\u09B0\u09C7",outside:"\u09AC\u09BE\u0987\u09B0\u09C7",build:"\u09A4\u09C8\u09B0\u09BF",map:"\u09AD\u09CD\u09B0\u09AE\u09A3",photo:"\u099B\u09AC\u09BF",menu:"\u09AE\u09C7\u09A8\u09C1",drone:"\u09A1\u09CD\u09B0\u09CB\u09A8",jump:"\u09B2\u09BE\u09AB",act:"\u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0",hold:"\u099A\u09C7\u09AA\u09C7 \u09A7\u09B0\u09CB",tap:"\u099A\u09BE\u09AA\u09CB",drive:"\u09B0\u09CB\u09AD\u09BE\u09B0 \u099A\u09BE\u09B2\u09BE\u0993",leaveRover:"\u09A8\u09C7\u09AE\u09C7 \u09AF\u09BE\u0993",close:"\u09AC\u09A8\u09CD\u09A7",emergency:"\u09B0\u09B8\u09A6 \u0995\u09AE! \u09A6\u09B2 \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6 \u09AE\u09CB\u09A1\u09C7 \u0986\u099B\u09C7\u0964 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09A0\u09BF\u0995 \u0995\u09B0\u09CB, \u09B8\u09AC \u0986\u09AC\u09BE\u09B0 \u09AD\u09BE\u09B2\u09CB \u09B9\u09AC\u09C7\u0964",keys:"\u099A\u09B2\u09BE: WASD / \u09A4\u09C0\u09B0 \xB7 \u09A6\u09C7\u0996\u09BE: \u099F\u09BE\u09A8\u09CB \xB7 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0: E \xB7 \u09B2\u09BE\u09AB: Space \xB7 \u09A6\u09CC\u09A1\u09BC: Shift \xB7 \u09AE\u09BE\u09A8\u099A\u09BF\u09A4\u09CD\u09B0: M \xB7 \u09A4\u09C8\u09B0\u09BF: B \xB7 \u099B\u09AC\u09BF: P",buildTitle:"\u09A4\u09C8\u09B0\u09BF \u0993 \u0989\u09A8\u09CD\u09A8\u09A4\u09BF",buildIntro:"\u0985\u09AD\u09BF\u09AF\u09BE\u09A8 \u09A5\u09C7\u0995\u09C7 \u09A7\u09BE\u09A4\u09C1, \u09AC\u09B0\u09AB \u0986\u09B0 \u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8 \u098F\u09A8\u09C7 \u0986\u09B0\u0993 \u0995\u09BF\u099B\u09C1 \u09AC\u09BE\u09A8\u09BE\u0993\u0964",built:"\u09A4\u09C8\u09B0\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7",buy:"\u09AC\u09BE\u09A8\u09BE\u0993",cost:"\u0996\u09B0\u099A",notEnough:"\u098F\u0996\u09A8\u09CB \u09AF\u09A5\u09C7\u09B7\u09CD\u099F \u09A8\u09C7\u0987",mapTitle:"\u0995\u09CB\u09A5\u09BE\u09AF\u09BC \u09AF\u09BE\u09AC\u09C7?",mapIntro:"\u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u098F\u0995\u099F\u09BE \u099C\u09BE\u09AF\u09BC\u0997\u09BE \u09AC\u09C7\u099B\u09C7 \u09A8\u09BE\u0993\u0964 \u098F\u0995\u099F\u09BE \u09B9\u09AA\u09BE\u09B0 \u09B0\u0995\u09C7\u099F \u09A4\u09CB\u09AE\u09BE\u0995\u09C7 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09AC\u09C7\u0964",fly:"\u0989\u09A1\u09BC\u09C7 \u09AF\u09BE\u0993",home:"\u09AC\u09BE\u09A1\u09BC\u09BF \u09AB\u09C7\u09B0\u09CB",here:"\u09A4\u09C1\u09AE\u09BF \u098F\u0996\u09BE\u09A8\u09C7",km:"\u0995\u09BF\u09AE\u09BF \u09A6\u09C2\u09B0\u09C7",visited:"\u0998\u09C1\u09B0\u09C7 \u098F\u09B8\u09C7\u099B",difficulty:"\u099A\u09CD\u09AF\u09BE\u09B2\u09C7\u099E\u09CD\u099C",objectives:"\u09AE\u09BF\u09B6\u09A8",allDone:"\u09B8\u09AC \u09B6\u09C7\u09B7! \u0985\u09AC\u09A4\u09B0\u09A3\u09C7\u09B0 \u099C\u09BE\u09AF\u09BC\u0997\u09BE \u09A5\u09C7\u0995\u09C7 \u09AC\u09BE\u09A1\u09BC\u09BF \u09AB\u09C7\u09B0\u09CB, \u09AC\u09BE \u0986\u09B0\u0993 \u0998\u09C1\u09B0\u09C7 \u09A6\u09C7\u0996\u09CB\u0964",reward:"\u09AA\u09C1\u09B0\u09B8\u09CD\u0995\u09BE\u09B0",wardrobeTitle:"\u09B8\u09CD\u09AF\u09C1\u099F \u09B2\u0995\u09BE\u09B0",wardrobeIntro:"\u09A8\u09A4\u09C1\u09A8 \u09B8\u09CD\u09AF\u09C1\u099F \u0996\u09C1\u09B2\u09A4\u09C7 \u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8 \u09AA\u09AF\u09BC\u09C7\u09A8\u09CD\u099F \u099C\u09C7\u09A4\u09CB\u0964",locked:"\u09AC\u09A8\u09CD\u09A7",wear:"\u09AA\u09B0\u09CB",photoHint:"\u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE \u09B8\u09B0\u09BE\u09A4\u09C7 \u099F\u09BE\u09A8\u09CB \xB7 \u09B8\u09C7\u09AD \u0995\u09B0\u09A4\u09C7 \u09B8\u09CD\u09A8\u09CD\u09AF\u09BE\u09AA",snap:"\u09B8\u09CD\u09A8\u09CD\u09AF\u09BE\u09AA",postcard:"\u09AA\u09CB\u09B8\u09CD\u099F\u0995\u09BE\u09B0\u09CD\u09A1",saveImage:"\u099B\u09AC\u09BF \u09B8\u09C7\u09AD \u0995\u09B0\u09CB",exitPhoto:"\u0996\u09C7\u09B2\u09BE\u09AF\u09BC \u09AB\u09C7\u09B0\u09CB",settings:"\u09B8\u09C7\u099F\u09BF\u0982\u09B8",quality:"\u0997\u09CD\u09B0\u09BE\u09AB\u09BF\u0995\u09CD\u09B8",low:"\u09A6\u09CD\u09B0\u09C1\u09A4",medium:"\u09B8\u09C1\u09A8\u09CD\u09A6\u09B0",high:"\u09B8\u09C7\u09B0\u09BE",motion:"\u0995\u09AE \u09A8\u09A1\u09BC\u09BE\u099A\u09A1\u09BC\u09BE",realTime:"\u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u0986\u09B8\u09B2 \u09B8\u09AE\u09AF\u09BC \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09CB",sound:"\u09B6\u09AC\u09CD\u09A6",language:"English",hubLink:"\u09AE\u09BF\u09B6\u09A8 \u09B9\u09BE\u09AC",hopper:"\u09B9\u09AA\u09BE\u09B0 \u09B0\u0995\u09C7\u099F",board:"\u09B9\u09AA\u09BE\u09B0\u09C7 \u0993\u09A0\u09CB",landed:"\u0985\u09AC\u09A4\u09B0\u09A3!",droneBattery:"\u09A1\u09CD\u09B0\u09CB\u09A8\u09C7\u09B0 \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09BF",droneDone:"\u09A1\u09CD\u09B0\u09CB\u09A8\u09C7\u09B0 \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09BF \u0995\u09AE\u0964 \u09AC\u09BE\u09A1\u09BC\u09BF \u09AB\u09BF\u09B0\u099B\u09C7!",droneReveal:"\u09A1\u09CD\u09B0\u09CB\u09A8 \u0995\u09BF\u099B\u09C1 \u098F\u0995\u099F\u09BE \u09A6\u09C7\u0996\u09C7\u099B\u09C7!",collected:"\u09B8\u0982\u0997\u09CD\u09B0\u09B9 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7!",objectiveDone:"\u09B2\u0995\u09CD\u09B7\u09CD\u09AF \u09AA\u09C2\u09B0\u09A3!",siteDone:"\u09AE\u09BF\u09B6\u09A8 \u09B8\u09AB\u09B2! \u09B6\u09BE\u09AC\u09BE\u09B6!",realNow:"\u098F\u0996\u09A8 \u0986\u09B8\u09B2 \u09AE\u0999\u09CD\u0997\u09B2\u09C7",marsYear:"\u09AE\u0999\u09CD\u0997\u09B2 \u09AC\u099B\u09B0",season:"\u098B\u09A4\u09C1",dustSeason:"\u09A7\u09C1\u09B2\u09BF\u099D\u09A1\u09BC\u09C7\u09B0 \u09AE\u09CC\u09B8\u09C1\u09AE",earthDelay:"\u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u09A4\u09C7 \u09B0\u09C7\u09A1\u09BF\u0993 \u09AF\u09C7\u09A4\u09C7 \u09B2\u09BE\u0997\u09C7",minutes:"\u09AE\u09BF\u09A8\u09BF\u099F",phobosJump:"\u0995\u09AE \u09AE\u09BE\u09A7\u09CD\u09AF\u09BE\u0995\u09B0\u09CD\u09B7\u09A3! \u09AB\u09CB\u09AC\u09CB\u09B8\u09C7 \u0986\u09B8\u09B2 \u09B2\u09BE\u09AB \u09E8\u09E6 \u09AE\u09BF\u09A8\u09BF\u099F\u09C7\u09B0 \u09AC\u09C7\u09B6\u09BF \u099A\u09B2\u09A4\u0964"}},lr={dustStorm:{icon:"\u{1F32A}\uFE0F",en:["Dust storm coming!","The sky will go dark and the solar panels will make less power. Stay safe, and brush the panels clean when it passes."],bn:["\u09A7\u09C1\u09B2\u09BF\u099D\u09A1\u09BC \u0986\u09B8\u099B\u09C7!","\u0986\u0995\u09BE\u09B6 \u0985\u09A8\u09CD\u09A7\u0995\u09BE\u09B0 \u09B9\u09AC\u09C7 \u0986\u09B0 \u09B8\u09CB\u09B2\u09BE\u09B0 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u0995\u09AE \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u09AC\u09BE\u09A8\u09BE\u09AC\u09C7\u0964 \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6\u09C7 \u09A5\u09BE\u0995\u09CB, \u099D\u09A1\u09BC \u09A5\u09BE\u09AE\u09B2\u09C7 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u09AC\u09CD\u09B0\u09BE\u09B6 \u0995\u09B0\u09C7 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0995\u09B0\u09CB\u0964"]},dustStormCleanup:{icon:"\u{1F9F9}",en:["Panels are dusty","The storm is over! Go out to the solar farm and brush the panels."],bn:["\u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2\u09C7 \u09A7\u09C1\u09B2\u09CB","\u099D\u09A1\u09BC \u09A5\u09C7\u09AE\u09C7\u099B\u09C7! \u09B8\u09CB\u09B2\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u09AC\u09CD\u09B0\u09BE\u09B6 \u0995\u09B0\u09CB\u0964"]},leak:{icon:"\u{1F4A8}",en:["Air leak!","A tiny space rock made a hole. Follow the hissing and patch it before the oxygen runs low."],bn:["\u09AC\u09BE\u09A4\u09BE\u09B8 \u09B2\u09BF\u0995!","\u098F\u0995\u099F\u09BE \u099B\u09CB\u099F\u09CD\u099F \u09AE\u09B9\u09BE\u0995\u09BE\u09B6-\u09AA\u09BE\u09A5\u09B0 \u09AB\u09C1\u099F\u09CB \u0995\u09B0\u09C7\u099B\u09C7\u0964 \u09B9\u09BF\u09B8\u09B9\u09BF\u09B8 \u09B6\u09AC\u09CD\u09A6 \u09A7\u09B0\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u0985\u0995\u09CD\u09B8\u09BF\u099C\u09C7\u09A8 \u0995\u09AE\u09BE\u09B0 \u0986\u0997\u09C7 \u099C\u09CB\u09A1\u09BC\u09BE \u09B2\u09BE\u0997\u09BE\u0993\u0964"]},mold:{icon:"\u{1F344}",en:["Mold on the plants!","It is too damp in the greenhouse. Fix the humidity at the climate panel. (This really happened to flowers on the space station!)"],bn:["\u0997\u09BE\u099B\u09C7 \u099B\u09A4\u09CD\u09B0\u09BE\u0995!","\u0997\u09CD\u09B0\u09BF\u09A8\u09B9\u09BE\u0989\u09B8\u09C7 \u09AC\u09C7\u09B6\u09BF \u09B8\u09CD\u09AF\u09BE\u0981\u09A4\u09B8\u09C7\u0981\u09A4\u09C7\u0964 \u0986\u09AC\u09B9\u09BE\u0993\u09AF\u09BC\u09BE \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2\u09C7 \u0986\u09B0\u09CD\u09A6\u09CD\u09B0\u09A4\u09BE \u09A0\u09BF\u0995 \u0995\u09B0\u09CB\u0964 (\u09AE\u09B9\u09BE\u0995\u09BE\u09B6 \u09B8\u09CD\u099F\u09C7\u09B6\u09A8\u09C7\u09B0 \u09AB\u09C1\u09B2\u09C7 \u09B8\u09A4\u09CD\u09AF\u09BF\u0987 \u098F\u09AE\u09A8 \u09B9\u09AF\u09BC\u09C7\u099B\u09BF\u09B2!)"]},solarFlare:{icon:"\u2600\uFE0F",en:["Solar flare!","The Sun sent out a burst of radiation. Everyone into the storm shelter in the habitat: its water walls keep you safe."],bn:["\u09B8\u09CC\u09B0\u09B6\u09BF\u0996\u09BE!","\u09B8\u09C2\u09B0\u09CD\u09AF \u09A5\u09C7\u0995\u09C7 \u09AC\u09BF\u0995\u09BF\u09B0\u09A3 \u0986\u09B8\u099B\u09C7\u0964 \u09B8\u09AC\u09BE\u0987 \u09AC\u09BE\u09B8\u09B8\u09CD\u09A5\u09BE\u09A8\u09C7\u09B0 \u099D\u09A1\u09BC\u09C7\u09B0 \u0986\u09B6\u09CD\u09B0\u09AF\u09BC\u09C7 \u099A\u09B2\u09CB: \u098F\u09B0 \u09AA\u09BE\u09A8\u09BF\u09B0 \u09A6\u09C7\u09AF\u09BC\u09BE\u09B2 \u09A4\u09CB\u09AE\u09BE\u0995\u09C7 \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6 \u09B0\u09BE\u0996\u09AC\u09C7\u0964"]},filterClog:{icon:"\u{1F6B0}",en:["Water filter clogged!","Mars dust got into the water plant. Tap the filters to shake them clean."],bn:["\u09AA\u09BE\u09A8\u09BF\u09B0 \u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0 \u0986\u099F\u0995\u09C7 \u0997\u09C7\u099B\u09C7!","\u09AA\u09BE\u09A8\u09BF\u09B0 \u0995\u09BE\u09B0\u0996\u09BE\u09A8\u09BE\u09AF\u09BC \u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u09A7\u09C1\u09B2\u09CB \u09A2\u09C1\u0995\u09C7\u099B\u09C7\u0964 \u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0\u0997\u09C1\u09B2\u09CB \u099A\u09C7\u09AA\u09C7 \u099A\u09C7\u09AA\u09C7 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0995\u09B0\u09CB\u0964"]},drillJam:{icon:"\u{1F9CA}",en:["Ice drill jammed!","The drill hit a hard rock. Go outside and restart it at just the right moment."],bn:["\u09AC\u09B0\u09AB \u09A1\u09CD\u09B0\u09BF\u09B2 \u0986\u099F\u0995\u09C7 \u0997\u09C7\u099B\u09C7!","\u09A1\u09CD\u09B0\u09BF\u09B2 \u09B6\u0995\u09CD\u09A4 \u09AA\u09BE\u09A5\u09B0\u09C7 \u09B2\u09C7\u0997\u09C7\u099B\u09C7\u0964 \u09AC\u09BE\u0987\u09B0\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u09A0\u09BF\u0995 \u09B8\u09AE\u09AF\u09BC\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u09CB\u0964"]},powerSurge:{icon:"\u26A1",en:["Power surge!","The breakers tripped. Switch them back on in the right order in the power plant."],bn:["\u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09A4\u09C7\u09B0 \u099D\u09BE\u0981\u0995\u09C1\u09A8\u09BF!","\u09AC\u09CD\u09B0\u09C7\u0995\u09BE\u09B0 \u09AA\u09A1\u09BC\u09C7 \u0997\u09C7\u099B\u09C7\u0964 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE\u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u09A0\u09BF\u0995 \u0995\u09CD\u09B0\u09AE\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u09CB\u0964"]},comms:{icon:"\u{1F4E1}",en:["Lost contact with Earth!","The radio dish slipped. Turn it until the signal is strong again."],bn:["\u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u09A8\u09C7\u0987!","\u09B0\u09C7\u09A1\u09BF\u0993 \u09A1\u09BF\u09B6 \u09B8\u09B0\u09C7 \u0997\u09C7\u099B\u09C7\u0964 \u09B8\u09BF\u0997\u09A8\u09CD\u09AF\u09BE\u09B2 \u09B6\u0995\u09CD\u09A4 \u09A8\u09BE \u09B9\u0993\u09AF\u09BC\u09BE \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u0998\u09CB\u09B0\u09BE\u0993\u0964"]},coldSnap:{icon:"\u{1F976}",en:["Cold snap!","Tonight is extra cold, so the heaters need more power. Keep an eye on the battery."],bn:["\u09B9\u09A0\u09BE\u09CE \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE!","\u0986\u099C \u09B0\u09BE\u09A4 \u0996\u09C1\u09AC \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE, \u09A4\u09BE\u0987 \u09B9\u09BF\u099F\u09BE\u09B0\u09C7 \u09AC\u09C7\u09B6\u09BF \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u09B2\u09BE\u0997\u09AC\u09C7\u0964 \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09BF\u09B0 \u09A6\u09BF\u0995\u09C7 \u09A8\u099C\u09B0 \u09B0\u09BE\u0996\u09CB\u0964"]},roverStuck:{icon:"\u{1F6DE}",en:["Patrol rover stuck!","Our robot rover got stuck in soft sand. Go and give it a push."],bn:["\u099F\u09B9\u09B2 \u09B0\u09CB\u09AD\u09BE\u09B0 \u0986\u099F\u0995\u09C7 \u0997\u09C7\u099B\u09C7!","\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B0\u09CB\u09AC\u099F \u09B0\u09CB\u09AD\u09BE\u09B0 \u09A8\u09B0\u09AE \u09AC\u09BE\u09B2\u09BF\u09A4\u09C7 \u0986\u099F\u0995\u09C7 \u0997\u09C7\u099B\u09C7\u0964 \u0997\u09BF\u09AF\u09BC\u09C7 \u098F\u0995\u099F\u09C1 \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u09A6\u09BE\u0993\u0964"]},supplyDrop:{icon:"\u{1F4E6}",en:["Supplies from Earth!","A cargo rocket is landing. Go and collect the crate."],bn:["\u09AA\u09C3\u09A5\u09BF\u09AC\u09C0 \u09A5\u09C7\u0995\u09C7 \u09B0\u09B8\u09A6!","\u098F\u0995\u099F\u09BE \u09AE\u09BE\u09B2\u09AC\u09BE\u09B9\u09C0 \u09B0\u0995\u09C7\u099F \u09A8\u09BE\u09AE\u099B\u09C7\u0964 \u0997\u09BF\u09AF\u09BC\u09C7 \u09AC\u09BE\u0995\u09CD\u09B8\u099F\u09BE \u09A8\u09BF\u09AF\u09BC\u09C7 \u098F\u09B8\u09CB\u0964"]},dustDevilClean:{icon:"\u{1F300}",en:["Lucky gust!","A dust devil swept over the solar farm and blew the panels clean! This really helped NASA's Spirit and Opportunity rovers."],bn:["\u09AD\u09BE\u0997\u09CD\u09AF\u09AC\u09BE\u09A8 \u09A6\u09AE\u0995\u09BE \u09B9\u09BE\u0993\u09AF\u09BC\u09BE!","\u098F\u0995\u099F\u09BE \u09A7\u09C1\u09B2\u09CB\u09B0 \u0998\u09C2\u09B0\u09CD\u09A3\u09BF \u09B8\u09CB\u09B2\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0\u09C7\u09B0 \u0993\u09AA\u09B0 \u09A6\u09BF\u09AF\u09BC\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0995\u09B0\u09C7 \u09A6\u09BF\u09AF\u09BC\u09C7\u099B\u09C7! \u09A8\u09BE\u09B8\u09BE\u09B0 \u09B8\u09CD\u09AA\u09BF\u09B0\u09BF\u099F \u0986\u09B0 \u0985\u09AA\u09B0\u099A\u09C1\u09A8\u09BF\u099F\u09BF \u09B0\u09CB\u09AD\u09BE\u09B0 \u09B8\u09A4\u09CD\u09AF\u09BF\u0987 \u098F\u09AD\u09BE\u09AC\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u09AA\u09C7\u09AF\u09BC\u09C7\u099B\u09BF\u09B2\u0964"]},meteorite:{icon:"\u2604\uFE0F",en:["Shooting star!","A meteorite landed near the base. Go and find it: it is full of useful metal."],bn:["\u0989\u09B2\u09CD\u0995\u09BE!","\u0998\u09BE\u0981\u099F\u09BF\u09B0 \u0995\u09BE\u099B\u09C7 \u098F\u0995\u099F\u09BE \u0989\u09B2\u09CD\u0995\u09BE\u09AA\u09BF\u09A3\u09CD\u09A1 \u09AA\u09A1\u09BC\u09C7\u099B\u09C7\u0964 \u0996\u09C1\u0981\u099C\u09C7 \u0986\u09A8\u09CB: \u098F\u09A4\u09C7 \u0985\u09A8\u09C7\u0995 \u0995\u09BE\u099C\u09C7\u09B0 \u09A7\u09BE\u09A4\u09C1 \u0986\u099B\u09C7\u0964"]}},e0={hold:{en:"Hold to fix",bn:"\u09A0\u09BF\u0995 \u0995\u09B0\u09A4\u09C7 \u099A\u09C7\u09AA\u09C7 \u09A7\u09B0\u09CB"},scrub:{en:"Hold to brush",bn:"\u09AC\u09CD\u09B0\u09BE\u09B6 \u0995\u09B0\u09A4\u09C7 \u099A\u09C7\u09AA\u09C7 \u09A7\u09B0\u09CB"},tap:{en:"Tap fast!",bn:"\u09A6\u09CD\u09B0\u09C1\u09A4 \u099A\u09BE\u09AA\u09CB!"},timing:{en:"Press when it is green",bn:"\u09B8\u09AC\u09C1\u099C \u09B9\u09B2\u09C7 \u099A\u09BE\u09AA\u09CB"},sequence:{en:"Switch on 1, 2, 3\u2026",bn:"\u09E7, \u09E8, \u09E9\u2026 \u0995\u09CD\u09B0\u09AE\u09C7 \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u09CB"},align:{en:"Turn the dish to the strongest signal",bn:"\u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u09B6\u0995\u09CD\u09A4 \u09B8\u09BF\u0997\u09A8\u09CD\u09AF\u09BE\u09B2\u09C7\u09B0 \u09A6\u09BF\u0995\u09C7 \u09A1\u09BF\u09B6 \u0998\u09CB\u09B0\u09BE\u0993"},balance:{en:"Keep the humidity in the green zone",bn:"\u0986\u09B0\u09CD\u09A6\u09CD\u09B0\u09A4\u09BE \u09B8\u09AC\u09C1\u099C \u0985\u0982\u09B6\u09C7 \u09B0\u09BE\u0996\u09CB"},fetch:{en:"Pick it up",bn:"\u09A4\u09C1\u09B2\u09C7 \u09A8\u09BE\u0993"},shelter:{en:"Get into the shelter!",bn:"\u0986\u09B6\u09CD\u09B0\u09AF\u09BC\u09C7 \u09A2\u09CB\u0995\u09CB!"}},t0={weather:{en:"Mars weather stations measure wind, temperature and air pressure. The air on Mars is about 100 times thinner than on Earth.",bn:"\u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u0986\u09AC\u09B9\u09BE\u0993\u09AF\u09BC\u09BE \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0 \u09AC\u09BE\u09A4\u09BE\u09B8, \u09A4\u09BE\u09AA\u09AE\u09BE\u09A4\u09CD\u09B0\u09BE \u0986\u09B0 \u09AC\u09BE\u09AF\u09BC\u09C1\u099A\u09BE\u09AA \u09AE\u09BE\u09AA\u09C7\u0964 \u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u09AC\u09BE\u09A4\u09BE\u09B8 \u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u09B0 \u099A\u09C7\u09AF\u09BC\u09C7 \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09E7\u09E6\u09E6 \u0997\u09C1\u09A3 \u09AA\u09BE\u09A4\u09B2\u09BE\u0964",source:"https://science.nasa.gov/mars/facts/"},reactor:{en:"NASA tested a small nuclear power unit called Kilopower in 2018. Power that works day and night, even in dust storms, would help a Mars base.",bn:"\u09A8\u09BE\u09B8\u09BE \u09E8\u09E6\u09E7\u09EE \u09B8\u09BE\u09B2\u09C7 \u0995\u09BF\u09B2\u09CB\u09AA\u09BE\u0993\u09AF\u09BC\u09BE\u09B0 \u09A8\u09BE\u09AE\u09C7 \u099B\u09CB\u099F \u09AA\u09BE\u09B0\u09AE\u09BE\u09A3\u09AC\u09BF\u0995 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u0987\u0989\u09A8\u09BF\u099F \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C7\u099B\u09C7\u0964 \u09A6\u09BF\u09A8-\u09B0\u09BE\u09A4, \u09A7\u09C1\u09B2\u09BF\u099D\u09A1\u09BC\u09C7\u0993 \u099A\u09B2\u09BE \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u09AE\u0999\u09CD\u0997\u09B2 \u0998\u09BE\u0981\u099F\u09BF\u09B0 \u0995\u09BE\u099C\u09C7 \u09B2\u09BE\u0997\u09AC\u09C7\u0964",source:"https://www.nasa.gov/"},fuel:{en:"A fuel plant can make rocket fuel from Mars air and ice. Astronauts could fill up their rocket for the trip home!",bn:"\u099C\u09CD\u09AC\u09BE\u09B2\u09BE\u09A8\u09BF \u0995\u09BE\u09B0\u0996\u09BE\u09A8\u09BE \u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u09AC\u09BE\u09A4\u09BE\u09B8 \u0986\u09B0 \u09AC\u09B0\u09AB \u09A5\u09C7\u0995\u09C7 \u09B0\u0995\u09C7\u099F\u09C7\u09B0 \u099C\u09CD\u09AC\u09BE\u09B2\u09BE\u09A8\u09BF \u09AC\u09BE\u09A8\u09BE\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u09A8\u09AD\u09CB\u099A\u09BE\u09B0\u09C0\u09B0\u09BE \u09AC\u09BE\u09A1\u09BC\u09BF \u09AB\u09C7\u09B0\u09BE\u09B0 \u09B0\u0995\u09C7\u099F \u09AD\u09B0\u09C7 \u09A8\u09BF\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7!",source:"https://www.nasa.gov/"},printerYard:{en:"Engineers are testing 3D printers that build walls from soil. On Mars, the ground itself could become a house.",bn:"\u09AA\u09CD\u09B0\u0995\u09CC\u09B6\u09B2\u09C0\u09B0\u09BE \u09AE\u09BE\u099F\u09BF \u09A6\u09BF\u09AF\u09BC\u09C7 \u09A6\u09C7\u09AF\u09BC\u09BE\u09B2 \u09AC\u09BE\u09A8\u09BE\u09A8\u09CB \u09A5\u09CD\u09B0\u09BF\u09A1\u09BF \u09AA\u09CD\u09B0\u09BF\u09A8\u09CD\u099F\u09BE\u09B0 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u099B\u09C7\u09A8\u0964 \u09AE\u0999\u09CD\u0997\u09B2\u09C7 \u09AE\u09BE\u099F\u09BF\u0987 \u09B9\u09AF\u09BC\u09C7 \u09AF\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u0998\u09B0\u0964",source:"https://www.nasa.gov/"},moxie:{en:"This machine works like MOXIE on Perseverance: it splits carbon dioxide at about 800 \xB0C to make oxygen.",bn:"\u098F\u0987 \u09AF\u09A8\u09CD\u09A4\u09CD\u09B0 \u09AA\u09BE\u09B0\u09B8\u09BF\u09AD\u09BF\u09AF\u09BC\u09BE\u09B0\u09C7\u09A8\u09CD\u09B8\u09C7\u09B0 \u09AE\u0995\u09CD\u09B8\u09BF\u09B0 \u09AE\u09A4\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7: \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09EE\u09E6\u09E6 \u09A1\u09BF\u0997\u09CD\u09B0\u09BF \u09B8\u09C7\u09B2\u09B8\u09BF\u09AF\u09BC\u09BE\u09B8\u09C7 \u0995\u09BE\u09B0\u09CD\u09AC\u09A8 \u09A1\u09BE\u0987-\u0985\u0995\u09CD\u09B8\u09BE\u0987\u09A1 \u09AD\u09C7\u0999\u09C7 \u0985\u0995\u09CD\u09B8\u09BF\u099C\u09C7\u09A8 \u09AC\u09BE\u09A8\u09BE\u09AF\u09BC\u0964",source:"https://www.nasa.gov/solar-system/nasas-oxygen-generating-experiment-moxie-completes-mars-mission/"},microscope:{en:"Rovers carry microscopes too. Curiosity's MAHLI camera can see details smaller than a grain of sand.",bn:"\u09B0\u09CB\u09AD\u09BE\u09B0\u0993 \u0985\u09A3\u09C1\u09AC\u09C0\u0995\u09CD\u09B7\u09A3 \u09AF\u09A8\u09CD\u09A4\u09CD\u09B0 \u09AC\u09AF\u09BC\u09C7 \u09A8\u09C7\u09AF\u09BC\u0964 \u0995\u09BF\u0989\u09B0\u09BF\u0993\u09B8\u09BF\u099F\u09BF\u09B0 \u09AE\u09BE\u09B9\u09B2\u09BF \u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE \u09AC\u09BE\u09B2\u09C1\u09B0 \u0995\u09A3\u09BE\u09B0 \u099A\u09C7\u09AF\u09BC\u09C7 \u099B\u09CB\u099F \u099C\u09BF\u09A8\u09BF\u09B8 \u09A6\u09C7\u0996\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964",source:"https://science.nasa.gov/mission/msl-curiosity/science-instruments/"},telescope:{en:"From Mars, Earth looks like a bright blue evening star. Curiosity took a photo of it in 2014.",bn:"\u09AE\u0999\u09CD\u0997\u09B2 \u09A5\u09C7\u0995\u09C7 \u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u0995\u09C7 \u0989\u099C\u09CD\u099C\u09CD\u09AC\u09B2 \u09A8\u09C0\u09B2 \u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE\u09A4\u09BE\u09B0\u09BE\u09B0 \u09AE\u09A4\u09CB \u09A6\u09C7\u0996\u09BE\u09AF\u09BC\u0964 \u0995\u09BF\u0989\u09B0\u09BF\u0993\u09B8\u09BF\u099F\u09BF \u09E8\u09E6\u09E7\u09EA \u09B8\u09BE\u09B2\u09C7 \u098F\u09B0 \u099B\u09AC\u09BF \u09A4\u09C1\u09B2\u09C7\u099B\u09BF\u09B2\u0964",source:"https://science.nasa.gov/mars/facts/"},kitchen:{en:"Astronauts on the space station eat about three meals a day, and they love spicy food because flavours taste weaker in space!",bn:"\u09AE\u09B9\u09BE\u0995\u09BE\u09B6 \u09B8\u09CD\u099F\u09C7\u09B6\u09A8\u09C7 \u09A8\u09AD\u09CB\u099A\u09BE\u09B0\u09C0\u09B0\u09BE \u09A6\u09BF\u09A8\u09C7 \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09A4\u09BF\u09A8\u09AC\u09BE\u09B0 \u0996\u09BE\u09AF\u09BC, \u0986\u09B0 \u099D\u09BE\u09B2 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7, \u0995\u09BE\u09B0\u09A3 \u09AE\u09B9\u09BE\u0995\u09BE\u09B6\u09C7 \u09B8\u09CD\u09AC\u09BE\u09A6 \u0995\u09AE \u09B2\u09BE\u0997\u09C7!",source:"https://www.nasa.gov/"},printer:{en:"Our 3D printer makes spare parts, so a broken wheel does not have to wait months for a rocket from Earth.",bn:"\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09A5\u09CD\u09B0\u09BF\u09A1\u09BF \u09AA\u09CD\u09B0\u09BF\u09A8\u09CD\u099F\u09BE\u09B0 \u0996\u09C1\u099A\u09B0\u09BE \u09AF\u09A8\u09CD\u09A4\u09CD\u09B0\u09BE\u0982\u09B6 \u09AC\u09BE\u09A8\u09BE\u09AF\u09BC, \u09A4\u09BE\u0987 \u09AD\u09BE\u0999\u09BE \u099A\u09BE\u0995\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u09AA\u09C3\u09A5\u09BF\u09AC\u09C0 \u09A5\u09C7\u0995\u09C7 \u09B0\u0995\u09C7\u099F\u09C7\u09B0 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE\u09AF\u09BC \u09AE\u09BE\u09B8 \u09A7\u09B0\u09C7 \u09AC\u09B8\u09C7 \u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AF\u09BC \u09A8\u09BE\u0964",source:"https://www.nasa.gov/"},powerdesk:{en:"Solar panels only work in daylight, so the base stores energy in batteries for the long cold night.",bn:"\u09B8\u09CB\u09B2\u09BE\u09B0 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u09B6\u09C1\u09A7\u09C1 \u09A6\u09BF\u09A8\u09C7 \u0995\u09BE\u099C \u0995\u09B0\u09C7, \u09A4\u09BE\u0987 \u09B2\u09AE\u09CD\u09AC\u09BE \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09B0\u09BE\u09A4\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0998\u09BE\u0981\u099F\u09BF \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09BF\u09A4\u09C7 \u09B6\u0995\u09CD\u09A4\u09BF \u099C\u09AE\u09BF\u09AF\u09BC\u09C7 \u09B0\u09BE\u0996\u09C7\u0964",source:"https://science.nasa.gov/resource/insights-power-generation-after-landing-and-spring-2022/"},drill:{en:"NASA's maps show ice just under the ground in the northern plains. Our drill melts it into drinking water.",bn:"\u09A8\u09BE\u09B8\u09BE\u09B0 \u09AE\u09BE\u09A8\u099A\u09BF\u09A4\u09CD\u09B0\u09C7 \u0989\u09A4\u09CD\u09A4\u09B0\u09C7\u09B0 \u09B8\u09AE\u09AD\u09C2\u09AE\u09BF\u09A4\u09C7 \u09AE\u09BE\u099F\u09BF\u09B0 \u09A0\u09BF\u0995 \u09A8\u09BF\u099A\u09C7 \u09AC\u09B0\u09AB \u09A6\u09C7\u0996\u09BE \u09AF\u09BE\u09AF\u09BC\u0964 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09A1\u09CD\u09B0\u09BF\u09B2 \u09A4\u09BE \u0997\u09B2\u09BF\u09AF\u09BC\u09C7 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AA\u09BE\u09A8\u09BF \u09AC\u09BE\u09A8\u09BE\u09AF\u09BC\u0964",source:"https://science.nasa.gov/resource/swim-map-shows-subsurface-water-ice-on-mars/"},dish:{en:"Radio signals travel at the speed of light, but Mars is so far away that a message takes several minutes to reach Earth.",bn:"\u09B0\u09C7\u09A1\u09BF\u0993 \u09B8\u0982\u0995\u09C7\u09A4 \u0986\u09B2\u09CB\u09B0 \u0997\u09A4\u09BF\u09A4\u09C7 \u099A\u09B2\u09C7, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09AE\u0999\u09CD\u0997\u09B2 \u098F\u09A4 \u09A6\u09C2\u09B0\u09C7 \u09AF\u09C7 \u098F\u0995\u099F\u09BE \u09AC\u09BE\u09B0\u09CD\u09A4\u09BE \u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u09A4\u09C7 \u09AA\u09CC\u0981\u099B\u09BE\u09A4\u09C7 \u0995\u09AF\u09BC\u09C7\u0995 \u09AE\u09BF\u09A8\u09BF\u099F \u09B2\u09BE\u0997\u09C7\u0964",source:"https://science.nasa.gov/mars/facts/"},pad:{en:"Rockets land on a flat, hard pad so their engines do not blast rocks and dust everywhere.",bn:"\u09B0\u0995\u09C7\u099F \u09B8\u09AE\u09A4\u09B2 \u09B6\u0995\u09CD\u09A4 \u09AA\u09CD\u09AF\u09BE\u09A1\u09C7 \u09A8\u09BE\u09AE\u09C7, \u09AF\u09BE\u09A4\u09C7 \u0987\u099E\u09CD\u099C\u09BF\u09A8\u09C7\u09B0 \u09A7\u09BE\u0995\u09CD\u0995\u09BE\u09AF\u09BC \u09AA\u09BE\u09A5\u09B0 \u0986\u09B0 \u09A7\u09C1\u09B2\u09CB \u099A\u09BE\u09B0\u09A6\u09BF\u0995\u09C7 \u09A8\u09BE \u099B\u09A1\u09BC\u09BE\u09AF\u09BC\u0964",source:"https://www.nasa.gov/"}},n0={solar2:{icon:"\u2600\uFE0F",en:["More solar panels","10 more panels: more power on sunny days."],bn:["\u0986\u09B0\u0993 \u09B8\u09CB\u09B2\u09BE\u09B0 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2","\u0986\u09B0\u0993 \u09E7\u09E6\u099F\u09BE \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2: \u09B0\u09CB\u09A6\u09C7\u09B2\u09BE \u09A6\u09BF\u09A8\u09C7 \u09AC\u09C7\u09B6\u09BF \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE\u0964"]},reactor:{icon:"\u269B\uFE0F",en:["Fission power unit","Steady power day and night, even in dust storms. NASA tested one called Kilopower."],bn:["\u09AA\u09BE\u09B0\u09AE\u09BE\u09A3\u09AC\u09BF\u0995 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u0987\u0989\u09A8\u09BF\u099F","\u09A6\u09BF\u09A8-\u09B0\u09BE\u09A4, \u09A7\u09C1\u09B2\u09BF\u099D\u09A1\u09BC\u09C7\u0993 \u09B8\u09CD\u09A5\u09BF\u09B0 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE\u0964 \u09A8\u09BE\u09B8\u09BE \u0995\u09BF\u09B2\u09CB\u09AA\u09BE\u0993\u09AF\u09BC\u09BE\u09B0 \u09A8\u09BE\u09AE\u09C7 \u098F\u0995\u099F\u09BE \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C7\u099B\u09C7\u0964"]},greenhouse2:{icon:"\u{1F33B}",en:["Second greenhouse","Grow more food for a bigger crew."],bn:["\u09A6\u09CD\u09AC\u09BF\u09A4\u09C0\u09AF\u09BC \u0997\u09CD\u09B0\u09BF\u09A8\u09B9\u09BE\u0989\u09B8","\u09AC\u09A1\u09BC \u09A6\u09B2\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0986\u09B0\u0993 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AB\u09B2\u09BE\u0993\u0964"]},observatory:{icon:"\u{1F52D}",en:["Observatory","A telescope dome. Earns extra science every sol."],bn:["\u09AE\u09BE\u09A8\u09AE\u09A8\u09CD\u09A6\u09BF\u09B0","\u09A6\u09C2\u09B0\u09AC\u09C0\u09A8\u09C7\u09B0 \u0997\u09AE\u09CD\u09AC\u09C1\u099C\u0964 \u09AA\u09CD\u09B0\u09A4\u09BF \u09B8\u09B2\u09C7 \u09AC\u09BE\u09A1\u09BC\u09A4\u09BF \u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8 \u09AA\u09AF\u09BC\u09C7\u09A8\u09CD\u099F\u0964"]},playroom:{icon:"\u{1F9F6}",en:["Kitty playroom","Ball pit, cat tree and a low-gravity trampoline. Happy crew!"],bn:["\u09AC\u09BF\u09A1\u09BC\u09BE\u09B2\u09A6\u09C7\u09B0 \u0996\u09C7\u09B2\u09BE\u0998\u09B0","\u09AC\u09B2 \u09AA\u09BF\u099F, \u09AC\u09BF\u09A1\u09BC\u09BE\u09B2 \u0997\u09BE\u099B \u0986\u09B0 \u0995\u09AE \u09AE\u09BE\u09A7\u09CD\u09AF\u09BE\u0995\u09B0\u09CD\u09B7\u09A3\u09C7\u09B0 \u099F\u09CD\u09B0\u09BE\u09AE\u09CD\u09AA\u09CB\u09B2\u09BF\u09A8\u0964 \u0996\u09C1\u09B6\u09BF \u09A6\u09B2!"]},fuel:{icon:"\u{1F680}",en:["Rocket fuel plant","Makes fuel from Mars air and ice, so hopper trips home are free."],bn:["\u09B0\u0995\u09C7\u099F \u099C\u09CD\u09AC\u09BE\u09B2\u09BE\u09A8\u09BF \u0995\u09BE\u09B0\u0996\u09BE\u09A8\u09BE","\u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u09AC\u09BE\u09A4\u09BE\u09B8 \u0986\u09B0 \u09AC\u09B0\u09AB \u09A5\u09C7\u0995\u09C7 \u099C\u09CD\u09AC\u09BE\u09B2\u09BE\u09A8\u09BF \u09AC\u09BE\u09A8\u09BE\u09AF\u09BC\u0964"]},printer:{icon:"\u{1F9F1}",en:["Brick printer","A robot that prints walls from Mars soil. Repairs go faster."],bn:["\u0987\u099F \u09AA\u09CD\u09B0\u09BF\u09A8\u09CD\u099F\u09BE\u09B0","\u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u09AE\u09BE\u099F\u09BF \u09A6\u09BF\u09AF\u09BC\u09C7 \u09A6\u09C7\u09AF\u09BC\u09BE\u09B2 \u099B\u09BE\u09AA\u09BE\u09A8\u09CB \u09B0\u09CB\u09AC\u099F\u0964 \u09AE\u09C7\u09B0\u09BE\u09AE\u09A4 \u09A6\u09CD\u09B0\u09C1\u09A4 \u09B9\u09AF\u09BC\u0964"]},drone:{icon:"\u{1F681}",en:["Helicopter drone","Fly like Ingenuity (press F) and spot hidden treasures from the air."],bn:["\u09B9\u09C7\u09B2\u09BF\u0995\u09AA\u09CD\u099F\u09BE\u09B0 \u09A1\u09CD\u09B0\u09CB\u09A8","\u0987\u09A8\u099C\u09C7\u09A8\u09C1\u0987\u099F\u09BF\u09B0 \u09AE\u09A4\u09CB \u0993\u09A1\u09BC\u09BE\u0993 (F \u099A\u09BE\u09AA\u09CB) \u0986\u09B0 \u0986\u0995\u09BE\u09B6 \u09A5\u09C7\u0995\u09C7 \u09B2\u09C1\u0995\u09BE\u09A8\u09CB \u099C\u09BF\u09A8\u09BF\u09B8 \u0996\u09CB\u0981\u099C\u09CB\u0964"]},batteries:{icon:"\u{1F50B}",en:["Bigger batteries","Store more power for long nights and storms."],bn:["\u09AC\u09A1\u09BC \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09BF","\u09B2\u09AE\u09CD\u09AC\u09BE \u09B0\u09BE\u09A4 \u0986\u09B0 \u099D\u09A1\u09BC\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AC\u09C7\u09B6\u09BF \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u099C\u09AE\u09BE\u0993\u0964"]}},Ua=[{id:"classic",science:0,suit:"#e9dcd1",trim:"#e79459",en:"Classic",bn:"\u0995\u09CD\u09B2\u09BE\u09B8\u09BF\u0995"},{id:"ocean",science:10,suit:"#dde8f3",trim:"#4c8fd6",en:"Ocean blue",bn:"\u09B8\u09BE\u0997\u09B0 \u09A8\u09C0\u09B2"},{id:"mango",science:20,suit:"#fff1cf",trim:"#f2a93b",en:"Mango",bn:"\u0986\u09AE"},{id:"jamdani",science:35,suit:"#f3e6f1",trim:"#c2457d",en:"Jamdani pink",bn:"\u099C\u09BE\u09AE\u09A6\u09BE\u09A8\u09BF \u0997\u09CB\u09B2\u09BE\u09AA\u09BF"},{id:"forest",science:50,suit:"#e3eedd",trim:"#3f9a5a",en:"Sundarbans green",bn:"\u09B8\u09C1\u09A8\u09CD\u09A6\u09B0\u09AC\u09A8 \u09B8\u09AC\u09C1\u099C"},{id:"night",science:80,suit:"#3b3f57",trim:"#7ef4e0",en:"Midnight",bn:"\u09AE\u09BE\u099D\u09B0\u09BE\u09A4"}];var ki={shell:"#bfc2d6",edge:"#e6dfe7",face:"#2c425b",mint:"#a9decb",ear:"#9cacc2"},i0=`<svg class="dhrubo-portrait" viewBox="-34 -45 68 80" aria-hidden="true"><path d="M0-22V-36" stroke="${ki.shell}" stroke-width="3" stroke-linecap="round"/><circle cy="-39" r="4" fill="${ki.mint}"/><rect x="-31" y="-1" width="7" height="18" rx="3" fill="${ki.ear}"/><rect x="24" y="-1" width="7" height="18" rx="3" fill="${ki.ear}"/><rect x="-23" y="-22" width="46" height="44" rx="15" fill="${ki.shell}" stroke="${ki.edge}" stroke-width="1.5"/><rect x="-18" y="-16" width="36" height="26" rx="9" fill="${ki.face}"/><ellipse cx="-8" cy="-4" rx="2.5" ry="4" fill="${ki.mint}"/><ellipse cx="8" cy="-4" rx="2.5" ry="4" fill="${ki.mint}"/><path d="m-5 4 5 2 5-2" fill="none" stroke="${ki.mint}" stroke-width="1.5" stroke-linecap="round"/><ellipse cy="26" rx="10" ry="3" fill="#9fdbd97d"/></svg>`;var et=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),bb={en:{spring:"spring",summer:"summer",autumn:"autumn",winter:"winter"},bn:{spring:"\u09AC\u09B8\u09A8\u09CD\u09A4",summer:"\u0997\u09CD\u09B0\u09C0\u09B7\u09CD\u09AE",autumn:"\u09B6\u09B0\u09CE",winter:"\u09B6\u09C0\u09A4"}},id={power:"\u{1F50B}",water:"\u{1F4A7}",oxygen:"\u{1FAC1}",food:"\u{1F955}",metal:"\u2699\uFE0F",ice:"\u{1F9CA}",science:"\u{1F52C}"};function s0(i,e){let t=()=>e(),n=f=>Bi[t()][f]??Bi.en[f]??f;i.insertAdjacentHTML("beforeend",`
    <div class="cx-hud">
      <div class="cx-where"><strong data-site></strong><span data-clock></span></div>
      <div class="cx-tanks">${no.map(f=>`<div class="cx-tank" data-tank="${f}"><span>${id[f]}</span><div class="cx-bar"><i></i></div><b></b></div>`).join("")}
        <div class="cx-stuff">${["metal","ice","science"].map(f=>`<span data-stuff="${f}">${id[f]} <b>0</b></span>`).join("")}</div></div>
      <div class="cx-alert" hidden><span class="cx-alert-icon"></span><div><strong></strong><p></p></div></div>
      <div class="cx-objectives" hidden><strong></strong><ul></ul></div>
      <div class="cx-marker" hidden><span>\u25B2</span><em></em></div>
      <div class="cx-prompt" hidden><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15"/><circle class="cx-ring" cx="18" cy="18" r="15"/></svg><span></span></div>
      <div class="cx-toasts" aria-live="polite"></div>
      <div class="cx-dhrubo" hidden>${i0}<p></p></div>
      <div class="cx-controls">
        <div class="cx-stick" data-stick><span></span></div>
        <div class="cx-buttons">
          <button data-press="act" class="cx-big">\u270B<small data-label="act"></small></button>
          <button data-press="jump">\u2934<small data-label="jump"></small></button>
          <button data-press="drone" data-drone hidden>\u{1F681}<small data-label="drone"></small></button>
          <button data-press="rover" data-rover hidden>\u{1F6DE}</button>
        </div>
      </div>
      <nav class="cx-menu">
        <button data-press="map">\u{1FA90} <span data-label="map"></span></button>
        <button data-press="build">\u{1F3D7}\uFE0F <span data-label="build"></span></button>
        <button data-press="photo">\u{1F4F7} <span data-label="photo"></span></button>
        <button data-press="menu">\u2699\uFE0F</button>
      </nav>
      <div class="cx-emergency" hidden></div>
      <div class="cx-drone" hidden><span data-label="droneBattery"></span><div class="cx-bar"><i></i></div></div>
    </div>
    <div class="cx-panel" hidden><div class="cx-card"></div></div>
    <div class="cx-fade"></div>`);let s=f=>i.querySelector(f),r=s(".cx-panel"),o=s(".cx-card"),a={},l=0;function c(){i.querySelectorAll("[data-label]").forEach(f=>{f.textContent=n(f.dataset.label)})}c();function h(f,x=""){let g=document.createElement("div");g.className=`cx-toast ${x}`,g.textContent=f,s(".cx-toasts").append(g),setTimeout(()=>g.classList.add("out"),2600),setTimeout(()=>g.remove(),3200)}function d(f,x=""){return o.className=`cx-card ${x}`,o.innerHTML=`<button class="cx-close" aria-label="${et(n("close"))}">\xD7</button>${f}`,r.hidden=!1,o.querySelector(".cx-close").onclick=()=>p(),o}let u=null;function p(){r.hidden=!0,o.innerHTML="";let f=u;u=null,f?.()}return{t:n,toast:h,relabel:c,closePanel:p,get panelOpen(){return!r.hidden},setOnClose(f){u=f},update({site:f,clock:x,hours:g,base:m,colonySol:y,objectives:M,alert:_,prompt:w,marker:S,emergency:v,drone:b,showDrone:R,showRover:T}){s("[data-site]").textContent=_n[f].name[t()];let C=g<6||g>18.5,P=bb[t()][x.northernSeason];s("[data-clock]").textContent=`${C?"\u{1F319}":"\u2600\uFE0F"} ${n("sol")} ${y} \xB7 ${om(g)} \xB7 ${n("marsYear")} ${x.marsYear} \xB7 ${P}${x.dustSeason?" \u{1F32A}\uFE0F":""}`;for(let F of no){let V=Math.round(m.tanks[F]);if(a[F]===V)continue;a[F]=V;let q=i.querySelector(`[data-tank="${F}"]`);q.querySelector("i").style.width=`${V}%`,q.querySelector("b").textContent=`${V}%`,q.classList.toggle("low",V<25),q.title=n(F)}for(let F of["metal","ice","science"])i.querySelector(`[data-stuff="${F}"] b`).textContent=Math.floor(m.stuff[F]);let N=s(".cx-alert");if(N.hidden=!_,_){let F=`${_.id}-${_.phase}`;if(N.dataset.key!==F){N.dataset.key=F;let V=lr[_.id][t()];N.querySelector(".cx-alert-icon").textContent=lr[_.id].icon,N.querySelector("strong").textContent=V[0],N.querySelector("p").textContent=V[1],N.classList.toggle("good",!!_.good),N.classList.remove("pop"),N.offsetWidth,N.classList.add("pop")}}let D=s(".cx-objectives");if(D.hidden=!M?.length,M?.length){let F=M.map(V=>`<li class="${V.done?"done":""}">${V.done?"\u2705":"\u25FB\uFE0F"} ${et(Sm(V,t()))}${V.need>1?` <b>${V.have}/${V.need}</b>`:""}</li>`).join("");D.dataset.html!==F&&(D.dataset.html=F,D.querySelector("strong").textContent=n("objectives"),D.querySelector("ul").innerHTML=F)}let O=s(".cx-prompt");O.hidden=!w,w&&(O.querySelector("span").textContent=w.text,O.querySelector(".cx-ring").style.strokeDashoffset=String(94.2*(1-(w.progress??0))),O.classList.toggle("hold",w.verb==="hold"));let G=s(".cx-marker");G.hidden=!S,S&&(G.style.left=`${S.x}px`,G.style.top=`${S.y}px`,G.querySelector("span").style.transform=`rotate(${S.angle}rad)`,G.querySelector("em").textContent=S.label??"",G.classList.toggle("edge",S.edge));let B=s(".cx-emergency");B.hidden=!v,v&&(B.textContent=n("emergency"));let ee=s(".cx-drone");ee.hidden=!b,b&&(ee.querySelector("i").style.width=`${Math.round(b.battery*100)}%`),i.querySelector("[data-drone]").hidden=!R,i.querySelector("[data-rover]").hidden=!T},say(f,x=6){let g=s(".cx-dhrubo");g.hidden=!1,g.querySelector("p").textContent=f,g.classList.remove("pop"),g.offsetWidth,g.classList.add("pop"),clearTimeout(l),l=setTimeout(()=>{g.hidden=!0},x*1e3)},fade(f){s(".cx-fade").classList.toggle("on",f)},hide(f){i.querySelector(".cx-hud").classList.toggle("hidden-ui",f)},buildMenu(f,x){let g=Ia.map(y=>{let M=n0[y.id],[_,w]=M[t()],S=f.built.includes(y.id),v=ih(f,y.cost),b=["metal","ice","science"].filter(R=>y.cost[R]).map(R=>`<span class="${(f.stuff[R]??0)>=y.cost[R]?"":"short"}">${id[R]} ${y.cost[R]}</span>`).join("");return`<article class="cx-item ${S?"owned":""}"><span class="cx-item-icon">${M.icon}</span><div><strong>${et(_)}</strong><p>${et(w)}</p><div class="cx-cost">${b}</div></div>
          <button data-buy="${y.id}" ${S||!v?"disabled":""}>${S?"\u2705 "+et(n("built")):et(n(v?"buy":"notEnough"))}</button></article>`}).join("");d(`<h2>\u{1F3D7}\uFE0F ${et(n("buildTitle"))}</h2><p class="cx-muted">${et(n("buildIntro"))}</p><div class="cx-list">${g}</div>`,"wide").querySelectorAll("[data-buy]").forEach(y=>y.onclick=()=>{p(),x(y.dataset.buy)})},mapMenu(f,x,g){let m=_n.home,y=ym.filter(w=>!_n[w].moon).map(w=>{let S=_n[w],v=((S.lon+180)%360+360)%360/360*100,b=(90-S.lat)/180*100;return`<button class="cx-pin ${v>85?"right":v<15?"left":""} ${w===f?"here":""} ${x.includes(w)?"seen":""}" style="left:${v}%;top:${b}%" data-site="${w}" title="${et(S.name[t()])}"><i></i><span>${et(S.name[t()].split(" \xB7 ")[0])}</span></button>`}).join(""),M=d(`<h2>\u{1FA90} ${et(n("mapTitle"))}</h2><p class="cx-muted">${et(n("mapIntro"))}</p>
        <div class="cx-mars">${y}</div><button class="cx-phobos ${f==="phobos"?"here":""}" data-site="phobos">\u{1F311} ${et(_n.phobos.name[t()])}</button>
        <div class="cx-site-card" hidden></div>`,"wide"),_=M.querySelector(".cx-site-card");M.querySelectorAll("[data-site]").forEach(w=>w.onclick=()=>{let S=w.dataset.site,v=_n[S],b=Math.round(wm(m,v));_.hidden=!1,_.innerHTML=`<h3>${et(v.name[t()])}</h3><p>${et(v.fact[t()])}</p><p class="cx-muted">${S==="home"?"":`${b.toLocaleString()} ${et(n("km"))} \xB7 `}${et(n("difficulty"))}: ${"\u2B50".repeat(Em(S))}${x.includes(S)?` \xB7 \u2705 ${et(n("visited"))}`:""}</p>
          <a href="${et(v.source)}" target="_blank" rel="noopener">NASA \u2197</a>
          ${S===f?`<p><b>\u{1F4CD} ${et(n("here"))}</b></p>`:`<button class="cx-go">${S==="home"?"\u{1F3E0} "+et(n("home")):"\u{1F680} "+et(n("fly"))}</button>`}`,_.querySelector(".cx-go")?.addEventListener("click",()=>{p(),g(S)})})},wardrobe(f,x,g){let m=Ua.map(M=>{let _=f>=M.science;return`<button class="cx-suit ${M.id===x?"on":""}" data-suit="${M.id}" ${_?"":"disabled"}><i style="background:${M.suit};border-color:${M.trim}"></i>${et(M[t()])}<small>${_?M.id===x?"\u2705":et(n("wear")):`\u{1F512} \u{1F52C}${M.science}`}</small></button>`}).join("");d(`<h2>\u{1F469}\u200D\u{1F680} ${et(n("wardrobeTitle"))}</h2><p class="cx-muted">${et(n("wardrobeIntro"))}</p><div class="cx-suits">${m}</div>`).querySelectorAll("[data-suit]").forEach(M=>M.onclick=()=>{g(M.dataset.suit),p()})},settings(f,x){d(`<h2>\u2699\uFE0F ${et(n("settings"))}</h2>
        <label class="cx-row">${et(n("quality"))}<select data-k="quality">${["low","medium","high"].map(m=>`<option value="${m}" ${f.quality===m?"selected":""}>${et(n(m))}</option>`).join("")}</select></label>
        <label class="cx-row"><input type="checkbox" data-k="reduced" ${f.reduced?"checked":""}> ${et(n("motion"))}</label>
        <label class="cx-row"><input type="checkbox" data-k="realTime" ${f.realTime?"checked":""}> ${et(n("realTime"))}</label>
        <label class="cx-row"><input type="checkbox" data-k="sound" ${f.sound?"checked":""}> ${et(n("sound"))}</label>
        <p><button data-k="language">\u{1F310} ${et(n("language"))}</button> <a class="cx-link" href="../hub.html">\u{1F680} ${et(n("hubLink"))}</a></p>
        <p class="cx-muted cx-keys">${et(n("keys"))}</p>`).querySelectorAll("[data-k]").forEach(m=>{let y=m.dataset.k,M=()=>x(y,m.type==="checkbox"?m.checked:m.value);m.tagName==="BUTTON"?m.onclick=()=>{x(y,!0),p()}:m.onchange=M})},info(f,x,g){d(`<h2>${et(f)}</h2><p>${et(x)}</p>${g?`<a href="${et(g)}" target="_blank" rel="noopener">NASA \u2197</a>`:""}`)},title(f,x){let g=d(`<div class="cx-title"><h1>\u{1F431} ${et(n("title"))}</h1><p>${et(_n.home.fact[t()])}</p>
        <button class="cx-go">${et(n(f?"continue":"start"))}</button><p class="cx-muted cx-keys">${et(n("keys"))}</p></div>`,"title");g.querySelector(".cx-close").remove(),g.querySelector(".cx-go").onclick=()=>{p(),x()}},photo(f,x,g){let m=document.createElement("div");return m.className="cx-photo",m.innerHTML=`<p>${et(n("photoHint"))}</p><button data-snap>\u{1F4F8} ${et(n("snap"))}</button><button data-card>\u{1F48C} ${et(n("postcard"))}</button><button data-exit>\u21A9 ${et(n("exitPhoto"))}</button>`,i.append(m),m.querySelector("[data-snap]").onclick=f,m.querySelector("[data-card]").onclick=x,m.querySelector("[data-exit]").onclick=()=>{m.remove(),g()},m},showPicture(f){return d(`<img class="cx-shot" src="${f}" alt=""><p><a class="cx-link" href="${f}" download="mars-photo.png">\u{1F4BE} ${et(n("saveImage"))}</a></p>`)},miniGame(f,x){let g=e0[f]?.[t()]??"";if(f==="tap"){let m=100,y=d(`<h2>\u{1F6B0} ${et(g)}</h2><div class="cx-meter"><i style="width:100%"></i></div><button class="cx-tap">\u{1F446}</button>`),M=y.querySelector(".cx-meter i");y.querySelector(".cx-tap").onclick=w=>{m-=9,w.currentTarget.classList.remove("bump"),w.currentTarget.offsetWidth,w.currentTarget.classList.add("bump"),M.style.width=`${Math.max(0,m)}%`,m<=0&&(p(),x())};let _=setInterval(()=>{if(r.hidden)return clearInterval(_);m=Math.min(100,m+2),M.style.width=`${m}%`},400)}else if(f==="timing"){let m=0,y=0,M=1,_=performance.now(),w=d(`<h2>\u{1F9CA} ${et(g)}</h2><div class="cx-timing"><b></b><i></i></div><p class="cx-hits">\u2B50\u2B50\u2B50</p><button class="cx-go">\u23EF</button>`),S=w.querySelector(".cx-timing i"),v=w.querySelector(".cx-hits"),b=.38+Math.random()*.3;w.querySelector(".cx-timing b").style.left=`${b*100}%`;let R=T=>{r.hidden||(y+=(T-_)/1e3*.9*M,_=T,(y>1||y<0)&&(M*=-1,y=Math.max(0,Math.min(1,y))),S.style.left=`${y*100}%`,requestAnimationFrame(R))};requestAnimationFrame(R),w.querySelector(".cx-go").onclick=()=>{let T=Math.abs(y-(b+.07))<.08;m=T?m+1:Math.max(0,m-1),v.textContent="\u{1F31F}".repeat(m)+"\u2B50".repeat(3-m),w.querySelector(".cx-timing").classList.toggle("miss",!T),m>=3&&(p(),x())}}else if(f==="sequence"){let m=[1,2,3,4,5,6].sort(()=>Math.random()-.5),y=1,M=d(`<h2>\u26A1 ${et(g)}</h2><div class="cx-breakers">${m.map(_=>`<button data-n="${_}">${_}</button>`).join("")}</div>`);M.querySelectorAll("[data-n]").forEach(_=>_.onclick=()=>{+_.dataset.n===y?(_.classList.add("on"),_.disabled=!0,y++,y>6&&(p(),x())):(M.querySelectorAll("[data-n]").forEach(w=>{w.classList.remove("on"),w.disabled=!1}),y=1,M.querySelector(".cx-breakers").classList.add("shake"),setTimeout(()=>M.querySelector(".cx-breakers")?.classList.remove("shake"),400))})}else if(f==="align"){let m=(Math.random()-.5)*140,y=0,M=(Math.random()-.5)*100,_=d(`<h2>\u{1F4E1} ${et(g)}</h2><div class="cx-dial"><i></i></div><div class="cx-meter signal"><i></i></div>
          <p><button data-turn="-1">\u27F2</button> <button data-turn="1">\u27F3</button></p>`),w=_.querySelector(".cx-dial i"),S=_.querySelector(".signal i"),v=0;_.querySelectorAll("[data-turn]").forEach(T=>{T.onpointerdown=()=>{v=+T.dataset.turn},T.onpointerup=T.onpointerleave=()=>{v=0}});let b=performance.now(),R=T=>{if(r.hidden)return;let C=(T-b)/1e3;b=T,m+=v*C*50;let P=Math.max(0,Math.cos((m-M)*Math.PI/180*1.5));if(w.style.transform=`rotate(${m}deg)`,S.style.width=`${P*100}%`,y=P>.96?y+C:0,y>.8){p(),x();return}requestAnimationFrame(R)};requestAnimationFrame(R)}else if(f==="balance"){let m=88,y=0,M=0,_=d(`<h2>\u{1F344} ${et(g)}</h2><div class="cx-meter balance"><b></b><i></i></div><p>\u{1F4A7} <span class="cx-val"></span>%</p>
          <p><button data-d="-6">\u{1F32C}\uFE0F \u2212</button> <button data-d="6">\u{1F4A6} +</button></p>`),w=_.querySelector(".balance i"),S=_.querySelector(".cx-val");_.querySelectorAll("[data-d]").forEach(R=>R.onclick=()=>{m+=+R.dataset.d});let v=performance.now(),b=R=>{if(r.hidden)return;let T=(R-v)/1e3;if(v=R,M+=(Math.random()-.5)*T*6,M*=.98,m=Math.max(20,Math.min(100,m+M*T*8+T*1.5)),w.style.left=`${m}%`,S.textContent=Math.round(m),y=m>50&&m<70?y+T:0,y>3){p(),x();return}requestAnimationFrame(b)};requestAnimationFrame(b)}}}}var Hi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Sb=new tr(-1,1,1,-1,0,1),sd=class extends zt{constructor(){super(),this.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new je([0,2,0,0,2,0],2))}},wb=new sd,Gi=class{constructor(e){this._mesh=new Ce(wb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var io=class extends Bn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=On.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Gi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fa=class extends Bn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ah=class extends Bn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var lh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new io(Hi),this.copyPass.material.blending=yn,this.timer=new ra}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fa!==void 0&&(o instanceof Fa?n=!0:o instanceof ah&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ch=class extends Bn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Oa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new yt},cameraProjectionMatrixInverse:{value:new yt},cameraWorldMatrix:{value:new yt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},za={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},hh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function r0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Eb(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new es(s,e,e);return r.wrapS=vn,r.wrapT=vn,r.needsUpdate=!0,r}function Eb(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Ba={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:rd(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraProjectionMatrixInverse:{value:new yt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function rd(i,e,t){let n=Tb(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Tb(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new L(Math.cos(r),Math.sin(r),o))}return n}var uh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,p=c-d,f=e-u,x=t-p,g,m;f>x?(g=1,m=0):(g=0,m=1);let y=f-g+h,M=x-m+h,_=f-1+2*h,w=x-1+2*h,S=l&255,v=c&255,b=this.perm[S+this.perm[v]]%12,R=this.perm[S+g+this.perm[v+m]]%12,T=this.perm[S+1+this.perm[v+1]]%12,C=.5-f*f-x*x;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[b],f,x));let P=.5-y*y-M*M;P<0?s=0:(P*=P,s=P*P*this._dot(this.grad3[R],y,M));let N=.5-_*_-w*w;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[T],_,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),p=1/6,f=(h+d+u)*p,x=h-f,g=d-f,m=u-f,y=e-x,M=t-g,_=n-m,w,S,v,b,R,T;y>=M?M>=_?(w=1,S=0,v=0,b=1,R=1,T=0):y>=_?(w=1,S=0,v=0,b=1,R=0,T=1):(w=0,S=0,v=1,b=1,R=0,T=1):M<_?(w=0,S=0,v=1,b=0,R=1,T=1):y<_?(w=0,S=1,v=0,b=0,R=1,T=1):(w=0,S=1,v=0,b=1,R=1,T=0);let C=y-w+p,P=M-S+p,N=_-v+p,D=y-b+2*p,O=M-R+2*p,G=_-T+2*p,B=y-1+3*p,ee=M-1+3*p,F=_-1+3*p,V=h&255,q=d&255,Se=u&255,j=this.perm[V+this.perm[q+this.perm[Se]]]%12,W=this.perm[V+w+this.perm[q+S+this.perm[Se+v]]]%12,oe=this.perm[V+b+this.perm[q+R+this.perm[Se+T]]]%12,ve=this.perm[V+1+this.perm[q+1+this.perm[Se+1]]]%12,Te=.6-y*y-M*M-_*_;Te<0?s=0:(Te*=Te,s=Te*Te*this._dot3(this.grad3[j],y,M,_));let ge=.6-C*C-P*P-N*N;ge<0?r=0:(ge*=ge,r=ge*ge*this._dot3(this.grad3[W],C,P,N));let Be=.6-D*D-O*O-G*G;Be<0?o=0:(Be*=Be,o=Be*Be*this._dot3(this.grad3[oe],D,O,G));let ut=.6-B*B-ee*ee-F*F;return ut<0?a=0:(ut*=ut,a=ut*ut*this._dot3(this.grad3[ve],B,ee,F)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,p,f,x=(e+t+n+s)*l,g=Math.floor(e+x),m=Math.floor(t+x),y=Math.floor(n+x),M=Math.floor(s+x),_=(g+m+y+M)*c,w=g-_,S=m-_,v=y-_,b=M-_,R=e-w,T=t-S,C=n-v,P=s-b,N=R>T?32:0,D=R>C?16:0,O=T>C?8:0,G=R>P?4:0,B=T>P?2:0,ee=C>P?1:0,F=N+D+O+G+B+ee,V=o[F][0]>=3?1:0,q=o[F][1]>=3?1:0,Se=o[F][2]>=3?1:0,j=o[F][3]>=3?1:0,W=o[F][0]>=2?1:0,oe=o[F][1]>=2?1:0,ve=o[F][2]>=2?1:0,Te=o[F][3]>=2?1:0,ge=o[F][0]>=1?1:0,Be=o[F][1]>=1?1:0,ut=o[F][2]>=1?1:0,Oe=o[F][3]>=1?1:0,rt=R-V+c,re=T-q+c,X=C-Se+c,Q=P-j+c,K=R-W+2*c,fe=T-oe+2*c,he=C-ve+2*c,He=P-Te+2*c,De=R-ge+3*c,it=T-Be+3*c,Xe=C-ut+3*c,pt=P-Oe+3*c,H=R-1+4*c,$t=T-1+4*c,dt=C-1+4*c,Pt=P-1+4*c,we=g&255,Gt=m&255,$e=y&255,Qe=M&255,I=a[we+a[Gt+a[$e+a[Qe]]]]%32,E=a[we+V+a[Gt+q+a[$e+Se+a[Qe+j]]]]%32,$=a[we+W+a[Gt+oe+a[$e+ve+a[Qe+Te]]]]%32,pe=a[we+ge+a[Gt+Be+a[$e+ut+a[Qe+Oe]]]]%32,le=a[we+1+a[Gt+1+a[$e+1+a[Qe+1]]]]%32,xe=.6-R*R-T*T-C*C-P*P;xe<0?h=0:(xe*=xe,h=xe*xe*this._dot4(r[I],R,T,C,P));let Ee=.6-rt*rt-re*re-X*X-Q*Q;Ee<0?d=0:(Ee*=Ee,d=Ee*Ee*this._dot4(r[E],rt,re,X,Q));let te=.6-K*K-fe*fe-he*he-He*He;te<0?u=0:(te*=te,u=te*te*this._dot4(r[$],K,fe,he,He));let se=.6-De*De-it*it-Xe*Xe-pt*pt;se<0?p=0:(se*=se,p=se*se*this._dot4(r[pe],De,it,Xe,pt));let ye=.6-H*H-$t*$t-dt*dt-Pt*Pt;return ye<0?f=0:(ye*=ye,f=ye*ye*this._dot4(r[le],H,$t,dt,Pt)),27*(h+d+u+p+f)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var so=class i extends Bn{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=r0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Zt(this.width,this.height,{type:sn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Et({defines:Object.assign({},Oa.defines),uniforms:On.clone(Oa.uniforms),vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,blending:yn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Qo,this.normalMaterial.blending=yn,this.pdMaterial=new Et({defines:Object.assign({},Ba.defines),uniforms:On.clone(Ba.uniforms),vertexShader:Ba.vertexShader,fragmentShader:Ba.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Et({defines:Object.assign({},za.defines),uniforms:On.clone(za.uniforms),vertexShader:za.vertexShader,fragmentShader:za.fragmentShader,blending:yn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Et({uniforms:On.clone(Hi.uniforms),vertexShader:Hi.vertexShader,fragmentShader:Hi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:la,blendDst:nr,blendEquation:ri,blendSrcAlpha:aa,blendDstAlpha:nr,blendEquationAlpha:ri}),this.blendMaterial=new Et({uniforms:On.clone(hh.uniforms),vertexShader:hh.vertexShader,fragmentShader:hh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:jl,blendSrc:la,blendDst:nr,blendEquation:ri,blendSrcAlpha:aa,blendDstAlpha:nr,blendEquationAlpha:ri}),this._fsQuad=new Gi(null),this._originalClearColor=new Ne,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new vi;s.format=bi,s.type=is,this.normalRenderTarget=new Zt(this.width,this.height,{minFilter:on,magFilter:on,type:sn,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=rd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=yn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=yn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=yn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=yn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=yn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new uh,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new es(s,e,e,jn,Dn);return r.wrapS=vn,r.wrapT=vn,r.needsUpdate=!0,r}};so.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var o0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ro=class i extends Bn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(r,o,{type:sn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Zt(r,o,{type:sn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Zt(r,o,{type:sn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=o0;this.highPassUniforms=On.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=On.clone(Hi.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:Hi.vertexShader,fragmentShader:Hi.fragmentShader,premultipliedAlpha:!0,blending:ts,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new Jt,this._fsQuad=new Gi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Et({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ro.BlurDirectionX=new ce(1,0);ro.BlurDirectionY=new ce(0,1);var ka={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var dh=class extends Bn{constructor(){super(),this.isOutputPass=!0,this.uniforms=On.clone(ka.uniforms),this.material=new Gr({name:ka.name,uniforms:this.uniforms,vertexShader:ka.vertexShader,fragmentShader:ka.fragmentShader}),this._fsQuad=new Gi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ca?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ha?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ir?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===da&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ab={uniforms:{tDiffuse:{value:null},time:{value:0},grain:{value:.03},vignette:{value:.55}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float grain;
    uniform float vignette;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - dot(d, d) * vignette;
      float g = hash(floor(vUv * vec2(1920.0, 1080.0)) + fract(time * 7.13) * 113.0) - 0.5;
      c.rgb += g * grain * (0.2 + c.rgb);
      gl_FragColor = c;
    }`};function a0(i,e,t,{ao:n=!0}={}){let s=i.getDrawingBufferSize(new ce),r=new Zt(s.x,s.y,{type:sn,samples:4}),o=new lh(i,r);o.addPass(new ch(e,t));let a=null;n&&(a=new so(e,t,s.x,s.y),a.output=so.OUTPUT.Default,a.blendIntensity=.9,a.updateGtaoMaterial({radius:.7,distanceExponent:1.4,thickness:1.5,scale:1.1,samples:12}),a.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:12}),a._overrideVisibility=function(){let h=this._visibilityCache;this.scene.traverse(d=>{if(!d.visible)return;let u=d.material,p=d.isMesh&&u&&!Array.isArray(u)&&u.transparent&&u.opacity<.8;(d.isPoints||d.isLine||d.isSprite||p||d.userData.noAO)&&(d.visible=!1,h.push(d))})},o.addPass(a));let l=new ro(new ce(Math.max(1,s.x/4),Math.max(1,s.y/4)),.3,.45,.93);o.addPass(l);let c=new io(Ab);return o.addPass(c),o.addPass(new dh),{composer:o,bloom:l,gtao:a,film:c,setSize(h,d){o.setSize(h,d),a?.setSize(h*i.getPixelRatio(),d*i.getPixelRatio())},render(h){c.uniforms.time.value=h,o.render()},dispose(){o.dispose(),a?.dispose?.(),r.dispose()}}}var p0="astro-kitty-colony-v1",lo=document.getElementById("colony"),Fs=document.createElement("canvas");Fs.className="cx-canvas";Fs.tabIndex=0;Fs.setAttribute("aria-label","Mars Colony 3D world");lo.prepend(Fs);var yd=(()=>{try{return JSON.parse(localStorage.getItem("astro-kitty-profile-v1")||"{}")}catch{return{}}})(),Nt=yd.language==="bn"?"bn":"en",dd=matchMedia("(pointer: coarse)").matches;function Rb(){return{v:1,base:dm(),skill:1,history:[],hours:7.6,sols:0,site:"home",visited:["home"],suit:"classic",scienceEarned:0,trophies:[],settings:{quality:dd?"medium":"high",reduced:matchMedia("(prefers-reduced-motion: reduce)").matches||!!yd.reduceMotion,realTime:!1,sound:Zp()}}}var de=(()=>{try{let i=JSON.parse(localStorage.getItem(p0));return i?.v===1?i:null}catch{return null}})(),Cb=!!de;de??=Rb();var cr=()=>{try{localStorage.setItem(p0,JSON.stringify(de))}catch{}},pn=i=>Bi[Nt][i]??Bi.en[i]??i,qn=new Vc({canvas:Fs,antialias:!0,powerPreference:"high-performance"});qn.toneMapping=ir;qn.toneMappingExposure=.98;qn.shadowMap.type=Kl;var kn=new bn(55,1,.1,1200),Us=null;function _d(){let i=de.settings.quality,e=window.devicePixelRatio||1;qn.setPixelRatio(i==="low"?Math.min(1,e)*.8:Math.min(i==="medium"?1.25:1.75,e)),qn.shadowMap.enabled=i!=="low",Me?.sky&&(Me.sky.sun.castShadow=i!=="low",Me.sky.sun.shadow.mapSize.setScalar(i==="high"?2048:1024),Me.sky.sun.shadow.map?.dispose(),Me.sky.sun.shadow.map=null),Us?.dispose(),Us=null,i==="high"&&Me&&(Us=a0(qn,Me.scene,kn,{ao:kt.enabled})),Md(!0)}var fd=0,pd=0;function Md(i=!1){let e=lo.clientWidth,t=lo.clientHeight;!i&&e===fd&&t===pd||(fd=e,pd=t,qn.setSize(e,t,!1),Us?.setSize(e,t),kn.aspect=e/t,kn.fov=kn.aspect<.8?68:55,kn.updateProjectionMatrix())}var ht=s0(lo,()=>Nt),l0=Qm(Fs,lo),Ut=jm();Ut.setEnabled(de.settings.sound);var md=null;try{md=Qp()}catch{}function hi(i,e){if(ht.say(i,e),Me?.dhrubo.say(Math.min(4,i.length/18)),de.settings.sound&&md)try{md.play(i)}catch{}}var ph=null;new js().load(new URL("./assets/mars-viking.jpg",import.meta.url).href,i=>{i.colorSpace=Wt,ph=i,Me?.marsGlobe&&(Me.marsGlobe.material.map=i,Me.marsGlobe.material.needsUpdate=!0)});var Pb=fetch("./data/donki-events.json").then(i=>i.ok?i.json():null).then(i=>{let t=(Array.isArray(i)?i:i?.events??[]).filter(n=>n.classType||n.class).sort((n,s)=>String(s.peakTime??s.peak??"").localeCompare(String(n.peakTime??n.peak??"")))[0];return t?{cls:t.classType??t.class,date:String(t.peakTime??t.peak??"").slice(0,10)}:null}).catch(()=>null),m0=null;Pb.then(i=>{m0=i});var Me=null;function Ib(){Me&&(Me.skyLight?.dispose(),Me.scene.traverse(i=>{i.geometry?.dispose?.();let e=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(let t of e)t.userData?.shared||t.dispose?.()}),Me=null)}function xh(i){Ib();let e={id:i,..._n[i]},t=new $s,n=_m(i),s=i==="home",r=de.base.built,o=s?cm(r):[],a=new Qc,l=Tm(t,{space:e.sky==="space",thin:e.sky==="thin",polar:e.sky==="polar"}),c=kt.enabled&&de.settings.quality!=="low"?Gp(qn,l.material,{size:de.settings.quality==="high"?128:64}):null;t.fog=new Lo("#b98066",40,330);let h=s?[[[-11,11],[-40,40]],[[-36,0],[-48,8]],[[36,0],[39,0]],[[0,37],[0,50]],[[18,-30],[20,-44]],[[-36,0],[-15,-15]]]:[],d=s?um(o,r):[{x:e.spawn.x,z:e.spawn.z,r:14},...(e.landmarks??[]).map(m=>({x:m.x,z:m.z,r:8}))],u=de.settings.quality,p=Am(t,qn,e,(m,y)=>n(m,y),{clear:d,paths:h,quality:u==="high"?2:u==="medium"?1:0,seed:Ra(i)%997});for(let m of p.blockers)a.circle(m.x,m.z,m.r);let f={site:e,scene:t,sky:l,skyLight:c,ground:p,collider:a,placed:o,home:s,terrainHeight:n,regions:null,structures:null,interiors:null,outdoor:null,crew:null,patrol:null,droneBot:null,spots:[],dynamic:[],landmarks:[],collectibles:[],hazards:{}};if(Me=f,s){for(let _ of hm(o))a.segment(_.ax,_.az,_.bx,_.bz,_.tag);f.structures=Um(t,o),f.interiors=km(t,o,{marsTexture:ph});for(let _ of f.interiors.colliders)a.circle(_.x,_.z,_.r);for(let[_,w,S,v]of f.interiors.segs)a.segment(_,w,S,v);let m=[],y=[];f.outdoor=Gm(t,n,r,{extraSpots:m,extraColliders:y});for(let _ of y)a.circle(_.x,_.z,_.r);f.spots=[...f.interiors.spots,...m],f.crew=Wm(t,o,f.interiors);let M=[[-14,30],[-36,22],[-58,-2],[-40,-30],[-10,-46],[28,-36],[32,26],[10,46]];f.patrol=$m(t,n,M),f.droneBot=nd(t,n),f.marsGlobe=f.interiors.list.find(_=>_.id==="lab")?.group.children.find(_=>_.geometry?.type==="SphereGeometry"),f.landing=Km(t)}else Lb(f);f.groundAt=(m,y,M)=>s&&nh(o,m,y)?We:n(m,y,M),f.kitty=$c(t,g0(de.suit)),f.headlamp=new ia("#fff1d6",0,26,.55,.6,1.2),f.headlamp.position.set(0,1.75,-.35),f.headlamp.target.position.set(0,.2,-7),f.kitty.rig.add(f.headlamp,f.headlamp.target),f.dhrubo=Vm(t),f.rover=qm(t,n,a),f.drone=de.base.built.includes("drone")?nd(t,n):null,f.wind=Ym(t);let x=e.sky==="space"?0:u==="low"?1:3;f.devils=Zm(t,n,x,e.size*.42,Ra(i)),f.bursts=Jm(t,u==="low"?300:700),e.sky==="space"&&Db(f);let g=s?de.player&&de.site==="home"?de.player:{x:-13,z:15,yaw:-.71}:{x:e.spawn.x+4,z:e.spawn.z+4,yaw:.6};if(U.x=g.x,U.z=g.z,U.yaw=g.yaw??0,U.heading=U.yaw,U.y=f.groundAt(U.x,U.z),U.vy=0,U.mode="walk",U.underground=!1,s){let m=f.interiors.anchors.roverPark;f.rover.park(m[0],m[1],-(f.interiors.anchors.roverFacing??0)+Math.PI/2)}else f.rover.park(e.spawn.x-8,e.spawn.z+2,.4);return f.dhrubo.root.position.set(U.x+1,U.y+2,U.z+1),_d(),f}function g0(i){let e=Ua.find(n=>n.id===i)??Ua[0],t=Jc(Zc());return{...t,suit:e.suit,trim:e.id==="classic"?t.trim:e.trim}}function Db(i){let e=new Jt({map:ph,color:ph?"#ffffff":"#c1704f",fog:!1}),t=new Ce(new Dt(110,48,32),e);t.position.set(-150,85,-235),i.sky.dome.add(t),i.marsGlobe=t}function Lb(i){let{site:e,scene:t,terrainHeight:n,collider:s}=i,r=Oi(Ra(e.id)+Date.now()%1e5),o=new ze,a=new Ze;a.cyl(_e.shell(),0,3.2,0,1.4,3.6,18,0,0,0,.7),a.cyl(_e.trim(),0,5.4,0,.8,.9,18,0,0,0,.3);for(let l=0;l<4;l++)a.box(_e.frame(),Math.cos(l*Math.PI/2)*1.6,1,Math.sin(l*Math.PI/2)*1.6,.14,2.2,.14,-l*Math.PI/2,0,.45);a.build(o),o.position.set(e.spawn.x,n(e.spawn.x,e.spawn.z),e.spawn.z),t.add(o),s.circle(e.spawn.x,e.spawn.z,2.2),i.spots.push({id:"hopper",x:e.spawn.x+2.6,z:e.spawn.z+1.5,r:2.6,verb:"tap",label:{en:Bi.en.board,bn:Bi.bn.board}});for(let l of e.landmarks??[]){let c=Nb(l.type);c.position.set(l.x,n(l.x,l.z),l.z),c.rotation.y=l.rot??0,t.add(c),l.type!=="tubes"&&s.circle(l.x,l.z,l.type==="heatshieldrock"?1.2:2),i.landmarks.push({...l,group:c})}i.objectives=bm(e.id,r);for(let l of i.objectives)Ub(i,l,r);e.hazards?.includes("geysers")&&(i.hazards.geysers=Array.from({length:6},(l,c)=>({x:(r()-.5)*160,z:(r()-.5)*160,phase:c*2.3}))),e.hazards?.includes("rockfall")&&(i.hazards.rockfall={timer:8,rocks:[]}),e.cave&&(i.caveLight=null)}function Nb(i){let e=new ze;if(["perseverance","curiosity","opportunity","zhurong"].includes(i)){let t=oh();if(i==="opportunity"&&t.root.scale.setScalar(.7),i==="zhurong"){let n=new Ze;for(let s of[-1,1])n.box(_e.solarCell(),s*1.9,1.75,0,1.6,.04,1.1,0,0,s*.5);n.build(t.chassis)}e.add(t.root)}else if(i==="ingenuity"){let t=td();t.root.position.y=.85,e.add(t.root)}else if(i==="viking"){let t=new Ze;t.cyl(_e.shellShade(),0,1.2,0,1,.5,6);for(let s=0;s<3;s++)t.box(_e.frame(),Math.cos(s*Je/3)*1.1,.6,Math.sin(s*Je/3)*1.1,.1,1.3,.1,-s*Je/3,0,.4);t.cyl(_e.steel(),.2,2.2,0,.05,1.6,6),t.build(e);let n=new Ce(new Dt(.6,16,8,0,Je,0,1),_e.steel());n.position.set(.2,3,0),n.rotation.x=-.8,e.add(n)}else if(i==="heatshieldrock"){let t=new Ce(new si(1,1),new tt({color:"#5d5a5e",metalness:.75,roughness:.35}));t.scale.set(1,.7,.8),t.position.y=.6,e.add(t)}return e}function Ub(i,e,t){let{site:n,terrainHeight:s}=i,r=n.size*.38,o=()=>{for(let c=0;c<40;c++){let h=(t()-.5)*2*r,d=(t()-.5)*2*r;if(!(Math.hypot(h-n.spawn.x,d-n.spawn.z)<20))return[h,d]}return[r*.5,r*.5]},a=(c,h,d,u)=>{let p=u();p.position.set(c,s(c,h),h),i.scene.add(p);let f=un(e.kind==="meteorite"?"#ffd27a":e.kind==="ice"?"#bdefff":"#7ef4e0",2.2,0);f.position.set(c,s(c,h)+.7,h),i.scene.add(f),i.collectibles.push({o:e,x:c,z:h,group:p,ring:f,kind:d,taken:!1,hidden:e.kind==="samples"&&t()<.4})},l=c=>()=>{let h=new Ce(new si(.35,0),new tt({color:c,flatShading:!0,roughness:.7,emissive:c,emissiveIntensity:.15}));h.position.y=.25;let d=new ze;return d.add(h),d};if(e.kind==="samples")for(let c=0;c<e.need;c++)a(...o(),"sample",l("#b8775a"));if(e.kind==="blueberries")for(let c=0;c<e.need;c++)a(...o(),"berry",()=>{let h=new ze;for(let d=0;d<6;d++){let u=new Ce(new Dt(.08,10,8),new tt({color:"#3b3d58",metalness:.4,roughness:.3}));u.position.set(Math.cos(d)*.25,.08,Math.sin(d*1.7)*.25),h.add(u)}return h});if(e.kind==="ice")for(let c=0;c<e.need;c++)a(...o(),"ice",()=>{let h=new Ce(new Di(.45,0),new tt({color:"#dff6ff",emissive:"#7fd8ff",emissiveIntensity:.4,roughness:.15,transparent:!0,opacity:.9}));h.position.y=.3;let d=new ze;return d.add(h),d});if(e.kind==="meteorite"&&a(...o(),"meteorite",()=>{let c=new Ce(new si(.55,1),new tt({color:"#4c4a50",metalness:.85,roughness:.3}));c.position.y=.4;let h=new ze;return h.add(c),h}),e.kind==="tubes"){let c=n.landmarks.find(h=>h.type==="tubes")??{x:0,z:0};for(let h=0;h<e.need;h++){let d=c.x+h%5*3.2-6.4,u=c.z+Math.floor(h/5)*4+h%2*1.2;a(d,u,"tube",()=>{let p=new Ce(new Rt(.06,.06,.6,10),_e.steel());p.rotation.z=Math.PI/2,p.position.y=.08;let f=new ze;return f.add(p),f})}}if(e.kind==="beacon")for(let c=0;c<e.need;c++){let[h,d]=o();i.collectibles.push({o:e,x:h,z:d,kind:"beacon",taken:!1,ring:(()=>{let u=un("#ffb35a",3,.5);return u.position.set(h,s(h,d)+.4,d),i.scene.add(u),u})()})}if(e.kind==="visit"){let c=n.landmarks.find(h=>h.type===e.thing);c&&i.collectibles.push({o:e,x:c.x+2.5,z:c.z+2.5,kind:"visit",taken:!1})}if(e.kind==="scan")for(let c=0;c<e.need;c++){let h=null;for(let d=0;d<60;d++){let[u,p]=o(),f=Math.abs(s(u+1,p)-s(u-1,p))+Math.abs(s(u,p+1)-s(u,p-1));(!h||f>h.slope)&&(h={x:u,z:p,slope:f})}i.collectibles.push({o:e,x:h.x,z:h.z,kind:"scan",taken:!1,ring:(()=>{let d=un("#c9a7ff",2.6,.5);return d.position.set(h.x,s(h.x,h.z)+1,h.z),i.scene.add(d),d})()})}if(e.kind==="summit"){let c=null;for(let h=-r;h<=r;h+=6)for(let d=-r;d<=r;d+=6){let u=s(h,d);(!c||u>c.y)&&(c={x:h,z:d,y:u})}i.collectibles.push({o:e,x:c.x,z:c.z,kind:"summit",taken:!1,auto:5,ring:(()=>{let h=un("#ffe08a",4,.7);return h.position.set(c.x,c.y+2,c.z),i.scene.add(h),h})()})}if(e.kind==="cave"&&n.cave){let c=n.cave,h=c.x+Math.cos(c.angle)*c.length,d=c.z+Math.sin(c.angle)*c.length;i.collectibles.push({o:e,x:h,z:d,kind:"cave",taken:!1,auto:5,underground:!0})}}var U={x:0,z:0,y:0,vy:0,yaw:0,heading:0,pitch:.42,dist:7.5,mode:"walk",underground:!1,grounded:!0,lookIdle:0,stride:0},od=new L,Ei=new L,fh=new L,Vi={id:null,t:0},ei=de.hours,tn=0,gd=performance.now(),ad=0,Ds=!1,Tn=null,ld=!1,bt=null,en=null,cd=null;function x0(){Ds=!0,Ut.unlock(),Fs.focus({preventScroll:!0}),bt=gm(Ra(String(Date.now()))),bt.skill=de.skill??1,bt.history=de.history??[],bt.cooldown=45,hi(Me.home?Nt==="bn"?"\u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE \u09AE\u0999\u09CD\u0997\u09B2 \u0998\u09BE\u0981\u099F\u09BF\u09A4\u09C7! \u099A\u09BE\u09B0\u09AA\u09BE\u09B6 \u0998\u09C1\u09B0\u09C7 \u09A6\u09C7\u0996\u09CB\u0964 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09B9\u09B2\u09C7 \u0986\u09AE\u09BF \u099C\u09BE\u09A8\u09BE\u09AC\u0964":"Welcome to our Mars base! Explore inside and out. I will tell you if anything goes wrong.":_n[Me.site.id].fact[Nt],8)}var co=new Map;function v0(i){let e=zn[i.id];Ut[e.good?"pickup":"alarm"]();let t=lr[i.id][Nt];hi(`${t[0]} ${t[1]}`,9);let n={started:tn};if(i.id==="supplyDrop"){let s=Math.random()*Je,r=6+Math.random()*18;n.target=[Ht.landingPad.x+Math.cos(s)*r,Ht.landingPad.z+Math.sin(s)*r]}if(i.id==="meteorite"){let s=Math.random()*Je,r=30+Math.random()*45;n.target=[Math.cos(s)*r,Math.sin(s)*r],n.from=[n.target[0]+160,140,n.target[1]-120]}if(i.id==="roverStuck"&&Me.patrol?.setStuck(!0),i.id==="powerSurge"&&(de.base.breakers=!1),i.id==="dustDevilClean"){let s=Me.devils.devils[0];s&&(s.x=Ht.solarFarm.x0-10,s.z=-10,s.heading=.4,s.life=15)}co.set(i.uid,n)}function y0(i){if(!Me.home)return null;let e=zn[i.id];if(i.phase==="warning"&&!e.good)return null;let t=co.get(i.uid)??{};switch(i.id){case"leak":{let n=Me.interiors.anchors.leak[i.module]??Me.interiors.anchors.leak.hub;return{id:"leak",x:n[0],z:n[1],r:2.2,verb:"hold",label:{en:"Patch the leak",bn:"\u09B2\u09BF\u0995 \u099C\u09CB\u09A1\u09BC\u09BE \u09B2\u09BE\u0997\u09BE\u0993"}}}case"mold":return Ls("climate");case"filterClog":return Ls("filter");case"drillJam":return Ls("drill");case"powerSurge":return Ls("breakers");case"comms":return Ls("dish");case"solarFlare":return i.phase==="active"?Ls("shelter"):null;case"dustStorm":return i.phase==="cleanup"?Fb():null;case"roverStuck":return Me.patrol?{id:"stuck",x:Me.patrol.position.x+2,z:Me.patrol.position.z+2,r:2.8,verb:"hold",label:{en:"Push the rover",bn:"\u09B0\u09CB\u09AD\u09BE\u09B0 \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u09A6\u09BE\u0993"}}:null;case"supplyDrop":return t.landed?{id:"crate",x:t.target[0],z:t.target[1],r:2.4,verb:"hold",label:{en:"Open the supply crate",bn:"\u09B0\u09B8\u09A6\u09C7\u09B0 \u09AC\u09BE\u0995\u09CD\u09B8 \u0996\u09CB\u09B2\u09CB"}}:null;case"meteorite":return t.landed?{id:"meteor",x:t.target[0],z:t.target[1],r:2.4,verb:"hold",label:{en:"Pick up the meteorite",bn:"\u0989\u09B2\u09CD\u0995\u09BE\u09AA\u09BF\u09A3\u09CD\u09A1 \u09A4\u09CB\u09B2\u09CB"}}:null;default:return null}}var Ls=i=>Me.spots.find(e=>e.id===i);function Fb(){let i=null;for(let e of Me.spots)if(e.id.startsWith("panels")&&!e.cleaned){let t=Math.hypot(e.x-U.x,e.z-U.z);(!i||t<i.d)&&(i={s:e,d:t})}return i?.s??null}function oo(i,e={science:2}){let t=co.get(i.uid);if(Xu(bt,i.uid,tn-(t?.started??tn)),co.delete(i.uid),i.id==="roverStuck"&&Me.patrol?.setStuck(!1),i.id==="powerSurge"&&(de.base.breakers=!0),i.id==="dustStorm")for(let n of Me.spots)n.cleaned=!1;t?.mesh&&Me.scene.remove(t.mesh);for(let[n,s]of Object.entries(e))n in de.base.stuff&&(de.base.stuff[n]+=s),n in de.base.tanks&&(de.base.tanks[n]=ct(de.base.tanks[n]+s,0,100));e.science&&(de.scienceEarned+=e.science),de.base.stats.fixes++,Me.kitty.cheer(),Ut.success(),ht.toast(`${Nt==="bn"?"\u09B6\u09BE\u09AC\u09BE\u09B6!":"Shabbash!"} ${Object.entries(e).map(([n,s])=>`+${s} ${pn(n)}`).join(" ")}`,"good"),ho(U.x,U.y+1.5,U.z,"#ffe08a",30),cr()}function ho(i,e,t,n,s=20,r={}){de.settings.reduced||Me.bursts.emit(i,e,t,{count:s,color:n,speed:3,life:.9,size:.12,gravity:-3,...r})}function Ob(){let i=[];if(bt)for(let t of bt.active){let n=y0(t);n&&i.push({...n,event:t})}let e=[...Me.spots.filter(t=>!i.some(n=>n.id===t.id)),...i];if(Me.home&&U.mode==="walk"){let t=Me.rover.state;e.push({id:"rover",x:t.x,z:t.z,r:3.2,verb:"tap",label:{en:pn("drive"),bn:Bi.bn.drive}})}if(!Me.home){let t=Me.rover.state;U.mode==="walk"&&e.push({id:"rover",x:t.x,z:t.z,r:3.2,verb:"tap",label:{en:pn("drive"),bn:Bi.bn.drive}});for(let n of Me.collectibles){if(n.taken||n.auto||n.hidden&&!n.revealed)continue;let s=n.kind==="visit"?{en:"Say hello",bn:"\u09B9\u09CD\u09AF\u09BE\u09B2\u09CB \u09AC\u09B2\u09CB"}:n.kind==="scan"?{en:"Scan",bn:"\u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8 \u0995\u09B0\u09CB"}:n.kind==="beacon"?{en:"Plant a beacon",bn:"\u09AC\u09C0\u0995\u09A8 \u09AC\u09B8\u09BE\u0993"}:{en:"Collect",bn:"\u09B8\u0982\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09CB"};e.push({id:"collect",x:n.x,z:n.z,r:2.1,verb:n.kind==="visit"?"tap":"hold",label:s,collectible:n})}}return e}function bd(){if(U.mode!=="walk")return null;let i=null;for(let e of Ob()){let t=Math.hypot(e.x-U.x,e.z-U.z);t<e.r&&(!i||t<i.d)&&(i={...e,d:t})}return i}function _0(i){let e=i.event;if(e)return zb(e,i);if(i.collectible)return M0(i.collectible);Ut.click();let t=t0[i.id];switch(i.id){case"planner":return ht.buildMenu(de.base,Sd);case"wardrobe":return ht.wardrobe(de.scienceEarned,de.suit,Bb);case"globe":return ht.mapMenu(Me.site.id,de.visited,mh);case"hopper":return ht.mapMenu(Me.site.id,de.visited,mh);case"rover":return b0();case"harvest":{let n=mm(de.base);n?(Ut.success(),ht.toast(`\u{1F955} +${n}% ${pn("food")}`,"good"),Me.kitty.cheer(),ho(U.x,U.y+1,U.z,"#9bd36a",25)):hi(Nt==="bn"?`\u09AB\u09B8\u09B2 \u098F\u0996\u09A8\u09CB \u09AC\u09A1\u09BC \u09B9\u099A\u09CD\u099B\u09C7: ${Math.round(de.base.crops*100)}%\u0964 \u09AA\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u098F\u09B8\u09CB!`:`The crops are still growing: ${Math.round(de.base.crops*100)}%. Come back later!`);return}case"radio":{let n=jc(new Date);hi(Nt==="bn"?`\u09AC\u09BE\u09B0\u09CD\u09A4\u09BE \u09AA\u09BE\u09A0\u09BE\u09A8\u09CB \u09B9\u09B2\u09CB! \u09AA\u09C3\u09A5\u09BF\u09AC\u09C0 \u098F\u0996\u09A8 ${(n.km/1e6).toFixed(0)} \u09AE\u09BF\u09B2\u09BF\u09AF\u09BC\u09A8 \u0995\u09BF\u09AE\u09BF \u09A6\u09C2\u09B0\u09C7, \u09A4\u09BE\u0987 \u09AA\u09CC\u0981\u099B\u09BE\u09A4\u09C7 ${n.lightMinutes.toFixed(1)} \u09AE\u09BF\u09A8\u09BF\u099F \u09B2\u09BE\u0997\u09AC\u09C7\u0964`:`Message sent! Earth is ${(n.km/1e6).toFixed(0)} million km away, so it takes ${n.lightMinutes.toFixed(1)} minutes to arrive.`),setTimeout(()=>ht.toast(Nt==="bn"?"\u{1F30D} \u09AE\u09BF\u09B6\u09A8 \u0995\u09A8\u09CD\u099F\u09CD\u09B0\u09CB\u09B2: \u09A6\u09BE\u09B0\u09C1\u09A3 \u0995\u09BE\u099C, \u09A6\u09B2!":"\u{1F30D} Mission Control: Great work, crew!","good"),Math.min(30,n.lightMinutes*2*2)*1e3);return}case"shelter":return hi(Nt==="bn"?"\u098F\u099F\u09BE \u099D\u09A1\u09BC\u09C7\u09B0 \u0986\u09B6\u09CD\u09B0\u09AF\u09BC\u0964 \u09AA\u09BE\u09A8\u09BF\u09B0 \u09A6\u09C7\u09AF\u09BC\u09BE\u09B2 \u09AC\u09BF\u0995\u09BF\u09B0\u09A3 \u0986\u099F\u0995\u09BE\u09AF\u09BC\u0964":"This is the storm shelter. Its water walls block radiation.");case"trampoline":Me.kitty.cheer(),U.vy=9;return;default:return i.id.startsWith("panels")?de.base.dust>.12?void 0:hi(Nt==="bn"?`\u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0986\u099B\u09C7\u0964 \u09A7\u09C1\u09B2\u09CB: ${Math.round(de.base.dust*100)}%`:`The panels are clean enough. Dust: ${Math.round(de.base.dust*100)}%`):t?ht.info(i.label[Nt],t[Nt],t.source):ht.info(i.label[Nt],"")}}function zb(i,e){let t=zn[i.id].fix?.how;if(["tap","timing","sequence","align","balance"].includes(t)){ht.miniGame(t,()=>oo(i,{science:3}));return}if(i.id==="supplyDrop")return oo(i,{metal:4,food:15,science:1});if(i.id==="meteorite")return de.base.stuff.samples++,oo(i,{metal:5,science:2});if(i.id==="dustStorm"){let n=Me.spots.find(s=>s.id===e.id);n&&(n.cleaned=!0),de.base.dust=Math.max(0,de.base.dust-.18),ho(e.x+2,U.y+1.5,e.z,"#d9a882",30),!Me.spots.some(s=>s.id.startsWith("panels")&&!s.cleaned)||de.base.dust<.12?oo(i,{science:3}):ht.toast(Nt==="bn"?"\u{1F9F9} \u098F\u0995 \u09B8\u09BE\u09B0\u09BF \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0!":"\u{1F9F9} One row clean!");return}return oo(i,{science:2})}function M0(i){let e=i.o;if(i.taken=!0,i.group&&Me.scene.remove(i.group),i.ring&&(i.ring.visible=i.kind==="beacon"),i.kind==="beacon"){let t=new Ze;t.cyl(_e.frame(),i.x,Me.terrainHeight(i.x,i.z)+1.2,i.z,.05,2.4,6),t.build(Me.scene),i.ring.position.y+=2.2}if(e.have=Math.min(e.need,e.have+1),["sample","berry","tube","meteorite"].includes(i.kind)&&de.base.stuff.samples++,Ut.pickup(),ho(i.x,Me.terrainHeight(i.x,i.z)+.6,i.z,"#7ef4e0",18),i.kind==="visit"){let t={perseverance:"Perseverance",curiosity:"Curiosity",opportunity:"Opportunity",zhurong:"Zhurong",viking:"Viking 2"}[e.thing];hi(Nt==="bn"?`\u09B9\u09CD\u09AF\u09BE\u09B2\u09CB, ${t}! \u09A4\u09C1\u09AE\u09BF \u09AE\u0999\u09CD\u0997\u09B2\u09C7 \u0985\u09A8\u09C7\u0995 \u0995\u09BF\u099B\u09C1 \u0986\u09AC\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0995\u09B0\u09C7\u099B\u0964`:`Hello, ${t}! Thank you for exploring Mars for us.`)}if(e.have>=e.need&&!e.done){e.done=!0;for(let[t,n]of Object.entries(e.reward))de.base.stuff[t]+=n;de.scienceEarned+=e.reward.science??0,Ut.success(),Me.kitty.cheer(),ht.toast(`${pn("objectiveDone")} ${Object.entries(e.reward).map(([t,n])=>`+${n} ${pn(t)}`).join(" ")}`,"good"),Me.objectives.every(t=>t.done)&&(hi(pn("siteDone")+" "+pn("allDone"),8),de.trophies.includes(Me.site.id)||de.trophies.push(Me.site.id)),cr()}else ht.toast(`${pn("collected")} ${e.have}/${e.need}`)}function Sd(i){let e=Ia.find(t=>t.id===i);!e||de.base.built.includes(i)||!ih(de.base,e.cost)||(pm(de.base,e.cost),de.base.built.push(i),de.player={x:U.x,z:U.z,yaw:U.yaw},cr(),Ut.build(),Ut.success(),ht.toast(`\u{1F3D7}\uFE0F ${pn("built")}!`,"good"),ht.fade(!0),setTimeout(()=>{xh("home"),ht.fade(!1),hi(Nt==="bn"?"\u09A8\u09A4\u09C1\u09A8 \u099C\u09BF\u09A8\u09BF\u09B8 \u09A4\u09C8\u09B0\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7! \u0997\u09BF\u09AF\u09BC\u09C7 \u09A6\u09C7\u0996\u09CB\u0964":"Construction complete! Go and have a look.")},450))}function Bb(i){de.suit=i,cr();let e=g0(i);Me.kitty.materials.suit.color.set(e.suit),Me.kitty.materials.trim.color.set(e.trim),Me.kitty.cheer()}function mh(i){ld||i===Me.site.id||(ld=!0,Ut.rocket(),de.player=Me.home?{x:U.x,z:U.z,yaw:U.yaw}:de.player,ht.fade(!0),setTimeout(()=>{de.site=i,de.visited.includes(i)||de.visited.push(i),cr(),xh(i),ht.fade(!1),ld=!1,ht.toast(`\u{1F680} ${pn("landed")}`,"good");let e=i==="home"?bt?.active.find(t=>!zn[t.id].good):null;e?hi(`${Nt==="bn"?"\u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE! \u098F\u0995\u099F\u09BE \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u099B\u09C7:":"Welcome back! A problem is waiting for us:"} ${lr[e.id][Nt][0]}`,8):hi(_n[i].fact[Nt],9),ho(U.x,U.y+.3,U.z,"#c48a64",40,{speed:6,gravity:-1,size:.3,life:1.6})},900))}function b0(){U.mode="drive",Ut.door(),Me.kitty.rig.visible=!1}function c0(){let i=Me.rover.state;U.mode="walk";let e=Me.collider.resolve(i.x+Math.cos(i.heading)*2.6,i.z-Math.sin(i.heading)*2.6,.45);U.x=e.x,U.z=e.z,Me.kitty.rig.visible=!0}var ao=new L,h0=new Ne,Ns=new L,xd=new L,u0=new Ne,hd=1/60,d0=0,gh=!1,hs=null,ud=0,vd=jc(new Date);function S0(i){if(requestAnimationFrame(S0),!Me)return;let e=Math.min(.05,(i-gd)/1e3);if(gd=i,document.hidden)return;Md();let t=de.settings.reduced;tn+=e,Ps.time.value=tn;let n=Me,s=n.site;ud-=e,(!hs||ud<=0)&&(hs=rm(new Date,s.lon),ud=5,vd=jc(new Date)),de.settings.realTime?ei=hs.lmst:Ds&&!ht.panelOpen&&(ei+=e*24/360,ei>=24&&(ei-=24,de.sols=(de.sols??0)+1,de.base.stats.sols++));let r=Gu(ei,s.moon?0:s.lat,hs.ls);Ns.set(...Vu(r.azimuth,r.elevation));let o=vd.elongation*Math.PI/180;xd.set(...Vu(r.azimuth+(ei>12?-1:1)*o*.8,Math.max(.05,r.elevation+.1)));let a=ct(1-(Ns.y+.05)/.17,0,1),l=!Ds||ht.panelOpen;if(bt&&!l){let S={dustSeason:hs.dustSeason,night:a>.5,site:s.id,dust:de.base.dust,built:["greenhouse",...de.base.built],realFlare:m0,paused:l,leakModules:n.home?n.placed.map(P=>P.id).filter(P=>n.interiors.anchors.leak[P]):["hub"],available:()=>n.home},{started:v,finished:b}=xm(bt,e,S);v&&v0(v);for(let P of b)co.delete(P.uid);let R=bt.active.find(P=>P.id==="dustStorm"&&P.phase==="cleanup");R&&!R.announced&&(R.announced=!0,de.base.dust=Math.max(de.base.dust,.65),hi(lr.dustStormCleanup[Nt].join(" "))),R&&!n.home&&Xu(bt,R.uid,60);let T=bt.active.find(P=>P.id==="dustDevilClean");T&&T.age>6&&!T.cleaned&&(T.cleaned=!0,de.base.dust=Math.max(0,de.base.dust-.5),ht.toast("\u{1F300} \u2600\uFE0F","good"));let C=bt.active.find(P=>P.id==="solarFlare"&&P.phase==="active");if(C&&n.home){let P=Ls("shelter");P&&Math.hypot(U.x-P.x,U.z-P.z)<2.6&&!C.safe&&(C.safe=!0,oo(C,{science:4}))}}let c=bt?vm(bt):0;if(!l){let S=(ei+(_n.home.lon-s.lon)/15+48)%24,v=Gu(S,_n.home.lat,hs.ls),b=bt&&n.home?qu(bt):{},R=fm(de.base,{sunElevation:v.elevation,night:v.elevation<0,storm:n.home?c:0,problems:b},e*24/360);n.rates=R,de.base.built.includes("observatory")&&Math.random()<e/60&&(de.base.stuff.science+=1)}Ps.growth.value=de.base.crops,Ps.mold.value=Bt(Ps.mold.value,bt?.active.some(S=>S.id==="mold"&&S.phase==="active")?1:0,1,e),Bm(e,{water:de.base.tanks.water>2?1:0,power:Math.max(.1,(n.rates?.solar??0)/20),oxygen:1});let h=l0.poll();for(let S of l0.take())kb(S);Tn?Qb(e,h):l||Gb(e,h,t),cd=en,en=n.home&&U.mode==="walk"?nh(n.placed,U.x,U.z):null,(en?.kind??null)!==(cd?.kind??null)&&Ds&&(n.kitty.setHelmet(!en),!!en!=!!cd&&Ut.door()),n.kitty.setHelmet(!en);let d=ao.set(U.x,U.y,U.z),u=n.sky.update({sunDir:Ns,earthDir:xd,hours:ei,storm:c,focus:d,indoors:en?1:0,time:tn,shadowSize:en?30:60});if(n.sky.dome.position.copy(kn.position),n.skyLight){let S=`${Math.round(Ns.x*30)},${Math.round(Ns.y*30)},${Math.round(Ns.z*30)},${Math.round(c*8)}`;h0.set(s.palette[1]).multiplyScalar(.06+.42*u.day*(1-c*.5)),n.skyLight.update(n.scene,h0,S,tn,de.settings.quality==="high"?1.5:4),n.scene.environmentIntensity=en?.6:1,n.sky.hemi.intensity*=ot(.55,.12,u.day)}kt.dustAmount.value=1+c*.6,n.sky.fogColor(u0,c),n.scene.fog.color.copy(u0);let p=s.sky==="space"?0:1;n.scene.fog.near=ot(kt.enabled?22:60,4,c)*p+(1-p)*300,n.scene.fog.far=ot(kt.enabled?290:340,45,c)*p+(1-p)*900,bt?.active.find(S=>S.id==="solarFlare"&&S.phase==="active")&&n.sky.hemi.color.offsetHSL(0,0,Math.sin(tn*6)*.02),n.wind.elapsed.value=t?0:tn,n.wind.storm.value=c,n.wind.inside.value=en||s.sky==="space"?1:0,n.wind.center.value.set(U.x,n.terrainHeight(U.x,U.z),U.z);let x=qn.getPixelRatio();n.wind.pixel.value=x,n.devils.update(e,tn,{avoid:n.home?n.placed.map(S=>({x:S.x,z:S.z,r:(S.r??10)+6})):[],reduced:t,pixel:x});for(let S of n.devils.devils)S.pts.visible=c<.4&&!U.underground;n.bursts.update(e,x),n.home?Xb(e,a,c,t):qb(e,t),Yb(e,t),$b(),n.headlamp.intensity=!en&&U.mode==="walk"?a*38+(U.underground?45:0):0,_e.window().emissive.setRGB(ot(.11,1,a),ot(.18,.78,a),ot(.3,.42,a)),_e.window().emissiveIntensity=ot(.35,1.4,a);let g=Zb(),m=U.heading+Math.PI/2,y=ao.set(U.x+Math.sin(m)*1.1+Math.sin(U.heading)*.8,U.y+(U.mode==="drive"?3.4:2.1),U.z+Math.cos(m)*1.1+Math.cos(U.heading)*.8);n.dhrubo.update(e,tn,y,g?new L(g.x,U.y+1,g.z):kn.position,t),n.dhrubo.setMood(bt?.active.some(S=>!zn[S.id].good&&S.phase!=="warning")?"worried":"happy"),n.dhrubo.root.visible=U.mode!=="drone"&&!Tn,Kb(e,h,t),Ut.ambience(en?1:U.underground?.7:0,c,en?.module==="power"?1:en?.module==="life"?.6:0,/greenhouse/.test(en?.module??"")?1:0),Ut.vehicle("rover",U.mode==="drive"?.15+Math.min(1,Math.abs(n.rover.state.speed)/6):0),Ut.vehicle("drone",U.mode==="drone"?.6:0);let M=Ds&&!Tn?bd():null,_=null;if(M){let S=M.verb==="hold"?pn("hold"):pn("tap");_={text:`${dd?"\u270B":"E"} \xB7 ${S}: ${M.label[Nt]??M.label.en}`,verb:M.verb,progress:Vi.id===w0(M)?Vi.t/1.1:0}}U.mode==="drive"&&(_={text:`${dd?"\u{1F6DE}":"E / R"} \xB7 ${pn("leaveRover")}`,verb:"tap"});let w=n.home?bt?.active.find(S=>!(S.id==="dustStorm"&&S.phase==="active"&&S.age>20))??null:null;ht.update({site:s.id,clock:hs,hours:ei,base:de.base,colonySol:(de.sols??0)+1,objectives:n.objectives,alert:w?{id:w.phase==="cleanup"?"dustStormCleanup":w.id,phase:w.phase,good:zn[w.id].good}:null,prompt:_,marker:Ds&&!Tn?Jb(g):null,emergency:de.base.emergency,drone:U.mode==="drone"?n.drone.state:null,showDrone:!!n.drone,showRover:U.mode==="drive"}),Us?Us.render(performance.now()/1e3):qn.render(n.scene,kn),hd=ot(hd,e,.05),d0+=e,d0>4&&hd>1/26&&!gh&&de.settings.quality!=="low"&&(gh=!0,de.settings.quality=de.settings.quality==="high"?"medium":"low",_d()),ad+=e,ad>5&&Ds&&(ad=0,de.hours=ei,de.skill=bt?.skill??1,de.history=bt?.history??[],n.home&&U.mode==="walk"&&(de.player={x:U.x,z:U.z,yaw:U.yaw}),cr())}var w0=i=>`${i.id}-${i.event?.uid??""}-${i.collectible?Me.collectibles.indexOf(i.collectible):""}`;function kb(i){if(Ds&&!(ht.panelOpen&&i!=="menu")&&!Tn)switch(i){case"act":{if(U.mode==="drive")return c0();if(U.mode==="drone")return wd();let e=bd();e&&e.verb!=="hold"&&_0(e);return}case"rover":U.mode==="drive"?c0():Math.hypot(Me.rover.state.x-U.x,Me.rover.state.z-U.z)<4&&b0();return;case"jump":U.mode==="walk"&&U.grounded&&(U.vy=Me.site.moon?5.2:4.4,U.grounded=!1,Me.site.moon&&ht.toast(pn("phobosJump")));return;case"map":return ht.mapMenu(Me.site.id,de.visited,mh);case"build":return Me.home?ht.buildMenu(de.base,Sd):ht.toast(Nt==="bn"?"\u09AC\u09BE\u09A1\u09BC\u09BF \u09AB\u09BF\u09B0\u09C7 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09CB\u0964":"Build things back at home base.");case"photo":return jb();case"drone":return Wb();case"menu":return ht.panelOpen?ht.closePanel():ht.settings(de.settings,Hb)}}function Hb(i,e){if(i==="language"){Nt=Nt==="bn"?"en":"bn";try{localStorage.setItem("astro-kitty-profile-v1",JSON.stringify({...yd,language:Nt}))}catch{}ht.relabel();return}de.settings[i]=e,i==="sound"&&(Ut.setEnabled(e),Jp(e)),i==="quality"&&(gh=!0,xh(Me.site.id)),cr()}function Gb(i,e,t){let n=Me,[s,r]=e.move;if(U.yaw-=e.look[0],U.pitch=ct(U.pitch+e.look[1],-.15,1.2),U.dist=ct(U.dist+e.zoom*.8,3.5,34),e.look[0]||e.look[1]?U.lookIdle=0:U.lookIdle+=i,U.mode==="drive"){let b=n.rover.drive(i,r,s,{night:f0(),reduced:t});U.x=b.x,U.z=b.z,U.y=n.rover.model.root.position.y+1.2,U.heading=b.heading,Math.abs(b.speed)>1&&U.lookIdle>1&&(U.yaw=Fi(U.yaw,b.heading,2,i)),b.dust>.2&&Math.random()<b.dust*.6&&n.bursts.emit(b.x+Math.sin(b.heading)*1.8,n.terrainHeight(b.x,b.z)+.3,b.z+Math.cos(b.heading)*1.8,{count:2,color:"#c48a64",speed:1.2,up:.6,gravity:-.4,life:1.6,size:.35,grow:.5});return}if(U.mode==="drone"){n.drone.control(i,r,s,e.up,0),n.drone.state.battery<=0&&(wd(),ht.toast(pn("droneDone"))),Vb(n.drone.state.x,n.drone.state.z,26);return}n.rover.idle(i,f0());let o=!!nh(n.placed??[],U.x,U.z),a=(e.run?6.4:o?3.2:3.8)*Math.min(1,Math.hypot(s,r)),l=-Math.sin(U.yaw),c=-Math.cos(U.yaw),h=Math.cos(U.yaw),d=-Math.sin(U.yaw),u=l*r+h*s,p=c*r+d*s,f=Math.hypot(u,p);f>.001&&(u=u/f*a,p=p/f*a),U.vx=Bt(U.vx??0,u,10,i),U.vz=Bt(U.vz??0,p,10,i);let x=U.x+U.vx*i,g=U.z+U.vz*i,m=n.site.size/2-3,y=n.collider.resolve(ct(x,-m,m),ct(g,-m,m),.42);U.underground&&!$u(n.site.cave,y.x,y.z)&&(y={x:U.x,z:U.z});let M=Math.hypot(y.x-U.x,y.z-U.z);if(U.x=y.x,U.z=y.z,M>.002&&(U.heading=Fi(U.heading,Math.atan2(-U.vx,-U.vz),10,i)),M>.01&&U.lookIdle>1.5&&!en&&(U.yaw=Fi(U.yaw,U.heading,1.2,i)),n.site.cave){let b=n.site.cave,R=Math.hypot(U.x-b.x,U.z-b.z)<b.r;R&&U.y<-b.depth+4&&(U.underground=!0),R&&U.y>-b.depth+6&&(U.underground=!1)}let _=n.groundAt(U.x,U.z,U.underground),w=n.site.gravity;U.vy-=w*i*(n.site.moon?.7:1.6),U.y+=U.vy*i,U.y<=_?(!U.grounded&&U.vy<-3&&(Ut.thump(),en||ho(U.x,_+.1,U.z,"#c48a64",10,{speed:1.5,gravity:-1,size:.2,life:.8})),U.y=U.grounded?Bt(U.y,_,18,i):_,U.vy=0,U.grounded=!0):U.y-_>.3&&(U.grounded=!1),U.grounded&&(U.y=Math.max(_,Bt(U.y,_,14,i)));let S=M/i;n.kitty.rig.position.set(U.x,0,U.z),n.kitty.rig.rotation.y=U.heading,n.kitty.animate(i,S,U.y,Vi.id?ct(Vi.t/1.1,0,1):0,t),U.stride+=M,U.stride>.8&&U.grounded&&(U.stride=0,Ut.step(en?"metal":"sand"),!en&&!t&&n.bursts.emit(U.x,U.y+.05,U.z,{count:2,color:"#b98067",speed:.4,up:.4,gravity:-.3,life:.9,size:.12,grow:.15}));let v=bd();if(v&&v.verb==="hold"&&e.act){let b=w0(v);Vi.id!==b&&(Vi={id:b,t:0}),Vi.t+=i*(de.base.built.includes("printer")?1.4:1),!t&&Math.random()<.3&&n.bursts.emit(v.x,U.y+1,v.z,{count:1,color:v.id==="leak"?"#ffd27a":"#fff1d0",speed:2,life:.4,size:.06}),Vi.t>=1.1&&(Vi={id:null,t:0},_0(v))}else Vi={id:null,t:0}}function Vb(i,e,t){if(!Me.home)for(let n of Me.collectibles)n.hidden&&!n.revealed&&Math.hypot(n.x-i,n.z-e)<t&&(n.revealed=!0,ht.toast(`\u{1F681} ${pn("droneReveal")}`,"good"))}function Wb(){let i=Me;if(!i.drone)return ht.toast(Nt==="bn"?"\u0986\u0997\u09C7 \u09A1\u09CD\u09B0\u09CB\u09A8 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09CB (\u09A4\u09C8\u09B0\u09BF \u09AE\u09C7\u09A8\u09C1)\u0964":"Build the drone first (Build menu).");if(U.mode==="drone")return wd();U.mode==="walk"&&(U.mode="drone",Object.assign(i.drone.state,{x:U.x+1,z:U.z+1,y:U.y+2,battery:1,heading:U.yaw}),Ut.console())}function wd(){U.mode="walk",Ut.thump()}function f0(){return ct(1-(Ns.y+.05)/.17,0,1)}function Xb(i,e,t,n){let s=Me,r=bt?qu(bt):{};s.structures.update(i,en,[U,...s.crew.members.map(u=>u.kitty.rig.position)],n);let o=[{x:U.x,z:U.z},{x:s.rover.state.x,z:s.rover.state.z}];for(let u of s.structures.airlocks){let p=o.some(x=>Math.hypot(x.x-u.a.outer[0],x.z-u.a.outer[1])<(u.a.wide?6:3.4)),f=s.structures.driveAirlock(u,p,i,n);s.collider.setEnabled(u.a.id,f<.7),p&&!u.wasNear&&(Ut.airlock(),n||s.bursts.emit(u.a.outer[0],We+1.5,u.a.outer[1],{count:14,color:"#e6f3ff",speed:1.4,life:.8,size:.2,grow:.4,gravity:.2})),u.wasNear=p}Hm(s.interiors.list,en?.module);let a=bt?.active.find(u=>u.id==="leak"&&u.phase==="active");for(let u of s.interiors.list){let p=Math.hypot(U.x-u.m.x,U.z-u.m.z)<40;u.animate(tn,i,{near:p,tanks:de.base.tanks,crops:de.base.crops,mold:r.mold,filterClog:r.filterClog,surge:r.surge,breakers:de.base.breakers,rates:s.rates??{solar:0,reactor:0},charging:(s.rates?.power??0)>0,samples:de.base.stuff.samples,clock:hs,earth:vd});let f=a&&a.module===u.id||r.mold&&u.id==="greenhouse"||r.surge&&u.id==="power"||r.filterClog&&u.id==="life";for(let x of u.lights)f?x.color.setRGB(1,.25+Math.abs(Math.sin(tn*4))*.3,.2):x.color.set(x.userData.base??="#"+x.color.getHexString())}if(a){let u=s.interiors.anchors.leak[a.module];u&&!n&&s.bursts.emit(u[0],We+2.2,u[1],{count:2,color:"#f2f8ff",speed:3,life:.7,size:.18,grow:.6,gravity:.5,dir:[-u[0]/Math.hypot(...u)*.4,.2,-u[1]/Math.hypot(...u)*.4],spread:.6}),u&&Math.random()<i*1.2&&Math.hypot(U.x-u[0],U.z-u[1])<18&&Ut.hiss()}if(r.surge&&Math.random()<i*3){let u=Ls("breakers");u&&(s.bursts.emit(u.x-1,We+1.8,u.z,{count:8,color:"#9fe3ff",speed:4,life:.4,size:.06}),Math.hypot(U.x-u.x,U.z-u.z)<15&&Ut.spark())}r.drillJam&&Math.random()<i*4&&s.bursts.emit(Ht.iceDrill.x,s.terrainHeight(Ht.iceDrill.x,Ht.iceDrill.z)+6.8,Ht.iceDrill.z,{count:1,color:"#4a4040",speed:.6,up:1,gravity:.6,life:2.5,size:.5,grow:.9}),s.outdoor.update(tn,i,{sunDir:Ns,earthDir:xd,dust:de.base.dust,storm:t,night:e,drillJam:r.drillJam,comms:r.comms});let l=bt?.active.some(u=>u.id==="solarFlare"&&u.phase==="active"),c=bt?.active.find(u=>u.phase==="active"&&["leak","mold","filterClog","powerSurge"].includes(u.id)),h=c?c.module??{mold:"greenhouse",filterClog:"life",powerSurge:"power"}[c.id]:null,d=l||de.base.emergency?"shelter":h?`help:${h}`:ei>21||ei<5.5?"sleep":"normal";s.crew.update(i,tn,d,n),s.patrol.update(i,e),U.mode!=="drone"&&s.droneBot.patrol(i,tn,{x:0,z:0}),U.mode==="drone"&&s.drone&&s.droneBot.patrol(i,tn,{x:0,z:0})}function qb(i,e){let t=Me;for(let n of t.collectibles){if(n.taken&&n.kind!=="beacon")continue;let s=Math.hypot(U.x-n.x,U.z-n.z);n.hidden&&!n.revealed&&s<9&&(n.revealed=!0);let r=!n.hidden||n.revealed;n.group&&(n.group.visible=r,n.group.rotation.y+=i*.6),n.ring&&n.kind!=="beacon"&&(n.ring.material.opacity=r?.35+Math.sin(tn*3+n.x)*.25:0),n.kind==="beacon"&&n.taken&&(n.ring.material.opacity=tn%1.2<.4?1:.2),n.auto&&!n.taken&&s<n.auto&&(!n.underground||U.underground)&&M0(n)}if(t.hazards.geysers)for(let n of t.hazards.geysers){let r=(tn+n.phase)%14<3;r&&!e&&t.bursts.emit(n.x,t.terrainHeight(n.x,n.z),n.z,{count:4,color:"#3a3030",speed:9,up:1.4,gravity:-3,life:2.2,size:.4,grow:.6,spread:.15});let o=Math.hypot(U.x-n.x,U.z-n.z);r&&o<4&&U.mode==="walk"&&(U.vy=5,U.x+=(U.x-n.x)/(o||1)*.3,U.z+=(U.z-n.z)/(o||1)*.3,U.grounded=!1)}if(t.hazards.rockfall){let n=t.hazards.rockfall;if(n.timer-=i,n.timer<=0){n.timer=10+Math.random()*10;let s=U.x+(Math.random()-.5)*40,r=Math.random()<.5?-1:1,o=r*60,a=new Ce(new si(1+Math.random(),0),new tt({color:"#7a5a4e",flatShading:!0}));a.position.set(s,t.terrainHeight(s,o)+2,o),t.scene.add(a),n.rocks.push({mesh:a,vz:-r*6,life:10}),ht.toast(Nt==="bn"?"\u26A0\uFE0F \u09AA\u09BE\u09A5\u09B0 \u0997\u09A1\u09BC\u09BF\u09AF\u09BC\u09C7 \u09AA\u09A1\u09BC\u099B\u09C7!":"\u26A0\uFE0F Rockfall!"),Ut.thump()}for(let s of n.rocks){s.life-=i;let r=s.mesh.position;r.z+=s.vz*i;let o=t.terrainHeight(r.x,r.z)+1;r.y=Bt(r.y,o,6,i),s.mesh.rotation.x+=s.vz*i*.5,!e&&Math.random()<.3&&t.bursts.emit(r.x,o-.8,r.z,{count:1,color:"#b08068",speed:1,life:1.2,size:.4,grow:.5,gravity:-.2}),Math.hypot(U.x-r.x,U.z-r.z)<1.8&&(U.vy=4,U.grounded=!1,U.z+=Math.sign(s.vz)*.6),Math.abs(s.vz)>0&&Math.abs(r.z)<25&&(s.vz*=.97)}n.rocks=n.rocks.filter(s=>s.life>0?!0:(t.scene.remove(s.mesh),!1))}U.mode!=="drone"&&t.drone&&t.drone.pose(i)}function $b(){Me.drone&&(Me.drone.model.root.visible=U.mode==="drone")}function Yb(i,e){let t=Me;if(!(!bt||!t.home)){for(let n of bt.active){let s=co.get(n.uid);if(s){if(n.id==="supplyDrop"&&s.target){let r=t.landing,o=tn-s.started,[a,l]=s.target,c=t.terrainHeight(a,l);if(!s.landed){let h=ct(o/10,0,1);r.group.visible=!0,r.group.position.set(a,c+(1-h)**2*140,l),r.flame.visible=!0,r.flame.scale.y=.8+Math.random()*.4,r.light.visible=!0,h>.85&&!e&&t.bursts.emit(a,c+.3,l,{count:6,color:"#c48a64",speed:7,up:.15,gravity:-.5,life:1.6,size:.6,grow:.8}),h>=1&&(s.landed=!0,r.flame.visible=!1,r.light.visible=!1,Ut.thump(),ht.toast("\u{1F4E6} "+(Nt==="bn"?"\u09B0\u09B8\u09A6 \u09A8\u09C7\u09AE\u09C7\u099B\u09C7!":"Supplies landed!"))),o<.1&&Ut.rocket()}}if(n.id==="meteorite"&&s.target&&!s.landed){let r=ct((tn-s.started)/3,0,1);s.mesh??=(()=>{let c=un("#ffd27a",6,1);return t.scene.add(c),c})();let[o,a]=s.target,l=t.terrainHeight(o,a);s.mesh.position.set(ot(s.from[0],o,r),ot(s.from[1],l+.5,r),ot(s.from[2],a,r)),e||t.bursts.emit(s.mesh.position.x,s.mesh.position.y,s.mesh.position.z,{count:3,color:"#ffb35a",speed:.5,life:1,size:.5,gravity:0}),r>=1&&(s.landed=!0,s.mesh.scale.setScalar(1.6),Ut.thump(),t.bursts.emit(o,l+.2,a,{count:50,color:"#c48a64",speed:8,up:.5,gravity:-2,life:1.8,size:.5,grow:.6}))}n.id==="meteorite"&&s.landed&&s.mesh&&(s.mesh.material.opacity=.5+Math.sin(tn*4)*.3)}}bt.active.some(n=>n.id==="supplyDrop")||(t.landing.group.visible=!1)}}function Zb(){if(!bt)return null;let i=Me;for(let e of bt.active){let t=y0(e);if(t)return t}if(!i.home){let e=null;for(let t of i.collectibles){if(t.taken||t.hidden&&!t.revealed)continue;let n=Math.hypot(t.x-U.x,t.z-U.z);(!e||n<e.d)&&(e={x:t.x,z:t.z,d:n})}if(e)return e;if(i.objectives?.every(t=>t.done))return{x:i.site.spawn.x,z:i.site.spawn.z}}return null}function Jb(i){if(!i)return null;let e=Me.groundAt(i.x,i.z,U.underground)+1.6;ao.set(i.x,e,i.z).project(kn);let t=fd,n=pd,s=ao.z>1,r=(ao.x*.5+.5)*t,o=(-ao.y*.5+.5)*n;s&&(r=t-r,o=n-60);let a=46,l=175,c=s||r<a||r>t-a-30||o<l||o>n-a-110;r=ct(r,a,t-a-30),o=ct(o,l,n-a-110);let h=c?Math.atan2(o-n/2,r-t/2)+Math.PI/2:Math.PI,d=Math.round(Math.hypot(i.x-U.x,i.z-U.z));return{x:r,y:o,angle:h,edge:c,label:d>3?`${d} m`:""}}function Kb(i,e,t){let n=Me,s,r=U.dist,o=U.pitch,a=U.yaw;if(U.mode==="drive")s=od.set(U.x,U.y+.8,U.z),r=Math.max(r,10),o=Math.max(o,.35);else if(U.mode==="drone"){let d=n.drone.state;s=od.set(d.x,d.y,d.z),a=d.heading,r=7,o=.5}else s=od.set(U.x,U.y+1.4,U.z);en&&(r=Math.min(r,7.5),o=Math.max(o,.85)),U.underground&&(r=Math.min(r,4.2),o=ct(o,.1,.4));let l=Math.cos(o);if(Ei.set(s.x+Math.sin(a)*l*r,s.y+Math.sin(o)*r,s.z+Math.cos(a)*l*r),!en&&!U.underground&&n.collider){let d=n.collider.raycast(s.x,s.z,Ei.x,Ei.z);d<1&&Ei.lerpVectors(s,Ei,Math.max(.25,d-.05))}let c=n.terrainHeight(Ei.x,Ei.z)+.6;U.underground||(Ei.y=Math.max(Ei.y,c));let h=t?1:1-Math.exp(-i*10);kn.position.lengthSq()===0&&kn.position.copy(Ei),kn.position.lerp(Ei,h),fh.lerp(s,h),fh.lengthSq()===0&&fh.copy(s),kn.lookAt(fh)}function jb(){Tn||(Tn={yaw:U.yaw,pitch:.3,dist:6,bar:null},ht.hide(!0),Tn.bar=ht.photo(eS,tS,()=>{Tn=null,ht.hide(!1)}))}function Qb(i,e){Tn.yaw-=e.look[0],Tn.pitch=ct(Tn.pitch+e.look[1],-.2,1.3),Tn.dist=ct(Tn.dist+e.zoom*.6,2.5,25),U.yaw=Tn.yaw,U.pitch=Tn.pitch,U.dist=Tn.dist,Me.kitty.animate(i,0,U.y,0,!1)}function E0(){return Us?Us.render(performance.now()/1e3):qn.render(Me.scene,kn),qn.domElement.toDataURL("image/png")}function eS(){Ut.shutter(),ht.showPicture(E0())}function tS(){let i=new Image;i.onload=()=>{let e=document.createElement("canvas");e.width=i.width+60,e.height=i.height+160;let t=e.getContext("2d");t.fillStyle="#fff6e8",t.fillRect(0,0,e.width,e.height),t.drawImage(i,30,30),t.fillStyle="#14233c",t.font=`bold ${Math.round(e.width/28)}px system-ui`;let n=(()=>{try{return JSON.parse(localStorage.getItem("astro-kitty-online-v1")||"{}").player?.kitty_name}catch{return null}})();t.fillText(`${Nt==="bn"?"\u09B6\u09C1\u09AD\u09C7\u099A\u09CD\u099B\u09BE":"Greetings from"} ${_n[Me.site.id].name[Nt]}!`,40,i.height+85),t.font=`${Math.round(e.width/44)}px system-ui`,t.fillStyle="#6b5f73",t.fillText(`${n?n+" \xB7 ":""}${pn("sol")} ${(de.sols??0)+1} \xB7 ${pn("marsYear")} ${hs.marsYear} \xB7 Astro Kitty \u{1F431}\u{1F680}`,40,i.height+130),ht.showPicture(e.toDataURL("image/png"))},i.src=E0()}await kp(qn,{quality:de.settings.quality});xh(de.site);lo.querySelector(".cx-loading")?.remove();kn.position.set(U.x+6,U.y+5,U.z+8);ht.title(Cb,x0);addEventListener("resize",()=>Md());requestAnimationFrame(i=>{gd=i,S0(i)});Fs.addEventListener("pointerdown",()=>Ut.unlock(),{once:!0});"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js?v=10").catch(()=>{});window.__colony={get world(){return Me},player:U,audio:Ut,get save(){return de},get director(){return bt},start:x0,travel:mh,buy:Sd,setHours(i){ei=i},setQuality(i){de.settings.quality=i,gh=!0,_d()},trigger(i){let e=Wu(bt,i,Math.random,{leakModules:["greenhouse"]});return e.phase="active",v0(e),e},teleport(i,e){U.x=i,U.z=e,U.y=Me.groundAt(i,e)}};
