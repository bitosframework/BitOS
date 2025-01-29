/*! For license information please see 1949.js.LICENSE.txt */
(self.webpackChunk_BitOS_core_kernel=self.webpackChunk_BitOS_core_kernel||[]).push([[1949],{42678:e=>{e.exports={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}},61949:(e,t,r)=>{var o=r(82127),s=r(31012),n=e.exports;for(var a in o)o.hasOwnProperty(a)&&(n[a]=o[a]);function i(e){if("string"==typeof e&&(e=s.parse(e)),e.protocol||(e.protocol="https:"),"https:"!==e.protocol)throw new Error('Protocol "'+e.protocol+'" not supported. Expected "https:"');return e}n.request=function(e,t){return e=i(e),o.request.call(this,e,t)},n.get=function(e,t){return e=i(e),o.get.call(this,e,t)}},96542:function(e,t,r){var o;e=r.nmd(e),function(s){t&&t.nodeType,e&&e.nodeType;var n="object"==typeof r.g&&r.g;n.global!==n&&n.window!==n&&n.self;var a,i=2147483647,h=36,u=/^xn--/,c=/[^\x20-\x7E]/,l=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},f=Math.floor,d=String.fromCharCode;function m(e){throw RangeError(p[e])}function y(e,t){for(var r=e.length,o=[];r--;)o[r]=t(e[r]);return o}function v(e,t){var r=e.split("@"),o="";return r.length>1&&(o=r[0]+"@",e=r[1]),o+y((e=e.replace(l,".")).split("."),t).join(".")}function g(e){for(var t,r,o=[],s=0,n=e.length;s<n;)(t=e.charCodeAt(s++))>=55296&&t<=56319&&s<n?56320==(64512&(r=e.charCodeAt(s++)))?o.push(((1023&t)<<10)+(1023&r)+65536):(o.push(t),s--):o.push(t);return o}function _(e){return y(e,(function(e){var t="";return e>65535&&(t+=d((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+d(e)})).join("")}function b(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function T(e,t,r){var o=0;for(e=r?f(e/700):e>>1,e+=f(e/t);e>455;o+=h)e=f(e/35);return f(o+36*e/(e+38))}function C(e){var t,r,o,s,n,a,u,c,l,p,d,y=[],v=e.length,g=0,b=128,C=72;for((r=e.lastIndexOf("-"))<0&&(r=0),o=0;o<r;++o)e.charCodeAt(o)>=128&&m("not-basic"),y.push(e.charCodeAt(o));for(s=r>0?r+1:0;s<v;){for(n=g,a=1,u=h;s>=v&&m("invalid-input"),((c=(d=e.charCodeAt(s++))-48<10?d-22:d-65<26?d-65:d-97<26?d-97:h)>=h||c>f((i-g)/a))&&m("overflow"),g+=c*a,!(c<(l=u<=C?1:u>=C+26?26:u-C));u+=h)a>f(i/(p=h-l))&&m("overflow"),a*=p;C=T(g-n,t=y.length+1,0==n),f(g/t)>i-b&&m("overflow"),b+=f(g/t),g%=t,y.splice(g++,0,b)}return _(y)}function w(e){var t,r,o,s,n,a,u,c,l,p,y,v,_,C,w,x=[];for(v=(e=g(e)).length,t=128,r=0,n=72,a=0;a<v;++a)(y=e[a])<128&&x.push(d(y));for(o=s=x.length,s&&x.push("-");o<v;){for(u=i,a=0;a<v;++a)(y=e[a])>=t&&y<u&&(u=y);for(u-t>f((i-r)/(_=o+1))&&m("overflow"),r+=(u-t)*_,t=u,a=0;a<v;++a)if((y=e[a])<t&&++r>i&&m("overflow"),y==t){for(c=r,l=h;!(c<(p=l<=n?1:l>=n+26?26:l-n));l+=h)w=c-p,C=h-p,x.push(d(b(p+w%C,0))),c=f(w/C);x.push(d(b(c,0))),n=T(r,_,o==s),r=0,++o}++r,++t}return x.join("")}a={version:"1.3.2",ucs2:{decode:g,encode:_},decode:C,encode:w,toASCII:function(e){return v(e,(function(e){return c.test(e)?"xn--"+w(e):e}))},toUnicode:function(e){return v(e,(function(e){return u.test(e)?C(e.slice(4).toLowerCase()):e}))}},void 0===(o=function(){return a}.call(t,r,t,e))||(e.exports=o)}()},5202:e=>{"use strict";function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,r,o,s){r=r||"&",o=o||"=";var n={};if("string"!=typeof e||0===e.length)return n;var a=/\+/g;e=e.split(r);var i=1e3;s&&"number"==typeof s.maxKeys&&(i=s.maxKeys);var h=e.length;i>0&&h>i&&(h=i);for(var u=0;u<h;++u){var c,l,p,f,d=e[u].replace(a,"%20"),m=d.indexOf(o);m>=0?(c=d.substr(0,m),l=d.substr(m+1)):(c=d,l=""),p=decodeURIComponent(c),f=decodeURIComponent(l),t(n,p)?Array.isArray(n[p])?n[p].push(f):n[p]=[n[p],f]:n[p]=f}return n}},33489:e=>{"use strict";var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,r,o,s){return r=r||"&",o=o||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(s){var n=encodeURIComponent(t(s))+o;return Array.isArray(e[s])?e[s].map((function(e){return n+encodeURIComponent(t(e))})).join(r):n+encodeURIComponent(t(e[s]))})).join(r):s?encodeURIComponent(t(s))+o+encodeURIComponent(t(e)):""}},45768:(e,t,r)=>{"use strict";t.decode=t.parse=r(5202),t.encode=t.stringify=r(33489)},82127:(e,t,r)=>{var o=r(48817),s=r(84667),n=r(26192),a=r(42678),i=r(31012),h=t;h.request=function(e,t){e="string"==typeof e?i.parse(e):n(e);var s=-1===r.g.location.protocol.search(/^https?:$/)?"http:":"",a=e.protocol||s,h=e.hostname||e.host,u=e.port,c=e.path||"/";h&&-1!==h.indexOf(":")&&(h="["+h+"]"),e.url=(h?a+"//"+h:"")+(u?":"+u:"")+c,e.method=(e.method||"GET").toUpperCase(),e.headers=e.headers||{};var l=new o(e);return t&&l.on("response",t),l},h.get=function(e,t){var r=h.request(e,t);return r.end(),r},h.ClientRequest=o,h.IncomingMessage=s.IncomingMessage,h.Agent=function(){},h.Agent.defaultMaxSockets=4,h.globalAgent=new h.Agent,h.STATUS_CODES=a,h.METHODS=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"]},49499:(e,t,r)=>{var o;function s(){if(void 0!==o)return o;if(r.g.XMLHttpRequest){o=new r.g.XMLHttpRequest;try{o.open("GET",r.g.XDomainRequest?"/":"https://example.com")}catch(e){o=null}}else o=null;return o}function n(e){var t=s();if(!t)return!1;try{return t.responseType=e,t.responseType===e}catch(e){}return!1}function a(e){return"function"==typeof e}t.fetch=a(r.g.fetch)&&a(r.g.ReadableStream),t.writableStream=a(r.g.WritableStream),t.abortController=a(r.g.AbortController),t.arraybuffer=t.fetch||n("arraybuffer"),t.msstream=!t.fetch&&n("ms-stream"),t.mozchunkedarraybuffer=!t.fetch&&n("moz-chunked-arraybuffer"),t.overrideMimeType=t.fetch||!!s()&&a(s().overrideMimeType),o=null},48817:(e,t,r)=>{var o=r(55872).Buffer,s=r(14224),n=r(49499),a=r(2937),i=r(84667),h=r(73745),u=i.IncomingMessage,c=i.readyStates,l=e.exports=function(e){var t,r=this;h.Writable.call(r),r._opts=e,r._body=[],r._headers={},e.auth&&r.setHeader("Authorization","Basic "+o.from(e.auth).toString("base64")),Object.keys(e.headers).forEach((function(t){r.setHeader(t,e.headers[t])}));var s=!0;if("disable-fetch"===e.mode||"requestTimeout"in e&&!n.abortController)s=!1,t=!0;else if("prefer-streaming"===e.mode)t=!1;else if("allow-wrong-content-type"===e.mode)t=!n.overrideMimeType;else{if(e.mode&&"default"!==e.mode&&"prefer-fast"!==e.mode)throw new Error("Invalid value for opts.mode");t=!0}r._mode=function(e,t){return n.fetch&&t?"fetch":n.mozchunkedarraybuffer?"moz-chunked-arraybuffer":n.msstream?"ms-stream":n.arraybuffer&&e?"arraybuffer":"text"}(t,s),r._fetchTimer=null,r._socketTimeout=null,r._socketTimer=null,r.on("finish",(function(){r._onFinish()}))};a(l,h.Writable),l.prototype.setHeader=function(e,t){var r=e.toLowerCase();-1===p.indexOf(r)&&(this._headers[r]={name:e,value:t})},l.prototype.getHeader=function(e){var t=this._headers[e.toLowerCase()];return t?t.value:null},l.prototype.removeHeader=function(e){delete this._headers[e.toLowerCase()]},l.prototype._onFinish=function(){var e=this;if(!e._destroyed){var t=e._opts;"timeout"in t&&0!==t.timeout&&e.setTimeout(t.timeout);var o=e._headers,a=null;"GET"!==t.method&&"HEAD"!==t.method&&(a=new Blob(e._body,{type:(o["content-type"]||{}).value||""}));var i=[];if(Object.keys(o).forEach((function(e){var t=o[e].name,r=o[e].value;Array.isArray(r)?r.forEach((function(e){i.push([t,e])})):i.push([t,r])})),"fetch"===e._mode){var h=null;if(n.abortController){var u=new AbortController;h=u.signal,e._fetchAbortController=u,"requestTimeout"in t&&0!==t.requestTimeout&&(e._fetchTimer=r.g.setTimeout((function(){e.emit("requestTimeout"),e._fetchAbortController&&e._fetchAbortController.abort()}),t.requestTimeout))}r.g.fetch(e._opts.url,{method:e._opts.method,headers:i,body:a||void 0,mode:"cors",credentials:t.withCredentials?"include":"same-origin",signal:h}).then((function(t){e._fetchResponse=t,e._resetTimers(!1),e._connect()}),(function(t){e._resetTimers(!0),e._destroyed||e.emit("error",t)}))}else{var l=e._xhr=new r.g.XMLHttpRequest;try{l.open(e._opts.method,e._opts.url,!0)}catch(t){return void s.nextTick((function(){e.emit("error",t)}))}"responseType"in l&&(l.responseType=e._mode),"withCredentials"in l&&(l.withCredentials=!!t.withCredentials),"text"===e._mode&&"overrideMimeType"in l&&l.overrideMimeType("text/plain; charset=x-user-defined"),"requestTimeout"in t&&(l.timeout=t.requestTimeout,l.ontimeout=function(){e.emit("requestTimeout")}),i.forEach((function(e){l.setRequestHeader(e[0],e[1])})),e._response=null,l.onreadystatechange=function(){switch(l.readyState){case c.LOADING:case c.DONE:e._onXHRProgress()}},"moz-chunked-arraybuffer"===e._mode&&(l.onprogress=function(){e._onXHRProgress()}),l.onerror=function(){e._destroyed||(e._resetTimers(!0),e.emit("error",new Error("XHR error")))};try{l.send(a)}catch(t){return void s.nextTick((function(){e.emit("error",t)}))}}}},l.prototype._onXHRProgress=function(){var e=this;e._resetTimers(!1),function(e){try{var t=e.status;return null!==t&&0!==t}catch(e){return!1}}(e._xhr)&&!e._destroyed&&(e._response||e._connect(),e._response._onXHRProgress(e._resetTimers.bind(e)))},l.prototype._connect=function(){var e=this;e._destroyed||(e._response=new u(e._xhr,e._fetchResponse,e._mode,e._resetTimers.bind(e)),e._response.on("error",(function(t){e.emit("error",t)})),e.emit("response",e._response))},l.prototype._write=function(e,t,r){this._body.push(e),r()},l.prototype._resetTimers=function(e){var t=this;r.g.clearTimeout(t._socketTimer),t._socketTimer=null,e?(r.g.clearTimeout(t._fetchTimer),t._fetchTimer=null):t._socketTimeout&&(t._socketTimer=r.g.setTimeout((function(){t.emit("timeout")}),t._socketTimeout))},l.prototype.abort=l.prototype.destroy=function(e){var t=this;t._destroyed=!0,t._resetTimers(!0),t._response&&(t._response._destroyed=!0),t._xhr?t._xhr.abort():t._fetchAbortController&&t._fetchAbortController.abort(),e&&t.emit("error",e)},l.prototype.end=function(e,t,r){"function"==typeof e&&(r=e,e=void 0),h.Writable.prototype.end.call(this,e,t,r)},l.prototype.setTimeout=function(e,t){var r=this;t&&r.once("timeout",t),r._socketTimeout=e,r._resetTimers(!1)},l.prototype.flushHeaders=function(){},l.prototype.setNoDelay=function(){},l.prototype.setSocketKeepAlive=function(){};var p=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","via"]},84667:(e,t,r)=>{var o=r(14224),s=r(55872).Buffer,n=r(49499),a=r(2937),i=r(73745),h=t.readyStates={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},u=t.IncomingMessage=function(e,t,r,a){var h=this;if(i.Readable.call(h),h._mode=r,h.headers={},h.rawHeaders=[],h.trailers={},h.rawTrailers=[],h.on("end",(function(){o.nextTick((function(){h.emit("close")}))})),"fetch"===r){if(h._fetchResponse=t,h.url=t.url,h.statusCode=t.status,h.statusMessage=t.statusText,t.headers.forEach((function(e,t){h.headers[t.toLowerCase()]=e,h.rawHeaders.push(t,e)})),n.writableStream){var u=new WritableStream({write:function(e){return a(!1),new Promise((function(t,r){h._destroyed?r():h.push(s.from(e))?t():h._resumeFetch=t}))},close:function(){a(!0),h._destroyed||h.push(null)},abort:function(e){a(!0),h._destroyed||h.emit("error",e)}});try{return void t.body.pipeTo(u).catch((function(e){a(!0),h._destroyed||h.emit("error",e)}))}catch(e){}}var c=t.body.getReader();!function e(){c.read().then((function(t){h._destroyed||(a(t.done),t.done?h.push(null):(h.push(s.from(t.value)),e()))})).catch((function(e){a(!0),h._destroyed||h.emit("error",e)}))}()}else if(h._xhr=e,h._pos=0,h.url=e.responseURL,h.statusCode=e.status,h.statusMessage=e.statusText,e.getAllResponseHeaders().split(/\r?\n/).forEach((function(e){var t=e.match(/^([^:]+):\s*(.*)/);if(t){var r=t[1].toLowerCase();"set-cookie"===r?(void 0===h.headers[r]&&(h.headers[r]=[]),h.headers[r].push(t[2])):void 0!==h.headers[r]?h.headers[r]+=", "+t[2]:h.headers[r]=t[2],h.rawHeaders.push(t[1],t[2])}})),h._charset="x-user-defined",!n.overrideMimeType){var l=h.rawHeaders["mime-type"];if(l){var p=l.match(/;\s*charset=([^;])(;|$)/);p&&(h._charset=p[1].toLowerCase())}h._charset||(h._charset="utf-8")}};a(u,i.Readable),u.prototype._read=function(){var e=this._resumeFetch;e&&(this._resumeFetch=null,e())},u.prototype._onXHRProgress=function(e){var t=this,o=t._xhr,n=null;switch(t._mode){case"text":if((n=o.responseText).length>t._pos){var a=n.substr(t._pos);if("x-user-defined"===t._charset){for(var i=s.alloc(a.length),u=0;u<a.length;u++)i[u]=255&a.charCodeAt(u);t.push(i)}else t.push(a,t._charset);t._pos=n.length}break;case"arraybuffer":if(o.readyState!==h.DONE||!o.response)break;n=o.response,t.push(s.from(new Uint8Array(n)));break;case"moz-chunked-arraybuffer":if(n=o.response,o.readyState!==h.LOADING||!n)break;t.push(s.from(new Uint8Array(n)));break;case"ms-stream":if(n=o.response,o.readyState!==h.LOADING)break;var c=new r.g.MSStreamReader;c.onprogress=function(){c.result.byteLength>t._pos&&(t.push(s.from(new Uint8Array(c.result.slice(t._pos)))),t._pos=c.result.byteLength)},c.onload=function(){e(!0),t.push(null)},c.readAsArrayBuffer(n)}t._xhr.readyState===h.DONE&&"ms-stream"!==t._mode&&(e(!0),t.push(null))}},31012:(e,t,r)=>{"use strict";var o=r(96542),s=r(42848);function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=_,t.resolve=function(e,t){return _(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?_(e,!1,!0).resolveObject(t):t},t.format=function(e){return s.isString(e)&&(e=_(e)),e instanceof n?e.format():n.prototype.format.call(e)},t.Url=n;var a=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,h=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,u=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),c=["'"].concat(u),l=["%","/","?",";","#"].concat(c),p=["/","?","#"],f=/^[+a-z0-9A-Z_-]{0,63}$/,d=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},y={javascript:!0,"javascript:":!0},v={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},g=r(45768);function _(e,t,r){if(e&&s.isObject(e)&&e instanceof n)return e;var o=new n;return o.parse(e,t,r),o}n.prototype.parse=function(e,t,r){if(!s.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),i=-1!==n&&n<e.indexOf("#")?"?":"#",u=e.split(i);u[0]=u[0].replace(/\\/g,"/");var _=e=u.join(i);if(_=_.trim(),!r&&1===e.split("#").length){var b=h.exec(_);if(b)return this.path=_,this.href=_,this.pathname=b[1],b[2]?(this.search=b[2],this.query=t?g.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var T=a.exec(_);if(T){var C=(T=T[0]).toLowerCase();this.protocol=C,_=_.substr(T.length)}if(r||T||_.match(/^\/\/[^@\/]+@[^@\/]+/)){var w="//"===_.substr(0,2);!w||T&&y[T]||(_=_.substr(2),this.slashes=!0)}if(!y[T]&&(w||T&&!v[T])){for(var x,A,O=-1,R=0;R<p.length;R++)-1!==(E=_.indexOf(p[R]))&&(-1===O||E<O)&&(O=E);for(-1!==(A=-1===O?_.lastIndexOf("@"):_.lastIndexOf("@",O))&&(x=_.slice(0,A),_=_.slice(A+1),this.auth=decodeURIComponent(x)),O=-1,R=0;R<l.length;R++){var E;-1!==(E=_.indexOf(l[R]))&&(-1===O||E<O)&&(O=E)}-1===O&&(O=_.length),this.host=_.slice(0,O),_=_.slice(O),this.parseHost(),this.hostname=this.hostname||"";var q="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!q)for(var S=this.hostname.split(/\./),k=(R=0,S.length);R<k;R++){var I=S[R];if(I&&!I.match(f)){for(var U="",N=0,P=I.length;N<P;N++)I.charCodeAt(N)>127?U+="x":U+=I[N];if(!U.match(f)){var j=S.slice(0,R),H=S.slice(R+1),M=I.match(d);M&&(j.push(M[1]),H.unshift(M[2])),H.length&&(_="/"+H.join(".")+_),this.hostname=j.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),q||(this.hostname=o.toASCII(this.hostname));var L=this.port?":"+this.port:"",D=this.hostname||"";this.host=D+L,this.href+=this.host,q&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==_[0]&&(_="/"+_))}if(!m[C])for(R=0,k=c.length;R<k;R++){var F=c[R];if(-1!==_.indexOf(F)){var G=encodeURIComponent(F);G===F&&(G=escape(F)),_=_.split(F).join(G)}}var B=_.indexOf("#");-1!==B&&(this.hash=_.substr(B),_=_.slice(0,B));var z=_.indexOf("?");if(-1!==z?(this.search=_.substr(z),this.query=_.substr(z+1),t&&(this.query=g.parse(this.query)),_=_.slice(0,z)):t&&(this.search="",this.query={}),_&&(this.pathname=_),v[C]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){L=this.pathname||"";var X=this.search||"";this.path=L+X}return this.href=this.format(),this},n.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",o=this.hash||"",n=!1,a="";this.host?n=e+this.host:this.hostname&&(n=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(n+=":"+this.port)),this.query&&s.isObject(this.query)&&Object.keys(this.query).length&&(a=g.stringify(this.query));var i=this.search||a&&"?"+a||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||v[t])&&!1!==n?(n="//"+(n||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):n||(n=""),o&&"#"!==o.charAt(0)&&(o="#"+o),i&&"?"!==i.charAt(0)&&(i="?"+i),t+n+(r=r.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(i=i.replace("#","%23"))+o},n.prototype.resolve=function(e){return this.resolveObject(_(e,!1,!0)).format()},n.prototype.resolveObject=function(e){if(s.isString(e)){var t=new n;t.parse(e,!1,!0),e=t}for(var r=new n,o=Object.keys(this),a=0;a<o.length;a++){var i=o[a];r[i]=this[i]}if(r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var h=Object.keys(e),u=0;u<h.length;u++){var c=h[u];"protocol"!==c&&(r[c]=e[c])}return v[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!v[e.protocol]){for(var l=Object.keys(e),p=0;p<l.length;p++){var f=l[p];r[f]=e[f]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||y[e.protocol])r.pathname=e.pathname;else{for(var d=(e.pathname||"").split("/");d.length&&!(e.host=d.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),r.pathname=d.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var m=r.pathname||"",g=r.search||"";r.path=m+g}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var _=r.pathname&&"/"===r.pathname.charAt(0),b=e.host||e.pathname&&"/"===e.pathname.charAt(0),T=b||_||r.host&&e.pathname,C=T,w=r.pathname&&r.pathname.split("/")||[],x=(d=e.pathname&&e.pathname.split("/")||[],r.protocol&&!v[r.protocol]);if(x&&(r.hostname="",r.port=null,r.host&&(""===w[0]?w[0]=r.host:w.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===d[0]?d[0]=e.host:d.unshift(e.host)),e.host=null),T=T&&(""===d[0]||""===w[0])),b)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,w=d;else if(d.length)w||(w=[]),w.pop(),w=w.concat(d),r.search=e.search,r.query=e.query;else if(!s.isNullOrUndefined(e.search))return x&&(r.hostname=r.host=w.shift(),(q=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=q.shift(),r.host=r.hostname=q.shift())),r.search=e.search,r.query=e.query,s.isNull(r.pathname)&&s.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r;if(!w.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var A=w.slice(-1)[0],O=(r.host||e.host||w.length>1)&&("."===A||".."===A)||""===A,R=0,E=w.length;E>=0;E--)"."===(A=w[E])?w.splice(E,1):".."===A?(w.splice(E,1),R++):R&&(w.splice(E,1),R--);if(!T&&!C)for(;R--;R)w.unshift("..");!T||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),O&&"/"!==w.join("/").substr(-1)&&w.push("");var q,S=""===w[0]||w[0]&&"/"===w[0].charAt(0);return x&&(r.hostname=r.host=S?"":w.length?w.shift():"",(q=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=q.shift(),r.host=r.hostname=q.shift())),(T=T||r.host&&w.length)&&!S&&w.unshift(""),w.length?r.pathname=w.join("/"):(r.pathname=null,r.path=null),s.isNull(r.pathname)&&s.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var e=this.host,t=i.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},42848:e=>{"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},26192:e=>{e.exports=function(){for(var e={},r=0;r<arguments.length;r++){var o=arguments[r];for(var s in o)t.call(o,s)&&(e[s]=o[s])}return e};var t=Object.prototype.hasOwnProperty}}]);
//# sourceMappingURL=1949.js.map