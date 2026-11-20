/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Zd=0,Nh=1,Jd=2;var qo=1,Pl=2,Ir=3,ps=0,rn=1,xn=2,Wi=0,Pr=1,Xi=2,Uh=3,Fh=4,Kd=5;var zs=100,jd=101,Qd=102,ef=103,tf=104,nf=200,sf=201,rf=202,of=203,Oh=204,Bh=205,af=206,lf=207,cf=208,hf=209,uf=210,df=211,ff=212,pf=213,mf=214,el=0,tl=1,nl=2,pr=3,il=4,sl=5,rl=6,ol=7,zh=0,gf=1,xf=2,bi=0,Yo=1,$o=2,Zo=3,ks=4,Jo=5,Ko=6,jo=7;var kh=300,Hs=301,Lr=302,Ll=303,Dl=304,pi=1e3,fi=1001,al=1002,fn=1003,_f=1004;var Qo=1005;var Cn=1006,Nl=1007;var qi=1008;var Nn=1009,Hh=1010,Gh=1011,Dr=1012,Ul=1013,ai=1014,Zn=1015,_n=1016,Fl=1017,Ol=1018,Gs=1020,Vh=35902,Wh=35899,Xh=1021,qh=1022,li=1023,ki=1026,Yi=1027,Bl=1028,zl=1029,ms=1030,kl=1031;var Hl=1033,ea=33776,ta=33777,na=33778,ia=33779,Gl=35840,Vl=35841,Wl=35842,Xl=35843,ql=36196,Yl=37492,$l=37496,Zl=37488,Jl=37489,sa=37490,Kl=37491,jl=37808,Ql=37809,ec=37810,tc=37811,nc=37812,ic=37813,sc=37814,rc=37815,oc=37816,ac=37817,lc=37818,cc=37819,hc=37820,uc=37821,dc=36492,fc=36494,pc=36495,mc=36283,gc=36284,ra=36285,xc=36286;var co=2300,ll=2301,Ka=2302,Mh=2303,bh=2400,Sh=2401,wh=2402;var yf=3200;var _c=0,vf=1,$i="",Vt="srgb",ho="srgb-linear",uo="linear",wt="srgb";var ja=7680;var Mf=519,bf=512,Sf=513,wf=514,Yh=515,Ef=516,Tf=517,$h=518,Zh=519,Jh=35044;var Kh="300 es",Yn=2e3,mr=2001;function Jm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Km(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Af(){let i=gr("canvas");return i.style.display="block",i}var ud={},xr=null;function fo(...i){let e="THREE."+i.shift();xr?xr("log",e,...i):console.log(e,...i)}function Rf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function et(...i){i=Rf(i);let e="THREE."+i.shift();if(xr)xr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=Rf(i);let e="THREE."+i.shift();if(xr)xr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function so(...i){let e=i.join(" ");e in ud||(ud[e]=!0,et(...i))}function Cf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var If={[el]:el,[nl]:rl,[il]:il,[pr]:sl,[tl]:tl,[rl]:nl,[ol]:ol,[sl]:pr},mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=1234567,ro=Math.PI/180,Ls=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function jh(i,e){return(i%e+e)%e}function jm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Qm(i,e,t){return i!==e?(t-i)/(e-i):0}function oo(i,e,t){return(1-t)*i+t*e}function e0(i,e,t,n){return oo(i,e,1-Math.exp(-t*n))}function t0(i,e=1){return e-Math.abs(jh(i,e*2)-e)}function n0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function i0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function s0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function r0(i,e){return i+Math.random()*(e-i)}function o0(i){return i*(.5-Math.random())}function a0(i){i!==void 0&&(dd=i);let e=dd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function l0(i){return i*ro}function c0(i){return i*Ls}function h0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function u0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function d0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function eu(i,e){if(e.constructor===Float32Array)return i;let t=yc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function tu(i,e){if(e.constructor===Float32Array)return i;let t=yc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var vc={DEG2RAD:ro,RAD2DEG:Ls,generateUUID:Zi,clamp:gt,euclideanModulo:jh,mapLinear:jm,inverseLerp:Qm,lerp:oo,damp:e0,pingpong:t0,smoothstep:n0,smootherstep:i0,randInt:s0,randFloat:r0,randFloatSpread:o0,seededRandom:a0,degToRad:l0,radToDeg:c0,isPowerOfTwo:h0,ceilPowerOfTwo:u0,floorPowerOfTwo:Qh,setQuaternionFromProperEuler:d0,normalize:tu,denormalize:eu},le=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let y=Math.acos(g),v=Math.sin(y);m=Math.sin(m*y)/v,a=Math.sin(a*y)/v,l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kc=new D,fd=new gi,rt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],y=s[1],v=s[4],M=s[7],w=s[2],S=s[5],_=s[8];return r[0]=o*x+a*y+l*w,r[3]=o*g+a*v+l*S,r[6]=o*m+a*M+l*_,r[1]=c*x+h*y+d*w,r[4]=c*g+h*v+d*S,r[7]=c*m+h*M+d*_,r[2]=u*x+f*y+p*w,r[5]=u*g+f*v+p*S,r[8]=u*m+f*M+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return so("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(e,t)),this}rotate(e){return so("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return so("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jc=new rt,pd=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function f0(){let i={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===wt&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(s.r=fr(s.r),s.g=fr(s.g),s.b=fr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ho]:{primaries:e,whitePoint:n,transfer:uo,toXYZ:pd,fromXYZ:md,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:pd,fromXYZ:md,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}var mt=f0();function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $s,cl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$s===void 0&&($s=gr("canvas")),$s.width=e.width,$s.height=e.height;let s=$s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=$s}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},p0=0,_r=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qc(s[o].image)):r.push(Qc(s[o]))}else r=Qc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var m0=0,eh=new D,En=class i extends mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=fi,s=fi,r=Cn,o=qi,a=li,l=Nn,c=i.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Zi(),this.name="",this.source=new _r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pi:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pi:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=kh;En.DEFAULT_ANISOTROPY=1;var Wt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(f+1)/2,w=(m+1)/2,S=(h+u)/4,_=(d+x)/4,b=(p+g)/4;return v>M&&v>w?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=_/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=b/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=b/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hl=class extends mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new En({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new _r(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends hl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},po=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ul=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ct=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,g)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g0,e,x0)}lookAt(e,t,n){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),ss.crossVectors(n,Bn),ss.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),ss.crossVectors(n,Bn)),ss.normalize(),Sa.crossVectors(Bn,ss),s[0]=ss.x,s[4]=Sa.x,s[8]=Bn.x,s[1]=ss.y,s[5]=Sa.y,s[9]=Bn.y,s[2]=ss.z,s[6]=Sa.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],y=n[3],v=n[7],M=n[11],w=n[15],S=s[0],_=s[4],b=s[8],R=s[12],A=s[1],L=s[5],C=s[9],U=s[13],P=s[2],V=s[6],W=s[10],G=s[14],K=s[3],k=s[7],O=s[11],J=s[15];return r[0]=o*S+a*A+l*P+c*K,r[4]=o*_+a*L+l*V+c*k,r[8]=o*b+a*C+l*W+c*O,r[12]=o*R+a*U+l*G+c*J,r[1]=h*S+d*A+u*P+f*K,r[5]=h*_+d*L+u*V+f*k,r[9]=h*b+d*C+u*W+f*O,r[13]=h*R+d*U+u*G+f*J,r[2]=p*S+x*A+g*P+m*K,r[6]=p*_+x*L+g*V+m*k,r[10]=p*b+x*C+g*W+m*O,r[14]=p*R+x*U+g*G+m*J,r[3]=y*S+v*A+M*P+w*K,r[7]=y*_+v*L+M*V+w*k,r[11]=y*b+v*C+M*W+w*O,r[15]=y*R+v*U+M*G+w*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],y=l*f-c*u,v=a*f-c*d,M=a*u-l*d,w=o*f-c*h,S=o*u-l*h,_=o*d-a*h;return t*(x*y-g*v+m*M)-n*(p*y-g*w+m*S)+s*(p*v-x*w+m*_)-r*(p*M-x*S+g*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=t*a-n*o,v=t*l-s*o,M=t*c-r*o,w=n*l-s*a,S=n*c-r*a,_=s*c-r*l,b=h*x-d*p,R=h*g-u*p,A=h*m-f*p,L=d*g-u*x,C=d*m-f*x,U=u*m-f*g,P=y*U-v*C+M*L+w*A-S*R+_*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/P;return e[0]=(a*U-l*C+c*L)*V,e[1]=(s*C-n*U-r*L)*V,e[2]=(x*_-g*S+m*w)*V,e[3]=(u*S-d*_-f*w)*V,e[4]=(l*A-o*U-c*R)*V,e[5]=(t*U-s*A+r*R)*V,e[6]=(g*M-p*_-m*v)*V,e[7]=(h*_-u*M+f*v)*V,e[8]=(o*C-a*A+c*b)*V,e[9]=(n*A-t*C-r*b)*V,e[10]=(p*S-x*M+m*y)*V,e[11]=(d*M-h*S-f*y)*V,e[12]=(a*R-o*L-l*b)*V,e[13]=(t*L-n*R+s*b)*V,e[14]=(x*v-p*w-g*y)*V,e[15]=(h*w-d*v+u*y)*V,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,g=o*d,m=a*d,y=l*c,v=l*h,M=l*d,w=n.x,S=n.y,_=n.z;return s[0]=(1-(x+m))*w,s[1]=(f+M)*w,s[2]=(p-v)*w,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(u+m))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(p+v)*_,s[9]=(g-y)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Zs.set(s[0],s[1],s[2]).length(),a=Zs.set(s[4],s[5],s[6]).length(),l=Zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ni.copy(this);let c=1/o,h=1/a,d=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,t.setFromRotationMatrix(ni),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Yn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Yn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===mr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Yn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Yn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===mr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zs=new D,ni=new Ct,g0=new D(0,0,0),x0=new D(1,1,1),ss=new D,Sa=new D,Bn=new D,gd=new Ct,xd=new gi,Hi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xd.setFromEuler(this),this.setFromQuaternion(xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_0=0,_d=new D,Js=new gi,Di=new Ct,wa=new D,$r=new D,y0=new D,v0=new gi,yd=new D(1,0,0),vd=new D(0,1,0),Md=new D(0,0,1),bd={type:"added"},M0={type:"removed"},Ks={type:"childadded",child:null},th={type:"childremoved",child:null},Et=class i extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Hi,n=new gi,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new rt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(yd,e)}rotateY(e){return this.rotateOnAxis(vd,e)}rotateZ(e){return this.rotateOnAxis(Md,e)}translateOnAxis(e,t){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yd,e)}translateY(e){return this.translateOnAxis(vd,e)}translateZ(e){return this.translateOnAxis(Md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt($r,wa,this.up):Di.lookAt(wa,$r,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Di),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bd),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(M0),th.child=e,this.dispatchEvent(th),th.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bd),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,v0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Et.DEFAULT_UP=new D(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ne=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},b0={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function nh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=jh(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=nh(o,r,e+1/3),this.g=nh(o,r,e),this.b=nh(o,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=Pf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return mt.workingToColorSpace(wn.copy(this),e),Math.round(gt(wn.r*255,0,255))*65536+Math.round(gt(wn.g*255,0,255))*256+Math.round(gt(wn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(wn.copy(this),t);let n=wn.r,s=wn.g,r=wn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Vt){mt.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,s=wn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(Ea);let n=oo(rs.h,Ea.h,t),s=oo(rs.s,Ea.s,t),r=oo(rs.l,Ea.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Be;Be.NAMES=Pf;var go=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xo=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ii=new D,Ni=new D,ih=new D,Ui=new D,js=new D,Qs=new D,Sd=new D,sh=new D,rh=new D,oh=new D,ah=new Wt,lh=new Wt,ch=new Wt,Bi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ii.subVectors(s,t),Ni.subVectors(n,t),ih.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(Ni),l=ii.dot(ih),c=Ni.dot(Ni),h=Ni.dot(ih),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ah.setScalar(0),lh.setScalar(0),ch.setScalar(0),ah.fromBufferAttribute(e,t),lh.fromBufferAttribute(e,n),ch.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ah,r.x),o.addScaledVector(lh,r.y),o.addScaledVector(ch,r.z),o}static isFrontFacing(e,t,n,s){return ii.subVectors(n,t),Ni.subVectors(e,t),ii.cross(Ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ii.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;js.subVectors(s,n),Qs.subVectors(r,n),sh.subVectors(e,n);let l=js.dot(sh),c=Qs.dot(sh);if(l<=0&&c<=0)return t.copy(n);rh.subVectors(e,s);let h=js.dot(rh),d=Qs.dot(rh);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(js,o);oh.subVectors(e,r);let f=js.dot(oh),p=Qs.dot(oh);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Qs,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Sd.subVectors(r,s),a=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Sd,a);let m=1/(g+x+u);return o=x*m,a=u*m,t.copy(n).addScaledVector(js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),Aa.subVectors(this.max,Zr),er.subVectors(e.a,Zr),tr.subVectors(e.b,Zr),nr.subVectors(e.c,Zr),os.subVectors(tr,er),as.subVectors(nr,tr),As.subVectors(er,nr);let t=[0,-os.z,os.y,0,-as.z,as.y,0,-As.z,As.y,os.z,0,-os.x,as.z,0,-as.x,As.z,0,-As.x,-os.y,os.x,0,-as.y,as.x,0,-As.y,As.x,0];return!hh(t,er,tr,nr,Aa)||(t=[1,0,0,0,1,0,0,0,1],!hh(t,er,tr,nr,Aa))?!1:(Ra.crossVectors(os,as),t=[Ra.x,Ra.y,Ra.z],hh(t,er,tr,nr,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fi=[new D,new D,new D,new D,new D,new D,new D,new D],si=new D,Ta=new xi,er=new D,tr=new D,nr=new D,os=new D,as=new D,As=new D,Zr=new D,Aa=new D,Ra=new D,Rs=new D;function hh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Rs.fromArray(i,r);let a=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),l=e.dot(Rs),c=t.dot(Rs),h=n.dot(Rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qt=new D,Ca=new le,S0=0,Ln=class extends mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:S0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jh,this.updateRanges=[],this.gpuType=Zn,this.version=0,this._normalizationScale=e!==void 0?yc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):eu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tu(e,this.array)}};var _o=class extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yo=class extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}},w0=new xi,Jr=new D,uh=new D,Gi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):w0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);let t=Jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Jr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(uh)),this.expandByPoint(Jr.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},E0=0,qn=new Ct,dh=new Et,ir=new D,zn=new xi,Kr=new xi,dn=new D,Ut=class i extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jm(e)?yo:_o)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(zn.min,Kr.min),zn.expandByPoint(dn),dn.addVectors(zn.max,Kr.max),zn.expandByPoint(dn)):(zn.expandByPoint(Kr.min),zn.expandByPoint(Kr.max))}zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(e,c),dn.add(ir)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new D,l[R]=new D;let h=new D,d=new D,u=new D,f=new le,p=new le,x=new le,g=new D,m=new D;function y(R,A,L){c[R]=c[A]=c[L]=1,h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,L),d.sub(h),u.sub(h),p.sub(f),x.sub(f);let C=1/(p.x*x.y-x.x*p.y);isFinite(C)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(C),a[R].add(g),a[A].add(g),a[L].add(g),l[R].add(m),l[A].add(m),l[L].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,A=v.length;R<A;++R){let L=v[R],C=L.start,U=L.count;for(let P=C,V=C+U;P<V;P+=3)y(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new D,w=new D,S=new D,_=new D;function b(R){S.fromBufferAttribute(s,R),_.copy(S);let A=a[R];M.copy(A),M.sub(S.multiplyScalar(S.dot(A))).normalize(),w.crossVectors(_,A);let C=w.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,C)}for(let R=0,A=n.count;R<A;++R)c[R]&&b(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Ln(u,h,d)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},vo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jh,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=wd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=wd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function wd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Zi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Rn=new D,vr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?yc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){fo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):eu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tu(e,this.data.array)}},fh=new D,T0=new D,A0=new rt,ri=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fh.subVectors(n,t).cross(T0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(fh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||A0.getNormalMatrix(e),s=this.coplanarPoint(fh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},R0=0,_i=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Pr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Bh,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ri().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},cs=class extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sr,jr=new D,rr=new D,or=new D,ar=new le,Qr=new le,Lf=new Ct,Ia=new D,eo=new D,Pa=new D,Ed=new le,ph=new le,Td=new le,Ds=class extends Et{constructor(e=new cs){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new Ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vo(t,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new vr(n,3,0,!1)),sr.setAttribute("uv",new vr(n,2,3,!1))}this.geometry=sr,this.material=e,this.center=new le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),Lf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-or.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;La(Ia.set(-.5,-.5,0),or,o,rr,s,r),La(eo.set(.5,-.5,0),or,o,rr,s,r),La(Pa.set(.5,.5,0),or,o,rr,s,r),Ed.set(0,0),ph.set(1,0),Td.set(1,1);let a=e.ray.intersectTriangle(Ia,eo,Pa,!1,jr);if(a===null&&(La(eo.set(-.5,.5,0),or,o,rr,s,r),ph.set(0,1),a=e.ray.intersectTriangle(Ia,Pa,eo,!1,jr),a===null))return;let l=e.ray.origin.distanceTo(jr);l<e.near||l>e.far||t.push({distance:l,point:jr.clone(),uv:Bi.getInterpolation(jr,Ia,eo,Pa,Ed,ph,Td,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function La(i,e,t,n,s,r){ar.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Qr.x=r*ar.x-s*ar.y,Qr.y=s*ar.x+r*ar.y):Qr.copy(ar),i.copy(e),i.x+=Qr.x,i.y+=Qr.y,i.applyMatrix4(Lf)}var Oi=new D,mh=new D,Da=new D,Na=new D,Mo=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){mh.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),Na.copy(this.origin).sub(mh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Da),a=Na.dot(this.direction),l=-Na.dot(Da),c=Na.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(mh).addScaledVector(Da,u),f}intersectSphere(e,t){if(e.radius<0)return null;Oi.subVectors(e.center,this.origin);let n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,g=t.z-o.z,m=n.x-o.x,y=n.y-o.y,v=n.z-o.z,M=Math.abs(l),w=Math.abs(c),S=Math.abs(h),_,b,R,A,L,C,U,P,V,W,G,K;if(M>=w&&M>=S?(R=l,C=d,V=p,K=m,l>=0?(_=c,b=h,A=u,L=f,U=x,P=g,W=y,G=v):(_=h,b=c,A=f,L=u,U=g,P=x,W=v,G=y)):w>=S?(R=c,C=u,V=x,K=y,c>=0?(_=h,b=l,A=f,L=d,U=g,P=p,W=v,G=m):(_=l,b=h,A=d,L=f,U=p,P=g,W=m,G=v)):(R=h,C=f,V=g,K=v,h>=0?(_=l,b=c,A=d,L=u,U=p,P=x,W=m,G=y):(_=c,b=l,A=u,L=d,U=x,P=p,W=y,G=m)),R===0)return null;let k=_/R,O=b/R,J=1/R,ce=A-k*C,_e=L-O*C,$=U-k*V,ye=P-O*V,Ce=W-k*K,Ge=G-O*K,pe=Ce*ye-Ge*$,Ve=ce*Ge-_e*Ce,St=$*_e-ye*ce;if(s){if(pe<0||Ve<0||St<0)return null}else if((pe<0||Ve<0||St<0)&&(pe>0||Ve>0||St>0))return null;let ze=pe+Ve+St;if(ze===0)return null;let at=J*(pe*C+Ve*V+St*K);return(ze>0?at<0:at>0)?null:this.at(at/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ad=new Ct,Cs=new Mo,Ua=new Gi,Rd=new D,Fa=new D,Oa=new D,Ba=new D,gh=new D,za=new D,Cd=new D,ka=new D,Re=class extends Et{constructor(e=new Ut,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){za.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(gh.fromBufferAttribute(d,e),o?za.addScaledVector(gh,h):za.addScaledVector(gh.sub(t),h))}t.add(za)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!(Ua.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Ua,Rd)===null||Cs.origin.distanceToSquared(Rd)>(e.far-e.near)**2))&&(Ad.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(Ad),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,w=v;M<w;M+=3){let S=a.getX(M),_=a.getX(M+1),b=a.getX(M+2);s=Ha(this,m,e,n,c,h,d,S,_,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=a.getX(g),v=a.getX(g+1),M=a.getX(g+2);s=Ha(this,o,e,n,c,h,d,y,v,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,w=v;M<w;M+=3){let S=M,_=M+1,b=M+2;s=Ha(this,m,e,n,c,h,d,S,_,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=g,v=g+1,M=g+2;s=Ha(this,o,e,n,c,h,d,y,v,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function C0(i,e,t,n,s,r,o,a){let l;if(e.side===rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ps,a),l===null)return null;ka.copy(a),ka.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ka);return c<t.near||c>t.far?null:{distance:c,point:ka.clone(),object:i}}function Ha(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Fa),i.getVertexPosition(l,Oa),i.getVertexPosition(c,Ba);let h=C0(i,e,t,n,Fa,Oa,Ba,Cd);if(h){let d=new D;Bi.getBarycoord(Cd,Fa,Oa,Ba,d),s&&(h.uv=Bi.getInterpolatedAttribute(s,a,l,c,d,new le)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,a,l,c,d,new le)),o&&(h.normal=Bi.getInterpolatedAttribute(o,a,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new D,materialIndex:0};Bi.getNormal(Fa,Oa,Ba,u.normal),h.face=u,h.barycoord=d}return h}var bo=class extends En{constructor(e=null,t=1,n=1,s,r,o,a,l,c=fn,h=fn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mr=class extends Ln{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},lr=new Ct,Id=new Ct,Ga=[],Pd=new xi,I0=new Ct,to=new Re,no=new Gi,kn=class extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,I0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),Pd.copy(e.boundingBox).applyMatrix4(lr),this.boundingBox.union(Pd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),no.copy(e.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(no)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(to.geometry=this.geometry,to.material=this.material,to.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(n),e.ray.intersectsSphere(no)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,lr),Id.multiplyMatrices(n,lr),to.matrixWorld=Id,to.raycast(e,Ga);for(let o=0,a=Ga.length;o<a;o++){let l=Ga[o];l.instanceId=r,l.object=this,t.push(l)}Ga.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bo(new Float32Array(s*this.count),s,this.count,Bl,Zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Is=new Gi,P0=new le(.5,.5),Va=new D,hs=class{constructor(e=new ri,t=new ri,n=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],y=r[12],v=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-o,f-h,m-p,w-y).normalize(),s[1].setComponents(c+o,f+h,m+p,w+y).normalize(),s[2].setComponents(c+a,f+d,m+x,w+v).normalize(),s[3].setComponents(c-a,f-d,m-x,w-v).normalize(),n)s[4].setComponents(l,u,g,M).normalize(),s[5].setComponents(c-l,f-u,m-g,w-M).normalize();else if(s[4].setComponents(c-l,f-u,m-g,w-M).normalize(),t===Yn)s[5].setComponents(c+l,f+u,m+g,w+M).normalize();else if(t===mr)s[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);let t=P0.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Va.x=s.normal.x>0?e.max.x:e.min.x,Va.y=s.normal.y>0?e.max.y:e.min.y,Va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ld=new Ct,dl=class i{constructor(){this.coordinateSystem=Yn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ld.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new hs),n[s].setFromProjectionMatrix(Ld,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new hs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ns=class extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dd=new Ct,Eh=new Mo,Wa=new Gi,Xa=new D,yi=class extends Et{constructor(e=new Ut,t=new Ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;Dd.copy(s).invert(),Eh.copy(e.ray).applyMatrix4(Dd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let g=c.getX(p);Xa.fromBufferAttribute(d,g),Nd(Xa,g,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)Xa.fromBufferAttribute(d,p),Nd(Xa,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nd(i,e,t,n,s,r,o){let a=Eh.distanceSqToPoint(i);if(a<t){let l=new D;Eh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var So=class extends En{constructor(e=[],t=Hs,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dn=class extends En{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vi=class extends En{constructor(e,t,n=ai,s,r,o,a=fn,l=fn,c,h=ki,d=1){if(h!==ki&&h!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wo=class extends Vi{constructor(e,t=ai,n=Hs,s,r,o=fn,a=fn,l,c=ki){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Eo=class extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zt=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(d,2));function p(x,g,m,y,v,M,w,S,_,b,R){let A=M/_,L=w/b,C=M/2,U=w/2,P=S/2,V=_+1,W=b+1,G=0,K=0,k=new D;for(let O=0;O<W;O++){let J=O*L-U;for(let ce=0;ce<V;ce++){let _e=ce*A-C;k[x]=_e*y,k[g]=J*v,k[m]=P,c.push(k.x,k.y,k.z),k[x]=0,k[g]=0,k[m]=S>0?1:-1,h.push(k.x,k.y,k.z),d.push(ce/_),d.push(1-O/b),G+=1}}for(let O=0;O<b;O++)for(let J=0;J<_;J++){let ce=u+J+V*O,_e=u+J+V*(O+1),$=u+(J+1)+V*(O+1),ye=u+(J+1)+V*O;l.push(ce,_e,ye),l.push(_e,$,ye),K+=6}a.addGroup(f,K,R),f+=K,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var To=class i extends Ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new D,h=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},bt=class i extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=n/2,m=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(f,2));function y(){let M=new D,w=new D,S=0,_=(t-e)/n;for(let b=0;b<=r;b++){let R=[],A=b/r,L=A*(t-e)+e;for(let C=0;C<=s;C++){let U=C/s,P=U*l+a,V=Math.sin(P),W=Math.cos(P);w.x=L*V,w.y=-A*n+g,w.z=L*W,d.push(w.x,w.y,w.z),M.set(V,_,W).normalize(),u.push(M.x,M.y,M.z),f.push(U,1-A),R.push(p++)}x.push(R)}for(let b=0;b<s;b++)for(let R=0;R<r;R++){let A=x[R][b],L=x[R+1][b],C=x[R+1][b+1],U=x[R][b+1];(e>0||R!==0)&&(h.push(A,L,U),S+=3),(t>0||R!==r-1)&&(h.push(L,C,U),S+=3)}c.addGroup(m,S,0),m+=S}function v(M){let w=p,S=new le,_=new D,b=0,R=M===!0?e:t,A=M===!0?1:-1;for(let C=1;C<=s;C++)d.push(0,g*A,0),u.push(0,A,0),f.push(.5,.5),p++;let L=p;for(let C=0;C<=s;C++){let P=C/s*l+a,V=Math.cos(P),W=Math.sin(P);_.x=R*W,_.y=g*A,_.z=R*V,d.push(_.x,_.y,_.z),u.push(0,A,0),S.x=V*.5+.5,S.y=W*.5*A+.5,f.push(S.x,S.y),p++}for(let C=0;C<s;C++){let U=w+C,P=L+C;M===!0?h.push(P,P+1,U):h.push(P+1,P,U),b+=3}c.addGroup(m,b,M===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vi=class i extends bt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ao=class i extends Ut{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new D,M=new D,w=new D;for(let S=0;S<t.length;S+=3)f(t[S+0],v),f(t[S+1],M),f(t[S+2],w),l(v,M,w,y)}function l(y,v,M,w){let S=w+1,_=[];for(let b=0;b<=S;b++){_[b]=[];let R=y.clone().lerp(M,b/S),A=v.clone().lerp(M,b/S),L=S-b;for(let C=0;C<=L;C++)C===0&&b===S?_[b][C]=R:_[b][C]=R.clone().lerp(A,C/L)}for(let b=0;b<S;b++)for(let R=0;R<2*(S-b)-1;R++){let A=Math.floor(R/2);R%2===0?(u(_[b][A+1]),u(_[b+1][A]),u(_[b][A])):(u(_[b][A+1]),u(_[b+1][A+1]),u(_[b+1][A]))}}function c(y){let v=new D;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(y),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let y=new D;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let M=g(y)/2/Math.PI+.5,w=m(y)/Math.PI+.5;o.push(M,1-w)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let v=o[y+0],M=o[y+2],w=o[y+4],S=Math.max(v,M,w),_=Math.min(v,M,w);S>.9&&_<.1&&(v<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,v){let M=y*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function p(){let y=new D,v=new D,M=new D,w=new D,S=new le,_=new le,b=new le;for(let R=0,A=0;R<r.length;R+=9,A+=6){y.set(r[R+0],r[R+1],r[R+2]),v.set(r[R+3],r[R+4],r[R+5]),M.set(r[R+6],r[R+7],r[R+8]),S.set(o[A+0],o[A+1]),_.set(o[A+2],o[A+3]),b.set(o[A+4],o[A+5]),w.copy(y).add(v).add(M).divideScalar(3);let L=g(w);x(S,A+0,y,L),x(_,A+2,v,L),x(b,A+4,M,L)}}function x(y,v,M,w){w<0&&y.x===1&&(o[v]=y.x-1),M.x===0&&M.z===0&&(o[v]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},$n=class i extends Ao{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],o=[],a=new D,l=new Ct;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(gt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(gt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},br=class extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fl=class extends br{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Ud=new D,Fd=new D,xh=new nu,_h=new nu,yh=new nu,Sr=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Fd.subVectors(s[0],s[1]).add(s[0]),c=Fd);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ud.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ud),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),xh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),_h.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),yh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(xh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),_h.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),yh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(xh.calc(l),_h.calc(l),yh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Od(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function L0(i,e){let t=1-i;return t*t*e}function D0(i,e){return 2*(1-i)*i*e}function N0(i,e){return i*i*e}function ao(i,e,t,n){return L0(i,e)+D0(i,t)+N0(i,n)}function U0(i,e){let t=1-i;return t*t*t*e}function F0(i,e){let t=1-i;return 3*t*t*i*e}function O0(i,e){return 3*(1-i)*i*i*e}function B0(i,e){return i*i*i*e}function lo(i,e,t,n,s){return U0(i,e)+F0(i,t)+O0(i,n)+B0(i,s)}var Ro=class extends Hn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lo(e,s.x,r.x,o.x,a.x),lo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends Hn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lo(e,s.x,r.x,o.x,a.x),lo(e,s.y,r.y,o.y,a.y),lo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Co=class extends Hn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends Hn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends Hn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ao(e,s.x,r.x,o.x),ao(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends Hn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ao(e,s.x,r.x,o.x),ao(e,s.y,r.y,o.y),ao(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Od(a,l.x,c.x,h.x,d.x),Od(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},gl=Object.freeze({__proto__:null,ArcCurve:fl,CatmullRomCurve3:Sr,CubicBezierCurve:Ro,CubicBezierCurve3:pl,EllipseCurve:br,LineCurve:Co,LineCurve3:ml,QuadraticBezierCurve:Io,QuadraticBezierCurve3:Po,SplineCurve:Lo}),xl=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new gl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Do=class extends xl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Co(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Io(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ro(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Lo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new br(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},wr=class extends Do{constructor(e){super(e),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Do().fromJSON(s))}return this}};function z0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Df(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=W0(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=i[u],p=i[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return No(r,o,t,a,l,c,0),o}function Df(i,e,t,n,s){let r;if(s===tg(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Bd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Bd(o/n|0,i[o],i[o+1],r);return r&&Er(r,r.next)&&(Fo(r),r=r.next),r}function Us(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Er(t,t.next)||qt(t.prev,t,t.next)===0)){if(Fo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function No(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Z0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?H0(i,n,s,r):k0(i)){e.push(l.i,i.i,c.i),Fo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=G0(Us(i),e),No(i,e,t,n,s,r,2)):o===2&&V0(i,e,t,n,s,r):No(Us(i),e,t,n,s,r,1);break}}}function k0(i){let e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&io(s,a,r,l,o,c,p.x,p.y)&&qt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function H0(i,e,t,n){let s=i.prev,r=i,o=i.next;if(qt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),x=Math.max(a,l,c),g=Math.max(h,d,u),m=Th(f,p,e,t,n),y=Th(x,g,e,t,n),v=i.prevZ,M=i.nextZ;for(;v&&v.z>=m&&M&&M.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&io(a,h,l,d,c,u,v.x,v.y)&&qt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&io(a,h,l,d,c,u,M.x,M.y)&&qt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&io(a,h,l,d,c,u,v.x,v.y)&&qt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&io(a,h,l,d,c,u,M.x,M.y)&&qt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function G0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Er(n,s)&&Uf(n,t,t.next,s)&&Uo(n,s)&&Uo(s,n)&&(e.push(n.i,t.i,s.i),Fo(t),Fo(t.next),t=i=s),t=t.next}while(t!==i);return Us(t)}function V0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&j0(o,a)){let l=Ff(o,a);o=Us(o,o.next),l=Us(l,l.next),No(o,e,t,n,s,r,0),No(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function W0(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Df(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(K0(c))}s.sort(X0);for(let r=0;r<s.length;r++)t=q0(s[r],t);return t}function X0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function q0(i,e){let t=Y0(i,e);if(!t)return e;let n=Ff(t,i);return Us(n,n.next),Us(t,t.next)}function Y0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Er(i,t))return t;do{if(Er(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Nf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Uo(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&$0(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function $0(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function Z0(i,e,t,n){let s=i;do s.z===0&&(s.z=Th(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,J0(s)}function J0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Th(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function K0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Nf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function io(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Nf(i,e,t,n,s,r,o,a)}function j0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Q0(i,e)&&(Uo(i,e)&&Uo(e,i)&&eg(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||Er(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Er(i,e){return i.x===e.x&&i.y===e.y}function Uf(i,e,t,n){let s=Ya(qt(i,e,t)),r=Ya(qt(i,e,n)),o=Ya(qt(t,n,i)),a=Ya(qt(t,n,e));return!!(s!==r&&o!==a||s===0&&qa(i,t,e)||r===0&&qa(i,n,e)||o===0&&qa(t,i,n)||a===0&&qa(t,e,n))}function qa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ya(i){return i>0?1:i<0?-1:0}function Q0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Uf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Uo(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function eg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ff(i,e){let t=Ah(i.i,i.x,i.y),n=Ah(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Bd(i,e,t,n){let s=Ah(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ah(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Rh=class{static triangulate(e,t,n=2){return z0(e,t,n)}},Ps=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];zd(e),kd(n,e);let o=e.length;t.forEach(zd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,kd(n,t[l]);let a=Rh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function zd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function kd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Oo=class i extends Ut{constructor(e=new wr([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:ng,v,M=!1,w,S,_,b;if(m){v=m.getSpacedPoints(h),M=!0,u=!1;let X=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,X),S=new D,_=new D,b=new D}u||(g=0,f=0,p=0,x=0);let R=a.extractPoints(c),A=R.shape,L=R.holes;if(!Ps.isClockWise(A)){A=A.reverse();for(let X=0,Q=L.length;X<Q;X++){let se=L[X];Ps.isClockWise(se)&&(L[X]=se.reverse())}}function U(X){let se=10000000000000001e-36,me=X[0];for(let ue=1;ue<=X.length;ue++){let Xe=ue%X.length,Le=X[Xe],st=Le.x-me.x,qe=Le.y-me.y,xt=st*st+qe*qe,H=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(me.x),Math.abs(me.y)),Kt=se*H*H;if(xt<=Kt){X.splice(Xe,1),ue--;continue}me=Le}}U(A),L.forEach(U);let P=L.length,V=A;for(let X=0;X<P;X++){let Q=L[X];A=A.concat(Q)}function W(X,Q,se){return Q||tt("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(Q,se)}let G=A.length;function K(X,Q,se){let me,ue,Xe,Le=X.x-Q.x,st=X.y-Q.y,qe=se.x-X.x,xt=se.y-X.y,H=Le*Le+st*st,Kt=Le*xt-st*qe;if(Math.abs(Kt)>Number.EPSILON){let pt=Math.sqrt(H),Ot=Math.sqrt(qe*qe+xt*xt),Ee=Q.x-st/pt,Yt=Q.y+Le/pt,Ke=se.x-xt/Ot,it=se.y+qe/Ot,I=((Ke-Ee)*xt-(it-Yt)*qe)/(Le*xt-st*qe);me=Ee+Le*I-X.x,ue=Yt+st*I-X.y;let E=me*me+ue*ue;if(E<=2)return new le(me,ue);Xe=Math.sqrt(E/2)}else{let pt=!1;Le>Number.EPSILON?qe>Number.EPSILON&&(pt=!0):Le<-Number.EPSILON?qe<-Number.EPSILON&&(pt=!0):Math.sign(st)===Math.sign(xt)&&(pt=!0),pt?(me=-st,ue=Le,Xe=Math.sqrt(H)):(me=Le,ue=st,Xe=Math.sqrt(H/2))}return new le(me/Xe,ue/Xe)}let k=[];for(let X=0,Q=V.length,se=Q-1,me=X+1;X<Q;X++,se++,me++)se===Q&&(se=0),me===Q&&(me=0),k[X]=K(V[X],V[se],V[me]);let O=[],J,ce=k.concat();for(let X=0,Q=P;X<Q;X++){let se=L[X];J=[];for(let me=0,ue=se.length,Xe=ue-1,Le=me+1;me<ue;me++,Xe++,Le++)Xe===ue&&(Xe=0),Le===ue&&(Le=0),J[me]=K(se[me],se[Xe],se[Le]);O.push(J),ce=ce.concat(J)}let _e;if(g===0)_e=Ps.triangulateShape(V,L);else{let X=[],Q=[];for(let se=0;se<g;se++){let me=se/g,ue=f*Math.cos(me*Math.PI/2),Xe=p*Math.sin(me*Math.PI/2)+x;for(let Le=0,st=V.length;Le<st;Le++){let qe=W(V[Le],k[Le],Xe);Ve(qe.x,qe.y,-ue),me===0&&X.push(qe)}for(let Le=0,st=P;Le<st;Le++){let qe=L[Le];J=O[Le];let xt=[];for(let H=0,Kt=qe.length;H<Kt;H++){let pt=W(qe[H],J[H],Xe);Ve(pt.x,pt.y,-ue),me===0&&xt.push(pt)}me===0&&Q.push(xt)}}_e=Ps.triangulateShape(X,Q)}let $=_e.length,ye=p+x;for(let X=0;X<G;X++){let Q=u?W(A[X],ce[X],ye):A[X];M?(_.copy(w.normals[0]).multiplyScalar(Q.x),S.copy(w.binormals[0]).multiplyScalar(Q.y),b.copy(v[0]).add(_).add(S),Ve(b.x,b.y,b.z)):Ve(Q.x,Q.y,0)}for(let X=1;X<=h;X++)for(let Q=0;Q<G;Q++){let se=u?W(A[Q],ce[Q],ye):A[Q];M?(_.copy(w.normals[X]).multiplyScalar(se.x),S.copy(w.binormals[X]).multiplyScalar(se.y),b.copy(v[X]).add(_).add(S),Ve(b.x,b.y,b.z)):Ve(se.x,se.y,d/h*X)}for(let X=g-1;X>=0;X--){let Q=X/g,se=f*Math.cos(Q*Math.PI/2),me=p*Math.sin(Q*Math.PI/2)+x;for(let ue=0,Xe=V.length;ue<Xe;ue++){let Le=W(V[ue],k[ue],me);Ve(Le.x,Le.y,d+se)}for(let ue=0,Xe=L.length;ue<Xe;ue++){let Le=L[ue];J=O[ue];for(let st=0,qe=Le.length;st<qe;st++){let xt=W(Le[st],J[st],me);M?Ve(xt.x,xt.y+v[h-1].y,v[h-1].x+se):Ve(xt.x,xt.y,d+se)}}}Ce(),Ge();function Ce(){let X=s.length/3;if(u){let Q=0,se=G*Q;for(let me=0;me<$;me++){let ue=_e[me];St(ue[2]+se,ue[1]+se,ue[0]+se)}Q=h+g*2,se=G*Q;for(let me=0;me<$;me++){let ue=_e[me];St(ue[0]+se,ue[1]+se,ue[2]+se)}}else{for(let Q=0;Q<$;Q++){let se=_e[Q];St(se[2],se[1],se[0])}for(let Q=0;Q<$;Q++){let se=_e[Q];St(se[0]+G*h,se[1]+G*h,se[2]+G*h)}}n.addGroup(X,s.length/3-X,0)}function Ge(){let X=s.length/3,Q=0;pe(V,Q),Q+=V.length;for(let se=0,me=L.length;se<me;se++){let ue=L[se];pe(ue,Q),Q+=ue.length}n.addGroup(X,s.length/3-X,1)}function pe(X,Q){let se=X.length;for(;--se>=0;){let me=se,ue=se-1;ue<0&&(ue=X.length-1);for(let Xe=0,Le=h+g*2;Xe<Le;Xe++){let st=G*Xe,qe=G*(Xe+1),xt=Q+me+st,H=Q+ue+st,Kt=Q+ue+qe,pt=Q+me+qe;ze(xt,H,Kt,pt)}}}function Ve(X,Q,se){l.push(X),l.push(Q),l.push(se)}function St(X,Q,se){at(X),at(Q),at(se);let me=s.length/3,ue=y.generateTopUV(n,s,me-3,me-2,me-1);ee(ue[0]),ee(ue[1]),ee(ue[2])}function ze(X,Q,se,me){at(X),at(Q),at(me),at(Q),at(se),at(me);let ue=s.length/3,Xe=y.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);ee(Xe[0]),ee(Xe[1]),ee(Xe[3]),ee(Xe[1]),ee(Xe[2]),ee(Xe[3])}function at(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function ee(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ig(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new gl[s.type]().fromJSON(s)),new i(n,e.options)}},ng={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-d),new le(u,1-p),new le(x,1-m)]:[new le(a,1-l),new le(h,1-d),new le(f,1-p),new le(g,1-m)]}};function ig(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Mi=class i extends Ao{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var en=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let y=m*u-o;for(let v=0;v<c;v++){let M=v*d-r;p.push(M,-y,0),x.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let v=y+c*m,M=y+c*(m+1),w=y+1+c*(m+1),S=y+1+c*m;f.push(v,M,S),f.push(M,w,S)}this.setIndex(f),this.setAttribute("position",new Je(p,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ft=class i extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new D,u=new D,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let y=[],v=m/n,M=o+v*a,w=e*Math.cos(M),S=Math.sqrt(e*e-w*w),_=0;m===0&&o===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){let R=b/t,A=s+R*r;d.x=-S*Math.cos(A),d.y=w,d.z=S*Math.sin(A),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(R+_,1-v),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let v=h[m][y+1],M=h[m][y],w=h[m+1][y],S=h[m+1][y+1];(m!==0||o>0)&&f.push(v,M,S),(m!==n-1||l<Math.PI)&&f.push(M,w,S)}this.setIndex(f),this.setAttribute("position",new Je(p,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var oi=class i extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new D,f=new D,p=new D;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let m=0;m<=s;m++){let y=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,v=(s+1)*(x-1)+g,M=(s+1)*x+g;l.push(m,y,M),l.push(y,v,M)}this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Bo=class i extends Ut{constructor(e=new Po(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new le,h=new D,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(f,2));function x(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),y(),m()}function g(v){h=e.getPointAt(v/t,h);let M=o.normals[v],w=o.binormals[v];for(let S=0;S<=s;S++){let _=S/s*Math.PI*2,b=Math.sin(_),R=-Math.cos(_);l.x=R*M.x+b*w.x,l.y=R*M.y+b*w.y,l.z=R*M.z+b*w.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=t;v++)for(let M=1;M<=s;M++){let w=(s+1)*(v-1)+(M-1),S=(s+1)*v+(M-1),_=(s+1)*v+M,b=(s+1)*(v-1)+M;p.push(w,S,b),p.push(S,_,b)}}function y(){for(let v=0;v<=t;v++)for(let M=0;M<=s;M++)c.x=v/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new gl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Vs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Hd(s))s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Hd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=Vs(i[t]);for(let s in n)e[s]=n[s]}return e}function Hd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function sg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function iu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var Ji={clone:Vs,merge:Tn},rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kt=class extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rg,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=sg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Tr=class extends kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nt=class extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var _l=class extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yl=class extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function cr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $a(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var us=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vl=class extends us{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sh:r=e,a=2*t-n;break;case wh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sh:o=e,l=2*n-t;break;case wh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,y=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,v=(-1-f)*g+(1.5+f)*x+.5*p,M=f*g-f*x;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+y*o[c+w]+v*o[l+w]+M*o[d+w];return r}},Ml=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},bl=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Sl=class extends us{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=f*u+p*2,y=d[m],v=d[m+1],M=e*u+p*2,w=h[M],S=h[M+1],_=lg(n,t,y,w,s);r[p]=Of(_,x,v,S,g)}return r}};function Of(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function ag(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function lg(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Of(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=ag(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cr(t,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cr(e.times,Array),values:cr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),$a(e.settings)&&(n.settings={inTangents:cr(e.settings.inTangents,Array),outTangents:cr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Sl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case co:t=this.InterpolantFactoryMethodDiscrete;break;case ll:t=this.InterpolantFactoryMethodLinear;break;case Ka:t=this.InterpolantFactoryMethodSmooth;break;case Mh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return et("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return ll;case this.InterpolantFactoryMethodSmooth:return Ka;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;$a(this.settings)&&(Gd(this.settings.inTangents,e),Gd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;$a(this.settings)&&(Vd(this.settings.inTangents,e),Vd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){tt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){tt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Km(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){tt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ka,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,$a(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Vd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=ll;var ds=class extends Gn{constructor(e,t,n){super(e,t,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=co;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};wl.prototype.ValueTypeName="color";var El=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};El.prototype.ValueTypeName="number";var Tl=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)gi.slerpFlat(r,0,o,c-a,o,c,l);return r}},zo=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Tl(this.times,this.values,this.getValueSize(),e)}};zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Gn{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=co;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Al.prototype.ValueTypeName="vector";var Qa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Wd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Wd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Wd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Rl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bf=new Rl,Ar=class{constructor(e){this.manager=e!==void 0?e:Bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ar.DEFAULT_MATERIAL_NAME="__DEFAULT";var hr=new WeakMap,Cl=class extends Ar{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qa.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=hr.get(o);d===void 0&&(d=[],hr.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=gr("img");function l(){h(),t&&t(this);let d=hr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}hr.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),Qa.remove(`image:${e}`);let u=hr.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}hr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Qa.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var ko=class extends Ar{constructor(e){super(e)}load(e,t,n,s){let r=new En,o=new Cl(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Fs=class extends Et{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ho=class extends Fs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},vh=new Ct,Xd=new D,qd=new D,Rr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xd),qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){vh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(vh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===mr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Za=new D,Ja=new gi,di=new D,Go=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Za,Ja,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,di.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Za,Ja,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ls=new D,Yd=new le,$d=new le,gn=class extends Go{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,Yd,$d),t.subVectors($d,Yd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ro*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ch=class extends Rr{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ls*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Vo=class extends Fs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ch}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ih=class extends Rr{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},Os=class extends Fs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ih}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Bs=class extends Go{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ph=class extends Rr{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wo=class extends Fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Ph}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ur=-90,dr=1,Cr=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(ur,dr,e,t);s.layers=this.layers,this.add(s);let r=new gn(ur,dr,e,t);r.layers=this.layers,this.add(r);let o=new gn(ur,dr,e,t);o.layers=this.layers,this.add(o);let a=new gn(ur,dr,e,t);a.layers=this.layers,this.add(a);let l=new gn(ur,dr,e,t);l.layers=this.layers,this.add(l);let c=new gn(ur,dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Il=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Xo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=cg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function cg(){this._document.hidden===!1&&this.reset()}var su="\\[\\]\\.:\\/",hg=new RegExp("["+su+"]","g"),ru="[^"+su+"]",ug="[^"+su.replace("\\.","")+"]",dg=/((?:WC+[\/:])*)/.source.replace("WC",ru),fg=/(WCOD+)?/.source.replace("WCOD",ug),pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),gg=new RegExp("^"+dg+fg+pg+mg+"$"),xg=["material","materials","bones","map"],Lh=class{constructor(e,t,n){let s=n||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hg,"")}static parseTrackName(e){let t=gg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=Lh;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var e1=new Float32Array(1);var Dh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function ou(i,e,t,n){let s=_g(n);switch(t){case Xh:return i*e;case Bl:return i*e/s.components*s.byteLength;case zl:return i*e/s.components*s.byteLength;case ms:return i*e*2/s.components*s.byteLength;case kl:return i*e*2/s.components*s.byteLength;case qh:return i*e*3/s.components*s.byteLength;case li:return i*e*4/s.components*s.byteLength;case Hl:return i*e*4/s.components*s.byteLength;case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vl:case Xl:return Math.max(i,16)*Math.max(e,8)/4;case Gl:case Wl:return Math.max(i,8)*Math.max(e,8)/2;case ql:case Yl:case Zl:case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $l:case sa:case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dc:case fc:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mc:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ra:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _g(i){switch(i){case Nn:case Hh:return{byteLength:1,components:1};case Dr:case Gh:case _n:return{byteLength:2,components:1};case Fl:case Ol:return{byteLength:2,components:4};case ai:case Ul:case Zn:return{byteLength:4,components:1};case Vh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function op(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sg(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eg=`#ifdef USE_ALPHAHASH
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
#endif`,Tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ig=`#ifdef USE_AOMAP
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
#endif`,Pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lg=`#ifdef USE_BATCHING
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
#endif`,Dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Og=`#ifdef USE_IRIDESCENCE
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
#endif`,Bg=`#ifdef USE_BUMPMAP
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
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yg=`#define PI 3.141592653589793
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
} // validated`,$g=`vec3 transformedNormal = objectNormal;
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
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hx=`#ifdef USE_GRADIENTMAP
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
}`,ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vx=`PhysicalMaterial material;
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
#endif`,Mx=`uniform sampler2D dfgLUT;
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
}`,bx=`
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
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
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ex=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dx=`#if defined( USE_POINTS_UV )
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
#endif`,Nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ox=`#if defined( USE_MORPHCOLORS )
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
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
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
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qx=`#ifdef USE_NORMALMAP
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
#endif`,Yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l_=`float getShadowMask() {
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
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,f_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#ifdef USE_TRANSMISSION
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,S_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w_=`uniform sampler2D t2D;
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`uniform float backgroundBlurriness;
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`#include <common>
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
}`,I_=`#if DEPTH_PACKING == 3200
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
}`,P_=`#define DISTANCE
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
}`,L_=`#define DISTANCE
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`uniform float scale;
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
}`,F_=`uniform vec3 diffuse;
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
}`,O_=`#include <common>
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
}`,B_=`uniform vec3 diffuse;
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
}`,z_=`#define LAMBERT
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
}`,k_=`#define LAMBERT
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
}`,H_=`#define MATCAP
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
}`,G_=`#define MATCAP
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
}`,V_=`#define NORMAL
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
}`,W_=`#define NORMAL
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
}`,X_=`#define PHONG
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
}`,q_=`#define PHONG
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
}`,Y_=`#define STANDARD
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
}`,$_=`#define STANDARD
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
}`,Z_=`#define TOON
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
}`,J_=`#define TOON
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
}`,K_=`uniform float size;
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
}`,j_=`uniform vec3 diffuse;
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
}`,Q_=`#include <common>
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
}`,ey=`uniform vec3 color;
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
}`,ty=`uniform float rotation;
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
}`,ny=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:wg,alphahash_pars_fragment:Eg,alphamap_fragment:Tg,alphamap_pars_fragment:Ag,alphatest_fragment:Rg,alphatest_pars_fragment:Cg,aomap_fragment:Ig,aomap_pars_fragment:Pg,batching_pars_vertex:Lg,batching_vertex:Dg,begin_vertex:Ng,beginnormal_vertex:Ug,bsdfs:Fg,iridescence_fragment:Og,bumpmap_pars_fragment:Bg,clipping_planes_fragment:zg,clipping_planes_pars_fragment:kg,clipping_planes_pars_vertex:Hg,clipping_planes_vertex:Gg,color_fragment:Vg,color_pars_fragment:Wg,color_pars_vertex:Xg,color_vertex:qg,common:Yg,defaultnormal_vertex:$g,displacementmap_pars_vertex:Zg,displacementmap_vertex:Jg,emissivemap_fragment:Kg,emissivemap_pars_fragment:jg,colorspace_fragment:Qg,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:sx,envmap_physical_pars_fragment:mx,envmap_vertex:rx,fog_vertex:ox,fog_pars_vertex:ax,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:hx,lightmap_pars_fragment:ux,lights_lambert_fragment:dx,lights_lambert_pars_fragment:fx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:xx,lights_phong_fragment:_x,lights_phong_pars_fragment:yx,lights_physical_fragment:vx,lights_physical_pars_fragment:Mx,lights_fragment_begin:bx,lights_fragment_maps:Sx,lights_fragment_end:wx,lightprobes_pars_fragment:Ex,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Cx,map_fragment:Ix,map_pars_fragment:Px,map_particle_fragment:Lx,map_particle_pars_fragment:Dx,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:Ux,morphinstance_vertex:Fx,morphcolor_vertex:Ox,morphnormal_vertex:Bx,morphtarget_pars_vertex:zx,morphtarget_vertex:kx,normal_fragment_begin:Hx,normal_fragment_maps:Gx,normal_pars_fragment:Vx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:qx,clearcoat_normal_fragment_begin:Yx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:Zx,iridescence_pars_fragment:Jx,opaque_fragment:Kx,packing:jx,premultiplied_alpha_fragment:Qx,project_vertex:e_,dithering_fragment:t_,dithering_pars_fragment:n_,roughnessmap_fragment:i_,roughnessmap_pars_fragment:s_,shadowmap_pars_fragment:r_,shadowmap_pars_vertex:o_,shadowmap_vertex:a_,shadowmask_pars_fragment:l_,skinbase_vertex:c_,skinning_pars_vertex:h_,skinning_vertex:u_,skinnormal_vertex:d_,specularmap_fragment:f_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:x_,transmission_pars_fragment:__,uv_pars_fragment:y_,uv_pars_vertex:v_,uv_vertex:M_,worldpos_vertex:b_,background_vert:S_,background_frag:w_,backgroundCube_vert:E_,backgroundCube_frag:T_,cube_vert:A_,cube_frag:R_,depth_vert:C_,depth_frag:I_,distance_vert:P_,distance_frag:L_,equirect_vert:D_,equirect_frag:N_,linedashed_vert:U_,linedashed_frag:F_,meshbasic_vert:O_,meshbasic_frag:B_,meshlambert_vert:z_,meshlambert_frag:k_,meshmatcap_vert:H_,meshmatcap_frag:G_,meshnormal_vert:V_,meshnormal_frag:W_,meshphong_vert:X_,meshphong_frag:q_,meshphysical_vert:Y_,meshphysical_frag:$_,meshtoon_vert:Z_,meshtoon_frag:J_,points_vert:K_,points_frag:j_,shadow_vert:Q_,shadow_frag:ey,sprite_vert:ty,sprite_frag:ny},Pe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},wi={basic:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Tn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Tn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Tn([Pe.points,Pe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Tn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Tn([Pe.common,Pe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Tn([Pe.sprite,Pe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Tn([Pe.common,Pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Tn([Pe.lights,Pe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};wi.physical={uniforms:Tn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Mc={r:0,b:0,g:0},iy=new Ct,ap=new rt;ap.set(-1,0,0,0,1,0,0,0,1);function sy(i,e,t,n,s,r){let o=new Be(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let M=y.backgroundBlurriness>0;v=e.get(v,M)}return v}function p(y){let v=!1,M=f(y);M===null?g(o,a):M&&M.isColor&&(g(M,1),v=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,v){let M=f(v);M&&M.isCubeTexture?(c===void 0&&(c=new Re(new Zt(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:Vs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ap),c.material.toneMapped=mt.getTransfer(M.colorSpace)!==wt,(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Re(new en(2,2),new kt({name:"BackgroundMaterial",uniforms:Vs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=mt.getTransfer(M.colorSpace)!==wt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,v){y.getRGB(Mc,iu(i)),t.buffers.color.setClear(Mc.r,Mc.g,Mc.b,v,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),a=v,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:p,addToRenderList:x,dispose:m}}function ry(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(L,C,U,P,V){let W=!1,G=d(L,P,U,C);r!==G&&(r=G,c(r.object)),W=f(L,P,U,V),W&&p(L,P,U,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(L,C,U,P),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,C,U,P){let V=P.wireframe===!0,W=n[C.id];W===void 0&&(W={},n[C.id]=W);let G=L.isInstancedMesh===!0?L.id:0,K=W[G];K===void 0&&(K={},W[G]=K);let k=K[U.id];k===void 0&&(k={},K[U.id]=k);let O=k[V];return O===void 0&&(O=u(l()),k[V]=O),O}function u(L){let C=[],U=[],P=[];for(let V=0;V<t;V++)C[V]=0,U[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,C,U,P){let V=r.attributes,W=C.attributes,G=0,K=U.getAttributes();for(let k in K)if(K[k].location>=0){let J=V[k],ce=W[k];if(ce===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function p(L,C,U,P){let V={},W=C.attributes,G=0,K=U.getAttributes();for(let k in K)if(K[k].location>=0){let J=W[k];J===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));let ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),V[k]=ce,G++}r.attributes=V,r.attributesNum=G,r.index=P}function x(){let L=r.newAttributes;for(let C=0,U=L.length;C<U;C++)L[C]=0}function g(L){m(L,0)}function m(L,C){let U=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;U[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),V[L]!==C&&(i.vertexAttribDivisor(L,C),V[L]=C)}function y(){let L=r.newAttributes,C=r.enabledAttributes;for(let U=0,P=C.length;U<P;U++)C[U]!==L[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function v(L,C,U,P,V,W,G){G===!0?i.vertexAttribIPointer(L,C,U,V,W):i.vertexAttribPointer(L,C,U,P,V,W)}function M(L,C,U,P){x();let V=P.attributes,W=U.getAttributes(),G=C.defaultAttributeValues;for(let K in W){let k=W[K];if(k.location>=0){let O=V[K];if(O===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(O=L.instanceColor)),O!==void 0){let J=O.normalized,ce=O.itemSize,_e=e.get(O);if(_e===void 0)continue;let $=_e.buffer,ye=_e.type,Ce=_e.bytesPerElement,Ge=ye===i.INT||ye===i.UNSIGNED_INT||O.gpuType===Ul;if(O.isInterleavedBufferAttribute){let pe=O.data,Ve=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,St=O.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let ze=0;ze<k.locationSize;ze++)m(k.location+ze,pe.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ze=0;ze<k.locationSize;ze++)g(k.location+ze);i.bindBuffer(i.ARRAY_BUFFER,$);for(let ze=0;ze<k.locationSize;ze++)v(k.location+ze,ce/k.locationSize,ye,J,Ve*Ce,(St+ce/k.locationSize*ze)*Ce,Ge)}else{if(O.isInstancedBufferAttribute){for(let pe=0;pe<k.locationSize;pe++)m(k.location+pe,O.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let pe=0;pe<k.locationSize;pe++)g(k.location+pe);i.bindBuffer(i.ARRAY_BUFFER,$);for(let pe=0;pe<k.locationSize;pe++)v(k.location+pe,ce/k.locationSize,ye,J,ce*Ce,ce/k.locationSize*pe*Ce,Ge)}}else if(G!==void 0){let J=G[K];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(k.location,J);break;case 3:i.vertexAttrib3fv(k.location,J);break;case 4:i.vertexAttrib4fv(k.location,J);break;default:i.vertexAttrib1fv(k.location,J)}}}}y()}function w(){R();for(let L in n){let C=n[L];for(let U in C){let P=C[U];for(let V in P){let W=P[V];for(let G in W)h(W[G].object),delete W[G];delete P[V]}}delete n[L]}}function S(L){if(n[L.id]===void 0)return;let C=n[L.id];for(let U in C){let P=C[U];for(let V in P){let W=P[V];for(let G in W)h(W[G].object),delete W[G];delete P[V]}}delete n[L.id]}function _(L){for(let C in n){let U=n[C];for(let P in U){let V=U[P];if(V[L.id]===void 0)continue;let W=V[L.id];for(let G in W)h(W[G].object),delete W[G];delete V[L.id]}}}function b(L){for(let C in n){let U=n[C],P=L.isInstancedMesh===!0?L.id:0,V=U[P];if(V!==void 0){for(let W in V){let G=V[W];for(let K in G)h(G[K].object),delete G[K];delete V[W]}delete U[P],Object.keys(U).length===0&&delete n[C]}}}function R(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function oy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ay(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==li&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let b=_===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Nn&&_!==Zn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(et("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&et("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:M,maxSamples:w,samples:S}}function ly(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ri,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,v=y*4,M=m.clippingState||null;l.value=M,M=h(p,u,v,f);for(let w=0;w!==v;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,M=f;v!==x;++v,M+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var la=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new So(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zt(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Wi});r.uniforms.tEquirect.value=t;let o=new Re(s,r),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=Cn),new Cr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},zf=256,cy=3,hy=20,lp=256,cp=16,uy=3,dy=new D,fy=new Be,Sc=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Cr(1,10,null),this._boxMesh=new Re(new Zt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=dy}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(fy));let g=new Cr(n,s,h);return g.position.copy(a),g.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(zf,Qh(e))}_fromTexture(e,t){e.mapping===Hs||e.mapping===Lr?this._setSize(e.image.length===0?zf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=kf(e,!1,!1),n=Math.log2(e)-cy;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=kf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Hs||e.mapping===Lr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Hf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=py(),this._integrationMaterial=my());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/cp);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-uy)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(lp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=gy());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function kf(i,e,t){return new la(i,{minFilter:qi,generateMipmaps:e,type:_n,colorSpace:ho,depthBuffer:t})}function ca(i,e,t){return new kt({name:i,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:rn,blending:Wi,depthTest:!1,depthWrite:!1})}function py(){return ca("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lp}u

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
	`)}function my(){return ca("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cp}},`

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
	`)}function gy(){return ca("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${hy}
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
	`)}function Hf(){return ca("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Gf(){return ca("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ll||f===Dl)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new la(p.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Ll||f===Dl,x=f===Hs||f===Lr;if(p||x){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Sc(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Sc(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Ll?u.mapping=Hs:f===Dl&&(u.mapping=Lr),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function _y(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&so("WebGLRenderer: "+n+" extension not supported."),s}}}function yy(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let g in x)e.update(x[g],i.ARRAY_BUFFER)}function d(p){let x=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let y=x!==null?x.array.length:g.array.length/3-1,v=g.count>=65535?yo:_o,M=new v(Math.ceil(y/3)*6,1),w=M.array;if(x!==null){let _=x.array;m=x.version;for(let b=0,R=0;b<y;b+=3){let A=_[b+0],L=_[b+1],C=_[b+2];w[R++]=A,w[R++]=L,w[R++]=L,w[R++]=C,w[R++]=C,w[R++]=A}}else{m=g.version;for(let _=0,b=0;_<y;_+=3){let R=_+0,A=_+1,L=_+2;w[b++]=R,w[b++]=A,w[b++]=A,w[b++]=L,w[b++]=L,w[b++]=R}}M.version=m;let S=r.get(p);S&&e.remove(S),r.set(p,M)}function u(p){let x=r.get(p);if(x){let g=p.index;g!==null&&x.version<g.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function vy(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function My(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function by(i,e,t){let n=new WeakMap,s=new Wt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let R=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let M=a.attributes.position.count*v,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*w*4*d),_=new po(S,M,w,d);_.type=Zn,_.needsUpdate=!0;let b=v*4;for(let A=0;A<d;A++){let L=g[A],C=m[A],U=y[A],P=M*w*4*A;for(let V=0;V<L.count;V++){let W=V*b;f===!0&&(s.fromBufferAttribute(L,V),S[P+W+0]=s.x,S[P+W+1]=s.y,S[P+W+2]=s.z,S[P+W+3]=0),p===!0&&(s.fromBufferAttribute(C,V),S[P+W+4]=s.x,S[P+W+5]=s.y,S[P+W+6]=s.z,S[P+W+7]=0),x===!0&&(s.fromBufferAttribute(U,V),S[P+W+8]=s.x,S[P+W+9]=s.y,S[P+W+10]=s.z,S[P+W+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new le(M,w)},n.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Sy(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var wy={[Yo]:"LINEAR_TONE_MAPPING",[$o]:"REINHARD_TONE_MAPPING",[Zo]:"CINEON_TONE_MAPPING",[ks]:"ACES_FILMIC_TONE_MAPPING",[Ko]:"AGX_TONE_MAPPING",[jo]:"NEUTRAL_TONE_MAPPING",[Jo]:"CUSTOM_TONE_MAPPING"};function Ey(i,e,t,n,s,r){let o=new sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ut;h.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Je([0,2,0,0,2,0],2));let d=new Tr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Re(h,d),f=new Bs(-1,1,1,-1,0,1),p=null,x=null,g=!1,m,y=null,v=[],M=!1;this.setSize=function(w,S){o.setSize(w,S),a!==null&&a.setSize(w,S),l!==null&&l.setSize(w,S);for(let _=0;_<v.length;_++){let b=v[_];b.setSize&&b.setSize(w,S)}},this.setEffects=function(w){v=w,M=v.length>0&&v[0].isRenderPass===!0;let S=o.width,_=o.height;v.length>0&&a===null&&(a=new sn(S,_,{type:_n,depthBuffer:!1,stencilBuffer:!1}),l=new sn(S,_,{type:_n,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&v.some(R=>R.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Vi(S,_),r===!0&&(c.format=Yi,c.type=Gs)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let R=0;R<v.length;R++){let A=v[R];A.setSize&&A.setSize(S,_),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,S){if(g||w.toneMapping===bi&&v.length===0)return!1;if(y=S,S!==null){let _=S.width,b=S.height;(o.width!==_||o.height!==b)&&this.setSize(_,b)}return M===!1&&w.setRenderTarget(o),m=w.toneMapping,w.toneMapping=bi,!0},this.hasRenderPass=function(){return M},this.end=function(w,S){w.toneMapping=m,g=!0;let _=o,b=a;for(let R=0;R<v.length;R++){let A=v[R];A.enabled!==!1&&(A.render(w,b,_,S),A.needsSwap!==!1&&(_=b,b=b===a?l:a))}if(p!==w.outputColorSpace||x!==w.toneMapping){p=w.outputColorSpace,x=w.toneMapping,d.defines={},mt.getTransfer(p)===wt&&(d.defines.SRGB_TRANSFER="");let R=wy[x];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(y),w.render(u,f),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var hp=new En,up=new Vi(1,1),dp=new wo(1),fp=new po,pp=new ul,mp=new So,Vf=[],Wf=[],Xf=new Float32Array(16),qf=new Float32Array(9),Yf=new Float32Array(4);function Ur(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Vf[s];if(r===void 0&&(r=new Float32Array(s),Vf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ec(i,e){let t=Wf[e];t===void 0&&(t=new Int32Array(e),Wf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ty(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function Ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function Cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function Iy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Yf.set(n),i.uniformMatrix2fv(this.addr,!1,Yf),an(t,n)}}function Py(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;qf.set(n),i.uniformMatrix3fv(this.addr,!1,qf),an(t,n)}}function Ly(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Xf.set(n),i.uniformMatrix4fv(this.addr,!1,Xf),an(t,n)}}function Dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function Oy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function Tc(i){return i.version===0&&(i.compareFunction=Zh,i.needsUpdate=!0),i}function Hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Tc(up):r=hp,t.setTexture2D(e||r,s)}function Gy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pp,s)}function Vy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Tc(dp):r=mp,t.setTextureCube(e||r,s)}function Wy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fp,s)}function Xy(i){switch(i){case 5126:return Ty;case 35664:return Ay;case 35665:return Ry;case 35666:return Cy;case 35674:return Iy;case 35675:return Py;case 35676:return Ly;case 5124:case 35670:return Dy;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return Fy;case 5125:return Oy;case 36294:return By;case 36295:return zy;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Wy}}function qy(i,e){i.uniform1fv(this.addr,e)}function Yy(i,e){let t=Ur(e,this.size,2);i.uniform2fv(this.addr,t)}function $y(i,e){let t=Ur(e,this.size,3);i.uniform3fv(this.addr,t)}function Zy(i,e){let t=Ur(e,this.size,4);i.uniform4fv(this.addr,t)}function Jy(i,e){let t=Ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ky(i,e){let t=Ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jy(i,e){let t=Ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qy(i,e){i.uniform1iv(this.addr,e)}function ev(i,e){i.uniform2iv(this.addr,e)}function tv(i,e){i.uniform3iv(this.addr,e)}function nv(i,e){i.uniform4iv(this.addr,e)}function iv(i,e){i.uniform1uiv(this.addr,e)}function sv(i,e){i.uniform2uiv(this.addr,e)}function rv(i,e){i.uniform3uiv(this.addr,e)}function ov(i,e){i.uniform4uiv(this.addr,e)}function av(i,e,t){let n=this.cache,s=e.length,r=Ec(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Tc(up):o=hp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function lv(i,e,t){let n=this.cache,s=e.length,r=Ec(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||pp,r[o])}function cv(i,e,t){let n=this.cache,s=e.length,r=Ec(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Tc(dp):o=mp;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function hv(i,e,t){let n=this.cache,s=e.length,r=Ec(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||fp,r[o])}function uv(i){switch(i){case 5126:return qy;case 35664:return Yy;case 35665:return $y;case 35666:return Zy;case 35674:return Jy;case 35675:return Ky;case 35676:return jy;case 5124:case 35670:return Qy;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return sv;case 36295:return rv;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return hv}}var cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xy(t.type)}},hu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uv(t.type)}},uu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},au=/(\w+)(\])?(\[|\.)?/g;function $f(i,e){i.seq.push(e),i.map[e.id]=e}function dv(i,e,t){let n=i.name,s=n.length;for(au.lastIndex=0;;){let r=au.exec(n),o=au.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$f(t,c===void 0?new cu(a,i,e):new hu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new uu(a),$f(t,d)),t=d}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);dv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Zf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var fv=37297,pv=0;function mv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Jf=new rt;function gv(i){mt._getMatrix(Jf,mt.workingColorSpace,i);let e=`mat3( ${Jf.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case uo:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+mv(i.getShaderSource(e),a)}else return r}function xv(i,e){let t=gv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var _v={[Yo]:"Linear",[$o]:"Reinhard",[Zo]:"Cineon",[ks]:"ACESFilmic",[Ko]:"AgX",[jo]:"Neutral",[Jo]:"Custom"};function yv(i,e){let t=_v[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var bc=new D;function vv(){mt.getLuminanceCoefficients(bc);let i=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function bv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function aa(i){return i!==""}function jf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Qf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(i){return i.replace(wv,Ev)}function Ev(i,e){let t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return du(t)}var Tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(i){return i.replace(Tv,Av)}function Av(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Rv={[qo]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function Cv(i){return Rv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Iv={[Lr]:"ENVMAP_MODE_REFRACTION"};function Pv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Iv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Lv={[zh]:"ENVMAP_BLENDING_MULTIPLY",[gf]:"ENVMAP_BLENDING_MIX",[xf]:"ENVMAP_BLENDING_ADD"};function Dv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Lv[i.combine]||"ENVMAP_BLENDING_NONE"}function Nv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Cv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Pv(t),d=Dv(t),u=Mv(t),f=bv(r),p=s.createProgram(),x,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(aa).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(aa).join(`
`),g.length>0&&(g+=`
`)):(x=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),g=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?ft.tonemapping_pars_fragment:"",t.toneMapping!==bi?yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,xv("linearToOutputTexel",t.outputColorSpace),vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),o=du(o),o=jf(o,t),o=Qf(o,t),a=du(a),a=jf(a,t),a=Qf(a,t),o=ep(o),a=ep(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=m+x+o,v=m+g+a,M=Zf(s,s.VERTEX_SHADER,y),w=Zf(s,s.FRAGMENT_SHADER,v);s.attachShader(p,M),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(A){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(p)||"",C=s.getShaderInfoLog(M)||"",U=s.getShaderInfoLog(w)||"",P=L.trim(),V=C.trim(),W=U.trim(),G=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,w);else{let k=Kf(s,M,"vertex"),O=Kf(s,w,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+k+`
`+O)}else P!==""?et("WebGLProgram: Program Info Log:",P):(V===""||W==="")&&(K=!1);K&&(A.diagnostics={runnable:G,programLog:P,vertexShader:{log:V,prefix:x},fragmentShader:{log:W,prefix:g}})}s.deleteShader(M),s.deleteShader(w),_=new Nr(s,p),b=Sv(s,p)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(p,fv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=w,this}var Uv=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pu(e),t.set(e,n)),n}},pu=class{constructor(e){this.id=Uv++,this.code=e,this.usedTimes=0}};function Fv(i){return i===ms||i===sa||i===ra}function Ov(i,e,t,n,s,r){let o=new mo,a=new fu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,b,R,A,L,C){let U=A.fog,P=L.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||V,W),K=u[_.type],k=n.precision;_.precision!==null&&(k=n.getMaxPrecision(_.precision),k!==_.precision&&et("WebGLProgram.getParameters:",_.precision,"not supported, using",k,"instead."));let O=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J=O!==void 0?O.length:0,ce=0;P.morphAttributes.position!==void 0&&(ce=1),P.morphAttributes.normal!==void 0&&(ce=2),P.morphAttributes.color!==void 0&&(ce=3);let _e,$,ye,Ce;if(K){let Ie=wi[K];_e=Ie.vertexShader,$=Ie.fragmentShader}else{_e=_.vertexShader,$=_.fragmentShader;let Ie=a.getVertexShaderStage(_),Pt=a.getFragmentShaderStage(_);a.update(_,Ie,Pt),ye=Ie.id,Ce=Pt.id}let Ge=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ve=L.isInstancedMesh===!0,St=L.isBatchedMesh===!0,ze=!!_.map,at=!!_.matcap,ee=!!G,X=ee&&G.isPMREMTexture===!0,Q=!!_.aoMap,se=!!_.lightMap,me=!!_.bumpMap&&_.wireframe===!1,ue=!!_.normalMap,Xe=!!_.displacementMap,Le=!!_.emissiveMap,st=!!_.metalnessMap,qe=!!_.roughnessMap,xt=_.anisotropy>0,H=_.clearcoat>0,Kt=_.diffuseRoughness>0,pt=_.dispersion>0,Ot=_.retroreflectivity>0,Ee=_.iridescence>0,Yt=_.sheen>0,Ke=_.transmission>0,it=xt&&!!_.anisotropyMap,I=H&&!!_.clearcoatMap,E=H&&!!_.clearcoatNormalMap,Y=H&&!!_.clearcoatRoughnessMap,de=Kt&&!!_.diffuseRoughnessMap,ae=Ee&&!!_.iridescenceMap,ve=Ee&&!!_.iridescenceThicknessMap,Te=Yt&&!!_.sheenColorMap,ie=Yt&&!!_.sheenRoughnessMap,re=!!_.specularMap,be=!!_.specularColorMap,F=!!_.specularIntensityMap,oe=Ke&&!!_.transmissionMap,te=Ke&&!!_.thicknessMap,Se=!!_.gradientMap,ge=!!_.alphaMap,Me=_.alphaTest>0,We=!!_.alphaHash,dt=!!_.extensions,fe=bi;_.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(fe=i.toneMapping);let Ze=X?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,ut={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:_e,fragmentShader:$,defines:_.defines,customVertexShaderID:ye,customFragmentShaderID:Ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:k,batching:St,batchingColor:St&&L._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&L.instanceColor!==null,instancingMorph:Ve&&L.morphTexture!==null,outputColorSpace:Ge===null?i.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:at,envMap:ee,envMapMode:ee&&G.mapping,envMapPMREM:X,envMapMaxLod:X?Ze.length-1:null,envMapSize:X?Ze[0].width:null,aoMap:Q,lightMap:se,bumpMap:me,normalMap:ue,displacementMap:Xe,emissiveMap:Le,normalMapObjectSpace:ue&&_.normalMapType===vf,normalMapTangentSpace:ue&&_.normalMapType===_c,packedNormalMap:ue&&_.normalMapType===_c&&Fv(_.normalMap.format),metalnessMap:st,roughnessMap:qe,anisotropy:xt,anisotropyMap:it,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:Y,diffuseRoughness:Kt,diffuseRoughnessMap:de,dispersion:pt,retroreflection:Ot,iridescence:Ee,iridescenceMap:ae,iridescenceThicknessMap:ve,sheen:Yt,sheenColorMap:Te,sheenRoughnessMap:ie,specularMap:re,specularColorMap:be,specularIntensityMap:F,transmission:Ke,transmissionMap:oe,thicknessMap:te,gradientMap:Se,opaque:_.transparent===!1&&_.blending===Pr&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:Me,alphaHash:We,combine:_.combine,mapUv:ze&&f(_.map.channel),aoMapUv:Q&&f(_.aoMap.channel),lightMapUv:se&&f(_.lightMap.channel),bumpMapUv:me&&f(_.bumpMap.channel),normalMapUv:ue&&f(_.normalMap.channel),displacementMapUv:Xe&&f(_.displacementMap.channel),emissiveMapUv:Le&&f(_.emissiveMap.channel),metalnessMapUv:st&&f(_.metalnessMap.channel),roughnessMapUv:qe&&f(_.roughnessMap.channel),anisotropyMapUv:it&&f(_.anisotropyMap.channel),clearcoatMapUv:I&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:ie&&f(_.sheenRoughnessMap.channel),specularMapUv:re&&f(_.specularMap.channel),specularColorMapUv:be&&f(_.specularColorMap.channel),specularIntensityMapUv:F&&f(_.specularIntensityMap.channel),transmissionMapUv:oe&&f(_.transmissionMap.channel),thicknessMapUv:te&&f(_.thicknessMap.channel),alphaMapUv:ge&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ue||xt),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(ze||ge),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&ue===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ce,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:C.filter(Ie=>Ie.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&mt.getTransfer(_.map.colorSpace)===wt,decodeVideoTextureEmissive:Le&&_.emissiveMap.isVideoTexture===!0&&mt.getTransfer(_.emissiveMap.colorSpace)===wt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xn,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:dt&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&_.extensions.multiDraw===!0||St)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)b.push(R),b.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(g(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function g(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let b=u[_.type],R;if(b){let A=wi[b];R=Ji.clone(A.uniforms)}else R=_.uniforms;return R}function v(_,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new Nv(i,b,_,s),c.push(R),h.set(b,R)),R}function M(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function S(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:S}}function Bv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function zv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function np(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ip(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,g,m){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=o(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=g,y.group=m),e++,y}function l(u,f,p,x,g,m,y){y.reversedDepth===!0&&(g=-g);let v=a(u,f,p,x,g,m);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):t.push(v)}function c(u,f,p,x,g,m){let y=a(u,f,p,x,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||zv),n.length>1&&n.sort(f||np),s.length>1&&s.sort(f||np)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function kv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ip,i.set(n,[o])):s>=r.length?(o=new ip,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Be};break;case"SpotLight":t={position:new D,direction:new D,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Gv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Vv=0;function Wv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xv(i){let e=new Hv,t=Gv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new Ct,o=new Ct;function a(c){let h=0,d=0,u=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,y=0,v=0,M=0,w=0,S=0,_=0,b=0,R=0,A=0;c.sort(Wv);for(let C=0,U=c.length;C<U;C++){let P=c[C],V=P.color,W=P.intensity,G=P.distance,K=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ms?K=P.shadow.map.texture:K=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=V.r*W,d+=V.g*W,u+=V.b*W;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],W);A++}else if(P.isSunLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let O=P.shadow,J=t.get(P);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=K;let ce=O.getViewportCount();for(let _e=0;_e<ce;_e++)n.sunShadowMatrix[x+_e]=O.getMatrix(_e),n.sunShadowCascade[x+_e]=O._cascadeData[_e];x+=ce,p++}n.sun[f]=k,f++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let O=P.shadow,J=t.get(P);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=P.shadow.matrix,w++}n.directional[g]=k,g++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(V).multiplyScalar(W),k.distance=G,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[y]=k;let O=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,O.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[y]=O.matrix,P.castShadow){let J=t.get(P);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=K,_++}y++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(V).multiplyScalar(W),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=k,v++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let O=P.shadow,J=t.get(P);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,J.shadowCameraNear=O.camera.near,J.shadowCameraFar=O.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=P.shadow.matrix,S++}n.point[m]=k,m++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(W),k.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[M]=k,M++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==y||L.rectAreaLength!==v||L.hemiLength!==M||L.numSunShadows!==p||L.numDirectionalShadows!==w||L.numPointShadows!==S||L.numSpotShadows!==_||L.numSpotMaps!==b||L.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=v,n.point.length=m,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-R,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,L.sunLength=f,L.directionalLength=g,L.pointLength=m,L.spotLength=y,L.rectAreaLength=v,L.hemiLength=M,L.numSunShadows=p,L.numDirectionalShadows=w,L.numPointShadows=S,L.numSpotShadows=_,L.numSpotMaps=b,L.numLightProbes=A,n.version=Vv++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let y=0,v=c.length;y<v;y++){let M=c[y];if(M.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),d++}else if(M.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(M.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function sp(i){let e=new Xv(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function qv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new sp(i),e.set(s,[a])):r>=o.length?(a=new sp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
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
}`,Zv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Jv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],rp=new Ct,oa=new D,lu=new D;function Kv(i,e,t){let n=new hs,s=new le,r=new le,o=new Wt,a=new _l,l=new yl,c={},h=t.maxTextureSize,d={[ps]:rn,[rn]:ps,[xn]:xn},u=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Yv,fragmentShader:$v}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ut;p.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Re(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo;let m=this.type;this.render=function(S,_,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Pl&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qo);let R=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Wi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let U=m!==this.type;U&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=S.length;P<V;P++){let W=S[P],G=W.shadow;if(G===void 0){et("WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let K=G.getFrameExtents();s.multiply(K),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,G.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=k,G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ir){if(W.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new sn(s.x,s.y,{format:ms,type:_n,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),G.map.texture.name=W.name+".shadowMap",G.map.depthTexture=new Vi(s.x,s.y,Zn),G.map.depthTexture.name=W.name+".shadowMapDepth",G.map.depthTexture.format=ki,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=fn,G.map.depthTexture.magFilter=fn}else W.isPointLight?(G.map=new la(s.x),G.map.depthTexture=new wo(s.x,ai)):(G.map=new sn(s.x,s.y),G.map.depthTexture=new Vi(s.x,s.y,ai)),G.map.depthTexture.name=W.name+".shadowMap",G.map.depthTexture.format=ki,this.type===qo?(G.map.depthTexture.compareFunction=k?$h:Yh,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=fn,G.map.depthTexture.magFilter=fn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let O=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();W.isPointLight!==!0&&G.updateMatrices(W,b);let J=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let ce=0;ce<O;ce++){let _e=G.getCamera(ce);if(W.isPointLight){let $=G.camera,ye=G.matrix,Ce=W.distance||$.far;Ce!==$.far&&($.far=Ce,$.updateProjectionMatrix()),oa.setFromMatrixPosition(W.matrixWorld),$.position.copy(oa),lu.copy($.position),lu.add(Zv[ce]),$.up.copy(Jv[ce]),$.lookAt(lu),$.updateMatrixWorld(),ye.makeTranslation(-oa.x,-oa.y,-oa.z),rp.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),G._frustum.setFromProjectionMatrix(rp,$.coordinateSystem,$.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,ce),i.clear();else{ce===0&&(i.setRenderTarget(G.map),i.clear());let $=G.getViewport(ce);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),C.viewport(o)}n=G.getFrustum(ce),M(_,b,_e,W,J,this.type)}G.isPointLightShadow!==!0&&this.type===Ir&&y(G,b),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(R,A,L)};function y(S,_){let b=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new sn(s.x,s.y,{format:ms,type:_n}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(_,null,b,f,x,null)}function v(S,_,b,R){let A=null,L=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)A=L;else if(A=b.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let C=A.uuid,U=_.uuid,P=c[C];P===void 0&&(P={},c[C]=P);let V=P[U];V===void 0&&(V=A.clone(),P[U]=V,_.addEventListener("dispose",w)),A=V}if(A.visible=_.visible,A.wireframe=_.wireframe,R===Ir?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:d[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let C=i.properties.get(A);C.light=b}return A}function M(S,_,b,R,A,L){if(S.visible===!1)return;if(S.layers.test(A)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===Ir)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);let P=e.update(S),V=S.material;if(Array.isArray(V)){let W=P.groups;for(let G=0,K=W.length;G<K;G++){let k=W[G],O=V[k.materialIndex];if(O&&O.visible){let J=v(S,O,R,L);S.onBeforeShadow(i,S,_,b,P,J,k),i.renderBufferDirect(b,null,P,J,S,k),S.onAfterShadow(i,S,_,b,P,J,k)}}}else if(V.visible){let W=v(S,V,R,L);S.onBeforeShadow(i,S,_,b,P,W,null),i.renderBufferDirect(b,null,P,W,S,null),S.onAfterShadow(i,S,_,b,P,W,null)}}let U=S.children;for(let P=0,V=U.length;P<V;P++)M(U[P],_,b,R,A,L)}function w(S){S.target.removeEventListener("dispose",w);for(let b in c){let R=c[b],A=S.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function jv(i,e){function t(){let F=!1,oe=new Wt,te=null,Se=new Wt(0,0,0,0);return{setMask:function(ge){te!==ge&&!F&&(i.colorMask(ge,ge,ge,ge),te=ge)},setLocked:function(ge){F=ge},setClear:function(ge,Me,We,dt,fe){fe===!0&&(ge*=dt,Me*=dt,We*=dt),oe.set(ge,Me,We,dt),Se.equals(oe)===!1&&(i.clearColor(ge,Me,We,dt),Se.copy(oe))},reset:function(){F=!1,te=null,Se.set(-1,0,0,0)}}}function n(){let F=!1,oe=!1,te=null,Se=null,ge=null;return{setReversed:function(Me){if(oe!==Me){let We=e.get("EXT_clip_control");Me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),oe=Me;let dt=ge;ge=null,this.setClear(dt)}},getReversed:function(){return oe},setTest:function(Me){Me?pe(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(Me){te!==Me&&!F&&(i.depthMask(Me),te=Me)},setFunc:function(Me){if(oe&&(Me=If[Me]),Se!==Me){switch(Me){case el:i.depthFunc(i.NEVER);break;case tl:i.depthFunc(i.ALWAYS);break;case nl:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case il:i.depthFunc(i.EQUAL);break;case sl:i.depthFunc(i.GEQUAL);break;case rl:i.depthFunc(i.GREATER);break;case ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=Me}},setLocked:function(Me){F=Me},setClear:function(Me){ge!==Me&&(ge=Me,oe&&(Me=1-Me),i.clearDepth(Me))},reset:function(){F=!1,te=null,Se=null,ge=null,oe=!1}}}function s(){let F=!1,oe=null,te=null,Se=null,ge=null,Me=null,We=null,dt=null,fe=null;return{setTest:function(Ze){F||(Ze?pe(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(Ze){oe!==Ze&&!F&&(i.stencilMask(Ze),oe=Ze)},setFunc:function(Ze,ut,Ie){(te!==Ze||Se!==ut||ge!==Ie)&&(i.stencilFunc(Ze,ut,Ie),te=Ze,Se=ut,ge=Ie)},setOp:function(Ze,ut,Ie){(Me!==Ze||We!==ut||dt!==Ie)&&(i.stencilOp(Ze,ut,Ie),Me=Ze,We=ut,dt=Ie)},setLocked:function(Ze){F=Ze},setClear:function(Ze){fe!==Ze&&(i.clearStencil(Ze),fe=Ze)},reset:function(){F=!1,oe=null,te=null,Se=null,ge=null,Me=null,We=null,dt=null,fe=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,v=null,M=null,w=null,S=null,_=null,b=new Be(0,0,0),R=0,A=!1,L=null,C=null,U=null,P=null,V=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,K=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=K>=2);let O=null,J={},ce=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),$=new Wt().fromArray(ce),ye=new Wt().fromArray(_e);function Ce(F,oe,te,Se){let ge=new Uint8Array(4),Me=i.createTexture();i.bindTexture(F,Me),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<te;We++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(oe+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return Me}let Ge={};Ge[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Ge[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ge[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ge[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(pr),me(!1),ue(Nh),pe(i.CULL_FACE),Q(Wi);function pe(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Ve(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function St(F,oe){return u[F]!==oe?(i.bindFramebuffer(F,oe),u[F]=oe,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function ze(F,oe){let te=p,Se=!1;if(F){te=f.get(oe),te===void 0&&(te=[],f.set(oe,te));let ge=F.textures;if(te.length!==ge.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,We=ge.length;Me<We;Me++)te[Me]=i.COLOR_ATTACHMENT0+Me;te.length=ge.length,Se=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,Se=!0);Se&&i.drawBuffers(te)}function at(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let ee={[zs]:i.FUNC_ADD,[jd]:i.FUNC_SUBTRACT,[Qd]:i.FUNC_REVERSE_SUBTRACT};ee[ef]=i.MIN,ee[tf]=i.MAX;let X={[nf]:i.ZERO,[sf]:i.ONE,[rf]:i.SRC_COLOR,[Oh]:i.SRC_ALPHA,[uf]:i.SRC_ALPHA_SATURATE,[cf]:i.DST_COLOR,[af]:i.DST_ALPHA,[of]:i.ONE_MINUS_SRC_COLOR,[Bh]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[lf]:i.ONE_MINUS_DST_ALPHA,[df]:i.CONSTANT_COLOR,[ff]:i.ONE_MINUS_CONSTANT_COLOR,[pf]:i.CONSTANT_ALPHA,[mf]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(F,oe,te,Se,ge,Me,We,dt,fe,Ze){if(F===Wi){g===!0&&(Ve(i.BLEND),g=!1);return}if(g===!1&&(pe(i.BLEND),g=!0),F!==Kd){if(F!==m||Ze!==A){if((y!==zs||w!==zs)&&(i.blendEquation(i.FUNC_ADD),y=zs,w=zs),Ze)switch(F){case Pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFunc(i.ONE,i.ONE);break;case Uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",F);break}else switch(F){case Pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uh:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",F);break}v=null,M=null,S=null,_=null,b.set(0,0,0),R=0,m=F,A=Ze}return}ge=ge||oe,Me=Me||te,We=We||Se,(oe!==y||ge!==w)&&(i.blendEquationSeparate(ee[oe],ee[ge]),y=oe,w=ge),(te!==v||Se!==M||Me!==S||We!==_)&&(i.blendFuncSeparate(X[te],X[Se],X[Me],X[We]),v=te,M=Se,S=Me,_=We),(dt.equals(b)===!1||fe!==R)&&(i.blendColor(dt.r,dt.g,dt.b,fe),b.copy(dt),R=fe),m=F,A=!1}function se(F,oe){F.side===xn?Ve(i.CULL_FACE):pe(i.CULL_FACE);let te=F.side===rn;oe&&(te=!te),me(te),F.blending===Pr&&F.transparent===!1?Q(Wi):Q(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Se=F.stencilWrite;a.setTest(Se),Se&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Le(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(F){L!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),L=F)}function ue(F){F!==Zd?(pe(i.CULL_FACE),F!==C&&(F===Nh?i.cullFace(i.BACK):F===Jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),C=F}function Xe(F){F!==U&&(G&&i.lineWidth(F),U=F)}function Le(F,oe,te){F?(pe(i.POLYGON_OFFSET_FILL),(P!==oe||V!==te)&&(P=oe,V=te,o.getReversed()&&(oe=-oe,te=-te),i.polygonOffset(oe,te))):Ve(i.POLYGON_OFFSET_FILL)}function st(F){F?pe(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function qe(F){F===void 0&&(F=i.TEXTURE0+W-1),O!==F&&(i.activeTexture(F),O=F)}function xt(F,oe,te){te===void 0&&(O===null?te=i.TEXTURE0+W-1:te=O);let Se=J[te];Se===void 0&&(Se={type:void 0,texture:void 0},J[te]=Se),(Se.type!==F||Se.texture!==oe)&&(O!==te&&(i.activeTexture(te),O=te),i.bindTexture(F,oe||Ge[F]),Se.type=F,Se.texture=oe)}function H(){let F=J[O];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function pt(){try{i.compressedTexImage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function Ot(){try{i.texSubImage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function Ee(){try{i.texSubImage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function Yt(){try{i.compressedTexSubImage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function Ke(){try{i.compressedTexSubImage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function it(){try{i.texStorage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function I(){try{i.texStorage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function E(){try{i.texImage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function Y(){try{i.texImage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function de(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function ae(F,oe){d[F]!==oe&&(i.pixelStorei(F,oe),d[F]=oe)}function ve(F){$.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),$.copy(F))}function Te(F){ye.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ye.copy(F))}function ie(F,oe){let te=c.get(oe);te===void 0&&(te=new WeakMap,c.set(oe,te));let Se=te.get(F);Se===void 0&&(Se=i.getUniformBlockIndex(oe,F.name),i.uniformBlockBinding(oe,Se,Se),te.set(F,Se))}function re(F,oe,te){let ge=c.get(oe).get(F);l[ge]!==te&&(i.bindBufferBase(i.UNIFORM_BUFFER,ge,te),l[ge]=te)}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},O=null,J={},u={},l={},f=new WeakMap,p=[],x=null,g=!1,m=null,y=null,v=null,M=null,w=null,S=null,_=null,b=new Be(0,0,0),R=0,A=!1,L=null,C=null,U=null,P=null,V=null,$.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:Ve,bindFramebuffer:St,drawBuffers:ze,useProgram:at,setBlending:Q,setMaterial:se,setFlipSided:me,setCullFace:ue,setLineWidth:Xe,setPolygonOffset:Le,setScissorTest:st,activeTexture:qe,bindTexture:xt,unbindTexture:H,compressedTexImage2D:Kt,compressedTexImage3D:pt,texImage2D:E,texImage3D:Y,pixelStorei:ae,getParameter:de,updateUBOMapping:ie,uniformBlockBinding:re,texStorage2D:it,texStorage3D:I,texSubImage2D:Ot,texSubImage3D:Ee,compressedTexSubImage2D:Yt,compressedTexSubImage3D:Ke,scissor:ve,viewport:Te,reset:be}}function Qv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(I=>p.delete(I)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,E){return g?new OffscreenCanvas(I,E):gr("canvas")}function y(I,E,Y){let de=1,ae=it(I);if((ae.width>Y||ae.height>Y)&&(de=Y/Math.max(ae.width,ae.height)),de<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ve=Math.floor(de*ae.width),Te=Math.floor(de*ae.height);u===void 0&&(u=m(ve,Te));let ie=E?m(ve,Te):u;return ie.width=ve,ie.height=Te,ie.getContext("2d").drawImage(I,0,0,ve,Te),et("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ve+"x"+Te+")."),ie}else return"data"in I&&et("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),I;return I}function v(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(I,E,Y,de,ae,ve=!1){if(I!==null){if(i[I]!==void 0)return i[I];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Te;de&&(Te=e.get("EXT_texture_norm16"),Te||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=E;if(E===i.RED&&(Y===i.FLOAT&&(ie=i.R32F),Y===i.HALF_FLOAT&&(ie=i.R16F),Y===i.UNSIGNED_BYTE&&(ie=i.R8),Y===i.UNSIGNED_SHORT&&Te&&(ie=Te.R16_EXT),Y===i.SHORT&&Te&&(ie=Te.R16_SNORM_EXT)),E===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.R8UI),Y===i.UNSIGNED_SHORT&&(ie=i.R16UI),Y===i.UNSIGNED_INT&&(ie=i.R32UI),Y===i.BYTE&&(ie=i.R8I),Y===i.SHORT&&(ie=i.R16I),Y===i.INT&&(ie=i.R32I)),E===i.RG&&(Y===i.FLOAT&&(ie=i.RG32F),Y===i.HALF_FLOAT&&(ie=i.RG16F),Y===i.UNSIGNED_BYTE&&(ie=i.RG8),Y===i.UNSIGNED_SHORT&&Te&&(ie=Te.RG16_EXT),Y===i.SHORT&&Te&&(ie=Te.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RG16UI),Y===i.UNSIGNED_INT&&(ie=i.RG32UI),Y===i.BYTE&&(ie=i.RG8I),Y===i.SHORT&&(ie=i.RG16I),Y===i.INT&&(ie=i.RG32I)),E===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),Y===i.UNSIGNED_INT&&(ie=i.RGB32UI),Y===i.BYTE&&(ie=i.RGB8I),Y===i.SHORT&&(ie=i.RGB16I),Y===i.INT&&(ie=i.RGB32I)),E===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ie=i.RGBA32UI),Y===i.BYTE&&(ie=i.RGBA8I),Y===i.SHORT&&(ie=i.RGBA16I),Y===i.INT&&(ie=i.RGBA32I)),E===i.RGB&&(Y===i.UNSIGNED_SHORT&&Te&&(ie=Te.RGB16_EXT),Y===i.SHORT&&Te&&(ie=Te.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),E===i.RGBA){let re=ve?uo:mt.getTransfer(ae);Y===i.FLOAT&&(ie=i.RGBA32F),Y===i.HALF_FLOAT&&(ie=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ie=re===wt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Te&&(ie=Te.RGBA16_EXT),Y===i.SHORT&&Te&&(ie=Te.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function _(I,E){let Y;return I?E===null||E===ai||E===Gs?Y=i.DEPTH24_STENCIL8:E===Zn?Y=i.DEPTH32F_STENCIL8:E===Dr&&(Y=i.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ai||E===Gs?Y=i.DEPTH_COMPONENT24:E===Zn?Y=i.DEPTH_COMPONENT32F:E===Dr&&(Y=i.DEPTH_COMPONENT16),Y}function b(I,E){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==fn&&I.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function R(I){let E=new WeakRef(I);n.get(I).__ref=E,p.add(E),x.register(I,E,E)}function A(I){let E=n.get(I).__ref;E!==void 0&&(p.delete(E),x.unregister(E))}function L(I){U(I.target)}function C(I){P(I.target)}function U(I){I.removeEventListener("dispose",L),A(I),W(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function P(I){I.removeEventListener("dispose",C),A(I),K(I)}function V(){for(let I of p){let E=I.deref();E!==void 0&&(E.isRenderTarget===!0?P(E):U(E))}p.clear(),d.clear()}function W(I){let E=n.get(I);if(E.__webglInit===void 0)return;let Y=I.source,de=f.get(Y);if(de){let ae=de[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&G(I),Object.keys(de).length===0&&f.delete(Y)}n.remove(I)}function G(I){let E=n.get(I);i.deleteTexture(E.__webglTexture);let Y=I.source,de=f.get(Y);delete de[E.__cacheKey],o.memory.textures--}function K(I){let E=n.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();let Y=I.depthTexture;if(Y&&Y.renderTarget===I&&U(Y),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let ve=0;ve<E.__webglFramebuffer[ae].length;ve++)i.deleteFramebuffer(E.__webglFramebuffer[ae][ve]);else i.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[ae]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let de=I.textures;for(let ae=0,ve=de.length;ae<ve;ae++){let Te=n.get(de[ae]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(de[ae])}n.remove(I)}let k=0;function O(){k=0}function J(){return k}function ce(I){k=I}function _e(){let I=k;return I>=s.maxTextures&&et("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,I}function $(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function ye(I,E){let Y=n.get(I);if(I.isVideoTexture&&Yt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){let de=I.image;if(de===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{se(Y,I,E);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+E)}function Ce(I,E){let Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){se(Y,I,E);return}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+E)}function Ge(I,E){let Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){se(Y,I,E);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+E)}function pe(I,E){let Y=n.get(I);if(I.version>0&&Y.__version!==I.version){me(Y,I,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+E)}let Ve={[pi]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[al]:i.MIRRORED_REPEAT},St={[fn]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[Qo]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Nl]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},ze={[bf]:i.NEVER,[Zh]:i.ALWAYS,[Sf]:i.LESS,[Yh]:i.LEQUAL,[wf]:i.EQUAL,[$h]:i.GEQUAL,[Ef]:i.GREATER,[Tf]:i.NOTEQUAL};function at(I,E){if(E.type===Zn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===Nl||E.magFilter===Qo||E.magFilter===qi||E.minFilter===Cn||E.minFilter===Nl||E.minFilter===Qo||E.minFilter===qi)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Ve[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Ve[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Ve[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,St[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ze[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===fn||E.minFilter!==Qo&&E.minFilter!==qi||E.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ee(I,E){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",L),R(E));let de=E.source,ae=f.get(de);ae===void 0&&(ae={},f.set(de,ae));let ve=$(E);if(ve!==I.__cacheKey){ae[ve]===void 0&&(ae[ve]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ae[ve].usedTimes++;let Te=ae[I.__cacheKey];Te!==void 0&&(ae[I.__cacheKey].usedTimes--,Te.usedTimes===0&&G(E)),I.__cacheKey=ve,I.__webglTexture=ae[ve].texture}return Y}function X(I,E,Y){return Math.floor(Math.floor(I/Y)/E)}function Q(I,E,Y,de){let ve=I.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,Y,de,E.data);else{ve.sort((F,oe)=>F.start-oe.start);let Te=0;for(let F=1;F<ve.length;F++){let oe=ve[Te],te=ve[F],Se=oe.start+oe.count,ge=X(te.start,E.width,4),Me=X(oe.start,E.width,4);te.start<=Se+1&&ge===Me&&X(te.start+te.count-1,E.width,4)===ge?oe.count=Math.max(oe.count,te.start+te.count-oe.start):(++Te,ve[Te]=te)}ve.length=Te+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let F=0,oe=ve.length;F<oe;F++){let te=ve[F],Se=Math.floor(te.start/4),ge=Math.ceil(te.count/4),Me=Se%E.width,We=Math.floor(Se/E.width),dt=ge,fe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(i.UNPACK_SKIP_ROWS,We),t.texSubImage2D(i.TEXTURE_2D,0,Me,We,dt,fe,Y,de,E.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function se(I,E,Y){let de=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=i.TEXTURE_3D);let ae=ee(I,E),ve=E.source;t.bindTexture(de,I.__webglTexture,i.TEXTURE0+Y);let Te=n.get(ve);if(ve.version!==Te.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let fe=mt.getPrimaries(mt.workingColorSpace),Ze=E.colorSpace===$i?null:mt.getPrimaries(E.colorSpace),ut=E.colorSpace===$i||fe===Ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let re=y(E.image,!1,s.maxTextureSize);re=Ke(E,re);let be=r.convert(E.format,E.colorSpace),F=r.convert(E.type),oe=S(E.internalFormat,be,F,E.normalized,E.colorSpace,E.isVideoTexture);at(de,E);let te,Se=E.mipmaps,ge=E.isVideoTexture!==!0,Me=Te.__version===void 0||ae===!0,We=ve.dataReady,dt=b(E,re);if(E.isDepthTexture)oe=_(E.format===Yi,E.type),Me&&(ge?t.texStorage2D(i.TEXTURE_2D,1,oe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,oe,re.width,re.height,0,be,F,null));else if(E.isDataTexture)if(Se.length>0){ge&&Me&&t.texStorage2D(i.TEXTURE_2D,dt,oe,Se[0].width,Se[0].height);for(let fe=0,Ze=Se.length;fe<Ze;fe++)te=Se[fe],ge?We&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,te.width,te.height,be,F,te.data):t.texImage2D(i.TEXTURE_2D,fe,oe,te.width,te.height,0,be,F,te.data);E.generateMipmaps=!1}else ge?(Me&&t.texStorage2D(i.TEXTURE_2D,dt,oe,re.width,re.height),We&&Q(E,re,be,F)):t.texImage2D(i.TEXTURE_2D,0,oe,re.width,re.height,0,be,F,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ge&&Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,dt,oe,Se[0].width,Se[0].height,re.depth);for(let fe=0,Ze=Se.length;fe<Ze;fe++)if(te=Se[fe],E.format!==li)if(be!==null)if(ge){if(We)if(E.layerUpdates.size>0){let ut=ou(te.width,te.height,E.format,E.type);for(let Ie of E.layerUpdates){let Pt=te.data.subarray(Ie*ut/te.data.BYTES_PER_ELEMENT,(Ie+1)*ut/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Ie,te.width,te.height,1,be,Pt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,te.width,te.height,re.depth,be,te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,oe,te.width,te.height,re.depth,0,te.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?We&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,te.width,te.height,re.depth,be,F,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,oe,te.width,te.height,re.depth,0,be,F,te.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ge&&Me&&t.texStorage2D(i.TEXTURE_2D,dt,oe,Se[0].width,Se[0].height);for(let fe=0,Ze=Se.length;fe<Ze;fe++)te=Se[fe],E.format!==li?be!==null?ge?We&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,te.width,te.height,be,te.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,oe,te.width,te.height,0,te.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?We&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,te.width,te.height,be,F,te.data):t.texImage2D(i.TEXTURE_2D,fe,oe,te.width,te.height,0,be,F,te.data)}else if(E.isDataArrayTexture)if(ge){if(Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,dt,oe,re.width,re.height,re.depth),We)if(E.layerUpdates.size>0){let fe=ou(re.width,re.height,E.format,E.type);for(let Ze of E.layerUpdates){let ut=re.data.subarray(Ze*fe/re.data.BYTES_PER_ELEMENT,(Ze+1)*fe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ze,re.width,re.height,1,be,F,ut)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,be,F,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,re.width,re.height,re.depth,0,be,F,re.data);else if(E.isData3DTexture)ge?(Me&&t.texStorage3D(i.TEXTURE_3D,dt,oe,re.width,re.height,re.depth),We&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,be,F,re.data)):t.texImage3D(i.TEXTURE_3D,0,oe,re.width,re.height,re.depth,0,be,F,re.data);else if(E.isFramebufferTexture){if(Me)if(ge)t.texStorage2D(i.TEXTURE_2D,dt,oe,re.width,re.height);else{let fe=re.width,Ze=re.height;for(let ut=0;ut<dt;ut++)t.texImage2D(i.TEXTURE_2D,ut,oe,fe,Ze,0,be,F,null),fe>>=1,Ze>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let fe=i.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),re.parentNode!==fe){fe.appendChild(re),d.add(E),fe.onpaint=Ze=>{let ut=Ze.changedElements;for(let Ie of d)ut.includes(Ie.image)&&(Ie.needsUpdate=!0)},fe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let ut=i.RGBA,Ie=i.RGBA,Pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ut,Ie,Pt,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Se.length>0){if(ge&&Me){let fe=it(Se[0]);t.texStorage2D(i.TEXTURE_2D,dt,oe,fe.width,fe.height)}for(let fe=0,Ze=Se.length;fe<Ze;fe++)te=Se[fe],ge?We&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be,F,te):t.texImage2D(i.TEXTURE_2D,fe,oe,be,F,te);E.generateMipmaps=!1}else if(ge){if(Me){let fe=it(re);t.texStorage2D(i.TEXTURE_2D,dt,oe,fe.width,fe.height)}We&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,F,re)}else t.texImage2D(i.TEXTURE_2D,0,oe,be,F,re);v(E)&&E.mipmapsAutoUpdate===!0&&M(de),Te.__version=ve.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function me(I,E,Y){if(E.image.length!==6)return;let de=ee(I,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);let ve=n.get(ae);if(ae.version!==ve.__version||de===!0){t.activeTexture(i.TEXTURE0+Y);let Te=mt.getPrimaries(mt.workingColorSpace),ie=E.colorSpace===$i?null:mt.getPrimaries(E.colorSpace),re=E.colorSpace===$i||Te===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let be=E.isCompressedTexture||E.image[0].isCompressedTexture,F=E.image[0]&&E.image[0].isDataTexture,oe=[];for(let Ie=0;Ie<6;Ie++)!be&&!F?oe[Ie]=y(E.image[Ie],!0,s.maxCubemapSize):oe[Ie]=F?E.image[Ie].image:E.image[Ie],oe[Ie]=Ke(E,oe[Ie]);let te=oe[0],Se=r.convert(E.format,E.colorSpace),ge=r.convert(E.type),Me=S(E.internalFormat,Se,ge,E.normalized,E.colorSpace),We=E.isVideoTexture!==!0,dt=ve.__version===void 0||de===!0,fe=ae.dataReady,Ze=b(E,te);at(i.TEXTURE_CUBE_MAP,E);let ut;if(E.isDepthTexture){if(Me=_(E.format===Yi,E.type),dt)if(We)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Me,te.width,te.height);else for(let Ie=0;Ie<6;Ie++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Me,te.width,te.height,0,Se,ge,null)}else if(be){We&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,Me,te.width,te.height);for(let Ie=0;Ie<6;Ie++){ut=oe[Ie].mipmaps;for(let Pt=0;Pt<ut.length;Pt++){let hn=ut[Pt];E.format!==li?Se!==null?We?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt,0,0,hn.width,hn.height,Se,hn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt,Me,hn.width,hn.height,0,hn.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt,0,0,hn.width,hn.height,Se,ge,hn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt,Me,hn.width,hn.height,0,Se,ge,hn.data)}}}else{if(ut=E.mipmaps,We&&dt){ut.length>0&&Ze++;let Ie=it(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,Me,Ie.width,Ie.height)}for(let Ie=0;Ie<6;Ie++)if(F){We?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,oe[Ie].width,oe[Ie].height,Se,ge,oe[Ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Me,oe[Ie].width,oe[Ie].height,0,Se,ge,oe[Ie].data);for(let Pt=0;Pt<ut.length;Pt++){let ns=ut[Pt].image[Ie].image;We?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt+1,0,0,ns.width,ns.height,Se,ge,ns.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt+1,Me,ns.width,ns.height,0,Se,ge,ns.data)}}else{We?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,Se,ge,oe[Ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Me,Se,ge,oe[Ie]);for(let Pt=0;Pt<ut.length;Pt++){let hn=ut[Pt];We?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt+1,0,0,Se,ge,hn.image[Ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Pt+1,Me,Se,ge,hn.image[Ie])}}}v(E)&&E.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ve.__version=ae.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ue(I,E,Y,de,ae,ve){let Te=r.convert(Y.format,Y.colorSpace),ie=r.convert(Y.type),re=S(Y.internalFormat,Te,ie,Y.normalized,Y.colorSpace),be=n.get(E),F=n.get(Y);if(F.__renderTarget=E,!be.__hasExternalTextures){let oe=Math.max(1,E.width>>ve),te=Math.max(1,E.height>>ve);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ve,re,oe,te,E.depth,0,Te,ie,null):t.texImage2D(ae,ve,re,oe,te,0,Te,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ee(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ae,F.__webglTexture,0,Ot(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,ae,F.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(I,E,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){let de=E.depthTexture,ae=de&&de.isDepthTexture?de.type:null,ve=_(E.stencilBuffer,ae),Te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ee(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot(E),ve,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot(E),ve,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ve,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,I)}else{let de=E.textures;for(let ae=0;ae<de.length;ae++){let ve=de[ae],Te=r.convert(ve.format,ve.colorSpace),ie=r.convert(ve.type),re=S(ve.internalFormat,Te,ie,ve.normalized,ve.colorSpace);Ee(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot(E),re,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot(E),re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,re,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(I,E,Y){let de=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(E.depthTexture);ae.__renderTarget=E;let ve=de?E.depthTexture.image[0]:E.depthTexture.image;(!ae.__webglTexture||ve.width!==E.width||ve.height!==E.height)&&(ve.width=E.width,ve.height=E.height,E.depthTexture.needsUpdate=!0),de?pe(E.depthTexture,0):ye(E.depthTexture,0);let Te=ae.__webglTexture,ie=Ot(E),re=de?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,be=E.depthTexture.format===Yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===ki)Ee(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,re,Te,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,be,re,Te,0);else if(E.depthTexture.format===Yi)Ee(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,re,Te,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,be,re,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(I){let E=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let de=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){let ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",ae)};de.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=de}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let de=0;de<6;de++)Le(E.__webglFramebuffer[de],I,de);else I.texture.mipmaps.length>0?Le(E.__webglFramebuffer[0],I,0):Le(E.__webglFramebuffer,I,0);else if(Y){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=i.createRenderbuffer(),Xe(E.__webglDepthbuffer[de],I,!1);else{let ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ve)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Xe(E.__webglDepthbuffer,I,!1);else{let ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ve)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(I,E,Y){let de=n.get(I);E!==void 0&&ue(de.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&st(I)}function xt(I){let E=I.texture,Y=n.get(I),de=n.get(E);I.addEventListener("dispose",C),R(I);let ae=I.textures,ve=I.isWebGLCubeRenderTarget===!0,Te=ae.length>1;if(Te||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=E.version,o.memory.textures++),ve){Y.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(E.mipmaps.length>0){Y.__webglFramebuffer[ie]=[];for(let re=0;re<E.mipmaps.length;re++)Y.__webglFramebuffer[ie][re]=i.createFramebuffer()}else Y.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ie=0;ie<E.mipmaps.length;ie++)Y.__webglFramebuffer[ie]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Te)for(let ie=0,re=ae.length;ie<re;ie++){let be=n.get(ae[ie]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Ee(I)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ie=0;ie<ae.length;ie++){let re=ae[ie];Y.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ie]);let be=r.convert(re.format,re.colorSpace),F=r.convert(re.type),oe=S(re.internalFormat,be,F,re.normalized,re.colorSpace,I.isXRRenderTarget===!0),te=Ot(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,oe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),at(i.TEXTURE_CUBE_MAP,E);for(let ie=0;ie<6;ie++)if(E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)ue(Y.__webglFramebuffer[ie][re],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,re);else ue(Y.__webglFramebuffer[ie],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);v(E)?M(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let ie=0,re=ae.length;ie<re;ie++){let be=ae[ie],F=n.get(be),oe=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(oe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,F.__webglTexture),at(oe,be),ue(Y.__webglFramebuffer,I,be,i.COLOR_ATTACHMENT0+ie,oe,0),v(be)&&M(oe)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ie=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,de.__webglTexture),at(ie,E),E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)ue(Y.__webglFramebuffer[re],I,E,i.COLOR_ATTACHMENT0,ie,re);else ue(Y.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,ie,0);v(E)?M(ie):E.mipmaps.length>0&&i.texParameteri(ie,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&st(I)}function H(I){let E=I.textures;for(let Y=0,de=E.length;Y<de;Y++){let ae=E[Y];if(v(ae)&&ae.mipmapsAutoUpdate===!0){let ve=w(I),Te=n.get(ae).__webglTexture;t.bindTexture(ve,Te),M(ve),t.unbindTexture()}}}let Kt=[];function pt(I){if(I.samples>0){if(Ee(I)===!1){let E=I.textures,Y=I.width,de=I.height,ae=i.COLOR_BUFFER_BIT,ve=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(I),ie=E.length>1;if(ie)for(let be=0;be<E.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let be=0;be<E.length;be++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);let F=n.get(E[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,Y,de,0,0,Y,de,ae,i.NEAREST),l===!0&&(Kt.length=0,Kt.push(i.COLOR_ATTACHMENT0+be),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Kt.push(ve),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Kt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let be=0;be<E.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);let F=n.get(E[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,F,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Ot(I){return Math.min(s.maxSamples,I.samples)}function Ee(I){let E=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Yt(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function Ke(I,E){let Y=I.colorSpace,de=I.format,ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==ho&&Y!==$i&&(mt.getTransfer(Y)===wt?(de!==li||ae!==Nn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",Y)),E}function it(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=_e,this.resetTextureUnits=O,this.getTextureUnits=J,this.setTextureUnits=ce,this.setTexture2D=ye,this.setTexture2DArray=Ce,this.setTexture3D=Ge,this.setTextureCube=pe,this.rebindTextures=qe,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ee,this.dispose=V}function eM(i,e){function t(n,s=$i){let r,o=mt.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hh)return i.BYTE;if(n===Gh)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===Ul)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===qh)return i.RGB;if(n===li)return i.RGBA;if(n===ki)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Bl)return i.RED;if(n===zl)return i.RED_INTEGER;if(n===ms)return i.RG;if(n===kl)return i.RG_INTEGER;if(n===Hl)return i.RGBA_INTEGER;if(n===ea||n===ta||n===na||n===ia)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gl||n===Vl||n===Wl||n===Xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===Yl||n===$l||n===Zl||n===Jl||n===sa||n===Kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ql||n===Yl)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zl)return r.COMPRESSED_R11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return r.COMPRESSED_RG11_EAC;if(n===Kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ql)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===fc||n===pc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===dc)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mc||n===gc||n===ra||n===xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var tM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nM=`
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

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Eo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new kt({vertexShader:tM,fragmentShader:nM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gu=class extends mi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new mu,m={},y=t.getContextAttributes(),v=null,M=null,w=[],S=[],_=new le,b=null,R=null,A=new gn;A.viewport=new Wt;let L=new gn;L.viewport=new Wt;let C=[A,L],U=new Il,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ye=w[$];return ye===void 0&&(ye=new yr,w[$]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function($){let ye=w[$];return ye===void 0&&(ye=new yr,w[$]=ye),ye.getGripSpace()},this.getHand=function($){let ye=w[$];return ye===void 0&&(ye=new yr,w[$]=ye),ye.getHandSpace()};function W($){let ye=S.indexOf($.inputSource);if(ye===-1)return;let Ce=w[ye];Ce!==void 0&&(Ce.update($.inputSource,$.frame,c||o),Ce.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",K);for(let $=0;$<w.length;$++){let ye=S[$];ye!==null&&(S[$]=null,w[$].disconnect(ye))}P=null,V=null,g.reset();for(let $ in m)delete m[$];if(e.setRenderTarget(v),f=null,u=null,d=null,s=null,M=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),R!==null){let $=R.camera;$.fov=R.fov,$.zoom=R.zoom,$.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",G),s.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ge=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=y.stencil?Yi:ki,Ge=y.stencil?Gs:ai);let Ve={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ve),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new sn(u.textureWidth,u.textureHeight,{format:li,type:Nn,depthTexture:new Vi(u.textureWidth,u.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new sn(f.framebufferWidth,f.framebufferHeight,{format:li,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K($){for(let ye=0;ye<$.removed.length;ye++){let Ce=$.removed[ye],Ge=S.indexOf(Ce);Ge>=0&&(S[Ge]=null,w[Ge].disconnect(Ce))}for(let ye=0;ye<$.added.length;ye++){let Ce=$.added[ye],Ge=S.indexOf(Ce);if(Ge===-1){for(let Ve=0;Ve<w.length;Ve++)if(Ve>=S.length){S.push(Ce),Ge=Ve;break}else if(S[Ve]===null){S[Ve]=Ce,Ge=Ve;break}if(Ge===-1)break}let pe=w[Ge];pe&&pe.connect(Ce)}}function k($,ye){ye===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ye.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ye=$.near,Ce=$.far;g.texture!==null&&(g.depthNear>0&&(ye=g.depthNear),g.depthFar>0&&(Ce=g.depthFar)),U.near=L.near=A.near=ye,U.far=L.far=A.far=Ce,(P!==U.near||V!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,V=U.far),U.layers.mask=$.layers.mask|6,A.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let Ge=$.parent,pe=U.cameras;k(U,Ge);for(let Ve=0;Ve<pe.length;Ve++)k(pe[Ve],Ge);U.projectionMatrix.copy(A.projectionMatrix),U.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&$.isPerspectiveCamera&&(R={camera:$,fov:$.fov,zoom:$.zoom}),O($,U,Ge)};function O($,ye,Ce){Ce===null?$.matrix.copy(ye.matrixWorld):($.matrix.copy(Ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(ye.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ye.projectionMatrix),$.projectionMatrixInverse.copy(ye.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ls*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function($){return m[$]};let J=null;function ce($,ye){if(h=ye.getViewerPose(c||o),p=ye,h!==null){let Ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ge=!1;Ce.length!==U.cameras.length&&(U.cameras.length=0,Ge=!0);for(let ze=0;ze<Ce.length;ze++){let at=Ce[ze],ee=null;if(f!==null)ee=f.getViewport(at);else{let Q=d.getViewSubImage(u,at);ee=Q.viewport,ze===0&&(e.setRenderTargetTextures(M,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(M))}let X=C[ze];X===void 0&&(X=new gn,X.layers.enable(ze),X.viewport=new Wt,C[ze]=X),X.matrix.fromArray(at.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(at.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ee.x,ee.y,ee.width,ee.height),ze===0&&(U.matrix.copy(X.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ge===!0&&U.cameras.push(X)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let ze=d.getDepthInformation(Ce[0]);ze&&ze.isValid&&ze.texture&&g.init(ze,s.renderState)}if(pe&&pe.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let ze=0;ze<Ce.length;ze++){let at=Ce[ze].camera;if(at){let ee=m[at];ee||(ee=new Eo,m[at]=ee);let X=d.getCameraImage(at);ee.sourceTexture=X}}}}for(let Ce=0;Ce<w.length;Ce++){let Ge=S[Ce],pe=w[Ce];Ge!==null&&pe!==void 0&&pe.update(Ge,ye,c||o)}J&&J($,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),p=null}let _e=new op;_e.setAnimationLoop(ce),this.setAnimationLoop=function($){J=$},this.dispose=function(){}}},iM=new Ct,gp=new rt;gp.set(-1,0,0,0,1,0,0,0,1);function sM(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,iu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,v,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),v=y.envMap,M=y.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(gp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rM(i,e,t,n){let s={},r={};function o(y,v){let M=v.program;n.uniformBlockBinding(y,M,s[y.id])}function a(y,v){let M=s[y.id];M===void 0&&(p(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",g));let w=v.program;n.updateUBOMapping(y,w);let S=e.render.frame;r[y.id]!==S&&(c(y),r[y.id]=S)}function l(y){let v=i.createBuffer(),M=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function c(y){let v=s[y.id],M=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,_=M.length;S<_;S++){let b=M[S];if(Array.isArray(b))for(let R=0,A=b.length;R<A;R++)h(b[R],S,R,w);else h(b,S,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,v,M,w){if(u(y,v,M,w)===!0){let S=y.__offset,_=y.value;if(Array.isArray(_)){let b=0;for(let R=0;R<_.length;R++){let A=_[R],L=x(A,!0);d(A,y.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,y.__data)}}function d(y,v,M){typeof y=="number"||typeof y=="boolean"?v[M]=y:y.isMatrix3?(v[M]=y.elements[0],v[M+1]=y.elements[1],v[M+2]=y.elements[2],v[M+3]=0,v[M+4]=y.elements[3],v[M+5]=y.elements[4],v[M+6]=y.elements[5],v[M+7]=0,v[M+8]=y.elements[6],v[M+9]=y.elements[7],v[M+10]=y.elements[8],v[M+11]=0):ArrayBuffer.isView(y)?v.set(y.subarray(0,v.length-M),M):y.toArray(v,M)}function u(y,v,M,w){let S=y.value,_=v+"_"+M;if(Array.isArray(S)){w[_]===void 0&&(w[_]=[]);let b=w[_],R=!1;for(let A=0;A<S.length;A++)f(S[A],b,A)===!0&&(R=!0);return R}return f(S,w,_)}function f(y,v,M){if(v[M]===void 0)return typeof y=="number"||typeof y=="boolean"?v[M]=y:ArrayBuffer.isView(y)?v[M]=y.slice():v[M]=y.clone(),!0;{let w=v[M];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return v[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function p(y){let v=y.uniforms,M=0,w=16;for(let _=0,b=v.length;_<b;_++){let R=Array.isArray(v[_])?v[_]:[v[_]];for(let A=0,L=R.length;A<L;A++){let C=R[A],U=Array.isArray(C.value)?C.value:[C.value],P=Array.isArray(v[_])||Array.isArray(C.value),V=M;for(let G=0,K=U.length;G<K;G++){let k=U[G],O=x(k,P),J=M%w,ce=J%O.boundary,_e=J+ce;M+=ce,_e!==0&&w-_e<O.storage&&(M+=w-_e),G===0&&(V=M),M+=O.storage}let W=C.type==="int"?Int32Array:C.type==="uint"?Uint32Array:Float32Array;C.__data=new W((M-V)/Float32Array.BYTES_PER_ELEMENT),C.__offset=V}}let S=M%w;return S>0&&(M+=w-S),y.__size=M,y.__cache={},this}function x(y,v){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):et("WebGLRenderer: Unsupported uniform value type.",y),v===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(y){let v=y.target;v.removeEventListener("dispose",g),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:m}}var oM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function aM(){return Si===null&&(Si=new bo(oM,16,16,ms,_n),Si.name="DFG_LUT",Si.minFilter=Cn,Si.magFilter=Cn,Si.wrapS=fi,Si.wrapT=fi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var wc=class{constructor(e={}){let{canvas:t=Af(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Nn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,g=new Set([Hl,kl,zl]),m=new Set([Nn,ai,Dr,Gs,Fl,Ol]),y=new Uint32Array(4),v=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},w=null,S=null,_=[],b=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,C=null,U=null,P=null,V=null;this._outputColorSpace=Vt;let W=0,G=0,K=null,k=-1,O=null,J=new Wt,ce=new Wt,_e=null,$=new Be(0),ye=0,Ce=t.width,Ge=t.height,pe=1,Ve=null,St=null,ze=new Wt(0,0,Ce,Ge),at=new Wt(0,0,Ce,Ge),ee=!1,X=new hs,Q=new dl,se=!1,me=!1,ue=new Ct,Xe=new D,Le=new Wt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function xt(){return K===null?pe:1}let H=n;function Kt(T,z){return t.getContext(T,z)}let pt,Ot,Ee,Yt,Ke,it,I,E,Y,de,ae,ve,Te,ie,re,be,F,oe,te,Se,ge,Me,We;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),H===null){let z="webgl2";if(H=Kt(z,T),H===null)throw Kt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}dt()}catch(T){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),tt("WebGLRenderer: "+T.message),T}function dt(){pt=new _y(H),pt.init(),ge=new eM(H,pt),Ot=new ay(H,pt,e,ge),Ee=new jv(H,pt),Ot.reversedDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),U=H.createFramebuffer(),P=H.createFramebuffer(),V=H.createFramebuffer(),Yt=new My(H),Ke=new Bv,it=new Qv(H,pt,Ee,Ke,Ot,ge,Yt),I=new xy(A),E=new Sg(H),Me=new ry(H,E),Y=new yy(H,E,Yt,Me),de=new Sy(H,Y,E,Me,Yt),oe=new by(H,Ot,it),re=new ly(Ke),ae=new Ov(A,I,pt,Ot,Me,re),ve=new sM(A,Ke),Te=new kv,ie=new qv(pt),F=new sy(A,I,Ee,de,p,l),be=new Kv(A,de,Ot),We=new rM(H,Yt,Ot,Ee),te=new oy(H,pt,Yt),Se=new vy(H,pt,Yt),Yt.programs=ae.programs,A.capabilities=Ot,A.extensions=pt,A.properties=Ke,A.renderLists=Te,A.shadowMap=be,A.state=Ee,A.info=Yt}x!==Nn&&(R=new Ey(x,t.width,t.height,a,s,r));let fe=new gu(A,H);this.xr=fe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let T=pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(T){T!==void 0&&(pe=T,this.setSize(Ce,Ge,!1))},this.getSize=function(T){return T.set(Ce,Ge)},this.setSize=function(T,z,j=!0){if(fe.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=T,Ge=z,t.width=Math.floor(T*pe),t.height=Math.floor(z*pe),j===!0&&(t.style.width=T+"px",t.style.height=z+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(Ce*pe,Ge*pe).floor()},this.setDrawingBufferSize=function(T,z,j){Ce=T,Ge=z,pe=j,t.width=Math.floor(T*j),t.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(x===Nn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(J)},this.getViewport=function(T){return T.copy(ze)},this.setViewport=function(T,z,j,q){T.isVector4?ze.set(T.x,T.y,T.z,T.w):ze.set(T,z,j,q),Ee.viewport(J.copy(ze).multiplyScalar(xt()).round())},this.getScissor=function(T){return T.copy(at)},this.setScissor=function(T,z,j,q){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,z,j,q),Ee.scissor(ce.copy(at).multiplyScalar(xt()).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(T){Ee.setScissorTest(ee=T)},this.setOpaqueSort=function(T){Ve=T},this.setTransparentSort=function(T){St=T},this.getClearColor=function(T){return T.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,j=!0){let q=0;if(T){let Z=!1;if(K!==null){let Ae=K.texture.format;Z=g.has(Ae)}if(Z){let Ae=K.texture.type,Ue=m.has(Ae),we=F.getClearColor(),De=F.getClearAlpha(),He=we.r,lt=we.g,_t=we.b;Ue?(y[0]=He,y[1]=lt,y[2]=_t,y[3]=De,H.clearBufferuiv(H.COLOR,0,y)):(v[0]=He,v[1]=lt,v[2]=_t,v[3]=De,H.clearBufferiv(H.COLOR,0,v))}else q|=H.COLOR_BUFFER_BIT}z&&(q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),C=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),F.dispose(),Te.dispose(),ie.dispose(),it.dispose(),Ke.dispose(),I.dispose(),de.dispose(),Y.dispose(),Me.dispose(),We.dispose(),ae.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",td),fe.removeEventListener("sessionend",nd),ws.stop()};function Ze(T){T.preventDefault(),fo("WebGLRenderer: Context Lost."),L=!0}function ut(){fo("WebGLRenderer: Context Restored."),L=!1;let T=Yt.autoReset,z=be.enabled,j=be.autoUpdate,q=be.needsUpdate,Z=be.type;dt(),Yt.autoReset=T,be.enabled=z,be.autoUpdate=j,be.needsUpdate=q,be.type=Z}function Ie(T){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pt(T){let z=T.target;z.removeEventListener("dispose",Pt),hn(z)}function hn(T){ns(T),Ke.remove(T)}function ns(T){let z=Ke.get(T).programs;z!==void 0&&(z.forEach(function(j){ae.releaseProgram(j)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,j,q,Z,Ae){z===null&&(z=st);let Ue=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,we=Ym(T,z,j,q,Z);Ee.setMaterial(q,Ue);let De=j.index,He=1;if(q.wireframe===!0){if(De=Y.getWireframeAttribute(j),De===void 0)return;He=2}let lt=j.drawRange,_t=j.attributes.position,Fe=lt.start*He,yt=(lt.start+lt.count)*He;Ae!==null&&(Fe=Math.max(Fe,Ae.start*He),yt=Math.min(yt,(Ae.start+Ae.count)*He)),De!==null?(Fe=Math.max(Fe,0),yt=Math.min(yt,De.count)):_t!=null&&(Fe=Math.max(Fe,0),yt=Math.min(yt,_t.count));let jt=yt-Fe;if(jt<0||jt===1/0)return;Me.setup(Z,q,we,j,De);let zt,Bt=te;if(De!==null&&(zt=E.get(De),Bt=Se,Bt.setIndex(zt)),Z.isMesh)q.wireframe===!0?(Ee.setLineWidth(q.wireframeLinewidth*xt()),Bt.setMode(H.LINES)):Bt.setMode(H.TRIANGLES);else if(Z.isLine){let Mn=q.linewidth;Mn===void 0&&(Mn=1),Ee.setLineWidth(Mn*xt()),Z.isLineSegments?Bt.setMode(H.LINES):Z.isLineLoop?Bt.setMode(H.LINE_LOOP):Bt.setMode(H.LINE_STRIP)}else Z.isPoints?Bt.setMode(H.POINTS):Z.isSprite&&Bt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Mn=Z._multiDrawStarts,Oe=Z._multiDrawCounts,An=Z._multiDrawCount,Tt=De?E.get(De).bytesPerElement:1,Es=Ke.get(q).currentProgram.getUniforms();for(let bn=0;bn<An;bn++)Es.setValue(H,"_gl_DrawID",bn),Bt.render(Mn[bn]/Tt,Oe[bn])}else if(Z.isInstancedMesh)Bt.renderInstances(Fe,jt,Z.count);else if(j.isInstancedBufferGeometry){let Mn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Oe=Math.min(j.instanceCount,Mn);Bt.renderInstances(Fe,jt,Oe)}else Bt.render(Fe,jt)};function ed(T,z,j,q){C!==null&&T.isNodeMaterial&&C.setObject(q,T),se===!0&&re.setState(T,j,!1),T.transparent===!0&&T.side===xn&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Yr(T,z,q),T.side=ps,T.needsUpdate=!0,Yr(T,z,q),T.side=xn):Yr(T,z,q)}this.compile=function(T,z,j=null){j===null&&(j=T),C!==null&&C.renderStart(T,z,j),S=ie.get(j),S.init(z),b.push(S),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),T!==j&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights(),C!==null&&C.updateLights(S.state.lightsArray),me=this.localClippingEnabled,se=re.init(this.clippingPlanes,me),se===!0&&re.setGlobalState(this.clippingPlanes,z),C!==null&&be.render(S.state.shadowsArray,j,z);let q=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){let we=Ae[Ue];ed(we,j,z,Z),q.add(we)}else ed(Ae,j,z,Z),q.add(Ae)}),S=b.pop(),C!==null&&C.renderEnd(),q},this.compileAsync=function(T,z,j=null){let q=this.compile(T,z,j);return new Promise(Z=>{function Ae(){if(q.forEach(function(Ue){let De=Ke.get(Ue).currentProgram;(De===void 0||De.isReady())&&q.delete(Ue)}),q.size===0){Z(T);return}setTimeout(Ae,10)}pt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Zc=null;function Xm(T){Zc&&Zc(T)}function td(){ws.stop()}function nd(){ws.start()}let ws=new op;ws.setAnimationLoop(Xm),typeof self<"u"&&ws.setContext(self),this.setAnimationLoop=function(T){Zc=T,fe.setAnimationLoop(T),T===null?ws.stop():ws.start()},fe.addEventListener("sessionstart",td),fe.addEventListener("sessionend",nd),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;C!==null&&C.renderStart(T,z);let j=fe.enabled===!0&&fe.isPresenting===!0,q=R!==null&&(K===null||j)&&R.begin(A,K);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(z),z=fe.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,z,K),S=ie.get(T,b.length),S.init(z),S.state.textureUnits=it.getTextureUnits(),b.push(S),ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?Q.setFromArrayCamera(z):X.setFromProjectionMatrix(ue,Yn,z.reversedDepth),me=this.localClippingEnabled,se=re.init(this.clippingPlanes,me),w=Te.get(T,_.length),w.init(),_.push(w),this.info.render.frame++,fe.enabled===!0&&fe.isPresenting===!0){let Ue=A.xr.getDepthSensingMesh();Ue!==null&&Jc(Ue,z,-1/0,A.sortObjects)}Jc(T,z,0,A.sortObjects),w.finish(),C!==null&&C.updateLights(S.state.lightsArray),A.sortObjects===!0&&w.sort(Ve,St),qe=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,qe&&F.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),se===!0&&re.beginShadows();let Z=S.state.shadowsArray;if(be.render(Z,T,z),se===!0&&re.endShadows(),(q&&R.hasRenderPass())===!1){let Ue=w.opaque,we=w.transmissive;if(S.setupLights(),z.isArrayCamera){let De=z.cameras;if(we.length>0)for(let He=0,lt=De.length;He<lt;He++){let _t=De[He];sd(Ue,we,T,_t)}qe&&F.render(T);for(let He=0,lt=De.length;He<lt;He++){let _t=De[He];id(w,T,_t,_t.viewport)}}else we.length>0&&sd(Ue,we,T,z),qe&&F.render(T),id(w,T,z)}K!==null&&G===0&&(it.updateMultisampleRenderTarget(K),it.updateRenderTargetMipmap(K)),q&&R.end(A),T.isScene===!0&&T.onAfterRender(A,T,z),Me.resetDefaultState(),k=-1,O=null,b.pop(),b.length>0?(S=b[b.length-1],it.setTextureUnits(S.state.textureUnits),se===!0&&re.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,C!==null&&C.renderEnd()};function Jc(T,z,j,q){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){let Ue=z.isArrayCamera?Q:X;if(!T.frustumCulled||T.intersectsFrustum(Ue)){q&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);let we=de.update(T),De=T.material;De.visible&&w.push(T,we,De,j,Le.z,null,z)}}else if(T.isMesh||T.isLine||T.isPoints){let Ue=z.isArrayCamera?Q:X;if(!T.frustumCulled||T.intersectsFrustum(Ue)){let we=de.update(T),De=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Le.copy(we.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(De)){let He=we.groups;for(let lt=0,_t=He.length;lt<_t;lt++){let Fe=He[lt],yt=De[Fe.materialIndex];yt&&yt.visible&&w.push(T,we,yt,j,Le.z,Fe,z)}}else De.visible&&w.push(T,we,De,j,Le.z,null,z)}}}let Ae=T.children;for(let Ue=0,we=Ae.length;Ue<we;Ue++)Jc(Ae[Ue],z,j,q)}function id(T,z,j,q){let{opaque:Z,transmissive:Ae,transparent:Ue}=T;S.setupLightsView(j),se===!0&&re.setGlobalState(A.clippingPlanes,j),q&&Ee.viewport(J.copy(q)),Z.length>0&&Ma(Z,z,j),Ae.length>0&&Ma(Ae,z,j),Ue.length>0&&Ma(Ue,z,j),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function sd(T,z,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){let Fe=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new sn(1,1,{generateMipmaps:!0,type:Fe?_n:Nn,minFilter:qi,samples:Math.max(4,Ot.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mt.workingColorSpace})}let Ae=S.state.transmissionRenderTarget[q.id],Ue=q.viewport||J;Ae.setSize(Ue.z*A.transmissionResolutionScale,Ue.w*A.transmissionResolutionScale);let we=A.getRenderTarget(),De=A.getActiveCubeFace(),He=A.getActiveMipmapLevel();A.setRenderTarget(Ae),A.getClearColor($),ye=A.getClearAlpha(),ye<1&&A.setClearColor(16777215,.5),A.clear(),qe&&F.render(j);let lt=A.toneMapping;A.toneMapping=bi;let _t=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),se===!0&&re.setGlobalState(A.clippingPlanes,q),Ma(T,j,q),it.updateMultisampleRenderTarget(Ae),it.updateRenderTargetMipmap(Ae),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let yt=0,jt=z.length;yt<jt;yt++){let zt=z[yt],{object:Bt,geometry:Mn,material:Oe,group:An}=zt;if(Oe.side===xn&&Bt.layers.test(q.layers)){let Tt=Oe.side;Oe.side=rn,Oe.needsUpdate=!0,rd(Bt,j,q,Mn,Oe,An),Oe.side=Tt,Oe.needsUpdate=!0,Fe=!0}}Fe===!0&&(it.updateMultisampleRenderTarget(Ae),it.updateRenderTargetMipmap(Ae))}A.setRenderTarget(we,De,He),A.setClearColor($,ye),_t!==void 0&&(q.viewport=_t),A.toneMapping=lt}function Ma(T,z,j){let q=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,Ae=T.length;Z<Ae;Z++){let Ue=T[Z],{object:we,geometry:De,group:He}=Ue,lt=Ue.material;lt.allowOverride===!0&&q!==null&&(lt=q),we.layers.test(j.layers)&&rd(we,z,j,De,lt,He)}}function rd(T,z,j,q,Z,Ae){C!==null&&Z.isNodeMaterial&&C.setObject(T,Z),T.onBeforeRender(A,z,j,q,Z,Ae),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(A,z,j,q,T,Ae),Z.transparent===!0&&Z.side===xn&&Z.forceSinglePass===!1?(Z.side=rn,Z.needsUpdate=!0,A.renderBufferDirect(j,z,q,Z,T,Ae),Z.side=ps,Z.needsUpdate=!0,A.renderBufferDirect(j,z,q,Z,T,Ae),Z.side=xn):A.renderBufferDirect(j,z,q,Z,T,Ae),T.onAfterRender(A,z,j,q,Z,Ae)}function od(T){let z=0;for(let j of T)j.texture!==null&&z++;return z}function Yr(T,z,j){z.isScene!==!0&&(z=st);let q=Ke.get(T),Z=S.state.lights,Ae=S.state.shadowsArray,Ue=Z.state.version,we=ae.getParameters(T,Z.state,Ae,z,j,S.state.lightProbeGridArray),De=ae.getProgramCacheKey(we),He=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let lt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=I.get(T.envMap||q.environment,lt),q.envMapRotation=q.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",Pt),He=new Map,q.programs=He,q.programVariants=new Map);let _t=He.get(De);if(_t!==void 0){if(q.currentProgram===_t&&q.lightsStateVersion===Ue)return ld(T,we),_t}else we.uniforms=ae.getUniforms(T),C!==null&&T.isNodeMaterial&&C.build(T,j,we),T.onBeforeCompile(we,A),_t=ae.acquireProgram(we,De),He.set(De,_t),q.uniforms=we.uniforms;let Fe=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=re.uniform),ld(T,we),q.needsLights=Zm(T),q.lightsStateVersion=Ue,q.needsLights&&(Fe.ambientLightColor.value=Z.state.ambient,Fe.lightProbe.value=Z.state.probe,Fe.sunLights.value=Z.state.sun,Fe.sunLightShadows.value=Z.state.sunShadow,Fe.directionalLights.value=Z.state.directional,Fe.directionalLightShadows.value=Z.state.directionalShadow,Fe.spotLights.value=Z.state.spot,Fe.spotLightShadows.value=Z.state.spotShadow,Fe.rectAreaLights.value=Z.state.rectArea,Fe.ltc_1.value=Z.state.rectAreaLTC1,Fe.ltc_2.value=Z.state.rectAreaLTC2,Fe.pointLights.value=Z.state.point,Fe.pointLightShadows.value=Z.state.pointShadow,Fe.hemisphereLights.value=Z.state.hemi,Fe.sunShadowMatrix.value=Z.state.sunShadowMatrix,Fe.sunShadowCascade.value=Z.state.sunShadowCascade,Fe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Fe.spotLightMatrix.value=Z.state.spotLightMatrix,Fe.spotLightMap.value=Z.state.spotLightMap,Fe.pointShadowMatrix.value=Z.state.pointShadowMatrix),q.numLightProbeGrids=od(S.state.lightProbeGridArray),q.currentProgram=_t,q.uniformsList=null,_t}function qm(T,z,j,q,Z){let Ae=Ke.get(T),Ue=Ae.currentProgram.id+","+q+","+Z,we=Ae.programVariants.get(Ue);return we===void 0?(we=Yr(T,z,j),Ae.programVariants.set(Ue,we)):(Ae.currentProgram=we,Ae.uniformsList=null,Ae.outputColorSpace=q,Ae.toneMapping=Z),we}function ad(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=Nr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function ld(T,z){let j=Ke.get(T);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Ym(T,z,j,q,Z){z.isScene!==!0&&(z=st),it.resetTextureUnits();let Ae=z.fog,Ue=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,we=K===null?A.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:mt.workingColorSpace,De=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,He=I.get(q.envMap||Ue,De),lt=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,_t=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!j.morphAttributes.position,yt=!!j.morphAttributes.normal,jt=!!j.morphAttributes.color,zt=bi;q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(zt=A.toneMapping);let Bt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Mn=Bt!==void 0?Bt.length:0,Oe=Ke.get(q),An=S.state.lights;if(se===!0&&(me===!0||T!==O)){let Xt=T===O&&q.id===k;re.setState(q,T,Xt)}let Tt=!1,Es=!1;q.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==An.state.version||Z.isBatchedMesh&&Oe.batching===!1||!Z.isBatchedMesh&&Oe.batching===!0||Z.isBatchedMesh&&Oe.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Oe.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Oe.instancing===!1||!Z.isInstancedMesh&&Oe.instancing===!0||Z.isSkinnedMesh&&Oe.skinning===!1||!Z.isSkinnedMesh&&Oe.skinning===!0||Z.isInstancedMesh&&Oe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Oe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Oe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Oe.instancingMorph===!1&&Z.morphTexture!==null||Oe.envMap!==He||q.fog===!0&&Oe.fog!==Ae||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==re.numPlanes||Oe.numIntersection!==re.numIntersection)||Oe.vertexAlphas!==lt||Oe.vertexTangents!==_t||Oe.morphTargets!==Fe||Oe.morphNormals!==yt||Oe.morphColors!==jt||Oe.morphTargetsCount!==Mn||Oe.numLightProbeGrids!==od(S.state.lightProbeGridArray)?Tt=!0:(Oe.outputColorSpace!==we||Oe.toneMapping!==zt)&&(Es=!0):(Tt=!0,Oe.__version=q.version);let bn=Oe.currentProgram;(Tt===!0||Es===!0)&&(bn=Es===!0?qm(q,z,Z,we,zt):Yr(q,z,Z),C&&q.isNodeMaterial&&C.onUpdateProgram(q,bn,Oe));let ba=!1,is=!1,Ts=!1,Mt=bn.getUniforms(),mn=Oe.uniforms;if(Ee.useProgram(bn.program)&&(ba=!0,is=!0,Ts=!0),q.id!==k&&(k=q.id,is=!0),ba||O!==T){Ee.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Mt.setValue(H,"projectionMatrix",T.projectionMatrix),Mt.setValue(H,"viewMatrix",T.matrixWorldInverse);let un=Mt.map.cameraPosition;un!==void 0&&un.setValue(H,Xe.setFromMatrixPosition(T.matrixWorld)),Ot.logarithmicDepthBuffer&&Mt.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Mt.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),O!==T&&(O=T,is=!0,Ts=!0)}if(Oe.needsLights&&(An.state.sunShadowMap.length>0&&Mt.setValue(H,"sunShadowMap",An.state.sunShadowMap,it),An.state.directionalShadowMap.length>0&&Mt.setValue(H,"directionalShadowMap",An.state.directionalShadowMap,it),An.state.spotShadowMap.length>0&&Mt.setValue(H,"spotShadowMap",An.state.spotShadowMap,it),An.state.pointShadowMap.length>0&&Mt.setValue(H,"pointShadowMap",An.state.pointShadowMap,it)),Z.isSkinnedMesh){Mt.setOptional(H,Z,"bindMatrix"),Mt.setOptional(H,Z,"bindMatrixInverse");let Xt=Z.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Mt.setValue(H,"boneTexture",Xt.boneTexture,it))}Z.isBatchedMesh&&(Mt.setOptional(H,Z,"batchingTexture"),Mt.setValue(H,"batchingTexture",Z._matricesTexture,it),Mt.setOptional(H,Z,"batchingIdTexture"),Mt.setValue(H,"batchingIdTexture",Z._indirectTexture,it),Mt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Mt.setValue(H,"batchingColorTexture",Z._colorsTexture,it));let ti=j.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&oe.update(Z,j,bn),(is||Oe.receiveShadow!==Z.receiveShadow)&&(Oe.receiveShadow=Z.receiveShadow,Mt.setValue(H,"receiveShadow",Z.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(mn.envMapIntensity.value=z.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=aM()),is){if(Mt.setValue(H,"toneMappingExposure",A.toneMappingExposure),Oe.needsLights&&$m(mn,Ts),Ae&&q.fog===!0&&ve.refreshFogUniforms(mn,Ae),ve.refreshMaterialUniforms(mn,q,pe,Ge,S.state.transmissionRenderTarget[T.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Xt=M,un=0;for(let Li of S.state.lightProbeGridArray)Li.texture!==null&&(Xt.textures[un]=Li.texture,Xt.min[un]=Li.boundingBox.min,Xt.max[un]=Li.boundingBox.max,Xt.resolution[un]=Li.resolution,un++);for(let Li in Xt)Xt[Li].length=un;mn.probesSH.value=Xt.textures,mn.probesMin.value=Xt.min,mn.probesMax.value=Xt.max,mn.probesResolution.value=Xt.resolution}Nr.upload(H,ad(Oe),mn,it)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Nr.upload(H,ad(Oe),mn,it),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Mt.setValue(H,"center",Z.center),Mt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Mt.setValue(H,"normalMatrix",Z.normalMatrix),Mt.setValue(H,"modelMatrix",Z.matrixWorld),q.uniformsGroups!==void 0){let Xt=q.uniformsGroups;for(let un=0,Li=Xt.length;un<Li;un++){let hd=Xt[un];We.update(hd,bn),We.bind(hd,bn)}}return bn}function $m(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.sunLights.needsUpdate=z,T.sunLightShadows.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Zm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(T,z,j){let q=Ke.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ke.get(T.texture).__webglTexture=z,Ke.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let j=Ke.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,j=0){K=T,W=z,G=j;let q=null,Z=!1,Ae=!1;if(T){let we=Ke.get(T);if(we.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(H.FRAMEBUFFER,we.__webglFramebuffer),J.copy(T.viewport),ce.copy(T.scissor),_e=T.scissorTest,Ee.viewport(J),Ee.scissor(ce),Ee.setScissorTest(_e),k=-1;return}else if(we.__webglFramebuffer===void 0)it.setupRenderTarget(T);else if(we.__hasExternalTextures)it.rebindTextures(T,Ke.get(T.texture).__webglTexture,Ke.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let lt=T.depthTexture;if(we.__boundDepthTexture!==lt){if(lt!==null&&Ke.has(lt)&&(T.width!==lt.image.width||T.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(T)}}let De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ae=!0);let He=Ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[z])?q=He[z][j]:q=He[z],Z=!0):T.samples>0&&it.useMultisampledRTT(T)===!1?q=Ke.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?q=He[j]:q=He,J.copy(T.viewport),ce.copy(T.scissor),_e=T.scissorTest}else J.copy(ze).multiplyScalar(pe).floor(),ce.copy(at).multiplyScalar(pe).floor(),_e=ee;if(j!==0&&(q=U),Ee.bindFramebuffer(H.FRAMEBUFFER,q)&&Ee.drawBuffers(T,q),Ee.viewport(J),Ee.scissor(ce),Ee.setScissorTest(_e),Z){let we=Ke.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,j)}else if(Ae){let we=z;for(let De=0;De<T.textures.length;De++){let He=Ke.get(T.textures[De]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+De,He.__webglTexture,j,we)}}else if(T!==null&&j!==0){let we=Ke.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,we.__webglTexture,j)}k=-1};function cd(T){let z=Ke.get(T);return(z.__readFormat!==T.format||z.__readType!==T.type)&&(z.__readFormat=T.format,z.__readType=T.type,z.__formatReadable=Ot.textureFormatReadable(T.format),z.__typeReadable=Ot.textureTypeReadable(T.type)),z}this.readRenderTargetPixels=function(T,z,j,q,Z,Ae,Ue,we=0){if(!(T&&T.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De){Ee.bindFramebuffer(H.FRAMEBUFFER,De);try{let He=T.textures[we],lt=He.format,_t=He.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+we);let Fe=cd(He);if(Fe.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-q&&j>=0&&j<=T.height-Z&&H.readPixels(z,j,q,Z,ge.convert(lt),ge.convert(_t),Ae)}finally{let He=K!==null?Ke.get(K).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(T,z,j,q,Z,Ae,Ue,we=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De)if(z>=0&&z<=T.width-q&&j>=0&&j<=T.height-Z){Ee.bindFramebuffer(H.FRAMEBUFFER,De);let He=T.textures[we],lt=He.format,_t=He.type;T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+we);let Fe=cd(He);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,yt),H.bufferData(H.PIXEL_PACK_BUFFER,Ae.byteLength,H.STREAM_READ),H.readPixels(z,j,q,Z,ge.convert(lt),ge.convert(_t),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let jt=K!==null?Ke.get(K).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,jt);let zt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Cf(H,zt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,yt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ae),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(yt),H.deleteSync(zt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,j=0){let q=Math.pow(2,-j),Z=Math.floor(T.image.width*q),Ae=Math.floor(T.image.height*q),Ue=z!==null?z.x:0,we=z!==null?z.y:0;it.setTexture2D(T,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,Ue,we,Z,Ae),Ee.unbindTexture()},this.copyTextureToTexture=function(T,z,j=null,q=null,Z=0,Ae=0){let Ue,we,De,He,lt,_t,Fe,yt,jt,zt=T.isCompressedTexture?T.mipmaps[Ae]:T.image;if(j!==null)Ue=j.max.x-j.min.x,we=j.max.y-j.min.y,De=j.isBox3?j.max.z-j.min.z:1,He=j.min.x,lt=j.min.y,_t=j.isBox3?j.min.z:0;else{let Mt=Math.pow(2,-Z);Ue=Math.floor(zt.width*Mt),we=Math.floor(zt.height*Mt),T.isDataArrayTexture?De=zt.depth:T.isData3DTexture?De=Math.floor(zt.depth*Mt):De=1,He=0,lt=0,_t=0}q!==null?(Fe=q.x,yt=q.y,jt=q.z):(Fe=0,yt=0,jt=0);let Bt=ge.convert(z.format),Mn=ge.convert(z.type),Oe;z.isData3DTexture?(it.setTexture3D(z,0),Oe=H.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(it.setTexture2DArray(z,0),Oe=H.TEXTURE_2D_ARRAY):(it.setTexture2D(z,0),Oe=H.TEXTURE_2D),Ee.activeTexture(H.TEXTURE0),Ee.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,z.flipY),Ee.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Ee.pixelStorei(H.UNPACK_ALIGNMENT,z.unpackAlignment);let An=Ee.getParameter(H.UNPACK_ROW_LENGTH),Tt=Ee.getParameter(H.UNPACK_IMAGE_HEIGHT),Es=Ee.getParameter(H.UNPACK_SKIP_PIXELS),bn=Ee.getParameter(H.UNPACK_SKIP_ROWS),ba=Ee.getParameter(H.UNPACK_SKIP_IMAGES);Ee.pixelStorei(H.UNPACK_ROW_LENGTH,zt.width),Ee.pixelStorei(H.UNPACK_IMAGE_HEIGHT,zt.height),Ee.pixelStorei(H.UNPACK_SKIP_PIXELS,He),Ee.pixelStorei(H.UNPACK_SKIP_ROWS,lt),Ee.pixelStorei(H.UNPACK_SKIP_IMAGES,_t);let is=T.isDataArrayTexture||T.isData3DTexture,Ts=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let Mt=Ke.get(T),mn=Ke.get(z),ti=Ke.get(Mt.__renderTarget),Xt=Ke.get(mn.__renderTarget);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,ti.__webglFramebuffer),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let un=0;un<De;un++)is&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ke.get(T).__webglTexture,Z,_t+un),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ke.get(z).__webglTexture,Ae,jt+un)),H.blitFramebuffer(He,lt,He+Ue,lt+we,Fe,yt,Fe+Ue,yt+we,H.DEPTH_BUFFER_BIT,H.NEAREST);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||Ke.has(T)){let Mt=Ke.get(T),mn=Ke.get(z);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,P),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,V);for(let ti=0;ti<De;ti++)is?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Mt.__webglTexture,Z,_t+ti):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Mt.__webglTexture,Z),Ts?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mn.__webglTexture,Ae,jt+ti):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mn.__webglTexture,Ae),Z!==0?H.blitFramebuffer(He,lt,He+Ue,lt+we,Fe,yt,Fe+Ue,yt+we,H.COLOR_BUFFER_BIT,H.NEAREST):Ts?H.copyTexSubImage3D(Oe,Ae,Fe,yt,jt+ti,He,lt,Ue,we):H.copyTexSubImage2D(Oe,Ae,Fe,yt,He,lt,Ue,we);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ts?T.isDataTexture||T.isData3DTexture?H.texSubImage3D(Oe,Ae,Fe,yt,jt,Ue,we,De,Bt,Mn,zt.data):z.isCompressedArrayTexture?H.compressedTexSubImage3D(Oe,Ae,Fe,yt,jt,Ue,we,De,Bt,zt.data):H.texSubImage3D(Oe,Ae,Fe,yt,jt,Ue,we,De,Bt,Mn,zt):T.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ae,Fe,yt,Ue,we,Bt,Mn,zt.data):T.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ae,Fe,yt,zt.width,zt.height,Bt,zt.data):H.texSubImage2D(H.TEXTURE_2D,Ae,Fe,yt,Ue,we,Bt,Mn,zt);Ee.pixelStorei(H.UNPACK_ROW_LENGTH,An),Ee.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tt),Ee.pixelStorei(H.UNPACK_SKIP_PIXELS,Es),Ee.pixelStorei(H.UNPACK_SKIP_ROWS,bn),Ee.pixelStorei(H.UNPACK_SKIP_IMAGES,ba),Ae===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&H.generateMipmap(Oe),Ee.unbindTexture()},this.initRenderTarget=function(T){Ke.get(T).__webglFramebuffer===void 0&&it.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?it.setTextureCube(T,0):T.isData3DTexture?it.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?it.setTexture2DArray(T,0):it.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){W=0,G=0,K=null,Ee.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};var Fr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},lM=new Bs(-1,1,1,-1,0,1),xu=class extends Ut{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}},cM=new xu,gs=class{constructor(e){this._mesh=new Re(cM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ac=class extends Vn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ji.clone(e.uniforms),this.material=new kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new gs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ha=class extends Vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Rc=class extends Vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Cc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ac(Fr),this.copyPass.material.blending=Wi,this.timer=new Xo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ha!==void 0&&(o instanceof ha?n=!0:o instanceof Rc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ic=class extends Vn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Be}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var xp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Or=class i extends Vn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(r,o,{type:_n,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new sn(r,o,{type:_n,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new sn(r,o,{type:_n,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=xp;this.highPassUniforms=Ji.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ji.clone(Fr.uniforms),this.blendMaterial=new kt({uniforms:this.copyUniforms,vertexShader:Fr.vertexShader,fragmentShader:Fr.fragmentShader,premultipliedAlpha:!0,blending:Xi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Be,this._oldClearAlpha=1,this._basic=new $t,this._fsQuad=new gs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new kt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Or.BlurDirectionX=new le(1,0);Or.BlurDirectionY=new le(0,1);var ua={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Pc=class extends Vn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ji.clone(ua.uniforms),this.material=new Tr({name:ua.name,uniforms:this.uniforms,vertexShader:ua.vertexShader,fragmentShader:ua.fragmentShader}),this._fsQuad=new gs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$o?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ks?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ko?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Jo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var da=new D;function Jn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;da.copy(e),da[n]=0,da.normalize();let c=.5*o/(o+a),h=1-da.angleTo(i)/l;return Math.sign(da[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Br=class i extends Zt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new D,c=new D,h=new D(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new D,g=.5/o;for(let m=0,y=0;m<d.length;m+=3,y+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[m+0]=h.x*Math.sign(l.x)+c.x*r,d[m+1]=h.y*Math.sign(l.y)+c.y*r,d[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:x.set(1,0,0),f[y+0]=Jn(x,c,"z","y",r,n),f[y+1]=1-Jn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[y+0]=1-Jn(x,c,"z","y",r,n),f[y+1]=1-Jn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[y+0]=1-Jn(x,c,"x","z",r,e),f[y+1]=Jn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-Jn(x,c,"x","z",r,e),f[y+1]=1-Jn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-Jn(x,c,"x","y",r,e),f[y+1]=1-Jn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[y+0]=Jn(x,c,"x","y",r,e),f[y+1]=1-Jn(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var hM=new Ft(1,24,16),uM=new Br(1,1,1,3,.18),dM=new bt(1,1,1,20),Ei=(i,e=.73,t=.02)=>new nt({color:i,roughness:e,metalness:t});function fa(i,e,t,n,s,r,o,a,l){let c=new Re(e,t);return c.position.set(n,s,r),c.scale.set(o,a,l),c.castShadow=!0,i.add(c),c}function fM(){let i=new wr;i.moveTo(-.175,0),i.quadraticCurveTo(-.175,.16,-.105,.31),i.quadraticCurveTo(-.092,.35,-.047,.304),i.quadraticCurveTo(.1,.16,.174,0),i.lineTo(-.175,0);let e=new Oo(i,{depth:.06,bevelEnabled:!0,bevelThickness:.032,bevelSize:.035,bevelSegments:3,steps:1});return e.translate(0,0,-.03),e}var _p=fM();function Lc(i,e={}){let t=new Ne,n=new Ne;t.add(n),i.add(t);let s=Ei(e.suit??"#e9dcd1"),r=Ei("#a99aa5"),o=Ei(e.pack??"#3e3d58",.8),a=Ei(e.trim??"#e79459"),l=Ei("#737684",.38,.25),c=Ei(e.fur??"#d9a376"),h=Ei(e.cream??"#fae0bc"),d=Ei("#d88685"),u=Ei("#302735"),f=Ei(e.stripe??"#9d6549"),p=new nt({color:"#7ac2c2",emissive:"#3a8885",emissiveIntensity:.42}),x=(O,J,...ce)=>fa(O,hM,J,...ce),g=(O,J,...ce)=>fa(O,uM,J,...ce),m=(O,J,...ce)=>fa(O,dM,J,...ce);x(n,s,0,.99,0,.35,.44,.229),g(n,o,0,.73,0,.58,.13,.43),g(n,a,0,.74,.23,.11,.095,.055),m(n,r,0,1.31,0,.285,.1,.25),m(n,o,0,1.35,0,.254,.046,.227);let y=new Ne;y.position.set(0,1.04,.225),n.add(y),g(y,o,0,0,0,.57,.59,.25),g(y,s,0,.005,.134,.43,.48,.13),g(y,l,0,-.15,.2,.27,.107,.045);for(let O of[-1,1])m(y,s,O*.255,-.016,.125,.08,.385,.08),m(y,a,O*.255,.07,.125,.082,.05,.082),g(y,o,O*.113,-.154,.228,.045,.026,.01);g(y,p,.048,-.154,.228,.057,.024,.01),x(y,a,0,.045,.208,.055,.041,.009);for(let[O,J]of[[-.06,.089],[-.022,.115],[.022,.115],[.06,.089]])x(y,a,O,J,.208,.016,.021,.009);let v=new Ne;v.position.set(0,1.68,-.024),n.add(v),x(v,c,0,0,0,.334,.287,.282),x(v,h,0,-.074,-.11,.29,.19,.205);let M=[],w=[];for(let O of[-1,1]){let J=fa(v,_p,c,O*.2,.145,.013,O,1.02,1.25);J.rotation.z=O*-.25;let ce=fa(v,_p,d,O*.2,.173,-.036,O*.65,.74,.27);ce.rotation.z=J.rotation.z,M.push({ear:J,lining:ce,side:O}),w.push(x(v,u,O*.11,-.018,-.277,.037,.055,.019));let _e=x(v,f,O*.115,.072,.255,.035,.119,.03);_e.rotation.z=O*-.35,x(v,f,O*.258,.003,.166,.044,.046,.025)}x(v,f,0,.117,.258,.032,.089,.03),x(v,u,0,-.1,-.304,.04,.027,.021);let S=new Ne;S.position.set(0,1.66,0),n.add(S);let _=new Re(new oi(.343,.039,10,36),l);_.rotation.x=Math.PI/2,_.scale.set(1,.87,1),_.position.y=-.249,S.add(_);for(let O of[-1,1])x(S,o,O*.351,-.035,.005,.07,.115,.104),x(S,s,O*.388,-.035,.005,.046,.084,.078),x(S,a,O*.417,-.035,.005,.025,.045,.041);let b=new kt({transparent:!0,depthWrite:!1,vertexShader:`
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
      }`}),R=x(S,b,0,.067,-.025,.408,.477,.371);R.castShadow=!1,R.renderOrder=4;let A=[],L=[];for(let O of[-1,1]){let J=new Ne,ce=new Ne;J.position.set(O*.34,1.21,.005),J.rotation.z=O*.16,ce.position.set(O*.051,-.258,0),x(J,s,O*.029,-.1,0,.126,.223,.137),x(J,a,O*.084,-.056,.005,.079,.09,.086),x(ce,o,0,.01,0,.09,.08,.093),x(ce,s,0,-.087,-.009,.104,.142,.112),m(ce,a,0,-.172,0,.094,.046,.093),x(ce,o,0,-.226,-.01,.096,.11,.102),x(ce,o,-O*.065,-.205,-.039,.052,.072,.058),J.add(ce),n.add(J),A.push({arm:J,elbow:ce});let _e=new Ne,$=new Ne;_e.position.set(O*.16,.73,0),$.position.set(0,-.305,0),x(_e,s,0,-.125,0,.142,.229,.145),x($,r,0,.017,-.05,.131,.096,.127),x($,s,0,-.132,0,.12,.168,.12),m($,a,0,-.232,0,.125,.053,.117),g($,o,0,-.356,-.065,.294,.111,.414),g($,s,0,-.298,-.072,.273,.128,.37),_e.add($),n.add(_e),L.push({leg:_e,shin:$})}let C=[],U=new Ne;U.position.set(0,.74,.25),n.add(U);for(let O=0;O<6;O++){let J=.075-O*.008;x(U,O===0?s:O===5?h:c,0,0,.07,J,J,.1),C.push(U);let ce=new Ne;ce.position.set(0,0,.13),U.add(ce),U=ce}let P=0,V=0,W=0,G=2.5,K=4,k={value:1};return{rig:t,head:v,helmet:S,materials:{suit:s,trim:a,indigo:o,fur:c,cream:h,stripe:f},setHelmet(O){S.visible=O},cheer(){W=1},animate(O,J,ce,_e,$){W=Math.max(0,W-O/1.1),G-=O;let ye=!$&&G<.12;G<0&&(G=2.2+Math.random()*3.5);for(let ee of w)ee.scale.y=ye?.008:.055;K-=O,K<0&&(K=3+Math.random()*5,k.value=Math.random()<.5?-1:1);let Ce=!$&&K>0&&K<.25?Math.sin(K/.25*Math.PI)*.35:0;for(let{ear:ee,lining:X,side:Q}of M){let se=Q*-.25+(Q===k.value?Ce*Q:0);ee.rotation.z=se,X.rotation.z=se}let Ge=$?0:Math.abs(Math.sin(W*Math.PI*2))*W,pe=vc.clamp(J/2.5,0,1);P+=J*O*4.7,V+=O;let Ve=Math.sin(P)*pe,St=(1-Math.cos(P*2))*pe,ze=_e>0?Math.sin(Math.PI*_e):0;n.position.y=ce+Ge*.5+($?0:St*.043+Math.sin(V*2.7)*.012),n.rotation.z=$?0:Ve*.048,n.rotation.x=pe*-.06+ze*-.15,v.rotation.y=$?0:Math.sin(P*.37)*pe*.12+Math.sin(V*.81)*(1-pe)*.09,v.rotation.x=ze*.13;let at=$?0:Math.sin(V*(2.2+W*6))*(.18+W*.3+pe*.1);C.forEach((ee,X)=>{ee.rotation.y=at*(.4+X*.12)+Math.sin(V*1.3+X)*.04,ee.rotation.x=X===0?-.6:-.12-pe*.05});for(let ee=0;ee<2;ee++){let X=P+Math.PI*ee,Q=Math.sin(X)*pe;L[ee].leg.rotation.x=Q*.63,L[ee].shin.rotation.x=Math.max(0,Math.cos(X))*pe*.69,A[ee].arm.rotation.x=-Q*.5-(ee===1?ze*.76:0)-(Ge>0?2.4*Math.min(1,W*3):0),A[ee].elbow.rotation.x=-.2-Math.max(0,Q)*.34-(ee===1?ze*.38:0)}}}}var yp="astro-kitty-sound-v3";function vp(){try{return localStorage.getItem(yp)!=="off"}catch{return!0}}function Mp(i){try{localStorage.setItem(yp,i?"on":"off");let e=JSON.parse(localStorage.getItem("astro-kitty-profile-v1")||"{}");localStorage.setItem("astro-kitty-profile-v1",JSON.stringify({...e,voice:i,captions:!0}))}catch{}}function pM(i=globalThis.CanvasRenderingContext2D?.prototype){!i||i.roundRect||(i.roundRect=function(e,t,n,s,r=0){let o=Array.isArray(r)?r:[r];if(o.length<1||o.length>4)throw new RangeError("Invalid radii");let a=o.map(p=>typeof p=="number"?{x:p,y:p}:p);if(a.some(p=>p.x<0||p.y<0))throw new RangeError("Negative radius");let l=a[0],c=a[1]??l,h=a[3]??a[1]??l,d=a[2]??l;n<0&&(e+=n,n=-n,[l,c,d,h]=[c,l,h,d]),s<0&&(t+=s,s=-s,[l,c,d,h]=[h,d,c,l]);let u=Math.min(1,n/(l.x+c.x||1),n/(h.x+d.x||1),s/(l.y+h.y||1),s/(c.y+d.y||1));return[l,c,d,h]=[l,c,d,h].map(p=>({x:p.x*u,y:p.y*u})),this.moveTo(e+l.x,t),this.lineTo(e+n-c.x,t),this.quadraticCurveTo(e+n,t,e+n,t+c.y),this.lineTo(e+n,t+s-d.y),this.quadraticCurveTo(e+n,t+s,e+n-d.x,t+s),this.lineTo(e+h.x,t+s),this.quadraticCurveTo(e,t+s,e,t+s-h.y),this.lineTo(e,t+l.y),this.quadraticCurveTo(e,t,e+l.x,t),this.closePath(),this})}pM();function mM(){try{return JSON.parse(localStorage.getItem("astro-kitty-profile-v1")||"{}")||{}}catch{return{}}}if(typeof document<"u"){let i=mM();document.body?.classList.toggle("big-text",!!i.bigText),document.body?.classList.toggle("reduce-motion",!!i.reduceMotion)}function bp(i=globalThis.speechSynthesis){if(!i)return Promise.resolve([]);let e=i.getVoices();return e.length?Promise.resolve(e):new Promise(t=>{let n,s=()=>{clearTimeout(n),i.removeEventListener?.("voiceschanged",r),t(i.getVoices())},r=()=>{i.getVoices().length&&s()};i.addEventListener?.("voiceschanged",r),n=setTimeout(s,1800),r()})}var gM=/natural|neural|premium|enhanced|online/i,xM=/Samantha|Ava|Allison|Serena|Karen|Moira|Tessa|Aria|Jenny|Sonia|Libby|Neerja|Google (UK|US) English|Google English/i,_M=/eSpeak|Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Fred|Junior|Ralph|compact/i;function Sp(i=[],e=/^en[-_]/i){let t=null,n=-1e9;for(let s of i){if(!e.test(s.lang||""))continue;let r=0;gM.test(s.name)&&(r+=60),xM.test(s.name)&&(r+=25),_M.test(s.name)&&(r-=200),/^en[-_](US|GB|IN|AU)/i.test(s.lang)&&(r+=4),s.default&&(r+=2),r>n&&(n=r,t=s)}return t}function pa(i){return String(i??"").replace(/\s+/g," ").trim()}function _u(i){let e=pa(i),t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return"v_"+t.toString(16).padStart(8,"0")+".mp3"}function yM(i){return pa(i).split(/(?<=[.!?…][)"”’']*)\s+/).filter(Boolean)}function Dc(i,e){let t=pa(i);if(!t)return[];if(e(_u(t)))return[_u(t)];let n=yM(t),s=n.length,r=Array(s+1).fill(null);r[0]=[];for(let o=0;o<s;o++)if(r[o])for(let a=o+1;a<=s;a++){let l=_u(n.slice(o,a).join(" "));e(l)&&(!r[a]||r[a].length>r[o].length+1)&&(r[a]=[...r[o],l])}return r[s]}function vM({synth:i=globalThis.speechSynthesis,Utterance:e=globalThis.SpeechSynthesisUtterance,AudioClass:t=globalThis.Audio,fetcher:n=globalThis.fetch,storage:s=(()=>{try{return globalThis.localStorage}catch{return null}})()}={}){let r=!1,o=0,a=null,l=null,c={},h="",d=!1,u=!1,f=!1,p=null,x="device",g=null,m=new Set,y=new Set,v=(async()=>{let R;try{let C=await Promise.race([(async()=>{let U=await n(new URL("../audio/voice/manifest.json",import.meta.url));return U.ok?await U.json():null})(),new Promise(U=>{R=setTimeout(()=>U(null),6e3)})]);if(C?.complete===!0&&C.voiceId&&C.lines&&Object.keys(C.lines).length>=100){g=C,x="recorded";return}Array.isArray(C?.files)&&(m=new Set(C.files.filter(U=>/^v_[0-9a-f]{8}\.mp3$/.test(U))))}catch{}finally{clearTimeout(R)}let A=await bp(i),L;try{L=s?.getItem("astro-kitty-narrator-voice")}catch{}p=A.find(C=>C.voiceURI===L)||Sp(A);try{p&&s?.setItem("astro-kitty-narrator-voice",p.voiceURI)}catch{}})();function M(R="ended"){u=!1,f=!1,c.onend?.(R),l?.(R),l=null}function w(){o++,a?.pause?.(),a=null,i?.cancel(),M("cancelled"),d=!1}async function S(R,A={}){w(),h=pa(R),y.add(h),c=A;let L=o;return u=!0,await v,L!==o?"cancelled":new Promise(C=>{l=C;let U=()=>{L===o&&(f=!0,c.onstart?.())},P=()=>{L===o&&M()},V=W=>{L===o&&(W?.name==="NotAllowedError"||W?.error==="not-allowed"?(d=!0,c.onblocked?.()):c.onunavailable?.(),M("unavailable"))};if(x==="recorded"){let W=new Set(Object.values(g.lines).filter(O=>/^v_[0-9a-f]{8}\.mp3$/.test(O)&&g.files.includes(O))),G=g.lines[h]&&W.has(g.lines[h])?[g.lines[h]]:Dc(h,O=>W.has(O));if(!G?.length){V();return}let K=0,k=()=>{if(L===o){if(K===G.length){P();return}a=new t(new URL("../audio/voice/"+G[K++],import.meta.url).href),a.onended=k,a.onerror=V,d||a.play().then(U).catch(V)}};k()}else if(t&&m.size&&Dc(h,W=>m.has(W))?.length){let W=Dc(h,O=>m.has(O)),G=0,K=()=>{if(L===o){if(!i||!e){V();return}a=new e(h.replace(/\bDhrubo\b/g,"Dhroobo")),a.voice=p,a.lang=p?.lang||"en-US",a.rate=.94,a.pitch=1.03,a.volume=1,a.onstart=U,a.onend=P,a.onerror=V,d||(i.resume(),i.speak(a))}},k=()=>{if(L!==o)return;if(G===W.length){P();return}let O=G===0;a=new t(new URL("../audio/voice/"+W[G++],import.meta.url).href),r=!0,a.onended=k,a.onerror=()=>{r=!1,O?K():P()},d||a.play().then(()=>{O&&U()}).catch(J=>{r=!1,J?.name==="NotAllowedError"?V(J):O?K():P()})};k()}else i&&e?(r=!1,a=new e(h.replace(/\bDhrubo\b/g,"Dhroobo")),a.voice=p,a.lang=p?.lang||"en-US",a.rate=.94,a.pitch=1.03,a.volume=1,a.onstart=U,a.onend=P,a.onerror=V,d||(i.resume(),i.speak(a))):V()})}function _(){d=!0,x==="recorded"||r?a?.pause?.():i?.pause()}async function b(){if(d){if(d=!1,!u){h&&S(h,c);return}if(x==="recorded"||r)try{await a?.play(),f=!0,c.onstart?.()}catch{c.onblocked?.()}else a&&!f?(i?.resume(),i?.speak(a)):i?.resume()}}return{play:S,stop:w,pause:_,resume:b,ready:v,heard:y,get busy(){return u},get started(){return f},get mode(){return x},get voice(){return p}}}var MM;function wp(){return MM??=vM()}var $e=Math.PI*2,Un=Math.PI/180,ct=(i,e,t)=>Math.max(e,Math.min(t,i)),ot=(i,e,t)=>i+(e-i)*t,At=(i,e,t)=>{let n=ct((t-i)/(e-i),0,1);return n*n*(3-2*n)},Lt=(i,e,t,n)=>ot(i,e,1-Math.exp(-t*n)),Ki=(i,e)=>Math.atan2(Math.sin(e-i),Math.cos(e-i)),Ti=(i,e,t,n)=>i+Ki(i,e)*(1-Math.exp(-t*n));function hi(i){let e=i>>>0||1;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)}function ma(i){let e=2166136261;for(let t of String(i))e^=t.codePointAt(0),e=Math.imul(e,16777619);return e>>>0}var Ep=(i,e,t)=>{let n=e.map(t),s=n.reduce((o,a)=>o+a,0);if(s<=0)return null;let r=i()*s;for(let o=0;o<e.length;o++)if(r-=n[o],r<=0)return e[o];return e[e.length-1]};function Nc(i,e,t){let n=Math.imul(i,1402946737)^Math.imul(e,1597334677)^t;return n=Math.imul(n^n>>>16,2146121005),((n^n>>>15)>>>0)/4294967295}function Wn(i,e,t=0){let n=Math.floor(i),s=Math.floor(e),r=i-n,o=e-s,a=r*r*(3-2*r),l=o*o*(3-2*o);return ot(ot(Nc(n,s,t),Nc(n+1,s,t),a),ot(Nc(n,s+1,t),Nc(n+1,s+1,t),a),l)}function ln(i,e,t=0,n=4){let s=0,r=.5,o=1,a=0;for(let l=0;l<n;l++)s+=r*(Wn(i*o,e*o,t+l*131)*2-1),a+=r,o*=2.03,r*=.5;return s/a}function yu(i,e,t=0,n=4){let s=0,r=.5,o=1,a=0;for(let l=0;l<n;l++){let c=1-Math.abs(Wn(i*o,e*o,t+l*71)*2-1);s+=r*c*c,a+=r,o*=2.1,r*=.5}return s/a}var bM=1495978707e-1,SM=299792.458,Tp=668.5991,wM=25.19*Un,Cp=i=>i.getTime()/864e5+24405875e-1,EM=[[.0071,2.2353,49.409],[.0057,2.7543,168.173],[.0039,1.1177,191.837],[.0037,15.7866,21.736],[.0021,2.1354,15.704],[.002,2.4694,95.528],[.0018,32.8493,49.095]];function Ip(i){let e=Cp(i)+.0008007407407407408,t=e-2451545,n=(19.3871+.52402073*t)*Un,s=270.3871+.524038496*t,r=EM.reduce((c,[h,d,u])=>c+h*Math.cos((.985626*t/d+u)*Un),0),o=(10.691+3e-7*t)*Math.sin(n)+.623*Math.sin(2*n)+.05*Math.sin(3*n)+.005*Math.sin(4*n)+5e-4*Math.sin(5*n)+r,a=((s+o)%360+360)%360,l=(e-24055220028779e-7)/1.0274912517;return{ls:a,msd:l}}var TM=Ip(new Date(Date.UTC(2024,10,12,12))).msd,Ap=["spring","summer","autumn","winter"];function Pp(i=new Date,e=0){let{ls:t,msd:n}=Ip(i),s=(n%1+1)%1*24,r=((s+e/15)%24+24)%24,o=t/360*Tp,a=38+Math.round((n-TM-o)/Tp),l=Math.floor(t/90)%4;return{ls:t,msd:n,sol:Math.floor(n),mtc:s,lmst:r,marsYear:a,northernSeason:Ap[l],southernSeason:Ap[(l+2)%4],dustSeason:t>=180&&t<=330}}function Lp(i){let e=Math.floor(i),t=Math.floor((i-e)*60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function vu(i,e,t){let n=Math.asin(Math.sin(wM)*Math.sin(t*Un)),s=(i-12)*15*Un,r=e*Un,o=Math.asin(Math.sin(r)*Math.sin(n)+Math.cos(r)*Math.cos(n)*Math.cos(s)),a=Math.atan2(-Math.cos(n)*Math.sin(s),Math.sin(n)*Math.cos(r)-Math.cos(n)*Math.sin(r)*Math.cos(s));return{elevation:o,azimuth:(a+$e)%$e}}var Mu=(i,e)=>[Math.sin(i)*Math.cos(e),Math.sin(e),-Math.cos(i)*Math.cos(e)],AM={earth:[[1.00000261,562e-8],[.01671123,-4392e-8],[-1531e-8,-.01294668],[100.46457166,35999.37244981],[102.93768193,.32327364],[0,0]],mars:[[1.52371034,1847e-8],[.0933941,7882e-8],[1.84969142,-.00813131],[-4.55343205,19140.30268499],[-23.94362959,.44441088],[49.55953891,-.29257343]]};function Rp(i,e){let t=(e-2451545)/36525,[n,s,r,o,a,l]=AM[i].map(([M,w])=>M+w*t),c=(a-l)*Un,h=(((o-a+180)%360+360)%360-180)*Un,d=h+s*Math.sin(h);for(let M=0;M<10;M++)d-=(d-s*Math.sin(d)-h)/(1-s*Math.cos(d));let u=n*(Math.cos(d)-s),f=n*Math.sqrt(1-s*s)*Math.sin(d),p=Math.cos(c),x=Math.sin(c),g=Math.cos(l*Un),m=Math.sin(l*Un),y=Math.cos(r*Un),v=Math.sin(r*Un);return[(p*g-x*m*y)*u+(-x*g-p*m*y)*f,(p*m+x*g*y)*u+(-x*m+p*g*y)*f,x*v*u+p*v*f]}function Uc(i=new Date){let e=Cp(i),t=Rp("earth",e),n=Rp("mars",e),s=t.map((h,d)=>h-n[d]),r=n.map(h=>-h),o=h=>Math.hypot(...h),a=o(s),l=s.reduce((h,d,u)=>h+d*r[u],0)/(a*o(r)),c=a*bM;return{km:c,lightMinutes:c/SM/60,elongation:Math.acos(Math.max(-1,Math.min(1,l)))/Un}}var Fc=class{constructor(){this.grid=new Map,this.items=[],this.disabled=new Set}_cells(e,t,n,s,r){for(let o=Math.floor(e/8);o<=Math.floor(n/8);o++)for(let a=Math.floor(t/8);a<=Math.floor(s/8);a++)r(`${o},${a}`)}_insert(e,t,n,s,r){return e.index=this.items.length,this.items.push(e),this._cells(t,n,s,r,o=>{this.grid.has(o)||this.grid.set(o,[]),this.grid.get(o).push(e)}),e}segment(e,t,n,s,r=null){return this._insert({kind:"seg",ax:e,az:t,bx:n,bz:s,tag:r},Math.min(e,n),Math.min(t,s),Math.max(e,n),Math.max(t,s))}circle(e,t,n,s=null){return this._insert({kind:"circle",x:e,z:t,r:n,tag:s},e-n,t-n,e+n,t+n)}setEnabled(e,t){t?this.disabled.delete(e):this.disabled.add(e)}near(e,t,n){let s=new Set;return this._cells(e-n,t-n,e+n,t+n,r=>{for(let o of this.grid.get(r)??[])this.disabled.has(o.tag)||s.add(o)}),s}resolve(e,t,n){for(let s=0;s<3;s++){let r=!1;for(let o of this.near(e,t,n+1))if(o.kind==="circle"){let a=e-o.x,l=t-o.z,c=Math.hypot(a,l),h=n+o.r;c<h&&c>1e-6&&(e=o.x+a/c*h,t=o.z+l/c*h,r=!0)}else{let a=o.bx-o.ax,l=o.bz-o.az,c=a*a+l*l||1,h=Math.max(0,Math.min(1,((e-o.ax)*a+(t-o.az)*l)/c)),d=o.ax+a*h,u=o.az+l*h,f=e-d,p=t-u,x=Math.hypot(f,p);if(x<n){let g=x>1e-6?f/x:-l/Math.sqrt(c),m=x>1e-6?p/x:a/Math.sqrt(c);e=d+g*n,t=u+m*n,r=!0}}if(!r)break}return{x:e,z:t}}raycast(e,t,n,s,r=.25){let o=1,a=Math.min(e,n)-r,l=Math.max(e,n)+r,c=Math.min(t,s)-r,h=Math.max(t,s)+r,d=new Set;return this._cells(a,c,l,h,u=>{for(let f of this.grid.get(u)??[]){if(d.has(f)||this.disabled.has(f.tag)||f.kind!=="seg")continue;d.add(f);let p=RM(e,t,n,s,f.ax,f.az,f.bx,f.bz);p!==null&&p<o&&(o=p)}}),o}};function RM(i,e,t,n,s,r,o,a){let l=t-i,c=n-e,h=o-s,d=a-r,u=l*d-c*h;if(Math.abs(u)<1e-9)return null;let f=((s-i)*d-(r-e)*h)/u,p=((s-i)*c-(r-e)*l)/u;return f>=0&&f<=1&&p>=0&&p<=1?f:null}var Kn=1.7,Ws=1.7,Dp=4.2,CM={hub:{shape:"dome",r:11,wall:3.4,top:8.6},greenhouse:{shape:"dome",r:10.5,wall:2.2,top:8.4,glass:!0},power:{shape:"hall",hd:7,hw:8.5,h:5.2},life:{shape:"hall",hd:7,hw:9.5,h:5.2},garage:{shape:"hall",hd:7.5,hw:8.5,h:6.4,wideDoor:!0},lab:{shape:"dome",r:7.5,wall:3.2,top:6.8},greenhouse2:{shape:"dome",r:8.5,wall:2.2,top:7,glass:!0},observatory:{shape:"dome",r:6.5,wall:3,top:6.2},playroom:{shape:"dome",r:7.5,wall:3,top:6.4}},IM=[{id:"hub",type:"hub",x:0,z:0,airlocks:[3*Math.PI/4]},{id:"greenhouse",type:"greenhouse",angle:-Math.PI/2,dist:29,backAirlock:!0},{id:"power",type:"power",angle:0,dist:25,backAirlock:!0},{id:"life",type:"life",angle:Math.PI,dist:25,backAirlock:!0},{id:"garage",type:"garage",angle:Math.PI/2,dist:25.5,backAirlock:!0},{id:"lab",type:"lab",angle:-Math.PI/4,dist:26,backAirlock:!0}],Dt={solarFarm:{x0:39,x1:67,z0:-17,z1:17,cols:5,rows:6},solarFarm2:{x0:39,x1:67,z0:-33,z1:-24,cols:5,rows:2},iceDrill:{x:-50,z:10},comms:{x:20,z:-46},landingPad:{x:-46,z:46,r:10},weather:{x:-15,z:-15},reactor:{x:60,z:46},fuel:{x:-30,z:27},printer:{x:-52,z:-16}},ga=[{id:"solar2",kind:"outdoor",cost:{metal:6,ice:0,science:0},effect:{solar:10}},{id:"reactor",kind:"outdoor",cost:{metal:14,ice:0,science:20},effect:{reactor:1}},{id:"greenhouse2",kind:"module",x:-32,z:-36,cost:{metal:10,ice:6,science:10},effect:{farm:1}},{id:"observatory",kind:"module",x:42,z:-46,cost:{metal:8,ice:0,science:25},effect:{science:1}},{id:"playroom",kind:"module",x:31,z:31,cost:{metal:6,ice:2,science:5},effect:{happy:1}},{id:"fuel",kind:"outdoor",cost:{metal:10,ice:8,science:15},effect:{fuel:1}},{id:"printer",kind:"outdoor",cost:{metal:5,ice:0,science:10},effect:{repair:1}},{id:"drone",kind:"gadget",cost:{metal:4,ice:0,science:8},effect:{drone:1}},{id:"batteries",kind:"upgrade",cost:{metal:6,ice:0,science:5},effect:{battery:1}}];function Up(i=[]){let e=[];for(let t of IM)e.push(Np(t));for(let t of ga)if(t.kind==="module"&&i.includes(t.id)){let n=Math.atan2(t.z,t.x);e.push(Np({id:t.id,type:t.id,x:t.x,z:t.z,facing:n+Math.PI,frontAirlock:!0}))}return e}function Np(i){let e=CM[i.type],t=i.x??Math.cos(i.angle)*i.dist,n=i.z??Math.sin(i.angle)*i.dist,s=i.facing??(i.angle!==void 0?i.angle+Math.PI:0);return{...i,...e,x:t,z:n,facing:s}}function ji(i,e,t){let n=Math.cos(i.facing),s=Math.sin(i.facing);return[i.x+e*n-t*s,i.z+e*s+t*n]}function PM(i,e,t){let n=e-i.x,s=t-i.z,r=Math.cos(i.facing),o=Math.sin(i.facing);return[n*r+s*o,-n*o+s*r]}function zr(i){let e=i.find(t=>t.id==="hub");return i.filter(t=>t.angle!==void 0).map(t=>{let n=t.angle,s=Math.cos(n),r=Math.sin(n),o=t.shape==="dome"?t.r:t.hd,a=[e.x+s*(e.r-.3),e.z+r*(e.r-.3)],l=[t.x-s*(o-.3),t.z-r*(o-.3)];return{id:`tunnel-${t.id}`,to:t.id,angle:n,start:a,end:l,length:Math.hypot(l[0]-a[0],l[1]-a[1])}})}function Oc(i,e){let t=[];if(i.id==="hub"){for(let n of e)n.angle!==void 0&&t.push({angle:n.angle,kind:"tunnel",to:n.id});for(let n of i.airlocks??[])t.push({angle:n,kind:"airlock"});return t}return i.angle!==void 0&&t.push({local:0,kind:"tunnel",to:"hub"}),i.backAirlock&&t.push({local:Math.PI,kind:"airlock",wide:!!i.wideDoor}),i.frontAirlock&&t.push({local:0,kind:"airlock"}),t.map(n=>n.local===void 0?n:{...n,angle:i.facing+n.local})}function Bc(i){let e=[];for(let t of i)for(let n of Oc(t,i)){if(n.kind!=="airlock")continue;let s=t.shape==="dome"?t.r:Math.abs(Math.cos(n.angle-t.facing))>.5?t.hd:t.hw,r=Math.cos(n.angle),o=Math.sin(n.angle),a=n.wide?3.6:Ws+.2;e.push({id:`airlock-${t.id}-${e.length}`,module:t.id,angle:n.angle,half:a,wide:!!n.wide,inner:[t.x+r*(s-.2),t.z+o*(s-.2)],outer:[t.x+r*(s+Dp),t.z+o*(s+Dp)]})}return e}function Fp(i){let e=[],t=(n,s,r,o,a=null)=>e.push({ax:n,az:s,bx:r,bz:o,tag:a});for(let n of i){let s=Oc(n,i);if(n.shape==="dome"){let r=Math.max(40,Math.round(n.r*6));for(let o=0;o<r;o++){let a=o/r*$e,l=(o+1)/r*$e,c=(a+l)/2;s.some(d=>{let u=Math.asin(Math.min(.99,((d.wide?3.6:Ws)+.15)/n.r));return Math.abs(Ki(c,d.angle))<u})||t(n.x+Math.cos(a)*n.r,n.z+Math.sin(a)*n.r,n.x+Math.cos(l)*n.r,n.z+Math.sin(l)*n.r)}}else{let{hd:r,hw:o}=n,a=s.some(d=>d.local===0),l=s.find(d=>d.local===Math.PI),c=d=>d?.wide?3.6:Ws+.15,h=(d,u,f,p)=>t(...ji(n,d,u),...ji(n,f,p));h(-r,-o,r,-o),h(-r,o,r,o),a?(h(r,-o,r,-c()),h(r,c(),r,o)):h(r,-o,r,o),l?(h(-r,-o,-r,-c(l)),h(-r,c(l),-r,o)):h(-r,-o,-r,o)}}for(let n of zr(i)){let s=-Math.sin(n.angle)*Kn,r=Math.cos(n.angle)*Kn;t(n.start[0]+s,n.start[1]+r,n.end[0]+s,n.end[1]+r),t(n.start[0]-s,n.start[1]-r,n.end[0]-s,n.end[1]-r)}for(let n of Bc(i)){let s=-Math.sin(n.angle)*n.half,r=Math.cos(n.angle)*n.half;t(n.inner[0]+s,n.inner[1]+r,n.outer[0]+s,n.outer[1]+r),t(n.inner[0]-s,n.inner[1]-r,n.outer[0]-s,n.outer[1]-r),t(n.outer[0]+s,n.outer[1]+r,n.outer[0]-s,n.outer[1]-r,n.id)}return e}function zc(i,e,t){for(let n of Bc(i)){let s=n.outer[0]-n.inner[0],r=n.outer[1]-n.inner[1],o=Math.hypot(s,r),a=((e-n.inner[0])*s+(t-n.inner[1])*r)/(o*o),l=Math.abs((e-n.inner[0])*r-(t-n.inner[1])*s)/o;if(a>=-.05&&a<=1&&l<n.half)return{kind:"airlock",id:n.id,module:n.module,t:a}}for(let n of i)if(n.shape==="dome"){if(Math.hypot(e-n.x,t-n.z)<n.r)return{kind:"module",id:n.id,module:n.id}}else{let[s,r]=PM(n,e,t);if(Math.abs(s)<n.hd&&Math.abs(r)<n.hw)return{kind:"module",id:n.id,module:n.id}}for(let n of zr(i)){let s=n.end[0]-n.start[0],r=n.end[1]-n.start[1],o=((e-n.start[0])*s+(t-n.start[1])*r)/(n.length*n.length),a=Math.abs((e-n.start[0])*r-(t-n.start[1])*s)/n.length;if(o>=0&&o<=1&&a<Kn)return{kind:"tunnel",id:n.id,module:o<.5?"hub":n.to}}return null}function Op(i,e=[]){let t=i.map(s=>({x:s.x,z:s.z,r:(s.shape==="dome"?s.r:Math.hypot(s.hd,s.hw))+6})),n=Dt.solarFarm;t.push({x:(n.x0+n.x1)/2,z:0,r:26});for(let s of["iceDrill","comms","landingPad","weather","reactor","fuel","printer"])t.push({...Dt[s],r:12});return e.includes("solar2")&&t.push({x:53,z:-28,r:16}),t}var kr=["power","water","oxygen","food"];function Bp(){return{tanks:{power:80,water:75,oxygen:85,food:70},stuff:{metal:4,ice:2,science:0,samples:0},dust:.15,crops:.35,crew:4,emergency:!1,built:[],breakers:!0,stats:{harvests:0,fixes:0,sols:0}}}function LM(i,e){let t=y=>i.built.includes(y),n=Math.max(0,Math.sin(e.sunElevation)),s=30+(t("solar2")?10:0),r=e.storm??0,o=i.breakers&&i.tanks.power>.5,a=e.problems??{},l=s*1.25*n*(1-i.dust*.85)*(1-r*.8),c=t("reactor")?4.5:0,h=e.night?3.2+(a.coldSnap?2.5:0):1.2,d=2.4+(t("greenhouse2")?.8:0)+(t("observatory")?.4:0),u=o?2.8:0,f=o&&!a.drillJam?1.6:0,p=o&&!a.filterClog?Math.min(f*1.4,2.6):0,x=o&&i.tanks.water>2?2.3:0,g=1+(t("greenhouse2")?.7:0),m=o&&i.tanks.water>2&&!a.mold;return{power:l+c-h-d-u,water:p-.55*i.crew*.25-(x?.5:0)-(m?.35*g:0),oxygen:x-.62*i.crew*.25-(a.leak?3.2:0)*(i.emergency?.4:1),food:-.42*i.crew*.25+(m?.25*g*i.crops:0),crops:m?.018*g:-.004,dust:r>.2?.02*r:.0015,solar:l,reactor:c}}var DM=260;function zp(i,e,t){let n=LM(i,e),s=i.built.includes("batteries")?1.6:1,r={power:100/(DM*s),water:2.2,oxygen:2.4,food:1.8};for(let a of kr)i.tanks[a]=ct(i.tanks[a]+n[a]*r[a]*t,0,100);return i.crops=ct(i.crops+n.crops*t,0,1),i.dust=ct(i.dust+n.dust*t,0,1),kr.some(a=>i.tanks[a]<=.5)?i.emergency=!0:i.emergency&&kr.every(a=>i.tanks[a]>15)&&(i.emergency=!1),n}function kc(i,e){return["metal","ice","science"].every(t=>(i.stuff[t]??0)>=(e[t]??0))}function kp(i,e){for(let t of["metal","ice","science"])i.stuff[t]-=e[t]??0}function Hp(i){if(i.crops<.8)return 0;let e=Math.round(18+22*i.crops);return i.tanks.food=ct(i.tanks.food+e,0,100),i.crops=.25,i.stats.harvests++,e}var In={dustStorm:{weight:i=>i.dustSeason?2.2:.7,duration:140,warn:18,auto:!0,fix:{where:"solarFarm",how:"scrub",after:!0}},leak:{weight:()=>1.2,warn:6,fix:{where:"module",how:"hold"},problem:"leak"},mold:{weight:i=>i.built.includes("greenhouse")?1:0,warn:4,fix:{where:"greenhouse",how:"balance"},problem:"mold"},solarFlare:{weight:i=>i.realFlare?2.5:.8,duration:60,warn:15,auto:!0,fix:{where:"hub",how:"shelter"}},filterClog:{weight:()=>1,warn:4,fix:{where:"life",how:"tap"},problem:"filterClog"},drillJam:{weight:()=>1,warn:4,fix:{where:"iceDrill",how:"timing"},problem:"drillJam"},powerSurge:{weight:()=>.9,warn:3,fix:{where:"power",how:"sequence"},problem:"surge"},comms:{weight:()=>.8,warn:4,fix:{where:"comms",how:"align"},problem:"comms"},coldSnap:{weight:i=>i.night?1.4:.1,duration:90,warn:8,auto:!0,problem:"coldSnap"},roverStuck:{weight:i=>i.site==="home"?.7:0,warn:5,fix:{where:"rover",how:"hold"},problem:"rover"},supplyDrop:{weight:()=>.9,warn:12,good:!0,fix:{where:"drop",how:"fetch"}},dustDevilClean:{weight:i=>i.dust>.3?1.2:.2,warn:0,good:!0,auto:!0,duration:25},meteorite:{weight:()=>.6,warn:0,good:!0,fix:{where:"meteorite",how:"hold"}}};function Gp(i=1){return{seed:i,clock:0,cooldown:75,skill:1,active:[],history:[],count:0}}var NM=95;function Vp(i,e,t){let n=hi(i.seed+i.count*7919+Math.floor(i.clock));i.clock+=e,i.cooldown-=e;for(let a of i.active){a.age+=e,a.phase==="warning"&&a.age>=In[a.id].warn&&(a.phase="active",a.age=0);let l=In[a.id];a.phase==="active"&&l.auto&&l.duration&&a.age>=l.duration&&(a.phase=l.fix?.after?"cleanup":"done",a.age=0)}let s=i.active.filter(a=>a.phase==="done");i.active=i.active.filter(a=>a.phase!=="done");let r=i.active.filter(a=>!In[a.id].good).length<(i.skill>1.25?2:1),o=null;if(i.cooldown<=0&&r&&!t.paused){let a=i.history.slice(-3),l=Ep(n,Object.keys(In),c=>{let h=In[c];return i.active.some(d=>d.id===c)?0:a.includes(c)?h.weight(t)*.15:c==="roverStuck"&&t.site!=="home"||h.fix?.where&&t.available&&!t.available(h.fix.where)?0:h.weight(t)*(h.good?1:ct(i.skill,.6,1.6))});l?(o=bu(i,l,n,t),i.cooldown=(NM+n()*60)/ct(i.skill,.6,1.6)):i.cooldown=20}return{started:o,finished:s}}function bu(i,e,t=Math.random,n={}){let s=In[e],r={id:e,uid:++i.count,phase:s.warn>0?"warning":"active",age:0,seed:Math.floor(t()*1e9)};return e==="leak"&&(r.module=UM(t,n.leakModules??["hub"])),e==="solarFlare"&&n.realFlare&&(r.real=n.realFlare),i.active.push(r),i.history.push(e),i.history.length>20&&i.history.shift(),r}var UM=(i,e)=>e[Math.floor(i()*e.length)];function Su(i,e,t){let n=i.active.find(o=>o.uid===e);if(!n)return null;n.phase="done";let s=t<45,r=t>120;return i.skill=ct(i.skill+(s?.08:r?-.12:.02),.6,1.6),i.active=i.active.filter(o=>o.uid!==e),n}function wu(i){let e={};for(let t of i.active){if(t.phase!=="active")continue;let n=In[t.id];n.problem&&(e[n.problem]=!0)}return e}var Wp=i=>{let e=i.active.find(t=>t.id==="dustStorm");return e?e.phase==="warning"?Math.min(.3,e.age/In.dustStorm.warn*.3):e.phase==="active"?Math.min(1,.3+e.age/20):0:0};var xa=(i,e,t=.75)=>{let n=Math.floor(i/e),s=i/e-n;return(n+At(t*.5,1-t*.5,s))*e},pn={home:{name:{en:"Home Base \xB7 Arcadia Planitia",bn:"\u09B9\u09CB\u09AE \u09AC\u09C7\u09B8 \xB7 \u0986\u09B0\u09CD\u0995\u09BE\u09A1\u09BF\u09AF\u09BC\u09BE \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u09A8\u09BF\u09B6\u09BF\u09AF\u09BC\u09BE"},lat:47.2,lon:184,gravity:3.71,sky:"mars",size:330,palette:["#6f4337","#b67b5c","#8a6a5f"],fact:{en:"NASA maps show water ice buried just under the ground here. That makes it a top pick for the first human base.",bn:"\u09A8\u09BE\u09B8\u09BE\u09B0 \u09AE\u09BE\u09A8\u099A\u09BF\u09A4\u09CD\u09B0 \u09A6\u09C7\u0996\u09BE\u09AF\u09BC, \u098F\u0996\u09BE\u09A8\u09C7 \u09AE\u09BE\u099F\u09BF\u09B0 \u09A0\u09BF\u0995 \u09A8\u09BF\u099A\u09C7 \u09AC\u09B0\u09AB \u0986\u099B\u09C7\u0964 \u09A4\u09BE\u0987 \u09AA\u09CD\u09B0\u09A5\u09AE \u09AE\u09BE\u09A8\u09C1\u09B7\u09C7\u09B0 \u0998\u09BE\u0981\u099F\u09BF\u09B0 \u099C\u09A8\u09CD\u09AF \u098F\u099F\u09BE \u09B8\u09C7\u09B0\u09BE \u099C\u09BE\u09AF\u09BC\u0997\u09BE\u0997\u09C1\u09B2\u09CB\u09B0 \u098F\u0995\u099F\u09BE\u0964"},source:"https://science.nasa.gov/resource/swim-map-shows-subsurface-water-ice-on-mars/",spawn:{x:-13,z:15},height(i,e){let t=Math.hypot(i,e),n=At(80,125,t),s=ln(i/70,e/70,11)*4+ln(i/20,e/20,12)*.7,r=yu(i/90,e/90,13)*16*At(120,165,t);return ot(ln(i/30,e/30,14)*.25,s+r,n)}},jezero:{name:{en:"Jezero Crater",bn:"\u099C\u09C7\u099C\u09C7\u09B0\u09CB \u0996\u09BE\u09A6"},lat:18.4,lon:77.5,gravity:3.71,sky:"mars",size:300,palette:["#6a4a40","#b98b6c","#8f7468"],difficulty:1,fact:{en:"Billions of years ago a river flowed into a lake here and built a delta. Perseverance left 10 sample tubes on the ground at a spot called Three Forks.",bn:"\u09B6\u09A4 \u0995\u09CB\u099F\u09BF \u09AC\u099B\u09B0 \u0986\u0997\u09C7 \u098F\u0996\u09BE\u09A8\u09C7 \u098F\u0995\u099F\u09BE \u09A8\u09A6\u09C0 \u09B9\u09CD\u09B0\u09A6\u09C7 \u09AA\u09A1\u09BC\u09C7 \u09AC\u09A6\u09CD\u09AC\u09C0\u09AA \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C7\u099B\u09BF\u09B2\u0964 \u09AA\u09BE\u09B0\u09B8\u09BF\u09AD\u09BF\u09AF\u09BC\u09BE\u09B0\u09C7\u09A8\u09CD\u09B8 \u09A5\u09CD\u09B0\u09BF \u09AB\u09B0\u09CD\u0995\u09B8 \u09A8\u09BE\u09AE\u09C7\u09B0 \u099C\u09BE\u09AF\u09BC\u0997\u09BE\u09AF\u09BC \u09AE\u09BE\u099F\u09BF\u09A4\u09C7 \u09E7\u09E6\u099F\u09BE \u09A8\u09AE\u09C1\u09A8\u09BE\u09B0 \u099F\u09BF\u0989\u09AC \u09B0\u09C7\u0996\u09C7 \u0997\u09C7\u099B\u09C7\u0964"},source:"https://science.nasa.gov/mission/mars-2020-perseverance/",spawn:{x:0,z:40},height(i,e){let t=At(10,-40,e)*At(110,40,Math.abs(i+e*.3)),n=Math.exp(-((i+.25*e+8*Math.sin(e/18))**2)/40)*At(0,-30,e),s=xa(t*14+ln(i/25,e/25,21)*2,3.2)-n*5,r=At(120,150,Math.hypot(i,e-60))*30;return s+ln(i/12,e/12,22)*.6+r},landmarks:[{type:"perseverance",x:18,z:4,rot:-.6},{type:"tubes",x:-14,z:18},{type:"ingenuity",x:30,z:-12}],pool:["tubes","samples","visit:perseverance","scan:delta"]},gale:{name:{en:"Gale Crater \xB7 Mount Sharp",bn:"\u0997\u09C7\u09B2 \u0996\u09BE\u09A6 \xB7 \u09AE\u09BE\u0989\u09A8\u09CD\u099F \u09B6\u09BE\u09B0\u09CD\u09AA"},lat:-5.4,lon:137.8,gravity:3.71,sky:"mars",size:300,palette:["#5b3c34","#c08a66","#9a7a6d"],difficulty:2,fact:{en:"Mount Sharp is a mountain made of stacked rock layers, like pages in a history book. Curiosity has been climbing it since 2014.",bn:"\u09AE\u09BE\u0989\u09A8\u09CD\u099F \u09B6\u09BE\u09B0\u09CD\u09AA \u09B8\u09CD\u09A4\u09B0\u09C7 \u09B8\u09CD\u09A4\u09B0\u09C7 \u09B8\u09BE\u099C\u09BE\u09A8\u09CB \u09AA\u09BE\u09A5\u09B0\u09C7\u09B0 \u09AA\u09BE\u09B9\u09BE\u09A1\u09BC, \u09AF\u09C7\u09A8 \u0987\u09A4\u09BF\u09B9\u09BE\u09B8 \u09AC\u0987\u09AF\u09BC\u09C7\u09B0 \u09AA\u09BE\u09A4\u09BE\u0964 \u0995\u09BF\u0989\u09B0\u09BF\u0993\u09B8\u09BF\u099F\u09BF \u09E8\u09E6\u09E7\u09EA \u09B8\u09BE\u09B2 \u09A5\u09C7\u0995\u09C7 \u098F\u09A4\u09C7 \u0989\u09A0\u099B\u09C7\u0964"},source:"https://science.nasa.gov/mission/msl-curiosity/",spawn:{x:-40,z:40},height(i,e){let t=Math.hypot(i-70,e+70),n=At(160,20,t)*46,s=xa(n+ln(i/30,e/30,31)*2.5,2.6,.65),r=Math.exp(-((t-95)**2)/300)*(1.4+Math.sin(i*.32+e*.12)*1.1);return s+r+ln(i/10,e/10,32)*.5},landmarks:[{type:"curiosity",x:10,z:-2,rot:.8}],pool:["samples","scan:layers","visit:curiosity","summit"]},olympus:{name:{en:"Olympus Mons",bn:"\u0985\u09B2\u09BF\u09AE\u09CD\u09AA\u09BE\u09B8 \u09AE\u09A8\u09B8"},lat:18.65,lon:226.2,gravity:3.71,sky:"thin",size:320,palette:["#5a3a35","#a3735f","#7d6058"],difficulty:2,fact:{en:"The tallest volcano in the solar system: about 22 km high, but 600 km wide, so its slopes are gentle. Up here the sky is darker because the air is so thin.",bn:"\u09B8\u09CC\u09B0\u099C\u0997\u09A4\u09C7\u09B0 \u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u0989\u0981\u099A\u09C1 \u0986\u0997\u09CD\u09A8\u09C7\u09AF\u09BC\u0997\u09BF\u09B0\u09BF: \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09E8\u09E8 \u0995\u09BF\u09AE\u09BF \u0989\u0981\u099A\u09C1, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09EC\u09E6\u09E6 \u0995\u09BF\u09AE\u09BF \u099A\u0993\u09A1\u09BC\u09BE, \u09A4\u09BE\u0987 \u09A2\u09BE\u09B2 \u0996\u09C1\u09AC \u0995\u09AE\u0964 \u098F\u0996\u09BE\u09A8\u09C7 \u09AC\u09BE\u09A4\u09BE\u09B8 \u098F\u09A4 \u09AA\u09BE\u09A4\u09B2\u09BE \u09AF\u09C7 \u0986\u0995\u09BE\u09B6 \u09AC\u09C7\u09B6\u09BF \u0997\u09BE\u09A2\u09BC\u0964"},source:"https://science.nasa.gov/mars/facts/",spawn:{x:80,z:0},height(i,e){let t=-i*.08,n=Math.hypot(i+95,e+10),s=-At(70,40,n)*28,r=xa(s,5,.5)*At(30,45,n)+s*At(45,30,n);return t+r+ln(i/20,e/20,41)*1.2+yu(i/40,e/40,42)*2},pool:["summit","samples","scan:caldera"]},valles:{name:{en:"Valles Marineris",bn:"\u09AD\u09CD\u09AF\u09BE\u09B2\u09C7\u09B8 \u09AE\u09C7\u09B0\u09BF\u09A8\u09BE\u09B0\u09BF\u09B8"},lat:-13.9,lon:300.8,gravity:3.71,sky:"mars",size:320,palette:["#5d3d38","#b37d61","#8b675c"],difficulty:3,fact:{en:"A giant canyon about 4,000 km long and up to 7 km deep. Its walls show many layers of old rock, and huge landslides have tumbled down them.",bn:"\u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09EA,\u09E6\u09E6\u09E6 \u0995\u09BF\u09AE\u09BF \u09B2\u09AE\u09CD\u09AC\u09BE \u0986\u09B0 \u09ED \u0995\u09BF\u09AE\u09BF \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u0997\u09AD\u09C0\u09B0 \u09AC\u09BF\u09B6\u09BE\u09B2 \u0997\u09BF\u09B0\u09BF\u0996\u09BE\u09A4\u0964 \u098F\u09B0 \u09A6\u09C7\u09AF\u09BC\u09BE\u09B2\u09C7 \u09AA\u09C1\u09B0\u09CB\u09A8\u09CB \u09AA\u09BE\u09A5\u09B0\u09C7\u09B0 \u0985\u09A8\u09C7\u0995 \u09B8\u09CD\u09A4\u09B0, \u0986\u09B0 \u09AC\u09BF\u09B6\u09BE\u09B2 \u09AD\u09C2\u09AE\u09BF\u09A7\u09B8 \u09A8\u09C7\u09AE\u09C7\u099B\u09C7\u0964"},source:"https://science.nasa.gov/mars/facts/",spawn:{x:-60,z:0},height(i,e){let t=At(28,70,Math.abs(e+Math.sin(i/40)*10)),n=xa(t*62+ln(i/25,e/25,51)*4,7,.55),s=Math.exp(-((i-30)**2/500+(e-30)**2/200))*9;return n+s+ln(i/9,e/9,52)*.5},hazards:["rockfall"],pool:["samples","scan:layers","meteorite"]},arsia:{name:{en:"Arsia Mons \xB7 cave skylight",bn:"\u0986\u09B0\u09CD\u09B8\u09BF\u09AF\u09BC\u09BE \u09AE\u09A8\u09B8 \xB7 \u0997\u09C1\u09B9\u09BE\u09B0 \u09AE\u09C1\u0996"},lat:-9.1,lon:239.5,gravity:3.71,sky:"thin",size:300,palette:["#4e3532","#8f6555","#5f4a45"],difficulty:3,fact:{en:"Orbiters have spotted deep round pits on the sides of volcanoes like Arsia Mons. They may be skylights into lava tube caves, which could one day shelter explorers.",bn:"\u0985\u09B0\u09AC\u09BF\u099F\u09BE\u09B0 \u0986\u09B0\u09CD\u09B8\u09BF\u09AF\u09BC\u09BE \u09AE\u09A8\u09B8\u09C7\u09B0 \u09AE\u09A4\u09CB \u0986\u0997\u09CD\u09A8\u09C7\u09AF\u09BC\u0997\u09BF\u09B0\u09BF\u09B0 \u0997\u09BE\u09AF\u09BC\u09C7 \u0997\u09AD\u09C0\u09B0 \u0997\u09CB\u09B2 \u0997\u09B0\u09CD\u09A4 \u09A6\u09C7\u0996\u09C7\u099B\u09C7\u0964 \u098F\u0997\u09C1\u09B2\u09CB \u09B2\u09BE\u09AD\u09BE-\u09B8\u09C1\u09A1\u09BC\u0999\u09CD\u0997 \u0997\u09C1\u09B9\u09BE\u09B0 \u099C\u09BE\u09A8\u09BE\u09B2\u09BE \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7, \u09AF\u09BE \u098F\u0995\u09A6\u09BF\u09A8 \u0985\u09AD\u09BF\u09AF\u09BE\u09A4\u09CD\u09B0\u09C0\u09A6\u09C7\u09B0 \u0986\u09B6\u09CD\u09B0\u09AF\u09BC \u09A6\u09BF\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964"},source:"https://science.nasa.gov/mission/mars-odyssey/",spawn:{x:-50,z:30},cave:{x:35,z:-10,r:9,depth:16,length:46,angle:.15},height(i,e){let t=Math.sin(i/28+ln(i/60,e/60,61)*3)*1.2,n=-Math.exp(-((e-20-12*Math.sin(i/35))**2)/30)*3,s=Math.hypot(i-35,e+10),r=-At(10.5,8.5,s)*16,o=Math.max(0,1-Math.hypot(i-29,e+3)/11)*At(8.5,10.5,s+3)*9;return t+n+Math.min(0,r+o)+ln(i/14,e/14,62)*.8},pool:["cave","samples","scan:lava"]},southpole:{name:{en:"South Pole \xB7 ice and geysers",bn:"\u09A6\u0995\u09CD\u09B7\u09BF\u09A3 \u09AE\u09C7\u09B0\u09C1 \xB7 \u09AC\u09B0\u09AB \u0986\u09B0 \u0997\u09BF\u099C\u09BE\u09B0"},lat:-85.5,lon:75,gravity:3.71,sky:"polar",size:300,palette:["#9c8a88","#f1e6e1","#b9a6a2"],ice:!0,difficulty:3,fact:{en:"In spring, sunlight warms the ground under the frozen carbon dioxide. Gas bursts out in jets and carves dark shapes that look like giant spiders.",bn:"\u09AC\u09B8\u09A8\u09CD\u09A4\u09C7 \u09B8\u09C2\u09B0\u09CD\u09AF\u09C7\u09B0 \u0986\u09B2\u09CB \u099C\u09AE\u09BE\u099F \u0995\u09BE\u09B0\u09CD\u09AC\u09A8 \u09A1\u09BE\u0987-\u0985\u0995\u09CD\u09B8\u09BE\u0987\u09A1\u09C7\u09B0 \u09A8\u09BF\u099A\u09C7\u09B0 \u09AE\u09BE\u099F\u09BF \u0997\u09B0\u09AE \u0995\u09B0\u09C7\u0964 \u0997\u09CD\u09AF\u09BE\u09B8 \u09AB\u09CB\u09AF\u09BC\u09BE\u09B0\u09BE\u09B0 \u09AE\u09A4\u09CB \u09AC\u09C7\u09B0\u09BF\u09AF\u09BC\u09C7 \u098F\u09B8\u09C7 \u09AC\u09BF\u09B6\u09BE\u09B2 \u09AE\u09BE\u0995\u09A1\u09BC\u09B8\u09BE\u09B0 \u09AE\u09A4\u09CB \u0995\u09BE\u09B2\u09CB \u09A6\u09BE\u0997 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C7\u0964"},source:"https://science.nasa.gov/mission/mars-reconnaissance-orbiter/",spawn:{x:0,z:50},height(i,e){return xa(ln(i/80,e/80,71)*14+i*.04,3.4,.8)+Wn(i/6,e/6,72)*.3},hazards:["geysers"],pool:["ice","samples","scan:spiders"]},meridiani:{name:{en:"Meridiani Planum",bn:"\u09AE\u09C7\u09B0\u09BF\u09A1\u09BF\u09AF\u09BC\u09BE\u09A8\u09BF \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u09A8\u09BE\u09AE"},lat:-1.95,lon:354.5,gravity:3.71,sky:"mars",size:300,palette:["#6e4638","#bb8460","#94705f"],difficulty:1,fact:{en:'Opportunity found tiny round stones here nicknamed "blueberries", made of a mineral that forms in water. It also found the first meteorite ever spotted on another planet.',bn:'\u0985\u09AA\u09B0\u099A\u09C1\u09A8\u09BF\u099F\u09BF \u098F\u0996\u09BE\u09A8\u09C7 "\u09AC\u09CD\u09B2\u09C1\u09AC\u09C7\u09B0\u09BF" \u09A8\u09BE\u09AE\u09C7\u09B0 \u099B\u09CB\u099F \u0997\u09CB\u09B2 \u09AA\u09BE\u09A5\u09B0 \u09AA\u09C7\u09AF\u09BC\u09C7\u099B\u09BF\u09B2, \u09AF\u09BE \u09AA\u09BE\u09A8\u09BF\u09A4\u09C7 \u09A4\u09C8\u09B0\u09BF \u09B9\u0993\u09AF\u09BC\u09BE \u0996\u09A8\u09BF\u099C \u09A6\u09BF\u09AF\u09BC\u09C7 \u0997\u09A1\u09BC\u09BE\u0964 \u0985\u09A8\u09CD\u09AF \u0997\u09CD\u09B0\u09B9\u09C7 \u09AA\u09CD\u09B0\u09A5\u09AE \u0989\u09B2\u09CD\u0995\u09BE\u09AA\u09BF\u09A3\u09CD\u09A1\u0993 \u098F\u099F\u09BE\u0987 \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09C7\u09AF\u09BC\u09C7\u099B\u09BF\u09B2\u0964'},source:"https://science.nasa.gov/mission/mer-opportunity/",spawn:{x:0,z:0},height(i,e){let t=Math.hypot(i,e),n=-At(11,3,t)*2.6+Math.exp(-((t-11)**2)/4)*.8,s=Math.hypot(i-90,e+80),r=-At(48,10,s)*14+Math.exp(-((s-48)**2)/30)*2.5;return n+r+ln(i/40,e/40,81)*.8},landmarks:[{type:"opportunity",x:70,z:-45,rot:2.2},{type:"heatshieldrock",x:-35,z:-40}],pool:["blueberries","meteorite","visit:opportunity"]},utopia:{name:{en:"Utopia Planitia",bn:"\u0987\u0989\u099F\u09CB\u09AA\u09BF\u09AF\u09BC\u09BE \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u09A8\u09BF\u09B6\u09BF\u09AF\u09BC\u09BE"},lat:25.1,lon:109.9,gravity:3.71,sky:"mars",size:300,palette:["#6a4339","#b07f63","#8c6c62"],difficulty:2,fact:{en:"NASA's Viking 2 landed on this huge plain in 1976 and photographed frost on the ground. China's Zhurong rover explored here in 2021. Scalloped hollows hint at ice below.",bn:"\u09A8\u09BE\u09B8\u09BE\u09B0 \u09AD\u09BE\u0987\u0995\u09BF\u0982 \u09E8 \u09E7\u09EF\u09ED\u09EC \u09B8\u09BE\u09B2\u09C7 \u098F\u0987 \u09AC\u09BF\u09B6\u09BE\u09B2 \u09B8\u09AE\u09AD\u09C2\u09AE\u09BF\u09A4\u09C7 \u09A8\u09C7\u09AE\u09C7 \u09AE\u09BE\u099F\u09BF\u09A4\u09C7 \u09A4\u09C1\u09B7\u09BE\u09B0\u09C7\u09B0 \u099B\u09AC\u09BF \u09A4\u09C1\u09B2\u09C7\u099B\u09BF\u09B2\u0964 \u099A\u09C0\u09A8\u09C7\u09B0 \u099D\u09C1\u09B0\u0982 \u09B0\u09CB\u09AD\u09BE\u09B0 \u09E8\u09E6\u09E8\u09E7 \u09B8\u09BE\u09B2\u09C7 \u098F\u0996\u09BE\u09A8\u09C7 \u0998\u09C1\u09B0\u09C7\u099B\u09C7\u0964 \u0996\u09BE\u0981\u099C\u0995\u09BE\u099F\u09BE \u0997\u09B0\u09CD\u09A4\u0997\u09C1\u09B2\u09CB \u09A8\u09BF\u099A\u09C7 \u09AC\u09B0\u09AB\u09C7\u09B0 \u0987\u0999\u09CD\u0997\u09BF\u09A4 \u09A6\u09C7\u09AF\u09BC\u0964"},source:"https://science.nasa.gov/mission/viking-2/",spawn:{x:-30,z:30},height(i,e){let t=ln(i/50,e/50,91)*2;for(let n=0;n<7;n++){let s=Math.sin(n*2.4)*80,r=Math.cos(n*1.7)*70,o=Math.hypot((i-s)*1.3,e-r);t-=At(16,3,o)*(2.5+(e<r?1.5:0))}return t},landmarks:[{type:"zhurong",x:25,z:-10,rot:1.2},{type:"viking",x:-60,z:-55,rot:.4}],pool:["ice","visit:zhurong","visit:viking","samples"]},phobos:{name:{en:"Phobos, the moon of Mars",bn:"\u09AB\u09CB\u09AC\u09CB\u09B8, \u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u099A\u09BE\u0981\u09A6"},lat:0,lon:0,gravity:.6,sky:"space",size:260,palette:["#3d3634","#77706b","#5a524f"],difficulty:2,moon:!0,fact:{en:"Phobos is only about 22 km wide and races around Mars three times a day. Its gravity is so weak that a jump here would last more than 20 minutes! (We made it shorter for the game.)",bn:"\u09AB\u09CB\u09AC\u09CB\u09B8 \u09AE\u09BE\u09A4\u09CD\u09B0 \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09E8\u09E8 \u0995\u09BF\u09AE\u09BF \u099A\u0993\u09A1\u09BC\u09BE \u0986\u09B0 \u09A6\u09BF\u09A8\u09C7 \u09A4\u09BF\u09A8\u09AC\u09BE\u09B0 \u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u099A\u09BE\u09B0\u09AA\u09BE\u09B6\u09C7 \u0998\u09CB\u09B0\u09C7\u0964 \u098F\u09B0 \u09AE\u09BE\u09A7\u09CD\u09AF\u09BE\u0995\u09B0\u09CD\u09B7\u09A3 \u098F\u09A4 \u09A6\u09C1\u09B0\u09CD\u09AC\u09B2 \u09AF\u09C7 \u098F\u0996\u09BE\u09A8\u09C7 \u098F\u0995\u099F\u09BE \u09B2\u09BE\u09AB \u09E8\u09E6 \u09AE\u09BF\u09A8\u09BF\u099F\u09C7\u09B0 \u09AC\u09C7\u09B6\u09BF \u099A\u09B2\u09A4! (\u0996\u09C7\u09B2\u09BE\u09AF\u09BC \u0986\u09AE\u09B0\u09BE \u099B\u09CB\u099F \u0995\u09B0\u09C7\u099B\u09BF\u0964)"},source:"https://science.nasa.gov/mars/moons/phobos/",spawn:{x:0,z:30},height(i,e){let t=-(i*i+e*e)/1040,n=-Math.abs(Math.sin((i*.9+e*.4)/9))*1.4,s=Math.hypot(i+50,e+40),r=-At(30,4,s)*9+Math.exp(-((s-30)**2)/25)*2;return t+n+r+ln(i/15,e/15,99)*.8},pool:["beacon","samples","summit"]}},Xp=["home","jezero","meridiani","gale","utopia","olympus","valles","arsia","southpole","phobos"];function qp(i){let e=pn[i];return e.cave?(t,n,s=!1)=>s&&Eu(e.cave,t,n)?-e.cave.depth+Wn(t/4,n/4,7)*.4:e.height(t,n):(t,n)=>e.height(t,n)}function Eu(i,e,t){let n=e-i.x,s=t-i.z,r=n*Math.cos(i.angle)+s*Math.sin(i.angle),o=-n*Math.sin(i.angle)+s*Math.cos(i.angle);return r>-2&&r<i.length&&Math.abs(o)<5.2||Math.hypot(n,s)<i.r-1}var Yp={samples:{count:5,text:{en:"Collect {n} interesting rocks",bn:"{n}\u099F\u09BE \u09AE\u099C\u09BE\u09B0 \u09AA\u09BE\u09A5\u09B0 \u09B8\u0982\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09CB"},reward:{science:4}},blueberries:{count:12,text:{en:'Collect {n} "blueberries"',bn:'{n}\u099F\u09BE "\u09AC\u09CD\u09B2\u09C1\u09AC\u09C7\u09B0\u09BF" \u09B8\u0982\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09CB'},reward:{science:6}},tubes:{count:10,text:{en:"Find the {n} sample tubes at Three Forks",bn:"\u09A5\u09CD\u09B0\u09BF \u09AB\u09B0\u09CD\u0995\u09B8\u09C7\u09B0 {n}\u099F\u09BE \u09A8\u09AE\u09C1\u09A8\u09BE \u099F\u09BF\u0989\u09AC \u0996\u09C1\u0981\u099C\u09C7 \u09AC\u09C7\u09B0 \u0995\u09B0\u09CB"},reward:{science:10}},ice:{count:4,text:{en:"Dig up {n} chunks of ice",bn:"{n}\u099F\u09BE \u09AC\u09B0\u09AB\u09C7\u09B0 \u099F\u09C1\u0995\u09B0\u09CB \u0996\u09C1\u0981\u09A1\u09BC\u09C7 \u09A4\u09CB\u09B2\u09CB"},reward:{ice:4}},meteorite:{count:1,text:{en:"Find the metal meteorite",bn:"\u09A7\u09BE\u09A4\u09AC \u0989\u09B2\u09CD\u0995\u09BE\u09AA\u09BF\u09A3\u09CD\u09A1 \u0996\u09C1\u0981\u099C\u09C7 \u09AC\u09C7\u09B0 \u0995\u09B0\u09CB"},reward:{metal:6}},summit:{count:1,text:{en:"Reach the highest point",bn:"\u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u0989\u0981\u099A\u09C1 \u099C\u09BE\u09AF\u09BC\u0997\u09BE\u09AF\u09BC \u09AA\u09CC\u0981\u099B\u09BE\u0993"},reward:{science:5}},cave:{count:1,text:{en:"Explore to the end of the lava tube",bn:"\u09B2\u09BE\u09AD\u09BE-\u09B8\u09C1\u09A1\u09BC\u0999\u09CD\u0997\u09C7\u09B0 \u09B6\u09C7\u09B7 \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u09AF\u09BE\u0993"},reward:{science:12,ice:2}},beacon:{count:3,text:{en:"Plant {n} radio beacons",bn:"{n}\u099F\u09BE \u09B0\u09C7\u09A1\u09BF\u0993 \u09AC\u09C0\u0995\u09A8 \u09AC\u09B8\u09BE\u0993"},reward:{science:8}},visit:{count:1,text:{en:"Find {thing} and say hello",bn:"{thing} \u0996\u09C1\u0981\u099C\u09C7 \u09AC\u09C7\u09B0 \u0995\u09B0\u09C7 \u09B9\u09CD\u09AF\u09BE\u09B2\u09CB \u09AC\u09B2\u09CB"},reward:{science:6}},scan:{count:3,text:{en:"Scan {n} spots of {thing}",bn:"{thing}-\u098F\u09B0 {n}\u099F\u09BE \u099C\u09BE\u09AF\u09BC\u0997\u09BE \u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8 \u0995\u09B0\u09CB"},reward:{science:7}}},OM={perseverance:{en:"Perseverance",bn:"\u09AA\u09BE\u09B0\u09B8\u09BF\u09AD\u09BF\u09AF\u09BC\u09BE\u09B0\u09C7\u09A8\u09CD\u09B8"},curiosity:{en:"Curiosity",bn:"\u0995\u09BF\u0989\u09B0\u09BF\u0993\u09B8\u09BF\u099F\u09BF"},opportunity:{en:"Opportunity",bn:"\u0985\u09AA\u09B0\u099A\u09C1\u09A8\u09BF\u099F\u09BF"},zhurong:{en:"Zhurong",bn:"\u099D\u09C1\u09B0\u0982"},viking:{en:"Viking 2",bn:"\u09AD\u09BE\u0987\u0995\u09BF\u0982 \u09E8"},delta:{en:"the old river delta",bn:"\u09AA\u09C1\u09B0\u09CB\u09A8\u09CB \u09A8\u09A6\u09C0\u09B0 \u09AC\u09A6\u09CD\u09AC\u09C0\u09AA"},layers:{en:"rock layers",bn:"\u09AA\u09BE\u09A5\u09B0\u09C7\u09B0 \u09B8\u09CD\u09A4\u09B0"},caldera:{en:"the volcano crater",bn:"\u0986\u0997\u09CD\u09A8\u09C7\u09AF\u09BC\u0997\u09BF\u09B0\u09BF\u09B0 \u099C\u09CD\u09AC\u09BE\u09B2\u09BE\u09AE\u09C1\u0996"},lava:{en:"old lava",bn:"\u09AA\u09C1\u09B0\u09CB\u09A8\u09CB \u09B2\u09BE\u09AD\u09BE"},spiders:{en:'the "spiders"',bn:'"\u09AE\u09BE\u0995\u09A1\u09BC\u09B8\u09BE"'}};function $p(i,e){let t=[...pn[i].pool??["samples"]],n=[];for(;n.length<Math.min(3,t.length);){let s=Math.floor(e()*t.length);n.push(t.splice(s,1)[0])}return n.map(s=>{let[r,o]=s.split(":"),a=Yp[r];return{kind:r,thing:o??null,need:a.count,have:0,reward:a.reward,done:!1}})}function Zp(i,e){return Yp[i.kind].text[e].replace("{n}",i.need).replace("{thing}",i.thing?OM[i.thing][e]:"")}function Jp(i,e){if(i.moon||e.moon)return 6e3;let t=3389.5,n=Math.PI/180,s=Math.sin((e.lat-i.lat)*n/2)**2+Math.cos(i.lat*n)*Math.cos(e.lat*n)*Math.sin((e.lon-i.lon)*n/2)**2;return 2*t*Math.asin(Math.min(1,Math.sqrt(s)))}var Kp=i=>ct(pn[i].difficulty??1,1,3);var BM=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,zM=`
varying vec3 vDir;
uniform vec3 sunDir;
uniform vec3 earthDir;
uniform float storm;
uniform float thin;
uniform float space;
uniform float polar;
uniform float time;
float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
void main() {
  vec3 dir = normalize(vDir);
  float up = clamp(dir.y, -0.2, 1.0);
  float sunUp = sunDir.y;
  float day = smoothstep(-0.12, 0.18, sunUp);
  float twilight = smoothstep(-0.25, 0.0, sunUp) * (1.0 - smoothstep(0.0, 0.32, sunUp));
  float cosSun = dot(dir, normalize(sunDir));
  vec3 horizonDay = mix(vec3(0.80, 0.58, 0.42), vec3(0.88, 0.74, 0.62), polar);
  vec3 zenithDay = mix(vec3(0.54, 0.36, 0.28), vec3(0.36, 0.30, 0.36), thin);
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
  float dark = max(1.0 - day, space);
  vec3 cell = floor(dir * 160.0);
  float star = step(0.9975, hash(cell)) * (0.6 + 0.4 * sin(time * 2.0 + hash(cell + 3.0) * 30.0));
  float band = exp(-pow(dot(dir, normalize(vec3(0.3, 0.6, -0.74))) * 4.0, 2.0)) * 0.08;
  col += (vec3(star) + vec3(0.7, 0.75, 1.0) * band) * dark * (1.0 - storm * 0.9);
  // Earth: a bright blue-white star near the Sun after sunset
  float earth = smoothstep(0.99985, 0.99995, dot(dir, normalize(earthDir)));
  col += vec3(0.6, 0.8, 1.0) * earth * 3.0 * (1.0 - day) * (1.0 - storm);
  // the Sun itself: smaller and dimmer than from Earth
  float disc = smoothstep(0.99955, 0.99975, cosSun);
  col += vec3(1.3, 1.15, 1.0) * disc * (1.0 - storm * 0.85) + vec3(0.6, 0.4, 0.25) * pow(max(cosSun, 0.0), 300.0);
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
}`,kM=new D(.35,.82,-.45).normalize();function jp(i,{space:e=!1,thin:t=!1,polar:n=!1}={}){let s=new kt({vertexShader:BM,fragmentShader:zM,side:rn,depthWrite:!1,uniforms:{sunDir:{value:new D(0,1,0)},earthDir:{value:new D(0,.1,-1)},storm:{value:0},thin:{value:t?1:0},space:{value:e?1:0},polar:{value:n?1:0},time:{value:0}}}),r=new Re(new Ft(400,40,20),s);r.frustumCulled=!1,r.renderOrder=-10,i.add(r);let o=new nt({color:"#8f8580",roughness:1,emissive:"#2a2624",emissiveIntensity:.6,fog:!1}),a=new Mi(1,2),l=a.attributes.position;for(let x=0;x<l.count;x++){let g=new D().fromBufferAttribute(l,x);g.multiplyScalar(1+.13*Math.sin(g.x*4+g.y*3)+.08*Math.cos(g.z*5)),g.x*=1.3,l.setXYZ(x,g.x,g.y,g.z)}a.computeVertexNormals();let c=new Re(a,o);c.scale.setScalar(e?.001:2.4);let h=new Re(new Mi(1,1),o);h.scale.setScalar(e?.001:.9),r.add(c,h);let d=new Wo("#ffe2c0",3);d.castShadow=!0,d.shadow.bias=-2e-4,d.shadow.normalBias=.05;let u=new Ho("#f0d3c4","#7a4c40",1.4);i.add(d,d.target,u);let f=new D;return{dome:r,sun:d,hemi:u,material:s,phobos:c,deimos:h,update({sunDir:x,earthDir:g,hours:m,storm:y=0,focus:v,indoors:M=0,time:w=0,shadowSize:S=60}){let _=s.uniforms;_.sunDir.value.copy(x),_.earthDir.value.copy(g),_.storm.value=y,_.time.value=w;let b=At(-.1,.2,x.y),R=1-At(.05,.5,x.y),A=1-At(-.12,.06,x.y);d.color.setRGB(ot(1,.55,A),ot(ot(.88,.62,R),.66,A),ot(ot(.75,.45,R),1,A)),d.intensity=3.1*b*(1-y*.75)+A*.55,u.intensity=ot(.62,1.45,b)*(1-y*.25)+M*.1,u.color.setRGB(ot(.42,.95,b),ot(.46,.82,b),ot(.7,.77,b)),u.groundColor.setRGB(ot(.16,.48,b),ot(.14,.3,b),ot(.2,.25,b)),f.copy(A>.5?kM:x).normalize().multiplyScalar(80),d.position.copy(v).add(f.y>4?f:f.setY(4)),d.target.position.copy(v);let L=d.shadow.camera;L.right!==S&&(Object.assign(L,{left:-S,right:S,top:S,bottom:-S,near:1,far:220}),L.updateProjectionMatrix());let C=m/11.1%1*Math.PI*2;c.position.set(-Math.cos(C)*330,Math.sin(C)*200-20,-60),c.rotation.y=C,c.visible=c.position.y>-10;let U=m/131%1*Math.PI*2;return h.position.set(Math.cos(U)*340,Math.sin(U)*230-10,90),h.visible=h.position.y>-5,{day:b,low:R}},fogColor(x,g=0){let m=At(-.12,.42,p().sunDir.value.y);return x.setRGB(ot(.08,.72,m),ot(.07,.5,m),ot(.1,.4,m)),x.lerp(new Be(ot(.15,.62,m),ot(.09,.38,m),ot(.06,.22,m)),g),x}};function p(){return s.uniforms}}function HM(i,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256),o=hi(1708);for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=c/256*$e,d=l/256*$e,u=Math.sin(h*3+d*15+1.9*Math.sin(h*2+d)),f=(e?228:205)+Math.sin(h*2+1.3*Math.sin(d))*Math.sin(d*3+h)*12+u*8+o()*30;r.data.set([f,f-(e?2:6),f-(e?0:11),255],(c+l*256)*4)}s.putImageData(r,0,0);for(let l=0;l<1400;l++){let c=o()*256,h=o()*256,d=.3+o()**5*2.4,u=Math.round(110+o()*80);s.fillStyle=`rgb(${u},${u-6},${u-10})`,s.beginPath(),s.ellipse(c,h,d*1.4,d*.7,o()*$e,0,$e),s.fill()}let a=new Dn(n);return a.colorSpace=Vt,a.wrapS=a.wrapT=pi,a.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),a}function GM(i){let e=hi(i),t=new Mi(1,1),n=t.attributes.position,s=[];for(let r=0;r<n.count;r++){let o=n.getX(r),a=n.getY(r),l=n.getZ(r),c=.72+.48*Wn(o*4+a*6,l*4-a*2,i);n.setXYZ(r,o*c+a*.12,Math.max(a*c,-.42),l*c);let h=.72+.3*Wn(o*2+l,a*6,i+2)+e()*.1;s.push(h,h,h)}return t.setAttribute("color",new Je(s,3)),t.computeVertexNormals(),t}function VM(i,e,t){let n=1/0;for(let s of i)for(let r=1;r<s.length;r++){let[o,a]=s[r-1],[l,c]=s[r],h=l-o,d=c-a,u=h*h+d*d,f=Math.max(0,Math.min(1,((e-o)*h+(t-a)*d)/u));n=Math.min(n,Math.hypot(e-o-h*f,t-a-d*f))}return n}function Qp(i,e,t,n,{clear:s=[],paths:r=[],quality:o=1,seed:a=1}={}){let l=new Ne;i.add(l);let[c,h,d]=t.palette.map(K=>new Be(K)),u=["gale","valles","olympus","southpole"].includes(t.id),f=Math.round(t.size/(o>1?1.5:2.1)),p=new en(t.size,t.size,f,f).rotateX(-Math.PI/2),x=p.attributes.position,g=p.attributes.uv,m=[],y=new Be,v=new Be,M=c.clone().lerp(h,.35);for(let K=0;K<x.count;K++){let k=x.getX(K),O=x.getZ(K),J=n(k,O);x.setY(K,J),g.setXY(K,k/4,O/4);let ce=.65*Wn(k/11,O/11,a+6)+.35*Wn(k/1.7,O/1.7,a+7);y.copy(c).lerp(h,ce);let _e=Math.abs(n(k+.8,O)-n(k-.8,O))+Math.abs(n(k,O+.8)-n(k,O-.8));if(y.lerp(d,At(.5,1.8,_e)*.75),u){let $=.5+.5*Math.sin(J*1.1+Wn(k/30,O/30,9)*2);v.copy(h).lerp(d,.3).multiplyScalar(.82+$*.3),y.lerp(v,At(.4,1.4,_e)*.6)}if(t.id==="gale"&&y.lerp(new Be("#3b302f"),Math.exp(-((Math.hypot(k-70,O+70)-95)**2)/260)*.75),r.length&&y.lerp(M,(1-At(1.4,3.2,VM(r,k,O)))*.55),t.id==="home"){let $=Math.abs(Math.sin(k/7+Math.sin(O/9)))*Math.abs(Math.sin(O/7+Math.cos(k/11)));y.multiplyScalar(1-(1-At(.02,.09,$))*.12)}m.push(y.r,y.g,y.b)}p.setAttribute("color",new Je(m,3)),p.computeVertexNormals();let w=HM(e,!!t.ice),S=new Re(p,new nt({vertexColors:!0,roughness:.96,map:w,bumpMap:w,bumpScale:.05}));S.receiveShadow=!0,l.add(S);let _=new en(t.size*5,t.size*5,70,70).rotateX(-Math.PI/2),b=_.attributes.position,R=[];for(let K=0;K<b.count;K++){let k=b.getX(K),O=b.getZ(K),J=Math.max(Math.abs(k),Math.abs(O))<t.size/2-4,ce=ln(k/160,O/160,a+3)*18+At(t.size*.6,t.size*2.2,Math.hypot(k,O))*40;b.setY(K,J?n(k,O)-3:n(Math.max(-t.size/2,Math.min(t.size/2,k)),Math.max(-t.size/2,Math.min(t.size/2,O)))+ce*At(t.size/2,t.size,Math.max(Math.abs(k),Math.abs(O)))),y.copy(c).lerp(h,.45+Wn(k/60,O/60,4)*.3),R.push(y.r,y.g,y.b)}_.setAttribute("color",new Je(R,3)),_.computeVertexNormals(),l.add(new Re(_,new nt({vertexColors:!0,roughness:1})));let A=hi(a+4711),L=new nt({vertexColors:!0,flatShading:!0,roughness:.95}),C=[],U=[c,h,d].map(K=>K.clone().lerp(new Be("#ffffff"),.05)),P=new Et,V=t.size/2-6,W=Math.round((t.id==="meridiani"?120:260)*(o>0?1:.5));for(let K=0;K<4;K++){let k=new kn(GM(a+K*97),L,W),O=0;for(let J=0;J<W*2&&O<W;J++){let ce=(A()-.5)*2*V,_e=(A()-.5)*2*V,$=.08+A()**4*(K===0?2.4:.9);if(s.some(Ce=>Math.hypot(ce-Ce.x,_e-Ce.z)<Ce.r+$)||t.cave&&Math.hypot(ce-t.cave.x,_e-t.cave.z)<t.cave.r+3)continue;let ye=$*(.35+A()*.6);P.position.set(ce,n(ce,_e)+ye*.2,_e),P.rotation.set(A()*.5,A()*$e,A()*.4),P.scale.set($*(.9+A()*.5),ye,$),P.updateMatrix(),k.setMatrixAt(O,P.matrix),k.setColorAt(O,U[Math.floor(A()*3)]),$>.7&&C.push({x:ce,z:_e,r:$*.8}),O++}k.count=O,k.castShadow=K===0,k.receiveShadow=!0,l.add(k)}let G={};return t.id==="meridiani"&&(G.blueberries=WM(l,n,A,700,.045,"#3c3a4a",s,V)),t.id==="southpole"&&XM(l,n,A,V),t.cave&&(G.cave=qM(l,t.cave)),{group:l,ground:S,blockers:C,extras:G}}function WM(i,e,t,n,s,r,o,a){let l=new kn(new Ft(1,8,6),new nt({color:r,roughness:.35,metalness:.3}),n),c=new Et,h=0;for(let d=0;d<n*2&&h<n;d++){let u=(t()-.5)*2*a*.7,f=(t()-.5)*2*a*.7;o.some(p=>Math.hypot(u-p.x,f-p.z)<p.r)||(c.position.set(u,e(u,f)+s*.6,f),c.scale.setScalar(s*(.7+t()*.6)),c.updateMatrix(),l.setMatrixAt(h++,c.matrix))}return l.count=h,i.add(l),l}function XM(i,e,t,n){let s=document.createElement("canvas");s.width=s.height=256;let r=s.getContext("2d");r.strokeStyle="#2d2626",r.lineCap="round";let o=(c,h,d,u,f)=>{if(u<6||f<.6)return;let p=c+Math.cos(d)*u,x=h+Math.sin(d)*u;r.lineWidth=f,r.beginPath(),r.moveTo(c,h),r.lineTo(p,x),r.stroke(),o(p,x,d+(t()-.5)*.9,u*.7,f*.7),t()<.6&&o(p,x,d+(t()-.5)*1.8,u*.6,f*.6)};for(let c=0;c<9;c++)o(128,128,c/9*$e+t()*.3,34,7);let a=new Dn(s);a.colorSpace=Vt;let l=new $t({map:a,transparent:!0,opacity:.75,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3});for(let c=0;c<26;c++){let h=(t()-.5)*2*n*.8,d=(t()-.5)*2*n*.8,u=6+t()*9,f=new Re(new en(u,u).rotateX(-Math.PI/2),l);f.position.set(h,e(h,d)+.06,d),f.rotation.y=t()*$e,i.add(f)}}function qM(i,e){let t=[];for(let u=0;u<=8;u++){let f=u/8,p=-4+f*(e.length+4),x=Math.sin(f*5)*2.5;t.push(new D(e.x+Math.cos(e.angle)*p-Math.sin(e.angle)*x,-e.depth+2.6,e.z+Math.sin(e.angle)*p+Math.cos(e.angle)*x))}let n=new Sr(t),s=new Bo(n,80,6,14,!1),r=s.attributes.position;for(let u=0;u<r.count;u++){let f=new D().fromBufferAttribute(r,u),p=Wn(f.x/2,f.z/2+f.y,5)-.5;r.setY(u,Math.max(f.y+p*1.2,-e.depth-.4))}s.computeVertexNormals();let o=new nt({color:"#4a3832",roughness:1,side:rn}),a=new Re(s,o);a.receiveShadow=!0,i.add(a);let l=n.getPoint(1),c=new Ne,h=new nt({color:"#c9f3ff",emissive:"#5fd6ff",emissiveIntensity:1.2,roughness:.15,transparent:!0,opacity:.85});for(let u=0;u<9;u++){let f=new Re(new vi(.25+u%3*.12,1+u%4*.5,5),h);f.position.set(l.x+Math.sin(u*2.1)*1.8,-e.depth+.5,l.z+Math.cos(u*1.3)*1.8),f.rotation.set(Math.sin(u)*.4,u,Math.cos(u)*.4),c.add(f)}let d=new Os("#7fe4ff",6,14,1.6);return d.position.set(l.x,-e.depth+2,l.z),c.add(d),i.add(c),{mesh:a,curve:n,end:l,crystals:c}}function tm(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ut;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=em(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let p=em(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function em(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ln(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);a.setComponent(u+d,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Tu=new Map;function Qe(i,e){return Tu.has(i)||Tu.set(i,e()),Tu.get(i)}var Nt=(i,e=.62,t=.12,n={})=>new nt({color:i,roughness:e,metalness:t,...n}),B={shell:()=>Qe("shell",()=>Nt("#e9ded2",.5,.14)),shellShade:()=>Qe("shellShade",()=>Nt("#c9bcae",.56,.16)),frame:()=>Qe("frame",()=>Nt("#5c5562",.45,.35)),trim:()=>Qe("trim",()=>Nt("#e3884c",.5,.1)),indigo:()=>Qe("indigo",()=>Nt("#3f3e5a",.62,.15)),steel:()=>Qe("steel",()=>Nt("#9aa0ad",.32,.72)),darkSteel:()=>Qe("darkSteel",()=>Nt("#4a4e5c",.4,.6)),rubber:()=>Qe("rubber",()=>Nt("#2c2a33",.9,0)),floor:()=>Qe("floor",()=>Nt("#6b7585",.7,.2,{map:Ru("#6b7585","#5b6474")})),wallIn:()=>Qe("wallIn",()=>Nt("#dcd7df",.7,.05)),wood:()=>Qe("wood",()=>Nt("#b98b5e",.75,0)),fabric:()=>Qe("fabric",()=>Nt("#6b8fb5",.95,0)),fabricWarm:()=>Qe("fabricWarm",()=>Nt("#d97a6a",.95,0)),soil:()=>Qe("soil",()=>Nt("#4a3026",.98,0)),regolith:()=>Qe("regolith",()=>Nt("#a46e56",.97,0,{map:YM()})),hazard:()=>Qe("hazard",()=>Nt("#ffffff",.6,.1,{map:$M()})),glass:()=>Qe("glass",()=>new nt({color:"#cfe9ff",roughness:.08,metalness:.1,transparent:!0,opacity:.18,depthWrite:!1,side:xn})),window:()=>Qe("window",()=>Nt("#334a6e",.12,.5,{emissive:"#1d2f4d",emissiveIntensity:.35})),water:()=>Qe("water",()=>new nt({color:"#5fb6e8",roughness:.1,metalness:.05,transparent:!0,opacity:.62,emissive:"#1d5f88",emissiveIntensity:.35})),lampWarm:()=>Qe("lampWarm",()=>Nt("#ffe2b5",.4,0,{emissive:"#ffcf8a",emissiveIntensity:2.2})),lampCool:()=>Qe("lampCool",()=>Nt("#c8fff4",.4,0,{emissive:"#7ef4e0",emissiveIntensity:2})),lampPink:()=>Qe("lampPink",()=>Nt("#ffb3ef",.4,0,{emissive:"#ff5fd2",emissiveIntensity:2.6})),lampRed:()=>Qe("lampRed",()=>Nt("#ff8a7a",.4,0,{emissive:"#ff3b2f",emissiveIntensity:2.4})),lampGreen:()=>Qe("lampGreen",()=>Nt("#b6ffb0",.4,0,{emissive:"#52e05c",emissiveIntensity:2.2})),solarCell:()=>Qe("solarCell",()=>Nt("#ffffff",.25,.55,{map:ZM()})),leaf:()=>Qe("leaf",()=>Nt("#6fae5c",.8,0)),leafDark:()=>Qe("leafDark",()=>Nt("#3f7d45",.8,0)),fruitRed:()=>Qe("fruitRed",()=>Nt("#e2452f",.45,0)),fruitYellow:()=>Qe("fruitYellow",()=>Nt("#f4c542",.5,0)),potato:()=>Qe("potato",()=>Nt("#b98a55",.9,0)),rice:()=>Qe("rice",()=>Nt("#a8c95b",.85,0))};function Xs(i,e,t,n=null){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Dn(s);return r.colorSpace=Vt,n&&(r.wrapS=r.wrapT=pi,r.repeat.set(...n)),r}function Ru(i,e){return Xs(128,128,t=>{t.fillStyle=i,t.fillRect(0,0,128,128),t.strokeStyle=e,t.lineWidth=3,t.strokeRect(1.5,1.5,125,125),t.fillStyle=e;for(let[n,s]of[[10,10],[118,10],[10,118],[118,118]])t.fillRect(n-2,s-2,4,4)},[1,1])}function YM(){return Xs(128,64,i=>{i.fillStyle="#a46e56",i.fillRect(0,0,128,64);for(let e=0;e<2;e++)for(let t=-1;t<3;t++){let n=t*50+(e?25:0);i.fillStyle=e?"#b47b60":"#a8725a",i.beginPath(),i.roundRect(n+2,e*32+2,46,28,10),i.fill(),i.strokeStyle="#7b4c3b",i.lineWidth=2,i.stroke()}},[8,1])}function $M(){return Xs(64,64,i=>{i.fillStyle="#f2b13a",i.fillRect(0,0,64,64),i.fillStyle="#2b2733";for(let e=-64;e<64;e+=22)i.beginPath(),i.moveTo(e,64),i.lineTo(e+11,64),i.lineTo(e+75,0),i.lineTo(e+64,0),i.fill()},[4,1])}function ZM(){return Xs(256,128,i=>{let e=i.createLinearGradient(0,128,256,0);e.addColorStop(0,"#13204a"),e.addColorStop(.6,"#2b4280"),e.addColorStop(1,"#5a5f99"),i.fillStyle="#c7c9d6",i.fillRect(0,0,256,128);for(let t=0;t<8;t++)for(let n=0;n<4;n++)i.fillStyle=e,i.fillRect(t*32+2,n*32+2,28,28),i.fillStyle="#ffffff22",i.fillRect(t*32+2,n*32+15,28,1)})}function JM(i,e,t,{bg:n="#262b3d",fg:s="#fff1d9",accent:r="#e3884c"}={}){return Xs(512,160,(o,a,l)=>{o.fillStyle=n,o.fillRect(0,0,a,l),o.fillStyle=r,o.fillRect(0,l-14,a,14),o.font='84px system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',o.textBaseline="middle",o.fillText(i,22,72),o.fillStyle=s,o.font="bold 54px system-ui, sans-serif",o.fillText(e,132,56),o.fillStyle="#c8c3d4",o.font='38px "Noto Sans Bengali", "Hind Siliguri", system-ui, sans-serif',o.fillText(t,134,112)})}function Qi(i,e,t,n=3.4,s){let r=JM(i,e,t,s);return new Re(new en(n,n*160/512),new $t({map:r,toneMapped:!1}))}function ya(i,e,t=256){let n=document.createElement("canvas");n.width=t,n.height=Math.round(t*e/i);let s=new Dn(n);return s.colorSpace=Vt,{mesh:new Re(new en(i,e),new $t({map:s,toneMapped:!1})),canvas:n,ctx:n.getContext("2d"),update(){s.needsUpdate=!0}}}var KM=new Zt(1,1,1),jM=new Br(1,1,1,2,.12),Au=new Map,QM=(i,e=1,t=!1)=>{let n=`${i}-${e}-${t}`;return Au.has(n)||Au.set(n,new bt(e,1,1,i,1,t)),Au.get(n)},eb=new Ft(1,20,14),_a=new Et,Ye=class{constructor(){this.parts=new Map}add(e,t,n=0,s=0,r=0,o=1,a=1,l=1,c=0,h=0,d=0){_a.position.set(n,s,r),_a.rotation.set(c,h,d),_a.scale.set(o,a,l),_a.updateMatrix();let u=e.clone().applyMatrix4(_a.matrix);return this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(u),this}raw(e,t){return this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(e),this}box(e,t,n,s,r,o,a,l=0,c=0,h=0){return this.add(KM,e,t,n,s,r,o,a,c,l,h)}round(e,t,n,s,r,o,a,l=0,c=0,h=0){return this.add(jM,e,t,n,s,r,o,a,c,l,h)}cyl(e,t,n,s,r,o,a=18,l=0,c=0,h=0,d=1){return this.add(QM(a,d),e,t,n,s,r,o,r,l,c,h)}ball(e,t,n,s,r,o=r,a=r){return this.add(eb,e,t,n,s,r,o,a)}build(e,{shadows:t=!0,receive:n=!0}={}){let s=[];for(let[r,o]of this.parts){let a=tm(o.map(tb)),l=new Re(a,r);l.castShadow=t&&!r.transparent,l.receiveShadow=n,e.add(l),s.push(l)}return this.parts.clear(),s}};function tb(i){let e=i.index?i.toNonIndexed():i;for(let t of Object.keys(e.attributes))["position","normal","uv"].includes(t)||e.deleteAttribute(t);return e.attributes.uv||e.setAttribute("uv",new Je(new Float32Array(e.attributes.position.count*2),2)),e}function sm(i,e,t,n,s=48){let r=new Ft(1,s,16,0,Math.PI*2,0,Math.PI/2);return r.scale(i,t-e,i),r.translate(0,e,0),new Re(r,n)}var nm=null;function Cu(){return nm??=Xs(32,32,i=>{let e=i.createRadialGradient(16,16,0,16,16,16);e.addColorStop(0,"#ffffffff"),e.addColorStop(.6,"#ffffff99"),e.addColorStop(1,"#ffffff00"),i.fillStyle=e,i.fillRect(0,0,32,32)}),nm}var im=null;function tn(i,e=1,t=.8){im??=Xs(64,64,s=>{let r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"#ffffffff"),r.addColorStop(.3,"#ffffff88"),r.addColorStop(1,"#ffffff00"),s.fillStyle=r,s.fillRect(0,0,64,64)});let n=new Ds(new cs({map:im,color:i,transparent:!0,opacity:t,depthWrite:!1,blending:Xi}));return n.scale.setScalar(e),n}function xs(i){let e=i.clone();return e.transparent=!0,e.userData.fade=!0,e}function Hc(i,e){for(let t of i)t.opacity=e,t.depthWrite=e>.95,t.visible=e>.02}var ke=.32,nb={hub:["\u{1F3E0}","HABITAT","\u09AC\u09BE\u09B8\u09B8\u09CD\u09A5\u09BE\u09A8"],greenhouse:["\u{1F331}","GREENHOUSE","\u0997\u09CD\u09B0\u09BF\u09A8\u09B9\u09BE\u0989\u09B8"],power:["\u26A1","POWER PLANT","\u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE\u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0"],life:["\u{1F4A7}","WATER + OXYGEN","\u09AA\u09BE\u09A8\u09BF + \u0985\u0995\u09CD\u09B8\u09BF\u099C\u09C7\u09A8"],garage:["\u{1F6DE}","GARAGE","\u0997\u09CD\u09AF\u09BE\u09B0\u09C7\u099C"],lab:["\u{1F52C}","SCIENCE LAB","\u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8 \u09B2\u09CD\u09AF\u09BE\u09AC"],greenhouse2:["\u{1F33B}","GREENHOUSE 2","\u0997\u09CD\u09B0\u09BF\u09A8\u09B9\u09BE\u0989\u09B8 \u09E8"],observatory:["\u{1F52D}","OBSERVATORY","\u09AE\u09BE\u09A8\u09AE\u09A8\u09CD\u09A6\u09BF\u09B0"],playroom:["\u{1F9F6}","PLAYROOM","\u0996\u09C7\u09B2\u09BE\u0998\u09B0"]},ib=null;function sb(){return ib??=Ru("#707b8c","#5c6676"),B.floor()}function Gc(i,e){let t=i.attributes.position,n=i.attributes.uv;for(let r=0;r<t.count;r++)n.setXY(r,t.getX(r)/2,t.getZ(r)/2);let s=new Re(i,sb());return s.position.y=e,s.receiveShadow=!0,s}function rm(i,e,t=B.shellShade()){let n=new Ne,s=[];for(let r of[-1,1]){let o=new Ne,a=new Ye;a.round(t,0,e/2,0,.16,e,i/2),a.box(B.window(),0,e*.72,0,.2,e*.18,i/2*.5),a.box(B.trim(),0,.35,0,.18,.08,i/2*.9),a.build(o),n.add(o),s.push({p:o,side:r})}return{group:n,set(r){for(let{p:o,side:a}of s)o.position.z=a*(i/4+r*i*.47)}}}function rb(i,e,t){let n=new Ne;n.position.set(i.x,0,i.z);let s=new Ye,r=new Ye,o=i.glass?B.glass():B.shell(),a=B.frame(),l=xs(a);t.push(l),s.cyl(B.shellShade(),0,ke/2-.55,0,i.r+.7,ke+1.1,48);let c=Math.max(40,Math.round(i.r*6));for(let f=0;f<c;f++){let p=f/c*$e,x=(f+1)/c*$e,g=(p+x)/2;if(e.some(S=>Math.abs(Ki(g,S.angle))<Math.asin(Math.min(.99,((S.wide?3.6:Ws)+.15)/i.r))))continue;let y=2*i.r*Math.sin(Math.PI/c)+.04,v=Math.cos(g)*i.r,M=Math.sin(g)*i.r,w=-(g+Math.PI/2);i.glass?(s.box(a,v,ke+i.wall/2,M,.14,i.wall,.14,w),s.box(o,v,ke+i.wall/2,M,y,i.wall,.06,w)):(s.box(o,v,ke+i.wall/2,M,y,i.wall,.34,w),s.box(B.wallIn(),v*.975,ke+i.wall/2,M*.975,y,i.wall-.1,.06,w),s.box(B.trim(),v*1.012,ke+i.wall-.45,M*1.012,y,.16,.06,w),f%4===2&&s.box(B.window(),v,ke+1.75,M,y*.7,.9,.42,w)),i.id==="hub"&&s.box(B.regolith(),v*1.07,ke+.75,M*1.07,y*1.08,1.5,.9,w)}let h=i.top-i.wall;for(let f=0;f<12;f++){let p=f/12*$e;for(let x=0;x<8;x++){let g=x/8*Math.PI/2,m=(x+1)/8*Math.PI/2,y=(g+m)/2,v=(i.r+.2)*Math.cos(y),M=ke+i.wall+h*Math.sin(y),w=Math.hypot(i.r*(Math.cos(g)-Math.cos(m)),h*(Math.sin(m)-Math.sin(g)))+.05,S=Math.atan2(i.r*Math.sin(y),h*Math.cos(y)),_=new Zt(.14,w,.14);_.rotateZ(S),_.rotateY(-p),_.translate(Math.cos(p)*v,M,Math.sin(p)*v),r.raw(_,l)}}for(let f of[.35,.7]){let p=(i.r+.2)*Math.cos(f*Math.PI/2),x=ke+i.wall+h*Math.sin(f*Math.PI/2);r.add(new oi(1,.07/p,6,48),l,0,x,0,p,p,p,Math.PI/2)}s.build(n),r.build(n,{shadows:!0});let d=xs(i.glass?B.glass():B.shell());i.glass&&(d.opacity=d.userData.base=.16),t.push(d);let u=sm(i.r+.17,ke+i.wall,ke+i.top,d);return u.castShadow=!i.glass,n.add(u),n.add(Gc(new To(i.r-.1,64).rotateX(-Math.PI/2),ke+.005)),n}function ob(i,e,t){let n=new Ne;n.position.set(i.x,0,i.z),n.rotation.y=-i.facing;let s=new Ye,r=new Ye,o=xs(B.shell()),a=xs(B.frame());t.push(o,a);let{hd:l,hw:c,h}=i,d=e.some(x=>x.local===0),u=e.find(x=>x.local===Math.PI),f=x=>x?.wide?3.6:Ws+.15;s.box(B.shellShade(),0,ke/2-.55,0,l*2+1.2,ke+1.1,c*2+1.2);let p=(x,g,m,y)=>{let v=Math.hypot(m-x,y-g),M=(x+m)/2,w=(g+y)/2,S=-Math.atan2(y-g,m-x),_=-(y-g)/v,b=(m-x)/v,R=Math.sign(-(M*_+w*b))||1;s.box(B.shell(),M,ke+h/2,w,v+.3,h,.34,S),s.box(B.wallIn(),M+_*R*.2,ke+h/2,w+b*R*.2,v,h-.1,.06,S),s.box(B.trim(),M-_*R*.2,ke+h-.6,w-b*R*.2,v+.3,.2,.06,S),s.box(B.shellShade(),M-_*R*.2,ke+.4,w-b*R*.2,v+.3,.8,.08,S);for(let A=-v/2+2.5;A<v/2-1.5;A+=4.2){let L=M+(m-x)/v*A,C=w+(y-g)/v*A;s.box(B.window(),L,ke+2.4,C,1.6,.85,.42,S)}};p(-l,-c,l,-c),p(-l,c,l,c),d?(p(l,-c,l,-f()),p(l,f(),l,c)):p(l,-c,l,c),u?(p(-l,-c,-l,-f(u)),p(-l,f(u),-l,c)):p(-l,-c,-l,c),d&&s.box(B.shell(),l,ke+h-.7,0,.34,1.4,f()*2),u&&s.box(B.shell(),-l,ke+h-(u.wide?.6:.7),0,.34,u.wide?1.2:1.4,f(u)*2),r.box(o,0,ke+h+.2,0,l*2+.7,.4,c*2+.7);for(let x=-l+1.5;x<l;x+=3)r.box(a,x,ke+h+.48,0,.18,.18,c*2+.4);return r.round(a,-l*.4,ke+h+.75,c*.4,1.4,.6,1.4),r.cyl(a,l*.4,ke+h+.8,-c*.4,.5,.8,14),s.build(n),r.build(n),n.add(Gc(new en(l*2,c*2).rotateX(-Math.PI/2),ke+.005)),n}function ab(i,e){let t=new Ne;t.position.set(i.start[0],0,i.start[1]),t.rotation.y=-i.angle;let n=new Ye,s=new Ye,r=xs(B.shell()),o=xs(B.frame());e.push(r,o);let a=i.length;n.box(B.shellShade(),a/2,ke/2-.4,0,a,ke+.8,Kn*2+.8);for(let c of[-1,1])n.box(B.shell(),a/2,ke+.6,c*(Kn+.12),a,1.2,.24),n.box(B.lampCool(),a/2,ke+.12,c*(Kn-.12),a-.6,.05,.08),n.box(B.regolith(),a/2,ke+.5,c*(Kn+.75),a,1,.8);let l=new bt(Kn+.24,Kn+.24,a,20,1,!0,0,Math.PI);l.rotateZ(Math.PI/2),l.rotateX(Math.PI/2),l.translate(a/2,ke+1.2,0),s.add(l,r);for(let c=.5;c<a;c+=1.8)s.add(new oi(Kn+.3,.08,6,20,Math.PI),o,c,ke+1.2,0,1,1,1,0,Math.PI/2);return n.build(t),s.build(t),t.add(Gc(new en(a,Kn*2).rotateX(-Math.PI/2).translate(a/2,0,0),ke+.01)),t}function lb(i,e){let t=new Ne;t.position.set(i.inner[0],0,i.inner[1]),t.rotation.y=-i.angle;let n=Math.hypot(i.outer[0]-i.inner[0],i.outer[1]-i.inner[1]),s=new Ye,r=new Ye,o=xs(B.shell());e.push(o);let a=i.wide?5.6:3.3;s.box(B.shellShade(),n/2,ke/2-.4,0,n+.4,ke+.8,i.half*2+.9);for(let u of[-1,1])s.box(B.shell(),n/2,ke+a/2,u*(i.half+.15),n,a,.3),s.box(B.hazard(),n/2,ke+.25,u*(i.half-.02),n,.2,.05),s.box(B.frame(),n,ke+a/2,u*(i.half+.1),.5,a+.2,.5);s.box(B.frame(),n,ke+a+.1,0,.5,.4,i.half*2+.6),r.box(o,n/2,ke+a+.15,0,n+.3,.3,i.half*2+.7),s.build(t),r.build(t),t.add(Gc(new en(n,i.half*2).rotateX(-Math.PI/2).translate(n/2,0,0),ke+.01));let l=rm(i.half*2,a-.1);l.group.position.set(n-.05,ke,0),t.add(l.group);let c=new nt({color:"#ff8a7a",emissive:"#ff3b2f",emissiveIntensity:2.4}),h=new Re(new Ft(.16,12,8),c);h.position.set(n+.3,ke+a-.2,i.half-.3),t.add(h);let d=Qi("\u{1F6AA}","AIRLOCK","\u098F\u09AF\u09BC\u09BE\u09B0\u09B2\u0995",2.4);return d.position.set(n+.27,ke+a+.62,0),d.rotation.y=Math.PI/2,t.add(d),{group:t,door:l,lamp:h,lampOn:c,length:n}}function om(i,e){let t=new Ne;i.add(t);let n=new Map;for(let o of e){let a=Oc(o,e),l=[],c=o.shape==="dome"?rb(o,a,l):ob(o,a,l);t.add(c);let h=[];for(let x of a.filter(g=>g.kind==="tunnel")){let g=o.shape==="dome"?o.r:o.hd,m=rm(Ws*2,2.9),y=o.x+Math.cos(x.angle)*(g-.1),v=o.z+Math.sin(x.angle)*(g-.1);m.group.position.set(y,ke,v),m.group.rotation.y=-x.angle,t.add(m.group),h.push({door:m,x:y,z:v,open:0})}let[d,u,f]=nb[o.type]??["\u{1F3E0}",o.id.toUpperCase(),""],p=Qi(d,u,f,4.2);if(o.shape==="dome"){let x=(o.id==="hub"?5*Math.PI/4:o.facing+Math.PI)+.35;p.position.set(o.x+Math.cos(x)*(o.r+.45),ke+o.wall+.9,o.z+Math.sin(x)*(o.r+.45)),p.rotation.y=Math.atan2(Math.cos(x),Math.sin(x))}else{let[x,g]=ji(o,-o.hd-.25,o.hw*.55);p.position.set(x,ke+o.h-1.3,g),p.rotation.y=Math.atan2(-Math.cos(o.facing),-Math.sin(o.facing))}t.add(p),n.set(o.id,{m:o,group:c,roofMats:l,fade:1,tunnelDoors:h})}let s=zr(e).map(o=>{let a=[],l=ab(o,a);return t.add(l),{t:o,group:l,roofMats:a,fade:1}}),r=Bc(e).map(o=>{let a=[],l=lb(o,a);return t.add(l.group),{a:o,...l,roofMats:a,fade:1,open:0,cycle:0,want:!1}});return{root:t,modules:n,tunnels:s,airlocks:r,update(o,a,l,c){let h=a?.module;for(let[d,u]of n){let f=h===d?.02:1;u.fade=c?f:Lt(u.fade,f,7,o);for(let p of u.roofMats)Hc([p],u.fade*(p.userData.base??1));for(let p of u.tunnelDoors){let x=l.some(g=>Math.hypot(g.x-p.x,g.z-p.z)<3.2);p.open=c?Number(x):Lt(p.open,Number(x),6,o),p.door.set(p.open)}}for(let d of s){let u=a?.kind==="tunnel"&&a.id===d.t.id;d.fade=c?+!u:Lt(d.fade,u?.02:1,7,o);for(let f of d.roofMats)Hc([f],d.fade)}for(let d of r){let f=a?.kind==="airlock"&&a.id===d.a.id?.02:1;d.fade=c?f:Lt(d.fade,f,7,o);for(let p of d.roofMats)Hc([p],d.fade)}},driveAirlock(o,a,l,c){a?o.cycle=Math.min(1.4,o.cycle+l):o.cycle=Math.max(0,o.cycle-l*2);let h=o.cycle>=1.2;o.open=c?Number(h):Lt(o.open,Number(h),5,l),o.door.set(o.open);let d=o.open>.6;return o.lampOn.emissive.set(d?"#52e05c":o.cycle>0?"#ffb23a":"#ff3b2f"),o.lampOn.color.set(d?"#b6ffb0":"#ff8a7a"),o.open}}}var ne=ke,ys={time:{value:0},growth:{value:.5},mold:{value:0},dust:{value:0}};function Iu(i){let e=document.createElement("canvas");e.width=64,e.height=8;let t=e.getContext("2d");t.fillStyle="#d5dbe4",t.fillRect(0,0,64,8),t.fillStyle=i;for(let s=0;s<64;s+=16)t.fillRect(s,0,7,8);let n=new Dn(e);return n.colorSpace=Vt,n.wrapS=n.wrapT=pi,n.repeat.set(6,1),n}var es={water:()=>Qe("flowWater",()=>new nt({map:Iu("#3f9ee0"),roughness:.4,metalness:.3,emissive:"#11324a",emissiveIntensity:.4})),power:()=>Qe("flowPower",()=>new nt({map:Iu("#5ef0d6"),roughness:.4,metalness:.3,emissive:"#2fd8c0",emissiveIntensity:.9})),oxygen:()=>Qe("flowOxygen",()=>new nt({map:Iu("#7ee08a"),roughness:.4,metalness:.3,emissive:"#1f5a2a",emissiveIntensity:.5}))};function lm(i,e={}){es.water().map.offset.x-=i*.6*(e.water??1),es.power().map.offset.x-=i*1.2*(e.power??1),es.oxygen().map.offset.x-=i*.5*(e.oxygen??1)}function _s(i){let e=new nt({color:i,roughness:.8,side:xn});return e.onBeforeCompile=t=>{t.uniforms.uTime=ys.time,t.uniforms.uGrowth=ys.growth,t.uniforms.uMold=ys.mold,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform float uGrowth; varying vec3 vWorldPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float bed = ${(ne+.78).toFixed(2)};
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
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.8, 0.75, 0.55), uMold * 0.4);`)},e}var Fn={leaf:()=>Qe("pLeaf",()=>_s("#6fb35e")),leafDark:()=>Qe("pLeafDark",()=>_s("#3f8a4a")),lettuce:()=>Qe("pLettuce",()=>_s("#9bd36a")),rice:()=>Qe("pRice",()=>_s("#a9cf5c")),stem:()=>Qe("pStem",()=>_s("#4f7a3c")),petal:()=>Qe("pPetal",()=>_s("#f6c73b")),seed:()=>Qe("pSeed",()=>_s("#6b4a2b")),fruit:()=>Qe("pFruit",()=>_s("#e2452f"))};function vs(i){let e=new Ne;return e.position.set(i.x,0,i.z),e.rotation.y=-i.facing,e}function jn(i,e,t,n,s,r=40,o=22){let a=new Os(e,r,o,1.6);return a.position.set(t,n,s),i.add(a),a}var Ai=(i,e,t)=>ji(i,e,t);function yn(i,e,t,n,s,r,o,a="tap"){let[l,c]=Ai(e,n,s);i.push({id:t,module:e.id,x:l,z:c,r,label:o,verb:a})}function Pu(i,e,t,n,s,r){let o=[[t-s,n-r],[t+s,n-r],[t+s,n+r],[t-s,n+r]].map(([a,l])=>Ai(e,a,l));for(let a=0;a<4;a++)i.segs.push([...o[a],...o[(a+1)%4]])}function On(i,e,t,n,s){let[r,o]=Ai(e,t,n);i.push({x:r,z:o,r:s})}var It=(i,e)=>[Math.cos(i)*e,Math.sin(i)*e];function cb(i,e,t,n){i.round(B.shell(),e,ne+.55,t,2.5,1.1,1.25,n),i.box(B.fabric(),e,ne+.72,t,2.1,.22,.95,n),i.round(B.fabricWarm(),e+Math.cos(-n)*.8,ne+.9,t+Math.sin(-n)*.8,.45,.18,.7,n)}function hb(i,e){let t=vs(i),n=new Ye,s=i.r;n.cyl(B.frame(),0,ne+.45,0,1.35,.9,32),n.cyl(B.shell(),0,ne+.93,0,1.45,.08,32),n.cyl(B.lampCool(),0,ne+.98,0,1.2,.03,32);for(let C=3.5;C<4.4;C+=.21){let[U,P]=It(C,s-1);n.box(B.shellShade(),U,ne+.48,P,1.6,.95,.75,-C+Math.PI/2),n.box(B.wood(),U,ne+.98,P,1.65,.06,.8,-C+Math.PI/2)}let[r,o]=It(4.5,s-1.1);n.round(B.steel(),r,ne+1.1,o,1,2.2,.8,-4.5+Math.PI/2);let[a,l]=It(3.93,5.9);n.cyl(B.wood(),a,ne+.78,l,1.15,.08,24),n.cyl(B.frame(),a,ne+.4,l,.14,.78,10);for(let C=0;C<4;C++){let[U,P]=It(C*Math.PI/2+.4,1.6);n.cyl(B.trim(),a+U,ne+.42,l+P,.32,.12,14),n.cyl(B.frame(),a+U,ne+.2,l+P,.07,.4,8)}n.cyl(B.fabricWarm(),a,ne+.02,l,2.6,.03,32);for(let C of[-1.42,-1,-.6,-.18])cb(n,...It(C,s-1.5),-C+Math.PI/2);let[c,h]=It(Math.PI/4,6.4);for(let C=0;C<12;C++){let U=C/12*$e;Math.abs(Math.atan2(Math.sin(U-(Math.PI/4+Math.PI)),Math.cos(U-(Math.PI/4+Math.PI))))<.5||(n.cyl(B.water(),c+Math.cos(U)*2.2,ne+1.25,h+Math.sin(U)*2.2,.48,2.5,14),n.cyl(B.frame(),c+Math.cos(U)*2.2,ne+2.55,h+Math.sin(U)*2.2,.5,.1,14))}n.cyl(B.frame(),c,ne+2.75,h,2.75,.18,32),n.box(B.fabric(),c+.6,ne+.35,h+.6,1.6,.5,.6,-Math.PI/4),["#e9dcd1","#e3884c","#6b8fb5","#b07ad6"].forEach((C,U)=>{let P=1.72+U*.17,[V,W]=It(P,s-.9);n.box(B.frame(),V,ne+1.2,W,1,2.4,.5,-P+Math.PI/2);let G=Qe(`suit-${C}`,()=>new nt({color:C,roughness:.7}));n.round(G,V*.97,ne+1.2,W*.97,.6,.9,.35,-P+Math.PI/2),n.ball(B.glass(),V*.97,ne+1.95,W*.97,.3)});let[u,f]=It(2.8,s-2.2);n.round(B.shell(),u,ne+.5,f,2.2,.75,1,-2.8+Math.PI/2),n.box(B.fabric(),u,ne+.9,f,2,.12,.9,-2.8+Math.PI/2);let[p,x]=It(.3,5.3);n.round(B.darkSteel(),p,ne+.45,x,1.4,.35,.45,-.3),n.cyl(B.frame(),p+.4,ne+.75,x,.06,.8,8);let[g,m]=It(-.5,3.6);n.cyl(B.frame(),g,ne+.05,m,.75,.1,24),n.cyl(B.lampCool(),g,ne+.11,m,.55,.02,24);for(let C of[1.2,2.3,3.2,4.8]){let[U,P]=It(C,s-.9);n.cyl(B.trim(),U,ne+.35,P,.38,.7,14,0,0,0,1.2),n.ball(B.leafDark(),U,ne+1,P,.55,.65,.55)}n.build(t);let y=new Ne;y.position.set(0,ne+1.35,0);let v=new $t({color:"#7ef4e0",wireframe:!0,transparent:!0,opacity:.55});y.add(new Re(new Ft(.42,12,6,0,$e,0,Math.PI/2),v));for(let C=0;C<5;C++){let U=new Re(new Ft(.18,8,4,0,$e,0,Math.PI/2),v);U.position.set(Math.cos(C/5*$e)*.95,0,Math.sin(C/5*$e)*.95),y.add(U)}let M=new Re(new bt(1.2,1.2,.9,24,1,!0),new $t({color:"#7ef4e0",transparent:!0,opacity:.08,side:xn,depthWrite:!1}));M.position.y=-.1,y.add(M),t.add(y);let w=ya(.9,.55,192);w.mesh.position.set(...[It(2.8,s-.45)].flatMap(([C,U])=>[C,ne+1.9,U])),w.mesh.rotation.y=-2.8-Math.PI/2,t.add(w.mesh);let S=Qi("\u{1F1E7}\u{1F1E9}","KHULNA SPACE CENTER","\u0996\u09C1\u09B2\u09A8\u09BE \u09AE\u09B9\u09BE\u0995\u09BE\u09B6 \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0",2.6),[_,b]=It(Math.PI*1.52,s-.45);S.position.set(_,ne+2.4,b),S.rotation.y=-Math.PI*1.52-Math.PI/2,t.add(S);let R=Qi("\u{1F6E1}\uFE0F","STORM SHELTER","\u099D\u09A1\u09BC\u09C7\u09B0 \u0986\u09B6\u09CD\u09B0\u09AF\u09BC",2.3,{accent:"#5fb6e8"});R.position.set(c-1.9,ne+3.3,h-1.9),R.rotation.y=-Math.PI/4-Math.PI/2+Math.PI,t.add(R);let A=[jn(t,"#ffe2c0",-3,ne+6,3,14,24),jn(t,"#ffe2c0",3.5,ne+6,-3,14,24)];yn(e.spots,i,"planner",0,0,2.6,{en:"Plan the base",bn:"\u0998\u09BE\u0981\u099F\u09BF\u09B0 \u09AA\u09B0\u09BF\u0995\u09B2\u09CD\u09AA\u09A8\u09BE"}),yn(e.spots,i,"wardrobe",...It(1.97,s-2.6),1.8,{en:"Suit locker",bn:"\u09B8\u09CD\u09AF\u09C1\u099F \u09B2\u0995\u09BE\u09B0"}),yn(e.spots,i,"shelter",c,h,2,{en:"Storm shelter",bn:"\u099D\u09A1\u09BC\u09C7\u09B0 \u0986\u09B6\u09CD\u09B0\u09AF\u09BC"}),yn(e.spots,i,"med",...It(2.8,s-3.4),1.6,{en:"Med bay",bn:"\u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE \u0995\u0995\u09CD\u09B7"},"hold"),yn(e.spots,i,"kitchen",...It(3.93,4.2),1.6,{en:"Have a snack",bn:"\u09A8\u09BE\u09B8\u09CD\u09A4\u09BE \u0996\u09BE\u0993"}),On(e.colliders,i,0,0,1.5),On(e.colliders,i,a,l,1.25);for(let C=0;C<12;C++){let U=C/12*$e;Math.abs(Math.atan2(Math.sin(U-Math.PI*1.25),Math.cos(U-Math.PI*1.25)))<.5||On(e.colliders,i,c+Math.cos(U)*2.2,h+Math.sin(U)*2.2,.5)}e.waypoints.hub=[[0,2.6],[a*.7,l*.7],[c,h],[...It(-.8,6.5)],[...It(2.8,6.5)],[p-.6,x]],e.anchors.bike=[p,x],e.anchors.dock=[g,m],e.anchors.shelter=[c,h],e.anchors.leak={hub:[...It(-2.4,s-.4)]};let L=0;return{group:t,lights:A,animate(C,U,P){if(y.rotation.y=C*.5,v.opacity=.45+Math.sin(C*7)*.08+(Math.random()<.02?-.3:0),L+=U,L>.12&&P.near){L=0;let V=w.ctx,W=w.canvas.width,G=w.canvas.height;V.drawImage(w.canvas,-4,0),V.fillStyle="#10202a",V.fillRect(W-4,0,4,G);let K=C*1.3%1,k=K<.1?G*.2:K<.15?G*.8:G*.55;V.fillStyle="#5ef08a",V.fillRect(W-4,k,4,3),w.update()}}}}function am(i,e,t=!1){let n=vs(i),s=new Ye,r=new Ye,o=new Ye,a=i.r;s.box(B.darkSteel(),0,ne+.03,0,a*2-1,.04,2.2);let l=t?[-3.4,3.4,6.2]:[-8.4,-6,-3.2,3.2,6,8.4],c=t?["lettuce","tomato","sunflower"]:["rice","potato","lettuce","tomato","strawberry","sunflower"];l.forEach((w,S)=>{let _=Math.sqrt(Math.max(0,a*a-(Math.abs(w)+1.1)**2))-1.3;if(_<1)return;s.box(B.shellShade(),0,ne+.38,w,_*2,.75,1.6),s.box(B.soil(),0,ne+.77,w,_*2-.2,.04,1.4),s.box(B.trim(),0,ne+.7,w+.81,_*2,.1,.02),s.box(B.lampPink(),0,ne+3.4,w,_*2-.4,.06,.12),s.box(B.frame(),0,ne+3.47,w,_*2-.2,.05,.16);for(let R of[-_+.5,_-.5])s.cyl(B.frame(),R,ne+4.6,w,.02,2.2,4);let b=c[S];b==="rice"&&s.box(B.water(),0,ne+.8,w,_*2-.3,.05,1.3);for(let R=-_+.5;R<_-.3;R+=b==="rice"?.35:.85)for(let A of b==="rice"?[-.4,0,.4]:[-.3,.3]){let L=R,C=w+A,U=ne+.79;if(b==="lettuce")for(let P=0;P<5;P++)r.ball(Fn.lettuce(),L+Math.cos(P*1.3)*.12,U+.12,C+Math.sin(P*1.3)*.12,.2,.1,.13);else if(b==="rice")for(let P=0;P<3;P++)r.box(Fn.rice(),L+P*.06,U+.32,C,.025,.65,.025,P,.15*(P-1));else if(b==="potato")r.ball(Fn.leafDark(),L,U+.32,C,.32,.3,.3),r.ball(Fn.leaf(),L+.1,U+.5,C,.2,.18,.2);else if(b==="strawberry")r.ball(Fn.leaf(),L,U+.12,C,.24,.1,.24),o.ball(Fn.fruit(),L+.15,U+.12,C+.1,.06,.07,.06);else if(b==="tomato"){r.cyl(Fn.stem(),L,U+.8,C,.025,1.6,6);for(let P=0;P<4;P++)r.ball(Fn.leaf(),L+Math.cos(P*2)*.18,U+.5+P*.32,C+Math.sin(P*2)*.18,.18,.08,.12);o.ball(Fn.fruit(),L+.12,U+.9,C,.09),o.ball(Fn.fruit(),L-.1,U+1.25,C+.05,.08)}else b==="sunflower"&&(r.cyl(Fn.stem(),L,U+.9,C,.035,1.8,6),r.ball(Fn.leaf(),L+.15,U+.7,C,.22,.06,.12),r.add(new bt(.28,.28,.04,14),Fn.petal(),L,U+1.85,C,1,1,1,Math.PI/2-.3),r.add(new bt(.14,.14,.06,12),Fn.seed(),L+.02,U+1.85,C,1,1,1,Math.PI/2-.3))}s.add(new bt(.07,.07,_*2,8),es.water(),0,ne+.88,w-.75,1,1,1,0,0,Math.PI/2)}),s.round(B.wood(),a-3.2,ne+.35,-1.9,1,.6,.8),s.ball(B.fruitRed(),a-3.35,ne+.72,-1.9,.14),s.ball(B.potato(),a-3.05,ne+.72,-1.75,.13),s.ball(B.fruitYellow(),a-3.1,ne+.72,-2.1,.12),s.box(B.frame(),-a+2.4,ne+1.1,1.9,.5,2.2,1.2),s.build(n),r.build(n,{shadows:!1});let h=o.build(n,{shadows:!1}),d=ya(1,.7,160);d.mesh.position.set(-a+2.67,ne+1.6,1.9),d.mesh.rotation.y=Math.PI/2,n.add(d.mesh);let u=[];for(let w of[-1,1]){let S=new Ne;S.position.set(0,ne+2.6,w*(a-1));let _=new Ye;_.cyl(B.frame(),0,0,0,.15,.2,10,Math.PI/2);for(let b=0;b<4;b++)_.box(B.shell(),Math.cos(b*Math.PI/2)*.35,Math.sin(b*Math.PI/2)*.35,0,.5,.12,.03,0,0,b*Math.PI/2);_.build(S,{shadows:!1}),n.add(S),u.push(S)}let f=new Ye;f.box(B.frame(),0,ne+4.4,0,a*1.6,.1,.1),f.build(n);let p=new Ne,x=new Ye;x.round(B.shell(),0,0,0,.7,.4,.6),x.box(B.trim(),0,-.1,.31,.5,.08,.02),x.cyl(B.steel(),0,-.6,0,.05,.9,8),x.box(B.lampCool(),0,.05,.31,.2,.08,.02),x.build(p);let g=new Re(new oi(.14,.03,6,12,Math.PI),B.steel());g.position.y=-1.05,g.rotation.z=Math.PI,p.add(g),p.position.set(0,ne+4.15,0),n.add(p);let m=new yi(new Ut().setAttribute("position",new Je(new Float32Array(720),3)),new Ns({color:"#e6f6ff",size:.22,map:Cu(),transparent:!0,opacity:.5,depthWrite:!1}));m.frustumCulled=!1,n.add(m);let y=Array.from({length:240},(w,S)=>[Math.sin(S*12.9)*(a-2.5),l[S%l.length]??0,S*.618%1]),v=[jn(n,"#ff7fdc",-a*.35,ne+3,0,9,16),jn(n,"#ff9fe6",a*.35,ne+3,0,9,16)];t||(yn(e.spots,i,"harvest",a-3.2,-.9,1.8,{en:"Harvest the crops",bn:"\u09AB\u09B8\u09B2 \u09A4\u09CB\u09B2\u09CB"},"hold"),yn(e.spots,i,"climate",-a+3.3,1.9,1.6,{en:"Climate control",bn:"\u0986\u09AC\u09B9\u09BE\u0993\u09AF\u09BC\u09BE \u09A8\u09BF\u09AF\u09BC\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3"}),e.anchors.leak.greenhouse=Ai(i,0,-a+.3)),l.forEach(w=>{let S=Math.sqrt(Math.max(0,a*a-(Math.abs(w)+1.1)**2))-1.3;S>=1&&Pu(e,i,0,w,S,.8)}),On(e.colliders,i,a-3.2,-1.9,.6),e.waypoints[i.id]=[[a-2,0],[0,0],[-a+3,.6]];let M=0;return{group:n,lights:v,animate(w,S,_){for(let A of u)A.rotation.z=w*6;p.position.x=Math.sin(w*.23)*(a*.7),g.position.y=-1.05+Math.max(0,Math.sin(w*1.3))*.25;for(let A of h)A.visible=_.crops>.65;let b=m.geometry.attributes.position,R=w%9<3;if(m.visible=R&&_.near,m.visible){for(let A=0;A<y.length;A++){let[L,C,U]=y[A],P=(w+U*3)%3/3;b.setXYZ(A,L+Math.sin(w+A)*.2,ne+1+P*1.4,C+Math.cos(w*.7+A)*.3)}b.needsUpdate=!0}if(M-=S,M<=0&&_.near){M=.5;let A=d.ctx,L=d.canvas.width,C=d.canvas.height;A.fillStyle="#132029",A.fillRect(0,0,L,C),A.fillStyle=_.mold?"#ff8a7a":"#7ef4e0",A.font="bold 22px system-ui",A.fillText(_.mold?"HUMIDITY HIGH!":"CLIMATE OK",10,30),A.fillStyle="#fff1d9",A.font="18px system-ui",A.fillText(`\u{1F321} 22\xB0C  \u{1F4A7} ${_.mold?92:60}%`,10,62),A.fillText(`\u{1F331} ${Math.round(_.crops*100)}% grown`,10,90),d.update()}}}}function ub(i,e){let t=vs(i),n=new Ye,s=[];for(let x of[-6.6,-3.9])for(let g=-5.2;g<=5.2;g+=2)n.round(B.indigo(),g,ne+1.15,x,1.7,2.3,.85),n.box(B.frame(),g,ne+2.35,x,1.75,.08,.9),s.push([g,x+.44]);let r=new kn(new Zt(1,1,1),new $t({toneMapped:!1}),s.length*8),o=new Et,a=0;for(let[x,g]of s)for(let m=0;m<8;m++)o.position.set(x,ne+.45+m*.22,g),o.scale.set(1.2,.14,.03),o.updateMatrix(),r.setMatrixAt(a++,o.matrix);t.add(r),n.box(B.frame(),-3.5,ne+.3,5.4,2.6,.6,1.4);let l=new Re(new bt(1,1,.5,32),B.steel());l.position.set(-3.5,ne+1.6,5.4),l.rotation.x=Math.PI/2,l.castShadow=!0;let c=new Re(new Zt(1.9,.1,.52),B.trim());l.add(c),t.add(l),n.round(B.shell(),3.6,ne+.5,5.6,2.8,1,1),n.box(B.darkSteel(),3.6,ne+1.05,5.4,2.6,.08,.7,0,-.3),n.box(B.frame(),1.8,ne+2.9,8.2,5.4,3,.2),n.box(B.frame(),-6.75,ne+1.5,4.6,.2,2,2.4),n.build(t);let h=ya(5,2.6,320);h.mesh.position.set(1.8,ne+2.9,8.08),h.mesh.rotation.y=Math.PI,t.add(h.mesh);let d=[];for(let x=0;x<6;x++){let g=new Re(new Zt(.22,.32,.08),new nt({color:"#b6ffb0",emissive:"#52e05c",emissiveIntensity:2}));g.position.set(-6.6,ne+1.9-Math.floor(x/3)*.7,3.8+x%3*.8),t.add(g),d.push(g)}let u=[jn(t,"#dff8ff",0,ne+4.4,-3,12,20),jn(t,"#dff8ff",0,ne+4.4,4,12,20)];yn(e.spots,i,"breakers",-5.5,4.6,1.8,{en:"Breaker panel",bn:"\u09AC\u09CD\u09B0\u09C7\u0995\u09BE\u09B0 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2"}),yn(e.spots,i,"powerdesk",3.6,4.4,1.6,{en:"Power report",bn:"\u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09A4\u09C7\u09B0 \u0996\u09AC\u09B0"}),Pu(e,i,-.2,-6.6,6,.5),Pu(e,i,-.2,-3.9,6,.5),On(e.colliders,i,-3.5,5.4,1.4),On(e.colliders,i,3.6,5.6,1.3),e.anchors.leak.power=Ai(i,0,-8.2),e.waypoints.power=[[5,0],[0,0],[3.6,4.2],[-4,-1.5]];let f=new Be,p=0;return{group:t,lights:u,animate(x,g,m){l.rotation.y=x*(m.breakers?9:1);let y=m.tanks.power/100;for(let v=0;v<r.count;v++){let M=v%8,w=M/8<y,S=Math.max(0,1-Math.abs(x*1.5%1.6-M/8)*6)*(m.charging?1:0);f.set(m.breakers?w?y<.25?"#ff6b5b":y<.5?"#ffc34d":"#5ef08a":"#1d2b33":"#3a2a2a"),f.offsetHSL(0,0,S*.25),r.setColorAt(v,f)}r.instanceColor.needsUpdate=!0,d.forEach((v,M)=>{let w=m.surge&&(M%2===0||Math.sin(x*13+M)>.6);v.material.emissive.set(w?"#ff3b2f":"#52e05c")});for(let v of u)v.intensity=m.surge?4+Math.random()*18:12;if(p-=g,p<=0&&m.near){p=.25;let v=h.ctx,M=h.canvas.width,w=h.canvas.height;v.fillStyle="#0f1824",v.fillRect(0,0,M,w),v.font="bold 20px system-ui",v.fillStyle="#fff1d9",v.fillText("POWER FLOW",12,26);let S=[["\u2600\uFE0F Sun",50,70,m.rates.solar],["\u269B\uFE0F Reactor",50,130,m.rates.reactor],["\u{1F50B} Battery",160,100,m.tanks.power],["\u{1F3E0} Base",270,100,0]];v.font="15px system-ui";for(let[b,R,A,L]of S)v.fillStyle="#22344a",v.beginPath(),v.roundRect(R-40,A-18,80,36,8),v.fill(),v.fillStyle="#fff1d9",v.fillText(b,R-34,A-2),v.fillStyle="#7ef4e0",v.fillText(b.includes("Battery")?`${Math.round(L)}%`:b.includes("Base")?"using":`${L.toFixed(1)} kW`,R-34,A+14);let _=(b,R,A,L,C)=>{v.strokeStyle=C>.05?"#5ef0d6":"#33434f",v.lineWidth=4,v.setLineDash([10,8]),v.lineDashOffset=-x*40*Math.min(2,C),v.beginPath(),v.moveTo(b,R),v.lineTo(A,L),v.stroke(),v.setLineDash([])};_(90,70,120,95,m.rates.solar/10),_(90,130,120,105,m.rates.reactor/5),_(200,100,230,100,1),h.update()}}}}function db(i,e){let t=vs(i),n=new Ye;n.round(B.steel(),-4.2,ne+1.4,-6.6,2.2,2.8,2),n.box(B.frame(),-4.2,ne+3,-6.6,1.2,.5,1.2),n.cyl(B.shellShade(),-1.2,ne+1.3,-6.8,1,2.6,24),n.cyl(B.lampWarm(),-1.2,ne+1.3,-5.79,.35,.06,16,Math.PI/2);for(let c=0;c<3;c++)n.cyl(B.shell(),1.4+c*.9,ne+1.2,-7.3,.36,2.4,16);n.add(new bt(.1,.1,9,8),es.water(),.3,ne+2.9,-8,1,1,1,0,0,Math.PI/2),n.round(B.indigo(),-3.6,ne+1.3,6.8,2.6,2.6,1.8),n.box(B.lampWarm(),-3.6,ne+1.5,5.88,1.6,.8,.05),n.cyl(B.glass(),.2,ne+1.3,7.1,.9,2.6,24);for(let c=0;c<3;c++)n.cyl(Qe("o2tank",()=>new nt({color:"#6fd17a",roughness:.4,metalness:.3})),3+c*1.1,ne+1.3,7.6,.45,2.6,18);n.add(new bt(.1,.1,9,8),es.oxygen(),.3,ne+2.9,8.2,1,1,1,0,0,Math.PI/2),n.build(t);let s=[];for(let c of[-3.4,-6.8]){let h=new Re(new bt(.85,.85,2.8,24,1,!0),B.glass());h.position.set(4.9,ne+1.4,c),t.add(h);let d=new Re(new bt(.8,.8,1,24),B.water());d.position.set(4.9,ne,c),t.add(d),s.push(d)}let r=new Ut().setAttribute("position",new Je(new Float32Array(270),3)),o=new yi(r,new Ns({color:"#e8fbff",size:.12,map:Cu(),transparent:!0,opacity:.85,depthWrite:!1}));o.frustumCulled=!1,t.add(o);let a=[];for(let c=0;c<3;c++){let h=new Re(new bt(.38,.38,.25,16),new nt({color:"#6fc1ff",emissive:"#2a7bbf",emissiveIntensity:1}));h.position.set(1.4+c*.9,ne+2.5,-7.3),t.add(h),a.push(h)}let l=[jn(t,"#bfe8ff",0,ne+4.4,-4,12,18),jn(t,"#ffe2c0",0,ne+4.4,4,12,18)];yn(e.spots,i,"filter",2.3,-5.6,1.8,{en:"Water filters",bn:"\u09AA\u09BE\u09A8\u09BF\u09B0 \u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0"}),yn(e.spots,i,"moxie",-3.6,5,1.6,{en:"Oxygen maker",bn:"\u0985\u0995\u09CD\u09B8\u09BF\u099C\u09C7\u09A8 \u09AF\u09A8\u09CD\u09A4\u09CD\u09B0"});for(let[c,h,d]of[[-4.2,-6.6,1.3],[-1.2,-6.8,1.1],[2.3,-7.3,1.3],[4.9,-3.4,.9],[4.9,-6.8,.9],[-3.6,6.8,1.4],[.2,7.1,1],[4.1,7.6,1.5]])On(e.colliders,i,c,h,d);return e.anchors.leak.life=Ai(i,0,9.2),e.waypoints.life=[[5,0],[0,0],[2.3,-4.8],[-3.6,4.6]],{group:t,lights:l,animate(c,h,d){if(s.forEach((u,f)=>{let p=ct(d.tanks.water/100,.05,1)*2.6;u.scale.y=p+Math.sin(c*2+f)*.03,u.position.y=ne+.1+u.scale.y/2}),a.forEach((u,f)=>u.material.emissive.set(d.filterClog?Math.sin(c*6+f)>0?"#ff3b2f":"#5a2a1a":"#2a7bbf")),d.near){let u=r.attributes.position;for(let f=0;f<90;f++){let p=(c*.6+f*.137)%1;u.setXYZ(f,.2+Math.sin(f*7.1)*.6,ne+.2+p*2.3,7.1+Math.cos(f*3.3)*.6)}u.needsUpdate=!0}}}}function fb(i,e){let t=vs(i),n=new Ye;n.box(B.hazard(),-1.5,ne+.02,-2.6,8,.02,.2),n.box(B.hazard(),-1.5,ne+.02,2.6,8,.02,.2),n.box(B.wood(),3.6,ne+.9,-7.4,4.2,.12,1.2),n.box(B.frame(),3.6,ne+.45,-7.4,4,.9,1),n.box(B.shellShade(),3.6,ne+2.4,-8.1,4.4,2,.08);for(let f=0;f<7;f++)n.box(B.steel(),1.9+f*.55,ne+2.3+f%2*.3,-8,.08,.6,.06);for(let f=-6;f<=-1;f+=1.25)for(let p=0;p<3;p++)n.round(B.wood(),f,ne+.42+p*.82,7.8,1.1,.75,.75);for(let f=0;f<3;f++)n.cyl(B.rubber(),-6.2,ne+.3+f*.6,-6.8,.55,.45,18);n.round(B.shell(),4.6,ne+1.2,6.3,2.4,2.4,2),n.box(B.glass(),4.6,ne+1.5,5.25,2,1.6,.05),n.round(B.shellShade(),-2.2,ne+.6,7,.8,1.2,.8),n.build(t);let s=new Re(new Zt(.3,.3,.3),B.trim());s.position.set(4.6,ne+1.8,6.3),t.add(s);let r=new Re(new bt(.5,.5,1,20),B.rubber());r.rotation.x=Math.PI/2,r.position.set(4.6,ne+.8,6.3),t.add(r);let o=new Ne;o.position.set(.5,ne,6.6);let a=new Ne,l=new Ne,c=new Ye;c.cyl(B.frame(),0,.2,0,.45,.4,16),c.build(o);let h=new Ye;h.round(B.trim(),0,.8,0,.3,1.6,.3),h.build(a),a.position.y=.4,l.position.y=1.6;let d=new Ye;d.round(B.shell(),0,.6,0,.25,1.2,.25),d.ball(B.lampCool(),0,1.25,0,.12),d.build(l),a.add(l),o.add(a),t.add(o);let u=[jn(t,"#ffe2c0",0,ne+5.4,0,16,24)];yn(e.spots,i,"printer",3.4,5,1.7,{en:"3D printer",bn:"\u09A5\u09CD\u09B0\u09BF\u09A1\u09BF \u09AA\u09CD\u09B0\u09BF\u09A8\u09CD\u099F\u09BE\u09B0"});for(let[f,p,x]of[[3.6,-7.4,1.4],[4.6,6.3,1.4],[.5,6.6,.6],[-6.2,-6.8,.6],[-3.5,7.8,1.6],[-2.2,7,.6]])On(e.colliders,i,f,p,x);return e.anchors.roverPark=Ai(i,-1.5,0),e.anchors.roverDoor=Ai(i,-i.hd-6,0),e.anchors.roverFacing=i.facing+Math.PI,e.anchors.leak.garage=Ai(i,2,-8.3),e.waypoints.garage=[[6,0],[1,-2],[3.4,-5.8],[2,4.6]],{group:t,lights:u,animate(f){let p=f/30%1;r.scale.y=.05+p*.4,r.position.y=ne+.8,s.position.x=4.6+Math.sin(f*3)*.4,s.position.z=6.3+Math.cos(f*2.3)*.4,a.rotation.z=Math.sin(f*.7)*.5,l.rotation.z=Math.sin(f*1.1+1)*.8,o.rotation.y=Math.sin(f*.4)*1.2}}}function pb(i,e,t){let n=vs(i),s=new Ye,r=i.r;s.cyl(B.frame(),0,ne+.45,0,.9,.9,24),s.cyl(B.lampCool(),0,ne+.92,0,.7,.03,24);for(let _ of[-1,1]){let b=_*Math.PI/2,[R,A]=It(b,r-.9);for(let L=0;L<3;L++)s.box(B.wood(),R,ne+.6+L*.7,A,3.6,.06,.6,-b+Math.PI/2);s.box(B.frame(),R,ne+1.3,A,3.7,2.6,.05,-b+Math.PI/2)}let[o,a]=It(1.15,r-1.6);s.box(B.shell(),o,ne+.85,a,2,.08,1,-1.15+Math.PI/2),s.box(B.frame(),o,ne+.42,a,1.8,.84,.9,-1.15+Math.PI/2),s.cyl(B.darkSteel(),o,ne+1.25,a,.12,.7,10);let[l,c]=It(-1.95,r-1.6);s.box(B.shell(),l,ne+.85,c,2,.08,1,1.95+Math.PI/2),s.box(B.frame(),l,ne+.42,c,1.8,.84,.9,1.95+Math.PI/2),s.cyl(B.steel(),l+.4,ne+1.4,c,.04,1.1,6);let[h,d]=It(-1,r-2.4);s.ball(B.shellShade(),h,ne+.1,d,.55,.45,.55),s.build(n);let u=new Re(new Ft(.85,48,24),new nt({map:t??null,color:t?"#ffffff":"#c1704f",roughness:.9,emissive:"#3a1a10",emissiveIntensity:.25}));u.position.set(0,ne+2,0),n.add(u);let f=new Re(new oi(1.1,.025,6,48),B.lampCool());f.position.copy(u.position),f.rotation.x=Math.PI/2.4,n.add(f);let p=ya(1.6,.9,256),[x,g]=It(Math.PI*.75,r-.5);p.mesh.position.set(x,ne+2,g),p.mesh.rotation.y=-Math.PI*.75-Math.PI/2,n.add(p.mesh);let m=new kn(new $n(.16,0),new nt({vertexColors:!1,color:"#ad765d",flatShading:!0}),30),y=new Et,v=0;for(let _ of[-1,1]){let b=_*Math.PI/2;for(let R=0;R<3;R++)for(let A=0;A<5;A++){let L=(A-2)*.65,[C,U]=It(b,r-.95);y.position.set(C+Math.cos(b+Math.PI/2)*L,ne+.75+R*.7,U+Math.sin(b+Math.PI/2)*L),y.rotation.set(A,R,A+R),y.updateMatrix(),m.setMatrixAt(v,y.matrix),m.setColorAt(v,new Be().setHSL(.04+v%5*.015,.4,.35+v%3*.08)),v++}}n.add(m);let M=new Re(new Zt(.02,.4,.02),B.trim());M.position.set(h,ne+.75,d),n.add(M);let w=[jn(n,"#d6f3ff",0,ne+4.6,0,12,18)];yn(e.spots,i,"globe",1.6,0,2.2,{en:"Mars globe: travel",bn:"\u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u0997\u09CD\u09B2\u09CB\u09AC: \u09AD\u09CD\u09B0\u09AE\u09A3"}),yn(e.spots,i,"radio",...It(-1.95,r-3),1.6,{en:"Call Earth",bn:"\u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u0995\u09C7 \u0995\u09B2 \u0995\u09B0\u09CB"}),yn(e.spots,i,"microscope",...It(1.15,r-3),1.6,{en:"Microscope",bn:"\u0985\u09A3\u09C1\u09AC\u09C0\u0995\u09CD\u09B7\u09A3 \u09AF\u09A8\u09CD\u09A4\u09CD\u09B0"}),On(e.colliders,i,0,0,1),On(e.colliders,i,o,a,1),On(e.colliders,i,l,c,1),e.anchors.leak.lab=Ai(i,...It(2.4,r-.3)),e.waypoints.lab=[[r-2,0],[-1.8,1.4],[...It(1.15,r-3)],[...It(-1.95,r-3)]];let S=0;return{group:n,lights:w,weather:p,animate(_,b,R){if(u.rotation.y=_*.25,f.rotation.z=_*.4,M.rotation.z=Math.sin(_*13)*.1*(.3+Math.sin(_*.7)**8),m.count=Math.min(30,R.samples),S-=b,S<=0&&R.near&&R.clock){S=1;let A=p.ctx,L=p.canvas.width,C=p.canvas.height;A.fillStyle="#0f1824",A.fillRect(0,0,L,C),A.fillStyle="#7ef4e0",A.font="bold 18px system-ui",A.fillText("REAL MARS TODAY",10,24),A.fillStyle="#fff1d9",A.font="15px system-ui",A.fillText(`Mars Year ${R.clock.marsYear} \xB7 Sol ${R.clock.sol}`,10,50),A.fillText(`Season: northern ${R.clock.northernSeason}`,10,72),A.fillText(`Earth is ${(R.earth.km/1e6).toFixed(0)} million km away`,10,94),A.fillText(`Radio takes ${R.earth.lightMinutes.toFixed(1)} minutes`,10,116),A.fillStyle=R.clock.dustSeason?"#ffb23a":"#9ad7a0",A.fillText(R.clock.dustSeason?"Dust storm season!":"Calm season",10,138),p.update()}}}}function mb(i,e){let t=vs(i),n=new Ye;n.cyl(B.frame(),0,ne+.6,0,.8,1.2,16),n.build(t);let s=new Ne;s.position.set(0,ne+1.6,0);let r=new Re(new bt(.45,.55,3.2,20),B.shell());r.rotation.z=Math.PI/3,r.position.y=.6,s.add(r),t.add(s);let o=[jn(t,"#c9b8ff",0,ne+4,0,9,14)];return yn(e.spots,i,"telescope",1.5,0,1.8,{en:"Telescope",bn:"\u09A6\u09C2\u09B0\u09AC\u09C0\u09A8"}),On(e.colliders,i,0,0,1),{group:t,lights:o,animate(a){s.rotation.y=a*.1}}}function gb(i,e){let t=vs(i),n=new Ye;n.cyl(B.frame(),-2.5,ne+.35,2,2,.7,24);let s=["#ff6b6b","#ffd166","#06d6a0","#4cc9f0","#b07ad6"];for(let l=0;l<60;l++){let c=l*2.4,h=Math.sqrt(l/60)*1.7;n.ball(Qe(`ball-${l%5}`,()=>new nt({color:s[l%5],roughness:.5})),-2.5+Math.cos(c)*h,ne+.7+l%3*.12,2+Math.sin(c)*h,.17)}n.cyl(B.wood(),2.6,ne+1.4,-2,.25,2.8,12),n.cyl(B.fabricWarm(),2.6,ne+2.9,-2,1,.15,20),n.cyl(B.fabric(),2.6,ne+1.6,-2,.8,.12,20),n.build(t);let r=new Re(new bt(1.4,1.4,.1,24),B.indigo());r.position.set(1.5,ne+.6,3),t.add(r);let o=new Re(new Ft(.3,14,10),B.fabricWarm());t.add(o);let a=[jn(t,"#ffd6a8",0,ne+4,0,10,16)];return yn(e.spots,i,"trampoline",1.5,3,1.6,{en:"Bounce!",bn:"\u09B2\u09BE\u09AB\u09BE\u0993!"}),On(e.colliders,i,-2.5,2,2),On(e.colliders,i,2.6,-2,1),{group:t,lights:a,animate(l){o.position.set(Math.cos(l*.8)*3.5,ne+.3,Math.sin(l*.8)*3.5-1),o.rotation.z=-l*2.5,r.scale.y=1+Math.sin(l*6)*.3}}}function cm(i,e,{marsTexture:t}={}){let n={spots:[],colliders:[],segs:[],waypoints:{},anchors:{leak:{}}},s=[];for(let r of e){let o={hub:hb,greenhouse:am,power:ub,life:db,garage:fb,lab:pb,greenhouse2:(l,c)=>am(l,c,!0),observatory:mb,playroom:gb}[r.type];if(!o)continue;let a=o(r,n,t);i.add(a.group),s.push({id:r.id,m:r,...a})}return{list:s,...n}}function hm(i,e){for(let t of i)for(let n of t.lights)n.visible=t.id===e}function xb(){let i=new Ne,e=new Ye;e.box(B.frame(),0,-.05,0,3.4,.08,2.2),e.build(i);let t=new Re(new en(3.3,2.1).rotateX(-Math.PI/2),B.solarCell());return t.position.y=0,t.receiveShadow=!0,i.add(t),i}function um(i,e,t,{extraSpots:n,extraColliders:s}){let r=new Ne;i.add(r);let o=[],a=n,l=s,c=[],h=[Dt.solarFarm,...t.includes("solar2")?[Dt.solarFarm2]:[]];for(let ee of h){let X=new Ye;for(let Q=0;Q<ee.cols;Q++)for(let se=0;se<ee.rows;se++){let me=ot(ee.x0,ee.x1,ee.cols>1?Q/(ee.cols-1):.5),ue=ot(ee.z0,ee.z1,ee.rows>1?se/(ee.rows-1):.5),Xe=e(me,ue);X.cyl(B.shellShade(),me,Xe+.15,ue,.45,.3,12),X.cyl(B.frame(),me,Xe+1.1,ue,.12,1.8,8);let Le=new Ne;Le.position.set(me,Xe+2.05,ue);let st=xb();Le.add(st),r.add(Le),c.push({mount:Le,pivot:st}),l.push({x:me,z:ue,r:.45})}for(let Q=0;Q<ee.rows;Q++){let se=ot(ee.z0,ee.z1,ee.rows>1?Q/(ee.rows-1):.5);a.push({id:`panels-${a.filter(me=>me.id.startsWith("panels")).length}`,x:ee.x0-2.2,z:se,r:2.2,verb:"hold",label:{en:"Brush the panels",bn:"\u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u09AC\u09CD\u09B0\u09BE\u09B6 \u0995\u09B0\u09CB"}})}X.build(r)}let d=Qi("\u2600\uFE0F","SOLAR FARM","\u09B8\u09CB\u09B2\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0",4);d.position.set(Dt.solarFarm.x0-3,e(Dt.solarFarm.x0-3,-21)+2.6,-21),d.rotation.y=-Math.PI/2+.4,r.add(d);let u=new Ye;u.cyl(B.frame(),Dt.solarFarm.x0-3,e(Dt.solarFarm.x0-3,-21)+1,-21,.08,2,8),u.build(r);let f=new Ye,p=ee=>e(ee,.6)+.12;for(let ee=32.5;ee<Dt.solarFarm.x0;ee+=2)f.add(new bt(.12,.12,2.02,6),es.power(),ee+1,p(ee+1),.6,1,1,1,0,0,Math.PI/2);for(let ee=Dt.solarFarm.z0;ee<Dt.solarFarm.z1;ee+=2)f.add(new bt(.1,.1,2.02,6),es.power(),Dt.solarFarm.x0-1,e(Dt.solarFarm.x0-1,ee+1)+.1,ee+1,1,1,1,Math.PI/2);f.build(r,{shadows:!1});let x=Dt.iceDrill,g=e(x.x,x.z),m=new Ye;for(let ee=0;ee<3;ee++){let X=ee/3*$e;m.box(B.trim(),x.x+Math.cos(X)*1.4,g+3.2,x.z+Math.sin(X)*1.4,.22,6.6,.22,-X,0,.2)}m.round(B.shell(),x.x,g+6.4,x.z,1.4,.9,1.4),m.round(B.indigo(),x.x+2.6,g+.8,x.z+1.2,2.4,1.6,1.8),m.cyl(Qe("ice",()=>new nt({color:"#dff4ff",roughness:.25,emissive:"#6fb7d8",emissiveIntensity:.2})),x.x+2.8,g+.4,x.z-2.2,1.2,.8,10,0,0,0,.3),m.build(r);let y=new Ne;y.position.set(x.x,g,x.z);let v=new Ye;v.cyl(B.steel(),0,3.2,0,.16,6.2,10);for(let ee=0;ee<8;ee++)v.box(B.darkSteel(),0,.6+ee*.7,0,.5,.06,.14,ee*.8);v.build(y),r.add(y),l.push({x:x.x,z:x.z,r:1.8},{x:x.x+2.6,z:x.z+1.2,r:1.5}),a.push({id:"drill",x:x.x+2.6,z:x.z+3.4,r:2.2,verb:"tap",label:{en:"Ice drill",bn:"\u09AC\u09B0\u09AB \u09A1\u09CD\u09B0\u09BF\u09B2"}});let M=new D(x.x+3.5,g+1.2,x.z),w=new D(-36.5,e(-36.5,0)+1.4,0),S=new Ye,_=10;for(let ee=0;ee<_;ee++){let X=M.clone().lerp(w,ee/_),Q=M.clone().lerp(w,(ee+1)/_),se=X.clone().add(Q).multiplyScalar(.5),me=X.distanceTo(Q),ue=Math.atan2(Q.z-X.z,Q.x-X.x);S.add(new bt(.32,.32,me,10,1,!0),B.glass(),se.x,se.y,se.z,1,1,1,0,-ue,Math.PI/2),S.box(B.frame(),se.x,e(se.x,se.z)+(se.y-e(se.x,se.z))/2,se.z,.12,se.y-e(se.x,se.z),.12)}S.build(r,{shadows:!1});let b=new kn(new $n(.18,0),Qe("ice"),12);r.add(b);let R=Dt.comms,A=e(R.x,R.z),L=new Ye;for(let ee=0;ee<4;ee++){let X=ee/4*$e+Math.PI/4;L.box(B.frame(),R.x+Math.cos(X)*1,A+8,R.z+Math.sin(X)*1,.14,16,.14,-X,0,0)}for(let ee=1;ee<16;ee+=1.6)for(let X=0;X<4;X++){let Q=X/4*$e+Math.PI/4,se=Q+Math.PI/2,me=R.x+Math.cos(Q)*1,ue=R.z+Math.sin(Q)*1,Xe=R.x+Math.cos(se)*1,Le=R.z+Math.sin(se)*1;L.box(B.frame(),(me+Xe)/2,A+ee,(ue+Le)/2,Math.hypot(Xe-me,Le-ue),.07,.07,-Math.atan2(Le-ue,Xe-me))}L.round(B.shell(),R.x+2.6,A+1.1,R.z,2.6,2.2,2.2),L.build(r);let C=new Ne;C.position.set(R.x,A+16.3,R.z);let U=new Ne;C.add(U);let P=new Re(new Ft(2.4,32,12,0,$e,0,1),new nt({color:"#e7e1da",roughness:.45,metalness:.25,side:xn}));P.rotation.x=-Math.PI/2,P.position.z=2,P.castShadow=!0,U.add(P);let V=new Re(new bt(.05,.05,2,6),B.frame());V.rotation.x=Math.PI/2,V.position.z=.4,U.add(V),r.add(C);let W=tn("#ff4b3a",2.4,.9);W.position.set(R.x,A+17.8,R.z),r.add(W),l.push({x:R.x,z:R.z,r:1.4},{x:R.x+2.6,z:R.z,r:1.5}),a.push({id:"dish",x:R.x+2.6,z:R.z+2.4,r:2.2,verb:"tap",label:{en:"Radio dish",bn:"\u09B0\u09C7\u09A1\u09BF\u0993 \u09A1\u09BF\u09B6"}});let G=Dt.landingPad,K=e(G.x,G.z),k=new Ye;k.cyl(Qe("pad",()=>new nt({color:"#7d7a80",roughness:.85})),G.x,K+.12,G.z,G.r,.3,48),k.cyl(B.trim(),G.x,K+.28,G.z,G.r*.55,.03,48),k.cyl(Qe("pad"),G.x,K+.3,G.z,G.r*.5,.03,48);let O=G.x+3,J=G.z-2;k.cyl(B.shell(),O,K+3.6,J,1.6,3.6,20,0,0,0,.75),k.cyl(B.indigo(),O,K+5.7,J,.9,.8,18,0,0,0,.4),k.cyl(B.darkSteel(),O,K+1.5,J,1.2,.8,16,0,0,0,.7);for(let ee=0;ee<4;ee++){let X=ee/4*$e;k.box(B.frame(),O+Math.cos(X)*1.9,K+1.2,J+Math.sin(X)*1.9,.14,2.6,.14,-X,0,.45),k.cyl(B.frame(),O+Math.cos(X)*2.5,K+.1,J+Math.sin(X)*2.5,.4,.12,10)}k.build(r);let ce=[];for(let ee=0;ee<16;ee++){let X=ee/16*$e,Q=tn("#ffcf8a",1,0);Q.position.set(G.x+Math.cos(X)*(G.r-.3),K+.45,G.z+Math.sin(X)*(G.r-.3)),r.add(Q),ce.push(Q)}l.push({x:O,z:J,r:2.6}),a.push({id:"pad",x:G.x-2,z:G.z+2,r:3,verb:"tap",label:{en:"Landing pad",bn:"\u0985\u09AC\u09A4\u09B0\u09A3 \u09AA\u09CD\u09AF\u09BE\u09A1"}});let _e=Dt.weather,$=e(_e.x,_e.z),ye=new Ye;ye.cyl(B.frame(),_e.x,$+1.6,_e.z,.06,3.2,8),ye.round(B.shell(),_e.x,$+.4,_e.z,.7,.8,.5),ye.box(B.shell(),_e.x,$+2.4,_e.z,.8,.06,.06),ye.build(r);let Ce=new Ne;Ce.position.set(_e.x,$+3.25,_e.z);for(let ee=0;ee<3;ee++){let X=new Re(new Zt(.5,.03,.03),B.frame());X.position.x=.25;let Q=new Re(new Ft(.09,8,6,0,Math.PI),B.trim());Q.position.set(.5,0,0);let se=new Ne;se.rotation.y=ee/3*$e,se.add(X,Q),Ce.add(se)}r.add(Ce),l.push({x:_e.x,z:_e.z,r:.5}),a.push({id:"weather",x:_e.x+1.4,z:_e.z+1,r:1.8,verb:"tap",label:{en:"Weather station",bn:"\u0986\u09AC\u09B9\u09BE\u0993\u09AF\u09BC\u09BE \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0"}});let Ge=[];for(let[ee,X,Q,se]of[[-11,11,-40,40],[-36,0,-48,8],[36,0,39,0],[0,37,0,50],[18,-30,20,-42]]){let me=Math.max(1,Math.floor(Math.hypot(Q-ee,se-X)/9));for(let ue=0;ue<=me;ue++){let Xe=ue/me,Le=ot(ee,Q,Xe)+1.8,st=ot(X,se,Xe)+1.8;Ge.push([Le,st])}}let pe=new Ye,Ve=[];for(let[ee,X]of Ge){let Q=e(ee,X);pe.cyl(B.frame(),ee,Q+1.6,X,.06,3.2,8),pe.box(B.shell(),ee,Q+3.25,X,.5,.14,.3);let se=tn("#ffd9a0",2.2,0);se.position.set(ee,Q+3.1,X),r.add(se),Ve.push(se),l.push({x:ee,z:X,r:.25})}pe.build(r);let St={};t.includes("reactor")&&(St.reactor=_b(r,e,l,a)),t.includes("fuel")&&(St.fuel=yb(r,e,l,a)),t.includes("printer")&&(St.printer=vb(r,e,l,a));let ze=new Et,at=new D;return{group:r,panels:c,update(ee,X,Q){let se=Q.sunDir,me=se.y>.03&&Q.storm<.5,ue=Math.atan2(se.x,se.z),Xe=me?Math.PI/2-Math.asin(ct(se.y,0,1)):0;for(let qe of c)qe.mount.rotation.y=me?ot(qe.mount.rotation.y,ue,.03):qe.mount.rotation.y,qe.pivot.rotation.x=ot(qe.pivot.rotation.x,Xe*.85,.03);B.solarCell().color.setRGB(1-Q.dust*.45,1-Q.dust*.55,1-Q.dust*.68);let Le=!Q.drillJam;y.rotation.y+=X*(Le?4:0),y.position.y=g-(Le?Math.sin(ee*.7)*.3+.3:0)+(Q.drillJam?Math.sin(ee*40)*.03:0);for(let qe=0;qe<b.count;qe++){let xt=Le?(ee*.05+qe/b.count)%1:qe/b.count;at.copy(M).lerp(w,xt),ze.position.copy(at),ze.rotation.set(qe,ee*(Le?1:0),qe*2),ze.updateMatrix(),b.setMatrixAt(qe,ze.matrix)}b.instanceMatrix.needsUpdate=!0;let st=Q.earthDir;C.rotation.y=Math.atan2(st.x,st.z)+(Q.comms?Math.sin(ee*.8)*.9:0),U.rotation.x=-Math.asin(ct(st.y,-.2,.9))+(Q.comms?.4:0),W.material.opacity=ee%1.6<.5?.95:.1,ce.forEach((qe,xt)=>{qe.material.opacity=(Math.floor(ee*8)%16===xt?1:.25)*(.3+Q.night*.7)}),Ce.rotation.y+=X*(3+Q.storm*14+Math.sin(ee*.3)*1.5);for(let qe of Ve)qe.material.opacity=Q.night*.85;for(let qe of Object.values(St))qe.update?.(ee,X,Q)}}}function _b(i,e,t,n){let s=Dt.reactor,r=e(s.x,s.z),o=new Ye;o.cyl(B.regolith(),s.x,r+.9,s.z,8.5,1.8,40,0,0,0,.92),o.cyl(B.shellShade(),s.x,r+2.4,s.z,1.2,3.6,20),o.cyl(B.trim(),s.x,r+4.3,s.z,1.25,.25,20),o.build(i);let a=new Ne;a.position.set(s.x,r+3.4,s.z);let l=new nt({color:"#4a4e5c",roughness:.4,metalness:.5,emissive:"#ff5a2a",emissiveIntensity:.6});for(let h=0;h<8;h++){let d=new Re(new Zt(3.4,2.2,.06),l);d.position.set(Math.cos(h/8*$e)*2.9,0,Math.sin(h/8*$e)*2.9),d.rotation.y=-h/8*$e,a.add(d)}i.add(a);let c=Qi("\u269B\uFE0F","FISSION POWER","\u09AA\u09BE\u09B0\u09AE\u09BE\u09A3\u09AC\u09BF\u0995 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE",3.4);return c.position.set(s.x-8,r+2.2,s.z),c.rotation.y=-Math.PI/2,i.add(c),t.push({x:s.x,z:s.z,r:8.6}),n.push({id:"reactor",x:s.x-10,z:s.z,r:2.5,verb:"tap",label:{en:"Fission power unit",bn:"\u09AA\u09BE\u09B0\u09AE\u09BE\u09A3\u09AC\u09BF\u0995 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u0987\u0989\u09A8\u09BF\u099F"}}),{update(h){l.emissiveIntensity=.5+Math.sin(h*1.4)*.2}}}function yb(i,e,t,n){let s=Dt.fuel,r=e(s.x,s.z),o=new Ye;for(let l=0;l<3;l++)o.cyl(Qe("fuelTank",()=>new nt({color:"#e9e6ee",roughness:.35,metalness:.4})),s.x+l*3,r+2.6,s.z,1.2,5.2,20);o.round(B.indigo(),s.x+3,r+.8,s.z+3.4,7,1.6,2.2),o.build(i);let a=tn("#f5fbff",3,0);return a.position.set(s.x+6,r+5.6,s.z),i.add(a),t.push({x:s.x+3,z:s.z,r:4.6}),n.push({id:"fuel",x:s.x+3,z:s.z+6,r:2.4,verb:"tap",label:{en:"Rocket fuel plant",bn:"\u09B0\u0995\u09C7\u099F \u099C\u09CD\u09AC\u09BE\u09B2\u09BE\u09A8\u09BF \u0995\u09BE\u09B0\u0996\u09BE\u09A8\u09BE"}}),{update(l){let c=l%7/7;a.material.opacity=c<.3?Math.sin(c/.3*Math.PI)*.6:0,a.position.y=r+5.6+c*3}}}function vb(i,e,t,n){let s=Dt.printer,r=e(s.x,s.z),o=new Ye;o.box(B.frame(),s.x,r+3.5,s.z-3,.2,7,.2),o.box(B.frame(),s.x,r+3.5,s.z+3,.2,7,.2),o.box(B.frame(),s.x,r+7,s.z,.25,.25,6.2),o.build(i);let a=new Re(new Zt(1.2,1,5.6),B.regolith());a.position.set(s.x+2.2,r,s.z),i.add(a);let l=new Re(new vi(.25,.6,10),B.trim());return l.rotation.x=Math.PI,i.add(l),t.push({x:s.x+2.2,z:s.z,r:3}),n.push({id:"printerYard",x:s.x-2,z:s.z,r:2.2,verb:"tap",label:{en:"Brick printer",bn:"\u0987\u099F \u09AA\u09CD\u09B0\u09BF\u09A8\u09CD\u099F\u09BE\u09B0"}}),{update(c){let h=c/60%1*2.4+.2;a.scale.y=h,a.position.y=r+h/2,l.position.set(s.x+2.2,r+h+.4,s.z+Math.sin(c*1.5)*2.6)}}}function dm(i){let e=new Ne,t=new Ne;e.add(t);let n=new Ye;n.ball(B.shell(),0,0,0,.42,.38,.4),n.cyl(B.trim(),0,-.05,0,.43,.06,24),n.cyl(B.frame(),0,.38,0,.03,.3,6);for(let g of[-1,1])n.ball(B.indigo(),g*.44,-.02,0,.09,.16,.16);n.build(t);let s=document.createElement("canvas");s.width=128,s.height=80;let r=s.getContext("2d"),o=new Dn(s);o.colorSpace=Vt;let a=new Re(new Ft(.4,24,16,-.9+Math.PI,1.8,1.05,.95),new $t({map:o,toneMapped:!1}));a.rotation.y=Math.PI,t.add(a);let l=tn("#7ef4e0",.35,1);l.position.y=.56,t.add(l);let c=tn("#8fdcff",.6,.7);c.position.y=-.42,t.add(c),i.add(e);let h=2,d="happy",u=0,f="";function p(g){let m=`${g}-${d}-${u>0?Math.floor(u*8)%2:0}`;if(m!==f){f=m,r.fillStyle="#1b2433",r.fillRect(0,0,128,80),r.fillStyle=d==="worried"?"#ffb23a":"#7ef4e0";for(let y of[42,86])r.beginPath(),g?r.fillRect(y-12,34,24,4):r.ellipse(y,36,9,d==="worried"?9:13,0,0,$e),r.fill();r.strokeStyle=r.fillStyle,r.lineWidth=4,r.beginPath(),u>0&&Math.floor(u*8)%2?r.ellipse(64,60,8,6,0,0,$e):d==="worried"?(r.moveTo(54,64),r.lineTo(74,62)):r.arc(64,52,12,.3,Math.PI-.3),r.stroke(),o.needsUpdate=!0}}p(!1);let x=new D;return{root:e,say(g=2.5){u=g},setMood(g){d=g},update(g,m,y,v,M){let w=y;e.position.x=Lt(e.position.x,w.x,3,g),e.position.z=Lt(e.position.z,w.z,3,g),e.position.y=Lt(e.position.y,w.y+(M?0:Math.sin(m*2.1)*.12),4,g),x.copy(v);let S=Math.atan2(x.x-e.position.x,x.z-e.position.z);e.rotation.y=Ti(e.rotation.y,S,5,g),t.rotation.z=M?0:Math.sin(m*1.3)*.08,t.position.y=u>0&&!M?Math.abs(Math.sin(m*14))*.04:0,u=Math.max(0,u-g),h-=g,h<0&&(h=2+Math.random()*3),p(h<.12),l.material.opacity=.5+.5*Math.abs(Math.sin(m*3)),c.scale.setScalar(.5+Math.sin(m*20)*.08)}}}var Mb=[{name:"Mishti",fur:"#e8a35e",stripe:"#b8673a",suit:"#e9dcd1",trim:"#6b8fb5"},{name:"Megh",fur:"#a9a6b2",stripe:"#6f6c7a",cream:"#e8e4ee",suit:"#e9dcd1",trim:"#b07ad6"},{name:"Neel",fur:"#3b3540",stripe:"#24202a",cream:"#f2ece6",suit:"#e9dcd1",trim:"#5fbf8a"}];function bb(i,e){let t=i.find(r=>r.id==="hub"),n=new Map,s=new Map(zr(i).map(r=>[r.to,r]));for(let r of i){let o=(e.waypoints[r.id]??[[0,0]]).map(([a,l])=>r.id==="hub"?[a,l]:ji(r,a,l));n.set(r.id,o)}return{path(r,o){if(r===o)return[];let a=[],l=d=>[t.x+Math.cos(d)*6.2,t.z+Math.sin(d)*6.2],c=d=>{let u=s.get(d);return[u.end,[(u.start[0]+u.end[0])/2,(u.start[1]+u.end[1])/2],u.start,l(u.angle)]},h=null;if(r!=="hub"&&s.has(r)&&(a.push(...c(r)),h=s.get(r).angle),o!=="hub"&&s.has(o)){let d=s.get(o);h!==null&&Math.abs(Ki(h,d.angle))>1.7&&a.push(l(h+Ki(h,d.angle)/2)),a.push(l(d.angle),d.start,[(d.start[0]+d.end[0])/2,(d.start[1]+d.end[1])/2],d.end)}return a},spots:r=>n.get(r)??[[0,0]]}}function fm(i,e,t,{onLeft:n}={}){let s=bb(e,t),r=e.map(d=>d.id).filter(d=>t.waypoints[d]),o=[-1.42,-1,-.6],a=o.map(d=>[Math.cos(d)*9.5,Math.sin(d)*9.5]),l=[],c=Mb.map((d,u)=>{let f=Lc(i,d);f.setHelmet(!1);let p=s.spots("hub")[u%s.spots("hub").length];f.rig.position.set(p[0],ke,p[1]);let x=Sb();return i.add(x),l.push(x),{name:d.name,kitty:f,at:"hub",path:[],goal:null,wait:2+u*3,heading:0,task:null,sleeping:!1,z:x}});function h(d,u){if(u==="shelter")return{module:"hub",point:t.anchors.shelter.map((m,y)=>m+[.6,-.6,.3][d.index??0]*(y?-1:1)),task:"shelter"};if(u==="sleep"){let m=c.indexOf(d);return{module:"hub",point:a[m],task:"sleep"}}if(u.startsWith("help:")){let m=u.slice(5);if(r.includes(m))return{module:m,point:s.spots(m)[0],task:"point"}}let f=r[Math.floor(Math.random()*r.length)],p=s.spots(f),x=p[Math.floor(Math.random()*p.length)],g=f==="hub"&&Math.random()<.3?"bike":"work";return{module:f,point:g==="bike"?t.anchors.bike:x,task:g}}return{members:c,update(d,u,f,p){c.forEach((x,g)=>{x.index=g;let m=f==="normal"?null:f;m&&x.mode!==m&&(x.path=[],x.goal=null,x.wait=Math.random()*1.5,x.mode=m),!m&&x.mode&&(x.mode=null,x.wait=Math.random()*3),x.sleeping=!1;let y=0,v=x.kitty.rig.position;if(x.path.length){let[_,b]=x.path[0],R=_-v.x,A=b-v.z,L=Math.hypot(R,A),C=m==="shelter"?3.4:1.9;if(L<.25)x.path.shift(),x.path.length||(x.arrived=!0);else{let U=Math.min(L,C*d);v.x+=R/L*U,v.z+=A/L*U,y=C,x.heading=Ti(x.heading,Math.atan2(-R,-A),9,d)}}else if(x.goal?.task==="sleep"&&x.arrived&&(x.sleeping=!0),x.wait-=d,x.wait<=0&&!(x.goal?.task==="sleep"&&m==="sleep")&&!(x.goal?.task==="shelter"&&m==="shelter")){let _=h(x,m??"normal");x.path=[...s.path(x.at,_.module),_.point],x.goal=_,x.arrived=!1,x.at=_.module,x.wait=_.task==="bike"?18:6+Math.random()*12}let M=x.sleeping,w=x.kitty.rig;if(w.rotation.order="YXZ",M){let _=o[g],b=[Math.sin(Math.PI-_),Math.cos(Math.PI-_)];w.rotation.set(Math.PI/2,Math.PI-_,0),w.position.set(a[g][0]-b[0]*.85,ke+.85,a[g][1]-b[1]*.85)}else w.rotation.set(0,x.heading,0),w.position.y=0;let S=x.goal?.task==="bike"&&x.arrived&&!x.path.length;x.kitty.animate(d,S?1.2:y,M?0:ke+(S?.35:0),x.goal?.task==="work"&&x.arrived?.5+Math.sin(u*2+g)*.3:0,p),x.z.visible=M,M&&(x.z.position.set(v.x,1.9+(u*.4+g*.3)%1*.8,v.z),x.z.material.opacity=1-(u*.4+g*.3)%1)})}}}function Sb(){let i=document.createElement("canvas");i.width=64,i.height=64;let e=i.getContext("2d");e.fillStyle="#ffffff",e.font="bold 40px system-ui",e.fillText("z",20,46);let t=new Dn(i),n=new Ds(new cs({map:t,transparent:!0,depthWrite:!1}));return n.scale.setScalar(.5),n}function Vc(){let i=new Ne,e=new Ne;i.add(e);let t=new Ye;t.round(B.shell(),0,1.25,0,2.2,.55,3.4),t.box(B.indigo(),0,1.58,.3,2,.08,2.4),t.box(B.solarCell(),0,1.64,.3,1.9,.02,2.3),t.round(B.trim(),0,1.05,-1.75,2,.25,.2),t.cyl(B.frame(),.7,2.1,-1.2,.06,1.2,8),t.round(B.shell(),.7,2.8,-1.25,.5,.32,.3),t.box(B.window(),.7,2.82,-1.42,.38,.14,.04),t.cyl(B.frame(),-.7,2,1.2,.03,1,6),t.ball(B.lampCool(),-.7,2.52,1.2,.06);for(let r of[-1,1])t.box(B.frame(),r*1.2,.95,-.6,.12,.12,2,0,.35),t.box(B.frame(),r*1.2,.95,.9,.12,.12,1.4,0,-.3);t.ball(B.glass(),0,1.75,-.7,.55,.45,.55),t.build(e);let n=[];for(let r of[-1,1])for(let o of[-1.4,0,1.4]){let a=new Ne;a.position.set(r*1.35,.42,o);let l=new Ye;l.cyl(B.rubber(),0,0,0,.42,.34,18,0,0,Math.PI/2),l.cyl(B.steel(),r*.05,0,0,.22,.36,12,0,0,Math.PI/2);for(let c=0;c<6;c++)l.box(B.darkSteel(),0,Math.cos(c/6*$e)*.42,Math.sin(c/6*$e)*.42,.36,.06,.1,0,c/6*$e);l.build(a),i.add(a),n.push(a)}let s=[tn("#fff1d0",1.6,0),tn("#fff1d0",1.6,0)];return s[0].position.set(-.7,1.15,-1.9),s[1].position.set(.7,1.15,-1.9),e.add(...s),{root:i,chassis:e,wheels:n,lights:s}}function pm(i,e,t,n,s){let r=Math.sin(n),o=Math.cos(n),a=(f,p)=>s(e+f*o+p*r,t-f*r+p*o),l=(a(-1.3,-1.4)+a(1.3,-1.4))/2,c=(a(-1.3,1.4)+a(1.3,1.4))/2,h=(a(-1.3,-1.4)+a(-1.3,1.4))/2,d=(a(1.3,-1.4)+a(1.3,1.4))/2;return{y:(l+c+h+d)/4,pitch:Math.atan2(l-c,2.8),roll:Math.atan2(h-d,2.6)}}function mm(i,e,t){let n=Vc();i.add(n.root);let s={x:0,z:0,heading:0,speed:0,driving:!1,dust:0},r=0;return{model:n,state:s,park(o,a,l){Object.assign(s,{x:o,z:a,heading:l,speed:0}),this.place(0)},place(o){let a=pm(n,s.x,s.z,s.heading,e);n.root.position.set(s.x,o?Lt(n.root.position.y,a.y,12,o):a.y,s.z),n.root.rotation.set(0,s.heading,0),n.chassis.rotation.x=o?Lt(n.chassis.rotation.x,-a.pitch,10,o):-a.pitch,n.chassis.rotation.z=o?Lt(n.chassis.rotation.z,a.roll,10,o):a.roll},drive(o,a,l,{maxSpeed:c=7.5,night:h=0,reduced:d=!1}={}){s.speed=Lt(s.speed,a*c,a?2.2:3.5,o),s.heading-=l*o*1.4*ct(Math.abs(s.speed)/3,.35,1)*Math.sign(s.speed||1);let u=s.x-Math.sin(s.heading)*s.speed*o,f=s.z-Math.cos(s.heading)*s.speed*o,p=t.resolve(u,f,1.7);Math.hypot(p.x-u,p.z-f)>.01&&(s.speed*=.6),s.x=p.x,s.z=p.z,this.place(o),r+=s.speed*o/.42;for(let x of n.wheels)x.rotation.x=-r;for(let x of n.lights)x.material.opacity=h*.9;return s.dust=d?0:ct(Math.abs(s.speed)/c,0,1),s},idle(o,a){s.speed=Lt(s.speed,0,4,o);for(let l of n.lights)l.material.opacity=a*.5}}}function gm(i,e,t){let n=Vc();n.root.scale.setScalar(.75),i.add(n.root);let s=0,r=0,o=0,a=!1,l=t.map((h,d)=>Math.hypot(t[(d+1)%t.length][0]-h[0],t[(d+1)%t.length][1]-h[1])),c=l.reduce((h,d)=>h+d,0);return{model:n,get position(){return n.root.position},setStuck(h){a=h},update(h,d){a||(s=(s+h*3.2)%c);let u=s,f=0;for(;u>l[f];)u-=l[f],f++;let p=t[f],x=t[(f+1)%t.length],g=u/l[f],m=p[0]+(x[0]-p[0])*g,y=p[1]+(x[1]-p[1])*g;r=Ti(r,Math.atan2(-(x[0]-p[0]),-(x[1]-p[1])),3,h);let v=pm(n,m,y,r,e);n.root.position.set(m,v.y,y),n.root.rotation.set(0,r,0),n.chassis.rotation.x=-v.pitch,n.chassis.rotation.z=a?.25:v.roll,o+=(a?.4:3.2)*h/.42;for(let M of n.wheels)M.rotation.x=-o;for(let M of n.lights)M.material.opacity=d*.8}}}function Lu(){let i=new Ne,e=new Ye;e.round(B.shell(),0,0,0,.5,.4,.5),e.box(B.solarCell(),0,1.05,0,.7,.02,.45),e.cyl(B.frame(),0,.55,0,.04,1,8);for(let n=0;n<4;n++){let s=n/4*$e+Math.PI/4;e.box(B.frame(),Math.cos(s)*.4,-.45,Math.sin(s)*.4,.04,.8,.04,-s,0,.6)}e.box(B.window(),0,-.05,-.26,.16,.1,.02),e.build(i);let t=[];for(let[n,s]of[[.5,1],[.75,-1]]){let r=new Ne;r.position.y=n;let o=new Ye;o.box(B.darkSteel(),0,0,0,2.4,.02,.16),o.build(r,{shadows:!1}),i.add(r),t.push({r,dir:s})}return{root:i,rotors:t}}function Du(i,e){let t=Lu();i.add(t.root);let n={x:0,y:6,z:0,heading:0,vx:0,vz:0,vy:0,battery:1,flying:!1,controlled:!1},s=0;return{model:t,state:n,patrol(r,o,a){let l=o*.13,c=a.x+Math.sin(l)*34,h=a.z+Math.sin(l*2)*22,d=e(c,h)+11+Math.sin(o*.5)*2;n.x=Lt(n.x,c,1.5,r),n.z=Lt(n.z,h,1.5,r),n.y=Lt(n.y,d,1.5,r),n.heading=Ti(n.heading,Math.atan2(-(c-n.x),-(h-n.z)),2,r),this.pose(r)},control(r,o,a,l,c){n.heading-=c*r*1.8;let h=Math.sin(n.heading),d=Math.cos(n.heading);n.vx=Lt(n.vx,(-h*o+d*a)*9,3,r),n.vz=Lt(n.vz,(-d*o-h*a)*9,3,r),n.vy=Lt(n.vy,l*4,3,r),n.x=ct(n.x+n.vx*r,-160,160),n.z=ct(n.z+n.vz*r,-160,160);let u=e(n.x,n.z);n.y=ct(n.y+n.vy*r,u+.8,u+30),n.battery=Math.max(0,n.battery-r/80),this.pose(r,o,a)},pose(r,o=0,a=0){t.root.position.set(n.x,n.y,n.z),t.root.rotation.set(-o*.18,n.heading,-a*.18),s+=r*40;for(let{r:l,dir:c}of t.rotors)l.rotation.y=s*c}}}function xm(i,e=3){let t=hi(e+9883),n=new Ut,s=[],r=[];for(let l=0;l<900;l++)s.push(t()*100,t()**2*10,(t()-.5)*100),r.push(t());n.setAttribute("position",new Je(s,3)),n.setAttribute("variation",new Je(r,1));let o=new kt({transparent:!0,depthWrite:!1,uniforms:{elapsed:{value:0},storm:{value:0},pixel:{value:1},inside:{value:0},center:{value:new D}},vertexShader:`
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
      }`}),a=new yi(n,o);return a.frustumCulled=!1,i.add(a),o.uniforms}function _m(i,e,t=3,n=120,s=1){let r=hi(s+31),o=[],a=new en(1.6,1).rotateX(-Math.PI/2),l=new $t({color:"#4a2e26",transparent:!0,opacity:.22,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),c=new kn(a,l,400);c.count=0,c.frustumCulled=!1,i.add(c);let h=0,d=new Et;for(let u=0;u<t;u++){let p=new Ut,x=new Float32Array(420*3);for(let v=0;v<420;v++)x.set([r(),r(),r()],v*3);p.setAttribute("position",new Je(new Float32Array(420*3),3)),p.setAttribute("seed",new Je(x,3));let g=new kt({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},tall:{value:14+r()*10},pixel:{value:1},fade:{value:1}},vertexShader:`
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
        }`}),m=new yi(p,g);m.frustumCulled=!1,i.add(m);let y=r()*$e;o.push({pts:m,mat:g,x:Math.cos(y)*n*.6,z:Math.sin(y)*n*.6,heading:r()*$e,life:r()*60,stamp:0})}return{devils:o,update(u,f,{avoid:p=[],reduced:x=!1,pixel:g=1}={}){for(let m of o){m.life+=u,m.heading+=Math.sin(f*.3+m.life)*u*.5;let y=3.2;m.x+=Math.cos(m.heading)*y*u,m.z+=Math.sin(m.heading)*y*u,Math.hypot(m.x,m.z)>n&&(m.heading=Math.atan2(-m.z,-m.x)+(Math.random()-.5));for(let w of p)Math.hypot(m.x-w.x,m.z-w.z)<w.r&&(m.heading=Math.atan2(m.z-w.z,m.x-w.x));let v=e(m.x,m.z);m.pts.position.set(m.x,v,m.z),m.mat.uniforms.time.value=x?0:f+m.life,m.mat.uniforms.pixel.value=g;let M=m.life%70/70;m.mat.uniforms.fade.value=ct(Math.min(M*6,(1-M)*6),0,1),m.stamp+=u,m.stamp>.35&&m.mat.uniforms.fade.value>.3&&(m.stamp=0,d.position.set(m.x,v+.04,m.z),d.rotation.y=-m.heading,d.scale.set(1,1,1),d.updateMatrix(),c.setMatrixAt(h,d.matrix),h=(h+1)%400,c.count=Math.max(c.count,h),c.instanceMatrix.needsUpdate=!0)}},nearest(u,f){let p=null;for(let x of o){let g=Math.hypot(x.x-u,x.z-f);x.mat.uniforms.fade.value>.3&&(!p||g<p.dist)&&(p={dist:g,devil:x})}return p}}}function ym(i,e=600){let t=new Ut;t.setAttribute("position",new Je(new Float32Array(e*3),3)),t.setAttribute("color",new Je(new Float32Array(e*3),3)),t.setAttribute("alpha",new Je(new Float32Array(e),1)),t.setAttribute("size",new Je(new Float32Array(e),1));let n=new kt({transparent:!0,depthWrite:!1,vertexColors:!0,uniforms:{pixel:{value:1}},vertexShader:`
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
      }`}),s=new yi(t,n);s.frustumCulled=!1,i.add(s);let r=Array.from({length:e},()=>({life:0,max:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,g:0,size:.1,r:1,gg:1,b:1,grow:0})),o=0,a=new Be;function l(c,h,d,{count:u=10,speed:f=2,up:p=1,gravity:x=-4,life:g=.8,size:m=.12,color:y="#ffd27a",spread:v=1,dir:M=null,grow:w=0}={}){a.set(y);for(let S=0;S<u;S++){let _=r[o];o=(o+1)%e;let b=Math.random()*$e,R=f*(.4+Math.random()*.6);_.x=c,_.y=h,_.z=d,M?(_.vx=M[0]*R+(Math.random()-.5)*v,_.vy=M[1]*R+(Math.random()-.5)*v,_.vz=M[2]*R+(Math.random()-.5)*v):(_.vx=Math.cos(b)*R*v,_.vz=Math.sin(b)*R*v,_.vy=p*R*(.5+Math.random())),_.g=x,_.life=_.max=g*(.6+Math.random()*.6),_.size=m*(.7+Math.random()*.6),_.grow=w,_.r=a.r,_.gg=a.g,_.b=a.b}}return{emit:l,update(c,h=1){n.uniforms.pixel.value=h;let d=t.attributes.position,u=t.attributes.alpha,f=t.attributes.color,p=t.attributes.size;for(let x=0;x<r.length;x++){let g=r[x];g.life>0&&(g.life-=c,g.vy+=g.g*c,g.x+=g.vx*c,g.y+=g.vy*c,g.z+=g.vz*c,g.size+=g.grow*c),d.setXYZ(x,g.x,g.y,g.z),u.setX(x,g.life>0?Math.min(1,g.life/g.max*1.5):0),f.setXYZ(x,g.r,g.gg,g.b),p.setX(x,g.size)}d.needsUpdate=u.needsUpdate=f.needsUpdate=p.needsUpdate=!0}}}function vm(i){let e=new Ne,t=new Re(new bt(.9,1.3,2.6,16),new nt({color:"#e9ded2",roughness:.5,metalness:.2}));t.position.y=1.5;let n=new Re(new vi(.9,1,16),new nt({color:"#e3884c",roughness:.5}));n.position.y=3.3;let s=new Re(new vi(.6,3.2,14,1,!0),new $t({color:"#ffb35a",transparent:!0,opacity:.85,blending:Xi,depthWrite:!1}));s.rotation.x=Math.PI,s.position.y=-1.5;let r=tn("#ffb35a",7,.9);return r.position.y=-1,e.add(t,n,s,r),e.visible=!1,i.add(e),{group:e,flame:s,light:r,crate:t}}function Mm(){let i=null,e=null,t=null,n=null,s=null,r=null,o=!0,a=()=>{let d=i.createBuffer(1,i.sampleRate*2,i.sampleRate),u=d.getChannelData(0),f=0;for(let p=0;p<u.length;p++)f=f*.97+(Math.random()*2-1)*.03,u[p]=f*6;return d};function l(){if(i){i.state==="suspended"&&i.resume();return}let d=window.AudioContext||window.webkitAudioContext;if(!d)return;i=new d,e=i.createGain(),e.gain.value=o?.8:0,e.connect(i.destination);let u=a();t=i.createBufferSource(),t.buffer=u,t.loop=!0;let f=i.createBiquadFilter();f.type="bandpass",f.frequency.value=420,f.Q.value=.6,n=i.createGain(),n.gain.value=0,t.connect(f).connect(n).connect(e),t.start(),s=i.createOscillator(),s.type="sine",s.frequency.value=58;let p=i.createOscillator();p.type="triangle",p.frequency.value=117,r=i.createGain(),r.gain.value=0,s.connect(r),p.connect(r),r.connect(e),s.start(),p.start()}function c(d,u,f,p="sine",x=.15,g=0){if(!i||!o)return;let m=i.createOscillator(),y=i.createGain();m.type=p,m.frequency.setValueAtTime(d,u),g&&m.frequency.linearRampToValueAtTime(d+g,u+f),y.gain.setValueAtTime(0,u),y.gain.linearRampToValueAtTime(x,u+.01),y.gain.exponentialRampToValueAtTime(1e-4,u+f),m.connect(y).connect(e),m.start(u),m.stop(u+f+.05)}function h(d=.15,u=.2,f=2500){if(!i||!o)return;let p=i.createBufferSource();p.buffer=a();let x=i.createBiquadFilter();x.type="highpass",x.frequency.value=f;let g=i.createGain(),m=i.currentTime;g.gain.setValueAtTime(u,m),g.gain.exponentialRampToValueAtTime(1e-4,m+d),p.connect(x).connect(g).connect(e),p.start(m),p.stop(m+d+.05)}return{unlock:l,setEnabled(d){o=d,e&&(e.gain.value=d?.8:0)},get enabled(){return o},ambience(d,u,f=0){if(!i)return;let p=i.currentTime;n.gain.setTargetAtTime((.05+u*.3)*(1-d*.85),p,.4),r.gain.setTargetAtTime(d*(.025+f*.05),p,.4)},click(){i&&c(880,i.currentTime,.06,"square",.05)},success(){i&&[523,659,784,1046].forEach((d,u)=>c(d,i.currentTime+u*.09,.25,"triangle",.12))},alarm(){if(i)for(let d=0;d<3;d++)c(740,i.currentTime+d*.32,.18,"square",.07,-160)},spark(){h(.12,.18,3200)},hiss(){h(.6,.06,4500)},thump(){i&&c(90,i.currentTime,.12,"sine",.12,-40)},rocket(){h(2.2,.12,300)},door(){i&&(c(220,i.currentTime,.3,"sawtooth",.03,120),h(.5,.04,1500))},pickup(){i&&[660,990].forEach((d,u)=>c(d,i.currentTime+u*.07,.15,"sine",.1))}}}function bm(i,e){let t=new Set,n={move:[0,0],look:[0,0],act:!1,actPressed:!1,jump:!1,run:!1,zoom:0,up:0},s=new Map,r=null,o=[],a=u=>o.push(u);addEventListener("keydown",u=>{if(u.target.closest?.("input, textarea, select"))return;let f=u.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright"," "].includes(f)&&u.preventDefault(),!t.has(f)){(f==="e"||f==="enter")&&a("act"),f===" "&&a("jump");for(let[p,x]of[["m","map"],["b","build"],["p","photo"],["f","drone"],["r","rover"],["escape","menu"]])f===p&&a(x)}t.add(f)}),addEventListener("keyup",u=>t.delete(u.key.toLowerCase())),addEventListener("blur",()=>t.clear()),i.addEventListener("pointerdown",u=>{i.setPointerCapture(u.pointerId),s.set(u.pointerId,{x:u.clientX,y:u.clientY})}),i.addEventListener("pointermove",u=>{let f=s.get(u.pointerId);f&&(n.look[0]+=(u.clientX-f.x)*.006,n.look[1]+=(u.clientY-f.y)*.004,f.x=u.clientX,f.y=u.clientY)});for(let u of["pointerup","pointercancel"])i.addEventListener(u,f=>s.delete(f.pointerId));i.addEventListener("wheel",u=>{n.zoom+=Math.sign(u.deltaY),u.preventDefault()},{passive:!1});let l=e.querySelector("[data-stick]"),c=l?.querySelector("span");if(l){l.addEventListener("pointerdown",u=>{l.setPointerCapture(u.pointerId);let f=l.getBoundingClientRect();r={id:u.pointerId,cx:f.left+f.width/2,cy:f.top+f.height/2,r:f.width/2},h(u)}),l.addEventListener("pointermove",u=>{r?.id===u.pointerId&&h(u)});for(let u of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(u,()=>{r=null,n.stick=[0,0],c&&(c.style.transform="")})}function h(u){let f=(u.clientX-r.cx)/r.r,p=(u.clientY-r.cy)/r.r,x=Math.hypot(f,p);x>1&&(f/=x,p/=x),n.stick=[f,-p],c&&(c.style.transform=`translate(${f*34}px, ${p*34}px)`)}e.addEventListener("pointerdown",u=>{let f=u.target.closest("[data-press]");if(!f)return;u.preventDefault();let p=f.dataset.press;a(p),p==="act"&&(n.holdAct=!0),p==="jump"&&(n.holdJump=!0),p==="up"&&(n.holdUp=!0),p==="down"&&(n.holdDown=!0)});let d=()=>{n.holdAct=!1,n.holdJump=!1,n.holdUp=!1,n.holdDown=!1};return e.addEventListener("pointerup",d),e.addEventListener("pointercancel",d),{state:n,keys:t,take(){return o.splice(0)},poll(){let u=y=>t.has(y),f=(u("d")||u("arrowright")?1:0)-(u("a")||u("arrowleft")?1:0),p=(u("w")||u("arrowup")?1:0)-(u("s")||u("arrowdown")?1:0);n.stick&&(n.stick[0]||n.stick[1])&&([f,p]=n.stick),n.run=u("shift"),n.act=u("e")||u("enter")||!!n.holdAct,n.jump=u(" ")||!!n.holdJump,n.up=(u(" ")||n.holdUp?1:0)-(u("shift")||u("c")||n.holdDown?1:0);let x=navigator.getGamepads?.().find(y=>y);if(x){let y=v=>Math.abs(v)<.18?0:v;(y(x.axes[0])||y(x.axes[1]))&&(f=y(x.axes[0]),p=-y(x.axes[1])),n.look[0]+=y(x.axes[2]??0)*.05,n.look[1]+=y(x.axes[3]??0)*.03,x.buttons[0]?.pressed&&(n.act=!0),x.buttons[1]?.pressed&&(n.jump=!0),x.buttons[0]?.pressed&&!n.gpA&&a("act"),x.buttons[1]?.pressed&&!n.gpB&&a("jump"),x.buttons[3]?.pressed&&!n.gpY&&a("map"),x.buttons[2]?.pressed&&!n.gpX&&a("drone"),n.gpA=x.buttons[0]?.pressed,n.gpB=x.buttons[1]?.pressed,n.gpX=x.buttons[2]?.pressed,n.gpY=x.buttons[3]?.pressed}n.move=[f,p];let g=n.look.slice();n.look[0]=n.look[1]=0;let m=n.zoom;return n.zoom=0,{...n,look:g,zoom:m}}}}var Ri={en:{title:"Mars Colony",loading:"Building your Mars base\u2026",start:"Start the mission",continue:"Continue",power:"Power",water:"Water",oxygen:"Oxygen",food:"Food",metal:"Metal",ice:"Ice",science:"Science",sol:"Sol",day:"Day",night:"Night",inside:"inside",outside:"outside",build:"Build",map:"Travel",photo:"Photo",menu:"Menu",drone:"Drone",jump:"Jump",act:"Use",hold:"Hold",tap:"Tap",drive:"Drive the rover",leaveRover:"Get out",close:"Close",emergency:"Low supplies! The crew is in safe mode. Fix the problem and things will recover.",keys:"Move: WASD / arrows \xB7 Look: drag \xB7 Use: E \xB7 Jump: Space \xB7 Run: Shift \xB7 Map: M \xB7 Build: B \xB7 Photo: P",buildTitle:"Build and upgrade",buildIntro:"Bring metal, ice and science home from expeditions to build more.",built:"Built",buy:"Build it",cost:"Cost",notEnough:"Not enough yet",mapTitle:"Where shall we go?",mapIntro:"Pick a place on Mars. A hopper rocket will fly you there.",fly:"Fly there",home:"Fly home",here:"You are here",km:"km away",visited:"Visited",difficulty:"Challenge",objectives:"Mission",allDone:"All done! Fly home from the landing spot, or keep exploring.",reward:"Reward",wardrobeTitle:"Suit locker",wardrobeIntro:"Earn science to unlock new suits.",locked:"Locked",wear:"Wear",photoHint:"Drag to move the camera \xB7 Snap to save",snap:"Snap",postcard:"Postcard",saveImage:"Save picture",exitPhoto:"Back to the game",settings:"Settings",quality:"Graphics",low:"Fast",medium:"Nice",high:"Best",motion:"Less motion",realTime:"Use the real time on Mars",sound:"Sound",language:"\u09AC\u09BE\u0982\u09B2\u09BE",hubLink:"Mission Hub",hopper:"Hopper rocket",board:"Board the hopper",landed:"Touchdown!",droneBattery:"Drone battery",droneDone:"Drone battery low. Flying home!",droneReveal:"The drone spotted something!",collected:"Collected!",objectiveDone:"Objective complete!",siteDone:"Mission complete! Shabbash!",realNow:"Real Mars right now",marsYear:"Mars Year",season:"season",dustSeason:"Dust storm season",earthDelay:"Radio to Earth takes",minutes:"min",phobosJump:"Low gravity! Real Phobos jumps would last over 20 minutes."},bn:{title:"\u09AE\u0999\u09CD\u0997\u09B2 \u0995\u09B2\u09CB\u09A8\u09BF",loading:"\u09A4\u09CB\u09AE\u09BE\u09B0 \u09AE\u0999\u09CD\u0997\u09B2 \u0998\u09BE\u0981\u099F\u09BF \u09A4\u09C8\u09B0\u09BF \u09B9\u099A\u09CD\u099B\u09C7\u2026",start:"\u09AE\u09BF\u09B6\u09A8 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09CB",continue:"\u099A\u09BE\u09B2\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u0993",power:"\u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE",water:"\u09AA\u09BE\u09A8\u09BF",oxygen:"\u0985\u0995\u09CD\u09B8\u09BF\u099C\u09C7\u09A8",food:"\u0996\u09BE\u09AC\u09BE\u09B0",metal:"\u09A7\u09BE\u09A4\u09C1",ice:"\u09AC\u09B0\u09AB",science:"\u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8",sol:"\u09B8\u09B2",day:"\u09A6\u09BF\u09A8",night:"\u09B0\u09BE\u09A4",inside:"\u09AD\u09C7\u09A4\u09B0\u09C7",outside:"\u09AC\u09BE\u0987\u09B0\u09C7",build:"\u09A4\u09C8\u09B0\u09BF",map:"\u09AD\u09CD\u09B0\u09AE\u09A3",photo:"\u099B\u09AC\u09BF",menu:"\u09AE\u09C7\u09A8\u09C1",drone:"\u09A1\u09CD\u09B0\u09CB\u09A8",jump:"\u09B2\u09BE\u09AB",act:"\u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0",hold:"\u099A\u09C7\u09AA\u09C7 \u09A7\u09B0\u09CB",tap:"\u099A\u09BE\u09AA\u09CB",drive:"\u09B0\u09CB\u09AD\u09BE\u09B0 \u099A\u09BE\u09B2\u09BE\u0993",leaveRover:"\u09A8\u09C7\u09AE\u09C7 \u09AF\u09BE\u0993",close:"\u09AC\u09A8\u09CD\u09A7",emergency:"\u09B0\u09B8\u09A6 \u0995\u09AE! \u09A6\u09B2 \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6 \u09AE\u09CB\u09A1\u09C7 \u0986\u099B\u09C7\u0964 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09A0\u09BF\u0995 \u0995\u09B0\u09CB, \u09B8\u09AC \u0986\u09AC\u09BE\u09B0 \u09AD\u09BE\u09B2\u09CB \u09B9\u09AC\u09C7\u0964",keys:"\u099A\u09B2\u09BE: WASD / \u09A4\u09C0\u09B0 \xB7 \u09A6\u09C7\u0996\u09BE: \u099F\u09BE\u09A8\u09CB \xB7 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0: E \xB7 \u09B2\u09BE\u09AB: Space \xB7 \u09A6\u09CC\u09A1\u09BC: Shift \xB7 \u09AE\u09BE\u09A8\u099A\u09BF\u09A4\u09CD\u09B0: M \xB7 \u09A4\u09C8\u09B0\u09BF: B \xB7 \u099B\u09AC\u09BF: P",buildTitle:"\u09A4\u09C8\u09B0\u09BF \u0993 \u0989\u09A8\u09CD\u09A8\u09A4\u09BF",buildIntro:"\u0985\u09AD\u09BF\u09AF\u09BE\u09A8 \u09A5\u09C7\u0995\u09C7 \u09A7\u09BE\u09A4\u09C1, \u09AC\u09B0\u09AB \u0986\u09B0 \u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8 \u098F\u09A8\u09C7 \u0986\u09B0\u0993 \u0995\u09BF\u099B\u09C1 \u09AC\u09BE\u09A8\u09BE\u0993\u0964",built:"\u09A4\u09C8\u09B0\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7",buy:"\u09AC\u09BE\u09A8\u09BE\u0993",cost:"\u0996\u09B0\u099A",notEnough:"\u098F\u0996\u09A8\u09CB \u09AF\u09A5\u09C7\u09B7\u09CD\u099F \u09A8\u09C7\u0987",mapTitle:"\u0995\u09CB\u09A5\u09BE\u09AF\u09BC \u09AF\u09BE\u09AC\u09C7?",mapIntro:"\u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u098F\u0995\u099F\u09BE \u099C\u09BE\u09AF\u09BC\u0997\u09BE \u09AC\u09C7\u099B\u09C7 \u09A8\u09BE\u0993\u0964 \u098F\u0995\u099F\u09BE \u09B9\u09AA\u09BE\u09B0 \u09B0\u0995\u09C7\u099F \u09A4\u09CB\u09AE\u09BE\u0995\u09C7 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09AC\u09C7\u0964",fly:"\u0989\u09A1\u09BC\u09C7 \u09AF\u09BE\u0993",home:"\u09AC\u09BE\u09A1\u09BC\u09BF \u09AB\u09C7\u09B0\u09CB",here:"\u09A4\u09C1\u09AE\u09BF \u098F\u0996\u09BE\u09A8\u09C7",km:"\u0995\u09BF\u09AE\u09BF \u09A6\u09C2\u09B0\u09C7",visited:"\u0998\u09C1\u09B0\u09C7 \u098F\u09B8\u09C7\u099B",difficulty:"\u099A\u09CD\u09AF\u09BE\u09B2\u09C7\u099E\u09CD\u099C",objectives:"\u09AE\u09BF\u09B6\u09A8",allDone:"\u09B8\u09AC \u09B6\u09C7\u09B7! \u0985\u09AC\u09A4\u09B0\u09A3\u09C7\u09B0 \u099C\u09BE\u09AF\u09BC\u0997\u09BE \u09A5\u09C7\u0995\u09C7 \u09AC\u09BE\u09A1\u09BC\u09BF \u09AB\u09C7\u09B0\u09CB, \u09AC\u09BE \u0986\u09B0\u0993 \u0998\u09C1\u09B0\u09C7 \u09A6\u09C7\u0996\u09CB\u0964",reward:"\u09AA\u09C1\u09B0\u09B8\u09CD\u0995\u09BE\u09B0",wardrobeTitle:"\u09B8\u09CD\u09AF\u09C1\u099F \u09B2\u0995\u09BE\u09B0",wardrobeIntro:"\u09A8\u09A4\u09C1\u09A8 \u09B8\u09CD\u09AF\u09C1\u099F \u0996\u09C1\u09B2\u09A4\u09C7 \u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8 \u09AA\u09AF\u09BC\u09C7\u09A8\u09CD\u099F \u099C\u09C7\u09A4\u09CB\u0964",locked:"\u09AC\u09A8\u09CD\u09A7",wear:"\u09AA\u09B0\u09CB",photoHint:"\u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE \u09B8\u09B0\u09BE\u09A4\u09C7 \u099F\u09BE\u09A8\u09CB \xB7 \u09B8\u09C7\u09AD \u0995\u09B0\u09A4\u09C7 \u09B8\u09CD\u09A8\u09CD\u09AF\u09BE\u09AA",snap:"\u09B8\u09CD\u09A8\u09CD\u09AF\u09BE\u09AA",postcard:"\u09AA\u09CB\u09B8\u09CD\u099F\u0995\u09BE\u09B0\u09CD\u09A1",saveImage:"\u099B\u09AC\u09BF \u09B8\u09C7\u09AD \u0995\u09B0\u09CB",exitPhoto:"\u0996\u09C7\u09B2\u09BE\u09AF\u09BC \u09AB\u09C7\u09B0\u09CB",settings:"\u09B8\u09C7\u099F\u09BF\u0982\u09B8",quality:"\u0997\u09CD\u09B0\u09BE\u09AB\u09BF\u0995\u09CD\u09B8",low:"\u09A6\u09CD\u09B0\u09C1\u09A4",medium:"\u09B8\u09C1\u09A8\u09CD\u09A6\u09B0",high:"\u09B8\u09C7\u09B0\u09BE",motion:"\u0995\u09AE \u09A8\u09A1\u09BC\u09BE\u099A\u09A1\u09BC\u09BE",realTime:"\u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u0986\u09B8\u09B2 \u09B8\u09AE\u09AF\u09BC \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09CB",sound:"\u09B6\u09AC\u09CD\u09A6",language:"English",hubLink:"\u09AE\u09BF\u09B6\u09A8 \u09B9\u09BE\u09AC",hopper:"\u09B9\u09AA\u09BE\u09B0 \u09B0\u0995\u09C7\u099F",board:"\u09B9\u09AA\u09BE\u09B0\u09C7 \u0993\u09A0\u09CB",landed:"\u0985\u09AC\u09A4\u09B0\u09A3!",droneBattery:"\u09A1\u09CD\u09B0\u09CB\u09A8\u09C7\u09B0 \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09BF",droneDone:"\u09A1\u09CD\u09B0\u09CB\u09A8\u09C7\u09B0 \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09BF \u0995\u09AE\u0964 \u09AC\u09BE\u09A1\u09BC\u09BF \u09AB\u09BF\u09B0\u099B\u09C7!",droneReveal:"\u09A1\u09CD\u09B0\u09CB\u09A8 \u0995\u09BF\u099B\u09C1 \u098F\u0995\u099F\u09BE \u09A6\u09C7\u0996\u09C7\u099B\u09C7!",collected:"\u09B8\u0982\u0997\u09CD\u09B0\u09B9 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7!",objectiveDone:"\u09B2\u0995\u09CD\u09B7\u09CD\u09AF \u09AA\u09C2\u09B0\u09A3!",siteDone:"\u09AE\u09BF\u09B6\u09A8 \u09B8\u09AB\u09B2! \u09B6\u09BE\u09AC\u09BE\u09B6!",realNow:"\u098F\u0996\u09A8 \u0986\u09B8\u09B2 \u09AE\u0999\u09CD\u0997\u09B2\u09C7",marsYear:"\u09AE\u0999\u09CD\u0997\u09B2 \u09AC\u099B\u09B0",season:"\u098B\u09A4\u09C1",dustSeason:"\u09A7\u09C1\u09B2\u09BF\u099D\u09A1\u09BC\u09C7\u09B0 \u09AE\u09CC\u09B8\u09C1\u09AE",earthDelay:"\u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u09A4\u09C7 \u09B0\u09C7\u09A1\u09BF\u0993 \u09AF\u09C7\u09A4\u09C7 \u09B2\u09BE\u0997\u09C7",minutes:"\u09AE\u09BF\u09A8\u09BF\u099F",phobosJump:"\u0995\u09AE \u09AE\u09BE\u09A7\u09CD\u09AF\u09BE\u0995\u09B0\u09CD\u09B7\u09A3! \u09AB\u09CB\u09AC\u09CB\u09B8\u09C7 \u0986\u09B8\u09B2 \u09B2\u09BE\u09AB \u09E8\u09E6 \u09AE\u09BF\u09A8\u09BF\u099F\u09C7\u09B0 \u09AC\u09C7\u09B6\u09BF \u099A\u09B2\u09A4\u0964"}},qs={dustStorm:{icon:"\u{1F32A}\uFE0F",en:["Dust storm coming!","The sky will go dark and the solar panels will make less power. Stay safe, and brush the panels clean when it passes."],bn:["\u09A7\u09C1\u09B2\u09BF\u099D\u09A1\u09BC \u0986\u09B8\u099B\u09C7!","\u0986\u0995\u09BE\u09B6 \u0985\u09A8\u09CD\u09A7\u0995\u09BE\u09B0 \u09B9\u09AC\u09C7 \u0986\u09B0 \u09B8\u09CB\u09B2\u09BE\u09B0 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u0995\u09AE \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u09AC\u09BE\u09A8\u09BE\u09AC\u09C7\u0964 \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6\u09C7 \u09A5\u09BE\u0995\u09CB, \u099D\u09A1\u09BC \u09A5\u09BE\u09AE\u09B2\u09C7 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u09AC\u09CD\u09B0\u09BE\u09B6 \u0995\u09B0\u09C7 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0995\u09B0\u09CB\u0964"]},dustStormCleanup:{icon:"\u{1F9F9}",en:["Panels are dusty","The storm is over! Go out to the solar farm and brush the panels."],bn:["\u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2\u09C7 \u09A7\u09C1\u09B2\u09CB","\u099D\u09A1\u09BC \u09A5\u09C7\u09AE\u09C7\u099B\u09C7! \u09B8\u09CB\u09B2\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u09AC\u09CD\u09B0\u09BE\u09B6 \u0995\u09B0\u09CB\u0964"]},leak:{icon:"\u{1F4A8}",en:["Air leak!","A tiny space rock made a hole. Follow the hissing and patch it before the oxygen runs low."],bn:["\u09AC\u09BE\u09A4\u09BE\u09B8 \u09B2\u09BF\u0995!","\u098F\u0995\u099F\u09BE \u099B\u09CB\u099F\u09CD\u099F \u09AE\u09B9\u09BE\u0995\u09BE\u09B6-\u09AA\u09BE\u09A5\u09B0 \u09AB\u09C1\u099F\u09CB \u0995\u09B0\u09C7\u099B\u09C7\u0964 \u09B9\u09BF\u09B8\u09B9\u09BF\u09B8 \u09B6\u09AC\u09CD\u09A6 \u09A7\u09B0\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u0985\u0995\u09CD\u09B8\u09BF\u099C\u09C7\u09A8 \u0995\u09AE\u09BE\u09B0 \u0986\u0997\u09C7 \u099C\u09CB\u09A1\u09BC\u09BE \u09B2\u09BE\u0997\u09BE\u0993\u0964"]},mold:{icon:"\u{1F344}",en:["Mold on the plants!","It is too damp in the greenhouse. Fix the humidity at the climate panel. (This really happened to flowers on the space station!)"],bn:["\u0997\u09BE\u099B\u09C7 \u099B\u09A4\u09CD\u09B0\u09BE\u0995!","\u0997\u09CD\u09B0\u09BF\u09A8\u09B9\u09BE\u0989\u09B8\u09C7 \u09AC\u09C7\u09B6\u09BF \u09B8\u09CD\u09AF\u09BE\u0981\u09A4\u09B8\u09C7\u0981\u09A4\u09C7\u0964 \u0986\u09AC\u09B9\u09BE\u0993\u09AF\u09BC\u09BE \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2\u09C7 \u0986\u09B0\u09CD\u09A6\u09CD\u09B0\u09A4\u09BE \u09A0\u09BF\u0995 \u0995\u09B0\u09CB\u0964 (\u09AE\u09B9\u09BE\u0995\u09BE\u09B6 \u09B8\u09CD\u099F\u09C7\u09B6\u09A8\u09C7\u09B0 \u09AB\u09C1\u09B2\u09C7 \u09B8\u09A4\u09CD\u09AF\u09BF\u0987 \u098F\u09AE\u09A8 \u09B9\u09AF\u09BC\u09C7\u099B\u09BF\u09B2!)"]},solarFlare:{icon:"\u2600\uFE0F",en:["Solar flare!","The Sun sent out a burst of radiation. Everyone into the storm shelter in the habitat: its water walls keep you safe."],bn:["\u09B8\u09CC\u09B0\u09B6\u09BF\u0996\u09BE!","\u09B8\u09C2\u09B0\u09CD\u09AF \u09A5\u09C7\u0995\u09C7 \u09AC\u09BF\u0995\u09BF\u09B0\u09A3 \u0986\u09B8\u099B\u09C7\u0964 \u09B8\u09AC\u09BE\u0987 \u09AC\u09BE\u09B8\u09B8\u09CD\u09A5\u09BE\u09A8\u09C7\u09B0 \u099D\u09A1\u09BC\u09C7\u09B0 \u0986\u09B6\u09CD\u09B0\u09AF\u09BC\u09C7 \u099A\u09B2\u09CB: \u098F\u09B0 \u09AA\u09BE\u09A8\u09BF\u09B0 \u09A6\u09C7\u09AF\u09BC\u09BE\u09B2 \u09A4\u09CB\u09AE\u09BE\u0995\u09C7 \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6 \u09B0\u09BE\u0996\u09AC\u09C7\u0964"]},filterClog:{icon:"\u{1F6B0}",en:["Water filter clogged!","Mars dust got into the water plant. Tap the filters to shake them clean."],bn:["\u09AA\u09BE\u09A8\u09BF\u09B0 \u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0 \u0986\u099F\u0995\u09C7 \u0997\u09C7\u099B\u09C7!","\u09AA\u09BE\u09A8\u09BF\u09B0 \u0995\u09BE\u09B0\u0996\u09BE\u09A8\u09BE\u09AF\u09BC \u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u09A7\u09C1\u09B2\u09CB \u09A2\u09C1\u0995\u09C7\u099B\u09C7\u0964 \u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0\u0997\u09C1\u09B2\u09CB \u099A\u09C7\u09AA\u09C7 \u099A\u09C7\u09AA\u09C7 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0995\u09B0\u09CB\u0964"]},drillJam:{icon:"\u{1F9CA}",en:["Ice drill jammed!","The drill hit a hard rock. Go outside and restart it at just the right moment."],bn:["\u09AC\u09B0\u09AB \u09A1\u09CD\u09B0\u09BF\u09B2 \u0986\u099F\u0995\u09C7 \u0997\u09C7\u099B\u09C7!","\u09A1\u09CD\u09B0\u09BF\u09B2 \u09B6\u0995\u09CD\u09A4 \u09AA\u09BE\u09A5\u09B0\u09C7 \u09B2\u09C7\u0997\u09C7\u099B\u09C7\u0964 \u09AC\u09BE\u0987\u09B0\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u09A0\u09BF\u0995 \u09B8\u09AE\u09AF\u09BC\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u09CB\u0964"]},powerSurge:{icon:"\u26A1",en:["Power surge!","The breakers tripped. Switch them back on in the right order in the power plant."],bn:["\u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09A4\u09C7\u09B0 \u099D\u09BE\u0981\u0995\u09C1\u09A8\u09BF!","\u09AC\u09CD\u09B0\u09C7\u0995\u09BE\u09B0 \u09AA\u09A1\u09BC\u09C7 \u0997\u09C7\u099B\u09C7\u0964 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE\u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u09A0\u09BF\u0995 \u0995\u09CD\u09B0\u09AE\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u09CB\u0964"]},comms:{icon:"\u{1F4E1}",en:["Lost contact with Earth!","The radio dish slipped. Turn it until the signal is strong again."],bn:["\u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u09A8\u09C7\u0987!","\u09B0\u09C7\u09A1\u09BF\u0993 \u09A1\u09BF\u09B6 \u09B8\u09B0\u09C7 \u0997\u09C7\u099B\u09C7\u0964 \u09B8\u09BF\u0997\u09A8\u09CD\u09AF\u09BE\u09B2 \u09B6\u0995\u09CD\u09A4 \u09A8\u09BE \u09B9\u0993\u09AF\u09BC\u09BE \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u0998\u09CB\u09B0\u09BE\u0993\u0964"]},coldSnap:{icon:"\u{1F976}",en:["Cold snap!","Tonight is extra cold, so the heaters need more power. Keep an eye on the battery."],bn:["\u09B9\u09A0\u09BE\u09CE \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE!","\u0986\u099C \u09B0\u09BE\u09A4 \u0996\u09C1\u09AC \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE, \u09A4\u09BE\u0987 \u09B9\u09BF\u099F\u09BE\u09B0\u09C7 \u09AC\u09C7\u09B6\u09BF \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u09B2\u09BE\u0997\u09AC\u09C7\u0964 \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09BF\u09B0 \u09A6\u09BF\u0995\u09C7 \u09A8\u099C\u09B0 \u09B0\u09BE\u0996\u09CB\u0964"]},roverStuck:{icon:"\u{1F6DE}",en:["Patrol rover stuck!","Our robot rover got stuck in soft sand. Go and give it a push."],bn:["\u099F\u09B9\u09B2 \u09B0\u09CB\u09AD\u09BE\u09B0 \u0986\u099F\u0995\u09C7 \u0997\u09C7\u099B\u09C7!","\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B0\u09CB\u09AC\u099F \u09B0\u09CB\u09AD\u09BE\u09B0 \u09A8\u09B0\u09AE \u09AC\u09BE\u09B2\u09BF\u09A4\u09C7 \u0986\u099F\u0995\u09C7 \u0997\u09C7\u099B\u09C7\u0964 \u0997\u09BF\u09AF\u09BC\u09C7 \u098F\u0995\u099F\u09C1 \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u09A6\u09BE\u0993\u0964"]},supplyDrop:{icon:"\u{1F4E6}",en:["Supplies from Earth!","A cargo rocket is landing. Go and collect the crate."],bn:["\u09AA\u09C3\u09A5\u09BF\u09AC\u09C0 \u09A5\u09C7\u0995\u09C7 \u09B0\u09B8\u09A6!","\u098F\u0995\u099F\u09BE \u09AE\u09BE\u09B2\u09AC\u09BE\u09B9\u09C0 \u09B0\u0995\u09C7\u099F \u09A8\u09BE\u09AE\u099B\u09C7\u0964 \u0997\u09BF\u09AF\u09BC\u09C7 \u09AC\u09BE\u0995\u09CD\u09B8\u099F\u09BE \u09A8\u09BF\u09AF\u09BC\u09C7 \u098F\u09B8\u09CB\u0964"]},dustDevilClean:{icon:"\u{1F300}",en:["Lucky gust!","A dust devil swept over the solar farm and blew the panels clean! This really helped NASA's Spirit and Opportunity rovers."],bn:["\u09AD\u09BE\u0997\u09CD\u09AF\u09AC\u09BE\u09A8 \u09A6\u09AE\u0995\u09BE \u09B9\u09BE\u0993\u09AF\u09BC\u09BE!","\u098F\u0995\u099F\u09BE \u09A7\u09C1\u09B2\u09CB\u09B0 \u0998\u09C2\u09B0\u09CD\u09A3\u09BF \u09B8\u09CB\u09B2\u09BE\u09B0 \u0996\u09BE\u09AE\u09BE\u09B0\u09C7\u09B0 \u0993\u09AA\u09B0 \u09A6\u09BF\u09AF\u09BC\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0995\u09B0\u09C7 \u09A6\u09BF\u09AF\u09BC\u09C7\u099B\u09C7! \u09A8\u09BE\u09B8\u09BE\u09B0 \u09B8\u09CD\u09AA\u09BF\u09B0\u09BF\u099F \u0986\u09B0 \u0985\u09AA\u09B0\u099A\u09C1\u09A8\u09BF\u099F\u09BF \u09B0\u09CB\u09AD\u09BE\u09B0 \u09B8\u09A4\u09CD\u09AF\u09BF\u0987 \u098F\u09AD\u09BE\u09AC\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u09AA\u09C7\u09AF\u09BC\u09C7\u099B\u09BF\u09B2\u0964"]},meteorite:{icon:"\u2604\uFE0F",en:["Shooting star!","A meteorite landed near the base. Go and find it: it is full of useful metal."],bn:["\u0989\u09B2\u09CD\u0995\u09BE!","\u0998\u09BE\u0981\u099F\u09BF\u09B0 \u0995\u09BE\u099B\u09C7 \u098F\u0995\u099F\u09BE \u0989\u09B2\u09CD\u0995\u09BE\u09AA\u09BF\u09A3\u09CD\u09A1 \u09AA\u09A1\u09BC\u09C7\u099B\u09C7\u0964 \u0996\u09C1\u0981\u099C\u09C7 \u0986\u09A8\u09CB: \u098F\u09A4\u09C7 \u0985\u09A8\u09C7\u0995 \u0995\u09BE\u099C\u09C7\u09B0 \u09A7\u09BE\u09A4\u09C1 \u0986\u099B\u09C7\u0964"]}},Sm={hold:{en:"Hold to fix",bn:"\u09A0\u09BF\u0995 \u0995\u09B0\u09A4\u09C7 \u099A\u09C7\u09AA\u09C7 \u09A7\u09B0\u09CB"},scrub:{en:"Hold to brush",bn:"\u09AC\u09CD\u09B0\u09BE\u09B6 \u0995\u09B0\u09A4\u09C7 \u099A\u09C7\u09AA\u09C7 \u09A7\u09B0\u09CB"},tap:{en:"Tap fast!",bn:"\u09A6\u09CD\u09B0\u09C1\u09A4 \u099A\u09BE\u09AA\u09CB!"},timing:{en:"Press when it is green",bn:"\u09B8\u09AC\u09C1\u099C \u09B9\u09B2\u09C7 \u099A\u09BE\u09AA\u09CB"},sequence:{en:"Switch on 1, 2, 3\u2026",bn:"\u09E7, \u09E8, \u09E9\u2026 \u0995\u09CD\u09B0\u09AE\u09C7 \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u09CB"},align:{en:"Turn the dish to the strongest signal",bn:"\u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u09B6\u0995\u09CD\u09A4 \u09B8\u09BF\u0997\u09A8\u09CD\u09AF\u09BE\u09B2\u09C7\u09B0 \u09A6\u09BF\u0995\u09C7 \u09A1\u09BF\u09B6 \u0998\u09CB\u09B0\u09BE\u0993"},balance:{en:"Keep the humidity in the green zone",bn:"\u0986\u09B0\u09CD\u09A6\u09CD\u09B0\u09A4\u09BE \u09B8\u09AC\u09C1\u099C \u0985\u0982\u09B6\u09C7 \u09B0\u09BE\u0996\u09CB"},fetch:{en:"Pick it up",bn:"\u09A4\u09C1\u09B2\u09C7 \u09A8\u09BE\u0993"},shelter:{en:"Get into the shelter!",bn:"\u0986\u09B6\u09CD\u09B0\u09AF\u09BC\u09C7 \u09A2\u09CB\u0995\u09CB!"}},wm={weather:{en:"Mars weather stations measure wind, temperature and air pressure. The air on Mars is about 100 times thinner than on Earth.",bn:"\u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u0986\u09AC\u09B9\u09BE\u0993\u09AF\u09BC\u09BE \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0 \u09AC\u09BE\u09A4\u09BE\u09B8, \u09A4\u09BE\u09AA\u09AE\u09BE\u09A4\u09CD\u09B0\u09BE \u0986\u09B0 \u09AC\u09BE\u09AF\u09BC\u09C1\u099A\u09BE\u09AA \u09AE\u09BE\u09AA\u09C7\u0964 \u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u09AC\u09BE\u09A4\u09BE\u09B8 \u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u09B0 \u099A\u09C7\u09AF\u09BC\u09C7 \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09E7\u09E6\u09E6 \u0997\u09C1\u09A3 \u09AA\u09BE\u09A4\u09B2\u09BE\u0964",source:"https://science.nasa.gov/mars/facts/"},reactor:{en:"NASA tested a small nuclear power unit called Kilopower in 2018. Power that works day and night, even in dust storms, would help a Mars base.",bn:"\u09A8\u09BE\u09B8\u09BE \u09E8\u09E6\u09E7\u09EE \u09B8\u09BE\u09B2\u09C7 \u0995\u09BF\u09B2\u09CB\u09AA\u09BE\u0993\u09AF\u09BC\u09BE\u09B0 \u09A8\u09BE\u09AE\u09C7 \u099B\u09CB\u099F \u09AA\u09BE\u09B0\u09AE\u09BE\u09A3\u09AC\u09BF\u0995 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u0987\u0989\u09A8\u09BF\u099F \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C7\u099B\u09C7\u0964 \u09A6\u09BF\u09A8-\u09B0\u09BE\u09A4, \u09A7\u09C1\u09B2\u09BF\u099D\u09A1\u09BC\u09C7\u0993 \u099A\u09B2\u09BE \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u09AE\u0999\u09CD\u0997\u09B2 \u0998\u09BE\u0981\u099F\u09BF\u09B0 \u0995\u09BE\u099C\u09C7 \u09B2\u09BE\u0997\u09AC\u09C7\u0964",source:"https://www.nasa.gov/"},fuel:{en:"A fuel plant can make rocket fuel from Mars air and ice. Astronauts could fill up their rocket for the trip home!",bn:"\u099C\u09CD\u09AC\u09BE\u09B2\u09BE\u09A8\u09BF \u0995\u09BE\u09B0\u0996\u09BE\u09A8\u09BE \u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u09AC\u09BE\u09A4\u09BE\u09B8 \u0986\u09B0 \u09AC\u09B0\u09AB \u09A5\u09C7\u0995\u09C7 \u09B0\u0995\u09C7\u099F\u09C7\u09B0 \u099C\u09CD\u09AC\u09BE\u09B2\u09BE\u09A8\u09BF \u09AC\u09BE\u09A8\u09BE\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u09A8\u09AD\u09CB\u099A\u09BE\u09B0\u09C0\u09B0\u09BE \u09AC\u09BE\u09A1\u09BC\u09BF \u09AB\u09C7\u09B0\u09BE\u09B0 \u09B0\u0995\u09C7\u099F \u09AD\u09B0\u09C7 \u09A8\u09BF\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7!",source:"https://www.nasa.gov/"},printerYard:{en:"Engineers are testing 3D printers that build walls from soil. On Mars, the ground itself could become a house.",bn:"\u09AA\u09CD\u09B0\u0995\u09CC\u09B6\u09B2\u09C0\u09B0\u09BE \u09AE\u09BE\u099F\u09BF \u09A6\u09BF\u09AF\u09BC\u09C7 \u09A6\u09C7\u09AF\u09BC\u09BE\u09B2 \u09AC\u09BE\u09A8\u09BE\u09A8\u09CB \u09A5\u09CD\u09B0\u09BF\u09A1\u09BF \u09AA\u09CD\u09B0\u09BF\u09A8\u09CD\u099F\u09BE\u09B0 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u099B\u09C7\u09A8\u0964 \u09AE\u0999\u09CD\u0997\u09B2\u09C7 \u09AE\u09BE\u099F\u09BF\u0987 \u09B9\u09AF\u09BC\u09C7 \u09AF\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u0998\u09B0\u0964",source:"https://www.nasa.gov/"},moxie:{en:"This machine works like MOXIE on Perseverance: it splits carbon dioxide at about 800 \xB0C to make oxygen.",bn:"\u098F\u0987 \u09AF\u09A8\u09CD\u09A4\u09CD\u09B0 \u09AA\u09BE\u09B0\u09B8\u09BF\u09AD\u09BF\u09AF\u09BC\u09BE\u09B0\u09C7\u09A8\u09CD\u09B8\u09C7\u09B0 \u09AE\u0995\u09CD\u09B8\u09BF\u09B0 \u09AE\u09A4\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7: \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09EE\u09E6\u09E6 \u09A1\u09BF\u0997\u09CD\u09B0\u09BF \u09B8\u09C7\u09B2\u09B8\u09BF\u09AF\u09BC\u09BE\u09B8\u09C7 \u0995\u09BE\u09B0\u09CD\u09AC\u09A8 \u09A1\u09BE\u0987-\u0985\u0995\u09CD\u09B8\u09BE\u0987\u09A1 \u09AD\u09C7\u0999\u09C7 \u0985\u0995\u09CD\u09B8\u09BF\u099C\u09C7\u09A8 \u09AC\u09BE\u09A8\u09BE\u09AF\u09BC\u0964",source:"https://www.nasa.gov/solar-system/nasas-oxygen-generating-experiment-moxie-completes-mars-mission/"},microscope:{en:"Rovers carry microscopes too. Curiosity's MAHLI camera can see details smaller than a grain of sand.",bn:"\u09B0\u09CB\u09AD\u09BE\u09B0\u0993 \u0985\u09A3\u09C1\u09AC\u09C0\u0995\u09CD\u09B7\u09A3 \u09AF\u09A8\u09CD\u09A4\u09CD\u09B0 \u09AC\u09AF\u09BC\u09C7 \u09A8\u09C7\u09AF\u09BC\u0964 \u0995\u09BF\u0989\u09B0\u09BF\u0993\u09B8\u09BF\u099F\u09BF\u09B0 \u09AE\u09BE\u09B9\u09B2\u09BF \u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE \u09AC\u09BE\u09B2\u09C1\u09B0 \u0995\u09A3\u09BE\u09B0 \u099A\u09C7\u09AF\u09BC\u09C7 \u099B\u09CB\u099F \u099C\u09BF\u09A8\u09BF\u09B8 \u09A6\u09C7\u0996\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964",source:"https://science.nasa.gov/mission/msl-curiosity/science-instruments/"},telescope:{en:"From Mars, Earth looks like a bright blue evening star. Curiosity took a photo of it in 2014.",bn:"\u09AE\u0999\u09CD\u0997\u09B2 \u09A5\u09C7\u0995\u09C7 \u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u0995\u09C7 \u0989\u099C\u09CD\u099C\u09CD\u09AC\u09B2 \u09A8\u09C0\u09B2 \u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE\u09A4\u09BE\u09B0\u09BE\u09B0 \u09AE\u09A4\u09CB \u09A6\u09C7\u0996\u09BE\u09AF\u09BC\u0964 \u0995\u09BF\u0989\u09B0\u09BF\u0993\u09B8\u09BF\u099F\u09BF \u09E8\u09E6\u09E7\u09EA \u09B8\u09BE\u09B2\u09C7 \u098F\u09B0 \u099B\u09AC\u09BF \u09A4\u09C1\u09B2\u09C7\u099B\u09BF\u09B2\u0964",source:"https://science.nasa.gov/mars/facts/"},kitchen:{en:"Astronauts on the space station eat about three meals a day, and they love spicy food because flavours taste weaker in space!",bn:"\u09AE\u09B9\u09BE\u0995\u09BE\u09B6 \u09B8\u09CD\u099F\u09C7\u09B6\u09A8\u09C7 \u09A8\u09AD\u09CB\u099A\u09BE\u09B0\u09C0\u09B0\u09BE \u09A6\u09BF\u09A8\u09C7 \u09AA\u09CD\u09B0\u09BE\u09AF\u09BC \u09A4\u09BF\u09A8\u09AC\u09BE\u09B0 \u0996\u09BE\u09AF\u09BC, \u0986\u09B0 \u099D\u09BE\u09B2 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7, \u0995\u09BE\u09B0\u09A3 \u09AE\u09B9\u09BE\u0995\u09BE\u09B6\u09C7 \u09B8\u09CD\u09AC\u09BE\u09A6 \u0995\u09AE \u09B2\u09BE\u0997\u09C7!",source:"https://www.nasa.gov/"},printer:{en:"Our 3D printer makes spare parts, so a broken wheel does not have to wait months for a rocket from Earth.",bn:"\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09A5\u09CD\u09B0\u09BF\u09A1\u09BF \u09AA\u09CD\u09B0\u09BF\u09A8\u09CD\u099F\u09BE\u09B0 \u0996\u09C1\u099A\u09B0\u09BE \u09AF\u09A8\u09CD\u09A4\u09CD\u09B0\u09BE\u0982\u09B6 \u09AC\u09BE\u09A8\u09BE\u09AF\u09BC, \u09A4\u09BE\u0987 \u09AD\u09BE\u0999\u09BE \u099A\u09BE\u0995\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u09AA\u09C3\u09A5\u09BF\u09AC\u09C0 \u09A5\u09C7\u0995\u09C7 \u09B0\u0995\u09C7\u099F\u09C7\u09B0 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE\u09AF\u09BC \u09AE\u09BE\u09B8 \u09A7\u09B0\u09C7 \u09AC\u09B8\u09C7 \u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AF\u09BC \u09A8\u09BE\u0964",source:"https://www.nasa.gov/"},powerdesk:{en:"Solar panels only work in daylight, so the base stores energy in batteries for the long cold night.",bn:"\u09B8\u09CB\u09B2\u09BE\u09B0 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u09B6\u09C1\u09A7\u09C1 \u09A6\u09BF\u09A8\u09C7 \u0995\u09BE\u099C \u0995\u09B0\u09C7, \u09A4\u09BE\u0987 \u09B2\u09AE\u09CD\u09AC\u09BE \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09B0\u09BE\u09A4\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0998\u09BE\u0981\u099F\u09BF \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09BF\u09A4\u09C7 \u09B6\u0995\u09CD\u09A4\u09BF \u099C\u09AE\u09BF\u09AF\u09BC\u09C7 \u09B0\u09BE\u0996\u09C7\u0964",source:"https://science.nasa.gov/resource/insights-power-generation-after-landing-and-spring-2022/"},drill:{en:"NASA's maps show ice just under the ground in the northern plains. Our drill melts it into drinking water.",bn:"\u09A8\u09BE\u09B8\u09BE\u09B0 \u09AE\u09BE\u09A8\u099A\u09BF\u09A4\u09CD\u09B0\u09C7 \u0989\u09A4\u09CD\u09A4\u09B0\u09C7\u09B0 \u09B8\u09AE\u09AD\u09C2\u09AE\u09BF\u09A4\u09C7 \u09AE\u09BE\u099F\u09BF\u09B0 \u09A0\u09BF\u0995 \u09A8\u09BF\u099A\u09C7 \u09AC\u09B0\u09AB \u09A6\u09C7\u0996\u09BE \u09AF\u09BE\u09AF\u09BC\u0964 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09A1\u09CD\u09B0\u09BF\u09B2 \u09A4\u09BE \u0997\u09B2\u09BF\u09AF\u09BC\u09C7 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AA\u09BE\u09A8\u09BF \u09AC\u09BE\u09A8\u09BE\u09AF\u09BC\u0964",source:"https://science.nasa.gov/resource/swim-map-shows-subsurface-water-ice-on-mars/"},dish:{en:"Radio signals travel at the speed of light, but Mars is so far away that a message takes several minutes to reach Earth.",bn:"\u09B0\u09C7\u09A1\u09BF\u0993 \u09B8\u0982\u0995\u09C7\u09A4 \u0986\u09B2\u09CB\u09B0 \u0997\u09A4\u09BF\u09A4\u09C7 \u099A\u09B2\u09C7, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09AE\u0999\u09CD\u0997\u09B2 \u098F\u09A4 \u09A6\u09C2\u09B0\u09C7 \u09AF\u09C7 \u098F\u0995\u099F\u09BE \u09AC\u09BE\u09B0\u09CD\u09A4\u09BE \u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u09A4\u09C7 \u09AA\u09CC\u0981\u099B\u09BE\u09A4\u09C7 \u0995\u09AF\u09BC\u09C7\u0995 \u09AE\u09BF\u09A8\u09BF\u099F \u09B2\u09BE\u0997\u09C7\u0964",source:"https://science.nasa.gov/mars/facts/"},pad:{en:"Rockets land on a flat, hard pad so their engines do not blast rocks and dust everywhere.",bn:"\u09B0\u0995\u09C7\u099F \u09B8\u09AE\u09A4\u09B2 \u09B6\u0995\u09CD\u09A4 \u09AA\u09CD\u09AF\u09BE\u09A1\u09C7 \u09A8\u09BE\u09AE\u09C7, \u09AF\u09BE\u09A4\u09C7 \u0987\u099E\u09CD\u099C\u09BF\u09A8\u09C7\u09B0 \u09A7\u09BE\u0995\u09CD\u0995\u09BE\u09AF\u09BC \u09AA\u09BE\u09A5\u09B0 \u0986\u09B0 \u09A7\u09C1\u09B2\u09CB \u099A\u09BE\u09B0\u09A6\u09BF\u0995\u09C7 \u09A8\u09BE \u099B\u09A1\u09BC\u09BE\u09AF\u09BC\u0964",source:"https://www.nasa.gov/"}},Em={solar2:{icon:"\u2600\uFE0F",en:["More solar panels","10 more panels: more power on sunny days."],bn:["\u0986\u09B0\u0993 \u09B8\u09CB\u09B2\u09BE\u09B0 \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2","\u0986\u09B0\u0993 \u09E7\u09E6\u099F\u09BE \u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2: \u09B0\u09CB\u09A6\u09C7\u09B2\u09BE \u09A6\u09BF\u09A8\u09C7 \u09AC\u09C7\u09B6\u09BF \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE\u0964"]},reactor:{icon:"\u269B\uFE0F",en:["Fission power unit","Steady power day and night, even in dust storms. NASA tested one called Kilopower."],bn:["\u09AA\u09BE\u09B0\u09AE\u09BE\u09A3\u09AC\u09BF\u0995 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u0987\u0989\u09A8\u09BF\u099F","\u09A6\u09BF\u09A8-\u09B0\u09BE\u09A4, \u09A7\u09C1\u09B2\u09BF\u099D\u09A1\u09BC\u09C7\u0993 \u09B8\u09CD\u09A5\u09BF\u09B0 \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE\u0964 \u09A8\u09BE\u09B8\u09BE \u0995\u09BF\u09B2\u09CB\u09AA\u09BE\u0993\u09AF\u09BC\u09BE\u09B0 \u09A8\u09BE\u09AE\u09C7 \u098F\u0995\u099F\u09BE \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C7\u099B\u09C7\u0964"]},greenhouse2:{icon:"\u{1F33B}",en:["Second greenhouse","Grow more food for a bigger crew."],bn:["\u09A6\u09CD\u09AC\u09BF\u09A4\u09C0\u09AF\u09BC \u0997\u09CD\u09B0\u09BF\u09A8\u09B9\u09BE\u0989\u09B8","\u09AC\u09A1\u09BC \u09A6\u09B2\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0986\u09B0\u0993 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AB\u09B2\u09BE\u0993\u0964"]},observatory:{icon:"\u{1F52D}",en:["Observatory","A telescope dome. Earns extra science every sol."],bn:["\u09AE\u09BE\u09A8\u09AE\u09A8\u09CD\u09A6\u09BF\u09B0","\u09A6\u09C2\u09B0\u09AC\u09C0\u09A8\u09C7\u09B0 \u0997\u09AE\u09CD\u09AC\u09C1\u099C\u0964 \u09AA\u09CD\u09B0\u09A4\u09BF \u09B8\u09B2\u09C7 \u09AC\u09BE\u09A1\u09BC\u09A4\u09BF \u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8 \u09AA\u09AF\u09BC\u09C7\u09A8\u09CD\u099F\u0964"]},playroom:{icon:"\u{1F9F6}",en:["Kitty playroom","Ball pit, cat tree and a low-gravity trampoline. Happy crew!"],bn:["\u09AC\u09BF\u09A1\u09BC\u09BE\u09B2\u09A6\u09C7\u09B0 \u0996\u09C7\u09B2\u09BE\u0998\u09B0","\u09AC\u09B2 \u09AA\u09BF\u099F, \u09AC\u09BF\u09A1\u09BC\u09BE\u09B2 \u0997\u09BE\u099B \u0986\u09B0 \u0995\u09AE \u09AE\u09BE\u09A7\u09CD\u09AF\u09BE\u0995\u09B0\u09CD\u09B7\u09A3\u09C7\u09B0 \u099F\u09CD\u09B0\u09BE\u09AE\u09CD\u09AA\u09CB\u09B2\u09BF\u09A8\u0964 \u0996\u09C1\u09B6\u09BF \u09A6\u09B2!"]},fuel:{icon:"\u{1F680}",en:["Rocket fuel plant","Makes fuel from Mars air and ice, so hopper trips home are free."],bn:["\u09B0\u0995\u09C7\u099F \u099C\u09CD\u09AC\u09BE\u09B2\u09BE\u09A8\u09BF \u0995\u09BE\u09B0\u0996\u09BE\u09A8\u09BE","\u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u09AC\u09BE\u09A4\u09BE\u09B8 \u0986\u09B0 \u09AC\u09B0\u09AB \u09A5\u09C7\u0995\u09C7 \u099C\u09CD\u09AC\u09BE\u09B2\u09BE\u09A8\u09BF \u09AC\u09BE\u09A8\u09BE\u09AF\u09BC\u0964"]},printer:{icon:"\u{1F9F1}",en:["Brick printer","A robot that prints walls from Mars soil. Repairs go faster."],bn:["\u0987\u099F \u09AA\u09CD\u09B0\u09BF\u09A8\u09CD\u099F\u09BE\u09B0","\u09AE\u0999\u09CD\u0997\u09B2\u09C7\u09B0 \u09AE\u09BE\u099F\u09BF \u09A6\u09BF\u09AF\u09BC\u09C7 \u09A6\u09C7\u09AF\u09BC\u09BE\u09B2 \u099B\u09BE\u09AA\u09BE\u09A8\u09CB \u09B0\u09CB\u09AC\u099F\u0964 \u09AE\u09C7\u09B0\u09BE\u09AE\u09A4 \u09A6\u09CD\u09B0\u09C1\u09A4 \u09B9\u09AF\u09BC\u0964"]},drone:{icon:"\u{1F681}",en:["Helicopter drone","Fly like Ingenuity (press F) and spot hidden treasures from the air."],bn:["\u09B9\u09C7\u09B2\u09BF\u0995\u09AA\u09CD\u099F\u09BE\u09B0 \u09A1\u09CD\u09B0\u09CB\u09A8","\u0987\u09A8\u099C\u09C7\u09A8\u09C1\u0987\u099F\u09BF\u09B0 \u09AE\u09A4\u09CB \u0993\u09A1\u09BC\u09BE\u0993 (F \u099A\u09BE\u09AA\u09CB) \u0986\u09B0 \u0986\u0995\u09BE\u09B6 \u09A5\u09C7\u0995\u09C7 \u09B2\u09C1\u0995\u09BE\u09A8\u09CB \u099C\u09BF\u09A8\u09BF\u09B8 \u0996\u09CB\u0981\u099C\u09CB\u0964"]},batteries:{icon:"\u{1F50B}",en:["Bigger batteries","Store more power for long nights and storms."],bn:["\u09AC\u09A1\u09BC \u09AC\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09BF","\u09B2\u09AE\u09CD\u09AC\u09BE \u09B0\u09BE\u09A4 \u0986\u09B0 \u099D\u09A1\u09BC\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AC\u09C7\u09B6\u09BF \u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u099C\u09AE\u09BE\u0993\u0964"]}},Hr=[{id:"classic",science:0,suit:"#e9dcd1",trim:"#e79459",en:"Classic",bn:"\u0995\u09CD\u09B2\u09BE\u09B8\u09BF\u0995"},{id:"ocean",science:10,suit:"#dde8f3",trim:"#4c8fd6",en:"Ocean blue",bn:"\u09B8\u09BE\u0997\u09B0 \u09A8\u09C0\u09B2"},{id:"mango",science:20,suit:"#fff1cf",trim:"#f2a93b",en:"Mango",bn:"\u0986\u09AE"},{id:"jamdani",science:35,suit:"#f3e6f1",trim:"#c2457d",en:"Jamdani pink",bn:"\u099C\u09BE\u09AE\u09A6\u09BE\u09A8\u09BF \u0997\u09CB\u09B2\u09BE\u09AA\u09BF"},{id:"forest",science:50,suit:"#e3eedd",trim:"#3f9a5a",en:"Sundarbans green",bn:"\u09B8\u09C1\u09A8\u09CD\u09A6\u09B0\u09AC\u09A8 \u09B8\u09AC\u09C1\u099C"},{id:"night",science:80,suit:"#3b3f57",trim:"#7ef4e0",en:"Midnight",bn:"\u09AE\u09BE\u099D\u09B0\u09BE\u09A4"}];var Ci={shell:"#bfc2d6",edge:"#e6dfe7",face:"#2c425b",mint:"#a9decb",ear:"#9cacc2"},Tm=`<svg class="dhrubo-portrait" viewBox="-34 -45 68 80" aria-hidden="true"><path d="M0-22V-36" stroke="${Ci.shell}" stroke-width="3" stroke-linecap="round"/><circle cy="-39" r="4" fill="${Ci.mint}"/><rect x="-31" y="-1" width="7" height="18" rx="3" fill="${Ci.ear}"/><rect x="24" y="-1" width="7" height="18" rx="3" fill="${Ci.ear}"/><rect x="-23" y="-22" width="46" height="44" rx="15" fill="${Ci.shell}" stroke="${Ci.edge}" stroke-width="1.5"/><rect x="-18" y="-16" width="36" height="26" rx="9" fill="${Ci.face}"/><ellipse cx="-8" cy="-4" rx="2.5" ry="4" fill="${Ci.mint}"/><ellipse cx="8" cy="-4" rx="2.5" ry="4" fill="${Ci.mint}"/><path d="m-5 4 5 2 5-2" fill="none" stroke="${Ci.mint}" stroke-width="1.5" stroke-linecap="round"/><ellipse cy="26" rx="10" ry="3" fill="#9fdbd97d"/></svg>`;var je=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),wb={en:{spring:"spring",summer:"summer",autumn:"autumn",winter:"winter"},bn:{spring:"\u09AC\u09B8\u09A8\u09CD\u09A4",summer:"\u0997\u09CD\u09B0\u09C0\u09B7\u09CD\u09AE",autumn:"\u09B6\u09B0\u09CE",winter:"\u09B6\u09C0\u09A4"}},Nu={power:"\u{1F50B}",water:"\u{1F4A7}",oxygen:"\u{1FAC1}",food:"\u{1F955}",metal:"\u2699\uFE0F",ice:"\u{1F9CA}",science:"\u{1F52C}"};function Am(i,e){let t=()=>e(),n=p=>Ri[t()][p]??Ri.en[p]??p;i.insertAdjacentHTML("beforeend",`
    <div class="cx-hud">
      <div class="cx-where"><strong data-site></strong><span data-clock></span></div>
      <div class="cx-tanks">${kr.map(p=>`<div class="cx-tank" data-tank="${p}"><span>${Nu[p]}</span><div class="cx-bar"><i></i></div><b></b></div>`).join("")}
        <div class="cx-stuff">${["metal","ice","science"].map(p=>`<span data-stuff="${p}">${Nu[p]} <b>0</b></span>`).join("")}</div></div>
      <div class="cx-alert" hidden><span class="cx-alert-icon"></span><div><strong></strong><p></p></div></div>
      <div class="cx-objectives" hidden><strong></strong><ul></ul></div>
      <div class="cx-marker" hidden><span>\u25B2</span><em></em></div>
      <div class="cx-prompt" hidden><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15"/><circle class="cx-ring" cx="18" cy="18" r="15"/></svg><span></span></div>
      <div class="cx-toasts" aria-live="polite"></div>
      <div class="cx-dhrubo" hidden>${Tm}<p></p></div>
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
    <div class="cx-fade"></div>`);let s=p=>i.querySelector(p),r=s(".cx-panel"),o=s(".cx-card"),a={},l=0;function c(){i.querySelectorAll("[data-label]").forEach(p=>{p.textContent=n(p.dataset.label)})}c();function h(p,x=""){let g=document.createElement("div");g.className=`cx-toast ${x}`,g.textContent=p,s(".cx-toasts").append(g),setTimeout(()=>g.classList.add("out"),2600),setTimeout(()=>g.remove(),3200)}function d(p,x=""){return o.className=`cx-card ${x}`,o.innerHTML=`<button class="cx-close" aria-label="${je(n("close"))}">\xD7</button>${p}`,r.hidden=!1,o.querySelector(".cx-close").onclick=()=>f(),o}let u=null;function f(){r.hidden=!0,o.innerHTML="";let p=u;u=null,p?.()}return{t:n,toast:h,relabel:c,closePanel:f,get panelOpen(){return!r.hidden},setOnClose(p){u=p},update({site:p,clock:x,hours:g,base:m,colonySol:y,objectives:v,alert:M,prompt:w,marker:S,emergency:_,drone:b,showDrone:R,showRover:A}){s("[data-site]").textContent=pn[p].name[t()];let L=g<6||g>18.5,C=wb[t()][x.northernSeason];s("[data-clock]").textContent=`${L?"\u{1F319}":"\u2600\uFE0F"} ${n("sol")} ${y} \xB7 ${Lp(g)} \xB7 ${n("marsYear")} ${x.marsYear} \xB7 ${C}${x.dustSeason?" \u{1F32A}\uFE0F":""}`;for(let k of kr){let O=Math.round(m.tanks[k]);if(a[k]===O)continue;a[k]=O;let J=i.querySelector(`[data-tank="${k}"]`);J.querySelector("i").style.width=`${O}%`,J.querySelector("b").textContent=`${O}%`,J.classList.toggle("low",O<25),J.title=n(k)}for(let k of["metal","ice","science"])i.querySelector(`[data-stuff="${k}"] b`).textContent=Math.floor(m.stuff[k]);let U=s(".cx-alert");if(U.hidden=!M,M){let k=`${M.id}-${M.phase}`;if(U.dataset.key!==k){U.dataset.key=k;let O=qs[M.id][t()];U.querySelector(".cx-alert-icon").textContent=qs[M.id].icon,U.querySelector("strong").textContent=O[0],U.querySelector("p").textContent=O[1],U.classList.toggle("good",!!M.good),U.classList.remove("pop"),U.offsetWidth,U.classList.add("pop")}}let P=s(".cx-objectives");if(P.hidden=!v?.length,v?.length){let k=v.map(O=>`<li class="${O.done?"done":""}">${O.done?"\u2705":"\u25FB\uFE0F"} ${je(Zp(O,t()))}${O.need>1?` <b>${O.have}/${O.need}</b>`:""}</li>`).join("");P.dataset.html!==k&&(P.dataset.html=k,P.querySelector("strong").textContent=n("objectives"),P.querySelector("ul").innerHTML=k)}let V=s(".cx-prompt");V.hidden=!w,w&&(V.querySelector("span").textContent=w.text,V.querySelector(".cx-ring").style.strokeDashoffset=String(94.2*(1-(w.progress??0))),V.classList.toggle("hold",w.verb==="hold"));let W=s(".cx-marker");W.hidden=!S,S&&(W.style.left=`${S.x}px`,W.style.top=`${S.y}px`,W.querySelector("span").style.transform=`rotate(${S.angle}rad)`,W.querySelector("em").textContent=S.label??"",W.classList.toggle("edge",S.edge));let G=s(".cx-emergency");G.hidden=!_,_&&(G.textContent=n("emergency"));let K=s(".cx-drone");K.hidden=!b,b&&(K.querySelector("i").style.width=`${Math.round(b.battery*100)}%`),i.querySelector("[data-drone]").hidden=!R,i.querySelector("[data-rover]").hidden=!A},say(p,x=6){let g=s(".cx-dhrubo");g.hidden=!1,g.querySelector("p").textContent=p,g.classList.remove("pop"),g.offsetWidth,g.classList.add("pop"),clearTimeout(l),l=setTimeout(()=>{g.hidden=!0},x*1e3)},fade(p){s(".cx-fade").classList.toggle("on",p)},hide(p){i.querySelector(".cx-hud").classList.toggle("hidden-ui",p)},buildMenu(p,x){let g=ga.map(y=>{let v=Em[y.id],[M,w]=v[t()],S=p.built.includes(y.id),_=kc(p,y.cost),b=["metal","ice","science"].filter(R=>y.cost[R]).map(R=>`<span class="${(p.stuff[R]??0)>=y.cost[R]?"":"short"}">${Nu[R]} ${y.cost[R]}</span>`).join("");return`<article class="cx-item ${S?"owned":""}"><span class="cx-item-icon">${v.icon}</span><div><strong>${je(M)}</strong><p>${je(w)}</p><div class="cx-cost">${b}</div></div>
          <button data-buy="${y.id}" ${S||!_?"disabled":""}>${S?"\u2705 "+je(n("built")):je(n(_?"buy":"notEnough"))}</button></article>`}).join("");d(`<h2>\u{1F3D7}\uFE0F ${je(n("buildTitle"))}</h2><p class="cx-muted">${je(n("buildIntro"))}</p><div class="cx-list">${g}</div>`,"wide").querySelectorAll("[data-buy]").forEach(y=>y.onclick=()=>{f(),x(y.dataset.buy)})},mapMenu(p,x,g){let m=pn.home,y=Xp.filter(w=>!pn[w].moon).map(w=>{let S=pn[w],_=(S.lon%360+360)%360/360*100,b=(90-S.lat)/180*100;return`<button class="cx-pin ${w===p?"here":""} ${x.includes(w)?"seen":""}" style="left:${_}%;top:${b}%" data-site="${w}" title="${je(S.name[t()])}"><i></i><span>${je(S.name[t()].split(" \xB7 ")[0])}</span></button>`}).join(""),v=d(`<h2>\u{1FA90} ${je(n("mapTitle"))}</h2><p class="cx-muted">${je(n("mapIntro"))}</p>
        <div class="cx-mars">${y}</div><button class="cx-phobos ${p==="phobos"?"here":""}" data-site="phobos">\u{1F311} ${je(pn.phobos.name[t()])}</button>
        <div class="cx-site-card" hidden></div>`,"wide"),M=v.querySelector(".cx-site-card");v.querySelectorAll("[data-site]").forEach(w=>w.onclick=()=>{let S=w.dataset.site,_=pn[S],b=Math.round(Jp(m,_));M.hidden=!1,M.innerHTML=`<h3>${je(_.name[t()])}</h3><p>${je(_.fact[t()])}</p><p class="cx-muted">${S==="home"?"":`${b.toLocaleString()} ${je(n("km"))} \xB7 `}${je(n("difficulty"))}: ${"\u2B50".repeat(Kp(S))}${x.includes(S)?` \xB7 \u2705 ${je(n("visited"))}`:""}</p>
          <a href="${je(_.source)}" target="_blank" rel="noopener">NASA \u2197</a>
          ${S===p?`<p><b>\u{1F4CD} ${je(n("here"))}</b></p>`:`<button class="cx-go">${S==="home"?"\u{1F3E0} "+je(n("home")):"\u{1F680} "+je(n("fly"))}</button>`}`,M.querySelector(".cx-go")?.addEventListener("click",()=>{f(),g(S)})})},wardrobe(p,x,g){let m=Hr.map(v=>{let M=p>=v.science;return`<button class="cx-suit ${v.id===x?"on":""}" data-suit="${v.id}" ${M?"":"disabled"}><i style="background:${v.suit};border-color:${v.trim}"></i>${je(v[t()])}<small>${M?v.id===x?"\u2705":je(n("wear")):`\u{1F512} \u{1F52C}${v.science}`}</small></button>`}).join("");d(`<h2>\u{1F469}\u200D\u{1F680} ${je(n("wardrobeTitle"))}</h2><p class="cx-muted">${je(n("wardrobeIntro"))}</p><div class="cx-suits">${m}</div>`).querySelectorAll("[data-suit]").forEach(v=>v.onclick=()=>{g(v.dataset.suit),f()})},settings(p,x){d(`<h2>\u2699\uFE0F ${je(n("settings"))}</h2>
        <label class="cx-row">${je(n("quality"))}<select data-k="quality">${["low","medium","high"].map(m=>`<option value="${m}" ${p.quality===m?"selected":""}>${je(n(m))}</option>`).join("")}</select></label>
        <label class="cx-row"><input type="checkbox" data-k="reduced" ${p.reduced?"checked":""}> ${je(n("motion"))}</label>
        <label class="cx-row"><input type="checkbox" data-k="realTime" ${p.realTime?"checked":""}> ${je(n("realTime"))}</label>
        <label class="cx-row"><input type="checkbox" data-k="sound" ${p.sound?"checked":""}> ${je(n("sound"))}</label>
        <p><button data-k="language">\u{1F310} ${je(n("language"))}</button> <a class="cx-link" href="../hub.html">\u{1F680} ${je(n("hubLink"))}</a></p>
        <p class="cx-muted cx-keys">${je(n("keys"))}</p>`).querySelectorAll("[data-k]").forEach(m=>{let y=m.dataset.k,v=()=>x(y,m.type==="checkbox"?m.checked:m.value);m.tagName==="BUTTON"?m.onclick=()=>{x(y,!0),f()}:m.onchange=v})},info(p,x,g){d(`<h2>${je(p)}</h2><p>${je(x)}</p>${g?`<a href="${je(g)}" target="_blank" rel="noopener">NASA \u2197</a>`:""}`)},title(p,x){let g=d(`<div class="cx-title"><h1>\u{1F431} ${je(n("title"))}</h1><p>${je(pn.home.fact[t()])}</p>
        <button class="cx-go">${je(n(p?"continue":"start"))}</button><p class="cx-muted cx-keys">${je(n("keys"))}</p></div>`,"title");g.querySelector(".cx-close").remove(),g.querySelector(".cx-go").onclick=()=>{f(),x()}},photo(p,x,g){let m=document.createElement("div");return m.className="cx-photo",m.innerHTML=`<p>${je(n("photoHint"))}</p><button data-snap>\u{1F4F8} ${je(n("snap"))}</button><button data-card>\u{1F48C} ${je(n("postcard"))}</button><button data-exit>\u21A9 ${je(n("exitPhoto"))}</button>`,i.append(m),m.querySelector("[data-snap]").onclick=p,m.querySelector("[data-card]").onclick=x,m.querySelector("[data-exit]").onclick=()=>{m.remove(),g()},m},showPicture(p){return d(`<img class="cx-shot" src="${p}" alt=""><p><a class="cx-link" href="${p}" download="mars-photo.png">\u{1F4BE} ${je(n("saveImage"))}</a></p>`)},miniGame(p,x){let g=Sm[p]?.[t()]??"";if(p==="tap"){let m=100,y=d(`<h2>\u{1F6B0} ${je(g)}</h2><div class="cx-meter"><i style="width:100%"></i></div><button class="cx-tap">\u{1F446}</button>`),v=y.querySelector(".cx-meter i");y.querySelector(".cx-tap").onclick=w=>{m-=9,w.currentTarget.classList.remove("bump"),w.currentTarget.offsetWidth,w.currentTarget.classList.add("bump"),v.style.width=`${Math.max(0,m)}%`,m<=0&&(f(),x())};let M=setInterval(()=>{if(r.hidden)return clearInterval(M);m=Math.min(100,m+2),v.style.width=`${m}%`},400)}else if(p==="timing"){let m=0,y=0,v=1,M=performance.now(),w=d(`<h2>\u{1F9CA} ${je(g)}</h2><div class="cx-timing"><b></b><i></i></div><p class="cx-hits">\u2B50\u2B50\u2B50</p><button class="cx-go">\u23EF</button>`),S=w.querySelector(".cx-timing i"),_=w.querySelector(".cx-hits"),b=.38+Math.random()*.3;w.querySelector(".cx-timing b").style.left=`${b*100}%`;let R=A=>{r.hidden||(y+=(A-M)/1e3*.9*v,M=A,(y>1||y<0)&&(v*=-1,y=Math.max(0,Math.min(1,y))),S.style.left=`${y*100}%`,requestAnimationFrame(R))};requestAnimationFrame(R),w.querySelector(".cx-go").onclick=()=>{let A=Math.abs(y-(b+.07))<.08;m=A?m+1:Math.max(0,m-1),_.textContent="\u{1F31F}".repeat(m)+"\u2B50".repeat(3-m),w.querySelector(".cx-timing").classList.toggle("miss",!A),m>=3&&(f(),x())}}else if(p==="sequence"){let m=[1,2,3,4,5,6].sort(()=>Math.random()-.5),y=1,v=d(`<h2>\u26A1 ${je(g)}</h2><div class="cx-breakers">${m.map(M=>`<button data-n="${M}">${M}</button>`).join("")}</div>`);v.querySelectorAll("[data-n]").forEach(M=>M.onclick=()=>{+M.dataset.n===y?(M.classList.add("on"),M.disabled=!0,y++,y>6&&(f(),x())):(v.querySelectorAll("[data-n]").forEach(w=>{w.classList.remove("on"),w.disabled=!1}),y=1,v.querySelector(".cx-breakers").classList.add("shake"),setTimeout(()=>v.querySelector(".cx-breakers")?.classList.remove("shake"),400))})}else if(p==="align"){let m=(Math.random()-.5)*140,y=0,v=(Math.random()-.5)*100,M=d(`<h2>\u{1F4E1} ${je(g)}</h2><div class="cx-dial"><i></i></div><div class="cx-meter signal"><i></i></div>
          <p><button data-turn="-1">\u27F2</button> <button data-turn="1">\u27F3</button></p>`),w=M.querySelector(".cx-dial i"),S=M.querySelector(".signal i"),_=0;M.querySelectorAll("[data-turn]").forEach(A=>{A.onpointerdown=()=>{_=+A.dataset.turn},A.onpointerup=A.onpointerleave=()=>{_=0}});let b=performance.now(),R=A=>{if(r.hidden)return;let L=(A-b)/1e3;b=A,m+=_*L*50;let C=Math.max(0,Math.cos((m-v)*Math.PI/180*1.5));if(w.style.transform=`rotate(${m}deg)`,S.style.width=`${C*100}%`,y=C>.96?y+L:0,y>.8){f(),x();return}requestAnimationFrame(R)};requestAnimationFrame(R)}else if(p==="balance"){let m=88,y=0,v=0,M=d(`<h2>\u{1F344} ${je(g)}</h2><div class="cx-meter balance"><b></b><i></i></div><p>\u{1F4A7} <span class="cx-val"></span>%</p>
          <p><button data-d="-6">\u{1F32C}\uFE0F \u2212</button> <button data-d="6">\u{1F4A6} +</button></p>`),w=M.querySelector(".balance i"),S=M.querySelector(".cx-val");M.querySelectorAll("[data-d]").forEach(R=>R.onclick=()=>{m+=+R.dataset.d});let _=performance.now(),b=R=>{if(r.hidden)return;let A=(R-_)/1e3;if(_=R,v+=(Math.random()-.5)*A*6,v*=.98,m=Math.max(20,Math.min(100,m+v*A*8+A*1.5)),w.style.left=`${m}%`,S.textContent=Math.round(m),y=m>50&&m<70?y+A:0,y>3){f(),x();return}requestAnimationFrame(b)};requestAnimationFrame(b)}}}}var Nm="astro-kitty-colony-v1",Wr=document.getElementById("colony"),Ss=document.createElement("canvas");Ss.className="cx-canvas";Ss.tabIndex=0;Ss.setAttribute("aria-label","Mars Colony 3D world");Wr.prepend(Ss);var $u=(()=>{try{return JSON.parse(localStorage.getItem("astro-kitty-profile-v1")||"{}")}catch{return{}}})(),Rt=$u.language==="bn"?"bn":"en",Hu=matchMedia("(pointer: coarse)").matches;function Eb(){return{v:1,base:Bp(),skill:1,history:[],hours:7.6,sols:0,site:"home",visited:["home"],suit:"classic",scienceEarned:0,trophies:[],settings:{quality:Hu?"medium":"high",reduced:matchMedia("(prefers-reduced-motion: reduce)").matches||!!$u.reduceMotion,realTime:!1,sound:vp()}}}var he=(()=>{try{let i=JSON.parse(localStorage.getItem(Nm));return i?.v===1?i:null}catch{return null}})(),Tb=!!he;he??=Eb();var Ys=()=>{try{localStorage.setItem(Nm,JSON.stringify(he))}catch{}},cn=i=>Ri[Rt][i]??Ri.en[i]??i,ei=new wc({canvas:Ss,antialias:!0,powerPreference:"high-performance"});ei.toneMapping=ks;ei.toneMappingExposure=.98;ei.shadowMap.type=Pl;var Pn=new gn(55,1,.1,1200),Pi=null,Rm=null;function Zu(){let i=he.settings.quality,e=window.devicePixelRatio||1;ei.setPixelRatio(i==="low"?Math.min(1,e)*.8:Math.min(i==="medium"?1.25:1.75,e)),ei.shadowMap.enabled=i!=="low",xe?.sky&&(xe.sky.sun.castShadow=i!=="low",xe.sky.sun.shadow.mapSize.setScalar(i==="high"?2048:1024),xe.sky.sun.shadow.map?.dispose(),xe.sky.sun.shadow.map=null),Pi=null,i==="high"&&xe&&(Pi=new Cc(ei),Pi.addPass(new Ic(xe.scene,Pn)),Rm=new Or(new le(256,256),.38,.4,.9),Pi.addPass(Rm),Pi.addPass(new Pc)),Ju(!0)}var Gu=0,Vu=0;function Ju(i=!1){let e=Wr.clientWidth,t=Wr.clientHeight;!i&&e===Gu&&t===Vu||(Gu=e,Vu=t,ei.setSize(e,t,!1),Pi?.setSize(e,t),Pn.aspect=e/t,Pn.fov=Pn.aspect<.8?68:55,Pn.updateProjectionMatrix())}var ht=Am(Wr,()=>Rt),Cm=bm(Ss,Wr),Ht=Mm();Ht.setEnabled(he.settings.sound);var Wu=null;try{Wu=wp()}catch{}function Qn(i,e){if(ht.say(i,e),xe?.dhrubo.say(Math.min(4,i.length/18)),he.settings.sound&&Wu)try{Wu.play(i)}catch{}}var Xc=null;new ko().load(new URL("./assets/mars-viking.jpg",import.meta.url).href,i=>{i.colorSpace=Vt,Xc=i,xe?.marsGlobe&&(xe.marsGlobe.material.map=i,xe.marsGlobe.material.needsUpdate=!0)});var Ab=fetch("./data/donki-events.json").then(i=>i.ok?i.json():null).then(i=>{let t=(Array.isArray(i)?i:i?.events??[]).filter(n=>n.classType||n.class).sort((n,s)=>String(s.peakTime??s.peak??"").localeCompare(String(n.peakTime??n.peak??"")))[0];return t?{cls:t.classType??t.class,date:String(t.peakTime??t.peak??"").slice(0,10)}:null}).catch(()=>null),Um=null;Ab.then(i=>{Um=i});var xe=null;function Rb(){xe&&(xe.scene.traverse(i=>{i.geometry?.dispose?.();let e=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(let t of e)t.userData?.shared||t.dispose?.()}),xe=null)}function $c(i){Rb();let e={id:i,...pn[i]},t=new xo,n=qp(i),s=i==="home",r=he.base.built,o=s?Up(r):[],a=new Fc,l=jp(t,{space:e.sky==="space",thin:e.sky==="thin",polar:e.sky==="polar"});t.fog=new go("#b98066",40,330);let c=s?[[[-11,11],[-40,40]],[[-36,0],[-48,8]],[[36,0],[39,0]],[[0,37],[0,50]],[[18,-30],[20,-44]],[[-36,0],[-15,-15]]]:[],h=s?Op(o,r):[{x:e.spawn.x,z:e.spawn.z,r:14},...(e.landmarks??[]).map(g=>({x:g.x,z:g.z,r:8}))],d=he.settings.quality,u=Qp(t,ei,e,(g,m)=>n(g,m),{clear:h,paths:c,quality:d==="high"?2:d==="medium"?1:0,seed:ma(i)%997});for(let g of u.blockers)a.circle(g.x,g.z,g.r);let f={site:e,scene:t,sky:l,ground:u,collider:a,placed:o,home:s,terrainHeight:n,regions:null,structures:null,interiors:null,outdoor:null,crew:null,patrol:null,droneBot:null,spots:[],dynamic:[],landmarks:[],collectibles:[],hazards:{}};if(xe=f,s){for(let v of Fp(o))a.segment(v.ax,v.az,v.bx,v.bz,v.tag);f.structures=om(t,o),f.interiors=cm(t,o,{marsTexture:Xc});for(let v of f.interiors.colliders)a.circle(v.x,v.z,v.r);for(let[v,M,w,S]of f.interiors.segs)a.segment(v,M,w,S);let g=[],m=[];f.outdoor=um(t,n,r,{extraSpots:g,extraColliders:m});for(let v of m)a.circle(v.x,v.z,v.r);f.spots=[...f.interiors.spots,...g],f.crew=fm(t,o,f.interiors);let y=[[-14,30],[-36,22],[-58,-2],[-40,-30],[-10,-46],[28,-36],[32,26],[10,46]];f.patrol=gm(t,n,y),f.droneBot=Du(t,n),f.marsGlobe=f.interiors.list.find(v=>v.id==="lab")?.group.children.find(v=>v.geometry?.type==="SphereGeometry"),f.landing=vm(t)}else Pb(f);f.groundAt=(g,m,y)=>s&&zc(o,g,m)?ke:n(g,m,y),f.kitty=Lc(t,Cb(he.suit)),f.headlamp=new Vo("#fff1d6",0,26,.55,.6,1.2),f.headlamp.position.set(0,1.75,-.35),f.headlamp.target.position.set(0,.2,-7),f.kitty.rig.add(f.headlamp,f.headlamp.target),f.dhrubo=dm(t),f.rover=mm(t,n,a),f.drone=he.base.built.includes("drone")?Du(t,n):null,f.wind=xm(t);let p=e.sky==="space"?0:d==="low"?1:3;f.devils=_m(t,n,p,e.size*.42,ma(i)),f.bursts=ym(t,d==="low"?300:700),e.sky==="space"&&Ib(f);let x=s?he.player&&he.site==="home"?he.player:{x:-13,z:15,yaw:-.71}:{x:e.spawn.x+4,z:e.spawn.z+4,yaw:.6};if(N.x=x.x,N.z=x.z,N.yaw=x.yaw??0,N.heading=N.yaw,N.y=f.groundAt(N.x,N.z),N.vy=0,N.mode="walk",N.underground=!1,s){let g=f.interiors.anchors.roverPark;f.rover.park(g[0],g[1],-(f.interiors.anchors.roverFacing??0)+Math.PI/2)}else f.rover.park(e.spawn.x-8,e.spawn.z+2,.4);return f.dhrubo.root.position.set(N.x+1,N.y+2,N.z+1),Zu(),f}function Cb(i){let e=Hr.find(t=>t.id===i)??Hr[0];return{suit:e.suit,trim:e.trim}}function Ib(i){let e=new $t({map:Xc,color:Xc?"#ffffff":"#c1704f",fog:!1}),t=new Re(new Ft(110,48,32),e);t.position.set(-150,85,-235),i.sky.dome.add(t),i.marsGlobe=t}function Pb(i){let{site:e,scene:t,terrainHeight:n,collider:s}=i,r=hi(ma(e.id)+Date.now()%1e5),o=new Ne,a=new Ye;a.cyl(B.shell(),0,3.2,0,1.4,3.6,18,0,0,0,.7),a.cyl(B.trim(),0,5.4,0,.8,.9,18,0,0,0,.3);for(let l=0;l<4;l++)a.box(B.frame(),Math.cos(l*Math.PI/2)*1.6,1,Math.sin(l*Math.PI/2)*1.6,.14,2.2,.14,-l*Math.PI/2,0,.45);a.build(o),o.position.set(e.spawn.x,n(e.spawn.x,e.spawn.z),e.spawn.z),t.add(o),s.circle(e.spawn.x,e.spawn.z,2.2),i.spots.push({id:"hopper",x:e.spawn.x+2.6,z:e.spawn.z+1.5,r:2.6,verb:"tap",label:{en:Ri.en.board,bn:Ri.bn.board}});for(let l of e.landmarks??[]){let c=Lb(l.type);c.position.set(l.x,n(l.x,l.z),l.z),c.rotation.y=l.rot??0,t.add(c),l.type!=="tubes"&&s.circle(l.x,l.z,l.type==="heatshieldrock"?1.2:2),i.landmarks.push({...l,group:c})}i.objectives=$p(e.id,r);for(let l of i.objectives)Db(i,l,r);e.hazards?.includes("geysers")&&(i.hazards.geysers=Array.from({length:6},(l,c)=>({x:(r()-.5)*160,z:(r()-.5)*160,phase:c*2.3}))),e.hazards?.includes("rockfall")&&(i.hazards.rockfall={timer:8,rocks:[]}),e.cave&&(i.caveLight=null)}function Lb(i){let e=new Ne;if(["perseverance","curiosity","opportunity","zhurong"].includes(i)){let t=Vc();if(i==="opportunity"&&t.root.scale.setScalar(.7),i==="zhurong"){let n=new Ye;for(let s of[-1,1])n.box(B.solarCell(),s*1.9,1.75,0,1.6,.04,1.1,0,0,s*.5);n.build(t.chassis)}e.add(t.root)}else if(i==="ingenuity"){let t=Lu();t.root.position.y=.85,e.add(t.root)}else if(i==="viking"){let t=new Ye;t.cyl(B.shellShade(),0,1.2,0,1,.5,6);for(let s=0;s<3;s++)t.box(B.frame(),Math.cos(s*$e/3)*1.1,.6,Math.sin(s*$e/3)*1.1,.1,1.3,.1,-s*$e/3,0,.4);t.cyl(B.steel(),.2,2.2,0,.05,1.6,6),t.build(e);let n=new Re(new Ft(.6,16,8,0,$e,0,1),B.steel());n.position.set(.2,3,0),n.rotation.x=-.8,e.add(n)}else if(i==="heatshieldrock"){let t=new Re(new $n(1,1),new nt({color:"#5d5a5e",metalness:.75,roughness:.35}));t.scale.set(1,.7,.8),t.position.y=.6,e.add(t)}return e}function Db(i,e,t){let{site:n,terrainHeight:s}=i,r=n.size*.38,o=()=>{for(let c=0;c<40;c++){let h=(t()-.5)*2*r,d=(t()-.5)*2*r;if(!(Math.hypot(h-n.spawn.x,d-n.spawn.z)<20))return[h,d]}return[r*.5,r*.5]},a=(c,h,d,u)=>{let f=u();f.position.set(c,s(c,h),h),i.scene.add(f);let p=tn(e.kind==="meteorite"?"#ffd27a":e.kind==="ice"?"#bdefff":"#7ef4e0",2.2,0);p.position.set(c,s(c,h)+.7,h),i.scene.add(p),i.collectibles.push({o:e,x:c,z:h,group:f,ring:p,kind:d,taken:!1,hidden:e.kind==="samples"&&t()<.4})},l=c=>()=>{let h=new Re(new $n(.35,0),new nt({color:c,flatShading:!0,roughness:.7,emissive:c,emissiveIntensity:.15}));h.position.y=.25;let d=new Ne;return d.add(h),d};if(e.kind==="samples")for(let c=0;c<e.need;c++)a(...o(),"sample",l("#b8775a"));if(e.kind==="blueberries")for(let c=0;c<e.need;c++)a(...o(),"berry",()=>{let h=new Ne;for(let d=0;d<6;d++){let u=new Re(new Ft(.08,10,8),new nt({color:"#3b3d58",metalness:.4,roughness:.3}));u.position.set(Math.cos(d)*.25,.08,Math.sin(d*1.7)*.25),h.add(u)}return h});if(e.kind==="ice")for(let c=0;c<e.need;c++)a(...o(),"ice",()=>{let h=new Re(new Mi(.45,0),new nt({color:"#dff6ff",emissive:"#7fd8ff",emissiveIntensity:.4,roughness:.15,transparent:!0,opacity:.9}));h.position.y=.3;let d=new Ne;return d.add(h),d});if(e.kind==="meteorite"&&a(...o(),"meteorite",()=>{let c=new Re(new $n(.55,1),new nt({color:"#4c4a50",metalness:.85,roughness:.3}));c.position.y=.4;let h=new Ne;return h.add(c),h}),e.kind==="tubes"){let c=n.landmarks.find(h=>h.type==="tubes")??{x:0,z:0};for(let h=0;h<e.need;h++){let d=c.x+h%5*3.2-6.4,u=c.z+Math.floor(h/5)*4+h%2*1.2;a(d,u,"tube",()=>{let f=new Re(new bt(.06,.06,.6,10),B.steel());f.rotation.z=Math.PI/2,f.position.y=.08;let p=new Ne;return p.add(f),p})}}if(e.kind==="beacon")for(let c=0;c<e.need;c++){let[h,d]=o();i.collectibles.push({o:e,x:h,z:d,kind:"beacon",taken:!1,ring:(()=>{let u=tn("#ffb35a",3,.5);return u.position.set(h,s(h,d)+.4,d),i.scene.add(u),u})()})}if(e.kind==="visit"){let c=n.landmarks.find(h=>h.type===e.thing);c&&i.collectibles.push({o:e,x:c.x+2.5,z:c.z+2.5,kind:"visit",taken:!1})}if(e.kind==="scan")for(let c=0;c<e.need;c++){let h=null;for(let d=0;d<60;d++){let[u,f]=o(),p=Math.abs(s(u+1,f)-s(u-1,f))+Math.abs(s(u,f+1)-s(u,f-1));(!h||p>h.slope)&&(h={x:u,z:f,slope:p})}i.collectibles.push({o:e,x:h.x,z:h.z,kind:"scan",taken:!1,ring:(()=>{let d=tn("#c9a7ff",2.6,.5);return d.position.set(h.x,s(h.x,h.z)+1,h.z),i.scene.add(d),d})()})}if(e.kind==="summit"){let c=null;for(let h=-r;h<=r;h+=6)for(let d=-r;d<=r;d+=6){let u=s(h,d);(!c||u>c.y)&&(c={x:h,z:d,y:u})}i.collectibles.push({o:e,x:c.x,z:c.z,kind:"summit",taken:!1,auto:5,ring:(()=>{let h=tn("#ffe08a",4,.7);return h.position.set(c.x,c.y+2,c.z),i.scene.add(h),h})()})}if(e.kind==="cave"&&n.cave){let c=n.cave,h=c.x+Math.cos(c.angle)*c.length,d=c.z+Math.sin(c.angle)*c.length;i.collectibles.push({o:e,x:h,z:d,kind:"cave",taken:!1,auto:5,underground:!0})}}var N={x:0,z:0,y:0,vy:0,yaw:0,heading:0,pitch:.42,dist:7.5,mode:"walk",underground:!1,grounded:!0,lookIdle:0,stride:0},Uu=new D,ui=new D,Wc=new D,Ii={id:null,t:0},Xn=he.hours,Jt=0,Xu=performance.now(),Fu=0,Ms=!1,vn=null,Ou=!1,vt=null,nn=null,Bu=null;function Fm(){Ms=!0,Ht.unlock(),Ss.focus({preventScroll:!0}),vt=Gp(ma(String(Date.now()))),vt.skill=he.skill??1,vt.history=he.history??[],vt.cooldown=45,Qn(xe.home?Rt==="bn"?"\u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE \u09AE\u0999\u09CD\u0997\u09B2 \u0998\u09BE\u0981\u099F\u09BF\u09A4\u09C7! \u099A\u09BE\u09B0\u09AA\u09BE\u09B6 \u0998\u09C1\u09B0\u09C7 \u09A6\u09C7\u0996\u09CB\u0964 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09B9\u09B2\u09C7 \u0986\u09AE\u09BF \u099C\u09BE\u09A8\u09BE\u09AC\u0964":"Welcome to our Mars base! Explore inside and out. I will tell you if anything goes wrong.":pn[xe.site.id].fact[Rt],8)}var Xr=new Map;function Om(i){let e=In[i.id];Ht[e.good?"pickup":"alarm"]();let t=qs[i.id][Rt];Qn(`${t[0]} ${t[1]}`,9);let n={started:Jt};if(i.id==="supplyDrop"){let s=Math.random()*$e,r=6+Math.random()*18;n.target=[Dt.landingPad.x+Math.cos(s)*r,Dt.landingPad.z+Math.sin(s)*r]}if(i.id==="meteorite"){let s=Math.random()*$e,r=30+Math.random()*45;n.target=[Math.cos(s)*r,Math.sin(s)*r],n.from=[n.target[0]+160,140,n.target[1]-120]}if(i.id==="roverStuck"&&xe.patrol?.setStuck(!0),i.id==="powerSurge"&&(he.base.breakers=!1),i.id==="dustDevilClean"){let s=xe.devils.devils[0];s&&(s.x=Dt.solarFarm.x0-10,s.z=-10,s.heading=.4,s.life=15)}Xr.set(i.uid,n)}function Bm(i){if(!xe.home)return null;let e=In[i.id];if(i.phase==="warning"&&!e.good)return null;let t=Xr.get(i.uid)??{};switch(i.id){case"leak":{let n=xe.interiors.anchors.leak[i.module]??xe.interiors.anchors.leak.hub;return{id:"leak",x:n[0],z:n[1],r:2.2,verb:"hold",label:{en:"Patch the leak",bn:"\u09B2\u09BF\u0995 \u099C\u09CB\u09A1\u09BC\u09BE \u09B2\u09BE\u0997\u09BE\u0993"}}}case"mold":return bs("climate");case"filterClog":return bs("filter");case"drillJam":return bs("drill");case"powerSurge":return bs("breakers");case"comms":return bs("dish");case"solarFlare":return i.phase==="active"?bs("shelter"):null;case"dustStorm":return i.phase==="cleanup"?Nb():null;case"roverStuck":return xe.patrol?{id:"stuck",x:xe.patrol.position.x+2,z:xe.patrol.position.z+2,r:2.8,verb:"hold",label:{en:"Push the rover",bn:"\u09B0\u09CB\u09AD\u09BE\u09B0 \u09A7\u09BE\u0995\u09CD\u0995\u09BE \u09A6\u09BE\u0993"}}:null;case"supplyDrop":return t.landed?{id:"crate",x:t.target[0],z:t.target[1],r:2.4,verb:"hold",label:{en:"Open the supply crate",bn:"\u09B0\u09B8\u09A6\u09C7\u09B0 \u09AC\u09BE\u0995\u09CD\u09B8 \u0996\u09CB\u09B2\u09CB"}}:null;case"meteorite":return t.landed?{id:"meteor",x:t.target[0],z:t.target[1],r:2.4,verb:"hold",label:{en:"Pick up the meteorite",bn:"\u0989\u09B2\u09CD\u0995\u09BE\u09AA\u09BF\u09A3\u09CD\u09A1 \u09A4\u09CB\u09B2\u09CB"}}:null;default:return null}}var bs=i=>xe.spots.find(e=>e.id===i);function Nb(){let i=null;for(let e of xe.spots)if(e.id.startsWith("panels")&&!e.cleaned){let t=Math.hypot(e.x-N.x,e.z-N.z);(!i||t<i.d)&&(i={s:e,d:t})}return i?.s??null}function Gr(i,e={science:2}){let t=Xr.get(i.uid);if(Su(vt,i.uid,Jt-(t?.started??Jt)),Xr.delete(i.uid),i.id==="roverStuck"&&xe.patrol?.setStuck(!1),i.id==="powerSurge"&&(he.base.breakers=!0),i.id==="dustStorm")for(let n of xe.spots)n.cleaned=!1;t?.mesh&&xe.scene.remove(t.mesh);for(let[n,s]of Object.entries(e))n in he.base.stuff&&(he.base.stuff[n]+=s),n in he.base.tanks&&(he.base.tanks[n]=ct(he.base.tanks[n]+s,0,100));e.science&&(he.scienceEarned+=e.science),he.base.stats.fixes++,xe.kitty.cheer(),Ht.success(),ht.toast(`${Rt==="bn"?"\u09B6\u09BE\u09AC\u09BE\u09B6!":"Shabbash!"} ${Object.entries(e).map(([n,s])=>`+${s} ${cn(n)}`).join(" ")}`,"good"),qr(N.x,N.y+1.5,N.z,"#ffe08a",30),Ys()}function qr(i,e,t,n,s=20,r={}){he.settings.reduced||xe.bursts.emit(i,e,t,{count:s,color:n,speed:3,life:.9,size:.12,gravity:-3,...r})}function Ub(){let i=[];if(vt)for(let t of vt.active){let n=Bm(t);n&&i.push({...n,event:t})}let e=[...xe.spots.filter(t=>!i.some(n=>n.id===t.id)),...i];if(xe.home&&N.mode==="walk"){let t=xe.rover.state;e.push({id:"rover",x:t.x,z:t.z,r:3.2,verb:"tap",label:{en:cn("drive"),bn:Ri.bn.drive}})}if(!xe.home){let t=xe.rover.state;N.mode==="walk"&&e.push({id:"rover",x:t.x,z:t.z,r:3.2,verb:"tap",label:{en:cn("drive"),bn:Ri.bn.drive}});for(let n of xe.collectibles){if(n.taken||n.auto||n.hidden&&!n.revealed)continue;let s=n.kind==="visit"?{en:"Say hello",bn:"\u09B9\u09CD\u09AF\u09BE\u09B2\u09CB \u09AC\u09B2\u09CB"}:n.kind==="scan"?{en:"Scan",bn:"\u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8 \u0995\u09B0\u09CB"}:n.kind==="beacon"?{en:"Plant a beacon",bn:"\u09AC\u09C0\u0995\u09A8 \u09AC\u09B8\u09BE\u0993"}:{en:"Collect",bn:"\u09B8\u0982\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09CB"};e.push({id:"collect",x:n.x,z:n.z,r:2.1,verb:n.kind==="visit"?"tap":"hold",label:s,collectible:n})}}return e}function Ku(){if(N.mode!=="walk")return null;let i=null;for(let e of Ub()){let t=Math.hypot(e.x-N.x,e.z-N.z);t<e.r&&(!i||t<i.d)&&(i={...e,d:t})}return i}function zm(i){let e=i.event;if(e)return Fb(e,i);if(i.collectible)return km(i.collectible);Ht.click();let t=wm[i.id];switch(i.id){case"planner":return ht.buildMenu(he.base,ju);case"wardrobe":return ht.wardrobe(he.scienceEarned,he.suit,Ob);case"globe":return ht.mapMenu(xe.site.id,he.visited,qc);case"hopper":return ht.mapMenu(xe.site.id,he.visited,qc);case"rover":return Hm();case"harvest":{let n=Hp(he.base);n?(Ht.success(),ht.toast(`\u{1F955} +${n}% ${cn("food")}`,"good"),xe.kitty.cheer(),qr(N.x,N.y+1,N.z,"#9bd36a",25)):Qn(Rt==="bn"?`\u09AB\u09B8\u09B2 \u098F\u0996\u09A8\u09CB \u09AC\u09A1\u09BC \u09B9\u099A\u09CD\u099B\u09C7: ${Math.round(he.base.crops*100)}%\u0964 \u09AA\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u098F\u09B8\u09CB!`:`The crops are still growing: ${Math.round(he.base.crops*100)}%. Come back later!`);return}case"radio":{let n=Uc(new Date);Qn(Rt==="bn"?`\u09AC\u09BE\u09B0\u09CD\u09A4\u09BE \u09AA\u09BE\u09A0\u09BE\u09A8\u09CB \u09B9\u09B2\u09CB! \u09AA\u09C3\u09A5\u09BF\u09AC\u09C0 \u098F\u0996\u09A8 ${(n.km/1e6).toFixed(0)} \u09AE\u09BF\u09B2\u09BF\u09AF\u09BC\u09A8 \u0995\u09BF\u09AE\u09BF \u09A6\u09C2\u09B0\u09C7, \u09A4\u09BE\u0987 \u09AA\u09CC\u0981\u099B\u09BE\u09A4\u09C7 ${n.lightMinutes.toFixed(1)} \u09AE\u09BF\u09A8\u09BF\u099F \u09B2\u09BE\u0997\u09AC\u09C7\u0964`:`Message sent! Earth is ${(n.km/1e6).toFixed(0)} million km away, so it takes ${n.lightMinutes.toFixed(1)} minutes to arrive.`),setTimeout(()=>ht.toast(Rt==="bn"?"\u{1F30D} \u09AE\u09BF\u09B6\u09A8 \u0995\u09A8\u09CD\u099F\u09CD\u09B0\u09CB\u09B2: \u09A6\u09BE\u09B0\u09C1\u09A3 \u0995\u09BE\u099C, \u09A6\u09B2!":"\u{1F30D} Mission Control: Great work, crew!","good"),Math.min(30,n.lightMinutes*2*2)*1e3);return}case"shelter":return Qn(Rt==="bn"?"\u098F\u099F\u09BE \u099D\u09A1\u09BC\u09C7\u09B0 \u0986\u09B6\u09CD\u09B0\u09AF\u09BC\u0964 \u09AA\u09BE\u09A8\u09BF\u09B0 \u09A6\u09C7\u09AF\u09BC\u09BE\u09B2 \u09AC\u09BF\u0995\u09BF\u09B0\u09A3 \u0986\u099F\u0995\u09BE\u09AF\u09BC\u0964":"This is the storm shelter. Its water walls block radiation.");case"trampoline":xe.kitty.cheer(),N.vy=9;return;default:return i.id.startsWith("panels")?he.base.dust>.12?void 0:Qn(Rt==="bn"?`\u09AA\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0986\u099B\u09C7\u0964 \u09A7\u09C1\u09B2\u09CB: ${Math.round(he.base.dust*100)}%`:`The panels are clean enough. Dust: ${Math.round(he.base.dust*100)}%`):t?ht.info(i.label[Rt],t[Rt],t.source):ht.info(i.label[Rt],"")}}function Fb(i,e){let t=In[i.id].fix?.how;if(["tap","timing","sequence","align","balance"].includes(t)){ht.miniGame(t,()=>Gr(i,{science:3}));return}if(i.id==="supplyDrop")return Gr(i,{metal:4,food:15,science:1});if(i.id==="meteorite")return he.base.stuff.samples++,Gr(i,{metal:5,science:2});if(i.id==="dustStorm"){let n=xe.spots.find(s=>s.id===e.id);n&&(n.cleaned=!0),he.base.dust=Math.max(0,he.base.dust-.18),qr(e.x+2,N.y+1.5,e.z,"#d9a882",30),!xe.spots.some(s=>s.id.startsWith("panels")&&!s.cleaned)||he.base.dust<.12?Gr(i,{science:3}):ht.toast(Rt==="bn"?"\u{1F9F9} \u098F\u0995 \u09B8\u09BE\u09B0\u09BF \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0!":"\u{1F9F9} One row clean!");return}return Gr(i,{science:2})}function km(i){let e=i.o;if(i.taken=!0,i.group&&xe.scene.remove(i.group),i.ring&&(i.ring.visible=i.kind==="beacon"),i.kind==="beacon"){let t=new Ye;t.cyl(B.frame(),i.x,xe.terrainHeight(i.x,i.z)+1.2,i.z,.05,2.4,6),t.build(xe.scene),i.ring.position.y+=2.2}if(e.have=Math.min(e.need,e.have+1),["sample","berry","tube","meteorite"].includes(i.kind)&&he.base.stuff.samples++,Ht.pickup(),qr(i.x,xe.terrainHeight(i.x,i.z)+.6,i.z,"#7ef4e0",18),i.kind==="visit"){let t={perseverance:"Perseverance",curiosity:"Curiosity",opportunity:"Opportunity",zhurong:"Zhurong",viking:"Viking 2"}[e.thing];Qn(Rt==="bn"?`\u09B9\u09CD\u09AF\u09BE\u09B2\u09CB, ${t}! \u09A4\u09C1\u09AE\u09BF \u09AE\u0999\u09CD\u0997\u09B2\u09C7 \u0985\u09A8\u09C7\u0995 \u0995\u09BF\u099B\u09C1 \u0986\u09AC\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0995\u09B0\u09C7\u099B\u0964`:`Hello, ${t}! Thank you for exploring Mars for us.`)}if(e.have>=e.need&&!e.done){e.done=!0;for(let[t,n]of Object.entries(e.reward))he.base.stuff[t]+=n;he.scienceEarned+=e.reward.science??0,Ht.success(),xe.kitty.cheer(),ht.toast(`${cn("objectiveDone")} ${Object.entries(e.reward).map(([t,n])=>`+${n} ${cn(t)}`).join(" ")}`,"good"),xe.objectives.every(t=>t.done)&&(Qn(cn("siteDone")+" "+cn("allDone"),8),he.trophies.includes(xe.site.id)||he.trophies.push(xe.site.id)),Ys()}else ht.toast(`${cn("collected")} ${e.have}/${e.need}`)}function ju(i){let e=ga.find(t=>t.id===i);!e||he.base.built.includes(i)||!kc(he.base,e.cost)||(kp(he.base,e.cost),he.base.built.push(i),he.player={x:N.x,z:N.z,yaw:N.yaw},Ys(),Ht.success(),ht.toast(`\u{1F3D7}\uFE0F ${cn("built")}!`,"good"),ht.fade(!0),setTimeout(()=>{$c("home"),ht.fade(!1),Qn(Rt==="bn"?"\u09A8\u09A4\u09C1\u09A8 \u099C\u09BF\u09A8\u09BF\u09B8 \u09A4\u09C8\u09B0\u09BF \u09B9\u09AF\u09BC\u09C7\u099B\u09C7! \u0997\u09BF\u09AF\u09BC\u09C7 \u09A6\u09C7\u0996\u09CB\u0964":"Construction complete! Go and have a look.")},450))}function Ob(i){he.suit=i,Ys();let e=Hr.find(t=>t.id===i);xe.kitty.materials.suit.color.set(e.suit),xe.kitty.materials.trim.color.set(e.trim),xe.kitty.cheer()}function qc(i){Ou||i===xe.site.id||(Ou=!0,Ht.rocket(),he.player=xe.home?{x:N.x,z:N.z,yaw:N.yaw}:he.player,ht.fade(!0),setTimeout(()=>{he.site=i,he.visited.includes(i)||he.visited.push(i),Ys(),$c(i),ht.fade(!1),Ou=!1,ht.toast(`\u{1F680} ${cn("landed")}`,"good");let e=i==="home"?vt?.active.find(t=>!In[t.id].good):null;e?Qn(`${Rt==="bn"?"\u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE! \u098F\u0995\u099F\u09BE \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u099B\u09C7:":"Welcome back! A problem is waiting for us:"} ${qs[e.id][Rt][0]}`,8):Qn(pn[i].fact[Rt],9),qr(N.x,N.y+.3,N.z,"#c48a64",40,{speed:6,gravity:-1,size:.3,life:1.6})},900))}function Hm(){N.mode="drive",Ht.door(),xe.kitty.rig.visible=!1}function Im(){let i=xe.rover.state;N.mode="walk";let e=xe.collider.resolve(i.x+Math.cos(i.heading)*2.6,i.z-Math.sin(i.heading)*2.6,.45);N.x=e.x,N.z=e.z,xe.kitty.rig.visible=!0}var Vr=new D,va=new D,qu=new D,Pm=new Be,zu=1/60,Lm=0,Yc=!1,ts=null,ku=0,Yu=Uc(new Date);function Gm(i){if(requestAnimationFrame(Gm),!xe)return;let e=Math.min(.05,(i-Xu)/1e3);if(Xu=i,document.hidden)return;Ju();let t=he.settings.reduced;Jt+=e,ys.time.value=Jt;let n=xe,s=n.site;ku-=e,(!ts||ku<=0)&&(ts=Pp(new Date,s.lon),ku=5,Yu=Uc(new Date)),he.settings.realTime?Xn=ts.lmst:Ms&&!ht.panelOpen&&(Xn+=e*24/360,Xn>=24&&(Xn-=24,he.sols=(he.sols??0)+1,he.base.stats.sols++));let r=vu(Xn,s.moon?0:s.lat,ts.ls);va.set(...Mu(r.azimuth,r.elevation));let o=Yu.elongation*Math.PI/180;qu.set(...Mu(r.azimuth+(Xn>12?-1:1)*o*.8,Math.max(.05,r.elevation+.1)));let a=ct(1-(va.y+.05)/.17,0,1),l=!Ms||ht.panelOpen;if(vt&&!l){let S={dustSeason:ts.dustSeason,night:a>.5,site:s.id,dust:he.base.dust,built:["greenhouse",...he.base.built],realFlare:Um,paused:l,leakModules:n.home?n.placed.map(C=>C.id).filter(C=>n.interiors.anchors.leak[C]):["hub"],available:()=>n.home},{started:_,finished:b}=Vp(vt,e,S);_&&Om(_);for(let C of b)Xr.delete(C.uid);let R=vt.active.find(C=>C.id==="dustStorm"&&C.phase==="cleanup");R&&!R.announced&&(R.announced=!0,he.base.dust=Math.max(he.base.dust,.65),Qn(qs.dustStormCleanup[Rt].join(" "))),R&&!n.home&&Su(vt,R.uid,60);let A=vt.active.find(C=>C.id==="dustDevilClean");A&&A.age>6&&!A.cleaned&&(A.cleaned=!0,he.base.dust=Math.max(0,he.base.dust-.5),ht.toast("\u{1F300} \u2600\uFE0F","good"));let L=vt.active.find(C=>C.id==="solarFlare"&&C.phase==="active");if(L&&n.home){let C=bs("shelter");C&&Math.hypot(N.x-C.x,N.z-C.z)<2.6&&!L.safe&&(L.safe=!0,Gr(L,{science:4}))}}let c=vt?Wp(vt):0;if(!l){let S=(Xn+(pn.home.lon-s.lon)/15+48)%24,_=vu(S,pn.home.lat,ts.ls),b=vt&&n.home?wu(vt):{},R=zp(he.base,{sunElevation:_.elevation,night:_.elevation<0,storm:n.home?c:0,problems:b},e*24/360);n.rates=R,he.base.built.includes("observatory")&&Math.random()<e/60&&(he.base.stuff.science+=1)}ys.growth.value=he.base.crops,ys.mold.value=Lt(ys.mold.value,vt?.active.some(S=>S.id==="mold"&&S.phase==="active")?1:0,1,e),lm(e,{water:he.base.tanks.water>2?1:0,power:Math.max(.1,(n.rates?.solar??0)/20),oxygen:1});let h=Cm.poll();for(let S of Cm.take())Bb(S);vn?Kb(e,h):l||kb(e,h,t),Bu=nn,nn=n.home&&N.mode==="walk"?zc(n.placed,N.x,N.z):null,(nn?.kind??null)!==(Bu?.kind??null)&&Ms&&(n.kitty.setHelmet(!nn),!!nn!=!!Bu&&Ht.door()),n.kitty.setHelmet(!nn);let d=Vr.set(N.x,N.y,N.z),u=n.sky.update({sunDir:va,earthDir:qu,hours:Xn,storm:c,focus:d,indoors:nn?1:0,time:Jt,shadowSize:nn?30:60});n.sky.dome.position.copy(Pn.position),n.sky.fogColor(Pm,c),n.scene.fog.color.copy(Pm);let f=s.sky==="space"?0:1;n.scene.fog.near=ot(60,4,c)*f+(1-f)*300,n.scene.fog.far=ot(340,45,c)*f+(1-f)*900,vt?.active.find(S=>S.id==="solarFlare"&&S.phase==="active")&&n.sky.hemi.color.offsetHSL(0,0,Math.sin(Jt*6)*.02),n.wind.elapsed.value=t?0:Jt,n.wind.storm.value=c,n.wind.inside.value=nn||s.sky==="space"?1:0,n.wind.center.value.set(N.x,n.terrainHeight(N.x,N.z),N.z);let x=ei.getPixelRatio();n.wind.pixel.value=x,n.devils.update(e,Jt,{avoid:n.home?n.placed.map(S=>({x:S.x,z:S.z,r:(S.r??10)+6})):[],reduced:t,pixel:x});for(let S of n.devils.devils)S.pts.visible=c<.4&&!N.underground;n.bursts.update(e,x),n.home?Vb(e,a,c,t):Wb(e,t),qb(e,t),Xb(),n.headlamp.intensity=!nn&&N.mode==="walk"?a*38+(N.underground?45:0):0,B.window().emissive.setRGB(ot(.11,1,a),ot(.18,.78,a),ot(.3,.42,a)),B.window().emissiveIntensity=ot(.35,1.4,a);let g=Yb(),m=N.heading+Math.PI/2,y=Vr.set(N.x+Math.sin(m)*1.1+Math.sin(N.heading)*.8,N.y+(N.mode==="drive"?3.4:2.1),N.z+Math.cos(m)*1.1+Math.cos(N.heading)*.8);n.dhrubo.update(e,Jt,y,g?new D(g.x,N.y+1,g.z):Pn.position,t),n.dhrubo.setMood(vt?.active.some(S=>!In[S.id].good&&S.phase!=="warning")?"worried":"happy"),n.dhrubo.root.visible=N.mode!=="drone"&&!vn,Zb(e,h,t),Ht.ambience(nn?1:N.underground?.7:0,c,nn?.module==="power"?1:nn?.module==="life"?.6:0);let v=Ms&&!vn?Ku():null,M=null;if(v){let S=v.verb==="hold"?cn("hold"):cn("tap");M={text:`${Hu?"\u270B":"E"} \xB7 ${S}: ${v.label[Rt]??v.label.en}`,verb:v.verb,progress:Ii.id===Vm(v)?Ii.t/1.1:0}}N.mode==="drive"&&(M={text:`${Hu?"\u{1F6DE}":"E / R"} \xB7 ${cn("leaveRover")}`,verb:"tap"});let w=n.home?vt?.active.find(S=>!(S.id==="dustStorm"&&S.phase==="active"&&S.age>20))??null:null;ht.update({site:s.id,clock:ts,hours:Xn,base:he.base,colonySol:(he.sols??0)+1,objectives:n.objectives,alert:w?{id:w.phase==="cleanup"?"dustStormCleanup":w.id,phase:w.phase,good:In[w.id].good}:null,prompt:M,marker:Ms&&!vn?$b(g):null,emergency:he.base.emergency,drone:N.mode==="drone"?n.drone.state:null,showDrone:!!n.drone,showRover:N.mode==="drive"}),Pi?Pi.render():ei.render(n.scene,Pn),zu=ot(zu,e,.05),Lm+=e,Lm>4&&zu>1/26&&!Yc&&he.settings.quality!=="low"&&(Yc=!0,he.settings.quality=he.settings.quality==="high"?"medium":"low",Zu()),Fu+=e,Fu>5&&Ms&&(Fu=0,he.hours=Xn,he.skill=vt?.skill??1,he.history=vt?.history??[],n.home&&N.mode==="walk"&&(he.player={x:N.x,z:N.z,yaw:N.yaw}),Ys())}var Vm=i=>`${i.id}-${i.event?.uid??""}-${i.collectible?xe.collectibles.indexOf(i.collectible):""}`;function Bb(i){if(Ms&&!(ht.panelOpen&&i!=="menu")&&!vn)switch(i){case"act":{if(N.mode==="drive")return Im();if(N.mode==="drone")return Qu();let e=Ku();e&&e.verb!=="hold"&&zm(e);return}case"rover":N.mode==="drive"?Im():Math.hypot(xe.rover.state.x-N.x,xe.rover.state.z-N.z)<4&&Hm();return;case"jump":N.mode==="walk"&&N.grounded&&(N.vy=xe.site.moon?5.2:4.4,N.grounded=!1,xe.site.moon&&ht.toast(cn("phobosJump")));return;case"map":return ht.mapMenu(xe.site.id,he.visited,qc);case"build":return xe.home?ht.buildMenu(he.base,ju):ht.toast(Rt==="bn"?"\u09AC\u09BE\u09A1\u09BC\u09BF \u09AB\u09BF\u09B0\u09C7 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09CB\u0964":"Build things back at home base.");case"photo":return Jb();case"drone":return Gb();case"menu":return ht.panelOpen?ht.closePanel():ht.settings(he.settings,zb)}}function zb(i,e){if(i==="language"){Rt=Rt==="bn"?"en":"bn";try{localStorage.setItem("astro-kitty-profile-v1",JSON.stringify({...$u,language:Rt}))}catch{}ht.relabel();return}he.settings[i]=e,i==="sound"&&(Ht.setEnabled(e),Mp(e)),i==="quality"&&(Yc=!0,$c(xe.site.id)),Ys()}function kb(i,e,t){let n=xe,[s,r]=e.move;if(N.yaw-=e.look[0],N.pitch=ct(N.pitch+e.look[1],-.15,1.2),N.dist=ct(N.dist+e.zoom*.8,3.5,34),e.look[0]||e.look[1]?N.lookIdle=0:N.lookIdle+=i,N.mode==="drive"){let b=n.rover.drive(i,r,s,{night:Dm(),reduced:t});N.x=b.x,N.z=b.z,N.y=n.rover.model.root.position.y+1.2,N.heading=b.heading,Math.abs(b.speed)>1&&N.lookIdle>1&&(N.yaw=Ti(N.yaw,b.heading,2,i)),b.dust>.2&&Math.random()<b.dust*.6&&n.bursts.emit(b.x+Math.sin(b.heading)*1.8,n.terrainHeight(b.x,b.z)+.3,b.z+Math.cos(b.heading)*1.8,{count:2,color:"#c48a64",speed:1.2,up:.6,gravity:-.4,life:1.6,size:.35,grow:.5});return}if(N.mode==="drone"){n.drone.control(i,r,s,e.up,0),n.drone.state.battery<=0&&(Qu(),ht.toast(cn("droneDone"))),Hb(n.drone.state.x,n.drone.state.z,26);return}n.rover.idle(i,Dm());let o=!!zc(n.placed??[],N.x,N.z),a=(e.run?6.4:o?3.2:3.8)*Math.min(1,Math.hypot(s,r)),l=-Math.sin(N.yaw),c=-Math.cos(N.yaw),h=Math.cos(N.yaw),d=-Math.sin(N.yaw),u=l*r+h*s,f=c*r+d*s,p=Math.hypot(u,f);p>.001&&(u=u/p*a,f=f/p*a),N.vx=Lt(N.vx??0,u,10,i),N.vz=Lt(N.vz??0,f,10,i);let x=N.x+N.vx*i,g=N.z+N.vz*i,m=n.site.size/2-3,y=n.collider.resolve(ct(x,-m,m),ct(g,-m,m),.42);N.underground&&!Eu(n.site.cave,y.x,y.z)&&(y={x:N.x,z:N.z});let v=Math.hypot(y.x-N.x,y.z-N.z);if(N.x=y.x,N.z=y.z,v>.002&&(N.heading=Ti(N.heading,Math.atan2(-N.vx,-N.vz),10,i)),v>.01&&N.lookIdle>1.5&&!nn&&(N.yaw=Ti(N.yaw,N.heading,1.2,i)),n.site.cave){let b=n.site.cave,R=Math.hypot(N.x-b.x,N.z-b.z)<b.r;R&&N.y<-b.depth+4&&(N.underground=!0),R&&N.y>-b.depth+6&&(N.underground=!1)}let M=n.groundAt(N.x,N.z,N.underground),w=n.site.gravity;N.vy-=w*i*(n.site.moon?.7:1.6),N.y+=N.vy*i,N.y<=M?(!N.grounded&&N.vy<-3&&(Ht.thump(),nn||qr(N.x,M+.1,N.z,"#c48a64",10,{speed:1.5,gravity:-1,size:.2,life:.8})),N.y=N.grounded?Lt(N.y,M,18,i):M,N.vy=0,N.grounded=!0):N.y-M>.3&&(N.grounded=!1),N.grounded&&(N.y=Math.max(M,Lt(N.y,M,14,i)));let S=v/i;n.kitty.rig.position.set(N.x,0,N.z),n.kitty.rig.rotation.y=N.heading,n.kitty.animate(i,S,N.y,Ii.id?ct(Ii.t/1.1,0,1):0,t),N.stride+=v,N.stride>.8&&N.grounded&&(N.stride=0,!nn&&!t&&n.bursts.emit(N.x,N.y+.05,N.z,{count:2,color:"#b98067",speed:.4,up:.4,gravity:-.3,life:.9,size:.12,grow:.15}));let _=Ku();if(_&&_.verb==="hold"&&e.act){let b=Vm(_);Ii.id!==b&&(Ii={id:b,t:0}),Ii.t+=i*(he.base.built.includes("printer")?1.4:1),!t&&Math.random()<.3&&n.bursts.emit(_.x,N.y+1,_.z,{count:1,color:_.id==="leak"?"#ffd27a":"#fff1d0",speed:2,life:.4,size:.06}),Ii.t>=1.1&&(Ii={id:null,t:0},zm(_))}else Ii={id:null,t:0}}function Hb(i,e,t){if(!xe.home)for(let n of xe.collectibles)n.hidden&&!n.revealed&&Math.hypot(n.x-i,n.z-e)<t&&(n.revealed=!0,ht.toast(`\u{1F681} ${cn("droneReveal")}`,"good"))}function Gb(){let i=xe;if(!i.drone)return ht.toast(Rt==="bn"?"\u0986\u0997\u09C7 \u09A1\u09CD\u09B0\u09CB\u09A8 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09CB (\u09A4\u09C8\u09B0\u09BF \u09AE\u09C7\u09A8\u09C1)\u0964":"Build the drone first (Build menu).");if(N.mode==="drone")return Qu();N.mode==="walk"&&(N.mode="drone",Object.assign(i.drone.state,{x:N.x+1,z:N.z+1,y:N.y+2,battery:1,heading:N.yaw}),Ht.click())}function Qu(){N.mode="walk",Ht.thump()}function Dm(){return ct(1-(va.y+.05)/.17,0,1)}function Vb(i,e,t,n){let s=xe,r=vt?wu(vt):{};s.structures.update(i,nn,[N,...s.crew.members.map(u=>u.kitty.rig.position)],n);let o=[{x:N.x,z:N.z},{x:s.rover.state.x,z:s.rover.state.z}];for(let u of s.structures.airlocks){let f=o.some(x=>Math.hypot(x.x-u.a.outer[0],x.z-u.a.outer[1])<(u.a.wide?6:3.4)),p=s.structures.driveAirlock(u,f,i,n);s.collider.setEnabled(u.a.id,p<.7),f&&!u.wasNear&&(Ht.door(),n||s.bursts.emit(u.a.outer[0],ke+1.5,u.a.outer[1],{count:14,color:"#e6f3ff",speed:1.4,life:.8,size:.2,grow:.4,gravity:.2})),u.wasNear=f}hm(s.interiors.list,nn?.module);let a=vt?.active.find(u=>u.id==="leak"&&u.phase==="active");for(let u of s.interiors.list){let f=Math.hypot(N.x-u.m.x,N.z-u.m.z)<40;u.animate(Jt,i,{near:f,tanks:he.base.tanks,crops:he.base.crops,mold:r.mold,filterClog:r.filterClog,surge:r.surge,breakers:he.base.breakers,rates:s.rates??{solar:0,reactor:0},charging:(s.rates?.power??0)>0,samples:he.base.stuff.samples,clock:ts,earth:Yu});let p=a&&a.module===u.id||r.mold&&u.id==="greenhouse"||r.surge&&u.id==="power"||r.filterClog&&u.id==="life";for(let x of u.lights)p?x.color.setRGB(1,.25+Math.abs(Math.sin(Jt*4))*.3,.2):x.color.set(x.userData.base??="#"+x.color.getHexString())}if(a){let u=s.interiors.anchors.leak[a.module];u&&!n&&s.bursts.emit(u[0],ke+2.2,u[1],{count:2,color:"#f2f8ff",speed:3,life:.7,size:.18,grow:.6,gravity:.5,dir:[-u[0]/Math.hypot(...u)*.4,.2,-u[1]/Math.hypot(...u)*.4],spread:.6}),u&&Math.random()<i*1.2&&Math.hypot(N.x-u[0],N.z-u[1])<18&&Ht.hiss()}if(r.surge&&Math.random()<i*3){let u=bs("breakers");u&&(s.bursts.emit(u.x-1,ke+1.8,u.z,{count:8,color:"#9fe3ff",speed:4,life:.4,size:.06}),Math.hypot(N.x-u.x,N.z-u.z)<15&&Ht.spark())}r.drillJam&&Math.random()<i*4&&s.bursts.emit(Dt.iceDrill.x,s.terrainHeight(Dt.iceDrill.x,Dt.iceDrill.z)+6.8,Dt.iceDrill.z,{count:1,color:"#4a4040",speed:.6,up:1,gravity:.6,life:2.5,size:.5,grow:.9}),s.outdoor.update(Jt,i,{sunDir:va,earthDir:qu,dust:he.base.dust,storm:t,night:e,drillJam:r.drillJam,comms:r.comms});let l=vt?.active.some(u=>u.id==="solarFlare"&&u.phase==="active"),c=vt?.active.find(u=>u.phase==="active"&&["leak","mold","filterClog","powerSurge"].includes(u.id)),h=c?c.module??{mold:"greenhouse",filterClog:"life",powerSurge:"power"}[c.id]:null,d=l||he.base.emergency?"shelter":h?`help:${h}`:Xn>21||Xn<5.5?"sleep":"normal";s.crew.update(i,Jt,d,n),s.patrol.update(i,e),N.mode!=="drone"&&s.droneBot.patrol(i,Jt,{x:0,z:0}),N.mode==="drone"&&s.drone&&s.droneBot.patrol(i,Jt,{x:0,z:0})}function Wb(i,e){let t=xe;for(let n of t.collectibles){if(n.taken&&n.kind!=="beacon")continue;let s=Math.hypot(N.x-n.x,N.z-n.z);n.hidden&&!n.revealed&&s<9&&(n.revealed=!0);let r=!n.hidden||n.revealed;n.group&&(n.group.visible=r,n.group.rotation.y+=i*.6),n.ring&&n.kind!=="beacon"&&(n.ring.material.opacity=r?.35+Math.sin(Jt*3+n.x)*.25:0),n.kind==="beacon"&&n.taken&&(n.ring.material.opacity=Jt%1.2<.4?1:.2),n.auto&&!n.taken&&s<n.auto&&(!n.underground||N.underground)&&km(n)}if(t.hazards.geysers)for(let n of t.hazards.geysers){let r=(Jt+n.phase)%14<3;r&&!e&&t.bursts.emit(n.x,t.terrainHeight(n.x,n.z),n.z,{count:4,color:"#3a3030",speed:9,up:1.4,gravity:-3,life:2.2,size:.4,grow:.6,spread:.15});let o=Math.hypot(N.x-n.x,N.z-n.z);r&&o<4&&N.mode==="walk"&&(N.vy=5,N.x+=(N.x-n.x)/(o||1)*.3,N.z+=(N.z-n.z)/(o||1)*.3,N.grounded=!1)}if(t.hazards.rockfall){let n=t.hazards.rockfall;if(n.timer-=i,n.timer<=0){n.timer=10+Math.random()*10;let s=N.x+(Math.random()-.5)*40,r=Math.random()<.5?-1:1,o=r*60,a=new Re(new $n(1+Math.random(),0),new nt({color:"#7a5a4e",flatShading:!0}));a.position.set(s,t.terrainHeight(s,o)+2,o),t.scene.add(a),n.rocks.push({mesh:a,vz:-r*6,life:10}),ht.toast(Rt==="bn"?"\u26A0\uFE0F \u09AA\u09BE\u09A5\u09B0 \u0997\u09A1\u09BC\u09BF\u09AF\u09BC\u09C7 \u09AA\u09A1\u09BC\u099B\u09C7!":"\u26A0\uFE0F Rockfall!"),Ht.thump()}for(let s of n.rocks){s.life-=i;let r=s.mesh.position;r.z+=s.vz*i;let o=t.terrainHeight(r.x,r.z)+1;r.y=Lt(r.y,o,6,i),s.mesh.rotation.x+=s.vz*i*.5,!e&&Math.random()<.3&&t.bursts.emit(r.x,o-.8,r.z,{count:1,color:"#b08068",speed:1,life:1.2,size:.4,grow:.5,gravity:-.2}),Math.hypot(N.x-r.x,N.z-r.z)<1.8&&(N.vy=4,N.grounded=!1,N.z+=Math.sign(s.vz)*.6),Math.abs(s.vz)>0&&Math.abs(r.z)<25&&(s.vz*=.97)}n.rocks=n.rocks.filter(s=>s.life>0?!0:(t.scene.remove(s.mesh),!1))}N.mode!=="drone"&&t.drone&&t.drone.pose(i)}function Xb(){xe.drone&&(xe.drone.model.root.visible=N.mode==="drone")}function qb(i,e){let t=xe;if(!(!vt||!t.home)){for(let n of vt.active){let s=Xr.get(n.uid);if(s){if(n.id==="supplyDrop"&&s.target){let r=t.landing,o=Jt-s.started,[a,l]=s.target,c=t.terrainHeight(a,l);if(!s.landed){let h=ct(o/10,0,1);r.group.visible=!0,r.group.position.set(a,c+(1-h)**2*140,l),r.flame.visible=!0,r.flame.scale.y=.8+Math.random()*.4,r.light.visible=!0,h>.85&&!e&&t.bursts.emit(a,c+.3,l,{count:6,color:"#c48a64",speed:7,up:.15,gravity:-.5,life:1.6,size:.6,grow:.8}),h>=1&&(s.landed=!0,r.flame.visible=!1,r.light.visible=!1,Ht.thump(),ht.toast("\u{1F4E6} "+(Rt==="bn"?"\u09B0\u09B8\u09A6 \u09A8\u09C7\u09AE\u09C7\u099B\u09C7!":"Supplies landed!"))),o<.1&&Ht.rocket()}}if(n.id==="meteorite"&&s.target&&!s.landed){let r=ct((Jt-s.started)/3,0,1);s.mesh??=(()=>{let c=tn("#ffd27a",6,1);return t.scene.add(c),c})();let[o,a]=s.target,l=t.terrainHeight(o,a);s.mesh.position.set(ot(s.from[0],o,r),ot(s.from[1],l+.5,r),ot(s.from[2],a,r)),e||t.bursts.emit(s.mesh.position.x,s.mesh.position.y,s.mesh.position.z,{count:3,color:"#ffb35a",speed:.5,life:1,size:.5,gravity:0}),r>=1&&(s.landed=!0,s.mesh.scale.setScalar(1.6),Ht.thump(),t.bursts.emit(o,l+.2,a,{count:50,color:"#c48a64",speed:8,up:.5,gravity:-2,life:1.8,size:.5,grow:.6}))}n.id==="meteorite"&&s.landed&&s.mesh&&(s.mesh.material.opacity=.5+Math.sin(Jt*4)*.3)}}vt.active.some(n=>n.id==="supplyDrop")||(t.landing.group.visible=!1)}}function Yb(){if(!vt)return null;let i=xe;for(let e of vt.active){let t=Bm(e);if(t)return t}if(!i.home){let e=null;for(let t of i.collectibles){if(t.taken||t.hidden&&!t.revealed)continue;let n=Math.hypot(t.x-N.x,t.z-N.z);(!e||n<e.d)&&(e={x:t.x,z:t.z,d:n})}if(e)return e;if(i.objectives?.every(t=>t.done))return{x:i.site.spawn.x,z:i.site.spawn.z}}return null}function $b(i){if(!i)return null;let e=xe.groundAt(i.x,i.z,N.underground)+1.6;Vr.set(i.x,e,i.z).project(Pn);let t=Gu,n=Vu,s=Vr.z>1,r=(Vr.x*.5+.5)*t,o=(-Vr.y*.5+.5)*n;s&&(r=t-r,o=n-60);let a=46,l=175,c=s||r<a||r>t-a-30||o<l||o>n-a-110;r=ct(r,a,t-a-30),o=ct(o,l,n-a-110);let h=c?Math.atan2(o-n/2,r-t/2)+Math.PI/2:Math.PI,d=Math.round(Math.hypot(i.x-N.x,i.z-N.z));return{x:r,y:o,angle:h,edge:c,label:d>3?`${d} m`:""}}function Zb(i,e,t){let n=xe,s,r=N.dist,o=N.pitch,a=N.yaw;if(N.mode==="drive")s=Uu.set(N.x,N.y+.8,N.z),r=Math.max(r,10),o=Math.max(o,.35);else if(N.mode==="drone"){let d=n.drone.state;s=Uu.set(d.x,d.y,d.z),a=d.heading,r=7,o=.5}else s=Uu.set(N.x,N.y+1.4,N.z);nn&&(r=Math.min(r,7.5),o=Math.max(o,.85)),N.underground&&(r=Math.min(r,4.2),o=ct(o,.1,.4));let l=Math.cos(o);if(ui.set(s.x+Math.sin(a)*l*r,s.y+Math.sin(o)*r,s.z+Math.cos(a)*l*r),!nn&&!N.underground&&n.collider){let d=n.collider.raycast(s.x,s.z,ui.x,ui.z);d<1&&ui.lerpVectors(s,ui,Math.max(.25,d-.05))}let c=n.terrainHeight(ui.x,ui.z)+.6;N.underground||(ui.y=Math.max(ui.y,c));let h=t?1:1-Math.exp(-i*10);Pn.position.lengthSq()===0&&Pn.position.copy(ui),Pn.position.lerp(ui,h),Wc.lerp(s,h),Wc.lengthSq()===0&&Wc.copy(s),Pn.lookAt(Wc)}function Jb(){vn||(vn={yaw:N.yaw,pitch:.3,dist:6,bar:null},ht.hide(!0),vn.bar=ht.photo(jb,Qb,()=>{vn=null,ht.hide(!1)}))}function Kb(i,e){vn.yaw-=e.look[0],vn.pitch=ct(vn.pitch+e.look[1],-.2,1.3),vn.dist=ct(vn.dist+e.zoom*.6,2.5,25),N.yaw=vn.yaw,N.pitch=vn.pitch,N.dist=vn.dist,xe.kitty.animate(i,0,N.y,0,!1)}function Wm(){return Pi?Pi.render():ei.render(xe.scene,Pn),ei.domElement.toDataURL("image/png")}function jb(){Ht.click(),ht.showPicture(Wm())}function Qb(){let i=new Image;i.onload=()=>{let e=document.createElement("canvas");e.width=i.width+60,e.height=i.height+160;let t=e.getContext("2d");t.fillStyle="#fff6e8",t.fillRect(0,0,e.width,e.height),t.drawImage(i,30,30),t.fillStyle="#14233c",t.font=`bold ${Math.round(e.width/28)}px system-ui`;let n=(()=>{try{return JSON.parse(localStorage.getItem("astro-kitty-online-v1")||"{}").player?.kitty_name}catch{return null}})();t.fillText(`${Rt==="bn"?"\u09B6\u09C1\u09AD\u09C7\u099A\u09CD\u099B\u09BE":"Greetings from"} ${pn[xe.site.id].name[Rt]}!`,40,i.height+85),t.font=`${Math.round(e.width/44)}px system-ui`,t.fillStyle="#6b5f73",t.fillText(`${n?n+" \xB7 ":""}${cn("sol")} ${(he.sols??0)+1} \xB7 ${cn("marsYear")} ${ts.marsYear} \xB7 Astro Kitty \u{1F431}\u{1F680}`,40,i.height+130),ht.showPicture(e.toDataURL("image/png"))},i.src=Wm()}$c(he.site);Wr.querySelector(".cx-loading")?.remove();Pn.position.set(N.x+6,N.y+5,N.z+8);ht.title(Tb,Fm);addEventListener("resize",()=>Ju());requestAnimationFrame(i=>{Xu=i,Gm(i)});Ss.addEventListener("pointerdown",()=>Ht.unlock(),{once:!0});"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js?v=10").catch(()=>{});window.__colony={get world(){return xe},player:N,get save(){return he},get director(){return vt},start:Fm,travel:qc,buy:ju,setHours(i){Xn=i},setQuality(i){he.settings.quality=i,Yc=!0,Zu()},trigger(i){let e=bu(vt,i,Math.random,{leakModules:["greenhouse"]});return e.phase="active",Om(e),e},teleport(i,e){N.x=i,N.z=e,N.y=xe.groundAt(i,e)}};
