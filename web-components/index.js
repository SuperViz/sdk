var Lx=Object.create;var Qo=Object.defineProperty,Mx=Object.defineProperties,ch=Object.getOwnPropertyDescriptor,Nx=Object.getOwnPropertyDescriptors,Rx=Object.getOwnPropertyNames,Xo=Object.getOwnPropertySymbols,Px=Object.getPrototypeOf,sl=Object.prototype.hasOwnProperty,dh=Object.prototype.propertyIsEnumerable;var hh=Math.pow,uh=(i,e,r)=>e in i?Qo(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,k=(i,e)=>{for(var r in e||(e={}))sl.call(e,r)&&uh(i,r,e[r]);if(Xo)for(var r of Xo(e))dh.call(e,r)&&uh(i,r,e[r]);return i},At=(i,e)=>Mx(i,Nx(e));var al=(i,e)=>{var r={};for(var o in i)sl.call(i,o)&&e.indexOf(o)<0&&(r[o]=i[o]);if(i!=null&&Xo)for(var o of Xo(i))e.indexOf(o)<0&&dh.call(i,o)&&(r[o]=i[o]);return r};var Dx=(i,e)=>()=>(i&&(e=i(i=0)),e);var Fx=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var kx=(i,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Rx(e))!sl.call(i,a)&&a!==r&&Qo(i,a,{get:()=>e[a],enumerable:!(o=ch(e,a))||o.enumerable});return i};var Hx=(i,e,r)=>(r=i!=null?Lx(Px(i)):{},kx(e||!i||!i.__esModule?Qo(r,"default",{value:i,enumerable:!0}):r,i));var X=(i,e,r,o)=>{for(var a=o>1?void 0:o?ch(e,r):e,u=i.length-1,c;u>=0;u--)(c=i[u])&&(a=(o?c(e,r,a):c(a))||a);return o&&a&&Qo(e,r,a),a};var vi=(i,e,r)=>new Promise((o,a)=>{var u=m=>{try{p(r.next(m))}catch(_){a(_)}},c=m=>{try{p(r.throw(m))}catch(_){a(_)}},p=m=>m.done?o(m.value):Promise.resolve(m.value).then(u,c);p((r=r.apply(i,e)).next())});var v=Dx(()=>{});var sf=Fx(($r,$i)=>{v();(function(){var i,e="4.17.21",r=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",u="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",p=500,m="__lodash_placeholder__",_=1,T=2,S=4,M=1,$=2,P=1,gt=2,ut=4,vt=8,qt=16,Yt=32,Ye=64,fe=128,gn=256,vn=512,yn=30,ks="...",kp=800,Hp=16,Lu=1,zp=2,Up=3,_n=1/0,Je=9007199254740991,Wp=17976931348623157e292,io=0/0,Te=4294967295,Bp=Te-1,Gp=Te>>>1,Vp=[["ary",fe],["bind",P],["bindKey",gt],["curry",vt],["curryRight",qt],["flip",vn],["partial",Yt],["partialRight",Ye],["rearg",gn]],dr="[object Arguments]",oo="[object Array]",Zp="[object AsyncFunction]",Jr="[object Boolean]",Kr="[object Date]",qp="[object DOMException]",so="[object Error]",ao="[object Function]",Mu="[object GeneratorFunction]",pe="[object Map]",jr="[object Number]",Yp="[object Null]",Le="[object Object]",Nu="[object Promise]",Jp="[object Proxy]",Xr="[object RegExp]",me="[object Set]",Qr="[object String]",lo="[object Symbol]",Kp="[object Undefined]",ti="[object WeakMap]",jp="[object WeakSet]",ei="[object ArrayBuffer]",hr="[object DataView]",Hs="[object Float32Array]",zs="[object Float64Array]",Us="[object Int8Array]",Ws="[object Int16Array]",Bs="[object Int32Array]",Gs="[object Uint8Array]",Vs="[object Uint8ClampedArray]",Zs="[object Uint16Array]",qs="[object Uint32Array]",Xp=/\b__p \+= '';/g,Qp=/\b(__p \+=) '' \+/g,tm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ru=/&(?:amp|lt|gt|quot|#39);/g,Pu=/[&<>"']/g,em=RegExp(Ru.source),nm=RegExp(Pu.source),rm=/<%-([\s\S]+?)%>/g,im=/<%([\s\S]+?)%>/g,Du=/<%=([\s\S]+?)%>/g,om=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,sm=/^\w*$/,am=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ys=/[\\^$.*+?()[\]{}|]/g,lm=RegExp(Ys.source),Js=/^\s+/,um=/\s/,cm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,dm=/\{\n\/\* \[wrapped with (.+)\] \*/,hm=/,? & /,fm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,pm=/[()=,{}\[\]\/\s]/,mm=/\\(\\)?/g,gm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Fu=/\w*$/,vm=/^[-+]0x[0-9a-f]+$/i,ym=/^0b[01]+$/i,_m=/^\[object .+?Constructor\]$/,wm=/^0o[0-7]+$/i,xm=/^(?:0|[1-9]\d*)$/,bm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,uo=/($^)/,Em=/['\n\r\u2028\u2029\\]/g,co="\\ud800-\\udfff",Tm="\\u0300-\\u036f",Sm="\\ufe20-\\ufe2f",Am="\\u20d0-\\u20ff",ku=Tm+Sm+Am,Hu="\\u2700-\\u27bf",zu="a-z\\xdf-\\xf6\\xf8-\\xff",Om="\\xac\\xb1\\xd7\\xf7",$m="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Cm="\\u2000-\\u206f",Im=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Uu="A-Z\\xc0-\\xd6\\xd8-\\xde",Wu="\\ufe0e\\ufe0f",Bu=Om+$m+Cm+Im,Ks="['\u2019]",Lm="["+co+"]",Gu="["+Bu+"]",ho="["+ku+"]",Vu="\\d+",Mm="["+Hu+"]",Zu="["+zu+"]",qu="[^"+co+Bu+Vu+Hu+zu+Uu+"]",js="\\ud83c[\\udffb-\\udfff]",Nm="(?:"+ho+"|"+js+")",Yu="[^"+co+"]",Xs="(?:\\ud83c[\\udde6-\\uddff]){2}",Qs="[\\ud800-\\udbff][\\udc00-\\udfff]",fr="["+Uu+"]",Ju="\\u200d",Ku="(?:"+Zu+"|"+qu+")",Rm="(?:"+fr+"|"+qu+")",ju="(?:"+Ks+"(?:d|ll|m|re|s|t|ve))?",Xu="(?:"+Ks+"(?:D|LL|M|RE|S|T|VE))?",Qu=Nm+"?",tc="["+Wu+"]?",Pm="(?:"+Ju+"(?:"+[Yu,Xs,Qs].join("|")+")"+tc+Qu+")*",Dm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Fm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ec=tc+Qu+Pm,km="(?:"+[Mm,Xs,Qs].join("|")+")"+ec,Hm="(?:"+[Yu+ho+"?",ho,Xs,Qs,Lm].join("|")+")",zm=RegExp(Ks,"g"),Um=RegExp(ho,"g"),ta=RegExp(js+"(?="+js+")|"+Hm+ec,"g"),Wm=RegExp([fr+"?"+Zu+"+"+ju+"(?="+[Gu,fr,"$"].join("|")+")",Rm+"+"+Xu+"(?="+[Gu,fr+Ku,"$"].join("|")+")",fr+"?"+Ku+"+"+ju,fr+"+"+Xu,Fm,Dm,Vu,km].join("|"),"g"),Bm=RegExp("["+Ju+co+ku+Wu+"]"),Gm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Vm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Zm=-1,mt={};mt[Hs]=mt[zs]=mt[Us]=mt[Ws]=mt[Bs]=mt[Gs]=mt[Vs]=mt[Zs]=mt[qs]=!0,mt[dr]=mt[oo]=mt[ei]=mt[Jr]=mt[hr]=mt[Kr]=mt[so]=mt[ao]=mt[pe]=mt[jr]=mt[Le]=mt[Xr]=mt[me]=mt[Qr]=mt[ti]=!1;var pt={};pt[dr]=pt[oo]=pt[ei]=pt[hr]=pt[Jr]=pt[Kr]=pt[Hs]=pt[zs]=pt[Us]=pt[Ws]=pt[Bs]=pt[pe]=pt[jr]=pt[Le]=pt[Xr]=pt[me]=pt[Qr]=pt[lo]=pt[Gs]=pt[Vs]=pt[Zs]=pt[qs]=!0,pt[so]=pt[ao]=pt[ti]=!1;var qm={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ym={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Km={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},jm=parseFloat,Xm=parseInt,nc=typeof global=="object"&&global&&global.Object===Object&&global,Qm=typeof self=="object"&&self&&self.Object===Object&&self,It=nc||Qm||Function("return this")(),ea=typeof $r=="object"&&$r&&!$r.nodeType&&$r,wn=ea&&typeof $i=="object"&&$i&&!$i.nodeType&&$i,rc=wn&&wn.exports===ea,na=rc&&nc.process,ne=function(){try{var w=wn&&wn.require&&wn.require("util").types;return w||na&&na.binding&&na.binding("util")}catch(E){}}(),ic=ne&&ne.isArrayBuffer,oc=ne&&ne.isDate,sc=ne&&ne.isMap,ac=ne&&ne.isRegExp,lc=ne&&ne.isSet,uc=ne&&ne.isTypedArray;function Jt(w,E,b){switch(b.length){case 0:return w.call(E);case 1:return w.call(E,b[0]);case 2:return w.call(E,b[0],b[1]);case 3:return w.call(E,b[0],b[1],b[2])}return w.apply(E,b)}function tg(w,E,b,D){for(var V=-1,ot=w==null?0:w.length;++V<ot;){var Ot=w[V];E(D,Ot,b(Ot),w)}return D}function re(w,E){for(var b=-1,D=w==null?0:w.length;++b<D&&E(w[b],b,w)!==!1;);return w}function eg(w,E){for(var b=w==null?0:w.length;b--&&E(w[b],b,w)!==!1;);return w}function cc(w,E){for(var b=-1,D=w==null?0:w.length;++b<D;)if(!E(w[b],b,w))return!1;return!0}function Ke(w,E){for(var b=-1,D=w==null?0:w.length,V=0,ot=[];++b<D;){var Ot=w[b];E(Ot,b,w)&&(ot[V++]=Ot)}return ot}function fo(w,E){var b=w==null?0:w.length;return!!b&&pr(w,E,0)>-1}function ra(w,E,b){for(var D=-1,V=w==null?0:w.length;++D<V;)if(b(E,w[D]))return!0;return!1}function yt(w,E){for(var b=-1,D=w==null?0:w.length,V=Array(D);++b<D;)V[b]=E(w[b],b,w);return V}function je(w,E){for(var b=-1,D=E.length,V=w.length;++b<D;)w[V+b]=E[b];return w}function ia(w,E,b,D){var V=-1,ot=w==null?0:w.length;for(D&&ot&&(b=w[++V]);++V<ot;)b=E(b,w[V],V,w);return b}function ng(w,E,b,D){var V=w==null?0:w.length;for(D&&V&&(b=w[--V]);V--;)b=E(b,w[V],V,w);return b}function oa(w,E){for(var b=-1,D=w==null?0:w.length;++b<D;)if(E(w[b],b,w))return!0;return!1}var rg=sa("length");function ig(w){return w.split("")}function og(w){return w.match(fm)||[]}function dc(w,E,b){var D;return b(w,function(V,ot,Ot){if(E(V,ot,Ot))return D=ot,!1}),D}function po(w,E,b,D){for(var V=w.length,ot=b+(D?1:-1);D?ot--:++ot<V;)if(E(w[ot],ot,w))return ot;return-1}function pr(w,E,b){return E===E?vg(w,E,b):po(w,hc,b)}function sg(w,E,b,D){for(var V=b-1,ot=w.length;++V<ot;)if(D(w[V],E))return V;return-1}function hc(w){return w!==w}function fc(w,E){var b=w==null?0:w.length;return b?la(w,E)/b:io}function sa(w){return function(E){return E==null?i:E[w]}}function aa(w){return function(E){return w==null?i:w[E]}}function pc(w,E,b,D,V){return V(w,function(ot,Ot,ht){b=D?(D=!1,ot):E(b,ot,Ot,ht)}),b}function ag(w,E){var b=w.length;for(w.sort(E);b--;)w[b]=w[b].value;return w}function la(w,E){for(var b,D=-1,V=w.length;++D<V;){var ot=E(w[D]);ot!==i&&(b=b===i?ot:b+ot)}return b}function ua(w,E){for(var b=-1,D=Array(w);++b<w;)D[b]=E(b);return D}function lg(w,E){return yt(E,function(b){return[b,w[b]]})}function mc(w){return w&&w.slice(0,_c(w)+1).replace(Js,"")}function Kt(w){return function(E){return w(E)}}function ca(w,E){return yt(E,function(b){return w[b]})}function ni(w,E){return w.has(E)}function gc(w,E){for(var b=-1,D=w.length;++b<D&&pr(E,w[b],0)>-1;);return b}function vc(w,E){for(var b=w.length;b--&&pr(E,w[b],0)>-1;);return b}function ug(w,E){for(var b=w.length,D=0;b--;)w[b]===E&&++D;return D}var cg=aa(qm),dg=aa(Ym);function hg(w){return"\\"+Km[w]}function fg(w,E){return w==null?i:w[E]}function mr(w){return Bm.test(w)}function pg(w){return Gm.test(w)}function mg(w){for(var E,b=[];!(E=w.next()).done;)b.push(E.value);return b}function da(w){var E=-1,b=Array(w.size);return w.forEach(function(D,V){b[++E]=[V,D]}),b}function yc(w,E){return function(b){return w(E(b))}}function Xe(w,E){for(var b=-1,D=w.length,V=0,ot=[];++b<D;){var Ot=w[b];(Ot===E||Ot===m)&&(w[b]=m,ot[V++]=b)}return ot}function mo(w){var E=-1,b=Array(w.size);return w.forEach(function(D){b[++E]=D}),b}function gg(w){var E=-1,b=Array(w.size);return w.forEach(function(D){b[++E]=[D,D]}),b}function vg(w,E,b){for(var D=b-1,V=w.length;++D<V;)if(w[D]===E)return D;return-1}function yg(w,E,b){for(var D=b+1;D--;)if(w[D]===E)return D;return D}function gr(w){return mr(w)?wg(w):rg(w)}function ge(w){return mr(w)?xg(w):ig(w)}function _c(w){for(var E=w.length;E--&&um.test(w.charAt(E)););return E}var _g=aa(Jm);function wg(w){for(var E=ta.lastIndex=0;ta.test(w);)++E;return E}function xg(w){return w.match(ta)||[]}function bg(w){return w.match(Wm)||[]}var Eg=function w(E){E=E==null?It:Qe.defaults(It.Object(),E,Qe.pick(It,Vm));var b=E.Array,D=E.Date,V=E.Error,ot=E.Function,Ot=E.Math,ht=E.Object,ha=E.RegExp,Tg=E.String,ie=E.TypeError,go=b.prototype,Sg=ot.prototype,vr=ht.prototype,vo=E["__core-js_shared__"],yo=Sg.toString,ct=vr.hasOwnProperty,Ag=0,wc=function(){var t=/[^.]+$/.exec(vo&&vo.keys&&vo.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),_o=vr.toString,Og=yo.call(ht),$g=It._,Cg=ha("^"+yo.call(ct).replace(Ys,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),wo=rc?E.Buffer:i,tn=E.Symbol,xo=E.Uint8Array,xc=wo?wo.allocUnsafe:i,bo=yc(ht.getPrototypeOf,ht),bc=ht.create,Ec=vr.propertyIsEnumerable,Eo=go.splice,Tc=tn?tn.isConcatSpreadable:i,ri=tn?tn.iterator:i,xn=tn?tn.toStringTag:i,To=function(){try{var t=An(ht,"defineProperty");return t({},"",{}),t}catch(n){}}(),Ig=E.clearTimeout!==It.clearTimeout&&E.clearTimeout,Lg=D&&D.now!==It.Date.now&&D.now,Mg=E.setTimeout!==It.setTimeout&&E.setTimeout,So=Ot.ceil,Ao=Ot.floor,fa=ht.getOwnPropertySymbols,Ng=wo?wo.isBuffer:i,Sc=E.isFinite,Rg=go.join,Pg=yc(ht.keys,ht),$t=Ot.max,Ft=Ot.min,Dg=D.now,Fg=E.parseInt,Ac=Ot.random,kg=go.reverse,pa=An(E,"DataView"),ii=An(E,"Map"),ma=An(E,"Promise"),yr=An(E,"Set"),oi=An(E,"WeakMap"),si=An(ht,"create"),Oo=oi&&new oi,_r={},Hg=On(pa),zg=On(ii),Ug=On(ma),Wg=On(yr),Bg=On(oi),$o=tn?tn.prototype:i,ai=$o?$o.valueOf:i,Oc=$o?$o.toString:i;function h(t){if(Et(t)&&!Z(t)&&!(t instanceof nt)){if(t instanceof oe)return t;if(ct.call(t,"__wrapped__"))return $d(t)}return new oe(t)}var wr=function(){function t(){}return function(n){if(!_t(n))return{};if(bc)return bc(n);t.prototype=n;var s=new t;return t.prototype=i,s}}();function Co(){}function oe(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=i}h.templateSettings={escape:rm,evaluate:im,interpolate:Du,variable:"",imports:{_:h}},h.prototype=Co.prototype,h.prototype.constructor=h,oe.prototype=wr(Co.prototype),oe.prototype.constructor=oe;function nt(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Te,this.__views__=[]}function Gg(){var t=new nt(this.__wrapped__);return t.__actions__=Wt(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Wt(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Wt(this.__views__),t}function Vg(){if(this.__filtered__){var t=new nt(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Zg(){var t=this.__wrapped__.value(),n=this.__dir__,s=Z(t),l=n<0,d=s?t.length:0,f=iy(0,d,this.__views__),g=f.start,y=f.end,x=y-g,A=l?y:g-1,O=this.__iteratees__,I=O.length,N=0,F=Ft(x,this.__takeCount__);if(!s||!l&&d==x&&F==x)return jc(t,this.__actions__);var U=[];t:for(;x--&&N<F;){A+=n;for(var J=-1,W=t[A];++J<I;){var tt=O[J],rt=tt.iteratee,Qt=tt.type,Ut=rt(W);if(Qt==zp)W=Ut;else if(!Ut){if(Qt==Lu)continue t;break t}}U[N++]=W}return U}nt.prototype=wr(Co.prototype),nt.prototype.constructor=nt;function bn(t){var n=-1,s=t==null?0:t.length;for(this.clear();++n<s;){var l=t[n];this.set(l[0],l[1])}}function qg(){this.__data__=si?si(null):{},this.size=0}function Yg(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}function Jg(t){var n=this.__data__;if(si){var s=n[t];return s===c?i:s}return ct.call(n,t)?n[t]:i}function Kg(t){var n=this.__data__;return si?n[t]!==i:ct.call(n,t)}function jg(t,n){var s=this.__data__;return this.size+=this.has(t)?0:1,s[t]=si&&n===i?c:n,this}bn.prototype.clear=qg,bn.prototype.delete=Yg,bn.prototype.get=Jg,bn.prototype.has=Kg,bn.prototype.set=jg;function Me(t){var n=-1,s=t==null?0:t.length;for(this.clear();++n<s;){var l=t[n];this.set(l[0],l[1])}}function Xg(){this.__data__=[],this.size=0}function Qg(t){var n=this.__data__,s=Io(n,t);if(s<0)return!1;var l=n.length-1;return s==l?n.pop():Eo.call(n,s,1),--this.size,!0}function tv(t){var n=this.__data__,s=Io(n,t);return s<0?i:n[s][1]}function ev(t){return Io(this.__data__,t)>-1}function nv(t,n){var s=this.__data__,l=Io(s,t);return l<0?(++this.size,s.push([t,n])):s[l][1]=n,this}Me.prototype.clear=Xg,Me.prototype.delete=Qg,Me.prototype.get=tv,Me.prototype.has=ev,Me.prototype.set=nv;function Ne(t){var n=-1,s=t==null?0:t.length;for(this.clear();++n<s;){var l=t[n];this.set(l[0],l[1])}}function rv(){this.size=0,this.__data__={hash:new bn,map:new(ii||Me),string:new bn}}function iv(t){var n=Wo(this,t).delete(t);return this.size-=n?1:0,n}function ov(t){return Wo(this,t).get(t)}function sv(t){return Wo(this,t).has(t)}function av(t,n){var s=Wo(this,t),l=s.size;return s.set(t,n),this.size+=s.size==l?0:1,this}Ne.prototype.clear=rv,Ne.prototype.delete=iv,Ne.prototype.get=ov,Ne.prototype.has=sv,Ne.prototype.set=av;function En(t){var n=-1,s=t==null?0:t.length;for(this.__data__=new Ne;++n<s;)this.add(t[n])}function lv(t){return this.__data__.set(t,c),this}function uv(t){return this.__data__.has(t)}En.prototype.add=En.prototype.push=lv,En.prototype.has=uv;function ve(t){var n=this.__data__=new Me(t);this.size=n.size}function cv(){this.__data__=new Me,this.size=0}function dv(t){var n=this.__data__,s=n.delete(t);return this.size=n.size,s}function hv(t){return this.__data__.get(t)}function fv(t){return this.__data__.has(t)}function pv(t,n){var s=this.__data__;if(s instanceof Me){var l=s.__data__;if(!ii||l.length<r-1)return l.push([t,n]),this.size=++s.size,this;s=this.__data__=new Ne(l)}return s.set(t,n),this.size=s.size,this}ve.prototype.clear=cv,ve.prototype.delete=dv,ve.prototype.get=hv,ve.prototype.has=fv,ve.prototype.set=pv;function $c(t,n){var s=Z(t),l=!s&&$n(t),d=!s&&!l&&sn(t),f=!s&&!l&&!d&&Tr(t),g=s||l||d||f,y=g?ua(t.length,Tg):[],x=y.length;for(var A in t)(n||ct.call(t,A))&&!(g&&(A=="length"||d&&(A=="offset"||A=="parent")||f&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||Fe(A,x)))&&y.push(A);return y}function Cc(t){var n=t.length;return n?t[Aa(0,n-1)]:i}function mv(t,n){return Bo(Wt(t),Tn(n,0,t.length))}function gv(t){return Bo(Wt(t))}function ga(t,n,s){(s!==i&&!ye(t[n],s)||s===i&&!(n in t))&&Re(t,n,s)}function li(t,n,s){var l=t[n];(!(ct.call(t,n)&&ye(l,s))||s===i&&!(n in t))&&Re(t,n,s)}function Io(t,n){for(var s=t.length;s--;)if(ye(t[s][0],n))return s;return-1}function vv(t,n,s,l){return en(t,function(d,f,g){n(l,d,s(d),g)}),l}function Ic(t,n){return t&&Ae(n,Lt(n),t)}function yv(t,n){return t&&Ae(n,Gt(n),t)}function Re(t,n,s){n=="__proto__"&&To?To(t,n,{configurable:!0,enumerable:!0,value:s,writable:!0}):t[n]=s}function va(t,n){for(var s=-1,l=n.length,d=b(l),f=t==null;++s<l;)d[s]=f?i:ja(t,n[s]);return d}function Tn(t,n,s){return t===t&&(s!==i&&(t=t<=s?t:s),n!==i&&(t=t>=n?t:n)),t}function se(t,n,s,l,d,f){var g,y=n&_,x=n&T,A=n&S;if(s&&(g=d?s(t,l,d,f):s(t)),g!==i)return g;if(!_t(t))return t;var O=Z(t);if(O){if(g=sy(t),!y)return Wt(t,g)}else{var I=kt(t),N=I==ao||I==Mu;if(sn(t))return td(t,y);if(I==Le||I==dr||N&&!d){if(g=x||N?{}:_d(t),!y)return x?Jv(t,yv(g,t)):Yv(t,Ic(g,t))}else{if(!pt[I])return d?t:{};g=ay(t,I,y)}}f||(f=new ve);var F=f.get(t);if(F)return F;f.set(t,g),Yd(t)?t.forEach(function(W){g.add(se(W,n,s,W,t,f))}):Zd(t)&&t.forEach(function(W,tt){g.set(tt,se(W,n,s,tt,t,f))});var U=A?x?Fa:Da:x?Gt:Lt,J=O?i:U(t);return re(J||t,function(W,tt){J&&(tt=W,W=t[tt]),li(g,tt,se(W,n,s,tt,t,f))}),g}function _v(t){var n=Lt(t);return function(s){return Lc(s,t,n)}}function Lc(t,n,s){var l=s.length;if(t==null)return!l;for(t=ht(t);l--;){var d=s[l],f=n[d],g=t[d];if(g===i&&!(d in t)||!f(g))return!1}return!0}function Mc(t,n,s){if(typeof t!="function")throw new ie(a);return mi(function(){t.apply(i,s)},n)}function ui(t,n,s,l){var d=-1,f=fo,g=!0,y=t.length,x=[],A=n.length;if(!y)return x;s&&(n=yt(n,Kt(s))),l?(f=ra,g=!1):n.length>=r&&(f=ni,g=!1,n=new En(n));t:for(;++d<y;){var O=t[d],I=s==null?O:s(O);if(O=l||O!==0?O:0,g&&I===I){for(var N=A;N--;)if(n[N]===I)continue t;x.push(O)}else f(n,I,l)||x.push(O)}return x}var en=od(Se),Nc=od(_a,!0);function wv(t,n){var s=!0;return en(t,function(l,d,f){return s=!!n(l,d,f),s}),s}function Lo(t,n,s){for(var l=-1,d=t.length;++l<d;){var f=t[l],g=n(f);if(g!=null&&(y===i?g===g&&!Xt(g):s(g,y)))var y=g,x=f}return x}function xv(t,n,s,l){var d=t.length;for(s=q(s),s<0&&(s=-s>d?0:d+s),l=l===i||l>d?d:q(l),l<0&&(l+=d),l=s>l?0:Kd(l);s<l;)t[s++]=n;return t}function Rc(t,n){var s=[];return en(t,function(l,d,f){n(l,d,f)&&s.push(l)}),s}function Dt(t,n,s,l,d){var f=-1,g=t.length;for(s||(s=uy),d||(d=[]);++f<g;){var y=t[f];n>0&&s(y)?n>1?Dt(y,n-1,s,l,d):je(d,y):l||(d[d.length]=y)}return d}var ya=sd(),Pc=sd(!0);function Se(t,n){return t&&ya(t,n,Lt)}function _a(t,n){return t&&Pc(t,n,Lt)}function Mo(t,n){return Ke(n,function(s){return ke(t[s])})}function Sn(t,n){n=rn(n,t);for(var s=0,l=n.length;t!=null&&s<l;)t=t[Oe(n[s++])];return s&&s==l?t:i}function Dc(t,n,s){var l=n(t);return Z(t)?l:je(l,s(t))}function Ht(t){return t==null?t===i?Kp:Yp:xn&&xn in ht(t)?ry(t):gy(t)}function wa(t,n){return t>n}function bv(t,n){return t!=null&&ct.call(t,n)}function Ev(t,n){return t!=null&&n in ht(t)}function Tv(t,n,s){return t>=Ft(n,s)&&t<$t(n,s)}function xa(t,n,s){for(var l=s?ra:fo,d=t[0].length,f=t.length,g=f,y=b(f),x=1/0,A=[];g--;){var O=t[g];g&&n&&(O=yt(O,Kt(n))),x=Ft(O.length,x),y[g]=!s&&(n||d>=120&&O.length>=120)?new En(g&&O):i}O=t[0];var I=-1,N=y[0];t:for(;++I<d&&A.length<x;){var F=O[I],U=n?n(F):F;if(F=s||F!==0?F:0,!(N?ni(N,U):l(A,U,s))){for(g=f;--g;){var J=y[g];if(!(J?ni(J,U):l(t[g],U,s)))continue t}N&&N.push(U),A.push(F)}}return A}function Sv(t,n,s,l){return Se(t,function(d,f,g){n(l,s(d),f,g)}),l}function ci(t,n,s){n=rn(n,t),t=Ed(t,n);var l=t==null?t:t[Oe(le(n))];return l==null?i:Jt(l,t,s)}function Fc(t){return Et(t)&&Ht(t)==dr}function Av(t){return Et(t)&&Ht(t)==ei}function Ov(t){return Et(t)&&Ht(t)==Kr}function di(t,n,s,l,d){return t===n?!0:t==null||n==null||!Et(t)&&!Et(n)?t!==t&&n!==n:$v(t,n,s,l,di,d)}function $v(t,n,s,l,d,f){var g=Z(t),y=Z(n),x=g?oo:kt(t),A=y?oo:kt(n);x=x==dr?Le:x,A=A==dr?Le:A;var O=x==Le,I=A==Le,N=x==A;if(N&&sn(t)){if(!sn(n))return!1;g=!0,O=!1}if(N&&!O)return f||(f=new ve),g||Tr(t)?gd(t,n,s,l,d,f):ey(t,n,x,s,l,d,f);if(!(s&M)){var F=O&&ct.call(t,"__wrapped__"),U=I&&ct.call(n,"__wrapped__");if(F||U){var J=F?t.value():t,W=U?n.value():n;return f||(f=new ve),d(J,W,s,l,f)}}return N?(f||(f=new ve),ny(t,n,s,l,d,f)):!1}function Cv(t){return Et(t)&&kt(t)==pe}function ba(t,n,s,l){var d=s.length,f=d,g=!l;if(t==null)return!f;for(t=ht(t);d--;){var y=s[d];if(g&&y[2]?y[1]!==t[y[0]]:!(y[0]in t))return!1}for(;++d<f;){y=s[d];var x=y[0],A=t[x],O=y[1];if(g&&y[2]){if(A===i&&!(x in t))return!1}else{var I=new ve;if(l)var N=l(A,O,x,t,n,I);if(!(N===i?di(O,A,M|$,l,I):N))return!1}}return!0}function kc(t){if(!_t(t)||dy(t))return!1;var n=ke(t)?Cg:_m;return n.test(On(t))}function Iv(t){return Et(t)&&Ht(t)==Xr}function Lv(t){return Et(t)&&kt(t)==me}function Mv(t){return Et(t)&&Jo(t.length)&&!!mt[Ht(t)]}function Hc(t){return typeof t=="function"?t:t==null?Vt:typeof t=="object"?Z(t)?Wc(t[0],t[1]):Uc(t):ah(t)}function Ea(t){if(!pi(t))return Pg(t);var n=[];for(var s in ht(t))ct.call(t,s)&&s!="constructor"&&n.push(s);return n}function Nv(t){if(!_t(t))return my(t);var n=pi(t),s=[];for(var l in t)l=="constructor"&&(n||!ct.call(t,l))||s.push(l);return s}function Ta(t,n){return t<n}function zc(t,n){var s=-1,l=Bt(t)?b(t.length):[];return en(t,function(d,f,g){l[++s]=n(d,f,g)}),l}function Uc(t){var n=Ha(t);return n.length==1&&n[0][2]?xd(n[0][0],n[0][1]):function(s){return s===t||ba(s,t,n)}}function Wc(t,n){return Ua(t)&&wd(n)?xd(Oe(t),n):function(s){var l=ja(s,t);return l===i&&l===n?Xa(s,t):di(n,l,M|$)}}function No(t,n,s,l,d){t!==n&&ya(n,function(f,g){if(d||(d=new ve),_t(f))Rv(t,n,g,s,No,l,d);else{var y=l?l(Ba(t,g),f,g+"",t,n,d):i;y===i&&(y=f),ga(t,g,y)}},Gt)}function Rv(t,n,s,l,d,f,g){var y=Ba(t,s),x=Ba(n,s),A=g.get(x);if(A){ga(t,s,A);return}var O=f?f(y,x,s+"",t,n,g):i,I=O===i;if(I){var N=Z(x),F=!N&&sn(x),U=!N&&!F&&Tr(x);O=x,N||F||U?Z(y)?O=y:Tt(y)?O=Wt(y):F?(I=!1,O=td(x,!0)):U?(I=!1,O=ed(x,!0)):O=[]:gi(x)||$n(x)?(O=y,$n(y)?O=jd(y):(!_t(y)||ke(y))&&(O=_d(x))):I=!1}I&&(g.set(x,O),d(O,x,l,f,g),g.delete(x)),ga(t,s,O)}function Bc(t,n){var s=t.length;if(!!s)return n+=n<0?s:0,Fe(n,s)?t[n]:i}function Gc(t,n,s){n.length?n=yt(n,function(f){return Z(f)?function(g){return Sn(g,f.length===1?f[0]:f)}:f}):n=[Vt];var l=-1;n=yt(n,Kt(z()));var d=zc(t,function(f,g,y){var x=yt(n,function(A){return A(f)});return{criteria:x,index:++l,value:f}});return ag(d,function(f,g){return qv(f,g,s)})}function Pv(t,n){return Vc(t,n,function(s,l){return Xa(t,l)})}function Vc(t,n,s){for(var l=-1,d=n.length,f={};++l<d;){var g=n[l],y=Sn(t,g);s(y,g)&&hi(f,rn(g,t),y)}return f}function Dv(t){return function(n){return Sn(n,t)}}function Sa(t,n,s,l){var d=l?sg:pr,f=-1,g=n.length,y=t;for(t===n&&(n=Wt(n)),s&&(y=yt(t,Kt(s)));++f<g;)for(var x=0,A=n[f],O=s?s(A):A;(x=d(y,O,x,l))>-1;)y!==t&&Eo.call(y,x,1),Eo.call(t,x,1);return t}function Zc(t,n){for(var s=t?n.length:0,l=s-1;s--;){var d=n[s];if(s==l||d!==f){var f=d;Fe(d)?Eo.call(t,d,1):Ca(t,d)}}return t}function Aa(t,n){return t+Ao(Ac()*(n-t+1))}function Fv(t,n,s,l){for(var d=-1,f=$t(So((n-t)/(s||1)),0),g=b(f);f--;)g[l?f:++d]=t,t+=s;return g}function Oa(t,n){var s="";if(!t||n<1||n>Je)return s;do n%2&&(s+=t),n=Ao(n/2),n&&(t+=t);while(n);return s}function j(t,n){return Ga(bd(t,n,Vt),t+"")}function kv(t){return Cc(Sr(t))}function Hv(t,n){var s=Sr(t);return Bo(s,Tn(n,0,s.length))}function hi(t,n,s,l){if(!_t(t))return t;n=rn(n,t);for(var d=-1,f=n.length,g=f-1,y=t;y!=null&&++d<f;){var x=Oe(n[d]),A=s;if(x==="__proto__"||x==="constructor"||x==="prototype")return t;if(d!=g){var O=y[x];A=l?l(O,x,y):i,A===i&&(A=_t(O)?O:Fe(n[d+1])?[]:{})}li(y,x,A),y=y[x]}return t}var qc=Oo?function(t,n){return Oo.set(t,n),t}:Vt,zv=To?function(t,n){return To(t,"toString",{configurable:!0,enumerable:!1,value:tl(n),writable:!0})}:Vt;function Uv(t){return Bo(Sr(t))}function ae(t,n,s){var l=-1,d=t.length;n<0&&(n=-n>d?0:d+n),s=s>d?d:s,s<0&&(s+=d),d=n>s?0:s-n>>>0,n>>>=0;for(var f=b(d);++l<d;)f[l]=t[l+n];return f}function Wv(t,n){var s;return en(t,function(l,d,f){return s=n(l,d,f),!s}),!!s}function Ro(t,n,s){var l=0,d=t==null?l:t.length;if(typeof n=="number"&&n===n&&d<=Gp){for(;l<d;){var f=l+d>>>1,g=t[f];g!==null&&!Xt(g)&&(s?g<=n:g<n)?l=f+1:d=f}return d}return $a(t,n,Vt,s)}function $a(t,n,s,l){var d=0,f=t==null?0:t.length;if(f===0)return 0;n=s(n);for(var g=n!==n,y=n===null,x=Xt(n),A=n===i;d<f;){var O=Ao((d+f)/2),I=s(t[O]),N=I!==i,F=I===null,U=I===I,J=Xt(I);if(g)var W=l||U;else A?W=U&&(l||N):y?W=U&&N&&(l||!F):x?W=U&&N&&!F&&(l||!J):F||J?W=!1:W=l?I<=n:I<n;W?d=O+1:f=O}return Ft(f,Bp)}function Yc(t,n){for(var s=-1,l=t.length,d=0,f=[];++s<l;){var g=t[s],y=n?n(g):g;if(!s||!ye(y,x)){var x=y;f[d++]=g===0?0:g}}return f}function Jc(t){return typeof t=="number"?t:Xt(t)?io:+t}function jt(t){if(typeof t=="string")return t;if(Z(t))return yt(t,jt)+"";if(Xt(t))return Oc?Oc.call(t):"";var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function nn(t,n,s){var l=-1,d=fo,f=t.length,g=!0,y=[],x=y;if(s)g=!1,d=ra;else if(f>=r){var A=n?null:Qv(t);if(A)return mo(A);g=!1,d=ni,x=new En}else x=n?[]:y;t:for(;++l<f;){var O=t[l],I=n?n(O):O;if(O=s||O!==0?O:0,g&&I===I){for(var N=x.length;N--;)if(x[N]===I)continue t;n&&x.push(I),y.push(O)}else d(x,I,s)||(x!==y&&x.push(I),y.push(O))}return y}function Ca(t,n){return n=rn(n,t),t=Ed(t,n),t==null||delete t[Oe(le(n))]}function Kc(t,n,s,l){return hi(t,n,s(Sn(t,n)),l)}function Po(t,n,s,l){for(var d=t.length,f=l?d:-1;(l?f--:++f<d)&&n(t[f],f,t););return s?ae(t,l?0:f,l?f+1:d):ae(t,l?f+1:0,l?d:f)}function jc(t,n){var s=t;return s instanceof nt&&(s=s.value()),ia(n,function(l,d){return d.func.apply(d.thisArg,je([l],d.args))},s)}function Ia(t,n,s){var l=t.length;if(l<2)return l?nn(t[0]):[];for(var d=-1,f=b(l);++d<l;)for(var g=t[d],y=-1;++y<l;)y!=d&&(f[d]=ui(f[d]||g,t[y],n,s));return nn(Dt(f,1),n,s)}function Xc(t,n,s){for(var l=-1,d=t.length,f=n.length,g={};++l<d;){var y=l<f?n[l]:i;s(g,t[l],y)}return g}function La(t){return Tt(t)?t:[]}function Ma(t){return typeof t=="function"?t:Vt}function rn(t,n){return Z(t)?t:Ua(t,n)?[t]:Od(at(t))}var Bv=j;function on(t,n,s){var l=t.length;return s=s===i?l:s,!n&&s>=l?t:ae(t,n,s)}var Qc=Ig||function(t){return It.clearTimeout(t)};function td(t,n){if(n)return t.slice();var s=t.length,l=xc?xc(s):new t.constructor(s);return t.copy(l),l}function Na(t){var n=new t.constructor(t.byteLength);return new xo(n).set(new xo(t)),n}function Gv(t,n){var s=n?Na(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.byteLength)}function Vv(t){var n=new t.constructor(t.source,Fu.exec(t));return n.lastIndex=t.lastIndex,n}function Zv(t){return ai?ht(ai.call(t)):{}}function ed(t,n){var s=n?Na(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.length)}function nd(t,n){if(t!==n){var s=t!==i,l=t===null,d=t===t,f=Xt(t),g=n!==i,y=n===null,x=n===n,A=Xt(n);if(!y&&!A&&!f&&t>n||f&&g&&x&&!y&&!A||l&&g&&x||!s&&x||!d)return 1;if(!l&&!f&&!A&&t<n||A&&s&&d&&!l&&!f||y&&s&&d||!g&&d||!x)return-1}return 0}function qv(t,n,s){for(var l=-1,d=t.criteria,f=n.criteria,g=d.length,y=s.length;++l<g;){var x=nd(d[l],f[l]);if(x){if(l>=y)return x;var A=s[l];return x*(A=="desc"?-1:1)}}return t.index-n.index}function rd(t,n,s,l){for(var d=-1,f=t.length,g=s.length,y=-1,x=n.length,A=$t(f-g,0),O=b(x+A),I=!l;++y<x;)O[y]=n[y];for(;++d<g;)(I||d<f)&&(O[s[d]]=t[d]);for(;A--;)O[y++]=t[d++];return O}function id(t,n,s,l){for(var d=-1,f=t.length,g=-1,y=s.length,x=-1,A=n.length,O=$t(f-y,0),I=b(O+A),N=!l;++d<O;)I[d]=t[d];for(var F=d;++x<A;)I[F+x]=n[x];for(;++g<y;)(N||d<f)&&(I[F+s[g]]=t[d++]);return I}function Wt(t,n){var s=-1,l=t.length;for(n||(n=b(l));++s<l;)n[s]=t[s];return n}function Ae(t,n,s,l){var d=!s;s||(s={});for(var f=-1,g=n.length;++f<g;){var y=n[f],x=l?l(s[y],t[y],y,s,t):i;x===i&&(x=t[y]),d?Re(s,y,x):li(s,y,x)}return s}function Yv(t,n){return Ae(t,za(t),n)}function Jv(t,n){return Ae(t,vd(t),n)}function Do(t,n){return function(s,l){var d=Z(s)?tg:vv,f=n?n():{};return d(s,t,z(l,2),f)}}function xr(t){return j(function(n,s){var l=-1,d=s.length,f=d>1?s[d-1]:i,g=d>2?s[2]:i;for(f=t.length>3&&typeof f=="function"?(d--,f):i,g&&zt(s[0],s[1],g)&&(f=d<3?i:f,d=1),n=ht(n);++l<d;){var y=s[l];y&&t(n,y,l,f)}return n})}function od(t,n){return function(s,l){if(s==null)return s;if(!Bt(s))return t(s,l);for(var d=s.length,f=n?d:-1,g=ht(s);(n?f--:++f<d)&&l(g[f],f,g)!==!1;);return s}}function sd(t){return function(n,s,l){for(var d=-1,f=ht(n),g=l(n),y=g.length;y--;){var x=g[t?y:++d];if(s(f[x],x,f)===!1)break}return n}}function Kv(t,n,s){var l=n&P,d=fi(t);function f(){var g=this&&this!==It&&this instanceof f?d:t;return g.apply(l?s:this,arguments)}return f}function ad(t){return function(n){n=at(n);var s=mr(n)?ge(n):i,l=s?s[0]:n.charAt(0),d=s?on(s,1).join(""):n.slice(1);return l[t]()+d}}function br(t){return function(n){return ia(oh(ih(n).replace(zm,"")),t,"")}}function fi(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var s=wr(t.prototype),l=t.apply(s,n);return _t(l)?l:s}}function jv(t,n,s){var l=fi(t);function d(){for(var f=arguments.length,g=b(f),y=f,x=Er(d);y--;)g[y]=arguments[y];var A=f<3&&g[0]!==x&&g[f-1]!==x?[]:Xe(g,x);if(f-=A.length,f<s)return hd(t,n,Fo,d.placeholder,i,g,A,i,i,s-f);var O=this&&this!==It&&this instanceof d?l:t;return Jt(O,this,g)}return d}function ld(t){return function(n,s,l){var d=ht(n);if(!Bt(n)){var f=z(s,3);n=Lt(n),s=function(y){return f(d[y],y,d)}}var g=t(n,s,l);return g>-1?d[f?n[g]:g]:i}}function ud(t){return De(function(n){var s=n.length,l=s,d=oe.prototype.thru;for(t&&n.reverse();l--;){var f=n[l];if(typeof f!="function")throw new ie(a);if(d&&!g&&Uo(f)=="wrapper")var g=new oe([],!0)}for(l=g?l:s;++l<s;){f=n[l];var y=Uo(f),x=y=="wrapper"?ka(f):i;x&&Wa(x[0])&&x[1]==(fe|vt|Yt|gn)&&!x[4].length&&x[9]==1?g=g[Uo(x[0])].apply(g,x[3]):g=f.length==1&&Wa(f)?g[y]():g.thru(f)}return function(){var A=arguments,O=A[0];if(g&&A.length==1&&Z(O))return g.plant(O).value();for(var I=0,N=s?n[I].apply(this,A):O;++I<s;)N=n[I].call(this,N);return N}})}function Fo(t,n,s,l,d,f,g,y,x,A){var O=n&fe,I=n&P,N=n&gt,F=n&(vt|qt),U=n&vn,J=N?i:fi(t);function W(){for(var tt=arguments.length,rt=b(tt),Qt=tt;Qt--;)rt[Qt]=arguments[Qt];if(F)var Ut=Er(W),te=ug(rt,Ut);if(l&&(rt=rd(rt,l,d,F)),f&&(rt=id(rt,f,g,F)),tt-=te,F&&tt<A){var St=Xe(rt,Ut);return hd(t,n,Fo,W.placeholder,s,rt,St,y,x,A-tt)}var _e=I?s:this,ze=N?_e[t]:t;return tt=rt.length,y?rt=vy(rt,y):U&&tt>1&&rt.reverse(),O&&x<tt&&(rt.length=x),this&&this!==It&&this instanceof W&&(ze=J||fi(ze)),ze.apply(_e,rt)}return W}function cd(t,n){return function(s,l){return Sv(s,t,n(l),{})}}function ko(t,n){return function(s,l){var d;if(s===i&&l===i)return n;if(s!==i&&(d=s),l!==i){if(d===i)return l;typeof s=="string"||typeof l=="string"?(s=jt(s),l=jt(l)):(s=Jc(s),l=Jc(l)),d=t(s,l)}return d}}function Ra(t){return De(function(n){return n=yt(n,Kt(z())),j(function(s){var l=this;return t(n,function(d){return Jt(d,l,s)})})})}function Ho(t,n){n=n===i?" ":jt(n);var s=n.length;if(s<2)return s?Oa(n,t):n;var l=Oa(n,So(t/gr(n)));return mr(n)?on(ge(l),0,t).join(""):l.slice(0,t)}function Xv(t,n,s,l){var d=n&P,f=fi(t);function g(){for(var y=-1,x=arguments.length,A=-1,O=l.length,I=b(O+x),N=this&&this!==It&&this instanceof g?f:t;++A<O;)I[A]=l[A];for(;x--;)I[A++]=arguments[++y];return Jt(N,d?s:this,I)}return g}function dd(t){return function(n,s,l){return l&&typeof l!="number"&&zt(n,s,l)&&(s=l=i),n=He(n),s===i?(s=n,n=0):s=He(s),l=l===i?n<s?1:-1:He(l),Fv(n,s,l,t)}}function zo(t){return function(n,s){return typeof n=="string"&&typeof s=="string"||(n=ue(n),s=ue(s)),t(n,s)}}function hd(t,n,s,l,d,f,g,y,x,A){var O=n&vt,I=O?g:i,N=O?i:g,F=O?f:i,U=O?i:f;n|=O?Yt:Ye,n&=~(O?Ye:Yt),n&ut||(n&=~(P|gt));var J=[t,n,d,F,I,U,N,y,x,A],W=s.apply(i,J);return Wa(t)&&Td(W,J),W.placeholder=l,Sd(W,t,n)}function Pa(t){var n=Ot[t];return function(s,l){if(s=ue(s),l=l==null?0:Ft(q(l),292),l&&Sc(s)){var d=(at(s)+"e").split("e"),f=n(d[0]+"e"+(+d[1]+l));return d=(at(f)+"e").split("e"),+(d[0]+"e"+(+d[1]-l))}return n(s)}}var Qv=yr&&1/mo(new yr([,-0]))[1]==_n?function(t){return new yr(t)}:rl;function fd(t){return function(n){var s=kt(n);return s==pe?da(n):s==me?gg(n):lg(n,t(n))}}function Pe(t,n,s,l,d,f,g,y){var x=n&gt;if(!x&&typeof t!="function")throw new ie(a);var A=l?l.length:0;if(A||(n&=~(Yt|Ye),l=d=i),g=g===i?g:$t(q(g),0),y=y===i?y:q(y),A-=d?d.length:0,n&Ye){var O=l,I=d;l=d=i}var N=x?i:ka(t),F=[t,n,s,l,d,O,I,f,g,y];if(N&&py(F,N),t=F[0],n=F[1],s=F[2],l=F[3],d=F[4],y=F[9]=F[9]===i?x?0:t.length:$t(F[9]-A,0),!y&&n&(vt|qt)&&(n&=~(vt|qt)),!n||n==P)var U=Kv(t,n,s);else n==vt||n==qt?U=jv(t,n,y):(n==Yt||n==(P|Yt))&&!d.length?U=Xv(t,n,s,l):U=Fo.apply(i,F);var J=N?qc:Td;return Sd(J(U,F),t,n)}function pd(t,n,s,l){return t===i||ye(t,vr[s])&&!ct.call(l,s)?n:t}function md(t,n,s,l,d,f){return _t(t)&&_t(n)&&(f.set(n,t),No(t,n,i,md,f),f.delete(n)),t}function ty(t){return gi(t)?i:t}function gd(t,n,s,l,d,f){var g=s&M,y=t.length,x=n.length;if(y!=x&&!(g&&x>y))return!1;var A=f.get(t),O=f.get(n);if(A&&O)return A==n&&O==t;var I=-1,N=!0,F=s&$?new En:i;for(f.set(t,n),f.set(n,t);++I<y;){var U=t[I],J=n[I];if(l)var W=g?l(J,U,I,n,t,f):l(U,J,I,t,n,f);if(W!==i){if(W)continue;N=!1;break}if(F){if(!oa(n,function(tt,rt){if(!ni(F,rt)&&(U===tt||d(U,tt,s,l,f)))return F.push(rt)})){N=!1;break}}else if(!(U===J||d(U,J,s,l,f))){N=!1;break}}return f.delete(t),f.delete(n),N}function ey(t,n,s,l,d,f,g){switch(s){case hr:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case ei:return!(t.byteLength!=n.byteLength||!f(new xo(t),new xo(n)));case Jr:case Kr:case jr:return ye(+t,+n);case so:return t.name==n.name&&t.message==n.message;case Xr:case Qr:return t==n+"";case pe:var y=da;case me:var x=l&M;if(y||(y=mo),t.size!=n.size&&!x)return!1;var A=g.get(t);if(A)return A==n;l|=$,g.set(t,n);var O=gd(y(t),y(n),l,d,f,g);return g.delete(t),O;case lo:if(ai)return ai.call(t)==ai.call(n)}return!1}function ny(t,n,s,l,d,f){var g=s&M,y=Da(t),x=y.length,A=Da(n),O=A.length;if(x!=O&&!g)return!1;for(var I=x;I--;){var N=y[I];if(!(g?N in n:ct.call(n,N)))return!1}var F=f.get(t),U=f.get(n);if(F&&U)return F==n&&U==t;var J=!0;f.set(t,n),f.set(n,t);for(var W=g;++I<x;){N=y[I];var tt=t[N],rt=n[N];if(l)var Qt=g?l(rt,tt,N,n,t,f):l(tt,rt,N,t,n,f);if(!(Qt===i?tt===rt||d(tt,rt,s,l,f):Qt)){J=!1;break}W||(W=N=="constructor")}if(J&&!W){var Ut=t.constructor,te=n.constructor;Ut!=te&&"constructor"in t&&"constructor"in n&&!(typeof Ut=="function"&&Ut instanceof Ut&&typeof te=="function"&&te instanceof te)&&(J=!1)}return f.delete(t),f.delete(n),J}function De(t){return Ga(bd(t,i,Ld),t+"")}function Da(t){return Dc(t,Lt,za)}function Fa(t){return Dc(t,Gt,vd)}var ka=Oo?function(t){return Oo.get(t)}:rl;function Uo(t){for(var n=t.name+"",s=_r[n],l=ct.call(_r,n)?s.length:0;l--;){var d=s[l],f=d.func;if(f==null||f==t)return d.name}return n}function Er(t){var n=ct.call(h,"placeholder")?h:t;return n.placeholder}function z(){var t=h.iteratee||el;return t=t===el?Hc:t,arguments.length?t(arguments[0],arguments[1]):t}function Wo(t,n){var s=t.__data__;return cy(n)?s[typeof n=="string"?"string":"hash"]:s.map}function Ha(t){for(var n=Lt(t),s=n.length;s--;){var l=n[s],d=t[l];n[s]=[l,d,wd(d)]}return n}function An(t,n){var s=fg(t,n);return kc(s)?s:i}function ry(t){var n=ct.call(t,xn),s=t[xn];try{t[xn]=i;var l=!0}catch(f){}var d=_o.call(t);return l&&(n?t[xn]=s:delete t[xn]),d}var za=fa?function(t){return t==null?[]:(t=ht(t),Ke(fa(t),function(n){return Ec.call(t,n)}))}:il,vd=fa?function(t){for(var n=[];t;)je(n,za(t)),t=bo(t);return n}:il,kt=Ht;(pa&&kt(new pa(new ArrayBuffer(1)))!=hr||ii&&kt(new ii)!=pe||ma&&kt(ma.resolve())!=Nu||yr&&kt(new yr)!=me||oi&&kt(new oi)!=ti)&&(kt=function(t){var n=Ht(t),s=n==Le?t.constructor:i,l=s?On(s):"";if(l)switch(l){case Hg:return hr;case zg:return pe;case Ug:return Nu;case Wg:return me;case Bg:return ti}return n});function iy(t,n,s){for(var l=-1,d=s.length;++l<d;){var f=s[l],g=f.size;switch(f.type){case"drop":t+=g;break;case"dropRight":n-=g;break;case"take":n=Ft(n,t+g);break;case"takeRight":t=$t(t,n-g);break}}return{start:t,end:n}}function oy(t){var n=t.match(dm);return n?n[1].split(hm):[]}function yd(t,n,s){n=rn(n,t);for(var l=-1,d=n.length,f=!1;++l<d;){var g=Oe(n[l]);if(!(f=t!=null&&s(t,g)))break;t=t[g]}return f||++l!=d?f:(d=t==null?0:t.length,!!d&&Jo(d)&&Fe(g,d)&&(Z(t)||$n(t)))}function sy(t){var n=t.length,s=new t.constructor(n);return n&&typeof t[0]=="string"&&ct.call(t,"index")&&(s.index=t.index,s.input=t.input),s}function _d(t){return typeof t.constructor=="function"&&!pi(t)?wr(bo(t)):{}}function ay(t,n,s){var l=t.constructor;switch(n){case ei:return Na(t);case Jr:case Kr:return new l(+t);case hr:return Gv(t,s);case Hs:case zs:case Us:case Ws:case Bs:case Gs:case Vs:case Zs:case qs:return ed(t,s);case pe:return new l;case jr:case Qr:return new l(t);case Xr:return Vv(t);case me:return new l;case lo:return Zv(t)}}function ly(t,n){var s=n.length;if(!s)return t;var l=s-1;return n[l]=(s>1?"& ":"")+n[l],n=n.join(s>2?", ":" "),t.replace(cm,`{
/* [wrapped with `+n+`] */
`)}function uy(t){return Z(t)||$n(t)||!!(Tc&&t&&t[Tc])}function Fe(t,n){var s=typeof t;return n=n==null?Je:n,!!n&&(s=="number"||s!="symbol"&&xm.test(t))&&t>-1&&t%1==0&&t<n}function zt(t,n,s){if(!_t(s))return!1;var l=typeof n;return(l=="number"?Bt(s)&&Fe(n,s.length):l=="string"&&n in s)?ye(s[n],t):!1}function Ua(t,n){if(Z(t))return!1;var s=typeof t;return s=="number"||s=="symbol"||s=="boolean"||t==null||Xt(t)?!0:sm.test(t)||!om.test(t)||n!=null&&t in ht(n)}function cy(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}function Wa(t){var n=Uo(t),s=h[n];if(typeof s!="function"||!(n in nt.prototype))return!1;if(t===s)return!0;var l=ka(s);return!!l&&t===l[0]}function dy(t){return!!wc&&wc in t}var hy=vo?ke:ol;function pi(t){var n=t&&t.constructor,s=typeof n=="function"&&n.prototype||vr;return t===s}function wd(t){return t===t&&!_t(t)}function xd(t,n){return function(s){return s==null?!1:s[t]===n&&(n!==i||t in ht(s))}}function fy(t){var n=qo(t,function(l){return s.size===p&&s.clear(),l}),s=n.cache;return n}function py(t,n){var s=t[1],l=n[1],d=s|l,f=d<(P|gt|fe),g=l==fe&&s==vt||l==fe&&s==gn&&t[7].length<=n[8]||l==(fe|gn)&&n[7].length<=n[8]&&s==vt;if(!(f||g))return t;l&P&&(t[2]=n[2],d|=s&P?0:ut);var y=n[3];if(y){var x=t[3];t[3]=x?rd(x,y,n[4]):y,t[4]=x?Xe(t[3],m):n[4]}return y=n[5],y&&(x=t[5],t[5]=x?id(x,y,n[6]):y,t[6]=x?Xe(t[5],m):n[6]),y=n[7],y&&(t[7]=y),l&fe&&(t[8]=t[8]==null?n[8]:Ft(t[8],n[8])),t[9]==null&&(t[9]=n[9]),t[0]=n[0],t[1]=d,t}function my(t){var n=[];if(t!=null)for(var s in ht(t))n.push(s);return n}function gy(t){return _o.call(t)}function bd(t,n,s){return n=$t(n===i?t.length-1:n,0),function(){for(var l=arguments,d=-1,f=$t(l.length-n,0),g=b(f);++d<f;)g[d]=l[n+d];d=-1;for(var y=b(n+1);++d<n;)y[d]=l[d];return y[n]=s(g),Jt(t,this,y)}}function Ed(t,n){return n.length<2?t:Sn(t,ae(n,0,-1))}function vy(t,n){for(var s=t.length,l=Ft(n.length,s),d=Wt(t);l--;){var f=n[l];t[l]=Fe(f,s)?d[f]:i}return t}function Ba(t,n){if(!(n==="constructor"&&typeof t[n]=="function")&&n!="__proto__")return t[n]}var Td=Ad(qc),mi=Mg||function(t,n){return It.setTimeout(t,n)},Ga=Ad(zv);function Sd(t,n,s){var l=n+"";return Ga(t,ly(l,yy(oy(l),s)))}function Ad(t){var n=0,s=0;return function(){var l=Dg(),d=Hp-(l-s);if(s=l,d>0){if(++n>=kp)return arguments[0]}else n=0;return t.apply(i,arguments)}}function Bo(t,n){var s=-1,l=t.length,d=l-1;for(n=n===i?l:n;++s<n;){var f=Aa(s,d),g=t[f];t[f]=t[s],t[s]=g}return t.length=n,t}var Od=fy(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(am,function(s,l,d,f){n.push(d?f.replace(mm,"$1"):l||s)}),n});function Oe(t){if(typeof t=="string"||Xt(t))return t;var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function On(t){if(t!=null){try{return yo.call(t)}catch(n){}try{return t+""}catch(n){}}return""}function yy(t,n){return re(Vp,function(s){var l="_."+s[0];n&s[1]&&!fo(t,l)&&t.push(l)}),t.sort()}function $d(t){if(t instanceof nt)return t.clone();var n=new oe(t.__wrapped__,t.__chain__);return n.__actions__=Wt(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}function _y(t,n,s){(s?zt(t,n,s):n===i)?n=1:n=$t(q(n),0);var l=t==null?0:t.length;if(!l||n<1)return[];for(var d=0,f=0,g=b(So(l/n));d<l;)g[f++]=ae(t,d,d+=n);return g}function wy(t){for(var n=-1,s=t==null?0:t.length,l=0,d=[];++n<s;){var f=t[n];f&&(d[l++]=f)}return d}function xy(){var t=arguments.length;if(!t)return[];for(var n=b(t-1),s=arguments[0],l=t;l--;)n[l-1]=arguments[l];return je(Z(s)?Wt(s):[s],Dt(n,1))}var by=j(function(t,n){return Tt(t)?ui(t,Dt(n,1,Tt,!0)):[]}),Ey=j(function(t,n){var s=le(n);return Tt(s)&&(s=i),Tt(t)?ui(t,Dt(n,1,Tt,!0),z(s,2)):[]}),Ty=j(function(t,n){var s=le(n);return Tt(s)&&(s=i),Tt(t)?ui(t,Dt(n,1,Tt,!0),i,s):[]});function Sy(t,n,s){var l=t==null?0:t.length;return l?(n=s||n===i?1:q(n),ae(t,n<0?0:n,l)):[]}function Ay(t,n,s){var l=t==null?0:t.length;return l?(n=s||n===i?1:q(n),n=l-n,ae(t,0,n<0?0:n)):[]}function Oy(t,n){return t&&t.length?Po(t,z(n,3),!0,!0):[]}function $y(t,n){return t&&t.length?Po(t,z(n,3),!0):[]}function Cy(t,n,s,l){var d=t==null?0:t.length;return d?(s&&typeof s!="number"&&zt(t,n,s)&&(s=0,l=d),xv(t,n,s,l)):[]}function Cd(t,n,s){var l=t==null?0:t.length;if(!l)return-1;var d=s==null?0:q(s);return d<0&&(d=$t(l+d,0)),po(t,z(n,3),d)}function Id(t,n,s){var l=t==null?0:t.length;if(!l)return-1;var d=l-1;return s!==i&&(d=q(s),d=s<0?$t(l+d,0):Ft(d,l-1)),po(t,z(n,3),d,!0)}function Ld(t){var n=t==null?0:t.length;return n?Dt(t,1):[]}function Iy(t){var n=t==null?0:t.length;return n?Dt(t,_n):[]}function Ly(t,n){var s=t==null?0:t.length;return s?(n=n===i?1:q(n),Dt(t,n)):[]}function My(t){for(var n=-1,s=t==null?0:t.length,l={};++n<s;){var d=t[n];l[d[0]]=d[1]}return l}function Md(t){return t&&t.length?t[0]:i}function Ny(t,n,s){var l=t==null?0:t.length;if(!l)return-1;var d=s==null?0:q(s);return d<0&&(d=$t(l+d,0)),pr(t,n,d)}function Ry(t){var n=t==null?0:t.length;return n?ae(t,0,-1):[]}var Py=j(function(t){var n=yt(t,La);return n.length&&n[0]===t[0]?xa(n):[]}),Dy=j(function(t){var n=le(t),s=yt(t,La);return n===le(s)?n=i:s.pop(),s.length&&s[0]===t[0]?xa(s,z(n,2)):[]}),Fy=j(function(t){var n=le(t),s=yt(t,La);return n=typeof n=="function"?n:i,n&&s.pop(),s.length&&s[0]===t[0]?xa(s,i,n):[]});function ky(t,n){return t==null?"":Rg.call(t,n)}function le(t){var n=t==null?0:t.length;return n?t[n-1]:i}function Hy(t,n,s){var l=t==null?0:t.length;if(!l)return-1;var d=l;return s!==i&&(d=q(s),d=d<0?$t(l+d,0):Ft(d,l-1)),n===n?yg(t,n,d):po(t,hc,d,!0)}function zy(t,n){return t&&t.length?Bc(t,q(n)):i}var Uy=j(Nd);function Nd(t,n){return t&&t.length&&n&&n.length?Sa(t,n):t}function Wy(t,n,s){return t&&t.length&&n&&n.length?Sa(t,n,z(s,2)):t}function By(t,n,s){return t&&t.length&&n&&n.length?Sa(t,n,i,s):t}var Gy=De(function(t,n){var s=t==null?0:t.length,l=va(t,n);return Zc(t,yt(n,function(d){return Fe(d,s)?+d:d}).sort(nd)),l});function Vy(t,n){var s=[];if(!(t&&t.length))return s;var l=-1,d=[],f=t.length;for(n=z(n,3);++l<f;){var g=t[l];n(g,l,t)&&(s.push(g),d.push(l))}return Zc(t,d),s}function Va(t){return t==null?t:kg.call(t)}function Zy(t,n,s){var l=t==null?0:t.length;return l?(s&&typeof s!="number"&&zt(t,n,s)?(n=0,s=l):(n=n==null?0:q(n),s=s===i?l:q(s)),ae(t,n,s)):[]}function qy(t,n){return Ro(t,n)}function Yy(t,n,s){return $a(t,n,z(s,2))}function Jy(t,n){var s=t==null?0:t.length;if(s){var l=Ro(t,n);if(l<s&&ye(t[l],n))return l}return-1}function Ky(t,n){return Ro(t,n,!0)}function jy(t,n,s){return $a(t,n,z(s,2),!0)}function Xy(t,n){var s=t==null?0:t.length;if(s){var l=Ro(t,n,!0)-1;if(ye(t[l],n))return l}return-1}function Qy(t){return t&&t.length?Yc(t):[]}function t0(t,n){return t&&t.length?Yc(t,z(n,2)):[]}function e0(t){var n=t==null?0:t.length;return n?ae(t,1,n):[]}function n0(t,n,s){return t&&t.length?(n=s||n===i?1:q(n),ae(t,0,n<0?0:n)):[]}function r0(t,n,s){var l=t==null?0:t.length;return l?(n=s||n===i?1:q(n),n=l-n,ae(t,n<0?0:n,l)):[]}function i0(t,n){return t&&t.length?Po(t,z(n,3),!1,!0):[]}function o0(t,n){return t&&t.length?Po(t,z(n,3)):[]}var s0=j(function(t){return nn(Dt(t,1,Tt,!0))}),a0=j(function(t){var n=le(t);return Tt(n)&&(n=i),nn(Dt(t,1,Tt,!0),z(n,2))}),l0=j(function(t){var n=le(t);return n=typeof n=="function"?n:i,nn(Dt(t,1,Tt,!0),i,n)});function u0(t){return t&&t.length?nn(t):[]}function c0(t,n){return t&&t.length?nn(t,z(n,2)):[]}function d0(t,n){return n=typeof n=="function"?n:i,t&&t.length?nn(t,i,n):[]}function Za(t){if(!(t&&t.length))return[];var n=0;return t=Ke(t,function(s){if(Tt(s))return n=$t(s.length,n),!0}),ua(n,function(s){return yt(t,sa(s))})}function Rd(t,n){if(!(t&&t.length))return[];var s=Za(t);return n==null?s:yt(s,function(l){return Jt(n,i,l)})}var h0=j(function(t,n){return Tt(t)?ui(t,n):[]}),f0=j(function(t){return Ia(Ke(t,Tt))}),p0=j(function(t){var n=le(t);return Tt(n)&&(n=i),Ia(Ke(t,Tt),z(n,2))}),m0=j(function(t){var n=le(t);return n=typeof n=="function"?n:i,Ia(Ke(t,Tt),i,n)}),g0=j(Za);function v0(t,n){return Xc(t||[],n||[],li)}function y0(t,n){return Xc(t||[],n||[],hi)}var _0=j(function(t){var n=t.length,s=n>1?t[n-1]:i;return s=typeof s=="function"?(t.pop(),s):i,Rd(t,s)});function Pd(t){var n=h(t);return n.__chain__=!0,n}function w0(t,n){return n(t),t}function Go(t,n){return n(t)}var x0=De(function(t){var n=t.length,s=n?t[0]:0,l=this.__wrapped__,d=function(f){return va(f,t)};return n>1||this.__actions__.length||!(l instanceof nt)||!Fe(s)?this.thru(d):(l=l.slice(s,+s+(n?1:0)),l.__actions__.push({func:Go,args:[d],thisArg:i}),new oe(l,this.__chain__).thru(function(f){return n&&!f.length&&f.push(i),f}))});function b0(){return Pd(this)}function E0(){return new oe(this.value(),this.__chain__)}function T0(){this.__values__===i&&(this.__values__=Jd(this.value()));var t=this.__index__>=this.__values__.length,n=t?i:this.__values__[this.__index__++];return{done:t,value:n}}function S0(){return this}function A0(t){for(var n,s=this;s instanceof Co;){var l=$d(s);l.__index__=0,l.__values__=i,n?d.__wrapped__=l:n=l;var d=l;s=s.__wrapped__}return d.__wrapped__=t,n}function O0(){var t=this.__wrapped__;if(t instanceof nt){var n=t;return this.__actions__.length&&(n=new nt(this)),n=n.reverse(),n.__actions__.push({func:Go,args:[Va],thisArg:i}),new oe(n,this.__chain__)}return this.thru(Va)}function $0(){return jc(this.__wrapped__,this.__actions__)}var C0=Do(function(t,n,s){ct.call(t,s)?++t[s]:Re(t,s,1)});function I0(t,n,s){var l=Z(t)?cc:wv;return s&&zt(t,n,s)&&(n=i),l(t,z(n,3))}function L0(t,n){var s=Z(t)?Ke:Rc;return s(t,z(n,3))}var M0=ld(Cd),N0=ld(Id);function R0(t,n){return Dt(Vo(t,n),1)}function P0(t,n){return Dt(Vo(t,n),_n)}function D0(t,n,s){return s=s===i?1:q(s),Dt(Vo(t,n),s)}function Dd(t,n){var s=Z(t)?re:en;return s(t,z(n,3))}function Fd(t,n){var s=Z(t)?eg:Nc;return s(t,z(n,3))}var F0=Do(function(t,n,s){ct.call(t,s)?t[s].push(n):Re(t,s,[n])});function k0(t,n,s,l){t=Bt(t)?t:Sr(t),s=s&&!l?q(s):0;var d=t.length;return s<0&&(s=$t(d+s,0)),Ko(t)?s<=d&&t.indexOf(n,s)>-1:!!d&&pr(t,n,s)>-1}var H0=j(function(t,n,s){var l=-1,d=typeof n=="function",f=Bt(t)?b(t.length):[];return en(t,function(g){f[++l]=d?Jt(n,g,s):ci(g,n,s)}),f}),z0=Do(function(t,n,s){Re(t,s,n)});function Vo(t,n){var s=Z(t)?yt:zc;return s(t,z(n,3))}function U0(t,n,s,l){return t==null?[]:(Z(n)||(n=n==null?[]:[n]),s=l?i:s,Z(s)||(s=s==null?[]:[s]),Gc(t,n,s))}var W0=Do(function(t,n,s){t[s?0:1].push(n)},function(){return[[],[]]});function B0(t,n,s){var l=Z(t)?ia:pc,d=arguments.length<3;return l(t,z(n,4),s,d,en)}function G0(t,n,s){var l=Z(t)?ng:pc,d=arguments.length<3;return l(t,z(n,4),s,d,Nc)}function V0(t,n){var s=Z(t)?Ke:Rc;return s(t,Yo(z(n,3)))}function Z0(t){var n=Z(t)?Cc:kv;return n(t)}function q0(t,n,s){(s?zt(t,n,s):n===i)?n=1:n=q(n);var l=Z(t)?mv:Hv;return l(t,n)}function Y0(t){var n=Z(t)?gv:Uv;return n(t)}function J0(t){if(t==null)return 0;if(Bt(t))return Ko(t)?gr(t):t.length;var n=kt(t);return n==pe||n==me?t.size:Ea(t).length}function K0(t,n,s){var l=Z(t)?oa:Wv;return s&&zt(t,n,s)&&(n=i),l(t,z(n,3))}var j0=j(function(t,n){if(t==null)return[];var s=n.length;return s>1&&zt(t,n[0],n[1])?n=[]:s>2&&zt(n[0],n[1],n[2])&&(n=[n[0]]),Gc(t,Dt(n,1),[])}),Zo=Lg||function(){return It.Date.now()};function X0(t,n){if(typeof n!="function")throw new ie(a);return t=q(t),function(){if(--t<1)return n.apply(this,arguments)}}function kd(t,n,s){return n=s?i:n,n=t&&n==null?t.length:n,Pe(t,fe,i,i,i,i,n)}function Hd(t,n){var s;if(typeof n!="function")throw new ie(a);return t=q(t),function(){return--t>0&&(s=n.apply(this,arguments)),t<=1&&(n=i),s}}var qa=j(function(t,n,s){var l=P;if(s.length){var d=Xe(s,Er(qa));l|=Yt}return Pe(t,l,n,s,d)}),zd=j(function(t,n,s){var l=P|gt;if(s.length){var d=Xe(s,Er(zd));l|=Yt}return Pe(n,l,t,s,d)});function Ud(t,n,s){n=s?i:n;var l=Pe(t,vt,i,i,i,i,i,n);return l.placeholder=Ud.placeholder,l}function Wd(t,n,s){n=s?i:n;var l=Pe(t,qt,i,i,i,i,i,n);return l.placeholder=Wd.placeholder,l}function Bd(t,n,s){var l,d,f,g,y,x,A=0,O=!1,I=!1,N=!0;if(typeof t!="function")throw new ie(a);n=ue(n)||0,_t(s)&&(O=!!s.leading,I="maxWait"in s,f=I?$t(ue(s.maxWait)||0,n):f,N="trailing"in s?!!s.trailing:N);function F(St){var _e=l,ze=d;return l=d=i,A=St,g=t.apply(ze,_e),g}function U(St){return A=St,y=mi(tt,n),O?F(St):g}function J(St){var _e=St-x,ze=St-A,lh=n-_e;return I?Ft(lh,f-ze):lh}function W(St){var _e=St-x,ze=St-A;return x===i||_e>=n||_e<0||I&&ze>=f}function tt(){var St=Zo();if(W(St))return rt(St);y=mi(tt,J(St))}function rt(St){return y=i,N&&l?F(St):(l=d=i,g)}function Qt(){y!==i&&Qc(y),A=0,l=x=d=y=i}function Ut(){return y===i?g:rt(Zo())}function te(){var St=Zo(),_e=W(St);if(l=arguments,d=this,x=St,_e){if(y===i)return U(x);if(I)return Qc(y),y=mi(tt,n),F(x)}return y===i&&(y=mi(tt,n)),g}return te.cancel=Qt,te.flush=Ut,te}var Q0=j(function(t,n){return Mc(t,1,n)}),t_=j(function(t,n,s){return Mc(t,ue(n)||0,s)});function e_(t){return Pe(t,vn)}function qo(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new ie(a);var s=function(){var l=arguments,d=n?n.apply(this,l):l[0],f=s.cache;if(f.has(d))return f.get(d);var g=t.apply(this,l);return s.cache=f.set(d,g)||f,g};return s.cache=new(qo.Cache||Ne),s}qo.Cache=Ne;function Yo(t){if(typeof t!="function")throw new ie(a);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function n_(t){return Hd(2,t)}var r_=Bv(function(t,n){n=n.length==1&&Z(n[0])?yt(n[0],Kt(z())):yt(Dt(n,1),Kt(z()));var s=n.length;return j(function(l){for(var d=-1,f=Ft(l.length,s);++d<f;)l[d]=n[d].call(this,l[d]);return Jt(t,this,l)})}),Ya=j(function(t,n){var s=Xe(n,Er(Ya));return Pe(t,Yt,i,n,s)}),Gd=j(function(t,n){var s=Xe(n,Er(Gd));return Pe(t,Ye,i,n,s)}),i_=De(function(t,n){return Pe(t,gn,i,i,i,n)});function o_(t,n){if(typeof t!="function")throw new ie(a);return n=n===i?n:q(n),j(t,n)}function s_(t,n){if(typeof t!="function")throw new ie(a);return n=n==null?0:$t(q(n),0),j(function(s){var l=s[n],d=on(s,0,n);return l&&je(d,l),Jt(t,this,d)})}function a_(t,n,s){var l=!0,d=!0;if(typeof t!="function")throw new ie(a);return _t(s)&&(l="leading"in s?!!s.leading:l,d="trailing"in s?!!s.trailing:d),Bd(t,n,{leading:l,maxWait:n,trailing:d})}function l_(t){return kd(t,1)}function u_(t,n){return Ya(Ma(n),t)}function c_(){if(!arguments.length)return[];var t=arguments[0];return Z(t)?t:[t]}function d_(t){return se(t,S)}function h_(t,n){return n=typeof n=="function"?n:i,se(t,S,n)}function f_(t){return se(t,_|S)}function p_(t,n){return n=typeof n=="function"?n:i,se(t,_|S,n)}function m_(t,n){return n==null||Lc(t,n,Lt(n))}function ye(t,n){return t===n||t!==t&&n!==n}var g_=zo(wa),v_=zo(function(t,n){return t>=n}),$n=Fc(function(){return arguments}())?Fc:function(t){return Et(t)&&ct.call(t,"callee")&&!Ec.call(t,"callee")},Z=b.isArray,y_=ic?Kt(ic):Av;function Bt(t){return t!=null&&Jo(t.length)&&!ke(t)}function Tt(t){return Et(t)&&Bt(t)}function __(t){return t===!0||t===!1||Et(t)&&Ht(t)==Jr}var sn=Ng||ol,w_=oc?Kt(oc):Ov;function x_(t){return Et(t)&&t.nodeType===1&&!gi(t)}function b_(t){if(t==null)return!0;if(Bt(t)&&(Z(t)||typeof t=="string"||typeof t.splice=="function"||sn(t)||Tr(t)||$n(t)))return!t.length;var n=kt(t);if(n==pe||n==me)return!t.size;if(pi(t))return!Ea(t).length;for(var s in t)if(ct.call(t,s))return!1;return!0}function E_(t,n){return di(t,n)}function T_(t,n,s){s=typeof s=="function"?s:i;var l=s?s(t,n):i;return l===i?di(t,n,i,s):!!l}function Ja(t){if(!Et(t))return!1;var n=Ht(t);return n==so||n==qp||typeof t.message=="string"&&typeof t.name=="string"&&!gi(t)}function S_(t){return typeof t=="number"&&Sc(t)}function ke(t){if(!_t(t))return!1;var n=Ht(t);return n==ao||n==Mu||n==Zp||n==Jp}function Vd(t){return typeof t=="number"&&t==q(t)}function Jo(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Je}function _t(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}function Et(t){return t!=null&&typeof t=="object"}var Zd=sc?Kt(sc):Cv;function A_(t,n){return t===n||ba(t,n,Ha(n))}function O_(t,n,s){return s=typeof s=="function"?s:i,ba(t,n,Ha(n),s)}function $_(t){return qd(t)&&t!=+t}function C_(t){if(hy(t))throw new V(o);return kc(t)}function I_(t){return t===null}function L_(t){return t==null}function qd(t){return typeof t=="number"||Et(t)&&Ht(t)==jr}function gi(t){if(!Et(t)||Ht(t)!=Le)return!1;var n=bo(t);if(n===null)return!0;var s=ct.call(n,"constructor")&&n.constructor;return typeof s=="function"&&s instanceof s&&yo.call(s)==Og}var Ka=ac?Kt(ac):Iv;function M_(t){return Vd(t)&&t>=-Je&&t<=Je}var Yd=lc?Kt(lc):Lv;function Ko(t){return typeof t=="string"||!Z(t)&&Et(t)&&Ht(t)==Qr}function Xt(t){return typeof t=="symbol"||Et(t)&&Ht(t)==lo}var Tr=uc?Kt(uc):Mv;function N_(t){return t===i}function R_(t){return Et(t)&&kt(t)==ti}function P_(t){return Et(t)&&Ht(t)==jp}var D_=zo(Ta),F_=zo(function(t,n){return t<=n});function Jd(t){if(!t)return[];if(Bt(t))return Ko(t)?ge(t):Wt(t);if(ri&&t[ri])return mg(t[ri]());var n=kt(t),s=n==pe?da:n==me?mo:Sr;return s(t)}function He(t){if(!t)return t===0?t:0;if(t=ue(t),t===_n||t===-_n){var n=t<0?-1:1;return n*Wp}return t===t?t:0}function q(t){var n=He(t),s=n%1;return n===n?s?n-s:n:0}function Kd(t){return t?Tn(q(t),0,Te):0}function ue(t){if(typeof t=="number")return t;if(Xt(t))return io;if(_t(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=_t(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=mc(t);var s=ym.test(t);return s||wm.test(t)?Xm(t.slice(2),s?2:8):vm.test(t)?io:+t}function jd(t){return Ae(t,Gt(t))}function k_(t){return t?Tn(q(t),-Je,Je):t===0?t:0}function at(t){return t==null?"":jt(t)}var H_=xr(function(t,n){if(pi(n)||Bt(n)){Ae(n,Lt(n),t);return}for(var s in n)ct.call(n,s)&&li(t,s,n[s])}),Xd=xr(function(t,n){Ae(n,Gt(n),t)}),jo=xr(function(t,n,s,l){Ae(n,Gt(n),t,l)}),z_=xr(function(t,n,s,l){Ae(n,Lt(n),t,l)}),U_=De(va);function W_(t,n){var s=wr(t);return n==null?s:Ic(s,n)}var B_=j(function(t,n){t=ht(t);var s=-1,l=n.length,d=l>2?n[2]:i;for(d&&zt(n[0],n[1],d)&&(l=1);++s<l;)for(var f=n[s],g=Gt(f),y=-1,x=g.length;++y<x;){var A=g[y],O=t[A];(O===i||ye(O,vr[A])&&!ct.call(t,A))&&(t[A]=f[A])}return t}),G_=j(function(t){return t.push(i,md),Jt(Qd,i,t)});function V_(t,n){return dc(t,z(n,3),Se)}function Z_(t,n){return dc(t,z(n,3),_a)}function q_(t,n){return t==null?t:ya(t,z(n,3),Gt)}function Y_(t,n){return t==null?t:Pc(t,z(n,3),Gt)}function J_(t,n){return t&&Se(t,z(n,3))}function K_(t,n){return t&&_a(t,z(n,3))}function j_(t){return t==null?[]:Mo(t,Lt(t))}function X_(t){return t==null?[]:Mo(t,Gt(t))}function ja(t,n,s){var l=t==null?i:Sn(t,n);return l===i?s:l}function Q_(t,n){return t!=null&&yd(t,n,bv)}function Xa(t,n){return t!=null&&yd(t,n,Ev)}var tw=cd(function(t,n,s){n!=null&&typeof n.toString!="function"&&(n=_o.call(n)),t[n]=s},tl(Vt)),ew=cd(function(t,n,s){n!=null&&typeof n.toString!="function"&&(n=_o.call(n)),ct.call(t,n)?t[n].push(s):t[n]=[s]},z),nw=j(ci);function Lt(t){return Bt(t)?$c(t):Ea(t)}function Gt(t){return Bt(t)?$c(t,!0):Nv(t)}function rw(t,n){var s={};return n=z(n,3),Se(t,function(l,d,f){Re(s,n(l,d,f),l)}),s}function iw(t,n){var s={};return n=z(n,3),Se(t,function(l,d,f){Re(s,d,n(l,d,f))}),s}var ow=xr(function(t,n,s){No(t,n,s)}),Qd=xr(function(t,n,s,l){No(t,n,s,l)}),sw=De(function(t,n){var s={};if(t==null)return s;var l=!1;n=yt(n,function(f){return f=rn(f,t),l||(l=f.length>1),f}),Ae(t,Fa(t),s),l&&(s=se(s,_|T|S,ty));for(var d=n.length;d--;)Ca(s,n[d]);return s});function aw(t,n){return th(t,Yo(z(n)))}var lw=De(function(t,n){return t==null?{}:Pv(t,n)});function th(t,n){if(t==null)return{};var s=yt(Fa(t),function(l){return[l]});return n=z(n),Vc(t,s,function(l,d){return n(l,d[0])})}function uw(t,n,s){n=rn(n,t);var l=-1,d=n.length;for(d||(d=1,t=i);++l<d;){var f=t==null?i:t[Oe(n[l])];f===i&&(l=d,f=s),t=ke(f)?f.call(t):f}return t}function cw(t,n,s){return t==null?t:hi(t,n,s)}function dw(t,n,s,l){return l=typeof l=="function"?l:i,t==null?t:hi(t,n,s,l)}var eh=fd(Lt),nh=fd(Gt);function hw(t,n,s){var l=Z(t),d=l||sn(t)||Tr(t);if(n=z(n,4),s==null){var f=t&&t.constructor;d?s=l?new f:[]:_t(t)?s=ke(f)?wr(bo(t)):{}:s={}}return(d?re:Se)(t,function(g,y,x){return n(s,g,y,x)}),s}function fw(t,n){return t==null?!0:Ca(t,n)}function pw(t,n,s){return t==null?t:Kc(t,n,Ma(s))}function mw(t,n,s,l){return l=typeof l=="function"?l:i,t==null?t:Kc(t,n,Ma(s),l)}function Sr(t){return t==null?[]:ca(t,Lt(t))}function gw(t){return t==null?[]:ca(t,Gt(t))}function vw(t,n,s){return s===i&&(s=n,n=i),s!==i&&(s=ue(s),s=s===s?s:0),n!==i&&(n=ue(n),n=n===n?n:0),Tn(ue(t),n,s)}function yw(t,n,s){return n=He(n),s===i?(s=n,n=0):s=He(s),t=ue(t),Tv(t,n,s)}function _w(t,n,s){if(s&&typeof s!="boolean"&&zt(t,n,s)&&(n=s=i),s===i&&(typeof n=="boolean"?(s=n,n=i):typeof t=="boolean"&&(s=t,t=i)),t===i&&n===i?(t=0,n=1):(t=He(t),n===i?(n=t,t=0):n=He(n)),t>n){var l=t;t=n,n=l}if(s||t%1||n%1){var d=Ac();return Ft(t+d*(n-t+jm("1e-"+((d+"").length-1))),n)}return Aa(t,n)}var ww=br(function(t,n,s){return n=n.toLowerCase(),t+(s?rh(n):n)});function rh(t){return Qa(at(t).toLowerCase())}function ih(t){return t=at(t),t&&t.replace(bm,cg).replace(Um,"")}function xw(t,n,s){t=at(t),n=jt(n);var l=t.length;s=s===i?l:Tn(q(s),0,l);var d=s;return s-=n.length,s>=0&&t.slice(s,d)==n}function bw(t){return t=at(t),t&&nm.test(t)?t.replace(Pu,dg):t}function Ew(t){return t=at(t),t&&lm.test(t)?t.replace(Ys,"\\$&"):t}var Tw=br(function(t,n,s){return t+(s?"-":"")+n.toLowerCase()}),Sw=br(function(t,n,s){return t+(s?" ":"")+n.toLowerCase()}),Aw=ad("toLowerCase");function Ow(t,n,s){t=at(t),n=q(n);var l=n?gr(t):0;if(!n||l>=n)return t;var d=(n-l)/2;return Ho(Ao(d),s)+t+Ho(So(d),s)}function $w(t,n,s){t=at(t),n=q(n);var l=n?gr(t):0;return n&&l<n?t+Ho(n-l,s):t}function Cw(t,n,s){t=at(t),n=q(n);var l=n?gr(t):0;return n&&l<n?Ho(n-l,s)+t:t}function Iw(t,n,s){return s||n==null?n=0:n&&(n=+n),Fg(at(t).replace(Js,""),n||0)}function Lw(t,n,s){return(s?zt(t,n,s):n===i)?n=1:n=q(n),Oa(at(t),n)}function Mw(){var t=arguments,n=at(t[0]);return t.length<3?n:n.replace(t[1],t[2])}var Nw=br(function(t,n,s){return t+(s?"_":"")+n.toLowerCase()});function Rw(t,n,s){return s&&typeof s!="number"&&zt(t,n,s)&&(n=s=i),s=s===i?Te:s>>>0,s?(t=at(t),t&&(typeof n=="string"||n!=null&&!Ka(n))&&(n=jt(n),!n&&mr(t))?on(ge(t),0,s):t.split(n,s)):[]}var Pw=br(function(t,n,s){return t+(s?" ":"")+Qa(n)});function Dw(t,n,s){return t=at(t),s=s==null?0:Tn(q(s),0,t.length),n=jt(n),t.slice(s,s+n.length)==n}function Fw(t,n,s){var l=h.templateSettings;s&&zt(t,n,s)&&(n=i),t=at(t),n=jo({},n,l,pd);var d=jo({},n.imports,l.imports,pd),f=Lt(d),g=ca(d,f),y,x,A=0,O=n.interpolate||uo,I="__p += '",N=ha((n.escape||uo).source+"|"+O.source+"|"+(O===Du?gm:uo).source+"|"+(n.evaluate||uo).source+"|$","g"),F="//# sourceURL="+(ct.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Zm+"]")+`
`;t.replace(N,function(W,tt,rt,Qt,Ut,te){return rt||(rt=Qt),I+=t.slice(A,te).replace(Em,hg),tt&&(y=!0,I+=`' +
__e(`+tt+`) +
'`),Ut&&(x=!0,I+=`';
`+Ut+`;
__p += '`),rt&&(I+=`' +
((__t = (`+rt+`)) == null ? '' : __t) +
'`),A=te+W.length,W}),I+=`';
`;var U=ct.call(n,"variable")&&n.variable;if(!U)I=`with (obj) {
`+I+`
}
`;else if(pm.test(U))throw new V(u);I=(x?I.replace(Xp,""):I).replace(Qp,"$1").replace(tm,"$1;"),I="function("+(U||"obj")+`) {
`+(U?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(x?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+I+`return __p
}`;var J=sh(function(){return ot(f,F+"return "+I).apply(i,g)});if(J.source=I,Ja(J))throw J;return J}function kw(t){return at(t).toLowerCase()}function Hw(t){return at(t).toUpperCase()}function zw(t,n,s){if(t=at(t),t&&(s||n===i))return mc(t);if(!t||!(n=jt(n)))return t;var l=ge(t),d=ge(n),f=gc(l,d),g=vc(l,d)+1;return on(l,f,g).join("")}function Uw(t,n,s){if(t=at(t),t&&(s||n===i))return t.slice(0,_c(t)+1);if(!t||!(n=jt(n)))return t;var l=ge(t),d=vc(l,ge(n))+1;return on(l,0,d).join("")}function Ww(t,n,s){if(t=at(t),t&&(s||n===i))return t.replace(Js,"");if(!t||!(n=jt(n)))return t;var l=ge(t),d=gc(l,ge(n));return on(l,d).join("")}function Bw(t,n){var s=yn,l=ks;if(_t(n)){var d="separator"in n?n.separator:d;s="length"in n?q(n.length):s,l="omission"in n?jt(n.omission):l}t=at(t);var f=t.length;if(mr(t)){var g=ge(t);f=g.length}if(s>=f)return t;var y=s-gr(l);if(y<1)return l;var x=g?on(g,0,y).join(""):t.slice(0,y);if(d===i)return x+l;if(g&&(y+=x.length-y),Ka(d)){if(t.slice(y).search(d)){var A,O=x;for(d.global||(d=ha(d.source,at(Fu.exec(d))+"g")),d.lastIndex=0;A=d.exec(O);)var I=A.index;x=x.slice(0,I===i?y:I)}}else if(t.indexOf(jt(d),y)!=y){var N=x.lastIndexOf(d);N>-1&&(x=x.slice(0,N))}return x+l}function Gw(t){return t=at(t),t&&em.test(t)?t.replace(Ru,_g):t}var Vw=br(function(t,n,s){return t+(s?" ":"")+n.toUpperCase()}),Qa=ad("toUpperCase");function oh(t,n,s){return t=at(t),n=s?i:n,n===i?pg(t)?bg(t):og(t):t.match(n)||[]}var sh=j(function(t,n){try{return Jt(t,i,n)}catch(s){return Ja(s)?s:new V(s)}}),Zw=De(function(t,n){return re(n,function(s){s=Oe(s),Re(t,s,qa(t[s],t))}),t});function qw(t){var n=t==null?0:t.length,s=z();return t=n?yt(t,function(l){if(typeof l[1]!="function")throw new ie(a);return[s(l[0]),l[1]]}):[],j(function(l){for(var d=-1;++d<n;){var f=t[d];if(Jt(f[0],this,l))return Jt(f[1],this,l)}})}function Yw(t){return _v(se(t,_))}function tl(t){return function(){return t}}function Jw(t,n){return t==null||t!==t?n:t}var Kw=ud(),jw=ud(!0);function Vt(t){return t}function el(t){return Hc(typeof t=="function"?t:se(t,_))}function Xw(t){return Uc(se(t,_))}function Qw(t,n){return Wc(t,se(n,_))}var tx=j(function(t,n){return function(s){return ci(s,t,n)}}),ex=j(function(t,n){return function(s){return ci(t,s,n)}});function nl(t,n,s){var l=Lt(n),d=Mo(n,l);s==null&&!(_t(n)&&(d.length||!l.length))&&(s=n,n=t,t=this,d=Mo(n,Lt(n)));var f=!(_t(s)&&"chain"in s)||!!s.chain,g=ke(t);return re(d,function(y){var x=n[y];t[y]=x,g&&(t.prototype[y]=function(){var A=this.__chain__;if(f||A){var O=t(this.__wrapped__),I=O.__actions__=Wt(this.__actions__);return I.push({func:x,args:arguments,thisArg:t}),O.__chain__=A,O}return x.apply(t,je([this.value()],arguments))})}),t}function nx(){return It._===this&&(It._=$g),this}function rl(){}function rx(t){return t=q(t),j(function(n){return Bc(n,t)})}var ix=Ra(yt),ox=Ra(cc),sx=Ra(oa);function ah(t){return Ua(t)?sa(Oe(t)):Dv(t)}function ax(t){return function(n){return t==null?i:Sn(t,n)}}var lx=dd(),ux=dd(!0);function il(){return[]}function ol(){return!1}function cx(){return{}}function dx(){return""}function hx(){return!0}function fx(t,n){if(t=q(t),t<1||t>Je)return[];var s=Te,l=Ft(t,Te);n=z(n),t-=Te;for(var d=ua(l,n);++s<t;)n(s);return d}function px(t){return Z(t)?yt(t,Oe):Xt(t)?[t]:Wt(Od(at(t)))}function mx(t){var n=++Ag;return at(t)+n}var gx=ko(function(t,n){return t+n},0),vx=Pa("ceil"),yx=ko(function(t,n){return t/n},1),_x=Pa("floor");function wx(t){return t&&t.length?Lo(t,Vt,wa):i}function xx(t,n){return t&&t.length?Lo(t,z(n,2),wa):i}function bx(t){return fc(t,Vt)}function Ex(t,n){return fc(t,z(n,2))}function Tx(t){return t&&t.length?Lo(t,Vt,Ta):i}function Sx(t,n){return t&&t.length?Lo(t,z(n,2),Ta):i}var Ax=ko(function(t,n){return t*n},1),Ox=Pa("round"),$x=ko(function(t,n){return t-n},0);function Cx(t){return t&&t.length?la(t,Vt):0}function Ix(t,n){return t&&t.length?la(t,z(n,2)):0}return h.after=X0,h.ary=kd,h.assign=H_,h.assignIn=Xd,h.assignInWith=jo,h.assignWith=z_,h.at=U_,h.before=Hd,h.bind=qa,h.bindAll=Zw,h.bindKey=zd,h.castArray=c_,h.chain=Pd,h.chunk=_y,h.compact=wy,h.concat=xy,h.cond=qw,h.conforms=Yw,h.constant=tl,h.countBy=C0,h.create=W_,h.curry=Ud,h.curryRight=Wd,h.debounce=Bd,h.defaults=B_,h.defaultsDeep=G_,h.defer=Q0,h.delay=t_,h.difference=by,h.differenceBy=Ey,h.differenceWith=Ty,h.drop=Sy,h.dropRight=Ay,h.dropRightWhile=Oy,h.dropWhile=$y,h.fill=Cy,h.filter=L0,h.flatMap=R0,h.flatMapDeep=P0,h.flatMapDepth=D0,h.flatten=Ld,h.flattenDeep=Iy,h.flattenDepth=Ly,h.flip=e_,h.flow=Kw,h.flowRight=jw,h.fromPairs=My,h.functions=j_,h.functionsIn=X_,h.groupBy=F0,h.initial=Ry,h.intersection=Py,h.intersectionBy=Dy,h.intersectionWith=Fy,h.invert=tw,h.invertBy=ew,h.invokeMap=H0,h.iteratee=el,h.keyBy=z0,h.keys=Lt,h.keysIn=Gt,h.map=Vo,h.mapKeys=rw,h.mapValues=iw,h.matches=Xw,h.matchesProperty=Qw,h.memoize=qo,h.merge=ow,h.mergeWith=Qd,h.method=tx,h.methodOf=ex,h.mixin=nl,h.negate=Yo,h.nthArg=rx,h.omit=sw,h.omitBy=aw,h.once=n_,h.orderBy=U0,h.over=ix,h.overArgs=r_,h.overEvery=ox,h.overSome=sx,h.partial=Ya,h.partialRight=Gd,h.partition=W0,h.pick=lw,h.pickBy=th,h.property=ah,h.propertyOf=ax,h.pull=Uy,h.pullAll=Nd,h.pullAllBy=Wy,h.pullAllWith=By,h.pullAt=Gy,h.range=lx,h.rangeRight=ux,h.rearg=i_,h.reject=V0,h.remove=Vy,h.rest=o_,h.reverse=Va,h.sampleSize=q0,h.set=cw,h.setWith=dw,h.shuffle=Y0,h.slice=Zy,h.sortBy=j0,h.sortedUniq=Qy,h.sortedUniqBy=t0,h.split=Rw,h.spread=s_,h.tail=e0,h.take=n0,h.takeRight=r0,h.takeRightWhile=i0,h.takeWhile=o0,h.tap=w0,h.throttle=a_,h.thru=Go,h.toArray=Jd,h.toPairs=eh,h.toPairsIn=nh,h.toPath=px,h.toPlainObject=jd,h.transform=hw,h.unary=l_,h.union=s0,h.unionBy=a0,h.unionWith=l0,h.uniq=u0,h.uniqBy=c0,h.uniqWith=d0,h.unset=fw,h.unzip=Za,h.unzipWith=Rd,h.update=pw,h.updateWith=mw,h.values=Sr,h.valuesIn=gw,h.without=h0,h.words=oh,h.wrap=u_,h.xor=f0,h.xorBy=p0,h.xorWith=m0,h.zip=g0,h.zipObject=v0,h.zipObjectDeep=y0,h.zipWith=_0,h.entries=eh,h.entriesIn=nh,h.extend=Xd,h.extendWith=jo,nl(h,h),h.add=gx,h.attempt=sh,h.camelCase=ww,h.capitalize=rh,h.ceil=vx,h.clamp=vw,h.clone=d_,h.cloneDeep=f_,h.cloneDeepWith=p_,h.cloneWith=h_,h.conformsTo=m_,h.deburr=ih,h.defaultTo=Jw,h.divide=yx,h.endsWith=xw,h.eq=ye,h.escape=bw,h.escapeRegExp=Ew,h.every=I0,h.find=M0,h.findIndex=Cd,h.findKey=V_,h.findLast=N0,h.findLastIndex=Id,h.findLastKey=Z_,h.floor=_x,h.forEach=Dd,h.forEachRight=Fd,h.forIn=q_,h.forInRight=Y_,h.forOwn=J_,h.forOwnRight=K_,h.get=ja,h.gt=g_,h.gte=v_,h.has=Q_,h.hasIn=Xa,h.head=Md,h.identity=Vt,h.includes=k0,h.indexOf=Ny,h.inRange=yw,h.invoke=nw,h.isArguments=$n,h.isArray=Z,h.isArrayBuffer=y_,h.isArrayLike=Bt,h.isArrayLikeObject=Tt,h.isBoolean=__,h.isBuffer=sn,h.isDate=w_,h.isElement=x_,h.isEmpty=b_,h.isEqual=E_,h.isEqualWith=T_,h.isError=Ja,h.isFinite=S_,h.isFunction=ke,h.isInteger=Vd,h.isLength=Jo,h.isMap=Zd,h.isMatch=A_,h.isMatchWith=O_,h.isNaN=$_,h.isNative=C_,h.isNil=L_,h.isNull=I_,h.isNumber=qd,h.isObject=_t,h.isObjectLike=Et,h.isPlainObject=gi,h.isRegExp=Ka,h.isSafeInteger=M_,h.isSet=Yd,h.isString=Ko,h.isSymbol=Xt,h.isTypedArray=Tr,h.isUndefined=N_,h.isWeakMap=R_,h.isWeakSet=P_,h.join=ky,h.kebabCase=Tw,h.last=le,h.lastIndexOf=Hy,h.lowerCase=Sw,h.lowerFirst=Aw,h.lt=D_,h.lte=F_,h.max=wx,h.maxBy=xx,h.mean=bx,h.meanBy=Ex,h.min=Tx,h.minBy=Sx,h.stubArray=il,h.stubFalse=ol,h.stubObject=cx,h.stubString=dx,h.stubTrue=hx,h.multiply=Ax,h.nth=zy,h.noConflict=nx,h.noop=rl,h.now=Zo,h.pad=Ow,h.padEnd=$w,h.padStart=Cw,h.parseInt=Iw,h.random=_w,h.reduce=B0,h.reduceRight=G0,h.repeat=Lw,h.replace=Mw,h.result=uw,h.round=Ox,h.runInContext=w,h.sample=Z0,h.size=J0,h.snakeCase=Nw,h.some=K0,h.sortedIndex=qy,h.sortedIndexBy=Yy,h.sortedIndexOf=Jy,h.sortedLastIndex=Ky,h.sortedLastIndexBy=jy,h.sortedLastIndexOf=Xy,h.startCase=Pw,h.startsWith=Dw,h.subtract=$x,h.sum=Cx,h.sumBy=Ix,h.template=Fw,h.times=fx,h.toFinite=He,h.toInteger=q,h.toLength=Kd,h.toLower=kw,h.toNumber=ue,h.toSafeInteger=k_,h.toString=at,h.toUpper=Hw,h.trim=zw,h.trimEnd=Uw,h.trimStart=Ww,h.truncate=Bw,h.unescape=Gw,h.uniqueId=mx,h.upperCase=Vw,h.upperFirst=Qa,h.each=Dd,h.eachRight=Fd,h.first=Md,nl(h,function(){var t={};return Se(h,function(n,s){ct.call(h.prototype,s)||(t[s]=n)}),t}(),{chain:!1}),h.VERSION=e,re(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){h[t].placeholder=h}),re(["drop","take"],function(t,n){nt.prototype[t]=function(s){s=s===i?1:$t(q(s),0);var l=this.__filtered__&&!n?new nt(this):this.clone();return l.__filtered__?l.__takeCount__=Ft(s,l.__takeCount__):l.__views__.push({size:Ft(s,Te),type:t+(l.__dir__<0?"Right":"")}),l},nt.prototype[t+"Right"]=function(s){return this.reverse()[t](s).reverse()}}),re(["filter","map","takeWhile"],function(t,n){var s=n+1,l=s==Lu||s==Up;nt.prototype[t]=function(d){var f=this.clone();return f.__iteratees__.push({iteratee:z(d,3),type:s}),f.__filtered__=f.__filtered__||l,f}}),re(["head","last"],function(t,n){var s="take"+(n?"Right":"");nt.prototype[t]=function(){return this[s](1).value()[0]}}),re(["initial","tail"],function(t,n){var s="drop"+(n?"":"Right");nt.prototype[t]=function(){return this.__filtered__?new nt(this):this[s](1)}}),nt.prototype.compact=function(){return this.filter(Vt)},nt.prototype.find=function(t){return this.filter(t).head()},nt.prototype.findLast=function(t){return this.reverse().find(t)},nt.prototype.invokeMap=j(function(t,n){return typeof t=="function"?new nt(this):this.map(function(s){return ci(s,t,n)})}),nt.prototype.reject=function(t){return this.filter(Yo(z(t)))},nt.prototype.slice=function(t,n){t=q(t);var s=this;return s.__filtered__&&(t>0||n<0)?new nt(s):(t<0?s=s.takeRight(-t):t&&(s=s.drop(t)),n!==i&&(n=q(n),s=n<0?s.dropRight(-n):s.take(n-t)),s)},nt.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},nt.prototype.toArray=function(){return this.take(Te)},Se(nt.prototype,function(t,n){var s=/^(?:filter|find|map|reject)|While$/.test(n),l=/^(?:head|last)$/.test(n),d=h[l?"take"+(n=="last"?"Right":""):n],f=l||/^find/.test(n);!d||(h.prototype[n]=function(){var g=this.__wrapped__,y=l?[1]:arguments,x=g instanceof nt,A=y[0],O=x||Z(g),I=function(tt){var rt=d.apply(h,je([tt],y));return l&&N?rt[0]:rt};O&&s&&typeof A=="function"&&A.length!=1&&(x=O=!1);var N=this.__chain__,F=!!this.__actions__.length,U=f&&!N,J=x&&!F;if(!f&&O){g=J?g:new nt(this);var W=t.apply(g,y);return W.__actions__.push({func:Go,args:[I],thisArg:i}),new oe(W,N)}return U&&J?t.apply(this,y):(W=this.thru(I),U?l?W.value()[0]:W.value():W)})}),re(["pop","push","shift","sort","splice","unshift"],function(t){var n=go[t],s=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",l=/^(?:pop|shift)$/.test(t);h.prototype[t]=function(){var d=arguments;if(l&&!this.__chain__){var f=this.value();return n.apply(Z(f)?f:[],d)}return this[s](function(g){return n.apply(Z(g)?g:[],d)})}}),Se(nt.prototype,function(t,n){var s=h[n];if(s){var l=s.name+"";ct.call(_r,l)||(_r[l]=[]),_r[l].push({name:n,func:s})}}),_r[Fo(i,gt).name]=[{name:"wrapper",func:i}],nt.prototype.clone=Gg,nt.prototype.reverse=Vg,nt.prototype.value=Zg,h.prototype.at=x0,h.prototype.chain=b0,h.prototype.commit=E0,h.prototype.next=T0,h.prototype.plant=A0,h.prototype.reverse=O0,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=$0,h.prototype.first=h.prototype.head,ri&&(h.prototype[ri]=S0),h},Qe=Eg();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(It._=Qe,define(function(){return Qe})):wn?((wn.exports=Qe)._=Qe,ea._=Qe):It._=Qe}).call($r)});v();v();v();v();v();var ts=globalThis,ns=ts.ShadowRoot&&(ts.ShadyCSS===void 0||ts.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ph=Symbol(),fh=new WeakMap,es=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==ph)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(ns&&e===void 0){let o=r!==void 0&&r.length===1;o&&(e=fh.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&fh.set(r,e))}return e}toString(){return this.cssText}},mh=i=>new es(typeof i=="string"?i:i+"",void 0,ph);var ll=(i,e)=>{if(ns)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let o=document.createElement("style"),a=ts.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,i.appendChild(o)}},rs=ns?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let o of e.cssRules)r+=o.cssText;return mh(r)})(i):i;var{is:zx,defineProperty:Ux,getOwnPropertyDescriptor:Wx,getOwnPropertyNames:Bx,getOwnPropertySymbols:Gx,getPrototypeOf:Vx}=Object,an=globalThis,gh=an.trustedTypes,Zx=gh?gh.emptyScript:"",ul=an.reactiveElementPolyfillSupport,yi=(i,e)=>i,is={toAttribute(i,e){switch(e){case Boolean:i=i?Zx:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(o){r=null}}return r}},cl=(i,e)=>!zx(i,e),vh={attribute:!0,type:String,converter:is,reflect:!1,hasChanged:cl},yh,_h;(yh=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(_h=an.litPropertyMetadata)!=null||(an.litPropertyMetadata=new WeakMap);var Cn=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=vh){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let o=Symbol(),a=this.getPropertyDescriptor(e,o,r);a!==void 0&&Ux(this.prototype,e,a)}}static getPropertyDescriptor(e,r,o){var c;let{get:a,set:u}=(c=Wx(this.prototype,e))!=null?c:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);u.call(this,p),this.requestUpdate(e,m,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:vh}static _$Ei(){if(this.hasOwnProperty(yi("elementProperties")))return;let e=Vx(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(yi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yi("properties"))){let r=this.properties,o=[...Bx(r),...Gx(r)];for(let a of o)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[o,a]of r)this.elementProperties.set(o,a)}this._$Eh=new Map;for(let[r,o]of this.elementProperties){let a=this._$Eu(r,o);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let a of o)r.unshift(rs(a))}else e!==void 0&&r.push(rs(e));return r}static _$Eu(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,o;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return ll(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(o=>{var a;return(a=o.hostConnected)==null?void 0:a.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EO(e,r){var u;let o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(a!==void 0&&o.reflect===!0){let c=(((u=o.converter)==null?void 0:u.toAttribute)!==void 0?o.converter:is).toAttribute(r,o.type);this._$Em=e,c==null?this.removeAttribute(a):this.setAttribute(a,c),this._$Em=null}}_$AK(e,r){var u;let o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let c=o.getPropertyOptions(a),p=typeof c.converter=="function"?{fromAttribute:c.converter}:((u=c.converter)==null?void 0:u.fromAttribute)!==void 0?c.converter:is;this._$Em=a,this[a]=p.fromAttribute(r,c.type),this._$Em=null}}requestUpdate(e,r,o,a=!1,u){var c;if(e!==void 0){if(o!=null||(o=this.constructor.getPropertyOptions(e)),!((c=o.hasChanged)!=null?c:cl)(a?u:this[e],r))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,o){var a;this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return vi(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[u,c]of this._$Ep)this[u]=c;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[u,c]of a)c.wrapped!==!0||this._$AL.has(u)||this[u]===void 0||this.C(u,this[u],c)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(o=this._$ES)==null||o.forEach(a=>{var u;return(u=a.hostUpdate)==null?void 0:u.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(o=>{var a;return(a=o.hostUpdated)==null?void 0:a.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},wh;Cn.elementStyles=[],Cn.shadowRootOptions={mode:"open"},Cn[yi("elementProperties")]=new Map,Cn[yi("finalized")]=new Map,ul==null||ul({ReactiveElement:Cn}),((wh=an.reactiveElementVersions)!=null?wh:an.reactiveElementVersions=[]).push("2.0.0");v();var wi=globalThis,os=wi.trustedTypes,xh=os?os.createPolicy("lit-html",{createHTML:i=>i}):void 0,fl="$lit$",Ue=`lit$${(Math.random()+"").slice(9)}$`,pl="?"+Ue,qx=`<${pl}>`,Mn=document,ss=()=>Mn.createComment(""),xi=i=>i===null||typeof i!="object"&&typeof i!="function",$h=Array.isArray,Ch=i=>$h(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",dl=`[ 	
\f\r]`,_i=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bh=/-->/g,Eh=/>/g,In=RegExp(`>|${dl}(?:([^\\s"'>=/]+)(${dl}*=${dl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Th=/'/g,Sh=/"/g,Ih=/^(?:script|style|textarea|title)$/i,Lh=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),nT=Lh(1),rT=Lh(2),We=Symbol.for("lit-noChange"),Mt=Symbol.for("lit-nothing"),Ah=new WeakMap,Ln=Mn.createTreeWalker(Mn,129);function Mh(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return xh!==void 0?xh.createHTML(e):e}var Nh=(i,e)=>{let r=i.length-1,o=[],a,u=e===2?"<svg>":"",c=_i;for(let p=0;p<r;p++){let m=i[p],_,T,S=-1,M=0;for(;M<m.length&&(c.lastIndex=M,T=c.exec(m),T!==null);)M=c.lastIndex,c===_i?T[1]==="!--"?c=bh:T[1]!==void 0?c=Eh:T[2]!==void 0?(Ih.test(T[2])&&(a=RegExp("</"+T[2],"g")),c=In):T[3]!==void 0&&(c=In):c===In?T[0]===">"?(c=a!=null?a:_i,S=-1):T[1]===void 0?S=-2:(S=c.lastIndex-T[2].length,_=T[1],c=T[3]===void 0?In:T[3]==='"'?Sh:Th):c===Sh||c===Th?c=In:c===bh||c===Eh?c=_i:(c=In,a=void 0);let $=c===In&&i[p+1].startsWith("/>")?" ":"";u+=c===_i?m+qx:S>=0?(o.push(_),m.slice(0,S)+fl+m.slice(S)+Ue+$):m+Ue+(S===-2?p:$)}return[Mh(i,u+(i[r]||"<?>")+(e===2?"</svg>":"")),o]},Nn=class{constructor({strings:e,_$litType$:r},o){let a;this.parts=[];let u=0,c=0,p=e.length-1,m=this.parts,[_,T]=Nh(e,r);if(this.el=Nn.createElement(_,o),Ln.currentNode=this.el.content,r===2){let S=this.el.content.firstChild;S.replaceWith(...S.childNodes)}for(;(a=Ln.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let S of a.getAttributeNames())if(S.endsWith(fl)){let M=T[c++],$=a.getAttribute(S).split(Ue),P=/([.?@])?(.*)/.exec(M);m.push({type:1,index:u,name:P[2],strings:$,ctor:P[1]==="."?ls:P[1]==="?"?us:P[1]==="@"?cs:Dn}),a.removeAttribute(S)}else S.startsWith(Ue)&&(m.push({type:6,index:u}),a.removeAttribute(S));if(Ih.test(a.tagName)){let S=a.textContent.split(Ue),M=S.length-1;if(M>0){a.textContent=os?os.emptyScript:"";for(let $=0;$<M;$++)a.append(S[$],ss()),Ln.nextNode(),m.push({type:2,index:++u});a.append(S[M],ss())}}}else if(a.nodeType===8)if(a.data===pl)m.push({type:2,index:u});else{let S=-1;for(;(S=a.data.indexOf(Ue,S+1))!==-1;)m.push({type:7,index:u}),S+=Ue.length-1}u++}}static createElement(e,r){let o=Mn.createElement("template");return o.innerHTML=e,o}};function Rn(i,e,r=i,o){var c,p,m;if(e===We)return e;let a=o!==void 0?(c=r._$Co)==null?void 0:c[o]:r._$Cl,u=xi(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),u===void 0?a=void 0:(a=new u(i),a._$AT(i,r,o)),o!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[o]=a:r._$Cl=a),a!==void 0&&(e=Rn(i,a._$AS(i,e.values),a,o)),e}var as=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var _;let{el:{content:r},parts:o}=this._$AD,a=((_=e==null?void 0:e.creationScope)!=null?_:Mn).importNode(r,!0);Ln.currentNode=a;let u=Ln.nextNode(),c=0,p=0,m=o[0];for(;m!==void 0;){if(c===m.index){let T;m.type===2?T=new Pn(u,u.nextSibling,this,e):m.type===1?T=new m.ctor(u,m.name,m.strings,this,e):m.type===6&&(T=new ds(u,this,e)),this._$AV.push(T),m=o[++p]}c!==(m==null?void 0:m.index)&&(u=Ln.nextNode(),c++)}return Ln.currentNode=Mn,a}p(e){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},Pn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,o,a){var u;this.type=2,this._$AH=Mt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=(u=a==null?void 0:a.isConnected)!=null?u:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Rn(this,e,r),xi(e)?e===Mt||e==null||e===""?(this._$AH!==Mt&&this._$AR(),this._$AH=Mt):e!==this._$AH&&e!==We&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ch(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Mt&&xi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Mn.createTextNode(e)),this._$AH=e}g(e){var u;let{values:r,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Nn.createElement(Mh(o.h,o.h[0]),this.options)),o);if(((u=this._$AH)==null?void 0:u._$AD)===a)this._$AH.p(r);else{let c=new as(a,this),p=c.u(this.options);c.p(r),this.$(p),this._$AH=c}}_$AC(e){let r=Ah.get(e.strings);return r===void 0&&Ah.set(e.strings,r=new Nn(e)),r}T(e){$h(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,a=0;for(let u of e)a===r.length?r.push(o=new Pn(this.k(ss()),this.k(ss()),this,this.options)):o=r[a],o._$AI(u),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},Dn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,a,u){this.type=1,this._$AH=Mt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=u,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Mt}_$AI(e,r=this,o,a){let u=this.strings,c=!1;if(u===void 0)e=Rn(this,e,r,0),c=!xi(e)||e!==this._$AH&&e!==We,c&&(this._$AH=e);else{let p=e,m,_;for(e=u[0],m=0;m<u.length-1;m++)_=Rn(this,p[o+m],r,m),_===We&&(_=this._$AH[m]),c||(c=!xi(_)||_!==this._$AH[m]),_===Mt?e=Mt:e!==Mt&&(e+=(_!=null?_:"")+u[m+1]),this._$AH[m]=_}c&&!a&&this.j(e)}j(e){e===Mt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},ls=class extends Dn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Mt?void 0:e}},us=class extends Dn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Mt)}},cs=class extends Dn{constructor(e,r,o,a,u){super(e,r,o,a,u),this.type=5}_$AI(e,r=this){var c;if((e=(c=Rn(this,e,r,0))!=null?c:Mt)===We)return;let o=this._$AH,a=e===Mt&&o!==Mt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==Mt&&(o===Mt||a);a&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)==null?void 0:r.host)!=null?o:this.element,e):this._$AH.handleEvent(e)}},ds=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Rn(this,e)}},Rh={S:fl,A:Ue,P:pl,C:1,M:Nh,L:as,R:Ch,V:Rn,D:Pn,I:Dn,H:us,N:cs,U:ls,B:ds},hl=wi.litHtmlPolyfillSupport,Oh;hl==null||hl(Nn,Pn),((Oh=wi.litHtmlVersions)!=null?Oh:wi.litHtmlVersions=[]).push("3.0.0");v();v();v();var hs=globalThis,fs=hs.ShadowRoot&&(hs.ShadyCSS===void 0||hs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ml=Symbol(),Ph=new WeakMap,bi=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==ml)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(fs&&e===void 0){let o=r!==void 0&&r.length===1;o&&(e=Ph.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ph.set(r,e))}return e}toString(){return this.cssText}},Dh=i=>new bi(typeof i=="string"?i:i+"",void 0,ml),B=(i,...e)=>{let r=i.length===1?i[0]:e.reduce((o,a,u)=>o+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+i[u+1],i[0]);return new bi(r,i,ml)},gl=(i,e)=>{if(fs)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let o=document.createElement("style"),a=hs.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,i.appendChild(o)}},ps=fs?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let o of e.cssRules)r+=o.cssText;return Dh(r)})(i):i;var{is:Yx,defineProperty:Jx,getOwnPropertyDescriptor:Kx,getOwnPropertyNames:jx,getOwnPropertySymbols:Xx,getPrototypeOf:Qx}=Object,ln=globalThis,Fh=ln.trustedTypes,tb=Fh?Fh.emptyScript:"",vl=ln.reactiveElementPolyfillSupport,Ei=(i,e)=>i,yl={toAttribute(i,e){switch(e){case Boolean:i=i?tb:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(o){r=null}}return r}},Wh=(i,e)=>!Yx(i,e),kh={attribute:!0,type:String,converter:yl,reflect:!1,hasChanged:Wh},Hh,zh;(Hh=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(zh=ln.litPropertyMetadata)!=null||(ln.litPropertyMetadata=new WeakMap);var Be=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=kh){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let o=Symbol(),a=this.getPropertyDescriptor(e,o,r);a!==void 0&&Jx(this.prototype,e,a)}}static getPropertyDescriptor(e,r,o){var c;let{get:a,set:u}=(c=Kx(this.prototype,e))!=null?c:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);u.call(this,p),this.requestUpdate(e,m,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:kh}static _$Ei(){if(this.hasOwnProperty(Ei("elementProperties")))return;let e=Qx(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ei("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ei("properties"))){let r=this.properties,o=[...jx(r),...Xx(r)];for(let a of o)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[o,a]of r)this.elementProperties.set(o,a)}this._$Eh=new Map;for(let[r,o]of this.elementProperties){let a=this._$Eu(r,o);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let a of o)r.unshift(ps(a))}else e!==void 0&&r.push(ps(e));return r}static _$Eu(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,o;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return gl(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(o=>{var a;return(a=o.hostConnected)==null?void 0:a.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EO(e,r){var u;let o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(a!==void 0&&o.reflect===!0){let c=(((u=o.converter)==null?void 0:u.toAttribute)!==void 0?o.converter:yl).toAttribute(r,o.type);this._$Em=e,c==null?this.removeAttribute(a):this.setAttribute(a,c),this._$Em=null}}_$AK(e,r){var u;let o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let c=o.getPropertyOptions(a),p=typeof c.converter=="function"?{fromAttribute:c.converter}:((u=c.converter)==null?void 0:u.fromAttribute)!==void 0?c.converter:yl;this._$Em=a,this[a]=p.fromAttribute(r,c.type),this._$Em=null}}requestUpdate(e,r,o,a=!1,u){var c;if(e!==void 0){if(o!=null||(o=this.constructor.getPropertyOptions(e)),!((c=o.hasChanged)!=null?c:Wh)(a?u:this[e],r))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,o){var a;this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return vi(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[u,c]of this._$Ep)this[u]=c;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[u,c]of a)c.wrapped!==!0||this._$AL.has(u)||this[u]===void 0||this.C(u,this[u],c)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(o=this._$ES)==null||o.forEach(a=>{var u;return(u=a.hostUpdate)==null?void 0:u.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(o=>{var a;return(a=o.hostUpdated)==null?void 0:a.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},Uh;Be.elementStyles=[],Be.shadowRootOptions={mode:"open"},Be[Ei("elementProperties")]=new Map,Be[Ei("finalized")]=new Map,vl==null||vl({ReactiveElement:Be}),((Uh=ln.reactiveElementVersions)!=null?Uh:ln.reactiveElementVersions=[]).push("2.0.0");v();var Si=globalThis,ms=Si.trustedTypes,Bh=ms?ms.createPolicy("lit-html",{createHTML:i=>i}):void 0,Kh="$lit$",un=`lit$${(Math.random()+"").slice(9)}$`,jh="?"+un,eb=`<${jh}>`,Hn=document,Ai=()=>Hn.createComment(""),Oi=i=>i===null||typeof i!="object"&&typeof i!="function",Xh=Array.isArray,nb=i=>Xh(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",_l=`[ 	
\f\r]`,Ti=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gh=/-->/g,Vh=/>/g,Fn=RegExp(`>|${_l}(?:([^\\s"'>=/]+)(${_l}*=${_l}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zh=/'/g,qh=/"/g,Qh=/^(?:script|style|textarea|title)$/i,tf=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),L=tf(1),uT=tf(2),zn=Symbol.for("lit-noChange"),Nt=Symbol.for("lit-nothing"),Yh=new WeakMap,kn=Hn.createTreeWalker(Hn,129);function ef(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bh!==void 0?Bh.createHTML(e):e}var rb=(i,e)=>{let r=i.length-1,o=[],a,u=e===2?"<svg>":"",c=Ti;for(let p=0;p<r;p++){let m=i[p],_,T,S=-1,M=0;for(;M<m.length&&(c.lastIndex=M,T=c.exec(m),T!==null);)M=c.lastIndex,c===Ti?T[1]==="!--"?c=Gh:T[1]!==void 0?c=Vh:T[2]!==void 0?(Qh.test(T[2])&&(a=RegExp("</"+T[2],"g")),c=Fn):T[3]!==void 0&&(c=Fn):c===Fn?T[0]===">"?(c=a!=null?a:Ti,S=-1):T[1]===void 0?S=-2:(S=c.lastIndex-T[2].length,_=T[1],c=T[3]===void 0?Fn:T[3]==='"'?qh:Zh):c===qh||c===Zh?c=Fn:c===Gh||c===Vh?c=Ti:(c=Fn,a=void 0);let $=c===Fn&&i[p+1].startsWith("/>")?" ":"";u+=c===Ti?m+eb:S>=0?(o.push(_),m.slice(0,S)+Kh+m.slice(S)+un+$):m+un+(S===-2?p:$)}return[ef(i,u+(i[r]||"<?>")+(e===2?"</svg>":"")),o]},Un=class{constructor({strings:e,_$litType$:r},o){let a;this.parts=[];let u=0,c=0,p=e.length-1,m=this.parts,[_,T]=rb(e,r);if(this.el=Un.createElement(_,o),kn.currentNode=this.el.content,r===2){let S=this.el.content.firstChild;S.replaceWith(...S.childNodes)}for(;(a=kn.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let S of a.getAttributeNames())if(S.endsWith(Kh)){let M=T[c++],$=a.getAttribute(S).split(un),P=/([.?@])?(.*)/.exec(M);m.push({type:1,index:u,name:P[2],strings:$,ctor:P[1]==="."?bl:P[1]==="?"?El:P[1]==="@"?Tl:Or}),a.removeAttribute(S)}else S.startsWith(un)&&(m.push({type:6,index:u}),a.removeAttribute(S));if(Qh.test(a.tagName)){let S=a.textContent.split(un),M=S.length-1;if(M>0){a.textContent=ms?ms.emptyScript:"";for(let $=0;$<M;$++)a.append(S[$],Ai()),kn.nextNode(),m.push({type:2,index:++u});a.append(S[M],Ai())}}}else if(a.nodeType===8)if(a.data===jh)m.push({type:2,index:u});else{let S=-1;for(;(S=a.data.indexOf(un,S+1))!==-1;)m.push({type:7,index:u}),S+=un.length-1}u++}}static createElement(e,r){let o=Hn.createElement("template");return o.innerHTML=e,o}};function Ar(i,e,r=i,o){var c,p,m;if(e===zn)return e;let a=o!==void 0?(c=r._$Co)==null?void 0:c[o]:r._$Cl,u=Oi(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),u===void 0?a=void 0:(a=new u(i),a._$AT(i,r,o)),o!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[o]=a:r._$Cl=a),a!==void 0&&(e=Ar(i,a._$AS(i,e.values),a,o)),e}var xl=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var _;let{el:{content:r},parts:o}=this._$AD,a=((_=e==null?void 0:e.creationScope)!=null?_:Hn).importNode(r,!0);kn.currentNode=a;let u=kn.nextNode(),c=0,p=0,m=o[0];for(;m!==void 0;){if(c===m.index){let T;m.type===2?T=new Wn(u,u.nextSibling,this,e):m.type===1?T=new m.ctor(u,m.name,m.strings,this,e):m.type===6&&(T=new Sl(u,this,e)),this._$AV.push(T),m=o[++p]}c!==(m==null?void 0:m.index)&&(u=kn.nextNode(),c++)}return kn.currentNode=Hn,a}p(e){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},Wn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,o,a){var u;this.type=2,this._$AH=Nt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=(u=a==null?void 0:a.isConnected)!=null?u:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ar(this,e,r),Oi(e)?e===Nt||e==null||e===""?(this._$AH!==Nt&&this._$AR(),this._$AH=Nt):e!==this._$AH&&e!==zn&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):nb(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Nt&&Oi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Hn.createTextNode(e)),this._$AH=e}g(e){var u;let{values:r,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Un.createElement(ef(o.h,o.h[0]),this.options)),o);if(((u=this._$AH)==null?void 0:u._$AD)===a)this._$AH.p(r);else{let c=new xl(a,this),p=c.u(this.options);c.p(r),this.$(p),this._$AH=c}}_$AC(e){let r=Yh.get(e.strings);return r===void 0&&Yh.set(e.strings,r=new Un(e)),r}T(e){Xh(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,a=0;for(let u of e)a===r.length?r.push(o=new Wn(this.k(Ai()),this.k(Ai()),this,this.options)):o=r[a],o._$AI(u),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},Or=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,a,u){this.type=1,this._$AH=Nt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=u,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Nt}_$AI(e,r=this,o,a){let u=this.strings,c=!1;if(u===void 0)e=Ar(this,e,r,0),c=!Oi(e)||e!==this._$AH&&e!==zn,c&&(this._$AH=e);else{let p=e,m,_;for(e=u[0],m=0;m<u.length-1;m++)_=Ar(this,p[o+m],r,m),_===zn&&(_=this._$AH[m]),c||(c=!Oi(_)||_!==this._$AH[m]),_===Nt?e=Nt:e!==Nt&&(e+=(_!=null?_:"")+u[m+1]),this._$AH[m]=_}c&&!a&&this.j(e)}j(e){e===Nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},bl=class extends Or{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Nt?void 0:e}},El=class extends Or{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Nt)}},Tl=class extends Or{constructor(e,r,o,a,u){super(e,r,o,a,u),this.type=5}_$AI(e,r=this){var c;if((e=(c=Ar(this,e,r,0))!=null?c:Nt)===zn)return;let o=this._$AH,a=e===Nt&&o!==Nt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==Nt&&(o===Nt||a);a&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)==null?void 0:r.host)!=null?o:this.element,e):this._$AH.handleEvent(e)}},Sl=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ar(this,e)}};var wl=Si.litHtmlPolyfillSupport,Jh;wl==null||wl(Un,Wn),((Jh=Si.litHtmlVersions)!=null?Jh:Si.litHtmlVersions=[]).push("3.0.0");var nf=(i,e,r)=>{var u,c;let o=(u=r==null?void 0:r.renderBefore)!=null?u:e,a=o._$litPart$;if(a===void 0){let p=(c=r==null?void 0:r.renderBefore)!=null?c:null;o._$litPart$=a=new Wn(e.insertBefore(Ai(),p),p,void 0,r!=null?r:{})}return a._$AI(i),a};var G=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r,o;let e=super.createRenderRoot();return(o=(r=this.renderOptions).renderBefore)!=null||(r.renderBefore=e.firstChild),e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nf(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return zn}},rf;G._$litElement$=!0,G["finalized"]=!0,(rf=globalThis.litElementHydrateSupport)==null||rf.call(globalThis,{LitElement:G});var Al=globalThis.litElementPolyfillSupport;Al==null||Al({LitElement:G});var of;((of=globalThis.litElementVersions)!=null?of:globalThis.litElementVersions=[]).push("4.0.0");v();v();v();var Q=i=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};v();v();v();v();v();v();v();v();v();var Bn=class extends G{render(){return L` <div>Hello from SuperViz, ${this.name}</div> `}};Bn.properties={name:{type:String}},Bn.styles=B`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `,Bn=X([Q("superviz-hello-world")],Bn);v();v();v();var af=Hx(sf()),Ol=class{setConfig(e){this.configuration=e}get(e,r){return this.configuration?af.default.get(this.configuration,e,r):r}},$l=new Ol;v();v();var Cl=B`
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
`;v();var Ll=B`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;v();var Ml=B`
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
`;var et=i=>{var r;class e extends i{connectedCallback(){setTimeout(()=>{var p,m;let a=document.getElementById("superviz-style"),u=this.createCustomColors(),c=document.createElement("style");c.innerHTML=(a==null?void 0:a.innerHTML)||"",(p=this.shadowRoot)==null||p.appendChild(c),u&&((m=this.shadowRoot)==null||m.appendChild(u))}),super.connectedCallback()}createCustomColors(){if(!$l.get("colors"))return;let a=document.createElement("style"),u=Object.entries($l.get("colors")).map(([c,p])=>`--${c}: ${p} !important;`).join(" ");return a.innerHTML=`
      * {
        ${u}
      }
    `,a}emitEvent(a,u,c={composed:!0,bubbles:!0}){let p=new CustomEvent(a,k({detail:u},c));this.dispatchEvent(p)}}return e.styles=[Cl,Il,Ll,Ml,(r=i.styles)!=null?r:[]],e};v();var Nl=(u=>(u[u.xs=14]="xs",u[u.sm=18]="sm",u[u.md=24]="md",u[u.lg=36]="lg",u[u.xl=44]="xl",u))(Nl||{});var lf=et(G),ib=[lf.styles],Gn=class extends lf{constructor(){super();this.name="",this.size="md"}get iconSize(){if(!!this.allowSetSize)return Nl[this.size]}render(){return L`
      <i
        class="sv-icon sv-icon-${this.name}_${this.size}"
        style="font-size: ${this.iconSize}px"
      ></i>
    `}};Gn.properties={name:{type:String},size:{type:String},allowSetSize:{type:Boolean}},Gn.styles=[ib,B`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `],Gn=X([Q("superviz-icon")],Gn);v();v();v();v();var vs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ys=i=>(...e)=>({_$litDirective$:i,values:e}),Cr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var dt=ys(class extends Cr{constructor(i){var e;if(super(i),i.type!==vs.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var o,a;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(u=>u!=="")));for(let u in e)e[u]&&!((o=this.st)!=null&&o.has(u))&&this.it.add(u);return this.render(e)}let r=i.element.classList;for(let u of this.it)u in e||(r.remove(u),this.it.delete(u));for(let u in e){let c=!!e[u];c===this.it.has(u)||((a=this.st)==null?void 0:a.has(u))||(c?(r.add(u),this.it.add(u)):(r.remove(u),this.it.delete(u)))}return We}});v();var uf=B`
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
`;v();var cf=et(G),ob=[cf.styles,uf],Vn=class extends cf{constructor(){super();this.menu=void 0;this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let o=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),u=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=o.includes(a),_=o.includes(u),T=o.includes(p);m||_||T||this.close()};this.close=()=>{this.open=!1,this.emitEvent("close",{bubbles:!1,composed:!1})};this.callbackSelected=r=>{this.open=!1;let o=this.returnTo?r[this.returnTo]:r;this.emitEvent("selected",o,{bubbles:!1,composed:!0})};this.adjustPosition=()=>{this.adjustPositionVertical(),this.adjustPositionHorizontal()};this.tooltip=()=>this.canShowTooltip?L` <superviz-tooltip
      tooltipData=${JSON.stringify(this.onHoverData)}
      ?shiftTooltipLeft=${this.shiftTooltipLeft}
    ></superviz-tooltip>`:"";this.showTooltip=!1}disconnectedCallback(){var o;super.disconnectedCallback(),document.removeEventListener("click",this.onClickOutDropdown);let r=this.shadowRoot.querySelector(".dropdown");r==null||r.removeEventListener("mouseenter",()=>{this.showTooltip=!0}),r==null||r.removeEventListener("mouseleave",()=>{this.showTooltip=!1}),(o=this.dropdownResizeObserver)==null||o.disconnect()}updated(r){if(!!r.has("open")){if(this.emitEvent("toggle-dropdown-state",{open:this.open,font:this.name},{bubbles:!1,composed:!1}),this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown)}}get dropdownBounds(){this.dropdownContent||(this.dropdownContent=this.shadowRoot.querySelector(".dropdown-content"));let r=this.dropdownContent.getBoundingClientRect(),{y:o,height:a,x:u,width:c}=this.menu.getBoundingClientRect();return{top:o,bottom:o+a+4,left:u,right:u+c,height:a+4,width:c,contentX:r.x,contentY:r.y,contentWidth:r.width}}positionVerticalAction(){let{top:r,bottom:o}=this.dropdownBounds,{innerHeight:a}=window,u=o>a,c=r<0;return u&&this.position.includes("bottom")||c&&this.position.includes("top")?2:!u&&!c&&this.shouldUseOriginalVertical()?1:0}positionHorizontalAction(){if(this.dropdownCovered())return 0;let{right:r,left:o,contentX:a,contentWidth:u,width:c}=this.dropdownBounds,{innerWidth:p}=window,m=r>p,T=o<0||m;if(T&&!this.position.includes("center"))return 2;if(this.position.includes("center")){let S=a+u/2,M=S-c/2<0,$=S+c/2>p;if(M||$)return 2}return!T&&this.shouldUseOriginalHorizontal()?1:this.shouldCenter()&&this.position!==this.originalPosition&&!this.position.includes("center")?3:0}dropdownCovered(){let{left:r,right:o}=this.dropdownBounds,{innerWidth:a}=window;if(this.position.includes("center"))return!1;let u=o>a&&this.position.includes("left"),c=r<0&&this.position.includes("right");return u||c}shouldCenter(){let{contentX:r,contentWidth:o,width:a}=this.dropdownBounds,u=r+o/2,c=u-a/2<0,p=u+a/2>window.innerWidth;return!(c||p)}shouldUseOriginalVertical(){let{height:r,contentY:o}=this.dropdownBounds,{innerHeight:a}=window,u=o+r;return this.originalPosition.includes("bottom")?r+u<a:o-r>0}shouldUseOriginalHorizontal(){let{width:r,contentX:o}=this.dropdownBounds,{innerWidth:a}=window,u=o+r;return this.position===this.originalPosition?!1:this.originalPosition.includes("center")?u<a&&o-r>0:this.originalPosition.includes("left")?o-r>0:u<a}adjustPositionVertical(){let{top:r,bottom:o}=this.dropdownBounds,{innerHeight:a}=window,u=this.positionVerticalAction();if(u===0)return;if(u===1){let _=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,_);return}let c=a-o>r?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,c);this.position=m}adjustPositionHorizontal(){let{left:r,right:o,width:a}=this.dropdownBounds,u=r<0,c=o>window.innerWidth,p=this.positionHorizontalAction();if(p===0)return;if(p===1){let P=this.originalPosition.split("-")[1];this.position=this.position.replace(/left|center|right/,P);return}let m=u?o:r,_=(u?a:-a)/2-20,T=m+_;if(u=T<0,c=T+a>window.innerWidth,!(u||c)&&p===3||p===3){let P=this.position.replace(/left|right/,"center");this.position=P;return}if(this.position.includes("center")){let P=u?"right":"left",gt=this.position.replace("center",P);this.position=gt;return}let $=this.position.replace(/left|right/,"center");this.position=$}setMenu(){var r;if(!this.menu){this.menu=this.shadowRoot.querySelector(".menu");let o={rootMargin:"0px",threshold:1},a=new IntersectionObserver(this.adjustPosition,o);this.dropdownResizeObserver=new ResizeObserver(this.adjustPosition);let u=this.menu;a.observe(u),this.dropdownResizeObserver.observe((r=this.scrollableParent)!=null?r:document.body)}}get scrollableParent(){let r;this.host||(this.host=this.getRootNode().host);let o=this.host;for(;!r;){let a=o==null?void 0:o.parentElement;if(this.isScrollable(a)){r=a;break}if(o=a,!o)break}return r}isScrollable(r){if(!r)return!1;let o=r.scrollHeight>r.clientHeight,a=window.getComputedStyle(r).overflowY,u=window.getComputedStyle(r).overflowX,c=a.indexOf("hidden")!==-1,p=u.indexOf("hidden")!==-1;return o&&!c&&!p}get renderHeader(){return this.name?L` <div class="header">
      <span class="text username">${this.name}</span>
      <span class="sv-hr"></span>
    </div>`:L``}toggle(){this.disabled||(this.originalPosition||(this.originalPosition=this.position),this.setMenu(),this.open=!this.open,this.emitEvent("open",{open:this.open}),this.open&&setTimeout(()=>this.adjustPosition()))}get supervizIcons(){var r;return(r=this.icons)==null?void 0:r.map(o=>L`<superviz-icon allowSetSize=${!0} name="${o}" size="sm"></superviz-icon>`)}get listOptions(){return this.options.map((r,o)=>{var u;let a={text:!0,"text-bold":!0,active:(r==null?void 0:r[this.returnTo])&&this.active===(r==null?void 0:r[this.returnTo])};return L`<li @click=${()=>this.callbackSelected(r)} class=${dt(a)}>
        ${(u=this.supervizIcons)==null?void 0:u.at(o)} <span class="option-label">${r[this.label]}</span>
      </li>`})}render(){let r={menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu--top-left":this.position==="top-left","menu--top-center":this.position==="top-center","menu--top-right":this.position==="top-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right","who-is-online-dropdown":this.name};return L`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
        ${this.tooltip()}
      </div>
      <div class="dropdown-list">
        <div class=${dt(r)}>
          ${this.renderHeader}
          <ul class="items">
            ${this.listOptions}
          </ul>
        </div>
      </div>
    `}};Vn.styles=ob,Vn.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},position:{type:String},options:{type:Array},label:{type:String},returnTo:{type:String},active:{type:[String,Object]},icons:{type:Array},name:{type:String},onHoverData:{type:Object},showTooltip:{type:Boolean},dropdown:{type:Object},canShowTooltip:{type:Boolean},drodpdownSizes:{type:Object},shiftTooltipLeft:{type:Boolean}},Vn=X([Q("superviz-dropdown")],Vn);v();v();var df=B`
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
`;v();var hf=et(G),sb=[hf.styles,df],Zn=class extends hf{constructor(){super();this.hide=()=>{this.showTooltip=!1};this.show=()=>{this.showTooltip=!0};this.adjustTooltipVerticalPosition=()=>{let{bottom:r,top:o}=this.tooltip.getBoundingClientRect(),a=window.innerHeight;this.tooltipVerticalPosition.includes("top")&&o<0&&(this.tooltipVerticalPosition=this.tooltipVerticalPosition.replace("top","bottom")),this.tooltipVerticalPosition.includes("bottom")&&r>a&&(this.tooltipVerticalPosition=this.tooltipVerticalPosition.replace("bottom","top"))};this.adjustTooltipHorizontalPosition=()=>{let{left:r,right:o}=this.tooltip.getBoundingClientRect(),a=window.innerWidth;r<0&&(this.tooltipHorizontalPosition=this.tooltipHorizontalPosition.replace("center","right")),o>a&&(this.tooltipHorizontalPosition=this.tooltipHorizontalPosition.replace("center","left"))};this.adjustTooltipPosition=()=>{this.tooltip||(this.tooltip=this.shadowRoot.querySelector(".superviz-who-is-online__tooltip")),this.adjustTooltipVerticalPosition(),this.adjustTooltipHorizontalPosition()};this.tooltipVerticalPosition="tooltip-bottom",this.tooltipHorizontalPosition="tooltip-center",this.showTooltip=!1,this.parentSizes={height:0,width:0}}firstUpdated(r){let{parentElement:o}=this;o==null||o.addEventListener("mouseenter",this.show),o==null||o.addEventListener("mouseleave",this.hide),this.tooltipVerticalPosition="tooltip-bottom",this.tooltipHorizontalPosition="tooltip-center"}disconnectedCallback(){super.disconnectedCallback();let{parentElement:r}=this;r==null||r.removeEventListener("mouseenter",this.show),r==null||r.removeEventListener("mouseleave",this.hide)}updated(r){if(r.has("showTooltip")&&this.showTooltip){let{parentElement:o}=this;if(!o)return;let{height:a,width:u}=o.getBoundingClientRect();(this.parentSizes.height!==a||this.parentSizes.width!==u)&&(this.parentSizes={height:a,width:u})}}renderTooltip(){var u,c,p,m;setTimeout(()=>this.adjustTooltipPosition());let r=this.tooltipVerticalPosition,o=this.tooltipHorizontalPosition,a={"superviz-who-is-online__tooltip":!0,"tooltip-extras":this.tooltipOnLeft,"show-tooltip":this.showTooltip,"shift-left":this.shiftTooltipLeft};return a[r]=!0,a[o]=!0,L`<div
      class=${dt(a)}
      style="--host-height: ${(u=this.parentSizes)==null?void 0:u.height}px; --host-width: ${(c=this.parentSizes)==null?void 0:c.width}px;"
    >
      <p class="tooltip-name">${(p=this.tooltipData)==null?void 0:p.name}</p>
      <p class="tooltip-action">${(m=this.tooltipData)==null?void 0:m.action}</p>
      <div class="superviz-who-is-online__tooltip-arrow"></div>
    </div>`}render(){return L`${this.renderTooltip()}`}};Zn.styles=sb,Zn.properties={tooltipData:{type:Object},tooltipOnLeft:{type:Boolean},showTooltip:{type:Boolean},tooltip:{type:Object},tooltipVerticalPosition:{type:String},tooltipHorizontalPosition:{type:String},parentSizes:{type:Object},shiftTooltipLeft:{type:Boolean}},Zn=X([Q("superviz-tooltip")],Zn);v();v();v();var _s=B`  
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
`;var ff=et(G),ab=[ff.styles,_s],Ir=class extends ff{constructor(){super(...arguments);this.getContainer=()=>window.document.querySelector("superviz-modal-container");this.createContainer=r=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(r)};this.createModal=({detail:r})=>{this.createContainer(r),window.document.body.appendChild(this.modal)};this.destroyModal=()=>{var r;this.modal=void 0,(r=this.getContainer())==null||r.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};Ir.styles=ab,Ir=X([Q("superviz-modal")],Ir);v();var pf=et(G),lb=[pf.styles,_s],Lr=class extends pf{constructor(){super(...arguments);this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))};this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(r){this.options=r}render(){let r=()=>L`
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
    `}};Lr.styles=lb,Lr=X([Q("superviz-modal-container")],Lr);v();v();v();v();v();var Rl=B`
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
`;v();var Dl=B`
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

  .comment-item__avatar img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
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
`;v();var Fl=B`
  .comments {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 288px;
  }

  .hidden {
    display: none;
  }
`;v();var kl=B`
  .comment-input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 288px;
    background: rgb(var(--sv-white));
    border-radius: 4px;
    border: 1px solid rgb(var(--sv-gray-300));
    position: relative;
    min-height: 40px;
    box-sizing: border-box;
  }

  .comment-input:focus-within {
    border: 1px solid rgb(var(--sv-gray-500));
  }

  #comment-input--textarea {
    all: unset;
    border: 0px;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    color: rgb(var(--sv-gray-700));
    font-family: Roboto;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-y: scroll;
    resize: none;
    line-height: 1rem;
    max-height: 5rem;
    appearance: none;
    height: 40px;
    width: 100%;
    box-sizing: border-box;

    padding-top: 7px;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 11px solid transparent;
    border-left: 11px solid transparent;
  }

  #comment-input--textarea:invalid {
    border-top: 15px solid transparent;
  }

  #comment-input--textarea::placeholder {
    color: rgb(var(--sv-gray-400));
    font-size: 14px;
    line-height: 14px;
  }

  .comment-input--options {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: hidden;
    height: 0;
    transition: 0.25s;
  }

  .active-textarea {
    height: 40px;
    padding: 4px 8px;
  }

  .sv-hr {
    border: none;
    width: 100%;
    opacity: 0;
    transition: 0.25s opacity linear, 0.25s visibility;
    visibility: hidden;
    height: 0;
    position: absolute;
  }

  .active-hr {
    border-top: 1px solid rgb(var(--sv-gray-300));
    opacity: 1;
    position: relative;
    visibility: visible;
  }

  .comment-actions {
    position: absolute;
    left: 8px;
    bottom: 3px;
    opacity: 0;
    transition: 0.25s opacity linear, 0.25s visibility;
    visibility: hidden;
  }

  .active-textarea > .comment-actions {
    opacity: 1;
    visibility: visible;
  }

  .mention {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 100%;
    color: rgb(var(--sv-gray-600));
    cursor: pointer;
    transition: 0.25s background-color ease-in;
  }

  .mention:hover {
    background-color: rgb(var(--sv-gray-200));
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
  }

  .align-send-btn > superviz-icon {
    cursor: pointer;
  }

  .comment-input--send-btn:disabled {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(var(--sv-gray-200));
    border-radius: 100%;
    width: 32px;
    height: 32px;
    color: rgb(var(--sv-gray-600));
    border: 0px;
  }

  .comment-input-options {
    display: flex;
    gap: 4px;
    position: absolute;
    right: 8px;
    bottom: 4px;
  }

  #comment-input--textarea:focus::placeholder {
    color: transparent;
  }
