/*! For license information please see 3686.js.LICENSE.txt */
(self.webpackChunk_BitOS_core_kernel=self.webpackChunk_BitOS_core_kernel||[]).push([[3686],{94654:(t,e,r)=>{var n=r(14224);const o=Symbol("arg flag");class i extends Error{constructor(t,e){super(t),this.name="ArgError",this.code=e,Object.setPrototypeOf(this,i.prototype)}}function a(t,{argv:e=n.argv.slice(2),permissive:r=!1,stopAtPositional:a=!1}={}){if(!t)throw new i("argument specification object is required","ARG_CONFIG_NO_SPEC");const c={_:[]},u={},s={};for(const e of Object.keys(t)){if(!e)throw new i("argument key cannot be an empty string","ARG_CONFIG_EMPTY_KEY");if("-"!==e[0])throw new i(`argument key must start with '-' but found: '${e}'`,"ARG_CONFIG_NONOPT_KEY");if(1===e.length)throw new i(`argument key must have a name; singular '-' keys are not allowed: ${e}`,"ARG_CONFIG_NONAME_KEY");if("string"==typeof t[e]){u[e]=t[e];continue}let r=t[e],n=!1;if(Array.isArray(r)&&1===r.length&&"function"==typeof r[0]){const[t]=r;r=(e,r,n=[])=>(n.push(t(e,r,n[n.length-1])),n),n=t===Boolean||!0===t[o]}else{if("function"!=typeof r)throw new i(`type missing or not a function or valid array type: ${e}`,"ARG_CONFIG_VAD_TYPE");n=r===Boolean||!0===r[o]}if("-"!==e[1]&&e.length>2)throw new i(`short argument keys (with a single hyphen) must have only one character: ${e}`,"ARG_CONFIG_SHORTOPT_TOOLONG");s[e]=[r,n]}for(let t=0,n=e.length;t<n;t++){const n=e[t];if(a&&c._.length>0){c._=c._.concat(e.slice(t));break}if("--"===n){c._=c._.concat(e.slice(t+1));break}if(n.length>1&&"-"===n[0]){const o="-"===n[1]||2===n.length?[n]:n.slice(1).split("").map((t=>`-${t}`));for(let n=0;n<o.length;n++){const a=o[n],[f,l]="-"===a[1]?a.split(/=(.*)/,2):[a,void 0];let h=f;for(;h in u;)h=u[h];if(!(h in s)){if(r){c._.push(a);continue}throw new i(`unknown or unexpected option: ${f}`,"ARG_UNKNOWN_OPTION")}const[p,d]=s[h];if(!d&&n+1<o.length)throw new i(`option requires argument (but was followed by another short argument): ${f}`,"ARG_MISSING_REQUIRED_SHORTARG");if(d)c[h]=p(!0,h,c[h]);else if(void 0===l){if(e.length<t+2||e[t+1].length>1&&"-"===e[t+1][0]&&(!e[t+1].match(/^-?\d*(\.(?=\d))?\d*$/)||p!==Number&&("undefined"==typeof BigInt||p!==BigInt)))throw new i(`option requires argument: ${f}${f===h?"":` (alias for ${h})`}`,"ARG_MISSING_REQUIRED_LONGARG");c[h]=p(e[t+1],h,c[h]),++t}else c[h]=p(l,h,c[h])}}else c._.push(n)}return c}a.flag=t=>(t[o]=!0,t),a.COUNT=a.flag(((t,e,r)=>(r||0)+1)),a.ArgError=i,t.exports=a},13686:(t,e,r)=>{"use strict";r.r(e),r.d(e,{description:()=>g,devices:()=>d,execute:()=>O,help:()=>m,name:()=>v,printDevices:()=>b,request:()=>x,run:()=>N,spec:()=>w,version:()=>y});var n=r(94654),o=r.n(n),i=r(55481),a=r.n(i),c=r(12106),u=r.n(c),s=r(25105);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h={};function p(){}function d(){}function v(){}var y={};c(y,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(N([])));m&&m!==e&&r.call(m,o)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==f(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=v,c(w,"constructor",v),c(v,"constructor",d),d.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(_.prototype),c(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),c(w,a,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function h(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){h(i,n,o,a,c,"next",t)}function c(t){h(i,n,o,a,c,"throw",t)}a(void 0)}))}}var d=[],v="usb",y="0.1.0",g="WebUSB Utility",m="\n  ".concat(a().bold(a().danger("This is experimental technology")),"\n\n  Please check the compatibility table at:\n  ").concat(a().underline("https://developer.mozilla.org/en-US/docs/Web/API/USBDevice#browser_compatibility"),"\n\n  Usage:\n    usb devices                                  List paired USB devices\n    usb request <options>                        Request USB device (blank for user choice)\n\n  Options:\n    --help                                       Print this help message\n    --name                                       Specify a friendly name for the USB device\n    --product                                    Product ID of the USB device\n    --vendor                                     Vendor ID of the USB device\n    --version                                    Print the version information\n"),w={"--help":Boolean,"--name":String,"--product":String,"--vendor":String,"--version":Boolean};function b(t){return _.apply(this,arguments)}function _(){return _=p(l().mark((function t(e){var r,n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[],n=e.terminal,d.forEach((function(t){var e=t.connection,n=t.id,o=t.name,i=e.manufacturerName,a=e.opened,c=e.productId,u=e.productName,s=e.serialNumber,f=e.vendorId;r.push({id:n,name:o,manufacturerName:i,opened:a,productId:c,productName:u,serialNumber:s,vendorId:f})})),n.log(u()(r,{config:{minWidth:8}}));case 4:case"end":return t.stop()}}),t)}))),_.apply(this,arguments)}function x(t){return E.apply(this,arguments)}function E(){return E=p(l().mark((function t(e){var r,n,o,i,a,c;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={},n=[],e["--vendor"]&&(r.vendorId=e["--vendor"]),e["--product"]&&(r.productId=e["--product"]),(r.vendorId||r.productId)&&n.push(r),o=Math.random().toString(36).substr(2),i=e["--name"]||Math.random().toString(36).substr(2),t.next=9,navigator.usb.requestDevice({filters:n});case 9:a=t.sent,c={id:o,name:i,connection:a},console.log({device:c}),d.push(c);case 13:case"end":return t.stop()}}),t)}))),E.apply(this,arguments)}function O(t,e){return S.apply(this,arguments)}function S(){return(S=p(l().mark((function t(e,r){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e,t.next="devices"===t.t0?3:"request"===t.t0?6:9;break;case 3:return t.next=5,b(r);case 5:case 8:return t.abrupt("return",t.sent);case 6:return t.next=8,x(r);case 9:return t.abrupt("return",r.terminal.log(m));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t){return k.apply(this,arguments)}function k(){return k=p(l().mark((function t(e){var r,n,i,c=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=c.length>1&&void 0!==c[1]?c[1]:"",navigator.usb){t.next=3;break}throw new Error(a().danger("Client does not support WebUSB"));case 3:if(!(i=o()(w,{argv:(0,s.Q)(n)}))["--version"]){t.next=6;break}return t.abrupt("return",e.log(y));case 6:if(!i["--help"]){t.next=8;break}return t.abrupt("return",e.log(m));case 8:return i.terminal=e,t.abrupt("return",O(null===(r=i._)||void 0===r?void 0:r[0],i));case 10:case"end":return t.stop()}}),t)}))),k.apply(this,arguments)}},25105:(t,e)=>{for(var r="(?:"+["\\|\\|","\\&\\&",";;","\\|\\&","\\<\\(",">>",">\\&","[&;()|<>]"].join("|")+")",n="",o=0;o<4;o++)n+=(Math.pow(16,8)*Math.random()).toString(16);e.Q=function(t,e,o){var i=function(t,e,o){var i=new RegExp(["("+r+")","((\\\\['\"|&;()<> \\t]|[^\\s'\"|&;()<> \\t])+|\"((\\\\\"|[^\"])*?)\"|'((\\\\'|[^'])*?)')*"].join("|"),"g"),a=t.match(i).filter(Boolean),c=!1;return a?(e||(e={}),o||(o={}),a.map((function(t,i){if(!c){if(RegExp("^"+r+"$").test(t))return{op:t};for(var u=o.escape||"\\",s=!1,f=!1,l="",h=!1,p=0,d=t.length;p<d;p++){var v=t.charAt(p);if(h=h||!s&&("*"===v||"?"===v),f)l+=v,f=!1;else if(s)v===s?s=!1:"'"==s?l+=v:v===u?(p+=1,l+='"'===(v=t.charAt(p))||v===u||"$"===v?v:u+v):l+="$"===v?y():v;else if('"'===v||"'"===v)s=v;else{if(RegExp("^"+r+"$").test(v))return{op:t};if(RegExp("^#$").test(v))return c=!0,l.length?[l,{comment:t.slice(p+1)+a.slice(i+1).join(" ")}]:[{comment:t.slice(p+1)+a.slice(i+1).join(" ")}];v===u?f=!0:l+="$"===v?y():v}}return h?{op:"glob",pattern:l}:l}function y(){var r,o,i,a,c;if(p+=1,"{"===t.charAt(p)){if(p+=1,"}"===t.charAt(p))throw new Error("Bad substitution: "+t.substr(p-2,3));if((r=t.indexOf("}",p))<0)throw new Error("Bad substitution: "+t.substr(p));o=t.substr(p,r-p),p=r}else/[*@#?$!_\-]/.test(t.charAt(p))?(o=t.charAt(p),p+=1):(r=t.substr(p).match(/[^\w\d_]/))?(o=t.substr(p,r.index),p+=r.index-1):(o=t.substr(p),p=t.length);return i="",a=o,void 0===(c="function"==typeof e?e(a):e[a])&&""!=a?c="":void 0===c&&(c="$"),"object"==typeof c?i+n+JSON.stringify(c)+n:i+c}})).reduce((function(t,e){return void 0===e?t:t.concat(e)}),[])):[]}(t,e,o);return"function"!=typeof e?i:i.reduce((function(t,e){if("object"==typeof e)return t.concat(e);var r=e.split(RegExp("("+n+".*?"+n+")","g"));return 1===r.length?t.concat(r[0]):t.concat(r.filter(Boolean).map((function(t){return RegExp("^"+n).test(t)?JSON.parse(t.split(n)[1]):t})))}),[])}}}]);
//# sourceMappingURL=3686.js.map