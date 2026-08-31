/*! For license information please see chunk.975.bbab3208ea89a0600a65.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_||=[]).push([[975],{9990(e,t,r){"use strict"
function n(e){e.lookup("service:router-scroll")}r.r(t),r.d(t,{default:()=>i,initialize:()=>n})
var i={initialize:n}},9927(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>j})
var n,i=r(2735),o=r.n(i),a=r(4471),s=r(9553),l=r(1603),c=r(2294),u=r(1223),d=r(4505),f=r(1130),p=r(7172),h=r(473),g=r(1055)
const m="__APP_SCHEDULER_HAS_SETUP__"
let b,y
const v=void 0!==window.FastBoot,w=(0,p.buildWaiter)("ember-app-scheduler-waiter")
T()
var x=new WeakMap
class k{constructor(){var e,t
e=x,t=void(0,g.i)(this,"isIdle"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,e),e.set(this,t)}}n=k,(0,g.g)(n.prototype,"isIdle",[h.tracked],function(){return!1})
const E=new k
function _(){b.isResolved&&(b=S(),y=b.promise.then(()=>{const e=w.beginAsync()
return new Promise(e=>{(0,u.schedule)("afterRender",null,()=>{requestAnimationFrame(()=>{requestAnimationFrame(e)})})}).finally(()=>{w.endAsync(e),O("appSchedulerEnd"),function(){try{performance.measure("appScheduler","appSchedulerStart","appSchedulerEnd")}catch(e){console.warn(`performance.mark could not be executed because of ${e.message}`,`performance.measure could not be executed because of ${e.message}`)}}(),E.isIdle=!0})}),E.isIdle=!1)}function A(){b.resolve(),O("appSchedulerStart")}function T(){b=S(),y=b.promise.then(),w.reset(),v||b.resolve()}function S(){let e,t,r=!1
return{promise:new Promise((n,i)=>{e=()=>{r=!0,n()},t=i}),resolve:e,reject:t,get isResolved(){return r}}}function O(e){try{performance.mark(e)}catch(e){console.warn(`performance.mark could not be executed because of ${e.message}`)}}var N
function C(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let D,L=0
function q(e,t,r,n){let i
if(r)i=Math.max(r.scrollHeight,r.offsetHeight,r.clientHeight)
else{const{body:e,documentElement:t}=document
i=Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)}D=window.requestAnimationFrame(()=>{if(n&&n.indexOf("#")>-1){const e=document.getElementById(n.split("#").pop())
e&&(t={x:e.offsetLeft,y:e.offsetTop})}i>=t.y||L>=100?(L=0,e.call(null,t.x,t.y)):(L++,q(e,t,r,n))})}const R=function(e){this.updateScrollPosition(e)}
var P=new WeakMap
class j extends(o()){get isFastBoot(){const e=(0,c.getOwner)(this).lookup("service:fastboot")
return!!e&&e.get("isFastBoot")}constructor(){var e,t,r
super(...arguments),t=P,r=void(0,g.i)(this,"router"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.set(this,r),C(this,"key",void 0),C(this,"targetElement",void 0),C(this,"scrollElement","window"),C(this,"isFirstLoad",!0),C(this,"preserveScrollPosition",!1),C(this,"scrollWhenIdle",!1),C(this,"scrollWhenAfterRender",!1),e=this.router,v||e[m]||(e[m]=!0,(0,d.addListener)(e,"routeWillChange",_),(0,d.addListener)(e,"routeDidChange",A),(0,f.registerDestructor)(e,T))}init(...e){super.init(...e),this._loadConfig(),(0,a.set)(this,"scrollMap",{default:{x:0,y:0}}),(0,d.addListener)(this.router,"routeWillChange",this._routeWillChange),(0,d.addListener)(this.router,"routeDidChange",this._routeDidChange)}willDestroy(){(0,d.removeListener)(this.router,"routeWillChange",this._routeWillChange),(0,d.removeListener)(this.router,"routeDidChange",this._routeDidChange),D&&window.cancelAnimationFrame(D),super.willDestroy(...arguments)}updateScrollPosition(e){this.isFirstLoad&&this.unsetFirstLoad()
let t=this.position
if(!(e.router.currentRouteInfos||[]).some(e=>e.route.controller.preserveScrollPosition)&&!this.preserveScrollPosition){const{scrollElement:e,targetElement:r,currentURL:n}=this
if(r||"window"===e)q(window.scrollTo,t,null,n)
else if("#"===e.charAt(0)){const r=document.getElementById(e.substring(1))
r&&q((e,t)=>{r.scrollLeft=e,r.scrollTop=t},t,r,n)}}(0,d.sendEvent)(this,"didScroll",e)}_routeWillChange(){this.isFastBoot||this.update()}_routeDidChange(e){if(this.isFastBoot)return
const t=this.scrollWhenIdle,r=this.scrollWhenAfterRender
t||r?r&&!t?(0,u.scheduleOnce)("afterRender",this,R,e):y.then(()=>{this.updateScrollPosition(e)}):(0,u.scheduleOnce)("render",this,R,e)}unsetFirstLoad(){(0,a.set)(this,"isFirstLoad",!1)}update(){if(this.isFastBoot||this.isFirstLoad)return
const e=this.scrollElement,t=this.targetElement,r=this.scrollMap,n=this.key
let i,o
if(t){let e=document.querySelector(t)
e&&(i=e.offsetLeft,o=e.offsetTop,(0,a.set)(r,"default",{x:i,y:o}))}else if("window"===e)i=window.scrollX,o=window.scrollY
else if("#"===e.charAt(0)){let t=document.getElementById(e.substring(1))
t&&(i=t.scrollLeft,o=t.scrollTop)}n&&"number"===(0,s.typeOf)(i)&&"number"===(0,s.typeOf)(o)&&(0,a.set)(r,n,{x:i,y:o})}_loadConfig(){const e=(0,c.getOwner)(this).resolveRegistration("config:environment")
if(e&&e.routerScroll){const t=e.routerScroll.scrollElement,r=e.routerScroll.targetElement;(0,l.assert)("You defined both scrollElement and targetElement in your config. We currently only support definining one of them",!(t&&r)),"string"===(0,s.typeOf)(t)&&(0,a.set)(this,"scrollElement",t),"string"===(0,s.typeOf)(r)&&(0,a.set)(this,"targetElement",r)
const{scrollWhenIdle:n=!1,scrollWhenAfterRender:i=!1}=e.routerScroll;(0,a.set)(this,"scrollWhenIdle",n),(0,a.set)(this,"scrollWhenAfterRender",i)}}}N=j,(0,g.g)(N.prototype,"router",[i.service]),(0,g.n)(N.prototype,"_routeWillChange",[a.action]),(0,g.n)(N.prototype,"_routeDidChange",[a.action]),Object.defineProperty(j.prototype,"position",{configurable:!0,get(){const e=this.scrollMap,t=window.history.state?.uuid;(0,a.set)(this,"key",t)
const r=this.key||"-1"
return(0,a.get)(e,r)||e.default}})},3367(e){e.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}},2051(e){var t
t=function(){return function(){var e={686:function(e,t,r){"use strict"
r.d(t,{default:function(){return w}})
var n=r(279),i=r.n(n),o=r(370),a=r.n(o),s=r(817),l=r.n(s)
function c(e){try{return document.execCommand(e)}catch(e){return!1}}var u=function(e){var t=l()(e)
return c("cut"),t},d=function(e,t){var r=function(e){var t="rtl"===document.documentElement.getAttribute("dir"),r=document.createElement("textarea")
r.style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[t?"right":"left"]="-9999px"
var n=window.pageYOffset||document.documentElement.scrollTop
return r.style.top="".concat(n,"px"),r.setAttribute("readonly",""),r.value=e,r}(e)
t.container.appendChild(r)
var n=l()(r)
return c("copy"),r.remove(),n},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},r=""
return"string"==typeof e?r=d(e,t):e instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==e?void 0:e.type)?r=d(e.value,t):(r=l()(e),c("copy")),r}
function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function y(e,t){var r="data-clipboard-".concat(e)
if(t.hasAttribute(r))return t.getAttribute(r)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(l,e)
var t,r,n,i,o,s=(i=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=b(i)
if(o){var r=b(this).constructor
e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments)
return function(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}(this,e)})
function l(e,t){var r
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(r=s.call(this)).resolveOptions(t),r.listenClick(e),r}return t=l,r=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this
this.listener=a()(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,r=this.action(t)||"copy",n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,r=void 0===t?"copy":t,n=e.container,i=e.target,o=e.text
if("copy"!==r&&"cut"!==r)throw new Error('Invalid "action" value, use either "copy" or "cut"')
if(void 0!==i){if(!i||"object"!==p(i)||1!==i.nodeType)throw new Error('Invalid "target" value, use a valid Element')
if("copy"===r&&i.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute')
if("cut"===r&&(i.hasAttribute("readonly")||i.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return o?f(o,{container:n}):i?"cut"===r?u(i):f(i,{container:n}):void 0}({action:r,container:this.container,target:this.target(t),text:this.text(t)})
this.emit(n?"success":"error",{action:r,text:n,trigger:t,clearSelection:function(){t&&t.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return y("action",e)}},{key:"defaultTarget",value:function(e){var t=y("target",e)
if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return y("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}],n=[{key:"copy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body}
return f(e,t)}},{key:"cut",value:function(e){return u(e)}},{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,r=!!document.queryCommandSupported
return t.forEach(function(e){r=r&&!!document.queryCommandSupported(e)}),r}}],r&&g(t.prototype,r),n&&g(t,n),l}(i()),w=v},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype
t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e
e=e.parentNode}}},438:function(e,t,r){var n=r(828)
function i(e,t,r,n,i){var a=o.apply(this,arguments)
return e.addEventListener(r,a,i),{destroy:function(){e.removeEventListener(r,a,i)}}}function o(e,t,r,i){return function(r){r.delegateTarget=n(r.target,t),r.delegateTarget&&i.call(e,r)}}e.exports=function(e,t,r,n,o){return"function"==typeof e.addEventListener?i.apply(null,arguments):"function"==typeof r?i.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return i(e,t,r,n,o)}))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var r=Object.prototype.toString.call(e)
return void 0!==e&&("[object NodeList]"===r||"[object HTMLCollection]"===r)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,r){var n=r(879),i=r(438)
e.exports=function(e,t,r){if(!e&&!t&&!r)throw new Error("Missing required arguments")
if(!n.string(t))throw new TypeError("Second argument must be a String")
if(!n.fn(r))throw new TypeError("Third argument must be a Function")
if(n.node(e))return function(e,t,r){return e.addEventListener(t,r),{destroy:function(){e.removeEventListener(t,r)}}}(e,t,r)
if(n.nodeList(e))return function(e,t,r){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,r)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,r)})}}}(e,t,r)
if(n.string(e))return function(e,t,r){return i(document.body,e,t,r)}(e,t,r)
throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t
if("SELECT"===e.nodeName)e.focus(),t=e.value
else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var r=e.hasAttribute("readonly")
r||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),r||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus()
var n=window.getSelection(),i=document.createRange()
i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,r){var n=this.e||(this.e={})
return(n[e]||(n[e]=[])).push({fn:t,ctx:r}),this},once:function(e,t,r){var n=this
function i(){n.off(e,i),t.apply(r,arguments)}return i._=t,this.on(e,i,r)},emit:function(e){for(var t=[].slice.call(arguments,1),r=((this.e||(this.e={}))[e]||[]).slice(),n=0,i=r.length;n<i;n++)r[n].fn.apply(r[n].ctx,t)
return this},off:function(e,t){var r=this.e||(this.e={}),n=r[e],i=[]
if(n&&t)for(var o=0,a=n.length;o<a;o++)n[o].fn!==t&&n[o].fn._!==t&&i.push(n[o])
return i.length?r[e]=i:delete r[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={}
function r(n){if(t[n])return t[n].exports
var i=t[n]={exports:{}}
return e[n](i,i.exports,r),i.exports}return r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r(686)}().default},e.exports=t()},5210(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.attributeRules=void 0
var i=n(r(3367)),o=/[-[\]{}()*+?.,\\^$|#\s]/g
function a(e){return e.replace(o,"\\$&")}var s=new Set(["accept","accept-charset","align","alink","axis","bgcolor","charset","checked","clear","codetype","color","compact","declare","defer","dir","direction","disabled","enctype","face","frame","hreflang","http-equiv","lang","language","link","media","method","multiple","nohref","noresize","noshade","nowrap","readonly","rel","rev","rules","scope","scrolling","selected","shape","target","text","type","valign","valuetype","vlink"])
function l(e,t){return"boolean"==typeof e.ignoreCase?e.ignoreCase:"quirks"===e.ignoreCase?!!t.quirksMode:!t.xmlMode&&s.has(e.name)}t.attributeRules={equals:function(e,t,r){var n=r.adapter,i=t.name,o=t.value
return l(t,r)?(o=o.toLowerCase(),function(t){var r=n.getAttributeValue(t,i)
return null!=r&&r.length===o.length&&r.toLowerCase()===o&&e(t)}):function(t){return n.getAttributeValue(t,i)===o&&e(t)}},hyphen:function(e,t,r){var n=r.adapter,i=t.name,o=t.value,a=o.length
return l(t,r)?(o=o.toLowerCase(),function(t){var r=n.getAttributeValue(t,i)
return null!=r&&(r.length===a||"-"===r.charAt(a))&&r.substr(0,a).toLowerCase()===o&&e(t)}):function(t){var r=n.getAttributeValue(t,i)
return null!=r&&(r.length===a||"-"===r.charAt(a))&&r.substr(0,a)===o&&e(t)}},element:function(e,t,r){var n=r.adapter,o=t.name,s=t.value
if(/\s/.test(s))return i.default.falseFunc
var c=new RegExp("(?:^|\\s)".concat(a(s),"(?:$|\\s)"),l(t,r)?"i":"")
return function(t){var r=n.getAttributeValue(t,o)
return null!=r&&r.length>=s.length&&c.test(r)&&e(t)}},exists:function(e,t,r){var n=t.name,i=r.adapter
return function(t){return i.hasAttrib(t,n)&&e(t)}},start:function(e,t,r){var n=r.adapter,o=t.name,a=t.value,s=a.length
return 0===s?i.default.falseFunc:l(t,r)?(a=a.toLowerCase(),function(t){var r=n.getAttributeValue(t,o)
return null!=r&&r.length>=s&&r.substr(0,s).toLowerCase()===a&&e(t)}):function(t){var r
return!!(null===(r=n.getAttributeValue(t,o))||void 0===r?void 0:r.startsWith(a))&&e(t)}},end:function(e,t,r){var n=r.adapter,o=t.name,a=t.value,s=-a.length
return 0===s?i.default.falseFunc:l(t,r)?(a=a.toLowerCase(),function(t){var r
return(null===(r=n.getAttributeValue(t,o))||void 0===r?void 0:r.substr(s).toLowerCase())===a&&e(t)}):function(t){var r
return!!(null===(r=n.getAttributeValue(t,o))||void 0===r?void 0:r.endsWith(a))&&e(t)}},any:function(e,t,r){var n=r.adapter,o=t.name,s=t.value
if(""===s)return i.default.falseFunc
if(l(t,r)){var c=new RegExp(a(s),"i")
return function(t){var r=n.getAttributeValue(t,o)
return null!=r&&r.length>=s.length&&c.test(r)&&e(t)}}return function(t){var r
return!!(null===(r=n.getAttributeValue(t,o))||void 0===r?void 0:r.includes(s))&&e(t)}},not:function(e,t,r){var n=r.adapter,i=t.name,o=t.value
return""===o?function(t){return!!n.getAttributeValue(t,i)&&e(t)}:l(t,r)?(o=o.toLowerCase(),function(t){var r=n.getAttributeValue(t,i)
return(null==r||r.length!==o.length||r.toLowerCase()!==o)&&e(t)}):function(t){return n.getAttributeValue(t,i)!==o&&e(t)}}}},3246(e,t,r){"use strict"
var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.compileToken=t.compileUnsafe=t.compile=void 0
var s=r(7739),l=a(r(3367)),c=o(r(83)),u=r(9559),d=r(602)
function f(e,t,r){return b("string"==typeof e?(0,s.parse)(e):e,t,r)}function p(e){return e.type===s.SelectorType.Pseudo&&("scope"===e.name||Array.isArray(e.data)&&e.data.some(function(e){return e.some(p)}))}t.compile=function(e,t,r){var n=f(e,t,r)
return(0,d.ensureIsTag)(n,t.adapter)},t.compileUnsafe=f
var h={type:s.SelectorType.Descendant},g={type:"_flexibleDescendant"},m={type:s.SelectorType.Pseudo,name:"scope",data:null}
function b(e,t,r){var n
e.forEach(c.default),r=null!==(n=t.context)&&void 0!==n?n:r
var i=Array.isArray(r),o=r&&(Array.isArray(r)?r:[r])
if(!1!==t.relativeSelector)!function(e,t,r){for(var n=t.adapter,i=!!(null==r?void 0:r.every(function(e){var t=n.isTag(e)&&n.getParent(e)
return e===d.PLACEHOLDER_ELEMENT||t&&n.isTag(t)})),o=0,a=e;o<a.length;o++){var l=a[o]
if(l.length>0&&(0,c.isTraversal)(l[0])&&l[0].type!==s.SelectorType.Descendant);else{if(!i||l.some(p))continue
l.unshift(h)}l.unshift(m)}}(e,t,o)
else if(e.some(function(e){return e.length>0&&(0,c.isTraversal)(e[0])}))throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled")
var a=!1,f=e.map(function(e){if(e.length>=2){var r=e[0],n=e[1]
r.type!==s.SelectorType.Pseudo||"scope"!==r.name||(i&&n.type===s.SelectorType.Descendant?e[1]=g:n.type!==s.SelectorType.Adjacent&&n.type!==s.SelectorType.Sibling||(a=!0))}return function(e,t,r){var n
return e.reduce(function(e,n){return e===l.default.falseFunc?l.default.falseFunc:(0,u.compileGeneralSelector)(e,n,t,r,b)},null!==(n=t.rootFunc)&&void 0!==n?n:l.default.trueFunc)}(e,t,o)}).reduce(y,l.default.falseFunc)
return f.shouldTestNextSiblings=a,f}function y(e,t){return t===l.default.falseFunc||e===l.default.trueFunc?e:e===l.default.falseFunc||t===l.default.trueFunc?t:function(r){return e(r)||t(r)}}t.compileToken=b},9559(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.compileGeneralSelector=void 0
var n=r(5210),i=r(9449),o=r(7739)
function a(e,t){var r=t.getParent(e)
return r&&t.isTag(r)?r:null}t.compileGeneralSelector=function(e,t,r,s,l){var c=r.adapter,u=r.equals
switch(t.type){case o.SelectorType.PseudoElement:throw new Error("Pseudo-elements are not supported by css-select")
case o.SelectorType.ColumnCombinator:throw new Error("Column combinators are not yet supported by css-select")
case o.SelectorType.Attribute:if(null!=t.namespace)throw new Error("Namespaced attributes are not yet supported by css-select")
return r.xmlMode&&!r.lowerCaseAttributeNames||(t.name=t.name.toLowerCase()),n.attributeRules[t.action](e,t,r)
case o.SelectorType.Pseudo:return(0,i.compilePseudoSelector)(e,t,r,s,l)
case o.SelectorType.Tag:if(null!=t.namespace)throw new Error("Namespaced tag names are not yet supported by css-select")
var d=t.name
return r.xmlMode&&!r.lowerCaseTags||(d=d.toLowerCase()),function(t){return c.getName(t)===d&&e(t)}
case o.SelectorType.Descendant:if(!1===r.cacheResults||"undefined"==typeof WeakSet)return function(t){for(var r=t;r=a(r,c);)if(e(r))return!0
return!1}
var f=new WeakSet
return function(t){for(var r=t;r=a(r,c);)if(!f.has(r)){if(c.isTag(r)&&e(r))return!0
f.add(r)}return!1}
case"_flexibleDescendant":return function(t){var r=t
do{if(e(r))return!0}while(r=a(r,c))
return!1}
case o.SelectorType.Parent:return function(t){return c.getChildren(t).some(function(t){return c.isTag(t)&&e(t)})}
case o.SelectorType.Child:return function(t){var r=c.getParent(t)
return null!=r&&c.isTag(r)&&e(r)}
case o.SelectorType.Sibling:return function(t){for(var r=c.getSiblings(t),n=0;n<r.length;n++){var i=r[n]
if(u(t,i))break
if(c.isTag(i)&&e(i))return!0}return!1}
case o.SelectorType.Adjacent:return c.prevElementSibling?function(t){var r=c.prevElementSibling(t)
return null!=r&&e(r)}:function(t){for(var r,n=c.getSiblings(t),i=0;i<n.length;i++){var o=n[i]
if(u(t,o))break
c.isTag(o)&&(r=o)}return!!r&&e(r)}
case o.SelectorType.Universal:if(null!=t.namespace&&"*"!==t.namespace)throw new Error("Namespaced universal selectors are not yet supported by css-select")
return e}}},5107(e,t,r){"use strict"
var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.aliases=t.pseudos=t.filters=t.is=t.selectOne=t.selectAll=t.prepareContext=t._compileToken=t._compileUnsafe=t.compile=void 0
var s=o(r(389)),l=a(r(3367)),c=r(3246),u=r(602),d=function(e,t){return e===t},f={adapter:s,equals:d}
function p(e){var t,r,n,i,o=null!=e?e:f
return null!==(t=o.adapter)&&void 0!==t||(o.adapter=s),null!==(r=o.equals)&&void 0!==r||(o.equals=null!==(i=null===(n=o.adapter)||void 0===n?void 0:n.equals)&&void 0!==i?i:d),o}function h(e){return function(t,r,n){var i=p(r)
return e(t,i,n)}}function g(e){return function(t,r,n){var i=p(n)
"function"!=typeof t&&(t=(0,c.compileUnsafe)(t,i,r))
var o=m(r,i.adapter,t.shouldTestNextSiblings)
return e(t,o,i)}}function m(e,t,r){return void 0===r&&(r=!1),r&&(e=function(e,t){for(var r=Array.isArray(e)?e.slice(0):[e],n=r.length,i=0;i<n;i++){var o=(0,u.getNextSiblings)(r[i],t)
r.push.apply(r,o)}return r}(e,t)),Array.isArray(e)?t.removeSubsets(e):t.getChildren(e)}t.compile=h(c.compile),t._compileUnsafe=h(c.compileUnsafe),t._compileToken=h(c.compileToken),t.prepareContext=m,t.selectAll=g(function(e,t,r){return e!==l.default.falseFunc&&t&&0!==t.length?r.adapter.findAll(e,t):[]}),t.selectOne=g(function(e,t,r){return e!==l.default.falseFunc&&t&&0!==t.length?r.adapter.findOne(e,t):null}),t.is=function(e,t,r){var n=p(r)
return("function"==typeof t?t:(0,c.compile)(t,n))(e)},t.default=t.selectAll
var b=r(9449)
Object.defineProperty(t,"filters",{enumerable:!0,get:function(){return b.filters}}),Object.defineProperty(t,"pseudos",{enumerable:!0,get:function(){return b.pseudos}}),Object.defineProperty(t,"aliases",{enumerable:!0,get:function(){return b.aliases}})},8369(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.aliases=void 0,t.aliases={"any-link":":is(a, area, link)[href]",link:":any-link:not(:visited)",disabled:":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",enabled:":not(:disabled)",checked:":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",required:":is(input, select, textarea)[required]",optional:":is(input, select, textarea):not([required])",selected:"option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",checkbox:"[type=checkbox]",file:"[type=file]",password:"[type=password]",radio:"[type=radio]",reset:"[type=reset]",image:"[type=image]",submit:"[type=submit]",parent:":not(:empty)",header:":is(h1, h2, h3, h4, h5, h6)",button:":is(button, input[type=button])",input:":is(input, textarea, select, button)",text:"input:is(:not([type!='']), [type=text])"}},5438(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.filters=void 0
var i=n(r(6220)),o=n(r(3367))
function a(e,t){return function(r){var n=t.getParent(r)
return null!=n&&t.isTag(n)&&e(r)}}function s(e){return function(t,r,n){var i=n.adapter[e]
return"function"!=typeof i?o.default.falseFunc:function(e){return i(e)&&t(e)}}}t.filters={contains:function(e,t,r){var n=r.adapter
return function(r){return e(r)&&n.getText(r).includes(t)}},icontains:function(e,t,r){var n=r.adapter,i=t.toLowerCase()
return function(t){return e(t)&&n.getText(t).toLowerCase().includes(i)}},"nth-child":function(e,t,r){var n=r.adapter,s=r.equals,l=(0,i.default)(t)
return l===o.default.falseFunc?o.default.falseFunc:l===o.default.trueFunc?a(e,n):function(t){for(var r=n.getSiblings(t),i=0,o=0;o<r.length&&!s(t,r[o]);o++)n.isTag(r[o])&&i++
return l(i)&&e(t)}},"nth-last-child":function(e,t,r){var n=r.adapter,s=r.equals,l=(0,i.default)(t)
return l===o.default.falseFunc?o.default.falseFunc:l===o.default.trueFunc?a(e,n):function(t){for(var r=n.getSiblings(t),i=0,o=r.length-1;o>=0&&!s(t,r[o]);o--)n.isTag(r[o])&&i++
return l(i)&&e(t)}},"nth-of-type":function(e,t,r){var n=r.adapter,s=r.equals,l=(0,i.default)(t)
return l===o.default.falseFunc?o.default.falseFunc:l===o.default.trueFunc?a(e,n):function(t){for(var r=n.getSiblings(t),i=0,o=0;o<r.length;o++){var a=r[o]
if(s(t,a))break
n.isTag(a)&&n.getName(a)===n.getName(t)&&i++}return l(i)&&e(t)}},"nth-last-of-type":function(e,t,r){var n=r.adapter,s=r.equals,l=(0,i.default)(t)
return l===o.default.falseFunc?o.default.falseFunc:l===o.default.trueFunc?a(e,n):function(t){for(var r=n.getSiblings(t),i=0,o=r.length-1;o>=0;o--){var a=r[o]
if(s(t,a))break
n.isTag(a)&&n.getName(a)===n.getName(t)&&i++}return l(i)&&e(t)}},root:function(e,t,r){var n=r.adapter
return function(t){var r=n.getParent(t)
return(null==r||!n.isTag(r))&&e(t)}},scope:function(e,r,n,i){var o=n.equals
return i&&0!==i.length?1===i.length?function(t){return o(i[0],t)&&e(t)}:function(t){return i.includes(t)&&e(t)}:t.filters.root(e,r,n)},hover:s("isHovered"),visited:s("isVisited"),active:s("isActive")}},9449(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.compilePseudoSelector=t.aliases=t.pseudos=t.filters=void 0
var n=r(7739),i=r(5438)
Object.defineProperty(t,"filters",{enumerable:!0,get:function(){return i.filters}})
var o=r(914)
Object.defineProperty(t,"pseudos",{enumerable:!0,get:function(){return o.pseudos}})
var a=r(8369)
Object.defineProperty(t,"aliases",{enumerable:!0,get:function(){return a.aliases}})
var s=r(602)
t.compilePseudoSelector=function(e,t,r,l,c){var u,d=t.name,f=t.data
if(Array.isArray(f)){if(!(d in s.subselects))throw new Error("Unknown pseudo-class :".concat(d,"(").concat(f,")"))
return s.subselects[d](e,f,r,l,c)}var p=null===(u=r.pseudos)||void 0===u?void 0:u[d],h="string"==typeof p?p:a.aliases[d]
if("string"==typeof h){if(null!=f)throw new Error("Pseudo ".concat(d," doesn't have any arguments"))
var g=(0,n.parse)(h)
return s.subselects.is(e,g,r,l,c)}if("function"==typeof p)return(0,o.verifyPseudoArgs)(p,d,f,1),function(t){return p(t,f)&&e(t)}
if(d in i.filters)return i.filters[d](e,f,r,l)
if(d in o.pseudos){var m=o.pseudos[d]
return(0,o.verifyPseudoArgs)(m,d,f,2),function(t){return m(t,r,f)&&e(t)}}throw new Error("Unknown pseudo-class :".concat(d))}},914(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.verifyPseudoArgs=t.pseudos=void 0,t.pseudos={empty:function(e,t){var r=t.adapter
return!r.getChildren(e).some(function(e){return r.isTag(e)||""!==r.getText(e)})},"first-child":function(e,t){var r=t.adapter,n=t.equals
if(r.prevElementSibling)return null==r.prevElementSibling(e)
var i=r.getSiblings(e).find(function(e){return r.isTag(e)})
return null!=i&&n(e,i)},"last-child":function(e,t){for(var r=t.adapter,n=t.equals,i=r.getSiblings(e),o=i.length-1;o>=0;o--){if(n(e,i[o]))return!0
if(r.isTag(i[o]))break}return!1},"first-of-type":function(e,t){for(var r=t.adapter,n=t.equals,i=r.getSiblings(e),o=r.getName(e),a=0;a<i.length;a++){var s=i[a]
if(n(e,s))return!0
if(r.isTag(s)&&r.getName(s)===o)break}return!1},"last-of-type":function(e,t){for(var r=t.adapter,n=t.equals,i=r.getSiblings(e),o=r.getName(e),a=i.length-1;a>=0;a--){var s=i[a]
if(n(e,s))return!0
if(r.isTag(s)&&r.getName(s)===o)break}return!1},"only-of-type":function(e,t){var r=t.adapter,n=t.equals,i=r.getName(e)
return r.getSiblings(e).every(function(t){return n(e,t)||!r.isTag(t)||r.getName(t)!==i})},"only-child":function(e,t){var r=t.adapter,n=t.equals
return r.getSiblings(e).every(function(t){return n(e,t)||!r.isTag(t)})}},t.verifyPseudoArgs=function(e,t,r,n){if(null===r){if(e.length>n)throw new Error("Pseudo-class :".concat(t," requires an argument"))}else if(e.length===n)throw new Error("Pseudo-class :".concat(t," doesn't have any arguments"))}},602(e,t,r){"use strict"
var n=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i])
return e.concat(n||Array.prototype.slice.call(t))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.subselects=t.getNextSiblings=t.ensureIsTag=t.PLACEHOLDER_ELEMENT=void 0
var o=i(r(3367)),a=r(83)
function s(e,t){return e===o.default.falseFunc?o.default.falseFunc:function(r){return t.isTag(r)&&e(r)}}function l(e,t){var r=t.getSiblings(e)
if(r.length<=1)return[]
var n=r.indexOf(e)
return n<0||n===r.length-1?[]:r.slice(n+1).filter(t.isTag)}function c(e){return{xmlMode:!!e.xmlMode,lowerCaseAttributeNames:!!e.lowerCaseAttributeNames,lowerCaseTags:!!e.lowerCaseTags,quirksMode:!!e.quirksMode,cacheResults:!!e.cacheResults,pseudos:e.pseudos,adapter:e.adapter,equals:e.equals}}t.PLACEHOLDER_ELEMENT={},t.ensureIsTag=s,t.getNextSiblings=l
var u=function(e,t,r,n,i){var a=i(t,c(r),n)
return a===o.default.trueFunc?e:a===o.default.falseFunc?o.default.falseFunc:function(t){return a(t)&&e(t)}}
t.subselects={is:u,matches:u,where:u,not:function(e,t,r,n,i){var a=i(t,c(r),n)
return a===o.default.falseFunc?e:a===o.default.trueFunc?o.default.falseFunc:function(t){return!a(t)&&e(t)}},has:function(e,r,i,u,d){var f=i.adapter,p=c(i)
p.relativeSelector=!0
var h=r.some(function(e){return e.some(a.isTraversal)})?[t.PLACEHOLDER_ELEMENT]:void 0,g=d(r,p,h)
if(g===o.default.falseFunc)return o.default.falseFunc
var m=s(g,f)
if(h&&g!==o.default.trueFunc){var b=g.shouldTestNextSiblings,y=void 0!==b&&b
return function(t){if(!e(t))return!1
h[0]=t
var r=f.getChildren(t),i=y?n(n([],r,!0),l(t,f),!0):r
return f.existsOne(m,i)}}return function(t){return e(t)&&f.existsOne(m,f.getChildren(t))}}}},83(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.isTraversal=void 0
var n=r(7739),i=new Map([[n.SelectorType.Universal,50],[n.SelectorType.Tag,30],[n.SelectorType.Attribute,1],[n.SelectorType.Pseudo,0]])
t.isTraversal=function(e){return!i.has(e.type)}
var o=new Map([[n.AttributeAction.Exists,10],[n.AttributeAction.Equals,8],[n.AttributeAction.Not,7],[n.AttributeAction.Start,6],[n.AttributeAction.End,6],[n.AttributeAction.Any,5]])
function a(e){var t,r,s=null!==(t=i.get(e.type))&&void 0!==t?t:-1
return e.type===n.SelectorType.Attribute?(s=null!==(r=o.get(e.action))&&void 0!==r?r:4,e.action===n.AttributeAction.Equals&&"id"===e.name&&(s=9),e.ignoreCase&&(s>>=1)):e.type===n.SelectorType.Pseudo&&(e.data?"has"===e.name||"contains"===e.name?s=0:Array.isArray(e.data)?(s=Math.min.apply(Math,e.data.map(function(e){return Math.min.apply(Math,e.map(a))})))<0&&(s=0):s=2:s=3),s}t.default=function(e){for(var t=e.map(a),r=1;r<e.length;r++){var n=t[r]
if(!(n<0))for(var i=r-1;i>=0&&n<t[i];i--){var o=e[i+1]
e[i+1]=e[i],e[i]=o,t[i+1]=t[i],t[i]=n}}}},7739(e,t,r){"use strict"
var n
r.r(t),r.d(t,{AttributeAction:()=>o,IgnoreCaseMode:()=>i,SelectorType:()=>n,isTraversal:()=>u,parse:()=>m,stringify:()=>E}),function(e){e.Attribute="attribute",e.Pseudo="pseudo",e.PseudoElement="pseudo-element",e.Tag="tag",e.Universal="universal",e.Adjacent="adjacent",e.Child="child",e.Descendant="descendant",e.Parent="parent",e.Sibling="sibling",e.ColumnCombinator="column-combinator"}(n||(n={}))
const i={Unknown:null,QuirksMode:"quirks",IgnoreCase:!0,CaseSensitive:!1}
var o
!function(e){e.Any="any",e.Element="element",e.End="end",e.Equals="equals",e.Exists="exists",e.Hyphen="hyphen",e.Not="not",e.Start="start"}(o||(o={}))
const a=/^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,s=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,l=new Map([[126,o.Element],[94,o.Start],[36,o.End],[42,o.Any],[33,o.Not],[124,o.Hyphen]]),c=new Set(["has","not","matches","is","where","host","host-context"])
function u(e){switch(e.type){case n.Adjacent:case n.Child:case n.Descendant:case n.Parent:case n.Sibling:case n.ColumnCombinator:return!0
default:return!1}}const d=new Set(["contains","icontains"])
function f(e,t,r){const n=parseInt(t,16)-65536
return n!=n||r?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)}function p(e){return e.replace(s,f)}function h(e){return 39===e||34===e}function g(e){return 32===e||9===e||10===e||12===e||13===e}function m(e){const t=[],r=b(t,`${e}`,0)
if(r<e.length)throw new Error(`Unmatched selector: ${e.slice(r)}`)
return t}function b(e,t,r){let i=[]
function s(e){const n=t.slice(r+e).match(a)
if(!n)throw new Error(`Expected name, found ${t.slice(r)}`)
const[i]=n
return r+=e+i.length,p(i)}function f(e){for(r+=e;r<t.length&&g(t.charCodeAt(r));)r++}function m(){const e=r+=1
let n=1
for(;n>0&&r<t.length;r++)40!==t.charCodeAt(r)||y(r)?41!==t.charCodeAt(r)||y(r)||n--:n++
if(n)throw new Error("Parenthesis not matched")
return p(t.slice(e,r-1))}function y(e){let r=0
for(;92===t.charCodeAt(--e);)r++
return!(1&~r)}function v(){if(i.length>0&&u(i[i.length-1]))throw new Error("Did not expect successive traversals.")}function w(e){i.length>0&&i[i.length-1].type===n.Descendant?i[i.length-1].type=e:(v(),i.push({type:e}))}function x(e,t){i.push({type:n.Attribute,name:e,action:t,value:s(1),namespace:null,ignoreCase:"quirks"})}function k(){if(i.length&&i[i.length-1].type===n.Descendant&&i.pop(),0===i.length)throw new Error("Empty sub-selector")
e.push(i)}if(f(0),t.length===r)return r
e:for(;r<t.length;){const e=t.charCodeAt(r)
switch(e){case 32:case 9:case 10:case 12:case 13:0!==i.length&&i[0].type===n.Descendant||(v(),i.push({type:n.Descendant})),f(1)
break
case 62:w(n.Child),f(1)
break
case 60:w(n.Parent),f(1)
break
case 126:w(n.Sibling),f(1)
break
case 43:w(n.Adjacent),f(1)
break
case 46:x("class",o.Element)
break
case 35:x("id",o.Equals)
break
case 91:{let e
f(1)
let a=null
124===t.charCodeAt(r)?e=s(1):t.startsWith("*|",r)?(a="*",e=s(2)):(e=s(0),124===t.charCodeAt(r)&&61!==t.charCodeAt(r+1)&&(a=e,e=s(1))),f(0)
let c=o.Exists
const u=l.get(t.charCodeAt(r))
if(u){if(c=u,61!==t.charCodeAt(r+1))throw new Error("Expected `=`")
f(2)}else 61===t.charCodeAt(r)&&(c=o.Equals,f(1))
let d="",m=null
if("exists"!==c){if(h(t.charCodeAt(r))){const e=t.charCodeAt(r)
let n=r+1
for(;n<t.length&&(t.charCodeAt(n)!==e||y(n));)n+=1
if(t.charCodeAt(n)!==e)throw new Error("Attribute value didn't end")
d=p(t.slice(r+1,n)),r=n+1}else{const e=r
for(;r<t.length&&(!g(t.charCodeAt(r))&&93!==t.charCodeAt(r)||y(r));)r+=1
d=p(t.slice(e,r))}f(0)
const e=32|t.charCodeAt(r)
115===e?(m=!1,f(1)):105===e&&(m=!0,f(1))}if(93!==t.charCodeAt(r))throw new Error("Attribute selector didn't terminate")
r+=1
const b={type:n.Attribute,name:e,action:c,value:d,namespace:a,ignoreCase:m}
i.push(b)
break}case 58:{if(58===t.charCodeAt(r+1)){i.push({type:n.PseudoElement,name:s(2).toLowerCase(),data:40===t.charCodeAt(r)?m():null})
continue}const e=s(1).toLowerCase()
let o=null
if(40===t.charCodeAt(r))if(c.has(e)){if(h(t.charCodeAt(r+1)))throw new Error(`Pseudo-selector ${e} cannot be quoted`)
if(o=[],r=b(o,t,r+1),41!==t.charCodeAt(r))throw new Error(`Missing closing parenthesis in :${e} (${t})`)
r+=1}else{if(o=m(),d.has(e)){const e=o.charCodeAt(0)
e===o.charCodeAt(o.length-1)&&h(e)&&(o=o.slice(1,-1))}o=p(o)}i.push({type:n.Pseudo,name:e,data:o})
break}case 44:k(),i=[],f(1)
break
default:{if(t.startsWith("/*",r)){const e=t.indexOf("*/",r+2)
if(e<0)throw new Error("Comment was not terminated")
r=e+2,0===i.length&&f(0)
break}let o,l=null
if(42===e)r+=1,o="*"
else if(124===e){if(o="",124===t.charCodeAt(r+1)){w(n.ColumnCombinator),f(2)
break}}else{if(!a.test(t.slice(r)))break e
o=s(0)}124===t.charCodeAt(r)&&124!==t.charCodeAt(r+1)&&(l=o,42===t.charCodeAt(r+1)?(o="*",r+=2):o=s(1)),i.push("*"===o?{type:n.Universal,namespace:l}:{type:n.Tag,name:o,namespace:l})}}}return k(),r}const y=["\\",'"'],v=[...y,"(",")"],w=new Set(y.map(e=>e.charCodeAt(0))),x=new Set(v.map(e=>e.charCodeAt(0))),k=new Set([...v,"~","^","$","*","+","!","|",":","[","]"," ","."].map(e=>e.charCodeAt(0)))
function E(e){return e.map(e=>e.map(_).join("")).join(", ")}function _(e,t,r){switch(e.type){case n.Child:return 0===t?"> ":" > "
case n.Parent:return 0===t?"< ":" < "
case n.Sibling:return 0===t?"~ ":" ~ "
case n.Adjacent:return 0===t?"+ ":" + "
case n.Descendant:return" "
case n.ColumnCombinator:return 0===t?"|| ":" || "
case n.Universal:return"*"===e.namespace&&t+1<r.length&&"name"in r[t+1]?"":`${T(e.namespace)}*`
case n.Tag:return A(e)
case n.PseudoElement:return`::${S(e.name,k)}${null===e.data?"":`(${S(e.data,x)})`}`
case n.Pseudo:return`:${S(e.name,k)}${null===e.data?"":`(${"string"==typeof e.data?S(e.data,x):E(e.data)})`}`
case n.Attribute:{if("id"===e.name&&e.action===o.Equals&&"quirks"===e.ignoreCase&&!e.namespace)return`#${S(e.value,k)}`
if("class"===e.name&&e.action===o.Element&&"quirks"===e.ignoreCase&&!e.namespace)return`.${S(e.value,k)}`
const t=A(e)
return e.action===o.Exists?`[${t}]`:`[${t}${function(e){switch(e){case o.Equals:return""
case o.Element:return"~"
case o.Start:return"^"
case o.End:return"$"
case o.Any:return"*"
case o.Not:return"!"
case o.Hyphen:return"|"
case o.Exists:throw new Error("Shouldn't be here")}}(e.action)}="${S(e.value,w)}"${null===e.ignoreCase?"":e.ignoreCase?" i":" s"}]`}}}function A(e){return`${T(e.namespace)}${S(e.name,k)}`}function T(e){return null!==e?`${"*"===e?"*":S(e,k)}|`:""}function S(e,t){let r=0,n=""
for(let i=0;i<e.length;i++)t.has(e.charCodeAt(i))&&(n+=`${e.slice(r,i)}\\${e.charAt(i)}`,r=i+1)
return n.length>0?n+e.slice(r):e}},3308(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.attributeNames=t.elementNames=void 0,t.elementNames=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(function(e){return[e.toLowerCase(),e]})),t.attributeNames=new Map(["definitionURL","attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(function(e){return[e.toLowerCase(),e]}))},6238(e,t,r){"use strict"
var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},n.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r)
return o(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0
var s=a(r(5771)),l=r(4375),c=r(3308),u=new Set(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])
function d(e){return e.replace(/"/g,"&quot;")}var f=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"])
function p(e,t){void 0===t&&(t={})
for(var r=("length"in e?e:[e]),n="",i=0;i<r.length;i++)n+=h(r[i],t)
return n}function h(e,t){switch(e.type){case s.Root:return p(e.children,t)
case s.Doctype:case s.Directive:return"<".concat(e.data,">")
case s.Comment:return"\x3c!--".concat(e.data,"--\x3e")
case s.CDATA:return function(e){return"<![CDATA[".concat(e.children[0].data,"]]>")}(e)
case s.Script:case s.Style:case s.Tag:return function(e,t){var r
"foreign"===t.xmlMode&&(e.name=null!==(r=c.elementNames.get(e.name))&&void 0!==r?r:e.name,e.parent&&g.has(e.parent.name)&&(t=n(n({},t),{xmlMode:!1}))),!t.xmlMode&&m.has(e.name)&&(t=n(n({},t),{xmlMode:"foreign"}))
var i="<".concat(e.name),o=function(e,t){var r
if(e){var n=!1===(null!==(r=t.encodeEntities)&&void 0!==r?r:t.decodeEntities)?d:t.xmlMode||"utf8"!==t.encodeEntities?l.encodeXML:l.escapeAttribute
return Object.keys(e).map(function(r){var i,o,a=null!==(i=e[r])&&void 0!==i?i:""
return"foreign"===t.xmlMode&&(r=null!==(o=c.attributeNames.get(r))&&void 0!==o?o:r),t.emptyAttrs||t.xmlMode||""!==a?"".concat(r,'="').concat(n(a),'"'):r}).join(" ")}}(e.attribs,t)
return o&&(i+=" ".concat(o)),0===e.children.length&&(t.xmlMode?!1!==t.selfClosingTags:t.selfClosingTags&&f.has(e.name))?(t.xmlMode||(i+=" "),i+="/>"):(i+=">",e.children.length>0&&(i+=p(e.children,t)),!t.xmlMode&&f.has(e.name)||(i+="</".concat(e.name,">"))),i}(e,t)
case s.Text:return function(e,t){var r,n=e.data||""
return!1===(null!==(r=t.encodeEntities)&&void 0!==r?r:t.decodeEntities)||!t.xmlMode&&e.parent&&u.has(e.parent.name)||(n=t.xmlMode||"utf8"!==t.encodeEntities?(0,l.encodeXML)(n):(0,l.escapeText)(n)),n}(e,t)}}t.render=p,t.default=p
var g=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]),m=new Set(["svg","math"])},5771(e,t){"use strict"
var r
Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0,function(e){e.Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",e.Script="script",e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype"}(r=t.ElementType||(t.ElementType={})),t.isTag=function(e){return e.type===r.Tag||e.type===r.Script||e.type===r.Style},t.Root=r.Root,t.Text=r.Text,t.Directive=r.Directive,t.Comment=r.Comment,t.Script=r.Script,t.Style=r.Style,t.Tag=r.Tag,t.CDATA=r.CDATA,t.Doctype=r.Doctype},4078(e,t,r){"use strict"
var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)}
Object.defineProperty(t,"__esModule",{value:!0}),t.DomHandler=void 0
var o=r(5771),a=r(756)
i(r(756),t)
var s={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},l=function(){function e(e,t,r){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,"function"==typeof t&&(r=t,t=s),"object"==typeof e&&(t=e,e=void 0),this.callback=null!=e?e:null,this.options=null!=t?t:s,this.elementCB=null!=r?r:null}return e.prototype.onparserinit=function(e){this.parser=e},e.prototype.onreset=function(){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},e.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},e.prototype.onerror=function(e){this.handleCallback(e)},e.prototype.onclosetag=function(){this.lastNode=null
var e=this.tagStack.pop()
this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(e)},e.prototype.onopentag=function(e,t){var r=this.options.xmlMode?o.ElementType.Tag:void 0,n=new a.Element(e,t,void 0,r)
this.addNode(n),this.tagStack.push(n)},e.prototype.ontext=function(e){var t=this.lastNode
if(t&&t.type===o.ElementType.Text)t.data+=e,this.options.withEndIndices&&(t.endIndex=this.parser.endIndex)
else{var r=new a.Text(e)
this.addNode(r),this.lastNode=r}},e.prototype.oncomment=function(e){if(this.lastNode&&this.lastNode.type===o.ElementType.Comment)this.lastNode.data+=e
else{var t=new a.Comment(e)
this.addNode(t),this.lastNode=t}},e.prototype.oncommentend=function(){this.lastNode=null},e.prototype.oncdatastart=function(){var e=new a.Text(""),t=new a.CDATA([e])
this.addNode(t),e.parent=t,this.lastNode=e},e.prototype.oncdataend=function(){this.lastNode=null},e.prototype.onprocessinginstruction=function(e,t){var r=new a.ProcessingInstruction(e,t)
this.addNode(r)},e.prototype.handleCallback=function(e){if("function"==typeof this.callback)this.callback(e,this.dom)
else if(e)throw e},e.prototype.addNode=function(e){var t=this.tagStack[this.tagStack.length-1],r=t.children[t.children.length-1]
this.options.withStartIndices&&(e.startIndex=this.parser.startIndex),this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),t.children.push(e),r&&(e.prev=r,r.next=e),e.parent=t,this.lastNode=null},e}()
t.DomHandler=l,t.default=l},756(e,t,r){"use strict"
var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)}
Object.defineProperty(t,"__esModule",{value:!0}),t.cloneNode=t.hasChildren=t.isDocument=t.isDirective=t.isComment=t.isText=t.isCDATA=t.isTag=t.Element=t.Document=t.CDATA=t.NodeWithChildren=t.ProcessingInstruction=t.Comment=t.Text=t.DataNode=t.Node=void 0
var a=r(5771),s=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(e){return void 0===e&&(e=!1),k(this,e)},e}()
t.Node=s
var l=function(e){function t(t){var r=e.call(this)||this
return r.data=t,r}return i(t,e),Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(e){this.data=e},enumerable:!1,configurable:!0}),t}(s)
t.DataNode=l
var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.type=a.ElementType.Text,t}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(l)
t.Text=c
var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.type=a.ElementType.Comment,t}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(l)
t.Comment=u
var d=function(e){function t(t,r){var n=e.call(this,r)||this
return n.name=t,n.type=a.ElementType.Directive,n}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(l)
t.ProcessingInstruction=d
var f=function(e){function t(t){var r=e.call(this)||this
return r.children=t,r}return i(t,e),Object.defineProperty(t.prototype,"firstChild",{get:function(){var e
return null!==(e=this.children[0])&&void 0!==e?e:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(e){this.children=e},enumerable:!1,configurable:!0}),t}(s)
t.NodeWithChildren=f
var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.type=a.ElementType.CDATA,t}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(f)
t.CDATA=p
var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.type=a.ElementType.Root,t}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(f)
t.Document=h
var g=function(e){function t(t,r,n,i){void 0===n&&(n=[]),void 0===i&&(i="script"===t?a.ElementType.Script:"style"===t?a.ElementType.Style:a.ElementType.Tag)
var o=e.call(this,n)||this
return o.name=t,o.attribs=r,o.type=i,o}return i(t,e),Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(e){this.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e=this
return Object.keys(this.attribs).map(function(t){var r,n
return{name:t,value:e.attribs[t],namespace:null===(r=e["x-attribsNamespace"])||void 0===r?void 0:r[t],prefix:null===(n=e["x-attribsPrefix"])||void 0===n?void 0:n[t]}})},enumerable:!1,configurable:!0}),t}(f)
function m(e){return(0,a.isTag)(e)}function b(e){return e.type===a.ElementType.CDATA}function y(e){return e.type===a.ElementType.Text}function v(e){return e.type===a.ElementType.Comment}function w(e){return e.type===a.ElementType.Directive}function x(e){return e.type===a.ElementType.Root}function k(e,t){var r
if(void 0===t&&(t=!1),y(e))r=new c(e.data)
else if(v(e))r=new u(e.data)
else if(m(e)){var n=t?E(e.children):[],i=new g(e.name,o({},e.attribs),n)
n.forEach(function(e){return e.parent=i}),null!=e.namespace&&(i.namespace=e.namespace),e["x-attribsNamespace"]&&(i["x-attribsNamespace"]=o({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(i["x-attribsPrefix"]=o({},e["x-attribsPrefix"])),r=i}else if(b(e)){n=t?E(e.children):[]
var a=new p(n)
n.forEach(function(e){return e.parent=a}),r=a}else if(x(e)){n=t?E(e.children):[]
var s=new h(n)
n.forEach(function(e){return e.parent=s}),e["x-mode"]&&(s["x-mode"]=e["x-mode"]),r=s}else{if(!w(e))throw new Error("Not implemented yet: ".concat(e.type))
var l=new d(e.name,e.data)
null!=e["x-name"]&&(l["x-name"]=e["x-name"],l["x-publicId"]=e["x-publicId"],l["x-systemId"]=e["x-systemId"]),r=l}return r.startIndex=e.startIndex,r.endIndex=e.endIndex,null!=e.sourceCodeLocation&&(r.sourceCodeLocation=e.sourceCodeLocation),r}function E(e){for(var t=e.map(function(e){return k(e,!0)}),r=1;r<t.length;r++)t[r].prev=t[r-1],t[r-1].next=t[r]
return t}t.Element=g,t.isTag=m,t.isCDATA=b,t.isText=y,t.isComment=v,t.isDirective=w,t.isDocument=x,t.hasChildren=function(e){return Object.prototype.hasOwnProperty.call(e,"children")},t.cloneNode=k},2212(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getFeed=function(e){var t=l(d,e)
return t?"feed"===t.name?function(e){var t,r=e.children,n={type:"atom",items:(0,i.getElementsByTagName)("entry",r).map(function(e){var t,r=e.children,n={media:s(r)}
u(n,"id","id",r),u(n,"title","title",r)
var i=null===(t=l("link",r))||void 0===t?void 0:t.attribs.href
i&&(n.link=i)
var o=c("summary",r)||c("content",r)
o&&(n.description=o)
var a=c("updated",r)
return a&&(n.pubDate=new Date(a)),n})}
u(n,"id","id",r),u(n,"title","title",r)
var o=null===(t=l("link",r))||void 0===t?void 0:t.attribs.href
o&&(n.link=o),u(n,"description","subtitle",r)
var a=c("updated",r)
return a&&(n.updated=new Date(a)),u(n,"author","email",r,!0),n}(t):function(e){var t,r,n=null!==(r=null===(t=l("channel",e.children))||void 0===t?void 0:t.children)&&void 0!==r?r:[],o={type:e.name.substr(0,3),id:"",items:(0,i.getElementsByTagName)("item",e.children).map(function(e){var t=e.children,r={media:s(t)}
u(r,"id","guid",t),u(r,"title","title",t),u(r,"link","link",t),u(r,"description","description",t)
var n=c("pubDate",t)||c("dc:date",t)
return n&&(r.pubDate=new Date(n)),r})}
u(o,"title","title",n),u(o,"link","link",n),u(o,"description","description",n)
var a=c("lastBuildDate",n)
return a&&(o.updated=new Date(a)),u(o,"author","managingEditor",n,!0),o}(t):null}
var n=r(4884),i=r(9238),o=["url","type","lang"],a=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"]
function s(e){return(0,i.getElementsByTagName)("media:content",e).map(function(e){for(var t=e.attribs,r={medium:t.medium,isDefault:!!t.isDefault},n=0,i=o;n<i.length;n++)t[c=i[n]]&&(r[c]=t[c])
for(var s=0,l=a;s<l.length;s++){var c
t[c=l[s]]&&(r[c]=parseInt(t[c],10))}return t.expression&&(r.expression=t.expression),r})}function l(e,t){return(0,i.getElementsByTagName)(e,t,!0,1)[0]}function c(e,t,r){return void 0===r&&(r=!1),(0,n.textContent)((0,i.getElementsByTagName)(e,t,r,1)).trim()}function u(e,t,r,n,i){void 0===i&&(i=!1)
var o=c(r,n,i)
o&&(e[t]=o)}function d(e){return"rss"===e||"feed"===e||"rdf:RDF"===e}},5760(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentPosition=void 0,t.removeSubsets=function(e){for(var t=e.length;--t>=0;){var r=e[t]
if(t>0&&e.lastIndexOf(r,t-1)>=0)e.splice(t,1)
else for(var n=r.parent;n;n=n.parent)if(e.includes(n)){e.splice(t,1)
break}}return e},t.compareDocumentPosition=o,t.uniqueSort=function(e){return(e=e.filter(function(e,t,r){return!r.includes(e,t+1)})).sort(function(e,t){var r=o(e,t)
return r&n.PRECEDING?-1:r&n.FOLLOWING?1:0}),e}
var n,i=r(4078)
function o(e,t){var r=[],o=[]
if(e===t)return 0
for(var a=(0,i.hasChildren)(e)?e:e.parent;a;)r.unshift(a),a=a.parent
for(a=(0,i.hasChildren)(t)?t:t.parent;a;)o.unshift(a),a=a.parent
for(var s=Math.min(r.length,o.length),l=0;l<s&&r[l]===o[l];)l++
if(0===l)return n.DISCONNECTED
var c=r[l-1],u=c.children,d=r[l],f=o[l]
return u.indexOf(d)>u.indexOf(f)?c===t?n.FOLLOWING|n.CONTAINED_BY:n.FOLLOWING:c===e?n.PRECEDING|n.CONTAINS:n.PRECEDING}!function(e){e[e.DISCONNECTED=1]="DISCONNECTED",e[e.PRECEDING=2]="PRECEDING",e[e.FOLLOWING=4]="FOLLOWING",e[e.CONTAINS=8]="CONTAINS",e[e.CONTAINED_BY=16]="CONTAINED_BY"}(n||(t.DocumentPosition=n={}))},389(e,t,r){"use strict"
var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)}
Object.defineProperty(t,"__esModule",{value:!0}),t.hasChildren=t.isDocument=t.isComment=t.isText=t.isCDATA=t.isTag=void 0,i(r(4884),t),i(r(6771),t),i(r(1752),t),i(r(1369),t),i(r(9238),t),i(r(5760),t),i(r(2212),t)
var o=r(4078)
Object.defineProperty(t,"isTag",{enumerable:!0,get:function(){return o.isTag}}),Object.defineProperty(t,"isCDATA",{enumerable:!0,get:function(){return o.isCDATA}}),Object.defineProperty(t,"isText",{enumerable:!0,get:function(){return o.isText}}),Object.defineProperty(t,"isComment",{enumerable:!0,get:function(){return o.isComment}}),Object.defineProperty(t,"isDocument",{enumerable:!0,get:function(){return o.isDocument}}),Object.defineProperty(t,"hasChildren",{enumerable:!0,get:function(){return o.hasChildren}})},9238(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.testElement=function(e,t){var r=l(e)
return!r||r(t)},t.getElements=function(e,t,r,n){void 0===n&&(n=1/0)
var o=l(e)
return o?(0,i.filter)(o,t,r,n):[]},t.getElementById=function(e,t,r){return void 0===r&&(r=!0),Array.isArray(t)||(t=[t]),(0,i.findOne)(a("id",e),t,r)},t.getElementsByTagName=function(e,t,r,n){return void 0===r&&(r=!0),void 0===n&&(n=1/0),(0,i.filter)(o.tag_name(e),t,r,n)},t.getElementsByClassName=function(e,t,r,n){return void 0===r&&(r=!0),void 0===n&&(n=1/0),(0,i.filter)(a("class",e),t,r,n)},t.getElementsByTagType=function(e,t,r,n){return void 0===r&&(r=!0),void 0===n&&(n=1/0),(0,i.filter)(o.tag_type(e),t,r,n)}
var n=r(4078),i=r(1369),o={tag_name:function(e){return"function"==typeof e?function(t){return(0,n.isTag)(t)&&e(t.name)}:"*"===e?n.isTag:function(t){return(0,n.isTag)(t)&&t.name===e}},tag_type:function(e){return"function"==typeof e?function(t){return e(t.type)}:function(t){return t.type===e}},tag_contains:function(e){return"function"==typeof e?function(t){return(0,n.isText)(t)&&e(t.data)}:function(t){return(0,n.isText)(t)&&t.data===e}}}
function a(e,t){return"function"==typeof t?function(r){return(0,n.isTag)(r)&&t(r.attribs[e])}:function(r){return(0,n.isTag)(r)&&r.attribs[e]===t}}function s(e,t){return function(r){return e(r)||t(r)}}function l(e){var t=Object.keys(e).map(function(t){var r=e[t]
return Object.prototype.hasOwnProperty.call(o,t)?o[t](r):a(t,r)})
return 0===t.length?null:t.reduce(s)}},1752(e,t){"use strict"
function r(e){if(e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e.parent){var t=e.parent.children,r=t.lastIndexOf(e)
r>=0&&t.splice(r,1)}e.next=null,e.prev=null,e.parent=null}Object.defineProperty(t,"__esModule",{value:!0}),t.removeElement=r,t.replaceElement=function(e,t){var r=t.prev=e.prev
r&&(r.next=t)
var n=t.next=e.next
n&&(n.prev=t)
var i=t.parent=e.parent
if(i){var o=i.children
o[o.lastIndexOf(e)]=t,e.parent=null}},t.appendChild=function(e,t){if(r(t),t.next=null,t.parent=e,e.children.push(t)>1){var n=e.children[e.children.length-2]
n.next=t,t.prev=n}else t.prev=null},t.append=function(e,t){r(t)
var n=e.parent,i=e.next
if(t.next=i,t.prev=e,e.next=t,t.parent=n,i){if(i.prev=t,n){var o=n.children
o.splice(o.lastIndexOf(i),0,t)}}else n&&n.children.push(t)},t.prependChild=function(e,t){if(r(t),t.parent=e,t.prev=null,1!==e.children.unshift(t)){var n=e.children[1]
n.prev=t,t.next=n}else t.next=null},t.prepend=function(e,t){r(t)
var n=e.parent
if(n){var i=n.children
i.splice(i.indexOf(e),0,t)}e.prev&&(e.prev.next=t),t.parent=n,t.prev=e.prev,t.next=e,e.prev=t}},1369(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.filter=function(e,t,r,n){return void 0===r&&(r=!0),void 0===n&&(n=1/0),i(e,Array.isArray(t)?t:[t],r,n)},t.find=i,t.findOneChild=function(e,t){return t.find(e)},t.findOne=function e(t,r,i){void 0===i&&(i=!0)
for(var o=Array.isArray(r)?r:[r],a=0;a<o.length;a++){var s=o[a]
if((0,n.isTag)(s)&&t(s))return s
if(i&&(0,n.hasChildren)(s)&&s.children.length>0){var l=e(t,s.children,!0)
if(l)return l}}return null},t.existsOne=function e(t,r){return(Array.isArray(r)?r:[r]).some(function(r){return(0,n.isTag)(r)&&t(r)||(0,n.hasChildren)(r)&&e(t,r.children)})},t.findAll=function(e,t){for(var r=[],i=[Array.isArray(t)?t:[t]],o=[0];;)if(o[0]>=i[0].length){if(1===i.length)return r
i.shift(),o.shift()}else{var a=i[0][o[0]++];(0,n.isTag)(a)&&e(a)&&r.push(a),(0,n.hasChildren)(a)&&a.children.length>0&&(o.unshift(0),i.unshift(a.children))}}
var n=r(4078)
function i(e,t,r,i){for(var o=[],a=[Array.isArray(t)?t:[t]],s=[0];;)if(s[0]>=a[0].length){if(1===s.length)return o
a.shift(),s.shift()}else{var l=a[0][s[0]++]
if(e(l)&&(o.push(l),--i<=0))return o
r&&(0,n.hasChildren)(l)&&l.children.length>0&&(s.unshift(0),a.unshift(l.children))}}},4884(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.getOuterHTML=s,t.getInnerHTML=function(e,t){return(0,i.hasChildren)(e)?e.children.map(function(e){return s(e,t)}).join(""):""},t.getText=function e(t){return Array.isArray(t)?t.map(e).join(""):(0,i.isTag)(t)?"br"===t.name?"\n":e(t.children):(0,i.isCDATA)(t)?e(t.children):(0,i.isText)(t)?t.data:""},t.textContent=function e(t){return Array.isArray(t)?t.map(e).join(""):(0,i.hasChildren)(t)&&!(0,i.isComment)(t)?e(t.children):(0,i.isText)(t)?t.data:""},t.innerText=function e(t){return Array.isArray(t)?t.map(e).join(""):(0,i.hasChildren)(t)&&(t.type===a.ElementType.Tag||(0,i.isCDATA)(t))?e(t.children):(0,i.isText)(t)?t.data:""}
var i=r(4078),o=n(r(6238)),a=r(5771)
function s(e,t){return(0,o.default)(e,t)}},6771(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getChildren=i,t.getParent=o,t.getSiblings=function(e){var t=o(e)
if(null!=t)return i(t)
for(var r=[e],n=e.prev,a=e.next;null!=n;)r.unshift(n),n=n.prev
for(;null!=a;)r.push(a),a=a.next
return r},t.getAttributeValue=function(e,t){var r
return null===(r=e.attribs)||void 0===r?void 0:r[t]},t.hasAttrib=function(e,t){return null!=e.attribs&&Object.prototype.hasOwnProperty.call(e.attribs,t)&&null!=e.attribs[t]},t.getName=function(e){return e.name},t.nextElementSibling=function(e){for(var t=e.next;null!==t&&!(0,n.isTag)(t);)t=t.next
return t},t.prevElementSibling=function(e){for(var t=e.prev;null!==t&&!(0,n.isTag)(t);)t=t.prev
return t}
var n=r(4078)
function i(e){return(0,n.hasChildren)(e)?e.children:[]}function o(e){return e.parent||null}},6301(e,t,r){"use strict"
var n=r(4421),i=r(2825),o=r(1603),a=r(1223),s=r(1704)
class l extends i.O{assert(...e){(0,o.assert)(...e)}async(e){(0,a.join)(()=>(0,a.schedule)("actions",e))}reportUncaughtRejection(e){(0,a.next)(null,function(){const t=(0,s.getOnerror)()
if(!t)throw e
t(e)})}defer(){return(0,n.defer)()}globalDebuggingEnabled(){return!1}}const c=new l
r.d(t,["w",0,c])},2825(e,t,r){"use strict"
r.d(t,{O:()=>n})
class n{assert(){}async(e){Promise.resolve().then(e)}reportUncaughtRejection(){this.async(e=>{throw e})}defer(){let e={promise:null,resolve:null,reject:null},t=new Promise((t,r)=>{e.resolve=t,e.reject=r})
return e.promise=t,e}globalDebuggingEnabled(){return!1}}const i=new n
r.d(t,["U",0,i])},8674(e,t,r){"use strict"
const n="CANCELLED",i="STARTED",o={type:i}
r.d(t,["I$",0,{type:"QUEUED"},"Tb",0,n,"dJ",0,i,"kw",0,e=>({type:n,reason:e}),"su",0,o])},8217(e,t,r){"use strict"
r.d(t,{A:()=>d})
var n=r(8674)
const i=new Map
class o{constructor(e,t,r){this.stateTracker=t,this.schedulerPolicy=e,this.initialTaskInstances=r,this.startingInstances=[]}process(){let[e,t,r]=this.filterFinishedTaskInstances(),n=this.schedulerPolicy.makeReducer(t,r),i=e.filter(e=>this.setTaskInstanceExecutionState(e,n.step()))
return this.stateTracker.computeFinalStates(e=>this.applyState(e)),this.startingInstances.forEach(e=>e.start()),i}filterFinishedTaskInstances(){let e=0,t=0
return[this.initialTaskInstances.filter(r=>{let n=this.stateTracker.stateFor(r.task),i=r.executor.state
return i.isFinished?(n.onCompletion(r),!1):(i.hasStarted?e+=1:t+=1,!0)}),e,t]}setTaskInstanceExecutionState(e,t){let r=this.stateTracker.stateFor(e.task)
switch(e.executor.counted||(e.executor.counted=!0,r.onPerformed(e)),t.type){case n.Tb:return e.cancel(t.reason),!1
case n.dJ:return e.executor.state.hasStarted||(this.startingInstances.push(e),r.onStart(e)),r.onRunning(e),!0
case"QUEUED":return r.onQueued(e),!0}}applyState(e){let{taskable:t}=e
if(!t.onState)return
const{guid:r}=t
if(i.has(r)&&e.tag<i.get(r))return
let n=Object.assign({numRunning:e.numRunning,numQueued:e.numQueued,numPerformedInc:e.numPerformedInc},e.attrs)
t.onState(n,t),i.set(r,e.tag)}}class a{constructor(e,t){this.taskable=e,this.numRunning=0,this.numQueued=0,this.numPerformedInc=0,this.attrs={},this.tag=t}onCompletion(e){let t=e.completionState
this.attrs.lastRunning=null,this.attrs.lastComplete=e,1===t?this.attrs.lastSuccessful=e:(2===t?this.attrs.lastErrored=e:3===t&&(this.attrs.lastCanceled=e),this.attrs.lastIncomplete=e)}onPerformed(e){this.numPerformedInc+=1,this.attrs.lastPerformed=e}onStart(e){this.attrs.last=e}onRunning(e){this.attrs.lastRunning=e,this.numRunning+=1}onQueued(){this.numQueued+=1}applyStateFrom(e){Object.assign(this.attrs,e.attrs),this.numRunning+=e.numRunning,this.numQueued+=e.numQueued,this.numPerformedInc+=e.numPerformedInc}}const s=new Map
class l{constructor(){this.states=new Map}stateFor(e){let t=e.guid,r=this.states.get(t)
if(!r){let n=s.has(t)?s.get(t):0
r=new a(e,++n),this.states.set(t,r),s.set(t,n)}return r}computeFinalStates(e){this.forEachState(t=>e(t))}forEachState(e){this.states.forEach(t=>e(t))}}const c=new class{onCompletion(){}onPerformed(){}onStart(){}onRunning(){}onQueued(){}}
class u{stateFor(){return c}computeFinalStates(){}}class d{constructor(e,t){this.schedulerPolicy=e,this.stateTrackingEnabled=t,this.taskInstances=[]}cancelAll(e,t){let r=this.taskInstances.map(r=>{r.task.guids[e]&&r.executor.cancel(t)}).filter(e=>!!e)
return Promise.all(r)}perform(e){e.onFinalize(()=>this.scheduleRefresh()),this.taskInstances.push(e),this.refresh()}scheduleRefresh(){Promise.resolve().then(()=>this.refresh())}refresh(){let e=this.stateTrackingEnabled?new l:new u,t=new o(this.schedulerPolicy,e,this.taskInstances)
this.taskInstances=t.process()}}},6118(e,t,r){"use strict"
r.d(t,{Ag:()=>T,U6:()=>_,mp:()=>A,Zm:()=>E})
var n=r(2825)
class i{constructor(e){this.maxConcurrency=e||1}}var o=r(8674)
const a=(0,o.kw)("it belongs to a 'drop' Task that was already running")
class s{constructor(e){this.remainingSlots=e}step(){return this.remainingSlots>0?(this.remainingSlots--,o.su):a}}class l extends i{makeReducer(){return new s(this.maxConcurrency)}}class c{constructor(e){this.remainingSlots=e}step(){return this.remainingSlots>0?(this.remainingSlots--,o.su):o.I$}}class u extends i{makeReducer(){return new c(this.maxConcurrency)}}const d=(0,o.kw)("it belongs to a 'keepLatest' Task that was already running")
class f{constructor(e,t){this.remainingSlots=e,this.numToCancel=t}step(){return this.remainingSlots>0?(this.remainingSlots--,o.su):this.numToCancel>0?(this.numToCancel--,d):o.I$}}class p extends i{makeReducer(e,t){let r=e+t
return new f(this.maxConcurrency,r-this.maxConcurrency-1)}}const h=(0,o.kw)("it belongs to a 'restartable' Task that was .perform()ed again")
class g{constructor(e){this.numToCancel=e}step(){return this.numToCancel>0?(this.numToCancel--,h):o.su}}class m extends i{makeReducer(e,t){return new g(e+t-this.maxConcurrency)}}const b=new class{step(){return o.su}}
class y{makeReducer(){return b}}var v=r(8217),w=r(1589)
function x(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const k={enqueue:(e,t)=>t&&e.setBufferPolicy(u),debug:(e,t)=>t&&e.setDebug(t),drop:(e,t)=>t&&e.setBufferPolicy(l),keepLatest:(e,t)=>t&&e.setBufferPolicy(p),maxConcurrency:(e,t)=>e.setMaxConcurrency(t),onState:(e,t)=>e.setOnState(t),restartable:(e,t)=>t&&e.setBufferPolicy(m)}
function E(e,t){if(k[e])throw new Error(`A modifier with the name '${e}' has already been defined.`)
k[e]=t}function _(e){return k[e]}function A(e){return e in k}let T=class{constructor(e="<unknown>",t=null,r={}){x(this,"env",n.U),x(this,"_debug",null),x(this,"_enabledModifiers",[]),x(this,"_hasSetConcurrencyConstraint",!1),x(this,"_hasSetBufferPolicy",!1),x(this,"_hasEnabledEvents",!1),x(this,"_maxConcurrency",null),x(this,"_onStateCallback",(e,t)=>t.setState(e)),x(this,"_schedulerPolicyClass",y),this.name=e,this.taskDefinition=t,this.options=r,this._processModifierOptions(r)}createTask(e){let t=this.getTaskOptions(e)
return new w.Y(Object.assign({generatorFactory:t=>this.taskDefinition.apply(e,t)},t))}getModifier(e){if(A(e))return k[e].bind(null,this)}getOptions(){return this.options}getScheduler(e,t){return new v.A(e,t)}getTaskOptions(e){let t,r=this._onStateCallback,n=new this._schedulerPolicyClass(this._maxConcurrency)
return t=this.getScheduler(n,r&&"function"==typeof r),{context:e,debug:this._debug,env:this.env,name:this.name,group:void 0,scheduler:t,hasEnabledEvents:this._hasEnabledEvents,onStateCallback:r,enabledModifiers:this._enabledModifiers,modifierOptions:this.getOptions()}}setBufferPolicy(e){return function(e){if(e._hasSetBufferPolicy)throw new Error(`Cannot set multiple buffer policies on a task. ${e._schedulerPolicyClass} has already been set for task '${e.name}'`)}(this),this._hasSetBufferPolicy=!0,this._hasSetConcurrencyConstraint=!0,this._schedulerPolicyClass=e,this}setDebug(e){return this._debug=e,this}setEvented(e){return this._hasEnabledEvents=e,this}setMaxConcurrency(e){return this._hasSetConcurrencyConstraint=!0,this._maxConcurrency=e,this}setName(e){return this.name=e,this}setOnState(e){return this._onStateCallback=e,this}setTaskDefinition(e){return this.taskDefinition=e,this}_processModifierOptions(e){if(e)for(let t of Object.keys(e)){let r=e[t],n=this.getModifier(t)
"function"==typeof n&&n(r)&&this._enabledModifiers.push(t)}}}},8771(e,t,r){"use strict"
r.d(t,{iw:()=>i,qs:()=>o})
const n="TaskCancelation"
function i(e){return e&&e.name===n}class o{constructor(e,t){this.kind=e,this.reason=t,this.promise=new Promise(e=>{this.finalize=e})}}r.d(t,["Jn",0,"explicit","Vt",0,"lifespan_end","W5",0,n,"aV",0,"parent_cancel","f6",0,"yielded"])},2880(e,t,r){"use strict"
r.d(t,["N",0,{completionState:0,value:null,error:null,isSuccessful:!1,isError:!1,isCanceled:!1,hasStarted:!1,isFinished:!1}])},1661(e,t,r){"use strict"
const n={last:null,lastRunning:null,lastPerformed:null,lastSuccessful:null,lastComplete:null,lastErrored:null,lastCanceled:null,lastIncomplete:null,performCount:0}
Object.freeze(n),r.d(t,["K",0,n])},1589(e,t,r){"use strict"
r.d(t,{Y:()=>y})
class n{constructor(e,t,r){this.value=e,this.done=t,this.errored=r}}class i{constructor(e){this.done=!1,this.generatorFactory=e,this.iterator=null}step(e,t){try{let r=this.getIterator(),{value:i,done:o}=r[t](e)
return o?this.finalize(i,!1):new n(i,!1,!1)}catch(e){return this.finalize(e,!0)}}getIterator(){return this.iterator||this.done||(this.iterator=this.generatorFactory()),this.iterator}finalize(e,t){return this.done=!0,this.iterator=null,new n(e,!0,t)}}var o=r(6756),a=r(2880),s=r(8771)
const l="PERFORM_TYPE_DEFAULT",c="PERFORM_TYPE_UNLINKED",u="PERFORM_TYPE_LINKED",d={}
let f=[]
class p{constructor({generatorFactory:e,env:t,debug:r}){this.generatorState=new i(e),this.state=Object.assign({},a.N),this.index=1,this.disposers=[],this.finalizeCallbacks=[],this.env=t,this.debug=r,this.cancelRequest=null}start(){this.state.hasStarted||this.cancelRequest||(this.setState({hasStarted:!0}),this.proceedSync("next",void 0))}cancel(e){return this.requestCancel(e)?(this.state.hasStarted?this.proceedWithCancelAsync():this.finalizeWithCancel(),this.cancelRequest.promise):(e.finalize(),e.promise)}setState(e){Object.assign(this.state,e),this.taskInstance.setState(this.state)}proceedChecked(e,t,r){this.state.isFinished||this.advanceIndex(e)&&("cancel"===t?(this.requestCancel(new s.qs(s.f6),r),this.proceedWithCancelAsync()):this.proceedAsync(t,r))}proceedWithCancelAsync(){this.proceedAsync("return",d)}proceedAsync(e,t){this.advanceIndex(this.index),this.env.async(()=>this.proceedSync(e,t))}proceedSync(e,t){this.state.isFinished||(this.dispose(),this.generatorState.done?this.handleResolvedReturnedValue(e,t):this.handleResolvedContinueValue(e,t))}handleResolvedContinueValue(e,t){let r=this.index,n=this.generatorStep(t,e)
this.advanceIndex(r)&&(n.errored?this.finalize(n.value,2):this.handleYieldedValue(n))}handleResolvedReturnedValue(e,t){switch(e){case"next":case"return":this.finalize(t,1)
break
case"throw":this.finalize(t,2)}}handleYieldedUnknownThenable(e){let t=this.index
e.then(e=>{this.proceedChecked(t,"next",e)},e=>{this.proceedChecked(t,"throw",e)})}advanceIndex(e){if(this.index===e)return++this.index}handleYieldedValue(e){let t=e.value
t?(this.addDisposer(t[o.Zp]),t[o.Sx]?this.invokeYieldable(t):"function"==typeof t.then?this.handleYieldedUnknownThenable(t):this.proceedWithSimpleValue(t)):this.proceedWithSimpleValue(t)}proceedWithSimpleValue(e){this.proceedAsync("next",e)}addDisposer(e){"function"==typeof e&&this.disposers.push(e)}dispose(){let e=this.disposers
0!==e.length&&(this.disposers=[],e.forEach(e=>e()))}generatorStep(e,t){f.push(this)
let r=this.generatorState.step(e,t)
if(f.pop(),this._expectsLinkedYield){let e=r.value
e&&e.performType===u||console.warn("You performed a .linked() task without immediately yielding/returning it. This is currently unsupported (but might be supported in future version of ember-concurrency)."),this._expectsLinkedYield=!1}return r}maybeResolveDefer(){this.defer&&this.state.isFinished&&(1===this.state.completionState?this.defer.resolve(this.state.value):this.defer.reject(this.state.error))}onFinalize(e){this.finalizeCallbacks.push(e),this.state.isFinished&&this.runFinalizeCallbacks()}runFinalizeCallbacks(){this.finalizeCallbacks.forEach(e=>e()),this.finalizeCallbacks=[],this.maybeResolveDefer(),this.maybeThrowUnhandledTaskErrorLater()}promise(){return this.defer||(this.defer=this.env.defer(),this.asyncErrorsHandled=!0,this.maybeResolveDefer()),this.defer.promise}maybeThrowUnhandledTaskErrorLater(){this.asyncErrorsHandled||2!==this.state.completionState||(0,s.iw)(this.state.error)||this.env.async(()=>{this.asyncErrorsHandled||this.env.reportUncaughtRejection(this.state.error)})}requestCancel(e){return!this.cancelRequest&&!this.state.isFinished&&(this.cancelRequest=e,!0)}finalize(e,t){if(this.cancelRequest)return this.finalizeWithCancel()
let r={completionState:t}
1===t?(r.isSuccessful=!0,r.value=e):2===t?(r.isError=!0,r.error=e):3===t&&(r.error=e),this.finalizeShared(r)}finalizeWithCancel(){let e=this.taskInstance.formatCancelReason(this.cancelRequest.reason),t=new Error(e)
this.debugEnabled()&&console.log(e),t.name=s.W5,this.finalizeShared({isCanceled:!0,completionState:3,error:t,cancelReason:e}),this.cancelRequest.finalize()}debugEnabled(){return this.debug||this.env.globalDebuggingEnabled()}finalizeShared(e){this.index++,e.isFinished=!0,this.setState(e),this.runFinalizeCallbacks()}invokeYieldable(e){try{let t=e[o.Sx](this.taskInstance,this.index)
this.addDisposer(t)}catch(e){this.env.reportUncaughtRejection(e)}}onYielded(e,t){this.asyncErrorsHandled=!0,this.onFinalize(()=>{let r=this.state.completionState
1===r?e.proceed(t,"next",this.state.value):2===r?e.proceed(t,"throw",this.state.error):3===r&&e.proceed(t,"cancel",null)})
let r=this.getPerformType()
if(r!==c)return()=>{this.detectSelfCancelLoop(r,e),this.cancel(new s.qs(s.aV))}}getPerformType(){return this.taskInstance.performType||l}detectSelfCancelLoop(e,t){if(e!==l)return
let r=t.executor&&t.executor.cancelRequest
!r||r.kind!==s.Vt||this.cancelRequest||this.state.isFinished||this.taskInstance.selfCancelLoopWarning(t)}}var h=r(1661)
let g=0
class m{constructor(e){this.context=e.context,this.debug=e.debug||!1,this.enabledModifiers=e.enabledModifiers,this.env=e.env,this.group=e.group,this.hasEnabledEvents=e.hasEnabledEvents,this.modifierOptions=e.modifierOptions,this.name=e.name,this.onStateCallback=e.onStateCallback,this.scheduler=e.scheduler,this.guid="ec_"+g++,this.guids={},this.guids[this.guid]=!0,this.group&&Object.assign(this.guids,this.group.guids)}cancelAll(e){let{reason:t,cancelRequestKind:r,resetState:n}=e||{}
t=t||".cancelAll() was explicitly called on the Task"
let i=new s.qs(r||s.Jn,t)
return this.scheduler.cancelAll(this.guid,i).then(()=>{n&&this._resetState()})}get _isAlive(){return!0}_resetState(){this.setState(h.K)}setState(){}}Object.assign(m.prototype,h.K),Object.assign(m.prototype,{numRunning:0,numQueued:0,isRunning:!1,isQueued:!1,isIdle:!0,state:"idle"})
class b{constructor(e,t,r){this.task=e,this.performType=t,this.linkedObject=r}perform(...e){return this.task._performShared(e,this.performType,this.linkedObject)}}let y=class e extends m{constructor(e){super(e),this.generatorFactory=e.generatorFactory,this.perform=this._perform.bind(this)}linked(){let e=f[f.length-1]
if(!e)throw new Error("You can only call .linked() from within a task.")
return new b(this,u,e)}unlinked(){return new b(this,c,null)}toString(){return`<Task:${this.name}>`}_clone(){return new e({context:this.context,debug:this.debug,env:this.env,generatorFactory:this.generatorFactory,group:this.group,hasEnabledEvents:this.hasEnabledEvents,name:this.name,onStateCallback:this.onStateCallback,scheduler:this.scheduler})}_curry(...e){let t=this._clone()
return t._curryArgs=[...this._curryArgs||[],...e],t}_perform(...e){return this._performShared(e,l,null)}_performShared(e,t,r){let n=this._curryArgs?[...this._curryArgs,...e]:e,i=this._taskInstanceFactory(n,t,r)
return t===u&&(r._expectsLinkedYield=!0),this._isAlive||i.cancel(),this.scheduler.perform(i),i}_taskInstanceOptions(e,t,r){return{args:e,executor:new p({generatorFactory:()=>this.generatorFactory(e),env:this.env,debug:this.debug}),performType:t,hasEnabledEvents:this.hasEnabledEvents}}}},6756(e,t,r){"use strict"
r.d(t,{G$:()=>d,Oc:()=>p,_d:()=>l})
const n="__ec_cancel__",i="__ec_yieldable__",o="next",a="return"
class s{constructor(e,t){this._taskInstance=e,this._resumeIndex=t}getTaskInstance(){return this._taskInstance}cancel(){let e=this._taskInstance
e.proceed.call(e,this._resumeIndex,"cancel")}next(e){let t=this._taskInstance
t.proceed.call(t,this._resumeIndex,o,e)}return(e){let t=this._taskInstance
t.proceed.call(t,this._resumeIndex,a,e)}throw(e){let t=this._taskInstance
t.proceed.call(t,this._resumeIndex,"throw",e)}}class l{constructor(){this[i]=this[i].bind(this)}onYield(){}_deferable(){let e={resolve:void 0,reject:void 0}
return e.promise=new Promise((t,r)=>{e.resolve=t,e.reject=r}),e}_toPromise(){let e=this._deferable(),t={proceed(t,r,n){r==o||r==a?e.resolve(n):e.reject(n)}},r=this[i](t,0)
return e.promise[n]=r,e.promise}then(...e){return this._toPromise().then(...e)}catch(...e){return this._toPromise().catch(...e)}finally(...e){return this._toPromise().finally(...e)}[i](e,t){let r=new s(e,t)
return this.onYield(r)}}class c extends l{onYield(e){let t=requestAnimationFrame(()=>e.next())
return()=>cancelAnimationFrame(t)}}class u extends l{constructor(e){super(),this.ms=e}onYield(e){let t=setTimeout(()=>e.next(),this.ms)
return()=>clearTimeout(t)}}function d(){return new c}const f=new class extends l{onYield(){}}
function p(e){return new u(e)}r.d(t,["Sx",0,i,"Zp",0,n,"i4",0,f])},7207(e,t,r){"use strict"
r.d(t,{F:()=>o})
var n=r(1603),i=r(2935)
function o(e,t,r,o){let a=r[0],s=r.slice(1)
return function(...r){if(a&&"function"==typeof a[t]){if(o&&o.value){let e=r.pop()
r.push((0,i.y$)(e,o.value))}return a[t](...s,...r)}(0,n.assert)(`The first argument passed to the \`${e}\` helper should be a Task object (without quotes); you passed ${a}`,!1)}}},1159(e,t,r){"use strict"
r.d(t,{H:()=>l})
var n=r(2880),i=r(6756),o=r(8771)
class a{constructor({task:e,args:t,executor:r,performType:n,hasEnabledEvents:i}){this.task=e,this.args=t,this.performType=n,this.executor=r,this.executor.taskInstance=this,this.hasEnabledEvents=i}setState(){}formatCancelReason(){}selfCancelLoopWarning(){}onFinalize(e){this.executor.onFinalize(e)}proceed(e,t,r){this.executor.proceedChecked(e,t,r)}[i.Sx](e,t){return this.executor.onYielded(e,t)}cancel(e=".cancel() was explicitly called"){this.executor.cancel(new o.qs(o.Jn,e))}then(...e){return this.executor.promise().then(...e)}catch(...e){return this.executor.promise().catch(...e)}finally(...e){return this.executor.promise().finally(...e)}toString(){return`${this.task} TaskInstance`}start(){return this.executor.start(),this}}Object.assign(a.prototype,n.N),Object.assign(a.prototype,{state:"waiting",isDropped:!1,isRunning:!0})
var s=r(3184)
class l extends a{setState(e){let t=this._recomputeState(e)
Object.assign(this,{...e,isRunning:!e.isFinished,isDropped:"dropped"===t,state:t})}_recomputeState(e){return e.isDropped?"dropped":e.isCanceled?e.hasStarted?"canceled":"dropped":e.isFinished?"finished":e.hasStarted?"running":"waiting"}formatCancelReason(e){return`TaskInstance '${this.getName()}' was canceled because ${e}. For more information, see: http://ember-concurrency.com/docs/task-cancelation-help`}getName(){return this.name||(this.name=this.task&&this.task.name||"<unknown>"),this.name}selfCancelLoopWarning(e){let t=`\`${e.getName()}\``,r=`\`${this.getName()}\``
console.warn(`ember-concurrency detected a potentially hazardous "self-cancel loop" between parent task ${t} and child task ${r}. If you want child task ${r} to be canceled when parent task ${t} is canceled, please change \`.perform()\` to \`.linked().perform()\`. If you want child task ${r} to keep running after parent task ${t} is canceled, change it to \`.unlinked().perform()\``)}triggerEvent(...e){if(!this.hasEnabledEvents)return
let t=this.task,r=t.context,n=t&&t.name
if(r&&r.trigger&&n){let[t,...i]=e
r.trigger(`${n}:${t}`,...i)}}}s.O&&Object.defineProperties(l.prototype,s.O)},2073(e,t,r){"use strict"
r.d(t,{Y:()=>c})
var n=r(1130),i=r(8771),o=r(1589),a=r(1159)
const s={_performCount:0,setState(e){this._performCount=this._performCount+(e.numPerformedInc||0)
let t=e.numRunning>0,r=e.numQueued>0,n=Object.assign({},e,{performCount:this._performCount,isRunning:t,isQueued:r,isIdle:!t&&!r,state:t?"running":"idle"})
Object.assign(this,n)},onState(e,t){t.onStateCallback&&t.onStateCallback(e,t)}}
var l=r(3184)
class c extends o.Y{constructor(e){super(e),(0,n.isDestroying)(this.context)||(0,n.registerDestructor)(this.context,()=>{this.cancelAll({reason:"the object it lives on was destroyed or unrendered",cancelRequestKind:i.Vt})})}get _isAlive(){return!(0,n.isDestroying)(this.context)}_taskInstanceFactory(e,t,r){let n=this._taskInstanceOptions(e,t,r)
return n.task=this,new a.H(n)}_clone(){return new c({context:this.context,debug:this.debug,env:this.env,generatorFactory:this.generatorFactory,group:this.group,hasEnabledEvents:this.hasEnabledEvents,name:this.name,onStateCallback:this.onStateCallback,scheduler:this.scheduler})}}l.e&&Object.defineProperties(c.prototype,l.e),Object.assign(c.prototype,s)},3184(e,t,r){"use strict"
r.d(t,{O:()=>l,e:()=>s})
var n=r(473),i=r(1661),o=r(2880)
function a(e,t){return Object.keys(e).reduce((t,r)=>function(e,t,r){const i=Object.getOwnPropertyDescriptor(e,r)
i.initializer=i.initializer||(()=>e[r]),delete i.value
const o=(0,n.tracked)(t,r,i)
return t[r]=o,t}(e,t,r),t)}let s,l
s=a(i.K,{}),s=a({numRunning:0,numQueued:0,isRunning:!1,isQueued:!1,isIdle:!0,state:"idle"},s),l=a(o.N,{}),l=a({state:"waiting",isDropped:!1,isRunning:!1},l),Object.freeze(s),Object.freeze(l)},2935(e,t,r){"use strict"
r.d(t,{Jk:()=>s,b5:()=>a,wR:()=>c,y$:()=>u})
var n=r(1223),i=r(6301),o=r(6756)
function a(e){return e&&("function"==typeof e.one&&"function"==typeof e.off||"function"==typeof e.on&&"function"==typeof e.off||"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener)}class s extends o._d{_deferable(){return i.w.defer()}}class l extends s{constructor(e){super(),this.ms=e}onYield(e){let t=(0,n.later)(()=>e.next(),this.ms)
return()=>(0,n.cancel)(t)}}function c(e){return new l(e)}function u(e,t){return t.split(".").reduce((e,t)=>e[t],e)}},4627(e,t,r){"use strict"
r.r(t),r.d(t,{buildTask:()=>d})
var n=r(1603),i=r(6118),o=r(6301),a=r(8217),s=r(1223)
class l extends a.A{scheduleRefresh(){(0,s.once)(this,this.refresh)}}var c=r(2073)
class u extends i.Ag{constructor(...e){var t,r,n
super(...e),t=this,r="env",n=o.w,(r=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}createTask(e){(0,n.assert)("Cannot create task if a task definition is not provided as generator function",this.taskDefinition)
let t=this.getTaskOptions(e)
return new c.Y(Object.assign({generatorFactory:t=>this.taskDefinition.apply(e,t)},t))}getModifier(e){let t=super.getModifier(e)
return(0,n.assert)(`Task option '${e}' is not recognized as a supported option.`,t),t}getScheduler(e,t){return new l(e,t)}get taskFn(){return this.taskDefinition}set taskFn(e){this.setTaskDefinition(e)}}function d(e,t,r,n){let i=t
n&&(i=Object.assign({},i),i[n]=!0)
const o=e()
return new u(r||"<unknown>",o.generator,i).createTask(o.context)}},1213(e,t,r){"use strict"
r.r(t),r.d(t,{cancelHelper:()=>a,default:()=>s})
var n=r(336),i=r(1603),o=r(7207)
function a(e){let t=e[0]
return t&&"function"==typeof t.cancelAll||(0,i.assert)(`The first argument passed to the \`cancel-all\` helper should be a Task (without quotes); you passed ${t}`,!1),(0,o.F)("cancel-all","cancelAll",[t,{reason:"the 'cancel-all' template helper was invoked"}])}var s=(0,n.helper)(a)},6048(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>l,performHelper:()=>s})
var n=r(336),i=r(1603),o=r(7207)
function a(e){return function(t){"function"==typeof e?e(t):null===e||(0,i.assert)(`The onError argument passed to the \`perform\` helper should be a function or null; you passed ${e}`,!1)}}function s(e,t){let r=(0,o.F)("perform","perform",e,t)
return t&&void 0!==t.onError?function(...e){try{return r(...e).catch(a(t.onError))}catch{a(t.onError)}}:r}var l=(0,n.helper)(s)},1996(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>n})
var n=(0,r(336).helper)(function(e){let[t,...r]=e
return t._curry(...r)})},3200(e,t,r){"use strict"
r.r(t),r.d(t,{Task:()=>v.Y,TaskInstance:()=>a.H,Yieldable:()=>x.Jk,all:()=>l,allSettled:()=>c,animationFrame:()=>s.G$,didCancel:()=>y.iw,forever:()=>s.i4,getModifier:()=>b.U6,hasModifier:()=>b.mp,hash:()=>d,hashSettled:()=>f,race:()=>u,rawTimeout:()=>s.Oc,registerModifier:()=>b.Zm,task:()=>w,timeout:()=>x.wR,waitForEvent:()=>O,waitForProperty:()=>N,waitForQueue:()=>S})
var n=r(1603),i=r(4421),o=r.n(i),a=r(1159),s=r(6756)
const l=m(o().Promise,"all",p),c=m(o(),"allSettled",p),u=m(i.Promise,"race",p),d=m(o(),"hash",h),f=m(o(),"hashSettled",h)
function p(e){return e}function h(e){return Object.keys(e).map(t=>e[t])}function g(e){if(e)if(e instanceof a.H)e.executor.asyncErrorsHandled=!0
else if(e instanceof s._d)return e._toPromise()
return e}function m(e,t,r){return function(i){let l=function(e,t){if(Array.isArray(e))return e.map(t)
if("object"==typeof e&&null!==e){let r={}
return Object.keys(e).forEach(n=>{r[n]=t(e[n])}),r}return e}(i,g),c=r(l);(0,n.assert)(`'${t}' expects an array.`,Array.isArray(c))
let u=o().defer()
e[t](l).then(u.resolve,u.reject)
let d=!1,f=()=>{d||(d=!0,c.forEach(e=>{e&&(e instanceof a.H?e.cancel():"function"==typeof e[s.Zp]&&e[s.Zp]())}))},p=u.promise.finally(f)
return p[s.Zp]=f,p}}var b=r(6118),y=r(8771),v=r(2073)
function w(){var e;(0,n.assert)('It appears you\'re attempting to use the new task(async () => { ... }) syntax, but the async arrow task function you\'ve provided is not being properly compiled by Babel.\n\nPossible causes / remedies:\n\n1. You must pass the async function expression directly to the task() function (it is not currently supported to pass in a variable containing the async arrow fn, or any other kind of indirection)\n2. The new task syntax is only supported by native classes. Ensure that this is one.\n3. If this code is in an addon, please ensure the addon specifies ember-concurrency "2.3.0" or higher in "dependencies" (not "devDependencies")\n4. Ensure that there is only one version of ember-concurrency v2.3.0+ being used in your project (including nested dependencies) and consider using npm/yarn/pnpm resolutions to enforce a single version is used\n5. Ensure that you have registered the Babel transform that Ember Concurrency uses to transform tasks in the "async-arrow" notation, see https://ember-concurrency.com/docs/v4-upgrade',!((e=arguments[arguments.length-1])&&e.constructor&&"AsyncFunction"===e.constructor.name)),(0,n.assert)("Using task(...) in any form other than `task(async () => {})` is no longer supported since ember-concurrency v5. Please use the modern syntax instead (and consider using one of ember-concurrency's codemods).",!1)}var x=r(2935),k=r(123),E=r(1223)
class _ extends x.Jk{constructor(e){super(),this.queueName=e}onYield(e){let t
try{t=(0,E.schedule)(this.queueName,()=>e.next())}catch(t){e.throw(t)}return()=>(0,E.cancel)(t)}}class A extends x.Jk{constructor(e,t){super(),this.object=e,this.eventName=t,this.usesDOMEvents=!1}on(e){"function"==typeof this.object.addEventListener?(this.usesDOMEvents=!0,this.object.addEventListener(this.eventName,e)):this.object.on(this.eventName,e)}off(e){this.usesDOMEvents?this.object.removeEventListener(this.eventName,e):this.object.off(this.eventName,e)}onYield(e){let t=null,r=()=>{t&&this.off(t),t=null}
return t=t=>{r(),e.next(t)},this.on(t),r}}class T extends x.Jk{constructor(e,t,r=Boolean){super(),this.object=e,this.key=t,(0,n.deprecate)("waitForProperty is deprecated due to its use of observers. Consider using a polling approach instead.",!1,{id:"ember-concurrency.deprecate-wait-for-property",for:"ember-concurrency",since:"4.0.5",until:"5.0.0"}),this.predicateCallback="function"==typeof r?r:e=>e===r}onYield(e){let t=!1,r=()=>{let t=(0,x.y$)(this.object,this.key)
if(this.predicateCallback(t))return e.next(t),!0}
return r()||((0,k.addObserver)(this.object,this.key,null,r),t=!0),()=>{t&&r&&(0,k.removeObserver)(this.object,this.key,null,r)}}}function S(e){return new _(e)}function O(e,t){return(0,n.assert)(`${e} must include Ember.Evented (or support \`.on()\` and \`.off()\`) or DOM EventTarget (or support \`addEventListener\` and  \`removeEventListener\`) to be able to use \`waitForEvent\``,(0,x.b5)(e)),new A(e,t)}function N(e,t,r){return new T(e,t,r)}},7171(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>u})
var n=r(2663),i=r.n(n),o=r(336),a=r.n(o),s=r(1603)
function l(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||null===e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(){}class u extends(a()){constructor(...e){super(...e),l(this,"tagName",c),l(this,"componentClass",void 0)}compute(e,t){(0,s.assert)("The `element` helper takes a single positional argument",1===e.length),(0,s.assert)("The `element` helper does not take any named arguments",0===Object.keys(t).length)
let r=e[0]
return r!==this.tagName&&(this.tagName=r,"string"==typeof r?this.componentClass=class extends(i()){constructor(...e){super(...e),l(this,"tagName",r)}}:(this.componentClass=void 0,(0,s.runInDebug)(()=>{let e="The argument passed to the `element` helper must be a string"
try{e+=` (you passed \`${r}\`)`}catch(e){}(0,s.assert)(e,null==r)}))),this.componentClass}}},3152(e,t,r){"use strict"
function n(e,t,r){return(t="symbol"==typeof(n=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e
var n}function i(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function o(e,t,r,n,i){var o={}
return Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}r.d(t,{_:()=>n,a:()=>o,b:()=>i})},1343(e,t,r){"use strict"
r.d(t,{A:()=>n})
var n=["alt","ctrl","meta","shift","cmd"]},4079(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>s})
var n=r(336),i=r(1603),o=r(6910),a=r(6664),s=(r(4616),r(9997),r(9376),r(9553),(0,n.helper)(function([e,t]){return function(r){(0,i.assert)("ember-keyboard: You must pass a function as the second argument to the `if-key` helper","function"==typeof t),(0,i.assert)("ember-keyboard: The `if-key` helper expects to be invoked with a KeyboardEvent",r instanceof KeyboardEvent),(0,o.A)((0,a.A)(r.type,e),r)&&t(r)}}))},5497(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>f})
var n,i,o=r(3152),a=r(336),s=r.n(a),l=r(1603),c=r(2735),u=r(6664)
const d=c.service??c.inject
let f=(n=class extends(s()){constructor(...e){super(...e),(0,o.b)(this,"keyboard",i,this),(0,o._)(this,"keyCombo",void 0),(0,o._)(this,"callback",void 0),(0,o._)(this,"keyboardActivated",!0),(0,o._)(this,"keyboardPriority",0),(0,o._)(this,"eventName","keydown"),(0,o._)(this,"keyboardHandlers",void 0)}compute([e,t],{event:r="keydown",activated:n=!0,priority:i=0}){(0,l.assert)("ember-keyboard: You must pass a function as the second argument to the `on-key` helper","function"==typeof t),this.keyCombo=e,this.callback=t,this.eventName=r,this.keyboardActivated=n,this.keyboardPriority=i,this.keyboardHandlers={},this.keyboardHandlers[(0,u.A)(r,e)]=t,this.keyboard.register(this)}willDestroy(){this.keyboard.unregister(this),super.willDestroy(...arguments)}},i=(0,o.a)(n.prototype,"keyboard",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)},4554(e,t,r){"use strict"
r.r(t),r.d(t,{click:()=>v,getCode:()=>C,getKeyCode:()=>D,getMouseCode:()=>i,keyDown:()=>g.u2,keyPress:()=>g.xZ,keyResponder:()=>u,keyUp:()=>g.LL,mouseDown:()=>w,mouseUp:()=>x,onKey:()=>p,touchEnd:()=>E,touchStart:()=>_,triggerKeyDown:()=>S,triggerKeyPress:()=>O,triggerKeyUp:()=>N})
var n=r(9553)
function i(e){if(!(0,n.isNone)(e))switch(e){case"left":return 0
case"middle":return 1
case"right":return 2}}var o=r(3152),a=r(2735),s=r(1130)
const l=a.service??a.inject
function c(e,t){let r
do{(r=Object.getOwnPropertyDescriptor(e,t))||(e=Object.getPrototypeOf(e))}while(!r&&e)
return r}function u(e={}){const t=function(t){var r,n,i
return void 0===e.priority&&(e.priority=0),void 0===e.activated&&(e.activated=!0),i=class extends t{get keyboardPriority(){return void 0===super.keyboardPriority?e.priority:super.keyboardPriority}set keyboardPriority(e){super.keyboardPriority=e}get keyboardActivated(){return void 0===super.keyboardActivated?e.activated:super.keyboardActivated}set keyboardActivated(e){super.keyboardActivated=e}constructor(){super(...arguments),(0,o.b)(this,"keyboard",n,this),function(e){if(e.keyboardHandlers=e.keyboardHandlers||{},!e.keyboardHandlerNames){e.keyboardHandlerNames={}
for(let t in e){const r=c(e,t)
if(!r?.get){let r=e[t]
if("function"==typeof r&&r._emberKeyboardOnKeyDecoratorData)for(let n of r._emberKeyboardOnKeyDecoratorData.listenerNames||[])e.keyboardHandlerNames[n]=t}}}for(let[t,r]of Object.entries(e.keyboardHandlerNames||{}))e.keyboardHandlers[t]=e[r].bind(e)}(this),this.keyboard.register(this),(0,s.registerDestructor)(this,()=>{this.keyboard.unregister(this)})}},(0,o._)(i,"name",`${t.name}WithKeyResponder`),r=i,n=(0,o.a)(r.prototype,"keyboard",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r}
return"function"==typeof e?t(e):function(e){return t(e)}}var d=r(6664)
const f="keydown"
function p(e,t={}){return"function"==typeof arguments[1]?h(e,{event:f},arguments[1]):(t.event||(t.event=f),"function"==typeof arguments[2]?h(e,t,arguments[2]):function(e,t){return function(r,n,i){if(!Object.prototype.hasOwnProperty.call(r,"keyboardHandlerNames")){let e=r.parentKeyboardHandlerNames
r.keyboardHandlerNames=e?Object.assign({},e):{}}return r.keyboardHandlerNames[(0,d.A)(t.event,e)]=n,i}}(e,t))}function h(e,t,r){return r._emberKeyboardOnKeyDecoratorData||(r._emberKeyboardOnKeyDecoratorData={listenerNames:[]}),r._emberKeyboardOnKeyDecoratorData.listenerNames.push((0,d.A)(t.event,e)),r}var g=r(3157),m=r(1343)
const b=["left","middle","right"].concat(m.A),y=function(e,t){const r=void 0!==t?t.split("+"):[]
return function(e){e.forEach(e=>{-1===b.indexOf(e)&&console.error(`\`${e}\` is not a valid key name`)})}(r),(0,d.A)(e,r)}
function v(e){return y("click",e)}function w(e){return y("mousedown",e)}function x(e){return y("mouseup",e)}const k=function(e,t){return function(e){(void 0!==e?e.split("+"):[]).forEach(e=>{-1===m.A.indexOf(e)&&console.error(`\`${e}\` is not a valid key name`)})}(t),(0,d.A)(e,t)}
function E(e){return k("touchEnd",e)}function _(e){return k("touchstart",e)}var A=r(4616)
r(9997),r(1603)
const T=function(e,t,r){const n=A.A.parse(`${e}:${t}`).createMatchingKeyboardEvent()
r.dispatchEvent(n)},S=function(e,t=document){T("keydown",e,t)},O=function(e,t=document){T("keypress",e,t)},N=function(e,t=document){T("keyup",e,t)}
function C(){throw new Error("ember-keyboard: `getCode` has been removed. There is no longer a need for this function as you can directly specify `key` and/or `code` values")}function D(){throw new Error("ember-keyboard: `getKeyCode` has been removed. There is no longer a need for this function as you can directly specify `key` and/or `code` values")}},3157(e,t,r){"use strict"
r.d(t,{LL:()=>a,u2:()=>i,xZ:()=>o})
var n=r(6664)
function i(e){return(0,n.A)("keydown",e)}function o(e){return(0,n.A)("keypress",e)}function a(e){return(0,n.A)("keyup",e)}},6400(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>g})
var n=r(3152),i=r(2121),o=r(2735),a=r(4471),s=r(1130),l=r(6664),c=r(6910)
r(4616),r(9997),r(1603),r(9376),r(9553)
const u=o.service??o.inject,d=["input","select","textarea"]
let f
var p,h
p=class extends i.default{constructor(e,t){super(e,t),(0,n.b)(this,"keyboard",h,this),(0,n._)(this,"element",void 0),(0,n._)(this,"keyboardPriority",0),(0,n._)(this,"activatedParamValue",!0),(0,n._)(this,"eventName","keydown"),(0,n._)(this,"onlyWhenFocused",!0),(0,n._)(this,"listenerName",void 0),(0,n._)(this,"removeEventListeners",()=>{this.onlyWhenFocused&&(this.element.removeEventListener("click",this.onFocus,!0),this.element.removeEventListener("focus",this.onFocus,!0),this.element.removeEventListener("focusout",this.onFocusOut,!0))}),this.keyboard.register(this),(0,s.registerDestructor)(this,()=>{this.removeEventListeners(),this.keyboard.unregister(this)})}modify(e,t,r){this.element=e,this.removeEventListeners(),this.setupProperties(t,r),this.onlyWhenFocused&&this.addEventListeners()}setupProperties(e,t){let[r,n]=e,{activated:i,event:o,priority:a,onlyWhenFocused:s}=t
this.keyCombo=r,this.callback=n,this.eventName=o||"keydown",this.activatedParamValue="activated"in t?!!i:void 0,this.keyboardPriority=a?parseInt(a,10):0,this.listenerName=(0,l.A)(this.eventName,this.keyCombo),this.onlyWhenFocused=void 0!==s?s:d.includes(this.element.tagName.toLowerCase())}addEventListeners(){this.element.addEventListener("click",this.onFocus,!0),this.element.addEventListener("focus",this.onFocus,!0),this.element.addEventListener("focusout",this.onFocusOut,!0)}onFocus(){this.isFocused=!0}onFocusOut(){this.isFocused=!1}get keyboardActivated(){return!1!==this.activatedParamValue&&(!this.onlyWhenFocused||this.isFocused)}get keyboardFirstResponder(){return!!this.onlyWhenFocused&&this.isFocused}canHandleKeyboardEvent(e){return(0,c.A)(this.listenerName,e)}handleKeyboardEvent(e,t){(0,c.A)(this.listenerName,e)&&(this.callback?this.callback(e,t):this.element.click())}},h=(0,n.a)(p.prototype,"keyboard",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,n.a)(p.prototype,"onFocus",[a.action],Object.getOwnPropertyDescriptor(p.prototype,"onFocus"),p.prototype),(0,n.a)(p.prototype,"onFocusOut",[a.action],Object.getOwnPropertyDescriptor(p.prototype,"onFocusOut"),p.prototype),f=p
var g=f},3584(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>p})
var n,i=r(3152),o=r(2735),a=r.n(o),s=r(2294),l=r(4471),c=r(1223),u=r(3157),d=r(6910)
function f(e,t,r=null){if(e.handleKeyboardEvent){if(e.canHandleKeyboardEvent&&!e.canHandleKeyboardEvent(t))return
e.handleKeyboardEvent(t,r)}else{if(!e.keyboardHandlers)throw new Error("A responder registered with the ember-keyboard service must implement either `keyboardHandlers` (property returning a dictionary of listenerNames to handler functions), or `handleKeyboardEvent(event)`)")
Object.keys(e.keyboardHandlers).forEach(n=>{(0,d.A)(n,t)&&(r?e.keyboardHandlers[n](t,r):e.keyboardHandlers[n](t))})}}r(4616),r(9997),r(1603),r(9376),r(9553)
let p=(n=class extends(a()){get activeResponders(){let{registeredResponders:e}=this
return Array.from(e).filter(e=>e.keyboardActivated)}get sortedResponders(){return this.activeResponders.sort((e,t)=>function(e,t,r,n=null){return function(e,t,r,n){return function(e,t){let r=e-t
return(r>0)-(r<0)}(n?n((0,l.get)(e,r)):(0,l.get)(e,r),n?n((0,l.get)(t,r)):(0,l.get)(t,r))}(t,e,"keyboardPriority",n)}(e,t))}get firstResponders(){return this.sortedResponders.filter(e=>e.keyboardFirstResponder)}get normalResponders(){return this.sortedResponders.filter(e=>!e.keyboardFirstResponder)}constructor(...e){if(super(...e),(0,i._)(this,"registeredResponders",new Set),"undefined"!=typeof FastBoot)return
let t=((0,s.getOwner)(this).resolveRegistration("config:environment")||{}).emberKeyboard||{}
t.disableOnInputFields&&(this._disableOnInput=!0),this._listeners=t.listeners||["keyUp","keyDown","keyPress"],this._listeners=this._listeners.map(e=>e.toLowerCase()),this._listeners.forEach(e=>{document.addEventListener(e,this._respond)})}willDestroy(...e){super.willDestroy(...e),"undefined"==typeof FastBoot&&this._listeners.forEach(e=>{document.removeEventListener(e,this._respond)})}_respond(e){if(this._disableOnInput&&e.target){const t=e.composedPath()[0]??e.target,r=t.tagName
if(t.getAttribute&&null!=t.getAttribute("contenteditable")||"TEXTAREA"===r||"INPUT"===r)return}(0,c.run)(()=>{let{firstResponders:t,normalResponders:r}=this
!function(e,{firstResponders:t,normalResponders:r}){let n=!1,i=!1
const o={stopImmediatePropagation(){n=!0},stopPropagation(){i=!0}}
for(const s of t)if(f(s,e,o),n)break
if(i)return
n=!1
let a=Number.POSITIVE_INFINITY
for(const s of r){const t=Number(s.keyboardPriority)
if(!n||t!==a){if(t<a){if(i)return
n=!1,a=t}f(s,e,o)}}}(e,{firstResponders:t,normalResponders:r})})}register(e){this.registeredResponders.add(e)}unregister(e){this.registeredResponders.delete(e)}keyDown(...e){return(0,u.u2)(...e)}keyPress(...e){return(0,u.xZ)(...e)}keyUp(...e){return(0,u.LL)(...e)}},(0,i.a)(n.prototype,"_respond",[l.action],Object.getOwnPropertyDescriptor(n.prototype,"_respond"),n.prototype),n)},9376(e,t,r){"use strict"
r.d(t,{A:()=>i})
var n=r(9553)
function i(e){if(!(0,n.isNone)(e))switch(e){case 0:return"left"
case 1:return"middle"
case 2:return"right"}}},6910(e,t,r){"use strict"
r.d(t,{A:()=>d})
var n=r(4616),i=r(9997)
const o={A:"a",B:"b",C:"c",D:"d",E:"e",F:"f",G:"g",H:"h",I:"i",J:"j",K:"k",L:"l",M:"m",N:"n",O:"o",P:"p",Q:"q",R:"r",S:"s",T:"t",U:"u",V:"v",W:"w",X:"x",Y:"y",Z:"z","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","<":",",">":".","?":"/",":":";",'"':"'","~":"`","{":"[","}":"]","|":"\\"},a={"å":"a",b:"b","ç":"c","∂":"d","ƒ":"f","©":"g","˙":"h","∆":"j","˚":"k","¬":"l","µ":"m","ø":"o","π":"p","œ":"q","®":"r","ß":"s","†":"t","√":"v","∑":"w","≈":"x","¥":"y","Ω":"z","¡":"1","™":"2","£":"3","¢":"4","∞":"5","§":"6","¶":"7","•":"8","ª":"9","º":"0","–":"-","≠":"=","≤":",","≥":".","÷":"/","…":";","æ":"'","“":"[","‘":"]","«":"\\"},s={"Å":"a","ı":"b","Î":"d","Ï":"f","˝":"g","Ó":"h","ˆ":"i","Ô":"j","":"k","Ò":"l","Â":"m","˜":"n","Ø":"o","Œ":"q","‰":"r","Í":"s","ˇ":"t","¨":"u","◊":"v","„":"w","˛":"x","Á":"y","¸":"z","⁄":"1","€":"2","‹":"3","›":"4","ﬁ":"5","ﬂ":"6","‡":"7","°":"8","·":"9","‚":"0","—":"-","±":"=","¯":",","˘":".","¿":"/","Ú":";","Æ":"'","`":"`","”":"[","’":"]","»":"\\"}
var l=r(1343),c=r(9376)
r(1603),r(9553)
const u="_all"
function d(e,t,r=(0,i.A)()){let l
if(e instanceof n.A)l=e
else{if("string"!=typeof e)throw new Error("Expected a `string` or `KeyCombo` as `keyComboOrKeyComboString` argument to `isKey`")
l=n.A.parse(e,r)}return l.type===t.type&&(!!function(e){return e.keyOrCode===u&&!1===e.altKey&&!1===e.ctrlKey&&!1===e.metaKey&&!1===e.shiftKey}(l)||!(!function(e,t){return e.type===t.type&&e.altKey===t.altKey&&e.ctrlKey===t.ctrlKey&&e.metaKey===t.metaKey&&e.shiftKey===t.shiftKey}(l,t)||!function(e,t){return t instanceof KeyboardEvent&&(e.keyOrCode===u||e.keyOrCode===t.code||e.keyOrCode===t.key)}(l,t)&&!function(e,t){return t instanceof MouseEvent&&(e.keyOrCode===u||e.keyOrCode===(0,c.A)(t.button))}(l,t))||function(e,t,r){return p([],e)&&p(["shift"],t)?t.key===e.keyOrCode:p(["shift"],e)&&p(["shift"],t)?(n=t.key,(o[n]||n)===e.keyOrCode):"Macintosh"===r&&p(["alt"],e)&&p(["alt"],t)?function(e){return a[e]||e}(t.key)===e.keyOrCode:!("Macintosh"!==r||!p(["shift","alt"],e)||!p(["shift","alt"],t))&&function(e){return s[e]||e}(t.key)===e.keyOrCode
var n}(l,t,r))}const f=l.A.filter(e=>"cmd"!=e)
function p(e,t){for(let r of f){if(e.includes(r)&&!t[`${r}Key`])return!1
if(!e.includes(r)&&t[`${r}Key`])return!1}return!0}},4616(e,t,r){"use strict"
r.d(t,{A:()=>u})
var n=r(3152),i=r(9997)
r(1603)
const o=/^alt$/i,a=/^shift$/i,s=/^ctrl$/i,l=/^meta$/i,c=/^cmd$/i
class u{constructor(e=(0,i.A)()){(0,n._)(this,"type",void 0),(0,n._)(this,"altKey",!1),(0,n._)(this,"ctrlKey",!1),(0,n._)(this,"shiftKey",!1),(0,n._)(this,"metaKey",!1),(0,n._)(this,"keyOrCode",void 0),(0,n._)(this,"platform",void 0),this.platform=e}static parse(e,t=(0,i.A)()){let r=new u(t),[n,...d]=e.split(":")
d=d.join(":"),r.type=n
let f=!1
return d.split("+").reduce((e,t)=>(""===t?(f&&e.push("+"),f=!f):e.push(t),e),[]).forEach(e=>{o.test(e)?r.altKey=!0:s.test(e)?r.ctrlKey=!0:l.test(e)?r.metaKey=!0:a.test(e)?r.shiftKey=!0:c.test(e)?t.indexOf("Mac")>-1?r.metaKey=!0:r.ctrlKey=!0:r.keyOrCode=e}),r}createMatchingKeyboardEvent(e={}){return new KeyboardEvent(this.type,Object.assign({key:this.keyOrCode,code:this.keyOrCode,altKey:this.altKey,ctrlKey:this.ctrlKey,metaKey:this.metaKey,shiftKey:this.shiftKey},e))}}},6664(e,t,r){"use strict"
function n(e,t=[]){let r=t
"string"==typeof t&&(r=t.split("+")),r.indexOf("cmd")>-1&&(r[r.indexOf("cmd")]=function(e){if("undefined"==typeof FastBoot)return void 0===e&&(e=navigator.platform),e.indexOf("Mac")>-1?"meta":"ctrl"}())
let n=function(e){return e.sort().join("+")}(r||[])
return""===n&&(n="_all"),`${e}:${n}`}r.d(t,{A:()=>n})},9997(e,t,r){"use strict"
r.d(t,{A:()=>o})
var n=r(1603)
let i
function o(e=navigator.userAgent){if((0,n.runInDebug)(()=>{i=null}),!i){let t="Unknown OS";-1!=e.indexOf("Win")&&(t="Windows"),-1!=e.indexOf("Mac")&&(t="Macintosh"),-1!=e.indexOf("Linux")&&(t="Linux"),-1!=e.indexOf("Android")&&(t="Android"),-1!=e.indexOf("like Mac")&&(t="iOS"),i=t}return i}},2121(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>l,modifier:()=>u})
var n=r(2294),i=r(2377),o=r(1130)
function a(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class s{constructor(e){a(this,"capabilities",(0,i.capabilities)("3.22")),this.owner=e}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,r){const n=function(e,t){const r=e
return r.element=t,r}(e,t)
n.instance.modify(t,r.positional,r.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier({instance:e}){(0,o.destroy)(e)}}class l{constructor(e,t){(0,n.setOwner)(this,e)}modify(e,t,r){}}(0,i.setModifierManager)(e=>new s(e),l)
const c=new class{constructor(){a(this,"capabilities",(0,i.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,r){const n=function(e,t){const r=e
return r.element=t,r}(e,t),{positional:i,named:o}=r,a=e.instance(t,i,o)
"function"==typeof a&&(n.teardown=a)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const r=e.instance(e.element,t.positional,t.named)
"function"==typeof r&&(e.teardown=r)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}getDebugName(e){return e.instance.toString()}getDebugInstance(e){return e}}
function u(e,t){return e.toString=()=>t?.name||e.name,(0,i.setModifierManager)(()=>c,e)}},1822(e,t,r){"use strict"
function n(e,t,r){return(t="symbol"==typeof(n=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e
var n}function i(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function o(e,t,r,n,i){var o={}
return Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}r.d(t,{_:()=>o,a:()=>i,b:()=>n})},9005(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>d})
var n,i,o,a=r(1822),s=r(2735),l=r(336),c=r.n(l),u=r(4666)
let d=(n=(0,s.service)("page-title"),i=class extends(c()){constructor(e){super(e),(0,a.a)(this,"tokens",o,this),(0,a.b)(this,"tokenId",(0,u.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const r={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(r),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},o=(0,a._)(i.prototype,"tokens",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)},4558(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>b})
var n,i,o,a,s,l=r(1822),c=r(1223),u=r(2735),d=r.n(u),f=r(9553),p=r(1603)
const h="undefined"!=typeof FastBoot,g="routeDidChange",m=["separator","prepend","replace"]
let b=(n=(0,u.service)("router"),i=(0,u.service)("-document"),o=class extends(d()){constructor(e){if(super(e),(0,l.a)(this,"router",a,this),(0,l.a)(this,"document",s,this),(0,l.b)(this,"tokens",[]),(0,l.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,l.b)(this,"scheduleTitleUpdate",()=>{(0,c.scheduleOnce)("afterRender",this,this._updateTitle)}),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const r=e.resolveRegistration("config:environment")
"object"==typeof(t=r)&&null!==t&&"pageTitle"in t&&m.forEach(e=>{if(!(0,f.isEmpty)(r.pageTitle[e])){const t=r.pageTitle[e]
this._defaultConfig[e]=t}})}var t
this.router.on(g,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,r=this._defaultConfig.prepend,n=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=r&&(e.prepend=r),null==e.replace&&null!=n&&(e.replace=n)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const r=this.tokens.indexOf(t),n=[...this.tokens],i=t.previous
return e.previous=i,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),n.splice(r,1,e),void(this.tokens=n)}const r=this.tokens.slice(-1)[0]
r&&(e.previous=r??null,r.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:r,previous:n}=t
r&&(r.previous=n),n&&(n.next=r),t.previous=t.next=null
const i=[...this.tokens]
i.splice(i.indexOf(t),1),this.tokens=i}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const r=[]
for(;t--;){const n=e[t]
if(n){if(n.replace){r.unshift(n)
break}r.unshift(n)}}return r}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,r=[]
const n=[r],i=[]
return e.forEach(e=>{e.front?i.unshift(e):e.prepend?(t&&(t=!1,r=[],n.push(r)),r.unshift(e)):(t||(t=!0,r=[],n.push(r)),r.push(e))}),i.concat(n.reduce((e,t)=>e.concat(t),[]))}toString(){const e=this.sortedTokens,t=[]
for(let r=0,n=e.length;r<n;r++){const i=e[r]
i&&i.title&&(t.push(i.title),r+1<n&&t.push(i.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(g,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
h?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){h||(0,p.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find(t=>t.id===e)}updateFastbootTitle(e){if(!h)return
const t=this.document.head,r=t.childNodes
for(let o=0;o<r.length;o++){const e=r[o]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const n=this.document.createElement("title"),i=this.document.createTextNode(e)
n.appendChild(i),t.appendChild(n)}titleDidUpdate(e){}},a=(0,l._)(o.prototype,"router",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=(0,l._)(o.prototype,"document",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o)},2809(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>a})
var n=r(336),i=r.n(n),o=r(1603)
class a extends(i()){constructor(...e){var t,r,n
super(...e),t=this,n=!1,(r=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(r="didRun"))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}compute(e,t){const[r,...n]=e;(0,o.assert)(`\`{{did-insert-helper}}\` expects a callback function as the first parameter. You provided: ${r}`,"function"==typeof r),this.didRun||(this.didRun=!0,r(n,t))}}},9265(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>a})
var n=r(336),i=r.n(n),o=r(1603)
class a extends(i()){constructor(...e){var t,r,n
super(...e),t=this,n=!1,(r=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(r="didRun"))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}compute(e,t){const[r,...n]=e
if((0,o.assert)(`\`{{did-update-helper}}\` expects a callback function as the first parameter. You provided: ${r}`,"function"==typeof r),!this.didRun)return this.didRun=!0,e.forEach(()=>{}),void Object.values(t)
r(n,t)}}},4635(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>s})
var n=r(336),i=r.n(n),o=r(1603)
function a(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class s extends(i()){constructor(...e){super(...e),a(this,"callback",void 0),a(this,"named",void 0),a(this,"positional",void 0)}compute(e,t){const[r,...n]=e;(0,o.assert)(`\`{{will-destroy-helper}}\` expects a function as the first parameter. You provided: ${r}`,"function"==typeof r),this.callback=r,this.named=t,this.positional=n}willDestroy(){this.callback&&this.positional&&this.named&&this.callback(this.positional,this.named),super.willDestroy()}}},9848(e,t,r){"use strict"
r.r(t),r.d(t,{ModuleRegistry:()=>m,default:()=>b})
class n{constructor(e,t,r){this.limit=e,this.func=t,this.store=r,this.size=0,this.misses=0,this.hits=0,this.store=r||new Map}get(e){let t=this.store.get(e)
return this.store.has(e)?(this.hits++,this.store.get(e)):(this.misses++,t=this.set(e,this.func(e)),t)}set(e,t){return this.limit>this.size&&(this.size++,this.store.set(e,t)),t}purge(){this.store.clear(),this.size=0,this.hits=0,this.misses=0}}const i=/[ _]/g,o=new n(1e3,e=>{return(t=e,h.get(t)).replace(i,"-")
var t}),a=/^(\-|_)+(.)?/,s=/(.)(\-|\_|\.|\s)+(.)?/g,l=/(^|\/|\.)([a-z])/g,c=new n(1e3,e=>{const t=(e,t,r)=>r?`_${r.toUpperCase()}`:"",r=(e,t,r,n)=>t+(n?n.toUpperCase():""),n=e.split("/")
for(let i=0;i<n.length;i++)n[i]=n[i].replace(a,t).replace(s,r)
return n.join("/").replace(l,e=>e.toUpperCase())}),u=/([a-z\d])([A-Z]+)/g,d=/\-|\s+/g,f=new n(1e3,e=>e.replace(u,"$1_$2").replace(d,"_").toLowerCase()),p=/([a-z\d])([A-Z])/g,h=new n(1e3,e=>e.replace(p,"$1_$2").toLowerCase())
function g(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class m{constructor(e){this._entries=e||globalThis.requirejs.entries}moduleNames(){return Object.keys(this._entries)}has(e){return e in this._entries}get(...e){return globalThis.require(...e)}}class b{static create(e){return new this(e)}static withModules(e){var t
return g(t=class extends(this){},"explicitModules",e),t}constructor(e){if(g(this,"moduleBasedResolver",!0),g(this,"_deprecatedPodModulePrefix",!1),g(this,"_normalizeCache",Object.create(null)),g(this,"moduleNameLookupPatterns",[this.podBasedModuleName,this.podBasedComponentsInSubdir,this.mainModuleName,this.defaultModuleName,this.nestedColocationComponentModuleName]),Object.assign(this,e),!this._moduleRegistry){let e=this.constructor.explicitModules
e?this._moduleRegistry={moduleNames:()=>Object.keys(e),has:t=>Boolean(e[t]),get:t=>e[t],addModules(t){e=Object.assign({},e,t)}}:(void 0===globalThis.requirejs.entries&&(globalThis.requirejs.entries=globalThis.requirejs._eak_seen),this._moduleRegistry=new m)}this.pluralizedTypes=this.pluralizedTypes||Object.create(null),this.pluralizedTypes.config||(this.pluralizedTypes.config="config")}makeToString(e,t){return this.namespace.modulePrefix+"@"+t+":"}shouldWrapInClassFactory(){return!1}parseName(e){if(!0===e.parsedName)return e
let t,r,n,i=e.split("@")
if(3===i.length){if(0===i[0].length){t=`@${i[1]}`
let e=i[2].split(":")
r=e[0],n=e[1]}else t=`@${i[1]}`,r=i[0].slice(0,-1),n=i[2]
"template:components"===r&&(n=`components/${n}`,r="template")}else if(2===i.length){let e=i[0].split(":")
if(2===e.length)0===e[1].length?(r=e[0],n=`@${i[1]}`):(t=e[1],r=e[0],n=i[1])
else{let e=i[1].split(":")
t=i[0],r=e[0],n=e[1]}"template"===r&&0===t.lastIndexOf("components/",0)&&(n=`components/${n}`,t=t.slice(11))}else i=e.split(":"),r=i[0],n=i[1]
let o=n,a=this.namespace
return{parsedName:!0,fullName:e,prefix:t||this.prefix({type:r}),type:r,fullNameWithoutType:o,name:n,root:a,resolveMethodName:"resolve"+(s=r,c.get(s))}
var s}resolveOther(e){y("`modulePrefix` must be defined",this.namespace.modulePrefix)
let t=this.findModuleName(e)
if(t){let n=this._extractDefaultExport(t,e)
if(void 0===n)throw new Error(` Expected to find: '${e.fullName}' within '${t}' but got 'undefined'. Did you forget to 'export default' within '${t}'?`)
return this.shouldWrapInClassFactory(n,e)&&(r=n,n={create:e=>"function"==typeof r.extend?r.extend(e):r}),n}var r}normalize(e){return this._normalizeCache[e]||(this._normalizeCache[e]=this._normalize(e))}resolve(e){if("resolver:current"===e)return{create:()=>this}
let t,r=this.parseName(e),n=r.resolveMethodName
return"function"==typeof this[n]&&(t=this[n](r)),null==t&&(t=this.resolveOther(r)),t}addModules(e){if(!this._moduleRegistry.addModules)throw new Error("addModules is only supported when your Resolver has been configured to use static modules via Resolver.withModules()")
this._moduleRegistry.addModules(e)}_normalize(e){let t=e.split(":")
if(t.length>1){let e=t[0]
return"component"===e||"helper"===e||"modifier"===e||"template"===e&&0===t[1].indexOf("components/")?e+":"+t[1].replace(/_/g,"-"):e+":"+(r=t[1].replace(/\./g,"/"),o.get(r))}return e
var r}pluralize(e){return this.pluralizedTypes[e]||(this.pluralizedTypes[e]=e+"s")}podBasedLookupWithPrefix(e,t){let r=t.fullNameWithoutType
return"template"===t.type&&(r=r.replace(/^components\//,"")),e+"/"+r+"/"+t.type}podBasedModuleName(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
return this.podBasedLookupWithPrefix(t,e)}podBasedComponentsInSubdir(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
if(t+="/components","component"===e.type||/^components/.test(e.fullNameWithoutType))return this.podBasedLookupWithPrefix(t,e)}resolveEngine(e){let t=e.fullNameWithoutType+"/engine"
if(this._moduleRegistry.has(t))return this._extractDefaultExport(t)}resolveRouteMap(e){let t=e.fullNameWithoutType,r=t+"/routes"
if(this._moduleRegistry.has(r)){let e=this._extractDefaultExport(r)
return y(`The route map for ${t} should be wrapped by 'buildRoutes' before exporting.`,e.isRouteMap),e}}resolveTemplate(e){return this.resolveOther(e)}mainModuleName(e){if("main"===e.fullNameWithoutType)return e.prefix+"/"+e.type}defaultModuleName(e){return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType}nestedColocationComponentModuleName(e){if("component"===e.type)return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType+"/index"}prefix(e){let t=this.namespace.modulePrefix
return this.namespace[e.type+"Prefix"]&&(t=this.namespace[e.type+"Prefix"]),t}findModuleName(e){let t,r=this.moduleNameLookupPatterns
for(let n=0,i=r.length;n<i;n++){let i=r[n].call(this,e)
if(i&&(i=this.chooseModuleName(i)),i&&this._moduleRegistry.has(i)&&(t=i),t)return t}}chooseModuleName(e){let t=(r=e,f.get(r))
var r
if(e!==t&&this._moduleRegistry.has(e)&&this._moduleRegistry.has(t))throw new TypeError(`Ambiguous module names: '${e}' and '${t}'`)
return this._moduleRegistry.has(e)?e:this._moduleRegistry.has(t)?t:void 0}knownForType(e){let t=this._moduleRegistry.moduleNames(),r=Object.create(null)
for(let n=0,i=t.length;n<i;n++){let i=t[n],o=this.translateToContainerFullname(e,i)
o&&(r[o]=!0)}return r}translateToContainerFullname(e,t){let r=this.prefix({type:e}),n=r+"/",i="/"+e,o=t.indexOf(n),a=t.indexOf(i)
if(0===o&&a===t.length-i.length&&t.length>n.length+i.length)return e+":"+t.slice(o+n.length,a)
let s=r+"/"+this.pluralize(e)+"/"
return 0===t.indexOf(s)&&t.length>s.length?e+":"+t.slice(s.length):void 0}_extractDefaultExport(e){let t=this._moduleRegistry.get(e,null,null,!0)
return t&&t.default&&(t=t.default),t}}function y(e,t){if(!t)throw new Error(e)}g(b,"moduleBasedResolver",!0)},4881(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>a})
var n=r(336),i=r.n(n),o=r(459)
class a extends(i()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!1===(0,o.A)(e[t]))return e[t]
return e[e.length-1]}}},8824(e,t,r){"use strict"
function n(e,t){return e===t}r.r(t),r.d(t,{default:()=>n})},6313(e,t,r){"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>t}r.r(t),r.d(t,{default:()=>n})},8490(e,t,r){"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>=t}r.r(t),r.d(t,{default:()=>n})},2198(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>i})
var n=r(1389)
function i(...e){return e.every(n.isArray)}},4970(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>n.isEmpty})
var n=r(9553)},1095(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>n.isEqual})
var n=r(9553)},5286(e,t,r){"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<t}r.r(t),r.d(t,{default:()=>n})},6367(e,t,r){"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<=t}r.r(t),r.d(t,{default:()=>n})},664(e,t,r){"use strict"
function n(e,t){return e!==t}r.r(t),r.d(t,{default:()=>n})},6693(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>i})
var n=r(459)
function i(...e){return e.every(e=>!(0,n.A)(e))}},9867(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>a})
var n=r(459),i=r(336),o=r.n(i)
class a extends(o()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!0===(0,n.A)(e[t]))return e[t]
return e[e.length-1]}}},8065(e,t,r){"use strict"
r.r(t),r.d(t,{default:()=>i})
var n=r(459)
function i(e,t){return(0,n.A)(e)!==(0,n.A)(t)}},459(e,t,r){"use strict"
r.d(t,{A:()=>i})
var n=r(1389)
function i(e){return"object"==typeof e&&e&&"isTruthy"in e&&"boolean"==typeof e.isTruthy?e.isTruthy:(0,n.isArray)(e)?0!==e.length:!!e}},5657(e,t,r){"use strict"
var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r)
var i=Object.getOwnPropertyDescriptor(t,r)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.decodeXML=t.decodeHTMLStrict=t.decodeHTMLAttribute=t.decodeHTML=t.determineBranch=t.EntityDecoder=t.DecodingMode=t.BinTrieFlags=t.fromCodePoint=t.replaceCodePoint=t.decodeCodePoint=t.xmlDecodeTree=t.htmlDecodeTree=void 0
var s=a(r(8304))
t.htmlDecodeTree=s.default
var l=a(r(2720))
t.xmlDecodeTree=l.default
var c=o(r(9675))
t.decodeCodePoint=c.default
var u,d,f,p,h=r(9675)
function g(e){return e>=u.ZERO&&e<=u.NINE}function m(e){return e>=u.UPPER_A&&e<=u.UPPER_F||e>=u.LOWER_A&&e<=u.LOWER_F}function b(e){return e===u.EQUALS||function(e){return e>=u.UPPER_A&&e<=u.UPPER_Z||e>=u.LOWER_A&&e<=u.LOWER_Z||g(e)}(e)}Object.defineProperty(t,"replaceCodePoint",{enumerable:!0,get:function(){return h.replaceCodePoint}}),Object.defineProperty(t,"fromCodePoint",{enumerable:!0,get:function(){return h.fromCodePoint}}),function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"}(u||(u={})),function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"}(d=t.BinTrieFlags||(t.BinTrieFlags={})),function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"}(f||(f={})),function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"}(p=t.DecodingMode||(t.DecodingMode={}))
var y=function(){function e(e,t,r){this.decodeTree=e,this.emitCodePoint=t,this.errors=r,this.state=f.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=p.Strict}return e.prototype.startEntity=function(e){this.decodeMode=e,this.state=f.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1},e.prototype.write=function(e,t){switch(this.state){case f.EntityStart:return e.charCodeAt(t)===u.NUM?(this.state=f.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=f.NamedEntity,this.stateNamedEntity(e,t))
case f.NumericStart:return this.stateNumericStart(e,t)
case f.NumericDecimal:return this.stateNumericDecimal(e,t)
case f.NumericHex:return this.stateNumericHex(e,t)
case f.NamedEntity:return this.stateNamedEntity(e,t)}},e.prototype.stateNumericStart=function(e,t){return t>=e.length?-1:(32|e.charCodeAt(t))===u.LOWER_X?(this.state=f.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=f.NumericDecimal,this.stateNumericDecimal(e,t))},e.prototype.addToNumericResult=function(e,t,r,n){if(t!==r){var i=r-t
this.result=this.result*Math.pow(n,i)+parseInt(e.substr(t,i),n),this.consumed+=i}},e.prototype.stateNumericHex=function(e,t){for(var r=t;t<e.length;){var n=e.charCodeAt(t)
if(!g(n)&&!m(n))return this.addToNumericResult(e,r,t,16),this.emitNumericEntity(n,3)
t+=1}return this.addToNumericResult(e,r,t,16),-1},e.prototype.stateNumericDecimal=function(e,t){for(var r=t;t<e.length;){var n=e.charCodeAt(t)
if(!g(n))return this.addToNumericResult(e,r,t,10),this.emitNumericEntity(n,2)
t+=1}return this.addToNumericResult(e,r,t,10),-1},e.prototype.emitNumericEntity=function(e,t){var r
if(this.consumed<=t)return null===(r=this.errors)||void 0===r||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0
if(e===u.SEMI)this.consumed+=1
else if(this.decodeMode===p.Strict)return 0
return this.emitCodePoint((0,c.replaceCodePoint)(this.result),this.consumed),this.errors&&(e!==u.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed},e.prototype.stateNamedEntity=function(e,t){for(var r=this.decodeTree,n=r[this.treeIndex],i=(n&d.VALUE_LENGTH)>>14;t<e.length;t++,this.excess++){var o=e.charCodeAt(t)
if(this.treeIndex=w(r,n,this.treeIndex+Math.max(1,i),o),this.treeIndex<0)return 0===this.result||this.decodeMode===p.Attribute&&(0===i||b(o))?0:this.emitNotTerminatedNamedEntity()
if(0!=(i=((n=r[this.treeIndex])&d.VALUE_LENGTH)>>14)){if(o===u.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess)
this.decodeMode!==p.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1},e.prototype.emitNotTerminatedNamedEntity=function(){var e,t=this.result,r=(this.decodeTree[t]&d.VALUE_LENGTH)>>14
return this.emitNamedEntityData(t,r,this.consumed),null===(e=this.errors)||void 0===e||e.missingSemicolonAfterCharacterReference(),this.consumed},e.prototype.emitNamedEntityData=function(e,t,r){var n=this.decodeTree
return this.emitCodePoint(1===t?n[e]&~d.VALUE_LENGTH:n[e+1],r),3===t&&this.emitCodePoint(n[e+2],r),r},e.prototype.end=function(){var e
switch(this.state){case f.NamedEntity:return 0===this.result||this.decodeMode===p.Attribute&&this.result!==this.treeIndex?0:this.emitNotTerminatedNamedEntity()
case f.NumericDecimal:return this.emitNumericEntity(0,2)
case f.NumericHex:return this.emitNumericEntity(0,3)
case f.NumericStart:return null===(e=this.errors)||void 0===e||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0
case f.EntityStart:return 0}},e}()
function v(e){var t="",r=new y(e,function(e){return t+=(0,c.fromCodePoint)(e)})
return function(e,n){for(var i=0,o=0;(o=e.indexOf("&",o))>=0;){t+=e.slice(i,o),r.startEntity(n)
var a=r.write(e,o+1)
if(a<0){i=o+r.end()
break}i=o+a,o=0===a?i+1:i}var s=t+e.slice(i)
return t="",s}}function w(e,t,r,n){var i=(t&d.BRANCH_LENGTH)>>7,o=t&d.JUMP_TABLE
if(0===i)return 0!==o&&n===o?r:-1
if(o){var a=n-o
return a<0||a>=i?-1:e[r+a]-1}for(var s=r,l=s+i-1;s<=l;){var c=s+l>>>1,u=e[c]
if(u<n)s=c+1
else{if(!(u>n))return e[c+i]
l=c-1}}return-1}t.EntityDecoder=y,t.determineBranch=w
var x=v(s.default),k=v(l.default)
t.decodeHTML=function(e,t){return void 0===t&&(t=p.Legacy),x(e,t)},t.decodeHTMLAttribute=function(e){return x(e,p.Attribute)},t.decodeHTMLStrict=function(e){return x(e,p.Strict)},t.decodeXML=function(e){return k(e,p.Strict)}},9675(e,t){"use strict"
var r
Object.defineProperty(t,"__esModule",{value:!0}),t.replaceCodePoint=t.fromCodePoint=void 0
var n=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]])
function i(e){var t
return e>=55296&&e<=57343||e>1114111?65533:null!==(t=n.get(e))&&void 0!==t?t:e}t.fromCodePoint=null!==(r=String.fromCodePoint)&&void 0!==r?r:function(e){var t=""
return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|1023&e),t+String.fromCharCode(e)},t.replaceCodePoint=i,t.default=function(e){return(0,t.fromCodePoint)(i(e))}},4481(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.encodeNonAsciiHTML=t.encodeHTML=void 0
var i=n(r(1089)),o=r(1740),a=/[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g
function s(e,t){for(var r,n="",a=0;null!==(r=e.exec(t));){var s=r.index
n+=t.substring(a,s)
var l=t.charCodeAt(s),c=i.default.get(l)
if("object"==typeof c){if(s+1<t.length){var u=t.charCodeAt(s+1),d="number"==typeof c.n?c.n===u?c.o:void 0:c.n.get(u)
if(void 0!==d){n+=d,a=e.lastIndex+=1
continue}}c=c.v}if(void 0!==c)n+=c,a=s+1
else{var f=(0,o.getCodePoint)(t,s)
n+="&#x".concat(f.toString(16),";"),a=e.lastIndex+=Number(f!==l)}}return n+t.substr(a)}t.encodeHTML=function(e){return s(a,e)},t.encodeNonAsciiHTML=function(e){return s(o.xmlReplacer,e)}},1740(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.escapeText=t.escapeAttribute=t.escapeUTF8=t.escape=t.encodeXML=t.getCodePoint=t.xmlReplacer=void 0,t.xmlReplacer=/["&'<>$\x80-\uFFFF]/g
var r=new Map([[34,"&quot;"],[38,"&amp;"],[39,"&apos;"],[60,"&lt;"],[62,"&gt;"]])
function n(e){for(var n,i="",o=0;null!==(n=t.xmlReplacer.exec(e));){var a=n.index,s=e.charCodeAt(a),l=r.get(s)
void 0!==l?(i+=e.substring(o,a)+l,o=a+1):(i+="".concat(e.substring(o,a),"&#x").concat((0,t.getCodePoint)(e,a).toString(16),";"),o=t.xmlReplacer.lastIndex+=Number(55296==(64512&s)))}return i+e.substr(o)}function i(e,t){return function(r){for(var n,i=0,o="";n=e.exec(r);)i!==n.index&&(o+=r.substring(i,n.index)),o+=t.get(n[0].charCodeAt(0)),i=n.index+1
return o+r.substring(i)}}t.getCodePoint=null!=String.prototype.codePointAt?function(e,t){return e.codePointAt(t)}:function(e,t){return 55296==(64512&e.charCodeAt(t))?1024*(e.charCodeAt(t)-55296)+e.charCodeAt(t+1)-56320+65536:e.charCodeAt(t)},t.encodeXML=n,t.escape=n,t.escapeUTF8=i(/[&<>'"]/g,r),t.escapeAttribute=i(/["&\u00A0]/g,new Map([[34,"&quot;"],[38,"&amp;"],[160,"&nbsp;"]])),t.escapeText=i(/[&<>\u00A0]/g,new Map([[38,"&amp;"],[60,"&lt;"],[62,"&gt;"],[160,"&nbsp;"]]))},8304(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(e){return e.charCodeAt(0)}))},2720(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Uint16Array("Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(e){return e.charCodeAt(0)}))},1089(e,t){"use strict"
function r(e){for(var t=1;t<e.length;t++)e[t][0]+=e[t-1][0]+1
return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=new Map(r([[9,"&Tab;"],[0,"&NewLine;"],[22,"&excl;"],[0,"&quot;"],[0,"&num;"],[0,"&dollar;"],[0,"&percnt;"],[0,"&amp;"],[0,"&apos;"],[0,"&lpar;"],[0,"&rpar;"],[0,"&ast;"],[0,"&plus;"],[0,"&comma;"],[1,"&period;"],[0,"&sol;"],[10,"&colon;"],[0,"&semi;"],[0,{v:"&lt;",n:8402,o:"&nvlt;"}],[0,{v:"&equals;",n:8421,o:"&bne;"}],[0,{v:"&gt;",n:8402,o:"&nvgt;"}],[0,"&quest;"],[0,"&commat;"],[26,"&lbrack;"],[0,"&bsol;"],[0,"&rbrack;"],[0,"&Hat;"],[0,"&lowbar;"],[0,"&DiacriticalGrave;"],[5,{n:106,o:"&fjlig;"}],[20,"&lbrace;"],[0,"&verbar;"],[0,"&rbrace;"],[34,"&nbsp;"],[0,"&iexcl;"],[0,"&cent;"],[0,"&pound;"],[0,"&curren;"],[0,"&yen;"],[0,"&brvbar;"],[0,"&sect;"],[0,"&die;"],[0,"&copy;"],[0,"&ordf;"],[0,"&laquo;"],[0,"&not;"],[0,"&shy;"],[0,"&circledR;"],[0,"&macr;"],[0,"&deg;"],[0,"&PlusMinus;"],[0,"&sup2;"],[0,"&sup3;"],[0,"&acute;"],[0,"&micro;"],[0,"&para;"],[0,"&centerdot;"],[0,"&cedil;"],[0,"&sup1;"],[0,"&ordm;"],[0,"&raquo;"],[0,"&frac14;"],[0,"&frac12;"],[0,"&frac34;"],[0,"&iquest;"],[0,"&Agrave;"],[0,"&Aacute;"],[0,"&Acirc;"],[0,"&Atilde;"],[0,"&Auml;"],[0,"&angst;"],[0,"&AElig;"],[0,"&Ccedil;"],[0,"&Egrave;"],[0,"&Eacute;"],[0,"&Ecirc;"],[0,"&Euml;"],[0,"&Igrave;"],[0,"&Iacute;"],[0,"&Icirc;"],[0,"&Iuml;"],[0,"&ETH;"],[0,"&Ntilde;"],[0,"&Ograve;"],[0,"&Oacute;"],[0,"&Ocirc;"],[0,"&Otilde;"],[0,"&Ouml;"],[0,"&times;"],[0,"&Oslash;"],[0,"&Ugrave;"],[0,"&Uacute;"],[0,"&Ucirc;"],[0,"&Uuml;"],[0,"&Yacute;"],[0,"&THORN;"],[0,"&szlig;"],[0,"&agrave;"],[0,"&aacute;"],[0,"&acirc;"],[0,"&atilde;"],[0,"&auml;"],[0,"&aring;"],[0,"&aelig;"],[0,"&ccedil;"],[0,"&egrave;"],[0,"&eacute;"],[0,"&ecirc;"],[0,"&euml;"],[0,"&igrave;"],[0,"&iacute;"],[0,"&icirc;"],[0,"&iuml;"],[0,"&eth;"],[0,"&ntilde;"],[0,"&ograve;"],[0,"&oacute;"],[0,"&ocirc;"],[0,"&otilde;"],[0,"&ouml;"],[0,"&div;"],[0,"&oslash;"],[0,"&ugrave;"],[0,"&uacute;"],[0,"&ucirc;"],[0,"&uuml;"],[0,"&yacute;"],[0,"&thorn;"],[0,"&yuml;"],[0,"&Amacr;"],[0,"&amacr;"],[0,"&Abreve;"],[0,"&abreve;"],[0,"&Aogon;"],[0,"&aogon;"],[0,"&Cacute;"],[0,"&cacute;"],[0,"&Ccirc;"],[0,"&ccirc;"],[0,"&Cdot;"],[0,"&cdot;"],[0,"&Ccaron;"],[0,"&ccaron;"],[0,"&Dcaron;"],[0,"&dcaron;"],[0,"&Dstrok;"],[0,"&dstrok;"],[0,"&Emacr;"],[0,"&emacr;"],[2,"&Edot;"],[0,"&edot;"],[0,"&Eogon;"],[0,"&eogon;"],[0,"&Ecaron;"],[0,"&ecaron;"],[0,"&Gcirc;"],[0,"&gcirc;"],[0,"&Gbreve;"],[0,"&gbreve;"],[0,"&Gdot;"],[0,"&gdot;"],[0,"&Gcedil;"],[1,"&Hcirc;"],[0,"&hcirc;"],[0,"&Hstrok;"],[0,"&hstrok;"],[0,"&Itilde;"],[0,"&itilde;"],[0,"&Imacr;"],[0,"&imacr;"],[2,"&Iogon;"],[0,"&iogon;"],[0,"&Idot;"],[0,"&imath;"],[0,"&IJlig;"],[0,"&ijlig;"],[0,"&Jcirc;"],[0,"&jcirc;"],[0,"&Kcedil;"],[0,"&kcedil;"],[0,"&kgreen;"],[0,"&Lacute;"],[0,"&lacute;"],[0,"&Lcedil;"],[0,"&lcedil;"],[0,"&Lcaron;"],[0,"&lcaron;"],[0,"&Lmidot;"],[0,"&lmidot;"],[0,"&Lstrok;"],[0,"&lstrok;"],[0,"&Nacute;"],[0,"&nacute;"],[0,"&Ncedil;"],[0,"&ncedil;"],[0,"&Ncaron;"],[0,"&ncaron;"],[0,"&napos;"],[0,"&ENG;"],[0,"&eng;"],[0,"&Omacr;"],[0,"&omacr;"],[2,"&Odblac;"],[0,"&odblac;"],[0,"&OElig;"],[0,"&oelig;"],[0,"&Racute;"],[0,"&racute;"],[0,"&Rcedil;"],[0,"&rcedil;"],[0,"&Rcaron;"],[0,"&rcaron;"],[0,"&Sacute;"],[0,"&sacute;"],[0,"&Scirc;"],[0,"&scirc;"],[0,"&Scedil;"],[0,"&scedil;"],[0,"&Scaron;"],[0,"&scaron;"],[0,"&Tcedil;"],[0,"&tcedil;"],[0,"&Tcaron;"],[0,"&tcaron;"],[0,"&Tstrok;"],[0,"&tstrok;"],[0,"&Utilde;"],[0,"&utilde;"],[0,"&Umacr;"],[0,"&umacr;"],[0,"&Ubreve;"],[0,"&ubreve;"],[0,"&Uring;"],[0,"&uring;"],[0,"&Udblac;"],[0,"&udblac;"],[0,"&Uogon;"],[0,"&uogon;"],[0,"&Wcirc;"],[0,"&wcirc;"],[0,"&Ycirc;"],[0,"&ycirc;"],[0,"&Yuml;"],[0,"&Zacute;"],[0,"&zacute;"],[0,"&Zdot;"],[0,"&zdot;"],[0,"&Zcaron;"],[0,"&zcaron;"],[19,"&fnof;"],[34,"&imped;"],[63,"&gacute;"],[65,"&jmath;"],[142,"&circ;"],[0,"&caron;"],[16,"&breve;"],[0,"&DiacriticalDot;"],[0,"&ring;"],[0,"&ogon;"],[0,"&DiacriticalTilde;"],[0,"&dblac;"],[51,"&DownBreve;"],[127,"&Alpha;"],[0,"&Beta;"],[0,"&Gamma;"],[0,"&Delta;"],[0,"&Epsilon;"],[0,"&Zeta;"],[0,"&Eta;"],[0,"&Theta;"],[0,"&Iota;"],[0,"&Kappa;"],[0,"&Lambda;"],[0,"&Mu;"],[0,"&Nu;"],[0,"&Xi;"],[0,"&Omicron;"],[0,"&Pi;"],[0,"&Rho;"],[1,"&Sigma;"],[0,"&Tau;"],[0,"&Upsilon;"],[0,"&Phi;"],[0,"&Chi;"],[0,"&Psi;"],[0,"&ohm;"],[7,"&alpha;"],[0,"&beta;"],[0,"&gamma;"],[0,"&delta;"],[0,"&epsi;"],[0,"&zeta;"],[0,"&eta;"],[0,"&theta;"],[0,"&iota;"],[0,"&kappa;"],[0,"&lambda;"],[0,"&mu;"],[0,"&nu;"],[0,"&xi;"],[0,"&omicron;"],[0,"&pi;"],[0,"&rho;"],[0,"&sigmaf;"],[0,"&sigma;"],[0,"&tau;"],[0,"&upsi;"],[0,"&phi;"],[0,"&chi;"],[0,"&psi;"],[0,"&omega;"],[7,"&thetasym;"],[0,"&Upsi;"],[2,"&phiv;"],[0,"&piv;"],[5,"&Gammad;"],[0,"&digamma;"],[18,"&kappav;"],[0,"&rhov;"],[3,"&epsiv;"],[0,"&backepsilon;"],[10,"&IOcy;"],[0,"&DJcy;"],[0,"&GJcy;"],[0,"&Jukcy;"],[0,"&DScy;"],[0,"&Iukcy;"],[0,"&YIcy;"],[0,"&Jsercy;"],[0,"&LJcy;"],[0,"&NJcy;"],[0,"&TSHcy;"],[0,"&KJcy;"],[1,"&Ubrcy;"],[0,"&DZcy;"],[0,"&Acy;"],[0,"&Bcy;"],[0,"&Vcy;"],[0,"&Gcy;"],[0,"&Dcy;"],[0,"&IEcy;"],[0,"&ZHcy;"],[0,"&Zcy;"],[0,"&Icy;"],[0,"&Jcy;"],[0,"&Kcy;"],[0,"&Lcy;"],[0,"&Mcy;"],[0,"&Ncy;"],[0,"&Ocy;"],[0,"&Pcy;"],[0,"&Rcy;"],[0,"&Scy;"],[0,"&Tcy;"],[0,"&Ucy;"],[0,"&Fcy;"],[0,"&KHcy;"],[0,"&TScy;"],[0,"&CHcy;"],[0,"&SHcy;"],[0,"&SHCHcy;"],[0,"&HARDcy;"],[0,"&Ycy;"],[0,"&SOFTcy;"],[0,"&Ecy;"],[0,"&YUcy;"],[0,"&YAcy;"],[0,"&acy;"],[0,"&bcy;"],[0,"&vcy;"],[0,"&gcy;"],[0,"&dcy;"],[0,"&iecy;"],[0,"&zhcy;"],[0,"&zcy;"],[0,"&icy;"],[0,"&jcy;"],[0,"&kcy;"],[0,"&lcy;"],[0,"&mcy;"],[0,"&ncy;"],[0,"&ocy;"],[0,"&pcy;"],[0,"&rcy;"],[0,"&scy;"],[0,"&tcy;"],[0,"&ucy;"],[0,"&fcy;"],[0,"&khcy;"],[0,"&tscy;"],[0,"&chcy;"],[0,"&shcy;"],[0,"&shchcy;"],[0,"&hardcy;"],[0,"&ycy;"],[0,"&softcy;"],[0,"&ecy;"],[0,"&yucy;"],[0,"&yacy;"],[1,"&iocy;"],[0,"&djcy;"],[0,"&gjcy;"],[0,"&jukcy;"],[0,"&dscy;"],[0,"&iukcy;"],[0,"&yicy;"],[0,"&jsercy;"],[0,"&ljcy;"],[0,"&njcy;"],[0,"&tshcy;"],[0,"&kjcy;"],[1,"&ubrcy;"],[0,"&dzcy;"],[7074,"&ensp;"],[0,"&emsp;"],[0,"&emsp13;"],[0,"&emsp14;"],[1,"&numsp;"],[0,"&puncsp;"],[0,"&ThinSpace;"],[0,"&hairsp;"],[0,"&NegativeMediumSpace;"],[0,"&zwnj;"],[0,"&zwj;"],[0,"&lrm;"],[0,"&rlm;"],[0,"&dash;"],[2,"&ndash;"],[0,"&mdash;"],[0,"&horbar;"],[0,"&Verbar;"],[1,"&lsquo;"],[0,"&CloseCurlyQuote;"],[0,"&lsquor;"],[1,"&ldquo;"],[0,"&CloseCurlyDoubleQuote;"],[0,"&bdquo;"],[1,"&dagger;"],[0,"&Dagger;"],[0,"&bull;"],[2,"&nldr;"],[0,"&hellip;"],[9,"&permil;"],[0,"&pertenk;"],[0,"&prime;"],[0,"&Prime;"],[0,"&tprime;"],[0,"&backprime;"],[3,"&lsaquo;"],[0,"&rsaquo;"],[3,"&oline;"],[2,"&caret;"],[1,"&hybull;"],[0,"&frasl;"],[10,"&bsemi;"],[7,"&qprime;"],[7,{v:"&MediumSpace;",n:8202,o:"&ThickSpace;"}],[0,"&NoBreak;"],[0,"&af;"],[0,"&InvisibleTimes;"],[0,"&ic;"],[72,"&euro;"],[46,"&tdot;"],[0,"&DotDot;"],[37,"&complexes;"],[2,"&incare;"],[4,"&gscr;"],[0,"&hamilt;"],[0,"&Hfr;"],[0,"&Hopf;"],[0,"&planckh;"],[0,"&hbar;"],[0,"&imagline;"],[0,"&Ifr;"],[0,"&lagran;"],[0,"&ell;"],[1,"&naturals;"],[0,"&numero;"],[0,"&copysr;"],[0,"&weierp;"],[0,"&Popf;"],[0,"&Qopf;"],[0,"&realine;"],[0,"&real;"],[0,"&reals;"],[0,"&rx;"],[3,"&trade;"],[1,"&integers;"],[2,"&mho;"],[0,"&zeetrf;"],[0,"&iiota;"],[2,"&bernou;"],[0,"&Cayleys;"],[1,"&escr;"],[0,"&Escr;"],[0,"&Fouriertrf;"],[1,"&Mellintrf;"],[0,"&order;"],[0,"&alefsym;"],[0,"&beth;"],[0,"&gimel;"],[0,"&daleth;"],[12,"&CapitalDifferentialD;"],[0,"&dd;"],[0,"&ee;"],[0,"&ii;"],[10,"&frac13;"],[0,"&frac23;"],[0,"&frac15;"],[0,"&frac25;"],[0,"&frac35;"],[0,"&frac45;"],[0,"&frac16;"],[0,"&frac56;"],[0,"&frac18;"],[0,"&frac38;"],[0,"&frac58;"],[0,"&frac78;"],[49,"&larr;"],[0,"&ShortUpArrow;"],[0,"&rarr;"],[0,"&darr;"],[0,"&harr;"],[0,"&updownarrow;"],[0,"&nwarr;"],[0,"&nearr;"],[0,"&LowerRightArrow;"],[0,"&LowerLeftArrow;"],[0,"&nlarr;"],[0,"&nrarr;"],[1,{v:"&rarrw;",n:824,o:"&nrarrw;"}],[0,"&Larr;"],[0,"&Uarr;"],[0,"&Rarr;"],[0,"&Darr;"],[0,"&larrtl;"],[0,"&rarrtl;"],[0,"&LeftTeeArrow;"],[0,"&mapstoup;"],[0,"&map;"],[0,"&DownTeeArrow;"],[1,"&hookleftarrow;"],[0,"&hookrightarrow;"],[0,"&larrlp;"],[0,"&looparrowright;"],[0,"&harrw;"],[0,"&nharr;"],[1,"&lsh;"],[0,"&rsh;"],[0,"&ldsh;"],[0,"&rdsh;"],[1,"&crarr;"],[0,"&cularr;"],[0,"&curarr;"],[2,"&circlearrowleft;"],[0,"&circlearrowright;"],[0,"&leftharpoonup;"],[0,"&DownLeftVector;"],[0,"&RightUpVector;"],[0,"&LeftUpVector;"],[0,"&rharu;"],[0,"&DownRightVector;"],[0,"&dharr;"],[0,"&dharl;"],[0,"&RightArrowLeftArrow;"],[0,"&udarr;"],[0,"&LeftArrowRightArrow;"],[0,"&leftleftarrows;"],[0,"&upuparrows;"],[0,"&rightrightarrows;"],[0,"&ddarr;"],[0,"&leftrightharpoons;"],[0,"&Equilibrium;"],[0,"&nlArr;"],[0,"&nhArr;"],[0,"&nrArr;"],[0,"&DoubleLeftArrow;"],[0,"&DoubleUpArrow;"],[0,"&DoubleRightArrow;"],[0,"&dArr;"],[0,"&DoubleLeftRightArrow;"],[0,"&DoubleUpDownArrow;"],[0,"&nwArr;"],[0,"&neArr;"],[0,"&seArr;"],[0,"&swArr;"],[0,"&lAarr;"],[0,"&rAarr;"],[1,"&zigrarr;"],[6,"&larrb;"],[0,"&rarrb;"],[15,"&DownArrowUpArrow;"],[7,"&loarr;"],[0,"&roarr;"],[0,"&hoarr;"],[0,"&forall;"],[0,"&comp;"],[0,{v:"&part;",n:824,o:"&npart;"}],[0,"&exist;"],[0,"&nexist;"],[0,"&empty;"],[1,"&Del;"],[0,"&Element;"],[0,"&NotElement;"],[1,"&ni;"],[0,"&notni;"],[2,"&prod;"],[0,"&coprod;"],[0,"&sum;"],[0,"&minus;"],[0,"&MinusPlus;"],[0,"&dotplus;"],[1,"&Backslash;"],[0,"&lowast;"],[0,"&compfn;"],[1,"&radic;"],[2,"&prop;"],[0,"&infin;"],[0,"&angrt;"],[0,{v:"&ang;",n:8402,o:"&nang;"}],[0,"&angmsd;"],[0,"&angsph;"],[0,"&mid;"],[0,"&nmid;"],[0,"&DoubleVerticalBar;"],[0,"&NotDoubleVerticalBar;"],[0,"&and;"],[0,"&or;"],[0,{v:"&cap;",n:65024,o:"&caps;"}],[0,{v:"&cup;",n:65024,o:"&cups;"}],[0,"&int;"],[0,"&Int;"],[0,"&iiint;"],[0,"&conint;"],[0,"&Conint;"],[0,"&Cconint;"],[0,"&cwint;"],[0,"&ClockwiseContourIntegral;"],[0,"&awconint;"],[0,"&there4;"],[0,"&becaus;"],[0,"&ratio;"],[0,"&Colon;"],[0,"&dotminus;"],[1,"&mDDot;"],[0,"&homtht;"],[0,{v:"&sim;",n:8402,o:"&nvsim;"}],[0,{v:"&backsim;",n:817,o:"&race;"}],[0,{v:"&ac;",n:819,o:"&acE;"}],[0,"&acd;"],[0,"&VerticalTilde;"],[0,"&NotTilde;"],[0,{v:"&eqsim;",n:824,o:"&nesim;"}],[0,"&sime;"],[0,"&NotTildeEqual;"],[0,"&cong;"],[0,"&simne;"],[0,"&ncong;"],[0,"&ap;"],[0,"&nap;"],[0,"&ape;"],[0,{v:"&apid;",n:824,o:"&napid;"}],[0,"&backcong;"],[0,{v:"&asympeq;",n:8402,o:"&nvap;"}],[0,{v:"&bump;",n:824,o:"&nbump;"}],[0,{v:"&bumpe;",n:824,o:"&nbumpe;"}],[0,{v:"&doteq;",n:824,o:"&nedot;"}],[0,"&doteqdot;"],[0,"&efDot;"],[0,"&erDot;"],[0,"&Assign;"],[0,"&ecolon;"],[0,"&ecir;"],[0,"&circeq;"],[1,"&wedgeq;"],[0,"&veeeq;"],[1,"&triangleq;"],[2,"&equest;"],[0,"&ne;"],[0,{v:"&Congruent;",n:8421,o:"&bnequiv;"}],[0,"&nequiv;"],[1,{v:"&le;",n:8402,o:"&nvle;"}],[0,{v:"&ge;",n:8402,o:"&nvge;"}],[0,{v:"&lE;",n:824,o:"&nlE;"}],[0,{v:"&gE;",n:824,o:"&ngE;"}],[0,{v:"&lnE;",n:65024,o:"&lvertneqq;"}],[0,{v:"&gnE;",n:65024,o:"&gvertneqq;"}],[0,{v:"&ll;",n:new Map(r([[824,"&nLtv;"],[7577,"&nLt;"]]))}],[0,{v:"&gg;",n:new Map(r([[824,"&nGtv;"],[7577,"&nGt;"]]))}],[0,"&between;"],[0,"&NotCupCap;"],[0,"&nless;"],[0,"&ngt;"],[0,"&nle;"],[0,"&nge;"],[0,"&lesssim;"],[0,"&GreaterTilde;"],[0,"&nlsim;"],[0,"&ngsim;"],[0,"&LessGreater;"],[0,"&gl;"],[0,"&NotLessGreater;"],[0,"&NotGreaterLess;"],[0,"&pr;"],[0,"&sc;"],[0,"&prcue;"],[0,"&sccue;"],[0,"&PrecedesTilde;"],[0,{v:"&scsim;",n:824,o:"&NotSucceedsTilde;"}],[0,"&NotPrecedes;"],[0,"&NotSucceeds;"],[0,{v:"&sub;",n:8402,o:"&NotSubset;"}],[0,{v:"&sup;",n:8402,o:"&NotSuperset;"}],[0,"&nsub;"],[0,"&nsup;"],[0,"&sube;"],[0,"&supe;"],[0,"&NotSubsetEqual;"],[0,"&NotSupersetEqual;"],[0,{v:"&subne;",n:65024,o:"&varsubsetneq;"}],[0,{v:"&supne;",n:65024,o:"&varsupsetneq;"}],[1,"&cupdot;"],[0,"&UnionPlus;"],[0,{v:"&sqsub;",n:824,o:"&NotSquareSubset;"}],[0,{v:"&sqsup;",n:824,o:"&NotSquareSuperset;"}],[0,"&sqsube;"],[0,"&sqsupe;"],[0,{v:"&sqcap;",n:65024,o:"&sqcaps;"}],[0,{v:"&sqcup;",n:65024,o:"&sqcups;"}],[0,"&CirclePlus;"],[0,"&CircleMinus;"],[0,"&CircleTimes;"],[0,"&osol;"],[0,"&CircleDot;"],[0,"&circledcirc;"],[0,"&circledast;"],[1,"&circleddash;"],[0,"&boxplus;"],[0,"&boxminus;"],[0,"&boxtimes;"],[0,"&dotsquare;"],[0,"&RightTee;"],[0,"&dashv;"],[0,"&DownTee;"],[0,"&bot;"],[1,"&models;"],[0,"&DoubleRightTee;"],[0,"&Vdash;"],[0,"&Vvdash;"],[0,"&VDash;"],[0,"&nvdash;"],[0,"&nvDash;"],[0,"&nVdash;"],[0,"&nVDash;"],[0,"&prurel;"],[1,"&LeftTriangle;"],[0,"&RightTriangle;"],[0,{v:"&LeftTriangleEqual;",n:8402,o:"&nvltrie;"}],[0,{v:"&RightTriangleEqual;",n:8402,o:"&nvrtrie;"}],[0,"&origof;"],[0,"&imof;"],[0,"&multimap;"],[0,"&hercon;"],[0,"&intcal;"],[0,"&veebar;"],[1,"&barvee;"],[0,"&angrtvb;"],[0,"&lrtri;"],[0,"&bigwedge;"],[0,"&bigvee;"],[0,"&bigcap;"],[0,"&bigcup;"],[0,"&diam;"],[0,"&sdot;"],[0,"&sstarf;"],[0,"&divideontimes;"],[0,"&bowtie;"],[0,"&ltimes;"],[0,"&rtimes;"],[0,"&leftthreetimes;"],[0,"&rightthreetimes;"],[0,"&backsimeq;"],[0,"&curlyvee;"],[0,"&curlywedge;"],[0,"&Sub;"],[0,"&Sup;"],[0,"&Cap;"],[0,"&Cup;"],[0,"&fork;"],[0,"&epar;"],[0,"&lessdot;"],[0,"&gtdot;"],[0,{v:"&Ll;",n:824,o:"&nLl;"}],[0,{v:"&Gg;",n:824,o:"&nGg;"}],[0,{v:"&leg;",n:65024,o:"&lesg;"}],[0,{v:"&gel;",n:65024,o:"&gesl;"}],[2,"&cuepr;"],[0,"&cuesc;"],[0,"&NotPrecedesSlantEqual;"],[0,"&NotSucceedsSlantEqual;"],[0,"&NotSquareSubsetEqual;"],[0,"&NotSquareSupersetEqual;"],[2,"&lnsim;"],[0,"&gnsim;"],[0,"&precnsim;"],[0,"&scnsim;"],[0,"&nltri;"],[0,"&NotRightTriangle;"],[0,"&nltrie;"],[0,"&NotRightTriangleEqual;"],[0,"&vellip;"],[0,"&ctdot;"],[0,"&utdot;"],[0,"&dtdot;"],[0,"&disin;"],[0,"&isinsv;"],[0,"&isins;"],[0,{v:"&isindot;",n:824,o:"&notindot;"}],[0,"&notinvc;"],[0,"&notinvb;"],[1,{v:"&isinE;",n:824,o:"&notinE;"}],[0,"&nisd;"],[0,"&xnis;"],[0,"&nis;"],[0,"&notnivc;"],[0,"&notnivb;"],[6,"&barwed;"],[0,"&Barwed;"],[1,"&lceil;"],[0,"&rceil;"],[0,"&LeftFloor;"],[0,"&rfloor;"],[0,"&drcrop;"],[0,"&dlcrop;"],[0,"&urcrop;"],[0,"&ulcrop;"],[0,"&bnot;"],[1,"&profline;"],[0,"&profsurf;"],[1,"&telrec;"],[0,"&target;"],[5,"&ulcorn;"],[0,"&urcorn;"],[0,"&dlcorn;"],[0,"&drcorn;"],[2,"&frown;"],[0,"&smile;"],[9,"&cylcty;"],[0,"&profalar;"],[7,"&topbot;"],[6,"&ovbar;"],[1,"&solbar;"],[60,"&angzarr;"],[51,"&lmoustache;"],[0,"&rmoustache;"],[2,"&OverBracket;"],[0,"&bbrk;"],[0,"&bbrktbrk;"],[37,"&OverParenthesis;"],[0,"&UnderParenthesis;"],[0,"&OverBrace;"],[0,"&UnderBrace;"],[2,"&trpezium;"],[4,"&elinters;"],[59,"&blank;"],[164,"&circledS;"],[55,"&boxh;"],[1,"&boxv;"],[9,"&boxdr;"],[3,"&boxdl;"],[3,"&boxur;"],[3,"&boxul;"],[3,"&boxvr;"],[7,"&boxvl;"],[7,"&boxhd;"],[7,"&boxhu;"],[7,"&boxvh;"],[19,"&boxH;"],[0,"&boxV;"],[0,"&boxdR;"],[0,"&boxDr;"],[0,"&boxDR;"],[0,"&boxdL;"],[0,"&boxDl;"],[0,"&boxDL;"],[0,"&boxuR;"],[0,"&boxUr;"],[0,"&boxUR;"],[0,"&boxuL;"],[0,"&boxUl;"],[0,"&boxUL;"],[0,"&boxvR;"],[0,"&boxVr;"],[0,"&boxVR;"],[0,"&boxvL;"],[0,"&boxVl;"],[0,"&boxVL;"],[0,"&boxHd;"],[0,"&boxhD;"],[0,"&boxHD;"],[0,"&boxHu;"],[0,"&boxhU;"],[0,"&boxHU;"],[0,"&boxvH;"],[0,"&boxVh;"],[0,"&boxVH;"],[19,"&uhblk;"],[3,"&lhblk;"],[3,"&block;"],[8,"&blk14;"],[0,"&blk12;"],[0,"&blk34;"],[13,"&square;"],[8,"&blacksquare;"],[0,"&EmptyVerySmallSquare;"],[1,"&rect;"],[0,"&marker;"],[2,"&fltns;"],[1,"&bigtriangleup;"],[0,"&blacktriangle;"],[0,"&triangle;"],[2,"&blacktriangleright;"],[0,"&rtri;"],[3,"&bigtriangledown;"],[0,"&blacktriangledown;"],[0,"&dtri;"],[2,"&blacktriangleleft;"],[0,"&ltri;"],[6,"&loz;"],[0,"&cir;"],[32,"&tridot;"],[2,"&bigcirc;"],[8,"&ultri;"],[0,"&urtri;"],[0,"&lltri;"],[0,"&EmptySmallSquare;"],[0,"&FilledSmallSquare;"],[8,"&bigstar;"],[0,"&star;"],[7,"&phone;"],[49,"&female;"],[1,"&male;"],[29,"&spades;"],[2,"&clubs;"],[1,"&hearts;"],[0,"&diamondsuit;"],[3,"&sung;"],[2,"&flat;"],[0,"&natural;"],[0,"&sharp;"],[163,"&check;"],[3,"&cross;"],[8,"&malt;"],[21,"&sext;"],[33,"&VerticalSeparator;"],[25,"&lbbrk;"],[0,"&rbbrk;"],[84,"&bsolhsub;"],[0,"&suphsol;"],[28,"&LeftDoubleBracket;"],[0,"&RightDoubleBracket;"],[0,"&lang;"],[0,"&rang;"],[0,"&Lang;"],[0,"&Rang;"],[0,"&loang;"],[0,"&roang;"],[7,"&longleftarrow;"],[0,"&longrightarrow;"],[0,"&longleftrightarrow;"],[0,"&DoubleLongLeftArrow;"],[0,"&DoubleLongRightArrow;"],[0,"&DoubleLongLeftRightArrow;"],[1,"&longmapsto;"],[2,"&dzigrarr;"],[258,"&nvlArr;"],[0,"&nvrArr;"],[0,"&nvHarr;"],[0,"&Map;"],[6,"&lbarr;"],[0,"&bkarow;"],[0,"&lBarr;"],[0,"&dbkarow;"],[0,"&drbkarow;"],[0,"&DDotrahd;"],[0,"&UpArrowBar;"],[0,"&DownArrowBar;"],[2,"&Rarrtl;"],[2,"&latail;"],[0,"&ratail;"],[0,"&lAtail;"],[0,"&rAtail;"],[0,"&larrfs;"],[0,"&rarrfs;"],[0,"&larrbfs;"],[0,"&rarrbfs;"],[2,"&nwarhk;"],[0,"&nearhk;"],[0,"&hksearow;"],[0,"&hkswarow;"],[0,"&nwnear;"],[0,"&nesear;"],[0,"&seswar;"],[0,"&swnwar;"],[8,{v:"&rarrc;",n:824,o:"&nrarrc;"}],[1,"&cudarrr;"],[0,"&ldca;"],[0,"&rdca;"],[0,"&cudarrl;"],[0,"&larrpl;"],[2,"&curarrm;"],[0,"&cularrp;"],[7,"&rarrpl;"],[2,"&harrcir;"],[0,"&Uarrocir;"],[0,"&lurdshar;"],[0,"&ldrushar;"],[2,"&LeftRightVector;"],[0,"&RightUpDownVector;"],[0,"&DownLeftRightVector;"],[0,"&LeftUpDownVector;"],[0,"&LeftVectorBar;"],[0,"&RightVectorBar;"],[0,"&RightUpVectorBar;"],[0,"&RightDownVectorBar;"],[0,"&DownLeftVectorBar;"],[0,"&DownRightVectorBar;"],[0,"&LeftUpVectorBar;"],[0,"&LeftDownVectorBar;"],[0,"&LeftTeeVector;"],[0,"&RightTeeVector;"],[0,"&RightUpTeeVector;"],[0,"&RightDownTeeVector;"],[0,"&DownLeftTeeVector;"],[0,"&DownRightTeeVector;"],[0,"&LeftUpTeeVector;"],[0,"&LeftDownTeeVector;"],[0,"&lHar;"],[0,"&uHar;"],[0,"&rHar;"],[0,"&dHar;"],[0,"&luruhar;"],[0,"&ldrdhar;"],[0,"&ruluhar;"],[0,"&rdldhar;"],[0,"&lharul;"],[0,"&llhard;"],[0,"&rharul;"],[0,"&lrhard;"],[0,"&udhar;"],[0,"&duhar;"],[0,"&RoundImplies;"],[0,"&erarr;"],[0,"&simrarr;"],[0,"&larrsim;"],[0,"&rarrsim;"],[0,"&rarrap;"],[0,"&ltlarr;"],[1,"&gtrarr;"],[0,"&subrarr;"],[1,"&suplarr;"],[0,"&lfisht;"],[0,"&rfisht;"],[0,"&ufisht;"],[0,"&dfisht;"],[5,"&lopar;"],[0,"&ropar;"],[4,"&lbrke;"],[0,"&rbrke;"],[0,"&lbrkslu;"],[0,"&rbrksld;"],[0,"&lbrksld;"],[0,"&rbrkslu;"],[0,"&langd;"],[0,"&rangd;"],[0,"&lparlt;"],[0,"&rpargt;"],[0,"&gtlPar;"],[0,"&ltrPar;"],[3,"&vzigzag;"],[1,"&vangrt;"],[0,"&angrtvbd;"],[6,"&ange;"],[0,"&range;"],[0,"&dwangle;"],[0,"&uwangle;"],[0,"&angmsdaa;"],[0,"&angmsdab;"],[0,"&angmsdac;"],[0,"&angmsdad;"],[0,"&angmsdae;"],[0,"&angmsdaf;"],[0,"&angmsdag;"],[0,"&angmsdah;"],[0,"&bemptyv;"],[0,"&demptyv;"],[0,"&cemptyv;"],[0,"&raemptyv;"],[0,"&laemptyv;"],[0,"&ohbar;"],[0,"&omid;"],[0,"&opar;"],[1,"&operp;"],[1,"&olcross;"],[0,"&odsold;"],[1,"&olcir;"],[0,"&ofcir;"],[0,"&olt;"],[0,"&ogt;"],[0,"&cirscir;"],[0,"&cirE;"],[0,"&solb;"],[0,"&bsolb;"],[3,"&boxbox;"],[3,"&trisb;"],[0,"&rtriltri;"],[0,{v:"&LeftTriangleBar;",n:824,o:"&NotLeftTriangleBar;"}],[0,{v:"&RightTriangleBar;",n:824,o:"&NotRightTriangleBar;"}],[11,"&iinfin;"],[0,"&infintie;"],[0,"&nvinfin;"],[4,"&eparsl;"],[0,"&smeparsl;"],[0,"&eqvparsl;"],[5,"&blacklozenge;"],[8,"&RuleDelayed;"],[1,"&dsol;"],[9,"&bigodot;"],[0,"&bigoplus;"],[0,"&bigotimes;"],[1,"&biguplus;"],[1,"&bigsqcup;"],[5,"&iiiint;"],[0,"&fpartint;"],[2,"&cirfnint;"],[0,"&awint;"],[0,"&rppolint;"],[0,"&scpolint;"],[0,"&npolint;"],[0,"&pointint;"],[0,"&quatint;"],[0,"&intlarhk;"],[10,"&pluscir;"],[0,"&plusacir;"],[0,"&simplus;"],[0,"&plusdu;"],[0,"&plussim;"],[0,"&plustwo;"],[1,"&mcomma;"],[0,"&minusdu;"],[2,"&loplus;"],[0,"&roplus;"],[0,"&Cross;"],[0,"&timesd;"],[0,"&timesbar;"],[1,"&smashp;"],[0,"&lotimes;"],[0,"&rotimes;"],[0,"&otimesas;"],[0,"&Otimes;"],[0,"&odiv;"],[0,"&triplus;"],[0,"&triminus;"],[0,"&tritime;"],[0,"&intprod;"],[2,"&amalg;"],[0,"&capdot;"],[1,"&ncup;"],[0,"&ncap;"],[0,"&capand;"],[0,"&cupor;"],[0,"&cupcap;"],[0,"&capcup;"],[0,"&cupbrcap;"],[0,"&capbrcup;"],[0,"&cupcup;"],[0,"&capcap;"],[0,"&ccups;"],[0,"&ccaps;"],[2,"&ccupssm;"],[2,"&And;"],[0,"&Or;"],[0,"&andand;"],[0,"&oror;"],[0,"&orslope;"],[0,"&andslope;"],[1,"&andv;"],[0,"&orv;"],[0,"&andd;"],[0,"&ord;"],[1,"&wedbar;"],[6,"&sdote;"],[3,"&simdot;"],[2,{v:"&congdot;",n:824,o:"&ncongdot;"}],[0,"&easter;"],[0,"&apacir;"],[0,{v:"&apE;",n:824,o:"&napE;"}],[0,"&eplus;"],[0,"&pluse;"],[0,"&Esim;"],[0,"&Colone;"],[0,"&Equal;"],[1,"&ddotseq;"],[0,"&equivDD;"],[0,"&ltcir;"],[0,"&gtcir;"],[0,"&ltquest;"],[0,"&gtquest;"],[0,{v:"&leqslant;",n:824,o:"&nleqslant;"}],[0,{v:"&geqslant;",n:824,o:"&ngeqslant;"}],[0,"&lesdot;"],[0,"&gesdot;"],[0,"&lesdoto;"],[0,"&gesdoto;"],[0,"&lesdotor;"],[0,"&gesdotol;"],[0,"&lap;"],[0,"&gap;"],[0,"&lne;"],[0,"&gne;"],[0,"&lnap;"],[0,"&gnap;"],[0,"&lEg;"],[0,"&gEl;"],[0,"&lsime;"],[0,"&gsime;"],[0,"&lsimg;"],[0,"&gsiml;"],[0,"&lgE;"],[0,"&glE;"],[0,"&lesges;"],[0,"&gesles;"],[0,"&els;"],[0,"&egs;"],[0,"&elsdot;"],[0,"&egsdot;"],[0,"&el;"],[0,"&eg;"],[2,"&siml;"],[0,"&simg;"],[0,"&simlE;"],[0,"&simgE;"],[0,{v:"&LessLess;",n:824,o:"&NotNestedLessLess;"}],[0,{v:"&GreaterGreater;",n:824,o:"&NotNestedGreaterGreater;"}],[1,"&glj;"],[0,"&gla;"],[0,"&ltcc;"],[0,"&gtcc;"],[0,"&lescc;"],[0,"&gescc;"],[0,"&smt;"],[0,"&lat;"],[0,{v:"&smte;",n:65024,o:"&smtes;"}],[0,{v:"&late;",n:65024,o:"&lates;"}],[0,"&bumpE;"],[0,{v:"&PrecedesEqual;",n:824,o:"&NotPrecedesEqual;"}],[0,{v:"&sce;",n:824,o:"&NotSucceedsEqual;"}],[2,"&prE;"],[0,"&scE;"],[0,"&precneqq;"],[0,"&scnE;"],[0,"&prap;"],[0,"&scap;"],[0,"&precnapprox;"],[0,"&scnap;"],[0,"&Pr;"],[0,"&Sc;"],[0,"&subdot;"],[0,"&supdot;"],[0,"&subplus;"],[0,"&supplus;"],[0,"&submult;"],[0,"&supmult;"],[0,"&subedot;"],[0,"&supedot;"],[0,{v:"&subE;",n:824,o:"&nsubE;"}],[0,{v:"&supE;",n:824,o:"&nsupE;"}],[0,"&subsim;"],[0,"&supsim;"],[2,{v:"&subnE;",n:65024,o:"&varsubsetneqq;"}],[0,{v:"&supnE;",n:65024,o:"&varsupsetneqq;"}],[2,"&csub;"],[0,"&csup;"],[0,"&csube;"],[0,"&csupe;"],[0,"&subsup;"],[0,"&supsub;"],[0,"&subsub;"],[0,"&supsup;"],[0,"&suphsub;"],[0,"&supdsub;"],[0,"&forkv;"],[0,"&topfork;"],[0,"&mlcp;"],[8,"&Dashv;"],[1,"&Vdashl;"],[0,"&Barv;"],[0,"&vBar;"],[0,"&vBarv;"],[1,"&Vbar;"],[0,"&Not;"],[0,"&bNot;"],[0,"&rnmid;"],[0,"&cirmid;"],[0,"&midcir;"],[0,"&topcir;"],[0,"&nhpar;"],[0,"&parsim;"],[9,{v:"&parsl;",n:8421,o:"&nparsl;"}],[44343,{n:new Map(r([[56476,"&Ascr;"],[1,"&Cscr;"],[0,"&Dscr;"],[2,"&Gscr;"],[2,"&Jscr;"],[0,"&Kscr;"],[2,"&Nscr;"],[0,"&Oscr;"],[0,"&Pscr;"],[0,"&Qscr;"],[1,"&Sscr;"],[0,"&Tscr;"],[0,"&Uscr;"],[0,"&Vscr;"],[0,"&Wscr;"],[0,"&Xscr;"],[0,"&Yscr;"],[0,"&Zscr;"],[0,"&ascr;"],[0,"&bscr;"],[0,"&cscr;"],[0,"&dscr;"],[1,"&fscr;"],[1,"&hscr;"],[0,"&iscr;"],[0,"&jscr;"],[0,"&kscr;"],[0,"&lscr;"],[0,"&mscr;"],[0,"&nscr;"],[1,"&pscr;"],[0,"&qscr;"],[0,"&rscr;"],[0,"&sscr;"],[0,"&tscr;"],[0,"&uscr;"],[0,"&vscr;"],[0,"&wscr;"],[0,"&xscr;"],[0,"&yscr;"],[0,"&zscr;"],[52,"&Afr;"],[0,"&Bfr;"],[1,"&Dfr;"],[0,"&Efr;"],[0,"&Ffr;"],[0,"&Gfr;"],[2,"&Jfr;"],[0,"&Kfr;"],[0,"&Lfr;"],[0,"&Mfr;"],[0,"&Nfr;"],[0,"&Ofr;"],[0,"&Pfr;"],[0,"&Qfr;"],[1,"&Sfr;"],[0,"&Tfr;"],[0,"&Ufr;"],[0,"&Vfr;"],[0,"&Wfr;"],[0,"&Xfr;"],[0,"&Yfr;"],[1,"&afr;"],[0,"&bfr;"],[0,"&cfr;"],[0,"&dfr;"],[0,"&efr;"],[0,"&ffr;"],[0,"&gfr;"],[0,"&hfr;"],[0,"&ifr;"],[0,"&jfr;"],[0,"&kfr;"],[0,"&lfr;"],[0,"&mfr;"],[0,"&nfr;"],[0,"&ofr;"],[0,"&pfr;"],[0,"&qfr;"],[0,"&rfr;"],[0,"&sfr;"],[0,"&tfr;"],[0,"&ufr;"],[0,"&vfr;"],[0,"&wfr;"],[0,"&xfr;"],[0,"&yfr;"],[0,"&zfr;"],[0,"&Aopf;"],[0,"&Bopf;"],[1,"&Dopf;"],[0,"&Eopf;"],[0,"&Fopf;"],[0,"&Gopf;"],[1,"&Iopf;"],[0,"&Jopf;"],[0,"&Kopf;"],[0,"&Lopf;"],[0,"&Mopf;"],[1,"&Oopf;"],[3,"&Sopf;"],[0,"&Topf;"],[0,"&Uopf;"],[0,"&Vopf;"],[0,"&Wopf;"],[0,"&Xopf;"],[0,"&Yopf;"],[1,"&aopf;"],[0,"&bopf;"],[0,"&copf;"],[0,"&dopf;"],[0,"&eopf;"],[0,"&fopf;"],[0,"&gopf;"],[0,"&hopf;"],[0,"&iopf;"],[0,"&jopf;"],[0,"&kopf;"],[0,"&lopf;"],[0,"&mopf;"],[0,"&nopf;"],[0,"&oopf;"],[0,"&popf;"],[0,"&qopf;"],[0,"&ropf;"],[0,"&sopf;"],[0,"&topf;"],[0,"&uopf;"],[0,"&vopf;"],[0,"&wopf;"],[0,"&xopf;"],[0,"&yopf;"],[0,"&zopf;"]]))}],[8906,"&fflig;"],[0,"&filig;"],[0,"&fllig;"],[0,"&ffilig;"],[0,"&ffllig;"]]))},4375(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.decodeXMLStrict=t.decodeHTML5Strict=t.decodeHTML4Strict=t.decodeHTML5=t.decodeHTML4=t.decodeHTMLAttribute=t.decodeHTMLStrict=t.decodeHTML=t.decodeXML=t.DecodingMode=t.EntityDecoder=t.encodeHTML5=t.encodeHTML4=t.encodeNonAsciiHTML=t.encodeHTML=t.escapeText=t.escapeAttribute=t.escapeUTF8=t.escape=t.encodeXML=t.encode=t.decodeStrict=t.decode=t.EncodingMode=t.EntityLevel=void 0
var n,i,o=r(5657),a=r(4481),s=r(1740)
function l(e,t){if(void 0===t&&(t=n.XML),("number"==typeof t?t:t.level)===n.HTML){var r="object"==typeof t?t.mode:void 0
return(0,o.decodeHTML)(e,r)}return(0,o.decodeXML)(e)}!function(e){e[e.XML=0]="XML",e[e.HTML=1]="HTML"}(n=t.EntityLevel||(t.EntityLevel={})),function(e){e[e.UTF8=0]="UTF8",e[e.ASCII=1]="ASCII",e[e.Extensive=2]="Extensive",e[e.Attribute=3]="Attribute",e[e.Text=4]="Text"}(i=t.EncodingMode||(t.EncodingMode={})),t.decode=l,t.decodeStrict=function(e,t){var r
void 0===t&&(t=n.XML)
var i="number"==typeof t?{level:t}:t
return null!==(r=i.mode)&&void 0!==r||(i.mode=o.DecodingMode.Strict),l(e,i)},t.encode=function(e,t){void 0===t&&(t=n.XML)
var r="number"==typeof t?{level:t}:t
return r.mode===i.UTF8?(0,s.escapeUTF8)(e):r.mode===i.Attribute?(0,s.escapeAttribute)(e):r.mode===i.Text?(0,s.escapeText)(e):r.level===n.HTML?r.mode===i.ASCII?(0,a.encodeNonAsciiHTML)(e):(0,a.encodeHTML)(e):(0,s.encodeXML)(e)}
var c=r(1740)
Object.defineProperty(t,"encodeXML",{enumerable:!0,get:function(){return c.encodeXML}}),Object.defineProperty(t,"escape",{enumerable:!0,get:function(){return c.escape}}),Object.defineProperty(t,"escapeUTF8",{enumerable:!0,get:function(){return c.escapeUTF8}}),Object.defineProperty(t,"escapeAttribute",{enumerable:!0,get:function(){return c.escapeAttribute}}),Object.defineProperty(t,"escapeText",{enumerable:!0,get:function(){return c.escapeText}})
var u=r(4481)
Object.defineProperty(t,"encodeHTML",{enumerable:!0,get:function(){return u.encodeHTML}}),Object.defineProperty(t,"encodeNonAsciiHTML",{enumerable:!0,get:function(){return u.encodeNonAsciiHTML}}),Object.defineProperty(t,"encodeHTML4",{enumerable:!0,get:function(){return u.encodeHTML}}),Object.defineProperty(t,"encodeHTML5",{enumerable:!0,get:function(){return u.encodeHTML}})
var d=r(5657)
Object.defineProperty(t,"EntityDecoder",{enumerable:!0,get:function(){return d.EntityDecoder}}),Object.defineProperty(t,"DecodingMode",{enumerable:!0,get:function(){return d.DecodingMode}}),Object.defineProperty(t,"decodeXML",{enumerable:!0,get:function(){return d.decodeXML}}),Object.defineProperty(t,"decodeHTML",{enumerable:!0,get:function(){return d.decodeHTML}}),Object.defineProperty(t,"decodeHTMLStrict",{enumerable:!0,get:function(){return d.decodeHTMLStrict}}),Object.defineProperty(t,"decodeHTMLAttribute",{enumerable:!0,get:function(){return d.decodeHTMLAttribute}}),Object.defineProperty(t,"decodeHTML4",{enumerable:!0,get:function(){return d.decodeHTML}}),Object.defineProperty(t,"decodeHTML5",{enumerable:!0,get:function(){return d.decodeHTML}}),Object.defineProperty(t,"decodeHTML4Strict",{enumerable:!0,get:function(){return d.decodeHTMLStrict}}),Object.defineProperty(t,"decodeHTML5Strict",{enumerable:!0,get:function(){return d.decodeHTMLStrict}}),Object.defineProperty(t,"decodeXMLStrict",{enumerable:!0,get:function(){return d.decodeXML}})},5354(e,t,r){var n
e=r.nmd(e),function(){var i=(e&&e.exports,"object"==typeof global&&global)
i.global!==i&&i.window
var o=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,a=/[\x01-\x7F]/g,s=/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,l=/<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,c={"­":"shy","‌":"zwnj","‍":"zwj","‎":"lrm","⁣":"ic","⁢":"it","⁡":"af","‏":"rlm","​":"ZeroWidthSpace","⁠":"NoBreak","̑":"DownBreve","⃛":"tdot","⃜":"DotDot","\t":"Tab","\n":"NewLine"," ":"puncsp"," ":"MediumSpace"," ":"thinsp"," ":"hairsp"," ":"emsp13"," ":"ensp"," ":"emsp14"," ":"emsp"," ":"numsp"," ":"nbsp","  ":"ThickSpace","‾":"oline",_:"lowbar","‐":"dash","–":"ndash","—":"mdash","―":"horbar",",":"comma",";":"semi","⁏":"bsemi",":":"colon","⩴":"Colone","!":"excl","¡":"iexcl","?":"quest","¿":"iquest",".":"period","‥":"nldr","…":"mldr","·":"middot","'":"apos","‘":"lsquo","’":"rsquo","‚":"sbquo","‹":"lsaquo","›":"rsaquo",'"':"quot","“":"ldquo","”":"rdquo","„":"bdquo","«":"laquo","»":"raquo","(":"lpar",")":"rpar","[":"lsqb","]":"rsqb","{":"lcub","}":"rcub","⌈":"lceil","⌉":"rceil","⌊":"lfloor","⌋":"rfloor","⦅":"lopar","⦆":"ropar","⦋":"lbrke","⦌":"rbrke","⦍":"lbrkslu","⦎":"rbrksld","⦏":"lbrksld","⦐":"rbrkslu","⦑":"langd","⦒":"rangd","⦓":"lparlt","⦔":"rpargt","⦕":"gtlPar","⦖":"ltrPar","⟦":"lobrk","⟧":"robrk","⟨":"lang","⟩":"rang","⟪":"Lang","⟫":"Rang","⟬":"loang","⟭":"roang","❲":"lbbrk","❳":"rbbrk","‖":"Vert","§":"sect","¶":"para","@":"commat","*":"ast","/":"sol",undefined:null,"&":"amp","#":"num","%":"percnt","‰":"permil","‱":"pertenk","†":"dagger","‡":"Dagger","•":"bull","⁃":"hybull","′":"prime","″":"Prime","‴":"tprime","⁗":"qprime","‵":"bprime","⁁":"caret","`":"grave","´":"acute","˜":"tilde","^":"Hat","¯":"macr","˘":"breve","˙":"dot","¨":"die","˚":"ring","˝":"dblac","¸":"cedil","˛":"ogon","ˆ":"circ","ˇ":"caron","°":"deg","©":"copy","®":"reg","℗":"copysr","℘":"wp","℞":"rx","℧":"mho","℩":"iiota","←":"larr","↚":"nlarr","→":"rarr","↛":"nrarr","↑":"uarr","↓":"darr","↔":"harr","↮":"nharr","↕":"varr","↖":"nwarr","↗":"nearr","↘":"searr","↙":"swarr","↝":"rarrw","↝̸":"nrarrw","↞":"Larr","↟":"Uarr","↠":"Rarr","↡":"Darr","↢":"larrtl","↣":"rarrtl","↤":"mapstoleft","↥":"mapstoup","↦":"map","↧":"mapstodown","↩":"larrhk","↪":"rarrhk","↫":"larrlp","↬":"rarrlp","↭":"harrw","↰":"lsh","↱":"rsh","↲":"ldsh","↳":"rdsh","↵":"crarr","↶":"cularr","↷":"curarr","↺":"olarr","↻":"orarr","↼":"lharu","↽":"lhard","↾":"uharr","↿":"uharl","⇀":"rharu","⇁":"rhard","⇂":"dharr","⇃":"dharl","⇄":"rlarr","⇅":"udarr","⇆":"lrarr","⇇":"llarr","⇈":"uuarr","⇉":"rrarr","⇊":"ddarr","⇋":"lrhar","⇌":"rlhar","⇐":"lArr","⇍":"nlArr","⇑":"uArr","⇒":"rArr","⇏":"nrArr","⇓":"dArr","⇔":"iff","⇎":"nhArr","⇕":"vArr","⇖":"nwArr","⇗":"neArr","⇘":"seArr","⇙":"swArr","⇚":"lAarr","⇛":"rAarr","⇝":"zigrarr","⇤":"larrb","⇥":"rarrb","⇵":"duarr","⇽":"loarr","⇾":"roarr","⇿":"hoarr","∀":"forall","∁":"comp","∂":"part","∂̸":"npart","∃":"exist","∄":"nexist","∅":"empty","∇":"Del","∈":"in","∉":"notin","∋":"ni","∌":"notni","϶":"bepsi","∏":"prod","∐":"coprod","∑":"sum","+":"plus","±":"pm","÷":"div","×":"times","<":"lt","≮":"nlt","<⃒":"nvlt","=":"equals","≠":"ne","=⃥":"bne","⩵":"Equal",">":"gt","≯":"ngt",">⃒":"nvgt","¬":"not","|":"vert","¦":"brvbar","−":"minus","∓":"mp","∔":"plusdo","⁄":"frasl","∖":"setmn","∗":"lowast","∘":"compfn","√":"Sqrt","∝":"prop","∞":"infin","∟":"angrt","∠":"ang","∠⃒":"nang","∡":"angmsd","∢":"angsph","∣":"mid","∤":"nmid","∥":"par","∦":"npar","∧":"and","∨":"or","∩":"cap","∩︀":"caps","∪":"cup","∪︀":"cups","∫":"int","∬":"Int","∭":"tint","⨌":"qint","∮":"oint","∯":"Conint","∰":"Cconint","∱":"cwint","∲":"cwconint","∳":"awconint","∴":"there4","∵":"becaus","∶":"ratio","∷":"Colon","∸":"minusd","∺":"mDDot","∻":"homtht","∼":"sim","≁":"nsim","∼⃒":"nvsim","∽":"bsim","∽̱":"race","∾":"ac","∾̳":"acE","∿":"acd","≀":"wr","≂":"esim","≂̸":"nesim","≃":"sime","≄":"nsime","≅":"cong","≇":"ncong","≆":"simne","≈":"ap","≉":"nap","≊":"ape","≋":"apid","≋̸":"napid","≌":"bcong","≍":"CupCap","≭":"NotCupCap","≍⃒":"nvap","≎":"bump","≎̸":"nbump","≏":"bumpe","≏̸":"nbumpe","≐":"doteq","≐̸":"nedot","≑":"eDot","≒":"efDot","≓":"erDot","≔":"colone","≕":"ecolon","≖":"ecir","≗":"cire","≙":"wedgeq","≚":"veeeq","≜":"trie","≟":"equest","≡":"equiv","≢":"nequiv","≡⃥":"bnequiv","≤":"le","≰":"nle","≤⃒":"nvle","≥":"ge","≱":"nge","≥⃒":"nvge","≦":"lE","≦̸":"nlE","≧":"gE","≧̸":"ngE","≨︀":"lvnE","≨":"lnE","≩":"gnE","≩︀":"gvnE","≪":"ll","≪̸":"nLtv","≪⃒":"nLt","≫":"gg","≫̸":"nGtv","≫⃒":"nGt","≬":"twixt","≲":"lsim","≴":"nlsim","≳":"gsim","≵":"ngsim","≶":"lg","≸":"ntlg","≷":"gl","≹":"ntgl","≺":"pr","⊀":"npr","≻":"sc","⊁":"nsc","≼":"prcue","⋠":"nprcue","≽":"sccue","⋡":"nsccue","≾":"prsim","≿":"scsim","≿̸":"NotSucceedsTilde","⊂":"sub","⊄":"nsub","⊂⃒":"vnsub","⊃":"sup","⊅":"nsup","⊃⃒":"vnsup","⊆":"sube","⊈":"nsube","⊇":"supe","⊉":"nsupe","⊊︀":"vsubne","⊊":"subne","⊋︀":"vsupne","⊋":"supne","⊍":"cupdot","⊎":"uplus","⊏":"sqsub","⊏̸":"NotSquareSubset","⊐":"sqsup","⊐̸":"NotSquareSuperset","⊑":"sqsube","⋢":"nsqsube","⊒":"sqsupe","⋣":"nsqsupe","⊓":"sqcap","⊓︀":"sqcaps","⊔":"sqcup","⊔︀":"sqcups","⊕":"oplus","⊖":"ominus","⊗":"otimes","⊘":"osol","⊙":"odot","⊚":"ocir","⊛":"oast","⊝":"odash","⊞":"plusb","⊟":"minusb","⊠":"timesb","⊡":"sdotb","⊢":"vdash","⊬":"nvdash","⊣":"dashv","⊤":"top","⊥":"bot","⊧":"models","⊨":"vDash","⊭":"nvDash","⊩":"Vdash","⊮":"nVdash","⊪":"Vvdash","⊫":"VDash","⊯":"nVDash","⊰":"prurel","⊲":"vltri","⋪":"nltri","⊳":"vrtri","⋫":"nrtri","⊴":"ltrie","⋬":"nltrie","⊴⃒":"nvltrie","⊵":"rtrie","⋭":"nrtrie","⊵⃒":"nvrtrie","⊶":"origof","⊷":"imof","⊸":"mumap","⊹":"hercon","⊺":"intcal","⊻":"veebar","⊽":"barvee","⊾":"angrtvb","⊿":"lrtri","⋀":"Wedge","⋁":"Vee","⋂":"xcap","⋃":"xcup","⋄":"diam","⋅":"sdot","⋆":"Star","⋇":"divonx","⋈":"bowtie","⋉":"ltimes","⋊":"rtimes","⋋":"lthree","⋌":"rthree","⋍":"bsime","⋎":"cuvee","⋏":"cuwed","⋐":"Sub","⋑":"Sup","⋒":"Cap","⋓":"Cup","⋔":"fork","⋕":"epar","⋖":"ltdot","⋗":"gtdot","⋘":"Ll","⋘̸":"nLl","⋙":"Gg","⋙̸":"nGg","⋚︀":"lesg","⋚":"leg","⋛":"gel","⋛︀":"gesl","⋞":"cuepr","⋟":"cuesc","⋦":"lnsim","⋧":"gnsim","⋨":"prnsim","⋩":"scnsim","⋮":"vellip","⋯":"ctdot","⋰":"utdot","⋱":"dtdot","⋲":"disin","⋳":"isinsv","⋴":"isins","⋵":"isindot","⋵̸":"notindot","⋶":"notinvc","⋷":"notinvb","⋹":"isinE","⋹̸":"notinE","⋺":"nisd","⋻":"xnis","⋼":"nis","⋽":"notnivc","⋾":"notnivb","⌅":"barwed","⌆":"Barwed","⌌":"drcrop","⌍":"dlcrop","⌎":"urcrop","⌏":"ulcrop","⌐":"bnot","⌒":"profline","⌓":"profsurf","⌕":"telrec","⌖":"target","⌜":"ulcorn","⌝":"urcorn","⌞":"dlcorn","⌟":"drcorn","⌢":"frown","⌣":"smile","⌭":"cylcty","⌮":"profalar","⌶":"topbot","⌽":"ovbar","⌿":"solbar","⍼":"angzarr","⎰":"lmoust","⎱":"rmoust","⎴":"tbrk","⎵":"bbrk","⎶":"bbrktbrk","⏜":"OverParenthesis","⏝":"UnderParenthesis","⏞":"OverBrace","⏟":"UnderBrace","⏢":"trpezium","⏧":"elinters","␣":"blank","─":"boxh","│":"boxv","┌":"boxdr","┐":"boxdl","└":"boxur","┘":"boxul","├":"boxvr","┤":"boxvl","┬":"boxhd","┴":"boxhu","┼":"boxvh","═":"boxH","║":"boxV","╒":"boxdR","╓":"boxDr","╔":"boxDR","╕":"boxdL","╖":"boxDl","╗":"boxDL","╘":"boxuR","╙":"boxUr","╚":"boxUR","╛":"boxuL","╜":"boxUl","╝":"boxUL","╞":"boxvR","╟":"boxVr","╠":"boxVR","╡":"boxvL","╢":"boxVl","╣":"boxVL","╤":"boxHd","╥":"boxhD","╦":"boxHD","╧":"boxHu","╨":"boxhU","╩":"boxHU","╪":"boxvH","╫":"boxVh","╬":"boxVH","▀":"uhblk","▄":"lhblk","█":"block","░":"blk14","▒":"blk12","▓":"blk34","□":"squ","▪":"squf","▫":"EmptyVerySmallSquare","▭":"rect","▮":"marker","▱":"fltns","△":"xutri","▴":"utrif","▵":"utri","▸":"rtrif","▹":"rtri","▽":"xdtri","▾":"dtrif","▿":"dtri","◂":"ltrif","◃":"ltri","◊":"loz","○":"cir","◬":"tridot","◯":"xcirc","◸":"ultri","◹":"urtri","◺":"lltri","◻":"EmptySmallSquare","◼":"FilledSmallSquare","★":"starf","☆":"star","☎":"phone","♀":"female","♂":"male","♠":"spades","♣":"clubs","♥":"hearts","♦":"diams","♪":"sung","✓":"check","✗":"cross","✠":"malt","✶":"sext","❘":"VerticalSeparator","⟈":"bsolhsub","⟉":"suphsol","⟵":"xlarr","⟶":"xrarr","⟷":"xharr","⟸":"xlArr","⟹":"xrArr","⟺":"xhArr","⟼":"xmap","⟿":"dzigrarr","⤂":"nvlArr","⤃":"nvrArr","⤄":"nvHarr","⤅":"Map","⤌":"lbarr","⤍":"rbarr","⤎":"lBarr","⤏":"rBarr","⤐":"RBarr","⤑":"DDotrahd","⤒":"UpArrowBar","⤓":"DownArrowBar","⤖":"Rarrtl","⤙":"latail","⤚":"ratail","⤛":"lAtail","⤜":"rAtail","⤝":"larrfs","⤞":"rarrfs","⤟":"larrbfs","⤠":"rarrbfs","⤣":"nwarhk","⤤":"nearhk","⤥":"searhk","⤦":"swarhk","⤧":"nwnear","⤨":"toea","⤩":"tosa","⤪":"swnwar","⤳":"rarrc","⤳̸":"nrarrc","⤵":"cudarrr","⤶":"ldca","⤷":"rdca","⤸":"cudarrl","⤹":"larrpl","⤼":"curarrm","⤽":"cularrp","⥅":"rarrpl","⥈":"harrcir","⥉":"Uarrocir","⥊":"lurdshar","⥋":"ldrushar","⥎":"LeftRightVector","⥏":"RightUpDownVector","⥐":"DownLeftRightVector","⥑":"LeftUpDownVector","⥒":"LeftVectorBar","⥓":"RightVectorBar","⥔":"RightUpVectorBar","⥕":"RightDownVectorBar","⥖":"DownLeftVectorBar","⥗":"DownRightVectorBar","⥘":"LeftUpVectorBar","⥙":"LeftDownVectorBar","⥚":"LeftTeeVector","⥛":"RightTeeVector","⥜":"RightUpTeeVector","⥝":"RightDownTeeVector","⥞":"DownLeftTeeVector","⥟":"DownRightTeeVector","⥠":"LeftUpTeeVector","⥡":"LeftDownTeeVector","⥢":"lHar","⥣":"uHar","⥤":"rHar","⥥":"dHar","⥦":"luruhar","⥧":"ldrdhar","⥨":"ruluhar","⥩":"rdldhar","⥪":"lharul","⥫":"llhard","⥬":"rharul","⥭":"lrhard","⥮":"udhar","⥯":"duhar","⥰":"RoundImplies","⥱":"erarr","⥲":"simrarr","⥳":"larrsim","⥴":"rarrsim","⥵":"rarrap","⥶":"ltlarr","⥸":"gtrarr","⥹":"subrarr","⥻":"suplarr","⥼":"lfisht","⥽":"rfisht","⥾":"ufisht","⥿":"dfisht","⦚":"vzigzag","⦜":"vangrt","⦝":"angrtvbd","⦤":"ange","⦥":"range","⦦":"dwangle","⦧":"uwangle","⦨":"angmsdaa","⦩":"angmsdab","⦪":"angmsdac","⦫":"angmsdad","⦬":"angmsdae","⦭":"angmsdaf","⦮":"angmsdag","⦯":"angmsdah","⦰":"bemptyv","⦱":"demptyv","⦲":"cemptyv","⦳":"raemptyv","⦴":"laemptyv","⦵":"ohbar","⦶":"omid","⦷":"opar","⦹":"operp","⦻":"olcross","⦼":"odsold","⦾":"olcir","⦿":"ofcir","⧀":"olt","⧁":"ogt","⧂":"cirscir","⧃":"cirE","⧄":"solb","⧅":"bsolb","⧉":"boxbox","⧍":"trisb","⧎":"rtriltri","⧏":"LeftTriangleBar","⧏̸":"NotLeftTriangleBar","⧐":"RightTriangleBar","⧐̸":"NotRightTriangleBar","⧜":"iinfin","⧝":"infintie","⧞":"nvinfin","⧣":"eparsl","⧤":"smeparsl","⧥":"eqvparsl","⧫":"lozf","⧴":"RuleDelayed","⧶":"dsol","⨀":"xodot","⨁":"xoplus","⨂":"xotime","⨄":"xuplus","⨆":"xsqcup","⨍":"fpartint","⨐":"cirfnint","⨑":"awint","⨒":"rppolint","⨓":"scpolint","⨔":"npolint","⨕":"pointint","⨖":"quatint","⨗":"intlarhk","⨢":"pluscir","⨣":"plusacir","⨤":"simplus","⨥":"plusdu","⨦":"plussim","⨧":"plustwo","⨩":"mcomma","⨪":"minusdu","⨭":"loplus","⨮":"roplus","⨯":"Cross","⨰":"timesd","⨱":"timesbar","⨳":"smashp","⨴":"lotimes","⨵":"rotimes","⨶":"otimesas","⨷":"Otimes","⨸":"odiv","⨹":"triplus","⨺":"triminus","⨻":"tritime","⨼":"iprod","⨿":"amalg","⩀":"capdot","⩂":"ncup","⩃":"ncap","⩄":"capand","⩅":"cupor","⩆":"cupcap","⩇":"capcup","⩈":"cupbrcap","⩉":"capbrcup","⩊":"cupcup","⩋":"capcap","⩌":"ccups","⩍":"ccaps","⩐":"ccupssm","⩓":"And","⩔":"Or","⩕":"andand","⩖":"oror","⩗":"orslope","⩘":"andslope","⩚":"andv","⩛":"orv","⩜":"andd","⩝":"ord","⩟":"wedbar","⩦":"sdote","⩪":"simdot","⩭":"congdot","⩭̸":"ncongdot","⩮":"easter","⩯":"apacir","⩰":"apE","⩰̸":"napE","⩱":"eplus","⩲":"pluse","⩳":"Esim","⩷":"eDDot","⩸":"equivDD","⩹":"ltcir","⩺":"gtcir","⩻":"ltquest","⩼":"gtquest","⩽":"les","⩽̸":"nles","⩾":"ges","⩾̸":"nges","⩿":"lesdot","⪀":"gesdot","⪁":"lesdoto","⪂":"gesdoto","⪃":"lesdotor","⪄":"gesdotol","⪅":"lap","⪆":"gap","⪇":"lne","⪈":"gne","⪉":"lnap","⪊":"gnap","⪋":"lEg","⪌":"gEl","⪍":"lsime","⪎":"gsime","⪏":"lsimg","⪐":"gsiml","⪑":"lgE","⪒":"glE","⪓":"lesges","⪔":"gesles","⪕":"els","⪖":"egs","⪗":"elsdot","⪘":"egsdot","⪙":"el","⪚":"eg","⪝":"siml","⪞":"simg","⪟":"simlE","⪠":"simgE","⪡":"LessLess","⪡̸":"NotNestedLessLess","⪢":"GreaterGreater","⪢̸":"NotNestedGreaterGreater","⪤":"glj","⪥":"gla","⪦":"ltcc","⪧":"gtcc","⪨":"lescc","⪩":"gescc","⪪":"smt","⪫":"lat","⪬":"smte","⪬︀":"smtes","⪭":"late","⪭︀":"lates","⪮":"bumpE","⪯":"pre","⪯̸":"npre","⪰":"sce","⪰̸":"nsce","⪳":"prE","⪴":"scE","⪵":"prnE","⪶":"scnE","⪷":"prap","⪸":"scap","⪹":"prnap","⪺":"scnap","⪻":"Pr","⪼":"Sc","⪽":"subdot","⪾":"supdot","⪿":"subplus","⫀":"supplus","⫁":"submult","⫂":"supmult","⫃":"subedot","⫄":"supedot","⫅":"subE","⫅̸":"nsubE","⫆":"supE","⫆̸":"nsupE","⫇":"subsim","⫈":"supsim","⫋︀":"vsubnE","⫋":"subnE","⫌︀":"vsupnE","⫌":"supnE","⫏":"csub","⫐":"csup","⫑":"csube","⫒":"csupe","⫓":"subsup","⫔":"supsub","⫕":"subsub","⫖":"supsup","⫗":"suphsub","⫘":"supdsub","⫙":"forkv","⫚":"topfork","⫛":"mlcp","⫤":"Dashv","⫦":"Vdashl","⫧":"Barv","⫨":"vBar","⫩":"vBarv","⫫":"Vbar","⫬":"Not","⫭":"bNot","⫮":"rnmid","⫯":"cirmid","⫰":"midcir","⫱":"topcir","⫲":"nhpar","⫳":"parsim","⫽":"parsl","⫽⃥":"nparsl","♭":"flat","♮":"natur","♯":"sharp","¤":"curren","¢":"cent",$:"dollar","£":"pound","¥":"yen","€":"euro","¹":"sup1","½":"half","⅓":"frac13","¼":"frac14","⅕":"frac15","⅙":"frac16","⅛":"frac18","²":"sup2","⅔":"frac23","⅖":"frac25","³":"sup3","¾":"frac34","⅗":"frac35","⅜":"frac38","⅘":"frac45","⅚":"frac56","⅝":"frac58","⅞":"frac78","𝒶":"ascr","𝕒":"aopf","𝔞":"afr","𝔸":"Aopf","𝔄":"Afr","𝒜":"Ascr","ª":"ordf","á":"aacute","Á":"Aacute","à":"agrave","À":"Agrave","ă":"abreve","Ă":"Abreve","â":"acirc","Â":"Acirc","å":"aring","Å":"angst","ä":"auml","Ä":"Auml","ã":"atilde","Ã":"Atilde","ą":"aogon","Ą":"Aogon","ā":"amacr","Ā":"Amacr","æ":"aelig","Æ":"AElig","𝒷":"bscr","𝕓":"bopf","𝔟":"bfr","𝔹":"Bopf","ℬ":"Bscr","𝔅":"Bfr","𝔠":"cfr","𝒸":"cscr","𝕔":"copf","ℭ":"Cfr","𝒞":"Cscr","ℂ":"Copf","ć":"cacute","Ć":"Cacute","ĉ":"ccirc","Ĉ":"Ccirc","č":"ccaron","Č":"Ccaron","ċ":"cdot","Ċ":"Cdot","ç":"ccedil","Ç":"Ccedil","℅":"incare","𝔡":"dfr","ⅆ":"dd","𝕕":"dopf","𝒹":"dscr","𝒟":"Dscr","𝔇":"Dfr","ⅅ":"DD","𝔻":"Dopf","ď":"dcaron","Ď":"Dcaron","đ":"dstrok","Đ":"Dstrok","ð":"eth","Ð":"ETH","ⅇ":"ee","ℯ":"escr","𝔢":"efr","𝕖":"eopf","ℰ":"Escr","𝔈":"Efr","𝔼":"Eopf","é":"eacute","É":"Eacute","è":"egrave","È":"Egrave","ê":"ecirc","Ê":"Ecirc","ě":"ecaron","Ě":"Ecaron","ë":"euml","Ë":"Euml","ė":"edot","Ė":"Edot","ę":"eogon","Ę":"Eogon","ē":"emacr","Ē":"Emacr","𝔣":"ffr","𝕗":"fopf","𝒻":"fscr","𝔉":"Ffr","𝔽":"Fopf","ℱ":"Fscr","ﬀ":"fflig","ﬃ":"ffilig","ﬄ":"ffllig","ﬁ":"filig",fj:"fjlig","ﬂ":"fllig","ƒ":"fnof","ℊ":"gscr","𝕘":"gopf","𝔤":"gfr","𝒢":"Gscr","𝔾":"Gopf","𝔊":"Gfr","ǵ":"gacute","ğ":"gbreve","Ğ":"Gbreve","ĝ":"gcirc","Ĝ":"Gcirc","ġ":"gdot","Ġ":"Gdot","Ģ":"Gcedil","𝔥":"hfr","ℎ":"planckh","𝒽":"hscr","𝕙":"hopf","ℋ":"Hscr","ℌ":"Hfr","ℍ":"Hopf","ĥ":"hcirc","Ĥ":"Hcirc","ℏ":"hbar","ħ":"hstrok","Ħ":"Hstrok","𝕚":"iopf","𝔦":"ifr","𝒾":"iscr","ⅈ":"ii","𝕀":"Iopf","ℐ":"Iscr","ℑ":"Im","í":"iacute","Í":"Iacute","ì":"igrave","Ì":"Igrave","î":"icirc","Î":"Icirc","ï":"iuml","Ï":"Iuml","ĩ":"itilde","Ĩ":"Itilde","İ":"Idot","į":"iogon","Į":"Iogon","ī":"imacr","Ī":"Imacr","ĳ":"ijlig","Ĳ":"IJlig","ı":"imath","𝒿":"jscr","𝕛":"jopf","𝔧":"jfr","𝒥":"Jscr","𝔍":"Jfr","𝕁":"Jopf","ĵ":"jcirc","Ĵ":"Jcirc","ȷ":"jmath","𝕜":"kopf","𝓀":"kscr","𝔨":"kfr","𝒦":"Kscr","𝕂":"Kopf","𝔎":"Kfr","ķ":"kcedil","Ķ":"Kcedil","𝔩":"lfr","𝓁":"lscr","ℓ":"ell","𝕝":"lopf","ℒ":"Lscr","𝔏":"Lfr","𝕃":"Lopf","ĺ":"lacute","Ĺ":"Lacute","ľ":"lcaron","Ľ":"Lcaron","ļ":"lcedil","Ļ":"Lcedil","ł":"lstrok","Ł":"Lstrok","ŀ":"lmidot","Ŀ":"Lmidot","𝔪":"mfr","𝕞":"mopf","𝓂":"mscr","𝔐":"Mfr","𝕄":"Mopf","ℳ":"Mscr","𝔫":"nfr","𝕟":"nopf","𝓃":"nscr","ℕ":"Nopf","𝒩":"Nscr","𝔑":"Nfr","ń":"nacute","Ń":"Nacute","ň":"ncaron","Ň":"Ncaron","ñ":"ntilde","Ñ":"Ntilde","ņ":"ncedil","Ņ":"Ncedil","№":"numero","ŋ":"eng","Ŋ":"ENG","𝕠":"oopf","𝔬":"ofr","ℴ":"oscr","𝒪":"Oscr","𝔒":"Ofr","𝕆":"Oopf","º":"ordm","ó":"oacute","Ó":"Oacute","ò":"ograve","Ò":"Ograve","ô":"ocirc","Ô":"Ocirc","ö":"ouml","Ö":"Ouml","ő":"odblac","Ő":"Odblac","õ":"otilde","Õ":"Otilde","ø":"oslash","Ø":"Oslash","ō":"omacr","Ō":"Omacr","œ":"oelig","Œ":"OElig","𝔭":"pfr","𝓅":"pscr","𝕡":"popf","ℙ":"Popf","𝔓":"Pfr","𝒫":"Pscr","𝕢":"qopf","𝔮":"qfr","𝓆":"qscr","𝒬":"Qscr","𝔔":"Qfr","ℚ":"Qopf","ĸ":"kgreen","𝔯":"rfr","𝕣":"ropf","𝓇":"rscr","ℛ":"Rscr","ℜ":"Re","ℝ":"Ropf","ŕ":"racute","Ŕ":"Racute","ř":"rcaron","Ř":"Rcaron","ŗ":"rcedil","Ŗ":"Rcedil","𝕤":"sopf","𝓈":"sscr","𝔰":"sfr","𝕊":"Sopf","𝔖":"Sfr","𝒮":"Sscr","Ⓢ":"oS","ś":"sacute","Ś":"Sacute","ŝ":"scirc","Ŝ":"Scirc","š":"scaron","Š":"Scaron","ş":"scedil","Ş":"Scedil","ß":"szlig","𝔱":"tfr","𝓉":"tscr","𝕥":"topf","𝒯":"Tscr","𝔗":"Tfr","𝕋":"Topf","ť":"tcaron","Ť":"Tcaron","ţ":"tcedil","Ţ":"Tcedil","™":"trade","ŧ":"tstrok","Ŧ":"Tstrok","𝓊":"uscr","𝕦":"uopf","𝔲":"ufr","𝕌":"Uopf","𝔘":"Ufr","𝒰":"Uscr","ú":"uacute","Ú":"Uacute","ù":"ugrave","Ù":"Ugrave","ŭ":"ubreve","Ŭ":"Ubreve","û":"ucirc","Û":"Ucirc","ů":"uring","Ů":"Uring","ü":"uuml","Ü":"Uuml","ű":"udblac","Ű":"Udblac","ũ":"utilde","Ũ":"Utilde","ų":"uogon","Ų":"Uogon","ū":"umacr","Ū":"Umacr","𝔳":"vfr","𝕧":"vopf","𝓋":"vscr","𝔙":"Vfr","𝕍":"Vopf","𝒱":"Vscr","𝕨":"wopf","𝓌":"wscr","𝔴":"wfr","𝒲":"Wscr","𝕎":"Wopf","𝔚":"Wfr","ŵ":"wcirc","Ŵ":"Wcirc","𝔵":"xfr","𝓍":"xscr","𝕩":"xopf","𝕏":"Xopf","𝔛":"Xfr","𝒳":"Xscr","𝔶":"yfr","𝓎":"yscr","𝕪":"yopf","𝒴":"Yscr","𝔜":"Yfr","𝕐":"Yopf","ý":"yacute","Ý":"Yacute","ŷ":"ycirc","Ŷ":"Ycirc","ÿ":"yuml","Ÿ":"Yuml","𝓏":"zscr","𝔷":"zfr","𝕫":"zopf","ℨ":"Zfr","ℤ":"Zopf","𝒵":"Zscr","ź":"zacute","Ź":"Zacute","ž":"zcaron","Ž":"Zcaron","ż":"zdot","Ż":"Zdot","Ƶ":"imped","þ":"thorn","Þ":"THORN","ŉ":"napos","α":"alpha","Α":"Alpha","β":"beta","Β":"Beta","γ":"gamma","Γ":"Gamma","δ":"delta","Δ":"Delta","ε":"epsi","ϵ":"epsiv","Ε":"Epsilon","ϝ":"gammad","Ϝ":"Gammad","ζ":"zeta","Ζ":"Zeta","η":"eta","Η":"Eta","θ":"theta","ϑ":"thetav","Θ":"Theta","ι":"iota","Ι":"Iota","κ":"kappa","ϰ":"kappav","Κ":"Kappa","λ":"lambda","Λ":"Lambda","μ":"mu","µ":"micro","Μ":"Mu","ν":"nu","Ν":"Nu","ξ":"xi","Ξ":"Xi","ο":"omicron","Ο":"Omicron","π":"pi","ϖ":"piv","Π":"Pi","ρ":"rho","ϱ":"rhov","Ρ":"Rho","σ":"sigma","Σ":"Sigma","ς":"sigmaf","τ":"tau","Τ":"Tau","υ":"upsi","Υ":"Upsilon","ϒ":"Upsi","φ":"phi","ϕ":"phiv","Φ":"Phi","χ":"chi","Χ":"Chi","ψ":"psi","Ψ":"Psi","ω":"omega","Ω":"ohm","а":"acy","А":"Acy","б":"bcy","Б":"Bcy","в":"vcy","В":"Vcy","г":"gcy","Г":"Gcy","ѓ":"gjcy","Ѓ":"GJcy","д":"dcy","Д":"Dcy","ђ":"djcy","Ђ":"DJcy","е":"iecy","Е":"IEcy","ё":"iocy","Ё":"IOcy","є":"jukcy","Є":"Jukcy","ж":"zhcy","Ж":"ZHcy","з":"zcy","З":"Zcy","ѕ":"dscy","Ѕ":"DScy","и":"icy","И":"Icy","і":"iukcy","І":"Iukcy","ї":"yicy","Ї":"YIcy","й":"jcy","Й":"Jcy","ј":"jsercy","Ј":"Jsercy","к":"kcy","К":"Kcy","ќ":"kjcy","Ќ":"KJcy","л":"lcy","Л":"Lcy","љ":"ljcy","Љ":"LJcy","м":"mcy","М":"Mcy","н":"ncy","Н":"Ncy","њ":"njcy","Њ":"NJcy","о":"ocy","О":"Ocy","п":"pcy","П":"Pcy","р":"rcy","Р":"Rcy","с":"scy","С":"Scy","т":"tcy","Т":"Tcy","ћ":"tshcy","Ћ":"TSHcy","у":"ucy","У":"Ucy","ў":"ubrcy","Ў":"Ubrcy","ф":"fcy","Ф":"Fcy","х":"khcy","Х":"KHcy","ц":"tscy","Ц":"TScy","ч":"chcy","Ч":"CHcy","џ":"dzcy","Џ":"DZcy","ш":"shcy","Ш":"SHcy","щ":"shchcy","Щ":"SHCHcy","ъ":"hardcy","Ъ":"HARDcy","ы":"ycy","Ы":"Ycy","ь":"softcy","Ь":"SOFTcy","э":"ecy","Э":"Ecy","ю":"yucy","Ю":"YUcy","я":"yacy","Я":"YAcy","ℵ":"aleph","ℶ":"beth","ℷ":"gimel","ℸ":"daleth"},u=/["&'<>`]/g,d={'"':"&quot;","&":"&amp;","'":"&#x27;","<":"&lt;",">":"&gt;","`":"&#x60;"},f=/&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,p=/[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,h=/&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,g={aacute:"á",Aacute:"Á",abreve:"ă",Abreve:"Ă",ac:"∾",acd:"∿",acE:"∾̳",acirc:"â",Acirc:"Â",acute:"´",acy:"а",Acy:"А",aelig:"æ",AElig:"Æ",af:"⁡",afr:"𝔞",Afr:"𝔄",agrave:"à",Agrave:"À",alefsym:"ℵ",aleph:"ℵ",alpha:"α",Alpha:"Α",amacr:"ā",Amacr:"Ā",amalg:"⨿",amp:"&",AMP:"&",and:"∧",And:"⩓",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",aogon:"ą",Aogon:"Ą",aopf:"𝕒",Aopf:"𝔸",ap:"≈",apacir:"⩯",ape:"≊",apE:"⩰",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",aring:"å",Aring:"Å",ascr:"𝒶",Ascr:"𝒜",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",atilde:"ã",Atilde:"Ã",auml:"ä",Auml:"Ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",barwed:"⌅",Barwed:"⌆",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",Bcy:"Б",bdquo:"„",becaus:"∵",because:"∵",Because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",beta:"β",Beta:"Β",beth:"ℶ",between:"≬",bfr:"𝔟",Bfr:"𝔅",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bNot:"⫭",bopf:"𝕓",Bopf:"𝔹",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxdl:"┐",boxdL:"╕",boxDl:"╖",boxDL:"╗",boxdr:"┌",boxdR:"╒",boxDr:"╓",boxDR:"╔",boxh:"─",boxH:"═",boxhd:"┬",boxhD:"╥",boxHd:"╤",boxHD:"╦",boxhu:"┴",boxhU:"╨",boxHu:"╧",boxHU:"╩",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxul:"┘",boxuL:"╛",boxUl:"╜",boxUL:"╝",boxur:"└",boxuR:"╘",boxUr:"╙",boxUR:"╚",boxv:"│",boxV:"║",boxvh:"┼",boxvH:"╪",boxVh:"╫",boxVH:"╬",boxvl:"┤",boxvL:"╡",boxVl:"╢",boxVL:"╣",boxvr:"├",boxvR:"╞",boxVr:"╟",boxVR:"╠",bprime:"‵",breve:"˘",Breve:"˘",brvbar:"¦",bscr:"𝒷",Bscr:"ℬ",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpe:"≏",bumpE:"⪮",bumpeq:"≏",Bumpeq:"≎",cacute:"ć",Cacute:"Ć",cap:"∩",Cap:"⋒",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",ccaron:"č",Ccaron:"Č",ccedil:"ç",Ccedil:"Ç",ccirc:"ĉ",Ccirc:"Ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",Cdot:"Ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",CenterDot:"·",cfr:"𝔠",Cfr:"ℭ",chcy:"ч",CHcy:"Ч",check:"✓",checkmark:"✓",chi:"χ",Chi:"Χ",cir:"○",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cire:"≗",cirE:"⧃",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",colon:":",Colon:"∷",colone:"≔",Colone:"⩴",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",conint:"∮",Conint:"∯",ContourIntegral:"∮",copf:"𝕔",Copf:"ℂ",coprod:"∐",Coproduct:"∐",copy:"©",COPY:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",cross:"✗",Cross:"⨯",cscr:"𝒸",Cscr:"𝒞",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",Cup:"⋓",cupbrcap:"⩈",cupcap:"⩆",CupCap:"≍",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dagger:"†",Dagger:"‡",daleth:"ℸ",darr:"↓",dArr:"⇓",Darr:"↡",dash:"‐",dashv:"⊣",Dashv:"⫤",dbkarow:"⤏",dblac:"˝",dcaron:"ď",Dcaron:"Ď",dcy:"д",Dcy:"Д",dd:"ⅆ",DD:"ⅅ",ddagger:"‡",ddarr:"⇊",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",delta:"δ",Delta:"Δ",demptyv:"⦱",dfisht:"⥿",dfr:"𝔡",Dfr:"𝔇",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",diamond:"⋄",Diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",DJcy:"Ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"𝕕",Dopf:"𝔻",dot:"˙",Dot:"¨",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",downarrow:"↓",Downarrow:"⇓",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"𝒹",Dscr:"𝒟",dscy:"ѕ",DScy:"Ѕ",dsol:"⧶",dstrok:"đ",Dstrok:"Đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",DZcy:"Џ",dzigrarr:"⟿",eacute:"é",Eacute:"É",easter:"⩮",ecaron:"ě",Ecaron:"Ě",ecir:"≖",ecirc:"ê",Ecirc:"Ê",ecolon:"≕",ecy:"э",Ecy:"Э",eDDot:"⩷",edot:"ė",eDot:"≑",Edot:"Ė",ee:"ⅇ",efDot:"≒",efr:"𝔢",Efr:"𝔈",eg:"⪚",egrave:"è",Egrave:"È",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",Emacr:"Ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp:" ",emsp13:" ",emsp14:" ",eng:"ŋ",ENG:"Ŋ",ensp:" ",eogon:"ę",Eogon:"Ę",eopf:"𝕖",Eopf:"𝔼",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",Epsilon:"Ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",escr:"ℯ",Escr:"ℰ",esdot:"≐",esim:"≂",Esim:"⩳",eta:"η",Eta:"Η",eth:"ð",ETH:"Ð",euml:"ë",Euml:"Ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",exponentiale:"ⅇ",ExponentialE:"ⅇ",fallingdotseq:"≒",fcy:"ф",Fcy:"Ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"𝔣",Ffr:"𝔉",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"𝕗",Fopf:"𝔽",forall:"∀",ForAll:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",Fscr:"ℱ",gacute:"ǵ",gamma:"γ",Gamma:"Γ",gammad:"ϝ",Gammad:"Ϝ",gap:"⪆",gbreve:"ğ",Gbreve:"Ğ",Gcedil:"Ģ",gcirc:"ĝ",Gcirc:"Ĝ",gcy:"г",Gcy:"Г",gdot:"ġ",Gdot:"Ġ",ge:"≥",gE:"≧",gel:"⋛",gEl:"⪌",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"𝔤",Gfr:"𝔊",gg:"≫",Gg:"⋙",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",GJcy:"Ѓ",gl:"≷",gla:"⪥",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gnE:"≩",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"𝕘",Gopf:"𝔾",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",gscr:"ℊ",Gscr:"𝒢",gsim:"≳",gsime:"⪎",gsiml:"⪐",gt:">",Gt:"≫",GT:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",hardcy:"ъ",HARDcy:"Ъ",harr:"↔",hArr:"⇔",harrcir:"⥈",harrw:"↭",Hat:"^",hbar:"ℏ",hcirc:"ĥ",Hcirc:"Ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",Hfr:"ℌ",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",Hopf:"ℍ",horbar:"―",HorizontalLine:"─",hscr:"𝒽",Hscr:"ℋ",hslash:"ℏ",hstrok:"ħ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",iacute:"í",Iacute:"Í",ic:"⁣",icirc:"î",Icirc:"Î",icy:"и",Icy:"И",Idot:"İ",iecy:"е",IEcy:"Е",iexcl:"¡",iff:"⇔",ifr:"𝔦",Ifr:"ℑ",igrave:"ì",Igrave:"Ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",IJlig:"Ĳ",Im:"ℑ",imacr:"ī",Imacr:"Ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",Implies:"⇒",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",Int:"∬",intcal:"⊺",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",iocy:"ё",IOcy:"Ё",iogon:"į",Iogon:"Į",iopf:"𝕚",Iopf:"𝕀",iota:"ι",Iota:"Ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",Iscr:"ℐ",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",Itilde:"Ĩ",iukcy:"і",Iukcy:"І",iuml:"ï",Iuml:"Ï",jcirc:"ĵ",Jcirc:"Ĵ",jcy:"й",Jcy:"Й",jfr:"𝔧",Jfr:"𝔍",jmath:"ȷ",jopf:"𝕛",Jopf:"𝕁",jscr:"𝒿",Jscr:"𝒥",jsercy:"ј",Jsercy:"Ј",jukcy:"є",Jukcy:"Є",kappa:"κ",Kappa:"Κ",kappav:"ϰ",kcedil:"ķ",Kcedil:"Ķ",kcy:"к",Kcy:"К",kfr:"𝔨",Kfr:"𝔎",kgreen:"ĸ",khcy:"х",KHcy:"Х",kjcy:"ќ",KJcy:"Ќ",kopf:"𝕜",Kopf:"𝕂",kscr:"𝓀",Kscr:"𝒦",lAarr:"⇚",lacute:"ĺ",Lacute:"Ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",Lambda:"Λ",lang:"⟨",Lang:"⟪",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",larr:"←",lArr:"⇐",Larr:"↞",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",lAtail:"⤛",late:"⪭",lates:"⪭︀",lbarr:"⤌",lBarr:"⤎",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",Lcaron:"Ľ",lcedil:"ļ",Lcedil:"Ļ",lceil:"⌈",lcub:"{",lcy:"л",Lcy:"Л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",lE:"≦",LeftAngleBracket:"⟨",leftarrow:"←",Leftarrow:"⇐",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",Leftrightarrow:"⇔",LeftRightArrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",leg:"⋚",lEg:"⪋",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"𝔩",Lfr:"𝔏",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",LJcy:"Љ",ll:"≪",Ll:"⋘",llarr:"⇇",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",lmidot:"ŀ",Lmidot:"Ŀ",lmoust:"⎰",lmoustache:"⎰",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lnE:"≨",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",Longleftarrow:"⟸",LongLeftArrow:"⟵",longleftrightarrow:"⟷",Longleftrightarrow:"⟺",LongLeftRightArrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",Longrightarrow:"⟹",LongRightArrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"𝕝",Lopf:"𝕃",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",Lscr:"ℒ",lsh:"↰",Lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",Lstrok:"Ł",lt:"<",Lt:"≪",LT:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",map:"↦",Map:"⤅",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",Mcy:"М",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",mfr:"𝔪",Mfr:"𝔐",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"𝕞",Mopf:"𝕄",mp:"∓",mscr:"𝓂",Mscr:"ℳ",mstpos:"∾",mu:"μ",Mu:"Μ",multimap:"⊸",mumap:"⊸",nabla:"∇",nacute:"ń",Nacute:"Ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",Ncaron:"Ň",ncedil:"ņ",Ncedil:"Ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",Ncy:"Н",ndash:"–",ne:"≠",nearhk:"⤤",nearr:"↗",neArr:"⇗",nearrow:"↗",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",nexist:"∄",nexists:"∄",nfr:"𝔫",Nfr:"𝔑",nge:"≱",ngE:"≧̸",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",ngt:"≯",nGt:"≫⃒",ngtr:"≯",nGtv:"≫̸",nharr:"↮",nhArr:"⇎",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",NJcy:"Њ",nlarr:"↚",nlArr:"⇍",nldr:"‥",nle:"≰",nlE:"≦̸",nleftarrow:"↚",nLeftarrow:"⇍",nleftrightarrow:"↮",nLeftrightarrow:"⇎",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nlt:"≮",nLt:"≪⃒",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",nopf:"𝕟",Nopf:"ℕ",not:"¬",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrarr:"↛",nrArr:"⇏",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nRightarrow:"⇏",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"𝓃",Nscr:"𝒩",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsube:"⊈",nsubE:"⫅̸",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupe:"⊉",nsupE:"⫆̸",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntilde:"ñ",Ntilde:"Ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",Nu:"Ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",nVDash:"⊯",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwarr:"↖",nwArr:"⇖",nwarrow:"↖",nwnear:"⤧",oacute:"ó",Oacute:"Ó",oast:"⊛",ocir:"⊚",ocirc:"ô",Ocirc:"Ô",ocy:"о",Ocy:"О",odash:"⊝",odblac:"ő",Odblac:"Ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",OElig:"Œ",ofcir:"⦿",ofr:"𝔬",Ofr:"𝔒",ogon:"˛",ograve:"ò",Ograve:"Ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",Omacr:"Ō",omega:"ω",Omega:"Ω",omicron:"ο",Omicron:"Ο",omid:"⦶",ominus:"⊖",oopf:"𝕠",Oopf:"𝕆",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",or:"∨",Or:"⩔",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",oscr:"ℴ",Oscr:"𝒪",oslash:"ø",Oslash:"Ø",osol:"⊘",otilde:"õ",Otilde:"Õ",otimes:"⊗",Otimes:"⨷",otimesas:"⨶",ouml:"ö",Ouml:"Ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",pcy:"п",Pcy:"П",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"𝔭",Pfr:"𝔓",phi:"φ",Phi:"Φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",Pi:"Π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",popf:"𝕡",Popf:"ℙ",pound:"£",pr:"≺",Pr:"⪻",prap:"⪷",prcue:"≼",pre:"⪯",prE:"⪳",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",Prime:"″",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportion:"∷",Proportional:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"𝓅",Pscr:"𝒫",psi:"ψ",Psi:"Ψ",puncsp:" ",qfr:"𝔮",Qfr:"𝔔",qint:"⨌",qopf:"𝕢",Qopf:"ℚ",qprime:"⁗",qscr:"𝓆",Qscr:"𝒬",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',QUOT:'"',rAarr:"⇛",race:"∽̱",racute:"ŕ",Racute:"Ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",Rang:"⟫",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarr:"→",rArr:"⇒",Rarr:"↠",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",Rarrtl:"⤖",rarrw:"↝",ratail:"⤚",rAtail:"⤜",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rBarr:"⤏",RBarr:"⤐",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",Rcaron:"Ř",rcedil:"ŗ",Rcedil:"Ŗ",rceil:"⌉",rcub:"}",rcy:"р",Rcy:"Р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",Re:"ℜ",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",reg:"®",REG:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",Rfr:"ℜ",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",Rho:"Ρ",rhov:"ϱ",RightAngleBracket:"⟩",rightarrow:"→",Rightarrow:"⇒",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",Ropf:"ℝ",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",rscr:"𝓇",Rscr:"ℛ",rsh:"↱",Rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",sacute:"ś",Sacute:"Ś",sbquo:"‚",sc:"≻",Sc:"⪼",scap:"⪸",scaron:"š",Scaron:"Š",sccue:"≽",sce:"⪰",scE:"⪴",scedil:"ş",Scedil:"Ş",scirc:"ŝ",Scirc:"Ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",Scy:"С",sdot:"⋅",sdotb:"⊡",sdote:"⩦",searhk:"⤥",searr:"↘",seArr:"⇘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"𝔰",Sfr:"𝔖",sfrown:"⌢",sharp:"♯",shchcy:"щ",SHCHcy:"Щ",shcy:"ш",SHcy:"Ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",sigma:"σ",Sigma:"Σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",SOFTcy:"Ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"𝕤",Sopf:"𝕊",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squf:"▪",srarr:"→",sscr:"𝓈",Sscr:"𝒮",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",Star:"⋆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",Sub:"⋐",subdot:"⪽",sube:"⊆",subE:"⫅",subedot:"⫃",submult:"⫁",subne:"⊊",subnE:"⫋",subplus:"⪿",subrarr:"⥹",subset:"⊂",Subset:"⋐",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",sum:"∑",Sum:"∑",sung:"♪",sup:"⊃",Sup:"⋑",sup1:"¹",sup2:"²",sup3:"³",supdot:"⪾",supdsub:"⫘",supe:"⊇",supE:"⫆",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supne:"⊋",supnE:"⫌",supplus:"⫀",supset:"⊃",Supset:"⋑",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swarr:"↙",swArr:"⇙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"\t",target:"⌖",tau:"τ",Tau:"Τ",tbrk:"⎴",tcaron:"ť",Tcaron:"Ť",tcedil:"ţ",Tcedil:"Ţ",tcy:"т",Tcy:"Т",tdot:"⃛",telrec:"⌕",tfr:"𝔱",Tfr:"𝔗",there4:"∴",therefore:"∴",Therefore:"∴",theta:"θ",Theta:"Θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",thinsp:" ",ThinSpace:" ",thkap:"≈",thksim:"∼",thorn:"þ",THORN:"Þ",tilde:"˜",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"𝕥",Topf:"𝕋",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",TRADE:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"𝓉",Tscr:"𝒯",tscy:"ц",TScy:"Ц",tshcy:"ћ",TSHcy:"Ћ",tstrok:"ŧ",Tstrok:"Ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uacute:"ú",Uacute:"Ú",uarr:"↑",uArr:"⇑",Uarr:"↟",Uarrocir:"⥉",ubrcy:"ў",Ubrcy:"Ў",ubreve:"ŭ",Ubreve:"Ŭ",ucirc:"û",Ucirc:"Û",ucy:"у",Ucy:"У",udarr:"⇅",udblac:"ű",Udblac:"Ű",udhar:"⥮",ufisht:"⥾",ufr:"𝔲",Ufr:"𝔘",ugrave:"ù",Ugrave:"Ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",Umacr:"Ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",uogon:"ų",Uogon:"Ų",uopf:"𝕦",Uopf:"𝕌",uparrow:"↑",Uparrow:"⇑",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",updownarrow:"↕",Updownarrow:"⇕",UpDownArrow:"↕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",upsi:"υ",Upsi:"ϒ",upsih:"ϒ",upsilon:"υ",Upsilon:"Υ",UpTee:"⊥",UpTeeArrow:"↥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",Uring:"Ů",urtri:"◹",uscr:"𝓊",Uscr:"𝒰",utdot:"⋰",utilde:"ũ",Utilde:"Ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uuml:"ü",Uuml:"Ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",vArr:"⇕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vBar:"⫨",Vbar:"⫫",vBarv:"⫩",vcy:"в",Vcy:"В",vdash:"⊢",vDash:"⊨",Vdash:"⊩",VDash:"⊫",Vdashl:"⫦",vee:"∨",Vee:"⋁",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",Verbar:"‖",vert:"|",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",vfr:"𝔳",Vfr:"𝔙",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"𝕧",Vopf:"𝕍",vprop:"∝",vrtri:"⊳",vscr:"𝓋",Vscr:"𝒱",vsubne:"⊊︀",vsubnE:"⫋︀",vsupne:"⊋︀",vsupnE:"⫌︀",Vvdash:"⊪",vzigzag:"⦚",wcirc:"ŵ",Wcirc:"Ŵ",wedbar:"⩟",wedge:"∧",Wedge:"⋀",wedgeq:"≙",weierp:"℘",wfr:"𝔴",Wfr:"𝔚",wopf:"𝕨",Wopf:"𝕎",wp:"℘",wr:"≀",wreath:"≀",wscr:"𝓌",Wscr:"𝒲",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"𝔵",Xfr:"𝔛",xharr:"⟷",xhArr:"⟺",xi:"ξ",Xi:"Ξ",xlarr:"⟵",xlArr:"⟸",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"𝕩",Xopf:"𝕏",xoplus:"⨁",xotime:"⨂",xrarr:"⟶",xrArr:"⟹",xscr:"𝓍",Xscr:"𝒳",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacute:"ý",Yacute:"Ý",yacy:"я",YAcy:"Я",ycirc:"ŷ",Ycirc:"Ŷ",ycy:"ы",Ycy:"Ы",yen:"¥",yfr:"𝔶",Yfr:"𝔜",yicy:"ї",YIcy:"Ї",yopf:"𝕪",Yopf:"𝕐",yscr:"𝓎",Yscr:"𝒴",yucy:"ю",YUcy:"Ю",yuml:"ÿ",Yuml:"Ÿ",zacute:"ź",Zacute:"Ź",zcaron:"ž",Zcaron:"Ž",zcy:"з",Zcy:"З",zdot:"ż",Zdot:"Ż",zeetrf:"ℨ",ZeroWidthSpace:"​",zeta:"ζ",Zeta:"Ζ",zfr:"𝔷",Zfr:"ℨ",zhcy:"ж",ZHcy:"Ж",zigrarr:"⇝",zopf:"𝕫",Zopf:"ℤ",zscr:"𝓏",Zscr:"𝒵",zwj:"‍",zwnj:"‌"},m={aacute:"á",Aacute:"Á",acirc:"â",Acirc:"Â",acute:"´",aelig:"æ",AElig:"Æ",agrave:"à",Agrave:"À",amp:"&",AMP:"&",aring:"å",Aring:"Å",atilde:"ã",Atilde:"Ã",auml:"ä",Auml:"Ä",brvbar:"¦",ccedil:"ç",Ccedil:"Ç",cedil:"¸",cent:"¢",copy:"©",COPY:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",Eacute:"É",ecirc:"ê",Ecirc:"Ê",egrave:"è",Egrave:"È",eth:"ð",ETH:"Ð",euml:"ë",Euml:"Ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",GT:">",iacute:"í",Iacute:"Í",icirc:"î",Icirc:"Î",iexcl:"¡",igrave:"ì",Igrave:"Ì",iquest:"¿",iuml:"ï",Iuml:"Ï",laquo:"«",lt:"<",LT:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",Ntilde:"Ñ",oacute:"ó",Oacute:"Ó",ocirc:"ô",Ocirc:"Ô",ograve:"ò",Ograve:"Ò",ordf:"ª",ordm:"º",oslash:"ø",Oslash:"Ø",otilde:"õ",Otilde:"Õ",ouml:"ö",Ouml:"Ö",para:"¶",plusmn:"±",pound:"£",quot:'"',QUOT:'"',raquo:"»",reg:"®",REG:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",THORN:"Þ",times:"×",uacute:"ú",Uacute:"Ú",ucirc:"û",Ucirc:"Û",ugrave:"ù",Ugrave:"Ù",uml:"¨",uuml:"ü",Uuml:"Ü",yacute:"ý",Yacute:"Ý",yen:"¥",yuml:"ÿ"},b={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"},y=[1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65e3,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111],v=String.fromCharCode,w={}.hasOwnProperty,x=function(e,t){return w.call(e,t)},k=function(e,t){if(!e)return t
var r,n={}
for(r in t)n[r]=x(e,r)?e[r]:t[r]
return n},E=function(e,t){var r=""
return e>=55296&&e<=57343||e>1114111?(t&&T("character reference outside the permissible Unicode range"),"�"):x(b,e)?(t&&T("disallowed character reference"),b[e]):(t&&function(e,t){for(var r=-1,n=e.length;++r<n;)if(e[r]==t)return!0
return!1}(y,e)&&T("disallowed character reference"),e>65535&&(r+=v((e-=65536)>>>10&1023|55296),e=56320|1023&e),r+=v(e))},_=function(e){return"&#x"+e.toString(16).toUpperCase()+";"},A=function(e){return"&#"+e+";"},T=function(e){throw Error("Parse error: "+e)},S=function(e,t){(t=k(t,S.options)).strict&&p.test(e)&&T("forbidden code point")
var r=t.encodeEverything,n=t.useNamedReferences,i=t.allowUnsafeSymbols,d=t.decimal?A:_,f=function(e){return d(e.charCodeAt(0))}
return r?(e=e.replace(a,function(e){return n&&x(c,e)?"&"+c[e]+";":f(e)}),n&&(e=e.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;").replace(/&#x66;&#x6A;/g,"&fjlig;")),n&&(e=e.replace(l,function(e){return"&"+c[e]+";"}))):n?(i||(e=e.replace(u,function(e){return"&"+c[e]+";"})),e=(e=e.replace(/&gt;\u20D2/g,"&nvgt;").replace(/&lt;\u20D2/g,"&nvlt;")).replace(l,function(e){return"&"+c[e]+";"})):i||(e=e.replace(u,f)),e.replace(o,function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1)
return d(1024*(t-55296)+r-56320+65536)}).replace(s,f)}
S.options={allowUnsafeSymbols:!1,encodeEverything:!1,strict:!1,useNamedReferences:!1,decimal:!1}
var O=function(e,t){var r=(t=k(t,O.options)).strict
return r&&f.test(e)&&T("malformed character reference"),e.replace(h,function(e,n,i,o,a,s,l,c,u){var d,f,p,h,b,y
return n?g[b=n]:i?(b=i,(y=o)&&t.isAttributeValue?(r&&"="==y&&T("`&` did not start a character reference"),e):(r&&T("named character reference was not terminated by a semicolon"),m[b]+(y||""))):a?(p=a,f=s,r&&!f&&T("character reference was not terminated by a semicolon"),d=parseInt(p,10),E(d,r)):l?(h=l,f=c,r&&!f&&T("character reference was not terminated by a semicolon"),d=parseInt(h,16),E(d,r)):(r&&T("named character reference was not terminated by a semicolon"),e)})}
O.options={isAttributeValue:!1,strict:!1}
var N={version:"1.2.0",encode:S,decode:O,escape:function(e){return e.replace(u,function(e){return d[e]})},unescape:O}
void 0===(n=function(){return N}.call(t,r,t,e))||(e.exports=n)}()},2027(e){var t={}.toString
e.exports=Array.isArray||function(e){return"[object Array]"==t.call(e)}},3713(e,t,r){"use strict"
var n=r(2027)
e.exports=function(e){return null!=e&&"object"==typeof e&&!1===n(e)}},4018(e,t,r){"use strict"
var n=r(2027),i=r(3713)
function o(e,t){if(!(this instanceof o))return"number"==typeof t?new o(e).fromIndex(t):new o(e,t)
this.str=e||"",this.lineToIndex=function(e){for(var t=e.split("\n"),r=new Array(t.length),n=0,i=0,o=t.length;i<o;i++)r[i]=n,n+=t[i].length+1
return r}(this.str),t=t||{},this.origin=void 0===t.origin?1:t.origin}Array.prototype.slice,e.exports=o,o.prototype.fromIndex=function(e){if(e<0||e>=this.str.length||isNaN(e))return null
var t=function(e,t){if(e>=t[t.length-1])return t.length-1
for(var r,n=0,i=t.length-2;n<i;)if(e<t[r=n+(i-n>>1)])i=r-1
else{if(!(e>=t[r+1])){n=r
break}n=r+1}return n}(e,this.lineToIndex)
return{line:t+this.origin,col:e-this.lineToIndex[t]+this.origin}},o.prototype.toIndex=function(e,t){if(void 0===t)return n(e)&&e.length>=2?this.toIndex(e[0],e[1]):i(e)&&"line"in e&&("col"in e||"column"in e)?this.toIndex(e.line,"col"in e?e.col:e.column):-1
if(isNaN(e)||isNaN(t))return-1
if(e-=this.origin,t-=this.origin,e>=0&&t>=0&&e<this.lineToIndex.length){var r=this.lineToIndex[e]
if(t<(e===this.lineToIndex.length-1?this.str.length:this.lineToIndex[e+1])-r)return r+t}return-1}},9083(e,t,r){var n
e=r.nmd(e),function(){var i,o="Expected a function",a="__lodash_hash_undefined__",s="__lodash_placeholder__",l=32,c=128,u=1/0,d=9007199254740991,f=NaN,p=4294967295,h=[["ary",c],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",l],["partialRight",64],["rearg",256]],g="[object Arguments]",m="[object Array]",b="[object Boolean]",y="[object Date]",v="[object Error]",w="[object Function]",x="[object GeneratorFunction]",k="[object Map]",E="[object Number]",_="[object Object]",A="[object Promise]",T="[object RegExp]",S="[object Set]",O="[object String]",N="[object Symbol]",C="[object WeakMap]",D="[object ArrayBuffer]",L="[object DataView]",q="[object Float32Array]",R="[object Float64Array]",P="[object Int8Array]",j="[object Int16Array]",I="[object Int32Array]",M="[object Uint8Array]",B="[object Uint8ClampedArray]",F="[object Uint16Array]",z="[object Uint32Array]",U=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,$=/(__e\(.*?\)|\b__t\)) \+\n'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,W=/[&<>"']/g,G=RegExp(V.source),Q=RegExp(W.source),Z=/<%-([\s\S]+?)%>/g,K=/<%([\s\S]+?)%>/g,Y=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/,ee=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/[\\^$.*+?()[\]{}|]/g,re=RegExp(te.source),ne=/^\s+/,ie=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ae=/\{\n\/\* \[wrapped with (.+)\] \*/,se=/,? & /,le=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ce=/[()=,{}\[\]\/\s]/,ue=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,fe=/\w*$/,pe=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,ge=/^\[object .+?Constructor\]$/,me=/^0o[0-7]+$/i,be=/^(?:0|[1-9]\d*)$/,ye=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,we=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",ke="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ee="\\u2700-\\u27bf",_e="a-z\\xdf-\\xf6\\xf8-\\xff",Ae="A-Z\\xc0-\\xd6\\xd8-\\xde",Te="\\ufe0e\\ufe0f",Se="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Oe="["+xe+"]",Ne="["+Se+"]",Ce="["+ke+"]",De="\\d+",Le="["+Ee+"]",qe="["+_e+"]",Re="[^"+xe+Se+De+Ee+_e+Ae+"]",Pe="\\ud83c[\\udffb-\\udfff]",je="[^"+xe+"]",Ie="(?:\\ud83c[\\udde6-\\uddff]){2}",Me="[\\ud800-\\udbff][\\udc00-\\udfff]",Be="["+Ae+"]",Fe="\\u200d",ze="(?:"+qe+"|"+Re+")",Ue="(?:"+Be+"|"+Re+")",He="(?:['’](?:d|ll|m|re|s|t|ve))?",$e="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ve="(?:"+Ce+"|"+Pe+")?",We="["+Te+"]?",Ge=We+Ve+"(?:"+Fe+"(?:"+[je,Ie,Me].join("|")+")"+We+Ve+")*",Qe="(?:"+[Le,Ie,Me].join("|")+")"+Ge,Ze="(?:"+[je+Ce+"?",Ce,Ie,Me,Oe].join("|")+")",Ke=RegExp("['’]","g"),Ye=RegExp(Ce,"g"),Xe=RegExp(Pe+"(?="+Pe+")|"+Ze+Ge,"g"),Je=RegExp([Be+"?"+qe+"+"+He+"(?="+[Ne,Be,"$"].join("|")+")",Ue+"+"+$e+"(?="+[Ne,Be+ze,"$"].join("|")+")",Be+"?"+ze+"+"+He,Be+"+"+$e,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",De,Qe].join("|"),"g"),et=RegExp("["+Fe+xe+ke+Te+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,rt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],nt=-1,it={}
it[q]=it[R]=it[P]=it[j]=it[I]=it[M]=it[B]=it[F]=it[z]=!0,it[g]=it[m]=it[D]=it[b]=it[L]=it[y]=it[v]=it[w]=it[k]=it[E]=it[_]=it[T]=it[S]=it[O]=it[C]=!1
var ot={}
ot[g]=ot[m]=ot[D]=ot[L]=ot[b]=ot[y]=ot[q]=ot[R]=ot[P]=ot[j]=ot[I]=ot[k]=ot[E]=ot[_]=ot[T]=ot[S]=ot[O]=ot[N]=ot[M]=ot[B]=ot[F]=ot[z]=!0,ot[v]=ot[w]=ot[C]=!1
var at={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,lt=parseInt,ct="object"==typeof global&&global&&global.Object===Object&&global,ut="object"==typeof self&&self&&self.Object===Object&&self,dt=ct||ut||Function("return this")(),ft=t&&!t.nodeType&&t,pt=ft&&e&&!e.nodeType&&e,ht=pt&&pt.exports===ft,gt=ht&&ct.process,mt=function(){try{return pt&&pt.require&&pt.require("util").types||gt&&gt.binding&&gt.binding("util")}catch(e){}}(),bt=mt&&mt.isArrayBuffer,yt=mt&&mt.isDate,vt=mt&&mt.isMap,wt=mt&&mt.isRegExp,xt=mt&&mt.isSet,kt=mt&&mt.isTypedArray
function Et(e,t,r){switch(r.length){case 0:return e.call(t)
case 1:return e.call(t,r[0])
case 2:return e.call(t,r[0],r[1])
case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function _t(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i]
t(n,a,r(a),e)}return n}function At(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Tt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function St(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1
return!0}function Ot(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r]
t(a,r,e)&&(o[i++]=a)}return o}function Nt(e,t){return!(null==e||!e.length)&&Bt(e,t,0)>-1}function Ct(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0
return!1}function Dt(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e)
return i}function Lt(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r]
return e}function qt(e,t,r,n){var i=-1,o=null==e?0:e.length
for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e)
return r}function Rt(e,t,r,n){var i=null==e?0:e.length
for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e)
return r}function Pt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0
return!1}var jt=Ht("length")
function It(e,t,r){var n
return r(e,function(e,r,i){if(t(e,r,i))return n=r,!1}),n}function Mt(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o
return-1}function Bt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n
return-1}(e,t,r):Mt(e,zt,r)}function Ft(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i
return-1}function zt(e){return e!=e}function Ut(e,t){var r=null==e?0:e.length
return r?Wt(e,t)/r:f}function Ht(e){return function(t){return null==t?i:t[e]}}function $t(e){return function(t){return null==e?i:e[t]}}function Vt(e,t,r,n,i){return i(e,function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)}),r}function Wt(e,t){for(var r,n=-1,o=e.length;++n<o;){var a=t(e[n])
a!==i&&(r=r===i?a:r+a)}return r}function Gt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r)
return n}function Qt(e){return e?e.slice(0,ur(e)+1).replace(ne,""):e}function Zt(e){return function(t){return e(t)}}function Kt(e,t){return Dt(t,function(t){return e[t]})}function Yt(e,t){return e.has(t)}function Xt(e,t){for(var r=-1,n=e.length;++r<n&&Bt(t,e[r],0)>-1;);return r}function Jt(e,t){for(var r=e.length;r--&&Bt(t,e[r],0)>-1;);return r}var er=$t({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tr=$t({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})
function rr(e){return"\\"+at[e]}function nr(e){return et.test(e)}function ir(e){var t=-1,r=Array(e.size)
return e.forEach(function(e,n){r[++t]=[n,e]}),r}function or(e,t){return function(r){return e(t(r))}}function ar(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r]
a!==t&&a!==s||(e[r]=s,o[i++]=r)}return o}function sr(e){var t=-1,r=Array(e.size)
return e.forEach(function(e){r[++t]=e}),r}function lr(e){return nr(e)?function(e){for(var t=Xe.lastIndex=0;Xe.test(e);)++t
return t}(e):jt(e)}function cr(e){return nr(e)?function(e){return e.match(Xe)||[]}(e):function(e){return e.split("")}(e)}function ur(e){for(var t=e.length;t--&&ie.test(e.charAt(t)););return t}var dr=$t({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),fr=function e(t){var r,n=(t=null==t?dt:fr.defaults(dt.Object(),t,fr.pick(dt,rt))).Array,ie=t.Date,xe=t.Error,ke=t.Function,Ee=t.Math,_e=t.Object,Ae=t.RegExp,Te=t.String,Se=t.TypeError,Oe=n.prototype,Ne=ke.prototype,Ce=_e.prototype,De=t["__core-js_shared__"],Le=Ne.toString,qe=Ce.hasOwnProperty,Re=0,Pe=(r=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",je=Ce.toString,Ie=Le.call(_e),Me=dt._,Be=Ae("^"+Le.call(qe).replace(te,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fe=ht?t.Buffer:i,ze=t.Symbol,Ue=t.Uint8Array,He=Fe?Fe.allocUnsafe:i,$e=or(_e.getPrototypeOf,_e),Ve=_e.create,We=Ce.propertyIsEnumerable,Ge=Oe.splice,Qe=ze?ze.isConcatSpreadable:i,Ze=ze?ze.iterator:i,Xe=ze?ze.toStringTag:i,et=function(){try{var e=so(_e,"defineProperty")
return e({},"",{}),e}catch(e){}}(),at=t.clearTimeout!==dt.clearTimeout&&t.clearTimeout,ct=ie&&ie.now!==dt.Date.now&&ie.now,ut=t.setTimeout!==dt.setTimeout&&t.setTimeout,ft=Ee.ceil,pt=Ee.floor,gt=_e.getOwnPropertySymbols,mt=Fe?Fe.isBuffer:i,jt=t.isFinite,$t=Oe.join,pr=or(_e.keys,_e),hr=Ee.max,gr=Ee.min,mr=ie.now,br=t.parseInt,yr=Ee.random,vr=Oe.reverse,wr=so(t,"DataView"),xr=so(t,"Map"),kr=so(t,"Promise"),Er=so(t,"Set"),_r=so(t,"WeakMap"),Ar=so(_e,"create"),Tr=_r&&new _r,Sr={},Or=jo(wr),Nr=jo(xr),Cr=jo(kr),Dr=jo(Er),Lr=jo(_r),qr=ze?ze.prototype:i,Rr=qr?qr.valueOf:i,Pr=qr?qr.toString:i
function jr(e){if(Ja(e)&&!Ua(e)&&!(e instanceof Fr)){if(e instanceof Br)return e
if(qe.call(e,"__wrapped__"))return Io(e)}return new Br(e)}var Ir=function(){function e(){}return function(t){if(!Xa(t))return{}
if(Ve)return Ve(t)
e.prototype=t
var r=new e
return e.prototype=i,r}}()
function Mr(){}function Br(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=i}function Fr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=p,this.__views__=[]}function zr(e){var t=-1,r=null==e?0:e.length
for(this.clear();++t<r;){var n=e[t]
this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length
for(this.clear();++t<r;){var n=e[t]
this.set(n[0],n[1])}}function Hr(e){var t=-1,r=null==e?0:e.length
for(this.clear();++t<r;){var n=e[t]
this.set(n[0],n[1])}}function $r(e){var t=-1,r=null==e?0:e.length
for(this.__data__=new Hr;++t<r;)this.add(e[t])}function Vr(e){var t=this.__data__=new Ur(e)
this.size=t.size}function Wr(e,t){var r=Ua(e),n=!r&&za(e),i=!r&&!n&&Wa(e),o=!r&&!n&&!i&&ss(e),a=r||n||i||o,s=a?Gt(e.length,Te):[],l=s.length
for(var c in e)!t&&!qe.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||go(c,l))||s.push(c)
return s}function Gr(e){var t=e.length
return t?e[$n(0,t-1)]:i}function Qr(e,t){return Do(Ai(e),nn(t,0,e.length))}function Zr(e){return Do(Ai(e))}function Kr(e,t,r){(r!==i&&!Ma(e[t],r)||r===i&&!(t in e))&&tn(e,t,r)}function Yr(e,t,r){var n=e[t]
qe.call(e,t)&&Ma(n,r)&&(r!==i||t in e)||tn(e,t,r)}function Xr(e,t){for(var r=e.length;r--;)if(Ma(e[r][0],t))return r
return-1}function Jr(e,t,r,n){return cn(e,function(e,i,o){t(n,e,r(e),o)}),n}function en(e,t){return e&&Ti(t,Ns(t),e)}function tn(e,t,r){"__proto__"==t&&et?et(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function rn(e,t){for(var r=-1,o=t.length,a=n(o),s=null==e;++r<o;)a[r]=s?i:_s(e,t[r])
return a}function nn(e,t,r){return e==e&&(r!==i&&(e=e<=r?e:r),t!==i&&(e=e>=t?e:t)),e}function on(e,t,r,n,o,a){var s,l=1&t,c=2&t,u=4&t
if(r&&(s=o?r(e,n,o,a):r(e)),s!==i)return s
if(!Xa(e))return e
var d=Ua(e)
if(d){if(s=function(e){var t=e.length,r=new e.constructor(t)
return t&&"string"==typeof e[0]&&qe.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(e),!l)return Ai(e,s)}else{var f=uo(e),p=f==w||f==x
if(Wa(e))return vi(e,l)
if(f==_||f==g||p&&!o){if(s=c||p?{}:po(e),!l)return c?function(e,t){return Ti(e,co(e),t)}(e,function(e,t){return e&&Ti(t,Cs(t),e)}(s,e)):function(e,t){return Ti(e,lo(e),t)}(e,en(s,e))}else{if(!ot[f])return o?e:{}
s=function(e,t,r){var n,i=e.constructor
switch(t){case D:return wi(e)
case b:case y:return new i(+e)
case L:return function(e,t){var r=t?wi(e.buffer):e.buffer
return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r)
case q:case R:case P:case j:case I:case M:case B:case F:case z:return xi(e,r)
case k:return new i
case E:case O:return new i(e)
case T:return function(e){var t=new e.constructor(e.source,fe.exec(e))
return t.lastIndex=e.lastIndex,t}(e)
case S:return new i
case N:return n=e,Rr?_e(Rr.call(n)):{}}}(e,f,l)}}a||(a=new Vr)
var h=a.get(e)
if(h)return h
a.set(e,s),is(e)?e.forEach(function(n){s.add(on(n,t,r,n,e,a))}):es(e)&&e.forEach(function(n,i){s.set(i,on(n,t,r,i,e,a))})
var m=d?i:(u?c?eo:Ji:c?Cs:Ns)(e)
return At(m||e,function(n,i){m&&(n=e[i=n]),Yr(s,i,on(n,t,r,i,e,a))}),s}function an(e,t,r){var n=r.length
if(null==e)return!n
for(e=_e(e);n--;){var o=r[n],a=t[o],s=e[o]
if(s===i&&!(o in e)||!a(s))return!1}return!0}function sn(e,t,r){if("function"!=typeof e)throw new Se(o)
return So(function(){e.apply(i,r)},t)}function ln(e,t,r,n){var i=-1,o=Nt,a=!0,s=e.length,l=[],c=t.length
if(!s)return l
r&&(t=Dt(t,Zt(r))),n?(o=Ct,a=!1):t.length>=200&&(o=Yt,a=!1,t=new $r(t))
e:for(;++i<s;){var u=e[i],d=null==r?u:r(u)
if(u=n||0!==u?u:0,a&&d==d){for(var f=c;f--;)if(t[f]===d)continue e
l.push(u)}else o(t,d,n)||l.push(u)}return l}jr.templateSettings={escape:Z,evaluate:K,interpolate:Y,variable:"",imports:{_:jr}},jr.prototype=Mr.prototype,jr.prototype.constructor=jr,Br.prototype=Ir(Mr.prototype),Br.prototype.constructor=Br,Fr.prototype=Ir(Mr.prototype),Fr.prototype.constructor=Fr,zr.prototype.clear=function(){this.__data__=Ar?Ar(null):{},this.size=0},zr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e]
return this.size-=t?1:0,t},zr.prototype.get=function(e){var t=this.__data__
if(Ar){var r=t[e]
return r===a?i:r}return qe.call(t,e)?t[e]:i},zr.prototype.has=function(e){var t=this.__data__
return Ar?t[e]!==i:qe.call(t,e)},zr.prototype.set=function(e,t){var r=this.__data__
return this.size+=this.has(e)?0:1,r[e]=Ar&&t===i?a:t,this},Ur.prototype.clear=function(){this.__data__=[],this.size=0},Ur.prototype.delete=function(e){var t=this.__data__,r=Xr(t,e)
return!(r<0||(r==t.length-1?t.pop():Ge.call(t,r,1),--this.size,0))},Ur.prototype.get=function(e){var t=this.__data__,r=Xr(t,e)
return r<0?i:t[r][1]},Ur.prototype.has=function(e){return Xr(this.__data__,e)>-1},Ur.prototype.set=function(e,t){var r=this.__data__,n=Xr(r,e)
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Hr.prototype.clear=function(){this.size=0,this.__data__={hash:new zr,map:new(xr||Ur),string:new zr}},Hr.prototype.delete=function(e){var t=oo(this,e).delete(e)
return this.size-=t?1:0,t},Hr.prototype.get=function(e){return oo(this,e).get(e)},Hr.prototype.has=function(e){return oo(this,e).has(e)},Hr.prototype.set=function(e,t){var r=oo(this,e),n=r.size
return r.set(e,t),this.size+=r.size==n?0:1,this},$r.prototype.add=$r.prototype.push=function(e){return this.__data__.set(e,a),this},$r.prototype.has=function(e){return this.__data__.has(e)},Vr.prototype.clear=function(){this.__data__=new Ur,this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e)
return this.size=t.size,r},Vr.prototype.get=function(e){return this.__data__.get(e)},Vr.prototype.has=function(e){return this.__data__.has(e)},Vr.prototype.set=function(e,t){var r=this.__data__
if(r instanceof Ur){var n=r.__data__
if(!xr||n.length<199)return n.push([e,t]),this.size=++r.size,this
r=this.__data__=new Hr(n)}return r.set(e,t),this.size=r.size,this}
var cn=Ni(bn),un=Ni(yn,!0)
function dn(e,t){var r=!0
return cn(e,function(e,n,i){return r=!!t(e,n,i)}),r}function fn(e,t,r){for(var n=-1,o=e.length;++n<o;){var a=e[n],s=t(a)
if(null!=s&&(l===i?s==s&&!as(s):r(s,l)))var l=s,c=a}return c}function pn(e,t){var r=[]
return cn(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r}function hn(e,t,r,n,i){var o=-1,a=e.length
for(r||(r=ho),i||(i=[]);++o<a;){var s=e[o]
t>0&&r(s)?t>1?hn(s,t-1,r,n,i):Lt(i,s):n||(i[i.length]=s)}return i}var gn=Ci(),mn=Ci(!0)
function bn(e,t){return e&&gn(e,t,Ns)}function yn(e,t){return e&&mn(e,t,Ns)}function vn(e,t){return Ot(t,function(t){return Za(e[t])})}function wn(e,t){for(var r=0,n=(t=gi(t,e)).length;null!=e&&r<n;)e=e[Po(t[r++])]
return r&&r==n?e:i}function xn(e,t,r){var n=t(e)
return Ua(e)?n:Lt(n,r(e))}function kn(e){return null==e?e===i?"[object Undefined]":"[object Null]":Xe&&Xe in _e(e)?function(e){var t=qe.call(e,Xe),r=e[Xe]
try{e[Xe]=i
var n=!0}catch(e){}var o=je.call(e)
return n&&(t?e[Xe]=r:delete e[Xe]),o}(e):function(e){return je.call(e)}(e)}function En(e,t){return e>t}function _n(e,t){return null!=e&&qe.call(e,t)}function An(e,t){return null!=e&&t in _e(e)}function Tn(e,t,r){for(var o=r?Ct:Nt,a=e[0].length,s=e.length,l=s,c=n(s),u=1/0,d=[];l--;){var f=e[l]
l&&t&&(f=Dt(f,Zt(t))),u=gr(f.length,u),c[l]=!r&&(t||a>=120&&f.length>=120)?new $r(l&&f):i}f=e[0]
var p=-1,h=c[0]
e:for(;++p<a&&d.length<u;){var g=f[p],m=t?t(g):g
if(g=r||0!==g?g:0,!(h?Yt(h,m):o(d,m,r))){for(l=s;--l;){var b=c[l]
if(!(b?Yt(b,m):o(e[l],m,r)))continue e}h&&h.push(m),d.push(g)}}return d}function Sn(e,t,r){var n=null==(e=_o(e,t=gi(t,e)))?e:e[Po(Qo(t))]
return null==n?i:Et(n,e,r)}function On(e){return Ja(e)&&kn(e)==g}function Nn(e,t,r,n,o){return e===t||(null==e||null==t||!Ja(e)&&!Ja(t)?e!=e&&t!=t:function(e,t,r,n,o,a){var s=Ua(e),l=Ua(t),c=s?m:uo(e),u=l?m:uo(t),d=(c=c==g?_:c)==_,f=(u=u==g?_:u)==_,p=c==u
if(p&&Wa(e)){if(!Wa(t))return!1
s=!0,d=!1}if(p&&!d)return a||(a=new Vr),s||ss(e)?Yi(e,t,r,n,o,a):function(e,t,r,n,i,o,a){switch(r){case L:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1
e=e.buffer,t=t.buffer
case D:return!(e.byteLength!=t.byteLength||!o(new Ue(e),new Ue(t)))
case b:case y:case E:return Ma(+e,+t)
case v:return e.name==t.name&&e.message==t.message
case T:case O:return e==t+""
case k:var s=ir
case S:var l=1&n
if(s||(s=sr),e.size!=t.size&&!l)return!1
var c=a.get(e)
if(c)return c==t
n|=2,a.set(e,t)
var u=Yi(s(e),s(t),n,i,o,a)
return a.delete(e),u
case N:if(Rr)return Rr.call(e)==Rr.call(t)}return!1}(e,t,c,r,n,o,a)
if(!(1&r)){var h=d&&qe.call(e,"__wrapped__"),w=f&&qe.call(t,"__wrapped__")
if(h||w){var x=h?e.value():e,A=w?t.value():t
return a||(a=new Vr),o(x,A,r,n,a)}}return!!p&&(a||(a=new Vr),function(e,t,r,n,o,a){var s=1&r,l=Ji(e),c=l.length
if(c!=Ji(t).length&&!s)return!1
for(var u=c;u--;){var d=l[u]
if(!(s?d in t:qe.call(t,d)))return!1}var f=a.get(e),p=a.get(t)
if(f&&p)return f==t&&p==e
var h=!0
a.set(e,t),a.set(t,e)
for(var g=s;++u<c;){var m=e[d=l[u]],b=t[d]
if(n)var y=s?n(b,m,d,t,e,a):n(m,b,d,e,t,a)
if(!(y===i?m===b||o(m,b,r,n,a):y)){h=!1
break}g||(g="constructor"==d)}if(h&&!g){var v=e.constructor,w=t.constructor
v==w||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof w&&w instanceof w||(h=!1)}return a.delete(e),a.delete(t),h}(e,t,r,n,o,a))}(e,t,r,n,Nn,o))}function Cn(e,t,r,n){var o=r.length,a=o,s=!n
if(null==e)return!a
for(e=_e(e);o--;){var l=r[o]
if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<a;){var c=(l=r[o])[0],u=e[c],d=l[1]
if(s&&l[2]){if(u===i&&!(c in e))return!1}else{var f=new Vr
if(n)var p=n(u,d,c,e,t,f)
if(!(p===i?Nn(d,u,3,n,f):p))return!1}}return!0}function Dn(e){return!(!Xa(e)||(t=e,Pe&&Pe in t))&&(Za(e)?Be:ge).test(jo(e))
var t}function Ln(e){return"function"==typeof e?e:null==e?tl:"object"==typeof e?Ua(e)?In(e[0],e[1]):jn(e):ul(e)}function qn(e){if(!wo(e))return pr(e)
var t=[]
for(var r in _e(e))qe.call(e,r)&&"constructor"!=r&&t.push(r)
return t}function Rn(e,t){return e<t}function Pn(e,t){var r=-1,i=$a(e)?n(e.length):[]
return cn(e,function(e,n,o){i[++r]=t(e,n,o)}),i}function jn(e){var t=ao(e)
return 1==t.length&&t[0][2]?ko(t[0][0],t[0][1]):function(r){return r===e||Cn(r,e,t)}}function In(e,t){return bo(e)&&xo(t)?ko(Po(e),t):function(r){var n=_s(r,e)
return n===i&&n===t?As(r,e):Nn(t,n,3)}}function Mn(e,t,r,n,o){e!==t&&gn(t,function(a,s){if(o||(o=new Vr),Xa(a))!function(e,t,r,n,o,a,s){var l=Ao(e,r),c=Ao(t,r),u=s.get(c)
if(u)Kr(e,r,u)
else{var d=a?a(l,c,r+"",e,t,s):i,f=d===i
if(f){var p=Ua(c),h=!p&&Wa(c),g=!p&&!h&&ss(c)
d=c,p||h||g?Ua(l)?d=l:Va(l)?d=Ai(l):h?(f=!1,d=vi(c,!0)):g?(f=!1,d=xi(c,!0)):d=[]:rs(c)||za(c)?(d=l,za(l)?d=gs(l):Xa(l)&&!Za(l)||(d=po(c))):f=!1}f&&(s.set(c,d),o(d,c,n,a,s),s.delete(c)),Kr(e,r,d)}}(e,t,s,r,Mn,n,o)
else{var l=n?n(Ao(e,s),a,s+"",e,t,o):i
l===i&&(l=a),Kr(e,s,l)}},Cs)}function Bn(e,t){var r=e.length
if(r)return go(t+=t<0?r:0,r)?e[t]:i}function Fn(e,t,r){t=t.length?Dt(t,function(e){return Ua(e)?function(t){return wn(t,1===e.length?e[0]:e)}:e}):[tl]
var n=-1
t=Dt(t,Zt(io()))
var i=Pn(e,function(e,r,i){var o=Dt(t,function(t){return t(e)})
return{criteria:o,index:++n,value:e}})
return function(e){var t=e.length
for(e.sort(function(e,t){return function(e,t,r){for(var n=-1,i=e.criteria,o=t.criteria,a=i.length,s=r.length;++n<a;){var l=ki(i[n],o[n])
if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)});t--;)e[t]=e[t].value
return e}(i)}function zn(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var a=t[n],s=wn(e,a)
r(s,a)&&Zn(o,gi(a,e),s)}return o}function Un(e,t,r,n){var i=n?Ft:Bt,o=-1,a=t.length,s=e
for(e===t&&(t=Ai(t)),r&&(s=Dt(e,Zt(r)));++o<a;)for(var l=0,c=t[o],u=r?r(c):c;(l=i(s,u,l,n))>-1;)s!==e&&Ge.call(s,l,1),Ge.call(e,l,1)
return e}function Hn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r]
if(r==n||i!==o){var o=i
go(i)?Ge.call(e,i,1):si(e,i)}}return e}function $n(e,t){return e+pt(yr()*(t-e+1))}function Vn(e,t){var r=""
if(!e||t<1||t>d)return r
do{t%2&&(r+=e),(t=pt(t/2))&&(e+=e)}while(t)
return r}function Wn(e,t){return Oo(Eo(e,t,tl),e+"")}function Gn(e){return Gr(Ms(e))}function Qn(e,t){var r=Ms(e)
return Do(r,nn(t,0,r.length))}function Zn(e,t,r,n){if(!Xa(e))return e
for(var o=-1,a=(t=gi(t,e)).length,s=a-1,l=e;null!=l&&++o<a;){var c=Po(t[o]),u=r
if("__proto__"===c||"constructor"===c||"prototype"===c)return e
if(o!=s){var d=l[c];(u=n?n(d,c,l):i)===i&&(u=Xa(d)?d:go(t[o+1])?[]:{})}Yr(l,c,u),l=l[c]}return e}var Kn=Tr?function(e,t){return Tr.set(e,t),e}:tl,Yn=et?function(e,t){return et(e,"toString",{configurable:!0,enumerable:!1,value:Xs(t),writable:!0})}:tl
function Xn(e){return Do(Ms(e))}function Jn(e,t,r){var i=-1,o=e.length
t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0
for(var a=n(o);++i<o;)a[i]=e[i+t]
return a}function ei(e,t){var r
return cn(e,function(e,n,i){return!(r=t(e,n,i))}),!!r}function ti(e,t,r){var n=0,i=null==e?n:e.length
if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,a=e[o]
null!==a&&!as(a)&&(r?a<=t:a<t)?n=o+1:i=o}return i}return ri(e,t,tl,r)}function ri(e,t,r,n){var o=0,a=null==e?0:e.length
if(0===a)return 0
for(var s=(t=r(t))!=t,l=null===t,c=as(t),u=t===i;o<a;){var d=pt((o+a)/2),f=r(e[d]),p=f!==i,h=null===f,g=f==f,m=as(f)
if(s)var b=n||g
else b=u?g&&(n||p):l?g&&p&&(n||!h):c?g&&p&&!h&&(n||!m):!h&&!m&&(n?f<=t:f<t)
b?o=d+1:a=d}return gr(a,4294967294)}function ni(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r],s=t?t(a):a
if(!r||!Ma(s,l)){var l=s
o[i++]=0===a?0:a}}return o}function ii(e){return"number"==typeof e?e:as(e)?f:+e}function oi(e){if("string"==typeof e)return e
if(Ua(e))return Dt(e,oi)+""
if(as(e))return Pr?Pr.call(e):""
var t=e+""
return"0"==t&&1/e==-1/0?"-0":t}function ai(e,t,r){var n=-1,i=Nt,o=e.length,a=!0,s=[],l=s
if(r)a=!1,i=Ct
else if(o>=200){var c=t?null:Vi(e)
if(c)return sr(c)
a=!1,i=Yt,l=new $r}else l=t?[]:s
e:for(;++n<o;){var u=e[n],d=t?t(u):u
if(u=r||0!==u?u:0,a&&d==d){for(var f=l.length;f--;)if(l[f]===d)continue e
t&&l.push(d),s.push(u)}else i(l,d,r)||(l!==s&&l.push(d),s.push(u))}return s}function si(e,t){var r=-1,n=(t=gi(t,e)).length
if(!n)return!0
for(;++r<n;){var i=Po(t[r])
if("__proto__"===i&&!qe.call(e,"__proto__"))return!1
if(("constructor"===i||"prototype"===i)&&r<n-1)return!1}var o=_o(e,t)
return null==o||delete o[Po(Qo(t))]}function li(e,t,r,n){return Zn(e,t,r(wn(e,t)),n)}function ci(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?Jn(e,n?0:o,n?o+1:i):Jn(e,n?o+1:0,n?i:o)}function ui(e,t){var r=e
return r instanceof Fr&&(r=r.value()),qt(t,function(e,t){return t.func.apply(t.thisArg,Lt([e],t.args))},r)}function di(e,t,r){var i=e.length
if(i<2)return i?ai(e[0]):[]
for(var o=-1,a=n(i);++o<i;)for(var s=e[o],l=-1;++l<i;)l!=o&&(a[o]=ln(a[o]||s,e[l],t,r))
return ai(hn(a,1),t,r)}function fi(e,t,r){for(var n=-1,o=e.length,a=t.length,s={};++n<o;){var l=n<a?t[n]:i
r(s,e[n],l)}return s}function pi(e){return Va(e)?e:[]}function hi(e){return"function"==typeof e?e:tl}function gi(e,t){return Ua(e)?e:bo(e,t)?[e]:Ro(ms(e))}var mi=Wn
function bi(e,t,r){var n=e.length
return r=r===i?n:r,!t&&r>=n?e:Jn(e,t,r)}var yi=at||function(e){return dt.clearTimeout(e)}
function vi(e,t){if(t)return e.slice()
var r=e.length,n=He?He(r):new e.constructor(r)
return e.copy(n),n}function wi(e){var t=new e.constructor(e.byteLength)
return new Ue(t).set(new Ue(e)),t}function xi(e,t){var r=t?wi(e.buffer):e.buffer
return new e.constructor(r,e.byteOffset,e.length)}function ki(e,t){if(e!==t){var r=e!==i,n=null===e,o=e==e,a=as(e),s=t!==i,l=null===t,c=t==t,u=as(t)
if(!l&&!u&&!a&&e>t||a&&s&&c&&!l&&!u||n&&s&&c||!r&&c||!o)return 1
if(!n&&!a&&!u&&e<t||u&&r&&o&&!n&&!a||l&&r&&o||!s&&o||!c)return-1}return 0}function Ei(e,t,r,i){for(var o=-1,a=e.length,s=r.length,l=-1,c=t.length,u=hr(a-s,0),d=n(c+u),f=!i;++l<c;)d[l]=t[l]
for(;++o<s;)(f||o<a)&&(d[r[o]]=e[o])
for(;u--;)d[l++]=e[o++]
return d}function _i(e,t,r,i){for(var o=-1,a=e.length,s=-1,l=r.length,c=-1,u=t.length,d=hr(a-l,0),f=n(d+u),p=!i;++o<d;)f[o]=e[o]
for(var h=o;++c<u;)f[h+c]=t[c]
for(;++s<l;)(p||o<a)&&(f[h+r[s]]=e[o++])
return f}function Ai(e,t){var r=-1,i=e.length
for(t||(t=n(i));++r<i;)t[r]=e[r]
return t}function Ti(e,t,r,n){var o=!r
r||(r={})
for(var a=-1,s=t.length;++a<s;){var l=t[a],c=n?n(r[l],e[l],l,r,e):i
c===i&&(c=e[l]),o?tn(r,l,c):Yr(r,l,c)}return r}function Si(e,t){return function(r,n){var i=Ua(r)?_t:Jr,o=t?t():{}
return i(r,e,io(n,2),o)}}function Oi(e){return Wn(function(t,r){var n=-1,o=r.length,a=o>1?r[o-1]:i,s=o>2?r[2]:i
for(a=e.length>3&&"function"==typeof a?(o--,a):i,s&&mo(r[0],r[1],s)&&(a=o<3?i:a,o=1),t=_e(t);++n<o;){var l=r[n]
l&&e(t,l,n,a)}return t})}function Ni(e,t){return function(r,n){if(null==r)return r
if(!$a(r))return e(r,n)
for(var i=r.length,o=t?i:-1,a=_e(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}function Ci(e){return function(t,r,n){for(var i=-1,o=_e(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i]
if(!1===r(o[l],l,o))break}return t}}function Di(e){return function(t){var r=nr(t=ms(t))?cr(t):i,n=r?r[0]:t.charAt(0),o=r?bi(r,1).join(""):t.slice(1)
return n[e]()+o}}function Li(e){return function(t){return qt(Zs(zs(t).replace(Ke,"")),e,"")}}function qi(e){return function(){var t=arguments
switch(t.length){case 0:return new e
case 1:return new e(t[0])
case 2:return new e(t[0],t[1])
case 3:return new e(t[0],t[1],t[2])
case 4:return new e(t[0],t[1],t[2],t[3])
case 5:return new e(t[0],t[1],t[2],t[3],t[4])
case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5])
case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Ir(e.prototype),n=e.apply(r,t)
return Xa(n)?n:r}}function Ri(e){return function(t,r,n){var o=_e(t)
if(!$a(t)){var a=io(r,3)
t=Ns(t),r=function(e){return a(o[e],e,o)}}var s=e(t,r,n)
return s>-1?o[a?t[s]:s]:i}}function Pi(e){return Xi(function(t){var r=t.length,n=r,a=Br.prototype.thru
for(e&&t.reverse();n--;){var s=t[n]
if("function"!=typeof s)throw new Se(o)
if(a&&!l&&"wrapper"==ro(s))var l=new Br([],!0)}for(n=l?n:r;++n<r;){var c=ro(s=t[n]),u="wrapper"==c?to(s):i
l=u&&yo(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?l[ro(u[0])].apply(l,u[3]):1==s.length&&yo(s)?l[c]():l.thru(s)}return function(){var e=arguments,n=e[0]
if(l&&1==e.length&&Ua(n))return l.plant(n).value()
for(var i=0,o=r?t[i].apply(this,e):n;++i<r;)o=t[i].call(this,o)
return o}})}function ji(e,t,r,o,a,s,l,u,d,f){var p=t&c,h=1&t,g=2&t,m=24&t,b=512&t,y=g?i:qi(e)
return function c(){for(var v=arguments.length,w=n(v),x=v;x--;)w[x]=arguments[x]
if(m)var k=no(c),E=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n
return n}(w,k)
if(o&&(w=Ei(w,o,a,m)),s&&(w=_i(w,s,l,m)),v-=E,m&&v<f){var _=ar(w,k)
return Hi(e,t,ji,c.placeholder,r,w,_,u,d,f-v)}var A=h?r:this,T=g?A[e]:e
return v=w.length,u?w=function(e,t){for(var r=e.length,n=gr(t.length,r),o=Ai(e);n--;){var a=t[n]
e[n]=go(a,r)?o[a]:i}return e}(w,u):b&&v>1&&w.reverse(),p&&d<v&&(w.length=d),this&&this!==dt&&this instanceof c&&(T=y||qi(T)),T.apply(A,w)}}function Ii(e,t){return function(r,n){return function(e,t,r,n){return bn(e,function(e,i,o){t(n,r(e),i,o)}),n}(r,e,t(n),{})}}function Mi(e,t){return function(r,n){var o
if(r===i&&n===i)return t
if(r!==i&&(o=r),n!==i){if(o===i)return n
"string"==typeof r||"string"==typeof n?(r=oi(r),n=oi(n)):(r=ii(r),n=ii(n)),o=e(r,n)}return o}}function Bi(e){return Xi(function(t){return t=Dt(t,Zt(io())),Wn(function(r){var n=this
return e(t,function(e){return Et(e,n,r)})})})}function Fi(e,t){var r=(t=t===i?" ":oi(t)).length
if(r<2)return r?Vn(t,e):t
var n=Vn(t,ft(e/lr(t)))
return nr(t)?bi(cr(n),0,e).join(""):n.slice(0,e)}function zi(e){return function(t,r,o){return o&&"number"!=typeof o&&mo(t,r,o)&&(r=o=i),t=ds(t),r===i?(r=t,t=0):r=ds(r),function(e,t,r,i){for(var o=-1,a=hr(ft((t-e)/(r||1)),0),s=n(a);a--;)s[i?a:++o]=e,e+=r
return s}(t,r,o=o===i?t<r?1:-1:ds(o),e)}}function Ui(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=hs(t),r=hs(r)),e(t,r)}}function Hi(e,t,r,n,o,a,s,c,u,d){var f=8&t
t|=f?l:64,4&(t&=~(f?64:l))||(t&=-4)
var p=[e,t,o,f?a:i,f?s:i,f?i:a,f?i:s,c,u,d],h=r.apply(i,p)
return yo(e)&&To(h,p),h.placeholder=n,No(h,e,t)}function $i(e){var t=Ee[e]
return function(e,r){if(e=hs(e),(r=null==r?0:gr(fs(r),292))&&jt(e)){var n=(ms(e)+"e").split("e")
return+((n=(ms(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Vi=Er&&1/sr(new Er([,-0]))[1]==u?function(e){return new Er(e)}:al
function Wi(e){return function(t){var r=uo(t)
return r==k?ir(t):r==S?function(e){var t=-1,r=Array(e.size)
return e.forEach(function(e){r[++t]=[e,e]}),r}(t):function(e,t){return Dt(t,function(t){return[t,e[t]]})}(t,e(t))}}function Gi(e,t,r,a,u,d,f,p){var h=2&t
if(!h&&"function"!=typeof e)throw new Se(o)
var g=a?a.length:0
if(g||(t&=-97,a=u=i),f=f===i?f:hr(fs(f),0),p=p===i?p:fs(p),g-=u?u.length:0,64&t){var m=a,b=u
a=u=i}var y=h?i:to(e),v=[e,t,r,a,u,m,b,d,f,p]
if(y&&function(e,t){var r=e[1],n=t[1],i=r|n,o=i<131,a=n==c&&8==r||n==c&&256==r&&e[7].length<=t[8]||384==n&&t[7].length<=t[8]&&8==r
if(!o&&!a)return e
1&n&&(e[2]=t[2],i|=1&r?0:4)
var l=t[3]
if(l){var u=e[3]
e[3]=u?Ei(u,l,t[4]):l,e[4]=u?ar(e[3],s):t[4]}(l=t[5])&&(u=e[5],e[5]=u?_i(u,l,t[6]):l,e[6]=u?ar(e[5],s):t[6]),(l=t[7])&&(e[7]=l),n&c&&(e[8]=null==e[8]?t[8]:gr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(v,y),e=v[0],t=v[1],r=v[2],a=v[3],u=v[4],!(p=v[9]=v[9]===i?h?0:e.length:hr(v[9]-g,0))&&24&t&&(t&=-25),t&&1!=t)w=8==t||16==t?function(e,t,r){var o=qi(e)
return function a(){for(var s=arguments.length,l=n(s),c=s,u=no(a);c--;)l[c]=arguments[c]
var d=s<3&&l[0]!==u&&l[s-1]!==u?[]:ar(l,u)
return(s-=d.length)<r?Hi(e,t,ji,a.placeholder,i,l,d,i,i,r-s):Et(this&&this!==dt&&this instanceof a?o:e,this,l)}}(e,t,p):t!=l&&33!=t||u.length?ji.apply(i,v):function(e,t,r,i){var o=1&t,a=qi(e)
return function t(){for(var s=-1,l=arguments.length,c=-1,u=i.length,d=n(u+l),f=this&&this!==dt&&this instanceof t?a:e;++c<u;)d[c]=i[c]
for(;l--;)d[c++]=arguments[++s]
return Et(f,o?r:this,d)}}(e,t,r,a)
else var w=function(e,t,r){var n=1&t,i=qi(e)
return function t(){return(this&&this!==dt&&this instanceof t?i:e).apply(n?r:this,arguments)}}(e,t,r)
return No((y?Kn:To)(w,v),e,t)}function Qi(e,t,r,n){return e===i||Ma(e,Ce[r])&&!qe.call(n,r)?t:e}function Zi(e,t,r,n,o,a){return Xa(e)&&Xa(t)&&(a.set(t,e),Mn(e,t,i,Zi,a),a.delete(t)),e}function Ki(e){return rs(e)?i:e}function Yi(e,t,r,n,o,a){var s=1&r,l=e.length,c=t.length
if(l!=c&&!(s&&c>l))return!1
var u=a.get(e),d=a.get(t)
if(u&&d)return u==t&&d==e
var f=-1,p=!0,h=2&r?new $r:i
for(a.set(e,t),a.set(t,e);++f<l;){var g=e[f],m=t[f]
if(n)var b=s?n(m,g,f,t,e,a):n(g,m,f,e,t,a)
if(b!==i){if(b)continue
p=!1
break}if(h){if(!Pt(t,function(e,t){if(!Yt(h,t)&&(g===e||o(g,e,r,n,a)))return h.push(t)})){p=!1
break}}else if(g!==m&&!o(g,m,r,n,a)){p=!1
break}}return a.delete(e),a.delete(t),p}function Xi(e){return Oo(Eo(e,i,Ho),e+"")}function Ji(e){return xn(e,Ns,lo)}function eo(e){return xn(e,Cs,co)}var to=Tr?function(e){return Tr.get(e)}:al
function ro(e){for(var t=e.name+"",r=Sr[t],n=qe.call(Sr,t)?r.length:0;n--;){var i=r[n],o=i.func
if(null==o||o==e)return i.name}return t}function no(e){return(qe.call(jr,"placeholder")?jr:e).placeholder}function io(){var e=jr.iteratee||rl
return e=e===rl?Ln:e,arguments.length?e(arguments[0],arguments[1]):e}function oo(e,t){var r,n,i=e.__data__
return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function ao(e){for(var t=Ns(e),r=t.length;r--;){var n=t[r],i=e[n]
t[r]=[n,i,xo(i)]}return t}function so(e,t){var r=function(e,t){return null==e?i:e[t]}(e,t)
return Dn(r)?r:i}var lo=gt?function(e){return null==e?[]:(e=_e(e),Ot(gt(e),function(t){return We.call(e,t)}))}:pl,co=gt?function(e){for(var t=[];e;)Lt(t,lo(e)),e=$e(e)
return t}:pl,uo=kn
function fo(e,t,r){for(var n=-1,i=(t=gi(t,e)).length,o=!1;++n<i;){var a=Po(t[n])
if(!(o=null!=e&&r(e,a)))break
e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ya(i)&&go(a,i)&&(Ua(e)||za(e))}function po(e){return"function"!=typeof e.constructor||wo(e)?{}:Ir($e(e))}function ho(e){return Ua(e)||za(e)||!!(Qe&&e&&e[Qe])}function go(e,t){var r=typeof e
return!!(t=t??d)&&("number"==r||"symbol"!=r&&be.test(e))&&e>-1&&e%1==0&&e<t}function mo(e,t,r){if(!Xa(r))return!1
var n=typeof t
return!!("number"==n?$a(r)&&go(t,r.length):"string"==n&&t in r)&&Ma(r[t],e)}function bo(e,t){if(Ua(e))return!1
var r=typeof e
return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!as(e))||J.test(e)||!X.test(e)||null!=t&&e in _e(t)}function yo(e){var t=ro(e),r=jr[t]
if("function"!=typeof r||!(t in Fr.prototype))return!1
if(e===r)return!0
var n=to(r)
return!!n&&e===n[0]}(wr&&uo(new wr(new ArrayBuffer(1)))!=L||xr&&uo(new xr)!=k||kr&&uo(kr.resolve())!=A||Er&&uo(new Er)!=S||_r&&uo(new _r)!=C)&&(uo=function(e){var t=kn(e),r=t==_?e.constructor:i,n=r?jo(r):""
if(n)switch(n){case Or:return L
case Nr:return k
case Cr:return A
case Dr:return S
case Lr:return C}return t})
var vo=De?Za:hl
function wo(e){var t=e&&e.constructor
return e===("function"==typeof t&&t.prototype||Ce)}function xo(e){return e==e&&!Xa(e)}function ko(e,t){return function(r){return null!=r&&r[e]===t&&(t!==i||e in _e(r))}}function Eo(e,t,r){return t=hr(t===i?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=hr(i.length-t,0),s=n(a);++o<a;)s[o]=i[t+o]
o=-1
for(var l=n(t+1);++o<t;)l[o]=i[o]
return l[t]=r(s),Et(e,this,l)}}function _o(e,t){return t.length<2?e:wn(e,Jn(t,0,-1))}function Ao(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var To=Co(Kn),So=ut||function(e,t){return dt.setTimeout(e,t)},Oo=Co(Yn)
function No(e,t,r){var n=t+""
return Oo(e,function(e,t){var r=t.length
if(!r)return e
var n=r-1
return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return At(h,function(r){var n="_."+r[0]
t&r[1]&&!Nt(e,n)&&e.push(n)}),e.sort()}(function(e){var t=e.match(ae)
return t?t[1].split(se):[]}(n),r)))}function Co(e){var t=0,r=0
return function(){var n=mr(),o=16-(n-r)
if(r=n,o>0){if(++t>=800)return arguments[0]}else t=0
return e.apply(i,arguments)}}function Do(e,t){var r=-1,n=e.length,o=n-1
for(t=t===i?n:t;++r<t;){var a=$n(r,o),s=e[a]
e[a]=e[r],e[r]=s}return e.length=t,e}var Lo,qo,Ro=(Lo=La(function(e){var t=[]
return 46===e.charCodeAt(0)&&t.push(""),e.replace(ee,function(e,r,n,i){t.push(n?i.replace(ue,"$1"):r||e)}),t},function(e){return 500===qo.size&&qo.clear(),e}),qo=Lo.cache,Lo)
function Po(e){if("string"==typeof e||as(e))return e
var t=e+""
return"0"==t&&1/e==-1/0?"-0":t}function jo(e){if(null!=e){try{return Le.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Io(e){if(e instanceof Fr)return e.clone()
var t=new Br(e.__wrapped__,e.__chain__)
return t.__actions__=Ai(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Mo=Wn(function(e,t){return Va(e)?ln(e,hn(t,1,Va,!0)):[]}),Bo=Wn(function(e,t){var r=Qo(t)
return Va(r)&&(r=i),Va(e)?ln(e,hn(t,1,Va,!0),io(r,2)):[]}),Fo=Wn(function(e,t){var r=Qo(t)
return Va(r)&&(r=i),Va(e)?ln(e,hn(t,1,Va,!0),i,r):[]})
function zo(e,t,r){var n=null==e?0:e.length
if(!n)return-1
var i=null==r?0:fs(r)
return i<0&&(i=hr(n+i,0)),Mt(e,io(t,3),i)}function Uo(e,t,r){var n=null==e?0:e.length
if(!n)return-1
var o=n-1
return r!==i&&(o=fs(r),o=r<0?hr(n+o,0):gr(o,n-1)),Mt(e,io(t,3),o,!0)}function Ho(e){return null!=e&&e.length?hn(e,1):[]}function $o(e){return e&&e.length?e[0]:i}var Vo=Wn(function(e){var t=Dt(e,pi)
return t.length&&t[0]===e[0]?Tn(t):[]}),Wo=Wn(function(e){var t=Qo(e),r=Dt(e,pi)
return t===Qo(r)?t=i:r.pop(),r.length&&r[0]===e[0]?Tn(r,io(t,2)):[]}),Go=Wn(function(e){var t=Qo(e),r=Dt(e,pi)
return(t="function"==typeof t?t:i)&&r.pop(),r.length&&r[0]===e[0]?Tn(r,i,t):[]})
function Qo(e){var t=null==e?0:e.length
return t?e[t-1]:i}var Zo=Wn(Ko)
function Ko(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Yo=Xi(function(e,t){var r=null==e?0:e.length,n=rn(e,t)
return Hn(e,Dt(t,function(e){return go(e,r)?+e:e}).sort(ki)),n})
function Xo(e){return null==e?e:vr.call(e)}var Jo=Wn(function(e){return ai(hn(e,1,Va,!0))}),ea=Wn(function(e){var t=Qo(e)
return Va(t)&&(t=i),ai(hn(e,1,Va,!0),io(t,2))}),ta=Wn(function(e){var t=Qo(e)
return t="function"==typeof t?t:i,ai(hn(e,1,Va,!0),i,t)})
function ra(e){if(!e||!e.length)return[]
var t=0
return e=Ot(e,function(e){if(Va(e))return t=hr(e.length,t),!0}),Gt(t,function(t){return Dt(e,Ht(t))})}function na(e,t){if(!e||!e.length)return[]
var r=ra(e)
return null==t?r:Dt(r,function(e){return Et(t,i,e)})}var ia=Wn(function(e,t){return Va(e)?ln(e,t):[]}),oa=Wn(function(e){return di(Ot(e,Va))}),aa=Wn(function(e){var t=Qo(e)
return Va(t)&&(t=i),di(Ot(e,Va),io(t,2))}),sa=Wn(function(e){var t=Qo(e)
return t="function"==typeof t?t:i,di(Ot(e,Va),i,t)}),la=Wn(ra),ca=Wn(function(e){var t=e.length,r=t>1?e[t-1]:i
return r="function"==typeof r?(e.pop(),r):i,na(e,r)})
function ua(e){var t=jr(e)
return t.__chain__=!0,t}function da(e,t){return t(e)}var fa=Xi(function(e){var t=e.length,r=t?e[0]:0,n=this.__wrapped__,o=function(t){return rn(t,e)}
return!(t>1||this.__actions__.length)&&n instanceof Fr&&go(r)?((n=n.slice(r,+r+(t?1:0))).__actions__.push({func:da,args:[o],thisArg:i}),new Br(n,this.__chain__).thru(function(e){return t&&!e.length&&e.push(i),e})):this.thru(o)}),pa=Si(function(e,t,r){qe.call(e,r)?++e[r]:tn(e,r,1)}),ha=Ri(zo),ga=Ri(Uo)
function ma(e,t){return(Ua(e)?At:cn)(e,io(t,3))}function ba(e,t){return(Ua(e)?Tt:un)(e,io(t,3))}var ya=Si(function(e,t,r){qe.call(e,r)?e[r].push(t):tn(e,r,[t])}),va=Wn(function(e,t,r){var i=-1,o="function"==typeof t,a=$a(e)?n(e.length):[]
return cn(e,function(e){a[++i]=o?Et(t,e,r):Sn(e,t,r)}),a}),wa=Si(function(e,t,r){tn(e,r,t)})
function xa(e,t){return(Ua(e)?Dt:Pn)(e,io(t,3))}var ka=Si(function(e,t,r){e[r?0:1].push(t)},function(){return[[],[]]}),Ea=Wn(function(e,t){if(null==e)return[]
var r=t.length
return r>1&&mo(e,t[0],t[1])?t=[]:r>2&&mo(t[0],t[1],t[2])&&(t=[t[0]]),Fn(e,hn(t,1),[])}),_a=ct||function(){return dt.Date.now()}
function Aa(e,t,r){return t=r?i:t,t=e&&null==t?e.length:t,Gi(e,c,i,i,i,i,t)}function Ta(e,t){var r
if("function"!=typeof t)throw new Se(o)
return e=fs(e),function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=i),r}}var Sa=Wn(function(e,t,r){var n=1
if(r.length){var i=ar(r,no(Sa))
n|=l}return Gi(e,n,t,r,i)}),Oa=Wn(function(e,t,r){var n=3
if(r.length){var i=ar(r,no(Oa))
n|=l}return Gi(t,n,e,r,i)})
function Na(e,t,r){var n,a,s,l,c,u,d=0,f=!1,p=!1,h=!0
if("function"!=typeof e)throw new Se(o)
function g(t){var r=n,o=a
return n=a=i,d=t,l=e.apply(o,r)}function m(e){var r=e-u
return u===i||r>=t||r<0||p&&e-d>=s}function b(){var e=_a()
if(m(e))return y(e)
c=So(b,function(e){var r=t-(e-u)
return p?gr(r,s-(e-d)):r}(e))}function y(e){return c=i,h&&n?g(e):(n=a=i,l)}function v(){var e=_a(),r=m(e)
if(n=arguments,a=this,u=e,r){if(c===i)return function(e){return d=e,c=So(b,t),f?g(e):l}(u)
if(p)return yi(c),c=So(b,t),g(u)}return c===i&&(c=So(b,t)),l}return t=hs(t)||0,Xa(r)&&(f=!!r.leading,s=(p="maxWait"in r)?hr(hs(r.maxWait)||0,t):s,h="trailing"in r?!!r.trailing:h),v.cancel=function(){c!==i&&yi(c),d=0,n=u=a=c=i},v.flush=function(){return c===i?l:y(_a())},v}var Ca=Wn(function(e,t){return sn(e,1,t)}),Da=Wn(function(e,t,r){return sn(e,hs(t)||0,r)})
function La(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Se(o)
var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache
if(o.has(i))return o.get(i)
var a=e.apply(this,n)
return r.cache=o.set(i,a)||o,a}
return r.cache=new(La.Cache||Hr),r}function qa(e){if("function"!=typeof e)throw new Se(o)
return function(){var t=arguments
switch(t.length){case 0:return!e.call(this)
case 1:return!e.call(this,t[0])
case 2:return!e.call(this,t[0],t[1])
case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}La.Cache=Hr
var Ra=mi(function(e,t){var r=(t=1==t.length&&Ua(t[0])?Dt(t[0],Zt(io())):Dt(hn(t,1),Zt(io()))).length
return Wn(function(n){for(var i=-1,o=gr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i])
return Et(e,this,n)})}),Pa=Wn(function(e,t){var r=ar(t,no(Pa))
return Gi(e,l,i,t,r)}),ja=Wn(function(e,t){var r=ar(t,no(ja))
return Gi(e,64,i,t,r)}),Ia=Xi(function(e,t){return Gi(e,256,i,i,i,t)})
function Ma(e,t){return e===t||e!=e&&t!=t}var Ba=Ui(En),Fa=Ui(function(e,t){return e>=t}),za=On(function(){return arguments}())?On:function(e){return Ja(e)&&qe.call(e,"callee")&&!We.call(e,"callee")},Ua=n.isArray,Ha=bt?Zt(bt):function(e){return Ja(e)&&kn(e)==D}
function $a(e){return null!=e&&Ya(e.length)&&!Za(e)}function Va(e){return Ja(e)&&$a(e)}var Wa=mt||hl,Ga=yt?Zt(yt):function(e){return Ja(e)&&kn(e)==y}
function Qa(e){if(!Ja(e))return!1
var t=kn(e)
return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!rs(e)}function Za(e){if(!Xa(e))return!1
var t=kn(e)
return t==w||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Ka(e){return"number"==typeof e&&e==fs(e)}function Ya(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function Xa(e){var t=typeof e
return null!=e&&("object"==t||"function"==t)}function Ja(e){return null!=e&&"object"==typeof e}var es=vt?Zt(vt):function(e){return Ja(e)&&uo(e)==k}
function ts(e){return"number"==typeof e||Ja(e)&&kn(e)==E}function rs(e){if(!Ja(e)||kn(e)!=_)return!1
var t=$e(e)
if(null===t)return!0
var r=qe.call(t,"constructor")&&t.constructor
return"function"==typeof r&&r instanceof r&&Le.call(r)==Ie}var ns=wt?Zt(wt):function(e){return Ja(e)&&kn(e)==T},is=xt?Zt(xt):function(e){return Ja(e)&&uo(e)==S}
function os(e){return"string"==typeof e||!Ua(e)&&Ja(e)&&kn(e)==O}function as(e){return"symbol"==typeof e||Ja(e)&&kn(e)==N}var ss=kt?Zt(kt):function(e){return Ja(e)&&Ya(e.length)&&!!it[kn(e)]},ls=Ui(Rn),cs=Ui(function(e,t){return e<=t})
function us(e){if(!e)return[]
if($a(e))return os(e)?cr(e):Ai(e)
if(Ze&&e[Ze])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value)
return r}(e[Ze]())
var t=uo(e)
return(t==k?ir:t==S?sr:Ms)(e)}function ds(e){return e?(e=hs(e))===u||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function fs(e){var t=ds(e),r=t%1
return t==t?r?t-r:t:0}function ps(e){return e?nn(fs(e),0,p):0}function hs(e){if("number"==typeof e)return e
if(as(e))return f
if(Xa(e)){var t="function"==typeof e.valueOf?e.valueOf():e
e=Xa(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e
e=Qt(e)
var r=he.test(e)
return r||me.test(e)?lt(e.slice(2),r?2:8):pe.test(e)?f:+e}function gs(e){return Ti(e,Cs(e))}function ms(e){return null==e?"":oi(e)}var bs=Oi(function(e,t){if(wo(t)||$a(t))Ti(t,Ns(t),e)
else for(var r in t)qe.call(t,r)&&Yr(e,r,t[r])}),ys=Oi(function(e,t){Ti(t,Cs(t),e)}),vs=Oi(function(e,t,r,n){Ti(t,Cs(t),e,n)}),ws=Oi(function(e,t,r,n){Ti(t,Ns(t),e,n)}),xs=Xi(rn),ks=Wn(function(e,t){e=_e(e)
var r=-1,n=t.length,o=n>2?t[2]:i
for(o&&mo(t[0],t[1],o)&&(n=1);++r<n;)for(var a=t[r],s=Cs(a),l=-1,c=s.length;++l<c;){var u=s[l],d=e[u];(d===i||Ma(d,Ce[u])&&!qe.call(e,u))&&(e[u]=a[u])}return e}),Es=Wn(function(e){return e.push(i,Zi),Et(Ls,i,e)})
function _s(e,t,r){var n=null==e?i:wn(e,t)
return n===i?r:n}function As(e,t){return null!=e&&fo(e,t,An)}var Ts=Ii(function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=je.call(t)),e[t]=r},Xs(tl)),Ss=Ii(function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=je.call(t)),qe.call(e,t)?e[t].push(r):e[t]=[r]},io),Os=Wn(Sn)
function Ns(e){return $a(e)?Wr(e):qn(e)}function Cs(e){return $a(e)?Wr(e,!0):function(e){if(!Xa(e))return function(e){var t=[]
if(null!=e)for(var r in _e(e))t.push(r)
return t}(e)
var t=wo(e),r=[]
for(var n in e)("constructor"!=n||!t&&qe.call(e,n))&&r.push(n)
return r}(e)}var Ds=Oi(function(e,t,r){Mn(e,t,r)}),Ls=Oi(function(e,t,r,n){Mn(e,t,r,n)}),qs=Xi(function(e,t){var r={}
if(null==e)return r
var n=!1
t=Dt(t,function(t){return t=gi(t,e),n||(n=t.length>1),t}),Ti(e,eo(e),r),n&&(r=on(r,7,Ki))
for(var i=t.length;i--;)si(r,t[i])
return r}),Rs=Xi(function(e,t){return null==e?{}:function(e,t){return zn(e,t,function(t,r){return As(e,r)})}(e,t)})
function Ps(e,t){if(null==e)return{}
var r=Dt(eo(e),function(e){return[e]})
return t=io(t),zn(e,r,function(e,r){return t(e,r[0])})}var js=Wi(Ns),Is=Wi(Cs)
function Ms(e){return null==e?[]:Kt(e,Ns(e))}var Bs=Li(function(e,t,r){return t=t.toLowerCase(),e+(r?Fs(t):t)})
function Fs(e){return Qs(ms(e).toLowerCase())}function zs(e){return(e=ms(e))&&e.replace(ye,er).replace(Ye,"")}var Us=Li(function(e,t,r){return e+(r?"-":"")+t.toLowerCase()}),Hs=Li(function(e,t,r){return e+(r?" ":"")+t.toLowerCase()}),$s=Di("toLowerCase"),Vs=Li(function(e,t,r){return e+(r?"_":"")+t.toLowerCase()}),Ws=Li(function(e,t,r){return e+(r?" ":"")+Qs(t)}),Gs=Li(function(e,t,r){return e+(r?" ":"")+t.toUpperCase()}),Qs=Di("toUpperCase")
function Zs(e,t,r){return e=ms(e),(t=r?i:t)===i?function(e){return tt.test(e)}(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.match(le)||[]}(e):e.match(t)||[]}var Ks=Wn(function(e,t){try{return Et(e,i,t)}catch(e){return Qa(e)?e:new xe(e)}}),Ys=Xi(function(e,t){return At(t,function(t){t=Po(t),tn(e,t,Sa(e[t],e))}),e})
function Xs(e){return function(){return e}}var Js=Pi(),el=Pi(!0)
function tl(e){return e}function rl(e){return Ln("function"==typeof e?e:on(e,1))}var nl=Wn(function(e,t){return function(r){return Sn(r,e,t)}}),il=Wn(function(e,t){return function(r){return Sn(e,r,t)}})
function ol(e,t,r){var n=Ns(t),i=vn(t,n)
null!=r||Xa(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=vn(t,Ns(t)))
var o=!(Xa(r)&&"chain"in r&&!r.chain),a=Za(e)
return At(i,function(r){var n=t[r]
e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__
if(o||t){var r=e(this.__wrapped__)
return(r.__actions__=Ai(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Lt([this.value()],arguments))})}),e}function al(){}var sl=Bi(Dt),ll=Bi(St),cl=Bi(Pt)
function ul(e){return bo(e)?Ht(Po(e)):function(e){return function(t){return wn(t,e)}}(e)}var dl=zi(),fl=zi(!0)
function pl(){return[]}function hl(){return!1}var gl,ml=Mi(function(e,t){return e+t},0),bl=$i("ceil"),yl=Mi(function(e,t){return e/t},1),vl=$i("floor"),wl=Mi(function(e,t){return e*t},1),xl=$i("round"),kl=Mi(function(e,t){return e-t},0)
return jr.after=function(e,t){if("function"!=typeof t)throw new Se(o)
return e=fs(e),function(){if(--e<1)return t.apply(this,arguments)}},jr.ary=Aa,jr.assign=bs,jr.assignIn=ys,jr.assignInWith=vs,jr.assignWith=ws,jr.at=xs,jr.before=Ta,jr.bind=Sa,jr.bindAll=Ys,jr.bindKey=Oa,jr.castArray=function(){if(!arguments.length)return[]
var e=arguments[0]
return Ua(e)?e:[e]},jr.chain=ua,jr.chunk=function(e,t,r){t=(r?mo(e,t,r):t===i)?1:hr(fs(t),0)
var o=null==e?0:e.length
if(!o||t<1)return[]
for(var a=0,s=0,l=n(ft(o/t));a<o;)l[s++]=Jn(e,a,a+=t)
return l},jr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t]
o&&(i[n++]=o)}return i},jr.concat=function(){var e=arguments.length
if(!e)return[]
for(var t=n(e-1),r=arguments[0],i=e;i--;)t[i-1]=arguments[i]
return Lt(Ua(r)?Ai(r):[r],hn(t,1))},jr.cond=function(e){var t=null==e?0:e.length,r=io()
return e=t?Dt(e,function(e){if("function"!=typeof e[1])throw new Se(o)
return[r(e[0]),e[1]]}):[],Wn(function(r){for(var n=-1;++n<t;){var i=e[n]
if(Et(i[0],this,r))return Et(i[1],this,r)}})},jr.conforms=function(e){return function(e){var t=Ns(e)
return function(r){return an(r,e,t)}}(on(e,1))},jr.constant=Xs,jr.countBy=pa,jr.create=function(e,t){var r=Ir(e)
return null==t?r:en(r,t)},jr.curry=function e(t,r,n){var o=Gi(t,8,i,i,i,i,i,r=n?i:r)
return o.placeholder=e.placeholder,o},jr.curryRight=function e(t,r,n){var o=Gi(t,16,i,i,i,i,i,r=n?i:r)
return o.placeholder=e.placeholder,o},jr.debounce=Na,jr.defaults=ks,jr.defaultsDeep=Es,jr.defer=Ca,jr.delay=Da,jr.difference=Mo,jr.differenceBy=Bo,jr.differenceWith=Fo,jr.drop=function(e,t,r){var n=null==e?0:e.length
return n?Jn(e,(t=r||t===i?1:fs(t))<0?0:t,n):[]},jr.dropRight=function(e,t,r){var n=null==e?0:e.length
return n?Jn(e,0,(t=n-(t=r||t===i?1:fs(t)))<0?0:t):[]},jr.dropRightWhile=function(e,t){return e&&e.length?ci(e,io(t,3),!0,!0):[]},jr.dropWhile=function(e,t){return e&&e.length?ci(e,io(t,3),!0):[]},jr.fill=function(e,t,r,n){var o=null==e?0:e.length
return o?(r&&"number"!=typeof r&&mo(e,t,r)&&(r=0,n=o),function(e,t,r,n){var o=e.length
for((r=fs(r))<0&&(r=-r>o?0:o+r),(n=n===i||n>o?o:fs(n))<0&&(n+=o),n=r>n?0:ps(n);r<n;)e[r++]=t
return e}(e,t,r,n)):[]},jr.filter=function(e,t){return(Ua(e)?Ot:pn)(e,io(t,3))},jr.flatMap=function(e,t){return hn(xa(e,t),1)},jr.flatMapDeep=function(e,t){return hn(xa(e,t),u)},jr.flatMapDepth=function(e,t,r){return r=r===i?1:fs(r),hn(xa(e,t),r)},jr.flatten=Ho,jr.flattenDeep=function(e){return null!=e&&e.length?hn(e,u):[]},jr.flattenDepth=function(e,t){return null!=e&&e.length?hn(e,t=t===i?1:fs(t)):[]},jr.flip=function(e){return Gi(e,512)},jr.flow=Js,jr.flowRight=el,jr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t]
tn(n,i[0],i[1])}return n},jr.functions=function(e){return null==e?[]:vn(e,Ns(e))},jr.functionsIn=function(e){return null==e?[]:vn(e,Cs(e))},jr.groupBy=ya,jr.initial=function(e){return null!=e&&e.length?Jn(e,0,-1):[]},jr.intersection=Vo,jr.intersectionBy=Wo,jr.intersectionWith=Go,jr.invert=Ts,jr.invertBy=Ss,jr.invokeMap=va,jr.iteratee=rl,jr.keyBy=wa,jr.keys=Ns,jr.keysIn=Cs,jr.map=xa,jr.mapKeys=function(e,t){var r={}
return t=io(t,3),bn(e,function(e,n,i){tn(r,t(e,n,i),e)}),r},jr.mapValues=function(e,t){var r={}
return t=io(t,3),bn(e,function(e,n,i){tn(r,n,t(e,n,i))}),r},jr.matches=function(e){return jn(on(e,1))},jr.matchesProperty=function(e,t){return In(e,on(t,1))},jr.memoize=La,jr.merge=Ds,jr.mergeWith=Ls,jr.method=nl,jr.methodOf=il,jr.mixin=ol,jr.negate=qa,jr.nthArg=function(e){return e=fs(e),Wn(function(t){return Bn(t,e)})},jr.omit=qs,jr.omitBy=function(e,t){return Ps(e,qa(io(t)))},jr.once=function(e){return Ta(2,e)},jr.orderBy=function(e,t,r,n){return null==e?[]:(Ua(t)||(t=null==t?[]:[t]),Ua(r=n?i:r)||(r=null==r?[]:[r]),Fn(e,t,r))},jr.over=sl,jr.overArgs=Ra,jr.overEvery=ll,jr.overSome=cl,jr.partial=Pa,jr.partialRight=ja,jr.partition=ka,jr.pick=Rs,jr.pickBy=Ps,jr.property=ul,jr.propertyOf=function(e){return function(t){return null==e?i:wn(e,t)}},jr.pull=Zo,jr.pullAll=Ko,jr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,io(r,2)):e},jr.pullAllWith=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,i,r):e},jr.pullAt=Yo,jr.range=dl,jr.rangeRight=fl,jr.rearg=Ia,jr.reject=function(e,t){return(Ua(e)?Ot:pn)(e,qa(io(t,3)))},jr.remove=function(e,t){var r=[]
if(!e||!e.length)return r
var n=-1,i=[],o=e.length
for(t=io(t,3);++n<o;){var a=e[n]
t(a,n,e)&&(r.push(a),i.push(n))}return Hn(e,i),r},jr.rest=function(e,t){if("function"!=typeof e)throw new Se(o)
return Wn(e,t=t===i?t:fs(t))},jr.reverse=Xo,jr.sampleSize=function(e,t,r){return t=(r?mo(e,t,r):t===i)?1:fs(t),(Ua(e)?Qr:Qn)(e,t)},jr.set=function(e,t,r){return null==e?e:Zn(e,t,r)},jr.setWith=function(e,t,r,n){return n="function"==typeof n?n:i,null==e?e:Zn(e,t,r,n)},jr.shuffle=function(e){return(Ua(e)?Zr:Xn)(e)},jr.slice=function(e,t,r){var n=null==e?0:e.length
return n?(r&&"number"!=typeof r&&mo(e,t,r)?(t=0,r=n):(t=null==t?0:fs(t),r=r===i?n:fs(r)),Jn(e,t,r)):[]},jr.sortBy=Ea,jr.sortedUniq=function(e){return e&&e.length?ni(e):[]},jr.sortedUniqBy=function(e,t){return e&&e.length?ni(e,io(t,2)):[]},jr.split=function(e,t,r){return r&&"number"!=typeof r&&mo(e,t,r)&&(t=r=i),(r=r===i?p:r>>>0)?(e=ms(e))&&("string"==typeof t||null!=t&&!ns(t))&&!(t=oi(t))&&nr(e)?bi(cr(e),0,r):e.split(t,r):[]},jr.spread=function(e,t){if("function"!=typeof e)throw new Se(o)
return t=null==t?0:hr(fs(t),0),Wn(function(r){var n=r[t],i=bi(r,0,t)
return n&&Lt(i,n),Et(e,this,i)})},jr.tail=function(e){var t=null==e?0:e.length
return t?Jn(e,1,t):[]},jr.take=function(e,t,r){return e&&e.length?Jn(e,0,(t=r||t===i?1:fs(t))<0?0:t):[]},jr.takeRight=function(e,t,r){var n=null==e?0:e.length
return n?Jn(e,(t=n-(t=r||t===i?1:fs(t)))<0?0:t,n):[]},jr.takeRightWhile=function(e,t){return e&&e.length?ci(e,io(t,3),!1,!0):[]},jr.takeWhile=function(e,t){return e&&e.length?ci(e,io(t,3)):[]},jr.tap=function(e,t){return t(e),e},jr.throttle=function(e,t,r){var n=!0,i=!0
if("function"!=typeof e)throw new Se(o)
return Xa(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Na(e,t,{leading:n,maxWait:t,trailing:i})},jr.thru=da,jr.toArray=us,jr.toPairs=js,jr.toPairsIn=Is,jr.toPath=function(e){return Ua(e)?Dt(e,Po):as(e)?[e]:Ai(Ro(ms(e)))},jr.toPlainObject=gs,jr.transform=function(e,t,r){var n=Ua(e),i=n||Wa(e)||ss(e)
if(t=io(t,4),null==r){var o=e&&e.constructor
r=i?n?new o:[]:Xa(e)&&Za(o)?Ir($e(e)):{}}return(i?At:bn)(e,function(e,n,i){return t(r,e,n,i)}),r},jr.unary=function(e){return Aa(e,1)},jr.union=Jo,jr.unionBy=ea,jr.unionWith=ta,jr.uniq=function(e){return e&&e.length?ai(e):[]},jr.uniqBy=function(e,t){return e&&e.length?ai(e,io(t,2)):[]},jr.uniqWith=function(e,t){return t="function"==typeof t?t:i,e&&e.length?ai(e,i,t):[]},jr.unset=function(e,t){return null==e||si(e,t)},jr.unzip=ra,jr.unzipWith=na,jr.update=function(e,t,r){return null==e?e:li(e,t,hi(r))},jr.updateWith=function(e,t,r,n){return n="function"==typeof n?n:i,null==e?e:li(e,t,hi(r),n)},jr.values=Ms,jr.valuesIn=function(e){return null==e?[]:Kt(e,Cs(e))},jr.without=ia,jr.words=Zs,jr.wrap=function(e,t){return Pa(hi(t),e)},jr.xor=oa,jr.xorBy=aa,jr.xorWith=sa,jr.zip=la,jr.zipObject=function(e,t){return fi(e||[],t||[],Yr)},jr.zipObjectDeep=function(e,t){return fi(e||[],t||[],Zn)},jr.zipWith=ca,jr.entries=js,jr.entriesIn=Is,jr.extend=ys,jr.extendWith=vs,ol(jr,jr),jr.add=ml,jr.attempt=Ks,jr.camelCase=Bs,jr.capitalize=Fs,jr.ceil=bl,jr.clamp=function(e,t,r){return r===i&&(r=t,t=i),r!==i&&(r=(r=hs(r))==r?r:0),t!==i&&(t=(t=hs(t))==t?t:0),nn(hs(e),t,r)},jr.clone=function(e){return on(e,4)},jr.cloneDeep=function(e){return on(e,5)},jr.cloneDeepWith=function(e,t){return on(e,5,t="function"==typeof t?t:i)},jr.cloneWith=function(e,t){return on(e,4,t="function"==typeof t?t:i)},jr.conformsTo=function(e,t){return null==t||an(e,t,Ns(t))},jr.deburr=zs,jr.defaultTo=function(e,t){return null==e||e!=e?t:e},jr.divide=yl,jr.endsWith=function(e,t,r){e=ms(e),t=oi(t)
var n=e.length,o=r=r===i?n:nn(fs(r),0,n)
return(r-=t.length)>=0&&e.slice(r,o)==t},jr.eq=Ma,jr.escape=function(e){return(e=ms(e))&&Q.test(e)?e.replace(W,tr):e},jr.escapeRegExp=function(e){return(e=ms(e))&&re.test(e)?e.replace(te,"\\$&"):e},jr.every=function(e,t,r){var n=Ua(e)?St:dn
return r&&mo(e,t,r)&&(t=i),n(e,io(t,3))},jr.find=ha,jr.findIndex=zo,jr.findKey=function(e,t){return It(e,io(t,3),bn)},jr.findLast=ga,jr.findLastIndex=Uo,jr.findLastKey=function(e,t){return It(e,io(t,3),yn)},jr.floor=vl,jr.forEach=ma,jr.forEachRight=ba,jr.forIn=function(e,t){return null==e?e:gn(e,io(t,3),Cs)},jr.forInRight=function(e,t){return null==e?e:mn(e,io(t,3),Cs)},jr.forOwn=function(e,t){return e&&bn(e,io(t,3))},jr.forOwnRight=function(e,t){return e&&yn(e,io(t,3))},jr.get=_s,jr.gt=Ba,jr.gte=Fa,jr.has=function(e,t){return null!=e&&fo(e,t,_n)},jr.hasIn=As,jr.head=$o,jr.identity=tl,jr.includes=function(e,t,r,n){e=$a(e)?e:Ms(e),r=r&&!n?fs(r):0
var i=e.length
return r<0&&(r=hr(i+r,0)),os(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Bt(e,t,r)>-1},jr.indexOf=function(e,t,r){var n=null==e?0:e.length
if(!n)return-1
var i=null==r?0:fs(r)
return i<0&&(i=hr(n+i,0)),Bt(e,t,i)},jr.inRange=function(e,t,r){return t=ds(t),r===i?(r=t,t=0):r=ds(r),function(e,t,r){return e>=gr(t,r)&&e<hr(t,r)}(e=hs(e),t,r)},jr.invoke=Os,jr.isArguments=za,jr.isArray=Ua,jr.isArrayBuffer=Ha,jr.isArrayLike=$a,jr.isArrayLikeObject=Va,jr.isBoolean=function(e){return!0===e||!1===e||Ja(e)&&kn(e)==b},jr.isBuffer=Wa,jr.isDate=Ga,jr.isElement=function(e){return Ja(e)&&1===e.nodeType&&!rs(e)},jr.isEmpty=function(e){if(null==e)return!0
if($a(e)&&(Ua(e)||"string"==typeof e||"function"==typeof e.splice||Wa(e)||ss(e)||za(e)))return!e.length
var t=uo(e)
if(t==k||t==S)return!e.size
if(wo(e))return!qn(e).length
for(var r in e)if(qe.call(e,r))return!1
return!0},jr.isEqual=function(e,t){return Nn(e,t)},jr.isEqualWith=function(e,t,r){var n=(r="function"==typeof r?r:i)?r(e,t):i
return n===i?Nn(e,t,i,r):!!n},jr.isError=Qa,jr.isFinite=function(e){return"number"==typeof e&&jt(e)},jr.isFunction=Za,jr.isInteger=Ka,jr.isLength=Ya,jr.isMap=es,jr.isMatch=function(e,t){return e===t||Cn(e,t,ao(t))},jr.isMatchWith=function(e,t,r){return r="function"==typeof r?r:i,Cn(e,t,ao(t),r)},jr.isNaN=function(e){return ts(e)&&e!=+e},jr.isNative=function(e){if(vo(e))throw new xe("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.")
return Dn(e)},jr.isNil=function(e){return null==e},jr.isNull=function(e){return null===e},jr.isNumber=ts,jr.isObject=Xa,jr.isObjectLike=Ja,jr.isPlainObject=rs,jr.isRegExp=ns,jr.isSafeInteger=function(e){return Ka(e)&&e>=-9007199254740991&&e<=d},jr.isSet=is,jr.isString=os,jr.isSymbol=as,jr.isTypedArray=ss,jr.isUndefined=function(e){return e===i},jr.isWeakMap=function(e){return Ja(e)&&uo(e)==C},jr.isWeakSet=function(e){return Ja(e)&&"[object WeakSet]"==kn(e)},jr.join=function(e,t){return null==e?"":$t.call(e,t)},jr.kebabCase=Us,jr.last=Qo,jr.lastIndexOf=function(e,t,r){var n=null==e?0:e.length
if(!n)return-1
var o=n
return r!==i&&(o=(o=fs(r))<0?hr(n+o,0):gr(o,n-1)),t==t?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n
return n}(e,t,o):Mt(e,zt,o,!0)},jr.lowerCase=Hs,jr.lowerFirst=$s,jr.lt=ls,jr.lte=cs,jr.max=function(e){return e&&e.length?fn(e,tl,En):i},jr.maxBy=function(e,t){return e&&e.length?fn(e,io(t,2),En):i},jr.mean=function(e){return Ut(e,tl)},jr.meanBy=function(e,t){return Ut(e,io(t,2))},jr.min=function(e){return e&&e.length?fn(e,tl,Rn):i},jr.minBy=function(e,t){return e&&e.length?fn(e,io(t,2),Rn):i},jr.stubArray=pl,jr.stubFalse=hl,jr.stubObject=function(){return{}},jr.stubString=function(){return""},jr.stubTrue=function(){return!0},jr.multiply=wl,jr.nth=function(e,t){return e&&e.length?Bn(e,fs(t)):i},jr.noConflict=function(){return dt._===this&&(dt._=Me),this},jr.noop=al,jr.now=_a,jr.pad=function(e,t,r){e=ms(e)
var n=(t=fs(t))?lr(e):0
if(!t||n>=t)return e
var i=(t-n)/2
return Fi(pt(i),r)+e+Fi(ft(i),r)},jr.padEnd=function(e,t,r){e=ms(e)
var n=(t=fs(t))?lr(e):0
return t&&n<t?e+Fi(t-n,r):e},jr.padStart=function(e,t,r){e=ms(e)
var n=(t=fs(t))?lr(e):0
return t&&n<t?Fi(t-n,r)+e:e},jr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),br(ms(e).replace(ne,""),t||0)},jr.random=function(e,t,r){if(r&&"boolean"!=typeof r&&mo(e,t,r)&&(t=r=i),r===i&&("boolean"==typeof t?(r=t,t=i):"boolean"==typeof e&&(r=e,e=i)),e===i&&t===i?(e=0,t=1):(e=ds(e),t===i?(t=e,e=0):t=ds(t)),e>t){var n=e
e=t,t=n}if(r||e%1||t%1){var o=yr()
return gr(e+o*(t-e+st("1e-"+((o+"").length-1))),t)}return $n(e,t)},jr.reduce=function(e,t,r){var n=Ua(e)?qt:Vt,i=arguments.length<3
return n(e,io(t,4),r,i,cn)},jr.reduceRight=function(e,t,r){var n=Ua(e)?Rt:Vt,i=arguments.length<3
return n(e,io(t,4),r,i,un)},jr.repeat=function(e,t,r){return t=(r?mo(e,t,r):t===i)?1:fs(t),Vn(ms(e),t)},jr.replace=function(){var e=arguments,t=ms(e[0])
return e.length<3?t:t.replace(e[1],e[2])},jr.result=function(e,t,r){var n=-1,o=(t=gi(t,e)).length
for(o||(o=1,e=i);++n<o;){var a=null==e?i:e[Po(t[n])]
a===i&&(n=o,a=r),e=Za(a)?a.call(e):a}return e},jr.round=xl,jr.runInContext=e,jr.sample=function(e){return(Ua(e)?Gr:Gn)(e)},jr.size=function(e){if(null==e)return 0
if($a(e))return os(e)?lr(e):e.length
var t=uo(e)
return t==k||t==S?e.size:qn(e).length},jr.snakeCase=Vs,jr.some=function(e,t,r){var n=Ua(e)?Pt:ei
return r&&mo(e,t,r)&&(t=i),n(e,io(t,3))},jr.sortedIndex=function(e,t){return ti(e,t)},jr.sortedIndexBy=function(e,t,r){return ri(e,t,io(r,2))},jr.sortedIndexOf=function(e,t){var r=null==e?0:e.length
if(r){var n=ti(e,t)
if(n<r&&Ma(e[n],t))return n}return-1},jr.sortedLastIndex=function(e,t){return ti(e,t,!0)},jr.sortedLastIndexBy=function(e,t,r){return ri(e,t,io(r,2),!0)},jr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=ti(e,t,!0)-1
if(Ma(e[r],t))return r}return-1},jr.startCase=Ws,jr.startsWith=function(e,t,r){return e=ms(e),r=null==r?0:nn(fs(r),0,e.length),t=oi(t),e.slice(r,r+t.length)==t},jr.subtract=kl,jr.sum=function(e){return e&&e.length?Wt(e,tl):0},jr.sumBy=function(e,t){return e&&e.length?Wt(e,io(t,2)):0},jr.template=function(e,t,r){var n=jr.templateSettings
r&&mo(e,t,r)&&(t=i),e=ms(e),t=ws({},t,n,Qi)
var o=ws({},t.imports,n.imports,Qi),a=Ns(o),s=Kt(o,a)
At(a,function(e){if(ce.test(e))throw new xe("Invalid `imports` option passed into `_.template`")})
var l,c,u=0,d=t.interpolate||ve,f="__p += '",p=Ae((t.escape||ve).source+"|"+d.source+"|"+(d===Y?de:ve).source+"|"+(t.evaluate||ve).source+"|$","g"),h="//# sourceURL="+(qe.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++nt+"]")+"\n"
e.replace(p,function(t,r,n,i,o,a){return n||(n=i),f+=e.slice(u,a).replace(we,rr),r&&(l=!0,f+="' +\n__e("+r+") +\n'"),o&&(c=!0,f+="';\n"+o+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),u=a+t.length,t}),f+="';\n"
var g=qe.call(t,"variable")&&t.variable
if(g){if(ce.test(g))throw new xe("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n"
f=(c?f.replace(U,""):f).replace(H,"$1").replace($,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(l?", __e = _.escape":"")+(c?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}"
var m=Ks(function(){return ke(a,h+"return "+f).apply(i,s)})
if(m.source=f,Qa(m))throw m
return m},jr.times=function(e,t){if((e=fs(e))<1||e>d)return[]
var r=p,n=gr(e,p)
t=io(t),e-=p
for(var i=Gt(n,t);++r<e;)t(r)
return i},jr.toFinite=ds,jr.toInteger=fs,jr.toLength=ps,jr.toLower=function(e){return ms(e).toLowerCase()},jr.toNumber=hs,jr.toSafeInteger=function(e){return e?nn(fs(e),-9007199254740991,d):0===e?e:0},jr.toString=ms,jr.toUpper=function(e){return ms(e).toUpperCase()},jr.trim=function(e,t,r){if((e=ms(e))&&(r||t===i))return Qt(e)
if(!e||!(t=oi(t)))return e
var n=cr(e),o=cr(t)
return bi(n,Xt(n,o),Jt(n,o)+1).join("")},jr.trimEnd=function(e,t,r){if((e=ms(e))&&(r||t===i))return e.slice(0,ur(e)+1)
if(!e||!(t=oi(t)))return e
var n=cr(e)
return bi(n,0,Jt(n,cr(t))+1).join("")},jr.trimStart=function(e,t,r){if((e=ms(e))&&(r||t===i))return e.replace(ne,"")
if(!e||!(t=oi(t)))return e
var n=cr(e)
return bi(n,Xt(n,cr(t))).join("")},jr.truncate=function(e,t){var r=30,n="..."
if(Xa(t)){var o="separator"in t?t.separator:o
r="length"in t?fs(t.length):r,n="omission"in t?oi(t.omission):n}var a=(e=ms(e)).length
if(nr(e)){var s=cr(e)
a=s.length}if(r>=a)return e
var l=r-lr(n)
if(l<1)return n
var c=s?bi(s,0,l).join(""):e.slice(0,l)
if(o===i)return c+n
if(s&&(l+=c.length-l),ns(o)){if(e.slice(l).search(o)){var u,d=c
for(o.global||(o=Ae(o.source,ms(fe.exec(o))+"g")),o.lastIndex=0;u=o.exec(d);)var f=u.index
c=c.slice(0,f===i?l:f)}}else if(e.indexOf(oi(o),l)!=l){var p=c.lastIndexOf(o)
p>-1&&(c=c.slice(0,p))}return c+n},jr.unescape=function(e){return(e=ms(e))&&G.test(e)?e.replace(V,dr):e},jr.uniqueId=function(e){var t=++Re
return ms(e)+t},jr.upperCase=Gs,jr.upperFirst=Qs,jr.each=ma,jr.eachRight=ba,jr.first=$o,ol(jr,(gl={},bn(jr,function(e,t){qe.call(jr.prototype,t)||(gl[t]=e)}),gl),{chain:!1}),jr.VERSION="4.18.1",At(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){jr[e].placeholder=jr}),At(["drop","take"],function(e,t){Fr.prototype[e]=function(r){r=r===i?1:hr(fs(r),0)
var n=this.__filtered__&&!t?new Fr(this):this.clone()
return n.__filtered__?n.__takeCount__=gr(r,n.__takeCount__):n.__views__.push({size:gr(r,p),type:e+(n.__dir__<0?"Right":"")}),n},Fr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),At(["filter","map","takeWhile"],function(e,t){var r=t+1,n=1==r||3==r
Fr.prototype[e]=function(e){var t=this.clone()
return t.__iteratees__.push({iteratee:io(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}}),At(["head","last"],function(e,t){var r="take"+(t?"Right":"")
Fr.prototype[e]=function(){return this[r](1).value()[0]}}),At(["initial","tail"],function(e,t){var r="drop"+(t?"":"Right")
Fr.prototype[e]=function(){return this.__filtered__?new Fr(this):this[r](1)}}),Fr.prototype.compact=function(){return this.filter(tl)},Fr.prototype.find=function(e){return this.filter(e).head()},Fr.prototype.findLast=function(e){return this.reverse().find(e)},Fr.prototype.invokeMap=Wn(function(e,t){return"function"==typeof e?new Fr(this):this.map(function(r){return Sn(r,e,t)})}),Fr.prototype.reject=function(e){return this.filter(qa(io(e)))},Fr.prototype.slice=function(e,t){e=fs(e)
var r=this
return r.__filtered__&&(e>0||t<0)?new Fr(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==i&&(r=(t=fs(t))<0?r.dropRight(-t):r.take(t-e)),r)},Fr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Fr.prototype.toArray=function(){return this.take(p)},bn(Fr.prototype,function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),n=/^(?:head|last)$/.test(t),o=jr[n?"take"+("last"==t?"Right":""):t],a=n||/^find/.test(t)
o&&(jr.prototype[t]=function(){var t=this.__wrapped__,s=n?[1]:arguments,l=t instanceof Fr,c=s[0],u=l||Ua(t),d=function(e){var t=o.apply(jr,Lt([e],s))
return n&&f?t[0]:t}
u&&r&&"function"==typeof c&&1!=c.length&&(l=u=!1)
var f=this.__chain__,p=!!this.__actions__.length,h=a&&!f,g=l&&!p
if(!a&&u){t=g?t:new Fr(this)
var m=e.apply(t,s)
return m.__actions__.push({func:da,args:[d],thisArg:i}),new Br(m,f)}return h&&g?e.apply(this,s):(m=this.thru(d),h?n?m.value()[0]:m.value():m)})}),At(["pop","push","shift","sort","splice","unshift"],function(e){var t=Oe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e)
jr.prototype[e]=function(){var e=arguments
if(n&&!this.__chain__){var i=this.value()
return t.apply(Ua(i)?i:[],e)}return this[r](function(r){return t.apply(Ua(r)?r:[],e)})}}),bn(Fr.prototype,function(e,t){var r=jr[t]
if(r){var n=r.name+""
qe.call(Sr,n)||(Sr[n]=[]),Sr[n].push({name:t,func:r})}}),Sr[ji(i,2).name]=[{name:"wrapper",func:i}],Fr.prototype.clone=function(){var e=new Fr(this.__wrapped__)
return e.__actions__=Ai(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ai(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ai(this.__views__),e},Fr.prototype.reverse=function(){if(this.__filtered__){var e=new Fr(this)
e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1
return e},Fr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ua(e),n=t<0,i=r?e.length:0,o=function(e,t,r){for(var n=-1,i=r.length;++n<i;){var o=r[n],a=o.size
switch(o.type){case"drop":e+=a
break
case"dropRight":t-=a
break
case"take":t=gr(t,e+a)
break
case"takeRight":e=hr(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,c=n?s:a-1,u=this.__iteratees__,d=u.length,f=0,p=gr(l,this.__takeCount__)
if(!r||!n&&i==l&&p==l)return ui(e,this.__actions__)
var h=[]
e:for(;l--&&f<p;){for(var g=-1,m=e[c+=t];++g<d;){var b=u[g],y=b.iteratee,v=b.type,w=y(m)
if(2==v)m=w
else if(!w){if(1==v)continue e
break e}}h[f++]=m}return h},jr.prototype.at=fa,jr.prototype.chain=function(){return ua(this)},jr.prototype.commit=function(){return new Br(this.value(),this.__chain__)},jr.prototype.next=function(){this.__values__===i&&(this.__values__=us(this.value()))
var e=this.__index__>=this.__values__.length
return{done:e,value:e?i:this.__values__[this.__index__++]}},jr.prototype.plant=function(e){for(var t,r=this;r instanceof Mr;){var n=Io(r)
n.__index__=0,n.__values__=i,t?o.__wrapped__=n:t=n
var o=n
r=r.__wrapped__}return o.__wrapped__=e,t},jr.prototype.reverse=function(){var e=this.__wrapped__
if(e instanceof Fr){var t=e
return this.__actions__.length&&(t=new Fr(this)),(t=t.reverse()).__actions__.push({func:da,args:[Xo],thisArg:i}),new Br(t,this.__chain__)}return this.thru(Xo)},jr.prototype.toJSON=jr.prototype.valueOf=jr.prototype.value=function(){return ui(this.__wrapped__,this.__actions__)},jr.prototype.first=jr.prototype.head,Ze&&(jr.prototype[Ze]=function(){return this}),jr}()
dt._=fr,(n=function(){return fr}.call(t,r,t,e))===i||(e.exports=n)}.call(this)},6673(e,t,r){var n,i
!function(){var o,a,s,l,c,u,d,f,p,h,g,m,b,y,v,w,x,k,E,_,A,T,S,O,N,C,D,L,q,R=function(e){var t=new R.Builder
return t.pipeline.add(R.trimmer,R.stopWordFilter,R.stemmer),t.searchPipeline.add(R.stemmer),e.call(t,t),t.build()}
R.version="2.3.9",R.utils={},R.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),R.utils.asString=function(e){return null==e?"":e.toString()},R.utils.clone=function(e){if(null==e)return e
for(var t=Object.create(null),r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],o=e[i]
if(Array.isArray(o))t[i]=o.slice()
else{if("string"!=typeof o&&"number"!=typeof o&&"boolean"!=typeof o)throw new TypeError("clone is not deep and does not support nested objects")
t[i]=o}}return t},R.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},R.FieldRef.joiner="/",R.FieldRef.fromString=function(e){var t=e.indexOf(R.FieldRef.joiner)
if(-1===t)throw"malformed field ref string"
var r=e.slice(0,t),n=e.slice(t+1)
return new R.FieldRef(n,r,e)},R.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+R.FieldRef.joiner+this.docRef),this._stringValue},R.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length
for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},R.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},R.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},R.Set.prototype.contains=function(e){return!!this.elements[e]},R.Set.prototype.intersect=function(e){var t,r,n,i=[]
if(e===R.Set.complete)return this
if(e===R.Set.empty)return e
this.length<e.length?(t=this,r=e):(t=e,r=this),n=Object.keys(t.elements)
for(var o=0;o<n.length;o++){var a=n[o]
a in r.elements&&i.push(a)}return new R.Set(i)},R.Set.prototype.union=function(e){return e===R.Set.complete?R.Set.complete:e===R.Set.empty?this:new R.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},R.idf=function(e,t){var r=0
for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length)
var i=(t-r+.5)/(r+.5)
return Math.log(1+Math.abs(i))},R.Token=function(e,t){this.str=e||"",this.metadata=t||{}},R.Token.prototype.toString=function(){return this.str},R.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},R.Token.prototype.clone=function(e){return e=e||function(e){return e},new R.Token(e(this.str,this.metadata),this.metadata)},R.tokenizer=function(e,t){if(null==e||null==e)return[]
if(Array.isArray(e))return e.map(function(e){return new R.Token(R.utils.asString(e).toLowerCase(),R.utils.clone(t))})
for(var r=e.toString().toLowerCase(),n=r.length,i=[],o=0,a=0;o<=n;o++){var s=o-a
if(r.charAt(o).match(R.tokenizer.separator)||o==n){if(s>0){var l=R.utils.clone(t)||{}
l.position=[a,s],l.index=i.length,i.push(new R.Token(r.slice(a,o),l))}a=o+1}}return i},R.tokenizer.separator=/[\s\-]+/,R.Pipeline=function(){this._stack=[]},R.Pipeline.registeredFunctions=Object.create(null),R.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&R.utils.warn("Overwriting existing registered function: "+t),e.label=t,R.Pipeline.registeredFunctions[e.label]=e},R.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||R.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},R.Pipeline.load=function(e){var t=new R.Pipeline
return e.forEach(function(e){var r=R.Pipeline.registeredFunctions[e]
if(!r)throw new Error("Cannot load unregistered function: "+e)
t.add(r)}),t},R.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(e){R.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},R.Pipeline.prototype.after=function(e,t){R.Pipeline.warnIfFunctionNotRegistered(t)
var r=this._stack.indexOf(e)
if(-1==r)throw new Error("Cannot find existingFn")
r+=1,this._stack.splice(r,0,t)},R.Pipeline.prototype.before=function(e,t){R.Pipeline.warnIfFunctionNotRegistered(t)
var r=this._stack.indexOf(e)
if(-1==r)throw new Error("Cannot find existingFn")
this._stack.splice(r,0,t)},R.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},R.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var n=this._stack[r],i=[],o=0;o<e.length;o++){var a=n(e[o],o,e)
if(null!=a&&""!==a)if(Array.isArray(a))for(var s=0;s<a.length;s++)i.push(a[s])
else i.push(a)}e=i}return e},R.Pipeline.prototype.runString=function(e,t){var r=new R.Token(e,t)
return this.run([r]).map(function(e){return e.toString()})},R.Pipeline.prototype.reset=function(){this._stack=[]},R.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return R.Pipeline.warnIfFunctionNotRegistered(e),e.label})},R.Vector=function(e){this._magnitude=0,this.elements=e||[]},R.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0
for(var t=0,r=this.elements.length/2,n=r-t,i=Math.floor(n/2),o=this.elements[2*i];n>1&&(o<e&&(t=i),o>e&&(r=i),o!=e);)n=r-t,i=t+Math.floor(n/2),o=this.elements[2*i]
return o==e||o>e?2*i:o<e?2*(i+1):void 0},R.Vector.prototype.insert=function(e,t){this.upsert(e,t,function(){throw"duplicate index"})},R.Vector.prototype.upsert=function(e,t,r){this._magnitude=0
var n=this.positionForIndex(e)
this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},R.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude
for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var n=this.elements[r]
e+=n*n}return this._magnitude=Math.sqrt(e)},R.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,n=e.elements,i=r.length,o=n.length,a=0,s=0,l=0,c=0;l<i&&c<o;)(a=r[l])<(s=n[c])?l+=2:a>s?c+=2:a==s&&(t+=r[l+1]*n[c+1],l+=2,c+=2)
return t},R.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},R.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t]
return e},R.Vector.prototype.toJSON=function(){return this.elements},R.stemmer=(o={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},a={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},u="^("+(l="[^aeiou][^aeiouy]*")+")?"+(c=(s="[aeiouy]")+"[aeiou]*")+l+"("+c+")?$",d="^("+l+")?"+c+l+c+l,f="^("+l+")?"+s,p=new RegExp("^("+l+")?"+c+l),h=new RegExp(d),g=new RegExp(u),m=new RegExp(f),b=/^(.+?)(ss|i)es$/,y=/^(.+?)([^s])s$/,v=/^(.+?)eed$/,w=/^(.+?)(ed|ing)$/,x=/.$/,k=/(at|bl|iz)$/,E=new RegExp("([^aeiouylsz])\\1$"),_=new RegExp("^"+l+s+"[^aeiouwxy]$"),A=/^(.+?[^aeiou])y$/,T=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,S=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,O=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,N=/^(.+?)(s|t)(ion)$/,C=/^(.+?)e$/,D=/ll$/,L=new RegExp("^"+l+s+"[^aeiouwxy]$"),q=function(e){var t,r,n,i,s,l,c
if(e.length<3)return e
if("y"==(n=e.substr(0,1))&&(e=n.toUpperCase()+e.substr(1)),s=y,(i=b).test(e)?e=e.replace(i,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),s=w,(i=v).test(e)){var u=i.exec(e);(i=p).test(u[1])&&(i=x,e=e.replace(i,""))}else s.test(e)&&(t=(u=s.exec(e))[1],(s=m).test(t)&&(l=E,c=_,(s=k).test(e=t)?e+="e":l.test(e)?(i=x,e=e.replace(i,"")):c.test(e)&&(e+="e")))
return(i=A).test(e)&&(e=(t=(u=i.exec(e))[1])+"i"),(i=T).test(e)&&(t=(u=i.exec(e))[1],r=u[2],(i=p).test(t)&&(e=t+o[r])),(i=S).test(e)&&(t=(u=i.exec(e))[1],r=u[2],(i=p).test(t)&&(e=t+a[r])),s=N,(i=O).test(e)?(t=(u=i.exec(e))[1],(i=h).test(t)&&(e=t)):s.test(e)&&(t=(u=s.exec(e))[1]+u[2],(s=h).test(t)&&(e=t)),(i=C).test(e)&&(t=(u=i.exec(e))[1],s=g,l=L,((i=h).test(t)||s.test(t)&&!l.test(t))&&(e=t)),s=h,(i=D).test(e)&&s.test(e)&&(i=x,e=e.replace(i,"")),"y"==n&&(e=n.toLowerCase()+e.substr(1)),e},function(e){return e.update(q)}),R.Pipeline.registerFunction(R.stemmer,"stemmer"),R.generateStopWordFilter=function(e){var t=e.reduce(function(e,t){return e[t]=t,e},{})
return function(e){if(e&&t[e.toString()]!==e.toString())return e}},R.stopWordFilter=R.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),R.Pipeline.registerFunction(R.stopWordFilter,"stopWordFilter"),R.trimmer=function(e){return e.update(function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")})},R.Pipeline.registerFunction(R.trimmer,"trimmer"),R.TokenSet=function(){this.final=!1,this.edges={},this.id=R.TokenSet._nextId,R.TokenSet._nextId+=1},R.TokenSet._nextId=1,R.TokenSet.fromArray=function(e){for(var t=new R.TokenSet.Builder,r=0,n=e.length;r<n;r++)t.insert(e[r])
return t.finish(),t.root},R.TokenSet.fromClause=function(e){return"editDistance"in e?R.TokenSet.fromFuzzyString(e.term,e.editDistance):R.TokenSet.fromString(e.term)},R.TokenSet.fromFuzzyString=function(e,t){for(var r=new R.TokenSet,n=[{node:r,editsRemaining:t,str:e}];n.length;){var i=n.pop()
if(i.str.length>0){var o,a=i.str.charAt(0)
a in i.node.edges?o=i.node.edges[a]:(o=new R.TokenSet,i.node.edges[a]=o),1==i.str.length&&(o.final=!0),n.push({node:o,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(0!=i.editsRemaining){if("*"in i.node.edges)var s=i.node.edges["*"]
else s=new R.TokenSet,i.node.edges["*"]=s
if(0==i.str.length&&(s.final=!0),n.push({node:s,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&n.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),1==i.str.length&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var l=i.node.edges["*"]
else l=new R.TokenSet,i.node.edges["*"]=l
1==i.str.length&&(l.final=!0),n.push({node:l,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var c,u=i.str.charAt(0),d=i.str.charAt(1)
d in i.node.edges?c=i.node.edges[d]:(c=new R.TokenSet,i.node.edges[d]=c),1==i.str.length&&(c.final=!0),n.push({node:c,editsRemaining:i.editsRemaining-1,str:u+i.str.slice(2)})}}}return r},R.TokenSet.fromString=function(e){for(var t=new R.TokenSet,r=t,n=0,i=e.length;n<i;n++){var o=e[n],a=n==i-1
if("*"==o)t.edges[o]=t,t.final=a
else{var s=new R.TokenSet
s.final=a,t.edges[o]=s,t=s}}return r},R.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),i=n.length
r.node.final&&(r.prefix.charAt(0),e.push(r.prefix))
for(var o=0;o<i;o++){var a=n[o]
t.push({prefix:r.prefix.concat(a),node:r.node.edges[a]})}}return e},R.TokenSet.prototype.toString=function(){if(this._str)return this._str
for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,n=0;n<r;n++){var i=t[n]
e=e+i+this.edges[i].id}return e},R.TokenSet.prototype.intersect=function(e){for(var t=new R.TokenSet,r=void 0,n=[{qNode:e,output:t,node:this}];n.length;){r=n.pop()
for(var i=Object.keys(r.qNode.edges),o=i.length,a=Object.keys(r.node.edges),s=a.length,l=0;l<o;l++)for(var c=i[l],u=0;u<s;u++){var d=a[u]
if(d==c||"*"==c){var f=r.node.edges[d],p=r.qNode.edges[c],h=f.final&&p.final,g=void 0
d in r.output.edges?(g=r.output.edges[d]).final=g.final||h:((g=new R.TokenSet).final=h,r.output.edges[d]=g),n.push({qNode:p,output:g,node:f})}}}return t},R.TokenSet.Builder=function(){this.previousWord="",this.root=new R.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},R.TokenSet.Builder.prototype.insert=function(e){var t,r=0
if(e<this.previousWord)throw new Error("Out of order word insertion")
for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)r++
for(this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child,n=r;n<e.length;n++){var i=new R.TokenSet,o=e[n]
t.edges[o]=i,this.uncheckedNodes.push({parent:t,char:o,child:i}),t=i}t.final=!0,this.previousWord=e},R.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},R.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],n=r.child.toString()
n in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[n]:(r.child._str=n,this.minimizedNodes[n]=r.child),this.uncheckedNodes.pop()}},R.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},R.Index.prototype.search=function(e){return this.query(function(t){new R.QueryParser(e,t).parse()})},R.Index.prototype.query=function(e){for(var t=new R.Query(this.fields),r=Object.create(null),n=Object.create(null),i=Object.create(null),o=Object.create(null),a=Object.create(null),s=0;s<this.fields.length;s++)n[this.fields[s]]=new R.Vector
for(e.call(t,t),s=0;s<t.clauses.length;s++){var l,c=t.clauses[s],u=R.Set.empty
l=c.usePipeline?this.pipeline.runString(c.term,{fields:c.fields}):[c.term]
for(var d=0;d<l.length;d++){var f=l[d]
c.term=f
var p=R.TokenSet.fromClause(c),h=this.tokenSet.intersect(p).toArray()
if(0===h.length&&c.presence===R.Query.presence.REQUIRED){for(var g=0;g<c.fields.length;g++)o[D=c.fields[g]]=R.Set.empty
break}for(var m=0;m<h.length;m++){var b=h[m],y=this.invertedIndex[b],v=y._index
for(g=0;g<c.fields.length;g++){var w=y[D=c.fields[g]],x=Object.keys(w),k=b+"/"+D,E=new R.Set(x)
if(c.presence==R.Query.presence.REQUIRED&&(u=u.union(E),void 0===o[D]&&(o[D]=R.Set.complete)),c.presence!=R.Query.presence.PROHIBITED){if(n[D].upsert(v,c.boost,function(e,t){return e+t}),!i[k]){for(var _=0;_<x.length;_++){var A,T=x[_],S=new R.FieldRef(T,D),O=w[T]
void 0===(A=r[S])?r[S]=new R.MatchData(b,D,O):A.add(b,D,O)}i[k]=!0}}else void 0===a[D]&&(a[D]=R.Set.empty),a[D]=a[D].union(E)}}}if(c.presence===R.Query.presence.REQUIRED)for(g=0;g<c.fields.length;g++)o[D=c.fields[g]]=o[D].intersect(u)}var N=R.Set.complete,C=R.Set.empty
for(s=0;s<this.fields.length;s++){var D
o[D=this.fields[s]]&&(N=N.intersect(o[D])),a[D]&&(C=C.union(a[D]))}var L=Object.keys(r),q=[],P=Object.create(null)
if(t.isNegated())for(L=Object.keys(this.fieldVectors),s=0;s<L.length;s++){S=L[s]
var j=R.FieldRef.fromString(S)
r[S]=new R.MatchData}for(s=0;s<L.length;s++){var I=(j=R.FieldRef.fromString(L[s])).docRef
if(N.contains(I)&&!C.contains(I)){var M,B=this.fieldVectors[j],F=n[j.fieldName].similarity(B)
if(void 0!==(M=P[I]))M.score+=F,M.matchData.combine(r[j])
else{var z={ref:I,score:F,matchData:r[j]}
P[I]=z,q.push(z)}}}return q.sort(function(e,t){return t.score-e.score})},R.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map(function(e){return[e,this.invertedIndex[e]]},this),t=Object.keys(this.fieldVectors).map(function(e){return[e,this.fieldVectors[e].toJSON()]},this)
return{version:R.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},R.Index.load=function(e){var t={},r={},n=e.fieldVectors,i=Object.create(null),o=e.invertedIndex,a=new R.TokenSet.Builder,s=R.Pipeline.load(e.pipeline)
e.version!=R.version&&R.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+R.version+"' does not match serialized index '"+e.version+"'")
for(var l=0;l<n.length;l++){var c=(d=n[l])[0],u=d[1]
r[c]=new R.Vector(u)}for(l=0;l<o.length;l++){var d,f=(d=o[l])[0],p=d[1]
a.insert(f),i[f]=p}return a.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=i,t.tokenSet=a.root,t.pipeline=s,new R.Index(t)},R.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=R.tokenizer,this.pipeline=new R.Pipeline,this.searchPipeline=new R.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},R.Builder.prototype.ref=function(e){this._ref=e},R.Builder.prototype.field=function(e,t){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'")
this._fields[e]=t||{}},R.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},R.Builder.prototype.k1=function(e){this._k1=e},R.Builder.prototype.add=function(e,t){var r=e[this._ref],n=Object.keys(this._fields)
this._documents[r]=t||{},this.documentCount+=1
for(var i=0;i<n.length;i++){var o=n[i],a=this._fields[o].extractor,s=a?a(e):e[o],l=this.tokenizer(s,{fields:[o]}),c=this.pipeline.run(l),u=new R.FieldRef(r,o),d=Object.create(null)
this.fieldTermFrequencies[u]=d,this.fieldLengths[u]=0,this.fieldLengths[u]+=c.length
for(var f=0;f<c.length;f++){var p=c[f]
if(null==d[p]&&(d[p]=0),d[p]+=1,null==this.invertedIndex[p]){var h=Object.create(null)
h._index=this.termIndex,this.termIndex+=1
for(var g=0;g<n.length;g++)h[n[g]]=Object.create(null)
this.invertedIndex[p]=h}null==this.invertedIndex[p][o][r]&&(this.invertedIndex[p][o][r]=Object.create(null))
for(var m=0;m<this.metadataWhitelist.length;m++){var b=this.metadataWhitelist[m],y=p.metadata[b]
null==this.invertedIndex[p][o][r][b]&&(this.invertedIndex[p][o][r][b]=[]),this.invertedIndex[p][o][r][b].push(y)}}}},R.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},n={},i=0;i<t;i++){var o=R.FieldRef.fromString(e[i]),a=o.fieldName
n[a]||(n[a]=0),n[a]+=1,r[a]||(r[a]=0),r[a]+=this.fieldLengths[o]}var s=Object.keys(this._fields)
for(i=0;i<s.length;i++){var l=s[i]
r[l]=r[l]/n[l]}this.averageFieldLength=r},R.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,n=Object.create(null),i=0;i<r;i++){for(var o=R.FieldRef.fromString(t[i]),a=o.fieldName,s=this.fieldLengths[o],l=new R.Vector,c=this.fieldTermFrequencies[o],u=Object.keys(c),d=u.length,f=this._fields[a].boost||1,p=this._documents[o.docRef].boost||1,h=0;h<d;h++){var g,m,b,y=u[h],v=c[y],w=this.invertedIndex[y]._index
void 0===n[y]?(g=R.idf(this.invertedIndex[y],this.documentCount),n[y]=g):g=n[y],m=g*((this._k1+1)*v)/(this._k1*(1-this._b+this._b*(s/this.averageFieldLength[a]))+v),m*=f,m*=p,b=Math.round(1e3*m)/1e3,l.insert(w,b)}e[o]=l}this.fieldVectors=e},R.Builder.prototype.createTokenSet=function(){this.tokenSet=R.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},R.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new R.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},R.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1)
t.unshift(this),e.apply(this,t)},R.MatchData=function(e,t,r){for(var n=Object.create(null),i=Object.keys(r||{}),o=0;o<i.length;o++){var a=i[o]
n[a]=r[a].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)},R.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var n=t[r],i=Object.keys(e.metadata[n])
null==this.metadata[n]&&(this.metadata[n]=Object.create(null))
for(var o=0;o<i.length;o++){var a=i[o],s=Object.keys(e.metadata[n][a])
null==this.metadata[n][a]&&(this.metadata[n][a]=Object.create(null))
for(var l=0;l<s.length;l++){var c=s[l]
null==this.metadata[n][a][c]?this.metadata[n][a][c]=e.metadata[n][a][c]:this.metadata[n][a][c]=this.metadata[n][a][c].concat(e.metadata[n][a][c])}}}},R.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r)
if(t in this.metadata[e])for(var n=Object.keys(r),i=0;i<n.length;i++){var o=n[i]
o in this.metadata[e][t]?this.metadata[e][t][o]=this.metadata[e][t][o].concat(r[o]):this.metadata[e][t][o]=r[o]}else this.metadata[e][t]=r},R.Query=function(e){this.clauses=[],this.allFields=e},R.Query.wildcard=new String("*"),R.Query.wildcard.NONE=0,R.Query.wildcard.LEADING=1,R.Query.wildcard.TRAILING=2,R.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},R.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=R.Query.wildcard.NONE),e.wildcard&R.Query.wildcard.LEADING&&e.term.charAt(0)!=R.Query.wildcard&&(e.term="*"+e.term),e.wildcard&R.Query.wildcard.TRAILING&&e.term.slice(-1)!=R.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=R.Query.presence.OPTIONAL),this.clauses.push(e),this},R.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=R.Query.presence.PROHIBITED)return!1
return!0},R.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach(function(e){this.term(e,R.utils.clone(t))},this),this
var r=t||{}
return r.term=e.toString(),this.clause(r),this},R.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},R.QueryParseError.prototype=new Error,R.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},R.QueryLexer.prototype.run=function(){for(var e=R.QueryLexer.lexText;e;)e=e(this)},R.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,n=0;n<this.escapeCharPositions.length;n++)r=this.escapeCharPositions[n],e.push(this.str.slice(t,r)),t=r+1
return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},R.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},R.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},R.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return R.QueryLexer.EOS
var e=this.str.charAt(this.pos)
return this.pos+=1,e},R.QueryLexer.prototype.width=function(){return this.pos-this.start},R.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},R.QueryLexer.prototype.backup=function(){this.pos-=1},R.QueryLexer.prototype.acceptDigitRun=function(){var e,t
do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58)
e!=R.QueryLexer.EOS&&this.backup()},R.QueryLexer.prototype.more=function(){return this.pos<this.length},R.QueryLexer.EOS="EOS",R.QueryLexer.FIELD="FIELD",R.QueryLexer.TERM="TERM",R.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",R.QueryLexer.BOOST="BOOST",R.QueryLexer.PRESENCE="PRESENCE",R.QueryLexer.lexField=function(e){return e.backup(),e.emit(R.QueryLexer.FIELD),e.ignore(),R.QueryLexer.lexText},R.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(R.QueryLexer.TERM)),e.ignore(),e.more())return R.QueryLexer.lexText},R.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(R.QueryLexer.EDIT_DISTANCE),R.QueryLexer.lexText},R.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(R.QueryLexer.BOOST),R.QueryLexer.lexText},R.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(R.QueryLexer.TERM)},R.QueryLexer.termSeparator=R.tokenizer.separator,R.QueryLexer.lexText=function(e){for(;;){var t=e.next()
if(t==R.QueryLexer.EOS)return R.QueryLexer.lexEOS
if(92!=t.charCodeAt(0)){if(":"==t)return R.QueryLexer.lexField
if("~"==t)return e.backup(),e.width()>0&&e.emit(R.QueryLexer.TERM),R.QueryLexer.lexEditDistance
if("^"==t)return e.backup(),e.width()>0&&e.emit(R.QueryLexer.TERM),R.QueryLexer.lexBoost
if("+"==t&&1===e.width())return e.emit(R.QueryLexer.PRESENCE),R.QueryLexer.lexText
if("-"==t&&1===e.width())return e.emit(R.QueryLexer.PRESENCE),R.QueryLexer.lexText
if(t.match(R.QueryLexer.termSeparator))return R.QueryLexer.lexTerm}else e.escapeCharacter()}},R.QueryParser=function(e,t){this.lexer=new R.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},R.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes
for(var e=R.QueryParser.parseClause;e;)e=e(this)
return this.query},R.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},R.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme()
return this.lexemeIdx+=1,e},R.QueryParser.prototype.nextClause=function(){var e=this.currentClause
this.query.clause(e),this.currentClause={}},R.QueryParser.parseClause=function(e){var t=e.peekLexeme()
if(null!=t)switch(t.type){case R.QueryLexer.PRESENCE:return R.QueryParser.parsePresence
case R.QueryLexer.FIELD:return R.QueryParser.parseField
case R.QueryLexer.TERM:return R.QueryParser.parseTerm
default:var r="expected either a field or a term, found "+t.type
throw t.str.length>=1&&(r+=" with value '"+t.str+"'"),new R.QueryParseError(r,t.start,t.end)}},R.QueryParser.parsePresence=function(e){var t=e.consumeLexeme()
if(null!=t){switch(t.str){case"-":e.currentClause.presence=R.Query.presence.PROHIBITED
break
case"+":e.currentClause.presence=R.Query.presence.REQUIRED
break
default:var r="unrecognised presence operator'"+t.str+"'"
throw new R.QueryParseError(r,t.start,t.end)}var n=e.peekLexeme()
if(null==n)throw r="expecting term or field, found nothing",new R.QueryParseError(r,t.start,t.end)
switch(n.type){case R.QueryLexer.FIELD:return R.QueryParser.parseField
case R.QueryLexer.TERM:return R.QueryParser.parseTerm
default:throw r="expecting term or field, found '"+n.type+"'",new R.QueryParseError(r,n.start,n.end)}}},R.QueryParser.parseField=function(e){var t=e.consumeLexeme()
if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map(function(e){return"'"+e+"'"}).join(", "),n="unrecognised field '"+t.str+"', possible fields: "+r
throw new R.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str]
var i=e.peekLexeme()
if(null==i)throw n="expecting term, found nothing",new R.QueryParseError(n,t.start,t.end)
if(i.type===R.QueryLexer.TERM)return R.QueryParser.parseTerm
throw n="expecting term, found '"+i.type+"'",new R.QueryParseError(n,i.start,i.end)}},R.QueryParser.parseTerm=function(e){var t=e.consumeLexeme()
if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1)
var r=e.peekLexeme()
if(null!=r)switch(r.type){case R.QueryLexer.TERM:return e.nextClause(),R.QueryParser.parseTerm
case R.QueryLexer.FIELD:return e.nextClause(),R.QueryParser.parseField
case R.QueryLexer.EDIT_DISTANCE:return R.QueryParser.parseEditDistance
case R.QueryLexer.BOOST:return R.QueryParser.parseBoost
case R.QueryLexer.PRESENCE:return e.nextClause(),R.QueryParser.parsePresence
default:var n="Unexpected lexeme type '"+r.type+"'"
throw new R.QueryParseError(n,r.start,r.end)}else e.nextClause()}},R.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme()
if(null!=t){var r=parseInt(t.str,10)
if(isNaN(r)){var n="edit distance must be numeric"
throw new R.QueryParseError(n,t.start,t.end)}e.currentClause.editDistance=r
var i=e.peekLexeme()
if(null!=i)switch(i.type){case R.QueryLexer.TERM:return e.nextClause(),R.QueryParser.parseTerm
case R.QueryLexer.FIELD:return e.nextClause(),R.QueryParser.parseField
case R.QueryLexer.EDIT_DISTANCE:return R.QueryParser.parseEditDistance
case R.QueryLexer.BOOST:return R.QueryParser.parseBoost
case R.QueryLexer.PRESENCE:return e.nextClause(),R.QueryParser.parsePresence
default:throw n="Unexpected lexeme type '"+i.type+"'",new R.QueryParseError(n,i.start,i.end)}else e.nextClause()}},R.QueryParser.parseBoost=function(e){var t=e.consumeLexeme()
if(null!=t){var r=parseInt(t.str,10)
if(isNaN(r)){var n="boost must be numeric"
throw new R.QueryParseError(n,t.start,t.end)}e.currentClause.boost=r
var i=e.peekLexeme()
if(null!=i)switch(i.type){case R.QueryLexer.TERM:return e.nextClause(),R.QueryParser.parseTerm
case R.QueryLexer.FIELD:return e.nextClause(),R.QueryParser.parseField
case R.QueryLexer.EDIT_DISTANCE:return R.QueryParser.parseEditDistance
case R.QueryLexer.BOOST:return R.QueryParser.parseBoost
case R.QueryLexer.PRESENCE:return e.nextClause(),R.QueryParser.parsePresence
default:throw n="Unexpected lexeme type '"+i.type+"'",new R.QueryParseError(n,i.start,i.end)}else e.nextClause()}},void 0===(i="function"==typeof(n=function(){return R})?n.call(t,r,t,e):n)||(e.exports=i)}()},6913(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e[e.length-1]}},9615(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.NodeType=t.TextNode=t.Node=t.valid=t.CommentNode=t.HTMLElement=t.parse=void 0
var i=n(r(6515))
t.CommentNode=i.default
var o=n(r(7265))
t.HTMLElement=o.default
var a=n(r(2168))
t.Node=a.default
var s=n(r(4819))
t.TextNode=s.default
var l=n(r(6448))
t.NodeType=l.default
var c=n(r(7759)),u=n(r(3062))
function d(e,t){return void 0===t&&(t={}),(0,c.default)(e,t)}t.valid=u.default,t.default=d,t.parse=d,d.parse=c.default,d.HTMLElement=o.default,d.CommentNode=i.default,d.valid=u.default,d.Node=a.default,d.TextNode=s.default,d.NodeType=l.default},8198(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(r(6448))
function o(e){return e&&e.nodeType===i.default.ELEMENT_NODE}function a(e,t){return o(e)?e.getAttribute(t):void 0}function s(e){return e&&e.childNodes}function l(e){return e?e.parentNode:null}t.default={isTag:o,getAttributeValue:a,getName:function(e){return(e&&e.rawTagName||"").toLowerCase()},getChildren:s,getParent:l,getText:function(e){return e.text},removeSubsets:function(e){for(var t,r,n,i=e.length;--i>-1;){for(t=r=e[i],e[i]=null,n=!0;r;){if(e.indexOf(r)>-1){n=!1,e.splice(i,1)
break}r=l(r)}n&&(e[i]=t)}return e},existsOne:function e(t,r){return r.some(function(r){return!!o(r)&&(t(r)||e(t,s(r)))})},getSiblings:function(e){var t=l(e)
return t?s(t):[]},hasAttrib:function(e,t){return void 0!==a(e,t)},findOne:function e(t,r){for(var n=null,i=0,o=null==r?void 0:r.length;i<o&&!n;i++){var a=r[i]
if(t(a))n=a
else{var l=s(a)
l&&l.length>0&&(n=e(t,l))}}return n},findAll:function e(t,r){for(var n=[],i=0,a=r.length;i<a;i++)if(o(r[i])){t(r[i])&&n.push(r[i])
var l=s(r[i])
l&&(n=n.concat(e(t,l)))}return n}}},6515(e,t,r){"use strict"
var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var a=o(r(2168)),s=o(r(6448)),l=function(e){function t(t,r,n,i){void 0===r&&(r=null),void 0===i&&(i="!--")
var o=e.call(this,r,n)||this
return o.rawText=t,o.rawTagName=i,o.nodeType=s.default.COMMENT_NODE,o}return i(t,e),t.prototype.clone=function(){return new t(this.rawText,null,void 0,this.rawTagName)},Object.defineProperty(t.prototype,"text",{get:function(){return this.rawText},enumerable:!1,configurable:!0}),t.prototype.toString=function(){return"\x3c!--".concat(this.rawText,"--\x3e")},t}(a.default)
t.default=l},7265(e,t,r){"use strict"
var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)},a=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i])
return e.concat(n||Array.prototype.slice.call(t))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.parse=t.base_parse=void 0
var l=r(5107),c=s(r(5354)),u=s(r(6913)),d=s(r(8198)),f=s(r(7341)),p=s(r(6515)),h=s(r(2168)),g=s(r(4819)),m=s(r(6448))
function b(e){return JSON.parse(JSON.stringify(c.default.decode(e)))}var y=new Set
!function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=function(e){for(var t=0;t<e.length;t++){var r=e[t]
y.add(r),y.add(r.toUpperCase())}},n=0,i=e;n<i.length;n++)r(i[n])}(["h1","h2","h3","h4","h5","h6","header","hgroup"],["details","dialog","dd","div","dt"],["fieldset","figcaption","figure","footer","form"],["table","td","tr"],["address","article","aside","blockquote","br","hr","li","main","nav","ol","p","pre","section","ul"])
var v=function(){function e(e,t){void 0===e&&(e=[]),void 0===t&&(t=function(){return null}),this._set=new Set(e),this._afterUpdate=t}return e.prototype._validate=function(e){if(/\s/.test(e))throw new Error("DOMException in DOMTokenList.add: The token '".concat(e,"' contains HTML space characters, which are not valid in tokens."))},e.prototype.add=function(e){this._validate(e),this._set.add(e),this._afterUpdate(this)},e.prototype.replace=function(e,t){this._validate(t),this._set.delete(e),this._set.add(t),this._afterUpdate(this)},e.prototype.remove=function(e){this._set.delete(e)&&this._afterUpdate(this)},e.prototype.toggle=function(e){this._validate(e),this._set.has(e)?this._set.delete(e):this._set.add(e),this._afterUpdate(this)},e.prototype.contains=function(e){return this._set.has(e)},Object.defineProperty(e.prototype,"length",{get:function(){return this._set.size},enumerable:!1,configurable:!0}),e.prototype.values=function(){return this._set.values()},Object.defineProperty(e.prototype,"value",{get:function(){return Array.from(this._set.values())},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return Array.from(this._set.values()).join(" ")},e}(),w=function(e){function t(t,r,n,i,o,a,s){void 0===n&&(n=""),void 0===i&&(i=null),void 0===a&&(a=new f.default),void 0===s&&(s={})
var l=e.call(this,i,o)||this
if(l.rawAttrs=n,l.voidTag=a,l.nodeType=m.default.ELEMENT_NODE,l.rawTagName=t,l.rawAttrs=n||"",l.id=r.id||"",l.childNodes=[],l._parseOptions=s,l.classList=new v(r.class?r.class.split(/\s+/):[],function(e){return l.setAttribute("class",e.toString())}),r.id&&(n||(l.rawAttrs='id="'.concat(r.id,'"'))),r.class&&!n){var c='class="'.concat(l.classList.toString(),'"')
l.rawAttrs?l.rawAttrs+=" ".concat(c):l.rawAttrs=c}return l}return i(t,e),t.prototype.quoteAttribute=function(e){return null==e?"null":JSON.stringify(e.replace(/"/g,"&quot;")).replace(/\\t/g,"\t").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\/g,"")},t.prototype.removeChild=function(e){return this.childNodes=this.childNodes.filter(function(t){return t!==e}),this},t.prototype.exchangeChild=function(e,t){var r=this.childNodes
return this.childNodes=r.map(function(r){return r===e?t:r}),this},Object.defineProperty(t.prototype,"tagName",{get:function(){return this.rawTagName?this.rawTagName.toUpperCase():this.rawTagName},set:function(e){this.rawTagName=e.toLowerCase()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"localName",{get:function(){return this.rawTagName.toLowerCase()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isVoidElement",{get:function(){return this.voidTag.isVoidElement(this.localName)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rawText",{get:function(){return/^br$/i.test(this.rawTagName)?"\n":this.childNodes.reduce(function(e,t){return e+t.rawText},"")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"textContent",{get:function(){return b(this.rawText)},set:function(e){var t=[new g.default(e,this)]
this.childNodes=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"text",{get:function(){return b(this.rawText)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"structuredText",{get:function(){var e=[],t=[e]
return function r(n){if(n.nodeType===m.default.ELEMENT_NODE)y.has(n.rawTagName)?(e.length>0&&t.push(e=[]),n.childNodes.forEach(r),e.length>0&&t.push(e=[])):n.childNodes.forEach(r)
else if(n.nodeType===m.default.TEXT_NODE)if(n.isWhitespace)e.prependWhitespace=!0
else{var i=n.trimmedText
e.prependWhitespace&&(i=" ".concat(i),e.prependWhitespace=!1),e.push(i)}}(this),t.map(function(e){return e.join("").replace(/\s{2,}/g," ")}).join("\n").replace(/\s+$/,"")},enumerable:!1,configurable:!0}),t.prototype.toString=function(){var e=this.rawTagName
if(e){var t=this.rawAttrs?" ".concat(this.rawAttrs):""
return this.voidTag.formatNode(e,t,this.innerHTML)}return this.innerHTML},Object.defineProperty(t.prototype,"innerHTML",{get:function(){return this.childNodes.map(function(e){return e.toString()}).join("")},set:function(e){var t=S(e,this._parseOptions),r=t.childNodes.length?t.childNodes:[new g.default(e,this)]
O(r,this),O(this.childNodes,null),this.childNodes=r},enumerable:!1,configurable:!0}),t.prototype.set_content=function(e,t){if(void 0===t&&(t={}),e instanceof h.default)e=[e]
else if("string"==typeof e){var r=S(e,t=o(o({},this._parseOptions),t))
e=r.childNodes.length?r.childNodes:[new g.default(r.innerHTML,this)]}return O(this.childNodes,null),O(e,this),this.childNodes=e,this},t.prototype.replaceWith=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
var n=this.parentNode,i=t.map(function(t){if(t instanceof h.default)return[t]
if("string"==typeof t){var r=S(t,e._parseOptions)
return r.childNodes.length?r.childNodes:[new g.default(t,e)]}return[]}).flat(),o=n.childNodes.findIndex(function(t){return t===e})
return O([this],null),n.childNodes=a(a(a([],n.childNodes.slice(0,o),!0),O(i,n),!0),n.childNodes.slice(o+1),!0),this},Object.defineProperty(t.prototype,"outerHTML",{get:function(){return this.toString()},enumerable:!1,configurable:!0}),t.prototype.trimRight=function(e){for(var t=0;t<this.childNodes.length;t++){var r=this.childNodes[t]
if(r.nodeType===m.default.ELEMENT_NODE)r.trimRight(e)
else{var n=r.rawText.search(e)
n>-1&&(r.rawText=r.rawText.substr(0,n),this.childNodes.length=t+1)}}return this},Object.defineProperty(t.prototype,"structure",{get:function(){var e=[],t=0
function r(r){e.push("  ".repeat(t)+r)}return function e(n){var i=n.id?"#".concat(n.id):"",o=n.classList.length?".".concat(n.classList.value.join(".")):""
r("".concat(n.rawTagName).concat(i).concat(o)),t++,n.childNodes.forEach(function(t){t.nodeType===m.default.ELEMENT_NODE?e(t):t.nodeType===m.default.TEXT_NODE&&(t.isWhitespace||r("#text"))}),t--}(this),e.join("\n")},enumerable:!1,configurable:!0}),t.prototype.removeWhitespace=function(){var e=this,t=0
return this.childNodes.forEach(function(r){if(r.nodeType===m.default.TEXT_NODE){if(r.isWhitespace)return
r.rawText=r.trimmedRawText}else r.nodeType===m.default.ELEMENT_NODE&&r.removeWhitespace()
e.childNodes[t++]=r}),this.childNodes.length=t,this},t.prototype.querySelectorAll=function(e){return(0,l.selectAll)(e,this,{xmlMode:!0,adapter:d.default})},t.prototype.querySelector=function(e){return(0,l.selectOne)(e,this,{xmlMode:!0,adapter:d.default})},t.prototype.getElementsByTagName=function(e){for(var t=e.toUpperCase(),r=[],n=[],i=this,o=0;void 0!==o;){var a=void 0
do{a=i.childNodes[o++]}while(o<i.childNodes.length&&void 0===a)
void 0!==a?a.nodeType===m.default.ELEMENT_NODE&&("*"!==e&&a.tagName!==t||r.push(a),a.childNodes.length>0&&(n.push(o),i=a,o=0)):(i=i.parentNode,o=n.pop())}return r},t.prototype.getElementById=function(e){for(var t=[],r=this,n=0;void 0!==n;){var i=void 0
do{i=r.childNodes[n++]}while(n<r.childNodes.length&&void 0===i)
if(void 0!==i){if(i.nodeType===m.default.ELEMENT_NODE){if(i.id===e)return i
i.childNodes.length>0&&(t.push(n),r=i,n=0)}}else r=r.parentNode,n=t.pop()}return null},t.prototype.closest=function(e){var t=new Map,r=this,n=null
function i(e,r){for(var n=null,o=0,a=r.length;o<a&&!n;o++){var s=r[o]
if(e(s))n=s
else{var l=t.get(s)
l&&(n=i(e,[l]))}}return n}for(;r;)t.set(r,n),n=r,r=r.parentNode
for(r=this;r;){var a=(0,l.selectOne)(e,r,{xmlMode:!0,adapter:o(o({},d.default),{getChildren:function(e){var r=t.get(e)
return r&&[r]},getSiblings:function(e){return[e]},findOne:i,findAll:function(){return[]}})})
if(a)return a
r=r.parentNode}return null},t.prototype.appendChild=function(e){return e.remove(),this.childNodes.push(e),e.parentNode=this,e},Object.defineProperty(t.prototype,"firstChild",{get:function(){return this.childNodes[0]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return(0,u.default)(this.childNodes)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attrs",{get:function(){if(this._attrs)return this._attrs
this._attrs={}
var e=this.rawAttributes
for(var t in e){var r=e[t]||""
this._attrs[t.toLowerCase()]=b(r)}return this._attrs},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e={},t=this.rawAttributes
for(var r in t){var n=t[r]||""
e[r]=b(n)}return e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rawAttributes",{get:function(){if(this._rawAttrs)return this._rawAttrs
var e={}
if(this.rawAttrs)for(var t=/([a-zA-Z()[\]#@$.?:][a-zA-Z0-9-_:()[\]#]*)(?:\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+))?/g,r=void 0;r=t.exec(this.rawAttrs);){var n=r[1],i=r[2]||null
!i||"'"!==i[0]&&'"'!==i[0]||(i=i.slice(1,i.length-1)),e[n]=e[n]||i}return this._rawAttrs=e,e},enumerable:!1,configurable:!0}),t.prototype.removeAttribute=function(e){var t=this,r=this.rawAttributes
return delete r[e],this._attrs&&delete this._attrs[e],this.rawAttrs=Object.keys(r).map(function(e){var n=t.quoteAttribute(r[e])
return"null"===n||'""'===n?e:"".concat(e,"=").concat(n)}).join(" "),"id"===e&&(this.id=""),this},t.prototype.hasAttribute=function(e){return e.toLowerCase()in this.attrs},t.prototype.getAttribute=function(e){return this.attrs[e.toLowerCase()]},t.prototype.setAttribute=function(e,t){var r=this
if(arguments.length<2)throw new Error("Failed to execute 'setAttribute' on 'Element'")
var n=e.toLowerCase(),i=this.rawAttributes
for(var o in i)if(o.toLowerCase()===n){e=o
break}return i[e]=String(t),this._attrs&&(this._attrs[n]=b(i[e])),this.rawAttrs=Object.keys(i).map(function(e){var t=r.quoteAttribute(i[e])
return"null"===t||'""'===t?e:"".concat(e,"=").concat(t)}).join(" "),"id"===e&&(this.id=t),this},t.prototype.setAttributes=function(e){var t=this
return this._attrs&&delete this._attrs,this._rawAttrs&&delete this._rawAttrs,this.rawAttrs=Object.keys(e).map(function(r){var n=e[r]
return"null"===n||'""'===n?r:"".concat(r,"=").concat(t.quoteAttribute(String(n)))}).join(" "),this},t.prototype.insertAdjacentHTML=function(e,t){var r,n,i,o=this
if(arguments.length<2)throw new Error("2 arguments required")
var s=S(t,this._parseOptions)
if("afterend"===e){var l=this.parentNode.childNodes.findIndex(function(e){return e===o})
O(s.childNodes,this.parentNode),(r=this.parentNode.childNodes).splice.apply(r,a([l+1,0],s.childNodes,!1))}else if("afterbegin"===e)O(s.childNodes,this),(n=this.childNodes).unshift.apply(n,s.childNodes)
else if("beforeend"===e)s.childNodes.forEach(function(e){o.appendChild(e)})
else{if("beforebegin"!==e)throw new Error("The value provided ('".concat(e,"') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'"))
l=this.parentNode.childNodes.findIndex(function(e){return e===o}),O(s.childNodes,this.parentNode),(i=this.parentNode.childNodes).splice.apply(i,a([l,0],s.childNodes,!1))}return this},Object.defineProperty(t.prototype,"nextSibling",{get:function(){if(this.parentNode){for(var e=this.parentNode.childNodes,t=0;t<e.length;)if(this===e[t++])return e[t]||null
return null}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nextElementSibling",{get:function(){if(this.parentNode){for(var e=this.parentNode.childNodes,r=0,n=!1;r<e.length;){var i=e[r++]
if(n){if(i instanceof t)return i||null}else this===i&&(n=!0)}return null}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"previousSibling",{get:function(){if(this.parentNode){for(var e=this.parentNode.childNodes,t=e.length;t>0;)if(this===e[--t])return e[t-1]||null
return null}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"previousElementSibling",{get:function(){if(this.parentNode){for(var e=this.parentNode.childNodes,r=e.length,n=!1;r>0;){var i=e[--r]
if(n){if(i instanceof t)return i||null}else this===i&&(n=!0)}return null}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"classNames",{get:function(){return this.classList.toString()},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return S(this.toString(),this._parseOptions).firstChild},t}(h.default)
t.default=w
var x=/<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g,k=/(?:^|\s)(id|class)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi,E={li:{li:!0,LI:!0},LI:{li:!0,LI:!0},p:{p:!0,div:!0,P:!0,DIV:!0},P:{p:!0,div:!0,P:!0,DIV:!0},b:{div:!0,DIV:!0},B:{div:!0,DIV:!0},td:{td:!0,th:!0,TD:!0,TH:!0},TD:{td:!0,th:!0,TD:!0,TH:!0},th:{td:!0,th:!0,TD:!0,TH:!0},TH:{td:!0,th:!0,TD:!0,TH:!0},h1:{h1:!0,H1:!0},H1:{h1:!0,H1:!0},h2:{h2:!0,H2:!0},H2:{h2:!0,H2:!0},h3:{h3:!0,H3:!0},H3:{h3:!0,H3:!0},h4:{h4:!0,H4:!0},H4:{h4:!0,H4:!0},h5:{h5:!0,H5:!0},H5:{h5:!0,H5:!0},h6:{h6:!0,H6:!0},H6:{h6:!0,H6:!0}},_={li:{ul:!0,ol:!0,UL:!0,OL:!0},LI:{ul:!0,ol:!0,UL:!0,OL:!0},a:{div:!0,DIV:!0},A:{div:!0,DIV:!0},b:{div:!0,DIV:!0},B:{div:!0,DIV:!0},i:{div:!0,DIV:!0},I:{div:!0,DIV:!0},p:{div:!0,DIV:!0},P:{div:!0,DIV:!0},td:{tr:!0,table:!0,TR:!0,TABLE:!0},TD:{tr:!0,table:!0,TR:!0,TABLE:!0},th:{tr:!0,table:!0,TR:!0,TABLE:!0},TH:{tr:!0,table:!0,TR:!0,TABLE:!0}},A="documentfragmentcontainer"
function T(e,t){var r,n
void 0===t&&(t={})
var i=new f.default(null===(r=null==t?void 0:t.voidTag)||void 0===r?void 0:r.closingSlash,null===(n=null==t?void 0:t.voidTag)||void 0===n?void 0:n.tags),o=t.blockTextElements||{script:!0,noscript:!0,style:!0,pre:!0},a=Object.keys(o),s=a.map(function(e){return new RegExp("^".concat(e,"$"),"i")}),l=a.filter(function(e){return Boolean(o[e])}).map(function(e){return new RegExp("^".concat(e,"$"),"i")})
function c(e){return l.some(function(t){return t.test(e)})}function d(e){return s.some(function(t){return t.test(e)})}var h,m=function(e,t){return[e-D,t-D]},b=new w(null,{},"",null,[0,e.length],i,t),y=b,v=[b],T=-1,S=void 0
e="<".concat(A,">").concat(e,"</").concat(A,">")
for(var O=t.lowerCaseTagName,N=t.fixNestedATags,C=e.length-27,D=27;h=x.exec(e);){var L=h[0],q=h[1],R=h[2],P=h[3],j=h[4],I=L.length,M=x.lastIndex-I,B=x.lastIndex
if(T>-1&&T+I<B){var F=e.substring(T,M)
y.appendChild(new g.default(F,y,m(T,M)))}if(T=x.lastIndex,R!==A)if("!"!==L[1]){if(O&&(R=R.toLowerCase()),!q){for(var z={},U=void 0;U=k.exec(P);){var H=U[1],$=U[2],V="'"===$[0]||'"'===$[0]
z[H.toLowerCase()]=V?$.slice(1,$.length-1):$}var W=y.rawTagName
!j&&E[W]&&E[W][R]&&(v.pop(),y=(0,u.default)(v)),!N||"a"!==R&&"A"!==R||(void 0!==S&&(v.splice(S),y=(0,u.default)(v)),S=v.length)
var G=x.lastIndex,Q=G-I
if(y=y.appendChild(new w(R,z,P.slice(1),null,m(Q,G),i,t)),v.push(y),d(R)){var Z="</".concat(R,">"),K=O?e.toLocaleLowerCase().indexOf(Z,x.lastIndex):e.indexOf(Z,x.lastIndex),Y=-1===K?C:K
c(R)&&(F=e.substring(G,Y)).length>0&&/\S/.test(F)&&y.appendChild(new g.default(F,y,m(G,Y))),-1===K?T=x.lastIndex=e.length+1:(T=x.lastIndex=K+Z.length,q="/")}}if(q||j||i.isVoidElement(R))for(;;){if(null==S||"a"!==R&&"A"!==R||(S=void 0),y.rawTagName===R){y.range[1]=m(-1,Math.max(T,B))[1],v.pop(),y=(0,u.default)(v)
break}if(W=y.tagName,!_[W]||!_[W][R])break
v.pop(),y=(0,u.default)(v)}}else t.comment&&(F=e.substring(M+4,B-3),y.appendChild(new p.default(F,y,m(M,B))))}return v}function S(e,t){void 0===t&&(t={})
for(var r=T(e,t),n=r[0],i=function(){var e=r.pop(),n=(0,u.default)(r)
e.parentNode&&e.parentNode.parentNode&&(e.parentNode===n&&e.tagName===n.tagName?!0!==t.parseNoneClosedTags&&(n.removeChild(e),e.childNodes.forEach(function(e){n.parentNode.appendChild(e)}),r.pop()):!0!==t.parseNoneClosedTags&&(n.removeChild(e),e.childNodes.forEach(function(e){n.appendChild(e)})))};r.length>1;)i()
return n}function O(e,t){return e.map(function(e){return e.parentNode=t,e})}t.base_parse=T,t.parse=S},2168(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=r(5354),i=function(){function e(e,t){void 0===e&&(e=null),this.parentNode=e,this.childNodes=[],Object.defineProperty(this,"range",{enumerable:!1,writable:!0,configurable:!0,value:null!=t?t:[-1,-1]})}return e.prototype.remove=function(){var e=this
if(this.parentNode){var t=this.parentNode.childNodes
this.parentNode.childNodes=t.filter(function(t){return e!==t}),this.parentNode=null}return this},Object.defineProperty(e.prototype,"innerText",{get:function(){return this.rawText},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textContent",{get:function(){return(0,n.decode)(this.rawText)},set:function(e){this.rawText=(0,n.encode)(e)},enumerable:!1,configurable:!0}),e}()
t.default=i},4819(e,t,r){"use strict"
var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var a=r(5354),s=o(r(2168)),l=o(r(6448)),c=function(e){function t(t,r,n){void 0===r&&(r=null)
var i=e.call(this,r,n)||this
return i.nodeType=l.default.TEXT_NODE,i.rawTagName="",i._rawText=t,i}return i(t,e),t.prototype.clone=function(){return new t(this._rawText,null)},Object.defineProperty(t.prototype,"rawText",{get:function(){return this._rawText},set:function(e){this._rawText=e,this._trimmedRawText=void 0,this._trimmedText=void 0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"trimmedRawText",{get:function(){return void 0!==this._trimmedRawText||(this._trimmedRawText=u(this.rawText)),this._trimmedRawText},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"trimmedText",{get:function(){return void 0!==this._trimmedText||(this._trimmedText=u(this.text)),this._trimmedText},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"text",{get:function(){return(0,a.decode)(this.rawText)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isWhitespace",{get:function(){return/^(\s|&nbsp;)*$/.test(this.rawText)},enumerable:!1,configurable:!0}),t.prototype.toString=function(){return this.rawText},t}(s.default)
function u(e){for(var t,r,n=0;n>=0&&n<e.length;)/\S/.test(e[n])&&(void 0===t?(t=n,n=e.length):(r=n,n=void 0)),void 0===t?n++:n--
void 0===t&&(t=0),void 0===r&&(r=e.length-1)
var i=t>0&&/[^\S\r\n]/.test(e[t-1]),o=r<e.length-1&&/[^\S\r\n]/.test(e[r+1])
return(i?" ":"")+e.slice(t,r+1)+(o?" ":"")}t.default=c},6448(e,t){"use strict"
var r
Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ELEMENT_NODE=1]="ELEMENT_NODE",e[e.TEXT_NODE=3]="TEXT_NODE",e[e.COMMENT_NODE=8]="COMMENT_NODE"}(r||(r={})),t.default=r},7759(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n=r(7265)
Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.parse}})},3062(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=r(7265)
t.default=function(e,t){void 0===t&&(t={})
var r=(0,n.base_parse)(e,t)
return Boolean(1===r.length)}},7341(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){void 0===e&&(e=!1),this.addClosingSlash=e,Array.isArray(t)?this.voidTags=t.reduce(function(e,t){return e.add(t.toLowerCase()).add(t.toUpperCase()).add(t)},new Set):this.voidTags=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].reduce(function(e,t){return e.add(t.toLowerCase()).add(t.toUpperCase()).add(t)},new Set)}return e.prototype.formatNode=function(e,t,r){var n=this.addClosingSlash,i=n&&t&&!t.endsWith(" ")?" ":"",o=n?"".concat(i,"/"):""
return this.isVoidElement(e.toLowerCase())?"<".concat(e).concat(t).concat(o,">"):"<".concat(e).concat(t,">").concat(r,"</").concat(e,">")},e.prototype.isVoidElement=function(e){return this.voidTags.has(e)},e}()
t.default=r},7445(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.generate=t.compile=void 0
var i=n(r(3367))
t.compile=function(e){var t=e[0],r=e[1]-1
if(r<0&&t<=0)return i.default.falseFunc
if(-1===t)return function(e){return e<=r}
if(0===t)return function(e){return e===r}
if(1===t)return r<0?i.default.trueFunc:function(e){return e>=r}
var n=Math.abs(t),o=(r%n+n)%n
return t>1?function(e){return e>=r&&e%n===o}:function(e){return e<=r&&e%n===o}},t.generate=function(e){var t=e[0],r=e[1]-1,n=0
if(t<0){var i=-t,o=(r%i+i)%i
return function(){var e=o+i*n++
return e>r?null:e}}return 0===t?r<0?function(){return null}:function(){return 0===n++?r:null}:(r<0&&(r+=t*Math.ceil(-r/t)),function(){return t*n+++r})}},6220(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.sequence=t.generate=t.compile=t.parse=void 0
var n=r(2079)
Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return n.parse}})
var i=r(7445)
Object.defineProperty(t,"compile",{enumerable:!0,get:function(){return i.compile}}),Object.defineProperty(t,"generate",{enumerable:!0,get:function(){return i.generate}}),t.default=function(e){return(0,i.compile)((0,n.parse)(e))},t.sequence=function(e){return(0,i.generate)((0,n.parse)(e))}},2079(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.parse=void 0
var r=new Set([9,10,12,13,32]),n="0".charCodeAt(0),i="9".charCodeAt(0)
t.parse=function(e){if("even"===(e=e.trim().toLowerCase()))return[2,0]
if("odd"===e)return[2,1]
var t=0,o=0,a=l(),s=c()
if(t<e.length&&"n"===e.charAt(t)&&(t++,o=a*(null!=s?s:1),u(),t<e.length?(a=l(),u(),s=c()):a=s=0),null===s||t<e.length)throw new Error("n-th rule couldn't be parsed ('".concat(e,"')"))
return[o,a*s]
function l(){return"-"===e.charAt(t)?(t++,-1):("+"===e.charAt(t)&&t++,1)}function c(){for(var r=t,o=0;t<e.length&&e.charCodeAt(t)>=n&&e.charCodeAt(t)<=i;)o=10*o+(e.charCodeAt(t)-n),t++
return t===r?null:o}function u(){for(;t<e.length&&r.has(e.charCodeAt(t));)t++}}},3275(e,t,r){"use strict"
var n=r(6444)
function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e
var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i}
return r.PropTypes=r,r}},9783(e,t,r){e.exports=r(3275)()},6444(e){"use strict"
e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3458(e,t,r){"use strict"
function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function o(e){return"object"==typeof e}function a(e){return"string"==typeof e}function s(e){return void 0===e}function l(e,t){t.split(" ").forEach(function(t){t.trim()&&e.classList.add(t)})}function c(e,t,r){return void 0===e&&(e=""),s(t)||s(t[e])?r?r+"-"+e:e:!1===t[e]?"":t[e]}function u(e,t){t.split(" ").forEach(function(t){t.trim()&&e.classList.remove(t)})}function d(e,t,r){r.forEach(function(r){-1===t.indexOf(r)&&e.classList.contains(r)&&u(e,r)}),t.forEach(function(t){e.classList.contains(t)||l(e,t)})}r.r(t)
var f=[]
function p(e){f.push(e)}function h(){for(var e;e=f.pop();)e()}var g=null
function m(e){void 0===e&&(e={})
var t=[]
return Array.prototype.push.apply(t,arguments),t.slice(1).forEach(function(t){if(t)for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}),e}function b(){if(g)return g
var e=document.createElement("div")
e.style.width="100%",e.style.height="200px"
var t=document.createElement("div")
m(t.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t)
var r=e.offsetWidth
t.style.overflow="scroll"
var n=e.offsetWidth
r===n&&(n=t.clientWidth),document.body.removeChild(t)
var i=r-n
return g={width:i,height:i}}var y,v=(y=0,function(){return++y}),w={},x=null
function k(e,t){var r
t===document?(r=document,t=document.documentElement):r=t.ownerDocument
var n=r.documentElement,i=E(t),o=function(e){var t=x
t&&e.contains(t)||((t=document.createElement("div")).setAttribute("data-tether-id",v()),m(t.style,{top:0,left:0,position:"absolute"}),e.appendChild(t),x=t)
var r=t.getAttribute("data-tether-id")
return s(w[r])&&(w[r]=E(t),p(function(){delete w[r]})),w[r]}(e)
return i.top-=o.top,i.left-=o.left,s(i.width)&&(i.width=document.body.scrollWidth-i.left-i.right),s(i.height)&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-n.clientTop,i.left=i.left-n.clientLeft,i.right=r.body.clientWidth-i.width-i.left,i.bottom=r.body.clientHeight-i.height-i.top,i}function E(e){var t=e.getBoundingClientRect(),r={}
for(var n in t)r[n]=t[n]
try{if(e.ownerDocument!==document){var i=e.ownerDocument.defaultView.frameElement
if(i){var o=E(i)
r.top+=o.top,r.bottom+=o.top,r.left+=o.left,r.right+=o.left}}}catch(e){}return r}var _={position:function(e){var t=this,r=e.top,n=e.left,i=this.cache("element-bounds",function(){return k(t.element)}),o=i.height,a=i.width,s=this.getTargetBounds(),l=r+o,u=n+a,f=[]
r<=s.bottom&&l>=s.top&&["left","right"].forEach(function(e){var t=s[e]
t!==n&&t!==u||f.push(e)}),n<=s.right&&u>=s.left&&["top","bottom"].forEach(function(e){var t=s[e]
t!==r&&t!==l||f.push(e)})
var h=this.options,g=h.classes,m=h.classPrefix
return this.all.push(c("abutted",g,m)),["left","top","right","bottom"].forEach(function(e){t.all.push(c("abutted",g,m)+"-"+e)}),f.length&&this.add.push(c("abutted",g,m)),f.forEach(function(e){t.add.push(c("abutted",g,m)+"-"+e)}),p(function(){!1!==t.options.addTargetClasses&&d(t.target,t.add,t.all),d(t.element,t.add,t.all)}),!0}},A=["left","top","right","bottom"],T={position:function(e){var t=this,r=e.top,n=e.left,i=e.targetAttachment
if(!this.options.constraints)return!0
var o=this.cache("element-bounds",function(){return k(t.bodyElement,t.element)}),l=o.height,u=o.width
if(0===u&&0===l&&!s(this.lastSize)){var f=this.lastSize
u=f.width,l=f.height}var h=this.cache("target-bounds",function(){return t.getTargetBounds()}),g=h.height,b=h.width,y=this.options,v=y.classes,w=y.classPrefix,x=function(e,t,r){var n=[c("pinned",e,t),c("out-of-bounds",e,t)]
return r.forEach(function(e){var t=e.outOfBoundsClass,r=e.pinnedClass
t&&n.push(t),r&&n.push(r)}),n.forEach(function(e){["left","top","right","bottom"].forEach(function(t){n.push(e+"-"+t)})}),n}(v,w,this.options.constraints),E=[],_=m({},i),T=m({},this.attachment)
return this.options.constraints.forEach(function(e){var o,d,f=e.to,p=e.attachment,h=e.pin
if(s(p)&&(p=""),p.indexOf(" ")>=0){var m=p.split(" ")
d=m[0],o=m[1]}else o=d=p
var y=function(e,t,r){if(!r)return null
if("scrollParent"===r?r=t.scrollParents[0]:"window"===r&&(r=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),r===document&&(r=r.documentElement),!s(r.nodeType)){var n=r,i=k(e,r),o=i,a=getComputedStyle(r)
if(r=[o.left,o.top,i.width+o.left,i.height+o.top],n.ownerDocument!==document){var l=n.ownerDocument.defaultView
r[0]+=l.pageXOffset,r[1]+=l.pageYOffset,r[2]+=l.pageXOffset,r[3]+=l.pageYOffset}A.forEach(function(e,t){"Top"===(e=e[0].toUpperCase()+e.substr(1))||"Left"===e?r[t]+=parseFloat(a["border"+e+"Width"]):r[t]-=parseFloat(a["border"+e+"Width"])})}return r}(t.bodyElement,t,f)
"target"!==d&&"both"!==d||(r<y[1]&&"top"===_.top&&(r+=g,_.top="bottom"),r+l>y[3]&&"bottom"===_.top&&(r-=g,_.top="top")),"together"===d&&(r=function(e,t,r,n,i,o){return"top"===e.top&&("bottom"===t.top&&o<r[1]?(o+=i,e.top="bottom",o+=n,t.top="top"):"top"===t.top&&o+n>r[3]&&o-(n-i)>=r[1]&&(o-=n-i,e.top="bottom",t.top="bottom")),"bottom"===e.top&&("top"===t.top&&o+n>r[3]?(o-=i,e.top="top",o-=n,t.top="bottom"):"bottom"===t.top&&o<r[1]&&o+(2*n-i)<=r[3]&&(o+=n-i,e.top="top",t.top="top")),"middle"===e.top&&(o+n>r[3]&&"top"===t.top?(o-=n,t.top="bottom"):o<r[1]&&"bottom"===t.top&&(o+=n,t.top="top")),o}(_,T,y,l,g,r)),"target"!==o&&"both"!==o||(n<y[0]&&"left"===_.left&&(n+=b,_.left="right"),n+u>y[2]&&"right"===_.left&&(n-=b,_.left="left")),"together"===o&&(n=function(e,t,r,n,i,o){return o<r[0]&&"left"===e.left?"right"===t.left?(o+=i,e.left="right",o+=n,t.left="left"):"left"===t.left&&(o+=i,e.left="right",o-=n,t.left="right"):o+n>r[2]&&"right"===e.left?"left"===t.left?(o-=i,e.left="left",o-=n,t.left="right"):"right"===t.left&&(o-=i,e.left="left",o+=n,t.left="left"):"center"===e.left&&(o+n>r[2]&&"left"===t.left?(o-=n,t.left="right"):o<r[0]&&"right"===t.left&&(o+=n,t.left="left")),o}(_,T,y,u,b,n)),"element"!==d&&"both"!==d||(r<y[1]&&"bottom"===T.top&&(r+=l,T.top="top"),r+l>y[3]&&"top"===T.top&&(r-=l,T.top="bottom")),"element"!==o&&"both"!==o||(n<y[0]&&("right"===T.left?(n+=u,T.left="left"):"center"===T.left&&(n+=u/2,T.left="left")),n+u>y[2]&&("left"===T.left?(n-=u,T.left="right"):"center"===T.left&&(n-=u/2,T.left="right"))),a(h)?h=h.split(",").map(function(e){return e.trim()}):!0===h&&(h=["top","left","right","bottom"])
var x,S=[],O=[]
n=function(e,t,r,n,i,o){return e<t[0]&&(n.indexOf("left")>=0?(e=t[0],i.push("left")):o.push("left")),e+r>t[2]&&(n.indexOf("right")>=0?(e=t[2]-r,i.push("right")):o.push("right")),e}(n,y,u,h=h||[],S,O),r=function(e,t,r,n,i,o){return e<t[1]&&(n.indexOf("top")>=0?(e=t[1],i.push("top")):o.push("top")),e+r>t[3]&&(n.indexOf("bottom")>=0?(e=t[3]-r,i.push("bottom")):o.push("bottom")),e}(r,y,l,h,S,O),S.length&&(x=s(t.options.pinnedClass)?c("pinned",v,w):t.options.pinnedClass,E.push(x),S.forEach(function(e){E.push(x+"-"+e)})),function(e,t,r,n,i){var o
e.length&&(o=s(i)?c("out-of-bounds",r,n):i,t.push(o),e.forEach(function(e){t.push(o+"-"+e)}))}(O,E,v,w,t.options.outOfBoundsClass),(S.indexOf("left")>=0||S.indexOf("right")>=0)&&(T.left=_.left=!1),(S.indexOf("top")>=0||S.indexOf("bottom")>=0)&&(T.top=_.top=!1),_.top===i.top&&_.left===i.left&&T.top===t.attachment.top&&T.left===t.attachment.left||(t.updateAttachClasses(T,_),t.trigger("update",{attachment:T,targetAttachment:_}))}),p(function(){!1!==t.options.addTargetClasses&&d(t.target,E,x),d(t.element,E,x)}),{top:r,left:n}}},S={position:function(e){var t=e.top,r=e.left
if(this.options.shift){var n,i,o=this.options.shift
if("function"==typeof o&&(o=o.call(this,{top:t,left:r})),a(o)){(o=o.split(" "))[1]=o[1]||o[0]
var s=o
n=s[0],i=s[1],n=parseFloat(n,10),i=parseFloat(i,10)}else{var l=[o.top,o.left]
n=l[0],i=l[1]}return{top:t+=n,left:r+=i}}}},O=function(){function e(){}var t=e.prototype
return t.on=function(e,t,r,n){return void 0===n&&(n=!1),s(this.bindings)&&(this.bindings={}),s(this.bindings[e])&&(this.bindings[e]=[]),this.bindings[e].push({handler:t,ctx:r,once:n}),this},t.once=function(e,t,r){return this.on(e,t,r,!0)},t.off=function(e,t){var r=this
return s(this.bindings)||s(this.bindings[e])||(s(t)?delete this.bindings[e]:this.bindings[e].forEach(function(n,i){n.handler===t&&r.bindings[e].splice(i,1)})),this},t.trigger=function(e){for(var t=this,r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i]
return!s(this.bindings)&&this.bindings[e]&&this.bindings[e].forEach(function(r,i){var o=r.ctx,a=r.handler,s=r.once,l=o||t
a.apply(l,n),s&&t.bindings[e].splice(i,1)}),this},e}(),N={center:"center",left:"right",right:"left"},C={middle:"middle",top:"bottom",bottom:"top"},D={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"}
function L(){for(var e={top:0,left:0},t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return r.forEach(function(t){var r=t.top,n=t.left
a(r)&&(r=parseFloat(r)),a(n)&&(n=parseFloat(n)),e.top+=r,e.left+=n}),e}function q(e){var t=e.left,r=e.top
return s(D[e.left])||(t=D[e.left]),s(D[e.top])||(r=D[e.top]),{left:t,top:r}}function R(e,t){return a(e.left)&&-1!==e.left.indexOf("%")&&(e.left=parseFloat(e.left)/100*t.width),a(e.top)&&-1!==e.top.indexOf("%")&&(e.top=parseFloat(e.top)/100*t.height),e}function P(e){var t=e.split(" ")
return{top:t[0],left:t[1]}}function j(e){return e.offsetParent||document.documentElement}var I={modules:[T,_,S]}
function M(e){var t=e.ownerDocument
return(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)===e}function B(e,t,r){return void 0===r&&(r=1),e+r>=t&&t>=e-r}var F,z,U,H,$=function(){if(s(document))return""
for(var e=document.createElement("div"),t=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],r=0;r<t.length;++r){var n=t[r]
if(void 0!==e.style[n])return n}}(),V=[],W=function(){V.forEach(function(e){e.position(!1)}),h()}
function G(){return performance.now()}F=null,z=null,U=null,H=function e(){if(!s(z)&&z>16)return z=Math.min(z-16,250),void(U=setTimeout(e,250))
!s(F)&&G()-F<10||(null!=U&&(clearTimeout(U),U=null),F=G(),W(),z=G()-F)},s(window)||s(window.addEventListener)||["resize","scroll","touchmove"].forEach(function(e){window.addEventListener(e,H)})
var Q=function(e){var t,r
function f(t){var r
return(r=e.call(this)||this).position=r.position.bind(i(r)),V.push(i(r)),r.history=[],r.setOptions(t,!1),I.modules.forEach(function(e){s(e.initialize)||e.initialize.call(i(r))}),r.position(),r}r=e,(t=f).prototype=Object.create(r.prototype),t.prototype.constructor=t,n(t,r)
var g=f.prototype
return g.setOptions=function(e,t){var r=this
void 0===t&&(t=!0)
var n={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether",bodyElement:document.body}
this.options=m(n,e)
var i=this.options,o=i.element,l=i.target,c=i.targetModifier,u=i.bodyElement
if(this.element=o,this.target=l,this.targetModifier=c,"string"==typeof u&&(u=document.querySelector(u)),this.bodyElement=u,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(e){if(s(r[e]))throw new Error("Tether Error: Both element and target must be defined")
s(r[e].jquery)?a(r[e])&&(r[e]=document.querySelector(r[e])):r[e]=r[e][0]}),this._addClasses(),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment")
this.targetAttachment=P(this.options.targetAttachment),this.attachment=P(this.options.attachment),this.offset=P(this.options.offset),this.targetOffset=P(this.options.targetOffset),s(this.scrollParents)||this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=function(e){var t=(getComputedStyle(e)||{}).position,r=[]
if("fixed"===t)return[e]
for(var n=e;(n=n.parentNode)&&n&&1===n.nodeType;){var i=void 0
try{i=getComputedStyle(n)}catch(e){}if(s(i)||null===i)return r.push(n),r
var o=i,a=o.overflow,l=o.overflowX,c=o.overflowY;/(auto|scroll|overlay)/.test(a+c+l)&&("absolute"!==t||["relative","absolute","fixed"].indexOf(i.position)>=0)&&r.push(n)}return r.push(e.ownerDocument.body),e.ownerDocument!==document&&r.push(e.ownerDocument.defaultView),r}(this.target),!1!==this.options.enabled&&this.enable(t)},g.getTargetBounds=function(){return s(this.targetModifier)?k(this.bodyElement,this.target):"visible"===this.targetModifier?function(e,t){if(t===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}
var r=k(e,t),n={height:r.height,width:r.width,top:r.top,left:r.left}
return n.height=Math.min(n.height,r.height-(pageYOffset-r.top)),n.height=Math.min(n.height,r.height-(r.top+r.height-(pageYOffset+innerHeight))),n.height=Math.min(innerHeight,n.height),n.height-=2,n.width=Math.min(n.width,r.width-(pageXOffset-r.left)),n.width=Math.min(n.width,r.width-(r.left+r.width-(pageXOffset+innerWidth))),n.width=Math.min(innerWidth,n.width),n.width-=2,n.top<pageYOffset&&(n.top=pageYOffset),n.left<pageXOffset&&(n.left=pageXOffset),n}(this.bodyElement,this.target):"scroll-handle"===this.targetModifier?function(e,t){var r,n=t.scrollTop,i=t===document.body
i?(t=document.documentElement,r={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):r=k(e,t)
var o=getComputedStyle(t),a=0;(t.scrollWidth>t.clientWidth||[o.overflow,o.overflowX].indexOf("scroll")>=0||!i)&&(a=15)
var s=r.height-parseFloat(o.borderTopWidth)-parseFloat(o.borderBottomWidth)-a,l={width:15,height:.975*s*(s/t.scrollHeight),left:r.left+r.width-parseFloat(o.borderLeftWidth)-15},c=0
s<408&&i&&(c=-11e-5*Math.pow(s,2)-.00727*s+22.58),i||(l.height=Math.max(l.height,24))
var u=n/(t.scrollHeight-s)
return l.top=u*(s-l.height-c)+r.top+parseFloat(o.borderTopWidth),i&&(l.height=Math.max(l.height,24)),l}(this.bodyElement,this.target):void 0},g.clearCache=function(){this._cache={}},g.cache=function(e,t){return s(this._cache)&&(this._cache={}),s(this._cache[e])&&(this._cache[e]=t.call(this)),this._cache[e]},g.enable=function(e){var t=this
void 0===e&&(e=!0)
var r=this.options,n=r.classes,i=r.classPrefix
!1!==this.options.addTargetClasses&&l(this.target,c("enabled",n,i)),l(this.element,c("enabled",n,i)),this.enabled=!0,this.scrollParents.forEach(function(e){e!==t.target.ownerDocument&&e.addEventListener("scroll",t.position)}),e&&this.position()},g.disable=function(){var e=this,t=this.options,r=t.classes,n=t.classPrefix
u(this.target,c("enabled",r,n)),u(this.element,c("enabled",r,n)),this.enabled=!1,s(this.scrollParents)||this.scrollParents.forEach(function(t){t&&t.removeEventListener&&t.removeEventListener("scroll",e.position)})},g.destroy=function(){var e,t=this
this.disable(),this._removeClasses(),V.forEach(function(e,r){e===t&&V.splice(r,1)}),0===V.length&&(e=this.bodyElement,x&&e.removeChild(x),x=null)},g.updateAttachClasses=function(e,t){var r=this
e=e||this.attachment,t=t||this.targetAttachment
var n=this.options,i=n.classes,o=n.classPrefix
!s(this._addAttachClasses)&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),s(this._addAttachClasses)&&(this._addAttachClasses=[]),this.add=this._addAttachClasses,e.top&&this.add.push(c("element-attached",i,o)+"-"+e.top),e.left&&this.add.push(c("element-attached",i,o)+"-"+e.left),t.top&&this.add.push(c("target-attached",i,o)+"-"+t.top),t.left&&this.add.push(c("target-attached",i,o)+"-"+t.left),this.all=[],["left","top","bottom","right","middle","center"].forEach(function(e){r.all.push(c("element-attached",i,o)+"-"+e),r.all.push(c("target-attached",i,o)+"-"+e)}),p(function(){s(r._addAttachClasses)||(d(r.element,r._addAttachClasses,r.all),!1!==r.options.addTargetClasses&&d(r.target,r._addAttachClasses,r.all),delete r._addAttachClasses)})},g.position=function(e){var t=this
if(void 0===e&&(e=!0),this.enabled){this.clearCache()
var r=function(e,t){var r=e.left,n=e.top
return"auto"===r&&(r=N[t.left]),"auto"===n&&(n=C[t.top]),{left:r,top:n}}(this.targetAttachment,this.attachment)
this.updateAttachClasses(this.attachment,r)
var n=this.cache("element-bounds",function(){return k(t.bodyElement,t.element)}),i=n.width,a=n.height
if(0!==i||0!==a||s(this.lastSize))this.lastSize={width:i,height:a}
else{var l=this.lastSize
i=l.width,a=l.height}var c=this.cache("target-bounds",function(){return t.getTargetBounds()}),u=c,d=R(q(this.attachment),{width:i,height:a}),f=R(q(r),u),p=R(this.offset,{width:i,height:a}),g=R(this.targetOffset,u)
d=L(d,p),f=L(f,g)
for(var m=c.left+f.left-d.left,y=c.top+f.top-d.top,v=0;v<I.modules.length;++v){var w=I.modules[v].position.call(this,{left:m,top:y,targetAttachment:r,targetPos:c,elementPos:n,offset:d,targetOffset:f,manualOffset:p,manualTargetOffset:g,scrollbarSize:x,attachment:this.attachment})
if(!1===w)return!1
!s(w)&&o(w)&&(y=w.top,m=w.left)}var x,E={page:{top:y,left:m},viewport:{top:y-pageYOffset,bottom:pageYOffset-y-a+innerHeight,left:m-pageXOffset,right:pageXOffset-m-i+innerWidth}},_=this.target.ownerDocument,A=_.defaultView
if(A.innerHeight>_.documentElement.clientHeight&&(x=this.cache("scrollbar-size",b),E.viewport.bottom-=x.height),A.innerWidth>_.documentElement.clientWidth&&(x=this.cache("scrollbar-size",b),E.viewport.right-=x.width),-1!==["","static"].indexOf(_.body.style.position)&&-1!==["","static"].indexOf(_.body.parentElement.style.position)||(E.page.bottom=_.body.scrollHeight-y-a,E.page.right=_.body.scrollWidth-m-i),!s(this.options.optimizations)&&!1!==this.options.optimizations.moveElement&&s(this.targetModifier)){var T=this.cache("target-offsetparent",function(){return j(t.target)}),S=this.cache("target-offsetparent-bounds",function(){return k(t.bodyElement,T)}),O=getComputedStyle(T),D=S,P={}
if(["Top","Left","Bottom","Right"].forEach(function(e){P[e.toLowerCase()]=parseFloat(O["border"+e+"Width"])}),S.right=_.body.scrollWidth-S.left-D.width+P.right,S.bottom=_.body.scrollHeight-S.top-D.height+P.bottom,E.page.top>=S.top+P.top&&E.page.bottom>=S.bottom&&E.page.left>=S.left+P.left&&E.page.right>=S.right){var M=T.scrollLeft,B=T.scrollTop
E.offset={top:E.page.top-S.top+B-P.top,left:E.page.left-S.left+M-P.left}}}return this.move(E),this.history.unshift(E),this.history.length>3&&this.history.pop(),e&&h(),!0}},g.move=function(e){var t=this
if(!s(this.element.parentNode)){var r={}
for(var n in e)for(var i in r[n]={},e[n]){for(var o=!1,a=0;a<this.history.length;++a){var l=this.history[a]
if(!s(l[n])&&!B(l[n][i],e[n][i])){o=!0
break}}o||(r[n][i]=!0)}var c={top:"",left:"",right:"",bottom:""},u=function(e,r){var n,i
!1!==(s(t.options.optimizations)?null:t.options.optimizations.gpu)?(e.top?(c.top=0,n=r.top):(c.bottom=0,n=-r.bottom),e.left?(c.left=0,i=r.left):(c.right=0,i=-r.right),"number"==typeof window.devicePixelRatio&&devicePixelRatio%1==0&&(i=Math.round(i*devicePixelRatio)/devicePixelRatio,n=Math.round(n*devicePixelRatio)/devicePixelRatio),c[$]="translateX("+i+"px) translateY("+n+"px)","msTransform"!==$&&(c[$]+=" translateZ(0)")):(e.top?c.top=r.top+"px":c.bottom=r.bottom+"px",e.left?c.left=r.left+"px":c.right=r.right+"px")},d=!0
!s(this.options.optimizations)&&!1===this.options.optimizations.allowPositionFixed&&(d=!1)
var f=!1
if((r.page.top||r.page.bottom)&&(r.page.left||r.page.right))c.position="absolute",u(r.page,e.page)
else if(d&&(r.viewport.top||r.viewport.bottom)&&(r.viewport.left||r.viewport.right))c.position="fixed",u(r.viewport,e.viewport)
else if(!s(r.offset)&&r.offset.top&&r.offset.left){c.position="absolute"
var h=this.cache("target-offsetparent",function(){return j(t.target)})
j(this.element)!==h&&p(function(){t.element.parentNode.removeChild(t.element),h.appendChild(t.element)}),u(r.offset,e.offset),f=!0}else c.position="absolute",u({top:!0,left:!0},e.page)
if(!f)if(this.options.bodyElement)this.element.parentNode!==this.options.bodyElement&&this.options.bodyElement.appendChild(this.element)
else{for(var g=!0,b=this.element.parentNode;b&&1===b.nodeType&&"BODY"!==b.tagName&&!M(b);){if("static"!==getComputedStyle(b).position){g=!1
break}b=b.parentNode}g||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var y={},v=!1
for(var w in c){var x=c[w]
this.element.style[w]!==x&&(v=!0,y[w]=x)}v&&p(function(){m(t.element.style,y),t.trigger("repositioned")})}},g._addClasses=function(){var e=this.options,t=e.classes,r=e.classPrefix
l(this.element,c("element",t,r)),!1!==this.options.addTargetClasses&&l(this.target,c("target",t,r))},g._removeClasses=function(){var e=this,t=this.options,r=t.classes,n=t.classPrefix
u(this.element,c("element",r,n)),!1!==this.options.addTargetClasses&&u(this.target,c("target",r,n)),this.all.forEach(function(t){e.element.classList.remove(t),e.target.classList.remove(t)})},f}(O)
Q.modules=[],I.position=W
var Z=m(Q,I)
Z.modules.push({initialize:function(){var e=this,t=this.options,r=t.classes,n=t.classPrefix
this.markers={},["target","element"].forEach(function(t){var i=document.createElement("div")
i.className=c(t+"-marker",r,n)
var o=document.createElement("div")
o.className=c("marker-dot",r,n),i.appendChild(o),e[t].appendChild(i),e.markers[t]={dot:o,el:i}})},position:function(e){var t={element:e.manualOffset,target:e.manualTargetOffset}
for(var r in t){var n=t[r]
for(var i in n){var o,s=n[i];(!a(s)||-1===s.indexOf("%")&&-1===s.indexOf("px"))&&(s+="px"),this.markers[r]&&(null==(o=this.markers[r].dot)?void 0:o.style[i])!==s&&(this.markers[r].dot.style[i]=s)}}return!0}})
const K=Z
r.d(t,["default",0,K])},4492(e,t,r){"use strict"
r.r(t),r.d(t,{cached:()=>g,dedupeTracked:()=>m,localCopy:()=>p,trackedReset:()=>h})
var n,i=r(1603),o=r(4471),a=r(473),s=r(4217),l=r(1055)
function c(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=new WeakMap
class d{constructor(){var e,t
c(this,"prevRemote",void 0),c(this,"peek",void 0),e=u,t=void(0,l.i)(this,"value"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,e),e.set(this,t)}}function f(e,t,r){let n=t.get(e)
return void 0===n&&(n=new d,t.set(e,n),n.value=n.peek="function"==typeof r?r.call(e):r),n}function p(e,t,r=(e,t)=>e===t){(0,i.assert)(`@localCopy() must be given a memo path as its first argument, received \`${String(e)}\``,"string"==typeof e)
let n=new WeakMap
return()=>{let i=t=>(0,o.get)(t,e)
return{get(){let e=f(this,n,t),{prevRemote:o}=e,a=i(this)
return r(o,a)||(e.value=e.prevRemote=a),e.value},set(e){if(!n.has(this)){let r=f(this,n,t)
return r.prevRemote=i(this),void(r.value=e)}f(this,n,t).value=e}}}}function h(e){(0,i.assert)(`@trackedReset() must be given a memo path, a memo function, or config object with a memo path or function as its first argument, received \`${String(e)}\``,"string"==typeof e||"function"==typeof e||"object"==typeof e&&null!==e&&void 0!==e.memo)
let t=new WeakMap
return(r,n,i)=>{let a,s,l=i.initializer??(()=>{})
"object"==typeof e?(a=e.memo,s=e.update??l):(a=e,s=l)
let c="function"==typeof a?(e,t)=>a.call(e,e,n,t):e=>(0,o.get)(e,a)
return{get(){let e=f(this,t,l),{prevRemote:r}=e,i=c(this,r)
return i!==r&&(e.prevRemote=i,e.value=e.peek=s.call(this,this,n,e.peek)),e.value},set(e){f(this,t,l).value=e}}}}function g(e,t,r){(0,i.deprecate)("Importing @cached decorator from tracked-toolbox is deprecated. Please replace it with `import { cached } from '@glimmer/tracking';`",!1,{id:"tracked-toolbox::cached-decorator",for:"tracked-toolbox",since:{available:"2.1.0",enabled:"2.1.0"},until:"3.0.0"}),(0,i.assert)("@cached can only be used on getters",r&&r.get)
let{get:n,set:o}=r,a=new WeakMap
return{get(){let e=a.get(this)
return void 0===e&&(e=(0,s.createCache)(n.bind(this)),a.set(this,e)),(0,s.getValue)(e)},set:o}}function m(){let e
const t=function(t,r,n){let{initializer:i}=n,{get:o,set:s}=(0,a.tracked)(t,r,n),l=new WeakMap
return{get(){if(!l.has(this)){let e=i?.call(this)
l.set(this,e),s.call(this,e)}return o.call(this)},set(t){l.has(this)&&e(t,l.get(this))||(l.set(this,t),s.call(this,t))}}}
return 3===arguments.length?(e=(e,t)=>e===t,t(...arguments)):1===arguments.length&&"function"==typeof arguments[0]?(e=arguments[0],t):void(0,i.assert)(`@dedupeTracked() can either be invoked without arguments or with one comparator function, received \`${String(arguments)}\``,!1)}n=d,(0,l.g)(n.prototype,"value",[a.tracked])},9335(e){function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(r=>{const n=e[r],i=typeof n
"object"!==i&&"function"!==i||Object.isFrozen(n)||t(n)}),e}class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function i(e,...t){const r=Object.create(null)
for(const n in e)r[n]=e[n]
return t.forEach(function(e){for(const t in e)r[t]=e[t]}),r}const o=e=>!!e.scope
class a{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=n(e)}openNode(e){if(!o(e))return
const t=((e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-")
if(e.includes(".")){const r=e.split(".")
return[`${t}${r.shift()}`,...r.map((e,t)=>`${e}${"_".repeat(t+1)}`)].join(" ")}return`${t}${e}`})(e.scope,{prefix:this.classPrefix})
this.span(t)}closeNode(e){o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const s=(e={})=>{const t={children:[]}
return Object.assign(t,e),t}
class l{constructor(){this.rootNode=s(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=s({scope:e})
this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{l._collapse(e)}))}}class c extends l{constructor(e){super(),this.options=e}addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){const r=e.root
t&&(r.scope=`language:${t}`),this.add(r)}toHTML(){return new a(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function u(e){return e?"string"==typeof e?e:e.source:null}function d(e){return h("(?=",e,")")}function f(e){return h("(?:",e,")*")}function p(e){return h("(?:",e,")?")}function h(...e){return e.map(e=>u(e)).join("")}function g(...e){const t=function(e){const t=e[e.length-1]
return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}(e)
return"("+(t.capture?"":"?:")+e.map(e=>u(e)).join("|")+")"}function m(e){return new RegExp(e.toString()+"|").exec("").length-1}const b=new RegExp(g(/\[(?:[^\\\]]|\\.)*\]/,/\(\?<(?![=!])[^>]+>/,/\(\?'[^']+'/,/\(\??/,/\\([1-9][0-9]*)/,/\\./))
function y(e,{joinWith:t}){let r=0
return e.map(e=>{r+=1
const t=r
let n=u(e),i=""
for(;n.length>0;){const e=b.exec(n)
if(!e){i+=n
break}i+=n.substring(0,e.index),n=n.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+String(Number(e[1])+t):(i+=e[0],("("===e[0]||/^\(\?[<']/.test(e[0]))&&r++)}return i}).map(e=>`(${e})`).join(t)}const v="[a-zA-Z]\\w*",w="[a-zA-Z_]\\w*",x="\\b\\d+(\\.\\d+)?",k="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",E="\\b(0b[01]+)",_={begin:"\\\\[\\s\\S]",relevance:0},A={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[_]},T={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[_]},S=function(e,t,r={}){const n=i({scope:"comment",begin:e,end:t,contains:[]},r)
n.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
const o=g("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
return n.contains.push({begin:h(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),n},O=S("//","$"),N=S("/\\*","\\*/"),C=S("#","$"),D={scope:"number",begin:x,relevance:0},L={scope:"number",begin:k,relevance:0},q={scope:"number",begin:E,relevance:0},R={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[_,{begin:/\[/,end:/\]/,relevance:0,contains:[_]}]},P={scope:"title",begin:v,relevance:0},j={scope:"title",begin:w,relevance:0},I={begin:"\\.\\s*"+w,relevance:0}
var M=Object.freeze({__proto__:null,APOS_STRING_MODE:A,BACKSLASH_ESCAPE:_,BINARY_NUMBER_MODE:q,BINARY_NUMBER_RE:E,COMMENT:S,C_BLOCK_COMMENT_MODE:N,C_LINE_COMMENT_MODE:O,C_NUMBER_MODE:L,C_NUMBER_RE:k,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})},HASH_COMMENT_MODE:C,IDENT_RE:v,MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:I,NUMBER_MODE:D,NUMBER_RE:x,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},QUOTE_STRING_MODE:T,REGEXP_MODE:R,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//
return e.binary&&(e.begin=h(t,/.*\b/,e.binary,/\b.*/)),i({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},TITLE_MODE:P,UNDERSCORE_IDENT_RE:w,UNDERSCORE_TITLE_MODE:j})
function B(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function F(e,t){void 0!==e.className&&(e.scope=e.className,delete e.className)}function z(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=B,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function U(e,t){Array.isArray(e.illegal)&&(e.illegal=g(...e.illegal))}function H(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match")
e.begin=e.match,delete e.match}}function $(e,t){void 0===e.relevance&&(e.relevance=1)}const V=(e,t)=>{if(!e.beforeMatch)return
if(e.starts)throw new Error("beforeMatch cannot be used with starts")
const r=Object.assign({},e)
Object.keys(e).forEach(t=>{delete e[t]}),e.keywords=r.keywords,e.begin=h(r.beforeMatch,d(r.begin)),e.starts={relevance:0,contains:[Object.assign(r,{endsParent:!0})]},e.relevance=0,delete r.beforeMatch},W=["of","and","for","in","not","or","if","then","parent","list","value"]
function G(e,t,r="keyword"){const n=Object.create(null)
return"string"==typeof e?i(r,e.split(" ")):Array.isArray(e)?i(r,e):Object.keys(e).forEach(function(r){Object.assign(n,G(e[r],t,r))}),n
function i(e,r){t&&(r=r.map(e=>e.toLowerCase())),r.forEach(function(t){const r=t.split("|")
n[r[0]]=[e,Q(r[0],r[1])]})}}function Q(e,t){return t?Number(t):function(e){return W.includes(e.toLowerCase())}(e)?0:1}const Z={},K=e=>{console.error(e)},Y=(e,...t)=>{console.log(`WARN: ${e}`,...t)},X=(e,t)=>{Z[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Z[`${e}/${t}`]=!0)},J=new Error
function ee(e,t,{key:r}){let n=0
const i=e[r],o={},a={}
for(let s=1;s<=t.length;s++)a[s+n]=i[s],o[s+n]=!0,n+=m(t[s-1])
e[r]=a,e[r]._emit=o,e[r]._multi=!0}function te(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),J
if("object"!=typeof e.beginScope||null===e.beginScope)throw K("beginScope must be object"),J
ee(e,e.begin,{key:"beginScope"}),e.begin=y(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"),J
if("object"!=typeof e.endScope||null===e.endScope)throw K("endScope must be object"),J
ee(e,e.end,{key:"endScope"}),e.end=y(e.end,{joinWith:""})}}(e)}function re(e){function t(t,r){return new RegExp(u(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=m(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
const e=this.regexes.map(e=>e[1])
this.matcherRe=t(y(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
const t=this.matcherRe.exec(e)
if(!t)return null
const r=t.findIndex((e,t)=>t>0&&void 0!==e),n=this.matchIndexes[r]
return t.splice(0,r),Object.assign(t,n)}}class n{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e]
const t=new r
return this.rules.slice(e).forEach(([e,r])=>t.addRule(e,r)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex)
t.lastIndex=this.lastIndex
let r=t.exec(e)
if(this.resumingScanAtSamePosition())if(r&&r.index===this.lastIndex);else{const t=this.getMatcher(0)
t.lastIndex=this.lastIndex+1,r=t.exec(e)}return r&&(this.regexIndex+=r.position+1,this.regexIndex===this.count&&this.considerAll()),r}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
return e.classNameAliases=i(e.classNameAliases||{}),function r(o,a){const s=o
if(o.isCompiled)return s;[F,H,te,V].forEach(e=>e(o,a)),e.compilerExtensions.forEach(e=>e(o,a)),o.__beforeBegin=null,[z,U,$].forEach(e=>e(o,a)),o.isCompiled=!0
let l=null
return"object"==typeof o.keywords&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),l=o.keywords.$pattern,delete o.keywords.$pattern),l=l||/\w+/,o.keywords&&(o.keywords=G(o.keywords,e.case_insensitive)),s.keywordPatternRe=t(l,!0),a&&(o.begin||(o.begin=/\B|\b/),s.beginRe=t(s.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(s.endRe=t(s.end)),s.terminatorEnd=u(s.end)||"",o.endsWithParent&&a.terminatorEnd&&(s.terminatorEnd+=(o.end?"|":"")+a.terminatorEnd)),o.illegal&&(s.illegalRe=t(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return i(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:ne(e)?i(e,{starts:e.starts?i(e.starts):null}):Object.isFrozen(e)?i(e):e}("self"===e?o:e)})),o.contains.forEach(function(e){r(e,s)}),o.starts&&r(o.starts,a),s.matcher=function(e){const t=new n
return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(s),s}(e)}function ne(e){return!!e&&(e.endsWithParent||ne(e.starts))}class ie extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const oe=n,ae=i,se=Symbol("nomatch"),le=function(e){const n=Object.create(null),i=Object.create(null),o=[]
let a=!0
const s="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]}
let u={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:c}
function m(e){return u.noHighlightRe.test(e)}function b(e,t,r){let n="",i=""
"object"==typeof t?(n=e,r=t.ignoreIllegals,i=t.language):(X("10.7.0","highlight(lang, code, ...args) has been deprecated."),X("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),i=e,n=t),void 0===r&&(r=!0)
const o={code:n,language:i}
T("before:highlight",o)
const a=o.result?o.result:y(o.language,o.code,r)
return a.code=o.code,T("after:highlight",a),a}function y(e,t,i,o){const l=Object.create(null)
function c(e,t){return e.keywords[t]}function d(){if(!T.keywords)return void O.addText(N)
let e=0
T.keywordPatternRe.lastIndex=0
let t=T.keywordPatternRe.exec(N),r=""
for(;t;){r+=N.substring(e,t.index)
const n=k.case_insensitive?t[0].toLowerCase():t[0],i=c(T,n)
if(i){const[e,o]=i
if(O.addText(r),r="",l[n]=(l[n]||0)+1,l[n]<=7&&(C+=o),e.startsWith("_"))r+=t[0]
else{const r=k.classNameAliases[e]||e
p(t[0],r)}}else r+=t[0]
e=T.keywordPatternRe.lastIndex,t=T.keywordPatternRe.exec(N)}r+=N.substring(e),O.addText(r)}function f(){null!=T.subLanguage?function(){if(""===N)return
let e=null
if("string"==typeof T.subLanguage){if(!n[T.subLanguage])return void O.addText(N)
e=y(T.subLanguage,N,!0,S[T.subLanguage]),S[T.subLanguage]=e._top}else e=v(N,T.subLanguage.length?T.subLanguage:null)
T.relevance>0&&(C+=e.relevance),O.__addSublanguage(e._emitter,e.language)}():d(),N=""}function p(e,t){""!==e&&(O.startScope(t),O.addText(e),O.endScope())}function h(e,t){let r=1
const n=t.length-1
for(;r<=n;){if(!e._emit[r]){r++
continue}const n=k.classNameAliases[e[r]]||e[r],i=t[r]
n?p(i,n):(N=i,d(),N=""),r++}}function g(e,t){return e.scope&&"string"==typeof e.scope&&O.openNode(k.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(p(N,k.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),N=""):e.beginScope._multi&&(h(e.beginScope,t),N="")),T=Object.create(e,{parent:{value:T}}),T}function m(e,t,n){let i=function(e,t){const r=e&&e.exec(t)
return r&&0===r.index}(e.endRe,n)
if(i){if(e["on:end"]){const n=new r(e)
e["on:end"](t,n),n.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent
return e}}if(e.endsWithParent)return m(e.parent,t,n)}function b(e){return 0===T.matcher.regexIndex?(N+=e[0],1):(q=!0,0)}let w={}
function x(n,o){const s=o&&o[0]
if(N+=n,null==s)return f(),0
if("begin"===w.type&&"end"===o.type&&w.index===o.index&&""===s){if(N+=t.slice(o.index,o.index+1),!a){const t=new Error(`0 width match regex (${e})`)
throw t.languageName=e,t.badRule=w.rule,t}return 1}if(w=o,"begin"===o.type)return function(e){const t=e[0],n=e.rule,i=new r(n),o=[n.__beforeBegin,n["on:begin"]]
for(const r of o)if(r&&(r(e,i),i.isMatchIgnored))return b(t)
return n.skip?N+=t:(n.excludeBegin&&(N+=t),f(),n.returnBegin||n.excludeBegin||(N=t)),g(n,e),n.returnBegin?0:t.length}(o)
if("illegal"===o.type&&!i){const e=new Error('Illegal lexeme "'+s+'" for mode "'+(T.scope||"<unnamed>")+'"')
throw e.mode=T,e}if("end"===o.type){const e=function(e){const r=e[0],n=t.substring(e.index),i=m(T,e,n)
if(!i)return se
const o=T
T.endScope&&T.endScope._wrap?(f(),p(r,T.endScope._wrap)):T.endScope&&T.endScope._multi?(f(),h(T.endScope,e)):o.skip?N+=r:(o.returnEnd||o.excludeEnd||(N+=r),f(),o.excludeEnd&&(N=r))
do{T.scope&&O.closeNode(),T.skip||T.subLanguage||(C+=T.relevance),T=T.parent}while(T!==i.parent)
return i.starts&&g(i.starts,e),o.returnEnd?0:r.length}(o)
if(e!==se)return e}if("illegal"===o.type&&""===s)return o.index===t.length||(N+="\n"),1
if(L>1e5&&L>3*o.index)throw new Error("potential infinite loop, way more iterations than matches")
return N+=s,s.length}const k=E(e)
if(!k)throw K(s.replace("{}",e)),new Error('Unknown language: "'+e+'"')
const _=re(k)
let A="",T=o||_
const S={},O=new u.__emitter(u)
!function(){const e=[]
for(let t=T;t!==k;t=t.parent)t.scope&&e.unshift(t.scope)
e.forEach(e=>O.openNode(e))}()
let N="",C=0,D=0,L=0,q=!1
try{if(k.__emitTokens)k.__emitTokens(t,O)
else{for(T.matcher.considerAll();;){L++,q?q=!1:T.matcher.considerAll(),T.matcher.lastIndex=D
const e=T.matcher.exec(t)
if(!e)break
const r=x(t.substring(D,e.index),e)
D=e.index+r}x(t.substring(D))}return O.finalize(),A=O.toHTML(),{language:e,value:A,relevance:C,illegal:!1,_emitter:O,_top:T}}catch(r){if(r.message&&r.message.includes("Illegal"))return{language:e,value:oe(t),illegal:!0,relevance:0,_illegalBy:{message:r.message,index:D,context:t.slice(D-100,D+100),mode:r.mode,resultSoFar:A},_emitter:O}
if(a)return{language:e,value:oe(t),illegal:!1,relevance:0,errorRaised:r,_emitter:O,_top:T}
throw r}}function v(e,t){t=t||u.languages||Object.keys(n)
const r=function(e){const t={value:oe(e),illegal:!1,relevance:0,_top:l,_emitter:new u.__emitter(u)}
return t._emitter.addText(e),t}(e),i=t.filter(E).filter(A).map(t=>y(t,e,!1))
i.unshift(r)
const o=i.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance
if(e.language&&t.language){if(E(e.language).supersetOf===t.language)return 1
if(E(t.language).supersetOf===e.language)return-1}return 0}),[a,s]=o,c=a
return c.secondBest=s,c}function w(e){let t=null
const r=function(e){let t=e.className+" "
t+=e.parentNode?e.parentNode.className:""
const r=u.languageDetectRe.exec(t)
if(r){const t=E(r[1])
return t||(Y(s.replace("{}",r[1])),Y("Falling back to no-highlight mode for this block.",e)),t?r[1]:"no-highlight"}return t.split(/\s+/).find(e=>m(e)||E(e))}(e)
if(m(r))return
if(T("before:highlightElement",{el:e,language:r}),e.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e)
if(e.children.length>0&&(u.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),u.throwUnescapedHTML))throw new ie("One of your code blocks includes unescaped HTML.",e.innerHTML)
t=e
const n=t.textContent,o=r?b(n,{language:r,ignoreIllegals:!0}):v(n)
e.innerHTML=o.value,e.dataset.highlighted="yes",function(e,t,r){const n=t&&i[t]||r
e.classList.add("hljs"),e.classList.add(`language-${n}`)}(e,r,o.language),e.result={language:o.language,re:o.relevance,relevance:o.relevance},o.secondBest&&(e.secondBest={language:o.secondBest.language,relevance:o.secondBest.relevance}),T("after:highlightElement",{el:e,result:o,text:n})}let x=!1
function k(){if("loading"===document.readyState)return x||window.addEventListener("DOMContentLoaded",function(){k()},!1),void(x=!0)
document.querySelectorAll(u.cssSelector).forEach(w)}function E(e){return e=(e||"").toLowerCase(),n[e]||n[i[e]]}function _(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach(e=>{i[e.toLowerCase()]=t})}function A(e){const t=E(e)
return t&&!t.disableAutodetect}function T(e,t){const r=e
o.forEach(function(e){e[r]&&e[r](t)})}Object.assign(e,{highlight:b,highlightAuto:v,highlightAll:k,highlightElement:w,highlightBlock:function(e){return X("10.7.0","highlightBlock will be removed entirely in v12.0"),X("10.7.0","Please use highlightElement now."),w(e)},configure:function(e){u=ae(u,e)},initHighlighting:()=>{k(),X("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){k(),X("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,r){let i=null
try{i=r(e)}catch(e){if(K("Language definition for '{}' could not be registered.".replace("{}",t)),!a)throw e
K(e),i=l}i.name||(i.name=t),n[t]=i,i.rawDefinition=r.bind(null,e),i.aliases&&_(i.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e]
for(const t of Object.keys(i))i[t]===e&&delete i[t]},listLanguages:function(){return Object.keys(n)},getLanguage:E,registerAliases:_,autoDetection:A,inherit:ae,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),o.push(e)},removePlugin:function(e){const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}),e.debugMode=function(){a=!1},e.safeMode=function(){a=!0},e.versionString="11.12.0",e.regex={concat:h,lookahead:d,either:g,optional:p,anyNumberOfTimes:f}
for(const r in M)"object"==typeof M[r]&&t(M[r])
return Object.assign(e,M),e},ce=le({})
ce.newInstance=()=>le({}),e.exports=ce,ce.HighlightJS=ce,ce.default=ce},5325(e){const t=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video","defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],r=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),n=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),o=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","corner-bottom-left-shape","corner-bottom-right-shape","corner-shape","corner-top-left-shape","corner-top-right-shape","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","unicode-range","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse()
e.exports=function(e){const a=e.regex,s=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},UNICODE_RANGE:{scope:"number",begin:/\b[Uu]\+[0-9A-Fa-f][0-9A-Fa-f?]{0,5}(-[0-9A-Fa-f][0-9A-Fa-f]{0,5})?/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}))(e),l=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[s.BLOCK_COMMENT,{begin:/-(webkit|moz|ms|o)-(?=[a-z])/},s.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},s.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+n.join("|")+")"},{begin:":(:)?("+i.join("|")+")"}]},s.CSS_VARIABLE,{className:"attribute",begin:"\\b("+o.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[s.BLOCK_COMMENT,s.HEXCOLOR,s.IMPORTANT,s.CSS_NUMBER_MODE,s.UNICODE_RANGE,...l,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...l,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},s.FUNCTION_DISPATCH]},{begin:a.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:/@-?\w[\w]*(-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:"and or not only",attribute:r.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...l,s.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+t.join("|")+")\\b"}]}}},3075(e){e.exports=function(e){const t=e.regex
return{name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,match:t.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^@@ +-\d+ +\+\d+,\d+ +@@/,/^@@ +-\d+,\d+ +\+\d+ +@@/,/^@@ +-\d+ +\+\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)},{className:"comment",variants:[{begin:t.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,end:/$/}]}}},4644(e){e.exports=function(e){const t=e.regex,r={$pattern:/[\w.\/]+/,built_in:["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},n=/\[\]|\[[^\]]+\]/,i=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,o=t.either(/""|"[^"]+"/,/''|'[^']+'/,n,i),a=t.concat(t.optional(/\.|\.\/|\//),o,t.anyNumberOfTimes(t.concat(/(\.|\/)/,o))),s=t.concat("(",n,"|",i,")(?==)"),l={begin:a},c=e.inherit(l,{keywords:{$pattern:/[\w.\/]+/,literal:["true","false","undefined","null"]}}),u={begin:/\(/,end:/\)/},d={className:"attr",begin:s,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,c,u]}}},f={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},d,c,u],returnEnd:!0},p=e.inherit(l,{className:"name",keywords:r,starts:e.inherit(f,{end:/\)/})})
u.contains=[p]
const h=e.inherit(l,{keywords:r,className:"name",starts:e.inherit(f,{end:/\}\}/})}),g=e.inherit(l,{keywords:r,className:"name"}),m=e.inherit(l,{className:"name",keywords:r,starts:e.inherit(f,{end:/\}\}/})})
return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[h],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[g]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[h]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[g]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[m]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[m]}]}}},4103(e){const t="[A-Za-z$_][0-9A-Za-z$_]*",r=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],n=["true","false","null","undefined","NaN","Infinity"],i=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],o=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],a=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],s=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","self","global"],l=[].concat(a,i,o)
e.exports=function(e){const c=e.regex,u=t,d={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{const r=e[0].length+e.index,n=e.input[r]
if("<"===n||","===n)return void t.ignoreMatch()
let i
">"===n&&(((e,{after:t})=>{const r="</"+e[0].slice(1)
return-1!==e.input.indexOf(r,t)})(e,{after:r})||t.ignoreMatch())
const o=e.input.substring(r);((i=o.match(/^\s*=/))||(i=o.match(/^\s+extends\s+/))&&0===i.index)&&t.ignoreMatch()}},f={$pattern:t,keyword:r,literal:n,built_in:l,"variable.language":s},p="[0-9](_?[0-9])*",h=`\\.(${p})`,g="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${g})((${h})|\\.)?|(${h}))[eE][+-]?(${p})\\b`},{begin:`\\b(${g})\\b((${h})\\b|\\.)?|(${h})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},b={className:"subst",begin:"\\$\\{",end:"\\}",keywords:f,contains:[]},y={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"xml"}},v={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"css"}},w={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"graphql"}},x={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,b]},k={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:u+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},E=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,v,w,x,{match:/\$\d+/},m]
b.contains=E.concat({begin:/\{/,end:/\}/,keywords:f,contains:["self"].concat(E)})
const _=[].concat(k,b.contains),A=_.concat([{begin:/(\s*)\(/,end:/\)/,keywords:f,contains:["self"].concat(_)}]),T={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:f,contains:A},S={variants:[{match:[/class/,/\s+/,u,/\s+/,/extends/,/\s+/,c.concat(u,"(",c.concat(/\./,u),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,u],scope:{1:"keyword",3:"title.class"}}]},O={relevance:0,match:c.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...i,...o]}},N={variants:[{match:[/function/,/\s+/,u,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[T],illegal:/%/},C={match:c.concat(/\b/,(D=[...a,"super","import","await"].map(e=>`${e}\\s*\\(`),c.concat("(?!",D.join("|"),")")),u,c.lookahead(/\s*\(/)),className:"title.function",relevance:0}
var D
const L={begin:c.concat(/\./,c.lookahead(c.concat(u,/(?![0-9A-Za-z$_(])/))),end:u,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},q={match:[/get|set/,/\s+/,u,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},T]},R="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",P={match:[/const|var|let/,/\s+/,u,/\s*/,/=\s*/,/(async\s*)?/,c.lookahead(R)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[T]}
return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:f,exports:{PARAMS_CONTAINS:A,CLASS_REFERENCE:O},illegal:/#(?![$_A-Za-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,v,w,x,k,{match:/\$\d+/},m,O,{scope:"attr",match:u+c.lookahead(":"),relevance:0},P,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[k,e.REGEXP_MODE,{className:"function",begin:R,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:f,contains:A}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:d.begin,"on:begin":d.isTrulyOpeningTag,end:d.end}],subLanguage:"xml",contains:[{begin:d.begin,end:d.end,skip:!0,contains:["self"]}]}]},N,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[T,e.inherit(e.TITLE_MODE,{begin:u,className:"title.function"})]},{match:/\.\.\./,relevance:0},L,{match:"\\$"+u,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[T]},C,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},S,q,{match:/\$[(.]/}]}}},9294(e){const t={scope:"number",match:"([-+]?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)|NaN|[-+]?Infinity",relevance:0}
e.exports=function(e){const r=["true","false","null"],n={scope:"literal",beginKeywords:r.join(" ")}
return{name:"JSON",aliases:["jsonc","json5"],keywords:{literal:r},contains:[{className:"attr",begin:/(("(\\.|[^\\"\r\n])*")|('(\\.|[^\\'\r\n])*'))(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,n,t,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}},3608(e){e.exports=function(e){return{name:"Shell Session",aliases:["console","shellsession"],contains:[{className:"meta.prompt",begin:/^\s{0,3}[./~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}},4215(e){const t="[A-Za-z$_][0-9A-Za-z$_]*",r=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],n=["true","false","null","undefined","NaN","Infinity"],i=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],o=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],a=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],s=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","self","global"],l=[].concat(a,i,o)
function c(e){const c=e.regex,u=t,d={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{const r=e[0].length+e.index,n=e.input[r]
if("<"===n||","===n)return void t.ignoreMatch()
let i
">"===n&&(((e,{after:t})=>{const r="</"+e[0].slice(1)
return-1!==e.input.indexOf(r,t)})(e,{after:r})||t.ignoreMatch())
const o=e.input.substring(r);((i=o.match(/^\s*=/))||(i=o.match(/^\s+extends\s+/))&&0===i.index)&&t.ignoreMatch()}},f={$pattern:t,keyword:r,literal:n,built_in:l,"variable.language":s},p="[0-9](_?[0-9])*",h=`\\.(${p})`,g="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${g})((${h})|\\.)?|(${h}))[eE][+-]?(${p})\\b`},{begin:`\\b(${g})\\b((${h})\\b|\\.)?|(${h})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},b={className:"subst",begin:"\\$\\{",end:"\\}",keywords:f,contains:[]},y={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"xml"}},v={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"css"}},w={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"graphql"}},x={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,b]},k={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:u+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},E=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,v,w,x,{match:/\$\d+/},m]
b.contains=E.concat({begin:/\{/,end:/\}/,keywords:f,contains:["self"].concat(E)})
const _=[].concat(k,b.contains),A=_.concat([{begin:/(\s*)\(/,end:/\)/,keywords:f,contains:["self"].concat(_)}]),T={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:f,contains:A},S={variants:[{match:[/class/,/\s+/,u,/\s+/,/extends/,/\s+/,c.concat(u,"(",c.concat(/\./,u),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,u],scope:{1:"keyword",3:"title.class"}}]},O={relevance:0,match:c.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...i,...o]}},N={variants:[{match:[/function/,/\s+/,u,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[T],illegal:/%/},C={match:c.concat(/\b/,(D=[...a,"super","import","await"].map(e=>`${e}\\s*\\(`),c.concat("(?!",D.join("|"),")")),u,c.lookahead(/\s*\(/)),className:"title.function",relevance:0}
var D
const L={begin:c.concat(/\./,c.lookahead(c.concat(u,/(?![0-9A-Za-z$_(])/))),end:u,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},q={match:[/get|set/,/\s+/,u,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},T]},R="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",P={match:[/const|var|let/,/\s+/,u,/\s*/,/=\s*/,/(async\s*)?/,c.lookahead(R)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[T]}
return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:f,exports:{PARAMS_CONTAINS:A,CLASS_REFERENCE:O},illegal:/#(?![$_A-Za-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,v,w,x,k,{match:/\$\d+/},m,O,{scope:"attr",match:u+c.lookahead(":"),relevance:0},P,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[k,e.REGEXP_MODE,{className:"function",begin:R,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:f,contains:A}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:d.begin,"on:begin":d.isTrulyOpeningTag,end:d.end}],subLanguage:"xml",contains:[{begin:d.begin,end:d.end,skip:!0,contains:["self"]}]}]},N,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[T,e.inherit(e.TITLE_MODE,{begin:u,className:"title.function"})]},{match:/\.\.\./,relevance:0},L,{match:"\\$"+u,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[T]},C,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},S,q,{match:/\$[(.]/}]}}e.exports=function(e){const i=e.regex,o=c(e),a=t,u=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],d={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},f={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:u},contains:[o.exports.CLASS_REFERENCE]},p={$pattern:t,keyword:r.concat(["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"]),literal:n,built_in:l.concat(u),"variable.language":s},h={className:"meta",begin:"@"+a},g=(e,t,r)=>{const n=e.contains.findIndex(e=>e.label===t)
if(-1===n)throw new Error("can not find mode to replace")
e.contains.splice(n,1,r)}
Object.assign(o.keywords,p),o.exports.PARAMS_CONTAINS.push(h)
const m=o.contains.find(e=>"attr"===e.scope),b=Object.assign({},m,{match:i.concat(a,i.lookahead(/\s*\?:/))})
return o.exports.PARAMS_CONTAINS.push([o.exports.CLASS_REFERENCE,m,b]),o.contains=o.contains.concat([h,d,f,b]),g(o,"shebang",e.SHEBANG()),g(o,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),o.contains.find(e=>"func.def"===e.label).relevance=0,Object.assign(o,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),o}},5643(e){e.exports=function(e){const t=e.regex,r=t.concat(/[\p{L}_]/u,t.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),n={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},i={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=e.inherit(i,{begin:/\(/,end:/\)/}),a=e.inherit(e.APOS_STRING_MODE,{className:"string"}),s=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{begin:/[^\s"'=<>`]+/}]}]}]}
return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[i,s,a,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[i,o,s,a]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},n,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[s]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:"css"}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:"javascript"}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t.concat(/</,t.lookahead(t.concat(r,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:l}]},{className:"tag",begin:t.concat(/<\//,t.lookahead(t.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}},6786(e,t){"use strict"
function r(e){return(e||"").match(/\S*/)[0]}function n(e){return t=>{"string"==typeof t&&t!==e.text&&(e.escaped=!0,e.text=t)}}const i=/[&<>"']/,o=new RegExp(i.source,"g"),a=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,s=new RegExp(a.source,"g"),l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c=e=>l[e]
function u(e,t){if(t){if(i.test(e))return e.replace(o,c)}else if(a.test(e))return e.replace(s,c)
return e}t.markedHighlight=function(e){if("function"==typeof e&&(e={highlight:e}),!e||"function"!=typeof e.highlight)throw new Error("Must provide highlight function")
return"string"!=typeof e.langPrefix&&(e.langPrefix="language-"),"string"!=typeof e.emptyLangClass&&(e.emptyLangClass=""),{async:!!e.async,walkTokens(t){if("code"!==t.type)return
const i=r(t.lang)
if(e.async)return Promise.resolve(e.highlight(t.text,i,t.lang||"")).then(n(t))
const o=e.highlight(t.text,i,t.lang||"")
if(o instanceof Promise)throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.")
n(t)(o)},useNewRenderer:!0,renderer:{code(t,n,i){"object"==typeof t&&(i=t.escaped,n=t.lang,t=t.text)
const o=r(n),a=o?e.langPrefix+u(o):e.emptyLangClass,s=a?` class="${a}"`:""
return t=t.replace(/\n$/,""),`<pre><code${s}>${i?t:u(t,!0)}\n</code></pre>`}}}}},2009(e,t){"use strict"
function r(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}function n(e){t.defaults=e}t.defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}
const i=/[&<>"']/,o=new RegExp(i.source,"g"),a=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,s=new RegExp(a.source,"g"),l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c=e=>l[e]
function u(e,t){if(t){if(i.test(e))return e.replace(o,c)}else if(a.test(e))return e.replace(s,c)
return e}const d=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
function f(e){return e.replace(d,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const p=/(^|[^\[])\^/g
function h(e,t){let r="string"==typeof e?e:e.source
t=t||""
const n={replace:(e,t)=>{let i="string"==typeof t?t:t.source
return i=i.replace(p,"$1"),r=r.replace(e,i),n},getRegex:()=>new RegExp(r,t)}
return n}function g(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch(e){return null}return e}const m={exec:()=>null}
function b(e,t){const r=e.replace(/\|/g,(e,t,r)=>{let n=!1,i=t
for(;--i>=0&&"\\"===r[i];)n=!n
return n?"|":" |"}).split(/ \|/)
let n=0
if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),t)if(r.length>t)r.splice(t)
else for(;r.length<t;)r.push("")
for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|")
return r}function y(e,t,r){const n=e.length
if(0===n)return""
let i=0
for(;i<n;){const o=e.charAt(n-i-1)
if(o!==t||r){if(o===t||!r)break
i++}else i++}return e.slice(0,n-i)}function v(e,t,r,n){const i=t.href,o=t.title?u(t.title):null,a=e[1].replace(/\\([\[\]])/g,"$1")
if("!"!==e[0].charAt(0)){n.state.inLink=!0
const e={type:"link",raw:r,href:i,title:o,text:a,tokens:n.inlineTokens(a)}
return n.state.inLink=!1,e}return{type:"image",raw:r,href:i,title:o,text:u(a)}}class w{options
rules
lexer
constructor(e){this.options=e||t.defaults}space(e){const t=this.rules.block.newline.exec(e)
if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e)
if(t){const e=t[0].replace(/^ {1,4}/gm,"")
return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:y(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e)
if(t){const e=t[0],r=function(e,t){const r=e.match(/^(\s+)(?:```)/)
if(null===r)return t
const n=r[1]
return t.split("\n").map(e=>{const t=e.match(/^\s+/)
if(null===t)return e
const[r]=t
return r.length>=n.length?e.slice(n.length):e}).join("\n")}(e,t[3]||"")
return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e)
if(t){let e=t[2].trim()
if(/#$/.test(e)){const t=y(e,"#")
this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const t=this.rules.block.hr.exec(e)
if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e)
if(t){const e=y(t[0].replace(/^ *>[ \t]?/gm,""),"\n"),r=this.lexer.state.top
this.lexer.state.top=!0
const n=this.lexer.blockTokens(e)
return this.lexer.state.top=r,{type:"blockquote",raw:t[0],tokens:n,text:e}}}list(e){let t=this.rules.block.list.exec(e)
if(t){let r=t[1].trim()
const n=r.length>1,i={type:"list",raw:"",ordered:n,start:n?+r.slice(0,-1):"",loose:!1,items:[]}
r=n?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=n?r:"[*+-]")
const o=new RegExp(`^( {0,3}${r})((?:[\t ][^\\n]*)?(?:\\n|$))`)
let a="",s="",l=!1
for(;e;){let r=!1
if(!(t=o.exec(e)))break
if(this.rules.block.hr.test(e))break
a=t[0],e=e.substring(a.length)
let n=t[2].split("\n",1)[0].replace(/^\t+/,e=>" ".repeat(3*e.length)),c=e.split("\n",1)[0],u=0
this.options.pedantic?(u=2,s=n.trimStart()):(u=t[2].search(/[^ ]/),u=u>4?1:u,s=n.slice(u),u+=t[1].length)
let d=!1
if(!n&&/^ *$/.test(c)&&(a+=c+"\n",e=e.substring(c.length+1),r=!0),!r){const t=new RegExp(`^ {0,${Math.min(3,u-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),r=new RegExp(`^ {0,${Math.min(3,u-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),i=new RegExp(`^ {0,${Math.min(3,u-1)}}(?:\`\`\`|~~~)`),o=new RegExp(`^ {0,${Math.min(3,u-1)}}#`)
for(;e;){const l=e.split("\n",1)[0]
if(c=l,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),i.test(c))break
if(o.test(c))break
if(t.test(c))break
if(r.test(e))break
if(c.search(/[^ ]/)>=u||!c.trim())s+="\n"+c.slice(u)
else{if(d)break
if(n.search(/[^ ]/)>=4)break
if(i.test(n))break
if(o.test(n))break
if(r.test(n))break
s+="\n"+c}d||c.trim()||(d=!0),a+=l+"\n",e=e.substring(l.length+1),n=c.slice(u)}}i.loose||(l?i.loose=!0:/\n *\n *$/.test(a)&&(l=!0))
let f,p=null
this.options.gfm&&(p=/^\[[ xX]\] /.exec(s),p&&(f="[ ] "!==p[0],s=s.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:a,task:!!p,checked:f,loose:!1,text:s,tokens:[]}),i.raw+=a}i.items[i.items.length-1].raw=a.trimEnd(),i.items[i.items.length-1].text=s.trimEnd(),i.raw=i.raw.trimEnd()
for(let e=0;e<i.items.length;e++)if(this.lexer.state.top=!1,i.items[e].tokens=this.lexer.blockTokens(i.items[e].text,[]),!i.loose){const t=i.items[e].tokens.filter(e=>"space"===e.type),r=t.length>0&&t.some(e=>/\n.*\n/.test(e.raw))
i.loose=r}if(i.loose)for(let e=0;e<i.items.length;e++)i.items[e].loose=!0
return i}}html(e){const t=this.rules.block.html.exec(e)
if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){const t=this.rules.block.def.exec(e)
if(t){const e=t[1].toLowerCase().replace(/\s+/g," "),r=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3]
return{type:"def",tag:e,raw:t[0],href:r,title:n}}}table(e){const t=this.rules.block.table.exec(e)
if(!t)return
if(!/[:|]/.test(t[2]))return
const r=b(t[1]),n=t[2].replace(/^\||\| *$/g,"").split("|"),i=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]}
if(r.length===n.length){for(const e of n)/^ *-+: *$/.test(e)?o.align.push("right"):/^ *:-+: *$/.test(e)?o.align.push("center"):/^ *:-+ *$/.test(e)?o.align.push("left"):o.align.push(null)
for(const e of r)o.header.push({text:e,tokens:this.lexer.inline(e)})
for(const e of i)o.rows.push(b(e,o.header.length).map(e=>({text:e,tokens:this.lexer.inline(e)})))
return o}}lheading(e){const t=this.rules.block.lheading.exec(e)
if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e)
if(t){const e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]
return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const t=this.rules.block.text.exec(e)
if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e)
if(t)return{type:"escape",raw:t[0],text:u(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e)
if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e)
if(t){const e=t[2].trim()
if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return
const t=y(e.slice(0,-1),"\\")
if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1
let r=0
for(let n=0;n<e.length;n++)if("\\"===e[n])n++
else if(e[n]===t[0])r++
else if(e[n]===t[1]&&(r--,r<0))return n
return-1}(t[2],"()")
if(e>-1){const r=(0===t[0].indexOf("!")?5:4)+t[1].length+e
t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let r=t[2],n=""
if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r)
e&&(r=e[1],n=e[3])}else n=t[3]?t[3].slice(1,-1):""
return r=r.trim(),/^</.test(r)&&(r=this.options.pedantic&&!/>$/.test(e)?r.slice(1):r.slice(1,-1)),v(t,{href:r?r.replace(this.rules.inline.anyPunctuation,"$1"):r,title:n?n.replace(this.rules.inline.anyPunctuation,"$1"):n},t[0],this.lexer)}}reflink(e,t){let r
if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const e=t[(r[2]||r[1]).replace(/\s+/g," ").toLowerCase()]
if(!e){const e=r[0].charAt(0)
return{type:"text",raw:e,text:e}}return v(r,e,r[0],this.lexer)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrongLDelim.exec(e)
if(n&&(!n[3]||!r.match(/[\p{L}\p{N}]/u))&&(!n[1]&&!n[2]||!r||this.rules.inline.punctuation.exec(r))){const r=[...n[0]].length-1
let i,o,a=r,s=0
const l="*"===n[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd
for(l.lastIndex=0,t=t.slice(-1*e.length+r);null!=(n=l.exec(t));){if(i=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!i)continue
if(o=[...i].length,n[3]||n[4]){a+=o
continue}if((n[5]||n[6])&&r%3&&!((r+o)%3)){s+=o
continue}if(a-=o,a>0)continue
o=Math.min(o,o+a+s)
const t=[...n[0]][0].length,l=e.slice(0,r+n.index+t+o)
if(Math.min(r,o)%2){const e=l.slice(1,-1)
return{type:"em",raw:l,text:e,tokens:this.lexer.inlineTokens(e)}}const c=l.slice(2,-2)
return{type:"strong",raw:l,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){const t=this.rules.inline.code.exec(e)
if(t){let e=t[2].replace(/\n/g," ")
const r=/[^ ]/.test(e),n=/^ /.test(e)&&/ $/.test(e)
return r&&n&&(e=e.substring(1,e.length-1)),e=u(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e)
if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e)
if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e)
if(t){let e,r
return"@"===t[2]?(e=u(t[1]),r="mailto:"+e):(e=u(t[1]),r=e),{type:"link",raw:t[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t
if(t=this.rules.inline.url.exec(e)){let e,r
if("@"===t[2])e=u(t[0]),r="mailto:"+e
else{let n
do{n=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??""}while(n!==t[0])
e=u(t[0]),r="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){const t=this.rules.inline.text.exec(e)
if(t){let e
return e=this.lexer.state.inRawBlock?t[0]:u(t[0]),{type:"text",raw:t[0],text:e}}}}const x=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,k=/(?:[*+-]|\d{1,9}[.)])/,E=h(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,k).getRegex(),_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,A=/(?!\s*\])(?:\\.|[^\[\]\\])+/,T=h(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",A).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),S=h(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,k).getRegex(),O="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",N=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,C=h("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",N).replace("tag",O).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),D=h(_).replace("hr",x).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O).getRegex(),L={blockquote:h(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",D).getRegex(),code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,def:T,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:x,html:C,lheading:E,list:S,newline:/^(?: *(?:\n|$))+/,paragraph:D,table:m,text:/^[^\n]+/},q=h("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",x).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O).getRegex(),R={...L,table:q,paragraph:h(_).replace("hr",x).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",q).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",O).getRegex()},P={...L,html:h("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",N).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:m,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:h(_).replace("hr",x).replace("heading"," *#{1,6} *[^\n]").replace("lheading",E).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},j=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,I=/^( {2,}|\\)\n(?!\s*$)/,M="\\p{P}$+<=>`^|~",B=h(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,M).getRegex(),F=h(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,M).getRegex(),z=h("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,M).getRegex(),U=h("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,M).getRegex(),H=h(/\\([punct])/,"gu").replace(/punct/g,M).getRegex(),$=h(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),V=h(N).replace("(?:--\x3e|$)","--\x3e").getRegex(),W=h("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",V).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),G=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Q=h(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",G).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Z=h(/^!?\[(label)\]\[(ref)\]/).replace("label",G).replace("ref",A).getRegex(),K=h(/^!?\[(ref)\](?:\[\])?/).replace("ref",A).getRegex(),Y={_backpedal:m,anyPunctuation:H,autolink:$,blockSkip:/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,br:I,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:m,emStrongLDelim:F,emStrongRDelimAst:z,emStrongRDelimUnd:U,escape:j,link:Q,nolink:K,punctuation:B,reflink:Z,reflinkSearch:h("reflink|nolink(?!\\()","g").replace("reflink",Z).replace("nolink",K).getRegex(),tag:W,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:m},X={...Y,link:h(/^!?\[(label)\]\((.*?)\)/).replace("label",G).getRegex(),reflink:h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",G).getRegex()},J={...Y,escape:h(j).replace("])","~|])").getRegex(),url:h(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ee={...J,br:h(I).replace("{2,}","*").getRegex(),text:h(J.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},te={normal:L,gfm:R,pedantic:P},re={normal:Y,gfm:J,breaks:ee,pedantic:X}
class ne{tokens
options
state
tokenizer
inlineQueue
constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||t.defaults,this.options.tokenizer=this.options.tokenizer||new w,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0}
const r={block:te.normal,inline:re.normal}
this.options.pedantic?(r.block=te.pedantic,r.inline=re.pedantic):this.options.gfm&&(r.block=te.gfm,this.options.breaks?r.inline=re.breaks:r.inline=re.gfm),this.tokenizer.rules=r}static get rules(){return{block:te,inline:re}}static lex(e,t){return new ne(t).lex(e)}static lexInline(e,t){return new ne(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens)
for(let t=0;t<this.inlineQueue.length;t++){const e=this.inlineQueue[t]
this.inlineTokens(e.src,e.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){let r,n,i,o
for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(e,t,r)=>t+"    ".repeat(r.length));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),1===r.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(r)
else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),n=t[t.length-1],!n||"paragraph"!==n.type&&"text"!==n.type?t.push(r):(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text)
else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.list(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.def(e))e=e.substring(r.raw.length),n=t[t.length-1],!n||"paragraph"!==n.type&&"text"!==n.type?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(n.raw+="\n"+r.raw,n.text+="\n"+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text)
else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r)
else{if(i=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0
const r=e.slice(1)
let n
this.options.extensions.startBlock.forEach(e=>{n=e.call({lexer:this},r),"number"==typeof n&&n>=0&&(t=Math.min(t,n))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i)))n=t[t.length-1],o&&"paragraph"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r),o=i.length!==e.length,e=e.substring(r.raw.length)
else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r)
else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0)
if(this.options.silent){console.error(t)
break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r,n,i,o,a,s,l=e
if(this.tokens.links){const e=Object.keys(this.tokens.links)
if(e.length>0)for(;null!=(o=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(o=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)
for(;null!=(o=this.tokenizer.rules.inline.anyPunctuation.exec(l));)l=l.slice(0,o.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex)
for(;e;)if(a||(s=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0))))if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.tag(e))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r)
else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r)
else if(r=this.tokenizer.emStrong(e,l,s))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),t.push(r)
else if(r=this.tokenizer.autolink(e))e=e.substring(r.raw.length),t.push(r)
else if(this.state.inLink||!(r=this.tokenizer.url(e))){if(i=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0
const r=e.slice(1)
let n
this.options.extensions.startInline.forEach(e=>{n=e.call({lexer:this},r),"number"==typeof n&&n>=0&&(t=Math.min(t,n))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(s=r.raw.slice(-1)),a=!0,n=t[t.length-1],n&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r)
else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0)
if(this.options.silent){console.error(t)
break}throw new Error(t)}}else e=e.substring(r.raw.length),t.push(r)
return t}}class ie{options
constructor(e){this.options=e||t.defaults}code(e,t,r){const n=(t||"").match(/^\S*/)?.[0]
return e=e.replace(/\n$/,"")+"\n",n?'<pre><code class="language-'+u(n)+'">'+(r?e:u(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:u(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e,t){return e}heading(e,t,r){return`<h${t}>${e}</h${t}>\n`}hr(){return"<hr>\n"}list(e,t,r){const n=t?"ol":"ul"
return"<"+n+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+n+">\n"}listitem(e,t,r){return`<li>${e}</li>\n`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){const r=t.header?"th":"td"
return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){const n=g(e)
if(null===n)return r
let i='<a href="'+(e=n)+'"'
return t&&(i+=' title="'+t+'"'),i+=">"+r+"</a>",i}image(e,t,r){const n=g(e)
if(null===n)return r
let i=`<img src="${e=n}" alt="${r}"`
return t&&(i+=` title="${t}"`),i+=">",i}text(e){return e}}class oe{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class ae{options
renderer
textRenderer
constructor(e){this.options=e||t.defaults,this.options.renderer=this.options.renderer||new ie,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new oe}static parse(e,t){return new ae(t).parse(e)}static parseInline(e,t){return new ae(t).parseInline(e)}parse(e,t=!0){let r=""
for(let n=0;n<e.length;n++){const i=e[n]
if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const e=i,t=this.options.extensions.renderers[e.type].call({parser:this},e)
if(!1!==t||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(e.type)){r+=t||""
continue}}switch(i.type){case"space":continue
case"hr":r+=this.renderer.hr()
continue
case"heading":{const e=i
r+=this.renderer.heading(this.parseInline(e.tokens),e.depth,f(this.parseInline(e.tokens,this.textRenderer)))
continue}case"code":{const e=i
r+=this.renderer.code(e.text,e.lang,!!e.escaped)
continue}case"table":{const e=i
let t="",n=""
for(let r=0;r<e.header.length;r++)n+=this.renderer.tablecell(this.parseInline(e.header[r].tokens),{header:!0,align:e.align[r]})
t+=this.renderer.tablerow(n)
let o=""
for(let r=0;r<e.rows.length;r++){const t=e.rows[r]
n=""
for(let r=0;r<t.length;r++)n+=this.renderer.tablecell(this.parseInline(t[r].tokens),{header:!1,align:e.align[r]})
o+=this.renderer.tablerow(n)}r+=this.renderer.table(t,o)
continue}case"blockquote":{const e=i,t=this.parse(e.tokens)
r+=this.renderer.blockquote(t)
continue}case"list":{const e=i,t=e.ordered,n=e.start,o=e.loose
let a=""
for(let r=0;r<e.items.length;r++){const t=e.items[r],n=t.checked,i=t.task
let s=""
if(t.task){const e=this.renderer.checkbox(!!n)
o?t.tokens.length>0&&"paragraph"===t.tokens[0].type?(t.tokens[0].text=e+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&"text"===t.tokens[0].tokens[0].type&&(t.tokens[0].tokens[0].text=e+" "+t.tokens[0].tokens[0].text)):t.tokens.unshift({type:"text",text:e+" "}):s+=e+" "}s+=this.parse(t.tokens,o),a+=this.renderer.listitem(s,i,!!n)}r+=this.renderer.list(a,t,n)
continue}case"html":{const e=i
r+=this.renderer.html(e.text,e.block)
continue}case"paragraph":{const e=i
r+=this.renderer.paragraph(this.parseInline(e.tokens))
continue}case"text":{let o=i,a=o.tokens?this.parseInline(o.tokens):o.text
for(;n+1<e.length&&"text"===e[n+1].type;)o=e[++n],a+="\n"+(o.tokens?this.parseInline(o.tokens):o.text)
r+=t?this.renderer.paragraph(a):a
continue}default:{const e='Token with "'+i.type+'" type was not found.'
if(this.options.silent)return console.error(e),""
throw new Error(e)}}}return r}parseInline(e,t){t=t||this.renderer
let r=""
for(let n=0;n<e.length;n++){const i=e[n]
if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const e=this.options.extensions.renderers[i.type].call({parser:this},i)
if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=e||""
continue}}switch(i.type){case"escape":{const e=i
r+=t.text(e.text)
break}case"html":{const e=i
r+=t.html(e.text)
break}case"link":{const e=i
r+=t.link(e.href,e.title,this.parseInline(e.tokens,t))
break}case"image":{const e=i
r+=t.image(e.href,e.title,e.text)
break}case"strong":{const e=i
r+=t.strong(this.parseInline(e.tokens,t))
break}case"em":{const e=i
r+=t.em(this.parseInline(e.tokens,t))
break}case"codespan":{const e=i
r+=t.codespan(e.text)
break}case"br":r+=t.br()
break
case"del":{const e=i
r+=t.del(this.parseInline(e.tokens,t))
break}case"text":{const e=i
r+=t.text(e.text)
break}default:{const e='Token with "'+i.type+'" type was not found.'
if(this.options.silent)return console.error(e),""
throw new Error(e)}}}return r}}class se{options
constructor(e){this.options=e||t.defaults}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"])
preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}class le{defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}
options=this.setOptions
parse=this.#e(ne.lex,ae.parse)
parseInline=this.#e(ne.lexInline,ae.parseInline)
Parser=ae
Renderer=ie
TextRenderer=oe
Lexer=ne
Tokenizer=w
Hooks=se
constructor(...e){this.use(...e)}walkTokens(e,t){let r=[]
for(const n of e)switch(r=r.concat(t.call(this,n)),n.type){case"table":{const e=n
for(const n of e.header)r=r.concat(this.walkTokens(n.tokens,t))
for(const n of e.rows)for(const e of n)r=r.concat(this.walkTokens(e.tokens,t))
break}case"list":{const e=n
r=r.concat(this.walkTokens(e.items,t))
break}default:{const e=n
this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(n=>{const i=e[n].flat(1/0)
r=r.concat(this.walkTokens(i,t))}):e.tokens&&(r=r.concat(this.walkTokens(e.tokens,t)))}}return r}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}}
return e.forEach(e=>{const r={...e}
if(r.async=this.defaults.async||r.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw new Error("extension name required")
if("renderer"in e){const r=t.renderers[e.name]
t.renderers[e.name]=r?function(...t){let n=e.renderer.apply(this,t)
return!1===n&&(n=r.apply(this,t)),n}:e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'")
const r=t[e.level]
r?r.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),r.extensions=t),e.renderer){const t=this.defaults.renderer||new ie(this.defaults)
for(const r in e.renderer){if(!(r in t))throw new Error(`renderer '${r}' does not exist`)
if("options"===r)continue
const n=r,i=e.renderer[n],o=t[n]
t[n]=(...e)=>{let r=i.apply(t,e)
return!1===r&&(r=o.apply(t,e)),r||""}}r.renderer=t}if(e.tokenizer){const t=this.defaults.tokenizer||new w(this.defaults)
for(const r in e.tokenizer){if(!(r in t))throw new Error(`tokenizer '${r}' does not exist`)
if(["options","rules","lexer"].includes(r))continue
const n=r,i=e.tokenizer[n],o=t[n]
t[n]=(...e)=>{let r=i.apply(t,e)
return!1===r&&(r=o.apply(t,e)),r}}r.tokenizer=t}if(e.hooks){const t=this.defaults.hooks||new se
for(const r in e.hooks){if(!(r in t))throw new Error(`hook '${r}' does not exist`)
if("options"===r)continue
const n=r,i=e.hooks[n],o=t[n]
se.passThroughHooks.has(r)?t[n]=e=>{if(this.defaults.async)return Promise.resolve(i.call(t,e)).then(e=>o.call(t,e))
const r=i.call(t,e)
return o.call(t,r)}:t[n]=(...e)=>{let r=i.apply(t,e)
return!1===r&&(r=o.apply(t,e)),r}}r.hooks=t}if(e.walkTokens){const t=this.defaults.walkTokens,n=e.walkTokens
r.walkTokens=function(e){let r=[]
return r.push(n.call(this,e)),t&&(r=r.concat(t.call(this,e))),r}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return ne.lex(e,t??this.defaults)}parser(e,t){return ae.parse(e,t??this.defaults)}#e(e,t){return(r,n)=>{const i={...n},o={...this.defaults,...i}
!0===this.defaults.async&&!1===i.async&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0)
const a=this.#t(!!o.silent,!!o.async)
if(null==r)return a(new Error("marked(): input parameter is undefined or null"))
if("string"!=typeof r)return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"))
if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(r):r).then(t=>e(t,o)).then(e=>o.hooks?o.hooks.processAllTokens(e):e).then(e=>o.walkTokens?Promise.all(this.walkTokens(e,o.walkTokens)).then(()=>e):e).then(e=>t(e,o)).then(e=>o.hooks?o.hooks.postprocess(e):e).catch(a)
try{o.hooks&&(r=o.hooks.preprocess(r))
let n=e(r,o)
o.hooks&&(n=o.hooks.processAllTokens(n)),o.walkTokens&&this.walkTokens(n,o.walkTokens)
let i=t(n,o)
return o.hooks&&(i=o.hooks.postprocess(i)),i}catch(e){return a(e)}}}#t(e,t){return r=>{if(r.message+="\nPlease report this to https://github.com/markedjs/marked.",e){const e="<p>An error occurred:</p><pre>"+u(r.message+"",!0)+"</pre>"
return t?Promise.resolve(e):e}if(t)return Promise.reject(r)
throw r}}}const ce=new le
function ue(e,t){return ce.parse(e,t)}ue.options=ue.setOptions=function(e){return ce.setOptions(e),ue.defaults=ce.defaults,n(ue.defaults),ue},ue.getDefaults=r,ue.defaults=t.defaults,ue.use=function(...e){return ce.use(...e),ue.defaults=ce.defaults,n(ue.defaults),ue},ue.walkTokens=function(e,t){return ce.walkTokens(e,t)},ue.parseInline=ce.parseInline,ue.Parser=ae,ue.parser=ae.parse,ue.Renderer=ie,ue.TextRenderer=oe,ue.Lexer=ne,ue.lexer=ne.lex,ue.Tokenizer=w,ue.Hooks=se,ue.parse=ue
const de=ue.options,fe=ue.setOptions,pe=ue.use,he=ue.walkTokens,ge=ue.parseInline,me=ue,be=ae.parse,ye=ne.lex
t.Hooks=se,t.Lexer=ne,t.Marked=le,t.Parser=ae,t.Renderer=ie,t.TextRenderer=oe,t.Tokenizer=w,t.getDefaults=r,t.lexer=ye,t.marked=ue,t.options=de,t.parse=me,t.parseInline=ge,t.parser=be,t.setOptions=fe,t.use=pe,t.walkTokens=he},9485(e,t,r){"use strict"
r.r(t)
var n=function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseWithoutProcessing=exports.parse=exports.PrintVisitor=exports.Exception=exports.parser=exports.WhitespaceControl=exports.Visitor=void 0
var i=require("./visitor.js")
Object.defineProperty(exports,"Visitor",{enumerable:!0,get:function(){return n(i).default}})
var o=require("./whitespace-control.js")
Object.defineProperty(exports,"WhitespaceControl",{enumerable:!0,get:function(){return n(o).default}})
var a=require("./parser.js")
Object.defineProperty(exports,"parser",{enumerable:!0,get:function(){return n(a).default}})
var s=require("./exception.js")
Object.defineProperty(exports,"Exception",{enumerable:!0,get:function(){return n(s).default}})
var l=require("./printer.js")
Object.defineProperty(exports,"print",{enumerable:!0,get:function(){return l.print}}),Object.defineProperty(exports,"PrintVisitor",{enumerable:!0,get:function(){return l.PrintVisitor}})
var c=require("./parse.js")
Object.defineProperty(exports,"parse",{enumerable:!0,get:function(){return c.parse}}),Object.defineProperty(exports,"parseWithoutProcessing",{enumerable:!0,get:function(){return c.parseWithoutProcessing}})},1055(e,t,r){"use strict"
r.d(t,{g:()=>i,i:()=>a,n:()=>o})
const n=new WeakMap
function i(e,t,r,i){let o={configurable:!0,enumerable:!0,writable:!0,initializer:null}
i&&(o.initializer=i)
for(let n of r)o=n(e,t,o)||o
void 0===o.initializer?Object.defineProperty(e,t,o):function(e,t,r){let i=n.get(e)
i||(i=new Map,n.set(e,i)),i.set(t,r)}(e,t,o)}function o(e,t,r){let n={...Object.getOwnPropertyDescriptor(e,t)}
for(let i of r)n=i(e,t,n)||n
void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(e):void 0,n.initializer=void 0),Object.defineProperty(e,t,n)}function a(e,t){let r=function(e,t){var r
let i=e.prototype
for(;i;){let e=null==(r=n.get(i))?void 0:r.get(t)
if(e)return e
i=Object.getPrototypeOf(i)}}(e.constructor,t)
r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(e):void 0})}Symbol.toStringTag},322(e,t,r){"use strict"
function n(e,t){let r=e.load(t)
if(!r)throw new Error(t+" must export an initializer.")
let n=r.default
if(!n)throw new Error(t+" must have a default export")
return n.name||(n.name=t.slice(t.lastIndexOf("/")+1)),n}function i(e,t,r){var i=t+"/initializers/",o=t+"/instance-initializers/",a=[],s=[]
let l
l=r?{names:()=>Object.keys(r),load:e=>r[e]}:{names(){let e=globalThis.requirejs
if(!e||!e._eak_seen)throw new Error("No global AMD loader found. To use loadInitializers without a global AMD loader you must provide explicit modules")
return Object.keys(e._eak_seen)},load:e=>globalThis.require(e,null,null,!0)}
for(let n of l.names())n.startsWith(i)&&!n.endsWith("-test")?a.push(n):n.startsWith(o)&&!n.endsWith("-test")&&s.push(n)
!function(e,t,r){for(let i of r)e.initializer(n(t,i))}(e,l,a),function(e,t,r){for(let i of r)e.instanceInitializer(n(t,i))}(e,l,s)}r.r(t),r.d(t,{default:()=>i})}}])
