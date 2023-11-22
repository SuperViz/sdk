var Lw=Object.create;var js=Object.defineProperty,Dw=Object.defineProperties,df=Object.getOwnPropertyDescriptor,Rw=Object.getOwnPropertyDescriptors,Fw=Object.getOwnPropertyNames,Xs=Object.getOwnPropertySymbols,Nw=Object.getPrototypeOf,ou=Object.prototype.hasOwnProperty,ff=Object.prototype.propertyIsEnumerable;var hf=Math.pow,cf=(i,e,r)=>e in i?js(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,P=(i,e)=>{for(var r in e||(e={}))ou.call(e,r)&&cf(i,r,e[r]);if(Xs)for(var r of Xs(e))ff.call(e,r)&&cf(i,r,e[r]);return i},Pt=(i,e)=>Dw(i,Rw(e));var au=(i,e)=>{var r={};for(var o in i)ou.call(i,o)&&e.indexOf(o)<0&&(r[o]=i[o]);if(i!=null&&Xs)for(var o of Xs(i))e.indexOf(o)<0&&ff.call(i,o)&&(r[o]=i[o]);return r};var kw=(i,e)=>()=>(i&&(e=i(i=0)),e);var Pw=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var Hw=(i,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Fw(e))!ou.call(i,a)&&a!==r&&js(i,a,{get:()=>e[a],enumerable:!(o=df(e,a))||o.enumerable});return i};var zw=(i,e,r)=>(r=i!=null?Lw(Nw(i)):{},Hw(e||!i||!i.__esModule?js(r,"default",{value:i,enumerable:!0}):r,i));var K=(i,e,r,o)=>{for(var a=o>1?void 0:o?df(e,r):e,c=i.length-1,l;c>=0;c--)(l=i[c])&&(a=(o?l(e,r,a):l(a))||a);return o&&a&&js(e,r,a),a};var On=(i,e,r)=>new Promise((o,a)=>{var c=m=>{try{p(r.next(m))}catch(x){a(x)}},l=m=>{try{p(r.throw(m))}catch(x){a(x)}},p=m=>m.done?o(m.value):Promise.resolve(m.value).then(c,l);p((r=r.apply(i,e)).next())});var v=kw(()=>{});var oh=Pw((Or,Ci)=>{v();(function(){var i,e="4.17.21",r=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",l="__lodash_hash_undefined__",p=500,m="__lodash_placeholder__",x=1,S=2,$=4,R=1,I=2,F=1,Ct=2,mt=4,St=8,fe=16,qt=32,Ye=64,he=128,gn=256,vn=512,yn=30,Po="...",Hp=800,zp=16,Ml=1,Up=2,Wp=3,_n=1/0,Je=9007199254740991,Bp=17976931348623157e292,is=0/0,Se=4294967295,Vp=Se-1,Zp=Se>>>1,Gp=[["ary",he],["bind",F],["bindKey",Ct],["curry",St],["curryRight",fe],["flip",vn],["partial",qt],["partialRight",Ye],["rearg",gn]],fr="[object Arguments]",ss="[object Array]",qp="[object AsyncFunction]",Kr="[object Boolean]",Xr="[object Date]",Yp="[object DOMException]",os="[object Error]",as="[object Function]",Ll="[object GeneratorFunction]",pe="[object Map]",jr="[object Number]",Jp="[object Null]",Me="[object Object]",Dl="[object Promise]",Kp="[object Proxy]",Qr="[object RegExp]",me="[object Set]",ti="[object String]",us="[object Symbol]",Xp="[object Undefined]",ei="[object WeakMap]",jp="[object WeakSet]",ni="[object ArrayBuffer]",hr="[object DataView]",Ho="[object Float32Array]",zo="[object Float64Array]",Uo="[object Int8Array]",Wo="[object Int16Array]",Bo="[object Int32Array]",Vo="[object Uint8Array]",Zo="[object Uint8ClampedArray]",Go="[object Uint16Array]",qo="[object Uint32Array]",Qp=/\b__p \+= '';/g,tm=/\b(__p \+=) '' \+/g,em=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Rl=/&(?:amp|lt|gt|quot|#39);/g,Fl=/[&<>"']/g,nm=RegExp(Rl.source),rm=RegExp(Fl.source),im=/<%-([\s\S]+?)%>/g,sm=/<%([\s\S]+?)%>/g,Nl=/<%=([\s\S]+?)%>/g,om=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,am=/^\w*$/,um=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yo=/[\\^$.*+?()[\]{}|]/g,lm=RegExp(Yo.source),Jo=/^\s+/,cm=/\s/,dm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,fm=/\{\n\/\* \[wrapped with (.+)\] \*/,hm=/,? & /,pm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,mm=/[()=,{}\[\]\/\s]/,gm=/\\(\\)?/g,vm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kl=/\w*$/,ym=/^[-+]0x[0-9a-f]+$/i,_m=/^0b[01]+$/i,xm=/^\[object .+?Constructor\]$/,wm=/^0o[0-7]+$/i,bm=/^(?:0|[1-9]\d*)$/,Em=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ls=/($^)/,Sm=/['\n\r\u2028\u2029\\]/g,cs="\\ud800-\\udfff",Tm="\\u0300-\\u036f",Am="\\ufe20-\\ufe2f",$m="\\u20d0-\\u20ff",Pl=Tm+Am+$m,Hl="\\u2700-\\u27bf",zl="a-z\\xdf-\\xf6\\xf8-\\xff",Cm="\\xac\\xb1\\xd7\\xf7",Om="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Im="\\u2000-\\u206f",Mm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ul="A-Z\\xc0-\\xd6\\xd8-\\xde",Wl="\\ufe0e\\ufe0f",Bl=Cm+Om+Im+Mm,Ko="['\u2019]",Lm="["+cs+"]",Vl="["+Bl+"]",ds="["+Pl+"]",Zl="\\d+",Dm="["+Hl+"]",Gl="["+zl+"]",ql="[^"+cs+Bl+Zl+Hl+zl+Ul+"]",Xo="\\ud83c[\\udffb-\\udfff]",Rm="(?:"+ds+"|"+Xo+")",Yl="[^"+cs+"]",jo="(?:\\ud83c[\\udde6-\\uddff]){2}",Qo="[\\ud800-\\udbff][\\udc00-\\udfff]",pr="["+Ul+"]",Jl="\\u200d",Kl="(?:"+Gl+"|"+ql+")",Fm="(?:"+pr+"|"+ql+")",Xl="(?:"+Ko+"(?:d|ll|m|re|s|t|ve))?",jl="(?:"+Ko+"(?:D|LL|M|RE|S|T|VE))?",Ql=Rm+"?",tc="["+Wl+"]?",Nm="(?:"+Jl+"(?:"+[Yl,jo,Qo].join("|")+")"+tc+Ql+")*",km="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Pm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ec=tc+Ql+Nm,Hm="(?:"+[Dm,jo,Qo].join("|")+")"+ec,zm="(?:"+[Yl+ds+"?",ds,jo,Qo,Lm].join("|")+")",Um=RegExp(Ko,"g"),Wm=RegExp(ds,"g"),ta=RegExp(Xo+"(?="+Xo+")|"+zm+ec,"g"),Bm=RegExp([pr+"?"+Gl+"+"+Xl+"(?="+[Vl,pr,"$"].join("|")+")",Fm+"+"+jl+"(?="+[Vl,pr+Kl,"$"].join("|")+")",pr+"?"+Kl+"+"+Xl,pr+"+"+jl,Pm,km,Zl,Hm].join("|"),"g"),Vm=RegExp("["+Jl+cs+Pl+Wl+"]"),Zm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Gm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],qm=-1,pt={};pt[Ho]=pt[zo]=pt[Uo]=pt[Wo]=pt[Bo]=pt[Vo]=pt[Zo]=pt[Go]=pt[qo]=!0,pt[fr]=pt[ss]=pt[ni]=pt[Kr]=pt[hr]=pt[Xr]=pt[os]=pt[as]=pt[pe]=pt[jr]=pt[Me]=pt[Qr]=pt[me]=pt[ti]=pt[ei]=!1;var ft={};ft[fr]=ft[ss]=ft[ni]=ft[hr]=ft[Kr]=ft[Xr]=ft[Ho]=ft[zo]=ft[Uo]=ft[Wo]=ft[Bo]=ft[pe]=ft[jr]=ft[Me]=ft[Qr]=ft[me]=ft[ti]=ft[us]=ft[Vo]=ft[Zo]=ft[Go]=ft[qo]=!0,ft[os]=ft[as]=ft[ei]=!1;var Ym={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Jm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Km={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Xm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},jm=parseFloat,Qm=parseInt,nc=typeof global=="object"&&global&&global.Object===Object&&global,tg=typeof self=="object"&&self&&self.Object===Object&&self,Ot=nc||tg||Function("return this")(),ea=typeof Or=="object"&&Or&&!Or.nodeType&&Or,xn=ea&&typeof Ci=="object"&&Ci&&!Ci.nodeType&&Ci,rc=xn&&xn.exports===ea,na=rc&&nc.process,ee=function(){try{var _=xn&&xn.require&&xn.require("util").types;return _||na&&na.binding&&na.binding("util")}catch(E){}}(),ic=ee&&ee.isArrayBuffer,sc=ee&&ee.isDate,oc=ee&&ee.isMap,ac=ee&&ee.isRegExp,uc=ee&&ee.isSet,lc=ee&&ee.isTypedArray;function Yt(_,E,b){switch(b.length){case 0:return _.call(E);case 1:return _.call(E,b[0]);case 2:return _.call(E,b[0],b[1]);case 3:return _.call(E,b[0],b[1],b[2])}return _.apply(E,b)}function eg(_,E,b,N){for(var Z=-1,st=_==null?0:_.length;++Z<st;){var Tt=_[Z];E(N,Tt,b(Tt),_)}return N}function ne(_,E){for(var b=-1,N=_==null?0:_.length;++b<N&&E(_[b],b,_)!==!1;);return _}function ng(_,E){for(var b=_==null?0:_.length;b--&&E(_[b],b,_)!==!1;);return _}function cc(_,E){for(var b=-1,N=_==null?0:_.length;++b<N;)if(!E(_[b],b,_))return!1;return!0}function Ke(_,E){for(var b=-1,N=_==null?0:_.length,Z=0,st=[];++b<N;){var Tt=_[b];E(Tt,b,_)&&(st[Z++]=Tt)}return st}function fs(_,E){var b=_==null?0:_.length;return!!b&&mr(_,E,0)>-1}function ra(_,E,b){for(var N=-1,Z=_==null?0:_.length;++N<Z;)if(b(E,_[N]))return!0;return!1}function gt(_,E){for(var b=-1,N=_==null?0:_.length,Z=Array(N);++b<N;)Z[b]=E(_[b],b,_);return Z}function Xe(_,E){for(var b=-1,N=E.length,Z=_.length;++b<N;)_[Z+b]=E[b];return _}function ia(_,E,b,N){var Z=-1,st=_==null?0:_.length;for(N&&st&&(b=_[++Z]);++Z<st;)b=E(b,_[Z],Z,_);return b}function rg(_,E,b,N){var Z=_==null?0:_.length;for(N&&Z&&(b=_[--Z]);Z--;)b=E(b,_[Z],Z,_);return b}function sa(_,E){for(var b=-1,N=_==null?0:_.length;++b<N;)if(E(_[b],b,_))return!0;return!1}var ig=oa("length");function sg(_){return _.split("")}function og(_){return _.match(pm)||[]}function dc(_,E,b){var N;return b(_,function(Z,st,Tt){if(E(Z,st,Tt))return N=st,!1}),N}function hs(_,E,b,N){for(var Z=_.length,st=b+(N?1:-1);N?st--:++st<Z;)if(E(_[st],st,_))return st;return-1}function mr(_,E,b){return E===E?yg(_,E,b):hs(_,fc,b)}function ag(_,E,b,N){for(var Z=b-1,st=_.length;++Z<st;)if(N(_[Z],E))return Z;return-1}function fc(_){return _!==_}function hc(_,E){var b=_==null?0:_.length;return b?ua(_,E)/b:is}function oa(_){return function(E){return E==null?i:E[_]}}function aa(_){return function(E){return _==null?i:_[E]}}function pc(_,E,b,N,Z){return Z(_,function(st,Tt,ct){b=N?(N=!1,st):E(b,st,Tt,ct)}),b}function ug(_,E){var b=_.length;for(_.sort(E);b--;)_[b]=_[b].value;return _}function ua(_,E){for(var b,N=-1,Z=_.length;++N<Z;){var st=E(_[N]);st!==i&&(b=b===i?st:b+st)}return b}function la(_,E){for(var b=-1,N=Array(_);++b<_;)N[b]=E(b);return N}function lg(_,E){return gt(E,function(b){return[b,_[b]]})}function mc(_){return _&&_.slice(0,_c(_)+1).replace(Jo,"")}function Jt(_){return function(E){return _(E)}}function ca(_,E){return gt(E,function(b){return _[b]})}function ri(_,E){return _.has(E)}function gc(_,E){for(var b=-1,N=_.length;++b<N&&mr(E,_[b],0)>-1;);return b}function vc(_,E){for(var b=_.length;b--&&mr(E,_[b],0)>-1;);return b}function cg(_,E){for(var b=_.length,N=0;b--;)_[b]===E&&++N;return N}var dg=aa(Ym),fg=aa(Jm);function hg(_){return"\\"+Xm[_]}function pg(_,E){return _==null?i:_[E]}function gr(_){return Vm.test(_)}function mg(_){return Zm.test(_)}function gg(_){for(var E,b=[];!(E=_.next()).done;)b.push(E.value);return b}function da(_){var E=-1,b=Array(_.size);return _.forEach(function(N,Z){b[++E]=[Z,N]}),b}function yc(_,E){return function(b){return _(E(b))}}function je(_,E){for(var b=-1,N=_.length,Z=0,st=[];++b<N;){var Tt=_[b];(Tt===E||Tt===m)&&(_[b]=m,st[Z++]=b)}return st}function ps(_){var E=-1,b=Array(_.size);return _.forEach(function(N){b[++E]=N}),b}function vg(_){var E=-1,b=Array(_.size);return _.forEach(function(N){b[++E]=[N,N]}),b}function yg(_,E,b){for(var N=b-1,Z=_.length;++N<Z;)if(_[N]===E)return N;return-1}function _g(_,E,b){for(var N=b+1;N--;)if(_[N]===E)return N;return N}function vr(_){return gr(_)?wg(_):ig(_)}function ge(_){return gr(_)?bg(_):sg(_)}function _c(_){for(var E=_.length;E--&&cm.test(_.charAt(E)););return E}var xg=aa(Km);function wg(_){for(var E=ta.lastIndex=0;ta.test(_);)++E;return E}function bg(_){return _.match(ta)||[]}function Eg(_){return _.match(Bm)||[]}var Sg=function _(E){E=E==null?Ot:Qe.defaults(Ot.Object(),E,Qe.pick(Ot,Gm));var b=E.Array,N=E.Date,Z=E.Error,st=E.Function,Tt=E.Math,ct=E.Object,fa=E.RegExp,Tg=E.String,re=E.TypeError,ms=b.prototype,Ag=st.prototype,yr=ct.prototype,gs=E["__core-js_shared__"],vs=Ag.toString,lt=yr.hasOwnProperty,$g=0,xc=function(){var t=/[^.]+$/.exec(gs&&gs.keys&&gs.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ys=yr.toString,Cg=vs.call(ct),Og=Ot._,Ig=fa("^"+vs.call(lt).replace(Yo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_s=rc?E.Buffer:i,tn=E.Symbol,xs=E.Uint8Array,wc=_s?_s.allocUnsafe:i,ws=yc(ct.getPrototypeOf,ct),bc=ct.create,Ec=yr.propertyIsEnumerable,bs=ms.splice,Sc=tn?tn.isConcatSpreadable:i,ii=tn?tn.iterator:i,wn=tn?tn.toStringTag:i,Es=function(){try{var t=An(ct,"defineProperty");return t({},"",{}),t}catch(n){}}(),Mg=E.clearTimeout!==Ot.clearTimeout&&E.clearTimeout,Lg=N&&N.now!==Ot.Date.now&&N.now,Dg=E.setTimeout!==Ot.setTimeout&&E.setTimeout,Ss=Tt.ceil,Ts=Tt.floor,ha=ct.getOwnPropertySymbols,Rg=_s?_s.isBuffer:i,Tc=E.isFinite,Fg=ms.join,Ng=yc(ct.keys,ct),At=Tt.max,Nt=Tt.min,kg=N.now,Pg=E.parseInt,Ac=Tt.random,Hg=ms.reverse,pa=An(E,"DataView"),si=An(E,"Map"),ma=An(E,"Promise"),_r=An(E,"Set"),oi=An(E,"WeakMap"),ai=An(ct,"create"),As=oi&&new oi,xr={},zg=$n(pa),Ug=$n(si),Wg=$n(ma),Bg=$n(_r),Vg=$n(oi),$s=tn?tn.prototype:i,ui=$s?$s.valueOf:i,$c=$s?$s.toString:i;function f(t){if(wt(t)&&!G(t)&&!(t instanceof nt)){if(t instanceof ie)return t;if(lt.call(t,"__wrapped__"))return Cd(t)}return new ie(t)}var wr=function(){function t(){}return function(n){if(!vt(n))return{};if(bc)return bc(n);t.prototype=n;var s=new t;return t.prototype=i,s}}();function Cs(){}function ie(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=i}f.templateSettings={escape:im,evaluate:sm,interpolate:Nl,variable:"",imports:{_:f}},f.prototype=Cs.prototype,f.prototype.constructor=f,ie.prototype=wr(Cs.prototype),ie.prototype.constructor=ie;function nt(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Se,this.__views__=[]}function Zg(){var t=new nt(this.__wrapped__);return t.__actions__=Wt(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Wt(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Wt(this.__views__),t}function Gg(){if(this.__filtered__){var t=new nt(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function qg(){var t=this.__wrapped__.value(),n=this.__dir__,s=G(t),u=n<0,d=s?t.length:0,h=s0(0,d,this.__views__),g=h.start,y=h.end,w=y-g,T=u?y:g-1,A=this.__iteratees__,O=A.length,M=0,k=Nt(w,this.__takeCount__);if(!s||!u&&d==w&&k==w)return Xc(t,this.__actions__);var U=[];t:for(;w--&&M<k;){T+=n;for(var J=-1,W=t[T];++J<O;){var tt=A[J],rt=tt.iteratee,jt=tt.type,Ut=rt(W);if(jt==Up)W=Ut;else if(!Ut){if(jt==Ml)continue t;break t}}U[M++]=W}return U}nt.prototype=wr(Cs.prototype),nt.prototype.constructor=nt;function bn(t){var n=-1,s=t==null?0:t.length;for(this.clear();++n<s;){var u=t[n];this.set(u[0],u[1])}}function Yg(){this.__data__=ai?ai(null):{},this.size=0}function Jg(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}function Kg(t){var n=this.__data__;if(ai){var s=n[t];return s===l?i:s}return lt.call(n,t)?n[t]:i}function Xg(t){var n=this.__data__;return ai?n[t]!==i:lt.call(n,t)}function jg(t,n){var s=this.__data__;return this.size+=this.has(t)?0:1,s[t]=ai&&n===i?l:n,this}bn.prototype.clear=Yg,bn.prototype.delete=Jg,bn.prototype.get=Kg,bn.prototype.has=Xg,bn.prototype.set=jg;function Le(t){var n=-1,s=t==null?0:t.length;for(this.clear();++n<s;){var u=t[n];this.set(u[0],u[1])}}function Qg(){this.__data__=[],this.size=0}function tv(t){var n=this.__data__,s=Os(n,t);if(s<0)return!1;var u=n.length-1;return s==u?n.pop():bs.call(n,s,1),--this.size,!0}function ev(t){var n=this.__data__,s=Os(n,t);return s<0?i:n[s][1]}function nv(t){return Os(this.__data__,t)>-1}function rv(t,n){var s=this.__data__,u=Os(s,t);return u<0?(++this.size,s.push([t,n])):s[u][1]=n,this}Le.prototype.clear=Qg,Le.prototype.delete=tv,Le.prototype.get=ev,Le.prototype.has=nv,Le.prototype.set=rv;function De(t){var n=-1,s=t==null?0:t.length;for(this.clear();++n<s;){var u=t[n];this.set(u[0],u[1])}}function iv(){this.size=0,this.__data__={hash:new bn,map:new(si||Le),string:new bn}}function sv(t){var n=Us(this,t).delete(t);return this.size-=n?1:0,n}function ov(t){return Us(this,t).get(t)}function av(t){return Us(this,t).has(t)}function uv(t,n){var s=Us(this,t),u=s.size;return s.set(t,n),this.size+=s.size==u?0:1,this}De.prototype.clear=iv,De.prototype.delete=sv,De.prototype.get=ov,De.prototype.has=av,De.prototype.set=uv;function En(t){var n=-1,s=t==null?0:t.length;for(this.__data__=new De;++n<s;)this.add(t[n])}function lv(t){return this.__data__.set(t,l),this}function cv(t){return this.__data__.has(t)}En.prototype.add=En.prototype.push=lv,En.prototype.has=cv;function ve(t){var n=this.__data__=new Le(t);this.size=n.size}function dv(){this.__data__=new Le,this.size=0}function fv(t){var n=this.__data__,s=n.delete(t);return this.size=n.size,s}function hv(t){return this.__data__.get(t)}function pv(t){return this.__data__.has(t)}function mv(t,n){var s=this.__data__;if(s instanceof Le){var u=s.__data__;if(!si||u.length<r-1)return u.push([t,n]),this.size=++s.size,this;s=this.__data__=new De(u)}return s.set(t,n),this.size=s.size,this}ve.prototype.clear=dv,ve.prototype.delete=fv,ve.prototype.get=hv,ve.prototype.has=pv,ve.prototype.set=mv;function Cc(t,n){var s=G(t),u=!s&&Cn(t),d=!s&&!u&&on(t),h=!s&&!u&&!d&&Tr(t),g=s||u||d||h,y=g?la(t.length,Tg):[],w=y.length;for(var T in t)(n||lt.call(t,T))&&!(g&&(T=="length"||d&&(T=="offset"||T=="parent")||h&&(T=="buffer"||T=="byteLength"||T=="byteOffset")||ke(T,w)))&&y.push(T);return y}function Oc(t){var n=t.length;return n?t[Aa(0,n-1)]:i}function gv(t,n){return Ws(Wt(t),Sn(n,0,t.length))}function vv(t){return Ws(Wt(t))}function ga(t,n,s){(s!==i&&!ye(t[n],s)||s===i&&!(n in t))&&Re(t,n,s)}function li(t,n,s){var u=t[n];(!(lt.call(t,n)&&ye(u,s))||s===i&&!(n in t))&&Re(t,n,s)}function Os(t,n){for(var s=t.length;s--;)if(ye(t[s][0],n))return s;return-1}function yv(t,n,s,u){return en(t,function(d,h,g){n(u,d,s(d),g)}),u}function Ic(t,n){return t&&Ae(n,It(n),t)}function _v(t,n){return t&&Ae(n,Vt(n),t)}function Re(t,n,s){n=="__proto__"&&Es?Es(t,n,{configurable:!0,enumerable:!0,value:s,writable:!0}):t[n]=s}function va(t,n){for(var s=-1,u=n.length,d=b(u),h=t==null;++s<u;)d[s]=h?i:Xa(t,n[s]);return d}function Sn(t,n,s){return t===t&&(s!==i&&(t=t<=s?t:s),n!==i&&(t=t>=n?t:n)),t}function se(t,n,s,u,d,h){var g,y=n&x,w=n&S,T=n&$;if(s&&(g=d?s(t,u,d,h):s(t)),g!==i)return g;if(!vt(t))return t;var A=G(t);if(A){if(g=a0(t),!y)return Wt(t,g)}else{var O=kt(t),M=O==as||O==Ll;if(on(t))return td(t,y);if(O==Me||O==fr||M&&!d){if(g=w||M?{}:_d(t),!y)return w?Kv(t,_v(g,t)):Jv(t,Ic(g,t))}else{if(!ft[O])return d?t:{};g=u0(t,O,y)}}h||(h=new ve);var k=h.get(t);if(k)return k;h.set(t,g),Yd(t)?t.forEach(function(W){g.add(se(W,n,s,W,t,h))}):Gd(t)&&t.forEach(function(W,tt){g.set(tt,se(W,n,s,tt,t,h))});var U=T?w?ka:Na:w?Vt:It,J=A?i:U(t);return ne(J||t,function(W,tt){J&&(tt=W,W=t[tt]),li(g,tt,se(W,n,s,tt,t,h))}),g}function xv(t){var n=It(t);return function(s){return Mc(s,t,n)}}function Mc(t,n,s){var u=s.length;if(t==null)return!u;for(t=ct(t);u--;){var d=s[u],h=n[d],g=t[d];if(g===i&&!(d in t)||!h(g))return!1}return!0}function Lc(t,n,s){if(typeof t!="function")throw new re(a);return gi(function(){t.apply(i,s)},n)}function ci(t,n,s,u){var d=-1,h=fs,g=!0,y=t.length,w=[],T=n.length;if(!y)return w;s&&(n=gt(n,Jt(s))),u?(h=ra,g=!1):n.length>=r&&(h=ri,g=!1,n=new En(n));t:for(;++d<y;){var A=t[d],O=s==null?A:s(A);if(A=u||A!==0?A:0,g&&O===O){for(var M=T;M--;)if(n[M]===O)continue t;w.push(A)}else h(n,O,u)||w.push(A)}return w}var en=sd(Te),Dc=sd(_a,!0);function wv(t,n){var s=!0;return en(t,function(u,d,h){return s=!!n(u,d,h),s}),s}function Is(t,n,s){for(var u=-1,d=t.length;++u<d;){var h=t[u],g=n(h);if(g!=null&&(y===i?g===g&&!Xt(g):s(g,y)))var y=g,w=h}return w}function bv(t,n,s,u){var d=t.length;for(s=q(s),s<0&&(s=-s>d?0:d+s),u=u===i||u>d?d:q(u),u<0&&(u+=d),u=s>u?0:Kd(u);s<u;)t[s++]=n;return t}function Rc(t,n){var s=[];return en(t,function(u,d,h){n(u,d,h)&&s.push(u)}),s}function Ft(t,n,s,u,d){var h=-1,g=t.length;for(s||(s=c0),d||(d=[]);++h<g;){var y=t[h];n>0&&s(y)?n>1?Ft(y,n-1,s,u,d):Xe(d,y):u||(d[d.length]=y)}return d}var ya=od(),Fc=od(!0);function Te(t,n){return t&&ya(t,n,It)}function _a(t,n){return t&&Fc(t,n,It)}function Ms(t,n){return Ke(n,function(s){return Pe(t[s])})}function Tn(t,n){n=rn(n,t);for(var s=0,u=n.length;t!=null&&s<u;)t=t[$e(n[s++])];return s&&s==u?t:i}function Nc(t,n,s){var u=n(t);return G(t)?u:Xe(u,s(t))}function Ht(t){return t==null?t===i?Xp:Jp:wn&&wn in ct(t)?i0(t):v0(t)}function xa(t,n){return t>n}function Ev(t,n){return t!=null&&lt.call(t,n)}function Sv(t,n){return t!=null&&n in ct(t)}function Tv(t,n,s){return t>=Nt(n,s)&&t<At(n,s)}function wa(t,n,s){for(var u=s?ra:fs,d=t[0].length,h=t.length,g=h,y=b(h),w=1/0,T=[];g--;){var A=t[g];g&&n&&(A=gt(A,Jt(n))),w=Nt(A.length,w),y[g]=!s&&(n||d>=120&&A.length>=120)?new En(g&&A):i}A=t[0];var O=-1,M=y[0];t:for(;++O<d&&T.length<w;){var k=A[O],U=n?n(k):k;if(k=s||k!==0?k:0,!(M?ri(M,U):u(T,U,s))){for(g=h;--g;){var J=y[g];if(!(J?ri(J,U):u(t[g],U,s)))continue t}M&&M.push(U),T.push(k)}}return T}function Av(t,n,s,u){return Te(t,function(d,h,g){n(u,s(d),h,g)}),u}function di(t,n,s){n=rn(n,t),t=Ed(t,n);var u=t==null?t:t[$e(ae(n))];return u==null?i:Yt(u,t,s)}function kc(t){return wt(t)&&Ht(t)==fr}function $v(t){return wt(t)&&Ht(t)==ni}function Cv(t){return wt(t)&&Ht(t)==Xr}function fi(t,n,s,u,d){return t===n?!0:t==null||n==null||!wt(t)&&!wt(n)?t!==t&&n!==n:Ov(t,n,s,u,fi,d)}function Ov(t,n,s,u,d,h){var g=G(t),y=G(n),w=g?ss:kt(t),T=y?ss:kt(n);w=w==fr?Me:w,T=T==fr?Me:T;var A=w==Me,O=T==Me,M=w==T;if(M&&on(t)){if(!on(n))return!1;g=!0,A=!1}if(M&&!A)return h||(h=new ve),g||Tr(t)?gd(t,n,s,u,d,h):n0(t,n,w,s,u,d,h);if(!(s&R)){var k=A&&lt.call(t,"__wrapped__"),U=O&&lt.call(n,"__wrapped__");if(k||U){var J=k?t.value():t,W=U?n.value():n;return h||(h=new ve),d(J,W,s,u,h)}}return M?(h||(h=new ve),r0(t,n,s,u,d,h)):!1}function Iv(t){return wt(t)&&kt(t)==pe}function ba(t,n,s,u){var d=s.length,h=d,g=!u;if(t==null)return!h;for(t=ct(t);d--;){var y=s[d];if(g&&y[2]?y[1]!==t[y[0]]:!(y[0]in t))return!1}for(;++d<h;){y=s[d];var w=y[0],T=t[w],A=y[1];if(g&&y[2]){if(T===i&&!(w in t))return!1}else{var O=new ve;if(u)var M=u(T,A,w,t,n,O);if(!(M===i?fi(A,T,R|I,u,O):M))return!1}}return!0}function Pc(t){if(!vt(t)||f0(t))return!1;var n=Pe(t)?Ig:xm;return n.test($n(t))}function Mv(t){return wt(t)&&Ht(t)==Qr}function Lv(t){return wt(t)&&kt(t)==me}function Dv(t){return wt(t)&&Ys(t.length)&&!!pt[Ht(t)]}function Hc(t){return typeof t=="function"?t:t==null?Zt:typeof t=="object"?G(t)?Wc(t[0],t[1]):Uc(t):uf(t)}function Ea(t){if(!mi(t))return Ng(t);var n=[];for(var s in ct(t))lt.call(t,s)&&s!="constructor"&&n.push(s);return n}function Rv(t){if(!vt(t))return g0(t);var n=mi(t),s=[];for(var u in t)u=="constructor"&&(n||!lt.call(t,u))||s.push(u);return s}function Sa(t,n){return t<n}function zc(t,n){var s=-1,u=Bt(t)?b(t.length):[];return en(t,function(d,h,g){u[++s]=n(d,h,g)}),u}function Uc(t){var n=Ha(t);return n.length==1&&n[0][2]?wd(n[0][0],n[0][1]):function(s){return s===t||ba(s,t,n)}}function Wc(t,n){return Ua(t)&&xd(n)?wd($e(t),n):function(s){var u=Xa(s,t);return u===i&&u===n?ja(s,t):fi(n,u,R|I)}}function Ls(t,n,s,u,d){t!==n&&ya(n,function(h,g){if(d||(d=new ve),vt(h))Fv(t,n,g,s,Ls,u,d);else{var y=u?u(Ba(t,g),h,g+"",t,n,d):i;y===i&&(y=h),ga(t,g,y)}},Vt)}function Fv(t,n,s,u,d,h,g){var y=Ba(t,s),w=Ba(n,s),T=g.get(w);if(T){ga(t,s,T);return}var A=h?h(y,w,s+"",t,n,g):i,O=A===i;if(O){var M=G(w),k=!M&&on(w),U=!M&&!k&&Tr(w);A=w,M||k||U?G(y)?A=y:bt(y)?A=Wt(y):k?(O=!1,A=td(w,!0)):U?(O=!1,A=ed(w,!0)):A=[]:vi(w)||Cn(w)?(A=y,Cn(y)?A=Xd(y):(!vt(y)||Pe(y))&&(A=_d(w))):O=!1}O&&(g.set(w,A),d(A,w,u,h,g),g.delete(w)),ga(t,s,A)}function Bc(t,n){var s=t.length;if(!!s)return n+=n<0?s:0,ke(n,s)?t[n]:i}function Vc(t,n,s){n.length?n=gt(n,function(h){return G(h)?function(g){return Tn(g,h.length===1?h[0]:h)}:h}):n=[Zt];var u=-1;n=gt(n,Jt(z()));var d=zc(t,function(h,g,y){var w=gt(n,function(T){return T(h)});return{criteria:w,index:++u,value:h}});return ug(d,function(h,g){return Yv(h,g,s)})}function Nv(t,n){return Zc(t,n,function(s,u){return ja(t,u)})}function Zc(t,n,s){for(var u=-1,d=n.length,h={};++u<d;){var g=n[u],y=Tn(t,g);s(y,g)&&hi(h,rn(g,t),y)}return h}function kv(t){return function(n){return Tn(n,t)}}function Ta(t,n,s,u){var d=u?ag:mr,h=-1,g=n.length,y=t;for(t===n&&(n=Wt(n)),s&&(y=gt(t,Jt(s)));++h<g;)for(var w=0,T=n[h],A=s?s(T):T;(w=d(y,A,w,u))>-1;)y!==t&&bs.call(y,w,1),bs.call(t,w,1);return t}function Gc(t,n){for(var s=t?n.length:0,u=s-1;s--;){var d=n[s];if(s==u||d!==h){var h=d;ke(d)?bs.call(t,d,1):Oa(t,d)}}return t}function Aa(t,n){return t+Ts(Ac()*(n-t+1))}function Pv(t,n,s,u){for(var d=-1,h=At(Ss((n-t)/(s||1)),0),g=b(h);h--;)g[u?h:++d]=t,t+=s;return g}function $a(t,n){var s="";if(!t||n<1||n>Je)return s;do n%2&&(s+=t),n=Ts(n/2),n&&(t+=t);while(n);return s}function Q(t,n){return Va(bd(t,n,Zt),t+"")}function Hv(t){return Oc(Ar(t))}function zv(t,n){var s=Ar(t);return Ws(s,Sn(n,0,s.length))}function hi(t,n,s,u){if(!vt(t))return t;n=rn(n,t);for(var d=-1,h=n.length,g=h-1,y=t;y!=null&&++d<h;){var w=$e(n[d]),T=s;if(w==="__proto__"||w==="constructor"||w==="prototype")return t;if(d!=g){var A=y[w];T=u?u(A,w,y):i,T===i&&(T=vt(A)?A:ke(n[d+1])?[]:{})}li(y,w,T),y=y[w]}return t}var qc=As?function(t,n){return As.set(t,n),t}:Zt,Uv=Es?function(t,n){return Es(t,"toString",{configurable:!0,enumerable:!1,value:tu(n),writable:!0})}:Zt;function Wv(t){return Ws(Ar(t))}function oe(t,n,s){var u=-1,d=t.length;n<0&&(n=-n>d?0:d+n),s=s>d?d:s,s<0&&(s+=d),d=n>s?0:s-n>>>0,n>>>=0;for(var h=b(d);++u<d;)h[u]=t[u+n];return h}function Bv(t,n){var s;return en(t,function(u,d,h){return s=n(u,d,h),!s}),!!s}function Ds(t,n,s){var u=0,d=t==null?u:t.length;if(typeof n=="number"&&n===n&&d<=Zp){for(;u<d;){var h=u+d>>>1,g=t[h];g!==null&&!Xt(g)&&(s?g<=n:g<n)?u=h+1:d=h}return d}return Ca(t,n,Zt,s)}function Ca(t,n,s,u){var d=0,h=t==null?0:t.length;if(h===0)return 0;n=s(n);for(var g=n!==n,y=n===null,w=Xt(n),T=n===i;d<h;){var A=Ts((d+h)/2),O=s(t[A]),M=O!==i,k=O===null,U=O===O,J=Xt(O);if(g)var W=u||U;else T?W=U&&(u||M):y?W=U&&M&&(u||!k):w?W=U&&M&&!k&&(u||!J):k||J?W=!1:W=u?O<=n:O<n;W?d=A+1:h=A}return Nt(h,Vp)}function Yc(t,n){for(var s=-1,u=t.length,d=0,h=[];++s<u;){var g=t[s],y=n?n(g):g;if(!s||!ye(y,w)){var w=y;h[d++]=g===0?0:g}}return h}function Jc(t){return typeof t=="number"?t:Xt(t)?is:+t}function Kt(t){if(typeof t=="string")return t;if(G(t))return gt(t,Kt)+"";if(Xt(t))return $c?$c.call(t):"";var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function nn(t,n,s){var u=-1,d=fs,h=t.length,g=!0,y=[],w=y;if(s)g=!1,d=ra;else if(h>=r){var T=n?null:t0(t);if(T)return ps(T);g=!1,d=ri,w=new En}else w=n?[]:y;t:for(;++u<h;){var A=t[u],O=n?n(A):A;if(A=s||A!==0?A:0,g&&O===O){for(var M=w.length;M--;)if(w[M]===O)continue t;n&&w.push(O),y.push(A)}else d(w,O,s)||(w!==y&&w.push(O),y.push(A))}return y}function Oa(t,n){return n=rn(n,t),t=Ed(t,n),t==null||delete t[$e(ae(n))]}function Kc(t,n,s,u){return hi(t,n,s(Tn(t,n)),u)}function Rs(t,n,s,u){for(var d=t.length,h=u?d:-1;(u?h--:++h<d)&&n(t[h],h,t););return s?oe(t,u?0:h,u?h+1:d):oe(t,u?h+1:0,u?d:h)}function Xc(t,n){var s=t;return s instanceof nt&&(s=s.value()),ia(n,function(u,d){return d.func.apply(d.thisArg,Xe([u],d.args))},s)}function Ia(t,n,s){var u=t.length;if(u<2)return u?nn(t[0]):[];for(var d=-1,h=b(u);++d<u;)for(var g=t[d],y=-1;++y<u;)y!=d&&(h[d]=ci(h[d]||g,t[y],n,s));return nn(Ft(h,1),n,s)}function jc(t,n,s){for(var u=-1,d=t.length,h=n.length,g={};++u<d;){var y=u<h?n[u]:i;s(g,t[u],y)}return g}function Ma(t){return bt(t)?t:[]}function La(t){return typeof t=="function"?t:Zt}function rn(t,n){return G(t)?t:Ua(t,n)?[t]:$d(at(t))}var Vv=Q;function sn(t,n,s){var u=t.length;return s=s===i?u:s,!n&&s>=u?t:oe(t,n,s)}var Qc=Mg||function(t){return Ot.clearTimeout(t)};function td(t,n){if(n)return t.slice();var s=t.length,u=wc?wc(s):new t.constructor(s);return t.copy(u),u}function Da(t){var n=new t.constructor(t.byteLength);return new xs(n).set(new xs(t)),n}function Zv(t,n){var s=n?Da(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.byteLength)}function Gv(t){var n=new t.constructor(t.source,kl.exec(t));return n.lastIndex=t.lastIndex,n}function qv(t){return ui?ct(ui.call(t)):{}}function ed(t,n){var s=n?Da(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.length)}function nd(t,n){if(t!==n){var s=t!==i,u=t===null,d=t===t,h=Xt(t),g=n!==i,y=n===null,w=n===n,T=Xt(n);if(!y&&!T&&!h&&t>n||h&&g&&w&&!y&&!T||u&&g&&w||!s&&w||!d)return 1;if(!u&&!h&&!T&&t<n||T&&s&&d&&!u&&!h||y&&s&&d||!g&&d||!w)return-1}return 0}function Yv(t,n,s){for(var u=-1,d=t.criteria,h=n.criteria,g=d.length,y=s.length;++u<g;){var w=nd(d[u],h[u]);if(w){if(u>=y)return w;var T=s[u];return w*(T=="desc"?-1:1)}}return t.index-n.index}function rd(t,n,s,u){for(var d=-1,h=t.length,g=s.length,y=-1,w=n.length,T=At(h-g,0),A=b(w+T),O=!u;++y<w;)A[y]=n[y];for(;++d<g;)(O||d<h)&&(A[s[d]]=t[d]);for(;T--;)A[y++]=t[d++];return A}function id(t,n,s,u){for(var d=-1,h=t.length,g=-1,y=s.length,w=-1,T=n.length,A=At(h-y,0),O=b(A+T),M=!u;++d<A;)O[d]=t[d];for(var k=d;++w<T;)O[k+w]=n[w];for(;++g<y;)(M||d<h)&&(O[k+s[g]]=t[d++]);return O}function Wt(t,n){var s=-1,u=t.length;for(n||(n=b(u));++s<u;)n[s]=t[s];return n}function Ae(t,n,s,u){var d=!s;s||(s={});for(var h=-1,g=n.length;++h<g;){var y=n[h],w=u?u(s[y],t[y],y,s,t):i;w===i&&(w=t[y]),d?Re(s,y,w):li(s,y,w)}return s}function Jv(t,n){return Ae(t,za(t),n)}function Kv(t,n){return Ae(t,vd(t),n)}function Fs(t,n){return function(s,u){var d=G(s)?eg:yv,h=n?n():{};return d(s,t,z(u,2),h)}}function br(t){return Q(function(n,s){var u=-1,d=s.length,h=d>1?s[d-1]:i,g=d>2?s[2]:i;for(h=t.length>3&&typeof h=="function"?(d--,h):i,g&&zt(s[0],s[1],g)&&(h=d<3?i:h,d=1),n=ct(n);++u<d;){var y=s[u];y&&t(n,y,u,h)}return n})}function sd(t,n){return function(s,u){if(s==null)return s;if(!Bt(s))return t(s,u);for(var d=s.length,h=n?d:-1,g=ct(s);(n?h--:++h<d)&&u(g[h],h,g)!==!1;);return s}}function od(t){return function(n,s,u){for(var d=-1,h=ct(n),g=u(n),y=g.length;y--;){var w=g[t?y:++d];if(s(h[w],w,h)===!1)break}return n}}function Xv(t,n,s){var u=n&F,d=pi(t);function h(){var g=this&&this!==Ot&&this instanceof h?d:t;return g.apply(u?s:this,arguments)}return h}function ad(t){return function(n){n=at(n);var s=gr(n)?ge(n):i,u=s?s[0]:n.charAt(0),d=s?sn(s,1).join(""):n.slice(1);return u[t]()+d}}function Er(t){return function(n){return ia(of(sf(n).replace(Um,"")),t,"")}}function pi(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var s=wr(t.prototype),u=t.apply(s,n);return vt(u)?u:s}}function jv(t,n,s){var u=pi(t);function d(){for(var h=arguments.length,g=b(h),y=h,w=Sr(d);y--;)g[y]=arguments[y];var T=h<3&&g[0]!==w&&g[h-1]!==w?[]:je(g,w);if(h-=T.length,h<s)return fd(t,n,Ns,d.placeholder,i,g,T,i,i,s-h);var A=this&&this!==Ot&&this instanceof d?u:t;return Yt(A,this,g)}return d}function ud(t){return function(n,s,u){var d=ct(n);if(!Bt(n)){var h=z(s,3);n=It(n),s=function(y){return h(d[y],y,d)}}var g=t(n,s,u);return g>-1?d[h?n[g]:g]:i}}function ld(t){return Ne(function(n){var s=n.length,u=s,d=ie.prototype.thru;for(t&&n.reverse();u--;){var h=n[u];if(typeof h!="function")throw new re(a);if(d&&!g&&zs(h)=="wrapper")var g=new ie([],!0)}for(u=g?u:s;++u<s;){h=n[u];var y=zs(h),w=y=="wrapper"?Pa(h):i;w&&Wa(w[0])&&w[1]==(he|St|qt|gn)&&!w[4].length&&w[9]==1?g=g[zs(w[0])].apply(g,w[3]):g=h.length==1&&Wa(h)?g[y]():g.thru(h)}return function(){var T=arguments,A=T[0];if(g&&T.length==1&&G(A))return g.plant(A).value();for(var O=0,M=s?n[O].apply(this,T):A;++O<s;)M=n[O].call(this,M);return M}})}function Ns(t,n,s,u,d,h,g,y,w,T){var A=n&he,O=n&F,M=n&Ct,k=n&(St|fe),U=n&vn,J=M?i:pi(t);function W(){for(var tt=arguments.length,rt=b(tt),jt=tt;jt--;)rt[jt]=arguments[jt];if(k)var Ut=Sr(W),Qt=cg(rt,Ut);if(u&&(rt=rd(rt,u,d,k)),h&&(rt=id(rt,h,g,k)),tt-=Qt,k&&tt<T){var Et=je(rt,Ut);return fd(t,n,Ns,W.placeholder,s,rt,Et,y,w,T-tt)}var _e=O?s:this,ze=M?_e[t]:t;return tt=rt.length,y?rt=y0(rt,y):U&&tt>1&&rt.reverse(),A&&w<tt&&(rt.length=w),this&&this!==Ot&&this instanceof W&&(ze=J||pi(ze)),ze.apply(_e,rt)}return W}function cd(t,n){return function(s,u){return Av(s,t,n(u),{})}}function ks(t,n){return function(s,u){var d;if(s===i&&u===i)return n;if(s!==i&&(d=s),u!==i){if(d===i)return u;typeof s=="string"||typeof u=="string"?(s=Kt(s),u=Kt(u)):(s=Jc(s),u=Jc(u)),d=t(s,u)}return d}}function Ra(t){return Ne(function(n){return n=gt(n,Jt(z())),Q(function(s){var u=this;return t(n,function(d){return Yt(d,u,s)})})})}function Ps(t,n){n=n===i?" ":Kt(n);var s=n.length;if(s<2)return s?$a(n,t):n;var u=$a(n,Ss(t/vr(n)));return gr(n)?sn(ge(u),0,t).join(""):u.slice(0,t)}function Qv(t,n,s,u){var d=n&F,h=pi(t);function g(){for(var y=-1,w=arguments.length,T=-1,A=u.length,O=b(A+w),M=this&&this!==Ot&&this instanceof g?h:t;++T<A;)O[T]=u[T];for(;w--;)O[T++]=arguments[++y];return Yt(M,d?s:this,O)}return g}function dd(t){return function(n,s,u){return u&&typeof u!="number"&&zt(n,s,u)&&(s=u=i),n=He(n),s===i?(s=n,n=0):s=He(s),u=u===i?n<s?1:-1:He(u),Pv(n,s,u,t)}}function Hs(t){return function(n,s){return typeof n=="string"&&typeof s=="string"||(n=ue(n),s=ue(s)),t(n,s)}}function fd(t,n,s,u,d,h,g,y,w,T){var A=n&St,O=A?g:i,M=A?i:g,k=A?h:i,U=A?i:h;n|=A?qt:Ye,n&=~(A?Ye:qt),n&mt||(n&=~(F|Ct));var J=[t,n,d,k,O,U,M,y,w,T],W=s.apply(i,J);return Wa(t)&&Sd(W,J),W.placeholder=u,Td(W,t,n)}function Fa(t){var n=Tt[t];return function(s,u){if(s=ue(s),u=u==null?0:Nt(q(u),292),u&&Tc(s)){var d=(at(s)+"e").split("e"),h=n(d[0]+"e"+(+d[1]+u));return d=(at(h)+"e").split("e"),+(d[0]+"e"+(+d[1]-u))}return n(s)}}var t0=_r&&1/ps(new _r([,-0]))[1]==_n?function(t){return new _r(t)}:ru;function hd(t){return function(n){var s=kt(n);return s==pe?da(n):s==me?vg(n):lg(n,t(n))}}function Fe(t,n,s,u,d,h,g,y){var w=n&Ct;if(!w&&typeof t!="function")throw new re(a);var T=u?u.length:0;if(T||(n&=~(qt|Ye),u=d=i),g=g===i?g:At(q(g),0),y=y===i?y:q(y),T-=d?d.length:0,n&Ye){var A=u,O=d;u=d=i}var M=w?i:Pa(t),k=[t,n,s,u,d,A,O,h,g,y];if(M&&m0(k,M),t=k[0],n=k[1],s=k[2],u=k[3],d=k[4],y=k[9]=k[9]===i?w?0:t.length:At(k[9]-T,0),!y&&n&(St|fe)&&(n&=~(St|fe)),!n||n==F)var U=Xv(t,n,s);else n==St||n==fe?U=jv(t,n,y):(n==qt||n==(F|qt))&&!d.length?U=Qv(t,n,s,u):U=Ns.apply(i,k);var J=M?qc:Sd;return Td(J(U,k),t,n)}function pd(t,n,s,u){return t===i||ye(t,yr[s])&&!lt.call(u,s)?n:t}function md(t,n,s,u,d,h){return vt(t)&&vt(n)&&(h.set(n,t),Ls(t,n,i,md,h),h.delete(n)),t}function e0(t){return vi(t)?i:t}function gd(t,n,s,u,d,h){var g=s&R,y=t.length,w=n.length;if(y!=w&&!(g&&w>y))return!1;var T=h.get(t),A=h.get(n);if(T&&A)return T==n&&A==t;var O=-1,M=!0,k=s&I?new En:i;for(h.set(t,n),h.set(n,t);++O<y;){var U=t[O],J=n[O];if(u)var W=g?u(J,U,O,n,t,h):u(U,J,O,t,n,h);if(W!==i){if(W)continue;M=!1;break}if(k){if(!sa(n,function(tt,rt){if(!ri(k,rt)&&(U===tt||d(U,tt,s,u,h)))return k.push(rt)})){M=!1;break}}else if(!(U===J||d(U,J,s,u,h))){M=!1;break}}return h.delete(t),h.delete(n),M}function n0(t,n,s,u,d,h,g){switch(s){case hr:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case ni:return!(t.byteLength!=n.byteLength||!h(new xs(t),new xs(n)));case Kr:case Xr:case jr:return ye(+t,+n);case os:return t.name==n.name&&t.message==n.message;case Qr:case ti:return t==n+"";case pe:var y=da;case me:var w=u&R;if(y||(y=ps),t.size!=n.size&&!w)return!1;var T=g.get(t);if(T)return T==n;u|=I,g.set(t,n);var A=gd(y(t),y(n),u,d,h,g);return g.delete(t),A;case us:if(ui)return ui.call(t)==ui.call(n)}return!1}function r0(t,n,s,u,d,h){var g=s&R,y=Na(t),w=y.length,T=Na(n),A=T.length;if(w!=A&&!g)return!1;for(var O=w;O--;){var M=y[O];if(!(g?M in n:lt.call(n,M)))return!1}var k=h.get(t),U=h.get(n);if(k&&U)return k==n&&U==t;var J=!0;h.set(t,n),h.set(n,t);for(var W=g;++O<w;){M=y[O];var tt=t[M],rt=n[M];if(u)var jt=g?u(rt,tt,M,n,t,h):u(tt,rt,M,t,n,h);if(!(jt===i?tt===rt||d(tt,rt,s,u,h):jt)){J=!1;break}W||(W=M=="constructor")}if(J&&!W){var Ut=t.constructor,Qt=n.constructor;Ut!=Qt&&"constructor"in t&&"constructor"in n&&!(typeof Ut=="function"&&Ut instanceof Ut&&typeof Qt=="function"&&Qt instanceof Qt)&&(J=!1)}return h.delete(t),h.delete(n),J}function Ne(t){return Va(bd(t,i,Md),t+"")}function Na(t){return Nc(t,It,za)}function ka(t){return Nc(t,Vt,vd)}var Pa=As?function(t){return As.get(t)}:ru;function zs(t){for(var n=t.name+"",s=xr[n],u=lt.call(xr,n)?s.length:0;u--;){var d=s[u],h=d.func;if(h==null||h==t)return d.name}return n}function Sr(t){var n=lt.call(f,"placeholder")?f:t;return n.placeholder}function z(){var t=f.iteratee||eu;return t=t===eu?Hc:t,arguments.length?t(arguments[0],arguments[1]):t}function Us(t,n){var s=t.__data__;return d0(n)?s[typeof n=="string"?"string":"hash"]:s.map}function Ha(t){for(var n=It(t),s=n.length;s--;){var u=n[s],d=t[u];n[s]=[u,d,xd(d)]}return n}function An(t,n){var s=pg(t,n);return Pc(s)?s:i}function i0(t){var n=lt.call(t,wn),s=t[wn];try{t[wn]=i;var u=!0}catch(h){}var d=ys.call(t);return u&&(n?t[wn]=s:delete t[wn]),d}var za=ha?function(t){return t==null?[]:(t=ct(t),Ke(ha(t),function(n){return Ec.call(t,n)}))}:iu,vd=ha?function(t){for(var n=[];t;)Xe(n,za(t)),t=ws(t);return n}:iu,kt=Ht;(pa&&kt(new pa(new ArrayBuffer(1)))!=hr||si&&kt(new si)!=pe||ma&&kt(ma.resolve())!=Dl||_r&&kt(new _r)!=me||oi&&kt(new oi)!=ei)&&(kt=function(t){var n=Ht(t),s=n==Me?t.constructor:i,u=s?$n(s):"";if(u)switch(u){case zg:return hr;case Ug:return pe;case Wg:return Dl;case Bg:return me;case Vg:return ei}return n});function s0(t,n,s){for(var u=-1,d=s.length;++u<d;){var h=s[u],g=h.size;switch(h.type){case"drop":t+=g;break;case"dropRight":n-=g;break;case"take":n=Nt(n,t+g);break;case"takeRight":t=At(t,n-g);break}}return{start:t,end:n}}function o0(t){var n=t.match(fm);return n?n[1].split(hm):[]}function yd(t,n,s){n=rn(n,t);for(var u=-1,d=n.length,h=!1;++u<d;){var g=$e(n[u]);if(!(h=t!=null&&s(t,g)))break;t=t[g]}return h||++u!=d?h:(d=t==null?0:t.length,!!d&&Ys(d)&&ke(g,d)&&(G(t)||Cn(t)))}function a0(t){var n=t.length,s=new t.constructor(n);return n&&typeof t[0]=="string"&&lt.call(t,"index")&&(s.index=t.index,s.input=t.input),s}function _d(t){return typeof t.constructor=="function"&&!mi(t)?wr(ws(t)):{}}function u0(t,n,s){var u=t.constructor;switch(n){case ni:return Da(t);case Kr:case Xr:return new u(+t);case hr:return Zv(t,s);case Ho:case zo:case Uo:case Wo:case Bo:case Vo:case Zo:case Go:case qo:return ed(t,s);case pe:return new u;case jr:case ti:return new u(t);case Qr:return Gv(t);case me:return new u;case us:return qv(t)}}function l0(t,n){var s=n.length;if(!s)return t;var u=s-1;return n[u]=(s>1?"& ":"")+n[u],n=n.join(s>2?", ":" "),t.replace(dm,`{
/* [wrapped with `+n+`] */
`)}function c0(t){return G(t)||Cn(t)||!!(Sc&&t&&t[Sc])}function ke(t,n){var s=typeof t;return n=n==null?Je:n,!!n&&(s=="number"||s!="symbol"&&bm.test(t))&&t>-1&&t%1==0&&t<n}function zt(t,n,s){if(!vt(s))return!1;var u=typeof n;return(u=="number"?Bt(s)&&ke(n,s.length):u=="string"&&n in s)?ye(s[n],t):!1}function Ua(t,n){if(G(t))return!1;var s=typeof t;return s=="number"||s=="symbol"||s=="boolean"||t==null||Xt(t)?!0:am.test(t)||!om.test(t)||n!=null&&t in ct(n)}function d0(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}function Wa(t){var n=zs(t),s=f[n];if(typeof s!="function"||!(n in nt.prototype))return!1;if(t===s)return!0;var u=Pa(s);return!!u&&t===u[0]}function f0(t){return!!xc&&xc in t}var h0=gs?Pe:su;function mi(t){var n=t&&t.constructor,s=typeof n=="function"&&n.prototype||yr;return t===s}function xd(t){return t===t&&!vt(t)}function wd(t,n){return function(s){return s==null?!1:s[t]===n&&(n!==i||t in ct(s))}}function p0(t){var n=Gs(t,function(u){return s.size===p&&s.clear(),u}),s=n.cache;return n}function m0(t,n){var s=t[1],u=n[1],d=s|u,h=d<(F|Ct|he),g=u==he&&s==St||u==he&&s==gn&&t[7].length<=n[8]||u==(he|gn)&&n[7].length<=n[8]&&s==St;if(!(h||g))return t;u&F&&(t[2]=n[2],d|=s&F?0:mt);var y=n[3];if(y){var w=t[3];t[3]=w?rd(w,y,n[4]):y,t[4]=w?je(t[3],m):n[4]}return y=n[5],y&&(w=t[5],t[5]=w?id(w,y,n[6]):y,t[6]=w?je(t[5],m):n[6]),y=n[7],y&&(t[7]=y),u&he&&(t[8]=t[8]==null?n[8]:Nt(t[8],n[8])),t[9]==null&&(t[9]=n[9]),t[0]=n[0],t[1]=d,t}function g0(t){var n=[];if(t!=null)for(var s in ct(t))n.push(s);return n}function v0(t){return ys.call(t)}function bd(t,n,s){return n=At(n===i?t.length-1:n,0),function(){for(var u=arguments,d=-1,h=At(u.length-n,0),g=b(h);++d<h;)g[d]=u[n+d];d=-1;for(var y=b(n+1);++d<n;)y[d]=u[d];return y[n]=s(g),Yt(t,this,y)}}function Ed(t,n){return n.length<2?t:Tn(t,oe(n,0,-1))}function y0(t,n){for(var s=t.length,u=Nt(n.length,s),d=Wt(t);u--;){var h=n[u];t[u]=ke(h,s)?d[h]:i}return t}function Ba(t,n){if(!(n==="constructor"&&typeof t[n]=="function")&&n!="__proto__")return t[n]}var Sd=Ad(qc),gi=Dg||function(t,n){return Ot.setTimeout(t,n)},Va=Ad(Uv);function Td(t,n,s){var u=n+"";return Va(t,l0(u,_0(o0(u),s)))}function Ad(t){var n=0,s=0;return function(){var u=kg(),d=zp-(u-s);if(s=u,d>0){if(++n>=Hp)return arguments[0]}else n=0;return t.apply(i,arguments)}}function Ws(t,n){var s=-1,u=t.length,d=u-1;for(n=n===i?u:n;++s<n;){var h=Aa(s,d),g=t[h];t[h]=t[s],t[s]=g}return t.length=n,t}var $d=p0(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(um,function(s,u,d,h){n.push(d?h.replace(gm,"$1"):u||s)}),n});function $e(t){if(typeof t=="string"||Xt(t))return t;var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function $n(t){if(t!=null){try{return vs.call(t)}catch(n){}try{return t+""}catch(n){}}return""}function _0(t,n){return ne(Gp,function(s){var u="_."+s[0];n&s[1]&&!fs(t,u)&&t.push(u)}),t.sort()}function Cd(t){if(t instanceof nt)return t.clone();var n=new ie(t.__wrapped__,t.__chain__);return n.__actions__=Wt(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}function x0(t,n,s){(s?zt(t,n,s):n===i)?n=1:n=At(q(n),0);var u=t==null?0:t.length;if(!u||n<1)return[];for(var d=0,h=0,g=b(Ss(u/n));d<u;)g[h++]=oe(t,d,d+=n);return g}function w0(t){for(var n=-1,s=t==null?0:t.length,u=0,d=[];++n<s;){var h=t[n];h&&(d[u++]=h)}return d}function b0(){var t=arguments.length;if(!t)return[];for(var n=b(t-1),s=arguments[0],u=t;u--;)n[u-1]=arguments[u];return Xe(G(s)?Wt(s):[s],Ft(n,1))}var E0=Q(function(t,n){return bt(t)?ci(t,Ft(n,1,bt,!0)):[]}),S0=Q(function(t,n){var s=ae(n);return bt(s)&&(s=i),bt(t)?ci(t,Ft(n,1,bt,!0),z(s,2)):[]}),T0=Q(function(t,n){var s=ae(n);return bt(s)&&(s=i),bt(t)?ci(t,Ft(n,1,bt,!0),i,s):[]});function A0(t,n,s){var u=t==null?0:t.length;return u?(n=s||n===i?1:q(n),oe(t,n<0?0:n,u)):[]}function $0(t,n,s){var u=t==null?0:t.length;return u?(n=s||n===i?1:q(n),n=u-n,oe(t,0,n<0?0:n)):[]}function C0(t,n){return t&&t.length?Rs(t,z(n,3),!0,!0):[]}function O0(t,n){return t&&t.length?Rs(t,z(n,3),!0):[]}function I0(t,n,s,u){var d=t==null?0:t.length;return d?(s&&typeof s!="number"&&zt(t,n,s)&&(s=0,u=d),bv(t,n,s,u)):[]}function Od(t,n,s){var u=t==null?0:t.length;if(!u)return-1;var d=s==null?0:q(s);return d<0&&(d=At(u+d,0)),hs(t,z(n,3),d)}function Id(t,n,s){var u=t==null?0:t.length;if(!u)return-1;var d=u-1;return s!==i&&(d=q(s),d=s<0?At(u+d,0):Nt(d,u-1)),hs(t,z(n,3),d,!0)}function Md(t){var n=t==null?0:t.length;return n?Ft(t,1):[]}function M0(t){var n=t==null?0:t.length;return n?Ft(t,_n):[]}function L0(t,n){var s=t==null?0:t.length;return s?(n=n===i?1:q(n),Ft(t,n)):[]}function D0(t){for(var n=-1,s=t==null?0:t.length,u={};++n<s;){var d=t[n];u[d[0]]=d[1]}return u}function Ld(t){return t&&t.length?t[0]:i}function R0(t,n,s){var u=t==null?0:t.length;if(!u)return-1;var d=s==null?0:q(s);return d<0&&(d=At(u+d,0)),mr(t,n,d)}function F0(t){var n=t==null?0:t.length;return n?oe(t,0,-1):[]}var N0=Q(function(t){var n=gt(t,Ma);return n.length&&n[0]===t[0]?wa(n):[]}),k0=Q(function(t){var n=ae(t),s=gt(t,Ma);return n===ae(s)?n=i:s.pop(),s.length&&s[0]===t[0]?wa(s,z(n,2)):[]}),P0=Q(function(t){var n=ae(t),s=gt(t,Ma);return n=typeof n=="function"?n:i,n&&s.pop(),s.length&&s[0]===t[0]?wa(s,i,n):[]});function H0(t,n){return t==null?"":Fg.call(t,n)}function ae(t){var n=t==null?0:t.length;return n?t[n-1]:i}function z0(t,n,s){var u=t==null?0:t.length;if(!u)return-1;var d=u;return s!==i&&(d=q(s),d=d<0?At(u+d,0):Nt(d,u-1)),n===n?_g(t,n,d):hs(t,fc,d,!0)}function U0(t,n){return t&&t.length?Bc(t,q(n)):i}var W0=Q(Dd);function Dd(t,n){return t&&t.length&&n&&n.length?Ta(t,n):t}function B0(t,n,s){return t&&t.length&&n&&n.length?Ta(t,n,z(s,2)):t}function V0(t,n,s){return t&&t.length&&n&&n.length?Ta(t,n,i,s):t}var Z0=Ne(function(t,n){var s=t==null?0:t.length,u=va(t,n);return Gc(t,gt(n,function(d){return ke(d,s)?+d:d}).sort(nd)),u});function G0(t,n){var s=[];if(!(t&&t.length))return s;var u=-1,d=[],h=t.length;for(n=z(n,3);++u<h;){var g=t[u];n(g,u,t)&&(s.push(g),d.push(u))}return Gc(t,d),s}function Za(t){return t==null?t:Hg.call(t)}function q0(t,n,s){var u=t==null?0:t.length;return u?(s&&typeof s!="number"&&zt(t,n,s)?(n=0,s=u):(n=n==null?0:q(n),s=s===i?u:q(s)),oe(t,n,s)):[]}function Y0(t,n){return Ds(t,n)}function J0(t,n,s){return Ca(t,n,z(s,2))}function K0(t,n){var s=t==null?0:t.length;if(s){var u=Ds(t,n);if(u<s&&ye(t[u],n))return u}return-1}function X0(t,n){return Ds(t,n,!0)}function j0(t,n,s){return Ca(t,n,z(s,2),!0)}function Q0(t,n){var s=t==null?0:t.length;if(s){var u=Ds(t,n,!0)-1;if(ye(t[u],n))return u}return-1}function ty(t){return t&&t.length?Yc(t):[]}function ey(t,n){return t&&t.length?Yc(t,z(n,2)):[]}function ny(t){var n=t==null?0:t.length;return n?oe(t,1,n):[]}function ry(t,n,s){return t&&t.length?(n=s||n===i?1:q(n),oe(t,0,n<0?0:n)):[]}function iy(t,n,s){var u=t==null?0:t.length;return u?(n=s||n===i?1:q(n),n=u-n,oe(t,n<0?0:n,u)):[]}function sy(t,n){return t&&t.length?Rs(t,z(n,3),!1,!0):[]}function oy(t,n){return t&&t.length?Rs(t,z(n,3)):[]}var ay=Q(function(t){return nn(Ft(t,1,bt,!0))}),uy=Q(function(t){var n=ae(t);return bt(n)&&(n=i),nn(Ft(t,1,bt,!0),z(n,2))}),ly=Q(function(t){var n=ae(t);return n=typeof n=="function"?n:i,nn(Ft(t,1,bt,!0),i,n)});function cy(t){return t&&t.length?nn(t):[]}function dy(t,n){return t&&t.length?nn(t,z(n,2)):[]}function fy(t,n){return n=typeof n=="function"?n:i,t&&t.length?nn(t,i,n):[]}function Ga(t){if(!(t&&t.length))return[];var n=0;return t=Ke(t,function(s){if(bt(s))return n=At(s.length,n),!0}),la(n,function(s){return gt(t,oa(s))})}function Rd(t,n){if(!(t&&t.length))return[];var s=Ga(t);return n==null?s:gt(s,function(u){return Yt(n,i,u)})}var hy=Q(function(t,n){return bt(t)?ci(t,n):[]}),py=Q(function(t){return Ia(Ke(t,bt))}),my=Q(function(t){var n=ae(t);return bt(n)&&(n=i),Ia(Ke(t,bt),z(n,2))}),gy=Q(function(t){var n=ae(t);return n=typeof n=="function"?n:i,Ia(Ke(t,bt),i,n)}),vy=Q(Ga);function yy(t,n){return jc(t||[],n||[],li)}function _y(t,n){return jc(t||[],n||[],hi)}var xy=Q(function(t){var n=t.length,s=n>1?t[n-1]:i;return s=typeof s=="function"?(t.pop(),s):i,Rd(t,s)});function Fd(t){var n=f(t);return n.__chain__=!0,n}function wy(t,n){return n(t),t}function Bs(t,n){return n(t)}var by=Ne(function(t){var n=t.length,s=n?t[0]:0,u=this.__wrapped__,d=function(h){return va(h,t)};return n>1||this.__actions__.length||!(u instanceof nt)||!ke(s)?this.thru(d):(u=u.slice(s,+s+(n?1:0)),u.__actions__.push({func:Bs,args:[d],thisArg:i}),new ie(u,this.__chain__).thru(function(h){return n&&!h.length&&h.push(i),h}))});function Ey(){return Fd(this)}function Sy(){return new ie(this.value(),this.__chain__)}function Ty(){this.__values__===i&&(this.__values__=Jd(this.value()));var t=this.__index__>=this.__values__.length,n=t?i:this.__values__[this.__index__++];return{done:t,value:n}}function Ay(){return this}function $y(t){for(var n,s=this;s instanceof Cs;){var u=Cd(s);u.__index__=0,u.__values__=i,n?d.__wrapped__=u:n=u;var d=u;s=s.__wrapped__}return d.__wrapped__=t,n}function Cy(){var t=this.__wrapped__;if(t instanceof nt){var n=t;return this.__actions__.length&&(n=new nt(this)),n=n.reverse(),n.__actions__.push({func:Bs,args:[Za],thisArg:i}),new ie(n,this.__chain__)}return this.thru(Za)}function Oy(){return Xc(this.__wrapped__,this.__actions__)}var Iy=Fs(function(t,n,s){lt.call(t,s)?++t[s]:Re(t,s,1)});function My(t,n,s){var u=G(t)?cc:wv;return s&&zt(t,n,s)&&(n=i),u(t,z(n,3))}function Ly(t,n){var s=G(t)?Ke:Rc;return s(t,z(n,3))}var Dy=ud(Od),Ry=ud(Id);function Fy(t,n){return Ft(Vs(t,n),1)}function Ny(t,n){return Ft(Vs(t,n),_n)}function ky(t,n,s){return s=s===i?1:q(s),Ft(Vs(t,n),s)}function Nd(t,n){var s=G(t)?ne:en;return s(t,z(n,3))}function kd(t,n){var s=G(t)?ng:Dc;return s(t,z(n,3))}var Py=Fs(function(t,n,s){lt.call(t,s)?t[s].push(n):Re(t,s,[n])});function Hy(t,n,s,u){t=Bt(t)?t:Ar(t),s=s&&!u?q(s):0;var d=t.length;return s<0&&(s=At(d+s,0)),Js(t)?s<=d&&t.indexOf(n,s)>-1:!!d&&mr(t,n,s)>-1}var zy=Q(function(t,n,s){var u=-1,d=typeof n=="function",h=Bt(t)?b(t.length):[];return en(t,function(g){h[++u]=d?Yt(n,g,s):di(g,n,s)}),h}),Uy=Fs(function(t,n,s){Re(t,s,n)});function Vs(t,n){var s=G(t)?gt:zc;return s(t,z(n,3))}function Wy(t,n,s,u){return t==null?[]:(G(n)||(n=n==null?[]:[n]),s=u?i:s,G(s)||(s=s==null?[]:[s]),Vc(t,n,s))}var By=Fs(function(t,n,s){t[s?0:1].push(n)},function(){return[[],[]]});function Vy(t,n,s){var u=G(t)?ia:pc,d=arguments.length<3;return u(t,z(n,4),s,d,en)}function Zy(t,n,s){var u=G(t)?rg:pc,d=arguments.length<3;return u(t,z(n,4),s,d,Dc)}function Gy(t,n){var s=G(t)?Ke:Rc;return s(t,qs(z(n,3)))}function qy(t){var n=G(t)?Oc:Hv;return n(t)}function Yy(t,n,s){(s?zt(t,n,s):n===i)?n=1:n=q(n);var u=G(t)?gv:zv;return u(t,n)}function Jy(t){var n=G(t)?vv:Wv;return n(t)}function Ky(t){if(t==null)return 0;if(Bt(t))return Js(t)?vr(t):t.length;var n=kt(t);return n==pe||n==me?t.size:Ea(t).length}function Xy(t,n,s){var u=G(t)?sa:Bv;return s&&zt(t,n,s)&&(n=i),u(t,z(n,3))}var jy=Q(function(t,n){if(t==null)return[];var s=n.length;return s>1&&zt(t,n[0],n[1])?n=[]:s>2&&zt(n[0],n[1],n[2])&&(n=[n[0]]),Vc(t,Ft(n,1),[])}),Zs=Lg||function(){return Ot.Date.now()};function Qy(t,n){if(typeof n!="function")throw new re(a);return t=q(t),function(){if(--t<1)return n.apply(this,arguments)}}function Pd(t,n,s){return n=s?i:n,n=t&&n==null?t.length:n,Fe(t,he,i,i,i,i,n)}function Hd(t,n){var s;if(typeof n!="function")throw new re(a);return t=q(t),function(){return--t>0&&(s=n.apply(this,arguments)),t<=1&&(n=i),s}}var qa=Q(function(t,n,s){var u=F;if(s.length){var d=je(s,Sr(qa));u|=qt}return Fe(t,u,n,s,d)}),zd=Q(function(t,n,s){var u=F|Ct;if(s.length){var d=je(s,Sr(zd));u|=qt}return Fe(n,u,t,s,d)});function Ud(t,n,s){n=s?i:n;var u=Fe(t,St,i,i,i,i,i,n);return u.placeholder=Ud.placeholder,u}function Wd(t,n,s){n=s?i:n;var u=Fe(t,fe,i,i,i,i,i,n);return u.placeholder=Wd.placeholder,u}function Bd(t,n,s){var u,d,h,g,y,w,T=0,A=!1,O=!1,M=!0;if(typeof t!="function")throw new re(a);n=ue(n)||0,vt(s)&&(A=!!s.leading,O="maxWait"in s,h=O?At(ue(s.maxWait)||0,n):h,M="trailing"in s?!!s.trailing:M);function k(Et){var _e=u,ze=d;return u=d=i,T=Et,g=t.apply(ze,_e),g}function U(Et){return T=Et,y=gi(tt,n),A?k(Et):g}function J(Et){var _e=Et-w,ze=Et-T,lf=n-_e;return O?Nt(lf,h-ze):lf}function W(Et){var _e=Et-w,ze=Et-T;return w===i||_e>=n||_e<0||O&&ze>=h}function tt(){var Et=Zs();if(W(Et))return rt(Et);y=gi(tt,J(Et))}function rt(Et){return y=i,M&&u?k(Et):(u=d=i,g)}function jt(){y!==i&&Qc(y),T=0,u=w=d=y=i}function Ut(){return y===i?g:rt(Zs())}function Qt(){var Et=Zs(),_e=W(Et);if(u=arguments,d=this,w=Et,_e){if(y===i)return U(w);if(O)return Qc(y),y=gi(tt,n),k(w)}return y===i&&(y=gi(tt,n)),g}return Qt.cancel=jt,Qt.flush=Ut,Qt}var t_=Q(function(t,n){return Lc(t,1,n)}),e_=Q(function(t,n,s){return Lc(t,ue(n)||0,s)});function n_(t){return Fe(t,vn)}function Gs(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new re(a);var s=function(){var u=arguments,d=n?n.apply(this,u):u[0],h=s.cache;if(h.has(d))return h.get(d);var g=t.apply(this,u);return s.cache=h.set(d,g)||h,g};return s.cache=new(Gs.Cache||De),s}Gs.Cache=De;function qs(t){if(typeof t!="function")throw new re(a);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function r_(t){return Hd(2,t)}var i_=Vv(function(t,n){n=n.length==1&&G(n[0])?gt(n[0],Jt(z())):gt(Ft(n,1),Jt(z()));var s=n.length;return Q(function(u){for(var d=-1,h=Nt(u.length,s);++d<h;)u[d]=n[d].call(this,u[d]);return Yt(t,this,u)})}),Ya=Q(function(t,n){var s=je(n,Sr(Ya));return Fe(t,qt,i,n,s)}),Vd=Q(function(t,n){var s=je(n,Sr(Vd));return Fe(t,Ye,i,n,s)}),s_=Ne(function(t,n){return Fe(t,gn,i,i,i,n)});function o_(t,n){if(typeof t!="function")throw new re(a);return n=n===i?n:q(n),Q(t,n)}function a_(t,n){if(typeof t!="function")throw new re(a);return n=n==null?0:At(q(n),0),Q(function(s){var u=s[n],d=sn(s,0,n);return u&&Xe(d,u),Yt(t,this,d)})}function u_(t,n,s){var u=!0,d=!0;if(typeof t!="function")throw new re(a);return vt(s)&&(u="leading"in s?!!s.leading:u,d="trailing"in s?!!s.trailing:d),Bd(t,n,{leading:u,maxWait:n,trailing:d})}function l_(t){return Pd(t,1)}function c_(t,n){return Ya(La(n),t)}function d_(){if(!arguments.length)return[];var t=arguments[0];return G(t)?t:[t]}function f_(t){return se(t,$)}function h_(t,n){return n=typeof n=="function"?n:i,se(t,$,n)}function p_(t){return se(t,x|$)}function m_(t,n){return n=typeof n=="function"?n:i,se(t,x|$,n)}function g_(t,n){return n==null||Mc(t,n,It(n))}function ye(t,n){return t===n||t!==t&&n!==n}var v_=Hs(xa),y_=Hs(function(t,n){return t>=n}),Cn=kc(function(){return arguments}())?kc:function(t){return wt(t)&&lt.call(t,"callee")&&!Ec.call(t,"callee")},G=b.isArray,__=ic?Jt(ic):$v;function Bt(t){return t!=null&&Ys(t.length)&&!Pe(t)}function bt(t){return wt(t)&&Bt(t)}function x_(t){return t===!0||t===!1||wt(t)&&Ht(t)==Kr}var on=Rg||su,w_=sc?Jt(sc):Cv;function b_(t){return wt(t)&&t.nodeType===1&&!vi(t)}function E_(t){if(t==null)return!0;if(Bt(t)&&(G(t)||typeof t=="string"||typeof t.splice=="function"||on(t)||Tr(t)||Cn(t)))return!t.length;var n=kt(t);if(n==pe||n==me)return!t.size;if(mi(t))return!Ea(t).length;for(var s in t)if(lt.call(t,s))return!1;return!0}function S_(t,n){return fi(t,n)}function T_(t,n,s){s=typeof s=="function"?s:i;var u=s?s(t,n):i;return u===i?fi(t,n,i,s):!!u}function Ja(t){if(!wt(t))return!1;var n=Ht(t);return n==os||n==Yp||typeof t.message=="string"&&typeof t.name=="string"&&!vi(t)}function A_(t){return typeof t=="number"&&Tc(t)}function Pe(t){if(!vt(t))return!1;var n=Ht(t);return n==as||n==Ll||n==qp||n==Kp}function Zd(t){return typeof t=="number"&&t==q(t)}function Ys(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Je}function vt(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}function wt(t){return t!=null&&typeof t=="object"}var Gd=oc?Jt(oc):Iv;function $_(t,n){return t===n||ba(t,n,Ha(n))}function C_(t,n,s){return s=typeof s=="function"?s:i,ba(t,n,Ha(n),s)}function O_(t){return qd(t)&&t!=+t}function I_(t){if(h0(t))throw new Z(o);return Pc(t)}function M_(t){return t===null}function L_(t){return t==null}function qd(t){return typeof t=="number"||wt(t)&&Ht(t)==jr}function vi(t){if(!wt(t)||Ht(t)!=Me)return!1;var n=ws(t);if(n===null)return!0;var s=lt.call(n,"constructor")&&n.constructor;return typeof s=="function"&&s instanceof s&&vs.call(s)==Cg}var Ka=ac?Jt(ac):Mv;function D_(t){return Zd(t)&&t>=-Je&&t<=Je}var Yd=uc?Jt(uc):Lv;function Js(t){return typeof t=="string"||!G(t)&&wt(t)&&Ht(t)==ti}function Xt(t){return typeof t=="symbol"||wt(t)&&Ht(t)==us}var Tr=lc?Jt(lc):Dv;function R_(t){return t===i}function F_(t){return wt(t)&&kt(t)==ei}function N_(t){return wt(t)&&Ht(t)==jp}var k_=Hs(Sa),P_=Hs(function(t,n){return t<=n});function Jd(t){if(!t)return[];if(Bt(t))return Js(t)?ge(t):Wt(t);if(ii&&t[ii])return gg(t[ii]());var n=kt(t),s=n==pe?da:n==me?ps:Ar;return s(t)}function He(t){if(!t)return t===0?t:0;if(t=ue(t),t===_n||t===-_n){var n=t<0?-1:1;return n*Bp}return t===t?t:0}function q(t){var n=He(t),s=n%1;return n===n?s?n-s:n:0}function Kd(t){return t?Sn(q(t),0,Se):0}function ue(t){if(typeof t=="number")return t;if(Xt(t))return is;if(vt(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=vt(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=mc(t);var s=_m.test(t);return s||wm.test(t)?Qm(t.slice(2),s?2:8):ym.test(t)?is:+t}function Xd(t){return Ae(t,Vt(t))}function H_(t){return t?Sn(q(t),-Je,Je):t===0?t:0}function at(t){return t==null?"":Kt(t)}var z_=br(function(t,n){if(mi(n)||Bt(n)){Ae(n,It(n),t);return}for(var s in n)lt.call(n,s)&&li(t,s,n[s])}),jd=br(function(t,n){Ae(n,Vt(n),t)}),Ks=br(function(t,n,s,u){Ae(n,Vt(n),t,u)}),U_=br(function(t,n,s,u){Ae(n,It(n),t,u)}),W_=Ne(va);function B_(t,n){var s=wr(t);return n==null?s:Ic(s,n)}var V_=Q(function(t,n){t=ct(t);var s=-1,u=n.length,d=u>2?n[2]:i;for(d&&zt(n[0],n[1],d)&&(u=1);++s<u;)for(var h=n[s],g=Vt(h),y=-1,w=g.length;++y<w;){var T=g[y],A=t[T];(A===i||ye(A,yr[T])&&!lt.call(t,T))&&(t[T]=h[T])}return t}),Z_=Q(function(t){return t.push(i,md),Yt(Qd,i,t)});function G_(t,n){return dc(t,z(n,3),Te)}function q_(t,n){return dc(t,z(n,3),_a)}function Y_(t,n){return t==null?t:ya(t,z(n,3),Vt)}function J_(t,n){return t==null?t:Fc(t,z(n,3),Vt)}function K_(t,n){return t&&Te(t,z(n,3))}function X_(t,n){return t&&_a(t,z(n,3))}function j_(t){return t==null?[]:Ms(t,It(t))}function Q_(t){return t==null?[]:Ms(t,Vt(t))}function Xa(t,n,s){var u=t==null?i:Tn(t,n);return u===i?s:u}function tx(t,n){return t!=null&&yd(t,n,Ev)}function ja(t,n){return t!=null&&yd(t,n,Sv)}var ex=cd(function(t,n,s){n!=null&&typeof n.toString!="function"&&(n=ys.call(n)),t[n]=s},tu(Zt)),nx=cd(function(t,n,s){n!=null&&typeof n.toString!="function"&&(n=ys.call(n)),lt.call(t,n)?t[n].push(s):t[n]=[s]},z),rx=Q(di);function It(t){return Bt(t)?Cc(t):Ea(t)}function Vt(t){return Bt(t)?Cc(t,!0):Rv(t)}function ix(t,n){var s={};return n=z(n,3),Te(t,function(u,d,h){Re(s,n(u,d,h),u)}),s}function sx(t,n){var s={};return n=z(n,3),Te(t,function(u,d,h){Re(s,d,n(u,d,h))}),s}var ox=br(function(t,n,s){Ls(t,n,s)}),Qd=br(function(t,n,s,u){Ls(t,n,s,u)}),ax=Ne(function(t,n){var s={};if(t==null)return s;var u=!1;n=gt(n,function(h){return h=rn(h,t),u||(u=h.length>1),h}),Ae(t,ka(t),s),u&&(s=se(s,x|S|$,e0));for(var d=n.length;d--;)Oa(s,n[d]);return s});function ux(t,n){return tf(t,qs(z(n)))}var lx=Ne(function(t,n){return t==null?{}:Nv(t,n)});function tf(t,n){if(t==null)return{};var s=gt(ka(t),function(u){return[u]});return n=z(n),Zc(t,s,function(u,d){return n(u,d[0])})}function cx(t,n,s){n=rn(n,t);var u=-1,d=n.length;for(d||(d=1,t=i);++u<d;){var h=t==null?i:t[$e(n[u])];h===i&&(u=d,h=s),t=Pe(h)?h.call(t):h}return t}function dx(t,n,s){return t==null?t:hi(t,n,s)}function fx(t,n,s,u){return u=typeof u=="function"?u:i,t==null?t:hi(t,n,s,u)}var ef=hd(It),nf=hd(Vt);function hx(t,n,s){var u=G(t),d=u||on(t)||Tr(t);if(n=z(n,4),s==null){var h=t&&t.constructor;d?s=u?new h:[]:vt(t)?s=Pe(h)?wr(ws(t)):{}:s={}}return(d?ne:Te)(t,function(g,y,w){return n(s,g,y,w)}),s}function px(t,n){return t==null?!0:Oa(t,n)}function mx(t,n,s){return t==null?t:Kc(t,n,La(s))}function gx(t,n,s,u){return u=typeof u=="function"?u:i,t==null?t:Kc(t,n,La(s),u)}function Ar(t){return t==null?[]:ca(t,It(t))}function vx(t){return t==null?[]:ca(t,Vt(t))}function yx(t,n,s){return s===i&&(s=n,n=i),s!==i&&(s=ue(s),s=s===s?s:0),n!==i&&(n=ue(n),n=n===n?n:0),Sn(ue(t),n,s)}function _x(t,n,s){return n=He(n),s===i?(s=n,n=0):s=He(s),t=ue(t),Tv(t,n,s)}function xx(t,n,s){if(s&&typeof s!="boolean"&&zt(t,n,s)&&(n=s=i),s===i&&(typeof n=="boolean"?(s=n,n=i):typeof t=="boolean"&&(s=t,t=i)),t===i&&n===i?(t=0,n=1):(t=He(t),n===i?(n=t,t=0):n=He(n)),t>n){var u=t;t=n,n=u}if(s||t%1||n%1){var d=Ac();return Nt(t+d*(n-t+jm("1e-"+((d+"").length-1))),n)}return Aa(t,n)}var wx=Er(function(t,n,s){return n=n.toLowerCase(),t+(s?rf(n):n)});function rf(t){return Qa(at(t).toLowerCase())}function sf(t){return t=at(t),t&&t.replace(Em,dg).replace(Wm,"")}function bx(t,n,s){t=at(t),n=Kt(n);var u=t.length;s=s===i?u:Sn(q(s),0,u);var d=s;return s-=n.length,s>=0&&t.slice(s,d)==n}function Ex(t){return t=at(t),t&&rm.test(t)?t.replace(Fl,fg):t}function Sx(t){return t=at(t),t&&lm.test(t)?t.replace(Yo,"\\$&"):t}var Tx=Er(function(t,n,s){return t+(s?"-":"")+n.toLowerCase()}),Ax=Er(function(t,n,s){return t+(s?" ":"")+n.toLowerCase()}),$x=ad("toLowerCase");function Cx(t,n,s){t=at(t),n=q(n);var u=n?vr(t):0;if(!n||u>=n)return t;var d=(n-u)/2;return Ps(Ts(d),s)+t+Ps(Ss(d),s)}function Ox(t,n,s){t=at(t),n=q(n);var u=n?vr(t):0;return n&&u<n?t+Ps(n-u,s):t}function Ix(t,n,s){t=at(t),n=q(n);var u=n?vr(t):0;return n&&u<n?Ps(n-u,s)+t:t}function Mx(t,n,s){return s||n==null?n=0:n&&(n=+n),Pg(at(t).replace(Jo,""),n||0)}function Lx(t,n,s){return(s?zt(t,n,s):n===i)?n=1:n=q(n),$a(at(t),n)}function Dx(){var t=arguments,n=at(t[0]);return t.length<3?n:n.replace(t[1],t[2])}var Rx=Er(function(t,n,s){return t+(s?"_":"")+n.toLowerCase()});function Fx(t,n,s){return s&&typeof s!="number"&&zt(t,n,s)&&(n=s=i),s=s===i?Se:s>>>0,s?(t=at(t),t&&(typeof n=="string"||n!=null&&!Ka(n))&&(n=Kt(n),!n&&gr(t))?sn(ge(t),0,s):t.split(n,s)):[]}var Nx=Er(function(t,n,s){return t+(s?" ":"")+Qa(n)});function kx(t,n,s){return t=at(t),s=s==null?0:Sn(q(s),0,t.length),n=Kt(n),t.slice(s,s+n.length)==n}function Px(t,n,s){var u=f.templateSettings;s&&zt(t,n,s)&&(n=i),t=at(t),n=Ks({},n,u,pd);var d=Ks({},n.imports,u.imports,pd),h=It(d),g=ca(d,h),y,w,T=0,A=n.interpolate||ls,O="__p += '",M=fa((n.escape||ls).source+"|"+A.source+"|"+(A===Nl?vm:ls).source+"|"+(n.evaluate||ls).source+"|$","g"),k="//# sourceURL="+(lt.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++qm+"]")+`
`;t.replace(M,function(W,tt,rt,jt,Ut,Qt){return rt||(rt=jt),O+=t.slice(T,Qt).replace(Sm,hg),tt&&(y=!0,O+=`' +
__e(`+tt+`) +
'`),Ut&&(w=!0,O+=`';
`+Ut+`;
__p += '`),rt&&(O+=`' +
((__t = (`+rt+`)) == null ? '' : __t) +
'`),T=Qt+W.length,W}),O+=`';
`;var U=lt.call(n,"variable")&&n.variable;if(!U)O=`with (obj) {
`+O+`
}
`;else if(mm.test(U))throw new Z(c);O=(w?O.replace(Qp,""):O).replace(tm,"$1").replace(em,"$1;"),O="function("+(U||"obj")+`) {
`+(U?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(w?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+O+`return __p
}`;var J=af(function(){return st(h,k+"return "+O).apply(i,g)});if(J.source=O,Ja(J))throw J;return J}function Hx(t){return at(t).toLowerCase()}function zx(t){return at(t).toUpperCase()}function Ux(t,n,s){if(t=at(t),t&&(s||n===i))return mc(t);if(!t||!(n=Kt(n)))return t;var u=ge(t),d=ge(n),h=gc(u,d),g=vc(u,d)+1;return sn(u,h,g).join("")}function Wx(t,n,s){if(t=at(t),t&&(s||n===i))return t.slice(0,_c(t)+1);if(!t||!(n=Kt(n)))return t;var u=ge(t),d=vc(u,ge(n))+1;return sn(u,0,d).join("")}function Bx(t,n,s){if(t=at(t),t&&(s||n===i))return t.replace(Jo,"");if(!t||!(n=Kt(n)))return t;var u=ge(t),d=gc(u,ge(n));return sn(u,d).join("")}function Vx(t,n){var s=yn,u=Po;if(vt(n)){var d="separator"in n?n.separator:d;s="length"in n?q(n.length):s,u="omission"in n?Kt(n.omission):u}t=at(t);var h=t.length;if(gr(t)){var g=ge(t);h=g.length}if(s>=h)return t;var y=s-vr(u);if(y<1)return u;var w=g?sn(g,0,y).join(""):t.slice(0,y);if(d===i)return w+u;if(g&&(y+=w.length-y),Ka(d)){if(t.slice(y).search(d)){var T,A=w;for(d.global||(d=fa(d.source,at(kl.exec(d))+"g")),d.lastIndex=0;T=d.exec(A);)var O=T.index;w=w.slice(0,O===i?y:O)}}else if(t.indexOf(Kt(d),y)!=y){var M=w.lastIndexOf(d);M>-1&&(w=w.slice(0,M))}return w+u}function Zx(t){return t=at(t),t&&nm.test(t)?t.replace(Rl,xg):t}var Gx=Er(function(t,n,s){return t+(s?" ":"")+n.toUpperCase()}),Qa=ad("toUpperCase");function of(t,n,s){return t=at(t),n=s?i:n,n===i?mg(t)?Eg(t):og(t):t.match(n)||[]}var af=Q(function(t,n){try{return Yt(t,i,n)}catch(s){return Ja(s)?s:new Z(s)}}),qx=Ne(function(t,n){return ne(n,function(s){s=$e(s),Re(t,s,qa(t[s],t))}),t});function Yx(t){var n=t==null?0:t.length,s=z();return t=n?gt(t,function(u){if(typeof u[1]!="function")throw new re(a);return[s(u[0]),u[1]]}):[],Q(function(u){for(var d=-1;++d<n;){var h=t[d];if(Yt(h[0],this,u))return Yt(h[1],this,u)}})}function Jx(t){return xv(se(t,x))}function tu(t){return function(){return t}}function Kx(t,n){return t==null||t!==t?n:t}var Xx=ld(),jx=ld(!0);function Zt(t){return t}function eu(t){return Hc(typeof t=="function"?t:se(t,x))}function Qx(t){return Uc(se(t,x))}function tw(t,n){return Wc(t,se(n,x))}var ew=Q(function(t,n){return function(s){return di(s,t,n)}}),nw=Q(function(t,n){return function(s){return di(t,s,n)}});function nu(t,n,s){var u=It(n),d=Ms(n,u);s==null&&!(vt(n)&&(d.length||!u.length))&&(s=n,n=t,t=this,d=Ms(n,It(n)));var h=!(vt(s)&&"chain"in s)||!!s.chain,g=Pe(t);return ne(d,function(y){var w=n[y];t[y]=w,g&&(t.prototype[y]=function(){var T=this.__chain__;if(h||T){var A=t(this.__wrapped__),O=A.__actions__=Wt(this.__actions__);return O.push({func:w,args:arguments,thisArg:t}),A.__chain__=T,A}return w.apply(t,Xe([this.value()],arguments))})}),t}function rw(){return Ot._===this&&(Ot._=Og),this}function ru(){}function iw(t){return t=q(t),Q(function(n){return Bc(n,t)})}var sw=Ra(gt),ow=Ra(cc),aw=Ra(sa);function uf(t){return Ua(t)?oa($e(t)):kv(t)}function uw(t){return function(n){return t==null?i:Tn(t,n)}}var lw=dd(),cw=dd(!0);function iu(){return[]}function su(){return!1}function dw(){return{}}function fw(){return""}function hw(){return!0}function pw(t,n){if(t=q(t),t<1||t>Je)return[];var s=Se,u=Nt(t,Se);n=z(n),t-=Se;for(var d=la(u,n);++s<t;)n(s);return d}function mw(t){return G(t)?gt(t,$e):Xt(t)?[t]:Wt($d(at(t)))}function gw(t){var n=++$g;return at(t)+n}var vw=ks(function(t,n){return t+n},0),yw=Fa("ceil"),_w=ks(function(t,n){return t/n},1),xw=Fa("floor");function ww(t){return t&&t.length?Is(t,Zt,xa):i}function bw(t,n){return t&&t.length?Is(t,z(n,2),xa):i}function Ew(t){return hc(t,Zt)}function Sw(t,n){return hc(t,z(n,2))}function Tw(t){return t&&t.length?Is(t,Zt,Sa):i}function Aw(t,n){return t&&t.length?Is(t,z(n,2),Sa):i}var $w=ks(function(t,n){return t*n},1),Cw=Fa("round"),Ow=ks(function(t,n){return t-n},0);function Iw(t){return t&&t.length?ua(t,Zt):0}function Mw(t,n){return t&&t.length?ua(t,z(n,2)):0}return f.after=Qy,f.ary=Pd,f.assign=z_,f.assignIn=jd,f.assignInWith=Ks,f.assignWith=U_,f.at=W_,f.before=Hd,f.bind=qa,f.bindAll=qx,f.bindKey=zd,f.castArray=d_,f.chain=Fd,f.chunk=x0,f.compact=w0,f.concat=b0,f.cond=Yx,f.conforms=Jx,f.constant=tu,f.countBy=Iy,f.create=B_,f.curry=Ud,f.curryRight=Wd,f.debounce=Bd,f.defaults=V_,f.defaultsDeep=Z_,f.defer=t_,f.delay=e_,f.difference=E0,f.differenceBy=S0,f.differenceWith=T0,f.drop=A0,f.dropRight=$0,f.dropRightWhile=C0,f.dropWhile=O0,f.fill=I0,f.filter=Ly,f.flatMap=Fy,f.flatMapDeep=Ny,f.flatMapDepth=ky,f.flatten=Md,f.flattenDeep=M0,f.flattenDepth=L0,f.flip=n_,f.flow=Xx,f.flowRight=jx,f.fromPairs=D0,f.functions=j_,f.functionsIn=Q_,f.groupBy=Py,f.initial=F0,f.intersection=N0,f.intersectionBy=k0,f.intersectionWith=P0,f.invert=ex,f.invertBy=nx,f.invokeMap=zy,f.iteratee=eu,f.keyBy=Uy,f.keys=It,f.keysIn=Vt,f.map=Vs,f.mapKeys=ix,f.mapValues=sx,f.matches=Qx,f.matchesProperty=tw,f.memoize=Gs,f.merge=ox,f.mergeWith=Qd,f.method=ew,f.methodOf=nw,f.mixin=nu,f.negate=qs,f.nthArg=iw,f.omit=ax,f.omitBy=ux,f.once=r_,f.orderBy=Wy,f.over=sw,f.overArgs=i_,f.overEvery=ow,f.overSome=aw,f.partial=Ya,f.partialRight=Vd,f.partition=By,f.pick=lx,f.pickBy=tf,f.property=uf,f.propertyOf=uw,f.pull=W0,f.pullAll=Dd,f.pullAllBy=B0,f.pullAllWith=V0,f.pullAt=Z0,f.range=lw,f.rangeRight=cw,f.rearg=s_,f.reject=Gy,f.remove=G0,f.rest=o_,f.reverse=Za,f.sampleSize=Yy,f.set=dx,f.setWith=fx,f.shuffle=Jy,f.slice=q0,f.sortBy=jy,f.sortedUniq=ty,f.sortedUniqBy=ey,f.split=Fx,f.spread=a_,f.tail=ny,f.take=ry,f.takeRight=iy,f.takeRightWhile=sy,f.takeWhile=oy,f.tap=wy,f.throttle=u_,f.thru=Bs,f.toArray=Jd,f.toPairs=ef,f.toPairsIn=nf,f.toPath=mw,f.toPlainObject=Xd,f.transform=hx,f.unary=l_,f.union=ay,f.unionBy=uy,f.unionWith=ly,f.uniq=cy,f.uniqBy=dy,f.uniqWith=fy,f.unset=px,f.unzip=Ga,f.unzipWith=Rd,f.update=mx,f.updateWith=gx,f.values=Ar,f.valuesIn=vx,f.without=hy,f.words=of,f.wrap=c_,f.xor=py,f.xorBy=my,f.xorWith=gy,f.zip=vy,f.zipObject=yy,f.zipObjectDeep=_y,f.zipWith=xy,f.entries=ef,f.entriesIn=nf,f.extend=jd,f.extendWith=Ks,nu(f,f),f.add=vw,f.attempt=af,f.camelCase=wx,f.capitalize=rf,f.ceil=yw,f.clamp=yx,f.clone=f_,f.cloneDeep=p_,f.cloneDeepWith=m_,f.cloneWith=h_,f.conformsTo=g_,f.deburr=sf,f.defaultTo=Kx,f.divide=_w,f.endsWith=bx,f.eq=ye,f.escape=Ex,f.escapeRegExp=Sx,f.every=My,f.find=Dy,f.findIndex=Od,f.findKey=G_,f.findLast=Ry,f.findLastIndex=Id,f.findLastKey=q_,f.floor=xw,f.forEach=Nd,f.forEachRight=kd,f.forIn=Y_,f.forInRight=J_,f.forOwn=K_,f.forOwnRight=X_,f.get=Xa,f.gt=v_,f.gte=y_,f.has=tx,f.hasIn=ja,f.head=Ld,f.identity=Zt,f.includes=Hy,f.indexOf=R0,f.inRange=_x,f.invoke=rx,f.isArguments=Cn,f.isArray=G,f.isArrayBuffer=__,f.isArrayLike=Bt,f.isArrayLikeObject=bt,f.isBoolean=x_,f.isBuffer=on,f.isDate=w_,f.isElement=b_,f.isEmpty=E_,f.isEqual=S_,f.isEqualWith=T_,f.isError=Ja,f.isFinite=A_,f.isFunction=Pe,f.isInteger=Zd,f.isLength=Ys,f.isMap=Gd,f.isMatch=$_,f.isMatchWith=C_,f.isNaN=O_,f.isNative=I_,f.isNil=L_,f.isNull=M_,f.isNumber=qd,f.isObject=vt,f.isObjectLike=wt,f.isPlainObject=vi,f.isRegExp=Ka,f.isSafeInteger=D_,f.isSet=Yd,f.isString=Js,f.isSymbol=Xt,f.isTypedArray=Tr,f.isUndefined=R_,f.isWeakMap=F_,f.isWeakSet=N_,f.join=H0,f.kebabCase=Tx,f.last=ae,f.lastIndexOf=z0,f.lowerCase=Ax,f.lowerFirst=$x,f.lt=k_,f.lte=P_,f.max=ww,f.maxBy=bw,f.mean=Ew,f.meanBy=Sw,f.min=Tw,f.minBy=Aw,f.stubArray=iu,f.stubFalse=su,f.stubObject=dw,f.stubString=fw,f.stubTrue=hw,f.multiply=$w,f.nth=U0,f.noConflict=rw,f.noop=ru,f.now=Zs,f.pad=Cx,f.padEnd=Ox,f.padStart=Ix,f.parseInt=Mx,f.random=xx,f.reduce=Vy,f.reduceRight=Zy,f.repeat=Lx,f.replace=Dx,f.result=cx,f.round=Cw,f.runInContext=_,f.sample=qy,f.size=Ky,f.snakeCase=Rx,f.some=Xy,f.sortedIndex=Y0,f.sortedIndexBy=J0,f.sortedIndexOf=K0,f.sortedLastIndex=X0,f.sortedLastIndexBy=j0,f.sortedLastIndexOf=Q0,f.startCase=Nx,f.startsWith=kx,f.subtract=Ow,f.sum=Iw,f.sumBy=Mw,f.template=Px,f.times=pw,f.toFinite=He,f.toInteger=q,f.toLength=Kd,f.toLower=Hx,f.toNumber=ue,f.toSafeInteger=H_,f.toString=at,f.toUpper=zx,f.trim=Ux,f.trimEnd=Wx,f.trimStart=Bx,f.truncate=Vx,f.unescape=Zx,f.uniqueId=gw,f.upperCase=Gx,f.upperFirst=Qa,f.each=Nd,f.eachRight=kd,f.first=Ld,nu(f,function(){var t={};return Te(f,function(n,s){lt.call(f.prototype,s)||(t[s]=n)}),t}(),{chain:!1}),f.VERSION=e,ne(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){f[t].placeholder=f}),ne(["drop","take"],function(t,n){nt.prototype[t]=function(s){s=s===i?1:At(q(s),0);var u=this.__filtered__&&!n?new nt(this):this.clone();return u.__filtered__?u.__takeCount__=Nt(s,u.__takeCount__):u.__views__.push({size:Nt(s,Se),type:t+(u.__dir__<0?"Right":"")}),u},nt.prototype[t+"Right"]=function(s){return this.reverse()[t](s).reverse()}}),ne(["filter","map","takeWhile"],function(t,n){var s=n+1,u=s==Ml||s==Wp;nt.prototype[t]=function(d){var h=this.clone();return h.__iteratees__.push({iteratee:z(d,3),type:s}),h.__filtered__=h.__filtered__||u,h}}),ne(["head","last"],function(t,n){var s="take"+(n?"Right":"");nt.prototype[t]=function(){return this[s](1).value()[0]}}),ne(["initial","tail"],function(t,n){var s="drop"+(n?"":"Right");nt.prototype[t]=function(){return this.__filtered__?new nt(this):this[s](1)}}),nt.prototype.compact=function(){return this.filter(Zt)},nt.prototype.find=function(t){return this.filter(t).head()},nt.prototype.findLast=function(t){return this.reverse().find(t)},nt.prototype.invokeMap=Q(function(t,n){return typeof t=="function"?new nt(this):this.map(function(s){return di(s,t,n)})}),nt.prototype.reject=function(t){return this.filter(qs(z(t)))},nt.prototype.slice=function(t,n){t=q(t);var s=this;return s.__filtered__&&(t>0||n<0)?new nt(s):(t<0?s=s.takeRight(-t):t&&(s=s.drop(t)),n!==i&&(n=q(n),s=n<0?s.dropRight(-n):s.take(n-t)),s)},nt.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},nt.prototype.toArray=function(){return this.take(Se)},Te(nt.prototype,function(t,n){var s=/^(?:filter|find|map|reject)|While$/.test(n),u=/^(?:head|last)$/.test(n),d=f[u?"take"+(n=="last"?"Right":""):n],h=u||/^find/.test(n);!d||(f.prototype[n]=function(){var g=this.__wrapped__,y=u?[1]:arguments,w=g instanceof nt,T=y[0],A=w||G(g),O=function(tt){var rt=d.apply(f,Xe([tt],y));return u&&M?rt[0]:rt};A&&s&&typeof T=="function"&&T.length!=1&&(w=A=!1);var M=this.__chain__,k=!!this.__actions__.length,U=h&&!M,J=w&&!k;if(!h&&A){g=J?g:new nt(this);var W=t.apply(g,y);return W.__actions__.push({func:Bs,args:[O],thisArg:i}),new ie(W,M)}return U&&J?t.apply(this,y):(W=this.thru(O),U?u?W.value()[0]:W.value():W)})}),ne(["pop","push","shift","sort","splice","unshift"],function(t){var n=ms[t],s=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",u=/^(?:pop|shift)$/.test(t);f.prototype[t]=function(){var d=arguments;if(u&&!this.__chain__){var h=this.value();return n.apply(G(h)?h:[],d)}return this[s](function(g){return n.apply(G(g)?g:[],d)})}}),Te(nt.prototype,function(t,n){var s=f[n];if(s){var u=s.name+"";lt.call(xr,u)||(xr[u]=[]),xr[u].push({name:n,func:s})}}),xr[Ns(i,Ct).name]=[{name:"wrapper",func:i}],nt.prototype.clone=Zg,nt.prototype.reverse=Gg,nt.prototype.value=qg,f.prototype.at=by,f.prototype.chain=Ey,f.prototype.commit=Sy,f.prototype.next=Ty,f.prototype.plant=$y,f.prototype.reverse=Cy,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=Oy,f.prototype.first=f.prototype.head,ii&&(f.prototype[ii]=Ay),f},Qe=Sg();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Ot._=Qe,define(function(){return Qe})):xn?((xn.exports=Qe)._=Qe,ea._=Qe):Ot._=Qe}).call(Or)});v();v();v();v();v();var Qs=globalThis,eo=Qs.ShadowRoot&&(Qs.ShadyCSS===void 0||Qs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mf=Symbol(),pf=new WeakMap,to=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==mf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(eo&&e===void 0){let o=r!==void 0&&r.length===1;o&&(e=pf.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&pf.set(r,e))}return e}toString(){return this.cssText}},gf=i=>new to(typeof i=="string"?i:i+"",void 0,mf);var uu=(i,e)=>{if(eo)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let o=document.createElement("style"),a=Qs.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,i.appendChild(o)}},no=eo?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let o of e.cssRules)r+=o.cssText;return gf(r)})(i):i;var{is:Uw,defineProperty:Ww,getOwnPropertyDescriptor:Bw,getOwnPropertyNames:Vw,getOwnPropertySymbols:Zw,getPrototypeOf:Gw}=Object,an=globalThis,vf=an.trustedTypes,qw=vf?vf.emptyScript:"",lu=an.reactiveElementPolyfillSupport,yi=(i,e)=>i,ro={toAttribute(i,e){switch(e){case Boolean:i=i?qw:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(o){r=null}}return r}},cu=(i,e)=>!Uw(i,e),yf={attribute:!0,type:String,converter:ro,reflect:!1,hasChanged:cu},_f,xf;(_f=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(xf=an.litPropertyMetadata)!=null||(an.litPropertyMetadata=new WeakMap);var In=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=yf){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let o=Symbol(),a=this.getPropertyDescriptor(e,o,r);a!==void 0&&Ww(this.prototype,e,a)}}static getPropertyDescriptor(e,r,o){var l;let{get:a,set:c}=(l=Bw(this.prototype,e))!=null?l:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);c.call(this,p),this.requestUpdate(e,m,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:yf}static _$Ei(){if(this.hasOwnProperty(yi("elementProperties")))return;let e=Gw(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(yi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yi("properties"))){let r=this.properties,o=[...Vw(r),...Zw(r)];for(let a of o)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[o,a]of r)this.elementProperties.set(o,a)}this._$Eh=new Map;for(let[r,o]of this.elementProperties){let a=this._$Eu(r,o);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let a of o)r.unshift(no(a))}else e!==void 0&&r.push(no(e));return r}static _$Eu(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,o;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return uu(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(o=>{var a;return(a=o.hostConnected)==null?void 0:a.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EO(e,r){var c;let o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(a!==void 0&&o.reflect===!0){let l=(((c=o.converter)==null?void 0:c.toAttribute)!==void 0?o.converter:ro).toAttribute(r,o.type);this._$Em=e,l==null?this.removeAttribute(a):this.setAttribute(a,l),this._$Em=null}}_$AK(e,r){var c;let o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let l=o.getPropertyOptions(a),p=typeof l.converter=="function"?{fromAttribute:l.converter}:((c=l.converter)==null?void 0:c.fromAttribute)!==void 0?l.converter:ro;this._$Em=a,this[a]=p.fromAttribute(r,l.type),this._$Em=null}}requestUpdate(e,r,o,a=!1,c){var l;if(e!==void 0){if(o!=null||(o=this.constructor.getPropertyOptions(e)),!((l=o.hasChanged)!=null?l:cu)(a?c:this[e],r))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,o){var a;this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return On(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[c,l]of this._$Ep)this[c]=l;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[c,l]of a)l.wrapped!==!0||this._$AL.has(c)||this[c]===void 0||this.C(c,this[c],l)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(o=this._$ES)==null||o.forEach(a=>{var c;return(c=a.hostUpdate)==null?void 0:c.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(o=>{var a;return(a=o.hostUpdated)==null?void 0:a.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},wf;In.elementStyles=[],In.shadowRootOptions={mode:"open"},In[yi("elementProperties")]=new Map,In[yi("finalized")]=new Map,lu==null||lu({ReactiveElement:In}),((wf=an.reactiveElementVersions)!=null?wf:an.reactiveElementVersions=[]).push("2.0.0");v();var xi=globalThis,io=xi.trustedTypes,bf=io?io.createPolicy("lit-html",{createHTML:i=>i}):void 0,hu="$lit$",Ue=`lit$${(Math.random()+"").slice(9)}$`,pu="?"+Ue,Yw=`<${pu}>`,Dn=document,so=()=>Dn.createComment(""),wi=i=>i===null||typeof i!="object"&&typeof i!="function",Of=Array.isArray,If=i=>Of(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",du=`[ 	
\f\r]`,_i=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ef=/-->/g,Sf=/>/g,Mn=RegExp(`>|${du}(?:([^\\s"'>=/]+)(${du}*=${du}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tf=/'/g,Af=/"/g,Mf=/^(?:script|style|textarea|title)$/i,Lf=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),rE=Lf(1),iE=Lf(2),We=Symbol.for("lit-noChange"),Mt=Symbol.for("lit-nothing"),$f=new WeakMap,Ln=Dn.createTreeWalker(Dn,129);function Df(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return bf!==void 0?bf.createHTML(e):e}var Rf=(i,e)=>{let r=i.length-1,o=[],a,c=e===2?"<svg>":"",l=_i;for(let p=0;p<r;p++){let m=i[p],x,S,$=-1,R=0;for(;R<m.length&&(l.lastIndex=R,S=l.exec(m),S!==null);)R=l.lastIndex,l===_i?S[1]==="!--"?l=Ef:S[1]!==void 0?l=Sf:S[2]!==void 0?(Mf.test(S[2])&&(a=RegExp("</"+S[2],"g")),l=Mn):S[3]!==void 0&&(l=Mn):l===Mn?S[0]===">"?(l=a!=null?a:_i,$=-1):S[1]===void 0?$=-2:($=l.lastIndex-S[2].length,x=S[1],l=S[3]===void 0?Mn:S[3]==='"'?Af:Tf):l===Af||l===Tf?l=Mn:l===Ef||l===Sf?l=_i:(l=Mn,a=void 0);let I=l===Mn&&i[p+1].startsWith("/>")?" ":"";c+=l===_i?m+Yw:$>=0?(o.push(x),m.slice(0,$)+hu+m.slice($)+Ue+I):m+Ue+($===-2?p:I)}return[Df(i,c+(i[r]||"<?>")+(e===2?"</svg>":"")),o]},Rn=class{constructor({strings:e,_$litType$:r},o){let a;this.parts=[];let c=0,l=0,p=e.length-1,m=this.parts,[x,S]=Rf(e,r);if(this.el=Rn.createElement(x,o),Ln.currentNode=this.el.content,r===2){let $=this.el.content.firstChild;$.replaceWith(...$.childNodes)}for(;(a=Ln.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let $ of a.getAttributeNames())if($.endsWith(hu)){let R=S[l++],I=a.getAttribute($).split(Ue),F=/([.?@])?(.*)/.exec(R);m.push({type:1,index:c,name:F[2],strings:I,ctor:F[1]==="."?ao:F[1]==="?"?uo:F[1]==="@"?lo:kn}),a.removeAttribute($)}else $.startsWith(Ue)&&(m.push({type:6,index:c}),a.removeAttribute($));if(Mf.test(a.tagName)){let $=a.textContent.split(Ue),R=$.length-1;if(R>0){a.textContent=io?io.emptyScript:"";for(let I=0;I<R;I++)a.append($[I],so()),Ln.nextNode(),m.push({type:2,index:++c});a.append($[R],so())}}}else if(a.nodeType===8)if(a.data===pu)m.push({type:2,index:c});else{let $=-1;for(;($=a.data.indexOf(Ue,$+1))!==-1;)m.push({type:7,index:c}),$+=Ue.length-1}c++}}static createElement(e,r){let o=Dn.createElement("template");return o.innerHTML=e,o}};function Fn(i,e,r=i,o){var l,p,m;if(e===We)return e;let a=o!==void 0?(l=r._$Co)==null?void 0:l[o]:r._$Cl,c=wi(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),c===void 0?a=void 0:(a=new c(i),a._$AT(i,r,o)),o!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[o]=a:r._$Cl=a),a!==void 0&&(e=Fn(i,a._$AS(i,e.values),a,o)),e}var oo=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var x;let{el:{content:r},parts:o}=this._$AD,a=((x=e==null?void 0:e.creationScope)!=null?x:Dn).importNode(r,!0);Ln.currentNode=a;let c=Ln.nextNode(),l=0,p=0,m=o[0];for(;m!==void 0;){if(l===m.index){let S;m.type===2?S=new Nn(c,c.nextSibling,this,e):m.type===1?S=new m.ctor(c,m.name,m.strings,this,e):m.type===6&&(S=new co(c,this,e)),this._$AV.push(S),m=o[++p]}l!==(m==null?void 0:m.index)&&(c=Ln.nextNode(),l++)}return Ln.currentNode=Dn,a}p(e){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},Nn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,o,a){var c;this.type=2,this._$AH=Mt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=(c=a==null?void 0:a.isConnected)!=null?c:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Fn(this,e,r),wi(e)?e===Mt||e==null||e===""?(this._$AH!==Mt&&this._$AR(),this._$AH=Mt):e!==this._$AH&&e!==We&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):If(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Mt&&wi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Dn.createTextNode(e)),this._$AH=e}g(e){var c;let{values:r,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Rn.createElement(Df(o.h,o.h[0]),this.options)),o);if(((c=this._$AH)==null?void 0:c._$AD)===a)this._$AH.p(r);else{let l=new oo(a,this),p=l.u(this.options);l.p(r),this.$(p),this._$AH=l}}_$AC(e){let r=$f.get(e.strings);return r===void 0&&$f.set(e.strings,r=new Rn(e)),r}T(e){Of(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,a=0;for(let c of e)a===r.length?r.push(o=new Nn(this.k(so()),this.k(so()),this,this.options)):o=r[a],o._$AI(c),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},kn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,a,c){this.type=1,this._$AH=Mt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=c,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Mt}_$AI(e,r=this,o,a){let c=this.strings,l=!1;if(c===void 0)e=Fn(this,e,r,0),l=!wi(e)||e!==this._$AH&&e!==We,l&&(this._$AH=e);else{let p=e,m,x;for(e=c[0],m=0;m<c.length-1;m++)x=Fn(this,p[o+m],r,m),x===We&&(x=this._$AH[m]),l||(l=!wi(x)||x!==this._$AH[m]),x===Mt?e=Mt:e!==Mt&&(e+=(x!=null?x:"")+c[m+1]),this._$AH[m]=x}l&&!a&&this.j(e)}j(e){e===Mt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},ao=class extends kn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Mt?void 0:e}},uo=class extends kn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Mt)}},lo=class extends kn{constructor(e,r,o,a,c){super(e,r,o,a,c),this.type=5}_$AI(e,r=this){var l;if((e=(l=Fn(this,e,r,0))!=null?l:Mt)===We)return;let o=this._$AH,a=e===Mt&&o!==Mt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,c=e!==Mt&&(o===Mt||a);a&&this.element.removeEventListener(this.name,this,o),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)==null?void 0:r.host)!=null?o:this.element,e):this._$AH.handleEvent(e)}},co=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Fn(this,e)}},Ff={S:hu,A:Ue,P:pu,C:1,M:Rf,L:oo,R:If,V:Fn,D:Nn,I:kn,H:uo,N:lo,U:ao,B:co},fu=xi.litHtmlPolyfillSupport,Cf;fu==null||fu(Rn,Nn),((Cf=xi.litHtmlVersions)!=null?Cf:xi.litHtmlVersions=[]).push("3.0.0");v();v();v();var fo=globalThis,ho=fo.ShadowRoot&&(fo.ShadyCSS===void 0||fo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mu=Symbol(),Nf=new WeakMap,bi=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==mu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(ho&&e===void 0){let o=r!==void 0&&r.length===1;o&&(e=Nf.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Nf.set(r,e))}return e}toString(){return this.cssText}},kf=i=>new bi(typeof i=="string"?i:i+"",void 0,mu),B=(i,...e)=>{let r=i.length===1?i[0]:e.reduce((o,a,c)=>o+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+i[c+1],i[0]);return new bi(r,i,mu)},gu=(i,e)=>{if(ho)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let o=document.createElement("style"),a=fo.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,i.appendChild(o)}},po=ho?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let o of e.cssRules)r+=o.cssText;return kf(r)})(i):i;var{is:Jw,defineProperty:Kw,getOwnPropertyDescriptor:Xw,getOwnPropertyNames:jw,getOwnPropertySymbols:Qw,getPrototypeOf:tb}=Object,un=globalThis,Pf=un.trustedTypes,eb=Pf?Pf.emptyScript:"",vu=un.reactiveElementPolyfillSupport,Ei=(i,e)=>i,yu={toAttribute(i,e){switch(e){case Boolean:i=i?eb:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(o){r=null}}return r}},Bf=(i,e)=>!Jw(i,e),Hf={attribute:!0,type:String,converter:yu,reflect:!1,hasChanged:Bf},zf,Uf;(zf=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Uf=un.litPropertyMetadata)!=null||(un.litPropertyMetadata=new WeakMap);var Be=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Hf){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let o=Symbol(),a=this.getPropertyDescriptor(e,o,r);a!==void 0&&Kw(this.prototype,e,a)}}static getPropertyDescriptor(e,r,o){var l;let{get:a,set:c}=(l=Xw(this.prototype,e))!=null?l:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);c.call(this,p),this.requestUpdate(e,m,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:Hf}static _$Ei(){if(this.hasOwnProperty(Ei("elementProperties")))return;let e=tb(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ei("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ei("properties"))){let r=this.properties,o=[...jw(r),...Qw(r)];for(let a of o)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[o,a]of r)this.elementProperties.set(o,a)}this._$Eh=new Map;for(let[r,o]of this.elementProperties){let a=this._$Eu(r,o);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let a of o)r.unshift(po(a))}else e!==void 0&&r.push(po(e));return r}static _$Eu(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,o;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return gu(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(o=>{var a;return(a=o.hostConnected)==null?void 0:a.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var o;return(o=r.hostDisconnected)==null?void 0:o.call(r)})}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EO(e,r){var c;let o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(a!==void 0&&o.reflect===!0){let l=(((c=o.converter)==null?void 0:c.toAttribute)!==void 0?o.converter:yu).toAttribute(r,o.type);this._$Em=e,l==null?this.removeAttribute(a):this.setAttribute(a,l),this._$Em=null}}_$AK(e,r){var c;let o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let l=o.getPropertyOptions(a),p=typeof l.converter=="function"?{fromAttribute:l.converter}:((c=l.converter)==null?void 0:c.fromAttribute)!==void 0?l.converter:yu;this._$Em=a,this[a]=p.fromAttribute(r,l.type),this._$Em=null}}requestUpdate(e,r,o,a=!1,c){var l;if(e!==void 0){if(o!=null||(o=this.constructor.getPropertyOptions(e)),!((l=o.hasChanged)!=null?l:Bf)(a?c:this[e],r))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,o){var a;this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return On(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[c,l]of this._$Ep)this[c]=l;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[c,l]of a)l.wrapped!==!0||this._$AL.has(c)||this[c]===void 0||this.C(c,this[c],l)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(o=this._$ES)==null||o.forEach(a=>{var c;return(c=a.hostUpdate)==null?void 0:c.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(o=>{var a;return(a=o.hostUpdated)==null?void 0:a.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},Wf;Be.elementStyles=[],Be.shadowRootOptions={mode:"open"},Be[Ei("elementProperties")]=new Map,Be[Ei("finalized")]=new Map,vu==null||vu({ReactiveElement:Be}),((Wf=un.reactiveElementVersions)!=null?Wf:un.reactiveElementVersions=[]).push("2.0.0");v();var Ti=globalThis,mo=Ti.trustedTypes,Vf=mo?mo.createPolicy("lit-html",{createHTML:i=>i}):void 0,Xf="$lit$",ln=`lit$${(Math.random()+"").slice(9)}$`,jf="?"+ln,nb=`<${jf}>`,zn=document,Ai=()=>zn.createComment(""),$i=i=>i===null||typeof i!="object"&&typeof i!="function",Qf=Array.isArray,rb=i=>Qf(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",_u=`[ 	
\f\r]`,Si=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zf=/-->/g,Gf=/>/g,Pn=RegExp(`>|${_u}(?:([^\\s"'>=/]+)(${_u}*=${_u}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qf=/'/g,Yf=/"/g,th=/^(?:script|style|textarea|title)$/i,eh=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),D=eh(1),cE=eh(2),Un=Symbol.for("lit-noChange"),Lt=Symbol.for("lit-nothing"),Jf=new WeakMap,Hn=zn.createTreeWalker(zn,129);function nh(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vf!==void 0?Vf.createHTML(e):e}var ib=(i,e)=>{let r=i.length-1,o=[],a,c=e===2?"<svg>":"",l=Si;for(let p=0;p<r;p++){let m=i[p],x,S,$=-1,R=0;for(;R<m.length&&(l.lastIndex=R,S=l.exec(m),S!==null);)R=l.lastIndex,l===Si?S[1]==="!--"?l=Zf:S[1]!==void 0?l=Gf:S[2]!==void 0?(th.test(S[2])&&(a=RegExp("</"+S[2],"g")),l=Pn):S[3]!==void 0&&(l=Pn):l===Pn?S[0]===">"?(l=a!=null?a:Si,$=-1):S[1]===void 0?$=-2:($=l.lastIndex-S[2].length,x=S[1],l=S[3]===void 0?Pn:S[3]==='"'?Yf:qf):l===Yf||l===qf?l=Pn:l===Zf||l===Gf?l=Si:(l=Pn,a=void 0);let I=l===Pn&&i[p+1].startsWith("/>")?" ":"";c+=l===Si?m+nb:$>=0?(o.push(x),m.slice(0,$)+Xf+m.slice($)+ln+I):m+ln+($===-2?p:I)}return[nh(i,c+(i[r]||"<?>")+(e===2?"</svg>":"")),o]},Wn=class{constructor({strings:e,_$litType$:r},o){let a;this.parts=[];let c=0,l=0,p=e.length-1,m=this.parts,[x,S]=ib(e,r);if(this.el=Wn.createElement(x,o),Hn.currentNode=this.el.content,r===2){let $=this.el.content.firstChild;$.replaceWith(...$.childNodes)}for(;(a=Hn.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let $ of a.getAttributeNames())if($.endsWith(Xf)){let R=S[l++],I=a.getAttribute($).split(ln),F=/([.?@])?(.*)/.exec(R);m.push({type:1,index:c,name:F[2],strings:I,ctor:F[1]==="."?bu:F[1]==="?"?Eu:F[1]==="@"?Su:Cr}),a.removeAttribute($)}else $.startsWith(ln)&&(m.push({type:6,index:c}),a.removeAttribute($));if(th.test(a.tagName)){let $=a.textContent.split(ln),R=$.length-1;if(R>0){a.textContent=mo?mo.emptyScript:"";for(let I=0;I<R;I++)a.append($[I],Ai()),Hn.nextNode(),m.push({type:2,index:++c});a.append($[R],Ai())}}}else if(a.nodeType===8)if(a.data===jf)m.push({type:2,index:c});else{let $=-1;for(;($=a.data.indexOf(ln,$+1))!==-1;)m.push({type:7,index:c}),$+=ln.length-1}c++}}static createElement(e,r){let o=zn.createElement("template");return o.innerHTML=e,o}};function $r(i,e,r=i,o){var l,p,m;if(e===Un)return e;let a=o!==void 0?(l=r._$Co)==null?void 0:l[o]:r._$Cl,c=$i(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),c===void 0?a=void 0:(a=new c(i),a._$AT(i,r,o)),o!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[o]=a:r._$Cl=a),a!==void 0&&(e=$r(i,a._$AS(i,e.values),a,o)),e}var wu=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var x;let{el:{content:r},parts:o}=this._$AD,a=((x=e==null?void 0:e.creationScope)!=null?x:zn).importNode(r,!0);Hn.currentNode=a;let c=Hn.nextNode(),l=0,p=0,m=o[0];for(;m!==void 0;){if(l===m.index){let S;m.type===2?S=new Bn(c,c.nextSibling,this,e):m.type===1?S=new m.ctor(c,m.name,m.strings,this,e):m.type===6&&(S=new Tu(c,this,e)),this._$AV.push(S),m=o[++p]}l!==(m==null?void 0:m.index)&&(c=Hn.nextNode(),l++)}return Hn.currentNode=zn,a}p(e){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},Bn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,o,a){var c;this.type=2,this._$AH=Lt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=(c=a==null?void 0:a.isConnected)!=null?c:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=$r(this,e,r),$i(e)?e===Lt||e==null||e===""?(this._$AH!==Lt&&this._$AR(),this._$AH=Lt):e!==this._$AH&&e!==Un&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):rb(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Lt&&$i(this._$AH)?this._$AA.nextSibling.data=e:this.$(zn.createTextNode(e)),this._$AH=e}g(e){var c;let{values:r,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Wn.createElement(nh(o.h,o.h[0]),this.options)),o);if(((c=this._$AH)==null?void 0:c._$AD)===a)this._$AH.p(r);else{let l=new wu(a,this),p=l.u(this.options);l.p(r),this.$(p),this._$AH=l}}_$AC(e){let r=Jf.get(e.strings);return r===void 0&&Jf.set(e.strings,r=new Wn(e)),r}T(e){Qf(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,a=0;for(let c of e)a===r.length?r.push(o=new Bn(this.k(Ai()),this.k(Ai()),this,this.options)):o=r[a],o._$AI(c),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},Cr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,a,c){this.type=1,this._$AH=Lt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=c,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Lt}_$AI(e,r=this,o,a){let c=this.strings,l=!1;if(c===void 0)e=$r(this,e,r,0),l=!$i(e)||e!==this._$AH&&e!==Un,l&&(this._$AH=e);else{let p=e,m,x;for(e=c[0],m=0;m<c.length-1;m++)x=$r(this,p[o+m],r,m),x===Un&&(x=this._$AH[m]),l||(l=!$i(x)||x!==this._$AH[m]),x===Lt?e=Lt:e!==Lt&&(e+=(x!=null?x:"")+c[m+1]),this._$AH[m]=x}l&&!a&&this.j(e)}j(e){e===Lt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},bu=class extends Cr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Lt?void 0:e}},Eu=class extends Cr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Lt)}},Su=class extends Cr{constructor(e,r,o,a,c){super(e,r,o,a,c),this.type=5}_$AI(e,r=this){var l;if((e=(l=$r(this,e,r,0))!=null?l:Lt)===Un)return;let o=this._$AH,a=e===Lt&&o!==Lt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,c=e!==Lt&&(o===Lt||a);a&&this.element.removeEventListener(this.name,this,o),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)==null?void 0:r.host)!=null?o:this.element,e):this._$AH.handleEvent(e)}},Tu=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){$r(this,e)}};var xu=Ti.litHtmlPolyfillSupport,Kf;xu==null||xu(Wn,Bn),((Kf=Ti.litHtmlVersions)!=null?Kf:Ti.litHtmlVersions=[]).push("3.0.0");var rh=(i,e,r)=>{var c,l;let o=(c=r==null?void 0:r.renderBefore)!=null?c:e,a=o._$litPart$;if(a===void 0){let p=(l=r==null?void 0:r.renderBefore)!=null?l:null;o._$litPart$=a=new Bn(e.insertBefore(Ai(),p),p,void 0,r!=null?r:{})}return a._$AI(i),a};var V=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r,o;let e=super.createRenderRoot();return(o=(r=this.renderOptions).renderBefore)!=null||(r.renderBefore=e.firstChild),e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Un}},ih;V._$litElement$=!0,V["finalized"]=!0,(ih=globalThis.litElementHydrateSupport)==null||ih.call(globalThis,{LitElement:V});var Au=globalThis.litElementPolyfillSupport;Au==null||Au({LitElement:V});var sh;((sh=globalThis.litElementVersions)!=null?sh:globalThis.litElementVersions=[]).push("4.0.0");v();v();v();var X=i=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};v();v();v();v();v();v();v();v();v();var Vn=class extends V{render(){return D` <div>Hello from SuperViz, ${this.name}</div> `}};Vn.properties={name:{type:String}},Vn.styles=B`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `,Vn=K([X("superviz-hello-world")],Vn);v();v();v();var ah=zw(oh()),$u=class{setConfig(e){this.configuration=e}get(e,r){return this.configuration?ah.default.get(this.configuration,e,r):r}},Cu=new $u;v();v();var Ou=B`
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
`;v();var Iu=B`
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
`;v();var Mu=B`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;v();var Lu=B`
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
`;var et=i=>{var r;class e extends i{connectedCallback(){setTimeout(()=>{var p,m;let a=document.getElementById("superviz-style"),c=this.createCustomColors(),l=document.createElement("style");l.innerHTML=(a==null?void 0:a.innerHTML)||"",(p=this.shadowRoot)==null||p.appendChild(l),c&&((m=this.shadowRoot)==null||m.appendChild(c))}),super.connectedCallback()}createCustomColors(){if(!Cu.get("colors"))return;let a=document.createElement("style"),c=Object.entries(Cu.get("colors")).map(([l,p])=>`--${l}: ${p} !important;`).join(" ");return a.innerHTML=`
      * {
        ${c}
      }
    `,a}emitEvent(a,c,l={composed:!0,bubbles:!0}){let p=new CustomEvent(a,P({detail:c},l));this.dispatchEvent(p)}}return e.styles=[Ou,Iu,Mu,Lu,(r=i.styles)!=null?r:[]],e};var uh=et(V),sb=[uh.styles],Zn=class extends uh{constructor(){super();this.name="",this.size="md"}render(){return D` <i class="sv-icon sv-icon-${this.name}_${this.size}"></i> `}};Zn.properties={name:{type:String},size:{type:String}},Zn.styles=[sb,B`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `],Zn=K([X("superviz-icon")],Zn);v();v();v();v();var vo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yo=i=>(...e)=>({_$litDirective$:i,values:e}),Ir=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var ht=yo(class extends Ir{constructor(i){var e;if(super(i),i.type!==vo.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var o,a;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(c=>c!=="")));for(let c in e)e[c]&&!((o=this.st)!=null&&o.has(c))&&this.it.add(c);return this.render(e)}let r=i.element.classList;for(let c of this.it)c in e||(r.remove(c),this.it.delete(c));for(let c in e){let l=!!e[c];l===this.it.has(c)||((a=this.st)==null?void 0:a.has(c))||(l?(r.add(c),this.it.add(c)):(r.remove(c),this.it.delete(c)))}return We}});v();var lh=B`
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
    left: 0;
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
    right: 0;
    top: 4px;
  }

  .menu--top-left {
    min-width: 103px;
    position: absolute;
    left: 0;
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
    right: 0;
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
`;v();var ch=et(V),ob=[ch.styles,lh],Gn=class extends ch{constructor(){super(...arguments);this.menu=void 0;this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let o=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),c=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=o.includes(a),x=o.includes(c),S=o.includes(p);m||x||S||(this.open=!1)};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.callbackSelected=r=>{this.open=!1;let o=this.returnTo?r[this.returnTo]:r;this.emitEvent("selected",o,{bubbles:!1,composed:!1})};this.adjustPosition=()=>{this.adjustPositionVertical(),this.adjustPositionHorizontal()}}updated(r){if(r.has("position")&&!this.originalPosition&&(this.originalPosition=r.get("position")),!!r.has("open")){if(this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown),this.close()}}get dropdownBounds(){this.menu||(this.menu=this.shadowRoot.querySelector(".menu"));let{y:r,height:o,x:a,width:c}=this.menu.getBoundingClientRect(),l=this.position.includes("bottom")?4:0;return{top:r,bottom:r+o+l,left:a,right:a+c}}adjustPositionVertical(){let{top:r,bottom:o}=this.dropdownBounds,{innerHeight:a}=window,c=o>a,l=r<0;if(!(c||l))return;let p=a-o>r?"bottom":"top",m=this.position.split("-")[0],x=this.position.replace(m,p);this.position=x}adjustPositionHorizontal(){let{left:r,right:o}=this.dropdownBounds,a=r<0,c=o>window.innerWidth;if(!(a||c))return;if(this.position.includes("center")){let I=a?"left":"right",F=this.position.replace("center",I);this.position=F;return}let p=a?r:o,m=o-r,x=(a?m:-m)/2,S=p+x;if(a=S<0,c=S+m>window.innerWidth,!(a||c)){let I=this.position.replace(/left|right/,"center");this.position=I;return}let $=a?"left":"right",R=this.position.replace(this.position.split("-")[1],$);this.position=R}setMenu(){if(!this.menu){this.menu=this.shadowRoot.querySelector(".menu");let r={rootMargin:"0px",threshold:1},o=new IntersectionObserver(this.adjustPosition,r),a=this.menu;o.observe(a)}}get renderHeader(){return this.name?D` <div class="header">
      <span class="text">${this.name}</span>
      <span class="sv-hr"></span>
    </div>`:D``}render(){var l;let r={menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu--top-left":this.position==="top-left","menu--top-center":this.position==="top-center","menu--top-right":this.position==="top-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right","who-is-online-dropdown":this.name},o=(l=this.icons)==null?void 0:l.map(p=>D`<superviz-icon name="${p}" size="sm"></superviz-icon>`),a=this.options.map((p,m)=>{let x={text:!0,"text-bold":!0,active:this.active===(p==null?void 0:p[this.returnTo])};return D`<li @click=${()=>this.callbackSelected(p)} class=${ht(x)}>
        ${o==null?void 0:o.at(m)} ${p[this.label]}
      </li>`});return D`
      <div class="dropdown">
        <div class="dropdown-content" @click=${()=>{this.setMenu(),this.open=!this.open,setTimeout(()=>this.adjustPosition())}}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${ht(r)}>
          ${this.renderHeader}
          <ul class="items">
            ${a}
          </ul>
        </div>
      </div>
    `}};Gn.styles=ob,Gn.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},position:{type:String},options:{type:Array},label:{type:String},returnTo:{type:String},active:{type:[String,Object]},icons:{type:Array},name:{type:String}},Gn=K([X("superviz-dropdown")],Gn);v();v();var dh=B`
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
`;var Mr=class extends V{constructor(){super();this.updatePresenceMouseParticipant=r=>{if(!this.shadowRoot.getElementById(`mouse-${r.id}`)){let p=this.shadowRoot.getElementById("mouse-sync"),m=document.createElement("div");m.setAttribute("id",`mouse-${r.id}`),m.setAttribute("class","mouse-follower");let x=document.createElement("div");x.setAttribute("class","pointer-mouse");let S=document.createElement("div");S.setAttribute("class","mouse-user-name"),S.innerHTML=r.name,m.appendChild(x),m.appendChild(S),p&&p.appendChild(m)}let a=this.shadowRoot.getElementById(`mouse-${r.id}`);if(!a)return;let c=this.shadowRoot.getElementById(`mouse-${r.id}`),l=this.shadowRoot.getElementById(`mouse-${r.id}`);if(c&&l){let p=c.getElementsByClassName("mouse-user-name")[0],m=l.getElementsByClassName("pointer-mouse")[0];m&&(m.style.backgroundImage=`url(https://production.cdn.superviz.com/static/pointers/${r.slotIndex}.svg)`),p&&(p.style.color=this.textColorValues.includes(r.slotIndex)?"#FFFFFF":"#26242A",p.style.backgroundColor=r.color,p.innerHTML=r.name);let{containerId:x}=r,S=document.getElementById(x),$=r.mousePositionX,R=r.mousePositionY;if(x){let I=(S==null?void 0:S.clientWidth)||1,F=(S==null?void 0:S.clientHeight)||1;$=r.mousePositionX/r.originalWidth*I,R=r.mousePositionY/r.originalHeight*F}a.style.left=`${$}px`,a.style.top=`${R}px`}};this.textColorValues=[2,4,5,7,8,16]}removePresenceMouseParticipant(r){let o=this.shadowRoot.getElementById(`mouse-${r}`);o&&o.remove()}render(){return D`
      <div id="mouse-container" class="mouse-board">
        <div id="mouse-sync"></div>
      </div>
    `}};Mr.styles=[dh],Mr=K([X("superviz-presence-mouse")],Mr);v();v();v();var _o=B`  
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
`;var fh=et(V),ab=[fh.styles,_o],Lr=class extends fh{constructor(){super(...arguments);this.getContainer=()=>window.document.querySelector("superviz-modal-container");this.createContainer=r=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(r)};this.createModal=({detail:r})=>{this.createContainer(r),window.document.body.appendChild(this.modal)};this.destroyModal=()=>{var r;this.modal=void 0,(r=this.getContainer())==null||r.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};Lr.styles=ab,Lr=K([X("superviz-modal")],Lr);v();var hh=et(V),ub=[hh.styles,_o],Dr=class extends hh{constructor(){super(...arguments);this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))};this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(r){this.options=r}render(){let r=()=>D`
        <div class="modal--header">
          <span class="text text-bold sv-gray-600">${this.options.title}</span>
          <div class="close" @click=${this.closeModal}>
            <superviz-icon name="close" size="md"></superviz-icon>
          </div>
        </div>
      `,o=()=>D`
        <div class="modal--body">
          <div class="modal--body-content">
            ${this.options.body}
          </div>
        </div>
      `,a=()=>{if(this.options.footer)return D`
          <div class="modal--footer">
            ${this.options.footer}
          </div>
        `;let c=this.options.confirmLabel||"OK",l=this.options.cancelLabel||"Cancel";return this.options.confirm&&this.options.cancel?D`
          <div class="modal--footer">
            <button class="text text-bold btn btn--cancel" @click=${this.closeModal}>${l}</button>
            <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${c}</button>
          </div>
        `:D`
        <div class="modal--footer">
          <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${c}</button>
        </div>
      `};return D`
      <div class="modal--overlay"></div>
      <div class="modal--container">
        <div class="modal">
          ${r()}

          ${o()}

          ${a()}
        </div>
      </div>
    `}};Dr.styles=ub,Dr=K([X("superviz-modal-container")],Dr);v();v();v();v();v();var Du=B`
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
`;v();var Ru=B`
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
`;v();var Fu=B`
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
`;v();var Nu=B`
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
`;v();var ku=B`
  .comments {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 288px;
  }

  .hidden {
    display: none;
  }
`;v();var Pu=B`
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
`;v();var Hu=B`
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
`;v();var zu=B`
  .annotation-resolved {
    background: rgba(var(--sv-gray-200), 0.5);
    height: 26px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(var(--sv-gray-200));
  }
`;v();var Uu=B`
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
`;v();var Wu=B`
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
`;v();var Bu=B`
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
`;v();var Vu=B`
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
`;v();var Zu;function Gu(i){let e=i.querySelector("#superviz-comments");if(e&&!Zu){let r={childList:!0,attributes:!0,characterData:!0,subtree:!0};Zu=new MutationObserver(o=>{o.forEach(a=>{!a.removedNodes.length||a.removedNodes.forEach(c=>{c.id==="poweredby-footer"&&lb(i)})})}),Zu.observe(e,r)}}function lb(i){let e=document.createElement("div");e.id="poweredby-footer",e.className="footer";let r=document.createElement("div");r.className="powered-by powered-by--horizontal";let o=document.createElement("a");o.href="https://superviz.com/",o.target="_blank",o.className="link";let a=document.createElement("div");a.textContent="Powered by";let c=document.createElement("img");c.width=48,c.height=8.86,c.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",r.appendChild(o),o.appendChild(a),a.appendChild(c),e.appendChild(r);let l=i.getElementById("superviz-comments");l&&l.appendChild(e),Gu(i)}var ph=et(V),cb=[ph.styles,Du,Vu],qn=class extends ph{constructor(){super();this.annotations=[],this.annotationFilter="all",this.waterMarkState=!1}updateAnnotations(r){this.annotations=r}toggle(){this.emitEvent("toggle",{})}waterMarkStatus(r){this.waterMarkState=r}setFilter({detail:r}){let{filter:o}=r;this.annotationFilter=o}updated(r){super.updated(r),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(".superviz-comments");!o||(this.waterMarkState&&Gu(this.shadowRoot),o.setAttribute("style",this.side))})}render(){let r=[this.open?"container":"container-close","superviz-comments"].join(" "),o=D` <div id="poweredby-footer" class="footer">
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
    </div>`,a=this.waterMarkState?o:"";return D`
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
    `}};qn.styles=cb,qn.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String}},qn=K([X("superviz-comments")],qn);v();v();var db=et(V),fb=[db.styles,Ru],Yn=class extends et(V){constructor(){super();this.side="left"}close(){this.dispatchEvent(new CustomEvent("close"))}render(){return this.side==="left"?D`
        <div class="topbar">
          <span @click=${this.close} class="toggle-icon">
            <superviz-icon name="left" size="lg"></superviz-icon>
          </span>
          <span class="text text-bold">COMMENTS</span>
        </div>
      `:D`
      <div class="topbar">
        <span class="text text-bold">COMMENTS</span>
        <span @click=${this.close} class="toggle-icon">
          <superviz-icon name="right" size="lg"></superviz-icon>
        </span>
      </div>
    `}};Yn.styles=fb,Yn.properties={side:{type:String}},Yn=K([X("superviz-comments-topbar")],Yn);v();var mh=et(V),hb=[mh.styles,Fu],Jn=class extends mh{constructor(){super(...arguments);this.prepareToCreateAnnotation=o=>On(this,[o],function*({detail:r}){this.annotation=r,yield this.updateComplete,this.emitEvent("comment-input-focus",r)});this.cancelTemporaryAnnotation=()=>{this.annotation=null};this.cancelTemporaryAnnotationEsc=r=>{(r==null?void 0:r.key)==="Escape"&&(this.annotation=null)}}createComment({detail:r}){this.emitEvent("create-annotation",r),this.annotation=null}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.addEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.addEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)})}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.removeEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.removeEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)})}render(){let r={"annotations--comments-input":!0,hidden:!this.annotation};return D`
      <div class="annotations">
        <span class="text text-big text-bold annotations--add-comment-btn">
          Click anywhere to add a comment
        </span>
        <div class=${ht(r)}>
          <superviz-comments-comment-input
            @create-annotation=${this.createComment}
            eventType="create-annotation"
          >
          </superviz-comments-comment-input>
        </div>
      </div>
    `}};Jn.styles=hb,Jn.properties={annotation:{type:Object}},Jn=K([X("superviz-comments-annotations")],Jn);v();v();v();v();var{D:pb}=Ff;var gh=()=>document.createComment(""),Rr=(i,e,r)=>{var c;let o=i._$AA.parentNode,a=e===void 0?i._$AB:e._$AA;if(r===void 0){let l=o.insertBefore(gh(),a),p=o.insertBefore(gh(),a);r=new pb(l,p,i,i.options)}else{let l=r._$AB.nextSibling,p=r._$AM,m=p!==i;if(m){let x;(c=r._$AQ)==null||c.call(r,i),r._$AM=i,r._$AP!==void 0&&(x=i._$AU)!==p._$AU&&r._$AP(x)}if(l!==a||m){let x=r._$AA;for(;x!==l;){let S=x.nextSibling;o.insertBefore(x,a),x=S}}}return r},cn=(i,e,r=i)=>(i._$AI(e,r),i),mb={},vh=(i,e=mb)=>i._$AH=e,yh=i=>i._$AH,wo=i=>{var o;(o=i._$AP)==null||o.call(i,!1,!0);let e=i._$AA,r=i._$AB.nextSibling;for(;e!==r;){let a=e.nextSibling;e.remove(),e=a}};var _h=(i,e,r)=>{let o=new Map;for(let a=e;a<=r;a++)o.set(i[a],a);return o},xh=yo(class extends Ir{constructor(i){if(super(i),i.type!==vo.CHILD)throw Error("repeat() can only be used in text expressions")}ht(i,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);let a=[],c=[],l=0;for(let p of i)a[l]=o?o(p,l):l,c[l]=r(p,l),l++;return{values:c,keys:a}}render(i,e,r){return this.ht(i,e,r).values}update(i,[e,r,o]){var Ct;let a=yh(i),{values:c,keys:l}=this.ht(e,r,o);if(!Array.isArray(a))return this.dt=l,c;let p=(Ct=this.dt)!=null?Ct:this.dt=[],m=[],x,S,$=0,R=a.length-1,I=0,F=c.length-1;for(;$<=R&&I<=F;)if(a[$]===null)$++;else if(a[R]===null)R--;else if(p[$]===l[I])m[I]=cn(a[$],c[I]),$++,I++;else if(p[R]===l[F])m[F]=cn(a[R],c[F]),R--,F--;else if(p[$]===l[F])m[F]=cn(a[$],c[F]),Rr(i,m[F+1],a[$]),$++,F--;else if(p[R]===l[I])m[I]=cn(a[R],c[I]),Rr(i,a[$],a[R]),R--,I++;else if(x===void 0&&(x=_h(l,I,F),S=_h(p,$,R)),x.has(p[$]))if(x.has(p[R])){let mt=S.get(l[I]),St=mt!==void 0?a[mt]:null;if(St===null){let fe=Rr(i,a[$]);cn(fe,c[I]),m[I]=fe}else m[I]=cn(St,c[I]),Rr(i,a[$],St),a[mt]=null;I++}else wo(a[R]),R--;else wo(a[$]),$++;for(;I<=F;){let mt=Rr(i,m[F+1]);cn(mt,c[I]),m[I++]=mt}for(;$<=R;){let mt=a[$++];mt!==null&&wo(mt)}return this.dt=l,vh(i,m),We}});var wh=et(V),gb=[wh.styles,ku],Kn=class extends wh{constructor(){super();this.unselectAnnotation=()=>{this.selectedAnnotation=null};this.unselectAnnotationEsc=r=>{r&&(r==null?void 0:r.key)!=="Escape"||(this.selectedAnnotation=null)};this.selectAnnotation=({detail:r})=>{let{uuid:o}=r;if(this.selectedAnnotation===o){this.selectedAnnotation=null;return}this.selectedAnnotation=o};this.checkLastAnnotation=r=>{var c,l;let o=this.annotations.filter(p=>p.resolved),a=this.annotations.filter(p=>!p.resolved);return this.annotationFilter==="all"?r===((c=o[o.length-1])==null?void 0:c.uuid):r===((l=a[a.length-1])==null?void 0:l.uuid)};this.annotations=[]}updated(r){super.updated(r),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(`[uuid='${this.selectedAnnotation}']`);if(!o)return;let a=this.lastCommentId===this.selectedAnnotation,c=a?0:-150,l=o.getClientRects()[0];!l||(this.scrollBy(0,l.y+c),a&&setTimeout(()=>{this.scrollBy(0,l.y+c)},200))})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("select-annotation",this.selectAnnotation),window.document.body.addEventListener("keyup",this.unselectAnnotationEsc),window.document.body.addEventListener("unselect-annotation",this.unselectAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("select-annotation",this.selectAnnotation),window.document.body.removeEventListener("keyup",this.unselectAnnotationEsc),window.document.body.removeEventListener("unselect-annotation",this.unselectAnnotation)}render(){return D` ${xh(this.annotations.filter(r=>r.comments.length),r=>r.uuid,r=>D`
        <superviz-comments-annotation-item
          annotation=${JSON.stringify(r)}
          selected="${this.selectedAnnotation}"
          annotationFilter=${this.annotationFilter}
          uuid=${r.uuid}
          isLastComment=${this.checkLastAnnotation(r.uuid)}
        >
        </superviz-comments-annotation-item>
      `)}`}};Kn.styles=gb,Kn.properties={annotations:{type:Object},selectedAnnotation:{type:String},annotationFilter:{type:String}},Kn=K([X("superviz-comments-content")],Kn);v();v();v();v();v();var Ve=class extends Error{},bo=class extends Ve{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},Eo=class extends Ve{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},So=class extends Ve{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},Ze=class extends Ve{},Fr=class extends Ve{constructor(e){super(`Invalid unit ${e}`)}},Dt=class extends Ve{},xe=class extends Ve{constructor(){super("Zone is an abstract class")}};v();v();v();var L="numeric",we="short",te="long",dn={year:L,month:L,day:L},Oi={year:L,month:we,day:L},qu={year:L,month:we,day:L,weekday:we},Ii={year:L,month:te,day:L},Mi={year:L,month:te,day:L,weekday:te},Li={hour:L,minute:L},Di={hour:L,minute:L,second:L},Ri={hour:L,minute:L,second:L,timeZoneName:we},Fi={hour:L,minute:L,second:L,timeZoneName:te},Ni={hour:L,minute:L,hourCycle:"h23"},ki={hour:L,minute:L,second:L,hourCycle:"h23"},Pi={hour:L,minute:L,second:L,hourCycle:"h23",timeZoneName:we},Hi={hour:L,minute:L,second:L,hourCycle:"h23",timeZoneName:te},zi={year:L,month:L,day:L,hour:L,minute:L},Ui={year:L,month:L,day:L,hour:L,minute:L,second:L},Wi={year:L,month:we,day:L,hour:L,minute:L},Bi={year:L,month:we,day:L,hour:L,minute:L,second:L},Yu={year:L,month:we,day:L,weekday:we,hour:L,minute:L},Vi={year:L,month:te,day:L,hour:L,minute:L,timeZoneName:we},Zi={year:L,month:te,day:L,hour:L,minute:L,second:L,timeZoneName:we},Gi={year:L,month:te,day:L,weekday:te,hour:L,minute:L,timeZoneName:te},qi={year:L,month:te,day:L,weekday:te,hour:L,minute:L,second:L,timeZoneName:te};v();v();v();v();var Gt=class{get type(){throw new xe}get name(){throw new xe}get ianaName(){return this.name}get isUniversal(){throw new xe}offsetName(e,r){throw new xe}formatOffset(e,r){throw new xe}offset(e){throw new xe}equals(e){throw new xe}get isValid(){throw new xe}};var Ju=null,Ce=class extends Gt{static get instance(){return Ju===null&&(Ju=new Ce),Ju}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:o}){return Ao(e,r,o)}formatOffset(e,r){return fn(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}};v();var Co={};function vb(i){return Co[i]||(Co[i]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:i,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Co[i]}var yb={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function _b(i,e){let r=i.format(e).replace(/\u200E/g,""),o=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,a,c,l,p,m,x,S]=o;return[l,a,c,p,m,x,S]}function xb(i,e){let r=i.formatToParts(e),o=[];for(let a=0;a<r.length;a++){let{type:c,value:l}=r[a],p=yb[c];c==="era"?o[p]=l:Y(p)||(o[p]=parseInt(l,10))}return o}var $o={},$t=class extends Gt{static create(e){return $o[e]||($o[e]=new $t(e)),$o[e]}static resetCache(){$o={},Co={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(r){return!1}}constructor(e){super(),this.zoneName=e,this.valid=$t.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:o}){return Ao(e,r,o,this.name)}formatOffset(e,r){return fn(this.offset(e),r)}offset(e){let r=new Date(e);if(isNaN(r))return NaN;let o=vb(this.name),[a,c,l,p,m,x,S]=o.formatToParts?xb(o,r):_b(o,r);p==="BC"&&(a=-Math.abs(a)+1);let R=Nr({year:a,month:c,day:l,hour:m===24?0:m,minute:x,second:S,millisecond:0}),I=+r,F=I%1e3;return I-=F>=0?F:1e3+F,(R-I)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}};v();var bh={};function wb(i,e={}){let r=JSON.stringify([i,e]),o=bh[r];return o||(o=new Intl.ListFormat(i,e),bh[r]=o),o}var Ku={};function Xu(i,e={}){let r=JSON.stringify([i,e]),o=Ku[r];return o||(o=new Intl.DateTimeFormat(i,e),Ku[r]=o),o}var ju={};function bb(i,e={}){let r=JSON.stringify([i,e]),o=ju[r];return o||(o=new Intl.NumberFormat(i,e),ju[r]=o),o}var Qu={};function Eb(i,e={}){let l=e,{base:r}=l,o=au(l,["base"]),a=JSON.stringify([i,o]),c=Qu[a];return c||(c=new Intl.RelativeTimeFormat(i,e),Qu[a]=c),c}var Yi=null;function Sb(){return Yi||(Yi=new Intl.DateTimeFormat().resolvedOptions().locale,Yi)}function Tb(i){let e=i.indexOf("-x-");e!==-1&&(i=i.substring(0,e));let r=i.indexOf("-u-");if(r===-1)return[i];{let o,a;try{o=Xu(i).resolvedOptions(),a=i}catch(p){let m=i.substring(0,r);o=Xu(m).resolvedOptions(),a=m}let{numberingSystem:c,calendar:l}=o;return[a,c,l]}}function Ab(i,e,r){return(r||e)&&(i.includes("-u-")||(i+="-u"),r&&(i+=`-ca-${r}`),e&&(i+=`-nu-${e}`)),i}function $b(i){let e=[];for(let r=1;r<=12;r++){let o=H.utc(2009,r,1);e.push(i(o))}return e}function Cb(i){let e=[];for(let r=1;r<=7;r++){let o=H.utc(2016,11,13+r);e.push(i(o))}return e}function Oo(i,e,r,o){let a=i.listingMode();return a==="error"?null:a==="en"?r(e):o(e)}function Ob(i){return i.numberingSystem&&i.numberingSystem!=="latn"?!1:i.numberingSystem==="latn"||!i.locale||i.locale.startsWith("en")||new Intl.DateTimeFormat(i.intl).resolvedOptions().numberingSystem==="latn"}var tl=class{constructor(e,r,o){this.padTo=o.padTo||0,this.floor=o.floor||!1;let p=o,{padTo:a,floor:c}=p,l=au(p,["padTo","floor"]);if(!r||Object.keys(l).length>0){let m=P({useGrouping:!1},o);o.padTo>0&&(m.minimumIntegerDigits=o.padTo),this.inf=bb(e,m)}}format(e){if(this.inf){let r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{let r=this.floor?Math.floor(e):kr(e,3);return yt(r,this.padTo)}}},el=class{constructor(e,r,o){this.opts=o,this.originalZone=void 0;let a;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){let l=-1*(e.offset/60),p=l>=0?`Etc/GMT+${l}`:`Etc/GMT${l}`;e.offset!==0&&$t.create(p).valid?(a=p,this.dt=e):(a="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,a=e.zone.name):(a="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);let c=P({},this.opts);c.timeZone=c.timeZone||a,this.dtf=Xu(r,c)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){let o=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return Pt(P({},r),{value:o})}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},nl=class{constructor(e,r,o){this.opts=P({style:"long"},o),!r&&Io()&&(this.rtf=Eb(e,o))}format(e,r){return this.rtf?this.rtf.format(e,r):Eh(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}},it=class{static fromOpts(e){return it.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,r,o,a=!1){let c=e||ut.defaultLocale,l=c||(a?"en-US":Sb()),p=r||ut.defaultNumberingSystem,m=o||ut.defaultOutputCalendar;return new it(l,p,m,c)}static resetCache(){Yi=null,Ku={},ju={},Qu={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:o}={}){return it.create(e,r,o)}constructor(e,r,o,a){let[c,l,p]=Tb(e);this.locale=c,this.numberingSystem=r||l||null,this.outputCalendar=o||p||null,this.intl=Ab(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Ob(this)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:it.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone(Pt(P({},e),{defaultToEN:!0}))}redefaultToSystem(e={}){return this.clone(Pt(P({},e),{defaultToEN:!1}))}months(e,r=!1){return Oo(this,e,rl,()=>{let o=r?{month:e,day:"numeric"}:{month:e},a=r?"format":"standalone";return this.monthsCache[a][e]||(this.monthsCache[a][e]=$b(c=>this.extract(c,o,"month"))),this.monthsCache[a][e]})}weekdays(e,r=!1){return Oo(this,e,il,()=>{let o=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},a=r?"format":"standalone";return this.weekdaysCache[a][e]||(this.weekdaysCache[a][e]=Cb(c=>this.extract(c,o,"weekday"))),this.weekdaysCache[a][e]})}meridiems(){return Oo(this,void 0,()=>sl,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[H.utc(2016,11,13,9),H.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Oo(this,e,ol,()=>{let r={era:e};return this.eraCache[e]||(this.eraCache[e]=[H.utc(-40,1,1),H.utc(2017,1,1)].map(o=>this.extract(o,r,"era"))),this.eraCache[e]})}extract(e,r,o){let a=this.dtFormatter(e,r),c=a.formatToParts(),l=c.find(p=>p.type.toLowerCase()===o);return l?l.value:null}numberFormatter(e={}){return new tl(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new el(e,this.intl,r)}relFormatter(e={}){return new nl(this.intl,this.isEnglish(),e)}listFormatter(e={}){return wb(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}};v();v();var ul=null,_t=class extends Gt{static get utcInstance(){return ul===null&&(ul=new _t(0)),ul}static instance(e){return e===0?_t.utcInstance:new _t(e)}static parseSpecifier(e){if(e){let r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new _t(Xn(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${fn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${fn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return fn(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}};v();var Pr=class extends Gt{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function be(i,e){let r;if(Y(i)||i===null)return e;if(i instanceof Gt)return i;if(Sh(i)){let o=i.toLowerCase();return o==="default"?e:o==="local"||o==="system"?Ce.instance:o==="utc"||o==="gmt"?_t.utcInstance:_t.parseSpecifier(o)||$t.create(i)}else return Oe(i)?_t.instance(i):typeof i=="object"&&"offset"in i&&typeof i.offset=="function"?i:new Pr(i)}var Th=()=>Date.now(),Ah="system",$h=null,Ch=null,Oh=null,Ih=60,Mh,ut=class{static get now(){return Th}static set now(e){Th=e}static set defaultZone(e){Ah=e}static get defaultZone(){return be(Ah,Ce.instance)}static get defaultLocale(){return $h}static set defaultLocale(e){$h=e}static get defaultNumberingSystem(){return Ch}static set defaultNumberingSystem(e){Ch=e}static get defaultOutputCalendar(){return Oh}static set defaultOutputCalendar(e){Oh=e}static get twoDigitCutoffYear(){return Ih}static set twoDigitCutoffYear(e){Ih=e%100}static get throwOnInvalid(){return Mh}static set throwOnInvalid(e){Mh=e}static resetCaches(){it.resetCache(),$t.resetCache()}};function Y(i){return typeof i=="undefined"}function Oe(i){return typeof i=="number"}function Ji(i){return typeof i=="number"&&i%1===0}function Sh(i){return typeof i=="string"}function Lh(i){return Object.prototype.toString.call(i)==="[object Date]"}function Io(){try{return typeof Intl!="undefined"&&!!Intl.RelativeTimeFormat}catch(i){return!1}}function Dh(i){return Array.isArray(i)?i:[i]}function ll(i,e,r){if(i.length!==0)return i.reduce((o,a)=>{let c=[e(a),a];return o&&r(o[0],c[0])===o[0]?o:c},null)[1]}function Rh(i,e){return e.reduce((r,o)=>(r[o]=i[o],r),{})}function hn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Ie(i,e,r){return Ji(i)&&i>=e&&i<=r}function Ib(i,e){return i-e*Math.floor(i/e)}function yt(i,e=2){let r=i<0,o;return r?o="-"+(""+-i).padStart(e,"0"):o=(""+i).padStart(e,"0"),o}function Ge(i){if(!(Y(i)||i===null||i===""))return parseInt(i,10)}function pn(i){if(!(Y(i)||i===null||i===""))return parseFloat(i)}function Ki(i){if(!(Y(i)||i===null||i==="")){let e=parseFloat("0."+i)*1e3;return Math.floor(e)}}function kr(i,e,r=!1){let o=hf(10,e);return(r?Math.trunc:Math.round)(i*o)/o}function jn(i){return i%4===0&&(i%100!==0||i%400===0)}function Qn(i){return jn(i)?366:365}function Hr(i,e){let r=Ib(e-1,12)+1,o=i+(e-r)/12;return r===2?jn(o)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Nr(i){let e=Date.UTC(i.year,i.month-1,i.day,i.hour,i.minute,i.second,i.millisecond);return i.year<100&&i.year>=0&&(e=new Date(e),e.setUTCFullYear(i.year,i.month-1,i.day)),+e}function zr(i){let e=(i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400))%7,r=i-1,o=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7;return e===4||o===3?53:52}function Xi(i){return i>99?i:i>ut.twoDigitCutoffYear?1900+i:2e3+i}function Ao(i,e,r,o=null){let a=new Date(i),c={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};o&&(c.timeZone=o);let l=P({timeZoneName:e},c),p=new Intl.DateTimeFormat(r,l).formatToParts(a).find(m=>m.type.toLowerCase()==="timezonename");return p?p.value:null}function Xn(i,e){let r=parseInt(i,10);Number.isNaN(r)&&(r=0);let o=parseInt(e,10)||0,a=r<0||Object.is(r,-0)?-o:o;return r*60+a}function cl(i){let e=Number(i);if(typeof i=="boolean"||i===""||Number.isNaN(e))throw new Dt(`Invalid unit value ${i}`);return e}function Ur(i,e){let r={};for(let o in i)if(hn(i,o)){let a=i[o];if(a==null)continue;r[e(o)]=cl(a)}return r}function fn(i,e){let r=Math.trunc(Math.abs(i/60)),o=Math.trunc(Math.abs(i%60)),a=i>=0?"+":"-";switch(e){case"short":return`${a}${yt(r,2)}:${yt(o,2)}`;case"narrow":return`${a}${r}${o>0?`:${o}`:""}`;case"techie":return`${a}${yt(r,2)}${yt(o,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function ji(i){return Rh(i,["hour","minute","second","millisecond"])}var Mb=["January","February","March","April","May","June","July","August","September","October","November","December"],dl=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Lb=["J","F","M","A","M","J","J","A","S","O","N","D"];function rl(i){switch(i){case"narrow":return[...Lb];case"short":return[...dl];case"long":return[...Mb];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var fl=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],hl=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Db=["M","T","W","T","F","S","S"];function il(i){switch(i){case"narrow":return[...Db];case"short":return[...hl];case"long":return[...fl];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var sl=["AM","PM"],Rb=["Before Christ","Anno Domini"],Fb=["BC","AD"],Nb=["B","A"];function ol(i){switch(i){case"narrow":return[...Nb];case"short":return[...Fb];case"long":return[...Rb];default:return null}}function Fh(i){return sl[i.hour<12?0:1]}function Nh(i,e){return il(e)[i.weekday-1]}function kh(i,e){return rl(e)[i.month-1]}function Ph(i,e){return ol(e)[i.year<0?0:1]}function Eh(i,e,r="always",o=!1){let a={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},c=["hours","minutes","seconds"].indexOf(i)===-1;if(r==="auto"&&c){let $=i==="days";switch(e){case 1:return $?"tomorrow":`next ${a[i][0]}`;case-1:return $?"yesterday":`last ${a[i][0]}`;case 0:return $?"today":`this ${a[i][0]}`;default:}}let l=Object.is(e,-0)||e<0,p=Math.abs(e),m=p===1,x=a[i],S=o?m?x[1]:x[2]||x[1]:m?a[i][0]:i;return l?`${p} ${S} ago`:`in ${p} ${S}`}function Hh(i,e){let r="";for(let o of i)o.literal?r+=o.val:r+=e(o.val);return r}var kb={D:dn,DD:Oi,DDD:Ii,DDDD:Mi,t:Li,tt:Di,ttt:Ri,tttt:Fi,T:Ni,TT:ki,TTT:Pi,TTTT:Hi,f:zi,ff:Wi,fff:Vi,ffff:Gi,F:Ui,FF:Bi,FFF:Zi,FFFF:qi},xt=class{static create(e,r={}){return new xt(e,r)}static parseFormat(e){let r=null,o="",a=!1,c=[];for(let l=0;l<e.length;l++){let p=e.charAt(l);p==="'"?(o.length>0&&c.push({literal:a||/^\s+$/.test(o),val:o}),r=null,o="",a=!a):a||p===r?o+=p:(o.length>0&&c.push({literal:/^\s+$/.test(o),val:o}),o=p,r=p)}return o.length>0&&c.push({literal:a||/^\s+$/.test(o),val:o}),c}static macroTokenToFormatOpts(e){return kb[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,P(P({},this.opts),r)).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,P(P({},this.opts),r))}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return yt(e,r);let o=P({},this.opts);return r>0&&(o.padTo=r),this.loc.numberFormatter(o).format(e)}formatDateTimeFromString(e,r){let o=this.loc.listingMode()==="en",a=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",c=(I,F)=>this.loc.extract(e,I,F),l=I=>e.isOffsetFixed&&e.offset===0&&I.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,I.format):"",p=()=>o?Fh(e):c({hour:"numeric",hourCycle:"h12"},"dayperiod"),m=(I,F)=>o?kh(e,I):c(F?{month:I}:{month:I,day:"numeric"},"month"),x=(I,F)=>o?Nh(e,I):c(F?{weekday:I}:{weekday:I,month:"long",day:"numeric"},"weekday"),S=I=>{let F=xt.macroTokenToFormatOpts(I);return F?this.formatWithSystemDefault(e,F):I},$=I=>o?Ph(e,I):c({era:I},"era"),R=I=>{switch(I){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return l({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return l({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return l({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return p();case"d":return a?c({day:"numeric"},"day"):this.num(e.day);case"dd":return a?c({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return x("short",!0);case"cccc":return x("long",!0);case"ccccc":return x("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return x("short",!1);case"EEEE":return x("long",!1);case"EEEEE":return x("narrow",!1);case"L":return a?c({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return a?c({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return m("short",!0);case"LLLL":return m("long",!0);case"LLLLL":return m("narrow",!0);case"M":return a?c({month:"numeric"},"month"):this.num(e.month);case"MM":return a?c({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return m("short",!1);case"MMMM":return m("long",!1);case"MMMMM":return m("narrow",!1);case"y":return a?c({year:"numeric"},"year"):this.num(e.year);case"yy":return a?c({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return a?c({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return a?c({year:"numeric"},"year"):this.num(e.year,6);case"G":return $("short");case"GG":return $("long");case"GGGGG":return $("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return S(I)}};return Hh(xt.parseFormat(r),R)}formatDurationFromString(e,r){let o=m=>{switch(m[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},a=m=>x=>{let S=o(x);return S?this.num(m.get(S),x.length):x},c=xt.parseFormat(r),l=c.reduce((m,{literal:x,val:S})=>x?m:m.concat(S),[]),p=e.shiftTo(...l.map(o).filter(m=>m));return Hh(c,a(p))}};v();var Rt=class{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}};v();var Uh=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Br(...i){let e=i.reduce((r,o)=>r+o.source,"");return RegExp(`^${e}$`)}function Vr(...i){return e=>i.reduce(([r,o,a],c)=>{let[l,p,m]=c(e,a);return[P(P({},r),l),p||o,m]},[{},null,1]).slice(0,2)}function Zr(i,...e){if(i==null)return[null,null];for(let[r,o]of e){let a=r.exec(i);if(a)return o(a)}return[null,null]}function Wh(...i){return(e,r)=>{let o={},a;for(a=0;a<i.length;a++)o[i[a]]=Ge(e[r+a]);return[o,null,r+a]}}var Bh=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Pb=`(?:${Bh.source}?(?:\\[(${Uh.source})\\])?)?`,pl=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Vh=RegExp(`${pl.source}${Pb}`),ml=RegExp(`(?:T${Vh.source})?`),Hb=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,zb=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Ub=/(\d{4})-?(\d{3})/,Wb=Wh("weekYear","weekNumber","weekDay"),Bb=Wh("year","ordinal"),Vb=/(\d{4})-(\d\d)-(\d\d)/,Zh=RegExp(`${pl.source} ?(?:${Bh.source}|(${Uh.source}))?`),Zb=RegExp(`(?: ${Zh.source})?`);function Wr(i,e,r){let o=i[e];return Y(o)?r:Ge(o)}function Gb(i,e){return[{year:Wr(i,e),month:Wr(i,e+1,1),day:Wr(i,e+2,1)},null,e+3]}function Gr(i,e){return[{hours:Wr(i,e,0),minutes:Wr(i,e+1,0),seconds:Wr(i,e+2,0),milliseconds:Ki(i[e+3])},null,e+4]}function Qi(i,e){let r=!i[e]&&!i[e+1],o=Xn(i[e+1],i[e+2]),a=r?null:_t.instance(o);return[{},a,e+3]}function ts(i,e){let r=i[e]?$t.create(i[e]):null;return[{},r,e+1]}var qb=RegExp(`^T?${pl.source}$`),Yb=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Jb(i){let[e,r,o,a,c,l,p,m,x]=i,S=e[0]==="-",$=m&&m[0]==="-",R=(I,F=!1)=>I!==void 0&&(F||I&&S)?-I:I;return[{years:R(pn(r)),months:R(pn(o)),weeks:R(pn(a)),days:R(pn(c)),hours:R(pn(l)),minutes:R(pn(p)),seconds:R(pn(m),m==="-0"),milliseconds:R(Ki(x),$)}]}var Kb={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function gl(i,e,r,o,a,c,l){let p={year:e.length===2?Xi(Ge(e)):Ge(e),month:dl.indexOf(r)+1,day:Ge(o),hour:Ge(a),minute:Ge(c)};return l&&(p.second=Ge(l)),i&&(p.weekday=i.length>3?fl.indexOf(i)+1:hl.indexOf(i)+1),p}var Xb=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function jb(i){let[,e,r,o,a,c,l,p,m,x,S,$]=i,R=gl(e,a,o,r,c,l,p),I;return m?I=Kb[m]:x?I=0:I=Xn(S,$),[R,new _t(I)]}function Qb(i){return i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var t1=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,e1=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,n1=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function zh(i){let[,e,r,o,a,c,l,p]=i;return[gl(e,a,o,r,c,l,p),_t.utcInstance]}function r1(i){let[,e,r,o,a,c,l,p]=i;return[gl(e,p,r,o,a,c,l),_t.utcInstance]}var i1=Br(Hb,ml),s1=Br(zb,ml),o1=Br(Ub,ml),a1=Br(Vh),Gh=Vr(Gb,Gr,Qi,ts),u1=Vr(Wb,Gr,Qi,ts),l1=Vr(Bb,Gr,Qi,ts),c1=Vr(Gr,Qi,ts);function qh(i){return Zr(i,[i1,Gh],[s1,u1],[o1,l1],[a1,c1])}function Yh(i){return Zr(Qb(i),[Xb,jb])}function Jh(i){return Zr(i,[t1,zh],[e1,zh],[n1,r1])}function Kh(i){return Zr(i,[Yb,Jb])}var d1=Vr(Gr);function Xh(i){return Zr(i,[qb,d1])}var f1=Br(Vb,Zb),h1=Br(Zh),p1=Vr(Gr,Qi,ts);function jh(i){return Zr(i,[f1,Gh],[h1,p1])}var Qh="Invalid Duration",ep={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},m1=P({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},ep),le=146097/400,qr=146097/4800,g1=P({years:{quarters:4,months:12,weeks:le/7,days:le,hours:le*24,minutes:le*24*60,seconds:le*24*60*60,milliseconds:le*24*60*60*1e3},quarters:{months:3,weeks:le/28,days:le/4,hours:le*24/4,minutes:le*24*60/4,seconds:le*24*60*60/4,milliseconds:le*24*60*60*1e3/4},months:{weeks:qr/7,days:qr,hours:qr*24,minutes:qr*24*60,seconds:qr*24*60*60,milliseconds:qr*24*60*60*1e3}},ep),tr=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],v1=tr.slice(0).reverse();function mn(i,e,r=!1){let o={values:r?e.values:P(P({},i.values),e.values||{}),loc:i.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||i.conversionAccuracy,matrix:e.matrix||i.matrix};return new j(o)}function np(i,e){var o;let r=(o=e.milliseconds)!=null?o:0;for(let a of v1.slice(1))e[a]&&(r+=e[a]*i[a].milliseconds);return r}function tp(i,e){let r=np(i,e)<0?-1:1;tr.reduceRight((o,a)=>{if(Y(e[a]))return o;if(o){let c=e[o]*r,l=i[a][o],p=Math.floor(c/l);e[a]+=p*r,e[o]-=p*l*r}return a},null),tr.reduce((o,a)=>{if(Y(e[a]))return o;if(o){let c=e[o]%1;e[o]-=c,e[a]+=c*i[o][a]}return a},null)}function y1(i){let e={};for(let[r,o]of Object.entries(i))o!==0&&(e[r]=o);return e}var j=class{constructor(e){let r=e.conversionAccuracy==="longterm"||!1,o=r?g1:m1;e.matrix&&(o=e.matrix),this.values=e.values,this.loc=e.loc||it.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=o,this.isLuxonDuration=!0}static fromMillis(e,r){return j.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new Dt(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new j({values:Ur(e,j.normalizeUnit),loc:it.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if(Oe(e))return j.fromMillis(e);if(j.isDuration(e))return e;if(typeof e=="object")return j.fromObject(e);throw new Dt(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){let[o]=Kh(e);return o?j.fromObject(o,r):j.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){let[o]=Xh(e);return o?j.fromObject(o,r):j.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new Dt("need to specify a reason the Duration is invalid");let o=e instanceof Rt?e:new Rt(e,r);if(ut.throwOnInvalid)throw new So(o);return new j({invalid:o})}static normalizeUnit(e){let r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new Fr(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){let o=Pt(P({},r),{floor:r.round!==!1&&r.floor!==!1});return this.isValid?xt.create(this.loc,o).formatDurationFromString(this,e):Qh}toHuman(e={}){if(!this.isValid)return Qh;let r=tr.map(o=>{let a=this.values[o];return Y(a)?null:this.loc.numberFormatter(Pt(P({style:"unit",unitDisplay:"long"},e),{unit:o.slice(0,-1)})).format(a)}).filter(o=>o);return this.loc.listFormatter(P({type:"conjunction",style:e.listStyle||"narrow"},e)).format(r)}toObject(){return this.isValid?P({},this.values):{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=kr(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let r=this.toMillis();return r<0||r>=864e5?null:(e=Pt(P({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e),{includeOffset:!1}),H.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?np(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let r=j.fromDurationLike(e),o={};for(let a of tr)(hn(r.values,a)||hn(this.values,a))&&(o[a]=r.get(a)+this.get(a));return mn(this,{values:o},!0)}minus(e){if(!this.isValid)return this;let r=j.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;let r={};for(let o of Object.keys(this.values))r[o]=cl(e(this.values[o],o));return mn(this,{values:r},!0)}get(e){return this[j.normalizeUnit(e)]}set(e){if(!this.isValid)return this;let r=P(P({},this.values),Ur(e,j.normalizeUnit));return mn(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:o,matrix:a}={}){let l={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:a,conversionAccuracy:o};return mn(this,l)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return tp(this.matrix,e),mn(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=y1(this.normalize().shiftToAll().toObject());return mn(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(l=>j.normalizeUnit(l));let r={},o={},a=this.toObject(),c;for(let l of tr)if(e.indexOf(l)>=0){c=l;let p=0;for(let x in o)p+=this.matrix[x][l]*o[x],o[x]=0;Oe(a[l])&&(p+=a[l]);let m=Math.trunc(p);r[l]=m,o[l]=(p*1e3-m*1e3)/1e3}else Oe(a[l])&&(o[l]=a[l]);for(let l in o)o[l]!==0&&(r[c]+=l===c?o[l]:o[l]/this.matrix[c][l]);return tp(this.matrix,r),mn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return mn(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(o,a){return o===void 0||o===0?a===void 0||a===0:o===a}for(let o of tr)if(!r(this.values[o],e.values[o]))return!1;return!0}};v();var Yr="Invalid Interval";function _1(i,e){return!i||!i.isValid?dt.invalid("missing or invalid start"):!e||!e.isValid?dt.invalid("missing or invalid end"):e<i?dt.invalid("end before start",`The end of an interval must be after its start, but you had start=${i.toISO()} and end=${e.toISO()}`):null}var dt=class{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new Dt("need to specify a reason the Interval is invalid");let o=e instanceof Rt?e:new Rt(e,r);if(ut.throwOnInvalid)throw new Eo(o);return new dt({invalid:o})}static fromDateTimes(e,r){let o=Jr(e),a=Jr(r),c=_1(o,a);return c==null?new dt({start:o,end:a}):c}static after(e,r){let o=j.fromDurationLike(r),a=Jr(e);return dt.fromDateTimes(a,a.plus(o))}static before(e,r){let o=j.fromDurationLike(r),a=Jr(e);return dt.fromDateTimes(a.minus(o),a)}static fromISO(e,r){let[o,a]=(e||"").split("/",2);if(o&&a){let c,l;try{c=H.fromISO(o,r),l=c.isValid}catch(x){l=!1}let p,m;try{p=H.fromISO(a,r),m=p.isValid}catch(x){m=!1}if(l&&m)return dt.fromDateTimes(c,p);if(l){let x=j.fromISO(a,r);if(x.isValid)return dt.after(c,x)}else if(m){let x=j.fromISO(o,r);if(x.isValid)return dt.before(p,x)}}return dt.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds"){if(!this.isValid)return NaN;let r=this.start.startOf(e),o=this.end.startOf(e);return Math.floor(o.diff(r,e).get(e))+(o.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?dt.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];let r=e.map(Jr).filter(l=>this.contains(l)).sort(),o=[],{s:a}=this,c=0;for(;a<this.e;){let l=r[c]||this.e,p=+l>+this.e?this.e:l;o.push(dt.fromDateTimes(a,p)),a=p,c+=1}return o}splitBy(e){let r=j.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:o}=this,a=1,c,l=[];for(;o<this.e;){let p=this.start.plus(r.mapUnits(m=>m*a));c=+p>+this.e?this.e:p,l.push(dt.fromDateTimes(o,c)),o=c,a+=1}return l}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let r=this.s>e.s?this.s:e.s,o=this.e<e.e?this.e:e.e;return r>=o?null:dt.fromDateTimes(r,o)}union(e){if(!this.isValid)return this;let r=this.s<e.s?this.s:e.s,o=this.e>e.e?this.e:e.e;return dt.fromDateTimes(r,o)}static merge(e){let[r,o]=e.sort((a,c)=>a.s-c.s).reduce(([a,c],l)=>c?c.overlaps(l)||c.abutsStart(l)?[a,c.union(l)]:[a.concat([c]),l]:[a,l],[[],null]);return o&&r.push(o),r}static xor(e){let r=null,o=0,a=[],c=e.map(m=>[{time:m.s,type:"s"},{time:m.e,type:"e"}]),l=Array.prototype.concat(...c),p=l.sort((m,x)=>m.time-x.time);for(let m of p)o+=m.type==="s"?1:-1,o===1?r=m.time:(r&&+r!=+m.time&&a.push(dt.fromDateTimes(r,m.time)),r=null);return dt.merge(a)}difference(...e){return dt.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:Yr}toLocaleString(e=dn,r={}){return this.isValid?xt.create(this.s.loc.clone(r),e).formatInterval(this):Yr}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Yr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Yr}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Yr}toFormat(e,{separator:r=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:Yr}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):j.invalid(this.invalidReason)}mapEndpoints(e){return dt.fromDateTimes(e(this.s),e(this.e))}};v();var qe=class{static hasDST(e=ut.defaultZone){let r=H.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return $t.isValidZone(e)}static normalizeZone(e){return be(e,ut.defaultZone)}static months(e="long",{locale:r=null,numberingSystem:o=null,locObj:a=null,outputCalendar:c="gregory"}={}){return(a||it.create(r,o,c)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:o=null,locObj:a=null,outputCalendar:c="gregory"}={}){return(a||it.create(r,o,c)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:o=null,locObj:a=null}={}){return(a||it.create(r,o,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:o=null,locObj:a=null}={}){return(a||it.create(r,o,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return it.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return it.create(r,null,"gregory").eras(e)}static features(){return{relative:Io()}}};v();function rp(i,e){let r=a=>a.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),o=r(e)-r(i);return Math.floor(j.fromMillis(o).as("days"))}function x1(i,e,r){let o=[["years",(m,x)=>x.year-m.year],["quarters",(m,x)=>x.quarter-m.quarter+(x.year-m.year)*4],["months",(m,x)=>x.month-m.month+(x.year-m.year)*12],["weeks",(m,x)=>{let S=rp(m,x);return(S-S%7)/7}],["days",rp]],a={},c=i,l,p;for(let[m,x]of o)r.indexOf(m)>=0&&(l=m,a[m]=x(i,e),p=c.plus(a),p>e?(a[m]--,i=c.plus(a),i>e&&(p=i,a[m]--,i=c.plus(a))):i=p);return[i,a,p,l]}function ip(i,e,r,o){let[a,c,l,p]=x1(i,e,r),m=e-a,x=r.filter($=>["hours","minutes","seconds","milliseconds"].indexOf($)>=0);x.length===0&&(l<e&&(l=a.plus({[p]:1})),l!==a&&(c[p]=(c[p]||0)+m/(l-a)));let S=j.fromObject(c,o);return x.length>0?j.fromMillis(m,o).shiftTo(...x).plus(S):S}v();v();var vl={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},sp={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},w1=vl.hanidec.replace(/[\[|\]]/g,"").split("");function op(i){let e=parseInt(i,10);if(isNaN(e)){e="";for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);if(i[r].search(vl.hanidec)!==-1)e+=w1.indexOf(i[r]);else for(let a in sp){let[c,l]=sp[a];o>=c&&o<=l&&(e+=o-c)}}return parseInt(e,10)}else return e}function ce({numberingSystem:i},e=""){return new RegExp(`${vl[i||"latn"]}${e}`)}var b1="missing Intl.DateTimeFormat.formatToParts support";function ot(i,e=r=>r){return{regex:i,deser:([r])=>e(op(r))}}var E1=String.fromCharCode(160),lp=`[ ${E1}]`,cp=new RegExp(lp,"g");function S1(i){return i.replace(/\./g,"\\.?").replace(cp,lp)}function ap(i){return i.replace(/\./g,"").replace(cp," ").toLowerCase()}function Ee(i,e){return i===null?null:{regex:RegExp(i.map(S1).join("|")),deser:([r])=>i.findIndex(o=>ap(r)===ap(o))+e}}function up(i,e){return{regex:i,deser:([,r,o])=>Xn(r,o),groups:e}}function Mo(i){return{regex:i,deser:([e])=>e}}function T1(i){return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function A1(i,e){let r=ce(e),o=ce(e,"{2}"),a=ce(e,"{3}"),c=ce(e,"{4}"),l=ce(e,"{6}"),p=ce(e,"{1,2}"),m=ce(e,"{1,3}"),x=ce(e,"{1,6}"),S=ce(e,"{1,9}"),$=ce(e,"{2,4}"),R=ce(e,"{4,6}"),I=mt=>({regex:RegExp(T1(mt.val)),deser:([St])=>St,literal:!0}),Ct=(mt=>{if(i.literal)return I(mt);switch(mt.val){case"G":return Ee(e.eras("short"),0);case"GG":return Ee(e.eras("long"),0);case"y":return ot(x);case"yy":return ot($,Xi);case"yyyy":return ot(c);case"yyyyy":return ot(R);case"yyyyyy":return ot(l);case"M":return ot(p);case"MM":return ot(o);case"MMM":return Ee(e.months("short",!0),1);case"MMMM":return Ee(e.months("long",!0),1);case"L":return ot(p);case"LL":return ot(o);case"LLL":return Ee(e.months("short",!1),1);case"LLLL":return Ee(e.months("long",!1),1);case"d":return ot(p);case"dd":return ot(o);case"o":return ot(m);case"ooo":return ot(a);case"HH":return ot(o);case"H":return ot(p);case"hh":return ot(o);case"h":return ot(p);case"mm":return ot(o);case"m":return ot(p);case"q":return ot(p);case"qq":return ot(o);case"s":return ot(p);case"ss":return ot(o);case"S":return ot(m);case"SSS":return ot(a);case"u":return Mo(S);case"uu":return Mo(p);case"uuu":return ot(r);case"a":return Ee(e.meridiems(),0);case"kkkk":return ot(c);case"kk":return ot($,Xi);case"W":return ot(p);case"WW":return ot(o);case"E":case"c":return ot(r);case"EEE":return Ee(e.weekdays("short",!1),1);case"EEEE":return Ee(e.weekdays("long",!1),1);case"ccc":return Ee(e.weekdays("short",!0),1);case"cccc":return Ee(e.weekdays("long",!0),1);case"Z":case"ZZ":return up(new RegExp(`([+-]${p.source})(?::(${o.source}))?`),2);case"ZZZ":return up(new RegExp(`([+-]${p.source})(${o.source})?`),2);case"z":return Mo(/[a-z_+-/]{1,256}?/i);case" ":return Mo(/[^\S\n\r]/);default:return I(mt)}})(i)||{invalidReason:b1};return Ct.token=i,Ct}var $1={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function C1(i,e,r){let{type:o,value:a}=i;if(o==="literal"){let m=/^\s+$/.test(a);return{literal:!m,val:m?" ":a}}let c=e[o],l=o;o==="hour"&&(e.hour12!=null?l=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?l="hour12":l="hour24":l=r.hour12?"hour12":"hour24");let p=$1[l];if(typeof p=="object"&&(p=p[c]),p)return{literal:!1,val:p}}function O1(i){return[`^${i.map(r=>r.regex).reduce((r,o)=>`${r}(${o.source})`,"")}$`,i]}function I1(i,e,r){let o=i.match(e);if(o){let a={},c=1;for(let l in r)if(hn(r,l)){let p=r[l],m=p.groups?p.groups+1:1;!p.literal&&p.token&&(a[p.token.val[0]]=p.deser(o.slice(c,c+m))),c+=m}return[o,a]}else return[o,{}]}function M1(i){let e=c=>{switch(c){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},r=null,o;return Y(i.z)||(r=$t.create(i.z)),Y(i.Z)||(r||(r=new _t(i.Z)),o=i.Z),Y(i.q)||(i.M=(i.q-1)*3+1),Y(i.h)||(i.h<12&&i.a===1?i.h+=12:i.h===12&&i.a===0&&(i.h=0)),i.G===0&&i.y&&(i.y=-i.y),Y(i.u)||(i.S=Ki(i.u)),[Object.keys(i).reduce((c,l)=>{let p=e(l);return p&&(c[p]=i[l]),c},{}),r,o]}var yl=null;function L1(){return yl||(yl=H.fromMillis(1555555555555)),yl}function D1(i,e){if(i.literal)return i;let r=xt.macroTokenToFormatOpts(i.val),o=wl(r,e);return o==null||o.includes(void 0)?i:o}function _l(i,e){return Array.prototype.concat(...i.map(r=>D1(r,e)))}function xl(i,e,r){let o=_l(xt.parseFormat(r),i),a=o.map(l=>A1(l,i)),c=a.find(l=>l.invalidReason);if(c)return{input:e,tokens:o,invalidReason:c.invalidReason};{let[l,p]=O1(a),m=RegExp(l,"i"),[x,S]=I1(e,m,p),[$,R,I]=S?M1(S):[null,null,void 0];if(hn(S,"a")&&hn(S,"H"))throw new Ze("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:o,regex:m,rawMatches:x,matches:S,result:$,zone:R,specificOffset:I}}}function dp(i,e,r){let{result:o,zone:a,specificOffset:c,invalidReason:l}=xl(i,e,r);return[o,a,c,l]}function wl(i,e){if(!i)return null;let o=xt.create(e,i).dtFormatter(L1()),a=o.formatToParts(),c=o.resolvedOptions();return a.map(l=>C1(l,i,c))}v();var fp=[0,31,59,90,120,151,181,212,243,273,304,334],hp=[0,31,60,91,121,152,182,213,244,274,305,335];function de(i,e){return new Rt("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${i}, which is invalid`)}function pp(i,e,r){let o=new Date(Date.UTC(i,e-1,r));i<100&&i>=0&&o.setUTCFullYear(o.getUTCFullYear()-1900);let a=o.getUTCDay();return a===0?7:a}function mp(i,e,r){return r+(jn(i)?hp:fp)[e-1]}function gp(i,e){let r=jn(i)?hp:fp,o=r.findIndex(c=>c<e),a=e-r[o];return{month:o+1,day:a}}function Lo(i){let{year:e,month:r,day:o}=i,a=mp(e,r,o),c=pp(e,r,o),l=Math.floor((a-c+10)/7),p;return l<1?(p=e-1,l=zr(p)):l>zr(e)?(p=e+1,l=1):p=e,P({weekYear:p,weekNumber:l,weekday:c},ji(i))}function bl(i){let{weekYear:e,weekNumber:r,weekday:o}=i,a=pp(e,1,4),c=Qn(e),l=r*7+o-a-3,p;l<1?(p=e-1,l+=Qn(p)):l>c?(p=e+1,l-=Qn(e)):p=e;let{month:m,day:x}=gp(p,l);return P({year:p,month:m,day:x},ji(i))}function Do(i){let{year:e,month:r,day:o}=i,a=mp(e,r,o);return P({year:e,ordinal:a},ji(i))}function El(i){let{year:e,ordinal:r}=i,{month:o,day:a}=gp(e,r);return P({year:e,month:o,day:a},ji(i))}function vp(i){let e=Ji(i.weekYear),r=Ie(i.weekNumber,1,zr(i.weekYear)),o=Ie(i.weekday,1,7);return e?r?o?!1:de("weekday",i.weekday):de("week",i.week):de("weekYear",i.weekYear)}function yp(i){let e=Ji(i.year),r=Ie(i.ordinal,1,Qn(i.year));return e?r?!1:de("ordinal",i.ordinal):de("year",i.year)}function Sl(i){let e=Ji(i.year),r=Ie(i.month,1,12),o=Ie(i.day,1,Hr(i.year,i.month));return e?r?o?!1:de("day",i.day):de("month",i.month):de("year",i.year)}function Tl(i){let{hour:e,minute:r,second:o,millisecond:a}=i,c=Ie(e,0,23)||e===24&&r===0&&o===0&&a===0,l=Ie(r,0,59),p=Ie(o,0,59),m=Ie(a,0,999);return c?l?p?m?!1:de("millisecond",a):de("second",o):de("minute",r):de("hour",e)}var Al="Invalid DateTime",_p=864e13;function Ro(i){return new Rt("unsupported zone",`the zone "${i.name}" is not supported`)}function $l(i){return i.weekData===null&&(i.weekData=Lo(i.c)),i.weekData}function er(i,e){let r={ts:i.ts,zone:i.zone,c:i.c,o:i.o,loc:i.loc,invalid:i.invalid};return new H(Pt(P(P({},r),e),{old:r}))}function Ap(i,e,r){let o=i-e*60*1e3,a=r.offset(o);if(e===a)return[o,e];o-=(a-e)*60*1e3;let c=r.offset(o);return a===c?[o,a]:[i-Math.min(a,c)*60*1e3,Math.max(a,c)]}function Fo(i,e){i+=e*60*1e3;let r=new Date(i);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function ko(i,e,r){return Ap(Nr(i),e,r)}function xp(i,e){let r=i.o,o=i.c.year+Math.trunc(e.years),a=i.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,c=Pt(P({},i.c),{year:o,month:a,day:Math.min(i.c.day,Hr(o,a))+Math.trunc(e.days)+Math.trunc(e.weeks)*7}),l=j.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),p=Nr(c),[m,x]=Ap(p,r,i.zone);return l!==0&&(m+=l,x=i.zone.offset(m)),{ts:m,o:x}}function es(i,e,r,o,a,c){let{setZone:l,zone:p}=r;if(i&&Object.keys(i).length!==0||e){let m=e||p,x=H.fromObject(i,Pt(P({},r),{zone:m,specificOffset:c}));return l?x:x.setZone(p)}else return H.invalid(new Rt("unparsable",`the input "${a}" can't be parsed as ${o}`))}function No(i,e,r=!0){return i.isValid?xt.create(it.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(i,e):null}function Cl(i,e){let r=i.c.year>9999||i.c.year<0,o="";return r&&i.c.year>=0&&(o+="+"),o+=yt(i.c.year,r?6:4),e?(o+="-",o+=yt(i.c.month),o+="-",o+=yt(i.c.day)):(o+=yt(i.c.month),o+=yt(i.c.day)),o}function wp(i,e,r,o,a,c){let l=yt(i.c.hour);return e?(l+=":",l+=yt(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(l+=":")):l+=yt(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(l+=yt(i.c.second),(i.c.millisecond!==0||!o)&&(l+=".",l+=yt(i.c.millisecond,3))),a&&(i.isOffsetFixed&&i.offset===0&&!c?l+="Z":i.o<0?(l+="-",l+=yt(Math.trunc(-i.o/60)),l+=":",l+=yt(Math.trunc(-i.o%60))):(l+="+",l+=yt(Math.trunc(i.o/60)),l+=":",l+=yt(Math.trunc(i.o%60)))),c&&(l+="["+i.zone.ianaName+"]"),l}var $p={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},R1={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},F1={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Cp=["year","month","day","hour","minute","second","millisecond"],N1=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],k1=["year","ordinal","hour","minute","second","millisecond"];function bp(i){let e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[i.toLowerCase()];if(!e)throw new Fr(i);return e}function Ep(i,e){let r=be(e.zone,ut.defaultZone),o=it.fromObject(e),a=ut.now(),c,l;if(Y(i.year))c=a;else{for(let x of Cp)Y(i[x])&&(i[x]=$p[x]);let p=Sl(i)||Tl(i);if(p)return H.invalid(p);let m=r.offset(a);[c,l]=ko(i,m,r)}return new H({ts:c,zone:r,loc:o,o:l})}function Sp(i,e,r){let o=Y(r.round)?!0:r.round,a=(l,p)=>(l=kr(l,o||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(l,p)),c=l=>r.calendary?e.hasSame(i,l)?0:e.startOf(l).diff(i.startOf(l),l).get(l):e.diff(i,l).get(l);if(r.unit)return a(c(r.unit),r.unit);for(let l of r.units){let p=c(l);if(Math.abs(p)>=1)return a(p,l)}return a(i>e?-0:0,r.units[r.units.length-1])}function Tp(i){let e={},r;return i.length>0&&typeof i[i.length-1]=="object"?(e=i[i.length-1],r=Array.from(i).slice(0,i.length-1)):r=Array.from(i),[e,r]}var H=class{constructor(e){let r=e.zone||ut.defaultZone,o=e.invalid||(Number.isNaN(e.ts)?new Rt("invalid input"):null)||(r.isValid?null:Ro(r));this.ts=Y(e.ts)?ut.now():e.ts;let a=null,c=null;if(!o)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[a,c]=[e.old.c,e.old.o];else{let p=r.offset(this.ts);a=Fo(this.ts,p),o=Number.isNaN(a.year)?new Rt("invalid input"):null,a=o?null:a,c=o?null:p}this._zone=r,this.loc=e.loc||it.create(),this.invalid=o,this.weekData=null,this.c=a,this.o=c,this.isLuxonDateTime=!0}static now(){return new H({})}static local(){let[e,r]=Tp(arguments),[o,a,c,l,p,m,x]=r;return Ep({year:o,month:a,day:c,hour:l,minute:p,second:m,millisecond:x},e)}static utc(){let[e,r]=Tp(arguments),[o,a,c,l,p,m,x]=r;return e.zone=_t.utcInstance,Ep({year:o,month:a,day:c,hour:l,minute:p,second:m,millisecond:x},e)}static fromJSDate(e,r={}){let o=Lh(e)?e.valueOf():NaN;if(Number.isNaN(o))return H.invalid("invalid input");let a=be(r.zone,ut.defaultZone);return a.isValid?new H({ts:o,zone:a,loc:it.fromObject(r)}):H.invalid(Ro(a))}static fromMillis(e,r={}){if(Oe(e))return e<-_p||e>_p?H.invalid("Timestamp out of range"):new H({ts:e,zone:be(r.zone,ut.defaultZone),loc:it.fromObject(r)});throw new Dt(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if(Oe(e))return new H({ts:e*1e3,zone:be(r.zone,ut.defaultZone),loc:it.fromObject(r)});throw new Dt("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};let o=be(r.zone,ut.defaultZone);if(!o.isValid)return H.invalid(Ro(o));let a=ut.now(),c=Y(r.specificOffset)?o.offset(a):r.specificOffset,l=Ur(e,bp),p=!Y(l.ordinal),m=!Y(l.year),x=!Y(l.month)||!Y(l.day),S=m||x,$=l.weekYear||l.weekNumber,R=it.fromObject(r);if((S||p)&&$)throw new Ze("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(x&&p)throw new Ze("Can't mix ordinal dates with month/day");let I=$||l.weekday&&!S,F,Ct,mt=Fo(a,c);I?(F=N1,Ct=R1,mt=Lo(mt)):p?(F=k1,Ct=F1,mt=Do(mt)):(F=Cp,Ct=$p);let St=!1;for(let yn of F){let Po=l[yn];Y(Po)?St?l[yn]=Ct[yn]:l[yn]=mt[yn]:St=!0}let fe=I?vp(l):p?yp(l):Sl(l),qt=fe||Tl(l);if(qt)return H.invalid(qt);let Ye=I?bl(l):p?El(l):l,[he,gn]=ko(Ye,c,o),vn=new H({ts:he,zone:o,o:gn,loc:R});return l.weekday&&S&&e.weekday!==vn.weekday?H.invalid("mismatched weekday",`you can't specify both a weekday of ${l.weekday} and a date of ${vn.toISO()}`):vn}static fromISO(e,r={}){let[o,a]=qh(e);return es(o,a,r,"ISO 8601",e)}static fromRFC2822(e,r={}){let[o,a]=Yh(e);return es(o,a,r,"RFC 2822",e)}static fromHTTP(e,r={}){let[o,a]=Jh(e);return es(o,a,r,"HTTP",r)}static fromFormat(e,r,o={}){if(Y(e)||Y(r))throw new Dt("fromFormat requires an input string and a format");let{locale:a=null,numberingSystem:c=null}=o,l=it.fromOpts({locale:a,numberingSystem:c,defaultToEN:!0}),[p,m,x,S]=dp(l,e,r);return S?H.invalid(S):es(p,m,o,`format ${r}`,e,x)}static fromString(e,r,o={}){return H.fromFormat(e,r,o)}static fromSQL(e,r={}){let[o,a]=jh(e);return es(o,a,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new Dt("need to specify a reason the DateTime is invalid");let o=e instanceof Rt?e:new Rt(e,r);if(ut.throwOnInvalid)throw new bo(o);return new H({invalid:o})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){let o=wl(e,it.fromObject(r));return o?o.map(a=>a?a.val:null).join(""):null}static expandFormat(e,r={}){return _l(xt.parseFormat(e),it.fromObject(r)).map(a=>a.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?$l(this).weekYear:NaN}get weekNumber(){return this.isValid?$l(this).weekNumber:NaN}get weekday(){return this.isValid?$l(this).weekday:NaN}get ordinal(){return this.isValid?Do(this.c).ordinal:NaN}get monthShort(){return this.isValid?qe.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?qe.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?qe.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?qe.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,r=6e4,o=Nr(this.c),a=this.zone.offset(o-e),c=this.zone.offset(o+e),l=this.zone.offset(o-a*r),p=this.zone.offset(o-c*r);if(l===p)return[this];let m=o-l*r,x=o-p*r,S=Fo(m,l),$=Fo(x,p);return S.hour===$.hour&&S.minute===$.minute&&S.second===$.second&&S.millisecond===$.millisecond?[er(this,{ts:m}),er(this,{ts:x})]:[this]}get isInLeapYear(){return jn(this.year)}get daysInMonth(){return Hr(this.year,this.month)}get daysInYear(){return this.isValid?Qn(this.year):NaN}get weeksInWeekYear(){return this.isValid?zr(this.weekYear):NaN}resolvedLocaleOptions(e={}){let{locale:r,numberingSystem:o,calendar:a}=xt.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:o,outputCalendar:a}}toUTC(e=0,r={}){return this.setZone(_t.instance(e),r)}toLocal(){return this.setZone(ut.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:o=!1}={}){if(e=be(e,ut.defaultZone),e.equals(this.zone))return this;if(e.isValid){let a=this.ts;if(r||o){let c=e.offset(this.ts),l=this.toObject();[a]=ko(l,c,e)}return er(this,{ts:a,zone:e})}else return H.invalid(Ro(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:o}={}){let a=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:o});return er(this,{loc:a})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let r=Ur(e,bp),o=!Y(r.weekYear)||!Y(r.weekNumber)||!Y(r.weekday),a=!Y(r.ordinal),c=!Y(r.year),l=!Y(r.month)||!Y(r.day),p=c||l,m=r.weekYear||r.weekNumber;if((p||a)&&m)throw new Ze("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new Ze("Can't mix ordinal dates with month/day");let x;o?x=bl(P(P({},Lo(this.c)),r)):Y(r.ordinal)?(x=P(P({},this.toObject()),r),Y(r.day)&&(x.day=Math.min(Hr(x.year,x.month),x.day))):x=El(P(P({},Do(this.c)),r));let[S,$]=ko(x,this.o,this.zone);return er(this,{ts:S,o:$})}plus(e){if(!this.isValid)return this;let r=j.fromDurationLike(e);return er(this,xp(this,r))}minus(e){if(!this.isValid)return this;let r=j.fromDurationLike(e).negate();return er(this,xp(this,r))}startOf(e){if(!this.isValid)return this;let r={},o=j.normalizeUnit(e);switch(o){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break;case"milliseconds":break}if(o==="weeks"&&(r.weekday=1),o==="quarters"){let a=Math.ceil(this.month/3);r.month=(a-1)*3+1}return this.set(r)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e,r={}){return this.isValid?xt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):Al}toLocaleString(e=dn,r={}){return this.isValid?xt.create(this.loc.clone(r),e).formatDateTime(this):Al}toLocaleParts(e={}){return this.isValid?xt.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:o=!1,includeOffset:a=!0,extendedZone:c=!1}={}){if(!this.isValid)return null;let l=e==="extended",p=Cl(this,l);return p+="T",p+=wp(this,l,r,o,a,c),p}toISODate({format:e="extended"}={}){return this.isValid?Cl(this,e==="extended"):null}toISOWeekDate(){return No(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:o=!0,includePrefix:a=!1,extendedZone:c=!1,format:l="extended"}={}){return this.isValid?(a?"T":"")+wp(this,l==="extended",r,e,o,c):null}toRFC2822(){return No(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return No(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Cl(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:o=!0}={}){let a="HH:mm:ss.SSS";return(r||e)&&(o&&(a+=" "),r?a+="z":e&&(a+="ZZ")),No(this,a,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Al}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let r=P({},this.c);return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",o={}){if(!this.isValid||!e.isValid)return j.invalid("created by diffing an invalid DateTime");let a=P({locale:this.locale,numberingSystem:this.numberingSystem},o),c=Dh(r).map(j.normalizeUnit),l=e.valueOf()>this.valueOf(),p=l?this:e,m=l?e:this,x=ip(p,m,c,a);return l?x.negate():x}diffNow(e="milliseconds",r={}){return this.diff(H.now(),e,r)}until(e){return this.isValid?dt.fromDateTimes(this,e):this}hasSame(e,r){if(!this.isValid)return!1;let o=e.valueOf(),a=this.setZone(e.zone,{keepLocalTime:!0});return a.startOf(r)<=o&&o<=a.endOf(r)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let r=e.base||H.fromObject({},{zone:this.zone}),o=e.padding?this<r?-e.padding:e.padding:0,a=["years","months","days","hours","minutes","seconds"],c=e.unit;return Array.isArray(e.unit)&&(a=e.unit,c=void 0),Sp(r,this.plus(o),Pt(P({},e),{numeric:"always",units:a,unit:c}))}toRelativeCalendar(e={}){return this.isValid?Sp(e.base||H.fromObject({},{zone:this.zone}),this,Pt(P({},e),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...e){if(!e.every(H.isDateTime))throw new Dt("min requires all arguments be DateTimes");return ll(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(H.isDateTime))throw new Dt("max requires all arguments be DateTimes");return ll(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,o={}){let{locale:a=null,numberingSystem:c=null}=o,l=it.fromOpts({locale:a,numberingSystem:c,defaultToEN:!0});return xl(l,e,r)}static fromStringExplain(e,r,o={}){return H.fromFormatExplain(e,r,o)}static get DATE_SHORT(){return dn}static get DATE_MED(){return Oi}static get DATE_MED_WITH_WEEKDAY(){return qu}static get DATE_FULL(){return Ii}static get DATE_HUGE(){return Mi}static get TIME_SIMPLE(){return Li}static get TIME_WITH_SECONDS(){return Di}static get TIME_WITH_SHORT_OFFSET(){return Ri}static get TIME_WITH_LONG_OFFSET(){return Fi}static get TIME_24_SIMPLE(){return Ni}static get TIME_24_WITH_SECONDS(){return ki}static get TIME_24_WITH_SHORT_OFFSET(){return Pi}static get TIME_24_WITH_LONG_OFFSET(){return Hi}static get DATETIME_SHORT(){return zi}static get DATETIME_SHORT_WITH_SECONDS(){return Ui}static get DATETIME_MED(){return Wi}static get DATETIME_MED_WITH_SECONDS(){return Bi}static get DATETIME_MED_WITH_WEEKDAY(){return Yu}static get DATETIME_FULL(){return Vi}static get DATETIME_FULL_WITH_SECONDS(){return Zi}static get DATETIME_HUGE(){return Gi}static get DATETIME_HUGE_WITH_SECONDS(){return qi}};function Jr(i){if(H.isDateTime(i))return i;if(i&&i.valueOf&&Oe(i.valueOf()))return H.fromJSDate(i);if(i&&typeof i=="object")return H.fromObject(i);throw new Dt(`Unknown datetime argument: ${i}, of type ${typeof i}`)}var Op=et(V),P1=[Op.styles,Nu],nr=class extends Op{constructor(){super();this.updateComment=({detail:r})=>{let{text:o}=r;this.text=o,this.closeEditMode(),this.emitEvent("update-comment",{uuid:this.uuid,text:o})};this.resolveAnnotation=r=>{r.stopPropagation(),this.emitEvent("resolve-annotation",{type:"resolve-annotation",resolved:!this.resolved},{composed:!1,bubbles:!1})};this.confirmDelete=()=>{if(this.deleteCommentModalOpen=!1,this.primaryComment)return this.emitEvent("delete-annotation",{uuid:this.annotationId});this.emitEvent("delete-comment",{annotationId:this.annotationId,uuid:this.uuid})};this.closeEditMode=()=>{this.mode="readonly"};this.resolved=!1}render(){var I;let r=this.annotationFilter==="all"?"resolve":"undo",o=F=>H.fromISO(F).toFormat("yyyy-dd-MM"),a=this.resolvable?"comment-item__resolve":"hidden",c=[{label:"EDIT"},{label:"DELETE"}],l=({detail:F})=>{F==="EDIT"&&(this.mode="editable"),F==="DELETE"&&(this.deleteCommentModalOpen=!0)},p=()=>{this.text.length<120||(this.expandElipsis=!0)},m=()=>{if(this.mode==="editable")return D`
        <superviz-comments-comment-input
          class="comment-item--editable"
          editable
          @click=${F=>F.stopPropagation()}
          text=${this.text}
          eventType="update-comment"
          @update-comment=${this.updateComment}
          @close-edit-mode=${this.closeEditMode}
        ></superviz-comments-comment-input>
      `},x=()=>{if(this.mode!=="editable")return D`
        <span
          id="comment-text"
          @click=${p}
          class="text text-big sv-gray-700 ${R}"
          >${this.text}</span
        >
      `},S=()=>{this.deleteCommentModalOpen=!1},$={"comment-item":!0,reply:!this.primaryComment},R=!this.expandElipsis&&this.text.length>120?"line-clamp":"";return D`
      <div class=${ht($)}>
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
              options=${JSON.stringify(c)}
              label="label"
              returnTo="label"
              position="bottom-right"
              @selected=${l}
              @click=${F=>F.stopPropagation()}
            >
              <button slot="dropdown" class="icon-button icon-button--clickable icon-button--small">
                <superviz-icon name="more" size="sm"></superviz-icon>
              </button>
            </superviz-dropdown>
          </div>
        </div>

        <div class="comment-item__content">
          <div class="comment-item__content__body">${m()} ${x()}</div>
        </div>
      </div>
      <superviz-comments-delete-comments-modal
        ?open=${this.deleteCommentModalOpen}
        @close=${S}
        @confirm=${this.confirmDelete}
      >
      </superviz-comments-delete-comments-modal>
    `}};nr.styles=P1,nr.properties={uuid:{type:String},annotationId:{type:String},avatar:{type:String},username:{type:String},text:{type:String},resolved:{type:Boolean},resolvable:{type:Boolean},createdAt:{type:String},mode:{type:String},deleteCommentModalOpen:{type:Boolean},primaryComment:{type:Boolean},expandElipsis:{type:Boolean},annotationFilter:{type:String}},nr=K([X("superviz-comments-comment-item")],nr);v();var Ip=et(V),H1=[Ip.styles,Pu],rr=class extends Ip{constructor(){super();this.pinCoordinates=null;this.getCommentInput=()=>this.shadowRoot.getElementById("comment-input--textarea");this.getCommentInputContainer=()=>this.shadowRoot.getElementById("comment-input--container");this.getSendBtn=()=>this.shadowRoot.querySelector(".comment-input--send-btn");this.commentInputFocus=({detail:r})=>{this.pinCoordinates=r,this.getCommentInput().focus()};this.sendEnter=r=>{if(r.key!=="Enter"||r.shiftKey)return;let o=this.getCommentInput(),a=o.value.trim();if(!a)return;let c=this.getSendBtn();this.emitEvent(this.eventType,{text:a,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,o.value="",c.disabled=!0,this.updateHeight()};this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1})};this.btnActive=!1,this.text=""}connectedCallback(){super.connectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&(window.document.body.addEventListener("comment-input-focus",this.commentInputFocus),this.addEventListener("keyup",this.sendEnter))}disconnectedCallback(){super.disconnectedCallback(),this.eventType==="create-annotation"&&window.document.body.removeEventListener("comment-input-focus",this.commentInputFocus)}updated(r){if(r.has("text")&&this.text.length>0){let o=this.getCommentInput();o.value=this.text,this.updateHeight()}if(r.has("btnActive")){let o=this.getSendBtn();o.disabled=!this.btnActive}}updateHeight(){let r=this.getCommentInput(),o=this.getCommentInputContainer();r.style.height="0px",o.style.height="0px";let a=r.scrollHeight+4,c=r.scrollHeight;r.style.height=`${a}px`,o.style.height=`${c}px`;let l=this.getSendBtn();l.disabled=!(r.value.length>0)}send(r){r.preventDefault();let o=this.getCommentInput(),a=this.getSendBtn(),c=o.value;this.emitEvent(this.eventType,{text:c,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,o.value="",a.disabled=!0,this.updateHeight()}render(){var a;let r=()=>{if(!!this.editable)return D`
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
      `},o=()=>{if(!this.editable)return D`
        <button class="comment-input--send-btn align-send-btn" disabled @click=${this.send}>
          <superviz-icon name="send" size="sm"></superviz-icon>
        </button>
      `};return D`
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
    `}};rr.styles=H1,rr.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean},placeholder:{type:String}},rr=K([X("superviz-comments-comment-input")],rr);v();var Mp=et(V),z1=[Mp.styles,Uu],ir=class extends Mp{constructor(){super();this.position={x:0,y:0}}get userInitial(){var o,a,c;return(((c=(a=(o=this.annotation)==null?void 0:o.comments[0])==null?void 0:a.participant)==null?void 0:c.name)||"Anonymous")[0].toUpperCase()}emitClick(){document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:this.annotation.uuid}}))}render(){var o,a;let r={"annotation-pin":!0,"annotation-pin--active":this.active};return this.type==="add"?D`
        <div
          class=${ht(r)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          <div class="annotation-pin__avatar annotation-pin__avatar--add">
            <superviz-icon name="add"></superviz-icon>
          </div>
        </div>
      `:D`
      <div
        @click=${this.emitClick}
        class=${ht(r)}
        style=${`top: ${(o=this.position)==null?void 0:o.y}px; left: ${(a=this.position)==null?void 0:a.x}px; pointer-events: auto;`}
      >
        <div class="annotation-pin__avatar">
          <p class="text text-bold text-big">${this.userInitial}</p>
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
      </div>
    `}};ir.styles=z1,ir.properties={type:{type:String},annotation:{type:Object},position:{type:Object},active:{type:Boolean}},ir=K([X("superviz-comments-annotation-pin")],ir);v();var Lp=et(V),U1=[Lp.styles,Hu],sr=class extends Lp{constructor(){super(...arguments);this.selectAnnotation=()=>{let{uuid:r}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:r}}))};this.resolveAnnotation=({detail:r})=>{let{uuid:o}=this.annotation,{resolved:a,type:c}=r,l=c==="resolve-annotation"&&this.annotationFilter==="all";this.resolved=a,this.emitEvent("resolve-annotation",{uuid:o,resolved:a}),l&&(this.shouldShowUndoResolved=!0)};this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1};this.generateExpantedCommentesTemplate=(r,o)=>o===0?D``:D`
      <superviz-comments-comment-item
        uuid=${r.uuid}
        avatar="https://picsum.photos/200/300"
        username=${r.participant.name||"Anonymous"}
        text=${r.text}
        createdAt=${r.createdAt}
        annotationId=${this.annotation.uuid}
      ></superviz-comments-comment-item>
    `}get filterIsAll(){return this.annotationFilter==="all"}get filterIsResolved(){return this.annotationFilter==="resolved"}get shouldHiddenAnnotation(){return{hidden:this.resolved&&this.filterIsAll||!this.resolved&&this.filterIsResolved}}get replies(){return[...this.annotation.comments].splice(1).length}get repliesSize(){return this.replies>=5?5:this.replies}get replyText(){return this.replies!==1?"replies":"reply"}get isSelected(){return this.selected===this.annotation.uuid}get annotationClasses(){return{"annotation-item":!0,"annotation-item--selected":this.isSelected}}get hrClasses(){return{"sv-hr":!0,hidden:this.isLastAnnotation}}get avatarCommentsClasses(){return{"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&this.replies>1,hidden:!(!this.expandComments&&this.replies>=1)}}get commentsClasses(){return{"comments-container":!0,"comment-item--expand":this.isSelected&&this.expandComments,hidden:!(this.isSelected&&this.expandComments)}}firstUpdated(){this.resolved=this.annotation.resolved}updated(r){if(r.has("selected")){let o=this.selected===this.annotation.uuid;this.expandComments=o}}createComment({detail:r}){let{text:o}=r;this.emitEvent("create-comment",{uuid:this.annotation.uuid,text:o})}generateAvatarCommentsTemplate(){var o,a;let r=[];for(let c=1;c<=this.repliesSize;c++)r.push(D`
        <div class="avatar">
          <p class="text text-bold">
            ${((a=(o=this.annotation.comments[c])==null?void 0:o.participant.name[0])==null?void 0:a.toUpperCase())||"A"}
          </p>
        </div>
      `);return D`
      ${r}
      <div class="text text-big sv-gray-500">${this.replies} ${this.replyText}</div>
    `}annotationResolvedTemplate(){return this.shouldShowUndoResolved?D`
      <superviz-comments-annotation-resolved
        @undo-resolve=${this.resolveAnnotation}
        @hide=${this.hideUndoResolved}
        class=${ht({hidden:this.filterIsResolved})}
      >
      </superviz-comments-annotation-resolved>
    `:D``}render(){var r,o,a,c,l,p;return D`
      ${this.annotationResolvedTemplate()}

      <div class=${ht(this.shouldHiddenAnnotation)}>
        <div class=${ht(this.annotationClasses)} @click=${this.selectAnnotation}>
          <div>
            <superviz-comments-comment-item
              uuid=${(r=this.annotation.comments)==null?void 0:r[0].uuid}
              annotationId=${this.annotation.uuid}
              username=${((a=(o=this.annotation.comments)==null?void 0:o[0].participant)==null?void 0:a.name)||"Anonymous"}
              text=${(c=this.annotation.comments)==null?void 0:c[0].text}
              createdAt=${(l=this.annotation.comments)==null?void 0:l[0].createdAt}
              primaryComment
              resolvable
              ?resolved=${this.resolved}
              annotationFilter=${this.annotationFilter}
              @resolve-annotation=${this.resolveAnnotation}
            ></superviz-comments-comment-item>

            <div class=${ht(this.avatarCommentsClasses)}>
              <div class="avatar-container">${this.generateAvatarCommentsTemplate()}</div>
            </div>
          </div>

          <div class=${ht(this.commentsClasses)}>
            ${(p=this.annotation.comments)==null?void 0:p.map(this.generateExpantedCommentesTemplate)}
            <superviz-comments-comment-input
              @create-comment=${this.createComment}
              eventType="create-comment"
              @click=${m=>m.stopPropagation()}
              placeholder="Reply"
            ></superviz-comments-comment-input>
          </div>
        </div>
        <div class=${ht(this.hrClasses)}></div>
      </div>
    `}};sr.styles=U1,sr.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String}},sr=K([X("superviz-comments-annotation-item")],sr);v();var Dp=et(V),W1=[Dp.styles],or=class extends Dp{constructor(){super(...arguments);this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:D`<span class="text text-big sv-gray-600">Are you sure you want to delete this comment? <br /> This action cannot be undone</span>`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))};this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{!this.open||this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{!this.open||(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(r){r.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){!this.open||(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){let r=()=>{if(!!this.useSlot)return D`<slot name="modal-handler" @click=${this.toggle}></slot>`},o=()=>{if(!!this.open)return D`
        <superviz-modal></superviz-modal>
      `};return D`
      ${r()}
      ${o()}
    `}};or.styles=W1,or.properties={open:{type:Boolean},useSlot:{type:Boolean}},or=K([X("superviz-comments-delete-comments-modal")],or);v();var Rp=et(V),B1=[Rp.styles,zu],V1=10*1e3,ar=class extends Rp{constructor(){super();this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)};this.timeToHide=V1,this.isCanceled=!1}firstUpdated(){this.setTimer()}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return this.timeToHide===0?D``:this.isCanceled?D``:D`
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
    `}};ar.styles=B1,ar.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},ar=K([X("superviz-comments-annotation-resolved")],ar);v();var Fp=et(V),Z1=[Fp.styles,Wu],ns=[{label:"All comments",code:"all"},{label:"Resolved comments",code:"resolved"}],ur=class extends Fp{constructor(){super();this.caret="down"}render(){let r=this.filter==="all"?ns[0].label:ns[1].label,o=({detail:p})=>{this.emitEvent("select",{filter:p}),a()},a=()=>{this.caret=this.caret==="down"?"up":"down"},c=this.filter==="all"?ns[0].code:ns[1].code,l={text:!0,"text-bold":!0,"select-content":!0,"sv-gray-500":this.caret==="down","sv-gray-700":this.caret==="up"};return D`
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
            @selected=${o}
            @close=${a}
          >
            <div class="content" slot="dropdown">
              <span class=${ht(l)}>${r}</span>
              <superviz-icon name=${this.caret} size="md"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};ur.styles=Z1,ur.properties={filter:{type:String},caret:{type:String}},ur=K([X("superviz-comments-annotation-filter")],ur);v();var Np=et(V),G1=[Np.styles,Bu],lr=class extends Np{constructor(){super();this.isHidden=!0,this.positionStyles="top: 20px; left: 20px;",this.shouldHide=!1,this.commentsPosition="left"}toggle(){this.emitEvent("toggle",{})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("toggle-annotation-sidebar",()=>{this.isHidden=!this.isHidden})}updated(r){super.updated(r),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(".float-button");if(!o)return;o.setAttribute("style",this.positionStyles);let a=window.document.body.getBoundingClientRect().width,c=o.getBoundingClientRect(),l=320;if(!this.commentsPosition||this.commentsPosition==="left"){this.shouldHide=c.x<l;return}this.shouldHide=a-c.right<l})}render(){let r={"float-button":!0,"hide-button":!this.isHidden&&this.shouldHide};return D` <button @click=${this.toggle} class="${ht(r)}">
      <superviz-icon name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`}};lr.styles=G1,lr.properties={positionStyles:{type:String},isHidden:{type:Boolean},commentsPosition:{type:String}},lr=K([X("superviz-comments-button")],lr);v();v();v();var rs=(r=>(r.GOTO="GO TO",r.FOLLOW="FOLLOW",r))(rs||{});v();v();var Ol=B`
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
    // cursor: pointer;
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
`;v();var Il=B`
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

  .who-is-online-dropdown__content:hover,
  .who-is-online-dropdown__content--selected {
    background-color: rgb(var(--sv-gray-200));
  }

  .who-is-online-dropdown__participant {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 2px solid #878291;
    border-radius: 50%;
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
    padding: 5px;
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
    top: 4px;
  }

  .menu--bottom-left {
    min-width: 103px;
    position: absolute;
    left: 0px;
  }

  .menu--bottom-center {
    min-width: 103px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .menu--bottom-right {
    min-width: 103px;
    position: absolute;
    right: 0;
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
      flex: 1 0 32px;
    }

    .who-is-online-dropdown__avatar {
      width: 24px;
      height: 24px;
    }
  }
`;var kp=et(V),q1=[kp.styles,Ol],cr=class extends kp{constructor(){super();this.onClickOutDropdown=({detail:r})=>{this.open=r.open};this.dropdownOptionsHandler=({detail:r})=>{};this.position="top: 20px; right: 40px;",this.open=!1,this.textColorValues=[2,4,5,7,8,16]}updateParticipants(r){this.participants=r}toggleOpen(){this.open=!this.open}dropdownPosition(r){if(this.participants.length===1)return"bottom-center";if(r===0)return"bottom-left";let o=this.participants.length>4,a=r+1===this.participants.length;return o||!a?"bottom-center":"bottom-right"}renderExcessParticipants(){let r=this.participants.length-4;if(r<=0)return D``;let o=this.participants.slice(4).map(({name:l,color:p,id:m,slotIndex:x})=>({name:l,color:p,id:m,slotIndex:x})),a={"superviz-who-is-online__participant":!0,excess_participants:!0,"excess_participants--open":this.open};return D`
      <superviz-who-is-online-dropdown
        label="label"
        returnTo="label"
        position="bottom-right"
        @selected=${this.dropdownOptionsHandler}
        participants=${JSON.stringify(o)}
        @clickout=${this.onClickOutDropdown}
      >
        <div class=${ht(a)} slot="dropdown" @click=${this.toggleOpen}>
          <div class="superviz-who-is-online__excess" style="color: #AEA9B8;">+${r}</div>
        </div>
      </superviz-who-is-online-dropdown>
    `}renderParticipants(){if(!this.participants)return D``;let r=Object.values(rs).map(a=>({label:a})),o=["place","send"];return D`${this.participants.slice(0,4).map((a,c)=>{var m;let l=this.textColorValues.includes(a.slotIndex)?"#FFFFFF":"#26242A",p=this.dropdownPosition(c);return D`
        <!-- <superviz-dropdown
          options=${JSON.stringify(r)}
          label="label"
          returnTo="label"
          position="${p}"
          @selected=${this.dropdownOptionsHandler}
          icons="${JSON.stringify(o)}"
          name="${a.name}"
        > -->
        <div
          slot="dropdown"
          class="superviz-who-is-online__participant"
          style="border-color: ${a.color}"
        >
          <div
            class="superviz-who-is-online__avatar"
            style="background-color: ${a.color}; color: ${l}"
          >
            ${(m=a.name)==null?void 0:m.at(0).toUpperCase()}
          </div>
        </div>
        <!-- </superviz-dropdown> -->
      `})}
    ${this.renderExcessParticipants()} `}updated(r){super.updated(r),this.updateComplete.then(()=>{let o=this.shadowRoot.querySelector(".superviz-who-is-online");!o||o.setAttribute("style",this.position)})}render(){return D` <div class="superviz-who-is-online">${this.renderParticipants()}</div>`}};cr.styles=q1,cr.properties={position:{type:String},participants:{type:Object},open:{type:Boolean}},cr=K([X("superviz-who-is-online")],cr);v();v();var Pp=et(V),Y1=[Pp.styles,Il],dr=class extends Pp{constructor(){super();this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let o=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),c=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=o.includes(a),x=o.includes(c),S=o.includes(p);m||x||S||(this.open=!1,this.selected="",this.emitEvent("clickout",{detail:{open:this.open},bubbles:!1,composed:!1}))};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.dropdownOptionsHandler=({detail:r})=>{};this.selectParticipant=r=>()=>{this.selected=r};this.textColorValues=[2,4,5,7,8,16],this.selected=""}updated(r){if(r.has("open")){if(this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown),this.close()}}renderParticipants(){if(!this.participants)return;let r=Object.values(rs).map(a=>({label:a})),o=["place","send"];return this.participants.map(a=>{var p;let c=this.textColorValues.includes(a.slotIndex)?"#FFFFFF":"#26242A",l={"who-is-online-dropdown__content":!0,"who-is-online-dropdown__content--selected":this.selected===a.id};return D`
        <!-- <superviz-dropdown
        options=${JSON.stringify(r)}
        label="label"
        returnTo="label"
        position="bottom-right"
        @selected=${this.dropdownOptionsHandler}
        icons="${JSON.stringify(o)}"
        > -->
        <div class=${ht(l)} @click=${this.selectParticipant(a.id)} slot="dropdown">
          <div class="who-is-online-dropdown__participant" style="border-color: 
          ${a.color}">
              <div class="who-is-online-dropdown__avatar" style="background-color: ${a.color}; color: ${c}">
                ${(p=a.name)==null?void 0:p.at(0)}
              </div>
            </div>
            <span class="user-name">${a.name}</span>
            <superviz-icon class="icon" name="right" color="var(--sv-gray-600)"></superviz-icon>
          </div>
        </div>
      <!-- </superviz-dropdown> -->
      `})}toggleOpen(){this.open=!this.open,this.selected=""}get menuClasses(){return{menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right"}}render(){return D`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggleOpen}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${ht(this.menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `}};dr.styles=Y1,dr.properties={open:{type:Boolean},align:{type:String},position:{type:String},participants:{type:Array},selected:{type:String}},dr=K([X("superviz-who-is-online-dropdown")],dr);export{qn as Comments,ur as CommentsAnnotationFilter,sr as CommentsAnnotationItem,ir as CommentsAnnotationPin,ar as CommentsAnnotationResolved,Jn as CommentsAnnotations,rr as CommentsCommentInput,nr as CommentsCommentItem,Kn as CommentsContent,lr as CommentsFloatButton,Yn as CommentsTopbar,or as DeleteCommentModal,Gn as Dropdown,Vn as HelloWorld,Zn as Icon,Lr as Modal,Dr as ModalContainer,Mr as PresenceMouse,cr as WhoIsOnline,dr as WhoIsOnlineDropdown};
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
