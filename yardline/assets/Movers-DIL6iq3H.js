import{r as Ee,s as lp,g as lS,j as V,d as cS,b as uS}from"./react-CQapOqTb.js";import{u as Ci,P as Ec,F as n_,t as hS,w as Li,y as fS,R as i_,T as dS,Q as id,o as Ac,n as pS,p as rd,V as Tc,j as mS,U as r0,W as s0,Y as o0}from"./index--lOg8CUJ.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="169",gS={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vS={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},r_=0,cp=1,s_=2,_S=3,o_=0,mh=1,Da=2,bi=3,Sr=0,Dn=1,Pi=2,yr=0,Ps=1,up=2,hp=3,fp=4,a_=5,jr=100,l_=101,c_=102,u_=103,h_=104,f_=200,d_=201,p_=202,m_=203,Cu=204,Ru=205,g_=206,v_=207,__=208,x_=209,y_=210,S_=211,M_=212,w_=213,E_=214,Pu=0,Iu=1,Lu=2,Ns=3,Du=4,Uu=5,Nu=6,Ou=7,fl=0,A_=1,T_=2,Qi=0,b_=1,C_=2,R_=3,Rp=4,P_=5,I_=6,L_=7,dp="attached",D_="detached",gh=300,Mr=301,Kr=302,Ga=303,Wa=304,Go=306,Xa=1e3,yi=1001,Ya=1002,gn=1003,Pp=1004,xS=1004,Ro=1005,yS=1005,an=1006,Ua=1007,SS=1007,Ji=1008,MS=1008,Ui=1009,Ip=1010,Lp=1011,Fo=1012,vh=1013,wr=1014,Jn=1015,Wo=1016,_h=1017,xh=1018,Os=1020,Dp=35902,Up=1021,Np=1022,Ln=1023,Op=1024,Fp=1025,Is=1026,Fs=1027,yh=1028,dl=1029,Bp=1030,Sh=1031,wS=1032,Mh=1033,Na=33776,Oa=33777,Fa=33778,Ba=33779,Fu=35840,Bu=35841,zu=35842,ku=35843,Hu=36196,Vu=37492,Gu=37496,Wu=37808,Xu=37809,Yu=37810,qu=37811,ju=37812,Zu=37813,Ju=37814,Ku=37815,Qu=37816,$u=37817,eh=37818,th=37819,nh=37820,ih=37821,za=36492,rh=36494,sh=36495,zp=36283,oh=36284,ah=36285,lh=36286,U_=2200,N_=2201,O_=2202,qa=2300,ch=2301,Eu=2302,Ts=2400,bs=2401,ja=2402,wh=2500,kp=2501,ES=0,AS=1,TS=2,F_=3200,B_=3201,bS=3202,CS=3203,$r=0,z_=1,vr="",jn="srgb",Tr="srgb-linear",Eh="display-p3",pl="display-p3-linear",Za="linear",Vt="srgb",Ja="rec709",Ka="p3",RS=0,ws=7680,PS=7681,IS=7682,LS=7683,DS=34055,US=34056,NS=5386,OS=512,FS=513,BS=514,zS=515,kS=516,HS=517,VS=518,pp=519,k_=512,H_=513,V_=514,Hp=515,G_=516,W_=517,X_=518,Y_=519,Qa=35044,GS=35048,WS=35040,XS=35045,YS=35049,qS=35041,jS=35046,ZS=35050,JS=35042,KS="100",mp="300 es",Ki=2e3,$a=2001;class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let a0=1234567;const Ls=Math.PI/180,Bo=180/Math.PI;function ai(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function Qt(r,e,t){return Math.max(e,Math.min(t,r))}function Vp(r,e){return(r%e+e)%e}function QS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function $S(r,e,t){return r!==e?(t-r)/(e-r):0}function ka(r,e,t){return(1-t)*r+t*e}function eM(r,e,t,n){return ka(r,e,1-Math.exp(-t*n))}function tM(r,e=1){return e-Math.abs(Vp(r,e*2)-e)}function nM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function iM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function rM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function sM(r,e){return r+Math.random()*(e-r)}function oM(r){return r*(.5-Math.random())}function aM(r){r!==void 0&&(a0=r);let e=a0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lM(r){return r*Ls}function cM(r){return r*Bo}function uM(r){return(r&r-1)===0&&r!==0}function hM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function fM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function dM(r,e,t,n,i){const s=Math.cos,a=Math.sin,c=s(t/2),u=a(t/2),h=s((e+n)/2),f=a((e+n)/2),p=s((e-n)/2),m=a((e-n)/2),g=s((n-e)/2),x=a((n-e)/2);switch(i){case"XYX":r.set(c*f,u*p,u*m,c*h);break;case"YZY":r.set(u*m,c*f,u*p,c*h);break;case"ZXZ":r.set(u*p,u*m,c*f,c*h);break;case"XZX":r.set(c*f,u*x,u*g,c*h);break;case"YXY":r.set(u*g,c*f,u*x,c*h);break;case"ZYZ":r.set(u*x,u*g,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Gp={DEG2RAD:Ls,RAD2DEG:Bo,generateUUID:ai,clamp:Qt,euclideanModulo:Vp,mapLinear:QS,inverseLerp:$S,lerp:ka,damp:eM,pingpong:tM,smoothstep:nM,smootherstep:iM,randInt:rM,randFloat:sM,randFloatSpread:oM,seededRandom:aM,degToRad:lM,radToDeg:cM,isPowerOfTwo:uM,ceilPowerOfTwo:hM,floorPowerOfTwo:fM,setQuaternionFromProperEuler:dM,normalize:vt,denormalize:Hn};class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,n,i,s,a,c,u,h){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h)}set(e,t,n,i,s,a,c,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[3],u=n[6],h=n[1],f=n[4],p=n[7],m=n[2],g=n[5],x=n[8],w=i[0],y=i[3],_=i[6],E=i[1],M=i[4],A=i[7],U=i[2],P=i[5],L=i[8];return s[0]=a*w+c*E+u*U,s[3]=a*y+c*M+u*P,s[6]=a*_+c*A+u*L,s[1]=h*w+f*E+p*U,s[4]=h*y+f*M+p*P,s[7]=h*_+f*A+p*L,s[2]=m*w+g*E+x*U,s[5]=m*y+g*M+x*P,s[8]=m*_+g*A+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*a*f-t*c*h-n*s*f+n*c*u+i*s*h-i*a*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=f*a-c*h,m=c*u-f*s,g=h*s-a*u,x=t*p+n*m+i*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/x;return e[0]=p*w,e[1]=(i*h-f*n)*w,e[2]=(c*n-i*a)*w,e[3]=m*w,e[4]=(f*t-i*u)*w,e[5]=(i*s-c*t)*w,e[6]=g*w,e[7]=(n*u-h*t)*w,e[8]=(a*t-n*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*a+h*c)+a+e,-i*h,i*u,-i*(-h*a+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(sd.makeScale(e,t)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,t){return this.premultiply(sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new gt;function q_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const pM={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Po(r,e){return new pM[r](e)}function el(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function j_(){const r=el("canvas");return r.style.display="block",r}const l0={};function Au(r){r in l0||(l0[r]=!0,console.warn(r))}function mM(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function gM(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vM(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const c0=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),u0=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pa={[Tr]:{transfer:Za,primaries:Ja,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[jn]:{transfer:Vt,primaries:Ja,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[pl]:{transfer:Za,primaries:Ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(u0),fromReference:r=>r.applyMatrix3(c0)},[Eh]:{transfer:Vt,primaries:Ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(u0),fromReference:r=>r.applyMatrix3(c0).convertLinearToSRGB()}},_M=new Set([Tr,pl]),Ot={enabled:!0,_workingColorSpace:Tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!_M.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=pa[e].toReference,i=pa[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return pa[r].primaries},getTransfer:function(r){return r===vr?Za:pa[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(pa[e].luminanceCoefficients)}};function No(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function od(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ao;class Z_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ao===void 0&&(ao=el("canvas")),ao.width=e.width,ao.height=e.height;const n=ao.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ao}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=el("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=No(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(No(t[n]/255)*255):t[n]=No(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xM=0;class Cs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,c=i.length;a<c;a++)i[a].isDataTexture?s.push(ad(i[a].image)):s.push(ad(i[a]))}else s=ad(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ad(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Z_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yM=0;class $t extends nr{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=yi,i=yi,s=an,a=Ji,c=Ln,u=Ui,h=$t.DEFAULT_ANISOTROPY,f=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=ai(),this.name="",this.source=new Cs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xa:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xa:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=gh;$t.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,i=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],p=u[8],m=u[1],g=u[5],x=u[9],w=u[2],y=u[6],_=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-w)<.01&&Math.abs(x-y)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+w)<.1&&Math.abs(x+y)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,A=(g+1)/2,U=(_+1)/2,P=(f+m)/4,L=(p+w)/4,B=(x+y)/4;return M>A&&M>U?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=P/n,s=L/n):A>U?A<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(A),n=P/i,s=B/i):U<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(U),n=L/s,i=B/s),this.set(n,i,s,t),this}let E=Math.sqrt((y-x)*(y-x)+(p-w)*(p-w)+(m-f)*(m-f));return Math.abs(E)<.001&&(E=1),this.x=(y-x)/E,this.y=(p-w)/E,this.z=(m-f)/E,this.w=Math.acos((h+g+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J_ extends nr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends J_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ah extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SM extends Ni{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ah(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Wp extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class MM extends Ni{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Wp(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,c){let u=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3];const m=s[a+0],g=s[a+1],x=s[a+2],w=s[a+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=g,e[t+2]=x,e[t+3]=w;return}if(p!==w||u!==m||h!==g||f!==x){let y=1-c;const _=u*m+h*g+f*x+p*w,E=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const U=Math.sqrt(M),P=Math.atan2(U,_*E);y=Math.sin(y*P)/U,c=Math.sin(c*P)/U}const A=c*E;if(u=u*y+m*A,h=h*y+g*A,f=f*y+x*A,p=p*y+w*A,y===1-c){const U=1/Math.sqrt(u*u+h*h+f*f+p*p);u*=U,h*=U,f*=U,p*=U}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,a){const c=n[i],u=n[i+1],h=n[i+2],f=n[i+3],p=s[a],m=s[a+1],g=s[a+2],x=s[a+3];return e[t]=c*x+f*p+u*g-h*m,e[t+1]=u*x+f*m+h*p-c*g,e[t+2]=h*x+f*g+c*m-u*p,e[t+3]=f*x-c*p-u*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),m=u(n/2),g=u(i/2),x=u(s/2);switch(a){case"XYZ":this._x=m*f*p+h*g*x,this._y=h*g*p-m*f*x,this._z=h*f*x+m*g*p,this._w=h*f*p-m*g*x;break;case"YXZ":this._x=m*f*p+h*g*x,this._y=h*g*p-m*f*x,this._z=h*f*x-m*g*p,this._w=h*f*p+m*g*x;break;case"ZXY":this._x=m*f*p-h*g*x,this._y=h*g*p+m*f*x,this._z=h*f*x+m*g*p,this._w=h*f*p-m*g*x;break;case"ZYX":this._x=m*f*p-h*g*x,this._y=h*g*p+m*f*x,this._z=h*f*x-m*g*p,this._w=h*f*p+m*g*x;break;case"YZX":this._x=m*f*p+h*g*x,this._y=h*g*p+m*f*x,this._z=h*f*x-m*g*p,this._w=h*f*p-m*g*x;break;case"XZY":this._x=m*f*p-h*g*x,this._y=h*g*p-m*f*x,this._z=h*f*x+m*g*p,this._w=h*f*p+m*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],c=t[5],u=t[9],h=t[2],f=t[6],p=t[10],m=n+c+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-u)*g,this._y=(s-h)*g,this._z=(a-i)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(f-u)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(s+h)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(s-h)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(a-i)/g,this._x=(s+h)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+a*c+i*h-s*u,this._y=i*f+a*u+s*c-n*h,this._z=s*f+a*h+n*u-i*c,this._w=a*f-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let c=a*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),f=Math.atan2(h,c),p=Math.sin((1-t)*f)/h,m=Math.sin(t*f)/h;return this._w=a*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(h0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(h0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,c=e.z,u=e.w,h=2*(a*i-c*n),f=2*(c*t-s*i),p=2*(s*n-a*t);return this.x=t+u*h+a*p-c*f,this.y=n+u*f+c*h-s*p,this.z=i+u*p+s*f-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*a-n*u,this.z=n*c-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ld=new D,h0=new Kn;class vn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,Ei):Ei.fromBufferAttribute(s,a),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bc.copy(n.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Cc.subVectors(this.max,ma),lo.subVectors(e.a,ma),co.subVectors(e.b,ma),uo.subVectors(e.c,ma),Br.subVectors(co,lo),zr.subVectors(uo,co),hs.subVectors(lo,uo);let t=[0,-Br.z,Br.y,0,-zr.z,zr.y,0,-hs.z,hs.y,Br.z,0,-Br.x,zr.z,0,-zr.x,hs.z,0,-hs.x,-Br.y,Br.x,0,-zr.y,zr.x,0,-hs.y,hs.x,0];return!cd(t,lo,co,uo,Cc)||(t=[1,0,0,0,1,0,0,0,1],!cd(t,lo,co,uo,Cc))?!1:(Rc.crossVectors(Br,zr),t=[Rc.x,Rc.y,Rc.z],cd(t,lo,co,uo,Cc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hr=[new D,new D,new D,new D,new D,new D,new D,new D],Ei=new D,bc=new vn,lo=new D,co=new D,uo=new D,Br=new D,zr=new D,hs=new D,ma=new D,Cc=new D,Rc=new D,fs=new D;function cd(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){fs.fromArray(r,s);const c=i.x*Math.abs(fs.x)+i.y*Math.abs(fs.y)+i.z*Math.abs(fs.z),u=e.dot(fs),h=t.dot(fs),f=n.dot(fs);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const wM=new vn,ga=new D,ud=new D;class _n{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ga,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(ud)),this.expandByPoint(ga.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fr=new D,hd=new D,Pc=new D,kr=new D,fd=new D,Ic=new D,dd=new D;class Xo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,t),fr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hd.copy(e).add(t).multiplyScalar(.5),Pc.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(hd);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Pc),c=kr.dot(this.direction),u=-kr.dot(Pc),h=kr.lengthSq(),f=Math.abs(1-a*a);let p,m,g,x;if(f>0)if(p=a*u-c,m=a*c-u,x=s*f,p>=0)if(m>=-x)if(m<=x){const w=1/f;p*=w,m*=w,g=p*(p+a*m+2*c)+m*(a*p+m+2*u)+h}else m=s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;else m<=-x?(p=Math.max(0,-(-a*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h):m<=x?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(p=Math.max(0,-(a*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h);else m=a>0?-s:s,p=Math.max(0,-(a*m+c)),g=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(hd).addScaledVector(Pc,m),g}intersectSphere(e,t){fr.subVectors(e.center,this.origin);const n=fr.dot(this.direction),i=fr.dot(fr)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),c=n-a,u=n+a;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,c,u;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),f>=0?(s=(e.min.y-m.y)*f,a=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,a=(e.min.y-m.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,t,n,i,s){fd.subVectors(t,e),Ic.subVectors(n,e),dd.crossVectors(fd,Ic);let a=this.direction.dot(dd),c;if(a>0){if(i)return null;c=1}else if(a<0)c=-1,a=-a;else return null;kr.subVectors(this.origin,e);const u=c*this.direction.dot(Ic.crossVectors(kr,Ic));if(u<0)return null;const h=c*this.direction.dot(fd.cross(kr));if(h<0||u+h>a)return null;const f=-c*kr.dot(dd);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,s,a,c,u,h,f,p,m,g,x,w,y){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,c,u,h,f,p,m,g,x,w,y)}set(e,t,n,i,s,a,c,u,h,f,p,m,g,x,w,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=c,_[13]=u,_[2]=h,_[6]=f,_[10]=p,_[14]=m,_[3]=g,_[7]=x,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ho.setFromMatrixColumn(e,0).length(),s=1/ho.setFromMatrixColumn(e,1).length(),a=1/ho.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*f,g=a*p,x=c*f,w=c*p;t[0]=u*f,t[4]=-u*p,t[8]=h,t[1]=g+x*h,t[5]=m-w*h,t[9]=-c*u,t[2]=w-m*h,t[6]=x+g*h,t[10]=a*u}else if(e.order==="YXZ"){const m=u*f,g=u*p,x=h*f,w=h*p;t[0]=m+w*c,t[4]=x*c-g,t[8]=a*h,t[1]=a*p,t[5]=a*f,t[9]=-c,t[2]=g*c-x,t[6]=w+m*c,t[10]=a*u}else if(e.order==="ZXY"){const m=u*f,g=u*p,x=h*f,w=h*p;t[0]=m-w*c,t[4]=-a*p,t[8]=x+g*c,t[1]=g+x*c,t[5]=a*f,t[9]=w-m*c,t[2]=-a*h,t[6]=c,t[10]=a*u}else if(e.order==="ZYX"){const m=a*f,g=a*p,x=c*f,w=c*p;t[0]=u*f,t[4]=x*h-g,t[8]=m*h+w,t[1]=u*p,t[5]=w*h+m,t[9]=g*h-x,t[2]=-h,t[6]=c*u,t[10]=a*u}else if(e.order==="YZX"){const m=a*u,g=a*h,x=c*u,w=c*h;t[0]=u*f,t[4]=w-m*p,t[8]=x*p+g,t[1]=p,t[5]=a*f,t[9]=-c*f,t[2]=-h*f,t[6]=g*p+x,t[10]=m-w*p}else if(e.order==="XZY"){const m=a*u,g=a*h,x=c*u,w=c*h;t[0]=u*f,t[4]=-p,t[8]=h*f,t[1]=m*p+w,t[5]=a*f,t[9]=g*p-x,t[2]=x*p-g,t[6]=c*f,t[10]=w*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EM,e,AM)}lookAt(e,t,n){const i=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Hr.crossVectors(n,ri),Hr.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Hr.crossVectors(n,ri)),Hr.normalize(),Lc.crossVectors(ri,Hr),i[0]=Hr.x,i[4]=Lc.x,i[8]=ri.x,i[1]=Hr.y,i[5]=Lc.y,i[9]=ri.y,i[2]=Hr.z,i[6]=Lc.z,i[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],c=n[4],u=n[8],h=n[12],f=n[1],p=n[5],m=n[9],g=n[13],x=n[2],w=n[6],y=n[10],_=n[14],E=n[3],M=n[7],A=n[11],U=n[15],P=i[0],L=i[4],B=i[8],z=i[12],b=i[1],C=i[5],Y=i[9],j=i[13],Q=i[2],re=i[6],Z=i[10],he=i[14],ee=i[3],Ae=i[7],me=i[11],ve=i[15];return s[0]=a*P+c*b+u*Q+h*ee,s[4]=a*L+c*C+u*re+h*Ae,s[8]=a*B+c*Y+u*Z+h*me,s[12]=a*z+c*j+u*he+h*ve,s[1]=f*P+p*b+m*Q+g*ee,s[5]=f*L+p*C+m*re+g*Ae,s[9]=f*B+p*Y+m*Z+g*me,s[13]=f*z+p*j+m*he+g*ve,s[2]=x*P+w*b+y*Q+_*ee,s[6]=x*L+w*C+y*re+_*Ae,s[10]=x*B+w*Y+y*Z+_*me,s[14]=x*z+w*j+y*he+_*ve,s[3]=E*P+M*b+A*Q+U*ee,s[7]=E*L+M*C+A*re+U*Ae,s[11]=E*B+M*Y+A*Z+U*me,s[15]=E*z+M*j+A*he+U*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],c=e[5],u=e[9],h=e[13],f=e[2],p=e[6],m=e[10],g=e[14],x=e[3],w=e[7],y=e[11],_=e[15];return x*(+s*u*p-i*h*p-s*c*m+n*h*m+i*c*g-n*u*g)+w*(+t*u*g-t*h*m+s*a*m-i*a*g+i*h*f-s*u*f)+y*(+t*h*p-t*c*g-s*a*p+n*a*g+s*c*f-n*h*f)+_*(-i*c*f-t*u*p+t*c*m+i*a*p-n*a*m+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=e[9],m=e[10],g=e[11],x=e[12],w=e[13],y=e[14],_=e[15],E=p*y*h-w*m*h+w*u*g-c*y*g-p*u*_+c*m*_,M=x*m*h-f*y*h-x*u*g+a*y*g+f*u*_-a*m*_,A=f*w*h-x*p*h+x*c*g-a*w*g-f*c*_+a*p*_,U=x*p*u-f*w*u-x*c*m+a*w*m+f*c*y-a*p*y,P=t*E+n*M+i*A+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=E*L,e[1]=(w*m*s-p*y*s-w*i*g+n*y*g+p*i*_-n*m*_)*L,e[2]=(c*y*s-w*u*s+w*i*h-n*y*h-c*i*_+n*u*_)*L,e[3]=(p*u*s-c*m*s-p*i*h+n*m*h+c*i*g-n*u*g)*L,e[4]=M*L,e[5]=(f*y*s-x*m*s+x*i*g-t*y*g-f*i*_+t*m*_)*L,e[6]=(x*u*s-a*y*s-x*i*h+t*y*h+a*i*_-t*u*_)*L,e[7]=(a*m*s-f*u*s+f*i*h-t*m*h-a*i*g+t*u*g)*L,e[8]=A*L,e[9]=(x*p*s-f*w*s-x*n*g+t*w*g+f*n*_-t*p*_)*L,e[10]=(a*w*s-x*c*s+x*n*h-t*w*h-a*n*_+t*c*_)*L,e[11]=(f*c*s-a*p*s-f*n*h+t*p*h+a*n*g-t*c*g)*L,e[12]=U*L,e[13]=(f*w*i-x*p*i+x*n*m-t*w*m-f*n*y+t*p*y)*L,e[14]=(x*c*i-a*w*i-x*n*u+t*w*u+a*n*y-t*c*y)*L,e[15]=(a*p*i-f*c*i+f*n*u-t*p*u-a*n*m+t*c*m)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,c=e.y,u=e.z,h=s*a,f=s*c;return this.set(h*a+n,h*c-i*u,h*u+i*c,0,h*c+i*u,f*c+n,f*u-i*a,0,h*u-i*c,f*u+i*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,c=t._z,u=t._w,h=s+s,f=a+a,p=c+c,m=s*h,g=s*f,x=s*p,w=a*f,y=a*p,_=c*p,E=u*h,M=u*f,A=u*p,U=n.x,P=n.y,L=n.z;return i[0]=(1-(w+_))*U,i[1]=(g+A)*U,i[2]=(x-M)*U,i[3]=0,i[4]=(g-A)*P,i[5]=(1-(m+_))*P,i[6]=(y+E)*P,i[7]=0,i[8]=(x+M)*L,i[9]=(y-E)*L,i[10]=(1-(m+w))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ho.set(i[0],i[1],i[2]).length();const a=ho.set(i[4],i[5],i[6]).length(),c=ho.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ai.copy(this);const h=1/s,f=1/a,p=1/c;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=f,Ai.elements[5]*=f,Ai.elements[6]*=f,Ai.elements[8]*=p,Ai.elements[9]*=p,Ai.elements[10]*=p,t.setFromRotationMatrix(Ai),n.x=s,n.y=a,n.z=c,this}makePerspective(e,t,n,i,s,a,c=Ki){const u=this.elements,h=2*s/(t-e),f=2*s/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i);let g,x;if(c===Ki)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(c===$a)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,a,c=Ki){const u=this.elements,h=1/(t-e),f=1/(n-i),p=1/(a-s),m=(t+e)*h,g=(n+i)*f;let x,w;if(c===Ki)x=(a+s)*p,w=-2*p;else if(c===$a)x=s*p,w=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=w,u[14]=-x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ho=new D,Ai=new at,EM=new D(0,0,0),AM=new D(1,1,1),Hr=new D,Lc=new D,ri=new D,f0=new at,d0=new Kn;class li{constructor(e=0,t=0,n=0,i=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],c=i[8],u=i[1],h=i[5],f=i[9],p=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return f0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return d0.setFromEuler(this),this.setFromQuaternion(d0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Ds{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TM=0;const p0=new D,fo=new Kn,dr=new at,Dc=new D,va=new D,bM=new D,CM=new Kn,m0=new D(1,0,0),g0=new D(0,1,0),v0=new D(0,0,1),_0={type:"added"},RM={type:"removed"},po={type:"childadded",child:null},pd={type:"childremoved",child:null};class It extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new D,t=new li,n=new Kn,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new gt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fo.setFromAxisAngle(e,t),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,t){return fo.setFromAxisAngle(e,t),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis(m0,e)}rotateY(e){return this.rotateOnAxis(g0,e)}rotateZ(e){return this.rotateOnAxis(v0,e)}translateOnAxis(e,t){return p0.copy(e).applyQuaternion(this.quaternion),this.position.add(p0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(m0,e)}translateY(e){return this.translateOnAxis(g0,e)}translateZ(e){return this.translateOnAxis(v0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dc.copy(e):Dc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(va,Dc,this.up):dr.lookAt(Dc,va,this.up),this.quaternion.setFromRotationMatrix(dr),i&&(dr.extractRotation(i.matrixWorld),fo.setFromRotationMatrix(dr),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_0),po.child=e,this.dispatchEvent(po),po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RM),pd.child=e,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_0),po.child=e,this.dispatchEvent(po),po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,bM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,CM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=a(e.geometries),u=a(e.materials),h=a(e.textures),f=a(e.images),p=a(e.shapes),m=a(e.skeletons),g=a(e.animations),x=a(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}It.DEFAULT_UP=new D(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new D,pr=new D,md=new D,mr=new D,mo=new D,go=new D,x0=new D,gd=new D,vd=new D,_d=new D,xd=new wt,yd=new wt,Sd=new wt;class Zn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ti.subVectors(e,t),i.cross(Ti);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ti.subVectors(i,t),pr.subVectors(n,t),md.subVectors(e,t);const a=Ti.dot(Ti),c=Ti.dot(pr),u=Ti.dot(md),h=pr.dot(pr),f=pr.dot(md),p=a*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(h*u-c*f)*m,x=(a*f-c*u)*m;return s.set(1-g-x,x,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,n,i,s,a,c,u){return this.getBarycoord(e,t,n,i,mr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,mr.x),u.addScaledVector(a,mr.y),u.addScaledVector(c,mr.z),u)}static getInterpolatedAttribute(e,t,n,i,s,a){return xd.setScalar(0),yd.setScalar(0),Sd.setScalar(0),xd.fromBufferAttribute(e,t),yd.fromBufferAttribute(e,n),Sd.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(xd,s.x),a.addScaledVector(yd,s.y),a.addScaledVector(Sd,s.z),a}static isFrontFacing(e,t,n,i){return Ti.subVectors(n,t),pr.subVectors(e,t),Ti.cross(pr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),Ti.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,c;mo.subVectors(i,n),go.subVectors(s,n),gd.subVectors(e,n);const u=mo.dot(gd),h=go.dot(gd);if(u<=0&&h<=0)return t.copy(n);vd.subVectors(e,i);const f=mo.dot(vd),p=go.dot(vd);if(f>=0&&p<=f)return t.copy(i);const m=u*p-f*h;if(m<=0&&u>=0&&f<=0)return a=u/(u-f),t.copy(n).addScaledVector(mo,a);_d.subVectors(e,s);const g=mo.dot(_d),x=go.dot(_d);if(x>=0&&g<=x)return t.copy(s);const w=g*h-u*x;if(w<=0&&h>=0&&x<=0)return c=h/(h-x),t.copy(n).addScaledVector(go,c);const y=f*x-g*p;if(y<=0&&p-f>=0&&g-x>=0)return x0.subVectors(s,i),c=(p-f)/(p-f+(g-x)),t.copy(i).addScaledVector(x0,c);const _=1/(y+w+m);return a=w*_,c=m*_,t.copy(n).addScaledVector(mo,a).addScaledVector(go,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function Md(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ot.workingColorSpace){if(e=Vp(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Md(a,s,e+1/3),this.g=Md(a,s,e),this.b=Md(a,s,e-1/3)}return Ot.toWorkingColorSpace(this,i),this}setStyle(e,t=jn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],c=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const n=K_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}copyLinearToSRGB(e){return this.r=od(e.r),this.g=od(e.g),this.b=od(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Ot.fromWorkingColorSpace(Pn.copy(this),e),Math.round(Qt(Pn.r*255,0,255))*65536+Math.round(Qt(Pn.g*255,0,255))*256+Math.round(Qt(Pn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.fromWorkingColorSpace(Pn.copy(this),t);const n=Pn.r,i=Pn.g,s=Pn.b,a=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const f=(c+a)/2;if(c===a)u=0,h=0;else{const p=a-c;switch(h=f<=.5?p/(a+c):p/(2-a-c),a){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=jn){Ot.fromWorkingColorSpace(Pn.copy(this),e);const t=Pn.r,n=Pn.g,i=Pn.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Uc);const n=ka(Vr.h,Uc.h,t),i=ka(Vr.s,Uc.s,t),s=ka(Vr.l,Uc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Ne;Ne.NAMES=K_;let PM=0;class Un extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Ps,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cu,this.blendDst=Ru,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Sr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cu&&(n.blendSrc=this.blendSrc),this.blendDst!==Ru&&(n.blendDst=this.blendDst),this.blendEquation!==jr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const c in s){const u=s[c];delete u.metadata,a.push(u)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class br extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _r=IM();function IM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,f=0;for(;!(h&8388608);)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[u]=h|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)a[u]=u<<23;a[31]=1199570944,a[32]=2147483648;for(let u=33;u<63;++u)a[u]=2147483648+(u-32<<23);a[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:c}}function qn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Qt(r,-65504,65504),_r.floatView[0]=r;const e=_r.uint32View[0],t=e>>23&511;return _r.baseTable[t]+((e&8388607)>>_r.shiftTable[t])}function Pa(r){const e=r>>10;return _r.uint32View[0]=_r.mantissaTable[_r.offsetTable[e]+(r&1023)]+_r.exponentTable[e],_r.floatView[0]}const LM={toHalfFloat:qn,fromHalfFloat:Pa},sn=new D,Nc=new ce;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qa,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nc.fromBufferAttribute(this,t),Nc.applyMatrix3(e),this.setXY(t,Nc.x,Nc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qa&&(e.usage=this.usage),e}}class DM extends zt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class UM extends zt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class NM extends zt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class OM extends zt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Xp extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class FM extends zt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Yp extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class BM extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Pa(this.array[e*this.itemSize]);return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=qn(t),this}getY(e){let t=Pa(this.array[e*this.itemSize+1]);return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=qn(t),this}getZ(e){let t=Pa(this.array[e*this.itemSize+2]);return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=qn(t),this}getW(e){let t=Pa(this.array[e*this.itemSize+3]);return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=qn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=qn(t),this.array[e+1]=qn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=qn(t),this.array[e+1]=qn(n),this.array[e+2]=qn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=qn(t),this.array[e+1]=qn(n),this.array[e+2]=qn(i),this.array[e+3]=qn(s),this}}class qe extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zM=0;const xi=new at,wd=new It,vo=new D,si=new vn,_a=new vn,mn=new D;class yt extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q_(e)?Yp:Xp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new gt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,n){return xi.makeTranslation(e,t,n),this.applyMatrix4(xi),this}scale(e,t,n){return xi.makeScale(e,t,n),this.applyMatrix4(xi),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];si.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];_a.setFromBufferAttribute(c),this.morphTargetsRelative?(mn.addVectors(si.min,_a.min),si.expandByPoint(mn),mn.addVectors(si.max,_a.max),si.expandByPoint(mn)):(si.expandByPoint(_a.min),si.expandByPoint(_a.max))}si.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)mn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(mn));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)mn.fromBufferAttribute(c,h),u&&(vo.fromBufferAttribute(e,h),mn.add(vo)),i=Math.max(i,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),c=[],u=[];for(let B=0;B<n.count;B++)c[B]=new D,u[B]=new D;const h=new D,f=new D,p=new D,m=new ce,g=new ce,x=new ce,w=new D,y=new D;function _(B,z,b){h.fromBufferAttribute(n,B),f.fromBufferAttribute(n,z),p.fromBufferAttribute(n,b),m.fromBufferAttribute(s,B),g.fromBufferAttribute(s,z),x.fromBufferAttribute(s,b),f.sub(h),p.sub(h),g.sub(m),x.sub(m);const C=1/(g.x*x.y-x.x*g.y);isFinite(C)&&(w.copy(f).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(C),y.copy(p).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(C),c[B].add(w),c[z].add(w),c[b].add(w),u[B].add(y),u[z].add(y),u[b].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let B=0,z=E.length;B<z;++B){const b=E[B],C=b.start,Y=b.count;for(let j=C,Q=C+Y;j<Q;j+=3)_(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const M=new D,A=new D,U=new D,P=new D;function L(B){U.fromBufferAttribute(i,B),P.copy(U);const z=c[B];M.copy(z),M.sub(U.multiplyScalar(U.dot(z))).normalize(),A.crossVectors(P,z);const C=A.dot(u[B])<0?-1:1;a.setXYZW(B,M.x,M.y,M.z,C)}for(let B=0,z=E.length;B<z;++B){const b=E[B],C=b.start,Y=b.count;for(let j=C,Q=C+Y;j<Q;j+=3)L(e.getX(j+0)),L(e.getX(j+1)),L(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new D,s=new D,a=new D,c=new D,u=new D,h=new D,f=new D,p=new D;if(e)for(let m=0,g=e.count;m<g;m+=3){const x=e.getX(m+0),w=e.getX(m+1),y=e.getX(m+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,w),a.fromBufferAttribute(t,y),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,y),c.add(f),u.add(f),h.add(f),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(w,u.x,u.y,u.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),f.subVectors(a,s),p.subVectors(i,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,p=c.normalized,m=new h.constructor(u.length*f);let g=0,x=0;for(let w=0,y=u.length;w<y;w++){c.isInterleavedBufferAttribute?g=u[w]*c.data.stride+c.offset:g=u[w]*f;for(let _=0;_<f;_++)m[x++]=h[g++]}return new zt(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const m=h[f],g=e(m,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];f.push(g.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,f=a.length;h<f;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const y0=new at,ds=new Xo,Oc=new _n,S0=new D,Fc=new D,Bc=new D,zc=new D,Ed=new D,kc=new D,M0=new D,Hc=new D;class Yt extends It{constructor(e=new yt,t=new br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){kc.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],p=s[u];f!==0&&(Ed.fromBufferAttribute(p,e),a?kc.addScaledVector(Ed,f):kc.addScaledVector(Ed.sub(t),f))}t.add(kc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(s),ds.copy(e.ray).recast(e.near),!(Oc.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Oc,S0)===null||ds.origin.distanceToSquared(S0)>(e.far-e.near)**2))&&(y0.copy(s).invert(),ds.copy(e.ray).applyMatrix4(y0),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(a))for(let x=0,w=m.length;x<w;x++){const y=m[x],_=a[y.materialIndex],E=Math.max(y.start,g.start),M=Math.min(c.count,Math.min(y.start+y.count,g.start+g.count));for(let A=E,U=M;A<U;A+=3){const P=c.getX(A),L=c.getX(A+1),B=c.getX(A+2);i=Vc(this,_,e,n,h,f,p,P,L,B),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const x=Math.max(0,g.start),w=Math.min(c.count,g.start+g.count);for(let y=x,_=w;y<_;y+=3){const E=c.getX(y),M=c.getX(y+1),A=c.getX(y+2);i=Vc(this,a,e,n,h,f,p,E,M,A),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(a))for(let x=0,w=m.length;x<w;x++){const y=m[x],_=a[y.materialIndex],E=Math.max(y.start,g.start),M=Math.min(u.count,Math.min(y.start+y.count,g.start+g.count));for(let A=E,U=M;A<U;A+=3){const P=A,L=A+1,B=A+2;i=Vc(this,_,e,n,h,f,p,P,L,B),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const x=Math.max(0,g.start),w=Math.min(u.count,g.start+g.count);for(let y=x,_=w;y<_;y+=3){const E=y,M=y+1,A=y+2;i=Vc(this,a,e,n,h,f,p,E,M,A),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}}function kM(r,e,t,n,i,s,a,c){let u;if(e.side===Dn?u=n.intersectTriangle(a,s,i,!0,c):u=n.intersectTriangle(i,s,a,e.side===Sr,c),u===null)return null;Hc.copy(c),Hc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Hc);return h<t.near||h>t.far?null:{distance:h,point:Hc.clone(),object:r}}function Vc(r,e,t,n,i,s,a,c,u,h){r.getVertexPosition(c,Fc),r.getVertexPosition(u,Bc),r.getVertexPosition(h,zc);const f=kM(r,e,t,n,Fc,Bc,zc,M0);if(f){const p=new D;Zn.getBarycoord(M0,Fc,Bc,zc,p),i&&(f.uv=Zn.getInterpolatedAttribute(i,c,u,h,p,new ce)),s&&(f.uv1=Zn.getInterpolatedAttribute(s,c,u,h,p,new ce)),a&&(f.normal=Zn.getInterpolatedAttribute(a,c,u,h,p,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:c,b:u,c:h,normal:new D,materialIndex:0};Zn.getNormal(Fc,Bc,zc,m.normal),f.face=m,f.barycoord=p}return f}class Di extends yt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const c=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const u=[],h=[],f=[],p=[];let m=0,g=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(f,3)),this.setAttribute("uv",new qe(p,2));function x(w,y,_,E,M,A,U,P,L,B,z){const b=A/L,C=U/B,Y=A/2,j=U/2,Q=P/2,re=L+1,Z=B+1;let he=0,ee=0;const Ae=new D;for(let me=0;me<Z;me++){const ve=me*C-j;for(let st=0;st<re;st++){const Je=st*b-Y;Ae[w]=Je*E,Ae[y]=ve*M,Ae[_]=Q,h.push(Ae.x,Ae.y,Ae.z),Ae[w]=0,Ae[y]=0,Ae[_]=P>0?1:-1,f.push(Ae.x,Ae.y,Ae.z),p.push(st/L),p.push(1-me/B),he+=1}}for(let me=0;me<B;me++)for(let ve=0;ve<L;ve++){const st=m+ve+re*me,Je=m+ve+re*(me+1),se=m+(ve+1)+re*(me+1),de=m+(ve+1)+re*me;u.push(st,Je,de),u.push(Je,se,de),ee+=6}c.addGroup(g,ee,z),g+=ee,m+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kn(r){const e={};for(let t=0;t<r.length;t++){const n=zo(r[t]);for(const i in n)e[i]=n[i]}return e}function HM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Q_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const tl={clone:zo,merge:kn};var VM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=HM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ml extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gr=new D,w0=new ce,E0=new ce;class on extends ml{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,w0,E0),t.subVectors(E0,w0)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/u,t-=a.offsetY*n/h,i*=a.width/u,n*=a.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _o=-90,xo=1;class $_ extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new on(_o,xo,e,t);i.layers=this.layers,this.add(i);const s=new on(_o,xo,e,t);s.layers=this.layers,this.add(s);const a=new on(_o,xo,e,t);a.layers=this.layers,this.add(a);const c=new on(_o,xo,e,t);c.layers=this.layers,this.add(c);const u=new on(_o,xo,e,t);u.layers=this.layers,this.add(u);const h=new on(_o,xo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,c,u]=t;for(const h of t)this.remove(h);if(e===Ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,u,h,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(p,m,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class gl extends $t{constructor(e,t,n,i,s,a,c,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:Mr,super(e,t,n,i,s,a,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ex extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new gl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Di(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:zo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:yr});s.uniforms.tEquirect.value=t;const a=new Yt(i,s),c=t.minFilter;return t.minFilter===Ji&&(t.minFilter=an),new $_(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ad=new D,WM=new D,XM=new gt;class Yr{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ad.subVectors(n,t).cross(WM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ad),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||XM.getNormalMatrix(e),i=this.coplanarPoint(Ad).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new _n,Gc=new D;class vl{constructor(e=new Yr,t=new Yr,n=new Yr,i=new Yr,s=new Yr,a=new Yr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ki){const n=this.planes,i=e.elements,s=i[0],a=i[1],c=i[2],u=i[3],h=i[4],f=i[5],p=i[6],m=i[7],g=i[8],x=i[9],w=i[10],y=i[11],_=i[12],E=i[13],M=i[14],A=i[15];if(n[0].setComponents(u-s,m-h,y-g,A-_).normalize(),n[1].setComponents(u+s,m+h,y+g,A+_).normalize(),n[2].setComponents(u+a,m+f,y+x,A+E).normalize(),n[3].setComponents(u-a,m-f,y-x,A-E).normalize(),n[4].setComponents(u-c,m-p,y-w,A-M).normalize(),t===Ki)n[5].setComponents(u+c,m+p,y+w,A+M).normalize();else if(t===$a)n[5].setComponents(c,p,w,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Gc.x=i.normal.x>0?e.max.x:e.min.x,Gc.y=i.normal.y>0?e.max.y:e.min.y,Gc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tx(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function YM(r){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,p=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const f=u.array,p=u.updateRanges;if(r.bindBuffer(h,c),p.length===0)r.bufferSubData(h,0,f);else{p.sort((g,x)=>g.start-x.start);let m=0;for(let g=1;g<p.length;g++){const x=p[m],w=p[g];w.start<=x.start+x.count+1?x.count=Math.max(x.count,w.start+w.count-x.start):(++m,p[m]=w)}p.length=m+1;for(let g=0,x=p.length;g<x;g++){const w=p[g];r.bufferSubData(h,w.start*f.BYTES_PER_ELEMENT,f,w.start,w.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function a(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:a}}class ks extends yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,f=u+1,p=e/c,m=t/u,g=[],x=[],w=[],y=[];for(let _=0;_<f;_++){const E=_*m-a;for(let M=0;M<h;M++){const A=M*p-s;x.push(A,-E,0),w.push(0,0,1),y.push(M/c),y.push(1-_/u)}}for(let _=0;_<u;_++)for(let E=0;E<c;E++){const M=E+h*_,A=E+h*(_+1),U=E+1+h*(_+1),P=E+1+h*_;g.push(M,A,P),g.push(A,U,P)}this.setIndex(g),this.setAttribute("position",new qe(x,3)),this.setAttribute("normal",new qe(w,3)),this.setAttribute("uv",new qe(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.widthSegments,e.heightSegments)}}var qM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jM=`#ifdef USE_ALPHAHASH
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
#endif`,ZM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$M=`#ifdef USE_AOMAP
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
#endif`,e1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t1=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,n1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o1=`#ifdef USE_IRIDESCENCE
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
#endif`,a1=`#ifdef USE_BUMPMAP
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
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,g1=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,v1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_1=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w1="gl_FragColor = linearToOutputTexel( gl_FragColor );",E1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,C1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U1=`#ifdef USE_GRADIENTMAP
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
}`,N1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,z1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,k1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,X1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y1=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ew=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nw=`#if defined( USE_POINTS_UV )
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
#endif`,iw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ow=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lw=`#ifdef USE_MORPHTARGETS
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
#endif`,cw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mw=`#ifdef USE_NORMALMAP
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
#endif`,gw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_w=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ew=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Aw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Pw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Iw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Lw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dw=`#ifdef USE_SKINNING
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
#endif`,Uw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nw=`#ifdef USE_SKINNING
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
#endif`,Ow=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kw=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hw=`#ifdef USE_TRANSMISSION
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
#endif`,Vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qw=`uniform sampler2D t2D;
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
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`#include <common>
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
}`,$w=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eE=`#define DISTANCE
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
}`,tE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`uniform float scale;
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
}`,sE=`uniform vec3 diffuse;
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
}`,oE=`#include <common>
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
}`,aE=`uniform vec3 diffuse;
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
}`,lE=`#define LAMBERT
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
}`,cE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,uE=`#define MATCAP
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
}`,hE=`#define MATCAP
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
}`,fE=`#define NORMAL
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
}`,dE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pE=`#define PHONG
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
}`,mE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,gE=`#define STANDARD
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
}`,vE=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,_E=`#define TOON
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
}`,xE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,yE=`uniform float size;
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
}`,SE=`uniform vec3 diffuse;
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
}`,ME=`#include <common>
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
}`,wE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,EE=`uniform float rotation;
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
}`,AE=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:qM,alphahash_pars_fragment:jM,alphamap_fragment:ZM,alphamap_pars_fragment:JM,alphatest_fragment:KM,alphatest_pars_fragment:QM,aomap_fragment:$M,aomap_pars_fragment:e1,batching_pars_vertex:t1,batching_vertex:n1,begin_vertex:i1,beginnormal_vertex:r1,bsdfs:s1,iridescence_fragment:o1,bumpmap_pars_fragment:a1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:h1,color_fragment:f1,color_pars_fragment:d1,color_pars_vertex:p1,color_vertex:m1,common:g1,cube_uv_reflection_fragment:v1,defaultnormal_vertex:_1,displacementmap_pars_vertex:x1,displacementmap_vertex:y1,emissivemap_fragment:S1,emissivemap_pars_fragment:M1,colorspace_fragment:w1,colorspace_pars_fragment:E1,envmap_fragment:A1,envmap_common_pars_fragment:T1,envmap_pars_fragment:b1,envmap_pars_vertex:C1,envmap_physical_pars_fragment:z1,envmap_vertex:R1,fog_vertex:P1,fog_pars_vertex:I1,fog_fragment:L1,fog_pars_fragment:D1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:N1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:F1,lights_pars_begin:B1,lights_toon_fragment:k1,lights_toon_pars_fragment:H1,lights_phong_fragment:V1,lights_phong_pars_fragment:G1,lights_physical_fragment:W1,lights_physical_pars_fragment:X1,lights_fragment_begin:Y1,lights_fragment_maps:q1,lights_fragment_end:j1,logdepthbuf_fragment:Z1,logdepthbuf_pars_fragment:J1,logdepthbuf_pars_vertex:K1,logdepthbuf_vertex:Q1,map_fragment:$1,map_pars_fragment:ew,map_particle_fragment:tw,map_particle_pars_fragment:nw,metalnessmap_fragment:iw,metalnessmap_pars_fragment:rw,morphinstance_vertex:sw,morphcolor_vertex:ow,morphnormal_vertex:aw,morphtarget_pars_vertex:lw,morphtarget_vertex:cw,normal_fragment_begin:uw,normal_fragment_maps:hw,normal_pars_fragment:fw,normal_pars_vertex:dw,normal_vertex:pw,normalmap_pars_fragment:mw,clearcoat_normal_fragment_begin:gw,clearcoat_normal_fragment_maps:vw,clearcoat_pars_fragment:_w,iridescence_pars_fragment:xw,opaque_fragment:yw,packing:Sw,premultiplied_alpha_fragment:Mw,project_vertex:ww,dithering_fragment:Ew,dithering_pars_fragment:Aw,roughnessmap_fragment:Tw,roughnessmap_pars_fragment:bw,shadowmap_pars_fragment:Cw,shadowmap_pars_vertex:Rw,shadowmap_vertex:Pw,shadowmask_pars_fragment:Iw,skinbase_vertex:Lw,skinning_pars_vertex:Dw,skinning_vertex:Uw,skinnormal_vertex:Nw,specularmap_fragment:Ow,specularmap_pars_fragment:Fw,tonemapping_fragment:Bw,tonemapping_pars_fragment:zw,transmission_fragment:kw,transmission_pars_fragment:Hw,uv_pars_fragment:Vw,uv_pars_vertex:Gw,uv_vertex:Ww,worldpos_vertex:Xw,background_vert:Yw,background_frag:qw,backgroundCube_vert:jw,backgroundCube_frag:Zw,cube_vert:Jw,cube_frag:Kw,depth_vert:Qw,depth_frag:$w,distanceRGBA_vert:eE,distanceRGBA_frag:tE,equirect_vert:nE,equirect_frag:iE,linedashed_vert:rE,linedashed_frag:sE,meshbasic_vert:oE,meshbasic_frag:aE,meshlambert_vert:lE,meshlambert_frag:cE,meshmatcap_vert:uE,meshmatcap_frag:hE,meshnormal_vert:fE,meshnormal_frag:dE,meshphong_vert:pE,meshphong_frag:mE,meshphysical_vert:gE,meshphysical_frag:vE,meshtoon_vert:_E,meshtoon_frag:xE,points_vert:yE,points_frag:SE,shadow_vert:ME,shadow_frag:wE,sprite_vert:EE,sprite_frag:AE},Ce={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ri={basic:{uniforms:kn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:kn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ne(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:kn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:kn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:kn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ne(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:kn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:kn([Ce.points,Ce.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:kn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:kn([Ce.common,Ce.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:kn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:kn([Ce.sprite,Ce.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:kn([Ce.common,Ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:kn([Ce.lights,Ce.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ri.physical={uniforms:kn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Wc={r:0,b:0,g:0},ms=new li,TE=new at;function bE(r,e,t,n,i,s,a){const c=new Ne(0);let u=s===!0?0:1,h,f,p=null,m=0,g=null;function x(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function w(E){let M=!1;const A=x(E);A===null?_(c,u):A&&A.isColor&&(_(A,1),M=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(E,M){const A=x(M);A&&(A.isCubeTexture||A.mapping===Go)?(f===void 0&&(f=new Yt(new Di(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:zo(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),ms.copy(M.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(TE.makeRotationFromEuler(ms)),f.material.toneMapped=Ot.getTransfer(A.colorSpace)!==Vt,(p!==A||m!==A.version||g!==r.toneMapping)&&(f.material.needsUpdate=!0,p=A,m=A.version,g=r.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new Yt(new ks(2,2),new ci({name:"BackgroundMaterial",uniforms:zo(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=Ot.getTransfer(A.colorSpace)!==Vt,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||m!==A.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,p=A,m=A.version,g=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function _(E,M){E.getRGB(Wc,Q_(r)),n.buffers.color.setClear(Wc.r,Wc.g,Wc.b,M,a)}return{getClearColor:function(){return c},setClearColor:function(E,M=1){c.set(E),u=M,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(E){u=E,_(c,u)},render:w,addToRenderList:y}}function CE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,a=!1;function c(b,C,Y,j,Q){let re=!1;const Z=p(j,Y,C);s!==Z&&(s=Z,h(s.object)),re=g(b,j,Y,Q),re&&x(b,j,Y,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,A(b,C,Y,j),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function u(){return r.createVertexArray()}function h(b){return r.bindVertexArray(b)}function f(b){return r.deleteVertexArray(b)}function p(b,C,Y){const j=Y.wireframe===!0;let Q=n[b.id];Q===void 0&&(Q={},n[b.id]=Q);let re=Q[C.id];re===void 0&&(re={},Q[C.id]=re);let Z=re[j];return Z===void 0&&(Z=m(u()),re[j]=Z),Z}function m(b){const C=[],Y=[],j=[];for(let Q=0;Q<t;Q++)C[Q]=0,Y[Q]=0,j[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:Y,attributeDivisors:j,object:b,attributes:{},index:null}}function g(b,C,Y,j){const Q=s.attributes,re=C.attributes;let Z=0;const he=Y.getAttributes();for(const ee in he)if(he[ee].location>=0){const me=Q[ee];let ve=re[ee];if(ve===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor)),me===void 0||me.attribute!==ve||ve&&me.data!==ve.data)return!0;Z++}return s.attributesNum!==Z||s.index!==j}function x(b,C,Y,j){const Q={},re=C.attributes;let Z=0;const he=Y.getAttributes();for(const ee in he)if(he[ee].location>=0){let me=re[ee];me===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(me=b.instanceColor));const ve={};ve.attribute=me,me&&me.data&&(ve.data=me.data),Q[ee]=ve,Z++}s.attributes=Q,s.attributesNum=Z,s.index=j}function w(){const b=s.newAttributes;for(let C=0,Y=b.length;C<Y;C++)b[C]=0}function y(b){_(b,0)}function _(b,C){const Y=s.newAttributes,j=s.enabledAttributes,Q=s.attributeDivisors;Y[b]=1,j[b]===0&&(r.enableVertexAttribArray(b),j[b]=1),Q[b]!==C&&(r.vertexAttribDivisor(b,C),Q[b]=C)}function E(){const b=s.newAttributes,C=s.enabledAttributes;for(let Y=0,j=C.length;Y<j;Y++)C[Y]!==b[Y]&&(r.disableVertexAttribArray(Y),C[Y]=0)}function M(b,C,Y,j,Q,re,Z){Z===!0?r.vertexAttribIPointer(b,C,Y,Q,re):r.vertexAttribPointer(b,C,Y,j,Q,re)}function A(b,C,Y,j){w();const Q=j.attributes,re=Y.getAttributes(),Z=C.defaultAttributeValues;for(const he in re){const ee=re[he];if(ee.location>=0){let Ae=Q[he];if(Ae===void 0&&(he==="instanceMatrix"&&b.instanceMatrix&&(Ae=b.instanceMatrix),he==="instanceColor"&&b.instanceColor&&(Ae=b.instanceColor)),Ae!==void 0){const me=Ae.normalized,ve=Ae.itemSize,st=e.get(Ae);if(st===void 0)continue;const Je=st.buffer,se=st.type,de=st.bytesPerElement,Oe=se===r.INT||se===r.UNSIGNED_INT||Ae.gpuType===vh;if(Ae.isInterleavedBufferAttribute){const Te=Ae.data,tt=Te.stride,nt=Ae.offset;if(Te.isInstancedInterleavedBuffer){for(let je=0;je<ee.locationSize;je++)_(ee.location+je,Te.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let je=0;je<ee.locationSize;je++)y(ee.location+je);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let je=0;je<ee.locationSize;je++)M(ee.location+je,ve/ee.locationSize,se,me,tt*de,(nt+ve/ee.locationSize*je)*de,Oe)}else{if(Ae.isInstancedBufferAttribute){for(let Te=0;Te<ee.locationSize;Te++)_(ee.location+Te,Ae.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Te=0;Te<ee.locationSize;Te++)y(ee.location+Te);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let Te=0;Te<ee.locationSize;Te++)M(ee.location+Te,ve/ee.locationSize,se,me,ve*de,ve/ee.locationSize*Te*de,Oe)}}else if(Z!==void 0){const me=Z[he];if(me!==void 0)switch(me.length){case 2:r.vertexAttrib2fv(ee.location,me);break;case 3:r.vertexAttrib3fv(ee.location,me);break;case 4:r.vertexAttrib4fv(ee.location,me);break;default:r.vertexAttrib1fv(ee.location,me)}}}}E()}function U(){B();for(const b in n){const C=n[b];for(const Y in C){const j=C[Y];for(const Q in j)f(j[Q].object),delete j[Q];delete C[Y]}delete n[b]}}function P(b){if(n[b.id]===void 0)return;const C=n[b.id];for(const Y in C){const j=C[Y];for(const Q in j)f(j[Q].object),delete j[Q];delete C[Y]}delete n[b.id]}function L(b){for(const C in n){const Y=n[C];if(Y[b.id]===void 0)continue;const j=Y[b.id];for(const Q in j)f(j[Q].object),delete j[Q];delete Y[b.id]}}function B(){z(),a=!0,s!==i&&(s=i,h(s.object))}function z(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:B,resetDefaultState:z,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:y,disableUnusedAttributes:E}}function RE(r,e,t){let n;function i(h){n=h}function s(h,f){r.drawArrays(n,h,f),t.update(f,n,1)}function a(h,f,p){p!==0&&(r.drawArraysInstanced(n,h,f,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x];t.update(g,n,1)}function u(h,f,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<h.length;x++)a(h[x],f[x],m[x]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,f,0,m,0,p);let x=0;for(let w=0;w<p;w++)x+=f[w];for(let w=0;w<m.length;w++)t.update(x,n,m[w])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function PE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){return!(L!==Ln&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(L){const B=L===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ui&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Jn&&!B)}function u(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(m===!0){const L=e.get("EXT_clip_control");L.clipControlEXT(L.LOWER_LEFT_EXT,L.ZERO_TO_ONE_EXT)}const g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:x,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:A,vertexTextures:U,maxSamples:P}}function IE(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Yr,c=new gt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||i;return i=m,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,g){const x=p.clippingPlanes,w=p.clipIntersection,y=p.clipShadows,_=r.get(p);if(!i||x===null||x.length===0||s&&!y)s?f(null):h();else{const E=s?0:n,M=E*4;let A=_.clippingState||null;u.value=A,A=f(x,m,M,g);for(let U=0;U!==M;++U)A[U]=t[U];_.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,g,x){const w=p!==null?p.length:0;let y=null;if(w!==0){if(y=u.value,x!==!0||y===null){const _=g+w*4,E=m.matrixWorldInverse;c.getNormalMatrix(E),(y===null||y.length<_)&&(y=new Float32Array(_));for(let M=0,A=g;M!==w;++M,A+=4)a.copy(p[M]).applyMatrix4(E,c),a.normal.toArray(y,A),y[A+3]=a.constant}u.value=y,u.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function LE(r){let e=new WeakMap;function t(a,c){return c===Ga?a.mapping=Mr:c===Wa&&(a.mapping=Kr),a}function n(a){if(a&&a.isTexture){const c=a.mapping;if(c===Ga||c===Wa)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=new ex(u.height);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const c=a.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Hs extends ml{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Io=4,A0=[.125,.215,.35,.446,.526,.582],As=20,Td=new Hs,T0=new Ne;let bd=null,Cd=0,Rd=0,Pd=!1;const Es=(1+Math.sqrt(5))/2,yo=1/Es,b0=[new D(-Es,yo,0),new D(Es,yo,0),new D(-yo,0,Es),new D(yo,0,Es),new D(0,Es,-yo),new D(0,Es,yo),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class gp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){bd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Cd,Rd),this._renderer.xr.enabled=Pd,e.scissorTest=!1,Xc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Wo,format:Ln,colorSpace:Tr,depthBuffer:!1},i=C0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C0(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DE(s)),this._blurMaterial=UE(s,e,t)}return i}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,Td)}_sceneToCubeUV(e,t,n,i){const c=new on(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(T0),f.toneMapping=Qi,f.autoClear=!1;const g=new br({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),x=new Yt(new Di,g);let w=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,w=!0):(g.color.copy(T0),w=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(c.up.set(0,u[_],0),c.lookAt(h[_],0,0)):E===1?(c.up.set(0,0,u[_]),c.lookAt(0,h[_],0)):(c.up.set(0,u[_],0),c.lookAt(0,0,h[_]));const M=this._cubeSize;Xc(i,E*M,_>2?M:0,M,M),f.setRenderTarget(i),w&&f.render(x,c),f.render(e,c)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Mr||e.mapping===Kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=P0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R0());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Yt(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Xc(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,Td)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=b0[(i-s-1)%b0.length];this._blur(e,s-1,s,a,c)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,c){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Yt(this._lodPlanes[i],h),m=h.uniforms,g=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*As-1),w=s/x,y=isFinite(s)?1+Math.floor(f*w):As;y>As&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${As}`);const _=[];let E=0;for(let L=0;L<As;++L){const B=L/w,z=Math.exp(-B*B/2);_.push(z),L===0?E+=z:L<y&&(E+=2*z)}for(let L=0;L<_.length;L++)_[L]=_[L]/E;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=_,m.latitudinal.value=a==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:M}=this;m.dTheta.value=x,m.mipInt.value=M-n;const A=this._sizeLods[i],U=3*A*(i>M-Io?i-M+Io:0),P=4*(this._cubeSize-A);Xc(t,U,P,3*A,2*A),u.setRenderTarget(t),u.render(p,Td)}}function DE(r){const e=[],t=[],n=[];let i=r;const s=r-Io+1+A0.length;for(let a=0;a<s;a++){const c=Math.pow(2,i);t.push(c);let u=1/c;a>r-Io?u=A0[a-r+Io-1]:a===0&&(u=0),n.push(u);const h=1/(c-2),f=-h,p=1+h,m=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,x=6,w=3,y=2,_=1,E=new Float32Array(w*x*g),M=new Float32Array(y*x*g),A=new Float32Array(_*x*g);for(let P=0;P<g;P++){const L=P%3*2/3-1,B=P>2?0:-1,z=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];E.set(z,w*x*P),M.set(m,y*x*P);const b=[P,P,P,P,P,P];A.set(b,_*x*P)}const U=new yt;U.setAttribute("position",new zt(E,w)),U.setAttribute("uv",new zt(M,y)),U.setAttribute("faceIndex",new zt(A,_)),e.push(U),i>Io&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function C0(r,e,t){const n=new Ni(r,e,t);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function UE(r,e,t){const n=new Float32Array(As),i=new D(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function R0(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function P0(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function qp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NE(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===Ga||u===Wa,f=u===Mr||u===Kr;if(h||f){let p=e.get(c);const m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new gp(r)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const g=c.image;return h&&g&&g.height>0||f&&g&&i(g)?(t===null&&(t=new gp(r)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",s),p.texture):null}}}return c}function i(c){let u=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function OE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Au("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function FE(r,e,t,n){const i={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);for(const x in m.morphAttributes){const w=m.morphAttributes[x];for(let y=0,_=w.length;y<_;y++)e.remove(w[y])}m.removeEventListener("dispose",a),delete i[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return i[m.id]===!0||(m.addEventListener("dispose",a),i[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const x in m)e.update(m[x],r.ARRAY_BUFFER);const g=p.morphAttributes;for(const x in g){const w=g[x];for(let y=0,_=w.length;y<_;y++)e.update(w[y],r.ARRAY_BUFFER)}}function h(p){const m=[],g=p.index,x=p.attributes.position;let w=0;if(g!==null){const E=g.array;w=g.version;for(let M=0,A=E.length;M<A;M+=3){const U=E[M+0],P=E[M+1],L=E[M+2];m.push(U,P,P,L,L,U)}}else if(x!==void 0){const E=x.array;w=x.version;for(let M=0,A=E.length/3-1;M<A;M+=3){const U=M+0,P=M+1,L=M+2;m.push(U,P,P,L,L,U)}}else return;const y=new(q_(m)?Yp:Xp)(m,1);y.version=w;const _=s.get(p);_&&e.remove(_),s.set(p,y)}function f(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:f}}function BE(r,e,t){let n;function i(m){n=m}let s,a;function c(m){s=m.type,a=m.bytesPerElement}function u(m,g){r.drawElements(n,g,s,m*a),t.update(g,n,1)}function h(m,g,x){x!==0&&(r.drawElementsInstanced(n,g,s,m*a,x),t.update(g,n,x))}function f(m,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,x);let y=0;for(let _=0;_<x;_++)y+=g[_];t.update(y,n,1)}function p(m,g,x,w){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<m.length;_++)h(m[_]/a,g[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,w,0,x);let _=0;for(let E=0;E<x;E++)_+=g[E];for(let E=0;E<w.length;E++)t.update(_,n,w[E])}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function zE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,c){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function kE(r,e,t){const n=new WeakMap,i=new wt;function s(a,c,u){const h=a.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let z=function(){L.dispose(),n.delete(c),c.removeEventListener("dispose",z)};m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),w===!0&&(M=3);let A=c.attributes.position.count*M,U=1;A>e.maxTextureSize&&(U=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*U*4*p),L=new Ah(P,A,U,p);L.type=Jn,L.needsUpdate=!0;const B=M*4;for(let b=0;b<p;b++){const C=y[b],Y=_[b],j=E[b],Q=A*U*4*b;for(let re=0;re<C.count;re++){const Z=re*B;g===!0&&(i.fromBufferAttribute(C,re),P[Q+Z+0]=i.x,P[Q+Z+1]=i.y,P[Q+Z+2]=i.z,P[Q+Z+3]=0),x===!0&&(i.fromBufferAttribute(Y,re),P[Q+Z+4]=i.x,P[Q+Z+5]=i.y,P[Q+Z+6]=i.z,P[Q+Z+7]=0),w===!0&&(i.fromBufferAttribute(j,re),P[Q+Z+8]=i.x,P[Q+Z+9]=i.y,P[Q+Z+10]=i.z,P[Q+Z+11]=j.itemSize===4?i.w:1)}}m={count:p,texture:L,size:new ce(A,U)},n.set(c,m),c.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let w=0;w<h.length;w++)g+=h[w];const x=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function HE(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,p=e.get(u,f);if(i.get(p)!==h&&(e.update(p),i.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return p}function a(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class jp extends $t{constructor(e,t,n,i,s,a,c,u,h,f=Is){if(f!==Is&&f!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Is&&(n=wr),n===void 0&&f===Fs&&(n=Os),super(null,i,s,a,c,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:gn,this.minFilter=u!==void 0?u:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nx=new $t,I0=new jp(1,1),ix=new Ah,rx=new Wp,sx=new gl,L0=[],D0=[],U0=new Float32Array(16),N0=new Float32Array(9),O0=new Float32Array(4);function Yo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=L0[i];if(s===void 0&&(s=new Float32Array(i),L0[i]=s),e!==0){n.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,r[a].toArray(s,c)}return s}function un(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function hn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Th(r,e){let t=D0[e];t===void 0&&(t=new Int32Array(e),D0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function VE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function GE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2fv(this.addr,e),hn(t,e)}}function WE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;r.uniform3fv(this.addr,e),hn(t,e)}}function XE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4fv(this.addr,e),hn(t,e)}}function YE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;O0.set(n),r.uniformMatrix2fv(this.addr,!1,O0),hn(t,n)}}function qE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;N0.set(n),r.uniformMatrix3fv(this.addr,!1,N0),hn(t,n)}}function jE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;U0.set(n),r.uniformMatrix4fv(this.addr,!1,U0),hn(t,n)}}function ZE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function JE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2iv(this.addr,e),hn(t,e)}}function KE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3iv(this.addr,e),hn(t,e)}}function QE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4iv(this.addr,e),hn(t,e)}}function $E(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function eA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;r.uniform2uiv(this.addr,e),hn(t,e)}}function tA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;r.uniform3uiv(this.addr,e),hn(t,e)}}function nA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;r.uniform4uiv(this.addr,e),hn(t,e)}}function iA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(I0.compareFunction=Hp,s=I0):s=nx,t.setTexture2D(e||s,i)}function rA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rx,i)}function sA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sx,i)}function oA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ix,i)}function aA(r){switch(r){case 5126:return VE;case 35664:return GE;case 35665:return WE;case 35666:return XE;case 35674:return YE;case 35675:return qE;case 35676:return jE;case 5124:case 35670:return ZE;case 35667:case 35671:return JE;case 35668:case 35672:return KE;case 35669:case 35673:return QE;case 5125:return $E;case 36294:return eA;case 36295:return tA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return oA}}function lA(r,e){r.uniform1fv(this.addr,e)}function cA(r,e){const t=Yo(e,this.size,2);r.uniform2fv(this.addr,t)}function uA(r,e){const t=Yo(e,this.size,3);r.uniform3fv(this.addr,t)}function hA(r,e){const t=Yo(e,this.size,4);r.uniform4fv(this.addr,t)}function fA(r,e){const t=Yo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function dA(r,e){const t=Yo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pA(r,e){const t=Yo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function mA(r,e){r.uniform1iv(this.addr,e)}function gA(r,e){r.uniform2iv(this.addr,e)}function vA(r,e){r.uniform3iv(this.addr,e)}function _A(r,e){r.uniform4iv(this.addr,e)}function xA(r,e){r.uniform1uiv(this.addr,e)}function yA(r,e){r.uniform2uiv(this.addr,e)}function SA(r,e){r.uniform3uiv(this.addr,e)}function MA(r,e){r.uniform4uiv(this.addr,e)}function wA(r,e,t){const n=this.cache,i=e.length,s=Th(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||nx,s[a])}function EA(r,e,t){const n=this.cache,i=e.length,s=Th(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||rx,s[a])}function AA(r,e,t){const n=this.cache,i=e.length,s=Th(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||sx,s[a])}function TA(r,e,t){const n=this.cache,i=e.length,s=Th(t,i);un(n,s)||(r.uniform1iv(this.addr,s),hn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ix,s[a])}function bA(r){switch(r){case 5126:return lA;case 35664:return cA;case 35665:return uA;case 35666:return hA;case 35674:return fA;case 35675:return dA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return gA;case 35668:case 35672:return vA;case 35669:case 35673:return _A;case 5125:return xA;case 36294:return yA;case 36295:return SA;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return TA}}class CA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=aA(t.type)}}class RA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bA(t.type)}}class PA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function F0(r,e){r.seq.push(e),r.map[e.id]=e}function IA(r,e,t){const n=r.name,i=n.length;for(Id.lastIndex=0;;){const s=Id.exec(n),a=Id.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&a+2===i){F0(t,h===void 0?new CA(c,r,e):new RA(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new PA(c),F0(t,p)),t=p}}}class Tu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);IA(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function B0(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const LA=37297;let DA=0;function UA(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}function NA(r){const e=Ot.getPrimaries(Ot.workingColorSpace),t=Ot.getPrimaries(r);let n;switch(e===t?n="":e===Ka&&t===Ja?n="LinearDisplayP3ToLinearSRGB":e===Ja&&t===Ka&&(n="LinearSRGBToLinearDisplayP3"),r){case Tr:case pl:return[n,"LinearTransferOETF"];case jn:case Eh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function z0(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+UA(r.getShaderSource(e),a)}else return i}function OA(r,e){const t=NA(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function FA(r,e){let t;switch(e){case b_:t="Linear";break;case C_:t="Reinhard";break;case R_:t="Cineon";break;case Rp:t="ACESFilmic";break;case I_:t="AgX";break;case L_:t="Neutral";break;case P_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yc=new D;function BA(){Ot.getLuminanceCoefficients(Yc);const r=Yc.x.toFixed(4),e=Yc.y.toFixed(4),t=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function kA(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function HA(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:c}}return t}function Ia(r){return r!==""}function k0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function H0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VA=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(r){return r.replace(VA,WA)}const GA=new Map;function WA(r,e){let t=_t[e];if(t===void 0){const n=GA.get(e);if(n!==void 0)t=_t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vp(t)}const XA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(r){return r.replace(XA,YA)}function YA(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function G0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===mh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Da?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function jA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Mr:case Kr:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Kr:e="ENVMAP_MODE_REFRACTION";break}return e}function JA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case fl:e="ENVMAP_BLENDING_MULTIPLY";break;case A_:e="ENVMAP_BLENDING_MIX";break;case T_:e="ENVMAP_BLENDING_ADD";break}return e}function KA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function QA(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const u=qA(t),h=jA(t),f=ZA(t),p=JA(t),m=KA(t),g=zA(t),x=kA(s),w=i.createProgram();let y,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ia).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ia).join(`
`),_.length>0&&(_+=`
`)):(y=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),_=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Qi?FA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,OA("linearToOutputTexel",t.outputColorSpace),BA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),a=vp(a),a=k0(a,t),a=H0(a,t),c=vp(c),c=k0(c,t),c=H0(c,t),a=V0(a),c=V0(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,y=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=E+y+a,A=E+_+c,U=B0(i,i.VERTEX_SHADER,M),P=B0(i,i.FRAGMENT_SHADER,A);i.attachShader(w,U),i.attachShader(w,P),t.index0AttributeName!==void 0?i.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(w,0,"position"),i.linkProgram(w);function L(C){if(r.debug.checkShaderErrors){const Y=i.getProgramInfoLog(w).trim(),j=i.getShaderInfoLog(U).trim(),Q=i.getShaderInfoLog(P).trim();let re=!0,Z=!0;if(i.getProgramParameter(w,i.LINK_STATUS)===!1)if(re=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,w,U,P);else{const he=z0(i,U,"vertex"),ee=z0(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(w,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+he+`
`+ee)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(j===""||Q==="")&&(Z=!1);Z&&(C.diagnostics={runnable:re,programLog:Y,vertexShader:{log:j,prefix:y},fragmentShader:{log:Q,prefix:_}})}i.deleteShader(U),i.deleteShader(P),B=new Tu(i,w),z=HA(i,w)}let B;this.getUniforms=function(){return B===void 0&&L(this),B};let z;this.getAttributes=function(){return z===void 0&&L(this),z};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(w,LA)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=P,this}let $A=0;class eT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tT(e),t.set(e,n)),n}}class tT{constructor(e){this.id=$A++,this.code=e,this.usedTimes=0}}function nT(r,e,t,n,i,s,a){const c=new Ds,u=new eT,h=new Set,f=[],p=i.logarithmicDepthBuffer,m=i.reverseDepthBuffer,g=i.vertexTextures;let x=i.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return h.add(b),b===0?"uv":`uv${b}`}function _(b,C,Y,j,Q){const re=j.fog,Z=Q.geometry,he=b.isMeshStandardMaterial?j.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||he),Ae=ee&&ee.mapping===Go?ee.image.height:null,me=w[b.type];b.precision!==null&&(x=i.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const ve=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,st=ve!==void 0?ve.length:0;let Je=0;Z.morphAttributes.position!==void 0&&(Je=1),Z.morphAttributes.normal!==void 0&&(Je=2),Z.morphAttributes.color!==void 0&&(Je=3);let se,de,Oe,Te;if(me){const xn=Ri[me];se=xn.vertexShader,de=xn.fragmentShader}else se=b.vertexShader,de=b.fragmentShader,u.update(b),Oe=u.getVertexShaderID(b),Te=u.getFragmentShaderID(b);const tt=r.getRenderTarget(),nt=Q.isInstancedMesh===!0,je=Q.isBatchedMesh===!0,Re=!!b.map,le=!!b.matcap,N=!!ee,Me=!!b.aoMap,xe=!!b.lightMap,pe=!!b.bumpMap,ye=!!b.normalMap,Ze=!!b.displacementMap,Ie=!!b.emissiveMap,O=!!b.metalnessMap,R=!!b.roughnessMap,q=b.anisotropy>0,oe=b.clearcoat>0,ue=b.dispersion>0,ae=b.iridescence>0,Ye=b.sheen>0,we=b.transmission>0,ze=q&&!!b.anisotropyMap,Et=oe&&!!b.clearcoatMap,ge=oe&&!!b.clearcoatNormalMap,ke=oe&&!!b.clearcoatRoughnessMap,ut=ae&&!!b.iridescenceMap,ht=ae&&!!b.iridescenceThicknessMap,He=Ye&&!!b.sheenColorMap,At=Ye&&!!b.sheenRoughnessMap,dt=!!b.specularMap,Bt=!!b.specularColorMap,H=!!b.specularIntensityMap,Fe=we&&!!b.transmissionMap,ne=we&&!!b.thicknessMap,fe=!!b.gradientMap,De=!!b.alphaMap,Be=b.alphaTest>0,Tt=!!b.alphaHash,qt=!!b.extensions;let En=Qi;b.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(En=r.toneMapping);const bt={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:se,fragmentShader:de,defines:b.defines,customVertexShaderID:Oe,customFragmentShaderID:Te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:je,batchingColor:je&&Q._colorsTexture!==null,instancing:nt,instancingColor:nt&&Q.instanceColor!==null,instancingMorph:nt&&Q.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:tt===null?r.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Tr,alphaToCoverage:!!b.alphaToCoverage,map:Re,matcap:le,envMap:N,envMapMode:N&&ee.mapping,envMapCubeUVHeight:Ae,aoMap:Me,lightMap:xe,bumpMap:pe,normalMap:ye,displacementMap:g&&Ze,emissiveMap:Ie,normalMapObjectSpace:ye&&b.normalMapType===z_,normalMapTangentSpace:ye&&b.normalMapType===$r,metalnessMap:O,roughnessMap:R,anisotropy:q,anisotropyMap:ze,clearcoat:oe,clearcoatMap:Et,clearcoatNormalMap:ge,clearcoatRoughnessMap:ke,dispersion:ue,iridescence:ae,iridescenceMap:ut,iridescenceThicknessMap:ht,sheen:Ye,sheenColorMap:He,sheenRoughnessMap:At,specularMap:dt,specularColorMap:Bt,specularIntensityMap:H,transmission:we,transmissionMap:Fe,thicknessMap:ne,gradientMap:fe,opaque:b.transparent===!1&&b.blending===Ps&&b.alphaToCoverage===!1,alphaMap:De,alphaTest:Be,alphaHash:Tt,combine:b.combine,mapUv:Re&&y(b.map.channel),aoMapUv:Me&&y(b.aoMap.channel),lightMapUv:xe&&y(b.lightMap.channel),bumpMapUv:pe&&y(b.bumpMap.channel),normalMapUv:ye&&y(b.normalMap.channel),displacementMapUv:Ze&&y(b.displacementMap.channel),emissiveMapUv:Ie&&y(b.emissiveMap.channel),metalnessMapUv:O&&y(b.metalnessMap.channel),roughnessMapUv:R&&y(b.roughnessMap.channel),anisotropyMapUv:ze&&y(b.anisotropyMap.channel),clearcoatMapUv:Et&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:ge&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:He&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:At&&y(b.sheenRoughnessMap.channel),specularMapUv:dt&&y(b.specularMap.channel),specularColorMapUv:Bt&&y(b.specularColorMap.channel),specularIntensityMapUv:H&&y(b.specularIntensityMap.channel),transmissionMapUv:Fe&&y(b.transmissionMap.channel),thicknessMapUv:ne&&y(b.thicknessMap.channel),alphaMapUv:De&&y(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ye||q),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!Z.attributes.uv&&(Re||De),fog:!!re,useFog:b.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:m,skinning:Q.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Je,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:En,decodeVideoTexture:Re&&b.map.isVideoTexture===!0&&Ot.getTransfer(b.map.colorSpace)===Vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pi,flipSided:b.side===Dn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&b.extensions.multiDraw===!0||je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return bt.vertexUv1s=h.has(1),bt.vertexUv2s=h.has(2),bt.vertexUv3s=h.has(3),h.clear(),bt}function E(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Y in b.defines)C.push(Y),C.push(b.defines[Y]);return b.isRawShaderMaterial===!1&&(M(C,b),A(C,b),C.push(r.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function M(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function A(b,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),b.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.alphaToCoverage&&c.enable(20),b.push(c.mask)}function U(b){const C=w[b.type];let Y;if(C){const j=Ri[C];Y=tl.clone(j.uniforms)}else Y=b.uniforms;return Y}function P(b,C){let Y;for(let j=0,Q=f.length;j<Q;j++){const re=f[j];if(re.cacheKey===C){Y=re,++Y.usedTimes;break}}return Y===void 0&&(Y=new QA(r,C,b,s),f.push(Y)),Y}function L(b){if(--b.usedTimes===0){const C=f.indexOf(b);f[C]=f[f.length-1],f.pop(),b.destroy()}}function B(b){u.remove(b)}function z(){u.dispose()}return{getParameters:_,getProgramCacheKey:E,getUniforms:U,acquireProgram:P,releaseProgram:L,releaseShaderCache:B,programs:f,dispose:z}}function iT(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let c=r.get(a);return c===void 0&&(c={},r.set(a,c)),c}function n(a){r.delete(a)}function i(a,c,u){r.get(a)[c]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function rT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function W0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function X0(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(p,m,g,x,w,y){let _=r[e];return _===void 0?(_={id:p.id,object:p,geometry:m,material:g,groupOrder:x,renderOrder:p.renderOrder,z:w,group:y},r[e]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=g,_.groupOrder=x,_.renderOrder=p.renderOrder,_.z=w,_.group=y),e++,_}function c(p,m,g,x,w,y){const _=a(p,m,g,x,w,y);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function u(p,m,g,x,w,y){const _=a(p,m,g,x,w,y);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function h(p,m){t.length>1&&t.sort(p||rT),n.length>1&&n.sort(m||W0),i.length>1&&i.sort(m||W0)}function f(){for(let p=e,m=r.length;p<m;p++){const g=r[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:f,sort:h}}function sT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new X0,r.set(n,[a])):i>=s.length?(a=new X0,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function oT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function aT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let lT=0;function cT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function uT(r){const e=new oT,t=aT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const i=new D,s=new at,a=new at;function c(h){let f=0,p=0,m=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let g=0,x=0,w=0,y=0,_=0,E=0,M=0,A=0,U=0,P=0,L=0;h.sort(cT);for(let z=0,b=h.length;z<b;z++){const C=h[z],Y=C.color,j=C.intensity,Q=C.distance,re=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=Y.r*j,p+=Y.g*j,m+=Y.b*j;else if(C.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(C.sh.coefficients[Z],j);L++}else if(C.isDirectionalLight){const Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const he=C.shadow,ee=t.get(C);ee.shadowIntensity=he.intensity,ee.shadowBias=he.bias,ee.shadowNormalBias=he.normalBias,ee.shadowRadius=he.radius,ee.shadowMapSize=he.mapSize,n.directionalShadow[g]=ee,n.directionalShadowMap[g]=re,n.directionalShadowMatrix[g]=C.shadow.matrix,E++}n.directional[g]=Z,g++}else if(C.isSpotLight){const Z=e.get(C);Z.position.setFromMatrixPosition(C.matrixWorld),Z.color.copy(Y).multiplyScalar(j),Z.distance=Q,Z.coneCos=Math.cos(C.angle),Z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Z.decay=C.decay,n.spot[w]=Z;const he=C.shadow;if(C.map&&(n.spotLightMap[U]=C.map,U++,he.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[w]=he.matrix,C.castShadow){const ee=t.get(C);ee.shadowIntensity=he.intensity,ee.shadowBias=he.bias,ee.shadowNormalBias=he.normalBias,ee.shadowRadius=he.radius,ee.shadowMapSize=he.mapSize,n.spotShadow[w]=ee,n.spotShadowMap[w]=re,A++}w++}else if(C.isRectAreaLight){const Z=e.get(C);Z.color.copy(Y).multiplyScalar(j),Z.halfWidth.set(C.width*.5,0,0),Z.halfHeight.set(0,C.height*.5,0),n.rectArea[y]=Z,y++}else if(C.isPointLight){const Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),Z.distance=C.distance,Z.decay=C.decay,C.castShadow){const he=C.shadow,ee=t.get(C);ee.shadowIntensity=he.intensity,ee.shadowBias=he.bias,ee.shadowNormalBias=he.normalBias,ee.shadowRadius=he.radius,ee.shadowMapSize=he.mapSize,ee.shadowCameraNear=he.camera.near,ee.shadowCameraFar=he.camera.far,n.pointShadow[x]=ee,n.pointShadowMap[x]=re,n.pointShadowMatrix[x]=C.shadow.matrix,M++}n.point[x]=Z,x++}else if(C.isHemisphereLight){const Z=e.get(C);Z.skyColor.copy(C.color).multiplyScalar(j),Z.groundColor.copy(C.groundColor).multiplyScalar(j),n.hemi[_]=Z,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;const B=n.hash;(B.directionalLength!==g||B.pointLength!==x||B.spotLength!==w||B.rectAreaLength!==y||B.hemiLength!==_||B.numDirectionalShadows!==E||B.numPointShadows!==M||B.numSpotShadows!==A||B.numSpotMaps!==U||B.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=w,n.rectArea.length=y,n.point.length=x,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=A+U-P,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,B.directionalLength=g,B.pointLength=x,B.spotLength=w,B.rectAreaLength=y,B.hemiLength=_,B.numDirectionalShadows=E,B.numPointShadows=M,B.numSpotShadows=A,B.numSpotMaps=U,B.numLightProbes=L,n.version=lT++)}function u(h,f){let p=0,m=0,g=0,x=0,w=0;const y=f.matrixWorldInverse;for(let _=0,E=h.length;_<E;_++){const M=h[_];if(M.isDirectionalLight){const A=n.directional[p];A.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(y),p++}else if(M.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(y),g++}else if(M.isRectAreaLight){const A=n.rectArea[x];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(y),a.identity(),s.copy(M.matrixWorld),s.premultiply(y),a.extractRotation(s),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const A=n.point[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(y),m++}else if(M.isHemisphereLight){const A=n.hemi[w];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(y),w++}}}return{setup:c,setupView:u,state:n}}function Y0(r){const e=new uT(r),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a}}function hT(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let c;return a===void 0?(c=new Y0(r),e.set(i,[c])):s>=a.length?(c=new Y0(r),a.push(c)):c=a[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class Zp extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=F_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jp extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pT(r,e,t){let n=new vl;const i=new ce,s=new ce,a=new wt,c=new Zp({depthPacking:B_}),u=new Jp,h={},f=t.maxTextureSize,p={[Sr]:Dn,[Dn]:Sr,[Pi]:Pi},m=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:fT,fragmentShader:dT}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const x=new yt;x.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Yt(x,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mh;let _=this.type;this.render=function(P,L,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const z=r.getRenderTarget(),b=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(yr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const j=_!==bi&&this.type===bi,Q=_===bi&&this.type!==bi;for(let re=0,Z=P.length;re<Z;re++){const he=P[re],ee=he.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;i.copy(ee.mapSize);const Ae=ee.getFrameExtents();if(i.multiply(Ae),s.copy(ee.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/Ae.x),i.x=s.x*Ae.x,ee.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/Ae.y),i.y=s.y*Ae.y,ee.mapSize.y=s.y)),ee.map===null||j===!0||Q===!0){const ve=this.type!==bi?{minFilter:gn,magFilter:gn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Ni(i.x,i.y,ve),ee.map.texture.name=he.name+".shadowMap",ee.camera.updateProjectionMatrix()}r.setRenderTarget(ee.map),r.clear();const me=ee.getViewportCount();for(let ve=0;ve<me;ve++){const st=ee.getViewport(ve);a.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),Y.viewport(a),ee.updateMatrices(he,ve),n=ee.getFrustum(),A(L,B,ee.camera,he,this.type)}ee.isPointLightShadow!==!0&&this.type===bi&&E(ee,B),ee.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(z,b,C)};function E(P,L){const B=e.update(w);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ni(i.x,i.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(L,null,B,m,w,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(L,null,B,g,w,null)}function M(P,L,B,z){let b=null;const C=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)b=C;else if(b=B.isPointLight===!0?u:c,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Y=b.uuid,j=L.uuid;let Q=h[Y];Q===void 0&&(Q={},h[Y]=Q);let re=Q[j];re===void 0&&(re=b.clone(),Q[j]=re,L.addEventListener("dispose",U)),b=re}if(b.visible=L.visible,b.wireframe=L.wireframe,z===bi?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:p[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,B.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=r.properties.get(b);Y.light=B}return b}function A(P,L,B,z,b){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===bi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const j=e.update(P),Q=P.material;if(Array.isArray(Q)){const re=j.groups;for(let Z=0,he=re.length;Z<he;Z++){const ee=re[Z],Ae=Q[ee.materialIndex];if(Ae&&Ae.visible){const me=M(P,Ae,z,b);P.onBeforeShadow(r,P,L,B,j,me,ee),r.renderBufferDirect(B,null,j,me,P,ee),P.onAfterShadow(r,P,L,B,j,me,ee)}}}else if(Q.visible){const re=M(P,Q,z,b);P.onBeforeShadow(r,P,L,B,j,re,null),r.renderBufferDirect(B,null,j,re,P,null),P.onAfterShadow(r,P,L,B,j,re,null)}}const Y=P.children;for(let j=0,Q=Y.length;j<Q;j++)A(Y[j],L,B,z,b)}function U(P){P.target.removeEventListener("dispose",U);for(const B in h){const z=h[B],b=P.target.uuid;b in z&&(z[b].dispose(),delete z[b])}}}const mT={[Pu]:Iu,[Lu]:Nu,[Du]:Ou,[Ns]:Uu,[Iu]:Pu,[Nu]:Lu,[Ou]:Du,[Uu]:Ns};function gT(r){function e(){let H=!1;const Fe=new wt;let ne=null;const fe=new wt(0,0,0,0);return{setMask:function(De){ne!==De&&!H&&(r.colorMask(De,De,De,De),ne=De)},setLocked:function(De){H=De},setClear:function(De,Be,Tt,qt,En){En===!0&&(De*=qt,Be*=qt,Tt*=qt),Fe.set(De,Be,Tt,qt),fe.equals(Fe)===!1&&(r.clearColor(De,Be,Tt,qt),fe.copy(Fe))},reset:function(){H=!1,ne=null,fe.set(-1,0,0,0)}}}function t(){let H=!1,Fe=!1,ne=null,fe=null,De=null;return{setReversed:function(Be){Fe=Be},setTest:function(Be){Be?Oe(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Be){ne!==Be&&!H&&(r.depthMask(Be),ne=Be)},setFunc:function(Be){if(Fe&&(Be=mT[Be]),fe!==Be){switch(Be){case Pu:r.depthFunc(r.NEVER);break;case Iu:r.depthFunc(r.ALWAYS);break;case Lu:r.depthFunc(r.LESS);break;case Ns:r.depthFunc(r.LEQUAL);break;case Du:r.depthFunc(r.EQUAL);break;case Uu:r.depthFunc(r.GEQUAL);break;case Nu:r.depthFunc(r.GREATER);break;case Ou:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=Be}},setLocked:function(Be){H=Be},setClear:function(Be){De!==Be&&(r.clearDepth(Be),De=Be)},reset:function(){H=!1,ne=null,fe=null,De=null}}}function n(){let H=!1,Fe=null,ne=null,fe=null,De=null,Be=null,Tt=null,qt=null,En=null;return{setTest:function(bt){H||(bt?Oe(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(bt){Fe!==bt&&!H&&(r.stencilMask(bt),Fe=bt)},setFunc:function(bt,xn,ui){(ne!==bt||fe!==xn||De!==ui)&&(r.stencilFunc(bt,xn,ui),ne=bt,fe=xn,De=ui)},setOp:function(bt,xn,ui){(Be!==bt||Tt!==xn||qt!==ui)&&(r.stencilOp(bt,xn,ui),Be=bt,Tt=xn,qt=ui)},setLocked:function(bt){H=bt},setClear:function(bt){En!==bt&&(r.clearStencil(bt),En=bt)},reset:function(){H=!1,Fe=null,ne=null,fe=null,De=null,Be=null,Tt=null,qt=null,En=null}}}const i=new e,s=new t,a=new n,c=new WeakMap,u=new WeakMap;let h={},f={},p=new WeakMap,m=[],g=null,x=!1,w=null,y=null,_=null,E=null,M=null,A=null,U=null,P=new Ne(0,0,0),L=0,B=!1,z=null,b=null,C=null,Y=null,j=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Z=0;const he=r.getParameter(r.VERSION);he.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(he)[1]),re=Z>=1):he.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),re=Z>=2);let ee=null,Ae={};const me=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),st=new wt().fromArray(me),Je=new wt().fromArray(ve);function se(H,Fe,ne,fe){const De=new Uint8Array(4),Be=r.createTexture();r.bindTexture(H,Be),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Tt=0;Tt<ne;Tt++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Fe,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Fe+Tt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return Be}const de={};de[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),de[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),de[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Oe(r.DEPTH_TEST),s.setFunc(Ns),xe(!1),pe(cp),Oe(r.CULL_FACE),N(yr);function Oe(H){h[H]!==!0&&(r.enable(H),h[H]=!0)}function Te(H){h[H]!==!1&&(r.disable(H),h[H]=!1)}function tt(H,Fe){return f[H]!==Fe?(r.bindFramebuffer(H,Fe),f[H]=Fe,H===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Fe),H===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Fe),!0):!1}function nt(H,Fe){let ne=m,fe=!1;if(H){ne=p.get(Fe),ne===void 0&&(ne=[],p.set(Fe,ne));const De=H.textures;if(ne.length!==De.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let Be=0,Tt=De.length;Be<Tt;Be++)ne[Be]=r.COLOR_ATTACHMENT0+Be;ne.length=De.length,fe=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,fe=!0);fe&&r.drawBuffers(ne)}function je(H){return g!==H?(r.useProgram(H),g=H,!0):!1}const Re={[jr]:r.FUNC_ADD,[l_]:r.FUNC_SUBTRACT,[c_]:r.FUNC_REVERSE_SUBTRACT};Re[u_]=r.MIN,Re[h_]=r.MAX;const le={[f_]:r.ZERO,[d_]:r.ONE,[p_]:r.SRC_COLOR,[Cu]:r.SRC_ALPHA,[y_]:r.SRC_ALPHA_SATURATE,[__]:r.DST_COLOR,[g_]:r.DST_ALPHA,[m_]:r.ONE_MINUS_SRC_COLOR,[Ru]:r.ONE_MINUS_SRC_ALPHA,[x_]:r.ONE_MINUS_DST_COLOR,[v_]:r.ONE_MINUS_DST_ALPHA,[S_]:r.CONSTANT_COLOR,[M_]:r.ONE_MINUS_CONSTANT_COLOR,[w_]:r.CONSTANT_ALPHA,[E_]:r.ONE_MINUS_CONSTANT_ALPHA};function N(H,Fe,ne,fe,De,Be,Tt,qt,En,bt){if(H===yr){x===!0&&(Te(r.BLEND),x=!1);return}if(x===!1&&(Oe(r.BLEND),x=!0),H!==a_){if(H!==w||bt!==B){if((y!==jr||M!==jr)&&(r.blendEquation(r.FUNC_ADD),y=jr,M=jr),bt)switch(H){case Ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case up:r.blendFunc(r.ONE,r.ONE);break;case hp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case up:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case hp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,E=null,A=null,U=null,P.set(0,0,0),L=0,w=H,B=bt}return}De=De||Fe,Be=Be||ne,Tt=Tt||fe,(Fe!==y||De!==M)&&(r.blendEquationSeparate(Re[Fe],Re[De]),y=Fe,M=De),(ne!==_||fe!==E||Be!==A||Tt!==U)&&(r.blendFuncSeparate(le[ne],le[fe],le[Be],le[Tt]),_=ne,E=fe,A=Be,U=Tt),(qt.equals(P)===!1||En!==L)&&(r.blendColor(qt.r,qt.g,qt.b,En),P.copy(qt),L=En),w=H,B=!1}function Me(H,Fe){H.side===Pi?Te(r.CULL_FACE):Oe(r.CULL_FACE);let ne=H.side===Dn;Fe&&(ne=!ne),xe(ne),H.blending===Ps&&H.transparent===!1?N(yr):N(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),i.setMask(H.colorWrite);const fe=H.stencilWrite;a.setTest(fe),fe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ze(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Oe(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function xe(H){z!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),z=H)}function pe(H){H!==r_?(Oe(r.CULL_FACE),H!==b&&(H===cp?r.cullFace(r.BACK):H===s_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),b=H}function ye(H){H!==C&&(re&&r.lineWidth(H),C=H)}function Ze(H,Fe,ne){H?(Oe(r.POLYGON_OFFSET_FILL),(Y!==Fe||j!==ne)&&(r.polygonOffset(Fe,ne),Y=Fe,j=ne)):Te(r.POLYGON_OFFSET_FILL)}function Ie(H){H?Oe(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function O(H){H===void 0&&(H=r.TEXTURE0+Q-1),ee!==H&&(r.activeTexture(H),ee=H)}function R(H,Fe,ne){ne===void 0&&(ee===null?ne=r.TEXTURE0+Q-1:ne=ee);let fe=Ae[ne];fe===void 0&&(fe={type:void 0,texture:void 0},Ae[ne]=fe),(fe.type!==H||fe.texture!==Fe)&&(ee!==ne&&(r.activeTexture(ne),ee=ne),r.bindTexture(H,Fe||de[H]),fe.type=H,fe.texture=Fe)}function q(){const H=Ae[ee];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function oe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{r.compressedTexImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{r.texSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ye(){try{r.texSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(){try{r.texStorage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{r.texStorage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ut(){try{r.texImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(H){st.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),st.copy(H))}function He(H){Je.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Je.copy(H))}function At(H,Fe){let ne=u.get(Fe);ne===void 0&&(ne=new WeakMap,u.set(Fe,ne));let fe=ne.get(H);fe===void 0&&(fe=r.getUniformBlockIndex(Fe,H.name),ne.set(H,fe))}function dt(H,Fe){const fe=u.get(Fe).get(H);c.get(Fe)!==fe&&(r.uniformBlockBinding(Fe,fe,H.__bindingPointIndex),c.set(Fe,fe))}function Bt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ee=null,Ae={},f={},p=new WeakMap,m=[],g=null,x=!1,w=null,y=null,_=null,E=null,M=null,A=null,U=null,P=new Ne(0,0,0),L=0,B=!1,z=null,b=null,C=null,Y=null,j=null,st.set(0,0,r.canvas.width,r.canvas.height),Je.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:Oe,disable:Te,bindFramebuffer:tt,drawBuffers:nt,useProgram:je,setBlending:N,setMaterial:Me,setFlipSided:xe,setCullFace:pe,setLineWidth:ye,setPolygonOffset:Ze,setScissorTest:Ie,activeTexture:O,bindTexture:R,unbindTexture:q,compressedTexImage2D:oe,compressedTexImage3D:ue,texImage2D:ke,texImage3D:ut,updateUBOMapping:At,uniformBlockBinding:dt,texStorage2D:Et,texStorage3D:ge,texSubImage2D:ae,texSubImage3D:Ye,compressedTexSubImage2D:we,compressedTexSubImage3D:ze,scissor:ht,viewport:He,reset:Bt}}function vT(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function _T(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function xT(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function _p(r,e,t,n){const i=yT(n);switch(t){case Up:return r*e;case Op:return r*e;case Fp:return r*e*2;case yh:return r*e/i.components*i.byteLength;case dl:return r*e/i.components*i.byteLength;case Bp:return r*e*2/i.components*i.byteLength;case Sh:return r*e*2/i.components*i.byteLength;case Np:return r*e*3/i.components*i.byteLength;case Ln:return r*e*4/i.components*i.byteLength;case Mh:return r*e*4/i.components*i.byteLength;case Na:case Oa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fa:case Ba:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bu:case ku:return Math.max(r,16)*Math.max(e,8)/4;case Fu:case zu:return Math.max(r,8)*Math.max(e,8)/2;case Hu:case Vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case qu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ju:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Qu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case $u:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case eh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case th:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case nh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ih:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case za:case rh:case sh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case zp:case oh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ah:case lh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yT(r){switch(r){case Ui:case Ip:return{byteLength:1,components:1};case Fo:case Lp:case Wo:return{byteLength:2,components:1};case _h:case xh:return{byteLength:2,components:4};case wr:case vh:case Jn:return{byteLength:4,components:1};case Dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}const ST={contain:vT,cover:_T,fill:xT,getByteLength:_p};function MT(r,e,t,n,i,s,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ce,f=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,R){return g?new OffscreenCanvas(O,R):el("canvas")}function w(O,R,q){let oe=1;const ue=Ie(O);if((ue.width>q||ue.height>q)&&(oe=q/Math.max(ue.width,ue.height)),oe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ae=Math.floor(oe*ue.width),Ye=Math.floor(oe*ue.height);p===void 0&&(p=x(ae,Ye));const we=R?x(ae,Ye):p;return we.width=ae,we.height=Ye,we.getContext("2d").drawImage(O,0,0,ae,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ae+"x"+Ye+")."),we}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),O;return O}function y(O){return O.generateMipmaps&&O.minFilter!==gn&&O.minFilter!==an}function _(O){r.generateMipmap(O)}function E(O,R,q,oe,ue=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ae=R;if(R===r.RED&&(q===r.FLOAT&&(ae=r.R32F),q===r.HALF_FLOAT&&(ae=r.R16F),q===r.UNSIGNED_BYTE&&(ae=r.R8)),R===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ae=r.R8UI),q===r.UNSIGNED_SHORT&&(ae=r.R16UI),q===r.UNSIGNED_INT&&(ae=r.R32UI),q===r.BYTE&&(ae=r.R8I),q===r.SHORT&&(ae=r.R16I),q===r.INT&&(ae=r.R32I)),R===r.RG&&(q===r.FLOAT&&(ae=r.RG32F),q===r.HALF_FLOAT&&(ae=r.RG16F),q===r.UNSIGNED_BYTE&&(ae=r.RG8)),R===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ae=r.RG8UI),q===r.UNSIGNED_SHORT&&(ae=r.RG16UI),q===r.UNSIGNED_INT&&(ae=r.RG32UI),q===r.BYTE&&(ae=r.RG8I),q===r.SHORT&&(ae=r.RG16I),q===r.INT&&(ae=r.RG32I)),R===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),q===r.UNSIGNED_INT&&(ae=r.RGB32UI),q===r.BYTE&&(ae=r.RGB8I),q===r.SHORT&&(ae=r.RGB16I),q===r.INT&&(ae=r.RGB32I)),R===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),q===r.UNSIGNED_INT&&(ae=r.RGBA32UI),q===r.BYTE&&(ae=r.RGBA8I),q===r.SHORT&&(ae=r.RGBA16I),q===r.INT&&(ae=r.RGBA32I)),R===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),R===r.RGBA){const Ye=ue?Za:Ot.getTransfer(oe);q===r.FLOAT&&(ae=r.RGBA32F),q===r.HALF_FLOAT&&(ae=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ae=Ye===Vt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function M(O,R){let q;return O?R===null||R===wr||R===Os?q=r.DEPTH24_STENCIL8:R===Jn?q=r.DEPTH32F_STENCIL8:R===Fo&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===wr||R===Os?q=r.DEPTH_COMPONENT24:R===Jn?q=r.DEPTH_COMPONENT32F:R===Fo&&(q=r.DEPTH_COMPONENT16),q}function A(O,R){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==gn&&O.minFilter!==an?Math.log2(Math.max(R.width,R.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?R.mipmaps.length:1}function U(O){const R=O.target;R.removeEventListener("dispose",U),L(R),R.isVideoTexture&&f.delete(R)}function P(O){const R=O.target;R.removeEventListener("dispose",P),z(R)}function L(O){const R=n.get(O);if(R.__webglInit===void 0)return;const q=O.source,oe=m.get(q);if(oe){const ue=oe[R.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&B(O),Object.keys(oe).length===0&&m.delete(q)}n.remove(O)}function B(O){const R=n.get(O);r.deleteTexture(R.__webglTexture);const q=O.source,oe=m.get(q);delete oe[R.__cacheKey],a.memory.textures--}function z(O){const R=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(R.__webglFramebuffer[oe]))for(let ue=0;ue<R.__webglFramebuffer[oe].length;ue++)r.deleteFramebuffer(R.__webglFramebuffer[oe][ue]);else r.deleteFramebuffer(R.__webglFramebuffer[oe]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[oe])}else{if(Array.isArray(R.__webglFramebuffer))for(let oe=0;oe<R.__webglFramebuffer.length;oe++)r.deleteFramebuffer(R.__webglFramebuffer[oe]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let oe=0;oe<R.__webglColorRenderbuffer.length;oe++)R.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[oe]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const q=O.textures;for(let oe=0,ue=q.length;oe<ue;oe++){const ae=n.get(q[oe]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(q[oe])}n.remove(O)}let b=0;function C(){b=0}function Y(){const O=b;return O>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+i.maxTextures),b+=1,O}function j(O){const R=[];return R.push(O.wrapS),R.push(O.wrapT),R.push(O.wrapR||0),R.push(O.magFilter),R.push(O.minFilter),R.push(O.anisotropy),R.push(O.internalFormat),R.push(O.format),R.push(O.type),R.push(O.generateMipmaps),R.push(O.premultiplyAlpha),R.push(O.flipY),R.push(O.unpackAlignment),R.push(O.colorSpace),R.join()}function Q(O,R){const q=n.get(O);if(O.isVideoTexture&&ye(O),O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){const oe=O.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(q,O,R);return}}t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+R)}function re(O,R){const q=n.get(O);if(O.version>0&&q.__version!==O.version){Je(q,O,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+R)}function Z(O,R){const q=n.get(O);if(O.version>0&&q.__version!==O.version){Je(q,O,R);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+R)}function he(O,R){const q=n.get(O);if(O.version>0&&q.__version!==O.version){se(q,O,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+R)}const ee={[Xa]:r.REPEAT,[yi]:r.CLAMP_TO_EDGE,[Ya]:r.MIRRORED_REPEAT},Ae={[gn]:r.NEAREST,[Pp]:r.NEAREST_MIPMAP_NEAREST,[Ro]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[Ua]:r.LINEAR_MIPMAP_NEAREST,[Ji]:r.LINEAR_MIPMAP_LINEAR},me={[k_]:r.NEVER,[Y_]:r.ALWAYS,[H_]:r.LESS,[Hp]:r.LEQUAL,[V_]:r.EQUAL,[X_]:r.GEQUAL,[G_]:r.GREATER,[W_]:r.NOTEQUAL};function ve(O,R){if(R.type===Jn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===an||R.magFilter===Ua||R.magFilter===Ro||R.magFilter===Ji||R.minFilter===an||R.minFilter===Ua||R.minFilter===Ro||R.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,ee[R.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,ee[R.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,ee[R.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,Ae[R.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,Ae[R.minFilter]),R.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,me[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===gn||R.minFilter!==Ro&&R.minFilter!==Ji||R.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function st(O,R){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,R.addEventListener("dispose",U));const oe=R.source;let ue=m.get(oe);ue===void 0&&(ue={},m.set(oe,ue));const ae=j(R);if(ae!==O.__cacheKey){ue[ae]===void 0&&(ue[ae]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ue[ae].usedTimes++;const Ye=ue[O.__cacheKey];Ye!==void 0&&(ue[O.__cacheKey].usedTimes--,Ye.usedTimes===0&&B(R)),O.__cacheKey=ae,O.__webglTexture=ue[ae].texture}return q}function Je(O,R,q){let oe=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(oe=r.TEXTURE_3D);const ue=st(O,R),ae=R.source;t.bindTexture(oe,O.__webglTexture,r.TEXTURE0+q);const Ye=n.get(ae);if(ae.version!==Ye.__version||ue===!0){t.activeTexture(r.TEXTURE0+q);const we=Ot.getPrimaries(Ot.workingColorSpace),ze=R.colorSpace===vr?null:Ot.getPrimaries(R.colorSpace),Et=R.colorSpace===vr||we===ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let ge=w(R.image,!1,i.maxTextureSize);ge=Ze(R,ge);const ke=s.convert(R.format,R.colorSpace),ut=s.convert(R.type);let ht=E(R.internalFormat,ke,ut,R.colorSpace,R.isVideoTexture);ve(oe,R);let He;const At=R.mipmaps,dt=R.isVideoTexture!==!0,Bt=Ye.__version===void 0||ue===!0,H=ae.dataReady,Fe=A(R,ge);if(R.isDepthTexture)ht=M(R.format===Fs,R.type),Bt&&(dt?t.texStorage2D(r.TEXTURE_2D,1,ht,ge.width,ge.height):t.texImage2D(r.TEXTURE_2D,0,ht,ge.width,ge.height,0,ke,ut,null));else if(R.isDataTexture)if(At.length>0){dt&&Bt&&t.texStorage2D(r.TEXTURE_2D,Fe,ht,At[0].width,At[0].height);for(let ne=0,fe=At.length;ne<fe;ne++)He=At[ne],dt?H&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,He.width,He.height,ke,ut,He.data):t.texImage2D(r.TEXTURE_2D,ne,ht,He.width,He.height,0,ke,ut,He.data);R.generateMipmaps=!1}else dt?(Bt&&t.texStorage2D(r.TEXTURE_2D,Fe,ht,ge.width,ge.height),H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge.width,ge.height,ke,ut,ge.data)):t.texImage2D(r.TEXTURE_2D,0,ht,ge.width,ge.height,0,ke,ut,ge.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){dt&&Bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,ht,At[0].width,At[0].height,ge.depth);for(let ne=0,fe=At.length;ne<fe;ne++)if(He=At[ne],R.format!==Ln)if(ke!==null)if(dt){if(H)if(R.layerUpdates.size>0){const De=_p(He.width,He.height,R.format,R.type);for(const Be of R.layerUpdates){const Tt=He.data.subarray(Be*De/He.data.BYTES_PER_ELEMENT,(Be+1)*De/He.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,Be,He.width,He.height,1,ke,Tt,0,0)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,He.width,He.height,ge.depth,ke,He.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,ht,He.width,He.height,ge.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?H&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,He.width,He.height,ge.depth,ke,ut,He.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,ht,He.width,He.height,ge.depth,0,ke,ut,He.data)}else{dt&&Bt&&t.texStorage2D(r.TEXTURE_2D,Fe,ht,At[0].width,At[0].height);for(let ne=0,fe=At.length;ne<fe;ne++)He=At[ne],R.format!==Ln?ke!==null?dt?H&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,He.width,He.height,ke,He.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,ht,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?H&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,He.width,He.height,ke,ut,He.data):t.texImage2D(r.TEXTURE_2D,ne,ht,He.width,He.height,0,ke,ut,He.data)}else if(R.isDataArrayTexture)if(dt){if(Bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,ht,ge.width,ge.height,ge.depth),H)if(R.layerUpdates.size>0){const ne=_p(ge.width,ge.height,R.format,R.type);for(const fe of R.layerUpdates){const De=ge.data.subarray(fe*ne/ge.data.BYTES_PER_ELEMENT,(fe+1)*ne/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,fe,ge.width,ge.height,1,ke,ut,De)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,ke,ut,ge.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ht,ge.width,ge.height,ge.depth,0,ke,ut,ge.data);else if(R.isData3DTexture)dt?(Bt&&t.texStorage3D(r.TEXTURE_3D,Fe,ht,ge.width,ge.height,ge.depth),H&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,ke,ut,ge.data)):t.texImage3D(r.TEXTURE_3D,0,ht,ge.width,ge.height,ge.depth,0,ke,ut,ge.data);else if(R.isFramebufferTexture){if(Bt)if(dt)t.texStorage2D(r.TEXTURE_2D,Fe,ht,ge.width,ge.height);else{let ne=ge.width,fe=ge.height;for(let De=0;De<Fe;De++)t.texImage2D(r.TEXTURE_2D,De,ht,ne,fe,0,ke,ut,null),ne>>=1,fe>>=1}}else if(At.length>0){if(dt&&Bt){const ne=Ie(At[0]);t.texStorage2D(r.TEXTURE_2D,Fe,ht,ne.width,ne.height)}for(let ne=0,fe=At.length;ne<fe;ne++)He=At[ne],dt?H&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ke,ut,He):t.texImage2D(r.TEXTURE_2D,ne,ht,ke,ut,He);R.generateMipmaps=!1}else if(dt){if(Bt){const ne=Ie(ge);t.texStorage2D(r.TEXTURE_2D,Fe,ht,ne.width,ne.height)}H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,ut,ge)}else t.texImage2D(r.TEXTURE_2D,0,ht,ke,ut,ge);y(R)&&_(oe),Ye.__version=ae.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function se(O,R,q){if(R.image.length!==6)return;const oe=st(O,R),ue=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+q);const ae=n.get(ue);if(ue.version!==ae.__version||oe===!0){t.activeTexture(r.TEXTURE0+q);const Ye=Ot.getPrimaries(Ot.workingColorSpace),we=R.colorSpace===vr?null:Ot.getPrimaries(R.colorSpace),ze=R.colorSpace===vr||Ye===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Et=R.isCompressedTexture||R.image[0].isCompressedTexture,ge=R.image[0]&&R.image[0].isDataTexture,ke=[];for(let fe=0;fe<6;fe++)!Et&&!ge?ke[fe]=w(R.image[fe],!0,i.maxCubemapSize):ke[fe]=ge?R.image[fe].image:R.image[fe],ke[fe]=Ze(R,ke[fe]);const ut=ke[0],ht=s.convert(R.format,R.colorSpace),He=s.convert(R.type),At=E(R.internalFormat,ht,He,R.colorSpace),dt=R.isVideoTexture!==!0,Bt=ae.__version===void 0||oe===!0,H=ue.dataReady;let Fe=A(R,ut);ve(r.TEXTURE_CUBE_MAP,R);let ne;if(Et){dt&&Bt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,At,ut.width,ut.height);for(let fe=0;fe<6;fe++){ne=ke[fe].mipmaps;for(let De=0;De<ne.length;De++){const Be=ne[De];R.format!==Ln?ht!==null?dt?H&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,0,0,Be.width,Be.height,ht,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,At,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,0,0,Be.width,Be.height,ht,He,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,At,Be.width,Be.height,0,ht,He,Be.data)}}}else{if(ne=R.mipmaps,dt&&Bt){ne.length>0&&Fe++;const fe=Ie(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,At,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ge){dt?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ke[fe].width,ke[fe].height,ht,He,ke[fe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,At,ke[fe].width,ke[fe].height,0,ht,He,ke[fe].data);for(let De=0;De<ne.length;De++){const Tt=ne[De].image[fe].image;dt?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,0,0,Tt.width,Tt.height,ht,He,Tt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,At,Tt.width,Tt.height,0,ht,He,Tt.data)}}else{dt?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ht,He,ke[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,At,ht,He,ke[fe]);for(let De=0;De<ne.length;De++){const Be=ne[De];dt?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,0,0,ht,He,Be.image[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,At,ht,He,Be.image[fe])}}}y(R)&&_(r.TEXTURE_CUBE_MAP),ae.__version=ue.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function de(O,R,q,oe,ue,ae){const Ye=s.convert(q.format,q.colorSpace),we=s.convert(q.type),ze=E(q.internalFormat,Ye,we,q.colorSpace);if(!n.get(R).__hasExternalTextures){const ge=Math.max(1,R.width>>ae),ke=Math.max(1,R.height>>ae);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?t.texImage3D(ue,ae,ze,ge,ke,R.depth,0,Ye,we,null):t.texImage2D(ue,ae,ze,ge,ke,0,Ye,we,null)}t.bindFramebuffer(r.FRAMEBUFFER,O),pe(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,ue,n.get(q).__webglTexture,0,xe(R)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,ue,n.get(q).__webglTexture,ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(O,R,q){if(r.bindRenderbuffer(r.RENDERBUFFER,O),R.depthBuffer){const oe=R.depthTexture,ue=oe&&oe.isDepthTexture?oe.type:null,ae=M(R.stencilBuffer,ue),Ye=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=xe(R);pe(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,ae,R.width,R.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,ae,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,ae,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ye,r.RENDERBUFFER,O)}else{const oe=R.textures;for(let ue=0;ue<oe.length;ue++){const ae=oe[ue],Ye=s.convert(ae.format,ae.colorSpace),we=s.convert(ae.type),ze=E(ae.internalFormat,Ye,we,ae.colorSpace),Et=xe(R);q&&pe(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et,ze,R.width,R.height):pe(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et,ze,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,ze,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(O,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,O),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Q(R.depthTexture,0);const oe=n.get(R.depthTexture).__webglTexture,ue=xe(R);if(R.depthTexture.format===Is)pe(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(R.depthTexture.format===Fs)pe(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function tt(O){const R=n.get(O),q=O.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==O.depthTexture){const oe=O.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),oe){const ue=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,oe.removeEventListener("dispose",ue)};oe.addEventListener("dispose",ue),R.__depthDisposeCallback=ue}R.__boundDepthTexture=oe}if(O.depthTexture&&!R.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Te(R.__webglFramebuffer,O)}else if(q){R.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[oe]),R.__webglDepthbuffer[oe]===void 0)R.__webglDepthbuffer[oe]=r.createRenderbuffer(),Oe(R.__webglDepthbuffer[oe],O,!1);else{const ue=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=R.__webglDepthbuffer[oe];r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),Oe(R.__webglDepthbuffer,O,!1);else{const oe=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,ue)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(O,R,q){const oe=n.get(O);R!==void 0&&de(oe.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&tt(O)}function je(O){const R=O.texture,q=n.get(O),oe=n.get(R);O.addEventListener("dispose",P);const ue=O.textures,ae=O.isWebGLCubeRenderTarget===!0,Ye=ue.length>1;if(Ye||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=R.version,a.memory.textures++),ae){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let ze=0;ze<R.mipmaps.length;ze++)q.__webglFramebuffer[we][ze]=r.createFramebuffer()}else q.__webglFramebuffer[we]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<R.mipmaps.length;we++)q.__webglFramebuffer[we]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let we=0,ze=ue.length;we<ze;we++){const Et=n.get(ue[we]);Et.__webglTexture===void 0&&(Et.__webglTexture=r.createTexture(),a.memory.textures++)}if(O.samples>0&&pe(O)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let we=0;we<ue.length;we++){const ze=ue[we];q.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[we]);const Et=s.convert(ze.format,ze.colorSpace),ge=s.convert(ze.type),ke=E(ze.internalFormat,Et,ge,ze.colorSpace,O.isXRRenderTarget===!0),ut=xe(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,ke,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,q.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Oe(q.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),ve(r.TEXTURE_CUBE_MAP,R);for(let we=0;we<6;we++)if(R.mipmaps&&R.mipmaps.length>0)for(let ze=0;ze<R.mipmaps.length;ze++)de(q.__webglFramebuffer[we][ze],O,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze);else de(q.__webglFramebuffer[we],O,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(R)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let we=0,ze=ue.length;we<ze;we++){const Et=ue[we],ge=n.get(Et);t.bindTexture(r.TEXTURE_2D,ge.__webglTexture),ve(r.TEXTURE_2D,Et),de(q.__webglFramebuffer,O,Et,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,0),y(Et)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let we=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(we=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(we,oe.__webglTexture),ve(we,R),R.mipmaps&&R.mipmaps.length>0)for(let ze=0;ze<R.mipmaps.length;ze++)de(q.__webglFramebuffer[ze],O,R,r.COLOR_ATTACHMENT0,we,ze);else de(q.__webglFramebuffer,O,R,r.COLOR_ATTACHMENT0,we,0);y(R)&&_(we),t.unbindTexture()}O.depthBuffer&&tt(O)}function Re(O){const R=O.textures;for(let q=0,oe=R.length;q<oe;q++){const ue=R[q];if(y(ue)){const ae=O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ye=n.get(ue).__webglTexture;t.bindTexture(ae,Ye),_(ae),t.unbindTexture()}}}const le=[],N=[];function Me(O){if(O.samples>0){if(pe(O)===!1){const R=O.textures,q=O.width,oe=O.height;let ue=r.COLOR_BUFFER_BIT;const ae=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ye=n.get(O),we=R.length>1;if(we)for(let ze=0;ze<R.length;ze++)t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let ze=0;ze<R.length;ze++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[ze]);const Et=n.get(R[ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,q,oe,0,0,q,oe,ue,r.NEAREST),u===!0&&(le.length=0,N.length=0,le.push(r.COLOR_ATTACHMENT0+ze),O.depthBuffer&&O.resolveDepthBuffer===!1&&(le.push(ae),N.push(ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let ze=0;ze<R.length;ze++){t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[ze]);const Et=n.get(R[ze]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.TEXTURE_2D,Et,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&u){const R=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function xe(O){return Math.min(i.maxSamples,O.samples)}function pe(O){const R=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ye(O){const R=a.render.frame;f.get(O)!==R&&(f.set(O,R),O.update())}function Ze(O,R){const q=O.colorSpace,oe=O.format,ue=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||q!==Tr&&q!==vr&&(Ot.getTransfer(q)===Vt?(oe!==Ln||ue!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),R}function Ie(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=C,this.setTexture2D=Q,this.setTexture2DArray=re,this.setTexture3D=Z,this.setTextureCube=he,this.rebindTextures=nt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=de,this.useMultisampledRTT=pe}function ox(r,e){function t(n,i=vr){let s;const a=Ot.getTransfer(i);if(n===Ui)return r.UNSIGNED_BYTE;if(n===_h)return r.UNSIGNED_SHORT_4_4_4_4;if(n===xh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Dp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ip)return r.BYTE;if(n===Lp)return r.SHORT;if(n===Fo)return r.UNSIGNED_SHORT;if(n===vh)return r.INT;if(n===wr)return r.UNSIGNED_INT;if(n===Jn)return r.FLOAT;if(n===Wo)return r.HALF_FLOAT;if(n===Up)return r.ALPHA;if(n===Np)return r.RGB;if(n===Ln)return r.RGBA;if(n===Op)return r.LUMINANCE;if(n===Fp)return r.LUMINANCE_ALPHA;if(n===Is)return r.DEPTH_COMPONENT;if(n===Fs)return r.DEPTH_STENCIL;if(n===yh)return r.RED;if(n===dl)return r.RED_INTEGER;if(n===Bp)return r.RG;if(n===Sh)return r.RG_INTEGER;if(n===Mh)return r.RGBA_INTEGER;if(n===Na||n===Oa||n===Fa||n===Ba)if(a===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fu||n===Bu||n===zu||n===ku)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ku)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hu||n===Vu||n===Gu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hu||n===Vu)return a===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wu||n===Xu||n===Yu||n===qu||n===ju||n===Zu||n===Ju||n===Ku||n===Qu||n===$u||n===eh||n===th||n===nh||n===ih)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ju)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ju)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ku)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qu)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$u)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eh)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===th)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nh)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ih)return a===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===rh||n===sh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===za)return a===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zp||n===oh||n===ah||n===lh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===za)return s.COMPRESSED_RED_RGTC1_EXT;if(n===oh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ah)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class ax extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zr extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wT={type:"move"};class Ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,n),_=this._getHandJoint(h,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=f.position.distanceTo(p.position),g=.02,x=.005;h.inputState.pinching&&m>g+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(wT)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ET=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AT=`
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

}`;class TT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new $t,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ci({vertexShader:ET,fragmentShader:AT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bT extends nr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,c="local-floor",u=1,h=null,f=null,p=null,m=null,g=null,x=null;const w=new TT,y=t.getContextAttributes();let _=null,E=null;const M=[],A=[],U=new ce;let P=null;const L=new on;L.layers.enable(1),L.viewport=new wt;const B=new on;B.layers.enable(2),B.viewport=new wt;const z=[L,B],b=new ax;b.layers.enable(1),b.layers.enable(2);let C=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let de=M[se];return de===void 0&&(de=new Ld,M[se]=de),de.getTargetRaySpace()},this.getControllerGrip=function(se){let de=M[se];return de===void 0&&(de=new Ld,M[se]=de),de.getGripSpace()},this.getHand=function(se){let de=M[se];return de===void 0&&(de=new Ld,M[se]=de),de.getHandSpace()};function j(se){const de=A.indexOf(se.inputSource);if(de===-1)return;const Oe=M[de];Oe!==void 0&&(Oe.update(se.inputSource,se.frame,h||a),Oe.dispatchEvent({type:se.type,data:se.inputSource}))}function Q(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",re);for(let se=0;se<M.length;se++){const de=A[se];de!==null&&(A[se]=null,M[se].disconnect(de))}C=null,Y=null,w.reset(),e.setRenderTarget(_),g=null,m=null,p=null,i=null,E=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){c=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(se){if(i=se,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",re),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),i.renderState.layers===void 0){const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Ni(g.framebufferWidth,g.framebufferHeight,{format:Ln,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let de=null,Oe=null,Te=null;y.depth&&(Te=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?Fs:Is,Oe=y.stencil?Os:wr);const tt={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};p=new XRWebGLBinding(i,t),m=p.createProjectionLayer(tt),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new Ni(m.textureWidth,m.textureHeight,{format:Ln,type:Ui,depthTexture:new jp(m.textureWidth,m.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await i.requestReferenceSpace(c),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function re(se){for(let de=0;de<se.removed.length;de++){const Oe=se.removed[de],Te=A.indexOf(Oe);Te>=0&&(A[Te]=null,M[Te].disconnect(Oe))}for(let de=0;de<se.added.length;de++){const Oe=se.added[de];let Te=A.indexOf(Oe);if(Te===-1){for(let nt=0;nt<M.length;nt++)if(nt>=A.length){A.push(Oe),Te=nt;break}else if(A[nt]===null){A[nt]=Oe,Te=nt;break}if(Te===-1)break}const tt=M[Te];tt&&tt.connect(Oe)}}const Z=new D,he=new D;function ee(se,de,Oe){Z.setFromMatrixPosition(de.matrixWorld),he.setFromMatrixPosition(Oe.matrixWorld);const Te=Z.distanceTo(he),tt=de.projectionMatrix.elements,nt=Oe.projectionMatrix.elements,je=tt[14]/(tt[10]-1),Re=tt[14]/(tt[10]+1),le=(tt[9]+1)/tt[5],N=(tt[9]-1)/tt[5],Me=(tt[8]-1)/tt[0],xe=(nt[8]+1)/nt[0],pe=je*Me,ye=je*xe,Ze=Te/(-Me+xe),Ie=Ze*-Me;if(de.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ie),se.translateZ(Ze),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),tt[10]===-1)se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const O=je+Ze,R=Re+Ze,q=pe-Ie,oe=ye+(Te-Ie),ue=le*Re/R*O,ae=N*Re/R*O;se.projectionMatrix.makePerspective(q,oe,ue,ae,O,R),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function Ae(se,de){de===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(de.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(i===null)return;let de=se.near,Oe=se.far;w.texture!==null&&(w.depthNear>0&&(de=w.depthNear),w.depthFar>0&&(Oe=w.depthFar)),b.near=B.near=L.near=de,b.far=B.far=L.far=Oe,(C!==b.near||Y!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,Y=b.far);const Te=se.parent,tt=b.cameras;Ae(b,Te);for(let nt=0;nt<tt.length;nt++)Ae(tt[nt],Te);tt.length===2?ee(b,L,B):b.projectionMatrix.copy(L.projectionMatrix),me(se,b,Te)};function me(se,de,Oe){Oe===null?se.matrix.copy(de.matrixWorld):(se.matrix.copy(Oe.matrixWorld),se.matrix.invert(),se.matrix.multiply(de.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(de.projectionMatrix),se.projectionMatrixInverse.copy(de.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Bo*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(se){u=se,m!==null&&(m.fixedFoveation=se),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=se)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(b)};let ve=null;function st(se,de){if(f=de.getViewerPose(h||a),x=de,f!==null){const Oe=f.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let Te=!1;Oe.length!==b.cameras.length&&(b.cameras.length=0,Te=!0);for(let nt=0;nt<Oe.length;nt++){const je=Oe[nt];let Re=null;if(g!==null)Re=g.getViewport(je);else{const N=p.getViewSubImage(m,je);Re=N.viewport,nt===0&&(e.setRenderTargetTextures(E,N.colorTexture,m.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(E))}let le=z[nt];le===void 0&&(le=new on,le.layers.enable(nt),le.viewport=new wt,z[nt]=le),le.matrix.fromArray(je.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(je.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Re.x,Re.y,Re.width,Re.height),nt===0&&(b.matrix.copy(le.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Te===!0&&b.cameras.push(le)}const tt=i.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const nt=p.getDepthInformation(Oe[0]);nt&&nt.isValid&&nt.texture&&w.init(e,nt,i.renderState)}}for(let Oe=0;Oe<M.length;Oe++){const Te=A[Oe],tt=M[Oe];Te!==null&&tt!==void 0&&tt.update(Te,de,h||a)}ve&&ve(se,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),x=null}const Je=new tx;Je.setAnimationLoop(st),this.setAnimationLoop=function(se){ve=se},this.dispose=function(){}}}const gs=new li,CT=new at;function RT(r,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function n(y,_){_.color.getRGB(y.fogColor.value,Q_(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function i(y,_,E,M,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(y,_):_.isMeshToonMaterial?(s(y,_),p(y,_)):_.isMeshPhongMaterial?(s(y,_),f(y,_)):_.isMeshStandardMaterial?(s(y,_),m(y,_),_.isMeshPhysicalMaterial&&g(y,_,A)):_.isMeshMatcapMaterial?(s(y,_),x(y,_)):_.isMeshDepthMaterial?s(y,_):_.isMeshDistanceMaterial?(s(y,_),w(y,_)):_.isMeshNormalMaterial?s(y,_):_.isLineBasicMaterial?(a(y,_),_.isLineDashedMaterial&&c(y,_)):_.isPointsMaterial?u(y,_,E,M):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Dn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Dn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const E=e.get(_),M=E.envMap,A=E.envMapRotation;M&&(y.envMap.value=M,gs.copy(A),gs.x*=-1,gs.y*=-1,gs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),y.envMapRotation.value.setFromMatrix4(CT.makeRotationFromEuler(gs)),y.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function a(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function c(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function u(y,_,E,M){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*E,y.scale.value=M*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function f(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function p(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function m(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function g(y,_,E){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Dn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=E.texture,y.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function x(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const E=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(E.matrixWorld),y.nearDistance.value=E.shadow.camera.near,y.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function PT(r,e,t,n){let i={},s={},a=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,M){const A=M.program;n.uniformBlockBinding(E,A)}function h(E,M){let A=i[E.id];A===void 0&&(x(E),A=f(E),i[E.id]=A,E.addEventListener("dispose",y));const U=M.program;n.updateUBOMapping(E,U);const P=e.render.frame;s[E.id]!==P&&(m(E),s[E.id]=P)}function f(E){const M=p();E.__bindingPointIndex=M;const A=r.createBuffer(),U=E.__size,P=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,U,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,A),A}function p(){for(let E=0;E<c;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const M=i[E.id],A=E.uniforms,U=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let P=0,L=A.length;P<L;P++){const B=Array.isArray(A[P])?A[P]:[A[P]];for(let z=0,b=B.length;z<b;z++){const C=B[z];if(g(C,P,z,U)===!0){const Y=C.__offset,j=Array.isArray(C.value)?C.value:[C.value];let Q=0;for(let re=0;re<j.length;re++){const Z=j[re],he=w(Z);typeof Z=="number"||typeof Z=="boolean"?(C.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,Y+Q,C.__data)):Z.isMatrix3?(C.__data[0]=Z.elements[0],C.__data[1]=Z.elements[1],C.__data[2]=Z.elements[2],C.__data[3]=0,C.__data[4]=Z.elements[3],C.__data[5]=Z.elements[4],C.__data[6]=Z.elements[5],C.__data[7]=0,C.__data[8]=Z.elements[6],C.__data[9]=Z.elements[7],C.__data[10]=Z.elements[8],C.__data[11]=0):(Z.toArray(C.__data,Q),Q+=he.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(E,M,A,U){const P=E.value,L=M+"_"+A;if(U[L]===void 0)return typeof P=="number"||typeof P=="boolean"?U[L]=P:U[L]=P.clone(),!0;{const B=U[L];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return U[L]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function x(E){const M=E.uniforms;let A=0;const U=16;for(let L=0,B=M.length;L<B;L++){const z=Array.isArray(M[L])?M[L]:[M[L]];for(let b=0,C=z.length;b<C;b++){const Y=z[b],j=Array.isArray(Y.value)?Y.value:[Y.value];for(let Q=0,re=j.length;Q<re;Q++){const Z=j[Q],he=w(Z),ee=A%U,Ae=ee%he.boundary,me=ee+Ae;A+=Ae,me!==0&&U-me<he.storage&&(A+=U-me),Y.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=A,A+=he.storage}}}const P=A%U;return P>0&&(A+=U-P),E.__size=A,E.__cache={},this}function w(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function y(E){const M=E.target;M.removeEventListener("dispose",y);const A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function _(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:u,update:h,dispose:_}}class lx{constructor(e={}){const{canvas:t=j_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),x=new Int32Array(4);let w=null,y=null;const _=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=Qi,this.toneMappingExposure=1;const M=this;let A=!1,U=0,P=0,L=null,B=-1,z=null;const b=new wt,C=new wt;let Y=null;const j=new Ne(0);let Q=0,re=t.width,Z=t.height,he=1,ee=null,Ae=null;const me=new wt(0,0,re,Z),ve=new wt(0,0,re,Z);let st=!1;const Je=new vl;let se=!1,de=!1;const Oe=new at,Te=new at,tt=new D,nt=new wt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function le(){return L===null?he:1}let N=n;function Me(I,G){return t.getContext(I,G)}try{const I={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Be,!1),N===null){const G="webgl2";if(N=Me(G,I),N===null)throw Me(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let xe,pe,ye,Ze,Ie,O,R,q,oe,ue,ae,Ye,we,ze,Et,ge,ke,ut,ht,He,At,dt,Bt,H;function Fe(){xe=new OE(N),xe.init(),dt=new ox(N,xe),pe=new PE(N,xe,e,dt),ye=new gT(N),pe.reverseDepthBuffer&&ye.buffers.depth.setReversed(!0),Ze=new zE(N),Ie=new iT,O=new MT(N,xe,ye,Ie,pe,dt,Ze),R=new LE(M),q=new NE(M),oe=new YM(N),Bt=new CE(N,oe),ue=new FE(N,oe,Ze,Bt),ae=new HE(N,ue,oe,Ze),ht=new kE(N,pe,O),ge=new IE(Ie),Ye=new nT(M,R,q,xe,pe,Bt,ge),we=new RT(M,Ie),ze=new sT,Et=new hT(xe),ut=new bE(M,R,q,ye,ae,m,u),ke=new pT(M,ae,pe),H=new PT(N,Ze,pe,ye),He=new RE(N,xe,Ze),At=new BE(N,xe,Ze),Ze.programs=Ye.programs,M.capabilities=pe,M.extensions=xe,M.properties=Ie,M.renderLists=ze,M.shadowMap=ke,M.state=ye,M.info=Ze}Fe();const ne=new bT(M,N);this.xr=ne,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const I=xe.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=xe.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(I){I!==void 0&&(he=I,this.setSize(re,Z,!1))},this.getSize=function(I){return I.set(re,Z)},this.setSize=function(I,G,K=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=I,Z=G,t.width=Math.floor(I*he),t.height=Math.floor(G*he),K===!0&&(t.style.width=I+"px",t.style.height=G+"px"),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(re*he,Z*he).floor()},this.setDrawingBufferSize=function(I,G,K){re=I,Z=G,he=K,t.width=Math.floor(I*K),t.height=Math.floor(G*K),this.setViewport(0,0,I,G)},this.getCurrentViewport=function(I){return I.copy(b)},this.getViewport=function(I){return I.copy(me)},this.setViewport=function(I,G,K,$){I.isVector4?me.set(I.x,I.y,I.z,I.w):me.set(I,G,K,$),ye.viewport(b.copy(me).multiplyScalar(he).round())},this.getScissor=function(I){return I.copy(ve)},this.setScissor=function(I,G,K,$){I.isVector4?ve.set(I.x,I.y,I.z,I.w):ve.set(I,G,K,$),ye.scissor(C.copy(ve).multiplyScalar(he).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(I){ye.setScissorTest(st=I)},this.setOpaqueSort=function(I){ee=I},this.setTransparentSort=function(I){Ae=I},this.getClearColor=function(I){return I.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(I=!0,G=!0,K=!0){let $=0;if(I){let X=!1;if(L!==null){const Se=L.texture.format;X=Se===Mh||Se===Sh||Se===dl}if(X){const Se=L.texture.type,Ue=Se===Ui||Se===wr||Se===Fo||Se===Os||Se===_h||Se===xh,Ve=ut.getClearColor(),Ge=ut.getClearAlpha(),lt=Ve.r,ct=Ve.g,Ke=Ve.b;Ue?(g[0]=lt,g[1]=ct,g[2]=Ke,g[3]=Ge,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=lt,x[1]=ct,x[2]=Ke,x[3]=Ge,N.clearBufferiv(N.COLOR,0,x))}else $|=N.COLOR_BUFFER_BIT}G&&($|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),ze.dispose(),Et.dispose(),Ie.dispose(),R.dispose(),q.dispose(),ae.dispose(),Bt.dispose(),H.dispose(),Ye.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Al),ne.removeEventListener("sessionend",Tl),rr.stop()};function fe(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const I=Ze.autoReset,G=ke.enabled,K=ke.autoUpdate,$=ke.needsUpdate,X=ke.type;Fe(),Ze.autoReset=I,ke.enabled=G,ke.autoUpdate=K,ke.needsUpdate=$,ke.type=X}function Be(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Tt(I){const G=I.target;G.removeEventListener("dispose",Tt),qt(G)}function qt(I){En(I),Ie.remove(I)}function En(I){const G=Ie.get(I).programs;G!==void 0&&(G.forEach(function(K){Ye.releaseProgram(K)}),I.isShaderMaterial&&Ye.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,K,$,X,Se){G===null&&(G=je);const Ue=X.isMesh&&X.matrixWorld.determinant()<0,Ve=jh(I,G,K,$,X);ye.setMaterial($,Ue);let Ge=K.index,lt=1;if($.wireframe===!0){if(Ge=ue.getWireframeAttribute(K),Ge===void 0)return;lt=2}const ct=K.drawRange,Ke=K.attributes.position;let Rt=ct.start*lt,Lt=(ct.start+ct.count)*lt;Se!==null&&(Rt=Math.max(Rt,Se.start*lt),Lt=Math.min(Lt,(Se.start+Se.count)*lt)),Ge!==null?(Rt=Math.max(Rt,0),Lt=Math.min(Lt,Ge.count)):Ke!=null&&(Rt=Math.max(Rt,0),Lt=Math.min(Lt,Ke.count));const Ft=Lt-Rt;if(Ft<0||Ft===1/0)return;Bt.setup(X,$,Ve,K,Ge);let St,$e=He;if(Ge!==null&&(St=oe.get(Ge),$e=At,$e.setIndex(St)),X.isMesh)$.wireframe===!0?(ye.setLineWidth($.wireframeLinewidth*le()),$e.setMode(N.LINES)):$e.setMode(N.TRIANGLES);else if(X.isLine){let Xe=$.linewidth;Xe===void 0&&(Xe=1),ye.setLineWidth(Xe*le()),X.isLineSegments?$e.setMode(N.LINES):X.isLineLoop?$e.setMode(N.LINE_LOOP):$e.setMode(N.LINE_STRIP)}else X.isPoints?$e.setMode(N.POINTS):X.isSprite&&$e.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)$e.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))$e.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Xe=X._multiDrawStarts,Ct=X._multiDrawCounts,ft=X._multiDrawCount,ln=Ge?oe.get(Ge).bytesPerElement:1,$n=Ie.get($).currentProgram.getUniforms();for(let kt=0;kt<ft;kt++)$n.setValue(N,"_gl_DrawID",kt),$e.render(Xe[kt]/ln,Ct[kt])}else if(X.isInstancedMesh)$e.renderInstances(Rt,Ft,X.count);else if(K.isInstancedBufferGeometry){const Xe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ct=Math.min(K.instanceCount,Xe);$e.renderInstances(Rt,Ft,Ct)}else $e.render(Rt,Ft)};function bt(I,G,K){I.transparent===!0&&I.side===Pi&&I.forceSinglePass===!1?(I.side=Dn,I.needsUpdate=!0,js(I,G,K),I.side=Sr,I.needsUpdate=!0,js(I,G,K),I.side=Pi):js(I,G,K)}this.compile=function(I,G,K=null){K===null&&(K=I),y=Et.get(K),y.init(G),E.push(y),K.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),I!==K&&I.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const $=new Set;return I.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Se=X.material;if(Se)if(Array.isArray(Se))for(let Ue=0;Ue<Se.length;Ue++){const Ve=Se[Ue];bt(Ve,K,X),$.add(Ve)}else bt(Se,K,X),$.add(Se)}),E.pop(),y=null,$},this.compileAsync=function(I,G,K=null){const $=this.compile(I,G,K);return new Promise(X=>{function Se(){if($.forEach(function(Ue){Ie.get(Ue).currentProgram.isReady()&&$.delete(Ue)}),$.size===0){X(I);return}setTimeout(Se,10)}xe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let xn=null;function ui(I){xn&&xn(I)}function Al(){rr.stop()}function Tl(){rr.start()}const rr=new tx;rr.setAnimationLoop(ui),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(I){xn=I,ne.setAnimationLoop(I),I===null?rr.stop():rr.start()},ne.addEventListener("sessionstart",Al),ne.addEventListener("sessionend",Tl),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(G),G=ne.getCamera()),I.isScene===!0&&I.onBeforeRender(M,I,G,L),y=Et.get(I,E.length),y.init(G),E.push(y),Te.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Je.setFromProjectionMatrix(Te),de=this.localClippingEnabled,se=ge.init(this.clippingPlanes,de),w=ze.get(I,_.length),w.init(),_.push(w),ne.enabled===!0&&ne.isPresenting===!0){const Se=M.xr.getDepthSensingMesh();Se!==null&&Ys(Se,G,-1/0,M.sortObjects)}Ys(I,G,0,M.sortObjects),w.finish(),M.sortObjects===!0&&w.sort(ee,Ae),Re=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Re&&ut.addToRenderList(w,I),this.info.render.frame++,se===!0&&ge.beginShadows();const K=y.state.shadowsArray;ke.render(K,I,G),se===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=w.opaque,X=w.transmissive;if(y.setupLights(),G.isArrayCamera){const Se=G.cameras;if(X.length>0)for(let Ue=0,Ve=Se.length;Ue<Ve;Ue++){const Ge=Se[Ue];bl($,X,I,Ge)}Re&&ut.render(I);for(let Ue=0,Ve=Se.length;Ue<Ve;Ue++){const Ge=Se[Ue];qs(w,I,Ge,Ge.viewport)}}else X.length>0&&bl($,X,I,G),Re&&ut.render(I),qs(w,I,G);L!==null&&(O.updateMultisampleRenderTarget(L),O.updateRenderTargetMipmap(L)),I.isScene===!0&&I.onAfterRender(M,I,G),Bt.resetDefaultState(),B=-1,z=null,E.pop(),E.length>0?(y=E[E.length-1],se===!0&&ge.setGlobalState(M.clippingPlanes,y.state.camera)):y=null,_.pop(),_.length>0?w=_[_.length-1]:w=null};function Ys(I,G,K,$){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)K=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)y.pushLight(I),I.castShadow&&y.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Je.intersectsSprite(I)){$&&nt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Te);const Ue=ae.update(I),Ve=I.material;Ve.visible&&w.push(I,Ue,Ve,K,nt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Je.intersectsObject(I))){const Ue=ae.update(I),Ve=I.material;if($&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),nt.copy(I.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),nt.copy(Ue.boundingSphere.center)),nt.applyMatrix4(I.matrixWorld).applyMatrix4(Te)),Array.isArray(Ve)){const Ge=Ue.groups;for(let lt=0,ct=Ge.length;lt<ct;lt++){const Ke=Ge[lt],Rt=Ve[Ke.materialIndex];Rt&&Rt.visible&&w.push(I,Ue,Rt,K,nt.z,Ke)}}else Ve.visible&&w.push(I,Ue,Ve,K,nt.z,null)}}const Se=I.children;for(let Ue=0,Ve=Se.length;Ue<Ve;Ue++)Ys(Se[Ue],G,K,$)}function qs(I,G,K,$){const X=I.opaque,Se=I.transmissive,Ue=I.transparent;y.setupLightsView(K),se===!0&&ge.setGlobalState(M.clippingPlanes,K),$&&ye.viewport(b.copy($)),X.length>0&&Bi(X,G,K),Se.length>0&&Bi(Se,G,K),Ue.length>0&&Bi(Ue,G,K),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function bl(I,G,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[$.id]===void 0&&(y.state.transmissionRenderTarget[$.id]=new Ni(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Wo:Ui,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace}));const Se=y.state.transmissionRenderTarget[$.id],Ue=$.viewport||b;Se.setSize(Ue.z,Ue.w);const Ve=M.getRenderTarget();M.setRenderTarget(Se),M.getClearColor(j),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),Re&&ut.render(K);const Ge=M.toneMapping;M.toneMapping=Qi;const lt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),y.setupLightsView($),se===!0&&ge.setGlobalState(M.clippingPlanes,$),Bi(I,K,$),O.updateMultisampleRenderTarget(Se),O.updateRenderTargetMipmap(Se),xe.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Ke=0,Rt=G.length;Ke<Rt;Ke++){const Lt=G[Ke],Ft=Lt.object,St=Lt.geometry,$e=Lt.material,Xe=Lt.group;if($e.side===Pi&&Ft.layers.test($.layers)){const Ct=$e.side;$e.side=Dn,$e.needsUpdate=!0,Cl(Ft,K,$,St,$e,Xe),$e.side=Ct,$e.needsUpdate=!0,ct=!0}}ct===!0&&(O.updateMultisampleRenderTarget(Se),O.updateRenderTargetMipmap(Se))}M.setRenderTarget(Ve),M.setClearColor(j,Q),lt!==void 0&&($.viewport=lt),M.toneMapping=Ge}function Bi(I,G,K){const $=G.isScene===!0?G.overrideMaterial:null;for(let X=0,Se=I.length;X<Se;X++){const Ue=I[X],Ve=Ue.object,Ge=Ue.geometry,lt=$===null?Ue.material:$,ct=Ue.group;Ve.layers.test(K.layers)&&Cl(Ve,G,K,Ge,lt,ct)}}function Cl(I,G,K,$,X,Se){I.onBeforeRender(M,G,K,$,X,Se),I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),X.onBeforeRender(M,G,K,$,I,Se),X.transparent===!0&&X.side===Pi&&X.forceSinglePass===!1?(X.side=Dn,X.needsUpdate=!0,M.renderBufferDirect(K,G,$,X,I,Se),X.side=Sr,X.needsUpdate=!0,M.renderBufferDirect(K,G,$,X,I,Se),X.side=Pi):M.renderBufferDirect(K,G,$,X,I,Se),I.onAfterRender(M,G,K,$,X,Se)}function js(I,G,K){G.isScene!==!0&&(G=je);const $=Ie.get(I),X=y.state.lights,Se=y.state.shadowsArray,Ue=X.state.version,Ve=Ye.getParameters(I,X.state,Se,G,K),Ge=Ye.getProgramCacheKey(Ve);let lt=$.programs;$.environment=I.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(I.isMeshStandardMaterial?q:R).get(I.envMap||$.environment),$.envMapRotation=$.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,lt===void 0&&(I.addEventListener("dispose",Tt),lt=new Map,$.programs=lt);let ct=lt.get(Ge);if(ct!==void 0){if($.currentProgram===ct&&$.lightsStateVersion===Ue)return Pl(I,Ve),ct}else Ve.uniforms=Ye.getUniforms(I),I.onBeforeCompile(Ve,M),ct=Ye.acquireProgram(Ve,Ge),lt.set(Ge,ct),$.uniforms=Ve.uniforms;const Ke=$.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ke.clippingPlanes=ge.uniform),Pl(I,Ve),$.needsLights=Jh(I),$.lightsStateVersion=Ue,$.needsLights&&(Ke.ambientLightColor.value=X.state.ambient,Ke.lightProbe.value=X.state.probe,Ke.directionalLights.value=X.state.directional,Ke.directionalLightShadows.value=X.state.directionalShadow,Ke.spotLights.value=X.state.spot,Ke.spotLightShadows.value=X.state.spotShadow,Ke.rectAreaLights.value=X.state.rectArea,Ke.ltc_1.value=X.state.rectAreaLTC1,Ke.ltc_2.value=X.state.rectAreaLTC2,Ke.pointLights.value=X.state.point,Ke.pointLightShadows.value=X.state.pointShadow,Ke.hemisphereLights.value=X.state.hemi,Ke.directionalShadowMap.value=X.state.directionalShadowMap,Ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ke.spotShadowMap.value=X.state.spotShadowMap,Ke.spotLightMatrix.value=X.state.spotLightMatrix,Ke.spotLightMap.value=X.state.spotLightMap,Ke.pointShadowMap.value=X.state.pointShadowMap,Ke.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=ct,$.uniformsList=null,ct}function Rl(I){if(I.uniformsList===null){const G=I.currentProgram.getUniforms();I.uniformsList=Tu.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function Pl(I,G){const K=Ie.get(I);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function jh(I,G,K,$,X){G.isScene!==!0&&(G=je),O.resetTextureUnits();const Se=G.fog,Ue=$.isMeshStandardMaterial?G.environment:null,Ve=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Tr,Ge=($.isMeshStandardMaterial?q:R).get($.envMap||Ue),lt=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ct=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ke=!!K.morphAttributes.position,Rt=!!K.morphAttributes.normal,Lt=!!K.morphAttributes.color;let Ft=Qi;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ft=M.toneMapping);const St=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$e=St!==void 0?St.length:0,Xe=Ie.get($),Ct=y.state.lights;if(se===!0&&(de===!0||I!==z)){const Nn=I===z&&$.id===B;ge.setState($,I,Nn)}let ft=!1;$.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ct.state.version||Xe.outputColorSpace!==Ve||X.isBatchedMesh&&Xe.batching===!1||!X.isBatchedMesh&&Xe.batching===!0||X.isBatchedMesh&&Xe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Xe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Xe.instancing===!1||!X.isInstancedMesh&&Xe.instancing===!0||X.isSkinnedMesh&&Xe.skinning===!1||!X.isSkinnedMesh&&Xe.skinning===!0||X.isInstancedMesh&&Xe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Xe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Xe.instancingMorph===!1&&X.morphTexture!==null||Xe.envMap!==Ge||$.fog===!0&&Xe.fog!==Se||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ge.numPlanes||Xe.numIntersection!==ge.numIntersection)||Xe.vertexAlphas!==lt||Xe.vertexTangents!==ct||Xe.morphTargets!==Ke||Xe.morphNormals!==Rt||Xe.morphColors!==Lt||Xe.toneMapping!==Ft||Xe.morphTargetsCount!==$e)&&(ft=!0):(ft=!0,Xe.__version=$.version);let ln=Xe.currentProgram;ft===!0&&(ln=js($,G,X));let $n=!1,kt=!1,Cr=!1;const Wt=ln.getUniforms(),Si=Xe.uniforms;if(ye.useProgram(ln.program)&&($n=!0,kt=!0,Cr=!0),$.id!==B&&(B=$.id,kt=!0),$n||z!==I){pe.reverseDepthBuffer?(Oe.copy(I.projectionMatrix),gM(Oe),vM(Oe),Wt.setValue(N,"projectionMatrix",Oe)):Wt.setValue(N,"projectionMatrix",I.projectionMatrix),Wt.setValue(N,"viewMatrix",I.matrixWorldInverse);const Nn=Wt.map.cameraPosition;Nn!==void 0&&Nn.setValue(N,tt.setFromMatrixPosition(I.matrixWorld)),pe.logarithmicDepthBuffer&&Wt.setValue(N,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Wt.setValue(N,"isOrthographic",I.isOrthographicCamera===!0),z!==I&&(z=I,kt=!0,Cr=!0)}if(X.isSkinnedMesh){Wt.setOptional(N,X,"bindMatrix"),Wt.setOptional(N,X,"bindMatrixInverse");const Nn=X.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Wt.setValue(N,"boneTexture",Nn.boneTexture,O))}X.isBatchedMesh&&(Wt.setOptional(N,X,"batchingTexture"),Wt.setValue(N,"batchingTexture",X._matricesTexture,O),Wt.setOptional(N,X,"batchingIdTexture"),Wt.setValue(N,"batchingIdTexture",X._indirectTexture,O),Wt.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&Wt.setValue(N,"batchingColorTexture",X._colorsTexture,O));const Rr=K.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&ht.update(X,K,ln),(kt||Xe.receiveShadow!==X.receiveShadow)&&(Xe.receiveShadow=X.receiveShadow,Wt.setValue(N,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Si.envMap.value=Ge,Si.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(Si.envMapIntensity.value=G.environmentIntensity),kt&&(Wt.setValue(N,"toneMappingExposure",M.toneMappingExposure),Xe.needsLights&&Zh(Si,Cr),Se&&$.fog===!0&&we.refreshFogUniforms(Si,Se),we.refreshMaterialUniforms(Si,$,he,Z,y.state.transmissionRenderTarget[I.id]),Tu.upload(N,Rl(Xe),Si,O)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Tu.upload(N,Rl(Xe),Si,O),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Wt.setValue(N,"center",X.center),Wt.setValue(N,"modelViewMatrix",X.modelViewMatrix),Wt.setValue(N,"normalMatrix",X.normalMatrix),Wt.setValue(N,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Nn=$.uniformsGroups;for(let On=0,Kh=Nn.length;On<Kh;On++){const Il=Nn[On];H.update(Il,ln),H.bind(Il,ln)}}return ln}function Zh(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function Jh(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,G,K){Ie.get(I.texture).__webglTexture=G,Ie.get(I.depthTexture).__webglTexture=K;const $=Ie.get(I);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,G){const K=Ie.get(I);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,K=0){L=I,U=G,P=K;let $=!0,X=null,Se=!1,Ue=!1;if(I){const Ge=Ie.get(I);if(Ge.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(Ge.__webglFramebuffer===void 0)O.setupRenderTarget(I);else if(Ge.__hasExternalTextures)O.rebindTextures(I,Ie.get(I.texture).__webglTexture,Ie.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ke=I.depthTexture;if(Ge.__boundDepthTexture!==Ke){if(Ke!==null&&Ie.has(Ke)&&(I.width!==Ke.image.width||I.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(I)}}const lt=I.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ue=!0);const ct=Ie.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ct[G])?X=ct[G][K]:X=ct[G],Se=!0):I.samples>0&&O.useMultisampledRTT(I)===!1?X=Ie.get(I).__webglMultisampledFramebuffer:Array.isArray(ct)?X=ct[K]:X=ct,b.copy(I.viewport),C.copy(I.scissor),Y=I.scissorTest}else b.copy(me).multiplyScalar(he).floor(),C.copy(ve).multiplyScalar(he).floor(),Y=st;if(ye.bindFramebuffer(N.FRAMEBUFFER,X)&&$&&ye.drawBuffers(I,X),ye.viewport(b),ye.scissor(C),ye.setScissorTest(Y),Se){const Ge=Ie.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ge.__webglTexture,K)}else if(Ue){const Ge=Ie.get(I.texture),lt=G||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ge.__webglTexture,K||0,lt)}B=-1},this.readRenderTargetPixels=function(I,G,K,$,X,Se,Ue){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ie.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){ye.bindFramebuffer(N.FRAMEBUFFER,Ve);try{const Ge=I.texture,lt=Ge.format,ct=Ge.type;if(!pe.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-$&&K>=0&&K<=I.height-X&&N.readPixels(G,K,$,X,dt.convert(lt),dt.convert(ct),Se)}finally{const Ge=L!==null?Ie.get(L).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(I,G,K,$,X,Se,Ue){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ie.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){const Ge=I.texture,lt=Ge.format,ct=Ge.type;if(!pe.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=I.width-$&&K>=0&&K<=I.height-X){ye.bindFramebuffer(N.FRAMEBUFFER,Ve);const Ke=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ke),N.bufferData(N.PIXEL_PACK_BUFFER,Se.byteLength,N.STREAM_READ),N.readPixels(G,K,$,X,dt.convert(lt),dt.convert(ct),0);const Rt=L!==null?Ie.get(L).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,Rt);const Lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await mM(N,Lt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ke),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Se),N.deleteBuffer(Ke),N.deleteSync(Lt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,G=null,K=0){I.isTexture!==!0&&(Au("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,I=arguments[1]);const $=Math.pow(2,-K),X=Math.floor(I.image.width*$),Se=Math.floor(I.image.height*$),Ue=G!==null?G.x:0,Ve=G!==null?G.y:0;O.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Ue,Ve,X,Se),ye.unbindTexture()},this.copyTextureToTexture=function(I,G,K=null,$=null,X=0){I.isTexture!==!0&&(Au("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,I=arguments[1],G=arguments[2],X=arguments[3]||0,K=null);let Se,Ue,Ve,Ge,lt,ct;K!==null?(Se=K.max.x-K.min.x,Ue=K.max.y-K.min.y,Ve=K.min.x,Ge=K.min.y):(Se=I.image.width,Ue=I.image.height,Ve=0,Ge=0),$!==null?(lt=$.x,ct=$.y):(lt=0,ct=0);const Ke=dt.convert(G.format),Rt=dt.convert(G.type);O.setTexture2D(G,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const Lt=N.getParameter(N.UNPACK_ROW_LENGTH),Ft=N.getParameter(N.UNPACK_IMAGE_HEIGHT),St=N.getParameter(N.UNPACK_SKIP_PIXELS),$e=N.getParameter(N.UNPACK_SKIP_ROWS),Xe=N.getParameter(N.UNPACK_SKIP_IMAGES),Ct=I.isCompressedTexture?I.mipmaps[X]:I.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ct.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ct.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ge),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,X,lt,ct,Se,Ue,Ke,Rt,Ct.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,X,lt,ct,Ct.width,Ct.height,Ke,Ct.data):N.texSubImage2D(N.TEXTURE_2D,X,lt,ct,Se,Ue,Ke,Rt,Ct),N.pixelStorei(N.UNPACK_ROW_LENGTH,Lt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ft),N.pixelStorei(N.UNPACK_SKIP_PIXELS,St),N.pixelStorei(N.UNPACK_SKIP_ROWS,$e),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xe),X===0&&G.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(I,G,K=null,$=null,X=0){I.isTexture!==!0&&(Au("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,$=arguments[1]||null,I=arguments[2],G=arguments[3],X=arguments[4]||0);let Se,Ue,Ve,Ge,lt,ct,Ke,Rt,Lt;const Ft=I.isCompressedTexture?I.mipmaps[X]:I.image;K!==null?(Se=K.max.x-K.min.x,Ue=K.max.y-K.min.y,Ve=K.max.z-K.min.z,Ge=K.min.x,lt=K.min.y,ct=K.min.z):(Se=Ft.width,Ue=Ft.height,Ve=Ft.depth,Ge=0,lt=0,ct=0),$!==null?(Ke=$.x,Rt=$.y,Lt=$.z):(Ke=0,Rt=0,Lt=0);const St=dt.convert(G.format),$e=dt.convert(G.type);let Xe;if(G.isData3DTexture)O.setTexture3D(G,0),Xe=N.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)O.setTexture2DArray(G,0),Xe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const Ct=N.getParameter(N.UNPACK_ROW_LENGTH),ft=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ln=N.getParameter(N.UNPACK_SKIP_PIXELS),$n=N.getParameter(N.UNPACK_SKIP_ROWS),kt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ge),N.pixelStorei(N.UNPACK_SKIP_ROWS,lt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ct),I.isDataTexture||I.isData3DTexture?N.texSubImage3D(Xe,X,Ke,Rt,Lt,Se,Ue,Ve,St,$e,Ft.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(Xe,X,Ke,Rt,Lt,Se,Ue,Ve,St,Ft.data):N.texSubImage3D(Xe,X,Ke,Rt,Lt,Se,Ue,Ve,St,$e,Ft),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ct),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ln),N.pixelStorei(N.UNPACK_SKIP_ROWS,$n),N.pixelStorei(N.UNPACK_SKIP_IMAGES,kt),X===0&&G.generateMipmaps&&N.generateMipmap(Xe),ye.unbindTexture()},this.initRenderTarget=function(I){Ie.get(I).__webglFramebuffer===void 0&&O.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?O.setTextureCube(I,0):I.isData3DTexture?O.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?O.setTexture2DArray(I,0):O.setTexture2D(I,0),ye.unbindTexture()},this.resetState=function(){U=0,P=0,L=null,ye.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Eh?"display-p3":"srgb",t.unpackColorSpace=Ot.workingColorSpace===pl?"display-p3":"srgb"}}class bh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new bh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ch{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new Ch(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kp extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qa,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new D;class oi{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new oi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qp extends Un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let So;const xa=new D,Mo=new D,wo=new D,Eo=new ce,ya=new ce,cx=new at,qc=new D,Sa=new D,jc=new D,q0=new ce,Dd=new ce,j0=new ce;class ux extends It{constructor(e=new Qp){if(super(),this.isSprite=!0,this.type="Sprite",So===void 0){So=new yt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rh(t,5);So.setIndex([0,1,2,0,2,3]),So.setAttribute("position",new oi(n,3,0,!1)),So.setAttribute("uv",new oi(n,2,3,!1))}this.geometry=So,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mo.setFromMatrixScale(this.matrixWorld),cx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mo.multiplyScalar(-wo.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Zc(qc.set(-.5,-.5,0),wo,a,Mo,i,s),Zc(Sa.set(.5,-.5,0),wo,a,Mo,i,s),Zc(jc.set(.5,.5,0),wo,a,Mo,i,s),q0.set(0,0),Dd.set(1,0),j0.set(1,1);let c=e.ray.intersectTriangle(qc,Sa,jc,!1,xa);if(c===null&&(Zc(Sa.set(-.5,.5,0),wo,a,Mo,i,s),Dd.set(0,1),c=e.ray.intersectTriangle(qc,jc,Sa,!1,xa),c===null))return;const u=e.ray.origin.distanceTo(xa);u<e.near||u>e.far||t.push({distance:u,point:xa.clone(),uv:Zn.getInterpolation(xa,qc,Sa,jc,q0,Dd,j0,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zc(r,e,t,n,i,s){Eo.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ya.x=s*Eo.x-i*Eo.y,ya.y=i*Eo.x+s*Eo.y):ya.copy(Eo),r.copy(e),r.x+=ya.x,r.y+=ya.y,r.applyMatrix4(cx)}const Jc=new D,Z0=new D;class hx extends It{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Jc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Jc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Jc.setFromMatrixPosition(e.matrixWorld),Z0.setFromMatrixPosition(this.matrixWorld);const n=Jc.distanceTo(Z0)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const J0=new D,K0=new wt,Q0=new wt,IT=new D,$0=new at,Kc=new D,Ud=new _n,ev=new at,Nd=new Xo;class $p extends Yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dp,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kc),this.boundingBox.expandByPoint(Kc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kc),this.boundingSphere.expandByPoint(Kc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ud.copy(this.boundingSphere),Ud.applyMatrix4(i),e.ray.intersectsSphere(Ud)!==!1&&(ev.copy(i).invert(),Nd.copy(e.ray).applyMatrix4(ev),!(this.boundingBox!==null&&Nd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===D_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;K0.fromBufferAttribute(i.attributes.skinIndex,e),Q0.fromBufferAttribute(i.attributes.skinWeight,e),J0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Q0.getComponent(s);if(a!==0){const c=K0.getComponent(s);$0.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(IT.copy(J0).applyMatrix4($0),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class em extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $i extends $t{constructor(e=null,t=1,n=1,i,s,a,c,u,h=gn,f=gn,p,m){super(null,a,c,u,h,f,i,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tv=new at,LT=new at;class Ph{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const c=e[s]?e[s].matrixWorld:LT;tv.multiplyMatrices(c,t[s]),tv.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ph(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $i(t,e,e,Ln,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new em),this.bones.push(a),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class ko extends zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ao=new at,nv=new at,Qc=[],iv=new vn,DT=new at,Ma=new Yt,wa=new _n;class tm extends Yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ko(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,DT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ao),iv.copy(e.boundingBox).applyMatrix4(Ao),this.boundingBox.union(iv)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ao),wa.copy(e.boundingSphere).applyMatrix4(Ao),this.boundingSphere.union(wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[a+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ma.geometry=this.geometry,Ma.material=this.material,Ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(n),e.ray.intersectsSphere(wa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ao),nv.multiplyMatrices(n,Ao),Ma.matrixWorld=nv,Ma.raycast(e,Qc);for(let a=0,c=Qc.length;a<c;a++){const u=Qc[a];u.instanceId=s,u.object=this,t.push(u)}Qc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $i(new Float32Array(i*this.count),i,this.count,yh,Jn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const c=this.geometry.morphTargetsRelative?1:1-a,u=i*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function UT(r,e){return r.z-e.z}function NT(r,e){return e.z-r.z}class OT{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,s=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const a=i[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const Wr=new at,Od=new at,FT=new at,BT=new Ne(1,1,1),rv=new at,Fd=new vl,$c=new vn,vs=new _n,Ea=new D,sv=new D,zT=new D,Bd=new OT,In=new Yt,eu=[];function kT(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class fx extends Yt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new yt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new $i(t,e,e,Ln,Jn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new $i(t,e,e,dl,wr);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new $i(t,e,e,Ln,Jn);n.colorSpace=Ot.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:c,itemSize:u,normalized:h}=a,f=new c.constructor(n*u),p=new zt(f,u,h);t.setAttribute(s,p)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new zt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Wr),this.getBoundingBoxAt(s,$c).applyMatrix4(Wr),e.union($c)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Wr),this.getBoundingSphereAt(s,vs).applyMatrix4(Wr),e.union(vs)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(i=this._availableInstanceIds.pop(),this._drawInfo[i]=n):(i=this._drawInfo.length,this._drawInfo.push(n));const s=this._matricesTexture,a=s.image.data;FT.toArray(a,i*16),s.needsUpdate=!0;const c=this._colorsTexture;return c&&(BT.toArray(c.image.data,i*4),c.needsUpdate=!0),i}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,c=this._drawRanges,u=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),f=h!==null;if(f&&(n===-1?i.indexCount=h.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const p=this._geometryCount;return this._geometryCount++,a.push(i),c.push({start:f?i.indexStart:i.vertexStart,count:-1}),u.push({boxInitialized:!1,box:new vn,sphereInitialized:!1,sphere:new _n}),this.setGeometryAt(p,e),p}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),c=this._reservedRanges[e];if(i&&a.count>c.indexCount||t.attributes.position.count>c.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.vertexCount;for(const g in n.attributes){const x=t.getAttribute(g),w=n.getAttribute(g);kT(x,w,u);const y=x.itemSize;for(let _=x.count,E=h;_<E;_++){const M=u+_;for(let A=0;A<y;A++)w.setComponent(M,A,0)}w.needsUpdate=!0,w.addUpdateRange(u*y,h*y)}if(i){const g=c.indexStart;for(let x=0;x<a.count;x++)s.setX(g+x,u+a.getX(x));for(let x=a.count,w=c.indexCount;x<w;x++)s.setX(g+x,u);s.needsUpdate=!0,s.addUpdateRange(g,c.indexCount)}const f=this._bounds[e];t.boundingBox!==null?(f.box.copy(t.boundingBox),f.boxInitialized=!0):f.boxInitialized=!1,t.boundingSphere!==null?(f.sphere.copy(t.boundingSphere),f.sphereInitialized=!0):f.sphereInitialized=!1;const p=this._drawRanges[e],m=t.getAttribute("position");return p.count=i?a.count:m.count,this._visibilityChanged=!0,e}deleteInstance(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,s=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const a=s.index,c=s.attributes.position,u=this._drawRanges[e];for(let h=u.start,f=u.start+u.count;h<f;h++){let p=h;a&&(p=a.getX(p)),i.expandByPoint(Ea.fromBufferAttribute(c,p))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,s=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,$c),$c.getCenter(i.center);const a=s.index,c=s.attributes.position,u=this._drawRanges[e];let h=0;for(let f=u.start,p=u.start+u.count;f<p;f++){let m=f;a&&(m=a.getX(m)),Ea.fromBufferAttribute(c,m),h=Math.max(h,i.center.distanceToSquared(Ea))}i.radius=Math.sqrt(h),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||t<0||t>=this._geometryCount?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._drawRanges[e];return t.start=n.start,t.count=n.count,t}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,s=this.matrixWorld,a=this.geometry;In.material=this.material,In.geometry.index=a.index,In.geometry.attributes=a.attributes,In.geometry.boundingBox===null&&(In.geometry.boundingBox=new vn),In.geometry.boundingSphere===null&&(In.geometry.boundingSphere=new _n);for(let c=0,u=n.length;c<u;c++){if(!n[c].visible||!n[c].active)continue;const h=n[c].geometryIndex,f=i[h];In.geometry.setDrawRange(f.start,f.count),this.getMatrixAt(c,In.matrixWorld).premultiply(s),this.getBoundingBoxAt(h,In.geometry.boundingBox),this.getBoundingSphereAt(h,In.geometry.boundingSphere),In.raycast(e,eu);for(let p=0,m=eu.length;p<m;p++){const g=eu[p];g.object=this,g.batchId=c,t.push(g)}eu.length=0}In.material=null,In.geometry.index=null,In.geometry.attributes={},In.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),c=a===null?1:a.array.BYTES_PER_ELEMENT,u=this._drawInfo,h=this._multiDrawStarts,f=this._multiDrawCounts,p=this._drawRanges,m=this.perObjectFrustumCulled,g=this._indirectTexture,x=g.image.data;m&&(rv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Fd.setFromProjectionMatrix(rv,e.coordinateSystem));let w=0;if(this.sortObjects){Od.copy(this.matrixWorld).invert(),Ea.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Od),sv.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Od);for(let E=0,M=u.length;E<M;E++)if(u[E].visible&&u[E].active){const A=u[E].geometryIndex;this.getMatrixAt(E,Wr),this.getBoundingSphereAt(A,vs).applyMatrix4(Wr);let U=!1;if(m&&(U=!Fd.intersectsSphere(vs)),!U){const P=zT.subVectors(vs.center,Ea).dot(sv);Bd.push(p[A],P,E)}}const y=Bd.list,_=this.customSort;_===null?y.sort(s.transparent?NT:UT):_.call(this,y,n);for(let E=0,M=y.length;E<M;E++){const A=y[E];h[w]=A.start*c,f[w]=A.count,x[w]=A.index,w++}Bd.reset()}else for(let y=0,_=u.length;y<_;y++)if(u[y].visible&&u[y].active){const E=u[y].geometryIndex;let M=!1;if(m&&(this.getMatrixAt(y,Wr),this.getBoundingSphereAt(E,vs).applyMatrix4(Wr),M=!Fd.intersectsSphere(vs)),!M){const A=p[E];h[w]=A.start*c,f[w]=A.count,x[w]=y,w++}}g.needsUpdate=!0,this._multiDrawCount=w,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,a){this.onBeforeRender(e,null,i,s,a)}}class Vn extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uh=new D,hh=new D,ov=new at,Aa=new Xo,tu=new _n,zd=new D,av=new D;let Qr=class extends It{constructor(e=new yt,t=new Vn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)uh.fromBufferAttribute(t,i-1),hh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=uh.distanceTo(hh);e.setAttribute("lineDistance",new qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tu.copy(n.boundingSphere),tu.applyMatrix4(i),tu.radius+=s,e.ray.intersectsSphere(tu)===!1)return;ov.copy(i).invert(),Aa.copy(e.ray).applyMatrix4(ov);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let w=g,y=x-1;w<y;w+=h){const _=f.getX(w),E=f.getX(w+1),M=nu(this,e,Aa,u,_,E);M&&t.push(M)}if(this.isLineLoop){const w=f.getX(x-1),y=f.getX(g),_=nu(this,e,Aa,u,w,y);_&&t.push(_)}}else{const g=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let w=g,y=x-1;w<y;w+=h){const _=nu(this,e,Aa,u,w,w+1);_&&t.push(_)}if(this.isLineLoop){const w=nu(this,e,Aa,u,x-1,g);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function nu(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(uh.fromBufferAttribute(a,i),hh.fromBufferAttribute(a,s),t.distanceSqToSegment(uh,hh,zd,av)>n)return;zd.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(zd);if(!(u<e.near||u>e.far))return{distance:u,point:av.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const lv=new D,cv=new D;class ir extends Qr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)lv.fromBufferAttribute(t,i),cv.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+lv.distanceTo(cv);e.setAttribute("lineDistance",new qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dx extends Qr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nm extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const uv=new at,xp=new Xo,iu=new _n,ru=new D;class px extends It{constructor(e=new yt,t=new nm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),iu.copy(n.boundingSphere),iu.applyMatrix4(i),iu.radius+=s,e.ray.intersectsSphere(iu)===!1)return;uv.copy(i).invert(),xp.copy(e.ray).applyMatrix4(uv);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=m,w=g;x<w;x++){const y=h.getX(x);ru.fromBufferAttribute(p,y),hv(ru,y,u,i,e,t,this)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let x=m,w=g;x<w;x++)ru.fromBufferAttribute(p,x),hv(ru,x,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function hv(r,e,t,n,i,s,a){const c=xp.distanceSqToPoint(r);if(c<t){const u=new D;xp.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class HT extends $t{constructor(e,t,n,i,s,a,c,u,h){super(e,t,n,i,s,a,c,u,h),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:an,this.magFilter=s!==void 0?s:an,this.generateMipmaps=!1;const f=this;function p(){f.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class VT extends $t{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=gn,this.minFilter=gn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Ih extends $t{constructor(e,t,n,i,s,a,c,u,h,f,p,m){super(null,a,c,u,h,f,i,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class GT extends Ih{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=yi,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WT extends Ih{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Mr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Lh extends $t{constructor(e,t,n,i,s,a,c,u,h){super(e,t,n,i,s,a,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-a,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===a)return i/(s-1);const f=n[i],m=n[i+1]-f,g=(a-f)/m;return(i+g)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),c=this.getPoint(s),u=t||(a.isVector2?new ce:new D);return u.copy(c).sub(a).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],s=[],a=[],c=new D,u=new at;for(let g=0;g<=e;g++){const x=g/e;i[g]=this.getTangentAt(x,new D)}s[0]=new D,a[0]=new D;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),a[0].crossVectors(i[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),a[g]=a[g-1].clone(),c.crossVectors(i[g-1],i[g]),c.length()>Number.EPSILON){c.normalize();const x=Math.acos(Qt(i[g-1].dot(i[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(c,x))}a[g].crossVectors(i[g],s[g])}if(t===!0){let g=Math.acos(Qt(s[0].dot(s[e]),-1,1));g/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(g=-g);for(let x=1;x<=e;x++)s[x].applyMatrix4(u.makeRotationAxis(i[x],g*x)),a[x].crossVectors(i[x],s[x])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dh extends Oi{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new ce){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,g=h-this.aY;u=m*f-g*p+this.aX,h=m*p+g*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mx extends Dh{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function im(){let r=0,e=0,t=0,n=0;function i(s,a,c,u){r=s,e=c,t=-3*s+3*a-2*c-u,n=2*s-2*a+c+u}return{initCatmullRom:function(s,a,c,u,h){i(a,c,h*(c-s),h*(u-a))},initNonuniformCatmullRom:function(s,a,c,u,h,f,p){let m=(a-s)/h-(c-s)/(h+f)+(c-a)/f,g=(c-a)/f-(u-a)/(f+p)+(u-c)/p;m*=f,g*=f,i(a,c,m,g)},calc:function(s){const a=s*s,c=a*s;return r+e*s+t*a+n*c}}}const su=new D,kd=new im,Hd=new im,Vd=new im;class gx extends Oi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let c=Math.floor(a),u=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,f;this.closed||c>0?h=i[(c-1)%s]:(su.subVectors(i[0],i[1]).add(i[0]),h=su);const p=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?f=i[(c+2)%s]:(su.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=su),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let x=Math.pow(h.distanceToSquared(p),g),w=Math.pow(p.distanceToSquared(m),g),y=Math.pow(m.distanceToSquared(f),g);w<1e-4&&(w=1),x<1e-4&&(x=w),y<1e-4&&(y=w),kd.initNonuniformCatmullRom(h.x,p.x,m.x,f.x,x,w,y),Hd.initNonuniformCatmullRom(h.y,p.y,m.y,f.y,x,w,y),Vd.initNonuniformCatmullRom(h.z,p.z,m.z,f.z,x,w,y)}else this.curveType==="catmullrom"&&(kd.initCatmullRom(h.x,p.x,m.x,f.x,this.tension),Hd.initCatmullRom(h.y,p.y,m.y,f.y,this.tension),Vd.initCatmullRom(h.z,p.z,m.z,f.z,this.tension));return n.set(kd.calc(u),Hd.calc(u),Vd.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function fv(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+a)*u+(-3*t+3*n-2*s-a)*c+s*r+t}function XT(r,e){const t=1-r;return t*t*e}function YT(r,e){return 2*(1-r)*r*e}function qT(r,e){return r*r*e}function Ha(r,e,t,n){return XT(r,e)+YT(r,t)+qT(r,n)}function jT(r,e){const t=1-r;return t*t*t*e}function ZT(r,e){const t=1-r;return 3*t*t*r*e}function JT(r,e){return 3*(1-r)*r*r*e}function KT(r,e){return r*r*r*e}function Va(r,e,t,n,i){return jT(r,e)+ZT(r,t)+JT(r,n)+KT(r,i)}class rm extends Oi{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){const n=t,i=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(Va(e,i.x,s.x,a.x,c.x),Va(e,i.y,s.y,a.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vx extends Oi{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,a=this.v2,c=this.v3;return n.set(Va(e,i.x,s.x,a.x,c.x),Va(e,i.y,s.y,a.y,c.y),Va(e,i.z,s.z,a.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sm extends Oi{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _x extends Oi{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class om extends Oi{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ha(e,i.x,s.x,a.x),Ha(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class am extends Oi{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ha(e,i.x,s.x,a.x),Ha(e,i.y,s.y,a.y),Ha(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lm extends Oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),c=s-a,u=i[a===0?a:a-1],h=i[a],f=i[a>i.length-2?i.length-1:a+1],p=i[a>i.length-3?i.length-1:a+2];return n.set(fv(c,u.x,h.x,f.x,p.x),fv(c,u.y,h.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ce().fromArray(i))}return this}}var fh=Object.freeze({__proto__:null,ArcCurve:mx,CatmullRomCurve3:gx,CubicBezierCurve:rm,CubicBezierCurve3:vx,EllipseCurve:Dh,LineCurve:sm,LineCurve3:_x,QuadraticBezierCurve:om,QuadraticBezierCurve3:am,SplineCurve:lm});class xx extends Oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-a/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],c=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,u=a.getPoints(c);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new fh[i.type]().fromJSON(i))}return this}}class nl extends xx{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sm(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new om(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const c=new rm(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(s,a));return this.curves.push(c),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new lm(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,c,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,s,a,c,u),this}absellipse(e,t,n,i,s,a,c,u){const h=new Dh(e,t,n,i,s,a,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _l extends yt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Qt(i,0,Math.PI*2);const s=[],a=[],c=[],u=[],h=[],f=1/t,p=new D,m=new ce,g=new D,x=new D,w=new D;let y=0,_=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:y=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-y,g.z=_*0,w.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case e.length-1:u.push(w.x,w.y,w.z);break;default:y=e[E+1].x-e[E].x,_=e[E+1].y-e[E].y,g.x=_*1,g.y=-y,g.z=_*0,x.copy(g),g.x+=w.x,g.y+=w.y,g.z+=w.z,g.normalize(),u.push(g.x,g.y,g.z),w.copy(x)}for(let E=0;E<=t;E++){const M=n+E*f*i,A=Math.sin(M),U=Math.cos(M);for(let P=0;P<=e.length-1;P++){p.x=e[P].x*A,p.y=e[P].y,p.z=e[P].x*U,a.push(p.x,p.y,p.z),m.x=E/t,m.y=P/(e.length-1),c.push(m.x,m.y);const L=u[3*P+0]*A,B=u[3*P+1],z=u[3*P+0]*U;h.push(L,B,z)}}for(let E=0;E<t;E++)for(let M=0;M<e.length-1;M++){const A=M+E*e.length,U=A,P=A+e.length,L=A+e.length+1,B=A+1;s.push(U,P,B),s.push(L,B,P)}this.setIndex(s),this.setAttribute("position",new qe(a,3)),this.setAttribute("uv",new qe(c,2)),this.setAttribute("normal",new qe(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.points,e.segments,e.phiStart,e.phiLength)}}class Uh extends _l{constructor(e=1,t=1,n=4,i=8){const s=new nl;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Uh(e.radius,e.length,e.capSegments,e.radialSegments)}}class Nh extends yt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],c=[],u=[],h=new D,f=new ce;a.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),a.push(h.x,h.y,h.z),c.push(0,0,1),f.x=(a[m]/e+1)/2,f.y=(a[m+1]/e+1)/2,u.push(f.x,f.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ii extends yt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],m=[],g=[];let x=0;const w=[],y=n/2;let _=0;E(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(f),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(m,3)),this.setAttribute("uv",new qe(g,2));function E(){const A=new D,U=new D;let P=0;const L=(t-e)/n;for(let B=0;B<=s;B++){const z=[],b=B/s,C=b*(t-e)+e;for(let Y=0;Y<=i;Y++){const j=Y/i,Q=j*u+c,re=Math.sin(Q),Z=Math.cos(Q);U.x=C*re,U.y=-b*n+y,U.z=C*Z,p.push(U.x,U.y,U.z),A.set(re,L,Z).normalize(),m.push(A.x,A.y,A.z),g.push(j,1-b),z.push(x++)}w.push(z)}for(let B=0;B<i;B++)for(let z=0;z<s;z++){const b=w[z][B],C=w[z+1][B],Y=w[z+1][B+1],j=w[z][B+1];e>0&&(f.push(b,C,j),P+=3),t>0&&(f.push(C,Y,j),P+=3)}h.addGroup(_,P,0),_+=P}function M(A){const U=x,P=new ce,L=new D;let B=0;const z=A===!0?e:t,b=A===!0?1:-1;for(let Y=1;Y<=i;Y++)p.push(0,y*b,0),m.push(0,b,0),g.push(.5,.5),x++;const C=x;for(let Y=0;Y<=i;Y++){const Q=Y/i*u+c,re=Math.cos(Q),Z=Math.sin(Q);L.x=z*Z,L.y=y*b,L.z=z*re,p.push(L.x,L.y,L.z),m.push(0,b,0),P.x=re*.5+.5,P.y=Z*.5*b+.5,g.push(P.x,P.y),x++}for(let Y=0;Y<i;Y++){const j=U+Y,Q=C+Y;A===!0?f.push(Q,Q+1,j):f.push(Q+1,Q,j),B+=3}h.addGroup(_,B,A===!0?1:2),_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xl extends Ii{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,c=Math.PI*2){super(0,e,t,n,i,s,a,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:c}}static fromJSON(e){return new xl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class es extends yt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];c(i),h(n),f(),this.setAttribute("position",new qe(s,3)),this.setAttribute("normal",new qe(s.slice(),3)),this.setAttribute("uv",new qe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(E){const M=new D,A=new D,U=new D;for(let P=0;P<t.length;P+=3)g(t[P+0],M),g(t[P+1],A),g(t[P+2],U),u(M,A,U,E)}function u(E,M,A,U){const P=U+1,L=[];for(let B=0;B<=P;B++){L[B]=[];const z=E.clone().lerp(A,B/P),b=M.clone().lerp(A,B/P),C=P-B;for(let Y=0;Y<=C;Y++)Y===0&&B===P?L[B][Y]=z:L[B][Y]=z.clone().lerp(b,Y/C)}for(let B=0;B<P;B++)for(let z=0;z<2*(P-B)-1;z++){const b=Math.floor(z/2);z%2===0?(m(L[B][b+1]),m(L[B+1][b]),m(L[B][b])):(m(L[B][b+1]),m(L[B+1][b+1]),m(L[B+1][b]))}}function h(E){const M=new D;for(let A=0;A<s.length;A+=3)M.x=s[A+0],M.y=s[A+1],M.z=s[A+2],M.normalize().multiplyScalar(E),s[A+0]=M.x,s[A+1]=M.y,s[A+2]=M.z}function f(){const E=new D;for(let M=0;M<s.length;M+=3){E.x=s[M+0],E.y=s[M+1],E.z=s[M+2];const A=y(E)/2/Math.PI+.5,U=_(E)/Math.PI+.5;a.push(A,1-U)}x(),p()}function p(){for(let E=0;E<a.length;E+=6){const M=a[E+0],A=a[E+2],U=a[E+4],P=Math.max(M,A,U),L=Math.min(M,A,U);P>.9&&L<.1&&(M<.2&&(a[E+0]+=1),A<.2&&(a[E+2]+=1),U<.2&&(a[E+4]+=1))}}function m(E){s.push(E.x,E.y,E.z)}function g(E,M){const A=E*3;M.x=e[A+0],M.y=e[A+1],M.z=e[A+2]}function x(){const E=new D,M=new D,A=new D,U=new D,P=new ce,L=new ce,B=new ce;for(let z=0,b=0;z<s.length;z+=9,b+=6){E.set(s[z+0],s[z+1],s[z+2]),M.set(s[z+3],s[z+4],s[z+5]),A.set(s[z+6],s[z+7],s[z+8]),P.set(a[b+0],a[b+1]),L.set(a[b+2],a[b+3]),B.set(a[b+4],a[b+5]),U.copy(E).add(M).add(A).divideScalar(3);const C=y(U);w(P,b+0,E,C),w(L,b+2,M,C),w(B,b+4,A,C)}}function w(E,M,A,U){U<0&&E.x===1&&(a[M]=E.x-1),A.x===0&&A.z===0&&(a[M]=U/2/Math.PI+.5)}function y(E){return Math.atan2(E.z,-E.x)}function _(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.vertices,e.indices,e.radius,e.details)}}class Oh extends es{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oh(e.radius,e.detail)}}const ou=new D,au=new D,Gd=new D,lu=new Zn;class yx extends yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Ls*t),a=e.getIndex(),c=e.getAttribute("position"),u=a?a.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),m={},g=[];for(let x=0;x<u;x+=3){a?(h[0]=a.getX(x),h[1]=a.getX(x+1),h[2]=a.getX(x+2)):(h[0]=x,h[1]=x+1,h[2]=x+2);const{a:w,b:y,c:_}=lu;if(w.fromBufferAttribute(c,h[0]),y.fromBufferAttribute(c,h[1]),_.fromBufferAttribute(c,h[2]),lu.getNormal(Gd),p[0]=`${Math.round(w.x*i)},${Math.round(w.y*i)},${Math.round(w.z*i)}`,p[1]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,p[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let E=0;E<3;E++){const M=(E+1)%3,A=p[E],U=p[M],P=lu[f[E]],L=lu[f[M]],B=`${A}_${U}`,z=`${U}_${A}`;z in m&&m[z]?(Gd.dot(m[z].normal)<=s&&(g.push(P.x,P.y,P.z),g.push(L.x,L.y,L.z)),m[z]=null):B in m||(m[B]={index0:h[E],index1:h[M],normal:Gd.clone()})}}for(const x in m)if(m[x]){const{index0:w,index1:y}=m[x];ou.fromBufferAttribute(c,w),au.fromBufferAttribute(c,y),g.push(ou.x,ou.y,ou.z),g.push(au.x,au.y,au.z)}this.setAttribute("position",new qe(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class er extends nl{constructor(e){super(e),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new nl().fromJSON(i))}return this}}const QT={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Sx(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let c,u,h,f,p,m,g;if(n&&(s=ib(r,e,s,t)),r.length>80*t){c=h=r[0],u=f=r[1];for(let x=t;x<i;x+=t)p=r[x],m=r[x+1],p<c&&(c=p),m<u&&(u=m),p>h&&(h=p),m>f&&(f=m);g=Math.max(h-c,f-u),g=g!==0?32767/g:0}return il(s,a,t,c,u,g,0),a}};function Sx(r,e,t,n,i){let s,a;if(i===pb(r,e,t,n)>0)for(s=e;s<t;s+=n)a=dv(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=dv(s,r[s],r[s+1],a);return a&&Fh(a,a.next)&&(sl(a),a=a.next),a}function Bs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Fh(t,t.next)||Zt(t.prev,t,t.next)===0)){if(sl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function il(r,e,t,n,i,s,a){if(!r)return;!a&&s&&lb(r,n,i,s);let c=r,u,h;for(;r.prev!==r.next;){if(u=r.prev,h=r.next,s?eb(r,n,i,s):$T(r)){e.push(u.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),sl(r),r=h.next,c=h.next;continue}if(r=h,r===c){a?a===1?(r=tb(Bs(r),e,t),il(r,e,t,n,i,s,2)):a===2&&nb(r,e,t,n,i,s):il(Bs(r),e,t,n,i,s,1);break}}}function $T(r){const e=r.prev,t=r,n=r.next;if(Zt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,c=e.y,u=t.y,h=n.y,f=i<s?i<a?i:a:s<a?s:a,p=c<u?c<h?c:h:u<h?u:h,m=i>s?i>a?i:a:s>a?s:a,g=c>u?c>h?c:h:u>h?u:h;let x=n.next;for(;x!==e;){if(x.x>=f&&x.x<=m&&x.y>=p&&x.y<=g&&Lo(i,c,s,u,a,h,x.x,x.y)&&Zt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function eb(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Zt(i,s,a)>=0)return!1;const c=i.x,u=s.x,h=a.x,f=i.y,p=s.y,m=a.y,g=c<u?c<h?c:h:u<h?u:h,x=f<p?f<m?f:m:p<m?p:m,w=c>u?c>h?c:h:u>h?u:h,y=f>p?f>m?f:m:p>m?p:m,_=yp(g,x,e,t,n),E=yp(w,y,e,t,n);let M=r.prevZ,A=r.nextZ;for(;M&&M.z>=_&&A&&A.z<=E;){if(M.x>=g&&M.x<=w&&M.y>=x&&M.y<=y&&M!==i&&M!==a&&Lo(c,f,u,p,h,m,M.x,M.y)&&Zt(M.prev,M,M.next)>=0||(M=M.prevZ,A.x>=g&&A.x<=w&&A.y>=x&&A.y<=y&&A!==i&&A!==a&&Lo(c,f,u,p,h,m,A.x,A.y)&&Zt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;M&&M.z>=_;){if(M.x>=g&&M.x<=w&&M.y>=x&&M.y<=y&&M!==i&&M!==a&&Lo(c,f,u,p,h,m,M.x,M.y)&&Zt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;A&&A.z<=E;){if(A.x>=g&&A.x<=w&&A.y>=x&&A.y<=y&&A!==i&&A!==a&&Lo(c,f,u,p,h,m,A.x,A.y)&&Zt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function tb(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Fh(i,s)&&Mx(i,n,n.next,s)&&rl(i,s)&&rl(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),sl(n),sl(n.next),n=r=s),n=n.next}while(n!==r);return Bs(n)}function nb(r,e,t,n,i,s){let a=r;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&hb(a,c)){let u=wx(a,c);a=Bs(a,a.next),u=Bs(u,u.next),il(a,e,t,n,i,s,0),il(u,e,t,n,i,s,0);return}c=c.next}a=a.next}while(a!==r)}function ib(r,e,t,n){const i=[];let s,a,c,u,h;for(s=0,a=e.length;s<a;s++)c=e[s]*n,u=s<a-1?e[s+1]*n:r.length,h=Sx(r,c,u,n,!1),h===h.next&&(h.steiner=!0),i.push(ub(h));for(i.sort(rb),s=0;s<i.length;s++)t=sb(i[s],t);return t}function rb(r,e){return r.x-e.x}function sb(r,e){const t=ob(r,e);if(!t)return e;const n=wx(t,r);return Bs(n,n.next),Bs(t,t.next)}function ob(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const m=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,i=t.x<t.next.x?t:t.next,m===s))return i}t=t.next}while(t!==e);if(!i)return null;const c=i,u=i.x,h=i.y;let f=1/0,p;t=i;do s>=t.x&&t.x>=u&&s!==t.x&&Lo(a<h?s:n,a,u,h,a<h?n:s,a,t.x,t.y)&&(p=Math.abs(a-t.y)/(s-t.x),rl(t,r)&&(p<f||p===f&&(t.x>i.x||t.x===i.x&&ab(i,t)))&&(i=t,f=p)),t=t.next;while(t!==c);return i}function ab(r,e){return Zt(r.prev,r,e.prev)<0&&Zt(e.next,r,r.next)<0}function lb(r,e,t,n){let i=r;do i.z===0&&(i.z=yp(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,cb(i)}function cb(r){let e,t,n,i,s,a,c,u,h=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,c=0,e=0;e<h&&(c++,n=n.nextZ,!!n);e++);for(u=h;c>0||u>0&&n;)c!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,c--):(i=n,n=n.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,h*=2}while(a>1);return r}function yp(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function ub(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Lo(r,e,t,n,i,s,a,c){return(i-a)*(e-c)>=(r-a)*(s-c)&&(r-a)*(n-c)>=(t-a)*(e-c)&&(t-a)*(s-c)>=(i-a)*(n-c)}function hb(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!fb(r,e)&&(rl(r,e)&&rl(e,r)&&db(r,e)&&(Zt(r.prev,r,e.prev)||Zt(r,e.prev,e))||Fh(r,e)&&Zt(r.prev,r,r.next)>0&&Zt(e.prev,e,e.next)>0)}function Zt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Fh(r,e){return r.x===e.x&&r.y===e.y}function Mx(r,e,t,n){const i=uu(Zt(r,e,t)),s=uu(Zt(r,e,n)),a=uu(Zt(t,n,r)),c=uu(Zt(t,n,e));return!!(i!==s&&a!==c||i===0&&cu(r,t,e)||s===0&&cu(r,n,e)||a===0&&cu(t,r,n)||c===0&&cu(t,e,n))}function cu(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function uu(r){return r>0?1:r<0?-1:0}function fb(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Mx(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function rl(r,e){return Zt(r.prev,r,r.next)<0?Zt(r,e,r.next)>=0&&Zt(r,r.prev,e)>=0:Zt(r,e,r.prev)<0||Zt(r,r.next,e)<0}function db(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function wx(r,e){const t=new Sp(r.i,r.x,r.y),n=new Sp(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function dv(r,e,t,n){const i=new Sp(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function sl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Sp(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pb(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class tr{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return tr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];pv(e),mv(n,e);let a=e.length;t.forEach(pv);for(let u=0;u<t.length;u++)i.push(a),a+=t[u].length,mv(n,t[u]);const c=QT.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function pv(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function mv(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class qo extends yt{constructor(e=new er([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];a(h)}this.setAttribute("position",new qe(i,3)),this.setAttribute("uv",new qe(s,2)),this.computeVertexNormals();function a(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:g-.1,w=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:mb;let M,A=!1,U,P,L,B;_&&(M=_.getSpacedPoints(f),A=!0,m=!1,U=_.computeFrenetFrames(f,!1),P=new D,L=new D,B=new D),m||(y=0,g=0,x=0,w=0);const z=c.extractPoints(h);let b=z.shape;const C=z.holes;if(!tr.isClockWise(b)){b=b.reverse();for(let le=0,N=C.length;le<N;le++){const Me=C[le];tr.isClockWise(Me)&&(C[le]=Me.reverse())}}const j=tr.triangulateShape(b,C),Q=b;for(let le=0,N=C.length;le<N;le++){const Me=C[le];b=b.concat(Me)}function re(le,N,Me){return N||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(N,Me)}const Z=b.length,he=j.length;function ee(le,N,Me){let xe,pe,ye;const Ze=le.x-N.x,Ie=le.y-N.y,O=Me.x-le.x,R=Me.y-le.y,q=Ze*Ze+Ie*Ie,oe=Ze*R-Ie*O;if(Math.abs(oe)>Number.EPSILON){const ue=Math.sqrt(q),ae=Math.sqrt(O*O+R*R),Ye=N.x-Ie/ue,we=N.y+Ze/ue,ze=Me.x-R/ae,Et=Me.y+O/ae,ge=((ze-Ye)*R-(Et-we)*O)/(Ze*R-Ie*O);xe=Ye+Ze*ge-le.x,pe=we+Ie*ge-le.y;const ke=xe*xe+pe*pe;if(ke<=2)return new ce(xe,pe);ye=Math.sqrt(ke/2)}else{let ue=!1;Ze>Number.EPSILON?O>Number.EPSILON&&(ue=!0):Ze<-Number.EPSILON?O<-Number.EPSILON&&(ue=!0):Math.sign(Ie)===Math.sign(R)&&(ue=!0),ue?(xe=-Ie,pe=Ze,ye=Math.sqrt(q)):(xe=Ze,pe=Ie,ye=Math.sqrt(q/2))}return new ce(xe/ye,pe/ye)}const Ae=[];for(let le=0,N=Q.length,Me=N-1,xe=le+1;le<N;le++,Me++,xe++)Me===N&&(Me=0),xe===N&&(xe=0),Ae[le]=ee(Q[le],Q[Me],Q[xe]);const me=[];let ve,st=Ae.concat();for(let le=0,N=C.length;le<N;le++){const Me=C[le];ve=[];for(let xe=0,pe=Me.length,ye=pe-1,Ze=xe+1;xe<pe;xe++,ye++,Ze++)ye===pe&&(ye=0),Ze===pe&&(Ze=0),ve[xe]=ee(Me[xe],Me[ye],Me[Ze]);me.push(ve),st=st.concat(ve)}for(let le=0;le<y;le++){const N=le/y,Me=g*Math.cos(N*Math.PI/2),xe=x*Math.sin(N*Math.PI/2)+w;for(let pe=0,ye=Q.length;pe<ye;pe++){const Ze=re(Q[pe],Ae[pe],xe);Te(Ze.x,Ze.y,-Me)}for(let pe=0,ye=C.length;pe<ye;pe++){const Ze=C[pe];ve=me[pe];for(let Ie=0,O=Ze.length;Ie<O;Ie++){const R=re(Ze[Ie],ve[Ie],xe);Te(R.x,R.y,-Me)}}}const Je=x+w;for(let le=0;le<Z;le++){const N=m?re(b[le],st[le],Je):b[le];A?(L.copy(U.normals[0]).multiplyScalar(N.x),P.copy(U.binormals[0]).multiplyScalar(N.y),B.copy(M[0]).add(L).add(P),Te(B.x,B.y,B.z)):Te(N.x,N.y,0)}for(let le=1;le<=f;le++)for(let N=0;N<Z;N++){const Me=m?re(b[N],st[N],Je):b[N];A?(L.copy(U.normals[le]).multiplyScalar(Me.x),P.copy(U.binormals[le]).multiplyScalar(Me.y),B.copy(M[le]).add(L).add(P),Te(B.x,B.y,B.z)):Te(Me.x,Me.y,p/f*le)}for(let le=y-1;le>=0;le--){const N=le/y,Me=g*Math.cos(N*Math.PI/2),xe=x*Math.sin(N*Math.PI/2)+w;for(let pe=0,ye=Q.length;pe<ye;pe++){const Ze=re(Q[pe],Ae[pe],xe);Te(Ze.x,Ze.y,p+Me)}for(let pe=0,ye=C.length;pe<ye;pe++){const Ze=C[pe];ve=me[pe];for(let Ie=0,O=Ze.length;Ie<O;Ie++){const R=re(Ze[Ie],ve[Ie],xe);A?Te(R.x,R.y+M[f-1].y,M[f-1].x+Me):Te(R.x,R.y,p+Me)}}}se(),de();function se(){const le=i.length/3;if(m){let N=0,Me=Z*N;for(let xe=0;xe<he;xe++){const pe=j[xe];tt(pe[2]+Me,pe[1]+Me,pe[0]+Me)}N=f+y*2,Me=Z*N;for(let xe=0;xe<he;xe++){const pe=j[xe];tt(pe[0]+Me,pe[1]+Me,pe[2]+Me)}}else{for(let N=0;N<he;N++){const Me=j[N];tt(Me[2],Me[1],Me[0])}for(let N=0;N<he;N++){const Me=j[N];tt(Me[0]+Z*f,Me[1]+Z*f,Me[2]+Z*f)}}n.addGroup(le,i.length/3-le,0)}function de(){const le=i.length/3;let N=0;Oe(Q,N),N+=Q.length;for(let Me=0,xe=C.length;Me<xe;Me++){const pe=C[Me];Oe(pe,N),N+=pe.length}n.addGroup(le,i.length/3-le,1)}function Oe(le,N){let Me=le.length;for(;--Me>=0;){const xe=Me;let pe=Me-1;pe<0&&(pe=le.length-1);for(let ye=0,Ze=f+y*2;ye<Ze;ye++){const Ie=Z*ye,O=Z*(ye+1),R=N+xe+Ie,q=N+pe+Ie,oe=N+pe+O,ue=N+xe+O;nt(R,q,oe,ue)}}}function Te(le,N,Me){u.push(le),u.push(N),u.push(Me)}function tt(le,N,Me){je(le),je(N),je(Me);const xe=i.length/3,pe=E.generateTopUV(n,i,xe-3,xe-2,xe-1);Re(pe[0]),Re(pe[1]),Re(pe[2])}function nt(le,N,Me,xe){je(le),je(N),je(xe),je(N),je(Me),je(xe);const pe=i.length/3,ye=E.generateSideWallUV(n,i,pe-6,pe-3,pe-2,pe-1);Re(ye[0]),Re(ye[1]),Re(ye[3]),Re(ye[1]),Re(ye[2]),Re(ye[3])}function je(le){i.push(u[le*3+0]),i.push(u[le*3+1]),i.push(u[le*3+2])}function Re(le){s.push(le.x),s.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gb(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new fh[i.type]().fromJSON(i)),new qo(n,e.options)}}const mb={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],f=e[i*3+1];return[new ce(s,a),new ce(c,u),new ce(h,f)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],p=e[n*3+2],m=e[i*3],g=e[i*3+1],x=e[i*3+2],w=e[s*3],y=e[s*3+1],_=e[s*3+2];return Math.abs(c-f)<Math.abs(a-h)?[new ce(a,1-u),new ce(h,1-p),new ce(m,1-x),new ce(w,1-_)]:[new ce(c,1-u),new ce(f,1-p),new ce(g,1-x),new ce(y,1-_)]}};function gb(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Bh extends es{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bh(e.radius,e.detail)}}class yl extends es{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yl(e.radius,e.detail)}}class zh extends yt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],f=[];let p=e;const m=(t-e)/i,g=new D,x=new ce;for(let w=0;w<=i;w++){for(let y=0;y<=n;y++){const _=s+y/n*a;g.x=p*Math.cos(_),g.y=p*Math.sin(_),u.push(g.x,g.y,g.z),h.push(0,0,1),x.x=(g.x/t+1)/2,x.y=(g.y/t+1)/2,f.push(x.x,x.y)}p+=m}for(let w=0;w<i;w++){const y=w*(n+1);for(let _=0;_<n;_++){const E=_+y,M=E,A=E+n+1,U=E+n+2,P=E+1;c.push(M,A,P),c.push(A,U,P)}}this.setIndex(c),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class kh extends yt{constructor(e=new er([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(c,u,f),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new qe(i,3)),this.setAttribute("normal",new qe(s,3)),this.setAttribute("uv",new qe(a,2));function h(f){const p=i.length/3,m=f.extractPoints(t);let g=m.shape;const x=m.holes;tr.isClockWise(g)===!1&&(g=g.reverse());for(let y=0,_=x.length;y<_;y++){const E=x[y];tr.isClockWise(E)===!0&&(x[y]=E.reverse())}const w=tr.triangulateShape(g,x);for(let y=0,_=x.length;y<_;y++){const E=x[y];g=g.concat(E)}for(let y=0,_=g.length;y<_;y++){const E=g[y];i.push(E.x,E.y,0),s.push(0,0,1),a.push(E.x,E.y)}for(let y=0,_=w.length;y<_;y++){const E=w[y],M=E[0]+p,A=E[1]+p,U=E[2]+p;n.push(M,A,U),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return vb(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new kh(n,e.curveSegments)}}function vb(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class jo extends yt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+c,Math.PI);let h=0;const f=[],p=new D,m=new D,g=[],x=[],w=[],y=[];for(let _=0;_<=n;_++){const E=[],M=_/n;let A=0;_===0&&a===0?A=.5/t:_===n&&u===Math.PI&&(A=-.5/t);for(let U=0;U<=t;U++){const P=U/t;p.x=-e*Math.cos(i+P*s)*Math.sin(a+M*c),p.y=e*Math.cos(a+M*c),p.z=e*Math.sin(i+P*s)*Math.sin(a+M*c),x.push(p.x,p.y,p.z),m.copy(p).normalize(),w.push(m.x,m.y,m.z),y.push(P+A,1-M),E.push(h++)}f.push(E)}for(let _=0;_<n;_++)for(let E=0;E<t;E++){const M=f[_][E+1],A=f[_][E],U=f[_+1][E],P=f[_+1][E+1];(_!==0||a>0)&&g.push(M,A,P),(_!==n-1||u<Math.PI)&&g.push(A,U,P)}this.setIndex(g),this.setAttribute("position",new qe(x,3)),this.setAttribute("normal",new qe(w,3)),this.setAttribute("uv",new qe(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hh extends es{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hh(e.radius,e.detail)}}class Vh extends yt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],u=[],h=[],f=new D,p=new D,m=new D;for(let g=0;g<=n;g++)for(let x=0;x<=i;x++){const w=x/i*s,y=g/n*Math.PI*2;p.x=(e+t*Math.cos(y))*Math.cos(w),p.y=(e+t*Math.cos(y))*Math.sin(w),p.z=t*Math.sin(y),c.push(p.x,p.y,p.z),f.x=e*Math.cos(w),f.y=e*Math.sin(w),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),h.push(x/i),h.push(g/n)}for(let g=1;g<=n;g++)for(let x=1;x<=i;x++){const w=(i+1)*g+x-1,y=(i+1)*(g-1)+x-1,_=(i+1)*(g-1)+x,E=(i+1)*g+x;a.push(w,y,E),a.push(y,_,E)}this.setIndex(a),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Gh extends yt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],f=[],p=new D,m=new D,g=new D,x=new D,w=new D,y=new D,_=new D;for(let M=0;M<=n;++M){const A=M/n*s*Math.PI*2;E(A,s,a,e,g),E(A+.01,s,a,e,x),y.subVectors(x,g),_.addVectors(x,g),w.crossVectors(y,_),_.crossVectors(w,y),w.normalize(),_.normalize();for(let U=0;U<=i;++U){const P=U/i*Math.PI*2,L=-t*Math.cos(P),B=t*Math.sin(P);p.x=g.x+(L*_.x+B*w.x),p.y=g.y+(L*_.y+B*w.y),p.z=g.z+(L*_.z+B*w.z),u.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),h.push(m.x,m.y,m.z),f.push(M/n),f.push(U/i)}}for(let M=1;M<=n;M++)for(let A=1;A<=i;A++){const U=(i+1)*(M-1)+(A-1),P=(i+1)*M+(A-1),L=(i+1)*M+A,B=(i+1)*(M-1)+A;c.push(U,P,B),c.push(P,L,B)}this.setIndex(c),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(f,2));function E(M,A,U,P,L){const B=Math.cos(M),z=Math.sin(M),b=U/A*M,C=Math.cos(b);L.x=P*(2+C)*.5*B,L.y=P*(2+C)*z*.5,L.z=P*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Wh extends yt{constructor(e=new am(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const c=new D,u=new D,h=new ce;let f=new D;const p=[],m=[],g=[],x=[];w(),this.setIndex(x),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(m,3)),this.setAttribute("uv",new qe(g,2));function w(){for(let M=0;M<t;M++)y(M);y(s===!1?t:0),E(),_()}function y(M){f=e.getPointAt(M/t,f);const A=a.normals[M],U=a.binormals[M];for(let P=0;P<=i;P++){const L=P/i*Math.PI*2,B=Math.sin(L),z=-Math.cos(L);u.x=z*A.x+B*U.x,u.y=z*A.y+B*U.y,u.z=z*A.z+B*U.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=f.x+n*u.x,c.y=f.y+n*u.y,c.z=f.z+n*u.z,p.push(c.x,c.y,c.z)}}function _(){for(let M=1;M<=t;M++)for(let A=1;A<=i;A++){const U=(i+1)*(M-1)+(A-1),P=(i+1)*M+(A-1),L=(i+1)*M+A,B=(i+1)*(M-1)+A;x.push(U,P,B),x.push(P,L,B)}}function E(){for(let M=0;M<=t;M++)for(let A=0;A<=i;A++)h.x=M/t,h.y=A/i,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Wh(new fh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class cm extends yt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,s=new D;if(e.index!==null){const a=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,f=u.length;h<f;++h){const p=u[h],m=p.start,g=p.count;for(let x=m,w=m+g;x<w;x+=3)for(let y=0;y<3;y++){const _=c.getX(x+y),E=c.getX(x+(y+1)%3);i.fromBufferAttribute(a,_),s.fromBufferAttribute(a,E),gv(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let c=0,u=a.count/3;c<u;c++)for(let h=0;h<3;h++){const f=3*c+h,p=3*c+(h+1)%3;i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,p),gv(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new qe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function gv(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var vv=Object.freeze({__proto__:null,BoxGeometry:Di,CapsuleGeometry:Uh,CircleGeometry:Nh,ConeGeometry:xl,CylinderGeometry:Ii,DodecahedronGeometry:Oh,EdgesGeometry:yx,ExtrudeGeometry:qo,IcosahedronGeometry:Bh,LatheGeometry:_l,OctahedronGeometry:yl,PlaneGeometry:ks,PolyhedronGeometry:es,RingGeometry:zh,ShapeGeometry:kh,SphereGeometry:jo,TetrahedronGeometry:Hh,TorusGeometry:Vh,TorusKnotGeometry:Gh,TubeGeometry:Wh,WireframeGeometry:cm});class Ex extends Un{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ne(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ax extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Er extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tx extends Er{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bx extends Un{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cx extends Un{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ne(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Rx extends Un{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Px extends Un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ix extends Un{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ne(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lx extends Vn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Rs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Dx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ux(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Mp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[a++]=r[c+u]}return i}function um(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}function _b(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],f=h.getValueSize(),p=[],m=[];for(let g=0;g<h.times.length;++g){const x=h.times[g]*i;if(!(x<t||x>=n)){p.push(h.times[g]);for(let w=0;w<f;++w)m.push(h.values[g*f+w])}}p.length!==0&&(h.times=Rs(p,h.times.constructor),h.values=Rs(m,h.values.constructor),a.push(h))}s.tracks=a;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function xb(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const c=t.tracks[a],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(_){return _.name===c.name&&_.ValueTypeName===u});if(h===void 0)continue;let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const x=c.times.length-1;let w;if(s<=c.times[0]){const _=f,E=p-f;w=c.values.slice(_,E)}else if(s>=c.times[x]){const _=x*p+f,E=_+p-f;w=c.values.slice(_,E)}else{const _=c.createInterpolant(),E=f,M=p-f;_.evaluate(s),w=_.resultBuffer.slice(E,M)}u==="quaternion"&&new Kn().fromArray(w).normalize().conjugate().toArray(w);const y=h.times.length;for(let _=0;_<y;++_){const E=_*g+m;if(u==="quaternion")Kn.multiplyQuaternionsFlat(h.values,E,w,0,h.values,E);else{const M=g-m*2;for(let A=0;A<M;++A)h.values[E+A]-=w[A]}}}return r.blendMode=kp,r}const yb={convertArray:Rs,isTypedArray:Dx,getKeyframeOrder:Ux,sortedArray:Mp,flattenJSON:um,subclip:_b,makeClipAdditive:xb};class Sl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const c=n+a>>>1;e<t[c]?a=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nx extends Sl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ts,endingEnd:Ts}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,c=i[s],u=i[a];if(c===void 0)switch(this.getSettings_().endingStart){case bs:s=e,c=2*t-n;break;case ja:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case bs:a=e,u=2*n-t;break;case ja:a=1,u=n+i[1]-i[0];break;default:a=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,x=(n-t)/(i-t),w=x*x,y=w*x,_=-m*y+2*m*w-m*x,E=(1+m)*y+(-1.5-2*m)*w+(-.5+m)*x+1,M=(-1-g)*y+(1.5+g)*w+.5*x,A=g*y-g*w;for(let U=0;U!==c;++U)s[U]=_*a[f+U]+E*a[h+U]+M*a[u+U]+A*a[p+U];return s}}class hm extends Sl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(i-t),p=1-f;for(let m=0;m!==c;++m)s[m]=a[h+m]*p+a[u+m]*f;return s}}class Ox extends Sl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ox(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qa:t=this.InterpolantFactoryMethodDiscrete;break;case ch:t=this.InterpolantFactoryMethodLinear;break;case Eu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return ch;case this.InterpolantFactoryMethodSmooth:return Eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const c=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*c,a*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(a!==null&&a>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,a),e=!1;break}a=u}if(i!==void 0&&Dx(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Eu,s=e.length-1;let a=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)u=!0;else{const p=c*n,m=p-n,g=p+n;for(let x=0;x!==n;++x){const w=t[p+x];if(w!==t[m+x]||w!==t[g+x]){u=!0;break}}}if(u){if(c!==a){e[a]=e[c];const p=c*n,m=a*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++a}}if(s>0){e[a]=e[s];for(let c=s*n,u=a*n,h=0;h!==n;++h)t[u+h]=t[c+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=ch;class Vs extends Fi{constructor(e,t,n){super(e,t,n)}}Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=qa;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class fm extends Fi{}fm.prototype.ValueTypeName="color";class ol extends Fi{}ol.prototype.ValueTypeName="number";class Fx extends Sl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)Kn.slerpFlat(s,0,a,h-c,a,h,u);return s}}class Ml extends Fi{InterpolantFactoryMethodLinear(e){return new Fx(this.times,this.values,this.getValueSize(),e)}}Ml.prototype.ValueTypeName="quaternion";Ml.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends Fi{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=qa;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class al extends Fi{}al.prototype.ValueTypeName="vector";class ll{constructor(e="",t=-1,n=[],i=wh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,c=n.length;a!==c;++a)t.push(Mb(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Fi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=Ux(u);u=Mp(u,1,f),h=Mp(h,1,f),!i&&u[0]===0&&(u.push(s),h.push(h[0])),a.push(new ol(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const a=[];for(const c in i)a.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,g,x,w){if(g.length!==0){const y=[],_=[];um(g,y,_,x),y.length!==0&&w.push(new p(m,y,_))}},i=[],s=e.name||"default",a=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let x;for(x=0;x<m.length;x++)if(m[x].morphTargets)for(let w=0;w<m[x].morphTargets.length;w++)g[m[x].morphTargets[w]]=-1;for(const w in g){const y=[],_=[];for(let E=0;E!==m[x].morphTargets.length;++E){const M=m[x];y.push(M.time),_.push(M.morphTarget===w?1:0)}i.push(new ol(".morphTargetInfluence["+w+"]",y,_))}u=g.length*a}else{const g=".bones["+t[p].name+"]";n(al,g+".position",m,"pos",i),n(Ml,g+".quaternion",m,"rot",i),n(al,g+".scale",m,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Sb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ol;case"vector":case"vector2":case"vector3":case"vector4":return al;case"color":return fm;case"quaternion":return Ml;case"bool":case"boolean":return Vs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Mb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Sb(r.type);if(r.times===void 0){const t=[],n=[];um(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const xr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class dm{constructor(e,t,n){const i=this;let s=!1,a=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,c),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,c),a===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=h.length;p<m;p+=2){const g=h[p],x=h[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return x}return null}}}const Bx=new dm;class Qn{constructor(e){this.manager=e!==void 0?e:Bx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qn.DEFAULT_MATERIAL_NAME="__DEFAULT";const gr={};class wb extends Error{constructor(e,t){super(e),this.response=t}}class Ar extends Qn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=xr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(gr[e]!==void 0){gr[e].push({onLoad:t,onProgress:n,onError:i});return}gr[e]=[],gr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=gr[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=m?parseInt(m):0,x=g!==0;let w=0;const y=new ReadableStream({start(_){E();function E(){p.read().then(({done:M,value:A})=>{if(M)_.close();else{w+=A.byteLength;const U=new ProgressEvent("progress",{lengthComputable:x,loaded:w,total:g});for(let P=0,L=f.length;P<L;P++){const B=f[P];B.onProgress&&B.onProgress(U)}_.enqueue(A),E()}},M=>{_.error(M)})}}});return new Response(y)}else throw new wb(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(x=>g.decode(x))}}}).then(h=>{xr.add(e,h);const f=gr[e];delete gr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onLoad&&g.onLoad(h)}}).catch(h=>{const f=gr[e];if(f===void 0)throw this.manager.itemError(e),h;delete gr[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Eb extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Ar(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=ll.parse(e[n]);t.push(i)}return t}}class Ab extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=[],c=new Ih,u=new Ar(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function f(p){u.load(e[p],function(m){const g=s.parse(m,!0);a[p]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(c.minFilter=an),c.image=a,c.format=g.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)f(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let x=0;x<g;x++){a[x]={mipmaps:[]};for(let w=0;w<m.mipmapCount;w++)a[x].mipmaps.push(m.mipmaps[x*m.mipmapCount+w]),a[x].format=m.format,a[x].width=m.width,a[x].height=m.height}c.image=a}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=an),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}class cl extends Qn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=xr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const c=el("img");function u(){f(),xr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class Tb extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=new gl;s.colorSpace=jn;const a=new cl(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let c=0;function u(h){a.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class bb extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new $i,c=new Ar(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(f){if(i!==void 0)i(f);else{console.error(f);return}}h.image!==void 0?a.image=h.image:h.data!==void 0&&(a.image.width=h.width,a.image.height=h.height,a.image.data=h.data),a.wrapS=h.wrapS!==void 0?h.wrapS:yi,a.wrapT=h.wrapT!==void 0?h.wrapT:yi,a.magFilter=h.magFilter!==void 0?h.magFilter:an,a.minFilter=h.minFilter!==void 0?h.minFilter:an,a.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(a.colorSpace=h.colorSpace),h.flipY!==void 0&&(a.flipY=h.flipY),h.format!==void 0&&(a.format=h.format),h.type!==void 0&&(a.type=h.type),h.mipmaps!==void 0&&(a.mipmaps=h.mipmaps,a.minFilter=Ji),h.mipmapCount===1&&(a.minFilter=an),h.generateMipmaps!==void 0&&(a.generateMipmaps=h.generateMipmaps),a.needsUpdate=!0,t&&t(a,h)},n,i),a}}class Cb extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=new $t,a=new cl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ts extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zx extends ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wd=new at,_v=new D,xv=new D;class pm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_v.setFromMatrixPosition(e.matrixWorld),t.position.copy(_v),xv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xv),t.updateMatrixWorld(),Wd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rb extends pm{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Bo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kx extends ts{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Rb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yv=new at,Ta=new D,Xd=new D;class Pb extends pm{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ta),Xd.copy(n.position),Xd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xd),n.updateMatrixWorld(),i.makeTranslation(-Ta.x,-Ta.y,-Ta.z),yv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yv)}}class Hx extends ts{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ib extends pm{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vx extends ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Ib}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gx extends ts{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wx extends ts{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Xx{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Yx extends ts{constructor(e=new Xx,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Xh extends Qn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,a=new Ar(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new Ne().setHex(a.value);break;case"v2":i.uniforms[s].value=new ce().fromArray(a.value);break;case"v3":i.uniforms[s].value=new D().fromArray(a.value);break;case"v4":i.uniforms[s].value=new wt().fromArray(a.value);break;case"m3":i.uniforms[s].value=new gt().fromArray(a.value);break;case"m4":i.uniforms[s].value=new at().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new ce().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Xh.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Ex,SpriteMaterial:Qp,RawShaderMaterial:Ax,ShaderMaterial:ci,PointsMaterial:nm,MeshPhysicalMaterial:Tx,MeshStandardMaterial:Er,MeshPhongMaterial:bx,MeshToonMaterial:Cx,MeshNormalMaterial:Rx,MeshLambertMaterial:Px,MeshDepthMaterial:Zp,MeshDistanceMaterial:Jp,MeshBasicMaterial:br,MeshMatcapMaterial:Ix,LineDashedMaterial:Lx,LineBasicMaterial:Vn,Material:Un};return new t[e]}}class wp{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class mm extends yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class qx extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Ar(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(g,x){if(t[x]!==void 0)return t[x];const y=g.interleavedBuffers[x],_=s(g,y.buffer),E=Po(y.type,_),M=new Rh(E,y.stride);return M.uuid=y.uuid,t[x]=M,M}function s(g,x){if(n[x]!==void 0)return n[x];const y=g.arrayBuffers[x],_=new Uint32Array(y).buffer;return n[x]=_,_}const a=e.isInstancedBufferGeometry?new mm:new yt,c=e.data.index;if(c!==void 0){const g=Po(c.type,c.array);a.setIndex(new zt(g,1))}const u=e.data.attributes;for(const g in u){const x=u[g];let w;if(x.isInterleavedBufferAttribute){const y=i(e.data,x.data);w=new oi(y,x.itemSize,x.offset,x.normalized)}else{const y=Po(x.type,x.array),_=x.isInstancedBufferAttribute?ko:zt;w=new _(y,x.itemSize,x.normalized)}x.name!==void 0&&(w.name=x.name),x.usage!==void 0&&w.setUsage(x.usage),a.setAttribute(g,w)}const h=e.data.morphAttributes;if(h)for(const g in h){const x=h[g],w=[];for(let y=0,_=x.length;y<_;y++){const E=x[y];let M;if(E.isInterleavedBufferAttribute){const A=i(e.data,E.data);M=new oi(A,E.itemSize,E.offset,E.normalized)}else{const A=Po(E.type,E.array);M=new zt(A,E.itemSize,E.normalized)}E.name!==void 0&&(M.name=E.name),w.push(M)}a.morphAttributes[g]=w}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let g=0,x=p.length;g!==x;++g){const w=p[g];a.addGroup(w.start,w.count,w.materialIndex)}const m=e.data.boundingSphere;if(m!==void 0){const g=new D;m.center!==void 0&&g.fromArray(m.center),a.boundingSphere=new _n(g,m.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class Lb extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=this.path===""?wp.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const c=new Ar(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){i!==void 0&&i(p),console.error("THREE:ObjectLoader: Can't parse "+e+".",p.message);return}const f=h.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?wp.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new Ar(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),c=JSON.parse(a),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,a),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),f=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,f),this.bindLightTargets(h),t!==void 0){let p=!1;for(const m in a)if(a[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,a),u=this.parseObject(e.object,i,c,a,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),this.bindLightTargets(u),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new er().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=new Ph().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new qx;for(let s=0,a=e.length;s<a;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in vv?c=vv[u.type].fromJSON(u,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Xh;s.setTextures(t);for(let a=0,c=e.length;a<c;a++){const u=e[a];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=ll.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function a(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return a(f)}else return u.data?{data:Po(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new dm(t);s=new cl(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,f=e.length;h<f;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const g=[];for(let x=0,w=m.length;x<w;x++){const y=m[x],_=c(y);_!==null&&(_ instanceof HTMLImageElement?g.push(_):g.push(new $i(_.data,_.width,_.height)))}i[p.uuid]=new Cs(g)}else{const g=c(p.url);i[p.uuid]=new Cs(g)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(a){if(typeof a=="string"){const c=a,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return a.data?{data:Po(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new cl(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,c=e.length;a<c;a++){const u=e[a],h=u.url;if(Array.isArray(h)){const f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p],x=await s(g);x!==null&&(x instanceof HTMLImageElement?f.push(x):f.push(new $i(x.data,x.width,x.height)))}n[u.uuid]=new Cs(f)}else{const f=await s(u.url);n[u.uuid]=new Cs(f)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const c=e[s];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let f;Array.isArray(h)?(f=new gl,h.length===6&&(f.needsUpdate=!0)):(h&&h.data?f=new $i:f=new $t,h&&(f.needsUpdate=!0)),f.source=u,f.uuid=c.uuid,c.name!==void 0&&(f.name=c.name),c.mapping!==void 0&&(f.mapping=n(c.mapping,Db)),c.channel!==void 0&&(f.channel=c.channel),c.offset!==void 0&&f.offset.fromArray(c.offset),c.repeat!==void 0&&f.repeat.fromArray(c.repeat),c.center!==void 0&&f.center.fromArray(c.center),c.rotation!==void 0&&(f.rotation=c.rotation),c.wrap!==void 0&&(f.wrapS=n(c.wrap[0],Sv),f.wrapT=n(c.wrap[1],Sv)),c.format!==void 0&&(f.format=c.format),c.internalFormat!==void 0&&(f.internalFormat=c.internalFormat),c.type!==void 0&&(f.type=c.type),c.colorSpace!==void 0&&(f.colorSpace=c.colorSpace),c.minFilter!==void 0&&(f.minFilter=n(c.minFilter,Mv)),c.magFilter!==void 0&&(f.magFilter=n(c.magFilter,Mv)),c.anisotropy!==void 0&&(f.anisotropy=c.anisotropy),c.flipY!==void 0&&(f.flipY=c.flipY),c.generateMipmaps!==void 0&&(f.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(f.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(f.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(f.compareFunction=c.compareFunction),c.userData!==void 0&&(f.userData=c.userData),i[c.uuid]=f}return i}parseObject(e,t,n,i,s){let a;function c(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let x=0,w=m.length;x<w;x++){const y=m[x];n[y]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",y),g.push(n[y])}return g}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",m),i[m]}let f,p;switch(e.type){case"Scene":a=new Kp,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Ne(e.background):a.background=h(e.background)),e.environment!==void 0&&(a.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Ch(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new bh(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new on(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Hs(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Gx(e.color,e.intensity);break;case"DirectionalLight":a=new Vx(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Hx(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Wx(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new kx(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new zx(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Yx().fromJSON(e);break;case"SkinnedMesh":f=c(e.geometry),p=u(e.material),a=new $p(f,p),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":f=c(e.geometry),p=u(e.material),a=new Yt(f,p);break;case"InstancedMesh":f=c(e.geometry),p=u(e.material);const m=e.count,g=e.instanceMatrix,x=e.instanceColor;a=new tm(f,p,m),a.instanceMatrix=new ko(new Float32Array(g.array),16),x!==void 0&&(a.instanceColor=new ko(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":f=c(e.geometry),p=u(e.material),a=new fx(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,p),a.geometry=f,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(w=>{const y=new vn;y.min.fromArray(w.boxMin),y.max.fromArray(w.boxMax);const _=new _n;return _.radius=w.sphereRadius,_.center.fromArray(w.sphereCenter),{boxInitialized:w.boxInitialized,box:y,sphereInitialized:w.sphereInitialized,sphere:_}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=h(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=h(e.colorsTexture.uuid));break;case"LOD":a=new hx;break;case"Line":a=new Qr(c(e.geometry),u(e.material));break;case"LineLoop":a=new dx(c(e.geometry),u(e.material));break;case"LineSegments":a=new ir(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":a=new px(c(e.geometry),u(e.material));break;case"Sprite":a=new ux(u(e.material));break;case"Group":a=new Zr;break;case"Bone":a=new em;break;default:a=new It}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)a.add(this.parseObject(m[g],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const x=m[g];a.animations.push(s[x])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const x=m[g],w=a.getObjectByProperty("uuid",x.object);w!==void 0&&a.addLevel(w,x.distance,x.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new It}})}}const Db={UVMapping:gh,CubeReflectionMapping:Mr,CubeRefractionMapping:Kr,EquirectangularReflectionMapping:Ga,EquirectangularRefractionMapping:Wa,CubeUVReflectionMapping:Go},Sv={RepeatWrapping:Xa,ClampToEdgeWrapping:yi,MirroredRepeatWrapping:Ya},Mv={NearestFilter:gn,NearestMipmapNearestFilter:Pp,NearestMipmapLinearFilter:Ro,LinearFilter:an,LinearMipmapNearestFilter:Ua,LinearMipmapLinearFilter:Ji};class Ub extends Qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=xr.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return xr.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),xr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});xr.add(e,u),s.manager.itemStart(e)}}let hu;class gm{static getContext(){return hu===void 0&&(hu=new(window.AudioContext||window.webkitAudioContext)),hu}static setContext(e){hu=e}}class Nb extends Qn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Ar(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(u){try{const h=u.slice(0);gm.getContext().decodeAudioData(h,function(p){t(p)}).catch(c)}catch(h){c(h)}},n,i);function c(u){i?i(u):console.error(u),s.manager.itemError(e)}}}const wv=new at,Ev=new at,_s=new at;class Ob{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new on,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new on,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,_s.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,a=t.near*Math.tan(Ls*t.fov*.5)/t.zoom;let c,u;Ev.elements[12]=-i,wv.elements[12]=i,c=-a*t.aspect+s,u=a*t.aspect+s,_s.elements[0]=2*t.near/(u-c),_s.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(_s),c=-a*t.aspect-s,u=a*t.aspect-s,_s.elements[0]=2*t.near/(u-c),_s.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(_s)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Ev),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(wv)}}class vm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Av(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Av();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Av(){return performance.now()}const xs=new D,Tv=new Kn,Fb=new D,ys=new D;class Bb extends It{constructor(){super(),this.type="AudioListener",this.context=gm.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new vm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(xs,Tv,Fb),ys.set(0,0,-1).applyQuaternion(Tv),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(xs.x,i),t.positionY.linearRampToValueAtTime(xs.y,i),t.positionZ.linearRampToValueAtTime(xs.z,i),t.forwardX.linearRampToValueAtTime(ys.x,i),t.forwardY.linearRampToValueAtTime(ys.y,i),t.forwardZ.linearRampToValueAtTime(ys.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(xs.x,xs.y,xs.z),t.setOrientation(ys.x,ys.y,ys.z,n.x,n.y,n.z)}}class jx extends It{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Ss=new D,bv=new Kn,zb=new D,Ms=new D;class kb extends jx{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ss,bv,zb),Ms.set(0,0,1).applyQuaternion(bv);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ss.x,n),t.positionY.linearRampToValueAtTime(Ss.y,n),t.positionZ.linearRampToValueAtTime(Ss.z,n),t.orientationX.linearRampToValueAtTime(Ms.x,n),t.orientationY.linearRampToValueAtTime(Ms.y,n),t.orientationZ.linearRampToValueAtTime(Ms.z,n)}else t.setPosition(Ss.x,Ss.y,Ss.z),t.setOrientation(Ms.x,Ms.y,Ms.z)}}class Hb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Zx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let c=0;c!==i;++c)n[s+c]=n[c];a=t}else{a+=t;const c=t/a;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Kn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Kn.multiplyQuaternionsFlat(e,a,e,t,e,n),Kn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*a+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]+e[n+a]*i}}}const _m="\\[\\]\\.:\\/",Vb=new RegExp("["+_m+"]","g"),xm="[^"+_m+"]",Gb="[^"+_m.replace("\\.","")+"]",Wb=/((?:WC+[\/:])*)/.source.replace("WC",xm),Xb=/(WCOD+)?/.source.replace("WCOD",Gb),Yb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xm),qb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xm),jb=new RegExp("^"+Wb+Xb+Yb+qb+"$"),Zb=["material","materials","bones","map"];class Jb{constructor(e,t,n){const i=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Pt{constructor(e,t,n){this.path=t,this.parsedPath=n||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,n):new Pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vb,"")}static parseTrackName(e){const t=jb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Zb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const c=s[a];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=Jb;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Kb{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ai(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let f=0,p=arguments.length;f!==p;++f){const m=arguments[f],g=m.uuid;let x=t[g];if(x===void 0){x=u++,t[g]=x,e.push(m);for(let w=0,y=a;w!==y;++w)s[w].push(new Pt(m,n[w],i[w]))}else if(x<h){c=e[x];const w=--h,y=e[w];t[y.uuid]=x,e[x]=y,t[g]=w,e[w]=m;for(let _=0,E=a;_!==E;++_){const M=s[_],A=M[w];let U=M[x];M[x]=A,U===void 0&&(U=new Pt(m,n[_],i[_])),M[w]=U}}else e[x]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,c=arguments.length;a!==c;++a){const u=arguments[a],h=u.uuid,f=t[h];if(f!==void 0&&f>=s){const p=s++,m=e[p];t[m.uuid]=f,e[f]=m,t[h]=p,e[p]=u;for(let g=0,x=i;g!==x;++g){const w=n[g],y=w[p],_=w[f];w[f]=y,w[p]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],f=h.uuid,p=t[f];if(p!==void 0)if(delete t[f],p<s){const m=--s,g=e[m],x=--a,w=e[x];t[g.uuid]=p,e[p]=g,t[w.uuid]=m,e[m]=w,e.pop();for(let y=0,_=i;y!==_;++y){const E=n[y],M=E[m],A=E[x];E[p]=M,E[m]=A,E.pop()}}else{const m=--a,g=e[m];m>0&&(t[g.uuid]=p),e[p]=g,e.pop();for(let x=0,w=i;x!==w;++x){const y=n[x];y[p]=y[m],y.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,f=this.nCachedObjects_,p=new Array(h);i=s.length,n[e]=i,a.push(e),c.push(t),s.push(p);for(let m=f,g=u.length;m!==g;++m){const x=u[m];p[m]=new Pt(x,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,c=a.length-1,u=a[c],h=e[c];t[h]=n,a[n]=u,a.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class Jx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,c=new Array(a),u={endingStart:Ts,endingEnd:Ts};for(let h=0;h!==a;++h){const f=s[h].createInterpolant(null);c[h]=f,f.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=N_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,c=i/s;e.warp(1,a,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const a=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case kp:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(a),h[f].accumulateAdditive(c);break;case wh:default:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(a),h[f].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===O_;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===U_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=bs,i.endingEnd=bs):(e?i.endingStart=this.zeroSlopeAtStart?bs:Ts:i.endingStart=ja,t?i.endingEnd=this.zeroSlopeAtEnd?bs:Ts:i.endingEnd=ja)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const Qb=new Float32Array(1);class $b extends nr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let p=0;p!==s;++p){const m=i[p],g=m.name;let x=f[g];if(x!==void 0)++x.referenceCount,a[p]=x;else{if(x=a[p],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,u,g));continue}const w=t&&t._propertyBindings[p].binding.parsedPath;x=new Zx(Pt.create(n,g,w),m.ValueTypeName,m.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,u,g),a[p]=x}c[p].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const c=a.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,c=a[s],u=c.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,c=a[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new hm(new Float32Array(2),new Float32Array(2),1,Qb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?ll.findByName(i,e):e;const c=a!==null?a.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(a!==null?n=a.blendMode:n=wh),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const f=new Jx(this,a,t,n);return this._bindAction(f,h),this._addInactiveAction(f,c,s),f}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ll.findByName(n,e):e,a=s?s.uuid:e,c=this._actionsByClip[a];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,a);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let c=0,u=a.length;c!==u;++c){const h=a[c];this._deactivateAction(h);const f=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=f,t[f]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const c=n[a].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const c=s[a];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class ym{constructor(e){this.value=e}clone(){return new ym(this.value.clone===void 0?this.value:this.value.clone())}}let e2=0;class t2 extends nr{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:e2++}),this.name="",this.usage=Qa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class dh extends Rh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class n2{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Cv=new at;class Kx{constructor(e,t,n=0,i=1/0){this.ray=new Xo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cv),this}intersectObject(e,t=!0,n=[]){return Ep(e,this,n,t),n.sort(Rv),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ep(e[i],this,n,t);return n.sort(Rv),n}}function Rv(r,e){return r.distance-e.distance}function Ep(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,c=s.length;a<c;a++)Ep(s[a],e,t,!0)}}class i2{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class r2{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Sm{constructor(e,t,n,i){Sm.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const Pv=new ce;class s2{constructor(e=new ce(1/0,1/0),t=new ce(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pv.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pv).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Iv=new D,fu=new D;class Qx{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Iv.subVectors(e,this.start),fu.subVectors(this.end,this.start);const n=fu.dot(fu);let s=fu.dot(Iv)/n;return t&&(s=Qt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Lv=new D;class o2 extends It{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new yt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,c=1,u=32;a<u;a++,c++){const h=a/u*Math.PI*2,f=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(f),Math.sin(f),1)}n.setAttribute("position",new qe(i,3));const s=new Vn({fog:!1,toneMapped:!1});this.cone=new ir(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Lv.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Lv),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Xr=new D,du=new at,Yd=new at;class a2 extends ir{constructor(e){const t=$x(e),n=new yt,i=[],s=[],a=new Ne(0,0,1),c=new Ne(0,1,0);for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(c.r,c.g,c.b))}n.setAttribute("position",new qe(i,3)),n.setAttribute("color",new qe(s,3));const u=new Vn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Yd.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(du.multiplyMatrices(Yd,c.matrixWorld),Xr.setFromMatrixPosition(du),i.setXYZ(a,Xr.x,Xr.y,Xr.z),du.multiplyMatrices(Yd,c.parent.matrixWorld),Xr.setFromMatrixPosition(du),i.setXYZ(a+1,Xr.x,Xr.y,Xr.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function $x(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,$x(r.children[t]));return e}class l2 extends Yt{constructor(e,t,n){const i=new jo(t,4,2),s=new br({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const c2=new D,Dv=new Ne,Uv=new Ne;class u2 extends It{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new yl(t);i.rotateY(Math.PI*.5),this.material=new br({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new zt(a,3)),this.add(new Yt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Dv.copy(this.light.color),Uv.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Dv:Uv;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(c2.setFromMatrixPosition(this.light.matrixWorld).negate())}}class h2 extends ir{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ne(n),i=new Ne(i);const s=t/2,a=e/t,c=e/2,u=[],h=[];for(let m=0,g=0,x=-c;m<=t;m++,x+=a){u.push(-c,0,x,c,0,x),u.push(x,0,-c,x,0,c);const w=m===s?n:i;w.toArray(h,g),g+=3,w.toArray(h,g),g+=3,w.toArray(h,g),g+=3,w.toArray(h,g),g+=3}const f=new yt;f.setAttribute("position",new qe(u,3)),f.setAttribute("color",new qe(h,3));const p=new Vn({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class f2 extends ir{constructor(e=10,t=16,n=8,i=64,s=4473924,a=8947848){s=new Ne(s),a=new Ne(a);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),g=Math.sin(m)*e,x=Math.cos(m)*e;c.push(0,0,0),c.push(g,0,x);const w=p&1?s:a;u.push(w.r,w.g,w.b),u.push(w.r,w.g,w.b)}for(let p=0;p<n;p++){const m=p&1?s:a,g=e-e/n*p;for(let x=0;x<i;x++){let w=x/i*(Math.PI*2),y=Math.sin(w)*g,_=Math.cos(w)*g;c.push(y,0,_),u.push(m.r,m.g,m.b),w=(x+1)/i*(Math.PI*2),y=Math.sin(w)*g,_=Math.cos(w)*g,c.push(y,0,_),u.push(m.r,m.g,m.b)}}const h=new yt;h.setAttribute("position",new qe(c,3)),h.setAttribute("color",new qe(u,3));const f=new Vn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Nv=new D,pu=new D,Ov=new D;class d2 extends It{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new yt;i.setAttribute("position",new qe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Vn({fog:!1,toneMapped:!1});this.lightPlane=new Qr(i,s),this.add(this.lightPlane),i=new yt,i.setAttribute("position",new qe([0,0,0,0,0,1],3)),this.targetLine=new Qr(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Nv.setFromMatrixPosition(this.light.matrixWorld),pu.setFromMatrixPosition(this.light.target.matrixWorld),Ov.subVectors(pu,Nv),this.lightPlane.lookAt(pu),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(pu),this.targetLine.scale.z=Ov.length()}}const mu=new D,Kt=new ml;class p2 extends ir{constructor(e){const t=new yt,n=new Vn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(x,w){u(x),u(w)}function u(x){i.push(0,0,0),s.push(0,0,0),a[x]===void 0&&(a[x]=[]),a[x].push(i.length/3-1)}t.setAttribute("position",new qe(i,3)),t.setAttribute("color",new qe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const h=new Ne(16755200),f=new Ne(16711680),p=new Ne(43775),m=new Ne(16777215),g=new Ne(3355443);this.setColors(h,f,p,m,g)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Kt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),tn("c",t,e,Kt,0,0,-1),tn("t",t,e,Kt,0,0,1),tn("n1",t,e,Kt,-n,-i,-1),tn("n2",t,e,Kt,n,-i,-1),tn("n3",t,e,Kt,-n,i,-1),tn("n4",t,e,Kt,n,i,-1),tn("f1",t,e,Kt,-n,-i,1),tn("f2",t,e,Kt,n,-i,1),tn("f3",t,e,Kt,-n,i,1),tn("f4",t,e,Kt,n,i,1),tn("u1",t,e,Kt,n*.7,i*1.1,-1),tn("u2",t,e,Kt,-n*.7,i*1.1,-1),tn("u3",t,e,Kt,0,i*2,-1),tn("cf1",t,e,Kt,-n,0,1),tn("cf2",t,e,Kt,n,0,1),tn("cf3",t,e,Kt,0,-i,1),tn("cf4",t,e,Kt,0,i,1),tn("cn1",t,e,Kt,-n,0,-1),tn("cn2",t,e,Kt,n,0,-1),tn("cn3",t,e,Kt,0,-i,-1),tn("cn4",t,e,Kt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function tn(r,e,t,n,i,s,a){mu.set(i,s,a).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],mu.x,mu.y,mu.z)}}const gu=new vn;class m2 extends ir{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new yt;s.setIndex(new zt(n,1)),s.setAttribute("position",new zt(i,3)),super(s,new Vn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&gu.setFromObject(this.object),gu.isEmpty())return;const t=gu.min,n=gu.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class g2 extends ir{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new yt;s.setIndex(new zt(n,1)),s.setAttribute("position",new qe(i,3)),super(s,new Vn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class v2 extends Qr{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new yt;a.setAttribute("position",new qe(s,3)),a.computeBoundingSphere(),super(a,new Vn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new yt;u.setAttribute("position",new qe(c,3)),u.computeBoundingSphere(),this.add(new Yt(u,new br({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Fv=new D;let vu,qd;class _2 extends It{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",vu===void 0&&(vu=new yt,vu.setAttribute("position",new qe([0,0,0,0,1,0],3)),qd=new Ii(0,.5,1,5,1),qd.translate(0,-.5,0)),this.position.copy(t),this.line=new Qr(vu,new Vn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Yt(qd,new br({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Fv.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Fv,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class x2 extends ir{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new yt;i.setAttribute("position",new qe(t,3)),i.setAttribute("color",new qe(n,3));const s=new Vn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ne,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class y2{constructor(){this.type="ShapePath",this.color=new Ne,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new nl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const E=[];for(let M=0,A=_.length;M<A;M++){const U=_[M],P=new er;P.curves=U.curves,E.push(P)}return E}function n(_,E){const M=E.length;let A=!1;for(let U=M-1,P=0;P<M;U=P++){let L=E[U],B=E[P],z=B.x-L.x,b=B.y-L.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(L=E[P],z=-z,B=E[U],b=-b),_.y<L.y||_.y>B.y)continue;if(_.y===L.y){if(_.x===L.x)return!0}else{const C=b*(_.x-L.x)-z*(_.y-L.y);if(C===0)return!0;if(C<0)continue;A=!A}}else{if(_.y!==L.y)continue;if(B.x<=_.x&&_.x<=L.x||L.x<=_.x&&_.x<=B.x)return!0}}return A}const i=tr.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,c,u;const h=[];if(s.length===1)return c=s[0],u=new er,u.curves=c.curves,h.push(u),h;let f=!i(s[0].getPoints());f=e?!f:f;const p=[],m=[];let g=[],x=0,w;m[x]=void 0,g[x]=[];for(let _=0,E=s.length;_<E;_++)c=s[_],w=c.getPoints(),a=i(w),a=e?!a:a,a?(!f&&m[x]&&x++,m[x]={s:new er,p:w},m[x].s.curves=c.curves,f&&x++,g[x]=[]):g[x].push({h:c,p:w[0]});if(!m[0])return t(s);if(m.length>1){let _=!1,E=0;for(let M=0,A=m.length;M<A;M++)p[M]=[];for(let M=0,A=m.length;M<A;M++){const U=g[M];for(let P=0;P<U.length;P++){const L=U[P];let B=!0;for(let z=0;z<m.length;z++)n(L.p,m[z].p)&&(M!==z&&E++,B?(B=!1,p[z].push(L)):_=!0);B&&p[M].push(L)}}E>0&&_===!1&&(g=p)}let y;for(let _=0,E=m.length;_<E;_++){u=m[_].s,h.push(u),y=g[_];for(let M=0,A=y.length;M<A;M++)u.holes.push(y[M].h)}return h}}class S2 extends nr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class M2 extends Ni{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);const RC=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Rp,AddEquation:jr,AddOperation:T_,AdditiveAnimationBlendMode:kp,AdditiveBlending:up,AgXToneMapping:I_,AlphaFormat:Up,AlwaysCompare:Y_,AlwaysDepth:Iu,AlwaysStencilFunc:pp,AmbientLight:Gx,AnimationAction:Jx,AnimationClip:ll,AnimationLoader:Eb,AnimationMixer:$b,AnimationObjectGroup:Kb,AnimationUtils:yb,ArcCurve:mx,ArrayCamera:ax,ArrowHelper:_2,AttachedBindMode:dp,Audio:jx,AudioAnalyser:Hb,AudioContext:gm,AudioListener:Bb,AudioLoader:Nb,AxesHelper:x2,BackSide:Dn,BasicDepthPacking:F_,BasicShadowMap:o_,BatchedMesh:fx,Bone:em,BooleanKeyframeTrack:Vs,Box2:s2,Box3:vn,Box3Helper:g2,BoxGeometry:Di,BoxHelper:m2,BufferAttribute:zt,BufferGeometry:yt,BufferGeometryLoader:qx,ByteType:Ip,Cache:xr,Camera:ml,CameraHelper:p2,CanvasTexture:Lh,CapsuleGeometry:Uh,CatmullRomCurve3:gx,CineonToneMapping:R_,CircleGeometry:Nh,ClampToEdgeWrapping:yi,Clock:vm,Color:Ne,ColorKeyframeTrack:fm,ColorManagement:Ot,CompressedArrayTexture:GT,CompressedCubeTexture:WT,CompressedTexture:Ih,CompressedTextureLoader:Ab,ConeGeometry:xl,ConstantAlphaFactor:w_,ConstantColorFactor:S_,Controls:S2,CubeCamera:$_,CubeReflectionMapping:Mr,CubeRefractionMapping:Kr,CubeTexture:gl,CubeTextureLoader:Tb,CubeUVReflectionMapping:Go,CubicBezierCurve:rm,CubicBezierCurve3:vx,CubicInterpolant:Nx,CullFaceBack:cp,CullFaceFront:s_,CullFaceFrontBack:_S,CullFaceNone:r_,Curve:Oi,CurvePath:xx,CustomBlending:a_,CustomToneMapping:P_,CylinderGeometry:Ii,Cylindrical:r2,Data3DTexture:Wp,DataArrayTexture:Ah,DataTexture:$i,DataTextureLoader:bb,DataUtils:LM,DecrementStencilOp:LS,DecrementWrapStencilOp:US,DefaultLoadingManager:Bx,DepthFormat:Is,DepthStencilFormat:Fs,DepthTexture:jp,DetachedBindMode:D_,DirectionalLight:Vx,DirectionalLightHelper:d2,DiscreteInterpolant:Ox,DisplayP3ColorSpace:Eh,DodecahedronGeometry:Oh,DoubleSide:Pi,DstAlphaFactor:g_,DstColorFactor:__,DynamicCopyUsage:ZS,DynamicDrawUsage:GS,DynamicReadUsage:YS,EdgesGeometry:yx,EllipseCurve:Dh,EqualCompare:V_,EqualDepth:Du,EqualStencilFunc:BS,EquirectangularReflectionMapping:Ga,EquirectangularRefractionMapping:Wa,Euler:li,EventDispatcher:nr,ExtrudeGeometry:qo,FileLoader:Ar,Float16BufferAttribute:BM,Float32BufferAttribute:qe,FloatType:Jn,Fog:Ch,FogExp2:bh,FramebufferTexture:VT,FrontSide:Sr,Frustum:vl,GLBufferAttribute:n2,GLSL1:KS,GLSL3:mp,GreaterCompare:G_,GreaterDepth:Nu,GreaterEqualCompare:X_,GreaterEqualDepth:Uu,GreaterEqualStencilFunc:VS,GreaterStencilFunc:kS,GridHelper:h2,Group:Zr,HalfFloatType:Wo,HemisphereLight:zx,HemisphereLightHelper:u2,IcosahedronGeometry:Bh,ImageBitmapLoader:Ub,ImageLoader:cl,ImageUtils:Z_,IncrementStencilOp:IS,IncrementWrapStencilOp:DS,InstancedBufferAttribute:ko,InstancedBufferGeometry:mm,InstancedInterleavedBuffer:dh,InstancedMesh:tm,Int16BufferAttribute:OM,Int32BufferAttribute:FM,Int8BufferAttribute:DM,IntType:vh,InterleavedBuffer:Rh,InterleavedBufferAttribute:oi,Interpolant:Sl,InterpolateDiscrete:qa,InterpolateLinear:ch,InterpolateSmooth:Eu,InvertStencilOp:NS,KeepStencilOp:ws,KeyframeTrack:Fi,LOD:hx,LatheGeometry:_l,Layers:Ds,LessCompare:H_,LessDepth:Lu,LessEqualCompare:Hp,LessEqualDepth:Ns,LessEqualStencilFunc:zS,LessStencilFunc:FS,Light:ts,LightProbe:Yx,Line:Qr,Line3:Qx,LineBasicMaterial:Vn,LineCurve:sm,LineCurve3:_x,LineDashedMaterial:Lx,LineLoop:dx,LineSegments:ir,LinearDisplayP3ColorSpace:pl,LinearFilter:an,LinearInterpolant:hm,LinearMipMapLinearFilter:MS,LinearMipMapNearestFilter:SS,LinearMipmapLinearFilter:Ji,LinearMipmapNearestFilter:Ua,LinearSRGBColorSpace:Tr,LinearToneMapping:b_,LinearTransfer:Za,Loader:Qn,LoaderUtils:wp,LoadingManager:dm,LoopOnce:U_,LoopPingPong:O_,LoopRepeat:N_,LuminanceAlphaFormat:Fp,LuminanceFormat:Op,MOUSE:gS,Material:Un,MaterialLoader:Xh,MathUtils:Gp,Matrix2:Sm,Matrix3:gt,Matrix4:at,MaxEquation:h_,Mesh:Yt,MeshBasicMaterial:br,MeshDepthMaterial:Zp,MeshDistanceMaterial:Jp,MeshLambertMaterial:Px,MeshMatcapMaterial:Ix,MeshNormalMaterial:Rx,MeshPhongMaterial:bx,MeshPhysicalMaterial:Tx,MeshStandardMaterial:Er,MeshToonMaterial:Cx,MinEquation:u_,MirroredRepeatWrapping:Ya,MixOperation:A_,MultiplyBlending:fp,MultiplyOperation:fl,NearestFilter:gn,NearestMipMapLinearFilter:yS,NearestMipMapNearestFilter:xS,NearestMipmapLinearFilter:Ro,NearestMipmapNearestFilter:Pp,NeutralToneMapping:L_,NeverCompare:k_,NeverDepth:Pu,NeverStencilFunc:OS,NoBlending:yr,NoColorSpace:vr,NoToneMapping:Qi,NormalAnimationBlendMode:wh,NormalBlending:Ps,NotEqualCompare:W_,NotEqualDepth:Ou,NotEqualStencilFunc:HS,NumberKeyframeTrack:ol,Object3D:It,ObjectLoader:Lb,ObjectSpaceNormalMap:z_,OctahedronGeometry:yl,OneFactor:d_,OneMinusConstantAlphaFactor:E_,OneMinusConstantColorFactor:M_,OneMinusDstAlphaFactor:v_,OneMinusDstColorFactor:x_,OneMinusSrcAlphaFactor:Ru,OneMinusSrcColorFactor:m_,OrthographicCamera:Hs,P3Primaries:Ka,PCFShadowMap:mh,PCFSoftShadowMap:Da,PMREMGenerator:gp,Path:nl,PerspectiveCamera:on,Plane:Yr,PlaneGeometry:ks,PlaneHelper:v2,PointLight:Hx,PointLightHelper:l2,Points:px,PointsMaterial:nm,PolarGridHelper:f2,PolyhedronGeometry:es,PositionalAudio:kb,PropertyBinding:Pt,PropertyMixer:Zx,QuadraticBezierCurve:om,QuadraticBezierCurve3:am,Quaternion:Kn,QuaternionKeyframeTrack:Ml,QuaternionLinearInterpolant:Fx,RED_GREEN_RGTC2_Format:ah,RED_RGTC1_Format:zp,REVISION:Vo,RGBADepthPacking:B_,RGBAFormat:Ln,RGBAIntegerFormat:Mh,RGBA_ASTC_10x10_Format:th,RGBA_ASTC_10x5_Format:Qu,RGBA_ASTC_10x6_Format:$u,RGBA_ASTC_10x8_Format:eh,RGBA_ASTC_12x10_Format:nh,RGBA_ASTC_12x12_Format:ih,RGBA_ASTC_4x4_Format:Wu,RGBA_ASTC_5x4_Format:Xu,RGBA_ASTC_5x5_Format:Yu,RGBA_ASTC_6x5_Format:qu,RGBA_ASTC_6x6_Format:ju,RGBA_ASTC_8x5_Format:Zu,RGBA_ASTC_8x6_Format:Ju,RGBA_ASTC_8x8_Format:Ku,RGBA_BPTC_Format:za,RGBA_ETC2_EAC_Format:Gu,RGBA_PVRTC_2BPPV1_Format:ku,RGBA_PVRTC_4BPPV1_Format:zu,RGBA_S3TC_DXT1_Format:Oa,RGBA_S3TC_DXT3_Format:Fa,RGBA_S3TC_DXT5_Format:Ba,RGBDepthPacking:bS,RGBFormat:Np,RGBIntegerFormat:wS,RGB_BPTC_SIGNED_Format:rh,RGB_BPTC_UNSIGNED_Format:sh,RGB_ETC1_Format:Hu,RGB_ETC2_Format:Vu,RGB_PVRTC_2BPPV1_Format:Bu,RGB_PVRTC_4BPPV1_Format:Fu,RGB_S3TC_DXT1_Format:Na,RGDepthPacking:CS,RGFormat:Bp,RGIntegerFormat:Sh,RawShaderMaterial:Ax,Ray:Xo,Raycaster:Kx,Rec709Primaries:Ja,RectAreaLight:Wx,RedFormat:yh,RedIntegerFormat:dl,ReinhardToneMapping:C_,RenderTarget:J_,RepeatWrapping:Xa,ReplaceStencilOp:PS,ReverseSubtractEquation:c_,RingGeometry:zh,SIGNED_RED_GREEN_RGTC2_Format:lh,SIGNED_RED_RGTC1_Format:oh,SRGBColorSpace:jn,SRGBTransfer:Vt,Scene:Kp,ShaderChunk:_t,ShaderLib:Ri,ShaderMaterial:ci,ShadowMaterial:Ex,Shape:er,ShapeGeometry:kh,ShapePath:y2,ShapeUtils:tr,ShortType:Lp,Skeleton:Ph,SkeletonHelper:a2,SkinnedMesh:$p,Source:Cs,Sphere:_n,SphereGeometry:jo,Spherical:i2,SphericalHarmonics3:Xx,SplineCurve:lm,SpotLight:kx,SpotLightHelper:o2,Sprite:ux,SpriteMaterial:Qp,SrcAlphaFactor:Cu,SrcAlphaSaturateFactor:y_,SrcColorFactor:p_,StaticCopyUsage:jS,StaticDrawUsage:Qa,StaticReadUsage:XS,StereoCamera:Ob,StreamCopyUsage:JS,StreamDrawUsage:WS,StreamReadUsage:qS,StringKeyframeTrack:Gs,SubtractEquation:l_,SubtractiveBlending:hp,TOUCH:vS,TangentSpaceNormalMap:$r,TetrahedronGeometry:Hh,Texture:$t,TextureLoader:Cb,TextureUtils:ST,TorusGeometry:Vh,TorusKnotGeometry:Gh,Triangle:Zn,TriangleFanDrawMode:TS,TriangleStripDrawMode:AS,TrianglesDrawMode:ES,TubeGeometry:Wh,UVMapping:gh,Uint16BufferAttribute:Xp,Uint32BufferAttribute:Yp,Uint8BufferAttribute:UM,Uint8ClampedBufferAttribute:NM,Uniform:ym,UniformsGroup:t2,UniformsLib:Ce,UniformsUtils:tl,UnsignedByteType:Ui,UnsignedInt248Type:Os,UnsignedInt5999Type:Dp,UnsignedIntType:wr,UnsignedShort4444Type:_h,UnsignedShort5551Type:xh,UnsignedShortType:Fo,VSMShadowMap:bi,Vector2:ce,Vector3:D,Vector4:wt,VectorKeyframeTrack:al,VideoTexture:HT,WebGL3DRenderTarget:MM,WebGLArrayRenderTarget:SM,WebGLCoordinateSystem:Ki,WebGLCubeRenderTarget:ex,WebGLMultipleRenderTargets:M2,WebGLRenderTarget:Ni,WebGLRenderer:lx,WebGLUtils:ox,WebGPUCoordinateSystem:$a,WireframeGeometry:cm,WrapAroundEnding:ja,ZeroCurvatureEnding:Ts,ZeroFactor:f_,ZeroSlopeEnding:bs,ZeroStencilOp:RS,createCanvasElement:j_},Symbol.toStringTag,{value:"Module"}));var ey={exports:{}},Ws={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Ws.ConcurrentRoot=1;Ws.ContinuousEventPriority=4;Ws.DefaultEventPriority=16;Ws.DiscreteEventPriority=1;Ws.IdleEventPriority=536870912;Ws.LegacyRoot=0;ey.exports=Ws;var Do=ey.exports,ty={exports:{}};/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w2=function(e){var t={},n=Ee,i=lp,s=Object.assign;function a(o){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+o,d=1;d<arguments.length;d++)l+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+o+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),x=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),U=Symbol.iterator;function P(o){return o===null||typeof o!="object"?null:(o=U&&o[U]||o["@@iterator"],typeof o=="function"?o:null)}function L(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case f:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case y:return"Suspense";case _:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case x:return(o.displayName||"Context")+".Consumer";case g:return(o._context.displayName||"Context")+".Provider";case w:var l=o.render;return o=o.displayName,o||(o=l.displayName||l.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case E:return l=o.displayName||null,l!==null?l:L(o.type)||"Memo";case M:l=o._payload,o=o._init;try{return L(o(l))}catch{}}return null}function B(o){var l=o.type;switch(o.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=l.render,o=o.displayName||o.name||"",l.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return L(l);case 8:return l===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function z(o){var l=o,d=o;if(o.alternate)for(;l.return;)l=l.return;else{o=l;do l=o,l.flags&4098&&(d=l.return),o=l.return;while(o)}return l.tag===3?d:null}function b(o){if(z(o)!==o)throw Error(a(188))}function C(o){var l=o.alternate;if(!l){if(l=z(o),l===null)throw Error(a(188));return l!==o?null:o}for(var d=o,v=l;;){var S=d.return;if(S===null)break;var T=S.alternate;if(T===null){if(v=S.return,v!==null){d=v;continue}break}if(S.child===T.child){for(T=S.child;T;){if(T===d)return b(S),o;if(T===v)return b(S),l;T=T.sibling}throw Error(a(188))}if(d.return!==v.return)d=S,v=T;else{for(var F=!1,k=S.child;k;){if(k===d){F=!0,d=S,v=T;break}if(k===v){F=!0,v=S,d=T;break}k=k.sibling}if(!F){for(k=T.child;k;){if(k===d){F=!0,d=T,v=S;break}if(k===v){F=!0,v=T,d=S;break}k=k.sibling}if(!F)throw Error(a(189))}}if(d.alternate!==v)throw Error(a(190))}if(d.tag!==3)throw Error(a(188));return d.stateNode.current===d?o:l}function Y(o){return o=C(o),o!==null?j(o):null}function j(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var l=j(o);if(l!==null)return l;o=o.sibling}return null}function Q(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){if(o.tag!==4){var l=Q(o);if(l!==null)return l}o=o.sibling}return null}var re=Array.isArray,Z=e.getPublicInstance,he=e.getRootHostContext,ee=e.getChildHostContext,Ae=e.prepareForCommit,me=e.resetAfterCommit,ve=e.createInstance,st=e.appendInitialChild,Je=e.finalizeInitialChildren,se=e.prepareUpdate,de=e.shouldSetTextContent,Oe=e.createTextInstance,Te=e.scheduleTimeout,tt=e.cancelTimeout,nt=e.noTimeout,je=e.isPrimaryRenderer,Re=e.supportsMutation,le=e.supportsPersistence,N=e.supportsHydration,Me=e.getInstanceFromNode,xe=e.preparePortalMount,pe=e.getCurrentEventPriority,ye=e.detachDeletedInstance,Ze=e.supportsMicrotasks,Ie=e.scheduleMicrotask,O=e.supportsTestSelectors,R=e.findFiberRoot,q=e.getBoundingRect,oe=e.getTextContent,ue=e.isHiddenSubtree,ae=e.matchAccessibilityRole,Ye=e.setFocusIfFocusable,we=e.setupIntersectionObserver,ze=e.appendChild,Et=e.appendChildToContainer,ge=e.commitTextUpdate,ke=e.commitMount,ut=e.commitUpdate,ht=e.insertBefore,He=e.insertInContainerBefore,At=e.removeChild,dt=e.removeChildFromContainer,Bt=e.resetTextContent,H=e.hideInstance,Fe=e.hideTextInstance,ne=e.unhideInstance,fe=e.unhideTextInstance,De=e.clearContainer,Be=e.cloneInstance,Tt=e.createContainerChildSet,qt=e.appendChildToContainerChildSet,En=e.finalizeContainerChildren,bt=e.replaceContainerChildren,xn=e.cloneHiddenInstance,ui=e.cloneHiddenTextInstance,Al=e.canHydrateInstance,Tl=e.canHydrateTextInstance,rr=e.canHydrateSuspenseInstance,Ys=e.isSuspenseInstancePending,qs=e.isSuspenseInstanceFallback,bl=e.registerSuspenseInstanceRetry,Bi=e.getNextHydratableSibling,Cl=e.getFirstHydratableChild,js=e.getFirstHydratableChildWithinContainer,Rl=e.getFirstHydratableChildWithinSuspenseInstance,Pl=e.hydrateInstance,jh=e.hydrateTextInstance,Zh=e.hydrateSuspenseInstance,Jh=e.getNextHydratableInstanceAfterSuspenseInstance,I=e.commitHydratedContainer,G=e.commitHydratedSuspenseInstance,K=e.clearSuspenseBoundary,$=e.clearSuspenseBoundaryFromContainer,X=e.shouldDeleteUnhydratedTailInstances,Se=e.didNotMatchHydratedContainerTextInstance,Ue=e.didNotMatchHydratedTextInstance,Ve;function Ge(o){if(Ve===void 0)try{throw Error()}catch(d){var l=d.stack.trim().match(/\n( *(at )?)/);Ve=l&&l[1]||""}return`
`+Ve+o}var lt=!1;function ct(o,l){if(!o||lt)return"";lt=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(_e){var v=_e}Reflect.construct(o,[],l)}else{try{l.call()}catch(_e){v=_e}o.call(l.prototype)}else{try{throw Error()}catch(_e){v=_e}o()}}catch(_e){if(_e&&v&&typeof _e.stack=="string"){for(var S=_e.stack.split(`
`),T=v.stack.split(`
`),F=S.length-1,k=T.length-1;1<=F&&0<=k&&S[F]!==T[k];)k--;for(;1<=F&&0<=k;F--,k--)if(S[F]!==T[k]){if(F!==1||k!==1)do if(F--,k--,0>k||S[F]!==T[k]){var ie=`
`+S[F].replace(" at new "," at ");return o.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",o.displayName)),ie}while(1<=F&&0<=k);break}}}finally{lt=!1,Error.prepareStackTrace=d}return(o=o?o.displayName||o.name:"")?Ge(o):""}var Ke=Object.prototype.hasOwnProperty,Rt=[],Lt=-1;function Ft(o){return{current:o}}function St(o){0>Lt||(o.current=Rt[Lt],Rt[Lt]=null,Lt--)}function $e(o,l){Lt++,Rt[Lt]=o.current,o.current=l}var Xe={},Ct=Ft(Xe),ft=Ft(!1),ln=Xe;function $n(o,l){var d=o.type.contextTypes;if(!d)return Xe;var v=o.stateNode;if(v&&v.__reactInternalMemoizedUnmaskedChildContext===l)return v.__reactInternalMemoizedMaskedChildContext;var S={},T;for(T in d)S[T]=l[T];return v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=l,o.__reactInternalMemoizedMaskedChildContext=S),S}function kt(o){return o=o.childContextTypes,o!=null}function Cr(){St(ft),St(Ct)}function Wt(o,l,d){if(Ct.current!==Xe)throw Error(a(168));$e(Ct,l),$e(ft,d)}function Si(o,l,d){var v=o.stateNode;if(l=l.childContextTypes,typeof v.getChildContext!="function")return d;v=v.getChildContext();for(var S in v)if(!(S in l))throw Error(a(108,B(o)||"Unknown",S));return s({},d,v)}function Rr(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||Xe,ln=Ct.current,$e(Ct,o),$e(ft,ft.current),!0}function Nn(o,l,d){var v=o.stateNode;if(!v)throw Error(a(169));d?(o=Si(o,l,ln),v.__reactInternalMemoizedMergedChildContext=o,St(ft),St(Ct),$e(Ct,o)):St(ft),$e(ft,d)}var On=Math.clz32?Math.clz32:xy,Kh=Math.log,Il=Math.LN2;function xy(o){return o>>>=0,o===0?32:31-(Kh(o)/Il|0)|0}var Ll=64,Dl=4194304;function Zo(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function Ul(o,l){var d=o.pendingLanes;if(d===0)return 0;var v=0,S=o.suspendedLanes,T=o.pingedLanes,F=d&268435455;if(F!==0){var k=F&~S;k!==0?v=Zo(k):(T&=F,T!==0&&(v=Zo(T)))}else F=d&~S,F!==0?v=Zo(F):T!==0&&(v=Zo(T));if(v===0)return 0;if(l!==0&&l!==v&&!(l&S)&&(S=v&-v,T=l&-l,S>=T||S===16&&(T&4194240)!==0))return l;if(v&4&&(v|=d&16),l=o.entangledLanes,l!==0)for(o=o.entanglements,l&=v;0<l;)d=31-On(l),S=1<<d,v|=o[d],l&=~S;return v}function yy(o,l){switch(o){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sy(o,l){for(var d=o.suspendedLanes,v=o.pingedLanes,S=o.expirationTimes,T=o.pendingLanes;0<T;){var F=31-On(T),k=1<<F,ie=S[F];ie===-1?(!(k&d)||k&v)&&(S[F]=yy(k,l)):ie<=l&&(o.expiredLanes|=k),T&=~k}}function Qh(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function $h(o){for(var l=[],d=0;31>d;d++)l.push(o);return l}function Jo(o,l,d){o.pendingLanes|=l,l!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,l=31-On(l),o[l]=d}function My(o,l){var d=o.pendingLanes&~l;o.pendingLanes=l,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=l,o.mutableReadLanes&=l,o.entangledLanes&=l,l=o.entanglements;var v=o.eventTimes;for(o=o.expirationTimes;0<d;){var S=31-On(d),T=1<<S;l[S]=0,v[S]=-1,o[S]=-1,d&=~T}}function ef(o,l){var d=o.entangledLanes|=l;for(o=o.entanglements;d;){var v=31-On(d),S=1<<v;S&l|o[v]&l&&(o[v]|=l),d&=~S}}var Dt=0;function bm(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var tf=i.unstable_scheduleCallback,Cm=i.unstable_cancelCallback,wy=i.unstable_shouldYield,Ey=i.unstable_requestPaint,fn=i.unstable_now,nf=i.unstable_ImmediatePriority,Ay=i.unstable_UserBlockingPriority,rf=i.unstable_NormalPriority,Ty=i.unstable_IdlePriority,Nl=null,zi=null;function by(o){if(zi&&typeof zi.onCommitFiberRoot=="function")try{zi.onCommitFiberRoot(Nl,o,void 0,(o.current.flags&128)===128)}catch{}}function Cy(o,l){return o===l&&(o!==0||1/o===1/l)||o!==o&&l!==l}var ki=typeof Object.is=="function"?Object.is:Cy,sr=null,Ol=!1,sf=!1;function Rm(o){sr===null?sr=[o]:sr.push(o)}function Ry(o){Ol=!0,Rm(o)}function Hi(){if(!sf&&sr!==null){sf=!0;var o=0,l=Dt;try{var d=sr;for(Dt=1;o<d.length;o++){var v=d[o];do v=v(!0);while(v!==null)}sr=null,Ol=!1}catch(S){throw sr!==null&&(sr=sr.slice(o+1)),tf(nf,Hi),S}finally{Dt=l,sf=!1}}return null}var Py=c.ReactCurrentBatchConfig;function Fl(o,l){if(ki(o,l))return!0;if(typeof o!="object"||o===null||typeof l!="object"||l===null)return!1;var d=Object.keys(o),v=Object.keys(l);if(d.length!==v.length)return!1;for(v=0;v<d.length;v++){var S=d[v];if(!Ke.call(l,S)||!ki(o[S],l[S]))return!1}return!0}function Iy(o){switch(o.tag){case 5:return Ge(o.type);case 16:return Ge("Lazy");case 13:return Ge("Suspense");case 19:return Ge("SuspenseList");case 0:case 2:case 15:return o=ct(o.type,!1),o;case 11:return o=ct(o.type.render,!1),o;case 1:return o=ct(o.type,!0),o;default:return""}}function Mi(o,l){if(o&&o.defaultProps){l=s({},l),o=o.defaultProps;for(var d in o)l[d]===void 0&&(l[d]=o[d]);return l}return l}var Bl=Ft(null),zl=null,Zs=null,of=null;function af(){of=Zs=zl=null}function Pm(o,l,d){je?($e(Bl,l._currentValue),l._currentValue=d):($e(Bl,l._currentValue2),l._currentValue2=d)}function lf(o){var l=Bl.current;St(Bl),je?o._currentValue=l:o._currentValue2=l}function cf(o,l,d){for(;o!==null;){var v=o.alternate;if((o.childLanes&l)!==l?(o.childLanes|=l,v!==null&&(v.childLanes|=l)):v!==null&&(v.childLanes&l)!==l&&(v.childLanes|=l),o===d)break;o=o.return}}function Js(o,l){zl=o,of=Zs=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&l&&(ni=!0),o.firstContext=null)}function hi(o){var l=je?o._currentValue:o._currentValue2;if(of!==o)if(o={context:o,memoizedValue:l,next:null},Zs===null){if(zl===null)throw Error(a(308));Zs=o,zl.dependencies={lanes:0,firstContext:o}}else Zs=Zs.next=o;return l}var Vi=null,Pr=!1;function uf(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Im(o,l){o=o.updateQueue,l.updateQueue===o&&(l.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function or(o,l){return{eventTime:o,lane:l,tag:0,payload:null,callback:null,next:null}}function Ir(o,l){var d=o.updateQueue;d!==null&&(d=d.shared,nn!==null&&o.mode&1&&!(Mt&2)?(o=d.interleaved,o===null?(l.next=l,Vi===null?Vi=[d]:Vi.push(d)):(l.next=o.next,o.next=l),d.interleaved=l):(o=d.pending,o===null?l.next=l:(l.next=o.next,o.next=l),d.pending=l))}function kl(o,l,d){if(l=l.updateQueue,l!==null&&(l=l.shared,(d&4194240)!==0)){var v=l.lanes;v&=o.pendingLanes,d|=v,l.lanes=d,ef(o,d)}}function Lm(o,l){var d=o.updateQueue,v=o.alternate;if(v!==null&&(v=v.updateQueue,d===v)){var S=null,T=null;if(d=d.firstBaseUpdate,d!==null){do{var F={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};T===null?S=T=F:T=T.next=F,d=d.next}while(d!==null);T===null?S=T=l:T=T.next=l}else S=T=l;d={baseState:v.baseState,firstBaseUpdate:S,lastBaseUpdate:T,shared:v.shared,effects:v.effects},o.updateQueue=d;return}o=d.lastBaseUpdate,o===null?d.firstBaseUpdate=l:o.next=l,d.lastBaseUpdate=l}function Hl(o,l,d,v){var S=o.updateQueue;Pr=!1;var T=S.firstBaseUpdate,F=S.lastBaseUpdate,k=S.shared.pending;if(k!==null){S.shared.pending=null;var ie=k,_e=ie.next;ie.next=null,F===null?T=_e:F.next=_e,F=ie;var We=o.alternate;We!==null&&(We=We.updateQueue,k=We.lastBaseUpdate,k!==F&&(k===null?We.firstBaseUpdate=_e:k.next=_e,We.lastBaseUpdate=ie))}if(T!==null){var pt=S.baseState;F=0,We=_e=ie=null,k=T;do{var ot=k.lane,Ht=k.eventTime;if((v&ot)===ot){We!==null&&(We=We.next={eventTime:Ht,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var et=o,Cn=k;switch(ot=l,Ht=d,Cn.tag){case 1:if(et=Cn.payload,typeof et=="function"){pt=et.call(Ht,pt,ot);break e}pt=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=Cn.payload,ot=typeof et=="function"?et.call(Ht,pt,ot):et,ot==null)break e;pt=s({},pt,ot);break e;case 2:Pr=!0}}k.callback!==null&&k.lane!==0&&(o.flags|=64,ot=S.effects,ot===null?S.effects=[k]:ot.push(k))}else Ht={eventTime:Ht,lane:ot,tag:k.tag,payload:k.payload,callback:k.callback,next:null},We===null?(_e=We=Ht,ie=pt):We=We.next=Ht,F|=ot;if(k=k.next,k===null){if(k=S.shared.pending,k===null)break;ot=k,k=ot.next,ot.next=null,S.lastBaseUpdate=ot,S.shared.pending=null}}while(!0);if(We===null&&(ie=pt),S.baseState=ie,S.firstBaseUpdate=_e,S.lastBaseUpdate=We,l=S.shared.interleaved,l!==null){S=l;do F|=S.lane,S=S.next;while(S!==l)}else T===null&&(S.shared.lanes=0);so|=F,o.lanes=F,o.memoizedState=pt}}function Dm(o,l,d){if(o=l.effects,l.effects=null,o!==null)for(l=0;l<o.length;l++){var v=o[l],S=v.callback;if(S!==null){if(v.callback=null,v=d,typeof S!="function")throw Error(a(191,S));S.call(v)}}}var Um=new n.Component().refs;function hf(o,l,d,v){l=o.memoizedState,d=d(v,l),d=d==null?l:s({},l,d),o.memoizedState=d,o.lanes===0&&(o.updateQueue.baseState=d)}var Vl={isMounted:function(o){return(o=o._reactInternals)?z(o)===o:!1},enqueueSetState:function(o,l,d){o=o._reactInternals;var v=Bn(),S=Ur(o),T=or(v,S);T.payload=l,d!=null&&(T.callback=d),Ir(o,T),l=gi(o,S,v),l!==null&&kl(l,o,S)},enqueueReplaceState:function(o,l,d){o=o._reactInternals;var v=Bn(),S=Ur(o),T=or(v,S);T.tag=1,T.payload=l,d!=null&&(T.callback=d),Ir(o,T),l=gi(o,S,v),l!==null&&kl(l,o,S)},enqueueForceUpdate:function(o,l){o=o._reactInternals;var d=Bn(),v=Ur(o),S=or(d,v);S.tag=2,l!=null&&(S.callback=l),Ir(o,S),l=gi(o,v,d),l!==null&&kl(l,o,v)}};function Nm(o,l,d,v,S,T,F){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(v,T,F):l.prototype&&l.prototype.isPureReactComponent?!Fl(d,v)||!Fl(S,T):!0}function Om(o,l,d){var v=!1,S=Xe,T=l.contextType;return typeof T=="object"&&T!==null?T=hi(T):(S=kt(l)?ln:Ct.current,v=l.contextTypes,T=(v=v!=null)?$n(o,S):Xe),l=new l(d,T),o.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Vl,o.stateNode=l,l._reactInternals=o,v&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=S,o.__reactInternalMemoizedMaskedChildContext=T),l}function Fm(o,l,d,v){o=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(d,v),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(d,v),l.state!==o&&Vl.enqueueReplaceState(l,l.state,null)}function ff(o,l,d,v){var S=o.stateNode;S.props=d,S.state=o.memoizedState,S.refs=Um,uf(o);var T=l.contextType;typeof T=="object"&&T!==null?S.context=hi(T):(T=kt(l)?ln:Ct.current,S.context=$n(o,T)),S.state=o.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(hf(o,l,T,d),S.state=o.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(l=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),l!==S.state&&Vl.enqueueReplaceState(S,S.state,null),Hl(o,d,S,v),S.state=o.memoizedState),typeof S.componentDidMount=="function"&&(o.flags|=4194308)}var Ks=[],Qs=0,Gl=null,Wl=0,fi=[],di=0,ns=null,ar=1,lr="";function is(o,l){Ks[Qs++]=Wl,Ks[Qs++]=Gl,Gl=o,Wl=l}function Bm(o,l,d){fi[di++]=ar,fi[di++]=lr,fi[di++]=ns,ns=o;var v=ar;o=lr;var S=32-On(v)-1;v&=~(1<<S),d+=1;var T=32-On(l)+S;if(30<T){var F=S-S%5;T=(v&(1<<F)-1).toString(32),v>>=F,S-=F,ar=1<<32-On(l)+S|d<<S|v,lr=T+o}else ar=1<<T|d<<S|v,lr=o}function df(o){o.return!==null&&(is(o,1),Bm(o,1,0))}function pf(o){for(;o===Gl;)Gl=Ks[--Qs],Ks[Qs]=null,Wl=Ks[--Qs],Ks[Qs]=null;for(;o===ns;)ns=fi[--di],fi[di]=null,lr=fi[--di],fi[di]=null,ar=fi[--di],fi[di]=null}var ei=null,ti=null,Xt=!1,Ko=!1,wi=null;function zm(o,l){var d=vi(5,null,null,0);d.elementType="DELETED",d.stateNode=l,d.return=o,l=o.deletions,l===null?(o.deletions=[d],o.flags|=16):l.push(d)}function km(o,l){switch(o.tag){case 5:return l=Al(l,o.type,o.pendingProps),l!==null?(o.stateNode=l,ei=o,ti=Cl(l),!0):!1;case 6:return l=Tl(l,o.pendingProps),l!==null?(o.stateNode=l,ei=o,ti=null,!0):!1;case 13:if(l=rr(l),l!==null){var d=ns!==null?{id:ar,overflow:lr}:null;return o.memoizedState={dehydrated:l,treeContext:d,retryLane:1073741824},d=vi(18,null,null,0),d.stateNode=l,d.return=o,o.child=d,ei=o,ti=null,!0}return!1;default:return!1}}function mf(o){return(o.mode&1)!==0&&(o.flags&128)===0}function gf(o){if(Xt){var l=ti;if(l){var d=l;if(!km(o,l)){if(mf(o))throw Error(a(418));l=Bi(d);var v=ei;l&&km(o,l)?zm(v,d):(o.flags=o.flags&-4097|2,Xt=!1,ei=o)}}else{if(mf(o))throw Error(a(418));o.flags=o.flags&-4097|2,Xt=!1,ei=o}}}function Hm(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;ei=o}function Qo(o){if(!N||o!==ei)return!1;if(!Xt)return Hm(o),Xt=!0,!1;if(o.tag!==3&&(o.tag!==5||X(o.type)&&!de(o.type,o.memoizedProps))){var l=ti;if(l){if(mf(o)){for(o=ti;o;)o=Bi(o);throw Error(a(418))}for(;l;)zm(o,l),l=Bi(l)}}if(Hm(o),o.tag===13){if(!N)throw Error(a(316));if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));ti=Jh(o)}else ti=ei?Bi(o.stateNode):null;return!0}function $s(){N&&(ti=ei=null,Ko=Xt=!1)}function vf(o){wi===null?wi=[o]:wi.push(o)}function $o(o,l,d){if(o=d.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(a(309));var v=d.stateNode}if(!v)throw Error(a(147,o));var S=v,T=""+o;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===T?l.ref:(l=function(F){var k=S.refs;k===Um&&(k=S.refs={}),F===null?delete k[T]:k[T]=F},l._stringRef=T,l)}if(typeof o!="string")throw Error(a(284));if(!d._owner)throw Error(a(290,o))}return o}function Xl(o,l){throw o=Object.prototype.toString.call(l),Error(a(31,o==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":o))}function Vm(o){var l=o._init;return l(o._payload)}function Gm(o){function l(J,W){if(o){var te=J.deletions;te===null?(J.deletions=[W],J.flags|=16):te.push(W)}}function d(J,W){if(!o)return null;for(;W!==null;)l(J,W),W=W.sibling;return null}function v(J,W){for(J=new Map;W!==null;)W.key!==null?J.set(W.key,W):J.set(W.index,W),W=W.sibling;return J}function S(J,W){return J=Or(J,W),J.index=0,J.sibling=null,J}function T(J,W,te){return J.index=te,o?(te=J.alternate,te!==null?(te=te.index,te<W?(J.flags|=2,W):te):(J.flags|=2,W)):(J.flags|=1048576,W)}function F(J){return o&&J.alternate===null&&(J.flags|=2),J}function k(J,W,te,Le){return W===null||W.tag!==6?(W=ed(te,J.mode,Le),W.return=J,W):(W=S(W,te),W.return=J,W)}function ie(J,W,te,Le){var Qe=te.type;return Qe===f?We(J,W,te.props.children,Le,te.key):W!==null&&(W.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===M&&Vm(Qe)===W.type)?(Le=S(W,te.props),Le.ref=$o(J,W,te),Le.return=J,Le):(Le=Mc(te.type,te.key,te.props,null,J.mode,Le),Le.ref=$o(J,W,te),Le.return=J,Le)}function _e(J,W,te,Le){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=td(te,J.mode,Le),W.return=J,W):(W=S(W,te.children||[]),W.return=J,W)}function We(J,W,te,Le,Qe){return W===null||W.tag!==7?(W=us(te,J.mode,Le,Qe),W.return=J,W):(W=S(W,te),W.return=J,W)}function pt(J,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=ed(""+W,J.mode,te),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case u:return te=Mc(W.type,W.key,W.props,null,J.mode,te),te.ref=$o(J,null,W),te.return=J,te;case h:return W=td(W,J.mode,te),W.return=J,W;case M:var Le=W._init;return pt(J,Le(W._payload),te)}if(re(W)||P(W))return W=us(W,J.mode,te,null),W.return=J,W;Xl(J,W)}return null}function ot(J,W,te,Le){var Qe=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Qe!==null?null:k(J,W,""+te,Le);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case u:return te.key===Qe?ie(J,W,te,Le):null;case h:return te.key===Qe?_e(J,W,te,Le):null;case M:return Qe=te._init,ot(J,W,Qe(te._payload),Le)}if(re(te)||P(te))return Qe!==null?null:We(J,W,te,Le,null);Xl(J,te)}return null}function Ht(J,W,te,Le,Qe){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return J=J.get(te)||null,k(W,J,""+Le,Qe);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case u:return J=J.get(Le.key===null?te:Le.key)||null,ie(W,J,Le,Qe);case h:return J=J.get(Le.key===null?te:Le.key)||null,_e(W,J,Le,Qe);case M:var xt=Le._init;return Ht(J,W,te,xt(Le._payload),Qe)}if(re(Le)||P(Le))return J=J.get(te)||null,We(W,J,Le,Qe,null);Xl(W,Le)}return null}function et(J,W,te,Le){for(var Qe=null,xt=null,mt=W,Ut=W=0,pn=null;mt!==null&&Ut<te.length;Ut++){mt.index>Ut?(pn=mt,mt=null):pn=mt.sibling;var Nt=ot(J,mt,te[Ut],Le);if(Nt===null){mt===null&&(mt=pn);break}o&&mt&&Nt.alternate===null&&l(J,mt),W=T(Nt,W,Ut),xt===null?Qe=Nt:xt.sibling=Nt,xt=Nt,mt=pn}if(Ut===te.length)return d(J,mt),Xt&&is(J,Ut),Qe;if(mt===null){for(;Ut<te.length;Ut++)mt=pt(J,te[Ut],Le),mt!==null&&(W=T(mt,W,Ut),xt===null?Qe=mt:xt.sibling=mt,xt=mt);return Xt&&is(J,Ut),Qe}for(mt=v(J,mt);Ut<te.length;Ut++)pn=Ht(mt,J,Ut,te[Ut],Le),pn!==null&&(o&&pn.alternate!==null&&mt.delete(pn.key===null?Ut:pn.key),W=T(pn,W,Ut),xt===null?Qe=pn:xt.sibling=pn,xt=pn);return o&&mt.forEach(function(Fr){return l(J,Fr)}),Xt&&is(J,Ut),Qe}function Cn(J,W,te,Le){var Qe=P(te);if(typeof Qe!="function")throw Error(a(150));if(te=Qe.call(te),te==null)throw Error(a(151));for(var xt=Qe=null,mt=W,Ut=W=0,pn=null,Nt=te.next();mt!==null&&!Nt.done;Ut++,Nt=te.next()){mt.index>Ut?(pn=mt,mt=null):pn=mt.sibling;var Fr=ot(J,mt,Nt.value,Le);if(Fr===null){mt===null&&(mt=pn);break}o&&mt&&Fr.alternate===null&&l(J,mt),W=T(Fr,W,Ut),xt===null?Qe=Fr:xt.sibling=Fr,xt=Fr,mt=pn}if(Nt.done)return d(J,mt),Xt&&is(J,Ut),Qe;if(mt===null){for(;!Nt.done;Ut++,Nt=te.next())Nt=pt(J,Nt.value,Le),Nt!==null&&(W=T(Nt,W,Ut),xt===null?Qe=Nt:xt.sibling=Nt,xt=Nt);return Xt&&is(J,Ut),Qe}for(mt=v(J,mt);!Nt.done;Ut++,Nt=te.next())Nt=Ht(mt,J,Ut,Nt.value,Le),Nt!==null&&(o&&Nt.alternate!==null&&mt.delete(Nt.key===null?Ut:Nt.key),W=T(Nt,W,Ut),xt===null?Qe=Nt:xt.sibling=Nt,xt=Nt);return o&&mt.forEach(function(aS){return l(J,aS)}),Xt&&is(J,Ut),Qe}function _i(J,W,te,Le){if(typeof te=="object"&&te!==null&&te.type===f&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case u:e:{for(var Qe=te.key,xt=W;xt!==null;){if(xt.key===Qe){if(Qe=te.type,Qe===f){if(xt.tag===7){d(J,xt.sibling),W=S(xt,te.props.children),W.return=J,J=W;break e}}else if(xt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===M&&Vm(Qe)===xt.type){d(J,xt.sibling),W=S(xt,te.props),W.ref=$o(J,xt,te),W.return=J,J=W;break e}d(J,xt);break}else l(J,xt);xt=xt.sibling}te.type===f?(W=us(te.props.children,J.mode,Le,te.key),W.return=J,J=W):(Le=Mc(te.type,te.key,te.props,null,J.mode,Le),Le.ref=$o(J,W,te),Le.return=J,J=Le)}return F(J);case h:e:{for(xt=te.key;W!==null;){if(W.key===xt)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){d(J,W.sibling),W=S(W,te.children||[]),W.return=J,J=W;break e}else{d(J,W);break}else l(J,W);W=W.sibling}W=td(te,J.mode,Le),W.return=J,J=W}return F(J);case M:return xt=te._init,_i(J,W,xt(te._payload),Le)}if(re(te))return et(J,W,te,Le);if(P(te))return Cn(J,W,te,Le);Xl(J,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(d(J,W.sibling),W=S(W,te),W.return=J,J=W):(d(J,W),W=ed(te,J.mode,Le),W.return=J,J=W),F(J)):d(J,W)}return _i}var eo=Gm(!0),Wm=Gm(!1),ea={},pi=Ft(ea),ta=Ft(ea),to=Ft(ea);function Gi(o){if(o===ea)throw Error(a(174));return o}function _f(o,l){$e(to,l),$e(ta,o),$e(pi,ea),o=he(l),St(pi),$e(pi,o)}function no(){St(pi),St(ta),St(to)}function Xm(o){var l=Gi(to.current),d=Gi(pi.current);l=ee(d,o.type,l),d!==l&&($e(ta,o),$e(pi,l))}function xf(o){ta.current===o&&(St(pi),St(ta))}var jt=Ft(0);function Yl(o){for(var l=o;l!==null;){if(l.tag===13){var d=l.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||Ys(d)||qs(d)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var yf=[];function Sf(){for(var o=0;o<yf.length;o++){var l=yf[o];je?l._workInProgressVersionPrimary=null:l._workInProgressVersionSecondary=null}yf.length=0}var ql=c.ReactCurrentDispatcher,mi=c.ReactCurrentBatchConfig,io=0,Jt=null,An=null,dn=null,jl=!1,na=!1,ia=0,Ly=0;function Tn(){throw Error(a(321))}function Mf(o,l){if(l===null)return!1;for(var d=0;d<l.length&&d<o.length;d++)if(!ki(o[d],l[d]))return!1;return!0}function wf(o,l,d,v,S,T){if(io=T,Jt=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,ql.current=o===null||o.memoizedState===null?Oy:Fy,o=d(v,S),na){T=0;do{if(na=!1,ia=0,25<=T)throw Error(a(301));T+=1,dn=An=null,l.updateQueue=null,ql.current=By,o=d(v,S)}while(na)}if(ql.current=$l,l=An!==null&&An.next!==null,io=0,dn=An=Jt=null,jl=!1,l)throw Error(a(300));return o}function Ef(){var o=ia!==0;return ia=0,o}function cr(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Jt.memoizedState=dn=o:dn=dn.next=o,dn}function Wi(){if(An===null){var o=Jt.alternate;o=o!==null?o.memoizedState:null}else o=An.next;var l=dn===null?Jt.memoizedState:dn.next;if(l!==null)dn=l,An=o;else{if(o===null)throw Error(a(310));An=o,o={memoizedState:An.memoizedState,baseState:An.baseState,baseQueue:An.baseQueue,queue:An.queue,next:null},dn===null?Jt.memoizedState=dn=o:dn=dn.next=o}return dn}function rs(o,l){return typeof l=="function"?l(o):l}function Zl(o){var l=Wi(),d=l.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=o;var v=An,S=v.baseQueue,T=d.pending;if(T!==null){if(S!==null){var F=S.next;S.next=T.next,T.next=F}v.baseQueue=S=T,d.pending=null}if(S!==null){T=S.next,v=v.baseState;var k=F=null,ie=null,_e=T;do{var We=_e.lane;if((io&We)===We)ie!==null&&(ie=ie.next={lane:0,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null}),v=_e.hasEagerState?_e.eagerState:o(v,_e.action);else{var pt={lane:We,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null};ie===null?(k=ie=pt,F=v):ie=ie.next=pt,Jt.lanes|=We,so|=We}_e=_e.next}while(_e!==null&&_e!==T);ie===null?F=v:ie.next=k,ki(v,l.memoizedState)||(ni=!0),l.memoizedState=v,l.baseState=F,l.baseQueue=ie,d.lastRenderedState=v}if(o=d.interleaved,o!==null){S=o;do T=S.lane,Jt.lanes|=T,so|=T,S=S.next;while(S!==o)}else S===null&&(d.lanes=0);return[l.memoizedState,d.dispatch]}function Jl(o){var l=Wi(),d=l.queue;if(d===null)throw Error(a(311));d.lastRenderedReducer=o;var v=d.dispatch,S=d.pending,T=l.memoizedState;if(S!==null){d.pending=null;var F=S=S.next;do T=o(T,F.action),F=F.next;while(F!==S);ki(T,l.memoizedState)||(ni=!0),l.memoizedState=T,l.baseQueue===null&&(l.baseState=T),d.lastRenderedState=T}return[T,v]}function Ym(){}function qm(o,l){var d=Jt,v=Wi(),S=l(),T=!ki(v.memoizedState,S);if(T&&(v.memoizedState=S,ni=!0),v=v.queue,sa(Jm.bind(null,d,v,o),[o]),v.getSnapshot!==l||T||dn!==null&&dn.memoizedState.tag&1){if(d.flags|=2048,ra(9,Zm.bind(null,d,v,S,l),void 0,null),nn===null)throw Error(a(349));io&30||jm(d,l,S)}return S}function jm(o,l,d){o.flags|=16384,o={getSnapshot:l,value:d},l=Jt.updateQueue,l===null?(l={lastEffect:null,stores:null},Jt.updateQueue=l,l.stores=[o]):(d=l.stores,d===null?l.stores=[o]:d.push(o))}function Zm(o,l,d,v){l.value=d,l.getSnapshot=v,Km(l)&&gi(o,1,-1)}function Jm(o,l,d){return d(function(){Km(l)&&gi(o,1,-1)})}function Km(o){var l=o.getSnapshot;o=o.value;try{var d=l();return!ki(o,d)}catch{return!0}}function Af(o){var l=cr();return typeof o=="function"&&(o=o()),l.memoizedState=l.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:o},l.queue=o,o=o.dispatch=Ny.bind(null,Jt,o),[l.memoizedState,o]}function ra(o,l,d,v){return o={tag:o,create:l,destroy:d,deps:v,next:null},l=Jt.updateQueue,l===null?(l={lastEffect:null,stores:null},Jt.updateQueue=l,l.lastEffect=o.next=o):(d=l.lastEffect,d===null?l.lastEffect=o.next=o:(v=d.next,d.next=o,o.next=v,l.lastEffect=o)),o}function Qm(){return Wi().memoizedState}function Kl(o,l,d,v){var S=cr();Jt.flags|=o,S.memoizedState=ra(1|l,d,void 0,v===void 0?null:v)}function Ql(o,l,d,v){var S=Wi();v=v===void 0?null:v;var T=void 0;if(An!==null){var F=An.memoizedState;if(T=F.destroy,v!==null&&Mf(v,F.deps)){S.memoizedState=ra(l,d,T,v);return}}Jt.flags|=o,S.memoizedState=ra(1|l,d,T,v)}function Tf(o,l){return Kl(8390656,8,o,l)}function sa(o,l){return Ql(2048,8,o,l)}function $m(o,l){return Ql(4,2,o,l)}function eg(o,l){return Ql(4,4,o,l)}function tg(o,l){if(typeof l=="function")return o=o(),l(o),function(){l(null)};if(l!=null)return o=o(),l.current=o,function(){l.current=null}}function ng(o,l,d){return d=d!=null?d.concat([o]):null,Ql(4,4,tg.bind(null,l,o),d)}function bf(){}function ig(o,l){var d=Wi();l=l===void 0?null:l;var v=d.memoizedState;return v!==null&&l!==null&&Mf(l,v[1])?v[0]:(d.memoizedState=[o,l],o)}function rg(o,l){var d=Wi();l=l===void 0?null:l;var v=d.memoizedState;return v!==null&&l!==null&&Mf(l,v[1])?v[0]:(o=o(),d.memoizedState=[o,l],o)}function Dy(o,l){var d=Dt;Dt=d!==0&&4>d?d:4,o(!0);var v=mi.transition;mi.transition={};try{o(!1),l()}finally{Dt=d,mi.transition=v}}function sg(){return Wi().memoizedState}function Uy(o,l,d){var v=Ur(o);d={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null},og(o)?ag(l,d):(lg(o,l,d),d=Bn(),o=gi(o,v,d),o!==null&&cg(o,l,v))}function Ny(o,l,d){var v=Ur(o),S={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null};if(og(o))ag(l,S);else{lg(o,l,S);var T=o.alternate;if(o.lanes===0&&(T===null||T.lanes===0)&&(T=l.lastRenderedReducer,T!==null))try{var F=l.lastRenderedState,k=T(F,d);if(S.hasEagerState=!0,S.eagerState=k,ki(k,F))return}catch{}finally{}d=Bn(),o=gi(o,v,d),o!==null&&cg(o,l,v)}}function og(o){var l=o.alternate;return o===Jt||l!==null&&l===Jt}function ag(o,l){na=jl=!0;var d=o.pending;d===null?l.next=l:(l.next=d.next,d.next=l),o.pending=l}function lg(o,l,d){nn!==null&&o.mode&1&&!(Mt&2)?(o=l.interleaved,o===null?(d.next=d,Vi===null?Vi=[l]:Vi.push(l)):(d.next=o.next,o.next=d),l.interleaved=d):(o=l.pending,o===null?d.next=d:(d.next=o.next,o.next=d),l.pending=d)}function cg(o,l,d){if(d&4194240){var v=l.lanes;v&=o.pendingLanes,d|=v,l.lanes=d,ef(o,d)}}var $l={readContext:hi,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},Oy={readContext:hi,useCallback:function(o,l){return cr().memoizedState=[o,l===void 0?null:l],o},useContext:hi,useEffect:Tf,useImperativeHandle:function(o,l,d){return d=d!=null?d.concat([o]):null,Kl(4194308,4,tg.bind(null,l,o),d)},useLayoutEffect:function(o,l){return Kl(4194308,4,o,l)},useInsertionEffect:function(o,l){return Kl(4,2,o,l)},useMemo:function(o,l){var d=cr();return l=l===void 0?null:l,o=o(),d.memoizedState=[o,l],o},useReducer:function(o,l,d){var v=cr();return l=d!==void 0?d(l):l,v.memoizedState=v.baseState=l,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:l},v.queue=o,o=o.dispatch=Uy.bind(null,Jt,o),[v.memoizedState,o]},useRef:function(o){var l=cr();return o={current:o},l.memoizedState=o},useState:Af,useDebugValue:bf,useDeferredValue:function(o){var l=Af(o),d=l[0],v=l[1];return Tf(function(){var S=mi.transition;mi.transition={};try{v(o)}finally{mi.transition=S}},[o]),d},useTransition:function(){var o=Af(!1),l=o[0];return o=Dy.bind(null,o[1]),cr().memoizedState=o,[l,o]},useMutableSource:function(){},useSyncExternalStore:function(o,l,d){var v=Jt,S=cr();if(Xt){if(d===void 0)throw Error(a(407));d=d()}else{if(d=l(),nn===null)throw Error(a(349));io&30||jm(v,l,d)}S.memoizedState=d;var T={value:d,getSnapshot:l};return S.queue=T,Tf(Jm.bind(null,v,T,o),[o]),v.flags|=2048,ra(9,Zm.bind(null,v,T,d,l),void 0,null),d},useId:function(){var o=cr(),l=nn.identifierPrefix;if(Xt){var d=lr,v=ar;d=(v&~(1<<32-On(v)-1)).toString(32)+d,l=":"+l+"R"+d,d=ia++,0<d&&(l+="H"+d.toString(32)),l+=":"}else d=Ly++,l=":"+l+"r"+d.toString(32)+":";return o.memoizedState=l},unstable_isNewReconciler:!1},Fy={readContext:hi,useCallback:ig,useContext:hi,useEffect:sa,useImperativeHandle:ng,useInsertionEffect:$m,useLayoutEffect:eg,useMemo:rg,useReducer:Zl,useRef:Qm,useState:function(){return Zl(rs)},useDebugValue:bf,useDeferredValue:function(o){var l=Zl(rs),d=l[0],v=l[1];return sa(function(){var S=mi.transition;mi.transition={};try{v(o)}finally{mi.transition=S}},[o]),d},useTransition:function(){var o=Zl(rs)[0],l=Wi().memoizedState;return[o,l]},useMutableSource:Ym,useSyncExternalStore:qm,useId:sg,unstable_isNewReconciler:!1},By={readContext:hi,useCallback:ig,useContext:hi,useEffect:sa,useImperativeHandle:ng,useInsertionEffect:$m,useLayoutEffect:eg,useMemo:rg,useReducer:Jl,useRef:Qm,useState:function(){return Jl(rs)},useDebugValue:bf,useDeferredValue:function(o){var l=Jl(rs),d=l[0],v=l[1];return sa(function(){var S=mi.transition;mi.transition={};try{v(o)}finally{mi.transition=S}},[o]),d},useTransition:function(){var o=Jl(rs)[0],l=Wi().memoizedState;return[o,l]},useMutableSource:Ym,useSyncExternalStore:qm,useId:sg,unstable_isNewReconciler:!1};function Cf(o,l){try{var d="",v=l;do d+=Iy(v),v=v.return;while(v);var S=d}catch(T){S=`
Error generating stack: `+T.message+`
`+T.stack}return{value:o,source:l,stack:S}}function Rf(o,l){try{console.error(l.value)}catch(d){setTimeout(function(){throw d})}}var zy=typeof WeakMap=="function"?WeakMap:Map;function ug(o,l,d){d=or(-1,d),d.tag=3,d.payload={element:null};var v=l.value;return d.callback=function(){mc||(mc=!0,qf=v),Rf(o,l)},d}function hg(o,l,d){d=or(-1,d),d.tag=3;var v=o.type.getDerivedStateFromError;if(typeof v=="function"){var S=l.value;d.payload=function(){return v(S)},d.callback=function(){Rf(o,l)}}var T=o.stateNode;return T!==null&&typeof T.componentDidCatch=="function"&&(d.callback=function(){Rf(o,l),typeof v!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var F=l.stack;this.componentDidCatch(l.value,{componentStack:F!==null?F:""})}),d}function fg(o,l,d){var v=o.pingCache;if(v===null){v=o.pingCache=new zy;var S=new Set;v.set(l,S)}else S=v.get(l),S===void 0&&(S=new Set,v.set(l,S));S.has(d)||(S.add(d),o=$y.bind(null,o,l,d),l.then(o,o))}function dg(o){do{var l;if((l=o.tag===13)&&(l=o.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return o;o=o.return}while(o!==null);return null}function pg(o,l,d,v,S){return o.mode&1?(o.flags|=65536,o.lanes=S,o):(o===l?o.flags|=65536:(o.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(l=or(-1,1),l.tag=2,Ir(d,l))),d.lanes|=1),o)}function Xi(o){o.flags|=4}function mg(o,l){if(o!==null&&o.child===l.child)return!0;if(l.flags&16)return!1;for(o=l.child;o!==null;){if(o.flags&12854||o.subtreeFlags&12854)return!1;o=o.sibling}return!0}var oa,aa,ec,tc;if(Re)oa=function(o,l){for(var d=l.child;d!==null;){if(d.tag===5||d.tag===6)st(o,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===l)break;for(;d.sibling===null;){if(d.return===null||d.return===l)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},aa=function(){},ec=function(o,l,d,v,S){if(o=o.memoizedProps,o!==v){var T=l.stateNode,F=Gi(pi.current);d=se(T,d,o,v,S,F),(l.updateQueue=d)&&Xi(l)}},tc=function(o,l,d,v){d!==v&&Xi(l)};else if(le){oa=function(o,l,d,v){for(var S=l.child;S!==null;){if(S.tag===5){var T=S.stateNode;d&&v&&(T=xn(T,S.type,S.memoizedProps,S)),st(o,T)}else if(S.tag===6)T=S.stateNode,d&&v&&(T=ui(T,S.memoizedProps,S)),st(o,T);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)T=S.child,T!==null&&(T.return=S),oa(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};var gg=function(o,l,d,v){for(var S=l.child;S!==null;){if(S.tag===5){var T=S.stateNode;d&&v&&(T=xn(T,S.type,S.memoizedProps,S)),qt(o,T)}else if(S.tag===6)T=S.stateNode,d&&v&&(T=ui(T,S.memoizedProps,S)),qt(o,T);else if(S.tag!==4){if(S.tag===22&&S.memoizedState!==null)T=S.child,T!==null&&(T.return=S),gg(o,S,!0,!0);else if(S.child!==null){S.child.return=S,S=S.child;continue}}if(S===l)break;for(;S.sibling===null;){if(S.return===null||S.return===l)return;S=S.return}S.sibling.return=S.return,S=S.sibling}};aa=function(o,l){var d=l.stateNode;if(!mg(o,l)){o=d.containerInfo;var v=Tt(o);gg(v,l,!1,!1),d.pendingChildren=v,Xi(l),En(o,v)}},ec=function(o,l,d,v,S){var T=o.stateNode,F=o.memoizedProps;if((o=mg(o,l))&&F===v)l.stateNode=T;else{var k=l.stateNode,ie=Gi(pi.current),_e=null;F!==v&&(_e=se(k,d,F,v,S,ie)),o&&_e===null?l.stateNode=T:(T=Be(T,_e,d,F,v,l,o,k),Je(T,d,v,S,ie)&&Xi(l),l.stateNode=T,o?Xi(l):oa(T,l,!1,!1))}},tc=function(o,l,d,v){d!==v?(o=Gi(to.current),d=Gi(pi.current),l.stateNode=Oe(v,o,d,l),Xi(l)):l.stateNode=o.stateNode}}else aa=function(){},ec=function(){},tc=function(){};function la(o,l){if(!Xt)switch(o.tailMode){case"hidden":l=o.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?o.tail=null:d.sibling=null;break;case"collapsed":d=o.tail;for(var v=null;d!==null;)d.alternate!==null&&(v=d),d=d.sibling;v===null?l||o.tail===null?o.tail=null:o.tail.sibling=null:v.sibling=null}}function bn(o){var l=o.alternate!==null&&o.alternate.child===o.child,d=0,v=0;if(l)for(var S=o.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags&14680064,v|=S.flags&14680064,S.return=o,S=S.sibling;else for(S=o.child;S!==null;)d|=S.lanes|S.childLanes,v|=S.subtreeFlags,v|=S.flags,S.return=o,S=S.sibling;return o.subtreeFlags|=v,o.childLanes=d,l}function ky(o,l,d){var v=l.pendingProps;switch(pf(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(l),null;case 1:return kt(l.type)&&Cr(),bn(l),null;case 3:return v=l.stateNode,no(),St(ft),St(Ct),Sf(),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),(o===null||o.child===null)&&(Qo(l)?Xi(l):o===null||o.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,wi!==null&&(Jf(wi),wi=null))),aa(o,l),bn(l),null;case 5:xf(l),d=Gi(to.current);var S=l.type;if(o!==null&&l.stateNode!=null)ec(o,l,S,v,d),o.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!v){if(l.stateNode===null)throw Error(a(166));return bn(l),null}if(o=Gi(pi.current),Qo(l)){if(!N)throw Error(a(175));o=Pl(l.stateNode,l.type,l.memoizedProps,d,o,l,!Ko),l.updateQueue=o,o!==null&&Xi(l)}else{var T=ve(S,v,d,o,l);oa(T,l,!1,!1),l.stateNode=T,Je(T,S,v,d,o)&&Xi(l)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return bn(l),null;case 6:if(o&&l.stateNode!=null)tc(o,l,o.memoizedProps,v);else{if(typeof v!="string"&&l.stateNode===null)throw Error(a(166));if(o=Gi(to.current),d=Gi(pi.current),Qo(l)){if(!N)throw Error(a(176));if(o=l.stateNode,v=l.memoizedProps,(d=jh(o,v,l,!Ko))&&(S=ei,S!==null))switch(T=(S.mode&1)!==0,S.tag){case 3:Se(S.stateNode.containerInfo,o,v,T);break;case 5:Ue(S.type,S.memoizedProps,S.stateNode,o,v,T)}d&&Xi(l)}else l.stateNode=Oe(v,o,d,l)}return bn(l),null;case 13:if(St(jt),v=l.memoizedState,Xt&&ti!==null&&l.mode&1&&!(l.flags&128)){for(o=ti;o;)o=Bi(o);return $s(),l.flags|=98560,l}if(v!==null&&v.dehydrated!==null){if(v=Qo(l),o===null){if(!v)throw Error(a(318));if(!N)throw Error(a(344));if(o=l.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));Zh(o,l)}else $s(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;return bn(l),null}return wi!==null&&(Jf(wi),wi=null),l.flags&128?(l.lanes=d,l):(v=v!==null,d=!1,o===null?Qo(l):d=o.memoizedState!==null,v&&!d&&(l.child.flags|=8192,l.mode&1&&(o===null||jt.current&1?cn===0&&(cn=3):Qf())),l.updateQueue!==null&&(l.flags|=4),bn(l),null);case 4:return no(),aa(o,l),o===null&&xe(l.stateNode.containerInfo),bn(l),null;case 10:return lf(l.type._context),bn(l),null;case 17:return kt(l.type)&&Cr(),bn(l),null;case 19:if(St(jt),S=l.memoizedState,S===null)return bn(l),null;if(v=(l.flags&128)!==0,T=S.rendering,T===null)if(v)la(S,!1);else{if(cn!==0||o!==null&&o.flags&128)for(o=l.child;o!==null;){if(T=Yl(o),T!==null){for(l.flags|=128,la(S,!1),o=T.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),l.subtreeFlags=0,o=d,v=l.child;v!==null;)d=v,S=o,d.flags&=14680066,T=d.alternate,T===null?(d.childLanes=0,d.lanes=S,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=T.childLanes,d.lanes=T.lanes,d.child=T.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=T.memoizedProps,d.memoizedState=T.memoizedState,d.updateQueue=T.updateQueue,d.type=T.type,S=T.dependencies,d.dependencies=S===null?null:{lanes:S.lanes,firstContext:S.firstContext}),v=v.sibling;return $e(jt,jt.current&1|2),l.child}o=o.sibling}S.tail!==null&&fn()>Yf&&(l.flags|=128,v=!0,la(S,!1),l.lanes=4194304)}else{if(!v)if(o=Yl(T),o!==null){if(l.flags|=128,v=!0,o=o.updateQueue,o!==null&&(l.updateQueue=o,l.flags|=4),la(S,!0),S.tail===null&&S.tailMode==="hidden"&&!T.alternate&&!Xt)return bn(l),null}else 2*fn()-S.renderingStartTime>Yf&&d!==1073741824&&(l.flags|=128,v=!0,la(S,!1),l.lanes=4194304);S.isBackwards?(T.sibling=l.child,l.child=T):(o=S.last,o!==null?o.sibling=T:l.child=T,S.last=T)}return S.tail!==null?(l=S.tail,S.rendering=l,S.tail=l.sibling,S.renderingStartTime=fn(),l.sibling=null,o=jt.current,$e(jt,v?o&1|2:o&1),l):(bn(l),null);case 22:case 23:return Kf(),v=l.memoizedState!==null,o!==null&&o.memoizedState!==null!==v&&(l.flags|=8192),v&&l.mode&1?ii&1073741824&&(bn(l),Re&&l.subtreeFlags&6&&(l.flags|=8192)):bn(l),null;case 24:return null;case 25:return null}throw Error(a(156,l.tag))}var Hy=c.ReactCurrentOwner,ni=!1;function Fn(o,l,d,v){l.child=o===null?Wm(l,null,d,v):eo(l,o.child,d,v)}function vg(o,l,d,v,S){d=d.render;var T=l.ref;return Js(l,S),v=wf(o,l,d,v,T,S),d=Ef(),o!==null&&!ni?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,ur(o,l,S)):(Xt&&d&&df(l),l.flags|=1,Fn(o,l,v,S),l.child)}function _g(o,l,d,v,S){if(o===null){var T=d.type;return typeof T=="function"&&!$f(T)&&T.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(l.tag=15,l.type=T,xg(o,l,T,v,S)):(o=Mc(d.type,null,v,l,l.mode,S),o.ref=l.ref,o.return=l,l.child=o)}if(T=o.child,!(o.lanes&S)){var F=T.memoizedProps;if(d=d.compare,d=d!==null?d:Fl,d(F,v)&&o.ref===l.ref)return ur(o,l,S)}return l.flags|=1,o=Or(T,v),o.ref=l.ref,o.return=l,l.child=o}function xg(o,l,d,v,S){if(o!==null&&Fl(o.memoizedProps,v)&&o.ref===l.ref)if(ni=!1,(o.lanes&S)!==0)o.flags&131072&&(ni=!0);else return l.lanes=o.lanes,ur(o,l,S);return Pf(o,l,d,v,S)}function yg(o,l,d){var v=l.pendingProps,S=v.children,T=o!==null?o.memoizedState:null;if(v.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null},$e(ro,ii),ii|=d;else if(d&1073741824)l.memoizedState={baseLanes:0,cachePool:null},v=T!==null?T.baseLanes:d,$e(ro,ii),ii|=v;else return o=T!==null?T.baseLanes|d:d,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:o,cachePool:null},l.updateQueue=null,$e(ro,ii),ii|=o,null;else T!==null?(v=T.baseLanes|d,l.memoizedState=null):v=d,$e(ro,ii),ii|=v;return Fn(o,l,S,d),l.child}function Sg(o,l){var d=l.ref;(o===null&&d!==null||o!==null&&o.ref!==d)&&(l.flags|=512,l.flags|=2097152)}function Pf(o,l,d,v,S){var T=kt(d)?ln:Ct.current;return T=$n(l,T),Js(l,S),d=wf(o,l,d,v,T,S),v=Ef(),o!==null&&!ni?(l.updateQueue=o.updateQueue,l.flags&=-2053,o.lanes&=~S,ur(o,l,S)):(Xt&&v&&df(l),l.flags|=1,Fn(o,l,d,S),l.child)}function Mg(o,l,d,v,S){if(kt(d)){var T=!0;Rr(l)}else T=!1;if(Js(l,S),l.stateNode===null)o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),Om(l,d,v),ff(l,d,v,S),v=!0;else if(o===null){var F=l.stateNode,k=l.memoizedProps;F.props=k;var ie=F.context,_e=d.contextType;typeof _e=="object"&&_e!==null?_e=hi(_e):(_e=kt(d)?ln:Ct.current,_e=$n(l,_e));var We=d.getDerivedStateFromProps,pt=typeof We=="function"||typeof F.getSnapshotBeforeUpdate=="function";pt||typeof F.UNSAFE_componentWillReceiveProps!="function"&&typeof F.componentWillReceiveProps!="function"||(k!==v||ie!==_e)&&Fm(l,F,v,_e),Pr=!1;var ot=l.memoizedState;F.state=ot,Hl(l,v,F,S),ie=l.memoizedState,k!==v||ot!==ie||ft.current||Pr?(typeof We=="function"&&(hf(l,d,We,v),ie=l.memoizedState),(k=Pr||Nm(l,d,k,v,ot,ie,_e))?(pt||typeof F.UNSAFE_componentWillMount!="function"&&typeof F.componentWillMount!="function"||(typeof F.componentWillMount=="function"&&F.componentWillMount(),typeof F.UNSAFE_componentWillMount=="function"&&F.UNSAFE_componentWillMount()),typeof F.componentDidMount=="function"&&(l.flags|=4194308)):(typeof F.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=v,l.memoizedState=ie),F.props=v,F.state=ie,F.context=_e,v=k):(typeof F.componentDidMount=="function"&&(l.flags|=4194308),v=!1)}else{F=l.stateNode,Im(o,l),k=l.memoizedProps,_e=l.type===l.elementType?k:Mi(l.type,k),F.props=_e,pt=l.pendingProps,ot=F.context,ie=d.contextType,typeof ie=="object"&&ie!==null?ie=hi(ie):(ie=kt(d)?ln:Ct.current,ie=$n(l,ie));var Ht=d.getDerivedStateFromProps;(We=typeof Ht=="function"||typeof F.getSnapshotBeforeUpdate=="function")||typeof F.UNSAFE_componentWillReceiveProps!="function"&&typeof F.componentWillReceiveProps!="function"||(k!==pt||ot!==ie)&&Fm(l,F,v,ie),Pr=!1,ot=l.memoizedState,F.state=ot,Hl(l,v,F,S);var et=l.memoizedState;k!==pt||ot!==et||ft.current||Pr?(typeof Ht=="function"&&(hf(l,d,Ht,v),et=l.memoizedState),(_e=Pr||Nm(l,d,_e,v,ot,et,ie)||!1)?(We||typeof F.UNSAFE_componentWillUpdate!="function"&&typeof F.componentWillUpdate!="function"||(typeof F.componentWillUpdate=="function"&&F.componentWillUpdate(v,et,ie),typeof F.UNSAFE_componentWillUpdate=="function"&&F.UNSAFE_componentWillUpdate(v,et,ie)),typeof F.componentDidUpdate=="function"&&(l.flags|=4),typeof F.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof F.componentDidUpdate!="function"||k===o.memoizedProps&&ot===o.memoizedState||(l.flags|=4),typeof F.getSnapshotBeforeUpdate!="function"||k===o.memoizedProps&&ot===o.memoizedState||(l.flags|=1024),l.memoizedProps=v,l.memoizedState=et),F.props=v,F.state=et,F.context=ie,v=_e):(typeof F.componentDidUpdate!="function"||k===o.memoizedProps&&ot===o.memoizedState||(l.flags|=4),typeof F.getSnapshotBeforeUpdate!="function"||k===o.memoizedProps&&ot===o.memoizedState||(l.flags|=1024),v=!1)}return If(o,l,d,v,T,S)}function If(o,l,d,v,S,T){Sg(o,l);var F=(l.flags&128)!==0;if(!v&&!F)return S&&Nn(l,d,!1),ur(o,l,T);v=l.stateNode,Hy.current=l;var k=F&&typeof d.getDerivedStateFromError!="function"?null:v.render();return l.flags|=1,o!==null&&F?(l.child=eo(l,o.child,null,T),l.child=eo(l,null,k,T)):Fn(o,l,k,T),l.memoizedState=v.state,S&&Nn(l,d,!0),l.child}function wg(o){var l=o.stateNode;l.pendingContext?Wt(o,l.pendingContext,l.pendingContext!==l.context):l.context&&Wt(o,l.context,!1),_f(o,l.containerInfo)}function Eg(o,l,d,v,S){return $s(),vf(S),l.flags|=256,Fn(o,l,d,v),l.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function ic(o){return{baseLanes:o,cachePool:null}}function Ag(o,l,d){var v=l.pendingProps,S=jt.current,T=!1,F=(l.flags&128)!==0,k;if((k=F)||(k=o!==null&&o.memoizedState===null?!1:(S&2)!==0),k?(T=!0,l.flags&=-129):(o===null||o.memoizedState!==null)&&(S|=1),$e(jt,S&1),o===null)return gf(l),o=l.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(l.mode&1?qs(o)?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(S=v.children,o=v.fallback,T?(v=l.mode,T=l.child,S={mode:"hidden",children:S},!(v&1)&&T!==null?(T.childLanes=0,T.pendingProps=S):T=wc(S,v,0,null),o=us(o,v,d,null),T.return=l,o.return=l,T.sibling=o,l.child=T,l.child.memoizedState=ic(d),l.memoizedState=nc,o):Lf(l,S));if(S=o.memoizedState,S!==null){if(k=S.dehydrated,k!==null){if(F)return l.flags&256?(l.flags&=-257,rc(o,l,d,Error(a(422)))):l.memoizedState!==null?(l.child=o.child,l.flags|=128,null):(T=v.fallback,S=l.mode,v=wc({mode:"visible",children:v.children},S,0,null),T=us(T,S,d,null),T.flags|=2,v.return=l,T.return=l,v.sibling=T,l.child=v,l.mode&1&&eo(l,o.child,null,d),l.child.memoizedState=ic(d),l.memoizedState=nc,T);if(!(l.mode&1))l=rc(o,l,d,null);else if(qs(k))l=rc(o,l,d,Error(a(419)));else if(v=(d&o.childLanes)!==0,ni||v){if(v=nn,v!==null){switch(d&-d){case 4:T=2;break;case 16:T=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:T=32;break;case 536870912:T=268435456;break;default:T=0}v=T&(v.suspendedLanes|d)?0:T,v!==0&&v!==S.retryLane&&(S.retryLane=v,gi(o,v,-1))}Qf(),l=rc(o,l,d,Error(a(421)))}else Ys(k)?(l.flags|=128,l.child=o.child,l=eS.bind(null,o),bl(k,l),l=null):(d=S.treeContext,N&&(ti=Rl(k),ei=l,Xt=!0,wi=null,Ko=!1,d!==null&&(fi[di++]=ar,fi[di++]=lr,fi[di++]=ns,ar=d.id,lr=d.overflow,ns=l)),l=Lf(l,l.pendingProps.children),l.flags|=4096);return l}return T?(v=bg(o,l,v.children,v.fallback,d),T=l.child,S=o.child.memoizedState,T.memoizedState=S===null?ic(d):{baseLanes:S.baseLanes|d,cachePool:null},T.childLanes=o.childLanes&~d,l.memoizedState=nc,v):(d=Tg(o,l,v.children,d),l.memoizedState=null,d)}return T?(v=bg(o,l,v.children,v.fallback,d),T=l.child,S=o.child.memoizedState,T.memoizedState=S===null?ic(d):{baseLanes:S.baseLanes|d,cachePool:null},T.childLanes=o.childLanes&~d,l.memoizedState=nc,v):(d=Tg(o,l,v.children,d),l.memoizedState=null,d)}function Lf(o,l){return l=wc({mode:"visible",children:l},o.mode,0,null),l.return=o,o.child=l}function Tg(o,l,d,v){var S=o.child;return o=S.sibling,d=Or(S,{mode:"visible",children:d}),!(l.mode&1)&&(d.lanes=v),d.return=l,d.sibling=null,o!==null&&(v=l.deletions,v===null?(l.deletions=[o],l.flags|=16):v.push(o)),l.child=d}function bg(o,l,d,v,S){var T=l.mode;o=o.child;var F=o.sibling,k={mode:"hidden",children:d};return!(T&1)&&l.child!==o?(d=l.child,d.childLanes=0,d.pendingProps=k,l.deletions=null):(d=Or(o,k),d.subtreeFlags=o.subtreeFlags&14680064),F!==null?v=Or(F,v):(v=us(v,T,S,null),v.flags|=2),v.return=l,d.return=l,d.sibling=v,l.child=d,v}function rc(o,l,d,v){return v!==null&&vf(v),eo(l,o.child,null,d),o=Lf(l,l.pendingProps.children),o.flags|=2,l.memoizedState=null,o}function Cg(o,l,d){o.lanes|=l;var v=o.alternate;v!==null&&(v.lanes|=l),cf(o.return,l,d)}function Df(o,l,d,v,S){var T=o.memoizedState;T===null?o.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:v,tail:d,tailMode:S}:(T.isBackwards=l,T.rendering=null,T.renderingStartTime=0,T.last=v,T.tail=d,T.tailMode=S)}function Rg(o,l,d){var v=l.pendingProps,S=v.revealOrder,T=v.tail;if(Fn(o,l,v.children,d),v=jt.current,v&2)v=v&1|2,l.flags|=128;else{if(o!==null&&o.flags&128)e:for(o=l.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&Cg(o,d,l);else if(o.tag===19)Cg(o,d,l);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===l)break e;for(;o.sibling===null;){if(o.return===null||o.return===l)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}v&=1}if($e(jt,v),!(l.mode&1))l.memoizedState=null;else switch(S){case"forwards":for(d=l.child,S=null;d!==null;)o=d.alternate,o!==null&&Yl(o)===null&&(S=d),d=d.sibling;d=S,d===null?(S=l.child,l.child=null):(S=d.sibling,d.sibling=null),Df(l,!1,S,d,T);break;case"backwards":for(d=null,S=l.child,l.child=null;S!==null;){if(o=S.alternate,o!==null&&Yl(o)===null){l.child=S;break}o=S.sibling,S.sibling=d,d=S,S=o}Df(l,!0,d,null,T);break;case"together":Df(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function ur(o,l,d){if(o!==null&&(l.dependencies=o.dependencies),so|=l.lanes,!(d&l.childLanes))return null;if(o!==null&&l.child!==o.child)throw Error(a(153));if(l.child!==null){for(o=l.child,d=Or(o,o.pendingProps),l.child=d,d.return=l;o.sibling!==null;)o=o.sibling,d=d.sibling=Or(o,o.pendingProps),d.return=l;d.sibling=null}return l.child}function Vy(o,l,d){switch(l.tag){case 3:wg(l),$s();break;case 5:Xm(l);break;case 1:kt(l.type)&&Rr(l);break;case 4:_f(l,l.stateNode.containerInfo);break;case 10:Pm(l,l.type._context,l.memoizedProps.value);break;case 13:var v=l.memoizedState;if(v!==null)return v.dehydrated!==null?($e(jt,jt.current&1),l.flags|=128,null):d&l.child.childLanes?Ag(o,l,d):($e(jt,jt.current&1),o=ur(o,l,d),o!==null?o.sibling:null);$e(jt,jt.current&1);break;case 19:if(v=(d&l.childLanes)!==0,o.flags&128){if(v)return Rg(o,l,d);l.flags|=128}var S=l.memoizedState;if(S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),$e(jt,jt.current),v)break;return null;case 22:case 23:return l.lanes=0,yg(o,l,d)}return ur(o,l,d)}function Gy(o,l){switch(pf(l),l.tag){case 1:return kt(l.type)&&Cr(),o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 3:return no(),St(ft),St(Ct),Sf(),o=l.flags,o&65536&&!(o&128)?(l.flags=o&-65537|128,l):null;case 5:return xf(l),null;case 13:if(St(jt),o=l.memoizedState,o!==null&&o.dehydrated!==null){if(l.alternate===null)throw Error(a(340));$s()}return o=l.flags,o&65536?(l.flags=o&-65537|128,l):null;case 19:return St(jt),null;case 4:return no(),null;case 10:return lf(l.type._context),null;case 22:case 23:return Kf(),null;case 24:return null;default:return null}}var sc=!1,ss=!1,Wy=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function oc(o,l){var d=o.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(v){Xn(o,l,v)}else d.current=null}function Uf(o,l,d){try{d()}catch(v){Xn(o,l,v)}}var Pg=!1;function Xy(o,l){for(Ae(o.containerInfo),Pe=l;Pe!==null;)if(o=Pe,l=o.child,(o.subtreeFlags&1028)!==0&&l!==null)l.return=o,Pe=l;else for(;Pe!==null;){o=Pe;try{var d=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var v=d.memoizedProps,S=d.memoizedState,T=o.stateNode,F=T.getSnapshotBeforeUpdate(o.elementType===o.type?v:Mi(o.type,v),S);T.__reactInternalSnapshotBeforeUpdate=F}break;case 3:Re&&De(o.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(k){Xn(o,o.return,k)}if(l=o.sibling,l!==null){l.return=o.return,Pe=l;break}Pe=o.return}return d=Pg,Pg=!1,d}function os(o,l,d){var v=l.updateQueue;if(v=v!==null?v.lastEffect:null,v!==null){var S=v=v.next;do{if((S.tag&o)===o){var T=S.destroy;S.destroy=void 0,T!==void 0&&Uf(l,d,T)}S=S.next}while(S!==v)}}function ca(o,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&o)===o){var v=d.create;d.destroy=v()}d=d.next}while(d!==l)}}function Nf(o){var l=o.ref;if(l!==null){var d=o.stateNode;switch(o.tag){case 5:o=Z(d);break;default:o=d}typeof l=="function"?l(o):l.current=o}}function Ig(o,l,d){if(zi&&typeof zi.onCommitFiberUnmount=="function")try{zi.onCommitFiberUnmount(Nl,l)}catch{}switch(l.tag){case 0:case 11:case 14:case 15:if(o=l.updateQueue,o!==null&&(o=o.lastEffect,o!==null)){var v=o=o.next;do{var S=v,T=S.destroy;S=S.tag,T!==void 0&&(S&2||S&4)&&Uf(l,d,T),v=v.next}while(v!==o)}break;case 1:if(oc(l,d),o=l.stateNode,typeof o.componentWillUnmount=="function")try{o.props=l.memoizedProps,o.state=l.memoizedState,o.componentWillUnmount()}catch(F){Xn(l,d,F)}break;case 5:oc(l,d);break;case 4:Re?Fg(o,l,d):le&&le&&(l=l.stateNode.containerInfo,d=Tt(l),bt(l,d))}}function Lg(o,l,d){for(var v=l;;)if(Ig(o,v,d),v.child===null||Re&&v.tag===4){if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return}v.sibling.return=v.return,v=v.sibling}else v.child.return=v,v=v.child}function Dg(o){var l=o.alternate;l!==null&&(o.alternate=null,Dg(l)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(l=o.stateNode,l!==null&&ye(l)),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function Ug(o){return o.tag===5||o.tag===3||o.tag===4}function Ng(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||Ug(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function Og(o){if(Re){e:{for(var l=o.return;l!==null;){if(Ug(l))break e;l=l.return}throw Error(a(160))}var d=l;switch(d.tag){case 5:l=d.stateNode,d.flags&32&&(Bt(l),d.flags&=-33),d=Ng(o),Ff(o,d,l);break;case 3:case 4:l=d.stateNode.containerInfo,d=Ng(o),Of(o,d,l);break;default:throw Error(a(161))}}}function Of(o,l,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,l?He(d,o,l):Et(d,o);else if(v!==4&&(o=o.child,o!==null))for(Of(o,l,d),o=o.sibling;o!==null;)Of(o,l,d),o=o.sibling}function Ff(o,l,d){var v=o.tag;if(v===5||v===6)o=o.stateNode,l?ht(d,o,l):ze(d,o);else if(v!==4&&(o=o.child,o!==null))for(Ff(o,l,d),o=o.sibling;o!==null;)Ff(o,l,d),o=o.sibling}function Fg(o,l,d){for(var v=l,S=!1,T,F;;){if(!S){S=v.return;e:for(;;){if(S===null)throw Error(a(160));switch(T=S.stateNode,S.tag){case 5:F=!1;break e;case 3:T=T.containerInfo,F=!0;break e;case 4:T=T.containerInfo,F=!0;break e}S=S.return}S=!0}if(v.tag===5||v.tag===6)Lg(o,v,d),F?dt(T,v.stateNode):At(T,v.stateNode);else if(v.tag===18)F?$(T,v.stateNode):K(T,v.stateNode);else if(v.tag===4){if(v.child!==null){T=v.stateNode.containerInfo,F=!0,v.child.return=v,v=v.child;continue}}else if(Ig(o,v,d),v.child!==null){v.child.return=v,v=v.child;continue}if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return,v.tag===4&&(S=!1)}v.sibling.return=v.return,v=v.sibling}}function Bf(o,l){if(Re){switch(l.tag){case 0:case 11:case 14:case 15:os(3,l,l.return),ca(3,l),os(5,l,l.return);return;case 1:return;case 5:var d=l.stateNode;if(d!=null){var v=l.memoizedProps;o=o!==null?o.memoizedProps:v;var S=l.type,T=l.updateQueue;l.updateQueue=null,T!==null&&ut(d,T,S,o,v,l)}return;case 6:if(l.stateNode===null)throw Error(a(162));d=l.memoizedProps,ge(l.stateNode,o!==null?o.memoizedProps:d,d);return;case 3:N&&o!==null&&o.memoizedState.isDehydrated&&I(l.stateNode.containerInfo);return;case 12:return;case 13:ac(l);return;case 19:ac(l);return;case 17:return}throw Error(a(163))}switch(l.tag){case 0:case 11:case 14:case 15:os(3,l,l.return),ca(3,l),os(5,l,l.return);return;case 12:return;case 13:ac(l);return;case 19:ac(l);return;case 3:N&&o!==null&&o.memoizedState.isDehydrated&&I(l.stateNode.containerInfo);break;case 22:case 23:return}e:if(le){switch(l.tag){case 1:case 5:case 6:break e;case 3:case 4:l=l.stateNode,bt(l.containerInfo,l.pendingChildren);break e}throw Error(a(163))}}function ac(o){var l=o.updateQueue;if(l!==null){o.updateQueue=null;var d=o.stateNode;d===null&&(d=o.stateNode=new Wy),l.forEach(function(v){var S=tS.bind(null,o,v);d.has(v)||(d.add(v),v.then(S,S))})}}function Yy(o,l){for(Pe=l;Pe!==null;){l=Pe;var d=l.deletions;if(d!==null)for(var v=0;v<d.length;v++){var S=d[v];try{var T=o;Re?Fg(T,S,l):Lg(T,S,l);var F=S.alternate;F!==null&&(F.return=null),S.return=null}catch(Qe){Xn(S,l,Qe)}}if(d=l.child,l.subtreeFlags&12854&&d!==null)d.return=l,Pe=d;else for(;Pe!==null;){l=Pe;try{var k=l.flags;if(k&32&&Re&&Bt(l.stateNode),k&512){var ie=l.alternate;if(ie!==null){var _e=ie.ref;_e!==null&&(typeof _e=="function"?_e(null):_e.current=null)}}if(k&8192)switch(l.tag){case 13:if(l.memoizedState!==null){var We=l.alternate;(We===null||We.memoizedState===null)&&(Xf=fn())}break;case 22:var pt=l.memoizedState!==null,ot=l.alternate,Ht=ot!==null&&ot.memoizedState!==null;if(d=l,Re){e:if(v=d,S=pt,T=null,Re)for(var et=v;;){if(et.tag===5){if(T===null){T=et;var Cn=et.stateNode;S?H(Cn):ne(et.stateNode,et.memoizedProps)}}else if(et.tag===6){if(T===null){var _i=et.stateNode;S?Fe(_i):fe(_i,et.memoizedProps)}}else if((et.tag!==22&&et.tag!==23||et.memoizedState===null||et===v)&&et.child!==null){et.child.return=et,et=et.child;continue}if(et===v)break;for(;et.sibling===null;){if(et.return===null||et.return===v)break e;T===et&&(T=null),et=et.return}T===et&&(T=null),et.sibling.return=et.return,et=et.sibling}}if(pt&&!Ht&&d.mode&1){Pe=d;for(var J=d.child;J!==null;){for(d=Pe=J;Pe!==null;){v=Pe;var W=v.child;switch(v.tag){case 0:case 11:case 14:case 15:os(4,v,v.return);break;case 1:oc(v,v.return);var te=v.stateNode;if(typeof te.componentWillUnmount=="function"){var Le=v.return;try{te.props=v.memoizedProps,te.state=v.memoizedState,te.componentWillUnmount()}catch(Qe){Xn(v,Le,Qe)}}break;case 5:oc(v,v.return);break;case 22:if(v.memoizedState!==null){kg(d);continue}}W!==null?(W.return=v,Pe=W):kg(d)}J=J.sibling}}}switch(k&4102){case 2:Og(l),l.flags&=-3;break;case 6:Og(l),l.flags&=-3,Bf(l.alternate,l);break;case 4096:l.flags&=-4097;break;case 4100:l.flags&=-4097,Bf(l.alternate,l);break;case 4:Bf(l.alternate,l)}}catch(Qe){Xn(l,l.return,Qe)}if(d=l.sibling,d!==null){d.return=l.return,Pe=d;break}Pe=l.return}}}function qy(o,l,d){Pe=o,Bg(o)}function Bg(o,l,d){for(var v=(o.mode&1)!==0;Pe!==null;){var S=Pe,T=S.child;if(S.tag===22&&v){var F=S.memoizedState!==null||sc;if(!F){var k=S.alternate,ie=k!==null&&k.memoizedState!==null||ss;k=sc;var _e=ss;if(sc=F,(ss=ie)&&!_e)for(Pe=S;Pe!==null;)F=Pe,ie=F.child,F.tag===22&&F.memoizedState!==null?Hg(S):ie!==null?(ie.return=F,Pe=ie):Hg(S);for(;T!==null;)Pe=T,Bg(T),T=T.sibling;Pe=S,sc=k,ss=_e}zg(o)}else S.subtreeFlags&8772&&T!==null?(T.return=S,Pe=T):zg(o)}}function zg(o){for(;Pe!==null;){var l=Pe;if(l.flags&8772){var d=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:ss||ca(5,l);break;case 1:var v=l.stateNode;if(l.flags&4&&!ss)if(d===null)v.componentDidMount();else{var S=l.elementType===l.type?d.memoizedProps:Mi(l.type,d.memoizedProps);v.componentDidUpdate(S,d.memoizedState,v.__reactInternalSnapshotBeforeUpdate)}var T=l.updateQueue;T!==null&&Dm(l,T,v);break;case 3:var F=l.updateQueue;if(F!==null){if(d=null,l.child!==null)switch(l.child.tag){case 5:d=Z(l.child.stateNode);break;case 1:d=l.child.stateNode}Dm(l,F,d)}break;case 5:var k=l.stateNode;d===null&&l.flags&4&&ke(k,l.type,l.memoizedProps,l);break;case 6:break;case 4:break;case 12:break;case 13:if(N&&l.memoizedState===null){var ie=l.alternate;if(ie!==null){var _e=ie.memoizedState;if(_e!==null){var We=_e.dehydrated;We!==null&&G(We)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(a(163))}ss||l.flags&512&&Nf(l)}catch(pt){Xn(l,l.return,pt)}}if(l===o){Pe=null;break}if(d=l.sibling,d!==null){d.return=l.return,Pe=d;break}Pe=l.return}}function kg(o){for(;Pe!==null;){var l=Pe;if(l===o){Pe=null;break}var d=l.sibling;if(d!==null){d.return=l.return,Pe=d;break}Pe=l.return}}function Hg(o){for(;Pe!==null;){var l=Pe;try{switch(l.tag){case 0:case 11:case 15:var d=l.return;try{ca(4,l)}catch(ie){Xn(l,d,ie)}break;case 1:var v=l.stateNode;if(typeof v.componentDidMount=="function"){var S=l.return;try{v.componentDidMount()}catch(ie){Xn(l,S,ie)}}var T=l.return;try{Nf(l)}catch(ie){Xn(l,T,ie)}break;case 5:var F=l.return;try{Nf(l)}catch(ie){Xn(l,F,ie)}}}catch(ie){Xn(l,l.return,ie)}if(l===o){Pe=null;break}var k=l.sibling;if(k!==null){k.return=l.return,Pe=k;break}Pe=l.return}}var lc=0,cc=1,uc=2,hc=3,fc=4;if(typeof Symbol=="function"&&Symbol.for){var ua=Symbol.for;lc=ua("selector.component"),cc=ua("selector.has_pseudo_class"),uc=ua("selector.role"),hc=ua("selector.test_id"),fc=ua("selector.text")}function zf(o){var l=Me(o);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(a(364));return l}if(o=R(o),o===null)throw Error(a(362));return o.stateNode.current}function kf(o,l){switch(l.$$typeof){case lc:if(o.type===l.value)return!0;break;case cc:e:{l=l.value,o=[o,0];for(var d=0;d<o.length;){var v=o[d++],S=o[d++],T=l[S];if(v.tag!==5||!ue(v)){for(;T!=null&&kf(v,T);)S++,T=l[S];if(S===l.length){l=!0;break e}else for(v=v.child;v!==null;)o.push(v,S),v=v.sibling}}l=!1}return l;case uc:if(o.tag===5&&ae(o.stateNode,l.value))return!0;break;case fc:if((o.tag===5||o.tag===6)&&(o=oe(o),o!==null&&0<=o.indexOf(l.value)))return!0;break;case hc:if(o.tag===5&&(o=o.memoizedProps["data-testname"],typeof o=="string"&&o.toLowerCase()===l.value.toLowerCase()))return!0;break;default:throw Error(a(365))}return!1}function Hf(o){switch(o.$$typeof){case lc:return"<"+(L(o.value)||"Unknown")+">";case cc:return":has("+(Hf(o)||"")+")";case uc:return'[role="'+o.value+'"]';case fc:return'"'+o.value+'"';case hc:return'[data-testname="'+o.value+'"]';default:throw Error(a(365))}}function Vg(o,l){var d=[];o=[o,0];for(var v=0;v<o.length;){var S=o[v++],T=o[v++],F=l[T];if(S.tag!==5||!ue(S)){for(;F!=null&&kf(S,F);)T++,F=l[T];if(T===l.length)d.push(S);else for(S=S.child;S!==null;)o.push(S,T),S=S.sibling}}return d}function Vf(o,l){if(!O)throw Error(a(363));o=zf(o),o=Vg(o,l),l=[],o=Array.from(o);for(var d=0;d<o.length;){var v=o[d++];if(v.tag===5)ue(v)||l.push(v.stateNode);else for(v=v.child;v!==null;)o.push(v),v=v.sibling}return l}var jy=Math.ceil,dc=c.ReactCurrentDispatcher,Gf=c.ReactCurrentOwner,en=c.ReactCurrentBatchConfig,Mt=0,nn=null,rn=null,yn=0,ii=0,ro=Ft(0),cn=0,ha=null,so=0,pc=0,Wf=0,fa=null,Gn=null,Xf=0,Yf=1/0;function oo(){Yf=fn()+500}var mc=!1,qf=null,Lr=null,gc=!1,Dr=null,vc=0,da=0,jf=null,_c=-1,xc=0;function Bn(){return Mt&6?fn():_c!==-1?_c:_c=fn()}function Ur(o){return o.mode&1?Mt&2&&yn!==0?yn&-yn:Py.transition!==null?(xc===0&&(o=Ll,Ll<<=1,!(Ll&4194240)&&(Ll=64),xc=o),xc):(o=Dt,o!==0?o:pe()):1}function gi(o,l,d){if(50<da)throw da=0,jf=null,Error(a(185));var v=yc(o,l);return v===null?null:(Jo(v,l,d),(!(Mt&2)||v!==nn)&&(v===nn&&(!(Mt&2)&&(pc|=l),cn===4&&Nr(v,yn)),Wn(v,d),l===1&&Mt===0&&!(o.mode&1)&&(oo(),Ol&&Hi())),v)}function yc(o,l){o.lanes|=l;var d=o.alternate;for(d!==null&&(d.lanes|=l),d=o,o=o.return;o!==null;)o.childLanes|=l,d=o.alternate,d!==null&&(d.childLanes|=l),d=o,o=o.return;return d.tag===3?d.stateNode:null}function Wn(o,l){var d=o.callbackNode;Sy(o,l);var v=Ul(o,o===nn?yn:0);if(v===0)d!==null&&Cm(d),o.callbackNode=null,o.callbackPriority=0;else if(l=v&-v,o.callbackPriority!==l){if(d!=null&&Cm(d),l===1)o.tag===0?Ry(Wg.bind(null,o)):Rm(Wg.bind(null,o)),Ze?Ie(function(){Mt===0&&Hi()}):tf(nf,Hi),d=null;else{switch(bm(v)){case 1:d=nf;break;case 4:d=Ay;break;case 16:d=rf;break;case 536870912:d=Ty;break;default:d=rf}d=$g(d,Gg.bind(null,o))}o.callbackPriority=l,o.callbackNode=d}}function Gg(o,l){if(_c=-1,xc=0,Mt&6)throw Error(a(327));var d=o.callbackNode;if(cs()&&o.callbackNode!==d)return null;var v=Ul(o,o===nn?yn:0);if(v===0)return null;if(v&30||v&o.expiredLanes||l)l=Sc(o,v);else{l=v;var S=Mt;Mt|=2;var T=qg();(nn!==o||yn!==l)&&(oo(),as(o,l));do try{Ky();break}catch(k){Yg(o,k)}while(!0);af(),dc.current=T,Mt=S,rn!==null?l=0:(nn=null,yn=0,l=cn)}if(l!==0){if(l===2&&(S=Qh(o),S!==0&&(v=S,l=Zf(o,S))),l===1)throw d=ha,as(o,0),Nr(o,v),Wn(o,fn()),d;if(l===6)Nr(o,v);else{if(S=o.current.alternate,!(v&30)&&!Zy(S)&&(l=Sc(o,v),l===2&&(T=Qh(o),T!==0&&(v=T,l=Zf(o,T))),l===1))throw d=ha,as(o,0),Nr(o,v),Wn(o,fn()),d;switch(o.finishedWork=S,o.finishedLanes=v,l){case 0:case 1:throw Error(a(345));case 2:ls(o,Gn);break;case 3:if(Nr(o,v),(v&130023424)===v&&(l=Xf+500-fn(),10<l)){if(Ul(o,0)!==0)break;if(S=o.suspendedLanes,(S&v)!==v){Bn(),o.pingedLanes|=o.suspendedLanes&S;break}o.timeoutHandle=Te(ls.bind(null,o,Gn),l);break}ls(o,Gn);break;case 4:if(Nr(o,v),(v&4194240)===v)break;for(l=o.eventTimes,S=-1;0<v;){var F=31-On(v);T=1<<F,F=l[F],F>S&&(S=F),v&=~T}if(v=S,v=fn()-v,v=(120>v?120:480>v?480:1080>v?1080:1920>v?1920:3e3>v?3e3:4320>v?4320:1960*jy(v/1960))-v,10<v){o.timeoutHandle=Te(ls.bind(null,o,Gn),v);break}ls(o,Gn);break;case 5:ls(o,Gn);break;default:throw Error(a(329))}}}return Wn(o,fn()),o.callbackNode===d?Gg.bind(null,o):null}function Zf(o,l){var d=fa;return o.current.memoizedState.isDehydrated&&(as(o,l).flags|=256),o=Sc(o,l),o!==2&&(l=Gn,Gn=d,l!==null&&Jf(l)),o}function Jf(o){Gn===null?Gn=o:Gn.push.apply(Gn,o)}function Zy(o){for(var l=o;;){if(l.flags&16384){var d=l.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var v=0;v<d.length;v++){var S=d[v],T=S.getSnapshot;S=S.value;try{if(!ki(T(),S))return!1}catch{return!1}}}if(d=l.child,l.subtreeFlags&16384&&d!==null)d.return=l,l=d;else{if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Nr(o,l){for(l&=~Wf,l&=~pc,o.suspendedLanes|=l,o.pingedLanes&=~l,o=o.expirationTimes;0<l;){var d=31-On(l),v=1<<d;o[d]=-1,l&=~v}}function Wg(o){if(Mt&6)throw Error(a(327));cs();var l=Ul(o,0);if(!(l&1))return Wn(o,fn()),null;var d=Sc(o,l);if(o.tag!==0&&d===2){var v=Qh(o);v!==0&&(l=v,d=Zf(o,v))}if(d===1)throw d=ha,as(o,0),Nr(o,l),Wn(o,fn()),d;if(d===6)throw Error(a(345));return o.finishedWork=o.current.alternate,o.finishedLanes=l,ls(o,Gn),Wn(o,fn()),null}function Xg(o){Dr!==null&&Dr.tag===0&&!(Mt&6)&&cs();var l=Mt;Mt|=1;var d=en.transition,v=Dt;try{if(en.transition=null,Dt=1,o)return o()}finally{Dt=v,en.transition=d,Mt=l,!(Mt&6)&&Hi()}}function Kf(){ii=ro.current,St(ro)}function as(o,l){o.finishedWork=null,o.finishedLanes=0;var d=o.timeoutHandle;if(d!==nt&&(o.timeoutHandle=nt,tt(d)),rn!==null)for(d=rn.return;d!==null;){var v=d;switch(pf(v),v.tag){case 1:v=v.type.childContextTypes,v!=null&&Cr();break;case 3:no(),St(ft),St(Ct),Sf();break;case 5:xf(v);break;case 4:no();break;case 13:St(jt);break;case 19:St(jt);break;case 10:lf(v.type._context);break;case 22:case 23:Kf()}d=d.return}if(nn=o,rn=o=Or(o.current,null),yn=ii=l,cn=0,ha=null,Wf=pc=so=0,Gn=fa=null,Vi!==null){for(l=0;l<Vi.length;l++)if(d=Vi[l],v=d.interleaved,v!==null){d.interleaved=null;var S=v.next,T=d.pending;if(T!==null){var F=T.next;T.next=S,v.next=F}d.pending=v}Vi=null}return o}function Yg(o,l){do{var d=rn;try{if(af(),ql.current=$l,jl){for(var v=Jt.memoizedState;v!==null;){var S=v.queue;S!==null&&(S.pending=null),v=v.next}jl=!1}if(io=0,dn=An=Jt=null,na=!1,ia=0,Gf.current=null,d===null||d.return===null){cn=1,ha=l,rn=null;break}e:{var T=o,F=d.return,k=d,ie=l;if(l=yn,k.flags|=32768,ie!==null&&typeof ie=="object"&&typeof ie.then=="function"){var _e=ie,We=k,pt=We.tag;if(!(We.mode&1)&&(pt===0||pt===11||pt===15)){var ot=We.alternate;ot?(We.updateQueue=ot.updateQueue,We.memoizedState=ot.memoizedState,We.lanes=ot.lanes):(We.updateQueue=null,We.memoizedState=null)}var Ht=dg(F);if(Ht!==null){Ht.flags&=-257,pg(Ht,F,k,T,l),Ht.mode&1&&fg(T,_e,l),l=Ht,ie=_e;var et=l.updateQueue;if(et===null){var Cn=new Set;Cn.add(ie),l.updateQueue=Cn}else et.add(ie);break e}else{if(!(l&1)){fg(T,_e,l),Qf();break e}ie=Error(a(426))}}else if(Xt&&k.mode&1){var _i=dg(F);if(_i!==null){!(_i.flags&65536)&&(_i.flags|=256),pg(_i,F,k,T,l),vf(ie);break e}}T=ie,cn!==4&&(cn=2),fa===null?fa=[T]:fa.push(T),ie=Cf(ie,k),k=F;do{switch(k.tag){case 3:k.flags|=65536,l&=-l,k.lanes|=l;var J=ug(k,ie,l);Lm(k,J);break e;case 1:T=ie;var W=k.type,te=k.stateNode;if(!(k.flags&128)&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Lr===null||!Lr.has(te)))){k.flags|=65536,l&=-l,k.lanes|=l;var Le=hg(k,T,l);Lm(k,Le);break e}}k=k.return}while(k!==null)}Zg(d)}catch(Qe){l=Qe,rn===d&&d!==null&&(rn=d=d.return);continue}break}while(!0)}function qg(){var o=dc.current;return dc.current=$l,o===null?$l:o}function Qf(){(cn===0||cn===3||cn===2)&&(cn=4),nn===null||!(so&268435455)&&!(pc&268435455)||Nr(nn,yn)}function Sc(o,l){var d=Mt;Mt|=2;var v=qg();nn===o&&yn===l||as(o,l);do try{Jy();break}catch(S){Yg(o,S)}while(!0);if(af(),Mt=d,dc.current=v,rn!==null)throw Error(a(261));return nn=null,yn=0,cn}function Jy(){for(;rn!==null;)jg(rn)}function Ky(){for(;rn!==null&&!wy();)jg(rn)}function jg(o){var l=Qg(o.alternate,o,ii);o.memoizedProps=o.pendingProps,l===null?Zg(o):rn=l,Gf.current=null}function Zg(o){var l=o;do{var d=l.alternate;if(o=l.return,l.flags&32768){if(d=Gy(d,l),d!==null){d.flags&=32767,rn=d;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{cn=6,rn=null;return}}else if(d=ky(d,l,ii),d!==null){rn=d;return}if(l=l.sibling,l!==null){rn=l;return}rn=l=o}while(l!==null);cn===0&&(cn=5)}function ls(o,l){var d=Dt,v=en.transition;try{en.transition=null,Dt=1,Qy(o,l,d)}finally{en.transition=v,Dt=d}return null}function Qy(o,l,d){do cs();while(Dr!==null);if(Mt&6)throw Error(a(327));var v=o.finishedWork,S=o.finishedLanes;if(v===null)return null;if(o.finishedWork=null,o.finishedLanes=0,v===o.current)throw Error(a(177));o.callbackNode=null,o.callbackPriority=0;var T=v.lanes|v.childLanes;if(My(o,T),o===nn&&(rn=nn=null,yn=0),!(v.subtreeFlags&2064)&&!(v.flags&2064)||gc||(gc=!0,$g(rf,function(){return cs(),null})),T=(v.flags&15990)!==0,v.subtreeFlags&15990||T){T=en.transition,en.transition=null;var F=Dt;Dt=1;var k=Mt;Mt|=4,Gf.current=null,Xy(o,v),Yy(o,v),me(o.containerInfo),o.current=v,qy(v),Ey(),Mt=k,Dt=F,en.transition=T}else o.current=v;if(gc&&(gc=!1,Dr=o,vc=S),T=o.pendingLanes,T===0&&(Lr=null),by(v.stateNode),Wn(o,fn()),l!==null)for(d=o.onRecoverableError,v=0;v<l.length;v++)d(l[v]);if(mc)throw mc=!1,o=qf,qf=null,o;return vc&1&&o.tag!==0&&cs(),T=o.pendingLanes,T&1?o===jf?da++:(da=0,jf=o):da=0,Hi(),null}function cs(){if(Dr!==null){var o=bm(vc),l=en.transition,d=Dt;try{if(en.transition=null,Dt=16>o?16:o,Dr===null)var v=!1;else{if(o=Dr,Dr=null,vc=0,Mt&6)throw Error(a(331));var S=Mt;for(Mt|=4,Pe=o.current;Pe!==null;){var T=Pe,F=T.child;if(Pe.flags&16){var k=T.deletions;if(k!==null){for(var ie=0;ie<k.length;ie++){var _e=k[ie];for(Pe=_e;Pe!==null;){var We=Pe;switch(We.tag){case 0:case 11:case 15:os(8,We,T)}var pt=We.child;if(pt!==null)pt.return=We,Pe=pt;else for(;Pe!==null;){We=Pe;var ot=We.sibling,Ht=We.return;if(Dg(We),We===_e){Pe=null;break}if(ot!==null){ot.return=Ht,Pe=ot;break}Pe=Ht}}}var et=T.alternate;if(et!==null){var Cn=et.child;if(Cn!==null){et.child=null;do{var _i=Cn.sibling;Cn.sibling=null,Cn=_i}while(Cn!==null)}}Pe=T}}if(T.subtreeFlags&2064&&F!==null)F.return=T,Pe=F;else e:for(;Pe!==null;){if(T=Pe,T.flags&2048)switch(T.tag){case 0:case 11:case 15:os(9,T,T.return)}var J=T.sibling;if(J!==null){J.return=T.return,Pe=J;break e}Pe=T.return}}var W=o.current;for(Pe=W;Pe!==null;){F=Pe;var te=F.child;if(F.subtreeFlags&2064&&te!==null)te.return=F,Pe=te;else e:for(F=W;Pe!==null;){if(k=Pe,k.flags&2048)try{switch(k.tag){case 0:case 11:case 15:ca(9,k)}}catch(Qe){Xn(k,k.return,Qe)}if(k===F){Pe=null;break e}var Le=k.sibling;if(Le!==null){Le.return=k.return,Pe=Le;break e}Pe=k.return}}if(Mt=S,Hi(),zi&&typeof zi.onPostCommitFiberRoot=="function")try{zi.onPostCommitFiberRoot(Nl,o)}catch{}v=!0}return v}finally{Dt=d,en.transition=l}}return!1}function Jg(o,l,d){l=Cf(d,l),l=ug(o,l,1),Ir(o,l),l=Bn(),o=yc(o,1),o!==null&&(Jo(o,1,l),Wn(o,l))}function Xn(o,l,d){if(o.tag===3)Jg(o,o,d);else for(;l!==null;){if(l.tag===3){Jg(l,o,d);break}else if(l.tag===1){var v=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof v.componentDidCatch=="function"&&(Lr===null||!Lr.has(v))){o=Cf(d,o),o=hg(l,o,1),Ir(l,o),o=Bn(),l=yc(l,1),l!==null&&(Jo(l,1,o),Wn(l,o));break}}l=l.return}}function $y(o,l,d){var v=o.pingCache;v!==null&&v.delete(l),l=Bn(),o.pingedLanes|=o.suspendedLanes&d,nn===o&&(yn&d)===d&&(cn===4||cn===3&&(yn&130023424)===yn&&500>fn()-Xf?as(o,0):Wf|=d),Wn(o,l)}function Kg(o,l){l===0&&(o.mode&1?(l=Dl,Dl<<=1,!(Dl&130023424)&&(Dl=4194304)):l=1);var d=Bn();o=yc(o,l),o!==null&&(Jo(o,l,d),Wn(o,d))}function eS(o){var l=o.memoizedState,d=0;l!==null&&(d=l.retryLane),Kg(o,d)}function tS(o,l){var d=0;switch(o.tag){case 13:var v=o.stateNode,S=o.memoizedState;S!==null&&(d=S.retryLane);break;case 19:v=o.stateNode;break;default:throw Error(a(314))}v!==null&&v.delete(l),Kg(o,d)}var Qg;Qg=function(o,l,d){if(o!==null)if(o.memoizedProps!==l.pendingProps||ft.current)ni=!0;else{if(!(o.lanes&d)&&!(l.flags&128))return ni=!1,Vy(o,l,d);ni=!!(o.flags&131072)}else ni=!1,Xt&&l.flags&1048576&&Bm(l,Wl,l.index);switch(l.lanes=0,l.tag){case 2:var v=l.type;o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps;var S=$n(l,Ct.current);Js(l,d),S=wf(null,l,v,o,S,d);var T=Ef();return l.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,kt(v)?(T=!0,Rr(l)):T=!1,l.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,uf(l),S.updater=Vl,l.stateNode=S,S._reactInternals=l,ff(l,v,o,d),l=If(null,l,v,!0,T,d)):(l.tag=0,Xt&&T&&df(l),Fn(null,l,S,d),l=l.child),l;case 16:v=l.elementType;e:{switch(o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),o=l.pendingProps,S=v._init,v=S(v._payload),l.type=v,S=l.tag=iS(v),o=Mi(v,o),S){case 0:l=Pf(null,l,v,o,d);break e;case 1:l=Mg(null,l,v,o,d);break e;case 11:l=vg(null,l,v,o,d);break e;case 14:l=_g(null,l,v,Mi(v.type,o),d);break e}throw Error(a(306,v,""))}return l;case 0:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:Mi(v,S),Pf(o,l,v,S,d);case 1:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:Mi(v,S),Mg(o,l,v,S,d);case 3:e:{if(wg(l),o===null)throw Error(a(387));v=l.pendingProps,T=l.memoizedState,S=T.element,Im(o,l),Hl(l,v,null,d);var F=l.memoizedState;if(v=F.element,N&&T.isDehydrated)if(T={element:v,isDehydrated:!1,cache:F.cache,transitions:F.transitions},l.updateQueue.baseState=T,l.memoizedState=T,l.flags&256){S=Error(a(423)),l=Eg(o,l,v,d,S);break e}else if(v!==S){S=Error(a(424)),l=Eg(o,l,v,d,S);break e}else for(N&&(ti=js(l.stateNode.containerInfo),ei=l,Xt=!0,wi=null,Ko=!1),d=Wm(l,null,v,d),l.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if($s(),v===S){l=ur(o,l,d);break e}Fn(o,l,v,d)}l=l.child}return l;case 5:return Xm(l),o===null&&gf(l),v=l.type,S=l.pendingProps,T=o!==null?o.memoizedProps:null,F=S.children,de(v,S)?F=null:T!==null&&de(v,T)&&(l.flags|=32),Sg(o,l),Fn(o,l,F,d),l.child;case 6:return o===null&&gf(l),null;case 13:return Ag(o,l,d);case 4:return _f(l,l.stateNode.containerInfo),v=l.pendingProps,o===null?l.child=eo(l,null,v,d):Fn(o,l,v,d),l.child;case 11:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:Mi(v,S),vg(o,l,v,S,d);case 7:return Fn(o,l,l.pendingProps,d),l.child;case 8:return Fn(o,l,l.pendingProps.children,d),l.child;case 12:return Fn(o,l,l.pendingProps.children,d),l.child;case 10:e:{if(v=l.type._context,S=l.pendingProps,T=l.memoizedProps,F=S.value,Pm(l,v,F),T!==null)if(ki(T.value,F)){if(T.children===S.children&&!ft.current){l=ur(o,l,d);break e}}else for(T=l.child,T!==null&&(T.return=l);T!==null;){var k=T.dependencies;if(k!==null){F=T.child;for(var ie=k.firstContext;ie!==null;){if(ie.context===v){if(T.tag===1){ie=or(-1,d&-d),ie.tag=2;var _e=T.updateQueue;if(_e!==null){_e=_e.shared;var We=_e.pending;We===null?ie.next=ie:(ie.next=We.next,We.next=ie),_e.pending=ie}}T.lanes|=d,ie=T.alternate,ie!==null&&(ie.lanes|=d),cf(T.return,d,l),k.lanes|=d;break}ie=ie.next}}else if(T.tag===10)F=T.type===l.type?null:T.child;else if(T.tag===18){if(F=T.return,F===null)throw Error(a(341));F.lanes|=d,k=F.alternate,k!==null&&(k.lanes|=d),cf(F,d,l),F=T.sibling}else F=T.child;if(F!==null)F.return=T;else for(F=T;F!==null;){if(F===l){F=null;break}if(T=F.sibling,T!==null){T.return=F.return,F=T;break}F=F.return}T=F}Fn(o,l,S.children,d),l=l.child}return l;case 9:return S=l.type,v=l.pendingProps.children,Js(l,d),S=hi(S),v=v(S),l.flags|=1,Fn(o,l,v,d),l.child;case 14:return v=l.type,S=Mi(v,l.pendingProps),S=Mi(v.type,S),_g(o,l,v,S,d);case 15:return xg(o,l,l.type,l.pendingProps,d);case 17:return v=l.type,S=l.pendingProps,S=l.elementType===v?S:Mi(v,S),o!==null&&(o.alternate=null,l.alternate=null,l.flags|=2),l.tag=1,kt(v)?(o=!0,Rr(l)):o=!1,Js(l,d),Om(l,v,S),ff(l,v,S,d),If(null,l,v,!0,o,d);case 19:return Rg(o,l,d);case 22:return yg(o,l,d)}throw Error(a(156,l.tag))};function $g(o,l){return tf(o,l)}function nS(o,l,d,v){this.tag=o,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=v,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(o,l,d,v){return new nS(o,l,d,v)}function $f(o){return o=o.prototype,!(!o||!o.isReactComponent)}function iS(o){if(typeof o=="function")return $f(o)?1:0;if(o!=null){if(o=o.$$typeof,o===w)return 11;if(o===E)return 14}return 2}function Or(o,l){var d=o.alternate;return d===null?(d=vi(o.tag,l,o.key,o.mode),d.elementType=o.elementType,d.type=o.type,d.stateNode=o.stateNode,d.alternate=o,o.alternate=d):(d.pendingProps=l,d.type=o.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=o.flags&14680064,d.childLanes=o.childLanes,d.lanes=o.lanes,d.child=o.child,d.memoizedProps=o.memoizedProps,d.memoizedState=o.memoizedState,d.updateQueue=o.updateQueue,l=o.dependencies,d.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},d.sibling=o.sibling,d.index=o.index,d.ref=o.ref,d}function Mc(o,l,d,v,S,T){var F=2;if(v=o,typeof o=="function")$f(o)&&(F=1);else if(typeof o=="string")F=5;else e:switch(o){case f:return us(d.children,S,T,l);case p:F=8,S|=8;break;case m:return o=vi(12,d,l,S|2),o.elementType=m,o.lanes=T,o;case y:return o=vi(13,d,l,S),o.elementType=y,o.lanes=T,o;case _:return o=vi(19,d,l,S),o.elementType=_,o.lanes=T,o;case A:return wc(d,S,T,l);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case g:F=10;break e;case x:F=9;break e;case w:F=11;break e;case E:F=14;break e;case M:F=16,v=null;break e}throw Error(a(130,o==null?o:typeof o,""))}return l=vi(F,d,l,S),l.elementType=o,l.type=v,l.lanes=T,l}function us(o,l,d,v){return o=vi(7,o,v,l),o.lanes=d,o}function wc(o,l,d,v){return o=vi(22,o,v,l),o.elementType=A,o.lanes=d,o.stateNode={},o}function ed(o,l,d){return o=vi(6,o,null,l),o.lanes=d,o}function td(o,l,d){return l=vi(4,o.children!==null?o.children:[],o.key,l),l.lanes=d,l.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},l}function rS(o,l,d,v,S){this.tag=l,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=nt,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$h(0),this.expirationTimes=$h(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$h(0),this.identifierPrefix=v,this.onRecoverableError=S,N&&(this.mutableSourceEagerHydrationData=null)}function e0(o,l,d,v,S,T,F,k,ie){return o=new rS(o,l,d,k,ie),l===1?(l=1,T===!0&&(l|=8)):l=0,T=vi(3,null,null,l),o.current=T,T.stateNode=o,T.memoizedState={element:v,isDehydrated:d,cache:null,transitions:null},uf(T),o}function t0(o){if(!o)return Xe;o=o._reactInternals;e:{if(z(o)!==o||o.tag!==1)throw Error(a(170));var l=o;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(kt(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(a(171))}if(o.tag===1){var d=o.type;if(kt(d))return Si(o,d,l)}return l}function n0(o){var l=o._reactInternals;if(l===void 0)throw typeof o.render=="function"?Error(a(188)):(o=Object.keys(o).join(","),Error(a(268,o)));return o=Y(l),o===null?null:o.stateNode}function i0(o,l){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var d=o.retryLane;o.retryLane=d!==0&&d<l?d:l}}function nd(o,l){i0(o,l),(o=o.alternate)&&i0(o,l)}function sS(o){return o=Y(o),o===null?null:o.stateNode}function oS(){return null}return t.attemptContinuousHydration=function(o){if(o.tag===13){var l=Bn();gi(o,134217728,l),nd(o,134217728)}},t.attemptHydrationAtCurrentPriority=function(o){if(o.tag===13){var l=Bn(),d=Ur(o);gi(o,d,l),nd(o,d)}},t.attemptSynchronousHydration=function(o){switch(o.tag){case 3:var l=o.stateNode;if(l.current.memoizedState.isDehydrated){var d=Zo(l.pendingLanes);d!==0&&(ef(l,d|1),Wn(l,fn()),!(Mt&6)&&(oo(),Hi()))}break;case 13:var v=Bn();Xg(function(){return gi(o,1,v)}),nd(o,1)}},t.batchedUpdates=function(o,l){var d=Mt;Mt|=1;try{return o(l)}finally{Mt=d,Mt===0&&(oo(),Ol&&Hi())}},t.createComponentSelector=function(o){return{$$typeof:lc,value:o}},t.createContainer=function(o,l,d,v,S,T,F){return e0(o,l,!1,null,d,v,S,T,F)},t.createHasPseudoClassSelector=function(o){return{$$typeof:cc,value:o}},t.createHydrationContainer=function(o,l,d,v,S,T,F,k,ie){return o=e0(d,v,!0,o,S,T,F,k,ie),o.context=t0(null),d=o.current,v=Bn(),S=Ur(d),T=or(v,S),T.callback=l??null,Ir(d,T),o.current.lanes=S,Jo(o,S,v),Wn(o,v),o},t.createPortal=function(o,l,d){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:v==null?null:""+v,children:o,containerInfo:l,implementation:d}},t.createRoleSelector=function(o){return{$$typeof:uc,value:o}},t.createTestNameSelector=function(o){return{$$typeof:hc,value:o}},t.createTextSelector=function(o){return{$$typeof:fc,value:o}},t.deferredUpdates=function(o){var l=Dt,d=en.transition;try{return en.transition=null,Dt=16,o()}finally{Dt=l,en.transition=d}},t.discreteUpdates=function(o,l,d,v,S){var T=Dt,F=en.transition;try{return en.transition=null,Dt=1,o(l,d,v,S)}finally{Dt=T,en.transition=F,Mt===0&&oo()}},t.findAllNodes=Vf,t.findBoundingRects=function(o,l){if(!O)throw Error(a(363));l=Vf(o,l),o=[];for(var d=0;d<l.length;d++)o.push(q(l[d]));for(l=o.length-1;0<l;l--){d=o[l];for(var v=d.x,S=v+d.width,T=d.y,F=T+d.height,k=l-1;0<=k;k--)if(l!==k){var ie=o[k],_e=ie.x,We=_e+ie.width,pt=ie.y,ot=pt+ie.height;if(v>=_e&&T>=pt&&S<=We&&F<=ot){o.splice(l,1);break}else if(v!==_e||d.width!==ie.width||ot<T||pt>F){if(!(T!==pt||d.height!==ie.height||We<v||_e>S)){_e>v&&(ie.width+=_e-v,ie.x=v),We<S&&(ie.width=S-_e),o.splice(l,1);break}}else{pt>T&&(ie.height+=pt-T,ie.y=T),ot<F&&(ie.height=F-pt),o.splice(l,1);break}}}return o},t.findHostInstance=n0,t.findHostInstanceWithNoPortals=function(o){return o=C(o),o=o!==null?Q(o):null,o===null?null:o.stateNode},t.findHostInstanceWithWarning=function(o){return n0(o)},t.flushControlled=function(o){var l=Mt;Mt|=1;var d=en.transition,v=Dt;try{en.transition=null,Dt=1,o()}finally{Dt=v,en.transition=d,Mt=l,Mt===0&&(oo(),Hi())}},t.flushPassiveEffects=cs,t.flushSync=Xg,t.focusWithin=function(o,l){if(!O)throw Error(a(363));for(o=zf(o),l=Vg(o,l),l=Array.from(l),o=0;o<l.length;){var d=l[o++];if(!ue(d)){if(d.tag===5&&Ye(d.stateNode))return!0;for(d=d.child;d!==null;)l.push(d),d=d.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Dt},t.getFindAllNodesFailureDescription=function(o,l){if(!O)throw Error(a(363));var d=0,v=[];o=[zf(o),0];for(var S=0;S<o.length;){var T=o[S++],F=o[S++],k=l[F];if((T.tag!==5||!ue(T))&&(kf(T,k)&&(v.push(Hf(k)),F++,F>d&&(d=F)),F<l.length))for(T=T.child;T!==null;)o.push(T,F),T=T.sibling}if(d<l.length){for(o=[];d<l.length;d++)o.push(Hf(l[d]));return`findAllNodes was able to match part of the selector:
  `+(v.join(" > ")+`

No matching component was found for:
  `)+o.join(" > ")}return null},t.getPublicRootInstance=function(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return Z(o.child.stateNode);default:return o.child.stateNode}},t.injectIntoDevTools=function(o){if(o={bundleType:o.bundleType,version:o.version,rendererPackageName:o.rendererPackageName,rendererConfig:o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:sS,findFiberByHostInstance:o.findFiberByHostInstance||oS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")o=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)o=!0;else{try{Nl=l.inject(o),zi=l}catch{}o=!!l.checkDCE}}return o},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(o,l,d,v){if(!O)throw Error(a(363));o=Vf(o,l);var S=we(o,d,v).disconnect;return{disconnect:function(){S()}}},t.registerMutableSourceForHydration=function(o,l){var d=l._getVersion;d=d(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,d]:o.mutableSourceEagerHydrationData.push(l,d)},t.runWithPriority=function(o,l){var d=Dt;try{return Dt=o,l()}finally{Dt=d}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(o,l,d,v){var S=l.current,T=Bn(),F=Ur(S);return d=t0(d),l.context===null?l.context=d:l.pendingContext=d,l=or(T,F),l.payload={element:o},v=v===void 0?null:v,v!==null&&(l.callback=v),Ir(S,l),o=gi(S,F,T),o!==null&&kl(o,S,F),F},t};ty.exports=w2;var E2=ty.exports;const A2=lS(E2),Mm={},T2=r=>void Object.assign(Mm,r);function b2(r,e){function t(f,{args:p=[],attach:m,...g},x){let w=`${f[0].toUpperCase()}${f.slice(1)}`,y;if(f==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const _=g.object;y=bo(_,{type:f,root:x,attach:m,primitive:!0})}else{const _=Mm[w];if(!_)throw new Error(`R3F: ${w} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");y=bo(new _(...p),{type:f,root:x,attach:m,memoizedProps:{args:p}})}return y.__r3f.attach===void 0&&(y.isBufferGeometry?y.__r3f.attach="geometry":y.isMaterial&&(y.__r3f.attach="material")),w!=="inject"&&Jd(y,g),y}function n(f,p){let m=!1;if(p){var g,x;(g=p.__r3f)!=null&&g.attach?Zd(f,p,p.__r3f.attach):p.isObject3D&&f.isObject3D&&(f.add(p),m=!0),m||(x=f.__r3f)==null||x.objects.push(p),p.__r3f||bo(p,{}),p.__r3f.parent=f,Tp(p),Co(p)}}function i(f,p,m){let g=!1;if(p){var x,w;if((x=p.__r3f)!=null&&x.attach)Zd(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){p.parent=f,p.dispatchEvent({type:"added"}),f.dispatchEvent({type:"childadded",child:p});const y=f.children.filter(E=>E!==p),_=y.indexOf(m);f.children=[...y.slice(0,_),p,...y.slice(_)],g=!0}g||(w=f.__r3f)==null||w.objects.push(p),p.__r3f||bo(p,{}),p.__r3f.parent=f,Tp(p),Co(p)}}function s(f,p,m=!1){f&&[...f].forEach(g=>a(p,g,m))}function a(f,p,m){if(p){var g,x,w;if(p.__r3f&&(p.__r3f.parent=null),(g=f.__r3f)!=null&&g.objects&&(f.__r3f.objects=f.__r3f.objects.filter(A=>A!==p)),(x=p.__r3f)!=null&&x.attach)Vv(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){var y;f.remove(p),(y=p.__r3f)!=null&&y.root&&U2(bu(p),p)}const E=(w=p.__r3f)==null?void 0:w.primitive,M=!E&&(m===void 0?p.dispose!==null:m);if(!E){var _;s((_=p.__r3f)==null?void 0:_.objects,p,M),s(p.children,p,M)}if(delete p.__r3f,M&&p.dispose&&p.type!=="Scene"){const A=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?lp.unstable_scheduleCallback(lp.unstable_IdlePriority,A):A()}Co(f)}}function c(f,p,m,g){var x;const w=(x=f.__r3f)==null?void 0:x.parent;if(!w)return;const y=t(p,m,f.__r3f.root);if(f.children){for(const _ of f.children)_.__r3f&&n(y,_);f.children=f.children.filter(_=>!_.__r3f)}f.__r3f.objects.forEach(_=>n(y,_)),f.__r3f.objects=[],f.__r3f.autoRemovedBeforeAppend||a(w,f),y.parent&&(y.__r3f.autoRemovedBeforeAppend=!0),n(w,y),y.raycast&&y.__r3f.eventCount&&bu(y).getState().internal.interaction.push(y),[g,g.alternate].forEach(_=>{_!==null&&(_.stateNode=y,_.ref&&(typeof _.ref=="function"?_.ref(y):_.ref.current=y))})}const u=()=>{};return{reconciler:A2({createInstance:t,removeChild:a,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(f,p)=>{if(!p)return;const m=f.getState().scene;m.__r3f&&(m.__r3f.root=f,n(m,p))},removeChildFromContainer:(f,p)=>{p&&a(f.getState().scene,p)},insertInContainerBefore:(f,p,m)=>{if(!p||!m)return;const g=f.getState().scene;g.__r3f&&i(g,p,m)},getRootHostContext:()=>null,getChildHostContext:f=>f,finalizeInitialChildren(f){var p;return!!((p=f==null?void 0:f.__r3f)!=null?p:{}).handlers},prepareUpdate(f,p,m,g){var x;if(((x=f==null?void 0:f.__r3f)!=null?x:{}).primitive&&g.object&&g.object!==f)return[!0];{const{args:y=[],children:_,...E}=g,{args:M=[],children:A,...U}=m;if(!Array.isArray(y))throw new Error("R3F: the args prop must be an array!");if(y.some((L,B)=>L!==M[B]))return[!0];const P=oy(f,E,U,!0);return P.changes.length?[!1,P]:null}},commitUpdate(f,[p,m],g,x,w,y){p?c(f,g,w,y):Jd(f,m)},commitMount(f,p,m,g){var x;const w=(x=f.__r3f)!=null?x:{};f.raycast&&w.handlers&&w.eventCount&&bu(f).getState().internal.interaction.push(f)},getPublicInstance:f=>f,prepareForCommit:()=>null,preparePortalMount:f=>bo(f.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(f){var p;const{attach:m,parent:g}=(p=f.__r3f)!=null?p:{};m&&g&&Vv(g,f,m),f.isObject3D&&(f.visible=!1),Co(f)},unhideInstance(f,p){var m;const{attach:g,parent:x}=(m=f.__r3f)!=null?m:{};g&&x&&Zd(x,f,g),(f.isObject3D&&p.visible==null||p.visible)&&(f.visible=!0),Co(f)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():Do.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&Gt.fun(performance.now)?performance.now:Gt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:Gt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:Gt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:Jd}}var Bv,zv;const jd=r=>"colorSpace"in r||"outputColorSpace"in r,ny=()=>{var r;return(r=Mm.ColorManagement)!=null?r:null},iy=r=>r&&r.isOrthographicCamera,PC=r=>r&&r.hasOwnProperty("current"),Yh=typeof window<"u"&&((Bv=window.document)!=null&&Bv.createElement||((zv=window.navigator)==null?void 0:zv.product)==="ReactNative")?Ee.useLayoutEffect:Ee.useEffect;function C2(r){const e=Ee.useRef(r);return Yh(()=>void(e.current=r),[r]),e}function IC({set:r}){return Yh(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}class R2 extends Ee.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}}R2.getDerivedStateFromError=()=>({error:!0});const ry="__default",kv=new Map,P2=r=>r&&!!r.memoized&&!!r.changes;function sy(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const ba=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function bu(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const Gt={obj:r=>r===Object(r)&&!Gt.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(Gt.str(r)||Gt.num(r)||Gt.boo(r))return r===e;const s=Gt.obj(r);if(s&&n==="reference")return r===e;const a=Gt.arr(r);if(a&&t==="reference")return r===e;if((a||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!Gt.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if(Gt.und(c)){if(a&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function I2(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function bo(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function Ap(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,a)=>s[a],r),{target:t,key:i}}else return{target:t,key:e}}const Hv=/-\d+$/;function Zd(r,e,t){if(Gt.str(t)){if(Hv.test(t)){const s=t.replace(Hv,""),{target:a,key:c}=Ap(r,s);Array.isArray(a[c])||(a[c]=[])}const{target:n,key:i}=Ap(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function Vv(r,e,t){var n,i;if(Gt.str(t)){const{target:s,key:a}=Ap(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[a]:s[a]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function oy(r,{children:e,key:t,ref:n,...i},{children:s,key:a,ref:c,...u}={},h=!1){const f=r.__r3f,p=Object.entries(i),m=[];if(h){const x=Object.keys(u);for(let w=0;w<x.length;w++)i.hasOwnProperty(x[w])||p.unshift([x[w],ry+"remove"])}p.forEach(([x,w])=>{var y;if((y=r.__r3f)!=null&&y.primitive&&x==="object"||Gt.equ(w,u[x]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(x))return m.push([x,w,!0,[]]);let _=[];x.includes("-")&&(_=x.split("-")),m.push([x,w,!1,_]);for(const E in i){const M=i[E];E.startsWith(`${x}-`)&&m.push([E,M,!1,E.split("-")])}});const g={...i};return f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.args&&(g.args=f.memoizedProps.args),f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.attach&&(g.attach=f.memoizedProps.attach),{memoized:g,changes:m}}function Jd(r,e){var t;const n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:a,changes:c}=P2(e)?e:oy(r,e),u=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=a);for(let m=0;m<c.length;m++){let[g,x,w,y]=c[m];if(jd(r)){const A="srgb",U="srgb-linear";g==="encoding"?(g="colorSpace",x=x===3001?A:U):g==="outputEncoding"&&(g="outputColorSpace",x=x===3001?A:U)}let _=r,E=_[g];if(y.length&&(E=y.reduce((M,A)=>M[A],r),!(E&&E.set))){const[M,...A]=y.reverse();_=A.reverse().reduce((U,P)=>U[P],r),g=M}if(x===ry+"remove")if(_.constructor){let M=kv.get(_.constructor);M||(M=new _.constructor,kv.set(_.constructor,M)),x=M[g]}else x=0;if(w&&n)x?n.handlers[g]=x:delete n.handlers[g],n.eventCount=Object.keys(n.handlers).length;else if(E&&E.set&&(E.copy||E instanceof Ds)){if(Array.isArray(x))E.fromArray?E.fromArray(x):E.set(...x);else if(E.copy&&x&&x.constructor&&E.constructor===x.constructor)E.copy(x);else if(x!==void 0){var h;const M=(h=E)==null?void 0:h.isColor;!M&&E.setScalar?E.setScalar(x):E instanceof Ds&&x instanceof Ds?E.mask=x.mask:E.set(x),!ny()&&s&&!s.linear&&M&&E.convertSRGBToLinear()}}else{var f;if(_[g]=x,(f=_[g])!=null&&f.isTexture&&_[g].format===Ln&&_[g].type===Ui&&s){const M=_[g];jd(M)&&jd(s.gl)?M.colorSpace=s.gl.outputColorSpace:M.encoding=s.gl.outputEncoding}}Co(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const m=bu(r).getState().internal,g=m.interaction.indexOf(r);g>-1&&m.interaction.splice(g,1),n.eventCount&&m.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&Tp(r),r}function Co(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function Tp(r){r.onUpdate==null||r.onUpdate(r)}function L2(r,e){r.manual||(iy(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function _u(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function D2(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return Do.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Do.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Do.ContinuousEventPriority;default:return Do.DefaultEventPriority}}function ay(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function U2(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{ay(t.capturedMap,e,n,i)})}function N2(r){function e(u){const{internal:h}=r.getState(),f=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(f*f+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(f=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+f]}))}function n(u,h){const f=r.getState(),p=new Set,m=[],g=h?h(f.internal.interaction):f.internal.interaction;for(let _=0;_<g.length;_++){const E=ba(g[_]);E&&(E.raycaster.camera=void 0)}f.previousRoot||f.events.compute==null||f.events.compute(u,f);function x(_){const E=ba(_);if(!E||!E.events.enabled||E.raycaster.camera===null)return[];if(E.raycaster.camera===void 0){var M;E.events.compute==null||E.events.compute(u,E,(M=E.previousRoot)==null?void 0:M.getState()),E.raycaster.camera===void 0&&(E.raycaster.camera=null)}return E.raycaster.camera?E.raycaster.intersectObject(_,!0):[]}let w=g.flatMap(x).sort((_,E)=>{const M=ba(_.object),A=ba(E.object);return!M||!A?_.distance-E.distance:A.events.priority-M.events.priority||_.distance-E.distance}).filter(_=>{const E=_u(_);return p.has(E)?!1:(p.add(E),!0)});f.events.filter&&(w=f.events.filter(w,f));for(const _ of w){let E=_.object;for(;E;){var y;(y=E.__r3f)!=null&&y.eventCount&&m.push({..._,eventObject:E}),E=E.parent}}if("pointerId"in u&&f.internal.capturedMap.has(u.pointerId))for(let _ of f.internal.capturedMap.get(u.pointerId).values())p.has(_u(_.intersection))||m.push(_.intersection);return m}function i(u,h,f,p){const m=r.getState();if(u.length){const g={stopped:!1};for(const x of u){const w=ba(x.object)||m,{raycaster:y,pointer:_,camera:E,internal:M}=w,A=new D(_.x,_.y,0).unproject(E),U=b=>{var C,Y;return(C=(Y=M.capturedMap.get(b))==null?void 0:Y.has(x.eventObject))!=null?C:!1},P=b=>{const C={intersection:x,target:h.target};M.capturedMap.has(b)?M.capturedMap.get(b).set(x.eventObject,C):M.capturedMap.set(b,new Map([[x.eventObject,C]])),h.target.setPointerCapture(b)},L=b=>{const C=M.capturedMap.get(b);C&&ay(M.capturedMap,x.eventObject,C,b)};let B={};for(let b in h){let C=h[b];typeof C!="function"&&(B[b]=C)}let z={...x,...B,pointer:_,intersections:u,stopped:g.stopped,delta:f,unprojectedPoint:A,ray:y.ray,camera:E,stopPropagation(){const b="pointerId"in h&&M.capturedMap.get(h.pointerId);if((!b||b.has(x.eventObject))&&(z.stopped=g.stopped=!0,M.hovered.size&&Array.from(M.hovered.values()).find(C=>C.eventObject===x.eventObject))){const C=u.slice(0,u.indexOf(x));s([...C,x])}},target:{hasPointerCapture:U,setPointerCapture:P,releasePointerCapture:L},currentTarget:{hasPointerCapture:U,setPointerCapture:P,releasePointerCapture:L},nativeEvent:h};if(p(z),g.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const f of h.hovered.values())if(!u.length||!u.find(p=>p.object===f.object&&p.index===f.index&&p.instanceId===f.instanceId)){const m=f.eventObject.__r3f,g=m==null?void 0:m.handlers;if(h.hovered.delete(_u(f)),m!=null&&m.eventCount){const x={...f,intersections:u};g.onPointerOut==null||g.onPointerOut(x),g.onPointerLeave==null||g.onPointerLeave(x)}}}function a(u,h){for(let f=0;f<h.length;f++){const p=h[f].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:f}=r.getState();"pointerId"in h&&f.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{f.capturedMap.has(h.pointerId)&&(f.capturedMap.delete(h.pointerId),s([]))})}}return function(f){const{onPointerMissed:p,internal:m}=r.getState();m.lastEvent.current=f;const g=u==="onPointerMove",x=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",y=n(f,g?t:void 0),_=x?e(f):0;u==="onPointerDown"&&(m.initialClick=[f.offsetX,f.offsetY],m.initialHits=y.map(M=>M.eventObject)),x&&!y.length&&_<=2&&(a(f,m.interaction),p&&p(f)),g&&s(y);function E(M){const A=M.eventObject,U=A.__r3f,P=U==null?void 0:U.handlers;if(U!=null&&U.eventCount)if(g){if(P.onPointerOver||P.onPointerEnter||P.onPointerOut||P.onPointerLeave){const L=_u(M),B=m.hovered.get(L);B?B.stopped&&M.stopPropagation():(m.hovered.set(L,M),P.onPointerOver==null||P.onPointerOver(M),P.onPointerEnter==null||P.onPointerEnter(M))}P.onPointerMove==null||P.onPointerMove(M)}else{const L=P[u];L?(!x||m.initialHits.includes(A))&&(a(f,m.interaction.filter(B=>!m.initialHits.includes(B))),L(M)):x&&m.initialHits.includes(A)&&a(f,m.interaction.filter(B=>!m.initialHits.includes(B)))}}i(y,f,_,E)}}return{handlePointer:c}}const ly=r=>!!(r!=null&&r.render),cy=Ee.createContext(null),O2=(r,e)=>{const t=cS((c,u)=>{const h=new D,f=new D,p=new D;function m(_=u().camera,E=f,M=u().size){const{width:A,height:U,top:P,left:L}=M,B=A/U;E.isVector3?p.copy(E):p.set(...E);const z=_.getWorldPosition(h).distanceTo(p);if(iy(_))return{width:A/_.zoom,height:U/_.zoom,top:P,left:L,factor:1,distance:z,aspect:B};{const b=_.fov*Math.PI/180,C=2*Math.tan(b/2)*z,Y=C*(A/U);return{width:Y,height:C,top:P,left:L,factor:A/Y,distance:z,aspect:B}}}let g;const x=_=>c(E=>({performance:{...E.performance,current:_}})),w=new ce;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(_=1)=>r(u(),_),advance:(_,E)=>e(_,E,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new vm,pointer:w,mouse:w,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const _=u();g&&clearTimeout(g),_.performance.current!==_.performance.min&&x(_.performance.min),g=setTimeout(()=>x(u().performance.max),_.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:_=>c(E=>({...E,events:{...E.events,..._}})),setSize:(_,E,M,A,U)=>{const P=u().camera,L={width:_,height:E,top:A||0,left:U||0,updateStyle:M};c(B=>({size:L,viewport:{...B.viewport,...m(P,f,L)}}))},setDpr:_=>c(E=>{const M=sy(_);return{viewport:{...E.viewport,dpr:M,initialDpr:E.viewport.initialDpr||M}}}),setFrameloop:(_="always")=>{const E=u().clock;E.stop(),E.elapsedTime=0,_!=="never"&&(E.start(),E.elapsedTime=0),c(()=>({frameloop:_}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:Ee.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(_,E,M)=>{const A=u().internal;return A.priority=A.priority+(E>0?1:0),A.subscribers.push({ref:_,priority:E,store:M}),A.subscribers=A.subscribers.sort((U,P)=>U.priority-P.priority),()=>{const U=u().internal;U!=null&&U.subscribers&&(U.priority=U.priority-(E>0?1:0),U.subscribers=U.subscribers.filter(P=>P.ref!==_))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,a=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:f,set:p}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,L2(c,u),f.setPixelRatio(h.dpr);const g=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&f.domElement instanceof HTMLCanvasElement;f.setSize(u.width,u.height,g)}c!==a&&(a=c,p(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};let xu,F2=new Set,B2=new Set,z2=new Set;function Kd(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function Ca(r,e){switch(r){case"before":return Kd(F2,e);case"after":return Kd(B2,e);case"tail":return Kd(z2,e)}}let Qd,$d;function ep(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),Qd=e.internal.subscribers,xu=0;xu<Qd.length;xu++)$d=Qd[xu],$d.ref.current($d.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function k2(r){let e=!1,t=!1,n,i,s;function a(h){i=requestAnimationFrame(a),e=!0,n=0,Ca("before",h),t=!0;for(const p of r.values()){var f;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((f=s.gl.xr)!=null&&f.isPresenting)&&(n+=ep(h,s))}if(t=!1,Ca("after",h),n===0)return Ca("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,f=1){var p;if(!h)return r.forEach(m=>c(m.store.getState(),f));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(f>1?h.internal.frames=Math.min(60,h.internal.frames+f):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(a)))}function u(h,f=!0,p,m){if(f&&Ca("before",h),p)ep(h,p,m);else for(const g of r.values())ep(h,g.store.getState());f&&Ca("after",h)}return{loop:a,invalidate:c,advance:u}}function uy(){const r=Ee.useContext(cy);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function ul(r=t=>t,e){return uy()(r,e)}function Xs(r,e=0){const t=uy(),n=t.getState().internal.subscribe,i=C2(r);return Yh(()=>n(i,e,t),[e,n,t]),null}const Ho=new Map,{invalidate:Gv,advance:Wv}=k2(Ho),{reconciler:ph,applyProps:qr}=b2(Ho,D2),To={objects:"shallow",strict:!1},H2=(r,e)=>{const t=typeof r=="function"?r(e):r;return ly(t)?t:new lx({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function V2(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:a,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:a,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:a}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:a,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function LC(r){const e=Ho.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||O2(Gv,Wv),a=t||ph.createContainer(s,Do.ConcurrentRoot,null,!1,null,"",i,null);e||Ho.set(r,{fiber:a,store:s});let c,u=!1,h;return{configure(f={}){let{gl:p,size:m,scene:g,events:x,onCreated:w,shadows:y=!1,linear:_=!1,flat:E=!1,legacy:M=!1,orthographic:A=!1,frameloop:U="always",dpr:P=[1,2],performance:L,raycaster:B,camera:z,onPointerMissed:b}=f,C=s.getState(),Y=C.gl;C.gl||C.set({gl:Y=H2(p,r)});let j=C.raycaster;j||C.set({raycaster:j=new Kx});const{params:Q,...re}=B||{};if(Gt.equ(re,j,To)||qr(j,{...re}),Gt.equ(Q,j.params,To)||qr(j,{params:{...j.params,...Q}}),!C.camera||C.camera===h&&!Gt.equ(h,z,To)){h=z;const me=z instanceof ml,ve=me?z:A?new Hs(0,0,0,0,.1,1e3):new on(75,0,.1,1e3);me||(ve.position.z=5,z&&(qr(ve,z),("aspect"in z||"left"in z||"right"in z||"bottom"in z||"top"in z)&&(ve.manual=!0,ve.updateProjectionMatrix())),!C.camera&&!(z!=null&&z.rotation)&&ve.lookAt(0,0,0)),C.set({camera:ve}),j.camera=ve}if(!C.scene){let me;g!=null&&g.isScene?me=g:(me=new Kp,g&&qr(me,g)),C.set({scene:bo(me)})}if(!C.xr){var Z;const me=(Je,se)=>{const de=s.getState();de.frameloop!=="never"&&Wv(Je,!0,de,se)},ve=()=>{const Je=s.getState();Je.gl.xr.enabled=Je.gl.xr.isPresenting,Je.gl.xr.setAnimationLoop(Je.gl.xr.isPresenting?me:null),Je.gl.xr.isPresenting||Gv(Je)},st={connect(){const Je=s.getState().gl;Je.xr.addEventListener("sessionstart",ve),Je.xr.addEventListener("sessionend",ve)},disconnect(){const Je=s.getState().gl;Je.xr.removeEventListener("sessionstart",ve),Je.xr.removeEventListener("sessionend",ve)}};typeof((Z=Y.xr)==null?void 0:Z.addEventListener)=="function"&&st.connect(),C.set({xr:st})}if(Y.shadowMap){const me=Y.shadowMap.enabled,ve=Y.shadowMap.type;if(Y.shadowMap.enabled=!!y,Gt.boo(y))Y.shadowMap.type=Da;else if(Gt.str(y)){var he;const st={basic:o_,percentage:mh,soft:Da,variance:bi};Y.shadowMap.type=(he=st[y])!=null?he:Da}else Gt.obj(y)&&Object.assign(Y.shadowMap,y);(me!==Y.shadowMap.enabled||ve!==Y.shadowMap.type)&&(Y.shadowMap.needsUpdate=!0)}const ee=ny();ee&&("enabled"in ee?ee.enabled=!M:"legacyMode"in ee&&(ee.legacyMode=M)),u||qr(Y,{outputEncoding:_?3e3:3001,toneMapping:E?Qi:Rp}),C.legacy!==M&&C.set(()=>({legacy:M})),C.linear!==_&&C.set(()=>({linear:_})),C.flat!==E&&C.set(()=>({flat:E})),p&&!Gt.fun(p)&&!ly(p)&&!Gt.equ(p,Y,To)&&qr(Y,p),x&&!C.events.handlers&&C.set({events:x(s)});const Ae=V2(r,m);return Gt.equ(Ae,C.size,To)||C.setSize(Ae.width,Ae.height,Ae.updateStyle,Ae.top,Ae.left),P&&C.viewport.dpr!==sy(P)&&C.setDpr(P),C.frameloop!==U&&C.setFrameloop(U),C.onPointerMissed||C.set({onPointerMissed:b}),L&&!Gt.equ(L,C.performance,To)&&C.set(me=>({performance:{...me.performance,...L}})),c=w,u=!0,this},render(f){return u||this.configure(),ph.updateContainer(V.jsx(G2,{store:s,children:f,onCreated:c,rootElement:r}),a,null,()=>{}),s},unmount(){W2(r)}}}function G2({store:r,children:e,onCreated:t,rootElement:n}){return Yh(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),V.jsx(cy.Provider,{value:r,children:e})}function W2(r,e){const t=Ho.get(r),n=t==null?void 0:t.fiber;if(n){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),ph.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,a,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(a=s.renderLists)==null||a.dispose==null||a.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),I2(i),Ho.delete(r)}catch{}},500)})}}ph.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:Ee.version});const tp={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function DC(r){const{handlePointer:e}=N2(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(tp).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(a=>({events:{...a.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([a,c])=>{const[u,h]=tp[a];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,a])=>{if(n&&n.connected instanceof HTMLElement){const[c]=tp[s];n.connected.removeEventListener(c,a)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function zs(){return zs=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},zs.apply(null,arguments)}const wl=new D,wm=new D,X2=new D,Xv=new ce;function Y2(r,e,t){const n=wl.setFromMatrixPosition(r.matrixWorld);n.project(e);const i=t.width/2,s=t.height/2;return[n.x*i+i,-(n.y*s)+s]}function q2(r,e){const t=wl.setFromMatrixPosition(r.matrixWorld),n=wm.setFromMatrixPosition(e.matrixWorld),i=t.sub(n),s=e.getWorldDirection(X2);return i.angleTo(s)>Math.PI/2}function j2(r,e,t,n){const i=wl.setFromMatrixPosition(r.matrixWorld),s=i.clone();s.project(e),Xv.set(s.x,s.y),t.setFromCamera(Xv,e);const a=t.intersectObjects(n,!0);if(a.length){const c=a[0].distance;return i.distanceTo(t.ray.origin)<c}return!0}function Z2(r,e){if(e instanceof Hs)return e.zoom;if(e instanceof on){const t=wl.setFromMatrixPosition(r.matrixWorld),n=wm.setFromMatrixPosition(e.matrixWorld),i=e.fov*Math.PI/180,s=t.distanceTo(n);return 1/(2*Math.tan(i/2)*s)}else return 1}function J2(r,e,t){if(e instanceof on||e instanceof Hs){const n=wl.setFromMatrixPosition(r.matrixWorld),i=wm.setFromMatrixPosition(e.matrixWorld),s=n.distanceTo(i),a=(t[1]-t[0])/(e.far-e.near),c=t[1]-a*e.far;return Math.round(a*s+c)}}const bp=r=>Math.abs(r)<1e-10?0:r;function hy(r,e,t=""){let n="matrix3d(";for(let i=0;i!==16;i++)n+=bp(e[i]*r.elements[i])+(i!==15?",":")");return t+n}const K2=(r=>e=>hy(e,r))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),Q2=(r=>(e,t)=>hy(e,r(t),"translate(-50%,-50%)"))(r=>[1/r,1/r,1/r,1,-1/r,-1/r,-1/r,-1,1/r,1/r,1/r,1,1,1,1,1]);function $2(r){return r&&typeof r=="object"&&"current"in r}const eC=Ee.forwardRef(({children:r,eps:e=.001,style:t,className:n,prepend:i,center:s,fullscreen:a,portal:c,distanceFactor:u,sprite:h=!1,transform:f=!1,occlude:p,onOcclude:m,castShadow:g,receiveShadow:x,material:w,geometry:y,zIndexRange:_=[16777271,0],calculatePosition:E=Y2,as:M="div",wrapperClass:A,pointerEvents:U="auto",...P},L)=>{const{gl:B,camera:z,scene:b,size:C,raycaster:Y,events:j,viewport:Q}=ul(),[re]=Ee.useState(()=>document.createElement(M)),Z=Ee.useRef(),he=Ee.useRef(null),ee=Ee.useRef(0),Ae=Ee.useRef([0,0]),me=Ee.useRef(null),ve=Ee.useRef(null),st=(c==null?void 0:c.current)||j.connected||B.domElement.parentNode,Je=Ee.useRef(null),se=Ee.useRef(!1),de=Ee.useMemo(()=>p&&p!=="blending"||Array.isArray(p)&&p.length&&$2(p[0]),[p]);Ee.useLayoutEffect(()=>{const je=B.domElement;p&&p==="blending"?(je.style.zIndex=`${Math.floor(_[0]/2)}`,je.style.position="absolute",je.style.pointerEvents="none"):(je.style.zIndex=null,je.style.position=null,je.style.pointerEvents=null)},[p]),Ee.useLayoutEffect(()=>{if(he.current){const je=Z.current=uS(re);if(b.updateMatrixWorld(),f)re.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const Re=E(he.current,z,C);re.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${Re[0]}px,${Re[1]}px,0);transform-origin:0 0;`}return st&&(i?st.prepend(re):st.appendChild(re)),()=>{st&&st.removeChild(re),je.unmount()}}},[st,f]),Ee.useLayoutEffect(()=>{A&&(re.className=A)},[A]);const Oe=Ee.useMemo(()=>f?{position:"absolute",top:0,left:0,width:C.width,height:C.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:s?"translate3d(-50%,-50%,0)":"none",...a&&{top:-C.height/2,left:-C.width/2,width:C.width,height:C.height},...t},[t,s,a,C,f]),Te=Ee.useMemo(()=>({position:"absolute",pointerEvents:U}),[U]);Ee.useLayoutEffect(()=>{if(se.current=!1,f){var je;(je=Z.current)==null||je.render(Ee.createElement("div",{ref:me,style:Oe},Ee.createElement("div",{ref:ve,style:Te},Ee.createElement("div",{ref:L,className:n,style:t,children:r}))))}else{var Re;(Re=Z.current)==null||Re.render(Ee.createElement("div",{ref:L,style:Oe,className:n,children:r}))}});const tt=Ee.useRef(!0);Xs(je=>{if(he.current){z.updateMatrixWorld(),he.current.updateWorldMatrix(!0,!1);const Re=f?Ae.current:E(he.current,z,C);if(f||Math.abs(ee.current-z.zoom)>e||Math.abs(Ae.current[0]-Re[0])>e||Math.abs(Ae.current[1]-Re[1])>e){const le=q2(he.current,z);let N=!1;de&&(Array.isArray(p)?N=p.map(ye=>ye.current):p!=="blending"&&(N=[b]));const Me=tt.current;if(N){const ye=j2(he.current,z,Y,N);tt.current=ye&&!le}else tt.current=!le;Me!==tt.current&&(m?m(!tt.current):re.style.display=tt.current?"block":"none");const xe=Math.floor(_[0]/2),pe=p?de?[_[0],xe]:[xe-1,0]:_;if(re.style.zIndex=`${J2(he.current,z,pe)}`,f){const[ye,Ze]=[C.width/2,C.height/2],Ie=z.projectionMatrix.elements[5]*Ze,{isOrthographicCamera:O,top:R,left:q,bottom:oe,right:ue}=z,ae=K2(z.matrixWorldInverse),Ye=O?`scale(${Ie})translate(${bp(-(ue+q)/2)}px,${bp((R+oe)/2)}px)`:`translateZ(${Ie}px)`;let we=he.current.matrixWorld;h&&(we=z.matrixWorldInverse.clone().transpose().copyPosition(we).scale(he.current.scale),we.elements[3]=we.elements[7]=we.elements[11]=0,we.elements[15]=1),re.style.width=C.width+"px",re.style.height=C.height+"px",re.style.perspective=O?"":`${Ie}px`,me.current&&ve.current&&(me.current.style.transform=`${Ye}${ae}translate(${ye}px,${Ze}px)`,ve.current.style.transform=Q2(we,1/((u||10)/400)))}else{const ye=u===void 0?1:Z2(he.current,z)*u;re.style.transform=`translate3d(${Re[0]}px,${Re[1]}px,0) scale(${ye})`}Ae.current=Re,ee.current=z.zoom}}if(!de&&Je.current&&!se.current)if(f){if(me.current){const Re=me.current.children[0];if(Re!=null&&Re.clientWidth&&Re!=null&&Re.clientHeight){const{isOrthographicCamera:le}=z;if(le||y)P.scale&&(Array.isArray(P.scale)?P.scale instanceof D?Je.current.scale.copy(P.scale.clone().divideScalar(1)):Je.current.scale.set(1/P.scale[0],1/P.scale[1],1/P.scale[2]):Je.current.scale.setScalar(1/P.scale));else{const N=(u||10)/400,Me=Re.clientWidth*N,xe=Re.clientHeight*N;Je.current.scale.set(Me,xe,1)}se.current=!0}}}else{const Re=re.children[0];if(Re!=null&&Re.clientWidth&&Re!=null&&Re.clientHeight){const le=1/Q.factor,N=Re.clientWidth*le,Me=Re.clientHeight*le;Je.current.scale.set(N,Me,1),se.current=!0}Je.current.lookAt(je.camera.position)}});const nt=Ee.useMemo(()=>({vertexShader:f?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[f]);return Ee.createElement("group",zs({},P,{ref:he}),p&&!de&&Ee.createElement("mesh",{castShadow:g,receiveShadow:x,ref:Je},y||Ee.createElement("planeGeometry",null),w||Ee.createElement("shaderMaterial",{side:Pi,vertexShader:nt.vertexShader,fragmentShader:nt.fragmentShader})))}),fy=parseInt(Vo.replace(/\D+/g,"")),dy=fy>=125?"uv1":"uv2";function py(r,e=Math.PI/3){const t=Math.cos(e),n=(1+1e-10)*100,i=[new D,new D,new D],s=new D,a=new D,c=new D,u=new D;function h(w){const y=~~(w.x*n),_=~~(w.y*n),E=~~(w.z*n);return`${y},${_},${E}`}const f=r.index?r.toNonIndexed():r,p=f.attributes.position,m={};for(let w=0,y=p.count/3;w<y;w++){const _=3*w,E=i[0].fromBufferAttribute(p,_+0),M=i[1].fromBufferAttribute(p,_+1),A=i[2].fromBufferAttribute(p,_+2);s.subVectors(A,M),a.subVectors(E,M);const U=new D().crossVectors(s,a).normalize();for(let P=0;P<3;P++){const L=i[P],B=h(L);B in m||(m[B]=[]),m[B].push(U)}}const g=new Float32Array(p.count*3),x=new zt(g,3,!1);for(let w=0,y=p.count/3;w<y;w++){const _=3*w,E=i[0].fromBufferAttribute(p,_+0),M=i[1].fromBufferAttribute(p,_+1),A=i[2].fromBufferAttribute(p,_+2);s.subVectors(A,M),a.subVectors(E,M),c.crossVectors(s,a).normalize();for(let U=0;U<3;U++){const P=i[U],L=h(P),B=m[L];u.set(0,0,0);for(let z=0,b=B.length;z<b;z++){const C=B[z];c.dot(C)>t&&u.add(C)}u.normalize(),x.setXYZ(_+U,u.x,u.y,u.z)}}return f.setAttribute("normal",x),f}const Yv=new vn,yu=new D;class Em extends mm{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new qe(e,3)),this.setAttribute("uv",new qe(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new dh(t,6,1);return this.setAttribute("instanceStart",new oi(n,3,0)),this.setAttribute("instanceEnd",new oi(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new dh(n,t*2,1);return this.setAttribute("instanceColorStart",new oi(i,t,0)),this.setAttribute("instanceColorEnd",new oi(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new cm(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Yv.setFromBufferAttribute(t),this.boundingBox.union(Yv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)yu.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(yu)),yu.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(yu));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class my extends Em{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){const n=e.length-t,i=new Float32Array(2*n);if(t===3)for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];else for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5],i[2*s+6]=e[s+6],i[2*s+7]=e[s+7];return super.setColors(i,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Am extends ci{constructor(e){super({type:"LineMaterial",uniforms:tl.clone(tl.merge([Ce.common,Ce.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ce(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${fy>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const np=new wt,qv=new D,jv=new D,Sn=new wt,Mn=new wt,Yi=new wt,ip=new D,rp=new at,wn=new Qx,Zv=new D,Su=new vn,Mu=new _n,qi=new wt;let Zi,Us;function Jv(r,e,t){return qi.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),qi.multiplyScalar(1/qi.w),qi.x=Us/t.width,qi.y=Us/t.height,qi.applyMatrix4(r.projectionMatrixInverse),qi.multiplyScalar(1/qi.w),Math.abs(Math.max(qi.x,qi.y))}function tC(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,i.count);for(let c=0,u=a;c<u;c++){wn.start.fromBufferAttribute(i,c),wn.end.fromBufferAttribute(s,c),wn.applyMatrix4(t);const h=new D,f=new D;Zi.distanceSqToSegment(wn.start,wn.end,f,h),f.distanceTo(h)<Us*.5&&e.push({point:f,pointOnLine:h,distance:Zi.origin.distanceTo(f),object:r,face:null,faceIndex:c,uv:null,[dy]:null})}}function nC(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,a=r.matrixWorld,c=r.geometry,u=c.attributes.instanceStart,h=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),p=-e.near;Zi.at(1,Yi),Yi.w=1,Yi.applyMatrix4(e.matrixWorldInverse),Yi.applyMatrix4(n),Yi.multiplyScalar(1/Yi.w),Yi.x*=s.x/2,Yi.y*=s.y/2,Yi.z=0,ip.copy(Yi),rp.multiplyMatrices(e.matrixWorldInverse,a);for(let m=0,g=f;m<g;m++){if(Sn.fromBufferAttribute(u,m),Mn.fromBufferAttribute(h,m),Sn.w=1,Mn.w=1,Sn.applyMatrix4(rp),Mn.applyMatrix4(rp),Sn.z>p&&Mn.z>p)continue;if(Sn.z>p){const M=Sn.z-Mn.z,A=(Sn.z-p)/M;Sn.lerp(Mn,A)}else if(Mn.z>p){const M=Mn.z-Sn.z,A=(Mn.z-p)/M;Mn.lerp(Sn,A)}Sn.applyMatrix4(n),Mn.applyMatrix4(n),Sn.multiplyScalar(1/Sn.w),Mn.multiplyScalar(1/Mn.w),Sn.x*=s.x/2,Sn.y*=s.y/2,Mn.x*=s.x/2,Mn.y*=s.y/2,wn.start.copy(Sn),wn.start.z=0,wn.end.copy(Mn),wn.end.z=0;const w=wn.closestPointToPointParameter(ip,!0);wn.at(w,Zv);const y=Gp.lerp(Sn.z,Mn.z,w),_=y>=-1&&y<=1,E=ip.distanceTo(Zv)<Us*.5;if(_&&E){wn.start.fromBufferAttribute(u,m),wn.end.fromBufferAttribute(h,m),wn.start.applyMatrix4(a),wn.end.applyMatrix4(a);const M=new D,A=new D;Zi.distanceSqToSegment(wn.start,wn.end,A,M),t.push({point:A,pointOnLine:M,distance:Zi.origin.distanceTo(A),object:r,face:null,faceIndex:m,uv:null,[dy]:null})}}}class gy extends Yt{constructor(e=new Em,t=new Am({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let a=0,c=0,u=t.count;a<u;a++,c+=2)qv.fromBufferAttribute(t,a),jv.fromBufferAttribute(n,a),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+qv.distanceTo(jv);const s=new dh(i,2,1);return e.setAttribute("instanceDistanceStart",new oi(s,1,0)),e.setAttribute("instanceDistanceEnd",new oi(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Zi=e.ray;const a=this.matrixWorld,c=this.geometry,u=this.material;Us=u.linewidth+s,c.boundingSphere===null&&c.computeBoundingSphere(),Mu.copy(c.boundingSphere).applyMatrix4(a);let h;if(n)h=Us*.5;else{const p=Math.max(i.near,Mu.distanceToPoint(Zi.origin));h=Jv(i,p,u.resolution)}if(Mu.radius+=h,Zi.intersectsSphere(Mu)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),Su.copy(c.boundingBox).applyMatrix4(a);let f;if(n)f=Us*.5;else{const p=Math.max(i.near,Su.distanceToPoint(Zi.origin));f=Jv(i,p,u.resolution)}Su.expandByScalar(f),Zi.intersectsBox(Su)!==!1&&(n?tC(this,t):nC(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(np),this.material.uniforms.resolution.value.set(np.z,np.w))}}class iC extends gy{constructor(e=new my,t=new Am({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const rC=Ee.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:i,lineWidth:s,segments:a,dashed:c,...u},h){var f,p;const m=ul(_=>_.size),g=Ee.useMemo(()=>a?new gy:new iC,[a]),[x]=Ee.useState(()=>new Am),w=(n==null||(f=n[0])==null?void 0:f.length)===4?4:3,y=Ee.useMemo(()=>{const _=a?new Em:new my,E=e.map(M=>{const A=Array.isArray(M);return M instanceof D||M instanceof wt?[M.x,M.y,M.z]:M instanceof ce?[M.x,M.y,0]:A&&M.length===3?[M[0],M[1],M[2]]:A&&M.length===2?[M[0],M[1],0]:M});if(_.setPositions(E.flat()),n){t=16777215;const M=n.map(A=>A instanceof Ne?A.toArray():A);_.setColors(M.flat(),w)}return _},[e,a,n,w]);return Ee.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),Ee.useLayoutEffect(()=>{c?x.defines.USE_DASH="":delete x.defines.USE_DASH,x.needsUpdate=!0},[c,x]),Ee.useEffect(()=>()=>{y.dispose(),x.dispose()},[y]),Ee.createElement("primitive",zs({object:g,ref:h},u),Ee.createElement("primitive",{object:y,attach:"geometry"}),Ee.createElement("primitive",zs({object:x,attach:"material",color:t,vertexColors:!!n,resolution:[m.width,m.height],linewidth:(p=i??s)!==null&&p!==void 0?p:1,dashed:c,transparent:w===4},u)))});function sC(r,e,t,n){const i=class extends ci{constructor(a={}){const c=Object.entries(r);super({uniforms:c.reduce((u,[h,f])=>{const p=tl.clone({[h]:{value:f}});return{...u,...p}},{}),vertexShader:e,fragmentShader:t}),this.key="",c.forEach(([u])=>Object.defineProperty(this,u,{get:()=>this.uniforms[u].value,set:h=>this.uniforms[u].value=h})),Object.assign(this,a)}};return i.key=Gp.generateUUID(),i}const oC=()=>parseInt(Vo.replace(/\D+/g,"")),aC=oC(),Kv=sC({screenspace:!1,color:new Ne("black"),opacity:1,thickness:.05,size:new ce},`#include <common>
   #include <morphtarget_pars_vertex>
   #include <skinning_pars_vertex>
   #include <clipping_planes_pars_vertex>
   uniform float thickness;
   uniform bool screenspace;
   uniform vec2 size;
   void main() {
     #if defined (USE_SKINNING)
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
     #include <clipping_planes_vertex>
     vec4 tNormal = vec4(normal, 0.0);
     vec4 tPosition = vec4(transformed, 1.0);
     #ifdef USE_INSTANCING
       tNormal = instanceMatrix * tNormal;
       tPosition = instanceMatrix * tPosition;
     #endif
     if (screenspace) {
       vec3 newPosition = tPosition.xyz + tNormal.xyz * thickness;
       gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0); 
     } else {
       vec4 clipPosition = projectionMatrix * modelViewMatrix * tPosition;
       vec4 clipNormal = projectionMatrix * modelViewMatrix * tNormal;
       vec2 offset = normalize(clipNormal.xy) * thickness / size * clipPosition.w * 2.0;
       clipPosition.xy += offset;
       gl_Position = clipPosition;
     }
   }`,`uniform vec3 color;
   uniform float opacity;
   #include <clipping_planes_pars_fragment>
   void main(){
     #include <clipping_planes_fragment>
     gl_FragColor = vec4(color, opacity);
     #include <tonemapping_fragment>
     #include <${aC>=154?"colorspace_fragment":"encodings_fragment"}>
   }`);function vy({color:r="black",opacity:e=1,transparent:t=!1,screenspace:n=!1,toneMapped:i=!0,polygonOffset:s=!1,polygonOffsetFactor:a=0,renderOrder:c=0,thickness:u=.05,angle:h=Math.PI,clippingPlanes:f,...p}){const m=Ee.useRef(),[g]=Ee.useState(()=>new Kv({side:Dn})),{gl:x}=ul(),w=x.getDrawingBufferSize(new ce);Ee.useMemo(()=>T2({OutlinesMaterial:Kv}),[]);const y=Ee.useRef(0),_=Ee.useRef();return Ee.useLayoutEffect(()=>{const E=m.current;if(!E)return;const M=E.parent;if(M&&M.geometry&&(y.current!==h||_.current!==M.geometry)){var A;y.current=h,_.current=M.geometry;let U=(A=E.children)==null?void 0:A[0];U&&(h&&U.geometry.dispose(),E.remove(U)),M.skeleton?(U=new $p,U.material=g,U.bind(M.skeleton,M.bindMatrix),E.add(U)):M.isInstancedMesh?(U=new tm(M.geometry,g,M.count),U.instanceMatrix=M.instanceMatrix,E.add(U)):(U=new Yt,U.material=g,E.add(U)),U.geometry=h?py(M.geometry,h):M.geometry,U.morphTargetInfluences=M.morphTargetInfluences,U.morphTargetDictionary=M.morphTargetDictionary}}),Ee.useLayoutEffect(()=>{const E=m.current;if(!E)return;const M=E.children[0];if(M){M.renderOrder=c;const A=E.parent;qr(M,{morphTargetInfluences:A.morphTargetInfluences,morphTargetDictionary:A.morphTargetDictionary}),qr(M.material,{transparent:t,thickness:u,color:r,opacity:e,size:w,screenspace:n,toneMapped:i,polygonOffset:s,polygonOffsetFactor:a,clippingPlanes:f,clipping:f&&f.length>0})}}),Ee.useEffect(()=>()=>{const E=m.current;if(!E)return;const M=E.children[0];M&&(h&&M.geometry.dispose(),E.remove(M))},[]),Ee.createElement("group",zs({ref:m},p))}const ji=1e-5;function lC(r,e,t){const n=new er,i=t-ji;return n.absarc(ji,ji,ji,-Math.PI/2,-Math.PI,!0),n.absarc(ji,e-i*2,ji,Math.PI,Math.PI/2,!0),n.absarc(r-i*2,e-i*2,ji,Math.PI/2,0,!0),n.absarc(r-i*2,ji,ji,0,-Math.PI/2,!0),n}const cC=Ee.forwardRef(function({args:[e=1,t=1,n=1]=[],radius:i=.05,steps:s=1,smoothness:a=4,bevelSegments:c=4,creaseAngle:u=.4,children:h,...f},p){const m=Ee.useMemo(()=>lC(e,t,i),[e,t,i]),g=Ee.useMemo(()=>({depth:n-i*2,bevelEnabled:!0,bevelSegments:c*2,steps:s,bevelSize:i-ji,bevelThickness:i,curveSegments:a}),[n,i,a]),x=Ee.useRef(null);return Ee.useLayoutEffect(()=>{x.current&&(x.current.center(),py(x.current,u))},[m,g]),Ee.createElement("mesh",zs({ref:p},f),Ee.createElement("extrudeGeometry",{ref:x,args:[m,g]}),h)}),rt=(r,e={})=>new Er({color:r,roughness:.9,metalness:0,flatShading:!0,...e,...e.roughness!=null?{roughness:Math.max(.55,e.roughness)}:{},...e.metalness!=null?{metalness:0}:{}}),be={ground:rt("#e3e9e2",{roughness:1}),pad:rt("#f4f5f2",{roughness:1}),road:rt("#d9dedf",{roughness:1}),roadEdge:rt("#c9d0d0",{roughness:1}),laneWhite:rt("#ffffff",{roughness:1}),yellow:rt("#f6c21c",{roughness:.9}),wall:rt("#f3f4f1"),wallShade:rt("#dfe5e3"),blue:rt("#33ab9c",{roughness:.7}),blueDark:rt("#1d8579",{roughness:.6}),blueLight:rt("#6fd3c3",{roughness:.6}),roofWhite:rt("#f6f8f7",{roughness:.7}),doorDark:rt("#2c3a47",{roughness:.9}),doorInside:rt("#5b6b7a",{roughness:1}),glass:rt("#0c8479",{roughness:.3}),tire:rt("#2b3238",{roughness:.9}),chassis:rt("#5b6b7a",{roughness:.8}),trailer:rt("#f7f8fa",{roughness:.55}),windshield:rt("#2c3a47",{roughness:.6}),wood:rt("#c79a68",{roughness:1}),carton:rt("#d9a96f",{roughness:.95}),cartonDark:rt("#c8935a",{roughness:.95}),wrapBlue:rt("#3a66e6",{roughness:.45}),wrapWhite:rt("#edf1fa",{roughness:.45}),tote:rt("#f5c518",{roughness:.6}),forkYellow:rt("#f6c21c",{roughness:.55}),black:rt("#262a33",{roughness:.7}),rackBlue:rt("#14a39a",{roughness:.6}),rackOrange:rt("#f08a2a",{roughness:.6}),grass:rt("#cfe5c4",{roughness:1}),treeGreen:rt("#5fb57f",{roughness:.9}),treeGreen2:rt("#79c48b",{roughness:.9}),trunk:rt("#9a7b5f",{roughness:1}),fence:new Er({color:"#b7cbc8",transparent:!0,opacity:.38,roughness:.4}),fencePost:rt("#9aa5ab"),floorGray:rt("#dfe3e1",{roughness:1}),green:rt("#22c55e",{roughness:.4,emissive:"#22c55e",emissiveIntensity:.5}),greenSoft:new Er({color:"#7ee0a5",transparent:!0,opacity:.35}),red:rt("#ef4444",{roughness:.4,emissive:"#ef4444",emissiveIntensity:.4}),orange:rt("#f2742a",{roughness:.6}),hvac:rt("#e3ebea",{roughness:.6}),fan:rt("#6b767c",{roughness:.6}),person:rt("#f2742a",{roughness:.8}),skin:rt("#e9b991",{roughness:.8}),pin:rt("#14a39a",{roughness:.35}),white:rt("#ffffff",{roughness:.5}),van:rt("#f7f8fa",{roughness:.45}),vanBlue:rt("#14a39a",{roughness:.5}),hostler:rt("#f5a524",{roughness:.55}),plane:rt("#f7f8fa",{roughness:.35}),apron:rt("#eceeed",{roughness:1}),pod:rt("#f6c42a",{roughness:.7}),driveUnit:rt("#f08a2a",{roughness:.5}),driveUnitBody:rt("#2c3a47",{roughness:.45}),gocart:rt("#14a39a",{roughness:.5}),reefer:rt("#e3ebea",{roughness:.6})},hl="#14a39a",Oo=new Map;function uC(r,e,t){const n=`liv:${r}`;if(Oo.has(n))return Oo.get(n);const i=document.createElement("canvas");i.width=1024,i.height=192;const s=i.getContext("2d");s.fillStyle="#fafbff",s.fillRect(0,0,i.width,i.height),s.fillStyle=e,s.beginPath(),s.moveTo(0,150),s.bezierCurveTo(300,150,600,110,1024,70),s.lineTo(1024,192),s.lineTo(0,192),s.closePath(),s.fill(),s.fillStyle=t==="#ffffff"?e:t,s.beginPath(),s.moveTo(90,50),s.lineTo(130,30),s.lineTo(170,50),s.lineTo(170,95),s.lineTo(130,115),s.lineTo(90,95),s.closePath(),s.fill(),s.fillStyle="#ffffff",s.fillRect(118,55,24,24),s.fillStyle=t==="#ffffff"?e:t,s.font='700 64px "Inter Variable", Inter, system-ui, sans-serif',s.textBaseline="middle",s.fillText(r,200,74);const a=new Lh(i);return a.colorSpace=jn,a.anisotropy=4,Oo.set(n,a),a}function NC(r,e,t=!1){const n=`sign:${r}:${t}`;if(Oo.has(n))return Oo.get(n);const i=document.createElement("canvas");i.width=1024,i.height=256;const s=i.getContext("2d");s.fillStyle=t?"#14a39a":"#ffffff",s.fillRect(0,0,i.width,i.height),s.fillStyle=t?"#ffffff":"#14a39a",s.beginPath(),s.moveTo(80,60),s.lineTo(150,25),s.lineTo(220,60),s.lineTo(220,150),s.lineTo(150,190),s.lineTo(80,150),s.closePath(),s.fill(),s.font='800 96px "Inter Variable", Inter, system-ui, sans-serif',s.textBaseline="middle",s.fillText(r,260,90),s.font='600 46px "Inter Variable", Inter, system-ui, sans-serif',s.fillStyle=t?"#dbe5ff":"#56607a",s.fillText(e,264,182);const a=new Lh(i);return a.colorSpace=jn,a.anisotropy=4,Oo.set(n,a),a}const Tm=Ee.createContext(!1);function it({args:r,m:e,p:t,r:n,cast:i=!0,recv:s=!0,children:a}){const c=Ee.useContext(Tm);return V.jsxs("mesh",{position:t,rotation:n,material:e,castShadow:i,receiveShadow:s,children:[V.jsx("boxGeometry",{args:r}),c&&V.jsx(vy,{thickness:2.2,screenspace:!0,color:hl}),a]})}function Jr({rt:r,rb:e,h:t,m:n,p:i,r:s,seg:a=14}){const c=Ee.useContext(Tm);return V.jsxs("mesh",{position:i,rotation:s,material:n,castShadow:!0,receiveShadow:!0,children:[V.jsx("cylinderGeometry",{args:[r,e,t,a]}),c&&V.jsx(vy,{thickness:2.2,screenspace:!0,color:hl})]})}function Uo({w:r,d:e,m:t,p:n,ry:i=0}){return V.jsx("mesh",{position:n,rotation:[-Math.PI/2,0,i],material:t,receiveShadow:!0,children:V.jsx("planeGeometry",{args:[r,e]})})}const wu={rects:[],at:0};function hC(){const r=performance.now();return r-wu.at>200&&(wu.at=r,wu.rects=Array.from(document.querySelectorAll(".panel, .kpi, .topbar, .mapbtns")).map(e=>e.getBoundingClientRect())),wu.rects}function fC({position:r,children:e,halfW:t=60,...n}){const i=Ee.useRef(null),s=Ee.useRef(null),a=Ee.useMemo(()=>new D,[]),c=ul(h=>h.camera),u=ul(h=>h.size);return Xs(()=>{if(!i.current||!s.current)return;i.current.getWorldPosition(a).project(c);const h=(a.x+1)/2*u.width+u.left,f=(1-a.y)/2*u.height+u.top,m=hC().some(g=>h+t>g.left&&h-t<g.right&&f+14>g.top&&f-14<g.bottom)?"hidden":"visible";s.current.style.visibility!==m&&(s.current.style.visibility=m)}),V.jsx("group",{ref:i,position:r,children:V.jsx(eC,{center:!0,...n,children:V.jsx("div",{ref:s,children:e})})})}function El({r,children:e,label:t,status:n,size:i,labelY:s}){const a=Ci(g=>Ec(g.hover,r)),c=Ci(g=>Ec(g.selected,r)),u=Ci(g=>g.multi.some(x=>Ec(x,r))),h=c||u,f=g=>{g.stopPropagation(),Ci.getState().setHover(r),document.body.style.cursor="pointer"},p=g=>{g.stopPropagation(),Ec(Ci.getState().hover,r)&&Ci.getState().setHover(null),document.body.style.cursor=""},m=g=>{g.stopPropagation(),!g.nativeEvent.shiftKey&&Ci.getState().select(r)};return V.jsxs("group",{onPointerOver:f,onPointerOut:p,onClick:m,children:[V.jsx(Tm.Provider,{value:a||h,children:e}),h&&i&&V.jsx(dC,{size:i}),(a||c)&&t&&V.jsx(Cp,{y:s??(i?i[1]+1.2:3),text:t,status:n})]})}function Cp({y:r,text:e,status:t,tone:n="blue"}){return V.jsx(fC,{position:[0,r,0],zIndexRange:[20,0],style:{pointerEvents:"none"},halfW:Math.min(190,18+(e.length+((t==null?void 0:t.length)??0))*3.3),children:V.jsxs("div",{className:`tag tag-${n}`,children:[V.jsx("b",{children:e}),t&&V.jsx("span",{children:t})]})})}function dC({size:r}){const[e,t,n]=r,i=Ee.useMemo(()=>{const s=e/2+.5,a=n/2+.5,c=Math.min(e,n)*.3+.4,u=[];for(const h of[-1,1])for(const f of[-1,1])for(const p of[.08,t+.3])u.push([[h*s,p,f*(a-c)],[h*s,p,f*a],[h*(s-c),p,f*a]]);return u},[e,t,n]);return V.jsxs("group",{children:[i.map((s,a)=>V.jsx(rC,{points:s,color:hl,lineWidth:2.5},a)),V.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,.05,0],children:[V.jsx("planeGeometry",{args:[e+2.4,n+2.4]}),V.jsx("meshBasicMaterial",{color:hl,transparent:!0,opacity:.14,depthWrite:!1})]})]})}function OC({p:r,scale:e=1,color:t}){return V.jsxs("group",{position:r,scale:e,children:[V.jsxs("mesh",{position:[0,3.1,0],material:t?void 0:be.pin,castShadow:!0,children:[V.jsx("sphereGeometry",{args:[.62,18,14]}),t&&V.jsx("meshStandardMaterial",{color:t})]}),V.jsxs("mesh",{position:[0,2.35,0],rotation:[Math.PI,0,0],material:t?void 0:be.pin,castShadow:!0,children:[V.jsx("coneGeometry",{args:[.55,1.25,18]}),t&&V.jsx("meshStandardMaterial",{color:t})]}),V.jsx("mesh",{position:[0,3.12,.5],material:be.white,children:V.jsx("sphereGeometry",{args:[.22,12,10]})}),V.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,.06,0],children:[V.jsx("ringGeometry",{args:[.35,.75,24]}),V.jsx("meshBasicMaterial",{color:t??hl,transparent:!0,opacity:.55,depthWrite:!1})]})]})}const Qv=new Map;function Ra(r,e={}){const t=String(r)+JSON.stringify(e);let n=Qv.get(t);return n||(n=new Er({color:r,roughness:.9,metalness:0,flatShading:!0,...e}),Qv.set(t,n)),n}function Yn(r,e,t=0,n=0,i=0,s=!0){const a=new Yt(r,e);return a.position.set(t,n,i),a.castShadow=s,a.receiveShadow=!1,a}let sp=null;function pC(r,e,t=.28){if(!sp){const i=document.createElement("canvas");i.width=i.height=128;const s=i.getContext("2d"),a=s.createRadialGradient(64,64,4,64,64,62);a.addColorStop(0,"rgba(30,40,50,1)"),a.addColorStop(.55,"rgba(30,40,50,0.55)"),a.addColorStop(1,"rgba(30,40,50,0)"),s.fillStyle=a,s.fillRect(0,0,128,128),sp=new Lh(i)}const n=new Yt(new ks(r,e),new br({map:sp,transparent:!0,opacity:t,depthWrite:!1}));return n.rotation.x=-Math.PI/2,n.position.y=.06,n.renderOrder=1,n}function $v(r,e){const t=new er(r.map(([i,s])=>new ce(i,s))),n=new qo(t,{depth:e,bevelEnabled:!1});return n.rotateX(Math.PI/2),n.translate(0,e/2,0),n}function mC(r,e){const t=new er(r.map(([i,s])=>new ce(i,s))),n=new qo(t,{depth:e,bevelEnabled:!1});return n.rotateY(-Math.PI/2),n.translate(e/2,0,0),n}function gC(r,e=1){const t=new Zr,n=Ra(16251130),i=Ra(13226198),s=Ra(2898503,{roughness:.6}),a=Ra(r),c=Yn(new Ii(2,2,30,14),n,0,4.2,0);c.rotation.x=Math.PI/2,t.add(c);const u=Yn(new jo(2,14,10),n,0,4.2,-15);u.scale.set(1,1,2.1),t.add(u);const h=Yn(new xl(2,8,14),n,0,4.7,19);h.rotation.x=Math.PI/2+.1,h.scale.set(1,1,1),t.add(h);const f=Yn(new Di(2.6,.7,1.2),s,0,5.4,-17.6,!1);f.rotation.x=.5,t.add(f),t.add(Yn(new Di(4.05,.35,24),Ra(5991290),0,5,0,!1)),t.add(Yn(new Di(4.02,.5,26),a,0,3,1,!1));for(const g of[1,-1]){const x=Yn($v([[0,-3],[17,5.5],[17,7.6],[0,4.5]],.5),n,0,3.2,0);x.scale.x=g,t.add(x);const w=Yn(new Di(.3,1.6,1.4),a,g*17,4,6.8);t.add(w);const y=Yn(new Ii(1.25,1.1,4.2,12),i,g*6.5,2.2,-1.6);y.rotation.x=Math.PI/2,t.add(y);const _=Yn(new Ii(1,1,.2,12),s,g*6.5,2.2,-3.75,!1);_.rotation.x=Math.PI/2,t.add(_);const E=Yn($v([[0,14.5],[6.5,18.5],[6.5,20],[0,19.5]],.35),n,0,5.4,0);E.scale.x=g,t.add(E),t.add(Yn(new Ii(.35,.35,.5,8),s,g*2.6,.5,1.5,!1))}t.add(Yn(new Ii(.3,.3,.5,8),s,0,.5,-12,!1));const p=Yn(mC([[13,5.8],[21.5,5.8],[23.2,13.5],[19.6,13.5]],.45),a,0,0,0);t.add(p),t.scale.setScalar(e);const m=pC(38,42,.3);return m.scale.setScalar(1),t.add(m),t}const La=[0,0,Math.PI/2];function qh({z:r,x:e=1.12,r:t=.5}){return V.jsx(V.Fragment,{children:r.map(n=>[-e,e].map(i=>V.jsx(Jr,{rt:t,rb:t,h:.42,m:be.tire,p:[i,t,n],r:La,seg:12},`${n}${i}`)))})}const op=new Map;function vC(r){if(!op.has(r)){const e=n_[r];op.set(r,new Er({map:uC(e.name,e.stripe,e.accent),roughness:.55}))}return op.get(r)}const ap=new Map;function e_(r){return ap.has(r)||ap.set(r,new Er({color:r,roughness:.45})),ap.get(r)}function _y({carrier:r=-1,reefer:e=!1,gear:t=!1}){const i=r>=0?vC(r):null;return V.jsxs("group",{children:[V.jsx(it,{args:[2.6,2.8,16.2],m:e?be.reefer:be.trailer,p:[0,2.75,0]}),V.jsx(it,{args:[2.2,.3,16.2-1],m:be.chassis,p:[0,1.2,0],cast:!1}),V.jsx(it,{args:[2.62,.12,16.2+.02],m:be.wallShade,p:[0,1.4,0],cast:!1}),i&&V.jsxs(V.Fragment,{children:[V.jsx("mesh",{position:[1.311,2.75,.2],rotation:[0,Math.PI/2,0],material:i,children:V.jsx("planeGeometry",{args:[16.2-1.2,2.5]})}),V.jsx("mesh",{position:[-1.311,2.75,.2],rotation:[0,-Math.PI/2,0],material:i,children:V.jsx("planeGeometry",{args:[16.2-1.2,2.5]})})]}),!i&&V.jsx(it,{args:[2.63,.32,16.2-.6],m:be.blue,p:[0,1.78,0],cast:!1}),e&&V.jsx(it,{args:[2,1.4,.5],m:be.hvac,p:[0,3.2,16.2/2+.25]}),V.jsx(it,{args:[2.5,2.6,.06],m:be.wallShade,p:[0,2.75,-16.2/2-.02],cast:!1}),V.jsx(qh,{z:[-16.2/2+1.6,-16.2/2+2.9]}),t&&V.jsxs(V.Fragment,{children:[V.jsx(it,{args:[.12,1.1,.12],m:be.chassis,p:[-.9,.55,16.2/2-3]}),V.jsx(it,{args:[.12,1.1,.12],m:be.chassis,p:[.9,.55,16.2/2-3]})]})]})}function _C({carrier:r}){const e=n_[r],t=e_(e.cab),n=e_(e.stripe);return V.jsxs("group",{children:[V.jsx("group",{position:[0,0,-2.9],children:V.jsx(_y,{carrier:r})}),V.jsx(it,{args:[2.2,.35,6.2],m:be.chassis,p:[0,.95,7.8],cast:!1}),V.jsx(it,{args:[2.5,2.7,2.3],m:t,p:[0,2.55,9.75]}),V.jsx(it,{args:[2.52,.5,2.32],m:n,p:[0,1.45,9.75]}),V.jsx(it,{args:[2.3,.9,.06],m:be.windshield,p:[0,3.15,10.92],cast:!1}),V.jsx(it,{args:[.06,.7,1],m:be.windshield,p:[1.26,3.15,10.2],cast:!1}),V.jsx(it,{args:[.06,.7,1],m:be.windshield,p:[-1.26,3.15,10.2],cast:!1}),V.jsx(it,{args:[2.4,.5,1.7],m:t,p:[0,4.12,9.5]}),V.jsx(it,{args:[2.5,.3,.2],m:be.chassis,p:[0,.85,11]}),V.jsx(qh,{z:[10,6.4,5.1]})]})}function t_(){return V.jsxs("group",{children:[V.jsx(it,{args:[2.2,.4,5],m:be.chassis,p:[0,.85,0],cast:!1}),V.jsx(it,{args:[1.7,2.3,1.9],m:be.hostler,p:[-.25,2.1,1.2]}),V.jsx(it,{args:[1.5,.8,.05],m:be.windshield,p:[-.25,2.6,2.17],cast:!1}),V.jsx(it,{args:[1.2,.25,1.2],m:be.black,p:[0,1.15,-1.4]}),V.jsx(qh,{z:[1.6,-1.6],r:.48})]})}function xC({lift:r=0,color:e=be.forkYellow}){const t=.18+r*.9;return V.jsxs("group",{children:[V.jsx(it,{args:[1.15,.85,1.8],m:e,p:[0,.72,-.2]}),V.jsx(it,{args:[1.18,.75,.55],m:be.black,p:[0,.7,-1.15]}),[[-.5,-.65],[.5,-.65],[-.5,.5],[.5,.5]].map(([n,i],s)=>V.jsx(it,{args:[.07,1.25,.07],m:be.black,p:[n,1.75,i],cast:!1},s)),V.jsx(it,{args:[1.12,.07,1.25],m:be.black,p:[0,2.4,-.07]}),V.jsx(it,{args:[.55,.5,.5],m:be.black,p:[0,1.35,-.5],cast:!1}),V.jsx(it,{args:[.1,2.4,.12],m:be.chassis,p:[-.38,1.3,.85]}),V.jsx(it,{args:[.1,2.4,.12],m:be.chassis,p:[.38,1.3,.85]}),V.jsx(it,{args:[.95,.5,.06],m:be.chassis,p:[0,t+.25,.95],cast:!1}),V.jsx(it,{args:[.12,.05,1.1],m:be.chassis,p:[-.28,t,1.5],cast:!1}),V.jsx(it,{args:[.12,.05,1.1],m:be.chassis,p:[.28,t,1.5],cast:!1}),V.jsx(Jr,{rt:.32,rb:.32,h:.25,m:be.tire,p:[-.55,.32,.45],r:La,seg:10}),V.jsx(Jr,{rt:.32,rb:.32,h:.25,m:be.tire,p:[.55,.32,.45],r:La,seg:10}),V.jsx(Jr,{rt:.25,rb:.25,h:.22,m:be.tire,p:[-.5,.25,-.95],r:La,seg:10}),V.jsx(Jr,{rt:.25,rb:.25,h:.22,m:be.tire,p:[.5,.25,-.95],r:La,seg:10})]})}function yC({sku:r,tall:e=1}){var s;const t=((s=hS[r])==null?void 0:s.color)??"#d9a96f",n=t==="#3e6ae8"||t==="#e9eef8"||t==="#2f64f0",i=r==="tote";return V.jsxs("group",{children:[V.jsx(it,{args:[1,.14,1.2],m:be.wood,p:[0,.07,0]}),n?V.jsxs(V.Fragment,{children:[V.jsx(it,{args:[.98,1.05*e,1.18],m:t==="#e9eef8"?be.wrapWhite:be.wrapBlue,p:[0,.14+.525*e,0]}),V.jsx(it,{args:[1,.06,1.2],m:be.white,p:[0,.14+.75*e,0],cast:!1})]}):i?V.jsx(V.Fragment,{children:[0,1,2].map(a=>V.jsx(it,{args:[.96,.32,1.16],m:be.tote,p:[0,.3+a*.34,0]},a))}):V.jsx(V.Fragment,{children:[0,1].map(a=>[-.245,.245].map(c=>[-.29,.29].map(u=>V.jsx(it,{args:[.47,.46,.56],m:(a+(c>0?1:0)+(u>0?1:0))%2?be.carton:be.cartonDark,p:[c,.37+a*.47,u]},`${a}${c}${u}`))))})]})}function SC(){return V.jsxs("group",{children:[V.jsx(cC,{args:[2.1,2.45,6],radius:.35,smoothness:3,position:[0,1.65,0],material:be.van,castShadow:!0,receiveShadow:!0}),V.jsx(it,{args:[2.12,.35,5.4],m:be.vanBlue,p:[0,.95,-.1],cast:!1}),V.jsx(it,{args:[1.8,.75,.05],m:be.windshield,p:[0,2.25,2.98],cast:!1}),V.jsx(qh,{z:[1.9,-1.9],x:.95,r:.42})]})}function MC(){const r=Ee.useMemo(()=>{const e=new Zr,t=gC("#14a39a",1.45);return t.rotation.y=Math.PI,e.add(t),e},[]);return V.jsx("primitive",{object:r})}function wC({vest:r=be.person}){return V.jsxs("group",{children:[V.jsx(Jr,{rt:.2,rb:.22,h:.85,m:be.black,p:[0,.42,0],seg:8}),V.jsx(Jr,{rt:.24,rb:.22,h:.65,m:r,p:[0,1.15,0],seg:8}),V.jsx("mesh",{position:[0,1.65,0],material:be.skin,castShadow:!0,children:V.jsx("sphereGeometry",{args:[.16,10,8]})})]})}function FC({id:r}){const e=Ee.useRef(null);Ci(n=>n.tick);const t=Li.trucks[r];return Xs(()=>{const n=e.current;n&&(n.position.set(t.pos[0],0,t.pos[1]),n.rotation.y=t.heading)}),V.jsx("group",{ref:e,children:V.jsx(El,{r:{type:"truck",id:r},label:r,status:fS(t),size:[2.6,4.2,22],labelY:6,children:V.jsx(_C,{carrier:t.carrier})})})}function BC({id:r}){const e=Ee.useRef(null),t=Ee.useRef(null);Ci(s=>s.tick);const n=Li.forklifts[r];Xs(()=>{const s=e.current;s&&(s.position.set(n.pos[0],0,n.pos[1]),s.rotation.y=n.heading,t.current&&(t.current.position.y=.2+n.lift*.9))});const i=n.carrying?Li.pallets[n.carrying]:null;return V.jsxs("group",{ref:e,children:[V.jsx(El,{r:{type:"forklift",id:r},label:r,status:n.status,size:[1.3,2.5,3.2],children:V.jsx(xC,{lift:n.lift})}),i&&V.jsx("group",{ref:t,position:[0,.2,1.65],children:V.jsx(yC,{sku:i.sku})})]})}function zC({id:r}){const e=Ee.useRef(null);Ci(i=>i.tick);const t=Li.hostlers[r];Xs(()=>{const i=e.current;i&&(i.position.set(t.pos[0],0,t.pos[1]),i.rotation.y=t.heading)});const n=t.trailerId?Li.trailers[t.trailerId]:null;return V.jsx("group",{ref:e,children:V.jsx(El,{r:{type:"hostler",id:r},label:r,status:t.status,size:n?[2.6,4.2,22]:[2.2,3,5],children:n?V.jsxs(V.Fragment,{children:[V.jsx(_y,{reefer:n.reefer}),V.jsx("group",{position:[0,0,dS/2+2.4],children:V.jsx(t_,{})})]}):V.jsx(t_,{})})})}function kC({site:r}){return Ci(e=>e.tick),V.jsx("group",{children:r.chargers.map(e=>{const t=Li.chargers[e],n=!!t.forkliftId;return V.jsxs("group",{position:[t.pos[0],0,t.pos[1]],children:[V.jsxs(El,{r:{type:"charger",id:e},label:t.label,status:n?`Charging ${t.forkliftId}`:"Free",size:[1.2,2,1],children:[V.jsx(it,{args:[.8,1.7,.5],m:be.white,p:[0,.85,0]}),V.jsx(it,{args:[.5,.35,.05],m:n?be.green:be.glass,p:[0,1.3,.27],cast:!1}),V.jsx(it,{args:[.82,.12,.52],m:be.blue,p:[0,1.72,0],cast:!1})]}),V.jsx("mesh",{rotation:[-Math.PI/2,0,0],position:[0,.04,2.2],material:n?be.greenSoft:be.wallShade,children:V.jsx("planeGeometry",{args:[2.2,3.6]})})]},e)})})}const EC=r=>r==="charging"||r==="parked";function AC(r,e,t){const n=r.L,i=n.vanCharge.length,s=e%3,a=rd(Tc.waveDepartures[s]),c=mS(t),u=rd(Tc.returnWindow[0]),h=rd(Tc.returnWindow[1]),f=u+(h-u)*e/Math.max(1,i-1),p=n.vanCharge[e],m=n.vanLoad[(s*6+Math.floor(e/3))%n.vanLoad.length],g=r.origin,x=_=>[g[0]+_[0],g[1]+_[1]],w=(c-f+1440)%1440,y=Math.min(100,35+w/60*8.1);if(c>=a-Tc.loadoutLeadMinutes&&c<a)return{phase:"loadout",pos:x(m),heading:-Math.PI/2,wave:s,soc:y};if(c>=a&&c<a+2.5){const _=r0([m,[m[0]-8,m[1]+5],[m[0]-14,n.roadZ-5],[n.vanExit[0]+40,n.roadZ],n.vanExit].map(x)),E=(c-a)/2.5*_.len,{p:M,dir:A}=s0(_,E);return{phase:"departing",pos:M,heading:o0(A),wave:s,soc:y}}if(c>=a+2.5&&c<f)return{phase:"out",pos:x(p),heading:0,wave:s,soc:y};if(c>=f&&c<f+2.5){const _=r0([n.vanExit,[p[0]+6,n.roadZ-4],[p[0],p[1]+12],p].map(x)),{p:E,dir:M}=s0(_,(c-f)/2.5*_.len);return{phase:"returning",pos:E,heading:o0(M),wave:s,soc:35}}return{phase:y<100?"charging":"parked",pos:x(p),heading:Math.PI,wave:s,soc:y}}function HC({site:r}){const e=Ee.useRef([]),t=Ee.useRef([]),n=r.L.vanCharge.length;return Xs(()=>{for(let i=0;i<n;i++){const s=e.current[i];if(!s)continue;const a=AC(r,i,Li.t);s.visible=a.phase!=="out",s.position.set(a.pos[0]-r.origin[0],0,a.pos[1]-r.origin[1]),s.rotation.y=a.heading;const c=t.current[i];c&&(c.visible=EC(a.phase))}}),V.jsxs("group",{position:[r.origin[0],0,r.origin[1]],children:[r.L.vanCharge.map((i,s)=>V.jsxs("group",{children:[V.jsx(it,{args:[.35,1.4,.35],m:be.white,p:[i[0]+1.4,.7,i[1]-3.6]}),V.jsx(it,{args:[.25,.25,.05],m:be.green,p:[i[0]+1.4,1.15,i[1]-3.4],cast:!1}),V.jsx(Uo,{w:.12,d:6.4,m:be.laneWhite,p:[i[0]-1.7,.04,i[1]]}),V.jsx("group",{ref:a=>t.current[s]=a,children:V.jsx(it,{args:[.09,.09,1.6],m:be.blueDark,p:[i[0]+1.2,1,i[1]-2.7],r:[.35,.22,0],cast:!1})}),V.jsx("group",{ref:a=>e.current[s]=a,children:V.jsx(El,{r:{type:"van",id:`${r.id}:${s}`},label:`Van ${r.def.code}-${String(s+1).padStart(2,"0")}`,status:`Wave ${s%3+1}`,size:[2.1,2.9,6],children:V.jsx(SC,{})})})]},s)),r.L.vanLoad.map((i,s)=>s%6===0?V.jsx(Uo,{w:42,d:.14,m:be.yellow,p:[-r.L.spec.w/2-27,.04,i[1]-2.2]},s):null)]})}function VC({site:r}){var y;const e=r.L.field,t=id.fieldCellM,n=Math.floor((e.x1-e.x0)/t),i=Math.floor((e.z1-e.z0)/t),s=Ee.useMemo(()=>new i_(r.id.length*991),[r.id]),a=Ee.useMemo(()=>{const _=[];for(let E=1;E<n-1;E+=2)for(let M=1;M<i-1;M++)(M+1)%3&&_.push([e.x0+E*t+t/2,e.z0+M*t+t/2]);return _},[n,i]),c=Ee.useMemo(()=>Array.from({length:id.driveUnitsVisible},()=>{const _=e.x0+(s.int(0,n-1)+.5)*t,E=e.z0+(s.int(0,i-1)+.5)*t;return{x:_,z:E,tx:_,tz:E,carry:s.chance(.6),wait:s.range(0,3),heading:0}}),[]),u=Ee.useRef([]),h=Ee.useRef([]),f=Ee.useRef(null),p=Ee.useMemo(()=>Array.from({length:id.proteusVisible},(_,E)=>({x:e.x0+6+E*14,dir:E%2?1:-1,slow:!1})),[]),m=Ee.useRef(Li.t);Xs(()=>{const _=Math.min(2,Math.max(0,(Li.t-m.current)/1e3));m.current=Li.t,c.forEach((A,U)=>{if(A.wait>0)A.wait-=_;else{const L=A.tx-A.x,B=A.tz-A.z,z=Math.hypot(L,B),b=Ac.driveUnit*_;z<=b?(A.x=A.tx,A.z=A.tz,A.wait=s.range(.5,4),s.chance(.5)?A.tx=e.x0+(s.int(0,n-1)+.5)*t:A.tz=e.z0+(s.int(0,i-1)+.5)*t,s.chance(.2)&&(A.carry=!A.carry)):(A.x+=L/z*b,A.z+=B/z*b,A.heading=Math.atan2(L,B))}const P=u.current[U];P&&(P.position.set(A.x,.2,A.z),P.rotation.y=A.heading,P.children[1].visible=A.carry)});const E=e.x0+4+(Math.sin(Li.t/9e3)+1)/2*(e.x1-e.x0-8),M=(e.mz0+e.mz1)/2+2.2;f.current&&f.current.position.set(E,.2,M),p.forEach((A,U)=>{const P=Math.abs(A.x-E)<Ac.proteusSlowRadius;A.slow=P;const L=P?Ac.proteusNearPeople:Ac.proteus;A.x+=A.dir*L*_,A.x>e.x1-3&&(A.dir=-1),A.x<e.x0+3&&(A.dir=1);const B=h.current[U];if(B){B.position.set(A.x,.2,e.mz0+2+U%2*4),B.rotation.y=A.dir>0?Math.PI/2:-Math.PI/2;const z=B.children[1];z.material=P?be.orange:be.green}})});const g=r.origin,x=e.x1-e.x0,w=e.z1-e.z0;return V.jsxs("group",{position:[g[0],0,g[1]],children:[V.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[(e.x0+e.x1)/2,.21,(e.z0+e.z1)/2],receiveShadow:!0,children:[V.jsx("planeGeometry",{args:[x,w]}),V.jsx("meshStandardMaterial",{color:"#cdd3e0",roughness:1})]}),Array.from({length:n+1},(_,E)=>V.jsx(Uo,{w:.06,d:w,m:be.fencePost,p:[e.x0+E*t,.22,(e.z0+e.z1)/2]},`c${E}`)),Array.from({length:i+1},(_,E)=>V.jsx(Uo,{w:x,d:.06,m:be.fencePost,p:[(e.x0+e.x1)/2,.22,e.z0+E*t]},`r${E}`)),V.jsx(it,{args:[x,2.2,.06],m:be.fence,p:[(e.x0+e.x1)/2,1.3,e.z1+.4],cast:!1}),V.jsx(it,{args:[.06,2.2,w],m:be.fence,p:[e.x1+.4,1.3,(e.z0+e.z1)/2],cast:!1}),Array.from({length:Math.floor(x/3)+1},(_,E)=>V.jsx(it,{args:[.1,2.3,.1],m:be.rackOrange,p:[e.x0+E*3,1.35,e.z1+.4],cast:!1},E)),a.map((_,E)=>V.jsx(it,{args:[1,2.2,1],m:be.pod,p:[_[0],1.3,_[1]]},E)),c.map((_,E)=>V.jsxs("group",{ref:M=>u.current[E]=M,children:[V.jsx(it,{args:[1.36,.42,1.36],m:be.driveUnitBody,p:[0,.21,0]}),V.jsx(it,{args:[1,2.2,1],m:be.pod,p:[0,1.55,0]}),V.jsx(it,{args:[1.4,.07,1.4],m:be.driveUnit,p:[0,.44,0],cast:!1})]},E)),V.jsx(Uo,{w:x,d:e.mz1-e.mz0,m:be.pad,p:[(e.x0+e.x1)/2,.215,(e.mz0+e.mz1)/2]}),V.jsx(Uo,{w:x,d:.2,m:be.green,p:[(e.x0+e.x1)/2,.23,e.mz0+.2]}),p.map((_,E)=>V.jsxs("group",{ref:M=>h.current[E]=M,children:[V.jsx(it,{args:[1,.4,1.4],m:be.wallShade,p:[0,.2,0]}),V.jsx(it,{args:[1.02,.08,1.42],m:be.green,p:[0,.42,0],cast:!1}),V.jsx(it,{args:[.9,1.3,1.2],m:be.gocart,p:[0,1.15,0]})]},E)),V.jsx("group",{ref:f,children:V.jsx(wC,{})}),V.jsx("group",{position:[(e.x0+e.x1)/2+x*.18,0,e.z1-4],children:V.jsx(Cp,{y:4.5,text:"Robot-only field",status:`Hercules drive units · ~${(((y=pS(r.def))==null?void 0:y.total)??0).toLocaleString()} site-wide (est.)`,tone:"white"})}),V.jsx("group",{position:[e.x0+10,0,e.mz1],children:V.jsx(Cp,{y:4,text:"Mixed zone",status:"Proteus slows near people",tone:"white"})})]})}function GC({site:r}){const e=r.L.apronRect;return V.jsxs("group",{position:[r.origin[0],0,r.origin[1]],children:[V.jsx("group",{position:[(e.x0+e.x1)/2,0,e.z0+30],rotation:[0,-Math.PI/2+.2,0],children:V.jsx(MC,{})}),Array.from({length:6},(t,n)=>V.jsxs("group",{position:[e.x0+10+n*4,0,e.z1-14],children:[V.jsx(it,{args:[3,.4,2.4],m:be.chassis,p:[0,.3,0]}),V.jsx(it,{args:[2.9,2,2.3],m:be.wrapWhite,p:[0,1.5,0]})]},n)),V.jsx(Jr,{rt:.15,rb:.15,h:8,m:be.fencePost,p:[e.x1-6,4,e.z0+6]})]})}function WC(r){return Ee.useMemo(()=>{const e=new i_(77),t=[];for(const n of r){const{pad:i}=n.L;for(let s=i.x0+4;s<i.x1;s+=e.range(9,15))t.push([n.origin[0]+s,n.origin[1]+i.z1+2.5,e.range(.8,1.2)]);for(let s=i.z0+6;s<i.z1-10;s+=e.range(10,16))t.push([n.origin[0]+i.x0-4,n.origin[1]+s,e.range(.8,1.2)]),t.push([n.origin[0]+i.x1+4,n.origin[1]+s,e.range(.8,1.2)]);for(let s=i.x0;s<i.x1;s+=e.range(12,20))t.push([n.origin[0]+s,n.origin[1]+i.z0-6,e.range(.8,1.3)])}return t},[r])}export{Ne as A,IC as B,Lh as C,at as D,R2 as E,Uo as F,kC as G,fC as H,BC as I,zC as J,HC as K,VC as L,gS as M,L_ as N,Hs as O,on as P,Kn as Q,Xo as R,i2 as S,RC as T,GC as U,D as V,rC as W,AC as X,EC as Y,zs as _,Yh as a,DC as b,LC as c,W2 as d,T2 as e,vS as f,ce as g,Yr as h,PC as i,ul as j,Xs as k,El as l,be as m,it as n,_y as o,br as p,jn as q,yC as r,NC as s,OC as t,C2 as u,Da as v,Ch as w,FC as x,It as y,WC as z};
