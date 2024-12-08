(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Wa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_d=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],u=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,u=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,p=s>>2,E=(s&3)<<4|u>>4;let A=(u&15)<<2|d>>6,P=d&63;l||(P=64,a||(A=64)),r.push(t[p],t[E],t[A],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(lu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_d(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const E=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||d==null||E==null)throw new yd;const A=s<<2|u>>4;if(r.push(A),d!==64){const P=u<<4&240|d>>2;if(r.push(P),E!==64){const k=d<<6&192|E;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ed=function(n){const e=lu(n);return hu.encodeByteArray(e,!0)},ei=function(n){return Ed(n).replace(/\./g,"")},du=function(n){try{return hu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=()=>vd().__FIREBASE_DEFAULTS__,Id=()=>{if(typeof process>"u"||typeof Wa>"u")return;const n=Wa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&du(n[1]);return e&&JSON.parse(e)},_i=()=>{try{return Td()||Id()||wd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fu=n=>{var e,t;return(t=(e=_i())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},pu=n=>{const e=fu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},mu=()=>{var n;return(n=_i())===null||n===void 0?void 0:n.config},gu=n=>{var e;return(e=_i())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ei(JSON.stringify(t)),ei(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function bd(){var n;const e=(n=_i())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Cd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kd(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Dd(){return!bd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nd(){try{return typeof indexedDB=="object"}catch{return!1}}function Od(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="FirebaseError";class He extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Vd,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Ld(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new He(i,u,r)}}function Ld(n,e){return n.replace(Md,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Md=/\{\$([^}]+)}/g;function xd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Ga(s)&&Ga(a)){if(!Xn(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ga(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Bn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ud(n,e){const t=new Fd(n,e);return t.subscribe.bind(t)}class Fd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Bd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ds),i.error===void 0&&(i.error=ds),i.complete===void 0&&(i.complete=ds);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ds(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(n){return n&&n._delegate?n._delegate:n}class yt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ad;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($d(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qd(n){return n===Nt?void 0:n}function $d(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Hd={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Wd=z.INFO,Gd={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Kd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Gd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xs{constructor(e){this.name=e,this._logLevel=Wd,this._logHandler=Kd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Qd=(n,e)=>e.some(t=>n instanceof t);let Ka,Qa;function Xd(){return Ka||(Ka=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jd(){return Qa||(Qa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yu=new WeakMap,Rs=new WeakMap,Eu=new WeakMap,fs=new WeakMap,Js=new WeakMap;function Yd(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(pt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&yu.set(t,n)}).catch(()=>{}),Js.set(e,n),e}function Zd(n){if(Rs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Rs.set(n,e)}let bs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Rs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Eu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ef(n){bs=n(bs)}function tf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ps(this),e,...t);return Eu.set(r,e.sort?e.sort():[e]),pt(r)}:Jd().includes(n)?function(...e){return n.apply(ps(this),e),pt(yu.get(this))}:function(...e){return pt(n.apply(ps(this),e))}}function nf(n){return typeof n=="function"?tf(n):(n instanceof IDBTransaction&&Zd(n),Qd(n,Xd())?new Proxy(n,bs):n)}function pt(n){if(n instanceof IDBRequest)return Yd(n);if(fs.has(n))return fs.get(n);const e=nf(n);return e!==n&&(fs.set(n,e),Js.set(e,n)),e}const ps=n=>Js.get(n);function rf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),u=pt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(pt(a.result),l.oldVersion,l.newVersion,pt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const sf=["get","getKey","getAll","getAllKeys","count"],of=["put","add","delete","clear"],ms=new Map;function Xa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ms.get(e))return ms.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=of.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sf.includes(t)))return;const s=async function(a,...u){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&l.done]))[0]};return ms.set(e,s),s}ef(n=>({...n,get:(e,t,r)=>Xa(e,t)||n.get(e,t,r),has:(e,t)=>!!Xa(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function cf(n){const e=n.getComponent();return e?.type==="VERSION"}const Ps="@firebase/app",Ja="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new Xs("@firebase/app"),uf="@firebase/app-compat",lf="@firebase/analytics-compat",hf="@firebase/analytics",df="@firebase/app-check-compat",ff="@firebase/app-check",pf="@firebase/auth",mf="@firebase/auth-compat",gf="@firebase/database",_f="@firebase/data-connect",yf="@firebase/database-compat",Ef="@firebase/functions",vf="@firebase/functions-compat",Tf="@firebase/installations",If="@firebase/installations-compat",wf="@firebase/messaging",Af="@firebase/messaging-compat",Rf="@firebase/performance",bf="@firebase/performance-compat",Pf="@firebase/remote-config",Sf="@firebase/remote-config-compat",Cf="@firebase/storage",kf="@firebase/storage-compat",Df="@firebase/firestore",Nf="@firebase/vertexai",Of="@firebase/firestore-compat",Vf="firebase",Lf="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="[DEFAULT]",Mf={[Ps]:"fire-core",[uf]:"fire-core-compat",[hf]:"fire-analytics",[lf]:"fire-analytics-compat",[ff]:"fire-app-check",[df]:"fire-app-check-compat",[pf]:"fire-auth",[mf]:"fire-auth-compat",[gf]:"fire-rtdb",[_f]:"fire-data-connect",[yf]:"fire-rtdb-compat",[Ef]:"fire-fn",[vf]:"fire-fn-compat",[Tf]:"fire-iid",[If]:"fire-iid-compat",[wf]:"fire-fcm",[Af]:"fire-fcm-compat",[Rf]:"fire-perf",[bf]:"fire-perf-compat",[Pf]:"fire-rc",[Sf]:"fire-rc-compat",[Cf]:"fire-gcs",[kf]:"fire-gcs-compat",[Df]:"fire-fst",[Of]:"fire-fst-compat",[Nf]:"fire-vertex","fire-js":"fire-js",[Vf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Map,xf=new Map,Cs=new Map;function Ya(n,e){try{n.container.addComponent(e)}catch(t){Ze.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Mt(n){const e=n.name;if(Cs.has(e))return Ze.debug(`There were multiple attempts to register component ${e}.`),!1;Cs.set(e,n);for(const t of ti.values())Ya(t,n);for(const t of xf.values())Ya(t,n);return!0}function yi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Me(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mt=new sr("app","Firebase",Uf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=Lf;function Ys(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ss,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mt.create("bad-app-name",{appName:String(i)});if(t||(t=mu()),!t)throw mt.create("no-options");const s=ti.get(i);if(s){if(Xn(t,s.options)&&Xn(r,s.config))return s;throw mt.create("duplicate-app",{appName:i})}const a=new zd(i);for(const l of Cs.values())a.addComponent(l);const u=new Ff(t,r,a);return ti.set(i,u),u}function Zs(n=Ss){const e=ti.get(n);if(!e&&n===Ss&&mu())return Ys();if(!e)throw mt.create("no-app",{appName:n});return e}function Ue(n,e,t){var r;let i=(r=Mf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ze.warn(u.join(" "));return}Mt(new yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="firebase-heartbeat-database",jf=1,Jn="firebase-heartbeat-store";let gs=null;function vu(){return gs||(gs=rf(Bf,jf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Jn)}catch(t){console.warn(t)}}}}).catch(n=>{throw mt.create("idb-open",{originalErrorMessage:n.message})})),gs}async function qf(n){try{const t=(await vu()).transaction(Jn),r=await t.objectStore(Jn).get(Tu(n));return await t.done,r}catch(e){if(e instanceof He)Ze.warn(e.message);else{const t=mt.create("idb-get",{originalErrorMessage:e?.message});Ze.warn(t.message)}}}async function Za(n,e){try{const r=(await vu()).transaction(Jn,"readwrite");await r.objectStore(Jn).put(e,Tu(n)),await r.done}catch(t){if(t instanceof He)Ze.warn(t.message);else{const r=mt.create("idb-set",{originalErrorMessage:t?.message});Ze.warn(r.message)}}}function Tu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=1024,zf=30*24*60*60*1e3;class Hf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Gf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ec();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=zf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ze.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ec(),{heartbeatsToSend:r,unsentEntries:i}=Wf(this._heartbeatsCache.heartbeats),s=ei(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ze.warn(t),""}}}function ec(){return new Date().toISOString().substring(0,10)}function Wf(n,e=$f){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),tc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),tc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Gf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nd()?Od().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qf(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Za(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Za(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tc(n){return ei(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n){Mt(new yt("platform-logger",e=>new af(e),"PRIVATE")),Mt(new yt("heartbeat",e=>new Hf(e),"PRIVATE")),Ue(Ps,Ja,n),Ue(Ps,Ja,"esm2017"),Ue("fire-js","")}Kf("");function eo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Iu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qf=Iu,wu=new sr("auth","Firebase",Iu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Xs("@firebase/auth");function Xf(n,...e){ni.logLevel<=z.WARN&&ni.warn(`Auth (${qt}): ${n}`,...e)}function zr(n,...e){ni.logLevel<=z.ERROR&&ni.error(`Auth (${qt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n,...e){throw to(n,...e)}function Fe(n,...e){return to(n,...e)}function Au(n,e,t){const r=Object.assign(Object.assign({},Qf()),{[e]:t});return new sr("auth","Firebase",r).create(e,{appName:n.name})}function Ye(n){return Au(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function to(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return wu.create(n,...e)}function M(n,e,...t){if(!n)throw to(e,...t)}function Qe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zr(e),new Error(e)}function et(n,e){n||Qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Jf(){return nc()==="http:"||nc()==="https:"}function nc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jf()||Sd()||"connection"in navigator)?navigator.onLine:!0}function Zf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){this.shortDelay=e,this.longDelay=t,et(t>e,"Short delay should be less than long delay!"),this.isMobile=Rd()||Cd()}get(){return Yf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n,e){et(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new ar(3e4,6e4);function At(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Rt(n,e,t,r,i={}){return bu(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const u=or(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},s);return Pd()||(d.referrerPolicy="no-referrer"),Ru.fetch()(Pu(n,n.config.apiHost,t,u),d)})}async function bu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ep),e);try{const i=new rp(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Lr(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lr(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Lr(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Lr(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Au(n,p,d);Le(n,p)}}catch(i){if(i instanceof He)throw i;Le(n,"network-request-failed",{message:String(i)})}}async function cr(n,e,t,r,i={}){const s=await Rt(n,e,t,r,i);return"mfaPendingCredential"in s&&Le(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Pu(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?no(n.config,i):`${n.config.apiScheme}://${i}`}function np(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),tp.get())})}}function Lr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Fe(n,e,r);return i.customData._tokenResponse=t,i}function rc(n){return n!==void 0&&n.enterprise!==void 0}class ip{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return np(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sp(n,e){return Rt(n,"GET","/v2/recaptchaConfig",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(n,e){return Rt(n,"POST","/v1/accounts:delete",e)}async function Su(n,e){return Rt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ap(n,e=!1){const t=se(n),r=await t.getIdToken(e),i=ro(r);M(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:zn(_s(i.auth_time)),issuedAtTime:zn(_s(i.iat)),expirationTime:zn(_s(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function _s(n){return Number(n)*1e3}function ro(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return zr("JWT malformed, contained fewer than 3 sections"),null;try{const i=du(t);return i?JSON.parse(i):(zr("Failed to decode base64 JWT payload"),null)}catch(i){return zr("Caught error parsing JWT payload as JSON",i?.toString()),null}}function ic(n){const e=ro(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof He&&cp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function cp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zn(this.lastLoginAt),this.creationTime=zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Yn(n,Su(t,{idToken:r}));M(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Cu(s.providerUserInfo):[],u=hp(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!u?.length,p=l?d:!1,E={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new Ds(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,E)}async function lp(n){const e=se(n);await ri(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hp(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Cu(n){return n.map(e=>{var{providerId:t}=e,r=eo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(n,e){const t=await bu(n,{},async()=>{const r=or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Pu(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Ru.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function fp(n,e){return Rt(n,"POST","/v2/accounts:revokeToken",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ic(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=ic(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await dp(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new tn;return r&&(M(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tn,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xe{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=eo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new up(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ds(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Yn(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ap(this,e)}reload(){return lp(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ri(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(Ye(this.auth));const e=await this.getIdToken();return await Yn(this,op(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,u,l,d,p;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(i=t.email)!==null&&i!==void 0?i:void 0,P=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(u=t.tenantId)!==null&&u!==void 0?u:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,q=(d=t.createdAt)!==null&&d!==void 0?d:void 0,j=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:B,emailVerified:$,isAnonymous:he,providerData:J,stsTokenManager:v}=t;M(B&&v,e,"internal-error");const m=tn.fromJSON(this.name,v);M(typeof B=="string",e,"internal-error"),at(E,e.name),at(A,e.name),M(typeof $=="boolean",e,"internal-error"),M(typeof he=="boolean",e,"internal-error"),at(P,e.name),at(k,e.name),at(O,e.name),at(C,e.name),at(q,e.name),at(j,e.name);const _=new Xe({uid:B,auth:e,email:A,emailVerified:$,displayName:E,isAnonymous:he,photoURL:k,phoneNumber:P,tenantId:O,stsTokenManager:m,createdAt:q,lastLoginAt:j});return J&&Array.isArray(J)&&(_.providerData=J.map(y=>Object.assign({},y))),C&&(_._redirectEventId=C),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new tn;i.updateFromServerResponse(t);const s=new Xe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ri(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Cu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,u=new tn;u.updateFromIdToken(r);const l=new Xe({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ds(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new Map;function Je(n){et(n instanceof Function,"Expected a class definition");let e=sc.get(n);return e?(et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ku.type="NONE";const oc=ku;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n,e,t){return`firebase:${n}:${e}:${t}`}class nn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hr("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new nn(Je(oc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Je(oc);const a=Hr(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){const E=Xe._fromJSON(e,p);d!==s&&(u=E),s=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new nn(s,e,r):(s=l[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new nn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Du(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mu(e))return"Blackberry";if(xu(e))return"Webos";if(Nu(e))return"Safari";if((e.includes("chrome/")||Ou(e))&&!e.includes("edge/"))return"Chrome";if(Lu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Du(n=we()){return/firefox\//i.test(n)}function Nu(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ou(n=we()){return/crios\//i.test(n)}function Vu(n=we()){return/iemobile/i.test(n)}function Lu(n=we()){return/android/i.test(n)}function Mu(n=we()){return/blackberry/i.test(n)}function xu(n=we()){return/webos/i.test(n)}function io(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function pp(n=we()){var e;return io(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mp(){return kd()&&document.documentMode===10}function Uu(n=we()){return io(n)||Lu(n)||xu(n)||Mu(n)||/windows phone/i.test(n)||Vu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(n,e=[]){let t;switch(n){case"Browser":t=ac(we());break;case"Worker":t=`${ac(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,u)=>{try{const l=e(s);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(n,e={}){return Rt(n,"GET","/v2/passwordPolicy",At(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=6;class Ep{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:yp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cc(this),this.idTokenSubscription=new cc(this),this.beforeStateQueue=new gp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Je(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Su(this,{idToken:e}),r=await Xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Me(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ri(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(Ye(this));const t=e?se(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(Ye(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(Ye(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _p(this),t=new Ep(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await fp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Je(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[Je(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Xf(`Error while retrieving App Check token: ${t.error}`),t?.token}}function $t(n){return se(n)}class cc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ud(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tp(n){Ei=n}function Bu(n){return Ei.loadJS(n)}function Ip(){return Ei.recaptchaEnterpriseScript}function wp(){return Ei.gapiScript}function Ap(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Rp{constructor(){this.enterprise=new bp}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class bp{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Pp="recaptcha-enterprise",ju="NO_RECAPTCHA";class Sp{constructor(e){this.type=Pp,this.auth=$t(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{sp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new ip(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function i(s,a,u){const l=window.grecaptcha;rc(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(ju)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Rp().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(u=>{if(!t&&rc(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ip();l.length!==0&&(l+=u),Bu(l).then(()=>{i(u,s,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function xn(n,e,t,r=!1,i=!1){const s=new Sp(n);let a;if(i)a=ju;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Ns(n,e,t,r,i){var s,a;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await xn(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await xn(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(u)});else if(i==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){const u=await xn(n,e,t);return r(n,u).catch(async l=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const p=await xn(n,e,t,!1,!0);return r(n,p)}return Promise.reject(l)})}else{const u=await xn(n,e,t,!1,!0);return r(n,u)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(n,e){const t=yi(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Xn(s,e??{}))return i;Le(i,"already-initialized")}return t.initialize({options:e})}function kp(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Je);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Dp(n,e,t){const r=$t(n);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!t?.disableWarnings,s=qu(e),{host:a,port:u}=Np(e),l=u===null?"":`:${u}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Op()}function qu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Np(n){const e=qu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:uc(a)}}}function uc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Op(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,t){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}async function Vp(n,e){return Rt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lp(n,e){return cr(n,"POST","/v1/accounts:signInWithPassword",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mp(n,e){return cr(n,"POST","/v1/accounts:signInWithEmailLink",At(n,e))}async function xp(n,e){return cr(n,"POST","/v1/accounts:signInWithEmailLink",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends so{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Zn(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Zn(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ns(e,t,"signInWithPassword",Lp,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Mp(e,{email:this._email,oobCode:this._password});default:Le(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ns(e,r,"signUpPassword",Vp,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return xp(e,{idToken:t,email:this._email,oobCode:this._password});default:Le(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(n,e){return cr(n,"POST","/v1/accounts:signInWithIdp",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="http://localhost";class xt extends so{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Le("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=eo(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new xt(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return rn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,rn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rn(e,t)}buildRequest(){const e={requestUri:Up,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=or(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bp(n){const e=Fn(Bn(n)).link,t=e?Fn(Bn(e)).deep_link_id:null,r=Fn(Bn(n)).deep_link_id;return(r?Fn(Bn(r)).link:null)||r||t||e||n}class oo{constructor(e){var t,r,i,s,a,u;const l=Fn(Bn(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,E=Fp((i=l.mode)!==null&&i!==void 0?i:null);M(d&&p&&E,"argument-error"),this.apiKey=d,this.operation=E,this.code=p,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=Bp(e);try{return new oo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.providerId=pn.PROVIDER_ID}static credential(e,t){return Zn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=oo.parseLink(t);return M(r,"argument-error"),Zn._fromEmailAndCode(e,r.code,r.tenantId)}}pn.PROVIDER_ID="password";pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends $u{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends ur{constructor(){super("facebook.com")}static credential(e){return xt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends ur{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ut.credential(t,r)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends ur{constructor(){super("github.com")}static credential(e){return xt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends ur{constructor(){super("twitter.com")}static credential(e,t){return xt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ht.credential(t,r)}catch{return null}}}ht.TWITTER_SIGN_IN_METHOD="twitter.com";ht.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(n,e){return cr(n,"POST","/v1/accounts:signUp",At(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Xe._fromIdTokenResponse(e,r,i),a=lc(r);return new Ut({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=lc(r);return new Ut({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function lc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends He{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ii.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ii(e,t,r,i)}}function zu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ii._fromErrorAndOperation(n,s,e,r):s})}async function qp(n,e,t=!1){const r=await Yn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ut._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $p(n,e,t=!1){const{auth:r}=n;if(Me(r.app))return Promise.reject(Ye(r));const i="reauthenticate";try{const s=await Yn(n,zu(r,i,e,n),t);M(s.idToken,r,"internal-error");const a=ro(s.idToken);M(a,r,"internal-error");const{sub:u}=a;return M(n.uid===u,r,"user-mismatch"),Ut._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Le(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hu(n,e,t=!1){if(Me(n.app))return Promise.reject(Ye(n));const r="signIn",i=await zu(n,r,e),s=await Ut._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function zp(n,e){return Hu($t(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wu(n){const e=$t(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qv(n,e,t){if(Me(n.app))return Promise.reject(Ye(n));const r=$t(n),a=await Ns(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jp,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Wu(n),l}),u=await Ut._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function $v(n,e,t){return Me(n.app)?Promise.reject(Ye(n)):zp(se(n),pn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wu(n),r})}function Hp(n,e,t,r){return se(n).onIdTokenChanged(e,t,r)}function Wp(n,e,t){return se(n).beforeAuthStateChanged(e,t)}function Gp(n){return se(n).signOut()}const si="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(si,"1"),this.storage.removeItem(si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=1e3,Qp=10;class Ku extends Gu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);mp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Qp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Kp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ku.type="LOCAL";const Xp=Ku;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends Gu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qu.type="SESSION";const Xu=Qu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new vi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async d=>d(t.origin,s)),l=await Jp(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,l)=>{const d=ao("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(E){const A=E;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(A.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return window}function Zp(n){Be().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(){return typeof Be().WorkerGlobalScope<"u"&&typeof Be().importScripts=="function"}async function em(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tm(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function nm(){return Ju()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="firebaseLocalStorageDb",rm=1,oi="firebaseLocalStorage",Zu="fbase_key";class lr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ti(n,e){return n.transaction([oi],e?"readwrite":"readonly").objectStore(oi)}function im(){const n=indexedDB.deleteDatabase(Yu);return new lr(n).toPromise()}function Os(){const n=indexedDB.open(Yu,rm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(oi,{keyPath:Zu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(oi)?e(r):(r.close(),await im(),e(await Os()))})})}async function hc(n,e,t){const r=Ti(n,!0).put({[Zu]:e,value:t});return new lr(r).toPromise()}async function sm(n,e){const t=Ti(n,!1).get(e),r=await new lr(t).toPromise();return r===void 0?null:r.value}function dc(n,e){const t=Ti(n,!0).delete(e);return new lr(t).toPromise()}const om=800,am=3;class el{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Os(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>am)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ju()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vi._getInstance(nm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await em(),!this.activeServiceWorker)return;this.sender=new Yp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Os();return await hc(e,si,"1"),await dc(e,si),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>hc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>sm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ti(i,!1).getAll();return new lr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),om)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}el.type="LOCAL";const cm=el;new ar(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n,e){return e?Je(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends so{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lm(n){return Hu(n.auth,new co(n),n.bypassAuthState)}function hm(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),$p(t,new co(n),n.bypassAuthState)}async function dm(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),qp(t,new co(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lm;case"linkViaPopup":case"linkViaRedirect":return dm;case"reauthViaPopup":case"reauthViaRedirect":return hm;default:Le(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new ar(2e3,1e4);class en extends tl{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,en.currentPopupAction&&en.currentPopupAction.cancel(),en.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=ao();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,en.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fm.get())};e()}}en.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="pendingRedirect",Wr=new Map;class mm extends tl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Wr.get(this.auth._key());if(!e){try{const r=await gm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Wr.set(this.auth._key(),e)}return this.bypassAuthState||Wr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gm(n,e){const t=Em(e),r=ym(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function _m(n,e){Wr.set(n._key(),e)}function ym(n){return Je(n._redirectPersistence)}function Em(n){return Hr(pm,n.config.apiKey,n.name)}async function vm(n,e,t=!1){if(Me(n.app))return Promise.reject(Ye(n));const r=$t(n),i=um(r,e),a=await new mm(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=10*60*1e3;class Im{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!nl(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Fe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tm&&this.cachedEventUids.clear(),this.cachedEventUids.has(fc(e))}saveEventToCache(e){this.cachedEventUids.add(fc(e)),this.lastProcessedEventTime=Date.now()}}function fc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function nl({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function wm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Am(n,e={}){return Rt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bm=/^https?/;async function Pm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Am(n);for(const t of e)try{if(Sm(t))return}catch{}Le(n,"unauthorized-domain")}function Sm(n){const e=ks(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!bm.test(t))return!1;if(Rm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=new ar(3e4,6e4);function pc(){const n=Be().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function km(n){return new Promise((e,t)=>{var r,i,s;function a(){pc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pc(),t(Fe(n,"network-request-failed"))},timeout:Cm.get()})}if(!((i=(r=Be().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Be().gapi)===null||s===void 0)&&s.load)a();else{const u=Ap("iframefcb");return Be()[u]=()=>{gapi.load?a():t(Fe(n,"network-request-failed"))},Bu(`${wp()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw Gr=null,e})}let Gr=null;function Dm(n){return Gr=Gr||km(n),Gr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new ar(5e3,15e3),Om="__/auth/iframe",Vm="emulator/auth/iframe",Lm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xm(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?no(e,Vm):`https://${n.config.authDomain}/${Om}`,r={apiKey:e.apiKey,appName:n.name,v:qt},i=Mm.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${or(r).slice(1)}`}async function Um(n){const e=await Dm(n),t=Be().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:xm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lm,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Fe(n,"network-request-failed"),u=Be().setTimeout(()=>{s(a)},Nm.get());function l(){Be().clearTimeout(u),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bm=500,jm=600,qm="_blank",$m="http://localhost";class mc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zm(n,e,t,r=Bm,i=jm){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},Fm),{width:r.toString(),height:i.toString(),top:s,left:a}),d=we().toLowerCase();t&&(u=Ou(d)?qm:t),Du(d)&&(e=e||$m,l.scrollbars="yes");const p=Object.entries(l).reduce((A,[P,k])=>`${A}${P}=${k},`,"");if(pp(d)&&u!=="_self")return Hm(e||"",u),new mc(null);const E=window.open(e||"",u,p);M(E,n,"popup-blocked");try{E.focus()}catch{}return new mc(E)}function Hm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="__/auth/handler",Gm="emulator/auth/handler",Km=encodeURIComponent("fac");async function gc(n,e,t,r,i,s){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:qt,eventId:i};if(e instanceof $u){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",xd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,E]of Object.entries(s||{}))a[p]=E}if(e instanceof ur){const p=e.getScopes().filter(E=>E!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const l=await n._getAppCheckToken(),d=l?`#${Km}=${encodeURIComponent(l)}`:"";return`${Qm(n)}?${or(u).slice(1)}${d}`}function Qm({config:n}){return n.emulator?no(n,Gm):`https://${n.authDomain}/${Wm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="webStorageSupport";class Xm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xu,this._completeRedirectFn=vm,this._overrideRedirectResult=_m}async _openPopup(e,t,r,i){var s;et((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await gc(e,t,r,ks(),i);return zm(e,a,ao())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await gc(e,t,r,ks(),i);return Zp(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(et(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Um(e),r=new Im(e);return t.register("authEvent",i=>(M(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ys,{type:ys},i=>{var s;const a=(s=i?.[0])===null||s===void 0?void 0:s[ys];a!==void 0&&t(!!a),Le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Uu()||Nu()||io()}}const Jm=Xm;var _c="@firebase/auth",yc="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eg(n){Mt(new yt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fu(n)},d=new vp(r,i,s,l);return kp(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Mt(new yt("auth-internal",e=>{const t=$t(e.getProvider("auth").getImmediate());return(r=>new Ym(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(_c,yc,Zm(n)),Ue(_c,yc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=5*60,ng=gu("authIdTokenMaxAge")||tg;let Ec=null;const rg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ng)return;const i=t?.token;Ec!==i&&(Ec=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ig(n=Zs()){const e=yi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Cp(n,{popupRedirectResolver:Jm,persistence:[cm,Xp,Xu]}),r=gu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=rg(s.toString());Wp(t,a,()=>a(t.currentUser)),Hp(t,u=>a(u))}}const i=fu("auth");return i&&Dp(t,`http://${i}`),t}function sg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Tp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Fe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",sg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eg("Browser");var og="firebase",ag="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue(og,ag,"app");var vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vt,rl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,T,w){for(var g=Array(arguments.length-2),We=2;We<arguments.length;We++)g[We-2]=arguments[We];return m.prototype[T].apply(y,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],T=v.g[2];var w=v.g[3],g=m+(w^_&(T^w))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+y[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+y[2]+606105819&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+y[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(w^_&(T^w))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+y[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+y[6]+2821735955&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+y[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(w^_&(T^w))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+y[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+y[10]+4294925233&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+y[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(w^_&(T^w))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+y[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+y[14]+2792965006&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+y[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(T^w&(_^T))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+y[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+y[11]+643717713&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+y[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(_^T))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+y[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+y[15]+3634488961&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+y[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(_^T))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+y[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+y[3]+4107603335&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+y[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(_^T))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+y[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+y[7]+1735328473&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+y[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(_^T^w)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+y[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+y[11]+1839030562&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+y[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^w)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+y[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+y[7]+4139469664&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+y[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^w)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+y[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+y[3]+3572445317&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+y[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^w)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+y[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+y[15]+530742520&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+y[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(T^(_|~w))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+y[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+y[14]+2878612391&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+y[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~w))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+y[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+y[10]+4293915773&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+y[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~w))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+y[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+y[6]+2734768916&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+y[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~w))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+y[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+y[2]+718787259&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,y=this.B,T=this.h,w=0;w<m;){if(T==0)for(;w<=_;)i(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<m;)if(y[T++]=v.charCodeAt(w++),T==this.blockSize){i(this,y),T=0;break}}else for(;w<m;)if(y[T++]=v[w++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)v[_++]=this.g[m]>>>y&255;return v};function s(v,m){var _=u;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;for(var _=[],y=!0,T=v.length-1;0<=T;T--){var w=v[T]|0;y&&w==m||(_[T]=w,y=!1)}this.g=_}var u={};function l(v){return-128<=v&&128>v?s(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return E;if(0>v)return C(d(-v));for(var m=[],_=1,y=0;v>=_;y++)m[y]=v/_|0,_*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return C(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=E,T=0;T<v.length;T+=8){var w=Math.min(8,v.length-T),g=parseInt(v.substring(T,T+w),m);8>w?(w=d(Math.pow(m,w)),y=y.j(w).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var E=l(0),A=l(1),P=l(16777216);n=a.prototype,n.m=function(){if(O(this))return-C(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(O(this))return"-"+C(this).toString(v);for(var m=d(Math.pow(v,6)),_=this,y="";;){var T=$(_,m).g;_=q(_,T.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=T,k(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=q(this,v),O(v)?-1:k(v)?0:1};function C(v){for(var m=v.g.length,_=[],y=0;y<m;y++)_[y]=~v.g[y];return new a(_,~v.h).add(A)}n.abs=function(){return O(this)?C(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0,T=0;T<=m;T++){var w=y+(this.i(T)&65535)+(v.i(T)&65535),g=(w>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);y=g>>>16,w&=65535,g&=65535,_[T]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function q(v,m){return v.add(C(m))}n.j=function(v){if(k(this)||k(v))return E;if(O(this))return O(v)?C(this).j(C(v)):C(C(this).j(v));if(O(v))return C(this.j(C(v)));if(0>this.l(P)&&0>v.l(P))return d(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<v.g.length;T++){var w=this.i(y)>>>16,g=this.i(y)&65535,We=v.i(T)>>>16,En=v.i(T)&65535;_[2*y+2*T]+=g*En,j(_,2*y+2*T),_[2*y+2*T+1]+=w*En,j(_,2*y+2*T+1),_[2*y+2*T+1]+=g*We,j(_,2*y+2*T+1),_[2*y+2*T+2]+=w*We,j(_,2*y+2*T+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function j(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function B(v,m){this.g=v,this.h=m}function $(v,m){if(k(m))throw Error("division by zero");if(k(v))return new B(E,E);if(O(v))return m=$(C(v),m),new B(C(m.g),C(m.h));if(O(m))return m=$(v,C(m)),new B(C(m.g),m.h);if(30<v.g.length){if(O(v)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=m;0>=y.l(v);)_=he(_),y=he(y);var T=J(_,1),w=J(y,1);for(y=J(y,2),_=J(_,2);!k(y);){var g=w.add(y);0>=g.l(v)&&(T=T.add(_),w=g),y=J(y,1),_=J(_,1)}return m=q(v,T.j(m)),new B(T,m)}for(T=E;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(_),g=w.j(m);O(g)||0<g.l(v);)_-=y,w=d(_),g=w.j(m);k(w)&&(w=A),T=T.add(w),v=q(v,g)}return new B(T,v)}n.A=function(v){return $(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function he(v){for(var m=v.g.length+1,_=[],y=0;y<m;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function J(v,m){var _=m>>5;m%=32;for(var y=v.g.length-_,T=[],w=0;w<y;w++)T[w]=0<m?v.i(w+_)>>>m|v.i(w+_+1)<<32-m:v.i(w+_);return new a(T,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Vt=a}).apply(typeof vc<"u"?vc:typeof self<"u"?self:typeof window<"u"?window:{});var Mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var il,jn,sl,Kr,Vs,ol,al,cl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mr=="object"&&Mr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var I=o[f];if(!(I in h))break e;h=h[I]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,f=!1,I={next:function(){if(!f&&h<o.length){var R=h++;return{value:c(R,o[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function E(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),o.apply(c,I)}}return function(){return o.apply(c,arguments)}}function A(o,c,h){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,A.apply(null,arguments)}function P(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function k(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,I,R){for(var D=Array(arguments.length-2),X=2;X<arguments.length;X++)D[X-2]=arguments[X];return c.prototype[I].apply(f,D)}}function O(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function C(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const I=o.length||0,R=f.length||0;o.length=I+R;for(let D=0;D<R;D++)o[I+D]=f[D]}else o.push(f)}}class q{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function j(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function $(o){return $[" "](o),o}$[" "]=function(){};var he=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function J(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function v(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(o,c){let h,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(h in f)o[h]=f[h];for(let R=0;R<_.length;R++)h=_[R],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function T(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function w(o){u.setTimeout(()=>{throw o},0)}function g(){var o=ji;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class We{constructor(){this.h=this.g=null}add(c,h){const f=En.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var En=new q(()=>new xh,o=>o.reset());class xh{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let vn,Tn=!1,ji=new We,Ho=()=>{const o=u.Promise.resolve(void 0);vn=()=>{o.then(Uh)}};var Uh=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(h){w(h)}var c=En;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Tn=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Fh=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function In(o,c){if(ge.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(he){e:{try{$(c.nodeName);var I=!0;break e}catch{}I=!1}I||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Bh[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&In.aa.h.call(this)}}k(In,ge);var Bh={2:"touch",3:"pen",4:"mouse"};In.prototype.h=function(){In.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),jh=0;function qh(o,c,h,f,I){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=I,this.key=++jh,this.da=this.fa=!1}function _r(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function yr(o){this.src=o,this.g={},this.h=0}yr.prototype.add=function(o,c,h,f,I){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var D=$i(o,c,f,I);return-1<D?(c=o[D],h||(c.fa=!1)):(c=new qh(c,this.src,R,!!f,I),c.fa=h,o.push(c)),c};function qi(o,c){var h=c.type;if(h in o.g){var f=o.g[h],I=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(_r(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function $i(o,c,h,f){for(var I=0;I<o.length;++I){var R=o[I];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==f)return I}return-1}var zi="closure_lm_"+(1e6*Math.random()|0),Hi={};function Wo(o,c,h,f,I){if(f&&f.once)return Ko(o,c,h,f,I);if(Array.isArray(c)){for(var R=0;R<c.length;R++)Wo(o,c[R],h,f,I);return null}return h=Qi(h),o&&o[wn]?o.K(c,h,d(f)?!!f.capture:!!f,I):Go(o,c,h,!1,f,I)}function Go(o,c,h,f,I,R){if(!c)throw Error("Invalid event type");var D=d(I)?!!I.capture:!!I,X=Gi(o);if(X||(o[zi]=X=new yr(o)),h=X.add(c,h,f,D,R),h.proxy)return h;if(f=$h(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Fh||(I=D),I===void 0&&(I=!1),o.addEventListener(c.toString(),f,I);else if(o.attachEvent)o.attachEvent(Xo(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function $h(){function o(h){return c.call(o.src,o.listener,h)}const c=zh;return o}function Ko(o,c,h,f,I){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Ko(o,c[R],h,f,I);return null}return h=Qi(h),o&&o[wn]?o.L(c,h,d(f)?!!f.capture:!!f,I):Go(o,c,h,!0,f,I)}function Qo(o,c,h,f,I){if(Array.isArray(c))for(var R=0;R<c.length;R++)Qo(o,c[R],h,f,I);else f=d(f)?!!f.capture:!!f,h=Qi(h),o&&o[wn]?(o=o.i,c=String(c).toString(),c in o.g&&(R=o.g[c],h=$i(R,h,f,I),-1<h&&(_r(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[c],o.h--)))):o&&(o=Gi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=$i(c,h,f,I)),(h=-1<o?c[o]:null)&&Wi(h))}function Wi(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[wn])qi(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Xo(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Gi(c))?(qi(h,o),h.h==0&&(h.src=null,c[zi]=null)):_r(o)}}}function Xo(o){return o in Hi?Hi[o]:Hi[o]="on"+o}function zh(o,c){if(o.da)o=!0;else{c=new In(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&Wi(o),o=h.call(f,c)}return o}function Gi(o){return o=o[zi],o instanceof yr?o:null}var Ki="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qi(o){return typeof o=="function"?o:(o[Ki]||(o[Ki]=function(c){return o.handleEvent(c)}),o[Ki])}function _e(){rt.call(this),this.i=new yr(this),this.M=this,this.F=null}k(_e,rt),_e.prototype[wn]=!0,_e.prototype.removeEventListener=function(o,c,h,f){Qo(this,o,c,h,f)};function Ae(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new ge(c,o);else if(c instanceof ge)c.target=c.target||o;else{var I=c;c=new ge(f,o),y(c,I)}if(I=!0,h)for(var R=h.length-1;0<=R;R--){var D=c.g=h[R];I=Er(D,f,!0,c)&&I}if(D=c.g=o,I=Er(D,f,!0,c)&&I,I=Er(D,f,!1,c)&&I,h)for(R=0;R<h.length;R++)D=c.g=h[R],I=Er(D,f,!1,c)&&I}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)_r(h[f]);delete o.g[c],o.h--}}this.F=null},_e.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},_e.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Er(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var I=!0,R=0;R<c.length;++R){var D=c[R];if(D&&!D.da&&D.capture==h){var X=D.listener,de=D.ha||D.src;D.fa&&qi(o.i,D),I=X.call(de,f)!==!1&&I}}return I&&!f.defaultPrevented}function Jo(o,c,h){if(typeof o=="function")h&&(o=A(o,h));else if(o&&typeof o.handleEvent=="function")o=A(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Yo(o){o.g=Jo(()=>{o.g=null,o.i&&(o.i=!1,Yo(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Hh extends rt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Yo(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function An(o){rt.call(this),this.h=o,this.g={}}k(An,rt);var Zo=[];function ea(o){J(o.g,function(c,h){this.g.hasOwnProperty(h)&&Wi(c)},o),o.g={}}An.prototype.N=function(){An.aa.N.call(this),ea(this)},An.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xi=u.JSON.stringify,Wh=u.JSON.parse,Gh=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Ji(){}Ji.prototype.h=null;function ta(o){return o.h||(o.h=o.i())}function na(){}var Rn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yi(){ge.call(this,"d")}k(Yi,ge);function Zi(){ge.call(this,"c")}k(Zi,ge);var St={},ra=null;function vr(){return ra=ra||new _e}St.La="serverreachability";function ia(o){ge.call(this,St.La,o)}k(ia,ge);function bn(o){const c=vr();Ae(c,new ia(c))}St.STAT_EVENT="statevent";function sa(o,c){ge.call(this,St.STAT_EVENT,o),this.stat=c}k(sa,ge);function Re(o){const c=vr();Ae(c,new sa(c,o))}St.Ma="timingevent";function oa(o,c){ge.call(this,St.Ma,o),this.size=c}k(oa,ge);function Pn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Sn(){this.g=!0}Sn.prototype.xa=function(){this.g=!1};function Kh(o,c,h,f,I,R){o.info(function(){if(o.g)if(R)for(var D="",X=R.split("&"),de=0;de<X.length;de++){var K=X[de].split("=");if(1<K.length){var ye=K[0];K=K[1];var Ee=ye.split("_");D=2<=Ee.length&&Ee[1]=="type"?D+(ye+"="+K+"&"):D+(ye+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+c+`
`+h+`
`+D})}function Qh(o,c,h,f,I,R,D){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+c+`
`+h+`
`+R+" "+D})}function Wt(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Jh(o,h)+(f?" "+f:"")})}function Xh(o,c){o.info(function(){return"TIMEOUT: "+c})}Sn.prototype.info=function(){};function Jh(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<I.length;D++)I[D]=""}}}}return Xi(h)}catch{return c}}var Tr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},aa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},es;function Ir(){}k(Ir,Ji),Ir.prototype.g=function(){return new XMLHttpRequest},Ir.prototype.i=function(){return{}},es=new Ir;function it(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new An(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ca}function ca(){this.i=null,this.g="",this.h=!1}var ua={},ts={};function ns(o,c,h){o.L=1,o.v=br(Ge(c)),o.m=h,o.P=!0,la(o,null)}function la(o,c){o.F=Date.now(),wr(o),o.A=Ge(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Aa(h.i,"t",f),o.C=0,h=o.j.J,o.h=new ca,o.g=qa(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Hh(A(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var I="readystatechange";Array.isArray(I)||(I&&(Zo[0]=I.toString()),I=Zo);for(var R=0;R<I.length;R++){var D=Wo(h,I[R],f||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),bn(),Kh(o.i,o.u,o.A,o.l,o.R,o.m)}it.prototype.ca=function(o){o=o.target;const c=this.M;c&&Ke(o)==3?c.j():this.Y(o)},it.prototype.Y=function(o){try{if(o==this.g)e:{const Ee=Ke(this.g);var c=this.g.Ba();const Qt=this.g.Z();if(!(3>Ee)&&(Ee!=3||this.g&&(this.h.h||this.g.oa()||Da(this.g)))){this.J||Ee!=4||c==7||(c==8||0>=Qt?bn(3):bn(2)),rs(this);var h=this.g.Z();this.X=h;t:if(ha(this)){var f=Da(this.g);o="";var I=f.length,R=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ct(this),Cn(this);var D="";break t}this.h.i=new u.TextDecoder}for(c=0;c<I;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(R&&c==I-1)});f.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=h==200,Qh(this.i,this.u,this.A,this.l,this.R,Ee,h),this.o){if(this.T&&!this.K){t:{if(this.g){var X,de=this.g;if((X=de.g?de.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(X)){var K=X;break t}}K=null}if(h=K)Wt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,is(this,h);else{this.o=!1,this.s=3,Re(12),Ct(this),Cn(this);break e}}if(this.P){h=!0;let Oe;for(;!this.J&&this.C<D.length;)if(Oe=Yh(this,D),Oe==ts){Ee==4&&(this.s=4,Re(14),h=!1),Wt(this.i,this.l,null,"[Incomplete Response]");break}else if(Oe==ua){this.s=4,Re(15),Wt(this.i,this.l,D,"[Invalid Chunk]"),h=!1;break}else Wt(this.i,this.l,Oe,null),is(this,Oe);if(ha(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||D.length!=0||this.h.h||(this.s=1,Re(16),h=!1),this.o=this.o&&h,!h)Wt(this.i,this.l,D,"[Invalid Chunked Response]"),Ct(this),Cn(this);else if(0<D.length&&!this.W){this.W=!0;var ye=this.j;ye.g==this&&ye.ba&&!ye.M&&(ye.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),ls(ye),ye.M=!0,Re(11))}}else Wt(this.i,this.l,D,null),is(this,D);Ee==4&&Ct(this),this.o&&!this.J&&(Ee==4?Ua(this.j,this):(this.o=!1,wr(this)))}else md(this.g),h==400&&0<D.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),Ct(this),Cn(this)}}}catch{}finally{}};function ha(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Yh(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?ts:(h=Number(c.substring(h,f)),isNaN(h)?ua:(f+=1,f+h>c.length?ts:(c=c.slice(f,f+h),o.C=f+h,c)))}it.prototype.cancel=function(){this.J=!0,Ct(this)};function wr(o){o.S=Date.now()+o.I,da(o,o.I)}function da(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Pn(A(o.ba,o),c)}function rs(o){o.B&&(u.clearTimeout(o.B),o.B=null)}it.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Xh(this.i,this.A),this.L!=2&&(bn(),Re(17)),Ct(this),this.s=2,Cn(this)):da(this,this.S-o)};function Cn(o){o.j.G==0||o.J||Ua(o.j,o)}function Ct(o){rs(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,ea(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function is(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||ss(h.h,o))){if(!o.K&&ss(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Nr(h),kr(h);else break e;us(h),Re(18)}}else h.za=I[1],0<h.za-h.T&&37500>I[2]&&h.F&&h.v==0&&!h.C&&(h.C=Pn(A(h.Za,h),6e3));if(1>=ma(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Dt(h,11)}else if((o.K||h.g==o)&&Nr(h),!j(c))for(I=h.Da.g.parse(c),c=0;c<I.length;c++){let K=I[c];if(h.T=K[0],K=K[1],h.G==2)if(K[0]=="c"){h.K=K[1],h.ia=K[2];const ye=K[3];ye!=null&&(h.la=ye,h.j.info("VER="+h.la));const Ee=K[4];Ee!=null&&(h.Aa=Ee,h.j.info("SVER="+h.Aa));const Qt=K[5];Qt!=null&&typeof Qt=="number"&&0<Qt&&(f=1.5*Qt,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Oe=o.g;if(Oe){const Vr=Oe.g?Oe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vr){var R=f.h;R.g||Vr.indexOf("spdy")==-1&&Vr.indexOf("quic")==-1&&Vr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(os(R,R.h),R.h=null))}if(f.D){const hs=Oe.g?Oe.g.getResponseHeader("X-HTTP-Session-Id"):null;hs&&(f.ya=hs,Y(f.I,f.D,hs))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var D=o;if(f.qa=ja(f,f.J?f.ia:null,f.W),D.K){ga(f.h,D);var X=D,de=f.L;de&&(X.I=de),X.B&&(rs(X),wr(X)),f.g=D}else Ma(f);0<h.i.length&&Dr(h)}else K[0]!="stop"&&K[0]!="close"||Dt(h,7);else h.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Dt(h,7):cs(h):K[0]!="noop"&&h.l&&h.l.ta(K),h.v=0)}}bn(4)}catch{}}var Zh=class{constructor(o,c){this.g=o,this.map=c}};function fa(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ma(o){return o.h?1:o.g?o.g.size:0}function ss(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function os(o,c){o.g?o.g.add(c):o.h=c}function ga(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}fa.prototype.cancel=function(){if(this.i=_a(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function _a(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return O(o.i)}function ed(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function td(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function ya(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=td(o),f=ed(o),I=f.length,R=0;R<I;R++)c.call(void 0,f[R],h&&h[R],o)}var Ea=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nd(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),I=null;if(0<=f){var R=o[h].substring(0,f);I=o[h].substring(f+1)}else R=o[h];c(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function kt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof kt){this.h=o.h,Ar(this,o.j),this.o=o.o,this.g=o.g,Rr(this,o.s),this.l=o.l;var c=o.i,h=new Nn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),va(this,h),this.m=o.m}else o&&(c=String(o).match(Ea))?(this.h=!1,Ar(this,c[1]||"",!0),this.o=kn(c[2]||""),this.g=kn(c[3]||"",!0),Rr(this,c[4]),this.l=kn(c[5]||"",!0),va(this,c[6]||"",!0),this.m=kn(c[7]||"")):(this.h=!1,this.i=new Nn(null,this.h))}kt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Dn(c,Ta,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Dn(c,Ta,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Dn(h,h.charAt(0)=="/"?sd:id,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Dn(h,ad)),o.join("")};function Ge(o){return new kt(o)}function Ar(o,c,h){o.j=h?kn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Rr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function va(o,c,h){c instanceof Nn?(o.i=c,cd(o.i,o.h)):(h||(c=Dn(c,od)),o.i=new Nn(c,o.h))}function Y(o,c,h){o.i.set(c,h)}function br(o){return Y(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function kn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Dn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,rd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function rd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ta=/[#\/\?@]/g,id=/[#\?:]/g,sd=/[#\?]/g,od=/[#\?@]/g,ad=/#/g;function Nn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function st(o){o.g||(o.g=new Map,o.h=0,o.i&&nd(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Nn.prototype,n.add=function(o,c){st(this),this.i=null,o=Gt(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Ia(o,c){st(o),c=Gt(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function wa(o,c){return st(o),c=Gt(o,c),o.g.has(c)}n.forEach=function(o,c){st(this),this.g.forEach(function(h,f){h.forEach(function(I){o.call(c,I,f,this)},this)},this)},n.na=function(){st(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const I=o[f];for(let R=0;R<I.length;R++)h.push(c[f])}return h},n.V=function(o){st(this);let c=[];if(typeof o=="string")wa(this,o)&&(c=c.concat(this.g.get(Gt(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return st(this),this.i=null,o=Gt(this,o),wa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Aa(o,c,h){Ia(o,c),0<h.length&&(o.i=null,o.g.set(Gt(o,c),O(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const R=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var I=R;D[f]!==""&&(I+="="+encodeURIComponent(String(D[f]))),o.push(I)}}return this.i=o.join("&")};function Gt(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function cd(o,c){c&&!o.j&&(st(o),o.i=null,o.g.forEach(function(h,f){var I=f.toLowerCase();f!=I&&(Ia(this,f),Aa(this,I,h))},o)),o.j=c}function ud(o,c){const h=new Sn;if(u.Image){const f=new Image;f.onload=P(ot,h,"TestLoadImage: loaded",!0,c,f),f.onerror=P(ot,h,"TestLoadImage: error",!1,c,f),f.onabort=P(ot,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=P(ot,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function ld(o,c){const h=new Sn,f=new AbortController,I=setTimeout(()=>{f.abort(),ot(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?ot(h,"TestPingServer: ok",!0,c):ot(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(I),ot(h,"TestPingServer: error",!1,c)})}function ot(o,c,h,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(h)}catch{}}function hd(){this.g=new Gh}function dd(o,c,h){const f=h||"";try{ya(o,function(I,R){let D=I;d(I)&&(D=Xi(I)),c.push(f+R+"="+encodeURIComponent(D))})}catch(I){throw c.push(f+"type="+encodeURIComponent("_badmap")),I}}function Pr(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Pr,Ji),Pr.prototype.g=function(){return new Sr(this.l,this.j)},Pr.prototype.i=function(o){return function(){return o}}({});function Sr(o,c){_e.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Sr,_e),n=Sr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Vn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ra(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ra(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?On(this):Vn(this),this.readyState==3&&Ra(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,On(this))},n.Qa=function(o){this.g&&(this.response=o,On(this))},n.ga=function(){this.g&&On(this)};function On(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Vn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Vn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ba(o){let c="";return J(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function as(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=ba(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Y(o,c,h))}function te(o){_e.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(te,_e);var fd=/^https?$/i,pd=["POST","PUT"];n=te.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():es.g(),this.v=this.o?ta(this.o):ta(es),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){Pa(this,R);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)h.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),I=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(pd,c,void 0))||f||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of h)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ka(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Pa(this,R)}};function Pa(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Sa(o),Cr(o)}function Sa(o){o.A||(o.A=!0,Ae(o,"complete"),Ae(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ae(this,"complete"),Ae(this,"abort"),Cr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cr(this,!0)),te.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ca(this):this.bb())},n.bb=function(){Ca(this)};function Ca(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ke(o)!=4||o.Z()!=2)){if(o.u&&Ke(o)==4)Jo(o.Ea,0,o);else if(Ae(o,"readystatechange"),Ke(o)==4){o.h=!1;try{const D=o.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=D===0){var I=String(o.D).match(Ea)[1]||null;!I&&u.self&&u.self.location&&(I=u.self.location.protocol.slice(0,-1)),f=!fd.test(I?I.toLowerCase():"")}h=f}if(h)Ae(o,"complete"),Ae(o,"success");else{o.m=6;try{var R=2<Ke(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Sa(o)}}finally{Cr(o)}}}}function Cr(o,c){if(o.g){ka(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ae(o,"ready");try{h.onreadystatechange=f}catch{}}}function ka(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ke(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Wh(c)}};function Da(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function md(o){const c={};o=(o.g&&2<=Ke(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(j(o[f]))continue;var h=T(o[f]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[I]||[];c[I]=R,R.push(h)}v(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ln(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Na(o){this.Aa=0,this.i=[],this.j=new Sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ln("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ln("baseRetryDelayMs",5e3,o),this.cb=Ln("retryDelaySeedMs",1e4,o),this.Wa=Ln("forwardChannelMaxRetries",2,o),this.wa=Ln("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new fa(o&&o.concurrentRequestLimit),this.Da=new hd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Na.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,f){Re(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=ja(this,null,this.W),Dr(this)};function cs(o){if(Oa(o),o.G==3){var c=o.U++,h=Ge(o.I);if(Y(h,"SID",o.K),Y(h,"RID",c),Y(h,"TYPE","terminate"),Mn(o,h),c=new it(o,o.j,c),c.L=2,c.v=br(Ge(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=qa(c.j,null),c.g.ea(c.v)),c.F=Date.now(),wr(c)}Ba(o)}function kr(o){o.g&&(ls(o),o.g.cancel(),o.g=null)}function Oa(o){kr(o),o.u&&(u.clearTimeout(o.u),o.u=null),Nr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Dr(o){if(!pa(o.h)&&!o.s){o.s=!0;var c=o.Ga;vn||Ho(),Tn||(vn(),Tn=!0),ji.add(c,o),o.B=0}}function gd(o,c){return ma(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Pn(A(o.Ga,o,c),Fa(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const I=new it(this,this.j,o);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=La(this,I,c),h=Ge(this.I),Y(h,"RID",o),Y(h,"CVER",22),this.D&&Y(h,"X-HTTP-Session-Id",this.D),Mn(this,h),R&&(this.O?c="headers="+encodeURIComponent(String(ba(R)))+"&"+c:this.m&&as(h,this.m,R)),os(this.h,I),this.Ua&&Y(h,"TYPE","init"),this.P?(Y(h,"$req",c),Y(h,"SID","null"),I.T=!0,ns(I,h,null)):ns(I,h,c),this.G=2}}else this.G==3&&(o?Va(this,o):this.i.length==0||pa(this.h)||Va(this))};function Va(o,c){var h;c?h=c.l:h=o.U++;const f=Ge(o.I);Y(f,"SID",o.K),Y(f,"RID",h),Y(f,"AID",o.T),Mn(o,f),o.m&&o.o&&as(f,o.m,o.o),h=new it(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=La(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),os(o.h,h),ns(h,f,c)}function Mn(o,c){o.H&&J(o.H,function(h,f){Y(c,f,h)}),o.l&&ya({},function(h,f){Y(c,f,h)})}function La(o,c,h){h=Math.min(o.i.length,h);var f=o.l?A(o.l.Na,o.l,o):null;e:{var I=o.i;let R=-1;for(;;){const D=["count="+h];R==-1?0<h?(R=I[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let X=!0;for(let de=0;de<h;de++){let K=I[de].g;const ye=I[de].map;if(K-=R,0>K)R=Math.max(0,I[de].g-100),X=!1;else try{dd(ye,D,"req"+K+"_")}catch{f&&f(ye)}}if(X){f=D.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function Ma(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;vn||Ho(),Tn||(vn(),Tn=!0),ji.add(c,o),o.v=0}}function us(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Pn(A(o.Fa,o),Fa(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,xa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Pn(A(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),kr(this),xa(this))};function ls(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function xa(o){o.g=new it(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Ge(o.qa);Y(c,"RID","rpc"),Y(c,"SID",o.K),Y(c,"AID",o.T),Y(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&Y(c,"TO",o.ja),Y(c,"TYPE","xmlhttp"),Mn(o,c),o.m&&o.o&&as(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=br(Ge(c)),h.m=null,h.P=!0,la(h,o)}n.Za=function(){this.C!=null&&(this.C=null,kr(this),us(this),Re(19))};function Nr(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Ua(o,c){var h=null;if(o.g==c){Nr(o),ls(o),o.g=null;var f=2}else if(ss(o.h,c))h=c.D,ga(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var I=o.B;f=vr(),Ae(f,new oa(f,h)),Dr(o)}else Ma(o);else if(I=c.s,I==3||I==0&&0<c.X||!(f==1&&gd(o,c)||f==2&&us(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),I){case 1:Dt(o,5);break;case 4:Dt(o,10);break;case 3:Dt(o,6);break;default:Dt(o,2)}}}function Fa(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Dt(o,c){if(o.j.info("Error code "+c),c==2){var h=A(o.fb,o),f=o.Xa;const I=!f;f=new kt(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Ar(f,"https"),br(f),I?ud(f.toString(),h):ld(f.toString(),h)}else Re(2);o.G=0,o.l&&o.l.sa(c),Ba(o),Oa(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function Ba(o){if(o.G=0,o.ka=[],o.l){const c=_a(o.h);(c.length!=0||o.i.length!=0)&&(C(o.ka,c),C(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function ja(o,c,h){var f=h instanceof kt?Ge(h):new kt(h);if(f.g!="")c&&(f.g=c+"."+f.g),Rr(f,f.s);else{var I=u.location;f=I.protocol,c=c?c+"."+I.hostname:I.hostname,I=+I.port;var R=new kt(null);f&&Ar(R,f),c&&(R.g=c),I&&Rr(R,I),h&&(R.l=h),f=R}return h=o.D,c=o.ya,h&&c&&Y(f,h,c),Y(f,"VER",o.la),Mn(o,f),f}function qa(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new te(new Pr({eb:h})):new te(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $a(){}n=$a.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Or(){}Or.prototype.g=function(o,c){return new Ce(o,c)};function Ce(o,c){_e.call(this),this.g=new Na(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!j(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!j(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Kt(this)}k(Ce,_e),Ce.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ce.prototype.close=function(){cs(this.g)},Ce.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Xi(o),o=h);c.i.push(new Zh(c.Ya++,o)),c.G==3&&Dr(c)},Ce.prototype.N=function(){this.g.l=null,delete this.j,cs(this.g),delete this.g,Ce.aa.N.call(this)};function za(o){Yi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}k(za,Yi);function Ha(){Zi.call(this),this.status=1}k(Ha,Zi);function Kt(o){this.g=o}k(Kt,$a),Kt.prototype.ua=function(){Ae(this.g,"a")},Kt.prototype.ta=function(o){Ae(this.g,new za(o))},Kt.prototype.sa=function(o){Ae(this.g,new Ha)},Kt.prototype.ra=function(){Ae(this.g,"b")},Or.prototype.createWebChannel=Or.prototype.g,Ce.prototype.send=Ce.prototype.o,Ce.prototype.open=Ce.prototype.m,Ce.prototype.close=Ce.prototype.close,cl=function(){return new Or},al=function(){return vr()},ol=St,Vs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Tr.NO_ERROR=0,Tr.TIMEOUT=8,Tr.HTTP_ERROR=6,Kr=Tr,aa.COMPLETE="complete",sl=aa,na.EventType=Rn,Rn.OPEN="a",Rn.CLOSE="b",Rn.ERROR="c",Rn.MESSAGE="d",_e.prototype.listen=_e.prototype.K,jn=na,te.prototype.listenOnce=te.prototype.L,te.prototype.getLastError=te.prototype.Ka,te.prototype.getLastErrorCode=te.prototype.Ba,te.prototype.getStatus=te.prototype.Z,te.prototype.getResponseJson=te.prototype.Oa,te.prototype.getResponseText=te.prototype.oa,te.prototype.send=te.prototype.ea,te.prototype.setWithCredentials=te.prototype.Ha,il=te}).apply(typeof Mr<"u"?Mr:typeof self<"u"?self:typeof window<"u"?window:{});const Tc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Xs("@firebase/firestore");function Xt(){return Ft.logLevel}function N(n,...e){if(Ft.logLevel<=z.DEBUG){const t=e.map(uo);Ft.debug(`Firestore (${mn}): ${n}`,...t)}}function tt(n,...e){if(Ft.logLevel<=z.ERROR){const t=e.map(uo);Ft.error(`Firestore (${mn}): ${n}`,...t)}}function on(n,...e){if(Ft.logLevel<=z.WARN){const t=e.map(uo);Ft.warn(`Firestore (${mn}): ${n}`,...t)}}function uo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const e=`FIRESTORE (${mn}) INTERNAL ASSERTION FAILED: `+n;throw tt(e),new Error(e)}function Q(n,e){n||x()}function F(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends He{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Te.UNAUTHENTICATED))}shutdown(){}}class ug{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class lg{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},u=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new ul(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new Te(e)}}class hg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class dg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new hg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Q(this.o===void 0);const r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string"),this.R=t.token,new fg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=mg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function W(n,e){return n<e?-1:n>e?1:0}function an(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new ce(0,0))}static max(){return new U(new ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(),r===void 0?r=e.length-t:r>e.length-t&&x(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return er.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof er?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Z extends er{construct(e,t,r){return new Z(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}const gg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends er{construct(e,t,r){return new pe(e,t,r)}static isValidIdentifier(e){return gg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new V(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new V(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(Z.fromString(e))}static fromName(e){return new L(Z.fromString(e).popFirst(5))}static empty(){return new L(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new Z(e.slice()))}}function _g(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new ce(t+1,0):new ce(t,r));return new Et(i,L.empty(),e)}function yg(n){return new Et(n.readTime,n.key,-1)}class Et{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Et(U.min(),L.empty(),-1)}static max(){return new Et(U.max(),L.empty(),-1)}}function Eg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:W(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==vg)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,r)=>{t(e)})}static reject(e){return new b((t,r)=>{r(e)})}static waitFor(e){return new b((t,r)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next(i=>i?b.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new b((r,i)=>{const s=e.length,a=new Array(s);let u=0;for(let l=0;l<s;l++){const d=l;t(e[d]).next(p=>{a[d]=p,++u,u===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new b((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Ig(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function _n(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ii.oe=-1;function wi(n){return n==null}function ai(n){return n===0&&1/n==-1/0}function wg(n){return typeof n=="number"&&Number.isInteger(n)&&!ai(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ic(e)),e=Rg(n.get(t),e);return Ic(e)}function Rg(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Ic(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.comparator=e,this.root=t||fe.EMPTY}insert(e,t){return new ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xr(this.root,e,this.comparator,!0)}}class xr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??fe.RED,this.left=i??fe.EMPTY,this.right=s??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new fe(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(e,t,r,i,s){return this}insert(e,t,r){return new fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ac(this.data.getIterator())}getIteratorFrom(e){return new Ac(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class Ac{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new ke([])}unionWith(e){let t=new ue(pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return an(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dl("Invalid base64 string: "+s):s}}(e);return new me(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const bg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(n){if(Q(!!n),typeof n=="string"){let e=0;const t=bg.exec(n);if(Q(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ie(n.seconds),nanos:ie(n.nanos)}}function ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Tt(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ai(n){const e=n.mapValue.fields.__previous_value__;return lo(e)?Ai(e):e}function tr(n){const e=vt(n.mapValue.fields.__local_write_time__.timestampValue);return new ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t,r,i,s,a,u,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d}}class nr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new nr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof nr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function It(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?lo(n)?4:Cg(n)?9007199254740991:Sg(n)?10:11:x()}function $e(n,e){if(n===e)return!0;const t=It(n);if(t!==It(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return tr(n).isEqual(tr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=vt(i.timestampValue),u=vt(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Tt(i.bytesValue).isEqual(Tt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ie(i.geoPointValue.latitude)===ie(s.geoPointValue.latitude)&&ie(i.geoPointValue.longitude)===ie(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ie(i.integerValue)===ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ie(i.doubleValue),u=ie(s.doubleValue);return a===u?ai(a)===ai(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return an(n.arrayValue.values||[],e.arrayValue.values||[],$e);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(wc(a)!==wc(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!$e(a[l],u[l])))return!1;return!0}(n,e);default:return x()}}function rr(n,e){return(n.values||[]).find(t=>$e(t,e))!==void 0}function cn(n,e){if(n===e)return 0;const t=It(n),r=It(e);if(t!==r)return W(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,e.booleanValue);case 2:return function(s,a){const u=ie(s.integerValue||s.doubleValue),l=ie(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return Rc(n.timestampValue,e.timestampValue);case 4:return Rc(tr(n),tr(e));case 5:return W(n.stringValue,e.stringValue);case 6:return function(s,a){const u=Tt(s),l=Tt(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const u=s.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const p=W(u[d],l[d]);if(p!==0)return p}return W(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const u=W(ie(s.latitude),ie(a.latitude));return u!==0?u:W(ie(s.longitude),ie(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return bc(n.arrayValue,e.arrayValue);case 10:return function(s,a){var u,l,d,p;const E=s.fields||{},A=a.fields||{},P=(u=E.value)===null||u===void 0?void 0:u.arrayValue,k=(l=A.value)===null||l===void 0?void 0:l.arrayValue,O=W(((d=P?.values)===null||d===void 0?void 0:d.length)||0,((p=k?.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:bc(P,k)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ur.mapValue&&a===Ur.mapValue)return 0;if(s===Ur.mapValue)return 1;if(a===Ur.mapValue)return-1;const u=s.fields||{},l=Object.keys(u),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let E=0;E<l.length&&E<p.length;++E){const A=W(l[E],p[E]);if(A!==0)return A;const P=cn(u[l[E]],d[p[E]]);if(P!==0)return P}return W(l.length,p.length)}(n.mapValue,e.mapValue);default:throw x()}}function Rc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return W(n,e);const t=vt(n),r=vt(e),i=W(t.seconds,r.seconds);return i!==0?i:W(t.nanos,r.nanos)}function bc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=cn(t[i],r[i]);if(s)return s}return W(t.length,r.length)}function un(n){return Ls(n)}function Ls(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=vt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Tt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Ls(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Ls(t.fields[a])}`;return i+"}"}(n.mapValue):x()}function Qr(n){switch(It(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ai(n);return e?16+Qr(e):16;case 5:return 2*n.stringValue.length;case 6:return Tt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Qr(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return bt(r.fields,(s,a)=>{i+=s.length+Qr(a)}),i}(n.mapValue);default:throw x()}}function Ms(n){return!!n&&"integerValue"in n}function ho(n){return!!n&&"arrayValue"in n}function Pc(n){return!!n&&"nullValue"in n}function Sc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xr(n){return!!n&&"mapValue"in n}function Sg(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Hn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return bt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Hn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Cg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.value=e}static empty(){return new Se({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Xr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hn(t)}setAll(e){let t=pe.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=Hn(a):i.push(u.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Xr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $e(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Xr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){bt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Se(Hn(this.value))}}function fl(n){const e=[];return bt(n.fields,(t,r)=>{const i=new pe([t]);if(Xr(r)){const s=fl(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new ke(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,r,i,s,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Ie(e,0,U.min(),U.min(),U.min(),Se.empty(),0)}static newFoundDocument(e,t,r,i){return new Ie(e,1,t,U.min(),r,i,0)}static newNoDocument(e,t){return new Ie(e,2,t,U.min(),U.min(),Se.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,U.min(),U.min(),Se.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Se.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this.position=e,this.inclusive=t}}function Cc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=cn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function kc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$e(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t="asc"){this.field=e,this.dir=t}}function kg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{}class ae extends pl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ng(e,t,r):t==="array-contains"?new Lg(e,r):t==="in"?new Mg(e,r):t==="not-in"?new xg(e,r):t==="array-contains-any"?new Ug(e,r):new ae(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Og(e,r):new Vg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(cn(t,this.value)):t!==null&&It(this.value)===It(t)&&this.matchesComparison(cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ze extends pl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ze(e,t)}matches(e){return ml(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ml(n){return n.op==="and"}function gl(n){return Dg(n)&&ml(n)}function Dg(n){for(const e of n.filters)if(e instanceof ze)return!1;return!0}function xs(n){if(n instanceof ae)return n.field.canonicalString()+n.op.toString()+un(n.value);if(gl(n))return n.filters.map(e=>xs(e)).join(",");{const e=n.filters.map(t=>xs(t)).join(",");return`${n.op}(${e})`}}function _l(n,e){return n instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&$e(r.value,i.value)}(n,e):n instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,u)=>s&&_l(a,i.filters[u]),!0):!1}(n,e):void x()}function yl(n){return n instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${un(t.value)}`}(n):n instanceof ze?function(t){return t.op.toString()+" {"+t.getFilters().map(yl).join(" ,")+"}"}(n):"Filter"}class Ng extends ae{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Og extends ae{constructor(e,t){super(e,"in",t),this.keys=El("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Vg extends ae{constructor(e,t){super(e,"not-in",t),this.keys=El("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function El(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class Lg extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ho(t)&&rr(t.arrayValue,this.value)}}class Mg extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&rr(this.value.arrayValue,t)}}class xg extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(rr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!rr(this.value.arrayValue,t)}}class Ug extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ho(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>rr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.ue=null}}function Dc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Fg(n,e,t,r,i,s,a)}function fo(n){const e=F(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>xs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>un(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>un(r)).join(",")),e.ue=t}return e.ue}function po(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!kg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!_l(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!kc(n.startAt,e.startAt)&&kc(n.endAt,e.endAt)}function Us(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Bg(n,e,t,r,i,s,a,u){return new Ri(n,e,t,r,i,s,a,u)}function vl(n){return new Ri(n)}function Nc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jg(n){return n.collectionGroup!==null}function Wn(n){const e=F(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ue(pe.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ui(s,r))}),t.has(pe.keyField().canonicalString())||e.ce.push(new ui(pe.keyField(),r))}return e.ce}function je(n){const e=F(n);return e.le||(e.le=qg(e,Wn(n))),e.le}function qg(n,e){if(n.limitType==="F")return Dc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ui(i.field,s)});const t=n.endAt?new ci(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ci(n.startAt.position,n.startAt.inclusive):null;return Dc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Fs(n,e,t){return new Ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bi(n,e){return po(je(n),je(e))&&n.limitType===e.limitType}function Tl(n){return`${fo(je(n))}|lt:${n.limitType}`}function Jt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>yl(i)).join(", ")}]`),wi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>un(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>un(i)).join(",")),`Target(${r})`}(je(n))}; limitType=${n.limitType})`}function Pi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Wn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,l){const d=Cc(a,u,l);return a.inclusive?d<=0:d<0}(r.startAt,Wn(r),i)||r.endAt&&!function(a,u,l){const d=Cc(a,u,l);return a.inclusive?d>=0:d>0}(r.endAt,Wn(r),i))}(n,e)}function $g(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Il(n){return(e,t)=>{let r=!1;for(const i of Wn(n)){const s=zg(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function zg(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(s,a,u){const l=a.data.field(s),d=u.data.field(s);return l!==null&&d!==null?cn(l,d):x()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new ee(L.comparator);function nt(){return Hg}const wl=new ee(L.comparator);function qn(...n){let e=wl;for(const t of n)e=e.insert(t.key,t);return e}function Al(n){let e=wl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ot(){return Gn()}function Rl(){return Gn()}function Gn(){return new zt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Wg=new ee(L.comparator),Gg=new ue(L.comparator);function H(...n){let e=Gg;for(const t of n)e=e.add(t);return e}const Kg=new ue(W);function Qg(){return Kg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ai(e)?"-0":e}}function bl(n){return{integerValue:""+n}}function Xg(n,e){return wg(e)?bl(e):mo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this._=void 0}}function Jg(n,e,t){return n instanceof li?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&lo(s)&&(s=Ai(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof ln?Sl(n,e):n instanceof ir?Cl(n,e):function(i,s){const a=Pl(i,s),u=Oc(a)+Oc(i.Pe);return Ms(a)&&Ms(i.Pe)?bl(u):mo(i.serializer,u)}(n,e)}function Yg(n,e,t){return n instanceof ln?Sl(n,e):n instanceof ir?Cl(n,e):t}function Pl(n,e){return n instanceof hi?function(r){return Ms(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class li extends Si{}class ln extends Si{constructor(e){super(),this.elements=e}}function Sl(n,e){const t=kl(e);for(const r of n.elements)t.some(i=>$e(i,r))||t.push(r);return{arrayValue:{values:t}}}class ir extends Si{constructor(e){super(),this.elements=e}}function Cl(n,e){let t=kl(e);for(const r of n.elements)t=t.filter(i=>!$e(i,r));return{arrayValue:{values:t}}}class hi extends Si{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Oc(n){return ie(n.integerValue||n.doubleValue)}function kl(n){return ho(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t){this.field=e,this.transform=t}}function e_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ln&&i instanceof ln||r instanceof ir&&i instanceof ir?an(r.elements,i.elements,$e):r instanceof hi&&i instanceof hi?$e(r.Pe,i.Pe):r instanceof li&&i instanceof li}(n.transform,e.transform)}class t_{constructor(e,t){this.version=e,this.transformResults=t}}class Ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ci{}function Dl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new go(n.key,Ve.none()):new hr(n.key,n.data,Ve.none());{const t=n.data,r=Se.empty();let i=new ue(pe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Pt(n.key,r,new ke(i.toArray()),Ve.none())}}function n_(n,e,t){n instanceof hr?function(i,s,a){const u=i.value.clone(),l=Lc(i.fieldTransforms,s,a.transformResults);u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Pt?function(i,s,a){if(!Jr(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=Lc(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(Nl(i)),l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Kn(n,e,t,r){return n instanceof hr?function(s,a,u,l){if(!Jr(s.precondition,a))return u;const d=s.value.clone(),p=Mc(s.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Pt?function(s,a,u,l){if(!Jr(s.precondition,a))return u;const d=Mc(s.fieldTransforms,l,a),p=a.data;return p.setAll(Nl(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(E=>E.field))}(n,e,t,r):function(s,a,u){return Jr(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function r_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Pl(r.transform,i||null);s!=null&&(t===null&&(t=Se.empty()),t.set(r.field,s))}return t||null}function Vc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&an(r,i,(s,a)=>e_(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hr extends Ci{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pt extends Ci{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Nl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Lc(n,e,t){const r=new Map;Q(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,Yg(a,u,t[i]))}return r}function Mc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,Jg(s,a,e))}return r}class go extends Ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class i_ extends Ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&n_(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Kn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Kn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Rl();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;const l=Dl(a,u);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),H())}isEqual(e){return this.batchId===e.batchId&&an(this.mutations,e.mutations,(t,r)=>Vc(t,r))&&an(this.baseMutations,e.baseMutations,(t,r)=>Vc(t,r))}}class _o{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Q(e.mutations.length===r.length);let i=function(){return Wg}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new _o(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe,G;function c_(n){switch(n){default:return x();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Ol(n){if(n===void 0)return tt("GRPC error has no .code"),S.UNKNOWN;switch(n){case oe.OK:return S.OK;case oe.CANCELLED:return S.CANCELLED;case oe.UNKNOWN:return S.UNKNOWN;case oe.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case oe.INTERNAL:return S.INTERNAL;case oe.UNAVAILABLE:return S.UNAVAILABLE;case oe.UNAUTHENTICATED:return S.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case oe.NOT_FOUND:return S.NOT_FOUND;case oe.ALREADY_EXISTS:return S.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return S.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case oe.ABORTED:return S.ABORTED;case oe.OUT_OF_RANGE:return S.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return S.UNIMPLEMENTED;case oe.DATA_LOSS:return S.DATA_LOSS;default:return x()}}(G=oe||(oe={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=new Vt([4294967295,4294967295],0);function xc(n){const e=u_().encode(n),t=new rl;return t.update(e),new Uint8Array(t.digest())}function Uc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Vt([t,r],0),new Vt([i,s],0)]}class yo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new $n(`Invalid padding: ${t}`);if(r<0)throw new $n(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $n(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new $n(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Vt.fromNumber(this.Te)}Ee(e,t,r){let i=e.add(t.multiply(Vt.fromNumber(r)));return i.compare(l_)===1&&(i=new Vt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=xc(e),[r,i]=Uc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new yo(s,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Te===0)return;const t=xc(e),[r,i]=Uc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class $n extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,dr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ki(U.min(),i,new ee(W),nt(),H())}}class dr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new dr(r,t,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Vl{constructor(e,t){this.targetId=e,this.me=t}}class Ll{constructor(e,t,r=me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Fc{constructor(){this.fe=0,this.ge=Bc(),this.pe=me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=H(),t=H(),r=H();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:x()}}),new dr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Bc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class h_{constructor(e){this.Le=e,this.Be=new Map,this.ke=nt(),this.qe=Fr(),this.Qe=Fr(),this.Ke=new ee(W)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:x()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){const s=i.target;if(Us(s))if(r===0){const a=new L(s.path);this.We(t,a,Ie.newNoDocument(a,U.min()))}else Q(r===1);else{const a=this.Ze(t);if(a!==r){const u=this.Xe(e),l=u?this.et(u,e,a):1;if(l!==0){this.He(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,u;try{a=Tt(r).toUint8Array()}catch(l){if(l instanceof dl)return on("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new yo(a,i,s)}catch(l){return on(l instanceof $n?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Te===0?null:u}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.nt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.Be.forEach((s,a)=>{const u=this.Ye(a);if(u){if(s.current&&Us(u.target)){const l=new L(u.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,Ie.newNoDocument(l,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=H();this.Qe.forEach((s,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.Ye(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new ki(e,t,this.Ke,this.ke,r);return this.ke=nt(),this.qe=Fr(),this.Qe=Fr(),this.Ke=new ee(W),i}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Fc,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new ue(W),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ue(W),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Fc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Fr(){return new ee(L.comparator)}function Bc(){return new ee(L.comparator)}const d_={asc:"ASCENDING",desc:"DESCENDING"},f_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},p_={and:"AND",or:"OR"};class m_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bs(n,e){return n.useProto3Json||wi(e)?e:{value:e}}function di(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ml(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function g_(n,e){return di(n,e.toTimestamp())}function qe(n){return Q(!!n),U.fromTimestamp(function(t){const r=vt(t);return new ce(r.seconds,r.nanos)}(n))}function Eo(n,e){return js(n,e).canonicalString()}function js(n,e){const t=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xl(n){const e=Z.fromString(n);return Q(ql(e)),e}function qs(n,e){return Eo(n.databaseId,e.path)}function Es(n,e){const t=xl(e);if(t.get(1)!==n.databaseId.projectId)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Fl(t))}function Ul(n,e){return Eo(n.databaseId,e)}function __(n){const e=xl(n);return e.length===4?Z.emptyPath():Fl(e)}function $s(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fl(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function jc(n,e,t){return{name:qs(n,e),fields:t.value.mapValue.fields}}function y_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(Q(p===void 0||typeof p=="string"),me.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array),me.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?S.UNKNOWN:Ol(d.code);return new V(p,d.message||"")}(a);t=new Ll(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Es(n,r.document.name),s=qe(r.document.updateTime),a=r.document.createTime?qe(r.document.createTime):U.min(),u=new Se({mapValue:{fields:r.document.fields}}),l=Ie.newFoundDocument(i,s,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Yr(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Es(n,r.document),s=r.readTime?qe(r.readTime):U.min(),a=Ie.newNoDocument(i,s),u=r.removedTargetIds||[];t=new Yr([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Es(n,r.document),s=r.removedTargetIds||[];t=new Yr([],s,i,null)}else{if(!("filter"in e))return x();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new a_(i,s),u=r.targetId;t=new Vl(u,a)}}return t}function E_(n,e){let t;if(e instanceof hr)t={update:jc(n,e.key,e.value)};else if(e instanceof go)t={delete:qs(n,e.key)};else if(e instanceof Pt)t={update:jc(n,e.key,e.data),updateMask:S_(e.fieldMask)};else{if(!(e instanceof i_))return x();t={verify:qs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const u=a.transform;if(u instanceof li)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof ln)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof ir)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof hi)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw x()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:g_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:x()}(n,e.precondition)),t}function v_(n,e){return n&&n.length>0?(Q(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?qe(i.updateTime):qe(s);return a.isEqual(U.min())&&(a=qe(s)),new t_(a,i.transformResults||[])}(t,e))):[]}function T_(n,e){return{documents:[Ul(n,e.path)]}}function I_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ul(n,i);const s=function(d){if(d.length!==0)return jl(ze.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:Yt(A.field),direction:R_(A.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Bs(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:i}}function w_(n){let e=__(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Q(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(E){const A=Bl(E);return A instanceof ze&&gl(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(E){return E.map(A=>function(k){return new ui(Zt(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(A))}(t.orderBy));let u=null;t.limit&&(u=function(E){let A;return A=typeof E=="object"?E.value:E,wi(A)?null:A}(t.limit));let l=null;t.startAt&&(l=function(E){const A=!!E.before,P=E.values||[];return new ci(P,A)}(t.startAt));let d=null;return t.endAt&&(d=function(E){const A=!E.before,P=E.values||[];return new ci(P,A)}(t.endAt)),Bg(e,i,a,s,u,"F",l,d)}function A_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Zt(t.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Zt(t.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zt(t.unaryFilter.field);return ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Zt(t.unaryFilter.field);return ae.create(a,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(t){return ae.create(Zt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ze.create(t.compositeFilter.filters.map(r=>Bl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(n):x()}function R_(n){return d_[n]}function b_(n){return f_[n]}function P_(n){return p_[n]}function Yt(n){return{fieldPath:n.canonicalString()}}function Zt(n){return pe.fromServerFormat(n.fieldPath)}function jl(n){return n instanceof ae?function(t){if(t.op==="=="){if(Sc(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NAN"}};if(Pc(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sc(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NOT_NAN"}};if(Pc(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(t.field),op:b_(t.op),value:t.value}}}(n):n instanceof ze?function(t){const r=t.getFilters().map(i=>jl(i));return r.length===1?r[0]:{compositeFilter:{op:P_(t.op),filters:r}}}(n):x()}function S_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ql(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,r,i,s=U.min(),a=U.min(),u=me.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.ht=e}}function k_(n){const e=w_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fs(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.ln=new N_}addToCollectionParentIndex(e,t){return this.ln.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(Et.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(Et.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class N_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ue(Z.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ue(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Pe{static withCacheSize(e){return new Pe(e,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe.DEFAULT_COLLECTION_PERCENTILE=10,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pe.DEFAULT=new Pe(41943040,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pe.DISABLED=new Pe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new hn(0)}static Qn(){return new hn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c([n,e],[t,r]){const i=W(n,t);return i===0?W(e,r):i}class O_{constructor(e){this.Gn=e,this.buffer=new ue($c),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();$c(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class V_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){_n(t)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await gn(t)}await this.Yn(3e5)})}}class L_{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Ii.oe);const r=new O_(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(qc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qc):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,s,a,u,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),i=this.params.maximumSequenceNumbersToCollect):i=E,a=Date.now(),this.nthSequenceNumber(e,i))).next(E=>(r=E,u=Date.now(),this.removeTargets(e,r,t))).next(E=>(s=E,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(E=>(d=Date.now(),Xt()<=z.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(l-u)+`ms
	Removed ${E} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:E})))}}function M_(n,e){return new L_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.changes=new zt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Kn(r.mutation,i,ke.empty(),ce.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,t,r=H()){const i=Ot();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=qn();return s.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ot();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,H()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let s=nt();const a=Gn(),u=function(){return Gn()}();return t.forEach((l,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Pt)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Kn(p.mutation,d,p.mutation.getFieldMask(),ce.now())):a.set(d.key,ke.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var E;return u.set(d,new U_(p,(E=a.get(d))!==null&&E!==void 0?E:null))}),u))}recalculateAndSaveOverlays(e,t){const r=Gn();let i=new ee((a,u)=>a-u),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||ke.empty();p=u.applyToLocalView(d,p),r.set(l,p);const E=(i.get(u.batchId)||H()).add(l);i=i.insert(u.batchId,E)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,p=l.value,E=Rl();p.forEach(A=>{if(!s.has(A)){const P=Dl(t.get(A),r.get(A));P!==null&&E.set(A,P),s=s.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,E))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):b.resolve(Ot());let u=-1,l=s;return a.next(d=>b.forEach(d,(p,E)=>(u<E.largestBatchId&&(u=E.largestBatchId),s.get(p)?b.resolve():this.remoteDocumentCache.getEntry(e,p).next(A=>{l=l.insert(p,A)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,H())).next(p=>({batchId:u,changes:Al(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=qn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=qn();return this.indexManager.getCollectionParents(e,s).next(u=>b.forEach(u,l=>{const d=function(E,A){return new Ri(A,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((E,A)=>{a=a.insert(E,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ie.newInvalidDocument(p)))});let u=qn();return a.forEach((l,d)=>{const p=s.get(l);p!==void 0&&Kn(p.mutation,d,ke.empty(),ce.now()),Pi(t,d)&&(u=u.insert(l,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return b.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:qe(i.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:k_(i.bundledQuery),readTime:qe(i.readTime)}}(t)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.overlays=new ee(L.comparator),this.Er=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ot();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Tt(e,t,s)}),b.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const i=Ot(),s=t.length+1,a=new L(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ee((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Ot(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Ot(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return b.resolve(u)}Tt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new o_(t,r));let s=this.Er.get(t);s===void 0&&(s=H(),this.Er.set(t,s)),this.Er.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.dr=new ue(le.Ar),this.Rr=new ue(le.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const r=new le(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new le(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new L(new Z([])),r=new le(t,e),i=new le(t,e+1),s=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new L(new Z([])),r=new le(t,e),i=new le(t,e+1);let s=H();return this.Rr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new le(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class le{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return L.comparator(e.key,t.key)||W(e.br,t.br)}static Vr(e,t){return W(e.br,t.br)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new ue(le.Ar)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new s_(s,t,r,i);this.mutationQueue.push(a);for(const u of i)this.vr=this.vr.add(new le(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Fr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new le(t,0),i=new le(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],a=>{const u=this.Cr(a.br);s.push(u)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ue(W);return t.forEach(i=>{const s=new le(i,0),a=new le(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],u=>{r=r.add(u.br)})}),b.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const a=new le(new L(s),0);let u=new ue(W);return this.vr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(l.br)),!0)},a),b.resolve(this.Mr(u))}Mr(e){const t=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Q(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return b.forEach(t.mutations,i=>{const s=new le(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){const r=new le(t,0),i=this.vr.firstAfterOrEqual(r);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.Nr=e,this.docs=function(){return new ee(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let r=nt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ie.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=nt();const a=t.path,u=new L(a.child("")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Eg(yg(p),r)<=0||(i.has(p.key)||Pi(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,t,r,i){x()}Lr(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new H_(this)}getSize(e){return b.resolve(this.size)}}class H_ extends x_{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.persistence=e,this.Br=new zt(t=>fo(t),po),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.kr=0,this.qr=new vo,this.targetCount=0,this.Qr=hn.qn()}forEachTarget(e,t){return this.Br.forEach((r,i)=>t(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),b.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new hn(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Un(t),b.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Br.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Br.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.Br.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Ii(0),this.Ur=!1,this.Ur=!0,this.Wr=new q_,this.referenceDelegate=e(this),this.Gr=new W_(this),this.indexManager=new D_,this.remoteDocumentCache=function(i){return new z_(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new C_(t),this.jr=new B_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new j_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new $_(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const i=new G_(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return b.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class G_ extends Tg{constructor(e){super(),this.currentSequenceNumber=e}}class To{constructor(e){this.persistence=e,this.Zr=new vo,this.Xr=null}static ei(e){return new To(e)}get ti(){if(this.Xr)return this.Xr;throw x()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),b.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.ti,r=>{const i=L.fromPath(r);return this.ni(e,i).next(s=>{s||t.removeEntry(i,U.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return b.or([()=>b.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class fi{constructor(e,t){this.persistence=e,this.ri=new zt(r=>Ag(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=M_(this,t)}static ei(e,t){return new fi(e,t)}Hr(){}Jr(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return b.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?b.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(u=>{u||(r++,s.removeEntry(a,U.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),b.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qr(e.data.value)),t}ir(e,t,r){return b.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=H(),i=H();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Io(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Dd()?8:Ig(we())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Xi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new K_;return this.ts(e,t,a).next(u=>{if(s.result=u,this.Hi)return this.ns(e,t,a,u.size)})}).next(()=>s.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(Xt()<=z.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Jt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),b.resolve()):(Xt()<=z.DEBUG&&N("QueryEngine","Query:",Jt(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Xt()<=z.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Jt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,je(t))):b.resolve())}Xi(e,t){if(Nc(t))return b.resolve(null);let r=je(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Fs(t,null,"F"),r=je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=H(...s);return this.Zi.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.rs(t,u);return this.ss(t,d,a,l.readTime)?this.Xi(e,Fs(t,null,"F")):this.os(e,d,t,l)}))})))}es(e,t,r,i){return Nc(t)||i.isEqual(U.min())?b.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const a=this.rs(t,s);return this.ss(t,a,r,i)?b.resolve(null):(Xt()<=z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jt(t)),this.os(e,a,t,_g(i,-1)).next(u=>u))})}rs(e,t){let r=new ue(Il(e));return t.forEach((i,s)=>{Pi(e,s)&&(r=r.add(s))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,r){return Xt()<=z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Jt(t)),this.Zi.getDocumentsMatchingQuery(e,t,Et.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new ee(W),this.cs=new zt(s=>fo(s),po),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new F_(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function J_(n,e,t,r){return new X_(n,e,t,r)}async function zl(n,e){const t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],u=[];let l=H();for(const d of i){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of s){u.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:u}))})})}function Y_(n,e){const t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(u,l,d,p){const E=d.batch,A=E.keys();let P=b.resolve();return A.forEach(k=>{P=P.next(()=>p.getEntry(l,k)).next(O=>{const C=d.docVersions.get(k);Q(C!==null),O.version.compareTo(C)<0&&(E.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(l,E))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=H();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Hl(n){const e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function Z_(n,e){const t=F(n),r=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const u=[];e.targetChanges.forEach((p,E)=>{const A=i.get(E);if(!A)return;u.push(t.Gr.removeMatchingKeys(s,p.removedDocuments,E).next(()=>t.Gr.addMatchingKeys(s,p.addedDocuments,E)));let P=A.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(E)!==null?P=P.withResumeToken(me.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),i=i.insert(E,P),function(O,C,q){return O.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(A,P,p)&&u.push(t.Gr.updateTargetData(s,P))});let l=nt(),d=H();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),u.push(ey(s,a,e.documentUpdates).next(p=>{l=p.Is,d=p.Es})),!r.isEqual(U.min())){const p=t.Gr.getLastRemoteSnapshotVersion(s).next(E=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(p)}return b.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.us=i,s))}function ey(n,e,t){let r=H(),i=H();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=nt();return t.forEach((u,l)=>{const d=s.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):N("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Is:a,Es:i}})}function ty(n,e){const t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ny(n,e){const t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):t.Gr.allocateTargetId(r).next(a=>(i=new ft(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function zs(n,e,t){const r=F(n),i=r.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!_n(a))throw a;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function zc(n,e,t){const r=F(n);let i=U.min(),s=H();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){const E=F(l),A=E.cs.get(p);return A!==void 0?b.resolve(E.us.get(A)):E.Gr.getTargetData(d,p)}(r,a,je(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,u.targetId).next(l=>{s=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?i:U.min(),t?s:H())).next(u=>(ry(r,$g(e),u),{documents:u,ds:s})))}function ry(n,e,t){let r=n.ls.get(e)||U.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ls.set(e,r)}class Hc{constructor(){this.activeTargetIds=Qg()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iy{constructor(){this._o=new Hc,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Hc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Br=null;function vs(){return Br===null?Br=function(){return 268435456+Math.round(2147483648*Math.random())}():Br++,"0x"+Br.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="WebChannelConnection";class cy extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,r,i,s,a){const u=vs(),l=this.No(t,r.toUriEncodedString());N("RestConnection",`Sending RPC '${t}' ${u}:`,l,i);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,s,a),this.Bo(t,l,d,i).then(p=>(N("RestConnection",`Received RPC '${t}' ${u}: `,p),p),p=>{throw on("RestConnection",`RPC '${t}' ${u} failed with error: `,p,"url: ",l,"request:",i),p})}ko(t,r,i,s,a,u){return this.Oo(t,r,i,s,a)}Lo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}No(t,r){const i=oy[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,i){const s=vs();return new Promise((a,u)=>{const l=new il;l.setWithCredentials(!0),l.listenOnce(sl.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Kr.NO_ERROR:const p=l.getResponseJson();N(ve,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case Kr.TIMEOUT:N(ve,`RPC '${e}' ${s} timed out`),u(new V(S.DEADLINE_EXCEEDED,"Request time out"));break;case Kr.HTTP_ERROR:const E=l.getStatus();if(N(ve,`RPC '${e}' ${s} failed with status:`,E,"response text:",l.getResponseText()),E>0){let A=l.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A?.error;if(P&&P.status&&P.message){const k=function(C){const q=C.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(q)>=0?q:S.UNKNOWN}(P.status);u(new V(k,P.message))}else u(new V(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new V(S.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{N(ve,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);N(ve,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",d,r,15)})}qo(e,t,r){const i=vs(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=cl(),u=al(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=s.join("");N(ve,`Creating RPC '${e}' stream ${i}: ${p}`,l);const E=a.createWebChannel(p,l);let A=!1,P=!1;const k=new ay({Eo:C=>{P?N(ve,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(A||(N(ve,`Opening RPC '${e}' stream ${i} transport.`),E.open(),A=!0),N(ve,`RPC '${e}' stream ${i} sending:`,C),E.send(C))},Ao:()=>E.close()}),O=(C,q,j)=>{C.listen(q,B=>{try{j(B)}catch($){setTimeout(()=>{throw $},0)}})};return O(E,jn.EventType.OPEN,()=>{P||(N(ve,`RPC '${e}' stream ${i} transport opened.`),k.So())}),O(E,jn.EventType.CLOSE,()=>{P||(P=!0,N(ve,`RPC '${e}' stream ${i} transport closed`),k.Do())}),O(E,jn.EventType.ERROR,C=>{P||(P=!0,on(ve,`RPC '${e}' stream ${i} transport errored:`,C),k.Do(new V(S.UNAVAILABLE,"The operation could not be completed")))}),O(E,jn.EventType.MESSAGE,C=>{var q;if(!P){const j=C.data[0];Q(!!j);const B=j,$=B?.error||((q=B[0])===null||q===void 0?void 0:q.error);if($){N(ve,`RPC '${e}' stream ${i} received error:`,$);const he=$.status;let J=function(_){const y=oe[_];if(y!==void 0)return Ol(y)}(he),v=$.message;J===void 0&&(J=S.INTERNAL,v="Unknown error status: "+he+" with message "+$.message),P=!0,k.Do(new V(J,v)),E.close()}else N(ve,`RPC '${e}' stream ${i} received:`,j),k.vo(j)}}),O(u,ol.STAT_EVENT,C=>{C.stat===Vs.PROXY?N(ve,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Vs.NOPROXY&&N(ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.bo()},0),k}}function Ts(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n){return new m_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t,r,i,s,a,u,l){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Wl(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(tt(t.toString()),tt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{const i=new V(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uy extends Gl{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=y_(this.serializer,e),r=function(s){if(!("targetChange"in s))return U.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?qe(a.readTime):U.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=$s(this.serializer),t.addTarget=function(s,a){let u;const l=a.target;if(u=Us(l)?{documents:T_(s,l)}:{query:I_(s,l).ct},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Ml(s,a.resumeToken);const d=Bs(s,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=di(s,a.snapshotVersion.toTimestamp());const d=Bs(s,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=A_(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=$s(this.serializer),t.removeTarget=e,this.c_(t)}}class ly extends Gl{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=v_(e.writeResults,e.commitTime),r=qe(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=$s(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>E_(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,js(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(S.UNKNOWN,s.toString())})}ko(e,t,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.ko(e,js(t,r),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(S.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class dy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(tt(t),this.C_=!1):N("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{Ht(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=F(l);d.k_.add(4),await fr(d),d.K_.set("Unknown"),d.k_.delete(4),await Ni(d)}(this))})}),this.K_=new dy(r,i)}}async function Ni(n){if(Ht(n))for(const e of n.q_)await e(!0)}async function fr(n){for(const e of n.q_)await e(!1)}function Kl(n,e){const t=F(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),bo(t)?Ro(t):yn(t).s_()&&Ao(t,e))}function wo(n,e){const t=F(n),r=yn(t);t.B_.delete(e),r.s_()&&Ql(t,e),t.B_.size===0&&(r.s_()?r.a_():Ht(t)&&t.K_.set("Unknown"))}function Ao(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}yn(n).V_(e)}function Ql(n,e){n.U_.xe(e),yn(n).m_(e)}function Ro(n){n.U_=new h_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),yn(n).start(),n.K_.F_()}function bo(n){return Ht(n)&&!yn(n).i_()&&n.B_.size>0}function Ht(n){return F(n).k_.size===0}function Xl(n){n.U_=void 0}async function py(n){n.K_.set("Online")}async function my(n){n.B_.forEach((e,t)=>{Ao(n,e)})}async function gy(n,e){Xl(n),bo(n)?(n.K_.O_(e),Ro(n)):n.K_.set("Unknown")}async function _y(n,e,t){if(n.K_.set("Online"),e instanceof Ll&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.B_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.B_.delete(u),i.U_.removeTarget(u))}(n,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pi(n,r)}else if(e instanceof Yr?n.U_.$e(e):e instanceof Vl?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(U.min()))try{const r=await Hl(n.localStore);t.compareTo(r)>=0&&await function(s,a){const u=s.U_.it(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=s.B_.get(d);p&&s.B_.set(d,p.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const p=s.B_.get(l);if(!p)return;s.B_.set(l,p.withResumeToken(me.EMPTY_BYTE_STRING,p.snapshotVersion)),Ql(s,l);const E=new ft(p.target,l,d,p.sequenceNumber);Ao(s,E)}),s.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await pi(n,r)}}async function pi(n,e,t){if(!_n(e))throw e;n.k_.add(1),await fr(n),n.K_.set("Offline"),t||(t=()=>Hl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Ni(n)})}function Jl(n,e){return e().catch(t=>pi(n,t,e))}async function Oi(n){const e=F(n),t=wt(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;yy(e);)try{const i=await ty(e.localStore,r);if(i===null){e.L_.length===0&&t.a_();break}r=i.batchId,Ey(e,i)}catch(i){await pi(e,i)}Yl(e)&&Zl(e)}function yy(n){return Ht(n)&&n.L_.length<10}function Ey(n,e){n.L_.push(e);const t=wt(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Yl(n){return Ht(n)&&!wt(n).i_()&&n.L_.length>0}function Zl(n){wt(n).start()}async function vy(n){wt(n).w_()}async function Ty(n){const e=wt(n);for(const t of n.L_)e.g_(t.mutations)}async function Iy(n,e,t){const r=n.L_.shift(),i=_o.from(r,e,t);await Jl(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Oi(n)}async function wy(n,e){e&&wt(n).f_&&await async function(r,i){if(function(a){return c_(a)&&a!==S.ABORTED}(i.code)){const s=r.L_.shift();wt(r).__(),await Jl(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Oi(r)}}(n,e),Yl(n)&&Zl(n)}async function Gc(n,e){const t=F(n);t.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=Ht(t);t.k_.add(3),await fr(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Ni(t)}async function Ay(n,e){const t=F(n);e?(t.k_.delete(2),await Ni(t)):e||(t.k_.add(2),await fr(t),t.K_.set("Unknown"))}function yn(n){return n.W_||(n.W_=function(t,r,i){const s=F(t);return s.b_(),new uy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:py.bind(null,n),mo:my.bind(null,n),po:gy.bind(null,n),R_:_y.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),bo(n)?Ro(n):n.K_.set("Unknown")):(await n.W_.stop(),Xl(n))})),n.W_}function wt(n){return n.G_||(n.G_=function(t,r,i){const s=F(t);return s.b_(),new ly(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:vy.bind(null,n),po:wy.bind(null,n),p_:Ty.bind(null,n),y_:Iy.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Oi(n)):(await n.G_.stop(),n.L_.length>0&&(N("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,u=new Po(e,t,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function So(n,e){if(tt("AsyncQueue",`${e}: ${n}`),_n(n))return new V(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{static emptySet(e){return new sn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=qn(),this.sortedSet=new ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new sn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.z_=new ee(L.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):x():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class dn{constructor(e,t,r,i,s,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new dn(e,t,sn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class by{constructor(){this.queries=Qc(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const i=F(t),s=i.queries;i.queries=Qc(),s.forEach((a,u)=>{for(const l of u.J_)l.onError(r)})})(this,new V(S.ABORTED,"Firestore shutting down"))}}function Qc(){return new zt(n=>Tl(n),bi)}async function Py(n,e){const t=F(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new Ry,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=So(a,`Initialization of query '${Jt(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&Co(t)}async function Sy(n,e){const t=F(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.J_.indexOf(e);a>=0&&(s.J_.splice(a,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Cy(n,e){const t=F(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const u of a.J_)u.ta(i)&&(r=!0);a.H_=i}}r&&Co(t)}function ky(n,e,t){const r=F(n),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(t);r.queries.delete(e)}function Co(n){n.X_.forEach(e=>{e.next()})}var Hs,Xc;(Xc=Hs||(Hs={})).na="default",Xc.Cache="cache";class Dy{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new dn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=dn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Hs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.key=e}}class th{constructor(e){this.key=e}}class Ny{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=H(),this.mutatedKeys=H(),this.Va=Il(e),this.ma=new sn(this.Va)}get fa(){return this.da}ga(e,t){const r=t?t.pa:new Kc,i=t?t.ma:this.ma;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,E)=>{const A=i.get(p),P=Pi(this.query,E)?E:null,k=!!A&&this.mutatedKeys.has(A.key),O=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let C=!1;A&&P?A.data.isEqual(P.data)?k!==O&&(r.track({type:3,doc:P}),C=!0):this.ya(A,P)||(r.track({type:2,doc:P}),C=!0,(l&&this.Va(P,l)>0||d&&this.Va(P,d)<0)&&(u=!0)):!A&&P?(r.track({type:0,doc:P}),C=!0):A&&!P&&(r.track({type:1,doc:A}),C=!0,(l||d)&&(u=!0)),C&&(P?(a=a.add(P),s=O?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{ma:a,pa:r,ss:u,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((p,E)=>function(P,k){const O=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return O(P)-O(k)}(p.type,E.type)||this.Va(p.doc,E.doc)),this.wa(r),i=i!=null&&i;const u=t&&!i?this.Sa():[],l=this.Ra.size===0&&this.current&&!i?1:0,d=l!==this.Aa;return this.Aa=l,a.length!==0||d?{snapshot:new dn(this.query,e.ma,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:u}:{ba:u}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Kc,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=H(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new th(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new eh(r))}),t}va(e){this.da=e.ds,this.Ra=H();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return dn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Oy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Vy{constructor(e){this.key=e,this.Fa=!1}}class Ly{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new zt(u=>Tl(u),bi),this.Oa=new Map,this.Na=new Set,this.La=new ee(L.comparator),this.Ba=new Map,this.ka=new vo,this.qa={},this.Qa=new Map,this.Ka=hn.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function My(n,e,t=!0){const r=ah(n);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await nh(r,e,t,!0),i}async function xy(n,e){const t=ah(n);await nh(t,e,!0,!1)}async function nh(n,e,t,r){const i=await ny(n.localStore,je(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let u;return r&&(u=await Uy(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Kl(n.remoteStore,i),u}async function Uy(n,e,t,r,i){n.Ua=(E,A,P)=>async function(O,C,q,j){let B=C.view.ga(q);B.ss&&(B=await zc(O.localStore,C.query,!1).then(({documents:v})=>C.view.ga(v,B)));const $=j&&j.targetChanges.get(C.targetId),he=j&&j.targetMismatches.get(C.targetId)!=null,J=C.view.applyChanges(B,O.isPrimaryClient,$,he);return Yc(O,C.targetId,J.ba),J.snapshot}(n,E,A,P);const s=await zc(n.localStore,e,!0),a=new Ny(e,s.ds),u=a.ga(s.documents),l=dr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,l);Yc(n,t,d.ba);const p=new Oy(e,t,a);return n.xa.set(e,p),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),d.snapshot}async function Fy(n,e,t){const r=F(n),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(a=>!bi(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&wo(r.remoteStore,i.targetId),Ws(r,i.targetId)}).catch(gn)):(Ws(r,i.targetId),await zs(r.localStore,i.targetId,!0))}async function By(n,e){const t=F(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),wo(t.remoteStore,r.targetId))}async function jy(n,e,t){const r=Ky(n);try{const i=await function(a,u){const l=F(a),d=ce.now(),p=u.reduce((P,k)=>P.add(k.key),H());let E,A;return l.persistence.runTransaction("Locally write mutations","readwrite",P=>{let k=nt(),O=H();return l.hs.getEntries(P,p).next(C=>{k=C,k.forEach((q,j)=>{j.isValidDocument()||(O=O.add(q))})}).next(()=>l.localDocuments.getOverlayedDocuments(P,k)).next(C=>{E=C;const q=[];for(const j of u){const B=r_(j,E.get(j.key).overlayedDocument);B!=null&&q.push(new Pt(j.key,B,fl(B.value.mapValue),Ve.exists(!0)))}return l.mutationQueue.addMutationBatch(P,d,q,u)}).next(C=>{A=C;const q=C.applyToLocalDocumentSet(E,O);return l.documentOverlayCache.saveOverlays(P,C.batchId,q)})}).then(()=>({batchId:A.batchId,changes:Al(E)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,l){let d=a.qa[a.currentUser.toKey()];d||(d=new ee(W)),d=d.insert(u,l),a.qa[a.currentUser.toKey()]=d}(r,i.batchId,t),await pr(r,i.changes),await Oi(r.remoteStore)}catch(i){const s=So(i,"Failed to persist write");t.reject(s)}}async function rh(n,e){const t=F(n);try{const r=await Z_(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Ba.get(s);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?Q(a.Fa):i.removedDocuments.size>0&&(Q(a.Fa),a.Fa=!1))}),await pr(t,r,e)}catch(r){await gn(r)}}function Jc(n,e,t){const r=F(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.xa.forEach((s,a)=>{const u=a.view.ea(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const l=F(a);l.onlineState=u;let d=!1;l.queries.forEach((p,E)=>{for(const A of E.J_)A.ea(u)&&(d=!0)}),d&&Co(l)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qy(n,e,t){const r=F(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ba.get(e),s=i&&i.key;if(s){let a=new ee(L.comparator);a=a.insert(s,Ie.newNoDocument(s,U.min()));const u=H().add(s),l=new ki(U.min(),new Map,new ee(W),a,u);await rh(r,l),r.La=r.La.remove(s),r.Ba.delete(e),ko(r)}else await zs(r.localStore,e,!1).then(()=>Ws(r,e,t)).catch(gn)}async function $y(n,e){const t=F(n),r=e.batch.batchId;try{const i=await Y_(t.localStore,e);sh(t,r,null),ih(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await pr(t,i)}catch(i){await gn(i)}}async function zy(n,e,t){const r=F(n);try{const i=await function(a,u){const l=F(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,u).next(E=>(Q(E!==null),p=E.keys(),l.mutationQueue.removeMutationBatch(d,E))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);sh(r,e,t),ih(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await pr(r,i)}catch(i){await gn(i)}}function ih(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function sh(n,e,t){const r=F(n);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function Ws(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||oh(n,r)})}function oh(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(wo(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),ko(n))}function Yc(n,e,t){for(const r of t)r instanceof eh?(n.ka.addReference(r.key,e),Hy(n,r)):r instanceof th?(N("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||oh(n,r.key)):x()}function Hy(n,e){const t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(N("SyncEngine","New document in limbo: "+t),n.Na.add(r),ko(n))}function ko(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new L(Z.fromString(e)),r=n.Ka.next();n.Ba.set(r,new Vy(t)),n.La=n.La.insert(t,r),Kl(n.remoteStore,new ft(je(vl(t.path)),r,"TargetPurposeLimboResolution",Ii.oe))}}async function pr(n,e,t){const r=F(n),i=[],s=[],a=[];r.xa.isEmpty()||(r.xa.forEach((u,l)=>{a.push(r.Ua(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const E=d?!d.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,E?"current":"not-current")}if(d){i.push(d);const E=Io.zi(l.targetId,d);s.push(E)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(l,d){const p=F(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>b.forEach(d,A=>b.forEach(A.Wi,P=>p.persistence.referenceDelegate.addReference(E,A.targetId,P)).next(()=>b.forEach(A.Gi,P=>p.persistence.referenceDelegate.removeReference(E,A.targetId,P)))))}catch(E){if(!_n(E))throw E;N("LocalStore","Failed to update sequence numbers: "+E)}for(const E of d){const A=E.targetId;if(!E.fromCache){const P=p.us.get(A),k=P.snapshotVersion,O=P.withLastLimboFreeSnapshotVersion(k);p.us=p.us.insert(A,O)}}}(r.localStore,s))}async function Wy(n,e){const t=F(n);if(!t.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await zl(t.localStore,e);t.currentUser=e,function(s,a){s.Qa.forEach(u=>{u.forEach(l=>{l.reject(new V(S.CANCELLED,a))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pr(t,r.Ts)}}function Gy(n,e){const t=F(n),r=t.Ba.get(e);if(r&&r.Fa)return H().add(r.key);{let i=H();const s=t.Oa.get(e);if(!s)return i;for(const a of s){const u=t.xa.get(a);i=i.unionWith(u.view.fa)}return i}}function ah(n){const e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qy.bind(null,e),e.Ma.R_=Cy.bind(null,e.eventManager),e.Ma.Wa=ky.bind(null,e.eventManager),e}function Ky(n){const e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$y.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zy.bind(null,e),e}class mi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Di(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return J_(this.persistence,new Q_,e.initialUser,this.serializer)}ja(e){return new $l(To.ei,this.serializer)}za(e){return new iy}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mi.provider={build:()=>new mi};class Qy extends mi{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Q(this.persistence.referenceDelegate instanceof fi);const r=this.persistence.referenceDelegate.garbageCollector;return new V_(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Pe.withCacheSize(this.cacheSizeBytes):Pe.DEFAULT;return new $l(r=>fi.ei(r,t),this.serializer)}}class Gs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wy.bind(null,this.syncEngine),await Ay(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new by}()}createDatastore(e){const t=Di(e.databaseInfo.databaseId),r=function(s){return new cy(s)}(e.databaseInfo);return function(s,a,u,l){return new hy(s,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,u){return new fy(r,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Jc(this.syncEngine,t,0),function(){return Wc.p()?new Wc:new sy}())}createSyncEngine(e,t){return function(i,s,a,u,l,d,p){const E=new Ly(i,s,a,u,l,d);return p&&(E.$a=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=F(i);N("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await fr(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Gs.provider={build:()=>new Gs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):tt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Te.UNAUTHENTICATED,this.clientId=ll.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{N("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=So(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Is(n,e){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await zl(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Zc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Yy(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Gc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Gc(e.remoteStore,i)),n._onlineComponents=e}async function Yy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Is(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;on("Error using user provided cache. Falling back to memory cache: "+t),await Is(n,new mi)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Is(n,new Qy(void 0));return n._offlineComponents}async function ch(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Zc(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Zc(n,new Gs))),n._onlineComponents}function Zy(n){return ch(n).then(e=>e.syncEngine)}async function eE(n){const e=await ch(n),t=e.eventManager;return t.onListen=My.bind(null,e.syncEngine),t.onUnlisten=Fy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=xy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=By.bind(null,e.syncEngine),t}function tE(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,l,d){const p=new Xy({next:A=>{p.eu(),a.enqueueAndForget(()=>Sy(s,E)),A.fromCache&&l.source==="server"?d.reject(new V(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),E=new Dy(u,p,{includeMetadataChanges:!0,ua:!0});return Py(s,E)}(await eE(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(n,e,t){if(!t)throw new V(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function nE(n,e,t,r){if(e===!0&&r===!0)throw new V(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function tu(n){if(!L.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nu(n){if(L.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Do(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x()}function Bt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Do(n);throw new V(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ru({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ru(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cg;switch(r.type){case"firstParty":return new dg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=eu.get(t);r&&(N("ComponentProvider","Removing Datastore"),eu.delete(t),r.terminate())}(this),Promise.resolve()}}function rE(n,e,t,r={}){var i;const s=(n=Bt(n,Vi))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&on("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let u,l;if(typeof r.mockUserToken=="string")u=r.mockUserToken,l=Te.MOCK_USER;else{u=_u(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new V(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Te(d)}n._authCredentials=new ug(new ul(u,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Li(this.firestore,e,this._query)}}class Ne{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _t(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}}class _t extends Li{constructor(e,t,r){super(e,t,vl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new L(e))}withConverter(e){return new _t(this.firestore,e,this._path)}}function iE(n,e,...t){if(n=se(n),lh("collection","path",e),n instanceof Vi){const r=Z.fromString(e,...t);return nu(r),new _t(n,null,r)}{if(!(n instanceof Ne||n instanceof _t))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return nu(r),new _t(n.firestore,null,r)}}function sE(n,e,...t){if(n=se(n),arguments.length===1&&(e=ll.newId()),lh("doc","path",e),n instanceof Vi){const r=Z.fromString(e,...t);return tu(r),new Ne(n,null,new L(r))}{if(!(n instanceof Ne||n instanceof _t))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return tu(r),new Ne(n.firestore,n instanceof _t?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Wl(this,"async_queue_retry"),this.fu=()=>{const r=Ts();r&&N("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=Ts();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Ts();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new gt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!_n(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=Po.createAndSchedule(this,e,t,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&x()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class mr extends Vi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new iu,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new iu(e),this._firestoreClient=void 0,await e}}}function oE(n,e){const t=typeof n=="object"?n:Zs(),r=typeof n=="string"?n:e||"(default)",i=yi(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=pu("firestore");s&&rE(i,...s)}return i}function hh(n){if(n._terminated)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||aE(n),n._firestoreClient}function aE(n){var e,t,r;const i=n._freezeSettings(),s=function(u,l,d,p){return new Pg(u,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,uh(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Jy(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(u){const l=u?._online.build();return{_offline:u?._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fn(me.fromBase64String(e))}catch(t){throw new V(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fn(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=/^__.*__$/;class uE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Pt(e,this.data,this.fieldMask,t,this.fieldTransforms):new hr(e,this.data,t,this.fieldTransforms)}}class dh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Pt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function fh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Ui{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Ui(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return gi(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(fh(this.Mu)&&cE.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class lE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Di(e)}$u(e,t,r,i=!1){return new Ui({Mu:e,methodName:t,Ku:r,path:pe.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ph(n){const e=n._freezeSettings(),t=Di(n._databaseId);return new lE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function hE(n,e,t,r,i,s={}){const a=n.$u(s.merge||s.mergeFields?2:0,e,t,i);Lo("Data must be an object, but it was:",a,r);const u=mh(r,a);let l,d;if(s.merge)l=new ke(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const E of s.mergeFields){const A=Ks(e,E,t);if(!a.contains(A))throw new V(S.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);_h(p,A)||p.push(A)}l=new ke(p),d=a.fieldTransforms.filter(E=>l.covers(E.field))}else l=null,d=a.fieldTransforms;return new uE(new Se(u),l,d)}class Fi extends xi{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fi}}function dE(n,e,t){return new Ui({Mu:3,Ku:e.settings.Ku,methodName:n._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Vo extends xi{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=dE(this,e,!0),r=this.Uu.map(s=>gr(s,t)),i=new ln(r);return new Zg(e.path,i)}isEqual(e){return e instanceof Vo&&Xn(this.Uu,e.Uu)}}function fE(n,e,t,r){const i=n.$u(1,e,t);Lo("Data must be an object, but it was:",i,r);const s=[],a=Se.empty();bt(r,(l,d)=>{const p=Mo(e,l,t);d=se(d);const E=i.Bu(p);if(d instanceof Fi)s.push(p);else{const A=gr(d,E);A!=null&&(s.push(p),a.set(p,A))}});const u=new ke(s);return new dh(a,u,i.fieldTransforms)}function pE(n,e,t,r,i,s){const a=n.$u(1,e,t),u=[Ks(e,r,t)],l=[i];if(s.length%2!=0)throw new V(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<s.length;A+=2)u.push(Ks(e,s[A])),l.push(s[A+1]);const d=[],p=Se.empty();for(let A=u.length-1;A>=0;--A)if(!_h(d,u[A])){const P=u[A];let k=l[A];k=se(k);const O=a.Bu(P);if(k instanceof Fi)d.push(P);else{const C=gr(k,O);C!=null&&(d.push(P),p.set(P,C))}}const E=new ke(d);return new dh(p,E,a.fieldTransforms)}function gr(n,e){if(gh(n=se(n)))return Lo("Unsupported field value:",e,n),mh(n,e);if(n instanceof xi)return function(r,i){if(!fh(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const u of r){let l=gr(u,i.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ce.fromDate(r);return{timestampValue:di(i.serializer,s)}}if(r instanceof ce){const s=new ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:di(i.serializer,s)}}if(r instanceof No)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fn)return{bytesValue:Ml(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Eo(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Oo)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw u.qu("VectorValues must only contain numeric values.");return mo(u.serializer,l)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${Do(r)}`)}(n,e)}function mh(n,e){const t={};return hl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bt(n,(r,i)=>{const s=gr(i,e.Ou(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function gh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ce||n instanceof No||n instanceof fn||n instanceof Ne||n instanceof xi||n instanceof Oo)}function Lo(n,e,t){if(!gh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Do(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Ks(n,e,t){if((e=se(e))instanceof Mi)return e._internalPath;if(typeof e=="string")return Mo(n,e);throw gi("Field path arguments must be of type string or ",n,!1,void 0,t)}const mE=new RegExp("[~\\*/\\[\\]]");function Mo(n,e,t){if(e.search(mE)>=0)throw gi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Mi(...e.split("."))._internalPath}catch{throw gi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function gi(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new V(S.INVALID_ARGUMENT,u+n+l)}function _h(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Eh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gE extends yh{data(){return super.data()}}function Eh(n,e){return typeof e=="string"?Mo(n,e):e instanceof Mi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yE{convertValue(e,t="none"){switch(It(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return bt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ie(a.doubleValue));return new Oo(s)}convertGeoPoint(e){return new No(ie(e.latitude),ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ai(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(tr(e));default:return null}}convertTimestamp(e){const t=vt(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Z.fromString(e);Q(ql(r));const i=new nr(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(t)||tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vE extends yh{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Eh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Zr extends vE{data(e={}){return super.data(e)}}class TE{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new jr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Zr(this._firestore,this._userDataWriter,r.key,r,new jr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const l=new Zr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new jr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const l=new Zr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new jr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:IE(u.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function IE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}class wE extends yE{constructor(e){super(),this.firestore=e}convertBytes(e){return new fn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}}function AE(n){n=Bt(n,Li);const e=Bt(n.firestore,mr),t=hh(e),r=new wE(e);return _E(n._query),tE(t,n._query).then(i=>new TE(e,r,n,i))}function Gv(n,e,t,...r){n=Bt(n,Ne);const i=Bt(n.firestore,mr),s=ph(i);let a;return a=typeof(e=se(e))=="string"||e instanceof Mi?pE(s,"updateDoc",n._key,e,t,r):fE(s,"updateDoc",n._key,e),xo(i,[a.toMutation(n._key,Ve.exists(!0))])}function Kv(n){return xo(Bt(n.firestore,mr),[new go(n._key,Ve.none())])}function Qv(n,e){const t=Bt(n.firestore,mr),r=sE(n),i=EE(n.converter,e);return xo(t,[hE(ph(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ve.exists(!1))]).then(()=>r)}function xo(n,e){return function(r,i){const s=new gt;return r.asyncQueue.enqueueAndForget(async()=>jy(await Zy(r),i,s)),s.promise}(hh(n),e)}function Xv(...n){return new Vo("arrayUnion",n)}(function(e,t=!0){(function(i){mn=i})(qt),Mt(new yt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),u=new mr(new lg(r.getProvider("auth-internal")),new pg(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nr(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Ue(Tc,"4.7.5",e),Ue(Tc,"4.7.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="firebasestorage.googleapis.com",Th="storageBucket",RE=2*60*1e3,bE=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends He{constructor(e,t,r=0){super(ws(e),`Firebase Storage: ${t} (${ws(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,re.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ws(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ne;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ne||(ne={}));function ws(n){return"storage/"+n}function Uo(){const n="An unknown error occurred, please check the error payload for server response.";return new re(ne.UNKNOWN,n)}function PE(n){return new re(ne.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function SE(n){return new re(ne.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function CE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new re(ne.UNAUTHENTICATED,n)}function kE(){return new re(ne.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function DE(n){return new re(ne.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function NE(){return new re(ne.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function OE(){return new re(ne.CANCELED,"User canceled the upload/download.")}function VE(n){return new re(ne.INVALID_URL,"Invalid URL '"+n+"'.")}function LE(n){return new re(ne.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ME(){return new re(ne.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Th+"' property when initializing the app?")}function xE(){return new re(ne.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function UE(){return new re(ne.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function FE(n){return new re(ne.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qs(n){return new re(ne.INVALID_ARGUMENT,n)}function Ih(){return new re(ne.APP_DELETED,"The Firebase app was deleted.")}function BE(n){return new re(ne.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Qn(n,e){return new re(ne.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Un(n){throw new re(ne.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=De.makeFromUrl(e,t)}catch{return new De(e,"")}if(r.path==="")return r;throw LE(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+i+a,"i"),l={bucket:1,path:3};function d($){$.path_=decodeURIComponent($.path)}const p="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",P=new RegExp(`^https?://${E}/${p}/b/${i}/o${A}`,"i"),k={bucket:1,path:3},O=t===vh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",q=new RegExp(`^https?://${O}/${i}/${C}`,"i"),B=[{regex:u,indices:l,postModify:s},{regex:P,indices:k,postModify:d},{regex:q,indices:{bucket:1,path:2},postModify:d}];for(let $=0;$<B.length;$++){const he=B[$],J=he.regex.exec(e);if(J){const v=J[he.indices.bucket];let m=J[he.indices.path];m||(m=""),r=new De(v,m),he.postModify(r);break}}if(r==null)throw VE(e);return r}}class jE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(n,e,t){let r=1,i=null,s=null,a=!1,u=0;function l(){return u===2}let d=!1;function p(...C){d||(d=!0,e.apply(null,C))}function E(C){i=setTimeout(()=>{i=null,n(P,l())},C)}function A(){s&&clearTimeout(s)}function P(C,...q){if(d){A();return}if(C){A(),p.call(null,C,...q);return}if(l()||a){A(),p.call(null,C,...q);return}r<64&&(r*=2);let B;u===1?(u=2,B=0):B=(r+Math.random())*1e3,E(B)}let k=!1;function O(C){k||(k=!0,A(),!d&&(i!==null?(C||(u=2),clearTimeout(i),E(0)):C||(u=1)))}return E(0),s=setTimeout(()=>{a=!0,O(!0)},t),O}function $E(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(n){return n!==void 0}function HE(n){return typeof n=="object"&&!Array.isArray(n)}function Fo(n){return typeof n=="string"||n instanceof String}function su(n){return Bo()&&n instanceof Blob}function Bo(){return typeof Blob<"u"}function ou(n,e,t,r){if(r<e)throw Qs(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Qs(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function wh(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Lt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Lt||(Lt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t,r,i,s,a,u,l,d,p,E,A=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=E,this.retry=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,k)=>{this.resolve_=P,this.reject_=k,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new qr(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=u=>{const l=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const u=s.getErrorCode()===Lt.NO_ERROR,l=s.getStatus();if(!u||WE(l,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===Lt.ABORT;r(!1,new qr(!1,null,p));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new qr(d,s))})},t=(r,i)=>{const s=this.resolve_,a=this.reject_,u=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(u,u.getResponse());zE(l)?s(l):s()}catch(l){a(l)}else if(u!==null){const l=Uo();l.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,l)):a(l)}else if(i.canceled){const l=this.appDelete_?Ih():OE();a(l)}else{const l=NE();a(l)}};this.canceled_?t(!1,new qr(!1,null,!0)):this.backoffId_=qE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$E(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qr{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function KE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function QE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function JE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function YE(n,e,t,r,i,s,a=!0){const u=wh(n.urlParams),l=n.url+u,d=Object.assign({},n.headers);return XE(d,e),KE(d,t),QE(d,s),JE(d,r),new GE(l,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ev(...n){const e=ZE();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Bo())return new Blob(n);throw new re(ne.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function tv(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(n){if(typeof atob>"u")throw FE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class As{constructor(e,t){this.data=e,this.contentType=t||null}}function rv(n,e){switch(n){case xe.RAW:return new As(Ah(e));case xe.BASE64:case xe.BASE64URL:return new As(Rh(n,e));case xe.DATA_URL:return new As(sv(e),ov(e))}throw Uo()}function Ah(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,a=n.charCodeAt(++t);r=65536|(s&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function iv(n){let e;try{e=decodeURIComponent(n)}catch{throw Qn(xe.DATA_URL,"Malformed data URL.")}return Ah(e)}function Rh(n,e){switch(n){case xe.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Qn(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case xe.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Qn(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=nv(e)}catch(i){throw i.message.includes("polyfill")?i:Qn(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class bh{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Qn(xe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=av(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function sv(n){const e=new bh(n);return e.base64?Rh(xe.BASE64,e.rest):iv(e.rest)}function ov(n){return new bh(n).contentType}function av(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t){let r=0,i="";su(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(su(this.data_)){const r=this.data_,i=tv(r,e,t);return i===null?null:new dt(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new dt(r,!0)}}static getBlob(...e){if(Bo()){const t=e.map(r=>r instanceof dt?r.data_:r);return new dt(ev.apply(null,t))}else{const t=e.map(a=>Fo(a)?rv(xe.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(a=>{for(let u=0;u<a.length;u++)i[s++]=a[u]}),new dt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n){let e;try{e=JSON.parse(n)}catch{return null}return HE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function uv(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Sh(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(n,e){return e}class be{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||lv}}let $r=null;function hv(n){return!Fo(n)||n.length<2?n:Sh(n)}function Ch(){if($r)return $r;const n=[];n.push(new be("bucket")),n.push(new be("generation")),n.push(new be("metageneration")),n.push(new be("name","fullPath",!0));function e(s,a){return hv(a)}const t=new be("name");t.xform=e,n.push(t);function r(s,a){return a!==void 0?Number(a):a}const i=new be("size");return i.xform=r,n.push(i),n.push(new be("timeCreated")),n.push(new be("updated")),n.push(new be("md5Hash",null,!0)),n.push(new be("cacheControl",null,!0)),n.push(new be("contentDisposition",null,!0)),n.push(new be("contentEncoding",null,!0)),n.push(new be("contentLanguage",null,!0)),n.push(new be("contentType",null,!0)),n.push(new be("metadata","customMetadata",!0)),$r=n,$r}function dv(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new De(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function fv(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const a=t[s];r[a.local]=a.xform(r,e[a.server])}return dv(r,n),r}function kh(n,e,t){const r=Ph(e);return r===null?null:fv(n,r,t)}function pv(n,e,t,r){const i=Ph(e);if(i===null||!Fo(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(d=>{const p=n.bucket,E=n.fullPath,A="/b/"+a(p)+"/o/"+a(E),P=Bi(A,t,r),k=wh({alt:"media",token:d});return P+k})[0]}function mv(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class jo{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(n){if(!n)throw Uo()}function gv(n,e){function t(r,i){const s=kh(n,i,e);return Dh(s!==null),s}return t}function _v(n,e){function t(r,i){const s=kh(n,i,e);return Dh(s!==null),pv(s,i,n.host,n._protocol)}return t}function Nh(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=kE():i=CE():t.getStatus()===402?i=SE(n.bucket):t.getStatus()===403?i=DE(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Oh(n){const e=Nh(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=PE(n.path)),s.serverResponse=i.serverResponse,s}return t}function yv(n,e,t){const r=e.fullServerUrl(),i=Bi(r,n.host,n._protocol),s="GET",a=n.maxOperationRetryTime,u=new jo(i,s,_v(n,t),a);return u.errorHandler=Oh(e),u}function Ev(n,e){const t=e.fullServerUrl(),r=Bi(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function a(l,d){}const u=new jo(r,i,a,s);return u.successCodes=[200,204],u.errorHandler=Oh(e),u}function vv(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Tv(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=vv(null,e)),r}function Iv(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let B="";for(let $=0;$<2;$++)B=B+Math.random().toString().slice(2);return B}const l=u();a["Content-Type"]="multipart/related; boundary="+l;const d=Tv(e,r,i),p=mv(d,t),E="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,A=`\r
--`+l+"--",P=dt.getBlob(E,r,A);if(P===null)throw xE();const k={name:d.fullPath},O=Bi(s,n.host,n._protocol),C="POST",q=n.maxUploadRetryTime,j=new jo(O,C,gv(n,t),q);return j.urlParams=k,j.headers=a,j.body=P.uploadData(),j.errorHandler=Nh(e),j}class wv{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Lt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Lt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Lt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw Un("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Un("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Un("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Un("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Un("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Av extends wv{initXhr(){this.xhr_.responseType="text"}}function qo(){return new Av}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){this._service=e,t instanceof De?this._location=t:this._location=De.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new jt(e,t)}get root(){const e=new De(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Sh(this._location.path)}get storage(){return this._service}get parent(){const e=cv(this._location.path);if(e===null)return null;const t=new De(this._location.bucket,e);return new jt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw BE(e)}}function Rv(n,e,t){n._throwIfRoot("uploadBytes");const r=Iv(n.storage,n._location,Ch(),new dt(e,!0),t);return n.storage.makeRequestWithTokens(r,qo).then(i=>({metadata:i,ref:n}))}function bv(n){n._throwIfRoot("getDownloadURL");const e=yv(n.storage,n._location,Ch());return n.storage.makeRequestWithTokens(e,qo).then(t=>{if(t===null)throw UE();return t})}function Pv(n){n._throwIfRoot("deleteObject");const e=Ev(n.storage,n._location);return n.storage.makeRequestWithTokens(e,qo)}function Sv(n,e){const t=uv(n._location.path,e),r=new De(n._location.bucket,t);return new jt(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(n){return/^[A-Za-z]+:\/\//.test(n)}function kv(n,e){return new jt(n,e)}function Vh(n,e){if(n instanceof $o){const t=n;if(t._bucket==null)throw ME();const r=new jt(t,t._bucket);return e!=null?Vh(r,e):r}else return e!==void 0?Sv(n,e):n}function Dv(n,e){if(e&&Cv(e)){if(n instanceof $o)return kv(n,e);throw Qs("To use ref(service, url), the first argument must be a Storage instance.")}else return Vh(n,e)}function au(n,e){const t=e?.[Th];return t==null?null:De.makeFromBucketSpec(t,n)}function Nv(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:_u(i,n.app.options.projectId))}class $o{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=vh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RE,this._maxUploadRetryTime=bE,this._requests=new Set,i!=null?this._bucket=De.makeFromBucketSpec(i,this._host):this._bucket=au(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=De.makeFromBucketSpec(this._url,e):this._bucket=au(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ou("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ou("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new jt(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new jE(Ih());{const a=YE(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const cu="@firebase/storage",uu="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="storage";function Jv(n,e,t){return n=se(n),Rv(n,e,t)}function Yv(n){return n=se(n),bv(n)}function Zv(n){return n=se(n),Pv(n)}function eT(n,e){return n=se(n),Dv(n,e)}function Ov(n=Zs(),e){n=se(n);const r=yi(n,Lh).getImmediate({identifier:e}),i=pu("storage");return i&&Vv(r,...i),r}function Vv(n,e,t,r={}){Nv(n,e,t,r)}function Lv(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new $o(t,r,i,e,qt)}function Mv(){Mt(new yt(Lh,Lv,"PUBLIC").setMultipleInstances(!0)),Ue(cu,uu,""),Ue(cu,uu,"esm2017")}Mv();const Mh={apiKey:"AIzaSyBoxOrbSzHzbULXC1XsOms26ud7xrQZ-hU",authDomain:"dreamy-tail.firebaseapp.com",projectId:"dreamy-tail",storageBucket:"dreamy-tail.firebasestorage.app",messagingSenderId:"958903230334",appId:"1:958903230334:web:484d61765f20c1fbcbdd2f",measurementId:"G-SVBT9JPP4F"},zo=Ys(Mh);Ys(Mh,"Secondary");const xv=ig(zo),Uv=oE(zo),tT=Ov(zo);class Fv{logOutBtnClass;uid;constructor(){this.logOutBtnClass=".log-out__btn",this.uid=this.getCookie("UID"),this.init()}init(){if(document.querySelector(this.logOutBtnClass)){const e=document.querySelector(this.logOutBtnClass);this.uid&&e&&e?.addEventListener("click",()=>{this.logOut()})}}getCookie(e){const r=`; ${document.cookie}`.split(`; ${e}=`);if(r.length===2)return r.pop()?.split(";").shift()}deleteCookie(e){document.cookie=e+"=; Max-Age=-99999999;"}logOut(){Gp(xv).then(()=>{this.deleteCookie("UID"),window.location.href="/Dreamy-Tail-doplom/index.html"}).catch(e=>{console.error("Sign Out Error",e)})}}class Bv{authBtnClass;regBtnClass;cabinetBtnClass;logOutBtnClass;uid;constructor(){this.authBtnClass=".authorization__btn",this.regBtnClass=".registration__btn",this.cabinetBtnClass=".cabinet__btn",this.logOutBtnClass=".log-out__btn",this.uid=this.getCookie("UID"),this.init()}init(){const e=document.querySelectorAll(this.authBtnClass),t=document.querySelectorAll(this.regBtnClass),r=document.querySelectorAll(this.cabinetBtnClass),i=document.querySelectorAll(this.logOutBtnClass);this.uid?(t.forEach(s=>s.setAttribute("style","display: none")),e.forEach(s=>s.setAttribute("style","display: none")),r.forEach(s=>s.setAttribute("style","display: flex")),i.forEach(s=>s.setAttribute("style","display: flex")),this.linkCabinet(r)):(r.forEach(s=>s.setAttribute("style","display: none")),i.forEach(s=>s.setAttribute("style","display: none")))}getCookie(e){const r=`; ${document.cookie}`.split(`; ${e}=`);if(r.length===2)return r.pop()?.split(";").shift()}async fetchUsers(){const e=await AE(iE(Uv,"users")),t=[];return e.forEach(r=>{t.push({id:r.id,uid:r.data().uid,role:r.data().role})}),t}async linkCabinet(e){const r=(await this.fetchUsers()).find(i=>i.uid===this.uid);r&&e.forEach(i=>{r.role==="admin"?i.href="/cabinet-admin.html?tab=%23main-info":i.href="/cabinet-user.html?tab=%23main-info"})}}class jv{headerBurger;headerMenu;burgerBackdrop;buttonAuthorization;constructor(){this.headerBurger=document.querySelector(".header__burger"),this.headerMenu=document.querySelector(".header__menu"),this.burgerBackdrop=document.querySelector(".burger__backdrop"),this.buttonAuthorization=document.querySelector(".authorization__btn"),this.init()}toggleBurger(){this.headerBurger&&this.headerMenu&&this.burgerBackdrop&&this.buttonAuthorization&&(this.headerBurger.classList.toggle("header__burger_active"),this.burgerBackdrop.classList.toggle("burger__backdrop_active"),this.headerMenu.classList.toggle("header__menu_active"),this.buttonAuthorization.classList.toggle("authorization__btn_active"),document.body.classList.toggle("scroll-lock"))}init(){this.headerBurger&&this.burgerBackdrop&&(this.headerBurger.addEventListener("click",()=>this.toggleBurger()),this.burgerBackdrop.addEventListener("click",()=>this.toggleBurger()))}}document.addEventListener("DOMContentLoaded",async()=>{new jv,new Bv,new Fv});export{Qv as a,qv as b,iE as c,Uv as d,xv as e,AE as f,ig as g,sE as h,Xv as i,Kv as j,tT as k,Zv as l,Ov as m,Jv as n,Yv as o,eT as r,$v as s,Gv as u};
