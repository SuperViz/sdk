var Lw=Object.create;var js=Object.defineProperty,Dw=Object.defineProperties,df=Object.getOwnPropertyDescriptor,Rw=Object.getOwnPropertyDescriptors,Nw=Object.getOwnPropertyNames,Xs=Object.getOwnPropertySymbols,Fw=Object.getPrototypeOf,ol=Object.prototype.hasOwnProperty,ff=Object.prototype.propertyIsEnumerable;var hf=Math.pow,cf=(i,e,r)=>e in i?js(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,H=(i,e)=>{for(var r in e||(e={}))ol.call(e,r)&&cf(i,r,e[r]);if(Xs)for(var r of Xs(e))ff.call(e,r)&&cf(i,r,e[r]);return i},Ht=(i,e)=>Dw(i,Rw(e));var al=(i,e)=>{var r={};for(var s in i)ol.call(i,s)&&e.indexOf(s)<0&&(r[s]=i[s]);if(i!=null&&Xs)for(var s of Xs(i))e.indexOf(s)<0&&ff.call(i,s)&&(r[s]=i[s]);return r};var kw=(i,e)=>()=>(i&&(e=i(i=0)),e);var Hw=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var Pw=(i,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Nw(e))!ol.call(i,a)&&a!==r&&js(i,a,{get:()=>e[a],enumerable:!(s=df(e,a))||s.enumerable});return i};var zw=(i,e,r)=>(r=i!=null?Lw(Fw(i)):{},Pw(e||!i||!i.__esModule?js(r,"default",{value:i,enumerable:!0}):r,i));var K=(i,e,r,s)=>{for(var a=s>1?void 0:s?df(e,r):e,c=i.length-1,u;c>=0;c--)(u=i[c])&&(a=(s?u(e,r,a):u(a))||a);return s&&a&&js(e,r,a),a};var On=(i,e,r)=>new Promise((s,a)=>{var c=m=>{try{p(r.next(m))}catch(_){a(_)}},u=m=>{try{p(r.throw(m))}catch(_){a(_)}},p=m=>m.done?s(m.value):Promise.resolve(m.value).then(c,u);p((r=r.apply(i,e)).next())});var v=kw(()=>{});var oh=Hw((Or,Ci)=>{v();(function(){var i,e="4.17.21",r=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",p=500,m="__lodash_placeholder__",_=1,E=2,T=4,N=1,I=2,L=1,St=2,mt=4,Tt=8,fe=16,qt=32,Ye=64,he=128,gn=256,vn=512,yn=30,Ho="...",Pp=800,zp=16,Mu=1,Up=2,Wp=3,xn=1/0,Je=9007199254740991,Bp=17976931348623157e292,is=0/0,Se=4294967295,Vp=Se-1,Gp=Se>>>1,Zp=[["ary",he],["bind",L],["bindKey",St],["curry",Tt],["curryRight",fe],["flip",vn],["partial",qt],["partialRight",Ye],["rearg",gn]],fr="[object Arguments]",ss="[object Array]",qp="[object AsyncFunction]",Kr="[object Boolean]",Xr="[object Date]",Yp="[object DOMException]",os="[object Error]",as="[object Function]",Lu="[object GeneratorFunction]",pe="[object Map]",jr="[object Number]",Jp="[object Null]",Me="[object Object]",Du="[object Promise]",Kp="[object Proxy]",Qr="[object RegExp]",me="[object Set]",ti="[object String]",ls="[object Symbol]",Xp="[object Undefined]",ei="[object WeakMap]",jp="[object WeakSet]",ni="[object ArrayBuffer]",hr="[object DataView]",Po="[object Float32Array]",zo="[object Float64Array]",Uo="[object Int8Array]",Wo="[object Int16Array]",Bo="[object Int32Array]",Vo="[object Uint8Array]",Go="[object Uint8ClampedArray]",Zo="[object Uint16Array]",qo="[object Uint32Array]",Qp=/\b__p \+= '';/g,tm=/\b(__p \+=) '' \+/g,em=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ru=/&(?:amp|lt|gt|quot|#39);/g,Nu=/[&<>"']/g,nm=RegExp(Ru.source),rm=RegExp(Nu.source),im=/<%-([\s\S]+?)%>/g,sm=/<%([\s\S]+?)%>/g,Fu=/<%=([\s\S]+?)%>/g,om=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,am=/^\w*$/,lm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yo=/[\\^$.*+?()[\]{}|]/g,um=RegExp(Yo.source),Jo=/^\s+/,cm=/\s/,dm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,fm=/\{\n\/\* \[wrapped with (.+)\] \*/,hm=/,? & /,pm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,mm=/[()=,{}\[\]\/\s]/,gm=/\\(\\)?/g,vm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ku=/\w*$/,ym=/^[-+]0x[0-9a-f]+$/i,xm=/^0b[01]+$/i,_m=/^\[object .+?Constructor\]$/,wm=/^0o[0-7]+$/i,bm=/^(?:0|[1-9]\d*)$/,Em=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,us=/($^)/,Sm=/['\n\r\u2028\u2029\\]/g,cs="\\ud800-\\udfff",Tm="\\u0300-\\u036f",Am="\\ufe20-\\ufe2f",$m="\\u20d0-\\u20ff",Hu=Tm+Am+$m,Pu="\\u2700-\\u27bf",zu="a-z\\xdf-\\xf6\\xf8-\\xff",Cm="\\xac\\xb1\\xd7\\xf7",Om="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Im="\\u2000-\\u206f",Mm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Uu="A-Z\\xc0-\\xd6\\xd8-\\xde",Wu="\\ufe0e\\ufe0f",Bu=Cm+Om+Im+Mm,Ko="['\u2019]",Lm="["+cs+"]",Vu="["+Bu+"]",ds="["+Hu+"]",Gu="\\d+",Dm="["+Pu+"]",Zu="["+zu+"]",qu="[^"+cs+Bu+Gu+Pu+zu+Uu+"]",Xo="\\ud83c[\\udffb-\\udfff]",Rm="(?:"+ds+"|"+Xo+")",Yu="[^"+cs+"]",jo="(?:\\ud83c[\\udde6-\\uddff]){2}",Qo="[\\ud800-\\udbff][\\udc00-\\udfff]",pr="["+Uu+"]",Ju="\\u200d",Ku="(?:"+Zu+"|"+qu+")",Nm="(?:"+pr+"|"+qu+")",Xu="(?:"+Ko+"(?:d|ll|m|re|s|t|ve))?",ju="(?:"+Ko+"(?:D|LL|M|RE|S|T|VE))?",Qu=Rm+"?",tc="["+Wu+"]?",Fm="(?:"+Ju+"(?:"+[Yu,jo,Qo].join("|")+")"+tc+Qu+")*",km="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Hm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ec=tc+Qu+Fm,Pm="(?:"+[Dm,jo,Qo].join("|")+")"+ec,zm="(?:"+[Yu+ds+"?",ds,jo,Qo,Lm].join("|")+")",Um=RegExp(Ko,"g"),Wm=RegExp(ds,"g"),ta=RegExp(Xo+"(?="+Xo+")|"+zm+ec,"g"),Bm=RegExp([pr+"?"+Zu+"+"+Xu+"(?="+[Vu,pr,"$"].join("|")+")",Nm+"+"+ju+"(?="+[Vu,pr+Ku,"$"].join("|")+")",pr+"?"+Ku+"+"+Xu,pr+"+"+ju,Hm,km,Gu,Pm].join("|"),"g"),Vm=RegExp("["+Ju+cs+Hu+Wu+"]"),Gm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Zm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],qm=-1,pt={};pt[Po]=pt[zo]=pt[Uo]=pt[Wo]=pt[Bo]=pt[Vo]=pt[Go]=pt[Zo]=pt[qo]=!0,pt[fr]=pt[ss]=pt[ni]=pt[Kr]=pt[hr]=pt[Xr]=pt[os]=pt[as]=pt[pe]=pt[jr]=pt[Me]=pt[Qr]=pt[me]=pt[ti]=pt[ei]=!1;var ht={};ht[fr]=ht[ss]=ht[ni]=ht[hr]=ht[Kr]=ht[Xr]=ht[Po]=ht[zo]=ht[Uo]=ht[Wo]=ht[Bo]=ht[pe]=ht[jr]=ht[Me]=ht[Qr]=ht[me]=ht[ti]=ht[ls]=ht[Vo]=ht[Go]=ht[Zo]=ht[qo]=!0,ht[os]=ht[as]=ht[ei]=!1;var Ym={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Jm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Km={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Xm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},jm=parseFloat,Qm=parseInt,nc=typeof global=="object"&&global&&global.Object===Object&&global,tg=typeof self=="object"&&self&&self.Object===Object&&self,Ot=nc||tg||Function("return this")(),ea=typeof Or=="object"&&Or&&!Or.nodeType&&Or,_n=ea&&typeof Ci=="object"&&Ci&&!Ci.nodeType&&Ci,rc=_n&&_n.exports===ea,na=rc&&nc.process,ee=function(){try{var x=_n&&_n.require&&_n.require("util").types;return x||na&&na.binding&&na.binding("util")}catch(S){}}(),ic=ee&&ee.isArrayBuffer,sc=ee&&ee.isDate,oc=ee&&ee.isMap,ac=ee&&ee.isRegExp,lc=ee&&ee.isSet,uc=ee&&ee.isTypedArray;function Yt(x,S,b){switch(b.length){case 0:return x.call(S);case 1:return x.call(S,b[0]);case 2:return x.call(S,b[0],b[1]);case 3:return x.call(S,b[0],b[1],b[2])}return x.apply(S,b)}function eg(x,S,b,F){for(var G=-1,st=x==null?0:x.length;++G<st;){var At=x[G];S(F,At,b(At),x)}return F}function ne(x,S){for(var b=-1,F=x==null?0:x.length;++b<F&&S(x[b],b,x)!==!1;);return x}function ng(x,S){for(var b=x==null?0:x.length;b--&&S(x[b],b,x)!==!1;);return x}function cc(x,S){for(var b=-1,F=x==null?0:x.length;++b<F;)if(!S(x[b],b,x))return!1;return!0}function Ke(x,S){for(var b=-1,F=x==null?0:x.length,G=0,st=[];++b<F;){var At=x[b];S(At,b,x)&&(st[G++]=At)}return st}function fs(x,S){var b=x==null?0:x.length;return!!b&&mr(x,S,0)>-1}function ra(x,S,b){for(var F=-1,G=x==null?0:x.length;++F<G;)if(b(S,x[F]))return!0;return!1}function gt(x,S){for(var b=-1,F=x==null?0:x.length,G=Array(F);++b<F;)G[b]=S(x[b],b,x);return G}function Xe(x,S){for(var b=-1,F=S.length,G=x.length;++b<F;)x[G+b]=S[b];return x}function ia(x,S,b,F){var G=-1,st=x==null?0:x.length;for(F&&st&&(b=x[++G]);++G<st;)b=S(b,x[G],G,x);return b}function rg(x,S,b,F){var G=x==null?0:x.length;for(F&&G&&(b=x[--G]);G--;)b=S(b,x[G],G,x);return b}function sa(x,S){for(var b=-1,F=x==null?0:x.length;++b<F;)if(S(x[b],b,x))return!0;return!1}var ig=oa("length");function sg(x){return x.split("")}function og(x){return x.match(pm)||[]}function dc(x,S,b){var F;return b(x,function(G,st,At){if(S(G,st,At))return F=st,!1}),F}function hs(x,S,b,F){for(var G=x.length,st=b+(F?1:-1);F?st--:++st<G;)if(S(x[st],st,x))return st;return-1}function mr(x,S,b){return S===S?yg(x,S,b):hs(x,fc,b)}function ag(x,S,b,F){for(var G=b-1,st=x.length;++G<st;)if(F(x[G],S))return G;return-1}function fc(x){return x!==x}function hc(x,S){var b=x==null?0:x.length;return b?la(x,S)/b:is}function oa(x){return function(S){return S==null?i:S[x]}}function aa(x){return function(S){return x==null?i:x[S]}}function pc(x,S,b,F,G){return G(x,function(st,At,ct){b=F?(F=!1,st):S(b,st,At,ct)}),b}function lg(x,S){var b=x.length;for(x.sort(S);b--;)x[b]=x[b].value;return x}function la(x,S){for(var b,F=-1,G=x.length;++F<G;){var st=S(x[F]);st!==i&&(b=b===i?st:b+st)}return b}function ua(x,S){for(var b=-1,F=Array(x);++b<x;)F[b]=S(b);return F}function ug(x,S){return gt(S,function(b){return[b,x[b]]})}function mc(x){return x&&x.slice(0,xc(x)+1).replace(Jo,"")}function Jt(x){return function(S){return x(S)}}function ca(x,S){return gt(S,function(b){return x[b]})}function ri(x,S){return x.has(S)}function gc(x,S){for(var b=-1,F=x.length;++b<F&&mr(S,x[b],0)>-1;);return b}function vc(x,S){for(var b=x.length;b--&&mr(S,x[b],0)>-1;);return b}function cg(x,S){for(var b=x.length,F=0;b--;)x[b]===S&&++F;return F}var dg=aa(Ym),fg=aa(Jm);function hg(x){return"\\"+Xm[x]}function pg(x,S){return x==null?i:x[S]}function gr(x){return Vm.test(x)}function mg(x){return Gm.test(x)}function gg(x){for(var S,b=[];!(S=x.next()).done;)b.push(S.value);return b}function da(x){var S=-1,b=Array(x.size);return x.forEach(function(F,G){b[++S]=[G,F]}),b}function yc(x,S){return function(b){return x(S(b))}}function je(x,S){for(var b=-1,F=x.length,G=0,st=[];++b<F;){var At=x[b];(At===S||At===m)&&(x[b]=m,st[G++]=b)}return st}function ps(x){var S=-1,b=Array(x.size);return x.forEach(function(F){b[++S]=F}),b}function vg(x){var S=-1,b=Array(x.size);return x.forEach(function(F){b[++S]=[F,F]}),b}function yg(x,S,b){for(var F=b-1,G=x.length;++F<G;)if(x[F]===S)return F;return-1}function xg(x,S,b){for(var F=b+1;F--;)if(x[F]===S)return F;return F}function vr(x){return gr(x)?wg(x):ig(x)}function ge(x){return gr(x)?bg(x):sg(x)}function xc(x){for(var S=x.length;S--&&cm.test(x.charAt(S)););return S}var _g=aa(Km);function wg(x){for(var S=ta.lastIndex=0;ta.test(x);)++S;return S}function bg(x){return x.match(ta)||[]}function Eg(x){return x.match(Bm)||[]}var Sg=function x(S){S=S==null?Ot:Qe.defaults(Ot.Object(),S,Qe.pick(Ot,Zm));var b=S.Array,F=S.Date,G=S.Error,st=S.Function,At=S.Math,ct=S.Object,fa=S.RegExp,Tg=S.String,re=S.TypeError,ms=b.prototype,Ag=st.prototype,yr=ct.prototype,gs=S["__core-js_shared__"],vs=Ag.toString,ut=yr.hasOwnProperty,$g=0,_c=function(){var t=/[^.]+$/.exec(gs&&gs.keys&&gs.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ys=yr.toString,Cg=vs.call(ct),Og=Ot._,Ig=fa("^"+vs.call(ut).replace(Yo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),xs=rc?S.Buffer:i,tn=S.Symbol,_s=S.Uint8Array,wc=xs?xs.allocUnsafe:i,ws=yc(ct.getPrototypeOf,ct),bc=ct.create,Ec=yr.propertyIsEnumerable,bs=ms.splice,Sc=tn?tn.isConcatSpreadable:i,ii=tn?tn.iterator:i,wn=tn?tn.toStringTag:i,Es=function(){try{var t=An(ct,"defineProperty");return t({},"",{}),t}catch(n){}}(),Mg=S.clearTimeout!==Ot.clearTimeout&&S.clearTimeout,Lg=F&&F.now!==Ot.Date.now&&F.now,Dg=S.setTimeout!==Ot.setTimeout&&S.setTimeout,Ss=At.ceil,Ts=At.floor,ha=ct.getOwnPropertySymbols,Rg=xs?xs.isBuffer:i,Tc=S.isFinite,Ng=ms.join,Fg=yc(ct.keys,ct),$t=At.max,Ft=At.min,kg=F.now,Hg=S.parseInt,Ac=At.random,Pg=ms.reverse,pa=An(S,"DataView"),si=An(S,"Map"),ma=An(S,"Promise"),xr=An(S,"Set"),oi=An(S,"WeakMap"),ai=An(ct,"create"),As=oi&&new oi,_r={},zg=$n(pa),Ug=$n(si),Wg=$n(ma),Bg=$n(xr),Vg=$n(oi),$s=tn?tn.prototype:i,li=$s?$s.valueOf:i,$c=$s?$s.toString:i;function f(t){if(wt(t)&&!Z(t)&&!(t instanceof nt)){if(t instanceof ie)return t;if(ut.call(t,"__wrapped__"))return Cd(t)}return new ie(t)}var wr=function(){function t(){}return function(n){if(!vt(n))return{};if(bc)return bc(n);t.prototype=n;var o=new t;return t.prototype=i,o}}();function Cs(){}function ie(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=i}f.templateSettings={escape:im,evaluate:sm,interpolate:Fu,variable:"",imports:{_:f}},f.prototype=Cs.prototype,f.prototype.constructor=f,ie.prototype=wr(Cs.prototype),ie.prototype.constructor=ie;function nt(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Se,this.__views__=[]}function Gg(){var t=new nt(this.__wrapped__);return t.__actions__=Wt(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Wt(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Wt(this.__views__),t}function Zg(){if(this.__filtered__){var t=new nt(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function qg(){var t=this.__wrapped__.value(),n=this.__dir__,o=Z(t),l=n<0,d=o?t.length:0,h=s0(0,d,this.__views__),g=h.start,y=h.end,w=y-g,A=l?y:g-1,$=this.__iteratees__,O=$.length,D=0,k=Ft(w,this.__takeCount__);if(!o||!l&&d==w&&k==w)return Xc(t,this.__actions__);var U=[];t:for(;w--&&D<k;){A+=n;for(var J=-1,W=t[A];++J<O;){var tt=$[J],rt=tt.iteratee,jt=tt.type,Ut=rt(W);if(jt==Up)W=Ut;else if(!Ut){if(jt==Mu)continue t;break t}}U[D++]=W}return U}nt.prototype=wr(Cs.prototype),nt.prototype.constructor=nt;function bn(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var l=t[n];this.set(l[0],l[1])}}function Yg(){this.__data__=ai?ai(null):{},this.size=0}function Jg(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}function Kg(t){var n=this.__data__;if(ai){var o=n[t];return o===u?i:o}return ut.call(n,t)?n[t]:i}function Xg(t){var n=this.__data__;return ai?n[t]!==i:ut.call(n,t)}function jg(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=ai&&n===i?u:n,this}bn.prototype.clear=Yg,bn.prototype.delete=Jg,bn.prototype.get=Kg,bn.prototype.has=Xg,bn.prototype.set=jg;function Le(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var l=t[n];this.set(l[0],l[1])}}function Qg(){this.__data__=[],this.size=0}function tv(t){var n=this.__data__,o=Os(n,t);if(o<0)return!1;var l=n.length-1;return o==l?n.pop():bs.call(n,o,1),--this.size,!0}function ev(t){var n=this.__data__,o=Os(n,t);return o<0?i:n[o][1]}function nv(t){return Os(this.__data__,t)>-1}function rv(t,n){var o=this.__data__,l=Os(o,t);return l<0?(++this.size,o.push([t,n])):o[l][1]=n,this}Le.prototype.clear=Qg,Le.prototype.delete=tv,Le.prototype.get=ev,Le.prototype.has=nv,Le.prototype.set=rv;function De(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var l=t[n];this.set(l[0],l[1])}}function iv(){this.size=0,this.__data__={hash:new bn,map:new(si||Le),string:new bn}}function sv(t){var n=Us(this,t).delete(t);return this.size-=n?1:0,n}function ov(t){return Us(this,t).get(t)}function av(t){return Us(this,t).has(t)}function lv(t,n){var o=Us(this,t),l=o.size;return o.set(t,n),this.size+=o.size==l?0:1,this}De.prototype.clear=iv,De.prototype.delete=sv,De.prototype.get=ov,De.prototype.has=av,De.prototype.set=lv;function En(t){var n=-1,o=t==null?0:t.length;for(this.__data__=new De;++n<o;)this.add(t[n])}function uv(t){return this.__data__.set(t,u),this}function cv(t){return this.__data__.has(t)}En.prototype.add=En.prototype.push=uv,En.prototype.has=cv;function ve(t){var n=this.__data__=new Le(t);this.size=n.size}function dv(){this.__data__=new Le,this.size=0}function fv(t){var n=this.__data__,o=n.delete(t);return this.size=n.size,o}function hv(t){return this.__data__.get(t)}function pv(t){return this.__data__.has(t)}function mv(t,n){var o=this.__data__;if(o instanceof Le){var l=o.__data__;if(!si||l.length<r-1)return l.push([t,n]),this.size=++o.size,this;o=this.__data__=new De(l)}return o.set(t,n),this.size=o.size,this}ve.prototype.clear=dv,ve.prototype.delete=fv,ve.prototype.get=hv,ve.prototype.has=pv,ve.prototype.set=mv;function Cc(t,n){var o=Z(t),l=!o&&Cn(t),d=!o&&!l&&on(t),h=!o&&!l&&!d&&Tr(t),g=o||l||d||h,y=g?ua(t.length,Tg):[],w=y.length;for(var A in t)(n||ut.call(t,A))&&!(g&&(A=="length"||d&&(A=="offset"||A=="parent")||h&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||ke(A,w)))&&y.push(A);return y}function Oc(t){var n=t.length;return n?t[Aa(0,n-1)]:i}function gv(t,n){return Ws(Wt(t),Sn(n,0,t.length))}function vv(t){return Ws(Wt(t))}function ga(t,n,o){(o!==i&&!ye(t[n],o)||o===i&&!(n in t))&&Re(t,n,o)}function ui(t,n,o){var l=t[n];(!(ut.call(t,n)&&ye(l,o))||o===i&&!(n in t))&&Re(t,n,o)}function Os(t,n){for(var o=t.length;o--;)if(ye(t[o][0],n))return o;return-1}function yv(t,n,o,l){return en(t,function(d,h,g){n(l,d,o(d),g)}),l}function Ic(t,n){return t&&Ae(n,It(n),t)}function xv(t,n){return t&&Ae(n,Vt(n),t)}function Re(t,n,o){n=="__proto__"&&Es?Es(t,n,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[n]=o}function va(t,n){for(var o=-1,l=n.length,d=b(l),h=t==null;++o<l;)d[o]=h?i:Xa(t,n[o]);return d}function Sn(t,n,o){return t===t&&(o!==i&&(t=t<=o?t:o),n!==i&&(t=t>=n?t:n)),t}function se(t,n,o,l,d,h){var g,y=n&_,w=n&E,A=n&T;if(o&&(g=d?o(t,l,d,h):o(t)),g!==i)return g;if(!vt(t))return t;var $=Z(t);if($){if(g=a0(t),!y)return Wt(t,g)}else{var O=kt(t),D=O==as||O==Lu;if(on(t))return td(t,y);if(O==Me||O==fr||D&&!d){if(g=w||D?{}:xd(t),!y)return w?Kv(t,xv(g,t)):Jv(t,Ic(g,t))}else{if(!ht[O])return d?t:{};g=l0(t,O,y)}}h||(h=new ve);var k=h.get(t);if(k)return k;h.set(t,g),Yd(t)?t.forEach(function(W){g.add(se(W,n,o,W,t,h))}):Zd(t)&&t.forEach(function(W,tt){g.set(tt,se(W,n,o,tt,t,h))});var U=A?w?ka:Fa:w?Vt:It,J=$?i:U(t);return ne(J||t,function(W,tt){J&&(tt=W,W=t[tt]),ui(g,tt,se(W,n,o,tt,t,h))}),g}function _v(t){var n=It(t);return function(o){return Mc(o,t,n)}}function Mc(t,n,o){var l=o.length;if(t==null)return!l;for(t=ct(t);l--;){var d=o[l],h=n[d],g=t[d];if(g===i&&!(d in t)||!h(g))return!1}return!0}function Lc(t,n,o){if(typeof t!="function")throw new re(a);return gi(function(){t.apply(i,o)},n)}function ci(t,n,o,l){var d=-1,h=fs,g=!0,y=t.length,w=[],A=n.length;if(!y)return w;o&&(n=gt(n,Jt(o))),l?(h=ra,g=!1):n.length>=r&&(h=ri,g=!1,n=new En(n));t:for(;++d<y;){var $=t[d],O=o==null?$:o($);if($=l||$!==0?$:0,g&&O===O){for(var D=A;D--;)if(n[D]===O)continue t;w.push($)}else h(n,O,l)||w.push($)}return w}var en=sd(Te),Dc=sd(xa,!0);function wv(t,n){var o=!0;return en(t,function(l,d,h){return o=!!n(l,d,h),o}),o}function Is(t,n,o){for(var l=-1,d=t.length;++l<d;){var h=t[l],g=n(h);if(g!=null&&(y===i?g===g&&!Xt(g):o(g,y)))var y=g,w=h}return w}function bv(t,n,o,l){var d=t.length;for(o=q(o),o<0&&(o=-o>d?0:d+o),l=l===i||l>d?d:q(l),l<0&&(l+=d),l=o>l?0:Kd(l);o<l;)t[o++]=n;return t}function Rc(t,n){var o=[];return en(t,function(l,d,h){n(l,d,h)&&o.push(l)}),o}function Nt(t,n,o,l,d){var h=-1,g=t.length;for(o||(o=c0),d||(d=[]);++h<g;){var y=t[h];n>0&&o(y)?n>1?Nt(y,n-1,o,l,d):Xe(d,y):l||(d[d.length]=y)}return d}var ya=od(),Nc=od(!0);function Te(t,n){return t&&ya(t,n,It)}function xa(t,n){return t&&Nc(t,n,It)}function Ms(t,n){return Ke(n,function(o){return He(t[o])})}function Tn(t,n){n=rn(n,t);for(var o=0,l=n.length;t!=null&&o<l;)t=t[$e(n[o++])];return o&&o==l?t:i}function Fc(t,n,o){var l=n(t);return Z(t)?l:Xe(l,o(t))}function Pt(t){return t==null?t===i?Xp:Jp:wn&&wn in ct(t)?i0(t):v0(t)}function _a(t,n){return t>n}function Ev(t,n){return t!=null&&ut.call(t,n)}function Sv(t,n){return t!=null&&n in ct(t)}function Tv(t,n,o){return t>=Ft(n,o)&&t<$t(n,o)}function wa(t,n,o){for(var l=o?ra:fs,d=t[0].length,h=t.length,g=h,y=b(h),w=1/0,A=[];g--;){var $=t[g];g&&n&&($=gt($,Jt(n))),w=Ft($.length,w),y[g]=!o&&(n||d>=120&&$.length>=120)?new En(g&&$):i}$=t[0];var O=-1,D=y[0];t:for(;++O<d&&A.length<w;){var k=$[O],U=n?n(k):k;if(k=o||k!==0?k:0,!(D?ri(D,U):l(A,U,o))){for(g=h;--g;){var J=y[g];if(!(J?ri(J,U):l(t[g],U,o)))continue t}D&&D.push(U),A.push(k)}}return A}function Av(t,n,o,l){return Te(t,function(d,h,g){n(l,o(d),h,g)}),l}function di(t,n,o){n=rn(n,t),t=Ed(t,n);var l=t==null?t:t[$e(ae(n))];return l==null?i:Yt(l,t,o)}function kc(t){return wt(t)&&Pt(t)==fr}function $v(t){return wt(t)&&Pt(t)==ni}function Cv(t){return wt(t)&&Pt(t)==Xr}function fi(t,n,o,l,d){return t===n?!0:t==null||n==null||!wt(t)&&!wt(n)?t!==t&&n!==n:Ov(t,n,o,l,fi,d)}function Ov(t,n,o,l,d,h){var g=Z(t),y=Z(n),w=g?ss:kt(t),A=y?ss:kt(n);w=w==fr?Me:w,A=A==fr?Me:A;var $=w==Me,O=A==Me,D=w==A;if(D&&on(t)){if(!on(n))return!1;g=!0,$=!1}if(D&&!$)return h||(h=new ve),g||Tr(t)?gd(t,n,o,l,d,h):n0(t,n,w,o,l,d,h);if(!(o&N)){var k=$&&ut.call(t,"__wrapped__"),U=O&&ut.call(n,"__wrapped__");if(k||U){var J=k?t.value():t,W=U?n.value():n;return h||(h=new ve),d(J,W,o,l,h)}}return D?(h||(h=new ve),r0(t,n,o,l,d,h)):!1}function Iv(t){return wt(t)&&kt(t)==pe}function ba(t,n,o,l){var d=o.length,h=d,g=!l;if(t==null)return!h;for(t=ct(t);d--;){var y=o[d];if(g&&y[2]?y[1]!==t[y[0]]:!(y[0]in t))return!1}for(;++d<h;){y=o[d];var w=y[0],A=t[w],$=y[1];if(g&&y[2]){if(A===i&&!(w in t))return!1}else{var O=new ve;if(l)var D=l(A,$,w,t,n,O);if(!(D===i?fi($,A,N|I,l,O):D))return!1}}return!0}function Hc(t){if(!vt(t)||f0(t))return!1;var n=He(t)?Ig:_m;return n.test($n(t))}function Mv(t){return wt(t)&&Pt(t)==Qr}function Lv(t){return wt(t)&&kt(t)==me}function Dv(t){return wt(t)&&Ys(t.length)&&!!pt[Pt(t)]}function Pc(t){return typeof t=="function"?t:t==null?Gt:typeof t=="object"?Z(t)?Wc(t[0],t[1]):Uc(t):lf(t)}function Ea(t){if(!mi(t))return Fg(t);var n=[];for(var o in ct(t))ut.call(t,o)&&o!="constructor"&&n.push(o);return n}function Rv(t){if(!vt(t))return g0(t);var n=mi(t),o=[];for(var l in t)l=="constructor"&&(n||!ut.call(t,l))||o.push(l);return o}function Sa(t,n){return t<n}function zc(t,n){var o=-1,l=Bt(t)?b(t.length):[];return en(t,function(d,h,g){l[++o]=n(d,h,g)}),l}function Uc(t){var n=Pa(t);return n.length==1&&n[0][2]?wd(n[0][0],n[0][1]):function(o){return o===t||ba(o,t,n)}}function Wc(t,n){return Ua(t)&&_d(n)?wd($e(t),n):function(o){var l=Xa(o,t);return l===i&&l===n?ja(o,t):fi(n,l,N|I)}}function Ls(t,n,o,l,d){t!==n&&ya(n,function(h,g){if(d||(d=new ve),vt(h))Nv(t,n,g,o,Ls,l,d);else{var y=l?l(Ba(t,g),h,g+"",t,n,d):i;y===i&&(y=h),ga(t,g,y)}},Vt)}function Nv(t,n,o,l,d,h,g){var y=Ba(t,o),w=Ba(n,o),A=g.get(w);if(A){ga(t,o,A);return}var $=h?h(y,w,o+"",t,n,g):i,O=$===i;if(O){var D=Z(w),k=!D&&on(w),U=!D&&!k&&Tr(w);$=w,D||k||U?Z(y)?$=y:bt(y)?$=Wt(y):k?(O=!1,$=td(w,!0)):U?(O=!1,$=ed(w,!0)):$=[]:vi(w)||Cn(w)?($=y,Cn(y)?$=Xd(y):(!vt(y)||He(y))&&($=xd(w))):O=!1}O&&(g.set(w,$),d($,w,l,h,g),g.delete(w)),ga(t,o,$)}function Bc(t,n){var o=t.length;if(!!o)return n+=n<0?o:0,ke(n,o)?t[n]:i}function Vc(t,n,o){n.length?n=gt(n,function(h){return Z(h)?function(g){return Tn(g,h.length===1?h[0]:h)}:h}):n=[Gt];var l=-1;n=gt(n,Jt(z()));var d=zc(t,function(h,g,y){var w=gt(n,function(A){return A(h)});return{criteria:w,index:++l,value:h}});return lg(d,function(h,g){return Yv(h,g,o)})}function Fv(t,n){return Gc(t,n,function(o,l){return ja(t,l)})}function Gc(t,n,o){for(var l=-1,d=n.length,h={};++l<d;){var g=n[l],y=Tn(t,g);o(y,g)&&hi(h,rn(g,t),y)}return h}function kv(t){return function(n){return Tn(n,t)}}function Ta(t,n,o,l){var d=l?ag:mr,h=-1,g=n.length,y=t;for(t===n&&(n=Wt(n)),o&&(y=gt(t,Jt(o)));++h<g;)for(var w=0,A=n[h],$=o?o(A):A;(w=d(y,$,w,l))>-1;)y!==t&&bs.call(y,w,1),bs.call(t,w,1);return t}function Zc(t,n){for(var o=t?n.length:0,l=o-1;o--;){var d=n[o];if(o==l||d!==h){var h=d;ke(d)?bs.call(t,d,1):Oa(t,d)}}return t}function Aa(t,n){return t+Ts(Ac()*(n-t+1))}function Hv(t,n,o,l){for(var d=-1,h=$t(Ss((n-t)/(o||1)),0),g=b(h);h--;)g[l?h:++d]=t,t+=o;return g}function $a(t,n){var o="";if(!t||n<1||n>Je)return o;do n%2&&(o+=t),n=Ts(n/2),n&&(t+=t);while(n);return o}function Q(t,n){return Va(bd(t,n,Gt),t+"")}function Pv(t){return Oc(Ar(t))}function zv(t,n){var o=Ar(t);return Ws(o,Sn(n,0,o.length))}function hi(t,n,o,l){if(!vt(t))return t;n=rn(n,t);for(var d=-1,h=n.length,g=h-1,y=t;y!=null&&++d<h;){var w=$e(n[d]),A=o;if(w==="__proto__"||w==="constructor"||w==="prototype")return t;if(d!=g){var $=y[w];A=l?l($,w,y):i,A===i&&(A=vt($)?$:ke(n[d+1])?[]:{})}ui(y,w,A),y=y[w]}return t}var qc=As?function(t,n){return As.set(t,n),t}:Gt,Uv=Es?function(t,n){return Es(t,"toString",{configurable:!0,enumerable:!1,value:tl(n),writable:!0})}:Gt;function Wv(t){return Ws(Ar(t))}function oe(t,n,o){var l=-1,d=t.length;n<0&&(n=-n>d?0:d+n),o=o>d?d:o,o<0&&(o+=d),d=n>o?0:o-n>>>0,n>>>=0;for(var h=b(d);++l<d;)h[l]=t[l+n];return h}function Bv(t,n){var o;return en(t,function(l,d,h){return o=n(l,d,h),!o}),!!o}function Ds(t,n,o){var l=0,d=t==null?l:t.length;if(typeof n=="number"&&n===n&&d<=Gp){for(;l<d;){var h=l+d>>>1,g=t[h];g!==null&&!Xt(g)&&(o?g<=n:g<n)?l=h+1:d=h}return d}return Ca(t,n,Gt,o)}function Ca(t,n,o,l){var d=0,h=t==null?0:t.length;if(h===0)return 0;n=o(n);for(var g=n!==n,y=n===null,w=Xt(n),A=n===i;d<h;){var $=Ts((d+h)/2),O=o(t[$]),D=O!==i,k=O===null,U=O===O,J=Xt(O);if(g)var W=l||U;else A?W=U&&(l||D):y?W=U&&D&&(l||!k):w?W=U&&D&&!k&&(l||!J):k||J?W=!1:W=l?O<=n:O<n;W?d=$+1:h=$}return Ft(h,Vp)}function Yc(t,n){for(var o=-1,l=t.length,d=0,h=[];++o<l;){var g=t[o],y=n?n(g):g;if(!o||!ye(y,w)){var w=y;h[d++]=g===0?0:g}}return h}function Jc(t){return typeof t=="number"?t:Xt(t)?is:+t}function Kt(t){if(typeof t=="string")return t;if(Z(t))return gt(t,Kt)+"";if(Xt(t))return $c?$c.call(t):"";var n=t+"";return n=="0"&&1/t==-xn?"-0":n}function nn(t,n,o){var l=-1,d=fs,h=t.length,g=!0,y=[],w=y;if(o)g=!1,d=ra;else if(h>=r){var A=n?null:t0(t);if(A)return ps(A);g=!1,d=ri,w=new En}else w=n?[]:y;t:for(;++l<h;){var $=t[l],O=n?n($):$;if($=o||$!==0?$:0,g&&O===O){for(var D=w.length;D--;)if(w[D]===O)continue t;n&&w.push(O),y.push($)}else d(w,O,o)||(w!==y&&w.push(O),y.push($))}return y}function Oa(t,n){return n=rn(n,t),t=Ed(t,n),t==null||delete t[$e(ae(n))]}function Kc(t,n,o,l){return hi(t,n,o(Tn(t,n)),l)}function Rs(t,n,o,l){for(var d=t.length,h=l?d:-1;(l?h--:++h<d)&&n(t[h],h,t););return o?oe(t,l?0:h,l?h+1:d):oe(t,l?h+1:0,l?d:h)}function Xc(t,n){var o=t;return o instanceof nt&&(o=o.value()),ia(n,function(l,d){return d.func.apply(d.thisArg,Xe([l],d.args))},o)}function Ia(t,n,o){var l=t.length;if(l<2)return l?nn(t[0]):[];for(var d=-1,h=b(l);++d<l;)for(var g=t[d],y=-1;++y<l;)y!=d&&(h[d]=ci(h[d]||g,t[y],n,o));return nn(Nt(h,1),n,o)}function jc(t,n,o){for(var l=-1,d=t.length,h=n.length,g={};++l<d;){var y=l<h?n[l]:i;o(g,t[l],y)}return g}function Ma(t){return bt(t)?t:[]}function La(t){return typeof t=="function"?t:Gt}function rn(t,n){return Z(t)?t:Ua(t,n)?[t]:$d(at(t))}var Vv=Q;function sn(t,n,o){var l=t.length;return o=o===i?l:o,!n&&o>=l?t:oe(t,n,o)}var Qc=Mg||function(t){return Ot.clearTimeout(t)};function td(t,n){if(n)return t.slice();var o=t.length,l=wc?wc(o):new t.constructor(o);return t.copy(l),l}function Da(t){var n=new t.constructor(t.byteLength);return new _s(n).set(new _s(t)),n}function Gv(t,n){var o=n?Da(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)}function Zv(t){var n=new t.constructor(t.source,ku.exec(t));return n.lastIndex=t.lastIndex,n}function qv(t){return li?ct(li.call(t)):{}}function ed(t,n){var o=n?Da(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)}function nd(t,n){if(t!==n){var o=t!==i,l=t===null,d=t===t,h=Xt(t),g=n!==i,y=n===null,w=n===n,A=Xt(n);if(!y&&!A&&!h&&t>n||h&&g&&w&&!y&&!A||l&&g&&w||!o&&w||!d)return 1;if(!l&&!h&&!A&&t<n||A&&o&&d&&!l&&!h||y&&o&&d||!g&&d||!w)return-1}return 0}function Yv(t,n,o){for(var l=-1,d=t.criteria,h=n.criteria,g=d.length,y=o.length;++l<g;){var w=nd(d[l],h[l]);if(w){if(l>=y)return w;var A=o[l];return w*(A=="desc"?-1:1)}}return t.index-n.index}function rd(t,n,o,l){for(var d=-1,h=t.length,g=o.length,y=-1,w=n.length,A=$t(h-g,0),$=b(w+A),O=!l;++y<w;)$[y]=n[y];for(;++d<g;)(O||d<h)&&($[o[d]]=t[d]);for(;A--;)$[y++]=t[d++];return $}function id(t,n,o,l){for(var d=-1,h=t.length,g=-1,y=o.length,w=-1,A=n.length,$=$t(h-y,0),O=b($+A),D=!l;++d<$;)O[d]=t[d];for(var k=d;++w<A;)O[k+w]=n[w];for(;++g<y;)(D||d<h)&&(O[k+o[g]]=t[d++]);return O}function Wt(t,n){var o=-1,l=t.length;for(n||(n=b(l));++o<l;)n[o]=t[o];return n}function Ae(t,n,o,l){var d=!o;o||(o={});for(var h=-1,g=n.length;++h<g;){var y=n[h],w=l?l(o[y],t[y],y,o,t):i;w===i&&(w=t[y]),d?Re(o,y,w):ui(o,y,w)}return o}function Jv(t,n){return Ae(t,za(t),n)}function Kv(t,n){return Ae(t,vd(t),n)}function Ns(t,n){return function(o,l){var d=Z(o)?eg:yv,h=n?n():{};return d(o,t,z(l,2),h)}}function br(t){return Q(function(n,o){var l=-1,d=o.length,h=d>1?o[d-1]:i,g=d>2?o[2]:i;for(h=t.length>3&&typeof h=="function"?(d--,h):i,g&&zt(o[0],o[1],g)&&(h=d<3?i:h,d=1),n=ct(n);++l<d;){var y=o[l];y&&t(n,y,l,h)}return n})}function sd(t,n){return function(o,l){if(o==null)return o;if(!Bt(o))return t(o,l);for(var d=o.length,h=n?d:-1,g=ct(o);(n?h--:++h<d)&&l(g[h],h,g)!==!1;);return o}}function od(t){return function(n,o,l){for(var d=-1,h=ct(n),g=l(n),y=g.length;y--;){var w=g[t?y:++d];if(o(h[w],w,h)===!1)break}return n}}function Xv(t,n,o){var l=n&L,d=pi(t);function h(){var g=this&&this!==Ot&&this instanceof h?d:t;return g.apply(l?o:this,arguments)}return h}function ad(t){return function(n){n=at(n);var o=gr(n)?ge(n):i,l=o?o[0]:n.charAt(0),d=o?sn(o,1).join(""):n.slice(1);return l[t]()+d}}function Er(t){return function(n){return ia(of(sf(n).replace(Um,"")),t,"")}}function pi(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var o=wr(t.prototype),l=t.apply(o,n);return vt(l)?l:o}}function jv(t,n,o){var l=pi(t);function d(){for(var h=arguments.length,g=b(h),y=h,w=Sr(d);y--;)g[y]=arguments[y];var A=h<3&&g[0]!==w&&g[h-1]!==w?[]:je(g,w);if(h-=A.length,h<o)return fd(t,n,Fs,d.placeholder,i,g,A,i,i,o-h);var $=this&&this!==Ot&&this instanceof d?l:t;return Yt($,this,g)}return d}function ld(t){return function(n,o,l){var d=ct(n);if(!Bt(n)){var h=z(o,3);n=It(n),o=function(y){return h(d[y],y,d)}}var g=t(n,o,l);return g>-1?d[h?n[g]:g]:i}}function ud(t){return Fe(function(n){var o=n.length,l=o,d=ie.prototype.thru;for(t&&n.reverse();l--;){var h=n[l];if(typeof h!="function")throw new re(a);if(d&&!g&&zs(h)=="wrapper")var g=new ie([],!0)}for(l=g?l:o;++l<o;){h=n[l];var y=zs(h),w=y=="wrapper"?Ha(h):i;w&&Wa(w[0])&&w[1]==(he|Tt|qt|gn)&&!w[4].length&&w[9]==1?g=g[zs(w[0])].apply(g,w[3]):g=h.length==1&&Wa(h)?g[y]():g.thru(h)}return function(){var A=arguments,$=A[0];if(g&&A.length==1&&Z($))return g.plant($).value();for(var O=0,D=o?n[O].apply(this,A):$;++O<o;)D=n[O].call(this,D);return D}})}function Fs(t,n,o,l,d,h,g,y,w,A){var $=n&he,O=n&L,D=n&St,k=n&(Tt|fe),U=n&vn,J=D?i:pi(t);function W(){for(var tt=arguments.length,rt=b(tt),jt=tt;jt--;)rt[jt]=arguments[jt];if(k)var Ut=Sr(W),Qt=cg(rt,Ut);if(l&&(rt=rd(rt,l,d,k)),h&&(rt=id(rt,h,g,k)),tt-=Qt,k&&tt<A){var Et=je(rt,Ut);return fd(t,n,Fs,W.placeholder,o,rt,Et,y,w,A-tt)}var xe=O?o:this,ze=D?xe[t]:t;return tt=rt.length,y?rt=y0(rt,y):U&&tt>1&&rt.reverse(),$&&w<tt&&(rt.length=w),this&&this!==Ot&&this instanceof W&&(ze=J||pi(ze)),ze.apply(xe,rt)}return W}function cd(t,n){return function(o,l){return Av(o,t,n(l),{})}}function ks(t,n){return function(o,l){var d;if(o===i&&l===i)return n;if(o!==i&&(d=o),l!==i){if(d===i)return l;typeof o=="string"||typeof l=="string"?(o=Kt(o),l=Kt(l)):(o=Jc(o),l=Jc(l)),d=t(o,l)}return d}}function Ra(t){return Fe(function(n){return n=gt(n,Jt(z())),Q(function(o){var l=this;return t(n,function(d){return Yt(d,l,o)})})})}function Hs(t,n){n=n===i?" ":Kt(n);var o=n.length;if(o<2)return o?$a(n,t):n;var l=$a(n,Ss(t/vr(n)));return gr(n)?sn(ge(l),0,t).join(""):l.slice(0,t)}function Qv(t,n,o,l){var d=n&L,h=pi(t);function g(){for(var y=-1,w=arguments.length,A=-1,$=l.length,O=b($+w),D=this&&this!==Ot&&this instanceof g?h:t;++A<$;)O[A]=l[A];for(;w--;)O[A++]=arguments[++y];return Yt(D,d?o:this,O)}return g}function dd(t){return function(n,o,l){return l&&typeof l!="number"&&zt(n,o,l)&&(o=l=i),n=Pe(n),o===i?(o=n,n=0):o=Pe(o),l=l===i?n<o?1:-1:Pe(l),Hv(n,o,l,t)}}function Ps(t){return function(n,o){return typeof n=="string"&&typeof o=="string"||(n=le(n),o=le(o)),t(n,o)}}function fd(t,n,o,l,d,h,g,y,w,A){var $=n&Tt,O=$?g:i,D=$?i:g,k=$?h:i,U=$?i:h;n|=$?qt:Ye,n&=~($?Ye:qt),n&mt||(n&=~(L|St));var J=[t,n,d,k,O,U,D,y,w,A],W=o.apply(i,J);return Wa(t)&&Sd(W,J),W.placeholder=l,Td(W,t,n)}function Na(t){var n=At[t];return function(o,l){if(o=le(o),l=l==null?0:Ft(q(l),292),l&&Tc(o)){var d=(at(o)+"e").split("e"),h=n(d[0]+"e"+(+d[1]+l));return d=(at(h)+"e").split("e"),+(d[0]+"e"+(+d[1]-l))}return n(o)}}var t0=xr&&1/ps(new xr([,-0]))[1]==xn?function(t){return new xr(t)}:rl;function hd(t){return function(n){var o=kt(n);return o==pe?da(n):o==me?vg(n):ug(n,t(n))}}function Ne(t,n,o,l,d,h,g,y){var w=n&St;if(!w&&typeof t!="function")throw new re(a);var A=l?l.length:0;if(A||(n&=~(qt|Ye),l=d=i),g=g===i?g:$t(q(g),0),y=y===i?y:q(y),A-=d?d.length:0,n&Ye){var $=l,O=d;l=d=i}var D=w?i:Ha(t),k=[t,n,o,l,d,$,O,h,g,y];if(D&&m0(k,D),t=k[0],n=k[1],o=k[2],l=k[3],d=k[4],y=k[9]=k[9]===i?w?0:t.length:$t(k[9]-A,0),!y&&n&(Tt|fe)&&(n&=~(Tt|fe)),!n||n==L)var U=Xv(t,n,o);else n==Tt||n==fe?U=jv(t,n,y):(n==qt||n==(L|qt))&&!d.length?U=Qv(t,n,o,l):U=Fs.apply(i,k);var J=D?qc:Sd;return Td(J(U,k),t,n)}function pd(t,n,o,l){return t===i||ye(t,yr[o])&&!ut.call(l,o)?n:t}function md(t,n,o,l,d,h){return vt(t)&&vt(n)&&(h.set(n,t),Ls(t,n,i,md,h),h.delete(n)),t}function e0(t){return vi(t)?i:t}function gd(t,n,o,l,d,h){var g=o&N,y=t.length,w=n.length;if(y!=w&&!(g&&w>y))return!1;var A=h.get(t),$=h.get(n);if(A&&$)return A==n&&$==t;var O=-1,D=!0,k=o&I?new En:i;for(h.set(t,n),h.set(n,t);++O<y;){var U=t[O],J=n[O];if(l)var W=g?l(J,U,O,n,t,h):l(U,J,O,t,n,h);if(W!==i){if(W)continue;D=!1;break}if(k){if(!sa(n,function(tt,rt){if(!ri(k,rt)&&(U===tt||d(U,tt,o,l,h)))return k.push(rt)})){D=!1;break}}else if(!(U===J||d(U,J,o,l,h))){D=!1;break}}return h.delete(t),h.delete(n),D}function n0(t,n,o,l,d,h,g){switch(o){case hr:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case ni:return!(t.byteLength!=n.byteLength||!h(new _s(t),new _s(n)));case Kr:case Xr:case jr:return ye(+t,+n);case os:return t.name==n.name&&t.message==n.message;case Qr:case ti:return t==n+"";case pe:var y=da;case me:var w=l&N;if(y||(y=ps),t.size!=n.size&&!w)return!1;var A=g.get(t);if(A)return A==n;l|=I,g.set(t,n);var $=gd(y(t),y(n),l,d,h,g);return g.delete(t),$;case ls:if(li)return li.call(t)==li.call(n)}return!1}function r0(t,n,o,l,d,h){var g=o&N,y=Fa(t),w=y.length,A=Fa(n),$=A.length;if(w!=$&&!g)return!1;for(var O=w;O--;){var D=y[O];if(!(g?D in n:ut.call(n,D)))return!1}var k=h.get(t),U=h.get(n);if(k&&U)return k==n&&U==t;var J=!0;h.set(t,n),h.set(n,t);for(var W=g;++O<w;){D=y[O];var tt=t[D],rt=n[D];if(l)var jt=g?l(rt,tt,D,n,t,h):l(tt,rt,D,t,n,h);if(!(jt===i?tt===rt||d(tt,rt,o,l,h):jt)){J=!1;break}W||(W=D=="constructor")}if(J&&!W){var Ut=t.constructor,Qt=n.constructor;Ut!=Qt&&"constructor"in t&&"constructor"in n&&!(typeof Ut=="function"&&Ut instanceof Ut&&typeof Qt=="function"&&Qt instanceof Qt)&&(J=!1)}return h.delete(t),h.delete(n),J}function Fe(t){return Va(bd(t,i,Md),t+"")}function Fa(t){return Fc(t,It,za)}function ka(t){return Fc(t,Vt,vd)}var Ha=As?function(t){return As.get(t)}:rl;function zs(t){for(var n=t.name+"",o=_r[n],l=ut.call(_r,n)?o.length:0;l--;){var d=o[l],h=d.func;if(h==null||h==t)return d.name}return n}function Sr(t){var n=ut.call(f,"placeholder")?f:t;return n.placeholder}function z(){var t=f.iteratee||el;return t=t===el?Pc:t,arguments.length?t(arguments[0],arguments[1]):t}function Us(t,n){var o=t.__data__;return d0(n)?o[typeof n=="string"?"string":"hash"]:o.map}function Pa(t){for(var n=It(t),o=n.length;o--;){var l=n[o],d=t[l];n[o]=[l,d,_d(d)]}return n}function An(t,n){var o=pg(t,n);return Hc(o)?o:i}function i0(t){var n=ut.call(t,wn),o=t[wn];try{t[wn]=i;var l=!0}catch(h){}var d=ys.call(t);return l&&(n?t[wn]=o:delete t[wn]),d}var za=ha?function(t){return t==null?[]:(t=ct(t),Ke(ha(t),function(n){return Ec.call(t,n)}))}:il,vd=ha?function(t){for(var n=[];t;)Xe(n,za(t)),t=ws(t);return n}:il,kt=Pt;(pa&&kt(new pa(new ArrayBuffer(1)))!=hr||si&&kt(new si)!=pe||ma&&kt(ma.resolve())!=Du||xr&&kt(new xr)!=me||oi&&kt(new oi)!=ei)&&(kt=function(t){var n=Pt(t),o=n==Me?t.constructor:i,l=o?$n(o):"";if(l)switch(l){case zg:return hr;case Ug:return pe;case Wg:return Du;case Bg:return me;case Vg:return ei}return n});function s0(t,n,o){for(var l=-1,d=o.length;++l<d;){var h=o[l],g=h.size;switch(h.type){case"drop":t+=g;break;case"dropRight":n-=g;break;case"take":n=Ft(n,t+g);break;case"takeRight":t=$t(t,n-g);break}}return{start:t,end:n}}function o0(t){var n=t.match(fm);return n?n[1].split(hm):[]}function yd(t,n,o){n=rn(n,t);for(var l=-1,d=n.length,h=!1;++l<d;){var g=$e(n[l]);if(!(h=t!=null&&o(t,g)))break;t=t[g]}return h||++l!=d?h:(d=t==null?0:t.length,!!d&&Ys(d)&&ke(g,d)&&(Z(t)||Cn(t)))}function a0(t){var n=t.length,o=new t.constructor(n);return n&&typeof t[0]=="string"&&ut.call(t,"index")&&(o.index=t.index,o.input=t.input),o}function xd(t){return typeof t.constructor=="function"&&!mi(t)?wr(ws(t)):{}}function l0(t,n,o){var l=t.constructor;switch(n){case ni:return Da(t);case Kr:case Xr:return new l(+t);case hr:return Gv(t,o);case Po:case zo:case Uo:case Wo:case Bo:case Vo:case Go:case Zo:case qo:return ed(t,o);case pe:return new l;case jr:case ti:return new l(t);case Qr:return Zv(t);case me:return new l;case ls:return qv(t)}}function u0(t,n){var o=n.length;if(!o)return t;var l=o-1;return n[l]=(o>1?"& ":"")+n[l],n=n.join(o>2?", ":" "),t.replace(dm,`{
/* [wrapped with `+n+`] */
`)}function c0(t){return Z(t)||Cn(t)||!!(Sc&&t&&t[Sc])}function ke(t,n){var o=typeof t;return n=n==null?Je:n,!!n&&(o=="number"||o!="symbol"&&bm.test(t))&&t>-1&&t%1==0&&t<n}function zt(t,n,o){if(!vt(o))return!1;var l=typeof n;return(l=="number"?Bt(o)&&ke(n,o.length):l=="string"&&n in o)?ye(o[n],t):!1}function Ua(t,n){if(Z(t))return!1;var o=typeof t;return o=="number"||o=="symbol"||o=="boolean"||t==null||Xt(t)?!0:am.test(t)||!om.test(t)||n!=null&&t in ct(n)}function d0(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}function Wa(t){var n=zs(t),o=f[n];if(typeof o!="function"||!(n in nt.prototype))return!1;if(t===o)return!0;var l=Ha(o);return!!l&&t===l[0]}function f0(t){return!!_c&&_c in t}var h0=gs?He:sl;function mi(t){var n=t&&t.constructor,o=typeof n=="function"&&n.prototype||yr;return t===o}function _d(t){return t===t&&!vt(t)}function wd(t,n){return function(o){return o==null?!1:o[t]===n&&(n!==i||t in ct(o))}}function p0(t){var n=Zs(t,function(l){return o.size===p&&o.clear(),l}),o=n.cache;return n}function m0(t,n){var o=t[1],l=n[1],d=o|l,h=d<(L|St|he),g=l==he&&o==Tt||l==he&&o==gn&&t[7].length<=n[8]||l==(he|gn)&&n[7].length<=n[8]&&o==Tt;if(!(h||g))return t;l&L&&(t[2]=n[2],d|=o&L?0:mt);var y=n[3];if(y){var w=t[3];t[3]=w?rd(w,y,n[4]):y,t[4]=w?je(t[3],m):n[4]}return y=n[5],y&&(w=t[5],t[5]=w?id(w,y,n[6]):y,t[6]=w?je(t[5],m):n[6]),y=n[7],y&&(t[7]=y),l&he&&(t[8]=t[8]==null?n[8]:Ft(t[8],n[8])),t[9]==null&&(t[9]=n[9]),t[0]=n[0],t[1]=d,t}function g0(t){var n=[];if(t!=null)for(var o in ct(t))n.push(o);return n}function v0(t){return ys.call(t)}function bd(t,n,o){return n=$t(n===i?t.length-1:n,0),function(){for(var l=arguments,d=-1,h=$t(l.length-n,0),g=b(h);++d<h;)g[d]=l[n+d];d=-1;for(var y=b(n+1);++d<n;)y[d]=l[d];return y[n]=o(g),Yt(t,this,y)}}function Ed(t,n){return n.length<2?t:Tn(t,oe(n,0,-1))}function y0(t,n){for(var o=t.length,l=Ft(n.length,o),d=Wt(t);l--;){var h=n[l];t[l]=ke(h,o)?d[h]:i}return t}function Ba(t,n){if(!(n==="constructor"&&typeof t[n]=="function")&&n!="__proto__")return t[n]}var Sd=Ad(qc),gi=Dg||function(t,n){return Ot.setTimeout(t,n)},Va=Ad(Uv);function Td(t,n,o){var l=n+"";return Va(t,u0(l,x0(o0(l),o)))}function Ad(t){var n=0,o=0;return function(){var l=kg(),d=zp-(l-o);if(o=l,d>0){if(++n>=Pp)return arguments[0]}else n=0;return t.apply(i,arguments)}}function Ws(t,n){var o=-1,l=t.length,d=l-1;for(n=n===i?l:n;++o<n;){var h=Aa(o,d),g=t[h];t[h]=t[o],t[o]=g}return t.length=n,t}var $d=p0(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(lm,function(o,l,d,h){n.push(d?h.replace(gm,"$1"):l||o)}),n});function $e(t){if(typeof t=="string"||Xt(t))return t;var n=t+"";return n=="0"&&1/t==-xn?"-0":n}function $n(t){if(t!=null){try{return vs.call(t)}catch(n){}try{return t+""}catch(n){}}return""}function x0(t,n){return ne(Zp,function(o){var l="_."+o[0];n&o[1]&&!fs(t,l)&&t.push(l)}),t.sort()}function Cd(t){if(t instanceof nt)return t.clone();var n=new ie(t.__wrapped__,t.__chain__);return n.__actions__=Wt(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}function _0(t,n,o){(o?zt(t,n,o):n===i)?n=1:n=$t(q(n),0);var l=t==null?0:t.length;if(!l||n<1)return[];for(var d=0,h=0,g=b(Ss(l/n));d<l;)g[h++]=oe(t,d,d+=n);return g}function w0(t){for(var n=-1,o=t==null?0:t.length,l=0,d=[];++n<o;){var h=t[n];h&&(d[l++]=h)}return d}function b0(){var t=arguments.length;if(!t)return[];for(var n=b(t-1),o=arguments[0],l=t;l--;)n[l-1]=arguments[l];return Xe(Z(o)?Wt(o):[o],Nt(n,1))}var E0=Q(function(t,n){return bt(t)?ci(t,Nt(n,1,bt,!0)):[]}),S0=Q(function(t,n){var o=ae(n);return bt(o)&&(o=i),bt(t)?ci(t,Nt(n,1,bt,!0),z(o,2)):[]}),T0=Q(function(t,n){var o=ae(n);return bt(o)&&(o=i),bt(t)?ci(t,Nt(n,1,bt,!0),i,o):[]});function A0(t,n,o){var l=t==null?0:t.length;return l?(n=o||n===i?1:q(n),oe(t,n<0?0:n,l)):[]}function $0(t,n,o){var l=t==null?0:t.length;return l?(n=o||n===i?1:q(n),n=l-n,oe(t,0,n<0?0:n)):[]}function C0(t,n){return t&&t.length?Rs(t,z(n,3),!0,!0):[]}function O0(t,n){return t&&t.length?Rs(t,z(n,3),!0):[]}function I0(t,n,o,l){var d=t==null?0:t.length;return d?(o&&typeof o!="number"&&zt(t,n,o)&&(o=0,l=d),bv(t,n,o,l)):[]}function Od(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=o==null?0:q(o);return d<0&&(d=$t(l+d,0)),hs(t,z(n,3),d)}function Id(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=l-1;return o!==i&&(d=q(o),d=o<0?$t(l+d,0):Ft(d,l-1)),hs(t,z(n,3),d,!0)}function Md(t){var n=t==null?0:t.length;return n?Nt(t,1):[]}function M0(t){var n=t==null?0:t.length;return n?Nt(t,xn):[]}function L0(t,n){var o=t==null?0:t.length;return o?(n=n===i?1:q(n),Nt(t,n)):[]}function D0(t){for(var n=-1,o=t==null?0:t.length,l={};++n<o;){var d=t[n];l[d[0]]=d[1]}return l}function Ld(t){return t&&t.length?t[0]:i}function R0(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=o==null?0:q(o);return d<0&&(d=$t(l+d,0)),mr(t,n,d)}function N0(t){var n=t==null?0:t.length;return n?oe(t,0,-1):[]}var F0=Q(function(t){var n=gt(t,Ma);return n.length&&n[0]===t[0]?wa(n):[]}),k0=Q(function(t){var n=ae(t),o=gt(t,Ma);return n===ae(o)?n=i:o.pop(),o.length&&o[0]===t[0]?wa(o,z(n,2)):[]}),H0=Q(function(t){var n=ae(t),o=gt(t,Ma);return n=typeof n=="function"?n:i,n&&o.pop(),o.length&&o[0]===t[0]?wa(o,i,n):[]});function P0(t,n){return t==null?"":Ng.call(t,n)}function ae(t){var n=t==null?0:t.length;return n?t[n-1]:i}function z0(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=l;return o!==i&&(d=q(o),d=d<0?$t(l+d,0):Ft(d,l-1)),n===n?xg(t,n,d):hs(t,fc,d,!0)}function U0(t,n){return t&&t.length?Bc(t,q(n)):i}var W0=Q(Dd);function Dd(t,n){return t&&t.length&&n&&n.length?Ta(t,n):t}function B0(t,n,o){return t&&t.length&&n&&n.length?Ta(t,n,z(o,2)):t}function V0(t,n,o){return t&&t.length&&n&&n.length?Ta(t,n,i,o):t}var G0=Fe(function(t,n){var o=t==null?0:t.length,l=va(t,n);return Zc(t,gt(n,function(d){return ke(d,o)?+d:d}).sort(nd)),l});function Z0(t,n){var o=[];if(!(t&&t.length))return o;var l=-1,d=[],h=t.length;for(n=z(n,3);++l<h;){var g=t[l];n(g,l,t)&&(o.push(g),d.push(l))}return Zc(t,d),o}function Ga(t){return t==null?t:Pg.call(t)}function q0(t,n,o){var l=t==null?0:t.length;return l?(o&&typeof o!="number"&&zt(t,n,o)?(n=0,o=l):(n=n==null?0:q(n),o=o===i?l:q(o)),oe(t,n,o)):[]}function Y0(t,n){return Ds(t,n)}function J0(t,n,o){return Ca(t,n,z(o,2))}function K0(t,n){var o=t==null?0:t.length;if(o){var l=Ds(t,n);if(l<o&&ye(t[l],n))return l}return-1}function X0(t,n){return Ds(t,n,!0)}function j0(t,n,o){return Ca(t,n,z(o,2),!0)}function Q0(t,n){var o=t==null?0:t.length;if(o){var l=Ds(t,n,!0)-1;if(ye(t[l],n))return l}return-1}function ty(t){return t&&t.length?Yc(t):[]}function ey(t,n){return t&&t.length?Yc(t,z(n,2)):[]}function ny(t){var n=t==null?0:t.length;return n?oe(t,1,n):[]}function ry(t,n,o){return t&&t.length?(n=o||n===i?1:q(n),oe(t,0,n<0?0:n)):[]}function iy(t,n,o){var l=t==null?0:t.length;return l?(n=o||n===i?1:q(n),n=l-n,oe(t,n<0?0:n,l)):[]}function sy(t,n){return t&&t.length?Rs(t,z(n,3),!1,!0):[]}function oy(t,n){return t&&t.length?Rs(t,z(n,3)):[]}var ay=Q(function(t){return nn(Nt(t,1,bt,!0))}),ly=Q(function(t){var n=ae(t);return bt(n)&&(n=i),nn(Nt(t,1,bt,!0),z(n,2))}),uy=Q(function(t){var n=ae(t);return n=typeof n=="function"?n:i,nn(Nt(t,1,bt,!0),i,n)});function cy(t){return t&&t.length?nn(t):[]}function dy(t,n){return t&&t.length?nn(t,z(n,2)):[]}function fy(t,n){return n=typeof n=="function"?n:i,t&&t.length?nn(t,i,n):[]}function Za(t){if(!(t&&t.length))return[];var n=0;return t=Ke(t,function(o){if(bt(o))return n=$t(o.length,n),!0}),ua(n,function(o){return gt(t,oa(o))})}function Rd(t,n){if(!(t&&t.length))return[];var o=Za(t);return n==null?o:gt(o,function(l){return Yt(n,i,l)})}var hy=Q(function(t,n){return bt(t)?ci(t,n):[]}),py=Q(function(t){return Ia(Ke(t,bt))}),my=Q(function(t){var n=ae(t);return bt(n)&&(n=i),Ia(Ke(t,bt),z(n,2))}),gy=Q(function(t){var n=ae(t);return n=typeof n=="function"?n:i,Ia(Ke(t,bt),i,n)}),vy=Q(Za);function yy(t,n){return jc(t||[],n||[],ui)}function xy(t,n){return jc(t||[],n||[],hi)}var _y=Q(function(t){var n=t.length,o=n>1?t[n-1]:i;return o=typeof o=="function"?(t.pop(),o):i,Rd(t,o)});function Nd(t){var n=f(t);return n.__chain__=!0,n}function wy(t,n){return n(t),t}function Bs(t,n){return n(t)}var by=Fe(function(t){var n=t.length,o=n?t[0]:0,l=this.__wrapped__,d=function(h){return va(h,t)};return n>1||this.__actions__.length||!(l instanceof nt)||!ke(o)?this.thru(d):(l=l.slice(o,+o+(n?1:0)),l.__actions__.push({func:Bs,args:[d],thisArg:i}),new ie(l,this.__chain__).thru(function(h){return n&&!h.length&&h.push(i),h}))});function Ey(){return Nd(this)}function Sy(){return new ie(this.value(),this.__chain__)}function Ty(){this.__values__===i&&(this.__values__=Jd(this.value()));var t=this.__index__>=this.__values__.length,n=t?i:this.__values__[this.__index__++];return{done:t,value:n}}function Ay(){return this}function $y(t){for(var n,o=this;o instanceof Cs;){var l=Cd(o);l.__index__=0,l.__values__=i,n?d.__wrapped__=l:n=l;var d=l;o=o.__wrapped__}return d.__wrapped__=t,n}function Cy(){var t=this.__wrapped__;if(t instanceof nt){var n=t;return this.__actions__.length&&(n=new nt(this)),n=n.reverse(),n.__actions__.push({func:Bs,args:[Ga],thisArg:i}),new ie(n,this.__chain__)}return this.thru(Ga)}function Oy(){return Xc(this.__wrapped__,this.__actions__)}var Iy=Ns(function(t,n,o){ut.call(t,o)?++t[o]:Re(t,o,1)});function My(t,n,o){var l=Z(t)?cc:wv;return o&&zt(t,n,o)&&(n=i),l(t,z(n,3))}function Ly(t,n){var o=Z(t)?Ke:Rc;return o(t,z(n,3))}var Dy=ld(Od),Ry=ld(Id);function Ny(t,n){return Nt(Vs(t,n),1)}function Fy(t,n){return Nt(Vs(t,n),xn)}function ky(t,n,o){return o=o===i?1:q(o),Nt(Vs(t,n),o)}function Fd(t,n){var o=Z(t)?ne:en;return o(t,z(n,3))}function kd(t,n){var o=Z(t)?ng:Dc;return o(t,z(n,3))}var Hy=Ns(function(t,n,o){ut.call(t,o)?t[o].push(n):Re(t,o,[n])});function Py(t,n,o,l){t=Bt(t)?t:Ar(t),o=o&&!l?q(o):0;var d=t.length;return o<0&&(o=$t(d+o,0)),Js(t)?o<=d&&t.indexOf(n,o)>-1:!!d&&mr(t,n,o)>-1}var zy=Q(function(t,n,o){var l=-1,d=typeof n=="function",h=Bt(t)?b(t.length):[];return en(t,function(g){h[++l]=d?Yt(n,g,o):di(g,n,o)}),h}),Uy=Ns(function(t,n,o){Re(t,o,n)});function Vs(t,n){var o=Z(t)?gt:zc;return o(t,z(n,3))}function Wy(t,n,o,l){return t==null?[]:(Z(n)||(n=n==null?[]:[n]),o=l?i:o,Z(o)||(o=o==null?[]:[o]),Vc(t,n,o))}var By=Ns(function(t,n,o){t[o?0:1].push(n)},function(){return[[],[]]});function Vy(t,n,o){var l=Z(t)?ia:pc,d=arguments.length<3;return l(t,z(n,4),o,d,en)}function Gy(t,n,o){var l=Z(t)?rg:pc,d=arguments.length<3;return l(t,z(n,4),o,d,Dc)}function Zy(t,n){var o=Z(t)?Ke:Rc;return o(t,qs(z(n,3)))}function qy(t){var n=Z(t)?Oc:Pv;return n(t)}function Yy(t,n,o){(o?zt(t,n,o):n===i)?n=1:n=q(n);var l=Z(t)?gv:zv;return l(t,n)}function Jy(t){var n=Z(t)?vv:Wv;return n(t)}function Ky(t){if(t==null)return 0;if(Bt(t))return Js(t)?vr(t):t.length;var n=kt(t);return n==pe||n==me?t.size:Ea(t).length}function Xy(t,n,o){var l=Z(t)?sa:Bv;return o&&zt(t,n,o)&&(n=i),l(t,z(n,3))}var jy=Q(function(t,n){if(t==null)return[];var o=n.length;return o>1&&zt(t,n[0],n[1])?n=[]:o>2&&zt(n[0],n[1],n[2])&&(n=[n[0]]),Vc(t,Nt(n,1),[])}),Gs=Lg||function(){return Ot.Date.now()};function Qy(t,n){if(typeof n!="function")throw new re(a);return t=q(t),function(){if(--t<1)return n.apply(this,arguments)}}function Hd(t,n,o){return n=o?i:n,n=t&&n==null?t.length:n,Ne(t,he,i,i,i,i,n)}function Pd(t,n){var o;if(typeof n!="function")throw new re(a);return t=q(t),function(){return--t>0&&(o=n.apply(this,arguments)),t<=1&&(n=i),o}}var qa=Q(function(t,n,o){var l=L;if(o.length){var d=je(o,Sr(qa));l|=qt}return Ne(t,l,n,o,d)}),zd=Q(function(t,n,o){var l=L|St;if(o.length){var d=je(o,Sr(zd));l|=qt}return Ne(n,l,t,o,d)});function Ud(t,n,o){n=o?i:n;var l=Ne(t,Tt,i,i,i,i,i,n);return l.placeholder=Ud.placeholder,l}function Wd(t,n,o){n=o?i:n;var l=Ne(t,fe,i,i,i,i,i,n);return l.placeholder=Wd.placeholder,l}function Bd(t,n,o){var l,d,h,g,y,w,A=0,$=!1,O=!1,D=!0;if(typeof t!="function")throw new re(a);n=le(n)||0,vt(o)&&($=!!o.leading,O="maxWait"in o,h=O?$t(le(o.maxWait)||0,n):h,D="trailing"in o?!!o.trailing:D);function k(Et){var xe=l,ze=d;return l=d=i,A=Et,g=t.apply(ze,xe),g}function U(Et){return A=Et,y=gi(tt,n),$?k(Et):g}function J(Et){var xe=Et-w,ze=Et-A,uf=n-xe;return O?Ft(uf,h-ze):uf}function W(Et){var xe=Et-w,ze=Et-A;return w===i||xe>=n||xe<0||O&&ze>=h}function tt(){var Et=Gs();if(W(Et))return rt(Et);y=gi(tt,J(Et))}function rt(Et){return y=i,D&&l?k(Et):(l=d=i,g)}function jt(){y!==i&&Qc(y),A=0,l=w=d=y=i}function Ut(){return y===i?g:rt(Gs())}function Qt(){var Et=Gs(),xe=W(Et);if(l=arguments,d=this,w=Et,xe){if(y===i)return U(w);if(O)return Qc(y),y=gi(tt,n),k(w)}return y===i&&(y=gi(tt,n)),g}return Qt.cancel=jt,Qt.flush=Ut,Qt}var tx=Q(function(t,n){return Lc(t,1,n)}),ex=Q(function(t,n,o){return Lc(t,le(n)||0,o)});function nx(t){return Ne(t,vn)}function Zs(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new re(a);var o=function(){var l=arguments,d=n?n.apply(this,l):l[0],h=o.cache;if(h.has(d))return h.get(d);var g=t.apply(this,l);return o.cache=h.set(d,g)||h,g};return o.cache=new(Zs.Cache||De),o}Zs.Cache=De;function qs(t){if(typeof t!="function")throw new re(a);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function rx(t){return Pd(2,t)}var ix=Vv(function(t,n){n=n.length==1&&Z(n[0])?gt(n[0],Jt(z())):gt(Nt(n,1),Jt(z()));var o=n.length;return Q(function(l){for(var d=-1,h=Ft(l.length,o);++d<h;)l[d]=n[d].call(this,l[d]);return Yt(t,this,l)})}),Ya=Q(function(t,n){var o=je(n,Sr(Ya));return Ne(t,qt,i,n,o)}),Vd=Q(function(t,n){var o=je(n,Sr(Vd));return Ne(t,Ye,i,n,o)}),sx=Fe(function(t,n){return Ne(t,gn,i,i,i,n)});function ox(t,n){if(typeof t!="function")throw new re(a);return n=n===i?n:q(n),Q(t,n)}function ax(t,n){if(typeof t!="function")throw new re(a);return n=n==null?0:$t(q(n),0),Q(function(o){var l=o[n],d=sn(o,0,n);return l&&Xe(d,l),Yt(t,this,d)})}function lx(t,n,o){var l=!0,d=!0;if(typeof t!="function")throw new re(a);return vt(o)&&(l="leading"in o?!!o.leading:l,d="trailing"in o?!!o.trailing:d),Bd(t,n,{leading:l,maxWait:n,trailing:d})}function ux(t){return Hd(t,1)}function cx(t,n){return Ya(La(n),t)}function dx(){if(!arguments.length)return[];var t=arguments[0];return Z(t)?t:[t]}function fx(t){return se(t,T)}function hx(t,n){return n=typeof n=="function"?n:i,se(t,T,n)}function px(t){return se(t,_|T)}function mx(t,n){return n=typeof n=="function"?n:i,se(t,_|T,n)}function gx(t,n){return n==null||Mc(t,n,It(n))}function ye(t,n){return t===n||t!==t&&n!==n}var vx=Ps(_a),yx=Ps(function(t,n){return t>=n}),Cn=kc(function(){return arguments}())?kc:function(t){return wt(t)&&ut.call(t,"callee")&&!Ec.call(t,"callee")},Z=b.isArray,xx=ic?Jt(ic):$v;function Bt(t){return t!=null&&Ys(t.length)&&!He(t)}function bt(t){return wt(t)&&Bt(t)}function _x(t){return t===!0||t===!1||wt(t)&&Pt(t)==Kr}var on=Rg||sl,wx=sc?Jt(sc):Cv;function bx(t){return wt(t)&&t.nodeType===1&&!vi(t)}function Ex(t){if(t==null)return!0;if(Bt(t)&&(Z(t)||typeof t=="string"||typeof t.splice=="function"||on(t)||Tr(t)||Cn(t)))return!t.length;var n=kt(t);if(n==pe||n==me)return!t.size;if(mi(t))return!Ea(t).length;for(var o in t)if(ut.call(t,o))return!1;return!0}function Sx(t,n){return fi(t,n)}function Tx(t,n,o){o=typeof o=="function"?o:i;var l=o?o(t,n):i;return l===i?fi(t,n,i,o):!!l}function Ja(t){if(!wt(t))return!1;var n=Pt(t);return n==os||n==Yp||typeof t.message=="string"&&typeof t.name=="string"&&!vi(t)}function Ax(t){return typeof t=="number"&&Tc(t)}function He(t){if(!vt(t))return!1;var n=Pt(t);return n==as||n==Lu||n==qp||n==Kp}function Gd(t){return typeof t=="number"&&t==q(t)}function Ys(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Je}function vt(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}function wt(t){return t!=null&&typeof t=="object"}var Zd=oc?Jt(oc):Iv;function $x(t,n){return t===n||ba(t,n,Pa(n))}function Cx(t,n,o){return o=typeof o=="function"?o:i,ba(t,n,Pa(n),o)}function Ox(t){return qd(t)&&t!=+t}function Ix(t){if(h0(t))throw new G(s);return Hc(t)}function Mx(t){return t===null}function Lx(t){return t==null}function qd(t){return typeof t=="number"||wt(t)&&Pt(t)==jr}function vi(t){if(!wt(t)||Pt(t)!=Me)return!1;var n=ws(t);if(n===null)return!0;var o=ut.call(n,"constructor")&&n.constructor;return typeof o=="function"&&o instanceof o&&vs.call(o)==Cg}var Ka=ac?Jt(ac):Mv;function Dx(t){return Gd(t)&&t>=-Je&&t<=Je}var Yd=lc?Jt(lc):Lv;function Js(t){return typeof t=="string"||!Z(t)&&wt(t)&&Pt(t)==ti}function Xt(t){return typeof t=="symbol"||wt(t)&&Pt(t)==ls}var Tr=uc?Jt(uc):Dv;function Rx(t){return t===i}function Nx(t){return wt(t)&&kt(t)==ei}function Fx(t){return wt(t)&&Pt(t)==jp}var kx=Ps(Sa),Hx=Ps(function(t,n){return t<=n});function Jd(t){if(!t)return[];if(Bt(t))return Js(t)?ge(t):Wt(t);if(ii&&t[ii])return gg(t[ii]());var n=kt(t),o=n==pe?da:n==me?ps:Ar;return o(t)}function Pe(t){if(!t)return t===0?t:0;if(t=le(t),t===xn||t===-xn){var n=t<0?-1:1;return n*Bp}return t===t?t:0}function q(t){var n=Pe(t),o=n%1;return n===n?o?n-o:n:0}function Kd(t){return t?Sn(q(t),0,Se):0}function le(t){if(typeof t=="number")return t;if(Xt(t))return is;if(vt(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=vt(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=mc(t);var o=xm.test(t);return o||wm.test(t)?Qm(t.slice(2),o?2:8):ym.test(t)?is:+t}function Xd(t){return Ae(t,Vt(t))}function Px(t){return t?Sn(q(t),-Je,Je):t===0?t:0}function at(t){return t==null?"":Kt(t)}var zx=br(function(t,n){if(mi(n)||Bt(n)){Ae(n,It(n),t);return}for(var o in n)ut.call(n,o)&&ui(t,o,n[o])}),jd=br(function(t,n){Ae(n,Vt(n),t)}),Ks=br(function(t,n,o,l){Ae(n,Vt(n),t,l)}),Ux=br(function(t,n,o,l){Ae(n,It(n),t,l)}),Wx=Fe(va);function Bx(t,n){var o=wr(t);return n==null?o:Ic(o,n)}var Vx=Q(function(t,n){t=ct(t);var o=-1,l=n.length,d=l>2?n[2]:i;for(d&&zt(n[0],n[1],d)&&(l=1);++o<l;)for(var h=n[o],g=Vt(h),y=-1,w=g.length;++y<w;){var A=g[y],$=t[A];($===i||ye($,yr[A])&&!ut.call(t,A))&&(t[A]=h[A])}return t}),Gx=Q(function(t){return t.push(i,md),Yt(Qd,i,t)});function Zx(t,n){return dc(t,z(n,3),Te)}function qx(t,n){return dc(t,z(n,3),xa)}function Yx(t,n){return t==null?t:ya(t,z(n,3),Vt)}function Jx(t,n){return t==null?t:Nc(t,z(n,3),Vt)}function Kx(t,n){return t&&Te(t,z(n,3))}function Xx(t,n){return t&&xa(t,z(n,3))}function jx(t){return t==null?[]:Ms(t,It(t))}function Qx(t){return t==null?[]:Ms(t,Vt(t))}function Xa(t,n,o){var l=t==null?i:Tn(t,n);return l===i?o:l}function t_(t,n){return t!=null&&yd(t,n,Ev)}function ja(t,n){return t!=null&&yd(t,n,Sv)}var e_=cd(function(t,n,o){n!=null&&typeof n.toString!="function"&&(n=ys.call(n)),t[n]=o},tl(Gt)),n_=cd(function(t,n,o){n!=null&&typeof n.toString!="function"&&(n=ys.call(n)),ut.call(t,n)?t[n].push(o):t[n]=[o]},z),r_=Q(di);function It(t){return Bt(t)?Cc(t):Ea(t)}function Vt(t){return Bt(t)?Cc(t,!0):Rv(t)}function i_(t,n){var o={};return n=z(n,3),Te(t,function(l,d,h){Re(o,n(l,d,h),l)}),o}function s_(t,n){var o={};return n=z(n,3),Te(t,function(l,d,h){Re(o,d,n(l,d,h))}),o}var o_=br(function(t,n,o){Ls(t,n,o)}),Qd=br(function(t,n,o,l){Ls(t,n,o,l)}),a_=Fe(function(t,n){var o={};if(t==null)return o;var l=!1;n=gt(n,function(h){return h=rn(h,t),l||(l=h.length>1),h}),Ae(t,ka(t),o),l&&(o=se(o,_|E|T,e0));for(var d=n.length;d--;)Oa(o,n[d]);return o});function l_(t,n){return tf(t,qs(z(n)))}var u_=Fe(function(t,n){return t==null?{}:Fv(t,n)});function tf(t,n){if(t==null)return{};var o=gt(ka(t),function(l){return[l]});return n=z(n),Gc(t,o,function(l,d){return n(l,d[0])})}function c_(t,n,o){n=rn(n,t);var l=-1,d=n.length;for(d||(d=1,t=i);++l<d;){var h=t==null?i:t[$e(n[l])];h===i&&(l=d,h=o),t=He(h)?h.call(t):h}return t}function d_(t,n,o){return t==null?t:hi(t,n,o)}function f_(t,n,o,l){return l=typeof l=="function"?l:i,t==null?t:hi(t,n,o,l)}var ef=hd(It),nf=hd(Vt);function h_(t,n,o){var l=Z(t),d=l||on(t)||Tr(t);if(n=z(n,4),o==null){var h=t&&t.constructor;d?o=l?new h:[]:vt(t)?o=He(h)?wr(ws(t)):{}:o={}}return(d?ne:Te)(t,function(g,y,w){return n(o,g,y,w)}),o}function p_(t,n){return t==null?!0:Oa(t,n)}function m_(t,n,o){return t==null?t:Kc(t,n,La(o))}function g_(t,n,o,l){return l=typeof l=="function"?l:i,t==null?t:Kc(t,n,La(o),l)}function Ar(t){return t==null?[]:ca(t,It(t))}function v_(t){return t==null?[]:ca(t,Vt(t))}function y_(t,n,o){return o===i&&(o=n,n=i),o!==i&&(o=le(o),o=o===o?o:0),n!==i&&(n=le(n),n=n===n?n:0),Sn(le(t),n,o)}function x_(t,n,o){return n=Pe(n),o===i?(o=n,n=0):o=Pe(o),t=le(t),Tv(t,n,o)}function __(t,n,o){if(o&&typeof o!="boolean"&&zt(t,n,o)&&(n=o=i),o===i&&(typeof n=="boolean"?(o=n,n=i):typeof t=="boolean"&&(o=t,t=i)),t===i&&n===i?(t=0,n=1):(t=Pe(t),n===i?(n=t,t=0):n=Pe(n)),t>n){var l=t;t=n,n=l}if(o||t%1||n%1){var d=Ac();return Ft(t+d*(n-t+jm("1e-"+((d+"").length-1))),n)}return Aa(t,n)}var w_=Er(function(t,n,o){return n=n.toLowerCase(),t+(o?rf(n):n)});function rf(t){return Qa(at(t).toLowerCase())}function sf(t){return t=at(t),t&&t.replace(Em,dg).replace(Wm,"")}function b_(t,n,o){t=at(t),n=Kt(n);var l=t.length;o=o===i?l:Sn(q(o),0,l);var d=o;return o-=n.length,o>=0&&t.slice(o,d)==n}function E_(t){return t=at(t),t&&rm.test(t)?t.replace(Nu,fg):t}function S_(t){return t=at(t),t&&um.test(t)?t.replace(Yo,"\\$&"):t}var T_=Er(function(t,n,o){return t+(o?"-":"")+n.toLowerCase()}),A_=Er(function(t,n,o){return t+(o?" ":"")+n.toLowerCase()}),$_=ad("toLowerCase");function C_(t,n,o){t=at(t),n=q(n);var l=n?vr(t):0;if(!n||l>=n)return t;var d=(n-l)/2;return Hs(Ts(d),o)+t+Hs(Ss(d),o)}function O_(t,n,o){t=at(t),n=q(n);var l=n?vr(t):0;return n&&l<n?t+Hs(n-l,o):t}function I_(t,n,o){t=at(t),n=q(n);var l=n?vr(t):0;return n&&l<n?Hs(n-l,o)+t:t}function M_(t,n,o){return o||n==null?n=0:n&&(n=+n),Hg(at(t).replace(Jo,""),n||0)}function L_(t,n,o){return(o?zt(t,n,o):n===i)?n=1:n=q(n),$a(at(t),n)}function D_(){var t=arguments,n=at(t[0]);return t.length<3?n:n.replace(t[1],t[2])}var R_=Er(function(t,n,o){return t+(o?"_":"")+n.toLowerCase()});function N_(t,n,o){return o&&typeof o!="number"&&zt(t,n,o)&&(n=o=i),o=o===i?Se:o>>>0,o?(t=at(t),t&&(typeof n=="string"||n!=null&&!Ka(n))&&(n=Kt(n),!n&&gr(t))?sn(ge(t),0,o):t.split(n,o)):[]}var F_=Er(function(t,n,o){return t+(o?" ":"")+Qa(n)});function k_(t,n,o){return t=at(t),o=o==null?0:Sn(q(o),0,t.length),n=Kt(n),t.slice(o,o+n.length)==n}function H_(t,n,o){var l=f.templateSettings;o&&zt(t,n,o)&&(n=i),t=at(t),n=Ks({},n,l,pd);var d=Ks({},n.imports,l.imports,pd),h=It(d),g=ca(d,h),y,w,A=0,$=n.interpolate||us,O="__p += '",D=fa((n.escape||us).source+"|"+$.source+"|"+($===Fu?vm:us).source+"|"+(n.evaluate||us).source+"|$","g"),k="//# sourceURL="+(ut.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++qm+"]")+`
`;t.replace(D,function(W,tt,rt,jt,Ut,Qt){return rt||(rt=jt),O+=t.slice(A,Qt).replace(Sm,hg),tt&&(y=!0,O+=`' +
__e(`+tt+`) +
'`),Ut&&(w=!0,O+=`';
`+Ut+`;
__p += '`),rt&&(O+=`' +
((__t = (`+rt+`)) == null ? '' : __t) +
'`),A=Qt+W.length,W}),O+=`';
`;var U=ut.call(n,"variable")&&n.variable;if(!U)O=`with (obj) {
`+O+`
}
`;else if(mm.test(U))throw new G(c);O=(w?O.replace(Qp,""):O).replace(tm,"$1").replace(em,"$1;"),O="function("+(U||"obj")+`) {
`+(U?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(w?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+O+`return __p
}`;var J=af(function(){return st(h,k+"return "+O).apply(i,g)});if(J.source=O,Ja(J))throw J;return J}function P_(t){return at(t).toLowerCase()}function z_(t){return at(t).toUpperCase()}function U_(t,n,o){if(t=at(t),t&&(o||n===i))return mc(t);if(!t||!(n=Kt(n)))return t;var l=ge(t),d=ge(n),h=gc(l,d),g=vc(l,d)+1;return sn(l,h,g).join("")}function W_(t,n,o){if(t=at(t),t&&(o||n===i))return t.slice(0,xc(t)+1);if(!t||!(n=Kt(n)))return t;var l=ge(t),d=vc(l,ge(n))+1;return sn(l,0,d).join("")}function B_(t,n,o){if(t=at(t),t&&(o||n===i))return t.replace(Jo,"");if(!t||!(n=Kt(n)))return t;var l=ge(t),d=gc(l,ge(n));return sn(l,d).join("")}function V_(t,n){var o=yn,l=Ho;if(vt(n)){var d="separator"in n?n.separator:d;o="length"in n?q(n.length):o,l="omission"in n?Kt(n.omission):l}t=at(t);var h=t.length;if(gr(t)){var g=ge(t);h=g.length}if(o>=h)return t;var y=o-vr(l);if(y<1)return l;var w=g?sn(g,0,y).join(""):t.slice(0,y);if(d===i)return w+l;if(g&&(y+=w.length-y),Ka(d)){if(t.slice(y).search(d)){var A,$=w;for(d.global||(d=fa(d.source,at(ku.exec(d))+"g")),d.lastIndex=0;A=d.exec($);)var O=A.index;w=w.slice(0,O===i?y:O)}}else if(t.indexOf(Kt(d),y)!=y){var D=w.lastIndexOf(d);D>-1&&(w=w.slice(0,D))}return w+l}function G_(t){return t=at(t),t&&nm.test(t)?t.replace(Ru,_g):t}var Z_=Er(function(t,n,o){return t+(o?" ":"")+n.toUpperCase()}),Qa=ad("toUpperCase");function of(t,n,o){return t=at(t),n=o?i:n,n===i?mg(t)?Eg(t):og(t):t.match(n)||[]}var af=Q(function(t,n){try{return Yt(t,i,n)}catch(o){return Ja(o)?o:new G(o)}}),q_=Fe(function(t,n){return ne(n,function(o){o=$e(o),Re(t,o,qa(t[o],t))}),t});function Y_(t){var n=t==null?0:t.length,o=z();return t=n?gt(t,function(l){if(typeof l[1]!="function")throw new re(a);return[o(l[0]),l[1]]}):[],Q(function(l){for(var d=-1;++d<n;){var h=t[d];if(Yt(h[0],this,l))return Yt(h[1],this,l)}})}function J_(t){return _v(se(t,_))}function tl(t){return function(){return t}}function K_(t,n){return t==null||t!==t?n:t}var X_=ud(),j_=ud(!0);function Gt(t){return t}function el(t){return Pc(typeof t=="function"?t:se(t,_))}function Q_(t){return Uc(se(t,_))}function tw(t,n){return Wc(t,se(n,_))}var ew=Q(function(t,n){return function(o){return di(o,t,n)}}),nw=Q(function(t,n){return function(o){return di(t,o,n)}});function nl(t,n,o){var l=It(n),d=Ms(n,l);o==null&&!(vt(n)&&(d.length||!l.length))&&(o=n,n=t,t=this,d=Ms(n,It(n)));var h=!(vt(o)&&"chain"in o)||!!o.chain,g=He(t);return ne(d,function(y){var w=n[y];t[y]=w,g&&(t.prototype[y]=function(){var A=this.__chain__;if(h||A){var $=t(this.__wrapped__),O=$.__actions__=Wt(this.__actions__);return O.push({func:w,args:arguments,thisArg:t}),$.__chain__=A,$}return w.apply(t,Xe([this.value()],arguments))})}),t}function rw(){return Ot._===this&&(Ot._=Og),this}function rl(){}function iw(t){return t=q(t),Q(function(n){return Bc(n,t)})}var sw=Ra(gt),ow=Ra(cc),aw=Ra(sa);function lf(t){return Ua(t)?oa($e(t)):kv(t)}function lw(t){return function(n){return t==null?i:Tn(t,n)}}var uw=dd(),cw=dd(!0);function il(){return[]}function sl(){return!1}function dw(){return{}}function fw(){return""}function hw(){return!0}function pw(t,n){if(t=q(t),t<1||t>Je)return[];var o=Se,l=Ft(t,Se);n=z(n),t-=Se;for(var d=ua(l,n);++o<t;)n(o);return d}function mw(t){return Z(t)?gt(t,$e):Xt(t)?[t]:Wt($d(at(t)))}function gw(t){var n=++$g;return at(t)+n}var vw=ks(function(t,n){return t+n},0),yw=Na("ceil"),xw=ks(function(t,n){return t/n},1),_w=Na("floor");function ww(t){return t&&t.length?Is(t,Gt,_a):i}function bw(t,n){return t&&t.length?Is(t,z(n,2),_a):i}function Ew(t){return hc(t,Gt)}function Sw(t,n){return hc(t,z(n,2))}function Tw(t){return t&&t.length?Is(t,Gt,Sa):i}function Aw(t,n){return t&&t.length?Is(t,z(n,2),Sa):i}var $w=ks(function(t,n){return t*n},1),Cw=Na("round"),Ow=ks(function(t,n){return t-n},0);function Iw(t){return t&&t.length?la(t,Gt):0}function Mw(t,n){return t&&t.length?la(t,z(n,2)):0}return f.after=Qy,f.ary=Hd,f.assign=zx,f.assignIn=jd,f.assignInWith=Ks,f.assignWith=Ux,f.at=Wx,f.before=Pd,f.bind=qa,f.bindAll=q_,f.bindKey=zd,f.castArray=dx,f.chain=Nd,f.chunk=_0,f.compact=w0,f.concat=b0,f.cond=Y_,f.conforms=J_,f.constant=tl,f.countBy=Iy,f.create=Bx,f.curry=Ud,f.curryRight=Wd,f.debounce=Bd,f.defaults=Vx,f.defaultsDeep=Gx,f.defer=tx,f.delay=ex,f.difference=E0,f.differenceBy=S0,f.differenceWith=T0,f.drop=A0,f.dropRight=$0,f.dropRightWhile=C0,f.dropWhile=O0,f.fill=I0,f.filter=Ly,f.flatMap=Ny,f.flatMapDeep=Fy,f.flatMapDepth=ky,f.flatten=Md,f.flattenDeep=M0,f.flattenDepth=L0,f.flip=nx,f.flow=X_,f.flowRight=j_,f.fromPairs=D0,f.functions=jx,f.functionsIn=Qx,f.groupBy=Hy,f.initial=N0,f.intersection=F0,f.intersectionBy=k0,f.intersectionWith=H0,f.invert=e_,f.invertBy=n_,f.invokeMap=zy,f.iteratee=el,f.keyBy=Uy,f.keys=It,f.keysIn=Vt,f.map=Vs,f.mapKeys=i_,f.mapValues=s_,f.matches=Q_,f.matchesProperty=tw,f.memoize=Zs,f.merge=o_,f.mergeWith=Qd,f.method=ew,f.methodOf=nw,f.mixin=nl,f.negate=qs,f.nthArg=iw,f.omit=a_,f.omitBy=l_,f.once=rx,f.orderBy=Wy,f.over=sw,f.overArgs=ix,f.overEvery=ow,f.overSome=aw,f.partial=Ya,f.partialRight=Vd,f.partition=By,f.pick=u_,f.pickBy=tf,f.property=lf,f.propertyOf=lw,f.pull=W0,f.pullAll=Dd,f.pullAllBy=B0,f.pullAllWith=V0,f.pullAt=G0,f.range=uw,f.rangeRight=cw,f.rearg=sx,f.reject=Zy,f.remove=Z0,f.rest=ox,f.reverse=Ga,f.sampleSize=Yy,f.set=d_,f.setWith=f_,f.shuffle=Jy,f.slice=q0,f.sortBy=jy,f.sortedUniq=ty,f.sortedUniqBy=ey,f.split=N_,f.spread=ax,f.tail=ny,f.take=ry,f.takeRight=iy,f.takeRightWhile=sy,f.takeWhile=oy,f.tap=wy,f.throttle=lx,f.thru=Bs,f.toArray=Jd,f.toPairs=ef,f.toPairsIn=nf,f.toPath=mw,f.toPlainObject=Xd,f.transform=h_,f.unary=ux,f.union=ay,f.unionBy=ly,f.unionWith=uy,f.uniq=cy,f.uniqBy=dy,f.uniqWith=fy,f.unset=p_,f.unzip=Za,f.unzipWith=Rd,f.update=m_,f.updateWith=g_,f.values=Ar,f.valuesIn=v_,f.without=hy,f.words=of,f.wrap=cx,f.xor=py,f.xorBy=my,f.xorWith=gy,f.zip=vy,f.zipObject=yy,f.zipObjectDeep=xy,f.zipWith=_y,f.entries=ef,f.entriesIn=nf,f.extend=jd,f.extendWith=Ks,nl(f,f),f.add=vw,f.attempt=af,f.camelCase=w_,f.capitalize=rf,f.ceil=yw,f.clamp=y_,f.clone=fx,f.cloneDeep=px,f.cloneDeepWith=mx,f.cloneWith=hx,f.conformsTo=gx,f.deburr=sf,f.defaultTo=K_,f.divide=xw,f.endsWith=b_,f.eq=ye,f.escape=E_,f.escapeRegExp=S_,f.every=My,f.find=Dy,f.findIndex=Od,f.findKey=Zx,f.findLast=Ry,f.findLastIndex=Id,f.findLastKey=qx,f.floor=_w,f.forEach=Fd,f.forEachRight=kd,f.forIn=Yx,f.forInRight=Jx,f.forOwn=Kx,f.forOwnRight=Xx,f.get=Xa,f.gt=vx,f.gte=yx,f.has=t_,f.hasIn=ja,f.head=Ld,f.identity=Gt,f.includes=Py,f.indexOf=R0,f.inRange=x_,f.invoke=r_,f.isArguments=Cn,f.isArray=Z,f.isArrayBuffer=xx,f.isArrayLike=Bt,f.isArrayLikeObject=bt,f.isBoolean=_x,f.isBuffer=on,f.isDate=wx,f.isElement=bx,f.isEmpty=Ex,f.isEqual=Sx,f.isEqualWith=Tx,f.isError=Ja,f.isFinite=Ax,f.isFunction=He,f.isInteger=Gd,f.isLength=Ys,f.isMap=Zd,f.isMatch=$x,f.isMatchWith=Cx,f.isNaN=Ox,f.isNative=Ix,f.isNil=Lx,f.isNull=Mx,f.isNumber=qd,f.isObject=vt,f.isObjectLike=wt,f.isPlainObject=vi,f.isRegExp=Ka,f.isSafeInteger=Dx,f.isSet=Yd,f.isString=Js,f.isSymbol=Xt,f.isTypedArray=Tr,f.isUndefined=Rx,f.isWeakMap=Nx,f.isWeakSet=Fx,f.join=P0,f.kebabCase=T_,f.last=ae,f.lastIndexOf=z0,f.lowerCase=A_,f.lowerFirst=$_,f.lt=kx,f.lte=Hx,f.max=ww,f.maxBy=bw,f.mean=Ew,f.meanBy=Sw,f.min=Tw,f.minBy=Aw,f.stubArray=il,f.stubFalse=sl,f.stubObject=dw,f.stubString=fw,f.stubTrue=hw,f.multiply=$w,f.nth=U0,f.noConflict=rw,f.noop=rl,f.now=Gs,f.pad=C_,f.padEnd=O_,f.padStart=I_,f.parseInt=M_,f.random=__,f.reduce=Vy,f.reduceRight=Gy,f.repeat=L_,f.replace=D_,f.result=c_,f.round=Cw,f.runInContext=x,f.sample=qy,f.size=Ky,f.snakeCase=R_,f.some=Xy,f.sortedIndex=Y0,f.sortedIndexBy=J0,f.sortedIndexOf=K0,f.sortedLastIndex=X0,f.sortedLastIndexBy=j0,f.sortedLastIndexOf=Q0,f.startCase=F_,f.startsWith=k_,f.subtract=Ow,f.sum=Iw,f.sumBy=Mw,f.template=H_,f.times=pw,f.toFinite=Pe,f.toInteger=q,f.toLength=Kd,f.toLower=P_,f.toNumber=le,f.toSafeInteger=Px,f.toString=at,f.toUpper=z_,f.trim=U_,f.trimEnd=W_,f.trimStart=B_,f.truncate=V_,f.unescape=G_,f.uniqueId=gw,f.upperCase=Z_,f.upperFirst=Qa,f.each=Fd,f.eachRight=kd,f.first=Ld,nl(f,function(){var t={};return Te(f,function(n,o){ut.call(f.prototype,o)||(t[o]=n)}),t}(),{chain:!1}),f.VERSION=e,ne(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){f[t].placeholder=f}),ne(["drop","take"],function(t,n){nt.prototype[t]=function(o){o=o===i?1:$t(q(o),0);var l=this.__filtered__&&!n?new nt(this):this.clone();return l.__filtered__?l.__takeCount__=Ft(o,l.__takeCount__):l.__views__.push({size:Ft(o,Se),type:t+(l.__dir__<0?"Right":"")}),l},nt.prototype[t+"Right"]=function(o){return this.reverse()[t](o).reverse()}}),ne(["filter","map","takeWhile"],function(t,n){var o=n+1,l=o==Mu||o==Wp;nt.prototype[t]=function(d){var h=this.clone();return h.__iteratees__.push({iteratee:z(d,3),type:o}),h.__filtered__=h.__filtered__||l,h}}),ne(["head","last"],function(t,n){var o="take"+(n?"Right":"");nt.prototype[t]=function(){return this[o](1).value()[0]}}),ne(["initial","tail"],function(t,n){var o="drop"+(n?"":"Right");nt.prototype[t]=function(){return this.__filtered__?new nt(this):this[o](1)}}),nt.prototype.compact=function(){return this.filter(Gt)},nt.prototype.find=function(t){return this.filter(t).head()},nt.prototype.findLast=function(t){return this.reverse().find(t)},nt.prototype.invokeMap=Q(function(t,n){return typeof t=="function"?new nt(this):this.map(function(o){return di(o,t,n)})}),nt.prototype.reject=function(t){return this.filter(qs(z(t)))},nt.prototype.slice=function(t,n){t=q(t);var o=this;return o.__filtered__&&(t>0||n<0)?new nt(o):(t<0?o=o.takeRight(-t):t&&(o=o.drop(t)),n!==i&&(n=q(n),o=n<0?o.dropRight(-n):o.take(n-t)),o)},nt.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},nt.prototype.toArray=function(){return this.take(Se)},Te(nt.prototype,function(t,n){var o=/^(?:filter|find|map|reject)|While$/.test(n),l=/^(?:head|last)$/.test(n),d=f[l?"take"+(n=="last"?"Right":""):n],h=l||/^find/.test(n);!d||(f.prototype[n]=function(){var g=this.__wrapped__,y=l?[1]:arguments,w=g instanceof nt,A=y[0],$=w||Z(g),O=function(tt){var rt=d.apply(f,Xe([tt],y));return l&&D?rt[0]:rt};$&&o&&typeof A=="function"&&A.length!=1&&(w=$=!1);var D=this.__chain__,k=!!this.__actions__.length,U=h&&!D,J=w&&!k;if(!h&&$){g=J?g:new nt(this);var W=t.apply(g,y);return W.__actions__.push({func:Bs,args:[O],thisArg:i}),new ie(W,D)}return U&&J?t.apply(this,y):(W=this.thru(O),U?l?W.value()[0]:W.value():W)})}),ne(["pop","push","shift","sort","splice","unshift"],function(t){var n=ms[t],o=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",l=/^(?:pop|shift)$/.test(t);f.prototype[t]=function(){var d=arguments;if(l&&!this.__chain__){var h=this.value();return n.apply(Z(h)?h:[],d)}return this[o](function(g){return n.apply(Z(g)?g:[],d)})}}),Te(nt.prototype,function(t,n){var o=f[n];if(o){var l=o.name+"";ut.call(_r,l)||(_r[l]=[]),_r[l].push({name:n,func:o})}}),_r[Fs(i,St).name]=[{name:"wrapper",func:i}],nt.prototype.clone=Gg,nt.prototype.reverse=Zg,nt.prototype.value=qg,f.prototype.at=by,f.prototype.chain=Ey,f.prototype.commit=Sy,f.prototype.next=Ty,f.prototype.plant=$y,f.prototype.reverse=Cy,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=Oy,f.prototype.first=f.prototype.head,ii&&(f.prototype[ii]=Ay),f},Qe=Sg();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Ot._=Qe,define(function(){return Qe})):_n?((_n.exports=Qe)._=Qe,ea._=Qe):Ot._=Qe}).call(Or)});v();v();v();v();v();var Qs=globalThis,eo=Qs.ShadowRoot&&(Qs.ShadyCSS===void 0||Qs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mf=Symbol(),pf=new WeakMap,to=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==mf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(eo&&e===void 0){let s=r!==void 0&&r.length===1;s&&(e=pf.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&pf.set(r,e))}return e}toString(){return this.cssText}},gf=i=>new to(typeof i=="string"?i:i+"",void 0,mf);var ll=(i,e)=>{if(eo)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),a=Qs.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=r.cssText,i.appendChild(s)}},no=eo?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return gf(r)})(i):i;var{is:Uw,defineProperty:Ww,getOwnPropertyDescriptor:Bw,getOwnPropertyNames:Vw,getOwnPropertySymbols:Gw,getPrototypeOf:Zw}=Object,an=globalThis,vf=an.trustedTypes,qw=vf?vf.emptyScript:"",ul=an.reactiveElementPolyfillSupport,yi=(i,e)=>i,ro={toAttribute(i,e){switch(e){case Boolean:i=i?qw:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(s){r=null}}return r}},cl=(i,e)=>!Uw(i,e),yf={attribute:!0,type:String,converter:ro,reflect:!1,hasChanged:cl},xf,_f;(xf=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(_f=an.litPropertyMetadata)!=null||(an.litPropertyMetadata=new WeakMap);var In=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=yf){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let s=Symbol(),a=this.getPropertyDescriptor(e,s,r);a!==void 0&&Ww(this.prototype,e,a)}}static getPropertyDescriptor(e,r,s){var u;let{get:a,set:c}=(u=Bw(this.prototype,e))!=null?u:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);c.call(this,p),this.requestUpdate(e,m,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:yf}static _$Ei(){if(this.hasOwnProperty(yi("elementProperties")))return;let e=Zw(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(yi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yi("properties"))){let r=this.properties,s=[...Vw(r),...Gw(r)];for(let a of s)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[s,a]of r)this.elementProperties.set(s,a)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let a=this._$Eu(r,s);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let a of s)r.unshift(no(a))}else e!==void 0&&r.push(no(e));return r}static _$Eu(e,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,s;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return ll(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostConnected)==null?void 0:a.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$EO(e,r){var c;let s=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,s);if(a!==void 0&&s.reflect===!0){let u=(((c=s.converter)==null?void 0:c.toAttribute)!==void 0?s.converter:ro).toAttribute(r,s.type);this._$Em=e,u==null?this.removeAttribute(a):this.setAttribute(a,u),this._$Em=null}}_$AK(e,r){var c;let s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let u=s.getPropertyOptions(a),p=typeof u.converter=="function"?{fromAttribute:u.converter}:((c=u.converter)==null?void 0:c.fromAttribute)!==void 0?u.converter:ro;this._$Em=a,this[a]=p.fromAttribute(r,u.type),this._$Em=null}}requestUpdate(e,r,s,a=!1,c){var u;if(e!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(e)),!((u=s.hasChanged)!=null?u:cl)(a?c:this[e],r))return;this.C(e,r,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,s){var a;this._$AL.has(e)||this._$AL.set(e,r),s.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return On(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[c,u]of this._$Ep)this[c]=u;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[c,u]of a)u.wrapped!==!0||this._$AL.has(c)||this[c]===void 0||this.C(c,this[c],u)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(s=this._$ES)==null||s.forEach(a=>{var c;return(c=a.hostUpdate)==null?void 0:c.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostUpdated)==null?void 0:a.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},wf;In.elementStyles=[],In.shadowRootOptions={mode:"open"},In[yi("elementProperties")]=new Map,In[yi("finalized")]=new Map,ul==null||ul({ReactiveElement:In}),((wf=an.reactiveElementVersions)!=null?wf:an.reactiveElementVersions=[]).push("2.0.0");v();var _i=globalThis,io=_i.trustedTypes,bf=io?io.createPolicy("lit-html",{createHTML:i=>i}):void 0,hl="$lit$",Ue=`lit$${(Math.random()+"").slice(9)}$`,pl="?"+Ue,Yw=`<${pl}>`,Dn=document,so=()=>Dn.createComment(""),wi=i=>i===null||typeof i!="object"&&typeof i!="function",Of=Array.isArray,If=i=>Of(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",dl=`[ 	
\f\r]`,xi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ef=/-->/g,Sf=/>/g,Mn=RegExp(`>|${dl}(?:([^\\s"'>=/]+)(${dl}*=${dl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tf=/'/g,Af=/"/g,Mf=/^(?:script|style|textarea|title)$/i,Lf=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),r1=Lf(1),i1=Lf(2),We=Symbol.for("lit-noChange"),Mt=Symbol.for("lit-nothing"),$f=new WeakMap,Ln=Dn.createTreeWalker(Dn,129);function Df(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return bf!==void 0?bf.createHTML(e):e}var Rf=(i,e)=>{let r=i.length-1,s=[],a,c=e===2?"<svg>":"",u=xi;for(let p=0;p<r;p++){let m=i[p],_,E,T=-1,N=0;for(;N<m.length&&(u.lastIndex=N,E=u.exec(m),E!==null);)N=u.lastIndex,u===xi?E[1]==="!--"?u=Ef:E[1]!==void 0?u=Sf:E[2]!==void 0?(Mf.test(E[2])&&(a=RegExp("</"+E[2],"g")),u=Mn):E[3]!==void 0&&(u=Mn):u===Mn?E[0]===">"?(u=a!=null?a:xi,T=-1):E[1]===void 0?T=-2:(T=u.lastIndex-E[2].length,_=E[1],u=E[3]===void 0?Mn:E[3]==='"'?Af:Tf):u===Af||u===Tf?u=Mn:u===Ef||u===Sf?u=xi:(u=Mn,a=void 0);let I=u===Mn&&i[p+1].startsWith("/>")?" ":"";c+=u===xi?m+Yw:T>=0?(s.push(_),m.slice(0,T)+hl+m.slice(T)+Ue+I):m+Ue+(T===-2?p:I)}return[Df(i,c+(i[r]||"<?>")+(e===2?"</svg>":"")),s]},Rn=class{constructor({strings:e,_$litType$:r},s){let a;this.parts=[];let c=0,u=0,p=e.length-1,m=this.parts,[_,E]=Rf(e,r);if(this.el=Rn.createElement(_,s),Ln.currentNode=this.el.content,r===2){let T=this.el.content.firstChild;T.replaceWith(...T.childNodes)}for(;(a=Ln.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let T of a.getAttributeNames())if(T.endsWith(hl)){let N=E[u++],I=a.getAttribute(T).split(Ue),L=/([.?@])?(.*)/.exec(N);m.push({type:1,index:c,name:L[2],strings:I,ctor:L[1]==="."?ao:L[1]==="?"?lo:L[1]==="@"?uo:kn}),a.removeAttribute(T)}else T.startsWith(Ue)&&(m.push({type:6,index:c}),a.removeAttribute(T));if(Mf.test(a.tagName)){let T=a.textContent.split(Ue),N=T.length-1;if(N>0){a.textContent=io?io.emptyScript:"";for(let I=0;I<N;I++)a.append(T[I],so()),Ln.nextNode(),m.push({type:2,index:++c});a.append(T[N],so())}}}else if(a.nodeType===8)if(a.data===pl)m.push({type:2,index:c});else{let T=-1;for(;(T=a.data.indexOf(Ue,T+1))!==-1;)m.push({type:7,index:c}),T+=Ue.length-1}c++}}static createElement(e,r){let s=Dn.createElement("template");return s.innerHTML=e,s}};function Nn(i,e,r=i,s){var u,p,m;if(e===We)return e;let a=s!==void 0?(u=r._$Co)==null?void 0:u[s]:r._$Cl,c=wi(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),c===void 0?a=void 0:(a=new c(i),a._$AT(i,r,s)),s!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[s]=a:r._$Cl=a),a!==void 0&&(e=Nn(i,a._$AS(i,e.values),a,s)),e}var oo=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var _;let{el:{content:r},parts:s}=this._$AD,a=((_=e==null?void 0:e.creationScope)!=null?_:Dn).importNode(r,!0);Ln.currentNode=a;let c=Ln.nextNode(),u=0,p=0,m=s[0];for(;m!==void 0;){if(u===m.index){let E;m.type===2?E=new Fn(c,c.nextSibling,this,e):m.type===1?E=new m.ctor(c,m.name,m.strings,this,e):m.type===6&&(E=new co(c,this,e)),this._$AV.push(E),m=s[++p]}u!==(m==null?void 0:m.index)&&(c=Ln.nextNode(),u++)}return Ln.currentNode=Dn,a}p(e){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,r),r+=s.strings.length-2):s._$AI(e[r])),r++}},Fn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,s,a){var c;this.type=2,this._$AH=Mt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=a,this._$Cv=(c=a==null?void 0:a.isConnected)!=null?c:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Nn(this,e,r),wi(e)?e===Mt||e==null||e===""?(this._$AH!==Mt&&this._$AR(),this._$AH=Mt):e!==this._$AH&&e!==We&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):If(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Mt&&wi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Dn.createTextNode(e)),this._$AH=e}g(e){var c;let{values:r,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Rn.createElement(Df(s.h,s.h[0]),this.options)),s);if(((c=this._$AH)==null?void 0:c._$AD)===a)this._$AH.p(r);else{let u=new oo(a,this),p=u.u(this.options);u.p(r),this.$(p),this._$AH=u}}_$AC(e){let r=$f.get(e.strings);return r===void 0&&$f.set(e.strings,r=new Rn(e)),r}T(e){Of(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,a=0;for(let c of e)a===r.length?r.push(s=new Fn(this.k(so()),this.k(so()),this,this.options)):s=r[a],s._$AI(c),a++;a<r.length&&(this._$AR(s&&s._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},kn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,a,c){this.type=1,this._$AH=Mt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=c,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Mt}_$AI(e,r=this,s,a){let c=this.strings,u=!1;if(c===void 0)e=Nn(this,e,r,0),u=!wi(e)||e!==this._$AH&&e!==We,u&&(this._$AH=e);else{let p=e,m,_;for(e=c[0],m=0;m<c.length-1;m++)_=Nn(this,p[s+m],r,m),_===We&&(_=this._$AH[m]),u||(u=!wi(_)||_!==this._$AH[m]),_===Mt?e=Mt:e!==Mt&&(e+=(_!=null?_:"")+c[m+1]),this._$AH[m]=_}u&&!a&&this.j(e)}j(e){e===Mt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},ao=class extends kn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Mt?void 0:e}},lo=class extends kn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Mt)}},uo=class extends kn{constructor(e,r,s,a,c){super(e,r,s,a,c),this.type=5}_$AI(e,r=this){var u;if((e=(u=Nn(this,e,r,0))!=null?u:Mt)===We)return;let s=this._$AH,a=e===Mt&&s!==Mt||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,c=e!==Mt&&(s===Mt||a);a&&this.element.removeEventListener(this.name,this,s),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,s;typeof this._$AH=="function"?this._$AH.call((s=(r=this.options)==null?void 0:r.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}},co=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Nn(this,e)}},Nf={S:hl,A:Ue,P:pl,C:1,M:Rf,L:oo,R:If,V:Nn,D:Fn,I:kn,H:lo,N:uo,U:ao,B:co},fl=_i.litHtmlPolyfillSupport,Cf;fl==null||fl(Rn,Fn),((Cf=_i.litHtmlVersions)!=null?Cf:_i.litHtmlVersions=[]).push("3.0.0");v();v();v();var fo=globalThis,ho=fo.ShadowRoot&&(fo.ShadyCSS===void 0||fo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ml=Symbol(),Ff=new WeakMap,bi=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==ml)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(ho&&e===void 0){let s=r!==void 0&&r.length===1;s&&(e=Ff.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Ff.set(r,e))}return e}toString(){return this.cssText}},kf=i=>new bi(typeof i=="string"?i:i+"",void 0,ml),B=(i,...e)=>{let r=i.length===1?i[0]:e.reduce((s,a,c)=>s+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+i[c+1],i[0]);return new bi(r,i,ml)},gl=(i,e)=>{if(ho)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),a=fo.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=r.cssText,i.appendChild(s)}},po=ho?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return kf(r)})(i):i;var{is:Jw,defineProperty:Kw,getOwnPropertyDescriptor:Xw,getOwnPropertyNames:jw,getOwnPropertySymbols:Qw,getPrototypeOf:tb}=Object,ln=globalThis,Hf=ln.trustedTypes,eb=Hf?Hf.emptyScript:"",vl=ln.reactiveElementPolyfillSupport,Ei=(i,e)=>i,yl={toAttribute(i,e){switch(e){case Boolean:i=i?eb:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(s){r=null}}return r}},Bf=(i,e)=>!Jw(i,e),Pf={attribute:!0,type:String,converter:yl,reflect:!1,hasChanged:Bf},zf,Uf;(zf=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Uf=ln.litPropertyMetadata)!=null||(ln.litPropertyMetadata=new WeakMap);var Be=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Pf){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let s=Symbol(),a=this.getPropertyDescriptor(e,s,r);a!==void 0&&Kw(this.prototype,e,a)}}static getPropertyDescriptor(e,r,s){var u;let{get:a,set:c}=(u=Xw(this.prototype,e))!=null?u:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);c.call(this,p),this.requestUpdate(e,m,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:Pf}static _$Ei(){if(this.hasOwnProperty(Ei("elementProperties")))return;let e=tb(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ei("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ei("properties"))){let r=this.properties,s=[...jw(r),...Qw(r)];for(let a of s)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[s,a]of r)this.elementProperties.set(s,a)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let a=this._$Eu(r,s);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let a of s)r.unshift(po(a))}else e!==void 0&&r.push(po(e));return r}static _$Eu(e,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,s;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return gl(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostConnected)==null?void 0:a.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$EO(e,r){var c;let s=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,s);if(a!==void 0&&s.reflect===!0){let u=(((c=s.converter)==null?void 0:c.toAttribute)!==void 0?s.converter:yl).toAttribute(r,s.type);this._$Em=e,u==null?this.removeAttribute(a):this.setAttribute(a,u),this._$Em=null}}_$AK(e,r){var c;let s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let u=s.getPropertyOptions(a),p=typeof u.converter=="function"?{fromAttribute:u.converter}:((c=u.converter)==null?void 0:c.fromAttribute)!==void 0?u.converter:yl;this._$Em=a,this[a]=p.fromAttribute(r,u.type),this._$Em=null}}requestUpdate(e,r,s,a=!1,c){var u;if(e!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(e)),!((u=s.hasChanged)!=null?u:Bf)(a?c:this[e],r))return;this.C(e,r,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,s){var a;this._$AL.has(e)||this._$AL.set(e,r),s.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return On(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[c,u]of this._$Ep)this[c]=u;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[c,u]of a)u.wrapped!==!0||this._$AL.has(c)||this[c]===void 0||this.C(c,this[c],u)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(s=this._$ES)==null||s.forEach(a=>{var c;return(c=a.hostUpdate)==null?void 0:c.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostUpdated)==null?void 0:a.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},Wf;Be.elementStyles=[],Be.shadowRootOptions={mode:"open"},Be[Ei("elementProperties")]=new Map,Be[Ei("finalized")]=new Map,vl==null||vl({ReactiveElement:Be}),((Wf=ln.reactiveElementVersions)!=null?Wf:ln.reactiveElementVersions=[]).push("2.0.0");v();var Ti=globalThis,mo=Ti.trustedTypes,Vf=mo?mo.createPolicy("lit-html",{createHTML:i=>i}):void 0,Xf="$lit$",un=`lit$${(Math.random()+"").slice(9)}$`,jf="?"+un,nb=`<${jf}>`,zn=document,Ai=()=>zn.createComment(""),$i=i=>i===null||typeof i!="object"&&typeof i!="function",Qf=Array.isArray,rb=i=>Qf(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",xl=`[ 	
\f\r]`,Si=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gf=/-->/g,Zf=/>/g,Hn=RegExp(`>|${xl}(?:([^\\s"'>=/]+)(${xl}*=${xl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qf=/'/g,Yf=/"/g,th=/^(?:script|style|textarea|title)$/i,eh=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),M=eh(1),c1=eh(2),Un=Symbol.for("lit-noChange"),Lt=Symbol.for("lit-nothing"),Jf=new WeakMap,Pn=zn.createTreeWalker(zn,129);function nh(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vf!==void 0?Vf.createHTML(e):e}var ib=(i,e)=>{let r=i.length-1,s=[],a,c=e===2?"<svg>":"",u=Si;for(let p=0;p<r;p++){let m=i[p],_,E,T=-1,N=0;for(;N<m.length&&(u.lastIndex=N,E=u.exec(m),E!==null);)N=u.lastIndex,u===Si?E[1]==="!--"?u=Gf:E[1]!==void 0?u=Zf:E[2]!==void 0?(th.test(E[2])&&(a=RegExp("</"+E[2],"g")),u=Hn):E[3]!==void 0&&(u=Hn):u===Hn?E[0]===">"?(u=a!=null?a:Si,T=-1):E[1]===void 0?T=-2:(T=u.lastIndex-E[2].length,_=E[1],u=E[3]===void 0?Hn:E[3]==='"'?Yf:qf):u===Yf||u===qf?u=Hn:u===Gf||u===Zf?u=Si:(u=Hn,a=void 0);let I=u===Hn&&i[p+1].startsWith("/>")?" ":"";c+=u===Si?m+nb:T>=0?(s.push(_),m.slice(0,T)+Xf+m.slice(T)+un+I):m+un+(T===-2?p:I)}return[nh(i,c+(i[r]||"<?>")+(e===2?"</svg>":"")),s]},Wn=class{constructor({strings:e,_$litType$:r},s){let a;this.parts=[];let c=0,u=0,p=e.length-1,m=this.parts,[_,E]=ib(e,r);if(this.el=Wn.createElement(_,s),Pn.currentNode=this.el.content,r===2){let T=this.el.content.firstChild;T.replaceWith(...T.childNodes)}for(;(a=Pn.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let T of a.getAttributeNames())if(T.endsWith(Xf)){let N=E[u++],I=a.getAttribute(T).split(un),L=/([.?@])?(.*)/.exec(N);m.push({type:1,index:c,name:L[2],strings:I,ctor:L[1]==="."?bl:L[1]==="?"?El:L[1]==="@"?Sl:Cr}),a.removeAttribute(T)}else T.startsWith(un)&&(m.push({type:6,index:c}),a.removeAttribute(T));if(th.test(a.tagName)){let T=a.textContent.split(un),N=T.length-1;if(N>0){a.textContent=mo?mo.emptyScript:"";for(let I=0;I<N;I++)a.append(T[I],Ai()),Pn.nextNode(),m.push({type:2,index:++c});a.append(T[N],Ai())}}}else if(a.nodeType===8)if(a.data===jf)m.push({type:2,index:c});else{let T=-1;for(;(T=a.data.indexOf(un,T+1))!==-1;)m.push({type:7,index:c}),T+=un.length-1}c++}}static createElement(e,r){let s=zn.createElement("template");return s.innerHTML=e,s}};function $r(i,e,r=i,s){var u,p,m;if(e===Un)return e;let a=s!==void 0?(u=r._$Co)==null?void 0:u[s]:r._$Cl,c=$i(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),c===void 0?a=void 0:(a=new c(i),a._$AT(i,r,s)),s!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[s]=a:r._$Cl=a),a!==void 0&&(e=$r(i,a._$AS(i,e.values),a,s)),e}var wl=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var _;let{el:{content:r},parts:s}=this._$AD,a=((_=e==null?void 0:e.creationScope)!=null?_:zn).importNode(r,!0);Pn.currentNode=a;let c=Pn.nextNode(),u=0,p=0,m=s[0];for(;m!==void 0;){if(u===m.index){let E;m.type===2?E=new Bn(c,c.nextSibling,this,e):m.type===1?E=new m.ctor(c,m.name,m.strings,this,e):m.type===6&&(E=new Tl(c,this,e)),this._$AV.push(E),m=s[++p]}u!==(m==null?void 0:m.index)&&(c=Pn.nextNode(),u++)}return Pn.currentNode=zn,a}p(e){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,r),r+=s.strings.length-2):s._$AI(e[r])),r++}},Bn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,s,a){var c;this.type=2,this._$AH=Lt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=a,this._$Cv=(c=a==null?void 0:a.isConnected)!=null?c:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=$r(this,e,r),$i(e)?e===Lt||e==null||e===""?(this._$AH!==Lt&&this._$AR(),this._$AH=Lt):e!==this._$AH&&e!==Un&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):rb(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Lt&&$i(this._$AH)?this._$AA.nextSibling.data=e:this.$(zn.createTextNode(e)),this._$AH=e}g(e){var c;let{values:r,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Wn.createElement(nh(s.h,s.h[0]),this.options)),s);if(((c=this._$AH)==null?void 0:c._$AD)===a)this._$AH.p(r);else{let u=new wl(a,this),p=u.u(this.options);u.p(r),this.$(p),this._$AH=u}}_$AC(e){let r=Jf.get(e.strings);return r===void 0&&Jf.set(e.strings,r=new Wn(e)),r}T(e){Qf(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,a=0;for(let c of e)a===r.length?r.push(s=new Bn(this.k(Ai()),this.k(Ai()),this,this.options)):s=r[a],s._$AI(c),a++;a<r.length&&(this._$AR(s&&s._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},Cr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,a,c){this.type=1,this._$AH=Lt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=c,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Lt}_$AI(e,r=this,s,a){let c=this.strings,u=!1;if(c===void 0)e=$r(this,e,r,0),u=!$i(e)||e!==this._$AH&&e!==Un,u&&(this._$AH=e);else{let p=e,m,_;for(e=c[0],m=0;m<c.length-1;m++)_=$r(this,p[s+m],r,m),_===Un&&(_=this._$AH[m]),u||(u=!$i(_)||_!==this._$AH[m]),_===Lt?e=Lt:e!==Lt&&(e+=(_!=null?_:"")+c[m+1]),this._$AH[m]=_}u&&!a&&this.j(e)}j(e){e===Lt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},bl=class extends Cr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Lt?void 0:e}},El=class extends Cr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Lt)}},Sl=class extends Cr{constructor(e,r,s,a,c){super(e,r,s,a,c),this.type=5}_$AI(e,r=this){var u;if((e=(u=$r(this,e,r,0))!=null?u:Lt)===Un)return;let s=this._$AH,a=e===Lt&&s!==Lt||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,c=e!==Lt&&(s===Lt||a);a&&this.element.removeEventListener(this.name,this,s),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,s;typeof this._$AH=="function"?this._$AH.call((s=(r=this.options)==null?void 0:r.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}},Tl=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){$r(this,e)}};var _l=Ti.litHtmlPolyfillSupport,Kf;_l==null||_l(Wn,Bn),((Kf=Ti.litHtmlVersions)!=null?Kf:Ti.litHtmlVersions=[]).push("3.0.0");var rh=(i,e,r)=>{var c,u;let s=(c=r==null?void 0:r.renderBefore)!=null?c:e,a=s._$litPart$;if(a===void 0){let p=(u=r==null?void 0:r.renderBefore)!=null?u:null;s._$litPart$=a=new Bn(e.insertBefore(Ai(),p),p,void 0,r!=null?r:{})}return a._$AI(i),a};var V=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r,s;let e=super.createRenderRoot();return(s=(r=this.renderOptions).renderBefore)!=null||(r.renderBefore=e.firstChild),e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Un}},ih;V._$litElement$=!0,V["finalized"]=!0,(ih=globalThis.litElementHydrateSupport)==null||ih.call(globalThis,{LitElement:V});var Al=globalThis.litElementPolyfillSupport;Al==null||Al({LitElement:V});var sh;((sh=globalThis.litElementVersions)!=null?sh:globalThis.litElementVersions=[]).push("4.0.0");v();v();v();var X=i=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};v();v();v();v();v();v();v();v();v();var Vn=class extends V{render(){return M` <div>Hello from SuperViz, ${this.name}</div> `}};Vn.properties={name:{type:String}},Vn.styles=B`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `,Vn=K([X("superviz-hello-world")],Vn);v();v();v();var ah=zw(oh()),$l=class{setConfig(e){this.configuration=e}get(e,r){return this.configuration?ah.default.get(this.configuration,e,r):r}},Cl=new $l;v();v();var Ol=B`
  * {
    --sv-primary: 98, 16, 204;
    --sv-primary-900: 56, 7, 136;
    --sv-primary-200: 193, 161, 234;
    --sv-secondary: 193, 251, 223;
    --sv-gray: 126, 122, 136;
    --sv-success: 12, 185, 71;
    --sv-danger: 229, 65, 30;
    --sv-black: 19, 18, 21;
    --sv-white: 255, 255, 255;
    --sv-gray-100: 250, 250, 252;
    --sv-gray-200: 233, 229, 239;
    --sv-gray-300: 201, 196, 209;
    --sv-gray-400: 174, 169, 184;
    --sv-gray-500: 126, 122, 136;
    --sv-gray-600: 87, 83, 95;
    --sv-gray-700: 57, 54, 62;
    --sv-gray-800: 38, 36, 42;
  }

  .sv-gray-200 {
    color: rgb(var(--sv-gray-200));
  }

  .sv-gray-400 {
    color: rgb(var(--sv-gray-400));
  }

  .sv-gray-500 {
    color: rgb(var(--sv-gray-500));
  }

  .sv-gray-600 {
    color: rgb(var(--sv-gray-600));
  }

  .sv-gray-700 {
    color: rgb(var(--sv-gray-700));
  }
`;v();var Il=B`
  .text {
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .text-bold {
    font-weight: 700;
  }

  .text-big {
    font-size: 14px;
  }

  .text-small {
    font-size: 10px;
  }
`;v();var Ml=B`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;v();var Ll=B`
  .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0);
    border: 0px;
    width: 32px;
    height: 32px;
  }

  .icon-button > superviz-icon {
    display: flex !important;
  }

  .icon-button--xsmall {
    width: 18px;
    height: 18px;
  }

  .icon-button--small {
    width: 24px;
    height: 24px;
  }

  .icon-button--medium {
    width: 32px;
    height: 32px;
  }

  .icon-button--large {
    width: 40px;
    height: 40px;
  }

  .icon-button--clickable {
    cursor: pointer;
    border-radius: 100%;
  }

  .icon-button--clickable:hover:not(.icon-button--no-hover) {
    background: rgb(var(--sv-gray-300));
  }

  .icon-button--clickable:focus:not(.icon-button--no-hover) {
    background: rgb(var(--sv-gray-300));
  }
`;var et=i=>{var r;class e extends i{connectedCallback(){setTimeout(()=>{var p,m;let a=document.getElementById("superviz-style"),c=this.createCustomColors(),u=document.createElement("style");u.innerHTML=(a==null?void 0:a.innerHTML)||"",(p=this.shadowRoot)==null||p.appendChild(u),c&&((m=this.shadowRoot)==null||m.appendChild(c))}),super.connectedCallback()}createCustomColors(){if(!Cl.get("colors"))return;let a=document.createElement("style"),c=Object.entries(Cl.get("colors")).map(([u,p])=>`--${u}: ${p} !important;`).join(" ");return a.innerHTML=`
      * {
        ${c}
      }
    `,a}emitEvent(a,c,u={composed:!0,bubbles:!0}){let p=new CustomEvent(a,H({detail:c},u));this.dispatchEvent(p)}}return e.styles=[Ol,Il,Ml,Ll,(r=i.styles)!=null?r:[]],e};var lh=et(V),sb=[lh.styles],Gn=class extends lh{constructor(){super();this.name="",this.size="md"}render(){return M` <i class="sv-icon sv-icon-${this.name}_${this.size}"></i> `}};Gn.properties={name:{type:String},size:{type:String}},Gn.styles=[sb,B`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `],Gn=K([X("superviz-icon")],Gn);v();v();v();v();var vo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yo=i=>(...e)=>({_$litDirective$:i,values:e}),Ir=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,s){this._$Ct=e,this._$AM=r,this._$Ci=s}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var dt=yo(class extends Ir{constructor(i){var e;if(super(i),i.type!==vo.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var s,a;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(c=>c!=="")));for(let c in e)e[c]&&!((s=this.st)!=null&&s.has(c))&&this.it.add(c);return this.render(e)}let r=i.element.classList;for(let c of this.it)c in e||(r.remove(c),this.it.delete(c));for(let c in e){let u=!!e[c];u===this.it.has(c)||((a=this.st)==null?void 0:a.has(c))||(u?(r.add(c),this.it.add(c)):(r.remove(c),this.it.delete(c)))}return We}});v();var uh=B`
  .dropdown {
    position: relative;
  }

  .dropdown-content {
    display: flex;
  }

  .select-clicked {
    border: 2px #26489a solid;
  }

  .dropdown-list {
    position: relative;
  }

  .dropdown-list * {
    box-sizing: border-box;
  }

  .header {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px 10px 0;
    font-size: 16px;
    color: rgb(var(--sv-gray-600));
  }

  .menu {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    opacity: 0;
    display: none;
    background: #fff;
    padding: 0;
    z-index: 1;
    transition: 0.2s;
    border-radius: 3px;
  }

  .who-is-online-dropdown {
    padding: 4px;
  }

  .items {
    list-style: none;
    padding: 0;
    color: #9fa5b5;
    margin: 0;
  }

  .menu--bottom-left {
    min-width: 103px;
    position: absolute;
    right: 0;
    top: 4px;
  }

  .menu--bottom-center {
    min-width: 103px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 4px;
  }

  .menu--bottom-right {
    min-width: 103px;
    position: absolute;
    left: 0;
    top: 4px;
  }

  .menu--top-left {
    min-width: 103px;
    position: absolute;
    right: 0;
    bottom: 44px;
  }

  .menu--top-center {
    min-width: 103px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 44px;
  }

  .menu--top-right {
    min-width: 103px;
    position: absolute;
    left: 0;
    bottom: 44px;
  }

  .items li {
    color: rgb(var(--sv-gray-600));
    text-transform: uppercase;
    padding: 5px 10px;
    cursor: pointer;
    min-width: 103px;
    min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
  }

  .sv-icon {
    width: 40px;
    height: 40px;
    background-color: red;
  }

  .active {
    background: rgb(var(--sv-gray-200));
  }

  .items li:hover {
    background: rgb(var(--sv-gray-200));
  }

  .menu-open {
    display: block;
    opacity: 1;
  }

  .sv-hr {
    width: 100%;
    height: 0.8px;
    background: rgb(var(--sv-gray-300));
    padding: 0px;
    margin: 0px;
  }

  @media (max-width: 780px) {
    .menu--top-left,
    .menu--top-center,
    .menu--top-right {
      bottom: 36px;
    }
  }
`;v();var ch=et(V),ob=[ch.styles,uh],Zn=class extends ch{constructor(){super(...arguments);this.menu=void 0;this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let s=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),c=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=s.includes(a),_=s.includes(c),E=s.includes(p);m||_||E||(this.open=!1)};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.callbackSelected=r=>{this.open=!1;let s=this.returnTo?r[this.returnTo]:r;this.emitEvent("selected",s,{bubbles:!1,composed:!1})};this.adjustPosition=()=>{this.adjustPositionVertical(),this.adjustPositionHorizontal()}}updated(r){if(!!r.has("open")){if(this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown),this.close()}}get dropdownBounds(){this.dropdownContent||(this.dropdownContent=this.shadowRoot.querySelector(".dropdown-content"));let r=this.dropdownContent.getBoundingClientRect(),{y:s,height:a,x:c,width:u}=this.menu.getBoundingClientRect();return{top:s,bottom:s+a+4,left:c,right:c+u,height:a+4,width:u,contentX:r.x,contentY:r.y,contentWidth:r.width}}positionVerticalAction(){let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,c=s>a,u=r<0;return c&&this.position.includes("bottom")||u&&this.position.includes("top")?2:!c&&!u&&this.shouldUseOriginalVertical()?1:0}positionHorizontalAction(){if(this.dropdownCovered())return 0;let{right:r,left:s,contentX:a,contentWidth:c,width:u}=this.dropdownBounds,{innerWidth:p}=window,m=r>p,E=s<0||m;if(E&&!this.position.includes("center"))return 2;if(this.position.includes("center")){let T=a+c/2,N=T-u/2<0,I=T+u/2>p;if(N||I)return 2}return!E&&this.shouldUseOriginalHorizontal()?1:this.shouldCenter()&&this.position!==this.originalPosition&&!this.position.includes("center")?3:0}dropdownCovered(){let{left:r,right:s}=this.dropdownBounds,{innerWidth:a}=window;if(this.position.includes("center"))return!1;let c=s>a&&this.position.includes("left"),u=r<0&&this.position.includes("right");return c||u}shouldCenter(){let{contentX:r,contentWidth:s,width:a}=this.dropdownBounds,c=r+s/2,u=c-a/2<0,p=c+a/2>window.innerWidth;return!(u||p)}shouldUseOriginalVertical(){let{height:r,contentY:s}=this.dropdownBounds,{innerHeight:a}=window,c=s+r;return this.originalPosition.includes("bottom")?r+c<a:s-r>0}shouldUseOriginalHorizontal(){let{width:r,contentX:s}=this.dropdownBounds,{innerWidth:a}=window,c=s+r;return this.position===this.originalPosition?!1:this.originalPosition.includes("center")?c<a&&s-r>0:this.originalPosition.includes("left")?s-r>0:c<a}adjustPositionVertical(){let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,c=this.positionVerticalAction();if(c===0)return;if(c===1){let _=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,_);return}let u=a-s>r?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,u);this.position=m}adjustPositionHorizontal(){let{left:r,right:s,width:a}=this.dropdownBounds,c=r<0,u=s>window.innerWidth,p=this.positionHorizontalAction();if(p===0)return;if(p===1){let L=this.originalPosition.split("-")[1];this.position=this.position.replace(/left|center|right/,L);return}let m=c?s:r,_=(c?a:-a)/2-20,E=m+_;if(c=E<0,u=E+a>window.innerWidth,!(c||u)&&p===3||p===3){let L=this.position.replace(/left|right/,"center");this.position=L;return}if(this.position.includes("center")){let L=c?"right":"left",St=this.position.replace("center",L);this.position=St;return}let I=this.position.replace(/left|right/,"center");this.position=I}setMenu(){var r;if(!this.menu){this.menu=this.shadowRoot.querySelector(".menu");let s={rootMargin:"0px",threshold:1},a=new IntersectionObserver(this.adjustPosition,s),c=new ResizeObserver(this.adjustPosition),u=this.menu;a.observe(u),c.observe((r=this.scrollableParent)!=null?r:document.body)}}get scrollableParent(){let r;this.host||(this.host=this.getRootNode().host);let s=this.host;for(;!r;){let a=s==null?void 0:s.parentElement;if(this.isScrollable(a)){r=a;break}if(s=a,!s)break}return r}isScrollable(r){if(!r)return!1;let s=r.scrollHeight>r.clientHeight,a=window.getComputedStyle(r).overflowY,c=window.getComputedStyle(r).overflowX,u=a.indexOf("hidden")!==-1,p=c.indexOf("hidden")!==-1;return s&&!u&&!p}get renderHeader(){return this.name?M` <div class="header">
      <span class="text">${this.name}</span>
      <span class="sv-hr"></span>
    </div>`:M``}toggle(){this.disabled||(this.originalPosition||(this.originalPosition=this.position),this.setMenu(),this.open=!this.open,this.open&&setTimeout(()=>this.adjustPosition()))}render(){var c;let r={menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu--top-left":this.position==="top-left","menu--top-center":this.position==="top-center","menu--top-right":this.position==="top-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right","who-is-online-dropdown":this.name},s=(c=this.icons)==null?void 0:c.map(u=>M`<superviz-icon name="${u}" size="sm"></superviz-icon>`),a=this.options.map((u,p)=>{let m={text:!0,"text-bold":!0,active:(u==null?void 0:u[this.returnTo])&&this.active===(u==null?void 0:u[this.returnTo])};return M`<li @click=${()=>this.callbackSelected(u)} class=${dt(m)}>
        ${s==null?void 0:s.at(p)} ${u[this.label]}
      </li>`});return M`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${dt(r)}>
          ${this.renderHeader}
          <ul class="items">
            ${a}
          </ul>
        </div>
      </div>
    `}};Zn.styles=ob,Zn.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},position:{type:String},options:{type:Array},label:{type:String},returnTo:{type:String},active:{type:[String,Object]},icons:{type:Array},name:{type:String}},Zn=K([X("superviz-dropdown")],Zn);v();v();var dh=B`
#mouse-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

#mouse-sync {
  position: absolute;
}

.mouse-board {
  background: transparent;
  position: absolute;
  top: 0;
  cursor: none !important;
}

.mouse-follower {
  position: absolute;
  display: block;
  transition: all 0.4s;
}

.pointer-mouse {
  display: flex;
  height: 17px;
  width: 17px;
  background-image: url(https://production.cdn.superviz.com/static/pointers/0.svg);
}

.mouse-user-name {
  display: block;
  position: absolute;  
  border-radius: 30px;
  padding: 2px 8px;
  font-weight: 700;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  line-height: 22px;
  margin-left: 10px;
  margin-top: -6px;
  background: yellow;
  white-space: nowrap;
}
`;var Mr=class extends V{constructor(){super();this.updatePresenceMouseParticipant=r=>{if(!this.shadowRoot.getElementById(`mouse-${r.id}`)){let p=this.shadowRoot.getElementById("mouse-sync"),m=document.createElement("div");m.setAttribute("id",`mouse-${r.id}`),m.setAttribute("class","mouse-follower");let _=document.createElement("div");_.setAttribute("class","pointer-mouse");let E=document.createElement("div");E.setAttribute("class","mouse-user-name"),E.innerHTML=r.name,m.appendChild(_),m.appendChild(E),p&&p.appendChild(m)}let a=this.shadowRoot.getElementById(`mouse-${r.id}`);if(!a)return;let c=this.shadowRoot.getElementById(`mouse-${r.id}`),u=this.shadowRoot.getElementById(`mouse-${r.id}`);if(c&&u){let p=c.getElementsByClassName("mouse-user-name")[0],m=u.getElementsByClassName("pointer-mouse")[0];m&&(m.style.backgroundImage=`url(https://production.cdn.superviz.com/static/pointers/${r.slotIndex}.svg)`),p&&(p.style.color=this.textColorValues.includes(r.slotIndex)?"#FFFFFF":"#26242A",p.style.backgroundColor=r.color,p.innerHTML=r.name);let{containerId:_}=r,E=document.getElementById(_),T=r.mousePositionX,N=r.mousePositionY;if(_){let I=(E==null?void 0:E.clientWidth)||1,L=(E==null?void 0:E.clientHeight)||1;T=r.mousePositionX/r.originalWidth*I,N=r.mousePositionY/r.originalHeight*L}a.style.left=`${T}px`,a.style.top=`${N}px`}};this.textColorValues=[2,4,5,7,8,16]}removePresenceMouseParticipant(r){let s=this.shadowRoot.getElementById(`mouse-${r}`);s&&s.remove()}render(){return M`
      <div id="mouse-container" class="mouse-board">
        <div id="mouse-sync"></div>
      </div>
    `}};Mr.styles=[dh],Mr=K([X("superviz-presence-mouse")],Mr);v();v();v();var xo=B`  
  .modal--overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    background: rgba(var(--sv-gray-400), 0.8);
  }

  .modal--container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  .modal--container > .modal {
    background: #fff;
    min-width: 370px;
    min-height: 150px;
    border-radius: 6px;
  }

  .modal--container > .modal > .modal--header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background: rgb(var(--sv-gray-200));
    border-radius: 6px 6px 0 0;
  }

  .modal--container > .modal > .modal--header > .text {
    display: flex;
    align-items: center;
  }

  .modal--container > .modal > .modal--header > .close {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: rgb(var(--sv-gray-600));
    cursor: pointer;
  }

  .modal--container > .modal > .modal--body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 24px 0 24px;
  }

  .modal--container > .modal > .modal--body > .modal--body-content {
    padding: 8px 0;
    text-align: center;
  }

  .modal--container > .modal > .modal--footer {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 24px;
  }

  .btn {
    width: 150px;
    height: 40px;
    text-transform: uppercase;
  }

  .btn--confirm {
    background: rgb(var(--sv-primary));
    border-radius: 4px;
    border: 1px solid rgb(var(--sv-primary));
    color: #fff;
    cursor: pointer;
  }

  .btn--cancel {
    background: transparent;
    border-radius: 4px;
    border: 1px solid rgb(var(--sv-gray-400));
    color: rgb(var(--sv-gray-400));
    cursor: pointer;
  }
