var yr=Object.defineProperty,jo=Object.defineProperties,qo=Object.getOwnPropertyDescriptor,Go=Object.getOwnPropertyDescriptors;var as=Object.getOwnPropertySymbols;var gr=Object.prototype.hasOwnProperty,vr=Object.prototype.propertyIsEnumerable;var br=Math.pow,fr=(n,t,e)=>t in n?yr(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,g=(n,t)=>{for(var e in t||(t={}))gr.call(t,e)&&fr(n,e,t[e]);if(as)for(var e of as(t))vr.call(t,e)&&fr(n,e,t[e]);return n},F=(n,t)=>jo(n,Go(t));var qs=(n,t)=>{var e={};for(var s in n)gr.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&as)for(var s of as(n))t.indexOf(s)<0&&vr.call(n,s)&&(e[s]=n[s]);return e};var T=(n,t,e,s)=>{for(var r=s>1?void 0:s?qo(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&yr(t,e,r),r};var vt=(n,t,e)=>new Promise((s,r)=>{var o=l=>{try{a(e.next(l))}catch(c){r(c)}},i=l=>{try{a(e.throw(l))}catch(c){r(c)}},a=l=>l.done?s(l.value):Promise.resolve(l.value).then(o,i);a((e=e.apply(n,t)).next())});var ls=globalThis,us=ls.ShadowRoot&&(ls.ShadyCSS===void 0||ls.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Er=Symbol(),xr=new WeakMap,cs=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Er)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(us&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=xr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&xr.set(e,t))}return t}toString(){return this.cssText}},Sr=n=>new cs(typeof n=="string"?n:n+"",void 0,Er);var Gs=(n,t)=>{if(us)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=ls.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,n.appendChild(s)}},ds=us?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Sr(e)})(n):n;var{is:Yo,defineProperty:Jo,getOwnPropertyDescriptor:Ko,getOwnPropertyNames:Qo,getOwnPropertySymbols:Xo,getPrototypeOf:ta}=Object,ct=globalThis,wr=ct.trustedTypes,ea=wr?wr.emptyScript:"",Ys=ct.reactiveElementPolyfillSupport,Se=(n,t)=>n,ms={toAttribute(n,t){switch(t){case Boolean:n=n?ea:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},Js=(n,t)=>!Yo(n,t),Tr={attribute:!0,type:String,converter:ms,reflect:!1,hasChanged:Js},$r,_r;($r=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(_r=ct.litPropertyMetadata)!=null||(ct.litPropertyMetadata=new WeakMap);var bt=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Tr){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Jo(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){var i;let{get:r,set:o}=(i=Ko(this.prototype,t))!=null?i:{get(){return this[e]},set(a){this[e]=a}};return{get(){return r==null?void 0:r.call(this)},set(a){let l=r==null?void 0:r.call(this);o.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:Tr}static _$Ei(){if(this.hasOwnProperty(Se("elementProperties")))return;let t=ta(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Se("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Se("properties"))){let e=this.properties,s=[...Qo(e),...Xo(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(ds(r))}else t!==void 0&&e.push(ds(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!=null?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$ES)==null||e.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return Gs(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var o;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:ms).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){var o;let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((o=i.converter)==null?void 0:o.fromAttribute)!==void 0?i.converter:ms;this._$Em=r,this[r]=a.fromAttribute(e,i.type),this._$Em=null}}requestUpdate(t,e,s,r=!1,o){var i;if(t!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(t)),!((i=s.hasChanged)!=null?i:Js)(r?o:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){var r;this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&((r=this._$Ej)!=null?r:this._$Ej=new Set).add(t)}_$EP(){return vt(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r)i.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],i)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$ES)==null||s.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(e)):this._$ET()}catch(r){throw t=!1,this._$ET(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}},Ar;bt.elementStyles=[],bt.shadowRootOptions={mode:"open"},bt[Se("elementProperties")]=new Map,bt[Se("finalized")]=new Map,Ys==null||Ys({ReactiveElement:bt}),((Ar=ct.reactiveElementVersions)!=null?Ar:ct.reactiveElementVersions=[]).push("2.0.0");var Te=globalThis,hs=Te.trustedTypes,Cr=hs?hs.createPolicy("lit-html",{createHTML:n=>n}):void 0,Xs="$lit$",et=`lit$${(Math.random()+"").slice(9)}$`,tn="?"+et,sa=`<${tn}>`,St=document,ps=()=>St.createComment(""),$e=n=>n===null||typeof n!="object"&&typeof n!="function",Lr=Array.isArray,Fr=n=>Lr(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Ks=`[ 	
\f\r]`,we=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Or=/-->/g,Mr=/>/g,xt=RegExp(`>|${Ks}(?:([^\\s"'>=/]+)(${Ks}*=${Ks}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kr=/'/g,Ir=/"/g,zr=/^(?:script|style|textarea|title)$/i,Hr=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),ac=Hr(1),lc=Hr(2),st=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),Dr=new WeakMap,Et=St.createTreeWalker(St,129);function Rr(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Cr!==void 0?Cr.createHTML(t):t}var Ur=(n,t)=>{let e=n.length-1,s=[],r,o=t===2?"<svg>":"",i=we;for(let a=0;a<e;a++){let l=n[a],c,u,d=-1,f=0;for(;f<l.length&&(i.lastIndex=f,u=i.exec(l),u!==null);)f=i.lastIndex,i===we?u[1]==="!--"?i=Or:u[1]!==void 0?i=Mr:u[2]!==void 0?(zr.test(u[2])&&(r=RegExp("</"+u[2],"g")),i=xt):u[3]!==void 0&&(i=xt):i===xt?u[0]===">"?(i=r!=null?r:we,d=-1):u[1]===void 0?d=-2:(d=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?xt:u[3]==='"'?Ir:kr):i===Ir||i===kr?i=xt:i===Or||i===Mr?i=we:(i=xt,r=void 0);let h=i===xt&&n[a+1].startsWith("/>")?" ":"";o+=i===we?l+sa:d>=0?(s.push(c),l.slice(0,d)+Xs+l.slice(d)+et+h):l+et+(d===-2?a:h)}return[Rr(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),s]},wt=class{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,i=0,a=t.length-1,l=this.parts,[c,u]=Ur(t,e);if(this.el=wt.createElement(c,s),Et.currentNode=this.el.content,e===2){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=Et.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let d of r.getAttributeNames())if(d.endsWith(Xs)){let f=u[i++],h=r.getAttribute(d).split(et),v=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:v[2],strings:h,ctor:v[1]==="."?ys:v[1]==="?"?gs:v[1]==="@"?vs:_t}),r.removeAttribute(d)}else d.startsWith(et)&&(l.push({type:6,index:o}),r.removeAttribute(d));if(zr.test(r.tagName)){let d=r.textContent.split(et),f=d.length-1;if(f>0){r.textContent=hs?hs.emptyScript:"";for(let h=0;h<f;h++)r.append(d[h],ps()),Et.nextNode(),l.push({type:2,index:++o});r.append(d[f],ps())}}}else if(r.nodeType===8)if(r.data===tn)l.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(et,d+1))!==-1;)l.push({type:7,index:o}),d+=et.length-1}o++}}static createElement(t,e){let s=St.createElement("template");return s.innerHTML=t,s}};function Tt(n,t,e=n,s){var i,a,l;if(t===st)return t;let r=s!==void 0?(i=e._$Co)==null?void 0:i[s]:e._$Cl,o=$e(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(n),r._$AT(n,e,s)),s!==void 0?((l=e._$Co)!=null?l:e._$Co=[])[s]=r:e._$Cl=r),r!==void 0&&(t=Tt(n,r._$AS(n,t.values),r,s)),t}var fs=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;let{el:{content:e},parts:s}=this._$AD,r=((c=t==null?void 0:t.creationScope)!=null?c:St).importNode(e,!0);Et.currentNode=r;let o=Et.nextNode(),i=0,a=0,l=s[0];for(;l!==void 0;){if(i===l.index){let u;l.type===2?u=new $t(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new bs(o,this,t)),this._$AV.push(u),l=s[++a]}i!==(l==null?void 0:l.index)&&(o=Et.nextNode(),i++)}return Et.currentNode=St,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},$t=class{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,r){var o;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(o=r==null?void 0:r.isConnected)!=null?o:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Tt(this,t,e),$e(t)?t===H||t==null||t===""?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==st&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Fr(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==H&&$e(this._$AH)?this._$AA.nextSibling.data=t:this.$(St.createTextNode(t)),this._$AH=t}g(t){var o;let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=wt.createElement(Rr(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(e);else{let i=new fs(r,this),a=i.u(this.options);i.p(e),this.$(a),this._$AH=i}}_$AC(t){let e=Dr.get(t.strings);return e===void 0&&Dr.set(t.strings,e=new wt(t)),e}T(t){Lr(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let o of t)r===e.length?e.push(s=new $t(this.k(ps()),this.k(ps()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},_t=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=H}_$AI(t,e=this,s,r){let o=this.strings,i=!1;if(o===void 0)t=Tt(this,t,e,0),i=!$e(t)||t!==this._$AH&&t!==st,i&&(this._$AH=t);else{let a=t,l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Tt(this,a[s+l],e,l),c===st&&(c=this._$AH[l]),i||(i=!$e(c)||c!==this._$AH[l]),c===H?t=H:t!==H&&(t+=(c!=null?c:"")+o[l+1]),this._$AH[l]=c}i&&!r&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},ys=class extends _t{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}},gs=class extends _t{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}},vs=class extends _t{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=Tt(this,t,e,0))!=null?i:H)===st)return;let s=this._$AH,r=t===H&&s!==H||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==H&&(s===H||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},bs=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Tt(this,t)}},Pr={S:Xs,A:et,P:tn,C:1,M:Ur,L:fs,R:Fr,V:Tt,D:$t,I:_t,H:gs,N:vs,U:ys,B:bs},Qs=Te.litHtmlPolyfillSupport,Nr;Qs==null||Qs(wt,$t),((Nr=Te.litHtmlVersions)!=null?Nr:Te.litHtmlVersions=[]).push("3.0.0");var xs=globalThis,Es=xs.ShadowRoot&&(xs.ShadyCSS===void 0||xs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,en=Symbol(),Vr=new WeakMap,_e=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==en)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Es&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Vr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Vr.set(e,t))}return t}toString(){return this.cssText}},Wr=n=>new _e(typeof n=="string"?n:n+"",void 0,en),x=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,r,o)=>s+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[o+1],n[0]);return new _e(e,n,en)},sn=(n,t)=>{if(Es)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=xs.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,n.appendChild(s)}},Ss=Es?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Wr(e)})(n):n;var{is:na,defineProperty:ra,getOwnPropertyDescriptor:ia,getOwnPropertyNames:oa,getOwnPropertySymbols:aa,getPrototypeOf:la}=Object,ut=globalThis,Br=ut.trustedTypes,ca=Br?Br.emptyScript:"",nn=ut.reactiveElementPolyfillSupport,Ae=(n,t)=>n,rn={toAttribute(n,t){switch(t){case Boolean:n=n?ca:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},Yr=(n,t)=>!na(n,t),Zr={attribute:!0,type:String,converter:rn,reflect:!1,hasChanged:Yr},jr,qr;(jr=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(qr=ut.litPropertyMetadata)!=null||(ut.litPropertyMetadata=new WeakMap);var nt=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Zr){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&ra(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){var i;let{get:r,set:o}=(i=ia(this.prototype,t))!=null?i:{get(){return this[e]},set(a){this[e]=a}};return{get(){return r==null?void 0:r.call(this)},set(a){let l=r==null?void 0:r.call(this);o.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:Zr}static _$Ei(){if(this.hasOwnProperty(Ae("elementProperties")))return;let t=la(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ae("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ae("properties"))){let e=this.properties,s=[...oa(e),...aa(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(Ss(r))}else t!==void 0&&e.push(Ss(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!=null?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$ES)==null||e.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return sn(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var o;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:rn).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){var o;let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((o=i.converter)==null?void 0:o.fromAttribute)!==void 0?i.converter:rn;this._$Em=r,this[r]=a.fromAttribute(e,i.type),this._$Em=null}}requestUpdate(t,e,s,r=!1,o){var i;if(t!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(t)),!((i=s.hasChanged)!=null?i:Yr)(r?o:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){var r;this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&((r=this._$Ej)!=null?r:this._$Ej=new Set).add(t)}_$EP(){return vt(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r)i.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],i)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$ES)==null||s.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(e)):this._$ET()}catch(r){throw t=!1,this._$ET(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}},Gr;nt.elementStyles=[],nt.shadowRootOptions={mode:"open"},nt[Ae("elementProperties")]=new Map,nt[Ae("finalized")]=new Map,nn==null||nn({ReactiveElement:nt}),((Gr=ut.reactiveElementVersions)!=null?Gr:ut.reactiveElementVersions=[]).push("2.0.0");var Oe=globalThis,ws=Oe.trustedTypes,Jr=ws?ws.createPolicy("lit-html",{createHTML:n=>n}):void 0,ni="$lit$",dt=`lit$${(Math.random()+"").slice(9)}$`,ri="?"+dt,ua=`<${ri}>`,Ot=document,Me=()=>Ot.createComment(""),ke=n=>n===null||typeof n!="object"&&typeof n!="function",ii=Array.isArray,da=n=>ii(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",on=`[ 	
\f\r]`,Ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kr=/-->/g,Qr=/>/g,At=RegExp(`>|${on}(?:([^\\s"'>=/]+)(${on}*=${on}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xr=/'/g,ti=/"/g,oi=/^(?:script|style|textarea|title)$/i,ai=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),y=ai(1),pc=ai(2),Mt=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),ei=new WeakMap,Ct=Ot.createTreeWalker(Ot,129);function li(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Jr!==void 0?Jr.createHTML(t):t}var ma=(n,t)=>{let e=n.length-1,s=[],r,o=t===2?"<svg>":"",i=Ce;for(let a=0;a<e;a++){let l=n[a],c,u,d=-1,f=0;for(;f<l.length&&(i.lastIndex=f,u=i.exec(l),u!==null);)f=i.lastIndex,i===Ce?u[1]==="!--"?i=Kr:u[1]!==void 0?i=Qr:u[2]!==void 0?(oi.test(u[2])&&(r=RegExp("</"+u[2],"g")),i=At):u[3]!==void 0&&(i=At):i===At?u[0]===">"?(i=r!=null?r:Ce,d=-1):u[1]===void 0?d=-2:(d=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?At:u[3]==='"'?ti:Xr):i===ti||i===Xr?i=At:i===Kr||i===Qr?i=Ce:(i=At,r=void 0);let h=i===At&&n[a+1].startsWith("/>")?" ":"";o+=i===Ce?l+ua:d>=0?(s.push(c),l.slice(0,d)+ni+l.slice(d)+dt+h):l+dt+(d===-2?a:h)}return[li(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),s]},kt=class{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,i=0,a=t.length-1,l=this.parts,[c,u]=ma(t,e);if(this.el=kt.createElement(c,s),Ct.currentNode=this.el.content,e===2){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=Ct.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let d of r.getAttributeNames())if(d.endsWith(ni)){let f=u[i++],h=r.getAttribute(d).split(dt),v=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:v[2],strings:h,ctor:v[1]==="."?cn:v[1]==="?"?un:v[1]==="@"?dn:te}),r.removeAttribute(d)}else d.startsWith(dt)&&(l.push({type:6,index:o}),r.removeAttribute(d));if(oi.test(r.tagName)){let d=r.textContent.split(dt),f=d.length-1;if(f>0){r.textContent=ws?ws.emptyScript:"";for(let h=0;h<f;h++)r.append(d[h],Me()),Ct.nextNode(),l.push({type:2,index:++o});r.append(d[f],Me())}}}else if(r.nodeType===8)if(r.data===ri)l.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(dt,d+1))!==-1;)l.push({type:7,index:o}),d+=dt.length-1}o++}}static createElement(t,e){let s=Ot.createElement("template");return s.innerHTML=t,s}};function Xt(n,t,e=n,s){var i,a,l;if(t===Mt)return t;let r=s!==void 0?(i=e._$Co)==null?void 0:i[s]:e._$Cl,o=ke(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(n),r._$AT(n,e,s)),s!==void 0?((l=e._$Co)!=null?l:e._$Co=[])[s]=r:e._$Cl=r),r!==void 0&&(t=Xt(n,r._$AS(n,t.values),r,s)),t}var ln=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;let{el:{content:e},parts:s}=this._$AD,r=((c=t==null?void 0:t.creationScope)!=null?c:Ot).importNode(e,!0);Ct.currentNode=r;let o=Ct.nextNode(),i=0,a=0,l=s[0];for(;l!==void 0;){if(i===l.index){let u;l.type===2?u=new It(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new mn(o,this,t)),this._$AV.push(u),l=s[++a]}i!==(l==null?void 0:l.index)&&(o=Ct.nextNode(),i++)}return Ct.currentNode=Ot,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},It=class{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,r){var o;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(o=r==null?void 0:r.isConnected)!=null?o:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Xt(this,t,e),ke(t)?t===R||t==null||t===""?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==Mt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):da(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==R&&ke(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ot.createTextNode(t)),this._$AH=t}g(t){var o;let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=kt.createElement(li(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(e);else{let i=new ln(r,this),a=i.u(this.options);i.p(e),this.$(a),this._$AH=i}}_$AC(t){let e=ei.get(t.strings);return e===void 0&&ei.set(t.strings,e=new kt(t)),e}T(t){ii(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let o of t)r===e.length?e.push(s=new It(this.k(Me()),this.k(Me()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},te=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=R}_$AI(t,e=this,s,r){let o=this.strings,i=!1;if(o===void 0)t=Xt(this,t,e,0),i=!ke(t)||t!==this._$AH&&t!==Mt,i&&(this._$AH=t);else{let a=t,l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Xt(this,a[s+l],e,l),c===Mt&&(c=this._$AH[l]),i||(i=!ke(c)||c!==this._$AH[l]),c===R?t=R:t!==R&&(t+=(c!=null?c:"")+o[l+1]),this._$AH[l]=c}i&&!r&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},cn=class extends te{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}},un=class extends te{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==R)}},dn=class extends te{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=Xt(this,t,e,0))!=null?i:R)===Mt)return;let s=this._$AH,r=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==R&&(s===R||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},mn=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Xt(this,t)}};var an=Oe.litHtmlPolyfillSupport,si;an==null||an(kt,It),((si=Oe.litHtmlVersions)!=null?si:Oe.litHtmlVersions=[]).push("3.0.0");var ci=(n,t,e)=>{var o,i;let s=(o=e==null?void 0:e.renderBefore)!=null?o:t,r=s._$litPart$;if(r===void 0){let a=(i=e==null?void 0:e.renderBefore)!=null?i:null;s._$litPart$=r=new It(t.insertBefore(Me(),a),a,void 0,e!=null?e:{})}return r._$AI(n),r};var E=class extends nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,s;let t=super.createRenderRoot();return(s=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ci(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Mt}},ui;E._$litElement$=!0,E["finalized"]=!0,(ui=globalThis.litElementHydrateSupport)==null||ui.call(globalThis,{LitElement:E});var hn=globalThis.litElementPolyfillSupport;hn==null||hn({LitElement:E});var di;((di=globalThis.litElementVersions)!=null?di:globalThis.litElementVersions=[]).push("4.0.0");var $=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var Dt=class extends E{render(){return y` <div>Hello from SuperViz, ${this.name}</div> `}};Dt.properties={name:{type:String}},Dt.styles=x`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `,Dt=T([$("superviz-hello-world")],Dt);var pn=x`
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
`;var fn=x`
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
`;var yn=x`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;var gn=x`
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
`;var _=n=>{var e;class t extends n{connectedCallback(){setTimeout(()=>{var i;let r=document.getElementById("superviz-style"),o=document.createElement("style");o.innerHTML=(r==null?void 0:r.innerHTML)||"",(i=this.shadowRoot)==null||i.appendChild(o)}),super.connectedCallback()}emitEvent(r,o,i={composed:!0,bubbles:!0}){let a=new CustomEvent(r,g({detail:o},i));this.dispatchEvent(a)}}return t.styles=[pn,fn,yn,gn,(e=n.styles)!=null?e:[]],t};var mi=_(E),ha=[mi.styles],Nt=class extends mi{constructor(){super();this.name="",this.size="md"}render(){return y` <i class="sv-icon sv-icon-${this.name}_${this.size}"></i> `}};Nt.properties={name:{type:String},size:{type:String}},Nt.styles=[ha,x`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `],Nt=T([$("superviz-icon")],Nt);var $s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_s=n=>(...t)=>({_$litDirective$:n,values:t}),ee=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var L=_s(class extends ee{constructor(n){var t;if(super(n),n.type!==$s.ATTRIBUTE||n.name!=="class"||((t=n.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var s,r;if(this.it===void 0){this.it=new Set,n.strings!==void 0&&(this.st=new Set(n.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in t)t[o]&&!((s=this.st)!=null&&s.has(o))&&this.it.add(o);return this.render(t)}let e=n.element.classList;for(let o of this.it)o in t||(e.remove(o),this.it.delete(o));for(let o in t){let i=!!t[o];i===this.it.has(o)||((r=this.st)==null?void 0:r.has(o))||(i?(e.add(o),this.it.add(o)):(e.remove(o),this.it.delete(o)))}return st}});var hi=x`
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

  .menu {
    list-style: none;
    padding: 0;
    background: #fff;
    color: #9fa5b5;
    opacity: 0;
    display: none;
    transition: 0.2s;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    top: -10px;
    border-radius: 3px;
  }

  .menu--bottom-left {
    min-width: 103px;
    position: absolute;
    left: 100%;
    transform: translateX(-100%);
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
    left: 26px;
    transform: translateX(-100%);
  }

  .menu li {
    color: rgb(var(--sv-gray-600));
    text-transform: uppercase;
    padding: 10px;
    cursor: pointer;
    min-width: 103px;
    min-height: 32px;
  }

  .active {
    background: rgb(var(--sv-gray-200));
  }

  .menu li:hover {
    background: rgb(var(--sv-gray-200));
  }

  .menu-open {
    display: block;
    opacity: 1;
  }
`;var pi=_(E),pa=[pi.styles,hi],Lt=class extends pi{constructor(){super(...arguments);this.onClickOutDropdown=e=>{if(e.stopPropagation(),!this.open)return;let s=e.composedPath(),r=this.shadowRoot.querySelector(".dropdown-content"),o=this.shadowRoot.querySelector(".dropdown-list"),a=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],l=s.includes(r),c=s.includes(o),u=s.includes(a);l||c||u||(this.open=!1)};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.callbackSelected=e=>{this.open=!1;let s=this.returnTo?e[this.returnTo]:e;this.emitEvent("selected",s,{bubbles:!1,composed:!1})}}updated(e){e.has("open")&&(this.open&&document.addEventListener("click",this.onClickOutDropdown),this.open||(document.removeEventListener("click",this.onClickOutDropdown),this.close()))}render(){let e={menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right"},s=this.options.map(o=>{let i={text:!0,"text-bold":!0,active:this.active===(o==null?void 0:o[this.returnTo])};return y`<li @click=${()=>this.callbackSelected(o)} class=${L(i)}>${o[this.label]}</li>`}),r=()=>{this.open=!this.open};return y`
      <div class="dropdown">
        <div class="dropdown-content" @click=${()=>r()}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <ul class=${L(e)}>
          ${s}
        </ul>
      </div>
    `}};Lt.styles=pa,Lt.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},position:{type:String},options:{type:Array},label:{type:String},returnTo:{type:String},active:{type:[String,Object]}},Lt=T([$("superviz-dropdown")],Lt);var fi=x`
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
`;var se=class extends E{constructor(){super();this.updatePresenceMouseParticipant=e=>{if(!this.shadowRoot.getElementById(`mouse-${e.id}`)){let a=this.shadowRoot.getElementById("mouse-sync"),l=document.createElement("div");l.setAttribute("id",`mouse-${e.id}`),l.setAttribute("class","mouse-follower");let c=document.createElement("div");c.setAttribute("class","pointer-mouse");let u=document.createElement("div");u.setAttribute("class","mouse-user-name"),u.innerHTML=e.name,l.appendChild(c),l.appendChild(u),a&&a.appendChild(l)}let r=this.shadowRoot.getElementById(`mouse-${e.id}`);if(!r)return;let o=this.shadowRoot.getElementById(`mouse-${e.id}`),i=this.shadowRoot.getElementById(`mouse-${e.id}`);if(o&&i){let a=o.getElementsByClassName("mouse-user-name")[0],l=i.getElementsByClassName("pointer-mouse")[0];l&&(l.style.backgroundImage=`url(https://production.cdn.superviz.com/static/pointers/${e.slotIndex}.svg)`),a&&(a.style.color=this.textColorValues.includes(e.slotIndex)?"#FFFFFF":"#000000",a.style.backgroundColor=e.color,a.innerHTML=e.name);let{containerId:c}=e,u=document.getElementById(c),d=e.mousePositionX,f=e.mousePositionY;if(c){let h=(u==null?void 0:u.clientWidth)||1,v=(u==null?void 0:u.clientHeight)||1;d=e.mousePositionX/e.originalWidth*h,f=e.mousePositionY/e.originalHeight*v}r.style.left=`${d}px`,r.style.top=`${f}px`}};this.textColorValues=[2,4,5,7,8,16]}removePresenceMouseParticipant(e){let s=this.shadowRoot.getElementById(`mouse-${e}`);s&&s.remove()}render(){return y`
      <div id="mouse-container" class="mouse-board">
        <div id="mouse-sync"></div>
      </div>
    `}};se.styles=[fi],se=T([$("superviz-presence-mouse")],se);var As=x`  
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
`;var yi=_(E),fa=[yi.styles,As],ne=class extends yi{constructor(){super(...arguments);this.getContainer=()=>window.document.querySelector("superviz-modal-container");this.createContainer=e=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(e)};this.createModal=({detail:e})=>{this.createContainer(e),window.document.body.appendChild(this.modal)};this.destroyModal=()=>{var e;this.modal=void 0,(e=this.getContainer())==null||e.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};ne.styles=fa,ne=T([$("superviz-modal")],ne);var gi=_(E),ya=[gi.styles,As],re=class extends gi{constructor(){super(...arguments);this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))};this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(e){this.options=e}render(){let e=()=>y`
        <div class="modal--header">
          <span class="text text-bold sv-gray-600">${this.options.title}</span>
          <div class="close" @click=${this.closeModal}>
            <superviz-icon name="close" size="md"></superviz-icon>
          </div>
        </div>
      `,s=()=>y`
        <div class="modal--body">
          <div class="modal--body-content">
            ${this.options.body}
          </div>
        </div>
      `,r=()=>{if(this.options.footer)return y`
          <div class="modal--footer">
            ${this.options.footer}
          </div>
        `;let o=this.options.confirmLabel||"OK",i=this.options.cancelLabel||"Cancel";return this.options.confirm&&this.options.cancel?y`
          <div class="modal--footer">
            <button class="text text-bold btn btn--cancel" @click=${this.closeModal}>${i}</button>
            <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${o}</button>
          </div>
        `:y`
        <div class="modal--footer">
          <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${o}</button>
        </div>
      `};return y`
      <div class="modal--overlay"></div>
      <div class="modal--container">
        <div class="modal">
          ${e()}

          ${s()}

          ${r()}
        </div>
      </div>
    `}};re.styles=ya,re=T([$("superviz-modal-container")],re);var vn=x`
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
`;var bn=x`
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
`;var xn=x`
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
`;var En=x`
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
`;var Sn=x`
  .comments {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 288px;
  }

  .hidden {
    display: none;
  }
`;var wn=x`
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
`;var Tn=x`
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
`;var $n=x`
  .annotation-resolved {
    background: rgba(var(--sv-gray-200), 0.5);
    height: 26px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(var(--sv-gray-200));
  }
`;var _n=x`
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

    background-color: white;
    border-radius: 50%;
    border-bottom-left-radius: 2px;

    border: 2px solid white;
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

    color: white;
  }

  .annotation-pin__avatar--add {
    font-size: 24px;
    color: rgb(var(--sv-gray-700));
    background-color: white;
  }

  .annotation-pin__avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;

    object-fit: cover;
  }
`;var An=x`
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
`;var Cn=x`
  button.float-button {
    position: fixed;

    border-radius: 50%;
    width: 38px;
    height: 38px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border: none;

    background-color: white;
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.2);
    color: rgb(var(--sv-gray-600));
    transition: all 300ms;
    cursor: pointer;
  }

  button.float-button p {
    display: none;
  }

  .hide-button {
    display: none !important;
  }

  button.float-button:hover {
    width: 110px;
    border-radius: 30px;
  }

  button.float-button:hover p {
    display: block;
  }
`;var On=x`
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
`;var Mn;function kn(n){let t=n.querySelector("#superviz-comments");if(t&&!Mn){let e={childList:!0,attributes:!0,characterData:!0,subtree:!0};Mn=new MutationObserver(s=>{s.forEach(r=>{!r.removedNodes.length||r.removedNodes.forEach(o=>{o.id==="poweredby-footer"&&ga(n)})})}),Mn.observe(t,e)}}function ga(n){let t=document.createElement("div");t.id="poweredby-footer",t.className="footer";let e=document.createElement("div");e.className="powered-by powered-by--horizontal";let s=document.createElement("a");s.href="https://superviz.com/",s.target="_blank",s.className="link";let r=document.createElement("div");r.textContent="Powered by";let o=document.createElement("img");o.width=48,o.height=8.86,o.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",e.appendChild(s),s.appendChild(r),r.appendChild(o),t.appendChild(e);let i=n.getElementById("superviz-comments");i&&i.appendChild(t),kn(n)}var vi=_(E),va=[vi.styles,vn,On],Ft=class extends vi{constructor(){super();this.annotations=[],this.annotationFilter="all",this.waterMarkState=!1}updateAnnotations(e){this.annotations=e}toggle(){this.emitEvent("toggle",{})}waterMarkStatus(e){this.waterMarkState=e}setFilter({detail:e}){let{filter:s}=e;this.annotationFilter=s}updated(e){super.updated(e),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".superviz-comments");!s||(this.waterMarkState&&kn(this.shadowRoot),s.setAttribute("style",this.side))})}render(){let e=[this.open?"container":"container-close","superviz-comments"].join(" "),s=y` <div id="poweredby-footer" class="footer">
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
    </div>`,r=this.waterMarkState?s:"";return y`
      <div id="superviz-comments" class=${e}>
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
        ${r}
      </div>
    `}};Ft.styles=va,Ft.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String}},Ft=T([$("superviz-comments")],Ft);var ba=_(E),xa=[ba.styles,bn],zt=class extends _(E){constructor(){super();this.side="left"}close(){this.dispatchEvent(new CustomEvent("close"))}render(){return this.side==="left"?y`
        <div class="topbar">
          <span @click=${this.close} class="toggle-icon">
            <superviz-icon name="left" size="lg"></superviz-icon>
          </span>
          <span class="text text-bold">COMMENTS</span>
        </div>
      `:y`
      <div class="topbar">
        <span class="text text-bold">COMMENTS</span>
        <span @click=${this.close} class="toggle-icon">
          <superviz-icon name="right" size="lg"></superviz-icon>
        </span>
      </div>
    `}};zt.styles=xa,zt.properties={side:{type:String}},zt=T([$("superviz-comments-topbar")],zt);var bi=_(E),Ea=[bi.styles,xn],Ht=class extends bi{constructor(){super(...arguments);this.prepareToCreateAnnotation=s=>vt(this,[s],function*({detail:e}){this.annotation=e,yield this.updateComplete,this.emitEvent("comment-input-focus",e)});this.cancelTemporaryAnnotation=()=>{this.annotation=null};this.cancelTemporaryAnnotationEsc=e=>{(e==null?void 0:e.key)==="Escape"&&(this.annotation=null)}}createComment({detail:e}){this.emitEvent("create-annotation",e),this.annotation=null}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.addEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.addEventListener("keyup",e=>{e.key==="Escape"&&this.cancelTemporaryAnnotationEsc(e)})}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.removeEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.removeEventListener("keyup",e=>{e.key==="Escape"&&this.cancelTemporaryAnnotationEsc(e)})}render(){let e={"annotations--comments-input":!0,hidden:!this.annotation};return y`
      <div class="annotations">
        <span class="text text-big text-bold annotations--add-comment-btn">
          Click anywhere to add a comment
        </span>
        <div class=${L(e)}>
          <superviz-comments-comment-input
            @create-annotation=${this.createComment}
            eventType="create-annotation"
          >
          </superviz-comments-comment-input>
        </div>
      </div>
    `}};Ht.styles=Ea,Ht.properties={annotation:{type:Object}},Ht=T([$("superviz-comments-annotations")],Ht);var{D:Sa}=Pr;var xi=()=>document.createComment(""),ie=(n,t,e)=>{var o;let s=n._$AA.parentNode,r=t===void 0?n._$AB:t._$AA;if(e===void 0){let i=s.insertBefore(xi(),r),a=s.insertBefore(xi(),r);e=new Sa(i,a,n,n.options)}else{let i=e._$AB.nextSibling,a=e._$AM,l=a!==n;if(l){let c;(o=e._$AQ)==null||o.call(e,n),e._$AM=n,e._$AP!==void 0&&(c=n._$AU)!==a._$AU&&e._$AP(c)}if(i!==r||l){let c=e._$AA;for(;c!==i;){let u=c.nextSibling;s.insertBefore(c,r),c=u}}}return e},mt=(n,t,e=n)=>(n._$AI(t,e),n),wa={},Ei=(n,t=wa)=>n._$AH=t,Si=n=>n._$AH,Os=n=>{var s;(s=n._$AP)==null||s.call(n,!1,!0);let t=n._$AA,e=n._$AB.nextSibling;for(;t!==e;){let r=t.nextSibling;t.remove(),t=r}};var wi=(n,t,e)=>{let s=new Map;for(let r=t;r<=e;r++)s.set(n[r],r);return s},Ti=_s(class extends ee{constructor(n){if(super(n),n.type!==$s.CHILD)throw Error("repeat() can only be used in text expressions")}ht(n,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);let r=[],o=[],i=0;for(let a of n)r[i]=s?s(a,i):i,o[i]=e(a,i),i++;return{values:o,keys:r}}render(n,t,e){return this.ht(n,t,e).values}update(n,[t,e,s]){var K;let r=Si(n),{values:o,keys:i}=this.ht(t,e,s);if(!Array.isArray(r))return this.dt=i,o;let a=(K=this.dt)!=null?K:this.dt=[],l=[],c,u,d=0,f=r.length-1,h=0,v=o.length-1;for(;d<=f&&h<=v;)if(r[d]===null)d++;else if(r[f]===null)f--;else if(a[d]===i[h])l[h]=mt(r[d],o[h]),d++,h++;else if(a[f]===i[v])l[v]=mt(r[f],o[v]),f--,v--;else if(a[d]===i[v])l[v]=mt(r[d],o[v]),ie(n,l[v+1],r[d]),d++,v--;else if(a[f]===i[h])l[h]=mt(r[f],o[h]),ie(n,r[d],r[f]),f--,h++;else if(c===void 0&&(c=wi(i,h,v),u=wi(a,d,f)),c.has(a[d]))if(c.has(a[f])){let N=u.get(i[h]),lt=N!==void 0?r[N]:null;if(lt===null){let os=ie(n,r[d]);mt(os,o[h]),l[h]=os}else l[h]=mt(lt,o[h]),ie(n,r[d],lt),r[N]=null;h++}else Os(r[f]),f--;else Os(r[d]),d++;for(;h<=v;){let N=ie(n,l[v+1]);mt(N,o[h]),l[h++]=N}for(;d<=f;){let N=r[d++];N!==null&&Os(N)}return this.dt=i,Ei(n,l),st}});var $i=_(E),Ta=[$i.styles,Sn],Rt=class extends $i{constructor(){super();this.unselectAnnotation=()=>{this.selectedAnnotation=null};this.unselectAnnotationEsc=e=>{e&&(e==null?void 0:e.key)!=="Escape"||(this.selectedAnnotation=null)};this.selectAnnotation=({detail:e})=>{let{uuid:s}=e;if(this.selectedAnnotation===s){this.selectedAnnotation=null;return}this.selectedAnnotation=s};this.checkLastAnnotation=e=>{var o,i;let s=this.annotations.filter(a=>a.resolved),r=this.annotations.filter(a=>!a.resolved);return this.annotationFilter==="all"?e===((o=s[s.length-1])==null?void 0:o.uuid):e===((i=r[r.length-1])==null?void 0:i.uuid)};this.annotations=[]}updated(e){super.updated(e),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(`[uuid='${this.selectedAnnotation}']`);if(!s)return;let r=this.lastCommentId===this.selectedAnnotation,o=r?0:-150,i=s.getClientRects()[0];!i||(this.scrollBy(0,i.y+o),r&&setTimeout(()=>{this.scrollBy(0,i.y+o)},200))})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("select-annotation",this.selectAnnotation),window.document.body.addEventListener("keyup",this.unselectAnnotationEsc),window.document.body.addEventListener("unselect-annotation",this.unselectAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("select-annotation",this.selectAnnotation),window.document.body.removeEventListener("keyup",this.unselectAnnotationEsc),window.document.body.removeEventListener("unselect-annotation",this.unselectAnnotation)}render(){return y` ${Ti(this.annotations.filter(e=>e.comments.length),e=>e.uuid,e=>y`
        <superviz-comments-annotation-item
          annotation=${JSON.stringify(e)}
          selected="${this.selectedAnnotation}"
          annotationFilter=${this.annotationFilter}
          uuid=${e.uuid}
          isLastComment=${this.checkLastAnnotation(e.uuid)}
        >
        </superviz-comments-annotation-item>
      `)}`}};Rt.styles=Ta,Rt.properties={annotations:{type:Object},selectedAnnotation:{type:String},annotationFilter:{type:String}},Rt=T([$("superviz-comments-content")],Rt);var rt=class extends Error{},Ms=class extends rt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}},ks=class extends rt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}},Is=class extends rt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}},it=class extends rt{},oe=class extends rt{constructor(t){super(`Invalid unit ${t}`)}},U=class extends rt{},q=class extends rt{constructor(){super("Zone is an abstract class")}};var p="numeric",G="short",W="long",ht={year:p,month:p,day:p},Ie={year:p,month:G,day:p},In={year:p,month:G,day:p,weekday:G},De={year:p,month:W,day:p},Ne={year:p,month:W,day:p,weekday:W},Le={hour:p,minute:p},Fe={hour:p,minute:p,second:p},ze={hour:p,minute:p,second:p,timeZoneName:G},He={hour:p,minute:p,second:p,timeZoneName:W},Re={hour:p,minute:p,hourCycle:"h23"},Ue={hour:p,minute:p,second:p,hourCycle:"h23"},Pe={hour:p,minute:p,second:p,hourCycle:"h23",timeZoneName:G},Ve={hour:p,minute:p,second:p,hourCycle:"h23",timeZoneName:W},We={year:p,month:p,day:p,hour:p,minute:p},Be={year:p,month:p,day:p,hour:p,minute:p,second:p},Ze={year:p,month:G,day:p,hour:p,minute:p},je={year:p,month:G,day:p,hour:p,minute:p,second:p},Dn={year:p,month:G,day:p,weekday:G,hour:p,minute:p},qe={year:p,month:W,day:p,hour:p,minute:p,timeZoneName:G},Ge={year:p,month:W,day:p,hour:p,minute:p,second:p,timeZoneName:G},Ye={year:p,month:W,day:p,weekday:W,hour:p,minute:p,timeZoneName:W},Je={year:p,month:W,day:p,weekday:W,hour:p,minute:p,second:p,timeZoneName:W};var V=class{get type(){throw new q}get name(){throw new q}get ianaName(){return this.name}get isUniversal(){throw new q}offsetName(t,e){throw new q}formatOffset(t,e){throw new q}offset(t){throw new q}equals(t){throw new q}get isValid(){throw new q}};var Nn=null,Q=class extends V{static get instance(){return Nn===null&&(Nn=new Q),Nn}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:e,locale:s}){return Ns(t,e,s)}formatOffset(t,e){return pt(this.offset(t),e)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}};var Fs={};function $a(n){return Fs[n]||(Fs[n]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:n,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Fs[n]}var _a={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Aa(n,t){let e=n.format(t).replace(/\u200E/g,""),s=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(e),[,r,o,i,a,l,c,u]=s;return[i,r,o,a,l,c,u]}function Ca(n,t){let e=n.formatToParts(t),s=[];for(let r=0;r<e.length;r++){let{type:o,value:i}=e[r],a=_a[o];o==="era"?s[a]=i:S(a)||(s[a]=parseInt(i,10))}return s}var Ls={},z=class extends V{static create(t){return Ls[t]||(Ls[t]=new z(t)),Ls[t]}static resetCache(){Ls={},Fs={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch(e){return!1}}constructor(t){super(),this.zoneName=t,this.valid=z.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:e,locale:s}){return Ns(t,e,s,this.name)}formatOffset(t,e){return pt(this.offset(t),e)}offset(t){let e=new Date(t);if(isNaN(e))return NaN;let s=$a(this.name),[r,o,i,a,l,c,u]=s.formatToParts?Ca(s,e):Aa(s,e);a==="BC"&&(r=-Math.abs(r)+1);let f=ae({year:r,month:o,day:i,hour:l===24?0:l,minute:c,second:u,millisecond:0}),h=+e,v=h%1e3;return h-=v>=0?v:1e3+v,(f-h)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}};var _i={};function Oa(n,t={}){let e=JSON.stringify([n,t]),s=_i[e];return s||(s=new Intl.ListFormat(n,t),_i[e]=s),s}var Ln={};function Fn(n,t={}){let e=JSON.stringify([n,t]),s=Ln[e];return s||(s=new Intl.DateTimeFormat(n,t),Ln[e]=s),s}var zn={};function Ma(n,t={}){let e=JSON.stringify([n,t]),s=zn[e];return s||(s=new Intl.NumberFormat(n,t),zn[e]=s),s}var Hn={};function ka(n,t={}){let i=t,{base:e}=i,s=qs(i,["base"]),r=JSON.stringify([n,s]),o=Hn[r];return o||(o=new Intl.RelativeTimeFormat(n,t),Hn[r]=o),o}var Ke=null;function Ia(){return Ke||(Ke=new Intl.DateTimeFormat().resolvedOptions().locale,Ke)}function Da(n){let t=n.indexOf("-x-");t!==-1&&(n=n.substring(0,t));let e=n.indexOf("-u-");if(e===-1)return[n];{let s,r;try{s=Fn(n).resolvedOptions(),r=n}catch(a){let l=n.substring(0,e);s=Fn(l).resolvedOptions(),r=l}let{numberingSystem:o,calendar:i}=s;return[r,o,i]}}function Na(n,t,e){return(e||t)&&(n.includes("-u-")||(n+="-u"),e&&(n+=`-ca-${e}`),t&&(n+=`-nu-${t}`)),n}function La(n){let t=[];for(let e=1;e<=12;e++){let s=b.utc(2009,e,1);t.push(n(s))}return t}function Fa(n){let t=[];for(let e=1;e<=7;e++){let s=b.utc(2016,11,13+e);t.push(n(s))}return t}function zs(n,t,e,s){let r=n.listingMode();return r==="error"?null:r==="en"?e(t):s(t)}function za(n){return n.numberingSystem&&n.numberingSystem!=="latn"?!1:n.numberingSystem==="latn"||!n.locale||n.locale.startsWith("en")||new Intl.DateTimeFormat(n.intl).resolvedOptions().numberingSystem==="latn"}var Rn=class{constructor(t,e,s){this.padTo=s.padTo||0,this.floor=s.floor||!1;let a=s,{padTo:r,floor:o}=a,i=qs(a,["padTo","floor"]);if(!e||Object.keys(i).length>0){let l=g({useGrouping:!1},s);s.padTo>0&&(l.minimumIntegerDigits=s.padTo),this.inf=Ma(t,l)}}format(t){if(this.inf){let e=this.floor?Math.floor(t):t;return this.inf.format(e)}else{let e=this.floor?Math.floor(t):le(t,3);return k(e,this.padTo)}}},Un=class{constructor(t,e,s){this.opts=s,this.originalZone=void 0;let r;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){let i=-1*(t.offset/60),a=i>=0?`Etc/GMT+${i}`:`Etc/GMT${i}`;t.offset!==0&&z.create(a).valid?(r=a,this.dt=t):(r="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,r=t.zone.name):(r="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);let o=g({},this.opts);o.timeZone=o.timeZone||r,this.dtf=Fn(e,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(e=>{if(e.type==="timeZoneName"){let s=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return F(g({},e),{value:s})}else return e}):t}resolvedOptions(){return this.dtf.resolvedOptions()}},Pn=class{constructor(t,e,s){this.opts=g({style:"long"},s),!e&&Hs()&&(this.rtf=ka(t,s))}format(t,e){return this.rtf?this.rtf.format(t,e):Ai(e,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,e){return this.rtf?this.rtf.formatToParts(t,e):[]}},A=class{static fromOpts(t){return A.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)}static create(t,e,s,r=!1){let o=t||O.defaultLocale,i=o||(r?"en-US":Ia()),a=e||O.defaultNumberingSystem,l=s||O.defaultOutputCalendar;return new A(i,a,l,o)}static resetCache(){Ke=null,Ln={},zn={},Hn={}}static fromObject({locale:t,numberingSystem:e,outputCalendar:s}={}){return A.create(t,e,s)}constructor(t,e,s,r){let[o,i,a]=Da(t);this.locale=o,this.numberingSystem=e||i||null,this.outputCalendar=s||a||null,this.intl=Na(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=za(this)),this.fastNumbersCached}listingMode(){let t=this.isEnglish(),e=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&e?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:A.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone(F(g({},t),{defaultToEN:!0}))}redefaultToSystem(t={}){return this.clone(F(g({},t),{defaultToEN:!1}))}months(t,e=!1){return zs(this,t,Vn,()=>{let s=e?{month:t,day:"numeric"}:{month:t},r=e?"format":"standalone";return this.monthsCache[r][t]||(this.monthsCache[r][t]=La(o=>this.extract(o,s,"month"))),this.monthsCache[r][t]})}weekdays(t,e=!1){return zs(this,t,Wn,()=>{let s=e?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},r=e?"format":"standalone";return this.weekdaysCache[r][t]||(this.weekdaysCache[r][t]=Fa(o=>this.extract(o,s,"weekday"))),this.weekdaysCache[r][t]})}meridiems(){return zs(this,void 0,()=>Bn,()=>{if(!this.meridiemCache){let t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[b.utc(2016,11,13,9),b.utc(2016,11,13,19)].map(e=>this.extract(e,t,"dayperiod"))}return this.meridiemCache})}eras(t){return zs(this,t,Zn,()=>{let e={era:t};return this.eraCache[t]||(this.eraCache[t]=[b.utc(-40,1,1),b.utc(2017,1,1)].map(s=>this.extract(s,e,"era"))),this.eraCache[t]})}extract(t,e,s){let r=this.dtFormatter(t,e),o=r.formatToParts(),i=o.find(a=>a.type.toLowerCase()===s);return i?i.value:null}numberFormatter(t={}){return new Rn(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,e={}){return new Un(t,this.intl,e)}relFormatter(t={}){return new Pn(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Oa(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}};var qn=null,I=class extends V{static get utcInstance(){return qn===null&&(qn=new I(0)),qn}static instance(t){return t===0?I.utcInstance:new I(t)}static parseSpecifier(t){if(t){let e=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(e)return new I(Ut(e[1],e[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${pt(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${pt(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,e){return pt(this.fixed,e)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}};var ce=class extends V{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function Y(n,t){let e;if(S(n)||n===null)return t;if(n instanceof V)return n;if(Ci(n)){let s=n.toLowerCase();return s==="default"?t:s==="local"||s==="system"?Q.instance:s==="utc"||s==="gmt"?I.utcInstance:I.parseSpecifier(s)||z.create(n)}else return X(n)?I.instance(n):typeof n=="object"&&"offset"in n&&typeof n.offset=="function"?n:new ce(n)}var Oi=()=>Date.now(),Mi="system",ki=null,Ii=null,Di=null,Ni=60,Li,O=class{static get now(){return Oi}static set now(t){Oi=t}static set defaultZone(t){Mi=t}static get defaultZone(){return Y(Mi,Q.instance)}static get defaultLocale(){return ki}static set defaultLocale(t){ki=t}static get defaultNumberingSystem(){return Ii}static set defaultNumberingSystem(t){Ii=t}static get defaultOutputCalendar(){return Di}static set defaultOutputCalendar(t){Di=t}static get twoDigitCutoffYear(){return Ni}static set twoDigitCutoffYear(t){Ni=t%100}static get throwOnInvalid(){return Li}static set throwOnInvalid(t){Li=t}static resetCaches(){A.resetCache(),z.resetCache()}};function S(n){return typeof n=="undefined"}function X(n){return typeof n=="number"}function Qe(n){return typeof n=="number"&&n%1===0}function Ci(n){return typeof n=="string"}function Fi(n){return Object.prototype.toString.call(n)==="[object Date]"}function Hs(){try{return typeof Intl!="undefined"&&!!Intl.RelativeTimeFormat}catch(n){return!1}}function zi(n){return Array.isArray(n)?n:[n]}function Gn(n,t,e){if(n.length!==0)return n.reduce((s,r)=>{let o=[t(r),r];return s&&e(s[0],o[0])===s[0]?s:o},null)[1]}function Hi(n,t){return t.reduce((e,s)=>(e[s]=n[s],e),{})}function ft(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function tt(n,t,e){return Qe(n)&&n>=t&&n<=e}function Ha(n,t){return n-t*Math.floor(n/t)}function k(n,t=2){let e=n<0,s;return e?s="-"+(""+-n).padStart(t,"0"):s=(""+n).padStart(t,"0"),s}function ot(n){if(!(S(n)||n===null||n===""))return parseInt(n,10)}function yt(n){if(!(S(n)||n===null||n===""))return parseFloat(n)}function Xe(n){if(!(S(n)||n===null||n==="")){let t=parseFloat("0."+n)*1e3;return Math.floor(t)}}function le(n,t,e=!1){let s=br(10,t);return(e?Math.trunc:Math.round)(n*s)/s}function Pt(n){return n%4===0&&(n%100!==0||n%400===0)}function Vt(n){return Pt(n)?366:365}function ue(n,t){let e=Ha(t-1,12)+1,s=n+(t-e)/12;return e===2?Pt(s)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][e-1]}function ae(n){let t=Date.UTC(n.year,n.month-1,n.day,n.hour,n.minute,n.second,n.millisecond);return n.year<100&&n.year>=0&&(t=new Date(t),t.setUTCFullYear(n.year,n.month-1,n.day)),+t}function de(n){let t=(n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400))%7,e=n-1,s=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7;return t===4||s===3?53:52}function ts(n){return n>99?n:n>O.twoDigitCutoffYear?1900+n:2e3+n}function Ns(n,t,e,s=null){let r=new Date(n),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};s&&(o.timeZone=s);let i=g({timeZoneName:t},o),a=new Intl.DateTimeFormat(e,i).formatToParts(r).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function Ut(n,t){let e=parseInt(n,10);Number.isNaN(e)&&(e=0);let s=parseInt(t,10)||0,r=e<0||Object.is(e,-0)?-s:s;return e*60+r}function Yn(n){let t=Number(n);if(typeof n=="boolean"||n===""||Number.isNaN(t))throw new U(`Invalid unit value ${n}`);return t}function me(n,t){let e={};for(let s in n)if(ft(n,s)){let r=n[s];if(r==null)continue;e[t(s)]=Yn(r)}return e}function pt(n,t){let e=Math.trunc(Math.abs(n/60)),s=Math.trunc(Math.abs(n%60)),r=n>=0?"+":"-";switch(t){case"short":return`${r}${k(e,2)}:${k(s,2)}`;case"narrow":return`${r}${e}${s>0?`:${s}`:""}`;case"techie":return`${r}${k(e,2)}${k(s,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function es(n){return Hi(n,["hour","minute","second","millisecond"])}var Ra=["January","February","March","April","May","June","July","August","September","October","November","December"],Jn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ua=["J","F","M","A","M","J","J","A","S","O","N","D"];function Vn(n){switch(n){case"narrow":return[...Ua];case"short":return[...Jn];case"long":return[...Ra];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var Kn=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Qn=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Pa=["M","T","W","T","F","S","S"];function Wn(n){switch(n){case"narrow":return[...Pa];case"short":return[...Qn];case"long":return[...Kn];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var Bn=["AM","PM"],Va=["Before Christ","Anno Domini"],Wa=["BC","AD"],Ba=["B","A"];function Zn(n){switch(n){case"narrow":return[...Ba];case"short":return[...Wa];case"long":return[...Va];default:return null}}function Ri(n){return Bn[n.hour<12?0:1]}function Ui(n,t){return Wn(t)[n.weekday-1]}function Pi(n,t){return Vn(t)[n.month-1]}function Vi(n,t){return Zn(t)[n.year<0?0:1]}function Ai(n,t,e="always",s=!1){let r={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(n)===-1;if(e==="auto"&&o){let d=n==="days";switch(t){case 1:return d?"tomorrow":`next ${r[n][0]}`;case-1:return d?"yesterday":`last ${r[n][0]}`;case 0:return d?"today":`this ${r[n][0]}`;default:}}let i=Object.is(t,-0)||t<0,a=Math.abs(t),l=a===1,c=r[n],u=s?l?c[1]:c[2]||c[1]:l?r[n][0]:n;return i?`${a} ${u} ago`:`in ${a} ${u}`}function Wi(n,t){let e="";for(let s of n)s.literal?e+=s.val:e+=t(s.val);return e}var Za={D:ht,DD:Ie,DDD:De,DDDD:Ne,t:Le,tt:Fe,ttt:ze,tttt:He,T:Re,TT:Ue,TTT:Pe,TTTT:Ve,f:We,ff:Ze,fff:qe,ffff:Ye,F:Be,FF:je,FFF:Ge,FFFF:Je},D=class{static create(t,e={}){return new D(t,e)}static parseFormat(t){let e=null,s="",r=!1,o=[];for(let i=0;i<t.length;i++){let a=t.charAt(i);a==="'"?(s.length>0&&o.push({literal:r||/^\s+$/.test(s),val:s}),e=null,s="",r=!r):r||a===e?s+=a:(s.length>0&&o.push({literal:/^\s+$/.test(s),val:s}),s=a,e=a)}return s.length>0&&o.push({literal:r||/^\s+$/.test(s),val:s}),o}static macroTokenToFormatOpts(t){return Za[t]}constructor(t,e){this.opts=e,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,e){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,g(g({},this.opts),e)).format()}dtFormatter(t,e={}){return this.loc.dtFormatter(t,g(g({},this.opts),e))}formatDateTime(t,e){return this.dtFormatter(t,e).format()}formatDateTimeParts(t,e){return this.dtFormatter(t,e).formatToParts()}formatInterval(t,e){return this.dtFormatter(t.start,e).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,e){return this.dtFormatter(t,e).resolvedOptions()}num(t,e=0){if(this.opts.forceSimple)return k(t,e);let s=g({},this.opts);return e>0&&(s.padTo=e),this.loc.numberFormatter(s).format(t)}formatDateTimeFromString(t,e){let s=this.loc.listingMode()==="en",r=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(h,v)=>this.loc.extract(t,h,v),i=h=>t.isOffsetFixed&&t.offset===0&&h.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,h.format):"",a=()=>s?Ri(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,v)=>s?Pi(t,h):o(v?{month:h}:{month:h,day:"numeric"},"month"),c=(h,v)=>s?Ui(t,h):o(v?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),u=h=>{let v=D.macroTokenToFormatOpts(h);return v?this.formatWithSystemDefault(t,v):h},d=h=>s?Vi(t,h):o({era:h},"era"),f=h=>{switch(h){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return i({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return i({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return i({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return r?o({day:"numeric"},"day"):this.num(t.day);case"dd":return r?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return r?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return r?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return r?o({month:"numeric"},"month"):this.num(t.month);case"MM":return r?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return r?o({year:"numeric"},"year"):this.num(t.year);case"yy":return r?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return r?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return r?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return u(h)}};return Wi(D.parseFormat(e),f)}formatDurationFromString(t,e){let s=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},r=l=>c=>{let u=s(c);return u?this.num(l.get(u),c.length):c},o=D.parseFormat(e),i=o.reduce((l,{literal:c,val:u})=>c?l:l.concat(u),[]),a=t.shiftTo(...i.map(s).filter(l=>l));return Wi(o,r(a))}};var P=class{constructor(t,e){this.reason=t,this.explanation=e}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}};var Zi=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function pe(...n){let t=n.reduce((e,s)=>e+s.source,"");return RegExp(`^${t}$`)}function fe(...n){return t=>n.reduce(([e,s,r],o)=>{let[i,a,l]=o(t,r);return[g(g({},e),i),a||s,l]},[{},null,1]).slice(0,2)}function ye(n,...t){if(n==null)return[null,null];for(let[e,s]of t){let r=e.exec(n);if(r)return s(r)}return[null,null]}function ji(...n){return(t,e)=>{let s={},r;for(r=0;r<n.length;r++)s[n[r]]=ot(t[e+r]);return[s,null,e+r]}}var qi=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,ja=`(?:${qi.source}?(?:\\[(${Zi.source})\\])?)?`,Xn=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Gi=RegExp(`${Xn.source}${ja}`),tr=RegExp(`(?:T${Gi.source})?`),qa=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Ga=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Ya=/(\d{4})-?(\d{3})/,Ja=ji("weekYear","weekNumber","weekDay"),Ka=ji("year","ordinal"),Qa=/(\d{4})-(\d\d)-(\d\d)/,Yi=RegExp(`${Xn.source} ?(?:${qi.source}|(${Zi.source}))?`),Xa=RegExp(`(?: ${Yi.source})?`);function he(n,t,e){let s=n[t];return S(s)?e:ot(s)}function tl(n,t){return[{year:he(n,t),month:he(n,t+1,1),day:he(n,t+2,1)},null,t+3]}function ge(n,t){return[{hours:he(n,t,0),minutes:he(n,t+1,0),seconds:he(n,t+2,0),milliseconds:Xe(n[t+3])},null,t+4]}function ss(n,t){let e=!n[t]&&!n[t+1],s=Ut(n[t+1],n[t+2]),r=e?null:I.instance(s);return[{},r,t+3]}function ns(n,t){let e=n[t]?z.create(n[t]):null;return[{},e,t+1]}var el=RegExp(`^T?${Xn.source}$`),sl=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function nl(n){let[t,e,s,r,o,i,a,l,c]=n,u=t[0]==="-",d=l&&l[0]==="-",f=(h,v=!1)=>h!==void 0&&(v||h&&u)?-h:h;return[{years:f(yt(e)),months:f(yt(s)),weeks:f(yt(r)),days:f(yt(o)),hours:f(yt(i)),minutes:f(yt(a)),seconds:f(yt(l),l==="-0"),milliseconds:f(Xe(c),d)}]}var rl={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function er(n,t,e,s,r,o,i){let a={year:t.length===2?ts(ot(t)):ot(t),month:Jn.indexOf(e)+1,day:ot(s),hour:ot(r),minute:ot(o)};return i&&(a.second=ot(i)),n&&(a.weekday=n.length>3?Kn.indexOf(n)+1:Qn.indexOf(n)+1),a}var il=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function ol(n){let[,t,e,s,r,o,i,a,l,c,u,d]=n,f=er(t,r,s,e,o,i,a),h;return l?h=rl[l]:c?h=0:h=Ut(u,d),[f,new I(h)]}function al(n){return n.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var ll=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,cl=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,ul=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Bi(n){let[,t,e,s,r,o,i,a]=n;return[er(t,r,s,e,o,i,a),I.utcInstance]}function dl(n){let[,t,e,s,r,o,i,a]=n;return[er(t,a,e,s,r,o,i),I.utcInstance]}var ml=pe(qa,tr),hl=pe(Ga,tr),pl=pe(Ya,tr),fl=pe(Gi),Ji=fe(tl,ge,ss,ns),yl=fe(Ja,ge,ss,ns),gl=fe(Ka,ge,ss,ns),vl=fe(ge,ss,ns);function Ki(n){return ye(n,[ml,Ji],[hl,yl],[pl,gl],[fl,vl])}function Qi(n){return ye(al(n),[il,ol])}function Xi(n){return ye(n,[ll,Bi],[cl,Bi],[ul,dl])}function to(n){return ye(n,[sl,nl])}var bl=fe(ge);function eo(n){return ye(n,[el,bl])}var xl=pe(Qa,Xa),El=pe(Yi),Sl=fe(ge,ss,ns);function so(n){return ye(n,[xl,Ji],[El,Sl])}var no="Invalid Duration",io={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},wl=g({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},io),B=146097/400,ve=146097/4800,Tl=g({years:{quarters:4,months:12,weeks:B/7,days:B,hours:B*24,minutes:B*24*60,seconds:B*24*60*60,milliseconds:B*24*60*60*1e3},quarters:{months:3,weeks:B/28,days:B/4,hours:B*24/4,minutes:B*24*60/4,seconds:B*24*60*60/4,milliseconds:B*24*60*60*1e3/4},months:{weeks:ve/7,days:ve,hours:ve*24,minutes:ve*24*60,seconds:ve*24*60*60,milliseconds:ve*24*60*60*1e3}},io),Wt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],$l=Wt.slice(0).reverse();function gt(n,t,e=!1){let s={values:e?t.values:g(g({},n.values),t.values||{}),loc:n.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||n.conversionAccuracy,matrix:t.matrix||n.matrix};return new w(s)}function oo(n,t){var s;let e=(s=t.milliseconds)!=null?s:0;for(let r of $l.slice(1))t[r]&&(e+=t[r]*n[r].milliseconds);return e}function ro(n,t){let e=oo(n,t)<0?-1:1;Wt.reduceRight((s,r)=>{if(S(t[r]))return s;if(s){let o=t[s]*e,i=n[r][s],a=Math.floor(o/i);t[r]+=a*e,t[s]-=a*i*e}return r},null),Wt.reduce((s,r)=>{if(S(t[r]))return s;if(s){let o=t[s]%1;t[s]-=o,t[r]+=o*n[s][r]}return r},null)}function _l(n){let t={};for(let[e,s]of Object.entries(n))s!==0&&(t[e]=s);return t}var w=class{constructor(t){let e=t.conversionAccuracy==="longterm"||!1,s=e?Tl:wl;t.matrix&&(s=t.matrix),this.values=t.values,this.loc=t.loc||A.create(),this.conversionAccuracy=e?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=s,this.isLuxonDuration=!0}static fromMillis(t,e){return w.fromObject({milliseconds:t},e)}static fromObject(t,e={}){if(t==null||typeof t!="object")throw new U(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new w({values:me(t,w.normalizeUnit),loc:A.fromObject(e),conversionAccuracy:e.conversionAccuracy,matrix:e.matrix})}static fromDurationLike(t){if(X(t))return w.fromMillis(t);if(w.isDuration(t))return t;if(typeof t=="object")return w.fromObject(t);throw new U(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,e){let[s]=to(t);return s?w.fromObject(s,e):w.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,e){let[s]=eo(t);return s?w.fromObject(s,e):w.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,e=null){if(!t)throw new U("need to specify a reason the Duration is invalid");let s=t instanceof P?t:new P(t,e);if(O.throwOnInvalid)throw new Is(s);return new w({invalid:s})}static normalizeUnit(t){let e={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!e)throw new oe(t);return e}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,e={}){let s=F(g({},e),{floor:e.round!==!1&&e.floor!==!1});return this.isValid?D.create(this.loc,s).formatDurationFromString(this,t):no}toHuman(t={}){if(!this.isValid)return no;let e=Wt.map(s=>{let r=this.values[s];return S(r)?null:this.loc.numberFormatter(F(g({style:"unit",unitDisplay:"long"},t),{unit:s.slice(0,-1)})).format(r)}).filter(s=>s);return this.loc.listFormatter(g({type:"conjunction",style:t.listStyle||"narrow"},t)).format(e)}toObject(){return this.isValid?g({},this.values):{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=le(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;let e=this.toMillis();return e<0||e>=864e5?null:(t=F(g({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},t),{includeOffset:!1}),b.fromMillis(e,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?oo(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;let e=w.fromDurationLike(t),s={};for(let r of Wt)(ft(e.values,r)||ft(this.values,r))&&(s[r]=e.get(r)+this.get(r));return gt(this,{values:s},!0)}minus(t){if(!this.isValid)return this;let e=w.fromDurationLike(t);return this.plus(e.negate())}mapUnits(t){if(!this.isValid)return this;let e={};for(let s of Object.keys(this.values))e[s]=Yn(t(this.values[s],s));return gt(this,{values:e},!0)}get(t){return this[w.normalizeUnit(t)]}set(t){if(!this.isValid)return this;let e=g(g({},this.values),me(t,w.normalizeUnit));return gt(this,{values:e})}reconfigure({locale:t,numberingSystem:e,conversionAccuracy:s,matrix:r}={}){let i={loc:this.loc.clone({locale:t,numberingSystem:e}),matrix:r,conversionAccuracy:s};return gt(this,i)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;let t=this.toObject();return ro(this.matrix,t),gt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;let t=_l(this.normalize().shiftToAll().toObject());return gt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(i=>w.normalizeUnit(i));let e={},s={},r=this.toObject(),o;for(let i of Wt)if(t.indexOf(i)>=0){o=i;let a=0;for(let c in s)a+=this.matrix[c][i]*s[c],s[c]=0;X(r[i])&&(a+=r[i]);let l=Math.trunc(a);e[i]=l,s[i]=(a*1e3-l*1e3)/1e3}else X(r[i])&&(s[i]=r[i]);for(let i in s)s[i]!==0&&(e[o]+=i===o?s[i]:s[i]/this.matrix[o][i]);return ro(this.matrix,e),gt(this,{values:e},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let t={};for(let e of Object.keys(this.values))t[e]=this.values[e]===0?0:-this.values[e];return gt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function e(s,r){return s===void 0||s===0?r===void 0||r===0:s===r}for(let s of Wt)if(!e(this.values[s],t.values[s]))return!1;return!0}};var be="Invalid Interval";function Al(n,t){return!n||!n.isValid?M.invalid("missing or invalid start"):!t||!t.isValid?M.invalid("missing or invalid end"):t<n?M.invalid("end before start",`The end of an interval must be after its start, but you had start=${n.toISO()} and end=${t.toISO()}`):null}var M=class{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,e=null){if(!t)throw new U("need to specify a reason the Interval is invalid");let s=t instanceof P?t:new P(t,e);if(O.throwOnInvalid)throw new ks(s);return new M({invalid:s})}static fromDateTimes(t,e){let s=xe(t),r=xe(e),o=Al(s,r);return o==null?new M({start:s,end:r}):o}static after(t,e){let s=w.fromDurationLike(e),r=xe(t);return M.fromDateTimes(r,r.plus(s))}static before(t,e){let s=w.fromDurationLike(e),r=xe(t);return M.fromDateTimes(r.minus(s),r)}static fromISO(t,e){let[s,r]=(t||"").split("/",2);if(s&&r){let o,i;try{o=b.fromISO(s,e),i=o.isValid}catch(c){i=!1}let a,l;try{a=b.fromISO(r,e),l=a.isValid}catch(c){l=!1}if(i&&l)return M.fromDateTimes(o,a);if(i){let c=w.fromISO(r,e);if(c.isValid)return M.after(o,c)}else if(l){let c=w.fromISO(s,e);if(c.isValid)return M.before(a,c)}}return M.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds"){if(!this.isValid)return NaN;let e=this.start.startOf(t),s=this.end.startOf(t);return Math.floor(s.diff(e,t).get(t))+(s.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:e}={}){return this.isValid?M.fromDateTimes(t||this.s,e||this.e):this}splitAt(...t){if(!this.isValid)return[];let e=t.map(xe).filter(i=>this.contains(i)).sort(),s=[],{s:r}=this,o=0;for(;r<this.e;){let i=e[o]||this.e,a=+i>+this.e?this.e:i;s.push(M.fromDateTimes(r,a)),r=a,o+=1}return s}splitBy(t){let e=w.fromDurationLike(t);if(!this.isValid||!e.isValid||e.as("milliseconds")===0)return[];let{s}=this,r=1,o,i=[];for(;s<this.e;){let a=this.start.plus(e.mapUnits(l=>l*r));o=+a>+this.e?this.e:a,i.push(M.fromDateTimes(s,o)),s=o,r+=1}return i}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;let e=this.s>t.s?this.s:t.s,s=this.e<t.e?this.e:t.e;return e>=s?null:M.fromDateTimes(e,s)}union(t){if(!this.isValid)return this;let e=this.s<t.s?this.s:t.s,s=this.e>t.e?this.e:t.e;return M.fromDateTimes(e,s)}static merge(t){let[e,s]=t.sort((r,o)=>r.s-o.s).reduce(([r,o],i)=>o?o.overlaps(i)||o.abutsStart(i)?[r,o.union(i)]:[r.concat([o]),i]:[r,i],[[],null]);return s&&e.push(s),e}static xor(t){let e=null,s=0,r=[],o=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),i=Array.prototype.concat(...o),a=i.sort((l,c)=>l.time-c.time);for(let l of a)s+=l.type==="s"?1:-1,s===1?e=l.time:(e&&+e!=+l.time&&r.push(M.fromDateTimes(e,l.time)),e=null);return M.merge(r)}difference(...t){return M.xor([this].concat(t)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:be}toLocaleString(t=ht,e={}){return this.isValid?D.create(this.s.loc.clone(e),t).formatInterval(this):be}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:be}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:be}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:be}toFormat(t,{separator:e=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(t)}${e}${this.e.toFormat(t)}`:be}toDuration(t,e){return this.isValid?this.e.diff(this.s,t,e):w.invalid(this.invalidReason)}mapEndpoints(t){return M.fromDateTimes(t(this.s),t(this.e))}};var at=class{static hasDST(t=O.defaultZone){let e=b.now().setZone(t).set({month:12});return!t.isUniversal&&e.offset!==e.set({month:6}).offset}static isValidIANAZone(t){return z.isValidZone(t)}static normalizeZone(t){return Y(t,O.defaultZone)}static months(t="long",{locale:e=null,numberingSystem:s=null,locObj:r=null,outputCalendar:o="gregory"}={}){return(r||A.create(e,s,o)).months(t)}static monthsFormat(t="long",{locale:e=null,numberingSystem:s=null,locObj:r=null,outputCalendar:o="gregory"}={}){return(r||A.create(e,s,o)).months(t,!0)}static weekdays(t="long",{locale:e=null,numberingSystem:s=null,locObj:r=null}={}){return(r||A.create(e,s,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:e=null,numberingSystem:s=null,locObj:r=null}={}){return(r||A.create(e,s,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return A.create(t).meridiems()}static eras(t="short",{locale:e=null}={}){return A.create(e,null,"gregory").eras(t)}static features(){return{relative:Hs()}}};function ao(n,t){let e=r=>r.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),s=e(t)-e(n);return Math.floor(w.fromMillis(s).as("days"))}function Cl(n,t,e){let s=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{let u=ao(l,c);return(u-u%7)/7}],["days",ao]],r={},o=n,i,a;for(let[l,c]of s)e.indexOf(l)>=0&&(i=l,r[l]=c(n,t),a=o.plus(r),a>t?(r[l]--,n=o.plus(r),n>t&&(a=n,r[l]--,n=o.plus(r))):n=a);return[n,r,a,i]}function lo(n,t,e,s){let[r,o,i,a]=Cl(n,t,e),l=t-r,c=e.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);c.length===0&&(i<t&&(i=r.plus({[a]:1})),i!==r&&(o[a]=(o[a]||0)+l/(i-r)));let u=w.fromObject(o,s);return c.length>0?w.fromMillis(l,s).shiftTo(...c).plus(u):u}var sr={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},co={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Ol=sr.hanidec.replace(/[\[|\]]/g,"").split("");function uo(n){let t=parseInt(n,10);if(isNaN(t)){t="";for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(n[e].search(sr.hanidec)!==-1)t+=Ol.indexOf(n[e]);else for(let r in co){let[o,i]=co[r];s>=o&&s<=i&&(t+=s-o)}}return parseInt(t,10)}else return t}function Z({numberingSystem:n},t=""){return new RegExp(`${sr[n||"latn"]}${t}`)}var Ml="missing Intl.DateTimeFormat.formatToParts support";function C(n,t=e=>e){return{regex:n,deser:([e])=>t(uo(e))}}var kl=String.fromCharCode(160),po=`[ ${kl}]`,fo=new RegExp(po,"g");function Il(n){return n.replace(/\./g,"\\.?").replace(fo,po)}function mo(n){return n.replace(/\./g,"").replace(fo," ").toLowerCase()}function J(n,t){return n===null?null:{regex:RegExp(n.map(Il).join("|")),deser:([e])=>n.findIndex(s=>mo(e)===mo(s))+t}}function ho(n,t){return{regex:n,deser:([,e,s])=>Ut(e,s),groups:t}}function Rs(n){return{regex:n,deser:([t])=>t}}function Dl(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Nl(n,t){let e=Z(t),s=Z(t,"{2}"),r=Z(t,"{3}"),o=Z(t,"{4}"),i=Z(t,"{6}"),a=Z(t,"{1,2}"),l=Z(t,"{1,3}"),c=Z(t,"{1,6}"),u=Z(t,"{1,9}"),d=Z(t,"{2,4}"),f=Z(t,"{4,6}"),h=N=>({regex:RegExp(Dl(N.val)),deser:([lt])=>lt,literal:!0}),K=(N=>{if(n.literal)return h(N);switch(N.val){case"G":return J(t.eras("short"),0);case"GG":return J(t.eras("long"),0);case"y":return C(c);case"yy":return C(d,ts);case"yyyy":return C(o);case"yyyyy":return C(f);case"yyyyyy":return C(i);case"M":return C(a);case"MM":return C(s);case"MMM":return J(t.months("short",!0),1);case"MMMM":return J(t.months("long",!0),1);case"L":return C(a);case"LL":return C(s);case"LLL":return J(t.months("short",!1),1);case"LLLL":return J(t.months("long",!1),1);case"d":return C(a);case"dd":return C(s);case"o":return C(l);case"ooo":return C(r);case"HH":return C(s);case"H":return C(a);case"hh":return C(s);case"h":return C(a);case"mm":return C(s);case"m":return C(a);case"q":return C(a);case"qq":return C(s);case"s":return C(a);case"ss":return C(s);case"S":return C(l);case"SSS":return C(r);case"u":return Rs(u);case"uu":return Rs(a);case"uuu":return C(e);case"a":return J(t.meridiems(),0);case"kkkk":return C(o);case"kk":return C(d,ts);case"W":return C(a);case"WW":return C(s);case"E":case"c":return C(e);case"EEE":return J(t.weekdays("short",!1),1);case"EEEE":return J(t.weekdays("long",!1),1);case"ccc":return J(t.weekdays("short",!0),1);case"cccc":return J(t.weekdays("long",!0),1);case"Z":case"ZZ":return ho(new RegExp(`([+-]${a.source})(?::(${s.source}))?`),2);case"ZZZ":return ho(new RegExp(`([+-]${a.source})(${s.source})?`),2);case"z":return Rs(/[a-z_+-/]{1,256}?/i);case" ":return Rs(/[^\S\n\r]/);default:return h(N)}})(n)||{invalidReason:Ml};return K.token=n,K}var Ll={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Fl(n,t,e){let{type:s,value:r}=n;if(s==="literal"){let l=/^\s+$/.test(r);return{literal:!l,val:l?" ":r}}let o=t[s],i=s;s==="hour"&&(t.hour12!=null?i=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?i="hour12":i="hour24":i=e.hour12?"hour12":"hour24");let a=Ll[i];if(typeof a=="object"&&(a=a[o]),a)return{literal:!1,val:a}}function zl(n){return[`^${n.map(e=>e.regex).reduce((e,s)=>`${e}(${s.source})`,"")}$`,n]}function Hl(n,t,e){let s=n.match(t);if(s){let r={},o=1;for(let i in e)if(ft(e,i)){let a=e[i],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(r[a.token.val[0]]=a.deser(s.slice(o,o+l))),o+=l}return[s,r]}else return[s,{}]}function Rl(n){let t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},e=null,s;return S(n.z)||(e=z.create(n.z)),S(n.Z)||(e||(e=new I(n.Z)),s=n.Z),S(n.q)||(n.M=(n.q-1)*3+1),S(n.h)||(n.h<12&&n.a===1?n.h+=12:n.h===12&&n.a===0&&(n.h=0)),n.G===0&&n.y&&(n.y=-n.y),S(n.u)||(n.S=Xe(n.u)),[Object.keys(n).reduce((o,i)=>{let a=t(i);return a&&(o[a]=n[i]),o},{}),e,s]}var nr=null;function Ul(){return nr||(nr=b.fromMillis(1555555555555)),nr}function Pl(n,t){if(n.literal)return n;let e=D.macroTokenToFormatOpts(n.val),s=or(e,t);return s==null||s.includes(void 0)?n:s}function rr(n,t){return Array.prototype.concat(...n.map(e=>Pl(e,t)))}function ir(n,t,e){let s=rr(D.parseFormat(e),n),r=s.map(i=>Nl(i,n)),o=r.find(i=>i.invalidReason);if(o)return{input:t,tokens:s,invalidReason:o.invalidReason};{let[i,a]=zl(r),l=RegExp(i,"i"),[c,u]=Hl(t,l,a),[d,f,h]=u?Rl(u):[null,null,void 0];if(ft(u,"a")&&ft(u,"H"))throw new it("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:s,regex:l,rawMatches:c,matches:u,result:d,zone:f,specificOffset:h}}}function yo(n,t,e){let{result:s,zone:r,specificOffset:o,invalidReason:i}=ir(n,t,e);return[s,r,o,i]}function or(n,t){if(!n)return null;let s=D.create(t,n).dtFormatter(Ul()),r=s.formatToParts(),o=s.resolvedOptions();return r.map(i=>Fl(i,n,o))}var go=[0,31,59,90,120,151,181,212,243,273,304,334],vo=[0,31,60,91,121,152,182,213,244,274,305,335];function j(n,t){return new P("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${n}, which is invalid`)}function bo(n,t,e){let s=new Date(Date.UTC(n,t-1,e));n<100&&n>=0&&s.setUTCFullYear(s.getUTCFullYear()-1900);let r=s.getUTCDay();return r===0?7:r}function xo(n,t,e){return e+(Pt(n)?vo:go)[t-1]}function Eo(n,t){let e=Pt(n)?vo:go,s=e.findIndex(o=>o<t),r=t-e[s];return{month:s+1,day:r}}function Us(n){let{year:t,month:e,day:s}=n,r=xo(t,e,s),o=bo(t,e,s),i=Math.floor((r-o+10)/7),a;return i<1?(a=t-1,i=de(a)):i>de(t)?(a=t+1,i=1):a=t,g({weekYear:a,weekNumber:i,weekday:o},es(n))}function ar(n){let{weekYear:t,weekNumber:e,weekday:s}=n,r=bo(t,1,4),o=Vt(t),i=e*7+s-r-3,a;i<1?(a=t-1,i+=Vt(a)):i>o?(a=t+1,i-=Vt(t)):a=t;let{month:l,day:c}=Eo(a,i);return g({year:a,month:l,day:c},es(n))}function Ps(n){let{year:t,month:e,day:s}=n,r=xo(t,e,s);return g({year:t,ordinal:r},es(n))}function lr(n){let{year:t,ordinal:e}=n,{month:s,day:r}=Eo(t,e);return g({year:t,month:s,day:r},es(n))}function So(n){let t=Qe(n.weekYear),e=tt(n.weekNumber,1,de(n.weekYear)),s=tt(n.weekday,1,7);return t?e?s?!1:j("weekday",n.weekday):j("week",n.week):j("weekYear",n.weekYear)}function wo(n){let t=Qe(n.year),e=tt(n.ordinal,1,Vt(n.year));return t?e?!1:j("ordinal",n.ordinal):j("year",n.year)}function cr(n){let t=Qe(n.year),e=tt(n.month,1,12),s=tt(n.day,1,ue(n.year,n.month));return t?e?s?!1:j("day",n.day):j("month",n.month):j("year",n.year)}function ur(n){let{hour:t,minute:e,second:s,millisecond:r}=n,o=tt(t,0,23)||t===24&&e===0&&s===0&&r===0,i=tt(e,0,59),a=tt(s,0,59),l=tt(r,0,999);return o?i?a?l?!1:j("millisecond",r):j("second",s):j("minute",e):j("hour",t)}var dr="Invalid DateTime",To=864e13;function Vs(n){return new P("unsupported zone",`the zone "${n.name}" is not supported`)}function mr(n){return n.weekData===null&&(n.weekData=Us(n.c)),n.weekData}function Bt(n,t){let e={ts:n.ts,zone:n.zone,c:n.c,o:n.o,loc:n.loc,invalid:n.invalid};return new b(F(g(g({},e),t),{old:e}))}function ko(n,t,e){let s=n-t*60*1e3,r=e.offset(s);if(t===r)return[s,t];s-=(r-t)*60*1e3;let o=e.offset(s);return r===o?[s,r]:[n-Math.min(r,o)*60*1e3,Math.max(r,o)]}function Ws(n,t){n+=t*60*1e3;let e=new Date(n);return{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate(),hour:e.getUTCHours(),minute:e.getUTCMinutes(),second:e.getUTCSeconds(),millisecond:e.getUTCMilliseconds()}}function Zs(n,t,e){return ko(ae(n),t,e)}function $o(n,t){let e=n.o,s=n.c.year+Math.trunc(t.years),r=n.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o=F(g({},n.c),{year:s,month:r,day:Math.min(n.c.day,ue(s,r))+Math.trunc(t.days)+Math.trunc(t.weeks)*7}),i=w.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=ae(o),[l,c]=ko(a,e,n.zone);return i!==0&&(l+=i,c=n.zone.offset(l)),{ts:l,o:c}}function rs(n,t,e,s,r,o){let{setZone:i,zone:a}=e;if(n&&Object.keys(n).length!==0||t){let l=t||a,c=b.fromObject(n,F(g({},e),{zone:l,specificOffset:o}));return i?c:c.setZone(a)}else return b.invalid(new P("unparsable",`the input "${r}" can't be parsed as ${s}`))}function Bs(n,t,e=!0){return n.isValid?D.create(A.create("en-US"),{allowZ:e,forceSimple:!0}).formatDateTimeFromString(n,t):null}function hr(n,t){let e=n.c.year>9999||n.c.year<0,s="";return e&&n.c.year>=0&&(s+="+"),s+=k(n.c.year,e?6:4),t?(s+="-",s+=k(n.c.month),s+="-",s+=k(n.c.day)):(s+=k(n.c.month),s+=k(n.c.day)),s}function _o(n,t,e,s,r,o){let i=k(n.c.hour);return t?(i+=":",i+=k(n.c.minute),(n.c.millisecond!==0||n.c.second!==0||!e)&&(i+=":")):i+=k(n.c.minute),(n.c.millisecond!==0||n.c.second!==0||!e)&&(i+=k(n.c.second),(n.c.millisecond!==0||!s)&&(i+=".",i+=k(n.c.millisecond,3))),r&&(n.isOffsetFixed&&n.offset===0&&!o?i+="Z":n.o<0?(i+="-",i+=k(Math.trunc(-n.o/60)),i+=":",i+=k(Math.trunc(-n.o%60))):(i+="+",i+=k(Math.trunc(n.o/60)),i+=":",i+=k(Math.trunc(n.o%60)))),o&&(i+="["+n.zone.ianaName+"]"),i}var Io={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Vl={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Wl={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Do=["year","month","day","hour","minute","second","millisecond"],Bl=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Zl=["year","ordinal","hour","minute","second","millisecond"];function Ao(n){let t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[n.toLowerCase()];if(!t)throw new oe(n);return t}function Co(n,t){let e=Y(t.zone,O.defaultZone),s=A.fromObject(t),r=O.now(),o,i;if(S(n.year))o=r;else{for(let c of Do)S(n[c])&&(n[c]=Io[c]);let a=cr(n)||ur(n);if(a)return b.invalid(a);let l=e.offset(r);[o,i]=Zs(n,l,e)}return new b({ts:o,zone:e,loc:s,o:i})}function Oo(n,t,e){let s=S(e.round)?!0:e.round,r=(i,a)=>(i=le(i,s||e.calendary?0:2,!0),t.loc.clone(e).relFormatter(e).format(i,a)),o=i=>e.calendary?t.hasSame(n,i)?0:t.startOf(i).diff(n.startOf(i),i).get(i):t.diff(n,i).get(i);if(e.unit)return r(o(e.unit),e.unit);for(let i of e.units){let a=o(i);if(Math.abs(a)>=1)return r(a,i)}return r(n>t?-0:0,e.units[e.units.length-1])}function Mo(n){let t={},e;return n.length>0&&typeof n[n.length-1]=="object"?(t=n[n.length-1],e=Array.from(n).slice(0,n.length-1)):e=Array.from(n),[t,e]}var b=class{constructor(t){let e=t.zone||O.defaultZone,s=t.invalid||(Number.isNaN(t.ts)?new P("invalid input"):null)||(e.isValid?null:Vs(e));this.ts=S(t.ts)?O.now():t.ts;let r=null,o=null;if(!s)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(e))[r,o]=[t.old.c,t.old.o];else{let a=e.offset(this.ts);r=Ws(this.ts,a),s=Number.isNaN(r.year)?new P("invalid input"):null,r=s?null:r,o=s?null:a}this._zone=e,this.loc=t.loc||A.create(),this.invalid=s,this.weekData=null,this.c=r,this.o=o,this.isLuxonDateTime=!0}static now(){return new b({})}static local(){let[t,e]=Mo(arguments),[s,r,o,i,a,l,c]=e;return Co({year:s,month:r,day:o,hour:i,minute:a,second:l,millisecond:c},t)}static utc(){let[t,e]=Mo(arguments),[s,r,o,i,a,l,c]=e;return t.zone=I.utcInstance,Co({year:s,month:r,day:o,hour:i,minute:a,second:l,millisecond:c},t)}static fromJSDate(t,e={}){let s=Fi(t)?t.valueOf():NaN;if(Number.isNaN(s))return b.invalid("invalid input");let r=Y(e.zone,O.defaultZone);return r.isValid?new b({ts:s,zone:r,loc:A.fromObject(e)}):b.invalid(Vs(r))}static fromMillis(t,e={}){if(X(t))return t<-To||t>To?b.invalid("Timestamp out of range"):new b({ts:t,zone:Y(e.zone,O.defaultZone),loc:A.fromObject(e)});throw new U(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,e={}){if(X(t))return new b({ts:t*1e3,zone:Y(e.zone,O.defaultZone),loc:A.fromObject(e)});throw new U("fromSeconds requires a numerical input")}static fromObject(t,e={}){t=t||{};let s=Y(e.zone,O.defaultZone);if(!s.isValid)return b.invalid(Vs(s));let r=O.now(),o=S(e.specificOffset)?s.offset(r):e.specificOffset,i=me(t,Ao),a=!S(i.ordinal),l=!S(i.year),c=!S(i.month)||!S(i.day),u=l||c,d=i.weekYear||i.weekNumber,f=A.fromObject(e);if((u||a)&&d)throw new it("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&a)throw new it("Can't mix ordinal dates with month/day");let h=d||i.weekday&&!u,v,K,N=Ws(r,o);h?(v=Bl,K=Vl,N=Us(N)):a?(v=Zl,K=Wl,N=Ps(N)):(v=Do,K=Io);let lt=!1;for(let Ee of v){let Zo=i[Ee];S(Zo)?lt?i[Ee]=K[Ee]:i[Ee]=N[Ee]:lt=!0}let os=h?So(i):a?wo(i):cr(i),pr=os||ur(i);if(pr)return b.invalid(pr);let Vo=h?ar(i):a?lr(i):i,[Wo,Bo]=Zs(Vo,o,s),js=new b({ts:Wo,zone:s,o:Bo,loc:f});return i.weekday&&u&&t.weekday!==js.weekday?b.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${js.toISO()}`):js}static fromISO(t,e={}){let[s,r]=Ki(t);return rs(s,r,e,"ISO 8601",t)}static fromRFC2822(t,e={}){let[s,r]=Qi(t);return rs(s,r,e,"RFC 2822",t)}static fromHTTP(t,e={}){let[s,r]=Xi(t);return rs(s,r,e,"HTTP",e)}static fromFormat(t,e,s={}){if(S(t)||S(e))throw new U("fromFormat requires an input string and a format");let{locale:r=null,numberingSystem:o=null}=s,i=A.fromOpts({locale:r,numberingSystem:o,defaultToEN:!0}),[a,l,c,u]=yo(i,t,e);return u?b.invalid(u):rs(a,l,s,`format ${e}`,t,c)}static fromString(t,e,s={}){return b.fromFormat(t,e,s)}static fromSQL(t,e={}){let[s,r]=so(t);return rs(s,r,e,"SQL",t)}static invalid(t,e=null){if(!t)throw new U("need to specify a reason the DateTime is invalid");let s=t instanceof P?t:new P(t,e);if(O.throwOnInvalid)throw new Ms(s);return new b({invalid:s})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,e={}){let s=or(t,A.fromObject(e));return s?s.map(r=>r?r.val:null).join(""):null}static expandFormat(t,e={}){return rr(D.parseFormat(t),A.fromObject(e)).map(r=>r.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?mr(this).weekYear:NaN}get weekNumber(){return this.isValid?mr(this).weekNumber:NaN}get weekday(){return this.isValid?mr(this).weekday:NaN}get ordinal(){return this.isValid?Ps(this.c).ordinal:NaN}get monthShort(){return this.isValid?at.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?at.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?at.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?at.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let t=864e5,e=6e4,s=ae(this.c),r=this.zone.offset(s-t),o=this.zone.offset(s+t),i=this.zone.offset(s-r*e),a=this.zone.offset(s-o*e);if(i===a)return[this];let l=s-i*e,c=s-a*e,u=Ws(l,i),d=Ws(c,a);return u.hour===d.hour&&u.minute===d.minute&&u.second===d.second&&u.millisecond===d.millisecond?[Bt(this,{ts:l}),Bt(this,{ts:c})]:[this]}get isInLeapYear(){return Pt(this.year)}get daysInMonth(){return ue(this.year,this.month)}get daysInYear(){return this.isValid?Vt(this.year):NaN}get weeksInWeekYear(){return this.isValid?de(this.weekYear):NaN}resolvedLocaleOptions(t={}){let{locale:e,numberingSystem:s,calendar:r}=D.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:e,numberingSystem:s,outputCalendar:r}}toUTC(t=0,e={}){return this.setZone(I.instance(t),e)}toLocal(){return this.setZone(O.defaultZone)}setZone(t,{keepLocalTime:e=!1,keepCalendarTime:s=!1}={}){if(t=Y(t,O.defaultZone),t.equals(this.zone))return this;if(t.isValid){let r=this.ts;if(e||s){let o=t.offset(this.ts),i=this.toObject();[r]=Zs(i,o,t)}return Bt(this,{ts:r,zone:t})}else return b.invalid(Vs(t))}reconfigure({locale:t,numberingSystem:e,outputCalendar:s}={}){let r=this.loc.clone({locale:t,numberingSystem:e,outputCalendar:s});return Bt(this,{loc:r})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;let e=me(t,Ao),s=!S(e.weekYear)||!S(e.weekNumber)||!S(e.weekday),r=!S(e.ordinal),o=!S(e.year),i=!S(e.month)||!S(e.day),a=o||i,l=e.weekYear||e.weekNumber;if((a||r)&&l)throw new it("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(i&&r)throw new it("Can't mix ordinal dates with month/day");let c;s?c=ar(g(g({},Us(this.c)),e)):S(e.ordinal)?(c=g(g({},this.toObject()),e),S(e.day)&&(c.day=Math.min(ue(c.year,c.month),c.day))):c=lr(g(g({},Ps(this.c)),e));let[u,d]=Zs(c,this.o,this.zone);return Bt(this,{ts:u,o:d})}plus(t){if(!this.isValid)return this;let e=w.fromDurationLike(t);return Bt(this,$o(this,e))}minus(t){if(!this.isValid)return this;let e=w.fromDurationLike(t).negate();return Bt(this,$o(this,e))}startOf(t){if(!this.isValid)return this;let e={},s=w.normalizeUnit(t);switch(s){case"years":e.month=1;case"quarters":case"months":e.day=1;case"weeks":case"days":e.hour=0;case"hours":e.minute=0;case"minutes":e.second=0;case"seconds":e.millisecond=0;break;case"milliseconds":break}if(s==="weeks"&&(e.weekday=1),s==="quarters"){let r=Math.ceil(this.month/3);e.month=(r-1)*3+1}return this.set(e)}endOf(t){return this.isValid?this.plus({[t]:1}).startOf(t).minus(1):this}toFormat(t,e={}){return this.isValid?D.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this,t):dr}toLocaleString(t=ht,e={}){return this.isValid?D.create(this.loc.clone(e),t).formatDateTime(this):dr}toLocaleParts(t={}){return this.isValid?D.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:e=!1,suppressMilliseconds:s=!1,includeOffset:r=!0,extendedZone:o=!1}={}){if(!this.isValid)return null;let i=t==="extended",a=hr(this,i);return a+="T",a+=_o(this,i,e,s,r,o),a}toISODate({format:t="extended"}={}){return this.isValid?hr(this,t==="extended"):null}toISOWeekDate(){return Bs(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:e=!1,includeOffset:s=!0,includePrefix:r=!1,extendedZone:o=!1,format:i="extended"}={}){return this.isValid?(r?"T":"")+_o(this,i==="extended",e,t,s,o):null}toRFC2822(){return Bs(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Bs(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?hr(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:e=!1,includeOffsetSpace:s=!0}={}){let r="HH:mm:ss.SSS";return(e||t)&&(s&&(r+=" "),e?r+="z":t&&(r+="ZZ")),Bs(this,r,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():dr}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};let e=g({},this.c);return t.includeConfig&&(e.outputCalendar=this.outputCalendar,e.numberingSystem=this.loc.numberingSystem,e.locale=this.loc.locale),e}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,e="milliseconds",s={}){if(!this.isValid||!t.isValid)return w.invalid("created by diffing an invalid DateTime");let r=g({locale:this.locale,numberingSystem:this.numberingSystem},s),o=zi(e).map(w.normalizeUnit),i=t.valueOf()>this.valueOf(),a=i?this:t,l=i?t:this,c=lo(a,l,o,r);return i?c.negate():c}diffNow(t="milliseconds",e={}){return this.diff(b.now(),t,e)}until(t){return this.isValid?M.fromDateTimes(this,t):this}hasSame(t,e){if(!this.isValid)return!1;let s=t.valueOf(),r=this.setZone(t.zone,{keepLocalTime:!0});return r.startOf(e)<=s&&s<=r.endOf(e)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;let e=t.base||b.fromObject({},{zone:this.zone}),s=t.padding?this<e?-t.padding:t.padding:0,r=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(r=t.unit,o=void 0),Oo(e,this.plus(s),F(g({},t),{numeric:"always",units:r,unit:o}))}toRelativeCalendar(t={}){return this.isValid?Oo(t.base||b.fromObject({},{zone:this.zone}),this,F(g({},t),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...t){if(!t.every(b.isDateTime))throw new U("min requires all arguments be DateTimes");return Gn(t,e=>e.valueOf(),Math.min)}static max(...t){if(!t.every(b.isDateTime))throw new U("max requires all arguments be DateTimes");return Gn(t,e=>e.valueOf(),Math.max)}static fromFormatExplain(t,e,s={}){let{locale:r=null,numberingSystem:o=null}=s,i=A.fromOpts({locale:r,numberingSystem:o,defaultToEN:!0});return ir(i,t,e)}static fromStringExplain(t,e,s={}){return b.fromFormatExplain(t,e,s)}static get DATE_SHORT(){return ht}static get DATE_MED(){return Ie}static get DATE_MED_WITH_WEEKDAY(){return In}static get DATE_FULL(){return De}static get DATE_HUGE(){return Ne}static get TIME_SIMPLE(){return Le}static get TIME_WITH_SECONDS(){return Fe}static get TIME_WITH_SHORT_OFFSET(){return ze}static get TIME_WITH_LONG_OFFSET(){return He}static get TIME_24_SIMPLE(){return Re}static get TIME_24_WITH_SECONDS(){return Ue}static get TIME_24_WITH_SHORT_OFFSET(){return Pe}static get TIME_24_WITH_LONG_OFFSET(){return Ve}static get DATETIME_SHORT(){return We}static get DATETIME_SHORT_WITH_SECONDS(){return Be}static get DATETIME_MED(){return Ze}static get DATETIME_MED_WITH_SECONDS(){return je}static get DATETIME_MED_WITH_WEEKDAY(){return Dn}static get DATETIME_FULL(){return qe}static get DATETIME_FULL_WITH_SECONDS(){return Ge}static get DATETIME_HUGE(){return Ye}static get DATETIME_HUGE_WITH_SECONDS(){return Je}};function xe(n){if(b.isDateTime(n))return n;if(n&&n.valueOf&&X(n.valueOf()))return b.fromJSDate(n);if(n&&typeof n=="object")return b.fromObject(n);throw new U(`Unknown datetime argument: ${n}, of type ${typeof n}`)}var No=_(E),jl=[No.styles,En],Zt=class extends No{constructor(){super();this.updateComment=({detail:e})=>{let{text:s}=e;this.text=s,this.closeEditMode(),this.emitEvent("update-comment",{uuid:this.uuid,text:s})};this.resolveAnnotation=e=>{e.stopPropagation(),this.emitEvent("resolve-annotation",{type:"resolve-annotation",resolved:!this.resolved},{composed:!1,bubbles:!1})};this.confirmDelete=()=>{if(this.deleteCommentModalOpen=!1,this.primaryComment)return this.emitEvent("delete-annotation",{uuid:this.annotationId});this.emitEvent("delete-comment",{annotationId:this.annotationId,uuid:this.uuid})};this.closeEditMode=()=>{this.mode="readonly"};this.resolved=!1}render(){var h;let e=this.annotationFilter==="all"?"resolve":"undo",s=v=>b.fromISO(v).toFormat("yyyy-dd-MM"),r=this.resolvable?"comment-item__resolve":"hidden",o=[{label:"EDIT"},{label:"DELETE"}],i=({detail:v})=>{v==="EDIT"&&(this.mode="editable"),v==="DELETE"&&(this.deleteCommentModalOpen=!0)},a=()=>{this.text.length<120||(this.expandElipsis=!0)},l=()=>{if(this.mode==="editable")return y`
        <superviz-comments-comment-input
          class="comment-item--editable"
          editable
          @click=${v=>v.stopPropagation()}
          text=${this.text}
          eventType="update-comment"
          @update-comment=${this.updateComment}
          @close-edit-mode=${this.closeEditMode}
        ></superviz-comments-comment-input>
      `},c=()=>{if(this.mode!=="editable")return y`
        <span
          id="comment-text"
          @click=${a}
          class="text text-big sv-gray-700 ${f}"
          >${this.text}</span
        >
      `},u=()=>{this.deleteCommentModalOpen=!1},d={"comment-item":!0,reply:!this.primaryComment},f=!this.expandElipsis&&this.text.length>120?"line-clamp":"";return y`
      <div class=${L(d)}>
        <div class="comment-item__user">
          <div class="comment-item__user-details">
            <div class="comment-item__avatar">
              <p class="text text-bold">${((h=this.username[0])==null?void 0:h.toUpperCase())||"A"}</p>
            </div>
            <span class="text text-bold sv-gray-600">${this.username}</span>
            <span class="text text-small sv-gray-500">${s(this.createdAt)}</span>
          </div>
          <div class="comment-item__actions">
            <button
              @click=${this.resolveAnnotation}
              class="icon-button icon-button--clickable icon-button--xsmall ${r}"
            >
              <superviz-icon name=${e} size="md"></superviz-icon>
            </button>
            <superviz-dropdown
              options=${JSON.stringify(o)}
              label="label"
              returnTo="label"
              position="bottom-right"
              @selected=${i}
              @click=${v=>v.stopPropagation()}
            >
              <button slot="dropdown" class="icon-button icon-button--clickable icon-button--small">
                <superviz-icon name="more" size="sm"></superviz-icon>
              </button>
            </superviz-dropdown>
          </div>
        </div>

        <div class="comment-item__content">
          <div class="comment-item__content__body">${l()} ${c()}</div>
        </div>
      </div>
      <superviz-comments-delete-comments-modal
        ?open=${this.deleteCommentModalOpen}
        @close=${u}
        @confirm=${this.confirmDelete}
      >
      </superviz-comments-delete-comments-modal>
    `}};Zt.styles=jl,Zt.properties={uuid:{type:String},annotationId:{type:String},avatar:{type:String},username:{type:String},text:{type:String},resolved:{type:Boolean},resolvable:{type:Boolean},createdAt:{type:String},mode:{type:String},deleteCommentModalOpen:{type:Boolean},primaryComment:{type:Boolean},expandElipsis:{type:Boolean},annotationFilter:{type:String}},Zt=T([$("superviz-comments-comment-item")],Zt);var Lo=_(E),ql=[Lo.styles,wn],jt=class extends Lo{constructor(){super();this.pinCoordinates=null;this.getCommentInput=()=>this.shadowRoot.getElementById("comment-input--textarea");this.getCommentInputContainer=()=>this.shadowRoot.getElementById("comment-input--container");this.getSendBtn=()=>this.shadowRoot.querySelector(".comment-input--send-btn");this.commentInputFocus=({detail:e})=>{this.pinCoordinates=e,this.getCommentInput().focus()};this.sendEnter=e=>{var i,a,l,c,u,d,f,h;if(e.key!=="Enter"||e.shiftKey)return;let s=this.getCommentInput(),r=s.value.trim();if(!r)return;let o=this.getSendBtn();this.emitEvent(this.eventType,{text:r,position:F(g({},this.pinCoordinates),{x:(a=(i=this.pinCoordinates)==null?void 0:i.x)!=null?a:null,y:(c=(l=this.pinCoordinates)==null?void 0:l.y)!=null?c:null,z:(d=(u=this.pinCoordinates)==null?void 0:u.z)!=null?d:null,type:(h=(f=this.pinCoordinates)==null?void 0:f.type)!=null?h:null})},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",o.disabled=!0,this.updateHeight()};this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1})};this.btnActive=!1,this.text=""}connectedCallback(){super.connectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&(window.document.body.addEventListener("comment-input-focus",this.commentInputFocus),this.addEventListener("keyup",this.sendEnter))}disconnectedCallback(){super.disconnectedCallback(),this.eventType==="create-annotation"&&window.document.body.removeEventListener("comment-input-focus",this.commentInputFocus)}updated(e){if(e.has("text")&&this.text.length>0){let s=this.getCommentInput();s.value=this.text,this.updateHeight()}if(e.has("btnActive")){let s=this.getSendBtn();s.disabled=!this.btnActive}}updateHeight(){let e=this.getCommentInput(),s=this.getCommentInputContainer();e.style.height="0px",s.style.height="0px";let r=e.scrollHeight+4,o=e.scrollHeight;e.style.height=`${r}px`,s.style.height=`${o}px`;let i=this.getSendBtn();i.disabled=!(e.value.length>0)}send(e){var i,a,l,c,u,d,f,h;e.preventDefault();let s=this.getCommentInput(),r=this.getSendBtn(),o=s.value;this.emitEvent(this.eventType,{text:o,position:F(g({},this.pinCoordinates),{x:(a=(i=this.pinCoordinates)==null?void 0:i.x)!=null?a:null,y:(c=(l=this.pinCoordinates)==null?void 0:l.y)!=null?c:null,z:(d=(u=this.pinCoordinates)==null?void 0:u.z)!=null?d:null,type:(h=(f=this.pinCoordinates)==null?void 0:f.type)!=null?h:null})},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",r.disabled=!0,this.updateHeight()}render(){let e=()=>{if(!!this.editable)return y`
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
      `},s=()=>{if(!this.editable)return y`
        <button class="comment-input--send-btn align-send-btn" disabled @click=${this.send}>
          <superviz-icon name="send" size="sm"></superviz-icon>
        </button>
      `};return y`
      <div class="comment-input">
        <div id="comment-input--container">
          <textarea
            id="comment-input--textarea"
            placeholder="Add comment..."
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
            ${s()} ${e()}
          </div>
        </div>
      </div>
    `}};jt.styles=ql,jt.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean}},jt=T([$("superviz-comments-comment-input")],jt);var Fo=_(E),Gl=[Fo.styles,_n],qt=class extends Fo{constructor(){super();this.position={x:0,y:0}}get userInitial(){var s,r,o;return(((o=(r=(s=this.annotation)==null?void 0:s.comments[0])==null?void 0:r.participant)==null?void 0:o.name)||"Anonymous")[0].toUpperCase()}emitClick(){document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:this.annotation.uuid}}))}render(){var s,r;let e={"annotation-pin":!0,"annotation-pin--active":this.active};return this.type==="add"?y`
        <div
          class=${L(e)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          <div class="annotation-pin__avatar annotation-pin__avatar--add">
            <superviz-icon name="add"></superviz-icon>
          </div>
        </div>
      `:y`
      <div
        @click=${this.emitClick}
        class=${L(e)}
        style=${`top: ${(s=this.position)==null?void 0:s.y}px; left: ${(r=this.position)==null?void 0:r.x}px; pointer-events: auto;`}
      >
        <div class="annotation-pin__avatar">
          <p class="text text-bold text-big">${this.userInitial}</p>
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
      </div>
    `}};qt.styles=Gl,qt.properties={type:{type:String},annotation:{type:Object},position:{type:Object},active:{type:Boolean}},qt=T([$("superviz-comments-annotation-pin")],qt);var zo=_(E),Yl=[zo.styles,Tn],Gt=class extends zo{constructor(){super(...arguments);this.selectAnnotation=()=>{let{uuid:e}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:e}}))};this.resolveAnnotation=({detail:e})=>{let{uuid:s}=this.annotation,{resolved:r,type:o}=e,i=o==="resolve-annotation"&&this.annotationFilter==="all";this.resolved=r,this.emitEvent("resolve-annotation",{uuid:s,resolved:r}),i&&(this.shouldShowUndoResolved=!0)};this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1};this.generateExpantedCommentesTemplate=(e,s)=>s===0?y``:y`
      <superviz-comments-comment-item
        uuid=${e.uuid}
        avatar="https://picsum.photos/200/300"
        username=${e.participant.name||"Anonymous"}
        text=${e.text}
        createdAt=${e.createdAt}
        annotationId=${this.annotation.uuid}
      ></superviz-comments-comment-item>
    `}get filterIsAll(){return this.annotationFilter==="all"}get filterIsResolved(){return this.annotationFilter==="resolved"}get shouldHiddenAnnotation(){return{hidden:this.resolved&&this.filterIsAll||!this.resolved&&this.filterIsResolved}}get replies(){return[...this.annotation.comments].splice(1).length}get repliesSize(){return this.replies>=5?5:this.replies}get replyText(){return this.replies!==1?"replies":"reply"}get isSelected(){return this.selected===this.annotation.uuid}get annotationClasses(){return{"annotation-item":!0,"annotation-item--selected":this.isSelected}}get hrClasses(){return{"sv-hr":!0,hidden:this.isLastAnnotation}}get avatarCommentsClasses(){return{"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&this.replies>1,hidden:!(!this.expandComments&&this.replies>=1)}}get commentsClasses(){return{"comments-container":!0,"comment-item--expand":this.isSelected&&this.expandComments,hidden:!(this.isSelected&&this.expandComments)}}firstUpdated(){this.resolved=this.annotation.resolved}updated(e){if(e.has("selected")){let s=this.selected===this.annotation.uuid;this.expandComments=s}}createComment({detail:e}){let{text:s}=e;this.emitEvent("create-comment",{uuid:this.annotation.uuid,text:s})}generateAvatarCommentsTemplate(){var s,r;let e=[];for(let o=1;o<=this.repliesSize;o++)e.push(y`
        <div class="avatar">
          <p class="text text-bold">
            ${((r=(s=this.annotation.comments[o])==null?void 0:s.participant.name[0])==null?void 0:r.toUpperCase())||"A"}
          </p>
        </div>
      `);return y`
      ${e}
      <div class="text text-big sv-gray-500">${this.replies} ${this.replyText}</div>
    `}annotationResolvedTemplate(){return this.shouldShowUndoResolved?y`
      <superviz-comments-annotation-resolved
        @undo-resolve=${this.resolveAnnotation}
        @hide=${this.hideUndoResolved}
        class=${L({hidden:this.filterIsResolved})}
      >
      </superviz-comments-annotation-resolved>
    `:y``}render(){var e,s,r,o,i,a;return y`
      ${this.annotationResolvedTemplate()}

      <div class=${L(this.shouldHiddenAnnotation)}>
        <div class=${L(this.annotationClasses)} @click=${this.selectAnnotation}>
          <div>
            <superviz-comments-comment-item
              uuid=${(e=this.annotation.comments)==null?void 0:e[0].uuid}
              annotationId=${this.annotation.uuid}
              username=${((r=(s=this.annotation.comments)==null?void 0:s[0].participant)==null?void 0:r.name)||"Anonymous"}
              text=${(o=this.annotation.comments)==null?void 0:o[0].text}
              createdAt=${(i=this.annotation.comments)==null?void 0:i[0].createdAt}
              primaryComment
              resolvable
              ?resolved=${this.resolved}
              annotationFilter=${this.annotationFilter}
              @resolve-annotation=${this.resolveAnnotation}
            ></superviz-comments-comment-item>

            <div class=${L(this.avatarCommentsClasses)}>
              <div class="avatar-container">${this.generateAvatarCommentsTemplate()}</div>
            </div>
          </div>

          <div class=${L(this.commentsClasses)}>
            ${(a=this.annotation.comments)==null?void 0:a.map(this.generateExpantedCommentesTemplate)}
            <superviz-comments-comment-input
              @create-comment=${this.createComment}
              eventType="create-comment"
              @click=${l=>l.stopPropagation()}
            ></superviz-comments-comment-input>
          </div>
        </div>
        <div class=${L(this.hrClasses)}></div>
      </div>
    `}};Gt.styles=Yl,Gt.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String}},Gt=T([$("superviz-comments-annotation-item")],Gt);var Ho=_(E),Jl=[Ho.styles],Yt=class extends Ho{constructor(){super(...arguments);this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:y`<span class="text text-big sv-gray-600">Are you sure you want to delete this comment? <br /> This action cannot be undone</span>`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))};this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{!this.open||this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{!this.open||(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(e){e.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){!this.open||(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){let e=()=>{if(!!this.useSlot)return y`<slot name="modal-handler" @click=${this.toggle}></slot>`},s=()=>{if(!!this.open)return y`
        <superviz-modal></superviz-modal>
      `};return y`
      ${e()}
      ${s()}
    `}};Yt.styles=Jl,Yt.properties={open:{type:Boolean},useSlot:{type:Boolean}},Yt=T([$("superviz-comments-delete-comments-modal")],Yt);var Ro=_(E),Kl=[Ro.styles,$n],Ql=10*1e3,Jt=class extends Ro{constructor(){super();this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)};this.timeToHide=Ql,this.isCanceled=!1}firstUpdated(){this.setTimer()}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return this.timeToHide===0?y``:this.isCanceled?y``:y`
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
    `}};Jt.styles=Kl,Jt.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},Jt=T([$("superviz-comments-annotation-resolved")],Jt);var Uo=_(E),Xl=[Uo.styles,An],is=[{label:"All comments",code:"all"},{label:"Resolved comments",code:"resolved"}],Kt=class extends Uo{constructor(){super();this.caret="down"}render(){let e=this.filter==="all"?is[0].label:is[1].label,s=({detail:a})=>{this.emitEvent("select",{filter:a}),r()},r=()=>{this.caret=this.caret==="down"?"up":"down"},o=this.filter==="all"?is[0].code:is[1].code,i={text:!0,"text-bold":!0,"select-content":!0,"sv-gray-500":this.caret==="down","sv-gray-700":this.caret==="up"};return y`
      <div class="select">
        <div class="select-container">
          <superviz-dropdown 
            options=${JSON.stringify(is)}
            active=${o}
            label="label"
            returnTo="code"
            position="bottom-left"
            right-offset="100px"
            @click=${r}
            @selected=${s}
            @close=${r}
          >
            <div class="content" slot="dropdown">
              <span class=${L(i)}>${e}</span>
              <superviz-icon name=${this.caret} size="md"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};Kt.styles=Xl,Kt.properties={filter:{type:String},caret:{type:String}},Kt=T([$("superviz-comments-annotation-filter")],Kt);var Po=_(E),tc=[Po.styles,Cn],Qt=class extends Po{constructor(){super();this.isHidden=!0,this.positionStyles="top: 20px; left: 20px;",this.shouldHide=!1,this.commentsPosition="left"}toggle(){this.emitEvent("toggle",{})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("toggle-annotation-sidebar",()=>{this.isHidden=!this.isHidden})}updated(e){super.updated(e),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".float-button");if(!s)return;s.setAttribute("style",this.positionStyles);let r=window.document.body.getBoundingClientRect().width,o=s.getBoundingClientRect(),i=320;if(!this.commentsPosition||this.commentsPosition==="left"){this.shouldHide=o.x<i;return}this.shouldHide=r-o.right<i})}render(){let e={"float-button":!0,"hide-button":!this.isHidden&&this.shouldHide};return y` <button @click=${this.toggle} class="${L(e)}">
      <superviz-icon name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`}};Qt.styles=tc,Qt.properties={positionStyles:{type:String},isHidden:{type:Boolean},commentsPosition:{type:String}},Qt=T([$("superviz-comments-button")],Qt);export{Ft as Comments,Kt as CommentsAnnotationFilter,Gt as CommentsAnnotationItem,qt as CommentsAnnotationPin,Jt as CommentsAnnotationResolved,Ht as CommentsAnnotations,jt as CommentsCommentInput,Zt as CommentsCommentItem,Rt as CommentsContent,Qt as CommentsFloatButton,zt as CommentsTopbar,Yt as DeleteCommentModal,Lt as Dropdown,Dt as HelloWorld,Nt as Icon,ne as Modal,re as ModalContainer,se as PresenceMouse};
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
