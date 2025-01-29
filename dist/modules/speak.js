(()=>{var e={94654:(e,t,n)=>{var r=n(14224);const o=Symbol("arg flag");class i extends Error{constructor(e,t){super(e),this.name="ArgError",this.code=t,Object.setPrototypeOf(this,i.prototype)}}function s(e,{argv:t=r.argv.slice(2),permissive:n=!1,stopAtPositional:s=!1}={}){if(!e)throw new i("argument specification object is required","ARG_CONFIG_NO_SPEC");const a={_:[]},c={},u={};for(const t of Object.keys(e)){if(!t)throw new i("argument key cannot be an empty string","ARG_CONFIG_EMPTY_KEY");if("-"!==t[0])throw new i(`argument key must start with '-' but found: '${t}'`,"ARG_CONFIG_NONOPT_KEY");if(1===t.length)throw new i(`argument key must have a name; singular '-' keys are not allowed: ${t}`,"ARG_CONFIG_NONAME_KEY");if("string"==typeof e[t]){c[t]=e[t];continue}let n=e[t],r=!1;if(Array.isArray(n)&&1===n.length&&"function"==typeof n[0]){const[e]=n;n=(t,n,r=[])=>(r.push(e(t,n,r[r.length-1])),r),r=e===Boolean||!0===e[o]}else{if("function"!=typeof n)throw new i(`type missing or not a function or valid array type: ${t}`,"ARG_CONFIG_VAD_TYPE");r=n===Boolean||!0===n[o]}if("-"!==t[1]&&t.length>2)throw new i(`short argument keys (with a single hyphen) must have only one character: ${t}`,"ARG_CONFIG_SHORTOPT_TOOLONG");u[t]=[n,r]}for(let e=0,r=t.length;e<r;e++){const r=t[e];if(s&&a._.length>0){a._=a._.concat(t.slice(e));break}if("--"===r){a._=a._.concat(t.slice(e+1));break}if(r.length>1&&"-"===r[0]){const o="-"===r[1]||2===r.length?[r]:r.slice(1).split("").map((e=>`-${e}`));for(let r=0;r<o.length;r++){const s=o[r],[l,f]="-"===s[1]?s.split(/=(.*)/,2):[s,void 0];let h=l;for(;h in c;)h=c[h];if(!(h in u)){if(n){a._.push(s);continue}throw new i(`unknown or unexpected option: ${l}`,"ARG_UNKNOWN_OPTION")}const[p,g]=u[h];if(!g&&r+1<o.length)throw new i(`option requires argument (but was followed by another short argument): ${l}`,"ARG_MISSING_REQUIRED_SHORTARG");if(g)a[h]=p(!0,h,a[h]);else if(void 0===f){if(t.length<e+2||t[e+1].length>1&&"-"===t[e+1][0]&&(!t[e+1].match(/^-?\d*(\.(?=\d))?\d*$/)||p!==Number&&("undefined"==typeof BigInt||p!==BigInt)))throw new i(`option requires argument: ${l}${l===h?"":` (alias for ${h})`}`,"ARG_MISSING_REQUIRED_LONGARG");a[h]=p(t[e+1],h,a[h]),++e}else a[h]=p(f,h,a[h])}}else a._.push(r)}return a}s.flag=e=>(e[o]=!0,e),s.COUNT=s.flag(((e,t,n)=>(n||0)+1)),s.ArgError=i,e.exports=s},14224:e=>{var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var a,c=[],u=!1,l=-1;function f(){u&&a&&(u=!1,a.length?c=a.concat(c):l=-1,c.length&&h())}function h(){if(!u){var e=s(f);u=!0;for(var t=c.length;t;){for(a=c,c=[];++l<t;)a&&a[l].run();l=-1,t=c.length}a=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||u||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},25105:(e,t)=>{["\\|\\|","\\&\\&",";;","\\|\\&","\\<\\(",">>",">\\&","[&;()|<>]"].join("|");for(var n=0;n<4;n++)(Math.pow(16,8)*Math.random()).toString(16)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(94654),n(25105),Boolean,Boolean,Boolean,Boolean,speechSynthesis.getVoices(),speechSynthesis.onvoiceschanged=function(){speechSynthesis.getVoices()}})()})();
//# sourceMappingURL=speak.js.map