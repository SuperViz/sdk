var Iw=Object.create;var Xs=Object.defineProperty,Mw=Object.defineProperties,cf=Object.getOwnPropertyDescriptor,Lw=Object.getOwnPropertyDescriptors,Dw=Object.getOwnPropertyNames,Ks=Object.getOwnPropertySymbols,Nw=Object.getPrototypeOf,sl=Object.prototype.hasOwnProperty,df=Object.prototype.propertyIsEnumerable;var ff=Math.pow,uf=(i,e,r)=>e in i?Xs(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,P=(i,e)=>{for(var r in e||(e={}))sl.call(e,r)&&uf(i,r,e[r]);if(Ks)for(var r of Ks(e))df.call(e,r)&&uf(i,r,e[r]);return i},Pt=(i,e)=>Mw(i,Lw(e));var ol=(i,e)=>{var r={};for(var s in i)sl.call(i,s)&&e.indexOf(s)<0&&(r[s]=i[s]);if(i!=null&&Ks)for(var s of Ks(i))e.indexOf(s)<0&&df.call(i,s)&&(r[s]=i[s]);return r};var Rw=(i,e)=>()=>(i&&(e=i(i=0)),e);var Fw=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var kw=(i,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Dw(e))!sl.call(i,a)&&a!==r&&Xs(i,a,{get:()=>e[a],enumerable:!(s=cf(e,a))||s.enumerable});return i};var Pw=(i,e,r)=>(r=i!=null?Iw(Nw(i)):{},kw(e||!i||!i.__esModule?Xs(r,"default",{value:i,enumerable:!0}):r,i));var j=(i,e,r,s)=>{for(var a=s>1?void 0:s?cf(e,r):e,c=i.length-1,u;c>=0;c--)(u=i[c])&&(a=(s?u(e,r,a):u(a))||a);return s&&a&&Xs(e,r,a),a};var Cn=(i,e,r)=>new Promise((s,a)=>{var c=m=>{try{p(r.next(m))}catch(x){a(x)}},u=m=>{try{p(r.throw(m))}catch(x){a(x)}},p=m=>m.done?s(m.value):Promise.resolve(m.value).then(c,u);p((r=r.apply(i,e)).next())});var v=Rw(()=>{});var sh=Fw((Cr,$i)=>{v();(function(){var i,e="4.17.21",r=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",p=500,m="__lodash_placeholder__",x=1,$=2,T=4,R=1,I=2,N=1,St=2,mt=4,Tt=8,fe=16,qt=32,Ye=64,he=128,gn=256,vn=512,yn=30,ko="...",kp=800,Pp=16,Iu=1,Hp=2,zp=3,_n=1/0,Je=9007199254740991,Up=17976931348623157e292,rs=0/0,Se=4294967295,Wp=Se-1,Bp=Se>>>1,Vp=[["ary",he],["bind",N],["bindKey",St],["curry",Tt],["curryRight",fe],["flip",vn],["partial",qt],["partialRight",Ye],["rearg",gn]],fr="[object Arguments]",is="[object Array]",Gp="[object AsyncFunction]",Jr="[object Boolean]",Kr="[object Date]",Zp="[object DOMException]",ss="[object Error]",os="[object Function]",Mu="[object GeneratorFunction]",pe="[object Map]",Xr="[object Number]",qp="[object Null]",Me="[object Object]",Lu="[object Promise]",Yp="[object Proxy]",jr="[object RegExp]",me="[object Set]",Qr="[object String]",as="[object Symbol]",Jp="[object Undefined]",ti="[object WeakMap]",Kp="[object WeakSet]",ei="[object ArrayBuffer]",hr="[object DataView]",Po="[object Float32Array]",Ho="[object Float64Array]",zo="[object Int8Array]",Uo="[object Int16Array]",Wo="[object Int32Array]",Bo="[object Uint8Array]",Vo="[object Uint8ClampedArray]",Go="[object Uint16Array]",Zo="[object Uint32Array]",Xp=/\b__p \+= '';/g,jp=/\b(__p \+=) '' \+/g,Qp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Du=/&(?:amp|lt|gt|quot|#39);/g,Nu=/[&<>"']/g,tm=RegExp(Du.source),em=RegExp(Nu.source),nm=/<%-([\s\S]+?)%>/g,rm=/<%([\s\S]+?)%>/g,Ru=/<%=([\s\S]+?)%>/g,im=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,sm=/^\w*$/,om=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qo=/[\\^$.*+?()[\]{}|]/g,am=RegExp(qo.source),Yo=/^\s+/,lm=/\s/,um=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,cm=/\{\n\/\* \[wrapped with (.+)\] \*/,dm=/,? & /,fm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hm=/[()=,{}\[\]\/\s]/,pm=/\\(\\)?/g,mm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Fu=/\w*$/,gm=/^[-+]0x[0-9a-f]+$/i,vm=/^0b[01]+$/i,ym=/^\[object .+?Constructor\]$/,_m=/^0o[0-7]+$/i,xm=/^(?:0|[1-9]\d*)$/,wm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ls=/($^)/,bm=/['\n\r\u2028\u2029\\]/g,us="\\ud800-\\udfff",Em="\\u0300-\\u036f",Sm="\\ufe20-\\ufe2f",Tm="\\u20d0-\\u20ff",ku=Em+Sm+Tm,Pu="\\u2700-\\u27bf",Hu="a-z\\xdf-\\xf6\\xf8-\\xff",Am="\\xac\\xb1\\xd7\\xf7",$m="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Om="\\u2000-\\u206f",Cm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",zu="A-Z\\xc0-\\xd6\\xd8-\\xde",Uu="\\ufe0e\\ufe0f",Wu=Am+$m+Om+Cm,Jo="['\u2019]",Im="["+us+"]",Bu="["+Wu+"]",cs="["+ku+"]",Vu="\\d+",Mm="["+Pu+"]",Gu="["+Hu+"]",Zu="[^"+us+Wu+Vu+Pu+Hu+zu+"]",Ko="\\ud83c[\\udffb-\\udfff]",Lm="(?:"+cs+"|"+Ko+")",qu="[^"+us+"]",Xo="(?:\\ud83c[\\udde6-\\uddff]){2}",jo="[\\ud800-\\udbff][\\udc00-\\udfff]",pr="["+zu+"]",Yu="\\u200d",Ju="(?:"+Gu+"|"+Zu+")",Dm="(?:"+pr+"|"+Zu+")",Ku="(?:"+Jo+"(?:d|ll|m|re|s|t|ve))?",Xu="(?:"+Jo+"(?:D|LL|M|RE|S|T|VE))?",ju=Lm+"?",Qu="["+Uu+"]?",Nm="(?:"+Yu+"(?:"+[qu,Xo,jo].join("|")+")"+Qu+ju+")*",Rm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Fm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tc=Qu+ju+Nm,km="(?:"+[Mm,Xo,jo].join("|")+")"+tc,Pm="(?:"+[qu+cs+"?",cs,Xo,jo,Im].join("|")+")",Hm=RegExp(Jo,"g"),zm=RegExp(cs,"g"),Qo=RegExp(Ko+"(?="+Ko+")|"+Pm+tc,"g"),Um=RegExp([pr+"?"+Gu+"+"+Ku+"(?="+[Bu,pr,"$"].join("|")+")",Dm+"+"+Xu+"(?="+[Bu,pr+Ju,"$"].join("|")+")",pr+"?"+Ju+"+"+Ku,pr+"+"+Xu,Fm,Rm,Vu,km].join("|"),"g"),Wm=RegExp("["+Yu+us+ku+Uu+"]"),Bm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Vm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Gm=-1,pt={};pt[Po]=pt[Ho]=pt[zo]=pt[Uo]=pt[Wo]=pt[Bo]=pt[Vo]=pt[Go]=pt[Zo]=!0,pt[fr]=pt[is]=pt[ei]=pt[Jr]=pt[hr]=pt[Kr]=pt[ss]=pt[os]=pt[pe]=pt[Xr]=pt[Me]=pt[jr]=pt[me]=pt[Qr]=pt[ti]=!1;var ht={};ht[fr]=ht[is]=ht[ei]=ht[hr]=ht[Jr]=ht[Kr]=ht[Po]=ht[Ho]=ht[zo]=ht[Uo]=ht[Wo]=ht[pe]=ht[Xr]=ht[Me]=ht[jr]=ht[me]=ht[Qr]=ht[as]=ht[Bo]=ht[Vo]=ht[Go]=ht[Zo]=!0,ht[ss]=ht[os]=ht[ti]=!1;var Zm={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},qm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ym={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Jm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Km=parseFloat,Xm=parseInt,ec=typeof global=="object"&&global&&global.Object===Object&&global,jm=typeof self=="object"&&self&&self.Object===Object&&self,Ct=ec||jm||Function("return this")(),ta=typeof Cr=="object"&&Cr&&!Cr.nodeType&&Cr,xn=ta&&typeof $i=="object"&&$i&&!$i.nodeType&&$i,nc=xn&&xn.exports===ta,ea=nc&&ec.process,ee=function(){try{var _=xn&&xn.require&&xn.require("util").types;return _||ea&&ea.binding&&ea.binding("util")}catch(E){}}(),rc=ee&&ee.isArrayBuffer,ic=ee&&ee.isDate,sc=ee&&ee.isMap,oc=ee&&ee.isRegExp,ac=ee&&ee.isSet,lc=ee&&ee.isTypedArray;function Yt(_,E,b){switch(b.length){case 0:return _.call(E);case 1:return _.call(E,b[0]);case 2:return _.call(E,b[0],b[1]);case 3:return _.call(E,b[0],b[1],b[2])}return _.apply(E,b)}function Qm(_,E,b,F){for(var G=-1,st=_==null?0:_.length;++G<st;){var At=_[G];E(F,At,b(At),_)}return F}function ne(_,E){for(var b=-1,F=_==null?0:_.length;++b<F&&E(_[b],b,_)!==!1;);return _}function tg(_,E){for(var b=_==null?0:_.length;b--&&E(_[b],b,_)!==!1;);return _}function uc(_,E){for(var b=-1,F=_==null?0:_.length;++b<F;)if(!E(_[b],b,_))return!1;return!0}function Ke(_,E){for(var b=-1,F=_==null?0:_.length,G=0,st=[];++b<F;){var At=_[b];E(At,b,_)&&(st[G++]=At)}return st}function ds(_,E){var b=_==null?0:_.length;return!!b&&mr(_,E,0)>-1}function na(_,E,b){for(var F=-1,G=_==null?0:_.length;++F<G;)if(b(E,_[F]))return!0;return!1}function gt(_,E){for(var b=-1,F=_==null?0:_.length,G=Array(F);++b<F;)G[b]=E(_[b],b,_);return G}function Xe(_,E){for(var b=-1,F=E.length,G=_.length;++b<F;)_[G+b]=E[b];return _}function ra(_,E,b,F){var G=-1,st=_==null?0:_.length;for(F&&st&&(b=_[++G]);++G<st;)b=E(b,_[G],G,_);return b}function eg(_,E,b,F){var G=_==null?0:_.length;for(F&&G&&(b=_[--G]);G--;)b=E(b,_[G],G,_);return b}function ia(_,E){for(var b=-1,F=_==null?0:_.length;++b<F;)if(E(_[b],b,_))return!0;return!1}var ng=sa("length");function rg(_){return _.split("")}function ig(_){return _.match(fm)||[]}function cc(_,E,b){var F;return b(_,function(G,st,At){if(E(G,st,At))return F=st,!1}),F}function fs(_,E,b,F){for(var G=_.length,st=b+(F?1:-1);F?st--:++st<G;)if(E(_[st],st,_))return st;return-1}function mr(_,E,b){return E===E?gg(_,E,b):fs(_,dc,b)}function sg(_,E,b,F){for(var G=b-1,st=_.length;++G<st;)if(F(_[G],E))return G;return-1}function dc(_){return _!==_}function fc(_,E){var b=_==null?0:_.length;return b?aa(_,E)/b:rs}function sa(_){return function(E){return E==null?i:E[_]}}function oa(_){return function(E){return _==null?i:_[E]}}function hc(_,E,b,F,G){return G(_,function(st,At,ct){b=F?(F=!1,st):E(b,st,At,ct)}),b}function og(_,E){var b=_.length;for(_.sort(E);b--;)_[b]=_[b].value;return _}function aa(_,E){for(var b,F=-1,G=_.length;++F<G;){var st=E(_[F]);st!==i&&(b=b===i?st:b+st)}return b}function la(_,E){for(var b=-1,F=Array(_);++b<_;)F[b]=E(b);return F}function ag(_,E){return gt(E,function(b){return[b,_[b]]})}function pc(_){return _&&_.slice(0,yc(_)+1).replace(Yo,"")}function Jt(_){return function(E){return _(E)}}function ua(_,E){return gt(E,function(b){return _[b]})}function ni(_,E){return _.has(E)}function mc(_,E){for(var b=-1,F=_.length;++b<F&&mr(E,_[b],0)>-1;);return b}function gc(_,E){for(var b=_.length;b--&&mr(E,_[b],0)>-1;);return b}function lg(_,E){for(var b=_.length,F=0;b--;)_[b]===E&&++F;return F}var ug=oa(Zm),cg=oa(qm);function dg(_){return"\\"+Jm[_]}function fg(_,E){return _==null?i:_[E]}function gr(_){return Wm.test(_)}function hg(_){return Bm.test(_)}function pg(_){for(var E,b=[];!(E=_.next()).done;)b.push(E.value);return b}function ca(_){var E=-1,b=Array(_.size);return _.forEach(function(F,G){b[++E]=[G,F]}),b}function vc(_,E){return function(b){return _(E(b))}}function je(_,E){for(var b=-1,F=_.length,G=0,st=[];++b<F;){var At=_[b];(At===E||At===m)&&(_[b]=m,st[G++]=b)}return st}function hs(_){var E=-1,b=Array(_.size);return _.forEach(function(F){b[++E]=F}),b}function mg(_){var E=-1,b=Array(_.size);return _.forEach(function(F){b[++E]=[F,F]}),b}function gg(_,E,b){for(var F=b-1,G=_.length;++F<G;)if(_[F]===E)return F;return-1}function vg(_,E,b){for(var F=b+1;F--;)if(_[F]===E)return F;return F}function vr(_){return gr(_)?_g(_):ng(_)}function ge(_){return gr(_)?xg(_):rg(_)}function yc(_){for(var E=_.length;E--&&lm.test(_.charAt(E)););return E}var yg=oa(Ym);function _g(_){for(var E=Qo.lastIndex=0;Qo.test(_);)++E;return E}function xg(_){return _.match(Qo)||[]}function wg(_){return _.match(Um)||[]}var bg=function _(E){E=E==null?Ct:Qe.defaults(Ct.Object(),E,Qe.pick(Ct,Vm));var b=E.Array,F=E.Date,G=E.Error,st=E.Function,At=E.Math,ct=E.Object,da=E.RegExp,Eg=E.String,re=E.TypeError,ps=b.prototype,Sg=st.prototype,yr=ct.prototype,ms=E["__core-js_shared__"],gs=Sg.toString,ut=yr.hasOwnProperty,Tg=0,_c=function(){var t=/[^.]+$/.exec(ms&&ms.keys&&ms.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),vs=yr.toString,Ag=gs.call(ct),$g=Ct._,Og=da("^"+gs.call(ut).replace(qo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ys=nc?E.Buffer:i,tn=E.Symbol,_s=E.Uint8Array,xc=ys?ys.allocUnsafe:i,xs=vc(ct.getPrototypeOf,ct),wc=ct.create,bc=yr.propertyIsEnumerable,ws=ps.splice,Ec=tn?tn.isConcatSpreadable:i,ri=tn?tn.iterator:i,wn=tn?tn.toStringTag:i,bs=function(){try{var t=An(ct,"defineProperty");return t({},"",{}),t}catch(n){}}(),Cg=E.clearTimeout!==Ct.clearTimeout&&E.clearTimeout,Ig=F&&F.now!==Ct.Date.now&&F.now,Mg=E.setTimeout!==Ct.setTimeout&&E.setTimeout,Es=At.ceil,Ss=At.floor,fa=ct.getOwnPropertySymbols,Lg=ys?ys.isBuffer:i,Sc=E.isFinite,Dg=ps.join,Ng=vc(ct.keys,ct),$t=At.max,Ft=At.min,Rg=F.now,Fg=E.parseInt,Tc=At.random,kg=ps.reverse,ha=An(E,"DataView"),ii=An(E,"Map"),pa=An(E,"Promise"),_r=An(E,"Set"),si=An(E,"WeakMap"),oi=An(ct,"create"),Ts=si&&new si,xr={},Pg=$n(ha),Hg=$n(ii),zg=$n(pa),Ug=$n(_r),Wg=$n(si),As=tn?tn.prototype:i,ai=As?As.valueOf:i,Ac=As?As.toString:i;function f(t){if(wt(t)&&!Z(t)&&!(t instanceof nt)){if(t instanceof ie)return t;if(ut.call(t,"__wrapped__"))return $d(t)}return new ie(t)}var wr=function(){function t(){}return function(n){if(!vt(n))return{};if(wc)return wc(n);t.prototype=n;var o=new t;return t.prototype=i,o}}();function $s(){}function ie(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=i}f.templateSettings={escape:nm,evaluate:rm,interpolate:Ru,variable:"",imports:{_:f}},f.prototype=$s.prototype,f.prototype.constructor=f,ie.prototype=wr($s.prototype),ie.prototype.constructor=ie;function nt(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Se,this.__views__=[]}function Bg(){var t=new nt(this.__wrapped__);return t.__actions__=Wt(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Wt(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Wt(this.__views__),t}function Vg(){if(this.__filtered__){var t=new nt(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Gg(){var t=this.__wrapped__.value(),n=this.__dir__,o=Z(t),l=n<0,d=o?t.length:0,h=r0(0,d,this.__views__),g=h.start,y=h.end,w=y-g,S=l?y:g-1,A=this.__iteratees__,C=A.length,M=0,k=Ft(w,this.__takeCount__);if(!o||!l&&d==w&&k==w)return Kc(t,this.__actions__);var U=[];t:for(;w--&&M<k;){S+=n;for(var J=-1,W=t[S];++J<C;){var tt=A[J],rt=tt.iteratee,jt=tt.type,Ut=rt(W);if(jt==Hp)W=Ut;else if(!Ut){if(jt==Iu)continue t;break t}}U[M++]=W}return U}nt.prototype=wr($s.prototype),nt.prototype.constructor=nt;function bn(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var l=t[n];this.set(l[0],l[1])}}function Zg(){this.__data__=oi?oi(null):{},this.size=0}function qg(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}function Yg(t){var n=this.__data__;if(oi){var o=n[t];return o===u?i:o}return ut.call(n,t)?n[t]:i}function Jg(t){var n=this.__data__;return oi?n[t]!==i:ut.call(n,t)}function Kg(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=oi&&n===i?u:n,this}bn.prototype.clear=Zg,bn.prototype.delete=qg,bn.prototype.get=Yg,bn.prototype.has=Jg,bn.prototype.set=Kg;function Le(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var l=t[n];this.set(l[0],l[1])}}function Xg(){this.__data__=[],this.size=0}function jg(t){var n=this.__data__,o=Os(n,t);if(o<0)return!1;var l=n.length-1;return o==l?n.pop():ws.call(n,o,1),--this.size,!0}function Qg(t){var n=this.__data__,o=Os(n,t);return o<0?i:n[o][1]}function tv(t){return Os(this.__data__,t)>-1}function ev(t,n){var o=this.__data__,l=Os(o,t);return l<0?(++this.size,o.push([t,n])):o[l][1]=n,this}Le.prototype.clear=Xg,Le.prototype.delete=jg,Le.prototype.get=Qg,Le.prototype.has=tv,Le.prototype.set=ev;function De(t){var n=-1,o=t==null?0:t.length;for(this.clear();++n<o;){var l=t[n];this.set(l[0],l[1])}}function nv(){this.size=0,this.__data__={hash:new bn,map:new(ii||Le),string:new bn}}function rv(t){var n=zs(this,t).delete(t);return this.size-=n?1:0,n}function iv(t){return zs(this,t).get(t)}function sv(t){return zs(this,t).has(t)}function ov(t,n){var o=zs(this,t),l=o.size;return o.set(t,n),this.size+=o.size==l?0:1,this}De.prototype.clear=nv,De.prototype.delete=rv,De.prototype.get=iv,De.prototype.has=sv,De.prototype.set=ov;function En(t){var n=-1,o=t==null?0:t.length;for(this.__data__=new De;++n<o;)this.add(t[n])}function av(t){return this.__data__.set(t,u),this}function lv(t){return this.__data__.has(t)}En.prototype.add=En.prototype.push=av,En.prototype.has=lv;function ve(t){var n=this.__data__=new Le(t);this.size=n.size}function uv(){this.__data__=new Le,this.size=0}function cv(t){var n=this.__data__,o=n.delete(t);return this.size=n.size,o}function dv(t){return this.__data__.get(t)}function fv(t){return this.__data__.has(t)}function hv(t,n){var o=this.__data__;if(o instanceof Le){var l=o.__data__;if(!ii||l.length<r-1)return l.push([t,n]),this.size=++o.size,this;o=this.__data__=new De(l)}return o.set(t,n),this.size=o.size,this}ve.prototype.clear=uv,ve.prototype.delete=cv,ve.prototype.get=dv,ve.prototype.has=fv,ve.prototype.set=hv;function $c(t,n){var o=Z(t),l=!o&&On(t),d=!o&&!l&&on(t),h=!o&&!l&&!d&&Tr(t),g=o||l||d||h,y=g?la(t.length,Eg):[],w=y.length;for(var S in t)(n||ut.call(t,S))&&!(g&&(S=="length"||d&&(S=="offset"||S=="parent")||h&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||ke(S,w)))&&y.push(S);return y}function Oc(t){var n=t.length;return n?t[Ta(0,n-1)]:i}function pv(t,n){return Us(Wt(t),Sn(n,0,t.length))}function mv(t){return Us(Wt(t))}function ma(t,n,o){(o!==i&&!ye(t[n],o)||o===i&&!(n in t))&&Ne(t,n,o)}function li(t,n,o){var l=t[n];(!(ut.call(t,n)&&ye(l,o))||o===i&&!(n in t))&&Ne(t,n,o)}function Os(t,n){for(var o=t.length;o--;)if(ye(t[o][0],n))return o;return-1}function gv(t,n,o,l){return en(t,function(d,h,g){n(l,d,o(d),g)}),l}function Cc(t,n){return t&&Ae(n,It(n),t)}function vv(t,n){return t&&Ae(n,Vt(n),t)}function Ne(t,n,o){n=="__proto__"&&bs?bs(t,n,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[n]=o}function ga(t,n){for(var o=-1,l=n.length,d=b(l),h=t==null;++o<l;)d[o]=h?i:Ka(t,n[o]);return d}function Sn(t,n,o){return t===t&&(o!==i&&(t=t<=o?t:o),n!==i&&(t=t>=n?t:n)),t}function se(t,n,o,l,d,h){var g,y=n&x,w=n&$,S=n&T;if(o&&(g=d?o(t,l,d,h):o(t)),g!==i)return g;if(!vt(t))return t;var A=Z(t);if(A){if(g=s0(t),!y)return Wt(t,g)}else{var C=kt(t),M=C==os||C==Mu;if(on(t))return Qc(t,y);if(C==Me||C==fr||M&&!d){if(g=w||M?{}:yd(t),!y)return w?Yv(t,vv(g,t)):qv(t,Cc(g,t))}else{if(!ht[C])return d?t:{};g=o0(t,C,y)}}h||(h=new ve);var k=h.get(t);if(k)return k;h.set(t,g),qd(t)?t.forEach(function(W){g.add(se(W,n,o,W,t,h))}):Gd(t)&&t.forEach(function(W,tt){g.set(tt,se(W,n,o,tt,t,h))});var U=S?w?Fa:Ra:w?Vt:It,J=A?i:U(t);return ne(J||t,function(W,tt){J&&(tt=W,W=t[tt]),li(g,tt,se(W,n,o,tt,t,h))}),g}function yv(t){var n=It(t);return function(o){return Ic(o,t,n)}}function Ic(t,n,o){var l=o.length;if(t==null)return!l;for(t=ct(t);l--;){var d=o[l],h=n[d],g=t[d];if(g===i&&!(d in t)||!h(g))return!1}return!0}function Mc(t,n,o){if(typeof t!="function")throw new re(a);return mi(function(){t.apply(i,o)},n)}function ui(t,n,o,l){var d=-1,h=ds,g=!0,y=t.length,w=[],S=n.length;if(!y)return w;o&&(n=gt(n,Jt(o))),l?(h=na,g=!1):n.length>=r&&(h=ni,g=!1,n=new En(n));t:for(;++d<y;){var A=t[d],C=o==null?A:o(A);if(A=l||A!==0?A:0,g&&C===C){for(var M=S;M--;)if(n[M]===C)continue t;w.push(A)}else h(n,C,l)||w.push(A)}return w}var en=id(Te),Lc=id(ya,!0);function _v(t,n){var o=!0;return en(t,function(l,d,h){return o=!!n(l,d,h),o}),o}function Cs(t,n,o){for(var l=-1,d=t.length;++l<d;){var h=t[l],g=n(h);if(g!=null&&(y===i?g===g&&!Xt(g):o(g,y)))var y=g,w=h}return w}function xv(t,n,o,l){var d=t.length;for(o=q(o),o<0&&(o=-o>d?0:d+o),l=l===i||l>d?d:q(l),l<0&&(l+=d),l=o>l?0:Jd(l);o<l;)t[o++]=n;return t}function Dc(t,n){var o=[];return en(t,function(l,d,h){n(l,d,h)&&o.push(l)}),o}function Rt(t,n,o,l,d){var h=-1,g=t.length;for(o||(o=l0),d||(d=[]);++h<g;){var y=t[h];n>0&&o(y)?n>1?Rt(y,n-1,o,l,d):Xe(d,y):l||(d[d.length]=y)}return d}var va=sd(),Nc=sd(!0);function Te(t,n){return t&&va(t,n,It)}function ya(t,n){return t&&Nc(t,n,It)}function Is(t,n){return Ke(n,function(o){return Pe(t[o])})}function Tn(t,n){n=rn(n,t);for(var o=0,l=n.length;t!=null&&o<l;)t=t[$e(n[o++])];return o&&o==l?t:i}function Rc(t,n,o){var l=n(t);return Z(t)?l:Xe(l,o(t))}function Ht(t){return t==null?t===i?Jp:qp:wn&&wn in ct(t)?n0(t):m0(t)}function _a(t,n){return t>n}function wv(t,n){return t!=null&&ut.call(t,n)}function bv(t,n){return t!=null&&n in ct(t)}function Ev(t,n,o){return t>=Ft(n,o)&&t<$t(n,o)}function xa(t,n,o){for(var l=o?na:ds,d=t[0].length,h=t.length,g=h,y=b(h),w=1/0,S=[];g--;){var A=t[g];g&&n&&(A=gt(A,Jt(n))),w=Ft(A.length,w),y[g]=!o&&(n||d>=120&&A.length>=120)?new En(g&&A):i}A=t[0];var C=-1,M=y[0];t:for(;++C<d&&S.length<w;){var k=A[C],U=n?n(k):k;if(k=o||k!==0?k:0,!(M?ni(M,U):l(S,U,o))){for(g=h;--g;){var J=y[g];if(!(J?ni(J,U):l(t[g],U,o)))continue t}M&&M.push(U),S.push(k)}}return S}function Sv(t,n,o,l){return Te(t,function(d,h,g){n(l,o(d),h,g)}),l}function ci(t,n,o){n=rn(n,t),t=bd(t,n);var l=t==null?t:t[$e(ae(n))];return l==null?i:Yt(l,t,o)}function Fc(t){return wt(t)&&Ht(t)==fr}function Tv(t){return wt(t)&&Ht(t)==ei}function Av(t){return wt(t)&&Ht(t)==Kr}function di(t,n,o,l,d){return t===n?!0:t==null||n==null||!wt(t)&&!wt(n)?t!==t&&n!==n:$v(t,n,o,l,di,d)}function $v(t,n,o,l,d,h){var g=Z(t),y=Z(n),w=g?is:kt(t),S=y?is:kt(n);w=w==fr?Me:w,S=S==fr?Me:S;var A=w==Me,C=S==Me,M=w==S;if(M&&on(t)){if(!on(n))return!1;g=!0,A=!1}if(M&&!A)return h||(h=new ve),g||Tr(t)?md(t,n,o,l,d,h):t0(t,n,w,o,l,d,h);if(!(o&R)){var k=A&&ut.call(t,"__wrapped__"),U=C&&ut.call(n,"__wrapped__");if(k||U){var J=k?t.value():t,W=U?n.value():n;return h||(h=new ve),d(J,W,o,l,h)}}return M?(h||(h=new ve),e0(t,n,o,l,d,h)):!1}function Ov(t){return wt(t)&&kt(t)==pe}function wa(t,n,o,l){var d=o.length,h=d,g=!l;if(t==null)return!h;for(t=ct(t);d--;){var y=o[d];if(g&&y[2]?y[1]!==t[y[0]]:!(y[0]in t))return!1}for(;++d<h;){y=o[d];var w=y[0],S=t[w],A=y[1];if(g&&y[2]){if(S===i&&!(w in t))return!1}else{var C=new ve;if(l)var M=l(S,A,w,t,n,C);if(!(M===i?di(A,S,R|I,l,C):M))return!1}}return!0}function kc(t){if(!vt(t)||c0(t))return!1;var n=Pe(t)?Og:ym;return n.test($n(t))}function Cv(t){return wt(t)&&Ht(t)==jr}function Iv(t){return wt(t)&&kt(t)==me}function Mv(t){return wt(t)&&qs(t.length)&&!!pt[Ht(t)]}function Pc(t){return typeof t=="function"?t:t==null?Gt:typeof t=="object"?Z(t)?Uc(t[0],t[1]):zc(t):af(t)}function ba(t){if(!pi(t))return Ng(t);var n=[];for(var o in ct(t))ut.call(t,o)&&o!="constructor"&&n.push(o);return n}function Lv(t){if(!vt(t))return p0(t);var n=pi(t),o=[];for(var l in t)l=="constructor"&&(n||!ut.call(t,l))||o.push(l);return o}function Ea(t,n){return t<n}function Hc(t,n){var o=-1,l=Bt(t)?b(t.length):[];return en(t,function(d,h,g){l[++o]=n(d,h,g)}),l}function zc(t){var n=Pa(t);return n.length==1&&n[0][2]?xd(n[0][0],n[0][1]):function(o){return o===t||wa(o,t,n)}}function Uc(t,n){return za(t)&&_d(n)?xd($e(t),n):function(o){var l=Ka(o,t);return l===i&&l===n?Xa(o,t):di(n,l,R|I)}}function Ms(t,n,o,l,d){t!==n&&va(n,function(h,g){if(d||(d=new ve),vt(h))Dv(t,n,g,o,Ms,l,d);else{var y=l?l(Wa(t,g),h,g+"",t,n,d):i;y===i&&(y=h),ma(t,g,y)}},Vt)}function Dv(t,n,o,l,d,h,g){var y=Wa(t,o),w=Wa(n,o),S=g.get(w);if(S){ma(t,o,S);return}var A=h?h(y,w,o+"",t,n,g):i,C=A===i;if(C){var M=Z(w),k=!M&&on(w),U=!M&&!k&&Tr(w);A=w,M||k||U?Z(y)?A=y:bt(y)?A=Wt(y):k?(C=!1,A=Qc(w,!0)):U?(C=!1,A=td(w,!0)):A=[]:gi(w)||On(w)?(A=y,On(y)?A=Kd(y):(!vt(y)||Pe(y))&&(A=yd(w))):C=!1}C&&(g.set(w,A),d(A,w,l,h,g),g.delete(w)),ma(t,o,A)}function Wc(t,n){var o=t.length;if(!!o)return n+=n<0?o:0,ke(n,o)?t[n]:i}function Bc(t,n,o){n.length?n=gt(n,function(h){return Z(h)?function(g){return Tn(g,h.length===1?h[0]:h)}:h}):n=[Gt];var l=-1;n=gt(n,Jt(z()));var d=Hc(t,function(h,g,y){var w=gt(n,function(S){return S(h)});return{criteria:w,index:++l,value:h}});return og(d,function(h,g){return Zv(h,g,o)})}function Nv(t,n){return Vc(t,n,function(o,l){return Xa(t,l)})}function Vc(t,n,o){for(var l=-1,d=n.length,h={};++l<d;){var g=n[l],y=Tn(t,g);o(y,g)&&fi(h,rn(g,t),y)}return h}function Rv(t){return function(n){return Tn(n,t)}}function Sa(t,n,o,l){var d=l?sg:mr,h=-1,g=n.length,y=t;for(t===n&&(n=Wt(n)),o&&(y=gt(t,Jt(o)));++h<g;)for(var w=0,S=n[h],A=o?o(S):S;(w=d(y,A,w,l))>-1;)y!==t&&ws.call(y,w,1),ws.call(t,w,1);return t}function Gc(t,n){for(var o=t?n.length:0,l=o-1;o--;){var d=n[o];if(o==l||d!==h){var h=d;ke(d)?ws.call(t,d,1):Oa(t,d)}}return t}function Ta(t,n){return t+Ss(Tc()*(n-t+1))}function Fv(t,n,o,l){for(var d=-1,h=$t(Es((n-t)/(o||1)),0),g=b(h);h--;)g[l?h:++d]=t,t+=o;return g}function Aa(t,n){var o="";if(!t||n<1||n>Je)return o;do n%2&&(o+=t),n=Ss(n/2),n&&(t+=t);while(n);return o}function X(t,n){return Ba(wd(t,n,Gt),t+"")}function kv(t){return Oc(Ar(t))}function Pv(t,n){var o=Ar(t);return Us(o,Sn(n,0,o.length))}function fi(t,n,o,l){if(!vt(t))return t;n=rn(n,t);for(var d=-1,h=n.length,g=h-1,y=t;y!=null&&++d<h;){var w=$e(n[d]),S=o;if(w==="__proto__"||w==="constructor"||w==="prototype")return t;if(d!=g){var A=y[w];S=l?l(A,w,y):i,S===i&&(S=vt(A)?A:ke(n[d+1])?[]:{})}li(y,w,S),y=y[w]}return t}var Zc=Ts?function(t,n){return Ts.set(t,n),t}:Gt,Hv=bs?function(t,n){return bs(t,"toString",{configurable:!0,enumerable:!1,value:Qa(n),writable:!0})}:Gt;function zv(t){return Us(Ar(t))}function oe(t,n,o){var l=-1,d=t.length;n<0&&(n=-n>d?0:d+n),o=o>d?d:o,o<0&&(o+=d),d=n>o?0:o-n>>>0,n>>>=0;for(var h=b(d);++l<d;)h[l]=t[l+n];return h}function Uv(t,n){var o;return en(t,function(l,d,h){return o=n(l,d,h),!o}),!!o}function Ls(t,n,o){var l=0,d=t==null?l:t.length;if(typeof n=="number"&&n===n&&d<=Bp){for(;l<d;){var h=l+d>>>1,g=t[h];g!==null&&!Xt(g)&&(o?g<=n:g<n)?l=h+1:d=h}return d}return $a(t,n,Gt,o)}function $a(t,n,o,l){var d=0,h=t==null?0:t.length;if(h===0)return 0;n=o(n);for(var g=n!==n,y=n===null,w=Xt(n),S=n===i;d<h;){var A=Ss((d+h)/2),C=o(t[A]),M=C!==i,k=C===null,U=C===C,J=Xt(C);if(g)var W=l||U;else S?W=U&&(l||M):y?W=U&&M&&(l||!k):w?W=U&&M&&!k&&(l||!J):k||J?W=!1:W=l?C<=n:C<n;W?d=A+1:h=A}return Ft(h,Wp)}function qc(t,n){for(var o=-1,l=t.length,d=0,h=[];++o<l;){var g=t[o],y=n?n(g):g;if(!o||!ye(y,w)){var w=y;h[d++]=g===0?0:g}}return h}function Yc(t){return typeof t=="number"?t:Xt(t)?rs:+t}function Kt(t){if(typeof t=="string")return t;if(Z(t))return gt(t,Kt)+"";if(Xt(t))return Ac?Ac.call(t):"";var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function nn(t,n,o){var l=-1,d=ds,h=t.length,g=!0,y=[],w=y;if(o)g=!1,d=na;else if(h>=r){var S=n?null:jv(t);if(S)return hs(S);g=!1,d=ni,w=new En}else w=n?[]:y;t:for(;++l<h;){var A=t[l],C=n?n(A):A;if(A=o||A!==0?A:0,g&&C===C){for(var M=w.length;M--;)if(w[M]===C)continue t;n&&w.push(C),y.push(A)}else d(w,C,o)||(w!==y&&w.push(C),y.push(A))}return y}function Oa(t,n){return n=rn(n,t),t=bd(t,n),t==null||delete t[$e(ae(n))]}function Jc(t,n,o,l){return fi(t,n,o(Tn(t,n)),l)}function Ds(t,n,o,l){for(var d=t.length,h=l?d:-1;(l?h--:++h<d)&&n(t[h],h,t););return o?oe(t,l?0:h,l?h+1:d):oe(t,l?h+1:0,l?d:h)}function Kc(t,n){var o=t;return o instanceof nt&&(o=o.value()),ra(n,function(l,d){return d.func.apply(d.thisArg,Xe([l],d.args))},o)}function Ca(t,n,o){var l=t.length;if(l<2)return l?nn(t[0]):[];for(var d=-1,h=b(l);++d<l;)for(var g=t[d],y=-1;++y<l;)y!=d&&(h[d]=ui(h[d]||g,t[y],n,o));return nn(Rt(h,1),n,o)}function Xc(t,n,o){for(var l=-1,d=t.length,h=n.length,g={};++l<d;){var y=l<h?n[l]:i;o(g,t[l],y)}return g}function Ia(t){return bt(t)?t:[]}function Ma(t){return typeof t=="function"?t:Gt}function rn(t,n){return Z(t)?t:za(t,n)?[t]:Ad(at(t))}var Wv=X;function sn(t,n,o){var l=t.length;return o=o===i?l:o,!n&&o>=l?t:oe(t,n,o)}var jc=Cg||function(t){return Ct.clearTimeout(t)};function Qc(t,n){if(n)return t.slice();var o=t.length,l=xc?xc(o):new t.constructor(o);return t.copy(l),l}function La(t){var n=new t.constructor(t.byteLength);return new _s(n).set(new _s(t)),n}function Bv(t,n){var o=n?La(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)}function Vv(t){var n=new t.constructor(t.source,Fu.exec(t));return n.lastIndex=t.lastIndex,n}function Gv(t){return ai?ct(ai.call(t)):{}}function td(t,n){var o=n?La(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)}function ed(t,n){if(t!==n){var o=t!==i,l=t===null,d=t===t,h=Xt(t),g=n!==i,y=n===null,w=n===n,S=Xt(n);if(!y&&!S&&!h&&t>n||h&&g&&w&&!y&&!S||l&&g&&w||!o&&w||!d)return 1;if(!l&&!h&&!S&&t<n||S&&o&&d&&!l&&!h||y&&o&&d||!g&&d||!w)return-1}return 0}function Zv(t,n,o){for(var l=-1,d=t.criteria,h=n.criteria,g=d.length,y=o.length;++l<g;){var w=ed(d[l],h[l]);if(w){if(l>=y)return w;var S=o[l];return w*(S=="desc"?-1:1)}}return t.index-n.index}function nd(t,n,o,l){for(var d=-1,h=t.length,g=o.length,y=-1,w=n.length,S=$t(h-g,0),A=b(w+S),C=!l;++y<w;)A[y]=n[y];for(;++d<g;)(C||d<h)&&(A[o[d]]=t[d]);for(;S--;)A[y++]=t[d++];return A}function rd(t,n,o,l){for(var d=-1,h=t.length,g=-1,y=o.length,w=-1,S=n.length,A=$t(h-y,0),C=b(A+S),M=!l;++d<A;)C[d]=t[d];for(var k=d;++w<S;)C[k+w]=n[w];for(;++g<y;)(M||d<h)&&(C[k+o[g]]=t[d++]);return C}function Wt(t,n){var o=-1,l=t.length;for(n||(n=b(l));++o<l;)n[o]=t[o];return n}function Ae(t,n,o,l){var d=!o;o||(o={});for(var h=-1,g=n.length;++h<g;){var y=n[h],w=l?l(o[y],t[y],y,o,t):i;w===i&&(w=t[y]),d?Ne(o,y,w):li(o,y,w)}return o}function qv(t,n){return Ae(t,Ha(t),n)}function Yv(t,n){return Ae(t,gd(t),n)}function Ns(t,n){return function(o,l){var d=Z(o)?Qm:gv,h=n?n():{};return d(o,t,z(l,2),h)}}function br(t){return X(function(n,o){var l=-1,d=o.length,h=d>1?o[d-1]:i,g=d>2?o[2]:i;for(h=t.length>3&&typeof h=="function"?(d--,h):i,g&&zt(o[0],o[1],g)&&(h=d<3?i:h,d=1),n=ct(n);++l<d;){var y=o[l];y&&t(n,y,l,h)}return n})}function id(t,n){return function(o,l){if(o==null)return o;if(!Bt(o))return t(o,l);for(var d=o.length,h=n?d:-1,g=ct(o);(n?h--:++h<d)&&l(g[h],h,g)!==!1;);return o}}function sd(t){return function(n,o,l){for(var d=-1,h=ct(n),g=l(n),y=g.length;y--;){var w=g[t?y:++d];if(o(h[w],w,h)===!1)break}return n}}function Jv(t,n,o){var l=n&N,d=hi(t);function h(){var g=this&&this!==Ct&&this instanceof h?d:t;return g.apply(l?o:this,arguments)}return h}function od(t){return function(n){n=at(n);var o=gr(n)?ge(n):i,l=o?o[0]:n.charAt(0),d=o?sn(o,1).join(""):n.slice(1);return l[t]()+d}}function Er(t){return function(n){return ra(sf(rf(n).replace(Hm,"")),t,"")}}function hi(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var o=wr(t.prototype),l=t.apply(o,n);return vt(l)?l:o}}function Kv(t,n,o){var l=hi(t);function d(){for(var h=arguments.length,g=b(h),y=h,w=Sr(d);y--;)g[y]=arguments[y];var S=h<3&&g[0]!==w&&g[h-1]!==w?[]:je(g,w);if(h-=S.length,h<o)return dd(t,n,Rs,d.placeholder,i,g,S,i,i,o-h);var A=this&&this!==Ct&&this instanceof d?l:t;return Yt(A,this,g)}return d}function ad(t){return function(n,o,l){var d=ct(n);if(!Bt(n)){var h=z(o,3);n=It(n),o=function(y){return h(d[y],y,d)}}var g=t(n,o,l);return g>-1?d[h?n[g]:g]:i}}function ld(t){return Fe(function(n){var o=n.length,l=o,d=ie.prototype.thru;for(t&&n.reverse();l--;){var h=n[l];if(typeof h!="function")throw new re(a);if(d&&!g&&Hs(h)=="wrapper")var g=new ie([],!0)}for(l=g?l:o;++l<o;){h=n[l];var y=Hs(h),w=y=="wrapper"?ka(h):i;w&&Ua(w[0])&&w[1]==(he|Tt|qt|gn)&&!w[4].length&&w[9]==1?g=g[Hs(w[0])].apply(g,w[3]):g=h.length==1&&Ua(h)?g[y]():g.thru(h)}return function(){var S=arguments,A=S[0];if(g&&S.length==1&&Z(A))return g.plant(A).value();for(var C=0,M=o?n[C].apply(this,S):A;++C<o;)M=n[C].call(this,M);return M}})}function Rs(t,n,o,l,d,h,g,y,w,S){var A=n&he,C=n&N,M=n&St,k=n&(Tt|fe),U=n&vn,J=M?i:hi(t);function W(){for(var tt=arguments.length,rt=b(tt),jt=tt;jt--;)rt[jt]=arguments[jt];if(k)var Ut=Sr(W),Qt=lg(rt,Ut);if(l&&(rt=nd(rt,l,d,k)),h&&(rt=rd(rt,h,g,k)),tt-=Qt,k&&tt<S){var Et=je(rt,Ut);return dd(t,n,Rs,W.placeholder,o,rt,Et,y,w,S-tt)}var _e=C?o:this,ze=M?_e[t]:t;return tt=rt.length,y?rt=g0(rt,y):U&&tt>1&&rt.reverse(),A&&w<tt&&(rt.length=w),this&&this!==Ct&&this instanceof W&&(ze=J||hi(ze)),ze.apply(_e,rt)}return W}function ud(t,n){return function(o,l){return Sv(o,t,n(l),{})}}function Fs(t,n){return function(o,l){var d;if(o===i&&l===i)return n;if(o!==i&&(d=o),l!==i){if(d===i)return l;typeof o=="string"||typeof l=="string"?(o=Kt(o),l=Kt(l)):(o=Yc(o),l=Yc(l)),d=t(o,l)}return d}}function Da(t){return Fe(function(n){return n=gt(n,Jt(z())),X(function(o){var l=this;return t(n,function(d){return Yt(d,l,o)})})})}function ks(t,n){n=n===i?" ":Kt(n);var o=n.length;if(o<2)return o?Aa(n,t):n;var l=Aa(n,Es(t/vr(n)));return gr(n)?sn(ge(l),0,t).join(""):l.slice(0,t)}function Xv(t,n,o,l){var d=n&N,h=hi(t);function g(){for(var y=-1,w=arguments.length,S=-1,A=l.length,C=b(A+w),M=this&&this!==Ct&&this instanceof g?h:t;++S<A;)C[S]=l[S];for(;w--;)C[S++]=arguments[++y];return Yt(M,d?o:this,C)}return g}function cd(t){return function(n,o,l){return l&&typeof l!="number"&&zt(n,o,l)&&(o=l=i),n=He(n),o===i?(o=n,n=0):o=He(o),l=l===i?n<o?1:-1:He(l),Fv(n,o,l,t)}}function Ps(t){return function(n,o){return typeof n=="string"&&typeof o=="string"||(n=le(n),o=le(o)),t(n,o)}}function dd(t,n,o,l,d,h,g,y,w,S){var A=n&Tt,C=A?g:i,M=A?i:g,k=A?h:i,U=A?i:h;n|=A?qt:Ye,n&=~(A?Ye:qt),n&mt||(n&=~(N|St));var J=[t,n,d,k,C,U,M,y,w,S],W=o.apply(i,J);return Ua(t)&&Ed(W,J),W.placeholder=l,Sd(W,t,n)}function Na(t){var n=At[t];return function(o,l){if(o=le(o),l=l==null?0:Ft(q(l),292),l&&Sc(o)){var d=(at(o)+"e").split("e"),h=n(d[0]+"e"+(+d[1]+l));return d=(at(h)+"e").split("e"),+(d[0]+"e"+(+d[1]-l))}return n(o)}}var jv=_r&&1/hs(new _r([,-0]))[1]==_n?function(t){return new _r(t)}:nl;function fd(t){return function(n){var o=kt(n);return o==pe?ca(n):o==me?mg(n):ag(n,t(n))}}function Re(t,n,o,l,d,h,g,y){var w=n&St;if(!w&&typeof t!="function")throw new re(a);var S=l?l.length:0;if(S||(n&=~(qt|Ye),l=d=i),g=g===i?g:$t(q(g),0),y=y===i?y:q(y),S-=d?d.length:0,n&Ye){var A=l,C=d;l=d=i}var M=w?i:ka(t),k=[t,n,o,l,d,A,C,h,g,y];if(M&&h0(k,M),t=k[0],n=k[1],o=k[2],l=k[3],d=k[4],y=k[9]=k[9]===i?w?0:t.length:$t(k[9]-S,0),!y&&n&(Tt|fe)&&(n&=~(Tt|fe)),!n||n==N)var U=Jv(t,n,o);else n==Tt||n==fe?U=Kv(t,n,y):(n==qt||n==(N|qt))&&!d.length?U=Xv(t,n,o,l):U=Rs.apply(i,k);var J=M?Zc:Ed;return Sd(J(U,k),t,n)}function hd(t,n,o,l){return t===i||ye(t,yr[o])&&!ut.call(l,o)?n:t}function pd(t,n,o,l,d,h){return vt(t)&&vt(n)&&(h.set(n,t),Ms(t,n,i,pd,h),h.delete(n)),t}function Qv(t){return gi(t)?i:t}function md(t,n,o,l,d,h){var g=o&R,y=t.length,w=n.length;if(y!=w&&!(g&&w>y))return!1;var S=h.get(t),A=h.get(n);if(S&&A)return S==n&&A==t;var C=-1,M=!0,k=o&I?new En:i;for(h.set(t,n),h.set(n,t);++C<y;){var U=t[C],J=n[C];if(l)var W=g?l(J,U,C,n,t,h):l(U,J,C,t,n,h);if(W!==i){if(W)continue;M=!1;break}if(k){if(!ia(n,function(tt,rt){if(!ni(k,rt)&&(U===tt||d(U,tt,o,l,h)))return k.push(rt)})){M=!1;break}}else if(!(U===J||d(U,J,o,l,h))){M=!1;break}}return h.delete(t),h.delete(n),M}function t0(t,n,o,l,d,h,g){switch(o){case hr:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case ei:return!(t.byteLength!=n.byteLength||!h(new _s(t),new _s(n)));case Jr:case Kr:case Xr:return ye(+t,+n);case ss:return t.name==n.name&&t.message==n.message;case jr:case Qr:return t==n+"";case pe:var y=ca;case me:var w=l&R;if(y||(y=hs),t.size!=n.size&&!w)return!1;var S=g.get(t);if(S)return S==n;l|=I,g.set(t,n);var A=md(y(t),y(n),l,d,h,g);return g.delete(t),A;case as:if(ai)return ai.call(t)==ai.call(n)}return!1}function e0(t,n,o,l,d,h){var g=o&R,y=Ra(t),w=y.length,S=Ra(n),A=S.length;if(w!=A&&!g)return!1;for(var C=w;C--;){var M=y[C];if(!(g?M in n:ut.call(n,M)))return!1}var k=h.get(t),U=h.get(n);if(k&&U)return k==n&&U==t;var J=!0;h.set(t,n),h.set(n,t);for(var W=g;++C<w;){M=y[C];var tt=t[M],rt=n[M];if(l)var jt=g?l(rt,tt,M,n,t,h):l(tt,rt,M,t,n,h);if(!(jt===i?tt===rt||d(tt,rt,o,l,h):jt)){J=!1;break}W||(W=M=="constructor")}if(J&&!W){var Ut=t.constructor,Qt=n.constructor;Ut!=Qt&&"constructor"in t&&"constructor"in n&&!(typeof Ut=="function"&&Ut instanceof Ut&&typeof Qt=="function"&&Qt instanceof Qt)&&(J=!1)}return h.delete(t),h.delete(n),J}function Fe(t){return Ba(wd(t,i,Id),t+"")}function Ra(t){return Rc(t,It,Ha)}function Fa(t){return Rc(t,Vt,gd)}var ka=Ts?function(t){return Ts.get(t)}:nl;function Hs(t){for(var n=t.name+"",o=xr[n],l=ut.call(xr,n)?o.length:0;l--;){var d=o[l],h=d.func;if(h==null||h==t)return d.name}return n}function Sr(t){var n=ut.call(f,"placeholder")?f:t;return n.placeholder}function z(){var t=f.iteratee||tl;return t=t===tl?Pc:t,arguments.length?t(arguments[0],arguments[1]):t}function zs(t,n){var o=t.__data__;return u0(n)?o[typeof n=="string"?"string":"hash"]:o.map}function Pa(t){for(var n=It(t),o=n.length;o--;){var l=n[o],d=t[l];n[o]=[l,d,_d(d)]}return n}function An(t,n){var o=fg(t,n);return kc(o)?o:i}function n0(t){var n=ut.call(t,wn),o=t[wn];try{t[wn]=i;var l=!0}catch(h){}var d=vs.call(t);return l&&(n?t[wn]=o:delete t[wn]),d}var Ha=fa?function(t){return t==null?[]:(t=ct(t),Ke(fa(t),function(n){return bc.call(t,n)}))}:rl,gd=fa?function(t){for(var n=[];t;)Xe(n,Ha(t)),t=xs(t);return n}:rl,kt=Ht;(ha&&kt(new ha(new ArrayBuffer(1)))!=hr||ii&&kt(new ii)!=pe||pa&&kt(pa.resolve())!=Lu||_r&&kt(new _r)!=me||si&&kt(new si)!=ti)&&(kt=function(t){var n=Ht(t),o=n==Me?t.constructor:i,l=o?$n(o):"";if(l)switch(l){case Pg:return hr;case Hg:return pe;case zg:return Lu;case Ug:return me;case Wg:return ti}return n});function r0(t,n,o){for(var l=-1,d=o.length;++l<d;){var h=o[l],g=h.size;switch(h.type){case"drop":t+=g;break;case"dropRight":n-=g;break;case"take":n=Ft(n,t+g);break;case"takeRight":t=$t(t,n-g);break}}return{start:t,end:n}}function i0(t){var n=t.match(cm);return n?n[1].split(dm):[]}function vd(t,n,o){n=rn(n,t);for(var l=-1,d=n.length,h=!1;++l<d;){var g=$e(n[l]);if(!(h=t!=null&&o(t,g)))break;t=t[g]}return h||++l!=d?h:(d=t==null?0:t.length,!!d&&qs(d)&&ke(g,d)&&(Z(t)||On(t)))}function s0(t){var n=t.length,o=new t.constructor(n);return n&&typeof t[0]=="string"&&ut.call(t,"index")&&(o.index=t.index,o.input=t.input),o}function yd(t){return typeof t.constructor=="function"&&!pi(t)?wr(xs(t)):{}}function o0(t,n,o){var l=t.constructor;switch(n){case ei:return La(t);case Jr:case Kr:return new l(+t);case hr:return Bv(t,o);case Po:case Ho:case zo:case Uo:case Wo:case Bo:case Vo:case Go:case Zo:return td(t,o);case pe:return new l;case Xr:case Qr:return new l(t);case jr:return Vv(t);case me:return new l;case as:return Gv(t)}}function a0(t,n){var o=n.length;if(!o)return t;var l=o-1;return n[l]=(o>1?"& ":"")+n[l],n=n.join(o>2?", ":" "),t.replace(um,`{
/* [wrapped with `+n+`] */
`)}function l0(t){return Z(t)||On(t)||!!(Ec&&t&&t[Ec])}function ke(t,n){var o=typeof t;return n=n==null?Je:n,!!n&&(o=="number"||o!="symbol"&&xm.test(t))&&t>-1&&t%1==0&&t<n}function zt(t,n,o){if(!vt(o))return!1;var l=typeof n;return(l=="number"?Bt(o)&&ke(n,o.length):l=="string"&&n in o)?ye(o[n],t):!1}function za(t,n){if(Z(t))return!1;var o=typeof t;return o=="number"||o=="symbol"||o=="boolean"||t==null||Xt(t)?!0:sm.test(t)||!im.test(t)||n!=null&&t in ct(n)}function u0(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}function Ua(t){var n=Hs(t),o=f[n];if(typeof o!="function"||!(n in nt.prototype))return!1;if(t===o)return!0;var l=ka(o);return!!l&&t===l[0]}function c0(t){return!!_c&&_c in t}var d0=ms?Pe:il;function pi(t){var n=t&&t.constructor,o=typeof n=="function"&&n.prototype||yr;return t===o}function _d(t){return t===t&&!vt(t)}function xd(t,n){return function(o){return o==null?!1:o[t]===n&&(n!==i||t in ct(o))}}function f0(t){var n=Gs(t,function(l){return o.size===p&&o.clear(),l}),o=n.cache;return n}function h0(t,n){var o=t[1],l=n[1],d=o|l,h=d<(N|St|he),g=l==he&&o==Tt||l==he&&o==gn&&t[7].length<=n[8]||l==(he|gn)&&n[7].length<=n[8]&&o==Tt;if(!(h||g))return t;l&N&&(t[2]=n[2],d|=o&N?0:mt);var y=n[3];if(y){var w=t[3];t[3]=w?nd(w,y,n[4]):y,t[4]=w?je(t[3],m):n[4]}return y=n[5],y&&(w=t[5],t[5]=w?rd(w,y,n[6]):y,t[6]=w?je(t[5],m):n[6]),y=n[7],y&&(t[7]=y),l&he&&(t[8]=t[8]==null?n[8]:Ft(t[8],n[8])),t[9]==null&&(t[9]=n[9]),t[0]=n[0],t[1]=d,t}function p0(t){var n=[];if(t!=null)for(var o in ct(t))n.push(o);return n}function m0(t){return vs.call(t)}function wd(t,n,o){return n=$t(n===i?t.length-1:n,0),function(){for(var l=arguments,d=-1,h=$t(l.length-n,0),g=b(h);++d<h;)g[d]=l[n+d];d=-1;for(var y=b(n+1);++d<n;)y[d]=l[d];return y[n]=o(g),Yt(t,this,y)}}function bd(t,n){return n.length<2?t:Tn(t,oe(n,0,-1))}function g0(t,n){for(var o=t.length,l=Ft(n.length,o),d=Wt(t);l--;){var h=n[l];t[l]=ke(h,o)?d[h]:i}return t}function Wa(t,n){if(!(n==="constructor"&&typeof t[n]=="function")&&n!="__proto__")return t[n]}var Ed=Td(Zc),mi=Mg||function(t,n){return Ct.setTimeout(t,n)},Ba=Td(Hv);function Sd(t,n,o){var l=n+"";return Ba(t,a0(l,v0(i0(l),o)))}function Td(t){var n=0,o=0;return function(){var l=Rg(),d=Pp-(l-o);if(o=l,d>0){if(++n>=kp)return arguments[0]}else n=0;return t.apply(i,arguments)}}function Us(t,n){var o=-1,l=t.length,d=l-1;for(n=n===i?l:n;++o<n;){var h=Ta(o,d),g=t[h];t[h]=t[o],t[o]=g}return t.length=n,t}var Ad=f0(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(om,function(o,l,d,h){n.push(d?h.replace(pm,"$1"):l||o)}),n});function $e(t){if(typeof t=="string"||Xt(t))return t;var n=t+"";return n=="0"&&1/t==-_n?"-0":n}function $n(t){if(t!=null){try{return gs.call(t)}catch(n){}try{return t+""}catch(n){}}return""}function v0(t,n){return ne(Vp,function(o){var l="_."+o[0];n&o[1]&&!ds(t,l)&&t.push(l)}),t.sort()}function $d(t){if(t instanceof nt)return t.clone();var n=new ie(t.__wrapped__,t.__chain__);return n.__actions__=Wt(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}function y0(t,n,o){(o?zt(t,n,o):n===i)?n=1:n=$t(q(n),0);var l=t==null?0:t.length;if(!l||n<1)return[];for(var d=0,h=0,g=b(Es(l/n));d<l;)g[h++]=oe(t,d,d+=n);return g}function _0(t){for(var n=-1,o=t==null?0:t.length,l=0,d=[];++n<o;){var h=t[n];h&&(d[l++]=h)}return d}function x0(){var t=arguments.length;if(!t)return[];for(var n=b(t-1),o=arguments[0],l=t;l--;)n[l-1]=arguments[l];return Xe(Z(o)?Wt(o):[o],Rt(n,1))}var w0=X(function(t,n){return bt(t)?ui(t,Rt(n,1,bt,!0)):[]}),b0=X(function(t,n){var o=ae(n);return bt(o)&&(o=i),bt(t)?ui(t,Rt(n,1,bt,!0),z(o,2)):[]}),E0=X(function(t,n){var o=ae(n);return bt(o)&&(o=i),bt(t)?ui(t,Rt(n,1,bt,!0),i,o):[]});function S0(t,n,o){var l=t==null?0:t.length;return l?(n=o||n===i?1:q(n),oe(t,n<0?0:n,l)):[]}function T0(t,n,o){var l=t==null?0:t.length;return l?(n=o||n===i?1:q(n),n=l-n,oe(t,0,n<0?0:n)):[]}function A0(t,n){return t&&t.length?Ds(t,z(n,3),!0,!0):[]}function $0(t,n){return t&&t.length?Ds(t,z(n,3),!0):[]}function O0(t,n,o,l){var d=t==null?0:t.length;return d?(o&&typeof o!="number"&&zt(t,n,o)&&(o=0,l=d),xv(t,n,o,l)):[]}function Od(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=o==null?0:q(o);return d<0&&(d=$t(l+d,0)),fs(t,z(n,3),d)}function Cd(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=l-1;return o!==i&&(d=q(o),d=o<0?$t(l+d,0):Ft(d,l-1)),fs(t,z(n,3),d,!0)}function Id(t){var n=t==null?0:t.length;return n?Rt(t,1):[]}function C0(t){var n=t==null?0:t.length;return n?Rt(t,_n):[]}function I0(t,n){var o=t==null?0:t.length;return o?(n=n===i?1:q(n),Rt(t,n)):[]}function M0(t){for(var n=-1,o=t==null?0:t.length,l={};++n<o;){var d=t[n];l[d[0]]=d[1]}return l}function Md(t){return t&&t.length?t[0]:i}function L0(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=o==null?0:q(o);return d<0&&(d=$t(l+d,0)),mr(t,n,d)}function D0(t){var n=t==null?0:t.length;return n?oe(t,0,-1):[]}var N0=X(function(t){var n=gt(t,Ia);return n.length&&n[0]===t[0]?xa(n):[]}),R0=X(function(t){var n=ae(t),o=gt(t,Ia);return n===ae(o)?n=i:o.pop(),o.length&&o[0]===t[0]?xa(o,z(n,2)):[]}),F0=X(function(t){var n=ae(t),o=gt(t,Ia);return n=typeof n=="function"?n:i,n&&o.pop(),o.length&&o[0]===t[0]?xa(o,i,n):[]});function k0(t,n){return t==null?"":Dg.call(t,n)}function ae(t){var n=t==null?0:t.length;return n?t[n-1]:i}function P0(t,n,o){var l=t==null?0:t.length;if(!l)return-1;var d=l;return o!==i&&(d=q(o),d=d<0?$t(l+d,0):Ft(d,l-1)),n===n?vg(t,n,d):fs(t,dc,d,!0)}function H0(t,n){return t&&t.length?Wc(t,q(n)):i}var z0=X(Ld);function Ld(t,n){return t&&t.length&&n&&n.length?Sa(t,n):t}function U0(t,n,o){return t&&t.length&&n&&n.length?Sa(t,n,z(o,2)):t}function W0(t,n,o){return t&&t.length&&n&&n.length?Sa(t,n,i,o):t}var B0=Fe(function(t,n){var o=t==null?0:t.length,l=ga(t,n);return Gc(t,gt(n,function(d){return ke(d,o)?+d:d}).sort(ed)),l});function V0(t,n){var o=[];if(!(t&&t.length))return o;var l=-1,d=[],h=t.length;for(n=z(n,3);++l<h;){var g=t[l];n(g,l,t)&&(o.push(g),d.push(l))}return Gc(t,d),o}function Va(t){return t==null?t:kg.call(t)}function G0(t,n,o){var l=t==null?0:t.length;return l?(o&&typeof o!="number"&&zt(t,n,o)?(n=0,o=l):(n=n==null?0:q(n),o=o===i?l:q(o)),oe(t,n,o)):[]}function Z0(t,n){return Ls(t,n)}function q0(t,n,o){return $a(t,n,z(o,2))}function Y0(t,n){var o=t==null?0:t.length;if(o){var l=Ls(t,n);if(l<o&&ye(t[l],n))return l}return-1}function J0(t,n){return Ls(t,n,!0)}function K0(t,n,o){return $a(t,n,z(o,2),!0)}function X0(t,n){var o=t==null?0:t.length;if(o){var l=Ls(t,n,!0)-1;if(ye(t[l],n))return l}return-1}function j0(t){return t&&t.length?qc(t):[]}function Q0(t,n){return t&&t.length?qc(t,z(n,2)):[]}function ty(t){var n=t==null?0:t.length;return n?oe(t,1,n):[]}function ey(t,n,o){return t&&t.length?(n=o||n===i?1:q(n),oe(t,0,n<0?0:n)):[]}function ny(t,n,o){var l=t==null?0:t.length;return l?(n=o||n===i?1:q(n),n=l-n,oe(t,n<0?0:n,l)):[]}function ry(t,n){return t&&t.length?Ds(t,z(n,3),!1,!0):[]}function iy(t,n){return t&&t.length?Ds(t,z(n,3)):[]}var sy=X(function(t){return nn(Rt(t,1,bt,!0))}),oy=X(function(t){var n=ae(t);return bt(n)&&(n=i),nn(Rt(t,1,bt,!0),z(n,2))}),ay=X(function(t){var n=ae(t);return n=typeof n=="function"?n:i,nn(Rt(t,1,bt,!0),i,n)});function ly(t){return t&&t.length?nn(t):[]}function uy(t,n){return t&&t.length?nn(t,z(n,2)):[]}function cy(t,n){return n=typeof n=="function"?n:i,t&&t.length?nn(t,i,n):[]}function Ga(t){if(!(t&&t.length))return[];var n=0;return t=Ke(t,function(o){if(bt(o))return n=$t(o.length,n),!0}),la(n,function(o){return gt(t,sa(o))})}function Dd(t,n){if(!(t&&t.length))return[];var o=Ga(t);return n==null?o:gt(o,function(l){return Yt(n,i,l)})}var dy=X(function(t,n){return bt(t)?ui(t,n):[]}),fy=X(function(t){return Ca(Ke(t,bt))}),hy=X(function(t){var n=ae(t);return bt(n)&&(n=i),Ca(Ke(t,bt),z(n,2))}),py=X(function(t){var n=ae(t);return n=typeof n=="function"?n:i,Ca(Ke(t,bt),i,n)}),my=X(Ga);function gy(t,n){return Xc(t||[],n||[],li)}function vy(t,n){return Xc(t||[],n||[],fi)}var yy=X(function(t){var n=t.length,o=n>1?t[n-1]:i;return o=typeof o=="function"?(t.pop(),o):i,Dd(t,o)});function Nd(t){var n=f(t);return n.__chain__=!0,n}function _y(t,n){return n(t),t}function Ws(t,n){return n(t)}var xy=Fe(function(t){var n=t.length,o=n?t[0]:0,l=this.__wrapped__,d=function(h){return ga(h,t)};return n>1||this.__actions__.length||!(l instanceof nt)||!ke(o)?this.thru(d):(l=l.slice(o,+o+(n?1:0)),l.__actions__.push({func:Ws,args:[d],thisArg:i}),new ie(l,this.__chain__).thru(function(h){return n&&!h.length&&h.push(i),h}))});function wy(){return Nd(this)}function by(){return new ie(this.value(),this.__chain__)}function Ey(){this.__values__===i&&(this.__values__=Yd(this.value()));var t=this.__index__>=this.__values__.length,n=t?i:this.__values__[this.__index__++];return{done:t,value:n}}function Sy(){return this}function Ty(t){for(var n,o=this;o instanceof $s;){var l=$d(o);l.__index__=0,l.__values__=i,n?d.__wrapped__=l:n=l;var d=l;o=o.__wrapped__}return d.__wrapped__=t,n}function Ay(){var t=this.__wrapped__;if(t instanceof nt){var n=t;return this.__actions__.length&&(n=new nt(this)),n=n.reverse(),n.__actions__.push({func:Ws,args:[Va],thisArg:i}),new ie(n,this.__chain__)}return this.thru(Va)}function $y(){return Kc(this.__wrapped__,this.__actions__)}var Oy=Ns(function(t,n,o){ut.call(t,o)?++t[o]:Ne(t,o,1)});function Cy(t,n,o){var l=Z(t)?uc:_v;return o&&zt(t,n,o)&&(n=i),l(t,z(n,3))}function Iy(t,n){var o=Z(t)?Ke:Dc;return o(t,z(n,3))}var My=ad(Od),Ly=ad(Cd);function Dy(t,n){return Rt(Bs(t,n),1)}function Ny(t,n){return Rt(Bs(t,n),_n)}function Ry(t,n,o){return o=o===i?1:q(o),Rt(Bs(t,n),o)}function Rd(t,n){var o=Z(t)?ne:en;return o(t,z(n,3))}function Fd(t,n){var o=Z(t)?tg:Lc;return o(t,z(n,3))}var Fy=Ns(function(t,n,o){ut.call(t,o)?t[o].push(n):Ne(t,o,[n])});function ky(t,n,o,l){t=Bt(t)?t:Ar(t),o=o&&!l?q(o):0;var d=t.length;return o<0&&(o=$t(d+o,0)),Ys(t)?o<=d&&t.indexOf(n,o)>-1:!!d&&mr(t,n,o)>-1}var Py=X(function(t,n,o){var l=-1,d=typeof n=="function",h=Bt(t)?b(t.length):[];return en(t,function(g){h[++l]=d?Yt(n,g,o):ci(g,n,o)}),h}),Hy=Ns(function(t,n,o){Ne(t,o,n)});function Bs(t,n){var o=Z(t)?gt:Hc;return o(t,z(n,3))}function zy(t,n,o,l){return t==null?[]:(Z(n)||(n=n==null?[]:[n]),o=l?i:o,Z(o)||(o=o==null?[]:[o]),Bc(t,n,o))}var Uy=Ns(function(t,n,o){t[o?0:1].push(n)},function(){return[[],[]]});function Wy(t,n,o){var l=Z(t)?ra:hc,d=arguments.length<3;return l(t,z(n,4),o,d,en)}function By(t,n,o){var l=Z(t)?eg:hc,d=arguments.length<3;return l(t,z(n,4),o,d,Lc)}function Vy(t,n){var o=Z(t)?Ke:Dc;return o(t,Zs(z(n,3)))}function Gy(t){var n=Z(t)?Oc:kv;return n(t)}function Zy(t,n,o){(o?zt(t,n,o):n===i)?n=1:n=q(n);var l=Z(t)?pv:Pv;return l(t,n)}function qy(t){var n=Z(t)?mv:zv;return n(t)}function Yy(t){if(t==null)return 0;if(Bt(t))return Ys(t)?vr(t):t.length;var n=kt(t);return n==pe||n==me?t.size:ba(t).length}function Jy(t,n,o){var l=Z(t)?ia:Uv;return o&&zt(t,n,o)&&(n=i),l(t,z(n,3))}var Ky=X(function(t,n){if(t==null)return[];var o=n.length;return o>1&&zt(t,n[0],n[1])?n=[]:o>2&&zt(n[0],n[1],n[2])&&(n=[n[0]]),Bc(t,Rt(n,1),[])}),Vs=Ig||function(){return Ct.Date.now()};function Xy(t,n){if(typeof n!="function")throw new re(a);return t=q(t),function(){if(--t<1)return n.apply(this,arguments)}}function kd(t,n,o){return n=o?i:n,n=t&&n==null?t.length:n,Re(t,he,i,i,i,i,n)}function Pd(t,n){var o;if(typeof n!="function")throw new re(a);return t=q(t),function(){return--t>0&&(o=n.apply(this,arguments)),t<=1&&(n=i),o}}var Za=X(function(t,n,o){var l=N;if(o.length){var d=je(o,Sr(Za));l|=qt}return Re(t,l,n,o,d)}),Hd=X(function(t,n,o){var l=N|St;if(o.length){var d=je(o,Sr(Hd));l|=qt}return Re(n,l,t,o,d)});function zd(t,n,o){n=o?i:n;var l=Re(t,Tt,i,i,i,i,i,n);return l.placeholder=zd.placeholder,l}function Ud(t,n,o){n=o?i:n;var l=Re(t,fe,i,i,i,i,i,n);return l.placeholder=Ud.placeholder,l}function Wd(t,n,o){var l,d,h,g,y,w,S=0,A=!1,C=!1,M=!0;if(typeof t!="function")throw new re(a);n=le(n)||0,vt(o)&&(A=!!o.leading,C="maxWait"in o,h=C?$t(le(o.maxWait)||0,n):h,M="trailing"in o?!!o.trailing:M);function k(Et){var _e=l,ze=d;return l=d=i,S=Et,g=t.apply(ze,_e),g}function U(Et){return S=Et,y=mi(tt,n),A?k(Et):g}function J(Et){var _e=Et-w,ze=Et-S,lf=n-_e;return C?Ft(lf,h-ze):lf}function W(Et){var _e=Et-w,ze=Et-S;return w===i||_e>=n||_e<0||C&&ze>=h}function tt(){var Et=Vs();if(W(Et))return rt(Et);y=mi(tt,J(Et))}function rt(Et){return y=i,M&&l?k(Et):(l=d=i,g)}function jt(){y!==i&&jc(y),S=0,l=w=d=y=i}function Ut(){return y===i?g:rt(Vs())}function Qt(){var Et=Vs(),_e=W(Et);if(l=arguments,d=this,w=Et,_e){if(y===i)return U(w);if(C)return jc(y),y=mi(tt,n),k(w)}return y===i&&(y=mi(tt,n)),g}return Qt.cancel=jt,Qt.flush=Ut,Qt}var jy=X(function(t,n){return Mc(t,1,n)}),Qy=X(function(t,n,o){return Mc(t,le(n)||0,o)});function t_(t){return Re(t,vn)}function Gs(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new re(a);var o=function(){var l=arguments,d=n?n.apply(this,l):l[0],h=o.cache;if(h.has(d))return h.get(d);var g=t.apply(this,l);return o.cache=h.set(d,g)||h,g};return o.cache=new(Gs.Cache||De),o}Gs.Cache=De;function Zs(t){if(typeof t!="function")throw new re(a);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function e_(t){return Pd(2,t)}var n_=Wv(function(t,n){n=n.length==1&&Z(n[0])?gt(n[0],Jt(z())):gt(Rt(n,1),Jt(z()));var o=n.length;return X(function(l){for(var d=-1,h=Ft(l.length,o);++d<h;)l[d]=n[d].call(this,l[d]);return Yt(t,this,l)})}),qa=X(function(t,n){var o=je(n,Sr(qa));return Re(t,qt,i,n,o)}),Bd=X(function(t,n){var o=je(n,Sr(Bd));return Re(t,Ye,i,n,o)}),r_=Fe(function(t,n){return Re(t,gn,i,i,i,n)});function i_(t,n){if(typeof t!="function")throw new re(a);return n=n===i?n:q(n),X(t,n)}function s_(t,n){if(typeof t!="function")throw new re(a);return n=n==null?0:$t(q(n),0),X(function(o){var l=o[n],d=sn(o,0,n);return l&&Xe(d,l),Yt(t,this,d)})}function o_(t,n,o){var l=!0,d=!0;if(typeof t!="function")throw new re(a);return vt(o)&&(l="leading"in o?!!o.leading:l,d="trailing"in o?!!o.trailing:d),Wd(t,n,{leading:l,maxWait:n,trailing:d})}function a_(t){return kd(t,1)}function l_(t,n){return qa(Ma(n),t)}function u_(){if(!arguments.length)return[];var t=arguments[0];return Z(t)?t:[t]}function c_(t){return se(t,T)}function d_(t,n){return n=typeof n=="function"?n:i,se(t,T,n)}function f_(t){return se(t,x|T)}function h_(t,n){return n=typeof n=="function"?n:i,se(t,x|T,n)}function p_(t,n){return n==null||Ic(t,n,It(n))}function ye(t,n){return t===n||t!==t&&n!==n}var m_=Ps(_a),g_=Ps(function(t,n){return t>=n}),On=Fc(function(){return arguments}())?Fc:function(t){return wt(t)&&ut.call(t,"callee")&&!bc.call(t,"callee")},Z=b.isArray,v_=rc?Jt(rc):Tv;function Bt(t){return t!=null&&qs(t.length)&&!Pe(t)}function bt(t){return wt(t)&&Bt(t)}function y_(t){return t===!0||t===!1||wt(t)&&Ht(t)==Jr}var on=Lg||il,__=ic?Jt(ic):Av;function x_(t){return wt(t)&&t.nodeType===1&&!gi(t)}function w_(t){if(t==null)return!0;if(Bt(t)&&(Z(t)||typeof t=="string"||typeof t.splice=="function"||on(t)||Tr(t)||On(t)))return!t.length;var n=kt(t);if(n==pe||n==me)return!t.size;if(pi(t))return!ba(t).length;for(var o in t)if(ut.call(t,o))return!1;return!0}function b_(t,n){return di(t,n)}function E_(t,n,o){o=typeof o=="function"?o:i;var l=o?o(t,n):i;return l===i?di(t,n,i,o):!!l}function Ya(t){if(!wt(t))return!1;var n=Ht(t);return n==ss||n==Zp||typeof t.message=="string"&&typeof t.name=="string"&&!gi(t)}function S_(t){return typeof t=="number"&&Sc(t)}function Pe(t){if(!vt(t))return!1;var n=Ht(t);return n==os||n==Mu||n==Gp||n==Yp}function Vd(t){return typeof t=="number"&&t==q(t)}function qs(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Je}function vt(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}function wt(t){return t!=null&&typeof t=="object"}var Gd=sc?Jt(sc):Ov;function T_(t,n){return t===n||wa(t,n,Pa(n))}function A_(t,n,o){return o=typeof o=="function"?o:i,wa(t,n,Pa(n),o)}function $_(t){return Zd(t)&&t!=+t}function O_(t){if(d0(t))throw new G(s);return kc(t)}function C_(t){return t===null}function I_(t){return t==null}function Zd(t){return typeof t=="number"||wt(t)&&Ht(t)==Xr}function gi(t){if(!wt(t)||Ht(t)!=Me)return!1;var n=xs(t);if(n===null)return!0;var o=ut.call(n,"constructor")&&n.constructor;return typeof o=="function"&&o instanceof o&&gs.call(o)==Ag}var Ja=oc?Jt(oc):Cv;function M_(t){return Vd(t)&&t>=-Je&&t<=Je}var qd=ac?Jt(ac):Iv;function Ys(t){return typeof t=="string"||!Z(t)&&wt(t)&&Ht(t)==Qr}function Xt(t){return typeof t=="symbol"||wt(t)&&Ht(t)==as}var Tr=lc?Jt(lc):Mv;function L_(t){return t===i}function D_(t){return wt(t)&&kt(t)==ti}function N_(t){return wt(t)&&Ht(t)==Kp}var R_=Ps(Ea),F_=Ps(function(t,n){return t<=n});function Yd(t){if(!t)return[];if(Bt(t))return Ys(t)?ge(t):Wt(t);if(ri&&t[ri])return pg(t[ri]());var n=kt(t),o=n==pe?ca:n==me?hs:Ar;return o(t)}function He(t){if(!t)return t===0?t:0;if(t=le(t),t===_n||t===-_n){var n=t<0?-1:1;return n*Up}return t===t?t:0}function q(t){var n=He(t),o=n%1;return n===n?o?n-o:n:0}function Jd(t){return t?Sn(q(t),0,Se):0}function le(t){if(typeof t=="number")return t;if(Xt(t))return rs;if(vt(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=vt(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=pc(t);var o=vm.test(t);return o||_m.test(t)?Xm(t.slice(2),o?2:8):gm.test(t)?rs:+t}function Kd(t){return Ae(t,Vt(t))}function k_(t){return t?Sn(q(t),-Je,Je):t===0?t:0}function at(t){return t==null?"":Kt(t)}var P_=br(function(t,n){if(pi(n)||Bt(n)){Ae(n,It(n),t);return}for(var o in n)ut.call(n,o)&&li(t,o,n[o])}),Xd=br(function(t,n){Ae(n,Vt(n),t)}),Js=br(function(t,n,o,l){Ae(n,Vt(n),t,l)}),H_=br(function(t,n,o,l){Ae(n,It(n),t,l)}),z_=Fe(ga);function U_(t,n){var o=wr(t);return n==null?o:Cc(o,n)}var W_=X(function(t,n){t=ct(t);var o=-1,l=n.length,d=l>2?n[2]:i;for(d&&zt(n[0],n[1],d)&&(l=1);++o<l;)for(var h=n[o],g=Vt(h),y=-1,w=g.length;++y<w;){var S=g[y],A=t[S];(A===i||ye(A,yr[S])&&!ut.call(t,S))&&(t[S]=h[S])}return t}),B_=X(function(t){return t.push(i,pd),Yt(jd,i,t)});function V_(t,n){return cc(t,z(n,3),Te)}function G_(t,n){return cc(t,z(n,3),ya)}function Z_(t,n){return t==null?t:va(t,z(n,3),Vt)}function q_(t,n){return t==null?t:Nc(t,z(n,3),Vt)}function Y_(t,n){return t&&Te(t,z(n,3))}function J_(t,n){return t&&ya(t,z(n,3))}function K_(t){return t==null?[]:Is(t,It(t))}function X_(t){return t==null?[]:Is(t,Vt(t))}function Ka(t,n,o){var l=t==null?i:Tn(t,n);return l===i?o:l}function j_(t,n){return t!=null&&vd(t,n,wv)}function Xa(t,n){return t!=null&&vd(t,n,bv)}var Q_=ud(function(t,n,o){n!=null&&typeof n.toString!="function"&&(n=vs.call(n)),t[n]=o},Qa(Gt)),tx=ud(function(t,n,o){n!=null&&typeof n.toString!="function"&&(n=vs.call(n)),ut.call(t,n)?t[n].push(o):t[n]=[o]},z),ex=X(ci);function It(t){return Bt(t)?$c(t):ba(t)}function Vt(t){return Bt(t)?$c(t,!0):Lv(t)}function nx(t,n){var o={};return n=z(n,3),Te(t,function(l,d,h){Ne(o,n(l,d,h),l)}),o}function rx(t,n){var o={};return n=z(n,3),Te(t,function(l,d,h){Ne(o,d,n(l,d,h))}),o}var ix=br(function(t,n,o){Ms(t,n,o)}),jd=br(function(t,n,o,l){Ms(t,n,o,l)}),sx=Fe(function(t,n){var o={};if(t==null)return o;var l=!1;n=gt(n,function(h){return h=rn(h,t),l||(l=h.length>1),h}),Ae(t,Fa(t),o),l&&(o=se(o,x|$|T,Qv));for(var d=n.length;d--;)Oa(o,n[d]);return o});function ox(t,n){return Qd(t,Zs(z(n)))}var ax=Fe(function(t,n){return t==null?{}:Nv(t,n)});function Qd(t,n){if(t==null)return{};var o=gt(Fa(t),function(l){return[l]});return n=z(n),Vc(t,o,function(l,d){return n(l,d[0])})}function lx(t,n,o){n=rn(n,t);var l=-1,d=n.length;for(d||(d=1,t=i);++l<d;){var h=t==null?i:t[$e(n[l])];h===i&&(l=d,h=o),t=Pe(h)?h.call(t):h}return t}function ux(t,n,o){return t==null?t:fi(t,n,o)}function cx(t,n,o,l){return l=typeof l=="function"?l:i,t==null?t:fi(t,n,o,l)}var tf=fd(It),ef=fd(Vt);function dx(t,n,o){var l=Z(t),d=l||on(t)||Tr(t);if(n=z(n,4),o==null){var h=t&&t.constructor;d?o=l?new h:[]:vt(t)?o=Pe(h)?wr(xs(t)):{}:o={}}return(d?ne:Te)(t,function(g,y,w){return n(o,g,y,w)}),o}function fx(t,n){return t==null?!0:Oa(t,n)}function hx(t,n,o){return t==null?t:Jc(t,n,Ma(o))}function px(t,n,o,l){return l=typeof l=="function"?l:i,t==null?t:Jc(t,n,Ma(o),l)}function Ar(t){return t==null?[]:ua(t,It(t))}function mx(t){return t==null?[]:ua(t,Vt(t))}function gx(t,n,o){return o===i&&(o=n,n=i),o!==i&&(o=le(o),o=o===o?o:0),n!==i&&(n=le(n),n=n===n?n:0),Sn(le(t),n,o)}function vx(t,n,o){return n=He(n),o===i?(o=n,n=0):o=He(o),t=le(t),Ev(t,n,o)}function yx(t,n,o){if(o&&typeof o!="boolean"&&zt(t,n,o)&&(n=o=i),o===i&&(typeof n=="boolean"?(o=n,n=i):typeof t=="boolean"&&(o=t,t=i)),t===i&&n===i?(t=0,n=1):(t=He(t),n===i?(n=t,t=0):n=He(n)),t>n){var l=t;t=n,n=l}if(o||t%1||n%1){var d=Tc();return Ft(t+d*(n-t+Km("1e-"+((d+"").length-1))),n)}return Ta(t,n)}var _x=Er(function(t,n,o){return n=n.toLowerCase(),t+(o?nf(n):n)});function nf(t){return ja(at(t).toLowerCase())}function rf(t){return t=at(t),t&&t.replace(wm,ug).replace(zm,"")}function xx(t,n,o){t=at(t),n=Kt(n);var l=t.length;o=o===i?l:Sn(q(o),0,l);var d=o;return o-=n.length,o>=0&&t.slice(o,d)==n}function wx(t){return t=at(t),t&&em.test(t)?t.replace(Nu,cg):t}function bx(t){return t=at(t),t&&am.test(t)?t.replace(qo,"\\$&"):t}var Ex=Er(function(t,n,o){return t+(o?"-":"")+n.toLowerCase()}),Sx=Er(function(t,n,o){return t+(o?" ":"")+n.toLowerCase()}),Tx=od("toLowerCase");function Ax(t,n,o){t=at(t),n=q(n);var l=n?vr(t):0;if(!n||l>=n)return t;var d=(n-l)/2;return ks(Ss(d),o)+t+ks(Es(d),o)}function $x(t,n,o){t=at(t),n=q(n);var l=n?vr(t):0;return n&&l<n?t+ks(n-l,o):t}function Ox(t,n,o){t=at(t),n=q(n);var l=n?vr(t):0;return n&&l<n?ks(n-l,o)+t:t}function Cx(t,n,o){return o||n==null?n=0:n&&(n=+n),Fg(at(t).replace(Yo,""),n||0)}function Ix(t,n,o){return(o?zt(t,n,o):n===i)?n=1:n=q(n),Aa(at(t),n)}function Mx(){var t=arguments,n=at(t[0]);return t.length<3?n:n.replace(t[1],t[2])}var Lx=Er(function(t,n,o){return t+(o?"_":"")+n.toLowerCase()});function Dx(t,n,o){return o&&typeof o!="number"&&zt(t,n,o)&&(n=o=i),o=o===i?Se:o>>>0,o?(t=at(t),t&&(typeof n=="string"||n!=null&&!Ja(n))&&(n=Kt(n),!n&&gr(t))?sn(ge(t),0,o):t.split(n,o)):[]}var Nx=Er(function(t,n,o){return t+(o?" ":"")+ja(n)});function Rx(t,n,o){return t=at(t),o=o==null?0:Sn(q(o),0,t.length),n=Kt(n),t.slice(o,o+n.length)==n}function Fx(t,n,o){var l=f.templateSettings;o&&zt(t,n,o)&&(n=i),t=at(t),n=Js({},n,l,hd);var d=Js({},n.imports,l.imports,hd),h=It(d),g=ua(d,h),y,w,S=0,A=n.interpolate||ls,C="__p += '",M=da((n.escape||ls).source+"|"+A.source+"|"+(A===Ru?mm:ls).source+"|"+(n.evaluate||ls).source+"|$","g"),k="//# sourceURL="+(ut.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Gm+"]")+`
`;t.replace(M,function(W,tt,rt,jt,Ut,Qt){return rt||(rt=jt),C+=t.slice(S,Qt).replace(bm,dg),tt&&(y=!0,C+=`' +
__e(`+tt+`) +
'`),Ut&&(w=!0,C+=`';
`+Ut+`;
__p += '`),rt&&(C+=`' +
((__t = (`+rt+`)) == null ? '' : __t) +
'`),S=Qt+W.length,W}),C+=`';
`;var U=ut.call(n,"variable")&&n.variable;if(!U)C=`with (obj) {
`+C+`
}
`;else if(hm.test(U))throw new G(c);C=(w?C.replace(Xp,""):C).replace(jp,"$1").replace(Qp,"$1;"),C="function("+(U||"obj")+`) {
`+(U?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(w?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+C+`return __p
}`;var J=of(function(){return st(h,k+"return "+C).apply(i,g)});if(J.source=C,Ya(J))throw J;return J}function kx(t){return at(t).toLowerCase()}function Px(t){return at(t).toUpperCase()}function Hx(t,n,o){if(t=at(t),t&&(o||n===i))return pc(t);if(!t||!(n=Kt(n)))return t;var l=ge(t),d=ge(n),h=mc(l,d),g=gc(l,d)+1;return sn(l,h,g).join("")}function zx(t,n,o){if(t=at(t),t&&(o||n===i))return t.slice(0,yc(t)+1);if(!t||!(n=Kt(n)))return t;var l=ge(t),d=gc(l,ge(n))+1;return sn(l,0,d).join("")}function Ux(t,n,o){if(t=at(t),t&&(o||n===i))return t.replace(Yo,"");if(!t||!(n=Kt(n)))return t;var l=ge(t),d=mc(l,ge(n));return sn(l,d).join("")}function Wx(t,n){var o=yn,l=ko;if(vt(n)){var d="separator"in n?n.separator:d;o="length"in n?q(n.length):o,l="omission"in n?Kt(n.omission):l}t=at(t);var h=t.length;if(gr(t)){var g=ge(t);h=g.length}if(o>=h)return t;var y=o-vr(l);if(y<1)return l;var w=g?sn(g,0,y).join(""):t.slice(0,y);if(d===i)return w+l;if(g&&(y+=w.length-y),Ja(d)){if(t.slice(y).search(d)){var S,A=w;for(d.global||(d=da(d.source,at(Fu.exec(d))+"g")),d.lastIndex=0;S=d.exec(A);)var C=S.index;w=w.slice(0,C===i?y:C)}}else if(t.indexOf(Kt(d),y)!=y){var M=w.lastIndexOf(d);M>-1&&(w=w.slice(0,M))}return w+l}function Bx(t){return t=at(t),t&&tm.test(t)?t.replace(Du,yg):t}var Vx=Er(function(t,n,o){return t+(o?" ":"")+n.toUpperCase()}),ja=od("toUpperCase");function sf(t,n,o){return t=at(t),n=o?i:n,n===i?hg(t)?wg(t):ig(t):t.match(n)||[]}var of=X(function(t,n){try{return Yt(t,i,n)}catch(o){return Ya(o)?o:new G(o)}}),Gx=Fe(function(t,n){return ne(n,function(o){o=$e(o),Ne(t,o,Za(t[o],t))}),t});function Zx(t){var n=t==null?0:t.length,o=z();return t=n?gt(t,function(l){if(typeof l[1]!="function")throw new re(a);return[o(l[0]),l[1]]}):[],X(function(l){for(var d=-1;++d<n;){var h=t[d];if(Yt(h[0],this,l))return Yt(h[1],this,l)}})}function qx(t){return yv(se(t,x))}function Qa(t){return function(){return t}}function Yx(t,n){return t==null||t!==t?n:t}var Jx=ld(),Kx=ld(!0);function Gt(t){return t}function tl(t){return Pc(typeof t=="function"?t:se(t,x))}function Xx(t){return zc(se(t,x))}function jx(t,n){return Uc(t,se(n,x))}var Qx=X(function(t,n){return function(o){return ci(o,t,n)}}),tw=X(function(t,n){return function(o){return ci(t,o,n)}});function el(t,n,o){var l=It(n),d=Is(n,l);o==null&&!(vt(n)&&(d.length||!l.length))&&(o=n,n=t,t=this,d=Is(n,It(n)));var h=!(vt(o)&&"chain"in o)||!!o.chain,g=Pe(t);return ne(d,function(y){var w=n[y];t[y]=w,g&&(t.prototype[y]=function(){var S=this.__chain__;if(h||S){var A=t(this.__wrapped__),C=A.__actions__=Wt(this.__actions__);return C.push({func:w,args:arguments,thisArg:t}),A.__chain__=S,A}return w.apply(t,Xe([this.value()],arguments))})}),t}function ew(){return Ct._===this&&(Ct._=$g),this}function nl(){}function nw(t){return t=q(t),X(function(n){return Wc(n,t)})}var rw=Da(gt),iw=Da(uc),sw=Da(ia);function af(t){return za(t)?sa($e(t)):Rv(t)}function ow(t){return function(n){return t==null?i:Tn(t,n)}}var aw=cd(),lw=cd(!0);function rl(){return[]}function il(){return!1}function uw(){return{}}function cw(){return""}function dw(){return!0}function fw(t,n){if(t=q(t),t<1||t>Je)return[];var o=Se,l=Ft(t,Se);n=z(n),t-=Se;for(var d=la(l,n);++o<t;)n(o);return d}function hw(t){return Z(t)?gt(t,$e):Xt(t)?[t]:Wt(Ad(at(t)))}function pw(t){var n=++Tg;return at(t)+n}var mw=Fs(function(t,n){return t+n},0),gw=Na("ceil"),vw=Fs(function(t,n){return t/n},1),yw=Na("floor");function _w(t){return t&&t.length?Cs(t,Gt,_a):i}function xw(t,n){return t&&t.length?Cs(t,z(n,2),_a):i}function ww(t){return fc(t,Gt)}function bw(t,n){return fc(t,z(n,2))}function Ew(t){return t&&t.length?Cs(t,Gt,Ea):i}function Sw(t,n){return t&&t.length?Cs(t,z(n,2),Ea):i}var Tw=Fs(function(t,n){return t*n},1),Aw=Na("round"),$w=Fs(function(t,n){return t-n},0);function Ow(t){return t&&t.length?aa(t,Gt):0}function Cw(t,n){return t&&t.length?aa(t,z(n,2)):0}return f.after=Xy,f.ary=kd,f.assign=P_,f.assignIn=Xd,f.assignInWith=Js,f.assignWith=H_,f.at=z_,f.before=Pd,f.bind=Za,f.bindAll=Gx,f.bindKey=Hd,f.castArray=u_,f.chain=Nd,f.chunk=y0,f.compact=_0,f.concat=x0,f.cond=Zx,f.conforms=qx,f.constant=Qa,f.countBy=Oy,f.create=U_,f.curry=zd,f.curryRight=Ud,f.debounce=Wd,f.defaults=W_,f.defaultsDeep=B_,f.defer=jy,f.delay=Qy,f.difference=w0,f.differenceBy=b0,f.differenceWith=E0,f.drop=S0,f.dropRight=T0,f.dropRightWhile=A0,f.dropWhile=$0,f.fill=O0,f.filter=Iy,f.flatMap=Dy,f.flatMapDeep=Ny,f.flatMapDepth=Ry,f.flatten=Id,f.flattenDeep=C0,f.flattenDepth=I0,f.flip=t_,f.flow=Jx,f.flowRight=Kx,f.fromPairs=M0,f.functions=K_,f.functionsIn=X_,f.groupBy=Fy,f.initial=D0,f.intersection=N0,f.intersectionBy=R0,f.intersectionWith=F0,f.invert=Q_,f.invertBy=tx,f.invokeMap=Py,f.iteratee=tl,f.keyBy=Hy,f.keys=It,f.keysIn=Vt,f.map=Bs,f.mapKeys=nx,f.mapValues=rx,f.matches=Xx,f.matchesProperty=jx,f.memoize=Gs,f.merge=ix,f.mergeWith=jd,f.method=Qx,f.methodOf=tw,f.mixin=el,f.negate=Zs,f.nthArg=nw,f.omit=sx,f.omitBy=ox,f.once=e_,f.orderBy=zy,f.over=rw,f.overArgs=n_,f.overEvery=iw,f.overSome=sw,f.partial=qa,f.partialRight=Bd,f.partition=Uy,f.pick=ax,f.pickBy=Qd,f.property=af,f.propertyOf=ow,f.pull=z0,f.pullAll=Ld,f.pullAllBy=U0,f.pullAllWith=W0,f.pullAt=B0,f.range=aw,f.rangeRight=lw,f.rearg=r_,f.reject=Vy,f.remove=V0,f.rest=i_,f.reverse=Va,f.sampleSize=Zy,f.set=ux,f.setWith=cx,f.shuffle=qy,f.slice=G0,f.sortBy=Ky,f.sortedUniq=j0,f.sortedUniqBy=Q0,f.split=Dx,f.spread=s_,f.tail=ty,f.take=ey,f.takeRight=ny,f.takeRightWhile=ry,f.takeWhile=iy,f.tap=_y,f.throttle=o_,f.thru=Ws,f.toArray=Yd,f.toPairs=tf,f.toPairsIn=ef,f.toPath=hw,f.toPlainObject=Kd,f.transform=dx,f.unary=a_,f.union=sy,f.unionBy=oy,f.unionWith=ay,f.uniq=ly,f.uniqBy=uy,f.uniqWith=cy,f.unset=fx,f.unzip=Ga,f.unzipWith=Dd,f.update=hx,f.updateWith=px,f.values=Ar,f.valuesIn=mx,f.without=dy,f.words=sf,f.wrap=l_,f.xor=fy,f.xorBy=hy,f.xorWith=py,f.zip=my,f.zipObject=gy,f.zipObjectDeep=vy,f.zipWith=yy,f.entries=tf,f.entriesIn=ef,f.extend=Xd,f.extendWith=Js,el(f,f),f.add=mw,f.attempt=of,f.camelCase=_x,f.capitalize=nf,f.ceil=gw,f.clamp=gx,f.clone=c_,f.cloneDeep=f_,f.cloneDeepWith=h_,f.cloneWith=d_,f.conformsTo=p_,f.deburr=rf,f.defaultTo=Yx,f.divide=vw,f.endsWith=xx,f.eq=ye,f.escape=wx,f.escapeRegExp=bx,f.every=Cy,f.find=My,f.findIndex=Od,f.findKey=V_,f.findLast=Ly,f.findLastIndex=Cd,f.findLastKey=G_,f.floor=yw,f.forEach=Rd,f.forEachRight=Fd,f.forIn=Z_,f.forInRight=q_,f.forOwn=Y_,f.forOwnRight=J_,f.get=Ka,f.gt=m_,f.gte=g_,f.has=j_,f.hasIn=Xa,f.head=Md,f.identity=Gt,f.includes=ky,f.indexOf=L0,f.inRange=vx,f.invoke=ex,f.isArguments=On,f.isArray=Z,f.isArrayBuffer=v_,f.isArrayLike=Bt,f.isArrayLikeObject=bt,f.isBoolean=y_,f.isBuffer=on,f.isDate=__,f.isElement=x_,f.isEmpty=w_,f.isEqual=b_,f.isEqualWith=E_,f.isError=Ya,f.isFinite=S_,f.isFunction=Pe,f.isInteger=Vd,f.isLength=qs,f.isMap=Gd,f.isMatch=T_,f.isMatchWith=A_,f.isNaN=$_,f.isNative=O_,f.isNil=I_,f.isNull=C_,f.isNumber=Zd,f.isObject=vt,f.isObjectLike=wt,f.isPlainObject=gi,f.isRegExp=Ja,f.isSafeInteger=M_,f.isSet=qd,f.isString=Ys,f.isSymbol=Xt,f.isTypedArray=Tr,f.isUndefined=L_,f.isWeakMap=D_,f.isWeakSet=N_,f.join=k0,f.kebabCase=Ex,f.last=ae,f.lastIndexOf=P0,f.lowerCase=Sx,f.lowerFirst=Tx,f.lt=R_,f.lte=F_,f.max=_w,f.maxBy=xw,f.mean=ww,f.meanBy=bw,f.min=Ew,f.minBy=Sw,f.stubArray=rl,f.stubFalse=il,f.stubObject=uw,f.stubString=cw,f.stubTrue=dw,f.multiply=Tw,f.nth=H0,f.noConflict=ew,f.noop=nl,f.now=Vs,f.pad=Ax,f.padEnd=$x,f.padStart=Ox,f.parseInt=Cx,f.random=yx,f.reduce=Wy,f.reduceRight=By,f.repeat=Ix,f.replace=Mx,f.result=lx,f.round=Aw,f.runInContext=_,f.sample=Gy,f.size=Yy,f.snakeCase=Lx,f.some=Jy,f.sortedIndex=Z0,f.sortedIndexBy=q0,f.sortedIndexOf=Y0,f.sortedLastIndex=J0,f.sortedLastIndexBy=K0,f.sortedLastIndexOf=X0,f.startCase=Nx,f.startsWith=Rx,f.subtract=$w,f.sum=Ow,f.sumBy=Cw,f.template=Fx,f.times=fw,f.toFinite=He,f.toInteger=q,f.toLength=Jd,f.toLower=kx,f.toNumber=le,f.toSafeInteger=k_,f.toString=at,f.toUpper=Px,f.trim=Hx,f.trimEnd=zx,f.trimStart=Ux,f.truncate=Wx,f.unescape=Bx,f.uniqueId=pw,f.upperCase=Vx,f.upperFirst=ja,f.each=Rd,f.eachRight=Fd,f.first=Md,el(f,function(){var t={};return Te(f,function(n,o){ut.call(f.prototype,o)||(t[o]=n)}),t}(),{chain:!1}),f.VERSION=e,ne(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){f[t].placeholder=f}),ne(["drop","take"],function(t,n){nt.prototype[t]=function(o){o=o===i?1:$t(q(o),0);var l=this.__filtered__&&!n?new nt(this):this.clone();return l.__filtered__?l.__takeCount__=Ft(o,l.__takeCount__):l.__views__.push({size:Ft(o,Se),type:t+(l.__dir__<0?"Right":"")}),l},nt.prototype[t+"Right"]=function(o){return this.reverse()[t](o).reverse()}}),ne(["filter","map","takeWhile"],function(t,n){var o=n+1,l=o==Iu||o==zp;nt.prototype[t]=function(d){var h=this.clone();return h.__iteratees__.push({iteratee:z(d,3),type:o}),h.__filtered__=h.__filtered__||l,h}}),ne(["head","last"],function(t,n){var o="take"+(n?"Right":"");nt.prototype[t]=function(){return this[o](1).value()[0]}}),ne(["initial","tail"],function(t,n){var o="drop"+(n?"":"Right");nt.prototype[t]=function(){return this.__filtered__?new nt(this):this[o](1)}}),nt.prototype.compact=function(){return this.filter(Gt)},nt.prototype.find=function(t){return this.filter(t).head()},nt.prototype.findLast=function(t){return this.reverse().find(t)},nt.prototype.invokeMap=X(function(t,n){return typeof t=="function"?new nt(this):this.map(function(o){return ci(o,t,n)})}),nt.prototype.reject=function(t){return this.filter(Zs(z(t)))},nt.prototype.slice=function(t,n){t=q(t);var o=this;return o.__filtered__&&(t>0||n<0)?new nt(o):(t<0?o=o.takeRight(-t):t&&(o=o.drop(t)),n!==i&&(n=q(n),o=n<0?o.dropRight(-n):o.take(n-t)),o)},nt.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},nt.prototype.toArray=function(){return this.take(Se)},Te(nt.prototype,function(t,n){var o=/^(?:filter|find|map|reject)|While$/.test(n),l=/^(?:head|last)$/.test(n),d=f[l?"take"+(n=="last"?"Right":""):n],h=l||/^find/.test(n);!d||(f.prototype[n]=function(){var g=this.__wrapped__,y=l?[1]:arguments,w=g instanceof nt,S=y[0],A=w||Z(g),C=function(tt){var rt=d.apply(f,Xe([tt],y));return l&&M?rt[0]:rt};A&&o&&typeof S=="function"&&S.length!=1&&(w=A=!1);var M=this.__chain__,k=!!this.__actions__.length,U=h&&!M,J=w&&!k;if(!h&&A){g=J?g:new nt(this);var W=t.apply(g,y);return W.__actions__.push({func:Ws,args:[C],thisArg:i}),new ie(W,M)}return U&&J?t.apply(this,y):(W=this.thru(C),U?l?W.value()[0]:W.value():W)})}),ne(["pop","push","shift","sort","splice","unshift"],function(t){var n=ps[t],o=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",l=/^(?:pop|shift)$/.test(t);f.prototype[t]=function(){var d=arguments;if(l&&!this.__chain__){var h=this.value();return n.apply(Z(h)?h:[],d)}return this[o](function(g){return n.apply(Z(g)?g:[],d)})}}),Te(nt.prototype,function(t,n){var o=f[n];if(o){var l=o.name+"";ut.call(xr,l)||(xr[l]=[]),xr[l].push({name:n,func:o})}}),xr[Rs(i,St).name]=[{name:"wrapper",func:i}],nt.prototype.clone=Bg,nt.prototype.reverse=Vg,nt.prototype.value=Gg,f.prototype.at=xy,f.prototype.chain=wy,f.prototype.commit=by,f.prototype.next=Ey,f.prototype.plant=Ty,f.prototype.reverse=Ay,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=$y,f.prototype.first=f.prototype.head,ri&&(f.prototype[ri]=Sy),f},Qe=bg();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Ct._=Qe,define(function(){return Qe})):xn?((xn.exports=Qe)._=Qe,ta._=Qe):Ct._=Qe}).call(Cr)});v();v();v();v();v();var js=globalThis,to=js.ShadowRoot&&(js.ShadyCSS===void 0||js.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pf=Symbol(),hf=new WeakMap,Qs=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==pf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(to&&e===void 0){let s=r!==void 0&&r.length===1;s&&(e=hf.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&hf.set(r,e))}return e}toString(){return this.cssText}},mf=i=>new Qs(typeof i=="string"?i:i+"",void 0,pf);var al=(i,e)=>{if(to)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),a=js.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=r.cssText,i.appendChild(s)}},eo=to?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return mf(r)})(i):i;var{is:Hw,defineProperty:zw,getOwnPropertyDescriptor:Uw,getOwnPropertyNames:Ww,getOwnPropertySymbols:Bw,getPrototypeOf:Vw}=Object,an=globalThis,gf=an.trustedTypes,Gw=gf?gf.emptyScript:"",ll=an.reactiveElementPolyfillSupport,vi=(i,e)=>i,no={toAttribute(i,e){switch(e){case Boolean:i=i?Gw:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(s){r=null}}return r}},ul=(i,e)=>!Hw(i,e),vf={attribute:!0,type:String,converter:no,reflect:!1,hasChanged:ul},yf,_f;(yf=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(_f=an.litPropertyMetadata)!=null||(an.litPropertyMetadata=new WeakMap);var In=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=vf){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let s=Symbol(),a=this.getPropertyDescriptor(e,s,r);a!==void 0&&zw(this.prototype,e,a)}}static getPropertyDescriptor(e,r,s){var u;let{get:a,set:c}=(u=Uw(this.prototype,e))!=null?u:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);c.call(this,p),this.requestUpdate(e,m,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:vf}static _$Ei(){if(this.hasOwnProperty(vi("elementProperties")))return;let e=Vw(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(vi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vi("properties"))){let r=this.properties,s=[...Ww(r),...Bw(r)];for(let a of s)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[s,a]of r)this.elementProperties.set(s,a)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let a=this._$Eu(r,s);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let a of s)r.unshift(eo(a))}else e!==void 0&&r.push(eo(e));return r}static _$Eu(e,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,s;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return al(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostConnected)==null?void 0:a.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$EO(e,r){var c;let s=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,s);if(a!==void 0&&s.reflect===!0){let u=(((c=s.converter)==null?void 0:c.toAttribute)!==void 0?s.converter:no).toAttribute(r,s.type);this._$Em=e,u==null?this.removeAttribute(a):this.setAttribute(a,u),this._$Em=null}}_$AK(e,r){var c;let s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let u=s.getPropertyOptions(a),p=typeof u.converter=="function"?{fromAttribute:u.converter}:((c=u.converter)==null?void 0:c.fromAttribute)!==void 0?u.converter:no;this._$Em=a,this[a]=p.fromAttribute(r,u.type),this._$Em=null}}requestUpdate(e,r,s,a=!1,c){var u;if(e!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(e)),!((u=s.hasChanged)!=null?u:ul)(a?c:this[e],r))return;this.C(e,r,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,s){var a;this._$AL.has(e)||this._$AL.set(e,r),s.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return Cn(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[c,u]of this._$Ep)this[c]=u;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[c,u]of a)u.wrapped!==!0||this._$AL.has(c)||this[c]===void 0||this.C(c,this[c],u)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(s=this._$ES)==null||s.forEach(a=>{var c;return(c=a.hostUpdate)==null?void 0:c.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostUpdated)==null?void 0:a.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},xf;In.elementStyles=[],In.shadowRootOptions={mode:"open"},In[vi("elementProperties")]=new Map,In[vi("finalized")]=new Map,ll==null||ll({ReactiveElement:In}),((xf=an.reactiveElementVersions)!=null?xf:an.reactiveElementVersions=[]).push("2.0.0");v();var _i=globalThis,ro=_i.trustedTypes,wf=ro?ro.createPolicy("lit-html",{createHTML:i=>i}):void 0,fl="$lit$",Ue=`lit$${(Math.random()+"").slice(9)}$`,hl="?"+Ue,Zw=`<${hl}>`,Dn=document,io=()=>Dn.createComment(""),xi=i=>i===null||typeof i!="object"&&typeof i!="function",Of=Array.isArray,Cf=i=>Of(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",cl=`[ 	
\f\r]`,yi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bf=/-->/g,Ef=/>/g,Mn=RegExp(`>|${cl}(?:([^\\s"'>=/]+)(${cl}*=${cl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sf=/'/g,Tf=/"/g,If=/^(?:script|style|textarea|title)$/i,Mf=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),e1=Mf(1),n1=Mf(2),We=Symbol.for("lit-noChange"),Mt=Symbol.for("lit-nothing"),Af=new WeakMap,Ln=Dn.createTreeWalker(Dn,129);function Lf(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return wf!==void 0?wf.createHTML(e):e}var Df=(i,e)=>{let r=i.length-1,s=[],a,c=e===2?"<svg>":"",u=yi;for(let p=0;p<r;p++){let m=i[p],x,$,T=-1,R=0;for(;R<m.length&&(u.lastIndex=R,$=u.exec(m),$!==null);)R=u.lastIndex,u===yi?$[1]==="!--"?u=bf:$[1]!==void 0?u=Ef:$[2]!==void 0?(If.test($[2])&&(a=RegExp("</"+$[2],"g")),u=Mn):$[3]!==void 0&&(u=Mn):u===Mn?$[0]===">"?(u=a!=null?a:yi,T=-1):$[1]===void 0?T=-2:(T=u.lastIndex-$[2].length,x=$[1],u=$[3]===void 0?Mn:$[3]==='"'?Tf:Sf):u===Tf||u===Sf?u=Mn:u===bf||u===Ef?u=yi:(u=Mn,a=void 0);let I=u===Mn&&i[p+1].startsWith("/>")?" ":"";c+=u===yi?m+Zw:T>=0?(s.push(x),m.slice(0,T)+fl+m.slice(T)+Ue+I):m+Ue+(T===-2?p:I)}return[Lf(i,c+(i[r]||"<?>")+(e===2?"</svg>":"")),s]},Nn=class{constructor({strings:e,_$litType$:r},s){let a;this.parts=[];let c=0,u=0,p=e.length-1,m=this.parts,[x,$]=Df(e,r);if(this.el=Nn.createElement(x,s),Ln.currentNode=this.el.content,r===2){let T=this.el.content.firstChild;T.replaceWith(...T.childNodes)}for(;(a=Ln.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let T of a.getAttributeNames())if(T.endsWith(fl)){let R=$[u++],I=a.getAttribute(T).split(Ue),N=/([.?@])?(.*)/.exec(R);m.push({type:1,index:c,name:N[2],strings:I,ctor:N[1]==="."?oo:N[1]==="?"?ao:N[1]==="@"?lo:kn}),a.removeAttribute(T)}else T.startsWith(Ue)&&(m.push({type:6,index:c}),a.removeAttribute(T));if(If.test(a.tagName)){let T=a.textContent.split(Ue),R=T.length-1;if(R>0){a.textContent=ro?ro.emptyScript:"";for(let I=0;I<R;I++)a.append(T[I],io()),Ln.nextNode(),m.push({type:2,index:++c});a.append(T[R],io())}}}else if(a.nodeType===8)if(a.data===hl)m.push({type:2,index:c});else{let T=-1;for(;(T=a.data.indexOf(Ue,T+1))!==-1;)m.push({type:7,index:c}),T+=Ue.length-1}c++}}static createElement(e,r){let s=Dn.createElement("template");return s.innerHTML=e,s}};function Rn(i,e,r=i,s){var u,p,m;if(e===We)return e;let a=s!==void 0?(u=r._$Co)==null?void 0:u[s]:r._$Cl,c=xi(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),c===void 0?a=void 0:(a=new c(i),a._$AT(i,r,s)),s!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[s]=a:r._$Cl=a),a!==void 0&&(e=Rn(i,a._$AS(i,e.values),a,s)),e}var so=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var x;let{el:{content:r},parts:s}=this._$AD,a=((x=e==null?void 0:e.creationScope)!=null?x:Dn).importNode(r,!0);Ln.currentNode=a;let c=Ln.nextNode(),u=0,p=0,m=s[0];for(;m!==void 0;){if(u===m.index){let $;m.type===2?$=new Fn(c,c.nextSibling,this,e):m.type===1?$=new m.ctor(c,m.name,m.strings,this,e):m.type===6&&($=new uo(c,this,e)),this._$AV.push($),m=s[++p]}u!==(m==null?void 0:m.index)&&(c=Ln.nextNode(),u++)}return Ln.currentNode=Dn,a}p(e){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,r),r+=s.strings.length-2):s._$AI(e[r])),r++}},Fn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,s,a){var c;this.type=2,this._$AH=Mt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=a,this._$Cv=(c=a==null?void 0:a.isConnected)!=null?c:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Rn(this,e,r),xi(e)?e===Mt||e==null||e===""?(this._$AH!==Mt&&this._$AR(),this._$AH=Mt):e!==this._$AH&&e!==We&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Cf(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Mt&&xi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Dn.createTextNode(e)),this._$AH=e}g(e){var c;let{values:r,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Nn.createElement(Lf(s.h,s.h[0]),this.options)),s);if(((c=this._$AH)==null?void 0:c._$AD)===a)this._$AH.p(r);else{let u=new so(a,this),p=u.u(this.options);u.p(r),this.$(p),this._$AH=u}}_$AC(e){let r=Af.get(e.strings);return r===void 0&&Af.set(e.strings,r=new Nn(e)),r}T(e){Of(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,a=0;for(let c of e)a===r.length?r.push(s=new Fn(this.k(io()),this.k(io()),this,this.options)):s=r[a],s._$AI(c),a++;a<r.length&&(this._$AR(s&&s._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},kn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,a,c){this.type=1,this._$AH=Mt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=c,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Mt}_$AI(e,r=this,s,a){let c=this.strings,u=!1;if(c===void 0)e=Rn(this,e,r,0),u=!xi(e)||e!==this._$AH&&e!==We,u&&(this._$AH=e);else{let p=e,m,x;for(e=c[0],m=0;m<c.length-1;m++)x=Rn(this,p[s+m],r,m),x===We&&(x=this._$AH[m]),u||(u=!xi(x)||x!==this._$AH[m]),x===Mt?e=Mt:e!==Mt&&(e+=(x!=null?x:"")+c[m+1]),this._$AH[m]=x}u&&!a&&this.j(e)}j(e){e===Mt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},oo=class extends kn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Mt?void 0:e}},ao=class extends kn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Mt)}},lo=class extends kn{constructor(e,r,s,a,c){super(e,r,s,a,c),this.type=5}_$AI(e,r=this){var u;if((e=(u=Rn(this,e,r,0))!=null?u:Mt)===We)return;let s=this._$AH,a=e===Mt&&s!==Mt||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,c=e!==Mt&&(s===Mt||a);a&&this.element.removeEventListener(this.name,this,s),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,s;typeof this._$AH=="function"?this._$AH.call((s=(r=this.options)==null?void 0:r.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}},uo=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Rn(this,e)}},Nf={S:fl,A:Ue,P:hl,C:1,M:Df,L:so,R:Cf,V:Rn,D:Fn,I:kn,H:ao,N:lo,U:oo,B:uo},dl=_i.litHtmlPolyfillSupport,$f;dl==null||dl(Nn,Fn),(($f=_i.litHtmlVersions)!=null?$f:_i.litHtmlVersions=[]).push("3.0.0");v();v();v();var co=globalThis,fo=co.ShadowRoot&&(co.ShadyCSS===void 0||co.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pl=Symbol(),Rf=new WeakMap,wi=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==pl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(fo&&e===void 0){let s=r!==void 0&&r.length===1;s&&(e=Rf.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Rf.set(r,e))}return e}toString(){return this.cssText}},Ff=i=>new wi(typeof i=="string"?i:i+"",void 0,pl),B=(i,...e)=>{let r=i.length===1?i[0]:e.reduce((s,a,c)=>s+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+i[c+1],i[0]);return new wi(r,i,pl)},ml=(i,e)=>{if(fo)i.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),a=co.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=r.cssText,i.appendChild(s)}},ho=fo?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return Ff(r)})(i):i;var{is:qw,defineProperty:Yw,getOwnPropertyDescriptor:Jw,getOwnPropertyNames:Kw,getOwnPropertySymbols:Xw,getPrototypeOf:jw}=Object,ln=globalThis,kf=ln.trustedTypes,Qw=kf?kf.emptyScript:"",gl=ln.reactiveElementPolyfillSupport,bi=(i,e)=>i,vl={toAttribute(i,e){switch(e){case Boolean:i=i?Qw:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let r=i;switch(e){case Boolean:r=i!==null;break;case Number:r=i===null?null:Number(i);break;case Object:case Array:try{r=JSON.parse(i)}catch(s){r=null}}return r}},Wf=(i,e)=>!qw(i,e),Pf={attribute:!0,type:String,converter:vl,reflect:!1,hasChanged:Wf},Hf,zf;(Hf=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(zf=ln.litPropertyMetadata)!=null||(ln.litPropertyMetadata=new WeakMap);var Be=class extends HTMLElement{static addInitializer(e){var r;this._$Ei(),((r=this.l)!=null?r:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Pf){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){let s=Symbol(),a=this.getPropertyDescriptor(e,s,r);a!==void 0&&Yw(this.prototype,e,a)}}static getPropertyDescriptor(e,r,s){var u;let{get:a,set:c}=(u=Jw(this.prototype,e))!=null?u:{get(){return this[r]},set(p){this[r]=p}};return{get(){return a==null?void 0:a.call(this)},set(p){let m=a==null?void 0:a.call(this);c.call(this,p),this.requestUpdate(e,m,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var r;return(r=this.elementProperties.get(e))!=null?r:Pf}static _$Ei(){if(this.hasOwnProperty(bi("elementProperties")))return;let e=jw(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(bi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(bi("properties"))){let r=this.properties,s=[...Kw(r),...Xw(r)];for(let a of s)this.createProperty(a,r[a])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[s,a]of r)this.elementProperties.set(s,a)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let a=this._$Eu(r,s);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let a of s)r.unshift(ho(a))}else e!==void 0&&r.push(ho(e));return r}static _$Eu(e,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r,s;((r=this._$ES)!=null?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var r;(r=this._$ES)==null||r.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var r;let e=(r=this.shadowRoot)!=null?r:this.attachShadow(this.constructor.shadowRootOptions);return ml(e,this.constructor.elementStyles),e}connectedCallback(){var e,r;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostConnected)==null?void 0:a.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach(r=>{var s;return(s=r.hostDisconnected)==null?void 0:s.call(r)})}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$EO(e,r){var c;let s=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,s);if(a!==void 0&&s.reflect===!0){let u=(((c=s.converter)==null?void 0:c.toAttribute)!==void 0?s.converter:vl).toAttribute(r,s.type);this._$Em=e,u==null?this.removeAttribute(a):this.setAttribute(a,u),this._$Em=null}}_$AK(e,r){var c;let s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let u=s.getPropertyOptions(a),p=typeof u.converter=="function"?{fromAttribute:u.converter}:((c=u.converter)==null?void 0:c.fromAttribute)!==void 0?u.converter:vl;this._$Em=a,this[a]=p.fromAttribute(r,u.type),this._$Em=null}}requestUpdate(e,r,s,a=!1,c){var u;if(e!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(e)),!((u=s.hasChanged)!=null?u:Wf)(a?c:this[e],r))return;this.C(e,r,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,s){var a;this._$AL.has(e)||this._$AL.set(e,r),s.reflect===!0&&this._$Em!==e&&((a=this._$Ej)!=null?a:this._$Ej=new Set).add(e)}_$EP(){return Cn(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[c,u]of this._$Ep)this[c]=u;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[c,u]of a)u.wrapped!==!0||this._$AL.has(c)||this[c]===void 0||this.C(c,this[c],u)}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(s=this._$ES)==null||s.forEach(a=>{var c;return(c=a.hostUpdate)==null?void 0:c.call(a)}),this.update(r)):this._$ET()}catch(a){throw e=!1,this._$ET(),a}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)==null||r.forEach(s=>{var a;return(a=s.hostUpdated)==null?void 0:a.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}},Uf;Be.elementStyles=[],Be.shadowRootOptions={mode:"open"},Be[bi("elementProperties")]=new Map,Be[bi("finalized")]=new Map,gl==null||gl({ReactiveElement:Be}),((Uf=ln.reactiveElementVersions)!=null?Uf:ln.reactiveElementVersions=[]).push("2.0.0");v();var Si=globalThis,po=Si.trustedTypes,Bf=po?po.createPolicy("lit-html",{createHTML:i=>i}):void 0,Kf="$lit$",un=`lit$${(Math.random()+"").slice(9)}$`,Xf="?"+un,tb=`<${Xf}>`,zn=document,Ti=()=>zn.createComment(""),Ai=i=>i===null||typeof i!="object"&&typeof i!="function",jf=Array.isArray,eb=i=>jf(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",yl=`[ 	
\f\r]`,Ei=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vf=/-->/g,Gf=/>/g,Pn=RegExp(`>|${yl}(?:([^\\s"'>=/]+)(${yl}*=${yl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zf=/'/g,qf=/"/g,Qf=/^(?:script|style|textarea|title)$/i,th=i=>(e,...r)=>({_$litType$:i,strings:e,values:r}),D=th(1),l1=th(2),Un=Symbol.for("lit-noChange"),Lt=Symbol.for("lit-nothing"),Yf=new WeakMap,Hn=zn.createTreeWalker(zn,129);function eh(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bf!==void 0?Bf.createHTML(e):e}var nb=(i,e)=>{let r=i.length-1,s=[],a,c=e===2?"<svg>":"",u=Ei;for(let p=0;p<r;p++){let m=i[p],x,$,T=-1,R=0;for(;R<m.length&&(u.lastIndex=R,$=u.exec(m),$!==null);)R=u.lastIndex,u===Ei?$[1]==="!--"?u=Vf:$[1]!==void 0?u=Gf:$[2]!==void 0?(Qf.test($[2])&&(a=RegExp("</"+$[2],"g")),u=Pn):$[3]!==void 0&&(u=Pn):u===Pn?$[0]===">"?(u=a!=null?a:Ei,T=-1):$[1]===void 0?T=-2:(T=u.lastIndex-$[2].length,x=$[1],u=$[3]===void 0?Pn:$[3]==='"'?qf:Zf):u===qf||u===Zf?u=Pn:u===Vf||u===Gf?u=Ei:(u=Pn,a=void 0);let I=u===Pn&&i[p+1].startsWith("/>")?" ":"";c+=u===Ei?m+tb:T>=0?(s.push(x),m.slice(0,T)+Kf+m.slice(T)+un+I):m+un+(T===-2?p:I)}return[eh(i,c+(i[r]||"<?>")+(e===2?"</svg>":"")),s]},Wn=class{constructor({strings:e,_$litType$:r},s){let a;this.parts=[];let c=0,u=0,p=e.length-1,m=this.parts,[x,$]=nb(e,r);if(this.el=Wn.createElement(x,s),Hn.currentNode=this.el.content,r===2){let T=this.el.content.firstChild;T.replaceWith(...T.childNodes)}for(;(a=Hn.nextNode())!==null&&m.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let T of a.getAttributeNames())if(T.endsWith(Kf)){let R=$[u++],I=a.getAttribute(T).split(un),N=/([.?@])?(.*)/.exec(R);m.push({type:1,index:c,name:N[2],strings:I,ctor:N[1]==="."?wl:N[1]==="?"?bl:N[1]==="@"?El:Or}),a.removeAttribute(T)}else T.startsWith(un)&&(m.push({type:6,index:c}),a.removeAttribute(T));if(Qf.test(a.tagName)){let T=a.textContent.split(un),R=T.length-1;if(R>0){a.textContent=po?po.emptyScript:"";for(let I=0;I<R;I++)a.append(T[I],Ti()),Hn.nextNode(),m.push({type:2,index:++c});a.append(T[R],Ti())}}}else if(a.nodeType===8)if(a.data===Xf)m.push({type:2,index:c});else{let T=-1;for(;(T=a.data.indexOf(un,T+1))!==-1;)m.push({type:7,index:c}),T+=un.length-1}c++}}static createElement(e,r){let s=zn.createElement("template");return s.innerHTML=e,s}};function $r(i,e,r=i,s){var u,p,m;if(e===Un)return e;let a=s!==void 0?(u=r._$Co)==null?void 0:u[s]:r._$Cl,c=Ai(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((p=a==null?void 0:a._$AO)==null||p.call(a,!1),c===void 0?a=void 0:(a=new c(i),a._$AT(i,r,s)),s!==void 0?((m=r._$Co)!=null?m:r._$Co=[])[s]=a:r._$Cl=a),a!==void 0&&(e=$r(i,a._$AS(i,e.values),a,s)),e}var xl=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var x;let{el:{content:r},parts:s}=this._$AD,a=((x=e==null?void 0:e.creationScope)!=null?x:zn).importNode(r,!0);Hn.currentNode=a;let c=Hn.nextNode(),u=0,p=0,m=s[0];for(;m!==void 0;){if(u===m.index){let $;m.type===2?$=new Bn(c,c.nextSibling,this,e):m.type===1?$=new m.ctor(c,m.name,m.strings,this,e):m.type===6&&($=new Sl(c,this,e)),this._$AV.push($),m=s[++p]}u!==(m==null?void 0:m.index)&&(c=Hn.nextNode(),u++)}return Hn.currentNode=zn,a}p(e){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,r),r+=s.strings.length-2):s._$AI(e[r])),r++}},Bn=class{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,s,a){var c;this.type=2,this._$AH=Lt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=a,this._$Cv=(c=a==null?void 0:a.isConnected)!=null?c:!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=$r(this,e,r),Ai(e)?e===Lt||e==null||e===""?(this._$AH!==Lt&&this._$AR(),this._$AH=Lt):e!==this._$AH&&e!==Un&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):eb(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Lt&&Ai(this._$AH)?this._$AA.nextSibling.data=e:this.$(zn.createTextNode(e)),this._$AH=e}g(e){var c;let{values:r,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Wn.createElement(eh(s.h,s.h[0]),this.options)),s);if(((c=this._$AH)==null?void 0:c._$AD)===a)this._$AH.p(r);else{let u=new xl(a,this),p=u.u(this.options);u.p(r),this.$(p),this._$AH=u}}_$AC(e){let r=Yf.get(e.strings);return r===void 0&&Yf.set(e.strings,r=new Wn(e)),r}T(e){jf(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,a=0;for(let c of e)a===r.length?r.push(s=new Bn(this.k(Ti()),this.k(Ti()),this,this.options)):s=r[a],s._$AI(c),a++;a<r.length&&(this._$AR(s&&s._$AB.nextSibling,a),r.length=a)}_$AR(e=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},Or=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,a,c){this.type=1,this._$AH=Lt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=a,this.options=c,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Lt}_$AI(e,r=this,s,a){let c=this.strings,u=!1;if(c===void 0)e=$r(this,e,r,0),u=!Ai(e)||e!==this._$AH&&e!==Un,u&&(this._$AH=e);else{let p=e,m,x;for(e=c[0],m=0;m<c.length-1;m++)x=$r(this,p[s+m],r,m),x===Un&&(x=this._$AH[m]),u||(u=!Ai(x)||x!==this._$AH[m]),x===Lt?e=Lt:e!==Lt&&(e+=(x!=null?x:"")+c[m+1]),this._$AH[m]=x}u&&!a&&this.j(e)}j(e){e===Lt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},wl=class extends Or{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Lt?void 0:e}},bl=class extends Or{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Lt)}},El=class extends Or{constructor(e,r,s,a,c){super(e,r,s,a,c),this.type=5}_$AI(e,r=this){var u;if((e=(u=$r(this,e,r,0))!=null?u:Lt)===Un)return;let s=this._$AH,a=e===Lt&&s!==Lt||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,c=e!==Lt&&(s===Lt||a);a&&this.element.removeEventListener(this.name,this,s),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,s;typeof this._$AH=="function"?this._$AH.call((s=(r=this.options)==null?void 0:r.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}},Sl=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){$r(this,e)}};var _l=Si.litHtmlPolyfillSupport,Jf;_l==null||_l(Wn,Bn),((Jf=Si.litHtmlVersions)!=null?Jf:Si.litHtmlVersions=[]).push("3.0.0");var nh=(i,e,r)=>{var c,u;let s=(c=r==null?void 0:r.renderBefore)!=null?c:e,a=s._$litPart$;if(a===void 0){let p=(u=r==null?void 0:r.renderBefore)!=null?u:null;s._$litPart$=a=new Bn(e.insertBefore(Ti(),p),p,void 0,r!=null?r:{})}return a._$AI(i),a};var V=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r,s;let e=super.createRenderRoot();return(s=(r=this.renderOptions).renderBefore)!=null||(r.renderBefore=e.firstChild),e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Un}},rh;V._$litElement$=!0,V["finalized"]=!0,(rh=globalThis.litElementHydrateSupport)==null||rh.call(globalThis,{LitElement:V});var Tl=globalThis.litElementPolyfillSupport;Tl==null||Tl({LitElement:V});var ih;((ih=globalThis.litElementVersions)!=null?ih:globalThis.litElementVersions=[]).push("4.0.0");v();v();v();var Q=i=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};v();v();v();v();v();v();v();v();v();var Vn=class extends V{render(){return D` <div>Hello from SuperViz, ${this.name}</div> `}};Vn.properties={name:{type:String}},Vn.styles=B`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `,Vn=j([Q("superviz-hello-world")],Vn);v();v();v();var oh=Pw(sh()),Al=class{setConfig(e){this.configuration=e}get(e,r){return this.configuration?oh.default.get(this.configuration,e,r):r}},$l=new Al;v();v();var Ol=B`
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
`;v();var Cl=B`
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
`;var et=i=>{var r;class e extends i{connectedCallback(){setTimeout(()=>{var p,m;let a=document.getElementById("superviz-style"),c=this.createCustomColors(),u=document.createElement("style");u.innerHTML=(a==null?void 0:a.innerHTML)||"",(p=this.shadowRoot)==null||p.appendChild(u),c&&((m=this.shadowRoot)==null||m.appendChild(c))}),super.connectedCallback()}createCustomColors(){if(!$l.get("colors"))return;let a=document.createElement("style"),c=Object.entries($l.get("colors")).map(([u,p])=>`--${u}: ${p} !important;`).join(" ");return a.innerHTML=`
      * {
        ${c}
      }
    `,a}emitEvent(a,c,u={composed:!0,bubbles:!0}){let p=new CustomEvent(a,P({detail:c},u));this.dispatchEvent(p)}}return e.styles=[Ol,Cl,Il,Ml,(r=i.styles)!=null?r:[]],e};var ah=et(V),rb=[ah.styles],Gn=class extends ah{constructor(){super();this.name="",this.size="md"}render(){return D` <i class="sv-icon sv-icon-${this.name}_${this.size}"></i> `}};Gn.properties={name:{type:String},size:{type:String}},Gn.styles=[rb,B`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `],Gn=j([Q("superviz-icon")],Gn);v();v();v();v();var go={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vo=i=>(...e)=>({_$litDirective$:i,values:e}),Ir=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,s){this._$Ct=e,this._$AM=r,this._$Ci=s}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var dt=vo(class extends Ir{constructor(i){var e;if(super(i),i.type!==go.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var s,a;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(c=>c!=="")));for(let c in e)e[c]&&!((s=this.st)!=null&&s.has(c))&&this.it.add(c);return this.render(e)}let r=i.element.classList;for(let c of this.it)c in e||(r.remove(c),this.it.delete(c));for(let c in e){let u=!!e[c];u===this.it.has(c)||((a=this.st)==null?void 0:a.has(c))||(u?(r.add(c),this.it.add(c)):(r.remove(c),this.it.delete(c)))}return We}});v();var lh=B`
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
`;v();var uh=et(V),ib=[uh.styles,lh],Zn=class extends uh{constructor(){super(...arguments);this.menu=void 0;this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let s=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),c=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=s.includes(a),x=s.includes(c),$=s.includes(p);m||x||$||(this.open=!1)};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.callbackSelected=r=>{this.open=!1;let s=this.returnTo?r[this.returnTo]:r;this.emitEvent("selected",s,{bubbles:!1,composed:!1})};this.adjustPosition=()=>{this.adjustPositionVertical(),this.adjustPositionHorizontal()}}updated(r){if(!!r.has("open")){if(this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown),this.close()}}get dropdownBounds(){this.dropdownContent||(this.dropdownContent=this.shadowRoot.querySelector(".dropdown-content"));let r=this.dropdownContent.getBoundingClientRect(),{y:s,height:a,x:c,width:u}=this.menu.getBoundingClientRect();return{top:s,bottom:s+a+4,left:c,right:c+u,height:a+4,width:u,contentX:r.x,contentY:r.y,contentWidth:r.width}}positionVerticalAction(){let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,c=s>a,u=r<0;return c&&this.position.includes("bottom")||u&&this.position.includes("top")?2:!c&&!u&&this.shouldUseOriginalVertical()?1:0}positionHorizontalAction(){if(this.dropdownCovered())return 0;let{right:r,left:s,contentX:a,contentWidth:c,width:u}=this.dropdownBounds,{innerWidth:p}=window,m=r>p,$=s<0||m;if($&&!this.position.includes("center"))return 2;if(this.position.includes("center")){let T=a+c/2,R=T-u/2<0,I=T+u/2>p;if(R||I)return 2}return!$&&this.shouldUseOriginalHorizontal()?1:this.shouldCenter()&&this.position!==this.originalPosition&&!this.position.includes("center")?3:0}dropdownCovered(){let{left:r,right:s}=this.dropdownBounds,{innerWidth:a}=window;if(this.position.includes("center"))return!1;let c=s>a&&this.position.includes("left"),u=r<0&&this.position.includes("right");return c||u}shouldCenter(){let{contentX:r,contentWidth:s,width:a}=this.dropdownBounds,c=r+s/2,u=c-a/2<0,p=c+a/2>window.innerWidth;return!(u||p)}shouldUseOriginalVertical(){let{height:r,contentY:s}=this.dropdownBounds,{innerHeight:a}=window,c=s+r;return this.originalPosition.includes("bottom")?r+c<a:s-r>0}shouldUseOriginalHorizontal(){let{width:r,contentX:s}=this.dropdownBounds,{innerWidth:a}=window,c=s+r;return this.position===this.originalPosition?!1:this.originalPosition.includes("center")?c<a&&s-r>0:this.originalPosition.includes("left")?s-r>0:c<a}adjustPositionVertical(){let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,c=this.positionVerticalAction();if(c===0)return;if(c===1){let x=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,x);return}let u=a-s>r?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,u);this.position=m}adjustPositionHorizontal(){let{left:r,right:s,width:a}=this.dropdownBounds,c=r<0,u=s>window.innerWidth,p=this.positionHorizontalAction();if(p===0)return;if(p===1){let N=this.originalPosition.split("-")[1];this.position=this.position.replace(/left|center|right/,N);return}let m=c?s:r,x=(c?a:-a)/2-20,$=m+x;if(c=$<0,u=$+a>window.innerWidth,!(c||u)&&p===3||p===3){let N=this.position.replace(/left|right/,"center");this.position=N;return}if(this.position.includes("center")){let N=c?"right":"left",St=this.position.replace("center",N);this.position=St;return}let I=this.position.replace(/left|right/,"center");this.position=I}setMenu(){var r;if(!this.menu){this.menu=this.shadowRoot.querySelector(".menu");let s={rootMargin:"0px",threshold:1},a=new IntersectionObserver(this.adjustPosition,s),c=new ResizeObserver(this.adjustPosition),u=this.menu;a.observe(u),c.observe((r=this.scrollableParent)!=null?r:document.body)}}get scrollableParent(){let r;this.host||(this.host=this.getRootNode().host);let s=this.host;for(;!r;){let a=s==null?void 0:s.parentElement;if(this.isScrollable(a)){r=a;break}if(s=a,!s)break}return r}isScrollable(r){if(!r)return!1;let s=r.scrollHeight>r.clientHeight,a=window.getComputedStyle(r).overflowY,c=window.getComputedStyle(r).overflowX,u=a.indexOf("hidden")!==-1,p=c.indexOf("hidden")!==-1;return s&&!u&&!p}get renderHeader(){return this.name?D` <div class="header">
      <span class="text">${this.name}</span>
      <span class="sv-hr"></span>
    </div>`:D``}toggle(){this.disabled||(this.originalPosition||(this.originalPosition=this.position),this.setMenu(),this.open=!this.open,this.open&&setTimeout(()=>this.adjustPosition()))}render(){var c;let r={menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu--top-left":this.position==="top-left","menu--top-center":this.position==="top-center","menu--top-right":this.position==="top-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right","who-is-online-dropdown":this.name},s=(c=this.icons)==null?void 0:c.map(u=>D`<superviz-icon name="${u}" size="sm"></superviz-icon>`),a=this.options.map((u,p)=>{let m={text:!0,"text-bold":!0,active:(u==null?void 0:u[this.returnTo])&&this.active===(u==null?void 0:u[this.returnTo])};return D`<li @click=${()=>this.callbackSelected(u)} class=${dt(m)}>
        ${s==null?void 0:s.at(p)} ${u[this.label]}
      </li>`});return D`
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
`;var ch=et(V),sb=[ch.styles,yo],Mr=class extends ch{constructor(){super(...arguments);this.getContainer=()=>window.document.querySelector("superviz-modal-container");this.createContainer=r=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(r)};this.createModal=({detail:r})=>{this.createContainer(r),window.document.body.appendChild(this.modal)};this.destroyModal=()=>{var r;this.modal=void 0,(r=this.getContainer())==null||r.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};Mr.styles=sb,Mr=j([Q("superviz-modal")],Mr);v();var dh=et(V),ob=[dh.styles,yo],Lr=class extends dh{constructor(){super(...arguments);this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))};this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(r){this.options=r}render(){let r=()=>D`
        <div class="modal--header">
          <span class="text text-bold sv-gray-600">${this.options.title}</span>
          <div class="close" @click=${this.closeModal}>
            <superviz-icon name="close" size="md"></superviz-icon>
          </div>
        </div>
      `,s=()=>D`
        <div class="modal--body">
          <div class="modal--body-content">
            ${this.options.body}
          </div>
        </div>
      `,a=()=>{if(this.options.footer)return D`
          <div class="modal--footer">
            ${this.options.footer}
          </div>
        `;let c=this.options.confirmLabel||"OK",u=this.options.cancelLabel||"Cancel";return this.options.confirm&&this.options.cancel?D`
          <div class="modal--footer">
            <button class="text text-bold btn btn--cancel" @click=${this.closeModal}>${u}</button>
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

          ${s()}

          ${a()}
        </div>
      </div>
    `}};Lr.styles=ob,Lr=j([Q("superviz-modal-container")],Lr);v();v();v();v();v();var Ll=B`
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
`;v();var Rl=B`
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
`;v();var kl=B`
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
`;v();var zl=B`
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
`;v();var Ul=B`
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
`;v();var Vl;function Gl(i){let e=i.querySelector("#superviz-comments");if(e&&!Vl){let r={childList:!0,attributes:!0,characterData:!0,subtree:!0};Vl=new MutationObserver(s=>{s.forEach(a=>{!a.removedNodes.length||a.removedNodes.forEach(c=>{c.id==="poweredby-footer"&&ab(i)})})}),Vl.observe(e,r)}}function ab(i){let e=document.createElement("div");e.id="poweredby-footer",e.className="footer";let r=document.createElement("div");r.className="powered-by powered-by--horizontal";let s=document.createElement("a");s.href="https://superviz.com/",s.target="_blank",s.className="link";let a=document.createElement("div");a.textContent="Powered by";let c=document.createElement("img");c.width=48,c.height=8.86,c.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",r.appendChild(s),s.appendChild(a),a.appendChild(c),e.appendChild(r);let u=i.getElementById("superviz-comments");u&&u.appendChild(e),Gl(i)}var fh=et(V),lb=[fh.styles,Ll,Bl],qn=class extends fh{constructor(){super();this.annotations=[],this.annotationFilter="all",this.waterMarkState=!1}updateAnnotations(r){this.annotations=r}toggle(){this.emitEvent("toggle",{})}waterMarkStatus(r){this.waterMarkState=r}setFilter({detail:r}){let{filter:s}=r;this.annotationFilter=s}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".superviz-comments");!s||(this.waterMarkState&&Gl(this.shadowRoot),s.setAttribute("style",this.side))})}render(){let r=[this.open?"container":"container-close","superviz-comments"].join(" "),s=D` <div id="poweredby-footer" class="footer">
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
    </div>`,a=this.waterMarkState?s:"";return D`
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
    `}};qn.styles=lb,qn.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String}},qn=j([Q("superviz-comments")],qn);v();v();var ub=et(V),cb=[ub.styles,Dl],Yn=class extends et(V){constructor(){super();this.side="left"}close(){this.dispatchEvent(new CustomEvent("close"))}render(){return this.side==="left"?D`
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
    `}};Yn.styles=cb,Yn.properties={side:{type:String}},Yn=j([Q("superviz-comments-topbar")],Yn);v();var hh=et(V),db=[hh.styles,Nl],Jn=class extends hh{constructor(){super(...arguments);this.prepareToCreateAnnotation=s=>Cn(this,[s],function*({detail:r}){this.annotation=r,yield this.updateComplete,this.emitEvent("comment-input-focus",r)});this.cancelTemporaryAnnotation=()=>{this.annotation=null};this.cancelTemporaryAnnotationEsc=r=>{(r==null?void 0:r.key)==="Escape"&&(this.annotation=null)}}createComment({detail:r}){this.emitEvent("create-annotation",r),this.annotation=null}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.addEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.addEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)})}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.removeEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.removeEventListener("keyup",r=>{r.key==="Escape"&&this.cancelTemporaryAnnotationEsc(r)})}render(){let r={"annotations--comments-input":!0,hidden:!this.annotation};return D`
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
    `}};Jn.styles=db,Jn.properties={annotation:{type:Object}},Jn=j([Q("superviz-comments-annotations")],Jn);v();v();v();v();var{D:fb}=Nf;var ph=()=>document.createComment(""),Dr=(i,e,r)=>{var c;let s=i._$AA.parentNode,a=e===void 0?i._$AB:e._$AA;if(r===void 0){let u=s.insertBefore(ph(),a),p=s.insertBefore(ph(),a);r=new fb(u,p,i,i.options)}else{let u=r._$AB.nextSibling,p=r._$AM,m=p!==i;if(m){let x;(c=r._$AQ)==null||c.call(r,i),r._$AM=i,r._$AP!==void 0&&(x=i._$AU)!==p._$AU&&r._$AP(x)}if(u!==a||m){let x=r._$AA;for(;x!==u;){let $=x.nextSibling;s.insertBefore(x,a),x=$}}}return r},cn=(i,e,r=i)=>(i._$AI(e,r),i),hb={},mh=(i,e=hb)=>i._$AH=e,gh=i=>i._$AH,xo=i=>{var s;(s=i._$AP)==null||s.call(i,!1,!0);let e=i._$AA,r=i._$AB.nextSibling;for(;e!==r;){let a=e.nextSibling;e.remove(),e=a}};var vh=(i,e,r)=>{let s=new Map;for(let a=e;a<=r;a++)s.set(i[a],a);return s},yh=vo(class extends Ir{constructor(i){if(super(i),i.type!==go.CHILD)throw Error("repeat() can only be used in text expressions")}ht(i,e,r){let s;r===void 0?r=e:e!==void 0&&(s=e);let a=[],c=[],u=0;for(let p of i)a[u]=s?s(p,u):u,c[u]=r(p,u),u++;return{values:c,keys:a}}render(i,e,r){return this.ht(i,e,r).values}update(i,[e,r,s]){var St;let a=gh(i),{values:c,keys:u}=this.ht(e,r,s);if(!Array.isArray(a))return this.dt=u,c;let p=(St=this.dt)!=null?St:this.dt=[],m=[],x,$,T=0,R=a.length-1,I=0,N=c.length-1;for(;T<=R&&I<=N;)if(a[T]===null)T++;else if(a[R]===null)R--;else if(p[T]===u[I])m[I]=cn(a[T],c[I]),T++,I++;else if(p[R]===u[N])m[N]=cn(a[R],c[N]),R--,N--;else if(p[T]===u[N])m[N]=cn(a[T],c[N]),Dr(i,m[N+1],a[T]),T++,N--;else if(p[R]===u[I])m[I]=cn(a[R],c[I]),Dr(i,a[T],a[R]),R--,I++;else if(x===void 0&&(x=vh(u,I,N),$=vh(p,T,R)),x.has(p[T]))if(x.has(p[R])){let mt=$.get(u[I]),Tt=mt!==void 0?a[mt]:null;if(Tt===null){let fe=Dr(i,a[T]);cn(fe,c[I]),m[I]=fe}else m[I]=cn(Tt,c[I]),Dr(i,a[T],Tt),a[mt]=null;I++}else xo(a[R]),R--;else xo(a[T]),T++;for(;I<=N;){let mt=Dr(i,m[N+1]);cn(mt,c[I]),m[I++]=mt}for(;T<=R;){let mt=a[T++];mt!==null&&xo(mt)}return this.dt=u,mh(i,m),We}});var _h=et(V),pb=[_h.styles,Fl],Kn=class extends _h{constructor(){super();this.unselectAnnotation=()=>{this.selectedAnnotation=null};this.unselectAnnotationEsc=r=>{r&&(r==null?void 0:r.key)!=="Escape"||(this.selectedAnnotation=null)};this.selectAnnotation=({detail:r})=>{let{uuid:s}=r;if(this.selectedAnnotation===s){this.selectedAnnotation=null;return}this.selectedAnnotation=s};this.checkLastAnnotation=r=>{var c,u;let s=this.annotations.filter(p=>p.resolved),a=this.annotations.filter(p=>!p.resolved);return this.annotationFilter==="all"?r===((c=s[s.length-1])==null?void 0:c.uuid):r===((u=a[a.length-1])==null?void 0:u.uuid)};this.annotations=[]}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(`[uuid='${this.selectedAnnotation}']`);if(!s)return;let a=this.lastCommentId===this.selectedAnnotation,c=a?0:-150,u=s.getClientRects()[0];!u||(this.scrollBy(0,u.y+c),a&&setTimeout(()=>{this.scrollBy(0,u.y+c)},200))})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("select-annotation",this.selectAnnotation),window.document.body.addEventListener("keyup",this.unselectAnnotationEsc),window.document.body.addEventListener("unselect-annotation",this.unselectAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("select-annotation",this.selectAnnotation),window.document.body.removeEventListener("keyup",this.unselectAnnotationEsc),window.document.body.removeEventListener("unselect-annotation",this.unselectAnnotation)}render(){return D` ${yh(this.annotations.filter(r=>r.comments.length),r=>r.uuid,r=>D`
        <superviz-comments-annotation-item
          annotation=${JSON.stringify(r)}
          selected="${this.selectedAnnotation}"
          annotationFilter=${this.annotationFilter}
          uuid=${r.uuid}
          isLastComment=${this.checkLastAnnotation(r.uuid)}
        >
        </superviz-comments-annotation-item>
      `)}`}};Kn.styles=pb,Kn.properties={annotations:{type:Object},selectedAnnotation:{type:String},annotationFilter:{type:String}},Kn=j([Q("superviz-comments-content")],Kn);v();v();v();v();v();var Ve=class extends Error{},wo=class extends Ve{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},bo=class extends Ve{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},Eo=class extends Ve{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},Ge=class extends Ve{},Nr=class extends Ve{constructor(e){super(`Invalid unit ${e}`)}},Dt=class extends Ve{},xe=class extends Ve{constructor(){super("Zone is an abstract class")}};v();v();v();var L="numeric",we="short",te="long",dn={year:L,month:L,day:L},Oi={year:L,month:we,day:L},Zl={year:L,month:we,day:L,weekday:we},Ci={year:L,month:te,day:L},Ii={year:L,month:te,day:L,weekday:te},Mi={hour:L,minute:L},Li={hour:L,minute:L,second:L},Di={hour:L,minute:L,second:L,timeZoneName:we},Ni={hour:L,minute:L,second:L,timeZoneName:te},Ri={hour:L,minute:L,hourCycle:"h23"},Fi={hour:L,minute:L,second:L,hourCycle:"h23"},ki={hour:L,minute:L,second:L,hourCycle:"h23",timeZoneName:we},Pi={hour:L,minute:L,second:L,hourCycle:"h23",timeZoneName:te},Hi={year:L,month:L,day:L,hour:L,minute:L},zi={year:L,month:L,day:L,hour:L,minute:L,second:L},Ui={year:L,month:we,day:L,hour:L,minute:L},Wi={year:L,month:we,day:L,hour:L,minute:L,second:L},ql={year:L,month:we,day:L,weekday:we,hour:L,minute:L},Bi={year:L,month:te,day:L,hour:L,minute:L,timeZoneName:we},Vi={year:L,month:te,day:L,hour:L,minute:L,second:L,timeZoneName:we},Gi={year:L,month:te,day:L,weekday:te,hour:L,minute:L,timeZoneName:te},Zi={year:L,month:te,day:L,weekday:te,hour:L,minute:L,second:L,timeZoneName:te};v();v();v();v();var Zt=class{get type(){throw new xe}get name(){throw new xe}get ianaName(){return this.name}get isUniversal(){throw new xe}offsetName(e,r){throw new xe}formatOffset(e,r){throw new xe}offset(e){throw new xe}equals(e){throw new xe}get isValid(){throw new xe}};var Yl=null,Oe=class extends Zt{static get instance(){return Yl===null&&(Yl=new Oe),Yl}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:s}){return To(e,r,s)}formatOffset(e,r){return fn(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}};v();var $o={};function mb(i){return $o[i]||($o[i]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:i,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),$o[i]}var gb={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function vb(i,e){let r=i.format(e).replace(/\u200E/g,""),s=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,a,c,u,p,m,x,$]=s;return[u,a,c,p,m,x,$]}function yb(i,e){let r=i.formatToParts(e),s=[];for(let a=0;a<r.length;a++){let{type:c,value:u}=r[a],p=gb[c];c==="era"?s[p]=u:Y(p)||(s[p]=parseInt(u,10))}return s}var Ao={},Ot=class extends Zt{static create(e){return Ao[e]||(Ao[e]=new Ot(e)),Ao[e]}static resetCache(){Ao={},$o={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(r){return!1}}constructor(e){super(),this.zoneName=e,this.valid=Ot.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:s}){return To(e,r,s,this.name)}formatOffset(e,r){return fn(this.offset(e),r)}offset(e){let r=new Date(e);if(isNaN(r))return NaN;let s=mb(this.name),[a,c,u,p,m,x,$]=s.formatToParts?yb(s,r):vb(s,r);p==="BC"&&(a=-Math.abs(a)+1);let R=Rr({year:a,month:c,day:u,hour:m===24?0:m,minute:x,second:$,millisecond:0}),I=+r,N=I%1e3;return I-=N>=0?N:1e3+N,(R-I)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}};v();var xh={};function _b(i,e={}){let r=JSON.stringify([i,e]),s=xh[r];return s||(s=new Intl.ListFormat(i,e),xh[r]=s),s}var Jl={};function Kl(i,e={}){let r=JSON.stringify([i,e]),s=Jl[r];return s||(s=new Intl.DateTimeFormat(i,e),Jl[r]=s),s}var Xl={};function xb(i,e={}){let r=JSON.stringify([i,e]),s=Xl[r];return s||(s=new Intl.NumberFormat(i,e),Xl[r]=s),s}var jl={};function wb(i,e={}){let u=e,{base:r}=u,s=ol(u,["base"]),a=JSON.stringify([i,s]),c=jl[a];return c||(c=new Intl.RelativeTimeFormat(i,e),jl[a]=c),c}var qi=null;function bb(){return qi||(qi=new Intl.DateTimeFormat().resolvedOptions().locale,qi)}function Eb(i){let e=i.indexOf("-x-");e!==-1&&(i=i.substring(0,e));let r=i.indexOf("-u-");if(r===-1)return[i];{let s,a;try{s=Kl(i).resolvedOptions(),a=i}catch(p){let m=i.substring(0,r);s=Kl(m).resolvedOptions(),a=m}let{numberingSystem:c,calendar:u}=s;return[a,c,u]}}function Sb(i,e,r){return(r||e)&&(i.includes("-u-")||(i+="-u"),r&&(i+=`-ca-${r}`),e&&(i+=`-nu-${e}`)),i}function Tb(i){let e=[];for(let r=1;r<=12;r++){let s=H.utc(2009,r,1);e.push(i(s))}return e}function Ab(i){let e=[];for(let r=1;r<=7;r++){let s=H.utc(2016,11,13+r);e.push(i(s))}return e}function Oo(i,e,r,s){let a=i.listingMode();return a==="error"?null:a==="en"?r(e):s(e)}function $b(i){return i.numberingSystem&&i.numberingSystem!=="latn"?!1:i.numberingSystem==="latn"||!i.locale||i.locale.startsWith("en")||new Intl.DateTimeFormat(i.intl).resolvedOptions().numberingSystem==="latn"}var Ql=class{constructor(e,r,s){this.padTo=s.padTo||0,this.floor=s.floor||!1;let p=s,{padTo:a,floor:c}=p,u=ol(p,["padTo","floor"]);if(!r||Object.keys(u).length>0){let m=P({useGrouping:!1},s);s.padTo>0&&(m.minimumIntegerDigits=s.padTo),this.inf=xb(e,m)}}format(e){if(this.inf){let r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{let r=this.floor?Math.floor(e):Fr(e,3);return yt(r,this.padTo)}}},tu=class{constructor(e,r,s){this.opts=s,this.originalZone=void 0;let a;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){let u=-1*(e.offset/60),p=u>=0?`Etc/GMT+${u}`:`Etc/GMT${u}`;e.offset!==0&&Ot.create(p).valid?(a=p,this.dt=e):(a="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,a=e.zone.name):(a="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);let c=P({},this.opts);c.timeZone=c.timeZone||a,this.dtf=Kl(r,c)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){let s=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return Pt(P({},r),{value:s})}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},eu=class{constructor(e,r,s){this.opts=P({style:"long"},s),!r&&Co()&&(this.rtf=wb(e,s))}format(e,r){return this.rtf?this.rtf.format(e,r):wh(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}},it=class{static fromOpts(e){return it.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,r,s,a=!1){let c=e||lt.defaultLocale,u=c||(a?"en-US":bb()),p=r||lt.defaultNumberingSystem,m=s||lt.defaultOutputCalendar;return new it(u,p,m,c)}static resetCache(){qi=null,Jl={},Xl={},jl={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:s}={}){return it.create(e,r,s)}constructor(e,r,s,a){let[c,u,p]=Eb(e);this.locale=c,this.numberingSystem=r||u||null,this.outputCalendar=s||p||null,this.intl=Sb(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=$b(this)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:it.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone(Pt(P({},e),{defaultToEN:!0}))}redefaultToSystem(e={}){return this.clone(Pt(P({},e),{defaultToEN:!1}))}months(e,r=!1){return Oo(this,e,nu,()=>{let s=r?{month:e,day:"numeric"}:{month:e},a=r?"format":"standalone";return this.monthsCache[a][e]||(this.monthsCache[a][e]=Tb(c=>this.extract(c,s,"month"))),this.monthsCache[a][e]})}weekdays(e,r=!1){return Oo(this,e,ru,()=>{let s=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},a=r?"format":"standalone";return this.weekdaysCache[a][e]||(this.weekdaysCache[a][e]=Ab(c=>this.extract(c,s,"weekday"))),this.weekdaysCache[a][e]})}meridiems(){return Oo(this,void 0,()=>iu,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[H.utc(2016,11,13,9),H.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Oo(this,e,su,()=>{let r={era:e};return this.eraCache[e]||(this.eraCache[e]=[H.utc(-40,1,1),H.utc(2017,1,1)].map(s=>this.extract(s,r,"era"))),this.eraCache[e]})}extract(e,r,s){let a=this.dtFormatter(e,r),c=a.formatToParts(),u=c.find(p=>p.type.toLowerCase()===s);return u?u.value:null}numberFormatter(e={}){return new Ql(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new tu(e,this.intl,r)}relFormatter(e={}){return new eu(this.intl,this.isEnglish(),e)}listFormatter(e={}){return _b(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}};v();v();var au=null,_t=class extends Zt{static get utcInstance(){return au===null&&(au=new _t(0)),au}static instance(e){return e===0?_t.utcInstance:new _t(e)}static parseSpecifier(e){if(e){let r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new _t(Xn(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${fn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${fn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return fn(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}};v();var kr=class extends Zt{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function be(i,e){let r;if(Y(i)||i===null)return e;if(i instanceof Zt)return i;if(bh(i)){let s=i.toLowerCase();return s==="default"?e:s==="local"||s==="system"?Oe.instance:s==="utc"||s==="gmt"?_t.utcInstance:_t.parseSpecifier(s)||Ot.create(i)}else return Ce(i)?_t.instance(i):typeof i=="object"&&"offset"in i&&typeof i.offset=="function"?i:new kr(i)}var Eh=()=>Date.now(),Sh="system",Th=null,Ah=null,$h=null,Oh=60,Ch,lt=class{static get now(){return Eh}static set now(e){Eh=e}static set defaultZone(e){Sh=e}static get defaultZone(){return be(Sh,Oe.instance)}static get defaultLocale(){return Th}static set defaultLocale(e){Th=e}static get defaultNumberingSystem(){return Ah}static set defaultNumberingSystem(e){Ah=e}static get defaultOutputCalendar(){return $h}static set defaultOutputCalendar(e){$h=e}static get twoDigitCutoffYear(){return Oh}static set twoDigitCutoffYear(e){Oh=e%100}static get throwOnInvalid(){return Ch}static set throwOnInvalid(e){Ch=e}static resetCaches(){it.resetCache(),Ot.resetCache()}};function Y(i){return typeof i=="undefined"}function Ce(i){return typeof i=="number"}function Yi(i){return typeof i=="number"&&i%1===0}function bh(i){return typeof i=="string"}function Ih(i){return Object.prototype.toString.call(i)==="[object Date]"}function Co(){try{return typeof Intl!="undefined"&&!!Intl.RelativeTimeFormat}catch(i){return!1}}function Mh(i){return Array.isArray(i)?i:[i]}function lu(i,e,r){if(i.length!==0)return i.reduce((s,a)=>{let c=[e(a),a];return s&&r(s[0],c[0])===s[0]?s:c},null)[1]}function Lh(i,e){return e.reduce((r,s)=>(r[s]=i[s],r),{})}function hn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Ie(i,e,r){return Yi(i)&&i>=e&&i<=r}function Ob(i,e){return i-e*Math.floor(i/e)}function yt(i,e=2){let r=i<0,s;return r?s="-"+(""+-i).padStart(e,"0"):s=(""+i).padStart(e,"0"),s}function Ze(i){if(!(Y(i)||i===null||i===""))return parseInt(i,10)}function pn(i){if(!(Y(i)||i===null||i===""))return parseFloat(i)}function Ji(i){if(!(Y(i)||i===null||i==="")){let e=parseFloat("0."+i)*1e3;return Math.floor(e)}}function Fr(i,e,r=!1){let s=ff(10,e);return(r?Math.trunc:Math.round)(i*s)/s}function jn(i){return i%4===0&&(i%100!==0||i%400===0)}function Qn(i){return jn(i)?366:365}function Pr(i,e){let r=Ob(e-1,12)+1,s=i+(e-r)/12;return r===2?jn(s)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Rr(i){let e=Date.UTC(i.year,i.month-1,i.day,i.hour,i.minute,i.second,i.millisecond);return i.year<100&&i.year>=0&&(e=new Date(e),e.setUTCFullYear(i.year,i.month-1,i.day)),+e}function Hr(i){let e=(i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400))%7,r=i-1,s=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7;return e===4||s===3?53:52}function Ki(i){return i>99?i:i>lt.twoDigitCutoffYear?1900+i:2e3+i}function To(i,e,r,s=null){let a=new Date(i),c={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};s&&(c.timeZone=s);let u=P({timeZoneName:e},c),p=new Intl.DateTimeFormat(r,u).formatToParts(a).find(m=>m.type.toLowerCase()==="timezonename");return p?p.value:null}function Xn(i,e){let r=parseInt(i,10);Number.isNaN(r)&&(r=0);let s=parseInt(e,10)||0,a=r<0||Object.is(r,-0)?-s:s;return r*60+a}function uu(i){let e=Number(i);if(typeof i=="boolean"||i===""||Number.isNaN(e))throw new Dt(`Invalid unit value ${i}`);return e}function zr(i,e){let r={};for(let s in i)if(hn(i,s)){let a=i[s];if(a==null)continue;r[e(s)]=uu(a)}return r}function fn(i,e){let r=Math.trunc(Math.abs(i/60)),s=Math.trunc(Math.abs(i%60)),a=i>=0?"+":"-";switch(e){case"short":return`${a}${yt(r,2)}:${yt(s,2)}`;case"narrow":return`${a}${r}${s>0?`:${s}`:""}`;case"techie":return`${a}${yt(r,2)}${yt(s,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Xi(i){return Lh(i,["hour","minute","second","millisecond"])}var Cb=["January","February","March","April","May","June","July","August","September","October","November","December"],cu=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ib=["J","F","M","A","M","J","J","A","S","O","N","D"];function nu(i){switch(i){case"narrow":return[...Ib];case"short":return[...cu];case"long":return[...Cb];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var du=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],fu=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Mb=["M","T","W","T","F","S","S"];function ru(i){switch(i){case"narrow":return[...Mb];case"short":return[...fu];case"long":return[...du];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var iu=["AM","PM"],Lb=["Before Christ","Anno Domini"],Db=["BC","AD"],Nb=["B","A"];function su(i){switch(i){case"narrow":return[...Nb];case"short":return[...Db];case"long":return[...Lb];default:return null}}function Dh(i){return iu[i.hour<12?0:1]}function Nh(i,e){return ru(e)[i.weekday-1]}function Rh(i,e){return nu(e)[i.month-1]}function Fh(i,e){return su(e)[i.year<0?0:1]}function wh(i,e,r="always",s=!1){let a={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},c=["hours","minutes","seconds"].indexOf(i)===-1;if(r==="auto"&&c){let T=i==="days";switch(e){case 1:return T?"tomorrow":`next ${a[i][0]}`;case-1:return T?"yesterday":`last ${a[i][0]}`;case 0:return T?"today":`this ${a[i][0]}`;default:}}let u=Object.is(e,-0)||e<0,p=Math.abs(e),m=p===1,x=a[i],$=s?m?x[1]:x[2]||x[1]:m?a[i][0]:i;return u?`${p} ${$} ago`:`in ${p} ${$}`}function kh(i,e){let r="";for(let s of i)s.literal?r+=s.val:r+=e(s.val);return r}var Rb={D:dn,DD:Oi,DDD:Ci,DDDD:Ii,t:Mi,tt:Li,ttt:Di,tttt:Ni,T:Ri,TT:Fi,TTT:ki,TTTT:Pi,f:Hi,ff:Ui,fff:Bi,ffff:Gi,F:zi,FF:Wi,FFF:Vi,FFFF:Zi},xt=class{static create(e,r={}){return new xt(e,r)}static parseFormat(e){let r=null,s="",a=!1,c=[];for(let u=0;u<e.length;u++){let p=e.charAt(u);p==="'"?(s.length>0&&c.push({literal:a||/^\s+$/.test(s),val:s}),r=null,s="",a=!a):a||p===r?s+=p:(s.length>0&&c.push({literal:/^\s+$/.test(s),val:s}),s=p,r=p)}return s.length>0&&c.push({literal:a||/^\s+$/.test(s),val:s}),c}static macroTokenToFormatOpts(e){return Rb[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,P(P({},this.opts),r)).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,P(P({},this.opts),r))}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return yt(e,r);let s=P({},this.opts);return r>0&&(s.padTo=r),this.loc.numberFormatter(s).format(e)}formatDateTimeFromString(e,r){let s=this.loc.listingMode()==="en",a=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",c=(I,N)=>this.loc.extract(e,I,N),u=I=>e.isOffsetFixed&&e.offset===0&&I.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,I.format):"",p=()=>s?Dh(e):c({hour:"numeric",hourCycle:"h12"},"dayperiod"),m=(I,N)=>s?Rh(e,I):c(N?{month:I}:{month:I,day:"numeric"},"month"),x=(I,N)=>s?Nh(e,I):c(N?{weekday:I}:{weekday:I,month:"long",day:"numeric"},"weekday"),$=I=>{let N=xt.macroTokenToFormatOpts(I);return N?this.formatWithSystemDefault(e,N):I},T=I=>s?Fh(e,I):c({era:I},"era"),R=I=>{switch(I){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return u({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return u({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return u({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return p();case"d":return a?c({day:"numeric"},"day"):this.num(e.day);case"dd":return a?c({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return x("short",!0);case"cccc":return x("long",!0);case"ccccc":return x("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return x("short",!1);case"EEEE":return x("long",!1);case"EEEEE":return x("narrow",!1);case"L":return a?c({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return a?c({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return m("short",!0);case"LLLL":return m("long",!0);case"LLLLL":return m("narrow",!0);case"M":return a?c({month:"numeric"},"month"):this.num(e.month);case"MM":return a?c({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return m("short",!1);case"MMMM":return m("long",!1);case"MMMMM":return m("narrow",!1);case"y":return a?c({year:"numeric"},"year"):this.num(e.year);case"yy":return a?c({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return a?c({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return a?c({year:"numeric"},"year"):this.num(e.year,6);case"G":return T("short");case"GG":return T("long");case"GGGGG":return T("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return $(I)}};return kh(xt.parseFormat(r),R)}formatDurationFromString(e,r){let s=m=>{switch(m[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},a=m=>x=>{let $=s(x);return $?this.num(m.get($),x.length):x},c=xt.parseFormat(r),u=c.reduce((m,{literal:x,val:$})=>x?m:m.concat($),[]),p=e.shiftTo(...u.map(s).filter(m=>m));return kh(c,a(p))}};v();var Nt=class{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}};v();var Hh=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Wr(...i){let e=i.reduce((r,s)=>r+s.source,"");return RegExp(`^${e}$`)}function Br(...i){return e=>i.reduce(([r,s,a],c)=>{let[u,p,m]=c(e,a);return[P(P({},r),u),p||s,m]},[{},null,1]).slice(0,2)}function Vr(i,...e){if(i==null)return[null,null];for(let[r,s]of e){let a=r.exec(i);if(a)return s(a)}return[null,null]}function zh(...i){return(e,r)=>{let s={},a;for(a=0;a<i.length;a++)s[i[a]]=Ze(e[r+a]);return[s,null,r+a]}}var Uh=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Fb=`(?:${Uh.source}?(?:\\[(${Hh.source})\\])?)?`,hu=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Wh=RegExp(`${hu.source}${Fb}`),pu=RegExp(`(?:T${Wh.source})?`),kb=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Pb=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Hb=/(\d{4})-?(\d{3})/,zb=zh("weekYear","weekNumber","weekDay"),Ub=zh("year","ordinal"),Wb=/(\d{4})-(\d\d)-(\d\d)/,Bh=RegExp(`${hu.source} ?(?:${Uh.source}|(${Hh.source}))?`),Bb=RegExp(`(?: ${Bh.source})?`);function Ur(i,e,r){let s=i[e];return Y(s)?r:Ze(s)}function Vb(i,e){return[{year:Ur(i,e),month:Ur(i,e+1,1),day:Ur(i,e+2,1)},null,e+3]}function Gr(i,e){return[{hours:Ur(i,e,0),minutes:Ur(i,e+1,0),seconds:Ur(i,e+2,0),milliseconds:Ji(i[e+3])},null,e+4]}function ji(i,e){let r=!i[e]&&!i[e+1],s=Xn(i[e+1],i[e+2]),a=r?null:_t.instance(s);return[{},a,e+3]}function Qi(i,e){let r=i[e]?Ot.create(i[e]):null;return[{},r,e+1]}var Gb=RegExp(`^T?${hu.source}$`),Zb=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function qb(i){let[e,r,s,a,c,u,p,m,x]=i,$=e[0]==="-",T=m&&m[0]==="-",R=(I,N=!1)=>I!==void 0&&(N||I&&$)?-I:I;return[{years:R(pn(r)),months:R(pn(s)),weeks:R(pn(a)),days:R(pn(c)),hours:R(pn(u)),minutes:R(pn(p)),seconds:R(pn(m),m==="-0"),milliseconds:R(Ji(x),T)}]}var Yb={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function mu(i,e,r,s,a,c,u){let p={year:e.length===2?Ki(Ze(e)):Ze(e),month:cu.indexOf(r)+1,day:Ze(s),hour:Ze(a),minute:Ze(c)};return u&&(p.second=Ze(u)),i&&(p.weekday=i.length>3?du.indexOf(i)+1:fu.indexOf(i)+1),p}var Jb=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Kb(i){let[,e,r,s,a,c,u,p,m,x,$,T]=i,R=mu(e,a,s,r,c,u,p),I;return m?I=Yb[m]:x?I=0:I=Xn($,T),[R,new _t(I)]}function Xb(i){return i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var jb=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Qb=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,tE=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Ph(i){let[,e,r,s,a,c,u,p]=i;return[mu(e,a,s,r,c,u,p),_t.utcInstance]}function eE(i){let[,e,r,s,a,c,u,p]=i;return[mu(e,p,r,s,a,c,u),_t.utcInstance]}var nE=Wr(kb,pu),rE=Wr(Pb,pu),iE=Wr(Hb,pu),sE=Wr(Wh),Vh=Br(Vb,Gr,ji,Qi),oE=Br(zb,Gr,ji,Qi),aE=Br(Ub,Gr,ji,Qi),lE=Br(Gr,ji,Qi);function Gh(i){return Vr(i,[nE,Vh],[rE,oE],[iE,aE],[sE,lE])}function Zh(i){return Vr(Xb(i),[Jb,Kb])}function qh(i){return Vr(i,[jb,Ph],[Qb,Ph],[tE,eE])}function Yh(i){return Vr(i,[Zb,qb])}var uE=Br(Gr);function Jh(i){return Vr(i,[Gb,uE])}var cE=Wr(Wb,Bb),dE=Wr(Bh),fE=Br(Gr,ji,Qi);function Kh(i){return Vr(i,[cE,Vh],[dE,fE])}var Xh="Invalid Duration",Qh={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},hE=P({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},Qh),ue=146097/400,Zr=146097/4800,pE=P({years:{quarters:4,months:12,weeks:ue/7,days:ue,hours:ue*24,minutes:ue*24*60,seconds:ue*24*60*60,milliseconds:ue*24*60*60*1e3},quarters:{months:3,weeks:ue/28,days:ue/4,hours:ue*24/4,minutes:ue*24*60/4,seconds:ue*24*60*60/4,milliseconds:ue*24*60*60*1e3/4},months:{weeks:Zr/7,days:Zr,hours:Zr*24,minutes:Zr*24*60,seconds:Zr*24*60*60,milliseconds:Zr*24*60*60*1e3}},Qh),tr=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],mE=tr.slice(0).reverse();function mn(i,e,r=!1){let s={values:r?e.values:P(P({},i.values),e.values||{}),loc:i.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||i.conversionAccuracy,matrix:e.matrix||i.matrix};return new K(s)}function tp(i,e){var s;let r=(s=e.milliseconds)!=null?s:0;for(let a of mE.slice(1))e[a]&&(r+=e[a]*i[a].milliseconds);return r}function jh(i,e){let r=tp(i,e)<0?-1:1;tr.reduceRight((s,a)=>{if(Y(e[a]))return s;if(s){let c=e[s]*r,u=i[a][s],p=Math.floor(c/u);e[a]+=p*r,e[s]-=p*u*r}return a},null),tr.reduce((s,a)=>{if(Y(e[a]))return s;if(s){let c=e[s]%1;e[s]-=c,e[a]+=c*i[s][a]}return a},null)}function gE(i){let e={};for(let[r,s]of Object.entries(i))s!==0&&(e[r]=s);return e}var K=class{constructor(e){let r=e.conversionAccuracy==="longterm"||!1,s=r?pE:hE;e.matrix&&(s=e.matrix),this.values=e.values,this.loc=e.loc||it.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=s,this.isLuxonDuration=!0}static fromMillis(e,r){return K.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new Dt(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new K({values:zr(e,K.normalizeUnit),loc:it.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if(Ce(e))return K.fromMillis(e);if(K.isDuration(e))return e;if(typeof e=="object")return K.fromObject(e);throw new Dt(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){let[s]=Yh(e);return s?K.fromObject(s,r):K.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){let[s]=Jh(e);return s?K.fromObject(s,r):K.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new Dt("need to specify a reason the Duration is invalid");let s=e instanceof Nt?e:new Nt(e,r);if(lt.throwOnInvalid)throw new Eo(s);return new K({invalid:s})}static normalizeUnit(e){let r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new Nr(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){let s=Pt(P({},r),{floor:r.round!==!1&&r.floor!==!1});return this.isValid?xt.create(this.loc,s).formatDurationFromString(this,e):Xh}toHuman(e={}){if(!this.isValid)return Xh;let r=tr.map(s=>{let a=this.values[s];return Y(a)?null:this.loc.numberFormatter(Pt(P({style:"unit",unitDisplay:"long"},e),{unit:s.slice(0,-1)})).format(a)}).filter(s=>s);return this.loc.listFormatter(P({type:"conjunction",style:e.listStyle||"narrow"},e)).format(r)}toObject(){return this.isValid?P({},this.values):{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=Fr(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let r=this.toMillis();return r<0||r>=864e5?null:(e=Pt(P({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e),{includeOffset:!1}),H.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?tp(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e),s={};for(let a of tr)(hn(r.values,a)||hn(this.values,a))&&(s[a]=r.get(a)+this.get(a));return mn(this,{values:s},!0)}minus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;let r={};for(let s of Object.keys(this.values))r[s]=uu(e(this.values[s],s));return mn(this,{values:r},!0)}get(e){return this[K.normalizeUnit(e)]}set(e){if(!this.isValid)return this;let r=P(P({},this.values),zr(e,K.normalizeUnit));return mn(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:s,matrix:a}={}){let u={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:a,conversionAccuracy:s};return mn(this,u)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return jh(this.matrix,e),mn(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=gE(this.normalize().shiftToAll().toObject());return mn(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(u=>K.normalizeUnit(u));let r={},s={},a=this.toObject(),c;for(let u of tr)if(e.indexOf(u)>=0){c=u;let p=0;for(let x in s)p+=this.matrix[x][u]*s[x],s[x]=0;Ce(a[u])&&(p+=a[u]);let m=Math.trunc(p);r[u]=m,s[u]=(p*1e3-m*1e3)/1e3}else Ce(a[u])&&(s[u]=a[u]);for(let u in s)s[u]!==0&&(r[c]+=u===c?s[u]:s[u]/this.matrix[c][u]);return jh(this.matrix,r),mn(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return mn(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(s,a){return s===void 0||s===0?a===void 0||a===0:s===a}for(let s of tr)if(!r(this.values[s],e.values[s]))return!1;return!0}};v();var qr="Invalid Interval";function vE(i,e){return!i||!i.isValid?ft.invalid("missing or invalid start"):!e||!e.isValid?ft.invalid("missing or invalid end"):e<i?ft.invalid("end before start",`The end of an interval must be after its start, but you had start=${i.toISO()} and end=${e.toISO()}`):null}var ft=class{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new Dt("need to specify a reason the Interval is invalid");let s=e instanceof Nt?e:new Nt(e,r);if(lt.throwOnInvalid)throw new bo(s);return new ft({invalid:s})}static fromDateTimes(e,r){let s=Yr(e),a=Yr(r),c=vE(s,a);return c==null?new ft({start:s,end:a}):c}static after(e,r){let s=K.fromDurationLike(r),a=Yr(e);return ft.fromDateTimes(a,a.plus(s))}static before(e,r){let s=K.fromDurationLike(r),a=Yr(e);return ft.fromDateTimes(a.minus(s),a)}static fromISO(e,r){let[s,a]=(e||"").split("/",2);if(s&&a){let c,u;try{c=H.fromISO(s,r),u=c.isValid}catch(x){u=!1}let p,m;try{p=H.fromISO(a,r),m=p.isValid}catch(x){m=!1}if(u&&m)return ft.fromDateTimes(c,p);if(u){let x=K.fromISO(a,r);if(x.isValid)return ft.after(c,x)}else if(m){let x=K.fromISO(s,r);if(x.isValid)return ft.before(p,x)}}return ft.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds"){if(!this.isValid)return NaN;let r=this.start.startOf(e),s=this.end.startOf(e);return Math.floor(s.diff(r,e).get(e))+(s.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?ft.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];let r=e.map(Yr).filter(u=>this.contains(u)).sort(),s=[],{s:a}=this,c=0;for(;a<this.e;){let u=r[c]||this.e,p=+u>+this.e?this.e:u;s.push(ft.fromDateTimes(a,p)),a=p,c+=1}return s}splitBy(e){let r=K.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s}=this,a=1,c,u=[];for(;s<this.e;){let p=this.start.plus(r.mapUnits(m=>m*a));c=+p>+this.e?this.e:p,u.push(ft.fromDateTimes(s,c)),s=c,a+=1}return u}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let r=this.s>e.s?this.s:e.s,s=this.e<e.e?this.e:e.e;return r>=s?null:ft.fromDateTimes(r,s)}union(e){if(!this.isValid)return this;let r=this.s<e.s?this.s:e.s,s=this.e>e.e?this.e:e.e;return ft.fromDateTimes(r,s)}static merge(e){let[r,s]=e.sort((a,c)=>a.s-c.s).reduce(([a,c],u)=>c?c.overlaps(u)||c.abutsStart(u)?[a,c.union(u)]:[a.concat([c]),u]:[a,u],[[],null]);return s&&r.push(s),r}static xor(e){let r=null,s=0,a=[],c=e.map(m=>[{time:m.s,type:"s"},{time:m.e,type:"e"}]),u=Array.prototype.concat(...c),p=u.sort((m,x)=>m.time-x.time);for(let m of p)s+=m.type==="s"?1:-1,s===1?r=m.time:(r&&+r!=+m.time&&a.push(ft.fromDateTimes(r,m.time)),r=null);return ft.merge(a)}difference(...e){return ft.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:qr}toLocaleString(e=dn,r={}){return this.isValid?xt.create(this.s.loc.clone(r),e).formatInterval(this):qr}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:qr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:qr}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:qr}toFormat(e,{separator:r=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:qr}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):K.invalid(this.invalidReason)}mapEndpoints(e){return ft.fromDateTimes(e(this.s),e(this.e))}};v();var qe=class{static hasDST(e=lt.defaultZone){let r=H.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return Ot.isValidZone(e)}static normalizeZone(e){return be(e,lt.defaultZone)}static months(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null,outputCalendar:c="gregory"}={}){return(a||it.create(r,s,c)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null,outputCalendar:c="gregory"}={}){return(a||it.create(r,s,c)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null}={}){return(a||it.create(r,s,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:s=null,locObj:a=null}={}){return(a||it.create(r,s,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return it.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return it.create(r,null,"gregory").eras(e)}static features(){return{relative:Co()}}};v();function ep(i,e){let r=a=>a.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),s=r(e)-r(i);return Math.floor(K.fromMillis(s).as("days"))}function yE(i,e,r){let s=[["years",(m,x)=>x.year-m.year],["quarters",(m,x)=>x.quarter-m.quarter+(x.year-m.year)*4],["months",(m,x)=>x.month-m.month+(x.year-m.year)*12],["weeks",(m,x)=>{let $=ep(m,x);return($-$%7)/7}],["days",ep]],a={},c=i,u,p;for(let[m,x]of s)r.indexOf(m)>=0&&(u=m,a[m]=x(i,e),p=c.plus(a),p>e?(a[m]--,i=c.plus(a),i>e&&(p=i,a[m]--,i=c.plus(a))):i=p);return[i,a,p,u]}function np(i,e,r,s){let[a,c,u,p]=yE(i,e,r),m=e-a,x=r.filter(T=>["hours","minutes","seconds","milliseconds"].indexOf(T)>=0);x.length===0&&(u<e&&(u=a.plus({[p]:1})),u!==a&&(c[p]=(c[p]||0)+m/(u-a)));let $=K.fromObject(c,s);return x.length>0?K.fromMillis(m,s).shiftTo(...x).plus($):$}v();v();var gu={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},rp={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},_E=gu.hanidec.replace(/[\[|\]]/g,"").split("");function ip(i){let e=parseInt(i,10);if(isNaN(e)){e="";for(let r=0;r<i.length;r++){let s=i.charCodeAt(r);if(i[r].search(gu.hanidec)!==-1)e+=_E.indexOf(i[r]);else for(let a in rp){let[c,u]=rp[a];s>=c&&s<=u&&(e+=s-c)}}return parseInt(e,10)}else return e}function ce({numberingSystem:i},e=""){return new RegExp(`${gu[i||"latn"]}${e}`)}var xE="missing Intl.DateTimeFormat.formatToParts support";function ot(i,e=r=>r){return{regex:i,deser:([r])=>e(ip(r))}}var wE=String.fromCharCode(160),ap=`[ ${wE}]`,lp=new RegExp(ap,"g");function bE(i){return i.replace(/\./g,"\\.?").replace(lp,ap)}function sp(i){return i.replace(/\./g,"").replace(lp," ").toLowerCase()}function Ee(i,e){return i===null?null:{regex:RegExp(i.map(bE).join("|")),deser:([r])=>i.findIndex(s=>sp(r)===sp(s))+e}}function op(i,e){return{regex:i,deser:([,r,s])=>Xn(r,s),groups:e}}function Io(i){return{regex:i,deser:([e])=>e}}function EE(i){return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function SE(i,e){let r=ce(e),s=ce(e,"{2}"),a=ce(e,"{3}"),c=ce(e,"{4}"),u=ce(e,"{6}"),p=ce(e,"{1,2}"),m=ce(e,"{1,3}"),x=ce(e,"{1,6}"),$=ce(e,"{1,9}"),T=ce(e,"{2,4}"),R=ce(e,"{4,6}"),I=mt=>({regex:RegExp(EE(mt.val)),deser:([Tt])=>Tt,literal:!0}),St=(mt=>{if(i.literal)return I(mt);switch(mt.val){case"G":return Ee(e.eras("short"),0);case"GG":return Ee(e.eras("long"),0);case"y":return ot(x);case"yy":return ot(T,Ki);case"yyyy":return ot(c);case"yyyyy":return ot(R);case"yyyyyy":return ot(u);case"M":return ot(p);case"MM":return ot(s);case"MMM":return Ee(e.months("short",!0),1);case"MMMM":return Ee(e.months("long",!0),1);case"L":return ot(p);case"LL":return ot(s);case"LLL":return Ee(e.months("short",!1),1);case"LLLL":return Ee(e.months("long",!1),1);case"d":return ot(p);case"dd":return ot(s);case"o":return ot(m);case"ooo":return ot(a);case"HH":return ot(s);case"H":return ot(p);case"hh":return ot(s);case"h":return ot(p);case"mm":return ot(s);case"m":return ot(p);case"q":return ot(p);case"qq":return ot(s);case"s":return ot(p);case"ss":return ot(s);case"S":return ot(m);case"SSS":return ot(a);case"u":return Io($);case"uu":return Io(p);case"uuu":return ot(r);case"a":return Ee(e.meridiems(),0);case"kkkk":return ot(c);case"kk":return ot(T,Ki);case"W":return ot(p);case"WW":return ot(s);case"E":case"c":return ot(r);case"EEE":return Ee(e.weekdays("short",!1),1);case"EEEE":return Ee(e.weekdays("long",!1),1);case"ccc":return Ee(e.weekdays("short",!0),1);case"cccc":return Ee(e.weekdays("long",!0),1);case"Z":case"ZZ":return op(new RegExp(`([+-]${p.source})(?::(${s.source}))?`),2);case"ZZZ":return op(new RegExp(`([+-]${p.source})(${s.source})?`),2);case"z":return Io(/[a-z_+-/]{1,256}?/i);case" ":return Io(/[^\S\n\r]/);default:return I(mt)}})(i)||{invalidReason:xE};return St.token=i,St}var TE={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function AE(i,e,r){let{type:s,value:a}=i;if(s==="literal"){let m=/^\s+$/.test(a);return{literal:!m,val:m?" ":a}}let c=e[s],u=s;s==="hour"&&(e.hour12!=null?u=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?u="hour12":u="hour24":u=r.hour12?"hour12":"hour24");let p=TE[u];if(typeof p=="object"&&(p=p[c]),p)return{literal:!1,val:p}}function $E(i){return[`^${i.map(r=>r.regex).reduce((r,s)=>`${r}(${s.source})`,"")}$`,i]}function OE(i,e,r){let s=i.match(e);if(s){let a={},c=1;for(let u in r)if(hn(r,u)){let p=r[u],m=p.groups?p.groups+1:1;!p.literal&&p.token&&(a[p.token.val[0]]=p.deser(s.slice(c,c+m))),c+=m}return[s,a]}else return[s,{}]}function CE(i){let e=c=>{switch(c){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},r=null,s;return Y(i.z)||(r=Ot.create(i.z)),Y(i.Z)||(r||(r=new _t(i.Z)),s=i.Z),Y(i.q)||(i.M=(i.q-1)*3+1),Y(i.h)||(i.h<12&&i.a===1?i.h+=12:i.h===12&&i.a===0&&(i.h=0)),i.G===0&&i.y&&(i.y=-i.y),Y(i.u)||(i.S=Ji(i.u)),[Object.keys(i).reduce((c,u)=>{let p=e(u);return p&&(c[p]=i[u]),c},{}),r,s]}var vu=null;function IE(){return vu||(vu=H.fromMillis(1555555555555)),vu}function ME(i,e){if(i.literal)return i;let r=xt.macroTokenToFormatOpts(i.val),s=xu(r,e);return s==null||s.includes(void 0)?i:s}function yu(i,e){return Array.prototype.concat(...i.map(r=>ME(r,e)))}function _u(i,e,r){let s=yu(xt.parseFormat(r),i),a=s.map(u=>SE(u,i)),c=a.find(u=>u.invalidReason);if(c)return{input:e,tokens:s,invalidReason:c.invalidReason};{let[u,p]=$E(a),m=RegExp(u,"i"),[x,$]=OE(e,m,p),[T,R,I]=$?CE($):[null,null,void 0];if(hn($,"a")&&hn($,"H"))throw new Ge("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:s,regex:m,rawMatches:x,matches:$,result:T,zone:R,specificOffset:I}}}function up(i,e,r){let{result:s,zone:a,specificOffset:c,invalidReason:u}=_u(i,e,r);return[s,a,c,u]}function xu(i,e){if(!i)return null;let s=xt.create(e,i).dtFormatter(IE()),a=s.formatToParts(),c=s.resolvedOptions();return a.map(u=>AE(u,i,c))}v();var cp=[0,31,59,90,120,151,181,212,243,273,304,334],dp=[0,31,60,91,121,152,182,213,244,274,305,335];function de(i,e){return new Nt("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${i}, which is invalid`)}function fp(i,e,r){let s=new Date(Date.UTC(i,e-1,r));i<100&&i>=0&&s.setUTCFullYear(s.getUTCFullYear()-1900);let a=s.getUTCDay();return a===0?7:a}function hp(i,e,r){return r+(jn(i)?dp:cp)[e-1]}function pp(i,e){let r=jn(i)?dp:cp,s=r.findIndex(c=>c<e),a=e-r[s];return{month:s+1,day:a}}function Mo(i){let{year:e,month:r,day:s}=i,a=hp(e,r,s),c=fp(e,r,s),u=Math.floor((a-c+10)/7),p;return u<1?(p=e-1,u=Hr(p)):u>Hr(e)?(p=e+1,u=1):p=e,P({weekYear:p,weekNumber:u,weekday:c},Xi(i))}function wu(i){let{weekYear:e,weekNumber:r,weekday:s}=i,a=fp(e,1,4),c=Qn(e),u=r*7+s-a-3,p;u<1?(p=e-1,u+=Qn(p)):u>c?(p=e+1,u-=Qn(e)):p=e;let{month:m,day:x}=pp(p,u);return P({year:p,month:m,day:x},Xi(i))}function Lo(i){let{year:e,month:r,day:s}=i,a=hp(e,r,s);return P({year:e,ordinal:a},Xi(i))}function bu(i){let{year:e,ordinal:r}=i,{month:s,day:a}=pp(e,r);return P({year:e,month:s,day:a},Xi(i))}function mp(i){let e=Yi(i.weekYear),r=Ie(i.weekNumber,1,Hr(i.weekYear)),s=Ie(i.weekday,1,7);return e?r?s?!1:de("weekday",i.weekday):de("week",i.week):de("weekYear",i.weekYear)}function gp(i){let e=Yi(i.year),r=Ie(i.ordinal,1,Qn(i.year));return e?r?!1:de("ordinal",i.ordinal):de("year",i.year)}function Eu(i){let e=Yi(i.year),r=Ie(i.month,1,12),s=Ie(i.day,1,Pr(i.year,i.month));return e?r?s?!1:de("day",i.day):de("month",i.month):de("year",i.year)}function Su(i){let{hour:e,minute:r,second:s,millisecond:a}=i,c=Ie(e,0,23)||e===24&&r===0&&s===0&&a===0,u=Ie(r,0,59),p=Ie(s,0,59),m=Ie(a,0,999);return c?u?p?m?!1:de("millisecond",a):de("second",s):de("minute",r):de("hour",e)}var Tu="Invalid DateTime",vp=864e13;function Do(i){return new Nt("unsupported zone",`the zone "${i.name}" is not supported`)}function Au(i){return i.weekData===null&&(i.weekData=Mo(i.c)),i.weekData}function er(i,e){let r={ts:i.ts,zone:i.zone,c:i.c,o:i.o,loc:i.loc,invalid:i.invalid};return new H(Pt(P(P({},r),e),{old:r}))}function Sp(i,e,r){let s=i-e*60*1e3,a=r.offset(s);if(e===a)return[s,e];s-=(a-e)*60*1e3;let c=r.offset(s);return a===c?[s,a]:[i-Math.min(a,c)*60*1e3,Math.max(a,c)]}function No(i,e){i+=e*60*1e3;let r=new Date(i);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Fo(i,e,r){return Sp(Rr(i),e,r)}function yp(i,e){let r=i.o,s=i.c.year+Math.trunc(e.years),a=i.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,c=Pt(P({},i.c),{year:s,month:a,day:Math.min(i.c.day,Pr(s,a))+Math.trunc(e.days)+Math.trunc(e.weeks)*7}),u=K.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),p=Rr(c),[m,x]=Sp(p,r,i.zone);return u!==0&&(m+=u,x=i.zone.offset(m)),{ts:m,o:x}}function ts(i,e,r,s,a,c){let{setZone:u,zone:p}=r;if(i&&Object.keys(i).length!==0||e){let m=e||p,x=H.fromObject(i,Pt(P({},r),{zone:m,specificOffset:c}));return u?x:x.setZone(p)}else return H.invalid(new Nt("unparsable",`the input "${a}" can't be parsed as ${s}`))}function Ro(i,e,r=!0){return i.isValid?xt.create(it.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(i,e):null}function $u(i,e){let r=i.c.year>9999||i.c.year<0,s="";return r&&i.c.year>=0&&(s+="+"),s+=yt(i.c.year,r?6:4),e?(s+="-",s+=yt(i.c.month),s+="-",s+=yt(i.c.day)):(s+=yt(i.c.month),s+=yt(i.c.day)),s}function _p(i,e,r,s,a,c){let u=yt(i.c.hour);return e?(u+=":",u+=yt(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(u+=":")):u+=yt(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!r)&&(u+=yt(i.c.second),(i.c.millisecond!==0||!s)&&(u+=".",u+=yt(i.c.millisecond,3))),a&&(i.isOffsetFixed&&i.offset===0&&!c?u+="Z":i.o<0?(u+="-",u+=yt(Math.trunc(-i.o/60)),u+=":",u+=yt(Math.trunc(-i.o%60))):(u+="+",u+=yt(Math.trunc(i.o/60)),u+=":",u+=yt(Math.trunc(i.o%60)))),c&&(u+="["+i.zone.ianaName+"]"),u}var Tp={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},LE={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},DE={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Ap=["year","month","day","hour","minute","second","millisecond"],NE=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],RE=["year","ordinal","hour","minute","second","millisecond"];function xp(i){let e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[i.toLowerCase()];if(!e)throw new Nr(i);return e}function wp(i,e){let r=be(e.zone,lt.defaultZone),s=it.fromObject(e),a=lt.now(),c,u;if(Y(i.year))c=a;else{for(let x of Ap)Y(i[x])&&(i[x]=Tp[x]);let p=Eu(i)||Su(i);if(p)return H.invalid(p);let m=r.offset(a);[c,u]=Fo(i,m,r)}return new H({ts:c,zone:r,loc:s,o:u})}function bp(i,e,r){let s=Y(r.round)?!0:r.round,a=(u,p)=>(u=Fr(u,s||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(u,p)),c=u=>r.calendary?e.hasSame(i,u)?0:e.startOf(u).diff(i.startOf(u),u).get(u):e.diff(i,u).get(u);if(r.unit)return a(c(r.unit),r.unit);for(let u of r.units){let p=c(u);if(Math.abs(p)>=1)return a(p,u)}return a(i>e?-0:0,r.units[r.units.length-1])}function Ep(i){let e={},r;return i.length>0&&typeof i[i.length-1]=="object"?(e=i[i.length-1],r=Array.from(i).slice(0,i.length-1)):r=Array.from(i),[e,r]}var H=class{constructor(e){let r=e.zone||lt.defaultZone,s=e.invalid||(Number.isNaN(e.ts)?new Nt("invalid input"):null)||(r.isValid?null:Do(r));this.ts=Y(e.ts)?lt.now():e.ts;let a=null,c=null;if(!s)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[a,c]=[e.old.c,e.old.o];else{let p=r.offset(this.ts);a=No(this.ts,p),s=Number.isNaN(a.year)?new Nt("invalid input"):null,a=s?null:a,c=s?null:p}this._zone=r,this.loc=e.loc||it.create(),this.invalid=s,this.weekData=null,this.c=a,this.o=c,this.isLuxonDateTime=!0}static now(){return new H({})}static local(){let[e,r]=Ep(arguments),[s,a,c,u,p,m,x]=r;return wp({year:s,month:a,day:c,hour:u,minute:p,second:m,millisecond:x},e)}static utc(){let[e,r]=Ep(arguments),[s,a,c,u,p,m,x]=r;return e.zone=_t.utcInstance,wp({year:s,month:a,day:c,hour:u,minute:p,second:m,millisecond:x},e)}static fromJSDate(e,r={}){let s=Ih(e)?e.valueOf():NaN;if(Number.isNaN(s))return H.invalid("invalid input");let a=be(r.zone,lt.defaultZone);return a.isValid?new H({ts:s,zone:a,loc:it.fromObject(r)}):H.invalid(Do(a))}static fromMillis(e,r={}){if(Ce(e))return e<-vp||e>vp?H.invalid("Timestamp out of range"):new H({ts:e,zone:be(r.zone,lt.defaultZone),loc:it.fromObject(r)});throw new Dt(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if(Ce(e))return new H({ts:e*1e3,zone:be(r.zone,lt.defaultZone),loc:it.fromObject(r)});throw new Dt("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};let s=be(r.zone,lt.defaultZone);if(!s.isValid)return H.invalid(Do(s));let a=lt.now(),c=Y(r.specificOffset)?s.offset(a):r.specificOffset,u=zr(e,xp),p=!Y(u.ordinal),m=!Y(u.year),x=!Y(u.month)||!Y(u.day),$=m||x,T=u.weekYear||u.weekNumber,R=it.fromObject(r);if(($||p)&&T)throw new Ge("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(x&&p)throw new Ge("Can't mix ordinal dates with month/day");let I=T||u.weekday&&!$,N,St,mt=No(a,c);I?(N=NE,St=LE,mt=Mo(mt)):p?(N=RE,St=DE,mt=Lo(mt)):(N=Ap,St=Tp);let Tt=!1;for(let yn of N){let ko=u[yn];Y(ko)?Tt?u[yn]=St[yn]:u[yn]=mt[yn]:Tt=!0}let fe=I?mp(u):p?gp(u):Eu(u),qt=fe||Su(u);if(qt)return H.invalid(qt);let Ye=I?wu(u):p?bu(u):u,[he,gn]=Fo(Ye,c,s),vn=new H({ts:he,zone:s,o:gn,loc:R});return u.weekday&&$&&e.weekday!==vn.weekday?H.invalid("mismatched weekday",`you can't specify both a weekday of ${u.weekday} and a date of ${vn.toISO()}`):vn}static fromISO(e,r={}){let[s,a]=Gh(e);return ts(s,a,r,"ISO 8601",e)}static fromRFC2822(e,r={}){let[s,a]=Zh(e);return ts(s,a,r,"RFC 2822",e)}static fromHTTP(e,r={}){let[s,a]=qh(e);return ts(s,a,r,"HTTP",r)}static fromFormat(e,r,s={}){if(Y(e)||Y(r))throw new Dt("fromFormat requires an input string and a format");let{locale:a=null,numberingSystem:c=null}=s,u=it.fromOpts({locale:a,numberingSystem:c,defaultToEN:!0}),[p,m,x,$]=up(u,e,r);return $?H.invalid($):ts(p,m,s,`format ${r}`,e,x)}static fromString(e,r,s={}){return H.fromFormat(e,r,s)}static fromSQL(e,r={}){let[s,a]=Kh(e);return ts(s,a,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new Dt("need to specify a reason the DateTime is invalid");let s=e instanceof Nt?e:new Nt(e,r);if(lt.throwOnInvalid)throw new wo(s);return new H({invalid:s})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){let s=xu(e,it.fromObject(r));return s?s.map(a=>a?a.val:null).join(""):null}static expandFormat(e,r={}){return yu(xt.parseFormat(e),it.fromObject(r)).map(a=>a.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Au(this).weekYear:NaN}get weekNumber(){return this.isValid?Au(this).weekNumber:NaN}get weekday(){return this.isValid?Au(this).weekday:NaN}get ordinal(){return this.isValid?Lo(this.c).ordinal:NaN}get monthShort(){return this.isValid?qe.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?qe.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?qe.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?qe.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,r=6e4,s=Rr(this.c),a=this.zone.offset(s-e),c=this.zone.offset(s+e),u=this.zone.offset(s-a*r),p=this.zone.offset(s-c*r);if(u===p)return[this];let m=s-u*r,x=s-p*r,$=No(m,u),T=No(x,p);return $.hour===T.hour&&$.minute===T.minute&&$.second===T.second&&$.millisecond===T.millisecond?[er(this,{ts:m}),er(this,{ts:x})]:[this]}get isInLeapYear(){return jn(this.year)}get daysInMonth(){return Pr(this.year,this.month)}get daysInYear(){return this.isValid?Qn(this.year):NaN}get weeksInWeekYear(){return this.isValid?Hr(this.weekYear):NaN}resolvedLocaleOptions(e={}){let{locale:r,numberingSystem:s,calendar:a}=xt.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:s,outputCalendar:a}}toUTC(e=0,r={}){return this.setZone(_t.instance(e),r)}toLocal(){return this.setZone(lt.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:s=!1}={}){if(e=be(e,lt.defaultZone),e.equals(this.zone))return this;if(e.isValid){let a=this.ts;if(r||s){let c=e.offset(this.ts),u=this.toObject();[a]=Fo(u,c,e)}return er(this,{ts:a,zone:e})}else return H.invalid(Do(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:s}={}){let a=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:s});return er(this,{loc:a})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let r=zr(e,xp),s=!Y(r.weekYear)||!Y(r.weekNumber)||!Y(r.weekday),a=!Y(r.ordinal),c=!Y(r.year),u=!Y(r.month)||!Y(r.day),p=c||u,m=r.weekYear||r.weekNumber;if((p||a)&&m)throw new Ge("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&a)throw new Ge("Can't mix ordinal dates with month/day");let x;s?x=wu(P(P({},Mo(this.c)),r)):Y(r.ordinal)?(x=P(P({},this.toObject()),r),Y(r.day)&&(x.day=Math.min(Pr(x.year,x.month),x.day))):x=bu(P(P({},Lo(this.c)),r));let[$,T]=Fo(x,this.o,this.zone);return er(this,{ts:$,o:T})}plus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e);return er(this,yp(this,r))}minus(e){if(!this.isValid)return this;let r=K.fromDurationLike(e).negate();return er(this,yp(this,r))}startOf(e){if(!this.isValid)return this;let r={},s=K.normalizeUnit(e);switch(s){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break;case"milliseconds":break}if(s==="weeks"&&(r.weekday=1),s==="quarters"){let a=Math.ceil(this.month/3);r.month=(a-1)*3+1}return this.set(r)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e,r={}){return this.isValid?xt.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):Tu}toLocaleString(e=dn,r={}){return this.isValid?xt.create(this.loc.clone(r),e).formatDateTime(this):Tu}toLocaleParts(e={}){return this.isValid?xt.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:s=!1,includeOffset:a=!0,extendedZone:c=!1}={}){if(!this.isValid)return null;let u=e==="extended",p=$u(this,u);return p+="T",p+=_p(this,u,r,s,a,c),p}toISODate({format:e="extended"}={}){return this.isValid?$u(this,e==="extended"):null}toISOWeekDate(){return Ro(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:s=!0,includePrefix:a=!1,extendedZone:c=!1,format:u="extended"}={}){return this.isValid?(a?"T":"")+_p(this,u==="extended",r,e,s,c):null}toRFC2822(){return Ro(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Ro(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?$u(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:s=!0}={}){let a="HH:mm:ss.SSS";return(r||e)&&(s&&(a+=" "),r?a+="z":e&&(a+="ZZ")),Ro(this,a,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Tu}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let r=P({},this.c);return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",s={}){if(!this.isValid||!e.isValid)return K.invalid("created by diffing an invalid DateTime");let a=P({locale:this.locale,numberingSystem:this.numberingSystem},s),c=Mh(r).map(K.normalizeUnit),u=e.valueOf()>this.valueOf(),p=u?this:e,m=u?e:this,x=np(p,m,c,a);return u?x.negate():x}diffNow(e="milliseconds",r={}){return this.diff(H.now(),e,r)}until(e){return this.isValid?ft.fromDateTimes(this,e):this}hasSame(e,r){if(!this.isValid)return!1;let s=e.valueOf(),a=this.setZone(e.zone,{keepLocalTime:!0});return a.startOf(r)<=s&&s<=a.endOf(r)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let r=e.base||H.fromObject({},{zone:this.zone}),s=e.padding?this<r?-e.padding:e.padding:0,a=["years","months","days","hours","minutes","seconds"],c=e.unit;return Array.isArray(e.unit)&&(a=e.unit,c=void 0),bp(r,this.plus(s),Pt(P({},e),{numeric:"always",units:a,unit:c}))}toRelativeCalendar(e={}){return this.isValid?bp(e.base||H.fromObject({},{zone:this.zone}),this,Pt(P({},e),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...e){if(!e.every(H.isDateTime))throw new Dt("min requires all arguments be DateTimes");return lu(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(H.isDateTime))throw new Dt("max requires all arguments be DateTimes");return lu(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,s={}){let{locale:a=null,numberingSystem:c=null}=s,u=it.fromOpts({locale:a,numberingSystem:c,defaultToEN:!0});return _u(u,e,r)}static fromStringExplain(e,r,s={}){return H.fromFormatExplain(e,r,s)}static get DATE_SHORT(){return dn}static get DATE_MED(){return Oi}static get DATE_MED_WITH_WEEKDAY(){return Zl}static get DATE_FULL(){return Ci}static get DATE_HUGE(){return Ii}static get TIME_SIMPLE(){return Mi}static get TIME_WITH_SECONDS(){return Li}static get TIME_WITH_SHORT_OFFSET(){return Di}static get TIME_WITH_LONG_OFFSET(){return Ni}static get TIME_24_SIMPLE(){return Ri}static get TIME_24_WITH_SECONDS(){return Fi}static get TIME_24_WITH_SHORT_OFFSET(){return ki}static get TIME_24_WITH_LONG_OFFSET(){return Pi}static get DATETIME_SHORT(){return Hi}static get DATETIME_SHORT_WITH_SECONDS(){return zi}static get DATETIME_MED(){return Ui}static get DATETIME_MED_WITH_SECONDS(){return Wi}static get DATETIME_MED_WITH_WEEKDAY(){return ql}static get DATETIME_FULL(){return Bi}static get DATETIME_FULL_WITH_SECONDS(){return Vi}static get DATETIME_HUGE(){return Gi}static get DATETIME_HUGE_WITH_SECONDS(){return Zi}};function Yr(i){if(H.isDateTime(i))return i;if(i&&i.valueOf&&Ce(i.valueOf()))return H.fromJSDate(i);if(i&&typeof i=="object")return H.fromObject(i);throw new Dt(`Unknown datetime argument: ${i}, of type ${typeof i}`)}var $p=et(V),FE=[$p.styles,Rl],nr=class extends $p{constructor(){super();this.updateComment=({detail:r})=>{let{text:s}=r;this.text=s,this.closeEditMode(),this.emitEvent("update-comment",{uuid:this.uuid,text:s})};this.resolveAnnotation=r=>{r.stopPropagation(),this.emitEvent("resolve-annotation",{type:"resolve-annotation",resolved:!this.resolved},{composed:!1,bubbles:!1})};this.confirmDelete=()=>{if(this.deleteCommentModalOpen=!1,this.primaryComment)return this.emitEvent("delete-annotation",{uuid:this.annotationId});this.emitEvent("delete-comment",{annotationId:this.annotationId,uuid:this.uuid})};this.closeEditMode=()=>{this.mode="readonly"};this.resolved=!1}render(){var I;let r=this.annotationFilter==="all"?"resolve":"undo",s=N=>H.fromISO(N).toFormat("yyyy-dd-MM"),a=this.resolvable?"comment-item__resolve":"hidden",c=[{label:"EDIT"},{label:"DELETE"}],u=({detail:N})=>{N==="EDIT"&&(this.mode="editable"),N==="DELETE"&&(this.deleteCommentModalOpen=!0)},p=()=>{this.text.length<120||(this.expandElipsis=!0)},m=()=>{if(this.mode==="editable")return D`
        <superviz-comments-comment-input
          class="comment-item--editable"
          editable
          @click=${N=>N.stopPropagation()}
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
      `},$=()=>{this.deleteCommentModalOpen=!1},T={"comment-item":!0,reply:!this.primaryComment},R=!this.expandElipsis&&this.text.length>120?"line-clamp":"";return D`
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
              @click=${N=>N.stopPropagation()}
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
        @close=${$}
        @confirm=${this.confirmDelete}
      >
      </superviz-comments-delete-comments-modal>
    `}};nr.styles=FE,nr.properties={uuid:{type:String},annotationId:{type:String},avatar:{type:String},username:{type:String},text:{type:String},resolved:{type:Boolean},resolvable:{type:Boolean},createdAt:{type:String},mode:{type:String},deleteCommentModalOpen:{type:Boolean},primaryComment:{type:Boolean},expandElipsis:{type:Boolean},annotationFilter:{type:String}},nr=j([Q("superviz-comments-comment-item")],nr);v();var Op=et(V),kE=[Op.styles,kl],rr=class extends Op{constructor(){super();this.pinCoordinates=null;this.getCommentInput=()=>this.shadowRoot.getElementById("comment-input--textarea");this.getCommentInputContainer=()=>this.shadowRoot.getElementById("comment-input--container");this.getSendBtn=()=>this.shadowRoot.querySelector(".comment-input--send-btn");this.commentInputFocus=({detail:r})=>{this.pinCoordinates=r,this.getCommentInput().focus()};this.sendEnter=r=>{if(r.key!=="Enter"||r.shiftKey)return;let s=this.getCommentInput(),a=s.value.trim();if(!a)return;let c=this.getSendBtn();this.emitEvent(this.eventType,{text:a,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",c.disabled=!0,this.updateHeight()};this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1})};this.btnActive=!1,this.text=""}connectedCallback(){super.connectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&(window.document.body.addEventListener("comment-input-focus",this.commentInputFocus),this.addEventListener("keyup",this.sendEnter))}disconnectedCallback(){super.disconnectedCallback(),this.eventType==="create-annotation"&&window.document.body.removeEventListener("comment-input-focus",this.commentInputFocus)}updated(r){if(r.has("text")&&this.text.length>0){let s=this.getCommentInput();s.value=this.text,this.updateHeight()}if(r.has("btnActive")){let s=this.getSendBtn();s.disabled=!this.btnActive}}updateHeight(){let r=this.getCommentInput(),s=this.getCommentInputContainer();r.style.height="0px",s.style.height="0px";let a=r.scrollHeight+4,c=r.scrollHeight;r.style.height=`${a}px`,s.style.height=`${c}px`;let u=this.getSendBtn();u.disabled=!(r.value.length>0)}send(r){r.preventDefault();let s=this.getCommentInput(),a=this.getSendBtn(),c=s.value;this.emitEvent(this.eventType,{text:c,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",a.disabled=!0,this.updateHeight()}render(){var a;let r=()=>{if(!!this.editable)return D`
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
      `},s=()=>{if(!this.editable)return D`
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
            ${s()} ${r()}
          </div>
        </div>
      </div>
    `}};rr.styles=kE,rr.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean},placeholder:{type:String}},rr=j([Q("superviz-comments-comment-input")],rr);v();var Cp=et(V),PE=[Cp.styles,zl],ir=class extends Cp{constructor(){super();this.position={x:0,y:0}}get userInitial(){var s,a,c;return(((c=(a=(s=this.annotation)==null?void 0:s.comments[0])==null?void 0:a.participant)==null?void 0:c.name)||"Anonymous")[0].toUpperCase()}emitClick(){document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:this.annotation.uuid}}))}render(){var s,a;let r={"annotation-pin":!0,"annotation-pin--active":this.active};return this.type==="add"?D`
        <div
          class=${dt(r)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          <div class="annotation-pin__avatar annotation-pin__avatar--add">
            <superviz-icon name="add"></superviz-icon>
          </div>
        </div>
      `:D`
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
    `}};ir.styles=PE,ir.properties={type:{type:String},annotation:{type:Object},position:{type:Object},active:{type:Boolean}},ir=j([Q("superviz-comments-annotation-pin")],ir);v();var Ip=et(V),HE=[Ip.styles,Pl],sr=class extends Ip{constructor(){super(...arguments);this.selectAnnotation=()=>{let{uuid:r}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:r}}))};this.resolveAnnotation=({detail:r})=>{let{uuid:s}=this.annotation,{resolved:a,type:c}=r,u=c==="resolve-annotation"&&this.annotationFilter==="all";this.resolved=a,this.emitEvent("resolve-annotation",{uuid:s,resolved:a}),u&&(this.shouldShowUndoResolved=!0)};this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1};this.generateExpantedCommentesTemplate=(r,s)=>s===0?D``:D`
      <superviz-comments-comment-item
        uuid=${r.uuid}
        avatar="https://picsum.photos/200/300"
        username=${r.participant.name||"Anonymous"}
        text=${r.text}
        createdAt=${r.createdAt}
        annotationId=${this.annotation.uuid}
      ></superviz-comments-comment-item>
    `}get filterIsAll(){return this.annotationFilter==="all"}get filterIsResolved(){return this.annotationFilter==="resolved"}get shouldHiddenAnnotation(){return{hidden:this.resolved&&this.filterIsAll||!this.resolved&&this.filterIsResolved}}get replies(){return[...this.annotation.comments].splice(1).length}get repliesSize(){return this.replies>=5?5:this.replies}get replyText(){return this.replies!==1?"replies":"reply"}get isSelected(){return this.selected===this.annotation.uuid}get annotationClasses(){return{"annotation-item":!0,"annotation-item--selected":this.isSelected}}get hrClasses(){return{"sv-hr":!0,hidden:this.isLastAnnotation}}get avatarCommentsClasses(){return{"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&this.replies>1,hidden:!(!this.expandComments&&this.replies>=1)}}get commentsClasses(){return{"comments-container":!0,"comment-item--expand":this.isSelected&&this.expandComments,hidden:!(this.isSelected&&this.expandComments)}}firstUpdated(){this.resolved=this.annotation.resolved}updated(r){if(r.has("selected")){let s=this.selected===this.annotation.uuid;this.expandComments=s}}createComment({detail:r}){let{text:s}=r;this.emitEvent("create-comment",{uuid:this.annotation.uuid,text:s})}generateAvatarCommentsTemplate(){var s,a;let r=[];for(let c=1;c<=this.repliesSize;c++)r.push(D`
        <div class="avatar">
          <p class="text text-bold">
            ${((a=(s=this.annotation.comments[c])==null?void 0:s.participant.name[0])==null?void 0:a.toUpperCase())||"A"}
          </p>
        </div>
      `);return D`
      ${r}
      <div class="text text-big sv-gray-500">${this.replies} ${this.replyText}</div>
    `}annotationResolvedTemplate(){return this.shouldShowUndoResolved?D`
      <superviz-comments-annotation-resolved
        @undo-resolve=${this.resolveAnnotation}
        @hide=${this.hideUndoResolved}
        class=${dt({hidden:this.filterIsResolved})}
      >
      </superviz-comments-annotation-resolved>
    `:D``}render(){var r,s,a,c,u,p;return D`
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
    `}};sr.styles=HE,sr.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String}},sr=j([Q("superviz-comments-annotation-item")],sr);v();var Mp=et(V),zE=[Mp.styles],or=class extends Mp{constructor(){super(...arguments);this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:D`<span class="text text-big sv-gray-600">Are you sure you want to delete this comment? <br /> This action cannot be undone</span>`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))};this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{!this.open||this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{!this.open||(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(r){r.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){!this.open||(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){let r=()=>{if(!!this.useSlot)return D`<slot name="modal-handler" @click=${this.toggle}></slot>`},s=()=>{if(!!this.open)return D`
        <superviz-modal></superviz-modal>
      `};return D`
      ${r()}
      ${s()}
    `}};or.styles=zE,or.properties={open:{type:Boolean},useSlot:{type:Boolean}},or=j([Q("superviz-comments-delete-comments-modal")],or);v();var Lp=et(V),UE=[Lp.styles,Hl],WE=10*1e3,ar=class extends Lp{constructor(){super();this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)};this.timeToHide=WE,this.isCanceled=!1}firstUpdated(){this.setTimer()}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return this.timeToHide===0?D``:this.isCanceled?D``:D`
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
    `}};ar.styles=UE,ar.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},ar=j([Q("superviz-comments-annotation-resolved")],ar);v();var Dp=et(V),BE=[Dp.styles,Ul],es=[{label:"All comments",code:"all"},{label:"Resolved comments",code:"resolved"}],lr=class extends Dp{constructor(){super();this.caret="down"}render(){let r=this.filter==="all"?es[0].label:es[1].label,s=({detail:p})=>{this.emitEvent("select",{filter:p}),a()},a=()=>{this.caret=this.caret==="down"?"up":"down"},c=this.filter==="all"?es[0].code:es[1].code,u={text:!0,"text-bold":!0,"select-content":!0,"sv-gray-500":this.caret==="down","sv-gray-700":this.caret==="up"};return D`
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
              <span class=${dt(u)}>${r}</span>
              <superviz-icon name=${this.caret} size="md"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};lr.styles=BE,lr.properties={filter:{type:String},caret:{type:String}},lr=j([Q("superviz-comments-annotation-filter")],lr);v();var Np=et(V),VE=[Np.styles,Wl],ur=class extends Np{constructor(){super();this.isHidden=!0,this.positionStyles="top: 20px; left: 20px;",this.shouldHide=!1,this.commentsPosition="left"}toggle(){this.emitEvent("toggle",{})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("toggle-annotation-sidebar",()=>{this.isHidden=!this.isHidden})}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".float-button");if(!s)return;s.setAttribute("style",this.positionStyles);let a=window.document.body.getBoundingClientRect().width,c=s.getBoundingClientRect(),u=320;if(!this.commentsPosition||this.commentsPosition==="left"){this.shouldHide=c.x<u;return}this.shouldHide=a-c.right<u})}render(){let r={"float-button":!0,"hide-button":!this.isHidden&&this.shouldHide};return D` <button @click=${this.toggle} class="${dt(r)}">
      <superviz-icon name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`}};ur.styles=VE,ur.properties={positionStyles:{type:String},isHidden:{type:Boolean},commentsPosition:{type:String}},ur=j([Q("superviz-comments-button")],ur);v();v();v();var ns=(r=>(r.GOTO="GO TO",r.FOLLOW="FOLLOW",r))(ns||{});v();v();var Ou=B`
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
`;v();var Cu=B`
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
`;var Rp=et(V),GE=[Rp.styles,Ou],cr=class extends Rp{constructor(){super();this.onClickOutDropdown=({detail:r})=>{this.open=r.open};this.dropdownOptionsHandler=({detail:r})=>{};this.position="top: 20px; right: 40px;",this.open=!1,this.textColorValues=[2,4,5,7,8,16]}updateParticipants(r){this.participants=r}toggleOpen(){this.open=!this.open}dropdownPosition(r){if(this.participants.length===1)return"bottom-center";if(r===0)return"bottom-right";let s=this.participants.length>4,a=r+1===this.participants.length;return s||!a?"bottom-center":"bottom-left"}renderExcessParticipants(){let r=this.participants.length-4;if(r<=0)return D``;let s=this.participants.slice(4).map(({name:u,color:p,id:m,slotIndex:x,avatar:$,isLocal:T})=>({name:u,color:p,id:m,slotIndex:x,avatar:$,isLocal:T})),a={"superviz-who-is-online__participant":!0,excess_participants:!0,"excess_participants--open":this.open};return D`
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
    `}getAvatar(r){var a,c;if((a=r.avatar)!=null&&a.imageUrl)return D` <img
        class="superviz-who-is-online__avatar"
        src=${r.avatar.imageUrl}
      />`;let s=this.textColorValues.includes(r.slotIndex)?"#FFFFFF":"#26242A";return D`<div
      class="superviz-who-is-online__avatar"
      style="background-color: ${r.color}; color: ${s}"
    >
      ${(c=r.name)==null?void 0:c.at(0)}
    </div>`}renderParticipants(){if(!this.participants)return D``;let r=["place","send"];return D`${this.participants.slice(0,4).map((s,a)=>{var x;let c=this.textColorValues.includes(s.slotIndex)?"#FFFFFF":"#26242A",u=Object.values(ns).map($=>({label:$,id:s.id})).splice(0,1),p={"superviz-who-is-online__participant":!0,local:s.isLocal},m=this.dropdownPosition(a);return D`
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
              ${(x=s.name)==null?void 0:x.at(0).toUpperCase()}
            </div>
          </div>
        </superviz-dropdown>
      `})}
    ${this.renderExcessParticipants()} `}updated(r){super.updated(r),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".superviz-who-is-online");!s||s.setAttribute("style",this.position)})}render(){return D` <div class="superviz-who-is-online">${this.renderParticipants()}</div>`}};cr.styles=GE,cr.properties={position:{type:String},participants:{type:Object},open:{type:Boolean}},cr=j([Q("superviz-who-is-online")],cr);v();v();var Fp=et(V),ZE=[Fp.styles,Cu],dr=class extends Fp{constructor(){super();this.onClickOutDropdown=r=>{if(r.stopPropagation(),!this.open)return;let s=r.composedPath(),a=this.shadowRoot.querySelector(".dropdown-content"),c=this.shadowRoot.querySelector(".dropdown-list"),p=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],m=s.includes(a),x=s.includes(c),$=s.includes(p);m||x||$||(this.open=!1,this.selected="",this.emitEvent("clickout",{detail:{open:this.open},bubbles:!1,composed:!1}))};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.dropdownOptionsHandler=({detail:r})=>{};this.selectParticipant=r=>()=>{this.selected=r};this.adjustPosition=()=>{let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,c=this.positionAction();if(c===0)return;if(c===1){let x=this.originalPosition.split("-")[0];this.position=this.position.replace(/top|bottom/,x);return}let u=a-s>r?"bottom":"top",p=this.position.split("-")[0],m=this.position.replace(p,u);this.position=m};this.textColorValues=[2,4,5,7,8,16],this.selected=""}updated(r){if(r.has("open")){if(this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown),this.close()}}getAvatar(r){var a,c;if((a=r.avatar)!=null&&a.imageUrl)return D` <img
        class="who-is-online-dropdown__avatar"
        src=${r.avatar.imageUrl}
      />`;let s=this.textColorValues.includes(r.slotIndex)?"#FFFFFF":"#26242A";return D`<div
      class="who-is-online-dropdown__avatar"
      style="background-color: ${r.color}; color: ${s}"
    >
      ${(c=r.name)==null?void 0:c.at(0)}
    </div>`}renderParticipants(){if(!this.participants)return;let r=["place","send"];return this.participants.map(s=>{let a=this.textColorValues.includes(s.slotIndex)?"#FFFFFF":"#26242A",c={"who-is-online-dropdown__content":!0,"who-is-online-dropdown__content--selected":this.selected===s.id,local:s.isLocal},u=Object.values(ns).map(p=>({label:p,id:s.id})).splice(0,1);return D`
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
      `})}setMenu(){var r;if(!this.menu){this.menu=this.shadowRoot.querySelector(".menu");let s={rootMargin:"0px",threshold:1},a=new IntersectionObserver(this.adjustPosition,s),c=new ResizeObserver(this.adjustPosition),u=this.menu;a.observe(u),c.observe((r=this.scrollableParent)!=null?r:document.body)}}get scrollableParent(){let r;this.host||(this.host=this.getRootNode().host);let s=this.host;for(;!r;){let a=s==null?void 0:s.parentElement;if(this.isScrollable(a)){r=a;break}if(s=a,!s)break}return r}isScrollable(r){if(!r)return!1;let s=r.scrollHeight>r.clientHeight,a=window.getComputedStyle(r).overflowY,c=window.getComputedStyle(r).overflowX,u=a.indexOf("hidden")!==-1,p=c.indexOf("hidden")!==-1;return s&&!u&&!p}get dropdownBounds(){this.dropdownContent||(this.dropdownContent=this.shadowRoot.querySelector(".dropdown-content"));let r=this.dropdownContent.getBoundingClientRect(),{y:s,height:a}=this.menu.getBoundingClientRect();return{top:s,bottom:s+a+4,height:a+4,contentY:r.y}}shouldUseOriginalVertical(){let{height:r,contentY:s}=this.dropdownBounds,{innerHeight:a}=window,c=s+r;return this.originalPosition.includes("bottom")?r+c<a:s-r>0}positionAction(){let{top:r,bottom:s}=this.dropdownBounds,{innerHeight:a}=window,c=s>a,u=r<0;return c&&this.position.includes("bottom")||u&&this.position.includes("top")?2:!c&&!u&&this.shouldUseOriginalVertical()?1:0}toggle(){this.originalPosition||(this.originalPosition=this.position),this.setMenu(),this.open=!this.open,this.open&&(this.selected="",setTimeout(()=>this.adjustPosition()))}get menuClasses(){return{menu:!0,"menu--bottom":this.position==="bottom","menu--top":this.position==="top","menu-open":this.open}}render(){return D`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${dt(this.menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `}};dr.styles=ZE,dr.properties={open:{type:Boolean},align:{type:String},position:{type:String},participants:{type:Array},selected:{type:String}},dr=j([Q("superviz-who-is-online-dropdown")],dr);export{qn as Comments,lr as CommentsAnnotationFilter,sr as CommentsAnnotationItem,ir as CommentsAnnotationPin,ar as CommentsAnnotationResolved,Jn as CommentsAnnotations,rr as CommentsCommentInput,nr as CommentsCommentItem,Kn as CommentsContent,ur as CommentsFloatButton,Yn as CommentsTopbar,or as DeleteCommentModal,Zn as Dropdown,Vn as HelloWorld,Gn as Icon,Mr as Modal,Lr as ModalContainer,cr as WhoIsOnline,dr as WhoIsOnlineDropdown};
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