`;v();var Hl=B`
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

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
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
    position: relative;
    pointer-events: auto;
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
    box-sizing: border-box;
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

  .annotation-pin__avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;

    object-fit: contain;
  }

  .annotation-pin__avatar--add {
    color: rgb(var(--sv-gray-700));
    background-color: rgb(var(--sv-white));
  }

  .floating-input {
    position: absolute;
    top: -2px;
    opacity: 0;
  }

  .left .floating-input {
    right: auto;
    left: 0;
    transform: translateX(calc(-100% - 7px));
    opacity: 1;
  }

  .right .floating-input {
    left: auto;
    right: 0;
    transform: translateX(calc(100% + 7px));
    opacity: 1;
  }
`;v();var Wl=B`
  .select {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  .select-container {
    white-space: nowrap;
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
`;v();var Gl=B`
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
`;v();var Vl;function Zl(i){let e=i.querySelector("#superviz-comments");if(e&&!Vl){let r={childList:!0,attributes:!0,characterData:!0,subtree:!0};Vl=new MutationObserver(o=>{o.forEach(a=>{!a.removedNodes.length||a.removedNodes.forEach(u=>{u.id==="poweredby-footer"&&ub(i)})})}),Vl.observe(e,r)}}function ub(i){let e=document.createElement("div");e.id="poweredby-footer",e.className="footer";let r=document.createElement("div");r.className="powered-by powered-by--horizontal";let o=document.createElement("a");o.href="https://superviz.com/",o.target="_blank",o.className="link";let a=document.createElement("div");a.textContent="Powered by";let u=document.createElement("img");u.width=48,u.height=8.86,u.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",r.appendChild(o),o.appendChild(a),a.appendChild(u),e.appendChild(r);let c=i.getElementById("superviz-comments");c&&c.appendChild(e),Zl(i)}var mf=et(G),cb=[mf.styles,Rl,Gl],qn=class extends mf{constructor(){super();this.annotations=[],this.annotationFilter="all",this.waterMarkState=!1,this.side="left: 0px"}updateAnnotations(r){this.annotations=r}toggle(){this.emitEvent("toggle",{})}waterMarkStatus(r){this.waterMarkState=r}setFilter({detail:r}){let{filter:o}=r;this.annotationFilter=o}updated(r){super.updated(r),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(".superviz-comments");!o||(this.waterMarkState&&Zl(this.shadowRoot),o.setAttribute("style",this.side))})}render(){let r=[this.open?"container":"container-close","superviz-comments"].join(" "),o=L` <div id="poweredby-footer" class="footer">
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
    `}};qn.styles=cb,qn.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String}},qn=X([Q("superviz-comments")],qn);v();v();var db=et(G),hb=[db.styles,Pl],Yn=class extends et(G){close(){this.dispatchEvent(new CustomEvent("close"))}render(){return L`
      <div class="topbar">
        <span class="text text-bold">COMMENTS</span>
        <span @click=${this.close} class="toggle-icon">
          <superviz-icon name=${this.side} size="lg"></superviz-icon>
        </span>
      </div>
    `}};Yn.styles=hb,Yn.properties={side:{type:String}},Yn=X([Q("superviz-comments-topbar")],Yn);v();v();v();v();var{D:fb}=Rh;var gf=()=>document.createComment(""),Mr=(i,e,r)=>{var u;let o=i._$AA.parentNode,a=e===void 0?i._$AB:e._$AA;if(r===void 0){let c=o.insertBefore(gf(),a),p=o.insertBefore(gf(),a);r=new fb(c,p,i,i.options)}else{let c=r._$AB.nextSibling,p=r._$AM,m=p!==i;if(m){let _;(u=r._$AQ)==null||u.call(r,i),r._$AM=i,r._$AP!==void 0&&(_=i._$AU)!==p._$AU&&r._$AP(_)}if(c!==a||m){let _=r._$AA;for(;_!==c;){let T=_.nextSibling;o.insertBefore(_,a),_=T}}}return r},cn=(i,e,r=i)=>(i._$AI(e,r),i),pb={},vf=(i,e=pb)=>i._$AH=e,yf=i=>i._$AH,xs=i=>{var o;(o=i._$AP)==null||o.call(i,!1,!0);let e=i._$AA,r=i._$AB.nextSibling;for(;e!==r;){let a=e.nextSibling;e.remove(),e=a}};var _f=(i,e,r)=>{let o=new Map;for(let a=e;a<=r;a++)o.set(i[a],a);return o},Nr=ys(class extends Cr{constructor(i){if(super(i),i.type!==vs.CHILD)throw Error("repeat() can only be used in text expressions")}ht(i,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);let a=[],u=[],c=0;for(let p of i)a[c]=o?o(p,c):c,u[c]=r(p,c),c++;return{values:u,keys:a}}render(i,e,r){return this.ht(i,e,r).values}update(i,[e,r,o]){var gt;let a=yf(i),{values:u,keys:c}=this.ht(e,r,o);if(!Array.isArray(a))return this.dt=c,u;let p=(gt=this.dt)!=null?gt:this.dt=[],m=[],_,T,S=0,M=a.length-1,$=0,P=u.length-1;for(;S<=M&&$<=P;)if(a[S]===null)S++;else if(a[M]===null)M--;else if(p[S]===c[$])m[$]=cn(a[S],u[$]),S++,$++;else if(p[M]===c[P])m[P]=cn(a[M],u[P]),M--,P--;else if(p[S]===c[P])m[P]=cn(a[S],u[P]),Mr(i,m[P+1],a[S]),S++,P--;else if(p[M]===c[$])m[$]=cn(a[M],u[$]),Mr(i,a[S],a[M]),M--,$++;else if(_===void 0&&(_=_f(c,$,P),T=_f(p,S,M)),_.has(p[S]))if(_.has(p[M])){let ut=T.get(c[$]),vt=ut!==void 0?a[ut]:null;if(vt===null){let qt=Mr(i,a[S]);cn(qt,u[$]),m[$]=qt}else m[$]=cn(vt,u[$]),Mr(i,a[S],vt),a[ut]=null;$++}else xs(a[M]),M--;else xs(a[S]),S++;for(;$<=P;){let ut=Mr(i,m[P+1]);cn(ut,u[$]),m[$++]=ut}for(;S<=M;){let ut=a[S++];ut!==null&&xs(ut)}return this.dt=c,vf(i,m),We}});var wf=et(G),mb=[wf.styles,Fl],Jn=class extends wf{constructor(){super();this.unselectAnnotation=()=>{this.selectedAnnotation=null};this.unselectAnnotationEsc=r=>{r&&(r==null?void 0:r.key)!=="Escape"||(this.selectedAnnotation=null)};this.selectAnnotation=({detail:r})=>{let{uuid:o}=r;if(this.selectedAnnotation===o){this.selectedAnnotation=null;return}this.selectedAnnotation=o};this.checkLastAnnotation=r=>{var u,c;let o=this.annotations.filter(p=>p.resolved),a=this.annotations.filter(p=>!p.resolved);return this.annotationFilter==="all"?r===((u=o[o.length-1])==null?void 0:u.uuid):r===((c=a[a.length-1])==null?void 0:c.uuid)};this.annotations=[]}updated(r){super.updated(r),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(`[uuid='${this.selectedAnnotation}']`);if(!o)return;let a=this.lastCommentId===this.selectedAnnotation,u=a?0:-150,c=o.getClientRects()[0];!c||(this.scrollBy(0,c.y+u),a&&setTimeout(()=>{this.scrollBy(0,c.y+u)},200))})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("select-annotation",this.selectAnnotation),window.document.body.addEventListener("keyup",this.unselectAnnotationEsc),window.document.body.addEventListener("unselect-annotation",this.unselectAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("select-annotation",this.selectAnnotation),window.document.body.removeEventListener("keyup",this.unselectAnnotationEsc),window.document.body.removeEventListener("unselect-annotation",this.unselectAnnotation)}render(){return L` ${Nr(this.annotations.filter(r=>{var o;return(o=r.comments)==null?void 0:o.length}),r=>r.uuid,r=>L`
        <superviz-comments-annotation-item
          annotation=${JSON.stringify(r)}
          selected="${this.selectedAnnotation}"
          annotationFilter=${this.annotationFilter}
          uuid=${r.uuid}
          isLastComment=${this.checkLastAnnotation(r.uuid)}
        >
        </superviz-comments-annotation-item>
      `)}`}};Jn.styles=mb,Jn.properties={annotations:{type:Object},selectedAnnotation:{type:String},annotationFilter:{type:String}},Jn=X([Q("superviz-comments-content")],Jn);v();v();v();v();v();var Ge=class extends Error{},bs=class extends Ge{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},Es=class extends Ge{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},Ts=class extends Ge{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},Ve=class extends Ge{},Rr=class extends Ge{constructor(e){super(`Invalid unit ${e}`)}},Rt=class extends Ge{},we=class extends Ge{constructor(){super("Zone is an abstract class")}};v();v();v();var R="numeric",xe="short",ee="long",dn={year:R,month:R,day:R},Ci={year:R,month:xe,day:R},ql={year:R,month:xe,day:R,weekday:xe},Ii={year:R,month:ee,day:R},Li={year:R,month:ee,day:R,weekday:ee},Mi={hour:R,minute:R},Ni={hour:R,minute:R,second:R},Ri={hour:R,minute:R,second:R,timeZoneName:xe},Pi={hour:R,minute:R,second:R,timeZoneName:ee},Di={hour:R,minute:R,hourCycle:"h23"},Fi={hour:R,minute:R,second:R,hourCycle:"h23"},ki={hour:R,minute:R,second:R,hourCycle:"h23",timeZoneName:xe},Hi={hour:R,minute:R,second:R,hourCycle:"h23",timeZoneName:ee},zi={year:R,month:R,day:R,hour:R,minute:R},Ui={year:R,month:R,day:R,hour:R,minute:R,second:R},Wi={year:R,month:xe,day:R,hour:R,minute:R},Bi={year:R,month:xe,day:R,hour:R,minute:R,second:R},Yl={year:R,month:xe,day:R,weekday:xe,hour:R,minute:R},Gi={year:R,month:ee,day:R,hour:R,minute:R,timeZoneName:xe},Vi={year:R,month:ee,day:R,hour:R,minute:R,second:R,timeZoneName:xe},Zi={year:R,month:ee,day:R,weekday:ee,hour:R,minute:R,timeZoneName:ee},qi={year:R,month:ee,day:R,weekday:ee,hour:R,minute:R,second:R,timeZoneName:ee};v();v();v();v();var Zt=class{get type(){throw new we}get name(){throw new we}get ianaName(){return this.name}get isUniversal(){throw new we}offsetName(e,r){throw new we}formatOffset(e,r){throw new we}offset(e){throw new we}equals(e){throw new we}get isValid(){throw new we}};var Jl=null,$e=class extends Zt{static get instance(){return Jl===null&&(Jl=new $e),Jl}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:o}){return As(e,r,o)}formatOffset(e,r){return hn(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}};v();var $s={};function gb(i){return $s[i]||($s[i]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:i,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),$s[i]}var vb={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function yb(i,e){let r=i.format(e).replace(/\u200E/g,""),o=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,a,u,c,p,m,_,T]=o;return[c,a,u,p,m,_,T]}function _b(i,e){let r=i.formatToParts(e),o=[];for(let a=0;a<r.length;a++){let{type:u,value:c}=r[a],p=vb[u];u==="era"?o[p]=c:Y(p)||(o[p]=parseInt(c,10))}return o}var Os={},Ct=class extends Zt{static create(e){return Os[e]||(Os[e]=new Ct(e)),Os[e]}static resetCache(){Os={},$s={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(r){return!1}}constructor(e){super(),this.zoneName=e,this.valid=Ct.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:o}){return As(e,r,o,this.name)}formatOffset(e,r){return hn(this.offset(e),r)}offset(e){let r=new Date(e);if(isNaN(r))return NaN;let o=gb(this.name),[a,u,c,p,m,_,T]=o.formatToParts?_b(o,r):yb(o,r);p==="BC"&&(a=-Math.abs(a)+1);let M=Pr({year:a,month:u,day:c,hour:m===24?0:m,minute:_,second:T,millisecond:0}),$=+r,P=$%1e3;return $-=P>=0?P:1e3+P,(M-$)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}};v();var xf={};function wb(i,e={}){let r=JSON.stringify([i,e]),o=xf[r];return o||(o=new Intl.ListFormat(i,e),xf[r]=o),o}var Kl={};function jl(i,e={}){let r=JSON.stringify([i,e]),o=Kl[r];return o||(o=new Intl.DateTimeFormat(i,e),Kl[r]=o),o}var Xl={};function xb(i,e={}){let r=JSON.stringify([i,e]),o=Xl[r];return o||(o=new Intl.NumberFormat(i,e),Xl[r]=o),o}var Ql={};function bb(i,e={}){let c=e,{base:r}=c,o=al(c,["base"]),a=JSON.stringify([i,o]),u=Ql[a];return u||(u=new Intl.RelativeTimeFormat(i,e),Ql[a]=u),u}var Yi=null;function Eb(){return Yi||(Yi=new Intl.DateTimeFormat().resolvedOptions().locale,Yi)}function Tb(i){let e=i.indexOf("-x-");e!==-1&&(i=i.substring(0,e));let r=i.indexOf("-u-");if(r===-1)return[i];{let o,a;try{o=jl(i).resolvedOptions(),a=i}catch(p){let m=i.substring(0,r);o=jl(m).resolvedOptions(),a=m}let{numberingSystem:u,calendar:c}=o;return[a,u,c]}}function Sb(i,e,r){return(r||e)&&(i.includes("-u-")||(i+="-u"),r&&(i+=`-ca-${r}`),e&&(i+=`-nu-${e}`)),i}function Ab(i){let e=[];for(let r=1;r<=12;r++){let o=H.utc(2009,r,1);e.push(i(o))}return e}function Ob(i){let e=[];for(let r=1;r<=7;r++){let o=H.utc(2016,11,13+r);e.push(i(o))}return e}function Cs(i,e,r,o){let a=i.listingMode();return a==="error"?null:a==="en"?r(e):o(e)}function $b(i){return i.numberingSystem&&i.numberingSystem!=="latn"?!1:i.numberingSystem==="latn"||!i.locale||i.locale.startsWith("en")||new Intl.DateTimeFormat(i.intl).resolvedOptions().numberingSystem==="latn"}var tu=class{constructor(e,r,o){this.padTo=o.padTo||0,this.floor=o.floor||!1;let p=o,{padTo:a,floor:u}=p,c=al(p,["padTo","floor"]);if(!r||Object.keys(c).length>0){let m=k({useGrouping:!1},o);o.padTo>0&&(m.minimumIntegerDigits=o.padTo),this.inf=xb(e,m)}}format(e){if(this.inf){let r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{let r=this.floor?Math.floor(e):Dr(e,3);return wt(r,this.padTo)}}},eu=class{constructor(e,r,o){this.opts=o,this.originalZone=void 0;let a;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){let c=-1*(e.offset/60),p=c>=0?`Etc/GMT+${c}`:`Etc/GMT${c}`;e.offset!==0&&Ct.create(p).valid?(a=p,this.dt=e):(a="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,a=e.zone.name):(a="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);let u=k({},this.opts);u.timeZone=u.timeZone||a,this.dtf=jl(r,u)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){let o=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return At(k({},r),{value:o})}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},nu=class{constructor(e,r,o){this.opts=k({style:"long"},o),!r&&Is()&&(this.rtf=bb(e,o))}format(e,r){return this.rtf?this.rtf.format(e,r):bf(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}},it=class{static fromOpts(e){return it.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,r,o,a=!1){let u=e||lt.defaultLocale,c=u||(a?"en-US":Eb()),p=r||lt.defaultNumberingSystem,m=o||lt.defaultOutputCalendar;return new it(c,p,m,u)}static resetCache(){Yi=null,Kl={},Xl={},Ql={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:o}={}){return it.create(e,r,o)}constructor(e,r,o,a){let[u,c,p]=Tb(e);this.locale=u,this.numberingSystem=r||c||null,this.outputCalendar=o||p||null,this.intl=Sb(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=$b(this)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:it.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone(At(k({},e),{defaultToEN:!0}))}redefaultToSystem(e={}){return this.clone(At(k({},e),{defaultToEN:!1}))}months(e,r=!1){return Cs(this,e,ru,()=>{let o=r?{month:e,day:"numeric"}:{month:e},a=r?"format":"standalone";return this.monthsCache[a][e]||(this.monthsCache[a][e]=Ab(u=>this.extract(u,o,"month"))),this.monthsCache[a][e]})}weekdays(e,r=!1){return Cs(this,e,iu,()=>{let o=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},a=r?"format":"standalone";return this.weekdaysCache[a][e]||(this.weekdaysCache[a][e]=Ob(u=>this.extract(u,o,"weekday"))),this.weekdaysCache[a][e]})}meridiems(){return Cs(this,void 0,()=>ou,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[H.utc(2016,11,13,9),H.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Cs(this,e,su,()=>{let r={era:e};return this.eraCache[e]||(this.eraCache[e]=[H.utc(-40,1,1),H.utc(2017,1,1)].map(o=>this.extract(o,r,"era"))),this.eraCache[e]})}extract(e,r,o){let a=this.dtFormatter(e,r),u=a.formatToParts(),c=u.find(p=>p.type.toLowerCase()===o);return c?c.value:null}numberFormatter(e={}){return new tu(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new eu(e,this.intl,r)}relFormatter(e={}){return new nu(this.intl,this.isEnglish(),e)}listFormatter(e={}){return wb(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}};v();v();var lu=null,xt=class extends Zt{static get utcInstance(){return lu===null&&(lu=new xt(0)),lu}static instance(e){return e===0?xt.utcInstance:new xt(e)}static parseSpecifier(e){if(e){let r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new xt(Kn(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${hn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${hn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return hn(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}};v();var Fr=class extends Zt{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function be(i,e){let r;if(Y(i)||i===null)return e;if(i instanceof Zt)return i;if(Ef(i)){let o=i.toLowerCase();return o==="default"?e:o==="local"||o==="system"?$e.instance:o==="utc"||o==="gmt"?xt.utcInstance:xt.parseSpecifier(o)||Ct.create(i)}else return Ce(i)?xt.instance(i):typeof i=="object"&&"offset"in i&&typeof i.offset=="function"?i:new Fr(i)}var Tf=()=>Date.now(),Sf="system",Af=null,Of=null,$f=null,Cf=60,If,lt=class{static get now(){return Tf}static set now(e){Tf=e}static set defaultZone(e){Sf=e}static get defaultZone(){return be(Sf,$e.instance)}static get defaultLocale(){return Af}static set defaultLocale(e){Af=e}static get defaultNumberingSystem(){return Of}static set defaultNumberingSystem(e){Of=e}static get defaultOutputCalendar(){return $f}static set defaultOutputCalendar(e){$f=e}static get twoDigitCutoffYear(){return Cf}static set twoDigitCutoffYear(e){Cf=e%100}static get throwOnInvalid(){return If}static set throwOnInvalid(e){If=e}static resetCaches(){it.resetCache(),Ct.resetCache()}};function Y(i){return typeof i=="undefined"}function Ce(i){return typeof i=="number"}function Ji(i){return typeof i=="number"&&i%1===0}function Ef(i){return typeof i=="string"}function Lf(i){return Object.prototype.toString.call(i)==="[object Date]"}function Is(){try{return typeof Intl!="undefined"&&!!Intl.RelativeTimeFormat}catch(i){return!1}}function Mf(i){return Array.isArray(i)?i:[i]}function uu(i,e,r){if(i.length!==0)return i.reduce((o,a)=>{let u=[e(a),a];return o&&r(o[0],u[0])===o[0]?o:u},null)[1]}function Nf(i,e){return e.reduce((r,o)=>(r[o]=i[o],r),{})}function fn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Ie(i,e,r){return Ji(i)&&i>=e&&i<=r}function Cb(i,e){return i-e*Math.floor(i/e)}function wt(i,e=2){let r=i<0,o;return r?o="-"+(""+-i).padStart(e,"0"):o=(""+i).padStart(e,"0"),o}function Ze(i){if(!(Y(i)||i===null||i===""))return parseInt(i,10)}function pn(i){if(!(Y(i)||i===null||i===""))return parseFloat(i)}function Ki(i){if(!(Y(i)||i===null||i==="")){let e=parseFloat("0."+i)*1e3;return Math.floor(e)}}function Dr(i,e,r=!1){let o=hh(10,e);return(r?Math.trunc:Math.round)(i*o)/o}function jn(i){return i%4===0&&(i%100!==0||i%400===0)}function Xn(i){return jn(i)?366:365}function kr(i,e){let r=Cb(e-1,12)+1,o=i+(e-r)/12;return r===2?jn(o)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Pr(i){let e=Date.UTC(i.year,i.month-1,i.day,i.hour,i.minute,i.second,i.millisecond);return i.year<100&&i.year>=0&&(e=new Date(e),e.setUTCFullYear(i.year,i.month-1,i.day)),+e}function Hr(i){let e=(i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400))%7,r=i-1,o=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7;return e===4||o===3?53:52}function ji(i){return i>99?i:i>lt.twoDigitCutoffYear?1900+i:2e3+i}function As(i,e,r,o=null){let a=new Date(i),u={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};o&&(u.timeZone=o);let c=k({timeZoneName:e},u),p=new Intl.DateTimeFormat(r,c).formatToParts(a).find(m=>m.type.toLowerCase()==="timezonename");return p?p.value:null}function Kn(i,e){let r=parseInt(i,10);Number.isNaN(r)&&(r=0);let o=parseInt(e,10)||0,a=r<0||Object.is(r,-0)?-o:o;return r*60+a}function cu(i){let e=Number(i);if(typeof i=="boolean"||i===""||Number.isNaN(e))throw new Rt(`Invalid unit value ${i}`);return e}function zr(i,e){let r={};for(let o in i)if(fn(i,o)){let a=i[o];if(a==null)continue;r[e(o)]=cu(a)}return r}function hn(i,e){let r=Math.trunc(Math.abs(i/60)),o=Math.trunc(Math.abs(i%60)),a=i>=0?"+":"-";switch(e){case"short":return`${a}${wt(r,2)}:${wt(o,2)}`;case"narrow":return`${a}${r}${o>0?`:${o}`:""}`;case"techie":return`${a}${wt(r,2)}${wt(o,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Xi(i){return Nf(i,["hour","minute","second","millisecond"])}var Ib=["January","February","March","April","May","June","July","August","September","October","November","December"],du=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Lb=["J","F","M","A","M","J","J","A","S","O","N","D"];function ru(i){switch(i){case"narrow":return[...Lb];case"short":return[...du];case"long":return[...Ib];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var hu=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],fu=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Mb=["M","T","W","T","F","S","S"];function iu(i){switch(i){case"narrow":return[...Mb];case"short":return[...fu];case"long":return[...hu];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var ou=["AM","PM"],Nb=["Before Christ","Anno Domini"],Rb=["BC","AD"],Pb=["B","A"];function su(i){switch(i){case"narrow":return[...Pb];case"short":return[...Rb];case"long":return[...Nb];default:return null}}function Rf(i){return ou[i.hour<12?0:1]}function Pf(i,e){return iu(e)[i.weekday-1]}function Df(i,e){return ru(e)[i.month-1]}function Ff(i,e){return su(e)[i.year<0?0:1]}function bf(i,e,r="always",o=!1){let a={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},u=["hours","minutes","seconds"].indexOf(i)===-1;if(r==="auto"&&u){let S=i==="days";switch(e){case 1:return S?"tomorrow":`next ${a[i][0]}`;case-1:return S?"yesterday":`last ${a[i][0]}`;case 0:return S?"today":`this ${a[i][0]}`;default:}}let c=Object.is(e,-0)||e<0,p=Math.abs(e),m=p===1,_=a[i],T=o?m?_[1]:_[2]||_[1]:m?a[i][0]:i;return c?`${p} ${T} ago`:`in ${p} ${T}`}function kf(i,e){let r="";for(let o of i)o.literal?r+=o.val:r+=e(o.val);return r}var Db={D:dn,DD:Ci,DDD:Ii,DDDD:Li,t:Mi,tt:Ni,ttt:Ri,tttt:Pi,T:Di,TT:Fi,TTT:ki,TTTT:Hi,f:zi,ff:Wi,fff:Gi,ffff:Zi,F:Ui,FF:Bi,FFF:Vi,FFFF:qi},bt=class{static create(e,r={}){return new bt(e,r)}static parseFormat(e){let r=null,o="",a=!1,u=[];for(let c=0;c<e.length;c++){let p=e.charAt(c);p==="'"?(o.length>0&&u.push({literal:a||/^\s+$/.test(o),val:o}),r=null,o="",a=!a):a||p===r?o+=p:(o.length>0&&u.push({literal:/^\s+$/.test(o),val:o}),o=p,r=p)}return o.length>0&&u.push({literal:a||/^\s+$/.test(o),val:o}),u}static macroTokenToFormatOpts(e){return Db[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,k(k({},this.opts),r)).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,k(k({},this.opts),r))}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return wt(e,r);let o=k({},this.opts);return r>0&&(o.padTo=r),this.loc.numberFormatter(o).format(e)}formatDateTimeFromString(e,r){let o=this.loc.listingMode()==="en",a=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",u=($,P)=>this.loc.extract(e,$,P),c=$=>e.isOffsetFixed&&e.offset===0&&$.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,$.format):"",p=()=>o?Rf(e):u({hour:"numeric",hourCycle:"h12"},"dayperiod"),m=($,P)=>o?Df(e,$):u(P?{month:$}:{month:$,day:"numeric"},"month"),_=($,P)=>o?Pf(e,$):u(P?{weekday:$}:{weekday:$,month:"long",day:"numeric"},"weekday"),T=$=>{let P=bt.macroTokenToFormatOpts($);return P?this.formatWithSystemDefault(e,P):$},S=$=>o?Ff(e,$):u({era:$},"era"),M=$=>{switch($){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return c({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return c({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return c({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return p();case"d":return a?u({day:"numeric"},"day"):this.num(e.day);case"dd":return a?u({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return _("short",!0);case"cccc":return _("long",!0);case"ccccc":return _("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return _("short",!1);case"EEEE":return _("long",!1);case"EEEEE":return _("narrow",!1);case"L":return a?u({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return a?u({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return m("short",!0);case"LLLL":return m("long",!0);case"LLLLL":return m("narrow",!0);case"M":return a?u({month:"numeric"},"month"):this.num(e.month);case"MM":return a?u({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return m("short",!1);case"MMMM":return m("long",!1);case"MMMMM":return m("narrow",!1);case"y":return a?u({year:"numeric"},"year"):this.num(e.year);case"yy":return a?u({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return a?u({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return a?u({year:"numeric"},"year"):this.num(e.year,6);case"G":return S("short");case"GG":return S("long");case"GGGGG":return S("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return T($)}};return kf(bt.parseFormat(r),M)}formatDurationFromString(e,r){let o=m=>{switch(m[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},a=m=>_=>{let T=o(_);return T?this.num(m.get(T),_.length):_},u=bt.parseFormat(r),c=u.reduce((m,{literal:_,val:T})=>_?m:m.concat(T),[]),p=e.shiftTo(...c.map(o).filter(m=>m));return kf(u,a(p))}};v();var Pt=class{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}};v();var zf=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Wr(...i){let e=i.reduce((r,o)=>r+o.source,"");return RegExp(`^${e}$`)}function Br(...i){return e=>i.reduce(([r,o,a],u)=>{let[c,p,m]=u(e,a);return[k(k({},r),c),p||o,m]},[{},null,1]).slice(0,2)}function Gr(i,...e){if(i==null)return[null,null];for(let[r,o]of e){let a=r.exec(i);if(a)return o(a)}return[null,null]}function Uf(...i){return(e,r)=>{let o={},a;for(a=0;a<i.length;a++)o[i[a]]=Ze(e[r+a]);return[o,null,r+a]}}var Wf=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Fb=`(?:${Wf.source}?(?:\\[(${zf.source})\\])?)?`,pu=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Bf=RegExp(`${pu.source}${Fb}`),mu=RegExp(`(?:T${Bf.source})?`),kb=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Hb=/(\d{4})-?W(\d\d)(?:-?(\d))?/,zb=/(\d{4})-?(\d{3})/,Ub=Uf("weekYear","weekNumber","weekDay"),Wb=Uf("year","ordinal"),Bb=/(\d{4})-(\d\d)-(\d\d)/,Gf=RegExp(`${pu.source} ?(?:${Wf.source}|(${zf.source}))?`),Gb=RegExp(`(?: ${Gf.source})?`);function Ur(i,e,r){let o=i[e];return Y(o)?r:Ze(o)}function Vb(i,e){return[{year:Ur(i,e),month:Ur(i,e+1,1),day:Ur(i,e+2,1)},null,e+3]}function Vr(i,e){return[{hours:Ur(i,e,0),minutes:Ur(i,e+1,0),seconds:Ur(i,e+2,0),milliseconds:Ki(i[e+3])},null,e+4]}function Qi(i,e){let r=!i[e]&&!i[e+1],o=Kn(i[e+1],i[e+2]),a=r?null:xt.instance(o);return[{},a,e+3]}function to(i,e){let r=i[e]?Ct.create(i[e]):null;return[{},r,e+1]}var Zb=RegExp(`^T?${pu.source}$`),qb=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Yb(i){let[e,r,o,a,u,c,p,m,_]=i,T=e[0]==="-",S=m&&m[0]==="-",M=($,P=!1)=>$!==void 0&&(P||$&&T)?-$:$;return[{years:M(pn(r)),months:M(pn(o)),weeks:M(pn(a)),days:M(pn(u)),hours:M(pn(c)),minutes:M(pn(p)),seconds:M(pn(m),m==="-0"),milliseconds:M(Ki(_),S)}]}var Jb={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function gu(i,e,r,o,a,u,c){let p={year:e.length===2?ji(Ze(e)):Ze(e),month:du.indexOf(r)+1,day:Ze(o),hour:Ze(a),minute:Ze(u)};return c&&(p.second=Ze(c)),i&&(p.weekday=i.length>3?hu.indexOf(i)+1:fu.indexOf(i)+1),p}var Kb=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function jb(i){let[,e,r,o,a,u,c,p,m,_,T,S]=i,M=gu(e,a,o,r,u,c,p),$;return m?$=Jb[m]:_?$=0:$=Kn(T,S),[M,new xt($)]}function Xb(i){return i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var Qb=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,tE=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,eE=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Hf(i){let[,e,r,o,a,u,c,p]=i;return[gu(e,a,o,r,u,c,p),xt.utcInstance]}function nE(i){let[,e,r,o,a,u,c,p]=i;return[gu(e,p,r,o,a,u,c),xt.utcInstance]}var rE=Wr(kb,mu),iE=Wr(Hb,mu),oE=Wr(zb,mu),sE=Wr(Bf),Vf=Br(Vb,Vr,Qi,to),aE=Br(Ub,Vr,Qi,to),lE=Br(Wb,Vr,Qi,to),uE=Br(Vr,Qi,to);function Zf(i){return Gr(i,[rE,Vf],[iE,aE],[oE,lE],[sE,uE])}function qf(i){return Gr(Xb(i),[Kb,jb])}function Yf(i){return Gr(i,[Qb,Hf],[tE,Hf],[eE,nE])}function Jf(i){return Gr(i,[qb,Yb])}var cE=Br(Vr);function Kf(i){return Gr(i,[Zb,cE])}var dE=Wr(Bb,Gb),hE=Wr(Gf),fE=Br(Vr,Qi,to);function jf(i){return Gr(i,[dE,Vf],[hE,fE])}var Xf="Invalid Duration",tp={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},pE=k({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},tp),ce=146097/400,Zr=146097/4800,mE=k({years:{quarters:4,months:12,weeks:ce/7,days:ce,hours:ce*24,minutes:ce*24*60,seconds:ce*24*60*60,milliseconds:ce*24*60*60*1e3},quarters:{months:3,weeks:ce/28,days:ce/4,hours:ce*24/4,minutes:ce*24*60/4,seconds:ce*24*60*60/4,milliseconds:ce*24*60*60*1e3/4},months:{weeks:Zr/7,days:Zr,hours:Zr*24,minutes:Zr*24*60,seconds:Zr*24*60*60,milliseconds:Zr*24*60*60*1e3}},tp),Qn=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],gE=Qn.slice(0).reverse();function mn(i,e,r=!1){let o={values:r?e.values:k(k({},i.values),e.values||{}),loc:i.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||i.conversionAccuracy,matrix:e.matrix||i.matrix};return new K(o)}function ep(i,e){var o;let r=(o=e.milliseconds)!=null?o:0;for(let a of gE.slice(1))e[a]&&(r+=e[a]*i[a].milliseconds);return r}function Qf(i,e){let r=ep(i,e)<0?-1:1;Qn.reduceRight((o,a)=>{if(Y(e[a]))return o;if(o){let u=e[o]*r,c=i[a][o],p=Math.floor(u/c);e[a]+=p*r,e[o]-=p*c*r}return a},null),Qn.reduce((o,a)=>{if(Y(e[a]))return o;if(o){let u=e[o]%1;e[o]-=u,e[a]+=u*i[o][a]}return a},null)}function vE(i){let e={};for(let[r,o]of Object.entries(i))o!==0&&(e[r]=o);return e}var K=class{constructor(e){let r=e.conversionAccuracy==="longterm"||!1,o=r?mE:pE;e.matrix&&(o=e.matrix),this.values=e.values,this.loc=e.loc||it.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=o,this.isLuxonDuration=!0}static fromMillis(e,r){return K.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new Rt(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new K({values:zr(e,K.normalizeUnit),loc:it.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if(Ce(e))return K.fromMillis(e);if(K.isDuration(e))return e;if(typeof e=="object")return K.fromObject(e);throw new Rt(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){let[o]=Jf(e);return o?K.fromObject(o,r):K.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){let[o]=Kf(e);return o?K.fromObject(o,r):K.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new Rt("need to specify a reason the Duration is invalid");let o=e instanceof Pt?e:new Pt(e,r);if(lt.throwOnInvalid)throw new Ts(o);return new K({invalid:o})}static normalizeUnit(e){let r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new Rr(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){let o=At(k({},r),{floor:r.round!==!1&&r.floor!==!1});return this.isValid?bt.create(this.loc,o).formatDurationFromString(this,e):Xf}toHuman(e={}){if(!this.isValid)return Xf;let r=Qn.map(o=>{let a=this.values[o];return Y(a)?null:this.loc.numberFormatter(At(k({style:"unit",unitDisplay:"long"},e),{unit:o.slice(0,-1)})).format(a)}).filter(o=>o);return this.loc.listFormatter(k({type:"conjunction",style:e.listStyle||"narrow"},e)).format(r)}toObject(){return this.isValid?k({},this.values):{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=Dr(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let r=this.toMillis();return r<0||r>=864e5?null:(e=At(k({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e),{includeOffset:!1}),H.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?ep(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e),o={};for(let a of Qn)(fn(r.values,a)||fn(this.values,a))&&(o[a]=r.get(a)+this.get(a));return mn(this,{values:o},!0)}minus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;let r={};for(let o of Object.keys(this.values))r[o]=cu(e(this.values[o],o));return mn(this,{values:r},!0)}get(e){return this[K.normalizeUnit(e)]}set(e){if(!this.isValid)return this;let r=k(k({},this.values),zr(e,K.normalizeUnit));return mn(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:o,matrix:a}={}){let c={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:a,conversionAccuracy:o};return mn(this,c)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return Qf(this.matrix,e),mn(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=vE(this.normalize().shiftToAll().toObject());return mn(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(c=>K.normalizeUnit(c));let r={},o={},a=this.toObject(),u;for(let c of Qn)if(e.indexOf(c)>=0){u=c;let p=0;for(let _ in o)p+=this.matrix[_][c]*o[_],o[_]=0;Ce(a[c])&&(p+=a[c]);let m=Math.trunc(p);r[c]=m,o[c]=(p*1e3-m*1e3)/1e3}else Ce(a[c])&&(o[c]=a[c]);for(let c in o)o[c]!==0&&(r[u]+=c===u?o[c]:o[c]/this.matrix[u][c]);return Qf(this.matrix,r),mn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return mn(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(o,a){return o===void 0||o===0?a===void 0||a===0:o===a}for(let o of Qn)if(!r(this.values[o],e.values[o]))return!1;return!0}};v();var qr="Invalid Interval";function yE(i,e){return!i||!i.isValid?ft.invalid("missing or invalid start"):!e||!e.isValid?ft.invalid("missing or invalid end"):e<i?ft.invalid("end before start",`The end of an interval must be after its start, but you had start=${i.toISO()} and end=${e.toISO()}`):null}var ft=class{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new Rt("need to specify a reason the Interval is invalid");let o=e instanceof Pt?e:new Pt(e,r);if(lt.throwOnInvalid)throw new Es(o);return new ft({invalid:o})}static fromDateTimes(e,r){let o=Yr(e),a=Yr(r),u=yE(o,a);return u==null?new ft({start:o,end:a}):u}static after(e,r){let o=K.fromDurationLike(r),a=Yr(e);return ft.fromDateTimes(a,a.plus(o))}static before(e,r){let o=K.fromDurationLike(r),a=Yr(e);return ft.fromDateTimes(a.minus(o),a)}static fromISO(e,r){let[o,a]=(e||"").split("/",2);if(o&&a){let u,c;try{u=H.fromISO(o,r),c=u.isValid}catch(_){c=!1}let p,m;try{p=H.fromISO(a,r),m=p.isValid}catch(_){m=!1}if(c&&m)return ft.fromDateTimes(u,p);if(c){let _=K.fromISO(a,r);if(_.isValid)return ft.after(u,_)}else if(m){let _=K.fromISO(o,r);if(_.isValid)return ft.before(p,_)}}return ft.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds"){if(!this.isValid)return NaN;let r=this.start.startOf(e),o=this.end.startOf(e);return Math.floor(o.diff(r,e).get(e))+(o.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?ft.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];let r=e.map(Yr).filter(c=>this.contains(c)).sort(),o=[],{s:a}=this,u=0;for(;a<this.e;){let c=r[u]||this.e,p=+c>+this.e?this.e:c;o.push(ft.fromDateTimes(a,p)),a=p,u+=1}return o}splitBy(e){let r=K.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:o}=this,a=1,u,c=[];for(;o<this.e;){let p=this.start.plus(r.mapUnits(m=>m*a));u=+p>+this.e?this.e:p,c.push(ft.fromDateTimes(o,u)),o=u,a+=1}return c}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let r=this.s>e.s?this.s:e.s,o=this.e<e.e?this.e:e.e;return r>=o?null:ft.fromDateTimes(r,o)}union(e){if(!this.isValid)return this;let r=this.s<e.s?this.s:e.s,o=this.e>e.e?this.e:e.e;return ft.fromDateTimes(r,o)}static merge(e){let[r,o]=e.sort((a,u)=>a.s-u.s).reduce(([a,u],c)=>u?u.overlaps(c)||u.abutsStart(c)?[a,u.union(c)]:[a.concat([u]),c]:[a,c],[[],null]);return o&&r.push(o),r}static xor(e){let r=null,o=0,a=[],u=e.map(m=>[{time:m.s,type:"s"},{time:m.e,type:"e"}]),c=Array.prototype.concat(...u),p=c.sort((m,_)=>m.time-_.time);for(let m of p)o+=m.type==="s"?1:-1,o===1?r=m.time:(r&&+r!=+m.time&&a.push(ft.fromDateTimes(r,m.time)),r=null);return ft.merge(a)}difference(...e){return ft.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:qr}toLocaleString(e=dn,r={}){return this.isValid?bt.create(this.s.loc.clone(r),e).formatInterval(this):qr}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:qr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:qr}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:qr}toFormat(e,{separator:r=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:qr}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):K.invalid(this.invalidReason)}mapEndpoints(e){return ft.fromDateTimes(e(this.s),e(this.e))}};v();var qe=class{static hasDST(e=lt.defaultZone){let r=H.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return Ct.isValidZone(e)}static normalizeZone(e){return be(e,lt.defaultZone)}static months(e="long",{locale:r=null,numberingSystem:o=null,locObj:a=null,outputCalendar:u="gregory"}={}){return(a||it.create(r,o,u)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:o=null,locObj:a=null,outputCalendar:u="gregory"}={}){return(a||it.create(r,o,u)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:o=null,locObj:a=null}={}){return(a||it.create(r,o,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:o=null,locObj:a=null}={}){return(a||it.create(r,o,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return it.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return it.create(r,null,"gregory").eras(e)}static features(){return{relative:Is()}}};v();function np(i,e){let r=a=>a.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),o=r(e)-r(i);return Math.floor(K.fromMillis(o).as("days"))}function _E(i,e,r){let o=[["years",(m,_)=>_.year-m.year],["quarters",(m,_)=>_.quarter-m.quarter+(_.year-m.year)*4],["months",(m,_)=>_.month-m.month+(_.year-m.year)*12],["weeks",(m,_)=>{let T=np(m,_);return(T-T%7)/7}],["days",np]],a={},u=i,c,p;for(let[m,_]of o)r.indexOf(m)>=0&&(c=m,a[m]=_(i,e),p=u.plus(a),p>e?(a[m]--,i=u.plus(a),i>e&&(p=i,a[m]--,i=u.plus(a))):i=p);return[i,a,p,c]}function rp(i,e,r,o){let[a,u,c,p]=_E(i,e,r),m=e-a,_=r.filter(S=>["hours","minutes","seconds","milliseconds"].indexOf(S)>=0);_.length===0&&(c<e&&(c=a.plus({[p]:1})),c!==a&&(u[p]=(u[p]||0)+m/(c-a)));let T=K.fromObject(u,o);return _.length>0?K.fromMillis(m,o).shiftTo(..._).plus(T):T}v();v();var vu={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},ip={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},wE=vu.hanidec.replace(/[\[|\]]/g,"").split("");function op(i){let e=parseInt(i,10);if(isNaN(e)){e="";for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);if(i[r].search(vu.hanidec)!==-1)e+=wE.indexOf(i[r]);else for(let a in ip){let[u,c]=ip[a];o>=u&&o<=c&&(e+=o-u)}}return parseInt(e,10)}else return e}function de({numberingSystem:i},e=""){return new RegExp(`${vu[i||"latn"]}${e}`)}var xE="missing Intl.DateTimeFormat.formatToParts support";function st(i,e=r=>r){return{regex:i,deser:([r])=>e(op(r))}}var bE=String.fromCharCode(160),lp=`[ ${bE}]`,up=new RegExp(lp,"g");function EE(i){return i.replace(/\./g,"\\.?").replace(up,lp)}function sp(i){return i.replace(/\./g,"").replace(up," ").toLowerCase()}function Ee(i,e){return i===null?null:{regex:RegExp(i.map(EE).join("|")),deser:([r])=>i.findIndex(o=>sp(r)===sp(o))+e}}function ap(i,e){return{regex:i,deser:([,r,o])=>Kn(r,o),groups:e}}function Ls(i){return{regex:i,deser:([e])=>e}}function TE(i){return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function SE(i,e){let r=de(e),o=de(e,"{2}"),a=de(e,"{3}"),u=de(e,"{4}"),c=de(e,"{6}"),p=de(e,"{1,2}"),m=de(e,"{1,3}"),_=de(e,"{1,6}"),T=de(e,"{1,9}"),S=de(e,"{2,4}"),M=de(e,"{4,6}"),$=ut=>({regex:RegExp(TE(ut.val)),deser:([vt])=>vt,literal:!0}),gt=(ut=>{if(i.literal)return $(ut);switch(ut.val){case"G":return Ee(e.eras("short"),0);case"GG":return Ee(e.eras("long"),0);case"y":return st(_);case"yy":return st(S,ji);case"yyyy":return st(u);case"yyyyy":return st(M);case"yyyyyy":return st(c);case"M":return st(p);case"MM":return st(o);case"MMM":return Ee(e.months("short",!0),1);case"MMMM":return Ee(e.months("long",!0),1);case"L":return st(p);case"LL":return st(o);case"LLL":return Ee(e.months("short",!1),1);case"LLLL":return Ee(e.months("long",!1),1);case"d":return st(p);case"dd":return st(o);case"o":return st(m);case"ooo":return st(a);case"HH":return st(o);case"H":return st(p);case"hh":return st(o);case"h":return st(p);case"mm":return st(o);case"m":return st(p);case"q":return st(p);case"qq":return st(o);case"s":return st(p);case"ss":return st(o);case"S":return st(m);case"SSS":return st(a);case"u":return Ls(T);case"uu":return Ls(p);case"uuu":return st(r);case"a":return Ee(e.meridiems(),0);case"kkkk":return st(u);case"kk":return st(S,ji);case"W":return st(p);case"WW":return st(o);case"E":case"c":return st(r);case"EEE":return Ee(e.weekdays("short",!1),1);case"EEEE":return Ee(e.weekdays("long",!1),1);case"ccc":return Ee(e.weekdays("short",!0),1);case"cccc":return Ee(e.weekdays("long",!0),1);case"Z":case"ZZ":return ap(new RegExp(`([+-]${p.source})(?::(${o.source}))?`),2);case"ZZZ":return ap(new RegExp(`([+-]${p.source})(${o.source})?`),2);case"z":return Ls(/[a-z_+-/]{1,256}?/i);case" ":return Ls(/[^\S\n\r]/);default:return $(ut)}})(i)||{invalidReason:xE};return gt.token=i,gt}var AE={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function OE(i,e,r){let{type:o,value:a}=i;if(o==="literal"){let m=/^\s+$/.test(a);return{literal:!m,val:m?" ":a}}let u=e[o],c=o;o==="hour"&&(e.hour12!=null?c=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?c="hour12":c="hour24":c=r.hour12?"hour12":"hour24");let p=AE[c];if(typeof p=="object"&&(p=p[u]),p)return{literal:!1,val:p}}function $E(i){return[`^${i.map(r=>r.regex).reduce((r,o)=>`${r}(${o.source})`,"")}$`,i]}function CE(i,e,r){let o=i.match(e);if(o){let a={},u=1;for(let c in r)if(fn(r,c)){let p=r[c],m=p.groups?p.groups+1:1;!p.literal&&p.token&&(a[p.token.val[0]]=p.deser(o.slice(u,u+m))),u+=m}return[o,a]}else return[o,{}]}function IE(i){let e=u=>{switch(u){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},r=null,o;return Y(i.z)||(r=Ct.create(i.z)),Y(i.Z)||(r||(r=new xt(i.Z)),o=i.Z),Y(i.q)||(i.M=(i.q-1)*3+1),Y(i.h)||(i.h<12&&i.a===1?i.h+=12:i.h===12&&i.a===0&&(i.h=0)),i.G===0&&i.y&&(i.y=-i.y),Y(i.u)||(i.S=Ki(i.u)),[Object.keys(i).reduce((u,c)=>{let p=e(c);return p&&(u[p]=i[c]),u},{}),r,o]}var yu=null;function LE(){return yu||(yu=H.fromMillis(1555555555555)),yu}function ME(i,e){if(i.literal)return i;let r=bt.macroTokenToFormatOpts(i.val),o=xu(r,e);return o==null||o.includes(void 0)?i:o}function _u(i,e){return Array.prototype.concat(...i.map(r=>ME(r,e)))}function wu(i,e,r){let o=_u(bt.parseFormat(r),i),a=o.map(c=>SE(c,i)),u=a.find(c=>c.invalidReason);if(u)return{input:e,tokens:o,invalidReason:u.invalidReason};{let[c,p]=$E(a),m=RegExp(c,"i"),[_,T]=CE(e,m,p),[S,M,$]=T?IE(T):[null,null,void 0];if(fn(T,"a")&&fn(T,"H"))throw new Ve("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:o,regex:m,rawMatches:_,matches:T,result:S,zone:M,specificOffset:$}}}function cp(i,e,r){let{result:o,zone:a,specificOffset:u,invalidReason:c}=wu(i,e,r);return[o,a,u,c]}function xu(i,e){if(!i)return null;let o=bt.create(e,i).dtFormatter(LE()),a=o.formatToParts(),u=o.resolvedOptions();return a.map(c=>OE(c,i,u))}v();var dp=[0,31,59,90,120,151,181,212,243,273,304,334],hp=[0,31,60,91,121,152,182,213,244,274,305,335];function he(i,e){return new Pt("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${i}, which is invalid`)}function fp(i,e,r){let o=new Date(Date.UTC(i,e-1,r));i<100&&i>=0&&o.setUTCFullYear(o.getUTCFullYear()-1900);let a=o.getUTCDay();return a===0?7:a}function pp(i,e,r){return r+(jn(i)?hp:dp)[e-1]}function mp(i,e){let r=jn(i)?hp:dp,o=r.findIndex(u=>u<e),a=e-r[o];return{month:o+1,day:a}}function Ms(i){let{year:e,month:r,day:o}=i,a=pp(e,r,o),u=fp(e,r,o),c=Math.floor((a-u+10)/7),p;return c<1?(p=e-1,c=Hr(p)):c>Hr(e)?(p=e+1,c=1):p=e,k({weekYear:p,weekNumber:c,weekday:u},Xi(i))}function bu(i){let{weekYear:e,weekNumber:r,weekday:o}=i,a=fp(e,1,4),u=Xn(e),c=r*7+o-a-3,p;c<1?(p=e-1,c+=Xn(p)):c>u?(p=e+1,c-=Xn(e)):p=e;let{month:m,day:_}=mp(p,c);return k({year:p,month:m,day:_},Xi(i))}function Ns(i){let{year:e,month:r,day:o}=i,a=pp(e,r,o);return k({year:e,ordinal:a},Xi(i))}function Eu(i){let{year:e,ordinal:r}=i,{month:o,day:a}=mp(e,r);return k({year:e,month:o,day:a},Xi(i))}function gp(i){let e=Ji(i.weekYear),r=Ie(i.weekNumber,1,Hr(i.weekYear)),o=Ie(i.weekday,1,7);return e?r?o?!1:he("weekday",i.weekday):he("week",i.week):he("weekYear",i.weekYear)}function vp(i){let e=Ji(i.year),r=Ie(i.ordinal,1,Xn(i.year));return e?r?!1:he("ordinal",i.ordinal):he("year",i.year)}function Tu(i){let e=Ji(i.year),r=Ie(i.month,1,12),o=Ie(i.day,1,kr(i.year,i.month));return e?r?o?!1:he("day",i.day):he("month",i.month):he("year",i.year)}function Su(i){let{hour:e,minute:r,second:o,millisecond:a}=i,u=Ie(e,0,23)||e===24&&r===0&&o===0&&a===0,c=Ie(r,0,59),p=Ie(o,0,59),m=Ie(a,0,999);return u?c?p?m?!1:he("millisecond",a):he("second",o):he("minute",r):he("hour",e)}var Au="Invalid DateTime",yp=864e13;function Rs(i){return new Pt("unsupported zone",`the zone "${i.name}" is not supported`)}function Ou(i){return i.weekData===null&&(i.weekData=Ms(i.c)),i.weekData}function tr(i,e){let r={ts:i.ts,zone:i.zone,c:i.c,o:i.o,loc:i.loc,invalid:i.invalid};return new H(At(k(k({},r),e),{old:r}))}function Sp(i,e,r){let o=i-e*60*1e3,a=r.offset(o);if(e===a)return[o,e];o-=(a-e)*60*1e3;let u=r.offset(o);return a===u?[o,a]:[i-Math.min(a,u)*60*1e3,Math.max(a,u)]}function Ps(i,e){i+=e*60*1e3;let r=new Date(i);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Fs(i,e,r){return Sp(Pr(i),e,r)}function _p(i,e){let r=i.o,o=i.c.year+Math.trunc(e.years),a=i.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,u=At(k({},i.c),{year:o,month:a,day:Math.min(i.c.day,kr(o,a))+Math.trunc(e.days)+Math.trunc(e.weeks)*7}),c=K.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),p=Pr(u),[m,_]=Sp(p,r,i.zone);return c!==0&&(m+=c,_=i.zone.offset(m)),{ts:m,o:_}}function eo(i,e,r,o,a,u){let{setZone:c,zone:p}=r;if(i&&Object.keys(i).length!==0||e){let m=e||p,_=H.fromObject(i,At(k({},r),{zone:m,specificOffset:u}));return c?_:_.setZone(p)}else return H.invalid(new Pt("unparsable",`the input "${a}" can't be parsed as ${o}`))}function Ds(i,e,r=!0){return i.isValid?bt.create(it.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(i,e):null}function $u(i,e){let r=i.c.year>9999||i.c.year<0,o="";return r&&i.c.year>=0&&(o+="+"),o+=wt(i.c.year,r?6:4),e?(o+="-",o+=wt(i.c.month),o+="-",o+=wt(i.c.day)):(o+=wt(i.c.month),o+=wt(i.c.day)),o}function wp(i,e,r,o,a,u){let c=wt(i.c.hour);return e?(c+=":",c+=wt(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(c+=":")):c+=wt(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(c+=wt(i.c.second),(i.c.millisecond!==0||!o)&&(c+=".",c+=wt(i.c.millisecond,3))),a&&(i.isOffsetFixed&&i.offset===0&&!u?c+="Z":i.o<0?(c+="-",c+=wt(Math.trunc(-i.o/60)),c+=":",c+=wt(Math.trunc(-i.o%60))):(c+="+",c+=wt(Math.trunc(i.o/60)),c+=":",c+=wt(Math.trunc(i.o%60)))),u&&(c+="["+i.zone.ianaName+"]"),c}var Ap={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},NE={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},RE={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Op=["year","month","day","hour","minute","second","millisecond"],PE=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],DE=["year","ordinal","hour","minute","second","millisecond"];function xp(i){let e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[i.toLowerCase()];if(!e)throw new Rr(i);return e}function bp(i,e){let r=be(e.zone,lt.defaultZone),o=it.fromObject(e),a=lt.now(),u,c;if(Y(i.year))u=a;else{for(let _ of Op)Y(i[_])&&(i[_]=Ap[_]);let p=Tu(i)||Su(i);if(p)return H.invalid(p);let m=r.offset(a);[u,c]=Fs(i,m,r)}return new H({ts:u,zone:r,loc:o,o:c})}function Ep(i,e,r){let o=Y(r.round)?!0:r.round,a=(c,p)=>(c=Dr(c,o||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(c,p)),u=c=>r.calendary?e.hasSame(i,c)?0:e.startOf(c).diff(i.startOf(c),c).get(c):e.diff(i,c).get(c);if(r.unit)return a(u(r.unit),r.unit);for(let c of r.units){let p=u(c);if(Math.abs(p)>=1)return a(p,c)}return a(i>e?-0:0,r.units[r.units.length-1])}function Tp(i){let e={},r;return i.length>0&&typeof i[i.length-1]=="object"?(e=i[i.length-1],r=Array.from(i).slice(0,i.length-1)):r=Array.from(i),[e,r]}var H=class{constructor(e){let r=e.zone||lt.defaultZone,o=e.invalid||(Number.isNaN(e.ts)?new Pt("invalid input"):null)||(r.isValid?null:Rs(r));this.ts=Y(e.ts)?lt.now():e.ts;let a=null,u=null;if(!o)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[a,u]=[e.old.c,e.old.o];else{let p=r.offset(this.ts);a=Ps(this.ts,p),o=Number.isNaN(a.year)?new Pt("invalid input"):null,a=o?null:a,u=o?null:p}this._zone=r,this.loc=e.loc||it.create(),this.invalid=o,this.weekData=null,this.c=a,this.o=u,this.isLuxonDateTime=!0}static now(){return new H({})}static local(){let[e,r]=Tp(arguments),[o,a,u,c,p,m,_]=r;return bp({year:o,month:a,day:u,hour:c,minute:p,second:m,millisecond:_},e)}static utc(){let[e,r]=Tp(arguments),[o,a,u,c,p,m,_]=r;return e.zone=xt.utcInstance,bp({year:o,month:a,day:u,hour:c,minute:p,second:m,millisecond:_},e)}static fromJSDate(e,r={}){let o=Lf(e)?e.valueOf():NaN;if(Number.isNaN(o))return H.invalid("invalid input");let a=be(r.zone,lt.defaultZone);return a.isValid?new H({ts:o,zone:a,loc:it.fromObject(r)}):H.invalid(Rs(a))}static fromMillis(e,r={}){if(Ce(e))return e<-yp||e>yp?H.invalid("Timestamp out of range"):new H({ts:e,zone:be(r.zone,lt.defaultZone),loc:it.fromObject(r)});throw new Rt(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if(Ce(e))return new H({ts:e*1e3,zone:be(r.zone,lt.defaultZone),loc:it.fromObject(r)});throw new Rt("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};let o=be(r.zone,lt.defaultZone);if(!o.isValid)return H.invalid(Rs(o));let a=lt.now(),u=Y(r.specificOffset)?o.offset(a):r.specificOffset,c=zr(e,xp),p=!Y(c.ordinal),m=!Y(c.year),_=!Y(c.month)||!Y(c.day),T=m||_,S=c.weekYear||c.weekNumber,M=it.fromObject(r);if((T||p)&&S)throw new Ve("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(_&&p)throw new Ve("Can't mix ordinal dates with month/day");let $=S||c.weekday&&!T,P,gt,ut=Ps(a,u);$?(P=PE,gt=NE,ut=Ms(ut)):p?(P=DE,gt=RE,ut=Ns(ut)):(P=Op,gt=Ap);let vt=!1;for(let yn of P){let ks=c[yn];Y(ks)?vt?c[yn]=gt[yn]:c[yn]=ut[yn]:vt=!0}let qt=$?gp(c):p?vp(c):Tu(c),Yt=qt||Su(c);if(Yt)return H.invalid(Yt);let Ye=$?bu(c):p?Eu(c):c,[fe,gn]=Fs(Ye,u,o),vn=new H({ts:fe,zone:o,o:gn,loc:M});return c.weekday&&T&&e.weekday!==vn.weekday?H.invalid("mismatched weekday",`you can't specify both a weekday of ${c.weekday} and a date of ${vn.toISO()}`):vn}static fromISO(e,r={}){let[o,a]=Zf(e);return eo(o,a,r,"ISO 8601",e)}static fromRFC2822(e,r={}){let[o,a]=qf(e);return eo(o,a,r,"RFC 2822",e)}static fromHTTP(e,r={}){let[o,a]=Yf(e);return eo(o,a,r,"HTTP",r)}static fromFormat(e,r,o={}){if(Y(e)||Y(r))throw new Rt("fromFormat requires an input string and a format");let{locale:a=null,numberingSystem:u=null}=o,c=it.fromOpts({locale:a,numberingSystem:u,defaultToEN:!0}),[p,m,_,T]=cp(c,e,r);return T?H.invalid(T):eo(p,m,o,`format ${r}`,e,_)}static fromString(e,r,o={}){return H.fromFormat(e,r,o)}static fromSQL(e,r={}){let[o,a]=jf(e);return eo(o,a,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new Rt("need to specify a reason the DateTime is invalid");let o=e instanceof Pt?e:new Pt(e,r);if(lt.throwOnInvalid)throw new bs(o);return new H({invalid:o})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){let o=xu(e,it.fromObject(r));return o?o.map(a=>a?a.val:null).join(""):null}static expandFormat(e,r={}){return _u(bt.parseFormat(e),it.fromObject(r)).map(a=>a.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Ou(this).weekYear:NaN}get weekNumber(){return this.isValid?Ou(this).weekNumber:NaN}get weekday(){return this.isValid?Ou(this).weekday:NaN}get ordinal(){return this.isValid?Ns(this.c).ordinal:NaN}get monthShort(){return this.isValid?qe.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?qe.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?qe.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?qe.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,r=6e4,o=Pr(this.c),a=this.zone.offset(o-e),u=this.zone.offset(o+e),c=this.zone.offset(o-a*r),p=this.zone.offset(o-u*r);if(c===p)return[this];let m=o-c*r,_=o-p*r,T=Ps(m,c),S=Ps(_,p);return T.hour===S.hour&&T.minute===S.minute&&T.second===S.second&&T.millisecond===S.millisecond?[tr(this,{ts:m}),tr(this,{ts:_})]:[this]}get isInLeapYear(){return jn(this.year)}get daysInMonth(){return kr(this.year,this.month)}get daysInYear(){return this.isValid?Xn(this.year):NaN}get weeksInWeekYear(){return this.isValid?Hr(this.weekYear):NaN}resolvedLocaleOptions(e={}){let{locale:r,numberingSystem:o,calendar:a}=bt.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:o,outputCalendar:a}}toUTC(e=0,r={}){return this.setZone(xt.instance(e),r)}toLocal(){return this.setZone(lt.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:o=!1}={}){if(e=be(e,lt.defaultZone),e.equals(this.zone))return this;if(e.isValid){let a=this.ts;if(r||o){let u=e.offset(this.ts),c=this.toObject();[a]=Fs(c,u,e)}return tr(this,{ts:a,zone:e})}else return H.invalid(Rs(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:o}={}){let a=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:o});return tr(this,{loc:a})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let r=zr(e,xp),o=!Y(r.weekYear)||!Y(r.weekNumber)||!Y(r.weekday),a=!Y(r.ordinal),u=!Y(r.year),c=!Y(r.month)||!Y(r.day),p=u||c,m=r.weekYear||r.weekNumber;if((p||a)&&m)throw new Ve("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&a)throw new Ve("Can't mix ordinal dates with month/day");let _;o?_=bu(k(k({},Ms(this.c)),r)):Y(r.ordinal)?(_=k(k({},this.toObject()),r),Y(r.day)&&(_.day=Math.min(kr(_.year,_.month),_.day))):_=Eu(k(k({},Ns(this.c)),r));let[T,S]=Fs(_,this.o,this.zone);return tr(this,{ts:T,o:S})}plus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e);return tr(this,_p(this,r))}minus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e).negate();return tr(this,_p(this,r))}startOf(e){if(!this.isValid)return this;let r={},o=K.normalizeUnit(e);switch(o){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break;case"milliseconds":break}if(o==="weeks"&&(r.weekday=1),o==="quarters"){let a=Math.ceil(this.month/3);r.month=(a-1)*3+1}return this.set(r)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e,r={}){return this.isValid?bt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):Au}toLocaleString(e=dn,r={}){return this.isValid?bt.create(this.loc.clone(r),e).formatDateTime(this):Au}toLocaleParts(e={}){return this.isValid?bt.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:o=!1,includeOffset:a=!0,extendedZone:u=!1}={}){if(!this.isValid)return null;let c=e==="extended",p=$u(this,c);return p+="T",p+=wp(this,c,r,o,a,u),p}toISODate({format:e="extended"}={}){return this.isValid?$u(this,e==="extended"):null}toISOWeekDate(){return Ds(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:o=!0,includePrefix:a=!1,extendedZone:u=!1,format:c="extended"}={}){return this.isValid?(a?"T":"")+wp(this,c==="extended",r,e,o,u):null}toRFC2822(){return Ds(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Ds(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?$u(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:o=!0}={}){let a="HH:mm:ss.SSS";return(r||e)&&(o&&(a+=" "),r?a+="z":e&&(a+="ZZ")),Ds(this,a,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Au}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let r=k({},this.c);return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",o={}){if(!this.isValid||!e.isValid)return K.invalid("created by diffing an invalid DateTime");let a=k({locale:this.locale,numberingSystem:this.numberingSystem},o),u=Mf(r).map(K.normalizeUnit),c=e.valueOf()>this.valueOf(),p=c?this:e,m=c?e:this,_=rp(p,m,u,a);return c?_.negate():_}diffNow(e="milliseconds",r={}){return this.diff(H.now(),e,r)}until(e){return this.isValid?ft.fromDateTimes(this,e):this}hasSame(e,r){if(!this.isValid)return!1;let o=e.valueOf(),a=this.setZone(e.zone,{keepLocalTime:!0});return a.startOf(r)<=o&&o<=a.endOf(r)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let r=e.base||H.fromObject({},{zone:this.zone}),o=e.padding?this<r?-e.padding:e.padding:0,a=["years","months","days","hours","minutes","seconds"],u=e.unit;return Array.isArray(e.unit)&&(a=e.unit,u=void 0),Ep(r,this.plus(o),At(k({},e),{numeric:"always",units:a,unit:u}))}toRelativeCalendar(e={}){return this.isValid?Ep(e.base||H.fromObject({},{zone:this.zone}),this,At(k({},e),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...e){if(!e.every(H.isDateTime))throw new Rt("min requires all arguments be DateTimes");return uu(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(H.isDateTime))throw new Rt("max requires all arguments be DateTimes");return uu(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,o={}){let{locale:a=null,numberingSystem:u=null}=o,c=it.fromOpts({locale:a,numberingSystem:u,defaultToEN:!0});return wu(c,e,r)}static fromStringExplain(e,r,o={}){return H.fromFormatExplain(e,r,o)}static get DATE_SHORT(){return dn}static get DATE_MED(){return Ci}static get DATE_MED_WITH_WEEKDAY(){return ql}static get DATE_FULL(){return Ii}static get DATE_HUGE(){return Li}static get TIME_SIMPLE(){return Mi}static get TIME_WITH_SECONDS(){return Ni}static get TIME_WITH_SHORT_OFFSET(){return Ri}static get TIME_WITH_LONG_OFFSET(){return Pi}static get TIME_24_SIMPLE(){return Di}static get TIME_24_WITH_SECONDS(){return Fi}static get TIME_24_WITH_SHORT_OFFSET(){return ki}static get TIME_24_WITH_LONG_OFFSET(){return Hi}static get DATETIME_SHORT(){return zi}static get DATETIME_SHORT_WITH_SECONDS(){return Ui}static get DATETIME_MED(){return Wi}static get DATETIME_MED_WITH_SECONDS(){return Bi}static get DATETIME_MED_WITH_WEEKDAY(){return Yl}static get DATETIME_FULL(){return Gi}static get DATETIME_FULL_WITH_SECONDS(){return Vi}static get DATETIME_HUGE(){return Zi}static get DATETIME_HUGE_WITH_SECONDS(){return qi}};function Yr(i){if(H.isDateTime(i))return i;if(i&&i.valueOf&&Ce(i.valueOf()))return H.fromJSDate(i);if(i&&typeof i=="object")return H.fromObject(i);throw new Rt(`Unknown datetime argument: ${i}, of type ${typeof i}`)}var $p=et(G),FE=[$p.styles,Dl],er=class extends $p{constructor(){super();this.updateComment=({detail:r})=>{let{text:o}=r;this.text=o,this.closeEditMode(),this.emitEvent("update-comment",{uuid:this.uuid,text:o})};this.resolveAnnotation=r=>{r.stopPropagation(),this.emitEvent("resolve-annotation",{type:"resolve-annotation",resolved:!this.resolved},{composed:!1,bubbles:!1})};this.confirmDelete=()=>{if(this.deleteCommentModalOpen=!1,this.primaryComment)return this.emitEvent("delete-annotation",{uuid:this.annotationId});this.emitEvent("delete-comment",{annotationId:this.annotationId,uuid:this.uuid})};this.closeEditMode=()=>{this.mode="readonly"};this.resolved=!1}getAvatar(){var r;return this.avatar?L` <div class="comment-item__avatar">
        <img src=${this.avatar} />
      </div>`:L`<div class="comment-item__avatar">
      <p class="text text-bold">${((r=this.username[0])==null?void 0:r.toUpperCase())||"A"}</p>
    </div>`}render(){let r=this.annotationFilter==="all"?"resolve":"undo",o=$=>H.fromISO($).toFormat("yyyy-dd-MM"),a=this.resolvable?"comment-item__resolve":"hidden",u=[{label:"EDIT"},{label:"DELETE"}],c=({detail:$})=>{$==="EDIT"&&(this.mode="editable"),$==="DELETE"&&(this.deleteCommentModalOpen=!0)},p=()=>{this.text.length<120||(this.expandElipsis=!0)},m=()=>{if(this.mode==="editable")return L`
        <superviz-comments-comment-input
          class="comment-item--editable"
          editable
          @click=${$=>$.stopPropagation()}
          text=${this.text}
          eventType="update-comment"
          @update-comment=${this.updateComment}
          @close-edit-mode=${this.closeEditMode}
        ></superviz-comments-comment-input>
      `},_=()=>{if(this.mode!=="editable")return L`
        <span
          id="comment-text"
          @click=${p}
          class="text text-big sv-gray-700 ${M}"
          >${this.text}</span
        >
      `},T=()=>{this.deleteCommentModalOpen=!1},S={"comment-item":!0,reply:!this.primaryComment},M=!this.expandElipsis&&this.text.length>120?"line-clamp":"";return L`
      <div class=${dt(S)}>
        <div class="comment-item__user">
          <div class="comment-item__user-details">
            ${this.getAvatar()}
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
              @click=${$=>$.stopPropagation()}
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
    `}};er.styles=FE,er.properties={uuid:{type:String},annotationId:{type:String},avatar:{type:String},username:{type:String},text:{type:String},resolved:{type:Boolean},resolvable:{type:Boolean},createdAt:{type:String},mode:{type:String},deleteCommentModalOpen:{type:Boolean},primaryComment:{type:Boolean},expandElipsis:{type:Boolean},annotationFilter:{type:String}},er=X([Q("superviz-comments-comment-item")],er);v();var Cp=et(G),kE=[Cp.styles,kl],nr=class extends Cp{constructor(){super();this.getSendBtn=()=>this.shadowRoot.querySelector(".comment-input--send-btn");this.sendEnter=r=>{if(r.key!=="Enter"||r.shiftKey)return;let o=this.commentInput,a=o.value.trim();if(!a)return;let u=this.getSendBtn();this.emitEvent(this.eventType,{text:a},{composed:!1,bubbles:!1}),o.value="",u.disabled=!0,this.updateHeight()};this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1})};this.onTextareaFocus=()=>{let r=this.optionsContainer,o=this.horizontalRule;r.classList.add("active-textarea"),o.classList.add("active-hr")};this.onTextareaLoseFocus=()=>{let r=this.optionsContainer,o=this.horizontalRule;this.commentInput.value.length||(r.classList.remove("active-textarea"),o.classList.remove("active-hr"))};this.btnActive=!1,this.text=""}firstUpdated(r){this.emitEvent("comment-input-ready",{},{composed:!1,bubbles:!1})}get commentInput(){return this.shadowRoot.getElementById("comment-input--textarea")}get optionsContainer(){return this.shadowRoot.querySelector(".comment-input--options")}get horizontalRule(){return this.shadowRoot.querySelector(".sv-hr")}connectedCallback(){super.connectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&this.addEventListener("keyup",this.sendEnter)}disconnectedCallback(){super.disconnectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&this.removeEventListener("keyup",this.sendEnter)}updated(r){if(r.has("text")&&this.text.length>0){let o=this.commentInput;o.value=this.text,this.updateHeight()}if(r.has("btnActive")){let o=this.getSendBtn();o.disabled=!this.btnActive}}updateHeight(){let r=this.commentInput;r.style.height="40px";let o=r.scrollHeight+16;o===47&&(o=40),r.style.height=`${o}px`;let a=this.getSendBtn();a.disabled=!(r.value.length>0)}send(r){r.preventDefault();let o=this.commentInput,a=this.getSendBtn(),u=o.value;this.emitEvent(this.eventType,{text:u},{composed:!1,bubbles:!1}),o.value="",a.disabled=!0,this.updateHeight()}render(){var a;let r=()=>{if(!!this.editable)return L`
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
          <superviz-icon name="line-arrow-right" size="sm" allowSetSize=${!0}></superviz-icon>
        </button>
      `};return L`
      <div class="comment-input">
        <textarea
          id="comment-input--textarea"
          placeholder=${(a=this.placeholder)!=null?a:"Add comment..."}
          @input=${this.updateHeight}
          @focus=${this.onTextareaFocus}
          @blur=${this.onTextareaLoseFocus}
          spellcheck="false"
        ></textarea>
        <hr class="sv-hr" />
        <div class="comment-input--options">
          <div class="comment-input-options">
            ${o()} ${r()}
          </div>
        </div>
      </div>
    `}};nr.styles=kE,nr.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean},placeholder:{type:String}},nr=X([Q("superviz-comments-comment-input")],nr);v();var Ip=et(G),HE=[Ip.styles,Ul],rr=class extends Ip{constructor(){super();this.focusInput=()=>{var r,o;this.inputElement||(this.inputElement=(o=(r=this.shadowRoot)==null?void 0:r.querySelector("superviz-comments-comment-input"))==null?void 0:o.shadowRoot.querySelector("textarea")),this.inputElement.focus()};this.setInputSide=()=>{let u=this.commentsSide==="right"?320:0,c=this.annotationSides.right+293,p=this.containerSides.right-u;if(c<p){this.horizontalSide="right";return}u=this.commentsSide==="left"?320:0;let m=this.annotationSides.left-293,_=this.containerSides.left+u;if(m>_){this.horizontalSide="left";return}this.horizontalSide=_-m>c-p?"right":"left"};this.createComment=({detail:r})=>{this.annotationSent=!0,document.body.dispatchEvent(new CustomEvent("create-annotation",{detail:At(k({},r),{position:At(k({},this.originalPosition),{type:"canvas"})})})),this.annotation=null};this.cancelTemporaryAnnotation=()=>{this.annotation=null};this.cancelTemporaryAnnotationEsc=r=>{this.annotation=null};this.avatar=()=>{if(this.type==="add"&&!this.showInput)return L`<div class="annotation-pin__avatar annotation-pin__avatar--add">
        <superviz-icon name="add" allowSetSize="true"></superviz-icon>
      </div>`;let r=this.userAvatar;return r?L`<div class="annotation-pin__avatar">
        <img src=${r} />
      </div>`:L`<div class="annotation-pin__avatar">
      <p class="text text-bold text-big">${this.userInitial}</p>
    </div>`};this.input=()=>{if(!(!this.showInput||this.annotationSent))return L`<div class="floating-input">
      <superviz-comments-comment-input
        @create-annotation=${this.createComment}
        eventType="create-annotation"
        @comment-input-ready=${this.focusInput}
      >
      </superviz-comments-comment-input>
    </div>`};this.position={x:0,y:0}}updated(r){super.updated(r),!(!r.has("movedPosition")||!this.annotationSides)&&(this.annotationSides=this.pinAnnotation.getBoundingClientRect(),this.setInputSide(),this.inputElement&&this.focusInput())}firstUpdated(r){var o;super.firstUpdated(r),this.showInput&&(this.originalPosition=k({},this.position),this.pinAnnotation=(o=this.shadowRoot)==null?void 0:o.querySelector(".annotation-pin"),this.annotationSides=this.pinAnnotation.getBoundingClientRect(),this.setInputSide())}connectedCallback(){super.connectedCallback(),this.type==="add"&&(window.document.body.addEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.addEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)}))}disconnectedCallback(){super.disconnectedCallback(),this.type==="add"&&(window.document.body.removeEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.removeEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)}))}get userAvatar(){var r,o,a,u;return((u=(a=(o=(r=this.annotation)==null?void 0:r.comments)==null?void 0:o.at(0))==null?void 0:a.participant)==null?void 0:u.avatar)||this.localAvatar}get userInitial(){var o,a,u,c,p;return(((p=(c=(u=(a=(o=this.annotation)==null?void 0:o.comments)==null?void 0:a.at(0))==null?void 0:u.participant)==null?void 0:c.name)!=null?p:this.localName)||"Anonymous")[0].toUpperCase()}emitClick(){var r;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:(r=this.annotation)==null?void 0:r.uuid}}))}render(){var o,a;let r={"annotation-pin":!0,"annotation-pin--active":this.active};return r[this.horizontalSide]=!0,this.type==="add"?L`
        <div
          class=${dt(r)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          ${this.avatar()} ${this.input()}
        </div>
      `:L`
      <div
        @click=${this.emitClick}
        class=${dt(r)}
        style=${`top: ${(o=this.position)==null?void 0:o.y}px; left: ${(a=this.position)==null?void 0:a.x}px; pointer-events: auto;`}
      >
        ${this.avatar()}
      </div>
    `}};rr.styles=HE,rr.properties={type:{type:String},annotation:{type:Object},position:{type:Object},active:{type:Boolean},showInput:{type:Boolean},containerSides:{type:Object},horizontalSide:{type:String},commentsSide:{type:String},movedPosition:{type:String},pinAnnotation:{type:Object},localAvatar:{type:String},annotationSent:{type:Boolean},localName:{type:String}},rr=X([Q("superviz-comments-annotation-pin")],rr);v();var Lp=et(G),zE=[Lp.styles,Hl],ir=class extends Lp{constructor(){super(...arguments);this.selectAnnotation=()=>{let{uuid:r}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:r}}))};this.resolveAnnotation=({detail:r})=>{let{uuid:o}=this.annotation,{resolved:a,type:u}=r,c=u==="resolve-annotation"&&this.annotationFilter==="all";this.resolved=a,this.emitEvent("resolve-annotation",{uuid:o,resolved:a}),c&&(this.shouldShowUndoResolved=!0)};this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1};this.generateExpantedCommentesTemplate=(r,o)=>{var a,u,c,p;return o===0?L``:L`
      <superviz-comments-comment-item
        uuid=${r.uuid}
        avatar=${(p=(c=(u=(a=this.annotation)==null?void 0:a.comments)==null?void 0:u.at(o))==null?void 0:c.participant)==null?void 0:p.avatar}
        username=${r.participant.name||"Anonymous"}
        text=${r.text}
        createdAt=${r.createdAt}
        annotationId=${this.annotation.uuid}
      ></superviz-comments-comment-item>
    `}}get filterIsAll(){return this.annotationFilter==="all"}get filterIsResolved(){return this.annotationFilter==="resolved"}get shouldHiddenAnnotation(){return{hidden:this.resolved&&this.filterIsAll||!this.resolved&&this.filterIsResolved}}get replies(){return[...this.annotation.comments].splice(1).length}get repliesSize(){return this.replies>=5?5:this.replies}get replyText(){return this.replies!==1?"replies":"reply"}get isSelected(){return this.selected===this.annotation.uuid}get annotationClasses(){return{"annotation-item":!0,"annotation-item--selected":this.isSelected}}get hrClasses(){return{"sv-hr":!0,hidden:this.isLastAnnotation}}get avatarCommentsClasses(){return{"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&this.replies>1,hidden:!(!this.expandComments&&this.replies>=1)}}get commentsClasses(){return{"comments-container":!0,"comment-item--expand":this.isSelected&&this.expandComments,hidden:!(this.isSelected&&this.expandComments)}}firstUpdated(){this.resolved=this.annotation.resolved}updated(r){if(r.has("selected")){let o=this.selected===this.annotation.uuid;this.expandComments=o}}createComment({detail:r}){let{text:o}=r;this.emitEvent("create-comment",{uuid:this.annotation.uuid,text:o})}generateAvatarCommentsTemplate(){var o,a,u,c,p,m;let r=[];for(let _=1;_<=this.repliesSize;_++)(a=(o=this.annotation.comments[_])==null?void 0:o.participant)!=null&&a.avatar?r.push(L`
          <div class="avatar">
            <img src=${(c=(u=this.annotation.comments[_])==null?void 0:u.participant)==null?void 0:c.avatar} />
          </div>
        `):r.push(L`
          <div class="avatar">
            <p class="text text-bold">
              ${((m=(p=this.annotation.comments[_])==null?void 0:p.participant.name[0])==null?void 0:m.toUpperCase())||"A"}
            </p>
          </div>
        `);return L`
      ${r}
      <div class="text text-big sv-gray-500">${this.replies} ${this.replyText}</div>
    `}annotationResolvedTemplate(){return this.shouldShowUndoResolved?L`
      <superviz-comments-annotation-resolved
        @undo-resolve=${this.resolveAnnotation}
        @hide=${this.hideUndoResolved}
        class=${dt({hidden:this.filterIsResolved})}
      >
      </superviz-comments-annotation-resolved>
    `:L``}render(){var r,o,a,u,c,p,m,_,T,S;return L`
      ${this.annotationResolvedTemplate()}

      <div class=${dt(this.shouldHiddenAnnotation)}>
        <div class=${dt(this.annotationClasses)} @click=${this.selectAnnotation}>
          <div>
            <superviz-comments-comment-item
              uuid=${(r=this.annotation.comments)==null?void 0:r[0].uuid}
              annotationId=${this.annotation.uuid}
              username=${((a=(o=this.annotation.comments)==null?void 0:o[0].participant)==null?void 0:a.name)||"Anonymous"}
              text=${(u=this.annotation.comments)==null?void 0:u[0].text}
              createdAt=${(c=this.annotation.comments)==null?void 0:c[0].createdAt}
              primaryComment
              avatar=${(T=(_=(m=(p=this.annotation)==null?void 0:p.comments)==null?void 0:m.at(0))==null?void 0:_.participant)==null?void 0:T.avatar}
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
            ${(S=this.annotation.comments)==null?void 0:S.map(this.generateExpantedCommentesTemplate)}
            <superviz-comments-comment-input
              @create-comment=${this.createComment}
              eventType="create-comment"
              @click=${M=>M.stopPropagation()}
              placeholder="Reply"
            ></superviz-comments-comment-input>
          </div>
        </div>
        <div class=${dt(this.hrClasses)}></div>
      </div>
    `}};ir.styles=zE,ir.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String}},ir=X([Q("superviz-comments-annotation-item")],ir);v();var Mp=et(G),UE=[Mp.styles],or=class extends Mp{constructor(){super(...arguments);this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:L`<span class="text text-big sv-gray-600">Are you sure you want to delete this comment? <br /> This action cannot be undone</span>`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))};this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{!this.open||this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{!this.open||(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(r){r.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){!this.open||(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){let r=()=>{if(!!this.useSlot)return L`<slot name="modal-handler" @click=${this.toggle}></slot>`},o=()=>{if(!!this.open)return L`
        <superviz-modal></superviz-modal>
      `};return L`
      ${r()}
      ${o()}
    `}};or.styles=UE,or.properties={open:{type:Boolean},useSlot:{type:Boolean}},or=X([Q("superviz-comments-delete-comments-modal")],or);v();var Np=et(G),WE=[Np.styles,zl],BE=10*1e3,sr=class extends Np{constructor(){super();this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)};this.timeToHide=BE,this.isCanceled=!1}firstUpdated(){this.setTimer()}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return this.timeToHide===0?L``:this.isCanceled?L``:L`
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
    `}};sr.styles=WE,sr.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},sr=X([Q("superviz-comments-annotation-resolved")],sr);v();var Rp=et(G),GE=[Rp.styles,Wl],no=[{label:"All comments",code:"all"},{label:"Resolved comments",code:"resolved"}],ar=class extends Rp{constructor(){super();this.caret="down"}render(){let r=this.filter==="all"?no[0].label:no[1].label,o=({detail:p})=>{this.emitEvent("select",{filter:p}),a()},a=()=>{this.caret=this.caret==="down"?"up":"down"},u=this.filter==="all"?no[0].code:no[1].code,c={text:!0,"text-bold":!0,"select-content":!0,"sv-gray-500":this.caret==="down","sv-gray-700":this.caret==="up"};return L`
      <div class="select">
        <div class="select-container">
          <superviz-dropdown
            options=${JSON.stringify(no)}
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
              <span class=${dt(c)}>${r}</span>
              <superviz-icon name=${this.caret} size="md"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};ar.styles=GE,ar.properties={filter:{type:String},caret:{type:String}},ar=X([Q("superviz-comments-annotation-filter")],ar);v();var Pp=et(G),VE=[Pp.styles,Bl],lr=class extends Pp{constructor(){super();this.isHidden=!0,this.positionStyles="top: 20px; left: 20px;",this.shouldHide=!1,this.commentsPosition="left"}toggle(){this.emitEvent("toggle",{})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("toggle-annotation-sidebar",()=>{this.isHidden=!this.isHidden})}updated(r){super.updated(r),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(".float-button");if(!o)return;o.setAttribute("style",this.positionStyles);let a=window.document.body.getBoundingClientRect().width,u=o.getBoundingClientRect(),c=320;if(!this.commentsPosition||this.commentsPosition==="left"){this.shouldHide=u.x<c;return}this.shouldHide=a-u.right<c})}render(){let r={"float-button":!0,"hide-button":!this.isHidden&&this.shouldHide};return L` <button @click=${this.toggle} class="${dt(r)}">
      <superviz-icon allowSetSize=${!0} size="sm" name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`}};lr.styles=VE,lr.properties={positionStyles:{type:String},isHidden:{type:Boolean},commentsPosition:{type:String}},lr=X([Q("superviz-comments-button")],lr);v();v();v();v();var ro=(_=>(_.GOTO="go to",_.LOCAL_FOLLOW="follow",_.LOCAL_UNFOLLOW="unfollow",_.FOLLOW="everyone follows me",_.UNFOLLOW="stop followers",_.PRIVATE="private mode",_.LEAVE_PRIVATE="leave private mode",_.GATHER="gather all",_.STOP_GATHER="stop gather all",_))(ro||{});v();v();var Cu=B`
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
`;var Dp=et(G),ZE=[Dp.styles,Cu],ur=class extends Dp{constructor(){super();this.onClickOutDropdown=({detail:r})=>{this.open=r.open};this.dropdownOptionsHandler=({detail:r})=>{var m;let{id:o,label:a,name:u,color:c,slotIndex:p}=r;if(a==="go to"&&this.emitEvent("realtime.go-to-participant",{id:o}),["follow","unfollow"].includes(a)){if(((m=this.following)==null?void 0:m.id)===o){this.stopFollowing();return}this.following={name:u,id:o,color:c},this.swapParticipantBeingFollowedPosition(),this.emitEvent("realtime.local-follow-participant",{id:o})}if(["private mode","leave private mode"].includes(a)&&(this.isPrivate=a==="private mode",this.emitEvent("realtime.private-mode",{id:o,isPrivate:this.isPrivate}),this.everyoneFollowsMe=!1),["everyone follows me","stop followers"].includes(a)){if(this.following&&this.stopFollowing(),this.everyoneFollowsMe){this.stopEveryoneFollowsMe();return}this.everyoneFollowsMe=!0,this.following=void 0,this.emitEvent("realtime.follow-participant",{id:o,name:u,color:c,slotIndex:p})}a==="gather all"&&this.emitEvent("realtime.gather",{id:o})};this.toggleShowTooltip=()=>{this.showTooltip=!this.showTooltip};this.position="top: 20px; right: 40px;",this.showTooltip=!0,this.open=!1,this.textColorValues=[2,4,5,7,8,16]}updateParticipants(r){this.participants=r}toggleOpen(){this.open=!this.open}dropdownPosition(r){if(this.participants.length===1)return"bottom-center";if(r===0)return"bottom-right";let o=this.participants.length>4,a=r+1===this.participants.length;return o||!a?"bottom-center":"bottom-left"}renderExcessParticipants(){let r=this.participants.length-4;if(r<=0)return L``;let o=this.participants.slice(4).map(({name:c,color:p,id:m,slotIndex:_,isLocal:T,avatar:S,joinedPresence:M})=>({name:c,color:p,id:m,slotIndex:_,avatar:S,isLocal:T,joinedPresence:M})),a={"superviz-who-is-online__participant":!0,excess_participants:!0,"excess_participants--open":this.open};return L`
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
        <div class=${dt(a)} slot="dropdown">
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
    </div>`}getOptions(r,o,a){let{id:u,slotIndex:c,name:p,color:m}=r,_={id:u,name:p,color:m,slotIndex:c},{isPrivate:T}=this;return(a?["GATHER",this.everyoneFollowsMe?"UNFOLLOW":"FOLLOW",T?"LEAVE_PRIVATE":"PRIVATE"]:["GOTO",o?"LOCAL_UNFOLLOW":"LOCAL_FOLLOW"]).map($=>At(k({},_),{label:ro[$]}))}getIcons(r,o){return r?["gather",this.everyoneFollowsMe?"send-off":"send","eye_inative"]:["place",o?"send-off":"send"]}putLocalParticipationFirst(){var u;if(this.participants[0].isLocal)return;let r=(u=this.participants)==null?void 0:u.find(({isLocal:c})=>c);if(!r)return;let o=[...this.participants],a=o.indexOf(r);o.splice(a,1),o.unshift(r),this.participants=o}swapParticipantBeingFollowedPosition(){var c;let r=(c=this.participants)==null?void 0:c.findIndex(({id:p})=>{var m;return p===((m=this.following)==null?void 0:m.id)}),o=1;if(r<4||!r)return;let a=[...this.participants],u=a[r];a[r]=a[o],a[o]=u,this.participants=a}stopFollowing(){this.following=void 0,this.emitEvent("realtime.local-follow-participant",{id:void 0})}cancelPrivate(){this.isPrivate=void 0,this.emitEvent("realtime.private-mode",{id:this.localParticipantData.id})}followingMessage(){if(!this.following)return"";let{name:r,color:o}=this.following;return L`<div class="message" style="border-color: ${o}">
      Following: ${r} <span @click=${this.stopFollowing}>Stop</span>
    </div>`}everyoneFollowsMeMessage(){if(!this.everyoneFollowsMe)return"";let{color:r}=this.localParticipantData;return L`<div class="message" style="border-color: ${r}">
      Everyone is following you <span @click=${this.stopEveryoneFollowsMe}>Stop</span>
    </div>`}privateMessage(){if(!this.isPrivate)return"";let{color:r}=this.localParticipantData;return L`<div class="message" style="border-color: ${r}">
      You are in Private Mode <span @click=${this.cancelPrivate}>Cancel</span>
    </div>`}renderParticipants(){return this.participants?(this.putLocalParticipationFirst(),this.swapParticipantBeingFollowedPosition(),L`<div class="superviz-who-is-online">
      ${Nr(this.participants.slice(0,4),r=>r.id,(r,o)=>{var vt;let{joinedPresence:a,isLocal:u,id:c,name:p,color:m}=r,_=((vt=this.following)==null?void 0:vt.id)===c,T=this.getOptions(r,_,u),S=this.getIcons(u,_),M=this.dropdownPosition(o),$=!a||this.disableDropdown,P={"superviz-who-is-online__participant":!0,"disable-dropdown":$,followed:_||u&&this.everyoneFollowsMe,private:u&&this.isPrivate},ut=p+(u?" (you)":"");return L`
            <superviz-dropdown
              options=${JSON.stringify(T)}
              label="label"
              position="${M}"
              @selected=${this.dropdownOptionsHandler}
              @toggle-dropdown-state=${this.toggleShowTooltip}
              icons="${JSON.stringify(S)}"
              name="${ut}"
              ?disabled=${$}
              ?canShowTooltip=${this.showTooltip}
              onHoverData=${JSON.stringify({name:p,action:u?"You":"Click to follow"})}
            >
              <div slot="dropdown" class=${dt(P)} style="--border-color: ${m}">
                ${this.getAvatar(r)}
              </div>
            </superviz-dropdown>
          `})}
      ${this.renderExcessParticipants()}
    </div>`):L``}updated(r){super.updated(r),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(".wio-content");if(!o)return;let a=this.position.includes("left")?"flex-start":"flex-end",u=`${this.position} align-items: ${a};`;o.setAttribute("style",u)})}render(){return L`<div class="wio-content">
      ${this.renderParticipants()} ${this.followingMessage()} ${this.everyoneFollowsMeMessage()}
      ${this.privateMessage()}
    </div> `}};ur.styles=ZE,ur.properties={position:{type:String},participants:{type:Object},open:{type:Boolean},disableDropdown:{type:Boolean},following:{type:Object},localParticipantColor:{type:String},isPrivate:{type:Boolean},everyoneFollowsMe:{type:Boolean},showTooltip:{type:Boolean}},ur=X([Q("superviz-who-is-online")],ur);v();v();var Fp=et(G),qE=[Fp.styles,Iu],cr=class extends Fp{constructor(){super();this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let o=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),u=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=o.includes(a),_=o.includes(u),T=o.includes(p);m||_||T||this.close()};this.close=()=>{this.open=!1,this.selected="",this.emitEvent("clickout",{bubbles:!1,composed:!1})};this.selectParticipant=r=>()=>{this.selected=r};this.toggleShowTooltip=()=>{this.showParticipantTooltip=!this.showParticipantTooltip};this.adjustPosition=()=>{let{top:r,bottom:o}=this.dropdownBounds,{innerHeight:a}=window,u=this.positionAction();if(u===0)return;if(u===1){let _=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,_);return}let c=a-o>r?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,c);this.position=m};this.tooltip=()=>this.showSeeMoreTooltip?L`<superviz-tooltip
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
    </div>`}renderParticipants(){if(!this.participants)return;let r=["place","send"];return Nr(this.participants,o=>o.id,o=>{var gt,ut;let{id:a,slotIndex:u,joinedPresence:c,isLocal:p,color:m,name:_}=o,T=!c||p||this.disableDropdown,S={"who-is-online-dropdown__content":!0,"who-is-online-dropdown__content--selected":this.selected===a,"disable-dropdown":T,followed:((gt=this.following)==null?void 0:gt.id)===a},M={icon:!0,"hide-icon":T},$=((ut=this.following)==null?void 0:ut.id)===a,P=Object.values(ro).map((vt,qt)=>({label:$&&qt?"UNFOLLOW":vt,id:a,name:_,color:m,slotIndex:u})).slice(0,2);return L`
        <superviz-dropdown
        options=${JSON.stringify(P)}
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
          class=${dt(S)} 
          @click=${this.selectParticipant(a)} slot="dropdown">
          <div class="who-is-online-dropdown__participant" style="border-color: 
          ${m}">
              ${this.getAvatar(o)}
            </div>
            <span class="user-name">${_}</span>
            <superviz-icon 
              class=${dt(M)} 
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
        <div class=${dt(this.menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `}};cr.styles=qE,cr.properties={open:{type:Boolean},align:{type:String},position:{type:String},participants:{type:Array},selected:{type:String},disableDropdown:{type:Boolean},following:{type:Object},showSeeMoreTooltip:{type:Boolean},showParticipantTooltip:{type:Boolean}},cr=X([Q("superviz-who-is-online-dropdown")],cr);export{qn as Comments,ar as CommentsAnnotationFilter,ir as CommentsAnnotationItem,rr as CommentsAnnotationPin,sr as CommentsAnnotationResolved,nr as CommentsCommentInput,er as CommentsCommentItem,Jn as CommentsContent,lr as CommentsFloatButton,Yn as CommentsTopbar,or as DeleteCommentModal,Vn as Dropdown,Bn as HelloWorld,Gn as Icon,Ir as Modal,Lr as ModalContainer,Zn as Tooltip,ur as WhoIsOnline,cr as WhoIsOnlineDropdown};
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