`;var fh=et(V),ab=[fh.styles,xo],Lr=class extends fh{constructor(){super(...arguments);this.getContainer=()=>window.document.querySelector("superviz-modal-container");this.createContainer=r=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(r)};this.createModal=({detail:r})=>{this.createContainer(r),window.document.body.appendChild(this.modal)};this.destroyModal=()=>{var r;this.modal=void 0,(r=this.getContainer())==null||r.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};Lr.styles=ab,Lr=K([X("superviz-modal")],Lr);v();var hh=et(V),lb=[hh.styles,xo],Dr=class extends hh{constructor(){super(...arguments);this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))};this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(r){this.options=r}render(){let r=()=>M`
        <div class="modal--header">
          <span class="text text-bold sv-gray-600">${this.options.title}</span>
          <div class="close" @click=${this.closeModal}>
            <superviz-icon name="close" size="md"></superviz-icon>
          </div>
        </div>
      `,s=()=>M`
        <div class="modal--body">
          <div class="modal--body-content">
            ${this.options.body}
          </div>
        </div>
      `,a=()=>{if(this.options.footer)return M`
          <div class="modal--footer">
            ${this.options.footer}
          </div>
        `;let c=this.options.confirmLabel||"OK",u=this.options.cancelLabel||"Cancel";return this.options.confirm&&this.options.cancel?M`
          <div class="modal--footer">
            <button class="text text-bold btn btn--cancel" @click=${this.closeModal}>${u}</button>
            <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${c}</button>
          </div>
        `:M`
        <div class="modal--footer">
          <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${c}</button>
        </div>
      `};return M`
      <div class="modal--overlay"></div>
      <div class="modal--container">
        <div class="modal">
          ${r()}

          ${s()}

          ${a()}
        </div>
      </div>
    `}};Dr.styles=lb,Dr=K([X("superviz-modal-container")],Dr);v();v();v();v();v();var Dl=B`
  .container {
    display: flex;
    flex-direction: column;
    width: 320px;
    position: fixed;
    color: rgb(var(--sv-gray-700));
    background: rgb(var(--sv-white));
    top: 0;
    bottom: 0;
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.1);
    height: 100%;
  }

  .container-close {
    display: none;
  }

  .header {
    width: 100%;
  }

  .content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .toggle {
    display: flex;
    position: fixed;
    width: 100px;
    color: rgb(var(--sv-gray-700));
    background: rgb(var(--sv-white));
    top: 0;
    right: 0;
    bottom: 0;
  }
