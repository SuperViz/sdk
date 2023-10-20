var Rr=Object.defineProperty,No=Object.defineProperties,Lo=Object.getOwnPropertyDescriptor,zo=Object.getOwnPropertyDescriptors;var Ye=Object.getOwnPropertySymbols;var Vr=Object.prototype.hasOwnProperty,Ur=Object.prototype.propertyIsEnumerable;var Wr=Math.pow,Hr=(r,t,e)=>t in r?Rr(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,y=(r,t)=>{for(var e in t||(t={}))Vr.call(t,e)&&Hr(r,e,t[e]);if(Ye)for(var e of Ye(t))Ur.call(t,e)&&Hr(r,e,t[e]);return r},R=(r,t)=>No(r,zo(t));var xn=(r,t)=>{var e={};for(var n in r)Vr.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&Ye)for(var n of Ye(r))t.indexOf(n)<0&&Ur.call(r,n)&&(e[n]=r[n]);return e};var w=(r,t,e,n)=>{for(var s=n>1?void 0:n?Lo(t,e):t,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&Rr(t,e,s),s};var ue=(r,t,e)=>new Promise((n,s)=>{var i=l=>{try{a(e.next(l))}catch(c){s(c)}},o=l=>{try{a(e.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(i,o);a((e=e.apply(r,t)).next())});var Je=window,Ke=Je.ShadowRoot&&(Je.ShadyCSS===void 0||Je.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,En=Symbol(),Br=new WeakMap,de=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==En)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ke&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Br.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Br.set(e,t))}return t}toString(){return this.cssText}},Zr=r=>new de(typeof r=="string"?r:r+"",void 0,En),b=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((n,s,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[i+1],r[0]);return new de(e,r,En)},Sn=(r,t)=>{Ke?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let n=document.createElement("style"),s=Je.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=e.cssText,r.appendChild(n)})},Qe=Ke?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Zr(e)})(r):r;var wn,Xe=window,Pr=Xe.trustedTypes,Ho=Pr?Pr.emptyScript:"",qr=Xe.reactiveElementPolyfillSupport,On={toAttribute(r,t){switch(t){case Boolean:r=r?Ho:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch(n){e=null}}return e}},jr=(r,t)=>t!==r&&(t==t||r==r),Tn={attribute:!0,type:String,converter:On,reflect:!1,hasChanged:jr},$n="finalized",nt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,n)=>{let s=this._$Ep(n,e);s!==void 0&&(this._$Ev.set(s,n),t.push(s))}),t}static createProperty(t,e=Tn){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let n=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,n,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(s){let i=this[t];this[e]=s,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Tn}static finalize(){if(this.hasOwnProperty($n))return!1;this[$n]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,n=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of n)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let s of n)e.unshift(Qe(s))}else t!==void 0&&e.push(Qe(t));return e}static _$Ep(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,n;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Sn(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var n;return(n=e.hostConnected)===null||n===void 0?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var n;return(n=e.hostDisconnected)===null||n===void 0?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e,n=Tn){var s;let i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){let o=(((s=n.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?n.converter:On).toAttribute(e,n.type);this._$El=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(t,e){var n;let s=this.constructor,i=s._$Ev.get(t);if(i!==void 0&&this._$El!==i){let o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:On;this._$El=i,this[i]=a.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,n){let s=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||jr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}_$Ej(){return ue(this,null,function*(){this.isUpdatePending=!0;try{yield this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&(yield t),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(n)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostUpdated)===null||s===void 0?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,n)=>this._$EO(n,this[n],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};nt[$n]=!0,nt.elementProperties=new Map,nt.elementStyles=[],nt.shadowRootOptions={mode:"open"},qr==null||qr({ReactiveElement:nt}),((wn=Xe.reactiveElementVersions)!==null&&wn!==void 0?wn:Xe.reactiveElementVersions=[]).push("1.6.2");var _n,tn=window,Rt=tn.trustedTypes,Gr=Rt?Rt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Mn="$lit$",lt=`lit$${(Math.random()+"").slice(9)}$`,es="?"+lt,Ro=`<${es}>`,vt=document,he=()=>vt.createComment(""),pe=r=>r===null||typeof r!="object"&&typeof r!="function",ns=Array.isArray,Vo=r=>ns(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Cn=`[ 	
\f\r]`,me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yr=/-->/g,Jr=/>/g,ft=RegExp(`>|${Cn}(?:([^\\s"'>=/]+)(${Cn}*=${Cn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Kr=/'/g,Qr=/"/g,rs=/^(?:script|style|textarea|title)$/i,ss=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=ss(1),Na=ss(2),rt=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Xr=new WeakMap,yt=vt.createTreeWalker(vt,129,null,!1);function os(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gr!==void 0?Gr.createHTML(t):t}var Uo=(r,t)=>{let e=r.length-1,n=[],s,i=t===2?"<svg>":"",o=me;for(let a=0;a<e;a++){let l=r[a],c,u,h=-1,g=0;for(;g<l.length&&(o.lastIndex=g,u=o.exec(l),u!==null);)g=o.lastIndex,o===me?u[1]==="!--"?o=Yr:u[1]!==void 0?o=Jr:u[2]!==void 0?(rs.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=ft):u[3]!==void 0&&(o=ft):o===ft?u[0]===">"?(o=s!=null?s:me,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?ft:u[3]==='"'?Qr:Kr):o===Qr||o===Kr?o=ft:o===Yr||o===Jr?o=me:(o=ft,s=void 0);let p=o===ft&&r[a+1].startsWith("/>")?" ":"";i+=o===me?l+Ro:h>=0?(n.push(c),l.slice(0,h)+Mn+l.slice(h)+lt+p):l+lt+(h===-2?(n.push(void 0),a):p)}return[os(r,i+(r[e]||"<?>")+(t===2?"</svg>":"")),n]},gt=class{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let i=0,o=0,a=t.length-1,l=this.parts,[c,u]=Uo(t,e);if(this.el=gt.createElement(c,n),yt.currentNode=this.el.content,e===2){let h=this.el.content,g=h.firstChild;g.remove(),h.append(...g.childNodes)}for(;(s=yt.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){let h=[];for(let g of s.getAttributeNames())if(g.endsWith(Mn)||g.startsWith(lt)){let p=u[o++];if(h.push(g),p!==void 0){let O=s.getAttribute(p.toLowerCase()+Mn).split(lt),V=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:V[2],strings:O,ctor:V[1]==="."?An:V[1]==="?"?In:V[1]==="@"?Dn:Ut})}else l.push({type:6,index:i})}for(let g of h)s.removeAttribute(g)}if(rs.test(s.tagName)){let h=s.textContent.split(lt),g=h.length-1;if(g>0){s.textContent=Rt?Rt.emptyScript:"";for(let p=0;p<g;p++)s.append(h[p],he()),yt.nextNode(),l.push({type:2,index:++i});s.append(h[g],he())}}}else if(s.nodeType===8)if(s.data===es)l.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(lt,h+1))!==-1;)l.push({type:7,index:i}),h+=lt.length-1}i++}}static createElement(t,e){let n=vt.createElement("template");return n.innerHTML=t,n}};function Vt(r,t,e=r,n){var s,i,o,a;if(t===rt)return t;let l=n!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[n]:e._$Cl,c=pe(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),c===void 0?l=void 0:(l=new c(r),l._$AT(r,e,n)),n!==void 0?((o=(a=e)._$Co)!==null&&o!==void 0?o:a._$Co=[])[n]=l:e._$Cl=l),l!==void 0&&(t=Vt(r,l._$AS(r,t.values),l,n)),t}var kn=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:n},parts:s}=this._$AD,i=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:vt).importNode(n,!0);yt.currentNode=i;let o=yt.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new bt(o,o.nextSibling,this,t):c.type===1?u=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(u=new Fn(o,this,t)),this._$AV.push(u),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=yt.nextNode(),a++)}return yt.currentNode=vt,i}v(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},bt=class{constructor(t,e,n,s){var i;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cp=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Vt(this,t,e),pe(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==rt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Vo(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&pe(this._$AH)?this._$AA.nextSibling.data=t:this.$(vt.createTextNode(t)),this._$AH=t}g(t){var e;let{values:n,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=gt.createElement(os(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.v(n);else{let o=new kn(i,this),a=o.u(this.options);o.v(n),this.$(a),this._$AH=o}}_$AC(t){let e=Xr.get(t.strings);return e===void 0&&Xr.set(t.strings,e=new gt(t)),e}T(t){ns(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,s=0;for(let i of t)s===e.length?e.push(n=new bt(this.k(he()),this.k(he()),this,this.options)):n=e[s],n._$AI(i),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ut=class{constructor(t,e,n,s,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,s){let i=this.strings,o=!1;if(i===void 0)t=Vt(this,t,e,0),o=!pe(t)||t!==this._$AH&&t!==rt,o&&(this._$AH=t);else{let a=t,l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Vt(this,a[n+l],e,l),c===rt&&(c=this._$AH[l]),o||(o=!pe(c)||c!==this._$AH[l]),c===L?t=L:t!==L&&(t+=(c!=null?c:"")+i[l+1]),this._$AH[l]=c}o&&!s&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},An=class extends Ut{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}},Wo=Rt?Rt.emptyScript:"",In=class extends Ut{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,Wo):this.element.removeAttribute(this.name)}},Dn=class extends Ut{constructor(t,e,n,s,i){super(t,e,n,s,i),this.type=5}_$AI(t,e=this){var n;if((t=(n=Vt(this,t,e,0))!==null&&n!==void 0?n:L)===rt)return;let s=this._$AH,i=t===L&&s!==L||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==L&&(s===L||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;typeof this._$AH=="function"?this._$AH.call((n=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}},Fn=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Vt(this,t)}};var ts=tn.litHtmlPolyfillSupport;ts==null||ts(gt,bt),((_n=tn.litHtmlVersions)!==null&&_n!==void 0?_n:tn.litHtmlVersions=[]).push("2.7.5");var is=(r,t,e)=>{var n,s;let i=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:t,o=i._$litPart$;if(o===void 0){let a=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new bt(t.insertBefore(he(),a),a,void 0,e!=null?e:{})}return o._$AI(r),o};var Nn,Ln;var x=class extends nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let n=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=n.firstChild),n}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=is(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return rt}};x.finalized=!0,x._$litElement$=!0,(Nn=globalThis.litElementHydrateSupport)===null||Nn===void 0||Nn.call(globalThis,{LitElement:x});var as=globalThis.litElementPolyfillSupport;as==null||as({LitElement:x});((Ln=globalThis.litElementVersions)!==null&&Ln!==void 0?Ln:globalThis.litElementVersions=[]).push("3.3.2");var T=r=>t=>typeof t=="function"?((e,n)=>(customElements.define(e,n),n))(r,t):((e,n)=>{let{kind:s,elements:i}=n;return{kind:s,elements:i,finisher(o){customElements.define(e,o)}}})(r,t);var zn,cl=((zn=window.HTMLSlotElement)===null||zn===void 0?void 0:zn.prototype.assignedElements)!=null?(r,t)=>r.assignedElements(t):(r,t)=>r.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var xt=class extends x{render(){return f` <div>Hello from SuperViz, ${this.name}</div> `}};xt.properties={name:{type:String}},xt.styles=b`
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      color: white;
    }
  `,xt=w([T("superviz-hello-world")],xt);var Hn=b`
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
`;var Rn=b`
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
`;var Vn=b`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;var Un=b`
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
`;var $=r=>{var e;class t extends r{connectedCallback(){setTimeout(()=>{var o;let s=document.getElementById("superviz-style"),i=document.createElement("style");i.innerHTML=(s==null?void 0:s.innerHTML)||"",(o=this.shadowRoot)==null||o.appendChild(i)}),super.connectedCallback()}emitEvent(s,i,o={composed:!0,bubbles:!0}){let a=new CustomEvent(s,y({detail:i},o));this.dispatchEvent(a)}}return t.styles=[Hn,Rn,Vn,Un,(e=r.styles)!=null?e:[]],t};var ls=$(x),Bo=[ls.styles],Et=class extends ls{constructor(){super();this.name="",this.size="md"}render(){return f` <i class="sv-icon sv-icon-${this.name}_${this.size}"></i> `}};Et.properties={name:{type:String},size:{type:String}},Et.styles=[Bo,b`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }
    `],Et=w([T("superviz-icon")],Et);var cs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},us=r=>(...t)=>({_$litDirective$:r,values:t}),en=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var F=us(class extends en{constructor(r){var t;if(super(r),r.type!==cs.ATTRIBUTE||r.name!=="class"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var e,n;if(this.it===void 0){this.it=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in t)t[i]&&!(!((e=this.nt)===null||e===void 0)&&e.has(i))&&this.it.add(i);return this.render(t)}let s=r.element.classList;this.it.forEach(i=>{i in t||(s.remove(i),this.it.delete(i))});for(let i in t){let o=!!t[i];o===this.it.has(i)||((n=this.nt)===null||n===void 0?void 0:n.has(i))||(o?(s.add(i),this.it.add(i)):(s.remove(i),this.it.delete(i)))}return rt}});var ds=b`
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
`;var ms=$(x),Zo=[ms.styles,ds],St=class extends ms{constructor(){super(...arguments);this.onClickOutDropdown=e=>{if(e.stopPropagation(),!this.open)return;let n=e.composedPath(),s=this.shadowRoot.querySelector(".dropdown-content"),i=this.shadowRoot.querySelector(".dropdown-list"),a=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],l=n.includes(s),c=n.includes(i),u=n.includes(a);l||c||u||(this.open=!1)};this.close=()=>{this.emitEvent("close",{bubbles:!1,composed:!1})};this.callbackSelected=e=>{this.open=!1;let n=this.returnTo?e[this.returnTo]:e;this.emitEvent("selected",n,{bubbles:!1,composed:!1})}}updated(e){e.has("open")&&(this.open&&document.addEventListener("click",this.onClickOutDropdown),this.open||(document.removeEventListener("click",this.onClickOutDropdown),this.close()))}render(){let e={menu:!0,"menu--bottom-left":this.position==="bottom-left","menu--bottom-center":this.position==="bottom-center","menu--bottom-right":this.position==="bottom-right","menu-open":this.open,"menu-left":this.align==="left","menu-right":this.align==="right"},n=this.options.map(i=>{let o={text:!0,"text-bold":!0,active:this.active===(i==null?void 0:i[this.returnTo])};return f`<li @click=${()=>this.callbackSelected(i)} class=${F(o)}>${i[this.label]}</li>`}),s=()=>{this.open=!this.open};return f`
      <div class="dropdown">
        <div class="dropdown-content" @click=${()=>s()}>
          <slot name="dropdown"></slot>
        </div>
      </div>
      <div class="dropdown-list">
        <ul class=${F(e)}>
          ${n}
        </ul>
      </div>
    `}};St.styles=Zo,St.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},position:{type:String},options:{type:Array},label:{type:String},returnTo:{type:String},active:{type:[String,Object]}},St=w([T("superviz-dropdown")],St);var hs=b`
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
`;var Wt=class extends x{constructor(){super();this.updatePresenceMouseParticipant=e=>{if(!this.shadowRoot.getElementById(`mouse-${e.id}`)){let a=this.shadowRoot.getElementById("mouse-sync"),l=document.createElement("div");l.setAttribute("id",`mouse-${e.id}`),l.setAttribute("class","mouse-follower");let c=document.createElement("div");c.setAttribute("class","pointer-mouse");let u=document.createElement("div");u.setAttribute("class","mouse-user-name"),u.innerHTML=e.name,l.appendChild(c),l.appendChild(u),a&&a.appendChild(l)}let s=this.shadowRoot.getElementById(`mouse-${e.id}`);if(!s)return;let i=this.shadowRoot.getElementById(`mouse-${e.id}`),o=this.shadowRoot.getElementById(`mouse-${e.id}`);if(i&&o){let a=i.getElementsByClassName("mouse-user-name")[0],l=o.getElementsByClassName("pointer-mouse")[0];l&&(l.style.backgroundImage=`url(https://production.cdn.superviz.com/static/pointers/${e.slotIndex}.svg)`),a&&(a.style.color=this.textColorValues.includes(e.slotIndex)?"#FFFFFF":"#000000",a.style.backgroundColor=e.color,a.innerHTML=e.name);let{containerId:c}=e,u=document.getElementById(c),h=e.mousePositionX,g=e.mousePositionY;if(c){let p=(u==null?void 0:u.clientWidth)||1,O=(u==null?void 0:u.clientHeight)||1;h=e.mousePositionX/e.originalWidth*p,g=e.mousePositionY/e.originalHeight*O}s.style.left=`${h}px`,s.style.top=`${g}px`}};this.textColorValues=[2,4,5,7,8,16]}removePresenceMouseParticipant(e){let n=this.shadowRoot.getElementById(`mouse-${e}`);n&&n.remove()}render(){return f`
      <div id="mouse-container" class="mouse-board">
        <div id="mouse-sync"></div>
      </div>
    `}};Wt.styles=[hs],Wt=w([T("superviz-presence-mouse")],Wt);var nn=b`  
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
`;var ps=$(x),Po=[ps.styles,nn],Bt=class extends ps{constructor(){super(...arguments);this.getContainer=()=>window.document.querySelector("superviz-modal-container");this.createContainer=e=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(e)};this.createModal=({detail:e})=>{this.createContainer(e),window.document.body.appendChild(this.modal)};this.destroyModal=()=>{var e;this.modal=void 0,(e=this.getContainer())==null||e.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};Bt.styles=Po,Bt=w([T("superviz-modal")],Bt);var fs=$(x),qo=[fs.styles,nn],Zt=class extends fs{constructor(){super(...arguments);this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))};this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(e){this.options=e}render(){let e=()=>f`
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
          ${e()}

          ${n()}

          ${s()}
        </div>
      </div>
    `}};Zt.styles=qo,Zt=w([T("superviz-modal-container")],Zt);var Wn=b`
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
`;var Bn=b`
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
`;var Zn=b`
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
`;var Pn=b`
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
`;var qn=b`
  .comments {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 288px;
  }

  .hidden {
    display: none;
  }
`;var jn=b`
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
`;var Gn=b`
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
`;var Yn=b`
  .annotation-resolved {
    background: rgba(var(--sv-gray-200), 0.5);
    height: 26px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(var(--sv-gray-200));
  }
`;var Jn=b`
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
`;var Kn=b`
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
`;var Qn=b`
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
`;var Xn=b`
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
`;function tr(r){let t=r.querySelector("#superviz-comments");if(t){let e={childList:!0,attributes:!0,characterData:!0,subtree:!0};new MutationObserver((s,i)=>{s.forEach(o=>{let a=r.querySelector("#superviz-comments");a&&a.contains(o.target)&&(i.disconnect(),jo(r))})}).observe(t,e)}}function jo(r){let t=r.querySelector("#poweredby-footer");t&&t.remove();let e=document.createElement("div");e.id="poweredby-footer",e.className="footer";let n=document.createElement("div");n.className="powered-by powered-by--horizontal";let s=document.createElement("a");s.href="https://superviz.com/",s.target="_blank",s.className="link";let i=document.createElement("div");i.textContent="Powered by";let o=document.createElement("img");o.width=48,o.height=8.86,o.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",n.appendChild(s),s.appendChild(i),i.appendChild(o),e.appendChild(n);let a=r.getElementById("superviz-comments");a&&a.appendChild(e),tr(r)}var ys=$(x),Go=[ys.styles,Wn,Xn],wt=class extends ys{constructor(){super();this.annotations=[],this.annotationFilter="all",this.waterMarkState=!1}updateAnnotations(e){this.annotations=e}toggle(){this.emitEvent("toggle",{})}waterMarkStatus(e){this.waterMarkState=e}setFilter({detail:e}){let{filter:n}=e;this.annotationFilter=n}updated(e){super.updated(e),this.updateComplete.then(()=>{this.shadowRoot.querySelector("#superviz-comments")&&this.waterMarkState&&tr(this.shadowRoot)})}render(){let e=[this.open?"container":"container-close"].join(" "),n=f` <div id="poweredby-footer" class="footer">
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
        ${s}
      </div>
    `}};wt.styles=Go,wt.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean}},wt=w([T("superviz-comments")],wt);var Yo=$(x),Jo=[Yo.styles,Bn],Pt=class extends $(x){close(){this.dispatchEvent(new CustomEvent("close"))}render(){return f`
      <div class="topbar">
        <span class="text text-bold">COMMENTS</span>
        <span @click=${this.close}>
          <superviz-icon name="right" size="lg"></superviz-icon>
        </span>
      </div>
    `}};Pt.styles=Jo,Pt=w([T("superviz-comments-topbar")],Pt);var vs=$(x),Ko=[vs.styles,Zn],Tt=class extends vs{constructor(){super(...arguments);this.prepareToCreateAnnotation=n=>ue(this,[n],function*({detail:e}){this.annotation=e,yield this.updateComplete,this.emitEvent("comment-input-focus",e)});this.cancelTemporaryAnnotation=()=>{this.annotation=null}}createComment({detail:e}){this.emitEvent("create-annotation",e),this.annotation=null}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.addEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("prepare-to-create-annotation",this.prepareToCreateAnnotation),window.document.body.removeEventListener("close-temporary-annotation",this.cancelTemporaryAnnotation)}render(){let e={"annotations--comments-input":!0,hidden:!this.annotation};return f`
      <div class="annotations">
        <span class="text text-big text-bold annotations--add-comment-btn"
          >Click anywhere to add a comment</span
        >
        <div class=${F(e)}>
          <superviz-comments-comment-input
            @create-annotation=${this.createComment}
            eventType="create-annotation"
          >
          </superviz-comments-comment-input>
        </div>
      </div>
    `}};Tt.styles=Ko,Tt.properties={annotation:{type:Object}},Tt=w([T("superviz-comments-annotations")],Tt);var gs=$(x),Qo=[gs.styles,qn],Ot=class extends gs{constructor(){super();this.selectAnnotation=({detail:e})=>{let{uuid:n}=e;this.selectedAnnotation=n};this.annotations=[]}updated(e){super.updated(e),this.updateComplete.then(()=>{let n=this.shadowRoot.querySelector(`[uuid='${this.selectedAnnotation}']`);if(!n)return;let s=this.lastCommentId===this.selectedAnnotation,i=s?0:-150,o=n.getClientRects()[0];!o||(this.scrollBy(0,o.y+i),s&&setTimeout(()=>{this.scrollBy(0,o.y+i)},200))})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("select-annotation",this.selectAnnotation)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("select-annotation",this.selectAnnotation)}render(){var l,c;let e=(l=this.annotations)==null?void 0:l.filter(u=>u.resolved===!1),n=(c=this.annotations)==null?void 0:c.filter(u=>u.resolved===!0),s=(u,h)=>h?(n==null?void 0:n.length)===u+1:(this.lastCommentId=e[u].uuid,(e==null?void 0:e.length)===u+1),i=(u,h,g)=>{let p=u.comments.length>0,O=s(h,g),V=p?f`
            <superviz-comments-annotation-item
              annotation=${JSON.stringify(u)}
              selected="${this.selectedAnnotation}"
              ?isLastAnnotation=${O}
              annotationFilter=${this.annotationFilter}
              uuid=${u.uuid}
            >
            </superviz-comments-annotation-item>
          `:f``;return f` ${V} `},o=e==null?void 0:e.map((u,h)=>i(u,h,!1)),a=n==null?void 0:n.map((u,h)=>i(u,h,!0));return f` ${o} ${a} `}};Ot.styles=Qo,Ot.properties={annotations:{type:Object},selectedAnnotation:{type:String},annotationFilter:{type:String}},Ot=w([T("superviz-comments-content")],Ot);var st=class extends Error{},rn=class extends st{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}},sn=class extends st{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}},on=class extends st{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}},ot=class extends st{},qt=class extends st{constructor(t){super(`Invalid unit ${t}`)}},z=class extends st{},Y=class extends st{constructor(){super("Zone is an abstract class")}};var m="numeric",J="short",Z="long",ct={year:m,month:m,day:m},ye={year:m,month:J,day:m},nr={year:m,month:J,day:m,weekday:J},ve={year:m,month:Z,day:m},ge={year:m,month:Z,day:m,weekday:Z},be={hour:m,minute:m},xe={hour:m,minute:m,second:m},Ee={hour:m,minute:m,second:m,timeZoneName:J},Se={hour:m,minute:m,second:m,timeZoneName:Z},we={hour:m,minute:m,hourCycle:"h23"},Te={hour:m,minute:m,second:m,hourCycle:"h23"},Oe={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:J},$e={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:Z},_e={year:m,month:m,day:m,hour:m,minute:m},Ce={year:m,month:m,day:m,hour:m,minute:m,second:m},Me={year:m,month:J,day:m,hour:m,minute:m},ke={year:m,month:J,day:m,hour:m,minute:m,second:m},rr={year:m,month:J,day:m,weekday:J,hour:m,minute:m},Ae={year:m,month:Z,day:m,hour:m,minute:m,timeZoneName:J},Ie={year:m,month:Z,day:m,hour:m,minute:m,second:m,timeZoneName:J},De={year:m,month:Z,day:m,weekday:Z,hour:m,minute:m,timeZoneName:Z},Fe={year:m,month:Z,day:m,weekday:Z,hour:m,minute:m,second:m,timeZoneName:Z};var W=class{get type(){throw new Y}get name(){throw new Y}get ianaName(){return this.name}get isUniversal(){throw new Y}offsetName(t,e){throw new Y}formatOffset(t,e){throw new Y}offset(t){throw new Y}equals(t){throw new Y}get isValid(){throw new Y}};var sr=null,X=class extends W{static get instance(){return sr===null&&(sr=new X),sr}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:e,locale:n}){return ln(t,e,n)}formatOffset(t,e){return ut(this.offset(t),e)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}};var un={};function Xo(r){return un[r]||(un[r]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:r,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),un[r]}var ti={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function ei(r,t){let e=r.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(e),[,s,i,o,a,l,c,u]=n;return[o,s,i,a,l,c,u]}function ni(r,t){let e=r.formatToParts(t),n=[];for(let s=0;s<e.length;s++){let{type:i,value:o}=e[s],a=ti[i];i==="era"?n[a]=o:E(a)||(n[a]=parseInt(o,10))}return n}var cn={},N=class extends W{static create(t){return cn[t]||(cn[t]=new N(t)),cn[t]}static resetCache(){cn={},un={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch(e){return!1}}constructor(t){super(),this.zoneName=t,this.valid=N.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:e,locale:n}){return ln(t,e,n,this.name)}formatOffset(t,e){return ut(this.offset(t),e)}offset(t){let e=new Date(t);if(isNaN(e))return NaN;let n=Xo(this.name),[s,i,o,a,l,c,u]=n.formatToParts?ni(n,e):ei(n,e);a==="BC"&&(s=-Math.abs(s)+1);let g=jt({year:s,month:i,day:o,hour:l===24?0:l,minute:c,second:u,millisecond:0}),p=+e,O=p%1e3;return p-=O>=0?O:1e3+O,(g-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}};var bs={};function ri(r,t={}){let e=JSON.stringify([r,t]),n=bs[e];return n||(n=new Intl.ListFormat(r,t),bs[e]=n),n}var or={};function ir(r,t={}){let e=JSON.stringify([r,t]),n=or[e];return n||(n=new Intl.DateTimeFormat(r,t),or[e]=n),n}var ar={};function si(r,t={}){let e=JSON.stringify([r,t]),n=ar[e];return n||(n=new Intl.NumberFormat(r,t),ar[e]=n),n}var lr={};function oi(r,t={}){let o=t,{base:e}=o,n=xn(o,["base"]),s=JSON.stringify([r,n]),i=lr[s];return i||(i=new Intl.RelativeTimeFormat(r,t),lr[s]=i),i}var Ne=null;function ii(){return Ne||(Ne=new Intl.DateTimeFormat().resolvedOptions().locale,Ne)}function ai(r){let t=r.indexOf("-x-");t!==-1&&(r=r.substring(0,t));let e=r.indexOf("-u-");if(e===-1)return[r];{let n,s;try{n=ir(r).resolvedOptions(),s=r}catch(a){let l=r.substring(0,e);n=ir(l).resolvedOptions(),s=l}let{numberingSystem:i,calendar:o}=n;return[s,i,o]}}function li(r,t,e){return(e||t)&&(r.includes("-u-")||(r+="-u"),e&&(r+=`-ca-${e}`),t&&(r+=`-nu-${t}`)),r}function ci(r){let t=[];for(let e=1;e<=12;e++){let n=v.utc(2009,e,1);t.push(r(n))}return t}function ui(r){let t=[];for(let e=1;e<=7;e++){let n=v.utc(2016,11,13+e);t.push(r(n))}return t}function dn(r,t,e,n){let s=r.listingMode();return s==="error"?null:s==="en"?e(t):n(t)}function di(r){return r.numberingSystem&&r.numberingSystem!=="latn"?!1:r.numberingSystem==="latn"||!r.locale||r.locale.startsWith("en")||new Intl.DateTimeFormat(r.intl).resolvedOptions().numberingSystem==="latn"}var cr=class{constructor(t,e,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;let a=n,{padTo:s,floor:i}=a,o=xn(a,["padTo","floor"]);if(!e||Object.keys(o).length>0){let l=y({useGrouping:!1},n);n.padTo>0&&(l.minimumIntegerDigits=n.padTo),this.inf=si(t,l)}}format(t){if(this.inf){let e=this.floor?Math.floor(t):t;return this.inf.format(e)}else{let e=this.floor?Math.floor(t):Gt(t,3);return A(e,this.padTo)}}},ur=class{constructor(t,e,n){this.opts=n,this.originalZone=void 0;let s;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){let o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&N.create(a).valid?(s=a,this.dt=t):(s="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,s=t.zone.name):(s="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);let i=y({},this.opts);i.timeZone=i.timeZone||s,this.dtf=ir(e,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(e=>{if(e.type==="timeZoneName"){let n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return R(y({},e),{value:n})}else return e}):t}resolvedOptions(){return this.dtf.resolvedOptions()}},dr=class{constructor(t,e,n){this.opts=y({style:"long"},n),!e&&mn()&&(this.rtf=oi(t,n))}format(t,e){return this.rtf?this.rtf.format(t,e):xs(e,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,e){return this.rtf?this.rtf.formatToParts(t,e):[]}},_=class{static fromOpts(t){return _.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)}static create(t,e,n,s=!1){let i=t||M.defaultLocale,o=i||(s?"en-US":ii()),a=e||M.defaultNumberingSystem,l=n||M.defaultOutputCalendar;return new _(o,a,l,i)}static resetCache(){Ne=null,or={},ar={},lr={}}static fromObject({locale:t,numberingSystem:e,outputCalendar:n}={}){return _.create(t,e,n)}constructor(t,e,n,s){let[i,o,a]=ai(t);this.locale=i,this.numberingSystem=e||o||null,this.outputCalendar=n||a||null,this.intl=li(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=di(this)),this.fastNumbersCached}listingMode(){let t=this.isEnglish(),e=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&e?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:_.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone(R(y({},t),{defaultToEN:!0}))}redefaultToSystem(t={}){return this.clone(R(y({},t),{defaultToEN:!1}))}months(t,e=!1){return dn(this,t,mr,()=>{let n=e?{month:t,day:"numeric"}:{month:t},s=e?"format":"standalone";return this.monthsCache[s][t]||(this.monthsCache[s][t]=ci(i=>this.extract(i,n,"month"))),this.monthsCache[s][t]})}weekdays(t,e=!1){return dn(this,t,hr,()=>{let n=e?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},s=e?"format":"standalone";return this.weekdaysCache[s][t]||(this.weekdaysCache[s][t]=ui(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[s][t]})}meridiems(){return dn(this,void 0,()=>pr,()=>{if(!this.meridiemCache){let t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[v.utc(2016,11,13,9),v.utc(2016,11,13,19)].map(e=>this.extract(e,t,"dayperiod"))}return this.meridiemCache})}eras(t){return dn(this,t,fr,()=>{let e={era:t};return this.eraCache[t]||(this.eraCache[t]=[v.utc(-40,1,1),v.utc(2017,1,1)].map(n=>this.extract(n,e,"era"))),this.eraCache[t]})}extract(t,e,n){let s=this.dtFormatter(t,e),i=s.formatToParts(),o=i.find(a=>a.type.toLowerCase()===n);return o?o.value:null}numberFormatter(t={}){return new cr(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,e={}){return new ur(t,this.intl,e)}relFormatter(t={}){return new dr(this.intl,this.isEnglish(),t)}listFormatter(t={}){return ri(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}};var vr=null,I=class extends W{static get utcInstance(){return vr===null&&(vr=new I(0)),vr}static instance(t){return t===0?I.utcInstance:new I(t)}static parseSpecifier(t){if(t){let e=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(e)return new I($t(e[1],e[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${ut(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${ut(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,e){return ut(this.fixed,e)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}};var Yt=class extends W{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function K(r,t){let e;if(E(r)||r===null)return t;if(r instanceof W)return r;if(Es(r)){let n=r.toLowerCase();return n==="default"?t:n==="local"||n==="system"?X.instance:n==="utc"||n==="gmt"?I.utcInstance:I.parseSpecifier(n)||N.create(r)}else return tt(r)?I.instance(r):typeof r=="object"&&"offset"in r&&typeof r.offset=="function"?r:new Yt(r)}var Ss=()=>Date.now(),ws="system",Ts=null,Os=null,$s=null,_s=60,Cs,M=class{static get now(){return Ss}static set now(t){Ss=t}static set defaultZone(t){ws=t}static get defaultZone(){return K(ws,X.instance)}static get defaultLocale(){return Ts}static set defaultLocale(t){Ts=t}static get defaultNumberingSystem(){return Os}static set defaultNumberingSystem(t){Os=t}static get defaultOutputCalendar(){return $s}static set defaultOutputCalendar(t){$s=t}static get twoDigitCutoffYear(){return _s}static set twoDigitCutoffYear(t){_s=t%100}static get throwOnInvalid(){return Cs}static set throwOnInvalid(t){Cs=t}static resetCaches(){_.resetCache(),N.resetCache()}};function E(r){return typeof r=="undefined"}function tt(r){return typeof r=="number"}function Le(r){return typeof r=="number"&&r%1===0}function Es(r){return typeof r=="string"}function Ms(r){return Object.prototype.toString.call(r)==="[object Date]"}function mn(){try{return typeof Intl!="undefined"&&!!Intl.RelativeTimeFormat}catch(r){return!1}}function ks(r){return Array.isArray(r)?r:[r]}function gr(r,t,e){if(r.length!==0)return r.reduce((n,s)=>{let i=[t(s),s];return n&&e(n[0],i[0])===n[0]?n:i},null)[1]}function As(r,t){return t.reduce((e,n)=>(e[n]=r[n],e),{})}function dt(r,t){return Object.prototype.hasOwnProperty.call(r,t)}function et(r,t,e){return Le(r)&&r>=t&&r<=e}function mi(r,t){return r-t*Math.floor(r/t)}function A(r,t=2){let e=r<0,n;return e?n="-"+(""+-r).padStart(t,"0"):n=(""+r).padStart(t,"0"),n}function it(r){if(!(E(r)||r===null||r===""))return parseInt(r,10)}function mt(r){if(!(E(r)||r===null||r===""))return parseFloat(r)}function ze(r){if(!(E(r)||r===null||r==="")){let t=parseFloat("0."+r)*1e3;return Math.floor(t)}}function Gt(r,t,e=!1){let n=Wr(10,t);return(e?Math.trunc:Math.round)(r*n)/n}function _t(r){return r%4===0&&(r%100!==0||r%400===0)}function Ct(r){return _t(r)?366:365}function Jt(r,t){let e=mi(t-1,12)+1,n=r+(t-e)/12;return e===2?_t(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][e-1]}function jt(r){let t=Date.UTC(r.year,r.month-1,r.day,r.hour,r.minute,r.second,r.millisecond);return r.year<100&&r.year>=0&&(t=new Date(t),t.setUTCFullYear(r.year,r.month-1,r.day)),+t}function Kt(r){let t=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7,e=r-1,n=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7;return t===4||n===3?53:52}function He(r){return r>99?r:r>M.twoDigitCutoffYear?1900+r:2e3+r}function ln(r,t,e,n=null){let s=new Date(r),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);let o=y({timeZoneName:t},i),a=new Intl.DateTimeFormat(e,o).formatToParts(s).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function $t(r,t){let e=parseInt(r,10);Number.isNaN(e)&&(e=0);let n=parseInt(t,10)||0,s=e<0||Object.is(e,-0)?-n:n;return e*60+s}function br(r){let t=Number(r);if(typeof r=="boolean"||r===""||Number.isNaN(t))throw new z(`Invalid unit value ${r}`);return t}function Qt(r,t){let e={};for(let n in r)if(dt(r,n)){let s=r[n];if(s==null)continue;e[t(n)]=br(s)}return e}function ut(r,t){let e=Math.trunc(Math.abs(r/60)),n=Math.trunc(Math.abs(r%60)),s=r>=0?"+":"-";switch(t){case"short":return`${s}${A(e,2)}:${A(n,2)}`;case"narrow":return`${s}${e}${n>0?`:${n}`:""}`;case"techie":return`${s}${A(e,2)}${A(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function Re(r){return As(r,["hour","minute","second","millisecond"])}var hi=["January","February","March","April","May","June","July","August","September","October","November","December"],xr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],pi=["J","F","M","A","M","J","J","A","S","O","N","D"];function mr(r){switch(r){case"narrow":return[...pi];case"short":return[...xr];case"long":return[...hi];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var Er=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Sr=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],fi=["M","T","W","T","F","S","S"];function hr(r){switch(r){case"narrow":return[...fi];case"short":return[...Sr];case"long":return[...Er];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var pr=["AM","PM"],yi=["Before Christ","Anno Domini"],vi=["BC","AD"],gi=["B","A"];function fr(r){switch(r){case"narrow":return[...gi];case"short":return[...vi];case"long":return[...yi];default:return null}}function Is(r){return pr[r.hour<12?0:1]}function Ds(r,t){return hr(t)[r.weekday-1]}function Fs(r,t){return mr(t)[r.month-1]}function Ns(r,t){return fr(t)[r.year<0?0:1]}function xs(r,t,e="always",n=!1){let s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(r)===-1;if(e==="auto"&&i){let h=r==="days";switch(t){case 1:return h?"tomorrow":`next ${s[r][0]}`;case-1:return h?"yesterday":`last ${s[r][0]}`;case 0:return h?"today":`this ${s[r][0]}`;default:}}let o=Object.is(t,-0)||t<0,a=Math.abs(t),l=a===1,c=s[r],u=n?l?c[1]:c[2]||c[1]:l?s[r][0]:r;return o?`${a} ${u} ago`:`in ${a} ${u}`}function Ls(r,t){let e="";for(let n of r)n.literal?e+=n.val:e+=t(n.val);return e}var bi={D:ct,DD:ye,DDD:ve,DDDD:ge,t:be,tt:xe,ttt:Ee,tttt:Se,T:we,TT:Te,TTT:Oe,TTTT:$e,f:_e,ff:Me,fff:Ae,ffff:De,F:Ce,FF:ke,FFF:Ie,FFFF:Fe},D=class{static create(t,e={}){return new D(t,e)}static parseFormat(t){let e=null,n="",s=!1,i=[];for(let o=0;o<t.length;o++){let a=t.charAt(o);a==="'"?(n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),e=null,n="",s=!s):s||a===e?n+=a:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=a,e=a)}return n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(t){return bi[t]}constructor(t,e){this.opts=e,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,e){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,y(y({},this.opts),e)).format()}dtFormatter(t,e={}){return this.loc.dtFormatter(t,y(y({},this.opts),e))}formatDateTime(t,e){return this.dtFormatter(t,e).format()}formatDateTimeParts(t,e){return this.dtFormatter(t,e).formatToParts()}formatInterval(t,e){return this.dtFormatter(t.start,e).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,e){return this.dtFormatter(t,e).resolvedOptions()}num(t,e=0){if(this.opts.forceSimple)return A(t,e);let n=y({},this.opts);return e>0&&(n.padTo=e),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,e){let n=this.loc.listingMode()==="en",s=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(p,O)=>this.loc.extract(t,p,O),o=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",a=()=>n?Is(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(p,O)=>n?Fs(t,p):i(O?{month:p}:{month:p,day:"numeric"},"month"),c=(p,O)=>n?Ds(t,p):i(O?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),u=p=>{let O=D.macroTokenToFormatOpts(p);return O?this.formatWithSystemDefault(t,O):p},h=p=>n?Ns(t,p):i({era:p},"era"),g=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return s?i({day:"numeric"},"day"):this.num(t.day);case"dd":return s?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return s?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return s?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return s?i({month:"numeric"},"month"):this.num(t.month);case"MM":return s?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return s?i({year:"numeric"},"year"):this.num(t.year);case"yy":return s?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return s?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return s?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return h("short");case"GG":return h("long");case"GGGGG":return h("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return u(p)}};return Ls(D.parseFormat(e),g)}formatDurationFromString(t,e){let n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},s=l=>c=>{let u=n(c);return u?this.num(l.get(u),c.length):c},i=D.parseFormat(e),o=i.reduce((l,{literal:c,val:u})=>c?l:l.concat(u),[]),a=t.shiftTo(...o.map(n).filter(l=>l));return Ls(i,s(a))}};var H=class{constructor(t,e){this.reason=t,this.explanation=e}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}};var Hs=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function te(...r){let t=r.reduce((e,n)=>e+n.source,"");return RegExp(`^${t}$`)}function ee(...r){return t=>r.reduce(([e,n,s],i)=>{let[o,a,l]=i(t,s);return[y(y({},e),o),a||n,l]},[{},null,1]).slice(0,2)}function ne(r,...t){if(r==null)return[null,null];for(let[e,n]of t){let s=e.exec(r);if(s)return n(s)}return[null,null]}function Rs(...r){return(t,e)=>{let n={},s;for(s=0;s<r.length;s++)n[r[s]]=it(t[e+s]);return[n,null,e+s]}}var Vs=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,xi=`(?:${Vs.source}?(?:\\[(${Hs.source})\\])?)?`,wr=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Us=RegExp(`${wr.source}${xi}`),Tr=RegExp(`(?:T${Us.source})?`),Ei=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Si=/(\d{4})-?W(\d\d)(?:-?(\d))?/,wi=/(\d{4})-?(\d{3})/,Ti=Rs("weekYear","weekNumber","weekDay"),Oi=Rs("year","ordinal"),$i=/(\d{4})-(\d\d)-(\d\d)/,Ws=RegExp(`${wr.source} ?(?:${Vs.source}|(${Hs.source}))?`),_i=RegExp(`(?: ${Ws.source})?`);function Xt(r,t,e){let n=r[t];return E(n)?e:it(n)}function Ci(r,t){return[{year:Xt(r,t),month:Xt(r,t+1,1),day:Xt(r,t+2,1)},null,t+3]}function re(r,t){return[{hours:Xt(r,t,0),minutes:Xt(r,t+1,0),seconds:Xt(r,t+2,0),milliseconds:ze(r[t+3])},null,t+4]}function Ve(r,t){let e=!r[t]&&!r[t+1],n=$t(r[t+1],r[t+2]),s=e?null:I.instance(n);return[{},s,t+3]}function Ue(r,t){let e=r[t]?N.create(r[t]):null;return[{},e,t+1]}var Mi=RegExp(`^T?${wr.source}$`),ki=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Ai(r){let[t,e,n,s,i,o,a,l,c]=r,u=t[0]==="-",h=l&&l[0]==="-",g=(p,O=!1)=>p!==void 0&&(O||p&&u)?-p:p;return[{years:g(mt(e)),months:g(mt(n)),weeks:g(mt(s)),days:g(mt(i)),hours:g(mt(o)),minutes:g(mt(a)),seconds:g(mt(l),l==="-0"),milliseconds:g(ze(c),h)}]}var Ii={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Or(r,t,e,n,s,i,o){let a={year:t.length===2?He(it(t)):it(t),month:xr.indexOf(e)+1,day:it(n),hour:it(s),minute:it(i)};return o&&(a.second=it(o)),r&&(a.weekday=r.length>3?Er.indexOf(r)+1:Sr.indexOf(r)+1),a}var Di=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Fi(r){let[,t,e,n,s,i,o,a,l,c,u,h]=r,g=Or(t,s,n,e,i,o,a),p;return l?p=Ii[l]:c?p=0:p=$t(u,h),[g,new I(p)]}function Ni(r){return r.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var Li=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,zi=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Hi=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function zs(r){let[,t,e,n,s,i,o,a]=r;return[Or(t,s,n,e,i,o,a),I.utcInstance]}function Ri(r){let[,t,e,n,s,i,o,a]=r;return[Or(t,a,e,n,s,i,o),I.utcInstance]}var Vi=te(Ei,Tr),Ui=te(Si,Tr),Wi=te(wi,Tr),Bi=te(Us),Bs=ee(Ci,re,Ve,Ue),Zi=ee(Ti,re,Ve,Ue),Pi=ee(Oi,re,Ve,Ue),qi=ee(re,Ve,Ue);function Zs(r){return ne(r,[Vi,Bs],[Ui,Zi],[Wi,Pi],[Bi,qi])}function Ps(r){return ne(Ni(r),[Di,Fi])}function qs(r){return ne(r,[Li,zs],[zi,zs],[Hi,Ri])}function js(r){return ne(r,[ki,Ai])}var ji=ee(re);function Gs(r){return ne(r,[Mi,ji])}var Gi=te($i,_i),Yi=te(Ws),Ji=ee(re,Ve,Ue);function Ys(r){return ne(r,[Gi,Bs],[Yi,Ji])}var Ki="Invalid Duration",Ks={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Qi=y({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},Ks),P=146097/400,se=146097/4800,Xi=y({years:{quarters:4,months:12,weeks:P/7,days:P,hours:P*24,minutes:P*24*60,seconds:P*24*60*60,milliseconds:P*24*60*60*1e3},quarters:{months:3,weeks:P/28,days:P/4,hours:P*24/4,minutes:P*24*60/4,seconds:P*24*60*60/4,milliseconds:P*24*60*60*1e3/4},months:{weeks:se/7,days:se,hours:se*24,minutes:se*24*60,seconds:se*24*60*60,milliseconds:se*24*60*60*1e3}},Ks),Mt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Qs=Mt.slice(0).reverse();function ht(r,t,e=!1){let n={values:e?t.values:y(y({},r.values),t.values||{}),loc:r.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||r.conversionAccuracy,matrix:t.matrix||r.matrix};return new S(n)}function Js(r){return Math.trunc(r*1e3)/1e3}function Xs(r,t,e,n,s){let i=r[s][e],o=t[e]/i,a=Math.floor(o);n[s]=Js(n[s]+a),t[e]=Js(t[e]-a*i)}function ta(r,t){Qs.reduce((e,n)=>E(t[n])?e:(e&&Xs(r,t,e,t,n),n),null)}function ea(r){let t={};for(let[e,n]of Object.entries(r))n!==0&&(t[e]=n);return t}var S=class{constructor(t){let e=t.conversionAccuracy==="longterm"||!1,n=e?Xi:Qi;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||_.create(),this.conversionAccuracy=e?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,e){return S.fromObject({milliseconds:t},e)}static fromObject(t,e={}){if(t==null||typeof t!="object")throw new z(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new S({values:Qt(t,S.normalizeUnit),loc:_.fromObject(e),conversionAccuracy:e.conversionAccuracy,matrix:e.matrix})}static fromDurationLike(t){if(tt(t))return S.fromMillis(t);if(S.isDuration(t))return t;if(typeof t=="object")return S.fromObject(t);throw new z(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,e){let[n]=js(t);return n?S.fromObject(n,e):S.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,e){let[n]=Gs(t);return n?S.fromObject(n,e):S.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,e=null){if(!t)throw new z("need to specify a reason the Duration is invalid");let n=t instanceof H?t:new H(t,e);if(M.throwOnInvalid)throw new on(n);return new S({invalid:n})}static normalizeUnit(t){let e={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!e)throw new qt(t);return e}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,e={}){let n=R(y({},e),{floor:e.round!==!1&&e.floor!==!1});return this.isValid?D.create(this.loc,n).formatDurationFromString(this,t):Ki}toHuman(t={}){let e=Mt.map(n=>{let s=this.values[n];return E(s)?null:this.loc.numberFormatter(R(y({style:"unit",unitDisplay:"long"},t),{unit:n.slice(0,-1)})).format(s)}).filter(n=>n);return this.loc.listFormatter(y({type:"conjunction",style:t.listStyle||"narrow"},t)).format(e)}toObject(){return this.isValid?y({},this.values):{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Gt(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;let e=this.toMillis();return e<0||e>=864e5?null:(t=R(y({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},t),{includeOffset:!1}),v.fromMillis(e,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){var e,n;let t=(e=this.values.milliseconds)!=null?e:0;for(let s of Qs.slice(1))(n=this.values)!=null&&n[s]&&(t+=this.values[s]*this.matrix[s].milliseconds);return t}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;let e=S.fromDurationLike(t),n={};for(let s of Mt)(dt(e.values,s)||dt(this.values,s))&&(n[s]=e.get(s)+this.get(s));return ht(this,{values:n},!0)}minus(t){if(!this.isValid)return this;let e=S.fromDurationLike(t);return this.plus(e.negate())}mapUnits(t){if(!this.isValid)return this;let e={};for(let n of Object.keys(this.values))e[n]=br(t(this.values[n],n));return ht(this,{values:e},!0)}get(t){return this[S.normalizeUnit(t)]}set(t){if(!this.isValid)return this;let e=y(y({},this.values),Qt(t,S.normalizeUnit));return ht(this,{values:e})}reconfigure({locale:t,numberingSystem:e,conversionAccuracy:n,matrix:s}={}){let o={loc:this.loc.clone({locale:t,numberingSystem:e}),matrix:s,conversionAccuracy:n};return ht(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;let t=this.toObject();return this.valueOf()>=0?(ta(this.matrix,t),ht(this,{values:t},!0)):this.negate().normalize().negate()}rescale(){if(!this.isValid)return this;let t=ea(this.normalize().shiftToAll().toObject());return ht(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>S.normalizeUnit(o));let e={},n={},s=this.toObject(),i;for(let o of Mt)if(t.indexOf(o)>=0){i=o;let a=0;for(let c in n)a+=this.matrix[c][o]*n[c],n[c]=0;tt(s[o])&&(a+=s[o]);let l=Math.trunc(a);e[o]=l,n[o]=(a*1e3-l*1e3)/1e3;for(let c in s)Mt.indexOf(c)>Mt.indexOf(o)&&Xs(this.matrix,s,c,e,o)}else tt(s[o])&&(n[o]=s[o]);for(let o in n)n[o]!==0&&(e[i]+=o===i?n[o]:n[o]/this.matrix[i][o]);return ht(this,{values:e},!0).normalize()}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let t={};for(let e of Object.keys(this.values))t[e]=this.values[e]===0?0:-this.values[e];return ht(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function e(n,s){return n===void 0||n===0?s===void 0||s===0:n===s}for(let n of Mt)if(!e(this.values[n],t.values[n]))return!1;return!0}};var oe="Invalid Interval";function na(r,t){return!r||!r.isValid?k.invalid("missing or invalid start"):!t||!t.isValid?k.invalid("missing or invalid end"):t<r?k.invalid("end before start",`The end of an interval must be after its start, but you had start=${r.toISO()} and end=${t.toISO()}`):null}var k=class{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,e=null){if(!t)throw new z("need to specify a reason the Interval is invalid");let n=t instanceof H?t:new H(t,e);if(M.throwOnInvalid)throw new sn(n);return new k({invalid:n})}static fromDateTimes(t,e){let n=ie(t),s=ie(e),i=na(n,s);return i==null?new k({start:n,end:s}):i}static after(t,e){let n=S.fromDurationLike(e),s=ie(t);return k.fromDateTimes(s,s.plus(n))}static before(t,e){let n=S.fromDurationLike(e),s=ie(t);return k.fromDateTimes(s.minus(n),s)}static fromISO(t,e){let[n,s]=(t||"").split("/",2);if(n&&s){let i,o;try{i=v.fromISO(n,e),o=i.isValid}catch(c){o=!1}let a,l;try{a=v.fromISO(s,e),l=a.isValid}catch(c){l=!1}if(o&&l)return k.fromDateTimes(i,a);if(o){let c=S.fromISO(s,e);if(c.isValid)return k.after(i,c)}else if(l){let c=S.fromISO(n,e);if(c.isValid)return k.before(a,c)}}return k.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds"){if(!this.isValid)return NaN;let e=this.start.startOf(t),n=this.end.startOf(t);return Math.floor(n.diff(e,t).get(t))+(n.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:e}={}){return this.isValid?k.fromDateTimes(t||this.s,e||this.e):this}splitAt(...t){if(!this.isValid)return[];let e=t.map(ie).filter(o=>this.contains(o)).sort(),n=[],{s}=this,i=0;for(;s<this.e;){let o=e[i]||this.e,a=+o>+this.e?this.e:o;n.push(k.fromDateTimes(s,a)),s=a,i+=1}return n}splitBy(t){let e=S.fromDurationLike(t);if(!this.isValid||!e.isValid||e.as("milliseconds")===0)return[];let{s:n}=this,s=1,i,o=[];for(;n<this.e;){let a=this.start.plus(e.mapUnits(l=>l*s));i=+a>+this.e?this.e:a,o.push(k.fromDateTimes(n,i)),n=i,s+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;let e=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return e>=n?null:k.fromDateTimes(e,n)}union(t){if(!this.isValid)return this;let e=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return k.fromDateTimes(e,n)}static merge(t){let[e,n]=t.sort((s,i)=>s.s-i.s).reduce(([s,i],o)=>i?i.overlaps(o)||i.abutsStart(o)?[s,i.union(o)]:[s.concat([i]),o]:[s,o],[[],null]);return n&&e.push(n),e}static xor(t){let e=null,n=0,s=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),o=Array.prototype.concat(...i),a=o.sort((l,c)=>l.time-c.time);for(let l of a)n+=l.type==="s"?1:-1,n===1?e=l.time:(e&&+e!=+l.time&&s.push(k.fromDateTimes(e,l.time)),e=null);return k.merge(s)}difference(...t){return k.xor([this].concat(t)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:oe}toLocaleString(t=ct,e={}){return this.isValid?D.create(this.s.loc.clone(e),t).formatInterval(this):oe}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:oe}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:oe}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:oe}toFormat(t,{separator:e=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(t)}${e}${this.e.toFormat(t)}`:oe}toDuration(t,e){return this.isValid?this.e.diff(this.s,t,e):S.invalid(this.invalidReason)}mapEndpoints(t){return k.fromDateTimes(t(this.s),t(this.e))}};var at=class{static hasDST(t=M.defaultZone){let e=v.now().setZone(t).set({month:12});return!t.isUniversal&&e.offset!==e.set({month:6}).offset}static isValidIANAZone(t){return N.isValidZone(t)}static normalizeZone(t){return K(t,M.defaultZone)}static months(t="long",{locale:e=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||_.create(e,n,i)).months(t)}static monthsFormat(t="long",{locale:e=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||_.create(e,n,i)).months(t,!0)}static weekdays(t="long",{locale:e=null,numberingSystem:n=null,locObj:s=null}={}){return(s||_.create(e,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:e=null,numberingSystem:n=null,locObj:s=null}={}){return(s||_.create(e,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return _.create(t).meridiems()}static eras(t="short",{locale:e=null}={}){return _.create(e,null,"gregory").eras(t)}static features(){return{relative:mn()}}};function to(r,t){let e=s=>s.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=e(t)-e(r);return Math.floor(S.fromMillis(n).as("days"))}function ra(r,t,e){let n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{let u=to(l,c);return(u-u%7)/7}],["days",to]],s={},i=r,o,a;for(let[l,c]of n)e.indexOf(l)>=0&&(o=l,s[l]=c(r,t),a=i.plus(s),a>t?(s[l]--,r=i.plus(s),r>t&&(a=r,s[l]--,r=i.plus(s))):r=a);return[r,s,a,o]}function eo(r,t,e,n){let[s,i,o,a]=ra(r,t,e),l=t-s,c=e.filter(h=>["hours","minutes","seconds","milliseconds"].indexOf(h)>=0);c.length===0&&(o<t&&(o=s.plus({[a]:1})),o!==s&&(i[a]=(i[a]||0)+l/(o-s)));let u=S.fromObject(i,n);return c.length>0?S.fromMillis(l,n).shiftTo(...c).plus(u):u}var $r={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},no={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},sa=$r.hanidec.replace(/[\[|\]]/g,"").split("");function ro(r){let t=parseInt(r,10);if(isNaN(t)){t="";for(let e=0;e<r.length;e++){let n=r.charCodeAt(e);if(r[e].search($r.hanidec)!==-1)t+=sa.indexOf(r[e]);else for(let s in no){let[i,o]=no[s];n>=i&&n<=o&&(t+=n-i)}}return parseInt(t,10)}else return t}function q({numberingSystem:r},t=""){return new RegExp(`${$r[r||"latn"]}${t}`)}var oa="missing Intl.DateTimeFormat.formatToParts support";function C(r,t=e=>e){return{regex:r,deser:([e])=>t(ro(e))}}var ia=String.fromCharCode(160),io=`[ ${ia}]`,ao=new RegExp(io,"g");function aa(r){return r.replace(/\./g,"\\.?").replace(ao,io)}function so(r){return r.replace(/\./g,"").replace(ao," ").toLowerCase()}function Q(r,t){return r===null?null:{regex:RegExp(r.map(aa).join("|")),deser:([e])=>r.findIndex(n=>so(e)===so(n))+t}}function oo(r,t){return{regex:r,deser:([,e,n])=>$t(e,n),groups:t}}function hn(r){return{regex:r,deser:([t])=>t}}function la(r){return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function ca(r,t){let e=q(t),n=q(t,"{2}"),s=q(t,"{3}"),i=q(t,"{4}"),o=q(t,"{6}"),a=q(t,"{1,2}"),l=q(t,"{1,3}"),c=q(t,"{1,6}"),u=q(t,"{1,9}"),h=q(t,"{2,4}"),g=q(t,"{4,6}"),p=U=>({regex:RegExp(la(U.val)),deser:([pt])=>pt,literal:!0}),V=(U=>{if(r.literal)return p(U);switch(U.val){case"G":return Q(t.eras("short"),0);case"GG":return Q(t.eras("long"),0);case"y":return C(c);case"yy":return C(h,He);case"yyyy":return C(i);case"yyyyy":return C(g);case"yyyyyy":return C(o);case"M":return C(a);case"MM":return C(n);case"MMM":return Q(t.months("short",!0),1);case"MMMM":return Q(t.months("long",!0),1);case"L":return C(a);case"LL":return C(n);case"LLL":return Q(t.months("short",!1),1);case"LLLL":return Q(t.months("long",!1),1);case"d":return C(a);case"dd":return C(n);case"o":return C(l);case"ooo":return C(s);case"HH":return C(n);case"H":return C(a);case"hh":return C(n);case"h":return C(a);case"mm":return C(n);case"m":return C(a);case"q":return C(a);case"qq":return C(n);case"s":return C(a);case"ss":return C(n);case"S":return C(l);case"SSS":return C(s);case"u":return hn(u);case"uu":return hn(a);case"uuu":return C(e);case"a":return Q(t.meridiems(),0);case"kkkk":return C(i);case"kk":return C(h,He);case"W":return C(a);case"WW":return C(n);case"E":case"c":return C(e);case"EEE":return Q(t.weekdays("short",!1),1);case"EEEE":return Q(t.weekdays("long",!1),1);case"ccc":return Q(t.weekdays("short",!0),1);case"cccc":return Q(t.weekdays("long",!0),1);case"Z":case"ZZ":return oo(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return oo(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return hn(/[a-z_+-/]{1,256}?/i);case" ":return hn(/[^\S\n\r]/);default:return p(U)}})(r)||{invalidReason:oa};return V.token=r,V}var ua={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function da(r,t,e){let{type:n,value:s}=r;if(n==="literal"){let l=/^\s+$/.test(s);return{literal:!l,val:l?" ":s}}let i=t[n],o=n;n==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=e.hour12?"hour12":"hour24");let a=ua[o];if(typeof a=="object"&&(a=a[i]),a)return{literal:!1,val:a}}function ma(r){return[`^${r.map(e=>e.regex).reduce((e,n)=>`${e}(${n.source})`,"")}$`,r]}function ha(r,t,e){let n=r.match(t);if(n){let s={},i=1;for(let o in e)if(dt(e,o)){let a=e[o],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(s[a.token.val[0]]=a.deser(n.slice(i,i+l))),i+=l}return[n,s]}else return[n,{}]}function pa(r){let t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},e=null,n;return E(r.z)||(e=N.create(r.z)),E(r.Z)||(e||(e=new I(r.Z)),n=r.Z),E(r.q)||(r.M=(r.q-1)*3+1),E(r.h)||(r.h<12&&r.a===1?r.h+=12:r.h===12&&r.a===0&&(r.h=0)),r.G===0&&r.y&&(r.y=-r.y),E(r.u)||(r.S=ze(r.u)),[Object.keys(r).reduce((i,o)=>{let a=t(o);return a&&(i[a]=r[o]),i},{}),e,n]}var _r=null;function fa(){return _r||(_r=v.fromMillis(1555555555555)),_r}function ya(r,t){if(r.literal)return r;let e=D.macroTokenToFormatOpts(r.val),n=kr(e,t);return n==null||n.includes(void 0)?r:n}function Cr(r,t){return Array.prototype.concat(...r.map(e=>ya(e,t)))}function Mr(r,t,e){let n=Cr(D.parseFormat(e),r),s=n.map(o=>ca(o,r)),i=s.find(o=>o.invalidReason);if(i)return{input:t,tokens:n,invalidReason:i.invalidReason};{let[o,a]=ma(s),l=RegExp(o,"i"),[c,u]=ha(t,l,a),[h,g,p]=u?pa(u):[null,null,void 0];if(dt(u,"a")&&dt(u,"H"))throw new ot("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:n,regex:l,rawMatches:c,matches:u,result:h,zone:g,specificOffset:p}}}function lo(r,t,e){let{result:n,zone:s,specificOffset:i,invalidReason:o}=Mr(r,t,e);return[n,s,i,o]}function kr(r,t){if(!r)return null;let n=D.create(t,r).dtFormatter(fa()),s=n.formatToParts(),i=n.resolvedOptions();return s.map(o=>da(o,r,i))}var co=[0,31,59,90,120,151,181,212,243,273,304,334],uo=[0,31,60,91,121,152,182,213,244,274,305,335];function j(r,t){return new H("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${r}, which is invalid`)}function mo(r,t,e){let n=new Date(Date.UTC(r,t-1,e));r<100&&r>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);let s=n.getUTCDay();return s===0?7:s}function ho(r,t,e){return e+(_t(r)?uo:co)[t-1]}function po(r,t){let e=_t(r)?uo:co,n=e.findIndex(i=>i<t),s=t-e[n];return{month:n+1,day:s}}function pn(r){let{year:t,month:e,day:n}=r,s=ho(t,e,n),i=mo(t,e,n),o=Math.floor((s-i+10)/7),a;return o<1?(a=t-1,o=Kt(a)):o>Kt(t)?(a=t+1,o=1):a=t,y({weekYear:a,weekNumber:o,weekday:i},Re(r))}function Ar(r){let{weekYear:t,weekNumber:e,weekday:n}=r,s=mo(t,1,4),i=Ct(t),o=e*7+n-s-3,a;o<1?(a=t-1,o+=Ct(a)):o>i?(a=t+1,o-=Ct(t)):a=t;let{month:l,day:c}=po(a,o);return y({year:a,month:l,day:c},Re(r))}function fn(r){let{year:t,month:e,day:n}=r,s=ho(t,e,n);return y({year:t,ordinal:s},Re(r))}function Ir(r){let{year:t,ordinal:e}=r,{month:n,day:s}=po(t,e);return y({year:t,month:n,day:s},Re(r))}function fo(r){let t=Le(r.weekYear),e=et(r.weekNumber,1,Kt(r.weekYear)),n=et(r.weekday,1,7);return t?e?n?!1:j("weekday",r.weekday):j("week",r.week):j("weekYear",r.weekYear)}function yo(r){let t=Le(r.year),e=et(r.ordinal,1,Ct(r.year));return t?e?!1:j("ordinal",r.ordinal):j("year",r.year)}function Dr(r){let t=Le(r.year),e=et(r.month,1,12),n=et(r.day,1,Jt(r.year,r.month));return t?e?n?!1:j("day",r.day):j("month",r.month):j("year",r.year)}function Fr(r){let{hour:t,minute:e,second:n,millisecond:s}=r,i=et(t,0,23)||t===24&&e===0&&n===0&&s===0,o=et(e,0,59),a=et(n,0,59),l=et(s,0,999);return i?o?a?l?!1:j("millisecond",s):j("second",n):j("minute",e):j("hour",t)}var Nr="Invalid DateTime",vo=864e13;function yn(r){return new H("unsupported zone",`the zone "${r.name}" is not supported`)}function Lr(r){return r.weekData===null&&(r.weekData=pn(r.c)),r.weekData}function kt(r,t){let e={ts:r.ts,zone:r.zone,c:r.c,o:r.o,loc:r.loc,invalid:r.invalid};return new v(R(y(y({},e),t),{old:e}))}function To(r,t,e){let n=r-t*60*1e3,s=e.offset(n);if(t===s)return[n,t];n-=(s-t)*60*1e3;let i=e.offset(n);return s===i?[n,s]:[r-Math.min(s,i)*60*1e3,Math.max(s,i)]}function vn(r,t){r+=t*60*1e3;let e=new Date(r);return{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate(),hour:e.getUTCHours(),minute:e.getUTCMinutes(),second:e.getUTCSeconds(),millisecond:e.getUTCMilliseconds()}}function bn(r,t,e){return To(jt(r),t,e)}function go(r,t){let e=r.o,n=r.c.year+Math.trunc(t.years),s=r.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i=R(y({},r.c),{year:n,month:s,day:Math.min(r.c.day,Jt(n,s))+Math.trunc(t.days)+Math.trunc(t.weeks)*7}),o=S.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=jt(i),[l,c]=To(a,e,r.zone);return o!==0&&(l+=o,c=r.zone.offset(l)),{ts:l,o:c}}function We(r,t,e,n,s,i){let{setZone:o,zone:a}=e;if(r&&Object.keys(r).length!==0||t){let l=t||a,c=v.fromObject(r,R(y({},e),{zone:l,specificOffset:i}));return o?c:c.setZone(a)}else return v.invalid(new H("unparsable",`the input "${s}" can't be parsed as ${n}`))}function gn(r,t,e=!0){return r.isValid?D.create(_.create("en-US"),{allowZ:e,forceSimple:!0}).formatDateTimeFromString(r,t):null}function zr(r,t){let e=r.c.year>9999||r.c.year<0,n="";return e&&r.c.year>=0&&(n+="+"),n+=A(r.c.year,e?6:4),t?(n+="-",n+=A(r.c.month),n+="-",n+=A(r.c.day)):(n+=A(r.c.month),n+=A(r.c.day)),n}function bo(r,t,e,n,s,i){let o=A(r.c.hour);return t?(o+=":",o+=A(r.c.minute),(r.c.millisecond!==0||r.c.second!==0||!e)&&(o+=":")):o+=A(r.c.minute),(r.c.millisecond!==0||r.c.second!==0||!e)&&(o+=A(r.c.second),(r.c.millisecond!==0||!n)&&(o+=".",o+=A(r.c.millisecond,3))),s&&(r.isOffsetFixed&&r.offset===0&&!i?o+="Z":r.o<0?(o+="-",o+=A(Math.trunc(-r.o/60)),o+=":",o+=A(Math.trunc(-r.o%60))):(o+="+",o+=A(Math.trunc(r.o/60)),o+=":",o+=A(Math.trunc(r.o%60)))),i&&(o+="["+r.zone.ianaName+"]"),o}var Oo={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},va={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},ga={ordinal:1,hour:0,minute:0,second:0,millisecond:0},$o=["year","month","day","hour","minute","second","millisecond"],ba=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],xa=["year","ordinal","hour","minute","second","millisecond"];function xo(r){let t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[r.toLowerCase()];if(!t)throw new qt(r);return t}function Eo(r,t){let e=K(t.zone,M.defaultZone),n=_.fromObject(t),s=M.now(),i,o;if(E(r.year))i=s;else{for(let c of $o)E(r[c])&&(r[c]=Oo[c]);let a=Dr(r)||Fr(r);if(a)return v.invalid(a);let l=e.offset(s);[i,o]=bn(r,l,e)}return new v({ts:i,zone:e,loc:n,o})}function So(r,t,e){let n=E(e.round)?!0:e.round,s=(o,a)=>(o=Gt(o,n||e.calendary?0:2,!0),t.loc.clone(e).relFormatter(e).format(o,a)),i=o=>e.calendary?t.hasSame(r,o)?0:t.startOf(o).diff(r.startOf(o),o).get(o):t.diff(r,o).get(o);if(e.unit)return s(i(e.unit),e.unit);for(let o of e.units){let a=i(o);if(Math.abs(a)>=1)return s(a,o)}return s(r>t?-0:0,e.units[e.units.length-1])}function wo(r){let t={},e;return r.length>0&&typeof r[r.length-1]=="object"?(t=r[r.length-1],e=Array.from(r).slice(0,r.length-1)):e=Array.from(r),[t,e]}var v=class{constructor(t){let e=t.zone||M.defaultZone,n=t.invalid||(Number.isNaN(t.ts)?new H("invalid input"):null)||(e.isValid?null:yn(e));this.ts=E(t.ts)?M.now():t.ts;let s=null,i=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(e))[s,i]=[t.old.c,t.old.o];else{let a=e.offset(this.ts);s=vn(this.ts,a),n=Number.isNaN(s.year)?new H("invalid input"):null,s=n?null:s,i=n?null:a}this._zone=e,this.loc=t.loc||_.create(),this.invalid=n,this.weekData=null,this.c=s,this.o=i,this.isLuxonDateTime=!0}static now(){return new v({})}static local(){let[t,e]=wo(arguments),[n,s,i,o,a,l,c]=e;return Eo({year:n,month:s,day:i,hour:o,minute:a,second:l,millisecond:c},t)}static utc(){let[t,e]=wo(arguments),[n,s,i,o,a,l,c]=e;return t.zone=I.utcInstance,Eo({year:n,month:s,day:i,hour:o,minute:a,second:l,millisecond:c},t)}static fromJSDate(t,e={}){let n=Ms(t)?t.valueOf():NaN;if(Number.isNaN(n))return v.invalid("invalid input");let s=K(e.zone,M.defaultZone);return s.isValid?new v({ts:n,zone:s,loc:_.fromObject(e)}):v.invalid(yn(s))}static fromMillis(t,e={}){if(tt(t))return t<-vo||t>vo?v.invalid("Timestamp out of range"):new v({ts:t,zone:K(e.zone,M.defaultZone),loc:_.fromObject(e)});throw new z(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,e={}){if(tt(t))return new v({ts:t*1e3,zone:K(e.zone,M.defaultZone),loc:_.fromObject(e)});throw new z("fromSeconds requires a numerical input")}static fromObject(t,e={}){t=t||{};let n=K(e.zone,M.defaultZone);if(!n.isValid)return v.invalid(yn(n));let s=M.now(),i=E(e.specificOffset)?n.offset(s):e.specificOffset,o=Qt(t,xo),a=!E(o.ordinal),l=!E(o.year),c=!E(o.month)||!E(o.day),u=l||c,h=o.weekYear||o.weekNumber,g=_.fromObject(e);if((u||a)&&h)throw new ot("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&a)throw new ot("Can't mix ordinal dates with month/day");let p=h||o.weekday&&!u,O,V,U=vn(s,i);p?(O=ba,V=va,U=pn(U)):a?(O=xa,V=ga,U=fn(U)):(O=$o,V=Oo);let pt=!1;for(let G of O){let Ht=o[G];E(Ht)?pt?o[G]=V[G]:o[G]=U[G]:pt=!0}let Ze=p?fo(o):a?yo(o):Dr(o),le=Ze||Fr(o);if(le)return v.invalid(le);let Pe=p?Ar(o):a?Ir(o):o,[qe,je]=bn(Pe,i,n),B=new v({ts:qe,zone:n,o:je,loc:g});return o.weekday&&u&&t.weekday!==B.weekday?v.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${B.toISO()}`):B}static fromISO(t,e={}){let[n,s]=Zs(t);return We(n,s,e,"ISO 8601",t)}static fromRFC2822(t,e={}){let[n,s]=Ps(t);return We(n,s,e,"RFC 2822",t)}static fromHTTP(t,e={}){let[n,s]=qs(t);return We(n,s,e,"HTTP",e)}static fromFormat(t,e,n={}){if(E(t)||E(e))throw new z("fromFormat requires an input string and a format");let{locale:s=null,numberingSystem:i=null}=n,o=_.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0}),[a,l,c,u]=lo(o,t,e);return u?v.invalid(u):We(a,l,n,`format ${e}`,t,c)}static fromString(t,e,n={}){return v.fromFormat(t,e,n)}static fromSQL(t,e={}){let[n,s]=Ys(t);return We(n,s,e,"SQL",t)}static invalid(t,e=null){if(!t)throw new z("need to specify a reason the DateTime is invalid");let n=t instanceof H?t:new H(t,e);if(M.throwOnInvalid)throw new rn(n);return new v({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,e={}){let n=kr(t,_.fromObject(e));return n?n.map(s=>s?s.val:null).join(""):null}static expandFormat(t,e={}){return Cr(D.parseFormat(t),_.fromObject(e)).map(s=>s.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Lr(this).weekYear:NaN}get weekNumber(){return this.isValid?Lr(this).weekNumber:NaN}get weekday(){return this.isValid?Lr(this).weekday:NaN}get ordinal(){return this.isValid?fn(this.c).ordinal:NaN}get monthShort(){return this.isValid?at.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?at.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?at.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?at.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let t=864e5,e=6e4,n=jt(this.c),s=this.zone.offset(n-t),i=this.zone.offset(n+t),o=this.zone.offset(n-s*e),a=this.zone.offset(n-i*e);if(o===a)return[this];let l=n-o*e,c=n-a*e,u=vn(l,o),h=vn(c,a);return u.hour===h.hour&&u.minute===h.minute&&u.second===h.second&&u.millisecond===h.millisecond?[kt(this,{ts:l}),kt(this,{ts:c})]:[this]}get isInLeapYear(){return _t(this.year)}get daysInMonth(){return Jt(this.year,this.month)}get daysInYear(){return this.isValid?Ct(this.year):NaN}get weeksInWeekYear(){return this.isValid?Kt(this.weekYear):NaN}resolvedLocaleOptions(t={}){let{locale:e,numberingSystem:n,calendar:s}=D.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:e,numberingSystem:n,outputCalendar:s}}toUTC(t=0,e={}){return this.setZone(I.instance(t),e)}toLocal(){return this.setZone(M.defaultZone)}setZone(t,{keepLocalTime:e=!1,keepCalendarTime:n=!1}={}){if(t=K(t,M.defaultZone),t.equals(this.zone))return this;if(t.isValid){let s=this.ts;if(e||n){let i=t.offset(this.ts),o=this.toObject();[s]=bn(o,i,t)}return kt(this,{ts:s,zone:t})}else return v.invalid(yn(t))}reconfigure({locale:t,numberingSystem:e,outputCalendar:n}={}){let s=this.loc.clone({locale:t,numberingSystem:e,outputCalendar:n});return kt(this,{loc:s})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;let e=Qt(t,xo),n=!E(e.weekYear)||!E(e.weekNumber)||!E(e.weekday),s=!E(e.ordinal),i=!E(e.year),o=!E(e.month)||!E(e.day),a=i||o,l=e.weekYear||e.weekNumber;if((a||s)&&l)throw new ot("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(o&&s)throw new ot("Can't mix ordinal dates with month/day");let c;n?c=Ar(y(y({},pn(this.c)),e)):E(e.ordinal)?(c=y(y({},this.toObject()),e),E(e.day)&&(c.day=Math.min(Jt(c.year,c.month),c.day))):c=Ir(y(y({},fn(this.c)),e));let[u,h]=bn(c,this.o,this.zone);return kt(this,{ts:u,o:h})}plus(t){if(!this.isValid)return this;let e=S.fromDurationLike(t);return kt(this,go(this,e))}minus(t){if(!this.isValid)return this;let e=S.fromDurationLike(t).negate();return kt(this,go(this,e))}startOf(t){if(!this.isValid)return this;let e={},n=S.normalizeUnit(t);switch(n){case"years":e.month=1;case"quarters":case"months":e.day=1;case"weeks":case"days":e.hour=0;case"hours":e.minute=0;case"minutes":e.second=0;case"seconds":e.millisecond=0;break;case"milliseconds":break}if(n==="weeks"&&(e.weekday=1),n==="quarters"){let s=Math.ceil(this.month/3);e.month=(s-1)*3+1}return this.set(e)}endOf(t){return this.isValid?this.plus({[t]:1}).startOf(t).minus(1):this}toFormat(t,e={}){return this.isValid?D.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this,t):Nr}toLocaleString(t=ct,e={}){return this.isValid?D.create(this.loc.clone(e),t).formatDateTime(this):Nr}toLocaleParts(t={}){return this.isValid?D.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:e=!1,suppressMilliseconds:n=!1,includeOffset:s=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;let o=t==="extended",a=zr(this,o);return a+="T",a+=bo(this,o,e,n,s,i),a}toISODate({format:t="extended"}={}){return this.isValid?zr(this,t==="extended"):null}toISOWeekDate(){return gn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:e=!1,includeOffset:n=!0,includePrefix:s=!1,extendedZone:i=!1,format:o="extended"}={}){return this.isValid?(s?"T":"")+bo(this,o==="extended",e,t,n,i):null}toRFC2822(){return gn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return gn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?zr(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:e=!1,includeOffsetSpace:n=!0}={}){let s="HH:mm:ss.SSS";return(e||t)&&(n&&(s+=" "),e?s+="z":t&&(s+="ZZ")),gn(this,s,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Nr}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};let e=y({},this.c);return t.includeConfig&&(e.outputCalendar=this.outputCalendar,e.numberingSystem=this.loc.numberingSystem,e.locale=this.loc.locale),e}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,e="milliseconds",n={}){if(!this.isValid||!t.isValid)return S.invalid("created by diffing an invalid DateTime");let s=y({locale:this.locale,numberingSystem:this.numberingSystem},n),i=ks(e).map(S.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,l=o?t:this,c=eo(a,l,i,s);return o?c.negate():c}diffNow(t="milliseconds",e={}){return this.diff(v.now(),t,e)}until(t){return this.isValid?k.fromDateTimes(this,t):this}hasSame(t,e){if(!this.isValid)return!1;let n=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(e)<=n&&n<=s.endOf(e)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;let e=t.base||v.fromObject({},{zone:this.zone}),n=t.padding?this<e?-t.padding:t.padding:0,s=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(s=t.unit,i=void 0),So(e,this.plus(n),R(y({},t),{numeric:"always",units:s,unit:i}))}toRelativeCalendar(t={}){return this.isValid?So(t.base||v.fromObject({},{zone:this.zone}),this,R(y({},t),{numeric:"auto",units:["years","months","days"],calendary:!0})):null}static min(...t){if(!t.every(v.isDateTime))throw new z("min requires all arguments be DateTimes");return gr(t,e=>e.valueOf(),Math.min)}static max(...t){if(!t.every(v.isDateTime))throw new z("max requires all arguments be DateTimes");return gr(t,e=>e.valueOf(),Math.max)}static fromFormatExplain(t,e,n={}){let{locale:s=null,numberingSystem:i=null}=n,o=_.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0});return Mr(o,t,e)}static fromStringExplain(t,e,n={}){return v.fromFormatExplain(t,e,n)}static get DATE_SHORT(){return ct}static get DATE_MED(){return ye}static get DATE_MED_WITH_WEEKDAY(){return nr}static get DATE_FULL(){return ve}static get DATE_HUGE(){return ge}static get TIME_SIMPLE(){return be}static get TIME_WITH_SECONDS(){return xe}static get TIME_WITH_SHORT_OFFSET(){return Ee}static get TIME_WITH_LONG_OFFSET(){return Se}static get TIME_24_SIMPLE(){return we}static get TIME_24_WITH_SECONDS(){return Te}static get TIME_24_WITH_SHORT_OFFSET(){return Oe}static get TIME_24_WITH_LONG_OFFSET(){return $e}static get DATETIME_SHORT(){return _e}static get DATETIME_SHORT_WITH_SECONDS(){return Ce}static get DATETIME_MED(){return Me}static get DATETIME_MED_WITH_SECONDS(){return ke}static get DATETIME_MED_WITH_WEEKDAY(){return rr}static get DATETIME_FULL(){return Ae}static get DATETIME_FULL_WITH_SECONDS(){return Ie}static get DATETIME_HUGE(){return De}static get DATETIME_HUGE_WITH_SECONDS(){return Fe}};function ie(r){if(v.isDateTime(r))return r;if(r&&r.valueOf&&tt(r.valueOf()))return v.fromJSDate(r);if(r&&typeof r=="object")return v.fromObject(r);throw new z(`Unknown datetime argument: ${r}, of type ${typeof r}`)}var _o=$(x),Ea=[_o.styles,Pn],At=class extends _o{constructor(){super();this.updateComment=({detail:e})=>{let{text:n}=e;this.text=n,this.closeEditMode(),this.emitEvent("update-comment",{uuid:this.uuid,text:n})};this.resolveAnnotation=()=>{this.emitEvent("resolve-annotation",{type:"resolve-annotation",resolved:!this.resolved},{composed:!1,bubbles:!1})};this.confirmDelete=()=>{if(this.deleteCommentModalOpen=!1,this.primaryComment)return this.emitEvent("delete-annotation",{uuid:this.annotationId});this.emitEvent("delete-comment",{uuid:this.uuid})};this.closeEditMode=()=>{this.mode="readonly"};this.resolved=!1}render(){var p;let e=this.annotationFilter==="all"?"resolve":"undo",n=O=>v.fromISO(O).toFormat("yyyy-dd-MM"),s=this.resolvable?"comment-item__resolve":"hidden",i=[{label:"EDIT"},{label:"DELETE"}],o=({detail:O})=>{O==="EDIT"&&(this.mode="editable"),O==="DELETE"&&(this.deleteCommentModalOpen=!0)},a=()=>{this.text.length<120||(this.expandElipsis=!0)},l=()=>{if(this.mode==="editable")return f`
        <superviz-comments-comment-input
          class="comment-item--editable"
          editable
          text=${this.text}
          eventType="update-comment"
          @update-comment=${this.updateComment}
          @close-edit-mode=${this.closeEditMode}
        ></superviz-comments-comment-input>
      `},c=()=>{if(this.mode!=="editable")return f`
        <span
          id="comment-text"
          @click=${a}
          class="text text-big sv-gray-700 ${g}"
          >${this.text}</span
        >
      `},u=()=>{this.deleteCommentModalOpen=!1},h={"comment-item":!0,reply:!this.primaryComment},g=!this.expandElipsis&&this.text.length>120?"line-clamp":"";return f`
      <div class=${F(h)}>
        <div class="comment-item__user">
          <div class="comment-item__user-details">
            <div class="comment-item__avatar">
              <p class="text text-bold">${((p=this.username[0])==null?void 0:p.toUpperCase())||"A"}</p>
            </div>
            <span class="text text-bold sv-gray-600">${this.username}</span>
            <span class="text text-small sv-gray-500">${n(this.createdAt)}</span>
          </div>
          <div class="comment-item__actions">
            <button
              @click=${this.resolveAnnotation}
              class="icon-button icon-button--clickable icon-button--xsmall ${s}"
            >
              <superviz-icon name=${e} size="md"></superviz-icon>
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
    `}};At.styles=Ea,At.properties={uuid:{type:String},annotationId:{type:String},avatar:{type:String},username:{type:String},text:{type:String},resolved:{type:Boolean},resolvable:{type:Boolean},createdAt:{type:String},mode:{type:String},deleteCommentModalOpen:{type:Boolean},primaryComment:{type:Boolean},expandElipsis:{type:Boolean},annotationFilter:{type:String}},At=w([T("superviz-comments-comment-item")],At);var Co=$(x),Sa=[Co.styles,jn],It=class extends Co{constructor(){super();this.pinCoordinates=null;this.getCommentInput=()=>this.shadowRoot.getElementById("comment-input--textarea");this.getCommentInputContainer=()=>this.shadowRoot.getElementById("comment-input--container");this.getSendBtn=()=>this.shadowRoot.querySelector(".comment-input--send-btn");this.commentInputFocus=({detail:e})=>{this.pinCoordinates=e,this.getCommentInput().focus()};this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1})};this.btnActive=!1,this.text=""}connectedCallback(){super.connectedCallback(),this.eventType==="create-annotation"&&window.document.body.addEventListener("comment-input-focus",this.commentInputFocus)}disconnectedCallback(){super.disconnectedCallback(),this.eventType==="create-annotation"&&window.document.body.removeEventListener("comment-input-focus",this.commentInputFocus)}updated(e){if(e.has("text")&&this.text.length>0){let n=this.getCommentInput();n.value=this.text,this.updateHeight()}if(e.has("btnActive")){let n=this.getSendBtn();n.disabled=!this.btnActive}}updateHeight(){let e=this.getCommentInput(),n=this.getCommentInputContainer();e.style.height="0px",n.style.height="0px";let s=e.scrollHeight+4,i=e.scrollHeight;e.style.height=`${s}px`,n.style.height=`${i}px`;let o=this.getSendBtn();o.disabled=!(e.value.length>0)}send(e){var o,a,l,c,u,h,g,p;e.preventDefault();let n=this.getCommentInput(),s=this.getSendBtn(),i=n.value;this.emitEvent(this.eventType,{text:i,position:{x:(a=(o=this.pinCoordinates)==null?void 0:o.x)!=null?a:null,y:(c=(l=this.pinCoordinates)==null?void 0:l.y)!=null?c:null,z:(h=(u=this.pinCoordinates)==null?void 0:u.z)!=null?h:null,type:(p=(g=this.pinCoordinates)==null?void 0:g.type)!=null?p:null}},{composed:!1,bubbles:!1}),this.pinCoordinates=null,n.value="",s.disabled=!0,this.updateHeight()}render(){let e=()=>{if(!!this.editable)return f`
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
            ${n()} ${e()}
          </div>
        </div>
      </div>
    `}};It.styles=Sa,It.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean}},It=w([T("superviz-comments-comment-input")],It);var Mo=$(x),wa=[Mo.styles,Jn],Dt=class extends Mo{constructor(){super();this.position={x:0,y:0}}get userInitial(){var n,s,i;return(((i=(s=(n=this.annotation)==null?void 0:n.comments[0])==null?void 0:s.participant)==null?void 0:i.name)||"Anonymous")[0].toUpperCase()}emitClick(){document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:this.annotation.uuid}}))}render(){var n,s;let e={"annotation-pin":!0,"annotation-pin--active":this.active};return this.type==="add"?f`
        <div
          class=${F(e)}
          style=${`top: ${this.position.y}px; left: ${this.position.x}px;`}
        >
          <div class="annotation-pin__avatar annotation-pin__avatar--add">
            <superviz-icon name="add"></superviz-icon>
          </div>
        </div>
      `:f`
      <div
        @click=${this.emitClick}
        class=${F(e)}
        style=${`top: ${(n=this.position)==null?void 0:n.y}px; left: ${(s=this.position)==null?void 0:s.x}px;`}
      >
        <div class="annotation-pin__avatar">
          <p class="text text-bold text-big">${this.userInitial}</p>
          <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
        </div>
      </div>
    `}};Dt.styles=wa,Dt.properties={type:{type:String},annotation:{type:Object},position:{type:Object},active:{type:Boolean}},Dt=w([T("superviz-comments-annotation-pin")],Dt);var ko=$(x),Ta=[ko.styles,Gn],Ft=class extends ko{constructor(){super(...arguments);this.selectAnnotation=()=>{let{uuid:e}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:e}}))}}firstUpdated(){this.resolved=this.annotation.resolved}updated(e){if(e.has("selected")){let n=this.selected===this.annotation.uuid;this.expandComments=n}}createComment({detail:e}){let{text:n}=e;this.emitEvent("create-comment",{uuid:this.annotation.uuid,text:n})}render(){var U,pt,Ze,le,Pe,qe,je;let e=this.annotationFilter==="all",n=this.annotationFilter==="resolved",s=(U=this.annotation.comments)==null?void 0:U.length,i=this.selected===this.annotation.uuid,o={"annotation-item":!0,"annotation-item--selected":i},a={hidden:this.resolved&&e||!this.resolved&&n},l={"sv-hr":!0,hidden:this.isLastAnnotation},c={"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&s>1,hidden:!(!this.expandComments&&s>1)},u={"comments-container":!0,"comment-item--expand":i&&this.expandComments,hidden:!(i&&this.expandComments)},h=({detail:B})=>{let{uuid:G}=this.annotation,{resolved:Ht,type:Ge}=B,ce=Ge==="resolve-annotation"&&this.annotationFilter==="all";this.resolved=Ht,this.emitEvent("resolve-annotation",{uuid:G,resolved:Ht}),ce&&(this.shouldShowUndoResolved=!0)},g=()=>{this.shouldShowUndoResolved=!1},p=()=>{let B=s>=5?5:s,G=s-1>5?"last-reply":"",Ht=s-1>1?"replies":"reply",Ge=[];for(let ce=0;ce<B;ce++)Ge.push(f`
          <div class="avatar avatar-divs-${ce}">
            <img src="https://picsum.photos/200/300" />
          </div>
        `);return f`
        ${Ge}
        <div class="avatar-divs-${B} replies ${G} text text-big sv-gray-500">
          ${s-1} ${Ht}
        </div>
      `},O=(B,G)=>G===0?f``:f`
        <superviz-comments-comment-item
          uuid=${B.uuid}
          avatar="https://picsum.photos/200/300"
          username=${B.participant.name||"Anonymous"}
          text=${B.text}
          createdAt=${B.createdAt}
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
              uuid=${(pt=this.annotation.comments)==null?void 0:pt[0].uuid}
              annotationId=${this.annotation.uuid}
              username=${((le=(Ze=this.annotation.comments)==null?void 0:Ze[0].participant)==null?void 0:le.name)||"Anonymous"}
              text=${(Pe=this.annotation.comments)==null?void 0:Pe[0].text}
              createdAt=${(qe=this.annotation.comments)==null?void 0:qe[0].createdAt}
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
            ${(je=this.annotation.comments)==null?void 0:je.map(O)}
            <superviz-comments-comment-input
              @create-comment=${this.createComment}
              eventType="create-comment"
            ></superviz-comments-comment-input>
          </div>
        </div>
        <div class=${F(l)}></div>
      </div>
    `}};Ft.styles=Ta,Ft.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String}},Ft=w([T("superviz-comments-annotation-item")],Ft);var Ao=$(x),Oa=[Ao.styles],Nt=class extends Ao{constructor(){super(...arguments);this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:f`<span class="text text-big sv-gray-600">Are you sure you want to delete this comment? <br /> This action cannot be undone</span>`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))};this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{!this.open||this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{!this.open||(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(e){e.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){!this.open||(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){let e=()=>{if(!!this.useSlot)return f`<slot name="modal-handler" @click=${this.toggle}></slot>`},n=()=>{if(!!this.open)return f`
        <superviz-modal></superviz-modal>
      `};return f`
      ${e()}
      ${n()}
    `}};Nt.styles=Oa,Nt.properties={open:{type:Boolean},useSlot:{type:Boolean}},Nt=w([T("superviz-comments-delete-comments-modal")],Nt);var Io=$(x),$a=[Io.styles,Yn],_a=10*1e3,Lt=class extends Io{constructor(){super();this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)};this.timeToHide=_a,this.isCanceled=!1}firstUpdated(){this.setTimer()}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return this.timeToHide===0?f``:this.isCanceled?f``:f`
      <div class="annotation-resolved">
        <span class="text text-big sv-gray-700">You resolve this comment</span>
        <button
          id="undone"
          @click=${this.undone}
          class="icon-button icon-button--clickable icon-button--medium"
        >
          <superviz-icon name="undo" size="md"></superviz-icon>
        </button>
      </div>
    `}};Lt.styles=$a,Lt.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},Lt=w([T("superviz-comments-annotation-resolved")],Lt);var Do=$(x),Ca=[Do.styles,Kn],Be=[{label:"All comments",code:"all"},{label:"Resolved comments",code:"resolved"}],zt=class extends Do{constructor(){super();this.caret="down"}render(){let e=this.filter==="all"?Be[0].label:Be[1].label,n=({detail:a})=>{this.emitEvent("select",{filter:a}),s()},s=()=>{this.caret=this.caret==="down"?"up":"down"},i=this.filter==="all"?Be[0].code:Be[1].code,o={text:!0,"text-bold":!0,"select-content":!0,"sv-gray-500":this.caret==="down","sv-gray-700":this.caret==="up"};return f`
      <div class="select">
        <div class="select-container">
          <superviz-dropdown 
            options=${JSON.stringify(Be)}
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
              <span class=${F(o)}>${e}</span>
              <superviz-icon name=${this.caret} size="md"></superviz-icon>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};zt.styles=Ca,zt.properties={filter:{type:String},caret:{type:String}},zt=w([T("superviz-comments-annotation-filter")],zt);var Fo=$(x),Ma=[Fo.styles,Qn],ae=class extends Fo{toggle(){this.emitEvent("toggle",{})}render(){return f` <button @click=${this.toggle} class="float-button">
      <superviz-icon name="comment"></superviz-icon>

      <p class="text text-big text-bold">Comments</p>
    </button>`}};ae.styles=Ma,ae=w([T("superviz-comments-button")],ae);export{wt as Comments,zt as CommentsAnnotationFilter,Ft as CommentsAnnotationItem,Dt as CommentsAnnotationPin,Lt as CommentsAnnotationResolved,Tt as CommentsAnnotations,It as CommentsCommentInput,At as CommentsCommentItem,Ot as CommentsContent,ae as CommentsFloatButton,Pt as CommentsTopbar,Nt as DeleteCommentModal,St as Dropdown,xt as HelloWorld,Et as Icon,Bt as Modal,Zt as ModalContainer,Wt as PresenceMouse};
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
