(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function getTweets(){request.get(endpoint).end(function(e,t){if(e)return console.log("This is the error ".err);var d=t.body.tweets[1],i=renderTweets(d);"Trump"===d.subject?document.getElementById("don").appendChild(i):document.getElementById("hil").appendChild(i)})}function renderTweets(e){console.log("THIS IS TWEET OBJECT",e);var t=e.author,d=e.text,i=e.city,r=e.date,o=e.subject;return console.log("THIS IS THE SUBJECT",o),console.log("THIS IS THE DATE",r),"Trump"===o?h("div",{id:"donTweets"},[h("p",{id:"tweet"},d),h("p",{id:"author"},t),h("p",{id:"city"},i),h("p",{id:"date"},r)]):h("div",{id:"hilTweets"},[h("p",{id:"tweet"},d),h("p",{id:"author"},t),h("p",{id:"city"},i),h("p",{id:"date"},r)])}var request=require("superagent"),endpoint="https://election-tweets-dev.herokuapp.com/api/v1/tweets",h=require("hyperscript");module.exports={getTweets:getTweets};

},{"hyperscript":6,"superagent":8}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
module.exports=function(e){var t,n=String.prototype.split,l=/()??/.exec("")[1]===e;return t=function(t,r,i){if("[object RegExp]"!==Object.prototype.toString.call(r))return n.call(t,r,i);var o,p,s,c,g=[],u=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.extended?"x":"")+(r.sticky?"y":""),x=0,r=new RegExp(r.source,u+"g");for(t+="",l||(o=new RegExp("^"+r.source+"$(?!\\s)",u)),i=i===e?-1>>>0:i>>>0;(p=r.exec(t))&&(s=p.index+p[0].length,!(s>x&&(g.push(t.slice(x,p.index)),!l&&p.length>1&&p[0].replace(o,function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(p[t]=e)}),p.length>1&&p.index<t.length&&Array.prototype.push.apply(g,p.slice(1)),c=p[0].length,x=s,g.length>=i)));)r.lastIndex===p.index&&r.lastIndex++;return x===t.length?!c&&r.test("")||g.push(""):g.push(t.slice(x)),g.length>i?g.slice(0,i):g}}();

},{}],4:[function(require,module,exports){
function ClassList(n){function t(n){var t=s();indexof(t,n)>-1||(t.push(n),a(t))}function r(n){var t=s(),r=indexof(t,n);r!==-1&&(t.splice(r,1),a(t))}function e(n){return indexof(s(),n)>-1}function i(n){return e(n)?(r(n),!1):(t(n),!0)}function u(){return n.className}function o(n){var t=s();return t[n]||null}function s(){var t=n.className;return filter(t.split(" "),isTruthy)}function a(t){var r=t.length;n.className=t.join(" "),l.length=r;for(var e=0;e<t.length;e++)l[e]=t[e];delete t[r]}var f=n.classList;if(f)return f;var l={add:t,remove:r,contains:e,toggle:i,toString:u,length:0,item:o};return l}function filter(n,t){for(var r=[],e=0;e<n.length;e++)t(n[e])&&r.push(n[e]);return r}function isTruthy(n){return!!n}var indexof=require("indexof");module.exports=ClassList;

},{"indexof":7}],5:[function(require,module,exports){
function Emitter(t){if(t)return mixin(t)}function mixin(t){for(var e in Emitter.prototype)t[e]=Emitter.prototype[e];return t}"undefined"!=typeof module&&(module.exports=Emitter),Emitter.prototype.on=Emitter.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},Emitter.prototype.once=function(t,e){function i(){this.off(t,i),e.apply(this,arguments)}return i.fn=e,this.on(t,i),this},Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var i=this._callbacks["$"+t];if(!i)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,s=0;s<i.length;s++)if(r=i[s],r===e||r.fn===e){i.splice(s,1);break}return this},Emitter.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),i=this._callbacks["$"+t];if(i){i=i.slice(0);for(var r=0,s=i.length;r<s;++r)i[r].apply(this,e)}return this},Emitter.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},Emitter.prototype.hasListeners=function(t){return!!this.listeners(t).length};
},{}],6:[function(require,module,exports){
function context(){function e(){function e(n){function o(e){var t=split(e,/([\.#]?[^\s#.]+)/);/^\.|#/.test(t[1])&&(r=document.createElement("div")),forEach(t,function(e){var t=e.substring(1,e.length);e&&(r?"."===e[0]?ClassList(r).add(t):"#"===e[0]&&r.setAttribute("id",t):r=document.createElement(e))})}var i;if(null==n);else if("string"==typeof n)r?r.appendChild(i=document.createTextNode(n)):o(n);else if("number"==typeof n||"boolean"==typeof n||n instanceof Date||n instanceof RegExp)r.appendChild(i=document.createTextNode(n.toString()));else if(isArray(n))forEach(n,e);else if(isNode(n))r.appendChild(i=n);else if(n instanceof Text)r.appendChild(i=n);else if("object"==typeof n)for(var s in n)if("function"==typeof n[s])/^on\w+/.test(s)?!function(e,n){r.addEventListener?(r.addEventListener(e.substring(2),n[e],!1),t.push(function(){r.removeEventListener(e.substring(2),n[e],!1)})):(r.attachEvent(e,n[e]),t.push(function(){r.detachEvent(e,n[e])}))}(s,n):(r[s]=n[s](),t.push(n[s](function(e){r[s]=e})));else if("style"===s)if("string"==typeof n[s])r.style.cssText=n[s];else for(var a in n[s])(function(e,o){if("function"==typeof o)r.style.setProperty(e,o()),t.push(o(function(t){r.style.setProperty(e,t)}));else var i=n[s][e].match(/(.*)\W+!important\W*$/);i?r.style.setProperty(e,i[1],"important"):r.style.setProperty(e,n[s][e])})(a,n[s][a]);else if("attrs"===s)for(var f in n[s])r.setAttribute(f,n[s][f]);else"data-"===s.substr(0,5)?r.setAttribute(s,n[s]):r[s]=n[s];else if("function"==typeof n){var f=n();r.appendChild(i=isNode(f)?f:document.createTextNode(f)),t.push(n(function(e){isNode(e)&&i.parentElement?(i.parentElement.replaceChild(e,i),i=e):i.textContent=e}))}return i}for(var n=[].slice.call(arguments),r=null;n.length;)e(n.shift());return r}var t=[];return e.cleanup=function(){for(var e=0;e<t.length;e++)t[e]();t.length=0},e}function isNode(e){return e&&e.nodeName&&e.nodeType}function forEach(e,t){if(e.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t(e[n],n)}function isArray(e){return"[object Array]"==Object.prototype.toString.call(e)}var split=require("browser-split"),ClassList=require("class-list"),w="undefined"==typeof window?require("html-element"):window,document=w.document,Text=w.Text,h=module.exports=context();h.context=context;
},{"browser-split":3,"class-list":4,"html-element":2}],7:[function(require,module,exports){
var indexOf=[].indexOf;module.exports=function(e,n){if(indexOf)return e.indexOf(n);for(var r=0;r<e.length;++r)if(e[r]===n)return r;return-1};
},{}],8:[function(require,module,exports){
function noop(){}function serialize(e){if(!isObject(e))return e;var t=[];for(var r in e)pushEncodedKeyValuePair(t,r,e[r]);return t.join("&")}function pushEncodedKeyValuePair(e,t,r){if(null!=r)if(Array.isArray(r))r.forEach(function(r){pushEncodedKeyValuePair(e,t,r)});else if(isObject(r))for(var s in r)pushEncodedKeyValuePair(e,t+"["+s+"]",r[s]);else e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));else null===r&&e.push(encodeURIComponent(t))}function parseString(e){for(var t,r,s={},n=e.split("&"),o=0,i=n.length;o<i;++o)t=n[o],r=t.indexOf("="),r==-1?s[decodeURIComponent(t)]="":s[decodeURIComponent(t.slice(0,r))]=decodeURIComponent(t.slice(r+1));return s}function parseHeader(e){var t,r,s,n,o=e.split(/\r?\n/),i={};o.pop();for(var u=0,a=o.length;u<a;++u)r=o[u],t=r.indexOf(":"),s=r.slice(0,t).toLowerCase(),n=trim(r.slice(t+1)),i[s]=n;return i}function isJSON(e){return/[\/+]json\b/.test(e)}function type(e){return e.split(/ *; */).shift()}function params(e){return e.split(/ *; */).reduce(function(e,t){var r=t.split(/ *= */),s=r.shift(),n=r.shift();return s&&n&&(e[s]=n),e},{})}function Response(e,t){t=t||{},this.req=e,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this._setStatusProperties(this.xhr.status),this.header=this.headers=parseHeader(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function Request(e,t){var r=this;this._query=this._query||[],this.method=e,this.url=t,this.header={},this._header={},this.on("end",function(){var e=null,t=null;try{t=new Response(r)}catch(t){return e=new Error("Parser is unable to parse the response"),e.parse=!0,e.original=t,e.rawResponse=r.xhr&&r.xhr.responseText?r.xhr.responseText:null,e.statusCode=r.xhr&&r.xhr.status?r.xhr.status:null,r.callback(e)}r.emit("response",t);var s;try{(t.status<200||t.status>=300)&&(s=new Error(t.statusText||"Unsuccessful HTTP response"),s.original=e,s.response=t,s.status=t.status)}catch(e){s=e}s?r.callback(s,t):r.callback(null,t)})}function del(e,t){var r=request("DELETE",e);return t&&r.end(t),r}var root;"undefined"!=typeof window?root=window:"undefined"!=typeof self?root=self:(console.warn("Using browser-only version of superagent in non-browser environment"),root=this);var Emitter=require("emitter"),requestBase=require("./request-base"),isObject=require("./is-object"),request=module.exports=require("./request").bind(null,Request);request.getXHR=function(){if(!(!root.XMLHttpRequest||root.location&&"file:"==root.location.protocol&&root.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw Error("Browser-only verison of superagent could not find XHR")};var trim="".trim?function(e){return e.trim()}:function(e){return e.replace(/(^\s*|\s*$)/g,"")};request.serializeObject=serialize,request.parseString=parseString,request.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},request.serialize={"application/x-www-form-urlencoded":serialize,"application/json":JSON.stringify},request.parse={"application/x-www-form-urlencoded":parseString,"application/json":JSON.parse},Response.prototype.get=function(e){return this.header[e.toLowerCase()]},Response.prototype._setHeaderProperties=function(e){var t=this.header["content-type"]||"";this.type=type(t);var r=params(t);for(var s in r)this[s]=r[s]},Response.prototype._parseBody=function(e){var t=request.parse[this.type];return!t&&isJSON(this.type)&&(t=request.parse["application/json"]),t&&e&&(e.length||e instanceof Object)?t(e):null},Response.prototype._setStatusProperties=function(e){1223===e&&(e=204);var t=e/100|0;this.status=this.statusCode=e,this.statusType=t,this.info=1==t,this.ok=2==t,this.clientError=4==t,this.serverError=5==t,this.error=(4==t||5==t)&&this.toError(),this.accepted=202==e,this.noContent=204==e,this.badRequest=400==e,this.unauthorized=401==e,this.notAcceptable=406==e,this.notFound=404==e,this.forbidden=403==e},Response.prototype.toError=function(){var e=this.req,t=e.method,r=e.url,s="cannot "+t+" "+r+" ("+this.status+")",n=new Error(s);return n.status=this.status,n.method=t,n.url=r,n},request.Response=Response,Emitter(Request.prototype);for(var key in requestBase)Request.prototype[key]=requestBase[key];Request.prototype.type=function(e){return this.set("Content-Type",request.types[e]||e),this},Request.prototype.responseType=function(e){return this._responseType=e,this},Request.prototype.accept=function(e){return this.set("Accept",request.types[e]||e),this},Request.prototype.auth=function(e,t,r){switch(r||(r={type:"basic"}),r.type){case"basic":var s=btoa(e+":"+t);this.set("Authorization","Basic "+s);break;case"auto":this.username=e,this.password=t}return this},Request.prototype.query=function(e){return"string"!=typeof e&&(e=serialize(e)),e&&this._query.push(e),this},Request.prototype.attach=function(e,t,r){return this._getFormData().append(e,t,r||t.name),this},Request.prototype._getFormData=function(){return this._formData||(this._formData=new root.FormData),this._formData},Request.prototype.callback=function(e,t){var r=this._callback;this.clearTimeout(),r(e,t)},Request.prototype.crossDomainError=function(){var e=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");e.crossDomain=!0,e.status=this.status,e.method=this.method,e.url=this.url,this.callback(e)},Request.prototype._timeoutError=function(){var e=this._timeout,t=new Error("timeout of "+e+"ms exceeded");t.timeout=e,this.callback(t)},Request.prototype._appendQueryString=function(){var e=this._query.join("&");e&&(this.url+=~this.url.indexOf("?")?"&"+e:"?"+e)},Request.prototype.end=function(e){var t=this,r=this.xhr=request.getXHR(),s=this._timeout,n=this._formData||this._data;this._callback=e||noop,r.onreadystatechange=function(){if(4==r.readyState){var e;try{e=r.status}catch(t){e=0}if(0==e){if(t.timedout)return t._timeoutError();if(t._aborted)return;return t.crossDomainError()}t.emit("end")}};var o=function(e,r){r.total>0&&(r.percent=r.loaded/r.total*100),r.direction=e,t.emit("progress",r)};if(this.hasListeners("progress"))try{r.onprogress=o.bind(null,"download"),r.upload&&(r.upload.onprogress=o.bind(null,"upload"))}catch(e){}if(s&&!this._timer&&(this._timer=setTimeout(function(){t.timedout=!0,t.abort()},s)),this._appendQueryString(),this.username&&this.password?r.open(this.method,this.url,!0,this.username,this.password):r.open(this.method,this.url,!0),this._withCredentials&&(r.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof n&&!this._isHost(n)){var i=this._header["content-type"],u=this._serializer||request.serialize[i?i.split(";")[0]:""];!u&&isJSON(i)&&(u=request.serialize["application/json"]),u&&(n=u(n))}for(var a in this.header)null!=this.header[a]&&r.setRequestHeader(a,this.header[a]);return this._responseType&&(r.responseType=this._responseType),this.emit("request",this),r.send("undefined"!=typeof n?n:null),this},request.Request=Request,request.get=function(e,t,r){var s=request("GET",e);return"function"==typeof t&&(r=t,t=null),t&&s.query(t),r&&s.end(r),s},request.head=function(e,t,r){var s=request("HEAD",e);return"function"==typeof t&&(r=t,t=null),t&&s.send(t),r&&s.end(r),s},request.options=function(e,t,r){var s=request("OPTIONS",e);return"function"==typeof t&&(r=t,t=null),t&&s.send(t),r&&s.end(r),s},request.del=del,request.delete=del,request.patch=function(e,t,r){var s=request("PATCH",e);return"function"==typeof t&&(r=t,t=null),t&&s.send(t),r&&s.end(r),s},request.post=function(e,t,r){var s=request("POST",e);return"function"==typeof t&&(r=t,t=null),t&&s.send(t),r&&s.end(r),s},request.put=function(e,t,r){var s=request("PUT",e);return"function"==typeof t&&(r=t,t=null),t&&s.send(t),r&&s.end(r),s};
},{"./is-object":9,"./request":11,"./request-base":10,"emitter":5}],9:[function(require,module,exports){
function isObject(e){return null!==e&&"object"==typeof e}module.exports=isObject;

},{}],10:[function(require,module,exports){
var isObject=require("./is-object");exports.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},exports.parse=function(t){return this._parser=t,this},exports.serialize=function(t){return this._serializer=t,this},exports.timeout=function(t){return this._timeout=t,this},exports.then=function(t,e){if(!this._fullfilledPromise){var i=this;this._fullfilledPromise=new Promise(function(t,e){i.end(function(i,r){i?e(i):t(r)})})}return this._fullfilledPromise.then(t,e)},exports.catch=function(t){return this.then(void 0,t)},exports.use=function(t){return t(this),this},exports.get=function(t){return this._header[t.toLowerCase()]},exports.getHeader=exports.get,exports.set=function(t,e){if(isObject(t)){for(var i in t)this.set(i,t[i]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},exports.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},exports.field=function(t,e){if(null===t||void 0===t)throw new Error(".field(name, val) name can not be empty");if(isObject(t)){for(var i in t)this.field(i,t[i]);return this}if(null===e||void 0===e)throw new Error(".field(name, val) val can not be empty");return this._getFormData().append(t,e),this},exports.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},exports.withCredentials=function(){return this._withCredentials=!0,this},exports.redirects=function(t){return this._maxRedirects=t,this},exports.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},exports._isHost=function(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}},exports.send=function(t){var e=isObject(t),i=this._header["content-type"];if(e&&isObject(this._data))for(var r in t)this._data[r]=t[r];else"string"==typeof t?(i||this.type("form"),i=this._header["content-type"],"application/x-www-form-urlencoded"==i?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(i||this.type("json"),this)};
},{"./is-object":9}],11:[function(require,module,exports){
function request(e,n,t){return"function"==typeof t?new e("GET",n).end(t):2==arguments.length?new e("GET",n):new e(n,t)}module.exports=request;

},{}],12:[function(require,module,exports){
"use strict";var h=require("hyperscript"),request=require("superagent"),_require=require("./getTweets"),getTweets=_require.getTweets,endpoint="https://election-tweets-dev.herokuapp.com/api/v1/tweets",main=document.querySelector("main");console.log("welcome to election_tweets");var don=h("div",{id:"don"},h("h1.r","Donald Trump"),getTweets(),h("img",{src:"images/trump.png"})),hil=h("div",{id:"hil"},[h("h1.d","Hillary Clinton"),getTweets(),h("img",{src:"images/hilary.png"})]);main.appendChild(don),main.appendChild(hil);

},{"./getTweets":1,"hyperscript":6,"superagent":8}]},{},[12]);