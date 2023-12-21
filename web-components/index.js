var Rx=Object.create;var ts=Object.defineProperty,Dx=Object.defineProperties,hf=Object.getOwnPropertyDescriptor,Px=Object.getOwnPropertyDescriptors,Fx=Object.getOwnPropertyNames,Qo=Object.getOwnPropertySymbols,kx=Object.getPrototypeOf,al=Object.prototype.hasOwnProperty,pf=Object.prototype.propertyIsEnumerable;var mf=Math.pow,ff=(i,e,r)=>e in i?ts(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,k=(i,e)=>{for(var r in e||(e={}))al.call(e,r)&&ff(i,r,e[r]);if(Qo)for(var r of Qo(e))pf.call(e,r)&&ff(i,r,e[r]);return i},Lt=(i,e)=>Dx(i,Px(e));var ll=(i,e)=>{var r={};for(var o in i)al.call(i,o)&&e.indexOf(o)<0&&(r[o]=i[o]);if(i!=null&&Qo)for(var o of Qo(i))e.indexOf(o)<0&&pf.call(i,o)&&(r[o]=i[o]);return r};var Hx=(i,e)=>()=>(i&&(e=i(i=0)),e);var zx=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var Ux=(i,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Fx(e))!al.call(i,a)&&a!==r&&ts(i,a,{get:()=>e[a],enumerable:!(o=hf(e,a))||o.enumerable});return i};var Wx=(i,e,r)=>(r=i!=null?Rx(kx(i)):{},Ux(e||!i||!i.__esModule?ts(r,"default",{value:i,enumerable:!0}):r,i));var K=(i,e,r,o)=>{for(var a=o>1?void 0:o?hf(e,r):e,u=i.length-1,c;u>=0;u--)(c=i[u])&&(a=(o?c(e,r,a):c(a))||a);return o&&a&&ts(e,r,a),a};var $n=(i,e,r)=>new Promise((o,a)=>{var u=m=>{try{p(r.next(m))}catch(_){a(_)}},c=m=>{try{p(r.throw(m))}catch(_){a(_)}},p=m=>m.done?o(m.value):Promise.resolve(m.value).then(u,c);p((r=r.apply(i,e)).next())});var v=Hx(()=>{});var lh=zx((Ir,$i)=>{v();(function(){var i,e="4.17.21",r=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",u="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",p=500,m="__lodash_placeholder__",_=1,T=2,S=4,N=1,I=2,M=1,gt=2,ct=4,vt=8,qt=16,Yt=32,Ye=64,he=128,gn=256,vn=512,yn=30,Hs="...",Up=800,Wp=16,Nu=1,Bp=2,Gp=3,_n=1/0,Je=9007199254740991,Vp=17976931348623157e292,oo=0/0,Te=4294967295,Zp=Te-1,qp=Te>>>1,Yp=[["ary",he],["bind",M],["bindKey",gt],["curry",vt],["curryRight",qt],["flip",vn],["partial",Yt],["partialRight",Ye],["rearg",gn]],hr="[object Arguments]",so="[object Array]",Jp="[object AsyncFunction]",jr="[object Boolean]",Xr="[object Date]",Kp="[object DOMException]",ao="[object Error]",lo="[object Function]",Ru="[object GeneratorFunction]",pe="[object Map]",Qr="[object Number]",jp="[object Null]",Le="[object Object]",Du="[object Promise]",Xp="[object Proxy]",ti="[object RegExp]",me="[object Set]",ei="[object String]",uo="[object Symbol]",Qp="[object Undefined]",ni="[object WeakMap]",tm="[object WeakSet]",ri="[object ArrayBuffer]",pr="[object DataView]",zs="[object Float32Array]",Us="[object Float64Array]",Ws="[object Int8Array]",Bs="[object Int16Array]",Gs="[object Int32Array]",Vs="[object Uint8Array]",Zs="[object Uint8ClampedArray]",qs="[object Uint16Array]",Ys="[object Uint32Array]",em=/\b__p \+= '';/g,nm=/\b(__p \+=) '' \+/g,rm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Pu=/&(?:amp|lt|gt|quot|#39);/g,Fu=/[&<>"']/g,im=RegExp(Pu.source),om=RegExp(Fu.source),sm=/<%-([\s\S]+?)%>/g,am=/<%([\s\S]+?)%>/g,ku=/<%=([\s\S]+?)%>/g,lm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,um=/^\w*$/,cm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Js=/[\\^$.*+?()[\]{}|]/g,dm=RegExp(Js.source),Ks=/^\s+/,fm=/\s/,hm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,pm=/\{\n\/\* \[wrapped with (.+)\] \*/,mm=/,? & /,gm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,vm=/[()=,{}\[\]\/\s]/,ym=/\\(\\)?/g,_m=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Hu=/\w*$/,wm=/^[-+]0x[0-9a-f]+$/i,xm=/^0b[01]+$/i,bm=/^\[object .+?Constructor\]$/,Em=/^0o[0-7]+$/i,Tm=/^(?:0|[1-9]\d*)$/,Sm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,co=/($^)/,Am=/['\n\r\u2028\u2029\\]/g,fo="\\ud800-\\udfff",Om="\\u0300-\\u036f",Cm="\\ufe20-\\ufe2f",$m="\\u20d0-\\u20ff",zu=Om+Cm+$m,Uu="\\u2700-\\u27bf",Wu="a-z\\xdf-\\xf6\\xf8-\\xff",Im="\\xac\\xb1\\xd7\\xf7",Lm="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Mm="\\u2000-\\u206f",Nm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Bu="A-Z\\xc0-\\xd6\\xd8-\\xde",Gu="\\ufe0e\\ufe0f",Vu=Im+Lm+Mm+Nm,js="['\u2019]",Rm="["+fo+"]",Zu="["+Vu+"]",ho="["+zu+"]",qu="\\d+",Dm="["+Uu+"]",Yu="["+Wu+"]",Ju="[^"+fo+Vu+qu+Uu+Wu+Bu+"]",Xs="\\ud83c[\\udffb-\\udfff]",Pm="(?:"+ho+"|"+Xs+")",Ku="[^"+fo+"]",Qs="(?:\\ud83c[\\udde6-\\uddff]){2}",ta="[\\ud800-\\udbff][\\udc00-\\udfff]",mr="["+Bu+"]",ju="\\u200d",Xu="(?:"+Yu+"|"+Ju+")",Fm="(?:"+mr+"|"+Ju+")",Qu="(?:"+js+"(?:d|ll|m|re|s|t|ve))?",tc="(?:"+js+"(?:D|LL|M|RE|S|T|VE))?",ec=Pm+"?",nc="["+Gu+"]?",km="(?:"+ju+"(?:"+[Ku,Qs,ta].join("|")+")"+nc+ec+")*",Hm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",zm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",rc=nc+ec+km,Um="(?:"+[Dm,Qs,ta].join("|")+")"+rc,Wm="(?:"+[Ku+ho+"?",ho,Qs,ta,Rm].join("|")+")",Bm=RegExp(js,"g"),Gm=RegExp(ho,"g"),ea=RegExp(Xs+"(?="+Xs+")|"+Wm+rc,"g"),Vm=RegExp([mr+"?"+Yu+"+"+Qu+"(?="+[Zu,mr,"$"].join("|")+")",Fm+"+"+tc+"(?="+[Zu,mr+Xu,"$"].join("|")+")",mr+"?"+Xu+"+"+Qu,mr+"+"+tc,zm,Hm,qu,Um].join("|"),"g"),Zm=RegExp("["+ju+fo+zu+Gu+"]"),qm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ym=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Jm=-1,mt={};mt[zs]=mt[Us]=mt[Ws]=mt[Bs]=mt[Gs]=mt[Vs]=mt[Zs]=mt[qs]=mt[Ys]=!0,mt[hr]=mt[so]=mt[ri]=mt[jr]=mt[pr]=mt[Xr]=mt[ao]=mt[lo]=mt[pe]=mt[Qr]=mt[Le]=mt[ti]=mt[me]=mt[ei]=mt[ni]=!1;var pt={};pt[hr]=pt[so]=pt[ri]=pt[pr]=pt[jr]=pt[Xr]=pt[zs]=pt[Us]=pt[Ws]=pt[Bs]=pt[Gs]=pt[pe]=pt[Qr]=pt[Le]=pt[ti]=pt[me]=pt[ei]=pt[uo]=pt[Vs]=pt[Zs]=pt[qs]=pt[Ys]=!0,pt[ao]=pt[lo]=pt[ni]=!1;var Km={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},jm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Xm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Qm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},tg=parseFloat,eg=parseInt,ic=typeof global=="object"&&global&&global.Object===Object&&global,ng=typeof self=="object"&&self&&self.Object===Object&&self,$t=ic||ng||Function("return this")(),na=typeof Ir=="object"&&Ir&&!Ir.nodeType&&Ir,wn=na&&typeof $i=="object"&&$i&&!$i.nodeType&&$i,oc=wn&&wn.exports===na,ra=oc&&ic.process,ne=function(){try{var w=wn&&wn.require&&wn.require("util").types;return w||ra&&ra.binding&&ra.binding("util")}catch(E){}}(),sc=ne&&ne.isArrayBuffer,ac=ne&&ne.isDate,lc=ne&&ne.isMap,uc=ne&&ne.isRegExp,cc=ne&&ne.isSet,dc=ne&&ne.isTypedArray;function Jt(w,E,b){switch(b.length){case 0:return w.call(E);case 1:return w.call(E,b[0]);case 2:return w.call(E,b[0],b[1]);case 3:return w.call(E,b[0],b[1],b[2])}return w.apply(E,b)}function rg(w,E,b,P){for(var V=-1,ot=w==null?0:w.length;++V<ot;){var At=w[V];E(P,At,b(At),w)}return P}function re(w,E){for(var b=-1,P=w==null?0:w.length;++b<P&&E(w[b],b,w)!==!1;);return w}function ig(w,E){for(var b=w==null?0:w.length;b--&&E(w[b],b,w)!==!1;);return w}function fc(w,E){for(var b=-1,P=w==null?0:w.length;++b<P;)if(!E(w[b],b,w))return!1;return!0}function Ke(w,E){for(var b=-1,P=w==null?0:w.length,V=0,ot=[];++b<P;){var At=w[b];E(At,b,w)&&(ot[V++]=At)}return ot}function po(w,E){var b=w==null?0:w.length;return!!b&&gr(w,E,0)>-1}function ia(w,E,b){for(var P=-1,V=w==null?0:w.length;++P<V;)if(b(E,w[P]))return!0;return!1}function yt(w,E){for(var b=-1,P=w==null?0:w.length,V=Array(P);++b<P;)V[b]=E(w[b],b,w);return V}function je(w,E){for(var b=-1,P=E.length,V=w.length;++b<P;)w[V+b]=E[b];return w}function oa(w,E,b,P){var V=-1,ot=w==null?0:w.length;for(P&&ot&&(b=w[++V]);++V<ot;)b=E(b,w[V],V,w);return b}function og(w,E,b,P){var V=w==null?0:w.length;for(P&&V&&(b=w[--V]);V--;)b=E(b,w[V],V,w);return b}function sa(w,E){for(var b=-1,P=w==null?0:w.length;++b<P;)if(E(w[b],b,w))return!0;return!1}var sg=aa("length");function ag(w){return w.split("")}function lg(w){return w.match(gm)||[]}function hc(w,E,b){var P;return b(w,function(V,ot,At){if(E(V,ot,At))return P=ot,!1}),P}function mo(w,E,b,P){for(var V=w.length,ot=b+(P?1:-1);P?ot--:++ot<V;)if(E(w[ot],ot,w))return ot;return-1}function gr(w,E,b){return E===E?wg(w,E,b):mo(w,pc,b)}function ug(w,E,b,P){for(var V=b-1,ot=w.length;++V<ot;)if(P(w[V],E))return V;return-1}function pc(w){return w!==w}function mc(w,E){var b=w==null?0:w.length;return b?ua(w,E)/b:oo}function aa(w){return function(E){return E==null?i:E[w]}}function la(w){return function(E){return w==null?i:w[E]}}function gc(w,E,b,P,V){return V(w,function(ot,At,ft){b=P?(P=!1,ot):E(b,ot,At,ft)}),b}function cg(w,E){var b=w.length;for(w.sort(E);b--;)w[b]=w[b].value;return w}function ua(w,E){for(var b,P=-1,V=w.length;++P<V;){var ot=E(w[P]);ot!==i&&(b=b===i?ot:b+ot)}return b}function ca(w,E){for(var b=-1,P=Array(w);++b<w;)P[b]=E(b);return P}function dg(w,E){return yt(E,function(b){return[b,w[b]]})}function vc(w){return w&&w.slice(0,xc(w)+1).replace(Ks,"")}function Kt(w){return function(E){return w(E)}}function da(w,E){return yt(E,function(b){return w[b]})}function ii(w,E){return w.has(E)}function yc(w,E){for(var b=-1,P=w.length;++b<P&&gr(E,w[b],0)>-1;);return b}function _c(w,E){for(var b=w.length;b--&&gr(E,w[b],0)>-1;);return b}function fg(w,E){for(var b=w.length,P=0;b--;)w[b]===E&&++P;return P}var hg=la(Km),pg=la(jm);function mg(w){return"\\"+Qm[w]}function gg(w,E){return w==null?i:w[E]}function vr(w){return Zm.test(w)}function vg(w){return qm.test(w)}function yg(w){for(var E,b=[];!(E=w.next()).done;)b.push(E.value);return b}function fa(w){var E=-1,b=Array(w.size);return w.forEach(function(P,V){b[++E]=[V,P]}),b}function wc(w,E){return function(b){return w(E(b))}}function Xe(w,E){for(var b=-1,P=w.length,V=0,ot=[];++b<P;){var At=w[b];(At===E||At===m)&&(w[b]=m,ot[V++]=b)}return ot}function go(w){var E=-1,b=Array(w.size);return w.forEach(function(P){b[++E]=P}),b}function _g(w){var E=-1,b=Array(w.size);return w.forEach(function(P){b[++E]=[P,P]}),b}function wg(w,E,b){for(var P=b-1,V=w.length;++P<V;)if(w[P]===E)return P;return-1}function xg(w,E,b){for(var P=b+1;P--;)if(w[P]===E)return P;return P}function yr(w){return vr(w)?Eg(w):sg(w)}function ge(w){return vr(w)?Tg(w):ag(w)}function xc(w){for(var E=w.length;E--&&fm.test(w.charAt(E)););return E}var bg=la(Xm);function Eg(w){for(var E=ea.lastIndex=0;ea.test(w);)++E;return E}function Tg(w){return w.match(ea)||[]}function Sg(w){return w.match(Vm)||[]}var Ag=function w(E){E=E==null?$t:Qe.defaults($t.Object(),E,Qe.pick($t,Ym));var b=E.Array,P=E.Date,V=E.Error,ot=E.Function,At=E.Math,ft=E.Object,ha=E.RegExp,Og=E.String,ie=E.TypeError,vo=b.prototype,Cg=ot.prototype,_r=ft.prototype,yo=E["__core-js_shared__"],_o=Cg.toString,dt=_r.hasOwnProperty,$g=0,bc=function(){var t=/[^.]+$/.exec(yo&&yo.keys&&yo.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),wo=_r.toString,Ig=_o.call(ft),Lg=$t._,Mg=ha("^"+_o.call(dt).replace(Js,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),xo=oc?E.Buffer:i,tn=E.Symbol,bo=E.Uint8Array,Ec=xo?xo.allocUnsafe:i,Eo=wc(ft.getPrototypeOf,ft),Tc=ft.create,Sc=_r.propertyIsEnumerable,To=vo.splice,Ac=tn?tn.isConcatSpreadable:i,oi=tn?tn.iterator:i,xn=tn?tn.toStringTag:i,So=function(){try{var t=An(ft,"defineProperty");return t({},"",{}),t}catch(n){}}(),Ng=E.clearTimeout!==$t.clearTimeout&&E.clearTimeout,Rg=P&&P.now!==$t.Date.now&&P.now,Dg=E.setTimeout!==$t.setTimeout&&E.setTimeout,Ao=At.ceil,Oo=At.floor,pa=ft.getOwnPropertySymbols,Pg=xo?xo.isBuffer:i,Oc=E.isFinite,Fg=vo.join,kg=wc(ft.keys,ft),Ot=At.max,Ft=At.min,Hg=P.now,zg=E.parseInt,Cc=At.random,Ug=vo.reverse,ma=An(E,"DataView"),si=An(E,"Map"),ga=An(E,"Promise"),wr=An(E,"Set"),ai=An(E,"WeakMap"),li=An(ft,"create"),Co=ai&&new ai,xr={},Wg=On(ma),Bg=On(si),Gg=On(ga),Vg=On(wr),Zg=On(ai),$o=tn?tn.prototype:i,ui=$o?$o.valueOf:i,$c=$o?$o.toString:i;function f(t){if(Et(t)&&!Z(t)&&!(t instanceof nt)){if(t instanceof oe)return t;if(dt.call(t,"__wrapped__"))return Id(t)}return new oe(t)}var br=function(){function t(){}return function(n){if(!_t(n))return{};if(Tc)return Tc(n);t.prototype=n;var s=new t;return t.prototype=i,s}}();function Io(){}function oe(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=i}f.templateSettings={escape:sm,evaluate:am,interpolate:ku,variable:"",imports:{_:f}},f.prototype=Io.prototype,f.prototype.constructor=f,oe.prototype=br(Io.prototype),oe.prototype.constructor=oe;function nt(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Te,this.__views__=[]}function qg(){var t=new nt(this.__wrapped__);return t.__actions__=Wt(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Wt(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Wt(this.__views__),t}function Yg(){if(this.__filtered__){var t=new nt(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Jg(){var t=this.__wrapped__.value(),n=this.__dir__,s=Z(t),l=n<0,d=s?t.length:0,h=ay(0,d,this.__views__),g=h.start,y=h.end,x=y-g,A=l?y:g-1,O=this.__iteratees__,$=O.length,R=0,F=Ft(x,this.__takeCount__);if(!s||!l&&d==x&&F==x)return Qc(t,this.__actions__);var U=[];t:for(;x--&&R<F;){A+=n;for(var J=-1,W=t[A];++J<$;){var et=O[J],rt=et.iteratee,Qt=et.type,Ut=rt(W);if(Qt==Bp)W=Ut;else if(!Ut){if(Qt==Nu)continue t;break t}}U[R++]=W}return U}nt.prototype=br(Io.prototype),nt.prototype.constructor=nt;function bn(t){var n=-1,s=t==null?0:t.length;for(this.clear();++n<s;){var l=t[n];this.set(l[0],l[1])}}function Kg(){this.__data__=li?li(null):{},this.size=0}function jg(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}function Xg(t){var n=this.__data__;if(li){var s=n[t];return s===c?i:s}return dt.call(n,t)?n[t]:i}function Qg(t){var n=this.__data__;return li?n[t]!==i:dt.call(n,t)}function tv(t,n){var s=this.__data__;return this.size+=this.has(t)?0:1,s[t]=li&&n===i?c:n,this}bn.prototype.clear=Kg,bn.prototype.delete=jg,bn.prototype.get=Xg,bn.prototype.has=Qg,bn.prototype.set=tv;function Me(t){var n=-1,s=t==null?0:t.length;for(this.clear();++n<s;){var l=t[n];this.set(l[0],l[1])}}function ev(){this.__data__=[],this.size=0}function nv(t){var n=this.__data__,s=Lo(n,t);if(s<0)return!1;var l=n.length-1;return s==l?n.pop():To.call(n,s,1),--this.size,!0}function rv(t){var n=this.__data__,s=Lo(n,t);return s<0?i:n[s][1]}function iv(t){return Lo(this.__data__,t)>-1}function ov(t,n){var s=this.__data__,l=Lo(s,t);return l<0?(++this.size,s.push([t,n])):s[l][1]=n,this}Me.prototype.clear=ev,Me.prototype.delete=nv,Me.prototype.get=rv,Me.prototype.has=iv,Me.prototype.set=ov;function Ne(t){var n=-1,s=t==null?0:t.length;for(this.clear();++n<s;){var l=t[n];this.set(l[0],l[1])}}function sv(){this.size=0,this.__data__={hash:new bn,map:new(si||Me),string:new bn}}function av(t){var n=Bo(this,t).delete(t);return this.size-=n?1:0,n}function lv(t){return Bo(this,t).get(t)}function uv(t){return Bo(this,t).has(t)}function cv(t,n){var s=Bo(this,t),l=s.size;return s.set(t,n),this.size+=s.size==l?0:1,this}Ne.prototype.clear=sv,Ne.prototype.delete=av,Ne.prototype.get=lv,Ne.prototype.has=uv,Ne.prototype.set=cv;function En(t){var n=-1,s=t==null?0:t.length;for(this.__data__=new Ne;++n<s;)this.add(t[n])}function dv(t){return this.__data__.set(t,c),this}function fv(t){return this.__data__.has(t)}En.prototype.add=En.prototype.push=dv,En.prototype.has=fv;function ve(t){var n=this.__data__=new Me(t);this.size=n.size}function hv(){this.__data__=new Me,this.size=0}function pv(t){var n=this.__data__,s=n.delete(t);return this.size=n.size,s}function mv(t){return this.__data__.get(t)}function gv(t){return this.__data__.has(t)}function vv(t,n){var s=this.__data__;if(s instanceof Me){var l=s.__data__;if(!si||l.length<r-1)return l.push([t,n]),this.size=++s.size,this;s=this.__data__=new Ne(l)}return s.set(t,n),this.size=s.size,this}ve.prototype.clear=hv,ve.prototype.delete=pv,ve.prototype.get=mv,ve.prototype.has=gv,ve.prototype.set=vv;function Ic(t,n){var s=Z(t),l=!s&&Cn(t),d=!s&&!l&&sn(t),h=!s&&!l&&!d&&Ar(t),g=s||l||d||h,y=g?ca(t.length,Og):[],x=y.length;for(var A in t)(n||dt.call(t,A))&&!(g&&(A=="length"||d&&(A=="offset"||A=="parent")||h&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||Fe(A,x)))&&y.push(A);return y}function Lc(t){var n=t.length;return n?t[Oa(0,n-1)]:i}function yv(t,n){return Go(Wt(t),Tn(n,0,t.length))}function _v(t){return Go(Wt(t))}function va(t,n,s){(s!==i&&!ye(t[n],s)||s===i&&!(n in t))&&Re(t,n,s)}function ci(t,n,s){var l=t[n];(!(dt.call(t,n)&&ye(l,s))||s===i&&!(n in t))&&Re(t,n,s)}function Lo(t,n){for(var s=t.length;s--;)if(ye(t[s][0],n))return s;return-1}function wv(t,n,s,l){return en(t,function(d,h,g){n(l,d,s(d),g)}),l}function Mc(t,n){return t&&Ae(n,It(n),t)}function xv(t,n){return t&&Ae(n,Gt(n),t)}function Re(t,n,s){n=="__proto__"&&So?So(t,n,{configurable:!0,enumerable:!0,value:s,writable:!0}):t[n]=s}function ya(t,n){for(var s=-1,l=n.length,d=b(l),h=t==null;++s<l;)d[s]=h?i:Xa(t,n[s]);return d}function Tn(t,n,s){return t===t&&(s!==i&&(t=t<=s?t:s),n!==i&&(t=t>=n?t:n)),t}function se(t,n,s,l,d,h){var g,y=n&_,x=n&T,A=n&S;if(s&&(g=d?s(t,l,d,h):s(t)),g!==i)return g;if(!_t(t))return t;var O=Z(t);if(O){if(g=uy(t),!y)return Wt(t,g)}else{var $=kt(t),R=$==lo||$==Ru;if(sn(t))return nd(t,y);if($==Le||$==hr||R&&!d){if(g=x||R?{}:xd(t),!y)return x?Xv(t,xv(g,t)):jv(t,Mc(g,t))}else{if(!pt[$])return d?t:{};g=cy(t,$,y)}}h||(h=new ve);var F=h.get(t);if(F)return F;h.set(t,g),Kd(t)?t.forEach(function(W){g.add(se(W,n,s,W,t,h))}):Yd(t)&&t.forEach(function(W,et){g.set(et,se(W,n,s,et,t,h))});var U=A?x?ka:Fa:x?Gt:It,J=O?i:U(t);return re(J||t,function(W,et){J&&(et=W,W=t[et]),ci(g,et,se(W,n,s,et,t,h))}),g}function bv(t){var n=It(t);return function(s){return Nc(s,t,n)}}function Nc(t,n,s){var l=s.length;if(t==null)return!l;for(t=ft(t);l--;){var d=s[l],h=n[d],g=t[d];if(g===i&&!(d in t)||!h(g))return!1}return!0}function Rc(t,n,s){if(typeof t!="function")throw new ie(a);return vi(function(){t.apply(i,s)},n)}function di(t,n,s,l){var d=-1,h=po,g=!0,y=t.length,x=[],A=n.length;if(!y)return x;s&&(n=yt(n,Kt(s))),l?(h=ia,g=!1):n.length>=r&&(h=ii,g=!1,n=new En(n));t:for(;++d<y;){var O=t[d],$=s==null?O:s(O);if(O=l||O!==0?O:0,g&&$===$){for(var R=A;R--;)if(n[R]===$)continue t;x.push(O)}else h(n,$,l)||x.push(O)}return x}var en=ad(Se),Dc=ad(wa,!0);function Ev(t,n){var s=!0;return en(t,function(l,d,h){return s=!!n(l,d,h),s}),s}function Mo(t,n,s){for(var l=-1,d=t.length;++l<d;){var h=t[l],g=n(h);if(g!=null&&(y===i?g===g&&!Xt(g):s(g,y)))var y=g,x=h}return x}function Tv(t,n,s,l){var d=t.length;for(s=q(s),s<0&&(s=-s>d?0:d+s),l=l===i||l>d?d:q(l),l<0&&(l+=d),l=s>l?0:Xd(l);s<l;)t[s++]=n;return t}function Pc(t,n){var s=[];return en(t,function(l,d,h){n(l,d,h)&&s.push(l)}),s}function Pt(t,n,s,l,d){var h=-1,g=t.length;for(s||(s=fy),d||(d=[]);++h<g;){var y=t[h];n>0&&s(y)?n>1?Pt(y,n-1,s,l,d):je(d,y):l||(d[d.length]=y)}return d}var _a=ld(),Fc=ld(!0);function Se(t,n){return t&&_a(t,n,It)}function wa(t,n){return t&&Fc(t,n,It)}function No(t,n){return Ke(n,function(s){return ke(t[s])})}function Sn(t,n){n=rn(n,t);for(var s=0,l=n.length;t!=null&&s<l;)t=t[Oe(n[s++])];return s&&s==l?t:i}function kc(t,n,s){var l=n(t);return Z(t)?l:je(l,s(t))}function Ht(t){return t==null?t===i?Qp:jp:xn&&xn in ft(t)?sy(t):_y(t)}function xa(t,n){return t>n}function Sv(t,n){return t!=null&&dt.call(t,n)}function Av(t,n){return t!=null&&n in ft(t)}function Ov(t,n,s){return t>=Ft(n,s)&&t<Ot(n,s)}function ba(t,n,s){for(var l=s?ia:po,d=t[0].length,h=t.length,g=h,y=b(h),x=1/0,A=[];g--;){var O=t[g];g&&n&&(O=yt(O,Kt(n))),x=Ft(O.length,x),y[g]=!s&&(n||d>=120&&O.length>=120)?new En(g&&O):i}O=t[0];var $=-1,R=y[0];t:for(;++$<d&&A.length<x;){var F=O[$],U=n?n(F):F;if(F=s||F!==0?F:0,!(R?ii(R,U):l(A,U,s))){for(g=h;--g;){var J=y[g];if(!(J?ii(J,U):l(t[g],U,s)))continue t}R&&R.push(U),A.push(F)}}return A}function Cv(t,n,s,l){return Se(t,function(d,h,g){n(l,s(d),h,g)}),l}function fi(t,n,s){n=rn(n,t),t=Sd(t,n);var l=t==null?t:t[Oe(le(n))];return l==null?i:Jt(l,t,s)}function Hc(t){return Et(t)&&Ht(t)==hr}function $v(t){return Et(t)&&Ht(t)==ri}function Iv(t){return Et(t)&&Ht(t)==Xr}function hi(t,n,s,l,d){return t===n?!0:t==null||n==null||!Et(t)&&!Et(n)?t!==t&&n!==n:Lv(t,n,s,l,hi,d)}function Lv(t,n,s,l,d,h){var g=Z(t),y=Z(n),x=g?so:kt(t),A=y?so:kt(n);x=x==hr?Le:x,A=A==hr?Le:A;var O=x==Le,$=A==Le,R=x==A;if(R&&sn(t)){if(!sn(n))return!1;g=!0,O=!1}if(R&&!O)return h||(h=new ve),g||Ar(t)?yd(t,n,s,l,d,h):iy(t,n,x,s,l,d,h);if(!(s&N)){var F=O&&dt.call(t,"__wrapped__"),U=$&&dt.call(n,"__wrapped__");if(F||U){var J=F?t.value():t,W=U?n.value():n;return h||(h=new ve),d(J,W,s,l,h)}}return R?(h||(h=new ve),oy(t,n,s,l,d,h)):!1}function Mv(t){return Et(t)&&kt(t)==pe}function Ea(t,n,s,l){var d=s.length,h=d,g=!l;if(t==null)return!h;for(t=ft(t);d--;){var y=s[d];if(g&&y[2]?y[1]!==t[y[0]]:!(y[0]in t))return!1}for(;++d<h;){y=s[d];var x=y[0],A=t[x],O=y[1];if(g&&y[2]){if(A===i&&!(x in t))return!1}else{var $=new ve;if(l)var R=l(A,O,x,t,n,$);if(!(R===i?hi(O,A,N|I,l,$):R))return!1}}return!0}function zc(t){if(!_t(t)||py(t))return!1;var n=ke(t)?Mg:bm;return n.test(On(t))}function Nv(t){return Et(t)&&Ht(t)==ti}function Rv(t){return Et(t)&&kt(t)==me}function Dv(t){return Et(t)&&Ko(t.length)&&!!mt[Ht(t)]}function Uc(t){return typeof t=="function"?t:t==null?Vt:typeof t=="object"?Z(t)?Gc(t[0],t[1]):Bc(t):cf(t)}function Ta(t){if(!gi(t))return kg(t);var n=[];for(var s in ft(t))dt.call(t,s)&&s!="constructor"&&n.push(s);return n}function Pv(t){if(!_t(t))return yy(t);var n=gi(t),s=[];for(var l in t)l=="constructor"&&(n||!dt.call(t,l))||s.push(l);return s}function Sa(t,n){return t<n}function Wc(t,n){var s=-1,l=Bt(t)?b(t.length):[];return en(t,function(d,h,g){l[++s]=n(d,h,g)}),l}function Bc(t){var n=za(t);return n.length==1&&n[0][2]?Ed(n[0][0],n[0][1]):function(s){return s===t||Ea(s,t,n)}}function Gc(t,n){return Wa(t)&&bd(n)?Ed(Oe(t),n):function(s){var l=Xa(s,t);return l===i&&l===n?Qa(s,t):hi(n,l,N|I)}}function Ro(t,n,s,l,d){t!==n&&_a(n,function(h,g){if(d||(d=new ve),_t(h))Fv(t,n,g,s,Ro,l,d);else{var y=l?l(Ga(t,g),h,g+"",t,n,d):i;y===i&&(y=h),va(t,g,y)}},Gt)}function Fv(t,n,s,l,d,h,g){var y=Ga(t,s),x=Ga(n,s),A=g.get(x);if(A){va(t,s,A);return}var O=h?h(y,x,s+"",t,n,g):i,$=O===i;if($){var R=Z(x),F=!R&&sn(x),U=!R&&!F&&Ar(x);O=x,R||F||U?Z(y)?O=y:Tt(y)?O=Wt(y):F?($=!1,O=nd(x,!0)):U?($=!1,O=rd(x,!0)):O=[]:yi(x)||Cn(x)?(O=y,Cn(y)?O=Qd(y):(!_t(y)||ke(y))&&(O=xd(x))):$=!1}$&&(g.set(x,O),d(O,x,l,h,g),g.delete(x)),va(t,s,O)}function Vc(t,n){var s=t.length;if(!!s)return n+=n<0?s:0,Fe(n,s)?t[n]:i}function Zc(t,n,s){n.length?n=yt(n,function(h){return Z(h)?function(g){return Sn(g,h.length===1?h[0]:h)}:h}):n=[Vt];var l=-1;n=yt(n,Kt(z()));var d=Wc(t,function(h,g,y){var x=yt(n,function(A){return A(h)});return{criteria:x,index:++l,value:h}});return cg(d,function(h,g){return Kv(h,g,s)})}function kv(t,n){return qc(t,n,function(s,l){return Qa(t,l)})}function qc(t,n,s){for(var l=-1,d=n.length,h={};++l<d;){var g=n[l],y=Sn(t,g);s(y,g)&&pi(h,rn(g,t),y)}return h}function Hv(t){return function(n){return Sn(n,t)}}function Aa(t,n,s,l){var d=l?ug:gr,h=-1,g=n.length,y=t;for(t===n&&(n=Wt(n)),s&&(y=yt(t,Kt(s)));++h<g;)for(var x=0,A=n[h],O=s?s(A):A;(x=d(y,O,x,l))>-1;)y!==t&&To.call(y,x,1),To.call(t,x,1);return t}function Yc(t,n){for(var s=t?n.length:0,l=s-1;s--;){var d=n[s];if(s==l||d!==h){var h=d;Fe(d)?To.call(t,d,1):Ia(t,d)}}return t}function Oa(t,n){return t+Oo(Cc()*(n-t+1))}function zv(t,n,s,l){for(var d=-1,h=Ot(Ao((n-t)/(s||1)),0),g=b(h);h--;)g[l?h:++d]=t,t+=s;return g}function Ca(t,n){var s="";if(!t||n<1||n>Je)return s;do n%2&&(s+=t),n=Oo(n/2),n&&(t+=t);while(n);return s}function Q(t,n){return Va(Td(t,n,Vt),t+"")}function Uv(t){return Lc(Or(t))}function Wv(t,n){var s=Or(t);return Go(s,Tn(n,0,s.length))}function pi(t,n,s,l){if(!_t(t))return t;n=rn(n,t);for(var d=-1,h=n.length,g=h-1,y=t;y!=null&&++d<h;){var x=Oe(n[d]),A=s;if(x==="__proto__"||x==="constructor"||x==="prototype")return t;if(d!=g){var O=y[x];A=l?l(O,x,y):i,A===i&&(A=_t(O)?O:Fe(n[d+1])?[]:{})}ci(y,x,A),y=y[x]}return t}var Jc=Co?function(t,n){return Co.set(t,n),t}:Vt,Bv=So?function(t,n){return So(t,"toString",{configurable:!0,enumerable:!1,value:el(n),writable:!0})}:Vt;function Gv(t){return Go(Or(t))}function ae(t,n,s){var l=-1,d=t.length;n<0&&(n=-n>d?0:d+n),s=s>d?d:s,s<0&&(s+=d),d=n>s?0:s-n>>>0,n>>>=0;for(var h=b(d);++l<d;)h[l]=t[l+n];return h}function Vv(t,n){var s;return en(t,function(l,d,h){return s=n(l,d,h),!s}),!!s}function Do(t,n,s){var l=0,d=t==null?l:t.length;if(typeof n=="number"&&n===n&&d<=qp){for(;l<d;){var h=l+d>>>1,g=t[h];g!==null&&!Xt(g)&&(s?g<=n:g<n)?l=h+1:d=h}return d}return $a(t,n,Vt,s)}function $a(t,n,s,l){var d=0,h=t==null?0:t.length;if(h===0)return 0;n=s(n);for(var g=n!==n,y=n===null,x=Xt(n),A=n===i;d<h;){var O=Oo((d+h)/2),$=s(t[O]),R=$!==i,F=$===null,U=$===$,J=Xt($);if(g)var W=l||U;else A?W=U&&(l||R):y?W=U&&R&&(l||!F):x?W=U&&R&&!F&&(l||!J):F||J?W=!1:W=l?$<=n:$<n;W?d=O+1:h=O}return Ft(h,Zp)}function Kc(t,n){for(var s=-1,l=t.length,d=0,h=[];++s<l;){var g=t[s],y=n?n(g):g;if(!s||!ye(y,x)){var x=y;h[d++]=g===0?0:g}}return h}function jc(t){return typeof t=="number"?t:Xt(t)?oo:+t}function jt(t){if(typeof t=="string")return t;if(Z(t))return yt(t,jt)+"";if(Xt(t))return $c?$c.call(t):"";var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function nn(t,n,s){var l=-1,d=po,h=t.length,g=!0,y=[],x=y;if(s)g=!1,d=ia;else if(h>=r){var A=n?null:ny(t);if(A)return go(A);g=!1,d=ii,x=new En}else x=n?[]:y;t:for(;++l<h;){var O=t[l],$=n?n(O):O;if(O=s||O!==0?O:0,g&&$===$){for(var R=x.length;R--;)if(x[R]===$)continue t;n&&x.push($),y.push(O)}else d(x,$,s)||(x!==y&&x.push($),y.push(O))}return y}function Ia(t,n){return n=rn(n,t),t=Sd(t,n),t==null||delete t[Oe(le(n))]}function Xc(t,n,s,l){return pi(t,n,s(Sn(t,n)),l)}function Po(t,n,s,l){for(var d=t.length,h=l?d:-1;(l?h--:++h<d)&&n(t[h],h,t););return s?ae(t,l?0:h,l?h+1:d):ae(t,l?h+1:0,l?d:h)}function Qc(t,n){var s=t;return s instanceof nt&&(s=s.value()),oa(n,function(l,d){return d.func.apply(d.thisArg,je([l],d.args))},s)}function La(t,n,s){var l=t.length;if(l<2)return l?nn(t[0]):[];for(var d=-1,h=b(l);++d<l;)for(var g=t[d],y=-1;++y<l;)y!=d&&(h[d]=di(h[d]||g,t[y],n,s));return nn(Pt(h,1),n,s)}function td(t,n,s){for(var l=-1,d=t.length,h=n.length,g={};++l<d;){var y=l<h?n[l]:i;s(g,t[l],y)}return g}function Ma(t){return Tt(t)?t:[]}function Na(t){return typeof t=="function"?t:Vt}function rn(t,n){return Z(t)?t:Wa(t,n)?[t]:$d(at(t))}var Zv=Q;function on(t,n,s){var l=t.length;return s=s===i?l:s,!n&&s>=l?t:ae(t,n,s)}var ed=Ng||function(t){return $t.clearTimeout(t)};function nd(t,n){if(n)return t.slice();var s=t.length,l=Ec?Ec(s):new t.constructor(s);return t.copy(l),l}function Ra(t){var n=new t.constructor(t.byteLength);return new bo(n).set(new bo(t)),n}function qv(t,n){var s=n?Ra(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.byteLength)}function Yv(t){var n=new t.constructor(t.source,Hu.exec(t));return n.lastIndex=t.lastIndex,n}function Jv(t){return ui?ft(ui.call(t)):{}}function rd(t,n){var s=n?Ra(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.length)}function id(t,n){if(t!==n){var s=t!==i,l=t===null,d=t===t,h=Xt(t),g=n!==i,y=n===null,x=n===n,A=Xt(n);if(!y&&!A&&!h&&t>n||h&&g&&x&&!y&&!A||l&&g&&x||!s&&x||!d)return 1;if(!l&&!h&&!A&&t<n||A&&s&&d&&!l&&!h||y&&s&&d||!g&&d||!x)return-1}return 0}function Kv(t,n,s){for(var l=-1,d=t.criteria,h=n.criteria,g=d.length,y=s.length;++l<g;){var x=id(d[l],h[l]);if(x){if(l>=y)return x;var A=s[l];return x*(A=="desc"?-1:1)}}return t.index-n.index}function od(t,n,s,l){for(var d=-1,h=t.length,g=s.length,y=-1,x=n.length,A=Ot(h-g,0),O=b(x+A),$=!l;++y<x;)O[y]=n[y];for(;++d<g;)($||d<h)&&(O[s[d]]=t[d]);for(;A--;)O[y++]=t[d++];return O}function sd(t,n,s,l){for(var d=-1,h=t.length,g=-1,y=s.length,x=-1,A=n.length,O=Ot(h-y,0),$=b(O+A),R=!l;++d<O;)$[d]=t[d];for(var F=d;++x<A;)$[F+x]=n[x];for(;++g<y;)(R||d<h)&&($[F+s[g]]=t[d++]);return $}function Wt(t,n){var s=-1,l=t.length;for(n||(n=b(l));++s<l;)n[s]=t[s];return n}function Ae(t,n,s,l){var d=!s;s||(s={});for(var h=-1,g=n.length;++h<g;){var y=n[h],x=l?l(s[y],t[y],y,s,t):i;x===i&&(x=t[y]),d?Re(s,y,x):ci(s,y,x)}return s}function jv(t,n){return Ae(t,Ua(t),n)}function Xv(t,n){return Ae(t,_d(t),n)}function Fo(t,n){return function(s,l){var d=Z(s)?rg:wv,h=n?n():{};return d(s,t,z(l,2),h)}}function Er(t){return Q(function(n,s){var l=-1,d=s.length,h=d>1?s[d-1]:i,g=d>2?s[2]:i;for(h=t.length>3&&typeof h=="function"?(d--,h):i,g&&zt(s[0],s[1],g)&&(h=d<3?i:h,d=1),n=ft(n);++l<d;){var y=s[l];y&&t(n,y,l,h)}return n})}function ad(t,n){return function(s,l){if(s==null)return s;if(!Bt(s))return t(s,l);for(var d=s.length,h=n?d:-1,g=ft(s);(n?h--:++h<d)&&l(g[h],h,g)!==!1;);return s}}function ld(t){return function(n,s,l){for(var d=-1,h=ft(n),g=l(n),y=g.length;y--;){var x=g[t?y:++d];if(s(h[x],x,h)===!1)break}return n}}function Qv(t,n,s){var l=n&M,d=mi(t);function h(){var g=this&&this!==$t&&this instanceof h?d:t;return g.apply(l?s:this,arguments)}return h}function ud(t){return function(n){n=at(n);var s=vr(n)?ge(n):i,l=s?s[0]:n.charAt(0),d=s?on(s,1).join(""):n.slice(1);return l[t]()+d}}function Tr(t){return function(n){return oa(lf(af(n).replace(Bm,"")),t,"")}}function mi(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var s=br(t.prototype),l=t.apply(s,n);return _t(l)?l:s}}function ty(t,n,s){var l=mi(t);function d(){for(var h=arguments.length,g=b(h),y=h,x=Sr(d);y--;)g[y]=arguments[y];var A=h<3&&g[0]!==x&&g[h-1]!==x?[]:Xe(g,x);if(h-=A.length,h<s)return pd(t,n,ko,d.placeholder,i,g,A,i,i,s-h);var O=this&&this!==$t&&this instanceof d?l:t;return Jt(O,this,g)}return d}function cd(t){return function(n,s,l){var d=ft(n);if(!Bt(n)){var h=z(s,3);n=It(n),s=function(y){return h(d[y],y,d)}}var g=t(n,s,l);return g>-1?d[h?n[g]:g]:i}}function dd(t){return Pe(function(n){var s=n.length,l=s,d=oe.prototype.thru;for(t&&n.reverse();l--;){var h=n[l];if(typeof h!="function")throw new ie(a);if(d&&!g&&Wo(h)=="wrapper")var g=new oe([],!0)}for(l=g?l:s;++l<s;){h=n[l];var y=Wo(h),x=y=="wrapper"?Ha(h):i;x&&Ba(x[0])&&x[1]==(he|vt|Yt|gn)&&!x[4].length&&x[9]==1?g=g[Wo(x[0])].apply(g,x[3]):g=h.length==1&&Ba(h)?g[y]():g.thru(h)}return function(){var A=arguments,O=A[0];if(g&&A.length==1&&Z(O))return g.plant(O).value();for(var $=0,R=s?n[$].apply(this,A):O;++$<s;)R=n[$].call(this,R);return R}})}function ko(t,n,s,l,d,h,g,y,x,A){var O=n&he,$=n&M,R=n&gt,F=n&(vt|qt),U=n&vn,J=R?i:mi(t);function W(){for(var et=arguments.length,rt=b(et),Qt=et;Qt--;)rt[Qt]=arguments[Qt];if(F)var Ut=Sr(W),te=fg(rt,Ut);if(l&&(rt=od(rt,l,d,F)),h&&(rt=sd(rt,h,g,F)),et-=te,F&&et<A){var St=Xe(rt,Ut);return pd(t,n,ko,W.placeholder,s,rt,St,y,x,A-et)}var _e=$?s:this,ze=R?_e[t]:t;return et=rt.length,y?rt=wy(rt,y):U&&et>1&&rt.reverse(),O&&x<et&&(rt.length=x),this&&this!==$t&&this instanceof W&&(ze=J||mi(ze)),ze.apply(_e,rt)}return W}function fd(t,n){return function(s,l){return Cv(s,t,n(l),{})}}function Ho(t,n){return function(s,l){var d;if(s===i&&l===i)return n;if(s!==i&&(d=s),l!==i){if(d===i)return l;typeof s=="string"||typeof l=="string"?(s=jt(s),l=jt(l)):(s=jc(s),l=jc(l)),d=t(s,l)}return d}}function Da(t){return Pe(function(n){return n=yt(n,Kt(z())),Q(function(s){var l=this;return t(n,function(d){return Jt(d,l,s)})})})}function zo(t,n){n=n===i?" ":jt(n);var s=n.length;if(s<2)return s?Ca(n,t):n;var l=Ca(n,Ao(t/yr(n)));return vr(n)?on(ge(l),0,t).join(""):l.slice(0,t)}function ey(t,n,s,l){var d=n&M,h=mi(t);function g(){for(var y=-1,x=arguments.length,A=-1,O=l.length,$=b(O+x),R=this&&this!==$t&&this instanceof g?h:t;++A<O;)$[A]=l[A];for(;x--;)$[A++]=arguments[++y];return Jt(R,d?s:this,$)}return g}function hd(t){return function(n,s,l){return l&&typeof l!="number"&&zt(n,s,l)&&(s=l=i),n=He(n),s===i?(s=n,n=0):s=He(s),l=l===i?n<s?1:-1:He(l),zv(n,s,l,t)}}function Uo(t){return function(n,s){return typeof n=="string"&&typeof s=="string"||(n=ue(n),s=ue(s)),t(n,s)}}function pd(t,n,s,l,d,h,g,y,x,A){var O=n&vt,$=O?g:i,R=O?i:g,F=O?h:i,U=O?i:h;n|=O?Yt:Ye,n&=~(O?Ye:Yt),n&ct||(n&=~(M|gt));var J=[t,n,d,F,$,U,R,y,x,A],W=s.apply(i,J);return Ba(t)&&Ad(W,J),W.placeholder=l,Od(W,t,n)}function Pa(t){var n=At[t];return function(s,l){if(s=ue(s),l=l==null?0:Ft(q(l),292),l&&Oc(s)){var d=(at(s)+"e").split("e"),h=n(d[0]+"e"+(+d[1]+l));return d=(at(h)+"e").split("e"),+(d[0]+"e"+(+d[1]-l))}return n(s)}}var ny=wr&&1/go(new wr([,-0]))[1]==_n?function(t){return new wr(t)}:il;function md(t){return function(n){var s=kt(n);return s==pe?fa(n):s==me?_g(n):dg(n,t(n))}}function De(t,n,s,l,d,h,g,y){var x=n&gt;if(!x&&typeof t!="function")throw new ie(a);var A=l?l.length:0;if(A||(n&=~(Yt|Ye),l=d=i),g=g===i?g:Ot(q(g),0),y=y===i?y:q(y),A-=d?d.length:0,n&Ye){var O=l,$=d;l=d=i}var R=x?i:Ha(t),F=[t,n,s,l,d,O,$,h,g,y];if(R&&vy(F,R),t=F[0],n=F[1],s=F[2],l=F[3],d=F[4],y=F[9]=F[9]===i?x?0:t.length:Ot(F[9]-A,0),!y&&n&(vt|qt)&&(n&=~(vt|qt)),!n||n==M)var U=Qv(t,n,s);else n==vt||n==qt?U=ty(t,n,y):(n==Yt||n==(M|Yt))&&!d.length?U=ey(t,n,s,l):U=ko.apply(i,F);var J=R?Jc:Ad;return Od(J(U,F),t,n)}function gd(t,n,s,l){return t===i||ye(t,_r[s])&&!dt.call(l,s)?n:t}function vd(t,n,s,l,d,h){return _t(t)&&_t(n)&&(h.set(n,t),Ro(t,n,i,vd,h),h.delete(n)),t}function ry(t){return yi(t)?i:t}function yd(t,n,s,l,d,h){var g=s&N,y=t.length,x=n.length;if(y!=x&&!(g&&x>y))return!1;var A=h.get(t),O=h.get(n);if(A&&O)return A==n&&O==t;var $=-1,R=!0,F=s&I?new En:i;for(h.set(t,n),h.set(n,t);++$<y;){var U=t[$],J=n[$];if(l)var W=g?l(J,U,$,n,t,h):l(U,J,$,t,n,h);if(W!==i){if(W)continue;R=!1;break}if(F){if(!sa(n,function(et,rt){if(!ii(F,rt)&&(U===et||d(U,et,s,l,h)))return F.push(rt)})){R=!1;break}}else if(!(U===J||d(U,J,s,l,h))){R=!1;break}}return h.delete(t),h.delete(n),R}function iy(t,n,s,l,d,h,g){switch(s){case pr:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case ri:return!(t.byteLength!=n.byteLength||!h(new bo(t),new bo(n)));case jr:case Xr:case Qr:return ye(+t,+n);case ao:return t.name==n.name&&t.message==n.message;case ti:case ei:return t==n+"";case pe:var y=fa;case me:var x=l&N;if(y||(y=go),t.size!=n.size&&!x)return!1;var A=g.get(t);if(A)return A==n;l|=I,g.set(t,n);var O=yd(y(t),y(n),l,d,h,g);return g.delete(t),O;case uo:if(ui)return ui.call(t)==ui.call(n)}return!1}function oy(t,n,s,l,d,h){var g=s&N,y=Fa(t),x=y.length,A=Fa(n),O=A.length;if(x!=O&&!g)return!1;for(var $=x;$--;){var R=y[$];if(!(g?R in n:dt.call(n,R)))return!1}var F=h.get(t),U=h.get(n);if(F&&U)return F==n&&U==t;var J=!0;h.set(t,n),h.set(n,t);for(var W=g;++$<x;){R=y[$];var et=t[R],rt=n[R];if(l)var Qt=g?l(rt,et,R,n,t,h):l(et,rt,R,t,n,h);if(!(Qt===i?et===rt||d(et,rt,s,l,h):Qt)){J=!1;break}W||(W=R=="constructor")}if(J&&!W){var Ut=t.constructor,te=n.constructor;Ut!=te&&"constructor"in t&&"constructor"in n&&!(typeof Ut=="function"&&Ut instanceof Ut&&typeof te=="function"&&te instanceof te)&&(J=!1)}return h.delete(t),h.delete(n),J}function Pe(t){return Va(Td(t,i,Nd),t+"")}function Fa(t){return kc(t,It,Ua)}function ka(t){return kc(t,Gt,_d)}var Ha=Co?function(t){return Co.get(t)}:il;function Wo(t){for(var n=t.name+"",s=xr[n],l=dt.call(xr,n)?s.length:0;l--;){var d=s[l],h=d.func;if(h==null||h==t)return d.name}return n}function Sr(t){var n=dt.call(f,"placeholder")?f:t;return n.placeholder}function z(){var t=f.iteratee||nl;return t=t===nl?Uc:t,arguments.length?t(arguments[0],arguments[1]):t}function Bo(t,n){var s=t.__data__;return hy(n)?s[typeof n=="string"?"string":"hash"]:s.map}function za(t){for(var n=It(t),s=n.length;s--;){var l=n[s],d=t[l];n[s]=[l,d,bd(d)]}return n}function An(t,n){var s=gg(t,n);return zc(s)?s:i}function sy(t){var n=dt.call(t,xn),s=t[xn];try{t[xn]=i;var l=!0}catch(h){}var d=wo.call(t);return l&&(n?t[xn]=s:delete t[xn]),d}var Ua=pa?function(t){return t==null?[]:(t=ft(t),Ke(pa(t),function(n){return Sc.call(t,n)}))}:ol,_d=pa?function(t){for(var n=[];t;)je(n,Ua(t)),t=Eo(t);return n}:ol,kt=Ht;(ma&&kt(new ma(new ArrayBuffer(1)))!=pr||si&&kt(new si)!=pe||ga&&kt(ga.resolve())!=Du||wr&&kt(new wr)!=me||ai&&kt(new ai)!=ni)&&(kt=function(t){var n=Ht(t),s=n==Le?t.constructor:i,l=s?On(s):"";if(l)switch(l){case Wg:return pr;case Bg:return pe;case Gg:return Du;case Vg:return me;case Zg:return ni}return n});function ay(t,n,s){for(var l=-1,d=s.length;++l<d;){var h=s[l],g=h.size;switch(h.type){case"drop":t+=g;break;case"dropRight":n-=g;break;case"take":n=Ft(n,t+g);break;case"takeRight":t=Ot(t,n-g);break}}return{start:t,end:n}}function ly(t){var n=t.match(pm);return n?n[1].split(mm):[]}function wd(t,n,s){n=rn(n,t);for(var l=-1,d=n.length,h=!1;++l<d;){var g=Oe(n[l]);if(!(h=t!=null&&s(t,g)))break;t=t[g]}return h||++l!=d?h:(d=t==null?0:t.length,!!d&&Ko(d)&&Fe(g,d)&&(Z(t)||Cn(t)))}function uy(t){var n=t.length,s=new t.constructor(n);return n&&typeof t[0]=="string"&&dt.call(t,"index")&&(s.index=t.index,s.input=t.input),s}function xd(t){return typeof t.constructor=="function"&&!gi(t)?br(Eo(t)):{}}function cy(t,n,s){var l=t.constructor;switch(n){case ri:return Ra(t);case jr:case Xr:return new l(+t);case pr:return qv(t,s);case zs:case Us:case Ws:case Bs:case Gs:case Vs:case Zs:case qs:case Ys:return rd(t,s);case pe:return new l;case Qr:case ei:return new l(t);case ti:return Yv(t);case me:return new l;case uo:return Jv(t)}}function dy(t,n){var s=n.length;if(!s)return t;var l=s-1;return n[l]=(s>1?"& ":"")+n[l],n=n.join(s>2?", ":" "),t.replace(hm,`{
/* [wrapped with `+n+`] */
`)}function fy(t){return Z(t)||Cn(t)||!!(Ac&&t&&t[Ac])}function Fe(t,n){var s=typeof t;return n=n==null?Je:n,!!n&&(s=="number"||s!="symbol"&&Tm.test(t))&&t>-1&&t%1==0&&t<n}function zt(t,n,s){if(!_t(s))return!1;var l=typeof n;return(l=="number"?Bt(s)&&Fe(n,s.length):l=="string"&&n in s)?ye(s[n],t):!1}function Wa(t,n){if(Z(t))return!1;var s=typeof t;return s=="number"||s=="symbol"||s=="boolean"||t==null||Xt(t)?!0:um.test(t)||!lm.test(t)||n!=null&&t in ft(n)}function hy(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}function Ba(t){var n=Wo(t),s=f[n];if(typeof s!="function"||!(n in nt.prototype))return!1;if(t===s)return!0;var l=Ha(s);return!!l&&t===l[0]}function py(t){return!!bc&&bc in t}var my=yo?ke:sl;function gi(t){var n=t&&t.constructor,s=typeof n=="function"&&n.prototype||_r;return t===s}function bd(t){return t===t&&!_t(t)}function Ed(t,n){return function(s){return s==null?!1:s[t]===n&&(n!==i||t in ft(s))}}function gy(t){var n=Yo(t,function(l){return s.size===p&&s.clear(),l}),s=n.cache;return n}function vy(t,n){var s=t[1],l=n[1],d=s|l,h=d<(M|gt|he),g=l==he&&s==vt||l==he&&s==gn&&t[7].length<=n[8]||l==(he|gn)&&n[7].length<=n[8]&&s==vt;if(!(h||g))return t;l&M&&(t[2]=n[2],d|=s&M?0:ct);var y=n[3];if(y){var x=t[3];t[3]=x?od(x,y,n[4]):y,t[4]=x?Xe(t[3],m):n[4]}return y=n[5],y&&(x=t[5],t[5]=x?sd(x,y,n[6]):y,t[6]=x?Xe(t[5],m):n[6]),y=n[7],y&&(t[7]=y),l&he&&(t[8]=t[8]==null?n[8]:Ft(t[8],n[8])),t[9]==null&&(t[9]=n[9]),t[0]=n[0],t[1]=d,t}function yy(t){var n=[];if(t!=null)for(var s in ft(t))n.push(s);return n}function _y(t){return wo.call(t)}function Td(t,n,s){return n=Ot(n===i?t.length-1:n,0),function(){for(var l=arguments,d=-1,h=Ot(l.length-n,0),g=b(h);++d<h;)g[d]=l[n+d];d=-1;for(var y=b(n+1);++d<n;)y[d]=l[d];return y[n]=s(g),Jt(t,this,y)}}function Sd(t,n){return n.length<2?t:Sn(t,ae(n,0,-1))}function wy(t,n){for(var s=t.length,l=Ft(n.length,s),d=Wt(t);l--;){var h=n[l];t[l]=Fe(h,s)?d[h]:i}return t}function Ga(t,n){if(!(n==="constructor"&&typeof t[n]=="function")&&n!="__proto__")return t[n]}var Ad=Cd(Jc),vi=Dg||function(t,n){return $t.setTimeout(t,n)},Va=Cd(Bv);function Od(t,n,s){var l=n+"";return Va(t,dy(l,xy(ly(l),s)))}function Cd(t){var n=0,s=0;return function(){var l=Hg(),d=Wp-(l-s);if(s=l,d>0){if(++n>=Up)return arguments[0]}else n=0;return t.apply(i,arguments)}}function Go(t,n){var s=-1,l=t.length,d=l-1;for(n=n===i?l:n;++s<n;){var h=Oa(s,d),g=t[h];t[h]=t[s],t[s]=g}return t.length=n,t}var $d=gy(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(cm,function(s,l,d,h){n.push(d?h.replace(ym,"$1"):l||s)}),n});function Oe(t){if(typeof t=="string"||Xt(t))return t;var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function On(t){if(t!=null){try{return _o.call(t)}catch(n){}try{return t+""}catch(n){}}return""}function xy(t,n){return re(Yp,function(s){var l="_."+s[0];n&s[1]&&!po(t,l)&&t.push(l)}),t.sort()}function Id(t){if(t instanceof nt)return t.clone();var n=new oe(t.__wrapped__,t.__chain__);return n.__actions__=Wt(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}function by(t,n,s){(s?zt(t,n,s):n===i)?n=1:n=Ot(q(n),0);var l=t==null?0:t.length;if(!l||n<1)return[];for(var d=0,h=0,g=b(Ao(l/n));d<l;)g[h++]=ae(t,d,d+=n);return g}function Ey(t){for(var n=-1,s=t==null?0:t.length,l=0,d=[];++n<s;){var h=t[n];h&&(d[l++]=h)}return d}function Ty(){var t=arguments.length;if(!t)return[];for(var n=b(t-1),s=arguments[0],l=t;l--;)n[l-1]=arguments[l];return je(Z(s)?Wt(s):[s],Pt(n,1))}var Sy=Q(function(t,n){return Tt(t)?di(t,Pt(n,1,Tt,!0)):[]}),Ay=Q(function(t,n){var s=le(n);return Tt(s)&&(s=i),Tt(t)?di(t,Pt(n,1,Tt,!0),z(s,2)):[]}),Oy=Q(function(t,n){var s=le(n);return Tt(s)&&(s=i),Tt(t)?di(t,Pt(n,1,Tt,!0),i,s):[]});function Cy(t,n,s){var l=t==null?0:t.length;return l?(n=s||n===i?1:q(n),ae(t,n<0?0:n,l)):[]}function $y(t,n,s){var l=t==null?0:t.length;return l?(n=s||n===i?1:q(n),n=l-n,ae(t,0,n<0?0:n)):[]}function Iy(t,n){return t&&t.length?Po(t,z(n,3),!0,!0):[]}function Ly(t,n){return t&&t.length?Po(t,z(n,3),!0):[]}function My(t,n,s,l){var d=t==null?0:t.length;return d?(s&&typeof s!="number"&&zt(t,n,s)&&(s=0,l=d),Tv(t,n,s,l)):[]}function Ld(t,n,s){var l=t==null?0:t.length;if(!l)return-1;var d=s==null?0:q(s);return d<0&&(d=Ot(l+d,0)),mo(t,z(n,3),d)}function Md(t,n,s){var l=t==null?0:t.length;if(!l)return-1;var d=l-1;return s!==i&&(d=q(s),d=s<0?Ot(l+d,0):Ft(d,l-1)),mo(t,z(n,3),d,!0)}function Nd(t){var n=t==null?0:t.length;return n?Pt(t,1):[]}function Ny(t){var n=t==null?0:t.length;return n?Pt(t,_n):[]}function Ry(t,n){var s=t==null?0:t.length;return s?(n=n===i?1:q(n),Pt(t,n)):[]}function Dy(t){for(var n=-1,s=t==null?0:t.length,l={};++n<s;){var d=t[n];l[d[0]]=d[1]}return l}function Rd(t){return t&&t.length?t[0]:i}function Py(t,n,s){var l=t==null?0:t.length;if(!l)return-1;var d=s==null?0:q(s);return d<0&&(d=Ot(l+d,0)),gr(t,n,d)}function Fy(t){var n=t==null?0:t.length;return n?ae(t,0,-1):[]}var ky=Q(function(t){var n=yt(t,Ma);return n.length&&n[0]===t[0]?ba(n):[]}),Hy=Q(function(t){var n=le(t),s=yt(t,Ma);return n===le(s)?n=i:s.pop(),s.length&&s[0]===t[0]?ba(s,z(n,2)):[]}),zy=Q(function(t){var n=le(t),s=yt(t,Ma);return n=typeof n=="function"?n:i,n&&s.pop(),s.length&&s[0]===t[0]?ba(s,i,n):[]});function Uy(t,n){return t==null?"":Fg.call(t,n)}function le(t){var n=t==null?0:t.length;return n?t[n-1]:i}function Wy(t,n,s){var l=t==null?0:t.length;if(!l)return-1;var d=l;return s!==i&&(d=q(s),d=d<0?Ot(l+d,0):Ft(d,l-1)),n===n?xg(t,n,d):mo(t,pc,d,!0)}function By(t,n){return t&&t.length?Vc(t,q(n)):i}var Gy=Q(Dd);function Dd(t,n){return t&&t.length&&n&&n.length?Aa(t,n):t}function Vy(t,n,s){return t&&t.length&&n&&n.length?Aa(t,n,z(s,2)):t}function Zy(t,n,s){return t&&t.length&&n&&n.length?Aa(t,n,i,s):t}var qy=Pe(function(t,n){var s=t==null?0:t.length,l=ya(t,n);return Yc(t,yt(n,function(d){return Fe(d,s)?+d:d}).sort(id)),l});function Yy(t,n){var s=[];if(!(t&&t.length))return s;var l=-1,d=[],h=t.length;for(n=z(n,3);++l<h;){var g=t[l];n(g,l,t)&&(s.push(g),d.push(l))}return Yc(t,d),s}function Za(t){return t==null?t:Ug.call(t)}function Jy(t,n,s){var l=t==null?0:t.length;return l?(s&&typeof s!="number"&&zt(t,n,s)?(n=0,s=l):(n=n==null?0:q(n),s=s===i?l:q(s)),ae(t,n,s)):[]}function Ky(t,n){return Do(t,n)}function jy(t,n,s){return $a(t,n,z(s,2))}function Xy(t,n){var s=t==null?0:t.length;if(s){var l=Do(t,n);if(l<s&&ye(t[l],n))return l}return-1}function Qy(t,n){return Do(t,n,!0)}function t0(t,n,s){return $a(t,n,z(s,2),!0)}function e0(t,n){var s=t==null?0:t.length;if(s){var l=Do(t,n,!0)-1;if(ye(t[l],n))return l}return-1}function n0(t){return t&&t.length?Kc(t):[]}function r0(t,n){return t&&t.length?Kc(t,z(n,2)):[]}function i0(t){var n=t==null?0:t.length;return n?ae(t,1,n):[]}function o0(t,n,s){return t&&t.length?(n=s||n===i?1:q(n),ae(t,0,n<0?0:n)):[]}function s0(t,n,s){var l=t==null?0:t.length;return l?(n=s||n===i?1:q(n),n=l-n,ae(t,n<0?0:n,l)):[]}function a0(t,n){return t&&t.length?Po(t,z(n,3),!1,!0):[]}function l0(t,n){return t&&t.length?Po(t,z(n,3)):[]}var u0=Q(function(t){return nn(Pt(t,1,Tt,!0))}),c0=Q(function(t){var n=le(t);return Tt(n)&&(n=i),nn(Pt(t,1,Tt,!0),z(n,2))}),d0=Q(function(t){var n=le(t);return n=typeof n=="function"?n:i,nn(Pt(t,1,Tt,!0),i,n)});function f0(t){return t&&t.length?nn(t):[]}function h0(t,n){return t&&t.length?nn(t,z(n,2)):[]}function p0(t,n){return n=typeof n=="function"?n:i,t&&t.length?nn(t,i,n):[]}function qa(t){if(!(t&&t.length))return[];var n=0;return t=Ke(t,function(s){if(Tt(s))return n=Ot(s.length,n),!0}),ca(n,function(s){return yt(t,aa(s))})}function Pd(t,n){if(!(t&&t.length))return[];var s=qa(t);return n==null?s:yt(s,function(l){return Jt(n,i,l)})}var m0=Q(function(t,n){return Tt(t)?di(t,n):[]}),g0=Q(function(t){return La(Ke(t,Tt))}),v0=Q(function(t){var n=le(t);return Tt(n)&&(n=i),La(Ke(t,Tt),z(n,2))}),y0=Q(function(t){var n=le(t);return n=typeof n=="function"?n:i,La(Ke(t,Tt),i,n)}),_0=Q(qa);function w0(t,n){return td(t||[],n||[],ci)}function x0(t,n){return td(t||[],n||[],pi)}var b0=Q(function(t){var n=t.length,s=n>1?t[n-1]:i;return s=typeof s=="function"?(t.pop(),s):i,Pd(t,s)});function Fd(t){var n=f(t);return n.__chain__=!0,n}function E0(t,n){return n(t),t}function Vo(t,n){return n(t)}var T0=Pe(function(t){var n=t.length,s=n?t[0]:0,l=this.__wrapped__,d=function(h){return ya(h,t)};return n>1||this.__actions__.length||!(l instanceof nt)||!Fe(s)?this.thru(d):(l=l.slice(s,+s+(n?1:0)),l.__actions__.push({func:Vo,args:[d],thisArg:i}),new oe(l,this.__chain__).thru(function(h){return n&&!h.length&&h.push(i),h}))});function S0(){return Fd(this)}function A0(){return new oe(this.value(),this.__chain__)}function O0(){this.__values__===i&&(this.__values__=jd(this.value()));var t=this.__index__>=this.__values__.length,n=t?i:this.__values__[this.__index__++];return{done:t,value:n}}function C0(){return this}function $0(t){for(var n,s=this;s instanceof Io;){var l=Id(s);l.__index__=0,l.__values__=i,n?d.__wrapped__=l:n=l;var d=l;s=s.__wrapped__}return d.__wrapped__=t,n}function I0(){var t=this.__wrapped__;if(t instanceof nt){var n=t;return this.__actions__.length&&(n=new nt(this)),n=n.reverse(),n.__actions__.push({func:Vo,args:[Za],thisArg:i}),new oe(n,this.__chain__)}return this.thru(Za)}function L0(){return Qc(this.__wrapped__,this.__actions__)}var M0=Fo(function(t,n,s){dt.call(t,s)?++t[s]:Re(t,s,1)});function N0(t,n,s){var l=Z(t)?fc:Ev;return s&&zt(t,n,s)&&(n=i),l(t,z(n,3))}function R0(t,n){var s=Z(t)?Ke:Pc;return s(t,z(n,3))}var D0=cd(Ld),P0=cd(Md);function F0(t,n){return Pt(Zo(t,n),1)}function k0(t,n){return Pt(Zo(t,n),_n)}function H0(t,n,s){return s=s===i?1:q(s),Pt(Zo(t,n),s)}function kd(t,n){var s=Z(t)?re:en;return s(t,z(n,3))}function Hd(t,n){var s=Z(t)?ig:Dc;return s(t,z(n,3))}var z0=Fo(function(t,n,s){dt.call(t,s)?t[s].push(n):Re(t,s,[n])});function U0(t,n,s,l){t=Bt(t)?t:Or(t),s=s&&!l?q(s):0;var d=t.length;return s<0&&(s=Ot(d+s,0)),jo(t)?s<=d&&t.indexOf(n,s)>-1:!!d&&gr(t,n,s)>-1}var W0=Q(function(t,n,s){var l=-1,d=typeof n=="function",h=Bt(t)?b(t.length):[];return en(t,function(g){h[++l]=d?Jt(n,g,s):fi(g,n,s)}),h}),B0=Fo(function(t,n,s){Re(t,s,n)});function Zo(t,n){var s=Z(t)?yt:Wc;return s(t,z(n,3))}function G0(t,n,s,l){return t==null?[]:(Z(n)||(n=n==null?[]:[n]),s=l?i:s,Z(s)||(s=s==null?[]:[s]),Zc(t,n,s))}var V0=Fo(function(t,n,s){t[s?0:1].push(n)},function(){return[[],[]]});function Z0(t,n,s){var l=Z(t)?oa:gc,d=arguments.length<3;return l(t,z(n,4),s,d,en)}function q0(t,n,s){var l=Z(t)?og:gc,d=arguments.length<3;return l(t,z(n,4),s,d,Dc)}function Y0(t,n){var s=Z(t)?Ke:Pc;return s(t,Jo(z(n,3)))}function J0(t){var n=Z(t)?Lc:Uv;return n(t)}function K0(t,n,s){(s?zt(t,n,s):n===i)?n=1:n=q(n);var l=Z(t)?yv:Wv;return l(t,n)}function j0(t){var n=Z(t)?_v:Gv;return n(t)}function X0(t){if(t==null)return 0;if(Bt(t))return jo(t)?yr(t):t.length;var n=kt(t);return n==pe||n==me?t.size:Ta(t).length}function Q0(t,n,s){var l=Z(t)?sa:Vv;return s&&zt(t,n,s)&&(n=i),l(t,z(n,3))}var t_=Q(function(t,n){if(t==null)return[];var s=n.length;return s>1&&zt(t,n[0],n[1])?n=[]:s>2&&zt(n[0],n[1],n[2])&&(n=[n[0]]),Zc(t,Pt(n,1),[])}),qo=Rg||function(){return $t.Date.now()};function e_(t,n){if(typeof n!="function")throw new ie(a);return t=q(t),function(){if(--t<1)return n.apply(this,arguments)}}function zd(t,n,s){return n=s?i:n,n=t&&n==null?t.length:n,De(t,he,i,i,i,i,n)}function Ud(t,n){var s;if(typeof n!="function")throw new ie(a);return t=q(t),function(){return--t>0&&(s=n.apply(this,arguments)),t<=1&&(n=i),s}}var Ya=Q(function(t,n,s){var l=M;if(s.length){var d=Xe(s,Sr(Ya));l|=Yt}return De(t,l,n,s,d)}),Wd=Q(function(t,n,s){var l=M|gt;if(s.length){var d=Xe(s,Sr(Wd));l|=Yt}return De(n,l,t,s,d)});function Bd(t,n,s){n=s?i:n;var l=De(t,vt,i,i,i,i,i,n);return l.placeholder=Bd.placeholder,l}function Gd(t,n,s){n=s?i:n;var l=De(t,qt,i,i,i,i,i,n);return l.placeholder=Gd.placeholder,l}function Vd(t,n,s){var l,d,h,g,y,x,A=0,O=!1,$=!1,R=!0;if(typeof t!="function")throw new ie(a);n=ue(n)||0,_t(s)&&(O=!!s.leading,$="maxWait"in s,h=$?Ot(ue(s.maxWait)||0,n):h,R="trailing"in s?!!s.trailing:R);function F(St){var _e=l,ze=d;return l=d=i,A=St,g=t.apply(ze,_e),g}function U(St){return A=St,y=vi(et,n),O?F(St):g}function J(St){var _e=St-x,ze=St-A,df=n-_e;return $?Ft(df,h-ze):df}function W(St){var _e=St-x,ze=St-A;return x===i||_e>=n||_e<0||$&&ze>=h}function et(){var St=qo();if(W(St))return rt(St);y=vi(et,J(St))}function rt(St){return y=i,R&&l?F(St):(l=d=i,g)}function Qt(){y!==i&&ed(y),A=0,l=x=d=y=i}function Ut(){return y===i?g:rt(qo())}function te(){var St=qo(),_e=W(St);if(l=arguments,d=this,x=St,_e){if(y===i)return U(x);if($)return ed(y),y=vi(et,n),F(x)}return y===i&&(y=vi(et,n)),g}return te.cancel=Qt,te.flush=Ut,te}var n_=Q(function(t,n){return Rc(t,1,n)}),r_=Q(function(t,n,s){return Rc(t,ue(n)||0,s)});function i_(t){return De(t,vn)}function Yo(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new ie(a);var s=function(){var l=arguments,d=n?n.apply(this,l):l[0],h=s.cache;if(h.has(d))return h.get(d);var g=t.apply(this,l);return s.cache=h.set(d,g)||h,g};return s.cache=new(Yo.Cache||Ne),s}Yo.Cache=Ne;function Jo(t){if(typeof t!="function")throw new ie(a);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function o_(t){return Ud(2,t)}var s_=Zv(function(t,n){n=n.length==1&&Z(n[0])?yt(n[0],Kt(z())):yt(Pt(n,1),Kt(z()));var s=n.length;return Q(function(l){for(var d=-1,h=Ft(l.length,s);++d<h;)l[d]=n[d].call(this,l[d]);return Jt(t,this,l)})}),Ja=Q(function(t,n){var s=Xe(n,Sr(Ja));return De(t,Yt,i,n,s)}),Zd=Q(function(t,n){var s=Xe(n,Sr(Zd));return De(t,Ye,i,n,s)}),a_=Pe(function(t,n){return De(t,gn,i,i,i,n)});function l_(t,n){if(typeof t!="function")throw new ie(a);return n=n===i?n:q(n),Q(t,n)}function u_(t,n){if(typeof t!="function")throw new ie(a);return n=n==null?0:Ot(q(n),0),Q(function(s){var l=s[n],d=on(s,0,n);return l&&je(d,l),Jt(t,this,d)})}function c_(t,n,s){var l=!0,d=!0;if(typeof t!="function")throw new ie(a);return _t(s)&&(l="leading"in s?!!s.leading:l,d="trailing"in s?!!s.trailing:d),Vd(t,n,{leading:l,maxWait:n,trailing:d})}function d_(t){return zd(t,1)}function f_(t,n){return Ja(Na(n),t)}function h_(){if(!arguments.length)return[];var t=arguments[0];return Z(t)?t:[t]}function p_(t){return se(t,S)}function m_(t,n){return n=typeof n=="function"?n:i,se(t,S,n)}function g_(t){return se(t,_|S)}function v_(t,n){return n=typeof n=="function"?n:i,se(t,_|S,n)}function y_(t,n){return n==null||Nc(t,n,It(n))}function ye(t,n){return t===n||t!==t&&n!==n}var __=Uo(xa),w_=Uo(function(t,n){return t>=n}),Cn=Hc(function(){return arguments}())?Hc:function(t){return Et(t)&&dt.call(t,"callee")&&!Sc.call(t,"callee")},Z=b.isArray,x_=sc?Kt(sc):$v;function Bt(t){return t!=null&&Ko(t.length)&&!ke(t)}function Tt(t){return Et(t)&&Bt(t)}function b_(t){return t===!0||t===!1||Et(t)&&Ht(t)==jr}var sn=Pg||sl,E_=ac?Kt(ac):Iv;function T_(t){return Et(t)&&t.nodeType===1&&!yi(t)}function S_(t){if(t==null)return!0;if(Bt(t)&&(Z(t)||typeof t=="string"||typeof t.splice=="function"||sn(t)||Ar(t)||Cn(t)))return!t.length;var n=kt(t);if(n==pe||n==me)return!t.size;if(gi(t))return!Ta(t).length;for(var s in t)if(dt.call(t,s))return!1;return!0}function A_(t,n){return hi(t,n)}function O_(t,n,s){s=typeof s=="function"?s:i;var l=s?s(t,n):i;return l===i?hi(t,n,i,s):!!l}function Ka(t){if(!Et(t))return!1;var n=Ht(t);return n==ao||n==Kp||typeof t.message=="string"&&typeof t.name=="string"&&!yi(t)}function C_(t){return typeof t=="number"&&Oc(t)}function ke(t){if(!_t(t))return!1;var n=Ht(t);return n==lo||n==Ru||n==Jp||n==Xp}function qd(t){return typeof t=="number"&&t==q(t)}function Ko(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Je}function _t(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}function Et(t){return t!=null&&typeof t=="object"}var Yd=lc?Kt(lc):Mv;function $_(t,n){return t===n||Ea(t,n,za(n))}function I_(t,n,s){return s=typeof s=="function"?s:i,Ea(t,n,za(n),s)}function L_(t){return Jd(t)&&t!=+t}function M_(t){if(my(t))throw new V(o);return zc(t)}function N_(t){return t===null}function R_(t){return t==null}function Jd(t){return typeof t=="number"||Et(t)&&Ht(t)==Qr}function yi(t){if(!Et(t)||Ht(t)!=Le)return!1;var n=Eo(t);if(n===null)return!0;var s=dt.call(n,"constructor")&&n.constructor;return typeof s=="function"&&s instanceof s&&_o.call(s)==Ig}var ja=uc?Kt(uc):Nv;function D_(t){return qd(t)&&t>=-Je&&t<=Je}var Kd=cc?Kt(cc):Rv;function jo(t){return typeof t=="string"||!Z(t)&&Et(t)&&Ht(t)==ei}function Xt(t){return typeof t=="symbol"||Et(t)&&Ht(t)==uo}var Ar=dc?Kt(dc):Dv;function P_(t){return t===i}function F_(t){return Et(t)&&kt(t)==ni}function k_(t){return Et(t)&&Ht(t)==tm}var H_=Uo(Sa),z_=Uo(function(t,n){return t<=n});function jd(t){if(!t)return[];if(Bt(t))return jo(t)?ge(t):Wt(t);if(oi&&t[oi])return yg(t[oi]());var n=kt(t),s=n==pe?fa:n==me?go:Or;return s(t)}function He(t){if(!t)return t===0?t:0;if(t=ue(t),t===_n||t===-_n){var n=t<0?-1:1;return n*Vp}return t===t?t:0}function q(t){var n=He(t),s=n%1;return n===n?s?n-s:n:0}function Xd(t){return t?Tn(q(t),0,Te):0}function ue(t){if(typeof t=="number")return t;if(Xt(t))return oo;if(_t(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=_t(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=vc(t);var s=xm.test(t);return s||Em.test(t)?eg(t.slice(2),s?2:8):wm.test(t)?oo:+t}function Qd(t){return Ae(t,Gt(t))}function U_(t){return t?Tn(q(t),-Je,Je):t===0?t:0}function at(t){return t==null?"":jt(t)}var W_=Er(function(t,n){if(gi(n)||Bt(n)){Ae(n,It(n),t);return}for(var s in n)dt.call(n,s)&&ci(t,s,n[s])}),tf=Er(function(t,n){Ae(n,Gt(n),t)}),Xo=Er(function(t,n,s,l){Ae(n,Gt(n),t,l)}),B_=Er(function(t,n,s,l){Ae(n,It(n),t,l)}),G_=Pe(ya);function V_(t,n){var s=br(t);return n==null?s:Mc(s,n)}var Z_=Q(function(t,n){t=ft(t);var s=-1,l=n.length,d=l>2?n[2]:i;for(d&&zt(n[0],n[1],d)&&(l=1);++s<l;)for(var h=n[s],g=Gt(h),y=-1,x=g.length;++y<x;){var A=g[y],O=t[A];(O===i||ye(O,_r[A])&&!dt.call(t,A))&&(t[A]=h[A])}return t}),q_=Q(function(t){return t.push(i,vd),Jt(ef,i,t)});function Y_(t,n){return hc(t,z(n,3),Se)}function J_(t,n){return hc(t,z(n,3),wa)}function K_(t,n){return t==null?t:_a(t,z(n,3),Gt)}function j_(t,n){return t==null?t:Fc(t,z(n,3),Gt)}function X_(t,n){return t&&Se(t,z(n,3))}function Q_(t,n){return t&&wa(t,z(n,3))}function tw(t){return t==null?[]:No(t,It(t))}function ew(t){return t==null?[]:No(t,Gt(t))}function Xa(t,n,s){var l=t==null?i:Sn(t,n);return l===i?s:l}function nw(t,n){return t!=null&&wd(t,n,Sv)}function Qa(t,n){return t!=null&&wd(t,n,Av)}var rw=fd(function(t,n,s){n!=null&&typeof n.toString!="function"&&(n=wo.call(n)),t[n]=s},el(Vt)),iw=fd(function(t,n,s){n!=null&&typeof n.toString!="function"&&(n=wo.call(n)),dt.call(t,n)?t[n].push(s):t[n]=[s]},z),ow=Q(fi);function It(t){return Bt(t)?Ic(t):Ta(t)}function Gt(t){return Bt(t)?Ic(t,!0):Pv(t)}function sw(t,n){var s={};return n=z(n,3),Se(t,function(l,d,h){Re(s,n(l,d,h),l)}),s}function aw(t,n){var s={};return n=z(n,3),Se(t,function(l,d,h){Re(s,d,n(l,d,h))}),s}var lw=Er(function(t,n,s){Ro(t,n,s)}),ef=Er(function(t,n,s,l){Ro(t,n,s,l)}),uw=Pe(function(t,n){var s={};if(t==null)return s;var l=!1;n=yt(n,function(h){return h=rn(h,t),l||(l=h.length>1),h}),Ae(t,ka(t),s),l&&(s=se(s,_|T|S,ry));for(var d=n.length;d--;)Ia(s,n[d]);return s});function cw(t,n){return nf(t,Jo(z(n)))}var dw=Pe(function(t,n){return t==null?{}:kv(t,n)});function nf(t,n){if(t==null)return{};var s=yt(ka(t),function(l){return[l]});return n=z(n),qc(t,s,function(l,d){return n(l,d[0])})}function fw(t,n,s){n=rn(n,t);var l=-1,d=n.length;for(d||(d=1,t=i);++l<d;){var h=t==null?i:t[Oe(n[l])];h===i&&(l=d,h=s),t=ke(h)?h.call(t):h}return t}function hw(t,n,s){return t==null?t:pi(t,n,s)}function pw(t,n,s,l){return l=typeof l=="function"?l:i,t==null?t:pi(t,n,s,l)}var rf=md(It),of=md(Gt);function mw(t,n,s){var l=Z(t),d=l||sn(t)||Ar(t);if(n=z(n,4),s==null){var h=t&&t.constructor;d?s=l?new h:[]:_t(t)?s=ke(h)?br(Eo(t)):{}:s={}}return(d?re:Se)(t,function(g,y,x){return n(s,g,y,x)}),s}function gw(t,n){return t==null?!0:Ia(t,n)}function vw(t,n,s){return t==null?t:Xc(t,n,Na(s))}function yw(t,n,s,l){return l=typeof l=="function"?l:i,t==null?t:Xc(t,n,Na(s),l)}function Or(t){return t==null?[]:da(t,It(t))}function _w(t){return t==null?[]:da(t,Gt(t))}function ww(t,n,s){return s===i&&(s=n,n=i),s!==i&&(s=ue(s),s=s===s?s:0),n!==i&&(n=ue(n),n=n===n?n:0),Tn(ue(t),n,s)}function xw(t,n,s){return n=He(n),s===i?(s=n,n=0):s=He(s),t=ue(t),Ov(t,n,s)}function bw(t,n,s){if(s&&typeof s!="boolean"&&zt(t,n,s)&&(n=s=i),s===i&&(typeof n=="boolean"?(s=n,n=i):typeof t=="boolean"&&(s=t,t=i)),t===i&&n===i?(t=0,n=1):(t=He(t),n===i?(n=t,t=0):n=He(n)),t>n){var l=t;t=n,n=l}if(s||t%1||n%1){var d=Cc();return Ft(t+d*(n-t+tg("1e-"+((d+"").length-1))),n)}return Oa(t,n)}var Ew=Tr(function(t,n,s){return n=n.toLowerCase(),t+(s?sf(n):n)});function sf(t){return tl(at(t).toLowerCase())}function af(t){return t=at(t),t&&t.replace(Sm,hg).replace(Gm,"")}function Tw(t,n,s){t=at(t),n=jt(n);var l=t.length;s=s===i?l:Tn(q(s),0,l);var d=s;return s-=n.length,s>=0&&t.slice(s,d)==n}function Sw(t){return t=at(t),t&&om.test(t)?t.replace(Fu,pg):t}function Aw(t){return t=at(t),t&&dm.test(t)?t.replace(Js,"\\$&"):t}var Ow=Tr(function(t,n,s){return t+(s?"-":"")+n.toLowerCase()}),Cw=Tr(function(t,n,s){return t+(s?" ":"")+n.toLowerCase()}),$w=ud("toLowerCase");function Iw(t,n,s){t=at(t),n=q(n);var l=n?yr(t):0;if(!n||l>=n)return t;var d=(n-l)/2;return zo(Oo(d),s)+t+zo(Ao(d),s)}function Lw(t,n,s){t=at(t),n=q(n);var l=n?yr(t):0;return n&&l<n?t+zo(n-l,s):t}function Mw(t,n,s){t=at(t),n=q(n);var l=n?yr(t):0;return n&&l<n?zo(n-l,s)+t:t}function Nw(t,n,s){return s||n==null?n=0:n&&(n=+n),zg(at(t).replace(Ks,""),n||0)}function Rw(t,n,s){return(s?zt(t,n,s):n===i)?n=1:n=q(n),Ca(at(t),n)}function Dw(){var t=arguments,n=at(t[0]);return t.length<3?n:n.replace(t[1],t[2])}var Pw=Tr(function(t,n,s){return t+(s?"_":"")+n.toLowerCase()});function Fw(t,n,s){return s&&typeof s!="number"&&zt(t,n,s)&&(n=s=i),s=s===i?Te:s>>>0,s?(t=at(t),t&&(typeof n=="string"||n!=null&&!ja(n))&&(n=jt(n),!n&&vr(t))?on(ge(t),0,s):t.split(n,s)):[]}var kw=Tr(function(t,n,s){return t+(s?" ":"")+tl(n)});function Hw(t,n,s){return t=at(t),s=s==null?0:Tn(q(s),0,t.length),n=jt(n),t.slice(s,s+n.length)==n}function zw(t,n,s){var l=f.templateSettings;s&&zt(t,n,s)&&(n=i),t=at(t),n=Xo({},n,l,gd);var d=Xo({},n.imports,l.imports,gd),h=It(d),g=da(d,h),y,x,A=0,O=n.interpolate||co,$="__p += '",R=ha((n.escape||co).source+"|"+O.source+"|"+(O===ku?_m:co).source+"|"+(n.evaluate||co).source+"|$","g"),F="//# sourceURL="+(dt.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Jm+"]")+`
`;t.replace(R,function(W,et,rt,Qt,Ut,te){return rt||(rt=Qt),$+=t.slice(A,te).replace(Am,mg),et&&(y=!0,$+=`' +
__e(`+et+`) +
'`),Ut&&(x=!0,$+=`';
`+Ut+`;
__p += '`),rt&&($+=`' +
((__t = (`+rt+`)) == null ? '' : __t) +
'`),A=te+W.length,W}),$+=`';
`;var U=dt.call(n,"variable")&&n.variable;if(!U)$=`with (obj) {
`+$+`
}
`;else if(vm.test(U))throw new V(u);$=(x?$.replace(em,""):$).replace(nm,"$1").replace(rm,"$1;"),$="function("+(U||"obj")+`) {
`+(U?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(x?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+$+`return __p
}`;var J=uf(function(){return ot(h,F+"return "+$).apply(i,g)});if(J.source=$,Ka(J))throw J;return J}function Uw(t){return at(t).toLowerCase()}function Ww(t){return at(t).toUpperCase()}function Bw(t,n,s){if(t=at(t),t&&(s||n===i))return vc(t);if(!t||!(n=jt(n)))return t;var l=ge(t),d=ge(n),h=yc(l,d),g=_c(l,d)+1;return on(l,h,g).join("")}function Gw(t,n,s){if(t=at(t),t&&(s||n===i))return t.slice(0,xc(t)+1);if(!t||!(n=jt(n)))return t;var l=ge(t),d=_c(l,ge(n))+1;return on(l,0,d).join("")}function Vw(t,n,s){if(t=at(t),t&&(s||n===i))return t.replace(Ks,"");if(!t||!(n=jt(n)))return t;var l=ge(t),d=yc(l,ge(n));return on(l,d).join("")}function Zw(t,n){var s=yn,l=Hs;if(_t(n)){var d="separator"in n?n.separator:d;s="length"in n?q(n.length):s,l="omission"in n?jt(n.omission):l}t=at(t);var h=t.length;if(vr(t)){var g=ge(t);h=g.length}if(s>=h)return t;var y=s-yr(l);if(y<1)return l;var x=g?on(g,0,y).join(""):t.slice(0,y);if(d===i)return x+l;if(g&&(y+=x.length-y),ja(d)){if(t.slice(y).search(d)){var A,O=x;for(d.global||(d=ha(d.source,at(Hu.exec(d))+"g")),d.lastIndex=0;A=d.exec(O);)var $=A.index;x=x.slice(0,$===i?y:$)}}else if(t.indexOf(jt(d),y)!=y){var R=x.lastIndexOf(d);R>-1&&(x=x.slice(0,R))}return x+l}function qw(t){return t=at(t),t&&im.test(t)?t.replace(Pu,bg):t}var Yw=Tr(function(t,n,s){return t+(s?" ":"")+n.toUpperCase()}),tl=ud("toUpperCase");function lf(t,n,s){return t=at(t),n=s?i:n,n===i?vg(t)?Sg(t):lg(t):t.match(n)||[]}var uf=Q(function(t,n){try{return Jt(t,i,n)}catch(s){return Ka(s)?s:new V(s)}}),Jw=Pe(function(t,n){return re(n,function(s){s=Oe(s),Re(t,s,Ya(t[s],t))}),t});function Kw(t){var n=t==null?0:t.length,s=z();return t=n?yt(t,function(l){if(typeof l[1]!="function")throw new ie(a);return[s(l[0]),l[1]]}):[],Q(function(l){for(var d=-1;++d<n;){var h=t[d];if(Jt(h[0],this,l))return Jt(h[1],this,l)}})}function jw(t){return bv(se(t,_))}function el(t){return function(){return t}}function Xw(t,n){return t==null||t!==t?n:t}var Qw=dd(),tx=dd(!0);function Vt(t){return t}function nl(t){return Uc(typeof t=="function"?t:se(t,_))}function ex(t){return Bc(se(t,_))}function nx(t,n){return Gc(t,se(n,_))}var rx=Q(function(t,n){return function(s){return fi(s,t,n)}}),ix=Q(function(t,n){return function(s){return fi(t,s,n)}});function rl(t,n,s){var l=It(n),d=No(n,l);s==null&&!(_t(n)&&(d.length||!l.length))&&(s=n,n=t,t=this,d=No(n,It(n)));var h=!(_t(s)&&"chain"in s)||!!s.chain,g=ke(t);return re(d,function(y){var x=n[y];t[y]=x,g&&(t.prototype[y]=function(){var A=this.__chain__;if(h||A){var O=t(this.__wrapped__),$=O.__actions__=Wt(this.__actions__);return $.push({func:x,args:arguments,thisArg:t}),O.__chain__=A,O}return x.apply(t,je([this.value()],arguments))})}),t}function ox(){return $t._===this&&($t._=Lg),this}function il(){}function sx(t){return t=q(t),Q(function(n){return Vc(n,t)})}var ax=Da(yt),lx=Da(fc),ux=Da(sa);function cf(t){return Wa(t)?aa(Oe(t)):Hv(t)}function cx(t){return function(n){return t==null?i:Sn(t,n)}}var dx=hd(),fx=hd(!0);function ol(){return[]}function sl(){return!1}function hx(){return{}}function px(){return""}function mx(){return!0}function gx(t,n){if(t=q(t),t<1||t>Je)return[];var s=Te,l=Ft(t,Te);n=z(n),t-=Te;for(var d=ca(l,n);++s<t;)n(s);return d}function vx(t){return Z(t)?yt(t,Oe):Xt(t)?[t]:Wt($d(at(t)))}function yx(t){var n=++$g;return at(t)+n}var _x=Ho(function(t,n){return t+n},0),wx=Pa("ceil"),xx=Ho(function(t,n){return t/n},1),bx=Pa("floor");function Ex(t){return t&&t.length?Mo(t,Vt,xa):i}function Tx(t,n){return t&&t.length?Mo(t,z(n,2),xa):i}function Sx(t){return mc(t,Vt)}function Ax(t,n){return mc(t,z(n,2))}function Ox(t){return t&&t.length?Mo(t,Vt,Sa):i}function Cx(t,n){return t&&t.length?Mo(t,z(n,2),Sa):i}var $x=Ho(function(t,n){return t*n},1),Ix=Pa("round"),Lx=Ho(function(t,n){return t-n},0);function Mx(t){return t&&t.length?ua(t,Vt):0}function Nx(t,n){return t&&t.length?ua(t,z(n,2)):0}return f.after=e_,f.ary=zd,f.assign=W_,f.assignIn=tf,f.assignInWith=Xo,f.assignWith=B_,f.at=G_,f.before=Ud,f.bind=Ya,f.bindAll=Jw,f.bindKey=Wd,f.castArray=h_,f.chain=Fd,f.chunk=by,f.compact=Ey,f.concat=Ty,f.cond=Kw,f.conforms=jw,f.constant=el,f.countBy=M0,f.create=V_,f.curry=Bd,f.curryRight=Gd,f.debounce=Vd,f.defaults=Z_,f.defaultsDeep=q_,f.defer=n_,f.delay=r_,f.difference=Sy,f.differenceBy=Ay,f.differenceWith=Oy,f.drop=Cy,f.dropRight=$y,f.dropRightWhile=Iy,f.dropWhile=Ly,f.fill=My,f.filter=R0,f.flatMap=F0,f.flatMapDeep=k0,f.flatMapDepth=H0,f.flatten=Nd,f.flattenDeep=Ny,f.flattenDepth=Ry,f.flip=i_,f.flow=Qw,f.flowRight=tx,f.fromPairs=Dy,f.functions=tw,f.functionsIn=ew,f.groupBy=z0,f.initial=Fy,f.intersection=ky,f.intersectionBy=Hy,f.intersectionWith=zy,f.invert=rw,f.invertBy=iw,f.invokeMap=W0,f.iteratee=nl,f.keyBy=B0,f.keys=It,f.keysIn=Gt,f.map=Zo,f.mapKeys=sw,f.mapValues=aw,f.matches=ex,f.matchesProperty=nx,f.memoize=Yo,f.merge=lw,f.mergeWith=ef,f.method=rx,f.methodOf=ix,f.mixin=rl,f.negate=Jo,f.nthArg=sx,f.omit=uw,f.omitBy=cw,f.once=o_,f.orderBy=G0,f.over=ax,f.overArgs=s_,f.overEvery=lx,f.overSome=ux,f.partial=Ja,f.partialRight=Zd,f.partition=V0,f.pick=dw,f.pickBy=nf,f.property=cf,f.propertyOf=cx,f.pull=Gy,f.pullAll=Dd,f.pullAllBy=Vy,f.pullAllWith=Zy,f.pullAt=qy,f.range=dx,f.rangeRight=fx,f.rearg=a_,f.reject=Y0,f.remove=Yy,f.rest=l_,f.reverse=Za,f.sampleSize=K0,f.set=hw,f.setWith=pw,f.shuffle=j0,f.slice=Jy,f.sortBy=t_,f.sortedUniq=n0,f.sortedUniqBy=r0,f.split=Fw,f.spread=u_,f.tail=i0,f.take=o0,f.takeRight=s0,f.takeRightWhile=a0,f.takeWhile=l0,f.tap=E0,f.throttle=c_,f.thru=Vo,f.toArray=jd,f.toPairs=rf,f.toPairsIn=of,f.toPath=vx,f.toPlainObject=Qd,f.transform=mw,f.unary=d_,f.union=u0,f.unionBy=c0,f.unionWith=d0,f.uniq=f0,f.uniqBy=h0,f.uniqWith=p0,f.unset=gw,f.unzip=qa,f.unzipWith=Pd,f.update=vw,f.updateWith=yw,f.values=Or,f.valuesIn=_w,f.without=m0,f.words=lf,f.wrap=f_,f.xor=g0,f.xorBy=v0,f.xorWith=y0,f.zip=_0,f.zipObject=w0,f.zipObjectDeep=x0,f.zipWith=b0,f.entries=rf,f.entriesIn=of,f.extend=tf,f.extendWith=Xo,rl(f,f),f.add=_x,f.attempt=uf,f.camelCase=Ew,f.capitalize=sf,f.ceil=wx,f.clamp=ww,f.clone=p_,f.cloneDeep=g_,f.cloneDeepWith=v_,f.cloneWith=m_,f.conformsTo=y_,f.deburr=af,f.defaultTo=Xw,f.divide=xx,f.endsWith=Tw,f.eq=ye,f.escape=Sw,f.escapeRegExp=Aw,f.every=N0,f.find=D0,f.findIndex=Ld,f.findKey=Y_,f.findLast=P0,f.findLastIndex=Md,f.findLastKey=J_,f.floor=bx,f.forEach=kd,f.forEachRight=Hd,f.forIn=K_,f.forInRight=j_,f.forOwn=X_,f.forOwnRight=Q_,f.get=Xa,f.gt=__,f.gte=w_,f.has=nw,f.hasIn=Qa,f.head=Rd,f.identity=Vt,f.includes=U0,f.indexOf=Py,f.inRange=xw,f.invoke=ow,f.isArguments=Cn,f.isArray=Z,f.isArrayBuffer=x_,f.isArrayLike=Bt,f.isArrayLikeObject=Tt,f.isBoolean=b_,f.isBuffer=sn,f.isDate=E_,f.isElement=T_,f.isEmpty=S_,f.isEqual=A_,f.isEqualWith=O_,f.isError=Ka,f.isFinite=C_,f.isFunction=ke,f.isInteger=qd,f.isLength=Ko,f.isMap=Yd,f.isMatch=$_,f.isMatchWith=I_,f.isNaN=L_,f.isNative=M_,f.isNil=R_,f.isNull=N_,f.isNumber=Jd,f.isObject=_t,f.isObjectLike=Et,f.isPlainObject=yi,f.isRegExp=ja,f.isSafeInteger=D_,f.isSet=Kd,f.isString=jo,f.isSymbol=Xt,f.isTypedArray=Ar,f.isUndefined=P_,f.isWeakMap=F_,f.isWeakSet=k_,f.join=Uy,f.kebabCase=Ow,f.last=le,f.lastIndexOf=Wy,f.lowerCase=Cw,f.lowerFirst=$w,f.lt=H_,f.lte=z_,f.max=Ex,f.maxBy=Tx,f.mean=Sx,f.meanBy=Ax,f.min=Ox,f.minBy=Cx,f.stubArray=ol,f.stubFalse=sl,f.stubObject=hx,f.stubString=px,f.stubTrue=mx,f.multiply=$x,f.nth=By,f.noConflict=ox,f.noop=il,f.now=qo,f.pad=Iw,f.padEnd=Lw,f.padStart=Mw,f.parseInt=Nw,f.random=bw,f.reduce=Z0,f.reduceRight=q0,f.repeat=Rw,f.replace=Dw,f.result=fw,f.round=Ix,f.runInContext=w,f.sample=J0,f.size=X0,f.snakeCase=Pw,f.some=Q0,f.sortedIndex=Ky,f.sortedIndexBy=jy,f.sortedIndexOf=Xy,f.sortedLastIndex=Qy,f.sortedLastIndexBy=t0,f.sortedLastIndexOf=e0,f.startCase=kw,f.startsWith=Hw,f.subtract=Lx,f.sum=Mx,f.sumBy=Nx,f.template=zw,f.times=gx,f.toFinite=He,f.toInteger=q,f.toLength=Xd,f.toLower=Uw,f.toNumber=ue,f.toSafeInteger=U_,f.toString=at,f.toUpper=Ww,f.trim=Bw,f.trimEnd=Gw,f.trimStart=Vw,f.truncate=Zw,f.unescape=qw,f.uniqueId=yx,f.upperCase=Yw,f.upperFirst=tl,f.each=kd,f.eachRight=Hd,f.first=Rd,rl(f,function(){var t={};return Se(f,function(n,s){dt.call(f.prototype,s)||(t[s]=n)}),t}(),{chain:!1}),f.VERSION=e,re(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){f[t].placeholder=f}),re(["drop","take"],function(t,n){nt.prototype[t]=function(s){s=s===i?1:Ot(q(s),0);var l=this.__filtered__&&!n?new nt(this):this.clone();return l.__filtered__?l.__takeCount__=Ft(s,l.__takeCount__):l.__views__.push({size:Ft(s,Te),type:t+(l.__dir__<0?"Right":"")}),l},nt.prototype[t+"Right"]=function(s){return this.reverse()[t](s).reverse()}}),re(["filter","map","takeWhile"],function(t,n){var s=n+1,l=s==Nu||s==Gp;nt.prototype[t]=function(d){var h=this.clone();return h.__iteratees__.push({iteratee:z(d,3),type:s}),h.__filtered__=h.__filtered__||l,h}}),re(["head","last"],function(t,n){var s="take"+(n?"Right":"");nt.prototype[t]=function(){return this[s](1).value()[0]}}),re(["initial","tail"],function(t,n){var s="drop"+(n?"":"Right");nt.prototype[t]=function(){return this.__filtered__?new nt(this):this[s](1)}}),nt.prototype.compact=function(){return this.filter(Vt)},nt.prototype.find=function(t){return this.filter(t).head()},nt.prototype.findLast=function(t){return this.reverse().find(t)},nt.prototype.invokeMap=Q(function(t,n){return typeof t=="function"?new nt(this):this.map(function(s){return fi(s,t,n)})}),nt.prototype.reject=function(t){return this.filter(Jo(z(t)))},nt.prototype.slice=function(t,n){t=q(t);var s=this;return s.__filtered__&&(t>0||n<0)?new nt(s):(t<0?s=s.takeRight(-t):t&&(s=s.drop(t)),n!==i&&(n=q(n),s=n<0?s.dropRight(-n):s.take(n-t)),s)},nt.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},nt.prototype.toArray=function(){return this.take(Te)},Se(nt.prototype,function(t,n){var s=/^(?:filter|find|map|reject)|While$/.test(n),l=/^(?:head|last)$/.test(n),d=f[l?"take"+(n=="last"?"Right":""):n],h=l||/^find/.test(n);!d||(f.prototype[n]=function(){var g=this.__wrapped__,y=l?[1]:arguments,x=g instanceof nt,A=y[0],O=x||Z(g),$=function(et){var rt=d.apply(f,je([et],y));return l&&R?rt[0]:rt};O&&s&&typeof A=="function"&&A.length!=1&&(x=O=!1);var R=this.__chain__,F=!!this.__actions__.length,U=h&&!R,J=x&&!F;if(!h&&O){g=J?g:new nt(this);var W=t.apply(g,y);return W.__actions__.push({func:Vo,args:[$],thisArg:i}),new oe(W,R)}return U&&J?t.apply(this,y):(W=this.thru($),U?l?W.value()[0]:W.value():W)})}),re(["pop","push","shift","sort","splice","unshift"],function(t){var n=vo[t],s=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",l=/^(?:pop|shift)$/.test(t);f.prototype[t]=function(){var d=arguments;if(l&&!this.__chain__){var h=this.value();return n.apply(Z(h)?h:[],d)}return this[s](function(g){return n.apply(Z(g)?g:[],d)})}}),Se(nt.prototype,function(t,n){var s=f[n];if(s){var l=s.name+"";dt.call(xr,l)||(xr[l]=[]),xr[l].push({name:n,func:s})}}),xr[ko(i,gt).name]=[{name:"wrapper",func:i}],nt.prototype.clone=qg,nt.prototype.reverse=Yg,nt.prototype.value=Jg,f.prototype.at=T0,f.prototype.chain=S0,f.prototype.commit=A0,f.prototype.next=O0,f.prototype.plant=$0,f.prototype.reverse=I0,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=L0,f.prototype.first=f.prototype.head,oi&&(f.prototype[oi]=C0),f},Qe=Ag();typeof define=="function"&&typeof define.amd=="object"&&define.amd?($t._=Qe,define(function(){return Qe})):wn?((wn.exports=Qe)._=Qe,na._=Qe):$t._=Qe}).call(Ir)});v();v();v();v();v();var es=globalThis,rs=es.ShadowRoot&&(es.ShadyCSS===void 0||es.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vf=Symbol(),gf=new WeakMap,ns=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==vf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(rs&&e===void 0){let o=r!==void 0&&r.length===1;o&&(e=gf.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&gf.set(r,e))}return e}toString(){return this.cssText}},yf=i=>new ns(typeof i=="string"?i:i+"",void 0,vf);var ul=(i,e)=>{if(rs)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let o=document.createElement("style"),a=es.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,i.appendChild(o)}},is=rs?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let o of e.cssRules)r+=o.cssText;return yf(r)})(i):i;var{is:Bx,defineProperty:Gx,getOwnPropertyDescriptor:Vx,getOwnPropertyNames:Zx,getOwnPropertySymbols:qx,getPrototypeOf:Yx}=Object,an=globalThis,_f=an.trustedTypes,Jx=_f?_f.emptyScript:"",cl=an.reactiveElementPolyfillSupport,_i=(i,e)=>i,os={toAttribute(i,e){switch(e){case Boolean:i=i?Jx:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(o){r=null}}return r}},dl=(i,e)=>!Bx(i,e),wf={attribute:!0,type:String,converter:os,reflect:!1,hasChanged:dl},xf,bf;(xf=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(bf=an.litPropertyMetadata)!=null||(an.litPropertyMetadata=new WeakMap);var In=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=wf){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let o=Symbol(),a=this.getPropertyDescriptor(e,o,r);a!==void 0&&Gx(this.prototype,e,a)}}static getPropertyDescriptor(e,r,o){var c;let{get:a,set:u}=(c=Vx(this.prototype,e))!=null?c:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);u.call(this,p),this.requestUpdate(e,m,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:wf}static _$Ei(){if(this.hasOwnProperty(_i("elementProperties")))return;let e=Yx(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_i("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_i("properties"))){let r=this.properties,o=[...Zx(r),...qx(r)];for(let a of o)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[o,a]of r)this.elementProperties.set(o,a)}this._$Eh=new Map;for(let[r,o]of this.elementProperties){let a=this._$Eu(r,o);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let a of o)r.unshift(is(a))}else e!==void 0&&r.push(is(e));return r}static _$Eu(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,o;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return ul(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(o=>{var a;return(a=o.hostConnected)==null?void 0:a.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EO(e,r){var u;let o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(a!==void 0&&o.reflect===!0){let c=(((u=o.converter)==null?void 0:u.toAttribute)!==void 0?o.converter:os).toAttribute(r,o.type);this._$Em=e,c==null?this.removeAttribute(a):this.setAttribute(a,c),this._$Em=null}}_$AK(e,r){var u;let o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let c=o.getPropertyOptions(a),p=typeof c.converter=="function"?{fromAttribute:c.converter}:((u=c.converter)==null?void 0:u.fromAttribute)!==void 0?c.converter:os;this._$Em=a,this[a]=p.fromAttribute(r,c.type),this._$Em=null}}requestUpdate(e,r,o,a=!1,u){var c;if(e!==void 0){if(o!=null||(o=this.constructor.getPropertyOptions(e)),!((c=o.hasChanged)!=null?c:dl)(a?u:this[e],r))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,o){var a;this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return $n(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[u,c]of this._$Ep)this[u]=c;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[u,c]of a)c.wrapped!==!0||this._$AL.has(u)||this[u]===void 0||this.C(u,this[u],c)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(o=this._$ES)==null||o.forEach(a=>{var u;return(u=a.hostUpdate)==null?void 0:u.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(o=>{var a;return(a=o.hostUpdated)==null?void 0:a.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},Ef;In.elementStyles=[],In.shadowRootOptions={mode:"open"},In[_i("elementProperties")]=new Map,In[_i("finalized")]=new Map,cl==null||cl({ReactiveElement:In}),((Ef=an.reactiveElementVersions)!=null?Ef:an.reactiveElementVersions=[]).push("2.0.0");v();var xi=globalThis,ss=xi.trustedTypes,Tf=ss?ss.createPolicy("lit-html",{createHTML:i=>i}):void 0,pl="$lit$",Ue=`lit$${(Math.random()+"").slice(9)}$`,ml="?"+Ue,Kx=`<${ml}>`,Nn=document,as=()=>Nn.createComment(""),bi=i=>i===null||typeof i!="object"&&typeof i!="function",Lf=Array.isArray,Mf=i=>Lf(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",fl=`[ 	
\f\r]`,wi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sf=/-->/g,Af=/>/g,Ln=RegExp(`>|${fl}(?:([^\\s"'>=/]+)(${fl}*=${fl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Of=/'/g,Cf=/"/g,Nf=/^(?:script|style|textarea|title)$/i,Rf=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),sT=Rf(1),aT=Rf(2),We=Symbol.for("lit-noChange"),Mt=Symbol.for("lit-nothing"),$f=new WeakMap,Mn=Nn.createTreeWalker(Nn,129);function Df(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tf!==void 0?Tf.createHTML(e):e}var Pf=(i,e)=>{let r=i.length-1,o=[],a,u=e===2?"<svg>":"",c=wi;for(let p=0;p<r;p++){let m=i[p],_,T,S=-1,N=0;for(;N<m.length&&(c.lastIndex=N,T=c.exec(m),T!==null);)N=c.lastIndex,c===wi?T[1]==="!--"?c=Sf:T[1]!==void 0?c=Af:T[2]!==void 0?(Nf.test(T[2])&&(a=RegExp("</"+T[2],"g")),c=Ln):T[3]!==void 0&&(c=Ln):c===Ln?T[0]===">"?(c=a!=null?a:wi,S=-1):T[1]===void 0?S=-2:(S=c.lastIndex-T[2].length,_=T[1],c=T[3]===void 0?Ln:T[3]==='"'?Cf:Of):c===Cf||c===Of?c=Ln:c===Sf||c===Af?c=wi:(c=Ln,a=void 0);let I=c===Ln&&i[p+1].startsWith("/>")?" ":"";u+=c===wi?m+Kx:S>=0?(o.push(_),m.slice(0,S)+pl+m.slice(S)+Ue+I):m+Ue+(S===-2?p:I)}return[Df(i,u+(i[r]||"<?>")+(e===2?"</svg>":"")),o]},Rn=class{constructor({strings:e,_$litType$:r},o){let a;this.parts=[];let u=0,c=0,p=e.length-1,m=this.parts,[_,T]=Pf(e,r);if(this.el=Rn.createElement(_,o),Mn.currentNode=this.el.content,r===2){let S=this.el.content.firstChild;S.replaceWith(...S.childNodes)}for(;(a=Mn.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let S of a.getAttributeNames())if(S.endsWith(pl)){let N=T[c++],I=a.getAttribute(S).split(Ue),M=/([.?@])?(.*)/.exec(N);m.push({type:1,index:u,name:M[2],strings:I,ctor:M[1]==="."?us:M[1]==="?"?cs:M[1]==="@"?ds:Fn}),a.removeAttribute(S)}else S.startsWith(Ue)&&(m.push({type:6,index:u}),a.removeAttribute(S));if(Nf.test(a.tagName)){let S=a.textContent.split(Ue),N=S.length-1;if(N>0){a.textContent=ss?ss.emptyScript:"";for(let I=0;I<N;I++)a.append(S[I],as()),Mn.nextNode(),m.push({type:2,index:++u});a.append(S[N],as())}}}else if(a.nodeType===8)if(a.data===ml)m.push({type:2,index:u});else{let S=-1;for(;(S=a.data.indexOf(Ue,S+1))!==-1;)m.push({type:7,index:u}),S+=Ue.length-1}u++}}static createElement(e,r){let o=Nn.createElement("template");return o.innerHTML=e,o}};function Dn(i,e,r=i,o){var c,p,m;if(e===We)return e;let a=o!==void 0?(c=r._$Co)==null?void 0:c[o]:r._$Cl,u=bi(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),u===void 0?a=void 0:(a=new u(i),a._$AT(i,r,o)),o!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[o]=a:r._$Cl=a),a!==void 0&&(e=Dn(i,a._$AS(i,e.values),a,o)),e}var ls=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var _;let{el:{content:r},parts:o}=this._$AD,a=((_=e==null?void 0:e.creationScope)!=null?_:Nn).importNode(r,!0);Mn.currentNode=a;let u=Mn.nextNode(),c=0,p=0,m=o[0];for(;m!==void 0;){if(c===m.index){let T;m.type===2?T=new Pn(u,u.nextSibling,this,e):m.type===1?T=new m.ctor(u,m.name,m.strings,this,e):m.type===6&&(T=new fs(u,this,e)),this._$AV.push(T),m=o[++p]}c!==(m==null?void 0:m.index)&&(u=Mn.nextNode(),c++)}return Mn.currentNode=Nn,a}p(e){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},Pn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,o,a){var u;this.type=2,this._$AH=Mt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=(u=a==null?void 0:a.isConnected)!=null?u:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Dn(this,e,r),bi(e)?e===Mt||e==null||e===""?(this._$AH!==Mt&&this._$AR(),this._$AH=Mt):e!==this._$AH&&e!==We&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Mf(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Mt&&bi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Nn.createTextNode(e)),this._$AH=e}g(e){var u;let{values:r,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Rn.createElement(Df(o.h,o.h[0]),this.options)),o);if(((u=this._$AH)==null?void 0:u._$AD)===a)this._$AH.p(r);else{let c=new ls(a,this),p=c.u(this.options);c.p(r),this.$(p),this._$AH=c}}_$AC(e){let r=$f.get(e.strings);return r===void 0&&$f.set(e.strings,r=new Rn(e)),r}T(e){Lf(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,a=0;for(let u of e)a===r.length?r.push(o=new Pn(this.k(as()),this.k(as()),this,this.options)):o=r[a],o._$AI(u),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},Fn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,a,u){this.type=1,this._$AH=Mt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=u,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Mt}_$AI(e,r=this,o,a){let u=this.strings,c=!1;if(u===void 0)e=Dn(this,e,r,0),c=!bi(e)||e!==this._$AH&&e!==We,c&&(this._$AH=e);else{let p=e,m,_;for(e=u[0],m=0;m<u.length-1;m++)_=Dn(this,p[o+m],r,m),_===We&&(_=this._$AH[m]),c||(c=!bi(_)||_!==this._$AH[m]),_===Mt?e=Mt:e!==Mt&&(e+=(_!=null?_:"")+u[m+1]),this._$AH[m]=_}c&&!a&&this.j(e)}j(e){e===Mt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},us=class extends Fn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Mt?void 0:e}},cs=class extends Fn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Mt)}},ds=class extends Fn{constructor(e,r,o,a,u){super(e,r,o,a,u),this.type=5}_$AI(e,r=this){var c;if((e=(c=Dn(this,e,r,0))!=null?c:Mt)===We)return;let o=this._$AH,a=e===Mt&&o!==Mt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==Mt&&(o===Mt||a);a&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)==null?void 0:r.host)!=null?o:this.element,e):this._$AH.handleEvent(e)}},fs=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Dn(this,e)}},Ff={S:pl,A:Ue,P:ml,C:1,M:Pf,L:ls,R:Mf,V:Dn,D:Pn,I:Fn,H:cs,N:ds,U:us,B:fs},hl=xi.litHtmlPolyfillSupport,If;hl==null||hl(Rn,Pn),((If=xi.litHtmlVersions)!=null?If:xi.litHtmlVersions=[]).push("3.0.0");v();v();v();var hs=globalThis,ps=hs.ShadowRoot&&(hs.ShadyCSS===void 0||hs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gl=Symbol(),kf=new WeakMap,Ei=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==gl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(ps&&e===void 0){let o=r!==void 0&&r.length===1;o&&(e=kf.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&kf.set(r,e))}return e}toString(){return this.cssText}},Hf=i=>new Ei(typeof i=="string"?i:i+"",void 0,gl),B=(i,...e)=>{let r=i.length===1?i[0]:e.reduce((o,a,u)=>o+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+i[u+1],i[0]);return new Ei(r,i,gl)},vl=(i,e)=>{if(ps)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let o=document.createElement("style"),a=hs.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,i.appendChild(o)}},ms=ps?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let o of e.cssRules)r+=o.cssText;return Hf(r)})(i):i;var{is:jx,defineProperty:Xx,getOwnPropertyDescriptor:Qx,getOwnPropertyNames:tb,getOwnPropertySymbols:eb,getPrototypeOf:nb}=Object,ln=globalThis,zf=ln.trustedTypes,rb=zf?zf.emptyScript:"",yl=ln.reactiveElementPolyfillSupport,Ti=(i,e)=>i,_l={toAttribute(i,e){switch(e){case Boolean:i=i?rb:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(o){r=null}}return r}},Vf=(i,e)=>!jx(i,e),Uf={attribute:!0,type:String,converter:_l,reflect:!1,hasChanged:Vf},Wf,Bf;(Wf=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Bf=ln.litPropertyMetadata)!=null||(ln.litPropertyMetadata=new WeakMap);var Be=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Uf){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let o=Symbol(),a=this.getPropertyDescriptor(e,o,r);a!==void 0&&Xx(this.prototype,e,a)}}static getPropertyDescriptor(e,r,o){var c;let{get:a,set:u}=(c=Qx(this.prototype,e))!=null?c:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);u.call(this,p),this.requestUpdate(e,m,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:Uf}static _$Ei(){if(this.hasOwnProperty(Ti("elementProperties")))return;let e=nb(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ti("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ti("properties"))){let r=this.properties,o=[...tb(r),...eb(r)];for(let a of o)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[o,a]of r)this.elementProperties.set(o,a)}this._$Eh=new Map;for(let[r,o]of this.elementProperties){let a=this._$Eu(r,o);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let a of o)r.unshift(ms(a))}else e!==void 0&&r.push(ms(e));return r}static _$Eu(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,o;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return vl(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(o=>{var a;return(a=o.hostConnected)==null?void 0:a.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EO(e,r){var u;let o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(a!==void 0&&o.reflect===!0){let c=(((u=o.converter)==null?void 0:u.toAttribute)!==void 0?o.converter:_l).toAttribute(r,o.type);this._$Em=e,c==null?this.removeAttribute(a):this.setAttribute(a,c),this._$Em=null}}_$AK(e,r){var u;let o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let c=o.getPropertyOptions(a),p=typeof c.converter=="function"?{fromAttribute:c.converter}:((u=c.converter)==null?void 0:u.fromAttribute)!==void 0?c.converter:_l;this._$Em=a,this[a]=p.fromAttribute(r,c.type),this._$Em=null}}requestUpdate(e,r,o,a=!1,u){var c;if(e!==void 0){if(o!=null||(o=this.constructor.getPropertyOptions(e)),!((c=o.hasChanged)!=null?c:Vf)(a?u:this[e],r))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,o){var a;this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return $n(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[u,c]of this._$Ep)this[u]=c;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[u,c]of a)c.wrapped!==!0||this._$AL.has(u)||this[u]===void 0||this.C(u,this[u],c)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(o=this._$ES)==null||o.forEach(a=>{var u;return(u=a.hostUpdate)==null?void 0:u.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(o=>{var a;return(a=o.hostUpdated)==null?void 0:a.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},Gf;Be.elementStyles=[],Be.shadowRootOptions={mode:"open"},Be[Ti("elementProperties")]=new Map,Be[Ti("finalized")]=new Map,yl==null||yl({ReactiveElement:Be}),((Gf=ln.reactiveElementVersions)!=null?Gf:ln.reactiveElementVersions=[]).push("2.0.0");v();var Ai=globalThis,gs=Ai.trustedTypes,Zf=gs?gs.createPolicy("lit-html",{createHTML:i=>i}):void 0,Qf="$lit$",un=`lit$${(Math.random()+"").slice(9)}$`,th="?"+un,ib=`<${th}>`,zn=document,Oi=()=>zn.createComment(""),Ci=i=>i===null||typeof i!="object"&&typeof i!="function",eh=Array.isArray,ob=i=>eh(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",wl=`[ 	
\f\r]`,Si=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qf=/-->/g,Yf=/>/g,kn=RegExp(`>|${wl}(?:([^\\s"'>=/]+)(${wl}*=${wl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jf=/'/g,Kf=/"/g,nh=/^(?:script|style|textarea|title)$/i,rh=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),L=rh(1),hT=rh(2),Un=Symbol.for("lit-noChange"),Nt=Symbol.for("lit-nothing"),jf=new WeakMap,Hn=zn.createTreeWalker(zn,129);function ih(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zf!==void 0?Zf.createHTML(e):e}var sb=(i,e)=>{let r=i.length-1,o=[],a,u=e===2?"<svg>":"",c=Si;for(let p=0;p<r;p++){let m=i[p],_,T,S=-1,N=0;for(;N<m.length&&(c.lastIndex=N,T=c.exec(m),T!==null);)N=c.lastIndex,c===Si?T[1]==="!--"?c=qf:T[1]!==void 0?c=Yf:T[2]!==void 0?(nh.test(T[2])&&(a=RegExp("</"+T[2],"g")),c=kn):T[3]!==void 0&&(c=kn):c===kn?T[0]===">"?(c=a!=null?a:Si,S=-1):T[1]===void 0?S=-2:(S=c.lastIndex-T[2].length,_=T[1],c=T[3]===void 0?kn:T[3]==='"'?Kf:Jf):c===Kf||c===Jf?c=kn:c===qf||c===Yf?c=Si:(c=kn,a=void 0);let I=c===kn&&i[p+1].startsWith("/>")?" ":"";u+=c===Si?m+ib:S>=0?(o.push(_),m.slice(0,S)+Qf+m.slice(S)+un+I):m+un+(S===-2?p:I)}return[ih(i,u+(i[r]||"<?>")+(e===2?"</svg>":"")),o]},Wn=class{constructor({strings:e,_$litType$:r},o){let a;this.parts=[];let u=0,c=0,p=e.length-1,m=this.parts,[_,T]=sb(e,r);if(this.el=Wn.createElement(_,o),Hn.currentNode=this.el.content,r===2){let S=this.el.content.firstChild;S.replaceWith(...S.childNodes)}for(;(a=Hn.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let S of a.getAttributeNames())if(S.endsWith(Qf)){let N=T[c++],I=a.getAttribute(S).split(un),M=/([.?@])?(.*)/.exec(N);m.push({type:1,index:u,name:M[2],strings:I,ctor:M[1]==="."?El:M[1]==="?"?Tl:M[1]==="@"?Sl:$r}),a.removeAttribute(S)}else S.startsWith(un)&&(m.push({type:6,index:u}),a.removeAttribute(S));if(nh.test(a.tagName)){let S=a.textContent.split(un),N=S.length-1;if(N>0){a.textContent=gs?gs.emptyScript:"";for(let I=0;I<N;I++)a.append(S[I],Oi()),Hn.nextNode(),m.push({type:2,index:++u});a.append(S[N],Oi())}}}else if(a.nodeType===8)if(a.data===th)m.push({type:2,index:u});else{let S=-1;for(;(S=a.data.indexOf(un,S+1))!==-1;)m.push({type:7,index:u}),S+=un.length-1}u++}}static createElement(e,r){let o=zn.createElement("template");return o.innerHTML=e,o}};function Cr(i,e,r=i,o){var c,p,m;if(e===Un)return e;let a=o!==void 0?(c=r._$Co)==null?void 0:c[o]:r._$Cl,u=Ci(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),u===void 0?a=void 0:(a=new u(i),a._$AT(i,r,o)),o!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[o]=a:r._$Cl=a),a!==void 0&&(e=Cr(i,a._$AS(i,e.values),a,o)),e}var bl=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var _;let{el:{content:r},parts:o}=this._$AD,a=((_=e==null?void 0:e.creationScope)!=null?_:zn).importNode(r,!0);Hn.currentNode=a;let u=Hn.nextNode(),c=0,p=0,m=o[0];for(;m!==void 0;){if(c===m.index){let T;m.type===2?T=new Bn(u,u.nextSibling,this,e):m.type===1?T=new m.ctor(u,m.name,m.strings,this,e):m.type===6&&(T=new Al(u,this,e)),this._$AV.push(T),m=o[++p]}c!==(m==null?void 0:m.index)&&(u=Hn.nextNode(),c++)}return Hn.currentNode=zn,a}p(e){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},Bn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,o,a){var u;this.type=2,this._$AH=Nt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=(u=a==null?void 0:a.isConnected)!=null?u:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Cr(this,e,r),Ci(e)?e===Nt||e==null||e===""?(this._$AH!==Nt&&this._$AR(),this._$AH=Nt):e!==this._$AH&&e!==Un&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ob(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Nt&&Ci(this._$AH)?this._$AA.nextSibling.data=e:this.$(zn.createTextNode(e)),this._$AH=e}g(e){var u;let{values:r,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Wn.createElement(ih(o.h,o.h[0]),this.options)),o);if(((u=this._$AH)==null?void 0:u._$AD)===a)this._$AH.p(r);else{let c=new bl(a,this),p=c.u(this.options);c.p(r),this.$(p),this._$AH=c}}_$AC(e){let r=jf.get(e.strings);return r===void 0&&jf.set(e.strings,r=new Wn(e)),r}T(e){eh(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,a=0;for(let u of e)a===r.length?r.push(o=new Bn(this.k(Oi()),this.k(Oi()),this,this.options)):o=r[a],o._$AI(u),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},$r=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,a,u){this.type=1,this._$AH=Nt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=u,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Nt}_$AI(e,r=this,o,a){let u=this.strings,c=!1;if(u===void 0)e=Cr(this,e,r,0),c=!Ci(e)||e!==this._$AH&&e!==Un,c&&(this._$AH=e);else{let p=e,m,_;for(e=u[0],m=0;m<u.length-1;m++)_=Cr(this,p[o+m],r,m),_===Un&&(_=this._$AH[m]),c||(c=!Ci(_)||_!==this._$AH[m]),_===Nt?e=Nt:e!==Nt&&(e+=(_!=null?_:"")+u[m+1]),this._$AH[m]=_}c&&!a&&this.j(e)}j(e){e===Nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},El=class extends $r{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Nt?void 0:e}},Tl=class extends $r{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Nt)}},Sl=class extends $r{constructor(e,r,o,a,u){super(e,r,o,a,u),this.type=5}_$AI(e,r=this){var c;if((e=(c=Cr(this,e,r,0))!=null?c:Nt)===Un)return;let o=this._$AH,a=e===Nt&&o!==Nt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==Nt&&(o===Nt||a);a&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)==null?void 0:r.host)!=null?o:this.element,e):this._$AH.handleEvent(e)}},Al=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Cr(this,e)}};var xl=Ai.litHtmlPolyfillSupport,Xf;xl==null||xl(Wn,Bn),((Xf=Ai.litHtmlVersions)!=null?Xf:Ai.litHtmlVersions=[]).push("3.0.0");var oh=(i,e,r)=>{var u,c;let o=(u=r==null?void 0:r.renderBefore)!=null?u:e,a=o._$litPart$;if(a===void 0){let p=(c=r==null?void 0:r.renderBefore)!=null?c:null;o._$litPart$=a=new Bn(e.insertBefore(Oi(),p),p,void 0,r!=null?r:{})}return a._$AI(i),a};var G=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r,o;let e=super.createRenderRoot();return(o=(r=this.renderOptions).renderBefore)!=null||(r.renderBefore=e.firstChild),e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=oh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Un}},sh;G._$litElement$=!0,G["finalized"]=!0,(sh=globalThis.litElementHydrateSupport)==null||sh.call(globalThis,{LitElement:G});var Ol=globalThis.litElementPolyfillSupport;Ol==null||Ol({LitElement:G});var ah;((ah=globalThis.litElementVersions)!=null?ah:globalThis.litElementVersions=[]).push("4.0.0");v();v();v();var j=i=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};v();v();v();v();v();v();v();v();v();var Gn=class extends G{render(){return L` <div>Hello from SuperViz, ${this.name}</div> `}};Gn.properties={name:{type:String}},Gn.styles=B`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `,Gn=K([j("superviz-hello-world")],Gn);v();v();v();var uh=Wx(lh()),Cl=class{setConfig(e){this.configuration=e}get(e,r){return this.configuration?uh.default.get(this.configuration,e,r):r}},$l=new Cl;v();v();var Il=B`
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
`;v();var Ll=B`
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
`;v();var Nl=B`
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
`;var tt=i=>{var r;class e extends i{connectedCallback(){setTimeout(()=>{var p,m;let a=document.getElementById("superviz-style"),u=this.createCustomColors(),c=document.createElement("style");c.innerHTML=(a==null?void 0:a.innerHTML)||"",(p=this.shadowRoot)==null||p.appendChild(c),u&&((m=this.shadowRoot)==null||m.appendChild(u))}),super.connectedCallback()}createCustomColors(){if(!$l.get("colors"))return;let a=document.createElement("style"),u=Object.entries($l.get("colors")).map(([c,p])=>`--${c}: ${p} !important;`).join(" ");return a.innerHTML=`
      * {
        ${u}
      }
    `,a}emitEvent(a,u,c={composed:!0,bubbles:!0}){let p=new CustomEvent(a,k({detail:u},c));this.dispatchEvent(p)}}return e.styles=[Il,Ll,Ml,Nl,(r=i.styles)!=null?r:[]],e};v();var Rl=(u=>(u[u.xs=14]="xs",u[u.sm=18]="sm",u[u.md=24]="md",u[u.lg=36]="lg",u[u.xl=44]="xl",u))(Rl||{});var ch=tt(G),ab=[ch.styles],Vn=class extends ch{constructor(){super();this.name="",this.size="md"}get iconSize(){if(!!this.allowSetSize)return Rl[this.size]}render(){return L`
      <i
        class="sv-icon sv-icon-${this.name}_${this.size}"
        style="font-size: ${this.iconSize}px"
      ></i>
    `}};Vn.properties={name:{type:String},size:{type:String},allowSetSize:{type:Boolean}},Vn.styles=[ab,B`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `],Vn=K([j("superviz-icon")],Vn);v();v();v();v();var ys={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_s=i=>(...e)=>({_$litDirective$:i,values:e}),Lr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var lt=_s(class extends Lr{constructor(i){var e;if(super(i),i.type!==ys.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var o,a;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(u=>u!=="")));for(let u in e)e[u]&&!((o=this.st)!=null&&o.has(u))&&this.it.add(u);return this.render(e)}let r=i.element.classList;for(let u of this.it)u in e||(r.remove(u),this.it.delete(u));for(let u in e){let c=!!e[u];c===this.it.has(u)||((a=this.st)==null?void 0:a.has(u))||(c?(r.add(u),this.it.add(u)):(r.remove(u),this.it.delete(u)))}return We}});v();var dh=B`
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
    z-index: 20;
  }

  .header {
    display: grid;
    grid-template-rows: 41px 1px;
    align-items: center;
    padding: 0 10px;
    height: 42px;
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

  .text.username {
    font-size: 14px;
    text-align: center;

    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }

  .items li {
    color: rgb(var(--sv-gray-600));
    text-transform: uppercase;
    padding: 0 10px;
    cursor: pointer;
    min-width: 103px;
    min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    height: 42px;
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
    height: 1px;
    background: rgb(var(--sv-gray-300));
    padding: 0px;
    margin: 0px;
    justify-self: flex-end;
  }

  .option-label {
    white-space: nowrap;
  }

  @media (max-width: 780px) {
    .menu--top-left,
    .menu--top-center,
    .menu--top-right {
      bottom: 36px;
    }
  }
`;v();var fh=tt(G),lb=[fh.styles,dh],Zn=class extends fh{constructor(){super();this.menu=void 0;this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let o=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),u=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=o.includes(a),_=o.includes(u),T=o.includes(p);m||_||T||this.close()};this.close=()=>{this.open=!1,this.emitEvent("close",{bubbles:!1,composed:!1})};this.callbackSelected=r=>{this.open=!1;let o=this.returnTo?r[this.returnTo]:r;this.emitEvent("selected",o,{bubbles:!1,composed:!0})};this.adjustPosition=()=>{this.adjustPositionVertical(),this.adjustPositionHorizontal()};this.tooltip=()=>this.canShowTooltip?L` <superviz-tooltip
      tooltipData=${JSON.stringify(this.onHoverData)}
      ?shiftTooltipLeft=${this.shiftTooltipLeft}
    ></superviz-tooltip>`:"";this.showTooltip=!1}disconnectedCallback(){var o;super.disconnectedCallback(),document.removeEventListener("click",this.onClickOutDropdown);let r=this.shadowRoot.querySelector(".dropdown");r==null||r.removeEventListener("mouseenter",()=>{this.showTooltip=!0}),r==null||r.removeEventListener("mouseleave",()=>{this.showTooltip=!1}),(o=this.dropdownResizeObserver)==null||o.disconnect()}updated(r){if(!!r.has("open")){if(this.emitEvent("toggle-dropdown-state",{open:this.open,font:this.name},{bubbles:!1,composed:!1}),this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown)}}get dropdownBounds(){this.dropdownContent||(this.dropdownContent=this.shadowRoot.querySelector(".dropdown-content"));let r=this.dropdownContent.getBoundingClientRect(),{y:o,height:a,x:u,width:c}=this.menu.getBoundingClientRect();return{top:o,bottom:o+a+4,left:u,right:u+c,height:a+4,width:c,contentX:r.x,contentY:r.y,contentWidth:r.width}}positionVerticalAction(){let{top:r,bottom:o}=this.dropdownBounds,{innerHeight:a}=window,u=o>a,c=r<0;return u&&this.position.includes("bottom")||c&&this.position.includes("top")?2:!u&&!c&&this.shouldUseOriginalVertical()?1:0}positionHorizontalAction(){if(this.dropdownCovered())return 0;let{right:r,left:o,contentX:a,contentWidth:u,width:c}=this.dropdownBounds,{innerWidth:p}=window,m=r>p,T=o<0||m;if(T&&!this.position.includes("center"))return 2;if(this.position.includes("center")){let S=a+u/2,N=S-c/2<0,I=S+c/2>p;if(N||I)return 2}return!T&&this.shouldUseOriginalHorizontal()?1:this.shouldCenter()&&this.position!==this.originalPosition&&!this.position.includes("center")?3:0}dropdownCovered(){let{left:r,right:o}=this.dropdownBounds,{innerWidth:a}=window;if(this.position.includes("center"))return!1;let u=o>a&&this.position.includes("left"),c=r<0&&this.position.includes("right");return u||c}shouldCenter(){let{contentX:r,contentWidth:o,width:a}=this.dropdownBounds,u=r+o/2,c=u-a/2<0,p=u+a/2>window.innerWidth;return!(c||p)}shouldUseOriginalVertical(){let{height:r,contentY:o}=this.dropdownBounds,{innerHeight:a}=window,u=o+r;return this.originalPosition.includes("bottom")?r+u<a:o-r>0}shouldUseOriginalHorizontal(){let{width:r,contentX:o}=this.dropdownBounds,{innerWidth:a}=window,u=o+r;return this.position===this.originalPosition?!1:this.originalPosition.includes("center")?u<a&&o-r>0:this.originalPosition.includes("left")?o-r>0:u<a}adjustPositionVertical(){let{top:r,bottom:o}=this.dropdownBounds,{innerHeight:a}=window,u=this.positionVerticalAction();if(u===0)return;if(u===1){let _=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,_);return}let c=a-o>r?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,c);this.position=m}adjustPositionHorizontal(){let{left:r,right:o,width:a}=this.dropdownBounds,u=r<0,c=o>window.innerWidth,p=this.positionHorizontalAction();if(p===0)return;if(p===1){let M=this.originalPosition.split("-")[1];this.position=this.position.replace(/left|center|right/,M);return}let m=u?o:r,_=(u?a:-a)/2-20,T=m+_;if(u=T<0,c=T+a>window.innerWidth,!(u||c)&&p===3||p===3){let M=this.position.replace(/left|right/,"center");this.position=M;return}if(this.position.includes("center")){let M=u?"right":"left",gt=this.position.replace("center",M);this.position=gt;return}let I=this.position.replace(/left|right/,"center");this.position=I}setMenu(){var r;if(!this.menu){this.menu=this.shadowRoot.querySelector(".menu");let o={rootMargin:"0px",threshold:1},a=new IntersectionObserver(this.adjustPosition,o);this.dropdownResizeObserver=new ResizeObserver(this.adjustPosition);let u=this.menu;a.observe(u),this.dropdownResizeObserver.observe((r=this.scrollableParent)!=null?r:document.body)}}get scrollableParent(){let r;this.host||(this.host=this.getRootNode().host);let o=this.host;for(;!r;){let a=o==null?void 0:o.parentElement;if(this.isScrollable(a)){r=a;break}if(o=a,!o)break}return r}isScrollable(r){if(!r)return!1;let o=r.scrollHeight>r.clientHeight,a=window.getComputedStyle(r).overflowY,u=window.getComputedStyle(r).overflowX,c=a.indexOf("hidden")!==-1,p=u.indexOf("hidden")!==-1;return o&&!c&&!p}get renderHeader(){return this.name?L` <div class="header">
      <span class="text username">${this.name}</span>
      <span class="sv-hr"></span>
    </div>`:L``}toggle(){this.disabled||(this.originalPosition||(this.originalPosition=this.position),this.setMenu(),this.open=!this.open,this.emitEvent("open",{open:this.open}),this.open&&setTimeout(()=>this.adjustPosition()))}get supervizIcons(){var r;return(r=this.icons)==null?void 0:r.map(o=>L`<superviz-icon allowSetSize=${!0} name="${o}" size="sm"></superviz-icon>`)}get listOptions(){return this.options.map((r,o)=>{var u;let a={text:!0,"text-bold":!0,active:(r==null?void 0:r[this.returnTo])&&this.active===(r==null?void 0:r[this.returnTo])};return L`<li @click=${()=>this.callbackSelected(r)} class=${lt(a)}>
        ${(u=this.supervizIcons)==null?void 0:u.at(o)} <span class="option-label">${r[this.label]}</span>
      </li>`})}render(){let r={menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu--top-left":this.position==="top-left","menu--top-center":this.position==="top-center","menu--top-right":this.position==="top-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right","who-is-online-dropdown":this.name};return L`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
        ${this.tooltip()}
      </div>
      <div class="dropdown-list">
        <div class=${lt(r)}>
          ${this.renderHeader}
          <ul class="items">
            ${this.listOptions}
          </ul>
        </div>
      </div>
    `}};Zn.styles=lb,Zn.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},position:{type:String},options:{type:Array},label:{type:String},returnTo:{type:String},active:{type:[String,Object]},icons:{type:Array},name:{type:String},onHoverData:{type:Object},showTooltip:{type:Boolean},dropdown:{type:Object},canShowTooltip:{type:Boolean},drodpdownSizes:{type:Object},shiftTooltipLeft:{type:Boolean}},Zn=K([j("superviz-dropdown")],Zn);v();v();var hh=B`
  .superviz-who-is-online__tooltip {
    --host-height: 0px;
    --host-width: 0px;
    --vertical-offset: 12px;

    background-color: rgb(var(--sv-gray-600));
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    border-radius: 2px;
    cursor: default;
    display: none;
    transition: opacity 0.2s ease-in-out display 0s;
    overflow-x: clip;
    z-index: 100;
  }

  .tooltip-extras {
    left: 29px;
    top: 60px;
    z-index: 10;
  }

  .superviz-who-is-online__tooltip-arrow {
    width: 13px;
    height: 13px;
    position: absolute;
    background-color: rgb(var(--sv-gray-600));
    transform: rotate(45deg);
    border-top-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .show-tooltip {
    opacity: 1;
    display: block;
  }

  .tooltip-name,
  .tooltip-action {
    margin: 0;
    font-family: roboto;
    white-space: nowrap;
    text-align: center;
  }

  .tooltip-name {
    color: white;
    font-size: 14px;
  }

  .tooltip-action {
    color: rgb(var(--sv-gray-400));
    font-size: 12px;
  }

  .tooltip-top {
    top: auto;
    bottom: calc(var(--host-height) + var(--vertical-offset));
  }

  .tooltip-bottom {
    top: calc(var(--host-height) + var(--vertical-offset));
    bottom: auto;
  }

  .tooltip-left {
    translate: -50% 0;
  }

  .tooltip-center {
    left: 50%;
    transform: translateX(-50%);
    right: auto;
  }

  .tooltip-right {
    translate: 50% 0;
  }

  .tooltip-bottom .superviz-who-is-online__tooltip-arrow {
    top: -6.5px;
  }

  .tooltip-top .superviz-who-is-online__tooltip-arrow {
    bottom: -6.5px;
  }

  .tooltip-center .superviz-who-is-online__tooltip-arrow {
    left: 0;
    margin-left: 50%;
    translate: -50% 0;
  }

  .tooltip-left .superviz-who-is-online__tooltip-arrow {
    translate: 50% 0;
    border-radius: 0;
    right: 0;
  }

  .tooltip-right .superviz-who-is-online__tooltip-arrow {
    translate: -100% 0;
    border-radius: 0;
  }

  .shift-left {
    left: 0;
    transform: translateX(-22%);
    --vertical-offset: 2px;
  }

  @media (max-width: 780px) {
    .tooltip-extras {
      top: 52px;
      left: 25px;
    }
  }
`;v();var ph=tt(G),ub=[ph.styles,hh],qn=class extends ph{constructor(){super();this.hide=()=>{this.showTooltip=!1};this.show=()=>{this.showTooltip=!0};this.adjustTooltipVerticalPosition=()=>{let{bottom:r,top:o}=this.tooltip.getBoundingClientRect(),a=window.innerHeight;this.tooltipVerticalPosition.includes("top")&&o<0&&(this.tooltipVerticalPosition=this.tooltipVerticalPosition.replace("top","bottom")),this.tooltipVerticalPosition.includes("bottom")&&r>a&&(this.tooltipVerticalPosition=this.tooltipVerticalPosition.replace("bottom","top"))};this.adjustTooltipHorizontalPosition=()=>{let{left:r,right:o}=this.tooltip.getBoundingClientRect(),a=window.innerWidth;r<0&&(this.tooltipHorizontalPosition=this.tooltipHorizontalPosition.replace("center","right")),o>a&&(this.tooltipHorizontalPosition=this.tooltipHorizontalPosition.replace("center","left"))};this.adjustTooltipPosition=()=>{this.tooltip||(this.tooltip=this.shadowRoot.querySelector(".superviz-who-is-online__tooltip")),this.adjustTooltipVerticalPosition(),this.adjustTooltipHorizontalPosition()};this.tooltipVerticalPosition="tooltip-bottom",this.tooltipHorizontalPosition="tooltip-center",this.showTooltip=!1,this.parentSizes={height:0,width:0}}firstUpdated(r){let{parentElement:o}=this;o==null||o.addEventListener("mouseenter",this.show),o==null||o.addEventListener("mouseleave",this.hide),this.tooltipVerticalPosition="tooltip-bottom",this.tooltipHorizontalPosition="tooltip-center"}disconnectedCallback(){super.disconnectedCallback();let{parentElement:r}=this;r==null||r.removeEventListener("mouseenter",this.show),r==null||r.removeEventListener("mouseleave",this.hide)}updated(r){if(r.has("showTooltip")&&this.showTooltip){let{parentElement:o}=this;if(!o)return;let{height:a,width:u}=o.getBoundingClientRect();(this.parentSizes.height!==a||this.parentSizes.width!==u)&&(this.parentSizes={height:a,width:u})}}renderTooltip(){var u,c,p,m;setTimeout(()=>this.adjustTooltipPosition());let r=this.tooltipVerticalPosition,o=this.tooltipHorizontalPosition,a={"superviz-who-is-online__tooltip":!0,"tooltip-extras":this.tooltipOnLeft,"show-tooltip":this.showTooltip,"shift-left":this.shiftTooltipLeft};return a[r]=!0,a[o]=!0,L`<div
      class=${lt(a)}
      style="--host-height: ${(u=this.parentSizes)==null?void 0:u.height}px; --host-width: ${(c=this.parentSizes)==null?void 0:c.width}px;"
    >
      <p class="tooltip-name">${(p=this.tooltipData)==null?void 0:p.name}</p>
      <p class="tooltip-action">${(m=this.tooltipData)==null?void 0:m.action}</p>
      <div class="superviz-who-is-online__tooltip-arrow"></div>
    </div>`}render(){return L`${this.renderTooltip()}`}};qn.styles=ub,qn.properties={tooltipData:{type:Object},tooltipOnLeft:{type:Boolean},showTooltip:{type:Boolean},tooltip:{type:Object},tooltipVerticalPosition:{type:String},tooltipHorizontalPosition:{type:String},parentSizes:{type:Object},shiftTooltipLeft:{type:Boolean}},qn=K([j("superviz-tooltip")],qn);v();v();v();var ws=B`  
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
`;var mh=tt(G),cb=[mh.styles,ws],Mr=class extends mh{constructor(){super(...arguments);this.getContainer=()=>window.document.querySelector("superviz-modal-container");this.createContainer=r=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(r)};this.createModal=({detail:r})=>{this.createContainer(r),window.document.body.appendChild(this.modal)};this.destroyModal=()=>{var r;this.modal=void 0,(r=this.getContainer())==null||r.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};Mr.styles=cb,Mr=K([j("superviz-modal")],Mr);v();var gh=tt(G),db=[gh.styles,ws],Nr=class extends gh{constructor(){super(...arguments);this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))};this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(r){this.options=r}render(){let r=()=>L`
        <div class="modal--header">
          <span class="text text-bold sv-gray-600">${this.options.title}</span>
          <div class="close" @click=${this.closeModal}>
            <superviz-icon name="close" size="md"></superviz-icon>
          </div>
        </div>
      `,o=()=>L`
        <div class="modal--body">
          <div class="modal--body-content">
            ${this.options.body}
          </div>
        </div>
      `,a=()=>{if(this.options.footer)return L`
          <div class="modal--footer">
            ${this.options.footer}
          </div>
        `;let u=this.options.confirmLabel||"OK",c=this.options.cancelLabel||"Cancel";return this.options.confirm&&this.options.cancel?L`
          <div class="modal--footer">
            <button class="text text-bold btn btn--cancel" @click=${this.closeModal}>${c}</button>
            <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${u}</button>
          </div>
        `:L`
        <div class="modal--footer">
          <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${u}</button>
        </div>
      `};return L`
      <div class="modal--overlay"></div>
      <div class="modal--container">
        <div class="modal">
          ${r()}

          ${o()}

          ${a()}
        </div>
      </div>
    `}};Nr.styles=db,Nr=K([j("superviz-modal-container")],Nr);v();v();v();v();v();var Dl=B`
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
`;v();var Pl=B`
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
`;v();var Fl=B`
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
`;v();var kl=B`
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
`;v();var Hl=B`
  .comments {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 288px;
  }

  .hidden {
    display: none;
  }
`;v();var zl=B`
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
`;v();var Ul=B`
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
`;v();var Wl=B`
  .annotation-resolved {
    background: rgba(var(--sv-gray-200), 0.5);
    height: 26px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(var(--sv-gray-200));
  }
`;v();var Bl=B`
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
`;v();var Gl=B`
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
`;v();var Vl=B`
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
    padding-left: 10px;
  }

  button.float-button p {
    opacity: 0;
    transition: opacity 100ms linear;
  }

  button.float-button:hover p {
    opacity: 1;
    transition-delay: 200ms;
  }

  button.float-button:not(:hover) {
    transition-delay: 100ms;
  }

  .hide-button {
    display: none !important;
  }

  button.float-button:hover {
    width: 110px;
    border-radius: 30px;
  }
`;v();var Zl=B`
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
`;v();var ql;function Yl(i){let e=i.querySelector("#superviz-comments");if(e&&!ql){let r={childList:!0,attributes:!0,characterData:!0,subtree:!0};ql=new MutationObserver(o=>{o.forEach(a=>{!a.removedNodes.length||a.removedNodes.forEach(u=>{u.id==="poweredby-footer"&&fb(i)})})}),ql.observe(e,r)}}function fb(i){let e=document.createElement("div");e.id="poweredby-footer",e.className="footer";let r=document.createElement("div");r.className="powered-by powered-by--horizontal";let o=document.createElement("a");o.href="https://superviz.com/",o.target="_blank",o.className="link";let a=document.createElement("div");a.textContent="Powered by";let u=document.createElement("img");u.width=48,u.height=8.86,u.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",r.appendChild(o),o.appendChild(a),a.appendChild(u),e.appendChild(r);let c=i.getElementById("superviz-comments");c&&c.appendChild(e),Yl(i)}var vh=tt(G),hb=[vh.styles,Dl,Zl],Yn=class extends vh{constructor(){super();this.annotations=[],this.annotationFilter="all",this.waterMarkState=!1,this.side="left: 0px"}updateAnnotations(r){this.annotations=r}toggle(){this.emitEvent("toggle",{})}waterMarkStatus(r){this.waterMarkState=r}setFilter({detail:r}){let{filter:o}=r;this.annotationFilter=o}updated(r){super.updated(r),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(".superviz-comments");!o||(this.waterMarkState&&Yl(this.shadowRoot),o.setAttribute("style",this.side))})}render(){let r=[this.open?"container":"container-close","superviz-comments"].join(" "),o=L` <div id="poweredby-footer" class="footer">
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
    </div>`,a=this.waterMarkState?o:"";return L`
      <div id="superviz-comments" class=${r}>
        <div class="header">
          <superviz-comments-topbar
            @close=${this.toggle}
            side=${this.side.split(":")[0]}
          ></superviz-comments-topbar>
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
    `}};Yn.styles=hb,Yn.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String}},Yn=K([j("superviz-comments")],Yn);v();v();var pb=tt(G),mb=[pb.styles,Pl],Jn=class extends tt(G){close(){this.dispatchEvent(new CustomEvent("close"))}render(){return L`
      <div class="topbar">
        <span class="text text-bold">COMMENTS</span>
        <span @click=${this.close} class="toggle-icon">
          <superviz-icon name=${this.side} size="lg"></superviz-icon>
        </span>
      </div>
    `}};Jn.styles=mb,Jn.properties={side:{type:String}},Jn=K([j("superviz-comments-topbar")],Jn);v();var yh=tt(G),gb=[yh.styles,Fl],Kn=class extends yh{constructor(){super(...arguments);this.prepareToCreateAnnotation=o=>$n(this,[o],function*({detail:r}){this.annotation=r,yield this.updateComplete,this.emitEvent("comment-input-focus",r)});this.cancelTemporaryAnnotation=()=>{this.annotation=null};this.cancelTemporaryAnnotationEsc=r=>{(r==null?void 0:r.key)==="Escape"&&(this.annotation=null)}}createComment({detail:r}){this.emitEvent("create-annotation",r),this.annotation=null}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.addEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.addEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)})}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.removeEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.removeEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)})}render(){let r={"annotations--comments-input":!0,hidden:!this.annotation};return L`
      <div class="annotations">
        <span class="text text-big text-bold annotations--add-comment-btn">
          Click anywhere to add a comment
        </span>
        <div class=${lt(r)}>
          <superviz-comments-comment-input
            @create-annotation=${this.createComment}
            eventType="create-annotation"
          >
          </superviz-comments-comment-input>
        </div>
      </div>
    `}};Kn.styles=gb,Kn.properties={annotation:{type:Object}},Kn=K([j("superviz-comments-annotations")],Kn);v();v();v();v();var{D:vb}=Ff;var _h=()=>document.createComment(""),Rr=(i,e,r)=>{var u;let o=i._$AA.parentNode,a=e===void 0?i._$AB:e._$AA;if(r===void 0){let c=o.insertBefore(_h(),a),p=o.insertBefore(_h(),a);r=new vb(c,p,i,i.options)}else{let c=r._$AB.nextSibling,p=r._$AM,m=p!==i;if(m){let _;(u=r._$AQ)==null||u.call(r,i),r._$AM=i,r._$AP!==void 0&&(_=i._$AU)!==p._$AU&&r._$AP(_)}if(c!==a||m){let _=r._$AA;for(;_!==c;){let T=_.nextSibling;o.insertBefore(_,a),_=T}}}return r},cn=(i,e,r=i)=>(i._$AI(e,r),i),yb={},wh=(i,e=yb)=>i._$AH=e,xh=i=>i._$AH,bs=i=>{var o;(o=i._$AP)==null||o.call(i,!1,!0);let e=i._$AA,r=i._$AB.nextSibling;for(;e!==r;){let a=e.nextSibling;e.remove(),e=a}};var bh=(i,e,r)=>{let o=new Map;for(let a=e;a<=r;a++)o.set(i[a],a);return o},Dr=_s(class extends Lr{constructor(i){if(super(i),i.type!==ys.CHILD)throw Error("repeat() can only be used in text expressions")}ht(i,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);let a=[],u=[],c=0;for(let p of i)a[c]=o?o(p,c):c,u[c]=r(p,c),c++;return{values:u,keys:a}}render(i,e,r){return this.ht(i,e,r).values}update(i,[e,r,o]){var gt;let a=xh(i),{values:u,keys:c}=this.ht(e,r,o);if(!Array.isArray(a))return this.dt=c,u;let p=(gt=this.dt)!=null?gt:this.dt=[],m=[],_,T,S=0,N=a.length-1,I=0,M=u.length-1;for(;S<=N&&I<=M;)if(a[S]===null)S++;else if(a[N]===null)N--;else if(p[S]===c[I])m[I]=cn(a[S],u[I]),S++,I++;else if(p[N]===c[M])m[M]=cn(a[N],u[M]),N--,M--;else if(p[S]===c[M])m[M]=cn(a[S],u[M]),Rr(i,m[M+1],a[S]),S++,M--;else if(p[N]===c[I])m[I]=cn(a[N],u[I]),Rr(i,a[S],a[N]),N--,I++;else if(_===void 0&&(_=bh(c,I,M),T=bh(p,S,N)),_.has(p[S]))if(_.has(p[N])){let ct=T.get(c[I]),vt=ct!==void 0?a[ct]:null;if(vt===null){let qt=Rr(i,a[S]);cn(qt,u[I]),m[I]=qt}else m[I]=cn(vt,u[I]),Rr(i,a[S],vt),a[ct]=null;I++}else bs(a[N]),N--;else bs(a[S]),S++;for(;I<=M;){let ct=Rr(i,m[M+1]);cn(ct,u[I]),m[I++]=ct}for(;S<=N;){let ct=a[S++];ct!==null&&bs(ct)}return this.dt=c,wh(i,m),We}});var Eh=tt(G),_b=[Eh.styles,Hl],jn=class extends Eh{constructor(){super();this.unselectAnnotation=()=>{this.selectedAnnotation=null};this.unselectAnnotationEsc=r=>{r&&(r==null?void 0:r.key)!=="Escape"||(this.selectedAnnotation=null)};this.selectAnnotation=({detail:r})=>{let{uuid:o}=r;if(this.selectedAnnotation===o){this.selectedAnnotation=null;return}this.selectedAnnotation=o};this.checkLastAnnotation=r=>{var u,c;let o=this.annotations.filter(p=>p.resolved),a=this.annotations.filter(p=>!p.resolved);return this.annotationFilter==="all"?r===((u=o[o.length-1])==null?void 0:u.uuid):r===((c=a[a.length-1])==null?void 0:c.uuid)};this.annotations=[]}updated(r){super.updated(r),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(`[uuid='${this.selectedAnnotation}']`);if(!o)return;let a=this.lastCommentId===this.selectedAnnotation,u=a?0:-150,c=o.getClientRects()[0];!c||(this.scrollBy(0,c.y+u),a&&setTimeout(()=>{this.scrollBy(0,c.y+u)},200))})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("select-annotation",this.selectAnnotation),window.document.body.addEventListener("keyup",this.unselectAnnotationEsc),window.document.body.addEventListener("unselect-annotation",this.unselectAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("select-annotation",this.selectAnnotation),window.document.body.removeEventListener("keyup",this.unselectAnnotationEsc),window.document.body.removeEventListener("unselect-annotation",this.unselectAnnotation)}render(){return L` ${Dr(this.annotations.filter(r=>r.comments.length),r=>r.uuid,r=>L`
        <superviz-comments-annotation-item
          annotation=${JSON.stringify(r)}
          selected="${this.selectedAnnotation}"
          annotationFilter=${this.annotationFilter}
          uuid=${r.uuid}
          isLastComment=${this.checkLastAnnotation(r.uuid)}
        >
        </superviz-comments-annotation-item>
      `)}`}};jn.styles=_b,jn.properties={annotations:{type:Object},selectedAnnotation:{type:String},annotationFilter:{type:String}},jn=K([j("superviz-comments-content")],jn);v();v();v();v();v();var Ge=class extends Error{},Es=class extends Ge{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},Ts=class extends Ge{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},Ss=class extends Ge{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},Ve=class extends Ge{},Pr=class extends Ge{constructor(e){super(`Invalid unit ${e}`)}},Rt=class extends Ge{},we=class extends Ge{constructor(){super("Zone is an abstract class")}};v();v();v();var D="numeric",xe="short",ee="long",dn={year:D,month:D,day:D},Ii={year:D,month:xe,day:D},Jl={year:D,month:xe,day:D,weekday:xe},Li={year:D,month:ee,day:D},Mi={year:D,month:ee,day:D,weekday:ee},Ni={hour:D,minute:D},Ri={hour:D,minute:D,second:D},Di={hour:D,minute:D,second:D,timeZoneName:xe},Pi={hour:D,minute:D,second:D,timeZoneName:ee},Fi={hour:D,minute:D,hourCycle:"h23"},ki={hour:D,minute:D,second:D,hourCycle:"h23"},Hi={hour:D,minute:D,second:D,hourCycle:"h23",timeZoneName:xe},zi={hour:D,minute:D,second:D,hourCycle:"h23",timeZoneName:ee},Ui={year:D,month:D,day:D,hour:D,minute:D},Wi={year:D,month:D,day:D,hour:D,minute:D,second:D},Bi={year:D,month:xe,day:D,hour:D,minute:D},Gi={year:D,month:xe,day:D,hour:D,minute:D,second:D},Kl={year:D,month:xe,day:D,weekday:xe,hour:D,minute:D},Vi={year:D,month:ee,day:D,hour:D,minute:D,timeZoneName:xe},Zi={year:D,month:ee,day:D,hour:D,minute:D,second:D,timeZoneName:xe},qi={year:D,month:ee,day:D,weekday:ee,hour:D,minute:D,timeZoneName:ee},Yi={year:D,month:ee,day:D,weekday:ee,hour:D,minute:D,second:D,timeZoneName:ee};v();v();v();v();var Zt=class{get type(){throw new we}get name(){throw new we}get ianaName(){return this.name}get isUniversal(){throw new we}offsetName(e,r){throw new we}formatOffset(e,r){throw new we}offset(e){throw new we}equals(e){throw new we}get isValid(){throw new we}};var jl=null,Ce=class extends Zt{static get instance(){return jl===null&&(jl=new Ce),jl}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:o}){return Os(e,r,o)}formatOffset(e,r){return fn(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}};v();var $s={};function wb(i){return $s[i]||($s[i]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:i,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),$s[i]}var xb={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function bb(i,e){let r=i.format(e).replace(/\u200E/g,""),o=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,a,u,c,p,m,_,T]=o;return[c,a,u,p,m,_,T]}function Eb(i,e){let r=i.formatToParts(e),o=[];for(let a=0;a<r.length;a++){let{type:u,value:c}=r[a],p=xb[u];u==="era"?o[p]=c:Y(p)||(o[p]=parseInt(c,10))}return o}var Cs={},Ct=class extends Zt{static create(e){return Cs[e]||(Cs[e]=new Ct(e)),Cs[e]}static resetCache(){Cs={},$s={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(r){return!1}}constructor(e){super(),this.zoneName=e,this.valid=Ct.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:o}){return Os(e,r,o,this.name)}formatOffset(e,r){return fn(this.offset(e),r)}offset(e){let r=new Date(e);if(isNaN(r))return NaN;let o=wb(this.name),[a,u,c,p,m,_,T]=o.formatToParts?Eb(o,r):bb(o,r);p==="BC"&&(a=-Math.abs(a)+1);let N=Fr({year:a,month:u,day:c,hour:m===24?0:m,minute:_,second:T,millisecond:0}),I=+r,M=I%1e3;return I-=M>=0?M:1e3+M,(N-I)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}};v();var Th={};function Tb(i,e={}){let r=JSON.stringify([i,e]),o=Th[r];return o||(o=new Intl.ListFormat(i,e),Th[r]=o),o}var Xl={};function Ql(i,e={}){let r=JSON.stringify([i,e]),o=Xl[r];return o||(o=new Intl.DateTimeFormat(i,e),Xl[r]=o),o}var tu={};function Sb(i,e={}){let r=JSON.stringify([i,e]),o=tu[r];return o||(o=new Intl.NumberFormat(i,e),tu[r]=o),o}var eu={};function Ab(i,e={}){let c=e,{base:r}=c,o=ll(c,["base"]),a=JSON.stringify([i,o]),u=eu[a];return u||(u=new Intl.RelativeTimeFormat(i,e),eu[a]=u),u}var Ji=null;function Ob(){return Ji||(Ji=new Intl.DateTimeFormat().resolvedOptions().locale,Ji)}function Cb(i){let e=i.indexOf("-x-");e!==-1&&(i=i.substring(0,e));let r=i.indexOf("-u-");if(r===-1)return[i];{let o,a;try{o=Ql(i).resolvedOptions(),a=i}catch(p){let m=i.substring(0,r);o=Ql(m).resolvedOptions(),a=m}let{numberingSystem:u,calendar:c}=o;return[a,u,c]}}function $b(i,e,r){return(r||e)&&(i.includes("-u-")||(i+="-u"),r&&(i+=`-ca-${r}`),e&&(i+=`-nu-${e}`)),i}function Ib(i){let e=[];for(let r=1;r<=12;r++){let o=H.utc(2009,r,1);e.push(i(o))}return e}function Lb(i){let e=[];for(let r=1;r<=7;r++){let o=H.utc(2016,11,13+r);e.push(i(o))}return e}function Is(i,e,r,o){let a=i.listingMode();return a==="error"?null:a==="en"?r(e):o(e)}function Mb(i){return i.numberingSystem&&i.numberingSystem!=="latn"?!1:i.numberingSystem==="latn"||!i.locale||i.locale.startsWith("en")||new Intl.DateTimeFormat(i.intl).resolvedOptions().numberingSystem==="latn"}var nu=class{constructor(e,r,o){this.padTo=o.padTo||0,this.floor=o.floor||!1;let p=o,{padTo:a,floor:u}=p,c=ll(p,["padTo","floor"]);if(!r||Object.keys(c).length>0){let m=k({useGrouping:!1},o);o.padTo>0&&(m.minimumIntegerDigits=o.padTo),this.inf=Sb(e,m)}}format(e){if(this.inf){let r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{let r=this.floor?Math.floor(e):kr(e,3);return wt(r,this.padTo)}}},ru=class{constructor(e,r,o){this.opts=o,this.originalZone=void 0;let a;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){let c=-1*(e.offset/60),p=c>=0?`Etc/GMT+${c}`:`Etc/GMT${c}`;e.offset!==0&&Ct.create(p).valid?(a=p,this.dt=e):(a="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,a=e.zone.name):(a="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);let u=k({},this.opts);u.timeZone=u.timeZone||a,this.dtf=Ql(r,u)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){let o=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return Lt(k({},r),{value:o})}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},iu=class{constructor(e,r,o){this.opts=k({style:"long"},o),!r&&Ls()&&(this.rtf=Ab(e,o))}format(e,r){return this.rtf?this.rtf.format(e,r):Sh(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}},it=class{static fromOpts(e){return it.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,r,o,a=!1){let u=e||ut.defaultLocale,c=u||(a?"en-US":Ob()),p=r||ut.defaultNumberingSystem,m=o||ut.defaultOutputCalendar;return new it(c,p,m,u)}static resetCache(){Ji=null,Xl={},tu={},eu={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:o}={}){return it.create(e,r,o)}constructor(e,r,o,a){let[u,c,p]=Cb(e);this.locale=u,this.numberingSystem=r||c||null,this.outputCalendar=o||p||null,this.intl=$b(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Mb(this)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:it.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone(Lt(k({},e),{defaultToEN:!0}))}redefaultToSystem(e={}){return this.clone(Lt(k({},e),{defaultToEN:!1}))}months(e,r=!1){return Is(this,e,ou,()=>{let o=r?{month:e,day:"numeric"}:{month:e},a=r?"format":"standalone";return this.monthsCache[a][e]||(this.monthsCache[a][e]=Ib(u=>this.extract(u,o,"month"))),this.monthsCache[a][e]})}weekdays(e,r=!1){return Is(this,e,su,()=>{let o=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},a=r?"format":"standalone";return this.weekdaysCache[a][e]||(this.weekdaysCache[a][e]=Lb(u=>this.extract(u,o,"weekday"))),this.weekdaysCache[a][e]})}meridiems(){return Is(this,void 0,()=>au,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[H.utc(2016,11,13,9),H.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Is(this,e,lu,()=>{let r={era:e};return this.eraCache[e]||(this.eraCache[e]=[H.utc(-40,1,1),H.utc(2017,1,1)].map(o=>this.extract(o,r,"era"))),this.eraCache[e]})}extract(e,r,o){let a=this.dtFormatter(e,r),u=a.formatToParts(),c=u.find(p=>p.type.toLowerCase()===o);return c?c.value:null}numberFormatter(e={}){return new nu(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new ru(e,this.intl,r)}relFormatter(e={}){return new iu(this.intl,this.isEnglish(),e)}listFormatter(e={}){return Tb(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}};v();v();var cu=null,xt=class extends Zt{static get utcInstance(){return cu===null&&(cu=new xt(0)),cu}static instance(e){return e===0?xt.utcInstance:new xt(e)}static parseSpecifier(e){if(e){let r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new xt(Xn(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${fn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${fn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return fn(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}};v();var Hr=class extends Zt{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function be(i,e){let r;if(Y(i)||i===null)return e;if(i instanceof Zt)return i;if(Ah(i)){let o=i.toLowerCase();return o==="default"?e:o==="local"||o==="system"?Ce.instance:o==="utc"||o==="gmt"?xt.utcInstance:xt.parseSpecifier(o)||Ct.create(i)}else return $e(i)?xt.instance(i):typeof i=="object"&&"offset"in i&&typeof i.offset=="function"?i:new Hr(i)}var Oh=()=>Date.now(),Ch="system",$h=null,Ih=null,Lh=null,Mh=60,Nh,ut=class{static get now(){return Oh}static set now(e){Oh=e}static set defaultZone(e){Ch=e}static get defaultZone(){return be(Ch,Ce.instance)}static get defaultLocale(){return $h}static set defaultLocale(e){$h=e}static get defaultNumberingSystem(){return Ih}static set defaultNumberingSystem(e){Ih=e}static get defaultOutputCalendar(){return Lh}static set defaultOutputCalendar(e){Lh=e}static get twoDigitCutoffYear(){return Mh}static set twoDigitCutoffYear(e){Mh=e%100}static get throwOnInvalid(){return Nh}static set throwOnInvalid(e){Nh=e}static resetCaches(){it.resetCache(),Ct.resetCache()}};function Y(i){return typeof i=="undefined"}function $e(i){return typeof i=="number"}function Ki(i){return typeof i=="number"&&i%1===0}function Ah(i){return typeof i=="string"}function Rh(i){return Object.prototype.toString.call(i)==="[object Date]"}function Ls(){try{return typeof Intl!="undefined"&&!!Intl.RelativeTimeFormat}catch(i){return!1}}function Dh(i){return Array.isArray(i)?i:[i]}function du(i,e,r){if(i.length!==0)return i.reduce((o,a)=>{let u=[e(a),a];return o&&r(o[0],u[0])===o[0]?o:u},null)[1]}function Ph(i,e){return e.reduce((r,o)=>(r[o]=i[o],r),{})}function hn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Ie(i,e,r){return Ki(i)&&i>=e&&i<=r}function Nb(i,e){return i-e*Math.floor(i/e)}function wt(i,e=2){let r=i<0,o;return r?o="-"+(""+-i).padStart(e,"0"):o=(""+i).padStart(e,"0"),o}function Ze(i){if(!(Y(i)||i===null||i===""))return parseInt(i,10)}function pn(i){if(!(Y(i)||i===null||i===""))return parseFloat(i)}function ji(i){if(!(Y(i)||i===null||i==="")){let e=parseFloat("0."+i)*1e3;return Math.floor(e)}}function kr(i,e,r=!1){let o=mf(10,e);return(r?Math.trunc:Math.round)(i*o)/o}function Qn(i){return i%4===0&&(i%100!==0||i%400===0)}function tr(i){return Qn(i)?366:365}function zr(i,e){let r=Nb(e-1,12)+1,o=i+(e-r)/12;return r===2?Qn(o)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Fr(i){let e=Date.UTC(i.year,i.month-1,i.day,i.hour,i.minute,i.second,i.millisecond);return i.year<100&&i.year>=0&&(e=new Date(e),e.setUTCFullYear(i.year,i.month-1,i.day)),+e}function Ur(i){let e=(i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400))%7,r=i-1,o=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7;return e===4||o===3?53:52}function Xi(i){return i>99?i:i>ut.twoDigitCutoffYear?1900+i:2e3+i}function Os(i,e,r,o=null){let a=new Date(i),u={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};o&&(u.timeZone=o);let c=k({timeZoneName:e},u),p=new Intl.DateTimeFormat(r,c).formatToParts(a).find(m=>m.type.toLowerCase()==="timezonename");return p?p.value:null}function Xn(i,e){let r=parseInt(i,10);Number.isNaN(r)&&(r=0);let o=parseInt(e,10)||0,a=r<0||Object.is(r,-0)?-o:o;return r*60+a}function fu(i){let e=Number(i);if(typeof i=="boolean"||i===""||Number.isNaN(e))throw new Rt(`Invalid unit value ${i}`);return e}function Wr(i,e){let r={};for(let o in i)if(hn(i,o)){let a=i[o];if(a==null)continue;r[e(o)]=fu(a)}return r}function fn(i,e){let r=Math.trunc(Math.abs(i/60)),o=Math.trunc(Math.abs(i%60)),a=i>=0?"+":"-";switch(e){case"short":return`${a}${wt(r,2)}:${wt(o,2)}`;case"narrow":return`${a}${r}${o>0?`:${o}`:""}`;case"techie":return`${a}${wt(r,2)}${wt(o,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Qi(i){return Ph(i,["hour","minute","second","millisecond"])}var Rb=["January","February","March","April","May","June","July","August","September","October","November","December"],hu=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Db=["J","F","M","A","M","J","J","A","S","O","N","D"];function ou(i){switch(i){case"narrow":return[...Db];case"short":return[...hu];case"long":return[...Rb];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var pu=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],mu=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Pb=["M","T","W","T","F","S","S"];function su(i){switch(i){case"narrow":return[...Pb];case"short":return[...mu];case"long":return[...pu];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var au=["AM","PM"],Fb=["Before Christ","Anno Domini"],kb=["BC","AD"],Hb=["B","A"];function lu(i){switch(i){case"narrow":return[...Hb];case"short":return[...kb];case"long":return[...Fb];default:return null}}function Fh(i){return au[i.hour<12?0:1]}function kh(i,e){return su(e)[i.weekday-1]}function Hh(i,e){return ou(e)[i.month-1]}function zh(i,e){return lu(e)[i.year<0?0:1]}function Sh(i,e,r="always",o=!1){let a={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},u=["hours","minutes","seconds"].indexOf(i)===-1;if(r==="auto"&&u){let S=i==="days";switch(e){case 1:return S?"tomorrow":`next ${a[i][0]}`;case-1:return S?"yesterday":`last ${a[i][0]}`;case 0:return S?"today":`this ${a[i][0]}`;default:}}let c=Object.is(e,-0)||e<0,p=Math.abs(e),m=p===1,_=a[i],T=o?m?_[1]:_[2]||_[1]:m?a[i][0]:i;return c?`${p} ${T} ago`:`in ${p} ${T}`}function Uh(i,e){let r="";for(let o of i)o.literal?r+=o.val:r+=e(o.val);return r}var zb={D:dn,DD:Ii,DDD:Li,DDDD:Mi,t:Ni,tt:Ri,ttt:Di,tttt:Pi,T:Fi,TT:ki,TTT:Hi,TTTT:zi,f:Ui,ff:Bi,fff:Vi,ffff:qi,F:Wi,FF:Gi,FFF:Zi,FFFF:Yi},bt=class{static create(e,r={}){return new bt(e,r)}static parseFormat(e){let r=null,o="",a=!1,u=[];for(let c=0;c<e.length;c++){let p=e.charAt(c);p==="'"?(o.length>0&&u.push({literal:a||/^\s+$/.test(o),val:o}),r=null,o="",a=!a):a||p===r?o+=p:(o.length>0&&u.push({literal:/^\s+$/.test(o),val:o}),o=p,r=p)}return o.length>0&&u.push({literal:a||/^\s+$/.test(o),val:o}),u}static macroTokenToFormatOpts(e){return zb[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,k(k({},this.opts),r)).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,k(k({},this.opts),r))}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return wt(e,r);let o=k({},this.opts);return r>0&&(o.padTo=r),this.loc.numberFormatter(o).format(e)}formatDateTimeFromString(e,r){let o=this.loc.listingMode()==="en",a=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",u=(I,M)=>this.loc.extract(e,I,M),c=I=>e.isOffsetFixed&&e.offset===0&&I.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,I.format):"",p=()=>o?Fh(e):u({hour:"numeric",hourCycle:"h12"},"dayperiod"),m=(I,M)=>o?Hh(e,I):u(M?{month:I}:{month:I,day:"numeric"},"month"),_=(I,M)=>o?kh(e,I):u(M?{weekday:I}:{weekday:I,month:"long",day:"numeric"},"weekday"),T=I=>{let M=bt.macroTokenToFormatOpts(I);return M?this.formatWithSystemDefault(e,M):I},S=I=>o?zh(e,I):u({era:I},"era"),N=I=>{switch(I){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return c({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return c({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return c({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return p();case"d":return a?u({day:"numeric"},"day"):this.num(e.day);case"dd":return a?u({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return _("short",!0);case"cccc":return _("long",!0);case"ccccc":return _("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return _("short",!1);case"EEEE":return _("long",!1);case"EEEEE":return _("narrow",!1);case"L":return a?u({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return a?u({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return m("short",!0);case"LLLL":return m("long",!0);case"LLLLL":return m("narrow",!0);case"M":return a?u({month:"numeric"},"month"):this.num(e.month);case"MM":return a?u({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return m("short",!1);case"MMMM":return m("long",!1);case"MMMMM":return m("narrow",!1);case"y":return a?u({year:"numeric"},"year"):this.num(e.year);case"yy":return a?u({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return a?u({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return a?u({year:"numeric"},"year"):this.num(e.year,6);case"G":return S("short");case"GG":return S("long");case"GGGGG":return S("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return T(I)}};return Uh(bt.parseFormat(r),N)}formatDurationFromString(e,r){let o=m=>{switch(m[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},a=m=>_=>{let T=o(_);return T?this.num(m.get(T),_.length):_},u=bt.parseFormat(r),c=u.reduce((m,{literal:_,val:T})=>_?m:m.concat(T),[]),p=e.shiftTo(...c.map(o).filter(m=>m));return Uh(u,a(p))}};v();var Dt=class{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}};v();var Bh=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Gr(...i){let e=i.reduce((r,o)=>r+o.source,"");return RegExp(`^${e}$`)}function Vr(...i){return e=>i.reduce(([r,o,a],u)=>{let[c,p,m]=u(e,a);return[k(k({},r),c),p||o,m]},[{},null,1]).slice(0,2)}function Zr(i,...e){if(i==null)return[null,null];for(let[r,o]of e){let a=r.exec(i);if(a)return o(a)}return[null,null]}function Gh(...i){return(e,r)=>{let o={},a;for(a=0;a<i.length;a++)o[i[a]]=Ze(e[r+a]);return[o,null,r+a]}}var Vh=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Ub=`(?:${Vh.source}?(?:\\[(${Bh.source})\\])?)?`,gu=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Zh=RegExp(`${gu.source}${Ub}`),vu=RegExp(`(?:T${Zh.source})?`),Wb=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Bb=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Gb=/(\d{4})-?(\d{3})/,Vb=Gh("weekYear","weekNumber","weekDay"),Zb=Gh("year","ordinal"),qb=/(\d{4})-(\d\d)-(\d\d)/,qh=RegExp(`${gu.source} ?(?:${Vh.source}|(${Bh.source}))?`),Yb=RegExp(`(?: ${qh.source})?`);function Br(i,e,r){let o=i[e];return Y(o)?r:Ze(o)}function Jb(i,e){return[{year:Br(i,e),month:Br(i,e+1,1),day:Br(i,e+2,1)},null,e+3]}function qr(i,e){return[{hours:Br(i,e,0),minutes:Br(i,e+1,0),seconds:Br(i,e+2,0),milliseconds:ji(i[e+3])},null,e+4]}function to(i,e){let r=!i[e]&&!i[e+1],o=Xn(i[e+1],i[e+2]),a=r?null:xt.instance(o);return[{},a,e+3]}function eo(i,e){let r=i[e]?Ct.create(i[e]):null;return[{},r,e+1]}var Kb=RegExp(`^T?${gu.source}$`),jb=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Xb(i){let[e,r,o,a,u,c,p,m,_]=i,T=e[0]==="-",S=m&&m[0]==="-",N=(I,M=!1)=>I!==void 0&&(M||I&&T)?-I:I;return[{years:N(pn(r)),months:N(pn(o)),weeks:N(pn(a)),days:N(pn(u)),hours:N(pn(c)),minutes:N(pn(p)),seconds:N(pn(m),m==="-0"),milliseconds:N(ji(_),S)}]}var Qb={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function yu(i,e,r,o,a,u,c){let p={year:e.length===2?Xi(Ze(e)):Ze(e),month:hu.indexOf(r)+1,day:Ze(o),hour:Ze(a),minute:Ze(u)};return c&&(p.second=Ze(c)),i&&(p.weekday=i.length>3?pu.indexOf(i)+1:mu.indexOf(i)+1),p}var tE=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function eE(i){let[,e,r,o,a,u,c,p,m,_,T,S]=i,N=yu(e,a,o,r,u,c,p),I;return m?I=Qb[m]:_?I=0:I=Xn(T,S),[N,new xt(I)]}function nE(i){return i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var rE=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,iE=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,oE=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Wh(i){let[,e,r,o,a,u,c,p]=i;return[yu(e,a,o,r,u,c,p),xt.utcInstance]}function sE(i){let[,e,r,o,a,u,c,p]=i;return[yu(e,p,r,o,a,u,c),xt.utcInstance]}var aE=Gr(Wb,vu),lE=Gr(Bb,vu),uE=Gr(Gb,vu),cE=Gr(Zh),Yh=Vr(Jb,qr,to,eo),dE=Vr(Vb,qr,to,eo),fE=Vr(Zb,qr,to,eo),hE=Vr(qr,to,eo);function Jh(i){return Zr(i,[aE,Yh],[lE,dE],[uE,fE],[cE,hE])}function Kh(i){return Zr(nE(i),[tE,eE])}function jh(i){return Zr(i,[rE,Wh],[iE,Wh],[oE,sE])}function Xh(i){return Zr(i,[jb,Xb])}var pE=Vr(qr);function Qh(i){return Zr(i,[Kb,pE])}var mE=Gr(qb,Yb),gE=Gr(qh),vE=Vr(qr,to,eo);function tp(i){return Zr(i,[mE,Yh],[gE,vE])}var ep="Invalid Duration",rp={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},yE=k({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},rp),ce=146097/400,Yr=146097/4800,_E=k({years:{quarters:4,months:12,weeks:ce/7,days:ce,hours:ce*24,minutes:ce*24*60,seconds:ce*24*60*60,milliseconds:ce*24*60*60*1e3},quarters:{months:3,weeks:ce/28,days:ce/4,hours:ce*24/4,minutes:ce*24*60/4,seconds:ce*24*60*60/4,milliseconds:ce*24*60*60*1e3/4},months:{weeks:Yr/7,days:Yr,hours:Yr*24,minutes:Yr*24*60,seconds:Yr*24*60*60,milliseconds:Yr*24*60*60*1e3}},rp),er=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],wE=er.slice(0).reverse();function mn(i,e,r=!1){let o={values:r?e.values:k(k({},i.values),e.values||{}),loc:i.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||i.conversionAccuracy,matrix:e.matrix||i.matrix};return new X(o)}function ip(i,e){var o;let r=(o=e.milliseconds)!=null?o:0;for(let a of wE.slice(1))e[a]&&(r+=e[a]*i[a].milliseconds);return r}function np(i,e){let r=ip(i,e)<0?-1:1;er.reduceRight((o,a)=>{if(Y(e[a]))return o;if(o){let u=e[o]*r,c=i[a][o],p=Math.floor(u/c);e[a]+=p*r,e[o]-=p*c*r}return a},null),er.reduce((o,a)=>{if(Y(e[a]))return o;if(o){let u=e[o]%1;e[o]-=u,e[a]+=u*i[o][a]}return a},null)}function xE(i){let e={};for(let[r,o]of Object.entries(i))o!==0&&(e[r]=o);return e}var X=class{constructor(e){let r=e.conversionAccuracy==="longterm"||!1,o=r?_E:yE;e.matrix&&(o=e.matrix),this.values=e.values,this.loc=e.loc||it.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=o,this.isLuxonDuration=!0}static fromMillis(e,r){return X.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new Rt(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new X({values:Wr(e,X.normalizeUnit),loc:it.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if($e(e))return X.fromMillis(e);if(X.isDuration(e))return e;if(typeof e=="object")return X.fromObject(e);throw new Rt(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){let[o]=Xh(e);return o?X.fromObject(o,r):X.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){let[o]=Qh(e);return o?X.fromObject(o,r):X.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new Rt("need to specify a reason the Duration is invalid");let o=e instanceof Dt?e:new Dt(e,r);if(ut.throwOnInvalid)throw new Ss(o);return new X({invalid:o})}static normalizeUnit(e){let r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new Pr(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){let o=Lt(k({},r),{floor:r.round!==!1&&r.floor!==!1});return this.isValid?bt.create(this.loc,o).formatDurationFromString(this,e):ep}toHuman(e={}){if(!this.isValid)return ep;let r=er.map(o=>{let a=this.values[o];return Y(a)?null:this.loc.numberFormatter(Lt(k({style:"unit",unitDisplay:"long"},e),{unit:o.slice(0,-1)})).format(a)}).filter(o=>o);return this.loc.listFormatter(k({type:"conjunction",style:e.listStyle||"narrow"},e)).format(r)}toObject(){return this.isValid?k({},this.values):{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=kr(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let r=this.toMillis();return r<0||r>=864e5?null:(e=Lt(k({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e),{includeOffset:!1}),H.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?ip(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let r=X.fromDurationLike(e),o={};for(let a of er)(hn(r.values,a)||hn(this.values,a))&&(o[a]=r.get(a)+this.get(a));return mn(this,{values:o},!0)}minus(e){if(!this.isValid)return this;let r=X.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;let r={};for(let o of Object.keys(this.values))r[o]=fu(e(this.values[o],o));return mn(this,{values:r},!0)}get(e){return this[X.normalizeUnit(e)]}set(e){if(!this.isValid)return this;let r=k(k({},this.values),Wr(e,X.normalizeUnit));return mn(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:o,matrix:a}={}){let c={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:a,conversionAccuracy:o};return mn(this,c)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return np(this.matrix,e),mn(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=xE(this.normalize().shiftToAll().toObject());return mn(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(c=>X.normalizeUnit(c));let r={},o={},a=this.toObject(),u;for(let c of er)if(e.indexOf(c)>=0){u=c;let p=0;for(let _ in o)p+=this.matrix[_][c]*o[_],o[_]=0;$e(a[c])&&(p+=a[c]);let m=Math.trunc(p);r[c]=m,o[c]=(p*1e3-m*1e3)/1e3}else $e(a[c])&&(o[c]=a[c]);for(let c in o)o[c]!==0&&(r[u]+=c===u?o[c]:o[c]/this.matrix[u][c]);return np(this.matrix,r),mn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return mn(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(o,a){return o===void 0||o===0?a===void 0||a===0:o===a}for(let o of er)if(!r(this.values[o],e.values[o]))return!1;return!0}};v();var Jr="Invalid Interval";function bE(i,e){return!i||!i.isValid?ht.invalid("missing or invalid start"):!e||!e.isValid?ht.invalid("missing or invalid end"):e<i?ht.invalid("end before start",`The end of an interval must be after its start, but you had start=${i.toISO()} and end=${e.toISO()}`):null}var ht=class{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new Rt("need to specify a reason the Interval is invalid");let o=e instanceof Dt?e:new Dt(e,r);if(ut.throwOnInvalid)throw new Ts(o);return new ht({invalid:o})}static fromDateTimes(e,r){let o=Kr(e),a=Kr(r),u=bE(o,a);return u==null?new ht({start:o,end:a}):u}static after(e,r){let o=X.fromDurationLike(r),a=Kr(e);return ht.fromDateTimes(a,a.plus(o))}static before(e,r){let o=X.fromDurationLike(r),a=Kr(e);return ht.fromDateTimes(a.minus(o),a)}static fromISO(e,r){let[o,a]=(e||"").split("/",2);if(o&&a){let u,c;try{u=H.fromISO(o,r),c=u.isValid}catch(_){c=!1}let p,m;try{p=H.fromISO(a,r),m=p.isValid}catch(_){m=!1}if(c&&m)return ht.fromDateTimes(u,p);if(c){let _=X.fromISO(a,r);if(_.isValid)return ht.after(u,_)}else if(m){let _=X.fromISO(o,r);if(_.isValid)return ht.before(p,_)}}return ht.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds"){if(!this.isValid)return NaN;let r=this.start.startOf(e),o=this.end.startOf(e);return Math.floor(o.diff(r,e).get(e))+(o.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?ht.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];let r=e.map(Kr).filter(c=>this.contains(c)).sort(),o=[],{s:a}=this,u=0;for(;a<this.e;){let c=r[u]||this.e,p=+c>+this.e?this.e:c;o.push(ht.fromDateTimes(a,p)),a=p,u+=1}return o}splitBy(e){let r=X.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:o}=this,a=1,u,c=[];for(;o<this.e;){let p=this.start.plus(r.mapUnits(m=>m*a));u=+p>+this.e?this.e:p,c.push(ht.fromDateTimes(o,u)),o=u,a+=1}return c}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let r=this.s>e.s?this.s:e.s,o=this.e<e.e?this.e:e.e;return r>=o?null:ht.fromDateTimes(r,o)}union(e){if(!this.isValid)return this;let r=this.s<e.s?this.s:e.s,o=this.e>e.e?this.e:e.e;return ht.fromDateTimes(r,o)}static merge(e){let[r,o]=e.sort((a,u)=>a.s-u.s).reduce(([a,u],c)=>u?u.overlaps(c)||u.abutsStart(c)?[a,u.union(c)]:[a.concat([u]),c]:[a,c],[[],null]);return o&&r.push(o),r}static xor(e){let r=null,o=0,a=[],u=e.map(m=>[{time:m.s,type:"s"},{time:m.e,type:"e"}]),c=Array.prototype.concat(...u),p=c.sort((m,_)=>m.time-_.time);for(let m of p)o+=m.type==="s"?1:-1,o===1?r=m.time:(r&&+r!=+m.time&&a.push(ht.fromDateTimes(r,m.time)),r=null);return ht.merge(a)}difference(...e){return ht.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:Jr}toLocaleString(e=dn,r={}){return this.isValid?bt.create(this.s.loc.clone(r),e).formatInterval(this):Jr}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Jr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Jr}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Jr}toFormat(e,{separator:r=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:Jr}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):X.invalid(this.invalidReason)}mapEndpoints(e){return ht.fromDateTimes(e(this.s),e(this.e))}};v();var qe=class{static hasDST(e=ut.defaultZone){let r=H.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return Ct.isValidZone(e)}static normalizeZone(e){return be(e,ut.defaultZone)}static months(e="long",{locale:r=null,numberingSystem:o=null,locObj:a=null,outputCalendar:u="gregory"}={}){return(a||it.create(r,o,u)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:o=null,locObj:a=null,outputCalendar:u="gregory"}={}){return(a||it.create(r,o,u)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:o=null,locObj:a=null}={}){return(a||it.create(r,o,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:o=null,locObj:a=null}={}){return(a||it.create(r,o,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return it.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return it.create(r,null,"gregory").eras(e)}static features(){return{relative:Ls()}}};v();function op(i,e){let r=a=>a.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),o=r(e)-r(i);return Math.floor(X.fromMillis(o).as("days"))}function EE(i,e,r){let o=[["years",(m,_)=>_.year-m.year],["quarters",(m,_)=>_.quarter-m.quarter+(_.year-m.year)*4],["months",(m,_)=>_.month-m.month+(_.year-m.year)*12],["weeks",(m,_)=>{let T=op(m,_);return(T-T%7)/7}],["days",op]],a={},u=i,c,p;for(let[m,_]of o)r.indexOf(m)>=0&&(c=m,a[m]=_(i,e),p=u.plus(a),p>e?(a[m]--,i=u.plus(a),i>e&&(p=i,a[m]--,i=u.plus(a))):i=p);return[i,a,p,c]}function sp(i,e,r,o){let[a,u,c,p]=EE(i,e,r),m=e-a,_=r.filter(S=>["hours","minutes","seconds","milliseconds"].indexOf(S)>=0);_.length===0&&(c<e&&(c=a.plus({[p]:1})),c!==a&&(u[p]=(u[p]||0)+m/(c-a)));let T=X.fromObject(u,o);return _.length>0?X.fromMillis(m,o).shiftTo(..._).plus(T):T}v();v();var _u={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},ap={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},TE=_u.hanidec.replace(/[\[|\]]/g,"").split("");function lp(i){let e=parseInt(i,10);if(isNaN(e)){e="";for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);if(i[r].search(_u.hanidec)!==-1)e+=TE.indexOf(i[r]);else for(let a in ap){let[u,c]=ap[a];o>=u&&o<=c&&(e+=o-u)}}return parseInt(e,10)}else return e}function de({numberingSystem:i},e=""){return new RegExp(`${_u[i||"latn"]}${e}`)}var SE="missing Intl.DateTimeFormat.formatToParts support";function st(i,e=r=>r){return{regex:i,deser:([r])=>e(lp(r))}}var AE=String.fromCharCode(160),dp=`[ ${AE}]`,fp=new RegExp(dp,"g");function OE(i){return i.replace(/\./g,"\\.?").replace(fp,dp)}function up(i){return i.replace(/\./g,"").replace(fp," ").toLowerCase()}function Ee(i,e){return i===null?null:{regex:RegExp(i.map(OE).join("|")),deser:([r])=>i.findIndex(o=>up(r)===up(o))+e}}function cp(i,e){return{regex:i,deser:([,r,o])=>Xn(r,o),groups:e}}function Ms(i){return{regex:i,deser:([e])=>e}}function CE(i){return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function $E(i,e){let r=de(e),o=de(e,"{2}"),a=de(e,"{3}"),u=de(e,"{4}"),c=de(e,"{6}"),p=de(e,"{1,2}"),m=de(e,"{1,3}"),_=de(e,"{1,6}"),T=de(e,"{1,9}"),S=de(e,"{2,4}"),N=de(e,"{4,6}"),I=ct=>({regex:RegExp(CE(ct.val)),deser:([vt])=>vt,literal:!0}),gt=(ct=>{if(i.literal)return I(ct);switch(ct.val){case"G":return Ee(e.eras("short"),0);case"GG":return Ee(e.eras("long"),0);case"y":return st(_);case"yy":return st(S,Xi);case"yyyy":return st(u);case"yyyyy":return st(N);case"yyyyyy":return st(c);case"M":return st(p);case"MM":return st(o);case"MMM":return Ee(e.months("short",!0),1);case"MMMM":return Ee(e.months("long",!0),1);case"L":return st(p);case"LL":return st(o);case"LLL":return Ee(e.months("short",!1),1);case"LLLL":return Ee(e.months("long",!1),1);case"d":return st(p);case"dd":return st(o);case"o":return st(m);case"ooo":return st(a);case"HH":return st(o);case"H":return st(p);case"hh":return st(o);case"h":return st(p);case"mm":return st(o);case"m":return st(p);case"q":return st(p);case"qq":return st(o);case"s":return st(p);case"ss":return st(o);case"S":return st(m);case"SSS":return st(a);case"u":return Ms(T);case"uu":return Ms(p);case"uuu":return st(r);case"a":return Ee(e.meridiems(),0);case"kkkk":return st(u);case"kk":return st(S,Xi);case"W":return st(p);case"WW":return st(o);case"E":case"c":return st(r);case"EEE":return Ee(e.weekdays("short",!1),1);case"EEEE":return Ee(e.weekdays("long",!1),1);case"ccc":return Ee(e.weekdays("short",!0),1);case"cccc":return Ee(e.weekdays("long",!0),1);case"Z":case"ZZ":return cp(new RegExp(`([+-]${p.source})(?::(${o.source}))?`),2);case"ZZZ":return cp(new RegExp(`([+-]${p.source})(${o.source})?`),2);case"z":return Ms(/[a-z_+-/]{1,256}?/i);case" ":return Ms(/[^\S\n\r]/);default:return I(ct)}})(i)||{invalidReason:SE};return gt.token=i,gt}var IE={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function LE(i,e,r){let{type:o,value:a}=i;if(o==="literal"){let m=/^\s+$/.test(a);return{literal:!m,val:m?" ":a}}let u=e[o],c=o;o==="hour"&&(e.hour12!=null?c=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?c="hour12":c="hour24":c=r.hour12?"hour12":"hour24");let p=IE[c];if(typeof p=="object"&&(p=p[u]),p)return{literal:!1,val:p}}function ME(i){return[`^${i.map(r=>r.regex).reduce((r,o)=>`${r}(${o.source})`,"")}$`,i]}function NE(i,e,r){let o=i.match(e);if(o){let a={},u=1;for(let c in r)if(hn(r,c)){let p=r[c],m=p.groups?p.groups+1:1;!p.literal&&p.token&&(a[p.token.val[0]]=p.deser(o.slice(u,u+m))),u+=m}return[o,a]}else return[o,{}]}function RE(i){let e=u=>{switch(u){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},r=null,o;return Y(i.z)||(r=Ct.create(i.z)),Y(i.Z)||(r||(r=new xt(i.Z)),o=i.Z),Y(i.q)||(i.M=(i.q-1)*3+1),Y(i.h)||(i.h<12&&i.a===1?i.h+=12:i.h===12&&i.a===0&&(i.h=0)),i.G===0&&i.y&&(i.y=-i.y),Y(i.u)||(i.S=ji(i.u)),[Object.keys(i).reduce((u,c)=>{let p=e(c);return p&&(u[p]=i[c]),u},{}),r,o]}var wu=null;function DE(){return wu||(wu=H.fromMillis(1555555555555)),wu}function PE(i,e){if(i.literal)return i;let r=bt.macroTokenToFormatOpts(i.val),o=Eu(r,e);return o==null||o.includes(void 0)?i:o}function xu(i,e){return Array.prototype.concat(...i.map(r=>PE(r,e)))}function bu(i,e,r){let o=xu(bt.parseFormat(r),i),a=o.map(c=>$E(c,i)),u=a.find(c=>c.invalidReason);if(u)return{input:e,tokens:o,invalidReason:u.invalidReason};{let[c,p]=ME(a),m=RegExp(c,"i"),[_,T]=NE(e,m,p),[S,N,I]=T?RE(T):[null,null,void 0];if(hn(T,"a")&&hn(T,"H"))throw new Ve("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:o,regex:m,rawMatches:_,matches:T,result:S,zone:N,specificOffset:I}}}function hp(i,e,r){let{result:o,zone:a,specificOffset:u,invalidReason:c}=bu(i,e,r);return[o,a,u,c]}function Eu(i,e){if(!i)return null;let o=bt.create(e,i).dtFormatter(DE()),a=o.formatToParts(),u=o.resolvedOptions();return a.map(c=>LE(c,i,u))}v();var pp=[0,31,59,90,120,151,181,212,243,273,304,334],mp=[0,31,60,91,121,152,182,213,244,274,305,335];function fe(i,e){return new Dt("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${i}, which is invalid`)}function gp(i,e,r){let o=new Date(Date.UTC(i,e-1,r));i<100&&i>=0&&o.setUTCFullYear(o.getUTCFullYear()-1900);let a=o.getUTCDay();return a===0?7:a}function vp(i,e,r){return r+(Qn(i)?mp:pp)[e-1]}function yp(i,e){let r=Qn(i)?mp:pp,o=r.findIndex(u=>u<e),a=e-r[o];return{month:o+1,day:a}}function Ns(i){let{year:e,month:r,day:o}=i,a=vp(e,r,o),u=gp(e,r,o),c=Math.floor((a-u+10)/7),p;return c<1?(p=e-1,c=Ur(p)):c>Ur(e)?(p=e+1,c=1):p=e,k({weekYear:p,weekNumber:c,weekday:u},Qi(i))}function Tu(i){let{weekYear:e,weekNumber:r,weekday:o}=i,a=gp(e,1,4),u=tr(e),c=r*7+o-a-3,p;c<1?(p=e-1,c+=tr(p)):c>u?(p=e+1,c-=tr(e)):p=e;let{month:m,day:_}=yp(p,c);return k({year:p,month:m,day:_},Qi(i))}function Rs(i){let{year:e,month:r,day:o}=i,a=vp(e,r,o);return k({year:e,ordinal:a},Qi(i))}function Su(i){let{year:e,ordinal:r}=i,{month:o,day:a}=yp(e,r);return k({year:e,month:o,day:a},Qi(i))}function _p(i){let e=Ki(i.weekYear),r=Ie(i.weekNumber,1,Ur(i.weekYear)),o=Ie(i.weekday,1,7);return e?r?o?!1:fe("weekday",i.weekday):fe("week",i.week):fe("weekYear",i.weekYear)}function wp(i){let e=Ki(i.year),r=Ie(i.ordinal,1,tr(i.year));return e?r?!1:fe("ordinal",i.ordinal):fe("year",i.year)}function Au(i){let e=Ki(i.year),r=Ie(i.month,1,12),o=Ie(i.day,1,zr(i.year,i.month));return e?r?o?!1:fe("day",i.day):fe("month",i.month):fe("year",i.year)}function Ou(i){let{hour:e,minute:r,second:o,millisecond:a}=i,u=Ie(e,0,23)||e===24&&r===0&&o===0&&a===0,c=Ie(r,0,59),p=Ie(o,0,59),m=Ie(a,0,999);return u?c?p?m?!1:fe("millisecond",a):fe("second",o):fe("minute",r):fe("hour",e)}var Cu="Invalid DateTime",xp=864e13;function Ds(i){return new Dt("unsupported zone",`the zone "${i.name}" is not supported`)}function $u(i){return i.weekData===null&&(i.weekData=Ns(i.c)),i.weekData}function nr(i,e){let r={ts:i.ts,zone:i.zone,c:i.c,o:i.o,loc:i.loc,invalid:i.invalid};return new H(Lt(k(k({},r),e),{old:r}))}function Cp(i,e,r){let o=i-e*60*1e3,a=r.offset(o);if(e===a)return[o,e];o-=(a-e)*60*1e3;let u=r.offset(o);return a===u?[o,a]:[i-Math.min(a,u)*60*1e3,Math.max(a,u)]}function Ps(i,e){i+=e*60*1e3;let r=new Date(i);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function ks(i,e,r){return Cp(Fr(i),e,r)}function bp(i,e){let r=i.o,o=i.c.year+Math.trunc(e.years),a=i.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,u=Lt(k({},i.c),{year:o,month:a,day:Math.min(i.c.day,zr(o,a))+Math.trunc(e.days)+Math.trunc(e.weeks)*7}),c=X.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),p=Fr(u),[m,_]=Cp(p,r,i.zone);return c!==0&&(m+=c,_=i.zone.offset(m)),{ts:m,o:_}}function no(i,e,r,o,a,u){let{setZone:c,zone:p}=r;if(i&&Object.keys(i).length!==0||e){let m=e||p,_=H.fromObject(i,Lt(k({},r),{zone:m,specificOffset:u}));return c?_:_.setZone(p)}else return H.invalid(new Dt("unparsable",`the input "${a}" can't be parsed as ${o}`))}function Fs(i,e,r=!0){return i.isValid?bt.create(it.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(i,e):null}function Iu(i,e){let r=i.c.year>9999||i.c.year<0,o="";return r&&i.c.year>=0&&(o+="+"),o+=wt(i.c.year,r?6:4),e?(o+="-",o+=wt(i.c.month),o+="-",o+=wt(i.c.day)):(o+=wt(i.c.month),o+=wt(i.c.day)),o}function Ep(i,e,r,o,a,u){let c=wt(i.c.hour);return e?(c+=":",c+=wt(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(c+=":")):c+=wt(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(c+=wt(i.c.second),(i.c.millisecond!==0||!o)&&(c+=".",c+=wt(i.c.millisecond,3))),a&&(i.isOffsetFixed&&i.offset===0&&!u?c+="Z":i.o<0?(c+="-",c+=wt(Math.trunc(-i.o/60)),c+=":",c+=wt(Math.trunc(-i.o%60))):(c+="+",c+=wt(Math.trunc(i.o/60)),c+=":",c+=wt(Math.trunc(i.o%60)))),u&&(c+="["+i.zone.ianaName+"]"),c}var $p={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},FE={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},kE={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Ip=["year","month","day","hour","minute","second","millisecond"],HE=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],zE=["year","ordinal","hour","minute","second","millisecond"];function Tp(i){let e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[i.toLowerCase()];if(!e)throw new Pr(i);return e}function Sp(i,e){let r=be(e.zone,ut.defaultZone),o=it.fromObject(e),a=ut.now(),u,c;if(Y(i.year))u=a;else{for(let _ of Ip)Y(i[_])&&(i[_]=$p[_]);let p=Au(i)||Ou(i);if(p)return H.invalid(p);let m=r.offset(a);[u,c]=ks(i,m,r)}return new H({ts:u,zone:r,loc:o,o:c})}function Ap(i,e,r){let o=Y(r.round)?!0:r.round,a=(c,p)=>(c=kr(c,o||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(c,p)),u=c=>r.calendary?e.hasSame(i,c)?0:e.startOf(c).diff(i.startOf(c),c).get(c):e.diff(i,c).get(c);if(r.unit)return a(u(r.unit),r.unit);for(let c of r.units){let p=u(c);if(Math.abs(p)>=1)return a(p,c)}return a(i>e?-0:0,r.units[r.units.length-1])}function Op(i){let e={},r;return i.length>0&&typeof i[i.length-1]=="object"?(e=i[i.length-1],r=Array.from(i).slice(0,i.length-1)):r=Array.from(i),[e,r]}var H=class{constructor(e){let r=e.zone||ut.defaultZone,o=e.invalid||(Number.isNaN(e.ts)?new Dt("invalid input"):null)||(r.isValid?null:Ds(r));this.ts=Y(e.ts)?ut.now():e.ts;let a=null,u=null;if(!o)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[a,u]=[e.old.c,e.old.o];else{let p=r.offset(this.ts);a=Ps(this.ts,p),o=Number.isNaN(a.year)?new Dt("invalid input"):null,a=o?null:a,u=o?null:p}this._zone=r,this.loc=e.loc||it.create(),this.invalid=o,this.weekData=null,this.c=a,this.o=u,this.isLuxonDateTime=!0}static now(){return new H({})}static local(){let[e,r]=Op(arguments),[o,a,u,c,p,m,_]=r;return Sp({year:o,month:a,day:u,hour:c,minute:p,second:m,millisecond:_},e)}static utc(){let[e,r]=Op(arguments),[o,a,u,c,p,m,_]=r;return e.zone=xt.utcInstance,Sp({year:o,month:a,day:u,hour:c,minute:p,second:m,millisecond:_},e)}static fromJSDate(e,r={}){let o=Rh(e)?e.valueOf():NaN;if(Number.isNaN(o))return H.invalid("invalid input");let a=be(r.zone,ut.defaultZone);return a.isValid?new H({ts:o,zone:a,loc:it.fromObject(r)}):H.invalid(Ds(a))}static fromMillis(e,r={}){if($e(e))return e<-xp||e>xp?H.invalid("Timestamp out of range"):new H({ts:e,zone:be(r.zone,ut.defaultZone),loc:it.fromObject(r)});throw new Rt(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if($e(e))return new H({ts:e*1e3,zone:be(r.zone,ut.defaultZone),loc:it.fromObject(r)});throw new Rt("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};let o=be(r.zone,ut.defaultZone);if(!o.isValid)return H.invalid(Ds(o));let a=ut.now(),u=Y(r.specificOffset)?o.offset(a):r.specificOffset,c=Wr(e,Tp),p=!Y(c.ordinal),m=!Y(c.year),_=!Y(c.month)||!Y(c.day),T=m||_,S=c.weekYear||c.weekNumber,N=it.fromObject(r);if((T||p)&&S)throw new Ve("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(_&&p)throw new Ve("Can't mix ordinal dates with month/day");let I=S||c.weekday&&!T,M,gt,ct=Ps(a,u);I?(M=HE,gt=FE,ct=Ns(ct)):p?(M=zE,gt=kE,ct=Rs(ct)):(M=Ip,gt=$p);let vt=!1;for(let yn of M){let Hs=c[yn];Y(Hs)?vt?c[yn]=gt[yn]:c[yn]=ct[yn]:vt=!0}let qt=I?_p(c):p?wp(c):Au(c),Yt=qt||Ou(c);if(Yt)return H.invalid(Yt);let Ye=I?Tu(c):p?Su(c):c,[he,gn]=ks(Ye,u,o),vn=new H({ts:he,zone:o,o:gn,loc:N});return c.weekday&&T&&e.weekday!==vn.weekday?H.invalid("mismatched weekday",`you can't specify both a weekday of ${c.weekday} and a date of ${vn.toISO()}`):vn}static fromISO(e,r={}){let[o,a]=Jh(e);return no(o,a,r,"ISO 8601",e)}static fromRFC2822(e,r={}){let[o,a]=Kh(e);return no(o,a,r,"RFC 2822",e)}static fromHTTP(e,r={}){let[o,a]=jh(e);return no(o,a,r,"HTTP",r)}static fromFormat(e,r,o={}){if(Y(e)||Y(r))throw new Rt("fromFormat requires an input string and a format");let{locale:a=null,numberingSystem:u=null}=o,c=it.fromOpts({locale:a,numberingSystem:u,defaultToEN:!0}),[p,m,_,T]=hp(c,e,r);return T?H.invalid(T):no(p,m,o,`format ${r}`,e,_)}static fromString(e,r,o={}){return H.fromFormat(e,r,o)}static fromSQL(e,r={}){let[o,a]=tp(e);return no(o,a,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new Rt("need to specify a reason the DateTime is invalid");let o=e instanceof Dt?e:new Dt(e,r);if(ut.throwOnInvalid)throw new Es(o);return new H({invalid:o})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){let o=Eu(e,it.fromObject(r));return o?o.map(a=>a?a.val:null).join(""):null}static expandFormat(e,r={}){return xu(bt.parseFormat(e),it.fromObject(r)).map(a=>a.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?$u(this).weekYear:NaN}get weekNumber(){return this.isValid?$u(this).weekNumber:NaN}get weekday(){return this.isValid?$u(this).weekday:NaN}get ordinal(){return this.isValid?Rs(this.c).ordinal:NaN}get monthShort(){return this.isValid?qe.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?qe.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?qe.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?qe.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,r=6e4,o=Fr(this.c),a=this.zone.offset(o-e),u=this.zone.offset(o+e),c=this.zone.offset(o-a*r),p=this.zone.offset(o-u*r);if(c===p)return[this];let m=o-c*r,_=o-p*r,T=Ps(m,c),S=Ps(_,p);return T.hour===S.hour&&T.minute===S.minute&&T.second===S.second&&T.millisecond===S.millisecond?[nr(this,{ts:m}),nr(this,{ts:_})]:[this]}get isInLeapYear(){return Qn(this.year)}get daysInMonth(){return zr(this.year,this.month)}get daysInYear(){return this.isValid?tr(this.year):NaN}get weeksInWeekYear(){return this.isValid?Ur(this.weekYear):NaN}resolvedLocaleOptions(e={}){let{locale:r,numberingSystem:o,calendar:a}=bt.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:o,outputCalendar:a}}toUTC(e=0,r={}){return this.setZone(xt.instance(e),r)}toLocal(){return this.setZone(ut.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:o=!1}={}){if(e=be(e,ut.defaultZone),e.equals(this.zone))return this;if(e.isValid){let a=this.ts;if(r||o){let u=e.offset(this.ts),c=this.toObject();[a]=ks(c,u,e)}return nr(this,{ts:a,zone:e})}else return H.invalid(Ds(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:o}={}){let a=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:o});return nr(this,{loc:a})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let r=Wr(e,Tp),o=!Y(r.weekYear)||!Y(r.weekNumber)||!Y(r.weekday),a=!Y(r.ordinal),u=!Y(r.year),c=!Y(r.month)||!Y(r.day),p=u||c,m=r.weekYear||r.weekNumber;if((p||a)&&m)throw new Ve("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&a)throw new Ve("Can't mix ordinal dates with month/day");let _;o?_=Tu(k(k({},Ns(this.c)),r)):Y(r.ordinal)?(_=k(k({},this.toObject()),r),Y(r.day)&&(_.day=Math.min(zr(_.year,_.month),_.day))):_=Su(k(k({},Rs(this.c)),r));let[T,S]=ks(_,this.o,this.zone);return nr(this,{ts:T,o:S})}plus(e){if(!this.isValid)return this;let r=X.fromDurationLike(e);return nr(this,bp(this,r))}minus(e){if(!this.isValid)return this;let r=X.fromDurationLike(e).negate();return nr(this,bp(this,r))}startOf(e){if(!this.isValid)return this;let r={},o=X.normalizeUnit(e);switch(o){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break;case"milliseconds":break}if(o==="weeks"&&(r.weekday=1),o==="quarters"){let a=Math.ceil(this.month/3);r.month=(a-1)*3+1}return this.set(r)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e,r={}){return this.isValid?bt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):Cu}toLocaleString(e=dn,r={}){return this.isValid?bt.create(this.loc.clone(r),e).formatDateTime(this):Cu}toLocaleParts(e={}){return this.isValid?bt.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:o=!1,includeOffset:a=!0,extendedZone:u=!1}={}){if(!this.isValid)return null;let c=e==="extended",p=Iu(this,c);return p+="T",p+=Ep(this,c,r,o,a,u),p}toISODate({format:e="extended"}={}){return this.isValid?Iu(this,e==="extended"):null}toISOWeekDate(){return Fs(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:o=!0,includePrefix:a=!1,extendedZone:u=!1,format:c="extended"}={}){return this.isValid?(a?"T":"")+Ep(this,c==="extended",r,e,o,u):null}toRFC2822(){return Fs(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Fs(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Iu(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:o=!0}={}){let a="HH:mm:ss.SSS";return(r||e)&&(o&&(a+=" "),r?a+="z":e&&(a+="ZZ")),Fs(this,a,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Cu}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let r=k({},this.c);return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",o={}){if(!this.isValid||!e.isValid)return X.invalid("created by diffing an invalid DateTime");let a=k({locale:this.locale,numberingSystem:this.numberingSystem},o),u=Dh(r).map(X.normalizeUnit),c=e.valueOf()>this.valueOf(),p=c?this:e,m=c?e:this,_=sp(p,m,u,a);return c?_.negate():_}diffNow(e="milliseconds",r={}){return this.diff(H.now(),e,r)}until(e){return this.isValid?ht.fromDateTimes(this,e):this}hasSame(e,r){if(!this.isValid)return!1;let o=e.valueOf(),a=this.setZone(e.zone,{keepLocalTime:!0});return a.startOf(r)<=o&&o<=a.endOf(r)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let r=e.base||H.fromObject({},{zone:this.zone}),o=e.padding?this<r?-e.padding:e.padding:0,a=["years","months","days","hours","minutes","seconds"],u=e.unit;return Array.isArray(e.unit)&&(a=e.unit,u=void 0),Ap(r,this.plus(o),Lt(k({},e),{numeric:"always",units:a,unit:u}))}toRelativeCalendar(e={}){return this.isValid?Ap(e.base||H.fromObject({},{zone:this.zone}),this,Lt(k({},e),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...e){if(!e.every(H.isDateTime))throw new Rt("min requires all arguments be DateTimes");return du(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(H.isDateTime))throw new Rt("max requires all arguments be DateTimes");return du(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,o={}){let{locale:a=null,numberingSystem:u=null}=o,c=it.fromOpts({locale:a,numberingSystem:u,defaultToEN:!0});return bu(c,e,r)}static fromStringExplain(e,r,o={}){return H.fromFormatExplain(e,r,o)}static get DATE_SHORT(){return dn}static get DATE_MED(){return Ii}static get DATE_MED_WITH_WEEKDAY(){return Jl}static get DATE_FULL(){return Li}static get DATE_HUGE(){return Mi}static get TIME_SIMPLE(){return Ni}static get TIME_WITH_SECONDS(){return Ri}static get TIME_WITH_SHORT_OFFSET(){return Di}static get TIME_WITH_LONG_OFFSET(){return Pi}static get TIME_24_SIMPLE(){return Fi}static get TIME_24_WITH_SECONDS(){return ki}static get TIME_24_WITH_SHORT_OFFSET(){return Hi}static get TIME_24_WITH_LONG_OFFSET(){return zi}static get DATETIME_SHORT(){return Ui}static get DATETIME_SHORT_WITH_SECONDS(){return Wi}static get DATETIME_MED(){return Bi}static get DATETIME_MED_WITH_SECONDS(){return Gi}static get DATETIME_MED_WITH_WEEKDAY(){return Kl}static get DATETIME_FULL(){return Vi}static get DATETIME_FULL_WITH_SECONDS(){return Zi}static get DATETIME_HUGE(){return qi}static get DATETIME_HUGE_WITH_SECONDS(){return Yi}};function Kr(i){if(H.isDateTime(i))return i;if(i&&i.valueOf&&$e(i.valueOf()))return H.fromJSDate(i);if(i&&typeof i=="object")return H.fromObject(i);throw new Rt(`Unknown datetime argument: ${i}, of type ${typeof i}`)}var Lp=tt(G),UE=[Lp.styles,kl],rr=class extends Lp{constructor(){super();this.updateComment=({detail:r})=>{let{text:o}=r;this.text=o,this.closeEditMode(),this.emitEvent("update-comment",{uuid:this.uuid,text:o})};this.resolveAnnotation=r=>{r.stopPropagation(),this.emitEvent("resolve-annotation",{type:"resolve-annotation",resolved:!this.resolved},{composed:!1,bubbles:!1})};this.confirmDelete=()=>{if(this.deleteCommentModalOpen=!1,this.primaryComment)return this.emitEvent("delete-annotation",{uuid:this.annotationId});this.emitEvent("delete-comment",{annotationId:this.annotationId,uuid:this.uuid})};this.closeEditMode=()=>{this.mode="readonly"};this.resolved=!1}render(){var I;let r=this.annotationFilter==="all"?"resolve":"undo",o=M=>H.fromISO(M).toFormat("yyyy-dd-MM"),a=this.resolvable?"comment-item__resolve":"hidden",u=[{label:"EDIT"},{label:"DELETE"}],c=({detail:M})=>{M==="EDIT"&&(this.mode="editable"),M==="DELETE"&&(this.deleteCommentModalOpen=!0)},p=()=>{this.text.length<120||(this.expandElipsis=!0)},m=()=>{if(this.mode==="editable")return L`
        <superviz-comments-comment-input
          class="comment-item--editable"
          editable
          @click=${M=>M.stopPropagation()}
          text=${this.text}
          eventType="update-comment"
          @update-comment=${this.updateComment}
          @close-edit-mode=${this.closeEditMode}
        ></superviz-comments-comment-input>
      `},_=()=>{if(this.mode!=="editable")return L`
        <span
          id="comment-text"
          @click=${p}
          class="text text-big sv-gray-700 ${N}"
          >${this.text}</span
        >
      `},T=()=>{this.deleteCommentModalOpen=!1},S={"comment-item":!0,reply:!this.primaryComment},N=!this.expandElipsis&&this.text.length>120?"line-clamp":"";return L`
      <div class=${lt(S)}>
        <div class="comment-item__user">
          <div class="comment-item__user-details">
            <div class="comment-item__avatar">
              <p class="text text-bold">${((I=this.username[0])==null?void 0:I.toUpperCase())||"A"}</p>
            </div>
            <span class="text text-bold sv-gray-600">${this.username}</span>
            <span class="text text-small sv-gray-500">${o(this.createdAt)}</span>
          </div>
          <div class="comment-item__actions">
            <button
              @click=${this.resolveAnnotation}
              class="icon-button icon-button--clickable icon-button--xsmall ${a}"
            >
              <superviz-icon name=${r} size="md"></superviz-icon>
            </button>
            <superviz-dropdown
              options=${JSON.stringify(u)}
              label="label"
              returnTo="label"
              position="bottom-left"
              @selected=${c}
              @click=${M=>M.stopPropagation()}
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
        @close=${T}
        @confirm=${this.confirmDelete}
      >
      </superviz-comments-delete-comments-modal>
    `}};rr.styles=UE,rr.properties={uuid:{type:String},annotationId:{type:String},avatar:{type:String},username:{type:String},text:{type:String},resolved:{type:Boolean},resolvable:{type:Boolean},createdAt:{type:String},mode:{type:String},deleteCommentModalOpen:{type:Boolean},primaryComment:{type:Boolean},expandElipsis:{type:Boolean},annotationFilter:{type:String}},rr=K([j("superviz-comments-comment-item")],rr);v();var Mp=tt(G),WE=[Mp.styles,zl],ir=class extends Mp{constructor(){super();this.pinCoordinates=null;this.getCommentInput=()=>this.shadowRoot.getElementById("comment-input--textarea");this.getCommentInputContainer=()=>this.shadowRoot.getElementById("comment-input--container");this.getSendBtn=()=>this.shadowRoot.querySelector(".comment-input--send-btn");this.commentInputFocus=({detail:r})=>{this.pinCoordinates=r,this.getCommentInput().focus()};this.sendEnter=r=>{if(r.key!=="Enter"||r.shiftKey)return;let o=this.getCommentInput(),a=o.value.trim();if(!a)return;let u=this.getSendBtn();this.emitEvent(this.eventType,{text:a,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,o.value="",u.disabled=!0,this.updateHeight()};this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1})};this.btnActive=!1,this.text=""}connectedCallback(){super.connectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&(window.document.body.addEventListener("comment-input-focus",this.commentInputFocus),this.addEventListener("keyup",this.sendEnter))}disconnectedCallback(){super.disconnectedCallback(),this.eventType==="create-annotation"&&window.document.body.removeEventListener("comment-input-focus",this.commentInputFocus)}updated(r){if(r.has("text")&&this.text.length>0){let o=this.getCommentInput();o.value=this.text,this.updateHeight()}if(r.has("btnActive")){let o=this.getSendBtn();o.disabled=!this.btnActive}}updateHeight(){let r=this.getCommentInput(),o=this.getCommentInputContainer();r.style.height="0px",o.style.height="0px";let a=r.scrollHeight+4,u=r.scrollHeight;r.style.height=`${a}px`,o.style.height=`${u}px`;let c=this.getSendBtn();c.disabled=!(r.value.length>0)}send(r){r.preventDefault();let o=this.getCommentInput(),a=this.getSendBtn(),u=o.value;this.emitEvent(this.eventType,{text:u,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,o.value="",a.disabled=!0,this.updateHeight()}render(){var a;let r=()=>{if(!!this.editable)return L`
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
      `},o=()=>{if(!this.editable)return L`
        <button class="comment-input--send-btn align-send-btn" disabled @click=${this.send}>
          <superviz-icon name="send" size="sm"></superviz-icon>
        </button>
      `};return L`
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
            ${o()} ${r()}
          </div>
        </div>
      </div>
    `}};ir.styles=WE,ir.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean},placeholder:{type:String}},ir=K([j("superviz-comments-comment-input")],ir);v();var Np=tt(G),BE=[Np.styles,Bl],or=class extends Np{constructor(){super();this.position={x:0,y:0}}get userInitial(){var o,a,u;return(((u=(a=(o=this.annotation)==null?void 0:o.comments[0])==null?void 0:a.participant)==null?void 0:u.name)||"Anonymous")[0].toUpperCase()}emitClick(){document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:this.annotation.uuid}}))}render(){var o,a;let r={"annotation-pin":!0,"annotation-pin--active":this.active};return this.type==="add"?L`
        <div
          class=${lt(r)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          <div class="annotation-pin__avatar annotation-pin__avatar--add">
            <superviz-icon name="add"></superviz-icon>
          </div>
        </div>
      `:L`
      <div
        @click=${this.emitClick}
        class=${lt(r)}
        style=${`top: ${(o=this.position)==null?void 0:o.y}px; left: ${(a=this.position)==null?void 0:a.x}px; pointer-events: auto;`}
      >
        <div class="annotation-pin__avatar">
          <p class="text text-bold text-big">${this.userInitial}</p>
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
      </div>
    `}};or.styles=BE,or.properties={type:{type:String},annotation:{type:Object},position:{type:Object},active:{type:Boolean}},or=K([j("superviz-comments-annotation-pin")],or);v();var Rp=tt(G),GE=[Rp.styles,Ul],sr=class extends Rp{constructor(){super(...arguments);this.selectAnnotation=()=>{let{uuid:r}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:r}}))};this.resolveAnnotation=({detail:r})=>{let{uuid:o}=this.annotation,{resolved:a,type:u}=r,c=u==="resolve-annotation"&&this.annotationFilter==="all";this.resolved=a,this.emitEvent("resolve-annotation",{uuid:o,resolved:a}),c&&(this.shouldShowUndoResolved=!0)};this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1};this.generateExpantedCommentesTemplate=(r,o)=>o===0?L``:L`
      <superviz-comments-comment-item
        uuid=${r.uuid}
        avatar="https://picsum.photos/200/300"
        username=${r.participant.name||"Anonymous"}
        text=${r.text}
        createdAt=${r.createdAt}
        annotationId=${this.annotation.uuid}
      ></superviz-comments-comment-item>
    `}get filterIsAll(){return this.annotationFilter==="all"}get filterIsResolved(){return this.annotationFilter==="resolved"}get shouldHiddenAnnotation(){return{hidden:this.resolved&&this.filterIsAll||!this.resolved&&this.filterIsResolved}}get replies(){return[...this.annotation.comments].splice(1).length}get repliesSize(){return this.replies>=5?5:this.replies}get replyText(){return this.replies!==1?"replies":"reply"}get isSelected(){return this.selected===this.annotation.uuid}get annotationClasses(){return{"annotation-item":!0,"annotation-item--selected":this.isSelected}}get hrClasses(){return{"sv-hr":!0,hidden:this.isLastAnnotation}}get avatarCommentsClasses(){return{"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&this.replies>1,hidden:!(!this.expandComments&&this.replies>=1)}}get commentsClasses(){return{"comments-container":!0,"comment-item--expand":this.isSelected&&this.expandComments,hidden:!(this.isSelected&&this.expandComments)}}firstUpdated(){this.resolved=this.annotation.resolved}updated(r){if(r.has("selected")){let o=this.selected===this.annotation.uuid;this.expandComments=o}}createComment({detail:r}){let{text:o}=r;this.emitEvent("create-comment",{uuid:this.annotation.uuid,text:o})}generateAvatarCommentsTemplate(){var o,a;let r=[];for(let u=1;u<=this.repliesSize;u++)r.push(L`
        <div class="avatar">
          <p class="text text-bold">
            ${((a=(o=this.annotation.comments[u])==null?void 0:o.participant.name[0])==null?void 0:a.toUpperCase())||"A"}
          </p>
        </div>
      `);return L`
      ${r}
      <div class="text text-big sv-gray-500">${this.replies} ${this.replyText}</div>
    `}annotationResolvedTemplate(){return this.shouldShowUndoResolved?L`
      <superviz-comments-annotation-resolved
        @undo-resolve=${this.resolveAnnotation}
        @hide=${this.hideUndoResolved}
        class=${lt({hidden:this.filterIsResolved})}
      >
      </superviz-comments-annotation-resolved>
    `:L``}render(){var r,o,a,u,c,p;return L`
      ${this.annotationResolvedTemplate()}

      <div class=${lt(this.shouldHiddenAnnotation)}>
        <div class=${lt(this.annotationClasses)} @click=${this.selectAnnotation}>
          <div>
            <superviz-comments-comment-item
              uuid=${(r=this.annotation.comments)==null?void 0:r[0].uuid}
              annotationId=${this.annotation.uuid}
              username=${((a=(o=this.annotation.comments)==null?void 0:o[0].participant)==null?void 0:a.name)||"Anonymous"}
              text=${(u=this.annotation.comments)==null?void 0:u[0].text}
              createdAt=${(c=this.annotation.comments)==null?void 0:c[0].createdAt}
              primaryComment
              resolvable
              ?resolved=${this.resolved}
              annotationFilter=${this.annotationFilter}
              @resolve-annotation=${this.resolveAnnotation}
            ></superviz-comments-comment-item>

            <div class=${lt(this.avatarCommentsClasses)}>
              <div class="avatar-container">${this.generateAvatarCommentsTemplate()}</div>
            </div>
          </div>

          <div class=${lt(this.commentsClasses)}>
            ${(p=this.annotation.comments)==null?void 0:p.map(this.generateExpantedCommentesTemplate)}
            <superviz-comments-comment-input
              @create-comment=${this.createComment}
              eventType="create-comment"
              @click=${m=>m.stopPropagation()}
              placeholder="Reply"
            ></superviz-comments-comment-input>
          </div>
        </div>
        <div class=${lt(this.hrClasses)}></div>
      </div>
    `}};sr.styles=GE,sr.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String}},sr=K([j("superviz-comments-annotation-item")],sr);v();var Dp=tt(G),VE=[Dp.styles],ar=class extends Dp{constructor(){super(...arguments);this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:L`<span class="text text-big sv-gray-600">Are you sure you want to delete this comment? <br /> This action cannot be undone</span>`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))};this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{!this.open||this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{!this.open||(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(r){r.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){!this.open||(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){let r=()=>{if(!!this.useSlot)return L`<slot name="modal-handler" @click=${this.toggle}></slot>`},o=()=>{if(!!this.open)return L`
        <superviz-modal></superviz-modal>
      `};return L`
      ${r()}
      ${o()}
    `}};ar.styles=VE,ar.properties={open:{type:Boolean},useSlot:{type:Boolean}},ar=K([j("superviz-comments-delete-comments-modal")],ar);v();var Pp=tt(G),ZE=[Pp.styles,Wl],qE=10*1e3,lr=class extends Pp{constructor(){super();this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)};this.timeToHide=qE,this.isCanceled=!1}firstUpdated(){this.setTimer()}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return this.timeToHide===0?L``:this.isCanceled?L``:L`
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
    `}};lr.styles=ZE,lr.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},lr=K([j("superviz-comments-annotation-resolved")],lr);v();var Fp=tt(G),YE=[Fp.styles,Gl],ro=[{label:"All comments",code:"all"},{label:"Resolved comments",code:"resolved"}],ur=class extends Fp{constructor(){super();this.caret="down"}render(){let r=this.filter==="all"?ro[0].label:ro[1].label,o=({detail:p})=>{this.emitEvent("select",{filter:p}),a()},a=()=>{this.caret=this.caret==="down"?"up":"down"},u=this.filter==="all"?ro[0].code:ro[1].code,c={text:!0,"text-bold":!0,"select-content":!0,"sv-gray-500":this.caret==="down","sv-gray-700":this.caret==="up"};return L`
      <div class="select">
        <div class="select-container">
          <superviz-dropdown
            options=${JSON.stringify(ro)}
            active=${u}
            label="label"
            returnTo="code"
            position="bottom-left"
            right-offset="100px"
            @click=${a}
            @selected=${o}
            @close=${a}
          >
            <div class="content" slot="dropdown">
              <span class=${lt(c)}>${r}</span>
              <superviz-icon name=${this.caret} size="md"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};ur.styles=YE,ur.properties={filter:{type:String},caret:{type:String}},ur=K([j("superviz-comments-annotation-filter")],ur);v();var kp=tt(G),JE=[kp.styles,Vl],cr=class extends kp{constructor(){super();this.isHidden=!0,this.positionStyles="top: 20px; left: 20px;",this.shouldHide=!1,this.commentsPosition="left"}toggle(){this.emitEvent("toggle",{})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("toggle-annotation-sidebar",()=>{this.isHidden=!this.isHidden})}updated(r){super.updated(r),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(".float-button");if(!o)return;o.setAttribute("style",this.positionStyles);let a=window.document.body.getBoundingClientRect().width,u=o.getBoundingClientRect(),c=320;if(!this.commentsPosition||this.commentsPosition==="left"){this.shouldHide=u.x<c;return}this.shouldHide=a-u.right<c})}render(){let r={"float-button":!0,"hide-button":!this.isHidden&&this.shouldHide};return L` <button @click=${this.toggle} class="${lt(r)}">
      <superviz-icon allowSetSize=${!0} size="sm" name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`}};cr.styles=JE,cr.properties={positionStyles:{type:String},isHidden:{type:Boolean},commentsPosition:{type:String}},cr=K([j("superviz-comments-button")],cr);v();v();v();v();var io=(_=>(_.GOTO="go to",_.LOCAL_FOLLOW="follow",_.LOCAL_UNFOLLOW="unfollow",_.FOLLOW="everyone follows me",_.UNFOLLOW="stop followers",_.PRIVATE="private mode",_.LEAVE_PRIVATE="leave private mode",_.GATHER="gather all",_.STOP_GATHER="stop gather all",_))(io||{});v();v();var Lu=B`
  .superviz-who-is-online {
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;
  }

  .wio-content {
    display: flex;
    flex-direction: column;
    position: fixed;
  }

  .superviz-who-is-online__participant {
    --border-color: #aea9b8;

    border-radius: 50%;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
  }

  .superviz-who-is-online__participant:before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid var(--border-color);
  }

  .followed:before {
    border-style: dashed !important;
    animation: rotate 15s linear infinite;
  }

  .private {
    opacity: 0.3;
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  .superviz-who-is-online__participant.disable-dropdown {
    cursor: default;
  }

  .message {
    box-sizing: border-box;
    margin-top: 9px;
    font-size: 12px;
    padding: 8px 10px;
    font-family: 'Roboto';
    border-radius: 6px;
    align-self: flex-end;
    background-color: #fff;
    color: rgb(var(--sv-gray-700));

    border: 2px solid #e0e0e0;
  }

  .message span {
    margin-left: 3px;
    text-decoration: underline;
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
    font-size: 14px;
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
    font-size: 14px;
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
    .superviz-who-is-online__participant,
    .superviz-who-is-online__participant::before {
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
`;v();var Mu=B`
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
    cursor: pointer;
  }

  .who-is-online-dropdown__content.disable-dropdown {
    cursor: default;
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
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
    color: #26242a;
    object-fit: contain;
  }

  .dropdown-list {
    position: relative;
    display: flex;
    flex-direction: column;
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

  .superviz-who-is-online-dropdown__tooltip {
    background-color: rgb(var(--sv-gray-600));
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    position: absolute;
    top: 52px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
    opacity: 0;
    cursor: default;
    display: none;
    transition: opacity 0.2s ease-in-out display 0s;
  }

  .superviz-who-is-online-dropdown__tooltip-arrow {
    width: 13px;
    height: 13px;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: rotate(45deg) translateX(-50%);
    background-color: rgb(var(--sv-gray-600));
    border-top-left-radius: 3px;
  }

  .dropdown-content:hover + .superviz-who-is-online-dropdown__tooltip {
    opacity: 1;
    display: block;
  }

  .tooltip-content {
    margin: 0;
    font-family: roboto;
    white-space: nowrap;
    text-align: center;
    color: white;
    font-size: 14px;
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
  }

  .hide-icon {
    display: none;
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

    .menu--top {
      bottom: 36px;
    }

    .superviz-who-is-online-dropdown__tooltip {
      top: 44px;
    }
  }
`;var Hp=tt(G),KE=[Hp.styles,Lu],dr=class extends Hp{constructor(){super();this.onClickOutDropdown=({detail:r})=>{this.open=r.open};this.dropdownOptionsHandler=({detail:r})=>{var m;let{id:o,label:a,name:u,color:c,slotIndex:p}=r;if(a==="go to"&&this.emitEvent("realtime.go-to-participant",{id:o}),["follow","unfollow"].includes(a)){if(((m=this.following)==null?void 0:m.id)===o){this.stopFollowing();return}this.following={name:u,id:o,color:c},this.swapParticipantBeingFollowedPosition(),this.emitEvent("realtime.local-follow-participant",{id:o})}if(["private mode","leave private mode"].includes(a)&&(this.isPrivate=a==="private mode",this.emitEvent("realtime.private-mode",{id:o,isPrivate:this.isPrivate}),this.everyoneFollowsMe=!1),["everyone follows me","stop followers"].includes(a)){if(this.following&&this.stopFollowing(),this.everyoneFollowsMe){this.stopEveryoneFollowsMe();return}this.everyoneFollowsMe=!0,this.following=void 0,this.emitEvent("realtime.follow-participant",{id:o,name:u,color:c,slotIndex:p})}a==="gather all"&&this.emitEvent("realtime.gather",{id:o})};this.toggleShowTooltip=()=>{this.showTooltip=!this.showTooltip};this.position="top: 20px; right: 40px;",this.showTooltip=!0,this.open=!1,this.textColorValues=[2,4,5,7,8,16]}updateParticipants(r){this.participants=r}toggleOpen(){this.open=!this.open}dropdownPosition(r){if(this.participants.length===1)return"bottom-center";if(r===0)return"bottom-right";let o=this.participants.length>4,a=r+1===this.participants.length;return o||!a?"bottom-center":"bottom-left"}renderExcessParticipants(){let r=this.participants.length-4;if(r<=0)return L``;let o=this.participants.slice(4).map(({name:c,color:p,id:m,slotIndex:_,isLocal:T,avatar:S,joinedPresence:N})=>({name:c,color:p,id:m,slotIndex:_,avatar:S,isLocal:T,joinedPresence:N})),a={"superviz-who-is-online__participant":!0,excess_participants:!0,"excess_participants--open":this.open};return L`
      <superviz-who-is-online-dropdown
        label="label"
        returnTo="label"
        position="bottom"
        @selected=${this.dropdownOptionsHandler}
        participants=${JSON.stringify(o)}
        @clickout=${this.onClickOutDropdown}
        ?disableDropdown=${this.disableDropdown}
        following=${JSON.stringify(this.following)}
        ?showSeeMoreTooltip=${this.showTooltip}
        @toggle=${this.toggleOpen}
        @toggle-dropdown-state=${this.toggleShowTooltip}
      >
        <div class=${lt(a)} slot="dropdown">
          <div class="superviz-who-is-online__excess" style="color: #AEA9B8;">+${r}</div>
        </div>
      </superviz-who-is-online-dropdown>
    `}stopEveryoneFollowsMe(){this.everyoneFollowsMe=!1,this.emitEvent("realtime.follow-participant",void 0)}getAvatar(r){var a,u;if((a=r.avatar)!=null&&a.imageUrl)return L` <img
        class="superviz-who-is-online__avatar"
        style="background-color: ${r.color}"
        src=${r.avatar.imageUrl}
      />`;let o=this.textColorValues.includes(r.slotIndex)?"#FFFFFF":"#26242A";return L`<div
      class="superviz-who-is-online__avatar"
      style="background-color: ${r.color}; color: ${o}"
    >
      ${(u=r.name)==null?void 0:u.at(0).toUpperCase()}
    </div>`}getOptions(r,o,a){let{id:u,slotIndex:c,name:p,color:m}=r,_={id:u,name:p,color:m,slotIndex:c},{isPrivate:T}=this;return(a?["GATHER",this.everyoneFollowsMe?"UNFOLLOW":"FOLLOW",T?"LEAVE_PRIVATE":"PRIVATE"]:["GOTO",o?"LOCAL_UNFOLLOW":"LOCAL_FOLLOW"]).map(I=>Lt(k({},_),{label:io[I]}))}getIcons(r,o){return r?["gather",this.everyoneFollowsMe?"send-off":"send","eye_inative"]:["place",o?"send-off":"send"]}putLocalParticipationFirst(){var u;if(this.participants[0].isLocal)return;let r=(u=this.participants)==null?void 0:u.find(({isLocal:c})=>c);if(!r)return;let o=[...this.participants],a=o.indexOf(r);o.splice(a,1),o.unshift(r),this.participants=o}swapParticipantBeingFollowedPosition(){var c;let r=(c=this.participants)==null?void 0:c.findIndex(({id:p})=>{var m;return p===((m=this.following)==null?void 0:m.id)}),o=1;if(r<4||!r)return;let a=[...this.participants],u=a[r];a[r]=a[o],a[o]=u,this.participants=a}stopFollowing(){this.following=void 0,this.emitEvent("realtime.local-follow-participant",{id:void 0})}cancelPrivate(){this.isPrivate=void 0,this.emitEvent("realtime.private-mode",{id:this.localParticipantData.id})}followingMessage(){if(!this.following)return"";let{name:r,color:o}=this.following;return L`<div class="message" style="border-color: ${o}">
      Following: ${r} <span @click=${this.stopFollowing}>Stop</span>
    </div>`}everyoneFollowsMeMessage(){if(!this.everyoneFollowsMe)return"";let{color:r}=this.localParticipantData;return L`<div class="message" style="border-color: ${r}">
      Everyone is following you <span @click=${this.stopEveryoneFollowsMe}>Stop</span>
    </div>`}privateMessage(){if(!this.isPrivate)return"";let{color:r}=this.localParticipantData;return L`<div class="message" style="border-color: ${r}">
      You are in Private Mode <span @click=${this.cancelPrivate}>Cancel</span>
    </div>`}renderParticipants(){return this.participants?(this.putLocalParticipationFirst(),this.swapParticipantBeingFollowedPosition(),L`<div class="superviz-who-is-online">
      ${Dr(this.participants.slice(0,4),r=>r.id,(r,o)=>{var vt;let{joinedPresence:a,isLocal:u,id:c,name:p,color:m}=r,_=((vt=this.following)==null?void 0:vt.id)===c,T=this.getOptions(r,_,u),S=this.getIcons(u,_),N=this.dropdownPosition(o),I=!a||this.disableDropdown,M={"superviz-who-is-online__participant":!0,"disable-dropdown":I,followed:_||u&&this.everyoneFollowsMe,private:u&&this.isPrivate},ct=p+(u?" (you)":"");return L`
            <superviz-dropdown
              options=${JSON.stringify(T)}
              label="label"
              position="${N}"
              @selected=${this.dropdownOptionsHandler}
              @toggle-dropdown-state=${this.toggleShowTooltip}
              icons="${JSON.stringify(S)}"
              name="${ct}"
              ?disabled=${I}
              ?canShowTooltip=${this.showTooltip}
              onHoverData=${JSON.stringify({name:p,action:u?"You":"Click to follow"})}
            >
              <div slot="dropdown" class=${lt(M)} style="--border-color: ${m}">
                ${this.getAvatar(r)}
              </div>
            </superviz-dropdown>
          `})}
      ${this.renderExcessParticipants()}
    </div>`):L``}updated(r){super.updated(r),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(".wio-content");if(!o)return;let a=this.position.includes("left")?"flex-start":"flex-end",u=`${this.position} align-items: ${a};`;o.setAttribute("style",u)})}render(){return L`<div class="wio-content">
      ${this.renderParticipants()} ${this.followingMessage()} ${this.everyoneFollowsMeMessage()}
      ${this.privateMessage()}
    </div> `}};dr.styles=KE,dr.properties={position:{type:String},participants:{type:Object},open:{type:Boolean},disableDropdown:{type:Boolean},following:{type:Object},localParticipantColor:{type:String},isPrivate:{type:Boolean},everyoneFollowsMe:{type:Boolean},showTooltip:{type:Boolean}},dr=K([j("superviz-who-is-online")],dr);v();v();var zp=tt(G),jE=[zp.styles,Mu],fr=class extends zp{constructor(){super();this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let o=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),u=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=o.includes(a),_=o.includes(u),T=o.includes(p);m||_||T||this.close()};this.close=()=>{this.open=!1,this.selected="",this.emitEvent("clickout",{bubbles:!1,composed:!1})};this.selectParticipant=r=>()=>{this.selected=r};this.toggleShowTooltip=()=>{this.showParticipantTooltip=!this.showParticipantTooltip};this.adjustPosition=()=>{let{top:r,bottom:o}=this.dropdownBounds,{innerHeight:a}=window,u=this.positionAction();if(u===0)return;if(u===1){let _=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,_);return}let c=a-o>r?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,c);this.position=m};this.tooltip=()=>this.showSeeMoreTooltip?L`<superviz-tooltip
      tooltipData=${JSON.stringify({name:"See more"})}
    ></superviz-tooltip>`:"";this.textColorValues=[2,4,5,7,8,16],this.selected="",this.showParticipantTooltip=!0}updated(r){if(!!r.has("open")){if(this.emitEvent("toggle-dropdown-state",{open:this.open,font:"toggle"}),this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown)}}getAvatar(r){var a,u;if((a=r.avatar)!=null&&a.imageUrl)return L` <img
        class="who-is-online-dropdown__avatar"
        style="background-color: ${r.color}"
        src=${r.avatar.imageUrl}
      />`;let o=this.textColorValues.includes(r.slotIndex)?"#FFFFFF":"#26242A";return L`<div
      class="who-is-online-dropdown__avatar"
      style="background-color: ${r.color}; color: ${o}"
    >
      ${(u=r.name)==null?void 0:u.at(0).toUpperCase()}
    </div>`}renderParticipants(){if(!this.participants)return;let r=["place","send"];return Dr(this.participants,o=>o.id,o=>{var gt,ct;let{id:a,slotIndex:u,joinedPresence:c,isLocal:p,color:m,name:_}=o,T=!c||p||this.disableDropdown,S={"who-is-online-dropdown__content":!0,"who-is-online-dropdown__content--selected":this.selected===a,"disable-dropdown":T,followed:((gt=this.following)==null?void 0:gt.id)===a},N={icon:!0,"hide-icon":T},I=((ct=this.following)==null?void 0:ct.id)===a,M=Object.values(io).map((vt,qt)=>({label:I&&qt?"UNFOLLOW":vt,id:a,name:_,color:m,slotIndex:u})).slice(0,2);return L`
        <superviz-dropdown
        options=${JSON.stringify(M)}
        label="label"
        position="bottom-right"
        @selected=${this.close}
        icons="${JSON.stringify(r)}"
        ?disabled=${T}
        onHoverData=${JSON.stringify({name:_,action:"Click to follow"})}
        ?canShowTooltip=${this.showParticipantTooltip}
        ?shiftTooltipLeft=${!0}
        @toggle-dropdown-state=${this.toggleShowTooltip}
        >
        <div 
          class=${lt(S)} 
          @click=${this.selectParticipant(a)} slot="dropdown">
          <div class="who-is-online-dropdown__participant" style="border-color: 
          ${m}">
              ${this.getAvatar(o)}
            </div>
            <span class="user-name">${_}</span>
            <superviz-icon 
              class=${lt(N)} 
              name="right" 
              color="var(--sv-gray-600)">
          </superviz-icon>
          </div>
        </div>
      </superviz-dropdown>
      `})}setMenu(){var r;if(!this.menu){this.menu=this.shadowRoot.querySelector(".menu");let o={rootMargin:"0px",threshold:1},a=new IntersectionObserver(this.adjustPosition,o),u=new ResizeObserver(this.adjustPosition),c=this.menu;a.observe(c),u.observe((r=this.scrollableParent)!=null?r:document.body)}}get scrollableParent(){let r;this.host||(this.host=this.getRootNode().host);let o=this.host;for(;!r;){let a=o==null?void 0:o.parentElement;if(this.isScrollable(a)){r=a;break}if(o=a,!o)break}return r}isScrollable(r){if(!r)return!1;let o=r.scrollHeight>r.clientHeight,a=window.getComputedStyle(r).overflowY,u=window.getComputedStyle(r).overflowX,c=a.indexOf("hidden")!==-1,p=u.indexOf("hidden")!==-1;return o&&!c&&!p}get dropdownBounds(){this.dropdownContent||(this.dropdownContent=this.shadowRoot.querySelector(".dropdown-content"));let r=this.dropdownContent.getBoundingClientRect(),{y:o,height:a}=this.menu.getBoundingClientRect();return{top:o,bottom:o+a+4,height:a+4,contentY:r.y}}shouldUseOriginalVertical(){let{height:r,contentY:o}=this.dropdownBounds,{innerHeight:a}=window,u=o+r;return this.originalPosition.includes("bottom")?r+u<a:o-r>0}positionAction(){let{top:r,bottom:o}=this.dropdownBounds,{innerHeight:a}=window,u=o>a,c=r<0;return u&&this.position.includes("bottom")||c&&this.position.includes("top")?2:!u&&!c&&this.shouldUseOriginalVertical()?1:0}toggle(){this.originalPosition||(this.originalPosition=this.position),this.setMenu(),this.open=!this.open,this.open&&(this.selected="",setTimeout(()=>this.adjustPosition()))}get menuClasses(){return{menu:!0,"menu--bottom":this.position==="bottom","menu--top":this.position==="top","menu-open":this.open}}render(){return L`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
        ${this.tooltip()}
      </div>
      <div class="dropdown-list">
        <div class=${lt(this.menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `}};fr.styles=jE,fr.properties={open:{type:Boolean},align:{type:String},position:{type:String},participants:{type:Array},selected:{type:String},disableDropdown:{type:Boolean},following:{type:Object},showSeeMoreTooltip:{type:Boolean},showParticipantTooltip:{type:Boolean}},fr=K([j("superviz-who-is-online-dropdown")],fr);export{Yn as Comments,ur as CommentsAnnotationFilter,sr as CommentsAnnotationItem,or as CommentsAnnotationPin,lr as CommentsAnnotationResolved,Kn as CommentsAnnotations,ir as CommentsCommentInput,rr as CommentsCommentItem,jn as CommentsContent,cr as CommentsFloatButton,Jn as CommentsTopbar,ar as DeleteCommentModal,Zn as Dropdown,Gn as HelloWorld,Vn as Icon,Mr as Modal,Nr as ModalContainer,qn as Tooltip,dr as WhoIsOnline,fr as WhoIsOnlineDropdown};
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
