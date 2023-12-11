var Ix=Object.create;var Xs=Object.defineProperty,Lx=Object.defineProperties,cf=Object.getOwnPropertyDescriptor,Nx=Object.getOwnPropertyDescriptors,Mx=Object.getOwnPropertyNames,Ks=Object.getOwnPropertySymbols,Rx=Object.getPrototypeOf,sl=Object.prototype.hasOwnProperty,df=Object.prototype.propertyIsEnumerable;var ff=Math.pow,uf=(i,e,r)=>e in i?Xs(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,k=(i,e)=>{for(var r in e||(e={}))sl.call(e,r)&&uf(i,r,e[r]);if(Ks)for(var r of Ks(e))df.call(e,r)&&uf(i,r,e[r]);return i},Lt=(i,e)=>Lx(i,Nx(e));var ol=(i,e)=>{var r={};for(var s in i)sl.call(i,s)&&e.indexOf(s)<0&&(r[s]=i[s]);if(i!=null&&Ks)for(var s of Ks(i))e.indexOf(s)<0&&df.call(i,s)&&(r[s]=i[s]);return r};var Dx=(i,e)=>()=>(i&&(e=i(i=0)),e);var Fx=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var Px=(i,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Mx(e))!sl.call(i,a)&&a!==r&&Xs(i,a,{get:()=>e[a],enumerable:!(s=cf(e,a))||s.enumerable});return i};var kx=(i,e,r)=>(r=i!=null?Ix(Rx(i)):{},Px(e||!i||!i.__esModule?Xs(r,"default",{value:i,enumerable:!0}):r,i));var j=(i,e,r,s)=>{for(var a=s>1?void 0:s?cf(e,r):e,c=i.length-1,u;c>=0;c--)(u=i[c])&&(a=(s?u(e,r,a):u(a))||a);return s&&a&&Xs(e,r,a),a};var $n=(i,e,r)=>new Promise((s,a)=>{var c=m=>{try{p(r.next(m))}catch(w){a(w)}},u=m=>{try{p(r.throw(m))}catch(w){a(w)}},p=m=>m.done?s(m.value):Promise.resolve(m.value).then(c,u);p((r=r.apply(i,e)).next())});var v=Dx(()=>{});var sh=Fx(($r,Oi)=>{v();(function(){var i,e="4.17.21",r=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",p=500,m="__lodash_placeholder__",w=1,S=2,T=4,D=1,I=2,L=1,pt=2,dt=4,Et=8,qt=16,Yt=32,Ye=64,he=128,gn=256,vn=512,yn=30,Po="...",Pp=800,kp=16,Iu=1,Hp=2,Up=3,_n=1/0,Je=9007199254740991,zp=17976931348623157e292,rs=0/0,Te=4294967295,Wp=Te-1,Bp=Te>>>1,Gp=[["ary",he],["bind",L],["bindKey",pt],["curry",Et],["curryRight",qt],["flip",vn],["partial",Yt],["partialRight",Ye],["rearg",gn]],fr="[object Arguments]",is="[object Array]",Vp="[object AsyncFunction]",Jr="[object Boolean]",Kr="[object Date]",Zp="[object DOMException]",ss="[object Error]",os="[object Function]",Lu="[object GeneratorFunction]",pe="[object Map]",Xr="[object Number]",qp="[object Null]",Le="[object Object]",Nu="[object Promise]",Yp="[object Proxy]",jr="[object RegExp]",me="[object Set]",Qr="[object String]",as="[object Symbol]",Jp="[object Undefined]",ti="[object WeakMap]",Kp="[object WeakSet]",ei="[object ArrayBuffer]",hr="[object DataView]",ko="[object Float32Array]",Ho="[object Float64Array]",Uo="[object Int8Array]",zo="[object Int16Array]",Wo="[object Int32Array]",Bo="[object Uint8Array]",Go="[object Uint8ClampedArray]",Vo="[object Uint16Array]",Zo="[object Uint32Array]",Xp=/\b__p \+= '';/g,jp=/\b(__p \+=) '' \+/g,Qp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Mu=/&(?:amp|lt|gt|quot|#39);/g,Ru=/[&<>"']/g,tm=RegExp(Mu.source),em=RegExp(Ru.source),nm=/<%-([\s\S]+?)%>/g,rm=/<%([\s\S]+?)%>/g,Du=/<%=([\s\S]+?)%>/g,im=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,sm=/^\w*$/,om=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qo=/[\\^$.*+?()[\]{}|]/g,am=RegExp(qo.source),Yo=/^\s+/,lm=/\s/,um=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,cm=/\{\n\/\* \[wrapped with (.+)\] \*/,dm=/,? & /,fm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hm=/[()=,{}\[\]\/\s]/,pm=/\\(\\)?/g,mm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Fu=/\w*$/,gm=/^[-+]0x[0-9a-f]+$/i,vm=/^0b[01]+$/i,ym=/^\[object .+?Constructor\]$/,_m=/^0o[0-7]+$/i,wm=/^(?:0|[1-9]\d*)$/,xm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ls=/($^)/,bm=/['\n\r\u2028\u2029\\]/g,us="\\ud800-\\udfff",Em="\\u0300-\\u036f",Tm="\\ufe20-\\ufe2f",Sm="\\u20d0-\\u20ff",Pu=Em+Tm+Sm,ku="\\u2700-\\u27bf",Hu="a-z\\xdf-\\xf6\\xf8-\\xff",Am="\\xac\\xb1\\xd7\\xf7",Om="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Cm="\\u2000-\\u206f",$m=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Uu="A-Z\\xc0-\\xd6\\xd8-\\xde",zu="\\ufe0e\\ufe0f",Wu=Am+Om+Cm+$m,Jo="['\u2019]",Im="["+us+"]",Bu="["+Wu+"]",cs="["+Pu+"]",Gu="\\d+",Lm="["+ku+"]",Vu="["+Hu+"]",Zu="[^"+us+Wu+Gu+ku+Hu+Uu+"]",Ko="\\ud83c[\\udffb-\\udfff]",Nm="(?:"+cs+"|"+Ko+")",qu="[^"+us+"]",Xo="(?:\\ud83c[\\udde6-\\uddff]){2}",jo="[\\ud800-\\udbff][\\udc00-\\udfff]",pr="["+Uu+"]",Yu="\\u200d",Ju="(?:"+Vu+"|"+Zu+")",Mm="(?:"+pr+"|"+Zu+")",Ku="(?:"+Jo+"(?:d|ll|m|re|s|t|ve))?",Xu="(?:"+Jo+"(?:D|LL|M|RE|S|T|VE))?",ju=Nm+"?",Qu="["+zu+"]?",Rm="(?:"+Yu+"(?:"+[qu,Xo,jo].join("|")+")"+Qu+ju+")*",Dm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Fm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tc=Qu+ju+Rm,Pm="(?:"+[Lm,Xo,jo].join("|")+")"+tc,km="(?:"+[qu+cs+"?",cs,Xo,jo,Im].join("|")+")",Hm=RegExp(Jo,"g"),Um=RegExp(cs,"g"),Qo=RegExp(Ko+"(?="+Ko+")|"+km+tc,"g"),zm=RegExp([pr+"?"+Vu+"+"+Ku+"(?="+[Bu,pr,"$"].join("|")+")",Mm+"+"+Xu+"(?="+[Bu,pr+Ju,"$"].join("|")+")",pr+"?"+Ju+"+"+Ku,pr+"+"+Xu,Fm,Dm,Gu,Pm].join("|"),"g"),Wm=RegExp("["+Yu+us+Pu+zu+"]"),Bm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Gm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Vm=-1,gt={};gt[ko]=gt[Ho]=gt[Uo]=gt[zo]=gt[Wo]=gt[Bo]=gt[Go]=gt[Vo]=gt[Zo]=!0,gt[fr]=gt[is]=gt[ei]=gt[Jr]=gt[hr]=gt[Kr]=gt[ss]=gt[os]=gt[pe]=gt[Xr]=gt[Le]=gt[jr]=gt[me]=gt[Qr]=gt[ti]=!1;var mt={};mt[fr]=mt[is]=mt[ei]=mt[hr]=mt[Jr]=mt[Kr]=mt[ko]=mt[Ho]=mt[Uo]=mt[zo]=mt[Wo]=mt[pe]=mt[Xr]=mt[Le]=mt[jr]=mt[me]=mt[Qr]=mt[as]=mt[Bo]=mt[Go]=mt[Vo]=mt[Zo]=!0,mt[ss]=mt[os]=mt[ti]=!1;var Zm={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},qm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ym={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Jm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Km=parseFloat,Xm=parseInt,ec=typeof global=="object"&&global&&global.Object===Object&&global,jm=typeof self=="object"&&self&&self.Object===Object&&self,$t=ec||jm||Function("return this")(),ta=typeof $r=="object"&&$r&&!$r.nodeType&&$r,wn=ta&&typeof Oi=="object"&&Oi&&!Oi.nodeType&&Oi,nc=wn&&wn.exports===ta,ea=nc&&ec.process,ne=function(){try{var _=wn&&wn.require&&wn.require("util").types;return _||ea&&ea.binding&&ea.binding("util")}catch(E){}}(),rc=ne&&ne.isArrayBuffer,ic=ne&&ne.isDate,sc=ne&&ne.isMap,oc=ne&&ne.isRegExp,ac=ne&&ne.isSet,lc=ne&&ne.isTypedArray;function Jt(_,E,b){switch(b.length){case 0:return _.call(E);case 1:return _.call(E,b[0]);case 2:return _.call(E,b[0],b[1]);case 3:return _.call(E,b[0],b[1],b[2])}return _.apply(E,b)}function Qm(_,E,b,F){for(var V=-1,st=_==null?0:_.length;++V<st;){var At=_[V];E(F,At,b(At),_)}return F}function re(_,E){for(var b=-1,F=_==null?0:_.length;++b<F&&E(_[b],b,_)!==!1;);return _}function tg(_,E){for(var b=_==null?0:_.length;b--&&E(_[b],b,_)!==!1;);return _}function uc(_,E){for(var b=-1,F=_==null?0:_.length;++b<F;)if(!E(_[b],b,_))return!1;return!0}function Ke(_,E){for(var b=-1,F=_==null?0:_.length,V=0,st=[];++b<F;){var At=_[b];E(At,b,_)&&(st[V++]=At)}return st}function ds(_,E){var b=_==null?0:_.length;return!!b&&mr(_,E,0)>-1}function na(_,E,b){for(var F=-1,V=_==null?0:_.length;++F<V;)if(b(E,_[F]))return!0;return!1}function vt(_,E){for(var b=-1,F=_==null?0:_.length,V=Array(F);++b<F;)V[b]=E(_[b],b,_);return V}function Xe(_,E){for(var b=-1,F=E.length,V=_.length;++b<F;)_[V+b]=E[b];return _}function ra(_,E,b,F){var V=-1,st=_==null?0:_.length;for(F&&st&&(b=_[++V]);++V<st;)b=E(b,_[V],V,_);return b}function eg(_,E,b,F){var V=_==null?0:_.length;for(F&&V&&(b=_[--V]);V--;)b=E(b,_[V],V,_);return b}function ia(_,E){for(var b=-1,F=_==null?0:_.length;++b<F;)if(E(_[b],b,_))return!0;return!1}var ng=sa("length");function rg(_){return _.split("")}function ig(_){return _.match(fm)||[]}function cc(_,E,b){var F;return b(_,function(V,st,At){if(E(V,st,At))return F=st,!1}),F}function fs(_,E,b,F){for(var V=_.length,st=b+(F?1:-1);F?st--:++st<V;)if(E(_[st],st,_))return st;return-1}function mr(_,E,b){return E===E?gg(_,E,b):fs(_,dc,b)}function sg(_,E,b,F){for(var V=b-1,st=_.length;++V<st;)if(F(_[V],E))return V;return-1}function dc(_){return _!==_}function fc(_,E){var b=_==null?0:_.length;return b?aa(_,E)/b:rs}function sa(_){return function(E){return E==null?i:E[_]}}function oa(_){return function(E){return _==null?i:_[E]}}function hc(_,E,b,F,V){return V(_,function(st,At,ft){b=F?(F=!1,st):E(b,st,At,ft)}),b}function og(_,E){var b=_.length;for(_.sort(E);b--;)_[b]=_[b].value;return _}function aa(_,E){for(var b,F=-1,V=_.length;++F<V;){var st=E(_[F]);st!==i&&(b=b===i?st:b+st)}return b}function la(_,E){for(var b=-1,F=Array(_);++b<_;)F[b]=E(b);return F}function ag(_,E){return vt(E,function(b){return[b,_[b]]})}function pc(_){return _&&_.slice(0,yc(_)+1).replace(Yo,"")}function Kt(_){return function(E){return _(E)}}function ua(_,E){return vt(E,function(b){return _[b]})}function ni(_,E){return _.has(E)}function mc(_,E){for(var b=-1,F=_.length;++b<F&&mr(E,_[b],0)>-1;);return b}function gc(_,E){for(var b=_.length;b--&&mr(E,_[b],0)>-1;);return b}function lg(_,E){for(var b=_.length,F=0;b--;)_[b]===E&&++F;return F}var ug=oa(Zm),cg=oa(qm);function dg(_){return"\\"+Jm[_]}function fg(_,E){return _==null?i:_[E]}function gr(_){return Wm.test(_)}function hg(_){return Bm.test(_)}function pg(_){for(var E,b=[];!(E=_.next()).done;)b.push(E.value);return b}function ca(_){var E=-1,b=Array(_.size);return _.forEach(function(F,V){b[++E]=[V,F]}),b}function vc(_,E){return function(b){return _(E(b))}}function je(_,E){for(var b=-1,F=_.length,V=0,st=[];++b<F;){var At=_[b];(At===E||At===m)&&(_[b]=m,st[V++]=b)}return st}function hs(_){var E=-1,b=Array(_.size);return _.forEach(function(F){b[++E]=F}),b}function mg(_){var E=-1,b=Array(_.size);return _.forEach(function(F){b[++E]=[F,F]}),b}function gg(_,E,b){for(var F=b-1,V=_.length;++F<V;)if(_[F]===E)return F;return-1}function vg(_,E,b){for(var F=b+1;F--;)if(_[F]===E)return F;return F}function vr(_){return gr(_)?_g(_):ng(_)}function ge(_){return gr(_)?wg(_):rg(_)}function yc(_){for(var E=_.length;E--&&lm.test(_.charAt(E)););return E}var yg=oa(Ym);function _g(_){for(var E=Qo.lastIndex=0;Qo.test(_);)++E;return E}function wg(_){return _.match(Qo)||[]}function xg(_){return _.match(zm)||[]}var bg=function _(E){E=E==null?$t:Qe.defaults($t.Object(),E,Qe.pick($t,Gm));var b=E.Array,F=E.Date,V=E.Error,st=E.Function,At=E.Math,ft=E.Object,da=E.RegExp,Eg=E.String,ie=E.TypeError,ps=b.prototype,Tg=st.prototype,yr=ft.prototype,ms=E["__core-js_shared__"],gs=Tg.toString,ut=yr.hasOwnProperty,Sg=0,_c=function(){var t=/[^.]+$/.exec(ms&&ms.keys&&ms.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),vs=yr.toString,Ag=gs.call(ft),Og=$t._,Cg=da("^"+gs.call(ut).replace(qo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ys=nc?E.Buffer:i,tn=E.Symbol,_s=E.Uint8Array,wc=ys?ys.allocUnsafe:i,ws=vc(ft.getPrototypeOf,ft),xc=ft.create,bc=yr.propertyIsEnumerable,xs=ps.splice,Ec=tn?tn.isConcatSpreadable:i,ri=tn?tn.iterator:i,xn=tn?tn.toStringTag:i,bs=function(){try{var t=An(ft,"defineProperty");return t({},"",{}),t}catch(n){}}(),$g=E.clearTimeout!==$t.clearTimeout&&E.clearTimeout,Ig=F&&F.now!==$t.Date.now&&F.now,Lg=E.setTimeout!==$t.setTimeout&&E.setTimeout,Es=At.ceil,Ts=At.floor,fa=ft.getOwnPropertySymbols,Ng=ys?ys.isBuffer:i,Tc=E.isFinite,Mg=ps.join,Rg=vc(ft.keys,ft),Ot=At.max,Pt=At.min,Dg=F.now,Fg=E.parseInt,Sc=At.random,Pg=ps.reverse,ha=An(E,"DataView"),ii=An(E,"Map"),pa=An(E,"Promise"),_r=An(E,"Set"),si=An(E,"WeakMap"),oi=An(ft,"create"),Ss=si&&new si,wr={},kg=On(ha),Hg=On(ii),Ug=On(pa),zg=On(_r),Wg=On(si),As=tn?tn.prototype:i,ai=As?As.valueOf:i,Ac=As?As.toString:i;function f(t){if(bt(t)&&!Z(t)&&!(t instanceof nt)){if(t instanceof se)return t;if(ut.call(t,"__wrapped__"))return Od(t)}return new se(t)}var xr=function(){function t(){}return function(n){if(!yt(n))return{};if(xc)return xc(n);t.prototype=n;var o=new t;return t.prototype=i,o}}();function Os(){}function se(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=i}f.templateSettings={escape:nm,evaluate:rm,interpolate:Du,variable:"",imports:{_:f}},f.prototype=Os.prototype,f.prototype.constructor=f,se.prototype=xr(Os.prototype),se.prototype.constructor=se;function nt(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Te,this.__views__=[]}function Bg(){var t=new nt(this.__wrapped__);return t.__actions__=Wt(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Wt(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Wt(this.__views__),t}function Gg(){if(this.__filtered__){var t=new nt(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Vg(){var t=this.__wrapped__.value(),n=this.__dir__,o=Z(t),l=n<0,d=o?t.length:0,h=r0(0,d,this.__views__),g=h.start,y=h.end,x=y-g,A=l?y:g-1,O=this.__iteratees__,$=O.length,N=0,P=Pt(x,this.__takeCount__);if(!o||!l&&d==x&&P==x)return Kc(t,this.__actions__);var z=[];t:for(;x--&&N<P;){A+=n;for(var J=-1,W=t[A];++J<$;){var tt=O[J],rt=tt.iteratee,Qt=tt.type,zt=rt(W);if(Qt==Hp)W=zt;else if(!zt){if(Qt==Iu)continue t;break t}}z[N++]=W}return z}nt.prototype=xr(Os.prototype),nt.prototype.constructor=nt;function bn(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var l=t[n];this.set(l[0],l[1])}}function Zg(){this.__data__=oi?oi(null):{},this.size=0}function qg(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}function Yg(t){var n=this.__data__;if(oi){var o=n[t];return o===u?i:o}return ut.call(n,t)?n[t]:i}function Jg(t){var n=this.__data__;return oi?n[t]!==i:ut.call(n,t)}function Kg(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=oi&&n===i?u:n,this}bn.prototype.clear=Zg,bn.prototype.delete=qg,bn.prototype.get=Yg,bn.prototype.has=Jg,bn.prototype.set=Kg;function Ne(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var l=t[n];this.set(l[0],l[1])}}function Xg(){this.__data__=[],this.size=0}function jg(t){var n=this.__data__,o=Cs(n,t);if(o<0)return!1;var l=n.length-1;return o==l?n.pop():xs.call(n,o,1),--this.size,!0}function Qg(t){var n=this.__data__,o=Cs(n,t);return o<0?i:n[o][1]}function tv(t){return Cs(this.__data__,t)>-1}function ev(t,n){var o=this.__data__,l=Cs(o,t);return l<0?(++this.size,o.push([t,n])):o[l][1]=n,this}Ne.prototype.clear=Xg,Ne.prototype.delete=jg,Ne.prototype.get=Qg,Ne.prototype.has=tv,Ne.prototype.set=ev;function Me(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var l=t[n];this.set(l[0],l[1])}}function nv(){this.size=0,this.__data__={hash:new bn,map:new(ii||Ne),string:new bn}}function rv(t){var n=Us(this,t).delete(t);return this.size-=n?1:0,n}function iv(t){return Us(this,t).get(t)}function sv(t){return Us(this,t).has(t)}function ov(t,n){var o=Us(this,t),l=o.size;return o.set(t,n),this.size+=o.size==l?0:1,this}Me.prototype.clear=nv,Me.prototype.delete=rv,Me.prototype.get=iv,Me.prototype.has=sv,Me.prototype.set=ov;function En(t){var n=-1,o=t==null?0:t.length;for(this.__data__=new Me;++n<o;)this.add(t[n])}function av(t){return this.__data__.set(t,u),this}function lv(t){return this.__data__.has(t)}En.prototype.add=En.prototype.push=av,En.prototype.has=lv;function ve(t){var n=this.__data__=new Ne(t);this.size=n.size}function uv(){this.__data__=new Ne,this.size=0}function cv(t){var n=this.__data__,o=n.delete(t);return this.size=n.size,o}function dv(t){return this.__data__.get(t)}function fv(t){return this.__data__.has(t)}function hv(t,n){var o=this.__data__;if(o instanceof Ne){var l=o.__data__;if(!ii||l.length<r-1)return l.push([t,n]),this.size=++o.size,this;o=this.__data__=new Me(l)}return o.set(t,n),this.size=o.size,this}ve.prototype.clear=uv,ve.prototype.delete=cv,ve.prototype.get=dv,ve.prototype.has=fv,ve.prototype.set=hv;function Oc(t,n){var o=Z(t),l=!o&&Cn(t),d=!o&&!l&&on(t),h=!o&&!l&&!d&&Sr(t),g=o||l||d||h,y=g?la(t.length,Eg):[],x=y.length;for(var A in t)(n||ut.call(t,A))&&!(g&&(A=="length"||d&&(A=="offset"||A=="parent")||h&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||Pe(A,x)))&&y.push(A);return y}function Cc(t){var n=t.length;return n?t[Sa(0,n-1)]:i}function pv(t,n){return zs(Wt(t),Tn(n,0,t.length))}function mv(t){return zs(Wt(t))}function ma(t,n,o){(o!==i&&!ye(t[n],o)||o===i&&!(n in t))&&Re(t,n,o)}function li(t,n,o){var l=t[n];(!(ut.call(t,n)&&ye(l,o))||o===i&&!(n in t))&&Re(t,n,o)}function Cs(t,n){for(var o=t.length;o--;)if(ye(t[o][0],n))return o;return-1}function gv(t,n,o,l){return en(t,function(d,h,g){n(l,d,o(d),g)}),l}function $c(t,n){return t&&Ae(n,It(n),t)}function vv(t,n){return t&&Ae(n,Gt(n),t)}function Re(t,n,o){n=="__proto__"&&bs?bs(t,n,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[n]=o}function ga(t,n){for(var o=-1,l=n.length,d=b(l),h=t==null;++o<l;)d[o]=h?i:Ka(t,n[o]);return d}function Tn(t,n,o){return t===t&&(o!==i&&(t=t<=o?t:o),n!==i&&(t=t>=n?t:n)),t}function oe(t,n,o,l,d,h){var g,y=n&w,x=n&S,A=n&T;if(o&&(g=d?o(t,l,d,h):o(t)),g!==i)return g;if(!yt(t))return t;var O=Z(t);if(O){if(g=s0(t),!y)return Wt(t,g)}else{var $=kt(t),N=$==os||$==Lu;if(on(t))return Qc(t,y);if($==Le||$==fr||N&&!d){if(g=x||N?{}:yd(t),!y)return x?Yv(t,vv(g,t)):qv(t,$c(g,t))}else{if(!mt[$])return d?t:{};g=o0(t,$,y)}}h||(h=new ve);var P=h.get(t);if(P)return P;h.set(t,g),qd(t)?t.forEach(function(W){g.add(oe(W,n,o,W,t,h))}):Vd(t)&&t.forEach(function(W,tt){g.set(tt,oe(W,n,o,tt,t,h))});var z=A?x?Fa:Da:x?Gt:It,J=O?i:z(t);return re(J||t,function(W,tt){J&&(tt=W,W=t[tt]),li(g,tt,oe(W,n,o,tt,t,h))}),g}function yv(t){var n=It(t);return function(o){return Ic(o,t,n)}}function Ic(t,n,o){var l=o.length;if(t==null)return!l;for(t=ft(t);l--;){var d=o[l],h=n[d],g=t[d];if(g===i&&!(d in t)||!h(g))return!1}return!0}function Lc(t,n,o){if(typeof t!="function")throw new ie(a);return mi(function(){t.apply(i,o)},n)}function ui(t,n,o,l){var d=-1,h=ds,g=!0,y=t.length,x=[],A=n.length;if(!y)return x;o&&(n=vt(n,Kt(o))),l?(h=na,g=!1):n.length>=r&&(h=ni,g=!1,n=new En(n));t:for(;++d<y;){var O=t[d],$=o==null?O:o(O);if(O=l||O!==0?O:0,g&&$===$){for(var N=A;N--;)if(n[N]===$)continue t;x.push(O)}else h(n,$,l)||x.push(O)}return x}var en=id(Se),Nc=id(ya,!0);function _v(t,n){var o=!0;return en(t,function(l,d,h){return o=!!n(l,d,h),o}),o}function $s(t,n,o){for(var l=-1,d=t.length;++l<d;){var h=t[l],g=n(h);if(g!=null&&(y===i?g===g&&!jt(g):o(g,y)))var y=g,x=h}return x}function wv(t,n,o,l){var d=t.length;for(o=q(o),o<0&&(o=-o>d?0:d+o),l=l===i||l>d?d:q(l),l<0&&(l+=d),l=o>l?0:Jd(l);o<l;)t[o++]=n;return t}function Mc(t,n){var o=[];return en(t,function(l,d,h){n(l,d,h)&&o.push(l)}),o}function Ft(t,n,o,l,d){var h=-1,g=t.length;for(o||(o=l0),d||(d=[]);++h<g;){var y=t[h];n>0&&o(y)?n>1?Ft(y,n-1,o,l,d):Xe(d,y):l||(d[d.length]=y)}return d}var va=sd(),Rc=sd(!0);function Se(t,n){return t&&va(t,n,It)}function ya(t,n){return t&&Rc(t,n,It)}function Is(t,n){return Ke(n,function(o){return ke(t[o])})}function Sn(t,n){n=rn(n,t);for(var o=0,l=n.length;t!=null&&o<l;)t=t[Oe(n[o++])];return o&&o==l?t:i}function Dc(t,n,o){var l=n(t);return Z(t)?l:Xe(l,o(t))}function Ht(t){return t==null?t===i?Jp:qp:xn&&xn in ft(t)?n0(t):m0(t)}function _a(t,n){return t>n}function xv(t,n){return t!=null&&ut.call(t,n)}function bv(t,n){return t!=null&&n in ft(t)}function Ev(t,n,o){return t>=Pt(n,o)&&t<Ot(n,o)}function wa(t,n,o){for(var l=o?na:ds,d=t[0].length,h=t.length,g=h,y=b(h),x=1/0,A=[];g--;){var O=t[g];g&&n&&(O=vt(O,Kt(n))),x=Pt(O.length,x),y[g]=!o&&(n||d>=120&&O.length>=120)?new En(g&&O):i}O=t[0];var $=-1,N=y[0];t:for(;++$<d&&A.length<x;){var P=O[$],z=n?n(P):P;if(P=o||P!==0?P:0,!(N?ni(N,z):l(A,z,o))){for(g=h;--g;){var J=y[g];if(!(J?ni(J,z):l(t[g],z,o)))continue t}N&&N.push(z),A.push(P)}}return A}function Tv(t,n,o,l){return Se(t,function(d,h,g){n(l,o(d),h,g)}),l}function ci(t,n,o){n=rn(n,t),t=bd(t,n);var l=t==null?t:t[Oe(le(n))];return l==null?i:Jt(l,t,o)}function Fc(t){return bt(t)&&Ht(t)==fr}function Sv(t){return bt(t)&&Ht(t)==ei}function Av(t){return bt(t)&&Ht(t)==Kr}function di(t,n,o,l,d){return t===n?!0:t==null||n==null||!bt(t)&&!bt(n)?t!==t&&n!==n:Ov(t,n,o,l,di,d)}function Ov(t,n,o,l,d,h){var g=Z(t),y=Z(n),x=g?is:kt(t),A=y?is:kt(n);x=x==fr?Le:x,A=A==fr?Le:A;var O=x==Le,$=A==Le,N=x==A;if(N&&on(t)){if(!on(n))return!1;g=!0,O=!1}if(N&&!O)return h||(h=new ve),g||Sr(t)?md(t,n,o,l,d,h):t0(t,n,x,o,l,d,h);if(!(o&D)){var P=O&&ut.call(t,"__wrapped__"),z=$&&ut.call(n,"__wrapped__");if(P||z){var J=P?t.value():t,W=z?n.value():n;return h||(h=new ve),d(J,W,o,l,h)}}return N?(h||(h=new ve),e0(t,n,o,l,d,h)):!1}function Cv(t){return bt(t)&&kt(t)==pe}function xa(t,n,o,l){var d=o.length,h=d,g=!l;if(t==null)return!h;for(t=ft(t);d--;){var y=o[d];if(g&&y[2]?y[1]!==t[y[0]]:!(y[0]in t))return!1}for(;++d<h;){y=o[d];var x=y[0],A=t[x],O=y[1];if(g&&y[2]){if(A===i&&!(x in t))return!1}else{var $=new ve;if(l)var N=l(A,O,x,t,n,$);if(!(N===i?di(O,A,D|I,l,$):N))return!1}}return!0}function Pc(t){if(!yt(t)||c0(t))return!1;var n=ke(t)?Cg:ym;return n.test(On(t))}function $v(t){return bt(t)&&Ht(t)==jr}function Iv(t){return bt(t)&&kt(t)==me}function Lv(t){return bt(t)&&qs(t.length)&&!!gt[Ht(t)]}function kc(t){return typeof t=="function"?t:t==null?Vt:typeof t=="object"?Z(t)?zc(t[0],t[1]):Uc(t):af(t)}function ba(t){if(!pi(t))return Rg(t);var n=[];for(var o in ft(t))ut.call(t,o)&&o!="constructor"&&n.push(o);return n}function Nv(t){if(!yt(t))return p0(t);var n=pi(t),o=[];for(var l in t)l=="constructor"&&(n||!ut.call(t,l))||o.push(l);return o}function Ea(t,n){return t<n}function Hc(t,n){var o=-1,l=Bt(t)?b(t.length):[];return en(t,function(d,h,g){l[++o]=n(d,h,g)}),l}function Uc(t){var n=ka(t);return n.length==1&&n[0][2]?wd(n[0][0],n[0][1]):function(o){return o===t||xa(o,t,n)}}function zc(t,n){return Ua(t)&&_d(n)?wd(Oe(t),n):function(o){var l=Ka(o,t);return l===i&&l===n?Xa(o,t):di(n,l,D|I)}}function Ls(t,n,o,l,d){t!==n&&va(n,function(h,g){if(d||(d=new ve),yt(h))Mv(t,n,g,o,Ls,l,d);else{var y=l?l(Wa(t,g),h,g+"",t,n,d):i;y===i&&(y=h),ma(t,g,y)}},Gt)}function Mv(t,n,o,l,d,h,g){var y=Wa(t,o),x=Wa(n,o),A=g.get(x);if(A){ma(t,o,A);return}var O=h?h(y,x,o+"",t,n,g):i,$=O===i;if($){var N=Z(x),P=!N&&on(x),z=!N&&!P&&Sr(x);O=x,N||P||z?Z(y)?O=y:Tt(y)?O=Wt(y):P?($=!1,O=Qc(x,!0)):z?($=!1,O=td(x,!0)):O=[]:gi(x)||Cn(x)?(O=y,Cn(y)?O=Kd(y):(!yt(y)||ke(y))&&(O=yd(x))):$=!1}$&&(g.set(x,O),d(O,x,l,h,g),g.delete(x)),ma(t,o,O)}function Wc(t,n){var o=t.length;if(!!o)return n+=n<0?o:0,Pe(n,o)?t[n]:i}function Bc(t,n,o){n.length?n=vt(n,function(h){return Z(h)?function(g){return Sn(g,h.length===1?h[0]:h)}:h}):n=[Vt];var l=-1;n=vt(n,Kt(U()));var d=Hc(t,function(h,g,y){var x=vt(n,function(A){return A(h)});return{criteria:x,index:++l,value:h}});return og(d,function(h,g){return Zv(h,g,o)})}function Rv(t,n){return Gc(t,n,function(o,l){return Xa(t,l)})}function Gc(t,n,o){for(var l=-1,d=n.length,h={};++l<d;){var g=n[l],y=Sn(t,g);o(y,g)&&fi(h,rn(g,t),y)}return h}function Dv(t){return function(n){return Sn(n,t)}}function Ta(t,n,o,l){var d=l?sg:mr,h=-1,g=n.length,y=t;for(t===n&&(n=Wt(n)),o&&(y=vt(t,Kt(o)));++h<g;)for(var x=0,A=n[h],O=o?o(A):A;(x=d(y,O,x,l))>-1;)y!==t&&xs.call(y,x,1),xs.call(t,x,1);return t}function Vc(t,n){for(var o=t?n.length:0,l=o-1;o--;){var d=n[o];if(o==l||d!==h){var h=d;Pe(d)?xs.call(t,d,1):Ca(t,d)}}return t}function Sa(t,n){return t+Ts(Sc()*(n-t+1))}function Fv(t,n,o,l){for(var d=-1,h=Ot(Es((n-t)/(o||1)),0),g=b(h);h--;)g[l?h:++d]=t,t+=o;return g}function Aa(t,n){var o="";if(!t||n<1||n>Je)return o;do n%2&&(o+=t),n=Ts(n/2),n&&(t+=t);while(n);return o}function X(t,n){return Ba(xd(t,n,Vt),t+"")}function Pv(t){return Cc(Ar(t))}function kv(t,n){var o=Ar(t);return zs(o,Tn(n,0,o.length))}function fi(t,n,o,l){if(!yt(t))return t;n=rn(n,t);for(var d=-1,h=n.length,g=h-1,y=t;y!=null&&++d<h;){var x=Oe(n[d]),A=o;if(x==="__proto__"||x==="constructor"||x==="prototype")return t;if(d!=g){var O=y[x];A=l?l(O,x,y):i,A===i&&(A=yt(O)?O:Pe(n[d+1])?[]:{})}li(y,x,A),y=y[x]}return t}var Zc=Ss?function(t,n){return Ss.set(t,n),t}:Vt,Hv=bs?function(t,n){return bs(t,"toString",{configurable:!0,enumerable:!1,value:Qa(n),writable:!0})}:Vt;function Uv(t){return zs(Ar(t))}function ae(t,n,o){var l=-1,d=t.length;n<0&&(n=-n>d?0:d+n),o=o>d?d:o,o<0&&(o+=d),d=n>o?0:o-n>>>0,n>>>=0;for(var h=b(d);++l<d;)h[l]=t[l+n];return h}function zv(t,n){var o;return en(t,function(l,d,h){return o=n(l,d,h),!o}),!!o}function Ns(t,n,o){var l=0,d=t==null?l:t.length;if(typeof n=="number"&&n===n&&d<=Bp){for(;l<d;){var h=l+d>>>1,g=t[h];g!==null&&!jt(g)&&(o?g<=n:g<n)?l=h+1:d=h}return d}return Oa(t,n,Vt,o)}function Oa(t,n,o,l){var d=0,h=t==null?0:t.length;if(h===0)return 0;n=o(n);for(var g=n!==n,y=n===null,x=jt(n),A=n===i;d<h;){var O=Ts((d+h)/2),$=o(t[O]),N=$!==i,P=$===null,z=$===$,J=jt($);if(g)var W=l||z;else A?W=z&&(l||N):y?W=z&&N&&(l||!P):x?W=z&&N&&!P&&(l||!J):P||J?W=!1:W=l?$<=n:$<n;W?d=O+1:h=O}return Pt(h,Wp)}function qc(t,n){for(var o=-1,l=t.length,d=0,h=[];++o<l;){var g=t[o],y=n?n(g):g;if(!o||!ye(y,x)){var x=y;h[d++]=g===0?0:g}}return h}function Yc(t){return typeof t=="number"?t:jt(t)?rs:+t}function Xt(t){if(typeof t=="string")return t;if(Z(t))return vt(t,Xt)+"";if(jt(t))return Ac?Ac.call(t):"";var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function nn(t,n,o){var l=-1,d=ds,h=t.length,g=!0,y=[],x=y;if(o)g=!1,d=na;else if(h>=r){var A=n?null:jv(t);if(A)return hs(A);g=!1,d=ni,x=new En}else x=n?[]:y;t:for(;++l<h;){var O=t[l],$=n?n(O):O;if(O=o||O!==0?O:0,g&&$===$){for(var N=x.length;N--;)if(x[N]===$)continue t;n&&x.push($),y.push(O)}else d(x,$,o)||(x!==y&&x.push($),y.push(O))}return y}function Ca(t,n){return n=rn(n,t),t=bd(t,n),t==null||delete t[Oe(le(n))]}function Jc(t,n,o,l){return fi(t,n,o(Sn(t,n)),l)}function Ms(t,n,o,l){for(var d=t.length,h=l?d:-1;(l?h--:++h<d)&&n(t[h],h,t););return o?ae(t,l?0:h,l?h+1:d):ae(t,l?h+1:0,l?d:h)}function Kc(t,n){var o=t;return o instanceof nt&&(o=o.value()),ra(n,function(l,d){return d.func.apply(d.thisArg,Xe([l],d.args))},o)}function $a(t,n,o){var l=t.length;if(l<2)return l?nn(t[0]):[];for(var d=-1,h=b(l);++d<l;)for(var g=t[d],y=-1;++y<l;)y!=d&&(h[d]=ui(h[d]||g,t[y],n,o));return nn(Ft(h,1),n,o)}function Xc(t,n,o){for(var l=-1,d=t.length,h=n.length,g={};++l<d;){var y=l<h?n[l]:i;o(g,t[l],y)}return g}function Ia(t){return Tt(t)?t:[]}function La(t){return typeof t=="function"?t:Vt}function rn(t,n){return Z(t)?t:Ua(t,n)?[t]:Ad(at(t))}var Wv=X;function sn(t,n,o){var l=t.length;return o=o===i?l:o,!n&&o>=l?t:ae(t,n,o)}var jc=$g||function(t){return $t.clearTimeout(t)};function Qc(t,n){if(n)return t.slice();var o=t.length,l=wc?wc(o):new t.constructor(o);return t.copy(l),l}function Na(t){var n=new t.constructor(t.byteLength);return new _s(n).set(new _s(t)),n}function Bv(t,n){var o=n?Na(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)}function Gv(t){var n=new t.constructor(t.source,Fu.exec(t));return n.lastIndex=t.lastIndex,n}function Vv(t){return ai?ft(ai.call(t)):{}}function td(t,n){var o=n?Na(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)}function ed(t,n){if(t!==n){var o=t!==i,l=t===null,d=t===t,h=jt(t),g=n!==i,y=n===null,x=n===n,A=jt(n);if(!y&&!A&&!h&&t>n||h&&g&&x&&!y&&!A||l&&g&&x||!o&&x||!d)return 1;if(!l&&!h&&!A&&t<n||A&&o&&d&&!l&&!h||y&&o&&d||!g&&d||!x)return-1}return 0}function Zv(t,n,o){for(var l=-1,d=t.criteria,h=n.criteria,g=d.length,y=o.length;++l<g;){var x=ed(d[l],h[l]);if(x){if(l>=y)return x;var A=o[l];return x*(A=="desc"?-1:1)}}return t.index-n.index}function nd(t,n,o,l){for(var d=-1,h=t.length,g=o.length,y=-1,x=n.length,A=Ot(h-g,0),O=b(x+A),$=!l;++y<x;)O[y]=n[y];for(;++d<g;)($||d<h)&&(O[o[d]]=t[d]);for(;A--;)O[y++]=t[d++];return O}function rd(t,n,o,l){for(var d=-1,h=t.length,g=-1,y=o.length,x=-1,A=n.length,O=Ot(h-y,0),$=b(O+A),N=!l;++d<O;)$[d]=t[d];for(var P=d;++x<A;)$[P+x]=n[x];for(;++g<y;)(N||d<h)&&($[P+o[g]]=t[d++]);return $}function Wt(t,n){var o=-1,l=t.length;for(n||(n=b(l));++o<l;)n[o]=t[o];return n}function Ae(t,n,o,l){var d=!o;o||(o={});for(var h=-1,g=n.length;++h<g;){var y=n[h],x=l?l(o[y],t[y],y,o,t):i;x===i&&(x=t[y]),d?Re(o,y,x):li(o,y,x)}return o}function qv(t,n){return Ae(t,Ha(t),n)}function Yv(t,n){return Ae(t,gd(t),n)}function Rs(t,n){return function(o,l){var d=Z(o)?Qm:gv,h=n?n():{};return d(o,t,U(l,2),h)}}function br(t){return X(function(n,o){var l=-1,d=o.length,h=d>1?o[d-1]:i,g=d>2?o[2]:i;for(h=t.length>3&&typeof h=="function"?(d--,h):i,g&&Ut(o[0],o[1],g)&&(h=d<3?i:h,d=1),n=ft(n);++l<d;){var y=o[l];y&&t(n,y,l,h)}return n})}function id(t,n){return function(o,l){if(o==null)return o;if(!Bt(o))return t(o,l);for(var d=o.length,h=n?d:-1,g=ft(o);(n?h--:++h<d)&&l(g[h],h,g)!==!1;);return o}}function sd(t){return function(n,o,l){for(var d=-1,h=ft(n),g=l(n),y=g.length;y--;){var x=g[t?y:++d];if(o(h[x],x,h)===!1)break}return n}}function Jv(t,n,o){var l=n&L,d=hi(t);function h(){var g=this&&this!==$t&&this instanceof h?d:t;return g.apply(l?o:this,arguments)}return h}function od(t){return function(n){n=at(n);var o=gr(n)?ge(n):i,l=o?o[0]:n.charAt(0),d=o?sn(o,1).join(""):n.slice(1);return l[t]()+d}}function Er(t){return function(n){return ra(sf(rf(n).replace(Hm,"")),t,"")}}function hi(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var o=xr(t.prototype),l=t.apply(o,n);return yt(l)?l:o}}function Kv(t,n,o){var l=hi(t);function d(){for(var h=arguments.length,g=b(h),y=h,x=Tr(d);y--;)g[y]=arguments[y];var A=h<3&&g[0]!==x&&g[h-1]!==x?[]:je(g,x);if(h-=A.length,h<o)return dd(t,n,Ds,d.placeholder,i,g,A,i,i,o-h);var O=this&&this!==$t&&this instanceof d?l:t;return Jt(O,this,g)}return d}function ad(t){return function(n,o,l){var d=ft(n);if(!Bt(n)){var h=U(o,3);n=It(n),o=function(y){return h(d[y],y,d)}}var g=t(n,o,l);return g>-1?d[h?n[g]:g]:i}}function ld(t){return Fe(function(n){var o=n.length,l=o,d=se.prototype.thru;for(t&&n.reverse();l--;){var h=n[l];if(typeof h!="function")throw new ie(a);if(d&&!g&&Hs(h)=="wrapper")var g=new se([],!0)}for(l=g?l:o;++l<o;){h=n[l];var y=Hs(h),x=y=="wrapper"?Pa(h):i;x&&za(x[0])&&x[1]==(he|Et|Yt|gn)&&!x[4].length&&x[9]==1?g=g[Hs(x[0])].apply(g,x[3]):g=h.length==1&&za(h)?g[y]():g.thru(h)}return function(){var A=arguments,O=A[0];if(g&&A.length==1&&Z(O))return g.plant(O).value();for(var $=0,N=o?n[$].apply(this,A):O;++$<o;)N=n[$].call(this,N);return N}})}function Ds(t,n,o,l,d,h,g,y,x,A){var O=n&he,$=n&L,N=n&pt,P=n&(Et|qt),z=n&vn,J=N?i:hi(t);function W(){for(var tt=arguments.length,rt=b(tt),Qt=tt;Qt--;)rt[Qt]=arguments[Qt];if(P)var zt=Tr(W),te=lg(rt,zt);if(l&&(rt=nd(rt,l,d,P)),h&&(rt=rd(rt,h,g,P)),tt-=te,P&&tt<A){var St=je(rt,zt);return dd(t,n,Ds,W.placeholder,o,rt,St,y,x,A-tt)}var _e=$?o:this,Ue=N?_e[t]:t;return tt=rt.length,y?rt=g0(rt,y):z&&tt>1&&rt.reverse(),O&&x<tt&&(rt.length=x),this&&this!==$t&&this instanceof W&&(Ue=J||hi(Ue)),Ue.apply(_e,rt)}return W}function ud(t,n){return function(o,l){return Tv(o,t,n(l),{})}}function Fs(t,n){return function(o,l){var d;if(o===i&&l===i)return n;if(o!==i&&(d=o),l!==i){if(d===i)return l;typeof o=="string"||typeof l=="string"?(o=Xt(o),l=Xt(l)):(o=Yc(o),l=Yc(l)),d=t(o,l)}return d}}function Ma(t){return Fe(function(n){return n=vt(n,Kt(U())),X(function(o){var l=this;return t(n,function(d){return Jt(d,l,o)})})})}function Ps(t,n){n=n===i?" ":Xt(n);var o=n.length;if(o<2)return o?Aa(n,t):n;var l=Aa(n,Es(t/vr(n)));return gr(n)?sn(ge(l),0,t).join(""):l.slice(0,t)}function Xv(t,n,o,l){var d=n&L,h=hi(t);function g(){for(var y=-1,x=arguments.length,A=-1,O=l.length,$=b(O+x),N=this&&this!==$t&&this instanceof g?h:t;++A<O;)$[A]=l[A];for(;x--;)$[A++]=arguments[++y];return Jt(N,d?o:this,$)}return g}function cd(t){return function(n,o,l){return l&&typeof l!="number"&&Ut(n,o,l)&&(o=l=i),n=He(n),o===i?(o=n,n=0):o=He(o),l=l===i?n<o?1:-1:He(l),Fv(n,o,l,t)}}function ks(t){return function(n,o){return typeof n=="string"&&typeof o=="string"||(n=ue(n),o=ue(o)),t(n,o)}}function dd(t,n,o,l,d,h,g,y,x,A){var O=n&Et,$=O?g:i,N=O?i:g,P=O?h:i,z=O?i:h;n|=O?Yt:Ye,n&=~(O?Ye:Yt),n&dt||(n&=~(L|pt));var J=[t,n,d,P,$,z,N,y,x,A],W=o.apply(i,J);return za(t)&&Ed(W,J),W.placeholder=l,Td(W,t,n)}function Ra(t){var n=At[t];return function(o,l){if(o=ue(o),l=l==null?0:Pt(q(l),292),l&&Tc(o)){var d=(at(o)+"e").split("e"),h=n(d[0]+"e"+(+d[1]+l));return d=(at(h)+"e").split("e"),+(d[0]+"e"+(+d[1]-l))}return n(o)}}var jv=_r&&1/hs(new _r([,-0]))[1]==_n?function(t){return new _r(t)}:nl;function fd(t){return function(n){var o=kt(n);return o==pe?ca(n):o==me?mg(n):ag(n,t(n))}}function De(t,n,o,l,d,h,g,y){var x=n&pt;if(!x&&typeof t!="function")throw new ie(a);var A=l?l.length:0;if(A||(n&=~(Yt|Ye),l=d=i),g=g===i?g:Ot(q(g),0),y=y===i?y:q(y),A-=d?d.length:0,n&Ye){var O=l,$=d;l=d=i}var N=x?i:Pa(t),P=[t,n,o,l,d,O,$,h,g,y];if(N&&h0(P,N),t=P[0],n=P[1],o=P[2],l=P[3],d=P[4],y=P[9]=P[9]===i?x?0:t.length:Ot(P[9]-A,0),!y&&n&(Et|qt)&&(n&=~(Et|qt)),!n||n==L)var z=Jv(t,n,o);else n==Et||n==qt?z=Kv(t,n,y):(n==Yt||n==(L|Yt))&&!d.length?z=Xv(t,n,o,l):z=Ds.apply(i,P);var J=N?Zc:Ed;return Td(J(z,P),t,n)}function hd(t,n,o,l){return t===i||ye(t,yr[o])&&!ut.call(l,o)?n:t}function pd(t,n,o,l,d,h){return yt(t)&&yt(n)&&(h.set(n,t),Ls(t,n,i,pd,h),h.delete(n)),t}function Qv(t){return gi(t)?i:t}function md(t,n,o,l,d,h){var g=o&D,y=t.length,x=n.length;if(y!=x&&!(g&&x>y))return!1;var A=h.get(t),O=h.get(n);if(A&&O)return A==n&&O==t;var $=-1,N=!0,P=o&I?new En:i;for(h.set(t,n),h.set(n,t);++$<y;){var z=t[$],J=n[$];if(l)var W=g?l(J,z,$,n,t,h):l(z,J,$,t,n,h);if(W!==i){if(W)continue;N=!1;break}if(P){if(!ia(n,function(tt,rt){if(!ni(P,rt)&&(z===tt||d(z,tt,o,l,h)))return P.push(rt)})){N=!1;break}}else if(!(z===J||d(z,J,o,l,h))){N=!1;break}}return h.delete(t),h.delete(n),N}function t0(t,n,o,l,d,h,g){switch(o){case hr:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case ei:return!(t.byteLength!=n.byteLength||!h(new _s(t),new _s(n)));case Jr:case Kr:case Xr:return ye(+t,+n);case ss:return t.name==n.name&&t.message==n.message;case jr:case Qr:return t==n+"";case pe:var y=ca;case me:var x=l&D;if(y||(y=hs),t.size!=n.size&&!x)return!1;var A=g.get(t);if(A)return A==n;l|=I,g.set(t,n);var O=md(y(t),y(n),l,d,h,g);return g.delete(t),O;case as:if(ai)return ai.call(t)==ai.call(n)}return!1}function e0(t,n,o,l,d,h){var g=o&D,y=Da(t),x=y.length,A=Da(n),O=A.length;if(x!=O&&!g)return!1;for(var $=x;$--;){var N=y[$];if(!(g?N in n:ut.call(n,N)))return!1}var P=h.get(t),z=h.get(n);if(P&&z)return P==n&&z==t;var J=!0;h.set(t,n),h.set(n,t);for(var W=g;++$<x;){N=y[$];var tt=t[N],rt=n[N];if(l)var Qt=g?l(rt,tt,N,n,t,h):l(tt,rt,N,t,n,h);if(!(Qt===i?tt===rt||d(tt,rt,o,l,h):Qt)){J=!1;break}W||(W=N=="constructor")}if(J&&!W){var zt=t.constructor,te=n.constructor;zt!=te&&"constructor"in t&&"constructor"in n&&!(typeof zt=="function"&&zt instanceof zt&&typeof te=="function"&&te instanceof te)&&(J=!1)}return h.delete(t),h.delete(n),J}function Fe(t){return Ba(xd(t,i,Id),t+"")}function Da(t){return Dc(t,It,Ha)}function Fa(t){return Dc(t,Gt,gd)}var Pa=Ss?function(t){return Ss.get(t)}:nl;function Hs(t){for(var n=t.name+"",o=wr[n],l=ut.call(wr,n)?o.length:0;l--;){var d=o[l],h=d.func;if(h==null||h==t)return d.name}return n}function Tr(t){var n=ut.call(f,"placeholder")?f:t;return n.placeholder}function U(){var t=f.iteratee||tl;return t=t===tl?kc:t,arguments.length?t(arguments[0],arguments[1]):t}function Us(t,n){var o=t.__data__;return u0(n)?o[typeof n=="string"?"string":"hash"]:o.map}function ka(t){for(var n=It(t),o=n.length;o--;){var l=n[o],d=t[l];n[o]=[l,d,_d(d)]}return n}function An(t,n){var o=fg(t,n);return Pc(o)?o:i}function n0(t){var n=ut.call(t,xn),o=t[xn];try{t[xn]=i;var l=!0}catch(h){}var d=vs.call(t);return l&&(n?t[xn]=o:delete t[xn]),d}var Ha=fa?function(t){return t==null?[]:(t=ft(t),Ke(fa(t),function(n){return bc.call(t,n)}))}:rl,gd=fa?function(t){for(var n=[];t;)Xe(n,Ha(t)),t=ws(t);return n}:rl,kt=Ht;(ha&&kt(new ha(new ArrayBuffer(1)))!=hr||ii&&kt(new ii)!=pe||pa&&kt(pa.resolve())!=Nu||_r&&kt(new _r)!=me||si&&kt(new si)!=ti)&&(kt=function(t){var n=Ht(t),o=n==Le?t.constructor:i,l=o?On(o):"";if(l)switch(l){case kg:return hr;case Hg:return pe;case Ug:return Nu;case zg:return me;case Wg:return ti}return n});function r0(t,n,o){for(var l=-1,d=o.length;++l<d;){var h=o[l],g=h.size;switch(h.type){case"drop":t+=g;break;case"dropRight":n-=g;break;case"take":n=Pt(n,t+g);break;case"takeRight":t=Ot(t,n-g);break}}return{start:t,end:n}}function i0(t){var n=t.match(cm);return n?n[1].split(dm):[]}function vd(t,n,o){n=rn(n,t);for(var l=-1,d=n.length,h=!1;++l<d;){var g=Oe(n[l]);if(!(h=t!=null&&o(t,g)))break;t=t[g]}return h||++l!=d?h:(d=t==null?0:t.length,!!d&&qs(d)&&Pe(g,d)&&(Z(t)||Cn(t)))}function s0(t){var n=t.length,o=new t.constructor(n);return n&&typeof t[0]=="string"&&ut.call(t,"index")&&(o.index=t.index,o.input=t.input),o}function yd(t){return typeof t.constructor=="function"&&!pi(t)?xr(ws(t)):{}}function o0(t,n,o){var l=t.constructor;switch(n){case ei:return Na(t);case Jr:case Kr:return new l(+t);case hr:return Bv(t,o);case ko:case Ho:case Uo:case zo:case Wo:case Bo:case Go:case Vo:case Zo:return td(t,o);case pe:return new l;case Xr:case Qr:return new l(t);case jr:return Gv(t);case me:return new l;case as:return Vv(t)}}function a0(t,n){var o=n.length;if(!o)return t;var l=o-1;return n[l]=(o>1?"& ":"")+n[l],n=n.join(o>2?", ":" "),t.replace(um,`{
/* [wrapped with `+n+`] */
`)}function l0(t){return Z(t)||Cn(t)||!!(Ec&&t&&t[Ec])}function Pe(t,n){var o=typeof t;return n=n==null?Je:n,!!n&&(o=="number"||o!="symbol"&&wm.test(t))&&t>-1&&t%1==0&&t<n}function Ut(t,n,o){if(!yt(o))return!1;var l=typeof n;return(l=="number"?Bt(o)&&Pe(n,o.length):l=="string"&&n in o)?ye(o[n],t):!1}function Ua(t,n){if(Z(t))return!1;var o=typeof t;return o=="number"||o=="symbol"||o=="boolean"||t==null||jt(t)?!0:sm.test(t)||!im.test(t)||n!=null&&t in ft(n)}function u0(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}function za(t){var n=Hs(t),o=f[n];if(typeof o!="function"||!(n in nt.prototype))return!1;if(t===o)return!0;var l=Pa(o);return!!l&&t===l[0]}function c0(t){return!!_c&&_c in t}var d0=ms?ke:il;function pi(t){var n=t&&t.constructor,o=typeof n=="function"&&n.prototype||yr;return t===o}function _d(t){return t===t&&!yt(t)}function wd(t,n){return function(o){return o==null?!1:o[t]===n&&(n!==i||t in ft(o))}}function f0(t){var n=Vs(t,function(l){return o.size===p&&o.clear(),l}),o=n.cache;return n}function h0(t,n){var o=t[1],l=n[1],d=o|l,h=d<(L|pt|he),g=l==he&&o==Et||l==he&&o==gn&&t[7].length<=n[8]||l==(he|gn)&&n[7].length<=n[8]&&o==Et;if(!(h||g))return t;l&L&&(t[2]=n[2],d|=o&L?0:dt);var y=n[3];if(y){var x=t[3];t[3]=x?nd(x,y,n[4]):y,t[4]=x?je(t[3],m):n[4]}return y=n[5],y&&(x=t[5],t[5]=x?rd(x,y,n[6]):y,t[6]=x?je(t[5],m):n[6]),y=n[7],y&&(t[7]=y),l&he&&(t[8]=t[8]==null?n[8]:Pt(t[8],n[8])),t[9]==null&&(t[9]=n[9]),t[0]=n[0],t[1]=d,t}function p0(t){var n=[];if(t!=null)for(var o in ft(t))n.push(o);return n}function m0(t){return vs.call(t)}function xd(t,n,o){return n=Ot(n===i?t.length-1:n,0),function(){for(var l=arguments,d=-1,h=Ot(l.length-n,0),g=b(h);++d<h;)g[d]=l[n+d];d=-1;for(var y=b(n+1);++d<n;)y[d]=l[d];return y[n]=o(g),Jt(t,this,y)}}function bd(t,n){return n.length<2?t:Sn(t,ae(n,0,-1))}function g0(t,n){for(var o=t.length,l=Pt(n.length,o),d=Wt(t);l--;){var h=n[l];t[l]=Pe(h,o)?d[h]:i}return t}function Wa(t,n){if(!(n==="constructor"&&typeof t[n]=="function")&&n!="__proto__")return t[n]}var Ed=Sd(Zc),mi=Lg||function(t,n){return $t.setTimeout(t,n)},Ba=Sd(Hv);function Td(t,n,o){var l=n+"";return Ba(t,a0(l,v0(i0(l),o)))}function Sd(t){var n=0,o=0;return function(){var l=Dg(),d=kp-(l-o);if(o=l,d>0){if(++n>=Pp)return arguments[0]}else n=0;return t.apply(i,arguments)}}function zs(t,n){var o=-1,l=t.length,d=l-1;for(n=n===i?l:n;++o<n;){var h=Sa(o,d),g=t[h];t[h]=t[o],t[o]=g}return t.length=n,t}var Ad=f0(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(om,function(o,l,d,h){n.push(d?h.replace(pm,"$1"):l||o)}),n});function Oe(t){if(typeof t=="string"||jt(t))return t;var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function On(t){if(t!=null){try{return gs.call(t)}catch(n){}try{return t+""}catch(n){}}return""}function v0(t,n){return re(Gp,function(o){var l="_."+o[0];n&o[1]&&!ds(t,l)&&t.push(l)}),t.sort()}function Od(t){if(t instanceof nt)return t.clone();var n=new se(t.__wrapped__,t.__chain__);return n.__actions__=Wt(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}function y0(t,n,o){(o?Ut(t,n,o):n===i)?n=1:n=Ot(q(n),0);var l=t==null?0:t.length;if(!l||n<1)return[];for(var d=0,h=0,g=b(Es(l/n));d<l;)g[h++]=ae(t,d,d+=n);return g}function _0(t){for(var n=-1,o=t==null?0:t.length,l=0,d=[];++n<o;){var h=t[n];h&&(d[l++]=h)}return d}function w0(){var t=arguments.length;if(!t)return[];for(var n=b(t-1),o=arguments[0],l=t;l--;)n[l-1]=arguments[l];return Xe(Z(o)?Wt(o):[o],Ft(n,1))}var x0=X(function(t,n){return Tt(t)?ui(t,Ft(n,1,Tt,!0)):[]}),b0=X(function(t,n){var o=le(n);return Tt(o)&&(o=i),Tt(t)?ui(t,Ft(n,1,Tt,!0),U(o,2)):[]}),E0=X(function(t,n){var o=le(n);return Tt(o)&&(o=i),Tt(t)?ui(t,Ft(n,1,Tt,!0),i,o):[]});function T0(t,n,o){var l=t==null?0:t.length;return l?(n=o||n===i?1:q(n),ae(t,n<0?0:n,l)):[]}function S0(t,n,o){var l=t==null?0:t.length;return l?(n=o||n===i?1:q(n),n=l-n,ae(t,0,n<0?0:n)):[]}function A0(t,n){return t&&t.length?Ms(t,U(n,3),!0,!0):[]}function O0(t,n){return t&&t.length?Ms(t,U(n,3),!0):[]}function C0(t,n,o,l){var d=t==null?0:t.length;return d?(o&&typeof o!="number"&&Ut(t,n,o)&&(o=0,l=d),wv(t,n,o,l)):[]}function Cd(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=o==null?0:q(o);return d<0&&(d=Ot(l+d,0)),fs(t,U(n,3),d)}function $d(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=l-1;return o!==i&&(d=q(o),d=o<0?Ot(l+d,0):Pt(d,l-1)),fs(t,U(n,3),d,!0)}function Id(t){var n=t==null?0:t.length;return n?Ft(t,1):[]}function $0(t){var n=t==null?0:t.length;return n?Ft(t,_n):[]}function I0(t,n){var o=t==null?0:t.length;return o?(n=n===i?1:q(n),Ft(t,n)):[]}function L0(t){for(var n=-1,o=t==null?0:t.length,l={};++n<o;){var d=t[n];l[d[0]]=d[1]}return l}function Ld(t){return t&&t.length?t[0]:i}function N0(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=o==null?0:q(o);return d<0&&(d=Ot(l+d,0)),mr(t,n,d)}function M0(t){var n=t==null?0:t.length;return n?ae(t,0,-1):[]}var R0=X(function(t){var n=vt(t,Ia);return n.length&&n[0]===t[0]?wa(n):[]}),D0=X(function(t){var n=le(t),o=vt(t,Ia);return n===le(o)?n=i:o.pop(),o.length&&o[0]===t[0]?wa(o,U(n,2)):[]}),F0=X(function(t){var n=le(t),o=vt(t,Ia);return n=typeof n=="function"?n:i,n&&o.pop(),o.length&&o[0]===t[0]?wa(o,i,n):[]});function P0(t,n){return t==null?"":Mg.call(t,n)}function le(t){var n=t==null?0:t.length;return n?t[n-1]:i}function k0(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=l;return o!==i&&(d=q(o),d=d<0?Ot(l+d,0):Pt(d,l-1)),n===n?vg(t,n,d):fs(t,dc,d,!0)}function H0(t,n){return t&&t.length?Wc(t,q(n)):i}var U0=X(Nd);function Nd(t,n){return t&&t.length&&n&&n.length?Ta(t,n):t}function z0(t,n,o){return t&&t.length&&n&&n.length?Ta(t,n,U(o,2)):t}function W0(t,n,o){return t&&t.length&&n&&n.length?Ta(t,n,i,o):t}var B0=Fe(function(t,n){var o=t==null?0:t.length,l=ga(t,n);return Vc(t,vt(n,function(d){return Pe(d,o)?+d:d}).sort(ed)),l});function G0(t,n){var o=[];if(!(t&&t.length))return o;var l=-1,d=[],h=t.length;for(n=U(n,3);++l<h;){var g=t[l];n(g,l,t)&&(o.push(g),d.push(l))}return Vc(t,d),o}function Ga(t){return t==null?t:Pg.call(t)}function V0(t,n,o){var l=t==null?0:t.length;return l?(o&&typeof o!="number"&&Ut(t,n,o)?(n=0,o=l):(n=n==null?0:q(n),o=o===i?l:q(o)),ae(t,n,o)):[]}function Z0(t,n){return Ns(t,n)}function q0(t,n,o){return Oa(t,n,U(o,2))}function Y0(t,n){var o=t==null?0:t.length;if(o){var l=Ns(t,n);if(l<o&&ye(t[l],n))return l}return-1}function J0(t,n){return Ns(t,n,!0)}function K0(t,n,o){return Oa(t,n,U(o,2),!0)}function X0(t,n){var o=t==null?0:t.length;if(o){var l=Ns(t,n,!0)-1;if(ye(t[l],n))return l}return-1}function j0(t){return t&&t.length?qc(t):[]}function Q0(t,n){return t&&t.length?qc(t,U(n,2)):[]}function ty(t){var n=t==null?0:t.length;return n?ae(t,1,n):[]}function ey(t,n,o){return t&&t.length?(n=o||n===i?1:q(n),ae(t,0,n<0?0:n)):[]}function ny(t,n,o){var l=t==null?0:t.length;return l?(n=o||n===i?1:q(n),n=l-n,ae(t,n<0?0:n,l)):[]}function ry(t,n){return t&&t.length?Ms(t,U(n,3),!1,!0):[]}function iy(t,n){return t&&t.length?Ms(t,U(n,3)):[]}var sy=X(function(t){return nn(Ft(t,1,Tt,!0))}),oy=X(function(t){var n=le(t);return Tt(n)&&(n=i),nn(Ft(t,1,Tt,!0),U(n,2))}),ay=X(function(t){var n=le(t);return n=typeof n=="function"?n:i,nn(Ft(t,1,Tt,!0),i,n)});function ly(t){return t&&t.length?nn(t):[]}function uy(t,n){return t&&t.length?nn(t,U(n,2)):[]}function cy(t,n){return n=typeof n=="function"?n:i,t&&t.length?nn(t,i,n):[]}function Va(t){if(!(t&&t.length))return[];var n=0;return t=Ke(t,function(o){if(Tt(o))return n=Ot(o.length,n),!0}),la(n,function(o){return vt(t,sa(o))})}function Md(t,n){if(!(t&&t.length))return[];var o=Va(t);return n==null?o:vt(o,function(l){return Jt(n,i,l)})}var dy=X(function(t,n){return Tt(t)?ui(t,n):[]}),fy=X(function(t){return $a(Ke(t,Tt))}),hy=X(function(t){var n=le(t);return Tt(n)&&(n=i),$a(Ke(t,Tt),U(n,2))}),py=X(function(t){var n=le(t);return n=typeof n=="function"?n:i,$a(Ke(t,Tt),i,n)}),my=X(Va);function gy(t,n){return Xc(t||[],n||[],li)}function vy(t,n){return Xc(t||[],n||[],fi)}var yy=X(function(t){var n=t.length,o=n>1?t[n-1]:i;return o=typeof o=="function"?(t.pop(),o):i,Md(t,o)});function Rd(t){var n=f(t);return n.__chain__=!0,n}function _y(t,n){return n(t),t}function Ws(t,n){return n(t)}var wy=Fe(function(t){var n=t.length,o=n?t[0]:0,l=this.__wrapped__,d=function(h){return ga(h,t)};return n>1||this.__actions__.length||!(l instanceof nt)||!Pe(o)?this.thru(d):(l=l.slice(o,+o+(n?1:0)),l.__actions__.push({func:Ws,args:[d],thisArg:i}),new se(l,this.__chain__).thru(function(h){return n&&!h.length&&h.push(i),h}))});function xy(){return Rd(this)}function by(){return new se(this.value(),this.__chain__)}function Ey(){this.__values__===i&&(this.__values__=Yd(this.value()));var t=this.__index__>=this.__values__.length,n=t?i:this.__values__[this.__index__++];return{done:t,value:n}}function Ty(){return this}function Sy(t){for(var n,o=this;o instanceof Os;){var l=Od(o);l.__index__=0,l.__values__=i,n?d.__wrapped__=l:n=l;var d=l;o=o.__wrapped__}return d.__wrapped__=t,n}function Ay(){var t=this.__wrapped__;if(t instanceof nt){var n=t;return this.__actions__.length&&(n=new nt(this)),n=n.reverse(),n.__actions__.push({func:Ws,args:[Ga],thisArg:i}),new se(n,this.__chain__)}return this.thru(Ga)}function Oy(){return Kc(this.__wrapped__,this.__actions__)}var Cy=Rs(function(t,n,o){ut.call(t,o)?++t[o]:Re(t,o,1)});function $y(t,n,o){var l=Z(t)?uc:_v;return o&&Ut(t,n,o)&&(n=i),l(t,U(n,3))}function Iy(t,n){var o=Z(t)?Ke:Mc;return o(t,U(n,3))}var Ly=ad(Cd),Ny=ad($d);function My(t,n){return Ft(Bs(t,n),1)}function Ry(t,n){return Ft(Bs(t,n),_n)}function Dy(t,n,o){return o=o===i?1:q(o),Ft(Bs(t,n),o)}function Dd(t,n){var o=Z(t)?re:en;return o(t,U(n,3))}function Fd(t,n){var o=Z(t)?tg:Nc;return o(t,U(n,3))}var Fy=Rs(function(t,n,o){ut.call(t,o)?t[o].push(n):Re(t,o,[n])});function Py(t,n,o,l){t=Bt(t)?t:Ar(t),o=o&&!l?q(o):0;var d=t.length;return o<0&&(o=Ot(d+o,0)),Ys(t)?o<=d&&t.indexOf(n,o)>-1:!!d&&mr(t,n,o)>-1}var ky=X(function(t,n,o){var l=-1,d=typeof n=="function",h=Bt(t)?b(t.length):[];return en(t,function(g){h[++l]=d?Jt(n,g,o):ci(g,n,o)}),h}),Hy=Rs(function(t,n,o){Re(t,o,n)});function Bs(t,n){var o=Z(t)?vt:Hc;return o(t,U(n,3))}function Uy(t,n,o,l){return t==null?[]:(Z(n)||(n=n==null?[]:[n]),o=l?i:o,Z(o)||(o=o==null?[]:[o]),Bc(t,n,o))}var zy=Rs(function(t,n,o){t[o?0:1].push(n)},function(){return[[],[]]});function Wy(t,n,o){var l=Z(t)?ra:hc,d=arguments.length<3;return l(t,U(n,4),o,d,en)}function By(t,n,o){var l=Z(t)?eg:hc,d=arguments.length<3;return l(t,U(n,4),o,d,Nc)}function Gy(t,n){var o=Z(t)?Ke:Mc;return o(t,Zs(U(n,3)))}function Vy(t){var n=Z(t)?Cc:Pv;return n(t)}function Zy(t,n,o){(o?Ut(t,n,o):n===i)?n=1:n=q(n);var l=Z(t)?pv:kv;return l(t,n)}function qy(t){var n=Z(t)?mv:Uv;return n(t)}function Yy(t){if(t==null)return 0;if(Bt(t))return Ys(t)?vr(t):t.length;var n=kt(t);return n==pe||n==me?t.size:ba(t).length}function Jy(t,n,o){var l=Z(t)?ia:zv;return o&&Ut(t,n,o)&&(n=i),l(t,U(n,3))}var Ky=X(function(t,n){if(t==null)return[];var o=n.length;return o>1&&Ut(t,n[0],n[1])?n=[]:o>2&&Ut(n[0],n[1],n[2])&&(n=[n[0]]),Bc(t,Ft(n,1),[])}),Gs=Ig||function(){return $t.Date.now()};function Xy(t,n){if(typeof n!="function")throw new ie(a);return t=q(t),function(){if(--t<1)return n.apply(this,arguments)}}function Pd(t,n,o){return n=o?i:n,n=t&&n==null?t.length:n,De(t,he,i,i,i,i,n)}function kd(t,n){var o;if(typeof n!="function")throw new ie(a);return t=q(t),function(){return--t>0&&(o=n.apply(this,arguments)),t<=1&&(n=i),o}}var Za=X(function(t,n,o){var l=L;if(o.length){var d=je(o,Tr(Za));l|=Yt}return De(t,l,n,o,d)}),Hd=X(function(t,n,o){var l=L|pt;if(o.length){var d=je(o,Tr(Hd));l|=Yt}return De(n,l,t,o,d)});function Ud(t,n,o){n=o?i:n;var l=De(t,Et,i,i,i,i,i,n);return l.placeholder=Ud.placeholder,l}function zd(t,n,o){n=o?i:n;var l=De(t,qt,i,i,i,i,i,n);return l.placeholder=zd.placeholder,l}function Wd(t,n,o){var l,d,h,g,y,x,A=0,O=!1,$=!1,N=!0;if(typeof t!="function")throw new ie(a);n=ue(n)||0,yt(o)&&(O=!!o.leading,$="maxWait"in o,h=$?Ot(ue(o.maxWait)||0,n):h,N="trailing"in o?!!o.trailing:N);function P(St){var _e=l,Ue=d;return l=d=i,A=St,g=t.apply(Ue,_e),g}function z(St){return A=St,y=mi(tt,n),O?P(St):g}function J(St){var _e=St-x,Ue=St-A,lf=n-_e;return $?Pt(lf,h-Ue):lf}function W(St){var _e=St-x,Ue=St-A;return x===i||_e>=n||_e<0||$&&Ue>=h}function tt(){var St=Gs();if(W(St))return rt(St);y=mi(tt,J(St))}function rt(St){return y=i,N&&l?P(St):(l=d=i,g)}function Qt(){y!==i&&jc(y),A=0,l=x=d=y=i}function zt(){return y===i?g:rt(Gs())}function te(){var St=Gs(),_e=W(St);if(l=arguments,d=this,x=St,_e){if(y===i)return z(x);if($)return jc(y),y=mi(tt,n),P(x)}return y===i&&(y=mi(tt,n)),g}return te.cancel=Qt,te.flush=zt,te}var jy=X(function(t,n){return Lc(t,1,n)}),Qy=X(function(t,n,o){return Lc(t,ue(n)||0,o)});function t_(t){return De(t,vn)}function Vs(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new ie(a);var o=function(){var l=arguments,d=n?n.apply(this,l):l[0],h=o.cache;if(h.has(d))return h.get(d);var g=t.apply(this,l);return o.cache=h.set(d,g)||h,g};return o.cache=new(Vs.Cache||Me),o}Vs.Cache=Me;function Zs(t){if(typeof t!="function")throw new ie(a);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function e_(t){return kd(2,t)}var n_=Wv(function(t,n){n=n.length==1&&Z(n[0])?vt(n[0],Kt(U())):vt(Ft(n,1),Kt(U()));var o=n.length;return X(function(l){for(var d=-1,h=Pt(l.length,o);++d<h;)l[d]=n[d].call(this,l[d]);return Jt(t,this,l)})}),qa=X(function(t,n){var o=je(n,Tr(qa));return De(t,Yt,i,n,o)}),Bd=X(function(t,n){var o=je(n,Tr(Bd));return De(t,Ye,i,n,o)}),r_=Fe(function(t,n){return De(t,gn,i,i,i,n)});function i_(t,n){if(typeof t!="function")throw new ie(a);return n=n===i?n:q(n),X(t,n)}function s_(t,n){if(typeof t!="function")throw new ie(a);return n=n==null?0:Ot(q(n),0),X(function(o){var l=o[n],d=sn(o,0,n);return l&&Xe(d,l),Jt(t,this,d)})}function o_(t,n,o){var l=!0,d=!0;if(typeof t!="function")throw new ie(a);return yt(o)&&(l="leading"in o?!!o.leading:l,d="trailing"in o?!!o.trailing:d),Wd(t,n,{leading:l,maxWait:n,trailing:d})}function a_(t){return Pd(t,1)}function l_(t,n){return qa(La(n),t)}function u_(){if(!arguments.length)return[];var t=arguments[0];return Z(t)?t:[t]}function c_(t){return oe(t,T)}function d_(t,n){return n=typeof n=="function"?n:i,oe(t,T,n)}function f_(t){return oe(t,w|T)}function h_(t,n){return n=typeof n=="function"?n:i,oe(t,w|T,n)}function p_(t,n){return n==null||Ic(t,n,It(n))}function ye(t,n){return t===n||t!==t&&n!==n}var m_=ks(_a),g_=ks(function(t,n){return t>=n}),Cn=Fc(function(){return arguments}())?Fc:function(t){return bt(t)&&ut.call(t,"callee")&&!bc.call(t,"callee")},Z=b.isArray,v_=rc?Kt(rc):Sv;function Bt(t){return t!=null&&qs(t.length)&&!ke(t)}function Tt(t){return bt(t)&&Bt(t)}function y_(t){return t===!0||t===!1||bt(t)&&Ht(t)==Jr}var on=Ng||il,__=ic?Kt(ic):Av;function w_(t){return bt(t)&&t.nodeType===1&&!gi(t)}function x_(t){if(t==null)return!0;if(Bt(t)&&(Z(t)||typeof t=="string"||typeof t.splice=="function"||on(t)||Sr(t)||Cn(t)))return!t.length;var n=kt(t);if(n==pe||n==me)return!t.size;if(pi(t))return!ba(t).length;for(var o in t)if(ut.call(t,o))return!1;return!0}function b_(t,n){return di(t,n)}function E_(t,n,o){o=typeof o=="function"?o:i;var l=o?o(t,n):i;return l===i?di(t,n,i,o):!!l}function Ya(t){if(!bt(t))return!1;var n=Ht(t);return n==ss||n==Zp||typeof t.message=="string"&&typeof t.name=="string"&&!gi(t)}function T_(t){return typeof t=="number"&&Tc(t)}function ke(t){if(!yt(t))return!1;var n=Ht(t);return n==os||n==Lu||n==Vp||n==Yp}function Gd(t){return typeof t=="number"&&t==q(t)}function qs(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Je}function yt(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}function bt(t){return t!=null&&typeof t=="object"}var Vd=sc?Kt(sc):Cv;function S_(t,n){return t===n||xa(t,n,ka(n))}function A_(t,n,o){return o=typeof o=="function"?o:i,xa(t,n,ka(n),o)}function O_(t){return Zd(t)&&t!=+t}function C_(t){if(d0(t))throw new V(s);return Pc(t)}function $_(t){return t===null}function I_(t){return t==null}function Zd(t){return typeof t=="number"||bt(t)&&Ht(t)==Xr}function gi(t){if(!bt(t)||Ht(t)!=Le)return!1;var n=ws(t);if(n===null)return!0;var o=ut.call(n,"constructor")&&n.constructor;return typeof o=="function"&&o instanceof o&&gs.call(o)==Ag}var Ja=oc?Kt(oc):$v;function L_(t){return Gd(t)&&t>=-Je&&t<=Je}var qd=ac?Kt(ac):Iv;function Ys(t){return typeof t=="string"||!Z(t)&&bt(t)&&Ht(t)==Qr}function jt(t){return typeof t=="symbol"||bt(t)&&Ht(t)==as}var Sr=lc?Kt(lc):Lv;function N_(t){return t===i}function M_(t){return bt(t)&&kt(t)==ti}function R_(t){return bt(t)&&Ht(t)==Kp}var D_=ks(Ea),F_=ks(function(t,n){return t<=n});function Yd(t){if(!t)return[];if(Bt(t))return Ys(t)?ge(t):Wt(t);if(ri&&t[ri])return pg(t[ri]());var n=kt(t),o=n==pe?ca:n==me?hs:Ar;return o(t)}function He(t){if(!t)return t===0?t:0;if(t=ue(t),t===_n||t===-_n){var n=t<0?-1:1;return n*zp}return t===t?t:0}function q(t){var n=He(t),o=n%1;return n===n?o?n-o:n:0}function Jd(t){return t?Tn(q(t),0,Te):0}function ue(t){if(typeof t=="number")return t;if(jt(t))return rs;if(yt(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=yt(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=pc(t);var o=vm.test(t);return o||_m.test(t)?Xm(t.slice(2),o?2:8):gm.test(t)?rs:+t}function Kd(t){return Ae(t,Gt(t))}function P_(t){return t?Tn(q(t),-Je,Je):t===0?t:0}function at(t){return t==null?"":Xt(t)}var k_=br(function(t,n){if(pi(n)||Bt(n)){Ae(n,It(n),t);return}for(var o in n)ut.call(n,o)&&li(t,o,n[o])}),Xd=br(function(t,n){Ae(n,Gt(n),t)}),Js=br(function(t,n,o,l){Ae(n,Gt(n),t,l)}),H_=br(function(t,n,o,l){Ae(n,It(n),t,l)}),U_=Fe(ga);function z_(t,n){var o=xr(t);return n==null?o:$c(o,n)}var W_=X(function(t,n){t=ft(t);var o=-1,l=n.length,d=l>2?n[2]:i;for(d&&Ut(n[0],n[1],d)&&(l=1);++o<l;)for(var h=n[o],g=Gt(h),y=-1,x=g.length;++y<x;){var A=g[y],O=t[A];(O===i||ye(O,yr[A])&&!ut.call(t,A))&&(t[A]=h[A])}return t}),B_=X(function(t){return t.push(i,pd),Jt(jd,i,t)});function G_(t,n){return cc(t,U(n,3),Se)}function V_(t,n){return cc(t,U(n,3),ya)}function Z_(t,n){return t==null?t:va(t,U(n,3),Gt)}function q_(t,n){return t==null?t:Rc(t,U(n,3),Gt)}function Y_(t,n){return t&&Se(t,U(n,3))}function J_(t,n){return t&&ya(t,U(n,3))}function K_(t){return t==null?[]:Is(t,It(t))}function X_(t){return t==null?[]:Is(t,Gt(t))}function Ka(t,n,o){var l=t==null?i:Sn(t,n);return l===i?o:l}function j_(t,n){return t!=null&&vd(t,n,xv)}function Xa(t,n){return t!=null&&vd(t,n,bv)}var Q_=ud(function(t,n,o){n!=null&&typeof n.toString!="function"&&(n=vs.call(n)),t[n]=o},Qa(Vt)),tw=ud(function(t,n,o){n!=null&&typeof n.toString!="function"&&(n=vs.call(n)),ut.call(t,n)?t[n].push(o):t[n]=[o]},U),ew=X(ci);function It(t){return Bt(t)?Oc(t):ba(t)}function Gt(t){return Bt(t)?Oc(t,!0):Nv(t)}function nw(t,n){var o={};return n=U(n,3),Se(t,function(l,d,h){Re(o,n(l,d,h),l)}),o}function rw(t,n){var o={};return n=U(n,3),Se(t,function(l,d,h){Re(o,d,n(l,d,h))}),o}var iw=br(function(t,n,o){Ls(t,n,o)}),jd=br(function(t,n,o,l){Ls(t,n,o,l)}),sw=Fe(function(t,n){var o={};if(t==null)return o;var l=!1;n=vt(n,function(h){return h=rn(h,t),l||(l=h.length>1),h}),Ae(t,Fa(t),o),l&&(o=oe(o,w|S|T,Qv));for(var d=n.length;d--;)Ca(o,n[d]);return o});function ow(t,n){return Qd(t,Zs(U(n)))}var aw=Fe(function(t,n){return t==null?{}:Rv(t,n)});function Qd(t,n){if(t==null)return{};var o=vt(Fa(t),function(l){return[l]});return n=U(n),Gc(t,o,function(l,d){return n(l,d[0])})}function lw(t,n,o){n=rn(n,t);var l=-1,d=n.length;for(d||(d=1,t=i);++l<d;){var h=t==null?i:t[Oe(n[l])];h===i&&(l=d,h=o),t=ke(h)?h.call(t):h}return t}function uw(t,n,o){return t==null?t:fi(t,n,o)}function cw(t,n,o,l){return l=typeof l=="function"?l:i,t==null?t:fi(t,n,o,l)}var tf=fd(It),ef=fd(Gt);function dw(t,n,o){var l=Z(t),d=l||on(t)||Sr(t);if(n=U(n,4),o==null){var h=t&&t.constructor;d?o=l?new h:[]:yt(t)?o=ke(h)?xr(ws(t)):{}:o={}}return(d?re:Se)(t,function(g,y,x){return n(o,g,y,x)}),o}function fw(t,n){return t==null?!0:Ca(t,n)}function hw(t,n,o){return t==null?t:Jc(t,n,La(o))}function pw(t,n,o,l){return l=typeof l=="function"?l:i,t==null?t:Jc(t,n,La(o),l)}function Ar(t){return t==null?[]:ua(t,It(t))}function mw(t){return t==null?[]:ua(t,Gt(t))}function gw(t,n,o){return o===i&&(o=n,n=i),o!==i&&(o=ue(o),o=o===o?o:0),n!==i&&(n=ue(n),n=n===n?n:0),Tn(ue(t),n,o)}function vw(t,n,o){return n=He(n),o===i?(o=n,n=0):o=He(o),t=ue(t),Ev(t,n,o)}function yw(t,n,o){if(o&&typeof o!="boolean"&&Ut(t,n,o)&&(n=o=i),o===i&&(typeof n=="boolean"?(o=n,n=i):typeof t=="boolean"&&(o=t,t=i)),t===i&&n===i?(t=0,n=1):(t=He(t),n===i?(n=t,t=0):n=He(n)),t>n){var l=t;t=n,n=l}if(o||t%1||n%1){var d=Sc();return Pt(t+d*(n-t+Km("1e-"+((d+"").length-1))),n)}return Sa(t,n)}var _w=Er(function(t,n,o){return n=n.toLowerCase(),t+(o?nf(n):n)});function nf(t){return ja(at(t).toLowerCase())}function rf(t){return t=at(t),t&&t.replace(xm,ug).replace(Um,"")}function ww(t,n,o){t=at(t),n=Xt(n);var l=t.length;o=o===i?l:Tn(q(o),0,l);var d=o;return o-=n.length,o>=0&&t.slice(o,d)==n}function xw(t){return t=at(t),t&&em.test(t)?t.replace(Ru,cg):t}function bw(t){return t=at(t),t&&am.test(t)?t.replace(qo,"\\$&"):t}var Ew=Er(function(t,n,o){return t+(o?"-":"")+n.toLowerCase()}),Tw=Er(function(t,n,o){return t+(o?" ":"")+n.toLowerCase()}),Sw=od("toLowerCase");function Aw(t,n,o){t=at(t),n=q(n);var l=n?vr(t):0;if(!n||l>=n)return t;var d=(n-l)/2;return Ps(Ts(d),o)+t+Ps(Es(d),o)}function Ow(t,n,o){t=at(t),n=q(n);var l=n?vr(t):0;return n&&l<n?t+Ps(n-l,o):t}function Cw(t,n,o){t=at(t),n=q(n);var l=n?vr(t):0;return n&&l<n?Ps(n-l,o)+t:t}function $w(t,n,o){return o||n==null?n=0:n&&(n=+n),Fg(at(t).replace(Yo,""),n||0)}function Iw(t,n,o){return(o?Ut(t,n,o):n===i)?n=1:n=q(n),Aa(at(t),n)}function Lw(){var t=arguments,n=at(t[0]);return t.length<3?n:n.replace(t[1],t[2])}var Nw=Er(function(t,n,o){return t+(o?"_":"")+n.toLowerCase()});function Mw(t,n,o){return o&&typeof o!="number"&&Ut(t,n,o)&&(n=o=i),o=o===i?Te:o>>>0,o?(t=at(t),t&&(typeof n=="string"||n!=null&&!Ja(n))&&(n=Xt(n),!n&&gr(t))?sn(ge(t),0,o):t.split(n,o)):[]}var Rw=Er(function(t,n,o){return t+(o?" ":"")+ja(n)});function Dw(t,n,o){return t=at(t),o=o==null?0:Tn(q(o),0,t.length),n=Xt(n),t.slice(o,o+n.length)==n}function Fw(t,n,o){var l=f.templateSettings;o&&Ut(t,n,o)&&(n=i),t=at(t),n=Js({},n,l,hd);var d=Js({},n.imports,l.imports,hd),h=It(d),g=ua(d,h),y,x,A=0,O=n.interpolate||ls,$="__p += '",N=da((n.escape||ls).source+"|"+O.source+"|"+(O===Du?mm:ls).source+"|"+(n.evaluate||ls).source+"|$","g"),P="//# sourceURL="+(ut.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Vm+"]")+`
`;t.replace(N,function(W,tt,rt,Qt,zt,te){return rt||(rt=Qt),$+=t.slice(A,te).replace(bm,dg),tt&&(y=!0,$+=`' +
__e(`+tt+`) +
'`),zt&&(x=!0,$+=`';
`+zt+`;
__p += '`),rt&&($+=`' +
((__t = (`+rt+`)) == null ? '' : __t) +
'`),A=te+W.length,W}),$+=`';
`;var z=ut.call(n,"variable")&&n.variable;if(!z)$=`with (obj) {
`+$+`
}
`;else if(hm.test(z))throw new V(c);$=(x?$.replace(Xp,""):$).replace(jp,"$1").replace(Qp,"$1;"),$="function("+(z||"obj")+`) {
`+(z?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(x?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+$+`return __p
}`;var J=of(function(){return st(h,P+"return "+$).apply(i,g)});if(J.source=$,Ya(J))throw J;return J}function Pw(t){return at(t).toLowerCase()}function kw(t){return at(t).toUpperCase()}function Hw(t,n,o){if(t=at(t),t&&(o||n===i))return pc(t);if(!t||!(n=Xt(n)))return t;var l=ge(t),d=ge(n),h=mc(l,d),g=gc(l,d)+1;return sn(l,h,g).join("")}function Uw(t,n,o){if(t=at(t),t&&(o||n===i))return t.slice(0,yc(t)+1);if(!t||!(n=Xt(n)))return t;var l=ge(t),d=gc(l,ge(n))+1;return sn(l,0,d).join("")}function zw(t,n,o){if(t=at(t),t&&(o||n===i))return t.replace(Yo,"");if(!t||!(n=Xt(n)))return t;var l=ge(t),d=mc(l,ge(n));return sn(l,d).join("")}function Ww(t,n){var o=yn,l=Po;if(yt(n)){var d="separator"in n?n.separator:d;o="length"in n?q(n.length):o,l="omission"in n?Xt(n.omission):l}t=at(t);var h=t.length;if(gr(t)){var g=ge(t);h=g.length}if(o>=h)return t;var y=o-vr(l);if(y<1)return l;var x=g?sn(g,0,y).join(""):t.slice(0,y);if(d===i)return x+l;if(g&&(y+=x.length-y),Ja(d)){if(t.slice(y).search(d)){var A,O=x;for(d.global||(d=da(d.source,at(Fu.exec(d))+"g")),d.lastIndex=0;A=d.exec(O);)var $=A.index;x=x.slice(0,$===i?y:$)}}else if(t.indexOf(Xt(d),y)!=y){var N=x.lastIndexOf(d);N>-1&&(x=x.slice(0,N))}return x+l}function Bw(t){return t=at(t),t&&tm.test(t)?t.replace(Mu,yg):t}var Gw=Er(function(t,n,o){return t+(o?" ":"")+n.toUpperCase()}),ja=od("toUpperCase");function sf(t,n,o){return t=at(t),n=o?i:n,n===i?hg(t)?xg(t):ig(t):t.match(n)||[]}var of=X(function(t,n){try{return Jt(t,i,n)}catch(o){return Ya(o)?o:new V(o)}}),Vw=Fe(function(t,n){return re(n,function(o){o=Oe(o),Re(t,o,Za(t[o],t))}),t});function Zw(t){var n=t==null?0:t.length,o=U();return t=n?vt(t,function(l){if(typeof l[1]!="function")throw new ie(a);return[o(l[0]),l[1]]}):[],X(function(l){for(var d=-1;++d<n;){var h=t[d];if(Jt(h[0],this,l))return Jt(h[1],this,l)}})}function qw(t){return yv(oe(t,w))}function Qa(t){return function(){return t}}function Yw(t,n){return t==null||t!==t?n:t}var Jw=ld(),Kw=ld(!0);function Vt(t){return t}function tl(t){return kc(typeof t=="function"?t:oe(t,w))}function Xw(t){return Uc(oe(t,w))}function jw(t,n){return zc(t,oe(n,w))}var Qw=X(function(t,n){return function(o){return ci(o,t,n)}}),tx=X(function(t,n){return function(o){return ci(t,o,n)}});function el(t,n,o){var l=It(n),d=Is(n,l);o==null&&!(yt(n)&&(d.length||!l.length))&&(o=n,n=t,t=this,d=Is(n,It(n)));var h=!(yt(o)&&"chain"in o)||!!o.chain,g=ke(t);return re(d,function(y){var x=n[y];t[y]=x,g&&(t.prototype[y]=function(){var A=this.__chain__;if(h||A){var O=t(this.__wrapped__),$=O.__actions__=Wt(this.__actions__);return $.push({func:x,args:arguments,thisArg:t}),O.__chain__=A,O}return x.apply(t,Xe([this.value()],arguments))})}),t}function ex(){return $t._===this&&($t._=Og),this}function nl(){}function nx(t){return t=q(t),X(function(n){return Wc(n,t)})}var rx=Ma(vt),ix=Ma(uc),sx=Ma(ia);function af(t){return Ua(t)?sa(Oe(t)):Dv(t)}function ox(t){return function(n){return t==null?i:Sn(t,n)}}var ax=cd(),lx=cd(!0);function rl(){return[]}function il(){return!1}function ux(){return{}}function cx(){return""}function dx(){return!0}function fx(t,n){if(t=q(t),t<1||t>Je)return[];var o=Te,l=Pt(t,Te);n=U(n),t-=Te;for(var d=la(l,n);++o<t;)n(o);return d}function hx(t){return Z(t)?vt(t,Oe):jt(t)?[t]:Wt(Ad(at(t)))}function px(t){var n=++Sg;return at(t)+n}var mx=Fs(function(t,n){return t+n},0),gx=Ra("ceil"),vx=Fs(function(t,n){return t/n},1),yx=Ra("floor");function _x(t){return t&&t.length?$s(t,Vt,_a):i}function wx(t,n){return t&&t.length?$s(t,U(n,2),_a):i}function xx(t){return fc(t,Vt)}function bx(t,n){return fc(t,U(n,2))}function Ex(t){return t&&t.length?$s(t,Vt,Ea):i}function Tx(t,n){return t&&t.length?$s(t,U(n,2),Ea):i}var Sx=Fs(function(t,n){return t*n},1),Ax=Ra("round"),Ox=Fs(function(t,n){return t-n},0);function Cx(t){return t&&t.length?aa(t,Vt):0}function $x(t,n){return t&&t.length?aa(t,U(n,2)):0}return f.after=Xy,f.ary=Pd,f.assign=k_,f.assignIn=Xd,f.assignInWith=Js,f.assignWith=H_,f.at=U_,f.before=kd,f.bind=Za,f.bindAll=Vw,f.bindKey=Hd,f.castArray=u_,f.chain=Rd,f.chunk=y0,f.compact=_0,f.concat=w0,f.cond=Zw,f.conforms=qw,f.constant=Qa,f.countBy=Cy,f.create=z_,f.curry=Ud,f.curryRight=zd,f.debounce=Wd,f.defaults=W_,f.defaultsDeep=B_,f.defer=jy,f.delay=Qy,f.difference=x0,f.differenceBy=b0,f.differenceWith=E0,f.drop=T0,f.dropRight=S0,f.dropRightWhile=A0,f.dropWhile=O0,f.fill=C0,f.filter=Iy,f.flatMap=My,f.flatMapDeep=Ry,f.flatMapDepth=Dy,f.flatten=Id,f.flattenDeep=$0,f.flattenDepth=I0,f.flip=t_,f.flow=Jw,f.flowRight=Kw,f.fromPairs=L0,f.functions=K_,f.functionsIn=X_,f.groupBy=Fy,f.initial=M0,f.intersection=R0,f.intersectionBy=D0,f.intersectionWith=F0,f.invert=Q_,f.invertBy=tw,f.invokeMap=ky,f.iteratee=tl,f.keyBy=Hy,f.keys=It,f.keysIn=Gt,f.map=Bs,f.mapKeys=nw,f.mapValues=rw,f.matches=Xw,f.matchesProperty=jw,f.memoize=Vs,f.merge=iw,f.mergeWith=jd,f.method=Qw,f.methodOf=tx,f.mixin=el,f.negate=Zs,f.nthArg=nx,f.omit=sw,f.omitBy=ow,f.once=e_,f.orderBy=Uy,f.over=rx,f.overArgs=n_,f.overEvery=ix,f.overSome=sx,f.partial=qa,f.partialRight=Bd,f.partition=zy,f.pick=aw,f.pickBy=Qd,f.property=af,f.propertyOf=ox,f.pull=U0,f.pullAll=Nd,f.pullAllBy=z0,f.pullAllWith=W0,f.pullAt=B0,f.range=ax,f.rangeRight=lx,f.rearg=r_,f.reject=Gy,f.remove=G0,f.rest=i_,f.reverse=Ga,f.sampleSize=Zy,f.set=uw,f.setWith=cw,f.shuffle=qy,f.slice=V0,f.sortBy=Ky,f.sortedUniq=j0,f.sortedUniqBy=Q0,f.split=Mw,f.spread=s_,f.tail=ty,f.take=ey,f.takeRight=ny,f.takeRightWhile=ry,f.takeWhile=iy,f.tap=_y,f.throttle=o_,f.thru=Ws,f.toArray=Yd,f.toPairs=tf,f.toPairsIn=ef,f.toPath=hx,f.toPlainObject=Kd,f.transform=dw,f.unary=a_,f.union=sy,f.unionBy=oy,f.unionWith=ay,f.uniq=ly,f.uniqBy=uy,f.uniqWith=cy,f.unset=fw,f.unzip=Va,f.unzipWith=Md,f.update=hw,f.updateWith=pw,f.values=Ar,f.valuesIn=mw,f.without=dy,f.words=sf,f.wrap=l_,f.xor=fy,f.xorBy=hy,f.xorWith=py,f.zip=my,f.zipObject=gy,f.zipObjectDeep=vy,f.zipWith=yy,f.entries=tf,f.entriesIn=ef,f.extend=Xd,f.extendWith=Js,el(f,f),f.add=mx,f.attempt=of,f.camelCase=_w,f.capitalize=nf,f.ceil=gx,f.clamp=gw,f.clone=c_,f.cloneDeep=f_,f.cloneDeepWith=h_,f.cloneWith=d_,f.conformsTo=p_,f.deburr=rf,f.defaultTo=Yw,f.divide=vx,f.endsWith=ww,f.eq=ye,f.escape=xw,f.escapeRegExp=bw,f.every=$y,f.find=Ly,f.findIndex=Cd,f.findKey=G_,f.findLast=Ny,f.findLastIndex=$d,f.findLastKey=V_,f.floor=yx,f.forEach=Dd,f.forEachRight=Fd,f.forIn=Z_,f.forInRight=q_,f.forOwn=Y_,f.forOwnRight=J_,f.get=Ka,f.gt=m_,f.gte=g_,f.has=j_,f.hasIn=Xa,f.head=Ld,f.identity=Vt,f.includes=Py,f.indexOf=N0,f.inRange=vw,f.invoke=ew,f.isArguments=Cn,f.isArray=Z,f.isArrayBuffer=v_,f.isArrayLike=Bt,f.isArrayLikeObject=Tt,f.isBoolean=y_,f.isBuffer=on,f.isDate=__,f.isElement=w_,f.isEmpty=x_,f.isEqual=b_,f.isEqualWith=E_,f.isError=Ya,f.isFinite=T_,f.isFunction=ke,f.isInteger=Gd,f.isLength=qs,f.isMap=Vd,f.isMatch=S_,f.isMatchWith=A_,f.isNaN=O_,f.isNative=C_,f.isNil=I_,f.isNull=$_,f.isNumber=Zd,f.isObject=yt,f.isObjectLike=bt,f.isPlainObject=gi,f.isRegExp=Ja,f.isSafeInteger=L_,f.isSet=qd,f.isString=Ys,f.isSymbol=jt,f.isTypedArray=Sr,f.isUndefined=N_,f.isWeakMap=M_,f.isWeakSet=R_,f.join=P0,f.kebabCase=Ew,f.last=le,f.lastIndexOf=k0,f.lowerCase=Tw,f.lowerFirst=Sw,f.lt=D_,f.lte=F_,f.max=_x,f.maxBy=wx,f.mean=xx,f.meanBy=bx,f.min=Ex,f.minBy=Tx,f.stubArray=rl,f.stubFalse=il,f.stubObject=ux,f.stubString=cx,f.stubTrue=dx,f.multiply=Sx,f.nth=H0,f.noConflict=ex,f.noop=nl,f.now=Gs,f.pad=Aw,f.padEnd=Ow,f.padStart=Cw,f.parseInt=$w,f.random=yw,f.reduce=Wy,f.reduceRight=By,f.repeat=Iw,f.replace=Lw,f.result=lw,f.round=Ax,f.runInContext=_,f.sample=Vy,f.size=Yy,f.snakeCase=Nw,f.some=Jy,f.sortedIndex=Z0,f.sortedIndexBy=q0,f.sortedIndexOf=Y0,f.sortedLastIndex=J0,f.sortedLastIndexBy=K0,f.sortedLastIndexOf=X0,f.startCase=Rw,f.startsWith=Dw,f.subtract=Ox,f.sum=Cx,f.sumBy=$x,f.template=Fw,f.times=fx,f.toFinite=He,f.toInteger=q,f.toLength=Jd,f.toLower=Pw,f.toNumber=ue,f.toSafeInteger=P_,f.toString=at,f.toUpper=kw,f.trim=Hw,f.trimEnd=Uw,f.trimStart=zw,f.truncate=Ww,f.unescape=Bw,f.uniqueId=px,f.upperCase=Gw,f.upperFirst=ja,f.each=Dd,f.eachRight=Fd,f.first=Ld,el(f,function(){var t={};return Se(f,function(n,o){ut.call(f.prototype,o)||(t[o]=n)}),t}(),{chain:!1}),f.VERSION=e,re(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){f[t].placeholder=f}),re(["drop","take"],function(t,n){nt.prototype[t]=function(o){o=o===i?1:Ot(q(o),0);var l=this.__filtered__&&!n?new nt(this):this.clone();return l.__filtered__?l.__takeCount__=Pt(o,l.__takeCount__):l.__views__.push({size:Pt(o,Te),type:t+(l.__dir__<0?"Right":"")}),l},nt.prototype[t+"Right"]=function(o){return this.reverse()[t](o).reverse()}}),re(["filter","map","takeWhile"],function(t,n){var o=n+1,l=o==Iu||o==Up;nt.prototype[t]=function(d){var h=this.clone();return h.__iteratees__.push({iteratee:U(d,3),type:o}),h.__filtered__=h.__filtered__||l,h}}),re(["head","last"],function(t,n){var o="take"+(n?"Right":"");nt.prototype[t]=function(){return this[o](1).value()[0]}}),re(["initial","tail"],function(t,n){var o="drop"+(n?"":"Right");nt.prototype[t]=function(){return this.__filtered__?new nt(this):this[o](1)}}),nt.prototype.compact=function(){return this.filter(Vt)},nt.prototype.find=function(t){return this.filter(t).head()},nt.prototype.findLast=function(t){return this.reverse().find(t)},nt.prototype.invokeMap=X(function(t,n){return typeof t=="function"?new nt(this):this.map(function(o){return ci(o,t,n)})}),nt.prototype.reject=function(t){return this.filter(Zs(U(t)))},nt.prototype.slice=function(t,n){t=q(t);var o=this;return o.__filtered__&&(t>0||n<0)?new nt(o):(t<0?o=o.takeRight(-t):t&&(o=o.drop(t)),n!==i&&(n=q(n),o=n<0?o.dropRight(-n):o.take(n-t)),o)},nt.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},nt.prototype.toArray=function(){return this.take(Te)},Se(nt.prototype,function(t,n){var o=/^(?:filter|find|map|reject)|While$/.test(n),l=/^(?:head|last)$/.test(n),d=f[l?"take"+(n=="last"?"Right":""):n],h=l||/^find/.test(n);!d||(f.prototype[n]=function(){var g=this.__wrapped__,y=l?[1]:arguments,x=g instanceof nt,A=y[0],O=x||Z(g),$=function(tt){var rt=d.apply(f,Xe([tt],y));return l&&N?rt[0]:rt};O&&o&&typeof A=="function"&&A.length!=1&&(x=O=!1);var N=this.__chain__,P=!!this.__actions__.length,z=h&&!N,J=x&&!P;if(!h&&O){g=J?g:new nt(this);var W=t.apply(g,y);return W.__actions__.push({func:Ws,args:[$],thisArg:i}),new se(W,N)}return z&&J?t.apply(this,y):(W=this.thru($),z?l?W.value()[0]:W.value():W)})}),re(["pop","push","shift","sort","splice","unshift"],function(t){var n=ps[t],o=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",l=/^(?:pop|shift)$/.test(t);f.prototype[t]=function(){var d=arguments;if(l&&!this.__chain__){var h=this.value();return n.apply(Z(h)?h:[],d)}return this[o](function(g){return n.apply(Z(g)?g:[],d)})}}),Se(nt.prototype,function(t,n){var o=f[n];if(o){var l=o.name+"";ut.call(wr,l)||(wr[l]=[]),wr[l].push({name:n,func:o})}}),wr[Ds(i,pt).name]=[{name:"wrapper",func:i}],nt.prototype.clone=Bg,nt.prototype.reverse=Gg,nt.prototype.value=Vg,f.prototype.at=wy,f.prototype.chain=xy,f.prototype.commit=by,f.prototype.next=Ey,f.prototype.plant=Sy,f.prototype.reverse=Ay,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=Oy,f.prototype.first=f.prototype.head,ri&&(f.prototype[ri]=Ty),f},Qe=bg();typeof define=="function"&&typeof define.amd=="object"&&define.amd?($t._=Qe,define(function(){return Qe})):wn?((wn.exports=Qe)._=Qe,ta._=Qe):$t._=Qe}).call($r)});v();v();v();v();v();var js=globalThis,to=js.ShadowRoot&&(js.ShadyCSS===void 0||js.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pf=Symbol(),hf=new WeakMap,Qs=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==pf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(to&&e===void 0){let s=r!==void 0&&r.length===1;s&&(e=hf.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&hf.set(r,e))}return e}toString(){return this.cssText}},mf=i=>new Qs(typeof i=="string"?i:i+"",void 0,pf);var al=(i,e)=>{if(to)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),a=js.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=r.cssText,i.appendChild(s)}},eo=to?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return mf(r)})(i):i;var{is:Hx,defineProperty:Ux,getOwnPropertyDescriptor:zx,getOwnPropertyNames:Wx,getOwnPropertySymbols:Bx,getPrototypeOf:Gx}=Object,an=globalThis,gf=an.trustedTypes,Vx=gf?gf.emptyScript:"",ll=an.reactiveElementPolyfillSupport,vi=(i,e)=>i,no={toAttribute(i,e){switch(e){case Boolean:i=i?Vx:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(s){r=null}}return r}},ul=(i,e)=>!Hx(i,e),vf={attribute:!0,type:String,converter:no,reflect:!1,hasChanged:ul},yf,_f;(yf=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(_f=an.litPropertyMetadata)!=null||(an.litPropertyMetadata=new WeakMap);var In=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=vf){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let s=Symbol(),a=this.getPropertyDescriptor(e,s,r);a!==void 0&&Ux(this.prototype,e,a)}}static getPropertyDescriptor(e,r,s){var u;let{get:a,set:c}=(u=zx(this.prototype,e))!=null?u:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);c.call(this,p),this.requestUpdate(e,m,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:vf}static _$Ei(){if(this.hasOwnProperty(vi("elementProperties")))return;let e=Gx(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(vi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vi("properties"))){let r=this.properties,s=[...Wx(r),...Bx(r)];for(let a of s)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[s,a]of r)this.elementProperties.set(s,a)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let a=this._$Eu(r,s);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let a of s)r.unshift(eo(a))}else e!==void 0&&r.push(eo(e));return r}static _$Eu(e,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,s;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return al(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostConnected)==null?void 0:a.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$EO(e,r){var c;let s=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,s);if(a!==void 0&&s.reflect===!0){let u=(((c=s.converter)==null?void 0:c.toAttribute)!==void 0?s.converter:no).toAttribute(r,s.type);this._$Em=e,u==null?this.removeAttribute(a):this.setAttribute(a,u),this._$Em=null}}_$AK(e,r){var c;let s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let u=s.getPropertyOptions(a),p=typeof u.converter=="function"?{fromAttribute:u.converter}:((c=u.converter)==null?void 0:c.fromAttribute)!==void 0?u.converter:no;this._$Em=a,this[a]=p.fromAttribute(r,u.type),this._$Em=null}}requestUpdate(e,r,s,a=!1,c){var u;if(e!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(e)),!((u=s.hasChanged)!=null?u:ul)(a?c:this[e],r))return;this.C(e,r,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,s){var a;this._$AL.has(e)||this._$AL.set(e,r),s.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return $n(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[c,u]of this._$Ep)this[c]=u;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[c,u]of a)u.wrapped!==!0||this._$AL.has(c)||this[c]===void 0||this.C(c,this[c],u)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(s=this._$ES)==null||s.forEach(a=>{var c;return(c=a.hostUpdate)==null?void 0:c.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostUpdated)==null?void 0:a.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},wf;In.elementStyles=[],In.shadowRootOptions={mode:"open"},In[vi("elementProperties")]=new Map,In[vi("finalized")]=new Map,ll==null||ll({ReactiveElement:In}),((wf=an.reactiveElementVersions)!=null?wf:an.reactiveElementVersions=[]).push("2.0.0");v();var _i=globalThis,ro=_i.trustedTypes,xf=ro?ro.createPolicy("lit-html",{createHTML:i=>i}):void 0,fl="$lit$",ze=`lit$${(Math.random()+"").slice(9)}$`,hl="?"+ze,Zx=`<${hl}>`,Mn=document,io=()=>Mn.createComment(""),wi=i=>i===null||typeof i!="object"&&typeof i!="function",Cf=Array.isArray,$f=i=>Cf(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",cl=`[ 	
\f\r]`,yi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bf=/-->/g,Ef=/>/g,Ln=RegExp(`>|${cl}(?:([^\\s"'>=/]+)(${cl}*=${cl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tf=/'/g,Sf=/"/g,If=/^(?:script|style|textarea|title)$/i,Lf=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),eT=Lf(1),nT=Lf(2),We=Symbol.for("lit-noChange"),Nt=Symbol.for("lit-nothing"),Af=new WeakMap,Nn=Mn.createTreeWalker(Mn,129);function Nf(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return xf!==void 0?xf.createHTML(e):e}var Mf=(i,e)=>{let r=i.length-1,s=[],a,c=e===2?"<svg>":"",u=yi;for(let p=0;p<r;p++){let m=i[p],w,S,T=-1,D=0;for(;D<m.length&&(u.lastIndex=D,S=u.exec(m),S!==null);)D=u.lastIndex,u===yi?S[1]==="!--"?u=bf:S[1]!==void 0?u=Ef:S[2]!==void 0?(If.test(S[2])&&(a=RegExp("</"+S[2],"g")),u=Ln):S[3]!==void 0&&(u=Ln):u===Ln?S[0]===">"?(u=a!=null?a:yi,T=-1):S[1]===void 0?T=-2:(T=u.lastIndex-S[2].length,w=S[1],u=S[3]===void 0?Ln:S[3]==='"'?Sf:Tf):u===Sf||u===Tf?u=Ln:u===bf||u===Ef?u=yi:(u=Ln,a=void 0);let I=u===Ln&&i[p+1].startsWith("/>")?" ":"";c+=u===yi?m+Zx:T>=0?(s.push(w),m.slice(0,T)+fl+m.slice(T)+ze+I):m+ze+(T===-2?p:I)}return[Nf(i,c+(i[r]||"<?>")+(e===2?"</svg>":"")),s]},Rn=class{constructor({strings:e,_$litType$:r},s){let a;this.parts=[];let c=0,u=0,p=e.length-1,m=this.parts,[w,S]=Mf(e,r);if(this.el=Rn.createElement(w,s),Nn.currentNode=this.el.content,r===2){let T=this.el.content.firstChild;T.replaceWith(...T.childNodes)}for(;(a=Nn.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let T of a.getAttributeNames())if(T.endsWith(fl)){let D=S[u++],I=a.getAttribute(T).split(ze),L=/([.?@])?(.*)/.exec(D);m.push({type:1,index:c,name:L[2],strings:I,ctor:L[1]==="."?oo:L[1]==="?"?ao:L[1]==="@"?lo:Pn}),a.removeAttribute(T)}else T.startsWith(ze)&&(m.push({type:6,index:c}),a.removeAttribute(T));if(If.test(a.tagName)){let T=a.textContent.split(ze),D=T.length-1;if(D>0){a.textContent=ro?ro.emptyScript:"";for(let I=0;I<D;I++)a.append(T[I],io()),Nn.nextNode(),m.push({type:2,index:++c});a.append(T[D],io())}}}else if(a.nodeType===8)if(a.data===hl)m.push({type:2,index:c});else{let T=-1;for(;(T=a.data.indexOf(ze,T+1))!==-1;)m.push({type:7,index:c}),T+=ze.length-1}c++}}static createElement(e,r){let s=Mn.createElement("template");return s.innerHTML=e,s}};function Dn(i,e,r=i,s){var u,p,m;if(e===We)return e;let a=s!==void 0?(u=r._$Co)==null?void 0:u[s]:r._$Cl,c=wi(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),c===void 0?a=void 0:(a=new c(i),a._$AT(i,r,s)),s!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[s]=a:r._$Cl=a),a!==void 0&&(e=Dn(i,a._$AS(i,e.values),a,s)),e}var so=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var w;let{el:{content:r},parts:s}=this._$AD,a=((w=e==null?void 0:e.creationScope)!=null?w:Mn).importNode(r,!0);Nn.currentNode=a;let c=Nn.nextNode(),u=0,p=0,m=s[0];for(;m!==void 0;){if(u===m.index){let S;m.type===2?S=new Fn(c,c.nextSibling,this,e):m.type===1?S=new m.ctor(c,m.name,m.strings,this,e):m.type===6&&(S=new uo(c,this,e)),this._$AV.push(S),m=s[++p]}u!==(m==null?void 0:m.index)&&(c=Nn.nextNode(),u++)}return Nn.currentNode=Mn,a}p(e){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,r),r+=s.strings.length-2):s._$AI(e[r])),r++}},Fn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,s,a){var c;this.type=2,this._$AH=Nt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=a,this._$Cv=(c=a==null?void 0:a.isConnected)!=null?c:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Dn(this,e,r),wi(e)?e===Nt||e==null||e===""?(this._$AH!==Nt&&this._$AR(),this._$AH=Nt):e!==this._$AH&&e!==We&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):$f(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Nt&&wi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Mn.createTextNode(e)),this._$AH=e}g(e){var c;let{values:r,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Rn.createElement(Nf(s.h,s.h[0]),this.options)),s);if(((c=this._$AH)==null?void 0:c._$AD)===a)this._$AH.p(r);else{let u=new so(a,this),p=u.u(this.options);u.p(r),this.$(p),this._$AH=u}}_$AC(e){let r=Af.get(e.strings);return r===void 0&&Af.set(e.strings,r=new Rn(e)),r}T(e){Cf(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,a=0;for(let c of e)a===r.length?r.push(s=new Fn(this.k(io()),this.k(io()),this,this.options)):s=r[a],s._$AI(c),a++;a<r.length&&(this._$AR(s&&s._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},Pn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,a,c){this.type=1,this._$AH=Nt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=c,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Nt}_$AI(e,r=this,s,a){let c=this.strings,u=!1;if(c===void 0)e=Dn(this,e,r,0),u=!wi(e)||e!==this._$AH&&e!==We,u&&(this._$AH=e);else{let p=e,m,w;for(e=c[0],m=0;m<c.length-1;m++)w=Dn(this,p[s+m],r,m),w===We&&(w=this._$AH[m]),u||(u=!wi(w)||w!==this._$AH[m]),w===Nt?e=Nt:e!==Nt&&(e+=(w!=null?w:"")+c[m+1]),this._$AH[m]=w}u&&!a&&this.j(e)}j(e){e===Nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},oo=class extends Pn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Nt?void 0:e}},ao=class extends Pn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Nt)}},lo=class extends Pn{constructor(e,r,s,a,c){super(e,r,s,a,c),this.type=5}_$AI(e,r=this){var u;if((e=(u=Dn(this,e,r,0))!=null?u:Nt)===We)return;let s=this._$AH,a=e===Nt&&s!==Nt||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,c=e!==Nt&&(s===Nt||a);a&&this.element.removeEventListener(this.name,this,s),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,s;typeof this._$AH=="function"?this._$AH.call((s=(r=this.options)==null?void 0:r.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}},uo=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Dn(this,e)}},Rf={S:fl,A:ze,P:hl,C:1,M:Mf,L:so,R:$f,V:Dn,D:Fn,I:Pn,H:ao,N:lo,U:oo,B:uo},dl=_i.litHtmlPolyfillSupport,Of;dl==null||dl(Rn,Fn),((Of=_i.litHtmlVersions)!=null?Of:_i.litHtmlVersions=[]).push("3.0.0");v();v();v();var co=globalThis,fo=co.ShadowRoot&&(co.ShadyCSS===void 0||co.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pl=Symbol(),Df=new WeakMap,xi=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==pl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(fo&&e===void 0){let s=r!==void 0&&r.length===1;s&&(e=Df.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Df.set(r,e))}return e}toString(){return this.cssText}},Ff=i=>new xi(typeof i=="string"?i:i+"",void 0,pl),B=(i,...e)=>{let r=i.length===1?i[0]:e.reduce((s,a,c)=>s+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+i[c+1],i[0]);return new xi(r,i,pl)},ml=(i,e)=>{if(fo)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),a=co.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=r.cssText,i.appendChild(s)}},ho=fo?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return Ff(r)})(i):i;var{is:qx,defineProperty:Yx,getOwnPropertyDescriptor:Jx,getOwnPropertyNames:Kx,getOwnPropertySymbols:Xx,getPrototypeOf:jx}=Object,ln=globalThis,Pf=ln.trustedTypes,Qx=Pf?Pf.emptyScript:"",gl=ln.reactiveElementPolyfillSupport,bi=(i,e)=>i,vl={toAttribute(i,e){switch(e){case Boolean:i=i?Qx:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(s){r=null}}return r}},Wf=(i,e)=>!qx(i,e),kf={attribute:!0,type:String,converter:vl,reflect:!1,hasChanged:Wf},Hf,Uf;(Hf=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Uf=ln.litPropertyMetadata)!=null||(ln.litPropertyMetadata=new WeakMap);var Be=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=kf){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let s=Symbol(),a=this.getPropertyDescriptor(e,s,r);a!==void 0&&Yx(this.prototype,e,a)}}static getPropertyDescriptor(e,r,s){var u;let{get:a,set:c}=(u=Jx(this.prototype,e))!=null?u:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);c.call(this,p),this.requestUpdate(e,m,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:kf}static _$Ei(){if(this.hasOwnProperty(bi("elementProperties")))return;let e=jx(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(bi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(bi("properties"))){let r=this.properties,s=[...Kx(r),...Xx(r)];for(let a of s)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[s,a]of r)this.elementProperties.set(s,a)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let a=this._$Eu(r,s);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let a of s)r.unshift(ho(a))}else e!==void 0&&r.push(ho(e));return r}static _$Eu(e,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,s;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return ml(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostConnected)==null?void 0:a.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$EO(e,r){var c;let s=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,s);if(a!==void 0&&s.reflect===!0){let u=(((c=s.converter)==null?void 0:c.toAttribute)!==void 0?s.converter:vl).toAttribute(r,s.type);this._$Em=e,u==null?this.removeAttribute(a):this.setAttribute(a,u),this._$Em=null}}_$AK(e,r){var c;let s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let u=s.getPropertyOptions(a),p=typeof u.converter=="function"?{fromAttribute:u.converter}:((c=u.converter)==null?void 0:c.fromAttribute)!==void 0?u.converter:vl;this._$Em=a,this[a]=p.fromAttribute(r,u.type),this._$Em=null}}requestUpdate(e,r,s,a=!1,c){var u;if(e!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(e)),!((u=s.hasChanged)!=null?u:Wf)(a?c:this[e],r))return;this.C(e,r,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,s){var a;this._$AL.has(e)||this._$AL.set(e,r),s.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return $n(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[c,u]of this._$Ep)this[c]=u;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[c,u]of a)u.wrapped!==!0||this._$AL.has(c)||this[c]===void 0||this.C(c,this[c],u)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(s=this._$ES)==null||s.forEach(a=>{var c;return(c=a.hostUpdate)==null?void 0:c.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostUpdated)==null?void 0:a.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},zf;Be.elementStyles=[],Be.shadowRootOptions={mode:"open"},Be[bi("elementProperties")]=new Map,Be[bi("finalized")]=new Map,gl==null||gl({ReactiveElement:Be}),((zf=ln.reactiveElementVersions)!=null?zf:ln.reactiveElementVersions=[]).push("2.0.0");v();var Ti=globalThis,po=Ti.trustedTypes,Bf=po?po.createPolicy("lit-html",{createHTML:i=>i}):void 0,Kf="$lit$",un=`lit$${(Math.random()+"").slice(9)}$`,Xf="?"+un,tb=`<${Xf}>`,Un=document,Si=()=>Un.createComment(""),Ai=i=>i===null||typeof i!="object"&&typeof i!="function",jf=Array.isArray,eb=i=>jf(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",yl=`[ 	
\f\r]`,Ei=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gf=/-->/g,Vf=/>/g,kn=RegExp(`>|${yl}(?:([^\\s"'>=/]+)(${yl}*=${yl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zf=/'/g,qf=/"/g,Qf=/^(?:script|style|textarea|title)$/i,th=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),M=th(1),lT=th(2),zn=Symbol.for("lit-noChange"),Mt=Symbol.for("lit-nothing"),Yf=new WeakMap,Hn=Un.createTreeWalker(Un,129);function eh(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bf!==void 0?Bf.createHTML(e):e}var nb=(i,e)=>{let r=i.length-1,s=[],a,c=e===2?"<svg>":"",u=Ei;for(let p=0;p<r;p++){let m=i[p],w,S,T=-1,D=0;for(;D<m.length&&(u.lastIndex=D,S=u.exec(m),S!==null);)D=u.lastIndex,u===Ei?S[1]==="!--"?u=Gf:S[1]!==void 0?u=Vf:S[2]!==void 0?(Qf.test(S[2])&&(a=RegExp("</"+S[2],"g")),u=kn):S[3]!==void 0&&(u=kn):u===kn?S[0]===">"?(u=a!=null?a:Ei,T=-1):S[1]===void 0?T=-2:(T=u.lastIndex-S[2].length,w=S[1],u=S[3]===void 0?kn:S[3]==='"'?qf:Zf):u===qf||u===Zf?u=kn:u===Gf||u===Vf?u=Ei:(u=kn,a=void 0);let I=u===kn&&i[p+1].startsWith("/>")?" ":"";c+=u===Ei?m+tb:T>=0?(s.push(w),m.slice(0,T)+Kf+m.slice(T)+un+I):m+un+(T===-2?p:I)}return[eh(i,c+(i[r]||"<?>")+(e===2?"</svg>":"")),s]},Wn=class{constructor({strings:e,_$litType$:r},s){let a;this.parts=[];let c=0,u=0,p=e.length-1,m=this.parts,[w,S]=nb(e,r);if(this.el=Wn.createElement(w,s),Hn.currentNode=this.el.content,r===2){let T=this.el.content.firstChild;T.replaceWith(...T.childNodes)}for(;(a=Hn.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let T of a.getAttributeNames())if(T.endsWith(Kf)){let D=S[u++],I=a.getAttribute(T).split(un),L=/([.?@])?(.*)/.exec(D);m.push({type:1,index:c,name:L[2],strings:I,ctor:L[1]==="."?xl:L[1]==="?"?bl:L[1]==="@"?El:Cr}),a.removeAttribute(T)}else T.startsWith(un)&&(m.push({type:6,index:c}),a.removeAttribute(T));if(Qf.test(a.tagName)){let T=a.textContent.split(un),D=T.length-1;if(D>0){a.textContent=po?po.emptyScript:"";for(let I=0;I<D;I++)a.append(T[I],Si()),Hn.nextNode(),m.push({type:2,index:++c});a.append(T[D],Si())}}}else if(a.nodeType===8)if(a.data===Xf)m.push({type:2,index:c});else{let T=-1;for(;(T=a.data.indexOf(un,T+1))!==-1;)m.push({type:7,index:c}),T+=un.length-1}c++}}static createElement(e,r){let s=Un.createElement("template");return s.innerHTML=e,s}};function Or(i,e,r=i,s){var u,p,m;if(e===zn)return e;let a=s!==void 0?(u=r._$Co)==null?void 0:u[s]:r._$Cl,c=Ai(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),c===void 0?a=void 0:(a=new c(i),a._$AT(i,r,s)),s!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[s]=a:r._$Cl=a),a!==void 0&&(e=Or(i,a._$AS(i,e.values),a,s)),e}var wl=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var w;let{el:{content:r},parts:s}=this._$AD,a=((w=e==null?void 0:e.creationScope)!=null?w:Un).importNode(r,!0);Hn.currentNode=a;let c=Hn.nextNode(),u=0,p=0,m=s[0];for(;m!==void 0;){if(u===m.index){let S;m.type===2?S=new Bn(c,c.nextSibling,this,e):m.type===1?S=new m.ctor(c,m.name,m.strings,this,e):m.type===6&&(S=new Tl(c,this,e)),this._$AV.push(S),m=s[++p]}u!==(m==null?void 0:m.index)&&(c=Hn.nextNode(),u++)}return Hn.currentNode=Un,a}p(e){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,r),r+=s.strings.length-2):s._$AI(e[r])),r++}},Bn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,s,a){var c;this.type=2,this._$AH=Mt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=a,this._$Cv=(c=a==null?void 0:a.isConnected)!=null?c:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Or(this,e,r),Ai(e)?e===Mt||e==null||e===""?(this._$AH!==Mt&&this._$AR(),this._$AH=Mt):e!==this._$AH&&e!==zn&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):eb(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Mt&&Ai(this._$AH)?this._$AA.nextSibling.data=e:this.$(Un.createTextNode(e)),this._$AH=e}g(e){var c;let{values:r,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Wn.createElement(eh(s.h,s.h[0]),this.options)),s);if(((c=this._$AH)==null?void 0:c._$AD)===a)this._$AH.p(r);else{let u=new wl(a,this),p=u.u(this.options);u.p(r),this.$(p),this._$AH=u}}_$AC(e){let r=Yf.get(e.strings);return r===void 0&&Yf.set(e.strings,r=new Wn(e)),r}T(e){jf(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,a=0;for(let c of e)a===r.length?r.push(s=new Bn(this.k(Si()),this.k(Si()),this,this.options)):s=r[a],s._$AI(c),a++;a<r.length&&(this._$AR(s&&s._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},Cr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,a,c){this.type=1,this._$AH=Mt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=c,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Mt}_$AI(e,r=this,s,a){let c=this.strings,u=!1;if(c===void 0)e=Or(this,e,r,0),u=!Ai(e)||e!==this._$AH&&e!==zn,u&&(this._$AH=e);else{let p=e,m,w;for(e=c[0],m=0;m<c.length-1;m++)w=Or(this,p[s+m],r,m),w===zn&&(w=this._$AH[m]),u||(u=!Ai(w)||w!==this._$AH[m]),w===Mt?e=Mt:e!==Mt&&(e+=(w!=null?w:"")+c[m+1]),this._$AH[m]=w}u&&!a&&this.j(e)}j(e){e===Mt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},xl=class extends Cr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Mt?void 0:e}},bl=class extends Cr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Mt)}},El=class extends Cr{constructor(e,r,s,a,c){super(e,r,s,a,c),this.type=5}_$AI(e,r=this){var u;if((e=(u=Or(this,e,r,0))!=null?u:Mt)===zn)return;let s=this._$AH,a=e===Mt&&s!==Mt||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,c=e!==Mt&&(s===Mt||a);a&&this.element.removeEventListener(this.name,this,s),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,s;typeof this._$AH=="function"?this._$AH.call((s=(r=this.options)==null?void 0:r.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}},Tl=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Or(this,e)}};var _l=Ti.litHtmlPolyfillSupport,Jf;_l==null||_l(Wn,Bn),((Jf=Ti.litHtmlVersions)!=null?Jf:Ti.litHtmlVersions=[]).push("3.0.0");var nh=(i,e,r)=>{var c,u;let s=(c=r==null?void 0:r.renderBefore)!=null?c:e,a=s._$litPart$;if(a===void 0){let p=(u=r==null?void 0:r.renderBefore)!=null?u:null;s._$litPart$=a=new Bn(e.insertBefore(Si(),p),p,void 0,r!=null?r:{})}return a._$AI(i),a};var G=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r,s;let e=super.createRenderRoot();return(s=(r=this.renderOptions).renderBefore)!=null||(r.renderBefore=e.firstChild),e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return zn}},rh;G._$litElement$=!0,G["finalized"]=!0,(rh=globalThis.litElementHydrateSupport)==null||rh.call(globalThis,{LitElement:G});var Sl=globalThis.litElementPolyfillSupport;Sl==null||Sl({LitElement:G});var ih;((ih=globalThis.litElementVersions)!=null?ih:globalThis.litElementVersions=[]).push("4.0.0");v();v();v();var Q=i=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};v();v();v();v();v();v();v();v();v();var Gn=class extends G{render(){return M` <div>Hello from SuperViz, ${this.name}</div> `}};Gn.properties={name:{type:String}},Gn.styles=B`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `,Gn=j([Q("superviz-hello-world")],Gn);v();v();v();var oh=kx(sh()),Al=class{setConfig(e){this.configuration=e}get(e,r){return this.configuration?oh.default.get(this.configuration,e,r):r}},Ol=new Al;v();v();var Cl=B`
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
`;v();var $l=B`
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
`;v();var Il=B`
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
`;var et=i=>{var r;class e extends i{connectedCallback(){setTimeout(()=>{var p,m;let a=document.getElementById("superviz-style"),c=this.createCustomColors(),u=document.createElement("style");u.innerHTML=(a==null?void 0:a.innerHTML)||"",(p=this.shadowRoot)==null||p.appendChild(u),c&&((m=this.shadowRoot)==null||m.appendChild(c))}),super.connectedCallback()}createCustomColors(){if(!Ol.get("colors"))return;let a=document.createElement("style"),c=Object.entries(Ol.get("colors")).map(([u,p])=>`--${u}: ${p} !important;`).join(" ");return a.innerHTML=`
      * {
        ${c}
      }
    `,a}emitEvent(a,c,u={composed:!0,bubbles:!0}){let p=new CustomEvent(a,k({detail:c},u));this.dispatchEvent(p)}}return e.styles=[Cl,$l,Il,Ll,(r=i.styles)!=null?r:[]],e};var ah=et(G),rb=[ah.styles],Vn=class extends ah{constructor(){super();this.name="",this.size="md"}render(){return M` <i class="sv-icon sv-icon-${this.name}_${this.size}"></i> `}};Vn.properties={name:{type:String},size:{type:String}},Vn.styles=[rb,B`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `],Vn=j([Q("superviz-icon")],Vn);v();v();v();v();var go={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vo=i=>(...e)=>({_$litDirective$:i,values:e}),Ir=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,s){this._$Ct=e,this._$AM=r,this._$Ci=s}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var ct=vo(class extends Ir{constructor(i){var e;if(super(i),i.type!==go.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var s,a;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(c=>c!=="")));for(let c in e)e[c]&&!((s=this.st)!=null&&s.has(c))&&this.it.add(c);return this.render(e)}let r=i.element.classList;for(let c of this.it)c in e||(r.remove(c),this.it.delete(c));for(let c in e){let u=!!e[c];u===this.it.has(c)||((a=this.st)==null?void 0:a.has(c))||(u?(r.add(c),this.it.add(c)):(r.remove(c),this.it.delete(c)))}return We}});v();var lh=B`
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
`;v();var uh=et(G),ib=[uh.styles,lh],Zn=class extends uh{constructor(){super(...arguments);this.menu=void 0;this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let s=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),c=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=s.includes(a),w=s.includes(c),S=s.includes(p);m||w||S||(this.open=!1)};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.callbackSelected=r=>{this.open=!1;let s=this.returnTo?r[this.returnTo]:r;this.emitEvent("selected",s,{bubbles:!1,composed:!0})};this.adjustPosition=()=>{this.adjustPositionVertical(),this.adjustPositionHorizontal()}}updated(r){if(!!r.has("open")){if(this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown),this.close()}}get dropdownBounds(){this.dropdownContent||(this.dropdownContent=this.shadowRoot.querySelector(".dropdown-content"));let r=this.dropdownContent.getBoundingClientRect(),{y:s,height:a,x:c,width:u}=this.menu.getBoundingClientRect();return{top:s,bottom:s+a+4,left:c,right:c+u,height:a+4,width:u,contentX:r.x,contentY:r.y,contentWidth:r.width}}positionVerticalAction(){let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,c=s>a,u=r<0;return c&&this.position.includes("bottom")||u&&this.position.includes("top")?2:!c&&!u&&this.shouldUseOriginalVertical()?1:0}positionHorizontalAction(){if(this.dropdownCovered())return 0;let{right:r,left:s,contentX:a,contentWidth:c,width:u}=this.dropdownBounds,{innerWidth:p}=window,m=r>p,S=s<0||m;if(S&&!this.position.includes("center"))return 2;if(this.position.includes("center")){let T=a+c/2,D=T-u/2<0,I=T+u/2>p;if(D||I)return 2}return!S&&this.shouldUseOriginalHorizontal()?1:this.shouldCenter()&&this.position!==this.originalPosition&&!this.position.includes("center")?3:0}dropdownCovered(){let{left:r,right:s}=this.dropdownBounds,{innerWidth:a}=window;if(this.position.includes("center"))return!1;let c=s>a&&this.position.includes("left"),u=r<0&&this.position.includes("right");return c||u}shouldCenter(){let{contentX:r,contentWidth:s,width:a}=this.dropdownBounds,c=r+s/2,u=c-a/2<0,p=c+a/2>window.innerWidth;return!(u||p)}shouldUseOriginalVertical(){let{height:r,contentY:s}=this.dropdownBounds,{innerHeight:a}=window,c=s+r;return this.originalPosition.includes("bottom")?r+c<a:s-r>0}shouldUseOriginalHorizontal(){let{width:r,contentX:s}=this.dropdownBounds,{innerWidth:a}=window,c=s+r;return this.position===this.originalPosition?!1:this.originalPosition.includes("center")?c<a&&s-r>0:this.originalPosition.includes("left")?s-r>0:c<a}adjustPositionVertical(){let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,c=this.positionVerticalAction();if(c===0)return;if(c===1){let w=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,w);return}let u=a-s>r?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,u);this.position=m}adjustPositionHorizontal(){let{left:r,right:s,width:a}=this.dropdownBounds,c=r<0,u=s>window.innerWidth,p=this.positionHorizontalAction();if(p===0)return;if(p===1){let L=this.originalPosition.split("-")[1];this.position=this.position.replace(/left|center|right/,L);return}let m=c?s:r,w=(c?a:-a)/2-20,S=m+w;if(c=S<0,u=S+a>window.innerWidth,!(c||u)&&p===3||p===3){let L=this.position.replace(/left|right/,"center");this.position=L;return}if(this.position.includes("center")){let L=c?"right":"left",pt=this.position.replace("center",L);this.position=pt;return}let I=this.position.replace(/left|right/,"center");this.position=I}setMenu(){var r;if(!this.menu){this.menu=this.shadowRoot.querySelector(".menu");let s={rootMargin:"0px",threshold:1},a=new IntersectionObserver(this.adjustPosition,s),c=new ResizeObserver(this.adjustPosition),u=this.menu;a.observe(u),c.observe((r=this.scrollableParent)!=null?r:document.body)}}get scrollableParent(){let r;this.host||(this.host=this.getRootNode().host);let s=this.host;for(;!r;){let a=s==null?void 0:s.parentElement;if(this.isScrollable(a)){r=a;break}if(s=a,!s)break}return r}isScrollable(r){if(!r)return!1;let s=r.scrollHeight>r.clientHeight,a=window.getComputedStyle(r).overflowY,c=window.getComputedStyle(r).overflowX,u=a.indexOf("hidden")!==-1,p=c.indexOf("hidden")!==-1;return s&&!u&&!p}get renderHeader(){return this.name?M` <div class="header">
      <span class="text">${this.name}</span>
      <span class="sv-hr"></span>
    </div>`:M``}toggle(){this.disabled||(this.originalPosition||(this.originalPosition=this.position),this.setMenu(),this.open=!this.open,this.open&&setTimeout(()=>this.adjustPosition()))}render(){var c;let r={menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu--top-left":this.position==="top-left","menu--top-center":this.position==="top-center","menu--top-right":this.position==="top-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right","who-is-online-dropdown":this.name},s=(c=this.icons)==null?void 0:c.map(u=>M`<superviz-icon name="${u}" size="sm"></superviz-icon>`),a=this.options.map((u,p)=>{let m={text:!0,"text-bold":!0,active:(u==null?void 0:u[this.returnTo])&&this.active===(u==null?void 0:u[this.returnTo])};return M`<li @click=${()=>this.callbackSelected(u)} class=${ct(m)}>
        ${s==null?void 0:s.at(p)} <span class="option-label">${u[this.label]}</span>
      </li>`});return M`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${ct(r)}>
          ${this.renderHeader}
          <ul class="items">
            ${a}
          </ul>
        </div>
      </div>
    `}};Zn.styles=ib,Zn.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},position:{type:String},options:{type:Array},label:{type:String},returnTo:{type:String},active:{type:[String,Object]},icons:{type:Array},name:{type:String}},Zn=j([Q("superviz-dropdown")],Zn);v();v();v();var yo=B`  
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
`;var ch=et(G),sb=[ch.styles,yo],Lr=class extends ch{constructor(){super(...arguments);this.getContainer=()=>window.document.querySelector("superviz-modal-container");this.createContainer=r=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(r)};this.createModal=({detail:r})=>{this.createContainer(r),window.document.body.appendChild(this.modal)};this.destroyModal=()=>{var r;this.modal=void 0,(r=this.getContainer())==null||r.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};Lr.styles=sb,Lr=j([Q("superviz-modal")],Lr);v();var dh=et(G),ob=[dh.styles,yo],Nr=class extends dh{constructor(){super(...arguments);this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))};this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(r){this.options=r}render(){let r=()=>M`
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
    `}};Nr.styles=ob,Nr=j([Q("superviz-modal-container")],Nr);v();v();v();v();v();var Nl=B`
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
`;v();var Ml=B`
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
`;v();var Rl=B`
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
`;v();var Pl=B`
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
`;v();var kl=B`
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
`;v();var zl=B`
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
`;v();var Wl=B`
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
`;v();var Bl=B`
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
`;v();var Gl;function Vl(i){let e=i.querySelector("#superviz-comments");if(e&&!Gl){let r={childList:!0,attributes:!0,characterData:!0,subtree:!0};Gl=new MutationObserver(s=>{s.forEach(a=>{!a.removedNodes.length||a.removedNodes.forEach(c=>{c.id==="poweredby-footer"&&ab(i)})})}),Gl.observe(e,r)}}function ab(i){let e=document.createElement("div");e.id="poweredby-footer",e.className="footer";let r=document.createElement("div");r.className="powered-by powered-by--horizontal";let s=document.createElement("a");s.href="https://superviz.com/",s.target="_blank",s.className="link";let a=document.createElement("div");a.textContent="Powered by";let c=document.createElement("img");c.width=48,c.height=8.86,c.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",r.appendChild(s),s.appendChild(a),a.appendChild(c),e.appendChild(r);let u=i.getElementById("superviz-comments");u&&u.appendChild(e),Vl(i)}var fh=et(G),lb=[fh.styles,Nl,Bl],qn=class extends fh{constructor(){super();this.annotations=[],this.annotationFilter="all",this.waterMarkState=!1}updateAnnotations(r){this.annotations=r}toggle(){this.emitEvent("toggle",{})}waterMarkStatus(r){this.waterMarkState=r}setFilter({detail:r}){let{filter:s}=r;this.annotationFilter=s}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".superviz-comments");!s||(this.waterMarkState&&Vl(this.shadowRoot),s.setAttribute("style",this.side))})}render(){let r=[this.open?"container":"container-close","superviz-comments"].join(" "),s=M` <div id="poweredby-footer" class="footer">
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
    `}};qn.styles=lb,qn.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String}},qn=j([Q("superviz-comments")],qn);v();v();var ub=et(G),cb=[ub.styles,Ml],Yn=class extends et(G){constructor(){super();this.side="left"}close(){this.dispatchEvent(new CustomEvent("close"))}render(){return this.side==="left"?M`
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
    `}};Yn.styles=cb,Yn.properties={side:{type:String}},Yn=j([Q("superviz-comments-topbar")],Yn);v();var hh=et(G),db=[hh.styles,Rl],Jn=class extends hh{constructor(){super(...arguments);this.prepareToCreateAnnotation=s=>$n(this,[s],function*({detail:r}){this.annotation=r,yield this.updateComplete,this.emitEvent("comment-input-focus",r)});this.cancelTemporaryAnnotation=()=>{this.annotation=null};this.cancelTemporaryAnnotationEsc=r=>{(r==null?void 0:r.key)==="Escape"&&(this.annotation=null)}}createComment({detail:r}){this.emitEvent("create-annotation",r),this.annotation=null}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.addEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.addEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)})}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.removeEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.removeEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)})}render(){let r={"annotations--comments-input":!0,hidden:!this.annotation};return M`
      <div class="annotations">
        <span class="text text-big text-bold annotations--add-comment-btn">
          Click anywhere to add a comment
        </span>
        <div class=${ct(r)}>
          <superviz-comments-comment-input
            @create-annotation=${this.createComment}
            eventType="create-annotation"
          >
          </superviz-comments-comment-input>
        </div>
      </div>
    `}};Jn.styles=db,Jn.properties={annotation:{type:Object}},Jn=j([Q("superviz-comments-annotations")],Jn);v();v();v();v();var{D:fb}=Rf;var ph=()=>document.createComment(""),Mr=(i,e,r)=>{var c;let s=i._$AA.parentNode,a=e===void 0?i._$AB:e._$AA;if(r===void 0){let u=s.insertBefore(ph(),a),p=s.insertBefore(ph(),a);r=new fb(u,p,i,i.options)}else{let u=r._$AB.nextSibling,p=r._$AM,m=p!==i;if(m){let w;(c=r._$AQ)==null||c.call(r,i),r._$AM=i,r._$AP!==void 0&&(w=i._$AU)!==p._$AU&&r._$AP(w)}if(u!==a||m){let w=r._$AA;for(;w!==u;){let S=w.nextSibling;s.insertBefore(w,a),w=S}}}return r},cn=(i,e,r=i)=>(i._$AI(e,r),i),hb={},mh=(i,e=hb)=>i._$AH=e,gh=i=>i._$AH,wo=i=>{var s;(s=i._$AP)==null||s.call(i,!1,!0);let e=i._$AA,r=i._$AB.nextSibling;for(;e!==r;){let a=e.nextSibling;e.remove(),e=a}};var vh=(i,e,r)=>{let s=new Map;for(let a=e;a<=r;a++)s.set(i[a],a);return s},yh=vo(class extends Ir{constructor(i){if(super(i),i.type!==go.CHILD)throw Error("repeat() can only be used in text expressions")}ht(i,e,r){let s;r===void 0?r=e:e!==void 0&&(s=e);let a=[],c=[],u=0;for(let p of i)a[u]=s?s(p,u):u,c[u]=r(p,u),u++;return{values:c,keys:a}}render(i,e,r){return this.ht(i,e,r).values}update(i,[e,r,s]){var pt;let a=gh(i),{values:c,keys:u}=this.ht(e,r,s);if(!Array.isArray(a))return this.dt=u,c;let p=(pt=this.dt)!=null?pt:this.dt=[],m=[],w,S,T=0,D=a.length-1,I=0,L=c.length-1;for(;T<=D&&I<=L;)if(a[T]===null)T++;else if(a[D]===null)D--;else if(p[T]===u[I])m[I]=cn(a[T],c[I]),T++,I++;else if(p[D]===u[L])m[L]=cn(a[D],c[L]),D--,L--;else if(p[T]===u[L])m[L]=cn(a[T],c[L]),Mr(i,m[L+1],a[T]),T++,L--;else if(p[D]===u[I])m[I]=cn(a[D],c[I]),Mr(i,a[T],a[D]),D--,I++;else if(w===void 0&&(w=vh(u,I,L),S=vh(p,T,D)),w.has(p[T]))if(w.has(p[D])){let dt=S.get(u[I]),Et=dt!==void 0?a[dt]:null;if(Et===null){let qt=Mr(i,a[T]);cn(qt,c[I]),m[I]=qt}else m[I]=cn(Et,c[I]),Mr(i,a[T],Et),a[dt]=null;I++}else wo(a[D]),D--;else wo(a[T]),T++;for(;I<=L;){let dt=Mr(i,m[L+1]);cn(dt,c[I]),m[I++]=dt}for(;T<=D;){let dt=a[T++];dt!==null&&wo(dt)}return this.dt=u,mh(i,m),We}});var _h=et(G),pb=[_h.styles,Fl],Kn=class extends _h{constructor(){super();this.unselectAnnotation=()=>{this.selectedAnnotation=null};this.unselectAnnotationEsc=r=>{r&&(r==null?void 0:r.key)!=="Escape"||(this.selectedAnnotation=null)};this.selectAnnotation=({detail:r})=>{let{uuid:s}=r;if(this.selectedAnnotation===s){this.selectedAnnotation=null;return}this.selectedAnnotation=s};this.checkLastAnnotation=r=>{var c,u;let s=this.annotations.filter(p=>p.resolved),a=this.annotations.filter(p=>!p.resolved);return this.annotationFilter==="all"?r===((c=s[s.length-1])==null?void 0:c.uuid):r===((u=a[a.length-1])==null?void 0:u.uuid)};this.annotations=[]}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(`[uuid='${this.selectedAnnotation}']`);if(!s)return;let a=this.lastCommentId===this.selectedAnnotation,c=a?0:-150,u=s.getClientRects()[0];!u||(this.scrollBy(0,u.y+c),a&&setTimeout(()=>{this.scrollBy(0,u.y+c)},200))})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("select-annotation",this.selectAnnotation),window.document.body.addEventListener("keyup",this.unselectAnnotationEsc),window.document.body.addEventListener("unselect-annotation",this.unselectAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("select-annotation",this.selectAnnotation),window.document.body.removeEventListener("keyup",this.unselectAnnotationEsc),window.document.body.removeEventListener("unselect-annotation",this.unselectAnnotation)}render(){return M` ${yh(this.annotations.filter(r=>r.comments.length),r=>r.uuid,r=>M`
        <superviz-comments-annotation-item
          annotation=${JSON.stringify(r)}
          selected="${this.selectedAnnotation}"
          annotationFilter=${this.annotationFilter}
          uuid=${r.uuid}
          isLastComment=${this.checkLastAnnotation(r.uuid)}
        >
        </superviz-comments-annotation-item>
      `)}`}};Kn.styles=pb,Kn.properties={annotations:{type:Object},selectedAnnotation:{type:String},annotationFilter:{type:String}},Kn=j([Q("superviz-comments-content")],Kn);v();v();v();v();v();var Ge=class extends Error{},xo=class extends Ge{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},bo=class extends Ge{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},Eo=class extends Ge{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},Ve=class extends Ge{},Rr=class extends Ge{constructor(e){super(`Invalid unit ${e}`)}},Rt=class extends Ge{},we=class extends Ge{constructor(){super("Zone is an abstract class")}};v();v();v();var R="numeric",xe="short",ee="long",dn={year:R,month:R,day:R},Ci={year:R,month:xe,day:R},Zl={year:R,month:xe,day:R,weekday:xe},$i={year:R,month:ee,day:R},Ii={year:R,month:ee,day:R,weekday:ee},Li={hour:R,minute:R},Ni={hour:R,minute:R,second:R},Mi={hour:R,minute:R,second:R,timeZoneName:xe},Ri={hour:R,minute:R,second:R,timeZoneName:ee},Di={hour:R,minute:R,hourCycle:"h23"},Fi={hour:R,minute:R,second:R,hourCycle:"h23"},Pi={hour:R,minute:R,second:R,hourCycle:"h23",timeZoneName:xe},ki={hour:R,minute:R,second:R,hourCycle:"h23",timeZoneName:ee},Hi={year:R,month:R,day:R,hour:R,minute:R},Ui={year:R,month:R,day:R,hour:R,minute:R,second:R},zi={year:R,month:xe,day:R,hour:R,minute:R},Wi={year:R,month:xe,day:R,hour:R,minute:R,second:R},ql={year:R,month:xe,day:R,weekday:xe,hour:R,minute:R},Bi={year:R,month:ee,day:R,hour:R,minute:R,timeZoneName:xe},Gi={year:R,month:ee,day:R,hour:R,minute:R,second:R,timeZoneName:xe},Vi={year:R,month:ee,day:R,weekday:ee,hour:R,minute:R,timeZoneName:ee},Zi={year:R,month:ee,day:R,weekday:ee,hour:R,minute:R,second:R,timeZoneName:ee};v();v();v();v();var Zt=class{get type(){throw new we}get name(){throw new we}get ianaName(){return this.name}get isUniversal(){throw new we}offsetName(e,r){throw new we}formatOffset(e,r){throw new we}offset(e){throw new we}equals(e){throw new we}get isValid(){throw new we}};var Yl=null,Ce=class extends Zt{static get instance(){return Yl===null&&(Yl=new Ce),Yl}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:s}){return So(e,r,s)}formatOffset(e,r){return fn(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}};v();var Oo={};function mb(i){return Oo[i]||(Oo[i]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:i,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Oo[i]}var gb={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function vb(i,e){let r=i.format(e).replace(/\u200E/g,""),s=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,a,c,u,p,m,w,S]=s;return[u,a,c,p,m,w,S]}function yb(i,e){let r=i.formatToParts(e),s=[];for(let a=0;a<r.length;a++){let{type:c,value:u}=r[a],p=gb[c];c==="era"?s[p]=u:Y(p)||(s[p]=parseInt(u,10))}return s}var Ao={},Ct=class extends Zt{static create(e){return Ao[e]||(Ao[e]=new Ct(e)),Ao[e]}static resetCache(){Ao={},Oo={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(r){return!1}}constructor(e){super(),this.zoneName=e,this.valid=Ct.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:s}){return So(e,r,s,this.name)}formatOffset(e,r){return fn(this.offset(e),r)}offset(e){let r=new Date(e);if(isNaN(r))return NaN;let s=mb(this.name),[a,c,u,p,m,w,S]=s.formatToParts?yb(s,r):vb(s,r);p==="BC"&&(a=-Math.abs(a)+1);let D=Dr({year:a,month:c,day:u,hour:m===24?0:m,minute:w,second:S,millisecond:0}),I=+r,L=I%1e3;return I-=L>=0?L:1e3+L,(D-I)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}};v();var wh={};function _b(i,e={}){let r=JSON.stringify([i,e]),s=wh[r];return s||(s=new Intl.ListFormat(i,e),wh[r]=s),s}var Jl={};function Kl(i,e={}){let r=JSON.stringify([i,e]),s=Jl[r];return s||(s=new Intl.DateTimeFormat(i,e),Jl[r]=s),s}var Xl={};function wb(i,e={}){let r=JSON.stringify([i,e]),s=Xl[r];return s||(s=new Intl.NumberFormat(i,e),Xl[r]=s),s}var jl={};function xb(i,e={}){let u=e,{base:r}=u,s=ol(u,["base"]),a=JSON.stringify([i,s]),c=jl[a];return c||(c=new Intl.RelativeTimeFormat(i,e),jl[a]=c),c}var qi=null;function bb(){return qi||(qi=new Intl.DateTimeFormat().resolvedOptions().locale,qi)}function Eb(i){let e=i.indexOf("-x-");e!==-1&&(i=i.substring(0,e));let r=i.indexOf("-u-");if(r===-1)return[i];{let s,a;try{s=Kl(i).resolvedOptions(),a=i}catch(p){let m=i.substring(0,r);s=Kl(m).resolvedOptions(),a=m}let{numberingSystem:c,calendar:u}=s;return[a,c,u]}}function Tb(i,e,r){return(r||e)&&(i.includes("-u-")||(i+="-u"),r&&(i+=`-ca-${r}`),e&&(i+=`-nu-${e}`)),i}function Sb(i){let e=[];for(let r=1;r<=12;r++){let s=H.utc(2009,r,1);e.push(i(s))}return e}function Ab(i){let e=[];for(let r=1;r<=7;r++){let s=H.utc(2016,11,13+r);e.push(i(s))}return e}function Co(i,e,r,s){let a=i.listingMode();return a==="error"?null:a==="en"?r(e):s(e)}function Ob(i){return i.numberingSystem&&i.numberingSystem!=="latn"?!1:i.numberingSystem==="latn"||!i.locale||i.locale.startsWith("en")||new Intl.DateTimeFormat(i.intl).resolvedOptions().numberingSystem==="latn"}var Ql=class{constructor(e,r,s){this.padTo=s.padTo||0,this.floor=s.floor||!1;let p=s,{padTo:a,floor:c}=p,u=ol(p,["padTo","floor"]);if(!r||Object.keys(u).length>0){let m=k({useGrouping:!1},s);s.padTo>0&&(m.minimumIntegerDigits=s.padTo),this.inf=wb(e,m)}}format(e){if(this.inf){let r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{let r=this.floor?Math.floor(e):Fr(e,3);return _t(r,this.padTo)}}},tu=class{constructor(e,r,s){this.opts=s,this.originalZone=void 0;let a;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){let u=-1*(e.offset/60),p=u>=0?`Etc/GMT+${u}`:`Etc/GMT${u}`;e.offset!==0&&Ct.create(p).valid?(a=p,this.dt=e):(a="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,a=e.zone.name):(a="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);let c=k({},this.opts);c.timeZone=c.timeZone||a,this.dtf=Kl(r,c)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){let s=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return Lt(k({},r),{value:s})}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},eu=class{constructor(e,r,s){this.opts=k({style:"long"},s),!r&&$o()&&(this.rtf=xb(e,s))}format(e,r){return this.rtf?this.rtf.format(e,r):xh(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}},it=class{static fromOpts(e){return it.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,r,s,a=!1){let c=e||lt.defaultLocale,u=c||(a?"en-US":bb()),p=r||lt.defaultNumberingSystem,m=s||lt.defaultOutputCalendar;return new it(u,p,m,c)}static resetCache(){qi=null,Jl={},Xl={},jl={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:s}={}){return it.create(e,r,s)}constructor(e,r,s,a){let[c,u,p]=Eb(e);this.locale=c,this.numberingSystem=r||u||null,this.outputCalendar=s||p||null,this.intl=Tb(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Ob(this)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:it.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone(Lt(k({},e),{defaultToEN:!0}))}redefaultToSystem(e={}){return this.clone(Lt(k({},e),{defaultToEN:!1}))}months(e,r=!1){return Co(this,e,nu,()=>{let s=r?{month:e,day:"numeric"}:{month:e},a=r?"format":"standalone";return this.monthsCache[a][e]||(this.monthsCache[a][e]=Sb(c=>this.extract(c,s,"month"))),this.monthsCache[a][e]})}weekdays(e,r=!1){return Co(this,e,ru,()=>{let s=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},a=r?"format":"standalone";return this.weekdaysCache[a][e]||(this.weekdaysCache[a][e]=Ab(c=>this.extract(c,s,"weekday"))),this.weekdaysCache[a][e]})}meridiems(){return Co(this,void 0,()=>iu,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[H.utc(2016,11,13,9),H.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Co(this,e,su,()=>{let r={era:e};return this.eraCache[e]||(this.eraCache[e]=[H.utc(-40,1,1),H.utc(2017,1,1)].map(s=>this.extract(s,r,"era"))),this.eraCache[e]})}extract(e,r,s){let a=this.dtFormatter(e,r),c=a.formatToParts(),u=c.find(p=>p.type.toLowerCase()===s);return u?u.value:null}numberFormatter(e={}){return new Ql(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new tu(e,this.intl,r)}relFormatter(e={}){return new eu(this.intl,this.isEnglish(),e)}listFormatter(e={}){return _b(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}};v();v();var au=null,wt=class extends Zt{static get utcInstance(){return au===null&&(au=new wt(0)),au}static instance(e){return e===0?wt.utcInstance:new wt(e)}static parseSpecifier(e){if(e){let r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new wt(Xn(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${fn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${fn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return fn(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}};v();var Pr=class extends Zt{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function be(i,e){let r;if(Y(i)||i===null)return e;if(i instanceof Zt)return i;if(bh(i)){let s=i.toLowerCase();return s==="default"?e:s==="local"||s==="system"?Ce.instance:s==="utc"||s==="gmt"?wt.utcInstance:wt.parseSpecifier(s)||Ct.create(i)}else return $e(i)?wt.instance(i):typeof i=="object"&&"offset"in i&&typeof i.offset=="function"?i:new Pr(i)}var Eh=()=>Date.now(),Th="system",Sh=null,Ah=null,Oh=null,Ch=60,$h,lt=class{static get now(){return Eh}static set now(e){Eh=e}static set defaultZone(e){Th=e}static get defaultZone(){return be(Th,Ce.instance)}static get defaultLocale(){return Sh}static set defaultLocale(e){Sh=e}static get defaultNumberingSystem(){return Ah}static set defaultNumberingSystem(e){Ah=e}static get defaultOutputCalendar(){return Oh}static set defaultOutputCalendar(e){Oh=e}static get twoDigitCutoffYear(){return Ch}static set twoDigitCutoffYear(e){Ch=e%100}static get throwOnInvalid(){return $h}static set throwOnInvalid(e){$h=e}static resetCaches(){it.resetCache(),Ct.resetCache()}};function Y(i){return typeof i=="undefined"}function $e(i){return typeof i=="number"}function Yi(i){return typeof i=="number"&&i%1===0}function bh(i){return typeof i=="string"}function Ih(i){return Object.prototype.toString.call(i)==="[object Date]"}function $o(){try{return typeof Intl!="undefined"&&!!Intl.RelativeTimeFormat}catch(i){return!1}}function Lh(i){return Array.isArray(i)?i:[i]}function lu(i,e,r){if(i.length!==0)return i.reduce((s,a)=>{let c=[e(a),a];return s&&r(s[0],c[0])===s[0]?s:c},null)[1]}function Nh(i,e){return e.reduce((r,s)=>(r[s]=i[s],r),{})}function hn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Ie(i,e,r){return Yi(i)&&i>=e&&i<=r}function Cb(i,e){return i-e*Math.floor(i/e)}function _t(i,e=2){let r=i<0,s;return r?s="-"+(""+-i).padStart(e,"0"):s=(""+i).padStart(e,"0"),s}function Ze(i){if(!(Y(i)||i===null||i===""))return parseInt(i,10)}function pn(i){if(!(Y(i)||i===null||i===""))return parseFloat(i)}function Ji(i){if(!(Y(i)||i===null||i==="")){let e=parseFloat("0."+i)*1e3;return Math.floor(e)}}function Fr(i,e,r=!1){let s=ff(10,e);return(r?Math.trunc:Math.round)(i*s)/s}function jn(i){return i%4===0&&(i%100!==0||i%400===0)}function Qn(i){return jn(i)?366:365}function kr(i,e){let r=Cb(e-1,12)+1,s=i+(e-r)/12;return r===2?jn(s)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Dr(i){let e=Date.UTC(i.year,i.month-1,i.day,i.hour,i.minute,i.second,i.millisecond);return i.year<100&&i.year>=0&&(e=new Date(e),e.setUTCFullYear(i.year,i.month-1,i.day)),+e}function Hr(i){let e=(i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400))%7,r=i-1,s=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7;return e===4||s===3?53:52}function Ki(i){return i>99?i:i>lt.twoDigitCutoffYear?1900+i:2e3+i}function So(i,e,r,s=null){let a=new Date(i),c={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};s&&(c.timeZone=s);let u=k({timeZoneName:e},c),p=new Intl.DateTimeFormat(r,u).formatToParts(a).find(m=>m.type.toLowerCase()==="timezonename");return p?p.value:null}function Xn(i,e){let r=parseInt(i,10);Number.isNaN(r)&&(r=0);let s=parseInt(e,10)||0,a=r<0||Object.is(r,-0)?-s:s;return r*60+a}function uu(i){let e=Number(i);if(typeof i=="boolean"||i===""||Number.isNaN(e))throw new Rt(`Invalid unit value ${i}`);return e}function Ur(i,e){let r={};for(let s in i)if(hn(i,s)){let a=i[s];if(a==null)continue;r[e(s)]=uu(a)}return r}function fn(i,e){let r=Math.trunc(Math.abs(i/60)),s=Math.trunc(Math.abs(i%60)),a=i>=0?"+":"-";switch(e){case"short":return`${a}${_t(r,2)}:${_t(s,2)}`;case"narrow":return`${a}${r}${s>0?`:${s}`:""}`;case"techie":return`${a}${_t(r,2)}${_t(s,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Xi(i){return Nh(i,["hour","minute","second","millisecond"])}var $b=["January","February","March","April","May","June","July","August","September","October","November","December"],cu=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ib=["J","F","M","A","M","J","J","A","S","O","N","D"];function nu(i){switch(i){case"narrow":return[...Ib];case"short":return[...cu];case"long":return[...$b];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var du=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],fu=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Lb=["M","T","W","T","F","S","S"];function ru(i){switch(i){case"narrow":return[...Lb];case"short":return[...fu];case"long":return[...du];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var iu=["AM","PM"],Nb=["Before Christ","Anno Domini"],Mb=["BC","AD"],Rb=["B","A"];function su(i){switch(i){case"narrow":return[...Rb];case"short":return[...Mb];case"long":return[...Nb];default:return null}}function Mh(i){return iu[i.hour<12?0:1]}function Rh(i,e){return ru(e)[i.weekday-1]}function Dh(i,e){return nu(e)[i.month-1]}function Fh(i,e){return su(e)[i.year<0?0:1]}function xh(i,e,r="always",s=!1){let a={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},c=["hours","minutes","seconds"].indexOf(i)===-1;if(r==="auto"&&c){let T=i==="days";switch(e){case 1:return T?"tomorrow":`next ${a[i][0]}`;case-1:return T?"yesterday":`last ${a[i][0]}`;case 0:return T?"today":`this ${a[i][0]}`;default:}}let u=Object.is(e,-0)||e<0,p=Math.abs(e),m=p===1,w=a[i],S=s?m?w[1]:w[2]||w[1]:m?a[i][0]:i;return u?`${p} ${S} ago`:`in ${p} ${S}`}function Ph(i,e){let r="";for(let s of i)s.literal?r+=s.val:r+=e(s.val);return r}var Db={D:dn,DD:Ci,DDD:$i,DDDD:Ii,t:Li,tt:Ni,ttt:Mi,tttt:Ri,T:Di,TT:Fi,TTT:Pi,TTTT:ki,f:Hi,ff:zi,fff:Bi,ffff:Vi,F:Ui,FF:Wi,FFF:Gi,FFFF:Zi},xt=class{static create(e,r={}){return new xt(e,r)}static parseFormat(e){let r=null,s="",a=!1,c=[];for(let u=0;u<e.length;u++){let p=e.charAt(u);p==="'"?(s.length>0&&c.push({literal:a||/^\s+$/.test(s),val:s}),r=null,s="",a=!a):a||p===r?s+=p:(s.length>0&&c.push({literal:/^\s+$/.test(s),val:s}),s=p,r=p)}return s.length>0&&c.push({literal:a||/^\s+$/.test(s),val:s}),c}static macroTokenToFormatOpts(e){return Db[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,k(k({},this.opts),r)).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,k(k({},this.opts),r))}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return _t(e,r);let s=k({},this.opts);return r>0&&(s.padTo=r),this.loc.numberFormatter(s).format(e)}formatDateTimeFromString(e,r){let s=this.loc.listingMode()==="en",a=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",c=(I,L)=>this.loc.extract(e,I,L),u=I=>e.isOffsetFixed&&e.offset===0&&I.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,I.format):"",p=()=>s?Mh(e):c({hour:"numeric",hourCycle:"h12"},"dayperiod"),m=(I,L)=>s?Dh(e,I):c(L?{month:I}:{month:I,day:"numeric"},"month"),w=(I,L)=>s?Rh(e,I):c(L?{weekday:I}:{weekday:I,month:"long",day:"numeric"},"weekday"),S=I=>{let L=xt.macroTokenToFormatOpts(I);return L?this.formatWithSystemDefault(e,L):I},T=I=>s?Fh(e,I):c({era:I},"era"),D=I=>{switch(I){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return u({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return u({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return u({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return p();case"d":return a?c({day:"numeric"},"day"):this.num(e.day);case"dd":return a?c({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return w("short",!0);case"cccc":return w("long",!0);case"ccccc":return w("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return w("short",!1);case"EEEE":return w("long",!1);case"EEEEE":return w("narrow",!1);case"L":return a?c({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return a?c({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return m("short",!0);case"LLLL":return m("long",!0);case"LLLLL":return m("narrow",!0);case"M":return a?c({month:"numeric"},"month"):this.num(e.month);case"MM":return a?c({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return m("short",!1);case"MMMM":return m("long",!1);case"MMMMM":return m("narrow",!1);case"y":return a?c({year:"numeric"},"year"):this.num(e.year);case"yy":return a?c({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return a?c({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return a?c({year:"numeric"},"year"):this.num(e.year,6);case"G":return T("short");case"GG":return T("long");case"GGGGG":return T("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return S(I)}};return Ph(xt.parseFormat(r),D)}formatDurationFromString(e,r){let s=m=>{switch(m[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},a=m=>w=>{let S=s(w);return S?this.num(m.get(S),w.length):w},c=xt.parseFormat(r),u=c.reduce((m,{literal:w,val:S})=>w?m:m.concat(S),[]),p=e.shiftTo(...u.map(s).filter(m=>m));return Ph(c,a(p))}};v();var Dt=class{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}};v();var Hh=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Wr(...i){let e=i.reduce((r,s)=>r+s.source,"");return RegExp(`^${e}$`)}function Br(...i){return e=>i.reduce(([r,s,a],c)=>{let[u,p,m]=c(e,a);return[k(k({},r),u),p||s,m]},[{},null,1]).slice(0,2)}function Gr(i,...e){if(i==null)return[null,null];for(let[r,s]of e){let a=r.exec(i);if(a)return s(a)}return[null,null]}function Uh(...i){return(e,r)=>{let s={},a;for(a=0;a<i.length;a++)s[i[a]]=Ze(e[r+a]);return[s,null,r+a]}}var zh=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Fb=`(?:${zh.source}?(?:\\[(${Hh.source})\\])?)?`,hu=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Wh=RegExp(`${hu.source}${Fb}`),pu=RegExp(`(?:T${Wh.source})?`),Pb=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,kb=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Hb=/(\d{4})-?(\d{3})/,Ub=Uh("weekYear","weekNumber","weekDay"),zb=Uh("year","ordinal"),Wb=/(\d{4})-(\d\d)-(\d\d)/,Bh=RegExp(`${hu.source} ?(?:${zh.source}|(${Hh.source}))?`),Bb=RegExp(`(?: ${Bh.source})?`);function zr(i,e,r){let s=i[e];return Y(s)?r:Ze(s)}function Gb(i,e){return[{year:zr(i,e),month:zr(i,e+1,1),day:zr(i,e+2,1)},null,e+3]}function Vr(i,e){return[{hours:zr(i,e,0),minutes:zr(i,e+1,0),seconds:zr(i,e+2,0),milliseconds:Ji(i[e+3])},null,e+4]}function ji(i,e){let r=!i[e]&&!i[e+1],s=Xn(i[e+1],i[e+2]),a=r?null:wt.instance(s);return[{},a,e+3]}function Qi(i,e){let r=i[e]?Ct.create(i[e]):null;return[{},r,e+1]}var Vb=RegExp(`^T?${hu.source}$`),Zb=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function qb(i){let[e,r,s,a,c,u,p,m,w]=i,S=e[0]==="-",T=m&&m[0]==="-",D=(I,L=!1)=>I!==void 0&&(L||I&&S)?-I:I;return[{years:D(pn(r)),months:D(pn(s)),weeks:D(pn(a)),days:D(pn(c)),hours:D(pn(u)),minutes:D(pn(p)),seconds:D(pn(m),m==="-0"),milliseconds:D(Ji(w),T)}]}var Yb={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function mu(i,e,r,s,a,c,u){let p={year:e.length===2?Ki(Ze(e)):Ze(e),month:cu.indexOf(r)+1,day:Ze(s),hour:Ze(a),minute:Ze(c)};return u&&(p.second=Ze(u)),i&&(p.weekday=i.length>3?du.indexOf(i)+1:fu.indexOf(i)+1),p}var Jb=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Kb(i){let[,e,r,s,a,c,u,p,m,w,S,T]=i,D=mu(e,a,s,r,c,u,p),I;return m?I=Yb[m]:w?I=0:I=Xn(S,T),[D,new wt(I)]}function Xb(i){return i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var jb=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Qb=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,tE=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function kh(i){let[,e,r,s,a,c,u,p]=i;return[mu(e,a,s,r,c,u,p),wt.utcInstance]}function eE(i){let[,e,r,s,a,c,u,p]=i;return[mu(e,p,r,s,a,c,u),wt.utcInstance]}var nE=Wr(Pb,pu),rE=Wr(kb,pu),iE=Wr(Hb,pu),sE=Wr(Wh),Gh=Br(Gb,Vr,ji,Qi),oE=Br(Ub,Vr,ji,Qi),aE=Br(zb,Vr,ji,Qi),lE=Br(Vr,ji,Qi);function Vh(i){return Gr(i,[nE,Gh],[rE,oE],[iE,aE],[sE,lE])}function Zh(i){return Gr(Xb(i),[Jb,Kb])}function qh(i){return Gr(i,[jb,kh],[Qb,kh],[tE,eE])}function Yh(i){return Gr(i,[Zb,qb])}var uE=Br(Vr);function Jh(i){return Gr(i,[Vb,uE])}var cE=Wr(Wb,Bb),dE=Wr(Bh),fE=Br(Vr,ji,Qi);function Kh(i){return Gr(i,[cE,Gh],[dE,fE])}var Xh="Invalid Duration",Qh={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},hE=k({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},Qh),ce=146097/400,Zr=146097/4800,pE=k({years:{quarters:4,months:12,weeks:ce/7,days:ce,hours:ce*24,minutes:ce*24*60,seconds:ce*24*60*60,milliseconds:ce*24*60*60*1e3},quarters:{months:3,weeks:ce/28,days:ce/4,hours:ce*24/4,minutes:ce*24*60/4,seconds:ce*24*60*60/4,milliseconds:ce*24*60*60*1e3/4},months:{weeks:Zr/7,days:Zr,hours:Zr*24,minutes:Zr*24*60,seconds:Zr*24*60*60,milliseconds:Zr*24*60*60*1e3}},Qh),tr=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],mE=tr.slice(0).reverse();function mn(i,e,r=!1){let s={values:r?e.values:k(k({},i.values),e.values||{}),loc:i.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||i.conversionAccuracy,matrix:e.matrix||i.matrix};return new K(s)}function tp(i,e){var s;let r=(s=e.milliseconds)!=null?s:0;for(let a of mE.slice(1))e[a]&&(r+=e[a]*i[a].milliseconds);return r}function jh(i,e){let r=tp(i,e)<0?-1:1;tr.reduceRight((s,a)=>{if(Y(e[a]))return s;if(s){let c=e[s]*r,u=i[a][s],p=Math.floor(c/u);e[a]+=p*r,e[s]-=p*u*r}return a},null),tr.reduce((s,a)=>{if(Y(e[a]))return s;if(s){let c=e[s]%1;e[s]-=c,e[a]+=c*i[s][a]}return a},null)}function gE(i){let e={};for(let[r,s]of Object.entries(i))s!==0&&(e[r]=s);return e}var K=class{constructor(e){let r=e.conversionAccuracy==="longterm"||!1,s=r?pE:hE;e.matrix&&(s=e.matrix),this.values=e.values,this.loc=e.loc||it.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=s,this.isLuxonDuration=!0}static fromMillis(e,r){return K.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new Rt(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new K({values:Ur(e,K.normalizeUnit),loc:it.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if($e(e))return K.fromMillis(e);if(K.isDuration(e))return e;if(typeof e=="object")return K.fromObject(e);throw new Rt(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){let[s]=Yh(e);return s?K.fromObject(s,r):K.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){let[s]=Jh(e);return s?K.fromObject(s,r):K.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new Rt("need to specify a reason the Duration is invalid");let s=e instanceof Dt?e:new Dt(e,r);if(lt.throwOnInvalid)throw new Eo(s);return new K({invalid:s})}static normalizeUnit(e){let r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new Rr(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){let s=Lt(k({},r),{floor:r.round!==!1&&r.floor!==!1});return this.isValid?xt.create(this.loc,s).formatDurationFromString(this,e):Xh}toHuman(e={}){if(!this.isValid)return Xh;let r=tr.map(s=>{let a=this.values[s];return Y(a)?null:this.loc.numberFormatter(Lt(k({style:"unit",unitDisplay:"long"},e),{unit:s.slice(0,-1)})).format(a)}).filter(s=>s);return this.loc.listFormatter(k({type:"conjunction",style:e.listStyle||"narrow"},e)).format(r)}toObject(){return this.isValid?k({},this.values):{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=Fr(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let r=this.toMillis();return r<0||r>=864e5?null:(e=Lt(k({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e),{includeOffset:!1}),H.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?tp(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e),s={};for(let a of tr)(hn(r.values,a)||hn(this.values,a))&&(s[a]=r.get(a)+this.get(a));return mn(this,{values:s},!0)}minus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;let r={};for(let s of Object.keys(this.values))r[s]=uu(e(this.values[s],s));return mn(this,{values:r},!0)}get(e){return this[K.normalizeUnit(e)]}set(e){if(!this.isValid)return this;let r=k(k({},this.values),Ur(e,K.normalizeUnit));return mn(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:s,matrix:a}={}){let u={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:a,conversionAccuracy:s};return mn(this,u)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return jh(this.matrix,e),mn(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=gE(this.normalize().shiftToAll().toObject());return mn(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(u=>K.normalizeUnit(u));let r={},s={},a=this.toObject(),c;for(let u of tr)if(e.indexOf(u)>=0){c=u;let p=0;for(let w in s)p+=this.matrix[w][u]*s[w],s[w]=0;$e(a[u])&&(p+=a[u]);let m=Math.trunc(p);r[u]=m,s[u]=(p*1e3-m*1e3)/1e3}else $e(a[u])&&(s[u]=a[u]);for(let u in s)s[u]!==0&&(r[c]+=u===c?s[u]:s[u]/this.matrix[c][u]);return jh(this.matrix,r),mn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return mn(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(s,a){return s===void 0||s===0?a===void 0||a===0:s===a}for(let s of tr)if(!r(this.values[s],e.values[s]))return!1;return!0}};v();var qr="Invalid Interval";function vE(i,e){return!i||!i.isValid?ht.invalid("missing or invalid start"):!e||!e.isValid?ht.invalid("missing or invalid end"):e<i?ht.invalid("end before start",`The end of an interval must be after its start, but you had start=${i.toISO()} and end=${e.toISO()}`):null}var ht=class{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new Rt("need to specify a reason the Interval is invalid");let s=e instanceof Dt?e:new Dt(e,r);if(lt.throwOnInvalid)throw new bo(s);return new ht({invalid:s})}static fromDateTimes(e,r){let s=Yr(e),a=Yr(r),c=vE(s,a);return c==null?new ht({start:s,end:a}):c}static after(e,r){let s=K.fromDurationLike(r),a=Yr(e);return ht.fromDateTimes(a,a.plus(s))}static before(e,r){let s=K.fromDurationLike(r),a=Yr(e);return ht.fromDateTimes(a.minus(s),a)}static fromISO(e,r){let[s,a]=(e||"").split("/",2);if(s&&a){let c,u;try{c=H.fromISO(s,r),u=c.isValid}catch(w){u=!1}let p,m;try{p=H.fromISO(a,r),m=p.isValid}catch(w){m=!1}if(u&&m)return ht.fromDateTimes(c,p);if(u){let w=K.fromISO(a,r);if(w.isValid)return ht.after(c,w)}else if(m){let w=K.fromISO(s,r);if(w.isValid)return ht.before(p,w)}}return ht.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds"){if(!this.isValid)return NaN;let r=this.start.startOf(e),s=this.end.startOf(e);return Math.floor(s.diff(r,e).get(e))+(s.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?ht.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];let r=e.map(Yr).filter(u=>this.contains(u)).sort(),s=[],{s:a}=this,c=0;for(;a<this.e;){let u=r[c]||this.e,p=+u>+this.e?this.e:u;s.push(ht.fromDateTimes(a,p)),a=p,c+=1}return s}splitBy(e){let r=K.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s}=this,a=1,c,u=[];for(;s<this.e;){let p=this.start.plus(r.mapUnits(m=>m*a));c=+p>+this.e?this.e:p,u.push(ht.fromDateTimes(s,c)),s=c,a+=1}return u}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let r=this.s>e.s?this.s:e.s,s=this.e<e.e?this.e:e.e;return r>=s?null:ht.fromDateTimes(r,s)}union(e){if(!this.isValid)return this;let r=this.s<e.s?this.s:e.s,s=this.e>e.e?this.e:e.e;return ht.fromDateTimes(r,s)}static merge(e){let[r,s]=e.sort((a,c)=>a.s-c.s).reduce(([a,c],u)=>c?c.overlaps(u)||c.abutsStart(u)?[a,c.union(u)]:[a.concat([c]),u]:[a,u],[[],null]);return s&&r.push(s),r}static xor(e){let r=null,s=0,a=[],c=e.map(m=>[{time:m.s,type:"s"},{time:m.e,type:"e"}]),u=Array.prototype.concat(...c),p=u.sort((m,w)=>m.time-w.time);for(let m of p)s+=m.type==="s"?1:-1,s===1?r=m.time:(r&&+r!=+m.time&&a.push(ht.fromDateTimes(r,m.time)),r=null);return ht.merge(a)}difference(...e){return ht.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:qr}toLocaleString(e=dn,r={}){return this.isValid?xt.create(this.s.loc.clone(r),e).formatInterval(this):qr}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:qr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:qr}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:qr}toFormat(e,{separator:r=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:qr}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):K.invalid(this.invalidReason)}mapEndpoints(e){return ht.fromDateTimes(e(this.s),e(this.e))}};v();var qe=class{static hasDST(e=lt.defaultZone){let r=H.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return Ct.isValidZone(e)}static normalizeZone(e){return be(e,lt.defaultZone)}static months(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null,outputCalendar:c="gregory"}={}){return(a||it.create(r,s,c)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null,outputCalendar:c="gregory"}={}){return(a||it.create(r,s,c)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null}={}){return(a||it.create(r,s,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null}={}){return(a||it.create(r,s,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return it.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return it.create(r,null,"gregory").eras(e)}static features(){return{relative:$o()}}};v();function ep(i,e){let r=a=>a.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),s=r(e)-r(i);return Math.floor(K.fromMillis(s).as("days"))}function yE(i,e,r){let s=[["years",(m,w)=>w.year-m.year],["quarters",(m,w)=>w.quarter-m.quarter+(w.year-m.year)*4],["months",(m,w)=>w.month-m.month+(w.year-m.year)*12],["weeks",(m,w)=>{let S=ep(m,w);return(S-S%7)/7}],["days",ep]],a={},c=i,u,p;for(let[m,w]of s)r.indexOf(m)>=0&&(u=m,a[m]=w(i,e),p=c.plus(a),p>e?(a[m]--,i=c.plus(a),i>e&&(p=i,a[m]--,i=c.plus(a))):i=p);return[i,a,p,u]}function np(i,e,r,s){let[a,c,u,p]=yE(i,e,r),m=e-a,w=r.filter(T=>["hours","minutes","seconds","milliseconds"].indexOf(T)>=0);w.length===0&&(u<e&&(u=a.plus({[p]:1})),u!==a&&(c[p]=(c[p]||0)+m/(u-a)));let S=K.fromObject(c,s);return w.length>0?K.fromMillis(m,s).shiftTo(...w).plus(S):S}v();v();var gu={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},rp={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},_E=gu.hanidec.replace(/[\[|\]]/g,"").split("");function ip(i){let e=parseInt(i,10);if(isNaN(e)){e="";for(let r=0;r<i.length;r++){let s=i.charCodeAt(r);if(i[r].search(gu.hanidec)!==-1)e+=_E.indexOf(i[r]);else for(let a in rp){let[c,u]=rp[a];s>=c&&s<=u&&(e+=s-c)}}return parseInt(e,10)}else return e}function de({numberingSystem:i},e=""){return new RegExp(`${gu[i||"latn"]}${e}`)}var wE="missing Intl.DateTimeFormat.formatToParts support";function ot(i,e=r=>r){return{regex:i,deser:([r])=>e(ip(r))}}var xE=String.fromCharCode(160),ap=`[ ${xE}]`,lp=new RegExp(ap,"g");function bE(i){return i.replace(/\./g,"\\.?").replace(lp,ap)}function sp(i){return i.replace(/\./g,"").replace(lp," ").toLowerCase()}function Ee(i,e){return i===null?null:{regex:RegExp(i.map(bE).join("|")),deser:([r])=>i.findIndex(s=>sp(r)===sp(s))+e}}function op(i,e){return{regex:i,deser:([,r,s])=>Xn(r,s),groups:e}}function Io(i){return{regex:i,deser:([e])=>e}}function EE(i){return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function TE(i,e){let r=de(e),s=de(e,"{2}"),a=de(e,"{3}"),c=de(e,"{4}"),u=de(e,"{6}"),p=de(e,"{1,2}"),m=de(e,"{1,3}"),w=de(e,"{1,6}"),S=de(e,"{1,9}"),T=de(e,"{2,4}"),D=de(e,"{4,6}"),I=dt=>({regex:RegExp(EE(dt.val)),deser:([Et])=>Et,literal:!0}),pt=(dt=>{if(i.literal)return I(dt);switch(dt.val){case"G":return Ee(e.eras("short"),0);case"GG":return Ee(e.eras("long"),0);case"y":return ot(w);case"yy":return ot(T,Ki);case"yyyy":return ot(c);case"yyyyy":return ot(D);case"yyyyyy":return ot(u);case"M":return ot(p);case"MM":return ot(s);case"MMM":return Ee(e.months("short",!0),1);case"MMMM":return Ee(e.months("long",!0),1);case"L":return ot(p);case"LL":return ot(s);case"LLL":return Ee(e.months("short",!1),1);case"LLLL":return Ee(e.months("long",!1),1);case"d":return ot(p);case"dd":return ot(s);case"o":return ot(m);case"ooo":return ot(a);case"HH":return ot(s);case"H":return ot(p);case"hh":return ot(s);case"h":return ot(p);case"mm":return ot(s);case"m":return ot(p);case"q":return ot(p);case"qq":return ot(s);case"s":return ot(p);case"ss":return ot(s);case"S":return ot(m);case"SSS":return ot(a);case"u":return Io(S);case"uu":return Io(p);case"uuu":return ot(r);case"a":return Ee(e.meridiems(),0);case"kkkk":return ot(c);case"kk":return ot(T,Ki);case"W":return ot(p);case"WW":return ot(s);case"E":case"c":return ot(r);case"EEE":return Ee(e.weekdays("short",!1),1);case"EEEE":return Ee(e.weekdays("long",!1),1);case"ccc":return Ee(e.weekdays("short",!0),1);case"cccc":return Ee(e.weekdays("long",!0),1);case"Z":case"ZZ":return op(new RegExp(`([+-]${p.source})(?::(${s.source}))?`),2);case"ZZZ":return op(new RegExp(`([+-]${p.source})(${s.source})?`),2);case"z":return Io(/[a-z_+-/]{1,256}?/i);case" ":return Io(/[^\S\n\r]/);default:return I(dt)}})(i)||{invalidReason:wE};return pt.token=i,pt}var SE={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function AE(i,e,r){let{type:s,value:a}=i;if(s==="literal"){let m=/^\s+$/.test(a);return{literal:!m,val:m?" ":a}}let c=e[s],u=s;s==="hour"&&(e.hour12!=null?u=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?u="hour12":u="hour24":u=r.hour12?"hour12":"hour24");let p=SE[u];if(typeof p=="object"&&(p=p[c]),p)return{literal:!1,val:p}}function OE(i){return[`^${i.map(r=>r.regex).reduce((r,s)=>`${r}(${s.source})`,"")}$`,i]}function CE(i,e,r){let s=i.match(e);if(s){let a={},c=1;for(let u in r)if(hn(r,u)){let p=r[u],m=p.groups?p.groups+1:1;!p.literal&&p.token&&(a[p.token.val[0]]=p.deser(s.slice(c,c+m))),c+=m}return[s,a]}else return[s,{}]}function $E(i){let e=c=>{switch(c){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},r=null,s;return Y(i.z)||(r=Ct.create(i.z)),Y(i.Z)||(r||(r=new wt(i.Z)),s=i.Z),Y(i.q)||(i.M=(i.q-1)*3+1),Y(i.h)||(i.h<12&&i.a===1?i.h+=12:i.h===12&&i.a===0&&(i.h=0)),i.G===0&&i.y&&(i.y=-i.y),Y(i.u)||(i.S=Ji(i.u)),[Object.keys(i).reduce((c,u)=>{let p=e(u);return p&&(c[p]=i[u]),c},{}),r,s]}var vu=null;function IE(){return vu||(vu=H.fromMillis(1555555555555)),vu}function LE(i,e){if(i.literal)return i;let r=xt.macroTokenToFormatOpts(i.val),s=wu(r,e);return s==null||s.includes(void 0)?i:s}function yu(i,e){return Array.prototype.concat(...i.map(r=>LE(r,e)))}function _u(i,e,r){let s=yu(xt.parseFormat(r),i),a=s.map(u=>TE(u,i)),c=a.find(u=>u.invalidReason);if(c)return{input:e,tokens:s,invalidReason:c.invalidReason};{let[u,p]=OE(a),m=RegExp(u,"i"),[w,S]=CE(e,m,p),[T,D,I]=S?$E(S):[null,null,void 0];if(hn(S,"a")&&hn(S,"H"))throw new Ve("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:s,regex:m,rawMatches:w,matches:S,result:T,zone:D,specificOffset:I}}}function up(i,e,r){let{result:s,zone:a,specificOffset:c,invalidReason:u}=_u(i,e,r);return[s,a,c,u]}function wu(i,e){if(!i)return null;let s=xt.create(e,i).dtFormatter(IE()),a=s.formatToParts(),c=s.resolvedOptions();return a.map(u=>AE(u,i,c))}v();var cp=[0,31,59,90,120,151,181,212,243,273,304,334],dp=[0,31,60,91,121,152,182,213,244,274,305,335];function fe(i,e){return new Dt("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${i}, which is invalid`)}function fp(i,e,r){let s=new Date(Date.UTC(i,e-1,r));i<100&&i>=0&&s.setUTCFullYear(s.getUTCFullYear()-1900);let a=s.getUTCDay();return a===0?7:a}function hp(i,e,r){return r+(jn(i)?dp:cp)[e-1]}function pp(i,e){let r=jn(i)?dp:cp,s=r.findIndex(c=>c<e),a=e-r[s];return{month:s+1,day:a}}function Lo(i){let{year:e,month:r,day:s}=i,a=hp(e,r,s),c=fp(e,r,s),u=Math.floor((a-c+10)/7),p;return u<1?(p=e-1,u=Hr(p)):u>Hr(e)?(p=e+1,u=1):p=e,k({weekYear:p,weekNumber:u,weekday:c},Xi(i))}function xu(i){let{weekYear:e,weekNumber:r,weekday:s}=i,a=fp(e,1,4),c=Qn(e),u=r*7+s-a-3,p;u<1?(p=e-1,u+=Qn(p)):u>c?(p=e+1,u-=Qn(e)):p=e;let{month:m,day:w}=pp(p,u);return k({year:p,month:m,day:w},Xi(i))}function No(i){let{year:e,month:r,day:s}=i,a=hp(e,r,s);return k({year:e,ordinal:a},Xi(i))}function bu(i){let{year:e,ordinal:r}=i,{month:s,day:a}=pp(e,r);return k({year:e,month:s,day:a},Xi(i))}function mp(i){let e=Yi(i.weekYear),r=Ie(i.weekNumber,1,Hr(i.weekYear)),s=Ie(i.weekday,1,7);return e?r?s?!1:fe("weekday",i.weekday):fe("week",i.week):fe("weekYear",i.weekYear)}function gp(i){let e=Yi(i.year),r=Ie(i.ordinal,1,Qn(i.year));return e?r?!1:fe("ordinal",i.ordinal):fe("year",i.year)}function Eu(i){let e=Yi(i.year),r=Ie(i.month,1,12),s=Ie(i.day,1,kr(i.year,i.month));return e?r?s?!1:fe("day",i.day):fe("month",i.month):fe("year",i.year)}function Tu(i){let{hour:e,minute:r,second:s,millisecond:a}=i,c=Ie(e,0,23)||e===24&&r===0&&s===0&&a===0,u=Ie(r,0,59),p=Ie(s,0,59),m=Ie(a,0,999);return c?u?p?m?!1:fe("millisecond",a):fe("second",s):fe("minute",r):fe("hour",e)}var Su="Invalid DateTime",vp=864e13;function Mo(i){return new Dt("unsupported zone",`the zone "${i.name}" is not supported`)}function Au(i){return i.weekData===null&&(i.weekData=Lo(i.c)),i.weekData}function er(i,e){let r={ts:i.ts,zone:i.zone,c:i.c,o:i.o,loc:i.loc,invalid:i.invalid};return new H(Lt(k(k({},r),e),{old:r}))}function Tp(i,e,r){let s=i-e*60*1e3,a=r.offset(s);if(e===a)return[s,e];s-=(a-e)*60*1e3;let c=r.offset(s);return a===c?[s,a]:[i-Math.min(a,c)*60*1e3,Math.max(a,c)]}function Ro(i,e){i+=e*60*1e3;let r=new Date(i);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Fo(i,e,r){return Tp(Dr(i),e,r)}function yp(i,e){let r=i.o,s=i.c.year+Math.trunc(e.years),a=i.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,c=Lt(k({},i.c),{year:s,month:a,day:Math.min(i.c.day,kr(s,a))+Math.trunc(e.days)+Math.trunc(e.weeks)*7}),u=K.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),p=Dr(c),[m,w]=Tp(p,r,i.zone);return u!==0&&(m+=u,w=i.zone.offset(m)),{ts:m,o:w}}function ts(i,e,r,s,a,c){let{setZone:u,zone:p}=r;if(i&&Object.keys(i).length!==0||e){let m=e||p,w=H.fromObject(i,Lt(k({},r),{zone:m,specificOffset:c}));return u?w:w.setZone(p)}else return H.invalid(new Dt("unparsable",`the input "${a}" can't be parsed as ${s}`))}function Do(i,e,r=!0){return i.isValid?xt.create(it.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(i,e):null}function Ou(i,e){let r=i.c.year>9999||i.c.year<0,s="";return r&&i.c.year>=0&&(s+="+"),s+=_t(i.c.year,r?6:4),e?(s+="-",s+=_t(i.c.month),s+="-",s+=_t(i.c.day)):(s+=_t(i.c.month),s+=_t(i.c.day)),s}function _p(i,e,r,s,a,c){let u=_t(i.c.hour);return e?(u+=":",u+=_t(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(u+=":")):u+=_t(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(u+=_t(i.c.second),(i.c.millisecond!==0||!s)&&(u+=".",u+=_t(i.c.millisecond,3))),a&&(i.isOffsetFixed&&i.offset===0&&!c?u+="Z":i.o<0?(u+="-",u+=_t(Math.trunc(-i.o/60)),u+=":",u+=_t(Math.trunc(-i.o%60))):(u+="+",u+=_t(Math.trunc(i.o/60)),u+=":",u+=_t(Math.trunc(i.o%60)))),c&&(u+="["+i.zone.ianaName+"]"),u}var Sp={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},NE={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},ME={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Ap=["year","month","day","hour","minute","second","millisecond"],RE=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],DE=["year","ordinal","hour","minute","second","millisecond"];function wp(i){let e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[i.toLowerCase()];if(!e)throw new Rr(i);return e}function xp(i,e){let r=be(e.zone,lt.defaultZone),s=it.fromObject(e),a=lt.now(),c,u;if(Y(i.year))c=a;else{for(let w of Ap)Y(i[w])&&(i[w]=Sp[w]);let p=Eu(i)||Tu(i);if(p)return H.invalid(p);let m=r.offset(a);[c,u]=Fo(i,m,r)}return new H({ts:c,zone:r,loc:s,o:u})}function bp(i,e,r){let s=Y(r.round)?!0:r.round,a=(u,p)=>(u=Fr(u,s||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(u,p)),c=u=>r.calendary?e.hasSame(i,u)?0:e.startOf(u).diff(i.startOf(u),u).get(u):e.diff(i,u).get(u);if(r.unit)return a(c(r.unit),r.unit);for(let u of r.units){let p=c(u);if(Math.abs(p)>=1)return a(p,u)}return a(i>e?-0:0,r.units[r.units.length-1])}function Ep(i){let e={},r;return i.length>0&&typeof i[i.length-1]=="object"?(e=i[i.length-1],r=Array.from(i).slice(0,i.length-1)):r=Array.from(i),[e,r]}var H=class{constructor(e){let r=e.zone||lt.defaultZone,s=e.invalid||(Number.isNaN(e.ts)?new Dt("invalid input"):null)||(r.isValid?null:Mo(r));this.ts=Y(e.ts)?lt.now():e.ts;let a=null,c=null;if(!s)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[a,c]=[e.old.c,e.old.o];else{let p=r.offset(this.ts);a=Ro(this.ts,p),s=Number.isNaN(a.year)?new Dt("invalid input"):null,a=s?null:a,c=s?null:p}this._zone=r,this.loc=e.loc||it.create(),this.invalid=s,this.weekData=null,this.c=a,this.o=c,this.isLuxonDateTime=!0}static now(){return new H({})}static local(){let[e,r]=Ep(arguments),[s,a,c,u,p,m,w]=r;return xp({year:s,month:a,day:c,hour:u,minute:p,second:m,millisecond:w},e)}static utc(){let[e,r]=Ep(arguments),[s,a,c,u,p,m,w]=r;return e.zone=wt.utcInstance,xp({year:s,month:a,day:c,hour:u,minute:p,second:m,millisecond:w},e)}static fromJSDate(e,r={}){let s=Ih(e)?e.valueOf():NaN;if(Number.isNaN(s))return H.invalid("invalid input");let a=be(r.zone,lt.defaultZone);return a.isValid?new H({ts:s,zone:a,loc:it.fromObject(r)}):H.invalid(Mo(a))}static fromMillis(e,r={}){if($e(e))return e<-vp||e>vp?H.invalid("Timestamp out of range"):new H({ts:e,zone:be(r.zone,lt.defaultZone),loc:it.fromObject(r)});throw new Rt(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if($e(e))return new H({ts:e*1e3,zone:be(r.zone,lt.defaultZone),loc:it.fromObject(r)});throw new Rt("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};let s=be(r.zone,lt.defaultZone);if(!s.isValid)return H.invalid(Mo(s));let a=lt.now(),c=Y(r.specificOffset)?s.offset(a):r.specificOffset,u=Ur(e,wp),p=!Y(u.ordinal),m=!Y(u.year),w=!Y(u.month)||!Y(u.day),S=m||w,T=u.weekYear||u.weekNumber,D=it.fromObject(r);if((S||p)&&T)throw new Ve("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(w&&p)throw new Ve("Can't mix ordinal dates with month/day");let I=T||u.weekday&&!S,L,pt,dt=Ro(a,c);I?(L=RE,pt=NE,dt=Lo(dt)):p?(L=DE,pt=ME,dt=No(dt)):(L=Ap,pt=Sp);let Et=!1;for(let yn of L){let Po=u[yn];Y(Po)?Et?u[yn]=pt[yn]:u[yn]=dt[yn]:Et=!0}let qt=I?mp(u):p?gp(u):Eu(u),Yt=qt||Tu(u);if(Yt)return H.invalid(Yt);let Ye=I?xu(u):p?bu(u):u,[he,gn]=Fo(Ye,c,s),vn=new H({ts:he,zone:s,o:gn,loc:D});return u.weekday&&S&&e.weekday!==vn.weekday?H.invalid("mismatched weekday",`you can't specify both a weekday of ${u.weekday} and a date of ${vn.toISO()}`):vn}static fromISO(e,r={}){let[s,a]=Vh(e);return ts(s,a,r,"ISO 8601",e)}static fromRFC2822(e,r={}){let[s,a]=Zh(e);return ts(s,a,r,"RFC 2822",e)}static fromHTTP(e,r={}){let[s,a]=qh(e);return ts(s,a,r,"HTTP",r)}static fromFormat(e,r,s={}){if(Y(e)||Y(r))throw new Rt("fromFormat requires an input string and a format");let{locale:a=null,numberingSystem:c=null}=s,u=it.fromOpts({locale:a,numberingSystem:c,defaultToEN:!0}),[p,m,w,S]=up(u,e,r);return S?H.invalid(S):ts(p,m,s,`format ${r}`,e,w)}static fromString(e,r,s={}){return H.fromFormat(e,r,s)}static fromSQL(e,r={}){let[s,a]=Kh(e);return ts(s,a,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new Rt("need to specify a reason the DateTime is invalid");let s=e instanceof Dt?e:new Dt(e,r);if(lt.throwOnInvalid)throw new xo(s);return new H({invalid:s})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){let s=wu(e,it.fromObject(r));return s?s.map(a=>a?a.val:null).join(""):null}static expandFormat(e,r={}){return yu(xt.parseFormat(e),it.fromObject(r)).map(a=>a.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Au(this).weekYear:NaN}get weekNumber(){return this.isValid?Au(this).weekNumber:NaN}get weekday(){return this.isValid?Au(this).weekday:NaN}get ordinal(){return this.isValid?No(this.c).ordinal:NaN}get monthShort(){return this.isValid?qe.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?qe.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?qe.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?qe.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,r=6e4,s=Dr(this.c),a=this.zone.offset(s-e),c=this.zone.offset(s+e),u=this.zone.offset(s-a*r),p=this.zone.offset(s-c*r);if(u===p)return[this];let m=s-u*r,w=s-p*r,S=Ro(m,u),T=Ro(w,p);return S.hour===T.hour&&S.minute===T.minute&&S.second===T.second&&S.millisecond===T.millisecond?[er(this,{ts:m}),er(this,{ts:w})]:[this]}get isInLeapYear(){return jn(this.year)}get daysInMonth(){return kr(this.year,this.month)}get daysInYear(){return this.isValid?Qn(this.year):NaN}get weeksInWeekYear(){return this.isValid?Hr(this.weekYear):NaN}resolvedLocaleOptions(e={}){let{locale:r,numberingSystem:s,calendar:a}=xt.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:s,outputCalendar:a}}toUTC(e=0,r={}){return this.setZone(wt.instance(e),r)}toLocal(){return this.setZone(lt.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:s=!1}={}){if(e=be(e,lt.defaultZone),e.equals(this.zone))return this;if(e.isValid){let a=this.ts;if(r||s){let c=e.offset(this.ts),u=this.toObject();[a]=Fo(u,c,e)}return er(this,{ts:a,zone:e})}else return H.invalid(Mo(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:s}={}){let a=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:s});return er(this,{loc:a})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let r=Ur(e,wp),s=!Y(r.weekYear)||!Y(r.weekNumber)||!Y(r.weekday),a=!Y(r.ordinal),c=!Y(r.year),u=!Y(r.month)||!Y(r.day),p=c||u,m=r.weekYear||r.weekNumber;if((p||a)&&m)throw new Ve("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&a)throw new Ve("Can't mix ordinal dates with month/day");let w;s?w=xu(k(k({},Lo(this.c)),r)):Y(r.ordinal)?(w=k(k({},this.toObject()),r),Y(r.day)&&(w.day=Math.min(kr(w.year,w.month),w.day))):w=bu(k(k({},No(this.c)),r));let[S,T]=Fo(w,this.o,this.zone);return er(this,{ts:S,o:T})}plus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e);return er(this,yp(this,r))}minus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e).negate();return er(this,yp(this,r))}startOf(e){if(!this.isValid)return this;let r={},s=K.normalizeUnit(e);switch(s){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break;case"milliseconds":break}if(s==="weeks"&&(r.weekday=1),s==="quarters"){let a=Math.ceil(this.month/3);r.month=(a-1)*3+1}return this.set(r)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e,r={}){return this.isValid?xt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):Su}toLocaleString(e=dn,r={}){return this.isValid?xt.create(this.loc.clone(r),e).formatDateTime(this):Su}toLocaleParts(e={}){return this.isValid?xt.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:s=!1,includeOffset:a=!0,extendedZone:c=!1}={}){if(!this.isValid)return null;let u=e==="extended",p=Ou(this,u);return p+="T",p+=_p(this,u,r,s,a,c),p}toISODate({format:e="extended"}={}){return this.isValid?Ou(this,e==="extended"):null}toISOWeekDate(){return Do(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:s=!0,includePrefix:a=!1,extendedZone:c=!1,format:u="extended"}={}){return this.isValid?(a?"T":"")+_p(this,u==="extended",r,e,s,c):null}toRFC2822(){return Do(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Do(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Ou(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:s=!0}={}){let a="HH:mm:ss.SSS";return(r||e)&&(s&&(a+=" "),r?a+="z":e&&(a+="ZZ")),Do(this,a,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Su}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let r=k({},this.c);return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",s={}){if(!this.isValid||!e.isValid)return K.invalid("created by diffing an invalid DateTime");let a=k({locale:this.locale,numberingSystem:this.numberingSystem},s),c=Lh(r).map(K.normalizeUnit),u=e.valueOf()>this.valueOf(),p=u?this:e,m=u?e:this,w=np(p,m,c,a);return u?w.negate():w}diffNow(e="milliseconds",r={}){return this.diff(H.now(),e,r)}until(e){return this.isValid?ht.fromDateTimes(this,e):this}hasSame(e,r){if(!this.isValid)return!1;let s=e.valueOf(),a=this.setZone(e.zone,{keepLocalTime:!0});return a.startOf(r)<=s&&s<=a.endOf(r)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let r=e.base||H.fromObject({},{zone:this.zone}),s=e.padding?this<r?-e.padding:e.padding:0,a=["years","months","days","hours","minutes","seconds"],c=e.unit;return Array.isArray(e.unit)&&(a=e.unit,c=void 0),bp(r,this.plus(s),Lt(k({},e),{numeric:"always",units:a,unit:c}))}toRelativeCalendar(e={}){return this.isValid?bp(e.base||H.fromObject({},{zone:this.zone}),this,Lt(k({},e),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...e){if(!e.every(H.isDateTime))throw new Rt("min requires all arguments be DateTimes");return lu(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(H.isDateTime))throw new Rt("max requires all arguments be DateTimes");return lu(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,s={}){let{locale:a=null,numberingSystem:c=null}=s,u=it.fromOpts({locale:a,numberingSystem:c,defaultToEN:!0});return _u(u,e,r)}static fromStringExplain(e,r,s={}){return H.fromFormatExplain(e,r,s)}static get DATE_SHORT(){return dn}static get DATE_MED(){return Ci}static get DATE_MED_WITH_WEEKDAY(){return Zl}static get DATE_FULL(){return $i}static get DATE_HUGE(){return Ii}static get TIME_SIMPLE(){return Li}static get TIME_WITH_SECONDS(){return Ni}static get TIME_WITH_SHORT_OFFSET(){return Mi}static get TIME_WITH_LONG_OFFSET(){return Ri}static get TIME_24_SIMPLE(){return Di}static get TIME_24_WITH_SECONDS(){return Fi}static get TIME_24_WITH_SHORT_OFFSET(){return Pi}static get TIME_24_WITH_LONG_OFFSET(){return ki}static get DATETIME_SHORT(){return Hi}static get DATETIME_SHORT_WITH_SECONDS(){return Ui}static get DATETIME_MED(){return zi}static get DATETIME_MED_WITH_SECONDS(){return Wi}static get DATETIME_MED_WITH_WEEKDAY(){return ql}static get DATETIME_FULL(){return Bi}static get DATETIME_FULL_WITH_SECONDS(){return Gi}static get DATETIME_HUGE(){return Vi}static get DATETIME_HUGE_WITH_SECONDS(){return Zi}};function Yr(i){if(H.isDateTime(i))return i;if(i&&i.valueOf&&$e(i.valueOf()))return H.fromJSDate(i);if(i&&typeof i=="object")return H.fromObject(i);throw new Rt(`Unknown datetime argument: ${i}, of type ${typeof i}`)}var Op=et(G),FE=[Op.styles,Dl],nr=class extends Op{constructor(){super();this.updateComment=({detail:r})=>{let{text:s}=r;this.text=s,this.closeEditMode(),this.emitEvent("update-comment",{uuid:this.uuid,text:s})};this.resolveAnnotation=r=>{r.stopPropagation(),this.emitEvent("resolve-annotation",{type:"resolve-annotation",resolved:!this.resolved},{composed:!1,bubbles:!1})};this.confirmDelete=()=>{if(this.deleteCommentModalOpen=!1,this.primaryComment)return this.emitEvent("delete-annotation",{uuid:this.annotationId});this.emitEvent("delete-comment",{annotationId:this.annotationId,uuid:this.uuid})};this.closeEditMode=()=>{this.mode="readonly"};this.resolved=!1}render(){var I;let r=this.annotationFilter==="all"?"resolve":"undo",s=L=>H.fromISO(L).toFormat("yyyy-dd-MM"),a=this.resolvable?"comment-item__resolve":"hidden",c=[{label:"EDIT"},{label:"DELETE"}],u=({detail:L})=>{L==="EDIT"&&(this.mode="editable"),L==="DELETE"&&(this.deleteCommentModalOpen=!0)},p=()=>{this.text.length<120||(this.expandElipsis=!0)},m=()=>{if(this.mode==="editable")return M`
        <superviz-comments-comment-input
          class="comment-item--editable"
          editable
          @click=${L=>L.stopPropagation()}
          text=${this.text}
          eventType="update-comment"
          @update-comment=${this.updateComment}
          @close-edit-mode=${this.closeEditMode}
        ></superviz-comments-comment-input>
      `},w=()=>{if(this.mode!=="editable")return M`
        <span
          id="comment-text"
          @click=${p}
          class="text text-big sv-gray-700 ${D}"
          >${this.text}</span
        >
      `},S=()=>{this.deleteCommentModalOpen=!1},T={"comment-item":!0,reply:!this.primaryComment},D=!this.expandElipsis&&this.text.length>120?"line-clamp":"";return M`
      <div class=${ct(T)}>
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
          <div class="comment-item__content__body">${m()} ${w()}</div>
        </div>
      </div>
      <superviz-comments-delete-comments-modal
        ?open=${this.deleteCommentModalOpen}
        @close=${S}
        @confirm=${this.confirmDelete}
      >
      </superviz-comments-delete-comments-modal>
    `}};nr.styles=FE,nr.properties={uuid:{type:String},annotationId:{type:String},avatar:{type:String},username:{type:String},text:{type:String},resolved:{type:Boolean},resolvable:{type:Boolean},createdAt:{type:String},mode:{type:String},deleteCommentModalOpen:{type:Boolean},primaryComment:{type:Boolean},expandElipsis:{type:Boolean},annotationFilter:{type:String}},nr=j([Q("superviz-comments-comment-item")],nr);v();var Cp=et(G),PE=[Cp.styles,Pl],rr=class extends Cp{constructor(){super();this.pinCoordinates=null;this.getCommentInput=()=>this.shadowRoot.getElementById("comment-input--textarea");this.getCommentInputContainer=()=>this.shadowRoot.getElementById("comment-input--container");this.getSendBtn=()=>this.shadowRoot.querySelector(".comment-input--send-btn");this.commentInputFocus=({detail:r})=>{this.pinCoordinates=r,this.getCommentInput().focus()};this.sendEnter=r=>{if(r.key!=="Enter"||r.shiftKey)return;let s=this.getCommentInput(),a=s.value.trim();if(!a)return;let c=this.getSendBtn();this.emitEvent(this.eventType,{text:a,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",c.disabled=!0,this.updateHeight()};this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1})};this.btnActive=!1,this.text=""}connectedCallback(){super.connectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&(window.document.body.addEventListener("comment-input-focus",this.commentInputFocus),this.addEventListener("keyup",this.sendEnter))}disconnectedCallback(){super.disconnectedCallback(),this.eventType==="create-annotation"&&window.document.body.removeEventListener("comment-input-focus",this.commentInputFocus)}updated(r){if(r.has("text")&&this.text.length>0){let s=this.getCommentInput();s.value=this.text,this.updateHeight()}if(r.has("btnActive")){let s=this.getSendBtn();s.disabled=!this.btnActive}}updateHeight(){let r=this.getCommentInput(),s=this.getCommentInputContainer();r.style.height="0px",s.style.height="0px";let a=r.scrollHeight+4,c=r.scrollHeight;r.style.height=`${a}px`,s.style.height=`${c}px`;let u=this.getSendBtn();u.disabled=!(r.value.length>0)}send(r){r.preventDefault();let s=this.getCommentInput(),a=this.getSendBtn(),c=s.value;this.emitEvent(this.eventType,{text:c,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",a.disabled=!0,this.updateHeight()}render(){var a;let r=()=>{if(!!this.editable)return M`
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
    `}};rr.styles=PE,rr.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean},placeholder:{type:String}},rr=j([Q("superviz-comments-comment-input")],rr);v();var $p=et(G),kE=[$p.styles,Ul],ir=class extends $p{constructor(){super();this.position={x:0,y:0}}get userInitial(){var s,a,c;return(((c=(a=(s=this.annotation)==null?void 0:s.comments[0])==null?void 0:a.participant)==null?void 0:c.name)||"Anonymous")[0].toUpperCase()}emitClick(){document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:this.annotation.uuid}}))}render(){var s,a;let r={"annotation-pin":!0,"annotation-pin--active":this.active};return this.type==="add"?M`
        <div
          class=${ct(r)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          <div class="annotation-pin__avatar annotation-pin__avatar--add">
            <superviz-icon name="add"></superviz-icon>
          </div>
        </div>
      `:M`
      <div
        @click=${this.emitClick}
        class=${ct(r)}
        style=${`top: ${(s=this.position)==null?void 0:s.y}px; left: ${(a=this.position)==null?void 0:a.x}px; pointer-events: auto;`}
      >
        <div class="annotation-pin__avatar">
          <p class="text text-bold text-big">${this.userInitial}</p>
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
      </div>
    `}};ir.styles=kE,ir.properties={type:{type:String},annotation:{type:Object},position:{type:Object},active:{type:Boolean}},ir=j([Q("superviz-comments-annotation-pin")],ir);v();var Ip=et(G),HE=[Ip.styles,kl],sr=class extends Ip{constructor(){super(...arguments);this.selectAnnotation=()=>{let{uuid:r}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:r}}))};this.resolveAnnotation=({detail:r})=>{let{uuid:s}=this.annotation,{resolved:a,type:c}=r,u=c==="resolve-annotation"&&this.annotationFilter==="all";this.resolved=a,this.emitEvent("resolve-annotation",{uuid:s,resolved:a}),u&&(this.shouldShowUndoResolved=!0)};this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1};this.generateExpantedCommentesTemplate=(r,s)=>s===0?M``:M`
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
        class=${ct({hidden:this.filterIsResolved})}
      >
      </superviz-comments-annotation-resolved>
    `:M``}render(){var r,s,a,c,u,p;return M`
      ${this.annotationResolvedTemplate()}

      <div class=${ct(this.shouldHiddenAnnotation)}>
        <div class=${ct(this.annotationClasses)} @click=${this.selectAnnotation}>
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

            <div class=${ct(this.avatarCommentsClasses)}>
              <div class="avatar-container">${this.generateAvatarCommentsTemplate()}</div>
            </div>
          </div>

          <div class=${ct(this.commentsClasses)}>
            ${(p=this.annotation.comments)==null?void 0:p.map(this.generateExpantedCommentesTemplate)}
            <superviz-comments-comment-input
              @create-comment=${this.createComment}
              eventType="create-comment"
              @click=${m=>m.stopPropagation()}
              placeholder="Reply"
            ></superviz-comments-comment-input>
          </div>
        </div>
        <div class=${ct(this.hrClasses)}></div>
      </div>
    `}};sr.styles=HE,sr.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String}},sr=j([Q("superviz-comments-annotation-item")],sr);v();var Lp=et(G),UE=[Lp.styles],or=class extends Lp{constructor(){super(...arguments);this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:M`<span class="text text-big sv-gray-600">Are you sure you want to delete this comment? <br /> This action cannot be undone</span>`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))};this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{!this.open||this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{!this.open||(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(r){r.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){!this.open||(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){let r=()=>{if(!!this.useSlot)return M`<slot name="modal-handler" @click=${this.toggle}></slot>`},s=()=>{if(!!this.open)return M`
        <superviz-modal></superviz-modal>
      `};return M`
      ${r()}
      ${s()}
    `}};or.styles=UE,or.properties={open:{type:Boolean},useSlot:{type:Boolean}},or=j([Q("superviz-comments-delete-comments-modal")],or);v();var Np=et(G),zE=[Np.styles,Hl],WE=10*1e3,ar=class extends Np{constructor(){super();this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)};this.timeToHide=WE,this.isCanceled=!1}firstUpdated(){this.setTimer()}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return this.timeToHide===0?M``:this.isCanceled?M``:M`
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
    `}};ar.styles=zE,ar.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},ar=j([Q("superviz-comments-annotation-resolved")],ar);v();var Mp=et(G),BE=[Mp.styles,zl],es=[{label:"All comments",code:"all"},{label:"Resolved comments",code:"resolved"}],lr=class extends Mp{constructor(){super();this.caret="down"}render(){let r=this.filter==="all"?es[0].label:es[1].label,s=({detail:p})=>{this.emitEvent("select",{filter:p}),a()},a=()=>{this.caret=this.caret==="down"?"up":"down"},c=this.filter==="all"?es[0].code:es[1].code,u={text:!0,"text-bold":!0,"select-content":!0,"sv-gray-500":this.caret==="down","sv-gray-700":this.caret==="up"};return M`
      <div class="select">
        <div class="select-container">
          <superviz-dropdown
            options=${JSON.stringify(es)}
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
              <span class=${ct(u)}>${r}</span>
              <superviz-icon name=${this.caret} size="md"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};lr.styles=BE,lr.properties={filter:{type:String},caret:{type:String}},lr=j([Q("superviz-comments-annotation-filter")],lr);v();var Rp=et(G),GE=[Rp.styles,Wl],ur=class extends Rp{constructor(){super();this.isHidden=!0,this.positionStyles="top: 20px; left: 20px;",this.shouldHide=!1,this.commentsPosition="left"}toggle(){this.emitEvent("toggle",{})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("toggle-annotation-sidebar",()=>{this.isHidden=!this.isHidden})}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".float-button");if(!s)return;s.setAttribute("style",this.positionStyles);let a=window.document.body.getBoundingClientRect().width,c=s.getBoundingClientRect(),u=320;if(!this.commentsPosition||this.commentsPosition==="left"){this.shouldHide=c.x<u;return}this.shouldHide=a-c.right<u})}render(){let r={"float-button":!0,"hide-button":!this.isHidden&&this.shouldHide};return M` <button @click=${this.toggle} class="${ct(r)}">
      <superviz-icon name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`}};ur.styles=GE,ur.properties={positionStyles:{type:String},isHidden:{type:Boolean},commentsPosition:{type:String}},ur=j([Q("superviz-comments-button")],ur);v();v();v();v();var ns=(s=>(s.GOTO="go-to",s.FOLLOW="follow",s.UNFOLLOW="unfollow",s))(ns||{});v();v();var Cu=B`
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
`;v();var $u=B`
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
`;var Dp=et(G),VE=[Dp.styles,Cu],cr=class extends Dp{constructor(){super();this.onClickOutDropdown=({detail:r})=>{this.open=r.open};this.dropdownOptionsHandler=({detail:r})=>{var m;let{id:s,label:a,name:c,color:u,slotIndex:p}=r;if(a==="go-to"&&this.emitEvent("realtime.go-to-participant",{id:s}),["follow","unfollow"].includes(a)){if(((m=this.following)==null?void 0:m.id)===s){this.stopFollowing();return}this.following={name:c,id:s,color:u,slotIndex:p},this.swapParticipantBeingFollowedPosition(),this.emitEvent("realtime.follow-participant",{id:s})}};this.position="top: 20px; right: 40px;",this.open=!1,this.textColorValues=[2,4,5,7,8,16]}updateParticipants(r){this.participants=r}toggleOpen(){this.open=!this.open}dropdownPosition(r){if(this.participants.length===1)return"bottom-center";if(r===0)return"bottom-right";let s=this.participants.length>4,a=r+1===this.participants.length;return s||!a?"bottom-center":"bottom-left"}renderExcessParticipants(){let r=this.participants.length-4;if(r<=0)return M``;let s=this.participants.slice(4).map(({name:u,color:p,id:m,slotIndex:w,isLocal:S,avatar:T,joinedPresence:D})=>({name:u,color:p,id:m,slotIndex:w,avatar:T,isLocal:S,joinedPresence:D})),a={"superviz-who-is-online__participant":!0,excess_participants:!0,"excess_participants--open":this.open};return M`
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
        <div class=${ct(a)} slot="dropdown" @click=${this.toggleOpen}>
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
      ${(c=r.name)==null?void 0:c.at(0).toUpperCase()}
    </div>`}getOptions(r,s){let{id:a,slotIndex:c,name:u,color:p}=r,m={id:a,name:u,color:p,slotIndex:c};return["GOTO",s?"UNFOLLOW":"FOLLOW"].map(T=>Lt(k({},m),{label:ns[T]}))}getIcons(r){return r?["place","send-off"]:["place","send"]}putLocalParticipationFirst(){var c;if(this.participants[0].isLocal)return;let r=(c=this.participants)==null?void 0:c.find(({isLocal:u})=>u);if(!r)return;let s=[...this.participants],a=s.indexOf(r);s.splice(a,1),s.unshift(r),this.participants=s}swapParticipantBeingFollowedPosition(){var u;let r=(u=this.participants)==null?void 0:u.findIndex(({id:p})=>{var m;return p===((m=this.following)==null?void 0:m.id)}),s=1;if(r<4||!r)return;let a=[...this.participants],c=a[r];a[r]=a[s],a[s]=c,this.participants=a}stopFollowing(){this.following=void 0,this.emitEvent("realtime.follow-participant",{id:void 0})}followingMessage(){if(!this.following)return"";let{slotIndex:r,name:s,color:a}=this.following,c=this.textColorValues.includes(r)?"#FFFFFF":"#26242A";return M`<div class="following" style="background-color: ${a}; color: ${c}">
      Following: ${s} <span @click=${this.stopFollowing}>Stop</span>
    </div>`}renderParticipants(){return this.participants?(this.putLocalParticipationFirst(),this.swapParticipantBeingFollowedPosition(),M` <div class="superviz-who-is-online">
      ${this.participants.slice(0,4).map((r,s)=>{var pt;let{joinedPresence:a,isLocal:c,id:u,name:p,color:m}=r,w=((pt=this.following)==null?void 0:pt.id)===u,S=this.getOptions(r,w),T=this.getIcons(w),D=this.dropdownPosition(s),I=!a||c||this.disableDropdown,L={"superviz-who-is-online__participant":!0,"disable-dropdown":I,followed:w};return M`
          <superviz-dropdown
            options=${JSON.stringify(S)}
            label="label"
            position="${D}"
            @selected=${this.dropdownOptionsHandler}
            icons="${JSON.stringify(T)}"
            name="${p}"
            ?disabled=${I}
          >
            <div slot="dropdown" class=${ct(L)} style="--border-color: ${m}">
              ${this.getAvatar(r)}
            </div>
          </superviz-dropdown>
        `})}
      ${this.renderExcessParticipants()}
    </div>`):M``}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".wio-content");if(!s)return;let a=this.position.includes("left")?"flex-start":"flex-end",c=`${this.position} align-items: ${a};`;s.setAttribute("style",c)})}render(){return M`<div class="wio-content">
      ${this.renderParticipants()} ${this.followingMessage()}
    </div> `}};cr.styles=VE,cr.properties={position:{type:String},participants:{type:Object},open:{type:Boolean},disableDropdown:{type:Boolean},following:{type:Object}},cr=j([Q("superviz-who-is-online")],cr);v();v();var Fp=et(G),ZE=[Fp.styles,$u],dr=class extends Fp{constructor(){super();this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let s=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),c=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=s.includes(a),w=s.includes(c),S=s.includes(p);m||w||S||this.close()};this.close=()=>{this.open=!1,this.selected="",this.emitEvent("clickout",{detail:{open:this.open},bubbles:!1,composed:!1})};this.selectParticipant=r=>()=>{this.selected=r};this.adjustPosition=()=>{let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,c=this.positionAction();if(c===0)return;if(c===1){let w=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,w);return}let u=a-s>r?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,u);this.position=m};this.textColorValues=[2,4,5,7,8,16],this.selected=""}updated(r){if(r.has("open")){if(this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown),this.close()}}getAvatar(r){var a,c;if((a=r.avatar)!=null&&a.imageUrl)return M` <img
        class="who-is-online-dropdown__avatar"
        src=${r.avatar.imageUrl}
      />`;let s=this.textColorValues.includes(r.slotIndex)?"#FFFFFF":"#26242A";return M`<div
      class="who-is-online-dropdown__avatar"
      style="background-color: ${r.color}; color: ${s}"
    >
      ${(c=r.name)==null?void 0:c.at(0).toUpperCase()}
    </div>`}renderParticipants(){if(!this.participants)return;let r=["place","send"];return this.participants.map(s=>{var pt,dt;let{id:a,slotIndex:c,joinedPresence:u,isLocal:p,color:m,name:w}=s,S=!u||p||this.disableDropdown,T={"who-is-online-dropdown__content":!0,"who-is-online-dropdown__content--selected":this.selected===a,"disable-dropdown":S,followed:((pt=this.following)==null?void 0:pt.id)===a},D={icon:!0,"hide-icon":S},I=((dt=this.following)==null?void 0:dt.id)===a,L=Object.values(ns).map((Et,qt)=>({label:I&&qt?"UNFOLLOW":Et,id:a,name:w,color:m,slotIndex:c})).slice(0,2);return M`
        <superviz-dropdown
        options=${JSON.stringify(L)}
        label="label"
        position="bottom-right"
        @selected=${this.close}
        icons="${JSON.stringify(r)}"
        ?disabled=${S}
        >
        <div 
          class=${ct(T)} 
          @click=${this.selectParticipant(a)} slot="dropdown">
          <div class="who-is-online-dropdown__participant" style="border-color: 
          ${m}">
              ${this.getAvatar(s)}
            </div>
            <span class="user-name">${w}</span>
            <superviz-icon 
              class=${ct(D)} 
              name="right" 
              color="var(--sv-gray-600)">
          </superviz-icon>
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
        <div class=${ct(this.menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `}};dr.styles=ZE,dr.properties={open:{type:Boolean},align:{type:String},position:{type:String},participants:{type:Array},selected:{type:String},disableDropdown:{type:Boolean},following:{type:Object}},dr=j([Q("superviz-who-is-online-dropdown")],dr);export{qn as Comments,lr as CommentsAnnotationFilter,sr as CommentsAnnotationItem,ir as CommentsAnnotationPin,ar as CommentsAnnotationResolved,Jn as CommentsAnnotations,rr as CommentsCommentInput,nr as CommentsCommentItem,Kn as CommentsContent,ur as CommentsFloatButton,Yn as CommentsTopbar,or as DeleteCommentModal,Zn as Dropdown,Gn as HelloWorld,Vn as Icon,Lr as Modal,Nr as ModalContainer,cr as WhoIsOnline,dr as WhoIsOnlineDropdown};
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
