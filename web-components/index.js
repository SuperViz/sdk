var Lx=Object.create;var Qo=Object.defineProperty,Mx=Object.defineProperties,ch=Object.getOwnPropertyDescriptor,Nx=Object.getOwnPropertyDescriptors,Rx=Object.getOwnPropertyNames,Xo=Object.getOwnPropertySymbols,Px=Object.getPrototypeOf,sl=Object.prototype.hasOwnProperty,dh=Object.prototype.propertyIsEnumerable;var hh=Math.pow,uh=(r,e,i)=>e in r?Qo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,k=(r,e)=>{for(var i in e||(e={}))sl.call(e,i)&&uh(r,i,e[i]);if(Xo)for(var i of Xo(e))dh.call(e,i)&&uh(r,i,e[i]);return r},At=(r,e)=>Mx(r,Nx(e));var al=(r,e)=>{var i={};for(var o in r)sl.call(r,o)&&e.indexOf(o)<0&&(i[o]=r[o]);if(r!=null&&Xo)for(var o of Xo(r))e.indexOf(o)<0&&dh.call(r,o)&&(i[o]=r[o]);return i};var Dx=(r,e)=>()=>(r&&(e=r(r=0)),e);var Fx=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var kx=(r,e,i,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Rx(e))!sl.call(r,a)&&a!==i&&Qo(r,a,{get:()=>e[a],enumerable:!(o=ch(e,a))||o.enumerable});return r};var zx=(r,e,i)=>(i=r!=null?Lx(Px(r)):{},kx(e||!r||!r.__esModule?Qo(i,"default",{value:r,enumerable:!0}):i,r));var X=(r,e,i,o)=>{for(var a=o>1?void 0:o?ch(e,i):e,u=r.length-1,c;u>=0;u--)(c=r[u])&&(a=(o?c(e,i,a):c(a))||a);return o&&a&&Qo(e,i,a),a};var vr=(r,e,i)=>new Promise((o,a)=>{var u=m=>{try{p(i.next(m))}catch(_){a(_)}},c=m=>{try{p(i.throw(m))}catch(_){a(_)}},p=m=>m.done?o(m.value):Promise.resolve(m.value).then(u,c);p((i=i.apply(r,e)).next())});var v=Dx(()=>{});var sf=Fx(($i,$r)=>{v();(function(){var r,e="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",u="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",p=500,m="__lodash_placeholder__",_=1,T=2,S=4,M=1,$=2,P=1,vt=2,ut=4,pt=8,kt=16,It=32,Ye=64,fe=128,gn=256,vn=512,yn=30,ks="...",kp=800,zp=16,Lu=1,Hp=2,Up=3,_n=1/0,Je=9007199254740991,Wp=17976931348623157e292,ro=0/0,Te=4294967295,Bp=Te-1,Vp=Te>>>1,Gp=[["ary",fe],["bind",P],["bindKey",vt],["curry",pt],["curryRight",kt],["flip",vn],["partial",It],["partialRight",Ye],["rearg",gn]],di="[object Arguments]",oo="[object Array]",Zp="[object AsyncFunction]",Ji="[object Boolean]",Ki="[object Date]",qp="[object DOMException]",so="[object Error]",ao="[object Function]",Mu="[object GeneratorFunction]",pe="[object Map]",ji="[object Number]",Yp="[object Null]",Le="[object Object]",Nu="[object Promise]",Jp="[object Proxy]",Xi="[object RegExp]",me="[object Set]",Qi="[object String]",lo="[object Symbol]",Kp="[object Undefined]",tr="[object WeakMap]",jp="[object WeakSet]",er="[object ArrayBuffer]",hi="[object DataView]",zs="[object Float32Array]",Hs="[object Float64Array]",Us="[object Int8Array]",Ws="[object Int16Array]",Bs="[object Int32Array]",Vs="[object Uint8Array]",Gs="[object Uint8ClampedArray]",Zs="[object Uint16Array]",qs="[object Uint32Array]",Xp=/\b__p \+= '';/g,Qp=/\b(__p \+=) '' \+/g,tm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ru=/&(?:amp|lt|gt|quot|#39);/g,Pu=/[&<>"']/g,em=RegExp(Ru.source),nm=RegExp(Pu.source),im=/<%-([\s\S]+?)%>/g,rm=/<%([\s\S]+?)%>/g,Du=/<%=([\s\S]+?)%>/g,om=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,sm=/^\w*$/,am=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ys=/[\\^$.*+?()[\]{}|]/g,lm=RegExp(Ys.source),Js=/^\s+/,um=/\s/,cm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,dm=/\{\n\/\* \[wrapped with (.+)\] \*/,hm=/,? & /,fm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,pm=/[()=,{}\[\]\/\s]/,mm=/\\(\\)?/g,gm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Fu=/\w*$/,vm=/^[-+]0x[0-9a-f]+$/i,ym=/^0b[01]+$/i,_m=/^\[object .+?Constructor\]$/,wm=/^0o[0-7]+$/i,xm=/^(?:0|[1-9]\d*)$/,bm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,uo=/($^)/,Em=/['\n\r\u2028\u2029\\]/g,co="\\ud800-\\udfff",Tm="\\u0300-\\u036f",Sm="\\ufe20-\\ufe2f",Am="\\u20d0-\\u20ff",ku=Tm+Sm+Am,zu="\\u2700-\\u27bf",Hu="a-z\\xdf-\\xf6\\xf8-\\xff",Om="\\xac\\xb1\\xd7\\xf7",$m="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Cm="\\u2000-\\u206f",Im=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Uu="A-Z\\xc0-\\xd6\\xd8-\\xde",Wu="\\ufe0e\\ufe0f",Bu=Om+$m+Cm+Im,Ks="['\u2019]",Lm="["+co+"]",Vu="["+Bu+"]",ho="["+ku+"]",Gu="\\d+",Mm="["+zu+"]",Zu="["+Hu+"]",qu="[^"+co+Bu+Gu+zu+Hu+Uu+"]",js="\\ud83c[\\udffb-\\udfff]",Nm="(?:"+ho+"|"+js+")",Yu="[^"+co+"]",Xs="(?:\\ud83c[\\udde6-\\uddff]){2}",Qs="[\\ud800-\\udbff][\\udc00-\\udfff]",fi="["+Uu+"]",Ju="\\u200d",Ku="(?:"+Zu+"|"+qu+")",Rm="(?:"+fi+"|"+qu+")",ju="(?:"+Ks+"(?:d|ll|m|re|s|t|ve))?",Xu="(?:"+Ks+"(?:D|LL|M|RE|S|T|VE))?",Qu=Nm+"?",tc="["+Wu+"]?",Pm="(?:"+Ju+"(?:"+[Yu,Xs,Qs].join("|")+")"+tc+Qu+")*",Dm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Fm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ec=tc+Qu+Pm,km="(?:"+[Mm,Xs,Qs].join("|")+")"+ec,zm="(?:"+[Yu+ho+"?",ho,Xs,Qs,Lm].join("|")+")",Hm=RegExp(Ks,"g"),Um=RegExp(ho,"g"),ta=RegExp(js+"(?="+js+")|"+zm+ec,"g"),Wm=RegExp([fi+"?"+Zu+"+"+ju+"(?="+[Vu,fi,"$"].join("|")+")",Rm+"+"+Xu+"(?="+[Vu,fi+Ku,"$"].join("|")+")",fi+"?"+Ku+"+"+ju,fi+"+"+Xu,Fm,Dm,Gu,km].join("|"),"g"),Bm=RegExp("["+Ju+co+ku+Wu+"]"),Vm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Gm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Zm=-1,gt={};gt[zs]=gt[Hs]=gt[Us]=gt[Ws]=gt[Bs]=gt[Vs]=gt[Gs]=gt[Zs]=gt[qs]=!0,gt[di]=gt[oo]=gt[er]=gt[Ji]=gt[hi]=gt[Ki]=gt[so]=gt[ao]=gt[pe]=gt[ji]=gt[Le]=gt[Xi]=gt[me]=gt[Qi]=gt[tr]=!1;var mt={};mt[di]=mt[oo]=mt[er]=mt[hi]=mt[Ji]=mt[Ki]=mt[zs]=mt[Hs]=mt[Us]=mt[Ws]=mt[Bs]=mt[pe]=mt[ji]=mt[Le]=mt[Xi]=mt[me]=mt[Qi]=mt[lo]=mt[Vs]=mt[Gs]=mt[Zs]=mt[qs]=!0,mt[so]=mt[ao]=mt[tr]=!1;var qm={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ym={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Km={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},jm=parseFloat,Xm=parseInt,nc=typeof global=="object"&&global&&global.Object===Object&&global,Qm=typeof self=="object"&&self&&self.Object===Object&&self,Lt=nc||Qm||Function("return this")(),ea=typeof $i=="object"&&$i&&!$i.nodeType&&$i,wn=ea&&typeof $r=="object"&&$r&&!$r.nodeType&&$r,ic=wn&&wn.exports===ea,na=ic&&nc.process,ne=function(){try{var w=wn&&wn.require&&wn.require("util").types;return w||na&&na.binding&&na.binding("util")}catch(E){}}(),rc=ne&&ne.isArrayBuffer,oc=ne&&ne.isDate,sc=ne&&ne.isMap,ac=ne&&ne.isRegExp,lc=ne&&ne.isSet,uc=ne&&ne.isTypedArray;function Jt(w,E,b){switch(b.length){case 0:return w.call(E);case 1:return w.call(E,b[0]);case 2:return w.call(E,b[0],b[1]);case 3:return w.call(E,b[0],b[1],b[2])}return w.apply(E,b)}function tg(w,E,b,D){for(var G=-1,ot=w==null?0:w.length;++G<ot;){var Ot=w[G];E(D,Ot,b(Ot),w)}return D}function ie(w,E){for(var b=-1,D=w==null?0:w.length;++b<D&&E(w[b],b,w)!==!1;);return w}function eg(w,E){for(var b=w==null?0:w.length;b--&&E(w[b],b,w)!==!1;);return w}function cc(w,E){for(var b=-1,D=w==null?0:w.length;++b<D;)if(!E(w[b],b,w))return!1;return!0}function Ke(w,E){for(var b=-1,D=w==null?0:w.length,G=0,ot=[];++b<D;){var Ot=w[b];E(Ot,b,w)&&(ot[G++]=Ot)}return ot}function fo(w,E){var b=w==null?0:w.length;return!!b&&pi(w,E,0)>-1}function ia(w,E,b){for(var D=-1,G=w==null?0:w.length;++D<G;)if(b(E,w[D]))return!0;return!1}function yt(w,E){for(var b=-1,D=w==null?0:w.length,G=Array(D);++b<D;)G[b]=E(w[b],b,w);return G}function je(w,E){for(var b=-1,D=E.length,G=w.length;++b<D;)w[G+b]=E[b];return w}function ra(w,E,b,D){var G=-1,ot=w==null?0:w.length;for(D&&ot&&(b=w[++G]);++G<ot;)b=E(b,w[G],G,w);return b}function ng(w,E,b,D){var G=w==null?0:w.length;for(D&&G&&(b=w[--G]);G--;)b=E(b,w[G],G,w);return b}function oa(w,E){for(var b=-1,D=w==null?0:w.length;++b<D;)if(E(w[b],b,w))return!0;return!1}var ig=sa("length");function rg(w){return w.split("")}function og(w){return w.match(fm)||[]}function dc(w,E,b){var D;return b(w,function(G,ot,Ot){if(E(G,ot,Ot))return D=ot,!1}),D}function po(w,E,b,D){for(var G=w.length,ot=b+(D?1:-1);D?ot--:++ot<G;)if(E(w[ot],ot,w))return ot;return-1}function pi(w,E,b){return E===E?vg(w,E,b):po(w,hc,b)}function sg(w,E,b,D){for(var G=b-1,ot=w.length;++G<ot;)if(D(w[G],E))return G;return-1}function hc(w){return w!==w}function fc(w,E){var b=w==null?0:w.length;return b?la(w,E)/b:ro}function sa(w){return function(E){return E==null?r:E[w]}}function aa(w){return function(E){return w==null?r:w[E]}}function pc(w,E,b,D,G){return G(w,function(ot,Ot,ht){b=D?(D=!1,ot):E(b,ot,Ot,ht)}),b}function ag(w,E){var b=w.length;for(w.sort(E);b--;)w[b]=w[b].value;return w}function la(w,E){for(var b,D=-1,G=w.length;++D<G;){var ot=E(w[D]);ot!==r&&(b=b===r?ot:b+ot)}return b}function ua(w,E){for(var b=-1,D=Array(w);++b<w;)D[b]=E(b);return D}function lg(w,E){return yt(E,function(b){return[b,w[b]]})}function mc(w){return w&&w.slice(0,_c(w)+1).replace(Js,"")}function Kt(w){return function(E){return w(E)}}function ca(w,E){return yt(E,function(b){return w[b]})}function nr(w,E){return w.has(E)}function gc(w,E){for(var b=-1,D=w.length;++b<D&&pi(E,w[b],0)>-1;);return b}function vc(w,E){for(var b=w.length;b--&&pi(E,w[b],0)>-1;);return b}function ug(w,E){for(var b=w.length,D=0;b--;)w[b]===E&&++D;return D}var cg=aa(qm),dg=aa(Ym);function hg(w){return"\\"+Km[w]}function fg(w,E){return w==null?r:w[E]}function mi(w){return Bm.test(w)}function pg(w){return Vm.test(w)}function mg(w){for(var E,b=[];!(E=w.next()).done;)b.push(E.value);return b}function da(w){var E=-1,b=Array(w.size);return w.forEach(function(D,G){b[++E]=[G,D]}),b}function yc(w,E){return function(b){return w(E(b))}}function Xe(w,E){for(var b=-1,D=w.length,G=0,ot=[];++b<D;){var Ot=w[b];(Ot===E||Ot===m)&&(w[b]=m,ot[G++]=b)}return ot}function mo(w){var E=-1,b=Array(w.size);return w.forEach(function(D){b[++E]=D}),b}function gg(w){var E=-1,b=Array(w.size);return w.forEach(function(D){b[++E]=[D,D]}),b}function vg(w,E,b){for(var D=b-1,G=w.length;++D<G;)if(w[D]===E)return D;return-1}function yg(w,E,b){for(var D=b+1;D--;)if(w[D]===E)return D;return D}function gi(w){return mi(w)?wg(w):ig(w)}function ge(w){return mi(w)?xg(w):rg(w)}function _c(w){for(var E=w.length;E--&&um.test(w.charAt(E)););return E}var _g=aa(Jm);function wg(w){for(var E=ta.lastIndex=0;ta.test(w);)++E;return E}function xg(w){return w.match(ta)||[]}function bg(w){return w.match(Wm)||[]}var Eg=function w(E){E=E==null?Lt:Qe.defaults(Lt.Object(),E,Qe.pick(Lt,Gm));var b=E.Array,D=E.Date,G=E.Error,ot=E.Function,Ot=E.Math,ht=E.Object,ha=E.RegExp,Tg=E.String,re=E.TypeError,go=b.prototype,Sg=ot.prototype,vi=ht.prototype,vo=E["__core-js_shared__"],yo=Sg.toString,ct=vi.hasOwnProperty,Ag=0,wc=function(){var t=/[^.]+$/.exec(vo&&vo.keys&&vo.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),_o=vi.toString,Og=yo.call(ht),$g=Lt._,Cg=ha("^"+yo.call(ct).replace(Ys,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),wo=ic?E.Buffer:r,tn=E.Symbol,xo=E.Uint8Array,xc=wo?wo.allocUnsafe:r,bo=yc(ht.getPrototypeOf,ht),bc=ht.create,Ec=vi.propertyIsEnumerable,Eo=go.splice,Tc=tn?tn.isConcatSpreadable:r,ir=tn?tn.iterator:r,xn=tn?tn.toStringTag:r,To=function(){try{var t=An(ht,"defineProperty");return t({},"",{}),t}catch(n){}}(),Ig=E.clearTimeout!==Lt.clearTimeout&&E.clearTimeout,Lg=D&&D.now!==Lt.Date.now&&D.now,Mg=E.setTimeout!==Lt.setTimeout&&E.setTimeout,So=Ot.ceil,Ao=Ot.floor,fa=ht.getOwnPropertySymbols,Ng=wo?wo.isBuffer:r,Sc=E.isFinite,Rg=go.join,Pg=yc(ht.keys,ht),$t=Ot.max,zt=Ot.min,Dg=D.now,Fg=E.parseInt,Ac=Ot.random,kg=go.reverse,pa=An(E,"DataView"),rr=An(E,"Map"),ma=An(E,"Promise"),yi=An(E,"Set"),or=An(E,"WeakMap"),sr=An(ht,"create"),Oo=or&&new or,_i={},zg=On(pa),Hg=On(rr),Ug=On(ma),Wg=On(yi),Bg=On(or),$o=tn?tn.prototype:r,ar=$o?$o.valueOf:r,Oc=$o?$o.toString:r;function h(t){if(Et(t)&&!Z(t)&&!(t instanceof nt)){if(t instanceof oe)return t;if(ct.call(t,"__wrapped__"))return $d(t)}return new oe(t)}var wi=function(){function t(){}return function(n){if(!_t(n))return{};if(bc)return bc(n);t.prototype=n;var s=new t;return t.prototype=r,s}}();function Co(){}function oe(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=r}h.templateSettings={escape:im,evaluate:rm,interpolate:Du,variable:"",imports:{_:h}},h.prototype=Co.prototype,h.prototype.constructor=h,oe.prototype=wi(Co.prototype),oe.prototype.constructor=oe;function nt(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Te,this.__views__=[]}function Vg(){var t=new nt(this.__wrapped__);return t.__actions__=Vt(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Vt(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Vt(this.__views__),t}function Gg(){if(this.__filtered__){var t=new nt(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Zg(){var t=this.__wrapped__.value(),n=this.__dir__,s=Z(t),l=n<0,d=s?t.length:0,f=ry(0,d,this.__views__),g=f.start,y=f.end,x=y-g,A=l?y:g-1,O=this.__iteratees__,I=O.length,N=0,F=zt(x,this.__takeCount__);if(!s||!l&&d==x&&F==x)return jc(t,this.__actions__);var U=[];t:for(;x--&&N<F;){A+=n;for(var J=-1,W=t[A];++J<I;){var tt=O[J],it=tt.iteratee,Qt=tt.type,Bt=it(W);if(Qt==Hp)W=Bt;else if(!Bt){if(Qt==Lu)continue t;break t}}U[N++]=W}return U}nt.prototype=wi(Co.prototype),nt.prototype.constructor=nt;function bn(t){var n=-1,s=t==null?0:t.length;for(this.clear();++n<s;){var l=t[n];this.set(l[0],l[1])}}function qg(){this.__data__=sr?sr(null):{},this.size=0}function Yg(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}function Jg(t){var n=this.__data__;if(sr){var s=n[t];return s===c?r:s}return ct.call(n,t)?n[t]:r}function Kg(t){var n=this.__data__;return sr?n[t]!==r:ct.call(n,t)}function jg(t,n){var s=this.__data__;return this.size+=this.has(t)?0:1,s[t]=sr&&n===r?c:n,this}bn.prototype.clear=qg,bn.prototype.delete=Yg,bn.prototype.get=Jg,bn.prototype.has=Kg,bn.prototype.set=jg;function Me(t){var n=-1,s=t==null?0:t.length;for(this.clear();++n<s;){var l=t[n];this.set(l[0],l[1])}}function Xg(){this.__data__=[],this.size=0}function Qg(t){var n=this.__data__,s=Io(n,t);if(s<0)return!1;var l=n.length-1;return s==l?n.pop():Eo.call(n,s,1),--this.size,!0}function tv(t){var n=this.__data__,s=Io(n,t);return s<0?r:n[s][1]}function ev(t){return Io(this.__data__,t)>-1}function nv(t,n){var s=this.__data__,l=Io(s,t);return l<0?(++this.size,s.push([t,n])):s[l][1]=n,this}Me.prototype.clear=Xg,Me.prototype.delete=Qg,Me.prototype.get=tv,Me.prototype.has=ev,Me.prototype.set=nv;function Ne(t){var n=-1,s=t==null?0:t.length;for(this.clear();++n<s;){var l=t[n];this.set(l[0],l[1])}}function iv(){this.size=0,this.__data__={hash:new bn,map:new(rr||Me),string:new bn}}function rv(t){var n=Wo(this,t).delete(t);return this.size-=n?1:0,n}function ov(t){return Wo(this,t).get(t)}function sv(t){return Wo(this,t).has(t)}function av(t,n){var s=Wo(this,t),l=s.size;return s.set(t,n),this.size+=s.size==l?0:1,this}Ne.prototype.clear=iv,Ne.prototype.delete=rv,Ne.prototype.get=ov,Ne.prototype.has=sv,Ne.prototype.set=av;function En(t){var n=-1,s=t==null?0:t.length;for(this.__data__=new Ne;++n<s;)this.add(t[n])}function lv(t){return this.__data__.set(t,c),this}function uv(t){return this.__data__.has(t)}En.prototype.add=En.prototype.push=lv,En.prototype.has=uv;function ve(t){var n=this.__data__=new Me(t);this.size=n.size}function cv(){this.__data__=new Me,this.size=0}function dv(t){var n=this.__data__,s=n.delete(t);return this.size=n.size,s}function hv(t){return this.__data__.get(t)}function fv(t){return this.__data__.has(t)}function pv(t,n){var s=this.__data__;if(s instanceof Me){var l=s.__data__;if(!rr||l.length<i-1)return l.push([t,n]),this.size=++s.size,this;s=this.__data__=new Ne(l)}return s.set(t,n),this.size=s.size,this}ve.prototype.clear=cv,ve.prototype.delete=dv,ve.prototype.get=hv,ve.prototype.has=fv,ve.prototype.set=pv;function $c(t,n){var s=Z(t),l=!s&&$n(t),d=!s&&!l&&sn(t),f=!s&&!l&&!d&&Ti(t),g=s||l||d||f,y=g?ua(t.length,Tg):[],x=y.length;for(var A in t)(n||ct.call(t,A))&&!(g&&(A=="length"||d&&(A=="offset"||A=="parent")||f&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||Fe(A,x)))&&y.push(A);return y}function Cc(t){var n=t.length;return n?t[Aa(0,n-1)]:r}function mv(t,n){return Bo(Vt(t),Tn(n,0,t.length))}function gv(t){return Bo(Vt(t))}function ga(t,n,s){(s!==r&&!ye(t[n],s)||s===r&&!(n in t))&&Re(t,n,s)}function lr(t,n,s){var l=t[n];(!(ct.call(t,n)&&ye(l,s))||s===r&&!(n in t))&&Re(t,n,s)}function Io(t,n){for(var s=t.length;s--;)if(ye(t[s][0],n))return s;return-1}function vv(t,n,s,l){return en(t,function(d,f,g){n(l,d,s(d),g)}),l}function Ic(t,n){return t&&Ae(n,Mt(n),t)}function yv(t,n){return t&&Ae(n,Zt(n),t)}function Re(t,n,s){n=="__proto__"&&To?To(t,n,{configurable:!0,enumerable:!0,value:s,writable:!0}):t[n]=s}function va(t,n){for(var s=-1,l=n.length,d=b(l),f=t==null;++s<l;)d[s]=f?r:ja(t,n[s]);return d}function Tn(t,n,s){return t===t&&(s!==r&&(t=t<=s?t:s),n!==r&&(t=t>=n?t:n)),t}function se(t,n,s,l,d,f){var g,y=n&_,x=n&T,A=n&S;if(s&&(g=d?s(t,l,d,f):s(t)),g!==r)return g;if(!_t(t))return t;var O=Z(t);if(O){if(g=sy(t),!y)return Vt(t,g)}else{var I=Ht(t),N=I==ao||I==Mu;if(sn(t))return td(t,y);if(I==Le||I==di||N&&!d){if(g=x||N?{}:_d(t),!y)return x?Jv(t,yv(g,t)):Yv(t,Ic(g,t))}else{if(!mt[I])return d?t:{};g=ay(t,I,y)}}f||(f=new ve);var F=f.get(t);if(F)return F;f.set(t,g),Yd(t)?t.forEach(function(W){g.add(se(W,n,s,W,t,f))}):Zd(t)&&t.forEach(function(W,tt){g.set(tt,se(W,n,s,tt,t,f))});var U=A?x?Fa:Da:x?Zt:Mt,J=O?r:U(t);return ie(J||t,function(W,tt){J&&(tt=W,W=t[tt]),lr(g,tt,se(W,n,s,tt,t,f))}),g}function _v(t){var n=Mt(t);return function(s){return Lc(s,t,n)}}function Lc(t,n,s){var l=s.length;if(t==null)return!l;for(t=ht(t);l--;){var d=s[l],f=n[d],g=t[d];if(g===r&&!(d in t)||!f(g))return!1}return!0}function Mc(t,n,s){if(typeof t!="function")throw new re(a);return mr(function(){t.apply(r,s)},n)}function ur(t,n,s,l){var d=-1,f=fo,g=!0,y=t.length,x=[],A=n.length;if(!y)return x;s&&(n=yt(n,Kt(s))),l?(f=ia,g=!1):n.length>=i&&(f=nr,g=!1,n=new En(n));t:for(;++d<y;){var O=t[d],I=s==null?O:s(O);if(O=l||O!==0?O:0,g&&I===I){for(var N=A;N--;)if(n[N]===I)continue t;x.push(O)}else f(n,I,l)||x.push(O)}return x}var en=od(Se),Nc=od(_a,!0);function wv(t,n){var s=!0;return en(t,function(l,d,f){return s=!!n(l,d,f),s}),s}function Lo(t,n,s){for(var l=-1,d=t.length;++l<d;){var f=t[l],g=n(f);if(g!=null&&(y===r?g===g&&!Xt(g):s(g,y)))var y=g,x=f}return x}function xv(t,n,s,l){var d=t.length;for(s=q(s),s<0&&(s=-s>d?0:d+s),l=l===r||l>d?d:q(l),l<0&&(l+=d),l=s>l?0:Kd(l);s<l;)t[s++]=n;return t}function Rc(t,n){var s=[];return en(t,function(l,d,f){n(l,d,f)&&s.push(l)}),s}function Ft(t,n,s,l,d){var f=-1,g=t.length;for(s||(s=uy),d||(d=[]);++f<g;){var y=t[f];n>0&&s(y)?n>1?Ft(y,n-1,s,l,d):je(d,y):l||(d[d.length]=y)}return d}var ya=sd(),Pc=sd(!0);function Se(t,n){return t&&ya(t,n,Mt)}function _a(t,n){return t&&Pc(t,n,Mt)}function Mo(t,n){return Ke(n,function(s){return ke(t[s])})}function Sn(t,n){n=rn(n,t);for(var s=0,l=n.length;t!=null&&s<l;)t=t[Oe(n[s++])];return s&&s==l?t:r}function Dc(t,n,s){var l=n(t);return Z(t)?l:je(l,s(t))}function Ut(t){return t==null?t===r?Kp:Yp:xn&&xn in ht(t)?iy(t):gy(t)}function wa(t,n){return t>n}function bv(t,n){return t!=null&&ct.call(t,n)}function Ev(t,n){return t!=null&&n in ht(t)}function Tv(t,n,s){return t>=zt(n,s)&&t<$t(n,s)}function xa(t,n,s){for(var l=s?ia:fo,d=t[0].length,f=t.length,g=f,y=b(f),x=1/0,A=[];g--;){var O=t[g];g&&n&&(O=yt(O,Kt(n))),x=zt(O.length,x),y[g]=!s&&(n||d>=120&&O.length>=120)?new En(g&&O):r}O=t[0];var I=-1,N=y[0];t:for(;++I<d&&A.length<x;){var F=O[I],U=n?n(F):F;if(F=s||F!==0?F:0,!(N?nr(N,U):l(A,U,s))){for(g=f;--g;){var J=y[g];if(!(J?nr(J,U):l(t[g],U,s)))continue t}N&&N.push(U),A.push(F)}}return A}function Sv(t,n,s,l){return Se(t,function(d,f,g){n(l,s(d),f,g)}),l}function cr(t,n,s){n=rn(n,t),t=Ed(t,n);var l=t==null?t:t[Oe(le(n))];return l==null?r:Jt(l,t,s)}function Fc(t){return Et(t)&&Ut(t)==di}function Av(t){return Et(t)&&Ut(t)==er}function Ov(t){return Et(t)&&Ut(t)==Ki}function dr(t,n,s,l,d){return t===n?!0:t==null||n==null||!Et(t)&&!Et(n)?t!==t&&n!==n:$v(t,n,s,l,dr,d)}function $v(t,n,s,l,d,f){var g=Z(t),y=Z(n),x=g?oo:Ht(t),A=y?oo:Ht(n);x=x==di?Le:x,A=A==di?Le:A;var O=x==Le,I=A==Le,N=x==A;if(N&&sn(t)){if(!sn(n))return!1;g=!0,O=!1}if(N&&!O)return f||(f=new ve),g||Ti(t)?gd(t,n,s,l,d,f):ey(t,n,x,s,l,d,f);if(!(s&M)){var F=O&&ct.call(t,"__wrapped__"),U=I&&ct.call(n,"__wrapped__");if(F||U){var J=F?t.value():t,W=U?n.value():n;return f||(f=new ve),d(J,W,s,l,f)}}return N?(f||(f=new ve),ny(t,n,s,l,d,f)):!1}function Cv(t){return Et(t)&&Ht(t)==pe}function ba(t,n,s,l){var d=s.length,f=d,g=!l;if(t==null)return!f;for(t=ht(t);d--;){var y=s[d];if(g&&y[2]?y[1]!==t[y[0]]:!(y[0]in t))return!1}for(;++d<f;){y=s[d];var x=y[0],A=t[x],O=y[1];if(g&&y[2]){if(A===r&&!(x in t))return!1}else{var I=new ve;if(l)var N=l(A,O,x,t,n,I);if(!(N===r?dr(O,A,M|$,l,I):N))return!1}}return!0}function kc(t){if(!_t(t)||dy(t))return!1;var n=ke(t)?Cg:_m;return n.test(On(t))}function Iv(t){return Et(t)&&Ut(t)==Xi}function Lv(t){return Et(t)&&Ht(t)==me}function Mv(t){return Et(t)&&Jo(t.length)&&!!gt[Ut(t)]}function zc(t){return typeof t=="function"?t:t==null?qt:typeof t=="object"?Z(t)?Wc(t[0],t[1]):Uc(t):ah(t)}function Ea(t){if(!pr(t))return Pg(t);var n=[];for(var s in ht(t))ct.call(t,s)&&s!="constructor"&&n.push(s);return n}function Nv(t){if(!_t(t))return my(t);var n=pr(t),s=[];for(var l in t)l=="constructor"&&(n||!ct.call(t,l))||s.push(l);return s}function Ta(t,n){return t<n}function Hc(t,n){var s=-1,l=Gt(t)?b(t.length):[];return en(t,function(d,f,g){l[++s]=n(d,f,g)}),l}function Uc(t){var n=za(t);return n.length==1&&n[0][2]?xd(n[0][0],n[0][1]):function(s){return s===t||ba(s,t,n)}}function Wc(t,n){return Ua(t)&&wd(n)?xd(Oe(t),n):function(s){var l=ja(s,t);return l===r&&l===n?Xa(s,t):dr(n,l,M|$)}}function No(t,n,s,l,d){t!==n&&ya(n,function(f,g){if(d||(d=new ve),_t(f))Rv(t,n,g,s,No,l,d);else{var y=l?l(Ba(t,g),f,g+"",t,n,d):r;y===r&&(y=f),ga(t,g,y)}},Zt)}function Rv(t,n,s,l,d,f,g){var y=Ba(t,s),x=Ba(n,s),A=g.get(x);if(A){ga(t,s,A);return}var O=f?f(y,x,s+"",t,n,g):r,I=O===r;if(I){var N=Z(x),F=!N&&sn(x),U=!N&&!F&&Ti(x);O=x,N||F||U?Z(y)?O=y:Tt(y)?O=Vt(y):F?(I=!1,O=td(x,!0)):U?(I=!1,O=ed(x,!0)):O=[]:gr(x)||$n(x)?(O=y,$n(y)?O=jd(y):(!_t(y)||ke(y))&&(O=_d(x))):I=!1}I&&(g.set(x,O),d(O,x,l,f,g),g.delete(x)),ga(t,s,O)}function Bc(t,n){var s=t.length;if(!!s)return n+=n<0?s:0,Fe(n,s)?t[n]:r}function Vc(t,n,s){n.length?n=yt(n,function(f){return Z(f)?function(g){return Sn(g,f.length===1?f[0]:f)}:f}):n=[qt];var l=-1;n=yt(n,Kt(H()));var d=Hc(t,function(f,g,y){var x=yt(n,function(A){return A(f)});return{criteria:x,index:++l,value:f}});return ag(d,function(f,g){return qv(f,g,s)})}function Pv(t,n){return Gc(t,n,function(s,l){return Xa(t,l)})}function Gc(t,n,s){for(var l=-1,d=n.length,f={};++l<d;){var g=n[l],y=Sn(t,g);s(y,g)&&hr(f,rn(g,t),y)}return f}function Dv(t){return function(n){return Sn(n,t)}}function Sa(t,n,s,l){var d=l?sg:pi,f=-1,g=n.length,y=t;for(t===n&&(n=Vt(n)),s&&(y=yt(t,Kt(s)));++f<g;)for(var x=0,A=n[f],O=s?s(A):A;(x=d(y,O,x,l))>-1;)y!==t&&Eo.call(y,x,1),Eo.call(t,x,1);return t}function Zc(t,n){for(var s=t?n.length:0,l=s-1;s--;){var d=n[s];if(s==l||d!==f){var f=d;Fe(d)?Eo.call(t,d,1):Ca(t,d)}}return t}function Aa(t,n){return t+Ao(Ac()*(n-t+1))}function Fv(t,n,s,l){for(var d=-1,f=$t(So((n-t)/(s||1)),0),g=b(f);f--;)g[l?f:++d]=t,t+=s;return g}function Oa(t,n){var s="";if(!t||n<1||n>Je)return s;do n%2&&(s+=t),n=Ao(n/2),n&&(t+=t);while(n);return s}function j(t,n){return Va(bd(t,n,qt),t+"")}function kv(t){return Cc(Si(t))}function zv(t,n){var s=Si(t);return Bo(s,Tn(n,0,s.length))}function hr(t,n,s,l){if(!_t(t))return t;n=rn(n,t);for(var d=-1,f=n.length,g=f-1,y=t;y!=null&&++d<f;){var x=Oe(n[d]),A=s;if(x==="__proto__"||x==="constructor"||x==="prototype")return t;if(d!=g){var O=y[x];A=l?l(O,x,y):r,A===r&&(A=_t(O)?O:Fe(n[d+1])?[]:{})}lr(y,x,A),y=y[x]}return t}var qc=Oo?function(t,n){return Oo.set(t,n),t}:qt,Hv=To?function(t,n){return To(t,"toString",{configurable:!0,enumerable:!1,value:tl(n),writable:!0})}:qt;function Uv(t){return Bo(Si(t))}function ae(t,n,s){var l=-1,d=t.length;n<0&&(n=-n>d?0:d+n),s=s>d?d:s,s<0&&(s+=d),d=n>s?0:s-n>>>0,n>>>=0;for(var f=b(d);++l<d;)f[l]=t[l+n];return f}function Wv(t,n){var s;return en(t,function(l,d,f){return s=n(l,d,f),!s}),!!s}function Ro(t,n,s){var l=0,d=t==null?l:t.length;if(typeof n=="number"&&n===n&&d<=Vp){for(;l<d;){var f=l+d>>>1,g=t[f];g!==null&&!Xt(g)&&(s?g<=n:g<n)?l=f+1:d=f}return d}return $a(t,n,qt,s)}function $a(t,n,s,l){var d=0,f=t==null?0:t.length;if(f===0)return 0;n=s(n);for(var g=n!==n,y=n===null,x=Xt(n),A=n===r;d<f;){var O=Ao((d+f)/2),I=s(t[O]),N=I!==r,F=I===null,U=I===I,J=Xt(I);if(g)var W=l||U;else A?W=U&&(l||N):y?W=U&&N&&(l||!F):x?W=U&&N&&!F&&(l||!J):F||J?W=!1:W=l?I<=n:I<n;W?d=O+1:f=O}return zt(f,Bp)}function Yc(t,n){for(var s=-1,l=t.length,d=0,f=[];++s<l;){var g=t[s],y=n?n(g):g;if(!s||!ye(y,x)){var x=y;f[d++]=g===0?0:g}}return f}function Jc(t){return typeof t=="number"?t:Xt(t)?ro:+t}function jt(t){if(typeof t=="string")return t;if(Z(t))return yt(t,jt)+"";if(Xt(t))return Oc?Oc.call(t):"";var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function nn(t,n,s){var l=-1,d=fo,f=t.length,g=!0,y=[],x=y;if(s)g=!1,d=ia;else if(f>=i){var A=n?null:Qv(t);if(A)return mo(A);g=!1,d=nr,x=new En}else x=n?[]:y;t:for(;++l<f;){var O=t[l],I=n?n(O):O;if(O=s||O!==0?O:0,g&&I===I){for(var N=x.length;N--;)if(x[N]===I)continue t;n&&x.push(I),y.push(O)}else d(x,I,s)||(x!==y&&x.push(I),y.push(O))}return y}function Ca(t,n){return n=rn(n,t),t=Ed(t,n),t==null||delete t[Oe(le(n))]}function Kc(t,n,s,l){return hr(t,n,s(Sn(t,n)),l)}function Po(t,n,s,l){for(var d=t.length,f=l?d:-1;(l?f--:++f<d)&&n(t[f],f,t););return s?ae(t,l?0:f,l?f+1:d):ae(t,l?f+1:0,l?d:f)}function jc(t,n){var s=t;return s instanceof nt&&(s=s.value()),ra(n,function(l,d){return d.func.apply(d.thisArg,je([l],d.args))},s)}function Ia(t,n,s){var l=t.length;if(l<2)return l?nn(t[0]):[];for(var d=-1,f=b(l);++d<l;)for(var g=t[d],y=-1;++y<l;)y!=d&&(f[d]=ur(f[d]||g,t[y],n,s));return nn(Ft(f,1),n,s)}function Xc(t,n,s){for(var l=-1,d=t.length,f=n.length,g={};++l<d;){var y=l<f?n[l]:r;s(g,t[l],y)}return g}function La(t){return Tt(t)?t:[]}function Ma(t){return typeof t=="function"?t:qt}function rn(t,n){return Z(t)?t:Ua(t,n)?[t]:Od(at(t))}var Bv=j;function on(t,n,s){var l=t.length;return s=s===r?l:s,!n&&s>=l?t:ae(t,n,s)}var Qc=Ig||function(t){return Lt.clearTimeout(t)};function td(t,n){if(n)return t.slice();var s=t.length,l=xc?xc(s):new t.constructor(s);return t.copy(l),l}function Na(t){var n=new t.constructor(t.byteLength);return new xo(n).set(new xo(t)),n}function Vv(t,n){var s=n?Na(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.byteLength)}function Gv(t){var n=new t.constructor(t.source,Fu.exec(t));return n.lastIndex=t.lastIndex,n}function Zv(t){return ar?ht(ar.call(t)):{}}function ed(t,n){var s=n?Na(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.length)}function nd(t,n){if(t!==n){var s=t!==r,l=t===null,d=t===t,f=Xt(t),g=n!==r,y=n===null,x=n===n,A=Xt(n);if(!y&&!A&&!f&&t>n||f&&g&&x&&!y&&!A||l&&g&&x||!s&&x||!d)return 1;if(!l&&!f&&!A&&t<n||A&&s&&d&&!l&&!f||y&&s&&d||!g&&d||!x)return-1}return 0}function qv(t,n,s){for(var l=-1,d=t.criteria,f=n.criteria,g=d.length,y=s.length;++l<g;){var x=nd(d[l],f[l]);if(x){if(l>=y)return x;var A=s[l];return x*(A=="desc"?-1:1)}}return t.index-n.index}function id(t,n,s,l){for(var d=-1,f=t.length,g=s.length,y=-1,x=n.length,A=$t(f-g,0),O=b(x+A),I=!l;++y<x;)O[y]=n[y];for(;++d<g;)(I||d<f)&&(O[s[d]]=t[d]);for(;A--;)O[y++]=t[d++];return O}function rd(t,n,s,l){for(var d=-1,f=t.length,g=-1,y=s.length,x=-1,A=n.length,O=$t(f-y,0),I=b(O+A),N=!l;++d<O;)I[d]=t[d];for(var F=d;++x<A;)I[F+x]=n[x];for(;++g<y;)(N||d<f)&&(I[F+s[g]]=t[d++]);return I}function Vt(t,n){var s=-1,l=t.length;for(n||(n=b(l));++s<l;)n[s]=t[s];return n}function Ae(t,n,s,l){var d=!s;s||(s={});for(var f=-1,g=n.length;++f<g;){var y=n[f],x=l?l(s[y],t[y],y,s,t):r;x===r&&(x=t[y]),d?Re(s,y,x):lr(s,y,x)}return s}function Yv(t,n){return Ae(t,Ha(t),n)}function Jv(t,n){return Ae(t,vd(t),n)}function Do(t,n){return function(s,l){var d=Z(s)?tg:vv,f=n?n():{};return d(s,t,H(l,2),f)}}function xi(t){return j(function(n,s){var l=-1,d=s.length,f=d>1?s[d-1]:r,g=d>2?s[2]:r;for(f=t.length>3&&typeof f=="function"?(d--,f):r,g&&Wt(s[0],s[1],g)&&(f=d<3?r:f,d=1),n=ht(n);++l<d;){var y=s[l];y&&t(n,y,l,f)}return n})}function od(t,n){return function(s,l){if(s==null)return s;if(!Gt(s))return t(s,l);for(var d=s.length,f=n?d:-1,g=ht(s);(n?f--:++f<d)&&l(g[f],f,g)!==!1;);return s}}function sd(t){return function(n,s,l){for(var d=-1,f=ht(n),g=l(n),y=g.length;y--;){var x=g[t?y:++d];if(s(f[x],x,f)===!1)break}return n}}function Kv(t,n,s){var l=n&P,d=fr(t);function f(){var g=this&&this!==Lt&&this instanceof f?d:t;return g.apply(l?s:this,arguments)}return f}function ad(t){return function(n){n=at(n);var s=mi(n)?ge(n):r,l=s?s[0]:n.charAt(0),d=s?on(s,1).join(""):n.slice(1);return l[t]()+d}}function bi(t){return function(n){return ra(oh(rh(n).replace(Hm,"")),t,"")}}function fr(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var s=wi(t.prototype),l=t.apply(s,n);return _t(l)?l:s}}function jv(t,n,s){var l=fr(t);function d(){for(var f=arguments.length,g=b(f),y=f,x=Ei(d);y--;)g[y]=arguments[y];var A=f<3&&g[0]!==x&&g[f-1]!==x?[]:Xe(g,x);if(f-=A.length,f<s)return hd(t,n,Fo,d.placeholder,r,g,A,r,r,s-f);var O=this&&this!==Lt&&this instanceof d?l:t;return Jt(O,this,g)}return d}function ld(t){return function(n,s,l){var d=ht(n);if(!Gt(n)){var f=H(s,3);n=Mt(n),s=function(y){return f(d[y],y,d)}}var g=t(n,s,l);return g>-1?d[f?n[g]:g]:r}}function ud(t){return De(function(n){var s=n.length,l=s,d=oe.prototype.thru;for(t&&n.reverse();l--;){var f=n[l];if(typeof f!="function")throw new re(a);if(d&&!g&&Uo(f)=="wrapper")var g=new oe([],!0)}for(l=g?l:s;++l<s;){f=n[l];var y=Uo(f),x=y=="wrapper"?ka(f):r;x&&Wa(x[0])&&x[1]==(fe|pt|It|gn)&&!x[4].length&&x[9]==1?g=g[Uo(x[0])].apply(g,x[3]):g=f.length==1&&Wa(f)?g[y]():g.thru(f)}return function(){var A=arguments,O=A[0];if(g&&A.length==1&&Z(O))return g.plant(O).value();for(var I=0,N=s?n[I].apply(this,A):O;++I<s;)N=n[I].call(this,N);return N}})}function Fo(t,n,s,l,d,f,g,y,x,A){var O=n&fe,I=n&P,N=n&vt,F=n&(pt|kt),U=n&vn,J=N?r:fr(t);function W(){for(var tt=arguments.length,it=b(tt),Qt=tt;Qt--;)it[Qt]=arguments[Qt];if(F)var Bt=Ei(W),te=ug(it,Bt);if(l&&(it=id(it,l,d,F)),f&&(it=rd(it,f,g,F)),tt-=te,F&&tt<A){var St=Xe(it,Bt);return hd(t,n,Fo,W.placeholder,s,it,St,y,x,A-tt)}var _e=I?s:this,He=N?_e[t]:t;return tt=it.length,y?it=vy(it,y):U&&tt>1&&it.reverse(),O&&x<tt&&(it.length=x),this&&this!==Lt&&this instanceof W&&(He=J||fr(He)),He.apply(_e,it)}return W}function cd(t,n){return function(s,l){return Sv(s,t,n(l),{})}}function ko(t,n){return function(s,l){var d;if(s===r&&l===r)return n;if(s!==r&&(d=s),l!==r){if(d===r)return l;typeof s=="string"||typeof l=="string"?(s=jt(s),l=jt(l)):(s=Jc(s),l=Jc(l)),d=t(s,l)}return d}}function Ra(t){return De(function(n){return n=yt(n,Kt(H())),j(function(s){var l=this;return t(n,function(d){return Jt(d,l,s)})})})}function zo(t,n){n=n===r?" ":jt(n);var s=n.length;if(s<2)return s?Oa(n,t):n;var l=Oa(n,So(t/gi(n)));return mi(n)?on(ge(l),0,t).join(""):l.slice(0,t)}function Xv(t,n,s,l){var d=n&P,f=fr(t);function g(){for(var y=-1,x=arguments.length,A=-1,O=l.length,I=b(O+x),N=this&&this!==Lt&&this instanceof g?f:t;++A<O;)I[A]=l[A];for(;x--;)I[A++]=arguments[++y];return Jt(N,d?s:this,I)}return g}function dd(t){return function(n,s,l){return l&&typeof l!="number"&&Wt(n,s,l)&&(s=l=r),n=ze(n),s===r?(s=n,n=0):s=ze(s),l=l===r?n<s?1:-1:ze(l),Fv(n,s,l,t)}}function Ho(t){return function(n,s){return typeof n=="string"&&typeof s=="string"||(n=ue(n),s=ue(s)),t(n,s)}}function hd(t,n,s,l,d,f,g,y,x,A){var O=n&pt,I=O?g:r,N=O?r:g,F=O?f:r,U=O?r:f;n|=O?It:Ye,n&=~(O?Ye:It),n&ut||(n&=~(P|vt));var J=[t,n,d,F,I,U,N,y,x,A],W=s.apply(r,J);return Wa(t)&&Td(W,J),W.placeholder=l,Sd(W,t,n)}function Pa(t){var n=Ot[t];return function(s,l){if(s=ue(s),l=l==null?0:zt(q(l),292),l&&Sc(s)){var d=(at(s)+"e").split("e"),f=n(d[0]+"e"+(+d[1]+l));return d=(at(f)+"e").split("e"),+(d[0]+"e"+(+d[1]-l))}return n(s)}}var Qv=yi&&1/mo(new yi([,-0]))[1]==_n?function(t){return new yi(t)}:il;function fd(t){return function(n){var s=Ht(n);return s==pe?da(n):s==me?gg(n):lg(n,t(n))}}function Pe(t,n,s,l,d,f,g,y){var x=n&vt;if(!x&&typeof t!="function")throw new re(a);var A=l?l.length:0;if(A||(n&=~(It|Ye),l=d=r),g=g===r?g:$t(q(g),0),y=y===r?y:q(y),A-=d?d.length:0,n&Ye){var O=l,I=d;l=d=r}var N=x?r:ka(t),F=[t,n,s,l,d,O,I,f,g,y];if(N&&py(F,N),t=F[0],n=F[1],s=F[2],l=F[3],d=F[4],y=F[9]=F[9]===r?x?0:t.length:$t(F[9]-A,0),!y&&n&(pt|kt)&&(n&=~(pt|kt)),!n||n==P)var U=Kv(t,n,s);else n==pt||n==kt?U=jv(t,n,y):(n==It||n==(P|It))&&!d.length?U=Xv(t,n,s,l):U=Fo.apply(r,F);var J=N?qc:Td;return Sd(J(U,F),t,n)}function pd(t,n,s,l){return t===r||ye(t,vi[s])&&!ct.call(l,s)?n:t}function md(t,n,s,l,d,f){return _t(t)&&_t(n)&&(f.set(n,t),No(t,n,r,md,f),f.delete(n)),t}function ty(t){return gr(t)?r:t}function gd(t,n,s,l,d,f){var g=s&M,y=t.length,x=n.length;if(y!=x&&!(g&&x>y))return!1;var A=f.get(t),O=f.get(n);if(A&&O)return A==n&&O==t;var I=-1,N=!0,F=s&$?new En:r;for(f.set(t,n),f.set(n,t);++I<y;){var U=t[I],J=n[I];if(l)var W=g?l(J,U,I,n,t,f):l(U,J,I,t,n,f);if(W!==r){if(W)continue;N=!1;break}if(F){if(!oa(n,function(tt,it){if(!nr(F,it)&&(U===tt||d(U,tt,s,l,f)))return F.push(it)})){N=!1;break}}else if(!(U===J||d(U,J,s,l,f))){N=!1;break}}return f.delete(t),f.delete(n),N}function ey(t,n,s,l,d,f,g){switch(s){case hi:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case er:return!(t.byteLength!=n.byteLength||!f(new xo(t),new xo(n)));case Ji:case Ki:case ji:return ye(+t,+n);case so:return t.name==n.name&&t.message==n.message;case Xi:case Qi:return t==n+"";case pe:var y=da;case me:var x=l&M;if(y||(y=mo),t.size!=n.size&&!x)return!1;var A=g.get(t);if(A)return A==n;l|=$,g.set(t,n);var O=gd(y(t),y(n),l,d,f,g);return g.delete(t),O;case lo:if(ar)return ar.call(t)==ar.call(n)}return!1}function ny(t,n,s,l,d,f){var g=s&M,y=Da(t),x=y.length,A=Da(n),O=A.length;if(x!=O&&!g)return!1;for(var I=x;I--;){var N=y[I];if(!(g?N in n:ct.call(n,N)))return!1}var F=f.get(t),U=f.get(n);if(F&&U)return F==n&&U==t;var J=!0;f.set(t,n),f.set(n,t);for(var W=g;++I<x;){N=y[I];var tt=t[N],it=n[N];if(l)var Qt=g?l(it,tt,N,n,t,f):l(tt,it,N,t,n,f);if(!(Qt===r?tt===it||d(tt,it,s,l,f):Qt)){J=!1;break}W||(W=N=="constructor")}if(J&&!W){var Bt=t.constructor,te=n.constructor;Bt!=te&&"constructor"in t&&"constructor"in n&&!(typeof Bt=="function"&&Bt instanceof Bt&&typeof te=="function"&&te instanceof te)&&(J=!1)}return f.delete(t),f.delete(n),J}function De(t){return Va(bd(t,r,Ld),t+"")}function Da(t){return Dc(t,Mt,Ha)}function Fa(t){return Dc(t,Zt,vd)}var ka=Oo?function(t){return Oo.get(t)}:il;function Uo(t){for(var n=t.name+"",s=_i[n],l=ct.call(_i,n)?s.length:0;l--;){var d=s[l],f=d.func;if(f==null||f==t)return d.name}return n}function Ei(t){var n=ct.call(h,"placeholder")?h:t;return n.placeholder}function H(){var t=h.iteratee||el;return t=t===el?zc:t,arguments.length?t(arguments[0],arguments[1]):t}function Wo(t,n){var s=t.__data__;return cy(n)?s[typeof n=="string"?"string":"hash"]:s.map}function za(t){for(var n=Mt(t),s=n.length;s--;){var l=n[s],d=t[l];n[s]=[l,d,wd(d)]}return n}function An(t,n){var s=fg(t,n);return kc(s)?s:r}function iy(t){var n=ct.call(t,xn),s=t[xn];try{t[xn]=r;var l=!0}catch(f){}var d=_o.call(t);return l&&(n?t[xn]=s:delete t[xn]),d}var Ha=fa?function(t){return t==null?[]:(t=ht(t),Ke(fa(t),function(n){return Ec.call(t,n)}))}:rl,vd=fa?function(t){for(var n=[];t;)je(n,Ha(t)),t=bo(t);return n}:rl,Ht=Ut;(pa&&Ht(new pa(new ArrayBuffer(1)))!=hi||rr&&Ht(new rr)!=pe||ma&&Ht(ma.resolve())!=Nu||yi&&Ht(new yi)!=me||or&&Ht(new or)!=tr)&&(Ht=function(t){var n=Ut(t),s=n==Le?t.constructor:r,l=s?On(s):"";if(l)switch(l){case zg:return hi;case Hg:return pe;case Ug:return Nu;case Wg:return me;case Bg:return tr}return n});function ry(t,n,s){for(var l=-1,d=s.length;++l<d;){var f=s[l],g=f.size;switch(f.type){case"drop":t+=g;break;case"dropRight":n-=g;break;case"take":n=zt(n,t+g);break;case"takeRight":t=$t(t,n-g);break}}return{start:t,end:n}}function oy(t){var n=t.match(dm);return n?n[1].split(hm):[]}function yd(t,n,s){n=rn(n,t);for(var l=-1,d=n.length,f=!1;++l<d;){var g=Oe(n[l]);if(!(f=t!=null&&s(t,g)))break;t=t[g]}return f||++l!=d?f:(d=t==null?0:t.length,!!d&&Jo(d)&&Fe(g,d)&&(Z(t)||$n(t)))}function sy(t){var n=t.length,s=new t.constructor(n);return n&&typeof t[0]=="string"&&ct.call(t,"index")&&(s.index=t.index,s.input=t.input),s}function _d(t){return typeof t.constructor=="function"&&!pr(t)?wi(bo(t)):{}}function ay(t,n,s){var l=t.constructor;switch(n){case er:return Na(t);case Ji:case Ki:return new l(+t);case hi:return Vv(t,s);case zs:case Hs:case Us:case Ws:case Bs:case Vs:case Gs:case Zs:case qs:return ed(t,s);case pe:return new l;case ji:case Qi:return new l(t);case Xi:return Gv(t);case me:return new l;case lo:return Zv(t)}}function ly(t,n){var s=n.length;if(!s)return t;var l=s-1;return n[l]=(s>1?"& ":"")+n[l],n=n.join(s>2?", ":" "),t.replace(cm,`{
/* [wrapped with `+n+`] */
`)}function uy(t){return Z(t)||$n(t)||!!(Tc&&t&&t[Tc])}function Fe(t,n){var s=typeof t;return n=n==null?Je:n,!!n&&(s=="number"||s!="symbol"&&xm.test(t))&&t>-1&&t%1==0&&t<n}function Wt(t,n,s){if(!_t(s))return!1;var l=typeof n;return(l=="number"?Gt(s)&&Fe(n,s.length):l=="string"&&n in s)?ye(s[n],t):!1}function Ua(t,n){if(Z(t))return!1;var s=typeof t;return s=="number"||s=="symbol"||s=="boolean"||t==null||Xt(t)?!0:sm.test(t)||!om.test(t)||n!=null&&t in ht(n)}function cy(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}function Wa(t){var n=Uo(t),s=h[n];if(typeof s!="function"||!(n in nt.prototype))return!1;if(t===s)return!0;var l=ka(s);return!!l&&t===l[0]}function dy(t){return!!wc&&wc in t}var hy=vo?ke:ol;function pr(t){var n=t&&t.constructor,s=typeof n=="function"&&n.prototype||vi;return t===s}function wd(t){return t===t&&!_t(t)}function xd(t,n){return function(s){return s==null?!1:s[t]===n&&(n!==r||t in ht(s))}}function fy(t){var n=qo(t,function(l){return s.size===p&&s.clear(),l}),s=n.cache;return n}function py(t,n){var s=t[1],l=n[1],d=s|l,f=d<(P|vt|fe),g=l==fe&&s==pt||l==fe&&s==gn&&t[7].length<=n[8]||l==(fe|gn)&&n[7].length<=n[8]&&s==pt;if(!(f||g))return t;l&P&&(t[2]=n[2],d|=s&P?0:ut);var y=n[3];if(y){var x=t[3];t[3]=x?id(x,y,n[4]):y,t[4]=x?Xe(t[3],m):n[4]}return y=n[5],y&&(x=t[5],t[5]=x?rd(x,y,n[6]):y,t[6]=x?Xe(t[5],m):n[6]),y=n[7],y&&(t[7]=y),l&fe&&(t[8]=t[8]==null?n[8]:zt(t[8],n[8])),t[9]==null&&(t[9]=n[9]),t[0]=n[0],t[1]=d,t}function my(t){var n=[];if(t!=null)for(var s in ht(t))n.push(s);return n}function gy(t){return _o.call(t)}function bd(t,n,s){return n=$t(n===r?t.length-1:n,0),function(){for(var l=arguments,d=-1,f=$t(l.length-n,0),g=b(f);++d<f;)g[d]=l[n+d];d=-1;for(var y=b(n+1);++d<n;)y[d]=l[d];return y[n]=s(g),Jt(t,this,y)}}function Ed(t,n){return n.length<2?t:Sn(t,ae(n,0,-1))}function vy(t,n){for(var s=t.length,l=zt(n.length,s),d=Vt(t);l--;){var f=n[l];t[l]=Fe(f,s)?d[f]:r}return t}function Ba(t,n){if(!(n==="constructor"&&typeof t[n]=="function")&&n!="__proto__")return t[n]}var Td=Ad(qc),mr=Mg||function(t,n){return Lt.setTimeout(t,n)},Va=Ad(Hv);function Sd(t,n,s){var l=n+"";return Va(t,ly(l,yy(oy(l),s)))}function Ad(t){var n=0,s=0;return function(){var l=Dg(),d=zp-(l-s);if(s=l,d>0){if(++n>=kp)return arguments[0]}else n=0;return t.apply(r,arguments)}}function Bo(t,n){var s=-1,l=t.length,d=l-1;for(n=n===r?l:n;++s<n;){var f=Aa(s,d),g=t[f];t[f]=t[s],t[s]=g}return t.length=n,t}var Od=fy(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(am,function(s,l,d,f){n.push(d?f.replace(mm,"$1"):l||s)}),n});function Oe(t){if(typeof t=="string"||Xt(t))return t;var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function On(t){if(t!=null){try{return yo.call(t)}catch(n){}try{return t+""}catch(n){}}return""}function yy(t,n){return ie(Gp,function(s){var l="_."+s[0];n&s[1]&&!fo(t,l)&&t.push(l)}),t.sort()}function $d(t){if(t instanceof nt)return t.clone();var n=new oe(t.__wrapped__,t.__chain__);return n.__actions__=Vt(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}function _y(t,n,s){(s?Wt(t,n,s):n===r)?n=1:n=$t(q(n),0);var l=t==null?0:t.length;if(!l||n<1)return[];for(var d=0,f=0,g=b(So(l/n));d<l;)g[f++]=ae(t,d,d+=n);return g}function wy(t){for(var n=-1,s=t==null?0:t.length,l=0,d=[];++n<s;){var f=t[n];f&&(d[l++]=f)}return d}function xy(){var t=arguments.length;if(!t)return[];for(var n=b(t-1),s=arguments[0],l=t;l--;)n[l-1]=arguments[l];return je(Z(s)?Vt(s):[s],Ft(n,1))}var by=j(function(t,n){return Tt(t)?ur(t,Ft(n,1,Tt,!0)):[]}),Ey=j(function(t,n){var s=le(n);return Tt(s)&&(s=r),Tt(t)?ur(t,Ft(n,1,Tt,!0),H(s,2)):[]}),Ty=j(function(t,n){var s=le(n);return Tt(s)&&(s=r),Tt(t)?ur(t,Ft(n,1,Tt,!0),r,s):[]});function Sy(t,n,s){var l=t==null?0:t.length;return l?(n=s||n===r?1:q(n),ae(t,n<0?0:n,l)):[]}function Ay(t,n,s){var l=t==null?0:t.length;return l?(n=s||n===r?1:q(n),n=l-n,ae(t,0,n<0?0:n)):[]}function Oy(t,n){return t&&t.length?Po(t,H(n,3),!0,!0):[]}function $y(t,n){return t&&t.length?Po(t,H(n,3),!0):[]}function Cy(t,n,s,l){var d=t==null?0:t.length;return d?(s&&typeof s!="number"&&Wt(t,n,s)&&(s=0,l=d),xv(t,n,s,l)):[]}function Cd(t,n,s){var l=t==null?0:t.length;if(!l)return-1;var d=s==null?0:q(s);return d<0&&(d=$t(l+d,0)),po(t,H(n,3),d)}function Id(t,n,s){var l=t==null?0:t.length;if(!l)return-1;var d=l-1;return s!==r&&(d=q(s),d=s<0?$t(l+d,0):zt(d,l-1)),po(t,H(n,3),d,!0)}function Ld(t){var n=t==null?0:t.length;return n?Ft(t,1):[]}function Iy(t){var n=t==null?0:t.length;return n?Ft(t,_n):[]}function Ly(t,n){var s=t==null?0:t.length;return s?(n=n===r?1:q(n),Ft(t,n)):[]}function My(t){for(var n=-1,s=t==null?0:t.length,l={};++n<s;){var d=t[n];l[d[0]]=d[1]}return l}function Md(t){return t&&t.length?t[0]:r}function Ny(t,n,s){var l=t==null?0:t.length;if(!l)return-1;var d=s==null?0:q(s);return d<0&&(d=$t(l+d,0)),pi(t,n,d)}function Ry(t){var n=t==null?0:t.length;return n?ae(t,0,-1):[]}var Py=j(function(t){var n=yt(t,La);return n.length&&n[0]===t[0]?xa(n):[]}),Dy=j(function(t){var n=le(t),s=yt(t,La);return n===le(s)?n=r:s.pop(),s.length&&s[0]===t[0]?xa(s,H(n,2)):[]}),Fy=j(function(t){var n=le(t),s=yt(t,La);return n=typeof n=="function"?n:r,n&&s.pop(),s.length&&s[0]===t[0]?xa(s,r,n):[]});function ky(t,n){return t==null?"":Rg.call(t,n)}function le(t){var n=t==null?0:t.length;return n?t[n-1]:r}function zy(t,n,s){var l=t==null?0:t.length;if(!l)return-1;var d=l;return s!==r&&(d=q(s),d=d<0?$t(l+d,0):zt(d,l-1)),n===n?yg(t,n,d):po(t,hc,d,!0)}function Hy(t,n){return t&&t.length?Bc(t,q(n)):r}var Uy=j(Nd);function Nd(t,n){return t&&t.length&&n&&n.length?Sa(t,n):t}function Wy(t,n,s){return t&&t.length&&n&&n.length?Sa(t,n,H(s,2)):t}function By(t,n,s){return t&&t.length&&n&&n.length?Sa(t,n,r,s):t}var Vy=De(function(t,n){var s=t==null?0:t.length,l=va(t,n);return Zc(t,yt(n,function(d){return Fe(d,s)?+d:d}).sort(nd)),l});function Gy(t,n){var s=[];if(!(t&&t.length))return s;var l=-1,d=[],f=t.length;for(n=H(n,3);++l<f;){var g=t[l];n(g,l,t)&&(s.push(g),d.push(l))}return Zc(t,d),s}function Ga(t){return t==null?t:kg.call(t)}function Zy(t,n,s){var l=t==null?0:t.length;return l?(s&&typeof s!="number"&&Wt(t,n,s)?(n=0,s=l):(n=n==null?0:q(n),s=s===r?l:q(s)),ae(t,n,s)):[]}function qy(t,n){return Ro(t,n)}function Yy(t,n,s){return $a(t,n,H(s,2))}function Jy(t,n){var s=t==null?0:t.length;if(s){var l=Ro(t,n);if(l<s&&ye(t[l],n))return l}return-1}function Ky(t,n){return Ro(t,n,!0)}function jy(t,n,s){return $a(t,n,H(s,2),!0)}function Xy(t,n){var s=t==null?0:t.length;if(s){var l=Ro(t,n,!0)-1;if(ye(t[l],n))return l}return-1}function Qy(t){return t&&t.length?Yc(t):[]}function t0(t,n){return t&&t.length?Yc(t,H(n,2)):[]}function e0(t){var n=t==null?0:t.length;return n?ae(t,1,n):[]}function n0(t,n,s){return t&&t.length?(n=s||n===r?1:q(n),ae(t,0,n<0?0:n)):[]}function i0(t,n,s){var l=t==null?0:t.length;return l?(n=s||n===r?1:q(n),n=l-n,ae(t,n<0?0:n,l)):[]}function r0(t,n){return t&&t.length?Po(t,H(n,3),!1,!0):[]}function o0(t,n){return t&&t.length?Po(t,H(n,3)):[]}var s0=j(function(t){return nn(Ft(t,1,Tt,!0))}),a0=j(function(t){var n=le(t);return Tt(n)&&(n=r),nn(Ft(t,1,Tt,!0),H(n,2))}),l0=j(function(t){var n=le(t);return n=typeof n=="function"?n:r,nn(Ft(t,1,Tt,!0),r,n)});function u0(t){return t&&t.length?nn(t):[]}function c0(t,n){return t&&t.length?nn(t,H(n,2)):[]}function d0(t,n){return n=typeof n=="function"?n:r,t&&t.length?nn(t,r,n):[]}function Za(t){if(!(t&&t.length))return[];var n=0;return t=Ke(t,function(s){if(Tt(s))return n=$t(s.length,n),!0}),ua(n,function(s){return yt(t,sa(s))})}function Rd(t,n){if(!(t&&t.length))return[];var s=Za(t);return n==null?s:yt(s,function(l){return Jt(n,r,l)})}var h0=j(function(t,n){return Tt(t)?ur(t,n):[]}),f0=j(function(t){return Ia(Ke(t,Tt))}),p0=j(function(t){var n=le(t);return Tt(n)&&(n=r),Ia(Ke(t,Tt),H(n,2))}),m0=j(function(t){var n=le(t);return n=typeof n=="function"?n:r,Ia(Ke(t,Tt),r,n)}),g0=j(Za);function v0(t,n){return Xc(t||[],n||[],lr)}function y0(t,n){return Xc(t||[],n||[],hr)}var _0=j(function(t){var n=t.length,s=n>1?t[n-1]:r;return s=typeof s=="function"?(t.pop(),s):r,Rd(t,s)});function Pd(t){var n=h(t);return n.__chain__=!0,n}function w0(t,n){return n(t),t}function Vo(t,n){return n(t)}var x0=De(function(t){var n=t.length,s=n?t[0]:0,l=this.__wrapped__,d=function(f){return va(f,t)};return n>1||this.__actions__.length||!(l instanceof nt)||!Fe(s)?this.thru(d):(l=l.slice(s,+s+(n?1:0)),l.__actions__.push({func:Vo,args:[d],thisArg:r}),new oe(l,this.__chain__).thru(function(f){return n&&!f.length&&f.push(r),f}))});function b0(){return Pd(this)}function E0(){return new oe(this.value(),this.__chain__)}function T0(){this.__values__===r&&(this.__values__=Jd(this.value()));var t=this.__index__>=this.__values__.length,n=t?r:this.__values__[this.__index__++];return{done:t,value:n}}function S0(){return this}function A0(t){for(var n,s=this;s instanceof Co;){var l=$d(s);l.__index__=0,l.__values__=r,n?d.__wrapped__=l:n=l;var d=l;s=s.__wrapped__}return d.__wrapped__=t,n}function O0(){var t=this.__wrapped__;if(t instanceof nt){var n=t;return this.__actions__.length&&(n=new nt(this)),n=n.reverse(),n.__actions__.push({func:Vo,args:[Ga],thisArg:r}),new oe(n,this.__chain__)}return this.thru(Ga)}function $0(){return jc(this.__wrapped__,this.__actions__)}var C0=Do(function(t,n,s){ct.call(t,s)?++t[s]:Re(t,s,1)});function I0(t,n,s){var l=Z(t)?cc:wv;return s&&Wt(t,n,s)&&(n=r),l(t,H(n,3))}function L0(t,n){var s=Z(t)?Ke:Rc;return s(t,H(n,3))}var M0=ld(Cd),N0=ld(Id);function R0(t,n){return Ft(Go(t,n),1)}function P0(t,n){return Ft(Go(t,n),_n)}function D0(t,n,s){return s=s===r?1:q(s),Ft(Go(t,n),s)}function Dd(t,n){var s=Z(t)?ie:en;return s(t,H(n,3))}function Fd(t,n){var s=Z(t)?eg:Nc;return s(t,H(n,3))}var F0=Do(function(t,n,s){ct.call(t,s)?t[s].push(n):Re(t,s,[n])});function k0(t,n,s,l){t=Gt(t)?t:Si(t),s=s&&!l?q(s):0;var d=t.length;return s<0&&(s=$t(d+s,0)),Ko(t)?s<=d&&t.indexOf(n,s)>-1:!!d&&pi(t,n,s)>-1}var z0=j(function(t,n,s){var l=-1,d=typeof n=="function",f=Gt(t)?b(t.length):[];return en(t,function(g){f[++l]=d?Jt(n,g,s):cr(g,n,s)}),f}),H0=Do(function(t,n,s){Re(t,s,n)});function Go(t,n){var s=Z(t)?yt:Hc;return s(t,H(n,3))}function U0(t,n,s,l){return t==null?[]:(Z(n)||(n=n==null?[]:[n]),s=l?r:s,Z(s)||(s=s==null?[]:[s]),Vc(t,n,s))}var W0=Do(function(t,n,s){t[s?0:1].push(n)},function(){return[[],[]]});function B0(t,n,s){var l=Z(t)?ra:pc,d=arguments.length<3;return l(t,H(n,4),s,d,en)}function V0(t,n,s){var l=Z(t)?ng:pc,d=arguments.length<3;return l(t,H(n,4),s,d,Nc)}function G0(t,n){var s=Z(t)?Ke:Rc;return s(t,Yo(H(n,3)))}function Z0(t){var n=Z(t)?Cc:kv;return n(t)}function q0(t,n,s){(s?Wt(t,n,s):n===r)?n=1:n=q(n);var l=Z(t)?mv:zv;return l(t,n)}function Y0(t){var n=Z(t)?gv:Uv;return n(t)}function J0(t){if(t==null)return 0;if(Gt(t))return Ko(t)?gi(t):t.length;var n=Ht(t);return n==pe||n==me?t.size:Ea(t).length}function K0(t,n,s){var l=Z(t)?oa:Wv;return s&&Wt(t,n,s)&&(n=r),l(t,H(n,3))}var j0=j(function(t,n){if(t==null)return[];var s=n.length;return s>1&&Wt(t,n[0],n[1])?n=[]:s>2&&Wt(n[0],n[1],n[2])&&(n=[n[0]]),Vc(t,Ft(n,1),[])}),Zo=Lg||function(){return Lt.Date.now()};function X0(t,n){if(typeof n!="function")throw new re(a);return t=q(t),function(){if(--t<1)return n.apply(this,arguments)}}function kd(t,n,s){return n=s?r:n,n=t&&n==null?t.length:n,Pe(t,fe,r,r,r,r,n)}function zd(t,n){var s;if(typeof n!="function")throw new re(a);return t=q(t),function(){return--t>0&&(s=n.apply(this,arguments)),t<=1&&(n=r),s}}var qa=j(function(t,n,s){var l=P;if(s.length){var d=Xe(s,Ei(qa));l|=It}return Pe(t,l,n,s,d)}),Hd=j(function(t,n,s){var l=P|vt;if(s.length){var d=Xe(s,Ei(Hd));l|=It}return Pe(n,l,t,s,d)});function Ud(t,n,s){n=s?r:n;var l=Pe(t,pt,r,r,r,r,r,n);return l.placeholder=Ud.placeholder,l}function Wd(t,n,s){n=s?r:n;var l=Pe(t,kt,r,r,r,r,r,n);return l.placeholder=Wd.placeholder,l}function Bd(t,n,s){var l,d,f,g,y,x,A=0,O=!1,I=!1,N=!0;if(typeof t!="function")throw new re(a);n=ue(n)||0,_t(s)&&(O=!!s.leading,I="maxWait"in s,f=I?$t(ue(s.maxWait)||0,n):f,N="trailing"in s?!!s.trailing:N);function F(St){var _e=l,He=d;return l=d=r,A=St,g=t.apply(He,_e),g}function U(St){return A=St,y=mr(tt,n),O?F(St):g}function J(St){var _e=St-x,He=St-A,lh=n-_e;return I?zt(lh,f-He):lh}function W(St){var _e=St-x,He=St-A;return x===r||_e>=n||_e<0||I&&He>=f}function tt(){var St=Zo();if(W(St))return it(St);y=mr(tt,J(St))}function it(St){return y=r,N&&l?F(St):(l=d=r,g)}function Qt(){y!==r&&Qc(y),A=0,l=x=d=y=r}function Bt(){return y===r?g:it(Zo())}function te(){var St=Zo(),_e=W(St);if(l=arguments,d=this,x=St,_e){if(y===r)return U(x);if(I)return Qc(y),y=mr(tt,n),F(x)}return y===r&&(y=mr(tt,n)),g}return te.cancel=Qt,te.flush=Bt,te}var Q0=j(function(t,n){return Mc(t,1,n)}),t_=j(function(t,n,s){return Mc(t,ue(n)||0,s)});function e_(t){return Pe(t,vn)}function qo(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new re(a);var s=function(){var l=arguments,d=n?n.apply(this,l):l[0],f=s.cache;if(f.has(d))return f.get(d);var g=t.apply(this,l);return s.cache=f.set(d,g)||f,g};return s.cache=new(qo.Cache||Ne),s}qo.Cache=Ne;function Yo(t){if(typeof t!="function")throw new re(a);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function n_(t){return zd(2,t)}var i_=Bv(function(t,n){n=n.length==1&&Z(n[0])?yt(n[0],Kt(H())):yt(Ft(n,1),Kt(H()));var s=n.length;return j(function(l){for(var d=-1,f=zt(l.length,s);++d<f;)l[d]=n[d].call(this,l[d]);return Jt(t,this,l)})}),Ya=j(function(t,n){var s=Xe(n,Ei(Ya));return Pe(t,It,r,n,s)}),Vd=j(function(t,n){var s=Xe(n,Ei(Vd));return Pe(t,Ye,r,n,s)}),r_=De(function(t,n){return Pe(t,gn,r,r,r,n)});function o_(t,n){if(typeof t!="function")throw new re(a);return n=n===r?n:q(n),j(t,n)}function s_(t,n){if(typeof t!="function")throw new re(a);return n=n==null?0:$t(q(n),0),j(function(s){var l=s[n],d=on(s,0,n);return l&&je(d,l),Jt(t,this,d)})}function a_(t,n,s){var l=!0,d=!0;if(typeof t!="function")throw new re(a);return _t(s)&&(l="leading"in s?!!s.leading:l,d="trailing"in s?!!s.trailing:d),Bd(t,n,{leading:l,maxWait:n,trailing:d})}function l_(t){return kd(t,1)}function u_(t,n){return Ya(Ma(n),t)}function c_(){if(!arguments.length)return[];var t=arguments[0];return Z(t)?t:[t]}function d_(t){return se(t,S)}function h_(t,n){return n=typeof n=="function"?n:r,se(t,S,n)}function f_(t){return se(t,_|S)}function p_(t,n){return n=typeof n=="function"?n:r,se(t,_|S,n)}function m_(t,n){return n==null||Lc(t,n,Mt(n))}function ye(t,n){return t===n||t!==t&&n!==n}var g_=Ho(wa),v_=Ho(function(t,n){return t>=n}),$n=Fc(function(){return arguments}())?Fc:function(t){return Et(t)&&ct.call(t,"callee")&&!Ec.call(t,"callee")},Z=b.isArray,y_=rc?Kt(rc):Av;function Gt(t){return t!=null&&Jo(t.length)&&!ke(t)}function Tt(t){return Et(t)&&Gt(t)}function __(t){return t===!0||t===!1||Et(t)&&Ut(t)==Ji}var sn=Ng||ol,w_=oc?Kt(oc):Ov;function x_(t){return Et(t)&&t.nodeType===1&&!gr(t)}function b_(t){if(t==null)return!0;if(Gt(t)&&(Z(t)||typeof t=="string"||typeof t.splice=="function"||sn(t)||Ti(t)||$n(t)))return!t.length;var n=Ht(t);if(n==pe||n==me)return!t.size;if(pr(t))return!Ea(t).length;for(var s in t)if(ct.call(t,s))return!1;return!0}function E_(t,n){return dr(t,n)}function T_(t,n,s){s=typeof s=="function"?s:r;var l=s?s(t,n):r;return l===r?dr(t,n,r,s):!!l}function Ja(t){if(!Et(t))return!1;var n=Ut(t);return n==so||n==qp||typeof t.message=="string"&&typeof t.name=="string"&&!gr(t)}function S_(t){return typeof t=="number"&&Sc(t)}function ke(t){if(!_t(t))return!1;var n=Ut(t);return n==ao||n==Mu||n==Zp||n==Jp}function Gd(t){return typeof t=="number"&&t==q(t)}function Jo(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Je}function _t(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}function Et(t){return t!=null&&typeof t=="object"}var Zd=sc?Kt(sc):Cv;function A_(t,n){return t===n||ba(t,n,za(n))}function O_(t,n,s){return s=typeof s=="function"?s:r,ba(t,n,za(n),s)}function $_(t){return qd(t)&&t!=+t}function C_(t){if(hy(t))throw new G(o);return kc(t)}function I_(t){return t===null}function L_(t){return t==null}function qd(t){return typeof t=="number"||Et(t)&&Ut(t)==ji}function gr(t){if(!Et(t)||Ut(t)!=Le)return!1;var n=bo(t);if(n===null)return!0;var s=ct.call(n,"constructor")&&n.constructor;return typeof s=="function"&&s instanceof s&&yo.call(s)==Og}var Ka=ac?Kt(ac):Iv;function M_(t){return Gd(t)&&t>=-Je&&t<=Je}var Yd=lc?Kt(lc):Lv;function Ko(t){return typeof t=="string"||!Z(t)&&Et(t)&&Ut(t)==Qi}function Xt(t){return typeof t=="symbol"||Et(t)&&Ut(t)==lo}var Ti=uc?Kt(uc):Mv;function N_(t){return t===r}function R_(t){return Et(t)&&Ht(t)==tr}function P_(t){return Et(t)&&Ut(t)==jp}var D_=Ho(Ta),F_=Ho(function(t,n){return t<=n});function Jd(t){if(!t)return[];if(Gt(t))return Ko(t)?ge(t):Vt(t);if(ir&&t[ir])return mg(t[ir]());var n=Ht(t),s=n==pe?da:n==me?mo:Si;return s(t)}function ze(t){if(!t)return t===0?t:0;if(t=ue(t),t===_n||t===-_n){var n=t<0?-1:1;return n*Wp}return t===t?t:0}function q(t){var n=ze(t),s=n%1;return n===n?s?n-s:n:0}function Kd(t){return t?Tn(q(t),0,Te):0}function ue(t){if(typeof t=="number")return t;if(Xt(t))return ro;if(_t(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=_t(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=mc(t);var s=ym.test(t);return s||wm.test(t)?Xm(t.slice(2),s?2:8):vm.test(t)?ro:+t}function jd(t){return Ae(t,Zt(t))}function k_(t){return t?Tn(q(t),-Je,Je):t===0?t:0}function at(t){return t==null?"":jt(t)}var z_=xi(function(t,n){if(pr(n)||Gt(n)){Ae(n,Mt(n),t);return}for(var s in n)ct.call(n,s)&&lr(t,s,n[s])}),Xd=xi(function(t,n){Ae(n,Zt(n),t)}),jo=xi(function(t,n,s,l){Ae(n,Zt(n),t,l)}),H_=xi(function(t,n,s,l){Ae(n,Mt(n),t,l)}),U_=De(va);function W_(t,n){var s=wi(t);return n==null?s:Ic(s,n)}var B_=j(function(t,n){t=ht(t);var s=-1,l=n.length,d=l>2?n[2]:r;for(d&&Wt(n[0],n[1],d)&&(l=1);++s<l;)for(var f=n[s],g=Zt(f),y=-1,x=g.length;++y<x;){var A=g[y],O=t[A];(O===r||ye(O,vi[A])&&!ct.call(t,A))&&(t[A]=f[A])}return t}),V_=j(function(t){return t.push(r,md),Jt(Qd,r,t)});function G_(t,n){return dc(t,H(n,3),Se)}function Z_(t,n){return dc(t,H(n,3),_a)}function q_(t,n){return t==null?t:ya(t,H(n,3),Zt)}function Y_(t,n){return t==null?t:Pc(t,H(n,3),Zt)}function J_(t,n){return t&&Se(t,H(n,3))}function K_(t,n){return t&&_a(t,H(n,3))}function j_(t){return t==null?[]:Mo(t,Mt(t))}function X_(t){return t==null?[]:Mo(t,Zt(t))}function ja(t,n,s){var l=t==null?r:Sn(t,n);return l===r?s:l}function Q_(t,n){return t!=null&&yd(t,n,bv)}function Xa(t,n){return t!=null&&yd(t,n,Ev)}var tw=cd(function(t,n,s){n!=null&&typeof n.toString!="function"&&(n=_o.call(n)),t[n]=s},tl(qt)),ew=cd(function(t,n,s){n!=null&&typeof n.toString!="function"&&(n=_o.call(n)),ct.call(t,n)?t[n].push(s):t[n]=[s]},H),nw=j(cr);function Mt(t){return Gt(t)?$c(t):Ea(t)}function Zt(t){return Gt(t)?$c(t,!0):Nv(t)}function iw(t,n){var s={};return n=H(n,3),Se(t,function(l,d,f){Re(s,n(l,d,f),l)}),s}function rw(t,n){var s={};return n=H(n,3),Se(t,function(l,d,f){Re(s,d,n(l,d,f))}),s}var ow=xi(function(t,n,s){No(t,n,s)}),Qd=xi(function(t,n,s,l){No(t,n,s,l)}),sw=De(function(t,n){var s={};if(t==null)return s;var l=!1;n=yt(n,function(f){return f=rn(f,t),l||(l=f.length>1),f}),Ae(t,Fa(t),s),l&&(s=se(s,_|T|S,ty));for(var d=n.length;d--;)Ca(s,n[d]);return s});function aw(t,n){return th(t,Yo(H(n)))}var lw=De(function(t,n){return t==null?{}:Pv(t,n)});function th(t,n){if(t==null)return{};var s=yt(Fa(t),function(l){return[l]});return n=H(n),Gc(t,s,function(l,d){return n(l,d[0])})}function uw(t,n,s){n=rn(n,t);var l=-1,d=n.length;for(d||(d=1,t=r);++l<d;){var f=t==null?r:t[Oe(n[l])];f===r&&(l=d,f=s),t=ke(f)?f.call(t):f}return t}function cw(t,n,s){return t==null?t:hr(t,n,s)}function dw(t,n,s,l){return l=typeof l=="function"?l:r,t==null?t:hr(t,n,s,l)}var eh=fd(Mt),nh=fd(Zt);function hw(t,n,s){var l=Z(t),d=l||sn(t)||Ti(t);if(n=H(n,4),s==null){var f=t&&t.constructor;d?s=l?new f:[]:_t(t)?s=ke(f)?wi(bo(t)):{}:s={}}return(d?ie:Se)(t,function(g,y,x){return n(s,g,y,x)}),s}function fw(t,n){return t==null?!0:Ca(t,n)}function pw(t,n,s){return t==null?t:Kc(t,n,Ma(s))}function mw(t,n,s,l){return l=typeof l=="function"?l:r,t==null?t:Kc(t,n,Ma(s),l)}function Si(t){return t==null?[]:ca(t,Mt(t))}function gw(t){return t==null?[]:ca(t,Zt(t))}function vw(t,n,s){return s===r&&(s=n,n=r),s!==r&&(s=ue(s),s=s===s?s:0),n!==r&&(n=ue(n),n=n===n?n:0),Tn(ue(t),n,s)}function yw(t,n,s){return n=ze(n),s===r?(s=n,n=0):s=ze(s),t=ue(t),Tv(t,n,s)}function _w(t,n,s){if(s&&typeof s!="boolean"&&Wt(t,n,s)&&(n=s=r),s===r&&(typeof n=="boolean"?(s=n,n=r):typeof t=="boolean"&&(s=t,t=r)),t===r&&n===r?(t=0,n=1):(t=ze(t),n===r?(n=t,t=0):n=ze(n)),t>n){var l=t;t=n,n=l}if(s||t%1||n%1){var d=Ac();return zt(t+d*(n-t+jm("1e-"+((d+"").length-1))),n)}return Aa(t,n)}var ww=bi(function(t,n,s){return n=n.toLowerCase(),t+(s?ih(n):n)});function ih(t){return Qa(at(t).toLowerCase())}function rh(t){return t=at(t),t&&t.replace(bm,cg).replace(Um,"")}function xw(t,n,s){t=at(t),n=jt(n);var l=t.length;s=s===r?l:Tn(q(s),0,l);var d=s;return s-=n.length,s>=0&&t.slice(s,d)==n}function bw(t){return t=at(t),t&&nm.test(t)?t.replace(Pu,dg):t}function Ew(t){return t=at(t),t&&lm.test(t)?t.replace(Ys,"\\$&"):t}var Tw=bi(function(t,n,s){return t+(s?"-":"")+n.toLowerCase()}),Sw=bi(function(t,n,s){return t+(s?" ":"")+n.toLowerCase()}),Aw=ad("toLowerCase");function Ow(t,n,s){t=at(t),n=q(n);var l=n?gi(t):0;if(!n||l>=n)return t;var d=(n-l)/2;return zo(Ao(d),s)+t+zo(So(d),s)}function $w(t,n,s){t=at(t),n=q(n);var l=n?gi(t):0;return n&&l<n?t+zo(n-l,s):t}function Cw(t,n,s){t=at(t),n=q(n);var l=n?gi(t):0;return n&&l<n?zo(n-l,s)+t:t}function Iw(t,n,s){return s||n==null?n=0:n&&(n=+n),Fg(at(t).replace(Js,""),n||0)}function Lw(t,n,s){return(s?Wt(t,n,s):n===r)?n=1:n=q(n),Oa(at(t),n)}function Mw(){var t=arguments,n=at(t[0]);return t.length<3?n:n.replace(t[1],t[2])}var Nw=bi(function(t,n,s){return t+(s?"_":"")+n.toLowerCase()});function Rw(t,n,s){return s&&typeof s!="number"&&Wt(t,n,s)&&(n=s=r),s=s===r?Te:s>>>0,s?(t=at(t),t&&(typeof n=="string"||n!=null&&!Ka(n))&&(n=jt(n),!n&&mi(t))?on(ge(t),0,s):t.split(n,s)):[]}var Pw=bi(function(t,n,s){return t+(s?" ":"")+Qa(n)});function Dw(t,n,s){return t=at(t),s=s==null?0:Tn(q(s),0,t.length),n=jt(n),t.slice(s,s+n.length)==n}function Fw(t,n,s){var l=h.templateSettings;s&&Wt(t,n,s)&&(n=r),t=at(t),n=jo({},n,l,pd);var d=jo({},n.imports,l.imports,pd),f=Mt(d),g=ca(d,f),y,x,A=0,O=n.interpolate||uo,I="__p += '",N=ha((n.escape||uo).source+"|"+O.source+"|"+(O===Du?gm:uo).source+"|"+(n.evaluate||uo).source+"|$","g"),F="//# sourceURL="+(ct.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Zm+"]")+`
`;t.replace(N,function(W,tt,it,Qt,Bt,te){return it||(it=Qt),I+=t.slice(A,te).replace(Em,hg),tt&&(y=!0,I+=`' +
__e(`+tt+`) +
'`),Bt&&(x=!0,I+=`';
`+Bt+`;
__p += '`),it&&(I+=`' +
((__t = (`+it+`)) == null ? '' : __t) +
'`),A=te+W.length,W}),I+=`';
`;var U=ct.call(n,"variable")&&n.variable;if(!U)I=`with (obj) {
`+I+`
}
`;else if(pm.test(U))throw new G(u);I=(x?I.replace(Xp,""):I).replace(Qp,"$1").replace(tm,"$1;"),I="function("+(U||"obj")+`) {
`+(U?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(x?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+I+`return __p
}`;var J=sh(function(){return ot(f,F+"return "+I).apply(r,g)});if(J.source=I,Ja(J))throw J;return J}function kw(t){return at(t).toLowerCase()}function zw(t){return at(t).toUpperCase()}function Hw(t,n,s){if(t=at(t),t&&(s||n===r))return mc(t);if(!t||!(n=jt(n)))return t;var l=ge(t),d=ge(n),f=gc(l,d),g=vc(l,d)+1;return on(l,f,g).join("")}function Uw(t,n,s){if(t=at(t),t&&(s||n===r))return t.slice(0,_c(t)+1);if(!t||!(n=jt(n)))return t;var l=ge(t),d=vc(l,ge(n))+1;return on(l,0,d).join("")}function Ww(t,n,s){if(t=at(t),t&&(s||n===r))return t.replace(Js,"");if(!t||!(n=jt(n)))return t;var l=ge(t),d=gc(l,ge(n));return on(l,d).join("")}function Bw(t,n){var s=yn,l=ks;if(_t(n)){var d="separator"in n?n.separator:d;s="length"in n?q(n.length):s,l="omission"in n?jt(n.omission):l}t=at(t);var f=t.length;if(mi(t)){var g=ge(t);f=g.length}if(s>=f)return t;var y=s-gi(l);if(y<1)return l;var x=g?on(g,0,y).join(""):t.slice(0,y);if(d===r)return x+l;if(g&&(y+=x.length-y),Ka(d)){if(t.slice(y).search(d)){var A,O=x;for(d.global||(d=ha(d.source,at(Fu.exec(d))+"g")),d.lastIndex=0;A=d.exec(O);)var I=A.index;x=x.slice(0,I===r?y:I)}}else if(t.indexOf(jt(d),y)!=y){var N=x.lastIndexOf(d);N>-1&&(x=x.slice(0,N))}return x+l}function Vw(t){return t=at(t),t&&em.test(t)?t.replace(Ru,_g):t}var Gw=bi(function(t,n,s){return t+(s?" ":"")+n.toUpperCase()}),Qa=ad("toUpperCase");function oh(t,n,s){return t=at(t),n=s?r:n,n===r?pg(t)?bg(t):og(t):t.match(n)||[]}var sh=j(function(t,n){try{return Jt(t,r,n)}catch(s){return Ja(s)?s:new G(s)}}),Zw=De(function(t,n){return ie(n,function(s){s=Oe(s),Re(t,s,qa(t[s],t))}),t});function qw(t){var n=t==null?0:t.length,s=H();return t=n?yt(t,function(l){if(typeof l[1]!="function")throw new re(a);return[s(l[0]),l[1]]}):[],j(function(l){for(var d=-1;++d<n;){var f=t[d];if(Jt(f[0],this,l))return Jt(f[1],this,l)}})}function Yw(t){return _v(se(t,_))}function tl(t){return function(){return t}}function Jw(t,n){return t==null||t!==t?n:t}var Kw=ud(),jw=ud(!0);function qt(t){return t}function el(t){return zc(typeof t=="function"?t:se(t,_))}function Xw(t){return Uc(se(t,_))}function Qw(t,n){return Wc(t,se(n,_))}var tx=j(function(t,n){return function(s){return cr(s,t,n)}}),ex=j(function(t,n){return function(s){return cr(t,s,n)}});function nl(t,n,s){var l=Mt(n),d=Mo(n,l);s==null&&!(_t(n)&&(d.length||!l.length))&&(s=n,n=t,t=this,d=Mo(n,Mt(n)));var f=!(_t(s)&&"chain"in s)||!!s.chain,g=ke(t);return ie(d,function(y){var x=n[y];t[y]=x,g&&(t.prototype[y]=function(){var A=this.__chain__;if(f||A){var O=t(this.__wrapped__),I=O.__actions__=Vt(this.__actions__);return I.push({func:x,args:arguments,thisArg:t}),O.__chain__=A,O}return x.apply(t,je([this.value()],arguments))})}),t}function nx(){return Lt._===this&&(Lt._=$g),this}function il(){}function ix(t){return t=q(t),j(function(n){return Bc(n,t)})}var rx=Ra(yt),ox=Ra(cc),sx=Ra(oa);function ah(t){return Ua(t)?sa(Oe(t)):Dv(t)}function ax(t){return function(n){return t==null?r:Sn(t,n)}}var lx=dd(),ux=dd(!0);function rl(){return[]}function ol(){return!1}function cx(){return{}}function dx(){return""}function hx(){return!0}function fx(t,n){if(t=q(t),t<1||t>Je)return[];var s=Te,l=zt(t,Te);n=H(n),t-=Te;for(var d=ua(l,n);++s<t;)n(s);return d}function px(t){return Z(t)?yt(t,Oe):Xt(t)?[t]:Vt(Od(at(t)))}function mx(t){var n=++Ag;return at(t)+n}var gx=ko(function(t,n){return t+n},0),vx=Pa("ceil"),yx=ko(function(t,n){return t/n},1),_x=Pa("floor");function wx(t){return t&&t.length?Lo(t,qt,wa):r}function xx(t,n){return t&&t.length?Lo(t,H(n,2),wa):r}function bx(t){return fc(t,qt)}function Ex(t,n){return fc(t,H(n,2))}function Tx(t){return t&&t.length?Lo(t,qt,Ta):r}function Sx(t,n){return t&&t.length?Lo(t,H(n,2),Ta):r}var Ax=ko(function(t,n){return t*n},1),Ox=Pa("round"),$x=ko(function(t,n){return t-n},0);function Cx(t){return t&&t.length?la(t,qt):0}function Ix(t,n){return t&&t.length?la(t,H(n,2)):0}return h.after=X0,h.ary=kd,h.assign=z_,h.assignIn=Xd,h.assignInWith=jo,h.assignWith=H_,h.at=U_,h.before=zd,h.bind=qa,h.bindAll=Zw,h.bindKey=Hd,h.castArray=c_,h.chain=Pd,h.chunk=_y,h.compact=wy,h.concat=xy,h.cond=qw,h.conforms=Yw,h.constant=tl,h.countBy=C0,h.create=W_,h.curry=Ud,h.curryRight=Wd,h.debounce=Bd,h.defaults=B_,h.defaultsDeep=V_,h.defer=Q0,h.delay=t_,h.difference=by,h.differenceBy=Ey,h.differenceWith=Ty,h.drop=Sy,h.dropRight=Ay,h.dropRightWhile=Oy,h.dropWhile=$y,h.fill=Cy,h.filter=L0,h.flatMap=R0,h.flatMapDeep=P0,h.flatMapDepth=D0,h.flatten=Ld,h.flattenDeep=Iy,h.flattenDepth=Ly,h.flip=e_,h.flow=Kw,h.flowRight=jw,h.fromPairs=My,h.functions=j_,h.functionsIn=X_,h.groupBy=F0,h.initial=Ry,h.intersection=Py,h.intersectionBy=Dy,h.intersectionWith=Fy,h.invert=tw,h.invertBy=ew,h.invokeMap=z0,h.iteratee=el,h.keyBy=H0,h.keys=Mt,h.keysIn=Zt,h.map=Go,h.mapKeys=iw,h.mapValues=rw,h.matches=Xw,h.matchesProperty=Qw,h.memoize=qo,h.merge=ow,h.mergeWith=Qd,h.method=tx,h.methodOf=ex,h.mixin=nl,h.negate=Yo,h.nthArg=ix,h.omit=sw,h.omitBy=aw,h.once=n_,h.orderBy=U0,h.over=rx,h.overArgs=i_,h.overEvery=ox,h.overSome=sx,h.partial=Ya,h.partialRight=Vd,h.partition=W0,h.pick=lw,h.pickBy=th,h.property=ah,h.propertyOf=ax,h.pull=Uy,h.pullAll=Nd,h.pullAllBy=Wy,h.pullAllWith=By,h.pullAt=Vy,h.range=lx,h.rangeRight=ux,h.rearg=r_,h.reject=G0,h.remove=Gy,h.rest=o_,h.reverse=Ga,h.sampleSize=q0,h.set=cw,h.setWith=dw,h.shuffle=Y0,h.slice=Zy,h.sortBy=j0,h.sortedUniq=Qy,h.sortedUniqBy=t0,h.split=Rw,h.spread=s_,h.tail=e0,h.take=n0,h.takeRight=i0,h.takeRightWhile=r0,h.takeWhile=o0,h.tap=w0,h.throttle=a_,h.thru=Vo,h.toArray=Jd,h.toPairs=eh,h.toPairsIn=nh,h.toPath=px,h.toPlainObject=jd,h.transform=hw,h.unary=l_,h.union=s0,h.unionBy=a0,h.unionWith=l0,h.uniq=u0,h.uniqBy=c0,h.uniqWith=d0,h.unset=fw,h.unzip=Za,h.unzipWith=Rd,h.update=pw,h.updateWith=mw,h.values=Si,h.valuesIn=gw,h.without=h0,h.words=oh,h.wrap=u_,h.xor=f0,h.xorBy=p0,h.xorWith=m0,h.zip=g0,h.zipObject=v0,h.zipObjectDeep=y0,h.zipWith=_0,h.entries=eh,h.entriesIn=nh,h.extend=Xd,h.extendWith=jo,nl(h,h),h.add=gx,h.attempt=sh,h.camelCase=ww,h.capitalize=ih,h.ceil=vx,h.clamp=vw,h.clone=d_,h.cloneDeep=f_,h.cloneDeepWith=p_,h.cloneWith=h_,h.conformsTo=m_,h.deburr=rh,h.defaultTo=Jw,h.divide=yx,h.endsWith=xw,h.eq=ye,h.escape=bw,h.escapeRegExp=Ew,h.every=I0,h.find=M0,h.findIndex=Cd,h.findKey=G_,h.findLast=N0,h.findLastIndex=Id,h.findLastKey=Z_,h.floor=_x,h.forEach=Dd,h.forEachRight=Fd,h.forIn=q_,h.forInRight=Y_,h.forOwn=J_,h.forOwnRight=K_,h.get=ja,h.gt=g_,h.gte=v_,h.has=Q_,h.hasIn=Xa,h.head=Md,h.identity=qt,h.includes=k0,h.indexOf=Ny,h.inRange=yw,h.invoke=nw,h.isArguments=$n,h.isArray=Z,h.isArrayBuffer=y_,h.isArrayLike=Gt,h.isArrayLikeObject=Tt,h.isBoolean=__,h.isBuffer=sn,h.isDate=w_,h.isElement=x_,h.isEmpty=b_,h.isEqual=E_,h.isEqualWith=T_,h.isError=Ja,h.isFinite=S_,h.isFunction=ke,h.isInteger=Gd,h.isLength=Jo,h.isMap=Zd,h.isMatch=A_,h.isMatchWith=O_,h.isNaN=$_,h.isNative=C_,h.isNil=L_,h.isNull=I_,h.isNumber=qd,h.isObject=_t,h.isObjectLike=Et,h.isPlainObject=gr,h.isRegExp=Ka,h.isSafeInteger=M_,h.isSet=Yd,h.isString=Ko,h.isSymbol=Xt,h.isTypedArray=Ti,h.isUndefined=N_,h.isWeakMap=R_,h.isWeakSet=P_,h.join=ky,h.kebabCase=Tw,h.last=le,h.lastIndexOf=zy,h.lowerCase=Sw,h.lowerFirst=Aw,h.lt=D_,h.lte=F_,h.max=wx,h.maxBy=xx,h.mean=bx,h.meanBy=Ex,h.min=Tx,h.minBy=Sx,h.stubArray=rl,h.stubFalse=ol,h.stubObject=cx,h.stubString=dx,h.stubTrue=hx,h.multiply=Ax,h.nth=Hy,h.noConflict=nx,h.noop=il,h.now=Zo,h.pad=Ow,h.padEnd=$w,h.padStart=Cw,h.parseInt=Iw,h.random=_w,h.reduce=B0,h.reduceRight=V0,h.repeat=Lw,h.replace=Mw,h.result=uw,h.round=Ox,h.runInContext=w,h.sample=Z0,h.size=J0,h.snakeCase=Nw,h.some=K0,h.sortedIndex=qy,h.sortedIndexBy=Yy,h.sortedIndexOf=Jy,h.sortedLastIndex=Ky,h.sortedLastIndexBy=jy,h.sortedLastIndexOf=Xy,h.startCase=Pw,h.startsWith=Dw,h.subtract=$x,h.sum=Cx,h.sumBy=Ix,h.template=Fw,h.times=fx,h.toFinite=ze,h.toInteger=q,h.toLength=Kd,h.toLower=kw,h.toNumber=ue,h.toSafeInteger=k_,h.toString=at,h.toUpper=zw,h.trim=Hw,h.trimEnd=Uw,h.trimStart=Ww,h.truncate=Bw,h.unescape=Vw,h.uniqueId=mx,h.upperCase=Gw,h.upperFirst=Qa,h.each=Dd,h.eachRight=Fd,h.first=Md,nl(h,function(){var t={};return Se(h,function(n,s){ct.call(h.prototype,s)||(t[s]=n)}),t}(),{chain:!1}),h.VERSION=e,ie(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){h[t].placeholder=h}),ie(["drop","take"],function(t,n){nt.prototype[t]=function(s){s=s===r?1:$t(q(s),0);var l=this.__filtered__&&!n?new nt(this):this.clone();return l.__filtered__?l.__takeCount__=zt(s,l.__takeCount__):l.__views__.push({size:zt(s,Te),type:t+(l.__dir__<0?"Right":"")}),l},nt.prototype[t+"Right"]=function(s){return this.reverse()[t](s).reverse()}}),ie(["filter","map","takeWhile"],function(t,n){var s=n+1,l=s==Lu||s==Up;nt.prototype[t]=function(d){var f=this.clone();return f.__iteratees__.push({iteratee:H(d,3),type:s}),f.__filtered__=f.__filtered__||l,f}}),ie(["head","last"],function(t,n){var s="take"+(n?"Right":"");nt.prototype[t]=function(){return this[s](1).value()[0]}}),ie(["initial","tail"],function(t,n){var s="drop"+(n?"":"Right");nt.prototype[t]=function(){return this.__filtered__?new nt(this):this[s](1)}}),nt.prototype.compact=function(){return this.filter(qt)},nt.prototype.find=function(t){return this.filter(t).head()},nt.prototype.findLast=function(t){return this.reverse().find(t)},nt.prototype.invokeMap=j(function(t,n){return typeof t=="function"?new nt(this):this.map(function(s){return cr(s,t,n)})}),nt.prototype.reject=function(t){return this.filter(Yo(H(t)))},nt.prototype.slice=function(t,n){t=q(t);var s=this;return s.__filtered__&&(t>0||n<0)?new nt(s):(t<0?s=s.takeRight(-t):t&&(s=s.drop(t)),n!==r&&(n=q(n),s=n<0?s.dropRight(-n):s.take(n-t)),s)},nt.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},nt.prototype.toArray=function(){return this.take(Te)},Se(nt.prototype,function(t,n){var s=/^(?:filter|find|map|reject)|While$/.test(n),l=/^(?:head|last)$/.test(n),d=h[l?"take"+(n=="last"?"Right":""):n],f=l||/^find/.test(n);!d||(h.prototype[n]=function(){var g=this.__wrapped__,y=l?[1]:arguments,x=g instanceof nt,A=y[0],O=x||Z(g),I=function(tt){var it=d.apply(h,je([tt],y));return l&&N?it[0]:it};O&&s&&typeof A=="function"&&A.length!=1&&(x=O=!1);var N=this.__chain__,F=!!this.__actions__.length,U=f&&!N,J=x&&!F;if(!f&&O){g=J?g:new nt(this);var W=t.apply(g,y);return W.__actions__.push({func:Vo,args:[I],thisArg:r}),new oe(W,N)}return U&&J?t.apply(this,y):(W=this.thru(I),U?l?W.value()[0]:W.value():W)})}),ie(["pop","push","shift","sort","splice","unshift"],function(t){var n=go[t],s=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",l=/^(?:pop|shift)$/.test(t);h.prototype[t]=function(){var d=arguments;if(l&&!this.__chain__){var f=this.value();return n.apply(Z(f)?f:[],d)}return this[s](function(g){return n.apply(Z(g)?g:[],d)})}}),Se(nt.prototype,function(t,n){var s=h[n];if(s){var l=s.name+"";ct.call(_i,l)||(_i[l]=[]),_i[l].push({name:n,func:s})}}),_i[Fo(r,vt).name]=[{name:"wrapper",func:r}],nt.prototype.clone=Vg,nt.prototype.reverse=Gg,nt.prototype.value=Zg,h.prototype.at=x0,h.prototype.chain=b0,h.prototype.commit=E0,h.prototype.next=T0,h.prototype.plant=A0,h.prototype.reverse=O0,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=$0,h.prototype.first=h.prototype.head,ir&&(h.prototype[ir]=S0),h},Qe=Eg();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Lt._=Qe,define(function(){return Qe})):wn?((wn.exports=Qe)._=Qe,ea._=Qe):Lt._=Qe}).call($i)});v();v();v();v();v();var ts=globalThis,ns=ts.ShadowRoot&&(ts.ShadyCSS===void 0||ts.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ph=Symbol(),fh=new WeakMap,es=class{constructor(e,i,o){if(this._$cssResult$=!0,o!==ph)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o,i=this.t;if(ns&&e===void 0){let o=i!==void 0&&i.length===1;o&&(e=fh.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&fh.set(i,e))}return e}toString(){return this.cssText}},mh=r=>new es(typeof r=="string"?r:r+"",void 0,ph);var ll=(r,e)=>{if(ns)r.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of e){let o=document.createElement("style"),a=ts.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=i.cssText,r.appendChild(o)}},is=ns?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let i="";for(let o of e.cssRules)i+=o.cssText;return mh(i)})(r):r;var{is:Hx,defineProperty:Ux,getOwnPropertyDescriptor:Wx,getOwnPropertyNames:Bx,getOwnPropertySymbols:Vx,getPrototypeOf:Gx}=Object,an=globalThis,gh=an.trustedTypes,Zx=gh?gh.emptyScript:"",ul=an.reactiveElementPolyfillSupport,yr=(r,e)=>r,rs={toAttribute(r,e){switch(e){case Boolean:r=r?Zx:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let i=r;switch(e){case Boolean:i=r!==null;break;case Number:i=r===null?null:Number(r);break;case Object:case Array:try{i=JSON.parse(r)}catch(o){i=null}}return i}},cl=(r,e)=>!Hx(r,e),vh={attribute:!0,type:String,converter:rs,reflect:!1,hasChanged:cl},yh,_h;(yh=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(_h=an.litPropertyMetadata)!=null||(an.litPropertyMetadata=new WeakMap);var Cn=class extends HTMLElement{static addInitializer(e){var i;this._$Ei(),((i=this.l)!=null?i:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=vh){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(e,i),!i.noAccessor){let o=Symbol(),a=this.getPropertyDescriptor(e,o,i);a!==void 0&&Ux(this.prototype,e,a)}}static getPropertyDescriptor(e,i,o){var c;let{get:a,set:u}=(c=Wx(this.prototype,e))!=null?c:{get(){return this[i]},set(p){this[i]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);u.call(this,p),this.requestUpdate(e,m,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var i;return(i=this.elementProperties.get(e))!=null?i:vh}static _$Ei(){if(this.hasOwnProperty(yr("elementProperties")))return;let e=Gx(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(yr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yr("properties"))){let i=this.properties,o=[...Bx(i),...Vx(i)];for(let a of o)this.createProperty(a,i[a])}let e=this[Symbol.metadata];if(e!==null){let i=litPropertyMetadata.get(e);if(i!==void 0)for(let[o,a]of i)this.elementProperties.set(o,a)}this._$Eh=new Map;for(let[i,o]of this.elementProperties){let a=this._$Eu(i,o);a!==void 0&&this._$Eh.set(a,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let i=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let a of o)i.unshift(is(a))}else e!==void 0&&i.push(is(e));return i}static _$Eu(e,i){let o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i,o;((i=this._$ES)!=null?i:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var i;(i=this._$ES)==null||i.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,i=this.constructor.elementProperties;for(let o of i.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var i;let e=(i=this.shadowRoot)!=null?i:this.attachShadow(this.constructor.shadowRootOptions);return ll(e,this.constructor.elementStyles),e}connectedCallback(){var e,i;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$ES)==null||i.forEach(o=>{var a;return(a=o.hostConnected)==null?void 0:a.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(i=>{var o;return(o=i.hostDisconnected)==null?void 0:o.call(i)})}attributeChangedCallback(e,i,o){this._$AK(e,o)}_$EO(e,i){var u;let o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(a!==void 0&&o.reflect===!0){let c=(((u=o.converter)==null?void 0:u.toAttribute)!==void 0?o.converter:rs).toAttribute(i,o.type);this._$Em=e,c==null?this.removeAttribute(a):this.setAttribute(a,c),this._$Em=null}}_$AK(e,i){var u;let o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let c=o.getPropertyOptions(a),p=typeof c.converter=="function"?{fromAttribute:c.converter}:((u=c.converter)==null?void 0:u.fromAttribute)!==void 0?c.converter:rs;this._$Em=a,this[a]=p.fromAttribute(i,c.type),this._$Em=null}}requestUpdate(e,i,o,a=!1,u){var c;if(e!==void 0){if(o!=null||(o=this.constructor.getPropertyOptions(e)),!((c=o.hasChanged)!=null?c:cl)(a?u:this[e],i))return;this.C(e,i,o)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,i,o){var a;this._$AL.has(e)||this._$AL.set(e,i),o.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return vr(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(i){Promise.reject(i)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[u,c]of this._$Ep)this[u]=c;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[u,c]of a)c.wrapped!==!0||this._$AL.has(u)||this[u]===void 0||this.C(u,this[u],c)}let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(o=this._$ES)==null||o.forEach(a=>{var u;return(u=a.hostUpdate)==null?void 0:u.call(a)}),this.update(i)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(i)}willUpdate(e){}_$AE(e){var i;(i=this._$ES)==null||i.forEach(o=>{var a;return(a=o.hostUpdated)==null?void 0:a.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EO(i,this[i]))),this._$ET()}updated(e){}firstUpdated(e){}},wh;Cn.elementStyles=[],Cn.shadowRootOptions={mode:"open"},Cn[yr("elementProperties")]=new Map,Cn[yr("finalized")]=new Map,ul==null||ul({ReactiveElement:Cn}),((wh=an.reactiveElementVersions)!=null?wh:an.reactiveElementVersions=[]).push("2.0.0");v();var wr=globalThis,os=wr.trustedTypes,xh=os?os.createPolicy("lit-html",{createHTML:r=>r}):void 0,fl="$lit$",Ue=`lit$${(Math.random()+"").slice(9)}$`,pl="?"+Ue,qx=`<${pl}>`,Mn=document,ss=()=>Mn.createComment(""),xr=r=>r===null||typeof r!="object"&&typeof r!="function",$h=Array.isArray,Ch=r=>$h(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",dl=`[ 	
\f\r]`,_r=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bh=/-->/g,Eh=/>/g,In=RegExp(`>|${dl}(?:([^\\s"'>=/]+)(${dl}*=${dl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Th=/'/g,Sh=/"/g,Ih=/^(?:script|style|textarea|title)$/i,Lh=r=>(e,...i)=>({_$litType$:r,strings:e,values:i}),nT=Lh(1),iT=Lh(2),We=Symbol.for("lit-noChange"),Nt=Symbol.for("lit-nothing"),Ah=new WeakMap,Ln=Mn.createTreeWalker(Mn,129);function Mh(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return xh!==void 0?xh.createHTML(e):e}var Nh=(r,e)=>{let i=r.length-1,o=[],a,u=e===2?"<svg>":"",c=_r;for(let p=0;p<i;p++){let m=r[p],_,T,S=-1,M=0;for(;M<m.length&&(c.lastIndex=M,T=c.exec(m),T!==null);)M=c.lastIndex,c===_r?T[1]==="!--"?c=bh:T[1]!==void 0?c=Eh:T[2]!==void 0?(Ih.test(T[2])&&(a=RegExp("</"+T[2],"g")),c=In):T[3]!==void 0&&(c=In):c===In?T[0]===">"?(c=a!=null?a:_r,S=-1):T[1]===void 0?S=-2:(S=c.lastIndex-T[2].length,_=T[1],c=T[3]===void 0?In:T[3]==='"'?Sh:Th):c===Sh||c===Th?c=In:c===bh||c===Eh?c=_r:(c=In,a=void 0);let $=c===In&&r[p+1].startsWith("/>")?" ":"";u+=c===_r?m+qx:S>=0?(o.push(_),m.slice(0,S)+fl+m.slice(S)+Ue+$):m+Ue+(S===-2?p:$)}return[Mh(r,u+(r[i]||"<?>")+(e===2?"</svg>":"")),o]},Nn=class{constructor({strings:e,_$litType$:i},o){let a;this.parts=[];let u=0,c=0,p=e.length-1,m=this.parts,[_,T]=Nh(e,i);if(this.el=Nn.createElement(_,o),Ln.currentNode=this.el.content,i===2){let S=this.el.content.firstChild;S.replaceWith(...S.childNodes)}for(;(a=Ln.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let S of a.getAttributeNames())if(S.endsWith(fl)){let M=T[c++],$=a.getAttribute(S).split(Ue),P=/([.?@])?(.*)/.exec(M);m.push({type:1,index:u,name:P[2],strings:$,ctor:P[1]==="."?ls:P[1]==="?"?us:P[1]==="@"?cs:Dn}),a.removeAttribute(S)}else S.startsWith(Ue)&&(m.push({type:6,index:u}),a.removeAttribute(S));if(Ih.test(a.tagName)){let S=a.textContent.split(Ue),M=S.length-1;if(M>0){a.textContent=os?os.emptyScript:"";for(let $=0;$<M;$++)a.append(S[$],ss()),Ln.nextNode(),m.push({type:2,index:++u});a.append(S[M],ss())}}}else if(a.nodeType===8)if(a.data===pl)m.push({type:2,index:u});else{let S=-1;for(;(S=a.data.indexOf(Ue,S+1))!==-1;)m.push({type:7,index:u}),S+=Ue.length-1}u++}}static createElement(e,i){let o=Mn.createElement("template");return o.innerHTML=e,o}};function Rn(r,e,i=r,o){var c,p,m;if(e===We)return e;let a=o!==void 0?(c=i._$Co)==null?void 0:c[o]:i._$Cl,u=xr(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),u===void 0?a=void 0:(a=new u(r),a._$AT(r,i,o)),o!==void 0?((m=i._$Co)!=null?m:i._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(e=Rn(r,a._$AS(r,e.values),a,o)),e}var as=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var _;let{el:{content:i},parts:o}=this._$AD,a=((_=e==null?void 0:e.creationScope)!=null?_:Mn).importNode(i,!0);Ln.currentNode=a;let u=Ln.nextNode(),c=0,p=0,m=o[0];for(;m!==void 0;){if(c===m.index){let T;m.type===2?T=new Pn(u,u.nextSibling,this,e):m.type===1?T=new m.ctor(u,m.name,m.strings,this,e):m.type===6&&(T=new ds(u,this,e)),this._$AV.push(T),m=o[++p]}c!==(m==null?void 0:m.index)&&(u=Ln.nextNode(),c++)}return Ln.currentNode=Mn,a}p(e){let i=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}},Pn=class{get _$AU(){var e,i;return(i=(e=this._$AM)==null?void 0:e._$AU)!=null?i:this._$Cv}constructor(e,i,o,a){var u;this.type=2,this._$AH=Nt,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=a,this._$Cv=(u=a==null?void 0:a.isConnected)!=null?u:!0}get parentNode(){let e=this._$AA.parentNode,i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Rn(this,e,i),xr(e)?e===Nt||e==null||e===""?(this._$AH!==Nt&&this._$AR(),this._$AH=Nt):e!==this._$AH&&e!==We&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ch(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Nt&&xr(this._$AH)?this._$AA.nextSibling.data=e:this.$(Mn.createTextNode(e)),this._$AH=e}g(e){var u;let{values:i,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Nn.createElement(Mh(o.h,o.h[0]),this.options)),o);if(((u=this._$AH)==null?void 0:u._$AD)===a)this._$AH.p(i);else{let c=new as(a,this),p=c.u(this.options);c.p(i),this.$(p),this._$AH=c}}_$AC(e){let i=Ah.get(e.strings);return i===void 0&&Ah.set(e.strings,i=new Nn(e)),i}T(e){$h(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,o,a=0;for(let u of e)a===i.length?i.push(o=new Pn(this.k(ss()),this.k(ss()),this,this.options)):o=i[a],o._$AI(u),a++;a<i.length&&(this._$AR(o&&o._$AB.nextSibling,a),i.length=a)}_$AR(e=this._$AA.nextSibling,i){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,i);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}},Dn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,o,a,u){this.type=1,this._$AH=Nt,this._$AN=void 0,this.element=e,this.name=i,this._$AM=a,this.options=u,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Nt}_$AI(e,i=this,o,a){let u=this.strings,c=!1;if(u===void 0)e=Rn(this,e,i,0),c=!xr(e)||e!==this._$AH&&e!==We,c&&(this._$AH=e);else{let p=e,m,_;for(e=u[0],m=0;m<u.length-1;m++)_=Rn(this,p[o+m],i,m),_===We&&(_=this._$AH[m]),c||(c=!xr(_)||_!==this._$AH[m]),_===Nt?e=Nt:e!==Nt&&(e+=(_!=null?_:"")+u[m+1]),this._$AH[m]=_}c&&!a&&this.j(e)}j(e){e===Nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},ls=class extends Dn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Nt?void 0:e}},us=class extends Dn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Nt)}},cs=class extends Dn{constructor(e,i,o,a,u){super(e,i,o,a,u),this.type=5}_$AI(e,i=this){var c;if((e=(c=Rn(this,e,i,0))!=null?c:Nt)===We)return;let o=this._$AH,a=e===Nt&&o!==Nt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==Nt&&(o===Nt||a);a&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i,o;typeof this._$AH=="function"?this._$AH.call((o=(i=this.options)==null?void 0:i.host)!=null?o:this.element,e):this._$AH.handleEvent(e)}},ds=class{constructor(e,i,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Rn(this,e)}},Rh={S:fl,A:Ue,P:pl,C:1,M:Nh,L:as,R:Ch,V:Rn,D:Pn,I:Dn,H:us,N:cs,U:ls,B:ds},hl=wr.litHtmlPolyfillSupport,Oh;hl==null||hl(Nn,Pn),((Oh=wr.litHtmlVersions)!=null?Oh:wr.litHtmlVersions=[]).push("3.0.0");v();v();v();var hs=globalThis,fs=hs.ShadowRoot&&(hs.ShadyCSS===void 0||hs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ml=Symbol(),Ph=new WeakMap,br=class{constructor(e,i,o){if(this._$cssResult$=!0,o!==ml)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o,i=this.t;if(fs&&e===void 0){let o=i!==void 0&&i.length===1;o&&(e=Ph.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ph.set(i,e))}return e}toString(){return this.cssText}},Dh=r=>new br(typeof r=="string"?r:r+"",void 0,ml),B=(r,...e)=>{let i=r.length===1?r[0]:e.reduce((o,a,u)=>o+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+r[u+1],r[0]);return new br(i,r,ml)},gl=(r,e)=>{if(fs)r.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of e){let o=document.createElement("style"),a=hs.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=i.cssText,r.appendChild(o)}},ps=fs?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let i="";for(let o of e.cssRules)i+=o.cssText;return Dh(i)})(r):r;var{is:Yx,defineProperty:Jx,getOwnPropertyDescriptor:Kx,getOwnPropertyNames:jx,getOwnPropertySymbols:Xx,getPrototypeOf:Qx}=Object,ln=globalThis,Fh=ln.trustedTypes,tb=Fh?Fh.emptyScript:"",vl=ln.reactiveElementPolyfillSupport,Er=(r,e)=>r,yl={toAttribute(r,e){switch(e){case Boolean:r=r?tb:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let i=r;switch(e){case Boolean:i=r!==null;break;case Number:i=r===null?null:Number(r);break;case Object:case Array:try{i=JSON.parse(r)}catch(o){i=null}}return i}},Wh=(r,e)=>!Yx(r,e),kh={attribute:!0,type:String,converter:yl,reflect:!1,hasChanged:Wh},zh,Hh;(zh=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Hh=ln.litPropertyMetadata)!=null||(ln.litPropertyMetadata=new WeakMap);var Be=class extends HTMLElement{static addInitializer(e){var i;this._$Ei(),((i=this.l)!=null?i:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=kh){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(e,i),!i.noAccessor){let o=Symbol(),a=this.getPropertyDescriptor(e,o,i);a!==void 0&&Jx(this.prototype,e,a)}}static getPropertyDescriptor(e,i,o){var c;let{get:a,set:u}=(c=Kx(this.prototype,e))!=null?c:{get(){return this[i]},set(p){this[i]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);u.call(this,p),this.requestUpdate(e,m,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var i;return(i=this.elementProperties.get(e))!=null?i:kh}static _$Ei(){if(this.hasOwnProperty(Er("elementProperties")))return;let e=Qx(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Er("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Er("properties"))){let i=this.properties,o=[...jx(i),...Xx(i)];for(let a of o)this.createProperty(a,i[a])}let e=this[Symbol.metadata];if(e!==null){let i=litPropertyMetadata.get(e);if(i!==void 0)for(let[o,a]of i)this.elementProperties.set(o,a)}this._$Eh=new Map;for(let[i,o]of this.elementProperties){let a=this._$Eu(i,o);a!==void 0&&this._$Eh.set(a,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let i=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let a of o)i.unshift(ps(a))}else e!==void 0&&i.push(ps(e));return i}static _$Eu(e,i){let o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i,o;((i=this._$ES)!=null?i:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var i;(i=this._$ES)==null||i.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,i=this.constructor.elementProperties;for(let o of i.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var i;let e=(i=this.shadowRoot)!=null?i:this.attachShadow(this.constructor.shadowRootOptions);return gl(e,this.constructor.elementStyles),e}connectedCallback(){var e,i;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$ES)==null||i.forEach(o=>{var a;return(a=o.hostConnected)==null?void 0:a.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(i=>{var o;return(o=i.hostDisconnected)==null?void 0:o.call(i)})}attributeChangedCallback(e,i,o){this._$AK(e,o)}_$EO(e,i){var u;let o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(a!==void 0&&o.reflect===!0){let c=(((u=o.converter)==null?void 0:u.toAttribute)!==void 0?o.converter:yl).toAttribute(i,o.type);this._$Em=e,c==null?this.removeAttribute(a):this.setAttribute(a,c),this._$Em=null}}_$AK(e,i){var u;let o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let c=o.getPropertyOptions(a),p=typeof c.converter=="function"?{fromAttribute:c.converter}:((u=c.converter)==null?void 0:u.fromAttribute)!==void 0?c.converter:yl;this._$Em=a,this[a]=p.fromAttribute(i,c.type),this._$Em=null}}requestUpdate(e,i,o,a=!1,u){var c;if(e!==void 0){if(o!=null||(o=this.constructor.getPropertyOptions(e)),!((c=o.hasChanged)!=null?c:Wh)(a?u:this[e],i))return;this.C(e,i,o)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,i,o){var a;this._$AL.has(e)||this._$AL.set(e,i),o.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return vr(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(i){Promise.reject(i)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[u,c]of this._$Ep)this[u]=c;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[u,c]of a)c.wrapped!==!0||this._$AL.has(u)||this[u]===void 0||this.C(u,this[u],c)}let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(o=this._$ES)==null||o.forEach(a=>{var u;return(u=a.hostUpdate)==null?void 0:u.call(a)}),this.update(i)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(i)}willUpdate(e){}_$AE(e){var i;(i=this._$ES)==null||i.forEach(o=>{var a;return(a=o.hostUpdated)==null?void 0:a.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EO(i,this[i]))),this._$ET()}updated(e){}firstUpdated(e){}},Uh;Be.elementStyles=[],Be.shadowRootOptions={mode:"open"},Be[Er("elementProperties")]=new Map,Be[Er("finalized")]=new Map,vl==null||vl({ReactiveElement:Be}),((Uh=ln.reactiveElementVersions)!=null?Uh:ln.reactiveElementVersions=[]).push("2.0.0");v();var Sr=globalThis,ms=Sr.trustedTypes,Bh=ms?ms.createPolicy("lit-html",{createHTML:r=>r}):void 0,Kh="$lit$",un=`lit$${(Math.random()+"").slice(9)}$`,jh="?"+un,eb=`<${jh}>`,zn=document,Ar=()=>zn.createComment(""),Or=r=>r===null||typeof r!="object"&&typeof r!="function",Xh=Array.isArray,nb=r=>Xh(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",_l=`[ 	
\f\r]`,Tr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vh=/-->/g,Gh=/>/g,Fn=RegExp(`>|${_l}(?:([^\\s"'>=/]+)(${_l}*=${_l}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zh=/'/g,qh=/"/g,Qh=/^(?:script|style|textarea|title)$/i,tf=r=>(e,...i)=>({_$litType$:r,strings:e,values:i}),L=tf(1),uT=tf(2),Hn=Symbol.for("lit-noChange"),Rt=Symbol.for("lit-nothing"),Yh=new WeakMap,kn=zn.createTreeWalker(zn,129);function ef(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bh!==void 0?Bh.createHTML(e):e}var ib=(r,e)=>{let i=r.length-1,o=[],a,u=e===2?"<svg>":"",c=Tr;for(let p=0;p<i;p++){let m=r[p],_,T,S=-1,M=0;for(;M<m.length&&(c.lastIndex=M,T=c.exec(m),T!==null);)M=c.lastIndex,c===Tr?T[1]==="!--"?c=Vh:T[1]!==void 0?c=Gh:T[2]!==void 0?(Qh.test(T[2])&&(a=RegExp("</"+T[2],"g")),c=Fn):T[3]!==void 0&&(c=Fn):c===Fn?T[0]===">"?(c=a!=null?a:Tr,S=-1):T[1]===void 0?S=-2:(S=c.lastIndex-T[2].length,_=T[1],c=T[3]===void 0?Fn:T[3]==='"'?qh:Zh):c===qh||c===Zh?c=Fn:c===Vh||c===Gh?c=Tr:(c=Fn,a=void 0);let $=c===Fn&&r[p+1].startsWith("/>")?" ":"";u+=c===Tr?m+eb:S>=0?(o.push(_),m.slice(0,S)+Kh+m.slice(S)+un+$):m+un+(S===-2?p:$)}return[ef(r,u+(r[i]||"<?>")+(e===2?"</svg>":"")),o]},Un=class{constructor({strings:e,_$litType$:i},o){let a;this.parts=[];let u=0,c=0,p=e.length-1,m=this.parts,[_,T]=ib(e,i);if(this.el=Un.createElement(_,o),kn.currentNode=this.el.content,i===2){let S=this.el.content.firstChild;S.replaceWith(...S.childNodes)}for(;(a=kn.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let S of a.getAttributeNames())if(S.endsWith(Kh)){let M=T[c++],$=a.getAttribute(S).split(un),P=/([.?@])?(.*)/.exec(M);m.push({type:1,index:u,name:P[2],strings:$,ctor:P[1]==="."?bl:P[1]==="?"?El:P[1]==="@"?Tl:Oi}),a.removeAttribute(S)}else S.startsWith(un)&&(m.push({type:6,index:u}),a.removeAttribute(S));if(Qh.test(a.tagName)){let S=a.textContent.split(un),M=S.length-1;if(M>0){a.textContent=ms?ms.emptyScript:"";for(let $=0;$<M;$++)a.append(S[$],Ar()),kn.nextNode(),m.push({type:2,index:++u});a.append(S[M],Ar())}}}else if(a.nodeType===8)if(a.data===jh)m.push({type:2,index:u});else{let S=-1;for(;(S=a.data.indexOf(un,S+1))!==-1;)m.push({type:7,index:u}),S+=un.length-1}u++}}static createElement(e,i){let o=zn.createElement("template");return o.innerHTML=e,o}};function Ai(r,e,i=r,o){var c,p,m;if(e===Hn)return e;let a=o!==void 0?(c=i._$Co)==null?void 0:c[o]:i._$Cl,u=Or(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),u===void 0?a=void 0:(a=new u(r),a._$AT(r,i,o)),o!==void 0?((m=i._$Co)!=null?m:i._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(e=Ai(r,a._$AS(r,e.values),a,o)),e}var xl=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var _;let{el:{content:i},parts:o}=this._$AD,a=((_=e==null?void 0:e.creationScope)!=null?_:zn).importNode(i,!0);kn.currentNode=a;let u=kn.nextNode(),c=0,p=0,m=o[0];for(;m!==void 0;){if(c===m.index){let T;m.type===2?T=new Wn(u,u.nextSibling,this,e):m.type===1?T=new m.ctor(u,m.name,m.strings,this,e):m.type===6&&(T=new Sl(u,this,e)),this._$AV.push(T),m=o[++p]}c!==(m==null?void 0:m.index)&&(u=kn.nextNode(),c++)}return kn.currentNode=zn,a}p(e){let i=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}},Wn=class{get _$AU(){var e,i;return(i=(e=this._$AM)==null?void 0:e._$AU)!=null?i:this._$Cv}constructor(e,i,o,a){var u;this.type=2,this._$AH=Rt,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=a,this._$Cv=(u=a==null?void 0:a.isConnected)!=null?u:!0}get parentNode(){let e=this._$AA.parentNode,i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Ai(this,e,i),Or(e)?e===Rt||e==null||e===""?(this._$AH!==Rt&&this._$AR(),this._$AH=Rt):e!==this._$AH&&e!==Hn&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):nb(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Rt&&Or(this._$AH)?this._$AA.nextSibling.data=e:this.$(zn.createTextNode(e)),this._$AH=e}g(e){var u;let{values:i,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Un.createElement(ef(o.h,o.h[0]),this.options)),o);if(((u=this._$AH)==null?void 0:u._$AD)===a)this._$AH.p(i);else{let c=new xl(a,this),p=c.u(this.options);c.p(i),this.$(p),this._$AH=c}}_$AC(e){let i=Yh.get(e.strings);return i===void 0&&Yh.set(e.strings,i=new Un(e)),i}T(e){Xh(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,o,a=0;for(let u of e)a===i.length?i.push(o=new Wn(this.k(Ar()),this.k(Ar()),this,this.options)):o=i[a],o._$AI(u),a++;a<i.length&&(this._$AR(o&&o._$AB.nextSibling,a),i.length=a)}_$AR(e=this._$AA.nextSibling,i){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,i);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}},Oi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,o,a,u){this.type=1,this._$AH=Rt,this._$AN=void 0,this.element=e,this.name=i,this._$AM=a,this.options=u,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Rt}_$AI(e,i=this,o,a){let u=this.strings,c=!1;if(u===void 0)e=Ai(this,e,i,0),c=!Or(e)||e!==this._$AH&&e!==Hn,c&&(this._$AH=e);else{let p=e,m,_;for(e=u[0],m=0;m<u.length-1;m++)_=Ai(this,p[o+m],i,m),_===Hn&&(_=this._$AH[m]),c||(c=!Or(_)||_!==this._$AH[m]),_===Rt?e=Rt:e!==Rt&&(e+=(_!=null?_:"")+u[m+1]),this._$AH[m]=_}c&&!a&&this.j(e)}j(e){e===Rt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},bl=class extends Oi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Rt?void 0:e}},El=class extends Oi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Rt)}},Tl=class extends Oi{constructor(e,i,o,a,u){super(e,i,o,a,u),this.type=5}_$AI(e,i=this){var c;if((e=(c=Ai(this,e,i,0))!=null?c:Rt)===Hn)return;let o=this._$AH,a=e===Rt&&o!==Rt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==Rt&&(o===Rt||a);a&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i,o;typeof this._$AH=="function"?this._$AH.call((o=(i=this.options)==null?void 0:i.host)!=null?o:this.element,e):this._$AH.handleEvent(e)}},Sl=class{constructor(e,i,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ai(this,e)}};var wl=Sr.litHtmlPolyfillSupport,Jh;wl==null||wl(Un,Wn),((Jh=Sr.litHtmlVersions)!=null?Jh:Sr.litHtmlVersions=[]).push("3.0.0");var nf=(r,e,i)=>{var u,c;let o=(u=i==null?void 0:i.renderBefore)!=null?u:e,a=o._$litPart$;if(a===void 0){let p=(c=i==null?void 0:i.renderBefore)!=null?c:null;o._$litPart$=a=new Wn(e.insertBefore(Ar(),p),p,void 0,i!=null?i:{})}return a._$AI(r),a};var V=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i,o;let e=super.createRenderRoot();return(o=(i=this.renderOptions).renderBefore)!=null||(i.renderBefore=e.firstChild),e}update(e){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nf(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Hn}},rf;V._$litElement$=!0,V["finalized"]=!0,(rf=globalThis.litElementHydrateSupport)==null||rf.call(globalThis,{LitElement:V});var Al=globalThis.litElementPolyfillSupport;Al==null||Al({LitElement:V});var of;((of=globalThis.litElementVersions)!=null?of:globalThis.litElementVersions=[]).push("4.0.0");v();v();v();var Q=r=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};v();v();v();v();v();v();v();v();v();var Bn=class extends V{render(){return L` <div>Hello from SuperViz, ${this.name}</div> `}};Bn.properties={name:{type:String}},Bn.styles=B`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `,Bn=X([Q("superviz-hello-world")],Bn);v();v();v();var af=zx(sf()),Ol=class{setConfig(e){this.configuration=e}get(e,i){return this.configuration?af.default.get(this.configuration,e,i):i}},$l=new Ol;v();v();var Cl=B`
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
`;var et=r=>{var i;class e extends r{connectedCallback(){setTimeout(()=>{var p,m;let a=document.getElementById("superviz-style"),u=this.createCustomColors(),c=document.createElement("style");c.innerHTML=(a==null?void 0:a.innerHTML)||"",(p=this.shadowRoot)==null||p.appendChild(c),u&&((m=this.shadowRoot)==null||m.appendChild(u))}),super.connectedCallback()}createCustomColors(){if(!$l.get("colors"))return;let a=document.createElement("style"),u=Object.entries($l.get("colors")).map(([c,p])=>`--${c}: ${p} !important;`).join(" ");return a.innerHTML=`
      * {
        ${u}
      }
    `,a}emitEvent(a,u,c={composed:!0,bubbles:!0}){let p=new CustomEvent(a,k({detail:u},c));this.dispatchEvent(p)}}return e.styles=[Cl,Il,Ll,Ml,(i=r.styles)!=null?i:[]],e};v();var Nl=(u=>(u[u.xs=14]="xs",u[u.sm=18]="sm",u[u.md=24]="md",u[u.lg=36]="lg",u[u.xl=44]="xl",u))(Nl||{});var lf=et(V),rb=[lf.styles],Vn=class extends lf{constructor(){super();this.name="",this.size="md"}get iconSize(){if(!!this.allowSetSize)return Nl[this.size]}render(){return L`
      <i
        class="sv-icon sv-icon-${this.name}_${this.size}"
        style="font-size: ${this.iconSize}px"
      ></i>
    `}};Vn.properties={name:{type:String},size:{type:String},allowSetSize:{type:Boolean}},Vn.styles=[rb,B`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `],Vn=X([Q("superviz-icon")],Vn);v();v();v();v();var vs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ys=r=>(...e)=>({_$litDirective$:r,values:e}),Ci=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};var dt=ys(class extends Ci{constructor(r){var e;if(super(r),r.type!==vs.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var o,a;if(this.it===void 0){this.it=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(u=>u!=="")));for(let u in e)e[u]&&!((o=this.st)!=null&&o.has(u))&&this.it.add(u);return this.render(e)}let i=r.element.classList;for(let u of this.it)u in e||(i.remove(u),this.it.delete(u));for(let u in e){let c=!!e[u];c===this.it.has(u)||((a=this.st)==null?void 0:a.has(u))||(c?(i.add(u),this.it.add(u)):(i.remove(u),this.it.delete(u)))}return We}});v();var uf=B`
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
`;v();var cf=et(V),ob=[cf.styles,uf],Gn=class extends cf{constructor(){super();this.menu=void 0;this.onClickOutDropdown=i=>{if(i.stopPropagation(),!this.open)return;let o=i.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),u=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=o.includes(a),_=o.includes(u),T=o.includes(p);m||_||T||this.close()};this.close=()=>{this.open=!1,this.emitEvent("close",{bubbles:!1,composed:!1})};this.callbackSelected=i=>{this.open=!1;let o=this.returnTo?i[this.returnTo]:i;this.emitEvent("selected",o,{bubbles:!1,composed:!0})};this.adjustPosition=()=>{this.adjustPositionVertical(),this.adjustPositionHorizontal()};this.tooltip=()=>this.canShowTooltip?L` <superviz-tooltip
      tooltipData=${JSON.stringify(this.onHoverData)}
      ?shiftTooltipLeft=${this.shiftTooltipLeft}
    ></superviz-tooltip>`:"";this.showTooltip=!1}disconnectedCallback(){var o;super.disconnectedCallback(),document.removeEventListener("click",this.onClickOutDropdown);let i=this.shadowRoot.querySelector(".dropdown");i==null||i.removeEventListener("mouseenter",()=>{this.showTooltip=!0}),i==null||i.removeEventListener("mouseleave",()=>{this.showTooltip=!1}),(o=this.dropdownResizeObserver)==null||o.disconnect()}updated(i){if(!!i.has("open")){if(this.emitEvent("toggle-dropdown-state",{open:this.open,font:this.name},{bubbles:!1,composed:!1}),this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown)}}get dropdownBounds(){this.dropdownContent||(this.dropdownContent=this.shadowRoot.querySelector(".dropdown-content"));let i=this.dropdownContent.getBoundingClientRect(),{y:o,height:a,x:u,width:c}=this.menu.getBoundingClientRect();return{top:o,bottom:o+a+4,left:u,right:u+c,height:a+4,width:c,contentX:i.x,contentY:i.y,contentWidth:i.width}}positionVerticalAction(){let{top:i,bottom:o}=this.dropdownBounds,{innerHeight:a}=window,u=o>a,c=i<0;return u&&this.position.includes("bottom")||c&&this.position.includes("top")?2:!u&&!c&&this.shouldUseOriginalVertical()?1:0}positionHorizontalAction(){if(this.dropdownCovered())return 0;let{right:i,left:o,contentX:a,contentWidth:u,width:c}=this.dropdownBounds,{innerWidth:p}=window,m=i>p,T=o<0||m;if(T&&!this.position.includes("center"))return 2;if(this.position.includes("center")){let S=a+u/2,M=S-c/2<0,$=S+c/2>p;if(M||$)return 2}return!T&&this.shouldUseOriginalHorizontal()?1:this.shouldCenter()&&this.position!==this.originalPosition&&!this.position.includes("center")?3:0}dropdownCovered(){let{left:i,right:o}=this.dropdownBounds,{innerWidth:a}=window;if(this.position.includes("center"))return!1;let u=o>a&&this.position.includes("left"),c=i<0&&this.position.includes("right");return u||c}shouldCenter(){let{contentX:i,contentWidth:o,width:a}=this.dropdownBounds,u=i+o/2,c=u-a/2<0,p=u+a/2>window.innerWidth;return!(c||p)}shouldUseOriginalVertical(){let{height:i,contentY:o}=this.dropdownBounds,{innerHeight:a}=window,u=o+i;return this.originalPosition.includes("bottom")?i+u<a:o-i>0}shouldUseOriginalHorizontal(){let{width:i,contentX:o}=this.dropdownBounds,{innerWidth:a}=window,u=o+i;return this.position===this.originalPosition?!1:this.originalPosition.includes("center")?u<a&&o-i>0:this.originalPosition.includes("left")?o-i>0:u<a}adjustPositionVertical(){let{top:i,bottom:o}=this.dropdownBounds,{innerHeight:a}=window,u=this.positionVerticalAction();if(u===0)return;if(u===1){let _=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,_);return}let c=a-o>i?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,c);this.position=m}adjustPositionHorizontal(){let{left:i,right:o,width:a}=this.dropdownBounds,u=i<0,c=o>window.innerWidth,p=this.positionHorizontalAction();if(p===0)return;if(p===1){let P=this.originalPosition.split("-")[1];this.position=this.position.replace(/left|center|right/,P);return}let m=u?o:i,_=(u?a:-a)/2-20,T=m+_;if(u=T<0,c=T+a>window.innerWidth,!(u||c)&&p===3||p===3){let P=this.position.replace(/left|right/,"center");this.position=P;return}if(this.position.includes("center")){let P=u?"right":"left",vt=this.position.replace("center",P);this.position=vt;return}let $=this.position.replace(/left|right/,"center");this.position=$}setMenu(){var i;if(!this.menu){this.menu=this.shadowRoot.querySelector(".menu");let o={rootMargin:"0px",threshold:1},a=new IntersectionObserver(this.adjustPosition,o);this.dropdownResizeObserver=new ResizeObserver(this.adjustPosition);let u=this.menu;a.observe(u),this.dropdownResizeObserver.observe((i=this.scrollableParent)!=null?i:document.body)}}get scrollableParent(){let i;this.host||(this.host=this.getRootNode().host);let o=this.host;for(;!i;){let a=o==null?void 0:o.parentElement;if(this.isScrollable(a)){i=a;break}if(o=a,!o)break}return i}isScrollable(i){if(!i)return!1;let o=i.scrollHeight>i.clientHeight,a=window.getComputedStyle(i).overflowY,u=window.getComputedStyle(i).overflowX,c=a.indexOf("hidden")!==-1,p=u.indexOf("hidden")!==-1;return o&&!c&&!p}get renderHeader(){return this.name?L` <div class="header">
      <span class="text username">${this.name}</span>
      <span class="sv-hr"></span>
    </div>`:L``}toggle(){this.disabled||(this.originalPosition||(this.originalPosition=this.position),this.setMenu(),this.open=!this.open,this.emitEvent("open",{open:this.open}),this.open&&setTimeout(()=>this.adjustPosition()))}get supervizIcons(){var i;return(i=this.icons)==null?void 0:i.map(o=>L`<superviz-icon allowSetSize=${!0} name="${o}" size="sm"></superviz-icon>`)}get listOptions(){return this.options.map((i,o)=>{var u;let a={text:!0,"text-bold":!0,active:(i==null?void 0:i[this.returnTo])&&this.active===(i==null?void 0:i[this.returnTo])};return L`<li @click=${()=>this.callbackSelected(i)} class=${dt(a)}>
        ${(u=this.supervizIcons)==null?void 0:u.at(o)} <span class="option-label">${i[this.label]}</span>
      </li>`})}render(){let i={menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu--top-left":this.position==="top-left","menu--top-center":this.position==="top-center","menu--top-right":this.position==="top-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right","who-is-online-dropdown":this.name};return L`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
        ${this.tooltip()}
      </div>
      <div class="dropdown-list">
        <div class=${dt(i)}>
          ${this.renderHeader}
          <ul class="items">
            ${this.listOptions}
          </ul>
        </div>
      </div>
    `}};Gn.styles=ob,Gn.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},position:{type:String},options:{type:Array},label:{type:String},returnTo:{type:String},active:{type:[String,Object]},icons:{type:Array},name:{type:String},onHoverData:{type:Object},showTooltip:{type:Boolean},dropdown:{type:Object},canShowTooltip:{type:Boolean},drodpdownSizes:{type:Object},shiftTooltipLeft:{type:Boolean}},Gn=X([Q("superviz-dropdown")],Gn);v();v();var df=B`
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
`;v();var hf=et(V),sb=[hf.styles,df],Zn=class extends hf{constructor(){super();this.hide=()=>{this.showTooltip=!1};this.show=()=>{this.showTooltip=!0};this.adjustTooltipVerticalPosition=()=>{let{bottom:i,top:o}=this.tooltip.getBoundingClientRect(),a=window.innerHeight;this.tooltipVerticalPosition.includes("top")&&o<0&&(this.tooltipVerticalPosition=this.tooltipVerticalPosition.replace("top","bottom")),this.tooltipVerticalPosition.includes("bottom")&&i>a&&(this.tooltipVerticalPosition=this.tooltipVerticalPosition.replace("bottom","top"))};this.adjustTooltipHorizontalPosition=()=>{let{left:i,right:o}=this.tooltip.getBoundingClientRect(),a=window.innerWidth;i<0&&(this.tooltipHorizontalPosition=this.tooltipHorizontalPosition.replace("center","right")),o>a&&(this.tooltipHorizontalPosition=this.tooltipHorizontalPosition.replace("center","left"))};this.adjustTooltipPosition=()=>{this.tooltip||(this.tooltip=this.shadowRoot.querySelector(".superviz-who-is-online__tooltip")),this.adjustTooltipVerticalPosition(),this.adjustTooltipHorizontalPosition()};this.tooltipVerticalPosition="tooltip-bottom",this.tooltipHorizontalPosition="tooltip-center",this.showTooltip=!1,this.parentSizes={height:0,width:0}}firstUpdated(i){let{parentElement:o}=this;o==null||o.addEventListener("mouseenter",this.show),o==null||o.addEventListener("mouseleave",this.hide),this.tooltipVerticalPosition="tooltip-bottom",this.tooltipHorizontalPosition="tooltip-center"}disconnectedCallback(){super.disconnectedCallback();let{parentElement:i}=this;i==null||i.removeEventListener("mouseenter",this.show),i==null||i.removeEventListener("mouseleave",this.hide)}updated(i){if(i.has("showTooltip")&&this.showTooltip){let{parentElement:o}=this;if(!o)return;let{height:a,width:u}=o.getBoundingClientRect();(this.parentSizes.height!==a||this.parentSizes.width!==u)&&(this.parentSizes={height:a,width:u})}}renderTooltip(){var u,c,p,m;setTimeout(()=>this.adjustTooltipPosition());let i=this.tooltipVerticalPosition,o=this.tooltipHorizontalPosition,a={"superviz-who-is-online__tooltip":!0,"tooltip-extras":this.tooltipOnLeft,"show-tooltip":this.showTooltip,"shift-left":this.shiftTooltipLeft};return a[i]=!0,a[o]=!0,L`<div
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

    z-index: 99;
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

    z-index: 99;
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
`;var ff=et(V),ab=[ff.styles,_s],Ii=class extends ff{constructor(){super(...arguments);this.getContainer=()=>window.document.querySelector("superviz-modal-container");this.createContainer=i=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(i)};this.createModal=({detail:i})=>{this.createContainer(i),window.document.body.appendChild(this.modal)};this.destroyModal=()=>{var i;this.modal=void 0,(i=this.getContainer())==null||i.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};Ii.styles=ab,Ii=X([Q("superviz-modal")],Ii);v();var pf=et(V),lb=[pf.styles,_s],Li=class extends pf{constructor(){super(...arguments);this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))};this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(i){this.options=i}render(){let i=()=>L`
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
          ${i()}

          ${o()}

          ${a()}
        </div>
      </div>
    `}};Li.styles=lb,Li=X([Q("superviz-modal-container")],Li);v();v();v();v();v();var Rl=B`
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

    z-index: 99;
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
    text-align: left;
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
`;v();var zl=B`
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
`;v();var Hl=B`
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
    z-index: 10;
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

    z-index: 99;
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
`;v();var Gl;function Zl(r){let e=r.querySelector("#superviz-comments");if(e&&!Gl){let i={childList:!0,attributes:!0,characterData:!0,subtree:!0};Gl=new MutationObserver(o=>{o.forEach(a=>{!a.removedNodes.length||a.removedNodes.forEach(u=>{u.id==="poweredby-footer"&&ub(r)})})}),Gl.observe(e,i)}}function ub(r){let e=document.createElement("div");e.id="poweredby-footer",e.className="footer";let i=document.createElement("div");i.className="powered-by powered-by--horizontal";let o=document.createElement("a");o.href="https://superviz.com/",o.target="_blank",o.className="link";let a=document.createElement("div");a.textContent="Powered by";let u=document.createElement("img");u.width=48,u.height=8.86,u.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",i.appendChild(o),o.appendChild(a),a.appendChild(u),e.appendChild(i);let c=r.getElementById("superviz-comments");c&&c.appendChild(e),Zl(r)}var mf=et(V),cb=[mf.styles,Rl,Vl],qn=class extends mf{constructor(){super();this.annotations=[],this.annotationFilter="all",this.waterMarkState=!1,this.side="left: 0px"}updateAnnotations(i){this.annotations=i}toggle(){this.emitEvent("toggle",{})}waterMarkStatus(i){this.waterMarkState=i}setFilter({detail:i}){let{filter:o}=i;this.annotationFilter=o}updated(i){super.updated(i),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(".superviz-comments");!o||(this.waterMarkState&&Zl(this.shadowRoot),o.setAttribute("style",this.side))})}render(){let i=[this.open?"container":"container-close","superviz-comments"].join(" "),o=L` <div id="poweredby-footer" class="footer">
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
      <div id="superviz-comments" class=${i}>
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
    `}};qn.styles=cb,qn.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String}},qn=X([Q("superviz-comments")],qn);v();v();var db=et(V),hb=[db.styles,Pl],Yn=class extends et(V){close(){this.dispatchEvent(new CustomEvent("close"))}render(){return L`
      <div class="topbar">
        <span class="text text-bold">COMMENTS</span>
        <span @click=${this.close} class="toggle-icon">
          <superviz-icon name=${this.side} size="lg"></superviz-icon>
        </span>
      </div>
    `}};Yn.styles=hb,Yn.properties={side:{type:String}},Yn=X([Q("superviz-comments-topbar")],Yn);v();v();v();v();var{D:fb}=Rh;var gf=()=>document.createComment(""),Mi=(r,e,i)=>{var u;let o=r._$AA.parentNode,a=e===void 0?r._$AB:e._$AA;if(i===void 0){let c=o.insertBefore(gf(),a),p=o.insertBefore(gf(),a);i=new fb(c,p,r,r.options)}else{let c=i._$AB.nextSibling,p=i._$AM,m=p!==r;if(m){let _;(u=i._$AQ)==null||u.call(i,r),i._$AM=r,i._$AP!==void 0&&(_=r._$AU)!==p._$AU&&i._$AP(_)}if(c!==a||m){let _=i._$AA;for(;_!==c;){let T=_.nextSibling;o.insertBefore(_,a),_=T}}}return i},cn=(r,e,i=r)=>(r._$AI(e,i),r),pb={},vf=(r,e=pb)=>r._$AH=e,yf=r=>r._$AH,xs=r=>{var o;(o=r._$AP)==null||o.call(r,!1,!0);let e=r._$AA,i=r._$AB.nextSibling;for(;e!==i;){let a=e.nextSibling;e.remove(),e=a}};var _f=(r,e,i)=>{let o=new Map;for(let a=e;a<=i;a++)o.set(r[a],a);return o},Ni=ys(class extends Ci{constructor(r){if(super(r),r.type!==vs.CHILD)throw Error("repeat() can only be used in text expressions")}ht(r,e,i){let o;i===void 0?i=e:e!==void 0&&(o=e);let a=[],u=[],c=0;for(let p of r)a[c]=o?o(p,c):c,u[c]=i(p,c),c++;return{values:u,keys:a}}render(r,e,i){return this.ht(r,e,i).values}update(r,[e,i,o]){var vt;let a=yf(r),{values:u,keys:c}=this.ht(e,i,o);if(!Array.isArray(a))return this.dt=c,u;let p=(vt=this.dt)!=null?vt:this.dt=[],m=[],_,T,S=0,M=a.length-1,$=0,P=u.length-1;for(;S<=M&&$<=P;)if(a[S]===null)S++;else if(a[M]===null)M--;else if(p[S]===c[$])m[$]=cn(a[S],u[$]),S++,$++;else if(p[M]===c[P])m[P]=cn(a[M],u[P]),M--,P--;else if(p[S]===c[P])m[P]=cn(a[S],u[P]),Mi(r,m[P+1],a[S]),S++,P--;else if(p[M]===c[$])m[$]=cn(a[M],u[$]),Mi(r,a[S],a[M]),M--,$++;else if(_===void 0&&(_=_f(c,$,P),T=_f(p,S,M)),_.has(p[S]))if(_.has(p[M])){let ut=T.get(c[$]),pt=ut!==void 0?a[ut]:null;if(pt===null){let kt=Mi(r,a[S]);cn(kt,u[$]),m[$]=kt}else m[$]=cn(pt,u[$]),Mi(r,a[S],pt),a[ut]=null;$++}else xs(a[M]),M--;else xs(a[S]),S++;for(;$<=P;){let ut=Mi(r,m[P+1]);cn(ut,u[$]),m[$++]=ut}for(;S<=M;){let ut=a[S++];ut!==null&&xs(ut)}return this.dt=c,vf(r,m),We}});var wf=et(V),mb=[wf.styles,Fl],Jn=class extends wf{constructor(){super();this.unselectAnnotation=()=>{this.selectedAnnotation=null};this.unselectAnnotationEsc=i=>{i&&(i==null?void 0:i.key)!=="Escape"||(this.selectedAnnotation=null)};this.selectAnnotation=({detail:i})=>{let{uuid:o}=i;if(this.selectedAnnotation===o){this.selectedAnnotation=null;return}this.selectedAnnotation=o};this.checkLastAnnotation=i=>{var u,c;let o=this.annotations.filter(p=>p.resolved),a=this.annotations.filter(p=>!p.resolved);return this.annotationFilter==="all"?i===((u=o[o.length-1])==null?void 0:u.uuid):i===((c=a[a.length-1])==null?void 0:c.uuid)};this.annotations=[]}updated(i){super.updated(i),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(`[uuid='${this.selectedAnnotation}']`);if(!o)return;let a=this.lastCommentId===this.selectedAnnotation,u=a?0:-150,c=o.getClientRects()[0];!c||(this.scrollBy(0,c.y+u),a&&setTimeout(()=>{this.scrollBy(0,c.y+u)},200))})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("select-annotation",this.selectAnnotation),window.document.body.addEventListener("keyup",this.unselectAnnotationEsc),window.document.body.addEventListener("unselect-annotation",this.unselectAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("select-annotation",this.selectAnnotation),window.document.body.removeEventListener("keyup",this.unselectAnnotationEsc),window.document.body.removeEventListener("unselect-annotation",this.unselectAnnotation)}render(){return L` ${Ni(this.annotations.filter(i=>{var o;return(o=i.comments)==null?void 0:o.length}),i=>i.uuid,i=>L`
        <superviz-comments-annotation-item
          annotation=${JSON.stringify(i)}
          selected="${this.selectedAnnotation}"
          annotationFilter=${this.annotationFilter}
          uuid=${i.uuid}
          isLastComment=${this.checkLastAnnotation(i.uuid)}
        >
        </superviz-comments-annotation-item>
      `)}`}};Jn.styles=mb,Jn.properties={annotations:{type:Object},selectedAnnotation:{type:String},annotationFilter:{type:String}},Jn=X([Q("superviz-comments-content")],Jn);v();v();v();v();v();var Ve=class extends Error{},bs=class extends Ve{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},Es=class extends Ve{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},Ts=class extends Ve{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},Ge=class extends Ve{},Ri=class extends Ve{constructor(e){super(`Invalid unit ${e}`)}},Pt=class extends Ve{},we=class extends Ve{constructor(){super("Zone is an abstract class")}};v();v();v();var R="numeric",xe="short",ee="long",dn={year:R,month:R,day:R},Cr={year:R,month:xe,day:R},ql={year:R,month:xe,day:R,weekday:xe},Ir={year:R,month:ee,day:R},Lr={year:R,month:ee,day:R,weekday:ee},Mr={hour:R,minute:R},Nr={hour:R,minute:R,second:R},Rr={hour:R,minute:R,second:R,timeZoneName:xe},Pr={hour:R,minute:R,second:R,timeZoneName:ee},Dr={hour:R,minute:R,hourCycle:"h23"},Fr={hour:R,minute:R,second:R,hourCycle:"h23"},kr={hour:R,minute:R,second:R,hourCycle:"h23",timeZoneName:xe},zr={hour:R,minute:R,second:R,hourCycle:"h23",timeZoneName:ee},Hr={year:R,month:R,day:R,hour:R,minute:R},Ur={year:R,month:R,day:R,hour:R,minute:R,second:R},Wr={year:R,month:xe,day:R,hour:R,minute:R},Br={year:R,month:xe,day:R,hour:R,minute:R,second:R},Yl={year:R,month:xe,day:R,weekday:xe,hour:R,minute:R},Vr={year:R,month:ee,day:R,hour:R,minute:R,timeZoneName:xe},Gr={year:R,month:ee,day:R,hour:R,minute:R,second:R,timeZoneName:xe},Zr={year:R,month:ee,day:R,weekday:ee,hour:R,minute:R,timeZoneName:ee},qr={year:R,month:ee,day:R,weekday:ee,hour:R,minute:R,second:R,timeZoneName:ee};v();v();v();v();var Yt=class{get type(){throw new we}get name(){throw new we}get ianaName(){return this.name}get isUniversal(){throw new we}offsetName(e,i){throw new we}formatOffset(e,i){throw new we}offset(e){throw new we}equals(e){throw new we}get isValid(){throw new we}};var Jl=null,$e=class extends Yt{static get instance(){return Jl===null&&(Jl=new $e),Jl}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:i,locale:o}){return As(e,i,o)}formatOffset(e,i){return hn(this.offset(e),i)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}};v();var $s={};function gb(r){return $s[r]||($s[r]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:r,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),$s[r]}var vb={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function yb(r,e){let i=r.format(e).replace(/\u200E/g,""),o=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(i),[,a,u,c,p,m,_,T]=o;return[c,a,u,p,m,_,T]}function _b(r,e){let i=r.formatToParts(e),o=[];for(let a=0;a<i.length;a++){let{type:u,value:c}=i[a],p=vb[u];u==="era"?o[p]=c:Y(p)||(o[p]=parseInt(c,10))}return o}var Os={},Ct=class extends Yt{static create(e){return Os[e]||(Os[e]=new Ct(e)),Os[e]}static resetCache(){Os={},$s={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(i){return!1}}constructor(e){super(),this.zoneName=e,this.valid=Ct.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:i,locale:o}){return As(e,i,o,this.name)}formatOffset(e,i){return hn(this.offset(e),i)}offset(e){let i=new Date(e);if(isNaN(i))return NaN;let o=gb(this.name),[a,u,c,p,m,_,T]=o.formatToParts?_b(o,i):yb(o,i);p==="BC"&&(a=-Math.abs(a)+1);let M=Pi({year:a,month:u,day:c,hour:m===24?0:m,minute:_,second:T,millisecond:0}),$=+i,P=$%1e3;return $-=P>=0?P:1e3+P,(M-$)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}};v();var xf={};function wb(r,e={}){let i=JSON.stringify([r,e]),o=xf[i];return o||(o=new Intl.ListFormat(r,e),xf[i]=o),o}var Kl={};function jl(r,e={}){let i=JSON.stringify([r,e]),o=Kl[i];return o||(o=new Intl.DateTimeFormat(r,e),Kl[i]=o),o}var Xl={};function xb(r,e={}){let i=JSON.stringify([r,e]),o=Xl[i];return o||(o=new Intl.NumberFormat(r,e),Xl[i]=o),o}var Ql={};function bb(r,e={}){let c=e,{base:i}=c,o=al(c,["base"]),a=JSON.stringify([r,o]),u=Ql[a];return u||(u=new Intl.RelativeTimeFormat(r,e),Ql[a]=u),u}var Yr=null;function Eb(){return Yr||(Yr=new Intl.DateTimeFormat().resolvedOptions().locale,Yr)}function Tb(r){let e=r.indexOf("-x-");e!==-1&&(r=r.substring(0,e));let i=r.indexOf("-u-");if(i===-1)return[r];{let o,a;try{o=jl(r).resolvedOptions(),a=r}catch(p){let m=r.substring(0,i);o=jl(m).resolvedOptions(),a=m}let{numberingSystem:u,calendar:c}=o;return[a,u,c]}}function Sb(r,e,i){return(i||e)&&(r.includes("-u-")||(r+="-u"),i&&(r+=`-ca-${i}`),e&&(r+=`-nu-${e}`)),r}function Ab(r){let e=[];for(let i=1;i<=12;i++){let o=z.utc(2009,i,1);e.push(r(o))}return e}function Ob(r){let e=[];for(let i=1;i<=7;i++){let o=z.utc(2016,11,13+i);e.push(r(o))}return e}function Cs(r,e,i,o){let a=r.listingMode();return a==="error"?null:a==="en"?i(e):o(e)}function $b(r){return r.numberingSystem&&r.numberingSystem!=="latn"?!1:r.numberingSystem==="latn"||!r.locale||r.locale.startsWith("en")||new Intl.DateTimeFormat(r.intl).resolvedOptions().numberingSystem==="latn"}var tu=class{constructor(e,i,o){this.padTo=o.padTo||0,this.floor=o.floor||!1;let p=o,{padTo:a,floor:u}=p,c=al(p,["padTo","floor"]);if(!i||Object.keys(c).length>0){let m=k({useGrouping:!1},o);o.padTo>0&&(m.minimumIntegerDigits=o.padTo),this.inf=xb(e,m)}}format(e){if(this.inf){let i=this.floor?Math.floor(e):e;return this.inf.format(i)}else{let i=this.floor?Math.floor(e):Di(e,3);return wt(i,this.padTo)}}},eu=class{constructor(e,i,o){this.opts=o,this.originalZone=void 0;let a;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){let c=-1*(e.offset/60),p=c>=0?`Etc/GMT+${c}`:`Etc/GMT${c}`;e.offset!==0&&Ct.create(p).valid?(a=p,this.dt=e):(a="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,a=e.zone.name):(a="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);let u=k({},this.opts);u.timeZone=u.timeZone||a,this.dtf=jl(i,u)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(i=>{if(i.type==="timeZoneName"){let o=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return At(k({},i),{value:o})}else return i}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},nu=class{constructor(e,i,o){this.opts=k({style:"long"},o),!i&&Is()&&(this.rtf=bb(e,o))}format(e,i){return this.rtf?this.rtf.format(e,i):bf(i,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,i){return this.rtf?this.rtf.formatToParts(e,i):[]}},rt=class{static fromOpts(e){return rt.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,i,o,a=!1){let u=e||lt.defaultLocale,c=u||(a?"en-US":Eb()),p=i||lt.defaultNumberingSystem,m=o||lt.defaultOutputCalendar;return new rt(c,p,m,u)}static resetCache(){Yr=null,Kl={},Xl={},Ql={}}static fromObject({locale:e,numberingSystem:i,outputCalendar:o}={}){return rt.create(e,i,o)}constructor(e,i,o,a){let[u,c,p]=Tb(e);this.locale=u,this.numberingSystem=i||c||null,this.outputCalendar=o||p||null,this.intl=Sb(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=$b(this)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),i=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&i?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:rt.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone(At(k({},e),{defaultToEN:!0}))}redefaultToSystem(e={}){return this.clone(At(k({},e),{defaultToEN:!1}))}months(e,i=!1){return Cs(this,e,iu,()=>{let o=i?{month:e,day:"numeric"}:{month:e},a=i?"format":"standalone";return this.monthsCache[a][e]||(this.monthsCache[a][e]=Ab(u=>this.extract(u,o,"month"))),this.monthsCache[a][e]})}weekdays(e,i=!1){return Cs(this,e,ru,()=>{let o=i?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},a=i?"format":"standalone";return this.weekdaysCache[a][e]||(this.weekdaysCache[a][e]=Ob(u=>this.extract(u,o,"weekday"))),this.weekdaysCache[a][e]})}meridiems(){return Cs(this,void 0,()=>ou,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[z.utc(2016,11,13,9),z.utc(2016,11,13,19)].map(i=>this.extract(i,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Cs(this,e,su,()=>{let i={era:e};return this.eraCache[e]||(this.eraCache[e]=[z.utc(-40,1,1),z.utc(2017,1,1)].map(o=>this.extract(o,i,"era"))),this.eraCache[e]})}extract(e,i,o){let a=this.dtFormatter(e,i),u=a.formatToParts(),c=u.find(p=>p.type.toLowerCase()===o);return c?c.value:null}numberFormatter(e={}){return new tu(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,i={}){return new eu(e,this.intl,i)}relFormatter(e={}){return new nu(this.intl,this.isEnglish(),e)}listFormatter(e={}){return wb(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}};v();v();var lu=null,xt=class extends Yt{static get utcInstance(){return lu===null&&(lu=new xt(0)),lu}static instance(e){return e===0?xt.utcInstance:new xt(e)}static parseSpecifier(e){if(e){let i=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(i)return new xt(Kn(i[1],i[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${hn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${hn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,i){return hn(this.fixed,i)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}};v();var Fi=class extends Yt{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function be(r,e){let i;if(Y(r)||r===null)return e;if(r instanceof Yt)return r;if(Ef(r)){let o=r.toLowerCase();return o==="default"?e:o==="local"||o==="system"?$e.instance:o==="utc"||o==="gmt"?xt.utcInstance:xt.parseSpecifier(o)||Ct.create(r)}else return Ce(r)?xt.instance(r):typeof r=="object"&&"offset"in r&&typeof r.offset=="function"?r:new Fi(r)}var Tf=()=>Date.now(),Sf="system",Af=null,Of=null,$f=null,Cf=60,If,lt=class{static get now(){return Tf}static set now(e){Tf=e}static set defaultZone(e){Sf=e}static get defaultZone(){return be(Sf,$e.instance)}static get defaultLocale(){return Af}static set defaultLocale(e){Af=e}static get defaultNumberingSystem(){return Of}static set defaultNumberingSystem(e){Of=e}static get defaultOutputCalendar(){return $f}static set defaultOutputCalendar(e){$f=e}static get twoDigitCutoffYear(){return Cf}static set twoDigitCutoffYear(e){Cf=e%100}static get throwOnInvalid(){return If}static set throwOnInvalid(e){If=e}static resetCaches(){rt.resetCache(),Ct.resetCache()}};function Y(r){return typeof r=="undefined"}function Ce(r){return typeof r=="number"}function Jr(r){return typeof r=="number"&&r%1===0}function Ef(r){return typeof r=="string"}function Lf(r){return Object.prototype.toString.call(r)==="[object Date]"}function Is(){try{return typeof Intl!="undefined"&&!!Intl.RelativeTimeFormat}catch(r){return!1}}function Mf(r){return Array.isArray(r)?r:[r]}function uu(r,e,i){if(r.length!==0)return r.reduce((o,a)=>{let u=[e(a),a];return o&&i(o[0],u[0])===o[0]?o:u},null)[1]}function Nf(r,e){return e.reduce((i,o)=>(i[o]=r[o],i),{})}function fn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Ie(r,e,i){return Jr(r)&&r>=e&&r<=i}function Cb(r,e){return r-e*Math.floor(r/e)}function wt(r,e=2){let i=r<0,o;return i?o="-"+(""+-r).padStart(e,"0"):o=(""+r).padStart(e,"0"),o}function Ze(r){if(!(Y(r)||r===null||r===""))return parseInt(r,10)}function pn(r){if(!(Y(r)||r===null||r===""))return parseFloat(r)}function Kr(r){if(!(Y(r)||r===null||r==="")){let e=parseFloat("0."+r)*1e3;return Math.floor(e)}}function Di(r,e,i=!1){let o=hh(10,e);return(i?Math.trunc:Math.round)(r*o)/o}function jn(r){return r%4===0&&(r%100!==0||r%400===0)}function Xn(r){return jn(r)?366:365}function ki(r,e){let i=Cb(e-1,12)+1,o=r+(e-i)/12;return i===2?jn(o)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][i-1]}function Pi(r){let e=Date.UTC(r.year,r.month-1,r.day,r.hour,r.minute,r.second,r.millisecond);return r.year<100&&r.year>=0&&(e=new Date(e),e.setUTCFullYear(r.year,r.month-1,r.day)),+e}function zi(r){let e=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7,i=r-1,o=(i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400))%7;return e===4||o===3?53:52}function jr(r){return r>99?r:r>lt.twoDigitCutoffYear?1900+r:2e3+r}function As(r,e,i,o=null){let a=new Date(r),u={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};o&&(u.timeZone=o);let c=k({timeZoneName:e},u),p=new Intl.DateTimeFormat(i,c).formatToParts(a).find(m=>m.type.toLowerCase()==="timezonename");return p?p.value:null}function Kn(r,e){let i=parseInt(r,10);Number.isNaN(i)&&(i=0);let o=parseInt(e,10)||0,a=i<0||Object.is(i,-0)?-o:o;return i*60+a}function cu(r){let e=Number(r);if(typeof r=="boolean"||r===""||Number.isNaN(e))throw new Pt(`Invalid unit value ${r}`);return e}function Hi(r,e){let i={};for(let o in r)if(fn(r,o)){let a=r[o];if(a==null)continue;i[e(o)]=cu(a)}return i}function hn(r,e){let i=Math.trunc(Math.abs(r/60)),o=Math.trunc(Math.abs(r%60)),a=r>=0?"+":"-";switch(e){case"short":return`${a}${wt(i,2)}:${wt(o,2)}`;case"narrow":return`${a}${i}${o>0?`:${o}`:""}`;case"techie":return`${a}${wt(i,2)}${wt(o,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Xr(r){return Nf(r,["hour","minute","second","millisecond"])}var Ib=["January","February","March","April","May","June","July","August","September","October","November","December"],du=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Lb=["J","F","M","A","M","J","J","A","S","O","N","D"];function iu(r){switch(r){case"narrow":return[...Lb];case"short":return[...du];case"long":return[...Ib];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var hu=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],fu=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Mb=["M","T","W","T","F","S","S"];function ru(r){switch(r){case"narrow":return[...Mb];case"short":return[...fu];case"long":return[...hu];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var ou=["AM","PM"],Nb=["Before Christ","Anno Domini"],Rb=["BC","AD"],Pb=["B","A"];function su(r){switch(r){case"narrow":return[...Pb];case"short":return[...Rb];case"long":return[...Nb];default:return null}}function Rf(r){return ou[r.hour<12?0:1]}function Pf(r,e){return ru(e)[r.weekday-1]}function Df(r,e){return iu(e)[r.month-1]}function Ff(r,e){return su(e)[r.year<0?0:1]}function bf(r,e,i="always",o=!1){let a={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},u=["hours","minutes","seconds"].indexOf(r)===-1;if(i==="auto"&&u){let S=r==="days";switch(e){case 1:return S?"tomorrow":`next ${a[r][0]}`;case-1:return S?"yesterday":`last ${a[r][0]}`;case 0:return S?"today":`this ${a[r][0]}`;default:}}let c=Object.is(e,-0)||e<0,p=Math.abs(e),m=p===1,_=a[r],T=o?m?_[1]:_[2]||_[1]:m?a[r][0]:r;return c?`${p} ${T} ago`:`in ${p} ${T}`}function kf(r,e){let i="";for(let o of r)o.literal?i+=o.val:i+=e(o.val);return i}var Db={D:dn,DD:Cr,DDD:Ir,DDDD:Lr,t:Mr,tt:Nr,ttt:Rr,tttt:Pr,T:Dr,TT:Fr,TTT:kr,TTTT:zr,f:Hr,ff:Wr,fff:Vr,ffff:Zr,F:Ur,FF:Br,FFF:Gr,FFFF:qr},bt=class{static create(e,i={}){return new bt(e,i)}static parseFormat(e){let i=null,o="",a=!1,u=[];for(let c=0;c<e.length;c++){let p=e.charAt(c);p==="'"?(o.length>0&&u.push({literal:a||/^\s+$/.test(o),val:o}),i=null,o="",a=!a):a||p===i?o+=p:(o.length>0&&u.push({literal:/^\s+$/.test(o),val:o}),o=p,i=p)}return o.length>0&&u.push({literal:a||/^\s+$/.test(o),val:o}),u}static macroTokenToFormatOpts(e){return Db[e]}constructor(e,i){this.opts=i,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,i){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,k(k({},this.opts),i)).format()}dtFormatter(e,i={}){return this.loc.dtFormatter(e,k(k({},this.opts),i))}formatDateTime(e,i){return this.dtFormatter(e,i).format()}formatDateTimeParts(e,i){return this.dtFormatter(e,i).formatToParts()}formatInterval(e,i){return this.dtFormatter(e.start,i).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,i){return this.dtFormatter(e,i).resolvedOptions()}num(e,i=0){if(this.opts.forceSimple)return wt(e,i);let o=k({},this.opts);return i>0&&(o.padTo=i),this.loc.numberFormatter(o).format(e)}formatDateTimeFromString(e,i){let o=this.loc.listingMode()==="en",a=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",u=($,P)=>this.loc.extract(e,$,P),c=$=>e.isOffsetFixed&&e.offset===0&&$.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,$.format):"",p=()=>o?Rf(e):u({hour:"numeric",hourCycle:"h12"},"dayperiod"),m=($,P)=>o?Df(e,$):u(P?{month:$}:{month:$,day:"numeric"},"month"),_=($,P)=>o?Pf(e,$):u(P?{weekday:$}:{weekday:$,month:"long",day:"numeric"},"weekday"),T=$=>{let P=bt.macroTokenToFormatOpts($);return P?this.formatWithSystemDefault(e,P):$},S=$=>o?Ff(e,$):u({era:$},"era"),M=$=>{switch($){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return c({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return c({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return c({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return p();case"d":return a?u({day:"numeric"},"day"):this.num(e.day);case"dd":return a?u({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return _("short",!0);case"cccc":return _("long",!0);case"ccccc":return _("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return _("short",!1);case"EEEE":return _("long",!1);case"EEEEE":return _("narrow",!1);case"L":return a?u({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return a?u({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return m("short",!0);case"LLLL":return m("long",!0);case"LLLLL":return m("narrow",!0);case"M":return a?u({month:"numeric"},"month"):this.num(e.month);case"MM":return a?u({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return m("short",!1);case"MMMM":return m("long",!1);case"MMMMM":return m("narrow",!1);case"y":return a?u({year:"numeric"},"year"):this.num(e.year);case"yy":return a?u({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return a?u({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return a?u({year:"numeric"},"year"):this.num(e.year,6);case"G":return S("short");case"GG":return S("long");case"GGGGG":return S("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return T($)}};return kf(bt.parseFormat(i),M)}formatDurationFromString(e,i){let o=m=>{switch(m[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},a=m=>_=>{let T=o(_);return T?this.num(m.get(T),_.length):_},u=bt.parseFormat(i),c=u.reduce((m,{literal:_,val:T})=>_?m:m.concat(T),[]),p=e.shiftTo(...c.map(o).filter(m=>m));return kf(u,a(p))}};v();var Dt=class{constructor(e,i){this.reason=e,this.explanation=i}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}};v();var Hf=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Wi(...r){let e=r.reduce((i,o)=>i+o.source,"");return RegExp(`^${e}$`)}function Bi(...r){return e=>r.reduce(([i,o,a],u)=>{let[c,p,m]=u(e,a);return[k(k({},i),c),p||o,m]},[{},null,1]).slice(0,2)}function Vi(r,...e){if(r==null)return[null,null];for(let[i,o]of e){let a=i.exec(r);if(a)return o(a)}return[null,null]}function Uf(...r){return(e,i)=>{let o={},a;for(a=0;a<r.length;a++)o[r[a]]=Ze(e[i+a]);return[o,null,i+a]}}var Wf=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Fb=`(?:${Wf.source}?(?:\\[(${Hf.source})\\])?)?`,pu=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Bf=RegExp(`${pu.source}${Fb}`),mu=RegExp(`(?:T${Bf.source})?`),kb=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,zb=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Hb=/(\d{4})-?(\d{3})/,Ub=Uf("weekYear","weekNumber","weekDay"),Wb=Uf("year","ordinal"),Bb=/(\d{4})-(\d\d)-(\d\d)/,Vf=RegExp(`${pu.source} ?(?:${Wf.source}|(${Hf.source}))?`),Vb=RegExp(`(?: ${Vf.source})?`);function Ui(r,e,i){let o=r[e];return Y(o)?i:Ze(o)}function Gb(r,e){return[{year:Ui(r,e),month:Ui(r,e+1,1),day:Ui(r,e+2,1)},null,e+3]}function Gi(r,e){return[{hours:Ui(r,e,0),minutes:Ui(r,e+1,0),seconds:Ui(r,e+2,0),milliseconds:Kr(r[e+3])},null,e+4]}function Qr(r,e){let i=!r[e]&&!r[e+1],o=Kn(r[e+1],r[e+2]),a=i?null:xt.instance(o);return[{},a,e+3]}function to(r,e){let i=r[e]?Ct.create(r[e]):null;return[{},i,e+1]}var Zb=RegExp(`^T?${pu.source}$`),qb=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Yb(r){let[e,i,o,a,u,c,p,m,_]=r,T=e[0]==="-",S=m&&m[0]==="-",M=($,P=!1)=>$!==void 0&&(P||$&&T)?-$:$;return[{years:M(pn(i)),months:M(pn(o)),weeks:M(pn(a)),days:M(pn(u)),hours:M(pn(c)),minutes:M(pn(p)),seconds:M(pn(m),m==="-0"),milliseconds:M(Kr(_),S)}]}var Jb={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function gu(r,e,i,o,a,u,c){let p={year:e.length===2?jr(Ze(e)):Ze(e),month:du.indexOf(i)+1,day:Ze(o),hour:Ze(a),minute:Ze(u)};return c&&(p.second=Ze(c)),r&&(p.weekday=r.length>3?hu.indexOf(r)+1:fu.indexOf(r)+1),p}var Kb=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function jb(r){let[,e,i,o,a,u,c,p,m,_,T,S]=r,M=gu(e,a,o,i,u,c,p),$;return m?$=Jb[m]:_?$=0:$=Kn(T,S),[M,new xt($)]}function Xb(r){return r.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var Qb=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,tE=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,eE=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function zf(r){let[,e,i,o,a,u,c,p]=r;return[gu(e,a,o,i,u,c,p),xt.utcInstance]}function nE(r){let[,e,i,o,a,u,c,p]=r;return[gu(e,p,i,o,a,u,c),xt.utcInstance]}var iE=Wi(kb,mu),rE=Wi(zb,mu),oE=Wi(Hb,mu),sE=Wi(Bf),Gf=Bi(Gb,Gi,Qr,to),aE=Bi(Ub,Gi,Qr,to),lE=Bi(Wb,Gi,Qr,to),uE=Bi(Gi,Qr,to);function Zf(r){return Vi(r,[iE,Gf],[rE,aE],[oE,lE],[sE,uE])}function qf(r){return Vi(Xb(r),[Kb,jb])}function Yf(r){return Vi(r,[Qb,zf],[tE,zf],[eE,nE])}function Jf(r){return Vi(r,[qb,Yb])}var cE=Bi(Gi);function Kf(r){return Vi(r,[Zb,cE])}var dE=Wi(Bb,Vb),hE=Wi(Vf),fE=Bi(Gi,Qr,to);function jf(r){return Vi(r,[dE,Gf],[hE,fE])}var Xf="Invalid Duration",tp={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},pE=k({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},tp),ce=146097/400,Zi=146097/4800,mE=k({years:{quarters:4,months:12,weeks:ce/7,days:ce,hours:ce*24,minutes:ce*24*60,seconds:ce*24*60*60,milliseconds:ce*24*60*60*1e3},quarters:{months:3,weeks:ce/28,days:ce/4,hours:ce*24/4,minutes:ce*24*60/4,seconds:ce*24*60*60/4,milliseconds:ce*24*60*60*1e3/4},months:{weeks:Zi/7,days:Zi,hours:Zi*24,minutes:Zi*24*60,seconds:Zi*24*60*60,milliseconds:Zi*24*60*60*1e3}},tp),Qn=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],gE=Qn.slice(0).reverse();function mn(r,e,i=!1){let o={values:i?e.values:k(k({},r.values),e.values||{}),loc:r.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||r.conversionAccuracy,matrix:e.matrix||r.matrix};return new K(o)}function ep(r,e){var o;let i=(o=e.milliseconds)!=null?o:0;for(let a of gE.slice(1))e[a]&&(i+=e[a]*r[a].milliseconds);return i}function Qf(r,e){let i=ep(r,e)<0?-1:1;Qn.reduceRight((o,a)=>{if(Y(e[a]))return o;if(o){let u=e[o]*i,c=r[a][o],p=Math.floor(u/c);e[a]+=p*i,e[o]-=p*c*i}return a},null),Qn.reduce((o,a)=>{if(Y(e[a]))return o;if(o){let u=e[o]%1;e[o]-=u,e[a]+=u*r[o][a]}return a},null)}function vE(r){let e={};for(let[i,o]of Object.entries(r))o!==0&&(e[i]=o);return e}var K=class{constructor(e){let i=e.conversionAccuracy==="longterm"||!1,o=i?mE:pE;e.matrix&&(o=e.matrix),this.values=e.values,this.loc=e.loc||rt.create(),this.conversionAccuracy=i?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=o,this.isLuxonDuration=!0}static fromMillis(e,i){return K.fromObject({milliseconds:e},i)}static fromObject(e,i={}){if(e==null||typeof e!="object")throw new Pt(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new K({values:Hi(e,K.normalizeUnit),loc:rt.fromObject(i),conversionAccuracy:i.conversionAccuracy,matrix:i.matrix})}static fromDurationLike(e){if(Ce(e))return K.fromMillis(e);if(K.isDuration(e))return e;if(typeof e=="object")return K.fromObject(e);throw new Pt(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,i){let[o]=Jf(e);return o?K.fromObject(o,i):K.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,i){let[o]=Kf(e);return o?K.fromObject(o,i):K.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,i=null){if(!e)throw new Pt("need to specify a reason the Duration is invalid");let o=e instanceof Dt?e:new Dt(e,i);if(lt.throwOnInvalid)throw new Ts(o);return new K({invalid:o})}static normalizeUnit(e){let i={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!i)throw new Ri(e);return i}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,i={}){let o=At(k({},i),{floor:i.round!==!1&&i.floor!==!1});return this.isValid?bt.create(this.loc,o).formatDurationFromString(this,e):Xf}toHuman(e={}){if(!this.isValid)return Xf;let i=Qn.map(o=>{let a=this.values[o];return Y(a)?null:this.loc.numberFormatter(At(k({style:"unit",unitDisplay:"long"},e),{unit:o.slice(0,-1)})).format(a)}).filter(o=>o);return this.loc.listFormatter(k({type:"conjunction",style:e.listStyle||"narrow"},e)).format(i)}toObject(){return this.isValid?k({},this.values):{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=Di(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let i=this.toMillis();return i<0||i>=864e5?null:(e=At(k({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e),{includeOffset:!1}),z.fromMillis(i,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?ep(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let i=K.fromDurationLike(e),o={};for(let a of Qn)(fn(i.values,a)||fn(this.values,a))&&(o[a]=i.get(a)+this.get(a));return mn(this,{values:o},!0)}minus(e){if(!this.isValid)return this;let i=K.fromDurationLike(e);return this.plus(i.negate())}mapUnits(e){if(!this.isValid)return this;let i={};for(let o of Object.keys(this.values))i[o]=cu(e(this.values[o],o));return mn(this,{values:i},!0)}get(e){return this[K.normalizeUnit(e)]}set(e){if(!this.isValid)return this;let i=k(k({},this.values),Hi(e,K.normalizeUnit));return mn(this,{values:i})}reconfigure({locale:e,numberingSystem:i,conversionAccuracy:o,matrix:a}={}){let c={loc:this.loc.clone({locale:e,numberingSystem:i}),matrix:a,conversionAccuracy:o};return mn(this,c)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return Qf(this.matrix,e),mn(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=vE(this.normalize().shiftToAll().toObject());return mn(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(c=>K.normalizeUnit(c));let i={},o={},a=this.toObject(),u;for(let c of Qn)if(e.indexOf(c)>=0){u=c;let p=0;for(let _ in o)p+=this.matrix[_][c]*o[_],o[_]=0;Ce(a[c])&&(p+=a[c]);let m=Math.trunc(p);i[c]=m,o[c]=(p*1e3-m*1e3)/1e3}else Ce(a[c])&&(o[c]=a[c]);for(let c in o)o[c]!==0&&(i[u]+=c===u?o[c]:o[c]/this.matrix[u][c]);return Qf(this.matrix,i),mn(this,{values:i},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let i of Object.keys(this.values))e[i]=this.values[i]===0?0:-this.values[i];return mn(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function i(o,a){return o===void 0||o===0?a===void 0||a===0:o===a}for(let o of Qn)if(!i(this.values[o],e.values[o]))return!1;return!0}};v();var qi="Invalid Interval";function yE(r,e){return!r||!r.isValid?ft.invalid("missing or invalid start"):!e||!e.isValid?ft.invalid("missing or invalid end"):e<r?ft.invalid("end before start",`The end of an interval must be after its start, but you had start=${r.toISO()} and end=${e.toISO()}`):null}var ft=class{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,i=null){if(!e)throw new Pt("need to specify a reason the Interval is invalid");let o=e instanceof Dt?e:new Dt(e,i);if(lt.throwOnInvalid)throw new Es(o);return new ft({invalid:o})}static fromDateTimes(e,i){let o=Yi(e),a=Yi(i),u=yE(o,a);return u==null?new ft({start:o,end:a}):u}static after(e,i){let o=K.fromDurationLike(i),a=Yi(e);return ft.fromDateTimes(a,a.plus(o))}static before(e,i){let o=K.fromDurationLike(i),a=Yi(e);return ft.fromDateTimes(a.minus(o),a)}static fromISO(e,i){let[o,a]=(e||"").split("/",2);if(o&&a){let u,c;try{u=z.fromISO(o,i),c=u.isValid}catch(_){c=!1}let p,m;try{p=z.fromISO(a,i),m=p.isValid}catch(_){m=!1}if(c&&m)return ft.fromDateTimes(u,p);if(c){let _=K.fromISO(a,i);if(_.isValid)return ft.after(u,_)}else if(m){let _=K.fromISO(o,i);if(_.isValid)return ft.before(p,_)}}return ft.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds"){if(!this.isValid)return NaN;let i=this.start.startOf(e),o=this.end.startOf(e);return Math.floor(o.diff(i,e).get(e))+(o.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:i}={}){return this.isValid?ft.fromDateTimes(e||this.s,i||this.e):this}splitAt(...e){if(!this.isValid)return[];let i=e.map(Yi).filter(c=>this.contains(c)).sort(),o=[],{s:a}=this,u=0;for(;a<this.e;){let c=i[u]||this.e,p=+c>+this.e?this.e:c;o.push(ft.fromDateTimes(a,p)),a=p,u+=1}return o}splitBy(e){let i=K.fromDurationLike(e);if(!this.isValid||!i.isValid||i.as("milliseconds")===0)return[];let{s:o}=this,a=1,u,c=[];for(;o<this.e;){let p=this.start.plus(i.mapUnits(m=>m*a));u=+p>+this.e?this.e:p,c.push(ft.fromDateTimes(o,u)),o=u,a+=1}return c}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let i=this.s>e.s?this.s:e.s,o=this.e<e.e?this.e:e.e;return i>=o?null:ft.fromDateTimes(i,o)}union(e){if(!this.isValid)return this;let i=this.s<e.s?this.s:e.s,o=this.e>e.e?this.e:e.e;return ft.fromDateTimes(i,o)}static merge(e){let[i,o]=e.sort((a,u)=>a.s-u.s).reduce(([a,u],c)=>u?u.overlaps(c)||u.abutsStart(c)?[a,u.union(c)]:[a.concat([u]),c]:[a,c],[[],null]);return o&&i.push(o),i}static xor(e){let i=null,o=0,a=[],u=e.map(m=>[{time:m.s,type:"s"},{time:m.e,type:"e"}]),c=Array.prototype.concat(...u),p=c.sort((m,_)=>m.time-_.time);for(let m of p)o+=m.type==="s"?1:-1,o===1?i=m.time:(i&&+i!=+m.time&&a.push(ft.fromDateTimes(i,m.time)),i=null);return ft.merge(a)}difference(...e){return ft.xor([this].concat(e)).map(i=>this.intersection(i)).filter(i=>i&&!i.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:qi}toLocaleString(e=dn,i={}){return this.isValid?bt.create(this.s.loc.clone(i),e).formatInterval(this):qi}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:qi}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:qi}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:qi}toFormat(e,{separator:i=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(e)}${i}${this.e.toFormat(e)}`:qi}toDuration(e,i){return this.isValid?this.e.diff(this.s,e,i):K.invalid(this.invalidReason)}mapEndpoints(e){return ft.fromDateTimes(e(this.s),e(this.e))}};v();var qe=class{static hasDST(e=lt.defaultZone){let i=z.now().setZone(e).set({month:12});return!e.isUniversal&&i.offset!==i.set({month:6}).offset}static isValidIANAZone(e){return Ct.isValidZone(e)}static normalizeZone(e){return be(e,lt.defaultZone)}static months(e="long",{locale:i=null,numberingSystem:o=null,locObj:a=null,outputCalendar:u="gregory"}={}){return(a||rt.create(i,o,u)).months(e)}static monthsFormat(e="long",{locale:i=null,numberingSystem:o=null,locObj:a=null,outputCalendar:u="gregory"}={}){return(a||rt.create(i,o,u)).months(e,!0)}static weekdays(e="long",{locale:i=null,numberingSystem:o=null,locObj:a=null}={}){return(a||rt.create(i,o,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:i=null,numberingSystem:o=null,locObj:a=null}={}){return(a||rt.create(i,o,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return rt.create(e).meridiems()}static eras(e="short",{locale:i=null}={}){return rt.create(i,null,"gregory").eras(e)}static features(){return{relative:Is()}}};v();function np(r,e){let i=a=>a.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),o=i(e)-i(r);return Math.floor(K.fromMillis(o).as("days"))}function _E(r,e,i){let o=[["years",(m,_)=>_.year-m.year],["quarters",(m,_)=>_.quarter-m.quarter+(_.year-m.year)*4],["months",(m,_)=>_.month-m.month+(_.year-m.year)*12],["weeks",(m,_)=>{let T=np(m,_);return(T-T%7)/7}],["days",np]],a={},u=r,c,p;for(let[m,_]of o)i.indexOf(m)>=0&&(c=m,a[m]=_(r,e),p=u.plus(a),p>e?(a[m]--,r=u.plus(a),r>e&&(p=r,a[m]--,r=u.plus(a))):r=p);return[r,a,p,c]}function ip(r,e,i,o){let[a,u,c,p]=_E(r,e,i),m=e-a,_=i.filter(S=>["hours","minutes","seconds","milliseconds"].indexOf(S)>=0);_.length===0&&(c<e&&(c=a.plus({[p]:1})),c!==a&&(u[p]=(u[p]||0)+m/(c-a)));let T=K.fromObject(u,o);return _.length>0?K.fromMillis(m,o).shiftTo(..._).plus(T):T}v();v();var vu={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},rp={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},wE=vu.hanidec.replace(/[\[|\]]/g,"").split("");function op(r){let e=parseInt(r,10);if(isNaN(e)){e="";for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);if(r[i].search(vu.hanidec)!==-1)e+=wE.indexOf(r[i]);else for(let a in rp){let[u,c]=rp[a];o>=u&&o<=c&&(e+=o-u)}}return parseInt(e,10)}else return e}function de({numberingSystem:r},e=""){return new RegExp(`${vu[r||"latn"]}${e}`)}var xE="missing Intl.DateTimeFormat.formatToParts support";function st(r,e=i=>i){return{regex:r,deser:([i])=>e(op(i))}}var bE=String.fromCharCode(160),lp=`[ ${bE}]`,up=new RegExp(lp,"g");function EE(r){return r.replace(/\./g,"\\.?").replace(up,lp)}function sp(r){return r.replace(/\./g,"").replace(up," ").toLowerCase()}function Ee(r,e){return r===null?null:{regex:RegExp(r.map(EE).join("|")),deser:([i])=>r.findIndex(o=>sp(i)===sp(o))+e}}function ap(r,e){return{regex:r,deser:([,i,o])=>Kn(i,o),groups:e}}function Ls(r){return{regex:r,deser:([e])=>e}}function TE(r){return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function SE(r,e){let i=de(e),o=de(e,"{2}"),a=de(e,"{3}"),u=de(e,"{4}"),c=de(e,"{6}"),p=de(e,"{1,2}"),m=de(e,"{1,3}"),_=de(e,"{1,6}"),T=de(e,"{1,9}"),S=de(e,"{2,4}"),M=de(e,"{4,6}"),$=ut=>({regex:RegExp(TE(ut.val)),deser:([pt])=>pt,literal:!0}),vt=(ut=>{if(r.literal)return $(ut);switch(ut.val){case"G":return Ee(e.eras("short"),0);case"GG":return Ee(e.eras("long"),0);case"y":return st(_);case"yy":return st(S,jr);case"yyyy":return st(u);case"yyyyy":return st(M);case"yyyyyy":return st(c);case"M":return st(p);case"MM":return st(o);case"MMM":return Ee(e.months("short",!0),1);case"MMMM":return Ee(e.months("long",!0),1);case"L":return st(p);case"LL":return st(o);case"LLL":return Ee(e.months("short",!1),1);case"LLLL":return Ee(e.months("long",!1),1);case"d":return st(p);case"dd":return st(o);case"o":return st(m);case"ooo":return st(a);case"HH":return st(o);case"H":return st(p);case"hh":return st(o);case"h":return st(p);case"mm":return st(o);case"m":return st(p);case"q":return st(p);case"qq":return st(o);case"s":return st(p);case"ss":return st(o);case"S":return st(m);case"SSS":return st(a);case"u":return Ls(T);case"uu":return Ls(p);case"uuu":return st(i);case"a":return Ee(e.meridiems(),0);case"kkkk":return st(u);case"kk":return st(S,jr);case"W":return st(p);case"WW":return st(o);case"E":case"c":return st(i);case"EEE":return Ee(e.weekdays("short",!1),1);case"EEEE":return Ee(e.weekdays("long",!1),1);case"ccc":return Ee(e.weekdays("short",!0),1);case"cccc":return Ee(e.weekdays("long",!0),1);case"Z":case"ZZ":return ap(new RegExp(`([+-]${p.source})(?::(${o.source}))?`),2);case"ZZZ":return ap(new RegExp(`([+-]${p.source})(${o.source})?`),2);case"z":return Ls(/[a-z_+-/]{1,256}?/i);case" ":return Ls(/[^\S\n\r]/);default:return $(ut)}})(r)||{invalidReason:xE};return vt.token=r,vt}var AE={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function OE(r,e,i){let{type:o,value:a}=r;if(o==="literal"){let m=/^\s+$/.test(a);return{literal:!m,val:m?" ":a}}let u=e[o],c=o;o==="hour"&&(e.hour12!=null?c=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?c="hour12":c="hour24":c=i.hour12?"hour12":"hour24");let p=AE[c];if(typeof p=="object"&&(p=p[u]),p)return{literal:!1,val:p}}function $E(r){return[`^${r.map(i=>i.regex).reduce((i,o)=>`${i}(${o.source})`,"")}$`,r]}function CE(r,e,i){let o=r.match(e);if(o){let a={},u=1;for(let c in i)if(fn(i,c)){let p=i[c],m=p.groups?p.groups+1:1;!p.literal&&p.token&&(a[p.token.val[0]]=p.deser(o.slice(u,u+m))),u+=m}return[o,a]}else return[o,{}]}function IE(r){let e=u=>{switch(u){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},i=null,o;return Y(r.z)||(i=Ct.create(r.z)),Y(r.Z)||(i||(i=new xt(r.Z)),o=r.Z),Y(r.q)||(r.M=(r.q-1)*3+1),Y(r.h)||(r.h<12&&r.a===1?r.h+=12:r.h===12&&r.a===0&&(r.h=0)),r.G===0&&r.y&&(r.y=-r.y),Y(r.u)||(r.S=Kr(r.u)),[Object.keys(r).reduce((u,c)=>{let p=e(c);return p&&(u[p]=r[c]),u},{}),i,o]}var yu=null;function LE(){return yu||(yu=z.fromMillis(1555555555555)),yu}function ME(r,e){if(r.literal)return r;let i=bt.macroTokenToFormatOpts(r.val),o=xu(i,e);return o==null||o.includes(void 0)?r:o}function _u(r,e){return Array.prototype.concat(...r.map(i=>ME(i,e)))}function wu(r,e,i){let o=_u(bt.parseFormat(i),r),a=o.map(c=>SE(c,r)),u=a.find(c=>c.invalidReason);if(u)return{input:e,tokens:o,invalidReason:u.invalidReason};{let[c,p]=$E(a),m=RegExp(c,"i"),[_,T]=CE(e,m,p),[S,M,$]=T?IE(T):[null,null,void 0];if(fn(T,"a")&&fn(T,"H"))throw new Ge("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:o,regex:m,rawMatches:_,matches:T,result:S,zone:M,specificOffset:$}}}function cp(r,e,i){let{result:o,zone:a,specificOffset:u,invalidReason:c}=wu(r,e,i);return[o,a,u,c]}function xu(r,e){if(!r)return null;let o=bt.create(e,r).dtFormatter(LE()),a=o.formatToParts(),u=o.resolvedOptions();return a.map(c=>OE(c,r,u))}v();var dp=[0,31,59,90,120,151,181,212,243,273,304,334],hp=[0,31,60,91,121,152,182,213,244,274,305,335];function he(r,e){return new Dt("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${r}, which is invalid`)}function fp(r,e,i){let o=new Date(Date.UTC(r,e-1,i));r<100&&r>=0&&o.setUTCFullYear(o.getUTCFullYear()-1900);let a=o.getUTCDay();return a===0?7:a}function pp(r,e,i){return i+(jn(r)?hp:dp)[e-1]}function mp(r,e){let i=jn(r)?hp:dp,o=i.findIndex(u=>u<e),a=e-i[o];return{month:o+1,day:a}}function Ms(r){let{year:e,month:i,day:o}=r,a=pp(e,i,o),u=fp(e,i,o),c=Math.floor((a-u+10)/7),p;return c<1?(p=e-1,c=zi(p)):c>zi(e)?(p=e+1,c=1):p=e,k({weekYear:p,weekNumber:c,weekday:u},Xr(r))}function bu(r){let{weekYear:e,weekNumber:i,weekday:o}=r,a=fp(e,1,4),u=Xn(e),c=i*7+o-a-3,p;c<1?(p=e-1,c+=Xn(p)):c>u?(p=e+1,c-=Xn(e)):p=e;let{month:m,day:_}=mp(p,c);return k({year:p,month:m,day:_},Xr(r))}function Ns(r){let{year:e,month:i,day:o}=r,a=pp(e,i,o);return k({year:e,ordinal:a},Xr(r))}function Eu(r){let{year:e,ordinal:i}=r,{month:o,day:a}=mp(e,i);return k({year:e,month:o,day:a},Xr(r))}function gp(r){let e=Jr(r.weekYear),i=Ie(r.weekNumber,1,zi(r.weekYear)),o=Ie(r.weekday,1,7);return e?i?o?!1:he("weekday",r.weekday):he("week",r.week):he("weekYear",r.weekYear)}function vp(r){let e=Jr(r.year),i=Ie(r.ordinal,1,Xn(r.year));return e?i?!1:he("ordinal",r.ordinal):he("year",r.year)}function Tu(r){let e=Jr(r.year),i=Ie(r.month,1,12),o=Ie(r.day,1,ki(r.year,r.month));return e?i?o?!1:he("day",r.day):he("month",r.month):he("year",r.year)}function Su(r){let{hour:e,minute:i,second:o,millisecond:a}=r,u=Ie(e,0,23)||e===24&&i===0&&o===0&&a===0,c=Ie(i,0,59),p=Ie(o,0,59),m=Ie(a,0,999);return u?c?p?m?!1:he("millisecond",a):he("second",o):he("minute",i):he("hour",e)}var Au="Invalid DateTime",yp=864e13;function Rs(r){return new Dt("unsupported zone",`the zone "${r.name}" is not supported`)}function Ou(r){return r.weekData===null&&(r.weekData=Ms(r.c)),r.weekData}function ti(r,e){let i={ts:r.ts,zone:r.zone,c:r.c,o:r.o,loc:r.loc,invalid:r.invalid};return new z(At(k(k({},i),e),{old:i}))}function Sp(r,e,i){let o=r-e*60*1e3,a=i.offset(o);if(e===a)return[o,e];o-=(a-e)*60*1e3;let u=i.offset(o);return a===u?[o,a]:[r-Math.min(a,u)*60*1e3,Math.max(a,u)]}function Ps(r,e){r+=e*60*1e3;let i=new Date(r);return{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate(),hour:i.getUTCHours(),minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds()}}function Fs(r,e,i){return Sp(Pi(r),e,i)}function _p(r,e){let i=r.o,o=r.c.year+Math.trunc(e.years),a=r.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,u=At(k({},r.c),{year:o,month:a,day:Math.min(r.c.day,ki(o,a))+Math.trunc(e.days)+Math.trunc(e.weeks)*7}),c=K.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),p=Pi(u),[m,_]=Sp(p,i,r.zone);return c!==0&&(m+=c,_=r.zone.offset(m)),{ts:m,o:_}}function eo(r,e,i,o,a,u){let{setZone:c,zone:p}=i;if(r&&Object.keys(r).length!==0||e){let m=e||p,_=z.fromObject(r,At(k({},i),{zone:m,specificOffset:u}));return c?_:_.setZone(p)}else return z.invalid(new Dt("unparsable",`the input "${a}" can't be parsed as ${o}`))}function Ds(r,e,i=!0){return r.isValid?bt.create(rt.create("en-US"),{allowZ:i,forceSimple:!0}).formatDateTimeFromString(r,e):null}function $u(r,e){let i=r.c.year>9999||r.c.year<0,o="";return i&&r.c.year>=0&&(o+="+"),o+=wt(r.c.year,i?6:4),e?(o+="-",o+=wt(r.c.month),o+="-",o+=wt(r.c.day)):(o+=wt(r.c.month),o+=wt(r.c.day)),o}function wp(r,e,i,o,a,u){let c=wt(r.c.hour);return e?(c+=":",c+=wt(r.c.minute),(r.c.millisecond!==0||r.c.second!==0||!i)&&(c+=":")):c+=wt(r.c.minute),(r.c.millisecond!==0||r.c.second!==0||!i)&&(c+=wt(r.c.second),(r.c.millisecond!==0||!o)&&(c+=".",c+=wt(r.c.millisecond,3))),a&&(r.isOffsetFixed&&r.offset===0&&!u?c+="Z":r.o<0?(c+="-",c+=wt(Math.trunc(-r.o/60)),c+=":",c+=wt(Math.trunc(-r.o%60))):(c+="+",c+=wt(Math.trunc(r.o/60)),c+=":",c+=wt(Math.trunc(r.o%60)))),u&&(c+="["+r.zone.ianaName+"]"),c}var Ap={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},NE={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},RE={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Op=["year","month","day","hour","minute","second","millisecond"],PE=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],DE=["year","ordinal","hour","minute","second","millisecond"];function xp(r){let e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[r.toLowerCase()];if(!e)throw new Ri(r);return e}function bp(r,e){let i=be(e.zone,lt.defaultZone),o=rt.fromObject(e),a=lt.now(),u,c;if(Y(r.year))u=a;else{for(let _ of Op)Y(r[_])&&(r[_]=Ap[_]);let p=Tu(r)||Su(r);if(p)return z.invalid(p);let m=i.offset(a);[u,c]=Fs(r,m,i)}return new z({ts:u,zone:i,loc:o,o:c})}function Ep(r,e,i){let o=Y(i.round)?!0:i.round,a=(c,p)=>(c=Di(c,o||i.calendary?0:2,!0),e.loc.clone(i).relFormatter(i).format(c,p)),u=c=>i.calendary?e.hasSame(r,c)?0:e.startOf(c).diff(r.startOf(c),c).get(c):e.diff(r,c).get(c);if(i.unit)return a(u(i.unit),i.unit);for(let c of i.units){let p=u(c);if(Math.abs(p)>=1)return a(p,c)}return a(r>e?-0:0,i.units[i.units.length-1])}function Tp(r){let e={},i;return r.length>0&&typeof r[r.length-1]=="object"?(e=r[r.length-1],i=Array.from(r).slice(0,r.length-1)):i=Array.from(r),[e,i]}var z=class{constructor(e){let i=e.zone||lt.defaultZone,o=e.invalid||(Number.isNaN(e.ts)?new Dt("invalid input"):null)||(i.isValid?null:Rs(i));this.ts=Y(e.ts)?lt.now():e.ts;let a=null,u=null;if(!o)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(i))[a,u]=[e.old.c,e.old.o];else{let p=i.offset(this.ts);a=Ps(this.ts,p),o=Number.isNaN(a.year)?new Dt("invalid input"):null,a=o?null:a,u=o?null:p}this._zone=i,this.loc=e.loc||rt.create(),this.invalid=o,this.weekData=null,this.c=a,this.o=u,this.isLuxonDateTime=!0}static now(){return new z({})}static local(){let[e,i]=Tp(arguments),[o,a,u,c,p,m,_]=i;return bp({year:o,month:a,day:u,hour:c,minute:p,second:m,millisecond:_},e)}static utc(){let[e,i]=Tp(arguments),[o,a,u,c,p,m,_]=i;return e.zone=xt.utcInstance,bp({year:o,month:a,day:u,hour:c,minute:p,second:m,millisecond:_},e)}static fromJSDate(e,i={}){let o=Lf(e)?e.valueOf():NaN;if(Number.isNaN(o))return z.invalid("invalid input");let a=be(i.zone,lt.defaultZone);return a.isValid?new z({ts:o,zone:a,loc:rt.fromObject(i)}):z.invalid(Rs(a))}static fromMillis(e,i={}){if(Ce(e))return e<-yp||e>yp?z.invalid("Timestamp out of range"):new z({ts:e,zone:be(i.zone,lt.defaultZone),loc:rt.fromObject(i)});throw new Pt(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,i={}){if(Ce(e))return new z({ts:e*1e3,zone:be(i.zone,lt.defaultZone),loc:rt.fromObject(i)});throw new Pt("fromSeconds requires a numerical input")}static fromObject(e,i={}){e=e||{};let o=be(i.zone,lt.defaultZone);if(!o.isValid)return z.invalid(Rs(o));let a=lt.now(),u=Y(i.specificOffset)?o.offset(a):i.specificOffset,c=Hi(e,xp),p=!Y(c.ordinal),m=!Y(c.year),_=!Y(c.month)||!Y(c.day),T=m||_,S=c.weekYear||c.weekNumber,M=rt.fromObject(i);if((T||p)&&S)throw new Ge("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(_&&p)throw new Ge("Can't mix ordinal dates with month/day");let $=S||c.weekday&&!T,P,vt,ut=Ps(a,u);$?(P=PE,vt=NE,ut=Ms(ut)):p?(P=DE,vt=RE,ut=Ns(ut)):(P=Op,vt=Ap);let pt=!1;for(let yn of P){let ks=c[yn];Y(ks)?pt?c[yn]=vt[yn]:c[yn]=ut[yn]:pt=!0}let kt=$?gp(c):p?vp(c):Tu(c),It=kt||Su(c);if(It)return z.invalid(It);let Ye=$?bu(c):p?Eu(c):c,[fe,gn]=Fs(Ye,u,o),vn=new z({ts:fe,zone:o,o:gn,loc:M});return c.weekday&&T&&e.weekday!==vn.weekday?z.invalid("mismatched weekday",`you can't specify both a weekday of ${c.weekday} and a date of ${vn.toISO()}`):vn}static fromISO(e,i={}){let[o,a]=Zf(e);return eo(o,a,i,"ISO 8601",e)}static fromRFC2822(e,i={}){let[o,a]=qf(e);return eo(o,a,i,"RFC 2822",e)}static fromHTTP(e,i={}){let[o,a]=Yf(e);return eo(o,a,i,"HTTP",i)}static fromFormat(e,i,o={}){if(Y(e)||Y(i))throw new Pt("fromFormat requires an input string and a format");let{locale:a=null,numberingSystem:u=null}=o,c=rt.fromOpts({locale:a,numberingSystem:u,defaultToEN:!0}),[p,m,_,T]=cp(c,e,i);return T?z.invalid(T):eo(p,m,o,`format ${i}`,e,_)}static fromString(e,i,o={}){return z.fromFormat(e,i,o)}static fromSQL(e,i={}){let[o,a]=jf(e);return eo(o,a,i,"SQL",e)}static invalid(e,i=null){if(!e)throw new Pt("need to specify a reason the DateTime is invalid");let o=e instanceof Dt?e:new Dt(e,i);if(lt.throwOnInvalid)throw new bs(o);return new z({invalid:o})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,i={}){let o=xu(e,rt.fromObject(i));return o?o.map(a=>a?a.val:null).join(""):null}static expandFormat(e,i={}){return _u(bt.parseFormat(e),rt.fromObject(i)).map(a=>a.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Ou(this).weekYear:NaN}get weekNumber(){return this.isValid?Ou(this).weekNumber:NaN}get weekday(){return this.isValid?Ou(this).weekday:NaN}get ordinal(){return this.isValid?Ns(this.c).ordinal:NaN}get monthShort(){return this.isValid?qe.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?qe.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?qe.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?qe.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,i=6e4,o=Pi(this.c),a=this.zone.offset(o-e),u=this.zone.offset(o+e),c=this.zone.offset(o-a*i),p=this.zone.offset(o-u*i);if(c===p)return[this];let m=o-c*i,_=o-p*i,T=Ps(m,c),S=Ps(_,p);return T.hour===S.hour&&T.minute===S.minute&&T.second===S.second&&T.millisecond===S.millisecond?[ti(this,{ts:m}),ti(this,{ts:_})]:[this]}get isInLeapYear(){return jn(this.year)}get daysInMonth(){return ki(this.year,this.month)}get daysInYear(){return this.isValid?Xn(this.year):NaN}get weeksInWeekYear(){return this.isValid?zi(this.weekYear):NaN}resolvedLocaleOptions(e={}){let{locale:i,numberingSystem:o,calendar:a}=bt.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:i,numberingSystem:o,outputCalendar:a}}toUTC(e=0,i={}){return this.setZone(xt.instance(e),i)}toLocal(){return this.setZone(lt.defaultZone)}setZone(e,{keepLocalTime:i=!1,keepCalendarTime:o=!1}={}){if(e=be(e,lt.defaultZone),e.equals(this.zone))return this;if(e.isValid){let a=this.ts;if(i||o){let u=e.offset(this.ts),c=this.toObject();[a]=Fs(c,u,e)}return ti(this,{ts:a,zone:e})}else return z.invalid(Rs(e))}reconfigure({locale:e,numberingSystem:i,outputCalendar:o}={}){let a=this.loc.clone({locale:e,numberingSystem:i,outputCalendar:o});return ti(this,{loc:a})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let i=Hi(e,xp),o=!Y(i.weekYear)||!Y(i.weekNumber)||!Y(i.weekday),a=!Y(i.ordinal),u=!Y(i.year),c=!Y(i.month)||!Y(i.day),p=u||c,m=i.weekYear||i.weekNumber;if((p||a)&&m)throw new Ge("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&a)throw new Ge("Can't mix ordinal dates with month/day");let _;o?_=bu(k(k({},Ms(this.c)),i)):Y(i.ordinal)?(_=k(k({},this.toObject()),i),Y(i.day)&&(_.day=Math.min(ki(_.year,_.month),_.day))):_=Eu(k(k({},Ns(this.c)),i));let[T,S]=Fs(_,this.o,this.zone);return ti(this,{ts:T,o:S})}plus(e){if(!this.isValid)return this;let i=K.fromDurationLike(e);return ti(this,_p(this,i))}minus(e){if(!this.isValid)return this;let i=K.fromDurationLike(e).negate();return ti(this,_p(this,i))}startOf(e){if(!this.isValid)return this;let i={},o=K.normalizeUnit(e);switch(o){case"years":i.month=1;case"quarters":case"months":i.day=1;case"weeks":case"days":i.hour=0;case"hours":i.minute=0;case"minutes":i.second=0;case"seconds":i.millisecond=0;break;case"milliseconds":break}if(o==="weeks"&&(i.weekday=1),o==="quarters"){let a=Math.ceil(this.month/3);i.month=(a-1)*3+1}return this.set(i)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e,i={}){return this.isValid?bt.create(this.loc.redefaultToEN(i)).formatDateTimeFromString(this,e):Au}toLocaleString(e=dn,i={}){return this.isValid?bt.create(this.loc.clone(i),e).formatDateTime(this):Au}toLocaleParts(e={}){return this.isValid?bt.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:i=!1,suppressMilliseconds:o=!1,includeOffset:a=!0,extendedZone:u=!1}={}){if(!this.isValid)return null;let c=e==="extended",p=$u(this,c);return p+="T",p+=wp(this,c,i,o,a,u),p}toISODate({format:e="extended"}={}){return this.isValid?$u(this,e==="extended"):null}toISOWeekDate(){return Ds(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:i=!1,includeOffset:o=!0,includePrefix:a=!1,extendedZone:u=!1,format:c="extended"}={}){return this.isValid?(a?"T":"")+wp(this,c==="extended",i,e,o,u):null}toRFC2822(){return Ds(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Ds(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?$u(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:i=!1,includeOffsetSpace:o=!0}={}){let a="HH:mm:ss.SSS";return(i||e)&&(o&&(a+=" "),i?a+="z":e&&(a+="ZZ")),Ds(this,a,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Au}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let i=k({},this.c);return e.includeConfig&&(i.outputCalendar=this.outputCalendar,i.numberingSystem=this.loc.numberingSystem,i.locale=this.loc.locale),i}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,i="milliseconds",o={}){if(!this.isValid||!e.isValid)return K.invalid("created by diffing an invalid DateTime");let a=k({locale:this.locale,numberingSystem:this.numberingSystem},o),u=Mf(i).map(K.normalizeUnit),c=e.valueOf()>this.valueOf(),p=c?this:e,m=c?e:this,_=ip(p,m,u,a);return c?_.negate():_}diffNow(e="milliseconds",i={}){return this.diff(z.now(),e,i)}until(e){return this.isValid?ft.fromDateTimes(this,e):this}hasSame(e,i){if(!this.isValid)return!1;let o=e.valueOf(),a=this.setZone(e.zone,{keepLocalTime:!0});return a.startOf(i)<=o&&o<=a.endOf(i)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let i=e.base||z.fromObject({},{zone:this.zone}),o=e.padding?this<i?-e.padding:e.padding:0,a=["years","months","days","hours","minutes","seconds"],u=e.unit;return Array.isArray(e.unit)&&(a=e.unit,u=void 0),Ep(i,this.plus(o),At(k({},e),{numeric:"always",units:a,unit:u}))}toRelativeCalendar(e={}){return this.isValid?Ep(e.base||z.fromObject({},{zone:this.zone}),this,At(k({},e),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...e){if(!e.every(z.isDateTime))throw new Pt("min requires all arguments be DateTimes");return uu(e,i=>i.valueOf(),Math.min)}static max(...e){if(!e.every(z.isDateTime))throw new Pt("max requires all arguments be DateTimes");return uu(e,i=>i.valueOf(),Math.max)}static fromFormatExplain(e,i,o={}){let{locale:a=null,numberingSystem:u=null}=o,c=rt.fromOpts({locale:a,numberingSystem:u,defaultToEN:!0});return wu(c,e,i)}static fromStringExplain(e,i,o={}){return z.fromFormatExplain(e,i,o)}static get DATE_SHORT(){return dn}static get DATE_MED(){return Cr}static get DATE_MED_WITH_WEEKDAY(){return ql}static get DATE_FULL(){return Ir}static get DATE_HUGE(){return Lr}static get TIME_SIMPLE(){return Mr}static get TIME_WITH_SECONDS(){return Nr}static get TIME_WITH_SHORT_OFFSET(){return Rr}static get TIME_WITH_LONG_OFFSET(){return Pr}static get TIME_24_SIMPLE(){return Dr}static get TIME_24_WITH_SECONDS(){return Fr}static get TIME_24_WITH_SHORT_OFFSET(){return kr}static get TIME_24_WITH_LONG_OFFSET(){return zr}static get DATETIME_SHORT(){return Hr}static get DATETIME_SHORT_WITH_SECONDS(){return Ur}static get DATETIME_MED(){return Wr}static get DATETIME_MED_WITH_SECONDS(){return Br}static get DATETIME_MED_WITH_WEEKDAY(){return Yl}static get DATETIME_FULL(){return Vr}static get DATETIME_FULL_WITH_SECONDS(){return Gr}static get DATETIME_HUGE(){return Zr}static get DATETIME_HUGE_WITH_SECONDS(){return qr}};function Yi(r){if(z.isDateTime(r))return r;if(r&&r.valueOf&&Ce(r.valueOf()))return z.fromJSDate(r);if(r&&typeof r=="object")return z.fromObject(r);throw new Pt(`Unknown datetime argument: ${r}, of type ${typeof r}`)}var $p=et(V),FE=[$p.styles,Dl],ei=class extends $p{constructor(){super();this.updateComment=({detail:i})=>{let{text:o}=i;this.text=o,this.closeEditMode(),this.emitEvent("update-comment",{uuid:this.uuid,text:o})};this.resolveAnnotation=i=>{i.stopPropagation(),this.emitEvent("resolve-annotation",{type:"resolve-annotation",resolved:!this.resolved},{composed:!1,bubbles:!1})};this.confirmDelete=()=>{if(this.deleteCommentModalOpen=!1,this.primaryComment)return this.emitEvent("delete-annotation",{uuid:this.annotationId});this.emitEvent("delete-comment",{annotationId:this.annotationId,uuid:this.uuid})};this.closeEditMode=()=>{this.mode="readonly"};this.resolved=!1}getAvatar(){var i;return this.avatar?L` <div class="comment-item__avatar">
        <img src=${this.avatar} />
      </div>`:L`<div class="comment-item__avatar">
      <p class="text text-bold">${((i=this.username[0])==null?void 0:i.toUpperCase())||"A"}</p>
    </div>`}render(){let i=this.annotationFilter==="all"?"resolve":"undo",o=$=>z.fromISO($).toFormat("yyyy-dd-MM"),a=this.resolvable?"comment-item__resolve":"hidden",u=[{label:"EDIT"},{label:"DELETE"}],c=({detail:$})=>{$==="EDIT"&&(this.mode="editable"),$==="DELETE"&&(this.deleteCommentModalOpen=!0)},p=()=>{this.text.length<120||(this.expandElipsis=!0)},m=()=>{if(this.mode==="editable")return L`
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
              <superviz-icon name=${i} size="md"></superviz-icon>
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
    `}};ei.styles=FE,ei.properties={uuid:{type:String},annotationId:{type:String},avatar:{type:String},username:{type:String},text:{type:String},resolved:{type:Boolean},resolvable:{type:Boolean},createdAt:{type:String},mode:{type:String},deleteCommentModalOpen:{type:Boolean},primaryComment:{type:Boolean},expandElipsis:{type:Boolean},annotationFilter:{type:String}},ei=X([Q("superviz-comments-comment-item")],ei);v();var Cp=et(V),kE=[Cp.styles,kl],ni=class extends Cp{constructor(){super();this.getSendBtn=()=>this.shadowRoot.querySelector(".comment-input--send-btn");this.sendEnter=i=>{if(i.key!=="Enter"||i.shiftKey)return;let o=this.commentInput,a=o.value.trim();if(!a)return;let u=this.getSendBtn();this.emitEvent(this.eventType,{text:a},{composed:!1,bubbles:!1}),o.value="",u.disabled=!0,this.updateHeight()};this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1})};this.onTextareaFocus=()=>{let i=this.optionsContainer,o=this.horizontalRule;i.classList.add("active-textarea"),o.classList.add("active-hr")};this.onTextareaLoseFocus=()=>{let i=this.optionsContainer,o=this.horizontalRule;this.commentInput.value.length||(i.classList.remove("active-textarea"),o.classList.remove("active-hr"))};this.btnActive=!1,this.text=""}firstUpdated(i){this.emitEvent("comment-input-ready",{},{composed:!1,bubbles:!1})}get commentInput(){return this.shadowRoot.getElementById("comment-input--textarea")}get optionsContainer(){return this.shadowRoot.querySelector(".comment-input--options")}get horizontalRule(){return this.shadowRoot.querySelector(".sv-hr")}connectedCallback(){super.connectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&this.addEventListener("keyup",this.sendEnter)}disconnectedCallback(){super.disconnectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&this.removeEventListener("keyup",this.sendEnter)}updated(i){if(i.has("text")&&this.text.length>0){let o=this.commentInput;o.value=this.text,this.updateHeight()}if(i.has("btnActive")){let o=this.getSendBtn();o.disabled=!this.btnActive}}updateHeight(){let i=this.commentInput;i.style.height="40px";let o=i.scrollHeight+16;o===47&&(o=40),i.style.height=`${o}px`;let a=this.getSendBtn();a.disabled=!(i.value.length>0)}send(i){i.preventDefault();let o=this.commentInput,a=this.getSendBtn(),u=o.value;this.emitEvent(this.eventType,{text:u},{composed:!1,bubbles:!1}),o.value="",a.disabled=!0,this.updateHeight()}render(){var a;let i=()=>{if(!!this.editable)return L`
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
            ${o()} ${i()}
          </div>
        </div>
      </div>
    `}};ni.styles=kE,ni.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean},placeholder:{type:String}},ni=X([Q("superviz-comments-comment-input")],ni);v();var Ip=et(V),zE=[Ip.styles,Ul],ii=class extends Ip{constructor(){super();this.focusInput=()=>{var i,o;this.inputElement||(this.inputElement=(o=(i=this.shadowRoot)==null?void 0:i.querySelector("superviz-comments-comment-input"))==null?void 0:o.shadowRoot.querySelector("textarea")),this.inputElement.focus()};this.setInputSide=()=>{let u=this.commentsSide==="right"?320:0,c=this.annotationSides.right+293,p=this.containerSides.right-u;if(c<p){this.horizontalSide="right";return}u=this.commentsSide==="left"?320:0;let m=this.annotationSides.left-293,_=this.containerSides.left+u;if(m>_){this.horizontalSide="left";return}this.horizontalSide=_-m>c-p?"right":"left"};this.createComment=({detail:i})=>{this.annotationSent=!0,document.body.dispatchEvent(new CustomEvent("create-annotation",{detail:At(k({},i),{position:At(k({},this.originalPosition),{type:"canvas"})})})),this.annotation=null};this.cancelTemporaryAnnotation=()=>{this.annotation=null};this.cancelTemporaryAnnotationEsc=i=>{this.annotation=null};this.avatar=()=>{if(this.type==="add"&&!this.showInput)return L`<div class="annotation-pin__avatar annotation-pin__avatar--add">
        <superviz-icon name="add" allowSetSize="true"></superviz-icon>
      </div>`;let i=this.userAvatar;return i?L`<div class="annotation-pin__avatar">
        <img src=${i} />
      </div>`:L`<div class="annotation-pin__avatar">
      <p class="text text-bold text-big">${this.userInitial}</p>
    </div>`};this.input=()=>{if(!(!this.showInput||this.annotationSent))return L`<div class="floating-input">
      <superviz-comments-comment-input
        @create-annotation=${this.createComment}
        eventType="create-annotation"
        @comment-input-ready=${this.focusInput}
      >
      </superviz-comments-comment-input>
    </div>`};this.position={x:0,y:0}}updated(i){super.updated(i),!(!i.has("movedPosition")||!this.annotationSides)&&(this.annotationSides=this.pinAnnotation.getBoundingClientRect(),this.setInputSide(),this.inputElement&&this.focusInput())}firstUpdated(i){var o;super.firstUpdated(i),this.showInput&&(this.originalPosition=k({},this.position),this.pinAnnotation=(o=this.shadowRoot)==null?void 0:o.querySelector(".annotation-pin"),this.annotationSides=this.pinAnnotation.getBoundingClientRect(),this.setInputSide())}connectedCallback(){super.connectedCallback(),this.type==="add"&&(window.document.body.addEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.addEventListener("keyup",i=>{i.key==="Escape"&&this.cancelTemporaryAnnotationEsc(i)}))}disconnectedCallback(){super.disconnectedCallback(),this.type==="add"&&(window.document.body.removeEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.removeEventListener("keyup",i=>{i.key==="Escape"&&this.cancelTemporaryAnnotationEsc(i)}))}get userAvatar(){var i,o,a,u;return((u=(a=(o=(i=this.annotation)==null?void 0:i.comments)==null?void 0:o.at(0))==null?void 0:a.participant)==null?void 0:u.avatar)||this.localAvatar}get userInitial(){var o,a,u,c,p;return(((p=(c=(u=(a=(o=this.annotation)==null?void 0:o.comments)==null?void 0:a.at(0))==null?void 0:u.participant)==null?void 0:c.name)!=null?p:this.localName)||"Anonymous")[0].toUpperCase()}emitClick(){var i;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:(i=this.annotation)==null?void 0:i.uuid}}))}render(){var o,a;let i={"annotation-pin":!0,"annotation-pin--active":this.active};return i[this.horizontalSide]=!0,this.type==="add"?L`
        <div
          class=${dt(i)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          ${this.avatar()} ${this.input()}
        </div>
      `:L`
      <div
        @click=${this.emitClick}
        class=${dt(i)}
        style=${`top: ${(o=this.position)==null?void 0:o.y}px; left: ${(a=this.position)==null?void 0:a.x}px; pointer-events: auto;`}
      >
        ${this.avatar()}
      </div>
    `}};ii.styles=zE,ii.properties={type:{type:String},annotation:{type:Object},position:{type:Object},active:{type:Boolean},showInput:{type:Boolean},containerSides:{type:Object},horizontalSide:{type:String},commentsSide:{type:String},movedPosition:{type:String},pinAnnotation:{type:Object},localAvatar:{type:String},annotationSent:{type:Boolean},localName:{type:String}},ii=X([Q("superviz-comments-annotation-pin")],ii);v();var Lp=et(V),HE=[Lp.styles,zl],ri=class extends Lp{constructor(){super(...arguments);this.selectAnnotation=()=>{let{uuid:i}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:i}}))};this.resolveAnnotation=({detail:i})=>{let{uuid:o}=this.annotation,{resolved:a,type:u}=i,c=u==="resolve-annotation"&&this.annotationFilter==="all";this.resolved=a,this.emitEvent("resolve-annotation",{uuid:o,resolved:a}),c&&(this.shouldShowUndoResolved=!0)};this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1};this.generateExpantedCommentesTemplate=(i,o)=>{var a,u,c,p;return o===0?L``:L`
      <superviz-comments-comment-item
        uuid=${i.uuid}
        avatar=${(p=(c=(u=(a=this.annotation)==null?void 0:a.comments)==null?void 0:u.at(o))==null?void 0:c.participant)==null?void 0:p.avatar}
        username=${i.participant.name||"Anonymous"}
        text=${i.text}
        createdAt=${i.createdAt}
        annotationId=${this.annotation.uuid}
      ></superviz-comments-comment-item>
    `}}get filterIsAll(){return this.annotationFilter==="all"}get filterIsResolved(){return this.annotationFilter==="resolved"}get shouldHiddenAnnotation(){return{hidden:this.resolved&&this.filterIsAll||!this.resolved&&this.filterIsResolved}}get replies(){return[...this.annotation.comments].splice(1).length}get repliesSize(){return this.replies>=5?5:this.replies}get replyText(){return this.replies!==1?"replies":"reply"}get isSelected(){return this.selected===this.annotation.uuid}get annotationClasses(){return{"annotation-item":!0,"annotation-item--selected":this.isSelected}}get hrClasses(){return{"sv-hr":!0,hidden:this.isLastAnnotation}}get avatarCommentsClasses(){return{"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&this.replies>1,hidden:!(!this.expandComments&&this.replies>=1)}}get commentsClasses(){return{"comments-container":!0,"comment-item--expand":this.isSelected&&this.expandComments,hidden:!(this.isSelected&&this.expandComments)}}firstUpdated(){this.resolved=this.annotation.resolved}updated(i){if(i.has("selected")){let o=this.selected===this.annotation.uuid;this.expandComments=o}}createComment({detail:i}){let{text:o}=i;this.emitEvent("create-comment",{uuid:this.annotation.uuid,text:o})}generateAvatarCommentsTemplate(){var o,a,u,c,p,m;let i=[];for(let _=1;_<=this.repliesSize;_++)(a=(o=this.annotation.comments[_])==null?void 0:o.participant)!=null&&a.avatar?i.push(L`
          <div class="avatar">
            <img src=${(c=(u=this.annotation.comments[_])==null?void 0:u.participant)==null?void 0:c.avatar} />
          </div>
        `):i.push(L`
          <div class="avatar">
            <p class="text text-bold">
              ${((m=(p=this.annotation.comments[_])==null?void 0:p.participant.name[0])==null?void 0:m.toUpperCase())||"A"}
            </p>
          </div>
        `);return L`
      ${i}
      <div class="text text-big sv-gray-500">${this.replies} ${this.replyText}</div>
    `}annotationResolvedTemplate(){return this.shouldShowUndoResolved?L`
      <superviz-comments-annotation-resolved
        @undo-resolve=${this.resolveAnnotation}
        @hide=${this.hideUndoResolved}
        class=${dt({hidden:this.filterIsResolved})}
      >
      </superviz-comments-annotation-resolved>
    `:L``}render(){var i,o,a,u,c,p,m,_,T,S;return L`
      ${this.annotationResolvedTemplate()}

      <div class=${dt(this.shouldHiddenAnnotation)}>
        <div class=${dt(this.annotationClasses)} @click=${this.selectAnnotation}>
          <div>
            <superviz-comments-comment-item
              uuid=${(i=this.annotation.comments)==null?void 0:i[0].uuid}
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
    `}};ri.styles=HE,ri.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String}},ri=X([Q("superviz-comments-annotation-item")],ri);v();var Mp=et(V),UE=[Mp.styles],oi=class extends Mp{constructor(){super(...arguments);this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:L`<span class="text text-big sv-gray-600">Are you sure you want to delete this comment? <br /> This action cannot be undone</span>`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))};this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{!this.open||this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{!this.open||(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(i){i.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){!this.open||(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){let i=()=>{if(!!this.useSlot)return L`<slot name="modal-handler" @click=${this.toggle}></slot>`},o=()=>{if(!!this.open)return L`
        <superviz-modal></superviz-modal>
      `};return L`
      ${i()}
      ${o()}
    `}};oi.styles=UE,oi.properties={open:{type:Boolean},useSlot:{type:Boolean}},oi=X([Q("superviz-comments-delete-comments-modal")],oi);v();var Np=et(V),WE=[Np.styles,Hl],BE=10*1e3,si=class extends Np{constructor(){super();this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)};this.timeToHide=BE,this.isCanceled=!1}firstUpdated(){this.setTimer()}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return this.timeToHide===0?L``:this.isCanceled?L``:L`
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
    `}};si.styles=WE,si.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},si=X([Q("superviz-comments-annotation-resolved")],si);v();var Rp=et(V),VE=[Rp.styles,Wl],no=[{label:"All comments",code:"all"},{label:"Resolved comments",code:"resolved"}],ai=class extends Rp{constructor(){super();this.caret="down"}render(){let i=this.filter==="all"?no[0].label:no[1].label,o=({detail:p})=>{this.emitEvent("select",{filter:p}),a()},a=()=>{this.caret=this.caret==="down"?"up":"down"},u=this.filter==="all"?no[0].code:no[1].code,c={text:!0,"text-bold":!0,"select-content":!0,"sv-gray-500":this.caret==="down","sv-gray-700":this.caret==="up"};return L`
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
              <span class=${dt(c)}>${i}</span>
              <superviz-icon name=${this.caret} size="md"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};ai.styles=VE,ai.properties={filter:{type:String},caret:{type:String}},ai=X([Q("superviz-comments-annotation-filter")],ai);v();var Pp=et(V),GE=[Pp.styles,Bl],li=class extends Pp{constructor(){super();this.isHidden=!0,this.positionStyles="top: 20px; left: 20px;",this.shouldHide=!1,this.commentsPosition="left"}toggle(){this.emitEvent("toggle",{})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("toggle-annotation-sidebar",()=>{this.isHidden=!this.isHidden})}updated(i){super.updated(i),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(".float-button");if(!o)return;o.setAttribute("style",this.positionStyles);let a=window.document.body.getBoundingClientRect().width,u=o.getBoundingClientRect(),c=320;if(!this.commentsPosition||this.commentsPosition==="left"){this.shouldHide=u.x<c;return}this.shouldHide=a-u.right<c})}render(){let i={"float-button":!0,"hide-button":!this.isHidden&&this.shouldHide};return L` <button @click=${this.toggle} class="${dt(i)}">
      <superviz-icon allowSetSize=${!0} size="sm" name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`}};li.styles=GE,li.properties={positionStyles:{type:String},isHidden:{type:Boolean},commentsPosition:{type:String}},li=X([Q("superviz-comments-button")],li);v();v();v();v();var io=(_=>(_.GOTO="go to",_.LOCAL_FOLLOW="follow",_.LOCAL_UNFOLLOW="unfollow",_.FOLLOW="everyone follows me",_.UNFOLLOW="stop followers",_.PRIVATE="private mode",_.LEAVE_PRIVATE="leave private mode",_.GATHER="gather all",_.STOP_GATHER="stop gather all",_))(io||{});v();v();var Cu=B`
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
    z-index: 99;
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
`;var Dp=et(V),ZE=[Dp.styles,Cu],ui=class extends Dp{constructor(){super();this.onClickOutDropdown=({detail:i})=>{this.open=i.open};this.dropdownOptionsHandler=({detail:i})=>{var m;let{id:o,label:a,name:u,color:c,slotIndex:p}=i;if(a==="go to"&&this.emitEvent("realtime.go-to-participant",{id:o}),["follow","unfollow"].includes(a)){if(((m=this.following)==null?void 0:m.id)===o){this.stopFollowing();return}this.following={name:u,id:o,color:c},this.swapParticipantBeingFollowedPosition(),this.emitEvent("realtime.local-follow-participant",{id:o})}if(["private mode","leave private mode"].includes(a)&&(this.isPrivate=a==="private mode",this.emitEvent("realtime.private-mode",{id:o,isPrivate:this.isPrivate}),this.everyoneFollowsMe=!1),["everyone follows me","stop followers"].includes(a)){if(this.following&&this.stopFollowing(),this.everyoneFollowsMe){this.stopEveryoneFollowsMe();return}this.everyoneFollowsMe=!0,this.following=void 0,this.emitEvent("realtime.follow-participant",{id:o,name:u,color:c,slotIndex:p})}a==="gather all"&&this.emitEvent("realtime.gather",{id:o})};this.toggleShowTooltip=()=>{this.showTooltip=!this.showTooltip};this.position="top: 20px; right: 40px;",this.showTooltip=!0,this.open=!1,this.textColorValues=[2,4,5,7,8,16]}updateParticipants(i){this.participants=i}toggleOpen(){this.open=!this.open}dropdownPosition(i){if(this.participants.length===1)return"bottom-center";if(i===0)return"bottom-right";let o=this.participants.length>4,a=i+1===this.participants.length;return o||!a?"bottom-center":"bottom-left"}renderExcessParticipants(){var c;let i=this.participants.length-4;if(i<=0)return L``;let o=this.participants.slice(4).map(({name:p,color:m,id:_,slotIndex:T,isLocal:S,avatar:M,joinedPresence:$})=>({name:p,color:m,id:_,slotIndex:T,avatar:M,isLocal:S,joinedPresence:$})),a={"superviz-who-is-online__participant":!0,excess_participants:!0,"excess_participants--open":this.open};return L`
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
        ?localParticipantJoinedPresence=${(c=this.localParticipantData)==null?void 0:c.joinedPresence}
      >
        <div class=${dt(a)} slot="dropdown">
          <div class="superviz-who-is-online__excess" style="color: #AEA9B8;">+${i}</div>
        </div>
      </superviz-who-is-online-dropdown>
    `}stopEveryoneFollowsMe(){this.everyoneFollowsMe=!1,this.emitEvent("realtime.follow-participant",void 0)}getAvatar(i){var a,u;if((a=i.avatar)!=null&&a.imageUrl)return L` <img
        class="superviz-who-is-online__avatar"
        style="background-color: ${i.color}"
        src=${i.avatar.imageUrl}
      />`;let o=this.textColorValues.includes(i.slotIndex)?"#FFFFFF":"#26242A";return L`<div
      class="superviz-who-is-online__avatar"
      style="background-color: ${i.color}; color: ${o}"
    >
      ${(u=i.name)==null?void 0:u.at(0).toUpperCase()}
    </div>`}getOptions(i,o,a){let{id:u,slotIndex:c,name:p,color:m}=i,_={id:u,name:p,color:m,slotIndex:c},{isPrivate:T}=this;return(a?["GATHER",this.everyoneFollowsMe?"UNFOLLOW":"FOLLOW",T?"LEAVE_PRIVATE":"PRIVATE"]:["GOTO",o?"LOCAL_UNFOLLOW":"LOCAL_FOLLOW"]).map($=>At(k({},_),{label:io[$]}))}getIcons(i,o){return i?["gather",this.everyoneFollowsMe?"send-off":"send","eye_inative"]:["place",o?"send-off":"send"]}putLocalParticipationFirst(){var u;if(this.participants[0].isLocal)return;let i=(u=this.participants)==null?void 0:u.find(({isLocal:c})=>c);if(!i)return;let o=[...this.participants],a=o.indexOf(i);o.splice(a,1),o.unshift(i),this.participants=o}swapParticipantBeingFollowedPosition(){var c;let i=(c=this.participants)==null?void 0:c.findIndex(({id:p})=>{var m;return p===((m=this.following)==null?void 0:m.id)}),o=1;if(i<4||!i)return;let a=[...this.participants],u=a[i];a[i]=a[o],a[o]=u,this.participants=a}stopFollowing(){this.following=void 0,this.emitEvent("realtime.local-follow-participant",{id:void 0})}cancelPrivate(){this.isPrivate=void 0,this.emitEvent("realtime.private-mode",{id:this.localParticipantData.id})}followingMessage(){if(!this.following)return"";let{name:i,color:o}=this.following;return L`<div class="message" style="border-color: ${o}">
      Following: ${i} <span @click=${this.stopFollowing}>Stop</span>
    </div>`}everyoneFollowsMeMessage(){if(!this.everyoneFollowsMe)return"";let{color:i}=this.localParticipantData;return L`<div class="message" style="border-color: ${i}">
      Everyone is following you <span @click=${this.stopEveryoneFollowsMe}>Stop</span>
    </div>`}privateMessage(){if(!this.isPrivate)return"";let{color:i}=this.localParticipantData;return L`<div class="message" style="border-color: ${i}">
      You are in Private Mode <span @click=${this.cancelPrivate}>Cancel</span>
    </div>`}renderParticipants(){return this.participants?(this.putLocalParticipationFirst(),this.swapParticipantBeingFollowedPosition(),L`<div class="superviz-who-is-online">
      ${Ni(this.participants.slice(0,4),i=>i.id,(i,o)=>{var kt,It;let{joinedPresence:a,isLocal:u,id:c,name:p,color:m}=i,_=((kt=this.following)==null?void 0:kt.id)===c,T=this.getOptions(i,_,u),S=this.getIcons(u,_),M=this.dropdownPosition(o),$=!a||this.disableDropdown,P={"superviz-who-is-online__participant":!0,"disable-dropdown":$,followed:_||u&&this.everyoneFollowsMe,private:u&&this.isPrivate},ut=p+(u?" (you)":""),pt={name:p};return((It=this.localParticipantData)==null?void 0:It.joinedPresence)&&a&&!u&&(pt.action="Click to Follow"),u&&(pt.action="You"),L`
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
              onHoverData=${JSON.stringify(pt)}
            >
              <div slot="dropdown" class=${dt(P)} style="--border-color: ${m}">
                ${this.getAvatar(i)}
              </div>
            </superviz-dropdown>
          `})}
      ${this.renderExcessParticipants()}
    </div>`):L``}updated(i){super.updated(i),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(".wio-content");if(!o)return;let a=this.position.includes("left")?"flex-start":"flex-end",u=`${this.position} align-items: ${a};`;o.setAttribute("style",u)})}render(){return L`<div class="wio-content">
      ${this.renderParticipants()} ${this.followingMessage()} ${this.everyoneFollowsMeMessage()}
      ${this.privateMessage()}
    </div> `}};ui.styles=ZE,ui.properties={position:{type:String},participants:{type:Object},open:{type:Boolean},disableDropdown:{type:Boolean},following:{type:Object},localParticipantColor:{type:String},isPrivate:{type:Boolean},everyoneFollowsMe:{type:Boolean},showTooltip:{type:Boolean}},ui=X([Q("superviz-who-is-online")],ui);v();v();var Fp=et(V),qE=[Fp.styles,Iu],ci=class extends Fp{constructor(){super();this.onClickOutDropdown=i=>{if(i.stopPropagation(),!this.open)return;let o=i.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),u=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=o.includes(a),_=o.includes(u),T=o.includes(p);m||_||T||this.close()};this.close=()=>{this.open=!1,this.selected="",this.emitEvent("clickout",{bubbles:!1,composed:!1})};this.selectParticipant=i=>()=>{this.selected=i};this.toggleShowTooltip=()=>{this.showParticipantTooltip=!this.showParticipantTooltip};this.adjustPosition=()=>{let{top:i,bottom:o}=this.dropdownBounds,{innerHeight:a}=window,u=this.positionAction();if(u===0)return;if(u===1){let _=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,_);return}let c=a-o>i?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,c);this.position=m};this.tooltip=()=>this.showSeeMoreTooltip?L`<superviz-tooltip
      tooltipData=${JSON.stringify({name:"See more"})}
    ></superviz-tooltip>`:"";this.textColorValues=[2,4,5,7,8,16],this.selected="",this.showParticipantTooltip=!0}updated(i){if(!!i.has("open")){if(this.emitEvent("toggle-dropdown-state",{open:this.open,font:"toggle"}),this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown)}}getAvatar(i){var a,u;if((a=i.avatar)!=null&&a.imageUrl)return L` <img
        class="who-is-online-dropdown__avatar"
        style="background-color: ${i.color}"
        src=${i.avatar.imageUrl}
      />`;let o=this.textColorValues.includes(i.slotIndex)?"#FFFFFF":"#26242A";return L`<div
      class="who-is-online-dropdown__avatar"
      style="background-color: ${i.color}; color: ${o}"
    >
      ${(u=i.name)==null?void 0:u.at(0).toUpperCase()}
    </div>`}renderParticipants(){if(!this.participants)return;let i=["place","send"];return Ni(this.participants,o=>o.id,o=>{var ut,pt;let{id:a,slotIndex:u,joinedPresence:c,isLocal:p,color:m,name:_}=o,T=!c||p||this.disableDropdown,S={"who-is-online-dropdown__content":!0,"who-is-online-dropdown__content--selected":this.selected===a,"disable-dropdown":T,followed:((ut=this.following)==null?void 0:ut.id)===a},M={icon:!0,"hide-icon":T},$=((pt=this.following)==null?void 0:pt.id)===a,P=Object.values(io).map((kt,It)=>({label:$&&It?"UNFOLLOW":kt,id:a,name:_,color:m,slotIndex:u})).slice(0,2),vt={name:_};return this.localParticipantJoinedPresence&&c&&(vt.action="Click to Follow"),L`
        <superviz-dropdown
        options=${JSON.stringify(P)}
        label="label"
        position="bottom-right"
        @selected=${this.close}
        icons="${JSON.stringify(i)}"
        ?disabled=${T}
        onHoverData=${JSON.stringify(vt)}
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
      `})}setMenu(){var i;if(!this.menu){this.menu=this.shadowRoot.querySelector(".menu");let o={rootMargin:"0px",threshold:1},a=new IntersectionObserver(this.adjustPosition,o),u=new ResizeObserver(this.adjustPosition),c=this.menu;a.observe(c),u.observe((i=this.scrollableParent)!=null?i:document.body)}}get scrollableParent(){let i;this.host||(this.host=this.getRootNode().host);let o=this.host;for(;!i;){let a=o==null?void 0:o.parentElement;if(this.isScrollable(a)){i=a;break}if(o=a,!o)break}return i}isScrollable(i){if(!i)return!1;let o=i.scrollHeight>i.clientHeight,a=window.getComputedStyle(i).overflowY,u=window.getComputedStyle(i).overflowX,c=a.indexOf("hidden")!==-1,p=u.indexOf("hidden")!==-1;return o&&!c&&!p}get dropdownBounds(){this.dropdownContent||(this.dropdownContent=this.shadowRoot.querySelector(".dropdown-content"));let i=this.dropdownContent.getBoundingClientRect(),{y:o,height:a}=this.menu.getBoundingClientRect();return{top:o,bottom:o+a+4,height:a+4,contentY:i.y}}shouldUseOriginalVertical(){let{height:i,contentY:o}=this.dropdownBounds,{innerHeight:a}=window,u=o+i;return this.originalPosition.includes("bottom")?i+u<a:o-i>0}positionAction(){let{top:i,bottom:o}=this.dropdownBounds,{innerHeight:a}=window,u=o>a,c=i<0;return u&&this.position.includes("bottom")||c&&this.position.includes("top")?2:!u&&!c&&this.shouldUseOriginalVertical()?1:0}toggle(){this.originalPosition||(this.originalPosition=this.position),this.setMenu(),this.open=!this.open,this.open&&(this.selected="",setTimeout(()=>this.adjustPosition()))}get menuClasses(){return{menu:!0,"menu--bottom":this.position==="bottom","menu--top":this.position==="top","menu-open":this.open}}render(){return L`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
        ${this.tooltip()}
      </div>
      <div class="dropdown-list">
        <div class=${dt(this.menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `}};ci.styles=qE,ci.properties={open:{type:Boolean},align:{type:String},position:{type:String},participants:{type:Array},selected:{type:String},disableDropdown:{type:Boolean},following:{type:Object},showSeeMoreTooltip:{type:Boolean},showParticipantTooltip:{type:Boolean},localParticipantJoinedPresence:{type:Boolean}},ci=X([Q("superviz-who-is-online-dropdown")],ci);export{qn as Comments,ai as CommentsAnnotationFilter,ri as CommentsAnnotationItem,ii as CommentsAnnotationPin,si as CommentsAnnotationResolved,ni as CommentsCommentInput,ei as CommentsCommentItem,Jn as CommentsContent,li as CommentsFloatButton,Yn as CommentsTopbar,oi as DeleteCommentModal,Gn as Dropdown,Bn as HelloWorld,Vn as Icon,Ii as Modal,Li as ModalContainer,Zn as Tooltip,ui as WhoIsOnline,ci as WhoIsOnlineDropdown};
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
