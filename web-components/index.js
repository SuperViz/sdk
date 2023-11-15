var Er=Object.defineProperty,Xo=Object.defineProperties,ta=Object.getOwnPropertyDescriptor,ea=Object.getOwnPropertyDescriptors;var us=Object.getOwnPropertySymbols;var wr=Object.prototype.hasOwnProperty,Sr=Object.prototype.propertyIsEnumerable;var Tr=Math.pow,xr=(n,t,e)=>t in n?Er(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,v=(n,t)=>{for(var e in t||(t={}))wr.call(t,e)&&xr(n,e,t[e]);if(us)for(var e of us(t))Sr.call(t,e)&&xr(n,e,t[e]);return n},P=(n,t)=>Xo(n,ea(t));var Js=(n,t)=>{var e={};for(var s in n)wr.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&us)for(var s of us(n))t.indexOf(s)<0&&Sr.call(n,s)&&(e[s]=n[s]);return e};var S=(n,t,e,s)=>{for(var r=s>1?void 0:s?ta(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&Er(t,e,r),r};var vt=(n,t,e)=>new Promise((s,r)=>{var o=l=>{try{a(e.next(l))}catch(c){r(c)}},i=l=>{try{a(e.throw(l))}catch(c){r(c)}},a=l=>l.done?s(l.value):Promise.resolve(l.value).then(o,i);a((e=e.apply(n,t)).next())});var ds=globalThis,hs=ds.ShadowRoot&&(ds.ShadyCSS===void 0||ds.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_r=Symbol(),$r=new WeakMap,ms=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==_r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(hs&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=$r.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&$r.set(e,t))}return t}toString(){return this.cssText}},Ar=n=>new ms(typeof n=="string"?n:n+"",void 0,_r);var Ks=(n,t)=>{if(hs)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=ds.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,n.appendChild(s)}},ps=hs?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Ar(e)})(n):n;var{is:sa,defineProperty:na,getOwnPropertyDescriptor:ra,getOwnPropertyNames:ia,getOwnPropertySymbols:oa,getPrototypeOf:aa}=Object,ct=globalThis,Cr=ct.trustedTypes,la=Cr?Cr.emptyScript:"",Qs=ct.reactiveElementPolyfillSupport,Te=(n,t)=>n,fs={toAttribute(n,t){switch(t){case Boolean:n=n?la:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},Xs=(n,t)=>!sa(n,t),Or={attribute:!0,type:String,converter:fs,reflect:!1,hasChanged:Xs},Mr,kr;(Mr=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(kr=ct.litPropertyMetadata)!=null||(ct.litPropertyMetadata=new WeakMap);var bt=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Or){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&na(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){var i;let{get:r,set:o}=(i=ra(this.prototype,t))!=null?i:{get(){return this[e]},set(a){this[e]=a}};return{get(){return r==null?void 0:r.call(this)},set(a){let l=r==null?void 0:r.call(this);o.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:Or}static _$Ei(){if(this.hasOwnProperty(Te("elementProperties")))return;let t=aa(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Te("properties"))){let e=this.properties,s=[...ia(e),...oa(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(ps(r))}else t!==void 0&&e.push(ps(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!=null?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$ES)==null||e.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return Ks(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var o;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:fs).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){var o;let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((o=i.converter)==null?void 0:o.fromAttribute)!==void 0?i.converter:fs;this._$Em=r,this[r]=a.fromAttribute(e,i.type),this._$Em=null}}requestUpdate(t,e,s,r=!1,o){var i;if(t!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(t)),!((i=s.hasChanged)!=null?i:Xs)(r?o:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){var r;this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&((r=this._$Ej)!=null?r:this._$Ej=new Set).add(t)}_$EP(){return vt(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r)i.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],i)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$ES)==null||s.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(e)):this._$ET()}catch(r){throw t=!1,this._$ET(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}},Ir;bt.elementStyles=[],bt.shadowRootOptions={mode:"open"},bt[Te("elementProperties")]=new Map,bt[Te("finalized")]=new Map,Qs==null||Qs({ReactiveElement:bt}),((Ir=ct.reactiveElementVersions)!=null?Ir:ct.reactiveElementVersions=[]).push("2.0.0");var _e=globalThis,ys=_e.trustedTypes,Dr=ys?ys.createPolicy("lit-html",{createHTML:n=>n}):void 0,sn="$lit$",et=`lit$${(Math.random()+"").slice(9)}$`,nn="?"+et,ca=`<${nn}>`,wt=document,gs=()=>wt.createComment(""),Ae=n=>n===null||typeof n!="object"&&typeof n!="function",Ur=Array.isArray,Pr=n=>Ur(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",tn=`[ 	
\f\r]`,$e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nr=/-->/g,Lr=/>/g,xt=RegExp(`>|${tn}(?:([^\\s"'>=/]+)(${tn}*=${tn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fr=/'/g,zr=/"/g,Vr=/^(?:script|style|textarea|title)$/i,Wr=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),yc=Wr(1),gc=Wr(2),st=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Hr=new WeakMap,Et=wt.createTreeWalker(wt,129);function Br(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dr!==void 0?Dr.createHTML(t):t}var Zr=(n,t)=>{let e=n.length-1,s=[],r,o=t===2?"<svg>":"",i=$e;for(let a=0;a<e;a++){let l=n[a],c,u,d=-1,y=0;for(;y<l.length&&(i.lastIndex=y,u=i.exec(l),u!==null);)y=i.lastIndex,i===$e?u[1]==="!--"?i=Nr:u[1]!==void 0?i=Lr:u[2]!==void 0?(Vr.test(u[2])&&(r=RegExp("</"+u[2],"g")),i=xt):u[3]!==void 0&&(i=xt):i===xt?u[0]===">"?(i=r!=null?r:$e,d=-1):u[1]===void 0?d=-2:(d=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?xt:u[3]==='"'?zr:Fr):i===zr||i===Fr?i=xt:i===Nr||i===Lr?i=$e:(i=xt,r=void 0);let h=i===xt&&n[a+1].startsWith("/>")?" ":"";o+=i===$e?l+ca:d>=0?(s.push(c),l.slice(0,d)+sn+l.slice(d)+et+h):l+et+(d===-2?a:h)}return[Br(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),s]},St=class{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,i=0,a=t.length-1,l=this.parts,[c,u]=Zr(t,e);if(this.el=St.createElement(c,s),Et.currentNode=this.el.content,e===2){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=Et.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let d of r.getAttributeNames())if(d.endsWith(sn)){let y=u[i++],h=r.getAttribute(d).split(et),g=/([.?@])?(.*)/.exec(y);l.push({type:1,index:o,name:g[2],strings:h,ctor:g[1]==="."?bs:g[1]==="?"?xs:g[1]==="@"?Es:_t}),r.removeAttribute(d)}else d.startsWith(et)&&(l.push({type:6,index:o}),r.removeAttribute(d));if(Vr.test(r.tagName)){let d=r.textContent.split(et),y=d.length-1;if(y>0){r.textContent=ys?ys.emptyScript:"";for(let h=0;h<y;h++)r.append(d[h],gs()),Et.nextNode(),l.push({type:2,index:++o});r.append(d[y],gs())}}}else if(r.nodeType===8)if(r.data===nn)l.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(et,d+1))!==-1;)l.push({type:7,index:o}),d+=et.length-1}o++}}static createElement(t,e){let s=wt.createElement("template");return s.innerHTML=t,s}};function Tt(n,t,e=n,s){var i,a,l;if(t===st)return t;let r=s!==void 0?(i=e._$Co)==null?void 0:i[s]:e._$Cl,o=Ae(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(n),r._$AT(n,e,s)),s!==void 0?((l=e._$Co)!=null?l:e._$Co=[])[s]=r:e._$Cl=r),r!==void 0&&(t=Tt(n,r._$AS(n,t.values),r,s)),t}var vs=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;let{el:{content:e},parts:s}=this._$AD,r=((c=t==null?void 0:t.creationScope)!=null?c:wt).importNode(e,!0);Et.currentNode=r;let o=Et.nextNode(),i=0,a=0,l=s[0];for(;l!==void 0;){if(i===l.index){let u;l.type===2?u=new $t(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new ws(o,this,t)),this._$AV.push(u),l=s[++a]}i!==(l==null?void 0:l.index)&&(o=Et.nextNode(),i++)}return Et.currentNode=wt,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},$t=class{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,r){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(o=r==null?void 0:r.isConnected)!=null?o:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Tt(this,t,e),Ae(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==st&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Pr(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&Ae(this._$AH)?this._$AA.nextSibling.data=t:this.$(wt.createTextNode(t)),this._$AH=t}g(t){var o;let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=St.createElement(Br(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(e);else{let i=new vs(r,this),a=i.u(this.options);i.p(e),this.$(a),this._$AH=i}}_$AC(t){let e=Hr.get(t.strings);return e===void 0&&Hr.set(t.strings,e=new St(t)),e}T(t){Ur(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let o of t)r===e.length?e.push(s=new $t(this.k(gs()),this.k(gs()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},_t=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=z}_$AI(t,e=this,s,r){let o=this.strings,i=!1;if(o===void 0)t=Tt(this,t,e,0),i=!Ae(t)||t!==this._$AH&&t!==st,i&&(this._$AH=t);else{let a=t,l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Tt(this,a[s+l],e,l),c===st&&(c=this._$AH[l]),i||(i=!Ae(c)||c!==this._$AH[l]),c===z?t=z:t!==z&&(t+=(c!=null?c:"")+o[l+1]),this._$AH[l]=c}i&&!r&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},bs=class extends _t{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}},xs=class extends _t{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}},Es=class extends _t{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=Tt(this,t,e,0))!=null?i:z)===st)return;let s=this._$AH,r=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==z&&(s===z||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},ws=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Tt(this,t)}},jr={S:sn,A:et,P:nn,C:1,M:Zr,L:vs,R:Pr,V:Tt,D:$t,I:_t,H:xs,N:Es,U:bs,B:ws},en=_e.litHtmlPolyfillSupport,Rr;en==null||en(St,$t),((Rr=_e.litHtmlVersions)!=null?Rr:_e.litHtmlVersions=[]).push("3.0.0");var Ss=globalThis,Ts=Ss.ShadowRoot&&(Ss.ShadyCSS===void 0||Ss.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rn=Symbol(),qr=new WeakMap,Ce=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==rn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ts&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=qr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&qr.set(e,t))}return t}toString(){return this.cssText}},Gr=n=>new Ce(typeof n=="string"?n:n+"",void 0,rn),x=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,r,o)=>s+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[o+1],n[0]);return new Ce(e,n,rn)},on=(n,t)=>{if(Ts)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=Ss.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,n.appendChild(s)}},$s=Ts?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Gr(e)})(n):n;var{is:ua,defineProperty:da,getOwnPropertyDescriptor:ma,getOwnPropertyNames:ha,getOwnPropertySymbols:pa,getPrototypeOf:fa}=Object,ut=globalThis,Yr=ut.trustedTypes,ya=Yr?Yr.emptyScript:"",an=ut.reactiveElementPolyfillSupport,Oe=(n,t)=>n,ln={toAttribute(n,t){switch(t){case Boolean:n=n?ya:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},ti=(n,t)=>!ua(n,t),Jr={attribute:!0,type:String,converter:ln,reflect:!1,hasChanged:ti},Kr,Qr;(Kr=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Qr=ut.litPropertyMetadata)!=null||(ut.litPropertyMetadata=new WeakMap);var nt=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Jr){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&da(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){var i;let{get:r,set:o}=(i=ma(this.prototype,t))!=null?i:{get(){return this[e]},set(a){this[e]=a}};return{get(){return r==null?void 0:r.call(this)},set(a){let l=r==null?void 0:r.call(this);o.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:Jr}static _$Ei(){if(this.hasOwnProperty(Oe("elementProperties")))return;let t=fa(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Oe("properties"))){let e=this.properties,s=[...ha(e),...pa(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift($s(r))}else t!==void 0&&e.push($s(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!=null?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$ES)==null||e.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return on(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var o;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:ln).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){var o;let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((o=i.converter)==null?void 0:o.fromAttribute)!==void 0?i.converter:ln;this._$Em=r,this[r]=a.fromAttribute(e,i.type),this._$Em=null}}requestUpdate(t,e,s,r=!1,o){var i;if(t!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(t)),!((i=s.hasChanged)!=null?i:ti)(r?o:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){var r;this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&((r=this._$Ej)!=null?r:this._$Ej=new Set).add(t)}_$EP(){return vt(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r)i.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],i)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$ES)==null||s.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(e)):this._$ET()}catch(r){throw t=!1,this._$ET(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}},Xr;nt.elementStyles=[],nt.shadowRootOptions={mode:"open"},nt[Oe("elementProperties")]=new Map,nt[Oe("finalized")]=new Map,an==null||an({ReactiveElement:nt}),((Xr=ut.reactiveElementVersions)!=null?Xr:ut.reactiveElementVersions=[]).push("2.0.0");var ke=globalThis,_s=ke.trustedTypes,ei=_s?_s.createPolicy("lit-html",{createHTML:n=>n}):void 0,li="$lit$",dt=`lit$${(Math.random()+"").slice(9)}$`,ci="?"+dt,ga=`<${ci}>`,Ot=document,Ie=()=>Ot.createComment(""),De=n=>n===null||typeof n!="object"&&typeof n!="function",ui=Array.isArray,va=n=>ui(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",cn=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,si=/-->/g,ni=/>/g,At=RegExp(`>|${cn}(?:([^\\s"'>=/]+)(${cn}*=${cn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ri=/'/g,ii=/"/g,di=/^(?:script|style|textarea|title)$/i,mi=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),f=mi(1),Sc=mi(2),Mt=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),oi=new WeakMap,Ct=Ot.createTreeWalker(Ot,129);function hi(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ei!==void 0?ei.createHTML(t):t}var ba=(n,t)=>{let e=n.length-1,s=[],r,o=t===2?"<svg>":"",i=Me;for(let a=0;a<e;a++){let l=n[a],c,u,d=-1,y=0;for(;y<l.length&&(i.lastIndex=y,u=i.exec(l),u!==null);)y=i.lastIndex,i===Me?u[1]==="!--"?i=si:u[1]!==void 0?i=ni:u[2]!==void 0?(di.test(u[2])&&(r=RegExp("</"+u[2],"g")),i=At):u[3]!==void 0&&(i=At):i===At?u[0]===">"?(i=r!=null?r:Me,d=-1):u[1]===void 0?d=-2:(d=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?At:u[3]==='"'?ii:ri):i===ii||i===ri?i=At:i===si||i===ni?i=Me:(i=At,r=void 0);let h=i===At&&n[a+1].startsWith("/>")?" ":"";o+=i===Me?l+ga:d>=0?(s.push(c),l.slice(0,d)+li+l.slice(d)+dt+h):l+dt+(d===-2?a:h)}return[hi(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),s]},kt=class{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,i=0,a=t.length-1,l=this.parts,[c,u]=ba(t,e);if(this.el=kt.createElement(c,s),Ct.currentNode=this.el.content,e===2){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=Ct.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let d of r.getAttributeNames())if(d.endsWith(li)){let y=u[i++],h=r.getAttribute(d).split(dt),g=/([.?@])?(.*)/.exec(y);l.push({type:1,index:o,name:g[2],strings:h,ctor:g[1]==="."?mn:g[1]==="?"?hn:g[1]==="@"?pn:se}),r.removeAttribute(d)}else d.startsWith(dt)&&(l.push({type:6,index:o}),r.removeAttribute(d));if(di.test(r.tagName)){let d=r.textContent.split(dt),y=d.length-1;if(y>0){r.textContent=_s?_s.emptyScript:"";for(let h=0;h<y;h++)r.append(d[h],Ie()),Ct.nextNode(),l.push({type:2,index:++o});r.append(d[y],Ie())}}}else if(r.nodeType===8)if(r.data===ci)l.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(dt,d+1))!==-1;)l.push({type:7,index:o}),d+=dt.length-1}o++}}static createElement(t,e){let s=Ot.createElement("template");return s.innerHTML=t,s}};function ee(n,t,e=n,s){var i,a,l;if(t===Mt)return t;let r=s!==void 0?(i=e._$Co)==null?void 0:i[s]:e._$Cl,o=De(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(n),r._$AT(n,e,s)),s!==void 0?((l=e._$Co)!=null?l:e._$Co=[])[s]=r:e._$Cl=r),r!==void 0&&(t=ee(n,r._$AS(n,t.values),r,s)),t}var dn=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;let{el:{content:e},parts:s}=this._$AD,r=((c=t==null?void 0:t.creationScope)!=null?c:Ot).importNode(e,!0);Ct.currentNode=r;let o=Ct.nextNode(),i=0,a=0,l=s[0];for(;l!==void 0;){if(i===l.index){let u;l.type===2?u=new It(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new fn(o,this,t)),this._$AV.push(u),l=s[++a]}i!==(l==null?void 0:l.index)&&(o=Ct.nextNode(),i++)}return Ct.currentNode=Ot,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},It=class{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,r){var o;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(o=r==null?void 0:r.isConnected)!=null?o:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ee(this,t,e),De(t)?t===H||t==null||t===""?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==Mt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):va(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==H&&De(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ot.createTextNode(t)),this._$AH=t}g(t){var o;let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=kt.createElement(hi(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(e);else{let i=new dn(r,this),a=i.u(this.options);i.p(e),this.$(a),this._$AH=i}}_$AC(t){let e=oi.get(t.strings);return e===void 0&&oi.set(t.strings,e=new kt(t)),e}T(t){ui(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let o of t)r===e.length?e.push(s=new It(this.k(Ie()),this.k(Ie()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},se=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=H}_$AI(t,e=this,s,r){let o=this.strings,i=!1;if(o===void 0)t=ee(this,t,e,0),i=!De(t)||t!==this._$AH&&t!==Mt,i&&(this._$AH=t);else{let a=t,l,c;for(t=o[0],l=0;l<o.length-1;l++)c=ee(this,a[s+l],e,l),c===Mt&&(c=this._$AH[l]),i||(i=!De(c)||c!==this._$AH[l]),c===H?t=H:t!==H&&(t+=(c!=null?c:"")+o[l+1]),this._$AH[l]=c}i&&!r&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},mn=class extends se{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}},hn=class extends se{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}},pn=class extends se{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=ee(this,t,e,0))!=null?i:H)===Mt)return;let s=this._$AH,r=t===H&&s!==H||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==H&&(s===H||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},fn=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){ee(this,t)}};var un=ke.litHtmlPolyfillSupport,ai;un==null||un(kt,It),((ai=ke.litHtmlVersions)!=null?ai:ke.litHtmlVersions=[]).push("3.0.0");var pi=(n,t,e)=>{var o,i;let s=(o=e==null?void 0:e.renderBefore)!=null?o:t,r=s._$litPart$;if(r===void 0){let a=(i=e==null?void 0:e.renderBefore)!=null?i:null;s._$litPart$=r=new It(t.insertBefore(Ie(),a),a,void 0,e!=null?e:{})}return r._$AI(n),r};var E=class extends nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,s;let t=super.createRenderRoot();return(s=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=pi(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Mt}},fi;E._$litElement$=!0,E["finalized"]=!0,(fi=globalThis.litElementHydrateSupport)==null||fi.call(globalThis,{LitElement:E});var yn=globalThis.litElementPolyfillSupport;yn==null||yn({LitElement:E});var yi;((yi=globalThis.litElementVersions)!=null?yi:globalThis.litElementVersions=[]).push("4.0.0");var T=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var Dt=class extends E{render(){return f` <div>Hello from SuperViz, ${this.name}</div> `}};Dt.properties={name:{type:String}},Dt.styles=x`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `,Dt=S([T("superviz-hello-world")],Dt);var gn=x`
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
`;var vn=x`
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
`;var bn=x`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;var xn=x`
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
`;var _=n=>{var e;class t extends n{connectedCallback(){setTimeout(()=>{var i;let r=document.getElementById("superviz-style"),o=document.createElement("style");o.innerHTML=(r==null?void 0:r.innerHTML)||"",(i=this.shadowRoot)==null||i.appendChild(o)}),super.connectedCallback()}emitEvent(r,o,i={composed:!0,bubbles:!0}){let a=new CustomEvent(r,v({detail:o},i));this.dispatchEvent(a)}}return t.styles=[gn,vn,bn,xn,(e=n.styles)!=null?e:[]],t};var gi=_(E),xa=[gi.styles],Nt=class extends gi{constructor(){super();this.name="",this.size="md"}render(){return f` <i class="sv-icon sv-icon-${this.name}_${this.size}"></i> `}};Nt.properties={name:{type:String},size:{type:String}},Nt.styles=[xa,x`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `],Nt=S([T("superviz-icon")],Nt);var Cs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Os=n=>(...t)=>({_$litDirective$:n,values:t}),ne=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var k=Os(class extends ne{constructor(n){var t;if(super(n),n.type!==Cs.ATTRIBUTE||n.name!=="class"||((t=n.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var s,r;if(this.it===void 0){this.it=new Set,n.strings!==void 0&&(this.st=new Set(n.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in t)t[o]&&!((s=this.st)!=null&&s.has(o))&&this.it.add(o);return this.render(t)}let e=n.element.classList;for(let o of this.it)o in t||(e.remove(o),this.it.delete(o));for(let o in t){let i=!!t[o];i===this.it.has(o)||((r=this.st)==null?void 0:r.has(o))||(i?(e.add(o),this.it.add(o)):(e.remove(o),this.it.delete(o)))}return st}});var vi=x`
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
    top: 7px;
  }

  .who-is-online-dropdown {
    top: 4px;
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
`;var bi=_(E),Ea=[bi.styles,vi],Lt=class extends bi{constructor(){super(...arguments);this.onClickOutDropdown=e=>{if(e.stopPropagation(),!this.open)return;let s=e.composedPath(),r=this.shadowRoot.querySelector(".dropdown-content"),o=this.shadowRoot.querySelector(".dropdown-list"),a=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],l=s.includes(r),c=s.includes(o),u=s.includes(a);l||c||u||(this.open=!1)};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.callbackSelected=e=>{this.open=!1;let s=this.returnTo?e[this.returnTo]:e;this.emitEvent("selected",s,{bubbles:!1,composed:!1})}}updated(e){if(!!e.has("open")){if(this.open){document.addEventListener("click",this.onClickOutDropdown);return}document.removeEventListener("click",this.onClickOutDropdown),this.close()}}render(){var a;let e={menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right","who-is-online-dropdown":this.name},s=()=>this.name?f` <div class="header">
        <span class="text">${this.name}</span>
        <span class="sv-hr"></span>
      </div>`:f``,r=(a=this.icons)==null?void 0:a.map(l=>f`<superviz-icon name="${l}" size="sm"></superviz-icon>`),o=this.options.map((l,c)=>{let u={text:!0,"text-bold":!0,active:this.active===(l==null?void 0:l[this.returnTo])};return f`<li @click=${()=>this.callbackSelected(l)} class=${k(u)}>
        ${r==null?void 0:r.at(c)} ${l[this.label]}
      </li>`}),i=()=>{this.open=!this.open};return f`
      <div class="dropdown">
        <div class="dropdown-content" @click=${()=>i()}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${k(e)}>
          ${s()}
          <ul class="items">
            ${o}
          </ul>
        </div>
      </div>
    `}};Lt.styles=Ea,Lt.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},position:{type:String},options:{type:Array},label:{type:String},returnTo:{type:String},active:{type:[String,Object]},icons:{type:Array},name:{type:String}},Lt=S([T("superviz-dropdown")],Lt);var xi=x`
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
`;var re=class extends E{constructor(){super();this.updatePresenceMouseParticipant=e=>{if(!this.shadowRoot.getElementById(`mouse-${e.id}`)){let a=this.shadowRoot.getElementById("mouse-sync"),l=document.createElement("div");l.setAttribute("id",`mouse-${e.id}`),l.setAttribute("class","mouse-follower");let c=document.createElement("div");c.setAttribute("class","pointer-mouse");let u=document.createElement("div");u.setAttribute("class","mouse-user-name"),u.innerHTML=e.name,l.appendChild(c),l.appendChild(u),a&&a.appendChild(l)}let r=this.shadowRoot.getElementById(`mouse-${e.id}`);if(!r)return;let o=this.shadowRoot.getElementById(`mouse-${e.id}`),i=this.shadowRoot.getElementById(`mouse-${e.id}`);if(o&&i){let a=o.getElementsByClassName("mouse-user-name")[0],l=i.getElementsByClassName("pointer-mouse")[0];l&&(l.style.backgroundImage=`url(https://production.cdn.superviz.com/static/pointers/${e.slotIndex}.svg)`),a&&(a.style.color=this.textColorValues.includes(e.slotIndex)?"#FFFFFF":"#000000",a.style.backgroundColor=e.color,a.innerHTML=e.name);let{containerId:c}=e,u=document.getElementById(c),d=e.mousePositionX,y=e.mousePositionY;if(c){let h=(u==null?void 0:u.clientWidth)||1,g=(u==null?void 0:u.clientHeight)||1;d=e.mousePositionX/e.originalWidth*h,y=e.mousePositionY/e.originalHeight*g}r.style.left=`${d}px`,r.style.top=`${y}px`}};this.textColorValues=[2,4,5,7,8,16]}removePresenceMouseParticipant(e){let s=this.shadowRoot.getElementById(`mouse-${e}`);s&&s.remove()}render(){return f`
      <div id="mouse-container" class="mouse-board">
        <div id="mouse-sync"></div>
      </div>
    `}};re.styles=[xi],re=S([T("superviz-presence-mouse")],re);var Ms=x`  
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
`;var Ei=_(E),wa=[Ei.styles,Ms],ie=class extends Ei{constructor(){super(...arguments);this.getContainer=()=>window.document.querySelector("superviz-modal-container");this.createContainer=e=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(e)};this.createModal=({detail:e})=>{this.createContainer(e),window.document.body.appendChild(this.modal)};this.destroyModal=()=>{var e;this.modal=void 0,(e=this.getContainer())==null||e.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};ie.styles=wa,ie=S([T("superviz-modal")],ie);var wi=_(E),Sa=[wi.styles,Ms],oe=class extends wi{constructor(){super(...arguments);this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))};this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(e){this.options=e}render(){let e=()=>f`
        <div class="modal--header">
          <span class="text text-bold sv-gray-600">${this.options.title}</span>
          <div class="close" @click=${this.closeModal}>
            <superviz-icon name="close" size="md"></superviz-icon>
          </div>
        </div>
      `,s=()=>f`
        <div class="modal--body">
          <div class="modal--body-content">
            ${this.options.body}
          </div>
        </div>
      `,r=()=>{if(this.options.footer)return f`
          <div class="modal--footer">
            ${this.options.footer}
          </div>
        `;let o=this.options.confirmLabel||"OK",i=this.options.cancelLabel||"Cancel";return this.options.confirm&&this.options.cancel?f`
          <div class="modal--footer">
            <button class="text text-bold btn btn--cancel" @click=${this.closeModal}>${i}</button>
            <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${o}</button>
          </div>
        `:f`
        <div class="modal--footer">
          <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${o}</button>
        </div>
      `};return f`
      <div class="modal--overlay"></div>
      <div class="modal--container">
        <div class="modal">
          ${e()}

          ${s()}

          ${r()}
        </div>
      </div>
    `}};oe.styles=Sa,oe=S([T("superviz-modal-container")],oe);var En=x`
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
`;var wn=x`
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
`;var Sn=x`
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
`;var Tn=x`
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
`;var $n=x`
  .comments {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 288px;
  }

  .hidden {
    display: none;
  }
`;var _n=x`
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
`;var An=x`
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
`;var Cn=x`
  .annotation-resolved {
    background: rgba(var(--sv-gray-200), 0.5);
    height: 26px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(var(--sv-gray-200));
  }
`;var On=x`
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
`;var Mn=x`
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
`;var kn=x`
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
`;var In=x`
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
`;var Dn;function Nn(n){let t=n.querySelector("#superviz-comments");if(t&&!Dn){let e={childList:!0,attributes:!0,characterData:!0,subtree:!0};Dn=new MutationObserver(s=>{s.forEach(r=>{!r.removedNodes.length||r.removedNodes.forEach(o=>{o.id==="poweredby-footer"&&Ta(n)})})}),Dn.observe(t,e)}}function Ta(n){let t=document.createElement("div");t.id="poweredby-footer",t.className="footer";let e=document.createElement("div");e.className="powered-by powered-by--horizontal";let s=document.createElement("a");s.href="https://superviz.com/",s.target="_blank",s.className="link";let r=document.createElement("div");r.textContent="Powered by";let o=document.createElement("img");o.width=48,o.height=8.86,o.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",e.appendChild(s),s.appendChild(r),r.appendChild(o),t.appendChild(e);let i=n.getElementById("superviz-comments");i&&i.appendChild(t),Nn(n)}var Si=_(E),$a=[Si.styles,En,In],Ft=class extends Si{constructor(){super();this.annotations=[],this.annotationFilter="all",this.waterMarkState=!1}updateAnnotations(e){this.annotations=e}toggle(){this.emitEvent("toggle",{})}waterMarkStatus(e){this.waterMarkState=e}setFilter({detail:e}){let{filter:s}=e;this.annotationFilter=s}updated(e){super.updated(e),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".superviz-comments");!s||(this.waterMarkState&&Nn(this.shadowRoot),s.setAttribute("style",this.side))})}render(){let e=[this.open?"container":"container-close","superviz-comments"].join(" "),s=f` <div id="poweredby-footer" class="footer">
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
    </div>`,r=this.waterMarkState?s:"";return f`
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
    `}};Ft.styles=$a,Ft.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String}},Ft=S([T("superviz-comments")],Ft);var _a=_(E),Aa=[_a.styles,wn],zt=class extends _(E){constructor(){super();this.side="left"}close(){this.dispatchEvent(new CustomEvent("close"))}render(){return this.side==="left"?f`
        <div class="topbar">
          <span @click=${this.close} class="toggle-icon">
            <superviz-icon name="left" size="lg"></superviz-icon>
          </span>
          <span class="text text-bold">COMMENTS</span>
        </div>
      `:f`
      <div class="topbar">
        <span class="text text-bold">COMMENTS</span>
        <span @click=${this.close} class="toggle-icon">
          <superviz-icon name="right" size="lg"></superviz-icon>
        </span>
      </div>
    `}};zt.styles=Aa,zt.properties={side:{type:String}},zt=S([T("superviz-comments-topbar")],zt);var Ti=_(E),Ca=[Ti.styles,Sn],Ht=class extends Ti{constructor(){super(...arguments);this.prepareToCreateAnnotation=s=>vt(this,[s],function*({detail:e}){this.annotation=e,yield this.updateComplete,this.emitEvent("comment-input-focus",e)});this.cancelTemporaryAnnotation=()=>{this.annotation=null};this.cancelTemporaryAnnotationEsc=e=>{(e==null?void 0:e.key)==="Escape"&&(this.annotation=null)}}createComment({detail:e}){this.emitEvent("create-annotation",e),this.annotation=null}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.addEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.addEventListener("keyup",e=>{e.key==="Escape"&&this.cancelTemporaryAnnotationEsc(e)})}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.removeEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.removeEventListener("keyup",e=>{e.key==="Escape"&&this.cancelTemporaryAnnotationEsc(e)})}render(){let e={"annotations--comments-input":!0,hidden:!this.annotation};return f`
      <div class="annotations">
        <span class="text text-big text-bold annotations--add-comment-btn">
          Click anywhere to add a comment
        </span>
        <div class=${k(e)}>
          <superviz-comments-comment-input
            @create-annotation=${this.createComment}
            eventType="create-annotation"
          >
          </superviz-comments-comment-input>
        </div>
      </div>
    `}};Ht.styles=Ca,Ht.properties={annotation:{type:Object}},Ht=S([T("superviz-comments-annotations")],Ht);var{D:Oa}=jr;var $i=()=>document.createComment(""),ae=(n,t,e)=>{var o;let s=n._$AA.parentNode,r=t===void 0?n._$AB:t._$AA;if(e===void 0){let i=s.insertBefore($i(),r),a=s.insertBefore($i(),r);e=new Oa(i,a,n,n.options)}else{let i=e._$AB.nextSibling,a=e._$AM,l=a!==n;if(l){let c;(o=e._$AQ)==null||o.call(e,n),e._$AM=n,e._$AP!==void 0&&(c=n._$AU)!==a._$AU&&e._$AP(c)}if(i!==r||l){let c=e._$AA;for(;c!==i;){let u=c.nextSibling;s.insertBefore(c,r),c=u}}}return e},mt=(n,t,e=n)=>(n._$AI(t,e),n),Ma={},_i=(n,t=Ma)=>n._$AH=t,Ai=n=>n._$AH,Is=n=>{var s;(s=n._$AP)==null||s.call(n,!1,!0);let t=n._$AA,e=n._$AB.nextSibling;for(;t!==e;){let r=t.nextSibling;t.remove(),t=r}};var Ci=(n,t,e)=>{let s=new Map;for(let r=t;r<=e;r++)s.set(n[r],r);return s},Oi=Os(class extends ne{constructor(n){if(super(n),n.type!==Cs.CHILD)throw Error("repeat() can only be used in text expressions")}ht(n,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);let r=[],o=[],i=0;for(let a of n)r[i]=s?s(a,i):i,o[i]=e(a,i),i++;return{values:o,keys:r}}render(n,t,e){return this.ht(n,t,e).values}update(n,[t,e,s]){var K;let r=Ai(n),{values:o,keys:i}=this.ht(t,e,s);if(!Array.isArray(r))return this.dt=i,o;let a=(K=this.dt)!=null?K:this.dt=[],l=[],c,u,d=0,y=r.length-1,h=0,g=o.length-1;for(;d<=y&&h<=g;)if(r[d]===null)d++;else if(r[y]===null)y--;else if(a[d]===i[h])l[h]=mt(r[d],o[h]),d++,h++;else if(a[y]===i[g])l[g]=mt(r[y],o[g]),y--,g--;else if(a[d]===i[g])l[g]=mt(r[d],o[g]),ae(n,l[g+1],r[d]),d++,g--;else if(a[y]===i[h])l[h]=mt(r[y],o[h]),ae(n,r[d],r[y]),y--,h++;else if(c===void 0&&(c=Ci(i,h,g),u=Ci(a,d,y)),c.has(a[d]))if(c.has(a[y])){let L=u.get(i[h]),lt=L!==void 0?r[L]:null;if(lt===null){let cs=ae(n,r[d]);mt(cs,o[h]),l[h]=cs}else l[h]=mt(lt,o[h]),ae(n,r[d],lt),r[L]=null;h++}else Is(r[y]),y--;else Is(r[d]),d++;for(;h<=g;){let L=ae(n,l[g+1]);mt(L,o[h]),l[h++]=L}for(;d<=y;){let L=r[d++];L!==null&&Is(L)}return this.dt=i,_i(n,l),st}});var Mi=_(E),ka=[Mi.styles,$n],Rt=class extends Mi{constructor(){super();this.unselectAnnotation=()=>{this.selectedAnnotation=null};this.unselectAnnotationEsc=e=>{e&&(e==null?void 0:e.key)!=="Escape"||(this.selectedAnnotation=null)};this.selectAnnotation=({detail:e})=>{let{uuid:s}=e;if(this.selectedAnnotation===s){this.selectedAnnotation=null;return}this.selectedAnnotation=s};this.checkLastAnnotation=e=>{var o,i;let s=this.annotations.filter(a=>a.resolved),r=this.annotations.filter(a=>!a.resolved);return this.annotationFilter==="all"?e===((o=s[s.length-1])==null?void 0:o.uuid):e===((i=r[r.length-1])==null?void 0:i.uuid)};this.annotations=[]}updated(e){super.updated(e),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(`[uuid='${this.selectedAnnotation}']`);if(!s)return;let r=this.lastCommentId===this.selectedAnnotation,o=r?0:-150,i=s.getClientRects()[0];!i||(this.scrollBy(0,i.y+o),r&&setTimeout(()=>{this.scrollBy(0,i.y+o)},200))})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("select-annotation",this.selectAnnotation),window.document.body.addEventListener("keyup",this.unselectAnnotationEsc),window.document.body.addEventListener("unselect-annotation",this.unselectAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("select-annotation",this.selectAnnotation),window.document.body.removeEventListener("keyup",this.unselectAnnotationEsc),window.document.body.removeEventListener("unselect-annotation",this.unselectAnnotation)}render(){return f` ${Oi(this.annotations.filter(e=>e.comments.length),e=>e.uuid,e=>f`
        <superviz-comments-annotation-item
          annotation=${JSON.stringify(e)}
          selected="${this.selectedAnnotation}"
          annotationFilter=${this.annotationFilter}
          uuid=${e.uuid}
          isLastComment=${this.checkLastAnnotation(e.uuid)}
        >
        </superviz-comments-annotation-item>
      `)}`}};Rt.styles=ka,Rt.properties={annotations:{type:Object},selectedAnnotation:{type:String},annotationFilter:{type:String}},Rt=S([T("superviz-comments-content")],Rt);var rt=class extends Error{},Ds=class extends rt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}},Ns=class extends rt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}},Ls=class extends rt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}},it=class extends rt{},le=class extends rt{constructor(t){super(`Invalid unit ${t}`)}},R=class extends rt{},q=class extends rt{constructor(){super("Zone is an abstract class")}};var p="numeric",G="short",W="long",ht={year:p,month:p,day:p},Ne={year:p,month:G,day:p},Ln={year:p,month:G,day:p,weekday:G},Le={year:p,month:W,day:p},Fe={year:p,month:W,day:p,weekday:W},ze={hour:p,minute:p},He={hour:p,minute:p,second:p},Re={hour:p,minute:p,second:p,timeZoneName:G},Ue={hour:p,minute:p,second:p,timeZoneName:W},Pe={hour:p,minute:p,hourCycle:"h23"},Ve={hour:p,minute:p,second:p,hourCycle:"h23"},We={hour:p,minute:p,second:p,hourCycle:"h23",timeZoneName:G},Be={hour:p,minute:p,second:p,hourCycle:"h23",timeZoneName:W},Ze={year:p,month:p,day:p,hour:p,minute:p},je={year:p,month:p,day:p,hour:p,minute:p,second:p},qe={year:p,month:G,day:p,hour:p,minute:p},Ge={year:p,month:G,day:p,hour:p,minute:p,second:p},Fn={year:p,month:G,day:p,weekday:G,hour:p,minute:p},Ye={year:p,month:W,day:p,hour:p,minute:p,timeZoneName:G},Je={year:p,month:W,day:p,hour:p,minute:p,second:p,timeZoneName:G},Ke={year:p,month:W,day:p,weekday:W,hour:p,minute:p,timeZoneName:W},Qe={year:p,month:W,day:p,weekday:W,hour:p,minute:p,second:p,timeZoneName:W};var V=class{get type(){throw new q}get name(){throw new q}get ianaName(){return this.name}get isUniversal(){throw new q}offsetName(t,e){throw new q}formatOffset(t,e){throw new q}offset(t){throw new q}equals(t){throw new q}get isValid(){throw new q}};var zn=null,Q=class extends V{static get instance(){return zn===null&&(zn=new Q),zn}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:e,locale:s}){return zs(t,e,s)}formatOffset(t,e){return pt(this.offset(t),e)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}};var Rs={};function Ia(n){return Rs[n]||(Rs[n]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:n,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Rs[n]}var Da={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Na(n,t){let e=n.format(t).replace(/\u200E/g,""),s=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(e),[,r,o,i,a,l,c,u]=s;return[i,r,o,a,l,c,u]}function La(n,t){let e=n.formatToParts(t),s=[];for(let r=0;r<e.length;r++){let{type:o,value:i}=e[r],a=Da[o];o==="era"?s[a]=i:w(a)||(s[a]=parseInt(i,10))}return s}var Hs={},F=class extends V{static create(t){return Hs[t]||(Hs[t]=new F(t)),Hs[t]}static resetCache(){Hs={},Rs={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch(e){return!1}}constructor(t){super(),this.zoneName=t,this.valid=F.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:e,locale:s}){return zs(t,e,s,this.name)}formatOffset(t,e){return pt(this.offset(t),e)}offset(t){let e=new Date(t);if(isNaN(e))return NaN;let s=Ia(this.name),[r,o,i,a,l,c,u]=s.formatToParts?La(s,e):Na(s,e);a==="BC"&&(r=-Math.abs(r)+1);let y=ce({year:r,month:o,day:i,hour:l===24?0:l,minute:c,second:u,millisecond:0}),h=+e,g=h%1e3;return h-=g>=0?g:1e3+g,(y-h)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}};var ki={};function Fa(n,t={}){let e=JSON.stringify([n,t]),s=ki[e];return s||(s=new Intl.ListFormat(n,t),ki[e]=s),s}var Hn={};function Rn(n,t={}){let e=JSON.stringify([n,t]),s=Hn[e];return s||(s=new Intl.DateTimeFormat(n,t),Hn[e]=s),s}var Un={};function za(n,t={}){let e=JSON.stringify([n,t]),s=Un[e];return s||(s=new Intl.NumberFormat(n,t),Un[e]=s),s}var Pn={};function Ha(n,t={}){let i=t,{base:e}=i,s=Js(i,["base"]),r=JSON.stringify([n,s]),o=Pn[r];return o||(o=new Intl.RelativeTimeFormat(n,t),Pn[r]=o),o}var Xe=null;function Ra(){return Xe||(Xe=new Intl.DateTimeFormat().resolvedOptions().locale,Xe)}function Ua(n){let t=n.indexOf("-x-");t!==-1&&(n=n.substring(0,t));let e=n.indexOf("-u-");if(e===-1)return[n];{let s,r;try{s=Rn(n).resolvedOptions(),r=n}catch(a){let l=n.substring(0,e);s=Rn(l).resolvedOptions(),r=l}let{numberingSystem:o,calendar:i}=s;return[r,o,i]}}function Pa(n,t,e){return(e||t)&&(n.includes("-u-")||(n+="-u"),e&&(n+=`-ca-${e}`),t&&(n+=`-nu-${t}`)),n}function Va(n){let t=[];for(let e=1;e<=12;e++){let s=b.utc(2009,e,1);t.push(n(s))}return t}function Wa(n){let t=[];for(let e=1;e<=7;e++){let s=b.utc(2016,11,13+e);t.push(n(s))}return t}function Us(n,t,e,s){let r=n.listingMode();return r==="error"?null:r==="en"?e(t):s(t)}function Ba(n){return n.numberingSystem&&n.numberingSystem!=="latn"?!1:n.numberingSystem==="latn"||!n.locale||n.locale.startsWith("en")||new Intl.DateTimeFormat(n.intl).resolvedOptions().numberingSystem==="latn"}var Vn=class{constructor(t,e,s){this.padTo=s.padTo||0,this.floor=s.floor||!1;let a=s,{padTo:r,floor:o}=a,i=Js(a,["padTo","floor"]);if(!e||Object.keys(i).length>0){let l=v({useGrouping:!1},s);s.padTo>0&&(l.minimumIntegerDigits=s.padTo),this.inf=za(t,l)}}format(t){if(this.inf){let e=this.floor?Math.floor(t):t;return this.inf.format(e)}else{let e=this.floor?Math.floor(t):ue(t,3);return I(e,this.padTo)}}},Wn=class{constructor(t,e,s){this.opts=s,this.originalZone=void 0;let r;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){let i=-1*(t.offset/60),a=i>=0?`Etc/GMT+${i}`:`Etc/GMT${i}`;t.offset!==0&&F.create(a).valid?(r=a,this.dt=t):(r="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,r=t.zone.name):(r="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);let o=v({},this.opts);o.timeZone=o.timeZone||r,this.dtf=Rn(e,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(e=>{if(e.type==="timeZoneName"){let s=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return P(v({},e),{value:s})}else return e}):t}resolvedOptions(){return this.dtf.resolvedOptions()}},Bn=class{constructor(t,e,s){this.opts=v({style:"long"},s),!e&&Ps()&&(this.rtf=Ha(t,s))}format(t,e){return this.rtf?this.rtf.format(t,e):Ii(e,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,e){return this.rtf?this.rtf.formatToParts(t,e):[]}},A=class{static fromOpts(t){return A.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)}static create(t,e,s,r=!1){let o=t||O.defaultLocale,i=o||(r?"en-US":Ra()),a=e||O.defaultNumberingSystem,l=s||O.defaultOutputCalendar;return new A(i,a,l,o)}static resetCache(){Xe=null,Hn={},Un={},Pn={}}static fromObject({locale:t,numberingSystem:e,outputCalendar:s}={}){return A.create(t,e,s)}constructor(t,e,s,r){let[o,i,a]=Ua(t);this.locale=o,this.numberingSystem=e||i||null,this.outputCalendar=s||a||null,this.intl=Pa(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Ba(this)),this.fastNumbersCached}listingMode(){let t=this.isEnglish(),e=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&e?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:A.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone(P(v({},t),{defaultToEN:!0}))}redefaultToSystem(t={}){return this.clone(P(v({},t),{defaultToEN:!1}))}months(t,e=!1){return Us(this,t,Zn,()=>{let s=e?{month:t,day:"numeric"}:{month:t},r=e?"format":"standalone";return this.monthsCache[r][t]||(this.monthsCache[r][t]=Va(o=>this.extract(o,s,"month"))),this.monthsCache[r][t]})}weekdays(t,e=!1){return Us(this,t,jn,()=>{let s=e?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},r=e?"format":"standalone";return this.weekdaysCache[r][t]||(this.weekdaysCache[r][t]=Wa(o=>this.extract(o,s,"weekday"))),this.weekdaysCache[r][t]})}meridiems(){return Us(this,void 0,()=>qn,()=>{if(!this.meridiemCache){let t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[b.utc(2016,11,13,9),b.utc(2016,11,13,19)].map(e=>this.extract(e,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Us(this,t,Gn,()=>{let e={era:t};return this.eraCache[t]||(this.eraCache[t]=[b.utc(-40,1,1),b.utc(2017,1,1)].map(s=>this.extract(s,e,"era"))),this.eraCache[t]})}extract(t,e,s){let r=this.dtFormatter(t,e),o=r.formatToParts(),i=o.find(a=>a.type.toLowerCase()===s);return i?i.value:null}numberFormatter(t={}){return new Vn(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,e={}){return new Wn(t,this.intl,e)}relFormatter(t={}){return new Bn(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Fa(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}};var Jn=null,D=class extends V{static get utcInstance(){return Jn===null&&(Jn=new D(0)),Jn}static instance(t){return t===0?D.utcInstance:new D(t)}static parseSpecifier(t){if(t){let e=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(e)return new D(Ut(e[1],e[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${pt(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${pt(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,e){return pt(this.fixed,e)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}};var de=class extends V{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function Y(n,t){let e;if(w(n)||n===null)return t;if(n instanceof V)return n;if(Di(n)){let s=n.toLowerCase();return s==="default"?t:s==="local"||s==="system"?Q.instance:s==="utc"||s==="gmt"?D.utcInstance:D.parseSpecifier(s)||F.create(n)}else return X(n)?D.instance(n):typeof n=="object"&&"offset"in n&&typeof n.offset=="function"?n:new de(n)}var Ni=()=>Date.now(),Li="system",Fi=null,zi=null,Hi=null,Ri=60,Ui,O=class{static get now(){return Ni}static set now(t){Ni=t}static set defaultZone(t){Li=t}static get defaultZone(){return Y(Li,Q.instance)}static get defaultLocale(){return Fi}static set defaultLocale(t){Fi=t}static get defaultNumberingSystem(){return zi}static set defaultNumberingSystem(t){zi=t}static get defaultOutputCalendar(){return Hi}static set defaultOutputCalendar(t){Hi=t}static get twoDigitCutoffYear(){return Ri}static set twoDigitCutoffYear(t){Ri=t%100}static get throwOnInvalid(){return Ui}static set throwOnInvalid(t){Ui=t}static resetCaches(){A.resetCache(),F.resetCache()}};function w(n){return typeof n=="undefined"}function X(n){return typeof n=="number"}function ts(n){return typeof n=="number"&&n%1===0}function Di(n){return typeof n=="string"}function Pi(n){return Object.prototype.toString.call(n)==="[object Date]"}function Ps(){try{return typeof Intl!="undefined"&&!!Intl.RelativeTimeFormat}catch(n){return!1}}function Vi(n){return Array.isArray(n)?n:[n]}function Kn(n,t,e){if(n.length!==0)return n.reduce((s,r)=>{let o=[t(r),r];return s&&e(s[0],o[0])===s[0]?s:o},null)[1]}function Wi(n,t){return t.reduce((e,s)=>(e[s]=n[s],e),{})}function ft(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function tt(n,t,e){return ts(n)&&n>=t&&n<=e}function Za(n,t){return n-t*Math.floor(n/t)}function I(n,t=2){let e=n<0,s;return e?s="-"+(""+-n).padStart(t,"0"):s=(""+n).padStart(t,"0"),s}function ot(n){if(!(w(n)||n===null||n===""))return parseInt(n,10)}function yt(n){if(!(w(n)||n===null||n===""))return parseFloat(n)}function es(n){if(!(w(n)||n===null||n==="")){let t=parseFloat("0."+n)*1e3;return Math.floor(t)}}function ue(n,t,e=!1){let s=Tr(10,t);return(e?Math.trunc:Math.round)(n*s)/s}function Pt(n){return n%4===0&&(n%100!==0||n%400===0)}function Vt(n){return Pt(n)?366:365}function me(n,t){let e=Za(t-1,12)+1,s=n+(t-e)/12;return e===2?Pt(s)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][e-1]}function ce(n){let t=Date.UTC(n.year,n.month-1,n.day,n.hour,n.minute,n.second,n.millisecond);return n.year<100&&n.year>=0&&(t=new Date(t),t.setUTCFullYear(n.year,n.month-1,n.day)),+t}function he(n){let t=(n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400))%7,e=n-1,s=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7;return t===4||s===3?53:52}function ss(n){return n>99?n:n>O.twoDigitCutoffYear?1900+n:2e3+n}function zs(n,t,e,s=null){let r=new Date(n),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};s&&(o.timeZone=s);let i=v({timeZoneName:t},o),a=new Intl.DateTimeFormat(e,i).formatToParts(r).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function Ut(n,t){let e=parseInt(n,10);Number.isNaN(e)&&(e=0);let s=parseInt(t,10)||0,r=e<0||Object.is(e,-0)?-s:s;return e*60+r}function Qn(n){let t=Number(n);if(typeof n=="boolean"||n===""||Number.isNaN(t))throw new R(`Invalid unit value ${n}`);return t}function pe(n,t){let e={};for(let s in n)if(ft(n,s)){let r=n[s];if(r==null)continue;e[t(s)]=Qn(r)}return e}function pt(n,t){let e=Math.trunc(Math.abs(n/60)),s=Math.trunc(Math.abs(n%60)),r=n>=0?"+":"-";switch(t){case"short":return`${r}${I(e,2)}:${I(s,2)}`;case"narrow":return`${r}${e}${s>0?`:${s}`:""}`;case"techie":return`${r}${I(e,2)}${I(s,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function ns(n){return Wi(n,["hour","minute","second","millisecond"])}var ja=["January","February","March","April","May","June","July","August","September","October","November","December"],Xn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],qa=["J","F","M","A","M","J","J","A","S","O","N","D"];function Zn(n){switch(n){case"narrow":return[...qa];case"short":return[...Xn];case"long":return[...ja];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var tr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],er=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Ga=["M","T","W","T","F","S","S"];function jn(n){switch(n){case"narrow":return[...Ga];case"short":return[...er];case"long":return[...tr];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var qn=["AM","PM"],Ya=["Before Christ","Anno Domini"],Ja=["BC","AD"],Ka=["B","A"];function Gn(n){switch(n){case"narrow":return[...Ka];case"short":return[...Ja];case"long":return[...Ya];default:return null}}function Bi(n){return qn[n.hour<12?0:1]}function Zi(n,t){return jn(t)[n.weekday-1]}function ji(n,t){return Zn(t)[n.month-1]}function qi(n,t){return Gn(t)[n.year<0?0:1]}function Ii(n,t,e="always",s=!1){let r={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(n)===-1;if(e==="auto"&&o){let d=n==="days";switch(t){case 1:return d?"tomorrow":`next ${r[n][0]}`;case-1:return d?"yesterday":`last ${r[n][0]}`;case 0:return d?"today":`this ${r[n][0]}`;default:}}let i=Object.is(t,-0)||t<0,a=Math.abs(t),l=a===1,c=r[n],u=s?l?c[1]:c[2]||c[1]:l?r[n][0]:n;return i?`${a} ${u} ago`:`in ${a} ${u}`}function Gi(n,t){let e="";for(let s of n)s.literal?e+=s.val:e+=t(s.val);return e}var Qa={D:ht,DD:Ne,DDD:Le,DDDD:Fe,t:ze,tt:He,ttt:Re,tttt:Ue,T:Pe,TT:Ve,TTT:We,TTTT:Be,f:Ze,ff:qe,fff:Ye,ffff:Ke,F:je,FF:Ge,FFF:Je,FFFF:Qe},N=class{static create(t,e={}){return new N(t,e)}static parseFormat(t){let e=null,s="",r=!1,o=[];for(let i=0;i<t.length;i++){let a=t.charAt(i);a==="'"?(s.length>0&&o.push({literal:r||/^\s+$/.test(s),val:s}),e=null,s="",r=!r):r||a===e?s+=a:(s.length>0&&o.push({literal:/^\s+$/.test(s),val:s}),s=a,e=a)}return s.length>0&&o.push({literal:r||/^\s+$/.test(s),val:s}),o}static macroTokenToFormatOpts(t){return Qa[t]}constructor(t,e){this.opts=e,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,e){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,v(v({},this.opts),e)).format()}dtFormatter(t,e={}){return this.loc.dtFormatter(t,v(v({},this.opts),e))}formatDateTime(t,e){return this.dtFormatter(t,e).format()}formatDateTimeParts(t,e){return this.dtFormatter(t,e).formatToParts()}formatInterval(t,e){return this.dtFormatter(t.start,e).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,e){return this.dtFormatter(t,e).resolvedOptions()}num(t,e=0){if(this.opts.forceSimple)return I(t,e);let s=v({},this.opts);return e>0&&(s.padTo=e),this.loc.numberFormatter(s).format(t)}formatDateTimeFromString(t,e){let s=this.loc.listingMode()==="en",r=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(h,g)=>this.loc.extract(t,h,g),i=h=>t.isOffsetFixed&&t.offset===0&&h.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,h.format):"",a=()=>s?Bi(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,g)=>s?ji(t,h):o(g?{month:h}:{month:h,day:"numeric"},"month"),c=(h,g)=>s?Zi(t,h):o(g?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),u=h=>{let g=N.macroTokenToFormatOpts(h);return g?this.formatWithSystemDefault(t,g):h},d=h=>s?qi(t,h):o({era:h},"era"),y=h=>{switch(h){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return i({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return i({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return i({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return r?o({day:"numeric"},"day"):this.num(t.day);case"dd":return r?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return r?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return r?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return r?o({month:"numeric"},"month"):this.num(t.month);case"MM":return r?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return r?o({year:"numeric"},"year"):this.num(t.year);case"yy":return r?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return r?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return r?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return u(h)}};return Gi(N.parseFormat(e),y)}formatDurationFromString(t,e){let s=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},r=l=>c=>{let u=s(c);return u?this.num(l.get(u),c.length):c},o=N.parseFormat(e),i=o.reduce((l,{literal:c,val:u})=>c?l:l.concat(u),[]),a=t.shiftTo(...i.map(s).filter(l=>l));return Gi(o,r(a))}};var U=class{constructor(t,e){this.reason=t,this.explanation=e}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}};var Ji=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function ye(...n){let t=n.reduce((e,s)=>e+s.source,"");return RegExp(`^${t}$`)}function ge(...n){return t=>n.reduce(([e,s,r],o)=>{let[i,a,l]=o(t,r);return[v(v({},e),i),a||s,l]},[{},null,1]).slice(0,2)}function ve(n,...t){if(n==null)return[null,null];for(let[e,s]of t){let r=e.exec(n);if(r)return s(r)}return[null,null]}function Ki(...n){return(t,e)=>{let s={},r;for(r=0;r<n.length;r++)s[n[r]]=ot(t[e+r]);return[s,null,e+r]}}var Qi=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Xa=`(?:${Qi.source}?(?:\\[(${Ji.source})\\])?)?`,sr=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Xi=RegExp(`${sr.source}${Xa}`),nr=RegExp(`(?:T${Xi.source})?`),tl=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,el=/(\d{4})-?W(\d\d)(?:-?(\d))?/,sl=/(\d{4})-?(\d{3})/,nl=Ki("weekYear","weekNumber","weekDay"),rl=Ki("year","ordinal"),il=/(\d{4})-(\d\d)-(\d\d)/,to=RegExp(`${sr.source} ?(?:${Qi.source}|(${Ji.source}))?`),ol=RegExp(`(?: ${to.source})?`);function fe(n,t,e){let s=n[t];return w(s)?e:ot(s)}function al(n,t){return[{year:fe(n,t),month:fe(n,t+1,1),day:fe(n,t+2,1)},null,t+3]}function be(n,t){return[{hours:fe(n,t,0),minutes:fe(n,t+1,0),seconds:fe(n,t+2,0),milliseconds:es(n[t+3])},null,t+4]}function rs(n,t){let e=!n[t]&&!n[t+1],s=Ut(n[t+1],n[t+2]),r=e?null:D.instance(s);return[{},r,t+3]}function is(n,t){let e=n[t]?F.create(n[t]):null;return[{},e,t+1]}var ll=RegExp(`^T?${sr.source}$`),cl=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function ul(n){let[t,e,s,r,o,i,a,l,c]=n,u=t[0]==="-",d=l&&l[0]==="-",y=(h,g=!1)=>h!==void 0&&(g||h&&u)?-h:h;return[{years:y(yt(e)),months:y(yt(s)),weeks:y(yt(r)),days:y(yt(o)),hours:y(yt(i)),minutes:y(yt(a)),seconds:y(yt(l),l==="-0"),milliseconds:y(es(c),d)}]}var dl={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function rr(n,t,e,s,r,o,i){let a={year:t.length===2?ss(ot(t)):ot(t),month:Xn.indexOf(e)+1,day:ot(s),hour:ot(r),minute:ot(o)};return i&&(a.second=ot(i)),n&&(a.weekday=n.length>3?tr.indexOf(n)+1:er.indexOf(n)+1),a}var ml=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function hl(n){let[,t,e,s,r,o,i,a,l,c,u,d]=n,y=rr(t,r,s,e,o,i,a),h;return l?h=dl[l]:c?h=0:h=Ut(u,d),[y,new D(h)]}function pl(n){return n.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var fl=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,yl=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,gl=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Yi(n){let[,t,e,s,r,o,i,a]=n;return[rr(t,r,s,e,o,i,a),D.utcInstance]}function vl(n){let[,t,e,s,r,o,i,a]=n;return[rr(t,a,e,s,r,o,i),D.utcInstance]}var bl=ye(tl,nr),xl=ye(el,nr),El=ye(sl,nr),wl=ye(Xi),eo=ge(al,be,rs,is),Sl=ge(nl,be,rs,is),Tl=ge(rl,be,rs,is),$l=ge(be,rs,is);function so(n){return ve(n,[bl,eo],[xl,Sl],[El,Tl],[wl,$l])}function no(n){return ve(pl(n),[ml,hl])}function ro(n){return ve(n,[fl,Yi],[yl,Yi],[gl,vl])}function io(n){return ve(n,[cl,ul])}var _l=ge(be);function oo(n){return ve(n,[ll,_l])}var Al=ye(il,ol),Cl=ye(to),Ol=ge(be,rs,is);function ao(n){return ve(n,[Al,eo],[Cl,Ol])}var lo="Invalid Duration",uo={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Ml=v({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},uo),B=146097/400,xe=146097/4800,kl=v({years:{quarters:4,months:12,weeks:B/7,days:B,hours:B*24,minutes:B*24*60,seconds:B*24*60*60,milliseconds:B*24*60*60*1e3},quarters:{months:3,weeks:B/28,days:B/4,hours:B*24/4,minutes:B*24*60/4,seconds:B*24*60*60/4,milliseconds:B*24*60*60*1e3/4},months:{weeks:xe/7,days:xe,hours:xe*24,minutes:xe*24*60,seconds:xe*24*60*60,milliseconds:xe*24*60*60*1e3}},uo),Wt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Il=Wt.slice(0).reverse();function gt(n,t,e=!1){let s={values:e?t.values:v(v({},n.values),t.values||{}),loc:n.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||n.conversionAccuracy,matrix:t.matrix||n.matrix};return new $(s)}function mo(n,t){var s;let e=(s=t.milliseconds)!=null?s:0;for(let r of Il.slice(1))t[r]&&(e+=t[r]*n[r].milliseconds);return e}function co(n,t){let e=mo(n,t)<0?-1:1;Wt.reduceRight((s,r)=>{if(w(t[r]))return s;if(s){let o=t[s]*e,i=n[r][s],a=Math.floor(o/i);t[r]+=a*e,t[s]-=a*i*e}return r},null),Wt.reduce((s,r)=>{if(w(t[r]))return s;if(s){let o=t[s]%1;t[s]-=o,t[r]+=o*n[s][r]}return r},null)}function Dl(n){let t={};for(let[e,s]of Object.entries(n))s!==0&&(t[e]=s);return t}var $=class{constructor(t){let e=t.conversionAccuracy==="longterm"||!1,s=e?kl:Ml;t.matrix&&(s=t.matrix),this.values=t.values,this.loc=t.loc||A.create(),this.conversionAccuracy=e?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=s,this.isLuxonDuration=!0}static fromMillis(t,e){return $.fromObject({milliseconds:t},e)}static fromObject(t,e={}){if(t==null||typeof t!="object")throw new R(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new $({values:pe(t,$.normalizeUnit),loc:A.fromObject(e),conversionAccuracy:e.conversionAccuracy,matrix:e.matrix})}static fromDurationLike(t){if(X(t))return $.fromMillis(t);if($.isDuration(t))return t;if(typeof t=="object")return $.fromObject(t);throw new R(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,e){let[s]=io(t);return s?$.fromObject(s,e):$.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,e){let[s]=oo(t);return s?$.fromObject(s,e):$.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,e=null){if(!t)throw new R("need to specify a reason the Duration is invalid");let s=t instanceof U?t:new U(t,e);if(O.throwOnInvalid)throw new Ls(s);return new $({invalid:s})}static normalizeUnit(t){let e={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!e)throw new le(t);return e}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,e={}){let s=P(v({},e),{floor:e.round!==!1&&e.floor!==!1});return this.isValid?N.create(this.loc,s).formatDurationFromString(this,t):lo}toHuman(t={}){if(!this.isValid)return lo;let e=Wt.map(s=>{let r=this.values[s];return w(r)?null:this.loc.numberFormatter(P(v({style:"unit",unitDisplay:"long"},t),{unit:s.slice(0,-1)})).format(r)}).filter(s=>s);return this.loc.listFormatter(v({type:"conjunction",style:t.listStyle||"narrow"},t)).format(e)}toObject(){return this.isValid?v({},this.values):{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=ue(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;let e=this.toMillis();return e<0||e>=864e5?null:(t=P(v({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},t),{includeOffset:!1}),b.fromMillis(e,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?mo(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;let e=$.fromDurationLike(t),s={};for(let r of Wt)(ft(e.values,r)||ft(this.values,r))&&(s[r]=e.get(r)+this.get(r));return gt(this,{values:s},!0)}minus(t){if(!this.isValid)return this;let e=$.fromDurationLike(t);return this.plus(e.negate())}mapUnits(t){if(!this.isValid)return this;let e={};for(let s of Object.keys(this.values))e[s]=Qn(t(this.values[s],s));return gt(this,{values:e},!0)}get(t){return this[$.normalizeUnit(t)]}set(t){if(!this.isValid)return this;let e=v(v({},this.values),pe(t,$.normalizeUnit));return gt(this,{values:e})}reconfigure({locale:t,numberingSystem:e,conversionAccuracy:s,matrix:r}={}){let i={loc:this.loc.clone({locale:t,numberingSystem:e}),matrix:r,conversionAccuracy:s};return gt(this,i)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;let t=this.toObject();return co(this.matrix,t),gt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;let t=Dl(this.normalize().shiftToAll().toObject());return gt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(i=>$.normalizeUnit(i));let e={},s={},r=this.toObject(),o;for(let i of Wt)if(t.indexOf(i)>=0){o=i;let a=0;for(let c in s)a+=this.matrix[c][i]*s[c],s[c]=0;X(r[i])&&(a+=r[i]);let l=Math.trunc(a);e[i]=l,s[i]=(a*1e3-l*1e3)/1e3}else X(r[i])&&(s[i]=r[i]);for(let i in s)s[i]!==0&&(e[o]+=i===o?s[i]:s[i]/this.matrix[o][i]);return co(this.matrix,e),gt(this,{values:e},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let t={};for(let e of Object.keys(this.values))t[e]=this.values[e]===0?0:-this.values[e];return gt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function e(s,r){return s===void 0||s===0?r===void 0||r===0:s===r}for(let s of Wt)if(!e(this.values[s],t.values[s]))return!1;return!0}};var Ee="Invalid Interval";function Nl(n,t){return!n||!n.isValid?M.invalid("missing or invalid start"):!t||!t.isValid?M.invalid("missing or invalid end"):t<n?M.invalid("end before start",`The end of an interval must be after its start, but you had start=${n.toISO()} and end=${t.toISO()}`):null}var M=class{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,e=null){if(!t)throw new R("need to specify a reason the Interval is invalid");let s=t instanceof U?t:new U(t,e);if(O.throwOnInvalid)throw new Ns(s);return new M({invalid:s})}static fromDateTimes(t,e){let s=we(t),r=we(e),o=Nl(s,r);return o==null?new M({start:s,end:r}):o}static after(t,e){let s=$.fromDurationLike(e),r=we(t);return M.fromDateTimes(r,r.plus(s))}static before(t,e){let s=$.fromDurationLike(e),r=we(t);return M.fromDateTimes(r.minus(s),r)}static fromISO(t,e){let[s,r]=(t||"").split("/",2);if(s&&r){let o,i;try{o=b.fromISO(s,e),i=o.isValid}catch(c){i=!1}let a,l;try{a=b.fromISO(r,e),l=a.isValid}catch(c){l=!1}if(i&&l)return M.fromDateTimes(o,a);if(i){let c=$.fromISO(r,e);if(c.isValid)return M.after(o,c)}else if(l){let c=$.fromISO(s,e);if(c.isValid)return M.before(a,c)}}return M.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds"){if(!this.isValid)return NaN;let e=this.start.startOf(t),s=this.end.startOf(t);return Math.floor(s.diff(e,t).get(t))+(s.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:e}={}){return this.isValid?M.fromDateTimes(t||this.s,e||this.e):this}splitAt(...t){if(!this.isValid)return[];let e=t.map(we).filter(i=>this.contains(i)).sort(),s=[],{s:r}=this,o=0;for(;r<this.e;){let i=e[o]||this.e,a=+i>+this.e?this.e:i;s.push(M.fromDateTimes(r,a)),r=a,o+=1}return s}splitBy(t){let e=$.fromDurationLike(t);if(!this.isValid||!e.isValid||e.as("milliseconds")===0)return[];let{s}=this,r=1,o,i=[];for(;s<this.e;){let a=this.start.plus(e.mapUnits(l=>l*r));o=+a>+this.e?this.e:a,i.push(M.fromDateTimes(s,o)),s=o,r+=1}return i}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;let e=this.s>t.s?this.s:t.s,s=this.e<t.e?this.e:t.e;return e>=s?null:M.fromDateTimes(e,s)}union(t){if(!this.isValid)return this;let e=this.s<t.s?this.s:t.s,s=this.e>t.e?this.e:t.e;return M.fromDateTimes(e,s)}static merge(t){let[e,s]=t.sort((r,o)=>r.s-o.s).reduce(([r,o],i)=>o?o.overlaps(i)||o.abutsStart(i)?[r,o.union(i)]:[r.concat([o]),i]:[r,i],[[],null]);return s&&e.push(s),e}static xor(t){let e=null,s=0,r=[],o=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),i=Array.prototype.concat(...o),a=i.sort((l,c)=>l.time-c.time);for(let l of a)s+=l.type==="s"?1:-1,s===1?e=l.time:(e&&+e!=+l.time&&r.push(M.fromDateTimes(e,l.time)),e=null);return M.merge(r)}difference(...t){return M.xor([this].concat(t)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:Ee}toLocaleString(t=ht,e={}){return this.isValid?N.create(this.s.loc.clone(e),t).formatInterval(this):Ee}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Ee}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ee}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Ee}toFormat(t,{separator:e=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(t)}${e}${this.e.toFormat(t)}`:Ee}toDuration(t,e){return this.isValid?this.e.diff(this.s,t,e):$.invalid(this.invalidReason)}mapEndpoints(t){return M.fromDateTimes(t(this.s),t(this.e))}};var at=class{static hasDST(t=O.defaultZone){let e=b.now().setZone(t).set({month:12});return!t.isUniversal&&e.offset!==e.set({month:6}).offset}static isValidIANAZone(t){return F.isValidZone(t)}static normalizeZone(t){return Y(t,O.defaultZone)}static months(t="long",{locale:e=null,numberingSystem:s=null,locObj:r=null,outputCalendar:o="gregory"}={}){return(r||A.create(e,s,o)).months(t)}static monthsFormat(t="long",{locale:e=null,numberingSystem:s=null,locObj:r=null,outputCalendar:o="gregory"}={}){return(r||A.create(e,s,o)).months(t,!0)}static weekdays(t="long",{locale:e=null,numberingSystem:s=null,locObj:r=null}={}){return(r||A.create(e,s,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:e=null,numberingSystem:s=null,locObj:r=null}={}){return(r||A.create(e,s,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return A.create(t).meridiems()}static eras(t="short",{locale:e=null}={}){return A.create(e,null,"gregory").eras(t)}static features(){return{relative:Ps()}}};function ho(n,t){let e=r=>r.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),s=e(t)-e(n);return Math.floor($.fromMillis(s).as("days"))}function Ll(n,t,e){let s=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{let u=ho(l,c);return(u-u%7)/7}],["days",ho]],r={},o=n,i,a;for(let[l,c]of s)e.indexOf(l)>=0&&(i=l,r[l]=c(n,t),a=o.plus(r),a>t?(r[l]--,n=o.plus(r),n>t&&(a=n,r[l]--,n=o.plus(r))):n=a);return[n,r,a,i]}function po(n,t,e,s){let[r,o,i,a]=Ll(n,t,e),l=t-r,c=e.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);c.length===0&&(i<t&&(i=r.plus({[a]:1})),i!==r&&(o[a]=(o[a]||0)+l/(i-r)));let u=$.fromObject(o,s);return c.length>0?$.fromMillis(l,s).shiftTo(...c).plus(u):u}var ir={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},fo={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Fl=ir.hanidec.replace(/[\[|\]]/g,"").split("");function yo(n){let t=parseInt(n,10);if(isNaN(t)){t="";for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(n[e].search(ir.hanidec)!==-1)t+=Fl.indexOf(n[e]);else for(let r in fo){let[o,i]=fo[r];s>=o&&s<=i&&(t+=s-o)}}return parseInt(t,10)}else return t}function Z({numberingSystem:n},t=""){return new RegExp(`${ir[n||"latn"]}${t}`)}var zl="missing Intl.DateTimeFormat.formatToParts support";function C(n,t=e=>e){return{regex:n,deser:([e])=>t(yo(e))}}var Hl=String.fromCharCode(160),bo=`[ ${Hl}]`,xo=new RegExp(bo,"g");function Rl(n){return n.replace(/\./g,"\\.?").replace(xo,bo)}function go(n){return n.replace(/\./g,"").replace(xo," ").toLowerCase()}function J(n,t){return n===null?null:{regex:RegExp(n.map(Rl).join("|")),deser:([e])=>n.findIndex(s=>go(e)===go(s))+t}}function vo(n,t){return{regex:n,deser:([,e,s])=>Ut(e,s),groups:t}}function Vs(n){return{regex:n,deser:([t])=>t}}function Ul(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Pl(n,t){let e=Z(t),s=Z(t,"{2}"),r=Z(t,"{3}"),o=Z(t,"{4}"),i=Z(t,"{6}"),a=Z(t,"{1,2}"),l=Z(t,"{1,3}"),c=Z(t,"{1,6}"),u=Z(t,"{1,9}"),d=Z(t,"{2,4}"),y=Z(t,"{4,6}"),h=L=>({regex:RegExp(Ul(L.val)),deser:([lt])=>lt,literal:!0}),K=(L=>{if(n.literal)return h(L);switch(L.val){case"G":return J(t.eras("short"),0);case"GG":return J(t.eras("long"),0);case"y":return C(c);case"yy":return C(d,ss);case"yyyy":return C(o);case"yyyyy":return C(y);case"yyyyyy":return C(i);case"M":return C(a);case"MM":return C(s);case"MMM":return J(t.months("short",!0),1);case"MMMM":return J(t.months("long",!0),1);case"L":return C(a);case"LL":return C(s);case"LLL":return J(t.months("short",!1),1);case"LLLL":return J(t.months("long",!1),1);case"d":return C(a);case"dd":return C(s);case"o":return C(l);case"ooo":return C(r);case"HH":return C(s);case"H":return C(a);case"hh":return C(s);case"h":return C(a);case"mm":return C(s);case"m":return C(a);case"q":return C(a);case"qq":return C(s);case"s":return C(a);case"ss":return C(s);case"S":return C(l);case"SSS":return C(r);case"u":return Vs(u);case"uu":return Vs(a);case"uuu":return C(e);case"a":return J(t.meridiems(),0);case"kkkk":return C(o);case"kk":return C(d,ss);case"W":return C(a);case"WW":return C(s);case"E":case"c":return C(e);case"EEE":return J(t.weekdays("short",!1),1);case"EEEE":return J(t.weekdays("long",!1),1);case"ccc":return J(t.weekdays("short",!0),1);case"cccc":return J(t.weekdays("long",!0),1);case"Z":case"ZZ":return vo(new RegExp(`([+-]${a.source})(?::(${s.source}))?`),2);case"ZZZ":return vo(new RegExp(`([+-]${a.source})(${s.source})?`),2);case"z":return Vs(/[a-z_+-/]{1,256}?/i);case" ":return Vs(/[^\S\n\r]/);default:return h(L)}})(n)||{invalidReason:zl};return K.token=n,K}var Vl={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Wl(n,t,e){let{type:s,value:r}=n;if(s==="literal"){let l=/^\s+$/.test(r);return{literal:!l,val:l?" ":r}}let o=t[s],i=s;s==="hour"&&(t.hour12!=null?i=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?i="hour12":i="hour24":i=e.hour12?"hour12":"hour24");let a=Vl[i];if(typeof a=="object"&&(a=a[o]),a)return{literal:!1,val:a}}function Bl(n){return[`^${n.map(e=>e.regex).reduce((e,s)=>`${e}(${s.source})`,"")}$`,n]}function Zl(n,t,e){let s=n.match(t);if(s){let r={},o=1;for(let i in e)if(ft(e,i)){let a=e[i],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(r[a.token.val[0]]=a.deser(s.slice(o,o+l))),o+=l}return[s,r]}else return[s,{}]}function jl(n){let t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},e=null,s;return w(n.z)||(e=F.create(n.z)),w(n.Z)||(e||(e=new D(n.Z)),s=n.Z),w(n.q)||(n.M=(n.q-1)*3+1),w(n.h)||(n.h<12&&n.a===1?n.h+=12:n.h===12&&n.a===0&&(n.h=0)),n.G===0&&n.y&&(n.y=-n.y),w(n.u)||(n.S=es(n.u)),[Object.keys(n).reduce((o,i)=>{let a=t(i);return a&&(o[a]=n[i]),o},{}),e,s]}var or=null;function ql(){return or||(or=b.fromMillis(1555555555555)),or}function Gl(n,t){if(n.literal)return n;let e=N.macroTokenToFormatOpts(n.val),s=cr(e,t);return s==null||s.includes(void 0)?n:s}function ar(n,t){return Array.prototype.concat(...n.map(e=>Gl(e,t)))}function lr(n,t,e){let s=ar(N.parseFormat(e),n),r=s.map(i=>Pl(i,n)),o=r.find(i=>i.invalidReason);if(o)return{input:t,tokens:s,invalidReason:o.invalidReason};{let[i,a]=Bl(r),l=RegExp(i,"i"),[c,u]=Zl(t,l,a),[d,y,h]=u?jl(u):[null,null,void 0];if(ft(u,"a")&&ft(u,"H"))throw new it("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:s,regex:l,rawMatches:c,matches:u,result:d,zone:y,specificOffset:h}}}function Eo(n,t,e){let{result:s,zone:r,specificOffset:o,invalidReason:i}=lr(n,t,e);return[s,r,o,i]}function cr(n,t){if(!n)return null;let s=N.create(t,n).dtFormatter(ql()),r=s.formatToParts(),o=s.resolvedOptions();return r.map(i=>Wl(i,n,o))}var wo=[0,31,59,90,120,151,181,212,243,273,304,334],So=[0,31,60,91,121,152,182,213,244,274,305,335];function j(n,t){return new U("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${n}, which is invalid`)}function To(n,t,e){let s=new Date(Date.UTC(n,t-1,e));n<100&&n>=0&&s.setUTCFullYear(s.getUTCFullYear()-1900);let r=s.getUTCDay();return r===0?7:r}function $o(n,t,e){return e+(Pt(n)?So:wo)[t-1]}function _o(n,t){let e=Pt(n)?So:wo,s=e.findIndex(o=>o<t),r=t-e[s];return{month:s+1,day:r}}function Ws(n){let{year:t,month:e,day:s}=n,r=$o(t,e,s),o=To(t,e,s),i=Math.floor((r-o+10)/7),a;return i<1?(a=t-1,i=he(a)):i>he(t)?(a=t+1,i=1):a=t,v({weekYear:a,weekNumber:i,weekday:o},ns(n))}function ur(n){let{weekYear:t,weekNumber:e,weekday:s}=n,r=To(t,1,4),o=Vt(t),i=e*7+s-r-3,a;i<1?(a=t-1,i+=Vt(a)):i>o?(a=t+1,i-=Vt(t)):a=t;let{month:l,day:c}=_o(a,i);return v({year:a,month:l,day:c},ns(n))}function Bs(n){let{year:t,month:e,day:s}=n,r=$o(t,e,s);return v({year:t,ordinal:r},ns(n))}function dr(n){let{year:t,ordinal:e}=n,{month:s,day:r}=_o(t,e);return v({year:t,month:s,day:r},ns(n))}function Ao(n){let t=ts(n.weekYear),e=tt(n.weekNumber,1,he(n.weekYear)),s=tt(n.weekday,1,7);return t?e?s?!1:j("weekday",n.weekday):j("week",n.week):j("weekYear",n.weekYear)}function Co(n){let t=ts(n.year),e=tt(n.ordinal,1,Vt(n.year));return t?e?!1:j("ordinal",n.ordinal):j("year",n.year)}function mr(n){let t=ts(n.year),e=tt(n.month,1,12),s=tt(n.day,1,me(n.year,n.month));return t?e?s?!1:j("day",n.day):j("month",n.month):j("year",n.year)}function hr(n){let{hour:t,minute:e,second:s,millisecond:r}=n,o=tt(t,0,23)||t===24&&e===0&&s===0&&r===0,i=tt(e,0,59),a=tt(s,0,59),l=tt(r,0,999);return o?i?a?l?!1:j("millisecond",r):j("second",s):j("minute",e):j("hour",t)}var pr="Invalid DateTime",Oo=864e13;function Zs(n){return new U("unsupported zone",`the zone "${n.name}" is not supported`)}function fr(n){return n.weekData===null&&(n.weekData=Ws(n.c)),n.weekData}function Bt(n,t){let e={ts:n.ts,zone:n.zone,c:n.c,o:n.o,loc:n.loc,invalid:n.invalid};return new b(P(v(v({},e),t),{old:e}))}function Fo(n,t,e){let s=n-t*60*1e3,r=e.offset(s);if(t===r)return[s,t];s-=(r-t)*60*1e3;let o=e.offset(s);return r===o?[s,r]:[n-Math.min(r,o)*60*1e3,Math.max(r,o)]}function js(n,t){n+=t*60*1e3;let e=new Date(n);return{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate(),hour:e.getUTCHours(),minute:e.getUTCMinutes(),second:e.getUTCSeconds(),millisecond:e.getUTCMilliseconds()}}function Gs(n,t,e){return Fo(ce(n),t,e)}function Mo(n,t){let e=n.o,s=n.c.year+Math.trunc(t.years),r=n.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o=P(v({},n.c),{year:s,month:r,day:Math.min(n.c.day,me(s,r))+Math.trunc(t.days)+Math.trunc(t.weeks)*7}),i=$.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=ce(o),[l,c]=Fo(a,e,n.zone);return i!==0&&(l+=i,c=n.zone.offset(l)),{ts:l,o:c}}function os(n,t,e,s,r,o){let{setZone:i,zone:a}=e;if(n&&Object.keys(n).length!==0||t){let l=t||a,c=b.fromObject(n,P(v({},e),{zone:l,specificOffset:o}));return i?c:c.setZone(a)}else return b.invalid(new U("unparsable",`the input "${r}" can't be parsed as ${s}`))}function qs(n,t,e=!0){return n.isValid?N.create(A.create("en-US"),{allowZ:e,forceSimple:!0}).formatDateTimeFromString(n,t):null}function yr(n,t){let e=n.c.year>9999||n.c.year<0,s="";return e&&n.c.year>=0&&(s+="+"),s+=I(n.c.year,e?6:4),t?(s+="-",s+=I(n.c.month),s+="-",s+=I(n.c.day)):(s+=I(n.c.month),s+=I(n.c.day)),s}function ko(n,t,e,s,r,o){let i=I(n.c.hour);return t?(i+=":",i+=I(n.c.minute),(n.c.millisecond!==0||n.c.second!==0||!e)&&(i+=":")):i+=I(n.c.minute),(n.c.millisecond!==0||n.c.second!==0||!e)&&(i+=I(n.c.second),(n.c.millisecond!==0||!s)&&(i+=".",i+=I(n.c.millisecond,3))),r&&(n.isOffsetFixed&&n.offset===0&&!o?i+="Z":n.o<0?(i+="-",i+=I(Math.trunc(-n.o/60)),i+=":",i+=I(Math.trunc(-n.o%60))):(i+="+",i+=I(Math.trunc(n.o/60)),i+=":",i+=I(Math.trunc(n.o%60)))),o&&(i+="["+n.zone.ianaName+"]"),i}var zo={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Yl={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Jl={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Ho=["year","month","day","hour","minute","second","millisecond"],Kl=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Ql=["year","ordinal","hour","minute","second","millisecond"];function Io(n){let t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[n.toLowerCase()];if(!t)throw new le(n);return t}function Do(n,t){let e=Y(t.zone,O.defaultZone),s=A.fromObject(t),r=O.now(),o,i;if(w(n.year))o=r;else{for(let c of Ho)w(n[c])&&(n[c]=zo[c]);let a=mr(n)||hr(n);if(a)return b.invalid(a);let l=e.offset(r);[o,i]=Gs(n,l,e)}return new b({ts:o,zone:e,loc:s,o:i})}function No(n,t,e){let s=w(e.round)?!0:e.round,r=(i,a)=>(i=ue(i,s||e.calendary?0:2,!0),t.loc.clone(e).relFormatter(e).format(i,a)),o=i=>e.calendary?t.hasSame(n,i)?0:t.startOf(i).diff(n.startOf(i),i).get(i):t.diff(n,i).get(i);if(e.unit)return r(o(e.unit),e.unit);for(let i of e.units){let a=o(i);if(Math.abs(a)>=1)return r(a,i)}return r(n>t?-0:0,e.units[e.units.length-1])}function Lo(n){let t={},e;return n.length>0&&typeof n[n.length-1]=="object"?(t=n[n.length-1],e=Array.from(n).slice(0,n.length-1)):e=Array.from(n),[t,e]}var b=class{constructor(t){let e=t.zone||O.defaultZone,s=t.invalid||(Number.isNaN(t.ts)?new U("invalid input"):null)||(e.isValid?null:Zs(e));this.ts=w(t.ts)?O.now():t.ts;let r=null,o=null;if(!s)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(e))[r,o]=[t.old.c,t.old.o];else{let a=e.offset(this.ts);r=js(this.ts,a),s=Number.isNaN(r.year)?new U("invalid input"):null,r=s?null:r,o=s?null:a}this._zone=e,this.loc=t.loc||A.create(),this.invalid=s,this.weekData=null,this.c=r,this.o=o,this.isLuxonDateTime=!0}static now(){return new b({})}static local(){let[t,e]=Lo(arguments),[s,r,o,i,a,l,c]=e;return Do({year:s,month:r,day:o,hour:i,minute:a,second:l,millisecond:c},t)}static utc(){let[t,e]=Lo(arguments),[s,r,o,i,a,l,c]=e;return t.zone=D.utcInstance,Do({year:s,month:r,day:o,hour:i,minute:a,second:l,millisecond:c},t)}static fromJSDate(t,e={}){let s=Pi(t)?t.valueOf():NaN;if(Number.isNaN(s))return b.invalid("invalid input");let r=Y(e.zone,O.defaultZone);return r.isValid?new b({ts:s,zone:r,loc:A.fromObject(e)}):b.invalid(Zs(r))}static fromMillis(t,e={}){if(X(t))return t<-Oo||t>Oo?b.invalid("Timestamp out of range"):new b({ts:t,zone:Y(e.zone,O.defaultZone),loc:A.fromObject(e)});throw new R(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,e={}){if(X(t))return new b({ts:t*1e3,zone:Y(e.zone,O.defaultZone),loc:A.fromObject(e)});throw new R("fromSeconds requires a numerical input")}static fromObject(t,e={}){t=t||{};let s=Y(e.zone,O.defaultZone);if(!s.isValid)return b.invalid(Zs(s));let r=O.now(),o=w(e.specificOffset)?s.offset(r):e.specificOffset,i=pe(t,Io),a=!w(i.ordinal),l=!w(i.year),c=!w(i.month)||!w(i.day),u=l||c,d=i.weekYear||i.weekNumber,y=A.fromObject(e);if((u||a)&&d)throw new it("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&a)throw new it("Can't mix ordinal dates with month/day");let h=d||i.weekday&&!u,g,K,L=js(r,o);h?(g=Kl,K=Yl,L=Ws(L)):a?(g=Ql,K=Jl,L=Bs(L)):(g=Ho,K=zo);let lt=!1;for(let Se of g){let Qo=i[Se];w(Qo)?lt?i[Se]=K[Se]:i[Se]=L[Se]:lt=!0}let cs=h?Ao(i):a?Co(i):mr(i),br=cs||hr(i);if(br)return b.invalid(br);let Yo=h?ur(i):a?dr(i):i,[Jo,Ko]=Gs(Yo,o,s),Ys=new b({ts:Jo,zone:s,o:Ko,loc:y});return i.weekday&&u&&t.weekday!==Ys.weekday?b.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${Ys.toISO()}`):Ys}static fromISO(t,e={}){let[s,r]=so(t);return os(s,r,e,"ISO 8601",t)}static fromRFC2822(t,e={}){let[s,r]=no(t);return os(s,r,e,"RFC 2822",t)}static fromHTTP(t,e={}){let[s,r]=ro(t);return os(s,r,e,"HTTP",e)}static fromFormat(t,e,s={}){if(w(t)||w(e))throw new R("fromFormat requires an input string and a format");let{locale:r=null,numberingSystem:o=null}=s,i=A.fromOpts({locale:r,numberingSystem:o,defaultToEN:!0}),[a,l,c,u]=Eo(i,t,e);return u?b.invalid(u):os(a,l,s,`format ${e}`,t,c)}static fromString(t,e,s={}){return b.fromFormat(t,e,s)}static fromSQL(t,e={}){let[s,r]=ao(t);return os(s,r,e,"SQL",t)}static invalid(t,e=null){if(!t)throw new R("need to specify a reason the DateTime is invalid");let s=t instanceof U?t:new U(t,e);if(O.throwOnInvalid)throw new Ds(s);return new b({invalid:s})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,e={}){let s=cr(t,A.fromObject(e));return s?s.map(r=>r?r.val:null).join(""):null}static expandFormat(t,e={}){return ar(N.parseFormat(t),A.fromObject(e)).map(r=>r.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?fr(this).weekYear:NaN}get weekNumber(){return this.isValid?fr(this).weekNumber:NaN}get weekday(){return this.isValid?fr(this).weekday:NaN}get ordinal(){return this.isValid?Bs(this.c).ordinal:NaN}get monthShort(){return this.isValid?at.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?at.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?at.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?at.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let t=864e5,e=6e4,s=ce(this.c),r=this.zone.offset(s-t),o=this.zone.offset(s+t),i=this.zone.offset(s-r*e),a=this.zone.offset(s-o*e);if(i===a)return[this];let l=s-i*e,c=s-a*e,u=js(l,i),d=js(c,a);return u.hour===d.hour&&u.minute===d.minute&&u.second===d.second&&u.millisecond===d.millisecond?[Bt(this,{ts:l}),Bt(this,{ts:c})]:[this]}get isInLeapYear(){return Pt(this.year)}get daysInMonth(){return me(this.year,this.month)}get daysInYear(){return this.isValid?Vt(this.year):NaN}get weeksInWeekYear(){return this.isValid?he(this.weekYear):NaN}resolvedLocaleOptions(t={}){let{locale:e,numberingSystem:s,calendar:r}=N.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:e,numberingSystem:s,outputCalendar:r}}toUTC(t=0,e={}){return this.setZone(D.instance(t),e)}toLocal(){return this.setZone(O.defaultZone)}setZone(t,{keepLocalTime:e=!1,keepCalendarTime:s=!1}={}){if(t=Y(t,O.defaultZone),t.equals(this.zone))return this;if(t.isValid){let r=this.ts;if(e||s){let o=t.offset(this.ts),i=this.toObject();[r]=Gs(i,o,t)}return Bt(this,{ts:r,zone:t})}else return b.invalid(Zs(t))}reconfigure({locale:t,numberingSystem:e,outputCalendar:s}={}){let r=this.loc.clone({locale:t,numberingSystem:e,outputCalendar:s});return Bt(this,{loc:r})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;let e=pe(t,Io),s=!w(e.weekYear)||!w(e.weekNumber)||!w(e.weekday),r=!w(e.ordinal),o=!w(e.year),i=!w(e.month)||!w(e.day),a=o||i,l=e.weekYear||e.weekNumber;if((a||r)&&l)throw new it("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(i&&r)throw new it("Can't mix ordinal dates with month/day");let c;s?c=ur(v(v({},Ws(this.c)),e)):w(e.ordinal)?(c=v(v({},this.toObject()),e),w(e.day)&&(c.day=Math.min(me(c.year,c.month),c.day))):c=dr(v(v({},Bs(this.c)),e));let[u,d]=Gs(c,this.o,this.zone);return Bt(this,{ts:u,o:d})}plus(t){if(!this.isValid)return this;let e=$.fromDurationLike(t);return Bt(this,Mo(this,e))}minus(t){if(!this.isValid)return this;let e=$.fromDurationLike(t).negate();return Bt(this,Mo(this,e))}startOf(t){if(!this.isValid)return this;let e={},s=$.normalizeUnit(t);switch(s){case"years":e.month=1;case"quarters":case"months":e.day=1;case"weeks":case"days":e.hour=0;case"hours":e.minute=0;case"minutes":e.second=0;case"seconds":e.millisecond=0;break;case"milliseconds":break}if(s==="weeks"&&(e.weekday=1),s==="quarters"){let r=Math.ceil(this.month/3);e.month=(r-1)*3+1}return this.set(e)}endOf(t){return this.isValid?this.plus({[t]:1}).startOf(t).minus(1):this}toFormat(t,e={}){return this.isValid?N.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this,t):pr}toLocaleString(t=ht,e={}){return this.isValid?N.create(this.loc.clone(e),t).formatDateTime(this):pr}toLocaleParts(t={}){return this.isValid?N.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:e=!1,suppressMilliseconds:s=!1,includeOffset:r=!0,extendedZone:o=!1}={}){if(!this.isValid)return null;let i=t==="extended",a=yr(this,i);return a+="T",a+=ko(this,i,e,s,r,o),a}toISODate({format:t="extended"}={}){return this.isValid?yr(this,t==="extended"):null}toISOWeekDate(){return qs(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:e=!1,includeOffset:s=!0,includePrefix:r=!1,extendedZone:o=!1,format:i="extended"}={}){return this.isValid?(r?"T":"")+ko(this,i==="extended",e,t,s,o):null}toRFC2822(){return qs(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return qs(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?yr(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:e=!1,includeOffsetSpace:s=!0}={}){let r="HH:mm:ss.SSS";return(e||t)&&(s&&(r+=" "),e?r+="z":t&&(r+="ZZ")),qs(this,r,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():pr}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};let e=v({},this.c);return t.includeConfig&&(e.outputCalendar=this.outputCalendar,e.numberingSystem=this.loc.numberingSystem,e.locale=this.loc.locale),e}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,e="milliseconds",s={}){if(!this.isValid||!t.isValid)return $.invalid("created by diffing an invalid DateTime");let r=v({locale:this.locale,numberingSystem:this.numberingSystem},s),o=Vi(e).map($.normalizeUnit),i=t.valueOf()>this.valueOf(),a=i?this:t,l=i?t:this,c=po(a,l,o,r);return i?c.negate():c}diffNow(t="milliseconds",e={}){return this.diff(b.now(),t,e)}until(t){return this.isValid?M.fromDateTimes(this,t):this}hasSame(t,e){if(!this.isValid)return!1;let s=t.valueOf(),r=this.setZone(t.zone,{keepLocalTime:!0});return r.startOf(e)<=s&&s<=r.endOf(e)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;let e=t.base||b.fromObject({},{zone:this.zone}),s=t.padding?this<e?-t.padding:t.padding:0,r=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(r=t.unit,o=void 0),No(e,this.plus(s),P(v({},t),{numeric:"always",units:r,unit:o}))}toRelativeCalendar(t={}){return this.isValid?No(t.base||b.fromObject({},{zone:this.zone}),this,P(v({},t),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...t){if(!t.every(b.isDateTime))throw new R("min requires all arguments be DateTimes");return Kn(t,e=>e.valueOf(),Math.min)}static max(...t){if(!t.every(b.isDateTime))throw new R("max requires all arguments be DateTimes");return Kn(t,e=>e.valueOf(),Math.max)}static fromFormatExplain(t,e,s={}){let{locale:r=null,numberingSystem:o=null}=s,i=A.fromOpts({locale:r,numberingSystem:o,defaultToEN:!0});return lr(i,t,e)}static fromStringExplain(t,e,s={}){return b.fromFormatExplain(t,e,s)}static get DATE_SHORT(){return ht}static get DATE_MED(){return Ne}static get DATE_MED_WITH_WEEKDAY(){return Ln}static get DATE_FULL(){return Le}static get DATE_HUGE(){return Fe}static get TIME_SIMPLE(){return ze}static get TIME_WITH_SECONDS(){return He}static get TIME_WITH_SHORT_OFFSET(){return Re}static get TIME_WITH_LONG_OFFSET(){return Ue}static get TIME_24_SIMPLE(){return Pe}static get TIME_24_WITH_SECONDS(){return Ve}static get TIME_24_WITH_SHORT_OFFSET(){return We}static get TIME_24_WITH_LONG_OFFSET(){return Be}static get DATETIME_SHORT(){return Ze}static get DATETIME_SHORT_WITH_SECONDS(){return je}static get DATETIME_MED(){return qe}static get DATETIME_MED_WITH_SECONDS(){return Ge}static get DATETIME_MED_WITH_WEEKDAY(){return Fn}static get DATETIME_FULL(){return Ye}static get DATETIME_FULL_WITH_SECONDS(){return Je}static get DATETIME_HUGE(){return Ke}static get DATETIME_HUGE_WITH_SECONDS(){return Qe}};function we(n){if(b.isDateTime(n))return n;if(n&&n.valueOf&&X(n.valueOf()))return b.fromJSDate(n);if(n&&typeof n=="object")return b.fromObject(n);throw new R(`Unknown datetime argument: ${n}, of type ${typeof n}`)}var Ro=_(E),Xl=[Ro.styles,Tn],Zt=class extends Ro{constructor(){super();this.updateComment=({detail:e})=>{let{text:s}=e;this.text=s,this.closeEditMode(),this.emitEvent("update-comment",{uuid:this.uuid,text:s})};this.resolveAnnotation=e=>{e.stopPropagation(),this.emitEvent("resolve-annotation",{type:"resolve-annotation",resolved:!this.resolved},{composed:!1,bubbles:!1})};this.confirmDelete=()=>{if(this.deleteCommentModalOpen=!1,this.primaryComment)return this.emitEvent("delete-annotation",{uuid:this.annotationId});this.emitEvent("delete-comment",{annotationId:this.annotationId,uuid:this.uuid})};this.closeEditMode=()=>{this.mode="readonly"};this.resolved=!1}render(){var h;let e=this.annotationFilter==="all"?"resolve":"undo",s=g=>b.fromISO(g).toFormat("yyyy-dd-MM"),r=this.resolvable?"comment-item__resolve":"hidden",o=[{label:"EDIT"},{label:"DELETE"}],i=({detail:g})=>{g==="EDIT"&&(this.mode="editable"),g==="DELETE"&&(this.deleteCommentModalOpen=!0)},a=()=>{this.text.length<120||(this.expandElipsis=!0)},l=()=>{if(this.mode==="editable")return f`
        <superviz-comments-comment-input
          class="comment-item--editable"
          editable
          @click=${g=>g.stopPropagation()}
          text=${this.text}
          eventType="update-comment"
          @update-comment=${this.updateComment}
          @close-edit-mode=${this.closeEditMode}
        ></superviz-comments-comment-input>
      `},c=()=>{if(this.mode!=="editable")return f`
        <span
          id="comment-text"
          @click=${a}
          class="text text-big sv-gray-700 ${y}"
          >${this.text}</span
        >
      `},u=()=>{this.deleteCommentModalOpen=!1},d={"comment-item":!0,reply:!this.primaryComment},y=!this.expandElipsis&&this.text.length>120?"line-clamp":"";return f`
      <div class=${k(d)}>
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
              @click=${g=>g.stopPropagation()}
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
    `}};Zt.styles=Xl,Zt.properties={uuid:{type:String},annotationId:{type:String},avatar:{type:String},username:{type:String},text:{type:String},resolved:{type:Boolean},resolvable:{type:Boolean},createdAt:{type:String},mode:{type:String},deleteCommentModalOpen:{type:Boolean},primaryComment:{type:Boolean},expandElipsis:{type:Boolean},annotationFilter:{type:String}},Zt=S([T("superviz-comments-comment-item")],Zt);var Uo=_(E),tc=[Uo.styles,_n],jt=class extends Uo{constructor(){super();this.pinCoordinates=null;this.getCommentInput=()=>this.shadowRoot.getElementById("comment-input--textarea");this.getCommentInputContainer=()=>this.shadowRoot.getElementById("comment-input--container");this.getSendBtn=()=>this.shadowRoot.querySelector(".comment-input--send-btn");this.commentInputFocus=({detail:e})=>{this.pinCoordinates=e,this.getCommentInput().focus()};this.sendEnter=e=>{if(e.key!=="Enter"||e.shiftKey)return;let s=this.getCommentInput(),r=s.value.trim();if(!r)return;let o=this.getSendBtn();this.emitEvent(this.eventType,{text:r,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",o.disabled=!0,this.updateHeight()};this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1})};this.btnActive=!1,this.text=""}connectedCallback(){super.connectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&(window.document.body.addEventListener("comment-input-focus",this.commentInputFocus),this.addEventListener("keyup",this.sendEnter))}disconnectedCallback(){super.disconnectedCallback(),this.eventType==="create-annotation"&&window.document.body.removeEventListener("comment-input-focus",this.commentInputFocus)}updated(e){if(e.has("text")&&this.text.length>0){let s=this.getCommentInput();s.value=this.text,this.updateHeight()}if(e.has("btnActive")){let s=this.getSendBtn();s.disabled=!this.btnActive}}updateHeight(){let e=this.getCommentInput(),s=this.getCommentInputContainer();e.style.height="0px",s.style.height="0px";let r=e.scrollHeight+4,o=e.scrollHeight;e.style.height=`${r}px`,s.style.height=`${o}px`;let i=this.getSendBtn();i.disabled=!(e.value.length>0)}send(e){e.preventDefault();let s=this.getCommentInput(),r=this.getSendBtn(),o=s.value;this.emitEvent(this.eventType,{text:o,position:this.pinCoordinates},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",r.disabled=!0,this.updateHeight()}render(){let e=()=>{if(!!this.editable)return f`
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
      `},s=()=>{if(!this.editable)return f`
        <button class="comment-input--send-btn align-send-btn" disabled @click=${this.send}>
          <superviz-icon name="send" size="sm"></superviz-icon>
        </button>
      `};return f`
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
    `}};jt.styles=tc,jt.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean}},jt=S([T("superviz-comments-comment-input")],jt);var Po=_(E),ec=[Po.styles,On],qt=class extends Po{constructor(){super();this.position={x:0,y:0}}get userInitial(){var s,r,o;return(((o=(r=(s=this.annotation)==null?void 0:s.comments[0])==null?void 0:r.participant)==null?void 0:o.name)||"Anonymous")[0].toUpperCase()}emitClick(){document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:this.annotation.uuid}}))}render(){var s,r;let e={"annotation-pin":!0,"annotation-pin--active":this.active};return this.type==="add"?f`
        <div
          class=${k(e)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          <div class="annotation-pin__avatar annotation-pin__avatar--add">
            <superviz-icon name="add"></superviz-icon>
          </div>
        </div>
      `:f`
      <div
        @click=${this.emitClick}
        class=${k(e)}
        style=${`top: ${(s=this.position)==null?void 0:s.y}px; left: ${(r=this.position)==null?void 0:r.x}px; pointer-events: auto;`}
      >
        <div class="annotation-pin__avatar">
          <p class="text text-bold text-big">${this.userInitial}</p>
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
      </div>
    `}};qt.styles=ec,qt.properties={type:{type:String},annotation:{type:Object},position:{type:Object},active:{type:Boolean}},qt=S([T("superviz-comments-annotation-pin")],qt);var Vo=_(E),sc=[Vo.styles,An],Gt=class extends Vo{constructor(){super(...arguments);this.selectAnnotation=()=>{let{uuid:e}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:e}}))};this.resolveAnnotation=({detail:e})=>{let{uuid:s}=this.annotation,{resolved:r,type:o}=e,i=o==="resolve-annotation"&&this.annotationFilter==="all";this.resolved=r,this.emitEvent("resolve-annotation",{uuid:s,resolved:r}),i&&(this.shouldShowUndoResolved=!0)};this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1};this.generateExpantedCommentesTemplate=(e,s)=>s===0?f``:f`
      <superviz-comments-comment-item
        uuid=${e.uuid}
        avatar="https://picsum.photos/200/300"
        username=${e.participant.name||"Anonymous"}
        text=${e.text}
        createdAt=${e.createdAt}
        annotationId=${this.annotation.uuid}
      ></superviz-comments-comment-item>
    `}get filterIsAll(){return this.annotationFilter==="all"}get filterIsResolved(){return this.annotationFilter==="resolved"}get shouldHiddenAnnotation(){return{hidden:this.resolved&&this.filterIsAll||!this.resolved&&this.filterIsResolved}}get replies(){return[...this.annotation.comments].splice(1).length}get repliesSize(){return this.replies>=5?5:this.replies}get replyText(){return this.replies!==1?"replies":"reply"}get isSelected(){return this.selected===this.annotation.uuid}get annotationClasses(){return{"annotation-item":!0,"annotation-item--selected":this.isSelected}}get hrClasses(){return{"sv-hr":!0,hidden:this.isLastAnnotation}}get avatarCommentsClasses(){return{"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&this.replies>1,hidden:!(!this.expandComments&&this.replies>=1)}}get commentsClasses(){return{"comments-container":!0,"comment-item--expand":this.isSelected&&this.expandComments,hidden:!(this.isSelected&&this.expandComments)}}firstUpdated(){this.resolved=this.annotation.resolved}updated(e){if(e.has("selected")){let s=this.selected===this.annotation.uuid;this.expandComments=s}}createComment({detail:e}){let{text:s}=e;this.emitEvent("create-comment",{uuid:this.annotation.uuid,text:s})}generateAvatarCommentsTemplate(){var s,r;let e=[];for(let o=1;o<=this.repliesSize;o++)e.push(f`
        <div class="avatar">
          <p class="text text-bold">
            ${((r=(s=this.annotation.comments[o])==null?void 0:s.participant.name[0])==null?void 0:r.toUpperCase())||"A"}
          </p>
        </div>
      `);return f`
      ${e}
      <div class="text text-big sv-gray-500">${this.replies} ${this.replyText}</div>
    `}annotationResolvedTemplate(){return this.shouldShowUndoResolved?f`
      <superviz-comments-annotation-resolved
        @undo-resolve=${this.resolveAnnotation}
        @hide=${this.hideUndoResolved}
        class=${k({hidden:this.filterIsResolved})}
      >
      </superviz-comments-annotation-resolved>
    `:f``}render(){var e,s,r,o,i,a;return f`
      ${this.annotationResolvedTemplate()}

      <div class=${k(this.shouldHiddenAnnotation)}>
        <div class=${k(this.annotationClasses)} @click=${this.selectAnnotation}>
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

            <div class=${k(this.avatarCommentsClasses)}>
              <div class="avatar-container">${this.generateAvatarCommentsTemplate()}</div>
            </div>
          </div>

          <div class=${k(this.commentsClasses)}>
            ${(a=this.annotation.comments)==null?void 0:a.map(this.generateExpantedCommentesTemplate)}
            <superviz-comments-comment-input
              @create-comment=${this.createComment}
              eventType="create-comment"
              @click=${l=>l.stopPropagation()}
            ></superviz-comments-comment-input>
          </div>
        </div>
        <div class=${k(this.hrClasses)}></div>
      </div>
    `}};Gt.styles=sc,Gt.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String}},Gt=S([T("superviz-comments-annotation-item")],Gt);var Wo=_(E),nc=[Wo.styles],Yt=class extends Wo{constructor(){super(...arguments);this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:f`<span class="text text-big sv-gray-600">Are you sure you want to delete this comment? <br /> This action cannot be undone</span>`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))};this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{!this.open||this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{!this.open||(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(e){e.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){!this.open||(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){let e=()=>{if(!!this.useSlot)return f`<slot name="modal-handler" @click=${this.toggle}></slot>`},s=()=>{if(!!this.open)return f`
        <superviz-modal></superviz-modal>
      `};return f`
      ${e()}
      ${s()}
    `}};Yt.styles=nc,Yt.properties={open:{type:Boolean},useSlot:{type:Boolean}},Yt=S([T("superviz-comments-delete-comments-modal")],Yt);var Bo=_(E),rc=[Bo.styles,Cn],ic=10*1e3,Jt=class extends Bo{constructor(){super();this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)};this.timeToHide=ic,this.isCanceled=!1}firstUpdated(){this.setTimer()}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return this.timeToHide===0?f``:this.isCanceled?f``:f`
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
    `}};Jt.styles=rc,Jt.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},Jt=S([T("superviz-comments-annotation-resolved")],Jt);var Zo=_(E),oc=[Zo.styles,Mn],as=[{label:"All comments",code:"all"},{label:"Resolved comments",code:"resolved"}],Kt=class extends Zo{constructor(){super();this.caret="down"}render(){let e=this.filter==="all"?as[0].label:as[1].label,s=({detail:a})=>{this.emitEvent("select",{filter:a}),r()},r=()=>{this.caret=this.caret==="down"?"up":"down"},o=this.filter==="all"?as[0].code:as[1].code,i={text:!0,"text-bold":!0,"select-content":!0,"sv-gray-500":this.caret==="down","sv-gray-700":this.caret==="up"};return f`
      <div class="select">
        <div class="select-container">
          <superviz-dropdown 
            options=${JSON.stringify(as)}
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
              <span class=${k(i)}>${e}</span>
              <superviz-icon name=${this.caret} size="md"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};Kt.styles=oc,Kt.properties={filter:{type:String},caret:{type:String}},Kt=S([T("superviz-comments-annotation-filter")],Kt);var jo=_(E),ac=[jo.styles,kn],Qt=class extends jo{constructor(){super();this.isHidden=!0,this.positionStyles="top: 20px; left: 20px;",this.shouldHide=!1,this.commentsPosition="left"}toggle(){this.emitEvent("toggle",{})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("toggle-annotation-sidebar",()=>{this.isHidden=!this.isHidden})}updated(e){super.updated(e),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".float-button");if(!s)return;s.setAttribute("style",this.positionStyles);let r=window.document.body.getBoundingClientRect().width,o=s.getBoundingClientRect(),i=320;if(!this.commentsPosition||this.commentsPosition==="left"){this.shouldHide=o.x<i;return}this.shouldHide=r-o.right<i})}render(){let e={"float-button":!0,"hide-button":!this.isHidden&&this.shouldHide};return f` <button @click=${this.toggle} class="${k(e)}">
      <superviz-icon name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`}};Qt.styles=ac,Qt.properties={positionStyles:{type:String},isHidden:{type:Boolean},commentsPosition:{type:String}},Qt=S([T("superviz-comments-button")],Qt);var ls=(e=>(e.GOTO="GO TO",e.FOLLOW="FOLLOW",e))(ls||{});var gr=x`
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
`;var vr=x`
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
  }

  @media (max-width: 780px) {
    .sv-icon,
    .who-is-online-dropdown__participant {
      width: 32px;
      height: 32px;
    }
  }
`;var qo=_(E),lc=[qo.styles,gr],Xt=class extends qo{constructor(){super();this.onClickOutDropdown=({detail:e})=>{this.open=e.open};this.dropdownOptionsHandler=({detail:e})=>{};this.position="top: 20px; right: 40px;",this.open=!1,this.textColorValues=[2,4,5,7,8,16]}updateParticipants(e){this.participants=e}toggleOpen(){this.open=!this.open}dropdownPosition(e){if(this.participants.length===1)return"bottom-center";if(e===0)return"bottom-left";let s=this.participants.length>4,r=e+1===this.participants.length;return s||!r?"bottom-center":"bottom-right"}renderExcessParticipants(){let e=this.participants.length-4;if(e<=0)return f``;let s=this.participants.slice(4).map(({name:i,color:a,id:l,slotIndex:c})=>({name:i,color:a,id:l,slotIndex:c})),r={"superviz-who-is-online__participant":!0,excess_participants:!0,"excess_participants--open":this.open};return f`
      <superviz-who-is-online-dropdown
        label="label"
        returnTo="label"
        position="bottom-right"
        @selected=${this.dropdownOptionsHandler}
        participants=${JSON.stringify(s)}
        @clickout=${this.onClickOutDropdown}
      >
        <div class=${k(r)} slot="dropdown" @click=${this.toggleOpen}>
          <div class="superviz-who-is-online__excess" style="color: #AEA9B8;">+${e}</div>
        </div>
      </superviz-who-is-online-dropdown>
    `}renderParticipants(){if(!this.participants)return f``;let e=Object.values(ls).map(r=>({label:r})),s=["place","send"];return f`${this.participants.slice(0,4).map((r,o)=>{var l;let i=this.textColorValues.includes(r.slotIndex)?"#FFFFFF":"#000000",a=this.dropdownPosition(o);return f`
        <superviz-dropdown
          options=${JSON.stringify(e)}
          label="label"
          returnTo="label"
          position="${a}"
          @selected=${this.dropdownOptionsHandler}
          icons="${JSON.stringify(s)}"
          name="${r.name}"
        >
          <div
            slot="dropdown"
            class="superviz-who-is-online__participant"
            style="border-color: ${r.color}"
          >
            <div
              class="superviz-who-is-online__avatar"
              style="background-color: ${r.color}; color: ${i}"
            >
              ${(l=r.name)==null?void 0:l.at(0)}
            </div>
          </div>
        </superviz-dropdown>
      `})}
    ${this.renderExcessParticipants()} `}updated(e){super.updated(e),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".superviz-who-is-online");!s||s.setAttribute("style",this.position)})}render(){return f` <div class="superviz-who-is-online">${this.renderParticipants()}</div>`}};Xt.styles=lc,Xt.properties={position:{type:String},participants:{type:Object},open:{type:Boolean}},Xt=S([T("superviz-who-is-online")],Xt);var Go=_(E),cc=[Go.styles,vr],te=class extends Go{constructor(){super();this.onClickOutDropdown=e=>{if(e.stopPropagation(),!this.open)return;let s=e.composedPath(),r=this.shadowRoot.querySelector(".dropdown-content"),o=this.shadowRoot.querySelector(".dropdown-list"),a=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],l=s.includes(r),c=s.includes(o),u=s.includes(a);l||c||u||(this.open=!1,this.selected="",this.emitEvent("clickout",{detail:{open:this.open},bubbles:!1,composed:!1}))};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.dropdownOptionsHandler=({detail:e})=>{};this.selectParticipant=e=>()=>{this.selected=e};this.textColorValues=[2,4,5,7,8,16],this.selected=""}updated(e){e.has("open")&&(this.open?document.addEventListener("click",this.onClickOutDropdown):(document.removeEventListener("click",this.onClickOutDropdown),this.close()))}renderParticipants(){if(!this.participants)return;let e=Object.values(ls).map(r=>({label:r})),s=["place","send"];return this.participants.map(r=>{var a;let o=this.textColorValues.includes(r.slotIndex)?"#FFFFFF":"#000000",i={"who-is-online-dropdown__content":!0,"who-is-online-dropdown__content--selected":this.selected===r.id};return f`
        <superviz-dropdown
        options=${JSON.stringify(e)}
        label="label"
        returnTo="label"
        position="bottom-right"
        @selected=${this.dropdownOptionsHandler}
        icons="${JSON.stringify(s)}"
        >
        <div class=${k(i)} @click=${this.selectParticipant(r.id)} slot="dropdown">
          <div class="who-is-online-dropdown__participant" style="border-color: 
          ${r.color}">
              <div class="who-is-online-dropdown__avatar" style="background-color: ${r.color}; color: ${o}">
                ${(a=r.name)==null?void 0:a.at(0)}
              </div>
            </div>
            <span class="user-name">${r.name}</span>
            <superviz-icon class="icon" name="right" color="var(--sv-gray-600)"></superviz-icon>
          </div>
        </div>
      </superviz-dropdown>
      `})}toggleOpen(){this.open=!this.open,this.selected=""}get menuClasses(){return{menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right"}}render(){return f`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggleOpen}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <div class=${k(this.menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `}};te.styles=cc,te.properties={open:{type:Boolean},align:{type:String},position:{type:String},participants:{type:Array},selected:{type:String}},te=S([T("superviz-who-is-online-dropdown")],te);export{Ft as Comments,Kt as CommentsAnnotationFilter,Gt as CommentsAnnotationItem,qt as CommentsAnnotationPin,Jt as CommentsAnnotationResolved,Ht as CommentsAnnotations,jt as CommentsCommentInput,Zt as CommentsCommentItem,Rt as CommentsContent,Qt as CommentsFloatButton,zt as CommentsTopbar,Yt as DeleteCommentModal,Lt as Dropdown,Dt as HelloWorld,Nt as Icon,ie as Modal,oe as ModalContainer,re as PresenceMouse,Xt as WhoIsOnline,te as WhoIsOnlineDropdown};
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
