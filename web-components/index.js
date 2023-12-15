var Lx=Object.create;var js=Object.defineProperty,Mx=Object.defineProperties,ff=Object.getOwnPropertyDescriptor,Nx=Object.getOwnPropertyDescriptors,Rx=Object.getOwnPropertyNames,Xs=Object.getOwnPropertySymbols,Dx=Object.getPrototypeOf,ol=Object.prototype.hasOwnProperty,hf=Object.prototype.propertyIsEnumerable;var pf=Math.pow,df=(i,e,r)=>e in i?js(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,k=(i,e)=>{for(var r in e||(e={}))ol.call(e,r)&&df(i,r,e[r]);if(Xs)for(var r of Xs(e))hf.call(e,r)&&df(i,r,e[r]);return i},Lt=(i,e)=>Mx(i,Nx(e));var al=(i,e)=>{var r={};for(var s in i)ol.call(i,s)&&e.indexOf(s)<0&&(r[s]=i[s]);if(i!=null&&Xs)for(var s of Xs(i))e.indexOf(s)<0&&hf.call(i,s)&&(r[s]=i[s]);return r};var Fx=(i,e)=>()=>(i&&(e=i(i=0)),e);var Px=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var kx=(i,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Rx(e))!ol.call(i,a)&&a!==r&&js(i,a,{get:()=>e[a],enumerable:!(s=ff(e,a))||s.enumerable});return i};var Hx=(i,e,r)=>(r=i!=null?Lx(Dx(i)):{},kx(e||!i||!i.__esModule?js(r,"default",{value:i,enumerable:!0}):r,i));var j=(i,e,r,s)=>{for(var a=s>1?void 0:s?ff(e,r):e,u=i.length-1,c;u>=0;u--)(c=i[u])&&(a=(s?c(e,r,a):c(a))||a);return s&&a&&js(e,r,a),a};var $n=(i,e,r)=>new Promise((s,a)=>{var u=m=>{try{p(r.next(m))}catch(_){a(_)}},c=m=>{try{p(r.throw(m))}catch(_){a(_)}},p=m=>m.done?s(m.value):Promise.resolve(m.value).then(u,c);p((r=r.apply(i,e)).next())});var v=Fx(()=>{});var ah=Px(($r,Ci)=>{v();(function(){var i,e="4.17.21",r=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",u="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",p=500,m="__lodash_placeholder__",_=1,T=2,S=4,N=1,I=2,L=1,gt=2,ut=4,vt=8,qt=16,Yt=32,Ye=64,he=128,gn=256,vn=512,yn=30,ko="...",kp=800,Hp=16,Mu=1,Up=2,zp=3,_n=1/0,Je=9007199254740991,Wp=17976931348623157e292,is=0/0,Te=4294967295,Bp=Te-1,Gp=Te>>>1,Vp=[["ary",he],["bind",L],["bindKey",gt],["curry",vt],["curryRight",qt],["flip",vn],["partial",Yt],["partialRight",Ye],["rearg",gn]],fr="[object Arguments]",ss="[object Array]",Zp="[object AsyncFunction]",Kr="[object Boolean]",Xr="[object Date]",qp="[object DOMException]",os="[object Error]",as="[object Function]",Nu="[object GeneratorFunction]",pe="[object Map]",jr="[object Number]",Yp="[object Null]",Le="[object Object]",Ru="[object Promise]",Jp="[object Proxy]",Qr="[object RegExp]",me="[object Set]",ti="[object String]",ls="[object Symbol]",Kp="[object Undefined]",ei="[object WeakMap]",Xp="[object WeakSet]",ni="[object ArrayBuffer]",hr="[object DataView]",Ho="[object Float32Array]",Uo="[object Float64Array]",zo="[object Int8Array]",Wo="[object Int16Array]",Bo="[object Int32Array]",Go="[object Uint8Array]",Vo="[object Uint8ClampedArray]",Zo="[object Uint16Array]",qo="[object Uint32Array]",jp=/\b__p \+= '';/g,Qp=/\b(__p \+=) '' \+/g,tm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Du=/&(?:amp|lt|gt|quot|#39);/g,Fu=/[&<>"']/g,em=RegExp(Du.source),nm=RegExp(Fu.source),rm=/<%-([\s\S]+?)%>/g,im=/<%([\s\S]+?)%>/g,Pu=/<%=([\s\S]+?)%>/g,sm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,om=/^\w*$/,am=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yo=/[\\^$.*+?()[\]{}|]/g,lm=RegExp(Yo.source),Jo=/^\s+/,um=/\s/,cm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,dm=/\{\n\/\* \[wrapped with (.+)\] \*/,fm=/,? & /,hm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,pm=/[()=,{}\[\]\/\s]/,mm=/\\(\\)?/g,gm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ku=/\w*$/,vm=/^[-+]0x[0-9a-f]+$/i,ym=/^0b[01]+$/i,_m=/^\[object .+?Constructor\]$/,wm=/^0o[0-7]+$/i,xm=/^(?:0|[1-9]\d*)$/,Em=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,us=/($^)/,bm=/['\n\r\u2028\u2029\\]/g,cs="\\ud800-\\udfff",Tm="\\u0300-\\u036f",Sm="\\ufe20-\\ufe2f",Am="\\u20d0-\\u20ff",Hu=Tm+Sm+Am,Uu="\\u2700-\\u27bf",zu="a-z\\xdf-\\xf6\\xf8-\\xff",Om="\\xac\\xb1\\xd7\\xf7",Cm="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",$m="\\u2000-\\u206f",Im=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Wu="A-Z\\xc0-\\xd6\\xd8-\\xde",Bu="\\ufe0e\\ufe0f",Gu=Om+Cm+$m+Im,Ko="['\u2019]",Lm="["+cs+"]",Vu="["+Gu+"]",ds="["+Hu+"]",Zu="\\d+",Mm="["+Uu+"]",qu="["+zu+"]",Yu="[^"+cs+Gu+Zu+Uu+zu+Wu+"]",Xo="\\ud83c[\\udffb-\\udfff]",Nm="(?:"+ds+"|"+Xo+")",Ju="[^"+cs+"]",jo="(?:\\ud83c[\\udde6-\\uddff]){2}",Qo="[\\ud800-\\udbff][\\udc00-\\udfff]",pr="["+Wu+"]",Ku="\\u200d",Xu="(?:"+qu+"|"+Yu+")",Rm="(?:"+pr+"|"+Yu+")",ju="(?:"+Ko+"(?:d|ll|m|re|s|t|ve))?",Qu="(?:"+Ko+"(?:D|LL|M|RE|S|T|VE))?",tc=Nm+"?",ec="["+Bu+"]?",Dm="(?:"+Ku+"(?:"+[Ju,jo,Qo].join("|")+")"+ec+tc+")*",Fm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Pm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",nc=ec+tc+Dm,km="(?:"+[Mm,jo,Qo].join("|")+")"+nc,Hm="(?:"+[Ju+ds+"?",ds,jo,Qo,Lm].join("|")+")",Um=RegExp(Ko,"g"),zm=RegExp(ds,"g"),ta=RegExp(Xo+"(?="+Xo+")|"+Hm+nc,"g"),Wm=RegExp([pr+"?"+qu+"+"+ju+"(?="+[Vu,pr,"$"].join("|")+")",Rm+"+"+Qu+"(?="+[Vu,pr+Xu,"$"].join("|")+")",pr+"?"+Xu+"+"+ju,pr+"+"+Qu,Pm,Fm,Zu,km].join("|"),"g"),Bm=RegExp("["+Ku+cs+Hu+Bu+"]"),Gm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Vm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Zm=-1,mt={};mt[Ho]=mt[Uo]=mt[zo]=mt[Wo]=mt[Bo]=mt[Go]=mt[Vo]=mt[Zo]=mt[qo]=!0,mt[fr]=mt[ss]=mt[ni]=mt[Kr]=mt[hr]=mt[Xr]=mt[os]=mt[as]=mt[pe]=mt[jr]=mt[Le]=mt[Qr]=mt[me]=mt[ti]=mt[ei]=!1;var pt={};pt[fr]=pt[ss]=pt[ni]=pt[hr]=pt[Kr]=pt[Xr]=pt[Ho]=pt[Uo]=pt[zo]=pt[Wo]=pt[Bo]=pt[pe]=pt[jr]=pt[Le]=pt[Qr]=pt[me]=pt[ti]=pt[ls]=pt[Go]=pt[Vo]=pt[Zo]=pt[qo]=!0,pt[os]=pt[as]=pt[ei]=!1;var qm={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ym={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Km={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Xm=parseFloat,jm=parseInt,rc=typeof global=="object"&&global&&global.Object===Object&&global,Qm=typeof self=="object"&&self&&self.Object===Object&&self,$t=rc||Qm||Function("return this")(),ea=typeof $r=="object"&&$r&&!$r.nodeType&&$r,wn=ea&&typeof Ci=="object"&&Ci&&!Ci.nodeType&&Ci,ic=wn&&wn.exports===ea,na=ic&&rc.process,ne=function(){try{var w=wn&&wn.require&&wn.require("util").types;return w||na&&na.binding&&na.binding("util")}catch(b){}}(),sc=ne&&ne.isArrayBuffer,oc=ne&&ne.isDate,ac=ne&&ne.isMap,lc=ne&&ne.isRegExp,uc=ne&&ne.isSet,cc=ne&&ne.isTypedArray;function Jt(w,b,E){switch(E.length){case 0:return w.call(b);case 1:return w.call(b,E[0]);case 2:return w.call(b,E[0],E[1]);case 3:return w.call(b,E[0],E[1],E[2])}return w.apply(b,E)}function tg(w,b,E,F){for(var V=-1,st=w==null?0:w.length;++V<st;){var At=w[V];b(F,At,E(At),w)}return F}function re(w,b){for(var E=-1,F=w==null?0:w.length;++E<F&&b(w[E],E,w)!==!1;);return w}function eg(w,b){for(var E=w==null?0:w.length;E--&&b(w[E],E,w)!==!1;);return w}function dc(w,b){for(var E=-1,F=w==null?0:w.length;++E<F;)if(!b(w[E],E,w))return!1;return!0}function Ke(w,b){for(var E=-1,F=w==null?0:w.length,V=0,st=[];++E<F;){var At=w[E];b(At,E,w)&&(st[V++]=At)}return st}function fs(w,b){var E=w==null?0:w.length;return!!E&&mr(w,b,0)>-1}function ra(w,b,E){for(var F=-1,V=w==null?0:w.length;++F<V;)if(E(b,w[F]))return!0;return!1}function yt(w,b){for(var E=-1,F=w==null?0:w.length,V=Array(F);++E<F;)V[E]=b(w[E],E,w);return V}function Xe(w,b){for(var E=-1,F=b.length,V=w.length;++E<F;)w[V+E]=b[E];return w}function ia(w,b,E,F){var V=-1,st=w==null?0:w.length;for(F&&st&&(E=w[++V]);++V<st;)E=b(E,w[V],V,w);return E}function ng(w,b,E,F){var V=w==null?0:w.length;for(F&&V&&(E=w[--V]);V--;)E=b(E,w[V],V,w);return E}function sa(w,b){for(var E=-1,F=w==null?0:w.length;++E<F;)if(b(w[E],E,w))return!0;return!1}var rg=oa("length");function ig(w){return w.split("")}function sg(w){return w.match(hm)||[]}function fc(w,b,E){var F;return E(w,function(V,st,At){if(b(V,st,At))return F=st,!1}),F}function hs(w,b,E,F){for(var V=w.length,st=E+(F?1:-1);F?st--:++st<V;)if(b(w[st],st,w))return st;return-1}function mr(w,b,E){return b===b?vg(w,b,E):hs(w,hc,E)}function og(w,b,E,F){for(var V=E-1,st=w.length;++V<st;)if(F(w[V],b))return V;return-1}function hc(w){return w!==w}function pc(w,b){var E=w==null?0:w.length;return E?la(w,b)/E:is}function oa(w){return function(b){return b==null?i:b[w]}}function aa(w){return function(b){return w==null?i:w[b]}}function mc(w,b,E,F,V){return V(w,function(st,At,ft){E=F?(F=!1,st):b(E,st,At,ft)}),E}function ag(w,b){var E=w.length;for(w.sort(b);E--;)w[E]=w[E].value;return w}function la(w,b){for(var E,F=-1,V=w.length;++F<V;){var st=b(w[F]);st!==i&&(E=E===i?st:E+st)}return E}function ua(w,b){for(var E=-1,F=Array(w);++E<w;)F[E]=b(E);return F}function lg(w,b){return yt(b,function(E){return[E,w[E]]})}function gc(w){return w&&w.slice(0,wc(w)+1).replace(Jo,"")}function Kt(w){return function(b){return w(b)}}function ca(w,b){return yt(b,function(E){return w[E]})}function ri(w,b){return w.has(b)}function vc(w,b){for(var E=-1,F=w.length;++E<F&&mr(b,w[E],0)>-1;);return E}function yc(w,b){for(var E=w.length;E--&&mr(b,w[E],0)>-1;);return E}function ug(w,b){for(var E=w.length,F=0;E--;)w[E]===b&&++F;return F}var cg=aa(qm),dg=aa(Ym);function fg(w){return"\\"+Km[w]}function hg(w,b){return w==null?i:w[b]}function gr(w){return Bm.test(w)}function pg(w){return Gm.test(w)}function mg(w){for(var b,E=[];!(b=w.next()).done;)E.push(b.value);return E}function da(w){var b=-1,E=Array(w.size);return w.forEach(function(F,V){E[++b]=[V,F]}),E}function _c(w,b){return function(E){return w(b(E))}}function je(w,b){for(var E=-1,F=w.length,V=0,st=[];++E<F;){var At=w[E];(At===b||At===m)&&(w[E]=m,st[V++]=E)}return st}function ps(w){var b=-1,E=Array(w.size);return w.forEach(function(F){E[++b]=F}),E}function gg(w){var b=-1,E=Array(w.size);return w.forEach(function(F){E[++b]=[F,F]}),E}function vg(w,b,E){for(var F=E-1,V=w.length;++F<V;)if(w[F]===b)return F;return-1}function yg(w,b,E){for(var F=E+1;F--;)if(w[F]===b)return F;return F}function vr(w){return gr(w)?wg(w):rg(w)}function ge(w){return gr(w)?xg(w):ig(w)}function wc(w){for(var b=w.length;b--&&um.test(w.charAt(b)););return b}var _g=aa(Jm);function wg(w){for(var b=ta.lastIndex=0;ta.test(w);)++b;return b}function xg(w){return w.match(ta)||[]}function Eg(w){return w.match(Wm)||[]}var bg=function w(b){b=b==null?$t:Qe.defaults($t.Object(),b,Qe.pick($t,Vm));var E=b.Array,F=b.Date,V=b.Error,st=b.Function,At=b.Math,ft=b.Object,fa=b.RegExp,Tg=b.String,ie=b.TypeError,ms=E.prototype,Sg=st.prototype,yr=ft.prototype,gs=b["__core-js_shared__"],vs=Sg.toString,ct=yr.hasOwnProperty,Ag=0,xc=function(){var t=/[^.]+$/.exec(gs&&gs.keys&&gs.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ys=yr.toString,Og=vs.call(ft),Cg=$t._,$g=fa("^"+vs.call(ct).replace(Yo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_s=ic?b.Buffer:i,tn=b.Symbol,ws=b.Uint8Array,Ec=_s?_s.allocUnsafe:i,xs=_c(ft.getPrototypeOf,ft),bc=ft.create,Tc=yr.propertyIsEnumerable,Es=ms.splice,Sc=tn?tn.isConcatSpreadable:i,ii=tn?tn.iterator:i,xn=tn?tn.toStringTag:i,bs=function(){try{var t=An(ft,"defineProperty");return t({},"",{}),t}catch(n){}}(),Ig=b.clearTimeout!==$t.clearTimeout&&b.clearTimeout,Lg=F&&F.now!==$t.Date.now&&F.now,Mg=b.setTimeout!==$t.setTimeout&&b.setTimeout,Ts=At.ceil,Ss=At.floor,ha=ft.getOwnPropertySymbols,Ng=_s?_s.isBuffer:i,Ac=b.isFinite,Rg=ms.join,Dg=_c(ft.keys,ft),Ot=At.max,Pt=At.min,Fg=F.now,Pg=b.parseInt,Oc=At.random,kg=ms.reverse,pa=An(b,"DataView"),si=An(b,"Map"),ma=An(b,"Promise"),_r=An(b,"Set"),oi=An(b,"WeakMap"),ai=An(ft,"create"),As=oi&&new oi,wr={},Hg=On(pa),Ug=On(si),zg=On(ma),Wg=On(_r),Bg=On(oi),Os=tn?tn.prototype:i,li=Os?Os.valueOf:i,Cc=Os?Os.toString:i;function f(t){if(bt(t)&&!Z(t)&&!(t instanceof nt)){if(t instanceof se)return t;if(ct.call(t,"__wrapped__"))return $d(t)}return new se(t)}var xr=function(){function t(){}return function(n){if(!_t(n))return{};if(bc)return bc(n);t.prototype=n;var o=new t;return t.prototype=i,o}}();function Cs(){}function se(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=i}f.templateSettings={escape:rm,evaluate:im,interpolate:Pu,variable:"",imports:{_:f}},f.prototype=Cs.prototype,f.prototype.constructor=f,se.prototype=xr(Cs.prototype),se.prototype.constructor=se;function nt(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Te,this.__views__=[]}function Gg(){var t=new nt(this.__wrapped__);return t.__actions__=Wt(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Wt(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Wt(this.__views__),t}function Vg(){if(this.__filtered__){var t=new nt(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Zg(){var t=this.__wrapped__.value(),n=this.__dir__,o=Z(t),l=n<0,d=o?t.length:0,h=i0(0,d,this.__views__),g=h.start,y=h.end,x=y-g,A=l?y:g-1,O=this.__iteratees__,$=O.length,R=0,P=Pt(x,this.__takeCount__);if(!o||!l&&d==x&&P==x)return jc(t,this.__actions__);var z=[];t:for(;x--&&R<P;){A+=n;for(var J=-1,W=t[A];++J<$;){var tt=O[J],rt=tt.iteratee,Qt=tt.type,zt=rt(W);if(Qt==Up)W=zt;else if(!zt){if(Qt==Mu)continue t;break t}}z[R++]=W}return z}nt.prototype=xr(Cs.prototype),nt.prototype.constructor=nt;function En(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var l=t[n];this.set(l[0],l[1])}}function qg(){this.__data__=ai?ai(null):{},this.size=0}function Yg(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}function Jg(t){var n=this.__data__;if(ai){var o=n[t];return o===c?i:o}return ct.call(n,t)?n[t]:i}function Kg(t){var n=this.__data__;return ai?n[t]!==i:ct.call(n,t)}function Xg(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=ai&&n===i?c:n,this}En.prototype.clear=qg,En.prototype.delete=Yg,En.prototype.get=Jg,En.prototype.has=Kg,En.prototype.set=Xg;function Me(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var l=t[n];this.set(l[0],l[1])}}function jg(){this.__data__=[],this.size=0}function Qg(t){var n=this.__data__,o=$s(n,t);if(o<0)return!1;var l=n.length-1;return o==l?n.pop():Es.call(n,o,1),--this.size,!0}function tv(t){var n=this.__data__,o=$s(n,t);return o<0?i:n[o][1]}function ev(t){return $s(this.__data__,t)>-1}function nv(t,n){var o=this.__data__,l=$s(o,t);return l<0?(++this.size,o.push([t,n])):o[l][1]=n,this}Me.prototype.clear=jg,Me.prototype.delete=Qg,Me.prototype.get=tv,Me.prototype.has=ev,Me.prototype.set=nv;function Ne(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var l=t[n];this.set(l[0],l[1])}}function rv(){this.size=0,this.__data__={hash:new En,map:new(si||Me),string:new En}}function iv(t){var n=zs(this,t).delete(t);return this.size-=n?1:0,n}function sv(t){return zs(this,t).get(t)}function ov(t){return zs(this,t).has(t)}function av(t,n){var o=zs(this,t),l=o.size;return o.set(t,n),this.size+=o.size==l?0:1,this}Ne.prototype.clear=rv,Ne.prototype.delete=iv,Ne.prototype.get=sv,Ne.prototype.has=ov,Ne.prototype.set=av;function bn(t){var n=-1,o=t==null?0:t.length;for(this.__data__=new Ne;++n<o;)this.add(t[n])}function lv(t){return this.__data__.set(t,c),this}function uv(t){return this.__data__.has(t)}bn.prototype.add=bn.prototype.push=lv,bn.prototype.has=uv;function ve(t){var n=this.__data__=new Me(t);this.size=n.size}function cv(){this.__data__=new Me,this.size=0}function dv(t){var n=this.__data__,o=n.delete(t);return this.size=n.size,o}function fv(t){return this.__data__.get(t)}function hv(t){return this.__data__.has(t)}function pv(t,n){var o=this.__data__;if(o instanceof Me){var l=o.__data__;if(!si||l.length<r-1)return l.push([t,n]),this.size=++o.size,this;o=this.__data__=new Ne(l)}return o.set(t,n),this.size=o.size,this}ve.prototype.clear=cv,ve.prototype.delete=dv,ve.prototype.get=fv,ve.prototype.has=hv,ve.prototype.set=pv;function $c(t,n){var o=Z(t),l=!o&&Cn(t),d=!o&&!l&&on(t),h=!o&&!l&&!d&&Sr(t),g=o||l||d||h,y=g?ua(t.length,Tg):[],x=y.length;for(var A in t)(n||ct.call(t,A))&&!(g&&(A=="length"||d&&(A=="offset"||A=="parent")||h&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||Pe(A,x)))&&y.push(A);return y}function Ic(t){var n=t.length;return n?t[Aa(0,n-1)]:i}function mv(t,n){return Ws(Wt(t),Tn(n,0,t.length))}function gv(t){return Ws(Wt(t))}function ga(t,n,o){(o!==i&&!ye(t[n],o)||o===i&&!(n in t))&&Re(t,n,o)}function ui(t,n,o){var l=t[n];(!(ct.call(t,n)&&ye(l,o))||o===i&&!(n in t))&&Re(t,n,o)}function $s(t,n){for(var o=t.length;o--;)if(ye(t[o][0],n))return o;return-1}function vv(t,n,o,l){return en(t,function(d,h,g){n(l,d,o(d),g)}),l}function Lc(t,n){return t&&Ae(n,It(n),t)}function yv(t,n){return t&&Ae(n,Gt(n),t)}function Re(t,n,o){n=="__proto__"&&bs?bs(t,n,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[n]=o}function va(t,n){for(var o=-1,l=n.length,d=E(l),h=t==null;++o<l;)d[o]=h?i:Xa(t,n[o]);return d}function Tn(t,n,o){return t===t&&(o!==i&&(t=t<=o?t:o),n!==i&&(t=t>=n?t:n)),t}function oe(t,n,o,l,d,h){var g,y=n&_,x=n&T,A=n&S;if(o&&(g=d?o(t,l,d,h):o(t)),g!==i)return g;if(!_t(t))return t;var O=Z(t);if(O){if(g=o0(t),!y)return Wt(t,g)}else{var $=kt(t),R=$==as||$==Nu;if(on(t))return ed(t,y);if($==Le||$==fr||R&&!d){if(g=x||R?{}:wd(t),!y)return x?Jv(t,yv(g,t)):Yv(t,Lc(g,t))}else{if(!pt[$])return d?t:{};g=a0(t,$,y)}}h||(h=new ve);var P=h.get(t);if(P)return P;h.set(t,g),Jd(t)?t.forEach(function(W){g.add(oe(W,n,o,W,t,h))}):qd(t)&&t.forEach(function(W,tt){g.set(tt,oe(W,n,o,tt,t,h))});var z=A?x?Pa:Fa:x?Gt:It,J=O?i:z(t);return re(J||t,function(W,tt){J&&(tt=W,W=t[tt]),ui(g,tt,oe(W,n,o,tt,t,h))}),g}function _v(t){var n=It(t);return function(o){return Mc(o,t,n)}}function Mc(t,n,o){var l=o.length;if(t==null)return!l;for(t=ft(t);l--;){var d=o[l],h=n[d],g=t[d];if(g===i&&!(d in t)||!h(g))return!1}return!0}function Nc(t,n,o){if(typeof t!="function")throw new ie(a);return gi(function(){t.apply(i,o)},n)}function ci(t,n,o,l){var d=-1,h=fs,g=!0,y=t.length,x=[],A=n.length;if(!y)return x;o&&(n=yt(n,Kt(o))),l?(h=ra,g=!1):n.length>=r&&(h=ri,g=!1,n=new bn(n));t:for(;++d<y;){var O=t[d],$=o==null?O:o(O);if(O=l||O!==0?O:0,g&&$===$){for(var R=A;R--;)if(n[R]===$)continue t;x.push(O)}else h(n,$,l)||x.push(O)}return x}var en=od(Se),Rc=od(_a,!0);function wv(t,n){var o=!0;return en(t,function(l,d,h){return o=!!n(l,d,h),o}),o}function Is(t,n,o){for(var l=-1,d=t.length;++l<d;){var h=t[l],g=n(h);if(g!=null&&(y===i?g===g&&!jt(g):o(g,y)))var y=g,x=h}return x}function xv(t,n,o,l){var d=t.length;for(o=q(o),o<0&&(o=-o>d?0:d+o),l=l===i||l>d?d:q(l),l<0&&(l+=d),l=o>l?0:Xd(l);o<l;)t[o++]=n;return t}function Dc(t,n){var o=[];return en(t,function(l,d,h){n(l,d,h)&&o.push(l)}),o}function Ft(t,n,o,l,d){var h=-1,g=t.length;for(o||(o=u0),d||(d=[]);++h<g;){var y=t[h];n>0&&o(y)?n>1?Ft(y,n-1,o,l,d):Xe(d,y):l||(d[d.length]=y)}return d}var ya=ad(),Fc=ad(!0);function Se(t,n){return t&&ya(t,n,It)}function _a(t,n){return t&&Fc(t,n,It)}function Ls(t,n){return Ke(n,function(o){return ke(t[o])})}function Sn(t,n){n=rn(n,t);for(var o=0,l=n.length;t!=null&&o<l;)t=t[Oe(n[o++])];return o&&o==l?t:i}function Pc(t,n,o){var l=n(t);return Z(t)?l:Xe(l,o(t))}function Ht(t){return t==null?t===i?Kp:Yp:xn&&xn in ft(t)?r0(t):g0(t)}function wa(t,n){return t>n}function Ev(t,n){return t!=null&&ct.call(t,n)}function bv(t,n){return t!=null&&n in ft(t)}function Tv(t,n,o){return t>=Pt(n,o)&&t<Ot(n,o)}function xa(t,n,o){for(var l=o?ra:fs,d=t[0].length,h=t.length,g=h,y=E(h),x=1/0,A=[];g--;){var O=t[g];g&&n&&(O=yt(O,Kt(n))),x=Pt(O.length,x),y[g]=!o&&(n||d>=120&&O.length>=120)?new bn(g&&O):i}O=t[0];var $=-1,R=y[0];t:for(;++$<d&&A.length<x;){var P=O[$],z=n?n(P):P;if(P=o||P!==0?P:0,!(R?ri(R,z):l(A,z,o))){for(g=h;--g;){var J=y[g];if(!(J?ri(J,z):l(t[g],z,o)))continue t}R&&R.push(z),A.push(P)}}return A}function Sv(t,n,o,l){return Se(t,function(d,h,g){n(l,o(d),h,g)}),l}function di(t,n,o){n=rn(n,t),t=Td(t,n);var l=t==null?t:t[Oe(le(n))];return l==null?i:Jt(l,t,o)}function kc(t){return bt(t)&&Ht(t)==fr}function Av(t){return bt(t)&&Ht(t)==ni}function Ov(t){return bt(t)&&Ht(t)==Xr}function fi(t,n,o,l,d){return t===n?!0:t==null||n==null||!bt(t)&&!bt(n)?t!==t&&n!==n:Cv(t,n,o,l,fi,d)}function Cv(t,n,o,l,d,h){var g=Z(t),y=Z(n),x=g?ss:kt(t),A=y?ss:kt(n);x=x==fr?Le:x,A=A==fr?Le:A;var O=x==Le,$=A==Le,R=x==A;if(R&&on(t)){if(!on(n))return!1;g=!0,O=!1}if(R&&!O)return h||(h=new ve),g||Sr(t)?vd(t,n,o,l,d,h):e0(t,n,x,o,l,d,h);if(!(o&N)){var P=O&&ct.call(t,"__wrapped__"),z=$&&ct.call(n,"__wrapped__");if(P||z){var J=P?t.value():t,W=z?n.value():n;return h||(h=new ve),d(J,W,o,l,h)}}return R?(h||(h=new ve),n0(t,n,o,l,d,h)):!1}function $v(t){return bt(t)&&kt(t)==pe}function Ea(t,n,o,l){var d=o.length,h=d,g=!l;if(t==null)return!h;for(t=ft(t);d--;){var y=o[d];if(g&&y[2]?y[1]!==t[y[0]]:!(y[0]in t))return!1}for(;++d<h;){y=o[d];var x=y[0],A=t[x],O=y[1];if(g&&y[2]){if(A===i&&!(x in t))return!1}else{var $=new ve;if(l)var R=l(A,O,x,t,n,$);if(!(R===i?fi(O,A,N|I,l,$):R))return!1}}return!0}function Hc(t){if(!_t(t)||d0(t))return!1;var n=ke(t)?$g:_m;return n.test(On(t))}function Iv(t){return bt(t)&&Ht(t)==Qr}function Lv(t){return bt(t)&&kt(t)==me}function Mv(t){return bt(t)&&Ys(t.length)&&!!mt[Ht(t)]}function Uc(t){return typeof t=="function"?t:t==null?Vt:typeof t=="object"?Z(t)?Bc(t[0],t[1]):Wc(t):uf(t)}function ba(t){if(!mi(t))return Dg(t);var n=[];for(var o in ft(t))ct.call(t,o)&&o!="constructor"&&n.push(o);return n}function Nv(t){if(!_t(t))return m0(t);var n=mi(t),o=[];for(var l in t)l=="constructor"&&(n||!ct.call(t,l))||o.push(l);return o}function Ta(t,n){return t<n}function zc(t,n){var o=-1,l=Bt(t)?E(t.length):[];return en(t,function(d,h,g){l[++o]=n(d,h,g)}),l}function Wc(t){var n=Ha(t);return n.length==1&&n[0][2]?Ed(n[0][0],n[0][1]):function(o){return o===t||Ea(o,t,n)}}function Bc(t,n){return za(t)&&xd(n)?Ed(Oe(t),n):function(o){var l=Xa(o,t);return l===i&&l===n?ja(o,t):fi(n,l,N|I)}}function Ms(t,n,o,l,d){t!==n&&ya(n,function(h,g){if(d||(d=new ve),_t(h))Rv(t,n,g,o,Ms,l,d);else{var y=l?l(Ba(t,g),h,g+"",t,n,d):i;y===i&&(y=h),ga(t,g,y)}},Gt)}function Rv(t,n,o,l,d,h,g){var y=Ba(t,o),x=Ba(n,o),A=g.get(x);if(A){ga(t,o,A);return}var O=h?h(y,x,o+"",t,n,g):i,$=O===i;if($){var R=Z(x),P=!R&&on(x),z=!R&&!P&&Sr(x);O=x,R||P||z?Z(y)?O=y:Tt(y)?O=Wt(y):P?($=!1,O=ed(x,!0)):z?($=!1,O=nd(x,!0)):O=[]:vi(x)||Cn(x)?(O=y,Cn(y)?O=jd(y):(!_t(y)||ke(y))&&(O=wd(x))):$=!1}$&&(g.set(x,O),d(O,x,l,h,g),g.delete(x)),ga(t,o,O)}function Gc(t,n){var o=t.length;if(!!o)return n+=n<0?o:0,Pe(n,o)?t[n]:i}function Vc(t,n,o){n.length?n=yt(n,function(h){return Z(h)?function(g){return Sn(g,h.length===1?h[0]:h)}:h}):n=[Vt];var l=-1;n=yt(n,Kt(U()));var d=zc(t,function(h,g,y){var x=yt(n,function(A){return A(h)});return{criteria:x,index:++l,value:h}});return ag(d,function(h,g){return qv(h,g,o)})}function Dv(t,n){return Zc(t,n,function(o,l){return ja(t,l)})}function Zc(t,n,o){for(var l=-1,d=n.length,h={};++l<d;){var g=n[l],y=Sn(t,g);o(y,g)&&hi(h,rn(g,t),y)}return h}function Fv(t){return function(n){return Sn(n,t)}}function Sa(t,n,o,l){var d=l?og:mr,h=-1,g=n.length,y=t;for(t===n&&(n=Wt(n)),o&&(y=yt(t,Kt(o)));++h<g;)for(var x=0,A=n[h],O=o?o(A):A;(x=d(y,O,x,l))>-1;)y!==t&&Es.call(y,x,1),Es.call(t,x,1);return t}function qc(t,n){for(var o=t?n.length:0,l=o-1;o--;){var d=n[o];if(o==l||d!==h){var h=d;Pe(d)?Es.call(t,d,1):$a(t,d)}}return t}function Aa(t,n){return t+Ss(Oc()*(n-t+1))}function Pv(t,n,o,l){for(var d=-1,h=Ot(Ts((n-t)/(o||1)),0),g=E(h);h--;)g[l?h:++d]=t,t+=o;return g}function Oa(t,n){var o="";if(!t||n<1||n>Je)return o;do n%2&&(o+=t),n=Ss(n/2),n&&(t+=t);while(n);return o}function X(t,n){return Ga(bd(t,n,Vt),t+"")}function kv(t){return Ic(Ar(t))}function Hv(t,n){var o=Ar(t);return Ws(o,Tn(n,0,o.length))}function hi(t,n,o,l){if(!_t(t))return t;n=rn(n,t);for(var d=-1,h=n.length,g=h-1,y=t;y!=null&&++d<h;){var x=Oe(n[d]),A=o;if(x==="__proto__"||x==="constructor"||x==="prototype")return t;if(d!=g){var O=y[x];A=l?l(O,x,y):i,A===i&&(A=_t(O)?O:Pe(n[d+1])?[]:{})}ui(y,x,A),y=y[x]}return t}var Yc=As?function(t,n){return As.set(t,n),t}:Vt,Uv=bs?function(t,n){return bs(t,"toString",{configurable:!0,enumerable:!1,value:tl(n),writable:!0})}:Vt;function zv(t){return Ws(Ar(t))}function ae(t,n,o){var l=-1,d=t.length;n<0&&(n=-n>d?0:d+n),o=o>d?d:o,o<0&&(o+=d),d=n>o?0:o-n>>>0,n>>>=0;for(var h=E(d);++l<d;)h[l]=t[l+n];return h}function Wv(t,n){var o;return en(t,function(l,d,h){return o=n(l,d,h),!o}),!!o}function Ns(t,n,o){var l=0,d=t==null?l:t.length;if(typeof n=="number"&&n===n&&d<=Gp){for(;l<d;){var h=l+d>>>1,g=t[h];g!==null&&!jt(g)&&(o?g<=n:g<n)?l=h+1:d=h}return d}return Ca(t,n,Vt,o)}function Ca(t,n,o,l){var d=0,h=t==null?0:t.length;if(h===0)return 0;n=o(n);for(var g=n!==n,y=n===null,x=jt(n),A=n===i;d<h;){var O=Ss((d+h)/2),$=o(t[O]),R=$!==i,P=$===null,z=$===$,J=jt($);if(g)var W=l||z;else A?W=z&&(l||R):y?W=z&&R&&(l||!P):x?W=z&&R&&!P&&(l||!J):P||J?W=!1:W=l?$<=n:$<n;W?d=O+1:h=O}return Pt(h,Bp)}function Jc(t,n){for(var o=-1,l=t.length,d=0,h=[];++o<l;){var g=t[o],y=n?n(g):g;if(!o||!ye(y,x)){var x=y;h[d++]=g===0?0:g}}return h}function Kc(t){return typeof t=="number"?t:jt(t)?is:+t}function Xt(t){if(typeof t=="string")return t;if(Z(t))return yt(t,Xt)+"";if(jt(t))return Cc?Cc.call(t):"";var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function nn(t,n,o){var l=-1,d=fs,h=t.length,g=!0,y=[],x=y;if(o)g=!1,d=ra;else if(h>=r){var A=n?null:Qv(t);if(A)return ps(A);g=!1,d=ri,x=new bn}else x=n?[]:y;t:for(;++l<h;){var O=t[l],$=n?n(O):O;if(O=o||O!==0?O:0,g&&$===$){for(var R=x.length;R--;)if(x[R]===$)continue t;n&&x.push($),y.push(O)}else d(x,$,o)||(x!==y&&x.push($),y.push(O))}return y}function $a(t,n){return n=rn(n,t),t=Td(t,n),t==null||delete t[Oe(le(n))]}function Xc(t,n,o,l){return hi(t,n,o(Sn(t,n)),l)}function Rs(t,n,o,l){for(var d=t.length,h=l?d:-1;(l?h--:++h<d)&&n(t[h],h,t););return o?ae(t,l?0:h,l?h+1:d):ae(t,l?h+1:0,l?d:h)}function jc(t,n){var o=t;return o instanceof nt&&(o=o.value()),ia(n,function(l,d){return d.func.apply(d.thisArg,Xe([l],d.args))},o)}function Ia(t,n,o){var l=t.length;if(l<2)return l?nn(t[0]):[];for(var d=-1,h=E(l);++d<l;)for(var g=t[d],y=-1;++y<l;)y!=d&&(h[d]=ci(h[d]||g,t[y],n,o));return nn(Ft(h,1),n,o)}function Qc(t,n,o){for(var l=-1,d=t.length,h=n.length,g={};++l<d;){var y=l<h?n[l]:i;o(g,t[l],y)}return g}function La(t){return Tt(t)?t:[]}function Ma(t){return typeof t=="function"?t:Vt}function rn(t,n){return Z(t)?t:za(t,n)?[t]:Cd(at(t))}var Bv=X;function sn(t,n,o){var l=t.length;return o=o===i?l:o,!n&&o>=l?t:ae(t,n,o)}var td=Ig||function(t){return $t.clearTimeout(t)};function ed(t,n){if(n)return t.slice();var o=t.length,l=Ec?Ec(o):new t.constructor(o);return t.copy(l),l}function Na(t){var n=new t.constructor(t.byteLength);return new ws(n).set(new ws(t)),n}function Gv(t,n){var o=n?Na(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)}function Vv(t){var n=new t.constructor(t.source,ku.exec(t));return n.lastIndex=t.lastIndex,n}function Zv(t){return li?ft(li.call(t)):{}}function nd(t,n){var o=n?Na(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)}function rd(t,n){if(t!==n){var o=t!==i,l=t===null,d=t===t,h=jt(t),g=n!==i,y=n===null,x=n===n,A=jt(n);if(!y&&!A&&!h&&t>n||h&&g&&x&&!y&&!A||l&&g&&x||!o&&x||!d)return 1;if(!l&&!h&&!A&&t<n||A&&o&&d&&!l&&!h||y&&o&&d||!g&&d||!x)return-1}return 0}function qv(t,n,o){for(var l=-1,d=t.criteria,h=n.criteria,g=d.length,y=o.length;++l<g;){var x=rd(d[l],h[l]);if(x){if(l>=y)return x;var A=o[l];return x*(A=="desc"?-1:1)}}return t.index-n.index}function id(t,n,o,l){for(var d=-1,h=t.length,g=o.length,y=-1,x=n.length,A=Ot(h-g,0),O=E(x+A),$=!l;++y<x;)O[y]=n[y];for(;++d<g;)($||d<h)&&(O[o[d]]=t[d]);for(;A--;)O[y++]=t[d++];return O}function sd(t,n,o,l){for(var d=-1,h=t.length,g=-1,y=o.length,x=-1,A=n.length,O=Ot(h-y,0),$=E(O+A),R=!l;++d<O;)$[d]=t[d];for(var P=d;++x<A;)$[P+x]=n[x];for(;++g<y;)(R||d<h)&&($[P+o[g]]=t[d++]);return $}function Wt(t,n){var o=-1,l=t.length;for(n||(n=E(l));++o<l;)n[o]=t[o];return n}function Ae(t,n,o,l){var d=!o;o||(o={});for(var h=-1,g=n.length;++h<g;){var y=n[h],x=l?l(o[y],t[y],y,o,t):i;x===i&&(x=t[y]),d?Re(o,y,x):ui(o,y,x)}return o}function Yv(t,n){return Ae(t,Ua(t),n)}function Jv(t,n){return Ae(t,yd(t),n)}function Ds(t,n){return function(o,l){var d=Z(o)?tg:vv,h=n?n():{};return d(o,t,U(l,2),h)}}function Er(t){return X(function(n,o){var l=-1,d=o.length,h=d>1?o[d-1]:i,g=d>2?o[2]:i;for(h=t.length>3&&typeof h=="function"?(d--,h):i,g&&Ut(o[0],o[1],g)&&(h=d<3?i:h,d=1),n=ft(n);++l<d;){var y=o[l];y&&t(n,y,l,h)}return n})}function od(t,n){return function(o,l){if(o==null)return o;if(!Bt(o))return t(o,l);for(var d=o.length,h=n?d:-1,g=ft(o);(n?h--:++h<d)&&l(g[h],h,g)!==!1;);return o}}function ad(t){return function(n,o,l){for(var d=-1,h=ft(n),g=l(n),y=g.length;y--;){var x=g[t?y:++d];if(o(h[x],x,h)===!1)break}return n}}function Kv(t,n,o){var l=n&L,d=pi(t);function h(){var g=this&&this!==$t&&this instanceof h?d:t;return g.apply(l?o:this,arguments)}return h}function ld(t){return function(n){n=at(n);var o=gr(n)?ge(n):i,l=o?o[0]:n.charAt(0),d=o?sn(o,1).join(""):n.slice(1);return l[t]()+d}}function br(t){return function(n){return ia(af(of(n).replace(Um,"")),t,"")}}function pi(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var o=xr(t.prototype),l=t.apply(o,n);return _t(l)?l:o}}function Xv(t,n,o){var l=pi(t);function d(){for(var h=arguments.length,g=E(h),y=h,x=Tr(d);y--;)g[y]=arguments[y];var A=h<3&&g[0]!==x&&g[h-1]!==x?[]:je(g,x);if(h-=A.length,h<o)return hd(t,n,Fs,d.placeholder,i,g,A,i,i,o-h);var O=this&&this!==$t&&this instanceof d?l:t;return Jt(O,this,g)}return d}function ud(t){return function(n,o,l){var d=ft(n);if(!Bt(n)){var h=U(o,3);n=It(n),o=function(y){return h(d[y],y,d)}}var g=t(n,o,l);return g>-1?d[h?n[g]:g]:i}}function cd(t){return Fe(function(n){var o=n.length,l=o,d=se.prototype.thru;for(t&&n.reverse();l--;){var h=n[l];if(typeof h!="function")throw new ie(a);if(d&&!g&&Us(h)=="wrapper")var g=new se([],!0)}for(l=g?l:o;++l<o;){h=n[l];var y=Us(h),x=y=="wrapper"?ka(h):i;x&&Wa(x[0])&&x[1]==(he|vt|Yt|gn)&&!x[4].length&&x[9]==1?g=g[Us(x[0])].apply(g,x[3]):g=h.length==1&&Wa(h)?g[y]():g.thru(h)}return function(){var A=arguments,O=A[0];if(g&&A.length==1&&Z(O))return g.plant(O).value();for(var $=0,R=o?n[$].apply(this,A):O;++$<o;)R=n[$].call(this,R);return R}})}function Fs(t,n,o,l,d,h,g,y,x,A){var O=n&he,$=n&L,R=n&gt,P=n&(vt|qt),z=n&vn,J=R?i:pi(t);function W(){for(var tt=arguments.length,rt=E(tt),Qt=tt;Qt--;)rt[Qt]=arguments[Qt];if(P)var zt=Tr(W),te=ug(rt,zt);if(l&&(rt=id(rt,l,d,P)),h&&(rt=sd(rt,h,g,P)),tt-=te,P&&tt<A){var St=je(rt,zt);return hd(t,n,Fs,W.placeholder,o,rt,St,y,x,A-tt)}var _e=$?o:this,Ue=R?_e[t]:t;return tt=rt.length,y?rt=v0(rt,y):z&&tt>1&&rt.reverse(),O&&x<tt&&(rt.length=x),this&&this!==$t&&this instanceof W&&(Ue=J||pi(Ue)),Ue.apply(_e,rt)}return W}function dd(t,n){return function(o,l){return Sv(o,t,n(l),{})}}function Ps(t,n){return function(o,l){var d;if(o===i&&l===i)return n;if(o!==i&&(d=o),l!==i){if(d===i)return l;typeof o=="string"||typeof l=="string"?(o=Xt(o),l=Xt(l)):(o=Kc(o),l=Kc(l)),d=t(o,l)}return d}}function Ra(t){return Fe(function(n){return n=yt(n,Kt(U())),X(function(o){var l=this;return t(n,function(d){return Jt(d,l,o)})})})}function ks(t,n){n=n===i?" ":Xt(n);var o=n.length;if(o<2)return o?Oa(n,t):n;var l=Oa(n,Ts(t/vr(n)));return gr(n)?sn(ge(l),0,t).join(""):l.slice(0,t)}function jv(t,n,o,l){var d=n&L,h=pi(t);function g(){for(var y=-1,x=arguments.length,A=-1,O=l.length,$=E(O+x),R=this&&this!==$t&&this instanceof g?h:t;++A<O;)$[A]=l[A];for(;x--;)$[A++]=arguments[++y];return Jt(R,d?o:this,$)}return g}function fd(t){return function(n,o,l){return l&&typeof l!="number"&&Ut(n,o,l)&&(o=l=i),n=He(n),o===i?(o=n,n=0):o=He(o),l=l===i?n<o?1:-1:He(l),Pv(n,o,l,t)}}function Hs(t){return function(n,o){return typeof n=="string"&&typeof o=="string"||(n=ue(n),o=ue(o)),t(n,o)}}function hd(t,n,o,l,d,h,g,y,x,A){var O=n&vt,$=O?g:i,R=O?i:g,P=O?h:i,z=O?i:h;n|=O?Yt:Ye,n&=~(O?Ye:Yt),n&ut||(n&=~(L|gt));var J=[t,n,d,P,$,z,R,y,x,A],W=o.apply(i,J);return Wa(t)&&Sd(W,J),W.placeholder=l,Ad(W,t,n)}function Da(t){var n=At[t];return function(o,l){if(o=ue(o),l=l==null?0:Pt(q(l),292),l&&Ac(o)){var d=(at(o)+"e").split("e"),h=n(d[0]+"e"+(+d[1]+l));return d=(at(h)+"e").split("e"),+(d[0]+"e"+(+d[1]-l))}return n(o)}}var Qv=_r&&1/ps(new _r([,-0]))[1]==_n?function(t){return new _r(t)}:rl;function pd(t){return function(n){var o=kt(n);return o==pe?da(n):o==me?gg(n):lg(n,t(n))}}function De(t,n,o,l,d,h,g,y){var x=n&gt;if(!x&&typeof t!="function")throw new ie(a);var A=l?l.length:0;if(A||(n&=~(Yt|Ye),l=d=i),g=g===i?g:Ot(q(g),0),y=y===i?y:q(y),A-=d?d.length:0,n&Ye){var O=l,$=d;l=d=i}var R=x?i:ka(t),P=[t,n,o,l,d,O,$,h,g,y];if(R&&p0(P,R),t=P[0],n=P[1],o=P[2],l=P[3],d=P[4],y=P[9]=P[9]===i?x?0:t.length:Ot(P[9]-A,0),!y&&n&(vt|qt)&&(n&=~(vt|qt)),!n||n==L)var z=Kv(t,n,o);else n==vt||n==qt?z=Xv(t,n,y):(n==Yt||n==(L|Yt))&&!d.length?z=jv(t,n,o,l):z=Fs.apply(i,P);var J=R?Yc:Sd;return Ad(J(z,P),t,n)}function md(t,n,o,l){return t===i||ye(t,yr[o])&&!ct.call(l,o)?n:t}function gd(t,n,o,l,d,h){return _t(t)&&_t(n)&&(h.set(n,t),Ms(t,n,i,gd,h),h.delete(n)),t}function t0(t){return vi(t)?i:t}function vd(t,n,o,l,d,h){var g=o&N,y=t.length,x=n.length;if(y!=x&&!(g&&x>y))return!1;var A=h.get(t),O=h.get(n);if(A&&O)return A==n&&O==t;var $=-1,R=!0,P=o&I?new bn:i;for(h.set(t,n),h.set(n,t);++$<y;){var z=t[$],J=n[$];if(l)var W=g?l(J,z,$,n,t,h):l(z,J,$,t,n,h);if(W!==i){if(W)continue;R=!1;break}if(P){if(!sa(n,function(tt,rt){if(!ri(P,rt)&&(z===tt||d(z,tt,o,l,h)))return P.push(rt)})){R=!1;break}}else if(!(z===J||d(z,J,o,l,h))){R=!1;break}}return h.delete(t),h.delete(n),R}function e0(t,n,o,l,d,h,g){switch(o){case hr:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case ni:return!(t.byteLength!=n.byteLength||!h(new ws(t),new ws(n)));case Kr:case Xr:case jr:return ye(+t,+n);case os:return t.name==n.name&&t.message==n.message;case Qr:case ti:return t==n+"";case pe:var y=da;case me:var x=l&N;if(y||(y=ps),t.size!=n.size&&!x)return!1;var A=g.get(t);if(A)return A==n;l|=I,g.set(t,n);var O=vd(y(t),y(n),l,d,h,g);return g.delete(t),O;case ls:if(li)return li.call(t)==li.call(n)}return!1}function n0(t,n,o,l,d,h){var g=o&N,y=Fa(t),x=y.length,A=Fa(n),O=A.length;if(x!=O&&!g)return!1;for(var $=x;$--;){var R=y[$];if(!(g?R in n:ct.call(n,R)))return!1}var P=h.get(t),z=h.get(n);if(P&&z)return P==n&&z==t;var J=!0;h.set(t,n),h.set(n,t);for(var W=g;++$<x;){R=y[$];var tt=t[R],rt=n[R];if(l)var Qt=g?l(rt,tt,R,n,t,h):l(tt,rt,R,t,n,h);if(!(Qt===i?tt===rt||d(tt,rt,o,l,h):Qt)){J=!1;break}W||(W=R=="constructor")}if(J&&!W){var zt=t.constructor,te=n.constructor;zt!=te&&"constructor"in t&&"constructor"in n&&!(typeof zt=="function"&&zt instanceof zt&&typeof te=="function"&&te instanceof te)&&(J=!1)}return h.delete(t),h.delete(n),J}function Fe(t){return Ga(bd(t,i,Md),t+"")}function Fa(t){return Pc(t,It,Ua)}function Pa(t){return Pc(t,Gt,yd)}var ka=As?function(t){return As.get(t)}:rl;function Us(t){for(var n=t.name+"",o=wr[n],l=ct.call(wr,n)?o.length:0;l--;){var d=o[l],h=d.func;if(h==null||h==t)return d.name}return n}function Tr(t){var n=ct.call(f,"placeholder")?f:t;return n.placeholder}function U(){var t=f.iteratee||el;return t=t===el?Uc:t,arguments.length?t(arguments[0],arguments[1]):t}function zs(t,n){var o=t.__data__;return c0(n)?o[typeof n=="string"?"string":"hash"]:o.map}function Ha(t){for(var n=It(t),o=n.length;o--;){var l=n[o],d=t[l];n[o]=[l,d,xd(d)]}return n}function An(t,n){var o=hg(t,n);return Hc(o)?o:i}function r0(t){var n=ct.call(t,xn),o=t[xn];try{t[xn]=i;var l=!0}catch(h){}var d=ys.call(t);return l&&(n?t[xn]=o:delete t[xn]),d}var Ua=ha?function(t){return t==null?[]:(t=ft(t),Ke(ha(t),function(n){return Tc.call(t,n)}))}:il,yd=ha?function(t){for(var n=[];t;)Xe(n,Ua(t)),t=xs(t);return n}:il,kt=Ht;(pa&&kt(new pa(new ArrayBuffer(1)))!=hr||si&&kt(new si)!=pe||ma&&kt(ma.resolve())!=Ru||_r&&kt(new _r)!=me||oi&&kt(new oi)!=ei)&&(kt=function(t){var n=Ht(t),o=n==Le?t.constructor:i,l=o?On(o):"";if(l)switch(l){case Hg:return hr;case Ug:return pe;case zg:return Ru;case Wg:return me;case Bg:return ei}return n});function i0(t,n,o){for(var l=-1,d=o.length;++l<d;){var h=o[l],g=h.size;switch(h.type){case"drop":t+=g;break;case"dropRight":n-=g;break;case"take":n=Pt(n,t+g);break;case"takeRight":t=Ot(t,n-g);break}}return{start:t,end:n}}function s0(t){var n=t.match(dm);return n?n[1].split(fm):[]}function _d(t,n,o){n=rn(n,t);for(var l=-1,d=n.length,h=!1;++l<d;){var g=Oe(n[l]);if(!(h=t!=null&&o(t,g)))break;t=t[g]}return h||++l!=d?h:(d=t==null?0:t.length,!!d&&Ys(d)&&Pe(g,d)&&(Z(t)||Cn(t)))}function o0(t){var n=t.length,o=new t.constructor(n);return n&&typeof t[0]=="string"&&ct.call(t,"index")&&(o.index=t.index,o.input=t.input),o}function wd(t){return typeof t.constructor=="function"&&!mi(t)?xr(xs(t)):{}}function a0(t,n,o){var l=t.constructor;switch(n){case ni:return Na(t);case Kr:case Xr:return new l(+t);case hr:return Gv(t,o);case Ho:case Uo:case zo:case Wo:case Bo:case Go:case Vo:case Zo:case qo:return nd(t,o);case pe:return new l;case jr:case ti:return new l(t);case Qr:return Vv(t);case me:return new l;case ls:return Zv(t)}}function l0(t,n){var o=n.length;if(!o)return t;var l=o-1;return n[l]=(o>1?"& ":"")+n[l],n=n.join(o>2?", ":" "),t.replace(cm,`{
/* [wrapped with `+n+`] */
`)}function u0(t){return Z(t)||Cn(t)||!!(Sc&&t&&t[Sc])}function Pe(t,n){var o=typeof t;return n=n==null?Je:n,!!n&&(o=="number"||o!="symbol"&&xm.test(t))&&t>-1&&t%1==0&&t<n}function Ut(t,n,o){if(!_t(o))return!1;var l=typeof n;return(l=="number"?Bt(o)&&Pe(n,o.length):l=="string"&&n in o)?ye(o[n],t):!1}function za(t,n){if(Z(t))return!1;var o=typeof t;return o=="number"||o=="symbol"||o=="boolean"||t==null||jt(t)?!0:om.test(t)||!sm.test(t)||n!=null&&t in ft(n)}function c0(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}function Wa(t){var n=Us(t),o=f[n];if(typeof o!="function"||!(n in nt.prototype))return!1;if(t===o)return!0;var l=ka(o);return!!l&&t===l[0]}function d0(t){return!!xc&&xc in t}var f0=gs?ke:sl;function mi(t){var n=t&&t.constructor,o=typeof n=="function"&&n.prototype||yr;return t===o}function xd(t){return t===t&&!_t(t)}function Ed(t,n){return function(o){return o==null?!1:o[t]===n&&(n!==i||t in ft(o))}}function h0(t){var n=Zs(t,function(l){return o.size===p&&o.clear(),l}),o=n.cache;return n}function p0(t,n){var o=t[1],l=n[1],d=o|l,h=d<(L|gt|he),g=l==he&&o==vt||l==he&&o==gn&&t[7].length<=n[8]||l==(he|gn)&&n[7].length<=n[8]&&o==vt;if(!(h||g))return t;l&L&&(t[2]=n[2],d|=o&L?0:ut);var y=n[3];if(y){var x=t[3];t[3]=x?id(x,y,n[4]):y,t[4]=x?je(t[3],m):n[4]}return y=n[5],y&&(x=t[5],t[5]=x?sd(x,y,n[6]):y,t[6]=x?je(t[5],m):n[6]),y=n[7],y&&(t[7]=y),l&he&&(t[8]=t[8]==null?n[8]:Pt(t[8],n[8])),t[9]==null&&(t[9]=n[9]),t[0]=n[0],t[1]=d,t}function m0(t){var n=[];if(t!=null)for(var o in ft(t))n.push(o);return n}function g0(t){return ys.call(t)}function bd(t,n,o){return n=Ot(n===i?t.length-1:n,0),function(){for(var l=arguments,d=-1,h=Ot(l.length-n,0),g=E(h);++d<h;)g[d]=l[n+d];d=-1;for(var y=E(n+1);++d<n;)y[d]=l[d];return y[n]=o(g),Jt(t,this,y)}}function Td(t,n){return n.length<2?t:Sn(t,ae(n,0,-1))}function v0(t,n){for(var o=t.length,l=Pt(n.length,o),d=Wt(t);l--;){var h=n[l];t[l]=Pe(h,o)?d[h]:i}return t}function Ba(t,n){if(!(n==="constructor"&&typeof t[n]=="function")&&n!="__proto__")return t[n]}var Sd=Od(Yc),gi=Mg||function(t,n){return $t.setTimeout(t,n)},Ga=Od(Uv);function Ad(t,n,o){var l=n+"";return Ga(t,l0(l,y0(s0(l),o)))}function Od(t){var n=0,o=0;return function(){var l=Fg(),d=Hp-(l-o);if(o=l,d>0){if(++n>=kp)return arguments[0]}else n=0;return t.apply(i,arguments)}}function Ws(t,n){var o=-1,l=t.length,d=l-1;for(n=n===i?l:n;++o<n;){var h=Aa(o,d),g=t[h];t[h]=t[o],t[o]=g}return t.length=n,t}var Cd=h0(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(am,function(o,l,d,h){n.push(d?h.replace(mm,"$1"):l||o)}),n});function Oe(t){if(typeof t=="string"||jt(t))return t;var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function On(t){if(t!=null){try{return vs.call(t)}catch(n){}try{return t+""}catch(n){}}return""}function y0(t,n){return re(Vp,function(o){var l="_."+o[0];n&o[1]&&!fs(t,l)&&t.push(l)}),t.sort()}function $d(t){if(t instanceof nt)return t.clone();var n=new se(t.__wrapped__,t.__chain__);return n.__actions__=Wt(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}function _0(t,n,o){(o?Ut(t,n,o):n===i)?n=1:n=Ot(q(n),0);var l=t==null?0:t.length;if(!l||n<1)return[];for(var d=0,h=0,g=E(Ts(l/n));d<l;)g[h++]=ae(t,d,d+=n);return g}function w0(t){for(var n=-1,o=t==null?0:t.length,l=0,d=[];++n<o;){var h=t[n];h&&(d[l++]=h)}return d}function x0(){var t=arguments.length;if(!t)return[];for(var n=E(t-1),o=arguments[0],l=t;l--;)n[l-1]=arguments[l];return Xe(Z(o)?Wt(o):[o],Ft(n,1))}var E0=X(function(t,n){return Tt(t)?ci(t,Ft(n,1,Tt,!0)):[]}),b0=X(function(t,n){var o=le(n);return Tt(o)&&(o=i),Tt(t)?ci(t,Ft(n,1,Tt,!0),U(o,2)):[]}),T0=X(function(t,n){var o=le(n);return Tt(o)&&(o=i),Tt(t)?ci(t,Ft(n,1,Tt,!0),i,o):[]});function S0(t,n,o){var l=t==null?0:t.length;return l?(n=o||n===i?1:q(n),ae(t,n<0?0:n,l)):[]}function A0(t,n,o){var l=t==null?0:t.length;return l?(n=o||n===i?1:q(n),n=l-n,ae(t,0,n<0?0:n)):[]}function O0(t,n){return t&&t.length?Rs(t,U(n,3),!0,!0):[]}function C0(t,n){return t&&t.length?Rs(t,U(n,3),!0):[]}function $0(t,n,o,l){var d=t==null?0:t.length;return d?(o&&typeof o!="number"&&Ut(t,n,o)&&(o=0,l=d),xv(t,n,o,l)):[]}function Id(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=o==null?0:q(o);return d<0&&(d=Ot(l+d,0)),hs(t,U(n,3),d)}function Ld(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=l-1;return o!==i&&(d=q(o),d=o<0?Ot(l+d,0):Pt(d,l-1)),hs(t,U(n,3),d,!0)}function Md(t){var n=t==null?0:t.length;return n?Ft(t,1):[]}function I0(t){var n=t==null?0:t.length;return n?Ft(t,_n):[]}function L0(t,n){var o=t==null?0:t.length;return o?(n=n===i?1:q(n),Ft(t,n)):[]}function M0(t){for(var n=-1,o=t==null?0:t.length,l={};++n<o;){var d=t[n];l[d[0]]=d[1]}return l}function Nd(t){return t&&t.length?t[0]:i}function N0(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=o==null?0:q(o);return d<0&&(d=Ot(l+d,0)),mr(t,n,d)}function R0(t){var n=t==null?0:t.length;return n?ae(t,0,-1):[]}var D0=X(function(t){var n=yt(t,La);return n.length&&n[0]===t[0]?xa(n):[]}),F0=X(function(t){var n=le(t),o=yt(t,La);return n===le(o)?n=i:o.pop(),o.length&&o[0]===t[0]?xa(o,U(n,2)):[]}),P0=X(function(t){var n=le(t),o=yt(t,La);return n=typeof n=="function"?n:i,n&&o.pop(),o.length&&o[0]===t[0]?xa(o,i,n):[]});function k0(t,n){return t==null?"":Rg.call(t,n)}function le(t){var n=t==null?0:t.length;return n?t[n-1]:i}function H0(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=l;return o!==i&&(d=q(o),d=d<0?Ot(l+d,0):Pt(d,l-1)),n===n?yg(t,n,d):hs(t,hc,d,!0)}function U0(t,n){return t&&t.length?Gc(t,q(n)):i}var z0=X(Rd);function Rd(t,n){return t&&t.length&&n&&n.length?Sa(t,n):t}function W0(t,n,o){return t&&t.length&&n&&n.length?Sa(t,n,U(o,2)):t}function B0(t,n,o){return t&&t.length&&n&&n.length?Sa(t,n,i,o):t}var G0=Fe(function(t,n){var o=t==null?0:t.length,l=va(t,n);return qc(t,yt(n,function(d){return Pe(d,o)?+d:d}).sort(rd)),l});function V0(t,n){var o=[];if(!(t&&t.length))return o;var l=-1,d=[],h=t.length;for(n=U(n,3);++l<h;){var g=t[l];n(g,l,t)&&(o.push(g),d.push(l))}return qc(t,d),o}function Va(t){return t==null?t:kg.call(t)}function Z0(t,n,o){var l=t==null?0:t.length;return l?(o&&typeof o!="number"&&Ut(t,n,o)?(n=0,o=l):(n=n==null?0:q(n),o=o===i?l:q(o)),ae(t,n,o)):[]}function q0(t,n){return Ns(t,n)}function Y0(t,n,o){return Ca(t,n,U(o,2))}function J0(t,n){var o=t==null?0:t.length;if(o){var l=Ns(t,n);if(l<o&&ye(t[l],n))return l}return-1}function K0(t,n){return Ns(t,n,!0)}function X0(t,n,o){return Ca(t,n,U(o,2),!0)}function j0(t,n){var o=t==null?0:t.length;if(o){var l=Ns(t,n,!0)-1;if(ye(t[l],n))return l}return-1}function Q0(t){return t&&t.length?Jc(t):[]}function ty(t,n){return t&&t.length?Jc(t,U(n,2)):[]}function ey(t){var n=t==null?0:t.length;return n?ae(t,1,n):[]}function ny(t,n,o){return t&&t.length?(n=o||n===i?1:q(n),ae(t,0,n<0?0:n)):[]}function ry(t,n,o){var l=t==null?0:t.length;return l?(n=o||n===i?1:q(n),n=l-n,ae(t,n<0?0:n,l)):[]}function iy(t,n){return t&&t.length?Rs(t,U(n,3),!1,!0):[]}function sy(t,n){return t&&t.length?Rs(t,U(n,3)):[]}var oy=X(function(t){return nn(Ft(t,1,Tt,!0))}),ay=X(function(t){var n=le(t);return Tt(n)&&(n=i),nn(Ft(t,1,Tt,!0),U(n,2))}),ly=X(function(t){var n=le(t);return n=typeof n=="function"?n:i,nn(Ft(t,1,Tt,!0),i,n)});function uy(t){return t&&t.length?nn(t):[]}function cy(t,n){return t&&t.length?nn(t,U(n,2)):[]}function dy(t,n){return n=typeof n=="function"?n:i,t&&t.length?nn(t,i,n):[]}function Za(t){if(!(t&&t.length))return[];var n=0;return t=Ke(t,function(o){if(Tt(o))return n=Ot(o.length,n),!0}),ua(n,function(o){return yt(t,oa(o))})}function Dd(t,n){if(!(t&&t.length))return[];var o=Za(t);return n==null?o:yt(o,function(l){return Jt(n,i,l)})}var fy=X(function(t,n){return Tt(t)?ci(t,n):[]}),hy=X(function(t){return Ia(Ke(t,Tt))}),py=X(function(t){var n=le(t);return Tt(n)&&(n=i),Ia(Ke(t,Tt),U(n,2))}),my=X(function(t){var n=le(t);return n=typeof n=="function"?n:i,Ia(Ke(t,Tt),i,n)}),gy=X(Za);function vy(t,n){return Qc(t||[],n||[],ui)}function yy(t,n){return Qc(t||[],n||[],hi)}var _y=X(function(t){var n=t.length,o=n>1?t[n-1]:i;return o=typeof o=="function"?(t.pop(),o):i,Dd(t,o)});function Fd(t){var n=f(t);return n.__chain__=!0,n}function wy(t,n){return n(t),t}function Bs(t,n){return n(t)}var xy=Fe(function(t){var n=t.length,o=n?t[0]:0,l=this.__wrapped__,d=function(h){return va(h,t)};return n>1||this.__actions__.length||!(l instanceof nt)||!Pe(o)?this.thru(d):(l=l.slice(o,+o+(n?1:0)),l.__actions__.push({func:Bs,args:[d],thisArg:i}),new se(l,this.__chain__).thru(function(h){return n&&!h.length&&h.push(i),h}))});function Ey(){return Fd(this)}function by(){return new se(this.value(),this.__chain__)}function Ty(){this.__values__===i&&(this.__values__=Kd(this.value()));var t=this.__index__>=this.__values__.length,n=t?i:this.__values__[this.__index__++];return{done:t,value:n}}function Sy(){return this}function Ay(t){for(var n,o=this;o instanceof Cs;){var l=$d(o);l.__index__=0,l.__values__=i,n?d.__wrapped__=l:n=l;var d=l;o=o.__wrapped__}return d.__wrapped__=t,n}function Oy(){var t=this.__wrapped__;if(t instanceof nt){var n=t;return this.__actions__.length&&(n=new nt(this)),n=n.reverse(),n.__actions__.push({func:Bs,args:[Va],thisArg:i}),new se(n,this.__chain__)}return this.thru(Va)}function Cy(){return jc(this.__wrapped__,this.__actions__)}var $y=Ds(function(t,n,o){ct.call(t,o)?++t[o]:Re(t,o,1)});function Iy(t,n,o){var l=Z(t)?dc:wv;return o&&Ut(t,n,o)&&(n=i),l(t,U(n,3))}function Ly(t,n){var o=Z(t)?Ke:Dc;return o(t,U(n,3))}var My=ud(Id),Ny=ud(Ld);function Ry(t,n){return Ft(Gs(t,n),1)}function Dy(t,n){return Ft(Gs(t,n),_n)}function Fy(t,n,o){return o=o===i?1:q(o),Ft(Gs(t,n),o)}function Pd(t,n){var o=Z(t)?re:en;return o(t,U(n,3))}function kd(t,n){var o=Z(t)?eg:Rc;return o(t,U(n,3))}var Py=Ds(function(t,n,o){ct.call(t,o)?t[o].push(n):Re(t,o,[n])});function ky(t,n,o,l){t=Bt(t)?t:Ar(t),o=o&&!l?q(o):0;var d=t.length;return o<0&&(o=Ot(d+o,0)),Js(t)?o<=d&&t.indexOf(n,o)>-1:!!d&&mr(t,n,o)>-1}var Hy=X(function(t,n,o){var l=-1,d=typeof n=="function",h=Bt(t)?E(t.length):[];return en(t,function(g){h[++l]=d?Jt(n,g,o):di(g,n,o)}),h}),Uy=Ds(function(t,n,o){Re(t,o,n)});function Gs(t,n){var o=Z(t)?yt:zc;return o(t,U(n,3))}function zy(t,n,o,l){return t==null?[]:(Z(n)||(n=n==null?[]:[n]),o=l?i:o,Z(o)||(o=o==null?[]:[o]),Vc(t,n,o))}var Wy=Ds(function(t,n,o){t[o?0:1].push(n)},function(){return[[],[]]});function By(t,n,o){var l=Z(t)?ia:mc,d=arguments.length<3;return l(t,U(n,4),o,d,en)}function Gy(t,n,o){var l=Z(t)?ng:mc,d=arguments.length<3;return l(t,U(n,4),o,d,Rc)}function Vy(t,n){var o=Z(t)?Ke:Dc;return o(t,qs(U(n,3)))}function Zy(t){var n=Z(t)?Ic:kv;return n(t)}function qy(t,n,o){(o?Ut(t,n,o):n===i)?n=1:n=q(n);var l=Z(t)?mv:Hv;return l(t,n)}function Yy(t){var n=Z(t)?gv:zv;return n(t)}function Jy(t){if(t==null)return 0;if(Bt(t))return Js(t)?vr(t):t.length;var n=kt(t);return n==pe||n==me?t.size:ba(t).length}function Ky(t,n,o){var l=Z(t)?sa:Wv;return o&&Ut(t,n,o)&&(n=i),l(t,U(n,3))}var Xy=X(function(t,n){if(t==null)return[];var o=n.length;return o>1&&Ut(t,n[0],n[1])?n=[]:o>2&&Ut(n[0],n[1],n[2])&&(n=[n[0]]),Vc(t,Ft(n,1),[])}),Vs=Lg||function(){return $t.Date.now()};function jy(t,n){if(typeof n!="function")throw new ie(a);return t=q(t),function(){if(--t<1)return n.apply(this,arguments)}}function Hd(t,n,o){return n=o?i:n,n=t&&n==null?t.length:n,De(t,he,i,i,i,i,n)}function Ud(t,n){var o;if(typeof n!="function")throw new ie(a);return t=q(t),function(){return--t>0&&(o=n.apply(this,arguments)),t<=1&&(n=i),o}}var qa=X(function(t,n,o){var l=L;if(o.length){var d=je(o,Tr(qa));l|=Yt}return De(t,l,n,o,d)}),zd=X(function(t,n,o){var l=L|gt;if(o.length){var d=je(o,Tr(zd));l|=Yt}return De(n,l,t,o,d)});function Wd(t,n,o){n=o?i:n;var l=De(t,vt,i,i,i,i,i,n);return l.placeholder=Wd.placeholder,l}function Bd(t,n,o){n=o?i:n;var l=De(t,qt,i,i,i,i,i,n);return l.placeholder=Bd.placeholder,l}function Gd(t,n,o){var l,d,h,g,y,x,A=0,O=!1,$=!1,R=!0;if(typeof t!="function")throw new ie(a);n=ue(n)||0,_t(o)&&(O=!!o.leading,$="maxWait"in o,h=$?Ot(ue(o.maxWait)||0,n):h,R="trailing"in o?!!o.trailing:R);function P(St){var _e=l,Ue=d;return l=d=i,A=St,g=t.apply(Ue,_e),g}function z(St){return A=St,y=gi(tt,n),O?P(St):g}function J(St){var _e=St-x,Ue=St-A,cf=n-_e;return $?Pt(cf,h-Ue):cf}function W(St){var _e=St-x,Ue=St-A;return x===i||_e>=n||_e<0||$&&Ue>=h}function tt(){var St=Vs();if(W(St))return rt(St);y=gi(tt,J(St))}function rt(St){return y=i,R&&l?P(St):(l=d=i,g)}function Qt(){y!==i&&td(y),A=0,l=x=d=y=i}function zt(){return y===i?g:rt(Vs())}function te(){var St=Vs(),_e=W(St);if(l=arguments,d=this,x=St,_e){if(y===i)return z(x);if($)return td(y),y=gi(tt,n),P(x)}return y===i&&(y=gi(tt,n)),g}return te.cancel=Qt,te.flush=zt,te}var Qy=X(function(t,n){return Nc(t,1,n)}),t_=X(function(t,n,o){return Nc(t,ue(n)||0,o)});function e_(t){return De(t,vn)}function Zs(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new ie(a);var o=function(){var l=arguments,d=n?n.apply(this,l):l[0],h=o.cache;if(h.has(d))return h.get(d);var g=t.apply(this,l);return o.cache=h.set(d,g)||h,g};return o.cache=new(Zs.Cache||Ne),o}Zs.Cache=Ne;function qs(t){if(typeof t!="function")throw new ie(a);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function n_(t){return Ud(2,t)}var r_=Bv(function(t,n){n=n.length==1&&Z(n[0])?yt(n[0],Kt(U())):yt(Ft(n,1),Kt(U()));var o=n.length;return X(function(l){for(var d=-1,h=Pt(l.length,o);++d<h;)l[d]=n[d].call(this,l[d]);return Jt(t,this,l)})}),Ya=X(function(t,n){var o=je(n,Tr(Ya));return De(t,Yt,i,n,o)}),Vd=X(function(t,n){var o=je(n,Tr(Vd));return De(t,Ye,i,n,o)}),i_=Fe(function(t,n){return De(t,gn,i,i,i,n)});function s_(t,n){if(typeof t!="function")throw new ie(a);return n=n===i?n:q(n),X(t,n)}function o_(t,n){if(typeof t!="function")throw new ie(a);return n=n==null?0:Ot(q(n),0),X(function(o){var l=o[n],d=sn(o,0,n);return l&&Xe(d,l),Jt(t,this,d)})}function a_(t,n,o){var l=!0,d=!0;if(typeof t!="function")throw new ie(a);return _t(o)&&(l="leading"in o?!!o.leading:l,d="trailing"in o?!!o.trailing:d),Gd(t,n,{leading:l,maxWait:n,trailing:d})}function l_(t){return Hd(t,1)}function u_(t,n){return Ya(Ma(n),t)}function c_(){if(!arguments.length)return[];var t=arguments[0];return Z(t)?t:[t]}function d_(t){return oe(t,S)}function f_(t,n){return n=typeof n=="function"?n:i,oe(t,S,n)}function h_(t){return oe(t,_|S)}function p_(t,n){return n=typeof n=="function"?n:i,oe(t,_|S,n)}function m_(t,n){return n==null||Mc(t,n,It(n))}function ye(t,n){return t===n||t!==t&&n!==n}var g_=Hs(wa),v_=Hs(function(t,n){return t>=n}),Cn=kc(function(){return arguments}())?kc:function(t){return bt(t)&&ct.call(t,"callee")&&!Tc.call(t,"callee")},Z=E.isArray,y_=sc?Kt(sc):Av;function Bt(t){return t!=null&&Ys(t.length)&&!ke(t)}function Tt(t){return bt(t)&&Bt(t)}function __(t){return t===!0||t===!1||bt(t)&&Ht(t)==Kr}var on=Ng||sl,w_=oc?Kt(oc):Ov;function x_(t){return bt(t)&&t.nodeType===1&&!vi(t)}function E_(t){if(t==null)return!0;if(Bt(t)&&(Z(t)||typeof t=="string"||typeof t.splice=="function"||on(t)||Sr(t)||Cn(t)))return!t.length;var n=kt(t);if(n==pe||n==me)return!t.size;if(mi(t))return!ba(t).length;for(var o in t)if(ct.call(t,o))return!1;return!0}function b_(t,n){return fi(t,n)}function T_(t,n,o){o=typeof o=="function"?o:i;var l=o?o(t,n):i;return l===i?fi(t,n,i,o):!!l}function Ja(t){if(!bt(t))return!1;var n=Ht(t);return n==os||n==qp||typeof t.message=="string"&&typeof t.name=="string"&&!vi(t)}function S_(t){return typeof t=="number"&&Ac(t)}function ke(t){if(!_t(t))return!1;var n=Ht(t);return n==as||n==Nu||n==Zp||n==Jp}function Zd(t){return typeof t=="number"&&t==q(t)}function Ys(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Je}function _t(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}function bt(t){return t!=null&&typeof t=="object"}var qd=ac?Kt(ac):$v;function A_(t,n){return t===n||Ea(t,n,Ha(n))}function O_(t,n,o){return o=typeof o=="function"?o:i,Ea(t,n,Ha(n),o)}function C_(t){return Yd(t)&&t!=+t}function $_(t){if(f0(t))throw new V(s);return Hc(t)}function I_(t){return t===null}function L_(t){return t==null}function Yd(t){return typeof t=="number"||bt(t)&&Ht(t)==jr}function vi(t){if(!bt(t)||Ht(t)!=Le)return!1;var n=xs(t);if(n===null)return!0;var o=ct.call(n,"constructor")&&n.constructor;return typeof o=="function"&&o instanceof o&&vs.call(o)==Og}var Ka=lc?Kt(lc):Iv;function M_(t){return Zd(t)&&t>=-Je&&t<=Je}var Jd=uc?Kt(uc):Lv;function Js(t){return typeof t=="string"||!Z(t)&&bt(t)&&Ht(t)==ti}function jt(t){return typeof t=="symbol"||bt(t)&&Ht(t)==ls}var Sr=cc?Kt(cc):Mv;function N_(t){return t===i}function R_(t){return bt(t)&&kt(t)==ei}function D_(t){return bt(t)&&Ht(t)==Xp}var F_=Hs(Ta),P_=Hs(function(t,n){return t<=n});function Kd(t){if(!t)return[];if(Bt(t))return Js(t)?ge(t):Wt(t);if(ii&&t[ii])return mg(t[ii]());var n=kt(t),o=n==pe?da:n==me?ps:Ar;return o(t)}function He(t){if(!t)return t===0?t:0;if(t=ue(t),t===_n||t===-_n){var n=t<0?-1:1;return n*Wp}return t===t?t:0}function q(t){var n=He(t),o=n%1;return n===n?o?n-o:n:0}function Xd(t){return t?Tn(q(t),0,Te):0}function ue(t){if(typeof t=="number")return t;if(jt(t))return is;if(_t(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=_t(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=gc(t);var o=ym.test(t);return o||wm.test(t)?jm(t.slice(2),o?2:8):vm.test(t)?is:+t}function jd(t){return Ae(t,Gt(t))}function k_(t){return t?Tn(q(t),-Je,Je):t===0?t:0}function at(t){return t==null?"":Xt(t)}var H_=Er(function(t,n){if(mi(n)||Bt(n)){Ae(n,It(n),t);return}for(var o in n)ct.call(n,o)&&ui(t,o,n[o])}),Qd=Er(function(t,n){Ae(n,Gt(n),t)}),Ks=Er(function(t,n,o,l){Ae(n,Gt(n),t,l)}),U_=Er(function(t,n,o,l){Ae(n,It(n),t,l)}),z_=Fe(va);function W_(t,n){var o=xr(t);return n==null?o:Lc(o,n)}var B_=X(function(t,n){t=ft(t);var o=-1,l=n.length,d=l>2?n[2]:i;for(d&&Ut(n[0],n[1],d)&&(l=1);++o<l;)for(var h=n[o],g=Gt(h),y=-1,x=g.length;++y<x;){var A=g[y],O=t[A];(O===i||ye(O,yr[A])&&!ct.call(t,A))&&(t[A]=h[A])}return t}),G_=X(function(t){return t.push(i,gd),Jt(tf,i,t)});function V_(t,n){return fc(t,U(n,3),Se)}function Z_(t,n){return fc(t,U(n,3),_a)}function q_(t,n){return t==null?t:ya(t,U(n,3),Gt)}function Y_(t,n){return t==null?t:Fc(t,U(n,3),Gt)}function J_(t,n){return t&&Se(t,U(n,3))}function K_(t,n){return t&&_a(t,U(n,3))}function X_(t){return t==null?[]:Ls(t,It(t))}function j_(t){return t==null?[]:Ls(t,Gt(t))}function Xa(t,n,o){var l=t==null?i:Sn(t,n);return l===i?o:l}function Q_(t,n){return t!=null&&_d(t,n,Ev)}function ja(t,n){return t!=null&&_d(t,n,bv)}var tw=dd(function(t,n,o){n!=null&&typeof n.toString!="function"&&(n=ys.call(n)),t[n]=o},tl(Vt)),ew=dd(function(t,n,o){n!=null&&typeof n.toString!="function"&&(n=ys.call(n)),ct.call(t,n)?t[n].push(o):t[n]=[o]},U),nw=X(di);function It(t){return Bt(t)?$c(t):ba(t)}function Gt(t){return Bt(t)?$c(t,!0):Nv(t)}function rw(t,n){var o={};return n=U(n,3),Se(t,function(l,d,h){Re(o,n(l,d,h),l)}),o}function iw(t,n){var o={};return n=U(n,3),Se(t,function(l,d,h){Re(o,d,n(l,d,h))}),o}var sw=Er(function(t,n,o){Ms(t,n,o)}),tf=Er(function(t,n,o,l){Ms(t,n,o,l)}),ow=Fe(function(t,n){var o={};if(t==null)return o;var l=!1;n=yt(n,function(h){return h=rn(h,t),l||(l=h.length>1),h}),Ae(t,Pa(t),o),l&&(o=oe(o,_|T|S,t0));for(var d=n.length;d--;)$a(o,n[d]);return o});function aw(t,n){return ef(t,qs(U(n)))}var lw=Fe(function(t,n){return t==null?{}:Dv(t,n)});function ef(t,n){if(t==null)return{};var o=yt(Pa(t),function(l){return[l]});return n=U(n),Zc(t,o,function(l,d){return n(l,d[0])})}function uw(t,n,o){n=rn(n,t);var l=-1,d=n.length;for(d||(d=1,t=i);++l<d;){var h=t==null?i:t[Oe(n[l])];h===i&&(l=d,h=o),t=ke(h)?h.call(t):h}return t}function cw(t,n,o){return t==null?t:hi(t,n,o)}function dw(t,n,o,l){return l=typeof l=="function"?l:i,t==null?t:hi(t,n,o,l)}var nf=pd(It),rf=pd(Gt);function fw(t,n,o){var l=Z(t),d=l||on(t)||Sr(t);if(n=U(n,4),o==null){var h=t&&t.constructor;d?o=l?new h:[]:_t(t)?o=ke(h)?xr(xs(t)):{}:o={}}return(d?re:Se)(t,function(g,y,x){return n(o,g,y,x)}),o}function hw(t,n){return t==null?!0:$a(t,n)}function pw(t,n,o){return t==null?t:Xc(t,n,Ma(o))}function mw(t,n,o,l){return l=typeof l=="function"?l:i,t==null?t:Xc(t,n,Ma(o),l)}function Ar(t){return t==null?[]:ca(t,It(t))}function gw(t){return t==null?[]:ca(t,Gt(t))}function vw(t,n,o){return o===i&&(o=n,n=i),o!==i&&(o=ue(o),o=o===o?o:0),n!==i&&(n=ue(n),n=n===n?n:0),Tn(ue(t),n,o)}function yw(t,n,o){return n=He(n),o===i?(o=n,n=0):o=He(o),t=ue(t),Tv(t,n,o)}function _w(t,n,o){if(o&&typeof o!="boolean"&&Ut(t,n,o)&&(n=o=i),o===i&&(typeof n=="boolean"?(o=n,n=i):typeof t=="boolean"&&(o=t,t=i)),t===i&&n===i?(t=0,n=1):(t=He(t),n===i?(n=t,t=0):n=He(n)),t>n){var l=t;t=n,n=l}if(o||t%1||n%1){var d=Oc();return Pt(t+d*(n-t+Xm("1e-"+((d+"").length-1))),n)}return Aa(t,n)}var ww=br(function(t,n,o){return n=n.toLowerCase(),t+(o?sf(n):n)});function sf(t){return Qa(at(t).toLowerCase())}function of(t){return t=at(t),t&&t.replace(Em,cg).replace(zm,"")}function xw(t,n,o){t=at(t),n=Xt(n);var l=t.length;o=o===i?l:Tn(q(o),0,l);var d=o;return o-=n.length,o>=0&&t.slice(o,d)==n}function Ew(t){return t=at(t),t&&nm.test(t)?t.replace(Fu,dg):t}function bw(t){return t=at(t),t&&lm.test(t)?t.replace(Yo,"\\$&"):t}var Tw=br(function(t,n,o){return t+(o?"-":"")+n.toLowerCase()}),Sw=br(function(t,n,o){return t+(o?" ":"")+n.toLowerCase()}),Aw=ld("toLowerCase");function Ow(t,n,o){t=at(t),n=q(n);var l=n?vr(t):0;if(!n||l>=n)return t;var d=(n-l)/2;return ks(Ss(d),o)+t+ks(Ts(d),o)}function Cw(t,n,o){t=at(t),n=q(n);var l=n?vr(t):0;return n&&l<n?t+ks(n-l,o):t}function $w(t,n,o){t=at(t),n=q(n);var l=n?vr(t):0;return n&&l<n?ks(n-l,o)+t:t}function Iw(t,n,o){return o||n==null?n=0:n&&(n=+n),Pg(at(t).replace(Jo,""),n||0)}function Lw(t,n,o){return(o?Ut(t,n,o):n===i)?n=1:n=q(n),Oa(at(t),n)}function Mw(){var t=arguments,n=at(t[0]);return t.length<3?n:n.replace(t[1],t[2])}var Nw=br(function(t,n,o){return t+(o?"_":"")+n.toLowerCase()});function Rw(t,n,o){return o&&typeof o!="number"&&Ut(t,n,o)&&(n=o=i),o=o===i?Te:o>>>0,o?(t=at(t),t&&(typeof n=="string"||n!=null&&!Ka(n))&&(n=Xt(n),!n&&gr(t))?sn(ge(t),0,o):t.split(n,o)):[]}var Dw=br(function(t,n,o){return t+(o?" ":"")+Qa(n)});function Fw(t,n,o){return t=at(t),o=o==null?0:Tn(q(o),0,t.length),n=Xt(n),t.slice(o,o+n.length)==n}function Pw(t,n,o){var l=f.templateSettings;o&&Ut(t,n,o)&&(n=i),t=at(t),n=Ks({},n,l,md);var d=Ks({},n.imports,l.imports,md),h=It(d),g=ca(d,h),y,x,A=0,O=n.interpolate||us,$="__p += '",R=fa((n.escape||us).source+"|"+O.source+"|"+(O===Pu?gm:us).source+"|"+(n.evaluate||us).source+"|$","g"),P="//# sourceURL="+(ct.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Zm+"]")+`
`;t.replace(R,function(W,tt,rt,Qt,zt,te){return rt||(rt=Qt),$+=t.slice(A,te).replace(bm,fg),tt&&(y=!0,$+=`' +
__e(`+tt+`) +
'`),zt&&(x=!0,$+=`';
`+zt+`;
__p += '`),rt&&($+=`' +
((__t = (`+rt+`)) == null ? '' : __t) +
'`),A=te+W.length,W}),$+=`';
`;var z=ct.call(n,"variable")&&n.variable;if(!z)$=`with (obj) {
`+$+`
}
`;else if(pm.test(z))throw new V(u);$=(x?$.replace(jp,""):$).replace(Qp,"$1").replace(tm,"$1;"),$="function("+(z||"obj")+`) {
`+(z?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(x?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+$+`return __p
}`;var J=lf(function(){return st(h,P+"return "+$).apply(i,g)});if(J.source=$,Ja(J))throw J;return J}function kw(t){return at(t).toLowerCase()}function Hw(t){return at(t).toUpperCase()}function Uw(t,n,o){if(t=at(t),t&&(o||n===i))return gc(t);if(!t||!(n=Xt(n)))return t;var l=ge(t),d=ge(n),h=vc(l,d),g=yc(l,d)+1;return sn(l,h,g).join("")}function zw(t,n,o){if(t=at(t),t&&(o||n===i))return t.slice(0,wc(t)+1);if(!t||!(n=Xt(n)))return t;var l=ge(t),d=yc(l,ge(n))+1;return sn(l,0,d).join("")}function Ww(t,n,o){if(t=at(t),t&&(o||n===i))return t.replace(Jo,"");if(!t||!(n=Xt(n)))return t;var l=ge(t),d=vc(l,ge(n));return sn(l,d).join("")}function Bw(t,n){var o=yn,l=ko;if(_t(n)){var d="separator"in n?n.separator:d;o="length"in n?q(n.length):o,l="omission"in n?Xt(n.omission):l}t=at(t);var h=t.length;if(gr(t)){var g=ge(t);h=g.length}if(o>=h)return t;var y=o-vr(l);if(y<1)return l;var x=g?sn(g,0,y).join(""):t.slice(0,y);if(d===i)return x+l;if(g&&(y+=x.length-y),Ka(d)){if(t.slice(y).search(d)){var A,O=x;for(d.global||(d=fa(d.source,at(ku.exec(d))+"g")),d.lastIndex=0;A=d.exec(O);)var $=A.index;x=x.slice(0,$===i?y:$)}}else if(t.indexOf(Xt(d),y)!=y){var R=x.lastIndexOf(d);R>-1&&(x=x.slice(0,R))}return x+l}function Gw(t){return t=at(t),t&&em.test(t)?t.replace(Du,_g):t}var Vw=br(function(t,n,o){return t+(o?" ":"")+n.toUpperCase()}),Qa=ld("toUpperCase");function af(t,n,o){return t=at(t),n=o?i:n,n===i?pg(t)?Eg(t):sg(t):t.match(n)||[]}var lf=X(function(t,n){try{return Jt(t,i,n)}catch(o){return Ja(o)?o:new V(o)}}),Zw=Fe(function(t,n){return re(n,function(o){o=Oe(o),Re(t,o,qa(t[o],t))}),t});function qw(t){var n=t==null?0:t.length,o=U();return t=n?yt(t,function(l){if(typeof l[1]!="function")throw new ie(a);return[o(l[0]),l[1]]}):[],X(function(l){for(var d=-1;++d<n;){var h=t[d];if(Jt(h[0],this,l))return Jt(h[1],this,l)}})}function Yw(t){return _v(oe(t,_))}function tl(t){return function(){return t}}function Jw(t,n){return t==null||t!==t?n:t}var Kw=cd(),Xw=cd(!0);function Vt(t){return t}function el(t){return Uc(typeof t=="function"?t:oe(t,_))}function jw(t){return Wc(oe(t,_))}function Qw(t,n){return Bc(t,oe(n,_))}var tx=X(function(t,n){return function(o){return di(o,t,n)}}),ex=X(function(t,n){return function(o){return di(t,o,n)}});function nl(t,n,o){var l=It(n),d=Ls(n,l);o==null&&!(_t(n)&&(d.length||!l.length))&&(o=n,n=t,t=this,d=Ls(n,It(n)));var h=!(_t(o)&&"chain"in o)||!!o.chain,g=ke(t);return re(d,function(y){var x=n[y];t[y]=x,g&&(t.prototype[y]=function(){var A=this.__chain__;if(h||A){var O=t(this.__wrapped__),$=O.__actions__=Wt(this.__actions__);return $.push({func:x,args:arguments,thisArg:t}),O.__chain__=A,O}return x.apply(t,Xe([this.value()],arguments))})}),t}function nx(){return $t._===this&&($t._=Cg),this}function rl(){}function rx(t){return t=q(t),X(function(n){return Gc(n,t)})}var ix=Ra(yt),sx=Ra(dc),ox=Ra(sa);function uf(t){return za(t)?oa(Oe(t)):Fv(t)}function ax(t){return function(n){return t==null?i:Sn(t,n)}}var lx=fd(),ux=fd(!0);function il(){return[]}function sl(){return!1}function cx(){return{}}function dx(){return""}function fx(){return!0}function hx(t,n){if(t=q(t),t<1||t>Je)return[];var o=Te,l=Pt(t,Te);n=U(n),t-=Te;for(var d=ua(l,n);++o<t;)n(o);return d}function px(t){return Z(t)?yt(t,Oe):jt(t)?[t]:Wt(Cd(at(t)))}function mx(t){var n=++Ag;return at(t)+n}var gx=Ps(function(t,n){return t+n},0),vx=Da("ceil"),yx=Ps(function(t,n){return t/n},1),_x=Da("floor");function wx(t){return t&&t.length?Is(t,Vt,wa):i}function xx(t,n){return t&&t.length?Is(t,U(n,2),wa):i}function Ex(t){return pc(t,Vt)}function bx(t,n){return pc(t,U(n,2))}function Tx(t){return t&&t.length?Is(t,Vt,Ta):i}function Sx(t,n){return t&&t.length?Is(t,U(n,2),Ta):i}var Ax=Ps(function(t,n){return t*n},1),Ox=Da("round"),Cx=Ps(function(t,n){return t-n},0);function $x(t){return t&&t.length?la(t,Vt):0}function Ix(t,n){return t&&t.length?la(t,U(n,2)):0}return f.after=jy,f.ary=Hd,f.assign=H_,f.assignIn=Qd,f.assignInWith=Ks,f.assignWith=U_,f.at=z_,f.before=Ud,f.bind=qa,f.bindAll=Zw,f.bindKey=zd,f.castArray=c_,f.chain=Fd,f.chunk=_0,f.compact=w0,f.concat=x0,f.cond=qw,f.conforms=Yw,f.constant=tl,f.countBy=$y,f.create=W_,f.curry=Wd,f.curryRight=Bd,f.debounce=Gd,f.defaults=B_,f.defaultsDeep=G_,f.defer=Qy,f.delay=t_,f.difference=E0,f.differenceBy=b0,f.differenceWith=T0,f.drop=S0,f.dropRight=A0,f.dropRightWhile=O0,f.dropWhile=C0,f.fill=$0,f.filter=Ly,f.flatMap=Ry,f.flatMapDeep=Dy,f.flatMapDepth=Fy,f.flatten=Md,f.flattenDeep=I0,f.flattenDepth=L0,f.flip=e_,f.flow=Kw,f.flowRight=Xw,f.fromPairs=M0,f.functions=X_,f.functionsIn=j_,f.groupBy=Py,f.initial=R0,f.intersection=D0,f.intersectionBy=F0,f.intersectionWith=P0,f.invert=tw,f.invertBy=ew,f.invokeMap=Hy,f.iteratee=el,f.keyBy=Uy,f.keys=It,f.keysIn=Gt,f.map=Gs,f.mapKeys=rw,f.mapValues=iw,f.matches=jw,f.matchesProperty=Qw,f.memoize=Zs,f.merge=sw,f.mergeWith=tf,f.method=tx,f.methodOf=ex,f.mixin=nl,f.negate=qs,f.nthArg=rx,f.omit=ow,f.omitBy=aw,f.once=n_,f.orderBy=zy,f.over=ix,f.overArgs=r_,f.overEvery=sx,f.overSome=ox,f.partial=Ya,f.partialRight=Vd,f.partition=Wy,f.pick=lw,f.pickBy=ef,f.property=uf,f.propertyOf=ax,f.pull=z0,f.pullAll=Rd,f.pullAllBy=W0,f.pullAllWith=B0,f.pullAt=G0,f.range=lx,f.rangeRight=ux,f.rearg=i_,f.reject=Vy,f.remove=V0,f.rest=s_,f.reverse=Va,f.sampleSize=qy,f.set=cw,f.setWith=dw,f.shuffle=Yy,f.slice=Z0,f.sortBy=Xy,f.sortedUniq=Q0,f.sortedUniqBy=ty,f.split=Rw,f.spread=o_,f.tail=ey,f.take=ny,f.takeRight=ry,f.takeRightWhile=iy,f.takeWhile=sy,f.tap=wy,f.throttle=a_,f.thru=Bs,f.toArray=Kd,f.toPairs=nf,f.toPairsIn=rf,f.toPath=px,f.toPlainObject=jd,f.transform=fw,f.unary=l_,f.union=oy,f.unionBy=ay,f.unionWith=ly,f.uniq=uy,f.uniqBy=cy,f.uniqWith=dy,f.unset=hw,f.unzip=Za,f.unzipWith=Dd,f.update=pw,f.updateWith=mw,f.values=Ar,f.valuesIn=gw,f.without=fy,f.words=af,f.wrap=u_,f.xor=hy,f.xorBy=py,f.xorWith=my,f.zip=gy,f.zipObject=vy,f.zipObjectDeep=yy,f.zipWith=_y,f.entries=nf,f.entriesIn=rf,f.extend=Qd,f.extendWith=Ks,nl(f,f),f.add=gx,f.attempt=lf,f.camelCase=ww,f.capitalize=sf,f.ceil=vx,f.clamp=vw,f.clone=d_,f.cloneDeep=h_,f.cloneDeepWith=p_,f.cloneWith=f_,f.conformsTo=m_,f.deburr=of,f.defaultTo=Jw,f.divide=yx,f.endsWith=xw,f.eq=ye,f.escape=Ew,f.escapeRegExp=bw,f.every=Iy,f.find=My,f.findIndex=Id,f.findKey=V_,f.findLast=Ny,f.findLastIndex=Ld,f.findLastKey=Z_,f.floor=_x,f.forEach=Pd,f.forEachRight=kd,f.forIn=q_,f.forInRight=Y_,f.forOwn=J_,f.forOwnRight=K_,f.get=Xa,f.gt=g_,f.gte=v_,f.has=Q_,f.hasIn=ja,f.head=Nd,f.identity=Vt,f.includes=ky,f.indexOf=N0,f.inRange=yw,f.invoke=nw,f.isArguments=Cn,f.isArray=Z,f.isArrayBuffer=y_,f.isArrayLike=Bt,f.isArrayLikeObject=Tt,f.isBoolean=__,f.isBuffer=on,f.isDate=w_,f.isElement=x_,f.isEmpty=E_,f.isEqual=b_,f.isEqualWith=T_,f.isError=Ja,f.isFinite=S_,f.isFunction=ke,f.isInteger=Zd,f.isLength=Ys,f.isMap=qd,f.isMatch=A_,f.isMatchWith=O_,f.isNaN=C_,f.isNative=$_,f.isNil=L_,f.isNull=I_,f.isNumber=Yd,f.isObject=_t,f.isObjectLike=bt,f.isPlainObject=vi,f.isRegExp=Ka,f.isSafeInteger=M_,f.isSet=Jd,f.isString=Js,f.isSymbol=jt,f.isTypedArray=Sr,f.isUndefined=N_,f.isWeakMap=R_,f.isWeakSet=D_,f.join=k0,f.kebabCase=Tw,f.last=le,f.lastIndexOf=H0,f.lowerCase=Sw,f.lowerFirst=Aw,f.lt=F_,f.lte=P_,f.max=wx,f.maxBy=xx,f.mean=Ex,f.meanBy=bx,f.min=Tx,f.minBy=Sx,f.stubArray=il,f.stubFalse=sl,f.stubObject=cx,f.stubString=dx,f.stubTrue=fx,f.multiply=Ax,f.nth=U0,f.noConflict=nx,f.noop=rl,f.now=Vs,f.pad=Ow,f.padEnd=Cw,f.padStart=$w,f.parseInt=Iw,f.random=_w,f.reduce=By,f.reduceRight=Gy,f.repeat=Lw,f.replace=Mw,f.result=uw,f.round=Ox,f.runInContext=w,f.sample=Zy,f.size=Jy,f.snakeCase=Nw,f.some=Ky,f.sortedIndex=q0,f.sortedIndexBy=Y0,f.sortedIndexOf=J0,f.sortedLastIndex=K0,f.sortedLastIndexBy=X0,f.sortedLastIndexOf=j0,f.startCase=Dw,f.startsWith=Fw,f.subtract=Cx,f.sum=$x,f.sumBy=Ix,f.template=Pw,f.times=hx,f.toFinite=He,f.toInteger=q,f.toLength=Xd,f.toLower=kw,f.toNumber=ue,f.toSafeInteger=k_,f.toString=at,f.toUpper=Hw,f.trim=Uw,f.trimEnd=zw,f.trimStart=Ww,f.truncate=Bw,f.unescape=Gw,f.uniqueId=mx,f.upperCase=Vw,f.upperFirst=Qa,f.each=Pd,f.eachRight=kd,f.first=Nd,nl(f,function(){var t={};return Se(f,function(n,o){ct.call(f.prototype,o)||(t[o]=n)}),t}(),{chain:!1}),f.VERSION=e,re(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){f[t].placeholder=f}),re(["drop","take"],function(t,n){nt.prototype[t]=function(o){o=o===i?1:Ot(q(o),0);var l=this.__filtered__&&!n?new nt(this):this.clone();return l.__filtered__?l.__takeCount__=Pt(o,l.__takeCount__):l.__views__.push({size:Pt(o,Te),type:t+(l.__dir__<0?"Right":"")}),l},nt.prototype[t+"Right"]=function(o){return this.reverse()[t](o).reverse()}}),re(["filter","map","takeWhile"],function(t,n){var o=n+1,l=o==Mu||o==zp;nt.prototype[t]=function(d){var h=this.clone();return h.__iteratees__.push({iteratee:U(d,3),type:o}),h.__filtered__=h.__filtered__||l,h}}),re(["head","last"],function(t,n){var o="take"+(n?"Right":"");nt.prototype[t]=function(){return this[o](1).value()[0]}}),re(["initial","tail"],function(t,n){var o="drop"+(n?"":"Right");nt.prototype[t]=function(){return this.__filtered__?new nt(this):this[o](1)}}),nt.prototype.compact=function(){return this.filter(Vt)},nt.prototype.find=function(t){return this.filter(t).head()},nt.prototype.findLast=function(t){return this.reverse().find(t)},nt.prototype.invokeMap=X(function(t,n){return typeof t=="function"?new nt(this):this.map(function(o){return di(o,t,n)})}),nt.prototype.reject=function(t){return this.filter(qs(U(t)))},nt.prototype.slice=function(t,n){t=q(t);var o=this;return o.__filtered__&&(t>0||n<0)?new nt(o):(t<0?o=o.takeRight(-t):t&&(o=o.drop(t)),n!==i&&(n=q(n),o=n<0?o.dropRight(-n):o.take(n-t)),o)},nt.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},nt.prototype.toArray=function(){return this.take(Te)},Se(nt.prototype,function(t,n){var o=/^(?:filter|find|map|reject)|While$/.test(n),l=/^(?:head|last)$/.test(n),d=f[l?"take"+(n=="last"?"Right":""):n],h=l||/^find/.test(n);!d||(f.prototype[n]=function(){var g=this.__wrapped__,y=l?[1]:arguments,x=g instanceof nt,A=y[0],O=x||Z(g),$=function(tt){var rt=d.apply(f,Xe([tt],y));return l&&R?rt[0]:rt};O&&o&&typeof A=="function"&&A.length!=1&&(x=O=!1);var R=this.__chain__,P=!!this.__actions__.length,z=h&&!R,J=x&&!P;if(!h&&O){g=J?g:new nt(this);var W=t.apply(g,y);return W.__actions__.push({func:Bs,args:[$],thisArg:i}),new se(W,R)}return z&&J?t.apply(this,y):(W=this.thru($),z?l?W.value()[0]:W.value():W)})}),re(["pop","push","shift","sort","splice","unshift"],function(t){var n=ms[t],o=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",l=/^(?:pop|shift)$/.test(t);f.prototype[t]=function(){var d=arguments;if(l&&!this.__chain__){var h=this.value();return n.apply(Z(h)?h:[],d)}return this[o](function(g){return n.apply(Z(g)?g:[],d)})}}),Se(nt.prototype,function(t,n){var o=f[n];if(o){var l=o.name+"";ct.call(wr,l)||(wr[l]=[]),wr[l].push({name:n,func:o})}}),wr[Fs(i,gt).name]=[{name:"wrapper",func:i}],nt.prototype.clone=Gg,nt.prototype.reverse=Vg,nt.prototype.value=Zg,f.prototype.at=xy,f.prototype.chain=Ey,f.prototype.commit=by,f.prototype.next=Ty,f.prototype.plant=Ay,f.prototype.reverse=Oy,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=Cy,f.prototype.first=f.prototype.head,ii&&(f.prototype[ii]=Sy),f},Qe=bg();typeof define=="function"&&typeof define.amd=="object"&&define.amd?($t._=Qe,define(function(){return Qe})):wn?((wn.exports=Qe)._=Qe,ea._=Qe):$t._=Qe}).call($r)});v();v();v();v();v();var Qs=globalThis,eo=Qs.ShadowRoot&&(Qs.ShadyCSS===void 0||Qs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gf=Symbol(),mf=new WeakMap,to=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==gf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(eo&&e===void 0){let s=r!==void 0&&r.length===1;s&&(e=mf.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&mf.set(r,e))}return e}toString(){return this.cssText}},vf=i=>new to(typeof i=="string"?i:i+"",void 0,gf);var ll=(i,e)=>{if(eo)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),a=Qs.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=r.cssText,i.appendChild(s)}},no=eo?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return vf(r)})(i):i;var{is:Ux,defineProperty:zx,getOwnPropertyDescriptor:Wx,getOwnPropertyNames:Bx,getOwnPropertySymbols:Gx,getPrototypeOf:Vx}=Object,an=globalThis,yf=an.trustedTypes,Zx=yf?yf.emptyScript:"",ul=an.reactiveElementPolyfillSupport,yi=(i,e)=>i,ro={toAttribute(i,e){switch(e){case Boolean:i=i?Zx:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(s){r=null}}return r}},cl=(i,e)=>!Ux(i,e),_f={attribute:!0,type:String,converter:ro,reflect:!1,hasChanged:cl},wf,xf;(wf=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(xf=an.litPropertyMetadata)!=null||(an.litPropertyMetadata=new WeakMap);var In=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=_f){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let s=Symbol(),a=this.getPropertyDescriptor(e,s,r);a!==void 0&&zx(this.prototype,e,a)}}static getPropertyDescriptor(e,r,s){var c;let{get:a,set:u}=(c=Wx(this.prototype,e))!=null?c:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);u.call(this,p),this.requestUpdate(e,m,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:_f}static _$Ei(){if(this.hasOwnProperty(yi("elementProperties")))return;let e=Vx(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(yi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yi("properties"))){let r=this.properties,s=[...Bx(r),...Gx(r)];for(let a of s)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[s,a]of r)this.elementProperties.set(s,a)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let a=this._$Eu(r,s);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let a of s)r.unshift(no(a))}else e!==void 0&&r.push(no(e));return r}static _$Eu(e,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,s;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return ll(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostConnected)==null?void 0:a.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$EO(e,r){var u;let s=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,s);if(a!==void 0&&s.reflect===!0){let c=(((u=s.converter)==null?void 0:u.toAttribute)!==void 0?s.converter:ro).toAttribute(r,s.type);this._$Em=e,c==null?this.removeAttribute(a):this.setAttribute(a,c),this._$Em=null}}_$AK(e,r){var u;let s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let c=s.getPropertyOptions(a),p=typeof c.converter=="function"?{fromAttribute:c.converter}:((u=c.converter)==null?void 0:u.fromAttribute)!==void 0?c.converter:ro;this._$Em=a,this[a]=p.fromAttribute(r,c.type),this._$Em=null}}requestUpdate(e,r,s,a=!1,u){var c;if(e!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(e)),!((c=s.hasChanged)!=null?c:cl)(a?u:this[e],r))return;this.C(e,r,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,s){var a;this._$AL.has(e)||this._$AL.set(e,r),s.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return $n(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[u,c]of this._$Ep)this[u]=c;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[u,c]of a)c.wrapped!==!0||this._$AL.has(u)||this[u]===void 0||this.C(u,this[u],c)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(s=this._$ES)==null||s.forEach(a=>{var u;return(u=a.hostUpdate)==null?void 0:u.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostUpdated)==null?void 0:a.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},Ef;In.elementStyles=[],In.shadowRootOptions={mode:"open"},In[yi("elementProperties")]=new Map,In[yi("finalized")]=new Map,ul==null||ul({ReactiveElement:In}),((Ef=an.reactiveElementVersions)!=null?Ef:an.reactiveElementVersions=[]).push("2.0.0");v();var wi=globalThis,io=wi.trustedTypes,bf=io?io.createPolicy("lit-html",{createHTML:i=>i}):void 0,hl="$lit$",ze=`lit$${(Math.random()+"").slice(9)}$`,pl="?"+ze,qx=`<${pl}>`,Nn=document,so=()=>Nn.createComment(""),xi=i=>i===null||typeof i!="object"&&typeof i!="function",If=Array.isArray,Lf=i=>If(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",dl=`[ 	
\f\r]`,_i=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tf=/-->/g,Sf=/>/g,Ln=RegExp(`>|${dl}(?:([^\\s"'>=/]+)(${dl}*=${dl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Af=/'/g,Of=/"/g,Mf=/^(?:script|style|textarea|title)$/i,Nf=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),nT=Nf(1),rT=Nf(2),We=Symbol.for("lit-noChange"),Mt=Symbol.for("lit-nothing"),Cf=new WeakMap,Mn=Nn.createTreeWalker(Nn,129);function Rf(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return bf!==void 0?bf.createHTML(e):e}var Df=(i,e)=>{let r=i.length-1,s=[],a,u=e===2?"<svg>":"",c=_i;for(let p=0;p<r;p++){let m=i[p],_,T,S=-1,N=0;for(;N<m.length&&(c.lastIndex=N,T=c.exec(m),T!==null);)N=c.lastIndex,c===_i?T[1]==="!--"?c=Tf:T[1]!==void 0?c=Sf:T[2]!==void 0?(Mf.test(T[2])&&(a=RegExp("</"+T[2],"g")),c=Ln):T[3]!==void 0&&(c=Ln):c===Ln?T[0]===">"?(c=a!=null?a:_i,S=-1):T[1]===void 0?S=-2:(S=c.lastIndex-T[2].length,_=T[1],c=T[3]===void 0?Ln:T[3]==='"'?Of:Af):c===Of||c===Af?c=Ln:c===Tf||c===Sf?c=_i:(c=Ln,a=void 0);let I=c===Ln&&i[p+1].startsWith("/>")?" ":"";u+=c===_i?m+qx:S>=0?(s.push(_),m.slice(0,S)+hl+m.slice(S)+ze+I):m+ze+(S===-2?p:I)}return[Rf(i,u+(i[r]||"<?>")+(e===2?"</svg>":"")),s]},Rn=class{constructor({strings:e,_$litType$:r},s){let a;this.parts=[];let u=0,c=0,p=e.length-1,m=this.parts,[_,T]=Df(e,r);if(this.el=Rn.createElement(_,s),Mn.currentNode=this.el.content,r===2){let S=this.el.content.firstChild;S.replaceWith(...S.childNodes)}for(;(a=Mn.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let S of a.getAttributeNames())if(S.endsWith(hl)){let N=T[c++],I=a.getAttribute(S).split(ze),L=/([.?@])?(.*)/.exec(N);m.push({type:1,index:u,name:L[2],strings:I,ctor:L[1]==="."?ao:L[1]==="?"?lo:L[1]==="@"?uo:Pn}),a.removeAttribute(S)}else S.startsWith(ze)&&(m.push({type:6,index:u}),a.removeAttribute(S));if(Mf.test(a.tagName)){let S=a.textContent.split(ze),N=S.length-1;if(N>0){a.textContent=io?io.emptyScript:"";for(let I=0;I<N;I++)a.append(S[I],so()),Mn.nextNode(),m.push({type:2,index:++u});a.append(S[N],so())}}}else if(a.nodeType===8)if(a.data===pl)m.push({type:2,index:u});else{let S=-1;for(;(S=a.data.indexOf(ze,S+1))!==-1;)m.push({type:7,index:u}),S+=ze.length-1}u++}}static createElement(e,r){let s=Nn.createElement("template");return s.innerHTML=e,s}};function Dn(i,e,r=i,s){var c,p,m;if(e===We)return e;let a=s!==void 0?(c=r._$Co)==null?void 0:c[s]:r._$Cl,u=xi(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),u===void 0?a=void 0:(a=new u(i),a._$AT(i,r,s)),s!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[s]=a:r._$Cl=a),a!==void 0&&(e=Dn(i,a._$AS(i,e.values),a,s)),e}var oo=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var _;let{el:{content:r},parts:s}=this._$AD,a=((_=e==null?void 0:e.creationScope)!=null?_:Nn).importNode(r,!0);Mn.currentNode=a;let u=Mn.nextNode(),c=0,p=0,m=s[0];for(;m!==void 0;){if(c===m.index){let T;m.type===2?T=new Fn(u,u.nextSibling,this,e):m.type===1?T=new m.ctor(u,m.name,m.strings,this,e):m.type===6&&(T=new co(u,this,e)),this._$AV.push(T),m=s[++p]}c!==(m==null?void 0:m.index)&&(u=Mn.nextNode(),c++)}return Mn.currentNode=Nn,a}p(e){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,r),r+=s.strings.length-2):s._$AI(e[r])),r++}},Fn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,s,a){var u;this.type=2,this._$AH=Mt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=a,this._$Cv=(u=a==null?void 0:a.isConnected)!=null?u:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Dn(this,e,r),xi(e)?e===Mt||e==null||e===""?(this._$AH!==Mt&&this._$AR(),this._$AH=Mt):e!==this._$AH&&e!==We&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Lf(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Mt&&xi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Nn.createTextNode(e)),this._$AH=e}g(e){var u;let{values:r,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Rn.createElement(Rf(s.h,s.h[0]),this.options)),s);if(((u=this._$AH)==null?void 0:u._$AD)===a)this._$AH.p(r);else{let c=new oo(a,this),p=c.u(this.options);c.p(r),this.$(p),this._$AH=c}}_$AC(e){let r=Cf.get(e.strings);return r===void 0&&Cf.set(e.strings,r=new Rn(e)),r}T(e){If(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,a=0;for(let u of e)a===r.length?r.push(s=new Fn(this.k(so()),this.k(so()),this,this.options)):s=r[a],s._$AI(u),a++;a<r.length&&(this._$AR(s&&s._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},Pn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,a,u){this.type=1,this._$AH=Mt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=u,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Mt}_$AI(e,r=this,s,a){let u=this.strings,c=!1;if(u===void 0)e=Dn(this,e,r,0),c=!xi(e)||e!==this._$AH&&e!==We,c&&(this._$AH=e);else{let p=e,m,_;for(e=u[0],m=0;m<u.length-1;m++)_=Dn(this,p[s+m],r,m),_===We&&(_=this._$AH[m]),c||(c=!xi(_)||_!==this._$AH[m]),_===Mt?e=Mt:e!==Mt&&(e+=(_!=null?_:"")+u[m+1]),this._$AH[m]=_}c&&!a&&this.j(e)}j(e){e===Mt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},ao=class extends Pn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Mt?void 0:e}},lo=class extends Pn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Mt)}},uo=class extends Pn{constructor(e,r,s,a,u){super(e,r,s,a,u),this.type=5}_$AI(e,r=this){var c;if((e=(c=Dn(this,e,r,0))!=null?c:Mt)===We)return;let s=this._$AH,a=e===Mt&&s!==Mt||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,u=e!==Mt&&(s===Mt||a);a&&this.element.removeEventListener(this.name,this,s),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,s;typeof this._$AH=="function"?this._$AH.call((s=(r=this.options)==null?void 0:r.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}},co=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Dn(this,e)}},Ff={S:hl,A:ze,P:pl,C:1,M:Df,L:oo,R:Lf,V:Dn,D:Fn,I:Pn,H:lo,N:uo,U:ao,B:co},fl=wi.litHtmlPolyfillSupport,$f;fl==null||fl(Rn,Fn),(($f=wi.litHtmlVersions)!=null?$f:wi.litHtmlVersions=[]).push("3.0.0");v();v();v();var fo=globalThis,ho=fo.ShadowRoot&&(fo.ShadyCSS===void 0||fo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ml=Symbol(),Pf=new WeakMap,Ei=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==ml)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(ho&&e===void 0){let s=r!==void 0&&r.length===1;s&&(e=Pf.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Pf.set(r,e))}return e}toString(){return this.cssText}},kf=i=>new Ei(typeof i=="string"?i:i+"",void 0,ml),B=(i,...e)=>{let r=i.length===1?i[0]:e.reduce((s,a,u)=>s+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+i[u+1],i[0]);return new Ei(r,i,ml)},gl=(i,e)=>{if(ho)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),a=fo.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=r.cssText,i.appendChild(s)}},po=ho?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return kf(r)})(i):i;var{is:Yx,defineProperty:Jx,getOwnPropertyDescriptor:Kx,getOwnPropertyNames:Xx,getOwnPropertySymbols:jx,getPrototypeOf:Qx}=Object,ln=globalThis,Hf=ln.trustedTypes,tE=Hf?Hf.emptyScript:"",vl=ln.reactiveElementPolyfillSupport,bi=(i,e)=>i,yl={toAttribute(i,e){switch(e){case Boolean:i=i?tE:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(s){r=null}}return r}},Gf=(i,e)=>!Yx(i,e),Uf={attribute:!0,type:String,converter:yl,reflect:!1,hasChanged:Gf},zf,Wf;(zf=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Wf=ln.litPropertyMetadata)!=null||(ln.litPropertyMetadata=new WeakMap);var Be=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Uf){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let s=Symbol(),a=this.getPropertyDescriptor(e,s,r);a!==void 0&&Jx(this.prototype,e,a)}}static getPropertyDescriptor(e,r,s){var c;let{get:a,set:u}=(c=Kx(this.prototype,e))!=null?c:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);u.call(this,p),this.requestUpdate(e,m,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:Uf}static _$Ei(){if(this.hasOwnProperty(bi("elementProperties")))return;let e=Qx(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(bi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(bi("properties"))){let r=this.properties,s=[...Xx(r),...jx(r)];for(let a of s)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[s,a]of r)this.elementProperties.set(s,a)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let a=this._$Eu(r,s);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let a of s)r.unshift(po(a))}else e!==void 0&&r.push(po(e));return r}static _$Eu(e,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,s;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return gl(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostConnected)==null?void 0:a.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$EO(e,r){var u;let s=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,s);if(a!==void 0&&s.reflect===!0){let c=(((u=s.converter)==null?void 0:u.toAttribute)!==void 0?s.converter:yl).toAttribute(r,s.type);this._$Em=e,c==null?this.removeAttribute(a):this.setAttribute(a,c),this._$Em=null}}_$AK(e,r){var u;let s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let c=s.getPropertyOptions(a),p=typeof c.converter=="function"?{fromAttribute:c.converter}:((u=c.converter)==null?void 0:u.fromAttribute)!==void 0?c.converter:yl;this._$Em=a,this[a]=p.fromAttribute(r,c.type),this._$Em=null}}requestUpdate(e,r,s,a=!1,u){var c;if(e!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(e)),!((c=s.hasChanged)!=null?c:Gf)(a?u:this[e],r))return;this.C(e,r,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,s){var a;this._$AL.has(e)||this._$AL.set(e,r),s.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return $n(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[u,c]of this._$Ep)this[u]=c;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[u,c]of a)c.wrapped!==!0||this._$AL.has(u)||this[u]===void 0||this.C(u,this[u],c)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(s=this._$ES)==null||s.forEach(a=>{var u;return(u=a.hostUpdate)==null?void 0:u.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostUpdated)==null?void 0:a.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},Bf;Be.elementStyles=[],Be.shadowRootOptions={mode:"open"},Be[bi("elementProperties")]=new Map,Be[bi("finalized")]=new Map,vl==null||vl({ReactiveElement:Be}),((Bf=ln.reactiveElementVersions)!=null?Bf:ln.reactiveElementVersions=[]).push("2.0.0");v();var Si=globalThis,mo=Si.trustedTypes,Vf=mo?mo.createPolicy("lit-html",{createHTML:i=>i}):void 0,jf="$lit$",un=`lit$${(Math.random()+"").slice(9)}$`,Qf="?"+un,eE=`<${Qf}>`,Un=document,Ai=()=>Un.createComment(""),Oi=i=>i===null||typeof i!="object"&&typeof i!="function",th=Array.isArray,nE=i=>th(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",_l=`[ 	
\f\r]`,Ti=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zf=/-->/g,qf=/>/g,kn=RegExp(`>|${_l}(?:([^\\s"'>=/]+)(${_l}*=${_l}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yf=/'/g,Jf=/"/g,eh=/^(?:script|style|textarea|title)$/i,nh=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),M=nh(1),uT=nh(2),zn=Symbol.for("lit-noChange"),Nt=Symbol.for("lit-nothing"),Kf=new WeakMap,Hn=Un.createTreeWalker(Un,129);function rh(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vf!==void 0?Vf.createHTML(e):e}var rE=(i,e)=>{let r=i.length-1,s=[],a,u=e===2?"<svg>":"",c=Ti;for(let p=0;p<r;p++){let m=i[p],_,T,S=-1,N=0;for(;N<m.length&&(c.lastIndex=N,T=c.exec(m),T!==null);)N=c.lastIndex,c===Ti?T[1]==="!--"?c=Zf:T[1]!==void 0?c=qf:T[2]!==void 0?(eh.test(T[2])&&(a=RegExp("</"+T[2],"g")),c=kn):T[3]!==void 0&&(c=kn):c===kn?T[0]===">"?(c=a!=null?a:Ti,S=-1):T[1]===void 0?S=-2:(S=c.lastIndex-T[2].length,_=T[1],c=T[3]===void 0?kn:T[3]==='"'?Jf:Yf):c===Jf||c===Yf?c=kn:c===Zf||c===qf?c=Ti:(c=kn,a=void 0);let I=c===kn&&i[p+1].startsWith("/>")?" ":"";u+=c===Ti?m+eE:S>=0?(s.push(_),m.slice(0,S)+jf+m.slice(S)+un+I):m+un+(S===-2?p:I)}return[rh(i,u+(i[r]||"<?>")+(e===2?"</svg>":"")),s]},Wn=class{constructor({strings:e,_$litType$:r},s){let a;this.parts=[];let u=0,c=0,p=e.length-1,m=this.parts,[_,T]=rE(e,r);if(this.el=Wn.createElement(_,s),Hn.currentNode=this.el.content,r===2){let S=this.el.content.firstChild;S.replaceWith(...S.childNodes)}for(;(a=Hn.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let S of a.getAttributeNames())if(S.endsWith(jf)){let N=T[c++],I=a.getAttribute(S).split(un),L=/([.?@])?(.*)/.exec(N);m.push({type:1,index:u,name:L[2],strings:I,ctor:L[1]==="."?El:L[1]==="?"?bl:L[1]==="@"?Tl:Cr}),a.removeAttribute(S)}else S.startsWith(un)&&(m.push({type:6,index:u}),a.removeAttribute(S));if(eh.test(a.tagName)){let S=a.textContent.split(un),N=S.length-1;if(N>0){a.textContent=mo?mo.emptyScript:"";for(let I=0;I<N;I++)a.append(S[I],Ai()),Hn.nextNode(),m.push({type:2,index:++u});a.append(S[N],Ai())}}}else if(a.nodeType===8)if(a.data===Qf)m.push({type:2,index:u});else{let S=-1;for(;(S=a.data.indexOf(un,S+1))!==-1;)m.push({type:7,index:u}),S+=un.length-1}u++}}static createElement(e,r){let s=Un.createElement("template");return s.innerHTML=e,s}};function Or(i,e,r=i,s){var c,p,m;if(e===zn)return e;let a=s!==void 0?(c=r._$Co)==null?void 0:c[s]:r._$Cl,u=Oi(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),u===void 0?a=void 0:(a=new u(i),a._$AT(i,r,s)),s!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[s]=a:r._$Cl=a),a!==void 0&&(e=Or(i,a._$AS(i,e.values),a,s)),e}var xl=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var _;let{el:{content:r},parts:s}=this._$AD,a=((_=e==null?void 0:e.creationScope)!=null?_:Un).importNode(r,!0);Hn.currentNode=a;let u=Hn.nextNode(),c=0,p=0,m=s[0];for(;m!==void 0;){if(c===m.index){let T;m.type===2?T=new Bn(u,u.nextSibling,this,e):m.type===1?T=new m.ctor(u,m.name,m.strings,this,e):m.type===6&&(T=new Sl(u,this,e)),this._$AV.push(T),m=s[++p]}c!==(m==null?void 0:m.index)&&(u=Hn.nextNode(),c++)}return Hn.currentNode=Un,a}p(e){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,r),r+=s.strings.length-2):s._$AI(e[r])),r++}},Bn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,s,a){var u;this.type=2,this._$AH=Nt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=a,this._$Cv=(u=a==null?void 0:a.isConnected)!=null?u:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Or(this,e,r),Oi(e)?e===Nt||e==null||e===""?(this._$AH!==Nt&&this._$AR(),this._$AH=Nt):e!==this._$AH&&e!==zn&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):nE(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Nt&&Oi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Un.createTextNode(e)),this._$AH=e}g(e){var u;let{values:r,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Wn.createElement(rh(s.h,s.h[0]),this.options)),s);if(((u=this._$AH)==null?void 0:u._$AD)===a)this._$AH.p(r);else{let c=new xl(a,this),p=c.u(this.options);c.p(r),this.$(p),this._$AH=c}}_$AC(e){let r=Kf.get(e.strings);return r===void 0&&Kf.set(e.strings,r=new Wn(e)),r}T(e){th(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,a=0;for(let u of e)a===r.length?r.push(s=new Bn(this.k(Ai()),this.k(Ai()),this,this.options)):s=r[a],s._$AI(u),a++;a<r.length&&(this._$AR(s&&s._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},Cr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,a,u){this.type=1,this._$AH=Nt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=u,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Nt}_$AI(e,r=this,s,a){let u=this.strings,c=!1;if(u===void 0)e=Or(this,e,r,0),c=!Oi(e)||e!==this._$AH&&e!==zn,c&&(this._$AH=e);else{let p=e,m,_;for(e=u[0],m=0;m<u.length-1;m++)_=Or(this,p[s+m],r,m),_===zn&&(_=this._$AH[m]),c||(c=!Oi(_)||_!==this._$AH[m]),_===Nt?e=Nt:e!==Nt&&(e+=(_!=null?_:"")+u[m+1]),this._$AH[m]=_}c&&!a&&this.j(e)}j(e){e===Nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},El=class extends Cr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Nt?void 0:e}},bl=class extends Cr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Nt)}},Tl=class extends Cr{constructor(e,r,s,a,u){super(e,r,s,a,u),this.type=5}_$AI(e,r=this){var c;if((e=(c=Or(this,e,r,0))!=null?c:Nt)===zn)return;let s=this._$AH,a=e===Nt&&s!==Nt||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,u=e!==Nt&&(s===Nt||a);a&&this.element.removeEventListener(this.name,this,s),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,s;typeof this._$AH=="function"?this._$AH.call((s=(r=this.options)==null?void 0:r.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}},Sl=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Or(this,e)}};var wl=Si.litHtmlPolyfillSupport,Xf;wl==null||wl(Wn,Bn),((Xf=Si.litHtmlVersions)!=null?Xf:Si.litHtmlVersions=[]).push("3.0.0");var ih=(i,e,r)=>{var u,c;let s=(u=r==null?void 0:r.renderBefore)!=null?u:e,a=s._$litPart$;if(a===void 0){let p=(c=r==null?void 0:r.renderBefore)!=null?c:null;s._$litPart$=a=new Bn(e.insertBefore(Ai(),p),p,void 0,r!=null?r:{})}return a._$AI(i),a};var G=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r,s;let e=super.createRenderRoot();return(s=(r=this.renderOptions).renderBefore)!=null||(r.renderBefore=e.firstChild),e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ih(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return zn}},sh;G._$litElement$=!0,G["finalized"]=!0,(sh=globalThis.litElementHydrateSupport)==null||sh.call(globalThis,{LitElement:G});var Al=globalThis.litElementPolyfillSupport;Al==null||Al({LitElement:G});var oh;((oh=globalThis.litElementVersions)!=null?oh:globalThis.litElementVersions=[]).push("4.0.0");v();v();v();var Q=i=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};v();v();v();v();v();v();v();v();v();var Gn=class extends G{render(){return M` <div>Hello from SuperViz, ${this.name}</div> `}};Gn.properties={name:{type:String}},Gn.styles=B`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `,Gn=j([Q("superviz-hello-world")],Gn);v();v();v();var lh=Hx(ah()),Ol=class{setConfig(e){this.configuration=e}get(e,r){return this.configuration?lh.default.get(this.configuration,e,r):r}},Cl=new Ol;v();v();var $l=B`
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
`;var et=i=>{var r;class e extends i{connectedCallback(){setTimeout(()=>{var p,m;let a=document.getElementById("superviz-style"),u=this.createCustomColors(),c=document.createElement("style");c.innerHTML=(a==null?void 0:a.innerHTML)||"",(p=this.shadowRoot)==null||p.appendChild(c),u&&((m=this.shadowRoot)==null||m.appendChild(u))}),super.connectedCallback()}createCustomColors(){if(!Cl.get("colors"))return;let a=document.createElement("style"),u=Object.entries(Cl.get("colors")).map(([c,p])=>`--${c}: ${p} !important;`).join(" ");return a.innerHTML=`
      * {
        ${u}
      }
    `,a}emitEvent(a,u,c={composed:!0,bubbles:!0}){let p=new CustomEvent(a,k({detail:u},c));this.dispatchEvent(p)}}return e.styles=[$l,Il,Ll,Ml,(r=i.styles)!=null?r:[]],e};v();var Nl=(u=>(u[u.xs=14]="xs",u[u.sm=18]="sm",u[u.md=24]="md",u[u.lg=36]="lg",u[u.xl=44]="xl",u))(Nl||{});var uh=et(G),iE=[uh.styles],Vn=class extends uh{constructor(){super();this.name="",this.size="md"}get iconSize(){if(!!this.allowSetSize)return Nl[this.size]}render(){return M`
      <i
        class="sv-icon sv-icon-${this.name}_${this.size}"
        style="font-size: ${this.iconSize}px"
      ></i>
    `}};Vn.properties={name:{type:String},size:{type:String},allowSetSize:{type:Boolean}},Vn.styles=[iE,B`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `],Vn=j([Q("superviz-icon")],Vn);v();v();v();v();var vo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yo=i=>(...e)=>({_$litDirective$:i,values:e}),Ir=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,s){this._$Ct=e,this._$AM=r,this._$Ci=s}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var dt=yo(class extends Ir{constructor(i){var e;if(super(i),i.type!==vo.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var s,a;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(u=>u!=="")));for(let u in e)e[u]&&!((s=this.st)!=null&&s.has(u))&&this.it.add(u);return this.render(e)}let r=i.element.classList;for(let u of this.it)u in e||(r.remove(u),this.it.delete(u));for(let u in e){let c=!!e[u];c===this.it.has(u)||((a=this.st)==null?void 0:a.has(u))||(c?(r.add(u),this.it.add(u)):(r.remove(u),this.it.delete(u)))}return We}});v();var ch=B`
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
`;v();var dh=et(G),sE=[dh.styles,ch],Zn=class extends dh{constructor(){super(...arguments);this.menu=void 0;this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let s=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),u=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=s.includes(a),_=s.includes(u),T=s.includes(p);m||_||T||(this.open=!1)};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.callbackSelected=r=>{this.open=!1;let s=this.returnTo?r[this.returnTo]:r;this.emitEvent("selected",s,{bubbles:!1,composed:!0})};this.adjustPosition=()=>{this.adjustPositionVertical(),this.adjustPositionHorizontal()}}updated(r){if(!!r.has("open")){if(this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown),this.close()}}get dropdownBounds(){this.dropdownContent||(this.dropdownContent=this.shadowRoot.querySelector(".dropdown-content"));let r=this.dropdownContent.getBoundingClientRect(),{y:s,height:a,x:u,width:c}=this.menu.getBoundingClientRect();return{top:s,bottom:s+a+4,left:u,right:u+c,height:a+4,width:c,contentX:r.x,contentY:r.y,contentWidth:r.width}}positionVerticalAction(){let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,u=s>a,c=r<0;return u&&this.position.includes("bottom")||c&&this.position.includes("top")?2:!u&&!c&&this.shouldUseOriginalVertical()?1:0}positionHorizontalAction(){if(this.dropdownCovered())return 0;let{right:r,left:s,contentX:a,contentWidth:u,width:c}=this.dropdownBounds,{innerWidth:p}=window,m=r>p,T=s<0||m;if(T&&!this.position.includes("center"))return 2;if(this.position.includes("center")){let S=a+u/2,N=S-c/2<0,I=S+c/2>p;if(N||I)return 2}return!T&&this.shouldUseOriginalHorizontal()?1:this.shouldCenter()&&this.position!==this.originalPosition&&!this.position.includes("center")?3:0}dropdownCovered(){let{left:r,right:s}=this.dropdownBounds,{innerWidth:a}=window;if(this.position.includes("center"))return!1;let u=s>a&&this.position.includes("left"),c=r<0&&this.position.includes("right");return u||c}shouldCenter(){let{contentX:r,contentWidth:s,width:a}=this.dropdownBounds,u=r+s/2,c=u-a/2<0,p=u+a/2>window.innerWidth;return!(c||p)}shouldUseOriginalVertical(){let{height:r,contentY:s}=this.dropdownBounds,{innerHeight:a}=window,u=s+r;return this.originalPosition.includes("bottom")?r+u<a:s-r>0}shouldUseOriginalHorizontal(){let{width:r,contentX:s}=this.dropdownBounds,{innerWidth:a}=window,u=s+r;return this.position===this.originalPosition?!1:this.originalPosition.includes("center")?u<a&&s-r>0:this.originalPosition.includes("left")?s-r>0:u<a}adjustPositionVertical(){let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,u=this.positionVerticalAction();if(u===0)return;if(u===1){let _=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,_);return}let c=a-s>r?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,c);this.position=m}adjustPositionHorizontal(){let{left:r,right:s,width:a}=this.dropdownBounds,u=r<0,c=s>window.innerWidth,p=this.positionHorizontalAction();if(p===0)return;if(p===1){let L=this.originalPosition.split("-")[1];this.position=this.position.replace(/left|center|right/,L);return}let m=u?s:r,_=(u?a:-a)/2-20,T=m+_;if(u=T<0,c=T+a>window.innerWidth,!(u||c)&&p===3||p===3){let L=this.position.replace(/left|right/,"center");this.position=L;return}if(this.position.includes("center")){let L=u?"right":"left",gt=this.position.replace("center",L);this.position=gt;return}let I=this.position.replace(/left|right/,"center");this.position=I}setMenu(){var r;if(!this.menu){this.menu=this.shadowRoot.querySelector(".menu");let s={rootMargin:"0px",threshold:1},a=new IntersectionObserver(this.adjustPosition,s),u=new ResizeObserver(this.adjustPosition),c=this.menu;a.observe(c),u.observe((r=this.scrollableParent)!=null?r:document.body)}}get scrollableParent(){let r;this.host||(this.host=this.getRootNode().host);let s=this.host;for(;!r;){let a=s==null?void 0:s.parentElement;if(this.isScrollable(a)){r=a;break}if(s=a,!s)break}return r}isScrollable(r){if(!r)return!1;let s=r.scrollHeight>r.clientHeight,a=window.getComputedStyle(r).overflowY,u=window.getComputedStyle(r).overflowX,c=a.indexOf("hidden")!==-1,p=u.indexOf("hidden")!==-1;return s&&!c&&!p}get renderHeader(){return this.name?M` <div class="header">
      <span class="text">${this.name}</span>
      <span class="sv-hr"></span>
    </div>`:M``}toggle(){this.disabled||(this.originalPosition||(this.originalPosition=this.position),this.setMenu(),this.open=!this.open,this.open&&setTimeout(()=>this.adjustPosition()))}render(){var u;let r={menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu--top-left":this.position==="top-left","menu--top-center":this.position==="top-center","menu--top-right":this.position==="top-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right","who-is-online-dropdown":this.name},s=(u=this.icons)==null?void 0:u.map(c=>M`<superviz-icon allowSetSize=${!0} name="${c}" size="sm"></superviz-icon>`),a=this.options.map((c,p)=>{let m={text:!0,"text-bold":!0,active:(c==null?void 0:c[this.returnTo])&&this.active===(c==null?void 0:c[this.returnTo])};return M`<li @click=${()=>this.callbackSelected(c)} class=${dt(m)}>
        ${s==null?void 0:s.at(p)} <span class="option-label">${c[this.label]}</span>
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
    `}};Zn.styles=sE,Zn.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},position:{type:String},options:{type:Array},label:{type:String},returnTo:{type:String},active:{type:[String,Object]},icons:{type:Array},name:{type:String}},Zn=j([Q("superviz-dropdown")],Zn);v();v();v();var _o=B`  
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
`;var fh=et(G),oE=[fh.styles,_o],Lr=class extends fh{constructor(){super(...arguments);this.getContainer=()=>window.document.querySelector("superviz-modal-container");this.createContainer=r=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(r)};this.createModal=({detail:r})=>{this.createContainer(r),window.document.body.appendChild(this.modal)};this.destroyModal=()=>{var r;this.modal=void 0,(r=this.getContainer())==null||r.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};Lr.styles=oE,Lr=j([Q("superviz-modal")],Lr);v();var hh=et(G),aE=[hh.styles,_o],Mr=class extends hh{constructor(){super(...arguments);this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))};this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(r){this.options=r}render(){let r=()=>M`
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
        `;let u=this.options.confirmLabel||"OK",c=this.options.cancelLabel||"Cancel";return this.options.confirm&&this.options.cancel?M`
          <div class="modal--footer">
            <button class="text text-bold btn btn--cancel" @click=${this.closeModal}>${c}</button>
            <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${u}</button>
          </div>
        `:M`
        <div class="modal--footer">
          <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${u}</button>
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
    `}};Mr.styles=aE,Mr=j([Q("superviz-modal-container")],Mr);v();v();v();v();v();var Rl=B`
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
`;v();var Dl=B`
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
`;v();var Pl=B`
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
`;v();var Wl=B`
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
`;v();var Bl=B`
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
`;v();var Gl=B`
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
`;v();var Zl;function ql(i){let e=i.querySelector("#superviz-comments");if(e&&!Zl){let r={childList:!0,attributes:!0,characterData:!0,subtree:!0};Zl=new MutationObserver(s=>{s.forEach(a=>{!a.removedNodes.length||a.removedNodes.forEach(u=>{u.id==="poweredby-footer"&&lE(i)})})}),Zl.observe(e,r)}}function lE(i){let e=document.createElement("div");e.id="poweredby-footer",e.className="footer";let r=document.createElement("div");r.className="powered-by powered-by--horizontal";let s=document.createElement("a");s.href="https://superviz.com/",s.target="_blank",s.className="link";let a=document.createElement("div");a.textContent="Powered by";let u=document.createElement("img");u.width=48,u.height=8.86,u.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",r.appendChild(s),s.appendChild(a),a.appendChild(u),e.appendChild(r);let c=i.getElementById("superviz-comments");c&&c.appendChild(e),ql(i)}var ph=et(G),uE=[ph.styles,Rl,Vl],qn=class extends ph{constructor(){super();this.annotations=[],this.annotationFilter="all",this.waterMarkState=!1}updateAnnotations(r){this.annotations=r}toggle(){this.emitEvent("toggle",{})}waterMarkStatus(r){this.waterMarkState=r}setFilter({detail:r}){let{filter:s}=r;this.annotationFilter=s}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".superviz-comments");!s||(this.waterMarkState&&ql(this.shadowRoot),s.setAttribute("style",this.side))})}render(){let r=[this.open?"container":"container-close","superviz-comments"].join(" "),s=M` <div id="poweredby-footer" class="footer">
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
    `}};qn.styles=uE,qn.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String}},qn=j([Q("superviz-comments")],qn);v();v();var cE=et(G),dE=[cE.styles,Dl],Yn=class extends et(G){constructor(){super();this.side="left"}close(){this.dispatchEvent(new CustomEvent("close"))}render(){return this.side==="left"?M`
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
    `}};Yn.styles=dE,Yn.properties={side:{type:String}},Yn=j([Q("superviz-comments-topbar")],Yn);v();var mh=et(G),fE=[mh.styles,Fl],Jn=class extends mh{constructor(){super(...arguments);this.prepareToCreateAnnotation=s=>$n(this,[s],function*({detail:r}){this.annotation=r,yield this.updateComplete,this.emitEvent("comment-input-focus",r)});this.cancelTemporaryAnnotation=()=>{this.annotation=null};this.cancelTemporaryAnnotationEsc=r=>{(r==null?void 0:r.key)==="Escape"&&(this.annotation=null)}}createComment({detail:r}){this.emitEvent("create-annotation",r),this.annotation=null}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.addEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.addEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)})}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.removeEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.removeEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)})}render(){let r={"annotations--comments-input":!0,hidden:!this.annotation};return M`
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
    `}};Jn.styles=fE,Jn.properties={annotation:{type:Object}},Jn=j([Q("superviz-comments-annotations")],Jn);v();v();v();v();var{D:hE}=Ff;var gh=()=>document.createComment(""),Nr=(i,e,r)=>{var u;let s=i._$AA.parentNode,a=e===void 0?i._$AB:e._$AA;if(r===void 0){let c=s.insertBefore(gh(),a),p=s.insertBefore(gh(),a);r=new hE(c,p,i,i.options)}else{let c=r._$AB.nextSibling,p=r._$AM,m=p!==i;if(m){let _;(u=r._$AQ)==null||u.call(r,i),r._$AM=i,r._$AP!==void 0&&(_=i._$AU)!==p._$AU&&r._$AP(_)}if(c!==a||m){let _=r._$AA;for(;_!==c;){let T=_.nextSibling;s.insertBefore(_,a),_=T}}}return r},cn=(i,e,r=i)=>(i._$AI(e,r),i),pE={},vh=(i,e=pE)=>i._$AH=e,yh=i=>i._$AH,xo=i=>{var s;(s=i._$AP)==null||s.call(i,!1,!0);let e=i._$AA,r=i._$AB.nextSibling;for(;e!==r;){let a=e.nextSibling;e.remove(),e=a}};var _h=(i,e,r)=>{let s=new Map;for(let a=e;a<=r;a++)s.set(i[a],a);return s},Rr=yo(class extends Ir{constructor(i){if(super(i),i.type!==vo.CHILD)throw Error("repeat() can only be used in text expressions")}ht(i,e,r){let s;r===void 0?r=e:e!==void 0&&(s=e);let a=[],u=[],c=0;for(let p of i)a[c]=s?s(p,c):c,u[c]=r(p,c),c++;return{values:u,keys:a}}render(i,e,r){return this.ht(i,e,r).values}update(i,[e,r,s]){var gt;let a=yh(i),{values:u,keys:c}=this.ht(e,r,s);if(!Array.isArray(a))return this.dt=c,u;let p=(gt=this.dt)!=null?gt:this.dt=[],m=[],_,T,S=0,N=a.length-1,I=0,L=u.length-1;for(;S<=N&&I<=L;)if(a[S]===null)S++;else if(a[N]===null)N--;else if(p[S]===c[I])m[I]=cn(a[S],u[I]),S++,I++;else if(p[N]===c[L])m[L]=cn(a[N],u[L]),N--,L--;else if(p[S]===c[L])m[L]=cn(a[S],u[L]),Nr(i,m[L+1],a[S]),S++,L--;else if(p[N]===c[I])m[I]=cn(a[N],u[I]),Nr(i,a[S],a[N]),N--,I++;else if(_===void 0&&(_=_h(c,I,L),T=_h(p,S,N)),_.has(p[S]))if(_.has(p[N])){let ut=T.get(c[I]),vt=ut!==void 0?a[ut]:null;if(vt===null){let qt=Nr(i,a[S]);cn(qt,u[I]),m[I]=qt}else m[I]=cn(vt,u[I]),Nr(i,a[S],vt),a[ut]=null;I++}else xo(a[N]),N--;else xo(a[S]),S++;for(;I<=L;){let ut=Nr(i,m[L+1]);cn(ut,u[I]),m[I++]=ut}for(;S<=N;){let ut=a[S++];ut!==null&&xo(ut)}return this.dt=c,vh(i,m),We}});var wh=et(G),mE=[wh.styles,kl],Kn=class extends wh{constructor(){super();this.unselectAnnotation=()=>{this.selectedAnnotation=null};this.unselectAnnotationEsc=r=>{r&&(r==null?void 0:r.key)!=="Escape"||(this.selectedAnnotation=null)};this.selectAnnotation=({detail:r})=>{let{uuid:s}=r;if(this.selectedAnnotation===s){this.selectedAnnotation=null;return}this.selectedAnnotation=s};this.checkLastAnnotation=r=>{var u,c;let s=this.annotations.filter(p=>p.resolved),a=this.annotations.filter(p=>!p.resolved);return this.annotationFilter==="all"?r===((u=s[s.length-1])==null?void 0:u.uuid):r===((c=a[a.length-1])==null?void 0:c.uuid)};this.annotations=[]}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(`[uuid='${this.selectedAnnotation}']`);if(!s)return;let a=this.lastCommentId===this.selectedAnnotation,u=a?0:-150,c=s.getClientRects()[0];!c||(this.scrollBy(0,c.y+u),a&&setTimeout(()=>{this.scrollBy(0,c.y+u)},200))})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("select-annotation",this.selectAnnotation),window.document.body.addEventListener("keyup",this.unselectAnnotationEsc),window.document.body.addEventListener("unselect-annotation",this.unselectAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("select-annotation",this.selectAnnotation),window.document.body.removeEventListener("keyup",this.unselectAnnotationEsc),window.document.body.removeEventListener("unselect-annotation",this.unselectAnnotation)}render(){return M` ${Rr(this.annotations.filter(r=>r.comments.length),r=>r.uuid,r=>M`
        <superviz-comments-annotation-item
          annotation=${JSON.stringify(r)}
          selected="${this.selectedAnnotation}"
          annotationFilter=${this.annotationFilter}
          uuid=${r.uuid}
          isLastComment=${this.checkLastAnnotation(r.uuid)}
        >
        </superviz-comments-annotation-item>
      `)}`}};Kn.styles=mE,Kn.properties={annotations:{type:Object},selectedAnnotation:{type:String},annotationFilter:{type:String}},Kn=j([Q("superviz-comments-content")],Kn);v();v();v();v();v();var Ge=class extends Error{},Eo=class extends Ge{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},bo=class extends Ge{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},To=class extends Ge{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},Ve=class extends Ge{},Dr=class extends Ge{constructor(e){super(`Invalid unit ${e}`)}},Rt=class extends Ge{},we=class extends Ge{constructor(){super("Zone is an abstract class")}};v();v();v();var D="numeric",xe="short",ee="long",dn={year:D,month:D,day:D},$i={year:D,month:xe,day:D},Yl={year:D,month:xe,day:D,weekday:xe},Ii={year:D,month:ee,day:D},Li={year:D,month:ee,day:D,weekday:ee},Mi={hour:D,minute:D},Ni={hour:D,minute:D,second:D},Ri={hour:D,minute:D,second:D,timeZoneName:xe},Di={hour:D,minute:D,second:D,timeZoneName:ee},Fi={hour:D,minute:D,hourCycle:"h23"},Pi={hour:D,minute:D,second:D,hourCycle:"h23"},ki={hour:D,minute:D,second:D,hourCycle:"h23",timeZoneName:xe},Hi={hour:D,minute:D,second:D,hourCycle:"h23",timeZoneName:ee},Ui={year:D,month:D,day:D,hour:D,minute:D},zi={year:D,month:D,day:D,hour:D,minute:D,second:D},Wi={year:D,month:xe,day:D,hour:D,minute:D},Bi={year:D,month:xe,day:D,hour:D,minute:D,second:D},Jl={year:D,month:xe,day:D,weekday:xe,hour:D,minute:D},Gi={year:D,month:ee,day:D,hour:D,minute:D,timeZoneName:xe},Vi={year:D,month:ee,day:D,hour:D,minute:D,second:D,timeZoneName:xe},Zi={year:D,month:ee,day:D,weekday:ee,hour:D,minute:D,timeZoneName:ee},qi={year:D,month:ee,day:D,weekday:ee,hour:D,minute:D,second:D,timeZoneName:ee};v();v();v();v();var Zt=class{get type(){throw new we}get name(){throw new we}get ianaName(){return this.name}get isUniversal(){throw new we}offsetName(e,r){throw new we}formatOffset(e,r){throw new we}offset(e){throw new we}equals(e){throw new we}get isValid(){throw new we}};var Kl=null,Ce=class extends Zt{static get instance(){return Kl===null&&(Kl=new Ce),Kl}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:s}){return Ao(e,r,s)}formatOffset(e,r){return fn(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}};v();var Co={};function gE(i){return Co[i]||(Co[i]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:i,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Co[i]}var vE={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function yE(i,e){let r=i.format(e).replace(/\u200E/g,""),s=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,a,u,c,p,m,_,T]=s;return[c,a,u,p,m,_,T]}function _E(i,e){let r=i.formatToParts(e),s=[];for(let a=0;a<r.length;a++){let{type:u,value:c}=r[a],p=vE[u];u==="era"?s[p]=c:Y(p)||(s[p]=parseInt(c,10))}return s}var Oo={},Ct=class extends Zt{static create(e){return Oo[e]||(Oo[e]=new Ct(e)),Oo[e]}static resetCache(){Oo={},Co={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(r){return!1}}constructor(e){super(),this.zoneName=e,this.valid=Ct.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:s}){return Ao(e,r,s,this.name)}formatOffset(e,r){return fn(this.offset(e),r)}offset(e){let r=new Date(e);if(isNaN(r))return NaN;let s=gE(this.name),[a,u,c,p,m,_,T]=s.formatToParts?_E(s,r):yE(s,r);p==="BC"&&(a=-Math.abs(a)+1);let N=Fr({year:a,month:u,day:c,hour:m===24?0:m,minute:_,second:T,millisecond:0}),I=+r,L=I%1e3;return I-=L>=0?L:1e3+L,(N-I)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}};v();var xh={};function wE(i,e={}){let r=JSON.stringify([i,e]),s=xh[r];return s||(s=new Intl.ListFormat(i,e),xh[r]=s),s}var Xl={};function jl(i,e={}){let r=JSON.stringify([i,e]),s=Xl[r];return s||(s=new Intl.DateTimeFormat(i,e),Xl[r]=s),s}var Ql={};function xE(i,e={}){let r=JSON.stringify([i,e]),s=Ql[r];return s||(s=new Intl.NumberFormat(i,e),Ql[r]=s),s}var tu={};function EE(i,e={}){let c=e,{base:r}=c,s=al(c,["base"]),a=JSON.stringify([i,s]),u=tu[a];return u||(u=new Intl.RelativeTimeFormat(i,e),tu[a]=u),u}var Yi=null;function bE(){return Yi||(Yi=new Intl.DateTimeFormat().resolvedOptions().locale,Yi)}function TE(i){let e=i.indexOf("-x-");e!==-1&&(i=i.substring(0,e));let r=i.indexOf("-u-");if(r===-1)return[i];{let s,a;try{s=jl(i).resolvedOptions(),a=i}catch(p){let m=i.substring(0,r);s=jl(m).resolvedOptions(),a=m}let{numberingSystem:u,calendar:c}=s;return[a,u,c]}}function SE(i,e,r){return(r||e)&&(i.includes("-u-")||(i+="-u"),r&&(i+=`-ca-${r}`),e&&(i+=`-nu-${e}`)),i}function AE(i){let e=[];for(let r=1;r<=12;r++){let s=H.utc(2009,r,1);e.push(i(s))}return e}function OE(i){let e=[];for(let r=1;r<=7;r++){let s=H.utc(2016,11,13+r);e.push(i(s))}return e}function $o(i,e,r,s){let a=i.listingMode();return a==="error"?null:a==="en"?r(e):s(e)}function CE(i){return i.numberingSystem&&i.numberingSystem!=="latn"?!1:i.numberingSystem==="latn"||!i.locale||i.locale.startsWith("en")||new Intl.DateTimeFormat(i.intl).resolvedOptions().numberingSystem==="latn"}var eu=class{constructor(e,r,s){this.padTo=s.padTo||0,this.floor=s.floor||!1;let p=s,{padTo:a,floor:u}=p,c=al(p,["padTo","floor"]);if(!r||Object.keys(c).length>0){let m=k({useGrouping:!1},s);s.padTo>0&&(m.minimumIntegerDigits=s.padTo),this.inf=xE(e,m)}}format(e){if(this.inf){let r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{let r=this.floor?Math.floor(e):Pr(e,3);return wt(r,this.padTo)}}},nu=class{constructor(e,r,s){this.opts=s,this.originalZone=void 0;let a;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){let c=-1*(e.offset/60),p=c>=0?`Etc/GMT+${c}`:`Etc/GMT${c}`;e.offset!==0&&Ct.create(p).valid?(a=p,this.dt=e):(a="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,a=e.zone.name):(a="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);let u=k({},this.opts);u.timeZone=u.timeZone||a,this.dtf=jl(r,u)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){let s=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return Lt(k({},r),{value:s})}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},ru=class{constructor(e,r,s){this.opts=k({style:"long"},s),!r&&Io()&&(this.rtf=EE(e,s))}format(e,r){return this.rtf?this.rtf.format(e,r):Eh(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}},it=class{static fromOpts(e){return it.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,r,s,a=!1){let u=e||lt.defaultLocale,c=u||(a?"en-US":bE()),p=r||lt.defaultNumberingSystem,m=s||lt.defaultOutputCalendar;return new it(c,p,m,u)}static resetCache(){Yi=null,Xl={},Ql={},tu={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:s}={}){return it.create(e,r,s)}constructor(e,r,s,a){let[u,c,p]=TE(e);this.locale=u,this.numberingSystem=r||c||null,this.outputCalendar=s||p||null,this.intl=SE(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=CE(this)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:it.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone(Lt(k({},e),{defaultToEN:!0}))}redefaultToSystem(e={}){return this.clone(Lt(k({},e),{defaultToEN:!1}))}months(e,r=!1){return $o(this,e,iu,()=>{let s=r?{month:e,day:"numeric"}:{month:e},a=r?"format":"standalone";return this.monthsCache[a][e]||(this.monthsCache[a][e]=AE(u=>this.extract(u,s,"month"))),this.monthsCache[a][e]})}weekdays(e,r=!1){return $o(this,e,su,()=>{let s=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},a=r?"format":"standalone";return this.weekdaysCache[a][e]||(this.weekdaysCache[a][e]=OE(u=>this.extract(u,s,"weekday"))),this.weekdaysCache[a][e]})}meridiems(){return $o(this,void 0,()=>ou,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[H.utc(2016,11,13,9),H.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return $o(this,e,au,()=>{let r={era:e};return this.eraCache[e]||(this.eraCache[e]=[H.utc(-40,1,1),H.utc(2017,1,1)].map(s=>this.extract(s,r,"era"))),this.eraCache[e]})}extract(e,r,s){let a=this.dtFormatter(e,r),u=a.formatToParts(),c=u.find(p=>p.type.toLowerCase()===s);return c?c.value:null}numberFormatter(e={}){return new eu(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new nu(e,this.intl,r)}relFormatter(e={}){return new ru(this.intl,this.isEnglish(),e)}listFormatter(e={}){return wE(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}};v();v();var uu=null,xt=class extends Zt{static get utcInstance(){return uu===null&&(uu=new xt(0)),uu}static instance(e){return e===0?xt.utcInstance:new xt(e)}static parseSpecifier(e){if(e){let r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new xt(Xn(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${fn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${fn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return fn(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}};v();var kr=class extends Zt{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function Ee(i,e){let r;if(Y(i)||i===null)return e;if(i instanceof Zt)return i;if(bh(i)){let s=i.toLowerCase();return s==="default"?e:s==="local"||s==="system"?Ce.instance:s==="utc"||s==="gmt"?xt.utcInstance:xt.parseSpecifier(s)||Ct.create(i)}else return $e(i)?xt.instance(i):typeof i=="object"&&"offset"in i&&typeof i.offset=="function"?i:new kr(i)}var Th=()=>Date.now(),Sh="system",Ah=null,Oh=null,Ch=null,$h=60,Ih,lt=class{static get now(){return Th}static set now(e){Th=e}static set defaultZone(e){Sh=e}static get defaultZone(){return Ee(Sh,Ce.instance)}static get defaultLocale(){return Ah}static set defaultLocale(e){Ah=e}static get defaultNumberingSystem(){return Oh}static set defaultNumberingSystem(e){Oh=e}static get defaultOutputCalendar(){return Ch}static set defaultOutputCalendar(e){Ch=e}static get twoDigitCutoffYear(){return $h}static set twoDigitCutoffYear(e){$h=e%100}static get throwOnInvalid(){return Ih}static set throwOnInvalid(e){Ih=e}static resetCaches(){it.resetCache(),Ct.resetCache()}};function Y(i){return typeof i=="undefined"}function $e(i){return typeof i=="number"}function Ji(i){return typeof i=="number"&&i%1===0}function bh(i){return typeof i=="string"}function Lh(i){return Object.prototype.toString.call(i)==="[object Date]"}function Io(){try{return typeof Intl!="undefined"&&!!Intl.RelativeTimeFormat}catch(i){return!1}}function Mh(i){return Array.isArray(i)?i:[i]}function cu(i,e,r){if(i.length!==0)return i.reduce((s,a)=>{let u=[e(a),a];return s&&r(s[0],u[0])===s[0]?s:u},null)[1]}function Nh(i,e){return e.reduce((r,s)=>(r[s]=i[s],r),{})}function hn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Ie(i,e,r){return Ji(i)&&i>=e&&i<=r}function $E(i,e){return i-e*Math.floor(i/e)}function wt(i,e=2){let r=i<0,s;return r?s="-"+(""+-i).padStart(e,"0"):s=(""+i).padStart(e,"0"),s}function Ze(i){if(!(Y(i)||i===null||i===""))return parseInt(i,10)}function pn(i){if(!(Y(i)||i===null||i===""))return parseFloat(i)}function Ki(i){if(!(Y(i)||i===null||i==="")){let e=parseFloat("0."+i)*1e3;return Math.floor(e)}}function Pr(i,e,r=!1){let s=pf(10,e);return(r?Math.trunc:Math.round)(i*s)/s}function jn(i){return i%4===0&&(i%100!==0||i%400===0)}function Qn(i){return jn(i)?366:365}function Hr(i,e){let r=$E(e-1,12)+1,s=i+(e-r)/12;return r===2?jn(s)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Fr(i){let e=Date.UTC(i.year,i.month-1,i.day,i.hour,i.minute,i.second,i.millisecond);return i.year<100&&i.year>=0&&(e=new Date(e),e.setUTCFullYear(i.year,i.month-1,i.day)),+e}function Ur(i){let e=(i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400))%7,r=i-1,s=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7;return e===4||s===3?53:52}function Xi(i){return i>99?i:i>lt.twoDigitCutoffYear?1900+i:2e3+i}function Ao(i,e,r,s=null){let a=new Date(i),u={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};s&&(u.timeZone=s);let c=k({timeZoneName:e},u),p=new Intl.DateTimeFormat(r,c).formatToParts(a).find(m=>m.type.toLowerCase()==="timezonename");return p?p.value:null}function Xn(i,e){let r=parseInt(i,10);Number.isNaN(r)&&(r=0);let s=parseInt(e,10)||0,a=r<0||Object.is(r,-0)?-s:s;return r*60+a}function du(i){let e=Number(i);if(typeof i=="boolean"||i===""||Number.isNaN(e))throw new Rt(`Invalid unit value ${i}`);return e}function zr(i,e){let r={};for(let s in i)if(hn(i,s)){let a=i[s];if(a==null)continue;r[e(s)]=du(a)}return r}function fn(i,e){let r=Math.trunc(Math.abs(i/60)),s=Math.trunc(Math.abs(i%60)),a=i>=0?"+":"-";switch(e){case"short":return`${a}${wt(r,2)}:${wt(s,2)}`;case"narrow":return`${a}${r}${s>0?`:${s}`:""}`;case"techie":return`${a}${wt(r,2)}${wt(s,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function ji(i){return Nh(i,["hour","minute","second","millisecond"])}var IE=["January","February","March","April","May","June","July","August","September","October","November","December"],fu=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],LE=["J","F","M","A","M","J","J","A","S","O","N","D"];function iu(i){switch(i){case"narrow":return[...LE];case"short":return[...fu];case"long":return[...IE];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var hu=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],pu=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ME=["M","T","W","T","F","S","S"];function su(i){switch(i){case"narrow":return[...ME];case"short":return[...pu];case"long":return[...hu];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var ou=["AM","PM"],NE=["Before Christ","Anno Domini"],RE=["BC","AD"],DE=["B","A"];function au(i){switch(i){case"narrow":return[...DE];case"short":return[...RE];case"long":return[...NE];default:return null}}function Rh(i){return ou[i.hour<12?0:1]}function Dh(i,e){return su(e)[i.weekday-1]}function Fh(i,e){return iu(e)[i.month-1]}function Ph(i,e){return au(e)[i.year<0?0:1]}function Eh(i,e,r="always",s=!1){let a={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},u=["hours","minutes","seconds"].indexOf(i)===-1;if(r==="auto"&&u){let S=i==="days";switch(e){case 1:return S?"tomorrow":`next ${a[i][0]}`;case-1:return S?"yesterday":`last ${a[i][0]}`;case 0:return S?"today":`this ${a[i][0]}`;default:}}let c=Object.is(e,-0)||e<0,p=Math.abs(e),m=p===1,_=a[i],T=s?m?_[1]:_[2]||_[1]:m?a[i][0]:i;return c?`${p} ${T} ago`:`in ${p} ${T}`}function kh(i,e){let r="";for(let s of i)s.literal?r+=s.val:r+=e(s.val);return r}var FE={D:dn,DD:$i,DDD:Ii,DDDD:Li,t:Mi,tt:Ni,ttt:Ri,tttt:Di,T:Fi,TT:Pi,TTT:ki,TTTT:Hi,f:Ui,ff:Wi,fff:Gi,ffff:Zi,F:zi,FF:Bi,FFF:Vi,FFFF:qi},Et=class{static create(e,r={}){return new Et(e,r)}static parseFormat(e){let r=null,s="",a=!1,u=[];for(let c=0;c<e.length;c++){let p=e.charAt(c);p==="'"?(s.length>0&&u.push({literal:a||/^\s+$/.test(s),val:s}),r=null,s="",a=!a):a||p===r?s+=p:(s.length>0&&u.push({literal:/^\s+$/.test(s),val:s}),s=p,r=p)}return s.length>0&&u.push({literal:a||/^\s+$/.test(s),val:s}),u}static macroTokenToFormatOpts(e){return FE[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,k(k({},this.opts),r)).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,k(k({},this.opts),r))}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return wt(e,r);let s=k({},this.opts);return r>0&&(s.padTo=r),this.loc.numberFormatter(s).format(e)}formatDateTimeFromString(e,r){let s=this.loc.listingMode()==="en",a=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",u=(I,L)=>this.loc.extract(e,I,L),c=I=>e.isOffsetFixed&&e.offset===0&&I.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,I.format):"",p=()=>s?Rh(e):u({hour:"numeric",hourCycle:"h12"},"dayperiod"),m=(I,L)=>s?Fh(e,I):u(L?{month:I}:{month:I,day:"numeric"},"month"),_=(I,L)=>s?Dh(e,I):u(L?{weekday:I}:{weekday:I,month:"long",day:"numeric"},"weekday"),T=I=>{let L=Et.macroTokenToFormatOpts(I);return L?this.formatWithSystemDefault(e,L):I},S=I=>s?Ph(e,I):u({era:I},"era"),N=I=>{switch(I){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return c({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return c({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return c({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return p();case"d":return a?u({day:"numeric"},"day"):this.num(e.day);case"dd":return a?u({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return _("short",!0);case"cccc":return _("long",!0);case"ccccc":return _("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return _("short",!1);case"EEEE":return _("long",!1);case"EEEEE":return _("narrow",!1);case"L":return a?u({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return a?u({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return m("short",!0);case"LLLL":return m("long",!0);case"LLLLL":return m("narrow",!0);case"M":return a?u({month:"numeric"},"month"):this.num(e.month);case"MM":return a?u({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return m("short",!1);case"MMMM":return m("long",!1);case"MMMMM":return m("narrow",!1);case"y":return a?u({year:"numeric"},"year"):this.num(e.year);case"yy":return a?u({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return a?u({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return a?u({year:"numeric"},"year"):this.num(e.year,6);case"G":return S("short");case"GG":return S("long");case"GGGGG":return S("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return T(I)}};return kh(Et.parseFormat(r),N)}formatDurationFromString(e,r){let s=m=>{switch(m[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},a=m=>_=>{let T=s(_);return T?this.num(m.get(T),_.length):_},u=Et.parseFormat(r),c=u.reduce((m,{literal:_,val:T})=>_?m:m.concat(T),[]),p=e.shiftTo(...c.map(s).filter(m=>m));return kh(u,a(p))}};v();var Dt=class{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}};v();var Uh=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Br(...i){let e=i.reduce((r,s)=>r+s.source,"");return RegExp(`^${e}$`)}function Gr(...i){return e=>i.reduce(([r,s,a],u)=>{let[c,p,m]=u(e,a);return[k(k({},r),c),p||s,m]},[{},null,1]).slice(0,2)}function Vr(i,...e){if(i==null)return[null,null];for(let[r,s]of e){let a=r.exec(i);if(a)return s(a)}return[null,null]}function zh(...i){return(e,r)=>{let s={},a;for(a=0;a<i.length;a++)s[i[a]]=Ze(e[r+a]);return[s,null,r+a]}}var Wh=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,PE=`(?:${Wh.source}?(?:\\[(${Uh.source})\\])?)?`,mu=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Bh=RegExp(`${mu.source}${PE}`),gu=RegExp(`(?:T${Bh.source})?`),kE=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,HE=/(\d{4})-?W(\d\d)(?:-?(\d))?/,UE=/(\d{4})-?(\d{3})/,zE=zh("weekYear","weekNumber","weekDay"),WE=zh("year","ordinal"),BE=/(\d{4})-(\d\d)-(\d\d)/,Gh=RegExp(`${mu.source} ?(?:${Wh.source}|(${Uh.source}))?`),GE=RegExp(`(?: ${Gh.source})?`);function Wr(i,e,r){let s=i[e];return Y(s)?r:Ze(s)}function VE(i,e){return[{year:Wr(i,e),month:Wr(i,e+1,1),day:Wr(i,e+2,1)},null,e+3]}function Zr(i,e){return[{hours:Wr(i,e,0),minutes:Wr(i,e+1,0),seconds:Wr(i,e+2,0),milliseconds:Ki(i[e+3])},null,e+4]}function Qi(i,e){let r=!i[e]&&!i[e+1],s=Xn(i[e+1],i[e+2]),a=r?null:xt.instance(s);return[{},a,e+3]}function ts(i,e){let r=i[e]?Ct.create(i[e]):null;return[{},r,e+1]}var ZE=RegExp(`^T?${mu.source}$`),qE=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function YE(i){let[e,r,s,a,u,c,p,m,_]=i,T=e[0]==="-",S=m&&m[0]==="-",N=(I,L=!1)=>I!==void 0&&(L||I&&T)?-I:I;return[{years:N(pn(r)),months:N(pn(s)),weeks:N(pn(a)),days:N(pn(u)),hours:N(pn(c)),minutes:N(pn(p)),seconds:N(pn(m),m==="-0"),milliseconds:N(Ki(_),S)}]}var JE={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function vu(i,e,r,s,a,u,c){let p={year:e.length===2?Xi(Ze(e)):Ze(e),month:fu.indexOf(r)+1,day:Ze(s),hour:Ze(a),minute:Ze(u)};return c&&(p.second=Ze(c)),i&&(p.weekday=i.length>3?hu.indexOf(i)+1:pu.indexOf(i)+1),p}var KE=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function XE(i){let[,e,r,s,a,u,c,p,m,_,T,S]=i,N=vu(e,a,s,r,u,c,p),I;return m?I=JE[m]:_?I=0:I=Xn(T,S),[N,new xt(I)]}function jE(i){return i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var QE=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,tb=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,eb=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Hh(i){let[,e,r,s,a,u,c,p]=i;return[vu(e,a,s,r,u,c,p),xt.utcInstance]}function nb(i){let[,e,r,s,a,u,c,p]=i;return[vu(e,p,r,s,a,u,c),xt.utcInstance]}var rb=Br(kE,gu),ib=Br(HE,gu),sb=Br(UE,gu),ob=Br(Bh),Vh=Gr(VE,Zr,Qi,ts),ab=Gr(zE,Zr,Qi,ts),lb=Gr(WE,Zr,Qi,ts),ub=Gr(Zr,Qi,ts);function Zh(i){return Vr(i,[rb,Vh],[ib,ab],[sb,lb],[ob,ub])}function qh(i){return Vr(jE(i),[KE,XE])}function Yh(i){return Vr(i,[QE,Hh],[tb,Hh],[eb,nb])}function Jh(i){return Vr(i,[qE,YE])}var cb=Gr(Zr);function Kh(i){return Vr(i,[ZE,cb])}var db=Br(BE,GE),fb=Br(Gh),hb=Gr(Zr,Qi,ts);function Xh(i){return Vr(i,[db,Vh],[fb,hb])}var jh="Invalid Duration",tp={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},pb=k({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},tp),ce=146097/400,qr=146097/4800,mb=k({years:{quarters:4,months:12,weeks:ce/7,days:ce,hours:ce*24,minutes:ce*24*60,seconds:ce*24*60*60,milliseconds:ce*24*60*60*1e3},quarters:{months:3,weeks:ce/28,days:ce/4,hours:ce*24/4,minutes:ce*24*60/4,seconds:ce*24*60*60/4,milliseconds:ce*24*60*60*1e3/4},months:{weeks:qr/7,days:qr,hours:qr*24,minutes:qr*24*60,seconds:qr*24*60*60,milliseconds:qr*24*60*60*1e3}},tp),tr=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],gb=tr.slice(0).reverse();function mn(i,e,r=!1){let s={values:r?e.values:k(k({},i.values),e.values||{}),loc:i.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||i.conversionAccuracy,matrix:e.matrix||i.matrix};return new K(s)}function ep(i,e){var s;let r=(s=e.milliseconds)!=null?s:0;for(let a of gb.slice(1))e[a]&&(r+=e[a]*i[a].milliseconds);return r}function Qh(i,e){let r=ep(i,e)<0?-1:1;tr.reduceRight((s,a)=>{if(Y(e[a]))return s;if(s){let u=e[s]*r,c=i[a][s],p=Math.floor(u/c);e[a]+=p*r,e[s]-=p*c*r}return a},null),tr.reduce((s,a)=>{if(Y(e[a]))return s;if(s){let u=e[s]%1;e[s]-=u,e[a]+=u*i[s][a]}return a},null)}function vb(i){let e={};for(let[r,s]of Object.entries(i))s!==0&&(e[r]=s);return e}var K=class{constructor(e){let r=e.conversionAccuracy==="longterm"||!1,s=r?mb:pb;e.matrix&&(s=e.matrix),this.values=e.values,this.loc=e.loc||it.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=s,this.isLuxonDuration=!0}static fromMillis(e,r){return K.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new Rt(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new K({values:zr(e,K.normalizeUnit),loc:it.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if($e(e))return K.fromMillis(e);if(K.isDuration(e))return e;if(typeof e=="object")return K.fromObject(e);throw new Rt(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){let[s]=Jh(e);return s?K.fromObject(s,r):K.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){let[s]=Kh(e);return s?K.fromObject(s,r):K.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new Rt("need to specify a reason the Duration is invalid");let s=e instanceof Dt?e:new Dt(e,r);if(lt.throwOnInvalid)throw new To(s);return new K({invalid:s})}static normalizeUnit(e){let r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new Dr(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){let s=Lt(k({},r),{floor:r.round!==!1&&r.floor!==!1});return this.isValid?Et.create(this.loc,s).formatDurationFromString(this,e):jh}toHuman(e={}){if(!this.isValid)return jh;let r=tr.map(s=>{let a=this.values[s];return Y(a)?null:this.loc.numberFormatter(Lt(k({style:"unit",unitDisplay:"long"},e),{unit:s.slice(0,-1)})).format(a)}).filter(s=>s);return this.loc.listFormatter(k({type:"conjunction",style:e.listStyle||"narrow"},e)).format(r)}toObject(){return this.isValid?k({},this.values):{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=Pr(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let r=this.toMillis();return r<0||r>=864e5?null:(e=Lt(k({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e),{includeOffset:!1}),H.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?ep(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e),s={};for(let a of tr)(hn(r.values,a)||hn(this.values,a))&&(s[a]=r.get(a)+this.get(a));return mn(this,{values:s},!0)}minus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;let r={};for(let s of Object.keys(this.values))r[s]=du(e(this.values[s],s));return mn(this,{values:r},!0)}get(e){return this[K.normalizeUnit(e)]}set(e){if(!this.isValid)return this;let r=k(k({},this.values),zr(e,K.normalizeUnit));return mn(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:s,matrix:a}={}){let c={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:a,conversionAccuracy:s};return mn(this,c)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return Qh(this.matrix,e),mn(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=vb(this.normalize().shiftToAll().toObject());return mn(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(c=>K.normalizeUnit(c));let r={},s={},a=this.toObject(),u;for(let c of tr)if(e.indexOf(c)>=0){u=c;let p=0;for(let _ in s)p+=this.matrix[_][c]*s[_],s[_]=0;$e(a[c])&&(p+=a[c]);let m=Math.trunc(p);r[c]=m,s[c]=(p*1e3-m*1e3)/1e3}else $e(a[c])&&(s[c]=a[c]);for(let c in s)s[c]!==0&&(r[u]+=c===u?s[c]:s[c]/this.matrix[u][c]);return Qh(this.matrix,r),mn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return mn(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(s,a){return s===void 0||s===0?a===void 0||a===0:s===a}for(let s of tr)if(!r(this.values[s],e.values[s]))return!1;return!0}};v();var Yr="Invalid Interval";function yb(i,e){return!i||!i.isValid?ht.invalid("missing or invalid start"):!e||!e.isValid?ht.invalid("missing or invalid end"):e<i?ht.invalid("end before start",`The end of an interval must be after its start, but you had start=${i.toISO()} and end=${e.toISO()}`):null}var ht=class{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new Rt("need to specify a reason the Interval is invalid");let s=e instanceof Dt?e:new Dt(e,r);if(lt.throwOnInvalid)throw new bo(s);return new ht({invalid:s})}static fromDateTimes(e,r){let s=Jr(e),a=Jr(r),u=yb(s,a);return u==null?new ht({start:s,end:a}):u}static after(e,r){let s=K.fromDurationLike(r),a=Jr(e);return ht.fromDateTimes(a,a.plus(s))}static before(e,r){let s=K.fromDurationLike(r),a=Jr(e);return ht.fromDateTimes(a.minus(s),a)}static fromISO(e,r){let[s,a]=(e||"").split("/",2);if(s&&a){let u,c;try{u=H.fromISO(s,r),c=u.isValid}catch(_){c=!1}let p,m;try{p=H.fromISO(a,r),m=p.isValid}catch(_){m=!1}if(c&&m)return ht.fromDateTimes(u,p);if(c){let _=K.fromISO(a,r);if(_.isValid)return ht.after(u,_)}else if(m){let _=K.fromISO(s,r);if(_.isValid)return ht.before(p,_)}}return ht.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds"){if(!this.isValid)return NaN;let r=this.start.startOf(e),s=this.end.startOf(e);return Math.floor(s.diff(r,e).get(e))+(s.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?ht.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];let r=e.map(Jr).filter(c=>this.contains(c)).sort(),s=[],{s:a}=this,u=0;for(;a<this.e;){let c=r[u]||this.e,p=+c>+this.e?this.e:c;s.push(ht.fromDateTimes(a,p)),a=p,u+=1}return s}splitBy(e){let r=K.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s}=this,a=1,u,c=[];for(;s<this.e;){let p=this.start.plus(r.mapUnits(m=>m*a));u=+p>+this.e?this.e:p,c.push(ht.fromDateTimes(s,u)),s=u,a+=1}return c}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let r=this.s>e.s?this.s:e.s,s=this.e<e.e?this.e:e.e;return r>=s?null:ht.fromDateTimes(r,s)}union(e){if(!this.isValid)return this;let r=this.s<e.s?this.s:e.s,s=this.e>e.e?this.e:e.e;return ht.fromDateTimes(r,s)}static merge(e){let[r,s]=e.sort((a,u)=>a.s-u.s).reduce(([a,u],c)=>u?u.overlaps(c)||u.abutsStart(c)?[a,u.union(c)]:[a.concat([u]),c]:[a,c],[[],null]);return s&&r.push(s),r}static xor(e){let r=null,s=0,a=[],u=e.map(m=>[{time:m.s,type:"s"},{time:m.e,type:"e"}]),c=Array.prototype.concat(...u),p=c.sort((m,_)=>m.time-_.time);for(let m of p)s+=m.type==="s"?1:-1,s===1?r=m.time:(r&&+r!=+m.time&&a.push(ht.fromDateTimes(r,m.time)),r=null);return ht.merge(a)}difference(...e){return ht.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:Yr}toLocaleString(e=dn,r={}){return this.isValid?Et.create(this.s.loc.clone(r),e).formatInterval(this):Yr}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Yr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Yr}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Yr}toFormat(e,{separator:r=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:Yr}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):K.invalid(this.invalidReason)}mapEndpoints(e){return ht.fromDateTimes(e(this.s),e(this.e))}};v();var qe=class{static hasDST(e=lt.defaultZone){let r=H.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return Ct.isValidZone(e)}static normalizeZone(e){return Ee(e,lt.defaultZone)}static months(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null,outputCalendar:u="gregory"}={}){return(a||it.create(r,s,u)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null,outputCalendar:u="gregory"}={}){return(a||it.create(r,s,u)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null}={}){return(a||it.create(r,s,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null}={}){return(a||it.create(r,s,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return it.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return it.create(r,null,"gregory").eras(e)}static features(){return{relative:Io()}}};v();function np(i,e){let r=a=>a.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),s=r(e)-r(i);return Math.floor(K.fromMillis(s).as("days"))}function _b(i,e,r){let s=[["years",(m,_)=>_.year-m.year],["quarters",(m,_)=>_.quarter-m.quarter+(_.year-m.year)*4],["months",(m,_)=>_.month-m.month+(_.year-m.year)*12],["weeks",(m,_)=>{let T=np(m,_);return(T-T%7)/7}],["days",np]],a={},u=i,c,p;for(let[m,_]of s)r.indexOf(m)>=0&&(c=m,a[m]=_(i,e),p=u.plus(a),p>e?(a[m]--,i=u.plus(a),i>e&&(p=i,a[m]--,i=u.plus(a))):i=p);return[i,a,p,c]}function rp(i,e,r,s){let[a,u,c,p]=_b(i,e,r),m=e-a,_=r.filter(S=>["hours","minutes","seconds","milliseconds"].indexOf(S)>=0);_.length===0&&(c<e&&(c=a.plus({[p]:1})),c!==a&&(u[p]=(u[p]||0)+m/(c-a)));let T=K.fromObject(u,s);return _.length>0?K.fromMillis(m,s).shiftTo(..._).plus(T):T}v();v();var yu={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},ip={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},wb=yu.hanidec.replace(/[\[|\]]/g,"").split("");function sp(i){let e=parseInt(i,10);if(isNaN(e)){e="";for(let r=0;r<i.length;r++){let s=i.charCodeAt(r);if(i[r].search(yu.hanidec)!==-1)e+=wb.indexOf(i[r]);else for(let a in ip){let[u,c]=ip[a];s>=u&&s<=c&&(e+=s-u)}}return parseInt(e,10)}else return e}function de({numberingSystem:i},e=""){return new RegExp(`${yu[i||"latn"]}${e}`)}var xb="missing Intl.DateTimeFormat.formatToParts support";function ot(i,e=r=>r){return{regex:i,deser:([r])=>e(sp(r))}}var Eb=String.fromCharCode(160),lp=`[ ${Eb}]`,up=new RegExp(lp,"g");function bb(i){return i.replace(/\./g,"\\.?").replace(up,lp)}function op(i){return i.replace(/\./g,"").replace(up," ").toLowerCase()}function be(i,e){return i===null?null:{regex:RegExp(i.map(bb).join("|")),deser:([r])=>i.findIndex(s=>op(r)===op(s))+e}}function ap(i,e){return{regex:i,deser:([,r,s])=>Xn(r,s),groups:e}}function Lo(i){return{regex:i,deser:([e])=>e}}function Tb(i){return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Sb(i,e){let r=de(e),s=de(e,"{2}"),a=de(e,"{3}"),u=de(e,"{4}"),c=de(e,"{6}"),p=de(e,"{1,2}"),m=de(e,"{1,3}"),_=de(e,"{1,6}"),T=de(e,"{1,9}"),S=de(e,"{2,4}"),N=de(e,"{4,6}"),I=ut=>({regex:RegExp(Tb(ut.val)),deser:([vt])=>vt,literal:!0}),gt=(ut=>{if(i.literal)return I(ut);switch(ut.val){case"G":return be(e.eras("short"),0);case"GG":return be(e.eras("long"),0);case"y":return ot(_);case"yy":return ot(S,Xi);case"yyyy":return ot(u);case"yyyyy":return ot(N);case"yyyyyy":return ot(c);case"M":return ot(p);case"MM":return ot(s);case"MMM":return be(e.months("short",!0),1);case"MMMM":return be(e.months("long",!0),1);case"L":return ot(p);case"LL":return ot(s);case"LLL":return be(e.months("short",!1),1);case"LLLL":return be(e.months("long",!1),1);case"d":return ot(p);case"dd":return ot(s);case"o":return ot(m);case"ooo":return ot(a);case"HH":return ot(s);case"H":return ot(p);case"hh":return ot(s);case"h":return ot(p);case"mm":return ot(s);case"m":return ot(p);case"q":return ot(p);case"qq":return ot(s);case"s":return ot(p);case"ss":return ot(s);case"S":return ot(m);case"SSS":return ot(a);case"u":return Lo(T);case"uu":return Lo(p);case"uuu":return ot(r);case"a":return be(e.meridiems(),0);case"kkkk":return ot(u);case"kk":return ot(S,Xi);case"W":return ot(p);case"WW":return ot(s);case"E":case"c":return ot(r);case"EEE":return be(e.weekdays("short",!1),1);case"EEEE":return be(e.weekdays("long",!1),1);case"ccc":return be(e.weekdays("short",!0),1);case"cccc":return be(e.weekdays("long",!0),1);case"Z":case"ZZ":return ap(new RegExp(`([+-]${p.source})(?::(${s.source}))?`),2);case"ZZZ":return ap(new RegExp(`([+-]${p.source})(${s.source})?`),2);case"z":return Lo(/[a-z_+-/]{1,256}?/i);case" ":return Lo(/[^\S\n\r]/);default:return I(ut)}})(i)||{invalidReason:xb};return gt.token=i,gt}var Ab={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Ob(i,e,r){let{type:s,value:a}=i;if(s==="literal"){let m=/^\s+$/.test(a);return{literal:!m,val:m?" ":a}}let u=e[s],c=s;s==="hour"&&(e.hour12!=null?c=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?c="hour12":c="hour24":c=r.hour12?"hour12":"hour24");let p=Ab[c];if(typeof p=="object"&&(p=p[u]),p)return{literal:!1,val:p}}function Cb(i){return[`^${i.map(r=>r.regex).reduce((r,s)=>`${r}(${s.source})`,"")}$`,i]}function $b(i,e,r){let s=i.match(e);if(s){let a={},u=1;for(let c in r)if(hn(r,c)){let p=r[c],m=p.groups?p.groups+1:1;!p.literal&&p.token&&(a[p.token.val[0]]=p.deser(s.slice(u,u+m))),u+=m}return[s,a]}else return[s,{}]}function Ib(i){let e=u=>{switch(u){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},r=null,s;return Y(i.z)||(r=Ct.create(i.z)),Y(i.Z)||(r||(r=new xt(i.Z)),s=i.Z),Y(i.q)||(i.M=(i.q-1)*3+1),Y(i.h)||(i.h<12&&i.a===1?i.h+=12:i.h===12&&i.a===0&&(i.h=0)),i.G===0&&i.y&&(i.y=-i.y),Y(i.u)||(i.S=Ki(i.u)),[Object.keys(i).reduce((u,c)=>{let p=e(c);return p&&(u[p]=i[c]),u},{}),r,s]}var _u=null;function Lb(){return _u||(_u=H.fromMillis(1555555555555)),_u}function Mb(i,e){if(i.literal)return i;let r=Et.macroTokenToFormatOpts(i.val),s=Eu(r,e);return s==null||s.includes(void 0)?i:s}function wu(i,e){return Array.prototype.concat(...i.map(r=>Mb(r,e)))}function xu(i,e,r){let s=wu(Et.parseFormat(r),i),a=s.map(c=>Sb(c,i)),u=a.find(c=>c.invalidReason);if(u)return{input:e,tokens:s,invalidReason:u.invalidReason};{let[c,p]=Cb(a),m=RegExp(c,"i"),[_,T]=$b(e,m,p),[S,N,I]=T?Ib(T):[null,null,void 0];if(hn(T,"a")&&hn(T,"H"))throw new Ve("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:s,regex:m,rawMatches:_,matches:T,result:S,zone:N,specificOffset:I}}}function cp(i,e,r){let{result:s,zone:a,specificOffset:u,invalidReason:c}=xu(i,e,r);return[s,a,u,c]}function Eu(i,e){if(!i)return null;let s=Et.create(e,i).dtFormatter(Lb()),a=s.formatToParts(),u=s.resolvedOptions();return a.map(c=>Ob(c,i,u))}v();var dp=[0,31,59,90,120,151,181,212,243,273,304,334],fp=[0,31,60,91,121,152,182,213,244,274,305,335];function fe(i,e){return new Dt("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${i}, which is invalid`)}function hp(i,e,r){let s=new Date(Date.UTC(i,e-1,r));i<100&&i>=0&&s.setUTCFullYear(s.getUTCFullYear()-1900);let a=s.getUTCDay();return a===0?7:a}function pp(i,e,r){return r+(jn(i)?fp:dp)[e-1]}function mp(i,e){let r=jn(i)?fp:dp,s=r.findIndex(u=>u<e),a=e-r[s];return{month:s+1,day:a}}function Mo(i){let{year:e,month:r,day:s}=i,a=pp(e,r,s),u=hp(e,r,s),c=Math.floor((a-u+10)/7),p;return c<1?(p=e-1,c=Ur(p)):c>Ur(e)?(p=e+1,c=1):p=e,k({weekYear:p,weekNumber:c,weekday:u},ji(i))}function bu(i){let{weekYear:e,weekNumber:r,weekday:s}=i,a=hp(e,1,4),u=Qn(e),c=r*7+s-a-3,p;c<1?(p=e-1,c+=Qn(p)):c>u?(p=e+1,c-=Qn(e)):p=e;let{month:m,day:_}=mp(p,c);return k({year:p,month:m,day:_},ji(i))}function No(i){let{year:e,month:r,day:s}=i,a=pp(e,r,s);return k({year:e,ordinal:a},ji(i))}function Tu(i){let{year:e,ordinal:r}=i,{month:s,day:a}=mp(e,r);return k({year:e,month:s,day:a},ji(i))}function gp(i){let e=Ji(i.weekYear),r=Ie(i.weekNumber,1,Ur(i.weekYear)),s=Ie(i.weekday,1,7);return e?r?s?!1:fe("weekday",i.weekday):fe("week",i.week):fe("weekYear",i.weekYear)}function vp(i){let e=Ji(i.year),r=Ie(i.ordinal,1,Qn(i.year));return e?r?!1:fe("ordinal",i.ordinal):fe("year",i.year)}function Su(i){let e=Ji(i.year),r=Ie(i.month,1,12),s=Ie(i.day,1,Hr(i.year,i.month));return e?r?s?!1:fe("day",i.day):fe("month",i.month):fe("year",i.year)}function Au(i){let{hour:e,minute:r,second:s,millisecond:a}=i,u=Ie(e,0,23)||e===24&&r===0&&s===0&&a===0,c=Ie(r,0,59),p=Ie(s,0,59),m=Ie(a,0,999);return u?c?p?m?!1:fe("millisecond",a):fe("second",s):fe("minute",r):fe("hour",e)}var Ou="Invalid DateTime",yp=864e13;function Ro(i){return new Dt("unsupported zone",`the zone "${i.name}" is not supported`)}function Cu(i){return i.weekData===null&&(i.weekData=Mo(i.c)),i.weekData}function er(i,e){let r={ts:i.ts,zone:i.zone,c:i.c,o:i.o,loc:i.loc,invalid:i.invalid};return new H(Lt(k(k({},r),e),{old:r}))}function Sp(i,e,r){let s=i-e*60*1e3,a=r.offset(s);if(e===a)return[s,e];s-=(a-e)*60*1e3;let u=r.offset(s);return a===u?[s,a]:[i-Math.min(a,u)*60*1e3,Math.max(a,u)]}function Do(i,e){i+=e*60*1e3;let r=new Date(i);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Po(i,e,r){return Sp(Fr(i),e,r)}function _p(i,e){let r=i.o,s=i.c.year+Math.trunc(e.years),a=i.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,u=Lt(k({},i.c),{year:s,month:a,day:Math.min(i.c.day,Hr(s,a))+Math.trunc(e.days)+Math.trunc(e.weeks)*7}),c=K.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),p=Fr(u),[m,_]=Sp(p,r,i.zone);return c!==0&&(m+=c,_=i.zone.offset(m)),{ts:m,o:_}}function es(i,e,r,s,a,u){let{setZone:c,zone:p}=r;if(i&&Object.keys(i).length!==0||e){let m=e||p,_=H.fromObject(i,Lt(k({},r),{zone:m,specificOffset:u}));return c?_:_.setZone(p)}else return H.invalid(new Dt("unparsable",`the input "${a}" can't be parsed as ${s}`))}function Fo(i,e,r=!0){return i.isValid?Et.create(it.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(i,e):null}function $u(i,e){let r=i.c.year>9999||i.c.year<0,s="";return r&&i.c.year>=0&&(s+="+"),s+=wt(i.c.year,r?6:4),e?(s+="-",s+=wt(i.c.month),s+="-",s+=wt(i.c.day)):(s+=wt(i.c.month),s+=wt(i.c.day)),s}function wp(i,e,r,s,a,u){let c=wt(i.c.hour);return e?(c+=":",c+=wt(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(c+=":")):c+=wt(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(c+=wt(i.c.second),(i.c.millisecond!==0||!s)&&(c+=".",c+=wt(i.c.millisecond,3))),a&&(i.isOffsetFixed&&i.offset===0&&!u?c+="Z":i.o<0?(c+="-",c+=wt(Math.trunc(-i.o/60)),c+=":",c+=wt(Math.trunc(-i.o%60))):(c+="+",c+=wt(Math.trunc(i.o/60)),c+=":",c+=wt(Math.trunc(i.o%60)))),u&&(c+="["+i.zone.ianaName+"]"),c}var Ap={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Nb={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Rb={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Op=["year","month","day","hour","minute","second","millisecond"],Db=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Fb=["year","ordinal","hour","minute","second","millisecond"];function xp(i){let e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[i.toLowerCase()];if(!e)throw new Dr(i);return e}function Ep(i,e){let r=Ee(e.zone,lt.defaultZone),s=it.fromObject(e),a=lt.now(),u,c;if(Y(i.year))u=a;else{for(let _ of Op)Y(i[_])&&(i[_]=Ap[_]);let p=Su(i)||Au(i);if(p)return H.invalid(p);let m=r.offset(a);[u,c]=Po(i,m,r)}return new H({ts:u,zone:r,loc:s,o:c})}function bp(i,e,r){let s=Y(r.round)?!0:r.round,a=(c,p)=>(c=Pr(c,s||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(c,p)),u=c=>r.calendary?e.hasSame(i,c)?0:e.startOf(c).diff(i.startOf(c),c).get(c):e.diff(i,c).get(c);if(r.unit)return a(u(r.unit),r.unit);for(let c of r.units){let p=u(c);if(Math.abs(p)>=1)return a(p,c)}return a(i>e?-0:0,r.units[r.units.length-1])}function Tp(i){let e={},r;return i.length>0&&typeof i[i.length-1]=="object"?(e=i[i.length-1],r=Array.from(i).slice(0,i.length-1)):r=Array.from(i),[e,r]}var H=class{constructor(e){let r=e.zone||lt.defaultZone,s=e.invalid||(Number.isNaN(e.ts)?new Dt("invalid input"):null)||(r.isValid?null:Ro(r));this.ts=Y(e.ts)?lt.now():e.ts;let a=null,u=null;if(!s)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[a,u]=[e.old.c,e.old.o];else{let p=r.offset(this.ts);a=Do(this.ts,p),s=Number.isNaN(a.year)?new Dt("invalid input"):null,a=s?null:a,u=s?null:p}this._zone=r,this.loc=e.loc||it.create(),this.invalid=s,this.weekData=null,this.c=a,this.o=u,this.isLuxonDateTime=!0}static now(){return new H({})}static local(){let[e,r]=Tp(arguments),[s,a,u,c,p,m,_]=r;return Ep({year:s,month:a,day:u,hour:c,minute:p,second:m,millisecond:_},e)}static utc(){let[e,r]=Tp(arguments),[s,a,u,c,p,m,_]=r;return e.zone=xt.utcInstance,Ep({year:s,month:a,day:u,hour:c,minute:p,second:m,millisecond:_},e)}static fromJSDate(e,r={}){let s=Lh(e)?e.valueOf():NaN;if(Number.isNaN(s))return H.invalid("invalid input");let a=Ee(r.zone,lt.defaultZone);return a.isValid?new H({ts:s,zone:a,loc:it.fromObject(r)}):H.invalid(Ro(a))}static fromMillis(e,r={}){if($e(e))return e<-yp||e>yp?H.invalid("Timestamp out of range"):new H({ts:e,zone:Ee(r.zone,lt.defaultZone),loc:it.fromObject(r)});throw new Rt(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if($e(e))return new H({ts:e*1e3,zone:Ee(r.zone,lt.defaultZone),loc:it.fromObject(r)});throw new Rt("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};let s=Ee(r.zone,lt.defaultZone);if(!s.isValid)return H.invalid(Ro(s));let a=lt.now(),u=Y(r.specificOffset)?s.offset(a):r.specificOffset,c=zr(e,xp),p=!Y(c.ordinal),m=!Y(c.year),_=!Y(c.month)||!Y(c.day),T=m||_,S=c.weekYear||c.weekNumber,N=it.fromObject(r);if((T||p)&&S)throw new Ve("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(_&&p)throw new Ve("Can't mix ordinal dates with month/day");let I=S||c.weekday&&!T,L,gt,ut=Do(a,u);I?(L=Db,gt=Nb,ut=Mo(ut)):p?(L=Fb,gt=Rb,ut=No(ut)):(L=Op,gt=Ap);let vt=!1;for(let yn of L){let ko=c[yn];Y(ko)?vt?c[yn]=gt[yn]:c[yn]=ut[yn]:vt=!0}let qt=I?gp(c):p?vp(c):Su(c),Yt=qt||Au(c);if(Yt)return H.invalid(Yt);let Ye=I?bu(c):p?Tu(c):c,[he,gn]=Po(Ye,u,s),vn=new H({ts:he,zone:s,o:gn,loc:N});return c.weekday&&T&&e.weekday!==vn.weekday?H.invalid("mismatched weekday",`you can't specify both a weekday of ${c.weekday} and a date of ${vn.toISO()}`):vn}static fromISO(e,r={}){let[s,a]=Zh(e);return es(s,a,r,"ISO 8601",e)}static fromRFC2822(e,r={}){let[s,a]=qh(e);return es(s,a,r,"RFC 2822",e)}static fromHTTP(e,r={}){let[s,a]=Yh(e);return es(s,a,r,"HTTP",r)}static fromFormat(e,r,s={}){if(Y(e)||Y(r))throw new Rt("fromFormat requires an input string and a format");let{locale:a=null,numberingSystem:u=null}=s,c=it.fromOpts({locale:a,numberingSystem:u,defaultToEN:!0}),[p,m,_,T]=cp(c,e,r);return T?H.invalid(T):es(p,m,s,`format ${r}`,e,_)}static fromString(e,r,s={}){return H.fromFormat(e,r,s)}static fromSQL(e,r={}){let[s,a]=Xh(e);return es(s,a,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new Rt("need to specify a reason the DateTime is invalid");let s=e instanceof Dt?e:new Dt(e,r);if(lt.throwOnInvalid)throw new Eo(s);return new H({invalid:s})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){let s=Eu(e,it.fromObject(r));return s?s.map(a=>a?a.val:null).join(""):null}static expandFormat(e,r={}){return wu(Et.parseFormat(e),it.fromObject(r)).map(a=>a.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Cu(this).weekYear:NaN}get weekNumber(){return this.isValid?Cu(this).weekNumber:NaN}get weekday(){return this.isValid?Cu(this).weekday:NaN}get ordinal(){return this.isValid?No(this.c).ordinal:NaN}get monthShort(){return this.isValid?qe.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?qe.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?qe.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?qe.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,r=6e4,s=Fr(this.c),a=this.zone.offset(s-e),u=this.zone.offset(s+e),c=this.zone.offset(s-a*r),p=this.zone.offset(s-u*r);if(c===p)return[this];let m=s-c*r,_=s-p*r,T=Do(m,c),S=Do(_,p);return T.hour===S.hour&&T.minute===S.minute&&T.second===S.second&&T.millisecond===S.millisecond?[er(this,{ts:m}),er(this,{ts:_})]:[this]}get isInLeapYear(){return jn(this.year)}get daysInMonth(){return Hr(this.year,this.month)}get daysInYear(){return this.isValid?Qn(this.year):NaN}get weeksInWeekYear(){return this.isValid?Ur(this.weekYear):NaN}resolvedLocaleOptions(e={}){let{locale:r,numberingSystem:s,calendar:a}=Et.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:s,outputCalendar:a}}toUTC(e=0,r={}){return this.setZone(xt.instance(e),r)}toLocal(){return this.setZone(lt.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:s=!1}={}){if(e=Ee(e,lt.defaultZone),e.equals(this.zone))return this;if(e.isValid){let a=this.ts;if(r||s){let u=e.offset(this.ts),c=this.toObject();[a]=Po(c,u,e)}return er(this,{ts:a,zone:e})}else return H.invalid(Ro(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:s}={}){let a=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:s});return er(this,{loc:a})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let r=zr(e,xp),s=!Y(r.weekYear)||!Y(r.weekNumber)||!Y(r.weekday),a=!Y(r.ordinal),u=!Y(r.year),c=!Y(r.month)||!Y(r.day),p=u||c,m=r.weekYear||r.weekNumber;if((p||a)&&m)throw new Ve("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&a)throw new Ve("Can't mix ordinal dates with month/day");let _;s?_=bu(k(k({},Mo(this.c)),r)):Y(r.ordinal)?(_=k(k({},this.toObject()),r),Y(r.day)&&(_.day=Math.min(Hr(_.year,_.month),_.day))):_=Tu(k(k({},No(this.c)),r));let[T,S]=Po(_,this.o,this.zone);return er(this,{ts:T,o:S})}plus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e);return er(this,_p(this,r))}minus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e).negate();return er(this,_p(this,r))}startOf(e){if(!this.isValid)return this;let r={},s=K.normalizeUnit(e);switch(s){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break;case"milliseconds":break}if(s==="weeks"&&(r.weekday=1),s==="quarters"){let a=Math.ceil(this.month/3);r.month=(a-1)*3+1}return this.set(r)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e,r={}){return this.isValid?Et.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):Ou}toLocaleString(e=dn,r={}){return this.isValid?Et.create(this.loc.clone(r),e).formatDateTime(this):Ou}toLocaleParts(e={}){return this.isValid?Et.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:s=!1,includeOffset:a=!0,extendedZone:u=!1}={}){if(!this.isValid)return null;let c=e==="extended",p=$u(this,c);return p+="T",p+=wp(this,c,r,s,a,u),p}toISODate({format:e="extended"}={}){return this.isValid?$u(this,e==="extended"):null}toISOWeekDate(){return Fo(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:s=!0,includePrefix:a=!1,extendedZone:u=!1,format:c="extended"}={}){return this.isValid?(a?"T":"")+wp(this,c==="extended",r,e,s,u):null}toRFC2822(){return Fo(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Fo(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?$u(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:s=!0}={}){let a="HH:mm:ss.SSS";return(r||e)&&(s&&(a+=" "),r?a+="z":e&&(a+="ZZ")),Fo(this,a,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Ou}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let r=k({},this.c);return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",s={}){if(!this.isValid||!e.isValid)return K.invalid("created by diffing an invalid DateTime");let a=k({locale:this.locale,numberingSystem:this.numberingSystem},s),u=Mh(r).map(K.normalizeUnit),c=e.valueOf()>this.valueOf(),p=c?this:e,m=c?e:this,_=rp(p,m,u,a);return c?_.negate():_}diffNow(e="milliseconds",r={}){return this.diff(H.now(),e,r)}until(e){return this.isValid?ht.fromDateTimes(this,e):this}hasSame(e,r){if(!this.isValid)return!1;let s=e.valueOf(),a=this.setZone(e.zone,{keepLocalTime:!0});return a.startOf(r)<=s&&s<=a.endOf(r)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let r=e.base||H.fromObject({},{zone:this.zone}),s=e.padding?this<r?-e.padding:e.padding:0,a=["years","months","days","hours","minutes","seconds"],u=e.unit;return Array.isArray(e.unit)&&(a=e.unit,u=void 0),bp(r,this.plus(s),Lt(k({},e),{numeric:"always",units:a,unit:u}))}toRelativeCalendar(e={}){return this.isValid?bp(e.base||H.fromObject({},{zone:this.zone}),this,Lt(k({},e),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...e){if(!e.every(H.isDateTime))throw new Rt("min requires all arguments be DateTimes");return cu(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(H.isDateTime))throw new Rt("max requires all arguments be DateTimes");return cu(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,s={}){let{locale:a=null,numberingSystem:u=null}=s,c=it.fromOpts({locale:a,numberingSystem:u,defaultToEN:!0});return xu(c,e,r)}static fromStringExplain(e,r,s={}){return H.fromFormatExplain(e,r,s)}static get DATE_SHORT(){return dn}static get DATE_MED(){return $i}static get DATE_MED_WITH_WEEKDAY(){return Yl}static get DATE_FULL(){return Ii}static get DATE_HUGE(){return Li}static get TIME_SIMPLE(){return Mi}static get TIME_WITH_SECONDS(){return Ni}static get TIME_WITH_SHORT_OFFSET(){return Ri}static get TIME_WITH_LONG_OFFSET(){return Di}static get TIME_24_SIMPLE(){return Fi}static get TIME_24_WITH_SECONDS(){return Pi}static get TIME_24_WITH_SHORT_OFFSET(){return ki}static get TIME_24_WITH_LONG_OFFSET(){return Hi}static get DATETIME_SHORT(){return Ui}static get DATETIME_SHORT_WITH_SECONDS(){return zi}static get DATETIME_MED(){return Wi}static get DATETIME_MED_WITH_SECONDS(){return Bi}static get DATETIME_MED_WITH_WEEKDAY(){return Jl}static get DATETIME_FULL(){return Gi}static get DATETIME_FULL_WITH_SECONDS(){return Vi}static get DATETIME_HUGE(){return Zi}static get DATETIME_HUGE_WITH_SECONDS(){return qi}};function Jr(i){if(H.isDateTime(i))return i;if(i&&i.valueOf&&$e(i.valueOf()))return H.fromJSDate(i);if(i&&typeof i=="object")return H.fromObject(i);throw new Rt(`Unknown datetime argument: ${i}, of type ${typeof i}`)}var Cp=et(G),Pb=[Cp.styles,Pl],nr=class extends Cp{constructor(){super();this.updateComment=({detail:r})=>{let{text:s}=r;this.text=s,this.closeEditMode(),this.emitEvent("update-comment",{uuid:this.uuid,text:s})};this.resolveAnnotation=r=>{r.stopPropagation(),this.emitEvent("resolve-annotation",{type:"resolve-annotation",resolved:!this.resolved},{composed:!1,bubbles:!1})};this.confirmDelete=()=>{if(this.deleteCommentModalOpen=!1,this.primaryComment)return this.emitEvent("delete-annotation",{uuid:this.annotationId});this.emitEvent("delete-comment",{annotationId:this.annotationId,uuid:this.uuid})};this.closeEditMode=()=>{this.mode="readonly"};this.resolved=!1}render(){var I;let r=this.annotationFilter==="all"?"resolve":"undo",s=L=>H.fromISO(L).toFormat("yyyy-dd-MM"),a=this.resolvable?"comment-item__resolve":"hidden",u=[{label:"EDIT"},{label:"DELETE"}],c=({detail:L})=>{L==="EDIT"&&(this.mode="editable"),L==="DELETE"&&(this.deleteCommentModalOpen=!0)},p=()=>{this.text.length<120||(this.expandElipsis=!0)},m=()=>{if(this.mode==="editable")return M`
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
      `},T=()=>{this.deleteCommentModalOpen=!1},S={"comment-item":!0,reply:!this.primaryComment},N=!this.expandElipsis&&this.text.length>120?"line-clamp":"";return M`
      <div class=${dt(S)}>
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
              options=${JSON.stringify(u)}
              label="label"
              returnTo="label"
              position="bottom-left"
              @selected=${c}
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
        @close=${T}
        @confirm=${this.confirmDelete}
      >
      </superviz-comments-delete-comments-modal>
    `}};nr.styles=Pb,nr.properties={uuid:{type:String},annotationId:{type:String},avatar:{type:String},username:{type:String},text:{type:String},resolved:{type:Boolean},resolvable:{type:Boolean},createdAt:{type:String},mode:{type:String},deleteCommentModalOpen:{type:Boolean},primaryComment:{type:Boolean},expandElipsis:{type:Boolean},annotationFilter:{type:String}},nr=j([Q("superviz-comments-comment-item")],nr);v();var $p=et(G),kb=[$p.styles,Hl],rr=class extends $p{constructor(){super();this.pinCoordinates=null;this.getCommentInput=()=>this.shadowRoot.getElementById("comment-input--textarea");this.getCommentInputContainer=()=>this.shadowRoot.getElementById("comment-input--container");this.getSendBtn=()=>this.shadowRoot.querySelector(".comment-input--send-btn");this.commentInputFocus=({detail:r})=>{this.pinCoordinates=r,this.getCommentInput().focus()};this.sendEnter=r=>{if(r.key!=="Enter"||r.shiftKey)return;let s=this.getCommentInput(),a=s.value.trim();if(!a)return;let u=this.getSendBtn();this.emitEvent(this.eventType,{text:a,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",u.disabled=!0,this.updateHeight()};this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1})};this.btnActive=!1,this.text=""}connectedCallback(){super.connectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&(window.document.body.addEventListener("comment-input-focus",this.commentInputFocus),this.addEventListener("keyup",this.sendEnter))}disconnectedCallback(){super.disconnectedCallback(),this.eventType==="create-annotation"&&window.document.body.removeEventListener("comment-input-focus",this.commentInputFocus)}updated(r){if(r.has("text")&&this.text.length>0){let s=this.getCommentInput();s.value=this.text,this.updateHeight()}if(r.has("btnActive")){let s=this.getSendBtn();s.disabled=!this.btnActive}}updateHeight(){let r=this.getCommentInput(),s=this.getCommentInputContainer();r.style.height="0px",s.style.height="0px";let a=r.scrollHeight+4,u=r.scrollHeight;r.style.height=`${a}px`,s.style.height=`${u}px`;let c=this.getSendBtn();c.disabled=!(r.value.length>0)}send(r){r.preventDefault();let s=this.getCommentInput(),a=this.getSendBtn(),u=s.value;this.emitEvent(this.eventType,{text:u,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",a.disabled=!0,this.updateHeight()}render(){var a;let r=()=>{if(!!this.editable)return M`
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
    `}};rr.styles=kb,rr.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean},placeholder:{type:String}},rr=j([Q("superviz-comments-comment-input")],rr);v();var Ip=et(G),Hb=[Ip.styles,Wl],ir=class extends Ip{constructor(){super();this.position={x:0,y:0}}get userInitial(){var s,a,u;return(((u=(a=(s=this.annotation)==null?void 0:s.comments[0])==null?void 0:a.participant)==null?void 0:u.name)||"Anonymous")[0].toUpperCase()}emitClick(){document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:this.annotation.uuid}}))}render(){var s,a;let r={"annotation-pin":!0,"annotation-pin--active":this.active};return this.type==="add"?M`
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
    `}};ir.styles=Hb,ir.properties={type:{type:String},annotation:{type:Object},position:{type:Object},active:{type:Boolean}},ir=j([Q("superviz-comments-annotation-pin")],ir);v();var Lp=et(G),Ub=[Lp.styles,Ul],sr=class extends Lp{constructor(){super(...arguments);this.selectAnnotation=()=>{let{uuid:r}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:r}}))};this.resolveAnnotation=({detail:r})=>{let{uuid:s}=this.annotation,{resolved:a,type:u}=r,c=u==="resolve-annotation"&&this.annotationFilter==="all";this.resolved=a,this.emitEvent("resolve-annotation",{uuid:s,resolved:a}),c&&(this.shouldShowUndoResolved=!0)};this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1};this.generateExpantedCommentesTemplate=(r,s)=>s===0?M``:M`
      <superviz-comments-comment-item
        uuid=${r.uuid}
        avatar="https://picsum.photos/200/300"
        username=${r.participant.name||"Anonymous"}
        text=${r.text}
        createdAt=${r.createdAt}
        annotationId=${this.annotation.uuid}
      ></superviz-comments-comment-item>
    `}get filterIsAll(){return this.annotationFilter==="all"}get filterIsResolved(){return this.annotationFilter==="resolved"}get shouldHiddenAnnotation(){return{hidden:this.resolved&&this.filterIsAll||!this.resolved&&this.filterIsResolved}}get replies(){return[...this.annotation.comments].splice(1).length}get repliesSize(){return this.replies>=5?5:this.replies}get replyText(){return this.replies!==1?"replies":"reply"}get isSelected(){return this.selected===this.annotation.uuid}get annotationClasses(){return{"annotation-item":!0,"annotation-item--selected":this.isSelected}}get hrClasses(){return{"sv-hr":!0,hidden:this.isLastAnnotation}}get avatarCommentsClasses(){return{"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&this.replies>1,hidden:!(!this.expandComments&&this.replies>=1)}}get commentsClasses(){return{"comments-container":!0,"comment-item--expand":this.isSelected&&this.expandComments,hidden:!(this.isSelected&&this.expandComments)}}firstUpdated(){this.resolved=this.annotation.resolved}updated(r){if(r.has("selected")){let s=this.selected===this.annotation.uuid;this.expandComments=s}}createComment({detail:r}){let{text:s}=r;this.emitEvent("create-comment",{uuid:this.annotation.uuid,text:s})}generateAvatarCommentsTemplate(){var s,a;let r=[];for(let u=1;u<=this.repliesSize;u++)r.push(M`
        <div class="avatar">
          <p class="text text-bold">
            ${((a=(s=this.annotation.comments[u])==null?void 0:s.participant.name[0])==null?void 0:a.toUpperCase())||"A"}
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
    `:M``}render(){var r,s,a,u,c,p;return M`
      ${this.annotationResolvedTemplate()}

      <div class=${dt(this.shouldHiddenAnnotation)}>
        <div class=${dt(this.annotationClasses)} @click=${this.selectAnnotation}>
          <div>
            <superviz-comments-comment-item
              uuid=${(r=this.annotation.comments)==null?void 0:r[0].uuid}
              annotationId=${this.annotation.uuid}
              username=${((a=(s=this.annotation.comments)==null?void 0:s[0].participant)==null?void 0:a.name)||"Anonymous"}
              text=${(u=this.annotation.comments)==null?void 0:u[0].text}
              createdAt=${(c=this.annotation.comments)==null?void 0:c[0].createdAt}
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
    `}};sr.styles=Ub,sr.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String}},sr=j([Q("superviz-comments-annotation-item")],sr);v();var Mp=et(G),zb=[Mp.styles],or=class extends Mp{constructor(){super(...arguments);this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:M`<span class="text text-big sv-gray-600">Are you sure you want to delete this comment? <br /> This action cannot be undone</span>`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))};this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{!this.open||this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{!this.open||(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(r){r.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){!this.open||(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){let r=()=>{if(!!this.useSlot)return M`<slot name="modal-handler" @click=${this.toggle}></slot>`},s=()=>{if(!!this.open)return M`
        <superviz-modal></superviz-modal>
      `};return M`
      ${r()}
      ${s()}
    `}};or.styles=zb,or.properties={open:{type:Boolean},useSlot:{type:Boolean}},or=j([Q("superviz-comments-delete-comments-modal")],or);v();var Np=et(G),Wb=[Np.styles,zl],Bb=10*1e3,ar=class extends Np{constructor(){super();this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)};this.timeToHide=Bb,this.isCanceled=!1}firstUpdated(){this.setTimer()}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return this.timeToHide===0?M``:this.isCanceled?M``:M`
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
    `}};ar.styles=Wb,ar.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},ar=j([Q("superviz-comments-annotation-resolved")],ar);v();var Rp=et(G),Gb=[Rp.styles,Bl],ns=[{label:"All comments",code:"all"},{label:"Resolved comments",code:"resolved"}],lr=class extends Rp{constructor(){super();this.caret="down"}render(){let r=this.filter==="all"?ns[0].label:ns[1].label,s=({detail:p})=>{this.emitEvent("select",{filter:p}),a()},a=()=>{this.caret=this.caret==="down"?"up":"down"},u=this.filter==="all"?ns[0].code:ns[1].code,c={text:!0,"text-bold":!0,"select-content":!0,"sv-gray-500":this.caret==="down","sv-gray-700":this.caret==="up"};return M`
      <div class="select">
        <div class="select-container">
          <superviz-dropdown
            options=${JSON.stringify(ns)}
            active=${u}
            label="label"
            returnTo="code"
            position="bottom-left"
            right-offset="100px"
            @click=${a}
            @selected=${s}
            @close=${a}
          >
            <div class="content" slot="dropdown">
              <span class=${dt(c)}>${r}</span>
              <superviz-icon name=${this.caret} size="md"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};lr.styles=Gb,lr.properties={filter:{type:String},caret:{type:String}},lr=j([Q("superviz-comments-annotation-filter")],lr);v();var Dp=et(G),Vb=[Dp.styles,Gl],ur=class extends Dp{constructor(){super();this.isHidden=!0,this.positionStyles="top: 20px; left: 20px;",this.shouldHide=!1,this.commentsPosition="left"}toggle(){this.emitEvent("toggle",{})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("toggle-annotation-sidebar",()=>{this.isHidden=!this.isHidden})}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".float-button");if(!s)return;s.setAttribute("style",this.positionStyles);let a=window.document.body.getBoundingClientRect().width,u=s.getBoundingClientRect(),c=320;if(!this.commentsPosition||this.commentsPosition==="left"){this.shouldHide=u.x<c;return}this.shouldHide=a-u.right<c})}render(){let r={"float-button":!0,"hide-button":!this.isHidden&&this.shouldHide};return M` <button @click=${this.toggle} class="${dt(r)}">
      <superviz-icon name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`}};ur.styles=Vb,ur.properties={positionStyles:{type:String},isHidden:{type:Boolean},commentsPosition:{type:String}},ur=j([Q("superviz-comments-button")],ur);v();v();v();v();var rs=(_=>(_.GOTO="go to",_.LOCAL_FOLLOW="follow",_.LOCAL_UNFOLLOW="unfollow",_.FOLLOW="everyone follows me",_.UNFOLLOW="stop followers",_.PRIVATE="private mode",_.LEAVE_PRIVATE="leave private mode",_.GATHER="gather all",_.STOP_GATHER="stop gather all",_))(rs||{});v();v();var Iu=B`
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
    animation: rotate 5s linear infinite;
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

  .following {
    margin-top: 9px;
    font-size: 12px;
    padding: 8px 10px;
    font-family: 'Roboto';
    border-radius: 4px;
    align-self: flex-end;
  }

  .following span {
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
`;v();var Lu=B`
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
  }

  @media (max-width: 780px) {
    .menu--top {
      bottom: 36px;
    }
  }
`;var Fp=et(G),Zb=[Fp.styles,Iu],cr=class extends Fp{constructor(){super();this.onClickOutDropdown=({detail:r})=>{this.open=r.open};this.dropdownOptionsHandler=({detail:r})=>{var m;let{id:s,label:a,name:u,color:c,slotIndex:p}=r;if(a==="go to"&&this.emitEvent("realtime.go-to-participant",{id:s}),["follow","unfollow"].includes(a)){if(((m=this.following)==null?void 0:m.id)===s){this.stopFollowing();return}this.following={name:u,id:s,color:c,slotIndex:p},this.swapParticipantBeingFollowedPosition(),this.emitEvent("realtime.local-follow-participant",{id:s})}if(["private mode","leave private mode"].includes(a)&&(this.isPrivate=a==="private mode",this.emitEvent("realtime.private-mode",{id:s,isPrivate:this.isPrivate}),this.everyoneFollowsMe=!1),["everyone follows me","stop followers"].includes(a)){if(this.following&&this.stopFollowing(),this.everyoneFollowsMe){this.stopEveryoneFollowsMe();return}this.everyoneFollowsMe=!0,this.following=void 0,this.emitEvent("realtime.follow-participant",{id:s,name:u,color:c,slotIndex:p})}a==="gather all"&&this.emitEvent("realtime.gather",{id:s})};this.position="top: 20px; right: 40px;",this.open=!1,this.textColorValues=[2,4,5,7,8,16]}updateParticipants(r){this.participants=r}toggleOpen(){this.open=!this.open}dropdownPosition(r){if(this.participants.length===1)return"bottom-center";if(r===0)return"bottom-right";let s=this.participants.length>4,a=r+1===this.participants.length;return s||!a?"bottom-center":"bottom-left"}renderExcessParticipants(){let r=this.participants.length-4;if(r<=0)return M``;let s=this.participants.slice(4).map(({name:c,color:p,id:m,slotIndex:_,isLocal:T,avatar:S,joinedPresence:N})=>({name:c,color:p,id:m,slotIndex:_,avatar:S,isLocal:T,joinedPresence:N})),a={"superviz-who-is-online__participant":!0,excess_participants:!0,"excess_participants--open":this.open};return M`
      <superviz-who-is-online-dropdown
        label="label"
        returnTo="label"
        position="bottom"
        @selected=${this.dropdownOptionsHandler}
        participants=${JSON.stringify(s)}
        @clickout=${this.onClickOutDropdown}
        ?disableDropdown=${this.disableDropdown}
        following=${JSON.stringify(this.following)}
      >
        <div class=${dt(a)} slot="dropdown" @click=${this.toggleOpen}>
          <div class="superviz-who-is-online__excess" style="color: #AEA9B8;">+${r}</div>
        </div>
      </superviz-who-is-online-dropdown>
    `}stopEveryoneFollowsMe(){this.everyoneFollowsMe=!1,this.emitEvent("realtime.follow-participant",void 0)}getAvatar(r){var a,u;if((a=r.avatar)!=null&&a.imageUrl)return M` <img
        class="superviz-who-is-online__avatar"
        src=${r.avatar.imageUrl}
      />`;let s=this.textColorValues.includes(r.slotIndex)?"#FFFFFF":"#26242A";return M`<div
      class="superviz-who-is-online__avatar"
      style="background-color: ${r.color}; color: ${s}"
    >
      ${(u=r.name)==null?void 0:u.at(0).toUpperCase()}
    </div>`}getOptions(r,s,a){let{id:u,slotIndex:c,name:p,color:m}=r,_={id:u,name:p,color:m,slotIndex:c},{isPrivate:T}=this;return(a?["GATHER",this.everyoneFollowsMe?"UNFOLLOW":"FOLLOW",T?"LEAVE_PRIVATE":"PRIVATE"]:["GOTO",s?"LOCAL_UNFOLLOW":"LOCAL_FOLLOW"]).map(I=>Lt(k({},_),{label:rs[I]}))}getIcons(r,s){return r?["gather",this.everyoneFollowsMe?"send-off":"send","eye_inative"]:["place",s?"send-off":"send"]}putLocalParticipationFirst(){var u;if(this.participants[0].isLocal)return;let r=(u=this.participants)==null?void 0:u.find(({isLocal:c})=>c);if(!r)return;let s=[...this.participants],a=s.indexOf(r);s.splice(a,1),s.unshift(r),this.participants=s}swapParticipantBeingFollowedPosition(){var c;let r=(c=this.participants)==null?void 0:c.findIndex(({id:p})=>{var m;return p===((m=this.following)==null?void 0:m.id)}),s=1;if(r<4||!r)return;let a=[...this.participants],u=a[r];a[r]=a[s],a[s]=u,this.participants=a}stopFollowing(){this.following=void 0,this.emitEvent("realtime.local-follow-participant",{id:void 0})}cancelPrivate(){this.isPrivate=void 0,this.emitEvent("realtime.private-mode",{id:this.localParticipantData.id})}followingMessage(){if(!this.following)return"";let{slotIndex:r,name:s,color:a}=this.following,u=this.textColorValues.includes(r)?"#FFFFFF":"#26242A";return M`<div class="following" style="background-color: ${a}; color: ${u}">
      Following: ${s} <span @click=${this.stopFollowing}>Stop</span>
    </div>`}privateMessage(){if(!this.isPrivate)return"";let{color:r,slotIndex:s}=this.localParticipantData,a=this.textColorValues.includes(s)?"#FFFFFF":"#26242A";return M`<div class="following" style="background-color: ${r}; color: ${a}">
      You are in Private Mode <span @click=${this.cancelPrivate}>Cancel</span>
    </div>`}renderParticipants(){return this.participants?(this.putLocalParticipationFirst(),this.swapParticipantBeingFollowedPosition(),M`<div class="superviz-who-is-online">
      ${Rr(this.participants.slice(0,4),r=>r.id,(r,s)=>{var vt;let{joinedPresence:a,isLocal:u,id:c,name:p,color:m}=r,_=((vt=this.following)==null?void 0:vt.id)===c,T=this.getOptions(r,_,u),S=this.getIcons(u,_),N=this.dropdownPosition(s),I=!a||this.disableDropdown,L={"superviz-who-is-online__participant":!0,"disable-dropdown":I,followed:_,private:u&&this.isPrivate},ut=p+(u?" (you)":"");return M`
            <superviz-dropdown
              options=${JSON.stringify(T)}
              label="label"
              position="${N}"
              @selected=${this.dropdownOptionsHandler}
              icons="${JSON.stringify(S)}"
              name="${ut}"
              ?disabled=${I}
            >
              <div slot="dropdown" class=${dt(L)} style="--border-color: ${m}">
                ${this.getAvatar(r)}
              </div>
            </superviz-dropdown>
          `})}
      ${this.renderExcessParticipants()}
    </div>`):M``}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".wio-content");if(!s)return;let a=this.position.includes("left")?"flex-start":"flex-end",u=`${this.position} align-items: ${a};`;s.setAttribute("style",u)})}render(){return M`<div class="wio-content">
      ${this.renderParticipants()} ${this.followingMessage()} ${this.privateMessage()}
    </div> `}};cr.styles=Zb,cr.properties={position:{type:String},participants:{type:Object},open:{type:Boolean},disableDropdown:{type:Boolean},following:{type:Object},localParticipantColor:{type:String},isPrivate:{type:Boolean},everyoneFollowsMe:{type:Boolean}},cr=j([Q("superviz-who-is-online")],cr);v();v();var Pp=et(G),qb=[Pp.styles,Lu],dr=class extends Pp{constructor(){super();this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let s=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),u=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=s.includes(a),_=s.includes(u),T=s.includes(p);m||_||T||this.close()};this.close=()=>{this.open=!1,this.selected="",this.emitEvent("clickout",{detail:{open:this.open},bubbles:!1,composed:!1})};this.selectParticipant=r=>()=>{this.selected=r};this.adjustPosition=()=>{let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,u=this.positionAction();if(u===0)return;if(u===1){let _=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,_);return}let c=a-s>r?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,c);this.position=m};this.textColorValues=[2,4,5,7,8,16],this.selected=""}updated(r){if(r.has("open")){if(this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown),this.close()}}getAvatar(r){var a,u;if((a=r.avatar)!=null&&a.imageUrl)return M` <img
        class="who-is-online-dropdown__avatar"
        src=${r.avatar.imageUrl}
      />`;let s=this.textColorValues.includes(r.slotIndex)?"#FFFFFF":"#26242A";return M`<div
      class="who-is-online-dropdown__avatar"
      style="background-color: ${r.color}; color: ${s}"
    >
      ${(u=r.name)==null?void 0:u.at(0).toUpperCase()}
    </div>`}renderParticipants(){if(!this.participants)return;let r=["place","send"];return Rr(this.participants,s=>s.id,s=>{var gt,ut;let{id:a,slotIndex:u,joinedPresence:c,isLocal:p,color:m,name:_}=s,T=!c||p||this.disableDropdown,S={"who-is-online-dropdown__content":!0,"who-is-online-dropdown__content--selected":this.selected===a,"disable-dropdown":T,followed:((gt=this.following)==null?void 0:gt.id)===a},N={icon:!0,"hide-icon":T},I=((ut=this.following)==null?void 0:ut.id)===a,L=Object.values(rs).map((vt,qt)=>({label:I&&qt?"UNFOLLOW":vt,id:a,name:_,color:m,slotIndex:u})).slice(0,2);return M`
        <superviz-dropdown
        options=${JSON.stringify(L)}
        label="label"
        position="bottom-right"
        @selected=${this.close}
        icons="${JSON.stringify(r)}"
        ?disabled=${T}
        >
        <div 
          class=${dt(S)} 
          @click=${this.selectParticipant(a)} slot="dropdown">
          <div class="who-is-online-dropdown__participant" style="border-color: 
          ${m}">
              ${this.getAvatar(s)}
            </div>
            <span class="user-name">${_}</span>
            <superviz-icon 
              class=${dt(N)} 
              name="right" 
              color="var(--sv-gray-600)">
          </superviz-icon>
          </div>
        </div>
      </superviz-dropdown>
      `})}setMenu(){var r;if(!this.menu){this.menu=this.shadowRoot.querySelector(".menu");let s={rootMargin:"0px",threshold:1},a=new IntersectionObserver(this.adjustPosition,s),u=new ResizeObserver(this.adjustPosition),c=this.menu;a.observe(c),u.observe((r=this.scrollableParent)!=null?r:document.body)}}get scrollableParent(){let r;this.host||(this.host=this.getRootNode().host);let s=this.host;for(;!r;){let a=s==null?void 0:s.parentElement;if(this.isScrollable(a)){r=a;break}if(s=a,!s)break}return r}isScrollable(r){if(!r)return!1;let s=r.scrollHeight>r.clientHeight,a=window.getComputedStyle(r).overflowY,u=window.getComputedStyle(r).overflowX,c=a.indexOf("hidden")!==-1,p=u.indexOf("hidden")!==-1;return s&&!c&&!p}get dropdownBounds(){this.dropdownContent||(this.dropdownContent=this.shadowRoot.querySelector(".dropdown-content"));let r=this.dropdownContent.getBoundingClientRect(),{y:s,height:a}=this.menu.getBoundingClientRect();return{top:s,bottom:s+a+4,height:a+4,contentY:r.y}}shouldUseOriginalVertical(){let{height:r,contentY:s}=this.dropdownBounds,{innerHeight:a}=window,u=s+r;return this.originalPosition.includes("bottom")?r+u<a:s-r>0}positionAction(){let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,u=s>a,c=r<0;return u&&this.position.includes("bottom")||c&&this.position.includes("top")?2:!u&&!c&&this.shouldUseOriginalVertical()?1:0}toggle(){this.originalPosition||(this.originalPosition=this.position),this.setMenu(),this.open=!this.open,this.open&&(this.selected="",setTimeout(()=>this.adjustPosition()))}get menuClasses(){return{menu:!0,"menu--bottom":this.position==="bottom","menu--top":this.position==="top","menu-open":this.open}}render(){return M`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${dt(this.menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `}};dr.styles=qb,dr.properties={open:{type:Boolean},align:{type:String},position:{type:String},participants:{type:Array},selected:{type:String},disableDropdown:{type:Boolean},following:{type:Object}},dr=j([Q("superviz-who-is-online-dropdown")],dr);export{qn as Comments,lr as CommentsAnnotationFilter,sr as CommentsAnnotationItem,ir as CommentsAnnotationPin,ar as CommentsAnnotationResolved,Jn as CommentsAnnotations,rr as CommentsCommentInput,nr as CommentsCommentItem,Kn as CommentsContent,ur as CommentsFloatButton,Yn as CommentsTopbar,or as DeleteCommentModal,Zn as Dropdown,Gn as HelloWorld,Vn as Icon,Lr as Modal,Mr as ModalContainer,cr as WhoIsOnline,dr as WhoIsOnlineDropdown};
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
