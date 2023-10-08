var zr=Object.defineProperty,Do=Object.defineProperties,Fo=Object.getOwnPropertyDescriptor,No=Object.getOwnPropertyDescriptors;var jt=Object.getOwnPropertySymbols;var Hr=Object.prototype.hasOwnProperty,Rr=Object.prototype.propertyIsEnumerable;var Vr=Math.pow,Lr=(r,e,t)=>e in r?zr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,y=(r,e)=>{for(var t in e||(e={}))Hr.call(e,t)&&Lr(r,t,e[t]);if(jt)for(var t of jt(e))Rr.call(e,t)&&Lr(r,t,e[t]);return r},R=(r,e)=>Do(r,No(e));var gn=(r,e)=>{var t={};for(var n in r)Hr.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&jt)for(var n of jt(r))e.indexOf(n)<0&&Rr.call(r,n)&&(t[n]=r[n]);return t};var w=(r,e,t,n)=>{for(var s=n>1?void 0:n?Fo(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(e,t,s):o(s))||s);return n&&s&&zr(e,t,s),s};var dt=(r,e,t)=>new Promise((n,s)=>{var i=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(i,o);a((t=t.apply(r,e)).next())});var Gt=window,Yt=Gt.ShadowRoot&&(Gt.ShadyCSS===void 0||Gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bn=Symbol(),Ur=new WeakMap,mt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==bn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Yt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ur.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ur.set(t,e))}return e}toString(){return this.cssText}},Wr=r=>new mt(typeof r=="string"?r:r+"",void 0,bn),b=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,s,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[i+1],r[0]);return new mt(t,r,bn)},xn=(r,e)=>{Yt?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let n=document.createElement("style"),s=Gt.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,r.appendChild(n)})},Jt=Yt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Wr(t)})(r):r;var En,Kt=window,Zr=Kt.trustedTypes,Lo=Zr?Zr.emptyScript:"",Br=Kt.reactiveElementPolyfillSupport,wn={toAttribute(r,e){switch(e){case Boolean:r=r?Lo:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch(n){t=null}}return t}},Pr=(r,e)=>e!==r&&(e==e||r==r),Sn={attribute:!0,type:String,converter:wn,reflect:!1,hasChanged:Pr},Tn="finalized",ne=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,n)=>{let s=this._$Ep(n,t);s!==void 0&&(this._$Ev.set(s,n),e.push(s))}),e}static createProperty(e,t=Sn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let n=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,n,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(s){let i=this[e];this[t]=s,this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Sn}static finalize(){if(this.hasOwnProperty(Tn))return!1;this[Tn]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let s of n)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let s of n)t.unshift(Jt(s))}else e!==void 0&&t.push(Jt(e));return t}static _$Ep(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return xn(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Sn){var s;let i=this.constructor._$Ep(e,n);if(i!==void 0&&n.reflect===!0){let o=(((s=n.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?n.converter:wn).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,t){var n;let s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){let o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:wn;this._$El=i,this[i]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let s=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Pr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}_$Ej(){return dt(this,null,function*(){this.isUpdatePending=!0;try{yield this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&(yield e),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let t=!1,n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(n)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdated)===null||s===void 0?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ne[Tn]=!0,ne.elementProperties=new Map,ne.elementStyles=[],ne.shadowRootOptions={mode:"open"},Br==null||Br({ReactiveElement:ne}),((En=Kt.reactiveElementVersions)!==null&&En!==void 0?En:Kt.reactiveElementVersions=[]).push("1.6.2");var On,Qt=window,Ue=Qt.trustedTypes,qr=Ue?Ue.createPolicy("lit-html",{createHTML:r=>r}):void 0,Mn="$lit$",ce=`lit$${(Math.random()+"").slice(9)}$`,Xr="?"+ce,zo=`<${Xr}>`,xe=document,pt=()=>xe.createComment(""),ft=r=>r===null||typeof r!="object"&&typeof r!="function",es=Array.isArray,Ho=r=>es(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",$n=`[ 	
\f\r]`,ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jr=/-->/g,Gr=/>/g,ge=RegExp(`>|${$n}(?:([^\\s"'>=/]+)(${$n}*=${$n}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yr=/'/g,Jr=/"/g,ts=/^(?:script|style|textarea|title)$/i,ns=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),f=ns(1),Da=ns(2),re=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Kr=new WeakMap,be=xe.createTreeWalker(xe,129,null,!1);function rs(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return qr!==void 0?qr.createHTML(e):e}var Ro=(r,e)=>{let t=r.length-1,n=[],s,i=e===2?"<svg>":"",o=ht;for(let a=0;a<t;a++){let l=r[a],c,u,h=-1,g=0;for(;g<l.length&&(o.lastIndex=g,u=o.exec(l),u!==null);)g=o.lastIndex,o===ht?u[1]==="!--"?o=jr:u[1]!==void 0?o=Gr:u[2]!==void 0?(ts.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=ge):u[3]!==void 0&&(o=ge):o===ge?u[0]===">"?(o=s!=null?s:ht,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?ge:u[3]==='"'?Jr:Yr):o===Jr||o===Yr?o=ge:o===jr||o===Gr?o=ht:(o=ge,s=void 0);let p=o===ge&&r[a+1].startsWith("/>")?" ":"";i+=o===ht?l+zo:h>=0?(n.push(c),l.slice(0,h)+Mn+l.slice(h)+ce+p):l+ce+(h===-2?(n.push(void 0),a):p)}return[rs(r,i+(r[t]||"<?>")+(e===2?"</svg>":"")),n]},Ee=class{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let i=0,o=0,a=e.length-1,l=this.parts,[c,u]=Ro(e,t);if(this.el=Ee.createElement(c,n),be.currentNode=this.el.content,t===2){let h=this.el.content,g=h.firstChild;g.remove(),h.append(...g.childNodes)}for(;(s=be.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){let h=[];for(let g of s.getAttributeNames())if(g.endsWith(Mn)||g.startsWith(ce)){let p=u[o++];if(h.push(g),p!==void 0){let _=s.getAttribute(p.toLowerCase()+Mn).split(ce),W=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:W[2],strings:_,ctor:W[1]==="."?_n:W[1]==="?"?kn:W[1]==="@"?In:Ze})}else l.push({type:6,index:i})}for(let g of h)s.removeAttribute(g)}if(ts.test(s.tagName)){let h=s.textContent.split(ce),g=h.length-1;if(g>0){s.textContent=Ue?Ue.emptyScript:"";for(let p=0;p<g;p++)s.append(h[p],pt()),be.nextNode(),l.push({type:2,index:++i});s.append(h[g],pt())}}}else if(s.nodeType===8)if(s.data===Xr)l.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(ce,h+1))!==-1;)l.push({type:7,index:i}),h+=ce.length-1}i++}}static createElement(e,t){let n=xe.createElement("template");return n.innerHTML=e,n}};function We(r,e,t=r,n){var s,i,o,a;if(e===re)return e;let l=n!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[n]:t._$Cl,c=ft(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(r),l._$AT(r,t,n)),n!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=We(r,l._$AS(r,e.values),l,n)),e}var Cn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:n},parts:s}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:xe).importNode(n,!0);be.currentNode=i;let o=be.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Se(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new An(o,this,e)),this._$AV.push(u),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=be.nextNode(),a++)}return be.currentNode=xe,i}v(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Se=class{constructor(e,t,n,s){var i;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cp=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=We(this,e,t),ft(e)?e===L||e==null||e===""?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==re&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ho(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==L&&ft(this._$AH)?this._$AA.nextSibling.data=e:this.$(xe.createTextNode(e)),this._$AH=e}g(e){var t;let{values:n,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ee.createElement(rs(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.v(n);else{let o=new Cn(i,this),a=o.u(this.options);o.v(n),this.$(a),this._$AH=o}}_$AC(e){let t=Kr.get(e.strings);return t===void 0&&Kr.set(e.strings,t=new Ee(e)),t}T(e){es(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,s=0;for(let i of e)s===t.length?t.push(n=new Se(this.k(pt()),this.k(pt()),this,this.options)):n=t[s],n._$AI(i),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ze=class{constructor(e,t,n,s,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,s){let i=this.strings,o=!1;if(i===void 0)e=We(this,e,t,0),o=!ft(e)||e!==this._$AH&&e!==re,o&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=We(this,a[n+l],t,l),c===re&&(c=this._$AH[l]),o||(o=!ft(c)||c!==this._$AH[l]),c===L?e=L:e!==L&&(e+=(c!=null?c:"")+i[l+1]),this._$AH[l]=c}o&&!s&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},_n=class extends Ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}},Vo=Ue?Ue.emptyScript:"",kn=class extends Ze{constructor(){super(...arguments),this.type=4}j(e){e&&e!==L?this.element.setAttribute(this.name,Vo):this.element.removeAttribute(this.name)}},In=class extends Ze{constructor(e,t,n,s,i){super(e,t,n,s,i),this.type=5}_$AI(e,t=this){var n;if((e=(n=We(this,e,t,0))!==null&&n!==void 0?n:L)===re)return;let s=this._$AH,i=e===L&&s!==L||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==L&&(s===L||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},An=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){We(this,e)}};var Qr=Qt.litHtmlPolyfillSupport;Qr==null||Qr(Ee,Se),((On=Qt.litHtmlVersions)!==null&&On!==void 0?On:Qt.litHtmlVersions=[]).push("2.7.5");var ss=(r,e,t)=>{var n,s;let i=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e,o=i._$litPart$;if(o===void 0){let a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new Se(e.insertBefore(pt(),a),a,void 0,t!=null?t:{})}return o._$AI(r),o};var Dn,Fn;var x=class extends ne{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ss(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return re}};x.finalized=!0,x._$litElement$=!0,(Dn=globalThis.litElementHydrateSupport)===null||Dn===void 0||Dn.call(globalThis,{LitElement:x});var os=globalThis.litElementPolyfillSupport;os==null||os({LitElement:x});((Fn=globalThis.litElementVersions)!==null&&Fn!==void 0?Fn:globalThis.litElementVersions=[]).push("3.3.2");var T=r=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(r,e):((t,n)=>{let{kind:s,elements:i}=n;return{kind:s,elements:i,finisher(o){customElements.define(t,o)}}})(r,e);var Nn,al=((Nn=window.HTMLSlotElement)===null||Nn===void 0?void 0:Nn.prototype.assignedElements)!=null?(r,e)=>r.assignedElements(e):(r,e)=>r.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var we=class extends x{render(){return f` <div>Hello from SuperViz, ${this.name}</div> `}};we.properties={name:{type:String}},we.styles=b`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `,we=w([T("superviz-hello-world")],we);var Ln=b`
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
`;var zn=b`
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
`;var Hn=b`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;var Rn=b`
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
`;var O=r=>{var t;class e extends r{connectedCallback(){setTimeout(()=>{var o;let s=document.getElementById("superviz-style"),i=document.createElement("style");i.innerHTML=(s==null?void 0:s.innerHTML)||"",(o=this.shadowRoot)==null||o.appendChild(i)}),super.connectedCallback()}emitEvent(s,i,o={composed:!0,bubbles:!0}){let a=new CustomEvent(s,y({detail:i},o));this.dispatchEvent(a)}}return e.styles=[Ln,zn,Hn,Rn,(t=r.styles)!=null?t:[]],e};var is=O(x),Uo=[is.styles],Te=class extends is{constructor(){super();this.name="",this.size="md"}render(){return f` <i class="sv-icon sv-icon-${this.name}_${this.size}"></i> `}};Te.properties={name:{type:String},size:{type:String}},Te.styles=[Uo,b`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `],Te=w([T("superviz-icon")],Te);var as={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ls=r=>(...e)=>({_$litDirective$:r,values:e}),Xt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var F=ls(class extends Xt{constructor(r){var e;if(super(r),r.type!==as.ATTRIBUTE||r.name!=="class"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var t,n;if(this.it===void 0){this.it=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in e)e[i]&&!(!((t=this.nt)===null||t===void 0)&&t.has(i))&&this.it.add(i);return this.render(e)}let s=r.element.classList;this.it.forEach(i=>{i in e||(s.remove(i),this.it.delete(i))});for(let i in e){let o=!!e[i];o===this.it.has(i)||((n=this.nt)===null||n===void 0?void 0:n.has(i))||(o?(s.add(i),this.it.add(i)):(s.remove(i),this.it.delete(i)))}return re}});var cs=b`
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
`;var us=O(x),Wo=[us.styles,cs],Oe=class extends us{constructor(){super(...arguments);this.onClickOutDropdown=t=>{if(t.stopPropagation(),!this.open)return;let n=t.composedPath(),s=this.shadowRoot.querySelector(".dropdown-content"),i=this.shadowRoot.querySelector(".dropdown-list"),a=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],l=n.includes(s),c=n.includes(i),u=n.includes(a);l||c||u||(this.open=!1)};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.callbackSelected=t=>{this.open=!1;let n=this.returnTo?t[this.returnTo]:t;this.emitEvent("selected",n,{bubbles:!1,composed:!1})}}updated(t){t.has("open")&&(this.open&&document.addEventListener("click",this.onClickOutDropdown),this.open||(document.removeEventListener("click",this.onClickOutDropdown),this.close()))}render(){let t={menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right"},n=this.options.map(i=>{let o={text:!0,"text-bold":!0,active:this.active===(i==null?void 0:i[this.returnTo])};return f`<li @click=${()=>this.callbackSelected(i)} class=${F(o)}>${i[this.label]}</li>`}),s=()=>{this.open=!this.open};return f`
      <div class="dropdown">
        <div class="dropdown-content" @click=${()=>s()}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <ul class=${F(t)}>
          ${n}
        </ul>
      </div>
    `}};Oe.styles=Wo,Oe.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},position:{type:String},options:{type:Array},label:{type:String},returnTo:{type:String},active:{type:[String,Object]}},Oe=w([T("superviz-dropdown")],Oe);var ds=b`
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
  font-family: 'Open Sans, sans-serif';
  line-height: 22px;
  margin-left: 10px;
  margin-top: -6px;
  background: yellow;
  white-space: nowrap;
}
`;var Be=class extends x{constructor(){super();this.updatePresenceMouseParticipant=t=>{if(!this.shadowRoot.getElementById(`mouse-${t.id}`)){let a=this.shadowRoot.getElementById("mouse-sync"),l=document.createElement("div");l.setAttribute("id",`mouse-${t.id}`),l.setAttribute("class","mouse-follower");let c=document.createElement("div");c.setAttribute("class","pointer-mouse");let u=document.createElement("div");u.setAttribute("class","mouse-user-name"),u.innerHTML=t.name,l.appendChild(c),l.appendChild(u),a&&a.appendChild(l)}let s=this.shadowRoot.getElementById(`mouse-${t.id}`);if(!s)return;let i=this.shadowRoot.getElementById(`mouse-${t.id}`),o=this.shadowRoot.getElementById(`mouse-${t.id}`);if(i&&o){let a=i.getElementsByClassName("mouse-user-name")[0],l=o.getElementsByClassName("pointer-mouse")[0];l&&(l.style.backgroundImage=`url(https://production.cdn.superviz.com/static/pointers/${t.slotIndex}.svg)`),a&&(a.style.color=this.textColorValues.includes(t.slotIndex)?"#FFFFFF":"#000000",a.style.backgroundColor=t.color,a.innerHTML=t.name);let{containerId:c}=t,u=c?document.getElementById(c):document==null?void 0:document.body,h=t.mousePositionX,g=t.mousePositionY;if(c){let p=(u==null?void 0:u.clientWidth)||1,_=(u==null?void 0:u.clientHeight)||1;h=t.mousePositionX/t.originalWidth*p,g=t.mousePositionY/t.originalHeight*_}s.style.left=`${h}px`,s.style.top=`${g}px`}};this.textColorValues=[2,4,5,7,8,16]}removePresenceMouseParticipant(t){let n=this.shadowRoot.getElementById(`mouse-${t}`);n&&n.remove()}render(){return f`
      <div id="mouse-container" class="mouse-board">
        <div id="mouse-sync"></div>
      </div>
    `}};Be.styles=[ds],Be=w([T("superviz-presence-mouse")],Be);var en=b`  
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
`;var ms=O(x),Zo=[ms.styles,en],Pe=class extends ms{constructor(){super(...arguments);this.getContainer=()=>window.document.querySelector("superviz-modal-container");this.createContainer=t=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(t)};this.createModal=({detail:t})=>{this.createContainer(t),window.document.body.appendChild(this.modal)};this.destroyModal=()=>{var t;this.modal=void 0,(t=this.getContainer())==null||t.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};Pe.styles=Zo,Pe=w([T("superviz-modal")],Pe);var hs=O(x),Bo=[hs.styles,en],qe=class extends hs{constructor(){super(...arguments);this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))};this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(t){this.options=t}render(){let t=()=>f`
        <div class="modal--header">
          <span class="text text-bold sv-gray-600">${this.options.title}</span>
          <div class="close" @click=${this.closeModal}>
            <superviz-icon name="close" size="md"></superviz-icon>
          </div>
        </div>
      `,n=()=>f`
        <div class="modal--body">
          <div class="modal--body-content">
            ${this.options.body}
          </div>
        </div>
      `,s=()=>{if(this.options.footer)return f`
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
          ${t()}

          ${n()}

          ${s()}
        </div>
      </div>
    `}};qe.styles=Bo,qe=w([T("superviz-modal-container")],qe);var Vn=b`
  .container {
    display: flex;
    flex-direction: column;
    width: 320px;
    position: fixed;
    color: rgb(var(--sv-gray-700));
    background: rgb(var(--sv-white));
    top: 0;
    right: 0;
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
`;var Un=b`
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
`;var Wn=b`
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
`;var Zn=b`
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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
`;var Bn=b`
  .comments {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 288px;
  }

  .hidden {
    display: none;
  }
`;var Pn=b`
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
`;var qn=b`
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
    height: 18px;
  }

  .avatar {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
  }

  .avatar-divs-1 {
    z-index: 4;
    left: 0;
  }

  .avatar-divs-2 {
    z-index: 3;
    left: 16px;
  }

  .avatar-divs-3 {
    z-index: 2;
    left: 32px;
  }

  .avatar-divs-4 {
    z-index: 1;
    left: 48px;
  }

  .avatar-divs-5 {
    z-index: 1;
    left: 60px;
  }

  .replies {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding-left: 8px;
  }

  .last-reply {
    padding-left: 14px;
  }

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
`;var jn=b`
  .annotation-resolved {
    background: rgba(var(--sv-gray-200), 0.5);
    height: 26px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(var(--sv-gray-200));
  }
`;var Gn=b`
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
    transition: border-color 0.2s ease-in-out;
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
`;var Yn=b`
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
`;var Jn=b`
  button.float-button {
    position: fixed;
    top: 20px;
    left: 20px;

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

  button.float-button:hover {
    width: 110px;
    border-radius: 30px;
  }

  button.float-button:hover p {
    display: block;
  }
`;var Kn=b`
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
`;function Qn(r){let e=r.querySelector("#superviz-comments");if(e){let t={childList:!0,attributes:!0,characterData:!0,subtree:!0};new MutationObserver((s,i)=>{s.forEach(o=>{let a=r.querySelector("#superviz-comments");a&&a.contains(o.target)&&(i.disconnect(),Po(r))})}).observe(e,t)}}function Po(r){let e=r.querySelector("#poweredby-footer");e&&e.remove();let t=document.createElement("div");t.id="poweredby-footer",t.className="footer";let n=document.createElement("div");n.className="powered-by powered-by--horizontal";let s=document.createElement("a");s.href="https://superviz.com/",s.target="_blank",s.className="link";let i=document.createElement("div");i.textContent="Powered by";let o=document.createElement("img");o.width=48,o.height=8.86,o.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",n.appendChild(s),s.appendChild(i),i.appendChild(o),t.appendChild(n);let a=r.getElementById("superviz-comments");a&&a.appendChild(t),Qn(r)}var ps=O(x),qo=[ps.styles,Vn,Kn],$e=class extends ps{constructor(){super();this.annotations=[],this.annotationFilter="all",this.waterMarkState=!1}updateAnnotations(t){this.annotations=t}toggle(){this.emitEvent("toggle",{})}waterMarkStatus(t){this.waterMarkState=t}setFilter({detail:t}){let{filter:n}=t;this.annotationFilter=n}updated(t){super.updated(t),this.updateComplete.then(()=>{this.shadowRoot.querySelector("#superviz-comments")&&this.waterMarkState&&Qn(this.shadowRoot)})}render(){let t=[this.open?"container":"container-close"].join(" "),n=f`
    <div id="poweredby-footer" class="footer">
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
  </div>`,s=this.waterMarkState?n:"";return f`
      <div id="superviz-comments" class=${t}>
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
      ${s}
      </div>
    `}};$e.styles=qo,$e.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean}},$e=w([T("superviz-comments")],$e);var jo=O(x),Go=[jo.styles,Un],je=class extends O(x){close(){this.dispatchEvent(new CustomEvent("close"))}render(){return f`
      <div class="topbar">
        <span class="text text-bold">COMMENTS</span>
        <span @click=${this.close}>
          <superviz-icon name="right" size="lg"></superviz-icon>
        </span>
      </div>
    `}};je.styles=Go,je=w([T("superviz-comments-topbar")],je);var fs=O(x),Yo=[fs.styles,Wn],Me=class extends fs{constructor(){super(...arguments);this.prepareToCreateAnnotation=n=>dt(this,[n],function*({detail:t}){this.annotation=t,yield this.updateComplete,this.emitEvent("comment-input-focus",t)})}createComment({detail:t}){this.emitEvent("create-annotation",t),this.annotation=null}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation)}render(){let t={"annotations--comments-input":!0,hidden:!this.annotation};return f`
      <div class="annotations">
        <span class="text text-big text-bold annotations--add-comment-btn"
          >Click anywhere to add a comment</span
        >
        <div class=${F(t)}>
          <superviz-comments-comment-input
            @create-annotation=${this.createComment}
            eventType="create-annotation"
          >
          </superviz-comments-comment-input>
        </div>
      </div>
    `}};Me.styles=Yo,Me.properties={annotation:{type:Object}},Me=w([T("superviz-comments-annotations")],Me);var ys=O(x),Jo=[ys.styles,Bn],Ce=class extends ys{constructor(){super();this.selectAnnotation=({detail:t})=>{let{uuid:n}=t;this.selectedAnnotation=n};this.annotations=[]}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("select-annotation",this.selectAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("select-annotation",this.selectAnnotation)}render(){var l,c;let t=(l=this.annotations)==null?void 0:l.filter(u=>u.resolved===!1),n=(c=this.annotations)==null?void 0:c.filter(u=>u.resolved===!0),s=(u,h)=>h?(n==null?void 0:n.length)===u+1:(t==null?void 0:t.length)===u+1,i=(u,h,g)=>{let _=u.comments.length>0?f`
            <superviz-comments-annotation-item
              annotation=${JSON.stringify(u)}
              selected="${this.selectedAnnotation}"
              ?isLastAnnotation=${s(h,g)}
              annotationFilter=${this.annotationFilter}
            >
            </superviz-comments-annotation-item>
          `:f``;return f` ${_} `},o=t==null?void 0:t.map((u,h)=>i(u,h,!1)),a=n==null?void 0:n.map((u,h)=>i(u,h,!0));return f` ${o} ${a} `}};Ce.styles=Jo,Ce.properties={annotations:{type:Object},selectedAnnotation:{type:String},annotationFilter:{type:String}},Ce=w([T("superviz-comments-content")],Ce);var se=class extends Error{},tn=class extends se{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},nn=class extends se{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},rn=class extends se{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},oe=class extends se{},Ge=class extends se{constructor(e){super(`Invalid unit ${e}`)}},z=class extends se{},j=class extends se{constructor(){super("Zone is an abstract class")}};var m="numeric",G="short",Z="long",ue={year:m,month:m,day:m},vt={year:m,month:G,day:m},er={year:m,month:G,day:m,weekday:G},gt={year:m,month:Z,day:m},bt={year:m,month:Z,day:m,weekday:Z},xt={hour:m,minute:m},Et={hour:m,minute:m,second:m},St={hour:m,minute:m,second:m,timeZoneName:G},wt={hour:m,minute:m,second:m,timeZoneName:Z},Tt={hour:m,minute:m,hourCycle:"h23"},Ot={hour:m,minute:m,second:m,hourCycle:"h23"},$t={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:G},Mt={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:Z},Ct={year:m,month:m,day:m,hour:m,minute:m},_t={year:m,month:m,day:m,hour:m,minute:m,second:m},kt={year:m,month:G,day:m,hour:m,minute:m},It={year:m,month:G,day:m,hour:m,minute:m,second:m},tr={year:m,month:G,day:m,weekday:G,hour:m,minute:m},At={year:m,month:Z,day:m,hour:m,minute:m,timeZoneName:G},Dt={year:m,month:Z,day:m,hour:m,minute:m,second:m,timeZoneName:G},Ft={year:m,month:Z,day:m,weekday:Z,hour:m,minute:m,timeZoneName:Z},Nt={year:m,month:Z,day:m,weekday:Z,hour:m,minute:m,second:m,timeZoneName:Z};var U=class{get type(){throw new j}get name(){throw new j}get ianaName(){return this.name}get isUniversal(){throw new j}offsetName(e,t){throw new j}formatOffset(e,t){throw new j}offset(e){throw new j}equals(e){throw new j}get isValid(){throw new j}};var nr=null,X=class extends U{static get instance(){return nr===null&&(nr=new X),nr}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return on(e,t,n)}formatOffset(e,t){return de(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}};var ln={};function Ko(r){return ln[r]||(ln[r]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:r,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),ln[r]}var Qo={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Xo(r,e){let t=r.format(e).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t),[,s,i,o,a,l,c,u]=n;return[o,s,i,a,l,c,u]}function ei(r,e){let t=r.formatToParts(e),n=[];for(let s=0;s<t.length;s++){let{type:i,value:o}=t[s],a=Qo[i];i==="era"?n[a]=o:E(a)||(n[a]=parseInt(o,10))}return n}var an={},N=class extends U{static create(e){return an[e]||(an[e]=new N(e)),an[e]}static resetCache(){an={},ln={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(t){return!1}}constructor(e){super(),this.zoneName=e,this.valid=N.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return on(e,t,n,this.name)}formatOffset(e,t){return de(this.offset(e),t)}offset(e){let t=new Date(e);if(isNaN(t))return NaN;let n=Ko(this.name),[s,i,o,a,l,c,u]=n.formatToParts?ei(n,t):Xo(n,t);a==="BC"&&(s=-Math.abs(s)+1);let g=Ye({year:s,month:i,day:o,hour:l===24?0:l,minute:c,second:u,millisecond:0}),p=+t,_=p%1e3;return p-=_>=0?_:1e3+_,(g-p)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}};var vs={};function ti(r,e={}){let t=JSON.stringify([r,e]),n=vs[t];return n||(n=new Intl.ListFormat(r,e),vs[t]=n),n}var rr={};function sr(r,e={}){let t=JSON.stringify([r,e]),n=rr[t];return n||(n=new Intl.DateTimeFormat(r,e),rr[t]=n),n}var or={};function ni(r,e={}){let t=JSON.stringify([r,e]),n=or[t];return n||(n=new Intl.NumberFormat(r,e),or[t]=n),n}var ir={};function ri(r,e={}){let o=e,{base:t}=o,n=gn(o,["base"]),s=JSON.stringify([r,n]),i=ir[s];return i||(i=new Intl.RelativeTimeFormat(r,e),ir[s]=i),i}var Lt=null;function si(){return Lt||(Lt=new Intl.DateTimeFormat().resolvedOptions().locale,Lt)}function oi(r){let e=r.indexOf("-x-");e!==-1&&(r=r.substring(0,e));let t=r.indexOf("-u-");if(t===-1)return[r];{let n,s;try{n=sr(r).resolvedOptions(),s=r}catch(a){let l=r.substring(0,t);n=sr(l).resolvedOptions(),s=l}let{numberingSystem:i,calendar:o}=n;return[s,i,o]}}function ii(r,e,t){return(t||e)&&(r.includes("-u-")||(r+="-u"),t&&(r+=`-ca-${t}`),e&&(r+=`-nu-${e}`)),r}function ai(r){let e=[];for(let t=1;t<=12;t++){let n=v.utc(2009,t,1);e.push(r(n))}return e}function li(r){let e=[];for(let t=1;t<=7;t++){let n=v.utc(2016,11,13+t);e.push(r(n))}return e}function cn(r,e,t,n){let s=r.listingMode();return s==="error"?null:s==="en"?t(e):n(e)}function ci(r){return r.numberingSystem&&r.numberingSystem!=="latn"?!1:r.numberingSystem==="latn"||!r.locale||r.locale.startsWith("en")||new Intl.DateTimeFormat(r.intl).resolvedOptions().numberingSystem==="latn"}var ar=class{constructor(e,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;let a=n,{padTo:s,floor:i}=a,o=gn(a,["padTo","floor"]);if(!t||Object.keys(o).length>0){let l=y({useGrouping:!1},n);n.padTo>0&&(l.minimumIntegerDigits=n.padTo),this.inf=ni(e,l)}}format(e){if(this.inf){let t=this.floor?Math.floor(e):e;return this.inf.format(t)}else{let t=this.floor?Math.floor(e):Je(e,3);return I(t,this.padTo)}}},lr=class{constructor(e,t,n){this.opts=n,this.originalZone=void 0;let s;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){let o=-1*(e.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;e.offset!==0&&N.create(a).valid?(s=a,this.dt=e):(s="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,s=e.zone.name):(s="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);let i=y({},this.opts);i.timeZone=i.timeZone||s,this.dtf=sr(t,i)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(t=>{if(t.type==="timeZoneName"){let n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return R(y({},t),{value:n})}else return t}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},cr=class{constructor(e,t,n){this.opts=y({style:"long"},n),!t&&un()&&(this.rtf=ri(e,n))}format(e,t){return this.rtf?this.rtf.format(e,t):gs(t,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}},$=class{static fromOpts(e){return $.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,t,n,s=!1){let i=e||C.defaultLocale,o=i||(s?"en-US":si()),a=t||C.defaultNumberingSystem,l=n||C.defaultOutputCalendar;return new $(o,a,l,i)}static resetCache(){Lt=null,rr={},or={},ir={}}static fromObject({locale:e,numberingSystem:t,outputCalendar:n}={}){return $.create(e,t,n)}constructor(e,t,n,s){let[i,o,a]=oi(e);this.locale=i,this.numberingSystem=t||o||null,this.outputCalendar=n||a||null,this.intl=ii(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=ci(this)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),t=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&t?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:$.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone(R(y({},e),{defaultToEN:!0}))}redefaultToSystem(e={}){return this.clone(R(y({},e),{defaultToEN:!1}))}months(e,t=!1){return cn(this,e,ur,()=>{let n=t?{month:e,day:"numeric"}:{month:e},s=t?"format":"standalone";return this.monthsCache[s][e]||(this.monthsCache[s][e]=ai(i=>this.extract(i,n,"month"))),this.monthsCache[s][e]})}weekdays(e,t=!1){return cn(this,e,dr,()=>{let n=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},s=t?"format":"standalone";return this.weekdaysCache[s][e]||(this.weekdaysCache[s][e]=li(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[s][e]})}meridiems(){return cn(this,void 0,()=>mr,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[v.utc(2016,11,13,9),v.utc(2016,11,13,19)].map(t=>this.extract(t,e,"dayperiod"))}return this.meridiemCache})}eras(e){return cn(this,e,hr,()=>{let t={era:e};return this.eraCache[e]||(this.eraCache[e]=[v.utc(-40,1,1),v.utc(2017,1,1)].map(n=>this.extract(n,t,"era"))),this.eraCache[e]})}extract(e,t,n){let s=this.dtFormatter(e,t),i=s.formatToParts(),o=i.find(a=>a.type.toLowerCase()===n);return o?o.value:null}numberFormatter(e={}){return new ar(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new lr(e,this.intl,t)}relFormatter(e={}){return new cr(this.intl,this.isEnglish(),e)}listFormatter(e={}){return ti(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}};var fr=null,A=class extends U{static get utcInstance(){return fr===null&&(fr=new A(0)),fr}static instance(e){return e===0?A.utcInstance:new A(e)}static parseSpecifier(e){if(e){let t=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new A(_e(t[1],t[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${de(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${de(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,t){return de(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}};var Ke=class extends U{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function Y(r,e){let t;if(E(r)||r===null)return e;if(r instanceof U)return r;if(bs(r)){let n=r.toLowerCase();return n==="default"?e:n==="local"||n==="system"?X.instance:n==="utc"||n==="gmt"?A.utcInstance:A.parseSpecifier(n)||N.create(r)}else return ee(r)?A.instance(r):typeof r=="object"&&"offset"in r&&typeof r.offset=="function"?r:new Ke(r)}var xs=()=>Date.now(),Es="system",Ss=null,ws=null,Ts=null,Os=60,$s,C=class{static get now(){return xs}static set now(e){xs=e}static set defaultZone(e){Es=e}static get defaultZone(){return Y(Es,X.instance)}static get defaultLocale(){return Ss}static set defaultLocale(e){Ss=e}static get defaultNumberingSystem(){return ws}static set defaultNumberingSystem(e){ws=e}static get defaultOutputCalendar(){return Ts}static set defaultOutputCalendar(e){Ts=e}static get twoDigitCutoffYear(){return Os}static set twoDigitCutoffYear(e){Os=e%100}static get throwOnInvalid(){return $s}static set throwOnInvalid(e){$s=e}static resetCaches(){$.resetCache(),N.resetCache()}};function E(r){return typeof r=="undefined"}function ee(r){return typeof r=="number"}function zt(r){return typeof r=="number"&&r%1===0}function bs(r){return typeof r=="string"}function Ms(r){return Object.prototype.toString.call(r)==="[object Date]"}function un(){try{return typeof Intl!="undefined"&&!!Intl.RelativeTimeFormat}catch(r){return!1}}function Cs(r){return Array.isArray(r)?r:[r]}function yr(r,e,t){if(r.length!==0)return r.reduce((n,s)=>{let i=[e(s),s];return n&&t(n[0],i[0])===n[0]?n:i},null)[1]}function _s(r,e){return e.reduce((t,n)=>(t[n]=r[n],t),{})}function me(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function te(r,e,t){return zt(r)&&r>=e&&r<=t}function ui(r,e){return r-e*Math.floor(r/e)}function I(r,e=2){let t=r<0,n;return t?n="-"+(""+-r).padStart(e,"0"):n=(""+r).padStart(e,"0"),n}function ie(r){if(!(E(r)||r===null||r===""))return parseInt(r,10)}function he(r){if(!(E(r)||r===null||r===""))return parseFloat(r)}function Ht(r){if(!(E(r)||r===null||r==="")){let e=parseFloat("0."+r)*1e3;return Math.floor(e)}}function Je(r,e,t=!1){let n=Vr(10,e);return(t?Math.trunc:Math.round)(r*n)/n}function ke(r){return r%4===0&&(r%100!==0||r%400===0)}function Ie(r){return ke(r)?366:365}function Qe(r,e){let t=ui(e-1,12)+1,n=r+(e-t)/12;return t===2?ke(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][t-1]}function Ye(r){let e=Date.UTC(r.year,r.month-1,r.day,r.hour,r.minute,r.second,r.millisecond);return r.year<100&&r.year>=0&&(e=new Date(e),e.setUTCFullYear(r.year,r.month-1,r.day)),+e}function Xe(r){let e=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7,t=r-1,n=(t+Math.floor(t/4)-Math.floor(t/100)+Math.floor(t/400))%7;return e===4||n===3?53:52}function Rt(r){return r>99?r:r>C.twoDigitCutoffYear?1900+r:2e3+r}function on(r,e,t,n=null){let s=new Date(r),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);let o=y({timeZoneName:e},i),a=new Intl.DateTimeFormat(t,o).formatToParts(s).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function _e(r,e){let t=parseInt(r,10);Number.isNaN(t)&&(t=0);let n=parseInt(e,10)||0,s=t<0||Object.is(t,-0)?-n:n;return t*60+s}function vr(r){let e=Number(r);if(typeof r=="boolean"||r===""||Number.isNaN(e))throw new z(`Invalid unit value ${r}`);return e}function et(r,e){let t={};for(let n in r)if(me(r,n)){let s=r[n];if(s==null)continue;t[e(n)]=vr(s)}return t}function de(r,e){let t=Math.trunc(Math.abs(r/60)),n=Math.trunc(Math.abs(r%60)),s=r>=0?"+":"-";switch(e){case"short":return`${s}${I(t,2)}:${I(n,2)}`;case"narrow":return`${s}${t}${n>0?`:${n}`:""}`;case"techie":return`${s}${I(t,2)}${I(n,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Vt(r){return _s(r,["hour","minute","second","millisecond"])}var di=["January","February","March","April","May","June","July","August","September","October","November","December"],gr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],mi=["J","F","M","A","M","J","J","A","S","O","N","D"];function ur(r){switch(r){case"narrow":return[...mi];case"short":return[...gr];case"long":return[...di];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var br=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],xr=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],hi=["M","T","W","T","F","S","S"];function dr(r){switch(r){case"narrow":return[...hi];case"short":return[...xr];case"long":return[...br];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var mr=["AM","PM"],pi=["Before Christ","Anno Domini"],fi=["BC","AD"],yi=["B","A"];function hr(r){switch(r){case"narrow":return[...yi];case"short":return[...fi];case"long":return[...pi];default:return null}}function ks(r){return mr[r.hour<12?0:1]}function Is(r,e){return dr(e)[r.weekday-1]}function As(r,e){return ur(e)[r.month-1]}function Ds(r,e){return hr(e)[r.year<0?0:1]}function gs(r,e,t="always",n=!1){let s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(r)===-1;if(t==="auto"&&i){let h=r==="days";switch(e){case 1:return h?"tomorrow":`next ${s[r][0]}`;case-1:return h?"yesterday":`last ${s[r][0]}`;case 0:return h?"today":`this ${s[r][0]}`;default:}}let o=Object.is(e,-0)||e<0,a=Math.abs(e),l=a===1,c=s[r],u=n?l?c[1]:c[2]||c[1]:l?s[r][0]:r;return o?`${a} ${u} ago`:`in ${a} ${u}`}function Fs(r,e){let t="";for(let n of r)n.literal?t+=n.val:t+=e(n.val);return t}var vi={D:ue,DD:vt,DDD:gt,DDDD:bt,t:xt,tt:Et,ttt:St,tttt:wt,T:Tt,TT:Ot,TTT:$t,TTTT:Mt,f:Ct,ff:kt,fff:At,ffff:Ft,F:_t,FF:It,FFF:Dt,FFFF:Nt},D=class{static create(e,t={}){return new D(e,t)}static parseFormat(e){let t=null,n="",s=!1,i=[];for(let o=0;o<e.length;o++){let a=e.charAt(o);a==="'"?(n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),t=null,n="",s=!s):s||a===t?n+=a:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=a,t=a)}return n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(e){return vi[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,y(y({},this.opts),t)).format()}dtFormatter(e,t={}){return this.loc.dtFormatter(e,y(y({},this.opts),t))}formatDateTime(e,t){return this.dtFormatter(e,t).format()}formatDateTimeParts(e,t){return this.dtFormatter(e,t).formatToParts()}formatInterval(e,t){return this.dtFormatter(e.start,t).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t){return this.dtFormatter(e,t).resolvedOptions()}num(e,t=0){if(this.opts.forceSimple)return I(e,t);let n=y({},this.opts);return t>0&&(n.padTo=t),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,t){let n=this.loc.listingMode()==="en",s=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(p,_)=>this.loc.extract(e,p,_),o=p=>e.isOffsetFixed&&e.offset===0&&p.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,p.format):"",a=()=>n?ks(e):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(p,_)=>n?As(e,p):i(_?{month:p}:{month:p,day:"numeric"},"month"),c=(p,_)=>n?Is(e,p):i(_?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),u=p=>{let _=D.macroTokenToFormatOpts(p);return _?this.formatWithSystemDefault(e,_):p},h=p=>n?Ds(e,p):i({era:p},"era"),g=p=>{switch(p){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return a();case"d":return s?i({day:"numeric"},"day"):this.num(e.day);case"dd":return s?i({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return s?i({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return s?i({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return s?i({month:"numeric"},"month"):this.num(e.month);case"MM":return s?i({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return s?i({year:"numeric"},"year"):this.num(e.year);case"yy":return s?i({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return s?i({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return s?i({year:"numeric"},"year"):this.num(e.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return u(p)}};return Fs(D.parseFormat(t),g)}formatDurationFromString(e,t){let n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},s=l=>c=>{let u=n(c);return u?this.num(l.get(u),c.length):c},i=D.parseFormat(t),o=i.reduce((l,{literal:c,val:u})=>c?l:l.concat(u),[]),a=e.shiftTo(...o.map(n).filter(l=>l));return Fs(i,s(a))}};var H=class{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}};var Ls=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function nt(...r){let e=r.reduce((t,n)=>t+n.source,"");return RegExp(`^${e}$`)}function rt(...r){return e=>r.reduce(([t,n,s],i)=>{let[o,a,l]=i(e,s);return[y(y({},t),o),a||n,l]},[{},null,1]).slice(0,2)}function st(r,...e){if(r==null)return[null,null];for(let[t,n]of e){let s=t.exec(r);if(s)return n(s)}return[null,null]}function zs(...r){return(e,t)=>{let n={},s;for(s=0;s<r.length;s++)n[r[s]]=ie(e[t+s]);return[n,null,t+s]}}var Hs=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,gi=`(?:${Hs.source}?(?:\\[(${Ls.source})\\])?)?`,Er=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Rs=RegExp(`${Er.source}${gi}`),Sr=RegExp(`(?:T${Rs.source})?`),bi=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,xi=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Ei=/(\d{4})-?(\d{3})/,Si=zs("weekYear","weekNumber","weekDay"),wi=zs("year","ordinal"),Ti=/(\d{4})-(\d\d)-(\d\d)/,Vs=RegExp(`${Er.source} ?(?:${Hs.source}|(${Ls.source}))?`),Oi=RegExp(`(?: ${Vs.source})?`);function tt(r,e,t){let n=r[e];return E(n)?t:ie(n)}function $i(r,e){return[{year:tt(r,e),month:tt(r,e+1,1),day:tt(r,e+2,1)},null,e+3]}function ot(r,e){return[{hours:tt(r,e,0),minutes:tt(r,e+1,0),seconds:tt(r,e+2,0),milliseconds:Ht(r[e+3])},null,e+4]}function Ut(r,e){let t=!r[e]&&!r[e+1],n=_e(r[e+1],r[e+2]),s=t?null:A.instance(n);return[{},s,e+3]}function Wt(r,e){let t=r[e]?N.create(r[e]):null;return[{},t,e+1]}var Mi=RegExp(`^T?${Er.source}$`),Ci=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function _i(r){let[e,t,n,s,i,o,a,l,c]=r,u=e[0]==="-",h=l&&l[0]==="-",g=(p,_=!1)=>p!==void 0&&(_||p&&u)?-p:p;return[{years:g(he(t)),months:g(he(n)),weeks:g(he(s)),days:g(he(i)),hours:g(he(o)),minutes:g(he(a)),seconds:g(he(l),l==="-0"),milliseconds:g(Ht(c),h)}]}var ki={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function wr(r,e,t,n,s,i,o){let a={year:e.length===2?Rt(ie(e)):ie(e),month:gr.indexOf(t)+1,day:ie(n),hour:ie(s),minute:ie(i)};return o&&(a.second=ie(o)),r&&(a.weekday=r.length>3?br.indexOf(r)+1:xr.indexOf(r)+1),a}var Ii=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Ai(r){let[,e,t,n,s,i,o,a,l,c,u,h]=r,g=wr(e,s,n,t,i,o,a),p;return l?p=ki[l]:c?p=0:p=_e(u,h),[g,new A(p)]}function Di(r){return r.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var Fi=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Ni=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Li=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Ns(r){let[,e,t,n,s,i,o,a]=r;return[wr(e,s,n,t,i,o,a),A.utcInstance]}function zi(r){let[,e,t,n,s,i,o,a]=r;return[wr(e,a,t,n,s,i,o),A.utcInstance]}var Hi=nt(bi,Sr),Ri=nt(xi,Sr),Vi=nt(Ei,Sr),Ui=nt(Rs),Us=rt($i,ot,Ut,Wt),Wi=rt(Si,ot,Ut,Wt),Zi=rt(wi,ot,Ut,Wt),Bi=rt(ot,Ut,Wt);function Ws(r){return st(r,[Hi,Us],[Ri,Wi],[Vi,Zi],[Ui,Bi])}function Zs(r){return st(Di(r),[Ii,Ai])}function Bs(r){return st(r,[Fi,Ns],[Ni,Ns],[Li,zi])}function Ps(r){return st(r,[Ci,_i])}var Pi=rt(ot);function qs(r){return st(r,[Mi,Pi])}var qi=nt(Ti,Oi),ji=nt(Vs),Gi=rt(ot,Ut,Wt);function js(r){return st(r,[qi,Us],[ji,Gi])}var Yi="Invalid Duration",Ys={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Ji=y({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},Ys),B=146097/400,it=146097/4800,Ki=y({years:{quarters:4,months:12,weeks:B/7,days:B,hours:B*24,minutes:B*24*60,seconds:B*24*60*60,milliseconds:B*24*60*60*1e3},quarters:{months:3,weeks:B/28,days:B/4,hours:B*24/4,minutes:B*24*60/4,seconds:B*24*60*60/4,milliseconds:B*24*60*60*1e3/4},months:{weeks:it/7,days:it,hours:it*24,minutes:it*24*60,seconds:it*24*60*60,milliseconds:it*24*60*60*1e3}},Ys),Ae=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Js=Ae.slice(0).reverse();function pe(r,e,t=!1){let n={values:t?e.values:y(y({},r.values),e.values||{}),loc:r.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||r.conversionAccuracy,matrix:e.matrix||r.matrix};return new S(n)}function Gs(r){return Math.trunc(r*1e3)/1e3}function Ks(r,e,t,n,s){let i=r[s][t],o=e[t]/i,a=Math.floor(o);n[s]=Gs(n[s]+a),e[t]=Gs(e[t]-a*i)}function Qi(r,e){Js.reduce((t,n)=>E(e[n])?t:(t&&Ks(r,e,t,e,n),n),null)}function Xi(r){let e={};for(let[t,n]of Object.entries(r))n!==0&&(e[t]=n);return e}var S=class{constructor(e){let t=e.conversionAccuracy==="longterm"||!1,n=t?Ki:Ji;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||$.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(e,t){return S.fromObject({milliseconds:e},t)}static fromObject(e,t={}){if(e==null||typeof e!="object")throw new z(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new S({values:et(e,S.normalizeUnit),loc:$.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(e){if(ee(e))return S.fromMillis(e);if(S.isDuration(e))return e;if(typeof e=="object")return S.fromObject(e);throw new z(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,t){let[n]=Ps(e);return n?S.fromObject(n,t):S.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,t){let[n]=qs(e);return n?S.fromObject(n,t):S.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,t=null){if(!e)throw new z("need to specify a reason the Duration is invalid");let n=e instanceof H?e:new H(e,t);if(C.throwOnInvalid)throw new rn(n);return new S({invalid:n})}static normalizeUnit(e){let t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!t)throw new Ge(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){let n=R(y({},t),{floor:t.round!==!1&&t.floor!==!1});return this.isValid?D.create(this.loc,n).formatDurationFromString(this,e):Yi}toHuman(e={}){let t=Ae.map(n=>{let s=this.values[n];return E(s)?null:this.loc.numberFormatter(R(y({style:"unit",unitDisplay:"long"},e),{unit:n.slice(0,-1)})).format(s)}).filter(n=>n);return this.loc.listFormatter(y({type:"conjunction",style:e.listStyle||"narrow"},e)).format(t)}toObject(){return this.isValid?y({},this.values):{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=Je(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let t=this.toMillis();return t<0||t>=864e5?null:(e=R(y({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e),{includeOffset:!1}),v.fromMillis(t,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){var t,n;let e=(t=this.values.milliseconds)!=null?t:0;for(let s of Js.slice(1))(n=this.values)!=null&&n[s]&&(e+=this.values[s]*this.matrix[s].milliseconds);return e}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let t=S.fromDurationLike(e),n={};for(let s of Ae)(me(t.values,s)||me(this.values,s))&&(n[s]=t.get(s)+this.get(s));return pe(this,{values:n},!0)}minus(e){if(!this.isValid)return this;let t=S.fromDurationLike(e);return this.plus(t.negate())}mapUnits(e){if(!this.isValid)return this;let t={};for(let n of Object.keys(this.values))t[n]=vr(e(this.values[n],n));return pe(this,{values:t},!0)}get(e){return this[S.normalizeUnit(e)]}set(e){if(!this.isValid)return this;let t=y(y({},this.values),et(e,S.normalizeUnit));return pe(this,{values:t})}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:n,matrix:s}={}){let o={loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:s,conversionAccuracy:n};return pe(this,o)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return this.valueOf()>=0?(Qi(this.matrix,e),pe(this,{values:e},!0)):this.negate().normalize().negate()}rescale(){if(!this.isValid)return this;let e=Xi(this.normalize().shiftToAll().toObject());return pe(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(o=>S.normalizeUnit(o));let t={},n={},s=this.toObject(),i;for(let o of Ae)if(e.indexOf(o)>=0){i=o;let a=0;for(let c in n)a+=this.matrix[c][o]*n[c],n[c]=0;ee(s[o])&&(a+=s[o]);let l=Math.trunc(a);t[o]=l,n[o]=(a*1e3-l*1e3)/1e3;for(let c in s)Ae.indexOf(c)>Ae.indexOf(o)&&Ks(this.matrix,s,c,t,o)}else ee(s[o])&&(n[o]=s[o]);for(let o in n)n[o]!==0&&(t[i]+=o===i?n[o]:n[o]/this.matrix[i][o]);return pe(this,{values:t},!0).normalize()}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let t of Object.keys(this.values))e[t]=this.values[t]===0?0:-this.values[t];return pe(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function t(n,s){return n===void 0||n===0?s===void 0||s===0:n===s}for(let n of Ae)if(!t(this.values[n],e.values[n]))return!1;return!0}};var at="Invalid Interval";function ea(r,e){return!r||!r.isValid?k.invalid("missing or invalid start"):!e||!e.isValid?k.invalid("missing or invalid end"):e<r?k.invalid("end before start",`The end of an interval must be after its start, but you had start=${r.toISO()} and end=${e.toISO()}`):null}var k=class{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,t=null){if(!e)throw new z("need to specify a reason the Interval is invalid");let n=e instanceof H?e:new H(e,t);if(C.throwOnInvalid)throw new nn(n);return new k({invalid:n})}static fromDateTimes(e,t){let n=lt(e),s=lt(t),i=ea(n,s);return i==null?new k({start:n,end:s}):i}static after(e,t){let n=S.fromDurationLike(t),s=lt(e);return k.fromDateTimes(s,s.plus(n))}static before(e,t){let n=S.fromDurationLike(t),s=lt(e);return k.fromDateTimes(s.minus(n),s)}static fromISO(e,t){let[n,s]=(e||"").split("/",2);if(n&&s){let i,o;try{i=v.fromISO(n,t),o=i.isValid}catch(c){o=!1}let a,l;try{a=v.fromISO(s,t),l=a.isValid}catch(c){l=!1}if(o&&l)return k.fromDateTimes(i,a);if(o){let c=S.fromISO(s,t);if(c.isValid)return k.after(i,c)}else if(l){let c=S.fromISO(n,t);if(c.isValid)return k.before(a,c)}}return k.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds"){if(!this.isValid)return NaN;let t=this.start.startOf(e),n=this.end.startOf(e);return Math.floor(n.diff(t,e).get(e))+(n.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:t}={}){return this.isValid?k.fromDateTimes(e||this.s,t||this.e):this}splitAt(...e){if(!this.isValid)return[];let t=e.map(lt).filter(o=>this.contains(o)).sort(),n=[],{s}=this,i=0;for(;s<this.e;){let o=t[i]||this.e,a=+o>+this.e?this.e:o;n.push(k.fromDateTimes(s,a)),s=a,i+=1}return n}splitBy(e){let t=S.fromDurationLike(e);if(!this.isValid||!t.isValid||t.as("milliseconds")===0)return[];let{s:n}=this,s=1,i,o=[];for(;n<this.e;){let a=this.start.plus(t.mapUnits(l=>l*s));i=+a>+this.e?this.e:a,o.push(k.fromDateTimes(n,i)),n=i,s+=1}return o}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let t=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return t>=n?null:k.fromDateTimes(t,n)}union(e){if(!this.isValid)return this;let t=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return k.fromDateTimes(t,n)}static merge(e){let[t,n]=e.sort((s,i)=>s.s-i.s).reduce(([s,i],o)=>i?i.overlaps(o)||i.abutsStart(o)?[s,i.union(o)]:[s.concat([i]),o]:[s,o],[[],null]);return n&&t.push(n),t}static xor(e){let t=null,n=0,s=[],i=e.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),o=Array.prototype.concat(...i),a=o.sort((l,c)=>l.time-c.time);for(let l of a)n+=l.type==="s"?1:-1,n===1?t=l.time:(t&&+t!=+l.time&&s.push(k.fromDateTimes(t,l.time)),t=null);return k.merge(s)}difference(...e){return k.xor([this].concat(e)).map(t=>this.intersection(t)).filter(t=>t&&!t.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:at}toLocaleString(e=ue,t={}){return this.isValid?D.create(this.s.loc.clone(t),e).formatInterval(this):at}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:at}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:at}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:at}toFormat(e,{separator:t=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:at}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):S.invalid(this.invalidReason)}mapEndpoints(e){return k.fromDateTimes(e(this.s),e(this.e))}};var ae=class{static hasDST(e=C.defaultZone){let t=v.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return N.isValidZone(e)}static normalizeZone(e){return Y(e,C.defaultZone)}static months(e="long",{locale:t=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||$.create(t,n,i)).months(e)}static monthsFormat(e="long",{locale:t=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||$.create(t,n,i)).months(e,!0)}static weekdays(e="long",{locale:t=null,numberingSystem:n=null,locObj:s=null}={}){return(s||$.create(t,n,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:t=null,numberingSystem:n=null,locObj:s=null}={}){return(s||$.create(t,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return $.create(e).meridiems()}static eras(e="short",{locale:t=null}={}){return $.create(t,null,"gregory").eras(e)}static features(){return{relative:un()}}};function Qs(r,e){let t=s=>s.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=t(e)-t(r);return Math.floor(S.fromMillis(n).as("days"))}function ta(r,e,t){let n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{let u=Qs(l,c);return(u-u%7)/7}],["days",Qs]],s={},i=r,o,a;for(let[l,c]of n)t.indexOf(l)>=0&&(o=l,s[l]=c(r,e),a=i.plus(s),a>e?(s[l]--,r=i.plus(s),r>e&&(a=r,s[l]--,r=i.plus(s))):r=a);return[r,s,a,o]}function Xs(r,e,t,n){let[s,i,o,a]=ta(r,e,t),l=e-s,c=t.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);c.length===0&&(o<e&&(o=s.plus({[a]:1})),o!==s&&(i[a]=(i[a]||0)+l/(o-s)));let u=S.fromObject(i,n);return c.length>0?S.fromMillis(l,n).shiftTo(...c).plus(u):u}var Tr={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},eo={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},na=Tr.hanidec.replace(/[\[|\]]/g,"").split("");function to(r){let e=parseInt(r,10);if(isNaN(e)){e="";for(let t=0;t<r.length;t++){let n=r.charCodeAt(t);if(r[t].search(Tr.hanidec)!==-1)e+=na.indexOf(r[t]);else for(let s in eo){let[i,o]=eo[s];n>=i&&n<=o&&(e+=n-i)}}return parseInt(e,10)}else return e}function P({numberingSystem:r},e=""){return new RegExp(`${Tr[r||"latn"]}${e}`)}var ra="missing Intl.DateTimeFormat.formatToParts support";function M(r,e=t=>t){return{regex:r,deser:([t])=>e(to(t))}}var sa=String.fromCharCode(160),so=`[ ${sa}]`,oo=new RegExp(so,"g");function oa(r){return r.replace(/\./g,"\\.?").replace(oo,so)}function no(r){return r.replace(/\./g,"").replace(oo," ").toLowerCase()}function J(r,e){return r===null?null:{regex:RegExp(r.map(oa).join("|")),deser:([t])=>r.findIndex(n=>no(t)===no(n))+e}}function ro(r,e){return{regex:r,deser:([,t,n])=>_e(t,n),groups:e}}function dn(r){return{regex:r,deser:([e])=>e}}function ia(r){return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function aa(r,e){let t=P(e),n=P(e,"{2}"),s=P(e,"{3}"),i=P(e,"{4}"),o=P(e,"{6}"),a=P(e,"{1,2}"),l=P(e,"{1,3}"),c=P(e,"{1,6}"),u=P(e,"{1,9}"),h=P(e,"{2,4}"),g=P(e,"{4,6}"),p=V=>({regex:RegExp(ia(V.val)),deser:([fe])=>fe,literal:!0}),W=(V=>{if(r.literal)return p(V);switch(V.val){case"G":return J(e.eras("short"),0);case"GG":return J(e.eras("long"),0);case"y":return M(c);case"yy":return M(h,Rt);case"yyyy":return M(i);case"yyyyy":return M(g);case"yyyyyy":return M(o);case"M":return M(a);case"MM":return M(n);case"MMM":return J(e.months("short",!0),1);case"MMMM":return J(e.months("long",!0),1);case"L":return M(a);case"LL":return M(n);case"LLL":return J(e.months("short",!1),1);case"LLLL":return J(e.months("long",!1),1);case"d":return M(a);case"dd":return M(n);case"o":return M(l);case"ooo":return M(s);case"HH":return M(n);case"H":return M(a);case"hh":return M(n);case"h":return M(a);case"mm":return M(n);case"m":return M(a);case"q":return M(a);case"qq":return M(n);case"s":return M(a);case"ss":return M(n);case"S":return M(l);case"SSS":return M(s);case"u":return dn(u);case"uu":return dn(a);case"uuu":return M(t);case"a":return J(e.meridiems(),0);case"kkkk":return M(i);case"kk":return M(h,Rt);case"W":return M(a);case"WW":return M(n);case"E":case"c":return M(t);case"EEE":return J(e.weekdays("short",!1),1);case"EEEE":return J(e.weekdays("long",!1),1);case"ccc":return J(e.weekdays("short",!0),1);case"cccc":return J(e.weekdays("long",!0),1);case"Z":case"ZZ":return ro(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return ro(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return dn(/[a-z_+-/]{1,256}?/i);case" ":return dn(/[^\S\n\r]/);default:return p(V)}})(r)||{invalidReason:ra};return W.token=r,W}var la={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function ca(r,e,t){let{type:n,value:s}=r;if(n==="literal"){let l=/^\s+$/.test(s);return{literal:!l,val:l?" ":s}}let i=e[n],o=n;n==="hour"&&(e.hour12!=null?o=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?o="hour12":o="hour24":o=t.hour12?"hour12":"hour24");let a=la[o];if(typeof a=="object"&&(a=a[i]),a)return{literal:!1,val:a}}function ua(r){return[`^${r.map(t=>t.regex).reduce((t,n)=>`${t}(${n.source})`,"")}$`,r]}function da(r,e,t){let n=r.match(e);if(n){let s={},i=1;for(let o in t)if(me(t,o)){let a=t[o],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(s[a.token.val[0]]=a.deser(n.slice(i,i+l))),i+=l}return[n,s]}else return[n,{}]}function ma(r){let e=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},t=null,n;return E(r.z)||(t=N.create(r.z)),E(r.Z)||(t||(t=new A(r.Z)),n=r.Z),E(r.q)||(r.M=(r.q-1)*3+1),E(r.h)||(r.h<12&&r.a===1?r.h+=12:r.h===12&&r.a===0&&(r.h=0)),r.G===0&&r.y&&(r.y=-r.y),E(r.u)||(r.S=Ht(r.u)),[Object.keys(r).reduce((i,o)=>{let a=e(o);return a&&(i[a]=r[o]),i},{}),t,n]}var Or=null;function ha(){return Or||(Or=v.fromMillis(1555555555555)),Or}function pa(r,e){if(r.literal)return r;let t=D.macroTokenToFormatOpts(r.val),n=Cr(t,e);return n==null||n.includes(void 0)?r:n}function $r(r,e){return Array.prototype.concat(...r.map(t=>pa(t,e)))}function Mr(r,e,t){let n=$r(D.parseFormat(t),r),s=n.map(o=>aa(o,r)),i=s.find(o=>o.invalidReason);if(i)return{input:e,tokens:n,invalidReason:i.invalidReason};{let[o,a]=ua(s),l=RegExp(o,"i"),[c,u]=da(e,l,a),[h,g,p]=u?ma(u):[null,null,void 0];if(me(u,"a")&&me(u,"H"))throw new oe("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:n,regex:l,rawMatches:c,matches:u,result:h,zone:g,specificOffset:p}}}function io(r,e,t){let{result:n,zone:s,specificOffset:i,invalidReason:o}=Mr(r,e,t);return[n,s,i,o]}function Cr(r,e){if(!r)return null;let n=D.create(e,r).dtFormatter(ha()),s=n.formatToParts(),i=n.resolvedOptions();return s.map(o=>ca(o,r,i))}var ao=[0,31,59,90,120,151,181,212,243,273,304,334],lo=[0,31,60,91,121,152,182,213,244,274,305,335];function q(r,e){return new H("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${r}, which is invalid`)}function co(r,e,t){let n=new Date(Date.UTC(r,e-1,t));r<100&&r>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);let s=n.getUTCDay();return s===0?7:s}function uo(r,e,t){return t+(ke(r)?lo:ao)[e-1]}function mo(r,e){let t=ke(r)?lo:ao,n=t.findIndex(i=>i<e),s=e-t[n];return{month:n+1,day:s}}function mn(r){let{year:e,month:t,day:n}=r,s=uo(e,t,n),i=co(e,t,n),o=Math.floor((s-i+10)/7),a;return o<1?(a=e-1,o=Xe(a)):o>Xe(e)?(a=e+1,o=1):a=e,y({weekYear:a,weekNumber:o,weekday:i},Vt(r))}function _r(r){let{weekYear:e,weekNumber:t,weekday:n}=r,s=co(e,1,4),i=Ie(e),o=t*7+n-s-3,a;o<1?(a=e-1,o+=Ie(a)):o>i?(a=e+1,o-=Ie(e)):a=e;let{month:l,day:c}=mo(a,o);return y({year:a,month:l,day:c},Vt(r))}function hn(r){let{year:e,month:t,day:n}=r,s=uo(e,t,n);return y({year:e,ordinal:s},Vt(r))}function kr(r){let{year:e,ordinal:t}=r,{month:n,day:s}=mo(e,t);return y({year:e,month:n,day:s},Vt(r))}function ho(r){let e=zt(r.weekYear),t=te(r.weekNumber,1,Xe(r.weekYear)),n=te(r.weekday,1,7);return e?t?n?!1:q("weekday",r.weekday):q("week",r.week):q("weekYear",r.weekYear)}function po(r){let e=zt(r.year),t=te(r.ordinal,1,Ie(r.year));return e?t?!1:q("ordinal",r.ordinal):q("year",r.year)}function Ir(r){let e=zt(r.year),t=te(r.month,1,12),n=te(r.day,1,Qe(r.year,r.month));return e?t?n?!1:q("day",r.day):q("month",r.month):q("year",r.year)}function Ar(r){let{hour:e,minute:t,second:n,millisecond:s}=r,i=te(e,0,23)||e===24&&t===0&&n===0&&s===0,o=te(t,0,59),a=te(n,0,59),l=te(s,0,999);return i?o?a?l?!1:q("millisecond",s):q("second",n):q("minute",t):q("hour",e)}var Dr="Invalid DateTime",fo=864e13;function pn(r){return new H("unsupported zone",`the zone "${r.name}" is not supported`)}function Fr(r){return r.weekData===null&&(r.weekData=mn(r.c)),r.weekData}function De(r,e){let t={ts:r.ts,zone:r.zone,c:r.c,o:r.o,loc:r.loc,invalid:r.invalid};return new v(R(y(y({},t),e),{old:t}))}function So(r,e,t){let n=r-e*60*1e3,s=t.offset(n);if(e===s)return[n,e];n-=(s-e)*60*1e3;let i=t.offset(n);return s===i?[n,s]:[r-Math.min(s,i)*60*1e3,Math.max(s,i)]}function fn(r,e){r+=e*60*1e3;let t=new Date(r);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hour:t.getUTCHours(),minute:t.getUTCMinutes(),second:t.getUTCSeconds(),millisecond:t.getUTCMilliseconds()}}function vn(r,e,t){return So(Ye(r),e,t)}function yo(r,e){let t=r.o,n=r.c.year+Math.trunc(e.years),s=r.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,i=R(y({},r.c),{year:n,month:s,day:Math.min(r.c.day,Qe(n,s))+Math.trunc(e.days)+Math.trunc(e.weeks)*7}),o=S.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),a=Ye(i),[l,c]=So(a,t,r.zone);return o!==0&&(l+=o,c=r.zone.offset(l)),{ts:l,o:c}}function Zt(r,e,t,n,s,i){let{setZone:o,zone:a}=t;if(r&&Object.keys(r).length!==0||e){let l=e||a,c=v.fromObject(r,R(y({},t),{zone:l,specificOffset:i}));return o?c:c.setZone(a)}else return v.invalid(new H("unparsable",`the input "${s}" can't be parsed as ${n}`))}function yn(r,e,t=!0){return r.isValid?D.create($.create("en-US"),{allowZ:t,forceSimple:!0}).formatDateTimeFromString(r,e):null}function Nr(r,e){let t=r.c.year>9999||r.c.year<0,n="";return t&&r.c.year>=0&&(n+="+"),n+=I(r.c.year,t?6:4),e?(n+="-",n+=I(r.c.month),n+="-",n+=I(r.c.day)):(n+=I(r.c.month),n+=I(r.c.day)),n}function vo(r,e,t,n,s,i){let o=I(r.c.hour);return e?(o+=":",o+=I(r.c.minute),(r.c.millisecond!==0||r.c.second!==0||!t)&&(o+=":")):o+=I(r.c.minute),(r.c.millisecond!==0||r.c.second!==0||!t)&&(o+=I(r.c.second),(r.c.millisecond!==0||!n)&&(o+=".",o+=I(r.c.millisecond,3))),s&&(r.isOffsetFixed&&r.offset===0&&!i?o+="Z":r.o<0?(o+="-",o+=I(Math.trunc(-r.o/60)),o+=":",o+=I(Math.trunc(-r.o%60))):(o+="+",o+=I(Math.trunc(r.o/60)),o+=":",o+=I(Math.trunc(r.o%60)))),i&&(o+="["+r.zone.ianaName+"]"),o}var wo={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},fa={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},ya={ordinal:1,hour:0,minute:0,second:0,millisecond:0},To=["year","month","day","hour","minute","second","millisecond"],va=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],ga=["year","ordinal","hour","minute","second","millisecond"];function go(r){let e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[r.toLowerCase()];if(!e)throw new Ge(r);return e}function bo(r,e){let t=Y(e.zone,C.defaultZone),n=$.fromObject(e),s=C.now(),i,o;if(E(r.year))i=s;else{for(let c of To)E(r[c])&&(r[c]=wo[c]);let a=Ir(r)||Ar(r);if(a)return v.invalid(a);let l=t.offset(s);[i,o]=vn(r,l,t)}return new v({ts:i,zone:t,loc:n,o})}function xo(r,e,t){let n=E(t.round)?!0:t.round,s=(o,a)=>(o=Je(o,n||t.calendary?0:2,!0),e.loc.clone(t).relFormatter(t).format(o,a)),i=o=>t.calendary?e.hasSame(r,o)?0:e.startOf(o).diff(r.startOf(o),o).get(o):e.diff(r,o).get(o);if(t.unit)return s(i(t.unit),t.unit);for(let o of t.units){let a=i(o);if(Math.abs(a)>=1)return s(a,o)}return s(r>e?-0:0,t.units[t.units.length-1])}function Eo(r){let e={},t;return r.length>0&&typeof r[r.length-1]=="object"?(e=r[r.length-1],t=Array.from(r).slice(0,r.length-1)):t=Array.from(r),[e,t]}var v=class{constructor(e){let t=e.zone||C.defaultZone,n=e.invalid||(Number.isNaN(e.ts)?new H("invalid input"):null)||(t.isValid?null:pn(t));this.ts=E(e.ts)?C.now():e.ts;let s=null,i=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[s,i]=[e.old.c,e.old.o];else{let a=t.offset(this.ts);s=fn(this.ts,a),n=Number.isNaN(s.year)?new H("invalid input"):null,s=n?null:s,i=n?null:a}this._zone=t,this.loc=e.loc||$.create(),this.invalid=n,this.weekData=null,this.c=s,this.o=i,this.isLuxonDateTime=!0}static now(){return new v({})}static local(){let[e,t]=Eo(arguments),[n,s,i,o,a,l,c]=t;return bo({year:n,month:s,day:i,hour:o,minute:a,second:l,millisecond:c},e)}static utc(){let[e,t]=Eo(arguments),[n,s,i,o,a,l,c]=t;return e.zone=A.utcInstance,bo({year:n,month:s,day:i,hour:o,minute:a,second:l,millisecond:c},e)}static fromJSDate(e,t={}){let n=Ms(e)?e.valueOf():NaN;if(Number.isNaN(n))return v.invalid("invalid input");let s=Y(t.zone,C.defaultZone);return s.isValid?new v({ts:n,zone:s,loc:$.fromObject(t)}):v.invalid(pn(s))}static fromMillis(e,t={}){if(ee(e))return e<-fo||e>fo?v.invalid("Timestamp out of range"):new v({ts:e,zone:Y(t.zone,C.defaultZone),loc:$.fromObject(t)});throw new z(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,t={}){if(ee(e))return new v({ts:e*1e3,zone:Y(t.zone,C.defaultZone),loc:$.fromObject(t)});throw new z("fromSeconds requires a numerical input")}static fromObject(e,t={}){e=e||{};let n=Y(t.zone,C.defaultZone);if(!n.isValid)return v.invalid(pn(n));let s=C.now(),i=E(t.specificOffset)?n.offset(s):t.specificOffset,o=et(e,go),a=!E(o.ordinal),l=!E(o.year),c=!E(o.month)||!E(o.day),u=l||c,h=o.weekYear||o.weekNumber,g=$.fromObject(t);if((u||a)&&h)throw new oe("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&a)throw new oe("Can't mix ordinal dates with month/day");let p=h||o.weekday&&!u,_,W,V=fn(s,i);p?(_=va,W=fa,V=mn(V)):a?(_=ga,W=ya,V=hn(V)):(_=To,W=wo);let fe=!1;for(let Q of _){let ve=o[Q];E(ve)?fe?o[Q]=W[Q]:o[Q]=V[Q]:fe=!0}let Pt=p?ho(o):a?po(o):Ir(o),ut=Pt||Ar(o);if(ut)return v.invalid(ut);let qt=p?_r(o):a?kr(o):o,[K,ye]=vn(qt,i,n),le=new v({ts:K,zone:n,o:ye,loc:g});return o.weekday&&u&&e.weekday!==le.weekday?v.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${le.toISO()}`):le}static fromISO(e,t={}){let[n,s]=Ws(e);return Zt(n,s,t,"ISO 8601",e)}static fromRFC2822(e,t={}){let[n,s]=Zs(e);return Zt(n,s,t,"RFC 2822",e)}static fromHTTP(e,t={}){let[n,s]=Bs(e);return Zt(n,s,t,"HTTP",t)}static fromFormat(e,t,n={}){if(E(e)||E(t))throw new z("fromFormat requires an input string and a format");let{locale:s=null,numberingSystem:i=null}=n,o=$.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0}),[a,l,c,u]=io(o,e,t);return u?v.invalid(u):Zt(a,l,n,`format ${t}`,e,c)}static fromString(e,t,n={}){return v.fromFormat(e,t,n)}static fromSQL(e,t={}){let[n,s]=js(e);return Zt(n,s,t,"SQL",e)}static invalid(e,t=null){if(!e)throw new z("need to specify a reason the DateTime is invalid");let n=e instanceof H?e:new H(e,t);if(C.throwOnInvalid)throw new tn(n);return new v({invalid:n})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){let n=Cr(e,$.fromObject(t));return n?n.map(s=>s?s.val:null).join(""):null}static expandFormat(e,t={}){return $r(D.parseFormat(e),$.fromObject(t)).map(s=>s.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Fr(this).weekYear:NaN}get weekNumber(){return this.isValid?Fr(this).weekNumber:NaN}get weekday(){return this.isValid?Fr(this).weekday:NaN}get ordinal(){return this.isValid?hn(this.c).ordinal:NaN}get monthShort(){return this.isValid?ae.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?ae.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?ae.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?ae.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,t=6e4,n=Ye(this.c),s=this.zone.offset(n-e),i=this.zone.offset(n+e),o=this.zone.offset(n-s*t),a=this.zone.offset(n-i*t);if(o===a)return[this];let l=n-o*t,c=n-a*t,u=fn(l,o),h=fn(c,a);return u.hour===h.hour&&u.minute===h.minute&&u.second===h.second&&u.millisecond===h.millisecond?[De(this,{ts:l}),De(this,{ts:c})]:[this]}get isInLeapYear(){return ke(this.year)}get daysInMonth(){return Qe(this.year,this.month)}get daysInYear(){return this.isValid?Ie(this.year):NaN}get weeksInWeekYear(){return this.isValid?Xe(this.weekYear):NaN}resolvedLocaleOptions(e={}){let{locale:t,numberingSystem:n,calendar:s}=D.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:s}}toUTC(e=0,t={}){return this.setZone(A.instance(e),t)}toLocal(){return this.setZone(C.defaultZone)}setZone(e,{keepLocalTime:t=!1,keepCalendarTime:n=!1}={}){if(e=Y(e,C.defaultZone),e.equals(this.zone))return this;if(e.isValid){let s=this.ts;if(t||n){let i=e.offset(this.ts),o=this.toObject();[s]=vn(o,i,e)}return De(this,{ts:s,zone:e})}else return v.invalid(pn(e))}reconfigure({locale:e,numberingSystem:t,outputCalendar:n}={}){let s=this.loc.clone({locale:e,numberingSystem:t,outputCalendar:n});return De(this,{loc:s})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let t=et(e,go),n=!E(t.weekYear)||!E(t.weekNumber)||!E(t.weekday),s=!E(t.ordinal),i=!E(t.year),o=!E(t.month)||!E(t.day),a=i||o,l=t.weekYear||t.weekNumber;if((a||s)&&l)throw new oe("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(o&&s)throw new oe("Can't mix ordinal dates with month/day");let c;n?c=_r(y(y({},mn(this.c)),t)):E(t.ordinal)?(c=y(y({},this.toObject()),t),E(t.day)&&(c.day=Math.min(Qe(c.year,c.month),c.day))):c=kr(y(y({},hn(this.c)),t));let[u,h]=vn(c,this.o,this.zone);return De(this,{ts:u,o:h})}plus(e){if(!this.isValid)return this;let t=S.fromDurationLike(e);return De(this,yo(this,t))}minus(e){if(!this.isValid)return this;let t=S.fromDurationLike(e).negate();return De(this,yo(this,t))}startOf(e){if(!this.isValid)return this;let t={},n=S.normalizeUnit(e);switch(n){case"years":t.month=1;case"quarters":case"months":t.day=1;case"weeks":case"days":t.hour=0;case"hours":t.minute=0;case"minutes":t.second=0;case"seconds":t.millisecond=0;break;case"milliseconds":break}if(n==="weeks"&&(t.weekday=1),n==="quarters"){let s=Math.ceil(this.month/3);t.month=(s-1)*3+1}return this.set(t)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e,t={}){return this.isValid?D.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):Dr}toLocaleString(e=ue,t={}){return this.isValid?D.create(this.loc.clone(t),e).formatDateTime(this):Dr}toLocaleParts(e={}){return this.isValid?D.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:s=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;let o=e==="extended",a=Nr(this,o);return a+="T",a+=vo(this,o,t,n,s,i),a}toISODate({format:e="extended"}={}){return this.isValid?Nr(this,e==="extended"):null}toISOWeekDate(){return yn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:s=!1,extendedZone:i=!1,format:o="extended"}={}){return this.isValid?(s?"T":"")+vo(this,o==="extended",t,e,n,i):null}toRFC2822(){return yn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return yn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Nr(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let s="HH:mm:ss.SSS";return(t||e)&&(n&&(s+=" "),t?s+="z":e&&(s+="ZZ")),yn(this,s,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Dr}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let t=y({},this.c);return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t="milliseconds",n={}){if(!this.isValid||!e.isValid)return S.invalid("created by diffing an invalid DateTime");let s=y({locale:this.locale,numberingSystem:this.numberingSystem},n),i=Cs(t).map(S.normalizeUnit),o=e.valueOf()>this.valueOf(),a=o?this:e,l=o?e:this,c=Xs(a,l,i,s);return o?c.negate():c}diffNow(e="milliseconds",t={}){return this.diff(v.now(),e,t)}until(e){return this.isValid?k.fromDateTimes(this,e):this}hasSame(e,t){if(!this.isValid)return!1;let n=e.valueOf(),s=this.setZone(e.zone,{keepLocalTime:!0});return s.startOf(t)<=n&&n<=s.endOf(t)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let t=e.base||v.fromObject({},{zone:this.zone}),n=e.padding?this<t?-e.padding:e.padding:0,s=["years","months","days","hours","minutes","seconds"],i=e.unit;return Array.isArray(e.unit)&&(s=e.unit,i=void 0),xo(t,this.plus(n),R(y({},e),{numeric:"always",units:s,unit:i}))}toRelativeCalendar(e={}){return this.isValid?xo(e.base||v.fromObject({},{zone:this.zone}),this,R(y({},e),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...e){if(!e.every(v.isDateTime))throw new z("min requires all arguments be DateTimes");return yr(e,t=>t.valueOf(),Math.min)}static max(...e){if(!e.every(v.isDateTime))throw new z("max requires all arguments be DateTimes");return yr(e,t=>t.valueOf(),Math.max)}static fromFormatExplain(e,t,n={}){let{locale:s=null,numberingSystem:i=null}=n,o=$.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0});return Mr(o,e,t)}static fromStringExplain(e,t,n={}){return v.fromFormatExplain(e,t,n)}static get DATE_SHORT(){return ue}static get DATE_MED(){return vt}static get DATE_MED_WITH_WEEKDAY(){return er}static get DATE_FULL(){return gt}static get DATE_HUGE(){return bt}static get TIME_SIMPLE(){return xt}static get TIME_WITH_SECONDS(){return Et}static get TIME_WITH_SHORT_OFFSET(){return St}static get TIME_WITH_LONG_OFFSET(){return wt}static get TIME_24_SIMPLE(){return Tt}static get TIME_24_WITH_SECONDS(){return Ot}static get TIME_24_WITH_SHORT_OFFSET(){return $t}static get TIME_24_WITH_LONG_OFFSET(){return Mt}static get DATETIME_SHORT(){return Ct}static get DATETIME_SHORT_WITH_SECONDS(){return _t}static get DATETIME_MED(){return kt}static get DATETIME_MED_WITH_SECONDS(){return It}static get DATETIME_MED_WITH_WEEKDAY(){return tr}static get DATETIME_FULL(){return At}static get DATETIME_FULL_WITH_SECONDS(){return Dt}static get DATETIME_HUGE(){return Ft}static get DATETIME_HUGE_WITH_SECONDS(){return Nt}};function lt(r){if(v.isDateTime(r))return r;if(r&&r.valueOf&&ee(r.valueOf()))return v.fromJSDate(r);if(r&&typeof r=="object")return v.fromObject(r);throw new z(`Unknown datetime argument: ${r}, of type ${typeof r}`)}var Oo=O(x),ba=[Oo.styles,Zn],Fe=class extends Oo{constructor(){super();this.updateComment=({detail:t})=>{let{text:n}=t;this.text=n,this.closeEditMode(),this.emitEvent("update-comment",{uuid:this.uuid,text:n})};this.resolveAnnotation=()=>{this.emitEvent("resolve-annotation",{type:"resolve-annotation",resolved:!this.resolved},{composed:!1,bubbles:!1})};this.confirmDelete=()=>{if(this.deleteCommentModalOpen=!1,this.primaryComment)return this.emitEvent("delete-annotation",{uuid:this.annotationId});this.emitEvent("delete-comment",{uuid:this.uuid})};this.closeEditMode=()=>{this.mode="readonly"};this.resolved=!1}render(){let t=this.annotationFilter==="all"?"resolve":"undo",n=p=>v.fromISO(p).toFormat("yyyy-dd-MM"),s=this.resolvable?"comment-item__resolve":"hidden",i=[{label:"EDIT"},{label:"DELETE"}],o=({detail:p})=>{p==="EDIT"&&(this.mode="editable"),p==="DELETE"&&(this.deleteCommentModalOpen=!0)},a=()=>{this.text.length<120||(this.expandElipsis=!0)},l=()=>{if(this.mode==="editable")return f`
        <superviz-comments-comment-input
          class="comment-item--editable"
          editable
          text=${this.text}
          eventType="update-comment" @update-comment=${this.updateComment}
          @close-edit-mode=${this.closeEditMode}
        ></superviz-comments-comment-input>
      `},c=()=>{if(this.mode!=="editable")return f`
        <span id="comment-text" @click=${a} class="text text-big sv-gray-700 ${g}">${this.text}</span>
      `},u=()=>{this.deleteCommentModalOpen=!1},h={"comment-item":!0,reply:!this.primaryComment},g=!this.expandElipsis&&this.text.length>120?"line-clamp":"";return f`
      <div class=${F(h)}>
        <div class="comment-item__user">
          <div class="comment-item__user-details">
            <div class="comment-item__avatar">
              <img src=${this.avatar} />
            </div>
            <span class="text text-bold sv-gray-600">${this.username}</span>
            <span class="text text-small sv-gray-500">${n(this.createdAt)}</span>
          </div>
          <button @click=${this.resolveAnnotation} class="icon-button icon-button--clickable icon-button--xsmall ${s}">
            <superviz-icon name=${t} size="md"></superviz-icon>
          </button>
          <superviz-dropdown 
            options=${JSON.stringify(i)}
            label="label"
            returnTo="label"
            position="bottom-right"
            @selected=${o}
          >
            <button slot="dropdown" class="icon-button icon-button--clickable icon-button--small">
              <superviz-icon name="more" size="sm"></superviz-icon>
            </button>
          </superviz-dropdown>
        </div>

        <div class="comment-item__content">
          <div class="comment-item__content__body">
            ${l()}
            ${c()}
          </div>
        </div>
      </div>
      <superviz-comments-delete-comments-modal ?open=${this.deleteCommentModalOpen} @close=${u} @confirm=${this.confirmDelete}>
      </superviz-comments-delete-comments-modal>
    `}};Fe.styles=ba,Fe.properties={uuid:{type:String},annotationId:{type:String},avatar:{type:String},username:{type:String},text:{type:String},resolved:{type:Boolean},resolvable:{type:Boolean},createdAt:{type:String},mode:{type:String},deleteCommentModalOpen:{type:Boolean},primaryComment:{type:Boolean},expandElipsis:{type:Boolean},annotationFilter:{type:String}},Fe=w([T("superviz-comments-comment-item")],Fe);var $o=O(x),xa=[$o.styles,Pn],Ne=class extends $o{constructor(){super();this.pinCoordinates=null;this.getCommentInput=()=>this.shadowRoot.getElementById("comment-input--textarea");this.getCommentInputContainer=()=>this.shadowRoot.getElementById("comment-input--container");this.getSendBtn=()=>this.shadowRoot.querySelector(".comment-input--send-btn");this.commentInputFocus=({detail:t})=>{this.pinCoordinates=t,this.getCommentInput().focus()};this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1})};this.btnActive=!1,this.text=""}connectedCallback(){super.connectedCallback(),this.eventType==="create-annotation"&&window.document.body.addEventListener("comment-input-focus",this.commentInputFocus)}disconnectedCallback(){super.disconnectedCallback(),this.eventType==="create-annotation"&&window.document.body.removeEventListener("comment-input-focus",this.commentInputFocus)}updated(t){if(t.has("text")&&this.text.length>0){let n=this.getCommentInput();n.value=this.text,this.updateHeight()}if(t.has("btnActive")){let n=this.getSendBtn();n.disabled=!this.btnActive}}updateHeight(){let t=this.getCommentInput(),n=this.getCommentInputContainer();t.style.height="0px",n.style.height="0px";let s=t.scrollHeight+4,i=t.scrollHeight;t.style.height=`${s}px`,n.style.height=`${i}px`;let o=this.getSendBtn();o.disabled=!(t.value.length>0)}send(t){var o,a,l,c,u,h,g,p;t.preventDefault();let n=this.getCommentInput(),s=this.getSendBtn(),i=n.value;this.emitEvent(this.eventType,{text:i,position:{x:(a=(o=this.pinCoordinates)==null?void 0:o.x)!=null?a:null,y:(c=(l=this.pinCoordinates)==null?void 0:l.y)!=null?c:null,z:(h=(u=this.pinCoordinates)==null?void 0:u.z)!=null?h:null,type:(p=(g=this.pinCoordinates)==null?void 0:g.type)!=null?p:null}},{composed:!1,bubbles:!1}),this.pinCoordinates=null,n.value="",s.disabled=!0,this.updateHeight()}render(){let t=()=>{if(!!this.editable)return f`
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
      `},n=()=>{if(!this.editable)return f`
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
            ${n()} ${t()}
          </div>
        </div>
      </div>
    `}};Ne.styles=xa,Ne.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean}},Ne=w([T("superviz-comments-comment-input")],Ne);var Mo=O(x),Ea=[Mo.styles,Gn],Le=class extends Mo{constructor(){super();this.position={x:0,y:0}}emitClick(){document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:this.annotation.uuid}}))}render(){var n,s;let t={"annotation-pin":!0,"annotation-pin--active":this.active};return this.type==="add"?f`
        <div
          class=${F(t)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          <div class="annotation-pin__avatar annotation-pin__avatar--add">
            <superviz-icon name="add"></superviz-icon>
          </div>
        </div>
      `:f`
      <div
        @click=${this.emitClick}
        class=${F(t)}
        style=${`top: ${(n=this.position)==null?void 0:n.y}px; left: ${(s=this.position)==null?void 0:s.x}px;`}
      >
        <div class="annotation-pin__avatar">
          <p class="text text-bold text-big">U</p>
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
      </div>
    `}};Le.styles=Ea,Le.properties={type:{type:String},annotation:{type:Object},position:{type:Object},active:{type:Boolean}},Le=w([T("superviz-comments-annotation-pin")],Le);var Co=O(x),Sa=[Co.styles,qn],ze=class extends Co{constructor(){super(...arguments);this.selectAnnotation=()=>{let{uuid:t}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:t}}))}}firstUpdated(){this.resolved=this.annotation.resolved}updated(t){if(t.has("selected")){let n=this.selected===this.annotation.uuid;this.expandComments=n}}createComment({detail:t}){let{text:n}=t;this.emitEvent("create-comment",{uuid:this.annotation.uuid,text:n})}render(){var V,fe,Pt,ut,qt;let t=this.annotationFilter==="all",n=this.annotationFilter==="resolved",s=(V=this.annotation.comments)==null?void 0:V.length,i=this.selected===this.annotation.uuid,o={"annotation-item":!0,"annotation-item--selected":i},a={hidden:this.resolved&&t||!this.resolved&&n},l={"sv-hr":!0,hidden:this.isLastAnnotation},c={"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&s>1,hidden:!(!this.expandComments&&s>1)},u={"comments-container":!0,"comment-item--expand":i&&this.expandComments,hidden:!(i&&this.expandComments)},h=({detail:K})=>{let{uuid:ye}=this.annotation,{resolved:le,type:Q}=K,ve=Q==="resolve-annotation"&&this.annotationFilter==="all";this.resolved=le,this.emitEvent("resolve-annotation",{uuid:ye,resolved:le}),ve&&(this.shouldShowUndoResolved=!0)},g=()=>{this.shouldShowUndoResolved=!1},p=()=>{let K=s>=5?5:s,ye=s-1>5?"last-reply":"",le=s-1>1?"replies":"reply",Q=[];for(let ve=0;ve<K;ve++)Q.push(f`
          <div class="avatar avatar-divs-${ve}">
            <img src="https://picsum.photos/200/300" />
          </div>
        `);return f`
        ${Q}
        <div class="avatar-divs-${K} replies ${ye} text text-big sv-gray-500">
          ${s-1} ${le}
        </div>
      `},_=(K,ye)=>ye===0?f``:f`
        <superviz-comments-comment-item
          uuid=${K.uuid}
          avatar="https://picsum.photos/200/300"
          username="username"
          text=${K.text}
          createdAt=${K.createdAt}
        ></superviz-comments-comment-item>
      `;return f`
      ${(()=>this.shouldShowUndoResolved?f`
        <superviz-comments-annotation-resolved
          @undo-resolve=${h}
          @hide=${g}
          class=${F({hidden:n})}
        >
        </superviz-comments-annotation-resolved>
      `:f``)()}

      <div class=${F(a)}>
        <div class=${F(o)} @click=${this.selectAnnotation}>
          <div>
            <superviz-comments-comment-item
              uuid=${(fe=this.annotation.comments)==null?void 0:fe[0].uuid}
              annotationId=${this.annotation.uuid}
              avatar="https://picsum.photos/200/300"
              username="username"
              text=${(Pt=this.annotation.comments)==null?void 0:Pt[0].text}
              createdAt=${(ut=this.annotation.comments)==null?void 0:ut[0].createdAt}
              primaryComment
              resolvable
              ?resolved=${this.resolved}
              annotationFilter=${this.annotationFilter}
              @resolve-annotation=${h}
            ></superviz-comments-comment-item>

            <div class=${F(c)}>
              <div class="avatar-container">${p()}</div>
            </div>
          </div>

          <div class=${F(u)}>
            ${(qt=this.annotation.comments)==null?void 0:qt.map(_)}
            <superviz-comments-comment-input
              @create-comment=${this.createComment}
              eventType="create-comment"
            ></superviz-comments-comment-input>
          </div>
        </div>
        <div class=${F(l)}></div>
      </div>
    `}};ze.styles=Sa,ze.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String}},ze=w([T("superviz-comments-annotation-item")],ze);var _o=O(x),wa=[_o.styles],He=class extends _o{constructor(){super(...arguments);this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:f`<span class="text text-big sv-gray-600">Are you sure you want to delete this comment? <br /> This action cannot be undone</span>`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))};this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{!this.open||this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{!this.open||(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(t){t.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){!this.open||(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){let t=()=>{if(!!this.useSlot)return f`<slot name="modal-handler" @click=${this.toggle}></slot>`},n=()=>{if(!!this.open)return f`
        <superviz-modal></superviz-modal>
      `};return f`
      ${t()}
      ${n()}
    `}};He.styles=wa,He.properties={open:{type:Boolean},useSlot:{type:Boolean}},He=w([T("superviz-comments-delete-comments-modal")],He);var ko=O(x),Ta=[ko.styles,jn],Oa=10*1e3,Re=class extends ko{constructor(){super();this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)};this.timeToHide=Oa,this.isCanceled=!1}firstUpdated(){this.setTimer()}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return this.timeToHide===0?f``:this.isCanceled?f``:f`
      <div class="annotation-resolved">
        <span class="text text-big sv-gray-700">You resolve this comment</span>
        <button id="undone" @click=${this.undone} class="icon-button icon-button--clickable icon-button--medium">
          <superviz-icon name="undo" size="md"></superviz-icon>
        </button>
      </div>
    `}};Re.styles=Ta,Re.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},Re=w([T("superviz-comments-annotation-resolved")],Re);var Io=O(x),$a=[Io.styles,Yn],Bt=[{label:"All comments",code:"all"},{label:"Resolved comments",code:"resolved"}],Ve=class extends Io{constructor(){super();this.caret="down"}render(){let t=this.filter==="all"?Bt[0].label:Bt[1].label,n=({detail:a})=>{this.emitEvent("select",{filter:a}),s()},s=()=>{this.caret=this.caret==="down"?"up":"down"},i=this.filter==="all"?Bt[0].code:Bt[1].code,o={text:!0,"text-bold":!0,"select-content":!0,"sv-gray-500":this.caret==="down","sv-gray-700":this.caret==="up"};return f`
      <div class="select">
        <div class="select-container">
          <superviz-dropdown 
            options=${JSON.stringify(Bt)}
            active=${i}
            label="label"
            returnTo="code"
            position="bottom-left"
            right-offset="100px"
            @click=${s}
            @selected=${n}
            @close=${s}
          >
            <div class="content" slot="dropdown">
              <span class=${F(o)}>${t}</span>
              <superviz-icon name=${this.caret} size="md"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};Ve.styles=$a,Ve.properties={filter:{type:String},caret:{type:String}},Ve=w([T("superviz-comments-annotation-filter")],Ve);var Ao=O(x),Ma=[Ao.styles,Jn],ct=class extends Ao{toggle(){this.emitEvent("toggle",{})}render(){return f` <button @click=${this.toggle} class="float-button">
      <superviz-icon name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`}};ct.styles=Ma,ct=w([T("superviz-comments-button")],ct);export{$e as Comments,Ve as CommentsAnnotationFilter,ze as CommentsAnnotationItem,Le as CommentsAnnotationPin,Re as CommentsAnnotationResolved,Me as CommentsAnnotations,Ne as CommentsCommentInput,Fe as CommentsCommentItem,Ce as CommentsContent,ct as CommentsFloatButton,je as CommentsTopbar,He as DeleteCommentModal,Oe as Dropdown,we as HelloWorld,Te as Icon,Pe as Modal,qe as ModalContainer,Be as PresenceMouse};
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