`;v();var Rl=B`
  div.topbar {
    display: flex;
    justify-content: space-between;
    background-color: rgb(var(--sv-gray-200));
    height: 50px;
  }

  div.topbar span {
    margin: 16px;
    color: rgb(var(--sv-gray-600));
  }

  .toggle-icon {
    cursor: pointer;
    transition: 0.15s;
    border-radius: 50%;
    aspect-ratio: 1;
  }

  .toggle-icon:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;v();var Nl=B`
  .annotations {
    display: flex;
    flex-direction: column;
    background-color: rgb(var(--sv-gray-400));
    min-height: 10px;
    padding: 8px;
  }

  .annotations--add-comment-btn {
    color: rgb(var(--sv-white));
    text-align: center;
    padding: 8px;
  }

  .annotations--comments-input {
    width: 288px;
    padding: 8px;
  }

  .hidden {
    display: none;
  }
`;v();var Fl=B`
  .reply {
    padding-left: 24px !important;
  }

  .comment-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8px;
    gap: 4px;
  }

  .comment-item__user {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    color: rgb(var(--sv-gray-500));
  }

  .comment-item__actions {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .comment-item__actions superviz-dropdown,
  .comment-item__actions button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .comment-item__user-details {
    display: flex;
    width: 100%;
    gap: 8px;
    align-items: center;
  }

  .comment-item__avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgb(var(--sv-gray-300));
    border: 1px solid rgb(var(--sv-gray-500));
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .comment-item__content {
    width: 100%;
  }

  .line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .comment-item__content__body {
    color: rgb(var(--sv-gray-700));
  }

  .hidden {
    display: none;
  }
`;v();var kl=B`
  .comments {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 288px;
  }

  .hidden {
    display: none;
  }
`;v();var Hl=B`
  .comment-input {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: rgb(var(--sv-white));
    border-radius: 4px;
    border: 1px solid rgb(var(--sv-gray-300));
  }

  .comment-input:focus-within {
    border: 1px solid rgb(var(--sv-gray-500));
  }

  .comment-input:focus-within > .sv-hr {
    background: rgb(var(--sv-gray-500))
  }

  #comment-input--textarea {
    all: unset;
    border: 0px;
    border-radius: 4px;
    outline: none;
    height: 13px;
    font-size: 14px;
    color: rgb(var(--sv-gray-700));
    padding: 12px 11px !important;
    font-family: Roboto;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: hidden;
    resize: none;
    appearance: none;
    width: 90%;
  }

  #comment-input--textarea::placeholder {
    color: rgb(var(--sv-gray-400));
    font-size: 14px;
  }

  .comment-input--options {
    display: flex;
    justify-content: space-between;
    padding: 4px 8px;
  }

  .mention {
    display: none;
  }

  .comment-input--send-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(var(--sv-primary));
    border-radius: 100%;
    width: 32px;
    height: 32px;
    color: rgba(var(--sv-white), 1);
    border: 0px;
    cursor: pointer;
  }

  .align-send-btn > superviz-icon {
    margin-right: 2px;
    margin-top: 4px;
  }

  .comment-input--send-btn:disabled {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(var(--sv-gray-200));
    border-radius: 100%;
    width: 32px;
    height: 32px;
    color: rgb(var(--sv-gray-400));
    border: 0px;
  }

  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-300));
    padding: 0px;
    margin: 0px;
  }

  .comment-input-options {
    display: flex;
    gap: 4px;
  }
`;v();var Pl=B`
  .annotation-item--selected {
    background-color: rgba(var(--sv-gray-200), 0.5);
  }

  .annotation-item:hover:not(.annotation-item--selected) {
    background-color: rgba(var(--sv-gray-200), 0.3);
  }

  .avatars-comments {
    display: flex;
    padding: 8px;
  }

  .avatar-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .avatar {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgb(var(--sv-gray-300));
    border: 1px solid rgb(var(--sv-gray-500));
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar:not(:first-child) {
    margin-left: -6px;
  }

  div:last-child {
    margin-left: 8px;
  }

  .comments-container {
    display: flex;
    flex-direction: column;
  }

  .comments--expand {
    display: flex;
  }

  .comment-avatar--expand {
    display: block;
  }

  .hidden {
    display: none;
  }

  .annotation-item {
    padding: 8px;
    cursor: pointer;
  }
`;v();var zl=B`
  .annotation-resolved {
    background: rgba(var(--sv-gray-200), 0.5);
    height: 26px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(var(--sv-gray-200));
  }
`;v();var Ul=B`
  .annotation-pin,
  .annotation-pin__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .annotation-pin {
    position: absolute;

    width: 32px;
    height: 32px;

    background-color: rgb(var(--sv-white));
    border-radius: 50%;
    border-bottom-left-radius: 2px;

    border: 2px solid rgb(var(--sv-white));
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
    transition: border-color 0.2s ease-in-out opacity 0.2s ease-in-out;
    padding: 2px;
    cursor: pointer;
  }

  .annotation-pin:hover,
  .annotation-pin:focus,
  .annotation-pin--active {
    border-color: rgb(var(--sv-primary));
  }

  .annotation-pin__avatar {
    width: 100%;
    height: 100%;

    background-color: rgb(var(--sv-gray-400));
    border-radius: 50%;

    color: rgb(var(--sv-white));
  }

  .annotation-pin__avatar--add {
    font-size: 24px;
    color: rgb(var(--sv-gray-700));
    background-color: rgb(var(--sv-white));
  }

  .annotation-pin__avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;

    object-fit: cover;
  }
`;v();var Wl=B`
  .select {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }

  .select-container {
    text-wrap: nowrap;
    padding: 12px;
    cursor: pointer;
    color: rgb(var(--sv-gray-500));
  }

  .content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 6px;
  }
`;v();var Bl=B`
  button.float-button {
    position: fixed;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    gap: 4px;
    border: none;

    background-color: rgba(var(--sv-white));
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.2);
    color: rgb(var(--sv-gray-600));
    transition: all 300ms;
    cursor: pointer;
    overflow: hidden;
    padding-left: 12px;
  }

  button.float-button p {
    visibility: hidden;
  }

  .hide-button {
    display: none !important;
  }

  button.float-button:hover {
    width: 110px;
    border-radius: 30px;
  }

  button.float-button:hover p {
    visibility: visible;
    animation: expand 300ms ease-in-out;
  }
`;v();var Vl=B`
.footer {
  bottom: 5px;
  position: absolute;
  right: 5px;
  font-family: Roboto,sans-serif;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: normal;
}

.link {
  text-decoration: none;
  color: rgb(var(--sv-gray-500));
}

.powered-by {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 140px;
  &--vertical {
    justify-content: flex-end;
  }
  &--horizontal {
    justify-content: center;
  }
}
`;v();var Gl;function Zl(i){let e=i.querySelector("#superviz-comments");if(e&&!Gl){let r={childList:!0,attributes:!0,characterData:!0,subtree:!0};Gl=new MutationObserver(s=>{s.forEach(a=>{!a.removedNodes.length||a.removedNodes.forEach(c=>{c.id==="poweredby-footer"&&ub(i)})})}),Gl.observe(e,r)}}function ub(i){let e=document.createElement("div");e.id="poweredby-footer",e.className="footer";let r=document.createElement("div");r.className="powered-by powered-by--horizontal";let s=document.createElement("a");s.href="https://superviz.com/",s.target="_blank",s.className="link";let a=document.createElement("div");a.textContent="Powered by";let c=document.createElement("img");c.width=48,c.height=8.86,c.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",r.appendChild(s),s.appendChild(a),a.appendChild(c),e.appendChild(r);let u=i.getElementById("superviz-comments");u&&u.appendChild(e),Zl(i)}var ph=et(V),cb=[ph.styles,Dl,Vl],qn=class extends ph{constructor(){super();this.annotations=[],this.annotationFilter="all",this.waterMarkState=!1}updateAnnotations(r){this.annotations=r}toggle(){this.emitEvent("toggle",{})}waterMarkStatus(r){this.waterMarkState=r}setFilter({detail:r}){let{filter:s}=r;this.annotationFilter=s}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".superviz-comments");!s||(this.waterMarkState&&Zl(this.shadowRoot),s.setAttribute("style",this.side))})}render(){let r=[this.open?"container":"container-close","superviz-comments"].join(" "),s=M` <div id="poweredby-footer" class="footer">
      <div class="powered-by powered-by--horizontal">
        <a href="https://superviz.com/" target="_blank" class="link">
          <div class="">
            Powered by
            <img
              width="48px"
              height="8.86px"
              src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg"
            />
          </div>
        </a>
      </div>
    </div>`,a=this.waterMarkState?s:"";return M`
      <div id="superviz-comments" class=${r}>
        <div class="header">
          <superviz-comments-topbar @close=${this.toggle}></superviz-comments-topbar>
          <superviz-comments-annotations id="annotations" open=${this.open}>
          </superviz-comments-annotations>
        </div>
        <superviz-comments-annotation-filter
          filter=${this.annotationFilter}
          @select=${this.setFilter}
        >
        </superviz-comments-annotation-filter>
        <superviz-comments-content
          annotations=${JSON.stringify(this.annotations)}
          annotationFilter=${this.annotationFilter}
          class="content"
        ></superviz-comments-content>
        ${a}
      </div>
    `}};qn.styles=cb,qn.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String}},qn=K([X("superviz-comments")],qn);v();v();var db=et(V),fb=[db.styles,Rl],Yn=class extends et(V){constructor(){super();this.side="left"}close(){this.dispatchEvent(new CustomEvent("close"))}render(){return this.side==="left"?M`
        <div class="topbar">
          <span @click=${this.close} class="toggle-icon">
            <superviz-icon name="left" size="lg"></superviz-icon>
          </span>
          <span class="text text-bold">COMMENTS</span>
        </div>
      `:M`
      <div class="topbar">
        <span class="text text-bold">COMMENTS</span>
        <span @click=${this.close} class="toggle-icon">
          <superviz-icon name="right" size="lg"></superviz-icon>
        </span>
      </div>
    `}};Yn.styles=fb,Yn.properties={side:{type:String}},Yn=K([X("superviz-comments-topbar")],Yn);v();var mh=et(V),hb=[mh.styles,Nl],Jn=class extends mh{constructor(){super(...arguments);this.prepareToCreateAnnotation=s=>On(this,[s],function*({detail:r}){this.annotation=r,yield this.updateComplete,this.emitEvent("comment-input-focus",r)});this.cancelTemporaryAnnotation=()=>{this.annotation=null};this.cancelTemporaryAnnotationEsc=r=>{(r==null?void 0:r.key)==="Escape"&&(this.annotation=null)}}createComment({detail:r}){this.emitEvent("create-annotation",r),this.annotation=null}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.addEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.addEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)})}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.removeEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.removeEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)})}render(){let r={"annotations--comments-input":!0,hidden:!this.annotation};return M`
      <div class="annotations">
        <span class="text text-big text-bold annotations--add-comment-btn">
          Click anywhere to add a comment
        </span>
        <div class=${dt(r)}>
          <superviz-comments-comment-input
            @create-annotation=${this.createComment}
            eventType="create-annotation"
          >
          </superviz-comments-comment-input>
        </div>
      </div>
    `}};Jn.styles=hb,Jn.properties={annotation:{type:Object}},Jn=K([X("superviz-comments-annotations")],Jn);v();v();v();v();var{D:pb}=Nf;var gh=()=>document.createComment(""),Rr=(i,e,r)=>{var c;let s=i._$AA.parentNode,a=e===void 0?i._$AB:e._$AA;if(r===void 0){let u=s.insertBefore(gh(),a),p=s.insertBefore(gh(),a);r=new pb(u,p,i,i.options)}else{let u=r._$AB.nextSibling,p=r._$AM,m=p!==i;if(m){let _;(c=r._$AQ)==null||c.call(r,i),r._$AM=i,r._$AP!==void 0&&(_=i._$AU)!==p._$AU&&r._$AP(_)}if(u!==a||m){let _=r._$AA;for(;_!==u;){let E=_.nextSibling;s.insertBefore(_,a),_=E}}}return r},cn=(i,e,r=i)=>(i._$AI(e,r),i),mb={},vh=(i,e=mb)=>i._$AH=e,yh=i=>i._$AH,wo=i=>{var s;(s=i._$AP)==null||s.call(i,!1,!0);let e=i._$AA,r=i._$AB.nextSibling;for(;e!==r;){let a=e.nextSibling;e.remove(),e=a}};var xh=(i,e,r)=>{let s=new Map;for(let a=e;a<=r;a++)s.set(i[a],a);return s},_h=yo(class extends Ir{constructor(i){if(super(i),i.type!==vo.CHILD)throw Error("repeat() can only be used in text expressions")}ht(i,e,r){let s;r===void 0?r=e:e!==void 0&&(s=e);let a=[],c=[],u=0;for(let p of i)a[u]=s?s(p,u):u,c[u]=r(p,u),u++;return{values:c,keys:a}}render(i,e,r){return this.ht(i,e,r).values}update(i,[e,r,s]){var St;let a=yh(i),{values:c,keys:u}=this.ht(e,r,s);if(!Array.isArray(a))return this.dt=u,c;let p=(St=this.dt)!=null?St:this.dt=[],m=[],_,E,T=0,N=a.length-1,I=0,L=c.length-1;for(;T<=N&&I<=L;)if(a[T]===null)T++;else if(a[N]===null)N--;else if(p[T]===u[I])m[I]=cn(a[T],c[I]),T++,I++;else if(p[N]===u[L])m[L]=cn(a[N],c[L]),N--,L--;else if(p[T]===u[L])m[L]=cn(a[T],c[L]),Rr(i,m[L+1],a[T]),T++,L--;else if(p[N]===u[I])m[I]=cn(a[N],c[I]),Rr(i,a[T],a[N]),N--,I++;else if(_===void 0&&(_=xh(u,I,L),E=xh(p,T,N)),_.has(p[T]))if(_.has(p[N])){let mt=E.get(u[I]),Tt=mt!==void 0?a[mt]:null;if(Tt===null){let fe=Rr(i,a[T]);cn(fe,c[I]),m[I]=fe}else m[I]=cn(Tt,c[I]),Rr(i,a[T],Tt),a[mt]=null;I++}else wo(a[N]),N--;else wo(a[T]),T++;for(;I<=L;){let mt=Rr(i,m[L+1]);cn(mt,c[I]),m[I++]=mt}for(;T<=N;){let mt=a[T++];mt!==null&&wo(mt)}return this.dt=u,vh(i,m),We}});var wh=et(V),gb=[wh.styles,kl],Kn=class extends wh{constructor(){super();this.unselectAnnotation=()=>{this.selectedAnnotation=null};this.unselectAnnotationEsc=r=>{r&&(r==null?void 0:r.key)!=="Escape"||(this.selectedAnnotation=null)};this.selectAnnotation=({detail:r})=>{let{uuid:s}=r;if(this.selectedAnnotation===s){this.selectedAnnotation=null;return}this.selectedAnnotation=s};this.checkLastAnnotation=r=>{var c,u;let s=this.annotations.filter(p=>p.resolved),a=this.annotations.filter(p=>!p.resolved);return this.annotationFilter==="all"?r===((c=s[s.length-1])==null?void 0:c.uuid):r===((u=a[a.length-1])==null?void 0:u.uuid)};this.annotations=[]}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(`[uuid='${this.selectedAnnotation}']`);if(!s)return;let a=this.lastCommentId===this.selectedAnnotation,c=a?0:-150,u=s.getClientRects()[0];!u||(this.scrollBy(0,u.y+c),a&&setTimeout(()=>{this.scrollBy(0,u.y+c)},200))})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("select-annotation",this.selectAnnotation),window.document.body.addEventListener("keyup",this.unselectAnnotationEsc),window.document.body.addEventListener("unselect-annotation",this.unselectAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("select-annotation",this.selectAnnotation),window.document.body.removeEventListener("keyup",this.unselectAnnotationEsc),window.document.body.removeEventListener("unselect-annotation",this.unselectAnnotation)}render(){return M` ${_h(this.annotations.filter(r=>r.comments.length),r=>r.uuid,r=>M`
        <superviz-comments-annotation-item
          annotation=${JSON.stringify(r)}
          selected="${this.selectedAnnotation}"
          annotationFilter=${this.annotationFilter}
          uuid=${r.uuid}
          isLastComment=${this.checkLastAnnotation(r.uuid)}
        >
        </superviz-comments-annotation-item>
      `)}`}};Kn.styles=gb,Kn.properties={annotations:{type:Object},selectedAnnotation:{type:String},annotationFilter:{type:String}},Kn=K([X("superviz-comments-content")],Kn);v();v();v();v();v();var Ve=class extends Error{},bo=class extends Ve{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},Eo=class extends Ve{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},So=class extends Ve{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},Ge=class extends Ve{},Nr=class extends Ve{constructor(e){super(`Invalid unit ${e}`)}},Dt=class extends Ve{},_e=class extends Ve{constructor(){super("Zone is an abstract class")}};v();v();v();var R="numeric",we="short",te="long",dn={year:R,month:R,day:R},Oi={year:R,month:we,day:R},ql={year:R,month:we,day:R,weekday:we},Ii={year:R,month:te,day:R},Mi={year:R,month:te,day:R,weekday:te},Li={hour:R,minute:R},Di={hour:R,minute:R,second:R},Ri={hour:R,minute:R,second:R,timeZoneName:we},Ni={hour:R,minute:R,second:R,timeZoneName:te},Fi={hour:R,minute:R,hourCycle:"h23"},ki={hour:R,minute:R,second:R,hourCycle:"h23"},Hi={hour:R,minute:R,second:R,hourCycle:"h23",timeZoneName:we},Pi={hour:R,minute:R,second:R,hourCycle:"h23",timeZoneName:te},zi={year:R,month:R,day:R,hour:R,minute:R},Ui={year:R,month:R,day:R,hour:R,minute:R,second:R},Wi={year:R,month:we,day:R,hour:R,minute:R},Bi={year:R,month:we,day:R,hour:R,minute:R,second:R},Yl={year:R,month:we,day:R,weekday:we,hour:R,minute:R},Vi={year:R,month:te,day:R,hour:R,minute:R,timeZoneName:we},Gi={year:R,month:te,day:R,hour:R,minute:R,second:R,timeZoneName:we},Zi={year:R,month:te,day:R,weekday:te,hour:R,minute:R,timeZoneName:te},qi={year:R,month:te,day:R,weekday:te,hour:R,minute:R,second:R,timeZoneName:te};v();v();v();v();var Zt=class{get type(){throw new _e}get name(){throw new _e}get ianaName(){return this.name}get isUniversal(){throw new _e}offsetName(e,r){throw new _e}formatOffset(e,r){throw new _e}offset(e){throw new _e}equals(e){throw new _e}get isValid(){throw new _e}};var Jl=null,Ce=class extends Zt{static get instance(){return Jl===null&&(Jl=new Ce),Jl}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:s}){return Ao(e,r,s)}formatOffset(e,r){return fn(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}};v();var Co={};function vb(i){return Co[i]||(Co[i]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:i,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Co[i]}var yb={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function xb(i,e){let r=i.format(e).replace(/\u200E/g,""),s=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,a,c,u,p,m,_,E]=s;return[u,a,c,p,m,_,E]}function _b(i,e){let r=i.formatToParts(e),s=[];for(let a=0;a<r.length;a++){let{type:c,value:u}=r[a],p=yb[c];c==="era"?s[p]=u:Y(p)||(s[p]=parseInt(u,10))}return s}var $o={},Ct=class extends Zt{static create(e){return $o[e]||($o[e]=new Ct(e)),$o[e]}static resetCache(){$o={},Co={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(r){return!1}}constructor(e){super(),this.zoneName=e,this.valid=Ct.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:s}){return Ao(e,r,s,this.name)}formatOffset(e,r){return fn(this.offset(e),r)}offset(e){let r=new Date(e);if(isNaN(r))return NaN;let s=vb(this.name),[a,c,u,p,m,_,E]=s.formatToParts?_b(s,r):xb(s,r);p==="BC"&&(a=-Math.abs(a)+1);let N=Fr({year:a,month:c,day:u,hour:m===24?0:m,minute:_,second:E,millisecond:0}),I=+r,L=I%1e3;return I-=L>=0?L:1e3+L,(N-I)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}};v();var bh={};function wb(i,e={}){let r=JSON.stringify([i,e]),s=bh[r];return s||(s=new Intl.ListFormat(i,e),bh[r]=s),s}var Kl={};function Xl(i,e={}){let r=JSON.stringify([i,e]),s=Kl[r];return s||(s=new Intl.DateTimeFormat(i,e),Kl[r]=s),s}var jl={};function bb(i,e={}){let r=JSON.stringify([i,e]),s=jl[r];return s||(s=new Intl.NumberFormat(i,e),jl[r]=s),s}var Ql={};function Eb(i,e={}){let u=e,{base:r}=u,s=al(u,["base"]),a=JSON.stringify([i,s]),c=Ql[a];return c||(c=new Intl.RelativeTimeFormat(i,e),Ql[a]=c),c}var Yi=null;function Sb(){return Yi||(Yi=new Intl.DateTimeFormat().resolvedOptions().locale,Yi)}function Tb(i){let e=i.indexOf("-x-");e!==-1&&(i=i.substring(0,e));let r=i.indexOf("-u-");if(r===-1)return[i];{let s,a;try{s=Xl(i).resolvedOptions(),a=i}catch(p){let m=i.substring(0,r);s=Xl(m).resolvedOptions(),a=m}let{numberingSystem:c,calendar:u}=s;return[a,c,u]}}function Ab(i,e,r){return(r||e)&&(i.includes("-u-")||(i+="-u"),r&&(i+=`-ca-${r}`),e&&(i+=`-nu-${e}`)),i}function $b(i){let e=[];for(let r=1;r<=12;r++){let s=P.utc(2009,r,1);e.push(i(s))}return e}function Cb(i){let e=[];for(let r=1;r<=7;r++){let s=P.utc(2016,11,13+r);e.push(i(s))}return e}function Oo(i,e,r,s){let a=i.listingMode();return a==="error"?null:a==="en"?r(e):s(e)}function Ob(i){return i.numberingSystem&&i.numberingSystem!=="latn"?!1:i.numberingSystem==="latn"||!i.locale||i.locale.startsWith("en")||new Intl.DateTimeFormat(i.intl).resolvedOptions().numberingSystem==="latn"}var tu=class{constructor(e,r,s){this.padTo=s.padTo||0,this.floor=s.floor||!1;let p=s,{padTo:a,floor:c}=p,u=al(p,["padTo","floor"]);if(!r||Object.keys(u).length>0){let m=H({useGrouping:!1},s);s.padTo>0&&(m.minimumIntegerDigits=s.padTo),this.inf=bb(e,m)}}format(e){if(this.inf){let r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{let r=this.floor?Math.floor(e):kr(e,3);return yt(r,this.padTo)}}},eu=class{constructor(e,r,s){this.opts=s,this.originalZone=void 0;let a;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){let u=-1*(e.offset/60),p=u>=0?`Etc/GMT+${u}`:`Etc/GMT${u}`;e.offset!==0&&Ct.create(p).valid?(a=p,this.dt=e):(a="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,a=e.zone.name):(a="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);let c=H({},this.opts);c.timeZone=c.timeZone||a,this.dtf=Xl(r,c)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){let s=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return Ht(H({},r),{value:s})}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},nu=class{constructor(e,r,s){this.opts=H({style:"long"},s),!r&&Io()&&(this.rtf=Eb(e,s))}format(e,r){return this.rtf?this.rtf.format(e,r):Eh(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}},it=class{static fromOpts(e){return it.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,r,s,a=!1){let c=e||lt.defaultLocale,u=c||(a?"en-US":Sb()),p=r||lt.defaultNumberingSystem,m=s||lt.defaultOutputCalendar;return new it(u,p,m,c)}static resetCache(){Yi=null,Kl={},jl={},Ql={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:s}={}){return it.create(e,r,s)}constructor(e,r,s,a){let[c,u,p]=Tb(e);this.locale=c,this.numberingSystem=r||u||null,this.outputCalendar=s||p||null,this.intl=Ab(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Ob(this)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:it.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone(Ht(H({},e),{defaultToEN:!0}))}redefaultToSystem(e={}){return this.clone(Ht(H({},e),{defaultToEN:!1}))}months(e,r=!1){return Oo(this,e,ru,()=>{let s=r?{month:e,day:"numeric"}:{month:e},a=r?"format":"standalone";return this.monthsCache[a][e]||(this.monthsCache[a][e]=$b(c=>this.extract(c,s,"month"))),this.monthsCache[a][e]})}weekdays(e,r=!1){return Oo(this,e,iu,()=>{let s=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},a=r?"format":"standalone";return this.weekdaysCache[a][e]||(this.weekdaysCache[a][e]=Cb(c=>this.extract(c,s,"weekday"))),this.weekdaysCache[a][e]})}meridiems(){return Oo(this,void 0,()=>su,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[P.utc(2016,11,13,9),P.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Oo(this,e,ou,()=>{let r={era:e};return this.eraCache[e]||(this.eraCache[e]=[P.utc(-40,1,1),P.utc(2017,1,1)].map(s=>this.extract(s,r,"era"))),this.eraCache[e]})}extract(e,r,s){let a=this.dtFormatter(e,r),c=a.formatToParts(),u=c.find(p=>p.type.toLowerCase()===s);return u?u.value:null}numberFormatter(e={}){return new tu(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new eu(e,this.intl,r)}relFormatter(e={}){return new nu(this.intl,this.isEnglish(),e)}listFormatter(e={}){return wb(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}};v();v();var lu=null,xt=class extends Zt{static get utcInstance(){return lu===null&&(lu=new xt(0)),lu}static instance(e){return e===0?xt.utcInstance:new xt(e)}static parseSpecifier(e){if(e){let r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new xt(Xn(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${fn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${fn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return fn(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}};v();var Hr=class extends Zt{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function be(i,e){let r;if(Y(i)||i===null)return e;if(i instanceof Zt)return i;if(Sh(i)){let s=i.toLowerCase();return s==="default"?e:s==="local"||s==="system"?Ce.instance:s==="utc"||s==="gmt"?xt.utcInstance:xt.parseSpecifier(s)||Ct.create(i)}else return Oe(i)?xt.instance(i):typeof i=="object"&&"offset"in i&&typeof i.offset=="function"?i:new Hr(i)}var Th=()=>Date.now(),Ah="system",$h=null,Ch=null,Oh=null,Ih=60,Mh,lt=class{static get now(){return Th}static set now(e){Th=e}static set defaultZone(e){Ah=e}static get defaultZone(){return be(Ah,Ce.instance)}static get defaultLocale(){return $h}static set defaultLocale(e){$h=e}static get defaultNumberingSystem(){return Ch}static set defaultNumberingSystem(e){Ch=e}static get defaultOutputCalendar(){return Oh}static set defaultOutputCalendar(e){Oh=e}static get twoDigitCutoffYear(){return Ih}static set twoDigitCutoffYear(e){Ih=e%100}static get throwOnInvalid(){return Mh}static set throwOnInvalid(e){Mh=e}static resetCaches(){it.resetCache(),Ct.resetCache()}};function Y(i){return typeof i=="undefined"}function Oe(i){return typeof i=="number"}function Ji(i){return typeof i=="number"&&i%1===0}function Sh(i){return typeof i=="string"}function Lh(i){return Object.prototype.toString.call(i)==="[object Date]"}function Io(){try{return typeof Intl!="undefined"&&!!Intl.RelativeTimeFormat}catch(i){return!1}}function Dh(i){return Array.isArray(i)?i:[i]}function uu(i,e,r){if(i.length!==0)return i.reduce((s,a)=>{let c=[e(a),a];return s&&r(s[0],c[0])===s[0]?s:c},null)[1]}function Rh(i,e){return e.reduce((r,s)=>(r[s]=i[s],r),{})}function hn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Ie(i,e,r){return Ji(i)&&i>=e&&i<=r}function Ib(i,e){return i-e*Math.floor(i/e)}function yt(i,e=2){let r=i<0,s;return r?s="-"+(""+-i).padStart(e,"0"):s=(""+i).padStart(e,"0"),s}function Ze(i){if(!(Y(i)||i===null||i===""))return parseInt(i,10)}function pn(i){if(!(Y(i)||i===null||i===""))return parseFloat(i)}function Ki(i){if(!(Y(i)||i===null||i==="")){let e=parseFloat("0."+i)*1e3;return Math.floor(e)}}function kr(i,e,r=!1){let s=hf(10,e);return(r?Math.trunc:Math.round)(i*s)/s}function jn(i){return i%4===0&&(i%100!==0||i%400===0)}function Qn(i){return jn(i)?366:365}function Pr(i,e){let r=Ib(e-1,12)+1,s=i+(e-r)/12;return r===2?jn(s)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Fr(i){let e=Date.UTC(i.year,i.month-1,i.day,i.hour,i.minute,i.second,i.millisecond);return i.year<100&&i.year>=0&&(e=new Date(e),e.setUTCFullYear(i.year,i.month-1,i.day)),+e}function zr(i){let e=(i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400))%7,r=i-1,s=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7;return e===4||s===3?53:52}function Xi(i){return i>99?i:i>lt.twoDigitCutoffYear?1900+i:2e3+i}function Ao(i,e,r,s=null){let a=new Date(i),c={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};s&&(c.timeZone=s);let u=H({timeZoneName:e},c),p=new Intl.DateTimeFormat(r,u).formatToParts(a).find(m=>m.type.toLowerCase()==="timezonename");return p?p.value:null}function Xn(i,e){let r=parseInt(i,10);Number.isNaN(r)&&(r=0);let s=parseInt(e,10)||0,a=r<0||Object.is(r,-0)?-s:s;return r*60+a}function cu(i){let e=Number(i);if(typeof i=="boolean"||i===""||Number.isNaN(e))throw new Dt(`Invalid unit value ${i}`);return e}function Ur(i,e){let r={};for(let s in i)if(hn(i,s)){let a=i[s];if(a==null)continue;r[e(s)]=cu(a)}return r}function fn(i,e){let r=Math.trunc(Math.abs(i/60)),s=Math.trunc(Math.abs(i%60)),a=i>=0?"+":"-";switch(e){case"short":return`${a}${yt(r,2)}:${yt(s,2)}`;case"narrow":return`${a}${r}${s>0?`:${s}`:""}`;case"techie":return`${a}${yt(r,2)}${yt(s,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function ji(i){return Rh(i,["hour","minute","second","millisecond"])}var Mb=["January","February","March","April","May","June","July","August","September","October","November","December"],du=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Lb=["J","F","M","A","M","J","J","A","S","O","N","D"];function ru(i){switch(i){case"narrow":return[...Lb];case"short":return[...du];case"long":return[...Mb];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var fu=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],hu=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Db=["M","T","W","T","F","S","S"];function iu(i){switch(i){case"narrow":return[...Db];case"short":return[...hu];case"long":return[...fu];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var su=["AM","PM"],Rb=["Before Christ","Anno Domini"],Nb=["BC","AD"],Fb=["B","A"];function ou(i){switch(i){case"narrow":return[...Fb];case"short":return[...Nb];case"long":return[...Rb];default:return null}}function Nh(i){return su[i.hour<12?0:1]}function Fh(i,e){return iu(e)[i.weekday-1]}function kh(i,e){return ru(e)[i.month-1]}function Hh(i,e){return ou(e)[i.year<0?0:1]}function Eh(i,e,r="always",s=!1){let a={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},c=["hours","minutes","seconds"].indexOf(i)===-1;if(r==="auto"&&c){let T=i==="days";switch(e){case 1:return T?"tomorrow":`next ${a[i][0]}`;case-1:return T?"yesterday":`last ${a[i][0]}`;case 0:return T?"today":`this ${a[i][0]}`;default:}}let u=Object.is(e,-0)||e<0,p=Math.abs(e),m=p===1,_=a[i],E=s?m?_[1]:_[2]||_[1]:m?a[i][0]:i;return u?`${p} ${E} ago`:`in ${p} ${E}`}function Ph(i,e){let r="";for(let s of i)s.literal?r+=s.val:r+=e(s.val);return r}var kb={D:dn,DD:Oi,DDD:Ii,DDDD:Mi,t:Li,tt:Di,ttt:Ri,tttt:Ni,T:Fi,TT:ki,TTT:Hi,TTTT:Pi,f:zi,ff:Wi,fff:Vi,ffff:Zi,F:Ui,FF:Bi,FFF:Gi,FFFF:qi},_t=class{static create(e,r={}){return new _t(e,r)}static parseFormat(e){let r=null,s="",a=!1,c=[];for(let u=0;u<e.length;u++){let p=e.charAt(u);p==="'"?(s.length>0&&c.push({literal:a||/^\s+$/.test(s),val:s}),r=null,s="",a=!a):a||p===r?s+=p:(s.length>0&&c.push({literal:/^\s+$/.test(s),val:s}),s=p,r=p)}return s.length>0&&c.push({literal:a||/^\s+$/.test(s),val:s}),c}static macroTokenToFormatOpts(e){return kb[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,H(H({},this.opts),r)).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,H(H({},this.opts),r))}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return yt(e,r);let s=H({},this.opts);return r>0&&(s.padTo=r),this.loc.numberFormatter(s).format(e)}formatDateTimeFromString(e,r){let s=this.loc.listingMode()==="en",a=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",c=(I,L)=>this.loc.extract(e,I,L),u=I=>e.isOffsetFixed&&e.offset===0&&I.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,I.format):"",p=()=>s?Nh(e):c({hour:"numeric",hourCycle:"h12"},"dayperiod"),m=(I,L)=>s?kh(e,I):c(L?{month:I}:{month:I,day:"numeric"},"month"),_=(I,L)=>s?Fh(e,I):c(L?{weekday:I}:{weekday:I,month:"long",day:"numeric"},"weekday"),E=I=>{let L=_t.macroTokenToFormatOpts(I);return L?this.formatWithSystemDefault(e,L):I},T=I=>s?Hh(e,I):c({era:I},"era"),N=I=>{switch(I){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return u({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return u({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return u({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return p();case"d":return a?c({day:"numeric"},"day"):this.num(e.day);case"dd":return a?c({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return _("short",!0);case"cccc":return _("long",!0);case"ccccc":return _("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return _("short",!1);case"EEEE":return _("long",!1);case"EEEEE":return _("narrow",!1);case"L":return a?c({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return a?c({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return m("short",!0);case"LLLL":return m("long",!0);case"LLLLL":return m("narrow",!0);case"M":return a?c({month:"numeric"},"month"):this.num(e.month);case"MM":return a?c({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return m("short",!1);case"MMMM":return m("long",!1);case"MMMMM":return m("narrow",!1);case"y":return a?c({year:"numeric"},"year"):this.num(e.year);case"yy":return a?c({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return a?c({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return a?c({year:"numeric"},"year"):this.num(e.year,6);case"G":return T("short");case"GG":return T("long");case"GGGGG":return T("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return E(I)}};return Ph(_t.parseFormat(r),N)}formatDurationFromString(e,r){let s=m=>{switch(m[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},a=m=>_=>{let E=s(_);return E?this.num(m.get(E),_.length):_},c=_t.parseFormat(r),u=c.reduce((m,{literal:_,val:E})=>_?m:m.concat(E),[]),p=e.shiftTo(...u.map(s).filter(m=>m));return Ph(c,a(p))}};v();var Rt=class{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}};v();var Uh=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Br(...i){let e=i.reduce((r,s)=>r+s.source,"");return RegExp(`^${e}$`)}function Vr(...i){return e=>i.reduce(([r,s,a],c)=>{let[u,p,m]=c(e,a);return[H(H({},r),u),p||s,m]},[{},null,1]).slice(0,2)}function Gr(i,...e){if(i==null)return[null,null];for(let[r,s]of e){let a=r.exec(i);if(a)return s(a)}return[null,null]}function Wh(...i){return(e,r)=>{let s={},a;for(a=0;a<i.length;a++)s[i[a]]=Ze(e[r+a]);return[s,null,r+a]}}var Bh=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Hb=`(?:${Bh.source}?(?:\\[(${Uh.source})\\])?)?`,pu=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Vh=RegExp(`${pu.source}${Hb}`),mu=RegExp(`(?:T${Vh.source})?`),Pb=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,zb=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Ub=/(\d{4})-?(\d{3})/,Wb=Wh("weekYear","weekNumber","weekDay"),Bb=Wh("year","ordinal"),Vb=/(\d{4})-(\d\d)-(\d\d)/,Gh=RegExp(`${pu.source} ?(?:${Bh.source}|(${Uh.source}))?`),Gb=RegExp(`(?: ${Gh.source})?`);function Wr(i,e,r){let s=i[e];return Y(s)?r:Ze(s)}function Zb(i,e){return[{year:Wr(i,e),month:Wr(i,e+1,1),day:Wr(i,e+2,1)},null,e+3]}function Zr(i,e){return[{hours:Wr(i,e,0),minutes:Wr(i,e+1,0),seconds:Wr(i,e+2,0),milliseconds:Ki(i[e+3])},null,e+4]}function Qi(i,e){let r=!i[e]&&!i[e+1],s=Xn(i[e+1],i[e+2]),a=r?null:xt.instance(s);return[{},a,e+3]}function ts(i,e){let r=i[e]?Ct.create(i[e]):null;return[{},r,e+1]}var qb=RegExp(`^T?${pu.source}$`),Yb=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Jb(i){let[e,r,s,a,c,u,p,m,_]=i,E=e[0]==="-",T=m&&m[0]==="-",N=(I,L=!1)=>I!==void 0&&(L||I&&E)?-I:I;return[{years:N(pn(r)),months:N(pn(s)),weeks:N(pn(a)),days:N(pn(c)),hours:N(pn(u)),minutes:N(pn(p)),seconds:N(pn(m),m==="-0"),milliseconds:N(Ki(_),T)}]}var Kb={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function gu(i,e,r,s,a,c,u){let p={year:e.length===2?Xi(Ze(e)):Ze(e),month:du.indexOf(r)+1,day:Ze(s),hour:Ze(a),minute:Ze(c)};return u&&(p.second=Ze(u)),i&&(p.weekday=i.length>3?fu.indexOf(i)+1:hu.indexOf(i)+1),p}var Xb=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function jb(i){let[,e,r,s,a,c,u,p,m,_,E,T]=i,N=gu(e,a,s,r,c,u,p),I;return m?I=Kb[m]:_?I=0:I=Xn(E,T),[N,new xt(I)]}function Qb(i){return i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var tE=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,eE=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,nE=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function zh(i){let[,e,r,s,a,c,u,p]=i;return[gu(e,a,s,r,c,u,p),xt.utcInstance]}function rE(i){let[,e,r,s,a,c,u,p]=i;return[gu(e,p,r,s,a,c,u),xt.utcInstance]}var iE=Br(Pb,mu),sE=Br(zb,mu),oE=Br(Ub,mu),aE=Br(Vh),Zh=Vr(Zb,Zr,Qi,ts),lE=Vr(Wb,Zr,Qi,ts),uE=Vr(Bb,Zr,Qi,ts),cE=Vr(Zr,Qi,ts);function qh(i){return Gr(i,[iE,Zh],[sE,lE],[oE,uE],[aE,cE])}function Yh(i){return Gr(Qb(i),[Xb,jb])}function Jh(i){return Gr(i,[tE,zh],[eE,zh],[nE,rE])}function Kh(i){return Gr(i,[Yb,Jb])}var dE=Vr(Zr);function Xh(i){return Gr(i,[qb,dE])}var fE=Br(Vb,Gb),hE=Br(Gh),pE=Vr(Zr,Qi,ts);function jh(i){return Gr(i,[fE,Zh],[hE,pE])}var Qh="Invalid Duration",ep={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},mE=H({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},ep),ue=146097/400,qr=146097/4800,gE=H({years:{quarters:4,months:12,weeks:ue/7,days:ue,hours:ue*24,minutes:ue*24*60,seconds:ue*24*60*60,milliseconds:ue*24*60*60*1e3},quarters:{months:3,weeks:ue/28,days:ue/4,hours:ue*24/4,minutes:ue*24*60/4,seconds:ue*24*60*60/4,milliseconds:ue*24*60*60*1e3/4},months:{weeks:qr/7,days:qr,hours:qr*24,minutes:qr*24*60,seconds:qr*24*60*60,milliseconds:qr*24*60*60*1e3}},ep),tr=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],vE=tr.slice(0).reverse();function mn(i,e,r=!1){let s={values:r?e.values:H(H({},i.values),e.values||{}),loc:i.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||i.conversionAccuracy,matrix:e.matrix||i.matrix};return new j(s)}function np(i,e){var s;let r=(s=e.milliseconds)!=null?s:0;for(let a of vE.slice(1))e[a]&&(r+=e[a]*i[a].milliseconds);return r}function tp(i,e){let r=np(i,e)<0?-1:1;tr.reduceRight((s,a)=>{if(Y(e[a]))return s;if(s){let c=e[s]*r,u=i[a][s],p=Math.floor(c/u);e[a]+=p*r,e[s]-=p*u*r}return a},null),tr.reduce((s,a)=>{if(Y(e[a]))return s;if(s){let c=e[s]%1;e[s]-=c,e[a]+=c*i[s][a]}return a},null)}function yE(i){let e={};for(let[r,s]of Object.entries(i))s!==0&&(e[r]=s);return e}var j=class{constructor(e){let r=e.conversionAccuracy==="longterm"||!1,s=r?gE:mE;e.matrix&&(s=e.matrix),this.values=e.values,this.loc=e.loc||it.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=s,this.isLuxonDuration=!0}static fromMillis(e,r){return j.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new Dt(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new j({values:Ur(e,j.normalizeUnit),loc:it.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if(Oe(e))return j.fromMillis(e);if(j.isDuration(e))return e;if(typeof e=="object")return j.fromObject(e);throw new Dt(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){let[s]=Kh(e);return s?j.fromObject(s,r):j.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){let[s]=Xh(e);return s?j.fromObject(s,r):j.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new Dt("need to specify a reason the Duration is invalid");let s=e instanceof Rt?e:new Rt(e,r);if(lt.throwOnInvalid)throw new So(s);return new j({invalid:s})}static normalizeUnit(e){let r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new Nr(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){let s=Ht(H({},r),{floor:r.round!==!1&&r.floor!==!1});return this.isValid?_t.create(this.loc,s).formatDurationFromString(this,e):Qh}toHuman(e={}){if(!this.isValid)return Qh;let r=tr.map(s=>{let a=this.values[s];return Y(a)?null:this.loc.numberFormatter(Ht(H({style:"unit",unitDisplay:"long"},e),{unit:s.slice(0,-1)})).format(a)}).filter(s=>s);return this.loc.listFormatter(H({type:"conjunction",style:e.listStyle||"narrow"},e)).format(r)}toObject(){return this.isValid?H({},this.values):{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=kr(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let r=this.toMillis();return r<0||r>=864e5?null:(e=Ht(H({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e),{includeOffset:!1}),P.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?np(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let r=j.fromDurationLike(e),s={};for(let a of tr)(hn(r.values,a)||hn(this.values,a))&&(s[a]=r.get(a)+this.get(a));return mn(this,{values:s},!0)}minus(e){if(!this.isValid)return this;let r=j.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;let r={};for(let s of Object.keys(this.values))r[s]=cu(e(this.values[s],s));return mn(this,{values:r},!0)}get(e){return this[j.normalizeUnit(e)]}set(e){if(!this.isValid)return this;let r=H(H({},this.values),Ur(e,j.normalizeUnit));return mn(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:s,matrix:a}={}){let u={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:a,conversionAccuracy:s};return mn(this,u)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return tp(this.matrix,e),mn(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=yE(this.normalize().shiftToAll().toObject());return mn(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(u=>j.normalizeUnit(u));let r={},s={},a=this.toObject(),c;for(let u of tr)if(e.indexOf(u)>=0){c=u;let p=0;for(let _ in s)p+=this.matrix[_][u]*s[_],s[_]=0;Oe(a[u])&&(p+=a[u]);let m=Math.trunc(p);r[u]=m,s[u]=(p*1e3-m*1e3)/1e3}else Oe(a[u])&&(s[u]=a[u]);for(let u in s)s[u]!==0&&(r[c]+=u===c?s[u]:s[u]/this.matrix[c][u]);return tp(this.matrix,r),mn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return mn(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(s,a){return s===void 0||s===0?a===void 0||a===0:s===a}for(let s of tr)if(!r(this.values[s],e.values[s]))return!1;return!0}};v();var Yr="Invalid Interval";function xE(i,e){return!i||!i.isValid?ft.invalid("missing or invalid start"):!e||!e.isValid?ft.invalid("missing or invalid end"):e<i?ft.invalid("end before start",`The end of an interval must be after its start, but you had start=${i.toISO()} and end=${e.toISO()}`):null}var ft=class{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new Dt("need to specify a reason the Interval is invalid");let s=e instanceof Rt?e:new Rt(e,r);if(lt.throwOnInvalid)throw new Eo(s);return new ft({invalid:s})}static fromDateTimes(e,r){let s=Jr(e),a=Jr(r),c=xE(s,a);return c==null?new ft({start:s,end:a}):c}static after(e,r){let s=j.fromDurationLike(r),a=Jr(e);return ft.fromDateTimes(a,a.plus(s))}static before(e,r){let s=j.fromDurationLike(r),a=Jr(e);return ft.fromDateTimes(a.minus(s),a)}static fromISO(e,r){let[s,a]=(e||"").split("/",2);if(s&&a){let c,u;try{c=P.fromISO(s,r),u=c.isValid}catch(_){u=!1}let p,m;try{p=P.fromISO(a,r),m=p.isValid}catch(_){m=!1}if(u&&m)return ft.fromDateTimes(c,p);if(u){let _=j.fromISO(a,r);if(_.isValid)return ft.after(c,_)}else if(m){let _=j.fromISO(s,r);if(_.isValid)return ft.before(p,_)}}return ft.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds"){if(!this.isValid)return NaN;let r=this.start.startOf(e),s=this.end.startOf(e);return Math.floor(s.diff(r,e).get(e))+(s.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?ft.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];let r=e.map(Jr).filter(u=>this.contains(u)).sort(),s=[],{s:a}=this,c=0;for(;a<this.e;){let u=r[c]||this.e,p=+u>+this.e?this.e:u;s.push(ft.fromDateTimes(a,p)),a=p,c+=1}return s}splitBy(e){let r=j.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s}=this,a=1,c,u=[];for(;s<this.e;){let p=this.start.plus(r.mapUnits(m=>m*a));c=+p>+this.e?this.e:p,u.push(ft.fromDateTimes(s,c)),s=c,a+=1}return u}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let r=this.s>e.s?this.s:e.s,s=this.e<e.e?this.e:e.e;return r>=s?null:ft.fromDateTimes(r,s)}union(e){if(!this.isValid)return this;let r=this.s<e.s?this.s:e.s,s=this.e>e.e?this.e:e.e;return ft.fromDateTimes(r,s)}static merge(e){let[r,s]=e.sort((a,c)=>a.s-c.s).reduce(([a,c],u)=>c?c.overlaps(u)||c.abutsStart(u)?[a,c.union(u)]:[a.concat([c]),u]:[a,u],[[],null]);return s&&r.push(s),r}static xor(e){let r=null,s=0,a=[],c=e.map(m=>[{time:m.s,type:"s"},{time:m.e,type:"e"}]),u=Array.prototype.concat(...c),p=u.sort((m,_)=>m.time-_.time);for(let m of p)s+=m.type==="s"?1:-1,s===1?r=m.time:(r&&+r!=+m.time&&a.push(ft.fromDateTimes(r,m.time)),r=null);return ft.merge(a)}difference(...e){return ft.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:Yr}toLocaleString(e=dn,r={}){return this.isValid?_t.create(this.s.loc.clone(r),e).formatInterval(this):Yr}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Yr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Yr}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Yr}toFormat(e,{separator:r=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:Yr}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):j.invalid(this.invalidReason)}mapEndpoints(e){return ft.fromDateTimes(e(this.s),e(this.e))}};v();var qe=class{static hasDST(e=lt.defaultZone){let r=P.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return Ct.isValidZone(e)}static normalizeZone(e){return be(e,lt.defaultZone)}static months(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null,outputCalendar:c="gregory"}={}){return(a||it.create(r,s,c)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null,outputCalendar:c="gregory"}={}){return(a||it.create(r,s,c)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null}={}){return(a||it.create(r,s,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null}={}){return(a||it.create(r,s,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return it.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return it.create(r,null,"gregory").eras(e)}static features(){return{relative:Io()}}};v();function rp(i,e){let r=a=>a.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),s=r(e)-r(i);return Math.floor(j.fromMillis(s).as("days"))}function _E(i,e,r){let s=[["years",(m,_)=>_.year-m.year],["quarters",(m,_)=>_.quarter-m.quarter+(_.year-m.year)*4],["months",(m,_)=>_.month-m.month+(_.year-m.year)*12],["weeks",(m,_)=>{let E=rp(m,_);return(E-E%7)/7}],["days",rp]],a={},c=i,u,p;for(let[m,_]of s)r.indexOf(m)>=0&&(u=m,a[m]=_(i,e),p=c.plus(a),p>e?(a[m]--,i=c.plus(a),i>e&&(p=i,a[m]--,i=c.plus(a))):i=p);return[i,a,p,u]}function ip(i,e,r,s){let[a,c,u,p]=_E(i,e,r),m=e-a,_=r.filter(T=>["hours","minutes","seconds","milliseconds"].indexOf(T)>=0);_.length===0&&(u<e&&(u=a.plus({[p]:1})),u!==a&&(c[p]=(c[p]||0)+m/(u-a)));let E=j.fromObject(c,s);return _.length>0?j.fromMillis(m,s).shiftTo(..._).plus(E):E}v();v();var vu={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},sp={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},wE=vu.hanidec.replace(/[\[|\]]/g,"").split("");function op(i){let e=parseInt(i,10);if(isNaN(e)){e="";for(let r=0;r<i.length;r++){let s=i.charCodeAt(r);if(i[r].search(vu.hanidec)!==-1)e+=wE.indexOf(i[r]);else for(let a in sp){let[c,u]=sp[a];s>=c&&s<=u&&(e+=s-c)}}return parseInt(e,10)}else return e}function ce({numberingSystem:i},e=""){return new RegExp(`${vu[i||"latn"]}${e}`)}var bE="missing Intl.DateTimeFormat.formatToParts support";function ot(i,e=r=>r){return{regex:i,deser:([r])=>e(op(r))}}var EE=String.fromCharCode(160),up=`[ ${EE}]`,cp=new RegExp(up,"g");function SE(i){return i.replace(/\./g,"\\.?").replace(cp,up)}function ap(i){return i.replace(/\./g,"").replace(cp," ").toLowerCase()}function Ee(i,e){return i===null?null:{regex:RegExp(i.map(SE).join("|")),deser:([r])=>i.findIndex(s=>ap(r)===ap(s))+e}}function lp(i,e){return{regex:i,deser:([,r,s])=>Xn(r,s),groups:e}}function Mo(i){return{regex:i,deser:([e])=>e}}function TE(i){return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function AE(i,e){let r=ce(e),s=ce(e,"{2}"),a=ce(e,"{3}"),c=ce(e,"{4}"),u=ce(e,"{6}"),p=ce(e,"{1,2}"),m=ce(e,"{1,3}"),_=ce(e,"{1,6}"),E=ce(e,"{1,9}"),T=ce(e,"{2,4}"),N=ce(e,"{4,6}"),I=mt=>({regex:RegExp(TE(mt.val)),deser:([Tt])=>Tt,literal:!0}),St=(mt=>{if(i.literal)return I(mt);switch(mt.val){case"G":return Ee(e.eras("short"),0);case"GG":return Ee(e.eras("long"),0);case"y":return ot(_);case"yy":return ot(T,Xi);case"yyyy":return ot(c);case"yyyyy":return ot(N);case"yyyyyy":return ot(u);case"M":return ot(p);case"MM":return ot(s);case"MMM":return Ee(e.months("short",!0),1);case"MMMM":return Ee(e.months("long",!0),1);case"L":return ot(p);case"LL":return ot(s);case"LLL":return Ee(e.months("short",!1),1);case"LLLL":return Ee(e.months("long",!1),1);case"d":return ot(p);case"dd":return ot(s);case"o":return ot(m);case"ooo":return ot(a);case"HH":return ot(s);case"H":return ot(p);case"hh":return ot(s);case"h":return ot(p);case"mm":return ot(s);case"m":return ot(p);case"q":return ot(p);case"qq":return ot(s);case"s":return ot(p);case"ss":return ot(s);case"S":return ot(m);case"SSS":return ot(a);case"u":return Mo(E);case"uu":return Mo(p);case"uuu":return ot(r);case"a":return Ee(e.meridiems(),0);case"kkkk":return ot(c);case"kk":return ot(T,Xi);case"W":return ot(p);case"WW":return ot(s);case"E":case"c":return ot(r);case"EEE":return Ee(e.weekdays("short",!1),1);case"EEEE":return Ee(e.weekdays("long",!1),1);case"ccc":return Ee(e.weekdays("short",!0),1);case"cccc":return Ee(e.weekdays("long",!0),1);case"Z":case"ZZ":return lp(new RegExp(`([+-]${p.source})(?::(${s.source}))?`),2);case"ZZZ":return lp(new RegExp(`([+-]${p.source})(${s.source})?`),2);case"z":return Mo(/[a-z_+-/]{1,256}?/i);case" ":return Mo(/[^\S\n\r]/);default:return I(mt)}})(i)||{invalidReason:bE};return St.token=i,St}var $E={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function CE(i,e,r){let{type:s,value:a}=i;if(s==="literal"){let m=/^\s+$/.test(a);return{literal:!m,val:m?" ":a}}let c=e[s],u=s;s==="hour"&&(e.hour12!=null?u=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?u="hour12":u="hour24":u=r.hour12?"hour12":"hour24");let p=$E[u];if(typeof p=="object"&&(p=p[c]),p)return{literal:!1,val:p}}function OE(i){return[`^${i.map(r=>r.regex).reduce((r,s)=>`${r}(${s.source})`,"")}$`,i]}function IE(i,e,r){let s=i.match(e);if(s){let a={},c=1;for(let u in r)if(hn(r,u)){let p=r[u],m=p.groups?p.groups+1:1;!p.literal&&p.token&&(a[p.token.val[0]]=p.deser(s.slice(c,c+m))),c+=m}return[s,a]}else return[s,{}]}function ME(i){let e=c=>{switch(c){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},r=null,s;return Y(i.z)||(r=Ct.create(i.z)),Y(i.Z)||(r||(r=new xt(i.Z)),s=i.Z),Y(i.q)||(i.M=(i.q-1)*3+1),Y(i.h)||(i.h<12&&i.a===1?i.h+=12:i.h===12&&i.a===0&&(i.h=0)),i.G===0&&i.y&&(i.y=-i.y),Y(i.u)||(i.S=Ki(i.u)),[Object.keys(i).reduce((c,u)=>{let p=e(u);return p&&(c[p]=i[u]),c},{}),r,s]}var yu=null;function LE(){return yu||(yu=P.fromMillis(1555555555555)),yu}function DE(i,e){if(i.literal)return i;let r=_t.macroTokenToFormatOpts(i.val),s=wu(r,e);return s==null||s.includes(void 0)?i:s}function xu(i,e){return Array.prototype.concat(...i.map(r=>DE(r,e)))}function _u(i,e,r){let s=xu(_t.parseFormat(r),i),a=s.map(u=>AE(u,i)),c=a.find(u=>u.invalidReason);if(c)return{input:e,tokens:s,invalidReason:c.invalidReason};{let[u,p]=OE(a),m=RegExp(u,"i"),[_,E]=IE(e,m,p),[T,N,I]=E?ME(E):[null,null,void 0];if(hn(E,"a")&&hn(E,"H"))throw new Ge("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:s,regex:m,rawMatches:_,matches:E,result:T,zone:N,specificOffset:I}}}function dp(i,e,r){let{result:s,zone:a,specificOffset:c,invalidReason:u}=_u(i,e,r);return[s,a,c,u]}function wu(i,e){if(!i)return null;let s=_t.create(e,i).dtFormatter(LE()),a=s.formatToParts(),c=s.resolvedOptions();return a.map(u=>CE(u,i,c))}v();var fp=[0,31,59,90,120,151,181,212,243,273,304,334],hp=[0,31,60,91,121,152,182,213,244,274,305,335];function de(i,e){return new Rt("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${i}, which is invalid`)}function pp(i,e,r){let s=new Date(Date.UTC(i,e-1,r));i<100&&i>=0&&s.setUTCFullYear(s.getUTCFullYear()-1900);let a=s.getUTCDay();return a===0?7:a}function mp(i,e,r){return r+(jn(i)?hp:fp)[e-1]}function gp(i,e){let r=jn(i)?hp:fp,s=r.findIndex(c=>c<e),a=e-r[s];return{month:s+1,day:a}}function Lo(i){let{year:e,month:r,day:s}=i,a=mp(e,r,s),c=pp(e,r,s),u=Math.floor((a-c+10)/7),p;return u<1?(p=e-1,u=zr(p)):u>zr(e)?(p=e+1,u=1):p=e,H({weekYear:p,weekNumber:u,weekday:c},ji(i))}function bu(i){let{weekYear:e,weekNumber:r,weekday:s}=i,a=pp(e,1,4),c=Qn(e),u=r*7+s-a-3,p;u<1?(p=e-1,u+=Qn(p)):u>c?(p=e+1,u-=Qn(e)):p=e;let{month:m,day:_}=gp(p,u);return H({year:p,month:m,day:_},ji(i))}function Do(i){let{year:e,month:r,day:s}=i,a=mp(e,r,s);return H({year:e,ordinal:a},ji(i))}function Eu(i){let{year:e,ordinal:r}=i,{month:s,day:a}=gp(e,r);return H({year:e,month:s,day:a},ji(i))}function vp(i){let e=Ji(i.weekYear),r=Ie(i.weekNumber,1,zr(i.weekYear)),s=Ie(i.weekday,1,7);return e?r?s?!1:de("weekday",i.weekday):de("week",i.week):de("weekYear",i.weekYear)}function yp(i){let e=Ji(i.year),r=Ie(i.ordinal,1,Qn(i.year));return e?r?!1:de("ordinal",i.ordinal):de("year",i.year)}function Su(i){let e=Ji(i.year),r=Ie(i.month,1,12),s=Ie(i.day,1,Pr(i.year,i.month));return e?r?s?!1:de("day",i.day):de("month",i.month):de("year",i.year)}function Tu(i){let{hour:e,minute:r,second:s,millisecond:a}=i,c=Ie(e,0,23)||e===24&&r===0&&s===0&&a===0,u=Ie(r,0,59),p=Ie(s,0,59),m=Ie(a,0,999);return c?u?p?m?!1:de("millisecond",a):de("second",s):de("minute",r):de("hour",e)}var Au="Invalid DateTime",xp=864e13;function Ro(i){return new Rt("unsupported zone",`the zone "${i.name}" is not supported`)}function $u(i){return i.weekData===null&&(i.weekData=Lo(i.c)),i.weekData}function er(i,e){let r={ts:i.ts,zone:i.zone,c:i.c,o:i.o,loc:i.loc,invalid:i.invalid};return new P(Ht(H(H({},r),e),{old:r}))}function Ap(i,e,r){let s=i-e*60*1e3,a=r.offset(s);if(e===a)return[s,e];s-=(a-e)*60*1e3;let c=r.offset(s);return a===c?[s,a]:[i-Math.min(a,c)*60*1e3,Math.max(a,c)]}function No(i,e){i+=e*60*1e3;let r=new Date(i);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function ko(i,e,r){return Ap(Fr(i),e,r)}function _p(i,e){let r=i.o,s=i.c.year+Math.trunc(e.years),a=i.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,c=Ht(H({},i.c),{year:s,month:a,day:Math.min(i.c.day,Pr(s,a))+Math.trunc(e.days)+Math.trunc(e.weeks)*7}),u=j.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),p=Fr(c),[m,_]=Ap(p,r,i.zone);return u!==0&&(m+=u,_=i.zone.offset(m)),{ts:m,o:_}}function es(i,e,r,s,a,c){let{setZone:u,zone:p}=r;if(i&&Object.keys(i).length!==0||e){let m=e||p,_=P.fromObject(i,Ht(H({},r),{zone:m,specificOffset:c}));return u?_:_.setZone(p)}else return P.invalid(new Rt("unparsable",`the input "${a}" can't be parsed as ${s}`))}function Fo(i,e,r=!0){return i.isValid?_t.create(it.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(i,e):null}function Cu(i,e){let r=i.c.year>9999||i.c.year<0,s="";return r&&i.c.year>=0&&(s+="+"),s+=yt(i.c.year,r?6:4),e?(s+="-",s+=yt(i.c.month),s+="-",s+=yt(i.c.day)):(s+=yt(i.c.month),s+=yt(i.c.day)),s}function wp(i,e,r,s,a,c){let u=yt(i.c.hour);return e?(u+=":",u+=yt(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(u+=":")):u+=yt(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(u+=yt(i.c.second),(i.c.millisecond!==0||!s)&&(u+=".",u+=yt(i.c.millisecond,3))),a&&(i.isOffsetFixed&&i.offset===0&&!c?u+="Z":i.o<0?(u+="-",u+=yt(Math.trunc(-i.o/60)),u+=":",u+=yt(Math.trunc(-i.o%60))):(u+="+",u+=yt(Math.trunc(i.o/60)),u+=":",u+=yt(Math.trunc(i.o%60)))),c&&(u+="["+i.zone.ianaName+"]"),u}var $p={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},RE={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},NE={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Cp=["year","month","day","hour","minute","second","millisecond"],FE=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],kE=["year","ordinal","hour","minute","second","millisecond"];function bp(i){let e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[i.toLowerCase()];if(!e)throw new Nr(i);return e}function Ep(i,e){let r=be(e.zone,lt.defaultZone),s=it.fromObject(e),a=lt.now(),c,u;if(Y(i.year))c=a;else{for(let _ of Cp)Y(i[_])&&(i[_]=$p[_]);let p=Su(i)||Tu(i);if(p)return P.invalid(p);let m=r.offset(a);[c,u]=ko(i,m,r)}return new P({ts:c,zone:r,loc:s,o:u})}function Sp(i,e,r){let s=Y(r.round)?!0:r.round,a=(u,p)=>(u=kr(u,s||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(u,p)),c=u=>r.calendary?e.hasSame(i,u)?0:e.startOf(u).diff(i.startOf(u),u).get(u):e.diff(i,u).get(u);if(r.unit)return a(c(r.unit),r.unit);for(let u of r.units){let p=c(u);if(Math.abs(p)>=1)return a(p,u)}return a(i>e?-0:0,r.units[r.units.length-1])}function Tp(i){let e={},r;return i.length>0&&typeof i[i.length-1]=="object"?(e=i[i.length-1],r=Array.from(i).slice(0,i.length-1)):r=Array.from(i),[e,r]}var P=class{constructor(e){let r=e.zone||lt.defaultZone,s=e.invalid||(Number.isNaN(e.ts)?new Rt("invalid input"):null)||(r.isValid?null:Ro(r));this.ts=Y(e.ts)?lt.now():e.ts;let a=null,c=null;if(!s)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[a,c]=[e.old.c,e.old.o];else{let p=r.offset(this.ts);a=No(this.ts,p),s=Number.isNaN(a.year)?new Rt("invalid input"):null,a=s?null:a,c=s?null:p}this._zone=r,this.loc=e.loc||it.create(),this.invalid=s,this.weekData=null,this.c=a,this.o=c,this.isLuxonDateTime=!0}static now(){return new P({})}static local(){let[e,r]=Tp(arguments),[s,a,c,u,p,m,_]=r;return Ep({year:s,month:a,day:c,hour:u,minute:p,second:m,millisecond:_},e)}static utc(){let[e,r]=Tp(arguments),[s,a,c,u,p,m,_]=r;return e.zone=xt.utcInstance,Ep({year:s,month:a,day:c,hour:u,minute:p,second:m,millisecond:_},e)}static fromJSDate(e,r={}){let s=Lh(e)?e.valueOf():NaN;if(Number.isNaN(s))return P.invalid("invalid input");let a=be(r.zone,lt.defaultZone);return a.isValid?new P({ts:s,zone:a,loc:it.fromObject(r)}):P.invalid(Ro(a))}static fromMillis(e,r={}){if(Oe(e))return e<-xp||e>xp?P.invalid("Timestamp out of range"):new P({ts:e,zone:be(r.zone,lt.defaultZone),loc:it.fromObject(r)});throw new Dt(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if(Oe(e))return new P({ts:e*1e3,zone:be(r.zone,lt.defaultZone),loc:it.fromObject(r)});throw new Dt("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};let s=be(r.zone,lt.defaultZone);if(!s.isValid)return P.invalid(Ro(s));let a=lt.now(),c=Y(r.specificOffset)?s.offset(a):r.specificOffset,u=Ur(e,bp),p=!Y(u.ordinal),m=!Y(u.year),_=!Y(u.month)||!Y(u.day),E=m||_,T=u.weekYear||u.weekNumber,N=it.fromObject(r);if((E||p)&&T)throw new Ge("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(_&&p)throw new Ge("Can't mix ordinal dates with month/day");let I=T||u.weekday&&!E,L,St,mt=No(a,c);I?(L=FE,St=RE,mt=Lo(mt)):p?(L=kE,St=NE,mt=Do(mt)):(L=Cp,St=$p);let Tt=!1;for(let yn of L){let Ho=u[yn];Y(Ho)?Tt?u[yn]=St[yn]:u[yn]=mt[yn]:Tt=!0}let fe=I?vp(u):p?yp(u):Su(u),qt=fe||Tu(u);if(qt)return P.invalid(qt);let Ye=I?bu(u):p?Eu(u):u,[he,gn]=ko(Ye,c,s),vn=new P({ts:he,zone:s,o:gn,loc:N});return u.weekday&&E&&e.weekday!==vn.weekday?P.invalid("mismatched weekday",`you can't specify both a weekday of ${u.weekday} and a date of ${vn.toISO()}`):vn}static fromISO(e,r={}){let[s,a]=qh(e);return es(s,a,r,"ISO 8601",e)}static fromRFC2822(e,r={}){let[s,a]=Yh(e);return es(s,a,r,"RFC 2822",e)}static fromHTTP(e,r={}){let[s,a]=Jh(e);return es(s,a,r,"HTTP",r)}static fromFormat(e,r,s={}){if(Y(e)||Y(r))throw new Dt("fromFormat requires an input string and a format");let{locale:a=null,numberingSystem:c=null}=s,u=it.fromOpts({locale:a,numberingSystem:c,defaultToEN:!0}),[p,m,_,E]=dp(u,e,r);return E?P.invalid(E):es(p,m,s,`format ${r}`,e,_)}static fromString(e,r,s={}){return P.fromFormat(e,r,s)}static fromSQL(e,r={}){let[s,a]=jh(e);return es(s,a,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new Dt("need to specify a reason the DateTime is invalid");let s=e instanceof Rt?e:new Rt(e,r);if(lt.throwOnInvalid)throw new bo(s);return new P({invalid:s})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){let s=wu(e,it.fromObject(r));return s?s.map(a=>a?a.val:null).join(""):null}static expandFormat(e,r={}){return xu(_t.parseFormat(e),it.fromObject(r)).map(a=>a.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?$u(this).weekYear:NaN}get weekNumber(){return this.isValid?$u(this).weekNumber:NaN}get weekday(){return this.isValid?$u(this).weekday:NaN}get ordinal(){return this.isValid?Do(this.c).ordinal:NaN}get monthShort(){return this.isValid?qe.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?qe.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?qe.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?qe.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,r=6e4,s=Fr(this.c),a=this.zone.offset(s-e),c=this.zone.offset(s+e),u=this.zone.offset(s-a*r),p=this.zone.offset(s-c*r);if(u===p)return[this];let m=s-u*r,_=s-p*r,E=No(m,u),T=No(_,p);return E.hour===T.hour&&E.minute===T.minute&&E.second===T.second&&E.millisecond===T.millisecond?[er(this,{ts:m}),er(this,{ts:_})]:[this]}get isInLeapYear(){return jn(this.year)}get daysInMonth(){return Pr(this.year,this.month)}get daysInYear(){return this.isValid?Qn(this.year):NaN}get weeksInWeekYear(){return this.isValid?zr(this.weekYear):NaN}resolvedLocaleOptions(e={}){let{locale:r,numberingSystem:s,calendar:a}=_t.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:s,outputCalendar:a}}toUTC(e=0,r={}){return this.setZone(xt.instance(e),r)}toLocal(){return this.setZone(lt.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:s=!1}={}){if(e=be(e,lt.defaultZone),e.equals(this.zone))return this;if(e.isValid){let a=this.ts;if(r||s){let c=e.offset(this.ts),u=this.toObject();[a]=ko(u,c,e)}return er(this,{ts:a,zone:e})}else return P.invalid(Ro(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:s}={}){let a=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:s});return er(this,{loc:a})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let r=Ur(e,bp),s=!Y(r.weekYear)||!Y(r.weekNumber)||!Y(r.weekday),a=!Y(r.ordinal),c=!Y(r.year),u=!Y(r.month)||!Y(r.day),p=c||u,m=r.weekYear||r.weekNumber;if((p||a)&&m)throw new Ge("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&a)throw new Ge("Can't mix ordinal dates with month/day");let _;s?_=bu(H(H({},Lo(this.c)),r)):Y(r.ordinal)?(_=H(H({},this.toObject()),r),Y(r.day)&&(_.day=Math.min(Pr(_.year,_.month),_.day))):_=Eu(H(H({},Do(this.c)),r));let[E,T]=ko(_,this.o,this.zone);return er(this,{ts:E,o:T})}plus(e){if(!this.isValid)return this;let r=j.fromDurationLike(e);return er(this,_p(this,r))}minus(e){if(!this.isValid)return this;let r=j.fromDurationLike(e).negate();return er(this,_p(this,r))}startOf(e){if(!this.isValid)return this;let r={},s=j.normalizeUnit(e);switch(s){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break;case"milliseconds":break}if(s==="weeks"&&(r.weekday=1),s==="quarters"){let a=Math.ceil(this.month/3);r.month=(a-1)*3+1}return this.set(r)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e,r={}){return this.isValid?_t.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):Au}toLocaleString(e=dn,r={}){return this.isValid?_t.create(this.loc.clone(r),e).formatDateTime(this):Au}toLocaleParts(e={}){return this.isValid?_t.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:s=!1,includeOffset:a=!0,extendedZone:c=!1}={}){if(!this.isValid)return null;let u=e==="extended",p=Cu(this,u);return p+="T",p+=wp(this,u,r,s,a,c),p}toISODate({format:e="extended"}={}){return this.isValid?Cu(this,e==="extended"):null}toISOWeekDate(){return Fo(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:s=!0,includePrefix:a=!1,extendedZone:c=!1,format:u="extended"}={}){return this.isValid?(a?"T":"")+wp(this,u==="extended",r,e,s,c):null}toRFC2822(){return Fo(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Fo(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Cu(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:s=!0}={}){let a="HH:mm:ss.SSS";return(r||e)&&(s&&(a+=" "),r?a+="z":e&&(a+="ZZ")),Fo(this,a,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Au}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let r=H({},this.c);return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",s={}){if(!this.isValid||!e.isValid)return j.invalid("created by diffing an invalid DateTime");let a=H({locale:this.locale,numberingSystem:this.numberingSystem},s),c=Dh(r).map(j.normalizeUnit),u=e.valueOf()>this.valueOf(),p=u?this:e,m=u?e:this,_=ip(p,m,c,a);return u?_.negate():_}diffNow(e="milliseconds",r={}){return this.diff(P.now(),e,r)}until(e){return this.isValid?ft.fromDateTimes(this,e):this}hasSame(e,r){if(!this.isValid)return!1;let s=e.valueOf(),a=this.setZone(e.zone,{keepLocalTime:!0});return a.startOf(r)<=s&&s<=a.endOf(r)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let r=e.base||P.fromObject({},{zone:this.zone}),s=e.padding?this<r?-e.padding:e.padding:0,a=["years","months","days","hours","minutes","seconds"],c=e.unit;return Array.isArray(e.unit)&&(a=e.unit,c=void 0),Sp(r,this.plus(s),Ht(H({},e),{numeric:"always",units:a,unit:c}))}toRelativeCalendar(e={}){return this.isValid?Sp(e.base||P.fromObject({},{zone:this.zone}),this,Ht(H({},e),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...e){if(!e.every(P.isDateTime))throw new Dt("min requires all arguments be DateTimes");return uu(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(P.isDateTime))throw new Dt("max requires all arguments be DateTimes");return uu(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,s={}){let{locale:a=null,numberingSystem:c=null}=s,u=it.fromOpts({locale:a,numberingSystem:c,defaultToEN:!0});return _u(u,e,r)}static fromStringExplain(e,r,s={}){return P.fromFormatExplain(e,r,s)}static get DATE_SHORT(){return dn}static get DATE_MED(){return Oi}static get DATE_MED_WITH_WEEKDAY(){return ql}static get DATE_FULL(){return Ii}static get DATE_HUGE(){return Mi}static get TIME_SIMPLE(){return Li}static get TIME_WITH_SECONDS(){return Di}static get TIME_WITH_SHORT_OFFSET(){return Ri}static get TIME_WITH_LONG_OFFSET(){return Ni}static get TIME_24_SIMPLE(){return Fi}static get TIME_24_WITH_SECONDS(){return ki}static get TIME_24_WITH_SHORT_OFFSET(){return Hi}static get TIME_24_WITH_LONG_OFFSET(){return Pi}static get DATETIME_SHORT(){return zi}static get DATETIME_SHORT_WITH_SECONDS(){return Ui}static get DATETIME_MED(){return Wi}static get DATETIME_MED_WITH_SECONDS(){return Bi}static get DATETIME_MED_WITH_WEEKDAY(){return Yl}static get DATETIME_FULL(){return Vi}static get DATETIME_FULL_WITH_SECONDS(){return Gi}static get DATETIME_HUGE(){return Zi}static get DATETIME_HUGE_WITH_SECONDS(){return qi}};function Jr(i){if(P.isDateTime(i))return i;if(i&&i.valueOf&&Oe(i.valueOf()))return P.fromJSDate(i);if(i&&typeof i=="object")return P.fromObject(i);throw new Dt(`Unknown datetime argument: ${i}, of type ${typeof i}`)}var Op=et(V),HE=[Op.styles,Fl],nr=class extends Op{constructor(){super();this.updateComment=({detail:r})=>{let{text:s}=r;this.text=s,this.closeEditMode(),this.emitEvent("update-comment",{uuid:this.uuid,text:s})};this.resolveAnnotation=r=>{r.stopPropagation(),this.emitEvent("resolve-annotation",{type:"resolve-annotation",resolved:!this.resolved},{composed:!1,bubbles:!1})};this.confirmDelete=()=>{if(this.deleteCommentModalOpen=!1,this.primaryComment)return this.emitEvent("delete-annotation",{uuid:this.annotationId});this.emitEvent("delete-comment",{annotationId:this.annotationId,uuid:this.uuid})};this.closeEditMode=()=>{this.mode="readonly"};this.resolved=!1}render(){var I;let r=this.annotationFilter==="all"?"resolve":"undo",s=L=>P.fromISO(L).toFormat("yyyy-dd-MM"),a=this.resolvable?"comment-item__resolve":"hidden",c=[{label:"EDIT"},{label:"DELETE"}],u=({detail:L})=>{L==="EDIT"&&(this.mode="editable"),L==="DELETE"&&(this.deleteCommentModalOpen=!0)},p=()=>{this.text.length<120||(this.expandElipsis=!0)},m=()=>{if(this.mode==="editable")return M`
        <superviz-comments-comment-input
          class="comment-item--editable"
          editable
          @click=${L=>L.stopPropagation()}
          text=${this.text}
          eventType="update-comment"
          @update-comment=${this.updateComment}
          @close-edit-mode=${this.closeEditMode}
        ></superviz-comments-comment-input>
      `},_=()=>{if(this.mode!=="editable")return M`
        <span
          id="comment-text"
          @click=${p}
          class="text text-big sv-gray-700 ${N}"
          >${this.text}</span
        >
      `},E=()=>{this.deleteCommentModalOpen=!1},T={"comment-item":!0,reply:!this.primaryComment},N=!this.expandElipsis&&this.text.length>120?"line-clamp":"";return M`
      <div class=${dt(T)}>
        <div class="comment-item__user">
          <div class="comment-item__user-details">
            <div class="comment-item__avatar">
              <p class="text text-bold">${((I=this.username[0])==null?void 0:I.toUpperCase())||"A"}</p>
            </div>
            <span class="text text-bold sv-gray-600">${this.username}</span>
            <span class="text text-small sv-gray-500">${s(this.createdAt)}</span>
          </div>
          <div class="comment-item__actions">
            <button
              @click=${this.resolveAnnotation}
              class="icon-button icon-button--clickable icon-button--xsmall ${a}"
            >
              <superviz-icon name=${r} size="md"></superviz-icon>
            </button>
            <superviz-dropdown
              options=${JSON.stringify(c)}
              label="label"
              returnTo="label"
              position="bottom-left"
              @selected=${u}
              @click=${L=>L.stopPropagation()}
            >
              <button slot="dropdown" class="icon-button icon-button--clickable icon-button--small">
                <superviz-icon name="more" size="sm"></superviz-icon>
              </button>
            </superviz-dropdown>
          </div>
        </div>

        <div class="comment-item__content">
          <div class="comment-item__content__body">${m()} ${_()}</div>
        </div>
      </div>
      <superviz-comments-delete-comments-modal
        ?open=${this.deleteCommentModalOpen}
        @close=${E}
        @confirm=${this.confirmDelete}
      >
      </superviz-comments-delete-comments-modal>
    `}};nr.styles=HE,nr.properties={uuid:{type:String},annotationId:{type:String},avatar:{type:String},username:{type:String},text:{type:String},resolved:{type:Boolean},resolvable:{type:Boolean},createdAt:{type:String},mode:{type:String},deleteCommentModalOpen:{type:Boolean},primaryComment:{type:Boolean},expandElipsis:{type:Boolean},annotationFilter:{type:String}},nr=K([X("superviz-comments-comment-item")],nr);v();var Ip=et(V),PE=[Ip.styles,Hl],rr=class extends Ip{constructor(){super();this.pinCoordinates=null;this.getCommentInput=()=>this.shadowRoot.getElementById("comment-input--textarea");this.getCommentInputContainer=()=>this.shadowRoot.getElementById("comment-input--container");this.getSendBtn=()=>this.shadowRoot.querySelector(".comment-input--send-btn");this.commentInputFocus=({detail:r})=>{this.pinCoordinates=r,this.getCommentInput().focus()};this.sendEnter=r=>{if(r.key!=="Enter"||r.shiftKey)return;let s=this.getCommentInput(),a=s.value.trim();if(!a)return;let c=this.getSendBtn();this.emitEvent(this.eventType,{text:a,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",c.disabled=!0,this.updateHeight()};this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1})};this.btnActive=!1,this.text=""}connectedCallback(){super.connectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&(window.document.body.addEventListener("comment-input-focus",this.commentInputFocus),this.addEventListener("keyup",this.sendEnter))}disconnectedCallback(){super.disconnectedCallback(),this.eventType==="create-annotation"&&window.document.body.removeEventListener("comment-input-focus",this.commentInputFocus)}updated(r){if(r.has("text")&&this.text.length>0){let s=this.getCommentInput();s.value=this.text,this.updateHeight()}if(r.has("btnActive")){let s=this.getSendBtn();s.disabled=!this.btnActive}}updateHeight(){let r=this.getCommentInput(),s=this.getCommentInputContainer();r.style.height="0px",s.style.height="0px";let a=r.scrollHeight+4,c=r.scrollHeight;r.style.height=`${a}px`,s.style.height=`${c}px`;let u=this.getSendBtn();u.disabled=!(r.value.length>0)}send(r){r.preventDefault();let s=this.getCommentInput(),a=this.getSendBtn(),c=s.value;this.emitEvent(this.eventType,{text:c,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",a.disabled=!0,this.updateHeight()}render(){var a;let r=()=>{if(!!this.editable)return M`
        <button
          id="close"
          @click=${()=>this.closeEditMode()}
          class="icon-button icon-button--medium icon-button--clickable"
          @click=${this.send}
        >
          <superviz-icon name="close" size="md"></superviz-icon>
        </button>
        <button id="confirm" class="comment-input--send-btn" disabled @click=${this.send}>
          <superviz-icon name="check" size="md"></superviz-icon>
        </button>
      `},s=()=>{if(!this.editable)return M`
        <button class="comment-input--send-btn align-send-btn" disabled @click=${this.send}>
          <superviz-icon name="send" size="sm"></superviz-icon>
        </button>
      `};return M`
      <div class="comment-input">
        <div id="comment-input--container">
          <textarea
            id="comment-input--textarea"
            placeholder=${(a=this.placeholder)!=null?a:"Add comment..."}
            @input=${this.updateHeight}
          ></textarea>
        </div>
        <div class="sv-hr"></div>
        <div class="comment-input--options">
          <div>
            <button class="icon-button mention">
              <superviz-icon name="mention" size="sm"></superviz-icon>
            </button>
          </div>
          <div class="comment-input-options">
            ${s()} ${r()}
          </div>
        </div>
      </div>
    `}};rr.styles=PE,rr.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean},placeholder:{type:String}},rr=K([X("superviz-comments-comment-input")],rr);v();var Mp=et(V),zE=[Mp.styles,Ul],ir=class extends Mp{constructor(){super();this.position={x:0,y:0}}get userInitial(){var s,a,c;return(((c=(a=(s=this.annotation)==null?void 0:s.comments[0])==null?void 0:a.participant)==null?void 0:c.name)||"Anonymous")[0].toUpperCase()}emitClick(){document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:this.annotation.uuid}}))}render(){var s,a;let r={"annotation-pin":!0,"annotation-pin--active":this.active};return this.type==="add"?M`
        <div
          class=${dt(r)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          <div class="annotation-pin__avatar annotation-pin__avatar--add">
            <superviz-icon name="add"></superviz-icon>
          </div>
        </div>
      `:M`
      <div
        @click=${this.emitClick}
        class=${dt(r)}
        style=${`top: ${(s=this.position)==null?void 0:s.y}px; left: ${(a=this.position)==null?void 0:a.x}px; pointer-events: auto;`}
      >
        <div class="annotation-pin__avatar">
          <p class="text text-bold text-big">${this.userInitial}</p>
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
      </div>
    `}};ir.styles=zE,ir.properties={type:{type:String},annotation:{type:Object},position:{type:Object},active:{type:Boolean}},ir=K([X("superviz-comments-annotation-pin")],ir);v();var Lp=et(V),UE=[Lp.styles,Pl],sr=class extends Lp{constructor(){super(...arguments);this.selectAnnotation=()=>{let{uuid:r}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:r}}))};this.resolveAnnotation=({detail:r})=>{let{uuid:s}=this.annotation,{resolved:a,type:c}=r,u=c==="resolve-annotation"&&this.annotationFilter==="all";this.resolved=a,this.emitEvent("resolve-annotation",{uuid:s,resolved:a}),u&&(this.shouldShowUndoResolved=!0)};this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1};this.generateExpantedCommentesTemplate=(r,s)=>s===0?M``:M`
      <superviz-comments-comment-item
        uuid=${r.uuid}
        avatar="https://picsum.photos/200/300"
        username=${r.participant.name||"Anonymous"}
        text=${r.text}
        createdAt=${r.createdAt}
        annotationId=${this.annotation.uuid}
      ></superviz-comments-comment-item>
    `}get filterIsAll(){return this.annotationFilter==="all"}get filterIsResolved(){return this.annotationFilter==="resolved"}get shouldHiddenAnnotation(){return{hidden:this.resolved&&this.filterIsAll||!this.resolved&&this.filterIsResolved}}get replies(){return[...this.annotation.comments].splice(1).length}get repliesSize(){return this.replies>=5?5:this.replies}get replyText(){return this.replies!==1?"replies":"reply"}get isSelected(){return this.selected===this.annotation.uuid}get annotationClasses(){return{"annotation-item":!0,"annotation-item--selected":this.isSelected}}get hrClasses(){return{"sv-hr":!0,hidden:this.isLastAnnotation}}get avatarCommentsClasses(){return{"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&this.replies>1,hidden:!(!this.expandComments&&this.replies>=1)}}get commentsClasses(){return{"comments-container":!0,"comment-item--expand":this.isSelected&&this.expandComments,hidden:!(this.isSelected&&this.expandComments)}}firstUpdated(){this.resolved=this.annotation.resolved}updated(r){if(r.has("selected")){let s=this.selected===this.annotation.uuid;this.expandComments=s}}createComment({detail:r}){let{text:s}=r;this.emitEvent("create-comment",{uuid:this.annotation.uuid,text:s})}generateAvatarCommentsTemplate(){var s,a;let r=[];for(let c=1;c<=this.repliesSize;c++)r.push(M`
        <div class="avatar">
          <p class="text text-bold">
            ${((a=(s=this.annotation.comments[c])==null?void 0:s.participant.name[0])==null?void 0:a.toUpperCase())||"A"}
          </p>
        </div>
      `);return M`
      ${r}
      <div class="text text-big sv-gray-500">${this.replies} ${this.replyText}</div>
    `}annotationResolvedTemplate(){return this.shouldShowUndoResolved?M`
      <superviz-comments-annotation-resolved
        @undo-resolve=${this.resolveAnnotation}
        @hide=${this.hideUndoResolved}
        class=${dt({hidden:this.filterIsResolved})}
      >
      </superviz-comments-annotation-resolved>
    `:M``}render(){var r,s,a,c,u,p;return M`
      ${this.annotationResolvedTemplate()}

      <div class=${dt(this.shouldHiddenAnnotation)}>
        <div class=${dt(this.annotationClasses)} @click=${this.selectAnnotation}>
          <div>
            <superviz-comments-comment-item
              uuid=${(r=this.annotation.comments)==null?void 0:r[0].uuid}
              annotationId=${this.annotation.uuid}
              username=${((a=(s=this.annotation.comments)==null?void 0:s[0].participant)==null?void 0:a.name)||"Anonymous"}
              text=${(c=this.annotation.comments)==null?void 0:c[0].text}
              createdAt=${(u=this.annotation.comments)==null?void 0:u[0].createdAt}
              primaryComment
              resolvable
              ?resolved=${this.resolved}
              annotationFilter=${this.annotationFilter}
              @resolve-annotation=${this.resolveAnnotation}
            ></superviz-comments-comment-item>

            <div class=${dt(this.avatarCommentsClasses)}>
              <div class="avatar-container">${this.generateAvatarCommentsTemplate()}</div>
            </div>
          </div>

          <div class=${dt(this.commentsClasses)}>
            ${(p=this.annotation.comments)==null?void 0:p.map(this.generateExpantedCommentesTemplate)}
            <superviz-comments-comment-input
              @create-comment=${this.createComment}
              eventType="create-comment"
              @click=${m=>m.stopPropagation()}
              placeholder="Reply"
            ></superviz-comments-comment-input>
          </div>
        </div>
        <div class=${dt(this.hrClasses)}></div>
      </div>
    `}};sr.styles=UE,sr.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String}},sr=K([X("superviz-comments-annotation-item")],sr);v();var Dp=et(V),WE=[Dp.styles],or=class extends Dp{constructor(){super(...arguments);this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:M`<span class="text text-big sv-gray-600">Are you sure you want to delete this comment? <br /> This action cannot be undone</span>`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))};this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{!this.open||this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{!this.open||(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(r){r.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){!this.open||(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){let r=()=>{if(!!this.useSlot)return M`<slot name="modal-handler" @click=${this.toggle}></slot>`},s=()=>{if(!!this.open)return M`
        <superviz-modal></superviz-modal>
      `};return M`
      ${r()}
      ${s()}
    `}};or.styles=WE,or.properties={open:{type:Boolean},useSlot:{type:Boolean}},or=K([X("superviz-comments-delete-comments-modal")],or);v();var Rp=et(V),BE=[Rp.styles,zl],VE=10*1e3,ar=class extends Rp{constructor(){super();this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)};this.timeToHide=VE,this.isCanceled=!1}firstUpdated(){this.setTimer()}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return this.timeToHide===0?M``:this.isCanceled?M``:M`
      <div class="annotation-resolved">
        <span class="text text-big sv-gray-700">You resolved this comment</span>
        <button
          id="undone"
          @click=${this.undone}
          class="icon-button icon-button--clickable icon-button--medium"
        >
          <superviz-icon name="undo" size="md"></superviz-icon>
        </button>
      </div>
    `}};ar.styles=BE,ar.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},ar=K([X("superviz-comments-annotation-resolved")],ar);v();var Np=et(V),GE=[Np.styles,Wl],ns=[{label:"All comments",code:"all"},{label:"Resolved comments",code:"resolved"}],lr=class extends Np{constructor(){super();this.caret="down"}render(){let r=this.filter==="all"?ns[0].label:ns[1].label,s=({detail:p})=>{this.emitEvent("select",{filter:p}),a()},a=()=>{this.caret=this.caret==="down"?"up":"down"},c=this.filter==="all"?ns[0].code:ns[1].code,u={text:!0,"text-bold":!0,"select-content":!0,"sv-gray-500":this.caret==="down","sv-gray-700":this.caret==="up"};return M`
      <div class="select">
        <div class="select-container">
          <superviz-dropdown
            options=${JSON.stringify(ns)}
            active=${c}
            label="label"
            returnTo="code"
            position="bottom-left"
            right-offset="100px"
            @click=${a}
            @selected=${s}
            @close=${a}
          >
            <div class="content" slot="dropdown">
              <span class=${dt(u)}>${r}</span>
              <superviz-icon name=${this.caret} size="md"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};lr.styles=GE,lr.properties={filter:{type:String},caret:{type:String}},lr=K([X("superviz-comments-annotation-filter")],lr);v();var Fp=et(V),ZE=[Fp.styles,Bl],ur=class extends Fp{constructor(){super();this.isHidden=!0,this.positionStyles="top: 20px; left: 20px;",this.shouldHide=!1,this.commentsPosition="left"}toggle(){this.emitEvent("toggle",{})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("toggle-annotation-sidebar",()=>{this.isHidden=!this.isHidden})}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".float-button");if(!s)return;s.setAttribute("style",this.positionStyles);let a=window.document.body.getBoundingClientRect().width,c=s.getBoundingClientRect(),u=320;if(!this.commentsPosition||this.commentsPosition==="left"){this.shouldHide=c.x<u;return}this.shouldHide=a-c.right<u})}render(){let r={"float-button":!0,"hide-button":!this.isHidden&&this.shouldHide};return M` <button @click=${this.toggle} class="${dt(r)}">
      <superviz-icon name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`}};ur.styles=ZE,ur.properties={positionStyles:{type:String},isHidden:{type:Boolean},commentsPosition:{type:String}},ur=K([X("superviz-comments-button")],ur);v();v();v();var rs=(r=>(r.GOTO="GO TO",r.FOLLOW="FOLLOW",r))(rs||{});v();v();var Ou=B`
  .superviz-who-is-online {
    position: fixed;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .superviz-who-is-online__participant {
    border-radius: 50%;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #aea9b8;
    user-select: none;
  }

  .superviz-who-is-online__participant:not(.local) {
    cursor: pointer;
  }

  .superviz-who-is-online__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans';
    font-size: 18px;
    line-height: 18px;
    font-weight: bold;
    color: #26242a;
    object-fit: contain;
  }

  .superviz-who-is-online__excess {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    font-weight: bold;
    color: #26242a;
    cursor: pointer;
  }

  .excess_participants:hover,
  .excess_participants--open {
    background-color: #aea9b8 !important;
  }

  .excess_participants:hover > div,
  .excess_participants--open > div {
    color: #fff !important;
  }

  @media (max-width: 780px) {
    .superviz-who-is-online__participant {
      width: 32px;
      height: 32px;
    }

    .superviz-who-is-online__avatar {
      width: 24px;
      height: 24px;
    }

    .superviz-who-is-online {
      gap: 8px;
    }
  }
`;v();var Iu=B`
  .dropdown {
    position: relative;
  }

  .who-is-online-dropdown__content {
    display: flex;
    user-select: none;
    align-items: center;
    justify-items: start;
    gap: 4px;
    width: 100%;
    padding: 10px;
    border-radius: 2px;
    position: relative;
  }

  .who-is-online-dropdown__content:not(.local) {
    cursor: pointer;
  }

  .who-is-online-dropdown__content:hover,
  .who-is-online-dropdown__content--selected {
    background-color: rgb(var(--sv-gray-200));
  }

  .who-is-online-dropdown__participant {
    border-radius: 50%;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 2px solid #878291;
    border-radius: 50%;
    max-width: 40px;
    flex: 1 0 40px;
  }

  .who-is-online-dropdown__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans';
    font-size: 18px;
    line-height: 18px;
    font-weight: bold;
    color: #26242a;
    object-fit: contain;
  }

  .dropdown-list {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .dropdown-list * {
    box-sizing: border-box;
  }

  .dropdown-list > div {
    padding: 4px;
    min-width: 216px;
  }

  .menu {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    opacity: 0;
    display: none;
    background: #fff;
    padding: 0;
    z-index: 1;
    transition: 0.2s;
    border-radius: 3px;
  }

  .menu--bottom {
    top: 4px;
    min-width: 103px;
    position: absolute;
    right: 0;
  }

  .menu--top {
    bottom: 44px;
    min-width: 103px;
    position: absolute;
    right: 0px;
  }

  .menu-open {
    display: block;
    opacity: 1;
  }

  .user-name {
    font-size: 14px;
    line-height: 20px;
    font-family: 'Open sans';
    color: rgb(var(--sv-gray-600));
  }

  .icon {
    flex: 1;
    justify-content: flex-end;
    display: flex;
    visibility: hidden;
  }

  @media (max-width: 780px) {
    .sv-icon,
    .who-is-online-dropdown__participant {
      width: 32px;
      height: 32px;
    }

    .who-is-online-dropdown__participant {
      flex: 1 0 32px;
      max-width: 32px;
    }

    .who-is-online-dropdown__avatar {
      width: 24px;
      height: 24px;
    }

    .dropdown-list > div {
      min-width: 192px;
    }
  }

  @media (max-width: 780px) {
    .menu--top {
      bottom: 36px;
    }
  }
`;var kp=et(V),qE=[kp.styles,Ou],cr=class extends kp{constructor(){super();this.onClickOutDropdown=({detail:r})=>{this.open=r.open};this.dropdownOptionsHandler=({detail:r})=>{};this.position="top: 20px; right: 40px;",this.open=!1,this.textColorValues=[2,4,5,7,8,16]}updateParticipants(r){this.participants=r}toggleOpen(){this.open=!this.open}dropdownPosition(r){if(this.participants.length===1)return"bottom-center";if(r===0)return"bottom-right";let s=this.participants.length>4,a=r+1===this.participants.length;return s||!a?"bottom-center":"bottom-left"}renderExcessParticipants(){let r=this.participants.length-4;if(r<=0)return M``;let s=this.participants.slice(4).map(({name:u,color:p,id:m,slotIndex:_,avatar:E,isLocal:T})=>({name:u,color:p,id:m,slotIndex:_,avatar:E,isLocal:T})),a={"superviz-who-is-online__participant":!0,excess_participants:!0,"excess_participants--open":this.open};return M`
      <superviz-who-is-online-dropdown
        label="label"
        returnTo="label"
        position="bottom"
        @selected=${this.dropdownOptionsHandler}
        participants=${JSON.stringify(s)}
        @clickout=${this.onClickOutDropdown}
      >
        <div class=${dt(a)} slot="dropdown" @click=${this.toggleOpen}>
          <div class="superviz-who-is-online__excess" style="color: #AEA9B8;">+${r}</div>
        </div>
      </superviz-who-is-online-dropdown>
    `}getAvatar(r){var a,c;if((a=r.avatar)!=null&&a.imageUrl)return M` <img
        class="superviz-who-is-online__avatar"
        src=${r.avatar.imageUrl}
      />`;let s=this.textColorValues.includes(r.slotIndex)?"#FFFFFF":"#26242A";return M`<div
      class="superviz-who-is-online__avatar"
      style="background-color: ${r.color}; color: ${s}"
    >
      ${(c=r.name)==null?void 0:c.at(0)}
    </div>`}renderParticipants(){if(!this.participants)return M``;let r=["place","send"];return M`${this.participants.slice(0,4).map((s,a)=>{var _;let c=this.textColorValues.includes(s.slotIndex)?"#FFFFFF":"#26242A",u=Object.values(rs).map(E=>({label:E,id:s.id})).splice(0,1),p={"superviz-who-is-online__participant":!0,local:s.isLocal},m=this.dropdownPosition(a);return M`
        <superviz-dropdown
          options=${JSON.stringify(u)}
          label="label"
          position="${m}"
          @selected=${this.dropdownOptionsHandler}
          icons="${JSON.stringify(r)}"
          name="${s.name}"
          ?disabled=${s.isLocal}
        >
          -->
          <div
            slot="dropdown"
            class=${dt(p)}
            style="border-color: ${s.color}"
          >
            <div
              class="superviz-who-is-online__avatar"
              style="background-color: ${s.color}; color: ${c}"
            >
              ${(_=s.name)==null?void 0:_.at(0).toUpperCase()}
            </div>
          </div>
        </superviz-dropdown>
      `})}
    ${this.renderExcessParticipants()} `}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".superviz-who-is-online");!s||s.setAttribute("style",this.position)})}render(){return M` <div class="superviz-who-is-online">${this.renderParticipants()}</div>`}};cr.styles=qE,cr.properties={position:{type:String},participants:{type:Object},open:{type:Boolean}},cr=K([X("superviz-who-is-online")],cr);v();v();var Hp=et(V),YE=[Hp.styles,Iu],dr=class extends Hp{constructor(){super();this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let s=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),c=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=s.includes(a),_=s.includes(c),E=s.includes(p);m||_||E||(this.open=!1,this.selected="",this.emitEvent("clickout",{detail:{open:this.open},bubbles:!1,composed:!1}))};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.dropdownOptionsHandler=({detail:r})=>{};this.selectParticipant=r=>()=>{this.selected=r};this.adjustPosition=()=>{let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,c=this.positionAction();if(c===0)return;if(c===1){let _=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,_);return}let u=a-s>r?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,u);this.position=m};this.textColorValues=[2,4,5,7,8,16],this.selected=""}updated(r){if(r.has("open")){if(this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown),this.close()}}getAvatar(r){var a,c;if((a=r.avatar)!=null&&a.imageUrl)return M` <img
        class="who-is-online-dropdown__avatar"
        src=${r.avatar.imageUrl}
      />`;let s=this.textColorValues.includes(r.slotIndex)?"#FFFFFF":"#26242A";return M`<div
      class="who-is-online-dropdown__avatar"
      style="background-color: ${r.color}; color: ${s}"
    >
      ${(c=r.name)==null?void 0:c.at(0)}
    </div>`}renderParticipants(){if(!this.participants)return;let r=["place","send"];return this.participants.map(s=>{let a=this.textColorValues.includes(s.slotIndex)?"#FFFFFF":"#26242A",c={"who-is-online-dropdown__content":!0,"who-is-online-dropdown__content--selected":this.selected===s.id,local:s.isLocal},u=Object.values(rs).map(p=>({label:p,id:s.id})).splice(0,1);return M`
        <superviz-dropdown
        options=${JSON.stringify(u)}
        label="label"
        position="bottom-right"
        
        icons="${JSON.stringify(r)}"
        ?disabled=${s.isLocal}
        >
        <div 
          class=${dt(c)} 
          @click=${this.selectParticipant(s.id)} slot="dropdown">
          <div class="who-is-online-dropdown__participant" style="border-color: 
          ${s.color}">
              ${this.getAvatar(s)}
            </div>
            <span class="user-name">${s.name}</span>
            <superviz-icon class="icon" name="right" color="var(--sv-gray-600)"></superviz-icon>
          </div>
        </div>
      </superviz-dropdown>
      `})}setMenu(){var r;if(!this.menu){this.menu=this.shadowRoot.querySelector(".menu");let s={rootMargin:"0px",threshold:1},a=new IntersectionObserver(this.adjustPosition,s),c=new ResizeObserver(this.adjustPosition),u=this.menu;a.observe(u),c.observe((r=this.scrollableParent)!=null?r:document.body)}}get scrollableParent(){let r;this.host||(this.host=this.getRootNode().host);let s=this.host;for(;!r;){let a=s==null?void 0:s.parentElement;if(this.isScrollable(a)){r=a;break}if(s=a,!s)break}return r}isScrollable(r){if(!r)return!1;let s=r.scrollHeight>r.clientHeight,a=window.getComputedStyle(r).overflowY,c=window.getComputedStyle(r).overflowX,u=a.indexOf("hidden")!==-1,p=c.indexOf("hidden")!==-1;return s&&!u&&!p}get dropdownBounds(){this.dropdownContent||(this.dropdownContent=this.shadowRoot.querySelector(".dropdown-content"));let r=this.dropdownContent.getBoundingClientRect(),{y:s,height:a}=this.menu.getBoundingClientRect();return{top:s,bottom:s+a+4,height:a+4,contentY:r.y}}shouldUseOriginalVertical(){let{height:r,contentY:s}=this.dropdownBounds,{innerHeight:a}=window,c=s+r;return this.originalPosition.includes("bottom")?r+c<a:s-r>0}positionAction(){let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,c=s>a,u=r<0;return c&&this.position.includes("bottom")||u&&this.position.includes("top")?2:!c&&!u&&this.shouldUseOriginalVertical()?1:0}toggle(){this.originalPosition||(this.originalPosition=this.position),this.setMenu(),this.open=!this.open,this.open&&(this.selected="",setTimeout(()=>this.adjustPosition()))}get menuClasses(){return{menu:!0,"menu--bottom":this.position==="bottom","menu--top":this.position==="top","menu-open":this.open}}render(){return M`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${dt(this.menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `}};dr.styles=YE,dr.properties={open:{type:Boolean},align:{type:String},position:{type:String},participants:{type:Array},selected:{type:String}},dr=K([X("superviz-who-is-online-dropdown")],dr);export{qn as Comments,lr as CommentsAnnotationFilter,sr as CommentsAnnotationItem,ir as CommentsAnnotationPin,ar as CommentsAnnotationResolved,Jn as CommentsAnnotations,rr as CommentsCommentInput,nr as CommentsCommentItem,Kn as CommentsContent,ur as CommentsFloatButton,Yn as CommentsTopbar,or as DeleteCommentModal,Zn as Dropdown,Vn as HelloWorld,Gn as Icon,Lr as Modal,Dr as ModalContainer,Mr as PresenceMouse,cr as WhoIsOnline,dr as WhoIsOnlineDropdown};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
