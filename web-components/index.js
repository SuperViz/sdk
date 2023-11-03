var hr=Object.defineProperty,Li=Object.defineProperties,Fi=Object.getOwnPropertyDescriptor,zi=Object.getOwnPropertyDescriptors;var us=Object.getOwnPropertySymbols;var pr=Object.prototype.hasOwnProperty,fr=Object.prototype.propertyIsEnumerable;var yr=Math.pow,mr=(n,t,e)=>t in n?hr(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,g=(n,t)=>{for(var e in t||(t={}))pr.call(t,e)&&mr(n,e,t[e]);if(us)for(var e of us(t))fr.call(t,e)&&mr(n,e,t[e]);return n},U=(n,t)=>Li(n,zi(t));var Ps=(n,t)=>{var e={};for(var s in n)pr.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&us)for(var s of us(n))t.indexOf(s)<0&&fr.call(n,s)&&(e[s]=n[s]);return e};var T=(n,t,e,s)=>{for(var r=s>1?void 0:s?Fi(t,e):t,i=n.length-1,o;i>=0;i--)(o=n[i])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&hr(t,e,r),r};var vt=(n,t,e)=>new Promise((s,r)=>{var i=l=>{try{a(e.next(l))}catch(c){r(c)}},o=l=>{try{a(e.throw(l))}catch(c){r(c)}},a=l=>l.done?s(l.value):Promise.resolve(l.value).then(i,o);a((e=e.apply(n,t)).next())});var ds=globalThis,hs=ds.ShadowRoot&&(ds.ShadyCSS===void 0||ds.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vr=Symbol(),gr=new WeakMap,ms=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==vr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(hs&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=gr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&gr.set(e,t))}return t}toString(){return this.cssText}},br=n=>new ms(typeof n=="string"?n:n+"",void 0,vr);var Vs=(n,t)=>{if(hs)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=ds.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,n.appendChild(s)}},ps=hs?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return br(e)})(n):n;var{is:Hi,defineProperty:Ri,getOwnPropertyDescriptor:Ui,getOwnPropertyNames:Pi,getOwnPropertySymbols:Vi,getPrototypeOf:Wi}=Object,lt=globalThis,xr=lt.trustedTypes,Bi=xr?xr.emptyScript:"",Ws=lt.reactiveElementPolyfillSupport,Te=(n,t)=>n,fs={toAttribute(n,t){switch(t){case Boolean:n=n?Bi:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},Bs=(n,t)=>!Hi(n,t),Er={attribute:!0,type:String,converter:fs,reflect:!1,hasChanged:Bs},Sr,wr;(Sr=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(wr=lt.litPropertyMetadata)!=null||(lt.litPropertyMetadata=new WeakMap);var bt=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Er){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Ri(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){var o;let{get:r,set:i}=(o=Ui(this.prototype,t))!=null?o:{get(){return this[e]},set(a){this[e]=a}};return{get(){return r==null?void 0:r.call(this)},set(a){let l=r==null?void 0:r.call(this);i.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:Er}static _$Ei(){if(this.hasOwnProperty(Te("elementProperties")))return;let t=Wi(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Te("properties"))){let e=this.properties,s=[...Pi(e),...Vi(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(ps(r))}else t!==void 0&&e.push(ps(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!=null?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$ES)==null||e.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return Vs(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var i;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:fs).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:fs;this._$Em=r,this[r]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s,r=!1,i){var o;if(t!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(t)),!((o=s.hasChanged)!=null?o:Bs)(r?i:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){var r;this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&((r=this._$Ej)!=null?r:this._$Ej=new Set).add(t)}_$EP(){return vt(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,o]of r)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],o)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$ES)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(e)):this._$ET()}catch(r){throw t=!1,this._$ET(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}},Tr;bt.elementStyles=[],bt.shadowRootOptions={mode:"open"},bt[Te("elementProperties")]=new Map,bt[Te("finalized")]=new Map,Ws==null||Ws({ReactiveElement:bt}),((Tr=lt.reactiveElementVersions)!=null?Tr:lt.reactiveElementVersions=[]).push("2.0.0");var _e=globalThis,ys=_e.trustedTypes,$r=ys?ys.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ir="$lit$",ct=`lit$${(Math.random()+"").slice(9)}$`,Dr="?"+ct,Zi=`<${Dr}>`,St=document,gs=()=>St.createComment(""),Ae=n=>n===null||typeof n!="object"&&typeof n!="function",Nr=Array.isArray,ji=n=>Nr(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Zs=`[ 	
\f\r]`,$e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_r=/-->/g,Ar=/>/g,xt=RegExp(`>|${Zs}(?:([^\\s"'>=/]+)(${Zs}*=${Zs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cr=/'/g,Or=/"/g,Lr=/^(?:script|style|textarea|title)$/i,Fr=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),Jl=Fr(1),Kl=Fr(2),wt=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Mr=new WeakMap,Et=St.createTreeWalker(St,129);function zr(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return $r!==void 0?$r.createHTML(t):t}var qi=(n,t)=>{let e=n.length-1,s=[],r,i=t===2?"<svg>":"",o=$e;for(let a=0;a<e;a++){let l=n[a],c,u,d=-1,y=0;for(;y<l.length&&(o.lastIndex=y,u=o.exec(l),u!==null);)y=o.lastIndex,o===$e?u[1]==="!--"?o=_r:u[1]!==void 0?o=Ar:u[2]!==void 0?(Lr.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=xt):u[3]!==void 0&&(o=xt):o===xt?u[0]===">"?(o=r!=null?r:$e,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?xt:u[3]==='"'?Or:Cr):o===Or||o===Cr?o=xt:o===_r||o===Ar?o=$e:(o=xt,r=void 0);let h=o===xt&&n[a+1].startsWith("/>")?" ":"";i+=o===$e?l+Zi:d>=0?(s.push(c),l.slice(0,d)+Ir+l.slice(d)+ct+h):l+ct+(d===-2?a:h)}return[zr(n,i+(n[e]||"<?>")+(t===2?"</svg>":"")),s]},Tt=class{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0,a=t.length-1,l=this.parts,[c,u]=qi(t,e);if(this.el=Tt.createElement(c,s),Et.currentNode=this.el.content,e===2){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=Et.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let d of r.getAttributeNames())if(d.endsWith(Ir)){let y=u[o++],h=r.getAttribute(d).split(ct),b=/([.?@])?(.*)/.exec(y);l.push({type:1,index:i,name:b[2],strings:h,ctor:b[1]==="."?Gs:b[1]==="?"?Ys:b[1]==="@"?Js:te}),r.removeAttribute(d)}else d.startsWith(ct)&&(l.push({type:6,index:i}),r.removeAttribute(d));if(Lr.test(r.tagName)){let d=r.textContent.split(ct),y=d.length-1;if(y>0){r.textContent=ys?ys.emptyScript:"";for(let h=0;h<y;h++)r.append(d[h],gs()),Et.nextNode(),l.push({type:2,index:++i});r.append(d[y],gs())}}}else if(r.nodeType===8)if(r.data===Dr)l.push({type:2,index:i});else{let d=-1;for(;(d=r.data.indexOf(ct,d+1))!==-1;)l.push({type:7,index:i}),d+=ct.length-1}i++}}static createElement(t,e){let s=St.createElement("template");return s.innerHTML=t,s}};function Qt(n,t,e=n,s){var o,a,l;if(t===wt)return t;let r=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl,i=Ae(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),i===void 0?r=void 0:(r=new i(n),r._$AT(n,e,s)),s!==void 0?((l=e._$Co)!=null?l:e._$Co=[])[s]=r:e._$Cl=r),r!==void 0&&(t=Qt(n,r._$AS(n,t.values),r,s)),t}var qs=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;let{el:{content:e},parts:s}=this._$AD,r=((c=t==null?void 0:t.creationScope)!=null?c:St).importNode(e,!0);Et.currentNode=r;let i=Et.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new Xt(i,i.nextSibling,this,t):l.type===1?u=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(u=new Ks(i,this,t)),this._$AV.push(u),l=s[++a]}o!==(l==null?void 0:l.index)&&(i=Et.nextNode(),o++)}return Et.currentNode=St,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},Xt=class{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,r){var i;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(i=r==null?void 0:r.isConnected)!=null?i:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Qt(this,t,e),Ae(t)?t===F||t==null||t===""?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==wt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ji(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==F&&Ae(this._$AH)?this._$AA.nextSibling.data=t:this.$(St.createTextNode(t)),this._$AH=t}g(t){var i;let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Tt.createElement(zr(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(e);else{let o=new qs(r,this),a=o.u(this.options);o.p(e),this.$(a),this._$AH=o}}_$AC(t){let e=Mr.get(t.strings);return e===void 0&&Mr.set(t.strings,e=new Tt(t)),e}T(t){Nr(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let i of t)r===e.length?e.push(s=new Xt(this.k(gs()),this.k(gs()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},te=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=F}_$AI(t,e=this,s,r){let i=this.strings,o=!1;if(i===void 0)t=Qt(this,t,e,0),o=!Ae(t)||t!==this._$AH&&t!==wt,o&&(this._$AH=t);else{let a=t,l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Qt(this,a[s+l],e,l),c===wt&&(c=this._$AH[l]),o||(o=!Ae(c)||c!==this._$AH[l]),c===F?t=F:t!==F&&(t+=(c!=null?c:"")+i[l+1]),this._$AH[l]=c}o&&!r&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},Gs=class extends te{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}},Ys=class extends te{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}},Js=class extends te{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){var o;if((t=(o=Qt(this,t,e,0))!=null?o:F)===wt)return;let s=this._$AH,r=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==F&&(s===F||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},Ks=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Qt(this,t)}};var js=_e.litHtmlPolyfillSupport,kr;js==null||js(Tt,Xt),((kr=_e.litHtmlVersions)!=null?kr:_e.litHtmlVersions=[]).push("3.0.0");var vs=globalThis,bs=vs.ShadowRoot&&(vs.ShadyCSS===void 0||vs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qs=Symbol(),Hr=new WeakMap,Ce=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Qs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(bs&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Hr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Hr.set(e,t))}return t}toString(){return this.cssText}},Rr=n=>new Ce(typeof n=="string"?n:n+"",void 0,Qs),x=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,r,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[i+1],n[0]);return new Ce(e,n,Qs)},Xs=(n,t)=>{if(bs)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=vs.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,n.appendChild(s)}},xs=bs?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Rr(e)})(n):n;var{is:Gi,defineProperty:Yi,getOwnPropertyDescriptor:Ji,getOwnPropertyNames:Ki,getOwnPropertySymbols:Qi,getPrototypeOf:Xi}=Object,ut=globalThis,Ur=ut.trustedTypes,ta=Ur?Ur.emptyScript:"",tn=ut.reactiveElementPolyfillSupport,Oe=(n,t)=>n,en={toAttribute(n,t){switch(t){case Boolean:n=n?ta:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch(s){e=null}}return e}},Zr=(n,t)=>!Gi(n,t),Pr={attribute:!0,type:String,converter:en,reflect:!1,hasChanged:Zr},Vr,Wr;(Vr=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(Wr=ut.litPropertyMetadata)!=null||(ut.litPropertyMetadata=new WeakMap);var st=class extends HTMLElement{static addInitializer(t){var e;this._$Ei(),((e=this.l)!=null?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Pr){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Yi(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){var o;let{get:r,set:i}=(o=Ji(this.prototype,t))!=null?o:{get(){return this[e]},set(a){this[e]=a}};return{get(){return r==null?void 0:r.call(this)},set(a){let l=r==null?void 0:r.call(this);i.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return(e=this.elementProperties.get(t))!=null?e:Pr}static _$Ei(){if(this.hasOwnProperty(Oe("elementProperties")))return;let t=Xi(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Oe("properties"))){let e=this.properties,s=[...Ki(e),...Qi(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(xs(r))}else t!==void 0&&e.push(xs(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!=null?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var e;(e=this._$ES)==null||e.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var e;let t=(e=this.shadowRoot)!=null?e:this.attachShadow(this.constructor.shadowRootOptions);return Xs(t,this.constructor.elementStyles),t}connectedCallback(){var t,e;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var i;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:en).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:en;this._$Em=r,this[r]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s,r=!1,i){var o;if(t!==void 0){if(s!=null||(s=this.constructor.getPropertyOptions(t)),!((o=s.hasChanged)!=null?o:Zr)(r?i:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){var r;this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&((r=this._$Ej)!=null?r:this._$Ej=new Set).add(t)}_$EP(){return vt(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Eg}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,o]of r)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],o)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$ES)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(e)):this._$ET()}catch(r){throw t=!1,this._$ET(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}},Br;st.elementStyles=[],st.shadowRootOptions={mode:"open"},st[Oe("elementProperties")]=new Map,st[Oe("finalized")]=new Map,tn==null||tn({ReactiveElement:st}),((Br=ut.reactiveElementVersions)!=null?Br:ut.reactiveElementVersions=[]).push("2.0.0");var ke=globalThis,Es=ke.trustedTypes,jr=Es?Es.createPolicy("lit-html",{createHTML:n=>n}):void 0,Xr="$lit$",dt=`lit$${(Math.random()+"").slice(9)}$`,to="?"+dt,ea=`<${to}>`,At=document,Ie=()=>At.createComment(""),De=n=>n===null||typeof n!="object"&&typeof n!="function",eo=Array.isArray,sa=n=>eo(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",sn=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qr=/-->/g,Gr=/>/g,$t=RegExp(`>|${sn}(?:([^\\s"'>=/]+)(${sn}*=${sn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yr=/'/g,Jr=/"/g,so=/^(?:script|style|textarea|title)$/i,no=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),f=no(1),nc=no(2),Ct=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Kr=new WeakMap,_t=At.createTreeWalker(At,129);function ro(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return jr!==void 0?jr.createHTML(t):t}var na=(n,t)=>{let e=n.length-1,s=[],r,i=t===2?"<svg>":"",o=Me;for(let a=0;a<e;a++){let l=n[a],c,u,d=-1,y=0;for(;y<l.length&&(o.lastIndex=y,u=o.exec(l),u!==null);)y=o.lastIndex,o===Me?u[1]==="!--"?o=qr:u[1]!==void 0?o=Gr:u[2]!==void 0?(so.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=$t):u[3]!==void 0&&(o=$t):o===$t?u[0]===">"?(o=r!=null?r:Me,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?$t:u[3]==='"'?Jr:Yr):o===Jr||o===Yr?o=$t:o===qr||o===Gr?o=Me:(o=$t,r=void 0);let h=o===$t&&n[a+1].startsWith("/>")?" ":"";i+=o===Me?l+ea:d>=0?(s.push(c),l.slice(0,d)+Xr+l.slice(d)+dt+h):l+dt+(d===-2?a:h)}return[ro(n,i+(n[e]||"<?>")+(t===2?"</svg>":"")),s]},Ot=class{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0,a=t.length-1,l=this.parts,[c,u]=na(t,e);if(this.el=Ot.createElement(c,s),_t.currentNode=this.el.content,e===2){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=_t.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let d of r.getAttributeNames())if(d.endsWith(Xr)){let y=u[o++],h=r.getAttribute(d).split(dt),b=/([.?@])?(.*)/.exec(y);l.push({type:1,index:i,name:b[2],strings:h,ctor:b[1]==="."?on:b[1]==="?"?an:b[1]==="@"?ln:se}),r.removeAttribute(d)}else d.startsWith(dt)&&(l.push({type:6,index:i}),r.removeAttribute(d));if(so.test(r.tagName)){let d=r.textContent.split(dt),y=d.length-1;if(y>0){r.textContent=Es?Es.emptyScript:"";for(let h=0;h<y;h++)r.append(d[h],Ie()),_t.nextNode(),l.push({type:2,index:++i});r.append(d[y],Ie())}}}else if(r.nodeType===8)if(r.data===to)l.push({type:2,index:i});else{let d=-1;for(;(d=r.data.indexOf(dt,d+1))!==-1;)l.push({type:7,index:i}),d+=dt.length-1}i++}}static createElement(t,e){let s=At.createElement("template");return s.innerHTML=t,s}};function ee(n,t,e=n,s){var o,a,l;if(t===Ct)return t;let r=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl,i=De(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),i===void 0?r=void 0:(r=new i(n),r._$AT(n,e,s)),s!==void 0?((l=e._$Co)!=null?l:e._$Co=[])[s]=r:e._$Cl=r),r!==void 0&&(t=ee(n,r._$AS(n,t.values),r,s)),t}var rn=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var c;let{el:{content:e},parts:s}=this._$AD,r=((c=t==null?void 0:t.creationScope)!=null?c:At).importNode(e,!0);_t.currentNode=r;let i=_t.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new Mt(i,i.nextSibling,this,t):l.type===1?u=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(u=new cn(i,this,t)),this._$AV.push(u),l=s[++a]}o!==(l==null?void 0:l.index)&&(i=_t.nextNode(),o++)}return _t.currentNode=At,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},Mt=class{get _$AU(){var t,e;return(e=(t=this._$AM)==null?void 0:t._$AU)!=null?e:this._$Cv}constructor(t,e,s,r){var i;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(i=r==null?void 0:r.isConnected)!=null?i:!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ee(this,t,e),De(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==Ct&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):sa(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&De(this._$AH)?this._$AA.nextSibling.data=t:this.$(At.createTextNode(t)),this._$AH=t}g(t){var i;let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ot.createElement(ro(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(e);else{let o=new rn(r,this),a=o.u(this.options);o.p(e),this.$(a),this._$AH=o}}_$AC(t){let e=Kr.get(t.strings);return e===void 0&&Kr.set(t.strings,e=new Ot(t)),e}T(t){eo(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let i of t)r===e.length?e.push(s=new Mt(this.k(Ie()),this.k(Ie()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},se=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=z}_$AI(t,e=this,s,r){let i=this.strings,o=!1;if(i===void 0)t=ee(this,t,e,0),o=!De(t)||t!==this._$AH&&t!==Ct,o&&(this._$AH=t);else{let a=t,l,c;for(t=i[0],l=0;l<i.length-1;l++)c=ee(this,a[s+l],e,l),c===Ct&&(c=this._$AH[l]),o||(o=!De(c)||c!==this._$AH[l]),c===z?t=z:t!==z&&(t+=(c!=null?c:"")+i[l+1]),this._$AH[l]=c}o&&!r&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},on=class extends se{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}},an=class extends se{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}},ln=class extends se{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){var o;if((t=(o=ee(this,t,e,0))!=null?o:z)===Ct)return;let s=this._$AH,r=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==z&&(s===z||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)==null?void 0:e.host)!=null?s:this.element,t):this._$AH.handleEvent(t)}},cn=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){ee(this,t)}};var nn=ke.litHtmlPolyfillSupport,Qr;nn==null||nn(Ot,Mt),((Qr=ke.litHtmlVersions)!=null?Qr:ke.litHtmlVersions=[]).push("3.0.0");var oo=(n,t,e)=>{var i,o;let s=(i=e==null?void 0:e.renderBefore)!=null?i:t,r=s._$litPart$;if(r===void 0){let a=(o=e==null?void 0:e.renderBefore)!=null?o:null;s._$litPart$=r=new Mt(t.insertBefore(Ie(),a),a,void 0,e!=null?e:{})}return r._$AI(n),r};var E=class extends st{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,s;let t=super.createRenderRoot();return(s=(e=this.renderOptions).renderBefore)!=null||(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=oo(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Ct}},io;E._$litElement$=!0,E["finalized"]=!0,(io=globalThis.litElementHydrateSupport)==null||io.call(globalThis,{LitElement:E});var un=globalThis.litElementPolyfillSupport;un==null||un({LitElement:E});var ao;((ao=globalThis.litElementVersions)!=null?ao:globalThis.litElementVersions=[]).push("4.0.0");var $=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var kt=class extends E{render(){return f` <div>Hello from SuperViz, ${this.name}</div> `}};kt.properties={name:{type:String}},kt.styles=x`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `,kt=T([$("superviz-hello-world")],kt);var dn=x`
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
`;var mn=x`
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
`;var hn=x`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;var pn=x`
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
`;var _=n=>{var e;class t extends n{connectedCallback(){setTimeout(()=>{var o;let r=document.getElementById("superviz-style"),i=document.createElement("style");i.innerHTML=(r==null?void 0:r.innerHTML)||"",(o=this.shadowRoot)==null||o.appendChild(i)}),super.connectedCallback()}emitEvent(r,i,o={composed:!0,bubbles:!0}){let a=new CustomEvent(r,g({detail:i},o));this.dispatchEvent(a)}}return t.styles=[dn,mn,hn,pn,(e=n.styles)!=null?e:[]],t};var lo=_(E),ra=[lo.styles],It=class extends lo{constructor(){super();this.name="",this.size="md"}render(){return f` <i class="sv-icon sv-icon-${this.name}_${this.size}"></i> `}};It.properties={name:{type:String},size:{type:String}},It.styles=[ra,x`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `],It=T([$("superviz-icon")],It);var co={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},uo=n=>(...t)=>({_$litDirective$:n,values:t}),ws=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var N=uo(class extends ws{constructor(n){var t;if(super(n),n.type!==co.ATTRIBUTE||n.name!=="class"||((t=n.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var s,r;if(this.it===void 0){this.it=new Set,n.strings!==void 0&&(this.st=new Set(n.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in t)t[i]&&!((s=this.st)!=null&&s.has(i))&&this.it.add(i);return this.render(t)}let e=n.element.classList;for(let i of this.it)i in t||(e.remove(i),this.it.delete(i));for(let i in t){let o=!!t[i];o===this.it.has(i)||((r=this.st)==null?void 0:r.has(i))||(o?(e.add(i),this.it.add(i)):(e.remove(i),this.it.delete(i)))}return wt}});var mo=x`
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
`;var ho=_(E),oa=[ho.styles,mo],Dt=class extends ho{constructor(){super(...arguments);this.onClickOutDropdown=e=>{if(e.stopPropagation(),!this.open)return;let s=e.composedPath(),r=this.shadowRoot.querySelector(".dropdown-content"),i=this.shadowRoot.querySelector(".dropdown-list"),a=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],l=s.includes(r),c=s.includes(i),u=s.includes(a);l||c||u||(this.open=!1)};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.callbackSelected=e=>{this.open=!1;let s=this.returnTo?e[this.returnTo]:e;this.emitEvent("selected",s,{bubbles:!1,composed:!1})}}updated(e){e.has("open")&&(this.open&&document.addEventListener("click",this.onClickOutDropdown),this.open||(document.removeEventListener("click",this.onClickOutDropdown),this.close()))}render(){let e={menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right"},s=this.options.map(i=>{let o={text:!0,"text-bold":!0,active:this.active===(i==null?void 0:i[this.returnTo])};return f`<li @click=${()=>this.callbackSelected(i)} class=${N(o)}>${i[this.label]}</li>`}),r=()=>{this.open=!this.open};return f`
      <div class="dropdown">
        <div class="dropdown-content" @click=${()=>r()}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <ul class=${N(e)}>
          ${s}
        </ul>
      </div>
    `}};Dt.styles=oa,Dt.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},position:{type:String},options:{type:Array},label:{type:String},returnTo:{type:String},active:{type:[String,Object]}},Dt=T([$("superviz-dropdown")],Dt);var po=x`
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
`;var ne=class extends E{constructor(){super();this.updatePresenceMouseParticipant=e=>{if(!this.shadowRoot.getElementById(`mouse-${e.id}`)){let a=this.shadowRoot.getElementById("mouse-sync"),l=document.createElement("div");l.setAttribute("id",`mouse-${e.id}`),l.setAttribute("class","mouse-follower");let c=document.createElement("div");c.setAttribute("class","pointer-mouse");let u=document.createElement("div");u.setAttribute("class","mouse-user-name"),u.innerHTML=e.name,l.appendChild(c),l.appendChild(u),a&&a.appendChild(l)}let r=this.shadowRoot.getElementById(`mouse-${e.id}`);if(!r)return;let i=this.shadowRoot.getElementById(`mouse-${e.id}`),o=this.shadowRoot.getElementById(`mouse-${e.id}`);if(i&&o){let a=i.getElementsByClassName("mouse-user-name")[0],l=o.getElementsByClassName("pointer-mouse")[0];l&&(l.style.backgroundImage=`url(https://production.cdn.superviz.com/static/pointers/${e.slotIndex}.svg)`),a&&(a.style.color=this.textColorValues.includes(e.slotIndex)?"#FFFFFF":"#000000",a.style.backgroundColor=e.color,a.innerHTML=e.name);let{containerId:c}=e,u=document.getElementById(c),d=e.mousePositionX,y=e.mousePositionY;if(c){let h=(u==null?void 0:u.clientWidth)||1,b=(u==null?void 0:u.clientHeight)||1;d=e.mousePositionX/e.originalWidth*h,y=e.mousePositionY/e.originalHeight*b}r.style.left=`${d}px`,r.style.top=`${y}px`}};this.textColorValues=[2,4,5,7,8,16]}removePresenceMouseParticipant(e){let s=this.shadowRoot.getElementById(`mouse-${e}`);s&&s.remove()}render(){return f`
      <div id="mouse-container" class="mouse-board">
        <div id="mouse-sync"></div>
      </div>
    `}};ne.styles=[po],ne=T([$("superviz-presence-mouse")],ne);var Ts=x`  
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
`;var fo=_(E),ia=[fo.styles,Ts],re=class extends fo{constructor(){super(...arguments);this.getContainer=()=>window.document.querySelector("superviz-modal-container");this.createContainer=e=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(e)};this.createModal=({detail:e})=>{this.createContainer(e),window.document.body.appendChild(this.modal)};this.destroyModal=()=>{var e;this.modal=void 0,(e=this.getContainer())==null||e.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};re.styles=ia,re=T([$("superviz-modal")],re);var yo=_(E),aa=[yo.styles,Ts],oe=class extends yo{constructor(){super(...arguments);this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))};this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(e){this.options=e}render(){let e=()=>f`
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
        `;let i=this.options.confirmLabel||"OK",o=this.options.cancelLabel||"Cancel";return this.options.confirm&&this.options.cancel?f`
          <div class="modal--footer">
            <button class="text text-bold btn btn--cancel" @click=${this.closeModal}>${o}</button>
            <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${i}</button>
          </div>
        `:f`
        <div class="modal--footer">
          <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>${i}</button>
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
    `}};oe.styles=aa,oe=T([$("superviz-modal-container")],oe);var fn=x`
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
  }

  .container-close {
    display: none;
  }

  .header {
    width: 100%;
  }

  .content {
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
`;var yn=x`
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
`;var gn=x`
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
`;var vn=x`
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
`;var bn=x`
  .comments {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 288px;
  }

  .hidden {
    display: none;
  }
`;var xn=x`
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
`;var En=x`
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
`;var Sn=x`
  .annotation-resolved {
    background: rgba(var(--sv-gray-200), 0.5);
    height: 26px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(var(--sv-gray-200));
  }
`;var wn=x`
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
`;var Tn=x`
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
`;var $n=x`
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
`;var _n=x`
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
`;var An;function Cn(n){let t=n.querySelector("#superviz-comments");if(t&&!An){let e={childList:!0,attributes:!0,characterData:!0,subtree:!0};An=new MutationObserver(s=>{s.forEach(r=>{!r.removedNodes.length||r.removedNodes.forEach(i=>{i.id==="poweredby-footer"&&la(n)})})}),An.observe(t,e)}}function la(n){let t=document.createElement("div");t.id="poweredby-footer",t.className="footer";let e=document.createElement("div");e.className="powered-by powered-by--horizontal";let s=document.createElement("a");s.href="https://superviz.com/",s.target="_blank",s.className="link";let r=document.createElement("div");r.textContent="Powered by";let i=document.createElement("img");i.width=48,i.height=8.86,i.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",e.appendChild(s),s.appendChild(r),r.appendChild(i),t.appendChild(e);let o=n.getElementById("superviz-comments");o&&o.appendChild(t),Cn(n)}var go=_(E),ca=[go.styles,fn,_n],Nt=class extends go{constructor(){super();this.annotations=[],this.annotationFilter="all",this.waterMarkState=!1}updateAnnotations(e){this.annotations=e}toggle(){this.emitEvent("toggle",{})}waterMarkStatus(e){this.waterMarkState=e}setFilter({detail:e}){let{filter:s}=e;this.annotationFilter=s}updated(e){super.updated(e),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".superviz-comments");!s||(this.waterMarkState&&Cn(this.shadowRoot),s.setAttribute("style",this.side))})}render(){let e=[this.open?"container":"container-close","superviz-comments"].join(" "),s=f` <div id="poweredby-footer" class="footer">
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
    `}};Nt.styles=ca,Nt.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String}},Nt=T([$("superviz-comments")],Nt);var ua=_(E),da=[ua.styles,yn],Lt=class extends _(E){constructor(){super();this.side="left"}close(){this.dispatchEvent(new CustomEvent("close"))}render(){return this.side==="left"?f`
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
    `}};Lt.styles=da,Lt.properties={side:{type:String}},Lt=T([$("superviz-comments-topbar")],Lt);var vo=_(E),ma=[vo.styles,gn],Ft=class extends vo{constructor(){super(...arguments);this.prepareToCreateAnnotation=s=>vt(this,[s],function*({detail:e}){this.annotation=e,yield this.updateComplete,this.emitEvent("comment-input-focus",e)});this.cancelTemporaryAnnotation=()=>{this.annotation=null};this.cancelTemporaryAnnotationEsc=e=>{(e==null?void 0:e.key)==="Escape"&&(this.annotation=null)}}createComment({detail:e}){this.emitEvent("create-annotation",e),this.annotation=null}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.addEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.addEventListener("keyup",e=>{e.key==="Escape"&&this.cancelTemporaryAnnotationEsc(e)})}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.removeEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation),window.document.body.removeEventListener("keyup",e=>{e.key==="Escape"&&this.cancelTemporaryAnnotationEsc(e)})}render(){let e={"annotations--comments-input":!0,hidden:!this.annotation};return f`
      <div class="annotations">
        <span class="text text-big text-bold annotations--add-comment-btn"
          >Click anywhere to add a comment</span
        >
        <div class=${N(e)}>
          <superviz-comments-comment-input
            @create-annotation=${this.createComment}
            eventType="create-annotation"
          >
          </superviz-comments-comment-input>
        </div>
      </div>
    `}};Ft.styles=ma,Ft.properties={annotation:{type:Object}},Ft=T([$("superviz-comments-annotations")],Ft);var bo=_(E),ha=[bo.styles,bn],zt=class extends bo{constructor(){super();this.unselectAnnotation=()=>{this.selectedAnnotation=null};this.unselectAnnotationEsc=e=>{e&&(e==null?void 0:e.key)!=="Escape"||(this.selectedAnnotation=null)};this.selectAnnotation=({detail:e})=>{let{uuid:s}=e;if(this.selectedAnnotation===s){this.selectedAnnotation=null;return}this.selectedAnnotation=s};this.annotations=[]}updated(e){super.updated(e),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(`[uuid='${this.selectedAnnotation}']`);if(!s)return;let r=this.lastCommentId===this.selectedAnnotation,i=r?0:-150,o=s.getClientRects()[0];!o||(this.scrollBy(0,o.y+i),r&&setTimeout(()=>{this.scrollBy(0,o.y+i)},200))})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("select-annotation",this.selectAnnotation),window.document.body.addEventListener("keyup",this.unselectAnnotationEsc),window.document.body.addEventListener("unselect-annotation",this.unselectAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("select-annotation",this.selectAnnotation),window.document.body.removeEventListener("keyup",this.unselectAnnotationEsc),window.document.body.removeEventListener("unselect-annotation",this.unselectAnnotation)}render(){var l,c;let e=(l=this.annotations)==null?void 0:l.filter(u=>!u.resolved),s=(c=this.annotations)==null?void 0:c.filter(u=>u.resolved),r=(u,d)=>d?(s==null?void 0:s.length)===u+1:(this.lastCommentId=e[u].uuid,(e==null?void 0:e.length)===u+1),i=(u,d,y)=>{let h=u.comments.length>0,b=r(d,y);return h?f`
            <superviz-comments-annotation-item
              annotation=${JSON.stringify(u)}
              selected="${this.selectedAnnotation}"
              ?isLastAnnotation=${b}
              annotationFilter=${this.annotationFilter}
              uuid=${u.uuid}
            >
            </superviz-comments-annotation-item>
          `:f``},o=e==null?void 0:e.map((u,d)=>i(u,d,!1)),a=s==null?void 0:s.map((u,d)=>i(u,d,!0));return f` ${o} ${a} `}};zt.styles=ha,zt.properties={annotations:{type:Object},selectedAnnotation:{type:String},annotationFilter:{type:String}},zt=T([$("superviz-comments-content")],zt);var nt=class extends Error{},$s=class extends nt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}},_s=class extends nt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}},As=class extends nt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}},rt=class extends nt{},ie=class extends nt{constructor(t){super(`Invalid unit ${t}`)}},H=class extends nt{},G=class extends nt{constructor(){super("Zone is an abstract class")}};var p="numeric",Y="short",W="long",mt={year:p,month:p,day:p},Ne={year:p,month:Y,day:p},Mn={year:p,month:Y,day:p,weekday:Y},Le={year:p,month:W,day:p},Fe={year:p,month:W,day:p,weekday:W},ze={hour:p,minute:p},He={hour:p,minute:p,second:p},Re={hour:p,minute:p,second:p,timeZoneName:Y},Ue={hour:p,minute:p,second:p,timeZoneName:W},Pe={hour:p,minute:p,hourCycle:"h23"},Ve={hour:p,minute:p,second:p,hourCycle:"h23"},We={hour:p,minute:p,second:p,hourCycle:"h23",timeZoneName:Y},Be={hour:p,minute:p,second:p,hourCycle:"h23",timeZoneName:W},Ze={year:p,month:p,day:p,hour:p,minute:p},je={year:p,month:p,day:p,hour:p,minute:p,second:p},qe={year:p,month:Y,day:p,hour:p,minute:p},Ge={year:p,month:Y,day:p,hour:p,minute:p,second:p},kn={year:p,month:Y,day:p,weekday:Y,hour:p,minute:p},Ye={year:p,month:W,day:p,hour:p,minute:p,timeZoneName:Y},Je={year:p,month:W,day:p,hour:p,minute:p,second:p,timeZoneName:Y},Ke={year:p,month:W,day:p,weekday:W,hour:p,minute:p,timeZoneName:W},Qe={year:p,month:W,day:p,weekday:W,hour:p,minute:p,second:p,timeZoneName:W};var V=class{get type(){throw new G}get name(){throw new G}get ianaName(){return this.name}get isUniversal(){throw new G}offsetName(t,e){throw new G}formatOffset(t,e){throw new G}offset(t){throw new G}equals(t){throw new G}get isValid(){throw new G}};var In=null,X=class extends V{static get instance(){return In===null&&(In=new X),In}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:e,locale:s}){return Os(t,e,s)}formatOffset(t,e){return ht(this.offset(t),e)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}};var ks={};function pa(n){return ks[n]||(ks[n]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:n,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),ks[n]}var fa={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function ya(n,t){let e=n.format(t).replace(/\u200E/g,""),s=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(e),[,r,i,o,a,l,c,u]=s;return[o,r,i,a,l,c,u]}function ga(n,t){let e=n.formatToParts(t),s=[];for(let r=0;r<e.length;r++){let{type:i,value:o}=e[r],a=fa[i];i==="era"?s[a]=o:S(a)||(s[a]=parseInt(o,10))}return s}var Ms={},L=class extends V{static create(t){return Ms[t]||(Ms[t]=new L(t)),Ms[t]}static resetCache(){Ms={},ks={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch(e){return!1}}constructor(t){super(),this.zoneName=t,this.valid=L.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:e,locale:s}){return Os(t,e,s,this.name)}formatOffset(t,e){return ht(this.offset(t),e)}offset(t){let e=new Date(t);if(isNaN(e))return NaN;let s=pa(this.name),[r,i,o,a,l,c,u]=s.formatToParts?ga(s,e):ya(s,e);a==="BC"&&(r=-Math.abs(r)+1);let y=ae({year:r,month:i,day:o,hour:l===24?0:l,minute:c,second:u,millisecond:0}),h=+e,b=h%1e3;return h-=b>=0?b:1e3+b,(y-h)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}};var xo={};function va(n,t={}){let e=JSON.stringify([n,t]),s=xo[e];return s||(s=new Intl.ListFormat(n,t),xo[e]=s),s}var Dn={};function Nn(n,t={}){let e=JSON.stringify([n,t]),s=Dn[e];return s||(s=new Intl.DateTimeFormat(n,t),Dn[e]=s),s}var Ln={};function ba(n,t={}){let e=JSON.stringify([n,t]),s=Ln[e];return s||(s=new Intl.NumberFormat(n,t),Ln[e]=s),s}var Fn={};function xa(n,t={}){let o=t,{base:e}=o,s=Ps(o,["base"]),r=JSON.stringify([n,s]),i=Fn[r];return i||(i=new Intl.RelativeTimeFormat(n,t),Fn[r]=i),i}var Xe=null;function Ea(){return Xe||(Xe=new Intl.DateTimeFormat().resolvedOptions().locale,Xe)}function Sa(n){let t=n.indexOf("-x-");t!==-1&&(n=n.substring(0,t));let e=n.indexOf("-u-");if(e===-1)return[n];{let s,r;try{s=Nn(n).resolvedOptions(),r=n}catch(a){let l=n.substring(0,e);s=Nn(l).resolvedOptions(),r=l}let{numberingSystem:i,calendar:o}=s;return[r,i,o]}}function wa(n,t,e){return(e||t)&&(n.includes("-u-")||(n+="-u"),e&&(n+=`-ca-${e}`),t&&(n+=`-nu-${t}`)),n}function Ta(n){let t=[];for(let e=1;e<=12;e++){let s=v.utc(2009,e,1);t.push(n(s))}return t}function $a(n){let t=[];for(let e=1;e<=7;e++){let s=v.utc(2016,11,13+e);t.push(n(s))}return t}function Is(n,t,e,s){let r=n.listingMode();return r==="error"?null:r==="en"?e(t):s(t)}function _a(n){return n.numberingSystem&&n.numberingSystem!=="latn"?!1:n.numberingSystem==="latn"||!n.locale||n.locale.startsWith("en")||new Intl.DateTimeFormat(n.intl).resolvedOptions().numberingSystem==="latn"}var zn=class{constructor(t,e,s){this.padTo=s.padTo||0,this.floor=s.floor||!1;let a=s,{padTo:r,floor:i}=a,o=Ps(a,["padTo","floor"]);if(!e||Object.keys(o).length>0){let l=g({useGrouping:!1},s);s.padTo>0&&(l.minimumIntegerDigits=s.padTo),this.inf=ba(t,l)}}format(t){if(this.inf){let e=this.floor?Math.floor(t):t;return this.inf.format(e)}else{let e=this.floor?Math.floor(t):le(t,3);return k(e,this.padTo)}}},Hn=class{constructor(t,e,s){this.opts=s,this.originalZone=void 0;let r;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){let o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&L.create(a).valid?(r=a,this.dt=t):(r="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,r=t.zone.name):(r="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);let i=g({},this.opts);i.timeZone=i.timeZone||r,this.dtf=Nn(e,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(e=>{if(e.type==="timeZoneName"){let s=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return U(g({},e),{value:s})}else return e}):t}resolvedOptions(){return this.dtf.resolvedOptions()}},Rn=class{constructor(t,e,s){this.opts=g({style:"long"},s),!e&&Ds()&&(this.rtf=xa(t,s))}format(t,e){return this.rtf?this.rtf.format(t,e):Eo(e,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,e){return this.rtf?this.rtf.formatToParts(t,e):[]}},A=class{static fromOpts(t){return A.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)}static create(t,e,s,r=!1){let i=t||O.defaultLocale,o=i||(r?"en-US":Ea()),a=e||O.defaultNumberingSystem,l=s||O.defaultOutputCalendar;return new A(o,a,l,i)}static resetCache(){Xe=null,Dn={},Ln={},Fn={}}static fromObject({locale:t,numberingSystem:e,outputCalendar:s}={}){return A.create(t,e,s)}constructor(t,e,s,r){let[i,o,a]=Sa(t);this.locale=i,this.numberingSystem=e||o||null,this.outputCalendar=s||a||null,this.intl=wa(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=_a(this)),this.fastNumbersCached}listingMode(){let t=this.isEnglish(),e=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&e?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:A.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone(U(g({},t),{defaultToEN:!0}))}redefaultToSystem(t={}){return this.clone(U(g({},t),{defaultToEN:!1}))}months(t,e=!1){return Is(this,t,Un,()=>{let s=e?{month:t,day:"numeric"}:{month:t},r=e?"format":"standalone";return this.monthsCache[r][t]||(this.monthsCache[r][t]=Ta(i=>this.extract(i,s,"month"))),this.monthsCache[r][t]})}weekdays(t,e=!1){return Is(this,t,Pn,()=>{let s=e?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},r=e?"format":"standalone";return this.weekdaysCache[r][t]||(this.weekdaysCache[r][t]=$a(i=>this.extract(i,s,"weekday"))),this.weekdaysCache[r][t]})}meridiems(){return Is(this,void 0,()=>Vn,()=>{if(!this.meridiemCache){let t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[v.utc(2016,11,13,9),v.utc(2016,11,13,19)].map(e=>this.extract(e,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Is(this,t,Wn,()=>{let e={era:t};return this.eraCache[t]||(this.eraCache[t]=[v.utc(-40,1,1),v.utc(2017,1,1)].map(s=>this.extract(s,e,"era"))),this.eraCache[t]})}extract(t,e,s){let r=this.dtFormatter(t,e),i=r.formatToParts(),o=i.find(a=>a.type.toLowerCase()===s);return o?o.value:null}numberFormatter(t={}){return new zn(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,e={}){return new Hn(t,this.intl,e)}relFormatter(t={}){return new Rn(this.intl,this.isEnglish(),t)}listFormatter(t={}){return va(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}};var Zn=null,I=class extends V{static get utcInstance(){return Zn===null&&(Zn=new I(0)),Zn}static instance(t){return t===0?I.utcInstance:new I(t)}static parseSpecifier(t){if(t){let e=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(e)return new I(Ht(e[1],e[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${ht(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${ht(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,e){return ht(this.fixed,e)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}};var ce=class extends V{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function J(n,t){let e;if(S(n)||n===null)return t;if(n instanceof V)return n;if(So(n)){let s=n.toLowerCase();return s==="default"?t:s==="local"||s==="system"?X.instance:s==="utc"||s==="gmt"?I.utcInstance:I.parseSpecifier(s)||L.create(n)}else return tt(n)?I.instance(n):typeof n=="object"&&"offset"in n&&typeof n.offset=="function"?n:new ce(n)}var wo=()=>Date.now(),To="system",$o=null,_o=null,Ao=null,Co=60,Oo,O=class{static get now(){return wo}static set now(t){wo=t}static set defaultZone(t){To=t}static get defaultZone(){return J(To,X.instance)}static get defaultLocale(){return $o}static set defaultLocale(t){$o=t}static get defaultNumberingSystem(){return _o}static set defaultNumberingSystem(t){_o=t}static get defaultOutputCalendar(){return Ao}static set defaultOutputCalendar(t){Ao=t}static get twoDigitCutoffYear(){return Co}static set twoDigitCutoffYear(t){Co=t%100}static get throwOnInvalid(){return Oo}static set throwOnInvalid(t){Oo=t}static resetCaches(){A.resetCache(),L.resetCache()}};function S(n){return typeof n=="undefined"}function tt(n){return typeof n=="number"}function ts(n){return typeof n=="number"&&n%1===0}function So(n){return typeof n=="string"}function Mo(n){return Object.prototype.toString.call(n)==="[object Date]"}function Ds(){try{return typeof Intl!="undefined"&&!!Intl.RelativeTimeFormat}catch(n){return!1}}function ko(n){return Array.isArray(n)?n:[n]}function jn(n,t,e){if(n.length!==0)return n.reduce((s,r)=>{let i=[t(r),r];return s&&e(s[0],i[0])===s[0]?s:i},null)[1]}function Io(n,t){return t.reduce((e,s)=>(e[s]=n[s],e),{})}function pt(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function et(n,t,e){return ts(n)&&n>=t&&n<=e}function Aa(n,t){return n-t*Math.floor(n/t)}function k(n,t=2){let e=n<0,s;return e?s="-"+(""+-n).padStart(t,"0"):s=(""+n).padStart(t,"0"),s}function ot(n){if(!(S(n)||n===null||n===""))return parseInt(n,10)}function ft(n){if(!(S(n)||n===null||n===""))return parseFloat(n)}function es(n){if(!(S(n)||n===null||n==="")){let t=parseFloat("0."+n)*1e3;return Math.floor(t)}}function le(n,t,e=!1){let s=yr(10,t);return(e?Math.trunc:Math.round)(n*s)/s}function Rt(n){return n%4===0&&(n%100!==0||n%400===0)}function Ut(n){return Rt(n)?366:365}function ue(n,t){let e=Aa(t-1,12)+1,s=n+(t-e)/12;return e===2?Rt(s)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][e-1]}function ae(n){let t=Date.UTC(n.year,n.month-1,n.day,n.hour,n.minute,n.second,n.millisecond);return n.year<100&&n.year>=0&&(t=new Date(t),t.setUTCFullYear(n.year,n.month-1,n.day)),+t}function de(n){let t=(n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400))%7,e=n-1,s=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7;return t===4||s===3?53:52}function ss(n){return n>99?n:n>O.twoDigitCutoffYear?1900+n:2e3+n}function Os(n,t,e,s=null){let r=new Date(n),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};s&&(i.timeZone=s);let o=g({timeZoneName:t},i),a=new Intl.DateTimeFormat(e,o).formatToParts(r).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function Ht(n,t){let e=parseInt(n,10);Number.isNaN(e)&&(e=0);let s=parseInt(t,10)||0,r=e<0||Object.is(e,-0)?-s:s;return e*60+r}function qn(n){let t=Number(n);if(typeof n=="boolean"||n===""||Number.isNaN(t))throw new H(`Invalid unit value ${n}`);return t}function me(n,t){let e={};for(let s in n)if(pt(n,s)){let r=n[s];if(r==null)continue;e[t(s)]=qn(r)}return e}function ht(n,t){let e=Math.trunc(Math.abs(n/60)),s=Math.trunc(Math.abs(n%60)),r=n>=0?"+":"-";switch(t){case"short":return`${r}${k(e,2)}:${k(s,2)}`;case"narrow":return`${r}${e}${s>0?`:${s}`:""}`;case"techie":return`${r}${k(e,2)}${k(s,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function ns(n){return Io(n,["hour","minute","second","millisecond"])}var Ca=["January","February","March","April","May","June","July","August","September","October","November","December"],Gn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Oa=["J","F","M","A","M","J","J","A","S","O","N","D"];function Un(n){switch(n){case"narrow":return[...Oa];case"short":return[...Gn];case"long":return[...Ca];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var Yn=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Jn=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Ma=["M","T","W","T","F","S","S"];function Pn(n){switch(n){case"narrow":return[...Ma];case"short":return[...Jn];case"long":return[...Yn];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var Vn=["AM","PM"],ka=["Before Christ","Anno Domini"],Ia=["BC","AD"],Da=["B","A"];function Wn(n){switch(n){case"narrow":return[...Da];case"short":return[...Ia];case"long":return[...ka];default:return null}}function Do(n){return Vn[n.hour<12?0:1]}function No(n,t){return Pn(t)[n.weekday-1]}function Lo(n,t){return Un(t)[n.month-1]}function Fo(n,t){return Wn(t)[n.year<0?0:1]}function Eo(n,t,e="always",s=!1){let r={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(n)===-1;if(e==="auto"&&i){let d=n==="days";switch(t){case 1:return d?"tomorrow":`next ${r[n][0]}`;case-1:return d?"yesterday":`last ${r[n][0]}`;case 0:return d?"today":`this ${r[n][0]}`;default:}}let o=Object.is(t,-0)||t<0,a=Math.abs(t),l=a===1,c=r[n],u=s?l?c[1]:c[2]||c[1]:l?r[n][0]:n;return o?`${a} ${u} ago`:`in ${a} ${u}`}function zo(n,t){let e="";for(let s of n)s.literal?e+=s.val:e+=t(s.val);return e}var Na={D:mt,DD:Ne,DDD:Le,DDDD:Fe,t:ze,tt:He,ttt:Re,tttt:Ue,T:Pe,TT:Ve,TTT:We,TTTT:Be,f:Ze,ff:qe,fff:Ye,ffff:Ke,F:je,FF:Ge,FFF:Je,FFFF:Qe},D=class{static create(t,e={}){return new D(t,e)}static parseFormat(t){let e=null,s="",r=!1,i=[];for(let o=0;o<t.length;o++){let a=t.charAt(o);a==="'"?(s.length>0&&i.push({literal:r||/^\s+$/.test(s),val:s}),e=null,s="",r=!r):r||a===e?s+=a:(s.length>0&&i.push({literal:/^\s+$/.test(s),val:s}),s=a,e=a)}return s.length>0&&i.push({literal:r||/^\s+$/.test(s),val:s}),i}static macroTokenToFormatOpts(t){return Na[t]}constructor(t,e){this.opts=e,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,e){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,g(g({},this.opts),e)).format()}dtFormatter(t,e={}){return this.loc.dtFormatter(t,g(g({},this.opts),e))}formatDateTime(t,e){return this.dtFormatter(t,e).format()}formatDateTimeParts(t,e){return this.dtFormatter(t,e).formatToParts()}formatInterval(t,e){return this.dtFormatter(t.start,e).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,e){return this.dtFormatter(t,e).resolvedOptions()}num(t,e=0){if(this.opts.forceSimple)return k(t,e);let s=g({},this.opts);return e>0&&(s.padTo=e),this.loc.numberFormatter(s).format(t)}formatDateTimeFromString(t,e){let s=this.loc.listingMode()==="en",r=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(h,b)=>this.loc.extract(t,h,b),o=h=>t.isOffsetFixed&&t.offset===0&&h.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,h.format):"",a=()=>s?Do(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,b)=>s?Lo(t,h):i(b?{month:h}:{month:h,day:"numeric"},"month"),c=(h,b)=>s?No(t,h):i(b?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),u=h=>{let b=D.macroTokenToFormatOpts(h);return b?this.formatWithSystemDefault(t,b):h},d=h=>s?Fo(t,h):i({era:h},"era"),y=h=>{switch(h){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return r?i({day:"numeric"},"day"):this.num(t.day);case"dd":return r?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return r?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return r?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return r?i({month:"numeric"},"month"):this.num(t.month);case"MM":return r?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return r?i({year:"numeric"},"year"):this.num(t.year);case"yy":return r?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return r?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return r?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return u(h)}};return zo(D.parseFormat(e),y)}formatDurationFromString(t,e){let s=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},r=l=>c=>{let u=s(c);return u?this.num(l.get(u),c.length):c},i=D.parseFormat(e),o=i.reduce((l,{literal:c,val:u})=>c?l:l.concat(u),[]),a=t.shiftTo(...o.map(s).filter(l=>l));return zo(i,r(a))}};var R=class{constructor(t,e){this.reason=t,this.explanation=e}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}};var Ro=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function pe(...n){let t=n.reduce((e,s)=>e+s.source,"");return RegExp(`^${t}$`)}function fe(...n){return t=>n.reduce(([e,s,r],i)=>{let[o,a,l]=i(t,r);return[g(g({},e),o),a||s,l]},[{},null,1]).slice(0,2)}function ye(n,...t){if(n==null)return[null,null];for(let[e,s]of t){let r=e.exec(n);if(r)return s(r)}return[null,null]}function Uo(...n){return(t,e)=>{let s={},r;for(r=0;r<n.length;r++)s[n[r]]=ot(t[e+r]);return[s,null,e+r]}}var Po=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,La=`(?:${Po.source}?(?:\\[(${Ro.source})\\])?)?`,Kn=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Vo=RegExp(`${Kn.source}${La}`),Qn=RegExp(`(?:T${Vo.source})?`),Fa=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,za=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Ha=/(\d{4})-?(\d{3})/,Ra=Uo("weekYear","weekNumber","weekDay"),Ua=Uo("year","ordinal"),Pa=/(\d{4})-(\d\d)-(\d\d)/,Wo=RegExp(`${Kn.source} ?(?:${Po.source}|(${Ro.source}))?`),Va=RegExp(`(?: ${Wo.source})?`);function he(n,t,e){let s=n[t];return S(s)?e:ot(s)}function Wa(n,t){return[{year:he(n,t),month:he(n,t+1,1),day:he(n,t+2,1)},null,t+3]}function ge(n,t){return[{hours:he(n,t,0),minutes:he(n,t+1,0),seconds:he(n,t+2,0),milliseconds:es(n[t+3])},null,t+4]}function rs(n,t){let e=!n[t]&&!n[t+1],s=Ht(n[t+1],n[t+2]),r=e?null:I.instance(s);return[{},r,t+3]}function os(n,t){let e=n[t]?L.create(n[t]):null;return[{},e,t+1]}var Ba=RegExp(`^T?${Kn.source}$`),Za=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function ja(n){let[t,e,s,r,i,o,a,l,c]=n,u=t[0]==="-",d=l&&l[0]==="-",y=(h,b=!1)=>h!==void 0&&(b||h&&u)?-h:h;return[{years:y(ft(e)),months:y(ft(s)),weeks:y(ft(r)),days:y(ft(i)),hours:y(ft(o)),minutes:y(ft(a)),seconds:y(ft(l),l==="-0"),milliseconds:y(es(c),d)}]}var qa={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Xn(n,t,e,s,r,i,o){let a={year:t.length===2?ss(ot(t)):ot(t),month:Gn.indexOf(e)+1,day:ot(s),hour:ot(r),minute:ot(i)};return o&&(a.second=ot(o)),n&&(a.weekday=n.length>3?Yn.indexOf(n)+1:Jn.indexOf(n)+1),a}var Ga=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Ya(n){let[,t,e,s,r,i,o,a,l,c,u,d]=n,y=Xn(t,r,s,e,i,o,a),h;return l?h=qa[l]:c?h=0:h=Ht(u,d),[y,new I(h)]}function Ja(n){return n.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var Ka=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Qa=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Xa=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Ho(n){let[,t,e,s,r,i,o,a]=n;return[Xn(t,r,s,e,i,o,a),I.utcInstance]}function tl(n){let[,t,e,s,r,i,o,a]=n;return[Xn(t,a,e,s,r,i,o),I.utcInstance]}var el=pe(Fa,Qn),sl=pe(za,Qn),nl=pe(Ha,Qn),rl=pe(Vo),Bo=fe(Wa,ge,rs,os),ol=fe(Ra,ge,rs,os),il=fe(Ua,ge,rs,os),al=fe(ge,rs,os);function Zo(n){return ye(n,[el,Bo],[sl,ol],[nl,il],[rl,al])}function jo(n){return ye(Ja(n),[Ga,Ya])}function qo(n){return ye(n,[Ka,Ho],[Qa,Ho],[Xa,tl])}function Go(n){return ye(n,[Za,ja])}var ll=fe(ge);function Yo(n){return ye(n,[Ba,ll])}var cl=pe(Pa,Va),ul=pe(Wo),dl=fe(ge,rs,os);function Jo(n){return ye(n,[cl,Bo],[ul,dl])}var Ko="Invalid Duration",Xo={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},ml=g({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},Xo),B=146097/400,ve=146097/4800,hl=g({years:{quarters:4,months:12,weeks:B/7,days:B,hours:B*24,minutes:B*24*60,seconds:B*24*60*60,milliseconds:B*24*60*60*1e3},quarters:{months:3,weeks:B/28,days:B/4,hours:B*24/4,minutes:B*24*60/4,seconds:B*24*60*60/4,milliseconds:B*24*60*60*1e3/4},months:{weeks:ve/7,days:ve,hours:ve*24,minutes:ve*24*60,seconds:ve*24*60*60,milliseconds:ve*24*60*60*1e3}},Xo),Pt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],pl=Pt.slice(0).reverse();function yt(n,t,e=!1){let s={values:e?t.values:g(g({},n.values),t.values||{}),loc:n.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||n.conversionAccuracy,matrix:t.matrix||n.matrix};return new w(s)}function ti(n,t){var s;let e=(s=t.milliseconds)!=null?s:0;for(let r of pl.slice(1))t[r]&&(e+=t[r]*n[r].milliseconds);return e}function Qo(n,t){let e=ti(n,t)<0?-1:1;Pt.reduceRight((s,r)=>{if(S(t[r]))return s;if(s){let i=t[s]*e,o=n[r][s],a=Math.floor(i/o);t[r]+=a*e,t[s]-=a*o*e}return r},null),Pt.reduce((s,r)=>{if(S(t[r]))return s;if(s){let i=t[s]%1;t[s]-=i,t[r]+=i*n[s][r]}return r},null)}function fl(n){let t={};for(let[e,s]of Object.entries(n))s!==0&&(t[e]=s);return t}var w=class{constructor(t){let e=t.conversionAccuracy==="longterm"||!1,s=e?hl:ml;t.matrix&&(s=t.matrix),this.values=t.values,this.loc=t.loc||A.create(),this.conversionAccuracy=e?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=s,this.isLuxonDuration=!0}static fromMillis(t,e){return w.fromObject({milliseconds:t},e)}static fromObject(t,e={}){if(t==null||typeof t!="object")throw new H(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new w({values:me(t,w.normalizeUnit),loc:A.fromObject(e),conversionAccuracy:e.conversionAccuracy,matrix:e.matrix})}static fromDurationLike(t){if(tt(t))return w.fromMillis(t);if(w.isDuration(t))return t;if(typeof t=="object")return w.fromObject(t);throw new H(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,e){let[s]=Go(t);return s?w.fromObject(s,e):w.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,e){let[s]=Yo(t);return s?w.fromObject(s,e):w.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,e=null){if(!t)throw new H("need to specify a reason the Duration is invalid");let s=t instanceof R?t:new R(t,e);if(O.throwOnInvalid)throw new As(s);return new w({invalid:s})}static normalizeUnit(t){let e={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!e)throw new ie(t);return e}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,e={}){let s=U(g({},e),{floor:e.round!==!1&&e.floor!==!1});return this.isValid?D.create(this.loc,s).formatDurationFromString(this,t):Ko}toHuman(t={}){if(!this.isValid)return Ko;let e=Pt.map(s=>{let r=this.values[s];return S(r)?null:this.loc.numberFormatter(U(g({style:"unit",unitDisplay:"long"},t),{unit:s.slice(0,-1)})).format(r)}).filter(s=>s);return this.loc.listFormatter(g({type:"conjunction",style:t.listStyle||"narrow"},t)).format(e)}toObject(){return this.isValid?g({},this.values):{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=le(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;let e=this.toMillis();return e<0||e>=864e5?null:(t=U(g({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},t),{includeOffset:!1}),v.fromMillis(e,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?ti(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;let e=w.fromDurationLike(t),s={};for(let r of Pt)(pt(e.values,r)||pt(this.values,r))&&(s[r]=e.get(r)+this.get(r));return yt(this,{values:s},!0)}minus(t){if(!this.isValid)return this;let e=w.fromDurationLike(t);return this.plus(e.negate())}mapUnits(t){if(!this.isValid)return this;let e={};for(let s of Object.keys(this.values))e[s]=qn(t(this.values[s],s));return yt(this,{values:e},!0)}get(t){return this[w.normalizeUnit(t)]}set(t){if(!this.isValid)return this;let e=g(g({},this.values),me(t,w.normalizeUnit));return yt(this,{values:e})}reconfigure({locale:t,numberingSystem:e,conversionAccuracy:s,matrix:r}={}){let o={loc:this.loc.clone({locale:t,numberingSystem:e}),matrix:r,conversionAccuracy:s};return yt(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;let t=this.toObject();return Qo(this.matrix,t),yt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;let t=fl(this.normalize().shiftToAll().toObject());return yt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>w.normalizeUnit(o));let e={},s={},r=this.toObject(),i;for(let o of Pt)if(t.indexOf(o)>=0){i=o;let a=0;for(let c in s)a+=this.matrix[c][o]*s[c],s[c]=0;tt(r[o])&&(a+=r[o]);let l=Math.trunc(a);e[o]=l,s[o]=(a*1e3-l*1e3)/1e3}else tt(r[o])&&(s[o]=r[o]);for(let o in s)s[o]!==0&&(e[i]+=o===i?s[o]:s[o]/this.matrix[i][o]);return Qo(this.matrix,e),yt(this,{values:e},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let t={};for(let e of Object.keys(this.values))t[e]=this.values[e]===0?0:-this.values[e];return yt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function e(s,r){return s===void 0||s===0?r===void 0||r===0:s===r}for(let s of Pt)if(!e(this.values[s],t.values[s]))return!1;return!0}};var be="Invalid Interval";function yl(n,t){return!n||!n.isValid?M.invalid("missing or invalid start"):!t||!t.isValid?M.invalid("missing or invalid end"):t<n?M.invalid("end before start",`The end of an interval must be after its start, but you had start=${n.toISO()} and end=${t.toISO()}`):null}var M=class{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,e=null){if(!t)throw new H("need to specify a reason the Interval is invalid");let s=t instanceof R?t:new R(t,e);if(O.throwOnInvalid)throw new _s(s);return new M({invalid:s})}static fromDateTimes(t,e){let s=xe(t),r=xe(e),i=yl(s,r);return i==null?new M({start:s,end:r}):i}static after(t,e){let s=w.fromDurationLike(e),r=xe(t);return M.fromDateTimes(r,r.plus(s))}static before(t,e){let s=w.fromDurationLike(e),r=xe(t);return M.fromDateTimes(r.minus(s),r)}static fromISO(t,e){let[s,r]=(t||"").split("/",2);if(s&&r){let i,o;try{i=v.fromISO(s,e),o=i.isValid}catch(c){o=!1}let a,l;try{a=v.fromISO(r,e),l=a.isValid}catch(c){l=!1}if(o&&l)return M.fromDateTimes(i,a);if(o){let c=w.fromISO(r,e);if(c.isValid)return M.after(i,c)}else if(l){let c=w.fromISO(s,e);if(c.isValid)return M.before(a,c)}}return M.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds"){if(!this.isValid)return NaN;let e=this.start.startOf(t),s=this.end.startOf(t);return Math.floor(s.diff(e,t).get(t))+(s.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:e}={}){return this.isValid?M.fromDateTimes(t||this.s,e||this.e):this}splitAt(...t){if(!this.isValid)return[];let e=t.map(xe).filter(o=>this.contains(o)).sort(),s=[],{s:r}=this,i=0;for(;r<this.e;){let o=e[i]||this.e,a=+o>+this.e?this.e:o;s.push(M.fromDateTimes(r,a)),r=a,i+=1}return s}splitBy(t){let e=w.fromDurationLike(t);if(!this.isValid||!e.isValid||e.as("milliseconds")===0)return[];let{s}=this,r=1,i,o=[];for(;s<this.e;){let a=this.start.plus(e.mapUnits(l=>l*r));i=+a>+this.e?this.e:a,o.push(M.fromDateTimes(s,i)),s=i,r+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;let e=this.s>t.s?this.s:t.s,s=this.e<t.e?this.e:t.e;return e>=s?null:M.fromDateTimes(e,s)}union(t){if(!this.isValid)return this;let e=this.s<t.s?this.s:t.s,s=this.e>t.e?this.e:t.e;return M.fromDateTimes(e,s)}static merge(t){let[e,s]=t.sort((r,i)=>r.s-i.s).reduce(([r,i],o)=>i?i.overlaps(o)||i.abutsStart(o)?[r,i.union(o)]:[r.concat([i]),o]:[r,o],[[],null]);return s&&e.push(s),e}static xor(t){let e=null,s=0,r=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),o=Array.prototype.concat(...i),a=o.sort((l,c)=>l.time-c.time);for(let l of a)s+=l.type==="s"?1:-1,s===1?e=l.time:(e&&+e!=+l.time&&r.push(M.fromDateTimes(e,l.time)),e=null);return M.merge(r)}difference(...t){return M.xor([this].concat(t)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:be}toLocaleString(t=mt,e={}){return this.isValid?D.create(this.s.loc.clone(e),t).formatInterval(this):be}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:be}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:be}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:be}toFormat(t,{separator:e=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(t)}${e}${this.e.toFormat(t)}`:be}toDuration(t,e){return this.isValid?this.e.diff(this.s,t,e):w.invalid(this.invalidReason)}mapEndpoints(t){return M.fromDateTimes(t(this.s),t(this.e))}};var it=class{static hasDST(t=O.defaultZone){let e=v.now().setZone(t).set({month:12});return!t.isUniversal&&e.offset!==e.set({month:6}).offset}static isValidIANAZone(t){return L.isValidZone(t)}static normalizeZone(t){return J(t,O.defaultZone)}static months(t="long",{locale:e=null,numberingSystem:s=null,locObj:r=null,outputCalendar:i="gregory"}={}){return(r||A.create(e,s,i)).months(t)}static monthsFormat(t="long",{locale:e=null,numberingSystem:s=null,locObj:r=null,outputCalendar:i="gregory"}={}){return(r||A.create(e,s,i)).months(t,!0)}static weekdays(t="long",{locale:e=null,numberingSystem:s=null,locObj:r=null}={}){return(r||A.create(e,s,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:e=null,numberingSystem:s=null,locObj:r=null}={}){return(r||A.create(e,s,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return A.create(t).meridiems()}static eras(t="short",{locale:e=null}={}){return A.create(e,null,"gregory").eras(t)}static features(){return{relative:Ds()}}};function ei(n,t){let e=r=>r.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),s=e(t)-e(n);return Math.floor(w.fromMillis(s).as("days"))}function gl(n,t,e){let s=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{let u=ei(l,c);return(u-u%7)/7}],["days",ei]],r={},i=n,o,a;for(let[l,c]of s)e.indexOf(l)>=0&&(o=l,r[l]=c(n,t),a=i.plus(r),a>t?(r[l]--,n=i.plus(r),n>t&&(a=n,r[l]--,n=i.plus(r))):n=a);return[n,r,a,o]}function si(n,t,e,s){let[r,i,o,a]=gl(n,t,e),l=t-r,c=e.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);c.length===0&&(o<t&&(o=r.plus({[a]:1})),o!==r&&(i[a]=(i[a]||0)+l/(o-r)));let u=w.fromObject(i,s);return c.length>0?w.fromMillis(l,s).shiftTo(...c).plus(u):u}var tr={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},ni={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},vl=tr.hanidec.replace(/[\[|\]]/g,"").split("");function ri(n){let t=parseInt(n,10);if(isNaN(t)){t="";for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(n[e].search(tr.hanidec)!==-1)t+=vl.indexOf(n[e]);else for(let r in ni){let[i,o]=ni[r];s>=i&&s<=o&&(t+=s-i)}}return parseInt(t,10)}else return t}function Z({numberingSystem:n},t=""){return new RegExp(`${tr[n||"latn"]}${t}`)}var bl="missing Intl.DateTimeFormat.formatToParts support";function C(n,t=e=>e){return{regex:n,deser:([e])=>t(ri(e))}}var xl=String.fromCharCode(160),ai=`[ ${xl}]`,li=new RegExp(ai,"g");function El(n){return n.replace(/\./g,"\\.?").replace(li,ai)}function oi(n){return n.replace(/\./g,"").replace(li," ").toLowerCase()}function K(n,t){return n===null?null:{regex:RegExp(n.map(El).join("|")),deser:([e])=>n.findIndex(s=>oi(e)===oi(s))+t}}function ii(n,t){return{regex:n,deser:([,e,s])=>Ht(e,s),groups:t}}function Ns(n){return{regex:n,deser:([t])=>t}}function Sl(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function wl(n,t){let e=Z(t),s=Z(t,"{2}"),r=Z(t,"{3}"),i=Z(t,"{4}"),o=Z(t,"{6}"),a=Z(t,"{1,2}"),l=Z(t,"{1,3}"),c=Z(t,"{1,6}"),u=Z(t,"{1,9}"),d=Z(t,"{2,4}"),y=Z(t,"{4,6}"),h=P=>({regex:RegExp(Sl(P.val)),deser:([gt])=>gt,literal:!0}),q=(P=>{if(n.literal)return h(P);switch(P.val){case"G":return K(t.eras("short"),0);case"GG":return K(t.eras("long"),0);case"y":return C(c);case"yy":return C(d,ss);case"yyyy":return C(i);case"yyyyy":return C(y);case"yyyyyy":return C(o);case"M":return C(a);case"MM":return C(s);case"MMM":return K(t.months("short",!0),1);case"MMMM":return K(t.months("long",!0),1);case"L":return C(a);case"LL":return C(s);case"LLL":return K(t.months("short",!1),1);case"LLLL":return K(t.months("long",!1),1);case"d":return C(a);case"dd":return C(s);case"o":return C(l);case"ooo":return C(r);case"HH":return C(s);case"H":return C(a);case"hh":return C(s);case"h":return C(a);case"mm":return C(s);case"m":return C(a);case"q":return C(a);case"qq":return C(s);case"s":return C(a);case"ss":return C(s);case"S":return C(l);case"SSS":return C(r);case"u":return Ns(u);case"uu":return Ns(a);case"uuu":return C(e);case"a":return K(t.meridiems(),0);case"kkkk":return C(i);case"kk":return C(d,ss);case"W":return C(a);case"WW":return C(s);case"E":case"c":return C(e);case"EEE":return K(t.weekdays("short",!1),1);case"EEEE":return K(t.weekdays("long",!1),1);case"ccc":return K(t.weekdays("short",!0),1);case"cccc":return K(t.weekdays("long",!0),1);case"Z":case"ZZ":return ii(new RegExp(`([+-]${a.source})(?::(${s.source}))?`),2);case"ZZZ":return ii(new RegExp(`([+-]${a.source})(${s.source})?`),2);case"z":return Ns(/[a-z_+-/]{1,256}?/i);case" ":return Ns(/[^\S\n\r]/);default:return h(P)}})(n)||{invalidReason:bl};return q.token=n,q}var Tl={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function $l(n,t,e){let{type:s,value:r}=n;if(s==="literal"){let l=/^\s+$/.test(r);return{literal:!l,val:l?" ":r}}let i=t[s],o=s;s==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=e.hour12?"hour12":"hour24");let a=Tl[o];if(typeof a=="object"&&(a=a[i]),a)return{literal:!1,val:a}}function _l(n){return[`^${n.map(e=>e.regex).reduce((e,s)=>`${e}(${s.source})`,"")}$`,n]}function Al(n,t,e){let s=n.match(t);if(s){let r={},i=1;for(let o in e)if(pt(e,o)){let a=e[o],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(r[a.token.val[0]]=a.deser(s.slice(i,i+l))),i+=l}return[s,r]}else return[s,{}]}function Cl(n){let t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},e=null,s;return S(n.z)||(e=L.create(n.z)),S(n.Z)||(e||(e=new I(n.Z)),s=n.Z),S(n.q)||(n.M=(n.q-1)*3+1),S(n.h)||(n.h<12&&n.a===1?n.h+=12:n.h===12&&n.a===0&&(n.h=0)),n.G===0&&n.y&&(n.y=-n.y),S(n.u)||(n.S=es(n.u)),[Object.keys(n).reduce((i,o)=>{let a=t(o);return a&&(i[a]=n[o]),i},{}),e,s]}var er=null;function Ol(){return er||(er=v.fromMillis(1555555555555)),er}function Ml(n,t){if(n.literal)return n;let e=D.macroTokenToFormatOpts(n.val),s=rr(e,t);return s==null||s.includes(void 0)?n:s}function sr(n,t){return Array.prototype.concat(...n.map(e=>Ml(e,t)))}function nr(n,t,e){let s=sr(D.parseFormat(e),n),r=s.map(o=>wl(o,n)),i=r.find(o=>o.invalidReason);if(i)return{input:t,tokens:s,invalidReason:i.invalidReason};{let[o,a]=_l(r),l=RegExp(o,"i"),[c,u]=Al(t,l,a),[d,y,h]=u?Cl(u):[null,null,void 0];if(pt(u,"a")&&pt(u,"H"))throw new rt("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:s,regex:l,rawMatches:c,matches:u,result:d,zone:y,specificOffset:h}}}function ci(n,t,e){let{result:s,zone:r,specificOffset:i,invalidReason:o}=nr(n,t,e);return[s,r,i,o]}function rr(n,t){if(!n)return null;let s=D.create(t,n).dtFormatter(Ol()),r=s.formatToParts(),i=s.resolvedOptions();return r.map(o=>$l(o,n,i))}var ui=[0,31,59,90,120,151,181,212,243,273,304,334],di=[0,31,60,91,121,152,182,213,244,274,305,335];function j(n,t){return new R("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${n}, which is invalid`)}function mi(n,t,e){let s=new Date(Date.UTC(n,t-1,e));n<100&&n>=0&&s.setUTCFullYear(s.getUTCFullYear()-1900);let r=s.getUTCDay();return r===0?7:r}function hi(n,t,e){return e+(Rt(n)?di:ui)[t-1]}function pi(n,t){let e=Rt(n)?di:ui,s=e.findIndex(i=>i<t),r=t-e[s];return{month:s+1,day:r}}function Ls(n){let{year:t,month:e,day:s}=n,r=hi(t,e,s),i=mi(t,e,s),o=Math.floor((r-i+10)/7),a;return o<1?(a=t-1,o=de(a)):o>de(t)?(a=t+1,o=1):a=t,g({weekYear:a,weekNumber:o,weekday:i},ns(n))}function or(n){let{weekYear:t,weekNumber:e,weekday:s}=n,r=mi(t,1,4),i=Ut(t),o=e*7+s-r-3,a;o<1?(a=t-1,o+=Ut(a)):o>i?(a=t+1,o-=Ut(t)):a=t;let{month:l,day:c}=pi(a,o);return g({year:a,month:l,day:c},ns(n))}function Fs(n){let{year:t,month:e,day:s}=n,r=hi(t,e,s);return g({year:t,ordinal:r},ns(n))}function ir(n){let{year:t,ordinal:e}=n,{month:s,day:r}=pi(t,e);return g({year:t,month:s,day:r},ns(n))}function fi(n){let t=ts(n.weekYear),e=et(n.weekNumber,1,de(n.weekYear)),s=et(n.weekday,1,7);return t?e?s?!1:j("weekday",n.weekday):j("week",n.week):j("weekYear",n.weekYear)}function yi(n){let t=ts(n.year),e=et(n.ordinal,1,Ut(n.year));return t?e?!1:j("ordinal",n.ordinal):j("year",n.year)}function ar(n){let t=ts(n.year),e=et(n.month,1,12),s=et(n.day,1,ue(n.year,n.month));return t?e?s?!1:j("day",n.day):j("month",n.month):j("year",n.year)}function lr(n){let{hour:t,minute:e,second:s,millisecond:r}=n,i=et(t,0,23)||t===24&&e===0&&s===0&&r===0,o=et(e,0,59),a=et(s,0,59),l=et(r,0,999);return i?o?a?l?!1:j("millisecond",r):j("second",s):j("minute",e):j("hour",t)}var cr="Invalid DateTime",gi=864e13;function zs(n){return new R("unsupported zone",`the zone "${n.name}" is not supported`)}function ur(n){return n.weekData===null&&(n.weekData=Ls(n.c)),n.weekData}function Vt(n,t){let e={ts:n.ts,zone:n.zone,c:n.c,o:n.o,loc:n.loc,invalid:n.invalid};return new v(U(g(g({},e),t),{old:e}))}function Ti(n,t,e){let s=n-t*60*1e3,r=e.offset(s);if(t===r)return[s,t];s-=(r-t)*60*1e3;let i=e.offset(s);return r===i?[s,r]:[n-Math.min(r,i)*60*1e3,Math.max(r,i)]}function Hs(n,t){n+=t*60*1e3;let e=new Date(n);return{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate(),hour:e.getUTCHours(),minute:e.getUTCMinutes(),second:e.getUTCSeconds(),millisecond:e.getUTCMilliseconds()}}function Us(n,t,e){return Ti(ae(n),t,e)}function vi(n,t){let e=n.o,s=n.c.year+Math.trunc(t.years),r=n.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i=U(g({},n.c),{year:s,month:r,day:Math.min(n.c.day,ue(s,r))+Math.trunc(t.days)+Math.trunc(t.weeks)*7}),o=w.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=ae(i),[l,c]=Ti(a,e,n.zone);return o!==0&&(l+=o,c=n.zone.offset(l)),{ts:l,o:c}}function is(n,t,e,s,r,i){let{setZone:o,zone:a}=e;if(n&&Object.keys(n).length!==0||t){let l=t||a,c=v.fromObject(n,U(g({},e),{zone:l,specificOffset:i}));return o?c:c.setZone(a)}else return v.invalid(new R("unparsable",`the input "${r}" can't be parsed as ${s}`))}function Rs(n,t,e=!0){return n.isValid?D.create(A.create("en-US"),{allowZ:e,forceSimple:!0}).formatDateTimeFromString(n,t):null}function dr(n,t){let e=n.c.year>9999||n.c.year<0,s="";return e&&n.c.year>=0&&(s+="+"),s+=k(n.c.year,e?6:4),t?(s+="-",s+=k(n.c.month),s+="-",s+=k(n.c.day)):(s+=k(n.c.month),s+=k(n.c.day)),s}function bi(n,t,e,s,r,i){let o=k(n.c.hour);return t?(o+=":",o+=k(n.c.minute),(n.c.millisecond!==0||n.c.second!==0||!e)&&(o+=":")):o+=k(n.c.minute),(n.c.millisecond!==0||n.c.second!==0||!e)&&(o+=k(n.c.second),(n.c.millisecond!==0||!s)&&(o+=".",o+=k(n.c.millisecond,3))),r&&(n.isOffsetFixed&&n.offset===0&&!i?o+="Z":n.o<0?(o+="-",o+=k(Math.trunc(-n.o/60)),o+=":",o+=k(Math.trunc(-n.o%60))):(o+="+",o+=k(Math.trunc(n.o/60)),o+=":",o+=k(Math.trunc(n.o%60)))),i&&(o+="["+n.zone.ianaName+"]"),o}var $i={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},kl={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Il={ordinal:1,hour:0,minute:0,second:0,millisecond:0},_i=["year","month","day","hour","minute","second","millisecond"],Dl=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Nl=["year","ordinal","hour","minute","second","millisecond"];function xi(n){let t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[n.toLowerCase()];if(!t)throw new ie(n);return t}function Ei(n,t){let e=J(t.zone,O.defaultZone),s=A.fromObject(t),r=O.now(),i,o;if(S(n.year))i=r;else{for(let c of _i)S(n[c])&&(n[c]=$i[c]);let a=ar(n)||lr(n);if(a)return v.invalid(a);let l=e.offset(r);[i,o]=Us(n,l,e)}return new v({ts:i,zone:e,loc:s,o})}function Si(n,t,e){let s=S(e.round)?!0:e.round,r=(o,a)=>(o=le(o,s||e.calendary?0:2,!0),t.loc.clone(e).relFormatter(e).format(o,a)),i=o=>e.calendary?t.hasSame(n,o)?0:t.startOf(o).diff(n.startOf(o),o).get(o):t.diff(n,o).get(o);if(e.unit)return r(i(e.unit),e.unit);for(let o of e.units){let a=i(o);if(Math.abs(a)>=1)return r(a,o)}return r(n>t?-0:0,e.units[e.units.length-1])}function wi(n){let t={},e;return n.length>0&&typeof n[n.length-1]=="object"?(t=n[n.length-1],e=Array.from(n).slice(0,n.length-1)):e=Array.from(n),[t,e]}var v=class{constructor(t){let e=t.zone||O.defaultZone,s=t.invalid||(Number.isNaN(t.ts)?new R("invalid input"):null)||(e.isValid?null:zs(e));this.ts=S(t.ts)?O.now():t.ts;let r=null,i=null;if(!s)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(e))[r,i]=[t.old.c,t.old.o];else{let a=e.offset(this.ts);r=Hs(this.ts,a),s=Number.isNaN(r.year)?new R("invalid input"):null,r=s?null:r,i=s?null:a}this._zone=e,this.loc=t.loc||A.create(),this.invalid=s,this.weekData=null,this.c=r,this.o=i,this.isLuxonDateTime=!0}static now(){return new v({})}static local(){let[t,e]=wi(arguments),[s,r,i,o,a,l,c]=e;return Ei({year:s,month:r,day:i,hour:o,minute:a,second:l,millisecond:c},t)}static utc(){let[t,e]=wi(arguments),[s,r,i,o,a,l,c]=e;return t.zone=I.utcInstance,Ei({year:s,month:r,day:i,hour:o,minute:a,second:l,millisecond:c},t)}static fromJSDate(t,e={}){let s=Mo(t)?t.valueOf():NaN;if(Number.isNaN(s))return v.invalid("invalid input");let r=J(e.zone,O.defaultZone);return r.isValid?new v({ts:s,zone:r,loc:A.fromObject(e)}):v.invalid(zs(r))}static fromMillis(t,e={}){if(tt(t))return t<-gi||t>gi?v.invalid("Timestamp out of range"):new v({ts:t,zone:J(e.zone,O.defaultZone),loc:A.fromObject(e)});throw new H(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,e={}){if(tt(t))return new v({ts:t*1e3,zone:J(e.zone,O.defaultZone),loc:A.fromObject(e)});throw new H("fromSeconds requires a numerical input")}static fromObject(t,e={}){t=t||{};let s=J(e.zone,O.defaultZone);if(!s.isValid)return v.invalid(zs(s));let r=O.now(),i=S(e.specificOffset)?s.offset(r):e.specificOffset,o=me(t,xi),a=!S(o.ordinal),l=!S(o.year),c=!S(o.month)||!S(o.day),u=l||c,d=o.weekYear||o.weekNumber,y=A.fromObject(e);if((u||a)&&d)throw new rt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&a)throw new rt("Can't mix ordinal dates with month/day");let h=d||o.weekday&&!u,b,q,P=Hs(r,i);h?(b=Dl,q=kl,P=Ls(P)):a?(b=Nl,q=Il,P=Fs(P)):(b=_i,q=$i);let gt=!1;for(let at of b){let we=o[at];S(we)?gt?o[at]=q[at]:o[at]=P[at]:gt=!0}let ls=h?fi(o):a?yi(o):ar(o),Ee=ls||lr(o);if(Ee)return v.invalid(Ee);let Q=h?or(o):a?ir(o):o,[Se,cs]=Us(Q,i,s),Kt=new v({ts:Se,zone:s,o:cs,loc:y});return o.weekday&&u&&t.weekday!==Kt.weekday?v.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${Kt.toISO()}`):Kt}static fromISO(t,e={}){let[s,r]=Zo(t);return is(s,r,e,"ISO 8601",t)}static fromRFC2822(t,e={}){let[s,r]=jo(t);return is(s,r,e,"RFC 2822",t)}static fromHTTP(t,e={}){let[s,r]=qo(t);return is(s,r,e,"HTTP",e)}static fromFormat(t,e,s={}){if(S(t)||S(e))throw new H("fromFormat requires an input string and a format");let{locale:r=null,numberingSystem:i=null}=s,o=A.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0}),[a,l,c,u]=ci(o,t,e);return u?v.invalid(u):is(a,l,s,`format ${e}`,t,c)}static fromString(t,e,s={}){return v.fromFormat(t,e,s)}static fromSQL(t,e={}){let[s,r]=Jo(t);return is(s,r,e,"SQL",t)}static invalid(t,e=null){if(!t)throw new H("need to specify a reason the DateTime is invalid");let s=t instanceof R?t:new R(t,e);if(O.throwOnInvalid)throw new $s(s);return new v({invalid:s})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,e={}){let s=rr(t,A.fromObject(e));return s?s.map(r=>r?r.val:null).join(""):null}static expandFormat(t,e={}){return sr(D.parseFormat(t),A.fromObject(e)).map(r=>r.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?ur(this).weekYear:NaN}get weekNumber(){return this.isValid?ur(this).weekNumber:NaN}get weekday(){return this.isValid?ur(this).weekday:NaN}get ordinal(){return this.isValid?Fs(this.c).ordinal:NaN}get monthShort(){return this.isValid?it.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?it.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?it.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?it.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let t=864e5,e=6e4,s=ae(this.c),r=this.zone.offset(s-t),i=this.zone.offset(s+t),o=this.zone.offset(s-r*e),a=this.zone.offset(s-i*e);if(o===a)return[this];let l=s-o*e,c=s-a*e,u=Hs(l,o),d=Hs(c,a);return u.hour===d.hour&&u.minute===d.minute&&u.second===d.second&&u.millisecond===d.millisecond?[Vt(this,{ts:l}),Vt(this,{ts:c})]:[this]}get isInLeapYear(){return Rt(this.year)}get daysInMonth(){return ue(this.year,this.month)}get daysInYear(){return this.isValid?Ut(this.year):NaN}get weeksInWeekYear(){return this.isValid?de(this.weekYear):NaN}resolvedLocaleOptions(t={}){let{locale:e,numberingSystem:s,calendar:r}=D.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:e,numberingSystem:s,outputCalendar:r}}toUTC(t=0,e={}){return this.setZone(I.instance(t),e)}toLocal(){return this.setZone(O.defaultZone)}setZone(t,{keepLocalTime:e=!1,keepCalendarTime:s=!1}={}){if(t=J(t,O.defaultZone),t.equals(this.zone))return this;if(t.isValid){let r=this.ts;if(e||s){let i=t.offset(this.ts),o=this.toObject();[r]=Us(o,i,t)}return Vt(this,{ts:r,zone:t})}else return v.invalid(zs(t))}reconfigure({locale:t,numberingSystem:e,outputCalendar:s}={}){let r=this.loc.clone({locale:t,numberingSystem:e,outputCalendar:s});return Vt(this,{loc:r})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;let e=me(t,xi),s=!S(e.weekYear)||!S(e.weekNumber)||!S(e.weekday),r=!S(e.ordinal),i=!S(e.year),o=!S(e.month)||!S(e.day),a=i||o,l=e.weekYear||e.weekNumber;if((a||r)&&l)throw new rt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(o&&r)throw new rt("Can't mix ordinal dates with month/day");let c;s?c=or(g(g({},Ls(this.c)),e)):S(e.ordinal)?(c=g(g({},this.toObject()),e),S(e.day)&&(c.day=Math.min(ue(c.year,c.month),c.day))):c=ir(g(g({},Fs(this.c)),e));let[u,d]=Us(c,this.o,this.zone);return Vt(this,{ts:u,o:d})}plus(t){if(!this.isValid)return this;let e=w.fromDurationLike(t);return Vt(this,vi(this,e))}minus(t){if(!this.isValid)return this;let e=w.fromDurationLike(t).negate();return Vt(this,vi(this,e))}startOf(t){if(!this.isValid)return this;let e={},s=w.normalizeUnit(t);switch(s){case"years":e.month=1;case"quarters":case"months":e.day=1;case"weeks":case"days":e.hour=0;case"hours":e.minute=0;case"minutes":e.second=0;case"seconds":e.millisecond=0;break;case"milliseconds":break}if(s==="weeks"&&(e.weekday=1),s==="quarters"){let r=Math.ceil(this.month/3);e.month=(r-1)*3+1}return this.set(e)}endOf(t){return this.isValid?this.plus({[t]:1}).startOf(t).minus(1):this}toFormat(t,e={}){return this.isValid?D.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this,t):cr}toLocaleString(t=mt,e={}){return this.isValid?D.create(this.loc.clone(e),t).formatDateTime(this):cr}toLocaleParts(t={}){return this.isValid?D.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:e=!1,suppressMilliseconds:s=!1,includeOffset:r=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;let o=t==="extended",a=dr(this,o);return a+="T",a+=bi(this,o,e,s,r,i),a}toISODate({format:t="extended"}={}){return this.isValid?dr(this,t==="extended"):null}toISOWeekDate(){return Rs(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:e=!1,includeOffset:s=!0,includePrefix:r=!1,extendedZone:i=!1,format:o="extended"}={}){return this.isValid?(r?"T":"")+bi(this,o==="extended",e,t,s,i):null}toRFC2822(){return Rs(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Rs(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?dr(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:e=!1,includeOffsetSpace:s=!0}={}){let r="HH:mm:ss.SSS";return(e||t)&&(s&&(r+=" "),e?r+="z":t&&(r+="ZZ")),Rs(this,r,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():cr}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};let e=g({},this.c);return t.includeConfig&&(e.outputCalendar=this.outputCalendar,e.numberingSystem=this.loc.numberingSystem,e.locale=this.loc.locale),e}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,e="milliseconds",s={}){if(!this.isValid||!t.isValid)return w.invalid("created by diffing an invalid DateTime");let r=g({locale:this.locale,numberingSystem:this.numberingSystem},s),i=ko(e).map(w.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,l=o?t:this,c=si(a,l,i,r);return o?c.negate():c}diffNow(t="milliseconds",e={}){return this.diff(v.now(),t,e)}until(t){return this.isValid?M.fromDateTimes(this,t):this}hasSame(t,e){if(!this.isValid)return!1;let s=t.valueOf(),r=this.setZone(t.zone,{keepLocalTime:!0});return r.startOf(e)<=s&&s<=r.endOf(e)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;let e=t.base||v.fromObject({},{zone:this.zone}),s=t.padding?this<e?-t.padding:t.padding:0,r=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(r=t.unit,i=void 0),Si(e,this.plus(s),U(g({},t),{numeric:"always",units:r,unit:i}))}toRelativeCalendar(t={}){return this.isValid?Si(t.base||v.fromObject({},{zone:this.zone}),this,U(g({},t),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...t){if(!t.every(v.isDateTime))throw new H("min requires all arguments be DateTimes");return jn(t,e=>e.valueOf(),Math.min)}static max(...t){if(!t.every(v.isDateTime))throw new H("max requires all arguments be DateTimes");return jn(t,e=>e.valueOf(),Math.max)}static fromFormatExplain(t,e,s={}){let{locale:r=null,numberingSystem:i=null}=s,o=A.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return nr(o,t,e)}static fromStringExplain(t,e,s={}){return v.fromFormatExplain(t,e,s)}static get DATE_SHORT(){return mt}static get DATE_MED(){return Ne}static get DATE_MED_WITH_WEEKDAY(){return Mn}static get DATE_FULL(){return Le}static get DATE_HUGE(){return Fe}static get TIME_SIMPLE(){return ze}static get TIME_WITH_SECONDS(){return He}static get TIME_WITH_SHORT_OFFSET(){return Re}static get TIME_WITH_LONG_OFFSET(){return Ue}static get TIME_24_SIMPLE(){return Pe}static get TIME_24_WITH_SECONDS(){return Ve}static get TIME_24_WITH_SHORT_OFFSET(){return We}static get TIME_24_WITH_LONG_OFFSET(){return Be}static get DATETIME_SHORT(){return Ze}static get DATETIME_SHORT_WITH_SECONDS(){return je}static get DATETIME_MED(){return qe}static get DATETIME_MED_WITH_SECONDS(){return Ge}static get DATETIME_MED_WITH_WEEKDAY(){return kn}static get DATETIME_FULL(){return Ye}static get DATETIME_FULL_WITH_SECONDS(){return Je}static get DATETIME_HUGE(){return Ke}static get DATETIME_HUGE_WITH_SECONDS(){return Qe}};function xe(n){if(v.isDateTime(n))return n;if(n&&n.valueOf&&tt(n.valueOf()))return v.fromJSDate(n);if(n&&typeof n=="object")return v.fromObject(n);throw new H(`Unknown datetime argument: ${n}, of type ${typeof n}`)}var Ai=_(E),Ll=[Ai.styles,vn],Wt=class extends Ai{constructor(){super();this.updateComment=({detail:e})=>{let{text:s}=e;this.text=s,this.closeEditMode(),this.emitEvent("update-comment",{uuid:this.uuid,text:s})};this.resolveAnnotation=e=>{e.stopPropagation(),this.emitEvent("resolve-annotation",{type:"resolve-annotation",resolved:!this.resolved},{composed:!1,bubbles:!1})};this.confirmDelete=()=>{if(this.deleteCommentModalOpen=!1,this.primaryComment)return this.emitEvent("delete-annotation",{uuid:this.annotationId});this.emitEvent("delete-comment",{annotationId:this.annotationId,uuid:this.uuid})};this.closeEditMode=()=>{this.mode="readonly"};this.resolved=!1}render(){var h;let e=this.annotationFilter==="all"?"resolve":"undo",s=b=>v.fromISO(b).toFormat("yyyy-dd-MM"),r=this.resolvable?"comment-item__resolve":"hidden",i=[{label:"EDIT"},{label:"DELETE"}],o=({detail:b})=>{b==="EDIT"&&(this.mode="editable"),b==="DELETE"&&(this.deleteCommentModalOpen=!0)},a=()=>{this.text.length<120||(this.expandElipsis=!0)},l=()=>{if(this.mode==="editable")return f`
        <superviz-comments-comment-input
          class="comment-item--editable"
          editable
          @click=${b=>b.stopPropagation()}
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
      <div class=${N(d)}>
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
              options=${JSON.stringify(i)}
              label="label"
              returnTo="label"
              position="bottom-right"
              @selected=${o}
              @click=${b=>b.stopPropagation()}
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
    `}};Wt.styles=Ll,Wt.properties={uuid:{type:String},annotationId:{type:String},avatar:{type:String},username:{type:String},text:{type:String},resolved:{type:Boolean},resolvable:{type:Boolean},createdAt:{type:String},mode:{type:String},deleteCommentModalOpen:{type:Boolean},primaryComment:{type:Boolean},expandElipsis:{type:Boolean},annotationFilter:{type:String}},Wt=T([$("superviz-comments-comment-item")],Wt);var Ci=_(E),Fl=[Ci.styles,xn],Bt=class extends Ci{constructor(){super();this.pinCoordinates=null;this.getCommentInput=()=>this.shadowRoot.getElementById("comment-input--textarea");this.getCommentInputContainer=()=>this.shadowRoot.getElementById("comment-input--container");this.getSendBtn=()=>this.shadowRoot.querySelector(".comment-input--send-btn");this.commentInputFocus=({detail:e})=>{this.pinCoordinates=e,this.getCommentInput().focus()};this.sendEnter=e=>{var o,a,l,c,u,d,y,h;if(e.key!=="Enter"||e.shiftKey)return;let s=this.getCommentInput(),r=s.value.trim();if(!r)return;let i=this.getSendBtn();this.emitEvent(this.eventType,{text:r,position:{x:(a=(o=this.pinCoordinates)==null?void 0:o.x)!=null?a:null,y:(c=(l=this.pinCoordinates)==null?void 0:l.y)!=null?c:null,z:(d=(u=this.pinCoordinates)==null?void 0:u.z)!=null?d:null,type:(h=(y=this.pinCoordinates)==null?void 0:y.type)!=null?h:null}},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",i.disabled=!0,this.updateHeight()};this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1})};this.btnActive=!1,this.text=""}connectedCallback(){super.connectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&(window.document.body.addEventListener("comment-input-focus",this.commentInputFocus),this.addEventListener("keyup",this.sendEnter))}disconnectedCallback(){super.disconnectedCallback(),this.eventType==="create-annotation"&&window.document.body.removeEventListener("comment-input-focus",this.commentInputFocus)}updated(e){if(e.has("text")&&this.text.length>0){let s=this.getCommentInput();s.value=this.text,this.updateHeight()}if(e.has("btnActive")){let s=this.getSendBtn();s.disabled=!this.btnActive}}updateHeight(){let e=this.getCommentInput(),s=this.getCommentInputContainer();e.style.height="0px",s.style.height="0px";let r=e.scrollHeight+4,i=e.scrollHeight;e.style.height=`${r}px`,s.style.height=`${i}px`;let o=this.getSendBtn();o.disabled=!(e.value.length>0)}send(e){var o,a,l,c,u,d,y,h;e.preventDefault();let s=this.getCommentInput(),r=this.getSendBtn(),i=s.value;this.emitEvent(this.eventType,{text:i,position:{x:(a=(o=this.pinCoordinates)==null?void 0:o.x)!=null?a:null,y:(c=(l=this.pinCoordinates)==null?void 0:l.y)!=null?c:null,z:(d=(u=this.pinCoordinates)==null?void 0:u.z)!=null?d:null,type:(h=(y=this.pinCoordinates)==null?void 0:y.type)!=null?h:null}},{composed:!1,bubbles:!1}),this.pinCoordinates=null,s.value="",r.disabled=!0,this.updateHeight()}render(){let e=()=>{if(!!this.editable)return f`
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
    `}};Bt.styles=Fl,Bt.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean}},Bt=T([$("superviz-comments-comment-input")],Bt);var Oi=_(E),zl=[Oi.styles,wn],Zt=class extends Oi{constructor(){super();this.position={x:0,y:0}}get userInitial(){var s,r,i;return(((i=(r=(s=this.annotation)==null?void 0:s.comments[0])==null?void 0:r.participant)==null?void 0:i.name)||"Anonymous")[0].toUpperCase()}emitClick(){document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:this.annotation.uuid}}))}render(){var s,r;let e={"annotation-pin":!0,"annotation-pin--active":this.active};return this.type==="add"?f`
        <div
          class=${N(e)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          <div class="annotation-pin__avatar annotation-pin__avatar--add">
            <superviz-icon name="add"></superviz-icon>
          </div>
        </div>
      `:f`
      <div
        @click=${this.emitClick}
        class=${N(e)}
        style=${`top: ${(s=this.position)==null?void 0:s.y}px; left: ${(r=this.position)==null?void 0:r.x}px; pointer-events: auto;`}
      >
        <div class="annotation-pin__avatar">
          <p class="text text-bold text-big">${this.userInitial}</p>
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
      </div>
    `}};Zt.styles=zl,Zt.properties={type:{type:String},annotation:{type:Object},position:{type:Object},active:{type:Boolean}},Zt=T([$("superviz-comments-annotation-pin")],Zt);var Mi=_(E),Hl=[Mi.styles,En],jt=class extends Mi{constructor(){super(...arguments);this.selectAnnotation=()=>{let{uuid:e}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:e}}))};this.resolveAnnotation=({detail:e})=>{let{uuid:s}=this.annotation,{resolved:r,type:i}=e,o=i==="resolve-annotation"&&this.annotationFilter==="all";this.resolved=r,this.emitEvent("resolve-annotation",{uuid:s,resolved:r}),o&&(this.shouldShowUndoResolved=!0)};this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1}}firstUpdated(){this.resolved=this.annotation.resolved}updated(e){if(e.has("selected")){let s=this.selected===this.annotation.uuid;this.expandComments=s}}createComment({detail:e}){let{text:s}=e;this.emitEvent("create-comment",{uuid:this.annotation.uuid,text:s})}render(){var b,q,P,gt,ls,Ee;let e=this.annotationFilter==="all",s=this.annotationFilter==="resolved",r=[...this.annotation.comments].splice(1).length,i=this.selected===this.annotation.uuid,o={"annotation-item":!0,"annotation-item--selected":i},a={hidden:this.resolved&&e||!this.resolved&&s},l={"sv-hr":!0,hidden:this.isLastAnnotation},c={"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&r>1,hidden:!(!this.expandComments&&r>=1)},u={"comments-container":!0,"comment-item--expand":i&&this.expandComments,hidden:!(i&&this.expandComments)},d=()=>{var Kt,at;let Q=r>=5?5:r,Se=r!==1?"replies":"reply",cs=[];for(let we=1;we<=Q;we++)cs.push(f`
          <div class="avatar">
            <p class="text text-bold">
              ${((at=(Kt=this.annotation.comments[we])==null?void 0:Kt.participant.name[0])==null?void 0:at.toUpperCase())||"A"}
            </p>
          </div>
        `);return f`
        ${cs}
        <div class="text text-big sv-gray-500">${r} ${Se}</div>
      `},y=(Q,Se)=>Se===0?f``:f`
        <superviz-comments-comment-item
          uuid=${Q.uuid}
          avatar="https://picsum.photos/200/300"
          username=${Q.participant.name||"Anonymous"}
          text=${Q.text}
          createdAt=${Q.createdAt}
          annotationId=${this.annotation.uuid}
        ></superviz-comments-comment-item>
      `;return f`
      ${(()=>this.shouldShowUndoResolved?f`
        <superviz-comments-annotation-resolved
          @undo-resolve=${this.resolveAnnotation}
          @hide=${this.hideUndoResolved}
          class=${N({hidden:s})}
        >
        </superviz-comments-annotation-resolved>
      `:f``)()}

      <div class=${N(a)}>
        <div class=${N(o)} @click=${this.selectAnnotation}>
          <div>
            <superviz-comments-comment-item
              uuid=${(b=this.annotation.comments)==null?void 0:b[0].uuid}
              annotationId=${this.annotation.uuid}
              username=${((P=(q=this.annotation.comments)==null?void 0:q[0].participant)==null?void 0:P.name)||"Anonymous"}
              text=${(gt=this.annotation.comments)==null?void 0:gt[0].text}
              createdAt=${(ls=this.annotation.comments)==null?void 0:ls[0].createdAt}
              primaryComment
              resolvable
              ?resolved=${this.resolved}
              annotationFilter=${this.annotationFilter}
              @resolve-annotation=${this.resolveAnnotation}
            ></superviz-comments-comment-item>

            <div class=${N(c)}>
              <div class="avatar-container">${d()}</div>
            </div>
          </div>

          <div class=${N(u)}>
            ${(Ee=this.annotation.comments)==null?void 0:Ee.map(y)}
            <superviz-comments-comment-input
              @create-comment=${this.createComment}
              eventType="create-comment"
              @click=${Q=>Q.stopPropagation()}
            ></superviz-comments-comment-input>
          </div>
        </div>
        <div class=${N(l)}></div>
      </div>
    `}};jt.styles=Hl,jt.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean,reflect:!0},isLastAnnotation:{type:Boolean},annotationFilter:{type:String}},jt=T([$("superviz-comments-annotation-item")],jt);var ki=_(E),Rl=[ki.styles],qt=class extends ki{constructor(){super(...arguments);this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:f`<span class="text text-big sv-gray-600">Are you sure you want to delete this comment? <br /> This action cannot be undone</span>`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))};this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{!this.open||this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{!this.open||(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(e){e.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){!this.open||(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){let e=()=>{if(!!this.useSlot)return f`<slot name="modal-handler" @click=${this.toggle}></slot>`},s=()=>{if(!!this.open)return f`
        <superviz-modal></superviz-modal>
      `};return f`
      ${e()}
      ${s()}
    `}};qt.styles=Rl,qt.properties={open:{type:Boolean},useSlot:{type:Boolean}},qt=T([$("superviz-comments-delete-comments-modal")],qt);var Ii=_(E),Ul=[Ii.styles,Sn],Pl=10*1e3,Gt=class extends Ii{constructor(){super();this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)};this.timeToHide=Pl,this.isCanceled=!1}firstUpdated(){this.setTimer()}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return this.timeToHide===0?f``:this.isCanceled?f``:f`
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
    `}};Gt.styles=Ul,Gt.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},Gt=T([$("superviz-comments-annotation-resolved")],Gt);var Di=_(E),Vl=[Di.styles,Tn],as=[{label:"All comments",code:"all"},{label:"Resolved comments",code:"resolved"}],Yt=class extends Di{constructor(){super();this.caret="down"}render(){let e=this.filter==="all"?as[0].label:as[1].label,s=({detail:a})=>{this.emitEvent("select",{filter:a}),r()},r=()=>{this.caret=this.caret==="down"?"up":"down"},i=this.filter==="all"?as[0].code:as[1].code,o={text:!0,"text-bold":!0,"select-content":!0,"sv-gray-500":this.caret==="down","sv-gray-700":this.caret==="up"};return f`
      <div class="select">
        <div class="select-container">
          <superviz-dropdown 
            options=${JSON.stringify(as)}
            active=${i}
            label="label"
            returnTo="code"
            position="bottom-left"
            right-offset="100px"
            @click=${r}
            @selected=${s}
            @close=${r}
          >
            <div class="content" slot="dropdown">
              <span class=${N(o)}>${e}</span>
              <superviz-icon name=${this.caret} size="md"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};Yt.styles=Vl,Yt.properties={filter:{type:String},caret:{type:String}},Yt=T([$("superviz-comments-annotation-filter")],Yt);var Ni=_(E),Wl=[Ni.styles,$n],Jt=class extends Ni{constructor(){super();this.isHidden=!0,this.positionStyles="top: 20px; left: 20px;",this.shouldHide=!1,this.commentsPosition="left"}toggle(){this.emitEvent("toggle",{})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("toggle-annotation-sidebar",()=>{this.isHidden=!this.isHidden})}updated(e){super.updated(e),this.updateComplete.then(()=>{let s=this.shadowRoot.querySelector(".float-button");if(!s)return;s.setAttribute("style",this.positionStyles);let r=window.document.body.getBoundingClientRect().width,i=s.getBoundingClientRect(),o=320;if(!this.commentsPosition||this.commentsPosition==="left"){this.shouldHide=i.x<o;return}this.shouldHide=r-i.right<o})}render(){let e={"float-button":!0,"hide-button":!this.isHidden&&this.shouldHide};return f` <button @click=${this.toggle} class="${N(e)}">
      <superviz-icon name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`}};Jt.styles=Wl,Jt.properties={positionStyles:{type:String},isHidden:{type:Boolean},commentsPosition:{type:String}},Jt=T([$("superviz-comments-button")],Jt);export{Nt as Comments,Yt as CommentsAnnotationFilter,jt as CommentsAnnotationItem,Zt as CommentsAnnotationPin,Gt as CommentsAnnotationResolved,Ft as CommentsAnnotations,Bt as CommentsCommentInput,Wt as CommentsCommentItem,zt as CommentsContent,Jt as CommentsFloatButton,Lt as CommentsTopbar,qt as DeleteCommentModal,Dt as Dropdown,kt as HelloWorld,It as Icon,re as Modal,oe as ModalContainer,ne as PresenceMouse};
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
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
